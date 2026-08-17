from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
from typing import List
from datetime import datetime

from app.core.database import get_session
from app.models.schema import Message, MessageCreate, Conversation

router = APIRouter(prefix="/api/messages", tags=["Messages"])

@router.get("/{conversation_id}", response_model=List[Message])
async def get_messages_by_conversation(
    conversation_id: str,
    session: AsyncSession = Depends(get_session)
):
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
    session: AsyncSession = Depends(get_session)
):
    # Verify conversation exists
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    message = Message(
        conversation_id=conversation_id,
        role=payload.role,
        content=payload.content,
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
