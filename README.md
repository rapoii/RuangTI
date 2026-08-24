# ⚙️ RuangTI — Industrial Engineering AI Co-Pilot & Workspace

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![KaTeX](https://img.shields.io/badge/KaTeX-Math_Render-green?style=flat-square&logo=latex)](https://katex.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber?style=flat-square)](LICENSE)

> **Ruang Rekayasa & Berpikir Sistem yang Tenang.**  
> Platform Web Chat AI & Konsultasi Spesialis Teknik Industri (*Industrial Engineering Workspace*) dengan antarmuka presisi, minimalis, dan responsif lintas perangkat (*Multi-Device Support*).

---

## 🎯 Cakupan Domain Teknik Industri (742 Modul Knowledge Base Spesialis)

RuangTI dirancang khusus untuk memecahkan dan menganalisis studi kasus rekayasa industri secara mendalam dengan 742 modul basis pengetahuan spesialis:

- 📊 **Riset Operasi & Optimasi Matematis**: Linear/Integer/Nonlinear Programming, Teori Antrian Jackson Networks, Transportasi, Simpleks, Metaheuristik & Game Theory.
- 🔄 **Lean Six Sigma & Manajemen Kualitas**: Metodologi DMAIC, FMEA AIAG-VDA, SPC & MSPC Hotelling $T^2$, IATF 16949, Kaizen, 5S, dan Eliminasi 8 Pemborosan (*Muda*).
- 🏭 **Perancangan Tata Letak Fasilitas (PTLF)**: *From-To Chart*, *Activity Relationship Chart* (ARC), Formulasi Biaya Penanganan Material (*MHC*), CRAFT, CORELAP, dan ASRS.
- 📐 **Ergonomi & Pengukuran Kerja**: Metode REBA/RULA, *NIOSH Lifting Equation*, Waktu Baku Jam Henti (*Time Study*), MOST TMU, Antropometri, dan Biomekanika L5/S1.
- 📦 **Supply Chain Management & Logistik**: Model EOQ, *Safety Stock*, *Reorder Point* (ROP), VRP Fleet Routing, Cold Chain, Cross-Docking, dan Multi-Echelon Inventory.
- 💻 **Simulasi Sistem Industri & Manufaktur Cerdas**: Pemodelan kejadian diskrit (*Discrete Event Simulation* FlexSim/Arena/SimPy), Digital Twin (ISO 23247), dan Smart Factory ISA-95.
- 🌿 **K3, Lingkungan & Rekayasa Keberlanjutan**: SMK3 PP 50/2012, ISO 45001, HIRADC, Life Cycle Assessment (LCA ISO 14040), Audit Energi ISO 50002, dan Dekarbonisasi GHG Protocol.

---

## ✨ Fitur Unggulan

1. **Precision Math & KaTeX Rendering**: Formula matematika industri dan optimasi kompleks dirender tajam di tengah simetris menggunakan KaTeX LaTeX ($\sum$, integral, matriks, formula EOQ, $C_{pk}$).
2. **Ultra Clean Floating Composer & Document Upload**: Kotak input melayang (*fixed bottom overlay*) dengan dukungan upload lampiran gambar terkompresi (WebP) dan multi-dokumen (Word, Excel, PDF, CAD, FlexSim, Python).
3. **Multi-Tier Thinking Hierarchy**: Selector 5 tingkat penalaran sistem (*Non-Thinking*, *Low*, *Medium*, *High*, *Extra High*) untuk menyelesaikan persoalan dari komputasi ringan hingga riset operasi mendalam.
4. **Binary Document Export Engine**: Ekspor otomatis hasil analisis ke dalam format dokumen fisik biner profesional (`.xlsx`, `.docx`, `.pptx`, `.pdf`) dengan download interaktif 1-klik.
5. **Universal Google OAuth SSO**: Autentikasi modern dan aman berbasis Better Auth 1-klik instan untuk seluruh akun Google/Gmail sivitas akademika maupun praktisi industri.
6. **Multi-Device & 60fps Low-End Performance**: Antarmuka murni *Pure Light Mode* yang dioptimalkan dengan akselerasi perangkat keras GPU dan zero-layout-reflow.

---

## 🚀 Memulai (Quick Start)

### 1. Kloning Repositori
```bash
git clone https://github.com/rapoii/RuangTI.git
cd RuangTI
```

### 2. Konfigurasi Environment
Salin template konfigurasi dan sesuaikan nilai `.env`:
```bash
cp .env.example .env.local
cp backend/.env.example backend/.env
```

### 3. Instal Dependensi
```bash
# Frontend
npm install

# Backend
cd backend
pip install -r requirements.txt
cd ..
```

### 4. Jalankan Aplikasi
```bash
# Menjalankan Frontend Next.js (Port 3005)
npm run dev

# Menjalankan Backend FastAPI (Port 8000)
cd backend && uvicorn app.main:app --host 127.0.0.1 --port 8000
```

Buka `http://localhost:3005` di browser Anda.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js 14+](https://nextjs.org/) (App Router, React 18, TypeScript, Tailwind CSS)
- **Animation & Motion**: [Framer Motion](https://www.framer.com/motion/) (GPU-Accelerated 60fps)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown & Math**: `react-markdown`, `remark-gfm`, `remark-math`, `rehype-katex`
- **Backend API**: [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+, Async SQLModel, SQLite)
- **Auth**: [Better Auth](https://better-auth.com/) (Universal Google OAuth SSO)
- **Document Services**: `python-docx`, `openpyxl`, `python-pptx`, `reportlab`, `PyPDF2`
- **Graph Indexer**: CodeGraph SQLite AST Analyzer

---

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat file [`LICENSE`](LICENSE) untuk informasi lebih lanjut.

---

<p align="center">
  Dibuat dengan dedikasi untuk kemajuan Rekayasa Sistem & Teknik Industri Indonesia 🇮🇩<br>
  <b><a href="https://github.com/rapoii">Rapoi</a></b>
</p>
