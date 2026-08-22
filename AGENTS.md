# AGENTS.md — Petunjuk & Konvensi Autonomous AI Agent untuk RuangTI

Dokumen ini ditujukan untuk agen AI (seperti Hermes, Claude Code, Cursor, Codex, dll.) yang bekerja di dalam codebase **RuangTI**.

---

## 1. Ikhtisar Proyek & Arsitektur
- **Nama Aplikasi**: RuangTI
- **Tujuan**: Platform Web AI Workspace & Chat Assistant Spesialis Teknik Industri (*Industrial Engineering Workspace & Knowledge Hub*) bagi mahasiswa, akademisi, dan praktisi industri secara universal.
- **Filosofi UI/UX**: *Pure Light Mode*, Clean, Minimalist, Precision-Engineered, Anti-AI Slop, Multi-Device Responsive (Desktop & Mobile 390x844 / 403x881), dan **Ultra-Smooth Low-End Device Friendly (60fps)**.
- **Cakupan Domain Teknik Industri (684 Modul Knowledge Base Spesialis, Profesi Industri & Kurikulum Fundamental TI)**:
  - Kurikulum Fundamental Teknik Industri (Menggambar Teknik ISO 128/5456, Praktikum CAD SolidWorks/Inventor Parametric Mating, Pengantar Teknik Industri IISE BoK Taylor/Gilbreth, Material Teknik Fe-Fe3C ASTM E8 Heat Treatment, Fisika Dasar Dinamika Newton Fluid Bernoulli Carnot, Kalkulus 1 Optimasi Marginal & EOQ Integral Surplus, Kimia Dasar Termokimia Hess Korosi Besi ICCP GHS SDS, Etika Keinsinyuran PII UU 11/2014 ABET NSPE Whistleblowing, Kebijakan Ketahanan Industri Nasional TKDN BMP PP 29/2018 RIPIN 2015-2035).
  - Riset Operasi & Optimasi Matematis (Linier/Integer Programming, Antrian, Transportasi, Game Theory).
  - Lean Six Sigma & Manajemen Kualitas (Kaizen, 5S, DMAIC, SPC, FMEA AIAG-VDA, VSM, IATF 16949, MSA Gage R&R, APQP, PPAP, 8D Problem Solving, Hoshin Kanri X-Matrix, A3 Toyota Problem Solving).
  - Perancangan Tata Letak Fasilitas & Pemindahan Bahan (PTLF, From-To Chart, ARC, CRAFT, ASRS).
  - Ergonomi & Higiene Industri (Permenaker 5/2018, OSHA Noise TWA, ISBB/WBGT, NIOSH Lifting, Waktu Baku, MOST TMU, REBA/RULA, NASA-TLX, Biomekanik Chaffin 2D/3D L5/S1, OWAS, Moore-Garg Strain Index, Shiftwork FRMS, Ritme Sirkadian, Karasek Model).
  - Keselamatan Kerja & Lingkungan (SMK3 PP 50/2012, ISO 45001, HIRADC, SCAT Incident Investigation, LOTO 1910.147, B3 PP 22/2021, IPAL/WWTP, PROPER KLHK, GHG Protocol Scope 1-3, Audit Energi ISO 50002, Pinch Analysis HEN Synthesis, Boiler ASME PTC 4.1).
  - Drafter & Desain Manufaktur (ASME Y14.5-2018 GD&T, Tolerance Stack-Up Worst Case & RSS, DFMA Boothroyd, ASME B31.3 Piping, ISA 5.1 P&ID).
  - Supply Chain Management, Logistik & Pergudangan (EOQ, ROP, WMS Slotting COI Index, Cube Utilization %, S-Shape Picking, TMS VRP Clarke-Wright, Forklift Sizing M/M/c, Cold Chain MKT, Pengadaan Strategis Matriks Kraljic, TCO, Incoterms 2020, Supply Chain Control Tower, CPFR GS1, Multi-Echelon Inventory MEIO, Closed-Loop Supply Chain CLSC, Remanufacturing DLBP, WEEE/EPR, Supply Chain Risk Management SCRM, TTR vs TTS).
  - Perencanaan Produksi & PPIC (S&OP Agregat Planning, MPS, RCCP Bill of Resources, MRP Silver-Meal / Wagner-Whitin, Penjadwalan Mesin Terbatas TOC Drum-Buffer-Rope, Algoritma Johnson).
  - Pemeliharaan & Keandalan Mesin (TPM 8 Pilar, 7 Langkah Jishu Hozen, Six Big Losses OEE, RCM II SAE JA1011, Distribusi Keandalan Weibull Beta/Eta, ISO 55001, Predictive Maintenance 4.0 Getaran FFT, Envelope Analysis Bearing BPFO/BPFI, RUL Estimation, Cox Proportional Hazards).
  - Otomasi Industri & Smart Manufacturing (ANSI/ISA-95 Level 0-4, MES MESA-11, B2MML XML, Real-Time OEE Tracking, OPC-UA).
  - Manajemen Proyek Rekayasa Industri (PMBOK 7th Ed, Earned Value Management EVM PV/EV/AC/CPI/SPI/EAC/TCPI, Critical Path Method CPM, PERT Beta Distribution, Project Crashing Linear Programming).
  - Simulasi Sistem Industri & Manufaktur Cerdas (Arena, FlexSim Binary/XML, AnyLogic, Digital Twin, TPM 4.0).

- **Stack & Arsitektur Utama**:
  - **Frontend**: Next.js 14+ (App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React).
  - **Formula & Markdown**: `react-markdown` + `remark-gfm` + `remark-math` + `rehype-katex` (KaTeX LaTeX Scientific Formatting) dengan display formula simetris di tengah (`text-center`).
  - **Backend**: FastAPI (Python 3.10+, Port 8000) dengan Async SQLModel / SQLite.
  - **AI Gateway & Proxy**: 9Router (Port 20128) menghubungkan model penalaran tinggi.
  - **Model & Thinking Hierarchy**:
    1. `gcli/grok-4.6` — **Non-Thinking (Default)**: Respon kilat & tangkas tanpa penundaan.
    2. `gcli/grok-4.6-low` — **Low Effort**: Penalaran ringan untuk kueri & kalkulasi ringkas.
    3. `gcli/grok-4.6-medium` — **Medium Effort**: Penalaran berimbang untuk analisis & metode terstruktur.
    4. `gcli/grok-4.6-high` — **High Effort**: Penalaran mendalam untuk simulasi & optimasi kompleks.
    5. `gcli/grok-4.6-xhigh` — **Extra High Effort**: Riset operasi tingkat lanjut & pembuktian matematis.
  - **Autentikasi**: Better Auth Universal Google OAuth (1-klik instan untuk seluruh akun Google/Gmail sivitas maupun praktisi tanpa batasan domain) dengan SQLite Auth DB (`data/ruangti_auth.db`).
  - **Penyimpanan & Generator Dokumen (Zero-DB-Bloat Storage & Auto-Generator)**:
    - File fisik (Word, Excel, PPT, Zip, Code, PDF, CSV, Gambar WebP) disimpan di disk server `uploads/documents/` dan `uploads/generated/`.
    - SQLite hanya menyimpan array JSON metadata ringkas (~60B per file).
    - Background task otomatis membersihkan (*auto-prune*) file yang berusia > 14 hari.
    - **Binary File Generator Engine** (`backend/app/services/file_generator.py` & `routers/export.py`): Otomatis memproduksi file `.xlsx` (High-End Styling + Auto-Fit Width), `.docx` (Hierarchical Headings + Tables), `.pptx` (16:9 Modern Presentation Cards), dan `.pdf` (ReportLab Flowable Formal Print).
    - **Interactive Download Cards** (`components/chat/FileDownloadCard.tsx`): Menampilkan kartu unduhan interaktif dengan 1-klik direct binary download di antarmuka chat.

---

## 2. Aturan & Standar Desain
1. **Pure Light Mode**:
   - Sistem menggunakan tema terang murni (*Pure Light Mode*). Seluruh token warna mengacu pada `:root` di `app/globals.css`.
   - Dilarang menambahkan modifier `dark:` atau hardcoded hex/rgb di luar token semantic.
2. **Anti-AI Slop UI/UX**:
   - Dilarang menggunakan gradien ungu/biru generik template AI murah.
   - Gunakan layout yang terstruktur, padat informasi ilmiah, dan tipografi KaTeX yang lapang.
   - Seluruh tombol dan badge bernuansa emas (`bg-accent` / `#E09F3E`) **WAJIB** menggunakan teks putih tegas (`text-white font-bold`) demi kontras WCAG AA.
3. **Standar Animasi 60fps & Ramah Low-End Devices**:
   - **GPU Composited Properties**: Hanya animasikan `transform` (`translate`, `scale`, `rotate`) dan `opacity`.
   - **Zero Layout Reflow**: Dilarang menggunakan animasi JavaScript `height: auto` atau manipulasi margin saat runtime. Gunakan **Native CSS Grid Transition** (`grid-template-rows: 1fr` vs `0fr`) untuk accordion (Sidebar categories & ThinkingBlock).
   - **Hardware Acceleration Marker**: Selalu sertakan `style={{ willChange: "transform, opacity" }}` pada elemen interaktif yang berpindah.
   - **Lightweight Backdrops**: Gunakan `backdrop-blur-[2px] bg-black/45` untuk dialog modal & drawer agar tidak membebani GPU ponsel kelas bawah.
   - **Viewport Optimization**: Gunakan `viewport={{ once: true, margin: "-20px" }}` pada scroll triggers agar animasi tidak dieksekusi berulang saat discroll naik-turun.
4. **Editorial & Formatting Formula**:
   - Istilah teknis / UI token dalam naskah dokumentasi wajib ditulis dalam format semantik tebal `**Token**` atau inline code `` `token` ``.
   - Seluruh display math KaTeX wajib diposisikan persis di tengah (`block w-full text-center`) untuk mengeliminasi deadspace asimetris.
5. **Standar Footer & Penamaan Navigasi**:
   - Navigasi tombol CTA teratas konsisten berlabel **"Buka Workspace"** (Desktop) dan **"Workspace"** (Mobile) menuju `/chat`.
   - Footer aplikasi berformat satu baris hak cipta ultra-minimalis:
     `© {new Date().getFullYear()} RuangTI. All rights reserved. Dikembangkan oleh rapoi.`

---

## 3. Struktur Modul & Konvensi

```
projects/web/RuangTI/
├── app/
│   ├── layout.tsx         # Root font loaders (Space Grotesk, Manrope, IBM Plex Mono)
│   ├── page.tsx           # Landing page publik (Hero, Feature Cards, Auth Modal, Footer)
│   ├── docs/              # Dokumentasi resmi RuangTI (3-kolom, Search Ctrl+K, 656 Modul RAG)
│   │   └── page.tsx       # Docs Hub dengan reactive category switching, mobile drawer & TOC
│   ├── chat/              # Workspace chat utama
│   │   ├── page.tsx       # New session launcher
│   │   └── [id]/page.tsx  # Dynamic multi-thread session
│   ├── share/[id]/        # Halaman publik percakapan terbagikan (Read-only)
│   └── globals.css        # Pure Light Mode semantic tokens, KaTeX typography, animations
├── components/
│   ├── docs/              # DocsNavbar, DocsSidebar, DocsContent, DocsTOC, DocsSearchModal
│   ├── landing/           # LandingNavbar, Hero, Features, AuthModal, Footer
│   ├── layout/            # Header, Shell
│   ├── sidebar/           # Sidebar, NewChatButton, ConversationList, ConversationSearch
│   ├── profile/           # ProfileModal (Edit profile & Google account info)
│   ├── chat/              # MessageList, MessageRow, MarkdownContent, ThinkingBlock, ShareModal, EmptyState
│   └── composer/          # Composer, ThinkingSelector, SendStopButton, Paperclip/Document chips
├── backend/
│   ├── app/
│   │   ├── main.py        # FastAPI server & lifespan background media cleaner
│   │   ├── models/        # SQLModel schema (User, Session, Conversation, Message)
│   │   ├── routers/       # auth, chat, chat_9router, upload, share, export
│   │   └── services/      # document_parser, rag_service, media_cleaner, file_generator
│   └── knowledge/         # 684 Modul Markdown Knowledge Base Teknik Industri
├── lib/
│   ├── api-client.ts      # Backend REST & SSE client helper
│   ├── auth.ts            # Better Auth server configuration (Universal Google OAuth)
│   ├── auth-client.ts     # Better Auth client instance
│   ├── docs-data.ts       # Database artikel dokumentasi komprehensif
│   ├── image-compressor.ts# Client-side HTML5 Canvas WebP compressor (~85KB)
│   └── types.ts           # Strict TypeScript interfaces & Thinking options
├── DESIGN.md              # Single source of truth untuk UI/UX RuangTI
├── AGENTS.md              # Petunjuk agen AI (file ini)
└── CLAUDE.md              # Panduan eksekusi & perintah CLI
```

---

## 4. Alur Kerja Sebelum Selesai (Definition of Done)
1. **Type-Check**: Jalankan `npx tsc --noEmit` -> harus **0 error**.
2. **Build Test**: Pastikan aplikasi dapat di-build dengan lancar (`npm run build`).
3. **Verifikasi Visual**: Uji menggunakan browser Playwright MCP pada resolusi desktop (1280x800) dan mobile (403x881 / 390x844), lalu periksa hasil tangkapan layarnya.
