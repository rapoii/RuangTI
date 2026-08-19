# CLAUDE.md — Panduan Cepat Perintah & Pengembangan Proyek RuangTI

Dokumen ini menyediakan instruksi singkat mengenai perintah CLI, arsitektur layanan, dan panduan kode untuk Claude Code / Cursor / CLI Autonomous Agents pada proyek **RuangTI** (Web Chat AI Spesialis Teknik Industri).

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
```

---

## 2. Struktur Modul & Konvensi
- **Frontend Components**:
  - `components/landing/`: Landing page (Navbar, Hero, Feature Grid, Interactive Demo, Auth Modal SSO Untirta).
  - `components/layout/Header.tsx`: Header kaca atas dengan branding **RuangTI**, Dynamic Title, Tombol Share (hijau teks putih), dan Sidebar Toggle.
  - `components/sidebar/Sidebar.tsx`: Multi-thread drawer & desktop panel dengan search, pin/rename/delete conversation, dan User Profile/Logout.
  - `components/chat/`:
    - `MessageRow.tsx`: Render chat bubble user/assistant dengan kartu lampiran dokumen/gambar, formula KaTeX, dan action bar.
    - `ThinkingBlock.tsx`: Collapsible accordion *"Proses Berpikir & Penalaran Sistem"* untuk output penalaran AI.
    - `ShareModal.tsx`: Dialog bagikan percakapan dengan tautan publik read-only.
  - `components/composer/`:
    - `Composer.tsx`: Input dock melayang dengan vertical center alignment, placeholder `"Tulis pesan..."`, dan preview chips dokumen/foto.
    - `ThinkingSelector.tsx`: Pill selector 5 tingkat Thinking Effort (`none`, `low`, `medium`, `high`, `xhigh`) dengan mobile popover anti-clipping.

- **Backend Services**:
  - `backend/app/routers/chat_9router.py`: Streaming SSE proxy ke 9Router dengan dynamic model routing & tag `<think>` handling.
  - `backend/app/services/document_parser.py`: Ekstraksi teks & tabel instan dari Word, Excel, CSV, PDF, Zip, dan file source code.
  - `backend/app/services/media_cleaner.py`: Async background worker untuk auto-pruning berkas lampiran > 14 hari.
  - `backend/knowledge/`: 400 Modul Knowledge Base Teknik Industri untuk konteks RAG.

---

## 3. Checklist Sebelum Commit
1. Jalankan `npx tsc --noEmit` -> harus **0 error**.
2. Pastikan tidak ada class `dark:` (Sistem 100% Pure Light Mode).
3. Verifikasi responsivitas pada viewport Desktop (1280x800) dan Mobile (390x844 / 375x667).
4. Pastikan file dokumen/foto tidak disimpan sebagai base64/blob mentah di SQLite melainkan di folder `uploads/` dengan metadata JSON ringkas.
