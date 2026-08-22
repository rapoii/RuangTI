from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional, AsyncGenerator, List, Dict, Any
import json

from app.routers.chat_9router import stream_grok_ai_response, ROUTER_9_MODEL

router = APIRouter(prefix="/api/chat", tags=["Chat Engine"])


class ChatMessageItem(BaseModel):
    role: str
    content: str


class ChatStreamRequest(BaseModel):
    message: str
    images: Optional[List[str]] = []
    documents: Optional[List[Dict[str, Any]]] = []
    model_id: Optional[str] = ROUTER_9_MODEL
    conversation_id: Optional[str] = None
    history: Optional[List[ChatMessageItem]] = []
    web_search: Optional[bool] = False


async def sse_generator(
    prompt: str,
    model_id: str,
    history: List[ChatMessageItem],
    web_search: bool = False,
    images: Optional[List[str]] = None,
    documents: Optional[List[Dict[str, Any]]] = None
) -> AsyncGenerator[str, None]:
    # Kirim ping pertama seketika koneksi dibuka (0.01 detik) agar Cloudflare tidak 524 Timeout
    ping_payload = json.dumps({"chunk": ": ping\n\n"})
    yield f"data: {ping_payload}\n\n"
    
    history_dicts = [{"role": h.role, "content": h.content} for h in history] if history else []
    try:
        async for chunk in stream_grok_ai_response(
            prompt,
            history=history_dicts,
            model_name=model_id or ROUTER_9_MODEL,
            web_search_enabled=web_search,
            images=images or [],
            documents=documents or []
        ):
            payload = json.dumps({"chunk": chunk})
            yield f"data: {payload}\n\n"
    except Exception as e:
        err_payload = json.dumps({"chunk": f"\n\n*(Terjadi kendala pada backend streaming: {str(e)})*"})
        yield f"data: {err_payload}\n\n"
    yield "data: [DONE]\n\n"


@router.post("/stream")
async def stream_chat(payload: ChatStreamRequest):
    if not payload.message.strip() and not payload.images and not payload.documents:
        raise HTTPException(status_code=400, detail="Pesan, gambar, atau lampiran dokumen tidak boleh kosong")

    return StreamingResponse(
        sse_generator(
            payload.message,
            payload.model_id or ROUTER_9_MODEL,
            payload.history or [],
            payload.web_search or False,
            payload.images or [],
            payload.documents or []
        ),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        }
    )
