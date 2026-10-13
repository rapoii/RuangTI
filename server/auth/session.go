package auth

import (
	"crypto/rand"
	"encoding/base64"
	"net/http"
	"time"
)

const SessionCookieName = "rti_session"

func unixToTime(sec int64) time.Time {
	return time.Unix(sec, 0).UTC()
}

// NewSessionToken membuat token mentah (dikirim ke browser) dan hash-nya (disimpan di DB).
func NewSessionToken() (raw string, hash string, err error) {
	buf := make([]byte, 32)
	if _, err := rand.Read(buf); err != nil {
		return "", "", err
	}
	raw = base64.RawURLEncoding.EncodeToString(buf)
	return raw, HashToken(raw), nil
}

// SetSessionCookie menulis cookie sesi HttpOnly.
func SetSessionCookie(w http.ResponseWriter, raw string, expiresAt int64, secure bool) {
	http.SetCookie(w, &http.Cookie{
		Name:     SessionCookieName,
		Value:    raw,
		Path:     "/",
		HttpOnly: true,
		Secure:   secure,
		SameSite: http.SameSiteLaxMode,
		Expires:  unixToTime(expiresAt),
		MaxAge:   int(expiresAt - NowSeconds()),
	})
}

// ClearSessionCookie menghapus cookie sesi.
func ClearSessionCookie(w http.ResponseWriter) {
	http.SetCookie(w, &http.Cookie{
		Name:     SessionCookieName,
		Value:    "",
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		SameSite: http.SameSiteLaxMode,
		MaxAge:   -1,
	})
}

// ReadSessionCookie mengembalikan token mentah dari cookie, atau "" bila tidak ada.
func ReadSessionCookie(r *http.Request) string {
	c, err := r.Cookie(SessionCookieName)
	if err != nil {
		return ""
	}
	return c.Value
}

// SessionUser mengembalikan user pemilik sesi yang masih aktif, atau nil bila tidak ada/kedaluwarsa.
func (s *Store) SessionUser(rawToken string, now int64) (*User, error) {
	if rawToken == "" {
		return nil, nil
	}
	sess, err := s.GetSession(HashToken(rawToken))
	if err != nil {
		return nil, err
	}
	if sess == nil || sess.ExpiresAt <= now {
		return nil, nil
	}
	return s.GetUserByID(sess.UserID)
}
