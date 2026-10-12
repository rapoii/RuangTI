# Desain Teknis: Rewrite RuangTI ke Go (Golang) + Svelte Single Binary

- **Tanggal**: 12 Oktober 2026
- **Status**: Draft untuk Review
- **Branch**: `rewrite/go-svelte`
- **Tujuan**: Memangkas penggunaan RAM dari ~1,2 GB ke < 30 MB, mengeliminasi server ganda (Next.js + Python), dan mengemas seluruh aplikasi menjadi satu file executable tunggal (`ruangti.exe`).

---

## 1. Latar Belakang & Masalah
Arsitektur RuangTI saat ini menggunakan kombinasi Next.js 14 (Node.js) dan FastAPI (Python). Konfigurasi ini menimbulkan beban berat pada laptop:
1. **Konsumsi RAM Berlebih (~1.200 MB)**:
   - Backend Python menahan model kalkulasi vektor lokal ONNX (`paraphrase-multilingual-MiniLM-L12-v2`, 224 MB) dan cross-encoder reranker di memori, menyita ~865 MB RAM.
   - Frontend Next.js menahan runtime Node.js ~85 MB saat idle dan melonjak ke 300–500 MB saat kompilasi halaman.
2. **Beban I/O & SSD**:
   - Direktori `node_modules` memuat 32.000+ file kecil (~540 MB) ditambah cache build `.next` (~310 MB), memaksa Windows Defender dan background worker membaca disk berulang-ulang.
3. **Kompleksitas Operasional**:
   - Membutuhkan dua server terpisah (port 3005 dan port 8000), dua lingkungan runtime (Node.js dan Python), serta manajemen proses latar belakang (PM2).

---

## 2. Arsitektur Sasaran: Go + Svelte Single Binary

```
┌─────────────────────────────────────────────────────────────┐
│                   ruangti.exe (Single Binary)               │
│                                                             │
│  ┌─────────────────────────┐   ┌─────────────────────────┐  │
│  │   Embedded Web Assets   │   │     Go HTTP Server      │  │
│  │    (go:embed dist/)     │   │     (net/http / chi)    │  │
│  │  - Svelte 5 SPA         │   │                         │  │
│  │  - KaTeX CSS/Fonts      │◄──┤  - Static File Server   │  │
│  │  - Pure Light Styling   │   │  - REST API Routes      │  │
│  └─────────────────────────┘   │  - SSE Streaming Hub    │  │
│                                └────────────┬────────────┘  │
│                                             │               │
│                    ┌────────────────────────┴────────┐      │
│                    ▼                                 ▼      │
│         ┌─────────────────────┐           ┌────────────────┐│
│         │   SQLite RAG Engine │           │ AI Proxy Engine││
│         │  (ruangti_rag.db)   │           │ (SSE Client)   ││
│         │  - 32.413 Seksi FTS5│           └────────┬───────┘│
│         │  - BM25 Native Rank │                    │        │
│         └─────────────────────┘                    │        │
└────────────────────────────────────────────────────┼────────┘
                                                     │
                                 HTTP Streaming POST │ (port 8080)
                                                     ▼
                                      ┌────────────────────────┐
                                      │   Mimoly AI Gateway    │
                                      │   (Xiaomi MiMo Studio) │
                                      │   - mimo-v2.6-flash    │
                                      │   - mimo-v2.6-pro      │
                                      │   Fallback: 9Router    │
                                      └────────────────────────┘
```

### Komponen Inti:
1. **Backend Go**:
   - Router HTTP ringan (`net/http` standar atau `chi`).
   - Menyajikan API obrolan, pencarian dokumen, dan file web statis via `go:embed`.
   - Jejak memori target: **15–25 MB RAM idle**.
2. **Frontend Svelte 5 (Vite)**:
   - Dikompilasi saat build menjadi file web statis (HTML, JS, CSS) berukuran total < 250 KB.
   - Nol runtime Node.js di komputer pengguna saat aplikasi dijalankan.
   - Tetap mempertahankan antarmuka *Pure Light Mode*, animasi transisi CSS native 60fps, dan penulisan rumus KaTeX di tengah halaman.
3. **Mesin RAG SQLite FTS5**:
   - Membaca database `ruangti_rag.db` (32.413 seksi FTS5) secara native via driver CGO-free / modern SQLite Go (`modernc.org/sqlite` atau `mattn/go-sqlite3`).
   - Pencarian berbasis FTS5 BM25 menghasilkan retrieval di bawah 5 milidetik dengan 0 MB alokasi model di RAM.
4. **AI Gateway Streaming (Mimoly)**:
   - Mengalirkan respons obrolan dari Mimoly (port 8080) dengan dukungan parameter `reasoning_effort` (`none`, `default`, `max`).
   - Parser SSE Go mendeteksi delta `reasoning_content` dan otomatis mengonversinya ke blok `<think> ... </think>`.
   - Fitur otomatis fallback ke 9Router (Hermes) jika Mimoly tidak terjangkau.
5. **Ekstraktor Dokumen Native**:
   - Mengurai dokumen PDF, DOCX, dan PPTX menggunakan pustaka native Go tanpa memerlukan Python atau subprocess eksternal.

---

## 3. Matriks Perbandingan & Target Metrik

| Parameter | Arsitektur Lama (Next.js + Python) | Arsitektur Baru (Go + Svelte) | Efisiensi |
|---|---|---|---|
| **Penggunaan RAM** | ~1.200 MB (Python 865 MB + Node 85–300 MB) | **~20–30 MB total** | **Hemat ~97%** |
| **Beban Startup** | 5–10 detik (2 proses server) | **< 100 milidetik** | **Instan** |
| **Ukuran Disk Runtime** | ~1,2 GB (node_modules + .next + models) | **~30 MB (1 file .exe)** | **Hemat ~97%** |
| **Jumlah File di Disk** | > 35.000 file kecil | **1 file binary** | **Bebas disk thrashing** |
| **Ketergantungan OS** | Node.js, npm, Python, pip, C compiler | **Nol (standalone executable)** | **Portabel** |

---

## 4. Rencana Implementasi Bertahap

### Fase 1: Fondasi Backend Go & SQLite FTS5
- Inisialisasi modul Go (`go mod init ruangti`).
- Implementasi handler SQLite untuk query FTS5 ke `backend/data/ruangti_rag.db`.
- Implementasi reverse proxy streaming SSE ke Mimoly (port 8080) dengan format 5 tier thinking (`model@effort`).
- Endpoint `/api/health`, `/api/chat/stream`, `/api/docs/search`.

### Fase 2: Antarmuka Web Svelte 5 + KaTeX
- Inisialisasi Vite + Svelte di direktori `frontend/`.
- Porting komponen UI utama dari React ke Svelte:
  - Header & Navigasi (Pure Light Mode).
  - Composer input obrolan & Thinking Selector (5 tier).
  - MessageRow & MessageList dengan KaTeX LaTeX scientific display simetris.
  - Collapsible ThinkingBlock.
  - Docs Viewer untuk membaca 4.595 modul materi Teknik Industri.
- Build statis dan integrasi `go:embed`.

### Fase 3: Parser Dokumen & Fitur Unggah
- Ekstraksi teks dari file unggahan (PDF, Word, PPTX) di Go.
- Penggabungan konteks dokumen ke dalam payload pesan obrolan.

### Fase 4: Validasi & Uji Coba Kinerja
- Benchmark memori nyata (RAM, CPU, I/O) di Windows 11.
- Validasi fungsionalitas seluruh 5 tier penalaran.
- Pengujian responsiveness antarmuka pada resolusi desktop dan mobile.

---

## 5. Strategi Keamanan & Rollback
- Seluruh pengembangan dilakukan di branch terisolasi `rewrite/go-svelte`.
- Branch `main` tetap utuh dan stabil.
- Database modul materi `ruangti_rag.db` hanya diakses secara *read-only* oleh mesin RAG Go untuk menjamin integritas data 4.595 modul.
