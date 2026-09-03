# 2368 — Optimasi Rantai Pasok Produk Susu Multi-Objektif dengan Kerangka Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok manufaktur konvensional. Karakteristik produk susu yang mudah rusak (perishable) dengan umur simpan rata-rata 5–21 hari pada suhu 2–4°C memerlukan pendekatan optimasi yang secara eksplisit memasukkan dimensi kualitas, kesegaran, dan degradasi nutrisi ke dalam fungsi tujuan. Lead Researchers (2023) dalam publikasi di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menekankan bahwa kerangka kerja multi-objektif menjadi kebutuhan imperatif karena keputusan lokasi fasilitas, kapasitas produksi, dan alokasi distribusi tidak dapat dievaluasi hanya berdasarkan satu metrik biaya. Rantai pasok produk susu pada umumnya terdiri dari peternakan (farm), pusat pengumpulan (collection center), pabrik pengolahan (processing plant), gudang berpendingin (cold storage), dan zona permintaan pelanggan (customer zone) yang tersebar secara geografis.

Urgensi ekonomis dari optimasi ini sangat nyata. Berdasarkan laporan FAO, sekitar 20–30% produksi susu global terbuang sebelum dikonsumsi akibat inefisiensi cold chain dan keputusan lokasi yang suboptimal. Kerangka Benders Decomposition yang diusulkan dalam paper Lead Researchers (2023) dirancang khusus untuk menangani dimensi komputasional masalah ini, di mana variabel keputusan diskrit (lokasi fasilitas) dipisahkan dari variabel kontinyu (aliran produk) melalui teknik dekomposisi primal. Pendekatan ini memungkinkan pencarian solusi optimal pada jaringan berskala industri (ratusan peternakan, puluhan pabrik, ribuan zona pelanggan) dalam waktu komputasi yang layak.

Di sisi lain, Zhang, Li, dan Ren (2024) dalam publikasi di jurnal *Peer-Reviewed* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas aplikasi Benders Decomposition ke ranah reverse supply chain dengan keputusan kualitas. Temuan mereka menunjukkan bahwa integrasi keputusan kualitas (quality decisions) ke dalam subproblem Benders menghasilkan struktur cut yang lebih kaya informasi, karena variabel kontinyu mencakup tingkat pemulihan, harga jual kembali, dan kualitas akhir produk remanufaktur. Kedua paper ini saling melengkapi: paper pertama fokus pada forward dairy supply chain dengan multi-objektif, sedangkan paper kedua memberikan landasan metodologis bagaimana kualitas di-embed ke dalam struktur dekomposisi.

Konteks operasional industri yang melatarbelakangi riset ini meliputi: (1) fluktuasi musiman produksi susu (±15–25% antar musim); (2) biaya energi cold storage yang mencapai 30–40% dari total biaya operasional; (3) emisi karbon dari transportasi berpendingin yang menjadi perhatian regulatori di Uni Eropa dan Indonesia melalui carbon tax; serta (4) segmentasi produk (UHT, pasteurisasi, yoghurt, keju, mentega) dengan karakteristik degradasi dan margin kontribusi yang berbeda. Integrasi semua dimensi ini dalam satu model mixed-integer linear/nonlinear programming (MILP/MINLP) menjadi tantangan utama yang hanya dapat diselesaikan secara efisien melalui Benders Decomposition seperti yang dibuktikan oleh Lead Researchers (2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif

Kerangka yang diusulkan Lead Researchers (2023) memformulasikan tiga fungsi tujuan simultan: minimisasi total biaya, minimisasi emisi karbon, dan maksimisasi tingkat kesegaran produk. Formulasi matematis untuk masalah optimasi *Combined Objective* menggunakan metode $\varepsilon$-constraint adalah sebagai berikut:

$$\min \; Z_1 = \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} f_j y_j + \sum_{j \in J} \sum_{k \in K} h_{jk} q_{jk} \tag{1}$$

dengan kendala:

$$Z_2 = \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} e_{ij} d_{ijk} \cdot x_{ijk} \leq \varepsilon_2 \tag{2}$$

$$Z_3 = \sum_{k \in K} \sum_{l \in L} \alpha_l \cdot F_{kl} \geq \varepsilon_3^{\min} \tag{3}$$

di mana:
- $x_{ijk}$ = aliran produk dari peternakan $i$ ke pabrik $j$ untuk produk $k$
- $y_j \in \{0,1\}$ = keputusan aktivasi pabrik $j$
- $q_{jk}$ = jumlah produk $k$ yang diproses di pabrik $j$
- $F_{kl}$ = freshness index produk $k$ pada zona pelanggan $l$
- $c_{ij}, f_j, h_{jk}$ = parameter biaya transportasi, fixed cost, dan handling
- $e_{ij}$ = faktor emisi per unit-jarak
- $\alpha_l$ = bobot prioritas kesegaran pada zona $l$

### 2.2 Fungsi Degradasi Kualitas

Untuk produk susu, kualitas menurun secara eksponensial terhadap waktu dan suhu, yang diformulasikan sebagai:

$$Q(t, T) = Q_0 \cdot \exp\left(-\kappa(T) \cdot t\right) \tag{4}$$

dengan $Q_0$ = kualitas awal, $t$ = waktu tempuh (jam), dan $\kappa(T)$ = konstanta degradasi yang bergantung suhu penyimpanan $T$. Untuk susu pasteurisasi pada $T = 4°C$, $\kappa \approx 0{,}0025/\text{jam}$ (berdasarkan Lead Researchers, 2023).

### 2.3 Benders Decomposition: Master Problem

Master problem (MP) pada iterasi $\nu$ memuat variabel lokasi dan hanya memuat *Benders cuts* yang dibangkitkan dari subproblem:

$$\min \; \theta \tag{5}$$

$$\text{subject to:} \quad \theta \geq \sum_{j \in J} f_j y_j + \sum_{(m,n) \in \mathcal{C}^\nu} \pi_{mn}^{\nu} (b_{mn} - B_{mn} y) \tag{6}$$

$$\sum_{j \in J} y_j \leq P^{\max} \tag{7}$$

$$y_j \in \{0,1\} \quad \forall j \in J \tag{8}$$

di mana $\mathcal{C}^\nu$ adalah himpunan Benders cuts hingga iterasi $\nu$, dan $\pi_{mn}^{\nu}$ adalah dual multiplier yang dibangkitkan dari subproblem.

### 2.4 Subproblem (Primal Subproblem)

Untuk fixed $y^* = \bar{y}$ dari MP, subproblem menjadi masalah transport flow:

$$\min \; \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} c_{ijk} x_{ijk} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} t_{jkl} z_{jkl} \tag{9}$$

$$\text{subject to:} \quad \sum_{k \in K} x_{ijk} \leq S_i \quad \forall i \in I \tag{10}$$

$$\sum_{i \in I} x_{ijk} - \sum_{l \in L} z_{jkl} = 0 \quad \forall j \in J, k \in K \tag{11}$$

$$\sum_{j \in J} z_{jkl} = D_{kl} \quad \forall k \in K, l \in L \tag{12}$$

$$x_{ijk} \leq \bar{y}_j \cdot M \quad \forall i,j,k \tag{13}$$

$x_{ijk}, z_{jkl} \geq 0$

Dual dari subproblem ini menghasilkan multiplier $\pi$ yang digunakan untuk membangkitkan *optimality cut* pada persamaan (6). Zhang, Li, dan Ren (2024) menunjukkan bahwa ketika keputusan kualitas dimasukkan sebagai variabel kontinyu pada subproblem, struktur dual menjadi block-angular, memungkinkan acceleration melalui teknik dual regularization.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders Multi-Objektif di lingkungan industri mengikuti prosedur standar berikut, yang dikembangkan berdasarkan protokol pada Lead Researchers (2023) dan perluasan Zhang et al. (2024):

**Tahap 1 — Akuisisi Data Industri (Durasi: 2–4 minggu).** Kumpulkan parameter: lokasi GPS peternakan, kapasitas produksi harian $S_i$, demand musiman $D_{kl}$, biaya transportasi berpendingin, dan data suhu rantai dingin. Standar referensi yang digunakan adalah ISO 22000:2018 untuk food safety management dan IFCG Cold Chain Guidelines.

**Tahap 2 — Kalibrasi Model Kualitas.** Lakukan regresi pada data historis kualitas produk untuk mengestimasi parameter $\kappa(T)$ pada persamaan (4). Validasi dilakukan menggunakan RMSE $< 0{,}05$ pada skala 0–1 freshness index.

**Tahap 3 — Formulasi MILP dan Implementasi Solver.** Kode model dalam Python (Pyomo) atau GAMS. Subproblem di-solve menggunakan CPLEX/Gurobi; master problem menggunakan branch-and-cut.

**Tahap 4 — Eksekusi Benders Decomposition.** Iterasi berhenti ketika gap optimalitas $|(Z_{MP} - Z_{SP})/Z_{MP}| < \tau$ dengan $\tau = 0{,}5\%$. Standar industri menggunakan $\tau = 1\%$ untuk aplikasi real-time dan $\tau = 0{,}1\%$ untuk strategic planning.

**Tahap 5 — Analisis Pareto Front.** Karena multi-objektif, bangkitkan seluruh Pareto-optimal solutions dengan memvariasikan $\varepsilon_2$ dan $\varepsilon_3$ pada rentang feasible.

**Tahap 6 — Validasi dan Implementasi.** Pilot test pada subset jaringan (10–15% fasilitas) sebelum full-scale deployment.

Diagram alir logika Benders iteratif secara ringkas adalah sebagai berikut: *(Init)* $\rightarrow$ Solve MP $\rightarrow$ Get $\bar{y}$ $\rightarrow$ Solve SP $\rightarrow$ Get $\pi$ $\rightarrow$ Generate Cut $\rightarrow$ Add to MP $\rightarrow$ Check gap $<\tau$? $\rightarrow$ Ya: *Stop* / Tidak: ulangi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Ambil jaringan dengan $|I|=20$ peternakan, $|J|=5$ pabrik kandidat, $|K|=3$ produk (susu pasteurisasi, yoghurt, keju), $|L|=8$ zona pelanggan. Parameter biaya dalam satuan moneter (ribu Rupiah),