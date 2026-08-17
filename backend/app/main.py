from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.config import settings
from app.core.database import init_db
from app.routers import health, conversations, messages, chat

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize Database Schema on Startup
    await init_db()
    yield

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    lifespan=lifespan
)

# Setup CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(health.router)
app.include_router(conversations.router)
app.include_router(messages.router)
app.include_router(chat.router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to RuangTI Backend API",
        "docs": "/docs",
        "health": "/api/health"
    }
