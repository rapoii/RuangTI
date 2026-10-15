package handlers

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"

	"ruangti/extractor"
)

type UploadResponse struct {
	Filename string `json:"filename"`
	Size     int64  `json:"size"`
	Text     string `json:"text"`
}

func NewUploadHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// Batasi ukuran upload maksimal 25 MB
		r.Body = http.MaxBytesReader(w, r.Body, 25*1024*1024)
		if err := r.ParseMultipartForm(25 * 1024 * 1024); err != nil {
			http.Error(w, "File terlalu besar (maksimal 25MB)", http.StatusBadRequest)
			return
		}

		file, header, err := r.FormFile("file")
		if err != nil {
			http.Error(w, "Field 'file' tidak ditemukan", http.StatusBadRequest)
			return
		}
		defer file.Close()

		buf := new(bytes.Buffer)
		size, err := io.Copy(buf, file)
		if err != nil {
			http.Error(w, "Gagal membaca file", http.StatusInternalServerError)
			return
		}

		readerAt := bytes.NewReader(buf.Bytes())
		extractedText, err := extractor.ExtractText(header.Filename, readerAt, size)
		if err != nil {
			http.Error(w, "Gagal mengekstrak teks: "+err.Error(), http.StatusUnprocessableEntity)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(UploadResponse{
			Filename: header.Filename,
			Size:     size,
			Text:     extractedText,
		})
	}
}
