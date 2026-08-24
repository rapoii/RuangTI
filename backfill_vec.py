# RuangTI rag_vec Backfill — RESUMABLE (v3)
# Idempotent: only embeds FTS rowids missing from rag_vec. Safe to re-run after crash.
import os, sys, time, struct, sqlite3

ROOT = os.path.dirname(os.path.abspath(__file__))
DB = os.path.join(ROOT, "backend", "data", "ruangti_rag.db")
sys.path.insert(0, os.path.join(ROOT, "backend"))

BATCH = 64          # small batches -> small commit windows -> crash-safe
COMMIT_EVERY = 1    # commit after every batch


def _serialize_f32(vec):
    return struct.pack(f"<{len(vec)}f", *vec)


def main():
    import sqlite_vec
    conn = sqlite3.connect(DB, timeout=30)
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA busy_timeout=30000")
    conn.enable_load_extension(True)
    sqlite_vec.load(conn)
    conn.enable_load_extension(False)
    cur = conn.cursor()

    fts_rows = cur.execute(
        "SELECT rowid FROM rag_fts ORDER BY rowid"
    ).fetchall()
    fts_ids = [r[0] for r in fts_rows]
    print(f"fts sections: {len(fts_ids)}", flush=True)

    # ensure vec table exists with correct dim
    from app.rag.embedder import EMBED_DIM
    cur.execute("CREATE VIRTUAL TABLE IF NOT EXISTS rag_vec USING vec0(embedding FLOAT[%d])" % EMBED_DIM)

    existing = {r[0] for r in cur.execute("SELECT rowid FROM rag_vec").fetchall()}
    missing = [rid for rid in fts_ids if rid not in existing]
    print(f"vec existing: {len(existing)}, missing: {len(missing)}", flush=True)

    if not missing:
        print("nothing to do — vec fully synced", flush=True)
        conn.close()
        return

    # fetch texts for missing ids only
    texts = {}
    for i in range(0, len(missing), 500):
        chunk = missing[i:i + 500]
        qmarks = ",".join("?" * len(chunk))
        for rid, title, content in cur.execute(
            f"SELECT rowid, section_title, content FROM rag_fts WHERE rowid IN ({qmarks}) ORDER BY rowid",
            chunk,
        ).fetchall():
            texts[rid] = f"{title}\n{content[:1200]}"

    from app.rag.embedder import embed_texts

    done = 0
    t0 = time.time()
    ids_sorted = sorted(texts.keys())
    for bi in range(0, len(ids_sorted), BATCH):
        batch_ids = ids_sorted[bi:bi + BATCH]
        batch_texts = [texts[rid] for rid in batch_ids]
        vectors = embed_texts(batch_texts)
        # vec0 virtual tables do NOT support INSERT OR REPLACE;
        # explicit delete-then-insert is the only safe upsert pattern
        qmarks = ",".join("?" * len(batch_ids))
        cur.execute(f"DELETE FROM rag_vec WHERE rowid IN ({qmarks})", batch_ids)
        cur.executemany(
            "INSERT INTO rag_vec(rowid, embedding) VALUES (?, ?)",
            [(rid, _serialize_f32(v)) for rid, v in zip(batch_ids, vectors)],
        )
        conn.commit()  # resumable point
        done += len(batch_ids)
        elapsed = time.time() - t0
        if done % (BATCH * 8) == 0 or done >= len(ids_sorted):
            rate = done / max(elapsed, 1)
            eta = (len(ids_sorted) - done) / max(rate, 0.01)
            print(f"{done}/{len(ids_sorted)} ({elapsed:.0f}s elapsed, eta {eta:.0f}s)", flush=True)

    total = cur.execute("SELECT COUNT(*) FROM rag_vec").fetchone()[0]
    print(f"DONE: rag_vec={total}/{len(fts_ids)}", flush=True)
    conn.close()


if __name__ == "__main__":
    main()
