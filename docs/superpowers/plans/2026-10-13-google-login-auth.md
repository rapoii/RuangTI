# Login Google (Auth Native Go) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan login Google (OAuth2) ke RuangTI sehingga halaman chat hanya bisa dipakai setelah masuk, lengkap dengan riwayat percakapan per akun, halaman profil, dan logout.

**Architecture:** Auth dibangun native di server Go (bukan Next.js lama) memakai `golang.org/x/oauth2` untuk alur OAuth2 Authorization Code, sesi berbasis cookie HttpOnly yang tokennya disimpan sebagai hash SHA-256 di SQLite, dan middleware `RequireAuth` yang menjaga endpoint chat + percakapan. Frontend Svelte memanggil `/api/auth/me` saat boot untuk menentukan status login, menyembunyikan rute `chat` di balik gerbang login, dan memuat/menyimpan percakapan lewat API baru. Semua tetap terbungkus dalam satu binary `ruangti.exe`.

**Tech Stack:** Go 1.27 (`net/http` ServeMux pattern, `embed`, `modernc.org/sqlite` yang sudah ada), `golang.org/x/oauth2` + `golang.org/x/oauth2/google` (baru), Svelte 5 + Vite + Tailwind (frontend), KaTeX (sudah ada).

**Spec:** Tidak ada dokumen spec terpisah — spec adalah keputusan pengguna pada sesi ini (tercatat di `.superpowers/sdd/2026-10-13-google-login/decisions.md`).

## Global Constraints

- **Kredensial TIDAK boleh di-commit.** `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` dibaca dari environment atau `.env.local` (root repo, sudah di-gitignore). Jangan pernah menulis nilainya ke file yang di-track git, ke log, atau ke output test.
- **Nama provider upstream tetap terlarang di UI**: tidak ada string "Mimoly"/"MiMo"/"Studio" yang tampil ke pengguna.
- **Tema monokrom B&W Neobrutalism** (lihat `DESIGN.md`): tanpa warna selain hitam/putih/abu. Foto profil Google boleh ditampilkan (konten pengguna), tetapi elemen UI tetap monokrom.
- **`AGENTS.md` dan `CLAUDE.md` tidak boleh diubah** tanpa izin eksplisit.
- **Jangan menambah fitur di luar yang diminta**: gerbang login, riwayat percakapan per akun, halaman profil, logout. Tidak ada registrasi email/password, tidak ada lupa sandi, tidak ada admin panel.
- **Semua orang dengan akun Google boleh masuk** (tanpa whitelist/domain).
- **Landing & docs tetap publik**; hanya `chat` yang butuh login.
- **Go PATH**: `export PATH="/d/Software/go/bin:$PATH"`.
- **Aturan privasi kredensial** (dipertahankan dari sesi sebelumnya): file `tunnel_token.txt` hanya diperiksa ukurannya; untuk `.env*` hanya nama variabel + 4 karakter pertama yang boleh ditampilkan.

## Review Focus

1. **Sesi kedaluwarsa / cookie basi** — pengguna dengan cookie sesi yang sudah lewat masa berlaku atau token yang tidak ada di DB harus menerima `401` dan diarahkan ke halaman login, bukan error 500 atau halaman kosong.
2. **State OAuth tidak cocok atau diputar ulang** — callback dengan `state` yang tidak dikenali (atau dipakai dua kali) harus ditolak (`400`), bukan diam-diam membuat sesi.
3. **Akses lintas akun (IDOR)** — pengguna A tidak boleh bisa membaca, mengubah, atau menghapus percakapan milik pengguna B lewat `/api/conversations/{id}`; harus `404`/`403`.
4. **Refresh & Back/Forward saat berada di `/chat` tanpa sesi** — harus mendarat di halaman login tanpa loop redirect tak berujung, dan setelah login kembali ke chat.
5. **Profil Google tidak lengkap** — akun Google yang tidak mengirim `name` atau `picture` (atau `email_verified` bukan true) harus tetap bisa masuk dengan nilai wajar (fallback ke bagian lokal email, inisial "TI"), bukan gagal.

---

### Task 1: Store SQLite (users, sessions, conversations, messages)

**Files:**
- Create: `server/auth/store.go`
- Test: `server/auth/store_test.go`

**Interfaces:**
- Consumes: tidak ada (task pertama). Memakai `modernc.org/sqlite` yang sudah ada di `server/go.mod`.
- Produces:
  - `type User struct { ID, GoogleSub, Email, Name, Picture string; CreatedAt, LastLoginAt int64 }`
  - `type Session struct { TokenHash, UserID string; CreatedAt, ExpiresAt int64 }`
  - `type Conversation struct { ID, UserID, Title string; CreatedAt, UpdatedAt int64 }`
  - `type Message struct { ID, ConversationID, Role, Content string; CreatedAt int64 }`
  - `func NewStore(dbPath string) (*Store, error)`
  - `func (s *Store) Close() error`
  - `func (s *Store) UpsertUser(googleSub, email, name, picture string, now int64) (*User, error)` — insert atau update by `google_sub`, selalu memperbarui `name`/`picture`/`last_login_at`
  - `func (s *Store) GetUserByID(id string) (*User, error)`
  - `func (s *Store) CreateSession(tokenHash, userID string, createdAt, expiresAt int64) error`
  - `func (s *Store) GetSession(tokenHash string) (*Session, error)` — `nil, nil` bila tidak ada
  - `func (s *Store) DeleteSession(tokenHash string) error`
  - `func (s *Store) CreateConversation(userID, title string, now int64) (*Conversation, error)`
  - `func (s *Store) ListConversations(userID string) ([]Conversation, error)` — urut `updated_at DESC`
  - `func (s *Store) GetConversation(id, userID string) (*Conversation, error)` — `nil, nil` bila tidak ada ATAU bukan milik `userID` (IDOR-safe)
  - `func (s *Store) RenameConversation(id, userID, title string, now int64) error`
  - `func (s *Store) DeleteConversation(id, userID string) error`
  - `func (s *Store) AddMessage(conversationID, role, content string, now int64) (*Message, error)` — sekaligus memperbarui `conversations.updated_at`
  - `func (s *Store) ListMessages(conversationID string) ([]Message, error)` — urut `created_at ASC`

- [ ] **Step 1: Write the failing test**

```go
package auth

import (
	"path/filepath"
	"testing"
)

func newTestStore(t *testing.T) *Store {
	t.Helper()
	s, err := NewStore(filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatalf("NewStore: %v", err)
	}
	t.Cleanup(func() { _ = s.Close() })
	return s
}

func TestUpsertUserCreatesThenUpdates(t *testing.T) {
	s := newTestStore(t)

	u1, err := s.UpsertUser("sub-1", "a@example.com", "Andi", "http://img/1.png", 100)
	if err != nil {
		t.Fatalf("upsert 1: %v", err)
	}
	if u1.ID == "" || u1.Email != "a@example.com" || u1.Name != "Andi" {
		t.Fatalf("unexpected user: %+v", u1)
	}

	u2, err := s.UpsertUser("sub-1", "a@example.com", "Andi Baru", "http://img/2.png", 200)
	if err != nil {
		t.Fatalf("upsert 2: %v", err)
	}
	if u2.ID != u1.ID {
		t.Fatalf("same google_sub harus memakai ID sama: %s vs %s", u1.ID, u2.ID)
	}
	if u2.Name != "Andi Baru" || u2.LastLoginAt != 200 {
		t.Fatalf("update gagal: %+v", u2)
	}
}

func TestGetConversationIsScopedToOwner(t *testing.T) {
	s := newTestStore(t)
	uA, _ := s.UpsertUser("sub-a", "a@example.com", "A", "", 1)
	uB, _ := s.UpsertUser("sub-b", "b@example.com", "B", "", 1)

	c, err := s.CreateConversation(uA.ID, "Punya A", 10)
	if err != nil {
		t.Fatalf("create: %v", err)
	}

	got, err := s.GetConversation(c.ID, uA.ID)
	if err != nil || got == nil {
		t.Fatalf("owner harus bisa ambil: got=%v err=%v", got, err)
	}

	leak, err := s.GetConversation(c.ID, uB.ID)
	if err != nil {
		t.Fatalf("non-owner tidak boleh error: %v", err)
	}
	if leak != nil {
		t.Fatalf("IDOR: user B bisa membaca percakapan user A: %+v", leak)
	}
}

func TestSessionLifecycle(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)

	if err := s.CreateSession("hash-1", u.ID, 100, 200); err != nil {
		t.Fatalf("create session: %v", err)
	}
	got, err := s.GetSession("hash-1")
	if err != nil || got == nil || got.UserID != u.ID {
		t.Fatalf("get session: got=%v err=%v", got, err)
	}

	if err := s.DeleteSession("hash-1"); err != nil {
		t.Fatalf("delete session: %v", err)
	}
	gone, err := s.GetSession("hash-1")
	if err != nil || gone != nil {
		t.Fatalf("session harus hilang: got=%v err=%v", gone, err)
	}
}

func TestAddMessageUpdatesConversationTimestamp(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	c, _ := s.CreateConversation(u.ID, "Topik", 10)

	if _, err := s.AddMessage(c.ID, "user", "Halo", 55); err != nil {
		t.Fatalf("add message: %v", err)
	}
	updated, _ := s.GetConversation(c.ID, u.ID)
	if updated.UpdatedAt != 55 {
		t.Fatalf("updated_at harus ikut naik: %d", updated.UpdatedAt)
	}

	msgs, err := s.ListMessages(c.ID)
	if err != nil || len(msgs) != 1 || msgs[0].Content != "Halo" || msgs[0].Role != "user" {
		t.Fatalf("list messages: %+v err=%v", msgs, err)
	}
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./auth/ -run TestUpsertUserCreatesThenUpdates -v`
Expected: FAIL — `undefined: NewStore` (build error).

- [ ] **Step 3: Implement `server/auth/store.go`**

Buka DB dengan `sql.Open("sqlite", dbPath)` dan jalankan `PRAGMA foreign_keys = ON`. Buat skema bila belum ada:

```sql
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY, google_sub TEXT UNIQUE NOT NULL, email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL, picture TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL, last_login_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL, expires_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL, created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL, content TEXT NOT NULL, created_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS idx_conv_user ON conversations(user_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_msg_conv ON messages(conversation_id, created_at ASC);
```

ID baru memakai `github.com/google/uuid` (sudah ada di `go.mod`). `UpsertUser` memakai `INSERT ... ON CONFLICT(google_sub) DO UPDATE SET name=excluded.name, picture=excluded.picture, last_login_at=excluded.last_login_at RETURNING *` (SQLite mendukung `RETURNING`). `GetConversation` WAJIB memfilter `WHERE id = ? AND user_id = ?` dan mengembalikan `nil, nil` bila `sql.ErrNoRows`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./auth/ -v`
Expected: PASS (4 test).

- [ ] **Step 5: Commit**

```bash
git add server/auth/store.go server/auth/store_test.go
git commit -m "feat(auth): store SQLite untuk user, sesi, percakapan, dan pesan"
```

---

### Task 2: Alur OAuth2 Google (login + callback + upsert user)

**Files:**
- Create: `server/auth/oauth.go`
- Test: `server/auth/oauth_test.go`
- Modify: `server/go.mod`, `server/go.sum` (tambah `golang.org/x/oauth2`)

**Interfaces:**
- Consumes: `Store.UpsertUser` dari Task 1.
- Produces:
  - `type GoogleConfig struct { ClientID, ClientSecret, RedirectURL string }`
  - `type OAuth struct { ... }`
  - `func NewOAuth(cfg GoogleConfig, store *Store) *OAuth`
  - `func (o *OAuth) AuthCodeURL(state string) string` — URL `accounts.google.com/o/oauth2/v2/auth` dengan scope `openid email profile`
  - `func (o *OAuth) ExchangeAndUpsert(ctx context.Context, code string, now int64) (*User, error)` — tukar `code`, verifikasi `id_token`/userinfo, lalu `UpsertUser`. Mengembalikan error bila email tidak tersedia.
  - `type StateManager struct { ... }`
  - `func NewStateManager(ttlSeconds int) *StateManager`
  - `func (m *StateManager) Issue(now int64) string` — token acak 32 byte base64url, disimpan dengan masa berlaku
  - `func (m *StateManager) Consume(token string, now int64) bool` — `true` sekali saja, `false` bila tidak ada/kedaluwarsa/sudah dipakai
  - `func HashToken(token string) string` — SHA-256 hex (dipakai juga oleh Task 3 untuk sesi)

- [ ] **Step 1: Write the failing test**

```go
package auth

import (
	"testing"
)

func TestStateManagerConsumeOnce(t *testing.T) {
	m := NewStateManager(600)

	st := m.Issue(1000)
	if st == "" {
		t.Fatal("state kosong")
	}
	if !m.Consume(st, 1001) {
		t.Fatal("state baru harus valid")
	}
	if m.Consume(st, 1002) {
		t.Fatal("state yang sudah dipakai harus ditolak (anti-replay)")
	}
}

func TestStateManagerRejectsUnknownAndExpired(t *testing.T) {
	m := NewStateManager(600)

	if m.Consume("state-palsu", 1000) {
		t.Fatal("state tak dikenal harus ditolak")
	}

	st := m.Issue(1000)
	if m.Consume(st, 1000+601) {
		t.Fatal("state kedaluwarsa harus ditolak")
	}
}

func TestHashTokenIsStableAndNotRaw(t *testing.T) {
	a := HashToken("rahasia")
	if a != HashToken("rahasia") {
		t.Fatal("hash harus deterministik")
	}
	if a == "rahasia" || len(a) != 64 {
		t.Fatalf("hash harus sha256 hex, dapat: %q", a)
	}
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./auth/ -run TestStateManager -v`
Expected: FAIL — `undefined: NewStateManager`.

- [ ] **Step 3: Tambah dependensi oauth2**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go get golang.org/x/oauth2@v0.37.0`
Expected: `go.mod` bertambah `golang.org/x/oauth2 v0.37.0`.

- [ ] **Step 4: Implement `server/auth/oauth.go`**

Pakai `golang.org/x/oauth2` dan `golang.org/x/oauth2/google`:

```go
conf := &oauth2.Config{
	ClientID:     cfg.ClientID,
	ClientSecret: cfg.ClientSecret,
	RedirectURL:  cfg.RedirectURL,
	Scopes:       []string{"openid", "email", "profile"},
	Endpoint:     google.Endpoint,
}
```

`ExchangeAndUpsert` memanggil `conf.Exchange(ctx, code)`, lalu mengambil data profil dari endpoint `https://openidconnect.googleapis.com/v1/userinfo` dengan `conf.Client(ctx)` (menyertakan access token). Struktur respons yang dibaca: `sub`, `email`, `email_verified`, `name`, `picture`. Bila `email == ""` → kembalikan error. Bila `name == ""` → fallback ke bagian sebelum `@` pada email. Bila `picture == ""` → string kosong (bukan error). `email_verified` tidak dikirim → diperlakukan sebagai true (Google selalu memverifikasi email akun Gmail); bila eksplisit `false` → tolak dengan error.

`StateManager` memakai `sync.Mutex` + `map[string]int64` (token → waktu kedaluwarsa). `Issue` memakai `crypto/rand` 32 byte lalu `base64.RawURLEncoding`. `Consume` menghapus entri saat diambil (sekali pakai) dan menolak bila `now > expires`.

- [ ] **Step 5: Run tests to verify they pass**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./auth/ -v`
Expected: PASS (7 test).

- [ ] **Step 6: Commit**

```bash
git add server/auth/oauth.go server/auth/oauth_test.go server/go.mod server/go.sum
git commit -m "feat(auth): alur OAuth2 Google + state anti-replay"
```

---

### Task 3: Sesi cookie + middleware RequireAuth

**Files:**
- Create: `server/auth/session.go`
- Create: `server/auth/middleware.go`
- Test: `server/auth/session_test.go`

**Interfaces:**
- Consumes: `Store.GetSession`, `Store.GetUserByID`, `HashToken` dari Task 1 & 2.
- Produces:
  - `const SessionCookieName = "rti_session"`
  - `func NewSessionToken() (raw string, hash string, err error)` — raw = 32 byte base64url, hash = `HashToken(raw)`
  - `func SetSessionCookie(w http.ResponseWriter, raw string, expiresAt int64, secure bool)`
  - `func ClearSessionCookie(w http.ResponseWriter)`
  - `func ReadSessionCookie(r *http.Request) string`
  - `type contextKey struct{}` dan `func UserFromContext(ctx context.Context) (*User, bool)`
  - `func RequireAuth(store *Store, next http.Handler) http.Handler` — bila tidak ada sesi valid → `401` JSON `{"error":"unauthorized"}`; bila valid → inject `*User` ke context dan panggil `next`
  - `func (s *Store) SessionUser(rawToken string, now int64) (*User, error)` — `nil, nil` bila token tidak ada/kedaluwarsa

- [ ] **Step 1: Write the failing test**

```go
package auth

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestRequireAuthRejectsMissingAndExpired(t *testing.T) {
	s := newTestStore(t)
	protected := RequireAuth(s, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	}))

	// tanpa cookie
	rec := httptest.NewRecorder()
	protected.ServeHTTP(rec, httptest.NewRequest("GET", "/api/conversations", nil))
	if rec.Code != http.StatusUnauthorized {
		t.Fatalf("tanpa cookie harus 401, dapat %d", rec.Code)
	}

	// cookie kedaluwarsa
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	raw, hash, _ := NewSessionToken()
	_ = s.CreateSession(hash, u.ID, 100, 200)
	req := httptest.NewRequest("GET", "/api/conversations", nil)
	req.AddCookie(&http.Cookie{Name: SessionCookieName, Value: raw})
	rec2 := httptest.NewRecorder()
	protected.ServeHTTP(rec2, req)
	if rec2.Code != http.StatusUnauthorized {
		t.Fatalf("sesi kedaluwarsa harus 401, dapat %d", rec2.Code)
	}
}

func TestRequireAuthAcceptsValidAndInjectsUser(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "Andi", "", 1)
	raw, hash, _ := NewSessionToken()
	_ = s.CreateSession(hash, u.ID, 100, 9_999_999_999)

	var got *User
	protected := RequireAuth(s, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		got, _ = UserFromContext(r.Context())
		w.WriteHeader(http.StatusOK)
	}))

	req := httptest.NewRequest("GET", "/api/conversations", nil)
	req.AddCookie(&http.Cookie{Name: SessionCookieName, Value: raw})
	rec := httptest.NewRecorder()
	protected.ServeHTTP(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("sesi valid harus 200, dapat %d", rec.Code)
	}
	if got == nil || got.ID != u.ID {
		t.Fatalf("user harus di-inject ke context, dapat %+v", got)
	}
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./auth/ -run TestRequireAuth -v`
Expected: FAIL — `undefined: RequireAuth`.

- [ ] **Step 3: Implement `server/auth/session.go` dan `server/auth/middleware.go`**

`SetSessionCookie` memakai `http.SetCookie` dengan `HttpOnly: true`, `Path: "/"`, `SameSite: http.SameSiteLaxMode`, `Secure: secure`, dan `Expires` dari `expiresAt`. `ClearSessionCookie` mengeset `MaxAge: -1` dengan atribut sama. `ReadSessionCookie` memakai `r.Cookie(SessionCookieName)` dan mengembalikan `""` bila error. `SessionUser` membaca sesi by `HashToken(raw)`, mengecek `expires_at > now`, lalu `GetUserByID`. `RequireAuth` menulis `Content-Type: application/json` + `{"error":"unauthorized"}` sebelum `WriteHeader(401)`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./auth/ -v`
Expected: PASS (9 test).

- [ ] **Step 5: Commit**

```bash
git add server/auth/session.go server/auth/middleware.go server/auth/session_test.go
git commit -m "feat(auth): sesi cookie HttpOnly + middleware RequireAuth"
```

---

### Task 4: Handler auth + wire ke main.go + gerbang chat

**Files:**
- Create: `server/handlers/auth.go`
- Create: `server/config.go`
- Test: `server/handlers/auth_test.go`
- Modify: `server/main.go` (rute + wiring)
- Modify: `server/handlers/chat.go:32` (bungkus dengan `RequireAuth`)

**Interfaces:**
- Consumes: `auth.NewStore`, `auth.NewOAuth`, `auth.NewStateManager`, `auth.RequireAuth`, `auth.SetSessionCookie`, `auth.ClearSessionCookie`, `auth.SessionUser`, `auth.UserFromContext` (Task 1–3).
- Produces:
  - `type AuthHandlers struct { ... }` dengan `func NewAuthHandlers(store *auth.Store, oauth *auth.OAuth, states *auth.StateManager, secure bool, now func() int64) *AuthHandlers`
  - `func (h *AuthHandlers) GoogleLogin(w http.ResponseWriter, r *http.Request)` — set cookie `rti_oauth_state`, redirect 302 ke Google
  - `func (h *AuthHandlers) GoogleCallback(w http.ResponseWriter, r *http.Request)` — validasi state, exchange, buat sesi, redirect 302 ke `/` (SPA akan membuka `#chat`)
  - `func (h *AuthHandlers) Logout(w http.ResponseWriter, r *http.Request)` — hapus sesi + cookie, `204`
  - `func (h *AuthHandlers) Me(w http.ResponseWriter, r *http.Request)` — `200 {"user":{...}}` atau `401`
  - `server/config.go`: `func LoadEnvFile(path string)` (parser sederhana `KEY=VALUE`, abaikan komentar/baris kosong, tidak menimpa env yang sudah ada), `func ConfigFromEnv() (cfg Config, err error)` dengan `Config{ GoogleClientID, GoogleClientSecret, AppBaseURL, SessionTTLSeconds, Secure bool }`, dan `func (c Config) RedirectURL() string` → `{AppBaseURL}/api/auth/google/callback`

- [ ] **Step 1: Write the failing test**

```go
package handlers

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"ruangti/auth"
)

func newAuthTest(t *testing.T) (*auth.Store, *AuthHandlers) {
	t.Helper()
	store, err := auth.NewStore(t.TempDir() + "/a.db")
	if err != nil {
		t.Fatalf("store: %v", err)
	}
	t.Cleanup(func() { _ = store.Close() })

	oauth := auth.NewOAuth(auth.GoogleConfig{
		ClientID: "dummy-id", ClientSecret: "dummy-secret",
		RedirectURL: "http://localhost:8000/api/auth/google/callback",
	}, store)
	states := auth.NewStateManager(600)
	h := NewAuthHandlers(store, oauth, states, false, func() int64 { return 1000 })
	return store, h
}

func TestGoogleLoginRedirectsWithStateCookie(t *testing.T) {
	_, h := newAuthTest(t)

	rec := httptest.NewRecorder()
	h.GoogleLogin(rec, httptest.NewRequest("GET", "/api/auth/google/login", nil))

	if rec.Code != http.StatusFound {
		t.Fatalf("harus 302, dapat %d", rec.Code)
	}
	loc := rec.Header().Get("Location")
	if !strings.HasPrefix(loc, "https://accounts.google.com/o/oauth2/v2/auth") {
		t.Fatalf("redirect ke Google, dapat: %s", loc)
	}
	if !strings.Contains(loc, "state=") || !strings.Contains(loc, "dummy-id") {
		t.Fatalf("URL harus memuat state & client_id: %s", loc)
	}
	if len(rec.Result().Cookies()) == 0 {
		t.Fatal("harus menyetel cookie state")
	}
}

func TestGoogleCallbackRejectsBadState(t *testing.T) {
	_, h := newAuthTest(t)

	req := httptest.NewRequest("GET", "/api/auth/google/callback?code=x&state=palsu", nil)
	rec := httptest.NewRecorder()
	h.GoogleCallback(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("state palsu harus 400, dapat %d", rec.Code)
	}
}

func TestMeReturns401WithoutSession(t *testing.T) {
	_, h := newAuthTest(t)

	rec := httptest.NewRecorder()
	h.Me(rec, httptest.NewRequest("GET", "/api/auth/me", nil))
	if rec.Code != http.StatusUnauthorized {
		t.Fatalf("tanpa sesi harus 401, dapat %d", rec.Code)
	}
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./handlers/ -run TestGoogleLogin -v`
Expected: FAIL — `undefined: NewAuthHandlers`.

- [ ] **Step 3: Implement `server/handlers/auth.go` dan `server/config.go`**

`GoogleLogin`: ambil `state := h.states.Issue(h.now())`, set cookie `rti_oauth_state` (HttpOnly, `SameSite=Lax`, `MaxAge: 600`), lalu `http.Redirect(w, r, h.oauth.AuthCodeURL(state), http.StatusFound)`.

`GoogleCallback`: baca `state` dari query dan bandingkan dengan cookie `rti_oauth_state` (harus sama) **dan** `h.states.Consume(state, h.now())` harus `true`; jika gagal → `http.Error(w, "invalid oauth state", 400)`. Lalu `user, err := h.oauth.ExchangeAndUpsert(r.Context(), code, h.now())`; error → `502`. Buat `raw, hash, _ := auth.NewSessionToken()`, `store.CreateSession(hash, user.ID, now, now+ttl)`, `auth.SetSessionCookie(w, raw, expires, h.secure)`, lalu `http.Redirect(w, r, "/", http.StatusFound)`.

`Logout`: `raw := auth.ReadSessionCookie(r)`; bila tidak kosong → `store.DeleteSession(auth.HashToken(raw))`; `auth.ClearSessionCookie(w)`; `w.WriteHeader(204)`.

`Me`: baca cookie → `store.SessionUser(raw, now)`; bila `nil` → `401`; selain itu `200` dengan JSON `{"user":{"id","email","name","picture"}}`.

Di `main.go`, tambahkan flag `--base-url` (default dari env `APP_BASE_URL`, fallback `http://localhost:{port}`) dan `--app-db` (default `../backend/data/ruangti_app.db`), panggil `LoadEnvFile(".env.local")` lebih dulu, bangun `ConfigFromEnv()`, buat store + oauth + states + handlers, lalu daftarkan rute:

```go
mux.HandleFunc("/api/auth/google/login", authH.GoogleLogin)
mux.HandleFunc("/api/auth/google/callback", authH.GoogleCallback)
mux.HandleFunc("/api/auth/logout", authH.Logout)
mux.HandleFunc("/api/auth/me", authH.Me)
mux.Handle("/api/chat/stream", auth.RequireAuth(store, http.HandlerFunc(handlers.NewChatStreamHandler(aiClient, ragSvc))))
```

Bila `ConfigFromEnv()` gagal (kredensial kosong), server tetap jalan tetapi `log.Printf("[WARN] Login Google nonaktif: %v", err)` dan rute `/api/auth/google/login` mengembalikan `503`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./... -v`
Expected: PASS (semua paket, termasuk `handlers` & `auth`).

- [ ] **Step 5: Verifikasi gerbang chat menolak tanpa login**

Run:
```bash
export PATH="/d/Software/go/bin:$PATH" && cd server && go build ./... && \
curl -s -o /dev/null -w "%{http_code}\n" -X POST http://127.0.0.1:8000/api/chat/stream -d '{"message":"tes"}'
```
Expected: `401`.

- [ ] **Step 6: Commit**

```bash
git add server/handlers/auth.go server/handlers/auth_test.go server/config.go server/main.go server/handlers/chat.go
git commit -m "feat(auth): handler Google login/callback/logout/me + gerbang endpoint chat"
```

---

### Task 5: API percakapan per akun (auth-gated, IDOR-safe)

**Files:**
- Create: `server/handlers/conversations.go`
- Test: `server/handlers/conversations_test.go`
- Modify: `server/main.go` (daftarkan rute)

**Interfaces:**
- Consumes: `auth.UserFromContext`, `Store.CreateConversation/ListConversations/GetConversation/RenameConversation/DeleteConversation/AddMessage/ListMessages` (Task 1), `auth.RequireAuth` (Task 3).
- Produces:
  - `func NewConversationHandlers(store *auth.Store) *ConversationHandlers`
  - `func (h *ConversationHandlers) List(w, r)` — `200 [{"id","title","updated_at"}]`
  - `func (h *ConversationHandlers) Create(w, r)` — body `{"title":"..."}` opsional → `201 {"id","title","updated_at"}`
  - `func (h *ConversationHandlers) Get(w, r)` — `200 {"id","title","messages":[{"id","role","content","created_at"}]}` atau `404`
  - `func (h *ConversationHandlers) Rename(w, r)` — body `{"title":"..."}` → `204` atau `404`
  - `func (h *ConversationHandlers) Delete(w, r)` — `204` atau `404`
  - `func (h *ConversationHandlers) AddMessage(w, r)` — body `{"role":"user|assistant","content":"..."}` → `201 {"id"}` atau `404`

- [ ] **Step 1: Write the failing test**

```go
package handlers

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"ruangti/auth"
)

func withUser(req *http.Request, u *auth.User) *http.Request {
	return req.WithContext(auth.WithUser(req.Context(), u))
}

func TestCreateAndListConversation(t *testing.T) {
	store, _ := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	h := NewConversationHandlers(store)

	rec := httptest.NewRecorder()
	req := withUser(httptest.NewRequest("POST", "/api/conversations", strings.NewReader(`{"title":"EOQ"}`)), u)
	h.Create(rec, req)
	if rec.Code != http.StatusCreated {
		t.Fatalf("create harus 201, dapat %d: %s", rec.Code, rec.Body.String())
	}

	rec2 := httptest.NewRecorder()
	h.List(rec2, withUser(httptest.NewRequest("GET", "/api/conversations", nil), u))
	if rec2.Code != http.StatusOK || !strings.Contains(rec2.Body.String(), "EOQ") {
		t.Fatalf("list: %d %s", rec2.Code, rec2.Body.String())
	}
}

func TestGetOtherUsersConversationReturns404(t *testing.T) {
	store, _ := newAuthTest(t)
	uA, _ := store.UpsertUser("sub-a", "a@example.com", "A", "", 1)
	uB, _ := store.UpsertUser("sub-b", "b@example.com", "B", "", 1)
	c, _ := store.CreateConversation(uA.ID, "Rahasia A", 10)

	h := NewConversationHandlers(store)
	req := withUser(httptest.NewRequest("GET", "/api/conversations/"+c.ID, nil), uB)
	req.SetPathValue("id", c.ID)
	rec := httptest.NewRecorder()
	h.Get(rec, req)

	if rec.Code != http.StatusNotFound {
		t.Fatalf("IDOR: user B harus 404, dapat %d (%s)", rec.Code, rec.Body.String())
	}
}
```

- [ ] **Step 2: Run test to verify it fails**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./handlers/ -run TestCreateAndListConversation -v`
Expected: FAIL — `undefined: NewConversationHandlers` (dan `auth.WithUser`).

- [ ] **Step 3: Implement handler + `auth.WithUser`**

Tambahkan ke `server/auth/middleware.go`:

```go
func WithUser(ctx context.Context, u *User) context.Context {
	return context.WithValue(ctx, contextKey{}, u)
}
```

Handler memakai `r.PathValue("id")` (Go 1.22+ ServeMux). Setiap operasi by-ID memakai pasangan `(id, userID)` dari store sehingga bukan pemilik → `nil` → `404` JSON `{"error":"not found"}`. Rute didaftarkan di `main.go` dibungkus `auth.RequireAuth(store, ...)`:

```go
mux.Handle("GET /api/conversations", auth.RequireAuth(store, http.HandlerFunc(convH.List)))
mux.Handle("POST /api/conversations", auth.RequireAuth(store, http.HandlerFunc(convH.Create)))
mux.Handle("GET /api/conversations/{id}", auth.RequireAuth(store, http.HandlerFunc(convH.Get)))
mux.Handle("PATCH /api/conversations/{id}", auth.RequireAuth(store, http.HandlerFunc(convH.Rename)))
mux.Handle("DELETE /api/conversations/{id}", auth.RequireAuth(store, http.HandlerFunc(convH.Delete)))
mux.Handle("POST /api/conversations/{id}/messages", auth.RequireAuth(store, http.HandlerFunc(convH.AddMessage)))
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `export PATH="/d/Software/go/bin:$PATH" && cd server && go test ./... -v`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/handlers/conversations.go server/handlers/conversations_test.go server/auth/middleware.go server/main.go
git commit -m "feat(api): endpoint percakapan per akun dengan proteksi lintas-user"
```

---

### Task 6: Frontend — state auth, halaman login, gerbang rute chat

**Files:**
- Create: `frontend/src/lib/auth.ts`
- Create: `frontend/src/routes/Login.svelte`
- Test: tidak ada framework test frontend (lihat catatan) — verifikasi via CDP headless.
- Modify: `frontend/src/App.svelte` (rute `login` + gerbang)
- Modify: `frontend/src/routes/Landing.svelte` (CTA memeriksa status login)

**Interfaces:**
- Consumes: `GET /api/auth/me`, `GET /api/auth/google/login`, `POST /api/auth/logout`.
- Produces:
  - `frontend/src/lib/auth.ts`:
    - `export interface AuthUser { id: string; email: string; name: string; picture: string }`
    - `export const authState: { user: AuthUser | null; loading: boolean }` (Svelte 5 `$state` rune dalam objek reaktif, mis. `export const auth = $state({ user: null, loading: true })`)
    - `export async function loadSession(): Promise<void>`
    - `export function loginWithGoogle(): void` — `window.location.href = '/api/auth/google/login'`
    - `export async function logout(): Promise<void>` — POST lalu set `auth.user = null`
    - `export function isLoggedIn(): boolean`
  - `frontend/src/routes/Login.svelte`: `interface Props { onBack?: () => void }`; menampilkan logo TI, judul, tombol "Masuk dengan Google", dan tautan "Kembali".

- [ ] **Step 1: Tulis halaman login + lib auth**

`Login.svelte` memakai kelas yang sudah ada (`neo-card`, `neo-btn`) dan palet monokrom. Tombol Google memakai ikon "G" monokrom (SVG path sederhana berwarna hitam) — TIDAK memakai logo berwarna resmi agar tetap konsisten B&W. Struktur:

```svelte
<section class="min-h-full flex flex-col items-center justify-center text-center px-6 py-12 gap-4">
  <div class="w-14 h-14 bg-black text-white neo-card flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">TI</div>
  <h1 class="text-xl font-black tracking-tight">Masuk untuk Mulai Bertanya</h1>
  <p class="text-sm text-text-secondary max-w-xs leading-relaxed">
    Percakapanmu tersimpan di akunmu. Masuk dengan Google untuk melanjutkan.
  </p>
  <button type="button" onclick={loginWithGoogle} class="neo-btn bg-black hover:bg-neutral-800 text-white font-black text-sm px-6 py-3 shadow-[2px_2px_0px_#000] flex items-center gap-2">
    Masuk dengan Google
  </button>
  <button type="button" onclick={onBack} class="text-[11px] font-mono font-bold text-text-secondary underline">Kembali</button>
</section>
```

- [ ] **Step 2: Wire gerbang di `App.svelte`**

Tambahkan `import Login from './routes/Login.svelte'` dan `import { auth, loadSession } from './lib/auth'`. Panggil `loadSession()` di `onMount`. Ubah logika rute: bila `activeRoute === 'chat'` **dan** `!auth.loading && !auth.user` → render `<Login onBack={() => handleNavigate('landing')} />` sebagai ganti `Chat`. Tambahkan `login` ke `ROUTES`. `Landing` tetap dirender apa adanya.

- [ ] **Step 3: Verifikasi dengan CDP headless**

Run: `node -e` skrip CDP (lihat `server` tidak berubah) yang:
1. buka `http://127.0.0.1:8000/#chat` tanpa cookie → `document.body.innerText` memuat "Masuk untuk Mulai Bertanya" dan TIDAK memuat `textarea`.
2. buka `http://127.0.0.1:8000/` → memuat "Mulai Bertanya" (landing tetap publik).
3. `fetch('/api/auth/me')` → status `401`.

Expected: ketiga asersi benar.

- [ ] **Step 4: Build**

Run: `cd frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build`
Expected: exit 0, `✓ built`.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/lib/auth.ts frontend/src/routes/Login.svelte frontend/src/App.svelte
git commit -m "feat(ui): halaman login Google + gerbang rute chat"
```

---

### Task 7: Frontend — avatar header, halaman profil, logout

**Files:**
- Create: `frontend/src/routes/Profile.svelte`
- Modify: `frontend/src/components/Header.svelte` (avatar + menu)
- Modify: `frontend/src/App.svelte` (rute `profile`)

**Interfaces:**
- Consumes: `auth`, `logout` dari `frontend/src/lib/auth.ts` (Task 6).
- Produces: `Profile.svelte` dengan `interface Props { onNavigate?: (route: string) => void }`; menampilkan foto (atau inisial "TI" bila `picture` kosong), nama, email, tombol "Keluar", dan tombol "Kembali ke Chat".

- [ ] **Step 1: Buat `Profile.svelte`**

Kartu `neo-card` berisi avatar bulat (`rounded-full border-2 border-black`, `img` bila ada `picture`, selain itu blok hitam bertuliskan inisial), nama, email, lalu tombol "Keluar" (`neo-btn`, `bg-black text-white`) yang memanggil `logout()` lalu `onNavigate('landing')`.

- [ ] **Step 2: Tambah avatar di `Header.svelte`**

Di kanan header, tambahkan tombol avatar (36×36, `neo-btn rounded-full`, `overflow-hidden`) yang memanggil `onNavigate('profile')` — hanya dirender bila `auth.user` ada. Tambahkan prop `onNavigateProfile?: () => void` agar Header tetap bebas dari import langsung.

- [ ] **Step 3: Verifikasi dengan CDP headless (dengan sesi palsu)**

Karena login Google tidak bisa diotomasi, verifikasi visual memakai injeksi sesi: buat user + sesi lewat `sqlite3`/script Go kecil, set cookie `rti_session`, lalu buka `/#profile`.

Expected: halaman profil memuat nama & email yang di-inject, dan tombol "Keluar" ada.

- [ ] **Step 4: Build**

Run: `cd frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build`
Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/routes/Profile.svelte frontend/src/components/Header.svelte frontend/src/App.svelte
git commit -m "feat(ui): avatar header + halaman profil & logout"
```

---

### Task 8: Frontend — riwayat percakapan di sidebar + simpan/muat di chat

**Files:**
- Create: `frontend/src/lib/conversations.ts`
- Modify: `frontend/src/components/Sidebar.svelte` (daftar riwayat + hapus)
- Modify: `frontend/src/routes/Chat.svelte` (simpan & muat percakapan)

**Interfaces:**
- Consumes: endpoint Task 5, `auth` (Task 6).
- Produces: `frontend/src/lib/conversations.ts`:
  - `export interface ConversationSummary { id: string; title: string; updated_at: number }`
  - `export async function listConversations(): Promise<ConversationSummary[]>`
  - `export async function createConversation(title: string): Promise<ConversationSummary>`
  - `export async function getConversation(id: string): Promise<{ id: string; title: string; messages: { id: string; role: string; content: string; created_at: number }[] }>`
  - `export async function deleteConversation(id: string): Promise<void>`
  - `export async function addMessage(id: string, role: string, content: string): Promise<void>`
  - Semua `fetch` memakai `credentials: 'include'`.

- [ ] **Step 1: Buat `frontend/src/lib/conversations.ts`**

Wrapper `fetch` tipis dengan `credentials: 'include'` dan error handling yang melempar `Error` berisi status.

- [ ] **Step 2: Integrasi `Chat.svelte`**

Saat pesan pertama dikirim dan belum ada `conversationId`, panggil `createConversation(judulDari(pesanPertama))` (potong 60 karakter) lalu `addMessage` untuk pesan user; setelah stream selesai, `addMessage` untuk jawaban asisten. Tambahkan prop `conversationId?: string` — bila diisi (dibuka dari sidebar), muat riwayat lewat `getConversation` dan isi `messages`.

- [ ] **Step 3: Integrasi `Sidebar.svelte`**

Ganti `RECENT_TOPICS` statis dengan hasil `listConversations()` (dipanggil saat sidebar dibuka). Tampilkan tiap item dengan tombol hapus (ikon ×) yang memanggil `deleteConversation` lalu menyegarkan daftar. Bila daftar kosong, tampilkan teks "Belum ada riwayat".

- [ ] **Step 4: Verifikasi dengan CDP headless**

Dengan sesi yang di-inject (Task 7 Step 3), buat 1 percakapan lewat API, lalu buka sidebar dan pastikan judulnya muncul; tekan tombol hapus dan pastikan item hilang setelah refresh.

- [ ] **Step 5: Build + commit**

```bash
cd frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build
git add frontend/src/lib/conversations.ts frontend/src/components/Sidebar.svelte frontend/src/routes/Chat.svelte
git commit -m "feat(ui): riwayat percakapan per akun di sidebar + simpan/muat chat"
```

---

### Task 9: Dokumentasi, build binary, verifikasi menyeluruh

**Files:**
- Modify: `DESIGN.md` (bagian baru: Alur Auth & Halaman Login/Profil)
- Modify: `.env.example` (tambah `APP_BASE_URL`)
- Modify: `build_single_binary.sh` bila perlu (pastikan `.env.local` tetap dibaca runtime)

- [ ] **Step 1: Perbarui `DESIGN.md`**

Tambahkan bagian "Alur Auth" yang mencatat: rute publik (`landing`, `docs`) vs rute terproteksi (`chat`, `profile`), tampilan halaman login (monokrom, tombol Google hitam-putih), avatar bulat di header, dan aturan bahwa nama provider upstream tetap tidak boleh muncul.

- [ ] **Step 2: Tambah `APP_BASE_URL` ke `.env.example`**

Nilai contoh: `APP_BASE_URL=http://localhost:8000`. Beri komentar bahwa untuk produksi harus diisi URL publik (mis. `https://ruangti.varevastudio.tech`) dan URL callback `{APP_BASE_URL}/api/auth/google/callback` wajib didaftarkan di Google Cloud Console.

- [ ] **Step 3: Build binary tunggal**

Run: `bash build_single_binary.sh`
Expected: `ruangti.exe` (~13–15 MB) terbentuk, exit 0.

- [ ] **Step 4: Verifikasi menyeluruh**

Run:
```bash
export PATH="/d/Software/go/bin:$PATH" && cd server && go vet ./... && go test ./...
cd ../frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build
```
Expected: semua PASS.

- [ ] **Step 5: Commit**

```bash
git add DESIGN.md .env.example
git commit -m "docs: catat alur auth Google di DESIGN.md + contoh APP_BASE_URL"
```

---

## Catatan Verifikasi

- **Tidak ada framework test frontend** di repo ini (tidak ada vitest/playwright; `tsc` tidak memeriksa file `.svelte`). Verifikasi UI memakai **CDP headless Chrome** untuk asersi DOM, seperti yang sudah menjadi praktik proyek ini.
- **Login Google end-to-end tidak bisa diotomasi** (butuh akun Google + persetujuan interaktif). Yang diotomasi: redirect ke `accounts.google.com` memuat `client_id` + `state`, callback menolak state palsu, dan endpoint terproteksi menolak tanpa sesi. Login penuh diuji **manual oleh pengguna** setelah redirect URI terdaftar.
- **Redirect URI wajib terdaftar di Google Cloud Console** dengan nilai persis `{APP_BASE_URL}/api/auth/google/callback`. Bila tidak, Google mengembalikan `redirect_uri_mismatch`.
