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
	if !strings.HasPrefix(loc, "https://accounts.google.com/o/oauth2/") {
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

func TestGoogleCallbackRejectsStateNotMatchingCookie(t *testing.T) {
	_, h := newAuthTest(t)

	// state valid tapi cookie tidak cocok → harus ditolak (CSRF)
	st := h.states.Issue(1000)
	req := httptest.NewRequest("GET", "/api/auth/google/callback?code=x&state="+st, nil)
	req.AddCookie(&http.Cookie{Name: oauthStateCookie, Value: "cookie-lain"})
	rec := httptest.NewRecorder()
	h.GoogleCallback(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("cookie state tidak cocok harus 400, dapat %d", rec.Code)
	}
}

func TestGoogleCallbackRejectsMissingCode(t *testing.T) {
	_, h := newAuthTest(t)

	st := h.states.Issue(1000)
	req := httptest.NewRequest("GET", "/api/auth/google/callback?state="+st, nil)
	req.AddCookie(&http.Cookie{Name: oauthStateCookie, Value: st})
	rec := httptest.NewRecorder()
	h.GoogleCallback(rec, req)

	if rec.Code != http.StatusBadRequest {
		t.Fatalf("tanpa code harus 400, dapat %d", rec.Code)
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

func TestMeReturnsUserWithValidSession(t *testing.T) {
	store, h := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "Andi", "http://img/x.png", 1)
	raw, hash, _ := auth.NewSessionToken()
	_ = store.CreateSession(hash, u.ID, 100, 9_999_999_999)

	req := httptest.NewRequest("GET", "/api/auth/me", nil)
	req.AddCookie(&http.Cookie{Name: auth.SessionCookieName, Value: raw})
	rec := httptest.NewRecorder()
	h.Me(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("harus 200, dapat %d (%s)", rec.Code, rec.Body.String())
	}
	body := rec.Body.String()
	if !strings.Contains(body, "a@example.com") || !strings.Contains(body, "Andi") {
		t.Fatalf("body harus memuat email & nama: %s", body)
	}
	// google_sub tidak boleh bocor ke klien
	if strings.Contains(body, "google_sub") || strings.Contains(body, "sub-1") {
		t.Fatalf("google_sub tidak boleh dikirim ke klien: %s", body)
	}
}

func TestLogoutClearsSession(t *testing.T) {
	store, h := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	raw, hash, _ := auth.NewSessionToken()
	_ = store.CreateSession(hash, u.ID, 100, 9_999_999_999)

	req := httptest.NewRequest("POST", "/api/auth/logout", nil)
	req.AddCookie(&http.Cookie{Name: auth.SessionCookieName, Value: raw})
	rec := httptest.NewRecorder()
	h.Logout(rec, req)

	if rec.Code != http.StatusNoContent {
		t.Fatalf("logout harus 204, dapat %d", rec.Code)
	}
	gone, _ := store.GetSession(hash)
	if gone != nil {
		t.Fatal("sesi harus terhapus dari DB setelah logout")
	}
}
