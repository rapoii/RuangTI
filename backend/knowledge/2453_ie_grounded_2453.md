# 2453 — Strategi Closed-Loop Supply Chain untuk Baterai Bekas EV: Integrasi Echelon Utilization, Daur Ulang, dan Remanufaktur dalam Kerangka Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Closed-Loop Supply Chain (CLSC) untuk Baterai Power Bekas dengan Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*. 14th International Conference on Logistics and Systems Engineering (ICLSE 2024). DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Shin, Y., Kim, G., Jeong, Y. (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan baru dalam manajemen rantai pasok baterai litium-ion bekas (retired power batteries/RPB). Berdasarkan laporan International Energy Agency (IEA) dan proyeksi yang dikutip oleh JIANG & TANG (2025, DOI: [10.52202/078960-0068](https://doi.org/10.52202/078960-0068)), volume baterai EV yang memasuki fase end-of-life (EoL) diproyeksikan mencapai 1,4 juta ton pada 2030 dan melonjak hingga 14 juta ton pada 2040. Fenomena ini menimbulkan dua pertanyaan strategis yang simultan: (1) bagaimana merancang closed-loop supply chain (CLSC) yang secara ekonomi layak untuk回收 (recycling) dan remanufaktur material kritis seperti litium, kobalt, nikel, dan mangan; dan (2) bagaimana mengintegrasikan *echelon utilization*—yakni pemanfaatan baterai bekas pada aplikasi second-life (penyimpanan energi stasioner, UPS, lampu jalan pintar)—sebelum proses daur ulang material.

Urgensi operasional makin diperparah oleh tiga faktor. Pertama, ketidakpastian return rate baterai yang dipengaruhi siklus hidup, kondisi operasional, dan suhu—menurut Shin et al. (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)), return rate dapat berfluktuasi hingga ±25% dari baseline, sehingga pendekatan deterministik menjadi tidak robust. Kedua, disparitas regulasi lintas-yurisdiksi (misalnya EU Battery Regulation 2023/1542 yang mensyaratkan 65%回收 efficiency pada 2025 dan 80% pada 2030, serta China GB/T 34014-2017) menuntut strategi dual-channel: baterai yang lolos threshold State-of-Health (SoH ≥ 70%) diarahkan ke echelon, sementara yang gagal langsung masuk recycling stream. Ketiga, ketidakpastian harga material sekunder (Co, Ni, Li) di pasar London Metal Exchange (LME) dan Shanghai Metal Market (SMM) menciptakan eksposur risiko finansial yang signifikan bagi para pelaku CLSC.

Kontribusi riset JIANG & TANG (2025) adalah membangun model CLSC multi-period dan multi-echelon yang mengoptimasi alokasi baterai bekas antara tiga kanal pemulihan—echelon utilization, remanufaktur, dan daur ulang material—dengan memperhitungkan stochastic return dan dinamika harga. Shin et al. (2024) melengkapi kerangka ini dengan pendekatan robust optimization menggunakan uncertainty set berbasis budget-of-uncertainty untuk mengelola return management system dalam konteks circular economy. Sinergi keduanya memberikan landasan kuantitatif yang diperlukan oleh para decision-maker di industri baterai, OEM otomotif, dan operator recycling facility.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Multi-Echelon

JIANG & TANG (2025) memodelkan CLSC baterai bekas sebagai jaringan lima-tingkat yang terdiri dari: **(1)** OEM/cell manufacturer sebagai sumber utama retired battery; **(2)** collection center untuk akuisisi; **(3)** inspection & grading facility; **(4)** echelon utilization integrator (untuk aplikasi second-life); dan **(5)** recycling & remanufacturing plant. Model mixed-integer linear programming (MILP) kemudian memformulasikan keputusan alokasi pada setiap node.

### 2.2 Notasi Parameter dan Variabel Keputusan

**Parameter:**

- $i \in I$: indeks OEM/manufaktur ($|I|$ buah)
- $j \in J$: indeks collection center
- $k \in K$: indeks grading facility
- $l \in L$: indeks echelon integrator
- $m \in M$: indeks recycling plant
- $t \in T$: indeks periode waktu (horizon diskrit, biasanya bulanan)
- $q \in Q = \{1,2,3\}$: indeks recovery pathway (1 = echelon, 2 = remanufaktur, 3 = daur ulang)

**Parameter ekonomi-teknis:**

- $c_{ij}^{coll}$: biaya transportasi dari OEM $i$ ke collection center $j$
- $\pi_q$: profit per unit baterai pada jalur pemulihan $q$
- $\rho_{kq}$: probabilitas baterai dialokasikan ke jalur $q$ setelah grading di $k$
- $\eta_k$: akurasi State-of-Health assessment (SoH) di facility $k$
- $s_{SoH}^{min}$: threshold SoH minimum untuk echelon utilization (umumnya 0,7)
- $\theta_q$: yield material recovery untuk pathway $q$
- $p_t^{mat}$: harga material di periode $t$

**Variabel keputusan:**

- $x_{ijkt}^{q} \in \mathbb{R}_{\geq 0}$: jumlah baterai mengalir pada jalur $(i,j,k,l,q)$ di periode $t$
- $y_{kj}^{q} \in \{0,1\}$: keputusan aktifasi grading untuk jalur $q$
- $z_m \in \{0,1\}$: keputusan pembukaan recycling plant $m$
- $u_{lt} \geq 0$: kapasitas echelon integrator $l$ di periode $t$

### 2.3 Fungsi Objektif Multi-Objektif

JIANG & TANG (2025) mengusulkan fungsi objektif gabungan yang memaksimalkan *expected total profit* dengan bobot $\alpha, \beta$ pada komponen ekonomi dan lingkungan:

$$\max \; Z = \alpha \cdot \Pi_{econ} - \beta \cdot \Gamma_{carbon} + \gamma \cdot \Omega_{social} \tag{1}$$

dengan komponen:

$$\Pi_{econ} = \sum_{t \in T} \sum_{q \in Q} \pi_q \cdot \theta_q \cdot \underbrace{\sum_{i,j,k,l} x_{ijkt}^{q}}_{\text{alokasi CLSC}} - \sum_{i,j,t} c_{ij}^{coll} \cdot x_{ijkt}^{q} - \sum_{m} F_m z_m \tag{2}$$

$$\Gamma_{carbon} = \sum_{t \in T} \sum_{q \in Q} \sum_{i,j,k,l} e_q \cdot d_{ij} \cdot x_{ijkt}^{q} \tag{3}$$

di mana $e_q$ adalah emisi CO₂eq per unit-km pada jalur $q$, dan $d_{ij}$ jarak geografis.

### 2.4 Kendala (Constraints)

**(a) Kendala keseimbangan aliran (flow balance) di tiap grading node:**

$$\sum_{i} x_{ijkt}^{q} = \sum_{l} x_{jkl t}^{q} + w_{jkt}^{q,loss} \quad \forall j,k,t,q \tag{4}$$

dengan $w_{jkt}^{q,loss}$ mewakili loss rate (rusak/cacat setelah grading).

**(b) Kendala threshold SoH untuk echelon utilization:**

$$\eta_k \cdot SoH_{input} \geq s_{SoH}^{min} \Rightarrow x_{ijkt}^{1} \geq 0 \quad \text{(activate echelon pathway)} \tag{5}$$

**(c) Kendala kapasitas:**

$$\sum_{q} \sum_{j,k,l} x_{ijkt}^{q} \leq Cap_i^t \quad \forall i,t \tag{6}$$

$$\sum_{q} \sum_{i,j} x_{ijkt}^{q} \leq Cap_k^t \quad \forall k,t \tag{7}$$

**(d) Kendala回收 efficiency sesuai regulasi:**

$$\sum_{q \in \{2,3\}} \theta_q \cdot x_{ijkt}^{q} \geq \lambda_{reg} \cdot \sum_{q} x_{ijkt}^{q} \quad \forall i,j,k,t \tag{8}$$

dengan $\lambda_{reg}$ adalah threshold回收 efficiency regulatori (misal 0,65 sesuai EU Battery Regulation).

### 2.5 Formulasi Robust Optimization (dari Shin et al., 2024)

Untuk menangani ketidakpastian return rate $\tilde{R}_{it}$, Shin et al. (2024, DOI: [10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)) menggunakan uncertainty set Box-based dengan budget-of-uncertainty $\Gamma_0$:

$$\mathcal{U}_R = \left\{ \tilde{R}_{it} \mid R_{it}^{nom} - \hat{R}_{it}^{-} \leq \tilde{R}_{it} \leq R_{it}^{nom} + \hat{R}_{it}^{+}, \sum_{i,t} \frac{|\tilde{R}_{it} - R_{it}^{nom}|}{\hat{R}_{it}^{+}} \leq \Gamma_0 \right\} \tag{9}$$

Counterpart robust-nya terhadap kendala kepuasan demand $\sum_j x_{ij} \geq \tilde{R}_{it}$ menjadi:

$$\sum_j x_{ij} \geq R_{it}^{nom} + \Gamma_0 \cdot \hat{R}_{it}^{+} \quad \forall i,t \tag{10}$$

yang menghasilkan *worst-case feasible solution* di bawah fluktuasi return yang dibatasi budget $\Gamma_0$.

### 2.6 Indikator Kinerja CLSC

JIANG & TANG (2025) mendefinisikan tiga KPI utama:

$$KPI_1 = \frac{\sum_{q} \theta_q \cdot x^{q}}{\sum_{q} x^{q}} \quad (\text{overall recovery rate}) \tag{11}$$

$$KPI_2 = \frac{\Pi_{echelon}}{\Pi_{econ}} \quad (\text{echelon profit share}) \tag{12}$$

$$KPI_3 = \frac{CO_2^{avoided}}{CO_2^{baseline}} \quad (\text{carbon reduction ratio}) \tag{13}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan integrasi framework JIANG & TANG (2025) dan best practice yang diterapkan pada industri回收 baterai global (CATL Brunp, GEM Co., Redwood Materials), kami menyusun SOP tujuh-tahap untuk implementasi CLSC baterai bekas:

**Tahap 1 — Akuisisi dan Reverse Logistics Setup.**
OEM dan dealer EV menyediakan jalur pengembalian baterai bekas via collection center. JIANG & TANG merekomendasikan relokasi $j$ berdasarkan minimasi $c_{ij}^{coll}$ dengan radius layanan optimal 150–300 km. Mobile collection unit digunakan untuk baterai dari fasilitas kecil. **Output:** kapasitas aggregasi per kuartal.

**Tahap 2 — Diagnostik dan State-of-Health Assessment.**
Setiap baterai menjalani pengujian non-destructif: cyclic voltammetry, electrochemical impedance spectroscopy (EIS), dan capacity test pada C/3 rate. Algoritma machine learning (random forest, XGBoost) memprediksi SoH dan Remaining Useful Life (RUL) dengan target akurasi $R^2 \geq 0{,}92$. **SOP mengikuti standar IEC 62933-2-1 dan GB/T 34014-2017.**

**Tahap 3 — Grading dan Klasifikasi Tiga-Kelas.**

| Kelas | Kriteria SoH | RUL Estimasi | Jalur Tujuan |
|-------|-------------|--------------|--------------|
| Grade A | $\geq 80\%$ | $\geq 5$ tahun | Echelon utilization (stationary storage) |
| Grade B | $70\% \leq SoH < 80\%$ | 2–5 tahun | Remanufaktur (refurbish untuk second-life EV) |
| Grade C | $< 70\%$ | $< 2$ tahun | Daur ulang material (hydrometallurgy) |

**Tahap 4 — Alokasi Optimal dan Optimasi Periodik.**
Model MILP dari persamaan (1)–(8) diselesaikan setiap periode (bulanan) menggunakan solver CPLEX atau Gurobi. Jika horizon ketidakpastian tinggi, gunakan robust counterpart persamaan (9)–(10). **Frekuensi re-optimasi:** mingguan untuk dynamic adjustment.

**Tahap 5 — Pelaksanaan Recovery Pathway.**

- *Echelon:* integrasi modul Grade A ke dalam Battery Energy Storage System (BESS) kapasitas 100 kWh–10 MWh.
- *Remanufaktur:* pembongkaran modul, pengg.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
