"""
CDP Browser Manager for RuangTI Web Search.
Auto-start, health check, and auto-restart Chrome/Edge with remote debugging.
Direct CDP WebSocket connection - no MCP dependency.

v2.0 — Smart & Dynamic Multi-Source Search Engine
  - OpenAlex Academic API (primary, 300M+ peer-reviewed papers)
  - DuckDuckGo HTML Scraper (secondary web)
  - Brave Search API fallback (tertiary, if DDG fails)
  - Global timeout protection per pipeline
  - Smart content extraction with proper BeautifulSoup selectors
"""

import asyncio
import json
import os
import re
import subprocess
import sys
import logging
from typing import Optional, Dict, List
from urllib.parse import quote_plus, urlparse, unquote

logger = logging.getLogger(__name__)

CDP_PORT = 9222
CHROME_USER_DATA_DIR = os.path.join(os.path.expanduser("~"), ".ruangti-cdp-profile")

# Brave Search API key (optional fallback — set in .env)
BRAVE_SEARCH_API_KEY = os.getenv("BRAVE_SEARCH_API_KEY", "")


class CDPBrowserManager:
    """Manages a local Chrome/Edge instance via CDP for web search."""

    def __init__(self, port: int = CDP_PORT):
        self.port = port
        self.process: Optional[subprocess.Popen] = None
        self.ws_url: Optional[str] = None
        self._lock = asyncio.Lock()

    async def ensure_running(self) -> bool:
        """Ensure browser is running. Auto-start if not. Returns True if healthy."""
        async with self._lock:
            if self.process and self.process.poll() is None:
                if await self._health_check():
                    return True
                else:
                    logger.warning("CDP browser unhealthy, restarting...")
                    await self._kill()

            if await self._health_check():
                logger.info(f"Connected to existing CDP browser on port {self.port}")
                return True

            return await self._start_browser()

    async def _health_check(self) -> bool:
        """Check if CDP endpoint is responsive."""
        try:
            import httpx
            async with httpx.AsyncClient(timeout=3.0) as client:
                resp = await client.get(f"http://127.0.0.1:{self.port}/json/version")
                if resp.status_code == 200:
                    data = resp.json()
                    self.ws_url = data.get("webSocketDebuggerUrl")
                    return True
        except Exception:
            pass
        return False

    async def _start_browser(self) -> bool:
        """Start Chrome/Edge with remote debugging enabled."""
        chrome_paths = [
            r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
            r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
            r"C:\Program Files\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
            "/usr/bin/google-chrome",
            "/usr/bin/chromium-browser",
            "/usr/bin/chromium",
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
            "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
        ]

        browser_exe = None
        for p in chrome_paths:
            if os.path.exists(p):
                browser_exe = p
                break

        if not browser_exe:
            logger.error("No Chrome/Edge found on system.")
            return False

        os.makedirs(CHROME_USER_DATA_DIR, exist_ok=True)

        cmd = [
            browser_exe,
            f"--remote-debugging-port={self.port}",
            f"--user-data-dir={CHROME_USER_DATA_DIR}",
            "--no-first-run",
            "--no-default-browser-check",
            "--disable-background-timer-throttling",
            "--disable-extensions",
            "--headless=new",
            "--disable-gpu",
            "about:blank",
        ]

        try:
            creation_flags = 0
            if sys.platform == "win32":
                creation_flags = subprocess.CREATE_NO_WINDOW

            self.process = subprocess.Popen(
                cmd,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                creationflags=creation_flags,
            )

            for _ in range(20):
                await asyncio.sleep(0.5)
                if await self._health_check():
                    logger.info(f"CDP browser started on port {self.port} (PID: {self.process.pid})")
                    return True

            logger.error("CDP browser failed to start within timeout")
            await self._kill()
            return False

        except Exception as e:
            logger.error(f"Failed to start CDP browser: {e}")
            return False

    async def _kill(self):
        """Kill the managed browser process."""
        if self.process:
            try:
                self.process.terminate()
                await asyncio.sleep(1)
                if self.process.poll() is None:
                    self.process.kill()
            except Exception:
                pass
            self.process = None
        self.ws_url = None

    async def _get_page_ws(self) -> Optional[str]:
        """Get WebSocket URL for first available page target."""
        try:
            import httpx
            async with httpx.AsyncClient(timeout=5.0) as client:
                resp = await client.get(f"http://127.0.0.1:{self.port}/json")
                targets = resp.json()

            for t in targets:
                if t.get("type") == "page":
                    return t["webSocketDebuggerUrl"]
        except Exception as e:
            logger.error(f"Failed to get page target: {e}")
        return None

    # =========================================================================
    #  SMART & DYNAMIC MULTI-SOURCE SEARCH ENGINE
    # =========================================================================

    async def search_smart(self, query: str, max_candidate_limit: int = 50) -> List[Dict[str, str]]:
        """
        Smart & Dynamic Multi-Source Academic & Web Search Engine.

        Pipeline:
          1. OpenAlex Academic API (primary — 300M+ peer-reviewed papers)
          2. DuckDuckGo HTML Scraper (secondary — general web)
          3. Brave Search API (tertiary fallback — if DDG fails/blocked)

        Each pipeline has individual timeout protection (6s).
        Total search is capped at 12s via asyncio.wait_for wrapper.

        Returns up to max_candidate_limit results (default 50).
        """
        import httpx
        from bs4 import BeautifulSoup

        results: List[Dict[str, str]] = []
        seen_urls: set = set()

        # Clean search query from filler follow-up words
        clean_query = re.sub(
            r'\b(?:lakukan|tinjauan pustaka|komprehensif|penerapan|pada|dengan|mencari|mengumpulkan|sumber|publikasi|ilmiah|internasional|terkini|cari lagi|sumber lain|cari sumber lain|referensi lain|website lain|cari yang lain|coba cari lagi|jangan pakai website yang tadi|yang berbeda|beda|50 sumber|banyak sumber)\b',
            '',
            query,
            flags=re.IGNORECASE
        ).strip()
        clean_query = re.sub(r'\s+', ' ', clean_query).strip()
        if not clean_query or len(clean_query) < 3:
            clean_query = query

        # --- Pipeline 1: OpenAlex Academic API ---
        async def _fetch_openalex() -> List[Dict[str, str]]:
            pipeline_results = []
            try:
                async with httpx.AsyncClient(timeout=6.0, follow_redirects=True) as client:
                    openalex_url = f"https://api.openalex.org/works?search={quote_plus(clean_query)}&per_page={max_candidate_limit}"
                    resp = await client.get(openalex_url, headers={
                        "User-Agent": "RuangTI-Platform/1.0 (mailto:admin@ruangti.ac.id)"
                    })
                    if resp.status_code == 200:
                        data = resp.json()
                        for it in data.get("results", []):
                            title = it.get("title")
                            doi = it.get("doi")
                            openalex_id = it.get("id", "")
                            actual_url = doi if doi else openalex_id

                            if not title or not actual_url or actual_url in seen_urls:
                                continue

                            host_venue = it.get("primary_location", {}) or {}
                            source_obj = host_venue.get("source", {}) or {}
                            host_name = source_obj.get("display_name", "") if isinstance(source_obj, dict) else ""

                            try:
                                domain = urlparse(actual_url).netloc.replace("www.", "")
                            except Exception:
                                domain = host_name or "journal"

                            pub_year = it.get("publication_year", "")
                            cited_count = it.get("cited_by_count", 0)
                            snippet = f"Diterbitkan di {host_name} ({pub_year}), {cited_count} sitasi." if host_name else f"Publikasi ilmiah ({pub_year}), {cited_count} sitasi."

                            seen_urls.add(actual_url)
                            pipeline_results.append({
                                "title": title,
                                "url": actual_url,
                                "domain": domain or "doi.org",
                                "snippet": snippet
                            })
                            if len(pipeline_results) >= max_candidate_limit:
                                break
            except Exception as e:
                logger.warning(f"OpenAlex pipeline error: {repr(e)}")
            return pipeline_results

        # --- Pipeline 2: DuckDuckGo HTML Scraper ---
        async def _fetch_duckduckgo() -> List[Dict[str, str]]:
            pipeline_results = []
            try:
                async with httpx.AsyncClient(timeout=6.0, follow_redirects=True) as client:
                    headers = {
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                        "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "Referer": "https://html.duckduckgo.com/"
                    }
                    resp = await client.post("https://html.duckduckgo.com/html/", data={"q": clean_query}, headers=headers)
                    if resp.status_code == 200:
                        soup = BeautifulSoup(resp.text, 'html.parser')
                        for r in soup.select('.result'):
                            if 'result--ad' in r.get('class', []):
                                continue
                            t_el = r.select_one('.result__title a')
                            s_el = r.select_one('.result__snippet')
                            if t_el:
                                raw_href = t_el.get('href', '')
                                if 'uddg=' in raw_href:
                                    actual_url = unquote(raw_href.split('uddg=')[1].split('&')[0])
                                else:
                                    actual_url = raw_href

                                if not actual_url.startswith('http') or actual_url in seen_urls:
                                    continue

                                blocked_domains = ['images.google', 'google.com/imghp', 'pinterest.com',
                                                   'youtube.com', 'instagram.com', 'tiktok.com', 'facebook.com']
                                if any(b in actual_url.lower() for b in blocked_domains):
                                    continue

                                try:
                                    domain = urlparse(actual_url).netloc.replace("www.", "")
                                except Exception:
                                    domain = ""

                                seen_urls.add(actual_url)
                                pipeline_results.append({
                                    "title": t_el.get_text(strip=True),
                                    "url": actual_url,
                                    "domain": domain,
                                    "snippet": s_el.get_text(strip=True) if s_el else ""
                                })
            except Exception as e:
                logger.warning(f"DuckDuckGo pipeline error: {e}")
            return pipeline_results

        # --- Pipeline 3: Brave Search API (fallback if DDG yields 0) ---
        async def _fetch_brave(ddg_count: int) -> List[Dict[str, str]]:
            """Only activates if DDG returned 0 results AND Brave API key is configured."""
            if ddg_count > 0 or not BRAVE_SEARCH_API_KEY:
                return []
            pipeline_results = []
            try:
                async with httpx.AsyncClient(timeout=6.0, follow_redirects=True) as client:
                    resp = await client.get(
                        "https://api.search.brave.com/res/v1/web/search",
                        params={"q": clean_query, "count": 20},
                        headers={
                            "Accept": "application/json",
                            "Accept-Encoding": "gzip",
                            "X-Subscription-Token": BRAVE_SEARCH_API_KEY
                        }
                    )
                    if resp.status_code == 200:
                        data = resp.json()
                        for item in data.get("web", {}).get("results", []):
                            actual_url = item.get("url", "")
                            title = item.get("title", "")
                            if not actual_url or not title or actual_url in seen_urls:
                                continue
                            try:
                                domain = urlparse(actual_url).netloc.replace("www.", "")
                            except Exception:
                                domain = ""
                            seen_urls.add(actual_url)
                            pipeline_results.append({
                                "title": title,
                                "url": actual_url,
                                "domain": domain,
                                "snippet": item.get("description", "")
                            })
            except Exception as e:
                logger.warning(f"Brave Search fallback error: {e}")
            return pipeline_results

        # --- Execute pipelines with global 12s timeout ---
        try:
            # Run OpenAlex + DDG in parallel (both are independent)
            openalex_task = asyncio.create_task(_fetch_openalex())
            ddg_task = asyncio.create_task(_fetch_duckduckgo())

            openalex_results, ddg_results = await asyncio.wait_for(
                asyncio.gather(openalex_task, ddg_task, return_exceptions=True),
                timeout=12.0
            )

            # Handle exceptions from gather
            if isinstance(openalex_results, Exception):
                logger.warning(f"OpenAlex task failed: {openalex_results}")
                openalex_results = []
            if isinstance(ddg_results, Exception):
                logger.warning(f"DDG task failed: {ddg_results}")
                ddg_results = []

            # Merge: academic first, then web
            results.extend(openalex_results)
            results.extend(ddg_results)

            # Pipeline 3: Brave fallback only if DDG returned nothing
            if len(ddg_results) == 0 and BRAVE_SEARCH_API_KEY:
                try:
                    brave_results = await asyncio.wait_for(_fetch_brave(len(ddg_results)), timeout=6.0)
                    results.extend(brave_results)
                except asyncio.TimeoutError:
                    logger.warning("Brave Search fallback timed out")

        except asyncio.TimeoutError:
            logger.warning("Global search_smart timeout (12s) reached — returning partial results")

        logger.info(f"Smart Search retrieved {len(results)} sources (target: {max_candidate_limit})")
        return results[:max_candidate_limit]

    # =========================================================================
    #  SMART CONTENT EXTRACTION (fetch_page)
    # =========================================================================

    async def fetch_page(self, url: str) -> str:
        """
        Fetch and extract clean text content from a URL.
        Pipeline: Fast HTTP + BeautifulSoup (primary) → CDP headless (fallback for JS-rendered pages).
        """
        # 1. Try Fast HTTP client first
        try:
            import httpx
            from bs4 import BeautifulSoup

            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
            }
            async with httpx.AsyncClient(timeout=8.0, follow_redirects=True) as client:
                resp = await client.get(url, headers=headers)
                if resp.status_code == 200:
                    soup = BeautifulSoup(resp.text, 'html.parser')

                    # Remove noise elements
                    for s in soup(['script', 'style', 'nav', 'footer', 'header', 'aside', 'noscript', 'svg', 'form', 'iframe']):
                        s.decompose()

                    # Smart content extraction with proper selectors (FIX #2)
                    main_content = (
                        soup.find('main') or
                        soup.find('article') or
                        soup.find(class_='content') or
                        soup.find(id='content') or
                        soup.find(class_='post-content') or
                        soup.find(class_='article-body') or
                        soup.find(class_='entry-content') or
                        soup.find(id='main-content') or
                        soup.body
                    )

                    if main_content:
                        text = main_content.get_text(separator=' ', strip=True)
                        # Clean excessive whitespace
                        text = re.sub(r'\s+', ' ', text).strip()
                        if len(text) > 100:
                            return text[:6000]
        except Exception as e:
            logger.debug(f"HTTP fetch fallback to CDP for {url}: {e}")

        # 2. Fallback to CDP Browser Automation (for JS-rendered pages)
        if not await self.ensure_running():
            return ""

        try:
            import websockets
        except ImportError:
            return ""

        ws_url = await self._get_page_ws()
        if not ws_url:
            return ""

        try:
            async with websockets.connect(ws_url, max_size=10 * 1024 * 1024) as ws:
                msg_id = 1

                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Page.navigate",
                    "params": {"url": url}
                }))
                msg_id += 1
                await asyncio.sleep(3)

                extract_js = (
                    "(() => {"
                    "document.querySelectorAll('script,style,nav,footer,header,aside,form,iframe').forEach(e=>e.remove());"
                    "const m=document.querySelector('main,article,[class*=\"content\"],[id*=\"content\"],body');"
                    "return m?m.innerText.substring(0,6000):document.body.innerText.substring(0,6000);"
                    "})()"
                )

                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Runtime.evaluate",
                    "params": {"expression": extract_js, "returnByValue": True}
                }))
                msg_id += 1

                while True:
                    try:
                        raw = await asyncio.wait_for(ws.recv(), timeout=10)
                        data = json.loads(raw)
                        if data.get("id") == msg_id - 1:
                            return data.get("result", {}).get("result", {}).get("value", "")
                    except asyncio.TimeoutError:
                        break

        except Exception as e:
            logger.error(f"CDP fetch failed: {e}")

        return ""


# Singleton instance
cdp_manager = CDPBrowserManager()
