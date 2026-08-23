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
        response: Response = await call_next(request)
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
        return response
from app.core.database import init_db
from app.routers import health, conversations, messages, chat, auth, upload, export
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
    lifespan=lifespan
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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host=settings.HOST, port=settings.PORT, reload=True)
