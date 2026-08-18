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


async def stream_grok_ai_response(
    prompt: str,
    history: List[Dict[str, str]] = None,
    model_name: str = ROUTER_9_MODEL,
    web_search_enabled: bool = False
) -> AsyncGenerator[str, None]:
    """
    Streaming AI response dari 9Router LLM Proxy dengan opsi Hybrid RAG + Web Search via CDP.
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

    # 2. Web Search via Smart & Dynamic Multi-Page Crawler (Up to 50 Candidates, Dynamic Filtering)
    web_context_text = ""
    websources_meta_tag = ""
    if web_search_enabled:
        try:
            # Query Formulation: Follow-up handling
            effective_search_query = prompt
            followup_triggers = ["cari lagi", "sumber lain", "cari sumber lain", "ada referensi lain", "website lain", "cari yang lain", "coba cari lagi", "50 sumber"]
            if history and any(t in prompt.lower() for t in followup_triggers):
                prev_user_queries = [m.get("content", "") for m in history if m.get("role") == "user"]
                if prev_user_queries:
                    effective_search_query = f"{prev_user_queries[-1]} {prompt}"

            try:
                search_candidates = await cdp_manager.search_smart(effective_search_query, max_candidate_limit=50)
            except Exception as e:
                logger.warning(f"search_smart error: {e}")
                search_candidates = []

            if search_candidates:
                prompt_lower = prompt.lower()
                # Jika user meminta banyak sumber / 50 sumber secara eksplisit
                if any(w in prompt_lower for w in ["50 sumber", "banyak sumber", "literature review", "tinjauan pustaka", "komprehensif", "semua sumber"]):
                    selected_sources_count = min(len(search_candidates), 50)
                else:
                    prompt_word_count = len(prompt.split())
                    is_complex = any(k in prompt_lower for k in ["bandingkan", "vs", "komparasi", "analisis", "perbedaan", "standar", "metode", "optimasi"]) or prompt_word_count > 6

                    if is_complex:
                        selected_sources_count = min(len(search_candidates), 6)
                    elif prompt_word_count <= 4:
                        selected_sources_count = min(len(search_candidates), 3)
                    else:
                        selected_sources_count = min(len(search_candidates), 4)

                final_sources = search_candidates[:selected_sources_count]

                # Simpan metadata visual sources tag untuk disuntikkan di awal token
                websources_meta_tag = f"<!--WEBSOURCES:{json.dumps(final_sources)}-->"

                web_context_text = f"\n\n=== [HASIL INFORMASI SUMBER WEB ({len(final_sources)} SUMBER DIPINDAI)] ===\n"
                for i, res in enumerate(final_sources[:20], 1):
                    web_context_text += f"\n- {res.get('title', 'Unknown Source')} (Domain: {res.get('domain', '')})\n"
                    web_context_text += f"  Snippet: {res.get('snippet', '')}\n"

                # Parallel Deep Crawl Top 2-3 Selected URLs (timeout 3s)
                deep_urls = [r['url'] for r in final_sources[:3] if r.get('url') and 'doi.org' not in r.get('url')]
                if deep_urls:
                    crawl_tasks = [asyncio.wait_for(cdp_manager.fetch_page(u), timeout=3.0) for u in deep_urls]
                    pages_content = await asyncio.gather(*crawl_tasks, return_exceptions=True)
                    
                    for idx, content in enumerate(pages_content, 1):
                        if isinstance(content, str) and content.strip():
                            web_context_text += f"\n--- [KONTEN LENGKAP ARTIKEL #{idx} ({deep_urls[idx-1]})] ---\n{content[:2000]}...\n"

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
