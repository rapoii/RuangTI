package auth

import (
	"context"
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"sync"
	"time"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

// GoogleConfig menyimpan kredensial OAuth2 Google (dibaca dari env, tidak pernah di-log).
type GoogleConfig struct {
	ClientID     string
	ClientSecret string
	RedirectURL  string
}

type OAuth struct {
	conf  *oauth2.Config
	store *Store
	http  *http.Client
}

func NewOAuth(cfg GoogleConfig, store *Store) *OAuth {
	return &OAuth{
		conf: &oauth2.Config{
			ClientID:     cfg.ClientID,
			ClientSecret: cfg.ClientSecret,
			RedirectURL:  cfg.RedirectURL,
			Scopes:       []string{"openid", "email", "profile"},
			Endpoint:     google.Endpoint,
		},
		store: store,
		http:  &http.Client{Timeout: 20 * time.Second},
	}
}

// AuthCodeURL membangun URL persetujuan Google.
func (o *OAuth) AuthCodeURL(state string) string {
	return o.AuthCodeURLWithRedirect(state, "")
}

// AuthCodeURLWithRedirect membangun URL persetujuan Google dengan opsi override redirect URI.
func (o *OAuth) AuthCodeURLWithRedirect(state string, redirectURL string) string {
	conf := o.conf
	if redirectURL != "" && redirectURL != o.conf.RedirectURL {
		clone := *o.conf
		clone.RedirectURL = redirectURL
		conf = &clone
	}
	return conf.AuthCodeURL(state, oauth2.AccessTypeOnline, oauth2.SetAuthURLParam("prompt", "select_account"))
}

type googleUserInfo struct {
	Sub           string `json:"sub"`
	Email         string `json:"email"`
	EmailVerified *bool  `json:"email_verified"`
	Name          string `json:"name"`
	Picture       string `json:"picture"`
}

// ExchangeAndUpsert menukar authorization code menjadi profil, lalu menyimpan user.
func (o *OAuth) ExchangeAndUpsert(ctx context.Context, code string, now int64) (*User, error) {
	return o.ExchangeAndUpsertWithRedirect(ctx, code, "", now)
}

// ExchangeAndUpsertWithRedirect menukar authorization code dengan opsi override redirect URI.
func (o *OAuth) ExchangeAndUpsertWithRedirect(ctx context.Context, code string, redirectURL string, now int64) (*User, error) {
	conf := o.conf
	if redirectURL != "" && redirectURL != o.conf.RedirectURL {
		clone := *o.conf
		clone.RedirectURL = redirectURL
		conf = &clone
	}
	tok, err := conf.Exchange(ctx, code)
	if err != nil {
		return nil, fmt.Errorf("exchange code: %w", err)
	}

	client := o.conf.Client(ctx, tok)
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, "https://openidconnect.googleapis.com/v1/userinfo", nil)
	if err != nil {
		return nil, fmt.Errorf("build userinfo request: %w", err)
	}
	res, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("fetch userinfo: %w", err)
	}
	defer res.Body.Close()

	body, err := io.ReadAll(io.LimitReader(res.Body, 1<<20))
	if err != nil {
		return nil, fmt.Errorf("read userinfo: %w", err)
	}
	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("userinfo status %d", res.StatusCode)
	}

	var info googleUserInfo
	if err := json.Unmarshal(body, &info); err != nil {
		return nil, fmt.Errorf("decode userinfo: %w", err)
	}

	if strings.TrimSpace(info.Email) == "" {
		return nil, fmt.Errorf("akun Google tidak mengirim email")
	}
	if info.EmailVerified != nil && !*info.EmailVerified {
		return nil, fmt.Errorf("email Google belum terverifikasi")
	}

	name := strings.TrimSpace(info.Name)
	if name == "" {
		name = info.Email
		if i := strings.IndexByte(name, '@'); i > 0 {
			name = name[:i]
		}
	}

	return o.store.UpsertUser(info.Sub, strings.ToLower(info.Email), name, info.Picture, now)
}

// HashToken mengembalikan SHA-256 hex dari token mentah (yang disimpan di DB, bukan token asli).
func HashToken(token string) string {
	sum := sha256.Sum256([]byte(token))
	return hex.EncodeToString(sum[:])
}

// StateManager menyimpan state OAuth sekali pakai dengan masa berlaku.
type StateManager struct {
	mu  sync.Mutex
	ttl int64
	m   map[string]int64
}

func NewStateManager(ttlSeconds int) *StateManager {
	return &StateManager{ttl: int64(ttlSeconds), m: make(map[string]int64)}
}

func (s *StateManager) Issue(now int64) string {
	buf := make([]byte, 32)
	if _, err := rand.Read(buf); err != nil {
		return ""
	}
	token := base64.RawURLEncoding.EncodeToString(buf)
	s.mu.Lock()
	s.m[token] = now + s.ttl
	s.mu.Unlock()
	return token
}

// Consume mengembalikan true hanya sekali untuk token yang valid & belum kedaluwarsa.
func (s *StateManager) Consume(token string, now int64) bool {
	if token == "" {
		return false
	}
	s.mu.Lock()
	exp, ok := s.m[token]
	if ok {
		delete(s.m, token) // sekali pakai, bahkan bila kedaluwarsa
	}
	s.mu.Unlock()
	if !ok {
		return false
	}
	return now <= exp
}
