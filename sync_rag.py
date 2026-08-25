# RuangTI RAG Incremental Sync — DETERMINISTIC SINGLE-WRITER (v1)
# The ONLY safe DB writer: ingests new .md modules into rag_fts,
# deletes orphan vectors, backfills missing embeddings.
# NEVER drops, never rebuilds, never touches existing rows.
import os, sys, time, re, struct, sqlite3, json
from datetime import datetime, timedelta

# ROOT is FIXED to the RuangTI repo so this script can live anywhere
# (cron scheduler requires it under ~/AppData/Local/hermes/scripts/).
ROOT = r"D:\Software\Hermes Workspace\projects\web\RuangTI"
DB = os.path.join(ROOT, "backend", "data", "ruangti_rag.db")
KNOWLEDGE_DIR = os.path.join(ROOT, "backend", "knowledge")
sys.path.insert(0, os.path.join(ROOT, "backend"))

BATCH = 64

# Watchdog mode (default): stay SILENT unless real work happened.
# Pass -v for verbose logging.
VERBOSE = "-v" in sys.argv


def log(msg):
    if VERBOSE:
        print(msg, flush=True)


def report(msg):
    # Actionable news — always printed (delivered by cron watchdog)
    print(msg, flush=True)


def _serialize_f32(vec):
    return struct.pack(f"<{len(vec)}f", *vec)


def main():
    import sqlite_vec
    from app.rag.engine import chunk_markdown

    conn = sqlite3.connect(DB, timeout=30)
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA busy_timeout=30000")
    conn.enable_load_extension(True)
    sqlite_vec.load(conn)
    conn.enable_load_extension(False)
    cur = conn.cursor()

    # ---- Step 0: ensure vec table exists with correct dim ----
    from app.rag.embedder import EMBED_DIM
    cur.execute(
        "CREATE VIRTUAL TABLE IF NOT EXISTS rag_vec USING vec0(embedding FLOAT[%d])" % EMBED_DIM
    )

    # ---- Step 1: ingest NEW knowledge modules (idempotent by module_id) ----
    existing_modules = {
        r[0] for r in cur.execute("SELECT DISTINCT module_id FROM rag_fts").fetchall()
    }
    md_files = sorted(f for f in os.listdir(KNOWLEDGE_DIR) if f.endswith(".md"))
    new_files = []
    for fname in md_files:
        module_id = fname.split("_")[0]
        if module_id not in existing_modules:
            new_files.append(fname)

    inserted = 0
    if new_files:
        report(f"NEW modules detected: {len(new_files)} -> {new_files}")
        for fname in new_files:
            with open(os.path.join(KNOWLEDGE_DIR, fname), "r", encoding="utf-8") as f:
                content = f.read()
            module_id = fname.split("_")[0]
            m = re.search(r"^#\s+(.+)", content, re.MULTILINE)
            module_title = m.group(1).strip() if m else fname
            chunks = chunk_markdown(content, module_title)
            for section_title, chunk_text in chunks:
                cur.execute(
                    "INSERT INTO rag_fts (module_id, section_title, content) VALUES (?, ?, ?)",
                    (module_id, section_title, chunk_text),
                )
                inserted += 1
        conn.commit()
        report(f"SYNCED: +{inserted} sections from {len(new_files)} modules | rag_fts now indexed")
    else:
        log("no new modules — FTS up to date")

    # ---- Step 2: delete orphan vectors (vec rowid without fts rowid) ----
    cur.execute("DELETE FROM rag_vec WHERE rowid NOT IN (SELECT rowid FROM rag_fts)")
    orphans_deleted = cur.rowcount
    if orphans_deleted:
        conn.commit()
    (report(f"CLEANED: removed {orphans_deleted} orphan vectors") if orphans_deleted else log(f"orphan vectors deleted: 0"))

    # ---- Step 3: backfill embeddings for FTS rows missing vectors ----
    fts_rows = [r[0] for r in cur.execute("SELECT rowid FROM rag_fts ORDER BY rowid").fetchall()]
    existing = {r[0] for r in cur.execute("SELECT rowid FROM rag_vec").fetchall()}
    missing = [rid for rid in fts_rows if rid not in existing]
    log(f"fts={len(fts_rows)} vec_missing={len(missing)}")

    if not missing:
        total = cur.execute("SELECT COUNT(*) FROM rag_vec").fetchone()[0]
        log(f"DONE: fully synced {total}/{len(fts_rows)}")
        conn.close()
        report_gaps()
        return

    texts = {}
    for i in range(0, len(missing), 500):
        chunk = missing[i:i + 500]
        qmarks = ",".join("?" * len(chunk))
        for rid, title, body in cur.execute(
            f"SELECT rowid, section_title, content FROM rag_fts WHERE rowid IN ({qmarks}) ORDER BY rowid",
            chunk,
        ).fetchall():
            texts[rid] = f"{title}\n{body[:1200]}"

    from app.rag.embedder import embed_texts

    done = 0
    t0 = time.time()
    ids_sorted = sorted(texts.keys())
    for bi in range(0, len(ids_sorted), BATCH):
        batch_ids = ids_sorted[bi:bi + BATCH]
        batch_texts = [texts[rid] for rid in batch_ids]
        vectors = embed_texts(batch_texts)
        qmarks = ",".join("?" * len(batch_ids))
        cur.execute(f"DELETE FROM rag_vec WHERE rowid IN ({qmarks})", batch_ids)
        cur.executemany(
            "INSERT INTO rag_vec(rowid, embedding) VALUES (?, ?)",
            [(rid, _serialize_f32(v)) for rid, v in zip(batch_ids, vectors)],
        )
        conn.commit()
        done += len(batch_ids)
        elapsed = time.time() - t0
        rate = done / max(elapsed, 1)
        eta = (len(ids_sorted) - done) / max(rate, 0.01)
        log(f"{done}/{len(ids_sorted)} ({elapsed:.0f}s elapsed, eta {eta:.0f}s)")

    total = cur.execute("SELECT COUNT(*) FROM rag_vec").fetchone()[0]
    report(f"DONE: backfill complete — rag_vec={total}/{len(fts_rows)} (coverage 100%)")
    conn.close()

    # --- Query-Gap Report: feed real user questions with weak KB coverage ---
    # The RAG-authoring agent reads this stdout and prioritizes new modules
    # toward what users actually ask but the KB cannot answer.
    report_gaps()


def report_gaps():
    try:
        gap_path = os.path.join(
            os.path.dirname(os.path.abspath(__file__)),
            "backend", "data", "query_gaps.jsonl",
        )
        if os.path.exists(gap_path):
            from collections import Counter
            entries = []
            with open(gap_path, encoding="utf-8") as gf:
                for line in gf:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        entries.append(json.loads(line))
                    except Exception:
                        continue
            cutoff = (datetime.now() - timedelta(days=7)).isoformat(timespec="seconds")
            recent = [e for e in entries if e.get("ts", "") >= cutoff]
            if recent:
                freq = Counter(e["query"].lower() for e in recent)
                report(f"GAP_REPORT_START ({len(recent)} low-coverage queries in last 7 days)")
                for q, n in freq.most_common(15):
                    report(f"  GAP x{n}: {q}")
                report("GAP_REPORT_END — tulis modul .md baru yang menjawab gap di atas bila relevan.")
            else:
                report("GAPS: none in last 7 days")
        else:
            report("GAPS: no gap log yet")
    except Exception as e:
        report(f"GAPS: report skipped ({e})")



if __name__ == "__main__":
    main()
