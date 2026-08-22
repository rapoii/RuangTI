# CLAUDE.md — Panduan Cepat Perintah & Pengembangan Proyek RuangTI

Dokumen ini menyediakan instruksi singkat mengenai perintah CLI, arsitektur layanan, dan panduan kode untuk Claude Code / Cursor / CLI Autonomous Agents pada proyek **RuangTI** (Web Chat AI Spesialis Teknik Industri & Rekayasa Sistem).

---

## 1. Perintah Pengembangan Inti

```bash
# Frontend: Menjalankan development server Next.js (Port 3005)
npm run dev

# Frontend: Memeriksa static type error (TypeScript)
npx tsc --noEmit

# Frontend: Membuat production build
npm run build

# Backend: Menjalankan FastAPI server (Port 8000)
cd backend && uvicorn app.main:app --host 127.0.0.1 --port 8000

# AI Gateway: Memeriksa proxy 9Router (Port 20128)
curl -s http://localhost:20128/v1/models

# Code Graph: Status & sinkronisasi graf AST
codegraph status
codegraph sync
```

---

## 2. Struktur Modul & Konvensi
- **Rute Dokumentasi (`app/docs/` & `components/docs/`)**:
  - `app/docs/page.tsx`: Layout 3-kolom ala Claude Docs / Stripe Docs dengan kategori accordion, reactive dynamic article viewer, dan mobile sliding drawer.
  - `components/docs/DocsNavbar.tsx`: Header dokumentasi dengan search shortcut, link GitHub, dan tombol CTA **"Buka Workspace"** (Desktop) / **"Workspace"** (Mobile).
  - `components/docs/DocsSidebar.tsx`: Navigasi sidebar dengan Zero-Reflow CSS Grid Accordion dan icon chevron rotasi berbasis GPU.
  - `components/docs/DocsContent.tsx`: Render artikel Markdown + KaTeX formula terpusat (`text-center`) dan transisi halus pergantian halaman.
  - `components/docs/DocsTOC.tsx`: Table of Contents kanan dengan scrollspy presisi dan lock-scroll.
  - `components/docs/DocsSearchModal.tsx`: Spotlight search instan dengan keyboard shortcuts (`Ctrl+K` / `⌘K`) tanpa footer hint berlebih.

- **Landing Page (`components/landing/`)**:
  - `Navbar.tsx`: Header kaca atas dengan branding **RuangTI**, status auth, tombol **"Buka Workspace"** / **"Masuk"**, dan transisi reveal saat load.
  - `Hero.tsx`: Staggered orchestration reveal untuk badge, headline H1, sub-copy, CTA, dan 4 micro-badges spek TI.
  - `Features.tsx`: Scroll reveal untuk 4 Pilar Keilmuan TI (PTLF, Rantai Pasok, Kualitas, Ergonomi) dan 4 Solvers Sekunder.
  - `AuthModal.tsx`: Dialog autentikasi minimalis khusus Google OAuth (1-klik instan untuk semua akun Google) dengan transisi GPU Framer Motion.
  - `Footer.tsx`: Baris hak cipta tunggal ultra-minimalis: `© {new Date().getFullYear()} RuangTI. All rights reserved. Dikembangkan oleh rapoi.`

- **Workspace Chat (`components/chat/`, `components/composer/`, `components/sidebar/`, `components/profile/`)**:
  - `components/chat/MessageRow.tsx`: Render chat bubble user/assistant dengan kartu lampiran dokumen/gambar, formula KaTeX, dan GPU micro-fade entrance (`y: 4 -> 0`, `150ms`).
  - `components/chat/ThinkingBlock.tsx`: Collapsible accordion *"Proses Berpikir & Penalaran Sistem"* berbasis Zero-Lag CSS Grid Hardware Transition.
  - `components/chat/EmptyState.tsx`: Welcome banner dengan staggered suggestion cards 4 pilar TI.
  - `components/chat/ShareModal.tsx`: Dialog bagikan percakapan dengan tautan publik read-only.
  - `components/composer/Composer.tsx`: Input dock melayang dengan vertical center alignment dan preview chips dokumen/foto.
  - `components/composer/ThinkingSelector.tsx`: Pill selector 5 tingkat Thinking Effort (`none`, `low`, `medium`, `high`, `xhigh`) dengan popover Framer Motion yang ringan.
  - `components/profile/ProfileModal.tsx`: Modal profil pengguna dengan informasi praktisi Teknik Industri dan integrasi akun Google.
  - `components/sidebar/Sidebar.tsx`: Multi-thread drawer & desktop panel dengan search, pin/rename/delete conversation, dan User Profile/Logout.

- **Backend Services**:
  - `backend/app/routers/chat_9router.py`: Streaming SSE proxy ke 9Router dengan dynamic model routing & tag `<think>` handling.
  - `backend/app/routers/export.py`: Router pembuatan & pengunduhan berkas fisik biner instan (`.xlsx`, `.docx`, `.pptx`, `.pdf`).
  - `backend/app/services/file_generator.py`: Mesin generator dokumen dengan styling profesional (Excel high-end headers, Word hierarchical sections, PPT 16:9 widescreen cards, PDF ReportLab print layout).
  - `backend/app/services/document_parser.py`: Ekstraksi teks & tabel instan dari Word, Excel, PowerPoint, CSV, PDF, Zip, CAD, FlexSim, dan file source code.
  - `backend/app/services/media_cleaner.py`: Async background worker untuk auto-pruning berkas lampiran > 14 hari.
  - `backend/knowledge/`: 684 Modul Knowledge Base Teknik Industri untuk konteks RAG (4.760+ seksi FTS5 terindeks).

---

## 3. Standar Animasi & Kinerja Low-End Devices
1. **GPU-Accelerated**: Selalu gunakan properti `transform` dan `opacity` dengan kurva `[0.16, 1, 0.3, 1]`.
2. **Zero Reflow Accordion**: Gunakan CSS Grid `grid-template-rows: 1fr` vs `0fr` (bukan `height: auto` Framer Motion).
3. **Hardware Acceleration Marker**: Tambahkan `style={{ willChange: "transform, opacity" }}` pada elemen dinamis.
4. **Lightweight Backdrop**: Gunakan `backdrop-blur-[2px] bg-black/45` untuk overlay modal/drawer.
5. **Scroll Triggers**: Pasang `viewport={{ once: true }}` pada komponen animasi scroll.

---

## 4. Checklist Sebelum Commit
1. Jalankan `npx tsc --noEmit` -> harus **0 error**.
2. Pastikan tidak ada class `dark:` (Sistem 100% Pure Light Mode).
3. Pastikan elemen bernuansa emas (`bg-accent` / `#E09F3E`) menggunakan teks putih tegas (`text-white font-bold`).
4. Verifikasi responsivitas pada viewport Desktop (1280x800) dan Mobile (403x881 / 390x844).
5. Pastikan file dokumen/foto tidak disimpan sebagai base64/blob mentah di SQLite melainkan di folder `uploads/` dengan metadata JSON ringkas.
