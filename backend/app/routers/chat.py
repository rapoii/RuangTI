from fastapi import APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import Optional, AsyncGenerator
import asyncio
import json

from app.routers.chat_knowledge import generate_ai_response

router = APIRouter(prefix="/api/chat", tags=["Chat Engine"])

class ChatStreamRequest(BaseModel):
    message: str
    model_id: Optional[str] = "TI-Optima Pro"
    conversation_id: Optional[str] = None

async def sse_generator(prompt: str, model_id: str) -> AsyncGenerator[str, None]:
    async for chunk in generate_ai_response(prompt, model_id):
        payload = json.dumps({"chunk": chunk})
        yield f"data: {payload}\n\n"
        await asyncio.sleep(0.012)
    yield "data: [DONE]\n\n"

@router.post("/stream")
async def stream_chat(payload: ChatStreamRequest):
    if not payload.message.strip():
        raise HTTPException(status_code=400, detail="Pesan tidak boleh kosong")
    
    return StreamingResponse(
        sse_generator(payload.message, payload.model_id or "TI-Optima Pro"),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        }
    )
