package handlers

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"ruangti/auth"
)

func withUser(req *http.Request, u *auth.User) *http.Request {
	return req.WithContext(auth.WithUser(req.Context(), u))
}

func TestCreateAndListConversation(t *testing.T) {
	store, _ := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	h := NewConversationHandlers(store)

	rec := httptest.NewRecorder()
	req := withUser(httptest.NewRequest("POST", "/api/conversations", strings.NewReader(`{"title":"EOQ"}`)), u)
	h.Create(rec, req)
	if rec.Code != http.StatusCreated {
		t.Fatalf("create harus 201, dapat %d: %s", rec.Code, rec.Body.String())
	}

	rec2 := httptest.NewRecorder()
	h.List(rec2, withUser(httptest.NewRequest("GET", "/api/conversations", nil), u))
	if rec2.Code != http.StatusOK || !strings.Contains(rec2.Body.String(), "EOQ") {
		t.Fatalf("list: %d %s", rec2.Code, rec2.Body.String())
	}
}

func TestGetOtherUsersConversationReturns404(t *testing.T) {
	store, _ := newAuthTest(t)
	uA, _ := store.UpsertUser("sub-a", "a@example.com", "A", "", 1)
	uB, _ := store.UpsertUser("sub-b", "b@example.com", "B", "", 1)
	c, _ := store.CreateConversation(uA.ID, "Rahasia A", 10)

	h := NewConversationHandlers(store)
	req := withUser(httptest.NewRequest("GET", "/api/conversations/"+c.ID, nil), uB)
	req.SetPathValue("id", c.ID)
	rec := httptest.NewRecorder()
	h.Get(rec, req)

	if rec.Code != http.StatusNotFound {
		t.Fatalf("IDOR: user B harus 404, dapat %d (%s)", rec.Code, rec.Body.String())
	}
}

func TestDeleteOtherUsersConversationReturns404(t *testing.T) {
	store, _ := newAuthTest(t)
	uA, _ := store.UpsertUser("sub-a", "a@example.com", "A", "", 1)
	uB, _ := store.UpsertUser("sub-b", "b@example.com", "B", "", 1)
	c, _ := store.CreateConversation(uA.ID, "Punya A", 10)

	h := NewConversationHandlers(store)
	req := withUser(httptest.NewRequest("DELETE", "/api/conversations/"+c.ID, nil), uB)
	req.SetPathValue("id", c.ID)
	rec := httptest.NewRecorder()
	h.Delete(rec, req)

	if rec.Code != http.StatusNotFound {
		t.Fatalf("IDOR delete: harus 404, dapat %d", rec.Code)
	}
	// Percakapan A harus tetap ada
	still, _ := store.GetConversation(c.ID, uA.ID)
	if still == nil {
		t.Fatal("percakapan A terhapus oleh user B")
	}
}

func TestAddMessageThenGetConversation(t *testing.T) {
	store, _ := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	c, _ := store.CreateConversation(u.ID, "Topik", 10)
	h := NewConversationHandlers(store)

	rec := httptest.NewRecorder()
	req := withUser(httptest.NewRequest("POST", "/api/conversations/"+c.ID+"/messages",
		strings.NewReader(`{"role":"user","content":"Halo"}`)), u)
	req.SetPathValue("id", c.ID)
	h.AddMessage(rec, req)
	if rec.Code != http.StatusCreated {
		t.Fatalf("add message harus 201, dapat %d: %s", rec.Code, rec.Body.String())
	}

	rec2 := httptest.NewRecorder()
	req2 := withUser(httptest.NewRequest("GET", "/api/conversations/"+c.ID, nil), u)
	req2.SetPathValue("id", c.ID)
	h.Get(rec2, req2)
	if rec2.Code != http.StatusOK {
		t.Fatalf("get harus 200, dapat %d", rec2.Code)
	}
	var body struct {
		ID       string `json:"id"`
		Messages []struct {
			Role    string `json:"role"`
			Content string `json:"content"`
		} `json:"messages"`
	}
	if err := json.Unmarshal(rec2.Body.Bytes(), &body); err != nil {
		t.Fatalf("decode: %v", err)
	}
	if len(body.Messages) != 1 || body.Messages[0].Content != "Halo" {
		t.Fatalf("messages tidak sesuai: %+v", body.Messages)
	}
}

func TestRenameOwnConversation(t *testing.T) {
	store, _ := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	c, _ := store.CreateConversation(u.ID, "Lama", 10)
	h := NewConversationHandlers(store)

	rec := httptest.NewRecorder()
	req := withUser(httptest.NewRequest("PATCH", "/api/conversations/"+c.ID,
		strings.NewReader(`{"title":"Baru"}`)), u)
	req.SetPathValue("id", c.ID)
	h.Rename(rec, req)
	if rec.Code != http.StatusNoContent {
		t.Fatalf("rename harus 204, dapat %d: %s", rec.Code, rec.Body.String())
	}

	got, _ := store.GetConversation(c.ID, u.ID)
	if got.Title != "Baru" {
		t.Fatalf("judul tidak berubah: %s", got.Title)
	}
}

func TestAddMessageRejectsUnknownRole(t *testing.T) {
	store, _ := newAuthTest(t)
	u, _ := store.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	c, _ := store.CreateConversation(u.ID, "Topik", 10)
	h := NewConversationHandlers(store)

	rec := httptest.NewRecorder()
	req := withUser(httptest.NewRequest("POST", "/api/conversations/"+c.ID+"/messages",
		strings.NewReader(`{"role":"admin","content":"x"}`)), u)
	req.SetPathValue("id", c.ID)
	h.AddMessage(rec, req)
	if rec.Code != http.StatusBadRequest {
		t.Fatalf("role tak dikenal harus 400, dapat %d", rec.Code)
	}
}
