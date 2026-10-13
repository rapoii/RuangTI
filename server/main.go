package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"
	"time"

	"ruangti/ai"
	"ruangti/auth"
	"ruangti/handlers"
	"ruangti/rag"
)

func main() {
	host := flag.String("host", "0.0.0.0", "Host address listening HTTP server")
	port := flag.Int("port", 3005, "Port listening HTTP server")
	mimolyURL := flag.String("mimoly", "http://127.0.0.1:8080/v1", "Base URL Mimoly AI Gateway")
	router9URL := flag.String("router9", "http://127.0.0.1:20128/v1", "Base URL 9Router Fallback Gateway")
	fallbackModel := flag.String("fallback-model", "Hermes", "Model fallback jika Mimoly offline")
	ragDBPath := flag.String("rag-db", "../backend/data/ruangti_rag.db", "Path database SQLite RAG")
	appDBPath := flag.String("app-db", "../backend/data/ruangti_app.db", "Path database SQLite aplikasi (auth & percakapan)")
	baseURL := flag.String("base-url", "", "Base URL publik aplikasi (untuk redirect OAuth Google)")
	flag.Parse()

	// Muat kredensial dari .env.local (nilai tidak pernah di-log).
	LoadEnvFile(".env.local")
	LoadEnvFile("../.env.local")

	// Inisialisasi AI Client
	aiClient := ai.NewClient(*mimolyURL, *router9URL, *fallbackModel)

	// Inisialisasi RAG Service
	absRAGPath, _ := filepath.Abs(*ragDBPath)
	ragSvc, err := rag.NewRAGService(absRAGPath)
	if err != nil {
		log.Printf("[WARN] RAG SQLite tidak dapat dibuka di %s: %v. Berjalan tanpa RAG.", absRAGPath, err)
	} else {
		log.Printf("[INFO] RAG SQLite FTS5 aktif di %s", absRAGPath)
		defer ragSvc.Close()
	}

	// Inisialisasi store aplikasi (auth & percakapan)
	absAppDBPath, _ := filepath.Abs(*appDBPath)
	store, err := auth.NewStore(absAppDBPath)
	if err != nil {
		log.Fatalf("Gagal membuka database aplikasi di %s: %v", absAppDBPath, err)
	}
	defer store.Close()
	log.Printf("[INFO] Database aplikasi aktif di %s", absAppDBPath)

	// Konfigurasi login Google
	defaultBase := fmt.Sprintf("http://localhost:%d", *port)
	if *baseURL != "" {
		_ = os.Setenv("APP_BASE_URL", *baseURL)
	}
	cfg, cfgErr := ConfigFromEnv(defaultBase)
	oauth := auth.NewOAuth(auth.GoogleConfig{
		ClientID:     cfg.GoogleClientID,
		ClientSecret: cfg.GoogleClientSecret,
		RedirectURL:  cfg.RedirectURL(),
	}, store)
	states := auth.NewStateManager(600)
	authH := handlers.NewAuthHandlers(store, oauth, states, cfg.Secure, auth.NowSeconds)
	if cfgErr != nil {
		authH = authH.Disabled()
		log.Printf("[WARN] Login Google nonaktif: %v", cfgErr)
	} else {
		log.Printf("[INFO] Login Google aktif (redirect: %s)", cfg.RedirectURL())
	}

	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handlers.NewHealthHandler())
	mux.HandleFunc("/api/auth/google/login", authH.GoogleLogin)
	mux.HandleFunc("/api/auth/google/callback", authH.GoogleCallback)
	mux.HandleFunc("/api/auth/callback/google", authH.GoogleCallback)
	mux.HandleFunc("/api/auth/logout", authH.Logout)
	mux.HandleFunc("/api/auth/me", authH.Me)
	mux.Handle("/api/chat/stream", auth.RequireAuth(store, http.HandlerFunc(handlers.NewChatStreamHandler(aiClient, ragSvc))))

	// Rute percakapan per akun (semuanya memerlukan autentikasi)
	convH := handlers.NewConversationHandlers(store)
	mux.Handle("GET /api/conversations", auth.RequireAuth(store, http.HandlerFunc(convH.List)))
	mux.Handle("POST /api/conversations", auth.RequireAuth(store, http.HandlerFunc(convH.Create)))
	mux.Handle("GET /api/conversations/{id}", auth.RequireAuth(store, http.HandlerFunc(convH.Get)))
	mux.Handle("PATCH /api/conversations/{id}", auth.RequireAuth(store, http.HandlerFunc(convH.Rename)))
	mux.Handle("DELETE /api/conversations/{id}", auth.RequireAuth(store, http.HandlerFunc(convH.Delete)))
	mux.Handle("POST /api/conversations/{id}/messages", auth.RequireAuth(store, http.HandlerFunc(convH.AddMessage)))

	mux.HandleFunc("/api/upload", handlers.NewUploadHandler())
	mux.HandleFunc("/api/docs/search", handlers.NewDocsSearchHandler(ragSvc))
	mux.Handle("/", NewSPAHandler())

	server := &http.Server{
		Addr:         fmt.Sprintf("%s:%d", *host, *port),
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 5 * time.Minute,
	}

	go func() {
		log.Printf("RuangTI Go Server berjalan di http://%s:%d (Akses HP: http://192.168.100.158:%d)", *host, *port, *port)
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Gagal menjalankan server: %v", err)
		}
	}()

	// Layani juga port 8000 agar tunnel cloudflared lama tetap terhubung tanpa putus
	if *port != 8000 {
		go func() {
			s8000 := &http.Server{
				Addr:         fmt.Sprintf("%s:8000", *host),
				Handler:      mux,
				ReadTimeout:  15 * time.Second,
				WriteTimeout: 5 * time.Minute,
			}
			_ = s8000.ListenAndServe()
		}()
	}

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
	<-stop

	log.Println("Mematikan server RuangTI Go secara aman...")
}
