# RuangTI Query-Gap Mining — logs user queries the KB cannot cover well.
# A query is a "gap" when the best chunk's cross-encoder rerank score < 0
# (calibrated Aug 2026: in-scope queries score +3..+9, out-of-scope -5..-11).
# Storage: JSONL append-only under backend/data/ (gitignored). Never touches rag.db.
import json
import os
import threading
from datetime import datetime

GAP_THRESHOLD = 0.0
MAX_LOG_BYTES = 2 * 1024 * 1024  # rotate past this

_LOG_PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "..", "..", "data", "query_gaps.jsonl"
)
_lock = threading.Lock()


def log_query_gap(query: str, chunks) -> bool:
    """
    Inspect search results and persist the query if coverage looks weak.
    Returns True when a gap was recorded. Never raises.
    """
    try:
        if not query or not query.strip():
            return False
        top_score = None
        top_module = None
        if chunks:
            top = chunks[0]
            top_score = top.get("rerank_score")
            top_module = top.get("module_id")
            if top_score is not None and top_score >= GAP_THRESHOLD:
                return False  # KB covers this fine

        entry = {
            "ts": datetime.now().isoformat(timespec="seconds"),
            "query": query.strip()[:300],
            "top_score": round(float(top_score), 3) if top_score is not None else None,
            "top_module": top_module,
        }
        path = os.path.normpath(_LOG_PATH)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with _lock:
            if os.path.exists(path) and os.path.getsize(path) > MAX_LOG_BYTES:
                os.replace(path, path + ".old")
            with open(path, "a", encoding="utf-8") as f:
                f.write(json.dumps(entry, ensure_ascii=False) + "\n")
        return True
    except Exception:
        return False
