# 139. Shifting Bottleneck Heuristic (SBH) untuk Job-Shop Scheduling

## Deskripsi Modul
Modul ini membahas *Shifting Bottleneck Heuristic* (SBH), salah satu metode dekomposisi paling berpengaruh untuk menyelesaikan *Job-Shop Scheduling Problem* (JSP). Dikembangkan oleh Adams, Balas, dan Zawack (1988), SBH memecah masalah JSP yang kompleks menjadi serangkaian sub-masalah single-machine scheduling dengan mengidentifikasi mesin bottleneck secara iteratif dan menjadwalkan ulang mesin yang sudah dijadwalkan sebelumnya.

## Konsep Inti

### 1. Filosofi Dekomposisi Bottleneck
Prinsip dasar SBH adalah bahwa makespan ($C_{max}$) dari job-shop ditentukan oleh mesin bottleneck. Dengan mengoptimalkan urutan pada mesin bottleneck terlebih dahulu, kita dapat mengurangi $C_{max}$ global secara signifikan.

**Algoritma SBH:**
1. Hitung lower bound awal berdasarkan longest path di graph disjunctive tanpa machine arcs.
2. Identifikasi mesin bottleneck: mesin dengan maximum lateness ($L_{max}$) terbesar jika dijadwalkan secara independen.
3. Selesaikan sub-masalah single-machine untuk mesin bottleneck tersebut (minimizing $L_{max}$).
4. Tambahkan conjunctive arcs hasil scheduling ke graph disjunctive.
5. Re-optimize mesin yang sudah dijadwalkan sebelumnya (*shifting*).
6. Ulangi sampai semua mesin terjadwal atau tidak ada perbaikan.

### 2. Graph Disjunctive Representation
JSP dimodelkan sebagai graph disjunctive $G = (V, C \cup D)$:
- **Conjunctive Arcs ($C$):** Precedence constraints antar operasi dalam satu job
- **Disjunctive Arcs ($D$):** Machine capacity constraints (harus diorientasikan)

Makespan minimum:
$$ C_{max}^* = \min_{\sigma \in \Sigma} \left\{ \max_{v \in V} \{ r_v + p_v + q_v \} \right\} $$

Dimana $r_v$ = release time, $q_v$ = tail length (longest path dari $v$ ke sink).

### 3. Sub-Masalah Single-Machine
Untuk setiap mesin $k$, sub-masalahnya adalah meminimalkan maximum lateness:
$$ L_{max}^{(k)} = \max_{j \in J_k} \{ C_j - d_j \} $$

Dimana:
- $r_j$: earliest start time (dihitung dari conjunctive arcs saat ini)
- $d_j$: due date = $r_j + q_j$ (tail-based deadline)
- $p_j$: processing time pada mesin $k$

Mesin dengan $L_{max}^{(k)}$ terbesar adalah bottleneck saat ini.

### 4. Re-Optimization (Shifting)
Setelah menambahkan sequencing decisions untuk mesin bottleneck baru, mesin yang sudah dijadwalkan sebelumnya harus dicek ulang karena penambahan arcs baru mungkin mengubah critical path. Ini disebut *shifting* — hence the name "Shifting Bottleneck."

**Kompleksitas:** Setiap iterasi memerlukan penyelesaian hingga $m$ sub-masalah single-machine. Total iterasi $\leq m$.

## Formulasi Matematis Lanjutan

### Lower Bound Calculation
$$ LB = \max \left\{ \max_{j} \sum_{k=1}^{m} p_{jk}, \quad \max_{k} \sum_{j=1}^{n} p_{jk} \right\} $$

### Carlier's Algorithm untuk Single-Machine
Sub-problem diselesaikan menggunakan branch-and-bound Carlier (1982) atau Schrage's heuristic:
1. Schedule jobs by non-decreasing $r_j$
2. Jika terjadi idle time, cek apakah ada job dengan $q_j$ besar yang tertunda
3. Branch pada job yang menyebabkan delay

### Improved SBH Variants
- **SB-II:** Menggunakan more accurate subproblem solutions
- **Tabu Search Hybrid:** SBH sebagai initial solution generator
- **Constraint Programming Integration:** CP untuk subproblems yang lebih tight

## Aplikasi Industri Modern

### 1. Semiconductor Wafer Fabrication
- Re-entrant flows membuat bottleneck shifting sangat dinamis
- Cluster tools dengan parallel chambers
- Setup times yang sequence-dependent

### 2. Aerospace Job Shops
- High-value parts dengan tight tolerances
- Resource constraints (fixtures, operators)
- Due date driven production

### 3. Integration dengan Industry 4.0
- Real-time bottleneck detection via IoT sensors
- Dynamic re-scheduling ketika machine breakdown terdeteksi
- Digital twin simulation untuk what-if analysis

## Studi Kasus: Workshop MRO Pesawat
Sebuah workshop Maintenance, Repair & Overhaul memiliki 8 mesin dan 25 jobs dengan routing berbeda. SBH diterapkan:
- Iterasi 1: CNC Milling #3 identified as bottleneck ($L_{max}=45$ min)
- Iterasi 2: Heat Treatment furnace becomes new bottleneck after milling optimization
- Iterasi 3: Inspection station requires re-sequencing
- Hasil: Makespan berkurang 22% vs dispatching rules tradisional

## Tantangan Implementasi
1. **Computational Cost:** Subproblem NP-hard sendiri untuk general case
2. **Tie-Breaking:** Multiple machines dengan similar $L_{max}$ memerlukan secondary criteria
3. **Setup Times:** Standard SBH tidak menangani sequence-dependent setups langsung
4. **Parallel Machines:** Extension ke identical/unrelated parallel machines diperlukan

## Referensi
1. **Adams, J., Balas, E., & Zawack, D.** (1988). "The Shifting Bottleneck Procedure for Job Shop Scheduling". *Management Science*, 34(3), 391-401. (Paper seminal SBH).
2. **Pinedo, M. L.** (2022). *Scheduling: Theory, Algorithms, and Systems* (6th ed.). Springer. (Bab 7: Job Shop Scheduling).
3. **Carlier, J.** (1982). "The one-machine sequencing problem". *European Journal of Operational Research*, 11(1), 42-47.
4. **Bülbül, K.** (2023). "A shifting bottleneck heuristic for job shop scheduling with sequence-dependent setup times". *Computers & Operations Research*, 152, 106138.
5. **Zhang, Y., et al.** (2024). "Digital-twin-driven adaptive scheduling for flexible job shops using improved shifting bottleneck procedure". *Journal of Manufacturing Systems*, 73, 215-232.

## Kata Kunci
Shifting Bottleneck Heuristic, SBH, Job-Shop Scheduling, Disjunctive Graph, Bottleneck Identification, Maximum Lateness, Carlier Algorithm, Decomposition Method, Re-optimization, Critical Path, Single-Machine Scheduling, JSP.

</content>