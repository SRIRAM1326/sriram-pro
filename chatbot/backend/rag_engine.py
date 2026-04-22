import os
from dotenv import load_dotenv
from langchain_nvidia_ai_endpoints import ChatNVIDIA
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain_core.documents import Document
from operator import itemgetter
import hashlib
import logging
import json
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class RAGEngine:
    def __init__(self, domain):
        self.domain = domain
        self.api_key = os.getenv("NVIDIA_API_KEY")
        
        # Use a safe hash for the directory name to avoid Windows file system errors
        domain_hash = hashlib.md5(domain.encode()).hexdigest()
        
        # Use absolute path for reliability on Windows
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.db_dir = os.path.abspath(os.path.join(base_dir, "data", "faiss", domain_hash))
        
        # Ensure the directory exists
        os.makedirs(os.path.dirname(self.db_dir), exist_ok=True)
        
        # Initialize NVIDIA AI Endpoints - Fallback Chain
        self.nvidia_api_key = os.getenv("NVIDIA_API_KEY")
        self.nvidia_model = os.getenv("NVIDIA_MODEL", "meta/llama-3.1-70b-instruct")
        fallback_str = os.getenv("NVIDIA_FALLBACK_MODELS", "nvidia/llama-3.1-nemotron-70b-instruct,qwen/qwen2.5-72b-instruct,meta/llama-3.1-8b-instruct")
        self.models_to_try = [self.nvidia_model] + [m.strip() for m in fallback_str.split(",") if m.strip()]
        
        # We'll initialize the LLM dynamically in each request or keep a cache
        self.llm_cache = {}
        
        # Use HuggingFace embeddings as a free local alternative to NVIDIA
        self.embeddings = HuggingFaceEmbeddings(
            model_name="all-MiniLM-L6-v2"
        )
        
        self.vector_store = None
        if os.path.exists(self.db_dir):
            self.load_vector_store()

    def _get_llm(self, model_name):
        if model_name not in self.llm_cache:
            logger.info(f"Initializing model: {model_name}")
            self.llm_cache[model_name] = ChatNVIDIA(
                model=model_name,
                api_key=self.nvidia_api_key,
                temperature=0.7,
                max_tokens=4096,
                top_p=0.8
            )
        return self.llm_cache[model_name]

    def load_vector_store(self):
        logger.info(f"Loading existing vector store for {self.domain}")
        self.vector_store = FAISS.load_local(
            self.db_dir, 
            self.embeddings,
            allow_dangerous_deserialization=True
        )

    @retry(
        stop=stop_after_attempt(5),
        wait=wait_exponential(multiplier=1, min=2, max=10),
        retry=retry_if_exception(lambda e: any(err in str(e).lower() for err in ["502", "503", "504", "bad gateway", "service unavailable"])),
        before_sleep=lambda retry_state: logger.info(f"Retrying embedding call (attempt {retry_state.attempt_number})...")
    )
    def build_vector_store(self, pages_content):
        logger.info(f"Building vector store for {self.domain} with {len(pages_content)} pages")
        
        documents = []
        for page in pages_content:
            documents.append(Document(
                page_content=page["text"],
                metadata={"source": page["url"], "title": page["title"]}
            ))
        
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        # Filter out empty docs
        valid_docs = [doc for doc in documents if doc.page_content.strip()]
        if not valid_docs:
            logger.warning("No valid text content found to index.")
            return 0
            
        splits = text_splitter.split_documents(valid_docs)
        
        self.vector_store = FAISS.from_documents(
            documents=splits,
            embedding=self.embeddings
        )
        self.vector_store.save_local(self.db_dir)
        
        return len(splits)

    def get_answer(self, question, use_reasoning=True):
        if not self.vector_store:
            return {"answer": "Knowledge base not yet initialized. Please crawl first.", "sources": []}
        
        retriever = self.vector_store.as_retriever(search_kwargs={"k": 4})
        
        template = """You are a helpful website assistant. Answer the question based ONLY on the provided context. 
If the answer is not in the context, say "I'm sorry, I don't have that information based on the website's content."

Context:
{context}

Question: {question}

Answer:"""
        prompt = ChatPromptTemplate.from_template(template)
        
        last_error = None
        
        for model_name in self.models_to_try:
            try:
                llm = self._get_llm(model_name)
                
                # Build the chain using LCEL
                def format_docs(docs):
                    return "\n\n".join(doc.page_content for doc in docs)

                chain = (
                    RunnablePassthrough.assign(context=itemgetter("question") | retriever)
                    | {
                        "answer": RunnablePassthrough.assign(context=(lambda x: format_docs(x["context"]))) | prompt | llm,
                        "context": itemgetter("context")
                    }
                )

                logger.info(f"Invoking NVIDIA model ({model_name}) for: {question}")
                response = chain.invoke({"question": question})
                logger.info(f"NVIDIA request successful with {model_name}.")
                
                # Extract reasoning if available
                reasoning = None
                ai_message = response["answer"]
                
                if hasattr(ai_message, "additional_kwargs"):
                    reasoning = ai_message.additional_kwargs.get("reasoning")
                
                answer = ai_message.content
                sources = list(set([doc.metadata.get("source", "Unknown") for doc in response["context"]]))
                
                return {
                    "answer": answer,
                    "sources": sources,
                    "reasoning": reasoning
                }
                
            except Exception as e:
                error_str = str(e).lower()
                is_transient = any(err in error_str for err in ["502", "503", "504", "bad gateway", "service unavailable", "rate limit", "429", "404", "not found"])
                
                if is_transient and model_name != self.models_to_try[-1]:
                    logger.warning(f"Model {model_name} failed with transient error: {e}. Trying next model in chain...")
                    last_error = e
                    continue
                else:
                    logger.error(f"RAG Error with model {model_name}: {e}")
                    return {"answer": f"Error generating answer: {str(e)}", "sources": [], "reasoning": None}

        return {"answer": f"All models in the fallback chain failed. Last error: {str(last_error)}", "sources": [], "reasoning": None}

if __name__ == "__main__":
    # Test stub
    pass
