package extractor

import (
	"archive/zip"
	"encoding/xml"
	"fmt"
	"io"
	"path/filepath"
	"strings"
)

// ExtractText mengekstrak teks dari berbagai format dokumen (DOCX, PPTX, TXT, MD, CSV)
func ExtractText(filename string, r io.ReaderAt, size int64) (string, error) {
	if size <= 0 {
		return "", nil
	}

	ext := strings.ToLower(filepath.Ext(filename))

	switch ext {
	case ".txt", ".md", ".csv", ".json", ".tsv":
		buf := make([]byte, size)
		n, err := r.ReadAt(buf, 0)
		if err != nil && err != io.EOF {
			return "", fmt.Errorf("read text file: %w", err)
		}
		return string(buf[:n]), nil

	case ".docx":
		return extractDOCX(r, size)

	case ".pptx":
		return extractPPTX(r, size)

	default:
		// Fallback membaca sebagai teks jika mungkin
		buf := make([]byte, min(size, 64*1024))
		n, _ := r.ReadAt(buf, 0)
		return string(buf[:n]), nil
	}
}

func min(a, b int64) int64 {
	if a < b {
		return a
	}
	return b
}

func extractDOCX(r io.ReaderAt, size int64) (string, error) {
	zr, err := zip.NewReader(r, size)
	if err != nil {
		return "", fmt.Errorf("open docx zip: %w", err)
	}

	for _, f := range zr.File {
		if f.Name == "word/document.xml" {
			rc, err := f.Open()
			if err != nil {
				return "", fmt.Errorf("open document.xml: %w", err)
			}
			defer rc.Close()
			return parseXMLText(rc)
		}
	}

	return "", fmt.Errorf("word/document.xml not found in docx")
}

func extractPPTX(r io.ReaderAt, size int64) (string, error) {
	zr, err := zip.NewReader(r, size)
	if err != nil {
		return "", fmt.Errorf("open pptx zip: %w", err)
	}

	var sb strings.Builder
	slideCount := 0

	for _, f := range zr.File {
		if strings.HasPrefix(f.Name, "ppt/slides/slide") && strings.HasSuffix(f.Name, ".xml") {
			rc, err := f.Open()
			if err != nil {
				continue
			}
			text, err := parseXMLText(rc)
			_ = rc.Close()
			if err == nil && strings.TrimSpace(text) != "" {
				slideCount++
				sb.WriteString(fmt.Sprintf("\n--- Slide %d ---\n", slideCount))
				sb.WriteString(text)
				sb.WriteString("\n")
			}
		}
	}

	if slideCount == 0 {
		return "", fmt.Errorf("no slide xml found in pptx")
	}

	return sb.String(), nil
}

func parseXMLText(r io.Reader) (string, error) {
	decoder := xml.NewDecoder(r)
	var sb strings.Builder

	for {
		token, err := decoder.Token()
		if err == io.EOF {
			break
		}
		if err != nil {
			return sb.String(), err
		}

		switch t := token.(type) {
		case xml.StartElement:
			// Tambahkan spasi atau baris baru untuk paragraf
			if t.Name.Local == "p" {
				sb.WriteString("\n")
			}
		case xml.CharData:
			trimmed := strings.TrimSpace(string(t))
			if trimmed != "" {
				sb.WriteString(string(t))
				sb.WriteString(" ")
			}
		}
	}

	return strings.TrimSpace(sb.String()), nil
}
