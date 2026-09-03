# 1553 — Optimasi Stokastik Hibrida untuk Masalah Lot Sizing dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan lot sizing dan penjadwalan produksi merupakan salah satu keputusan operasional paling kritikal dalam rantai pasok manufaktur modern. Dalam konteks industri nyata, perencana produksi menghadapi tantangan multidimensional: ketidakpastian permintaan pelanggan, fluktuasi harga bahan baku, keterbatasan kapasitas mesin, serta kebutuhan untuk menyeimbangkan biaya setup, biaya inventory, dan kemampuan merespons pesanan mendadak. Lead Researchers (2025) dalam artikelnya yang dipublikasikan di *Cuestiones de fisioterapia* dengan DOI [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengusulkan pendekatan hibrida yang menggabungkan stochastic programming dengan mekanisme rolling-horizon untuk menjawab tantangan ini secara simultan.

Urgensi ekonomis dari masalah ini sangat nyata. Industri manufaktur global, khususnya sektor FMCG, otomotif, dan semikonduktor, menghadapi kerugian signifikan akibat keputusan lot sizing yang suboptimal. Studi Forel & Grunow (2023) yang diterbitkan di *Production and Operations Management* dengan DOI [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881) menunjukkan bahwa meskipun pendekatan akademik terhadap stochastic lot sizing telah berkembang pesat, "academic approaches considering demand uncertainty in lot sizing are seldom used in practice." Industri secara umum masih menggunakan model deterministik dengan safety stock untuk mengakomodasi ketidakpastian, kemudian mengelola ekspektasi melalui rolling-horizon planning dengan pembaruan forecast yang sering.

Gap antara riset akademis dan implementasi industri inilah yang menjadi motivasi utama paper Lead Researchers (2025). Mereka menyadari bahwa solusi stochastic murni sering kali komputasionalnya tidak tractable untuk skala produksi nyata, sementara model deterministik tidak mampu menangkap struktur ketidakpastian yang inheren. Pendekatan hibrida yang mereka usulkan mencoba menjembatani kesenjangan ini dengan mengintegrasikan kekuatan model stokastik dengan fleksibilitas operasional rolling-horizon. Forel & Grunow (2023) juga mengonfirmasi bahwa kerangka rolling-horizon dengan pembaruan forecast yang sering menciptakan "replanning flexibility" yang harus ditangkap secara eksplisit dalam formulasi stokastik, sehingga produksi recourse menjadi komponen penting.

Relevansi industri dari topik ini makin meningkat di era Industry 4.0, di mana data permintaan real-time, sensor IoT, dan sistem ERP memungkinkan perusahaan untuk menangkap informasi permintaan dengan granularitas lebih tinggi. Namun, tanpa metodologi lot sizing yang tepat, kelebihan data ini tidak dapat diterjemahkan menjadi keputusan operasional yang optimal. Modul 1553 ini bertujuan memberikan kerangka analitis dan prosedural bagi praktisi industri untuk mengadopsi pendekatan hibrida stokastik secara bertahap, dimulai dari pemahaman formulasi matematis hingga implementasi SOP dan validasi kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (Wagner-Within)

Sebagai baseline, kita mulai dengan formulasi lot sizing deterministik. Untuk $T$ periode perencanaan dan $J$ produk, model Wagner-Within dapat dinyatakan sebagai:

$$\min_{x_{j,t}, y_{j,t}, I_{j,t}} \sum_{t=1}^{T} \sum_{j=1}^{J} \left( s_j y_{j,t} + v_j x_{j,t} + h_j I_{j,t} \right)$$

dengan kendala:

$$I_{j,t} = I_{j,t-1} + x_{j,t} - d_{j,t}, \quad \forall j,t$$

$$x_{j,t} \leq M \cdot y_{j,t}, \quad \forall j,t$$

$$y_{j,t} \in \{0,1\}, \quad x_{j,t} \geq 0, \quad I_{j,t} \geq 0$$

di mana $s_j$ adalah biaya setup, $v_j$ biaya variabel produksi per unit, $h_j$ biaya holding per unit per periode, $d_{j,t}$ permintaan deterministik, dan $M$ big-M parameter.

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengadopsi MMFE untuk memodelkan evolusi forecast dalam kerangka rolling-horizon. Jika $\hat{D}_{t,\tau}$ menyatakan forecast permintaan pada periode $\tau$ yang dibuat di awal periode $t$, maka:

$$\hat{D}_{t,\tau} = \hat{D}_{t-1,\tau} + \epsilon_{t,\tau}, \quad \forall t < \tau$$

dengan asumsi $\epsilon_{t,\tau}$ adalah martingale difference sequence, yaitu:

$$E[\epsilon_{t,\tau} | \mathcal{F}_{t-1}] = 0$$

$$Var(\epsilon_{t,\tau}) = \sigma_\epsilon^2 \cdot (\tau - t)$$

di mana $\sigma_\epsilon^2$ adalah parameter variance satu-langkah dan $\mathcal{F}_{t-1}$ adalah informasi historis hingga periode $t-1$. Sifat penting dari MMFE adalah varians error forecast meningkat secara linear terhadap lead time:

$$Var(D_\tau - \hat{D}_{t,\tau}) = (T - t) \sigma_\epsilon^2$$

### 2.3 Formulasi Hibrida Stokastik dengan Production Recourse

Lead Researchers (2025) memperluas model deterministik dengan komponen stokastik menggunakan two-stage stochastic programming. Permintaan $d_{j,t}$ direpresentasikan sebagai random variable $\tilde{d}_{j,t}$ dengan support pada skenario $s \in \mathcal{S}$. Formulasi two-stage dengan recourse:

$$\min \sum_{t=1}^{T} \sum_{j=1}^{J} \left( s_j y_{j,t} + v_j x_{j,t} \right) + E_\xi \left[ \sum_{t=1}^{T} \sum_{j=1}^{J} h_j I_{j,t}^+(\xi) + p_j B_{j,t}^-(\xi) \right]$$

dengan kendala recourse:

$$I_{j,t}(\xi) = I_{j,t-1}(\xi) + x_{j,t} + q_{j,t}(\xi) - \tilde{d}_{j,t}(\xi)$$

$$q_{j,t}(\xi) \leq Q_{j,t}^{recourse}, \quad q_{j,t}(\xi) \geq 0$$

di mana $q_{j,t}(\xi)$ adalah variabel recourse (produksi tambahan) yang dapat diaktifkan setelah realisasi demand, $B_{j,t}^-$ adalah backorder, dan $p_j$ adalah biaya penalty backorder per unit.

### 2.4 Kombinasi dengan Rolling-Horizon

Integrasi rolling-horizon mengikuti pendekatan Forel & Grunow (2023). Misalkan horizon perencanaannya $H$ periode, maka pada setiap periode $t$, model diselesaikan dengan informasi forecast terkini $\hat{D}_{t,\tau}$ untuk $\tau = t, t+1, \ldots, t+H-1$:

$$\hat{D}_{t,\tau} = D_{\tau}^0 + \sum_{k=1}^{t} \epsilon_{k,\tau}$$

dimana $D_\tau^0$ adalah forecast awal. Hanya keputusan $x_{j,t}^*$ yang diimplementasikan, kemudian horizon bergeser ke depan dan model di-resolve dengan data terbaru. Fungsi nilai recourse yang menangkap fleksibilitas replanning:

$$V^{rec}(x, \xi) = \min_{q \geq 0} \sum_{j,t} \left( v_j^{rec} q_{j,t} + h_j I_{j,t}(\xi) \right)$$

### 2.5 Hybrid Stochastic Approximation

Untuk tractability komputasional, Lead Researchers (2025) mengusulkan hibridisasi antara Sample Average Approximation (SAA) dan Benders Decomposition. Master problem:

$$\min \sum_{t,j} (s_j y_{j,t} + v_j x_{j,t}) + \theta$$

dengan cut generation dari subproblem recourse untuk setiap skenario. Algoritma iteratif menghasilkan lower bound yang konvergen ke nilai optimal dalam toleransi $\epsilon$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pendekatan hibrida stokastik dalam lingkungan produksi memerlukan SOP yang terstruktur. Berikut adalah prosedur operasional berdasarkan sintesis Lead Researchers (2025) dan Forel & Grunow (2023):

### 3.1 Arsitektur Sistem

```
┌──────────────────────────────────────────────────────────┐
│  Layer 1: Data Acquisition (ERP, MES, IoT Sensors)       │
│  - Histori permintaan 36-48 bulan                        │
│  - Master Production Schedule (MPS) terkini              │
│  - Parameter biaya, kapasitas, lead time                │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│  Layer 2: Forecast Engine                                │
│  - MMFE parameter estimation (σ_ε² per produk)          │
│  - Scenario generation (Monte Carlo, 200-1000 skenario)  │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│  Layer 3: Stochastic Optimizer                           │
│  - Two-stage stochastic MIP dengan recourse             │
│  - Benders decomposition / Progressive Hedging          │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│  Layer 4: Rolling-Horizon Controller                     │
│  - Periodik re-optimization (mingguan/harian)            │
│  - Implementasi first-stage decision                     │
└──────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Langkah-demi-Langkah

**Langkah 1: Kalibrasi Parameter MMFE**
Hitung parameter variance $\sigma_\epsilon^2$ dari data historis menggunakan Maximum Likelihood Estimation (MLE):

$$\hat{\sigma}_\epsilon^2 = \frac{1}{N(T-1)} \sum_{i=1}^{N} \sum_{t=1}^{T-1} \frac{(D_{i,t+1} - \hat{D}_{i,t})^2}{\Delta t_i}$$

di mana $N$ adalah jumlah deret waktu historis produk.

**Langkah 2: Generasi Skenario**
Gunakan teknik scenario reduction (misalnya forward selection dari Dupacova) untuk memilih $S = 200$ skenario representatif dari $S_0 = 10.000$ sampel awal, mempertahankan momen dan struktur korel