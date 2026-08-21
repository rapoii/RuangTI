from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
from typing import List, Optional
from datetime import datetime

from app.core.database import get_session
from app.core.security import decode_access_token, verify_better_auth_session
from app.models.schema import Message, MessageCreate, Conversation

router = APIRouter(prefix="/api/messages", tags=["Messages"])

async def get_optional_user_id(authorization: Optional[str] = Header(None)) -> Optional[str]:
    if not authorization:
        return None
    
    # 1. Bearer token format
    if authorization.startswith("Bearer "):
        token = authorization.split(" ")[1].strip()
    else:
        token = authorization.strip()

    if not token:
        return None

    # A. Coba verifikasi via Better Auth session token (SQLite table session)
    better_auth_user_id = verify_better_auth_session(token)
    if better_auth_user_id:
        return better_auth_user_id

    # B. Coba decode via custom JWT token
    payload = decode_access_token(token)
    if payload:
        return payload.get("sub")
    
    return None

@router.get("/{conversation_id}", response_model=List[Message])
async def get_messages_by_conversation(
    conversation_id: str,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    # Guard: if private and owned by a user, ensure requester is the owner
    if not conversation.is_public and conversation.user_id is not None:
        if not user_id or user_id != conversation.user_id:
            raise HTTPException(
                status_code=403,
                detail="Akses ditolak: Percakapan ini bersifat privat."
            )

    query = (
        select(Message)
        .where(Message.conversation_id == conversation_id)
        .order_by(Message.created_at.asc())
    )
    result = await session.execute(query)
    return result.scalars().all()

@router.post("/{conversation_id}", response_model=Message)
async def create_message(
    conversation_id: str,
    payload: MessageCreate,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    # Verify conversation exists
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    # Guard: only owner can write new messages
    if conversation.user_id and (not user_id or user_id != conversation.user_id):
        raise HTTPException(status_code=403, detail="Tidak memiliki izin untuk menambahkan pesan ke percakapan ini")

    message = Message(
        conversation_id=conversation_id,
        role=payload.role,
        content=payload.content,
        images=payload.images,
        tool_calls=payload.tool_calls,
        created_at=datetime.utcnow()
    )
    session.add(message)
    
    # Update conversation's updated_at timestamp
    conversation.updated_at = datetime.utcnow()
    session.add(conversation)

    await session.commit()
    await session.refresh(message)
    return message
