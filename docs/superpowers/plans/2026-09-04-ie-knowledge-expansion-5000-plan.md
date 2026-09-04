# Implementation Plan: Grounded Knowledge Base Expansion to 5,000 Modules

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and execute an automated, zero-duplicate, academically grounded pipeline that expands RuangTI's knowledge base from 1,498 to 5,000 peer-reviewed modules while maintaining 100% Hit@1 RAG retrieval accuracy.

**Architecture:** A centralized SQLite registry acts as an anti-duplicate gatekeeper enforcing unique constraints on DOI, ISBN, and normalized title. A multi-stage generator queries academic APIs and core textbooks, extracts full-text concepts/math blueprints, synthesizes 6 mandatory markdown chapters, validates structural completeness before writing, and incrementally syncs into the RAG vector & FTS index with automated regression testing.

**Tech Stack:** Python 3.11, SQLite3, `fastembed` (ONNX), `sqlite-vec`, `requests`, `urllib`, Next.js frontend, FastAPI backend.

**Spec:** `docs/superpowers/specs/2026-09-04-ie-knowledge-expansion-5000-design.md`

## Global Constraints

- Never commit duplicate DOIs, duplicate titles, or duplicate topics across `backend/knowledge/*.md`.
- Every generated module must include genuine academic citations (Authors, Year, Title, Journal/Publisher, DOI/ISBN).
- Every module must contain all 6 mandatory sections, balanced LaTeX math tags (`$$` and `$`), and complete sentence endings.
- All RAG sync operations must preserve 100% Hit@1 and 1.0000 MRR on `scripts/bench_rag.py`.

---

### Task 1: Central Knowledge Registry & Seed Initial 1,498 Modules

**Files:**
- Create: `backend/app/rag/registry.py`
- Test: `tests/test_registry.py`

**Interfaces:**
- Produces: `KnowledgeRegistry` class with methods:
  - `init_db() -> None`
  - `register_module(module_id: str, title: str, doi: str, isbn: str, domain: str, topic_key: str, citation: str) -> bool`
  - `is_duplicate(doi: str, title: str) -> bool`
  - `get_next_module_id() -> str`

- [ ] **Step 1: Write the failing test for KnowledgeRegistry**

Create `tests/test_registry.py`:
```python
import os, sqlite3, pytest
from backend.app.rag.registry import KnowledgeRegistry

def test_registry_prevents_duplicate_doi(tmp_path):
    db_path = str(tmp_path / "test_reg.sqlite")
    reg = KnowledgeRegistry(db_path)
    reg.init_db()
    
    ok1 = reg.register_module(
        module_id="1499",
        title="Optimal Facility Layout using Genetic Algorithm",
        doi="10.1016/j.cie.2024.101",
        isbn=None,
        domain="Facilities Planning",
        topic_key="genetic_facility_layout",
        citation="Smith et al., C&IE 2024"
    )
    assert ok1 is True
    
    # Second registration with same DOI must fail
    assert reg.is_duplicate(doi="10.1016/j.cie.2024.101", title="Different Title") is True
    ok2 = reg.register_module(
        module_id="1500",
        title="Different Title",
        doi="10.1016/j.cie.2024.101",
        isbn=None,
        domain="Facilities Planning",
        topic_key="genetic_facility_layout",
        citation="Smith et al., C&IE 2024"
    )
    assert ok2 is False
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/test_registry.py -v`
Expected: FAIL (ModuleNotFoundError: No module named 'backend.app.rag.registry')

- [ ] **Step 3: Implement KnowledgeRegistry**

Create `backend/app/rag/registry.py`:
```python
import sqlite3, os, re
from typing import Optional

def normalize_title(title: str) -> str:
    t = title.lower()
    t = re.sub(r'^(0*\d+|\w+)\s*[-—–:]\s*', '', t)
    t = re.sub(r'[^\w\s]', '', t)
    return re.sub(r'\s+', ' ', t).strip()

class KnowledgeRegistry:
    def __init__(self, db_path: Optional[str] = None):
        if db_path is None:
            base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/test_registry.py -v`
Expected: PASS

- [ ] **Step 5: Seed existing 1,498 modules into registry**

Write and run `scripts/seed_registry.py`:
```python
import os, glob, re
from backend.app.rag.registry import KnowledgeRegistry

reg = KnowledgeRegistry()
reg.init_db()

files = glob.glob('backend/knowledge/*.md')
print(f"Seeding {len(files)} existing modules into registry...")

seeded = 0
for f in files:
    fname = os.path.basename(f)
    mid = fname.split('_')[0]
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read(3000)
    
    title_m = re.search(r'^#\s+(.+)', c, re.MULTILINE)
    title = title_m.group(1) if title_m else fname
    
    doi_m = re.search(r'doi(?:\.org/|:?\s*)(10\.\d{4,9}/[-._;()/:A-Za-z0-9]+)', c, re.IGNORECASE)
    doi = doi_m.group(1).rstrip(').,;') if doi_m else None
    
    reg.register_module(
        module_id=mid,
        title=title,
        doi=doi,
        isbn=None,
        domain="Industrial Engineering",
        topic_key=fname,
        citation="Archived Module Seed"
    )
    seeded += 1

print(f"Successfully seeded {seeded} modules.")
```

- [ ] **Step 6: Commit**

```bash
git add backend/app/rag/registry.py tests/test_registry.py scripts/seed_registry.py
git commit -m "feat(registry): add centralized knowledge registry and seed 1,498 existing modules"
```

---

### Task 2: Deterministic Module Quality Validator

**Files:**
- Create: `backend/app/rag/validator.py`
- Test: `tests/test_validator.py`

**Interfaces:**
- Produces: `validate_module_content(content: str) -> Tuple[bool, List[str]]`

- [ ] **Step 1: Write the failing test for validator**

Create `tests/test_validator.py`:
```python
from backend.app.rag.validator import validate_module_content

def test_validator_rejects_unclosed_latex():
    bad_content = """# 1499 — Title
## 1. Pendahuluan
Text
## 2. Landasan Teori
$$formula = 1
## 3. Algoritma
Text
## 4. Studi Kasus
Text
## 5. Evaluasi Kritis
Text
## 6. Kesimpulan & Referensi
Done.
"""
    valid, errors = validate_module_content(bad_content)
    assert valid is False
    assert any("LaTeX" in e for e in errors)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pytest tests/test_validator.py -v`
Expected: FAIL

- [ ] **Step 3: Implement Validator**

Create `backend/app/rag/validator.py`:
```python
import re
from typing import Tuple, List

REQUIRED_SECTIONS = [
    r'##\s+1\.\s+Pendahuluan',
    r'##\s+2\.\s+Landasan Teori',
    r'##\s+3\.\s+Algoritma',
    r'##\s+4\.\s+Studi Kasus',
    r'##\s+5\.\s+Evaluasi Kritis',
    r'##\s+6\.\s+Ringkasan|##\s+6\.\s+Kesimpulan'
]

def validate_module_content(content: str) -> Tuple[bool, List[str]]:
    errors = []
    
    # 1. Check length
    if len(content.strip()) < 3000:
        errors.append(f"Content too short: {len(content)} chars (minimum 3000)")
        
    # 2. Check LaTeX delimiters
    if content.count('$$') % 2 != 0:
        errors.append("Unclosed display math ($$)")
    
    # Inline math check
    without_display = content.replace('$$', '')
    if without_display.count('$') % 2 != 0:
        errors.append("Unclosed inline math ($)")
        
    # 3. Check required sections
    for sec_pattern in REQUIRED_SECTIONS:
        if not re.search(sec_pattern, content, re.IGNORECASE):
            errors.append(f"Missing required section matching pattern: {sec_pattern}")
            
    # 4. Check sentence termination
    last_char = content.strip()[-1] if content.strip() else ''
    if last_char not in ('.', '!', '?', ']', ')', '"', '*'):
        errors.append(f"Incomplete trailing sentence, ends with: '{last_char}'")
        
    return (len(errors) == 0, errors)
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pytest tests/test_validator.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add backend/app/rag/validator.py tests/test_validator.py
git commit -m "feat(validator): deterministic quality and completeness validator for knowledge modules"
```

---

### Task 3: Grounded Academic Harvester & Generator Pipeline

**Files:**
- Create: `scripts/academic_harvester.py`
- Create: `scripts/produce_grounded_modules.py`
- Test: `tests/test_harvester.py`

**Interfaces:**
- Consumes: `KnowledgeRegistry`, `validate_module_content`
- Produces: Synthesized modules written directly to `backend/knowledge/` and registered into SQLite.

- [ ] **Step 1: Write test for academic harvester query & dedup pre-filter**

Create `tests/test_harvester.py`:
```python
from scripts.academic_harvester import filter_candidate_papers

def test_filter_candidate_papers():
    candidates = [
        {"doi": "10.1016/j.cie.2024.01", "title": "Facility Layout 1"},
        {"doi": "10.1016/j.cie.2024.02", "title": "Facility Layout 2"},
    ]
    seen_dois = {"10.1016/j.cie.2024.01"}
    filtered = filter_candidate_papers(candidates, seen_dois)
    assert len(filtered) == 1
    assert filtered[0]["doi"] == "10.1016/j.cie.2024.02"
```

- [ ] **Step 2: Implement Academic Harvester & Batch Generator**

Implement `scripts/academic_harvester.py` & `scripts/produce_grounded_modules.py` with:
- Academic API fetcher (OpenAlex query by IE subjects).
- Full abstract + methodology extractor.
- 6-chapter drafting loop conforming to RuangTI template.
- Validator gate before writing file.
- Registry update upon success.

- [ ] **Step 3: Run dry-run generator test**

Run: `python scripts/produce_grounded_modules.py --limit 2 --dry-run`
Expected: Successfully formats 2 candidate modules with validation check PASS.

- [ ] **Step 4: Commit**

```bash
git add scripts/academic_harvester.py scripts/produce_grounded_modules.py tests/test_harvester.py
git commit -m "feat(pipeline): academic paper harvester and grounded generator with pre-flight checks"
```

---

### Task 4: Incremental Batch Execution, RAG Sync, and Benchmark Gate

**Files:**
- Execute: `scripts/produce_grounded_modules.py` in managed batches
- Execute: `python sync_rag.py`
- Execute: `python scripts/bench_rag.py`

- [ ] **Step 1: Execute Batch 1 (+100 modules -> 1,598 modules)**
- [ ] **Step 2: Sync RAG and verify Benchmark (Hit@1 = 100%, MRR = 1.0000)**
- [ ] **Step 3: Commit and Push Batch 1**
- [ ] **Step 4: Repeat for Milestone batches toward 5,000 modules**

---
