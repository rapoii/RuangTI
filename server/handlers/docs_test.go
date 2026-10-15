package handlers_test

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"testing"

	"ruangti/handlers"
	"ruangti/rag"
)

func TestDocsSearchHandler(t *testing.T) {
	dbPath, err := filepath.Abs("../../backend/data/ruangti_rag.db")
	if err != nil {
		t.Fatalf("failed to get abs path: %v", err)
	}

	ragSvc, err := rag.NewRAGService(dbPath)
	if err != nil {
		t.Fatalf("failed to open rag db: %v", err)
	}
	defer ragSvc.Close()

	h := handlers.NewDocsSearchHandler(ragSvc)

	// 1. Search with query "simulasi"
	req := httptest.NewRequest(http.MethodGet, "/api/docs/search?q=simulasi&limit=5", nil)
	rec := httptest.NewRecorder()
	h(rec, req)

	if rec.Code != http.StatusOK {
		t.Fatalf("expected 200, got %d", rec.Code)
	}

	var res []rag.ChunkResult
	if err := json.Unmarshal(rec.Body.Bytes(), &res); err != nil {
		t.Fatalf("failed to parse json: %v", err)
	}

	if len(res) == 0 {
		t.Errorf("expected search results for 'simulasi', got 0")
	}

	// 2. Browse with empty query
	reqBrowse := httptest.NewRequest(http.MethodGet, "/api/docs/search", nil)
	recBrowse := httptest.NewRecorder()
	h(recBrowse, reqBrowse)

	if recBrowse.Code != http.StatusOK {
		t.Fatalf("expected 200 for empty query browse, got %d", recBrowse.Code)
	}

	var browseRes []rag.ChunkResult
	if err := json.Unmarshal(recBrowse.Body.Bytes(), &browseRes); err != nil {
		t.Fatalf("failed to parse browse json: %v", err)
	}

	if len(browseRes) == 0 {
		t.Errorf("expected browse results, got 0")
	}
}
