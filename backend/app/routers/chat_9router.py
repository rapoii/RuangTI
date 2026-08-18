import os
import json
import httpx
from typing import AsyncGenerator, List, Dict, Any

from app.rag.engine import rag_engine

ROUTER_9_BASE_URL = os.getenv("ROUTER_9_BASE_URL", "http://localhost:20128/v1")
ROUTER_9_MODEL = "gcli/grok-4.5-high(xhigh)"

BASE_SYSTEM_PROMPT = """Kamu adalah RuangTI AI Co-Pilot — Asisten Cerdas Spesialis Rekayasa Sistem & Teknik Industri untuk sivitas akademika Universitas Sultan Ageng Tirtayasa (Untirta) dan praktisi industri.

Karakteristik & Prinsip Menjawab:
1. Domain Keilmuan: Kuasai Perancangan Tata Letak Fasilitas (PTLF), Supply Chain Management & Inventory (EOQ, ROP), Lean Six Sigma & QC (DMAIC, SPC, FMEA, DPMO), Ergonomi & Work Design (Westinghouse Rating, Waktu Baku, REBA/RULA), Riset Operasi (Linear Programming, Simplex, Transportasi), dan Simulasi Sistem Industri.
2. Penulisan Matematika: Gunakan KaTeX / LaTeX standar. Tuliskan formula matematika di dalam blok $$ ... $$ untuk persamaan utama atau $ ... $ untuk variabel inline.
3. Basis Pengetahuan Terverifikasi (RAG Context): Jika konteks referensi materi akademik disertakan, prioritaskan formula, metodologi, standar tabel, dan notasi resmi yang tercantum di referensi tersebut.
4. Gaya Bahasa: Bahasa Indonesia profesional, presisi, solutif, analitis, dan sistematis.
5. Struktur Jawaban:
   - **Identifikasi Masalah / Pendekatan Metodologi**
   - **Formulasi Matematis & Parameter** (Gunakan $$ ... $$)
   - **Langkah Komputasi & Solusi**
   - **Interpretasi & Rekomendasi Manajerial / Implementasi Lapangan**
   - **Referensi Kurikulum / Modul Terkait** (Sebutkan modul akademik terkait jika ada di context)
"""

async def stream_grok_ai_response(
    prompt: str,
    history: List[Dict[str, str]] = None,
    model_name: str = ROUTER_9_MODEL
) -> AsyncGenerator[str, None]:
    """
    Streaming AI response langsung dari 9Router LLM Proxy menggunakan model 'gcli/grok-4.5-high(xhigh)'
    diperkaya dengan Retrieval-Augmented Generation (RAG) dari 74+ Modul Teknik Industri Untirta.
    """
    # 1. Retrieve Knowledge Base Chunks (RAG)
    rag_chunks = rag_engine.search(prompt, top_k=3)
    
    rag_context_text = ""
    if rag_chunks:
        rag_context_text = "\n\n=== [BASIS PENGETAHUAN & DOKUMEN REFERENSI TEKNIK INDUSTRI] ===\n"
        for idx, chunk in enumerate(rag_chunks, 1):
            rag_context_text += f"\n--- [Dokumen #{idx}: {chunk['title']} (Sumber: {chunk['doc_path']})] ---\n"
            rag_context_text += f"{chunk['content']}\n"
        rag_context_text += "\n=== [AKHIR REFERENSI PENGETAHUAN] ===\n"

    system_prompt = BASE_SYSTEM_PROMPT
    if rag_context_text:
        system_prompt += f"\nBerikut adalah referensi materi akademik terverifikasi yang relevan dengan pertanyaan user. Gunakan referensi ini untuk memastikan jawabanmu 100% akurat dan matematis:\n{rag_context_text}"

    messages = [{"role": "system", "content": system_prompt}]
    
    if history:
        for msg in history:
            messages.append({"role": msg.get("role", "user"), "content": msg.get("content", "")})
            
    messages.append({"role": "user", "content": prompt})

    # Kirim ke 9Router
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
