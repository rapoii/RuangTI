"""
Orchestrator for expanding RuangTI Knowledge Base to 5,000 modules in bounded batches.
Each batch:
1. Harvests verified novel peer-reviewed papers across 15 IE domains.
2. Validates structure, KaTeX, and sections using deterministic quality validator.
3. Records metadata into KnowledgeRegistry (zero duplicate guaranteed).
4. Synchronizes with RAG FTS5 and sqlite-vec embeddings.
5. Runs RAG benchmark gate every checkpoint.
"""

import os
import sys
import time
import subprocess

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(CURRENT_DIR)
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)


from backend.app.rag.registry import KnowledgeRegistry
from scripts.produce_grounded_modules import produce_modules, IE_DOMAINS

TARGET_MODULES = 5000
BATCH_SIZE = 50
CHECKPOINT_INTERVAL = 250


def get_current_module_count():
    import sqlite3
    registry = KnowledgeRegistry()
    with sqlite3.connect(registry.db_path) as conn:
        row = conn.execute("SELECT COUNT(*) FROM knowledge_registry").fetchone()
    return row[0] if row else 0



def run_batch(domain: str, limit: int):
    print(f"\n=======================================================")
    print(f"🚀 Running Batch: Domain '{domain}' | Limit: {limit}")
    print(f"=======================================================")
    res = produce_modules(limit=limit, domain_filter=domain, dry_run=False)

    print(f"Batch Done: Generated {res['generated']} novel modules.")
    return res['generated']


def sync_rag():
    print("\n[RAG] Synchronizing RAG index...")
    # Provide generous timeout and enable multithreading for vector embedding
    env = dict(os.environ)
    env["FASTEMBED_THREADS"] = "8"
    ret = subprocess.run([sys.executable, "sync_rag.py", "-v"], capture_output=True, text=True, timeout=1800, env=env)
    print(ret.stdout[-300:] if ret.stdout else "")
    if ret.stderr:
        print("[RAG Error]:", ret.stderr[-300:])



def run_benchmark():
    print("\n[BENCHMARK] Running RAG retrieval benchmark...")
    ret = subprocess.run([sys.executable, "scripts/bench_rag.py"], capture_output=True, text=True, timeout=300)
    print(ret.stdout)
    return ret.returncode == 0


def main():
    initial_count = get_current_module_count()
    print(f"Current total modules in registry: {initial_count}")
    print(f"Target: {TARGET_MODULES} modules (Remaining: {TARGET_MODULES - initial_count})")

    domain_idx = 0
    num_domains = len(IE_DOMAINS)
    current = initial_count

    while current < TARGET_MODULES:
        needed = TARGET_MODULES - current
        batch_limit = min(BATCH_SIZE, needed)
        domain = IE_DOMAINS[domain_idx % num_domains]
        domain_idx += 1

        generated = run_batch(domain, batch_limit)
        current = get_current_module_count()
        print(f"Progress: {current}/{TARGET_MODULES} modules ({(current/TARGET_MODULES)*100:.2f}%)")

        if current % CHECKPOINT_INTERVAL < BATCH_SIZE or current >= TARGET_MODULES:
            sync_rag()
            passed = run_benchmark()
            if not passed:
                print("⚠️ Benchmark regression detected at checkpoint! Pausing for review.")
                break


if __name__ == "__main__":
    main()
