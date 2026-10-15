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

func TestAuthCodeURLContainsRequiredParams(t *testing.T) {
	o := NewOAuth(GoogleConfig{
		ClientID:     "client-abc",
		ClientSecret: "secret",
		RedirectURL:  "http://localhost:8000/api/auth/google/callback",
	}, nil)

	u := o.AuthCodeURL("state-xyz")
	for _, want := range []string{
		"accounts.google.com/o/oauth2/",
		"client_id=client-abc",
		"state=state-xyz",
		"openid",
		"email",
		"profile",
		"redirect_uri=",
		"response_type=code",
	} {
		if !contains(u, want) {
			t.Fatalf("URL harus memuat %q, dapat: %s", want, u)
		}
	}
}

func contains(haystack, needle string) bool {
	return len(haystack) >= len(needle) && (func() bool {
		for i := 0; i+len(needle) <= len(haystack); i++ {
			if haystack[i:i+len(needle)] == needle {
				return true
			}
		}
		return false
	})()
}
