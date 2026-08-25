"""
bench_rag.py — RuangTI RAG Regression Benchmark (persisten).

Menjalankan gold queries terverifikasi ke engine RAG aktif, menghitung
Hit@1 / Hit@3 / Hit@5 + MRR, membandingkan dengan baseline tersimpan,
dan exit non-zero bila ada regresi (untuk alert cronjob).

Usage:
    python scripts/bench_rag.py                # jalankan benchmark
    python scripts/bench_rag.py --save-baseline # simpan hasil sebagai baseline baru

Output JSON: backend/data/bench_history/bench_YYYYMMDD_HHMMSS.json (+ latest.json)
"""
import argparse
import json
import os
import sqlite3
import sys
import time
from datetime import datetime

# --- Path bootstrap: script lives in <repo>/scripts/, backend is sibling ---
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BACKEND = os.path.join(REPO, "backend")
sys.path.insert(0, BACKEND)

DB_PATH = os.path.join(BACKEND, "data", "ruangti_rag.db")
HISTORY_DIR = os.path.join(BACKEND, "data", "bench_history")

# --- Gold set: 15 query, SEMUANYA diverifikasi ke konten modul riil di DB ---
# (query -> module_id yang WAJIB muncul di hasil; dicek ulang tiap run)
GOLD_QUERIES = [
    {"q": "supply chain management dan inventory control", "module": "004"},
    {"q": "value engineering dan analisis fungsi FAST diagram", "module": "018"},
    {"q": "agent based modeling simulation industri", "module": "065", "alt_modules": ["203"]},
    {"q": "smart warehousing automated storage retrieval system", "module": "080"},
    {"q": "branch and price branch and cut algoritma optimasi", "module": "103"},
    {"q": "inventory routing problem integrasi", "module": "117"},
    {"q": "stochastic inventory non-stationary demand", "module": "129"},
    {"q": "cooperative game theory supply chain nucleolus", "module": "133"},
    {"q": "mixed model assembly line balancing", "module": "136"},
    {"q": "flexible job shop scheduling setup times", "module": "137"},
    {"q": "industrial ventilation design capture velocity", "module": "185"},
    {"q": "kriging surrogate modeling bayesian optimization", "module": "218"},
    {"q": "occupational health safety simulation", "module": "233"},
    {"q": "reliability block diagram analysis", "module": "240"},
    {"q": "poka yoke error proofing zero quality control", "module": "251"},
]

RANK_WEIGHTS = {1: 1.0, 2: 0.5, 3: 1 / 3, 4: 0.25, 5: 0.2}


def verify_gold_modules() -> list[str]:
    """Pastikan semua module_id gold masih ada di DB. Return daftar masalah."""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    problems = []
    for g in GOLD_QUERIES:
        n = cur.execute(
            "SELECT COUNT(*) FROM rag_fts WHERE module_id = ?", (g["module"],)
        ).fetchone()[0]
        if n == 0:
            problems.append(f"modul {g['module']} hilang dari rag_fts")
        for alt in g.get("alt_modules") or []:
            n_alt = cur.execute(
                "SELECT COUNT(*) FROM rag_fts WHERE module_id = ?", (alt,)
            ).fetchone()[0]
            if n_alt == 0:
                problems.append(f"alt modul {alt} hilang dari rag_fts")
    conn.close()
    return problems


def run_benchmark() -> dict:
    from app.rag.engine import rag_engine  # engine aktif (dengan reranker bila ada)

    engine = rag_engine
    per_query = []
    hits = {1: 0, 3: 0, 5: 0}
    rr_sum = 0.0
    latencies = []

    for g in GOLD_QUERIES:
        t0 = time.perf_counter()
        results = engine.search(g["q"], top_k=5)
        dt_ms = (time.perf_counter() - t0) * 1000
        latencies.append(dt_ms)

        got_ids = [str(r.get("module_id", "")) for r in results]
        # Multi-gold: a hit is any of the accepted modules (KB may hold
        # duplicate-topic modules; retrieving the right TOPIC is the goal).
        gold_ids = {g["module"], *(g.get("alt_modules") or [])}
        rank = next((i + 1 for i, mid in enumerate(got_ids) if mid in gold_ids), None)

        for k in (1, 3, 5):
            if rank is not None and rank <= k:
                hits[k] += 1
        rr_sum += RANK_WEIGHTS.get(rank, 0.0) if rank else 0.0

        per_query.append({
            "query": g["q"],
            "expected_module": g["module"],
            "rank": rank,
            "latency_ms": round(dt_ms, 1),
        })

    n = len(GOLD_QUERIES)
    return {
        "timestamp": datetime.now().isoformat(timespec="seconds"),
        "n_queries": n,
        "hit_at_1": round(hits[1] / n, 4),
        "hit_at_3": round(hits[3] / n, 4),
        "hit_at_5": round(hits[5] / n, 4),
        "mrr": round(rr_sum / n, 4),
        "avg_latency_ms": round(sum(latencies) / n, 1),
        "p95_latency_ms": round(sorted(latencies)[int(n * 0.95) - 1], 1),
        "per_query": per_query,
    }


def load_baseline() -> dict | None:
    path = os.path.join(HISTORY_DIR, "baseline.json")
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    return None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--save-baseline", action="store_true",
                        help="simpan hasil run ini sebagai baseline")
    args = parser.parse_args()

    problems = verify_gold_modules()
    if problems:
        print("GOLD SET INVALID:")
        for p in problems:
            print(f"  - {p}")
        sys.exit(2)

    result = run_benchmark()

    # history
    os.makedirs(HISTORY_DIR, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    with open(os.path.join(HISTORY_DIR, f"bench_{stamp}.json"), "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    with open(os.path.join(HISTORY_DIR, "latest.json"), "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
    if args.save_baseline or not os.path.exists(os.path.join(HISTORY_DIR, "baseline.json")):
        with open(os.path.join(HISTORY_DIR, "baseline.json"), "w", encoding="utf-8") as f:
            json.dump(result, f, indent=2, ensure_ascii=False)

    baseline = load_baseline()
    print("=" * 64)
    print(f"RuangTI RAG Benchmark — {result['n_queries']} gold queries")
    print("=" * 64)
    print(f"Hit@1 {result['hit_at_1']:.2%} | Hit@3 {result['hit_at_3']:.2%} | "
          f"Hit@5 {result['hit_at_5']:.2%} | MRR {result['mrr']:.4f}")
    print(f"Latency avg {result['avg_latency_ms']:.0f}ms | p95 {result['p95_latency_ms']:.0f}ms")

    regression = False
    if baseline and not args.save_baseline:
        print(f"\nBaseline: Hit@1 {baseline['hit_at_1']:.2%} | MRR {baseline['mrr']:.4f} | "
              f"lat {baseline['avg_latency_ms']:.0f}ms")
        if result["mrr"] < baseline["mrr"] or result["hit_at_5"] < baseline["hit_at_5"]:
            regression = True
            print("\n❌ REGRESSION DETECTED!")
            for pq, bq in zip(result["per_query"], baseline["per_query"]):
                if (pq["rank"] or 99) != (bq["rank"] or 99):
                    print(f"  '{pq['query']}': rank {bq['rank']} -> {pq['rank']} "
                          f"(expected module {pq['expected_module']})")
            sys.exit(1)
        else:
            print("\n✅ NO REGRESSION — quality held or improved.")

    misses = [pq for pq in result["per_query"] if pq["rank"] is None]
    if misses:
        print(f"\n⚠️ Missed ({len(misses)}):")
        for m in misses:
            print(f"  '{m['query']}' → expected module {m['expected_module']}")

    print(f"\nHistory: {HISTORY_DIR}")
    sys.exit(1 if regression else 0)


if __name__ == "__main__":
    main()
