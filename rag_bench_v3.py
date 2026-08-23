# RuangTI Hybrid RAG Benchmark v3
# Set A: technical queries (FTS5-friendly) | Set B: casual paraphrase (semantic-only territory)
# Gold labels VERIFIED against actual file contents (head -1 of each module)
import sys, time

sys.path.insert(0, 'backend')
from app.rag.engine import rag_engine

SET_A = [
    ("bagaimana cara menghitung waktu baku?", [3, 413]),
    ("hitung EOQ untuk demand 12000 unit dan ordering cost 50000", [5, 4]),
    ("jelaskan langkah VSM value stream mapping untuk hilangkan pemborosan", [11, 413]),
    ("apa itu REBA dan kapan dipakai untuk postur kerja?", [89]),
    ("kontrol statistik proses p chart x-bar R", [2]),
    ("line balancing station assembly dengan takt time", [9]),
    ("perencanaan agregat produksi LP perencanaan kapasitas", [408]),
    ("uji tarik material baja ASTM E8 stress strain", [429]),
    ("diagram fase fe-fe3c austenit perlit martensit", [429]),
    ("etika keinsinyuran PII NSPE whistleblowing", [433]),
    ("TKDN barang jasa konstruksi perhitungan BMP", [434]),
    ("menggambar teknik proyeksi potongan ISO 128", [426]),
    ("last planner system ppc lean construction", [735]),
    ("cbam carbon border adjustment embedded emissions", [736]),
    ("togaf adm enterprise architecture itil", [94]),
    ("fuzzy ahp vikor ranking alternatif pemasok", [192]),
    ("monte carlo simulasi varians reduksi antithetic", [209, 306]),
    ("weibull reliability beta eta mtbf", [414]),
    ("kraljic matrix strategic bottleneck leverage", [125]),
    ("silver meal heuristic lot sizing dinamis", [352]),
]

SET_B = [
    ("berapa durasi yang wajar untuk satu operasi mesin?", [3, 413]),        # waktu baku
    ("kenapa pesanan kita banyak tapi stoknya sering habis?", [4, 5]),       # inventory/EOQ
    ("cara ngurangin pemborosan di jalur produksi", [11, 413, 7]),           # lean/VSM/waste
    ("pekerja sering ngeluh pegang barang susah banget posisinya", [89, 8]), # ergonomi
    ("kayak gimana caranya mastiin produk nggak cacat pas keluar pabrik?", [2]),   # SPC/QC
    ("mesin produksi harusnya jalan berapa unit per jam biar target tercapai?", [9, 408]),  # takt
    ("pabrik saya mau bayar lebih murah buat bahan baku, belinya gimana yang optimal?", [5, 4]),  # EOQ
    ("gimana cara hitung biaya karbon dari luar negeri?", [736]),            # CBAM
    ("proyek gedung kok rencananya selalu molor ya?", [735]),                # LPS
    ("sistem IT perusahaan kacau, strukturnya nggak jelas", [94]),           # TOGAF
]


def evaluate(bench, label, top_k=3):
    k = top_k
    hits = 0
    rr_sum = 0.0
    latencies = []
    misses = []
    for q, golds in bench:
        t0 = time.perf_counter()
        res = rag_engine.search(q, top_k=top_k)
        dt = (time.perf_counter() - t0) * 1000
        latencies.append(dt)
        gold_str = {str(g).zfill(3) for g in golds}
        got = set()
        rr = 0.0
        for rank, r in enumerate(res[:top_k], start=1):
            mid = str(r.get('module_id', '')).zfill(3)
            got.add(mid)
            if mid in gold_str and rr == 0.0:
                rr = 1.0 / rank
        if got & gold_str:
            hits += 1
        else:
            misses.append((q[:55], [str(r.get('module_id')) for r in res[:top_k]]))
        rr_sum += rr
    n = len(bench)
    print(f"\n=== [{label}] Hit@{k}: {hits}/{n} ({hits/n*100:.0f}%)  MRR: {rr_sum/n:.3f} ===")
    ls = sorted(latencies)
    print(f"avg latency: {sum(ls)/len(ls):.1f}ms | p95: {ls[int(0.95*n)]:.1f}ms")
    for q, g in misses:
        print(f"  MISS: {q} -> got {g}")


if __name__ == '__main__':
    evaluate(SET_A, "Set A Teknis")
    evaluate(SET_B, "Set B Paraphrase Santai")
