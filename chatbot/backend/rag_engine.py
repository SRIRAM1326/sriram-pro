import os
from dotenv import load_dotenv
from langchain_nvidia_ai_endpoints import ChatNVIDIA, NVIDIAEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain_core.documents import Document
from operator import itemgetter
import hashlib
import logging

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
        
        # Initialize NVIDIA AI Endpoints
        self.llm = ChatNVIDIA(
            model="moonshotai/kimi-k2-instruct",
            api_key=self.api_key,
            temperature=0.6,
            top_p=0.9,
            max_tokens=4096,
        )
        
        self.embeddings = NVIDIAEmbeddings(
            model="nvidia/nv-embedqa-e5-v5", 
            api_key=self.api_key
        )
        
        self.vector_store = None
        if os.path.exists(self.db_dir):
            self.load_vector_store()

    def load_vector_store(self):
        logger.info(f"Loading existing vector store for {self.domain}")
        self.vector_store = FAISS.load_local(
            self.db_dir, 
            self.embeddings,
            allow_dangerous_deserialization=True
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

    def get_answer(self, question):
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

        # Build the chain using LCEL
        def format_docs(docs):
            return "\n\n".join(doc.page_content for doc in docs)

        rag_chain_from_docs = (
            RunnablePassthrough.assign(context=(lambda x: format_docs(x["context"])))
            | prompt
            | self.llm
            | StrOutputParser()
        )

        rag_chain_with_source = RunnablePassthrough.assign(context=itemgetter("question") | retriever) | RunnablePassthrough.assign(answer=rag_chain_from_docs)

        try:
            response = rag_chain_with_source.invoke({"question": question})
            
            answer = response["answer"]
            sources = list(set([doc.metadata.get("source", "Unknown") for doc in response["context"]]))
            
            return {
                "answer": answer,
                "sources": sources
            }
        except Exception as e:
            logger.error(f"RAG Error: {e}")
            return {"answer": f"Error generating answer: {str(e)}", "sources": []}

if __name__ == "__main__":
    # Test stub
    pass
