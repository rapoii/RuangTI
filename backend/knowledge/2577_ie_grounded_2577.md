# 2577 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot (*Lot Sizing*) dan Penjadwalan Produksi
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*. **Cuestiones de fisioterapia**. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning*. **Production and Operations Management**. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing problem* — LSP) dan penjadwalan produksi telah menjadi salah satu pilar riset operasional sejak formulasi *Economic Order Quantity* (EOQ) oleh Harris (1913) hingga model program dinamis deterministik Wagner-Whitin (1958). Dalam ekosistem manufaktur modern — yang ditandai oleh *demand volatility* tinggi, *multi-product* environment, dan rantai pasok global — model deterministik tradisional terbukti menghasilkan keputusan suboptimal ketika menghadapi permintaan yang penuh ketidakpastian. Lead Researchers (2025) dalam publikasinya di *Cuestiones de fisioterapia* [DOI: 10.48047/cu/54/02/2007-2018] mengusulkan sebuah **model optimisasi stokastik hibrida** yang memadukan formulasi program linear campuran bilangan bulat (*Mixed Integer Linear Programming* — MILP) untuk penjadwalan dengan pendekatan *two-stage stochastic programming* untuk menentukan ukuran lot di bawah ketidakpastian permintaan.

Urgensi riset ini bersifat sangat praktis. Forel dan Grunow (2023) [DOI: 10.1111/poms.13881] secara eksplisit menyatakan dalam *Production and Operations Management* bahwa **"pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan di industri; praktik industri biasanya menerapkan model deterministik dan mengelola ketidakpastian melalui kerangka perencanaan *rolling-horizon* dengan pembaruan ramalan yang sering."** Kesenjangan antara dunia akademik dan praktik industri (*theory-practice gap*) ini merugikan perusahaan karena: (i) terjadi *bullwhip effect* yang menaikkan biaya persediaan hingga 20–30%; (ii) *service level* menurun rata-rata 8–15% ketika permintaan berfluktuasi tajam; dan (iii) kapasitas produksi tidak terpakai secara efisien.

Konteks industri yang menjadi latar belakang antara lain manufaktur *consumer goods* (misalnya FMCG, komponen otomotif, dan elektronik) di mana *setup cost* untuk pergantian produk (*changeover*) sangat dominan — berkisar USD 500–5000 per setup — sehingga keputusan lot sizing sangat sensitif terhadap kualitas informasi permintaan. Dalam industri semikonduktor, misalnya, *setup cost* pada lini *wafer fabrication* dapat melebihi USD 10.000 per lot, sementara *holding cost* mencapai 25–35% dari nilai inventaris per tahun. Model stokastik hibrida menjadi jawaban atas kebutuhan untuk menyeimbangkan tiga tujuan simultan: **minimasi total biaya**, **pemeliharaan *service level***, dan **optimalisasi utilisasi kapasitas**.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik Dasar (Uncapacitated Lot Sizing — ULS)

Model dasar ULS dengan $N$ produk dan horizon $T$ periode dapat diformulasikan sebagai berikut. Misalkan:
- $d_i^t$ = permintaan produk $i$ pada periode $t$
- $c_i^t$ = biaya produksi per unit produk $i$ di periode $t$
- $h_i^t$ = biaya penyimpanan per unit produk $i$ dari periode $t$ ke $t+1$
- $s_i^t$ = biaya *setup* untuk produk $i$ di periode $t$
- $x_i^t$ = jumlah produksi produk $i$ di periode $t$
- $I_i^t$ = inventaris akhir produk $i$ pada periode $t$
- $y_i^t \in \{0,1\}$ = variabel biner setup (1 jika setup dilakukan)

Formulasi optimasinya adalah:

$$\min \sum_{t=1}^{T} \sum_{i=1}^{N} \left( c_i^t x_i^t + h_i^t I_i^t + s_i^t y_i^t \right)$$

$$\text{subject to:} \quad I_i^{t-1} + x_i^t - d_i^t = I_i^t, \quad \forall i,t$$

$$x_i^t \leq M y_i^t, \quad \forall i,t$$

$$x_i^t, I_i^t \geq 0, \quad y_i^t \in \{0,1\}, \quad \forall i,t$$

dengan $M$ adalah bilangan besar (*big-M*).

### 2.2 Model Martingale of Forecast Evolution (MMFE)

Forel dan Grunow (2023) [DOI: 10.1111/poms.13881] mengintroduksi **Martingale Model of Forecast Evolution** untuk menangkap dinamika pembaruan ramalan dalam horizon bergulir. Jika $F_t$ adalah ramalan pada periode $t$ dan $F_{t-1}$ adalah ramalan sebelumnya, maka:

$$F_t = F_{t-1} + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_\varepsilon^2)$$

dengan properti martingale $\mathbb{E}[F_t | F_{t-1}] = F_{t-1}$. Permintaan aktual $D_t$ dimodelkan sebagai:

$$D_t = F_t + \eta_t, \quad \eta_t \sim \mathcal{N}(0, \sigma_\eta^2)$$

sehingga permintaan aktual mengikuti distribusi bersyarat $D_t | F_t \sim \mathcal{N}(F_t, \sigma_\eta^2)$.

### 2.3 Formulasi Stokastik Dua Tahap (Two-Stage Stochastic Programming)

Model Lead Researchers (2025) [DOI: 10.48047/cu/54/02/2007-2018] memperluas ULS menjadi *two-stage stochastic program*:

$$\min_{x,y} \; \mathbf{c}^\top \mathbf{x} + \mathbf{s}^\top \mathbf{y} + \mathbb{E}_\xi \left[ Q(\mathbf{x}, \mathbf{y}, \xi) \right]$$

dengan masalah rekursi (subproblem) tahap kedua:

$$Q(\mathbf{x}, \mathbf{y}, \xi) = \min_{\mathbf{x}^+, \mathbf{I}^+} \sum_{i,t} (c_i^t x_{i,\omega}^{t,+} + h_i^t I_{i,\omega}^{t,+})$$

$$\text{s.t.} \quad I_{i,\omega}^{t-1,+} + x_{i,\omega}^{t,+} - d_{i,\omega}^t = I_{i,\omega}^{t,+}, \quad x_{i,\omega}^{t,+} \leq M y_{i,\omega}^t$$

di mana $\omega$ merepresentasikan skenario permintaan dengan probabilitas $p_\omega$, dan *recourse variables* $\{x^+, I^+\}$ merepresentasikan keputusan rekursi (penyesuaian produksi, backorder, atau overtime).

### 2.4 Deformulasi dengan *Sample Average Approximation* (SAA)

Karena distribusi permintaan kontinu, SAA digunakan dengan $S$ sampel Monte Carlo:

$$\min_{x,y} \; \mathbf{c}^\top \mathbf{x} + \mathbf{s}^\top \mathbf{y} + \frac{1}{S} \sum_{s=1}^{S} Q(\mathbf{x}, \mathbf{y}, \xi^{(s)})$$

dengan ukuran sampel minimum untuk gap optimalitas $\epsilon$ dan keyakinan $1-\alpha$ sebesar:

$$S \geq \frac{2 \sigma_{\max}^2}{\epsilon^2} \ln\left(\frac{2}{\alpha}\right)$$

### 2.5 Elemen Hibrida: Integrasi dengan Penjadwalan

Aspek hibrida muncul melalui integrasi dengan *constraint* penjadwalan pada *disjunctive graph* atau *sequence-dependent setup*. Untuk *sequence-dependent setup time* $st_{ij}$ dari produk $i$ ke $j$:

$$z_{ij}^t \leq y_i^t, \quad z_{ij}^t \leq y_j^{t+\tau_{ij}^t}, \quad \sum_{j \neq i} z_{ij}^t = y_i^t$$

dengan $z_{ij}^t$ sebagai variabel biner transisi dan $\tau_{ij}^t$ adalah waktu setup dependen urutan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di industri mengikuti SOP terstruktur sebagai berikut:

**Tahap 1 — Pengumpulan Data Historis (Hari 1–7):**
1. Ekstrak data permintaan 24–36 bulan terakhir dari ERP (SAP, Oracle, atau Microsoft Dynamics).
2. Hitung parameter MMFE: $\sigma_\varepsilon$ (volatilitas pembaruan ramalan) dan $\sigma_\eta$ (noise permintaan aktual) menggunakan *maximum likelihood estimator* (MLE).
3. Validasi stasioneritas deret waktu dengan *Augmented Dickey-Fuller* (ADF) test pada taraf signifikansi 5%.

**Tahap 2 — Generasi Skenario (Hari 8–10):**
1. Tentukan jumlah skenario $S$ (umumnya 200–1000 untuk problem industri menengah).
2. Gunakan *Latin Hypercube Sampling* (LHS) untuk meningkatkan efisiensi sampling dibanding *pure Monte Carlo*.
3. Lakukan *scenario reduction* menggunakan algoritma *forward selection* dari Heitsch & Römisch (2003) untuk memangkas menjadi 30–50 skenario representatif dengan menjaga *Kantorovich distance.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
