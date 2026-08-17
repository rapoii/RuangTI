from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional, AsyncGenerator, List, Dict
import json

from app.routers.chat_9router import stream_grok_ai_response, ROUTER_9_MODEL

router = APIRouter(prefix="/api/chat", tags=["Chat Engine"])

class ChatMessageItem(BaseModel):
    role: str
    content: str

class ChatStreamRequest(BaseModel):
    message: str
    model_id: Optional[str] = ROUTER_9_MODEL
    conversation_id: Optional[str] = None
    history: Optional[List[ChatMessageItem]] = []

async def sse_generator(prompt: str, model_id: str, history: List[ChatMessageItem]) -> AsyncGenerator[str, None]:
    history_dicts = [{"role": h.role, "content": h.content} for h in history] if history else []
    async for chunk in stream_grok_ai_response(prompt, history=history_dicts, model_name=model_id or ROUTER_9_MODEL):
        payload = json.dumps({"chunk": chunk})
        yield f"data: {payload}\n\n"
    yield "data: [DONE]\n\n"

@router.post("/stream")
async def stream_chat(payload: ChatStreamRequest):
    if not payload.message.strip():
        raise HTTPException(status_code=400, detail="Pesan tidak boleh kosong")
    
    return StreamingResponse(
        sse_generator(payload.message, payload.model_id or ROUTER_9_MODEL, payload.history or []),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        }
    )
