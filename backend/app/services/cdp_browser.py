"""
CDP Browser Manager for RuangTI Web Search.
Auto-start, health check, and auto-restart Chrome/Edge with remote debugging.
Direct CDP WebSocket connection - no MCP dependency.
"""

import asyncio
import json
import os
import re
import subprocess
import sys
import logging
from typing import Optional, Dict, List
from urllib.parse import quote_plus

logger = logging.getLogger(__name__)

CDP_PORT = 9222
CHROME_USER_DATA_DIR = os.path.join(os.path.expanduser("~"), ".ruangti-cdp-profile")


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

    async def search_smart(self, query: str, max_candidate_limit: int = 50) -> List[Dict[str, str]]:
        """
        Smart & Dynamic Multi-Source Search (Up to 50 results).
        Crawl across DDG Direct POST Engine with automatic decoding and domain authority scoring.
        """
        import httpx
        import urllib.parse
        from bs4 import BeautifulSoup

        results: List[Dict[str, str]] = []
        seen_urls = set()

        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "Referer": "https://html.duckduckgo.com/"
        }

        # Sub-queries if the query is complex (multi-faceted)
        clean_query = re.sub(
            r'\b(?:cari lagi|sumber lain|cari sumber lain|referensi lain|website lain|cari yang lain|coba cari lagi|jangan pakai website yang tadi|yang berbeda|beda)\b',
            '',
            query,
            flags=re.IGNORECASE
        ).strip()
        if not clean_query:
            clean_query = query

        query_lower = clean_query.lower()
        sub_queries = [clean_query]
        if any(w in query_lower for w in [" vs ", " bandingkan ", " perbedaan ", " compare ", " dan ", " and "]):
            parts = re.split(r'\b(?:vs|bandingkan|perbedaan|compare|dan|and)\b', clean_query, flags=re.IGNORECASE)
            sub_queries.extend([p.strip() for p in parts if len(p.strip()) > 3])

        async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
            for q in sub_queries[:3]:
                if len(results) >= max_candidate_limit:
                    break
                try:
                    resp = await client.post("https://html.duckduckgo.com/html/", data={"q": q}, headers=headers)
                    if resp.status_code == 200:
                        soup = BeautifulSoup(resp.text, 'html.parser')
                        for r in soup.select('.result'):
                            if 'result--ad' in r.get('class', []):
                                continue
                            title_el = r.select_one('.result__title a')
                            snippet_el = r.select_one('.result__snippet')
                            if title_el:
                                raw_href = title_el.get('href', '')
                                if 'duckduckgo.com/y.js' in raw_href or 'bing.com/aclick' in raw_href:
                                    continue
                                if 'uddg=' in raw_href:
                                    actual_url = urllib.parse.unquote(raw_href.split('uddg=')[1].split('&')[0])
                                else:
                                    actual_url = raw_href

                                if not actual_url.startswith('http') or actual_url in seen_urls:
                                    continue

                                # Filter unwanted noise
                                if any(bad in actual_url.lower() for bad in ['images.google', 'google.com/imghp', 'pinterest.com', 'youtube.com', 'instagram.com', 'facebook.com']):
                                    continue

                                try:
                                    domain = urllib.parse.urlparse(actual_url).netloc.lower()
                                except Exception:
                                    domain = ""

                                seen_urls.add(actual_url)
                                results.append({
                                    "title": title_el.get_text(strip=True),
                                    "url": actual_url,
                                    "domain": domain,
                                    "snippet": snippet_el.get_text(strip=True) if snippet_el else ""
                                })
                                if len(results) >= max_candidate_limit:
                                    break
                except Exception as e:
                    logger.warning(f"Search fetch error ({q}): {e}")

        # 2. Score & Sort by Relevance & Domain Authority
        def score_result(item):
            score = 0
            d = item.get('domain', '')
            t = item.get('title', '').lower()
            s = item.get('snippet', '').lower()
            q_words = [w for w in query_lower.split() if len(w) > 2]

            # Domain authority bonus (Indonesian Journals & International Standards)
            if any(tld in d for tld in ['.ac.id', '.edu', '.org', '.gov', '.go.id', 'researchgate', 'sciencedirect', 'neliti.com', 'jurnal', 'ejournal', 'iso.org', 'osha.gov']):
                score += 30
            elif any(ind in d for ind in ['pqm', 'scaleocean', 'sasanadigital', 'hashmicro', 'prieds', 'accurate', 'lean', 'sixsigma', 'industry', 'engineering']):
                score += 15

            # Keyword match bonus (Title & Snippet)
            for qw in q_words:
                if qw in t:
                    score += 15
                if qw in s:
                    score += 8

            return score

        results.sort(key=score_result, reverse=True)
        logger.info(f"Smart Search successfully parsed & ranked {len(results)} sources")
        return results[:max_candidate_limit]

        # 2. Fallback to CDP Browser Automation
        if not await self.ensure_running():
            return []

        try:
            import websockets
        except ImportError:
            logger.error("websockets package not installed.")
            return []

        ws_url = await self._get_page_ws()
        if not ws_url:
            return []

        results = []
        try:
            async with websockets.connect(ws_url, max_size=10 * 1024 * 1024) as ws:
                msg_id = 1
                search_url = f"https://html.duckduckgo.com/html/?q={quote_plus(query)}"

                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Page.navigate",
                    "params": {"url": search_url}
                }))
                msg_id += 1
                await asyncio.sleep(2)

                extract_js = (
                    "(() => {"
                    "const results = [];"
                    "const items = document.querySelectorAll('.result');"
                    "for (const item of items) {"
                    "const titleEl = item.querySelector('.result__title a');"
                    "const snippetEl = item.querySelector('.result__snippet');"
                    "if (titleEl) {"
                    "let href = titleEl.href;"
                    "if (href.includes('uddg=')) {"
                    "href = decodeURIComponent(href.split('uddg=')[1].split('&')[0]);"
                    "}"
                    "results.push({"
                    "title: titleEl.innerText.trim(),"
                    "url: href,"
                    "snippet: snippetEl ? snippetEl.innerText.trim() : ''"
                    "});"
                    "}"
                    "}"
                    f"return JSON.stringify(results.slice(0, {max_results}));"
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
                            val = data.get("result", {}).get("result", {}).get("value", "[]")
                            results = json.loads(val)
                            break
                    except asyncio.TimeoutError:
                        break

        except Exception as e:
            logger.error(f"CDP search failed: {e}")

        return results

    async def fetch_page(self, url: str) -> str:
        """Fetch and extract clean text content from a URL via fast HTTP or CDP."""
        # 1. Try Fast HTTP client first
        try:
            import httpx
            from bs4 import BeautifulSoup
            
            headers = {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
            }
            async with httpx.AsyncClient(timeout=8.0, follow_redirects=True) as client:
                resp = await client.get(url, headers=headers)
                if resp.status_code == 200:
                    soup = BeautifulSoup(resp.text, 'html.parser')
                    for s in soup(['script', 'style', 'nav', 'footer', 'header', 'aside', 'noscript', 'svg']):
                        s.decompose()
                    main_content = soup.find(['main', 'article', '.content', '#content']) or soup.body
                    if main_content:
                        text = main_content.get_text(separator=' ', strip=True)
                        if len(text) > 100:
                            return text[:6000]
        except Exception as e:
            logger.debug(f"HTTP fetch fallback to CDP for {url}: {e}")

        # 2. Fallback to CDP Browser Automation
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
                    "document.querySelectorAll('script,style,nav,footer,header,aside').forEach(e=>e.remove());"
                    "const m=document.querySelector('main,article,.content,#content,body');"
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

