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
    name: str = Field(default="Rafi Permana")
    email: Optional[str] = Field(default=None)
    role: str = Field(default="Mahasiswa Teknik Industri")
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

# ================= Pydantic DTO Schemas =================
class ConversationCreate(SQLModel):
    title: Optional[str] = "Konsultasi TI Baru"
    model_id: Optional[str] = "TI-Optima Pro"

class ConversationUpdate(SQLModel):
    title: Optional[str] = None
    is_pinned: Optional[bool] = None
    model_id: Optional[str] = None

class MessageCreate(SQLModel):
    role: str
    content: str
    tool_calls: Optional[str] = None
