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
	"ruangti/handlers"
	"ruangti/rag"
)

func main() {
	port := flag.Int("port", 8000, "Port listening HTTP server")
	mimolyURL := flag.String("mimoly", "http://127.0.0.1:8080/v1", "Base URL Mimoly AI Gateway")
	router9URL := flag.String("router9", "http://127.0.0.1:20128/v1", "Base URL 9Router Fallback Gateway")
	fallbackModel := flag.String("fallback-model", "Hermes", "Model fallback jika Mimoly offline")
	ragDBPath := flag.String("rag-db", "../backend/data/ruangti_rag.db", "Path database SQLite RAG")
	flag.Parse()

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

	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handlers.NewHealthHandler())
	mux.HandleFunc("/api/chat/stream", handlers.NewChatStreamHandler(aiClient, ragSvc))

	server := &http.Server{
		Addr:         fmt.Sprintf("127.0.0.1:%d", *port),
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 5 * time.Minute,
	}

	go func() {
		log.Printf("RuangTI Go Server berjalan di http://127.0.0.1:%d", *port)
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Gagal menjalankan server: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
	<-stop

	log.Println("Mematikan server RuangTI Go secara aman...")
}
