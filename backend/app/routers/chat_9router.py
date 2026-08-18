import os
import json
import httpx
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
   - Jika pengguna bertanya dalam bahasa Inggris, seluruh struktur heading, penjelasan teknis, rekomendasi, dan sitasi wajib disajikan secara profesional dalam bahasa Inggris (misalnya: Problem Identification / Methodology, Mathematical Formulation, Computation Steps, Managerial Recommendations, Scientific Literature References, Latest Web Sources).
   - Jika pengguna bertanya dalam bahasa Indonesia, gunakan bahasa Indonesia teknis yang baku dan profesional.
5. Struktur Jawaban (Sesuaikan bahasanya dengan bahasa pertanyaan pengguna):
   - **Identifikasi Masalah / Pendekatan Metodologi** (Problem Identification / Methodology)
   - **Formulasi Matematis & Parameter** (Mathematical Formulation & Parameters - gunakan $$ ... $$)
   - **Langkah Komputasi & Solusi** (Computational Steps & Solution)
   - **Interpretasi & Rekomendasi Manajerial / Implementasi Lapangan** (Interpretation & Managerial Recommendations)
   - **Referensi Literatur Ilmiah Terkait** (Related Scientific Literature References)
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

    # 2. Web Search via Multi-Source Crawler (Parallel Top-2 Deep Extract)
    web_context_text = ""
    if web_search_enabled:
        try:
            # Query Formulation: If user prompt is a follow-up ("cari lagi", "sumber lain", etc.), combine with previous context
            effective_search_query = prompt
            followup_triggers = ["cari lagi", "sumber lain", "cari sumber lain", "ada referensi lain", "website lain", "cari yang lain", "coba cari lagi"]
            if history and any(t in prompt.lower() for t in followup_triggers):
                # Ambil pertanyaan user terakhir sebelumnya
                prev_user_queries = [m.get("content", "") for m in history if m.get("role") == "user"]
                if prev_user_queries:
                    effective_search_query = f"{prev_user_queries[-1]} {prompt}"

            search_results = await cdp_manager.search_google(effective_search_query, max_results=5)
            if search_results:
                web_context_text = "\n\n=== [HASIL PENCARIAN WEB TERBARU & DAFTAR SITASI (LIVE)] ===\n"
                for i, res in enumerate(search_results, 1):
                    web_context_text += f"\n[Sumber #{i}]: {res.get('title', 'Unknown Source')}\n"
                    web_context_text += f"URL: {res.get('url', '')}\n"
                    web_context_text += f"Snippet: {res.get('snippet', '')}\n"

                # Parallel Deep Crawl Top 2 URLs
                deep_urls = [r['url'] for r in search_results[:2] if r.get('url')]
                if deep_urls:
                    crawl_tasks = [cdp_manager.fetch_page(u) for u in deep_urls]
                    pages_content = await asyncio.gather(*crawl_tasks, return_exceptions=True)
                    
                    for idx, content in enumerate(pages_content, 1):
                        if isinstance(content, str) and content.strip():
                            web_context_text += f"\n--- [KONTEN LENGKAP ARTIKEL #{idx} ({deep_urls[idx-1]})] ---\n{content[:4500]}...\n"

                web_context_text += "\n=== [AKHIR HASIL PENCARIAN WEB] ===\n"
                web_context_text += """
*ATURAN PENULISAN SITASI & SUMBER WEB:*
1. Apabila kamu mengutip data/fakta dari hasil pencarian web di atas, gunakan penanda sitasi link markdown standar: `[1](URL_SUMBER_1)`, `[2](URL_SUMBER_2)` (gunakan satu pasang kurung siku biasa).
2. Di akhir jawaban pada bagian **Referensi Literatur Ilmiah Terkait**, buat sub-bagian **Sumber Web Terkini:** dengan format bersih:
   - [1] [Judul Sumber Web 1](URL_SUMBER_1)
   - [2] [Judul Sumber Web 2](URL_SUMBER_2)
"""
        except Exception as e:
            web_context_text = f"\n*(Catatan: Fitur pencarian web sedang mengalami kendala teknis: {str(e)})*\n"

    # 3. Assemble System Prompt
    system_prompt = BASE_SYSTEM_PROMPT
    if rag_context_text:
        system_prompt += f"\nBerikut adalah referensi literatur buku teks & standar industri internasional yang relevan. Gunakan sebagai acuan utama notasi, formula, dan konstanta tabel:\n{rag_context_text}"
    if web_context_text:
        system_prompt += f"""\n\n{web_context_text}
\n\n=== PANDUAN PENULISAN SITASI SUMBER WEB ===
- Gunakan penanda sitasi link markdown standar: `[1](URL_SUMBER_1)` atau `[2](URL_SUMBER_2)` (satu pasang tanda kurung siku [ ], jangan gunakan double bracket [[ ]]).
- Pada bagian akhir respons di sub-bagian **Sumber Web Terkini:**, tuliskan:
  - [1] [Judul Sumber 1](URL_SUMBER_1)
  - [2] [Judul Sumber 2](URL_SUMBER_2)
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
                            continue
        except Exception as e:
            yield f"\n\n*(Gagal terhubung ke 9Router di {ROUTER_9_BASE_URL}: {str(e)})*"

