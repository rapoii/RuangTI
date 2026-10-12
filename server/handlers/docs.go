package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	"ruangti/rag"
)

func NewDocsSearchHandler(ragSvc *rag.RAGService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if ragSvc == nil {
			http.Error(w, "RAG service unavailable", http.StatusServiceUnavailable)
			return
		}

		q := strings.TrimSpace(r.URL.Query().Get("q"))
		limitStr := r.URL.Query().Get("limit")
		limit := 20
		if l, err := strconv.Atoi(limitStr); err == nil && l > 0 && l <= 100 {
			limit = l
		}

		var results []rag.ChunkResult
		var err error

		if q == "" {
			results, err = ragSvc.Browse(limit)
		} else {
			results, err = ragSvc.Search(q, limit)
		}

		if err != nil {
			http.Error(w, "Search error: "+err.Error(), http.StatusInternalServerError)
			return
		}

		if results == nil {
			results = []rag.ChunkResult{}
		}

		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(results)
	}
}
