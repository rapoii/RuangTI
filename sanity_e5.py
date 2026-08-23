# Mini sanity test: apakah multilingual-e5-large menyelesaikan kasus paraphrase yang gagal dengan MiniLM?
import sys, os, sqlite3, math, random
ROOT = r"D:\Software\Hermes Workspace\projects\web\RuangTI"
sys.path.insert(0, os.path.join(ROOT, 'backend', 'app', 'rag'))
import sqlite_vec
from fastembed import TextEmbedding

DB = os.path.join(ROOT, 'backend', 'data', 'ruangti_rag.db')
conn = sqlite3.connect(DB)
conn.enable_load_extension(True); sqlite_vec.load(conn); conn.enable_load_extension(False)
cur = conn.cursor()

model = TextEmbedding('intfloat/multilingual-e5-large')
def emb(texts, is_query=False):
    pre = ("query: " if is_query else "passage: ")
    return [list(v) for v in model.embed([pre + t for t in texts])]

def cos(a, b):
    return sum(x*y for x,y in zip(a,b)) / (math.sqrt(sum(x*x for x in a)) * math.sqrt(sum(y*y for y in b)))

CASES = [
    ("cara ngurangin pemborosan di jalur produksi", ['011'], ['527', '574', '701']),
    ("gimana cara hitung biaya karbon dari luar negeri?", ['736'], ['434', '287']),
    ("proyek gedung kok rencananya selalu molor ya?", ['735'], ['690', '527']),
]

def sections_of(mod_id, limit=2):
    rows = cur.execute(
        "SELECT rowid, section_title FROM rag_fts WHERE module_id=? ORDER BY rowid LIMIT ?",
        (mod_id, limit)).fetchall()
    out = []
    for rid, title in rows:
        sec = cur.execute("SELECT content FROM rag_fts WHERE rowid=?", (rid,)).fetchone()
        out.append((mod_id, rid, f"{title}\n{sec[0][:1200]}"))
    return out

random.seed(42)
all_passages, all_meta = [], []
for q, golds, distract in CASES:
    for g in golds:
        for mid, rid, text in sections_of(g):
            all_passages.append(text); all_meta.append(('GOLD', q[:25], mid, rid))
    for d in distract:
        for mid, rid, text in sections_of(d, limit=1):
            all_passages.append(text); all_meta.append(('DIS', q[:25], mid, rid))

# plus 5 random global distractors
for rid, in cur.execute("SELECT rowid FROM rag_fts ORDER BY RANDOM() LIMIT 5").fetchall():
    sec = cur.execute("SELECT module_id, section_title, content FROM rag_fts WHERE rowid=?", (rid,)).fetchone()
    all_passages.append(f"{sec[1]}\n{sec[2][:1200]}"); all_meta.append(('RND', '-', sec[0], rid))

print(f"embedding {len(all_passages)} passages with e5-large...", flush=True)
pvectors = emb(all_passages)

total, passed = 0, 0
for q, golds, _ in CASES:
    qv = emb([q], is_query=True)[0]
    scored = [(cos(qv, pv), meta) for pv, meta in zip(pvectors, all_meta)]
    scored.sort(reverse=True)
    top3 = scored[:3]
    gold_rank = next((i+1 for i, (s, m) in enumerate(scored) if m[0]=='GOLD' and m[1]==q[:25]), None)
    ok = any(m[0]=='GOLD' and m[1]==q[:25] for s, m in top3)
    total += 1; passed += ok
    print(f"\nQ: {q}")
    for i, (s, m) in enumerate(top3, 1):
        tag = "✅GOLD" if (m[0]=='GOLD' and m[1]==q[:25]) else m[0]
        print(f"  {i}. [{tag}] mod {m[2]} cos={s:.4f} ({m[3]})")
    print(f"  best gold rank: {gold_rank} -> {'PASS' if ok else 'FAIL'}")

print(f"\n=== SANITY: {passed}/{total} queries pass ===")
