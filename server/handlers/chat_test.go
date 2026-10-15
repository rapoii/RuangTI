package handlers_test

import (
	"bytes"
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"ruangti/ai"
	"ruangti/handlers"
	"ruangti/rag"
)

func TestChatStreamHandler(t *testing.T) {
	// Mock AI server
	mockServer := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/event-stream")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("data: {\"choices\":[{\"delta\":{\"reasoning_content\":\"Analisis EOQ\"}}]}\n\n"))
		_, _ = w.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"Rumus EOQ adalah Q*\"}}]}\n\n"))
		_, _ = w.Write([]byte("data: [DONE]\n\n"))
	}))
	defer mockServer.Close()

	aiClient := ai.NewClient(mockServer.URL, "", "")

	// Handlers with nil RAG (should work without RAG too)
	h := handlers.NewChatStreamHandler(aiClient, nil)

	body, _ := json.Marshal(map[string]interface{}{
		"message":  "Apa rumus EOQ?",
		"model_id": "mimo-v2.6-pro@default",
	})

	req := httptest.NewRequest(http.MethodPost, "/api/chat/stream", bytes.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	h(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}

	contentType := rec.Header().Get("Content-Type")
	if !strings.HasPrefix(contentType, "text/event-stream") {
		t.Errorf("expected text/event-stream, got %s", contentType)
	}

	responseBody := rec.Body.String()
	if !strings.Contains(responseBody, "Analisis EOQ") {
		t.Errorf("expected reasoning chunk in stream, got %s", responseBody)
	}
	if !strings.Contains(responseBody, "Rumus EOQ adalah Q*") {
		t.Errorf("expected content chunk in stream, got %s", responseBody)
	}
	if !strings.Contains(responseBody, "data: [DONE]") {
		t.Errorf("expected [DONE] token, got %s", responseBody)
	}
}

// Review Focus 4: Client disconnect during streaming
func TestChatStreamClientDisconnect(t *testing.T) {
	mockServer := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/event-stream")
		w.WriteHeader(http.StatusOK)
		for i := 0; i < 10; i++ {
			select {
			case <-r.Context().Done():
				return
			default:
				_, _ = w.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"chunk\"}}]}\n\n"))
				w.(http.Flusher).Flush()
				time.Sleep(50 * time.Millisecond)
			}
		}
	}))
	defer mockServer.Close()

	aiClient := ai.NewClient(mockServer.URL, "", "")
	h := handlers.NewChatStreamHandler(aiClient, (*rag.RAGService)(nil))

	body, _ := json.Marshal(map[string]interface{}{
		"message":  "halo",
		"model_id": "mimo-v2.6-flash@none",
	})

	ctx, cancel := context.WithCancel(context.Background())
	req := httptest.NewRequest(http.MethodPost, "/api/chat/stream", bytes.NewReader(body)).WithContext(ctx)
	req.Header.Set("Content-Type", "application/json")
	rec := httptest.NewRecorder()

	// Cancel context after 20ms
	go func() {
		time.Sleep(20 * time.Millisecond)
		cancel()
	}()

	h(rec, req)
	// Must not panic and must finish cleanly
}
