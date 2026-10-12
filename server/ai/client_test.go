package ai_test

import (
	"context"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"ruangti/ai"
)

func TestParseModelSpec(t *testing.T) {
	tests := []struct {
		input       string
		wantModel   string
		wantEffort  string
		isThinking  bool
	}{
		{"mimo-v2.6-flash@none", "mimo-v2.6-flash", "none", false},
		{"mimo-v2.6-flash@default", "mimo-v2.6-flash", "default", true},
		{"mimo-v2.6-flash@max", "mimo-v2.6-flash", "max", true},
		{"mimo-v2.6-pro@default", "mimo-v2.6-pro", "default", true},
		{"mimo-v2.6-pro@max", "mimo-v2.6-pro", "max", true},
		// Legacy grok mappings
		{"gcli/grok-4.6", "mimo-v2.6-flash", "none", false},
		{"gcli/grok-4.6-high", "mimo-v2.6-pro", "default", true},
		{"gcli/grok-4.6-xhigh", "mimo-v2.6-pro", "max", true},
		// Bare model without effort
		{"mimo-v2.6-pro", "mimo-v2.6-pro", "", false},
	}

	for _, tt := range tests {
		t.Run(tt.input, func(t *testing.T) {
			model, effort, isThinking := ai.ParseModelSpec(tt.input)
			if model != tt.wantModel {
				t.Errorf("model = %q, want %q", model, tt.wantModel)
			}
			if effort != tt.wantEffort {
				t.Errorf("effort = %q, want %q", effort, tt.wantEffort)
			}
			if isThinking != tt.isThinking {
				t.Errorf("isThinking = %v, want %v", isThinking, tt.isThinking)
			}
		})
	}
}

// Review Focus 1: Fallback saat Mimoly offline
func TestStreamChatFallback(t *testing.T) {
	// 1. Primary server (Mimoly mock) returns 500 error
	primaryServer := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.Error(w, "mimoly is down", http.StatusInternalServerError)
	}))
	defer primaryServer.Close()

	// 2. Fallback server (9Router mock) streams SSE
	fallbackServer := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/event-stream")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("data: {\"choices\":[{\"delta\":{\"content\":\"PONG DARI FALLBACK\"}}]}\n\n"))
		_, _ = w.Write([]byte("data: [DONE]\n\n"))
	}))
	defer fallbackServer.Close()

	client := ai.NewClient(primaryServer.URL, fallbackServer.URL, "Hermes")

	req := ai.ChatRequest{
		Model:    "mimo-v2.6-pro@default",
		Messages: []ai.ChatMessage{{Role: "user", Content: "PING"}},
	}

	var sb strings.Builder
	err := client.StreamChat(context.Background(), req, func(chunk string) error {
		sb.WriteString(chunk)
		return nil
	})

	if err != nil {
		t.Fatalf("StreamChat fallback failed: %v", err)
	}

	if !strings.Contains(sb.String(), "PONG DARI FALLBACK") {
		t.Errorf("expected fallback content, got %q", sb.String())
	}
}
