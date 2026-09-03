# 2385 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) telah menjadi salah satu pilar fundamental dalam riset operasi dan teknik industri selama lebih dari lima dekade. Dalam lingkungan manufaktur modern yang ditandai oleh ketidakpastian permintaan (*demand uncertainty*), fluktuasi harga bahan baku, serta perubahan preferensi konsumen yang semakin dinamis, keputusan terkait berapa banyak unit yang harus diproduksi pada setiap periode (lot size) dan pada mesin atau lini produksi mana pesanan tersebut harus dialokasikan (sequencing) menjadi sangat krusial. Keputusan ini secara langsung memengaruhi tingkat persediaan, biaya setup, kapasitas produksi, kemampuan memenuhi pesanan pelanggan (*service level*), serta profitabilitas perusahaan secara keseluruhan (Lead Researchers, 2025, DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

Secara empiris, industri—khususnya pada sektor consumer goods, farmasi, makanan dan minuman, serta komponen otomotif—secara historis mengandalkan model deterministik seperti Economic Lot Scheduling Problem (ELSP) atau Discrete Lot Sizing and Scheduling Problem (DLSP) yang diselesaikan melalui pendekatan heuristik atau mixed-integer linear programming (MILP). Namun, penelitian terbaru oleh Forel dan Grunow (2023, DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) yang dipublikasikan di *Production and Operations Management* menunjukkan temuan yang cukup mengejutkan: pendekatan akademis yang mempertimbangkan ketidakpastian permintaan secara eksplisit melalui model stokastik sangat jarang digunakan dalam praktik industri. Industri lebih memilih menggunakan model deterministik yang dikombinasikan dengan *rolling-horizon planning* dan pembaruan prakiraan (*forecast updates*) secara periodik untuk mengakomodasi ketidakpastian.

Kesenjangan (*gap*) antara literatur akademis dan praktik industri ini memunculkan kebutuhan akan model hibrida yang mampu menjembatani keduanya: di satu sisi tetap mempertahankan rigor matematis dari formulasi stokastik, namun di sisi lain tetap kompatibel dengan kerangka kerja rolling-horizon yang akrab bagi praktisi. Model hibrida yang dikembangkan oleh Lead Researchers (2025) mengintegrasikan ketidakpastian permintaan dengan keputusan lot sizing dan scheduling secara simultan, sementara Forel dan Grunow (2023) melengkapi dengan *Martingale Model of Forecast Evolution* (MMFE) yang mampu mengantisipasi evolusi prakiraan di dalam horizon perencanaan. Urgensi permasalahan ini semakin nyata ketika mempertimbangkan bahwa biaya persediaan dan backorder di industri manufaktur global dapat mencapai 15–25% dari total biaya operasional, sehingga setiap perbaikan marginal pada keputusan lot sizing berpotensi menghasilkan penghematan signifikan dalam skala tahunan.

---

## 2. Landasan Teori & Formulasi Matematis

Model stokastik untuk lot sizing dan scheduling pada dasarnya merupakan perluasan dari model Wagner-Within klasik dengan memasukkan variabel acak untuk merepresentasikan permintaan. Formulasi dasar masalah penentuan ukuran lot tunggal (*single-item lot sizing*) dengan permintaan deterministik $d_t$ pada periode $t$ adalah:

$$\min \sum_{t=1}^{T} \left( h_t I_t + s_t y_t + c_t x_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + x_t - d_t, \quad \forall t \in \{1, 2, \ldots, T\}$$

$$x_t \leq M \cdot y_t, \quad \forall t$$

$$I_t, x_t \geq 0, \quad y_t \in \{0,1\}$$

di mana $h_t$ adalah biaya holding per unit, $s_t$ adalah biaya setup, $c_t$ adalah biaya produksi variabel per unit, $I_t$ adalah inventaris akhir periode, $x_t$ adalah jumlah produksi, $y_t$ adalah variabel biner keputusan setup, dan $M$ adalah big-M.

Dalam konteks stokastik yang dikembangkan oleh Lead Researchers (2025), permintaan $D_t$ dianggap sebagai variabel acak dengan distribusi probabilitas tertentu. Model Hibrida yang diusulkan menggabungkan dua elemen utama: (1) **modul stokastik** untuk keputusan lot sizing dengan meminimumkan *expected total cost*, dan (2) **modul penjadwalan** yang mengalokasikan lot ke mesin atau lini produksi tertentu. Fungsi tujuan dalam formulasi stokastik menjadi:

$$\min \mathbb{E}\left[\sum_{t=1}^{T} \left( h_t I_t^+ + p_t I_t^- + s_t y_t + c_t x_t \right)\right]$$

di mana $I_t^+$ adalah inventaris positif (*on-hand inventory*) dan $I_t^-$ adalah *backorder* dengan biaya $p_t$ per unit. Ekspektasi $\mathbb{E}[\cdot]$ dihitung terhadap seluruh skenario permintaan.

Untuk menjembatani dengan pendekatan rolling-horizon, Forel dan Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE). Dalam MMFE, prakiraan permintaan pada periode $t$ yang dilihat dari periode $\tau$ ($t \geq \tau$) dimodelkan sebagai:

$$\hat{D}_{t|\tau} = \hat{D}_{t|\tau-1} + \varepsilon_{t|\tau}, \quad \varepsilon_{t|\tau} \sim \mathcal{N}(0, \sigma_\varepsilon^2)$$

dengan *forecast update* $\varepsilon_{t|\tau}$ yang berdistribusi normal dengan mean nol. Struktur martingale menjamin bahwa *forecast revision* bersifat *unbiased*:

$$\mathbb{E}\left[\hat{D}_{t|\tau} | \mathcal{F}_{\tau-1}\right] = \hat{D}_{t|\tau-1}$$

di mana $\mathcal{F}_{\tau-1}$ adalah filtration informasi hingga periode $\tau-1$. Kovarians antara forecast errors untuk horizon yang berbeda dapat dimodelkan dengan struktur matriks $\Sigma_\varepsilon$ yang merepresentasikan korelasi antar-periode.

Formulasi lengkap model hibrida Lead Researchers (2025) mencakup variabel keputusan tambahan untuk sequencing, yaitu variabel biner $\sigma_{ij}$ yang bernilai 1 jika produk $i$ dijadwalkan sebelum produk $j$ pada lini produksi yang sama. Fungsi tujuan augmented:

$$\min \mathbb{E}\left[\sum_{t=1}^{T} \sum_{i=1}^{N} \left( h_i I_{i,t}^+ + p_i I_{i,t}^- + s_{i,t} y_{i,t} + c_{i,t} x_{i,t} \right) + \sum_{t} \sum_{(i,j) \in \mathcal{P}} \delta_{ij,t} \sigma_{ij,t} \right]$$

di mana $\delta_{ij,t}$ adalah biaya transisi (sequence-dependent setup) dari produk $i$ ke produk $j$, dan $\mathcal{P}$ adalah himpunan pasangan produk pada lini yang sama. Kendala tambahan berupa *no-overlap constraints* menjamin bahwa satu produk hanya dapat diproduksi pada satu mesin pada satu waktu:

$$\sum_{m \in \mathcal{M}} z_{i,m,t} = y_{i,t}, \quad \forall i, t$$

dengan $z_{i,m,t}$ sebagai variabel biner yang menunjukkan apakah produk $i$ dialokasikan ke mesin $m$ pada periode $t$. Pendekatan ini diselesaikan dengan menggunakan *Sample Average Approximation* (SAA) untuk mendiskretisasi distribusi permintaan menjadi $S$ skenario, lalu dipecahkan sebagai *two-stage stochastic program* dengan recourse.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida stokastik untuk lot sizing dan scheduling di lingkungan industri memerlukan prosedur operasional yang terstruktur. Berikut adalah SOP berbasis rekayasa yang disintesis dari kedua literatur rujukan:

**Tahap 1: Pengumpulan Data Historis dan Karakterisasi Permintaan.** Data penjualan historis minimal 24 periode dikumpulkan untuk mengestimasi parameter distribusi permintaan, mean $\mu_t$, standar deviasi $\sigma_t$, dan matriks kovarians antar-periode. Forel dan Grunow (2023) merekomendasikan dekomposisi time series untuk memisahkan komponen trend, seasonality, dan residual. Komponen residual digunakan untuk mengestimasi forecast error distribution $\varepsilon_{t|\tau}$.

**Tahap 2: Konstruksi Pohon Skenario (*Scenario Tree*).** Berdasarkan estimasi distribusi, dibangun *scenario tree* dengan jumlah node yang terkendali (umumnya 50–500 skenario) menggunakan teknik *moment matching* atau *Monte Carlo simulation*. Setiap skenario $\omega \in \Omega$ memiliki probabilitas $\pi_\omega$ dengan $\sum_\omega \pi_\omega = 1$.

**Tahap 3: Formulasi dan Solusi Model.** Model stokastik diformulasikan dalam lingkungan pemodelan (misalnya GAMS, AMPL, atau Python Pyomo) dan diselesaikan menggunakan solver MILP commercial (CPLEX, Gurobi) untuk instance skala menengah, atau dengan *progressive hedging algorithm* dan *benders decomposition* untuk instance skala besar.

**Tahap 4: Validasi dengan Rolling-Horizon.** Hasil solusi kemudian divalidasi menggunakan simulasi rolling-horizon dengan panjang horizon $H$ (umumnya 4–12 periode) dan *replanning period* $R$ (umumnya 1–4 periode). Pada setiap titik replanning, forecast di-update menggunakan MMFE dan model diselesaikan ulang.

**Tahap 5: Implementasi di ERP/MES.** Output model—berupa rencana produksi detail untuk horizon perencanaan—diintegrasikan ke dalam sistem ERP (SAP PP/DS, Oracle APS) atau Manufacturing Execution System (MES). Sequence-dependent setup times dikonversi menjadi *routing instructions* yang dieksekusi oleh lini produksi.

**Tahap 6: Monitoring KPI dan Continuous Improvement.** KPI yang dipantau antara lain: total cost vs. budget, service level (fill rate), inventory turnover, dan forecast accuracy (MAPE). Penyimpangan >10% dari baseline deterministik menandakan kebutuhan re-tuning parameter model.

Diagram alur logika keputusan: **Data Input → Forecast Evolution (MMFE) → Scenario Generation → Stochastic MILP → Production Plan → Execution → KPI Monitoring → Forecast Update → (loop)**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi model, perhatikan sebuah perusahaan manufaktur komponen elektronik dengan data parameter berikut untuk produk tunggal pada horizon $T = 6$ periode:

| Periode $t$ | Demand Mean $\mu_t$ | Std Dev $\sigma_t$ | Holding Cost $h_t$ | Setup Cost $s_t$ | Unit Cost $c_t$ |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 100 | 15 | 2 | 150 | 10 |
| 2 | 120 | 18 | 2 | 150 | 10 |
| 3 | 80 | 12 | 2 | 150 | 10 |
| 4 | 150 | 22 | 2 | 150 | 10 |
| 5 | 130 | 20 | 2 | 150 | 10 |
| 6 | 110 | 16 | 2 | 150 | 10 |

Backorder cost $p_t = 15$ per unit. Initial inventory $I_0 = 0$.

**Langkah 1: Generate Skenario.** Untuk keperluan studi kasus, bangkitkan 3 skenario permintaan (low, base, high) dengan menggunakan sampling dari distribusi normal:

- **Skenario 1 (Low):** $D = [85, 100, 70, 125, 110, 95]$, $\pi_1 = 0.3$
- **Skenario 2 (Base):** $D = [100, 120, 80, 150, 130, 110]$, $\pi_2 = 0.5$
- **Skenario 3 (High):** $D = [115, 140, 90, 175, 150, 125]$, $\pi_3 = 0.2$

**Langkah 2: Solusi dengan Pendekatan Stokastik.** Variabel keputusan untuk setiap skenario $(\omega)$ adalah jumlah produksi $x_{t,\omega}$ dan setup $y_{t,\omega}$. Terapkan *non-anticipativity constraint* untuk periode 1 (keputusan harus sama di seluruh skenario karena informasi belum tersedia):

$$x_{1,1} = x_{1,2} = x_{1,3} = x_1^*$$

Solusi optimal menggunakan solver (simulasi dengan aturan Silver-Meal yang dimodifikasi untuk stokastik):

| $t$ | $x_t^*$ | $y_t^*$ | $I_t$ (Base) | $I_t$ (Low) | $I_t$ (High) |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 1 | 220 | 1 | 120 | 135 | 105 |
| 2 | 0 | 0 | 0 | 15 | -35 |
| 3 | 80 | 1 | 0 | -5 | -45 |
| 4 | 150 | 1 | 0 | -30 | 5 |
| 5 | 130 | 1 | 0 | -20 | -25 |
| 6 | 110 | 1 | 0 | 0 | 0 |

**Langkah 3: Kalkulasi Expected Total Cost.** Dengan $H=2$ (holding cost), $P=15$ (backorder cost):

$$E[TC] = \sum_\omega \pi_\omega \sum_t \left( h_t I_{t,\omega}^+ + p_t I_{t,\omega}^- + s_t y_t + c_t x_t \right)$$

Untuk Skenario Base (periode 2-6, tanpa backorder signifikan):
$$TC_{base} = 2(120) + 2(0) + 2(0) + 2(0) + 2(0) + 2(0) + 150(1 \times 4) + 10(220 + 80 + 150 + 130 + 110) = 240 + 600 + 6900 = 7740$$

Untuk Skenario Low (mengalami backorder):
- $I_