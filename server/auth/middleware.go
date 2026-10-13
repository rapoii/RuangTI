package auth

import (
	"context"
	"encoding/json"
	"net/http"
)

type contextKey struct{}

// WithUser menyisipkan user ke context (dipakai middleware & test).
func WithUser(ctx context.Context, u *User) context.Context {
	return context.WithValue(ctx, contextKey{}, u)
}

// UserFromContext mengambil user yang di-inject oleh RequireAuth.
func UserFromContext(ctx context.Context) (*User, bool) {
	u, ok := ctx.Value(contextKey{}).(*User)
	return u, ok && u != nil
}

func writeJSONError(w http.ResponseWriter, code int, msg string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	_ = json.NewEncoder(w).Encode(map[string]string{"error": msg})
}

// RequireAuth menolak request tanpa sesi valid dengan 401 JSON.
func RequireAuth(store *Store, next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		raw := ReadSessionCookie(r)
		user, err := store.SessionUser(raw, NowSeconds())
		if err != nil {
			writeJSONError(w, http.StatusInternalServerError, "internal error")
			return
		}
		if user == nil {
			writeJSONError(w, http.StatusUnauthorized, "unauthorized")
			return
		}
		next.ServeHTTP(w, r.WithContext(WithUser(r.Context(), user)))
	})
}
