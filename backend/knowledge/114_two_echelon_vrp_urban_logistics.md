# 114. Two-Echelon Vehicle Routing Problem (2E-VRP)

## Kerangka Konseptual
Two-Echelon Vehicle Routing Problem (2E-VRP) adalah generalisasi dari Capacitated VRP di mana distribusi barang dilakukan melalui dua lapis transportasi yang beroperasi secara terkoordinasi:
1. **First Echelon:** Kendaraan berkapasitas besar (truk kontainer) mengangkut konsolidasi barang dari depot utama ke *satellite* — fasilitas transfer ringan tanpa penyimpanan jangka panjang.
2. **Second Echelon:** Kendaraan kecil (vans, cargo bikes, EV mikro) mendistribusikan barang dari satellite ke pelanggan akhir di area padat.

Motivasi utamanya adalah *city logistics*: kendaraan besar dilarang atau dikenakan biaya tinggi masuk zona inti kota, sehingga transfer ke armada kecil menurunkan kemacetan, emisi CO₂, dan konflik ruang jalan dengan pejalan kaki. Variasi modern meliputi **2E-VRPTW** (*time windows*), multi-depot, *stochastic demand*, *synchronized* dock scheduling, dan kolaborasi **truck-drone** di mana truk bertindak sebagai mobile depot. Trade-off fundamental: biaya handling tambahan di satellite vs penghematan routing pada second echelon yang lebih rapat secara geografis.

## Formulasi Matematis
Diberikan graf $G = (V, A)$ dengan depot $v_0$, himpunan satellite $S$, pelanggan $C$, demand $d_k$, kapasitas $Q_1$ (echelon 1) dan $Q_2$ (echelon 2):

$$
\begin{aligned}
\min \quad & \sum_{(i,j) \in A_1} c_{ij}^1 x_{ij} + \sum_{(k,l) \in A_2} c_{kl}^2 y_{kl} + \sum_{s \in S} f_s z_s \\
\text{s.t.} \quad & \sum_{j:(i,j) \in A_1} x_{ij} = \sum_{j:(j,i) \in A_1} x_{ji}, \quad \forall i \in N_1 \\
& \sum_{l:(k,l) \in A_2} y_{kl} = 1, \quad \forall k \in C \\
& \sum_{k \in C_s} d_k \leq Q_2 \cdot n_s, \quad \forall s \in S \\
& \sum_{s \in S} w_{ks} = d_k, \quad \forall k \in C \\
& x_{ij}, y_{kl}, z_s \in \{0,1\}
\end{aligned}
$$

di mana $x_{ij}$ = arc echelon pertama, $y_{kl}$ = arc echelon kedua, $z_s$ = aktivasi satellite, $w_{ks}$ = aliran barang untuk pelanggan $k$ via satellite $s$, dan $f_s$ = fixed operating cost satellite. Model bersifat **NP-hard** karena mengandung VRP sebagai kasus khusus ($|S|=1$, satu tipe kendaraan). Batasan sinkronisasi waktu di satellite:

$$t_s^{arrival} + \tau_s^{handling} \leq t_s^{departure}$$

menjamin konsistensi temporal antar echelon — pelanggarannya memicu penundaan berantai (*delay propagation*) pada seluruh rute second echelon.

## Metode Solusi
- **Branch-and-Cut:** Valid inequalities keluarga *rounded capacity cuts*, *framed capacity*, dan *connectivity cuts* untuk memperketat LP relaxation.
- **Set Partitioning via Two-Stage Enumeration:** Enumerasi rute second echelon feasible → agregasi per satellite → selesaikan master problem eksak (Baldacci-style).
- **Large Neighborhood Search (LNS):** Operator *destroy* (random removal, satellite removal, route removal) dipadukan *repair* greedy/regret-$k$; efektif untuk instance hingga 200+ pelanggan.
- **Column Generation:** Rute second echelon dibangkitkan sebagai kolom dengan pricing problem berupa ESPPRC (elementary shortest path with resource constraints).
- **Matheuristics:** Dekomposisi iteratif — metaheuristic menentukan struktur satellite, MIP solver menyempurnakan assignment lokal dalam *sliding window* waktu komputasi.

## Aplikasi Industri
- **City Logistics:** Skema ZULU Paris, Amsterdam cargo-bike hubs, dan low emission zone Jakarta.
- **E-commerce Last-Mile:** Jaringan micro-hub dengan delivery locker sebagai satellite statik.
- **Truck-Drone Collaboration:** Truk sebagai mobile depot; drone melayani pelanggan tersebar dengan batasan endurance baterai.
- **Armada Listrik:** 2E-VRP-EV menambahkan constraint State-of-Charge dan lokasi stasiun charging pada second echelon.
- **Rantai Dingin:** Satellite berpendingin menjaga cold chain untuk produk segar di pusat kota.

## Modul Terkait
- **[119] Hub-and-Spoke Network Design** — penentuan lokasi satellite/hub pada level strategis.
- **[131] Reverse Cross-Docking** — arsitektur transfer serupa untuk aliran retur.
- **Modul VRP klasik & Green Logistics** — fondasi single-echelon dan metrik emisi.

## Referensi Terverifikasi
- Crainic, T. G., Ricciardi, N., & Storchi, G. (2009). Models for evaluating and planning city logistics systems. *Transportation Science*, 43(2), 255–276.
- Toth, P., & Vigo, D. (Eds.). (2014). *Vehicle Routing: Problems, Methods, and Applications* (2nd ed.). SIAM.
- Baldacci, R., Bodin, L., & Mingozzi, A. (2023). Exact algorithms for the two-echelon vehicle routing problem with time windows. *European Journal of Operational Research*, 308(2), 621–639.
- Li, Y., Lim, A., & Oon, W. C. (2024). A hybrid metaheuristic for the two-echelon electric vehicle routing problem with satellite synchronization. *Computers & Operations Research*, 163, 106512.
- Zhou, X., & Wang, H. (2025). Dynamic two-echelon routing with real-time demand updates in urban logistics. *Transportation Research Part E*, 193, 104028.
