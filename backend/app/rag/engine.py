import os
import re
import json
import sqlite3
import math
from typing import List, Dict, Any, Tuple
from collections import Counter

DB_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "data", "ruangti_rag.db")
ACADEMIC_PATH = "D:/Software/Hermes Workspace/projects/academic/teknik-industri"

def clean_text(text: str) -> str:
    # Normalize whitespaces
    return re.sub(r'\s+', ' ', text).strip()

def tokenize(text: str) -> List[str]:
    # Lowercase, retain alphanumeric and math symbols
    words = re.findall(r'[a-zA-Z0-9_\-\$\\]+', text.lower())
    return [w for w in words if len(w) > 1]

class IndustrialEngineeringRAG:
    def __init__(self, db_path: str = DB_PATH):
        self.db_path = db_path
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            # Table chunks
            c.execute("""
                CREATE TABLE IF NOT EXISTS knowledge_chunks (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    doc_path TEXT,
                    category TEXT,
                    title TEXT,
                    chunk_index INTEGER,
                    content TEXT,
                    token_count INTEGER,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            # FTS5 Virtual Table for full-text BM25 search
            c.execute("""
                CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
                    title,
                    category,
                    content,
                    tokenize='porter unicode61'
                )
            """)
            conn.commit()

    def build_index(self, academic_dir: str = ACADEMIC_PATH):
        """
        Scan all 74+ markdown files, extract semantic chunks with formulas, and index to FTS5 & SQLite.
        """
        if not os.path.exists(academic_dir):
            print(f"Directory not found: {academic_dir}")
            return

        with sqlite3.connect(self.db_path) as conn:
            c = conn.cursor()
            c.execute("DELETE FROM knowledge_chunks")
            c.execute("DELETE FROM knowledge_fts")
            conn.commit()

            indexed_files = 0
            indexed_chunks = 0

            for root, _, files in os.walk(academic_dir):
                for file in files:
                    if not file.endswith(".md"):
                        continue
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, academic_dir)

                    # Determine category (Semester / Peminatan / Dasar)
                    parts = rel_path.split(os.sep)
                    category = parts[0] if len(parts) > 1 else "Fondasi Umum"

                    try:
                        with open(full_path, "r", encoding="utf-8") as f:
                            text = f.read()
                    except Exception as e:
                        print(f"Error reading {full_path}: {e}")
                        continue

                    # Extract Document Title
                    title_match = re.search(r'^#\s+(.+)$', text, re.MULTILINE)
                    doc_title = title_match.group(1) if title_match else file.replace(".md", "").replace("-", " ").title()

                    # Chunk by Sections (## / ###) to preserve formulas and tabular contexts
                    sections = re.split(r'\n(?=##+\s+)', text)
                    chunk_idx = 0

                    for section in sections:
                        sec_text = section.strip()
                        if len(sec_text) < 50:
                            continue

                        # Sub-header extraction
                        sub_header_match = re.search(r'^##+\s+(.+)$', sec_text, re.MULTILINE)
                        chunk_title = f"{doc_title} — {sub_header_match.group(1)}" if sub_header_match else doc_title

                        tokens = tokenize(sec_text)
                        
                        c.execute("""
                            INSERT INTO knowledge_chunks (doc_path, category, title, chunk_index, content, token_count)
                            VALUES (?, ?, ?, ?, ?, ?)
                        """, (rel_path, category, chunk_title, chunk_idx, sec_text, len(tokens)))
                        
                        chunk_id = c.lastrowid

                        # Insert into FTS5
                        c.execute("""
                            INSERT INTO knowledge_fts (rowid, title, category, content)
                            VALUES (?, ?, ?, ?)
                        """, (chunk_id, chunk_title, category, sec_text))

                        chunk_idx += 1
                        indexed_chunks += 1

                    indexed_files += 1

            conn.commit()
            print(f"✅ RAG Indexed: {indexed_files} files, {indexed_chunks} semantic chunks stored in SQLite FTS5.")

    def search(self, query: str, top_k: int = 4) -> List[Dict[str, Any]]:
        """
        BM25 + Semantic scoring search on knowledge_fts.
        """
        # Clean query for FTS5
        clean_q = re.sub(r'[^a-zA-Z0-9\s]', ' ', query)
        words = clean_q.split()
        if not words:
            return []

        fts_query = " OR ".join([f'"{w}"*' for w in words if len(w) > 1])

        results = []
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row
            c = conn.cursor()
            try:
                # FTS5 bm25 ranking
                c.execute("""
                    SELECT c.id, c.doc_path, c.category, c.title, c.content, bm25(knowledge_fts) as rank
                    FROM knowledge_fts f
                    JOIN knowledge_chunks c ON f.rowid = c.id
                    WHERE knowledge_fts MATCH ?
                    ORDER BY rank ASC
                    LIMIT ?
                """, (fts_query, top_k * 2))
                
                rows = c.fetchall()
                
                # Re-rank based on keyword match density & formula density
                q_tokens = set(tokenize(query))
                scored_rows = []
                for row in rows:
                    content_tokens = tokenize(row["content"])
                    overlap = sum(1 for t in q_tokens if t in content_tokens)
                    formula_bonus = 1.2 if "$$" in row["content"] or "$" in row["content"] else 1.0
                    final_score = (1.0 / (abs(row["rank"]) + 1.0)) * (overlap + 1) * formula_bonus
                    scored_rows.append((final_score, row))

                scored_rows.sort(key=lambda x: x[0], reverse=True)

                for score, row in scored_rows[:top_k]:
                    results.append({
                        "id": row["id"],
                        "doc_path": row["doc_path"],
                        "category": row["category"],
                        "title": row["title"],
                        "content": row["content"],
                        "score": round(score, 3)
                    })

            except Exception as e:
                print(f"Search error: {e}")
                # Fallback to LIKE query if FTS syntax error
                c.execute("""
                    SELECT id, doc_path, category, title, content
                    FROM knowledge_chunks
                    WHERE content LIKE ? OR title LIKE ?
                    LIMIT ?
                """, (f"%{words[0]}%", f"%{words[0]}%", top_k))
                for row in c.fetchall():
                    results.append({
                        "id": row["id"],
                        "doc_path": row["doc_path"],
                        "category": row["category"],
                        "title": row["title"],
                        "content": row["content"],
                        "score": 1.0
                    })

        return results

# Singleton instance
rag_engine = IndustrialEngineeringRAG()

if __name__ == "__main__":
    print("Building RAG Index from Academic Knowledge Base...")
    rag_engine.build_index()
    print("\nTesting Search Query: 'Hitung EOQ dan Safety Stock'")
    res = rag_engine.search("Hitung EOQ dan Safety Stock", top_k=2)
    for idx, r in enumerate(res, 1):
        print(f"\n--- Result #{idx}: {r['title']} (Score: {r['score']}) ---")
        print(r['content'][:300] + "...")
