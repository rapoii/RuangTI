import uuid
from datetime import datetime
from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship

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
    role: str = Field(default="Mahasiswa")
    institution: str = Field(default="Untirta")
    active_model: str = Field(default="TI-Optima Pro")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    conversations: List["Conversation"] = Relationship(back_populates="user")

# ================= CONVERSATION MODEL =================
class Conversation(SQLModel, table=True):
    __tablename__ = "conversations"

    id: str = Field(default_factory=generate_uuid, primary_key=True)
    user_id: Optional[str] = Field(default=None, foreign_key="users.id")
    title: str = Field(default="Konsultasi TI Baru")
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
    role: Optional[str] = "Mahasiswa"
    institution: Optional[str] = "Untirta"

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
    title: Optional[str] = "Konsultasi TI Baru"
    model_id: Optional[str] = "TI-Optima Pro"

class ConversationUpdate(SQLModel):
    title: Optional[str] = None
    is_pinned: Optional[bool] = None
    model_id: Optional[str] = None
    is_public: Optional[bool] = None
    share_id: Optional[str] = None

class ShareStatusUpdate(SQLModel):
    is_public: bool

class MessageCreate(SQLModel):
    role: str
    content: str
    tool_calls: Optional[str] = None

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
