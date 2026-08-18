"""
CDP Browser Manager for RuangTI Web Search.
Auto-start, health check, and auto-restart Chrome/Edge with remote debugging.
Direct CDP WebSocket connection - no MCP dependency.
"""

import asyncio
import json
import os
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

    async def search_google(self, query: str, max_results: int = 5) -> List[Dict[str, str]]:
        """Search Google via CDP and return parsed results."""
        if not await self.ensure_running():
            return []

        try:
            import websockets
        except ImportError:
            logger.error("websockets package not installed. Run: pip install websockets")
            return []

        ws_url = await self._get_page_ws()
        if not ws_url:
            return []

        results = []
        try:
            async with websockets.connect(ws_url, max_size=10 * 1024 * 1024) as ws:
                msg_id = 1
                search_url = f"https://www.google.com/search?q={quote_plus(query)}&hl=en&num={max_results}"

                await ws.send(json.dumps({
                    "id": msg_id,
                    "method": "Page.navigate",
                    "params": {"url": search_url}
                }))
                msg_id += 1
                await asyncio.sleep(3)

                extract_js = (
                    "(() => {"
                    "const results = [];"
                    "const items = document.querySelectorAll('div.g');"
                    "for (const item of items) {"
                    "const titleEl = item.querySelector('h3');"
                    "const linkEl = item.querySelector('a[href]');"
                    "const snippetEl = item.querySelector('.VwiC3b, span.st, div.IsZvec');"
                    "if (titleEl && linkEl) {"
                    "results.push({"
                    "title: titleEl.innerText.trim(),"
                    "url: linkEl.href,"
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
        """Fetch and extract text content from a URL via CDP."""
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
                await asyncio.sleep(4)

                extract_js = (
                    "(() => {"
                    "document.querySelectorAll('script,style,nav,footer,header,aside').forEach(e=>e.remove());"
                    "const m=document.querySelector('main,article,.content,#content,body');"
                    "return m?m.innerText.substring(0,8000):document.body.innerText.substring(0,8000);"
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

