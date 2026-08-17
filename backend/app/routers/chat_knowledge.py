from typing import AsyncGenerator
import asyncio
import math
import re

async def generate_ai_response(prompt: str, model_id: str) -> AsyncGenerator[str, None]:
    """
    Industrial Engineering Knowledge Engine & Solver Integration
    """
    p = prompt.lower()
    
    if "from-to" in p or "ptlf" in p or "tata letak" in p or "mhc" in p or "material handling" in p:
        response = (
            "### 🏭 Analisis Perancangan Tata Letak Fasilitas (PTLF)\n\n"
            "Dalam merancang tata letak pabrik yang optimal untuk meminimalkan *Material Handling Cost* (MHC), "
            "berikut adalah formulasi matematis baku Teknik Industri:\n\n"
            "#### 1. Formulasi Matriks Kuantitatif: From-To Chart\n"
            "Matriks ini menghitung total momen perpindahan material antara departemen $i$ dan $j$:\n\n"
            "$$\\text{MHC} = \\sum_{i=1}^{n} \\sum_{j=1}^{n} D_{ij} \\times F_{ij} \\times C_{ij}$$\n\n"
            "**Keterangan Parameter:**\n"
            "- $D_{ij}$ : Jarak lintasan antara departemen $i$ ke departemen $j$ (meter)\n"
            "- $F_{ij}$ : Frekuensi perpindahan material per satuan waktu (trip/hari)\n"
            "- $C_{ij}$ : Biaya pemindahan bahan per meter (Rp/meter/trip)\n\n"
            "#### 2. Derajat Hubungan Kualitatif (Activity Relationship Chart / ARC)\n"
            "- **A (Absolutely Necessary)**: Nilai 4 — Sangat mutlak berdekatan\n"
            "- **E (Especially Important)**: Nilai 3 — Sangat penting\n"
            "- **I (Important)**: Nilai 2 — Penting\n"
            "- **O (Ordinary Closeness)**: Nilai 1 — Kedekatan biasa\n"
            "- **U (Unimportant)**: Nilai 0 — Tidak penting\n"
            "- **X (Undesirable)**: Nilai -1 — Harus dijauhkan (misal: Genset vs Ruang Pengujian)\n\n"
            "#### 3. Rekomendasi Algoritma Penataan\n"
            "Gunakan algoritma perbaikan seperti **CRAFT (Computerized Relative Allocation of Facilities Technique)** "
            "untuk melakukan pertukaran lokasi antar departemen dengan luas sama atau berdekatan secara iteratif."
        )
    elif "eoq" in p or "inventory" in p or "persediaan" in p or "rop" in p or "safety stock" in p:
        # Coba ekstrak angka jika ada studi kasus
        response = (
            "### 📦 Optimasi Persediaan: Model Deterministic EOQ & ROP\n\n"
            "Untuk meminimalkan total biaya persediaan (*Total Inventory Cost* / TIC), berikut adalah formulasi standar Teknik Industri:\n\n"
            "#### 1. Economic Order Quantity (EOQ)\n"
            "$$\\text{EOQ} = \\sqrt{\\frac{2 \\cdot D \\cdot S}{H}}$$\n\n"
            "**Di mana:**\n"
            "- $D$ = Total permintaan per periode (unit/tahun)\n"
            "- $S$ = Biaya pemesanan per pesanan (Setup/Ordering cost)\n"
            "- $H$ = Biaya penyimpanan per unit per tahun (Holding cost)\n\n"
            "#### 2. Titik Pemesanan Kembali (Reorder Point / ROP)\n"
            "$$\\text{ROP} = (d \\times L) + \\text{SS}$$\n\n"
            "**Keterangan:**\n"
            "- $d$ = Laju permintaan harian ($D / \\text{Hari Kerja}$)\n"
            "- $L$ = *Lead time* pengadaan barang (hari)\n"
            "- $\\text{SS}$ = *Safety Stock* $= Z_{\\alpha} \\times \\sigma_{d} \\times \\sqrt{L}$"
        )
    elif "dmaic" in p or "six sigma" in p or "lean" in p or "spc" in p or "kaizen" in p:
        response = (
            "### 🔄 Penerapan Metodologi Lean Six Sigma (DMAIC)\n\n"
            "Metodologi **DMAIC** dirancang untuk mereduksi variabilitas proses dan mengeliminasi 8 pemborosan (*Muda*):\n\n"
            "| Tahapan | Alat Rekayasa Industri (*IE Tools*) | Output Kunci |\n"
            "| :--- | :--- | :--- |\n"
            "| **Define** | SIPOC, Project Charter, VOC to CTQ | Batasan masalah & target $\\sigma$ |\n"
            "| **Measure** | DPMO, Check Sheet, Gage R&R, Peta Kendali ($X$-bar & $R$) | Baseline performa & stabilitas proses |\n"
            "| **Analyze** | Diagram Ishikawa (5M+1E), 5-Why, Pareto 80/20 | Akar penyebab masalah (*Root Causes*) |\n"
            "| **Improve** | FMEA, Poka-Yoke, Kaizen 5S | Rencana perbaikan tervalidasi |\n"
            "| **Control** | Standard Operating Procedure (SOP), SPC Monitoring | Menjaga stabilitas jangka panjang |\n\n"
            "$$\\text{DPMO} = \\frac{D}{N \\times O} \\times 10^6$$\n"
            "*(D = Cacat, N = Unit Diuji, O = Peluang Cacat per Unit)*"
        )
    elif "ergonomi" in p or "waktu baku" in p or "time study" in p or "rula" in p or "reba" in p:
        response = (
            "### 📐 Pengukuran Kerja & Ergonomi Industri (Work Design)\n\n"
            "Perhitungan waktu kerja baku menggunakan metode jam henti (*Stopwatch Time Study*):\n\n"
            "#### 1. Waktu Siklus Rata-rata ($Ws$)\n"
            "$$Ws = \\frac{\\sum X_i}{N}$$\n\n"
            "#### 2. Waktu Normal ($Wn$)\n"
            "$$Wn = Ws \\times \\text{Penyesuaian Rating Westinghouse (} p \\text{)}$$\n\n"
            "#### 3. Waktu Baku ($Wb$)\n"
            "$$Wb = Wn \\times \\left( \\frac{100\\%}{100\\% - \\%\\text{Kelonggaran (Allowance)}} \\right)$$\n\n"
            "*Catatan: Evaluasi postur kerja dapat dikombinasikan dengan metode **REBA (Rapid Entire Body Assessment)** untuk seluruh tubuh atau **RULA** untuk anggota tubuh bagian atas.*"
        )
    else:
        response = (
            f"### ⚙️ Analisis Rekayasa Sistem & Teknik Industri ({model_id})\n\n"
            f"Menerima konsultasi mengenai: **\"{prompt}\"**\n\n"
            "Sebagai asisten AI spesialis Teknik Industri, saya menganalisis permasalahan ini dengan pendekatan sistem terpadu (*Integrated System Approach*):\n\n"
            "1. **Identifikasi Komponen 5M + 1E**: Meninjau interaksi antara *Man, Machine, Material, Method, Money, & Environment*.\n"
            "2. **Formulasi Model & Efisiensi**: Menetapkan fungsi tujuan (*Objective Function*) baik minimasi biaya maupun maksimasi utilitas kapasitas lini produksi.\n"
            "3. **Rekomendasi Implementasi**: Menerapkan kaidah *Continuous Improvement* (Kaizen) dan validasi data berbasis statistik industri.\n\n"
            "Silakan sertakan data numerik atau matriks From-To jika ingin dilakukan perhitungan optimasi secara presisi!"
        )

    # Stream out token by token
    words = re.findall(r'\S+|\s+', response)
    for word in words:
        yield word
