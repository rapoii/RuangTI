package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

// Config menampung konfigurasi runtime aplikasi.
type Config struct {
	GoogleClientID     string
	GoogleClientSecret string
	AppBaseURL         string
	SessionTTLSeconds  int
	Secure             bool
}

// RedirectURL adalah URL callback yang WAJIB didaftarkan di Google Cloud Console.
func (c Config) RedirectURL() string {
	return strings.TrimRight(c.AppBaseURL, "/") + "/api/auth/google/callback"
}

// LoadEnvFile membaca file .env sederhana (KEY=VALUE) tanpa menimpa env yang sudah ada.
// Nilai tidak pernah di-log oleh pemanggil.
func LoadEnvFile(path string) {
	f, err := os.Open(path)
	if err != nil {
		return // opsional: tidak ada file bukan error
	}
	defer f.Close()

	sc := bufio.NewScanner(f)
	for sc.Scan() {
		line := strings.TrimSpace(sc.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		key, val, ok := strings.Cut(line, "=")
		if !ok {
			continue
		}
		key = strings.TrimSpace(key)
		val = strings.TrimSpace(val)
		// Buang tanda kutip pembungkus bila ada.
		val = strings.Trim(val, `"'`)
		if key == "" {
			continue
		}
		if _, exists := os.LookupEnv(key); !exists {
			_ = os.Setenv(key, val)
		}
	}
}

// ConfigFromEnv menyusun konfigurasi dari environment (setelah LoadEnvFile).
func ConfigFromEnv(defaultBaseURL string) (Config, error) {
	cfg := Config{
		GoogleClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
		GoogleClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
		AppBaseURL:         os.Getenv("APP_BASE_URL"),
		SessionTTLSeconds:  30 * 24 * 3600,
	}
	if cfg.AppBaseURL == "" {
		cfg.AppBaseURL = defaultBaseURL
	}
	if v := os.Getenv("SESSION_TTL_SECONDS"); v != "" {
		if n, err := strconv.Atoi(v); err == nil && n > 0 {
			cfg.SessionTTLSeconds = n
		}
	}
	// Secure cookie otomatis aktif bila base URL memakai https.
	cfg.Secure = strings.HasPrefix(strings.ToLower(cfg.AppBaseURL), "https://")

	if cfg.GoogleClientID == "" || cfg.GoogleClientSecret == "" {
		return cfg, fmt.Errorf("GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET belum diisi")
	}
	return cfg, nil
}
