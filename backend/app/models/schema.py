import html
import re
import uuid
from datetime import datetime
from typing import Optional, List
from pydantic import validator
from sqlmodel import SQLModel, Field, Relationship

def sanitize_plain_text(val: Optional[str], max_length: int = 500) -> Optional[str]:
    if val is None:
        return None
    # Strip CRLF injection (header splitting) -> space
    s = str(val).replace(chr(13), " ").replace(chr(10), " ")
    # Strip dangerous pseudo-protocols like javascript:, data:, vbscript:
    cleaned = re.sub(r'(?i)(javascript|vbscript|data):', '', s)
    # Strip dangerous HTML tags & scripts
    cleaned = re.sub(r'<[^>]*?>', '', cleaned)
    # Escape special HTML entities
    escaped = html.escape(cleaned).strip()
    return escaped[:max_length]

def generate_uuid() -> str:
    return str(uuid.uuid4())

# ================= USER MODEL =================
class User(SQLModel, table=True):
    __tablename__ = "users"

    id: str = Field(default_factory=generate_uuid, primary_key=True)
    name: str = Field(index=True)
    email: str = Field(unique=True, index=True)
    hashed_password: str
    phone: Optional[str] = Field(default=None)
    address: Optional[str] = Field(default=None)
    postal_code: Optional[str] = Field(default=None)
    role: str = Field(default="Praktisi")
    institution: str = Field(default="Teknik Industri")
    active_model: str = Field(default="TI-Optima Pro")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    conversations: List["Conversation"] = Relationship(back_populates="user")

# ================= CONVERSATION MODEL =================
class Conversation(SQLModel, table=True):
    __tablename__ = "conversations"

    id: str = Field(default_factory=generate_uuid, primary_key=True)
    user_id: Optional[str] = Field(default=None, foreign_key="users.id")
    title: str = Field(default="Percakapan Baru")
    model_id: str = Field(default="TI-Optima Pro")
    is_pinned: bool = Field(default=False)
    is_public: bool = Field(default=False)
    share_id: Optional[str] = Field(default=None, index=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    user: Optional[User] = Relationship(back_populates="conversations")
    messages: List["Message"] = Relationship(back_populates="conversation", cascade_delete=True)

# ================= MESSAGE MODEL =================
class Message(SQLModel, table=True):
    __tablename__ = "messages"

    id: str = Field(default_factory=generate_uuid, primary_key=True)
    conversation_id: str = Field(foreign_key="conversations.id", index=True)
    role: str = Field(description="'user' or 'assistant' or 'system'")
    content: str = Field(description="Content with Markdown & KaTeX formulas")
    images: Optional[str] = Field(default=None, description="Serialized JSON array of base64/URL images")
    documents: Optional[str] = Field(default=None, description="Serialized JSON array of attached documents metadata")
    tool_calls: Optional[str] = Field(default=None, description="Serialized JSON of tool executions")
    created_at: datetime = Field(default_factory=datetime.utcnow)

    conversation: Optional[Conversation] = Relationship(back_populates="messages")

# ================= AUTH DTO SCHEMAS =================
class UserRegisterRequest(SQLModel):
    name: str
    email: str
    password: str
    confirm_password: str
    phone: Optional[str] = None
    address: Optional[str] = None
    postal_code: Optional[str] = None
    role: Optional[str] = "Praktisi"
    institution: Optional[str] = "Teknik Industri"

    @validator("name")
    def validate_name(cls, v):
        cleaned = sanitize_plain_text(v, max_length=100)
        if not cleaned:
            raise ValueError("Nama tidak boleh kosong atau hanya berisi tag HTML berbahaya")
        return cleaned

    @validator("email")
    def validate_email(cls, v):
        clean_email = v.strip().lower()
        if not re.match(r"^[\w\.-]+@[\w\.-]+\.\w+$", clean_email):
            raise ValueError("Format email tidak valid")
        return clean_email

    @validator("role")
    def validate_role(cls, v):
        if v is None:
            return "Praktisi"
        allowed = {"praktisi", "mahasiswa", "dosen"}
        if v.strip().lower() not in allowed:
            raise ValueError("Role tidak valid. Nilai yang diizinkan: Praktisi, Mahasiswa, Dosen")
        return v.strip().title()

    @validator("password")
    def validate_password(cls, v):
        if len(v) < 8:
            raise ValueError("Kata sandi minimal harus 8 karakter")
        if len(v) > 128:
            raise ValueError("Kata sandi terlalu panjang (maksimal 128 karakter)")
        if not re.search(r'[A-Z]', v):
            raise ValueError("Kata sandi harus mengandung minimal 1 huruf besar")
        if not re.search(r'[a-z]', v):
            raise ValueError("Kata sandi harus mengandung minimal 1 huruf kecil")
        if not re.search(r'\d', v):
            raise ValueError("Kata sandi harus mengandung minimal 1 angka")
        if not re.search(r'[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]', v):
            raise ValueError("Kata sandi harus mengandung minimal 1 simbol (!@#$%...)")
        common = ['password', 'password123', '12345678', 'qwerty123', 'admin123', 'password123!', '123456789']
        if v.lower() in common or v in common:
            raise ValueError("Kata sandi terlalu umum, gunakan kombinasi yang lebih unik")
        return v

class UserLoginRequest(SQLModel):
    email: str
    password: str

class UserResponse(SQLModel):
    id: str
    name: str
    email: str
    phone: Optional[str] = None
    address: Optional[str] = None
    postal_code: Optional[str] = None
    role: str
    institution: str
    plan: str = "Pro"
    created_at: datetime

class AuthResponse(SQLModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

# ================= CONVERSATION / MESSAGE DTOs =================
class ConversationCreate(SQLModel):
    title: Optional[str] = "Percakapan Baru"
    model_id: Optional[str] = "TI-Optima Pro"

    @validator("title")
    def validate_title(cls, v):
        if v is None:
            return "Percakapan Baru"
        if len(v) > 200:
            raise ValueError("Judul percakapan terlalu panjang (maksimal 200 karakter)")
        cleaned = sanitize_plain_text(v, max_length=200)
        return cleaned if cleaned else "Percakapan Baru"

class ConversationUpdate(SQLModel):
    title: Optional[str] = None
    is_pinned: Optional[bool] = None
    model_id: Optional[str] = None
    is_public: Optional[bool] = None
    share_id: Optional[str] = None

    @validator("title")
    def validate_title(cls, v):
        if v is None:
            return None
        cleaned = sanitize_plain_text(v, max_length=200)
        return cleaned if cleaned else "Percakapan"

class ShareStatusUpdate(SQLModel):
    is_public: bool

class MessageCreate(SQLModel):
    role: str
    content: str
    images: Optional[str] = None
    documents: Optional[str] = None
    tool_calls: Optional[str] = None

    @validator("role")
    def validate_role(cls, v):
        allowed = ["user", "assistant", "system"]
        if v not in allowed:
            raise ValueError(f"Role tidak valid. Allowed: {allowed}")
        return v

    @validator("content")
    def validate_content(cls, v):
        if not v or not v.strip():
            raise ValueError("Konten pesan tidak boleh kosong")
        if len(v) > 50000:
            raise ValueError("Konten pesan terlalu panjang (maksimal 50000 karakter)")
        cleaned = re.sub(r'(?i)(javascript|vbscript|data):', '', v)
        cleaned = re.sub(r'<[^>]*?>', '', cleaned)
        cleaned = cleaned.strip()
        if not cleaned:
            raise ValueError("Konten pesan tidak valid setelah sanitasi")
        return cleaned

class SharedConversationResponse(SQLModel):
    id: str
    title: str
    model_id: str
    created_at: datetime
    updated_at: datetime
    is_public: bool
    share_id: Optional[str]
    author_name: str
    messages: List[Message]
