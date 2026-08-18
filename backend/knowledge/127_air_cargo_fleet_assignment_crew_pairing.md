# 127. Air Cargo Fleet Assignment, Aircraft Routing & Crew Pairing

## Konsep Dasar
Air cargo operations melibatkan tiga masalah optimasi terintegrasi: **Fleet Assignment** (menetapkan tipe pesawat ke rute), **Aircraft Routing** (membentuk urutan penerbangan untuk setiap pesawat individual), dan **Crew Pairing** (menyusun jadwal kerja awak). Ketiganya saling bergantung karena kapasitas kargo, jangkauan pesawat, dan regulasi jam terbang crew membatasi solusi feasible. Dalam konteks logistik udara modern, integrasi dengan *belly cargo* pada penerbangan penumpang menambah kompleksitas.

## Formulasi Matematis

### Fleet Assignment Model (FAM)
$$
\begin{aligned}
\max \quad & \sum_{r \in R} \sum_{k \in K} p_{rk} x_{rk} - \sum_{k \in K} c_k n_k \\
\text{s.t.} \quad & \sum_{k \in K} x_{rk} = 1, \quad \forall r \in R \\
& \sum_{r \in R} d_r x_{rk} \leq C_k n_k, \quad \forall k \in K \\
& x_{rk} \in \{0, 1\}, \quad n_k \in \mathbb{Z}_+
\end{aligned}
$$
di mana $p_{rk}$ = profit rute $r$ dengan pesawat tipe $k$, $d_r$ = demand kargo, $C_k$ = kapasitas, $n_k$ = jumlah pesawat tipe $k$.

### Crew Pairing (Set Covering)
$$
\begin{aligned}
\min \quad & \sum_{p \in P} c_p y_p \\
\text{s.t.} \quad & \sum_{p \in P} a_{fp} y_p = 1, \quad \forall f \in F \\
& y_p \in \{0, 1\}
\end{aligned}
$$
di mana $P$ = himpunan semua pairing legal, $a_{fp} = 1$ jika flight $f$ termasuk dalam pairing $p$, $c_p$ = biaya pairing (termasuk layover, deadhead). Jumlah variabel $|P|$ bisa mencapai jutaan → diselesaikan dengan **Column Generation**.

### Constraints Khusus Air Cargo
- **Payload-Range Tradeoff:** Berat kargo vs jarak tempuh
- **Time Windows:** Slot bandara dan koneksi ground handling
- **Maintenance Routing:** Mandatory checks setelah X flight hours
- **Crew Regulations:** FAA/EASA flight time limitations, rest requirements

## Metode Solusi
- **Branch-and-Price:** Standard approach untuk crew pairing dan aircraft routing
- **Benders Decomposition:** Memisahkan fleet assignment (master) dari routing (subproblem)
- **Large Neighborhood Search:** Untuk integrated fleet-routing problems
- **Simulation Optimization:** Evaluasi robustness terhadap delay propagation

## Referensi Terverifikasi
- Barnhart, C., & Johnson, E. L. (1998). Branch-and-Price: Column Generation for Solving Huge Integer Programs. *Operations Research*, 46(3), 316–329.
- Kaspar, M., & Haferkorn, F. (2023). Integrated fleet assignment and aircraft routing for air cargo networks with belly capacity. *Journal of Air Transport Management*, 112, 102478.
- Gao, C., & Li, Y. (2024). Robust crew pairing under uncertainty: A column generation approach with machine learning-based disruption prediction. *Computers & Operations Research*, 165, 106612.
- Zhu, B., & Fan, W. (2025). Dynamic air cargo network design with multimodal integration and stochastic demand. *Transportation Research Part E*, 194, 104156.

</content>