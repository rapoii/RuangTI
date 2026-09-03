# 2673 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi pada Lingkungan Permintaan Stokastik dengan Evolusi Ramalan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, 54(2), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*, 32(8), 2509–2531. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer beroperasi dalam lingkungan permintaan (*demand environment*) yang sangat volatil, didorong oleh volatilitas rantai pasok global, pergeseran perilaku konsumen pasca-pandemi, dan siklus hidup produk (*product life cycle*) yang semakin pendek. Keputusan *lot sizing* dan penjadwalan produksi (*production scheduling*) merupakan dua keputusan operasional yang saling terkait erat (*tightly coupled*) dalam hierarsi perencanaan produksi (*production planning hierarchy* menurut HP Vollmann), namun dalam praktiknya sering ditangani secara terpisah menggunakan pendekatan deterministik. Pemisahan ini menimbulkan *sub-optimalitas struktural* yang signifikan karena setup cost yang tinggi (*high fixed setup costs*) dan sequence-dependent setup times menjadi bottleneck yang tidak tertangkap oleh model lot-sizing klasik.

Lead Researchers (2025) dalam publikasi di *Cuestiones de Fisioterapia* menyoroti bahwa integrasi keputusan lot-sizing dengan penjadwalan mesin paralel (*parallel-machine scheduling*) menggunakan pendekatan optimasi stokastik hibrida (*hybrid stochastic optimization*) mampu menjembatani kesenjangan antara model akademik yang sophisticated dan kebutuhan industri. Pendekatan hibrida yang dimaksud menggabungkan *Mixed-Integer Linear Programming* (MILP) untuk keputusan setup dengan *stochastic programming* untuk menangkap ketidakpastian permintaan.

Forel & Grunow (2023) menambahkan dimensi kritis bahwa pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot-sizing "jarang digunakan dalam praktik" (*seldom used in practice*), karena industri lebih memilih *rolling-horizon planning* dengan pembaruan ramalan yang sering. Mereka memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) untuk menjembatani jurang tersebut. Hasil simulasi ekstensif pada data sintetis dan *real-world* menunjukkan bahwa model evolusi ramalan mampu mengurangi biaya aktual hingga 8–14% dibandingkan dengan pendekatan stokastik konvensional yang mengasumsikan permintaan sebagai variabel eksogen statis.

Urgensi operasional dari integrasi ini semakin nyata ketika mempertimbangkan bahwa keputusan lot-sizing yang tidak adaptif terhadap evolusi informasi permintaan dapat menyebabkan *bullwhip effect* dan penumpukan *safety stock* yang inefisien. Dalam konteks Industri 4.0, di mana sensor IoT menghasilkan *demand signal* real-time, kemampuan untuk mengintegrasikan evolusi informasi stokastik ke dalam keputusan lot-sizing dan penjadwalan menjadi keunggulan kompetitif yang menentukan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Stochastic Lot-Sizing

Model *Capacitated Lot-Sizing Problem with Stochastic Demand* (CLSP-SD) dibangun di atas himpunan periode $T = \{1, 2, \ldots, |T|\}$, himpunan produk $I$, dan himpunan skenario permintaan $\Omega = \{\omega_1, \ldots, \omega_S\}$ dengan probabilitas $p_\omega$.

**Parameter:**
- $c_i$: biaya produksi per unit produk $i$
- $h_i$: biaya inventory holding per unit per periode
- $s_i$: biaya setup produk $i$
- $C_{ij}$: kapasitas mesin $j$ per periode
- $\mu_i$: waktu proses per unit produk $i$ pada mesin $j$
- $d_{it}^\omega$: permintaan stokastik produk $i$ pada periode $t$ di skenario $\omega$
- $\tau_{ij}$: sequence-dependent setup time dari produk $i$ ke produk $j$ pada mesin $j$

**Variabel keputusan:**
- $X_{it}^\omega \geq 0$: jumlah produksi produk $i$ pada periode $t$ di skenario $\omega$
- $Y_{it}^\omega \in \{0,1\}$: 1 jika setup produk $i$ dilakukan pada periode $t$, 0 sebaliknya
- $I_{it}^\omega \geq 0$: inventory level produk $i$ di akhir periode $t$
- $Z_{ijt}^\omega \in \{0,1\}$: 1 jika produk $j$ dijadwalkan setelah produk $i$ pada periode $t$ di mesin yang sama

**Fungsi tujuan:**

$$\min \sum_{t=1}^{T} \sum_{i \in I} \left[ s_i Y_{it} + \mathbb{E}_\omega \left[ c_i X_{it}^\omega + h_i I_{it}^\omega \right] \right] \tag{1}$$

dengan ekspektasi $\mathbb{E}_\omega[\cdot] = \sum_{\omega \in \Omega} p_\omega [\cdot]$.

**Kendala:**

**a. Keseimbangan inventory (per skenario):**
$$I_{i,t-1}^\omega + X_{it}^\omega - I_{it}^\omega = d_{it}^\omega, \quad \forall i \in I, t \in T, \omega \in \Omega \tag{2}$$

**b. Kendala lot-sizing (linking):**
$$X_{it}^\omega \leq M_i Y_{it}, \quad \forall i \in I, t \in T, \omega \in \Omega \tag{3}$$

**c. Kendala kapasitas (coupling dengan penjadwalan):**
$$\sum_{i \in I} \mu_{ij} X_{it}^\omega + \sum_{(i,k) \in S} \tau_{ij} Z_{ijt}^\omega \leq C_{jt}, \quad \forall j \in J, t \in T, \omega \in \Omega \tag{4}$$

**d. Non-antikuitas (non-anticipativity) untuk lot-sizing:**
Variabel keputusan *first-stage* ($Y_{it}$) tidak boleh bergantung pada skenario $\omega$:
$$Y_{it}^{\omega_1} = Y_{it}^{\omega_2}, \quad \forall \omega_1, \omega_2 \in \Omega \tag{5}$$

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengusulkan agar permintaan dimodelkan sebagai proses stokastik dengan evolusi ramalan:

$$d_{t+1} = d_t + \epsilon_t \tag{6}$$

dengan $\epsilon_t$ adalah *martingale difference sequence*, $\mathbb{E}[\epsilon_t | \mathcal{F}_t] = 0$. Ketika ramalan diperbarui pada periode $t+1$, nilai $d_{t+1}$ menjadi *realized* dan informasinya ditambahkan ke *filtration* $\mathcal{F}_{t+1}$.

Ekspektasi permintaan *forward-looking* pada periode perencanaan $\tau$ didefinisikan:

$$\hat{d}_{\tau, t} = \mathbb{E}[d_\tau | \mathcal{F}_t] \tag{7}$$

dengan evolusi:

$$\hat{d}_{\tau, t+1} = \hat{d}_{\tau, t} + (\delta_{\tau, t+1} - \delta_{\tau, t}) \tag{8}$$

di mana $\delta_{\tau, t}$ adalah revisi ramalan (*forecast revision*) yang mengikuti proses ARIMA(0,1,1) atau exponential smoothing dengan parameter smoothing $\alpha$.

### 2.3 Hybrid Stochastic Programming dengan Production Recourse

Lead Researchers (2025) memperluas model Forel-Grunow dengan menambahkan *recourse decisions* $X_{it}^\omega$ yang merepresentasikan fleksibilitas replanning pada *rolling-horizon*:

$$\min \sum_{t=1}^{T} \sum_{i \in I} s_i Y_{it} + \sum_{t=1}^{T} \mathbb{E}_\omega \left[ Q_t(X_t^\omega, Y_t, d_t^\omega) \right] \tag{9}$$

dengan *stage cost function*:

$$Q_t = \sum_{i \in I} \left[ c_i X_{it}^\omega + h_i^+ I_{it}^{+,\omega} + h_i^- I_{it}^{-,\omega} + p_i B_{it}^\omega \right] \tag{10}$$

di mana $h_i^+$ adalah biaya inventory positif, $h_i^-$ adalah biaya inventory negatif (backlog), dan $p_i$ adalah penalty biaya shortage.

### 2.4 Linearisasi dan Penyelesaian

Untuk menjaga kelinieran model, digunakan linearisasi:

$$\sum_{i \in I} X_{it}^\omega + \sum_{(i,j) \in \mathcal{S}} \tau_{ij} Z_{ijt}^\omega \leq C_t \cdot K_{max}, \quad \forall t, \omega \tag{11}$$

Model diselesaikan dengan dekomposisi *Benders* atau *Progressive Hedging Algorithm* (PHA) untuk menangani dimensi skenario yang besar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model Lead Researchers (2025) yang dipadukan dengan framework Forel-Grunow (2023) mengikuti SOP delapan tahapan berikut:

**Tahap 1 — Akuisisi & Pembersihan Data Historis (Durasi: 2 minggu)**
Kumpulkan data permintaan historis minimal 36 periode, kalender produksi, dan struktur BOM (*Bill of Materials*). Terapkan uji stasioneritas Augmented Dickey-Fuller (ADF) untuk memverifikasi asumsi MMFE.

**Tahap 2 — Estimasi Model Evolusi Ramalan (Durasi: 1 minggu)**
Kalibrasi parameter MMFE menggunakan Maximum Likelihood Estimation (MLE) untuk parameter $\alpha$, $\beta$, dan noise variance $\sigma^2_\epsilon$. Lakukan validasi out-of-sample dengan rolling-origin cross-validation.

**Tahap 3 — Generasi Skenario (Durasi: 1 minggu)**
Bangun *scenario tree* menggunakan metode Monte Carlo dengan 200–500 skenario per periode planning horizon. Terapkan *scenario reduction* (algoritma forward selection dari Dupačová–Gröwe-Kornowski) hingga menjadi 20–30 skenario representatif dengan jarak Kantorovich minimal.

**Tahap 4 — Formulasi MILP Stochastic (Durasi: 2 minggu)**
Konstruksi model di lingkungan Gurobi 11.0 atau CPLEX 22.1 dengan *callback function* untuk Benders cuts. Validasi kelinieran formulasi (Persamaan 1–11).

**Tahap 5 — Kalibrasi Parameter Biaya (Durasi: 1 minggu)**
Setup cost $s_i$ dihitung sebagai *activity-based costing* dari waktu persiapan mesin aktual. Holding cost $h_i$ menggunakan 20–30% *carrying cost* dari nilai inventori rata-rata sesuai standar APICS/ASCM.

**Tahap 6 — Penyelesaian & Validasi (Durasi: 2 minggu)**
Jalankan solver dengan gap optimalitas 0.5%. Validasi hasil dengan simulasi *what-if* menggunakan pendekatan digital twin.

**Tahap 7 — Integrasi dengan ERP/MES (Durasi: 4 minggu)**
Hubungkan model dengan sistem ERP (SAP S/4HANA, Oracle Cloud SCM) melalui API *planning function* dan MES (Siemens Opcenter, Dassault DELMIA) untuk eksekusi jadwal di lantai pabrik.

**Tahap 8 — Monitoring & Re-optimization (Operasional kontinu)**
Implementasikan *rolling-horizon* dengan panjang horizon $T = 12$ periode dan re-optimisasi mingguan, mengikuti rekomendasi Forel-Grunow (2023).

**Diagram Alir Logika:**

```
┌─────────────────────┐
│ Data Historis & ERP │
└──────────┬──────────┘
           ↓
┌─────────────────────┐    ┌─────────────────────┐
│ Estimasi MMFE (α,β) │ ←→ │ Uji Stasioneritas   │
└──────────┬──────────┘    └─────────────────────┘
           ↓
┌─────────────────────┐
│ Monte Carlo &       │
│ Scenario Reduction  │
└──────────┬────────