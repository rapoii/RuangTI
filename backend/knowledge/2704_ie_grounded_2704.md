# 2704 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition untuk Rantai Dingin dan Kualitas Terintegrasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik yang membedakannya dari rantai pasok barang konsumsi umum. Produk susu termasuk kategori paling *perishable* (mudah rusak) dalam industri pangan, dengan umur simpan pasteurized milk hanya 7–14 hari pada suhu 2–4°C, sementara yogurt bertahan 14–30 hari dan keju keras hingga 6–12 bulan (Lead Researchers, 2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Kompleksitas ini diperparah oleh tiga fenomena simultan: (i) degradasi kualitas yang bersifat *time-temperature dependent* mengikuti persamaan Arrhenius, (ii) permintaan konsumen yang *stochastic* dengan variabilitas musiman hingga ±25%, dan (iii) jejak karbon signifikan akibat refrigerated trucking yang menyumbang sekitar 4–6% emisi CO₂ global pada sektor pangan. Dalam konteks tersebut, Lead Researchers (2023) memformulasikan kerangka multi-objektif yang menyeimbangkan minimalisasi biaya total jaringan, maksimalisasi kesegaran produk (*freshness*) pada titik konsumsi, dan minimalisasi emisi karbon.

Urgensi operasional studi ini semakin nyata ketika mempertimbangkan skala ekonomi. Sebuah pabrik pengolahan susu kelas dunia beroperasi pada kapasitas 500.000–1.500.000 liter/hari, melayani jaringan distribusi multi-eselon yang melibatkan *raw milk collection centers*, *processing plants*, *cold storage distribution centers*, dan *retail outlets*. Setiap tingkat eselon memiliki keputusan biner (apakah fasilitas dibuka) dan keputusan kontinyu (aliran produk) yang saling tergantung. Kompleksitas komputasional formulasi *mixed-integer programming* (MIP) dengan empat eselon, 50 SKUs, dan 100 retailer akan menghasilkan *search space* eksponensial yang tidak dapat diselesaikan *exact solver* dalam waktu komputasi wajar tanpa dekomposisi (Lead Researchers, 2023). Di sinilah Benders Decomposition, yang diperkenalkan oleh Jacques F. Benders (1962) dan diadaptasi secara modern untuk *stochastic and large-scale optimization*, berperan strategis. Studi lanjutan oleh Zhang, Li, & Ren (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas paradigma ini untuk *reverse supply chain* dengan keputusan kualitas, menunjukkan bahwa logika *cut-generation* Benders juga relevan pada jaringan *closed-loop* yang mencakup proses disassembly, inspeksi kualitas, dan *remanufacturing*. Kedua literatur ini menjadi referensi utama untuk menjelaskan bagaimana metodologi optimisasi canggih menjawab tantangan nyata rantai pasok produk *perishable*.

Dari perspektif *engineering economy*, keputusan lokasi fasilitas pada industri susu memiliki *capital expenditure* (CAPEX) sangat tinggi — pabrik pengolahan kelas atas membutuhkan investasi USD 50–150 juta, sementara pusat distribusi dingin membutuhkan USD 15–40 juta per fasilitas. Keputusan yang suboptimal tidak hanya menimbulkan inefisiensi biaya jangka pendek, tetapi juga *stranded asset risk* yang mengunci modal selama 20–30 tahun. Oleh karena itu, kerangka multi-objektif dengan Benders Decomposition bukan sekadar alat akademis melainkan kebutuhan rekayasa kritis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Model jaringan mengikuti formulasi *multi-commodity, multi-echelon* yang terdiri atas empat tingkatan:

- **Himpunan:** $\mathcal{I}$ = himpunan titik pengumpulan susu mentah (farm/collection centers), $|\mathcal{I}| = I$; $\mathcal{J}$ = himpunan pabrik pengolahan, $|\mathcal{J}| = J$; $\mathcal{K}$ = himpunan distribution center (DC) berpendingin, $|\mathcal{K}| = K$; $\mathcal{L}$ = himpunan retailer, $|\mathcal{L}| = L$; $\mathcal{P}$ = himpunan produk (whole milk, skim, yogurt, keju, dll.), $|\mathcal{P}| = P$.
- **Parameter:** $f_j$ = biaya tetap membuka pabrik $j$; $g_k$ = biaya tetap membuka DC $k$; $c_{ij}^p$ = biaya transportasi susu mentah per liter produk $p$ dari $i$ ke $j$; $c_{jk}^p$ = biaya transport produk jadi ke DC; $c_{kl}^p$ = biaya distribusi ke retailer; $h_j^p$ = biaya holding produk $p$ di pabrik; $\lambda_i^p$ = kapasitas suplai harian di titik $i$; $\mu_j^p$ = kapasitas processing di pabrik $j$; $\nu_k^p$ = kapasitas cold storage di DC $k$; $d_l^p$ = permintaan harian produk $p$ di retailer $l$; $a^p$ = koefisien degradasi kualitas; $\rho^p$ = *carbon emission factor* per liter-km; $\alpha_l$ = bobot prioritas retailer $l$; $\xi_l^p$ = skenario permintaan dengan probabilitas $\pi_\omega$.

### 2.2 Variabel Keputusan

- $y_j \in \{0,1\}$: keputusan membuka pabrik $j$
- $z_k \in \{0,1\}$: keputusan membuka DC $k$
- $x_{ij}^p \geq 0$: aliran susu mentah (liter/hari) produk $p$ dari $i$ ke $j$
- $w_{jk}^p \geq 0$: aliran produk jadi dari pabrik $j$ ke DC $k$
- $v_{kl}^p \geq 0$: aliran dari DC $k$ ke retailer $l$
- $\theta_\omega$: nilai optimal subproblem untuk skenario $\xi_\omega$

### 2.3 Formulasi Multi-Objektif

Lead Researchers (2023) mengusulkan tiga fungsi tujuan yang di-*Pareto*-optimalkan:

$$\min Z_1 = \sum_{j \in \mathcal{J}} f_j y_j + \sum_{k \in \mathcal{K}} g_k z_k + \sum_{i,j,p} c_{ij}^p x_{ij}^p + \sum_{j,k,p} c_{jk}^p w_{jk}^p + \sum_{k,l,p} c_{kl}^p v_{kl}^p + \sum_{j,p} h_j^p \cdot \text{Inv}_j^p$$

$$\max Z_2 = \sum_{p \in \mathcal{P}} \sum_{l \in \mathcal{L}} \alpha_l \cdot \left(1 - \frac{t_{kl}^p}{T_{\max}^p}\right) v_{kl}^p$$

$$\min Z_3 = \sum_{p,k,l} \rho^p \cdot d_{kl} \cdot v_{kl}^p$$

dengan $t_{kl}^p$ adalah waktu transit aktual produk $p$ dari DC $k$ ke retailer $l$ dan $T_{\max}^p$ adalah umur simpan maksimum. Konversi max-min menjadi min-min melalui augmentasi Lagrangian menghasilkan fungsi *scalarized*:

$$\min Z = w_1 Z_1 - w_2 Z_2 + w_3 Z_3, \quad \text{dengan } \sum_{r=1}^{3} w_r = 1, \; w_r \geq 0$$

### 2.4 Kendala (Constraints)

**Kendala kapasitas suplai:**
$$\sum_{j \in \mathcal{J}} x_{ij}^p \leq \lambda_i^p \quad \forall i \in \mathcal{I}, p \in \mathcal{P}$$

**Kendala kapasitas pengolahan:**
$$\sum_{i \in \mathcal{I}} x_{ij}^p \leq \mu_j^p \cdot y_j \quad \forall j \in \mathcal{J}, p \in \mathcal{P}$$

**Kendala cold storage:**
$$\sum_{l \in \mathcal{L}} v_{kl}^p \leq \nu_k^p \cdot z_k \quad \forall k \in \mathcal{K}, p \in \mathcal{P}$$

**Konservasi aliran (flow balance):**
$$\sum_{i} x_{ij}^p = \sum_{k} w_{jk}^p \quad \forall j, p$$
$$\sum_{j} w_{jk}^p = \sum_{l} v_{kl}^p \quad \forall k, p$$

**Kendala permintaan dengan skenario:**
$$\sum_{k} v_{kl}^p \geq d_l^p(\xi_\omega) \quad \forall l, p, \omega \in \Omega$$

### 2.5 Dekomposisi Benders

Karena kompleksitas MIP dengan ratusan ribu variabel, Lead Researchers (2023) memisahkan keputusan menjadi **Master Problem (MP)** yang berisi variabel biner fasilitas dan **Subproblem (SP)** yang berisi vari