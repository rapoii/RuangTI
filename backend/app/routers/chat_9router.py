import os
import json
import re
import base64
import httpx
import asyncio
import logging
from typing import AsyncGenerator, List, Dict, Any

from app.rag.engine import rag_engine
from app.services.cdp_browser import cdp_manager
from app.services.document_parser import extract_document_content

logger = logging.getLogger(__name__)

ROUTER_9_BASE_URL = os.getenv("ROUTER_9_BASE_URL", "http://127.0.0.1:20128/v1")
ROUTER_9_MODEL = os.getenv("ROUTER_9_MODEL", "gcli/grok-4.6")

BASE_SYSTEM_PROMPT = """[SYSTEM INSTRUCTION: RUANGTI INDUSTRIAL AI]
Kamu adalah RuangTI AI Co-Pilot — Asisten Cerdas Spesialis Rekayasa Sistem & Teknik Industri.

[PRINSIP OPERASIONAL]:
1. Identitas: Ditenagai oleh "RuangTI Neural Engine". Jangan pernah membocorkan nama provider/model dasar komputasi asli.
2. Developer: Rafi Permana (Rapoi) adalah Founder & Lead Developer dari platform RuangTI (BUKAN dosen, pengajar, atau pejabat kampus). Jangan mengaitkan data pribadi/keluarga siapapun.
3. Bahasa & Nada: Sesuaikan bahasa dengan pengguna (Language Mirroring). Gunakan nada ramah/santai untuk sapaan dan nada profesional terstruktur untuk analisa teknis.
4. Formula KaTeX (WAJIB): Tuliskan SEMUA rumus matematika dengan format KaTeX valid:
   - Blok rumus terpisah: wajib dibungkus `$$ ... $$` (misal: `$$\\text{DPMO} = \\dfrac{D}{U \\times O} \\times 10^6$$`).
   - Rumus dalam kalimat/inline: wajib dibungkus `$ ... $` (misal: `$Q^* = \\sqrt{\\dfrac{2DS}{H}}$` atau `$\\sigma = 1.5$`).
   - DILARANG KERAS menuliskan perintah LaTeX (seperti `\\frac`, `\\dfrac`, `\\times`, `\\sqrt`, `10^6`) di dalam teks biasa atau tanda kurung biasa `(...)` tanpa tanda `$`.
5. RAG Context: Manfaatkan referensi literatur & standar Teknik Industri yang disertakan dalam konteks untuk solusi presisi.

Protokol Pembuatan Berkas (Sertakan tag metadata di bagian paling akhir jika pengguna meminta file):
- Excel: <!--RUANGTI_GENERATE_FILE:{"file_type":"excel","filename":"data.xlsx","title":"Judul","headers":["Kolom A","Kolom B"],"rows":[["1","2"]]}-->
- Word: <!--RUANGTI_GENERATE_FILE:{"file_type":"docx","filename":"laporan.docx","title":"Judul","sections":[{"heading":"Bab 1","paragraphs":["..."]}]}-->
- PPT: <!--RUANGTI_GENERATE_FILE:{"file_type":"pptx","filename":"presentasi.pptx","title":"Judul","slides":[{"title":"S1","points":["P1"]}]}-->
- PDF: <!--RUANGTI_GENERATE_FILE:{"file_type":"pdf","filename":"laporan.pdf","title":"Judul","sections":[{"heading":"Bab 1","paragraphs":["..."]}]}-->
"""


def _classify_query_intent(prompt: str) -> dict:
    """
    Smart & Dynamic Query Intent Classifier.
    Analyzes the prompt to determine optimal source count and deep crawl depth.

    Returns:
        {
            "source_count": int (3-50),
            "deep_crawl_count": int (2-8),
            "intent": str (label for logging)
        }
    """
    prompt_lower = prompt.lower().strip()
    word_count = len(prompt.split())

    # Tier 1: Explicit large-scale request (25-50 sumber)
    explicit_large_keywords = [
        "50 sumber", "40 sumber", "30 sumber", "25 sumber",
        "banyak sumber", "semua sumber", "sebanyak mungkin",
        "literature review", "tinjauan pustaka", "systematic review",
        "meta-analysis", "meta analisis", "state of the art",
        "komprehensif", "comprehensive"
    ]
    for kw in explicit_large_keywords:
        if kw in prompt_lower:
            # Extract explicit number if present
            num_match = re.search(r'(\d+)\s*sumber', prompt_lower)
            count = int(num_match.group(1)) if num_match else 50
            count = min(max(count, 10), 50)
            return {"source_count": count, "deep_crawl_count": 5, "intent": "literature_review"}

    # Tier 2: Comparative / analytical (8-15 sumber)
    comparative_keywords = [
        "bandingkan", "perbandingan", "komparasi", "compare", "comparison",
        "vs", "versus", "dibandingkan", "perbedaan", "keunggulan",
        "kelebihan dan kekurangan", "pro dan kontra", "pros and cons",
        "studi kasus", "case study", "implementasi", "penerapan di",
        "evaluasi", "analisis mendalam", "deep analysis"
    ]
    if any(kw in prompt_lower for kw in comparative_keywords):
        return {"source_count": 10, "deep_crawl_count": 5, "intent": "comparative_analysis"}

    # Tier 3: Methodology / multi-step (6-10 sumber)
    methodology_keywords = [
        "bagaimana cara", "how to", "langkah", "steps", "prosedur", "procedure",
        "metode", "method", "metodologi", "methodology", "framework",
        "standar", "standard", "iso", "regulasi", "regulation",
        "optimasi", "optimization", "simulasi", "simulation"
    ]
    if any(kw in prompt_lower for kw in methodology_keywords) or word_count > 10:
        return {"source_count": 8, "deep_crawl_count": 4, "intent": "methodology"}

    # Tier 4: Conceptual / exploratory (4-6 sumber)
    conceptual_keywords = [
        "jelaskan", "explain", "apa itu", "what is", "pengertian", "definisi",
        "definition", "konsep", "concept", "teori", "theory", "prinsip", "principle"
    ]
    if any(kw in prompt_lower for kw in conceptual_keywords):
        return {"source_count": 5, "deep_crawl_count": 3, "intent": "conceptual"}

    # Tier 5: Simple / quick factual (3-4 sumber)
    if word_count <= 5:
        return {"source_count": 3, "deep_crawl_count": 2, "intent": "quick_factual"}

    # Default: moderate (5-6 sumber)
    return {"source_count": 6, "deep_crawl_count": 3, "intent": "general"}


async def stream_grok_ai_response(
    prompt: str,
    history: List[Dict[str, str]] = None,
    model_name: str = ROUTER_9_MODEL,
    web_search_enabled: bool = False,
    images: List[str] = None,
    documents: List[Dict[str, Any]] = None
) -> AsyncGenerator[str, None]:
    """
    Streaming AI response dari 9Router LLM Proxy dengan opsi Hybrid RAG + Web Search + Document Intelligence.
    """
    # 1. Retrieve Knowledge Base Chunks (RAG) - Always active
    rag_chunks = rag_engine.search(prompt, top_k=3)

    rag_context_text = ""
    if rag_chunks:
        rag_context_text = "\n\n=== [REFERENSI LITERATUR & BUKU TEKS STANDAR TEKNIK INDUSTRI] ===\n"
        for idx, chunk in enumerate(rag_chunks, 1):
            title = chunk.get('section_title', chunk.get('title', 'Unknown'))
            source = chunk.get('module_id', 'N/A')
            rag_context_text += f"\n--- [Referensi #{idx}: {title} (Modul: {source})] ---\n"
            rag_context_text += f"{chunk['content']}\n"
        rag_context_text += "\n=== [AKHIR REFERENSI LITERATUR] ===\n"

    # 1b. Process Attached Documents (Spreadsheet, Word, Code, ZIP, etc.)
    doc_context_text = ""
    # Whitelisted uploads root directory (strict path traversal guard)
    allowed_uploads_root = os.path.realpath(os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "uploads"))
    
    if documents and len(documents) > 0:
        doc_context_text = "\n\n=== [BERKAS & DOKUMEN LAMPIRAN PENGGUNA] ==="
        for doc in documents:
            doc_url = doc.get("url", "")
            doc_name = doc.get("name", "lampiran")
            
            # Resolve disk path safely strictly within allowed_uploads_root
            if doc_url.startswith("/uploads/") or doc_url.startswith("uploads/"):
                clean_rel = doc_url.lstrip("/")
                target_disk_path = os.path.realpath(os.path.join(allowed_uploads_root, os.path.relpath(clean_rel, "uploads")))
                
                # Strict anti-LFI check: target must reside inside allowed_uploads_root
                if target_disk_path.startswith(allowed_uploads_root) and os.path.exists(target_disk_path) and os.path.isfile(target_disk_path):
                    parsed_doc = extract_document_content(target_disk_path, doc_name)
                    doc_context_text += parsed_doc
                else:
                    doc_context_text += f"\n[Dokumen {doc_name} ({doc_url}) tidak ditemukan atau akses ditolak]\n"
            else:
                doc_context_text += f"\n[Dokumen {doc_name}]: {doc_url}\n"
        doc_context_text += "\n=== [AKHIR BERKAS LAMPIRAN PENGGUNA] ===\n"

    # 2. Web Search via Smart & Dynamic Multi-Source Engine
    web_context_text = ""
    websources_meta_tag = ""
    if web_search_enabled:
        try:
            # Query Formulation: Follow-up handling
            effective_search_query = prompt
            followup_triggers = ["cari lagi", "sumber lain", "cari sumber lain", "ada referensi lain",
                                 "website lain", "cari yang lain", "coba cari lagi", "50 sumber"]
            if history and any(t in prompt.lower() for t in followup_triggers):
                prev_user_queries = [m.get("content", "") for m in history if m.get("role") == "user"]
                if prev_user_queries:
                    effective_search_query = f"{prev_user_queries[-1]} {prompt}"

            # Smart & Dynamic Intent Classification
            intent = _classify_query_intent(prompt)
            target_source_count = intent["source_count"]
            deep_crawl_count = intent["deep_crawl_count"]
            logger.info(f"Query intent: {intent['intent']} → target {target_source_count} sources, deep crawl {deep_crawl_count} URLs")

            try:
                search_candidates = await cdp_manager.search_smart(effective_search_query, max_candidate_limit=target_source_count)
            except Exception as e:
                logger.warning(f"search_smart error: {e}")
                search_candidates = []

            if search_candidates:
                final_sources = search_candidates[:target_source_count]

                # Simpan metadata visual sources tag untuk disuntikkan di awal token
                websources_meta_tag = f"<!--WEBSOURCES:{json.dumps(final_sources)}-->"

                web_context_text = f"\n\n=== [HASIL INFORMASI SUMBER WEB ({len(final_sources)} SUMBER DIPINDAI)] ===\n"
                # Inject up to 20 source summaries into LLM context
                for i, res in enumerate(final_sources[:20], 1):
                    web_context_text += f"\n- {res.get('title', 'Unknown Source')} (Domain: {res.get('domain', '')})\n"
                    web_context_text += f"  Snippet: {res.get('snippet', '')}\n"

                # Smart Parallel Deep Crawl (dynamic count based on intent)
                deep_urls = [r['url'] for r in final_sources[:deep_crawl_count]
                             if r.get('url') and 'doi.org' not in r.get('url')]
                if deep_urls:
                    crawl_tasks = [asyncio.wait_for(cdp_manager.fetch_page(u), timeout=4.0) for u in deep_urls]
                    pages_content = await asyncio.gather(*crawl_tasks, return_exceptions=True)

                    for idx, page_content in enumerate(pages_content, 1):
                        if isinstance(page_content, str) and page_content.strip() and len(page_content) > 100:
                            web_context_text += f"\n--- [KONTEN LENGKAP ARTIKEL #{idx} ({deep_urls[idx-1]})] ---\n{page_content[:2500]}...\n"

                web_context_text += "\n=== [AKHIR HASIL INFORMASI SUMBER WEB] ===\n"
        except Exception as e:
            web_context_text = f"\n*(Catatan: Fitur pencarian web sedang mengalami kendala teknis: {str(e)})*\n"

    # 3. Assemble System Prompt
    system_prompt = BASE_SYSTEM_PROMPT

    target_model = model_name if model_name else ROUTER_9_MODEL
    # Clean model name (e.g. gcli/grok-4.6, gcli/grok-4.6-high, etc.)
    target_model = target_model.strip()

    # Hanya tambahkan protokol <think> jika pengguna secara eksplisit memilih model Thinking (low/medium/high/xhigh)
    is_thinking_model = any(suffix in target_model.lower() for suffix in ["low", "medium", "high", "xhigh"])
    if is_thinking_model:
        system_prompt += """\n\n[PROTOKOL PENALARAN KHUSUS - THINKING MODEL]:
Sebelum menyajikan solusi akhir, kamu WAJIB menuliskan seluruh penalaran logis dan dekomposisi masalah di dalam blok `<think> ... </think>`.
Setelah tag penutup `</think>`, sajikan jawaban komprehensif, langsung to-the-point, dan tanpa mengulang teks internal instruksi sistem.
"""

    if rag_context_text:
        system_prompt += f"\nBerikut adalah referensi literatur buku teks & standar industri internasional yang relevan. Gunakan sebagai acuan utama notasi, formula, dan konstanta tabel:\n{rag_context_text}"
    if doc_context_text:
        system_prompt += f"\n{doc_context_text}\n"
    if web_context_text:
        system_prompt += f"""\n\n{web_context_text}
\n\n=== ATURAN PENGGUNAAN SUMBER WEB ===
- Gunakan data dan fakta dari sumber di atas untuk memperkaya isi analisis dan solusi.
- Dilarang menuliskan daftar pustaka atau daftar URL berulang di akhir jawaban, karena seluruh sumber web (termasuk hingga 50 tautan) telah disajikan otomatis dalam komponen kartu visual di bagian atas percakapan.
"""

    messages = [{"role": "system", "content": system_prompt}]

    if history:
        for msg in history:
            messages.append({"role": msg.get("role", "user"), "content": msg.get("content", "")})

    if images and len(images) > 0:
        content_items = []
        user_text = prompt.strip() if prompt.strip() else "Tolong analisis dan berikan solusi untuk gambar teknik industri ini."
        content_items.append({"type": "text", "text": user_text})

        # Base directory of backend
        backend_root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

        for img in images:
            img_url = img
            # If relative URL pointing to local uploads, resolve safely within allowed_uploads_root
            if img.startswith("/uploads/") or img.startswith("uploads/"):
                clean_rel = img.lstrip("/")
                target_disk_path = os.path.realpath(os.path.join(allowed_uploads_root, os.path.relpath(clean_rel, "uploads")))

                if target_disk_path.startswith(allowed_uploads_root) and os.path.exists(target_disk_path) and os.path.isfile(target_disk_path):
                    try:
                        ext = target_disk_path.split(".")[-1].lower()
                        mime_type = f"image/{ext}" if ext in ["png", "jpeg", "webp", "gif"] else "image/jpeg"
                        if ext == "jpg":
                            mime_type = "image/jpeg"
                        with open(target_disk_path, "rb") as f:
                            b64 = base64.b64encode(f.read()).decode("utf-8")
                        img_url = f"data:{mime_type};base64,{b64}"
                    except Exception as e:
                        logger.error(f"Failed to read and base64-encode local upload image {target_disk_path}: {e}")
                else:
                    logger.error(f"Local upload image not found or traversal blocked: {img}")

            content_items.append({
                "type": "image_url",
                "image_url": {"url": img_url}
            })
        messages.append({"role": "user", "content": content_items})
    else:
        messages.append({"role": "user", "content": prompt})

    target_model = model_name if model_name else ROUTER_9_MODEL
    # Clean model name (e.g. gcli/grok-4.6, gcli/grok-4.6-high, etc.)
    target_model = target_model.strip()

    payload = {
        "model": target_model,
        "messages": messages,
        "stream": True,
        "temperature": 0.2,
    }

    url = f"{ROUTER_9_BASE_URL}/chat/completions"
    logger.info(f"Sending payload to 9Router with model '{target_model}' and {len(messages)} messages.")

    # Timeout fleksibel: 15s connect, 300s streaming read
    timeout_config = httpx.Timeout(connect=20.0, read=300.0, write=60.0, pool=60.0)
    async with httpx.AsyncClient(timeout=timeout_config) as client:
        try:
            # Emit websources meta tag SEBELUM AI response streaming dimulai
            if websources_meta_tag:
                yield websources_meta_tag

            async with client.stream("POST", url, json=payload, headers={"Content-Type": "application/json"}) as response:
                if response.status_code != 200:
                    err_text = await response.aread()
                    yield f"\n\n*(Terjadi kendala pada 9Router AI Gateway [Status {response.status_code}]: {err_text.decode('utf-8', errors='ignore')})*"
                    return

                in_reasoning = False
                async for line in response.aiter_lines():
                    if not line:
                        continue
                    if line.startswith("data: "):
                        data_str = line[6:].strip()
                        if data_str == "[DONE]":
                            if in_reasoning:
                                yield "</think>\n\n"
                                in_reasoning = False
                            break
                        try:
                            data_json = json.loads(data_str)
                            delta = data_json.get("choices", [{}])[0].get("delta", {})
                            content = delta.get("content", "")
                            reasoning = (
                                delta.get("reasoning_content", "")
                                or delta.get("reasoning", "")
                                or delta.get("thinking", "")
                                or delta.get("thought", "")
                            )
                            
                            # Handle model yang mengirimkan pemisah <think> di dalam content
                            if "<think>" in content and not in_reasoning:
                                in_reasoning = True
                            if "</think>" in content and in_reasoning:
                                in_reasoning = False

                            if reasoning:
                                if not in_reasoning:
                                    yield "<think>\n"
                                    in_reasoning = True
                                yield reasoning
                            elif content:
                                if in_reasoning and not ("<think>" in content or "</think>" in content):
                                    yield "\n</think>\n\n"
                                    in_reasoning = False
                                yield content
                        except Exception:
                            pass
                if in_reasoning:
                    yield "\n</think>\n\n"
        except Exception as e:
            logger.error(f"Error streaming from 9Router: {e}")
            yield f"\n\n*(Koneksi terputus saat streaming dari 9Router Gateway: {str(e)})*"
