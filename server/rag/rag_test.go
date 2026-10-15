package rag_test

import (
	"path/filepath"
	"testing"

	"ruangti/rag"
)

func TestRAGSearch(t *testing.T) {
	dbPath, err := filepath.Abs("../../backend/data/ruangti_rag.db")
	if err != nil {
		t.Fatalf("failed to get abs path: %v", err)
	}

	svc, err := rag.NewRAGService(dbPath)
	if err != nil {
		t.Fatalf("failed to open rag db at %s: %v", dbPath, err)
	}
	defer svc.Close()

	results, err := svc.Search("economic order quantity", 3)
	if err != nil {
		t.Fatalf("search failed: %v", err)
	}
	if len(results) == 0 {
		t.Fatalf("expected results for EOQ, got 0")
	}

	foundEOQ := false
	for _, r := range results {
		if r.SectionTitle != "" && r.Content != "" && r.ModuleID != "" {
			foundEOQ = true
		}
	}
	if !foundEOQ {
		t.Errorf("expected valid chunk fields, got %+v", results[0])
	}
}

func TestRAGSanitization(t *testing.T) {
	dbPath, err := filepath.Abs("../../backend/data/ruangti_rag.db")
	if err != nil {
		t.Fatalf("failed to get abs path: %v", err)
	}

	svc, err := rag.NewRAGService(dbPath)
	if err != nil {
		t.Fatalf("failed to open rag db: %v", err)
	}
	defer svc.Close()

	// Review Focus 2: Test query with special FTS5 syntax characters
	maliciousQueries := []string{
		`"economic" * AND OR NOT () : ^`,
		`"""""`,
		`* * *`,
		`AND OR NOT`,
		`   `,
	}

	for _, q := range maliciousQueries {
		results, err := svc.Search(q, 3)
		if err != nil {
			t.Errorf("search for %q should not crash or error, got: %v", q, err)
		}
		_ = results
	}
}
