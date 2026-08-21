import os
from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "RuangTI Backend"
    VERSION: str = "1.0.0"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # SQLite Database URI (Async) - ruangti_auth.db
    DATABASE_URL: str = "sqlite+aiosqlite:///./data/ruangti_auth.db"
    
    # JWT Auth Configuration
    JWT_SECRET_KEY: str = "ruangti_secret_super_key_jwt_untirta_2026_industrial"
    JWT_SECRET_KEY: str = "ruangti_secret_super_key_jwt_universal_2026_industrial"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 Days

    # Open Email Domains for Industrial Engineering
    ALLOWED_EMAIL_DOMAINS: List[str] = ["*"]
    
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
