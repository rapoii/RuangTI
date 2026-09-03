# 2848 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition: Framework Terintegrasi untuk Manajemen Rantai Pasok Maju dan Mundur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik biokimia dan fisiologis produk yang sangat *perishable* dengan umur simpan pendek (umumnya 5–21 hari untuk produk pasteurisasi dan 3–6 bulan untuk UHT). Lead Researchers (2023) dalam kerangka multi-objektif yang dipublikasikan di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menyoroti bahwa rantai pasok susu empat-tingkat (*supplier–processing plant–distribution center–retailer*) menghadapi tiga konflik keputusan yang simultan: minimisasi biaya logistik, pemaksimalan kesegaran produk (*freshness*), dan mitigasi emisi karbon dioksida. Pada konteks Indonesia, sebagai importir terbesar produk susu di Asia Tenggara dengan konsumsi nasional mencapai 4,4 juta ton pada 2023 namun produksi domestik hanya mampu memenuhi sekitar 20%, ketergantungan pada impor mengamplifikasi risiko disruptions dan biaya inventaris safety stock.

Zhang, Li, dan Ren (2024) dalam paper mereka yang diterbitkan via SSRN (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas domain ini dengan mengintegrasikan keputusan kualitas (*quality decisions*) ke dalam *reverse supply chain*, mengakui bahwa pada industri susu, sekitar 8–15% volume produk mengalami *return*, kadaluwarsa, atau penurunan mutu sebelum sampai ke konsumen akhir. Kedua paper ini secara bersama-sama membangun justifikasi bahwa jaringan pasok susu bukan sekadar masalah optimasi biaya satu-objektif, melainkan permasalahan *multi-objective mixed-integer programming* (MOMIP) berskala besar dengan *decision space* yang non-konveks dan memerlukan metode dekomposisi khusus.

Urgensi ekonominya ditunjukkan oleh data bahwa setiap 1% peningkatan *product spoilage* pada jaringan distribusi susu ekuivalen dengan kerugian margin sekitar Rp 4,2 miliar per tahun untuk perusahaan dengan kapasitas 100.000 ton/tahun. Urgensi operasional tecermin pada kebutuhan untuk menentukan lokasi *processing plant* dan *distribution center* (variabel biner) bersamaan dengan alur distribusi (variabel kontinyu), di mana interdependensi ini menimbulkan kompleksitas komputasional NP-hard yang tidak dapat diselesaikan oleh solver MILP standar pada实例 industri nyata dalam waktu polynomial. Oleh karena itu, framework Benders Decomposition yang dikedepankan oleh Lead Researchers (2023) menjadi pendekatan strategis untuk menghasilkan *computational tractability* tanpa mengorbankan kualitas solusi optimal global.

## 2. Landasan Teori & Formulasi Matematis

Model multi-objektif yang dirumuskan oleh Lead Researchers (2023) mengikuti formulasi MOMIP tiga-objektif dengan notasi himpunan dan parameter sebagai berikut:

**Himpunan:**
- $I = \{1, 2, \dots, m\}$: himpunan *raw milk supplier*
- $J = \{1, 2, \dots, n\}$: himpunan kandidat *processing plant*
- $K = \{1, 2, \dots, p\}$: himpunan kandidat *distribution center*
- $L = \{1, 2, \dots, q\}$: himpunan zona permintaan *retailer*

**Parameter:**
- $c_{ij}$: biaya运输 per unit dari supplier $i$ ke plant $j$
- $d_{jkl}$: biaya distribusi per unit dari plant $j$ melalui DC $k$ ke retailer $l$
- $f_j$: biaya tetap pembukaan plant $j$
- $g_k$: biaya tetap pembukaan DC $k$
- $Q_i$: kapasitas suplai maksimum supplier $i$
- $Cap_j$: kapasitas produksi plant $j$
- $Cap_k$: kapasitas penyimpanan DC $k$
- $\rho_l$: permintaan rata-rata di retailer $l$
- $\alpha$: koefisien emisi CO₂ per unit jarak
- $\tau_{ijkl}$: waktu tempuh total (indikator kesegaran)
- $\tau_{max}$: batas maksimum waktu tempuh untuk menjamin kesegaran
- $M$: bilangan big-M untuk linearisasi

**Variabel Keputusan:**
- $x_{ij} \in \{0,1\}$: 1 jika plant $j$ dibuka dan disuplai oleh supplier $i$
- $y_j \in \{0,1\}$: 1 jika plant $j$ diaktifkan
- $z_k \in \{0,1\}$: 1 jika DC $k$ diaktifkan
- $w_{ijkl} \geq 0$: volume aliran dari $i \to j \to k \to l$
- $v_l \geq 0$: unmet demand di retailer $l$

**Fungsi Objektif Multi-Objektif:**

$$Z_1 = \min \sum_{i \in I} \sum_{j \in J} c_{ij} w_{ij} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} d_{jkl} w_{jkl} + \sum_{j \in J} f_j y_j + \sum_{k \in K} g_k z_k$$

$$Z_2 = \max \sum_{l \in L} \sum_{i,j,k} \left(1 - \frac{\tau_{ijkl}}{\tau_{max}}\right) w_{ijkl}$$

$$Z_3 = \min \sum_{i,j,k,l} \alpha \cdot \text{dist}_{ijkl} \cdot w_{ijkl}$$

**Kendala Utama:**

$$\sum_{j \in J} w_{ij} \leq Q_i, \quad \forall i \in I \quad \text{(kapasitas suplai)}$$

$$\sum_{i \in I} \sum_{k \in K} \sum_{l \in L} w_{ijkl} \leq Cap_j \cdot y_j, \quad \forall j \in J$$

$$\sum_{i \in I} \sum_{j \in J} \sum_{l \in L} w_{ijkl} \leq Cap_k \cdot z_k, \quad \forall k \in K$$

$$\sum_{i \in I} \sum_{j \in J} \sum_{k \in K} w_{ijkl} + v_l \geq \rho_l, \quad \forall l \in L \quad \text{(kepuasan permintaan)}$$

$$w_{ijkl} \leq M \cdot y_j, \quad w_{ijkl} \leq M \cdot z_k, \quad \forall i,j,k,l$$

$$w_{ijkl} \geq 0, \quad y_j, z_k \in \{0,1\}, \quad v_l \geq 0$$

Karena dimensi $m \cdot n \cdot p \cdot q$ pada $w_{ijkl}$ dapat mencapai $10^6$ variabel kontinyu dan $n + p$ variabel biner, Lead Researchers (2023) menerapkan **Benders Decomposition** dengan mempartisi struktur menjadi:

**Master Problem (MP)** — hanya memuat variabel biner $y_j, z_k$:

$$\min \sum_j f_j y_j + \sum_k g_k z_k + \eta$$

$$\text{s.t.} \quad \eta \geq \text{optimal value of SP}(\hat{y}, \hat{z})$$

$$\sum_j y_j \leq N^{plant}_{max}, \quad y_j \in \{0,1\}$$

**Subproblem (SP)** — untuk fixed $(\hat{y}, \hat{z})$, minimisasi biaya operasional:

$$\min \sum_{i,j,k,l} (c_{ij} + d_{jkl}) w_{ijkl} + \sum_l M^{penalty} v_l$$

$$\text{s.t.} \quad \sum_{j,k,l} w_{ijkl} \leq Q_i, \quad \sum_{i,k,l} w_{ijkl} \leq Cap_j \hat{y}_j, \quad \sum_{i,j,l} w_{ijkl} \leq Cap_k \hat{z}_k$$

$$\sum_{i,j,k} w_{ijkl} + v_l \geq \rho_l, \quad w_{ijkl} \geq 0$$

Benders optimality cut yang dibangkitkan dari dual SP:

$$\eta \geq \sum_i \pi_i Q_i + \sum_j \mu_j Cap_j \hat{y}_j + \sum_k \nu_k Cap_k \hat{z}_k - \sum_l \lambda_l \rho_l$$

di mana $(\pi, \mu, \nu, \lambda)$ adalah variabel dual SP. Iterasi berlanjut hingga gap antara upper bound (feasible MP solution) dan lower bound (MP relaxation) kurang dari $\epsilon = 10^{-4}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework ini mengikuti SOP enam-tahap yang dipandu oleh prosedur Branch-and-Benders-Cut (BBC) sesuai standar *computational operations research* kontemporer:

1. **Fase Akuisisi Data:** Pengumpulan data *bill of materials*, biaya transport riil dari sistem ERP (SAP S/4HANA), data kapasitas dari *production planning system*, dan emisi CO₂ dari *carbon accounting software* (misalnya SimaPro).
2. **Fase Formulasi Model:** Translasi data menjadi parameter MOMIP dan validasi dimensional consistency.
3. **Fase Pre-processing:** Tightening constraints (*variable fixing*, *coefficient strengthening*, dan *probing*) untuk mengurangi *search tree*.
4. **Fase Benders Iterasi:** Pemecahan MP dan SP secara bolak-balik menggunakan CPLEX 22.1 atau Gurobi 11.0; cut generation dilakukan setiap kali solusi SP menginduksi gap > $\epsilon$.
5. **Fase Validasi Solusi:** *Warm-start* dengan heuristic (misalnya *relax-and-fix*) untuk konvergensi awal; *feasibility pump* untuk menemukan integer feasible solution pertama.
6. **Fase Implementasi & Monitoring:** *Decision support system* dashboard yang menampilkan Pareto front tiga-dimensi dengan slider interaktif bagi decision-maker untuk memilih kompromi optimal.

Arsitektur teknologi mengikuti pola *three-tier architecture*: (a) **Presentation Layer** — Tableau/Power BI dashboard; (b) **Logic Layer** — Python optimization microservice dengan library `pyomo`/`gurobipy`; (c) **Data Layer** — PostgreSQL dengan ekstensi PostGIS untuk data geospasial jaringan distribusi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi, pertimbangkan jaringan pasok susu PT X (perusahaan hipotetis) dengan $|I|=3$ supplier (Boyolali, Malang, Bandung), $|J|=3$ kandidat plant, $|K|=2$ kandidat DC (Jakarta, Surabaya), dan $|L|=4$ zona retailer.

**Parameter Biaya (ribu Rp/unit):**
- $c_{ij}$: rata-rata Rp 850/km·liter dari supplier ke plant
- $d_{jkl}$: rata-rata Rp 1.200/km·liter plant-DC-retailer
- $f_j$ = [Rp 12 M, Rp 15 M, Rp 10 M]; $g_k$ = [Rp 8 M, Rp 9 M]
- $\rho_l$ = [2.