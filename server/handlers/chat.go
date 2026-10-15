package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"

	"ruangti/ai"
	"ruangti/rag"
)

type StreamRequest struct {
	Message         string          `json:"message"`
	History         []ai.ChatMessage `json:"history,omitempty"`
	ModelID         string          `json:"model_id,omitempty"`
	DocumentContext string          `json:"document_context,omitempty"`
}

type StreamChunkPayload struct {
	Chunk string `json:"chunk"`
}

const defaultSystemPrompt = `Kamu adalah RuangTI AI — asisten cerdas khusus mahasiswa Teknik Industri.
Tugasmu adalah memberikan penjelasan ilmiah, matematis, dan aplikatif mengenai keilmuan Teknik Industri (Optimasi, SCM, Ergonomi, Pengendalian Mutu, Riset Operasi, Simulasi Sistem, dll).
Gunakan kaidah penulisan ilmiah:
- Tuliskan rumus matematika menggunakan format KaTeX/LaTeX simetris di tengah teks jika rumus utama: $$...$$ atau inline $...$.
- Berikan langkah pengerjaan sistematis dan dekomposisi variabel secara lengkap.
- Jawab dalam Bahasa Indonesia profesional yang lugas.`

func NewChatStreamHandler(aiClient *ai.Client, ragSvc *rag.RAGService) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var req StreamRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid JSON payload", http.StatusBadRequest)
			return
		}

		if strings.TrimSpace(req.Message) == "" {
			http.Error(w, "Message cannot be empty", http.StatusBadRequest)
			return
		}

		// 1. Ambil modul RAG relevan jika RAG service tersedia
		var ragContextBuilder strings.Builder
		if ragSvc != nil {
			chunks, err := ragSvc.Search(req.Message, 4)
			if err == nil && len(chunks) > 0 {
				ragContextBuilder.WriteString("\n\n[KNOWLEDGE BASE TEKNIK INDUSTRI RELEVAN]:\n")
				for i, c := range chunks {
					ragContextBuilder.WriteString(fmt.Sprintf("--- Modul %s: %s ---\n%s\n\n", c.ModuleID, c.SectionTitle, c.Content))
					if i >= 3 {
						break
					}
				}
			}
		}

		systemPrompt := defaultSystemPrompt + ragContextBuilder.String()
		if req.DocumentContext != "" {
			systemPrompt += fmt.Sprintf("\n\n[DOKUMEN PENGGUNA TERLAMPIR]:\n%s\n", req.DocumentContext)
		}

		// 2. Susun urutan pesan
		var messages []ai.ChatMessage
		messages = append(messages, ai.ChatMessage{Role: "system", Content: systemPrompt})
		if len(req.History) > 0 {
			messages = append(messages, req.History...)
		}
		messages = append(messages, ai.ChatMessage{Role: "user", Content: req.Message})

		// 3. Set header SSE
		w.Header().Set("Content-Type", "text/event-stream")
		w.Header().Set("Cache-Control", "no-cache")
		w.Header().Set("Connection", "keep-alive")
		w.Header().Set("X-Accel-Buffering", "no")

		flusher, ok := w.(http.Flusher)
		if !ok {
			http.Error(w, "Streaming unsupported", http.StatusInternalServerError)
			return
		}

		ctx := r.Context()
		chatReq := ai.ChatRequest{
			Model:       req.ModelID,
			Messages:    messages,
			Temperature: 0.2,
		}

		err := aiClient.StreamChat(ctx, chatReq, func(chunk string) error {
			select {
			case <-ctx.Done():
				return ctx.Err()
			default:
				payload, _ := json.Marshal(StreamChunkPayload{Chunk: chunk})
				_, writeErr := fmt.Fprintf(w, "data: %s\n\n", payload)
				if writeErr != nil {
					return writeErr
				}
				flusher.Flush()
				return nil
			}
		})

		if err != nil && ctx.Err() == nil {
			log.Printf("[ChatStreamHandler] stream error: %v", err)
			errPayload, _ := json.Marshal(StreamChunkPayload{
				Chunk: fmt.Sprintf("\n\n*(Terjadi kendala pada AI engine: %v)*", err),
			})
			_, _ = fmt.Fprintf(w, "data: %s\n\n", errPayload)
			flusher.Flush()
		}

		// Kirim penanda [DONE]
		_, _ = fmt.Fprintf(w, "data: [DONE]\n\n")
		flusher.Flush()
	}
}
