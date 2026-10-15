package extractor_test

import (
	"archive/zip"
	"bytes"
	"strings"
	"testing"

	"ruangti/extractor"
)

func createZipWithFile(t *testing.T, files map[string]string) *bytes.Reader {
	t.Helper()
	buf := new(bytes.Buffer)
	zw := zip.NewWriter(buf)
	for name, content := range files {
		f, err := zw.Create(name)
		if err != nil {
			t.Fatalf("failed to create zip file: %v", err)
		}
		if _, err := f.Write([]byte(content)); err != nil {
			t.Fatalf("failed to write zip content: %v", err)
		}
	}
	if err := zw.Close(); err != nil {
		t.Fatalf("failed to close zip writer: %v", err)
	}
	return bytes.NewReader(buf.Bytes())
}

func TestExtractText_TXT(t *testing.T) {
	content := "Catatan Kuliah Teknik Industri: Kaizen dan Kanban."
	r := bytes.NewReader([]byte(content))

	text, err := extractor.ExtractText("catatan.txt", r, int64(len(content)))
	if err != nil {
		t.Fatalf("extract txt failed: %v", err)
	}
	if !strings.Contains(text, "Kaizen dan Kanban") {
		t.Errorf("expected text, got %q", text)
	}
}

func TestExtractText_DOCX(t *testing.T) {
	docxXML := `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:body>
        <w:p><w:r><w:t>Modul Simulasi FlexSim PTI 2026</w:t></w:r></w:p>
        <w:p><w:r><w:t>Analisis Antrean M/M/1</w:t></w:r></w:p>
    </w:body>
</w:document>`

	r := createZipWithFile(t, map[string]string{
		"word/document.xml": docxXML,
	})

	text, err := extractor.ExtractText("laporan.docx", r, int64(r.Len()))
	if err != nil {
		t.Fatalf("extract docx failed: %v", err)
	}
	if !strings.Contains(text, "Modul Simulasi FlexSim") || !strings.Contains(text, "Analisis Antrean") {
		t.Errorf("expected docx text, got %q", text)
	}
}

func TestExtractText_PPTX(t *testing.T) {
	slideXML := `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
    <p:cSld>
        <p:spTree>
            <p:sp>
                <p:txBody>
                    <a:p><a:r><a:t>Presentasi Supply Chain &amp; PPIC</a:t></a:r></a:p>
                </p:txBody>
            </p:sp>
        </p:spTree>
    </p:cSld>
</p:sld>`

	r := createZipWithFile(t, map[string]string{
		"ppt/slides/slide1.xml": slideXML,
	})

	text, err := extractor.ExtractText("slide.pptx", r, int64(r.Len()))
	if err != nil {
		t.Fatalf("extract pptx failed: %v", err)
	}
	if !strings.Contains(text, "Presentasi Supply Chain & PPIC") {
		t.Errorf("expected pptx text, got %q", text)
	}
}

// Review Focus 3: Dokumen korup atau kosong
func TestExtractText_Corrupted(t *testing.T) {
	corruptBytes := []byte("BUKAN_ZIP_YANG_VALID_DATA_ACAK")
	r := bytes.NewReader(corruptBytes)

	// Harap tidak panic dan mengembalikan error yang bersih
	_, err := extractor.ExtractText("corrupt.docx", r, int64(len(corruptBytes)))
	if err == nil {
		t.Errorf("expected error for corrupted docx, got nil")
	}
}
