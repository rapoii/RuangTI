import os
from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "RuangTI Backend"
    VERSION: str = "1.0.0"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # SQLite Database URI (Async)
    DATABASE_URL: str = "sqlite+aiosqlite:///./data/ruangti.db"
    
    # CORS Origins for Localhost & Wi-Fi LAN
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3005",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3005",
        "http://192.168.100.158:3000",
        "http://192.168.100.158:3005",
        "*"
    ]

    class Config:
        env_file = ".env"
        extra = "allow"

settings = Settings()
