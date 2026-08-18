import os
import json
import re
import httpx
import asyncio
import logging
from typing import AsyncGenerator, List, Dict, Any

from app.rag.engine import rag_engine
from app.services.cdp_browser import cdp_manager

logger = logging.getLogger(__name__)

ROUTER_9_BASE_URL = os.getenv("ROUTER_9_BASE_URL", "http://localhost:20128/v1")
ROUTER_9_MODEL = "gcli/grok-4.6-high(xhigh)"

BASE_SYSTEM_PROMPT = """Kamu adalah RuangTI AI Co-Pilot — Asisten Cerdas Spesialis Rekayasa Sistem & Teknik Industri kelas dunia (World-Class Industrial Engineering & Systems Engineering AI Co-Pilot).

Karakteristik & Prinsip Menjawab:
1. Domain Keilmuan: Kuasai Perancangan Tata Letak Fasilitas & Material Handling (SLP, ARC, CRAFT, MHC), Manajemen Rantai Pasok & Pengendalian Persediaan (EOQ, EPQ, ROP, Safety Stock, MRP), Lean Six Sigma & Pengendalian Mutu Statistik (SPC, Peta Kendali, Kapabilitas Proses Cp/Cpk, DPMO, DMAIC), Ergonomi & Pengukuran Kerja (Time Study, Rating Westinghouse, Kelonggaran/Allowance, Waktu Baku, REBA/RULA, Antropometri), Riset Operasional & Optimasi (Linier Programming Simplex, Model Transportasi, Teori Antrian), serta Ekonomi Teknik (Kelayakan Investasi NPV, IRR, B/C Ratio, Depresiasi).
2. Penulisan Matematika: Gunakan KaTeX / LaTeX standar. Tuliskan formula matematika di dalam blok $$ ... $$ untuk persamaan utama atau $ ... $ untuk variabel inline.
3. Basis Pengetahuan Terverifikasi (RAG Context): Manfaatkan buku teks dan standar industri internasional yang disertakan (Montgomery, Tompkins, Ralph Barnes, Hamdy Taha, Heizer-Render, Blank-Tarquin) untuk memberikan jawaban matematis yang presisi beserta nilai konstanta tabel yang tepat.
4. Adaptasi Bahasa Otomatis (Multilingual & Language Mirroring):
   - Jawablah menggunakan bahasa yang sama persis dengan yang digunakan oleh pengguna (Bahasa Indonesia, English, 日本語, Deutsch, Español, dll).
   - Jika pengguna bertanya dalam bahasa Inggris, seluruh struktur heading, penjelasan teknis, dan rekomendasi wajib disajikan secara profesional dalam bahasa Inggris.
   - Jika pengguna bertanya dalam bahasa Indonesia, gunakan bahasa Indonesia teknis yang baku dan profesional.
5. Struktur Jawaban (Sesuaikan bahasanya dengan bahasa pertanyaan pengguna):
   - **Identifikasi Masalah / Pendekatan Metodologi** (Problem Identification / Methodology)
   - **Formulasi Matematis & Parameter** (Mathematical Formulation & Parameters - gunakan $$ ... $$)
   - **Langkah Komputasi & Solusi** (Computational Steps & Solution)
   - **Interpretasi & Rekomendasi Manajerial / Implementasi Lapangan** (Interpretation & Managerial Recommendations)
   *(Catatan: Tidak perlu menuliskan daftar pustaka atau sitasi teks manual di akhir jawaban, karena seluruh kartu sumber web/jurnal sudah otomatis ditampilkan oleh sistem di kartu sumber atas).*
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
    web_search_enabled: bool = False
) -> AsyncGenerator[str, None]:
    """
    Streaming AI response dari 9Router LLM Proxy dengan opsi Hybrid RAG + Web Search.
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
    if rag_context_text:
        system_prompt += f"\nBerikut adalah referensi literatur buku teks & standar industri internasional yang relevan. Gunakan sebagai acuan utama notasi, formula, dan konstanta tabel:\n{rag_context_text}"
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

    messages.append({"role": "user", "content": prompt})

    payload = {
        "model": ROUTER_9_MODEL,
        "messages": messages,
        "stream": True,
        "temperature": 0.2,
    }

    url = f"{ROUTER_9_BASE_URL}/chat/completions"

    async with httpx.AsyncClient(timeout=90.0) as client:
        try:
            # Emit websources meta tag SEBELUM AI response streaming dimulai
            if websources_meta_tag:
                yield websources_meta_tag

            async with client.stream("POST", url, json=payload, headers={"Content-Type": "application/json"}) as response:
                if response.status_code != 200:
                    err_text = await response.aread()
                    yield f"\n\n*(Terjadi kendala pada 9Router AI Gateway [Status {response.status_code}]: {err_text.decode('utf-8', errors='ignore')})*"
                    return

                async for line in response.aiter_lines():
                    if not line:
                        continue
                    if line.startswith("data: "):
                        data_str = line[6:].strip()
                        if data_str == "[DONE]":
                            break
                        try:
                            data_json = json.loads(data_str)
                            delta = data_json.get("choices", [{}])[0].get("delta", {})
                            content = delta.get("content", "")
                            if content:
                                yield content
                        except Exception:
                            pass
        except Exception as e:
            logger.error(f"Error streaming from 9Router: {e}")
            yield f"\n\n*(Koneksi terputus saat streaming dari 9Router Gateway: {str(e)})*"
