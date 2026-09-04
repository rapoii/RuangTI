import sqlite3
import os
import re
from typing import Optional


def normalize_title(title: str) -> str:
    t = title.lower()
    t = re.sub(r'^(0*\d+|\w+)\s*[-—–:]\s*', '', t)
    t = re.sub(r'[^\w\s]', '', t)
    return re.sub(r'\s+', ' ', t).strip()


class KnowledgeRegistry:
    def __init__(self, db_path: Optional[str] = None):
        if db_path is None:
            # RuangTI/backend/app/rag/registry.py -> up 3 levels to RuangTI base directory
            base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
            db_path = os.path.join(base_dir, "data", "knowledge_registry.sqlite")
        self.db_path = db_path
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)

    def init_db(self) -> None:
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS knowledge_registry (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    module_id TEXT UNIQUE NOT NULL,
                    doi TEXT UNIQUE,
                    isbn TEXT,
                    title_normalized TEXT UNIQUE NOT NULL,
                    domain TEXT NOT NULL,
                    topic_key TEXT NOT NULL,
                    source_citation TEXT NOT NULL,
                    status TEXT NOT NULL DEFAULT 'verified',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            """)
            conn.execute("CREATE INDEX IF NOT EXISTS idx_reg_doi ON knowledge_registry(doi);")
            conn.execute("CREATE INDEX IF NOT EXISTS idx_reg_title ON knowledge_registry(title_normalized);")
            conn.commit()

    def is_duplicate(self, doi: Optional[str], title: str) -> bool:
        norm_title = normalize_title(title)
        with sqlite3.connect(self.db_path) as conn:
            cur = conn.cursor()
            if doi and doi.strip():
                cur.execute("SELECT 1 FROM knowledge_registry WHERE doi = ?", (doi.strip().lower(),))
                if cur.fetchone():
                    return True
            cur.execute("SELECT 1 FROM knowledge_registry WHERE title_normalized = ?", (norm_title,))
            return cur.fetchone() is not None

    def register_module(self, module_id: str, title: str, doi: Optional[str], isbn: Optional[str],
                        domain: str, topic_key: str, citation: str, status: str = "verified") -> bool:
        norm_title = normalize_title(title)
        doi_clean = doi.strip().lower() if doi and doi.strip() else None
        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.execute("""
                    INSERT INTO knowledge_registry 
                    (module_id, doi, isbn, title_normalized, domain, topic_key, source_citation, status)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, (module_id, doi_clean, isbn, norm_title, domain, topic_key, citation, status))
                conn.commit()
            return True
        except sqlite3.IntegrityError:
            return False

    def get_next_module_id(self) -> str:
        with sqlite3.connect(self.db_path) as conn:
            cur = conn.cursor()
            cur.execute("SELECT module_id FROM knowledge_registry ORDER BY CAST(module_id AS INTEGER) DESC LIMIT 1")
            row = cur.fetchone()
            if not row:
                return "1499"
            try:
                curr_max = int(row[0])
                return str(curr_max + 1).zfill(4)
            except ValueError:
                return "1499"
