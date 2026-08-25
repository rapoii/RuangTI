# RuangTI User Feedback Loop — 👍👎 ratings on assistant messages.
# Isolated SQLite store (backend/data/ruangti_feedback.db): analytics data must
# never share a file with core product data. UPSERT by message_id so a user can
# change their vote; anonymous users may vote too (user_id optional).
import os
import sqlite3
from datetime import datetime, timedelta
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from app.routers.messages import get_optional_user_id

router = APIRouter(prefix="/api/feedback", tags=["Feedback"])

DB_PATH = os.path.normpath(os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "data", "ruangti_feedback.db",
))


class FeedbackPayload(BaseModel):
    message_id: str
    rating: str  # "up" | "down"
    conversation_id: Optional[str] = None
    snippet: Optional[str] = None


def _conn() -> sqlite3.Connection:
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.execute("""
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message_id TEXT NOT NULL UNIQUE,
            conversation_id TEXT,
            user_id TEXT,
            rating TEXT NOT NULL CHECK(rating IN ('up','down')),
            snippet TEXT,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
    """)
    return conn


@router.post("")
async def submit_feedback(
    payload: FeedbackPayload,
    user_id: Optional[str] = Depends(get_optional_user_id),
):
    if payload.rating not in ("up", "down"):
        raise HTTPException(status_code=400, detail="rating harus 'up' atau 'down'.")
    if not payload.message_id or len(payload.message_id) > 128:
        raise HTTPException(status_code=400, detail="message_id tidak valid.")

    now = datetime.utcnow().isoformat(timespec="seconds")
    try:
        conn = _conn()
        conn.execute(
            """
            INSERT INTO feedback (message_id, conversation_id, user_id, rating, snippet, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(message_id) DO UPDATE SET
                rating=excluded.rating,
                conversation_id=excluded.conversation_id,
                user_id=excluded.user_id,
                snippet=excluded.snippet,
                updated_at=excluded.updated_at
            """,
            (
                payload.message_id,
                payload.conversation_id[:128] if payload.conversation_id else None,
                user_id,
                payload.rating,
                (payload.snippet or "")[:500],
                now,
                now,
            ),
        )
        conn.commit()
        conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal menyimpan feedback: {e}")
    return {"ok": True}


@router.get("/summary")
async def feedback_summary(days: int = 30):
    """Aggregate for board reports & KB quality monitoring."""
    cutoff = (datetime.utcnow() - timedelta(days=max(1, min(days, 365)))).isoformat(timespec="seconds")
    try:
        conn = _conn()
        ups = conn.execute(
            "SELECT COUNT(*) FROM feedback WHERE rating='up' AND updated_at >= ?", (cutoff,)
        ).fetchone()[0]
        downs = conn.execute(
            "SELECT COUNT(*) FROM feedback WHERE rating='down' AND updated_at >= ?", (cutoff,)
        ).fetchone()[0]
        recent_downs = [
            {"snippet": r[0], "conversation_id": r[1], "at": r[2]}
            for r in conn.execute(
                "SELECT snippet, conversation_id, updated_at FROM feedback "
                "WHERE rating='down' AND updated_at >= ? ORDER BY updated_at DESC LIMIT 10",
                (cutoff,),
            ).fetchall()
        ]
        conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gagal membaca feedback: {e}")
    return {"days": days, "ups": ups, "downs": downs, "recent_downs": recent_downs}
