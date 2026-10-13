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

func TestRequireAuthRejectsTamperedToken(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	_, hash, _ := NewSessionToken()
	_ = s.CreateSession(hash, u.ID, 100, 9_999_999_999)

	protected := RequireAuth(s, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	}))

	// token mentah palsu: hash-nya tidak akan cocok dengan yang tersimpan
	req := httptest.NewRequest("GET", "/api/conversations", nil)
	req.AddCookie(&http.Cookie{Name: SessionCookieName, Value: "token-yang-dipalsukan"})
	rec := httptest.NewRecorder()
	protected.ServeHTTP(rec, req)
	if rec.Code != http.StatusUnauthorized {
		t.Fatalf("token palsu harus 401, dapat %d", rec.Code)
	}
}

func TestSessionUserIgnoresExpiredSession(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	raw, hash, _ := NewSessionToken()
	_ = s.CreateSession(hash, u.ID, 100, 200)

	got, err := s.SessionUser(raw, 201)
	if err != nil {
		t.Fatalf("tidak boleh error: %v", err)
	}
	if got != nil {
		t.Fatalf("sesi kedaluwarsa harus nil, dapat %+v", got)
	}

	ok, err := s.SessionUser(raw, 150)
	if err != nil || ok == nil || ok.ID != u.ID {
		t.Fatalf("sesi aktif harus mengembalikan user: got=%v err=%v", ok, err)
	}
}

func TestNewSessionTokenIsRandomAndHashed(t *testing.T) {
	raw1, hash1, err := NewSessionToken()
	if err != nil {
		t.Fatalf("token 1: %v", err)
	}
	raw2, _, _ := NewSessionToken()

	if raw1 == raw2 {
		t.Fatal("token harus acak unik")
	}
	if hash1 == raw1 || len(hash1) != 64 {
		t.Fatalf("hash harus sha256 hex, dapat %q", hash1)
	}
	if hash1 != HashToken(raw1) {
		t.Fatal("hash harus cocok dengan HashToken(raw)")
	}
}
