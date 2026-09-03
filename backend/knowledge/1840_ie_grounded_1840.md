# 1840 — Optimalisasi Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Kerangka Benders Decomposition: Integrasi Desain Jaringan, Operasi Cold Chain, dan Reverse Logistics

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition*
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tekanan struktural yang semakin kompleks pada dekade terakhir. Data FAO menunjukkan bahwa sektor dairy mengonsumsi sekitar 4–6% dari total emisi gas rumah kaca antropogenik, sementara sekitar 20–25% volume susu segar terbuang setiap tahun akibat pelanggaran cold chain, lead time yang melebihi *shelf life*, dan mismatch antara kapasitas produksi dengan permintaan musiman (Lead Researchers, 2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Fenomena ini diperparah oleh karakteristik intrinsik produk susu yang memiliki laju deteriorasi kualitas non-linear: degradasi lemak, pertumbuhan mikroba, dan denaturasi protein yang bersifat fungsi dari waktu dan suhu. Karena itu, keputusan lokasi fasilitas (*facility location*), alokasi kapasitas, serta rute distribusi tidak dapat dipisahkan dari keputusan operasional seperti suhu refrigerated transport, strategi *first-expired-first-out* (FEFO), dan kebijakan *waste-to-resource* melalui reverse logistics.

Lead Researchers (2023) dalam paper *A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition* mengidentifikasi tiga矛盾 struktural dalam literatur dairy supply chain network design (DSCND): (1) konfliktivitas antara minimasi total biaya dan maksimasi kesegaran produk (*product freshness*); (2) trade-off antara emisi karbon dari cold chain dan tingkat layanan pelanggan; serta (3) kompleksitas komputasi eksponensial ketika variabel biner lokasi digabungkan dengan variabel kontinu operasi secara simultan dalam model mixed-integer programming (MIP) skala industri. Untuk menjawab keterbatasan ini, paper tersebut mengusulkan kerangka multi-objektif dengan teknik dekomposisi Benders sebagai mekanisme untuk memisahkan *strategic network design* dari *operational flow allocation*, sehingga memungkinkan pemecahan masalah berskala besar dengan gap optimalitas yang terkontrol.

Studi pelengkap dari Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas perspektif ini dengan memasukkan keputusan kualitas (*quality decisions*) dalam konteks reverse supply chain, menunjukkan bahwa integrasi antara keputusan refurbishment, remanufacturing, dan quality grading dapat memperkaya feasibility region dari subproblem Benders. Kedua paper ini menjadi basis bagi modul ini karena mereka secara bersama-sama memvalidasi bahwa Benders Decomposition bukan sekadar algoritma pemecah MIP, melainkan sebuah *decision-support architecture* yang relevan untuk rekayasa jaringan rantai pasok modern dengan kendala perishability, kualitas, dan keberlanjutan.

Urgensi industri terhadap kerangka seperti ini nyata: pada perusahaan multinasional dairy dengan jaringan >50 plant, >200 distribution center (DC), dan >10.000 titik ritel, model monolithic MIP sering kali gagal menemukan feasible solution dalam window waktu perencanaan (8–12 jam), memaksa manajer untuk mengandalkan *rule-of-thumb* yang suboptimal. Benders decomposition memungkinkan akselerasi 5–20× terhadap *time-to-solution*, sehingga aspek ini bukan murni akademis melainkan memiliki dampak langsung pada *agility* rantai pasok dairy global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi dan Himpunan

Berikut adalah himpunan, parameter, dan variabel keputusan yang menyusun model multi-objektif DSCND (Lead Researchers, 2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)):

**Himpunan:**
- $I$ = himpunan kandidat plant/pusat pengolahan susu, $|I| = n_I$
- $J$ = himpunan kandidat distribution center (DC), $|J| = n_J$
- $K$ = himpunan zona permintaan ritel, $|K| = n_K$
- $P$ = himpunan produk susu (UHT, pasteurized, yogurt, keju, dll.), $|P| = n_P$
- $T$ = himpunan periode perencanaan, $|T| = n_T$
- $L$ = himpunan tingkat kualitas produk (*grade*) pada reverse flow, $l \in \{A, B, C\}$

**Parameter:**
- $f_i$ = biaya tetap pembukaan plant $i$ (CAPEX)
- $g_j$ = biaya tetap pembukaan DC $j$
- $c_{ij}^{tr}$ = biaya transportasi per unit dari plant $i$ ke DC $j$
- $c_{jk}^{tr}$ = biaya transportasi per unit dari DC $j$ ke ritel $k$
- $\theta_{p}$ = laju deteriorasi kualitas produk $p$ per satuan waktu pada suhu referensi
- $d_{kpt}^{dem}$ = permintaan ritel $k$ untuk produk $p$ pada periode $t$
- $\alpha_p^{prod}$ = kapasitas produksi per plant untuk produk $p$
- $\beta_j^{cap}$ = kapasitas DC $j$
- $\rho$ = tingkat diskonto operasional
- $\lambda_e$ = bobot emisi karbon per km-angkut
- $h_j^{inv}$ = biaya inventori di DC $j$ per unit-periode

**Variabel Keputusan:**
- $y_i \in \{0,1\}$: 1 jika plant $i$ dibuka
- $z_j \in \{0,1\}$: 1 jika DC $j$ dibuka
- $x_{ijpt} \geq 0$: alur unit produk $p$ dari plant $i$ ke DC $j$ pada periode $t$
- $w_{jkpt} \geq 0$: alur unit produk $p$ dari DC $j$ ke ritel $k$ pada periode $t$
- $r_{kplt} \geq 0$: alur *return* produk grade $l$ dari ritel $k$ ke plant $i$ (reverse flow)
- $s_{jpt} \geq 0$: tingkat inventori produk $p$ di DC $j$ akhir periode $t$
- $u_{ijlt} \geq 0$: unit produk yang di-*remanufacture* dari grade $l$ di plant $i$

### 2.2 Formulasi Multi-Objektif

Model Lead Researchers (2023) meminimalkan tiga fungsi objektif secara simultan menggunakan teknik $\epsilon$-constraint:

$$\min Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{i,j,p,t} c_{ij}^{tr} x_{ijpt} + \sum_{j,k,p,t} c_{jk}^{tr} w_{jkpt} + \sum_{j,p,t} h_j^{inv} s_{jpt} \tag{1}$$

$$\min Z_2 = -\sum_{k,p,t} \phi_{kpt}^{fresh} \quad \text{(maksimasi kesegaran)} \tag{2}$$

di mana $\phi_{kpt}^{fresh} = 1 - \theta_p \cdot \tau_{jk}$ dengan $\tau_{jk}$ adalah waktu transit rata-rata dari DC $j$ ke ritel $k$.

$$\min Z_3 = \sum_{(i,j),(j,k)} \lambda_e \cdot \delta_{ij} \cdot (x_{ijpt} + w_{jkpt}) \tag{3}$$

dengan $\delta_{ij}$ adalah jarak antar node. Constraint utama meliputi:

**Kapasitas plant:**
$$\sum_{j,p} x_{ijpt} \leq \alpha_p^{prod} y_i \quad \forall i, p, t \tag{4}$$

**Kapasitas DC:**
$$\sum_{k,p} w_{jkpt} + s_{jpt} \leq \beta_j^{cap} z_j \quad \forall j, p, t \tag{5}$$

**Keseimbangan aliran di DC:**
$$\sum_{i} x_{ijpt} + s_{jp,t-1} = \sum_{k} w_{jkpt} + s_{jpt} \quad \forall j, p, t \tag{6}$$

**Pemenuhan permintaan:**
$$\sum_{j} w_{jkpt} \geq d_{kpt}^{dem} \quad \forall k, p, t \tag{7}$$

**Batas reverse flow (integrasi dengan paper Zhang et al., 2024):**
$$r_{kplt} \leq \gamma_p^{ret} \cdot d_{kpt}^{dem} \quad \forall k, p, l, t \tag{8}$$

di mana $\gamma_p^{ret}$ adalah rasio pengembalian produk $p$.

### 2.3 Benders Decomposition

Paper Lead Researchers (2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) memformulasi Benders Decomposition sebagai berikut:

**Master Problem (MP):** hanya memuat variabel biner lokasi:

$$\min_{y,z} \sum_{i} f_i y_i + \sum_{j} g_j z_j + \eta \tag{9}$$

subject to linking constraints dan lower bound $\eta \geq \theta_B^{(n)}$ yang diperbarui tiap iterasi $n$.

**Subproblem (SP):** diberikan $(y^*, z^*)$, selesaikan:

$$\min_{x,w,s,r,u} \sum c_{ij}^{tr} x_{ijpt} + \sum c_{jk}^{tr} w_{jkpt} + \sum h_j^{inv} s_{jpt} \tag{10}$$

subject to (4)–(8) dengan $y_i = y_i^*, z_j = z_j^*$. Dual subproblem menghasilkan *optimality cut*:

$$\eta \geq \sum_i \pi_i^{(n)} (y_i - y_i^{(n)}) + \sum_j \sigma_j^{(n)} (z_j - z_j^{(n)}) + \theta_B^{(n)} \tag{11}$$

di mana $\pi_i^{(n)}$ dan $\sigma_j^{(n)}$ adalah harga dual dari constraint kapasitas plant dan DC pada iterasi $n$. Jika SP infeasible, ditambahkan *feasibility cut* sesuai formulasi standar Benders.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Benders Decomposition untuk dairy supply chain mengikuti SOP enam fase berikut:

**Fase 1 — Formulasi Data Historis & Kalibrasi Parameter.** Kumpulkan data permintaan ritel $d_{kpt}^{dem}$ selama 24–36 bulan, kalibrasi $\theta_p$ menggunakan studi Accelerated Shelf-Life Testing (ALST), dan validasi kapasitas $\alpha_p^{prod}$ melalui Six Sigma capacity analysis (DPMO ≤ 3.4). Lead Researchers (2023) menekankan perlunya segmentasi produk berdasarkan *temperature class* (chilled 2–4°C vs. ambient UHT).

**Fase 2 — Konstruksi Master Problem.** Bangun model MIP hanya dengan variabel $(y_i, z_j, \eta)$. Estimasi initial lower bound $\theta_B^{(0)}$ dari solusi relaxed LP. SOP mengharuskan *warm-start* dengan menggunakan solusi dari heuristik *Capacitated Clustering* atau *P-Median* untuk mempercepat konvergensi.

**Fase 3 — Resolusi Subproblem.** Selesaikan subproblem kontinu dengan simpleks primal-dual (CPLEX/Gurobi). Validasi konsistensi dengan memeriksa apakah total supply $\sum_i \alpha_p^{prod} y_i^* \geq \sum_k d_{kpt}^{dem}$ untuk setiap $(p,t)$.

**Fase 4 — Generasi Benders Cut.** Jika SP optimal pada nilai dual $(\pi^{(n)}, \sigma^{(n)}, \rho^{(n)})$, tambahkan *optimality cut* (11) ke MP. Jika infeasible, tambahkan *feasibility cut*:

$$\sum_i \pi_i^{F} (y_i - y_i^{(n)}) + \sum_j \sigma_j^{F} (z_j - z_j^{(n)}) \leq 0 \tag{12}$$

**