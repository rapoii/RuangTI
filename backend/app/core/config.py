import os
from pydantic_settings import BaseSettings
from typing import List

# Path absolut ke root data/ruangti_auth.db
_PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
_ROOT_DB_PATH = os.path.join(_PROJECT_ROOT, "data", "ruangti_auth.db")

class Settings(BaseSettings):
    PROJECT_NAME: str = "RuangTI Backend"
    VERSION: str = "1.0.0"
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # SQLite Database URI (Async) - ruangti_auth.db
    DATABASE_URL: str = ""
    
    # JWT Auth Configuration (Fail-fast in production if not set)
    JWT_ALGORITHM: str = "HS256"
    JWT_SECRET_KEY: str = ""
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 Days

    def __init__(self, **values):
        super().__init__(**values)
        if not self.DATABASE_URL or self.DATABASE_URL == "sqlite+aiosqlite:///./data/ruangti_auth.db":
            self.DATABASE_URL = f"sqlite+aiosqlite:///{_ROOT_DB_PATH.replace(os.sep, '/')}"
        if not self.JWT_SECRET_KEY:
            # Check backend/.env explicitly if not loaded
            env_file_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), ".env")
            if os.path.exists(env_file_path):
                with open(env_file_path, "r", encoding="utf-8") as f:
                    for line in f:
                        if line.startswith("JWT_SECRET_KEY="):
                            self.JWT_SECRET_KEY = line.split("=", 1)[1].strip().strip('"').strip("'")
                            break
            if not self.JWT_SECRET_KEY:
                self.JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY") or os.getenv("BETTER_AUTH_SECRET", "ruangti_dev_fallback_key_2026")

    # Open Email Domains for Industrial Engineering
    ALLOWED_EMAIL_DOMAINS: List[str] = ["*"]
    
    # CORS Origins for Localhost, LAN, and Official Production Domain
    CORS_ORIGINS: List[str] = [
        "https://ruangti.varevastudio.tech",
        "http://localhost:3000",
        "http://localhost:3005",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3005",
    ]

    class Config:
        env_file = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), ".env")
        extra = "allow"

settings = Settings()
