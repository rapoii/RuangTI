import os
import asyncio
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

from app.core.config import settings

class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        origin = request.headers.get("origin")
        if origin and origin not in settings.CORS_ORIGINS:
            # Reject non-whitelisted cross-origin requests immediately (both simple & preflight)
            return Response(
                content='{"detail":"Disallowed CORS origin"}',
                status_code=400,
                media_type="application/json"
            )
        
        # CSRF Protection: block cross-site / missing-Origin state-changing requests
        # If Origin is absent, a browser still sends Sec-Fetch-Site; raw http.client omits both.
        if request.method in ("POST", "PUT", "PATCH", "DELETE"):
            # Skip preflight OPTIONS already handled by CORS
            # Require either whitelisted Origin OR same-site Sec-Fetch-Site for state-changing methods
            if not origin or origin not in settings.CORS_ORIGINS:
                sec_fetch_site = request.headers.get("sec-fetch-site", "").lower()
                # Allow: same-origin, same-site, or no sec-fetch-site but with valid Authorization (API clients)
                # Block: cross-site, or no Origin + no Authorization (= CSRF / anon browser form)
                if sec_fetch_site == "cross-site":
                    return Response(
                        content='{"detail":"Cross-site form submission blocked (CSRF Protection)"}',
                        status_code=403,
                        media_type="application/json"
                    )
                # If BOTH Origin and Sec-Fetch-Site are missing, this is a non-browser
                # simple request without CORS headers — check if it has Authorization
                # For API upload/conversations/auth: require Origin for browser-like requests;
                # anon non-browser clients without Origin are blocked for state-changing writes
                # EXCEPT when Origin is legitimately absent (e.g. mobile app) but has Bearer token
                if not origin and not sec_fetch_site:
                    auth_header = request.headers.get("authorization", "")
                    # Allow login/register without auth, but require origin or block
                    # Paths that already enforce auth will return 401 anyway; we only block
                    # anon writes that would otherwise succeed (e.g. guest conversation create)
                    if not auth_header:
                        # Check if path is one that allows anon creation (conversations, upload)
                        path = request.url.path
                        if path.startswith("/api/conversations") or path.startswith("/api/upload") or path.startswith("/api/messages"):
                            return Response(
                                content='{"detail":"Missing Origin header (CSRF Protection) — anon state-changing requests must include Origin"}',
                                status_code=403,
                                media_type="application/json"
                            )
            
        response = await call_next(request)
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response
from app.core.database import init_db
from app.routers import health, conversations, messages, chat, auth, upload, export, feedback
from app.services.media_cleaner import periodic_prune_task, prune_old_uploaded_images

UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


@asynccontextmanager
async def lifespan(app: FastAPI):
    # 1. Initialize SQLite Database & Tables on Startup
    await init_db()

    # 2. Run initial cleanup of expired images (> 14 days)
    prune_old_uploaded_images(max_age_days=14)

    # 3. Spawn background periodic prune worker (runs every 24h)
    prune_task = asyncio.create_task(periodic_prune_task(interval_hours=24, max_age_days=14))

    yield

    # Cleanup background task
    prune_task.cancel()


app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    lifespan=lifespan,
    docs_url=None,
    redoc_url=None,
    openapi_url=None
)

# Setup Security Headers & CORS Middleware
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Static Uploads Directory (/uploads/images/...)
app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

# Include Routers
app.include_router(health.router)
app.include_router(auth.router)
app.include_router(conversations.router)
app.include_router(messages.router)
app.include_router(chat.router)
app.include_router(upload.router)
app.include_router(export.router)
app.include_router(feedback.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)
