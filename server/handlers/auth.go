package handlers

import (
	"encoding/json"
	"net/http"
	"strings"

	"ruangti/auth"
)

const oauthStateCookie = "rti_oauth_state"

// AuthHandlers membungkus dependensi alur login Google.
type AuthHandlers struct {
	store   *auth.Store
	oauth   *auth.OAuth
	states  *auth.StateManager
	secure  bool
	ttl     int64
	now     func() int64
	enabled bool
}

func NewAuthHandlers(store *auth.Store, oauth *auth.OAuth, states *auth.StateManager, secure bool, now func() int64) *AuthHandlers {
	return &AuthHandlers{
		store:   store,
		oauth:   oauth,
		states:  states,
		secure:  secure,
		ttl:     30 * 24 * 3600, // 30 hari
		now:     now,
		enabled: true,
	}
}

// Disabled menandai login Google tidak tersedia (kredensial kosong).
func (h *AuthHandlers) Disabled() *AuthHandlers {
	h.enabled = false
	return h
}

func (h *AuthHandlers) redirectURLForRequest(r *http.Request) string {
	host := r.Header.Get("X-Forwarded-Host")
	if host == "" {
		host = r.Host
	}
	if strings.Contains(strings.ToLower(host), "varevastudio.tech") {
		return "https://ruangti.varevastudio.tech/api/auth/callback/google"
	}
	return ""
}

func (h *AuthHandlers) isSecureForRequest(r *http.Request) bool {
	if h.secure {
		return true
	}
	proto := r.Header.Get("X-Forwarded-Proto")
	if strings.EqualFold(proto, "https") {
		return true
	}
	host := r.Header.Get("X-Forwarded-Host")
	if host == "" {
		host = r.Host
	}
	return strings.Contains(strings.ToLower(host), "varevastudio.tech")
}

func (h *AuthHandlers) GoogleLogin(w http.ResponseWriter, r *http.Request) {
	if !h.enabled {
		http.Error(w, "Login Google belum dikonfigurasi", http.StatusServiceUnavailable)
		return
	}
	state := h.states.Issue(h.now())
	if state == "" {
		http.Error(w, "Gagal membuat state", http.StatusInternalServerError)
		return
	}
	secure := h.isSecureForRequest(r)
	http.SetCookie(w, &http.Cookie{
		Name:     oauthStateCookie,
		Value:    state,
		Path:     "/",
		HttpOnly: true,
		Secure:   secure,
		SameSite: http.SameSiteLaxMode,
		MaxAge:   600,
	})
	http.Redirect(w, r, h.oauth.AuthCodeURLWithRedirect(state, h.redirectURLForRequest(r)), http.StatusFound)
}

func (h *AuthHandlers) GoogleCallback(w http.ResponseWriter, r *http.Request) {
	if !h.enabled {
		http.Error(w, "Login Google belum dikonfigurasi", http.StatusServiceUnavailable)
		return
	}
	q := r.URL.Query()
	if errParam := q.Get("error"); errParam != "" {
		http.Error(w, "Login dibatalkan: "+errParam, http.StatusBadRequest)
		return
	}

	state := q.Get("state")
	cookie, err := r.Cookie(oauthStateCookie)
	if err != nil || cookie.Value == "" || state == "" || state != cookie.Value {
		http.Error(w, "invalid oauth state", http.StatusBadRequest)
		return
	}
	// Sekali pakai: konsumsi state walau cocok.
	if !h.states.Consume(state, h.now()) {
		http.Error(w, "invalid oauth state", http.StatusBadRequest)
		return
	}

	code := q.Get("code")
	if strings.TrimSpace(code) == "" {
		http.Error(w, "missing authorization code", http.StatusBadRequest)
		return
	}

	now := h.now()
	user, err := h.oauth.ExchangeAndUpsertWithRedirect(r.Context(), code, h.redirectURLForRequest(r), now)
	if err != nil {
		http.Error(w, "Gagal masuk dengan Google", http.StatusBadGateway)
		return
	}

	raw, hash, err := auth.NewSessionToken()
	if err != nil {
		http.Error(w, "Gagal membuat sesi", http.StatusInternalServerError)
		return
	}
	expires := now + h.ttl
	if err := h.store.CreateSession(hash, user.ID, now, expires); err != nil {
		http.Error(w, "Gagal menyimpan sesi", http.StatusInternalServerError)
		return
	}

	secure := h.isSecureForRequest(r)
	auth.SetSessionCookie(w, raw, expires, secure)
	// Bersihkan cookie state setelah dipakai.
	http.SetCookie(w, &http.Cookie{Name: oauthStateCookie, Value: "", Path: "/", HttpOnly: true, Secure: secure, SameSite: http.SameSiteLaxMode, MaxAge: -1})
	http.Redirect(w, r, "/#chat", http.StatusFound)
}

func (h *AuthHandlers) Logout(w http.ResponseWriter, r *http.Request) {
	if raw := auth.ReadSessionCookie(r); raw != "" {
		_ = h.store.DeleteSession(auth.HashToken(raw))
	}
	auth.ClearSessionCookie(w)
	w.WriteHeader(http.StatusNoContent)
}

func (h *AuthHandlers) Me(w http.ResponseWriter, r *http.Request) {
	raw := auth.ReadSessionCookie(r)
	user, err := h.store.SessionUser(raw, h.now())
	if err != nil {
		http.Error(w, "internal error", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	if user == nil {
		w.WriteHeader(http.StatusUnauthorized)
		_ = json.NewEncoder(w).Encode(map[string]string{"error": "unauthorized"})
		return
	}
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(map[string]any{
		"user": map[string]string{
			"id":      user.ID,
			"email":   user.Email,
			"name":    user.Name,
			"picture": user.Picture,
		},
	})
}
