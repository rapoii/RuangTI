# RuangTI Go + Svelte Single Binary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun ulang platform RuangTI menjadi satu file executable tunggal (`ruangti.exe`) berbasis Go dan Svelte 5 untuk memangkas konsumsi RAM dari ~1.200 MB ke < 30 MB tanpa kehilangan fitur apa pun.

**Architecture:** Server mandiri berbasis Go menyajikan API chat, RAG SQLite FTS5 (32.413 seksi), ekstraksi dokumen native, dan aset web statis Svelte 5 via `go:embed`. AI streaming diarahkan ke Mimoly (port 8080) dengan 5 tier penalaran (`model@effort`) dan otomatis fallback ke 9Router (Hermes) jika Mimoly down.

**Tech Stack:** Go 1.27 (pure Go / `modernc.org/sqlite`, `chi`), Svelte 5, Vite, Tailwind CSS, KaTeX.

**Spec:** `docs/superpowers/specs/2026-10-12-go-svelte-rewrite-design.md`

## Global Constraints
- **RAM Target**: Penggunaan memori idle harus berada di bawah 30 MB (verifikasi via Windows tasklist/Get-Process).
- **Distribusi**: Seluruh aplikasi harus dapat dijalankan dari satu binary tunggal `ruangti.exe` tanpa dependensi eksternal selain database SQLite.
- **Integritas RAG**: Database materi `backend/data/ruangti_rag.db` (32.413 seksi) diakses *read-only* dengan pencarian BM25 FTS5.
- **Model & 5 Tier**: Format `model@reasoning_effort` wajib didukung (`mimo-v2.6-flash@none`, `mimo-v2.6-flash@default`, `mimo-v2.6-flash@max`, `mimo-v2.6-pro@default`, `mimo-v2.6-pro@max`).
- **Desain UI**: Wajib mengikuti panduan Pure Light Mode RuangTI (latar terang, display rumus KaTeX simetris di tengah, WCAG AA contrast).

## Review Focus
1. **Mimoly offline / down**: Server harus otomatis fallback ke 9Router port 20128 tanpa memutus koneksi klien atau melempar error 500 fatal.
2. **Kueri RAG mengandung karakter khusus FTS5** (`"`, `*`, `OR`, `AND`, tanda kurung): Query builder harus membersihkan / meng-escape input agar tidak terjadi error sintaks SQL SQLite FTS5.
3. **Dokumen upload rusak / kosong**: Parser dokumen Go harus menangani file corrupt dengan fail-safe (mengembalikan teks kosong atau error ramah) tanpa menyebabkan server panic/crash.
4. **SSE streaming terputus di tengah jalan**: Generator streaming harus menangani `context.Canceled` saat klien menutup tab browser secara bersih tanpa kebocoran goroutine.
5. **SPA routing fallback**: Permintaan URL langsung seperti `/chat` atau `/docs` harus menyajikan `index.html` dari `go:embed` dengan header `Content-Type: text/html`.

---

### Task 1: Go Backend Scaffolding & Health Check

**Files:**
- Create: `server/go.mod`
- Create: `server/main.go`
- Create: `server/handlers/health.go`
- Test: `server/handlers/health_test.go`

**Interfaces:**
- Produces: `handlers.NewHealthHandler() http.HandlerFunc`, status JSON `{"status": "healthy", "service": "RuangTI Go Engine"}`

- [ ] **Step 1: Inisialisasi modul Go**
  ```bash
  cd "D:/Software/Hermes Workspace/projects/websites/RuangTI" && mkdir -p server/handlers && cd server && /d/Software/go/bin/go mod init ruangti
  ```

- [ ] **Step 2: Tulis failing test untuk health check**
  Tulis `server/handlers/health_test.go`:
  ```go
  package handlers_test

  import (
      "net/http"
      "net/http/httptest"
      "testing"
      "ruangti/handlers"
  )

  func TestHealthHandler(t *testing.T) {
      req := httptest.NewRequest(http.MethodGet, "/api/health", nil)
      rec := httptest.NewRecorder()
      h := handlers.NewHealthHandler()
      h(rec, req)

      if rec.Code != http.StatusOK {
          t.Fatalf("expected status 200, got %d", rec.Code)
      }
  }
  ```

- [ ] **Step 3: Jalankan test untuk memverifikasi kegagalan**
  Run: `/d/Software/go/bin/go test ./server/handlers -v`
  Expected: FAIL (handlers.NewHealthHandler undefined)

- [ ] **Step 4: Implementasi `NewHealthHandler` di `server/handlers/health.go`**
  Implementasikan fungsi HTTP handler yang mengembalikan JSON `{ "status": "healthy", "service": "RuangTI Go Engine" }`.

- [ ] **Step 5: Buat server skeleton di `server/main.go`**
  Pasang routing dasar dengan flag `--port` (default 8000) dan graceful shutdown.

- [ ] **Step 6: Jalankan test untuk memverifikasi keberhasilan**
  Run: `/d/Software/go/bin/go test ./server/handlers -v`
  Expected: PASS

- [ ] **Step 7: Commit**
  ```bash
  git add server/
  git commit -m "feat(server): inisialisasi backend Go dan endpoint health check"
  ```

---

### Task 2: SQLite FTS5 RAG Search Engine

**Files:**
- Create: `server/rag/rag.go`
- Modify: `server/go.mod`
- Test: `server/rag/rag_test.go`

**Interfaces:**
- Consumes: `backend/data/ruangti_rag.db` (tabel `rag_fts`, kolom `title`, `content`, `module_id`, `chunk_index`)
- Produces: `type RAGService struct`, `Search(query string, limit int) ([]ChunkResult, error)`

- [ ] **Step 1: Pasang dependensi pure-Go SQLite**
  ```bash
  cd server && /d/Software/go/bin/go get modernc.org/sqlite
  ```

- [ ] **Step 2: Tulis failing test untuk pencarian FTS5**
  Tulis `server/rag/rag_test.go` yang menguji pencarian kata kunci "economic order quantity" pada database `ruangti_rag.db`:
  ```go
  package rag_test

  import (
      "testing"
      "ruangti/rag"
  )

  func TestRAGSearch(t *testing.T) {
      svc, err := rag.NewRAGService("../../backend/data/ruangti_rag.db")
      if err != nil {
          t.Fatalf("failed to open rag db: %v", err)
      }
      defer svc.Close()

      results, err := svc.Search("economic order quantity", 3)
      if err != nil {
          t.Fatalf("search failed: %v", err)
      }
      if len(results) == 0 {
          t.Fatalf("expected results for EOQ, got 0")
      }
  }
  ```

- [ ] **Step 3: Jalankan test untuk memverifikasi kegagalan**
  Run: `/d/Software/go/bin/go test ./server/rag -v`
  Expected: FAIL

- [ ] **Step 4: Implementasi sanitasi input & FTS5 query di `server/rag/rag.go`**
  - Bersihkan karakter khusus kueri (`"`, `*`, `AND`, `OR`, dll).
  - Eksekusi kueri `SELECT module_id, title, content, bm25(rag_fts) as rank FROM rag_fts WHERE rag_fts MATCH ? ORDER BY rank LIMIT ?`.
  - Kembalikan slice `ChunkResult`.

- [ ] **Step 5: Tambahkan test sanitasi input khusus (Review Focus 2)**
  Uji input kueri berbahaya/aneh: `'"* OR AND () 123'`. Pastikan tidak melempar syntax error.

- [ ] **Step 6: Jalankan test untuk memverifikasi keberhasilan**
  Run: `/d/Software/go/bin/go test ./server/rag -v`
  Expected: PASS

- [ ] **Step 7: Commit**
  ```bash
  git add server/rag server/go.mod server/go.sum
  git commit -m "feat(rag): implementasi mesin pencari SQLite FTS5 BM25 pure-Go"
  ```

---

### Task 3: AI Gateway Proxy (Mimoly & 5 Tier Thinking & Fallback)

**Files:**
- Create: `server/ai/client.go`
- Create: `server/handlers/chat.go`
- Test: `server/ai/client_test.go`

**Interfaces:**
- Consumes: Mimoly (http://127.0.0.1:8080/v1), 9Router (http://127.0.0.1:20128/v1), `rag.RAGService`
- Produces: `StreamChat(ctx context.Context, req ChatRequest, w io.Writer) error`

- [ ] **Step 1: Tulis unit test untuk parsing model spec dan fallback**
  Tulis `server/ai/client_test.go`:
  - Test pemecahan `mimo-v2.6-pro@max` -> model: `mimo-v2.6-pro`, effort: `max`.
  - Test mapping legacy model `gcli/grok-4.6` -> `mimo-v2.6-flash`, effort: `none`.

- [ ] **Step 2: Jalankan test untuk memverifikasi kegagalan**
  Run: `/d/Software/go/bin/go test ./server/ai -v`
  Expected: FAIL

- [ ] **Step 3: Implementasi client AI streaming di `server/ai/client.go`**
  - Parser SSE stream: membaca `data: {...}` chunk.
  - Normalisasi `reasoning_content` -> tag `<think>\n...\n</think>\n\n`.
  - Mekanisme fallback otomatis: coba `MIMOLY_BASE_URL` (8080), jika gagal dalam 10s coba `ROUTER_9_BASE_URL` (20128) dengan model `Hermes`.

- [ ] **Step 4: Implementasi handler HTTP `/api/chat/stream` di `server/handlers/chat.go`**
  - Mengambil query RAG untuk menyuntikkan modul materi Teknik Industri relevan ke system prompt.
  - Menyetel header SSE (`text/event-stream`, `Cache-Control: no-cache`).
  - Menangani pembatalan klien (`ctx.Done()`) secara rapi (Review Focus 4).

- [ ] **Step 5: Tambahkan integration test fallback (Review Focus 1)**
  Uji client dengan base URL palsu/mati `http://127.0.0.1:8099`, pastikan beralih mulus ke endpoint cadangan.

- [ ] **Step 6: Jalankan test untuk memverifikasi keberhasilan**
  Run: `/d/Software/go/bin/go test ./server/ai -v`
  Expected: PASS

- [ ] **Step 7: Commit**
  ```bash
  git add server/ai server/handlers/chat.go
  git commit -m "feat(ai): streaming SSE proxy ke Mimoly dengan 5 tier thinking dan auto-fallback"
  ```

---

### Task 4: Native Document Text Extractor di Go

**Files:**
- Create: `server/extractor/extractor.go`
- Create: `server/handlers/upload.go`
- Test: `server/extractor/extractor_test.go`

**Interfaces:**
- Produces: `ExtractText(filename string, r io.ReaderAt, size int64) (string, error)`

- [ ] **Step 1: Tulis failing test untuk ekstraksi DOCX & PPTX via zip stdlib**
  Tulis `server/extractor/extractor_test.go` yang menguji pembacaan file Word dan PPTX dummy.

- [ ] **Step 2: Jalankan test untuk memverifikasi kegagalan**
  Run: `/d/Software/go/bin/go test ./server/extractor -v`
  Expected: FAIL

- [ ] **Step 3: Implementasi parser zip-based di `server/extractor/extractor.go`**
  - DOCX: buka `word/document.xml`, ekstrak semua elemen `<w:t>`.
  - PPTX: buka `ppt/slides/slide*.xml`, ekstrak semua elemen `<a:t>`.
  - TXT / MD: baca langsung sebagai UTF-8 string.
  - Fail-safe untuk file korup / kosong (Review Focus 3).

- [ ] **Step 4: Implementasi handler upload `/api/upload` di `server/handlers/upload.go`**
  Terima multipart form, jalankan ekstraksi, dan kembalikan JSON ringkasan teks.

- [ ] **Step 5: Jalankan test untuk memverifikasi keberhasilan**
  Run: `/d/Software/go/bin/go test ./server/extractor -v`
  Expected: PASS

- [ ] **Step 6: Commit**
  ```bash
  git add server/extractor server/handlers/upload.go
  git commit -m "feat(extractor): ekstraksi teks native DOCX, PPTX, dan teks murni di Go"
  ```

---

### Task 5: Svelte 5 + Vite Project Setup & KaTeX Typography

**Files:**
- Create: `frontend/package.json`
- Create: `frontend/vite.config.ts`
- Create: `frontend/src/app.css` (Pure Light Mode tokens)
- Create: `frontend/src/lib/types.ts`
- Test: Build check `npm run build` di folder `frontend`

**Interfaces:**
- Produces: Build artifact di `frontend/dist/` (< 200 KB gzipped)

- [ ] **Step 1: Scaffolding Vite + Svelte 5 di `frontend/`**
  Buat konfigurasi `package.json` ramping dengan dependensi: `svelte@^5.0.0`, `@sveltejs/vite-plugin-svelte`, `tailwindcss`, `katex`, `lucide-svelte`.

- [ ] **Step 2: Salin token tema Pure Light Mode & KaTeX styling ke `frontend/src/app.css`**
  Pertahankan variabel semantic `:root` dari RuangTI (warna emas aksen `#E09F3E`, background bersih `#F8F9FA`, kontras WCAG AA).

- [ ] **Step 3: Definisikan tipe TypeScript & konstanta 5 tier di `frontend/src/lib/types.ts`**
  Konstanta `THINKING_EFFORT_OPTIONS` persis seperti spesifikasi Mimoly.

- [ ] **Step 4: Uji kompilasi build**
  Run: `cd frontend && npm install && npm run build`
  Expected: Berhasil menghasilkan `frontend/dist/index.html`.

- [ ] **Step 5: Commit**
  ```bash
  git add frontend/
  git commit -m "feat(frontend): setup project Svelte 5 Vite dengan Pure Light Mode dan KaTeX"
  ```

---

### Task 6: Komponen UI Obrolan Svelte (Composer & Thinking Selector)

**Files:**
- Create: `frontend/src/components/Header.svelte`
- Create: `frontend/src/components/ThinkingSelector.svelte`
- Create: `frontend/src/components/Composer.svelte`
- Create: `frontend/src/components/ThinkingBlock.svelte`
- Create: `frontend/src/components/MessageRow.svelte`

**Interfaces:**
- Produces: Komponen Svelte reaktif untuk obrolan interaktif, lipatan blok `<think>`, dan formula KaTeX.

- [ ] **Step 1: Buat `ThinkingSelector.svelte` (5 Tier Selection)**
  Dropdown/popover pemilihan mode penalaran (Non-Thinking hingga Extra High Effort) dengan deskripsi dan badge.

- [ ] **Step 2: Buat `ThinkingBlock.svelte` dengan transisi native CSS Grid**
  Animasi buka-tutup blok `<think>` tanpa JavaScript layout reflow (menggunakan CSS grid `grid-template-rows: 0fr` vs `1fr`).

- [ ] **Step 3: Buat `MessageRow.svelte` dengan render KaTeX display math simetris**
  Parser ekspresi `$$...$$` dan `$...$` yang memformat rumus di tengah halaman secara otomatis.

- [ ] **Step 4: Buat `Composer.svelte` dengan upload file chip & send/stop toggle**

- [ ] **Step 5: Verifikasi build frontend**
  Run: `cd frontend && npm run build`
  Expected: PASS

- [ ] **Step 6: Commit**
  ```bash
  git add frontend/src/components/
  git commit -m "feat(ui): porting komponen Composer, ThinkingSelector, dan MessageRow ke Svelte"
  ```

---

### Task 7: Halaman Chat Utama & Integrasi Streaming SSE

**Files:**
- Create: `frontend/src/routes/Chat.svelte`
- Create: `frontend/src/lib/sse.ts`
- Modify: `frontend/src/App.svelte`

**Interfaces:**
- Consumes: `/api/chat/stream`, `/api/health`
- Produces: Antarmuka chat utuh yang dapat mengirim pesan dan menerima streaming respons AI.

- [ ] **Step 1: Implementasi SSE streaming reader di `frontend/src/lib/sse.ts`**
  Membaca chunk teks dan mendeteksi tag `<think>` untuk dimasukkan ke state pesan secara real-time.

- [ ] **Step 2: Susun halaman `Chat.svelte`**
  Menghubungkan Composer, MessageList, dan state percakapan.

- [ ] **Step 3: Verifikasi build frontend**
  Run: `cd frontend && npm run build`
  Expected: PASS

- [ ] **Step 4: Commit**
  ```bash
  git add frontend/src/routes/ frontend/src/lib/sse.ts frontend/src/App.svelte
  git commit -m "feat(chat): implementasi antarmuka chat lengkap dengan streaming SSE"
  ```

---

### Task 8: Halaman Dokumentasi Materi TI (Docs Hub)

**Files:**
- Create: `frontend/src/routes/Docs.svelte`
- Create: `server/handlers/docs.go`
- Modify: `server/main.go`

**Interfaces:**
- Consumes: `/api/docs/search`, `rag.RAGService`
- Produces: Halaman penelusuran 4.595 modul materi Teknik Industri dengan filter kategori dan pencarian cepat.

- [ ] **Step 1: Implementasi API handler `/api/docs/search` di Go**
  Query pencarian FTS5 dengan paginasi dan cuplikan konten.

- [ ] **Step 2: Buat tampilan `Docs.svelte`**
  Daftar kategori materi fundamental TI, bilah pencarian responsif, dan pembaca artikel.

- [ ] **Step 3: Verifikasi build frontend & test backend**
  Run: `cd frontend && npm run build && cd ../server && /d/Software/go/bin/go test ./...`
  Expected: PASS

- [ ] **Step 4: Commit**
  ```bash
  git add frontend/src/routes/Docs.svelte server/handlers/docs.go server/main.go
  git commit -m "feat(docs): implementasi Docs Hub penelusuran 4.595 modul materi TI"
  ```

---

### Task 9: Integrasi Single Binary `go:embed` & Uji Tolok Ukur RAM

**Files:**
- Create: `server/embed.go`
- Modify: `server/main.go`
- Create: `build.sh` atau `build.bat`

**Interfaces:**
- Produces: File binary mandiri `ruangti.exe` berukuran ~30 MB yang menyajikan backend API + frontend SPA di satu port.

- [ ] **Step 1: Buat handler embed di `server/embed.go`**
  ```go
  package main

  import (
      "embed"
      "io/fs"
      "net/http"
      "strings"
  )

  //go:embed all:dist
  var frontendFS embed.FS

  func SPAHandler() http.Handler {
      sub, _ := fs.Sub(frontendFS, "dist")
      fileServer := http.FileServer(http.FS(sub))
      return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
          if strings.HasPrefix(r.URL.Path, "/api/") {
              http.NotFound(w, r)
              return
          }
          // Review Focus 5: SPA fallback
          f, err := sub.Open(strings.TrimPrefix(r.URL.Path, "/"))
          if err != nil {
              r.URL.Path = "/"
          } else {
              _ = f.Close()
          }
          fileServer.ServeHTTP(w, r)
      })
  }
  ```

- [ ] **Step 2: Kompilasi frontend dan bangun binary tunggal Go**
  ```bash
  cd frontend && npm run build && cp -r dist ../server/dist && cd ../server && /d/Software/go/bin/go build -ldflags="-s -w" -o ../ruangti.exe .
  ```

- [ ] **Step 3: Jalankan `ruangti.exe` dan ukur RAM**
  Jalankan binary, lalu periksa penggunaan RAM dengan `Get-Process ruangti`.
  Target: Memori terpakai < 30 MB (dibandingkan ~1.200 MB sebelumnya).

- [ ] **Step 4: Uji end-to-end kelima tier via browser / curl**
  Verifikasi `/api/health`, streaming chat EOQ dengan Mimoly port 8080, dan pembukaan halaman `/chat` dan `/docs`.

- [ ] **Step 5: Commit & Push**
  ```bash
  git add server/ embed.go build.sh
  git commit -m "feat(release): bundel Go + Svelte menjadi single binary ruangti.exe"
  git push origin rewrite/go-svelte
  ```
