from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import List, Optional
import os
import uvicorn
from crawler import WebsiteCrawler
from rag_engine import RAGEngine
from urllib.parse import urlparse

app = FastAPI(title="Website RAG Chatbot API")

# Enable CORS for the widget
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files (the built widget bundle)
static_dir = os.path.join(os.path.dirname(__file__), "static")
if not os.path.exists(static_dir):
    os.makedirs(static_dir, exist_ok=True)

app.mount("/static", StaticFiles(directory=static_dir), name="static")

@app.get("/")
async def root():
    return {"message": "Universal RAG Chatbot API is running. Check /docs for API documentation."}

class ChatRequest(BaseModel):
    website_url: str
    question: str

class CrawlRequest(BaseModel):
    website_url: str
    max_pages: Optional[int] = 100

# Simple in-memory status tracker
# In production, use Redis or a Database
indexing_status = {}

def process_website(website_url: str, max_pages: int):
    domain = urlparse(website_url).netloc.replace(":", "_")
    indexing_status[domain] = "crawling"
    
    try:
        crawler = WebsiteCrawler(website_url, max_pages=max_pages)
        pages = crawler.crawl()
        
        indexing_status[domain] = "indexing"
        engine = RAGEngine(domain)
        chunks = engine.build_vector_store(pages)
        
        indexing_status[domain] = "ready"
        print(f"Index ready for {domain} with {chunks} chunks.")
    except Exception as e:
        indexing_status[domain] = f"error: {str(e)}"
        print(f"Error processing {domain}: {e}")

@app.post("/crawl")
async def start_crawl(req: CrawlRequest, background_tasks: BackgroundTasks):
    domain = urlparse(req.website_url).netloc.replace(":", "_")
    if not domain:
        raise HTTPException(status_code=400, detail="Invalid URL")
    
    if indexing_status.get(domain) in ["crawling", "indexing"]:
        return {"status": "already_processing", "domain": domain}
    
    background_tasks.add_task(process_website, req.website_url, req.max_pages)
    return {"status": "started", "domain": domain}

@app.get("/status/{domain}")
async def get_status(domain: str):
    sanitized_domain = domain.replace(":", "_")
    return {"status": indexing_status.get(sanitized_domain, "unknown")}

@app.post("/chat")
async def chat(req: ChatRequest):
    print(f"Received chat request for {req.website_url}: {req.question}")
    domain = urlparse(req.website_url).netloc.replace(":", "_")
    if not domain:
        raise HTTPException(status_code=400, detail="Invalid URL")
    
    # Check status
    current_status = indexing_status.get(domain)
    if current_status != "ready":
        # Check if we should auto-trigger crawl
        if not current_status:
             return {"answer": "I haven't indexed this website yet. Please trigger a crawl first.", "status": "not_indexed"}
        return {"answer": f"I'm still processing this website (status: {current_status}). Please wait.", "status": current_status}
    
    try:
        engine = RAGEngine(domain)
        result = engine.get_answer(req.question)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
