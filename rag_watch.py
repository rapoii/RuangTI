import sqlite3, time
import sqlite_vec

target = 5375
last = -1
while True:
    try:
        conn = sqlite3.connect('backend/data/ruangti_rag.db', timeout=2)
        conn.enable_load_extension(True)
        sqlite_vec.load(conn)
        conn.enable_load_extension(False)
        n = conn.execute("SELECT COUNT(*) FROM rag_vec").fetchone()[0]
        conn.close()
        if n != last:
            print(f"[{time.strftime('%H:%M:%S')}] rag_vec: {n}/{target}", flush=True)
            last = n
        if n >= target:
            print("INDEXING COMPLETE", flush=True)
            break
    except Exception as e:
        print(f"watch err: {e}", flush=True)
    time.sleep(30)
