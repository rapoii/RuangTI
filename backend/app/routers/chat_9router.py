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

BASE_SYSTEM_PROMPT = """Kamu adalah RuangTI AI Co-Pilot — Asisten Cerdas Spesialis Rekayasa Sistem & Teknik Industri kelas dunia.

Karakteristik & Prinsip Menjawab:
1. Domain Keilmuan: Kuasai Perancangan Tata Letak Fasilitas & Material Handling (SLP, ARC, CRAFT, MHC), Manajemen Rantai Pasok & Pengendalian Persediaan (EOQ, EPQ, ROP, Safety Stock, MRP), Lean Six Sigma & Pengendalian Mutu Statistik (SPC, Peta Kendali, Kapabilitas Proses Cp/Cpk, DPMO, DMAIC), Ergonomi & Pengukuran Kerja (Time Study, Rating Westinghouse, Kelonggaran/Allowance, Waktu Baku, REBA/RULA, Antropometri), Riset Operasional & Optimasi (Linier Programming Simplex, Model Transportasi, Teori Antrian), serta Ekonomi Teknik (Kelayakan Investasi NPV, IRR, B/C Ratio, Depresiasi).
2. Penulisan Matematika: Gunakan KaTeX / LaTeX standar. Tuliskan formula matematika di dalam blok $$ ... $$ untuk persamaan utama atau $ ... $ untuk variabel inline.
3. Basis Pengetahuan Terverifikasi (RAG Context): Manfaatkan buku teks dan standar industri internasional yang disertakan (Montgomery, Tompkins, Ralph Barnes, Hamdy Taha, Heizer-Render, Blank-Tarquin) untuk memberikan jawaban matematis yang presisi beserta nilai konstanta tabel yang tepat.
4. Gaya Bahasa: Bahasa Indonesia profesional, presisi, solutif, analitis, dan sistematis.
5. Struktur Jawaban:
   - **Identifikasi Masalah / Pendekatan Metodologi**
   - **Formulasi Matematis & Parameter** (Gunakan $$ ... $$)
   - **Langkah Komputasi & Solusi**
   - **Interpretasi & Rekomendasi Manajerial / Implementasi Lapangan**
   - **Referensi Literatur Ilmiah Terkait** (Cantumkan referensi buku/jurnal standar internasional yang relevan)
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

    # 2. Web Search via CDP (Optional)
    web_context_text = ""
    if web_search_enabled:
        try:
            search_results = await cdp_manager.search_google(prompt, max_results=3)
            if search_results:
                web_context_text = "\n\n=== [HASIL PENCARIAN WEB TERBARU & DAFTAR SITASI (LIVE)] ===\n"
                for i, res in enumerate(search_results, 1):
                    web_context_text += f"\n[Sumber #{i}]: {res.get('title', 'Unknown Source')}\n"
                    web_context_text += f"URL: {res.get('url', '')}\n"
                    web_context_text += f"Snippet: {res.get('snippet', '')}\n"

                # Fetch top result content for deeper context
                top_url = search_results[0].get('url')
                if top_url:
                    page_content = await cdp_manager.fetch_page(top_url)
                    if page_content:
                        web_context_text += f"\n--- [KONTEN LENGKAP DARI SUMBER #1] ---\n{page_content[:4000]}...\n"

                web_context_text += "\n=== [AKHIR HASIL PENCARIAN WEB] ===\n"
                web_context_text += """
*ATURAN PENULISAN SITASI & SUMBER WEB:*
1. Apabila kamu mengutip data/fakta dari hasil pencarian web di atas, gunakan penanda sitasi link markdown standar: `[1](URL_SUMBER_1)`, `[2](URL_SUMBER_2)` (gunakan satu kurung siku biasa, BUKAN double bracket).
2. Di akhir jawaban pada bagian **Referensi Literatur Ilmiah Terkait**, buat sub-bagian **Sumber Web Terkini:** dengan format bersih tanpa format berlebihan:
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

