# 2997 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik serta Sistem Manajemen Retur untuk Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global yang diproyeksikan mencapai lebih dari 145 juta unit pada tahun 2030 (IEA, 2024) menciptakan tantangan industri yang sangat strategis: bagaimana mengelola *end-of-life* (EoL) baterai lithium-ion dalam skala masif secara ekonomis, lingkungan, dan rantai pasok yang terkoordinasi. Baterai daya (power battery) yang sudah pensiun dari aplikasi otomotif—umumnya ketika State of Health (SOH) turun di bawah 70–80% dari kapasitas awal—masih memiliki kapasitas residu yang signifikan (60–80% kapasitas nominal) yang sangat berharga untuk aplikasi sekunder. JIANG Lin dan TANG Lidan (2025) dalam proceeding ICLSE 2024 mengangkat isu krusial ini dengan mengusulkan kerangka keputusan terintegrasi yang mempertimbangkan tiga opsi处置 (disposition) baterai pensiun secara simultan: (i) cascading/echelon utilization untuk aplikasi stasioner seperti *grid storage*, lampu jalan surya, forklift listrik, dan *low-speed electric vehicle* (LSEV); (ii) remanufaktur menjadi baterai cadangan atau modul dengan grade lebih rendah; serta (iii) daur ulang material (*closed-loop recycling*) untuk memulihkan litium, kobalt, nikel, dan mangan (DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)).

Urgensi operasional dan ekonomis dari permasalahan ini bersifat multidimensional. Pertama, secara ekonomis, nilai material baterai EV bekas mencapai USD 5.000–10.000 per unit, menjadikan keputusan alokasi disposition sebagai variabel keputusan bernilai tinggi. Kedua, secara lingkungan, proses ekstrasi mineral kritis seperti kobalt dan litium memiliki *carbon footprint* 15–20 kg CO₂-eq/kWh baterai, sehingga setiap baterai yang berhasil dimanfaatkan kembali menghemat emisi hingga 60% dibanding produksi baru. Ketiga, secara regulasi, kebijakan seperti EU Battery Regulation 2023/1542 yang mewajibkan *minimum recycled content* 16% untuk kobalt, 6% untuk litium, dan 6% untuk nikel pada baterai baru per 2031, menciptakan tekanan compliance yang harus diakomodasi dalam desain rantai pasok. Shin, Kim, dan Jeong (2024) melengkapi perspektif ini dengan menyoroti kebutuhan akan model *robust optimization* yang mampu menangani ketidakpastian permintaan retur, kapasitas daur ulang, dan harga material sekunder di pasar yang sangat volatil (DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)). Konteks Indonesia juga relevan: dengan target 2 juta unit EV pada 2030 dan rasio elektrifikasi sepeda motor yang agresif, volume baterai pensiun akan membentuk *"tidal wave"* (gelombang pasang) limbah B3 dalam 5–8 tahun ke depan yang memerlukan infrastruktur CLSC sejak sekarang.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Multi-Eselon

Model yang diusulkan JIANG & TANG (2025) membangun jaringan CLSC dengan empat entitas keputusan: **produsen baterai baru (M)**, **retailer/operator armada (R)**, **third-party collector (C)**, dan **recycler-remanufakturer (Rm)**. Aliran material maju (*forward flow*) adalah baterai baru $q_n$, sedangkan aliran balik (*reverse flow*) berupa baterai pensiun yang di-*collect* dengan laju $\tau$, kemudian dipecah menjadi tiga alokasi: echelon ($\alpha$), remanufaktur ($\beta$), dan daur ulang/material recovery ($1-\alpha-\beta$).

### 2.2 Fungsi Permintaan dan Return

Permintaan baterai baru dimodelkan sebagai fungsi linier harga零售商:

$$D_n(p_n) = a - b\,p_n, \quad a,b > 0 \tag{1}$$

Sementara permintaan untuk baterai remanufaktur dan produk cascading mengikuti:

$$D_r(p_r) = a_r - b_r\,p_r \tag{2}$$

$$D_e(p_e) = a_e - b_e\,p_e \tag{3}$$

Tingkat pengembalian (*return rate*) baterai pensiun dimodelkan sebagai fungsi eksponensial dari harga beli kembali (*trade-in incentive*):

$$\tau(\delta) = \tau_0 + \tau_1\left(1 - e^{-\lambda \delta}\right) \tag{4}$$

dengan $\tau_0$ adalah *baseline return rate*, $\tau_1$ adalah *maximum increment*, dan $\lambda$ adalah parameter sensitivitas harga beli kembali. Untuk aplikasi robust (Shin et al., 2024), ketidakpastian return dimodelkan sebagai *box uncertainty set*:

$$\mathcal{U}_\tau = \left\{ \tau : \tau^{min} \leq \tau \leq \tau^{max},\; \sum_{i} |\tau_i - \hat{\tau}_i| \leq \Gamma \right\} \tag{5}$$

di mana $\Gamma$ adalah *budget of uncertainty* yang mengontrol tingkat konservatisme solusi.

### 2.3 Fungsi Profit Multi-Decision Maker

Fungsi profit untuk Manufacturer sebagai *Stackelberg leader*:

$$\pi_M = (p_n - c_n) q_n + (p_{re} - c_{re}) \beta \tau Q_n - c_{coll} \tau Q_n - c_{ech} \alpha \tau Q_n \tag{6}$$

dengan $c_n$ adalah biaya produksi baterai baru, $c_{re}$ biaya remanufaktur, $c_{coll}$ biaya logistikCollection, dan $c_{ech}$ biaya repurposing. Fungsi profit Recycler:

$$\pi_{Rm} = (p_{mat} - c_{rec})(1-\alpha-\beta)\tau Q_n + (p_{re} - c_{re})\beta \tau Q_n - c_{inv}\,I_{Rm} \tag{7}$$

### 2.4 Formulasi Robust Counterpart

Mengikuti kerangka Ben-Tal & Nemirovski yang diadopsi Shin et al. (2024), formulasi robust min-max untuk menghadapi worst-case return rate adalah:

$$\max_{p_n,p_r,p_e} \min_{\tau \in \mathcal{U}_\tau} \sum_{i \in \{M,R,Rm\}} \pi_i(p,\tau) \tag{8}$$

subject to:

$$\begin{aligned}
q_n + \beta \tau Q_n &\leq Q_n^{cap} \quad \text{(kapasitas produksi)} \\
0 &\leq \alpha + \beta \leq 1 \quad \text{(alokasi material)} \\
p_n, p_r, p_e &\geq 0 \quad \text{(non-negativity)} \\
p_n^{min} &\leq p_n \leq p_n^{max} \quad \text{(price ceiling)}
\end{aligned} \tag{9}$$

### 2.5 Kriteria Keseimbangan Nash-Stackelberg

Solusi equilibrium dicari melalui *backward induction* dimana Recycler menentukan $(\alpha,\beta)$ terlebih dahulu (follower), kemudian Manufacturer menentukan harga $(p_n, p_r, p_e)$ (leader). Kondisi KKT untuk fungsi Lagrangian:

$$\frac{\partial \pi_M}{\partial p_n} = 0 \Rightarrow a - 2b\,p_n^* = 0 \Rightarrow p_n^* = \frac{a}{2b} \tag{10}$$

dan seterusnya untuk variabel keputusan lainnya, diselesaikan secara iteratif melalui algoritma *Gauss-Seidel* atau *interior-point method*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis strategi CLSC baterai pensiun mengikuti delapan tahap *standard operating procedure* (SOP) berikut:

**Tahap 1 — Battery Passport & Tracking.** Setiap baterai yang diproduksi harus memiliki *digital passport* (mengikuti standar GB/T 34014-2017 China dan EU Battery Passport 2026) yang mencatat SOH, riwayat pengisian, siklus, dan provenance material. Arsitektur teknologi berbasis *blockchain consortium* (Hyperledger Fabric) digunakan untuk memastikan immutability data antar stakeholder.

**Tahap 2 — Predictive End-of-Life Forecasting.** Model *remaining useful life* (RUL) berbasis machine learning (XGBoost dengan fitur voltage curve, internal resistance, temperature profile) memprediksi waktu pensiun dengan akurasi ±3 bulan. Formulasi:

$$\hat{t}_{EoL} = f_{XGBoost}(\mathbf{x}_{features}) \tag{11}$$

**Tahap 3 — Collection Network Optimization.** Lokasi fasilitas collection center dioptimasi menggunakan *capacitated facility location problem* (CFLP) untuk meminimalkan total transportation cost:

$$\min \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} f_j y_j \tag{12}$$

subject to $\sum_{j} x_{ij} = d_i$ (permintaan terpenuhi) dan $\sum_{i} x_{ij} \leq K_j y_j$ (kapasitas).

**Tahap 4 — SOH Screening & Sorting.** Saat baterai diterima di collection center, dilakukan *rapid screening* menggunakan electrochemical impedance spectroscopy (EIS) untuk triase: SOH > 70% (lanjut echelon), 50–70% (remanufaktur), < 50% (direct recycling).

**Tahap 5 — Echelon Repurposing.** Baterai dengan SOH tinggi dirakit ulang menjadi *battery energy storage system* (BESS) untuk aplikasi stasioner. Standar UL 1974 dan IEC 62933-4-1 menjadi acuan safety dan performance.

**Tahap 6 — Remanufacturing Process Line.** Modul yang rusak di-*disassembly*, sel individual di-*rejuvenation* (pulse conditioning), lalu dirakit ulang mengikuti *Bill of Materials* (BoM) spesifik grade B.

**Tahap 7 — Hydrometallurgical Recycling.** Sisa baterai diproses melalui *leaching* (umumnya H₂SO₄ + H₂O₂), *solvent extraction* (D₂EHPA untuk Co/Ni, PC-88A untuk Mn, Cyanex 272 untuk Co), dan *selective precipitation* untuk menghasilkan Li₂CO₃, NiSO₄, CoSO₄ dengan kemurnian ≥ 99.5%.

**Tahap 8 — Closed-Loop Material Reintegration.** Material hasil daur ulang diumpankan kembali ke lini produksi baterai baru (*closed-loop*), menciptakan *circular economy material flow* sesuai standar ISO 14001 dan Cradle-to-Cradle Certified™.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.