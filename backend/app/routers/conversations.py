from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
from typing import List, Optional
from datetime import datetime

from app.core.database import get_session
from app.core.security import decode_access_token
from app.models.schema import Conversation, ConversationCreate, ConversationUpdate

router = APIRouter(prefix="/api/conversations", tags=["Conversations"])

async def get_optional_user_id(authorization: Optional[str] = Header(None)) -> Optional[str]:
    if not authorization or not authorization.startswith("Bearer "):
        return None
    token = authorization.split(" ")[1]
    payload = decode_access_token(token)
    if payload:
        return payload.get("sub")
    return None

@router.get("", response_model=List[Conversation])
async def list_conversations(
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    if user_id:
        # Jika user login, hanya ambil percakapan milik user_id tersebut
        query = (
            select(Conversation)
            .where(Conversation.user_id == user_id)
            .order_by(Conversation.updated_at.desc())
        )
    else:
        # Percakapan publik / guest
        query = (
            select(Conversation)
            .where(Conversation.user_id == None)
            .order_by(Conversation.updated_at.desc())
        )
    result = await session.execute(query)
    return result.scalars().all()

@router.post("", response_model=Conversation)
async def create_conversation(
    payload: ConversationCreate,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    conversation = Conversation(
        title=payload.title or "Konsultasi TI Baru",
        model_id=payload.model_id or "TI-Optima Pro",
        user_id=user_id,
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )
    session.add(conversation)
    await session.commit()
    await session.refresh(conversation)
    return conversation

@router.get("/{conversation_id}", response_model=Conversation)
async def get_conversation(
    conversation_id: str,
    session: AsyncSession = Depends(get_session)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    return conversation

@router.patch("/{conversation_id}", response_model=Conversation)
async def update_conversation(
    conversation_id: str,
    payload: ConversationUpdate,
    session: AsyncSession = Depends(get_session)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    if payload.title is not None:
        conversation.title = payload.title
    if payload.is_pinned is not None:
        conversation.is_pinned = payload.is_pinned
    if payload.model_id is not None:
        conversation.model_id = payload.model_id
        
    conversation.updated_at = datetime.utcnow()
    session.add(conversation)
    await session.commit()
    await session.refresh(conversation)
    return conversation

@router.delete("/{conversation_id}")
async def delete_conversation(
    conversation_id: str,
    session: AsyncSession = Depends(get_session)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    await session.delete(conversation)
    await session.commit()
    return {"message": "Conversation deleted successfully", "id": conversation_id}
