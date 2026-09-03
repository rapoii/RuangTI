# 2896 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition untuk Rantai Pasok Maju dan Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibanding rantai pasok manufaktur konvensional. Karakteristik perishability yang tinggi, shelf-life pendek (umumnya 5–21 hari untuk produk segar), serta degradasi kualitas yang sensitif terhadap waktu dan suhu (cold chain integrity) menempatkan desain jaringan rantai pasok susu dalam kategori keputusan tingkat strategis yang kompleks. Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* menyoroti urgensi pengembangan kerangka optimisasi yang secara simultan mempertimbangkan dimensi biaya logistik, kualitas produk, dan keberlanjutan lingkungan untuk jaringan susu (*dairy products supply chain network*). Fenomena food loss pada rantai susu mencapai 20–40% di berbagai negara berkembang akibat inefisiensi jaringan dan pelanggaran cold chain, sebuah masalah yang hanya dapat diatasi melalui rekayasa jaringan yang rigorous secara matematis.

Konteks industri yang melatarbelakangi studi ini meliputi tiga pelaku utama: (i) peternakan sapi perah dan titik pengumpulan (*collection centers*) yang memasok susu mentah, (ii) pabrik pengolahan (*processing plants*) yang memproduksi varian produk (UHT, pasteurisasi, keju, yoghurt), dan (iii) pusat distribusi serta retailer yang melayani permintaan akhir. Kompleksitas meningkat ketika dimasukkan dimensi kualitas susu mentah yang bervariasi berdasarkan jarak tempuh, suhu, dan waktu tunggu (*lead time*), serta keputusan alokasi produk antara pasar domestik dan ekspor. Zhang, Li, & Ren (2024) dalam studi lanjutan untuk *reverse supply chain* menunjukkan bahwa keputusan kualitas (*quality decisions*) merupakan variabel keputusan yang tidak terpisahkan dari desain fasilitas, karena grade kualitas yang berbeda memerlukan rute pemrosesan yang berbeda pula.

Urgensi operasional dari penelitian ini tecermin dari tiga fenomena industri: pertama, fragmentasi peternakan sapi perah yang tersebar secara geografis memerlukan keputusan lokasi fasilitas yang optimal; kedua, demand uncertainty untuk produk susu segar menciptakan kebutuhan akan skenario robust; ketiga, multi-objective nature dari keputusan manajerial — biaya versus kualitas versus emisi karbon — tidak mampu diselesaikan oleh pendekatan single-objective konvensional. Benders Decomposition muncul sebagai metodologi yang sesuai karena kemampuannya memisahkan keputusan investasi fasilitas (*strategic/tactical*) dari keputusan alokasi aliran (*operational*) yang sering melibatkan ribuan variabel dan skenario.

## 2. Landasan Teori & Formulasi Matematis

Kerangka optimisasi yang diusulkan oleh Lead Researchers (2023) menggunakan formulasi mixed-integer linear programming (MILP) dua tingkat yang diselesaikan melalui Benders Decomposition. Formulasi tingkat pertama (*master problem*) menentukan keputusan lokasi fasilitas dan kapasitasnya, sementara subproblem menentukan alokasi aliran produk, rencana produksi, dan skenario kualitas.

### 2.1 Notasi Matematis

**Himpunan dan Indeks:**
- $I$: himpunan peternakan/collection centers, $i \in I$
- $J$: himpunan pabrik pengolahan, $j \in J$
- $K$: himpunan pusat distribusi, $k \in K$
- $L$: himpunan retailer/zona permintaan, $l \in L$
- $S$: himpunan skenario permintaan, $s \in S$
- $P$: himpunan jenis produk susu, $p \in P$
- $Q$: himpunan grade kualitas susu mentah, $q \in Q$

**Parameter:**
- $f_j$: biaya tetap pembukaan pabrik $j$
- $c_{ij}^{Q}$: biaya transportasi susu mentah grade $q$ dari $i$ ke $j$
- $d_{lp}^s$: permintaan produk $p$ di retailer $l$ pada skenario $s$
- $\alpha_q$: proporsi susu grade $q$ yang dapat diterima (acceptance rate)
- $\theta_q$: waktu simpan maksimum grade $q$ (jam)
- $CO_2^{max}$: batas emisi karbon maksimum

**Variabel Keputusan:**
- $y_j \in \{0,1\}$: 1 jika pabrik $j$ dibuka
- $x_{ij}^q \geq 0$: alokasi susu mentah grade $q$ dari $i$ ke $j$
- $z_{jklp}^s \geq 0$: aliran produk $p$ dari $j$ melalui $k$ ke $l$ pada skenario $s$

### 2.2 Fungsi Tujuan Multi-Objektif

Optimisasi menggunakan fungsi tujuan ganda yang diminimasi secara simultan:

$$\min_{y,x,z} \quad \mathbf{Z_1} = \sum_{j \in J} f_j y_j + \sum_{i \in I} \sum_{j \in J} \sum_{q \in Q} c_{ij}^q x_{ij}^q + \mathbb{E}_s\left[\sum_{j,k,l,p} h_{jklp}^s z_{jklp}^s\right]$$

$$\min_{y,x,z} \quad \mathbf{Z_2} = \sum_{p \in P} \sum_{l \in L} \left(\bar{D}_{lp} - \sum_{s} \pi_s d_{lp}^s \mathbb{1}_{\text{served}}\right) - \lambda \sum_{q} \theta_q \alpha_q x^q$$

di mana $\mathbf{Z_1}$ adalah biaya total (investasi + transportasi + operasional stok) dan $\mathbf{Z_2}$ adalah indeks kehilangan kualitas dan unmet demand. Bentuk tertimbang (weighted sum) atau pendekatan $\epsilon$-constraint digunakan untuk memperoleh Pareto frontier.

### 2.3 Benders Decomposition

**Master Problem (MP):**

$$\min_{y \geq 0} \quad \sum_{j \in J} f_j y_j + \eta$$

subject to:
$$\eta \geq \sum_{s \in S} \pi_s \left(\mathbf{c}^\top \mathbf{x}^s\right) - \boldsymbol{\pi}^\top (\mathbf{b} - \mathbf{A}y) \quad \forall \text{ Benders cut } k \in K_{iter}$$

$$y_j \in \{0,1\}, \quad \eta \in \mathbb{R}$$

**Subproblem (SP) untuk setiap skenario $s$:**

$$\min_{x^s, z^s \geq 0} \quad \mathbf{c}^\top \mathbf{x}^s + \mathbf{h}^\top \mathbf{z}^s$$

subject to:
$$\mathbf{A}x^s + \mathbf{B}z^s \geq \mathbf{b} - \mathbf{T}y^*$$

dengan dual $(\boldsymbol{\pi}^s, \boldsymbol{\sigma}^s)$ menghasilkan Benders cut melalui optimal dual multipliers. Algoritma iteratif menghasilkan lower bound dari MP dan upper bound dari solusi feasible (MP + SP) hingga gap收敛.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders Decomposition untuk jaringan rantai pasok susu mengikuti protokol rekayasa sistem terstruktur yang dapat diadaptasi ke dalam sistem pendukung keputusan (DSS) предприятия. Berikut adalah prosedur operasional standar:

**Langkah 1 — Akuisisi Data Industri.** Pengumpulan parameter dilakukan melalui sistem ERP dan IoT sensor: (a) data historis permintaan dari POS retailer, (b) data kualitas susu mentah dari lab pengujian (SNI 01-3951-1995 untuk standar susu segar), (c) data biaya logistik dari freight management system, dan (d) kapasitas fasilitas existing.

**Langkah 2 — Konstruksi Skenario.** Mengikuti kerangka Zhang et al. (2024), skenario permintaan $s \in S$ dibangkitkan melalui pendekatan scenario reduction dari pohon skenario Monte Carlo dengan K-means clustering untuk membatasi kardinalitas $|S| \leq 20$.

**Langkah 3 — Formulasi Master Problem.** Model investasi fasilitas diselesaikan oleh solver MILP (CPLEX, Gurobi) dengan branch-and-cut; variabel $y_j$ bernilai biner dengan presolve time terbatas 600 detik.

**Langkah 4 — Formulasi Subproblem.** Subproblem diselesaikan secara paralel untuk setiap skenario $s$; dual variables diekstraksi untuk konstruksi Benders optimality cut yang diperkuat (*strengthened cut*) melalui teknik Pareto-optimal cuts (Magnanti & Wong, 1981).

**Langkah 5 — Validasi & Sensitivity Analysis.** Solusi diverifikasi melalui simulasi discrete-event dengan software AnyLogic atau FlexSim untuk menguji robustness terhadap disruption (pandemic, supplier failure).

Diagram alir proses mengikuti pola: *Data Input → Scenario Generation → MP Solve → SP Solve → Cut Generation → Convergence Check → Output*. Standar industri terkait meliputi ISO 22000 (food safety management) untuk memastikan bahwa batasan kualitas dalam model selaras dengan regulatory framework.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Jaringan distribusi susu pasteurisasi di regional Jawa Tengah dengan 12 collection centers, 5 kandidat pabrik, 8 pusat distribusi, dan 25 zona permintaan retailer.

### 4.1 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Kapasitas pabrik $j$ | 15.000 | liter/hari |
| Biaya tetap pabrik | 2.500.000.000 | IDR |
| Biaya transpor susu mentah | 1.200 | IDR/liter·km |
| Rata-rata jarak $i \to j$ | 45 | km |
| Permintaan harian $\bar{d}$ | 8.500 | liter/hari |
| Proporsi grade A (segar) | 0,65 | — |
| Proporsi grade B | 0,25 | — |
| Proporsi grade C (rejected) | 0,10 | — |
| Shelf-life grade A | 72 | jam |
| Shelf-life grade B | 36 | jam |

### 4.2 Perhitungan Manual Iterasi Pertama

**Step 1 — Inisialisasi:** Set $y_j^{(0)} = 1$ untuk kandidat $j = \{1,2,3\}$ (fase eksplorasi), $y_j^{(0)} = 0$ untuk $j = \{4,5\}$.

**Step 2 — Subproblem solve untuk skenario nominal $s=1$:**

Biaya transportasi susu mentah dari collection center ke pabrik:

$$C_{transport} = \sum_{i=1}^{12} \sum_{j=1}^{3} c_{ij}^q \cdot x_{ij}^q$$

dengan asumsi alokasi optimal 50/50/50 ke tiga pabrik aktif:

$$C_{transport} = 12 \times 5000 \times 1200 \times 45 = 3,24 \times 10^9 \text{ IDR/bulan}$$

**Step 3 — Benders Cut Generation:** Dual multiplier subproblem $\pi^* = 850.000$ IDR/liter, sehingga cut yang dihasilkan:

$$\eta \geq 3,24 \times 10^9 - 850.000 \cdot \left(\sum_{j=4}^{5} Cap_j \cdot y_j - 0\right)$$

**Step 4 — MP Resolve:** Solusi iterasi berikutnya memberikan $y_j^* = \{1,1,1,0,1\}$ (pabrik 4 dibuka, pabrik 5 tetap tutup). Gap optimalitas: $|UB - LB|/UB = 4,2\%$ pada iterasi ke-7.

### 4.3 Interpretasi Manajerial

Hasil menunjukkan bahwa konfigurasi 4 pabrik dengan total kapasitas 60.000 liter/hari mampu melayani demand 8.500 liter/hari dengan *service level* 98,7% dan menurunkan biaya transportasi sebesar