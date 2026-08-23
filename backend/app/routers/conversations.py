from fastapi import APIRouter, Depends, HTTPException, Header, Request, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import select
from sqlalchemy import exists
from typing import List, Optional
from datetime import datetime
import uuid
import time
from collections import defaultdict

from app.core.database import get_session
from app.core.security import decode_access_token, verify_better_auth_session
from app.models.schema import (
    Conversation,
    ConversationCreate,
    ConversationUpdate,
    ShareStatusUpdate,
    SharedConversationResponse,
    Message,
    User,
)

router = APIRouter(prefix="/api/conversations", tags=["Conversations"])

# Rate limiting for conversation creation: 20 per minute per IP
_conv_create_attempts: dict = defaultdict(list)

def check_conv_rate_limit(request: Request, max_requests: int = 20, window_seconds: int = 60):
    client_ip = request.client.host if request.client else "127.0.0.1"
    forwarded = request.headers.get("cf-connecting-ip") or request.headers.get("x-forwarded-for")
    if forwarded:
        client_ip = forwarded.split(",")[0].strip()
    now = time.time()
    _conv_create_attempts[client_ip] = [t for t in _conv_create_attempts[client_ip] if now - t < window_seconds]
    if len(_conv_create_attempts[client_ip]) >= max_requests:
        raise HTTPException(status_code=status.HTTP_429_TOO_MANY_REQUESTS, detail="Terlalu banyak pembuatan percakapan. Silakan coba lagi dalam beberapa saat.")
    _conv_create_attempts[client_ip].append(now)

async def get_required_user_id(authorization: Optional[str] = Header(None)) -> str:
    if not authorization:
        raise HTTPException(status_code=401, detail="Authentication required: Token tidak ditemukan.")
    
    if authorization.startswith("Bearer "):
        token = authorization.split(" ")[1].strip()
    else:
        token = authorization.strip()

    if not token or token in ("undefined", "null", "none"):
        raise HTTPException(status_code=401, detail="Authentication required: Token kosong atau tidak valid.")

    better_auth_user_id = verify_better_auth_session(token)
    if better_auth_user_id:
        return better_auth_user_id

    payload = decode_access_token(token)
    if payload and payload.get("sub"):
        return str(payload.get("sub"))

    raise HTTPException(status_code=401, detail="Authentication required: Token tidak valid atau sudah kedaluwarsa.")

async def get_optional_user_id(authorization: Optional[str] = Header(None)) -> Optional[str]:
    if not authorization:
        return None
    
    # 1. Bearer token format
    if authorization.startswith("Bearer "):
        token = authorization.split(" ")[1].strip()
    else:
        token = authorization.strip()

    if not token or token in ("undefined", "null", "none"):
        return None

    # A. Coba verifikasi via Better Auth session token (SQLite table session)
    better_auth_user_id = verify_better_auth_session(token)
    if better_auth_user_id:
        return better_auth_user_id

    # B. Coba decode via custom JWT token
    payload = decode_access_token(token)
    if payload and payload.get("sub"):
        return str(payload.get("sub"))
    
    # Jika token disediakan tapi invalid / expired / alg:none, tolak langsung!
    raise HTTPException(status_code=401, detail="Token autentikasi tidak valid atau sudah kedaluwarsa.")

@router.get("", response_model=List[Conversation])
async def list_conversations(
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    # Hanya kembalikan percakapan yang SUDAH memiliki minimal 1 pesan (tidak menampilkan percakapan kosong)
    has_messages = exists().where(Message.conversation_id == Conversation.id)
    
    if user_id:
        # Jika user login, HANYA ambil percakapan milik user_id tersebut yang memiliki pesan
        query = (
            select(Conversation)
            .where(Conversation.user_id == user_id, has_messages)
            .order_by(Conversation.updated_at.desc())
        )
    else:
        # Guest tanpa login tidak membaca percakapan user lain (hanya milik guest/None)
        query = (
            select(Conversation)
            .where(Conversation.user_id.is_(None), has_messages)
            .order_by(Conversation.updated_at.desc())
        )
    result = await session.execute(query)
    return result.scalars().all()

@router.post("", response_model=Conversation)
async def create_conversation(
    request: Request,
    payload: ConversationCreate,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    check_conv_rate_limit(request, max_requests=20, window_seconds=60)
    conversation = Conversation(
        title=payload.title or "Percakapan Baru",
        model_id=payload.model_id or "TI-Optima Pro",
        user_id=user_id,
        is_public=False,
        share_id=None,
        created_at=datetime.utcnow(),
        updated_at=datetime.utcnow()
    )
    session.add(conversation)
    await session.commit()
    await session.refresh(conversation)
    return conversation

@router.get("/public/{identifier}", response_model=SharedConversationResponse)
async def get_public_shared_conversation(
    identifier: str,
    session: AsyncSession = Depends(get_session)
):
    """
    Mengambil percakapan publik berdasarkan share_id atau conversation_id.
    Endpoint ini tidak memerlukan header Auth (bisa diakses siapa saja yang punya link).
    """
    # Cari berdasarkan share_id terlebih dahulu
    stmt = select(Conversation).where(Conversation.share_id == identifier, Conversation.is_public == True)
    res = await session.execute(stmt)
    conv = res.scalars().first()

    # Fallback ke conversation_id jika is_public=True
    if not conv:
        stmt2 = select(Conversation).where(Conversation.id == identifier, Conversation.is_public == True)
        res2 = await session.execute(stmt2)
        conv = res2.scalars().first()

    if not conv:
        raise HTTPException(
            status_code=404,
            detail="Tautan berbagi tidak ditemukan atau percakapan telah disetel privat oleh pemilik."
        )

    # Ambil pesan-pesan yang ada
    msg_stmt = select(Message).where(Message.conversation_id == conv.id).order_by(Message.created_at.asc())
    msg_res = await session.execute(msg_stmt)
    messages = msg_res.scalars().all()

    # Ambil nama pemilik percakapan
    author_name = "Pengguna RuangTI"
    if conv.user_id:
        user = await session.get(User, conv.user_id)
        if user:
            author_name = user.name

    return SharedConversationResponse(
        id=conv.id,
        title=conv.title,
        model_id=conv.model_id,
        created_at=conv.created_at,
        updated_at=conv.updated_at,
        is_public=conv.is_public,
        share_id=conv.share_id,
        author_name=author_name,
        messages=messages
    )

@router.get("/{conversation_id}", response_model=Conversation)
async def get_conversation(
    conversation_id: str,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")
    
    # Guard: Percakapan privat hanya boleh diakses oleh pemiliknya
    if not conversation.is_public:
        if conversation.user_id is None:
            # Percakapan guest bersifat ephemeral dan tidak terekspos tanpa auth
            if not user_id:
                raise HTTPException(
                    status_code=403,
                    detail="Akses ditolak: Percakapan tamu bersifat privat dan tidak dapat diakses publik."
                )
        elif not user_id or user_id != conversation.user_id:
            raise HTTPException(
                status_code=403,
                detail="Akses ditolak: Percakapan ini bersifat privat dan hanya dapat diakses oleh pemiliknya."
            )
            
    return conversation

@router.patch("/{conversation_id}", response_model=Conversation)
async def update_conversation(
    conversation_id: str,
    payload: ConversationUpdate,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    # Pastikan yang update adalah pemilik
    if conversation.user_id is None:
        if not user_id:
            raise HTTPException(status_code=403, detail="Tidak memiliki izin untuk mengedit percakapan tamu")
    elif not user_id or user_id != conversation.user_id:
        raise HTTPException(status_code=403, detail="Tidak memiliki izin untuk mengedit percakapan ini")

    if payload.title is not None:
        conversation.title = payload.title
    if payload.is_pinned is not None:
        conversation.is_pinned = payload.is_pinned
    if payload.model_id is not None:
        conversation.model_id = payload.model_id
    if payload.is_public is not None:
        conversation.is_public = payload.is_public
    if payload.share_id is not None:
        conversation.share_id = payload.share_id
        
    conversation.updated_at = datetime.utcnow()
    session.add(conversation)
    await session.commit()
    await session.refresh(conversation)
    return conversation

# ================= SHARE CONVERSATION API (CLAUDE STYLE) =================
@router.post("/{conversation_id}/share")
@router.patch("/{conversation_id}/share")
async def update_share_status(
    conversation_id: str,
    payload: ShareStatusUpdate,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Percakapan tidak ditemukan")

    # Cek hak akses pemilik
    if conversation.user_id and (not user_id or user_id != conversation.user_id):
        raise HTTPException(status_code=403, detail="Hanya pemilik percakapan yang dapat mengatur izin berbagi")

    if payload.is_public:
        conversation.is_public = True
        if not conversation.share_id:
            conversation.share_id = str(uuid.uuid4())
    else:
        conversation.is_public = False

    conversation.updated_at = datetime.utcnow()
    session.add(conversation)
    await session.commit()
    await session.refresh(conversation)

    return {
        "success": True,
        "is_public": conversation.is_public,
        "share_id": conversation.share_id,
        "share_url": f"/share/{conversation.share_id or conversation.id}" if conversation.is_public else None
    }

@router.delete("/{conversation_id}")
async def delete_conversation(
    conversation_id: str,
    session: AsyncSession = Depends(get_session),
    user_id: Optional[str] = Depends(get_optional_user_id)
):
    conversation = await session.get(Conversation, conversation_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found")

    if conversation.user_id is None:
        if not user_id:
            raise HTTPException(status_code=403, detail="Tidak memiliki izin untuk menghapus percakapan tamu")
    elif not user_id or user_id != conversation.user_id:
        raise HTTPException(status_code=403, detail="Tidak memiliki izin untuk menghapus percakapan ini")

    await session.delete(conversation)
    await session.commit()
    return {"message": "Conversation deleted successfully", "id": conversation_id}
