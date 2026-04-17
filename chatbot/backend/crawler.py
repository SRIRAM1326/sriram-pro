import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import logging
import re

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class WebsiteCrawler:
    def __init__(self, base_url, max_pages=100):
        self.base_url = base_url.rstrip("/")
        self.max_pages = max_pages
        self.visited_urls = set()
        self.to_visit = [self.base_url]
        self.pages_content = []

    def is_valid_url(self, url):
        parsed = urlparse(url)
        # Only crawl same domain
        if parsed.netloc != urlparse(self.base_url).netloc:
            return False
        
        # Avoid common junk paths
        junk_patterns = [
            r"/cart", r"/checkout", r"/login", r"/register", 
            r"/wp-admin", r"/api/", r"\?", r"\.pdf$", r"\.jpg$", 
            r"\.png$", r"\.zip$", r"\.js$", r"\.css$"
        ]
        for pattern in junk_patterns:
            if re.search(pattern, url, re.IGNORECASE):
                return False
        return True

    def get_links_from_sitemap(self):
        sitemap_url = f"{self.base_url}/sitemap.xml"
        try:
            resp = requests.get(sitemap_url, timeout=10)
            if resp.status_code == 200:
                soup = BeautifulSoup(resp.content, "xml")
                links = [loc.text for loc in soup.find_all("loc")]
                logger.info(f"Found {len(links)} links in sitemap.")
                return [l for l in links if self.is_valid_url(l)]
        except Exception as e:
            logger.warning(f"Sitemap check failed: {e}")
        return []

    def crawl(self):
        # Try sitemap first
        sitemap_links = self.get_links_from_sitemap()
        if sitemap_links:
            self.to_visit = sitemap_links[:self.max_pages]
        
        while self.to_visit and len(self.visited_urls) < self.max_pages:
            url = self.to_visit.pop(0)
            if url in self.visited_urls:
                continue
            
            try:
                logger.info(f"Crawling: {url}")
                resp = requests.get(url, timeout=10)
                if resp.status_code != 200:
                    continue
                
                self.visited_urls.add(url)
                soup = BeautifulSoup(resp.content, "html.parser")
                
                # Extract text
                # Remove script and style elements
                for script_or_style in soup(["script", "style"]):
                    script_or_style.decompose()
                
                title = soup.title.string if soup.title else url
                text = soup.get_text(separator="\n", strip=True)
                
                self.pages_content.append({
                    "url": url,
                    "title": title,
                    "text": text
                })
                
                # Find internal links if no sitemap was used or sitemap was insufficient
                if not sitemap_links:
                    for a in soup.find_all("a", href=True):
                        link = urljoin(url, a["href"]).split("#")[0].rstrip("/")
                        if self.is_valid_url(link) and link not in self.visited_urls:
                            self.to_visit.append(link)
                            
            except Exception as e:
                logger.error(f"Failed to crawl {url}: {e}")
        
        return self.pages_content

if __name__ == "__main__":
    # Test
    crawler = WebsiteCrawler("https://python.org", max_pages=5)
    results = crawler.crawl()
    for res in results:
        print(f"Title: {res['title']} | URL: {res['url']} | Text Length: {len(res['text'])}")
