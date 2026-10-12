package handlers_test

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"ruangti/handlers"
)

func TestHealthHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/health", nil)
	rec := httptest.NewRecorder()

	h := handlers.NewHealthHandler()
	h(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected status 200, got %d", rec.Code)
	}

	contentType := rec.Header().Get("Content-Type")
	if contentType != "application/json" {
		t.Errorf("expected Content-Type application/json, got %s", contentType)
	}

	var body map[string]string
	if err := json.Unmarshal(rec.Body.Bytes(), &body); err != nil {
		t.Fatalf("invalid json response: %v", err)
	}

	if body["status"] != "healthy" {
		t.Errorf("expected status 'healthy', got '%s'", body["status"])
	}
	if body["service"] != "RuangTI Go Engine" {
		t.Errorf("expected service 'RuangTI Go Engine', got '%s'", body["service"])
	}
}
