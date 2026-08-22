import jwt
import bcrypt
import sqlite3
import os
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
from app.core.config import settings

def get_auth_db_path() -> str:
    # Path absolut yang tepat ke root ./data/ruangti_auth.db
    # __file__ = backend/app/core/security.py -> dirname x 3 = root project
    current_file_dir = os.path.dirname(os.path.abspath(__file__))
    root_project = os.path.abspath(os.path.join(current_file_dir, "..", "..", ".."))
    root_db = os.path.join(root_project, "data", "ruangti_auth.db")
    if os.path.exists(root_db):
        return root_db
    
    # Fallback paths
    paths = [
        root_db,
        os.path.join(os.getcwd(), "data", "ruangti_auth.db"),
        os.path.join(os.getcwd(), "backend", "data", "ruangti_auth.db")
    ]
    for p in paths:
        if os.path.exists(p):
            return p
    return root_db

def verify_better_auth_session(token: str) -> Optional[str]:
    """
    Validasi session token dari Better Auth SQLite DB (tabel session).
    Mengembalikan user_id (str) jika valid & belum expired, None jika tidak valid.
    """
    if not token:
        return None
    try:
        db_path = get_auth_db_path()
        if not os.path.exists(db_path):
            return None
        conn = sqlite3.connect(db_path)
        cur = conn.cursor()
        cur.execute("SELECT userId, expiresAt FROM session WHERE token = ?;", (token,))
        row = cur.fetchone()
        conn.close()
        if not row:
            return None
        user_id, expires_at_str = row
        # Parse ISO expiresAt (e.g. '2026-08-28T09:51:58.245Z')
        if expires_at_str:
            clean_exp = expires_at_str.replace("Z", "+00:00")
            exp_dt = datetime.fromisoformat(clean_exp)
            # Bandingkan dengan current UTC
            now_dt = datetime.now(exp_dt.tzinfo) if exp_dt.tzinfo else datetime.utcnow()
            if now_dt > exp_dt:
                return None
        return user_id
    except Exception:
        return None

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        # Truncate plain_password to 72 bytes safely (bcrypt limitation)
        pwd_bytes = plain_password.encode('utf-8')[:72]
        hash_bytes = hashed_password.encode('utf-8')
        return bcrypt.checkpw(pwd_bytes, hash_bytes)
    except Exception:
        return False

def get_password_hash(password: str) -> str:
    pwd_bytes = password.encode('utf-8')[:72]
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(pwd_bytes, salt)
    return hashed.decode('utf-8')

def create_access_token(data: Dict[str, Any], expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    return encoded_jwt

def decode_access_token(token: str) -> Optional[Dict[str, Any]]:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        return payload
    except Exception:
        return None

def is_allowed_untirta_email(email: str) -> bool:
    clean_email = email.strip().lower()
    if "@" not in clean_email:
        return False
    return True
