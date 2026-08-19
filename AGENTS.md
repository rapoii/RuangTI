# AGENTS.md — Petunjuk & Konvensi Autonomous AI Agent untuk RuangTI

Dokumen ini ditujukan untuk agen AI (seperti Hermes, Claude Code, Cursor, Codex, dll.) yang bekerja di dalam codebase **RuangTI**.

---

## 1. Ikhtisar Proyek & Arsitektur
- **Nama Aplikasi**: RuangTI
- **Tujuan**: Platform Web AI Workspace & Konsultasi Spesialis Teknik Industri (*Industrial Engineering Workspace & Knowledge Hub*) bagi sivitas akademika dan praktisi.
- **Filosofi UI/UX**: *Pure Light Mode*, Clean, Minimalist, Precision-Engineered, Anti-AI Slop, Multi-Device Responsive (Desktop & Mobile 390x844).
- **Cakupan Domain Teknik Industri (400 Modul Knowledge Base)**:
  - Riset Operasi & Optimasi Matematis (Linier/Integer Programming, Antrian, Transportasi, Game Theory)
  - Lean Six Sigma & Manajemen Kualitas (Kaizen, 5S, DMAIC, SPC, FMEA, VSM, ISO Sustainability)
  - Perancangan Tata Letak Fasilitas & Pemindahan Bahan (PTLF, From-To Chart, ARC, CRAFT, ASRS)
  - Ergonomi & Perancangan Sistem Kerja (Time Study, Waktu Baku, Antropometri, REBA/RULA, NASA-TLX)
  - Supply Chain Management & Inventory (EOQ, ROP, Safety Stock, JELS, Closed-Loop SCM)
  - Simulasi Sistem Industri & Manufaktur Cerdas (Arena, FlexSim, AnyLogic, Digital Twin, TPM 4.0)

- **Stack & Arsitektur Utama**:
  - **Frontend**: Next.js 14+ (App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React).
  - **Formula & Markdown**: `react-markdown` + `remark-gfm` + `remark-math` + `rehype-katex` (KaTeX LaTeX Scientific Formatting).
  - **Backend**: FastAPI (Python 3.10+, Port 8000) dengan Async SQLModel / SQLite.
  - **AI Gateway & Proxy**: 9Router (Port 20128) menghubungkan model penalaran tinggi.
  - **Model & Thinking Hierarchy**:
    1. `gcli/grok-4.6(xhigh)` — **Non-Thinking (Default)**: Respon kilat & tangkas.
    2. `gcli/grok-4.6-low(xhigh)` — **Low Effort**: Penalaran ringan untuk kueri sederhana.
    3. `gcli/grok-4.6-medium(xhigh)` — **Medium Effort**: Penalaran berimbang untuk analisis standar.
    4. `gcli/grok-4.6-high(xhigh)` — **High Effort**: Penalaran mendalam untuk simulasi & optimasi kompleks.
    5. `gcli/grok-4.6-xhigh(xhigh)` — **Extra High Effort**: Riset operasi tingkat lanjut & pembuktian matematis.
  - **Autentikasi**: Better Auth SSO Untirta (Google `@untirta.ac.id` & Microsoft `@student.untirta.ac.id` yang independen) + Email/Password.
  - **Penyimpanan Dokumen (Zero-DB-Bloat Storage)**:
    - File fisik (Word, Excel, Zip, Code, PDF, CSV, Gambar WebP) disimpan di disk server `uploads/documents/` dan `uploads/images/`.
    - SQLite hanya menyimpan array JSON metadata ringkas (~60B per file).
    - Background task otomatis membersihkan (*auto-prune*) file yang berusia > 14 hari.

---

## 2. Aturan & Standar Desain
1. **Pure Light Mode**:
   - Sistem menggunakan tema terang murni (*Pure Light Mode*). Seluruh token warna mengacu pada `:root` di `app/globals.css`.
   - Dilarang menambahkan modifier `dark:` atau hardcoded hex/rgb di luar token semantic.
2. **Anti-AI Slop**:
   - Dilarang menggunakan gradien ungu/biru generik template AI murah.
   - Gunakan layout yang terstruktur, padat informasi ilmiah, dan tipografi KaTeX yang lapang.
3. **Standar Responsif Multi-Device**:
   - Seluruh komponen wajib diuji pada resolusi Desktop (1280x800) dan Mobile (390x844 / 375x667).
   - Popover dan dialog modal wajib menggunakan proteksi batas layar (`w-[calc(100vw-36px)]` atau `right-0`) agar tidak pernah terpotong di perangkat seluler.
   - Textarea dan tombol aksi di composer harus selalu memiliki vertical center alignment yang presisi.

---

## 3. Struktur Modul & Konvensi

```
projects/web/RuangTI/
├── app/
│   ├── layout.tsx         # Root font loaders (Space Grotesk, Manrope, IBM Plex Mono)
│   ├── page.tsx           # Landing page publik (Hero, Demo, Feature Cards, CTA, Footer)
│   ├── chat/              # Workspace chat utama
│   │   ├── page.tsx       # New session launcher
│   │   └── [id]/page.tsx  # Dynamic multi-thread session
│   ├── share/[id]/        # Halaman publik percakapan terbagikan (Read-only)
│   └── globals.css        # Pure Light Mode semantic tokens, KaTeX typography, animations
├── components/
│   ├── landing/           # LandingNavbar, Hero, FeatureGrid, InteractiveDemo, AuthModal
│   ├── layout/            # Header, Shell
│   ├── sidebar/           # Sidebar, NewChatButton, ConversationList, UserProfile/SignOut
│   ├── chat/              # MessageList, MessageRow, MarkdownContent, ThinkingBlock, ShareModal, TheGlow
│   └── composer/          # Composer, ThinkingSelector, SendStopButton, Paperclip/Document chips
├── backend/
│   ├── app/
│   │   ├── main.py        # FastAPI server & lifespan background media cleaner
│   │   ├── models/        # SQLModel schema (User, Session, Conversation, Message)
│   │   ├── routers/       # auth, chat, chat_9router, upload, share
│   │   └── services/      # document_parser, rag_service, media_cleaner
│   └── knowledge/         # 400 Modul Markdown Knowledge Base Teknik Industri
├── lib/
│   ├── api-client.ts      # Backend REST & SSE client helper
│   ├── auth-client.ts     # Better Auth client instance
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
3. **Verifikasi Visual**: Uji menggunakan browser Playwright MCP pada resolusi desktop dan mobile, lalu periksa hasil tangkapan layarnya.

---

## 5. Rencana & Spesifikasi Ekstraksi CAD/CAM/CAE (Roadmap)
- **2D CAD (AutoCAD / DraftSight / BricsCAD)**:
  - Format `.dwg`: Engine `ezdwg` (Rust core + PyO3) untuk membaca entitas modelspace, etiket, dimensi, dan teks.
  - Format `.dxf`: Engine `ezdxf` (MIT) untuk parsing geometri vektor dan layer.
- **3D Parametric CAD (SolidWorks / Inventor / Fusion360 / Creo / NX / CATIA)**:
  - Format `.step` / `.stp`: Standar ISO-10303-21 via `steputils` untuk membaca nama part, hierarki assembly, dan spesifikasi material.
  - Format `.stl` / `.obj`: Mesh analysis via `trimesh` untuk membaca volume 3D printing dan bounding box.
- **Otomasi CNC & CAM (Mastercam / SolidCAM / Fusion CAM)**:
  - Format `.gcode` / `.nc` / `.tap`: Parser lintasan pahat (G0/G1/G2), spindle speed, dan feed rate.
- **Simulasi Sistem Diskrit (Autodesk FlexSim)**:
  - Format `.fsm` (Binary Model): Engine GZIP stream decompressor (offset byte ke-72 `0x48`) via Python stdlib `gzip` untuk membaca 100% pohon node objek (`Source`, `Queue`, `Processor`, `Sink`, `Conveyor`, `AGV`, `ASRS`), distribusi waktu matematis (`exponential`, `triangular`, `normal`), dan skrip logika `FlexScript` / `ProcessFlow`.
  - Format `.fsx` (XML Model): XML ElementTree parser untuk membaca objek, routing port, dan global tables.


