# Rebuild rag_vec v2 - exclusive lock anti-interleave + final cosine audit
import sys, os, sqlite3, struct, time
ROOT = r"D:\Software\Hermes Workspace\projects\web\RuangTI"
sys.path.insert(0, os.path.join(ROOT, 'backend', 'app', 'rag'))
from embedder import EMBED_DIM, embed_texts
import sqlite_vec

DB = os.path.join(ROOT, 'backend', 'data', 'ruangti_rag.db')
conn = sqlite3.connect(DB, timeout=30)
conn.enable_load_extension(True); sqlite_vec.load(conn); conn.enable_load_extension(False)
cur = conn.cursor()

# Exclusive lock: block ANY other writer for the whole operation
cur.execute("BEGIN EXCLUSIVE")
print("exclusive lock acquired", flush=True)

cur.execute("DROP TABLE IF EXISTS rag_vec")
cur.execute(f"CREATE VIRTUAL TABLE rag_vec USING vec0(embedding FLOAT[{EMBED_DIM}])")

rows = cur.execute("SELECT rowid, section_title, content FROM rag_fts ORDER BY rowid").fetchall()
texts = [f"{t}\n{c[:1200]}" for (_, t, c) in rows]
print(f"embedding {len(texts)} sections...", flush=True)

batch_size = 128
t0 = time.time()
for i in range(0, len(texts), batch_size):
    batch = texts[i:i+batch_size]
    vectors = embed_texts(batch)
    cur.executemany(
        "INSERT INTO rag_vec(rowid, embedding) VALUES (?, ?)",
        [(rows[i+j][0], struct.pack(f"<{len(v)}f", *v)) for j, v in enumerate(vectors)]
    )
    conn.commit()
    cur.execute("BEGIN EXCLUSIVE")  # re-acquire after each commit
    done = min(i+batch_size, len(texts))
    if done % 1280 == 0 or done >= len(texts):
        print(f"  {done}/{len(texts)} ({time.time()-t0:.0f}s elapsed)", flush=True)

n = cur.execute("SELECT COUNT(*) FROM rag_vec").fetchone()[0]
assert n == len(texts), f"MISMATCH: vec={n} fts={len(texts)}"

# Final audit: random samples must match their section text (cosine ~1.0)
import math, random
def cos(a, b):
    return sum(x*y for x, y in zip(a, b)) / (
        math.sqrt(sum(x*x for x in a)) * math.sqrt(sum(y*y for y in b)))

samples = random.sample(range(len(rows)), 12) + [0, len(rows)-1]
ok = 0
for idx in sorted(set(samples)):
    rid = rows[idx][0]
    stored = struct.unpack(f"<{EMBED_DIM}f",
        cur.execute("SELECT embedding FROM rag_vec WHERE rowid=?", (rid,)).fetchone()[0])
    sec = cur.execute("SELECT section_title, content FROM rag_fts WHERE rowid=?", (rid,)).fetchone()
    fresh = list(embed_texts([f"{sec[0]}\n{sec[1][:1200]}"]))[0]
    c = cos(stored, fresh)
    status = "OK" if c > 0.98 else "FAIL"
    ok += c > 0.98
    print(f"  audit rowid {rid}: cosine={c:.4f} {status}", flush=True)

conn.commit()  # releases exclusive lock
conn.close()
print(f"FINAL: {n} embeddings, audit {ok}/{len(set(samples))+2} passed", flush=True)
if ok < len(set(samples)) + 2:
    sys.exit(2)
print("ALL CLEAN", flush=True)
