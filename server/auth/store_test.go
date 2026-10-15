package auth

import (
	"path/filepath"
	"testing"
)

func newTestStore(t *testing.T) *Store {
	t.Helper()
	s, err := NewStore(filepath.Join(t.TempDir(), "test.db"))
	if err != nil {
		t.Fatalf("NewStore: %v", err)
	}
	t.Cleanup(func() { _ = s.Close() })
	return s
}

func TestUpsertUserCreatesThenUpdates(t *testing.T) {
	s := newTestStore(t)

	u1, err := s.UpsertUser("sub-1", "a@example.com", "Andi", "http://img/1.png", 100)
	if err != nil {
		t.Fatalf("upsert 1: %v", err)
	}
	if u1.ID == "" || u1.Email != "a@example.com" || u1.Name != "Andi" {
		t.Fatalf("unexpected user: %+v", u1)
	}

	u2, err := s.UpsertUser("sub-1", "a@example.com", "Andi Baru", "http://img/2.png", 200)
	if err != nil {
		t.Fatalf("upsert 2: %v", err)
	}
	if u2.ID != u1.ID {
		t.Fatalf("same google_sub harus memakai ID sama: %s vs %s", u1.ID, u2.ID)
	}
	if u2.Name != "Andi Baru" || u2.LastLoginAt != 200 {
		t.Fatalf("update gagal: %+v", u2)
	}
}

func TestGetConversationIsScopedToOwner(t *testing.T) {
	s := newTestStore(t)
	uA, _ := s.UpsertUser("sub-a", "a@example.com", "A", "", 1)
	uB, _ := s.UpsertUser("sub-b", "b@example.com", "B", "", 1)

	c, err := s.CreateConversation(uA.ID, "Punya A", 10)
	if err != nil {
		t.Fatalf("create: %v", err)
	}

	got, err := s.GetConversation(c.ID, uA.ID)
	if err != nil || got == nil {
		t.Fatalf("owner harus bisa ambil: got=%v err=%v", got, err)
	}

	leak, err := s.GetConversation(c.ID, uB.ID)
	if err != nil {
		t.Fatalf("non-owner tidak boleh error: %v", err)
	}
	if leak != nil {
		t.Fatalf("IDOR: user B bisa membaca percakapan user A: %+v", leak)
	}
}

func TestSessionLifecycle(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)

	if err := s.CreateSession("hash-1", u.ID, 100, 200); err != nil {
		t.Fatalf("create session: %v", err)
	}
	got, err := s.GetSession("hash-1")
	if err != nil || got == nil || got.UserID != u.ID {
		t.Fatalf("get session: got=%v err=%v", got, err)
	}

	if err := s.DeleteSession("hash-1"); err != nil {
		t.Fatalf("delete session: %v", err)
	}
	gone, err := s.GetSession("hash-1")
	if err != nil || gone != nil {
		t.Fatalf("session harus hilang: got=%v err=%v", gone, err)
	}
}

func TestAddMessageUpdatesConversationTimestamp(t *testing.T) {
	s := newTestStore(t)
	u, _ := s.UpsertUser("sub-1", "a@example.com", "A", "", 1)
	c, _ := s.CreateConversation(u.ID, "Topik", 10)

	if _, err := s.AddMessage(c.ID, "user", "Halo", 55); err != nil {
		t.Fatalf("add message: %v", err)
	}
	updated, _ := s.GetConversation(c.ID, u.ID)
	if updated.UpdatedAt != 55 {
		t.Fatalf("updated_at harus ikut naik: %d", updated.UpdatedAt)
	}

	msgs, err := s.ListMessages(c.ID)
	if err != nil || len(msgs) != 1 || msgs[0].Content != "Halo" || msgs[0].Role != "user" {
		t.Fatalf("list messages: %+v err=%v", msgs, err)
	}
}
