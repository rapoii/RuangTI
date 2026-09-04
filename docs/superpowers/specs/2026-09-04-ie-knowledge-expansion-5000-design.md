# Architecture Specification: Scalable Grounded Knowledge Base Expansion to 5,000 Modules

- **Status**: Approved by Rafi
- **Author**: Lily (RuangTI Senior Engineering Assistant)
- **Date**: 2026-09-04
- **Target Repository**: `projects/websites/RuangTI`
- **Scope**: Scaling RuangTI Knowledge Base from 1,498 modules to 5,000 unique, academically verified modules.

---

## 1. Executive Summary & Goals

The RuangTI knowledge base currently contains 1,498 unique foundational and specialized modules covering Industrial Engineering (IE) and Operations Research (OR), delivering 100% Hit@1 on the RAG benchmark. 

The goal of this initiative is to expand the knowledge repository up to 5,000 modules while enforcing:
1. **Strict Zero-Duplicate Guarantee**: Preventing exact, title-level, and semantic/paper-level duplication across all 5,000 modules.
2. **Academic Verification & Reading Protocol**: Every module must be sourced from peer-reviewed journal papers (Q1/Q2) or standard IE textbooks, with the actual full-text/methodology actively extracted and synthesized into the module.
3. **Deterministic Structural Integrity**: 100% elimination of truncated responses, broken LaTeX math syntax (`$`, `$$`), or hanging sentences.
4. **Zero-Downtime RAG Retrieval**: Continuous, incremental vector and FTS indexing maintaining 100% Hit@1 / 1.0000 MRR on `scripts/bench_rag.py`.

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Academic Corpus Sourcing                 │
│   • OpenAlex & CrossRef Academic APIs (IE / OR Journals)   │
│   • Core Industrial Engineering Textbooks (Groover, etc.)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│         Central Knowledge Registry (Pre-flight Gate)         │
│         Database: `data/knowledge_registry.sqlite`          │
│   • Unique Constraints: DOI, ISBN, Normalized Title Hash    │
│   • Domain/Topic Slot Reservations                          │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Passed Unique Check)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│          Reading & Modular Two-Stage Synthesis              │
│   Stage 1: Extract Math Blueprint, Assumptions & Empirical  │
│   Stage 2: Draft 6 Mandatory Sections within Token Limits    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│           Deterministic Quality Gatekeeper (Validator)      │
│   • Check all 6 chapters present                            │
│   • Strict LaTeX delimiter parity check ($$ and $)          │
│   • Sentence boundary & complete conclusion verification    │
└──────────────────────────────┬──────────────────────────────┘
                               │ (Passed Quality Gate)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│       Knowledge Repository & Incremental RAG Indexing       │
│   • Write to `backend/knowledge/{ID}_{slug}.md`             │
│   • Ingest into FTS5 and sqlite-vec via `sync_rag.py`       │
│   • Automated RAG Benchmark Verification (`bench_rag.py`)   │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Component Specifications

### 3.1. Central Anti-Duplicate Registry (`data/knowledge_registry.sqlite`)

To ensure scale without redundancy across multiple batches, a dedicated SQLite registry tracks all ingested and planned modules.

- **Table: `knowledge_registry`**:
  - `id`: INTEGER PRIMARY KEY AUTOINCREMENT
  - `module_id`: TEXT UNIQUE (e.g., `'1499'`)
  - `doi`: TEXT UNIQUE NULLABLE (Canonical normalized DOI, e.g. `'10.1080/00207540601142645'`)
  - `isbn`: TEXT UNIQUE NULLABLE (Normalized ISBN-10/13 for textbooks)
  - `title_normalized`: TEXT UNIQUE (Lowercase, punctuation-stripped, stopword-cleaned title)
  - `domain`: TEXT NOT NULL (One of the 15 core IE domains)
  - `subtopic_key`: TEXT NOT NULL (Granular topic identifier)
  - `source_citation`: TEXT NOT NULL
  - `status`: TEXT NOT NULL (e.g., `'reserved'`, `'written'`, `'verified'`)
  - `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP

**Pre-flight Gate Logic**:
Before fetching or drafting any module, the generator checks:
1. `SELECT count(*) FROM knowledge_registry WHERE doi = ? OR title_normalized = ?`
2. If match count > 0, the candidate topic is immediately rejected and skipped.

---

### 3.2. Academic Corpus Sourcing & Reading Protocol

To fulfill the mandate that sources must be genuine books and journals with read content:

1. **Journal Pipeline**:
   - Query academic APIs (OpenAlex / CrossRef / Unpaywall) filtered by primary IE/OR categories:
     - *IISE Transactions*
     - *International Journal of Production Research (IJPR)*
     - *Computers & Industrial Engineering (C&IE)*
     - *European Journal of Operational Research (EJOR)*
     - *Journal of Manufacturing Systems (JMS)*
     - *Safety Science* & *Applied Ergonomics*
   - Retrieve full-text Open Access XML/PDF or comprehensive structured research extracts (Objective, Mathematical Model / Formulations, Numerical Data, Findings).
2. **Standard Textbooks Corpus**:
   - Curriculum-aligned foundational mapping from leading textbooks:
     - Mikell P. Groover (*Automation, Production Systems, and CIM*)
     - Douglas C. Montgomery (*Design and Analysis of Experiments*, *Statistical Quality Control*)
     - Hamdy A. Taha & Hillier-Lieberman (*Operations Research: An Introduction*)
     - Freivalds & Niebel (*Methods, Standards, and Work Design*)
     - Sunil Chopra & Peter Meindl (*Supply Chain Management: Strategy, Planning, and Operation*)
     - Benjamin S. Blanchard (*Systems Engineering & Reliability*)

---

### 3.3. Two-Stage Generation & Quality Validation

To permanently prevent cut-off modules and syntax breaks:

1. **Stage 1 (Blueprint Extraction)**:
   - Extract raw paper/chapter inputs into a structured schema:
     - Mathematical formulations, variables, constraints.
     - Step-by-step algorithm or analytical procedure.
     - Real industrial case parameters and numerical results.
2. **Stage 2 (Modular Section Drafting)**:
   - Generates markdown according to RuangTI's 6 standard mandatory sections:
     1. *Pendahuluan & Konteks Industri*
     2. *Landasan Teori & Formulasi Matematis*
     3. *Algoritma & Prosedur Perhitungan Step-by-Step*
     4. *Studi Kasus Numerik Rinci & Solusi*
     5. *Evaluasi Kritis, Trade-off & Standar Industri Terkait*
     6. *Ringkasan Implementasi & Referensi Akademik Lengkap*
3. **Automated Quality Validator**:
   - Evaluates generated file before disk commit:
     - **LaTeX Math Integrity**: Count of `$$` must be even; unclosed single `$` disallowed.
     - **Section Completeness**: All 6 header tags present.
     - **Sentence Completion**: Terminal token must end with standard punctuation (`.`, `]`, `)`).
     - **Minimum Depth**: Word count > 700 words, length > 4,000 bytes.

---

### 3.4. RAG Indexing & Continuous Benchmark Gate

- **Batch Size**: 50–100 modules per operational run.
- **Incremental Indexing**: Uses `sync_rag.py` to ingest new markdown files directly into FTS5 and generate embeddings via `fastembed` into `sqlite-vec`.
- **RAG Benchmark Gate**:
  - Run `scripts/bench_rag.py` after each batch.
  - Required Metric: **Hit@1 = 100.00%, MRR = 1.0000**.
  - Any regression halts the pipeline for inspection before proceeding.

---

## 4. Execution Plan & Safeguards

1. **Phase 1: Foundation Setup**:
   - Implement `data/knowledge_registry.sqlite` and seed with the existing 1,498 modules.
   - Build the pre-flight duplicate checker and the automated module validator script.
2. **Phase 2: Academic Harvester & Generator**:
   - Implement `generate_grounded_module.py` leveraging academic APIs and verified books.
3. **Phase 3: Batch Production & Checkpointing**:
   - Execute in managed batches toward milestone targets (2,000 -> 3,000 -> 4,000 -> 5,000).
   - Sync and verify RAG index at each milestone.
   - Periodic Git commits with descriptive changelogs.
