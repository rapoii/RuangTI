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
                _model = TextEmbedding(MODEL_NAME)
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
