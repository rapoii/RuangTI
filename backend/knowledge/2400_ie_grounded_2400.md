# 2400 — Optimalisasi Jaringan Rantai Pasok Produk Susu Multi-Objektif melalui Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan dengan rantai pasok produk manufaktur konvensional. Sifat *highly perishable* dari susu pasteurisasi, yoghurt, keju, dan turunannya menuntut integritas rantai dingin (*cold chain integrity*) pada rentang suhu 2–6°C sepanjang jaringan distribusi, dengan *shelf-life* yang seringkali tidak melebihi 14–21 hari. Kerusakan mutu dapat terjadi secara kumulatif akibat fluktuasi suhu, waktu transit, dan cross-docking yang tidak efisien. Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menekankan bahwa kerugian tahunan industri dairy global akibat *cold chain failure* dan *product spoilage* mencapai 12–18% dari total produksi, sehingga diperlukan kerangka optimasi jaringan yang tidak hanya meminimumkan biaya logistik, tetapi juga memaksimalkan kesegaran produk dan meminimalkan emisi karbon.

Urgensi pengembangan model multi-objektif ini diperkuat oleh tiga fenomena simultan. Pertama, meningkatnya tuntutan konsumen terhadap produk *fresh* dengan traceability tinggi, sehingga perusahaan harus berinvestasi pada sensor IoT dan cold storage modern. Kedua, tekanan regulasi lingkungan hidup (misalnya EU Green Deal dan ISO 14001) yang mendorong dekarbonisasi rantai pasok. Ketiga, kompleksitas komputasional Mixed-Integer Linear Programming (MILP) ketika jaringan dairy berkembang menjadi ratusan node (peternakan, processing plants, distribution centers, retail outlets). Pada skala ini, solver komersial seperti CPLEX atau Gurobi sering mengalami *computational intractability* dengan waktu CPU melebihi 3.600 detik untuk instance besar.

Untuk menjawab tantangan tersebut, Lead Researchers (2023) mengusulkan framework optimasi multi-objektif berbasis **Benders Decomposition** (BD), sebuah teknik dekomposisi yang dikembangkan oleh Jacques F. Benders (1962) dan telah menjadi *gold standard* untuk masalah optimasi berskala besar. Pendekatan ini memungkinkan partisi masalah MILP menjadi *master problem* (variabel lokasi dan kapasitas) dan *subproblem* (variabel aliran), sehingga mengurangi dimensi masalah secara eksponensial. Studi pendukung dari Zhang, Li, dan Ren (2024) pada jurnal *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) membuktikan efektivitas BD pada jaringan reverse supply chain dengan keputusan kualitas, yang secara konseptual memperkaya kerangka forward dairy network dengan dimensi回收 (*recovery*) dan rework. Integrasi kedua literatur ini memberikan landasan solid untuk membangun modul spesialis Teknik Industri yang membahas optimasi dairy network secara holistik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Parameter Model

Model multi-objektif dairy supply chain network yang dikembangkan oleh Lead Researchers (2023) menggunakan struktur notasi berikut:

**Himpunan (Sets):**
- $I$ = himpunan peternakan (farms), $|I| = i$
- $J$ = himpunan pabrik pengolahan (processing plants), $|J| = j$
- $K$ = himpunan pusat distribusi (distribution centers), $|K| = k$
- $L$ = himpunan titik permintaan (retail outlets), $|L| = l$

**Parameter:**
- $a_i$ = kapasitas penawaran susu mentah di peternakan $i$ (liter/hari)
- $b_j$ = kapasitas pengolahan di pabrik $j$ (liter/hari)
- $c_k$ = kapasitas penyimpanan di distribution center $k$ (liter)
- $d_l$ = permintaan rata-rata di retail outlet $l$ (liter/hari)
- $f_i$ = biaya tetap pembukaan fasilitas di $i$ (Rp)
- $g_j$ = biaya tetap operasional pabrik $j$ (Rp)
- $h_k$ = biaya tetap operasional DC $k$ (Rp)
- $tc_{ij}$ = biaya transportasi per liter dari $i$ ke $j$
- $tc_{jk}$ = biaya transportasi per liter dari $j$ ke $k$
- $tc_{kl}$ = biaya transportasi per liter dari $k$ ke $l$
- $q_{ij}$ = tingkat kesegaran (freshness index) susu saat transit $i \to j$
- $\alpha$ = bobot ekonomi (cost) pada fungsi tujuan pertama
- $\beta$ = bobot kesegaran pada fungsi tujuan kedua
- $\gamma$ = bobot emisi CO₂ pada fungsi tujuan ketiga
- $e_{ij}$ = emisi CO₂ per liter pada segmen $i \to j$ (kg CO₂e)

**Variabel Keputusan:**
- $x_i \in \{0,1\}$ = keputusan pembukaan fasilitas di $i$
- $y_j \in \{0,1\}$ = keputusan pembukaan pabrik di $j$
- $z_k \in \{0,1\}$ = keputusan pembukaan DC di $k$
- $q_{ij} \geq 0$ = volume susu mentah yang dikirim dari $i$ ke $j$
- $r_{jk} \geq 0$ = volume susu olahan dari $j$ ke $k$
- $s_{kl} \geq 0$ = volume produk jadi dari $k$ ke $l$

### 2.2 Formulasi Multi-Objektif

Fungsi tujuan utama menggunakan pendekatan *weighted sum scalarization* dengan parameter kompromi $\lambda_m$:

$$\min Z = \sum_{m \in \{C,F,E\}} \lambda_m \cdot F_m \quad \text{dengan} \quad \sum_{m} \lambda_m = 1, \ \lambda_m \geq 0 \tag{1}$$

**Objektif 1 — Minimum Biaya Total:**

$$F_C = \sum_{i \in I} f_i x_i + \sum_{j \in J} g_j y_j + \sum_{k \in K} h_k z_k + \sum_{i,j} tc_{ij} q_{ij} + \sum_{j,k} tc_{jk} r_{jk} + \sum_{k,l} tc_{kl} s_{kl} \tag{2}$$

**Objektif 2 — Maksimum Kesegaran Kumulatif (sebagai minimasi degradasi):**

$$F_F = \sum_{i,j,k,l} \left(1 - \overline{q}_{ijkl}\right) \cdot s_{kl} \tag{3}$$

dengan $\overline{q}_{ijkl}$ adalah *freshness index* kumulatif yang mengalikan indeks kesegaran setiap segmen.

**Objektif 3 — Minimum Emisi Karbon:**

$$F_E = \sum_{i,j} e_{ij} q_{ij} + \sum_{j,k} e_{jk} r_{jk} + \sum_{k,l} e_{kl} s_{kl} \tag{4}$$

### 2.3 Kendala (Constraints)

**Kendala Kapasitas:**
$$\sum_{j \in J} q_{ij} \leq a_i x_i, \quad \forall i \in I \tag{5}$$
$$\sum_{k \in K} r_{jk} \leq b_j y_j, \quad \forall j \in J \tag{6}$$
$$\sum_{l \in L} s_{kl} \leq c_k z_k, \quad \forall k \in K \tag{7}$$

**Kendala Aliran (Flow Balance):**
$$\sum_{j \in J} q_{ij} \leq a_i x_i \quad \wedge \quad \sum_{k \in K} r_{jk} = \eta \sum_{i \in I} q_{ij} \tag{8}$$

dengan $\eta$ sebagai *conversion ratio* susu mentah ke produk jadi (umumnya 0,85–0,92).

**Kendala Permintaan:**
$$\sum_{k \in K} s_{kl} \geq d_l, \quad \forall l \in L \tag{9}$$

**Kendala Non-Negativitas dan Biner:**
$$q_{ij}, r_{jk}, s_{kl} \geq 0; \quad x_i, y_j, z_k \in \{0,1\} \tag{10}$$

### 2.4 Formulasi Benders Decomposition

Lead Researchers (2023) melakukan dekomposisi sebagai berikut:

**Master Problem (MP):**

$$\min \sum_{i} f_i x_i + \sum_{j} g_j y_j + \sum_{k} h_k z_k + \theta \tag{11}$$

dengan $\theta$ adalah variabel epigrafik untuk lower bound subproblem. MP hanya melibatkan variabel biner lokasi fasilitas.

**Subproblem (SP) untuk fixed $\bar{x}, \bar{y}, \bar{z}$:**

$$\min \sum_{i,j} tc_{ij} q_{ij} + \sum_{j,k} tc_{jk} r_{jk} + \sum_{k,l} tc_{kl} s_{kl} + \beta \sum s_{kl}(1-\bar{q}) + \gamma \sum e \cdot \text{flow} \tag{12}$$

subject to (5)–(10).

**Benders Cut Generation:**

Setiap iterasi menghasilkan *optimality cut* atau *feasibility cut*:

$$\theta \geq \sum_{i} \pi_i (a_i \bar{x}_i - \sum_j q_{ij}) + \sum_j \sigma_j (\cdots) \tag{13}$$

dengan $\pi, \sigma$ adalah dual variables dari subproblem.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis framework Benders Decomposition untuk dairy supply chain network mengikuti SOP berikut, yang diadopsi dari Lead Researchers (2023) dan diperkuat dengan elemen reverse logistics dari Zhang et al. (2024):

**Langkah 1 — Inisialisasi Data Historis**
Kumpulkan data 12 bulan terakhir mengenai kapasitas peternakan, demand musiman, biaya transportasi, dan emisi per segmen. Validasi menggunakan *data quality framework* ISO 8000.

**Langkah 2 — Estimasi Parameter Empiris**
Hitung *freshness degradation rate* menggunakan model Arrhenius:
$$q(t,T) = q_0 \cdot \exp\left(-\frac{E_a}{R}\left(\frac{1}{T_{\text{ref}}} - \frac{1}{T_{\text{actual}}}\right)\right) \tag{14}$$
dengan $E_a$ = energi aktivasi, $R$ = konstanta gas, $T$ = suhu (Kelvin).

**Langkah 3 — Formulasi Master Problem**
Definisikan node jaringan dan bangun MP sesuai Persamaan (11). Terapkan *preprocessing* untuk mengidentifikasi node-node yang *fixed* (yaitu peternakan dengan kapasitas yang pasti dibuka).

**Langkah 4 — Iterasi Benders**
Untuk setiap iterasi $n$:
   1. Selesaikan MP → solusi $(\bar{x}^{(n)}, \bar{y}^{(n)}, \bar{z}^{(n)}, \theta^{(n)})$
   2. Selesaikan SP dengan fixed variabel biner
   3. Jika SP feasible: generate *optimality cut* menggunakan dual prices
   4. Jika SP infeasible: generate *feasibility cut*
   5. Tambahkan cut ke MP dan lanjutkan iterasi

**Langkah 5 — Konvergensi**
Iterasi berhenti ketika *gap* antara upper bound (UB) dan lower bound (LB) kurang dari toleransi $\epsilon$:

$$\frac{UB^{(n)} - LB^{(n)}}{UB^{(n)}} \leq \epsilon, \quad \epsilon = 10^{-3} \tag{15}$$

**Langkah 6 — Validasi Hasil dengan Simulasi Monte Carlo**
Jalankan simulasi dengan 10.000 replikasi menggunakan distribusi demand historis untuk memvalidasi robustnes solusi.

**Langkah 7 — Implementasi Decision Support System (DSS)**
Integrasikan hasil ke dalam dashboard Power BI atau Tableau untuk monitoring real-time oleh supply chain manager.

**Langkah 8 — Integrasi dengan Reverse Logistics** (berdasarkan Zhang et al., 2024)
Tambahkan dimensi *recovery* dengan keputusan kualitas: produk yang terdegradasi sebagian di-reverse ke fasilitas rework, sehingga jaringan forward–reverse terintegerasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Industri Susu Nasional

Kasus ini menggunakan data realistis dari jaringan distribusi dairy di Indonesia dengan karakteristik berikut:

| Parameter | Nilai |
|-----------|-------|
| Jumlah peternakan ($I$) | 5 |
| Jumlah pabrik ($J$) | 3 |
| Jumlah DC ($K$) | 4 |
| Jumlah retail ($L$) | 10 |
| Permintaan total rata-rata | 50.000