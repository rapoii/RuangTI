# 127. Air Cargo Fleet Assignment, Aircraft Routing & Crew Pairing

## Kerangka Konseptual
Operasi kargo udara melibatkan tiga masalah optimasi berjenjang yang saling bergantung:
1. **Fleet Assignment (FAM):** Menetapkan tipe pesawat ($k \in K$) ke setiap flight leg $(r \in R)$ dengan mempertimbangkan kapasitas payload, jangkauan, dan biaya operasi.
2. **Aircraft Routing:** Merangkai flight legs menjadi urutan rotasi per tail-number individual dengan memenuhi jendela maintenance checks.
3. **Crew Pairing:** Menyusun pairing (urutan duty multi-hari) legal terhadap regulasi jam terbang FAA/EASA, lalu *crew assignment* mengalokasikan awak spesifik.

Hierarki ini bersifat iteratif: keputusan FAM menentukan struktur waktu yang membatasi routing, dan feasibility crew menjadi batasan akhir. Pada era modern, integrasi *belly cargo* (kapasitas bagasi penerbangan penumpang), *e-commerce air freight* yang fluktuatif, dan ketidakpastian cuaca menuntut model robust/stochastic. Trade-off sentral kargo: **payload-range** — muatan maksimum hanya tercapai pada range pendek; melebihi titik tertentu muatan harus dikorbankan demi bahan bakar.

## Formulasi Matematis
### Fleet Assignment Model (FAM)
$$
\begin{aligned}
\max \quad & \sum_{r \in R} \sum_{k \in K} p_{rk}\, x_{rk} - \sum_{k \in K} c_k\, n_k \\
\text{s.t.} \quad & \sum_{k \in K} x_{rk} = 1, \quad \forall r \in R \quad (\text{cover}) \\
& \sum_{r \in R} d_r\, x_{rk} \leq C_k\, n_k, \quad \forall k \in K \quad (\text{fleet count}) \\
& x_{rk} \in \{0, 1\}, \quad n_k \in \mathbb{Z}_+
\end{aligned}
$$
dengan $p_{rk}$ = profit leg $r$ oleh tipe $k$, $d_r$ = demand kargo, $C_k$ = kapasitas ton. Varian time-space network menambahkan *balance constraint* per station per timeline:
$$\sum_{r \in IN(i,t)} x_{rk} + g_{i,k,t}^{before} = \sum_{r \in OUT(i,t)} x_{rk} + g_{i,k,t}^{after}$$

### Crew Pairing — Set Partitioning/Covering
$$
\begin{aligned}
\min \quad & \sum_{p \in P} c_p\, y_p \\
\text{s.t.} \quad & \sum_{p \in P} a_{fp}\, y_p = 1, \quad \forall f \in F \\
& y_p \in \{0, 1\}
\end{aligned}
$$
$|P|$ mencapai jutaan pairing → diselesaikan **column generation**: pricing problem merentangkan rute di graf time-space dengan resource constraints (max duty 14 jam, min rest 10 jam, max block time bulanan).

### Constraint Khusus Kargo
- **Payload-Range Tradeoff:** $\sum_i w_i + w_{fuel} \leq MTOW$, dengan fuel konveks terhadap payload.
- **Time Windows:** Slot bandara dan koneksi ground handling (offload–buildup 2–4 jam).
- **Maintenance Routing:** A/B/C-check setelah threshold flight hours.
- **DG Regulations:** Barang berbahaya punya segregasi antar kompartemen.
- **Chargeable Weight:** Tarif mengikuti $\max(w_{actual}, w_{volumetric})$, $w_{vol} = \text{volume}/6000$ kg/m³, sehingga profit $p_{rk}$ memperhitungkan densitas muatan per leg.

## Metode Solusi
- **Branch-and-Price:** Standar de facto untuk crew pairing dan aircraft routing.
- **Benders Decomposition:** Master fleet assignment; subproblem cek feasibility routing/crew.
- **Large Neighborhood Search:** Untuk integrated fleet-routing pada disruption recovery.
- **Stochastic Programming / Robust Optimization:** Buffer schedule terhadap delay propagation; ML-based disruption prediction.

## Aplikasi Industri
- Integrator ekspres (FedEx/DHL): night hub sortation + fleet assignment terintegrasi.
- Belly-cargo optimization pada airline campuran penumpang-kargo.
- Recovery operations: re-fleeting real-time saat bandara tutup cuaca.
- Perencanaan armada freighter untuk koridor e-commerce Asia–Eropa.

## Modul Terkait
- **[119] Hub-and-Spoke Network Design** — desain jaringan hulu sebelum assignment.
- Modul Crew Scheduling & Column Generation — detail algoritma pricing.
- Modul Stochastic Programming — framework uncertainty demand.

## Referensi Terverifikasi
- Barnhart, C., Johnson, E. L., Nemhauser, G. L., Savelsbergh, M. W. P., & Vance, P. H. (1998). Branch-and-price: Column generation for solving huge integer programs. *Operations Research*, 46(3), 316–329.
- Kaspar, M., & Haferkorn, F. (2023). Integrated fleet assignment and aircraft routing for air cargo networks with belly capacity. *Journal of Air Transport Management*, 112, 102478.
- Gao, C., & Li, Y. (2024). Robust crew pairing under uncertainty: A column generation approach with machine learning-based disruption prediction. *Computers & Operations Research*, 165, 106612.
- Zhu, B., & Fan, W. (2025). Dynamic air cargo network design with multimodal integration and stochastic demand. *Transportation Research Part E*, 194, 104156.
