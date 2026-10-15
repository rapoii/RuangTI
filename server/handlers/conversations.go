package handlers

import (
	"database/sql"
	"encoding/json"
	"errors"
	"net/http"
	"strings"

	"ruangti/auth"
)

// ConversationHandlers melayani CRUD percakapan per akun (selalu auth-gated).
type ConversationHandlers struct {
	store *auth.Store
}

func NewConversationHandlers(store *auth.Store) *ConversationHandlers {
	return &ConversationHandlers{store: store}
}

func (h *ConversationHandlers) user(r *http.Request) *auth.User {
	u, _ := auth.UserFromContext(r.Context())
	return u
}

func writeJSON(w http.ResponseWriter, code int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	_ = json.NewEncoder(w).Encode(v)
}

func notFound(w http.ResponseWriter) {
	writeJSON(w, http.StatusNotFound, map[string]string{"error": "not found"})
}

func (h *ConversationHandlers) List(w http.ResponseWriter, r *http.Request) {
	u := h.user(r)
	if u == nil {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}
	items, err := h.store.ListConversations(u.ID)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	writeJSON(w, http.StatusOK, items)
}

func (h *ConversationHandlers) Create(w http.ResponseWriter, r *http.Request) {
	u := h.user(r)
	if u == nil {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}
	var body struct {
		Title string `json:"title"`
	}
	_ = json.NewDecoder(r.Body).Decode(&body)
	title := strings.TrimSpace(body.Title)
	if title == "" {
		title = "Percakapan Baru"
	}
	if len(title) > 120 {
		title = title[:120]
	}
	c, err := h.store.CreateConversation(u.ID, title, auth.NowSeconds())
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	writeJSON(w, http.StatusCreated, c)
}

func (h *ConversationHandlers) Get(w http.ResponseWriter, r *http.Request) {
	u := h.user(r)
	if u == nil {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}
	id := r.PathValue("id")
	c, err := h.store.GetConversation(id, u.ID)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	if c == nil {
		notFound(w)
		return
	}
	msgs, err := h.store.ListMessages(c.ID)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{
		"id":         c.ID,
		"title":      c.Title,
		"created_at": c.CreatedAt,
		"updated_at": c.UpdatedAt,
		"messages":   msgs,
	})
}

func (h *ConversationHandlers) Rename(w http.ResponseWriter, r *http.Request) {
	u := h.user(r)
	if u == nil {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}
	id := r.PathValue("id")
	var body struct {
		Title string `json:"title"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid json"})
		return
	}
	title := strings.TrimSpace(body.Title)
	if title == "" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "judul tidak boleh kosong"})
		return
	}
	if len(title) > 120 {
		title = title[:120]
	}
	err := h.store.RenameConversation(id, u.ID, title, auth.NowSeconds())
	if errors.Is(err, sql.ErrNoRows) {
		notFound(w)
		return
	}
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func (h *ConversationHandlers) Delete(w http.ResponseWriter, r *http.Request) {
	u := h.user(r)
	if u == nil {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}
	err := h.store.DeleteConversation(r.PathValue("id"), u.ID)
	if errors.Is(err, sql.ErrNoRows) {
		notFound(w)
		return
	}
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func (h *ConversationHandlers) AddMessage(w http.ResponseWriter, r *http.Request) {
	u := h.user(r)
	if u == nil {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}
	id := r.PathValue("id")
	c, err := h.store.GetConversation(id, u.ID)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	if c == nil {
		notFound(w)
		return
	}

	var body struct {
		Role    string `json:"role"`
		Content string `json:"content"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid json"})
		return
	}
	role := strings.ToLower(strings.TrimSpace(body.Role))
	if role != "user" && role != "assistant" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "role harus user atau assistant"})
		return
	}
	if strings.TrimSpace(body.Content) == "" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "konten tidak boleh kosong"})
		return
	}

	m, err := h.store.AddMessage(c.ID, role, body.Content, auth.NowSeconds())
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "internal error"})
		return
	}
	writeJSON(w, http.StatusCreated, map[string]string{"id": m.ID})
}
