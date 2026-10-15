package auth

import (
	"database/sql"
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	_ "modernc.org/sqlite"
)

type User struct {
	ID          string `json:"id"`
	GoogleSub   string `json:"-"`
	Email       string `json:"email"`
	Name        string `json:"name"`
	Picture     string `json:"picture"`
	CreatedAt   int64  `json:"created_at"`
	LastLoginAt int64  `json:"last_login_at"`
}

type Session struct {
	TokenHash string
	UserID    string
	CreatedAt int64
	ExpiresAt int64
}

type Conversation struct {
	ID        string `json:"id"`
	UserID    string `json:"-"`
	Title     string `json:"title"`
	CreatedAt int64  `json:"created_at"`
	UpdatedAt int64  `json:"updated_at"`
}

type Message struct {
	ID             string `json:"id"`
	ConversationID string `json:"-"`
	Role           string `json:"role"`
	Content        string `json:"content"`
	CreatedAt      int64  `json:"created_at"`
}

type Store struct {
	db *sql.DB
}

const schema = `
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  google_sub TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  picture TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL,
  last_login_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS conversations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  conversation_id TEXT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_conv_user ON conversations(user_id, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_msg_conv ON messages(conversation_id, created_at ASC);
`

func NewStore(dbPath string) (*Store, error) {
	dsn := fmt.Sprintf("file:%s?_pragma=busy_timeout(5000)&_pragma=journal_mode(WAL)&_pragma=foreign_keys(1)", dbPath)
	db, err := sql.Open("sqlite", dsn)
	if err != nil {
		return nil, fmt.Errorf("open app db: %w", err)
	}
	// SQLite + modernc: satu koneksi tulis agar tidak deadlock WAL.
	db.SetMaxOpenConns(1)

	if err := db.Ping(); err != nil {
		_ = db.Close()
		return nil, fmt.Errorf("ping app db: %w", err)
	}
	if _, err := db.Exec(schema); err != nil {
		_ = db.Close()
		return nil, fmt.Errorf("migrate app db: %w", err)
	}
	return &Store{db: db}, nil
}

func (s *Store) Close() error {
	if s.db == nil {
		return nil
	}
	return s.db.Close()
}

func newID() string {
	return uuid.NewString()
}

func (s *Store) UpsertUser(googleSub, email, name, picture string, now int64) (*User, error) {
	if googleSub == "" || email == "" {
		return nil, errors.New("google_sub dan email wajib diisi")
	}
	u := &User{}
	err := s.db.QueryRow(`
		INSERT INTO users (id, google_sub, email, name, picture, created_at, last_login_at)
		VALUES (?, ?, ?, ?, ?, ?, ?)
		ON CONFLICT(google_sub) DO UPDATE SET
			email = excluded.email,
			name = excluded.name,
			picture = excluded.picture,
			last_login_at = excluded.last_login_at
		RETURNING id, google_sub, email, name, picture, created_at, last_login_at`,
		newID(), googleSub, email, name, picture, now, now,
	).Scan(&u.ID, &u.GoogleSub, &u.Email, &u.Name, &u.Picture, &u.CreatedAt, &u.LastLoginAt)
	if err != nil {
		return nil, fmt.Errorf("upsert user: %w", err)
	}
	return u, nil
}

func (s *Store) GetUserByID(id string) (*User, error) {
	u := &User{}
	err := s.db.QueryRow(`
		SELECT id, google_sub, email, name, picture, created_at, last_login_at
		FROM users WHERE id = ?`, id,
	).Scan(&u.ID, &u.GoogleSub, &u.Email, &u.Name, &u.Picture, &u.CreatedAt, &u.LastLoginAt)
	if errors.Is(err, sql.ErrNoRows) {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("get user: %w", err)
	}
	return u, nil
}

func (s *Store) CreateSession(tokenHash, userID string, createdAt, expiresAt int64) error {
	_, err := s.db.Exec(`
		INSERT INTO sessions (token_hash, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)`,
		tokenHash, userID, createdAt, expiresAt)
	if err != nil {
		return fmt.Errorf("create session: %w", err)
	}
	return nil
}

func (s *Store) GetSession(tokenHash string) (*Session, error) {
	sess := &Session{}
	err := s.db.QueryRow(`
		SELECT token_hash, user_id, created_at, expires_at FROM sessions WHERE token_hash = ?`, tokenHash,
	).Scan(&sess.TokenHash, &sess.UserID, &sess.CreatedAt, &sess.ExpiresAt)
	if errors.Is(err, sql.ErrNoRows) {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("get session: %w", err)
	}
	return sess, nil
}

func (s *Store) DeleteSession(tokenHash string) error {
	if _, err := s.db.Exec(`DELETE FROM sessions WHERE token_hash = ?`, tokenHash); err != nil {
		return fmt.Errorf("delete session: %w", err)
	}
	return nil
}

// DeleteExpiredSessions membersihkan sesi yang sudah lewat masa berlaku.
func (s *Store) DeleteExpiredSessions(now int64) error {
	if _, err := s.db.Exec(`DELETE FROM sessions WHERE expires_at <= ?`, now); err != nil {
		return fmt.Errorf("delete expired sessions: %w", err)
	}
	return nil
}

func (s *Store) CreateConversation(userID, title string, now int64) (*Conversation, error) {
	c := &Conversation{}
	err := s.db.QueryRow(`
		INSERT INTO conversations (id, user_id, title, created_at, updated_at)
		VALUES (?, ?, ?, ?, ?)
		RETURNING id, user_id, title, created_at, updated_at`,
		newID(), userID, title, now, now,
	).Scan(&c.ID, &c.UserID, &c.Title, &c.CreatedAt, &c.UpdatedAt)
	if err != nil {
		return nil, fmt.Errorf("create conversation: %w", err)
	}
	return c, nil
}

func (s *Store) ListConversations(userID string) ([]Conversation, error) {
	rows, err := s.db.Query(`
		SELECT id, user_id, title, created_at, updated_at
		FROM conversations WHERE user_id = ?
		ORDER BY updated_at DESC`, userID)
	if err != nil {
		return nil, fmt.Errorf("list conversations: %w", err)
	}
	defer rows.Close()

	out := []Conversation{}
	for rows.Next() {
		var c Conversation
		if err := rows.Scan(&c.ID, &c.UserID, &c.Title, &c.CreatedAt, &c.UpdatedAt); err != nil {
			return nil, fmt.Errorf("scan conversation: %w", err)
		}
		out = append(out, c)
	}
	return out, rows.Err()
}

// GetConversation mengembalikan nil, nil bila percakapan tidak ada ATAU bukan milik userID.
func (s *Store) GetConversation(id, userID string) (*Conversation, error) {
	c := &Conversation{}
	err := s.db.QueryRow(`
		SELECT id, user_id, title, created_at, updated_at
		FROM conversations WHERE id = ? AND user_id = ?`, id, userID,
	).Scan(&c.ID, &c.UserID, &c.Title, &c.CreatedAt, &c.UpdatedAt)
	if errors.Is(err, sql.ErrNoRows) {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("get conversation: %w", err)
	}
	return c, nil
}

func (s *Store) RenameConversation(id, userID, title string, now int64) error {
	res, err := s.db.Exec(`
		UPDATE conversations SET title = ?, updated_at = ? WHERE id = ? AND user_id = ?`,
		title, now, id, userID)
	if err != nil {
		return fmt.Errorf("rename conversation: %w", err)
	}
	n, err := res.RowsAffected()
	if err != nil {
		return fmt.Errorf("rename rows affected: %w", err)
	}
	if n == 0 {
		return sql.ErrNoRows
	}
	return nil
}

func (s *Store) DeleteConversation(id, userID string) error {
	res, err := s.db.Exec(`DELETE FROM conversations WHERE id = ? AND user_id = ?`, id, userID)
	if err != nil {
		return fmt.Errorf("delete conversation: %w", err)
	}
	n, err := res.RowsAffected()
	if err != nil {
		return fmt.Errorf("delete rows affected: %w", err)
	}
	if n == 0 {
		return sql.ErrNoRows
	}
	return nil
}

func (s *Store) AddMessage(conversationID, role, content string, now int64) (*Message, error) {
	tx, err := s.db.Begin()
	if err != nil {
		return nil, fmt.Errorf("begin tx: %w", err)
	}
	defer func() { _ = tx.Rollback() }()

	m := &Message{}
	err = tx.QueryRow(`
		INSERT INTO messages (id, conversation_id, role, content, created_at)
		VALUES (?, ?, ?, ?, ?)
		RETURNING id, conversation_id, role, content, created_at`,
		newID(), conversationID, role, content, now,
	).Scan(&m.ID, &m.ConversationID, &m.Role, &m.Content, &m.CreatedAt)
	if err != nil {
		return nil, fmt.Errorf("add message: %w", err)
	}

	if _, err := tx.Exec(`UPDATE conversations SET updated_at = ? WHERE id = ?`, now, conversationID); err != nil {
		return nil, fmt.Errorf("touch conversation: %w", err)
	}
	if err := tx.Commit(); err != nil {
		return nil, fmt.Errorf("commit add message: %w", err)
	}
	return m, nil
}

func (s *Store) ListMessages(conversationID string) ([]Message, error) {
	rows, err := s.db.Query(`
		SELECT id, conversation_id, role, content, created_at
		FROM messages WHERE conversation_id = ?
		ORDER BY created_at ASC, rowid ASC`, conversationID)
	if err != nil {
		return nil, fmt.Errorf("list messages: %w", err)
	}
	defer rows.Close()

	out := []Message{}
	for rows.Next() {
		var m Message
		if err := rows.Scan(&m.ID, &m.ConversationID, &m.Role, &m.Content, &m.CreatedAt); err != nil {
			return nil, fmt.Errorf("scan message: %w", err)
		}
		out = append(out, m)
	}
	return out, rows.Err()
}

// NowSeconds adalah helper waktu epoch detik agar konsisten di seluruh paket.
func NowSeconds() int64 {
	return time.Now().Unix()
}
