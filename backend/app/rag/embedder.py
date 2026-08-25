# RuangTI Semantic Embedding Layer — fastembed (ONNX, CPU-friendly, no torch)
# Model: paraphrase-multilingual-MiniLM-L12-v2 (384-dim, Multilingual, ~100 languages incl. Bahasa Indonesia)
import threading
from typing import List

EMBED_DIM = 384
MODEL_NAME = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

_model = None
_lock = threading.Lock()


def _get_model():
    global _model
    if _model is None:
        with _lock:
            if _model is None:
                from fastembed import TextEmbedding
                # threads=2: single-query embedding is tiny; an all-core session
                # here thrashes against the cross-encoder session (both ONNX)
                # and slows every search by ~10x under sustained load.
                _model = TextEmbedding(MODEL_NAME, threads=2)
    return _model


def embed_texts(texts: List[str]) -> List[List[float]]:
    """Embed passages for indexing."""
    if not texts:
        return []
    model = _get_model()
    return [list(v) for v in model.embed(texts)]


def embed_query(query: str) -> List[float]:
    """Embed a search query."""
    model = _get_model()
    return list(model.embed([query]))[0]


# --- Cross-Encoder Reranker (Pass 5) ---
# Xenova/ms-marco-MiniLM-L-6-v2: ONNX, ~90MB, CPU-friendly. Lazy-loaded on
# first search; returns None on any failure so the engine falls back to pure
# RRF ordering (graceful degradation, never hard-fails).
CROSS_ENCODER_MODEL = "Xenova/ms-marco-MiniLM-L-6-v2"

_ce_model = None
_ce_failed = False
_ce_lock = threading.Lock()


def get_cross_encoder():
    """Return a shared TextCrossEncoder instance, or None if unavailable."""
    global _ce_model, _ce_failed
    if _ce_failed:
        return None
    if _ce_model is None:
        with _ce_lock:
            if _ce_model is None:
                try:
                    from fastembed.rerank.cross_encoder import TextCrossEncoder
                    _ce_model = TextCrossEncoder(
                        CROSS_ENCODER_MODEL,
                        lazy_load=True,
                        threads=4,  # bounded: coexists with the 2-thread embedder
                    )
                except Exception as e:
                    print(f"[embedder] cross-encoder init failed, rerank disabled: {e}")
                    _ce_failed = True
                    return None
    try:
        _ce_model.model  # force actual model load on first use
        return _ce_model
    except Exception as e:
        print(f"[embedder] cross-encoder load failed, rerank disabled: {e}")
        _ce_failed = True
        return None
