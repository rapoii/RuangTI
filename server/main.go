package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"ruangti/handlers"
)

func main() {
	port := flag.Int("port", 8000, "Port listening HTTP server")
	flag.Parse()

	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", handlers.NewHealthHandler())

	server := &http.Server{
		Addr:         fmt.Sprintf("127.0.0.1:%d", *port),
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 60 * time.Second,
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
