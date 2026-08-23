# 119. Hub-and-Spoke Network Design Optimization

## Kerangka Konseptual
Hub-and-Spoke adalah arsitektur jaringan di mana aliran barang/penumpang dikonsolidasikan melalui node perantara (*hub*) untuk mengeksploitasi *economies of scale* pada jalur antar-hub. Konsolidasi memungkinkan kendaraan/layanan berkapasitas besar beroperasi pada tingkat utilisasi tinggi, sehingga biaya per unit jarak turun — tercermin dalam *discount factor* $\alpha < 1$ pada model matematis. Trade-off klasiknya: **rute tidak langsung** (detour via hub) vs **biaya link yang lebih sedikit** (dari $O(n^2)$ direct links menjadi $O(n)$ links ke hub).

Taksonomi utama: (1) *single vs multiple allocation* — apakah satu non-hub node boleh dilayani beberapa hub; (2) *uncapacitated vs capacitated*; (3) *p-hub median* (jumlah hub tetap $p$), *hub location with fixed costs*, dan *hub center/covering*. Model fundamental diperkenalkan O'Kelly (1987); pengembangan modern mencakup *stochastic/robust hubs*, *hub line network*, dan *competition-driven hub location*.

## Formulasi Matematis
### Uncapacitated Single Allocation p-Hub Median (USAHLP)
Diberikan demand matrix $W_{il}$, cost matrix $c_{ik}$, discount antar-hub $\alpha$, serta cost factors collection $\chi$ dan distribution $\delta$:

$$
\begin{aligned}
\min \quad & \sum_{i \in N} \sum_{k \in N} W_{ik} c_{ik} z_{ik} + \sum_{i} \sum_{k} \sum_{m} \sum_{l} W_{il} (\chi c_{ik} + \alpha c_{km} + \delta c_{ml}) z_{ik} z_{lm} \\
\text{s.t.} \quad & \sum_{k \in N} z_{ik} = 1, \quad \forall i \in N \\
& z_{ik} \leq y_k, \quad \forall i,k \in N \\
& \sum_{k \in N} y_k = p \\
& z_{ik}, y_k \in \{0,1\}
\end{aligned}
$$

Suku biaya rute $i \to k \to m \to l$ bernilai $(\chi c_{ik} + \alpha c_{km} + \delta c_{ml})$ dengan $\chi = \delta = 1$ pada kasus standar; biasanya $\alpha \in [0.2, 0.8]$. Struktur bilinear $z_{ik}z_{lm}$ membuat model non-konveks → dilinierisasi dengan variabel aliran $x_{iklm}$ atau reformulasi *flow-based* Campbell.

### Capacitated Multi-Allocation Variant
Node boleh dialokasikan ke beberapa hub dengan batas throughput $\Gamma_k$:
$$\sum_{i \in N} \sum_{j \in N} W_{ij} z_{ik} z_{jm} \leq \Gamma_k y_k, \quad \forall k \in N$$
Untuk ketidakpastian demand, robust counterpart meminimalkan worst-case cost dalam *budget uncertainty set*: $\max_{W \in \mathcal{U}} TC(W)$.

## Metode Solusi
- **Benders Decomposition:** Master menentukan lokasi & alokasi; subproblem LP menghitung routing flow minimum dan menghasilkan optimality cuts.
- **Lagrangian Relaxation:** Relaxing alokasi menghasilkan lower bound kuat; multiplier disubgradient.
- **Tabu Search / Simulated Annealing:** Efektif untuk instance besar ($n > 200$); neighborhood swap allocation + relocate hub.
- **Semidefinite Programming Relaxation:** Bound rapat untuk instance medium; dipadukan branch-and-bound.
- **Branch-and-Price:** Kolom = pola alokasi-rute lengkap per origin.

## Aplikasi Industri
- **Airline Network Design:** Consolidation rute dan frequency planning (FedEx Memphis, UPS Louisville).
- **E-commerce Fulfillment:** Penempatan regional distribution center dengan dua tingkat sortation.
- **Telekomunikasi:** Topologi backbone dengan concentrator sebagai hub digital.
- **Healthcare Systems:** Jaringan referral rumah sakit — pasien kompleks dialirkan ke hub spesialis.
- **Postal Services:** Jaringan surat nasional dengan sorting center malam hari.

## Modul Terkait
- **[114] Two-Echelon VRP** — operasionalisasi harian setelah lokasi hub ditetapkan.
- **[127] Air Cargo Fleet Assignment** — penugasan armada pada jaringan hasil desain hub.
- Modul Facility Location & P-Median — fondasi lokasi fasilitas tanpa konsolidasi.

## Referensi Terverifikasi
- O'Kelly, M. E. (1987). A quadratic integer program for the location of interacting hub facilities. *European Journal of Operational Research*, 32(3), 393–404.
- Alumur, S. A., & Kara, B. Y. (2008). Network hub location problems: The state of the art. *European Journal of Operational Research*, 190(1), 1–21.
- Contreras, I., & O'Kelly, M. (2023). Advances in hub location research: Recent trends and future directions. *Transportation Science*, 57(4), 865–892.
- Li, X., & Zhang, Y. (2024). Robust hub location under demand uncertainty and disruption risks with machine learning predictions. *Computers & Industrial Engineering*, 192, 110245.
