package rag

import (
	"database/sql"
	"fmt"
	"regexp"
	"strings"

	_ "modernc.org/sqlite"
)

type ChunkResult struct {
	ModuleID     string  `json:"module_id"`
	SectionTitle string  `json:"section_title"`
	Content      string  `json:"content"`
	Rank         float64 `json:"rank"`
}

type RAGService struct {
	db *sql.DB
}

func NewRAGService(dbPath string) (*RAGService, error) {
	// Mode read-only untuk proteksi data
	dsn := fmt.Sprintf("file:%s?mode=ro&_pragma=query_only(true)", dbPath)
	db, err := sql.Open("sqlite", dsn)
	if err != nil {
		return nil, fmt.Errorf("open sqlite db error: %w", err)
	}

	if err := db.Ping(); err != nil {
		_ = db.Close()
		return nil, fmt.Errorf("ping sqlite db error: %w", err)
	}

	return &RAGService{db: db}, nil
}

func (s *RAGService) Close() error {
	if s.db != nil {
		return s.db.Close()
	}
	return nil
}

var nonAlphanumericRegex = regexp.MustCompile(`[^\w\s\-]`)

// sanitizeFTS5Query membersihkan karakter khusus yang dapat merusak sintaks SQLite FTS5
func sanitizeFTS5Query(raw string) string {
	cleaned := nonAlphanumericRegex.ReplaceAllString(raw, " ")
	tokens := strings.Fields(cleaned)

	var validTokens []string
	reserved := map[string]bool{
		"and": true, "or": true, "not": true, "near": true,
	}

	for _, t := range tokens {
		lower := strings.ToLower(t)
		if !reserved[lower] && len(t) > 1 {
			// Tambahkan prefix matching token
			validTokens = append(validTokens, fmt.Sprintf(`"%s"`, t))
		}
	}

	if len(validTokens) == 0 {
		return ""
	}

	return strings.Join(validTokens, " OR ")
}

func (s *RAGService) Search(query string, limit int) ([]ChunkResult, error) {
	if limit <= 0 {
		limit = 5
	}

	ftsQuery := sanitizeFTS5Query(query)
	if ftsQuery == "" {
		return []ChunkResult{}, nil
	}

	q := `
		SELECT module_id, section_title, content, rank
		FROM rag_fts
		WHERE rag_fts MATCH ?
		ORDER BY rank ASC
		LIMIT ?
	`

	rows, err := s.db.Query(q, ftsQuery, limit)
	if err != nil {
		return nil, fmt.Errorf("query rag_fts error: %w", err)
	}
	defer rows.Close()

	var results []ChunkResult
	for rows.Next() {
		var item ChunkResult
		if err := rows.Scan(&item.ModuleID, &item.SectionTitle, &item.Content, &item.Rank); err != nil {
			return nil, fmt.Errorf("scan chunk error: %w", err)
		}
		results = append(results, item)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("rows iteration error: %w", err)
	}

	return results, nil
}
