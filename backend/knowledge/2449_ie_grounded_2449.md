# 2449 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Lingkungan Permintaan Fluktuatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) yang terintegerasi dengan penjadwalan produksi (*scheduling*) telah menjadi salah satu pilar keputusan operasional paling krusial dalam sistem manufaktur modern. Lead Researchers (2025) dalam artikelnya yang diterbitkan di *Cuestiones de fisioterapia* dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) menyoroti bahwa kompleksitas permasalahan ini meningkat secara eksponensial ketika permintaan pasar bersifat stokastik, kapasitas produksi terbatas, serta terdapat banyak produk dan sekuens pada lini produksi yang sama. Dalam praktik industri—misalnya pada industri makanan dan minuman, farmasi, otomotif, dan elektronik konsumen—ketidakpastian permintaan merupakan keniscayaan yang disebabkan oleh variasi musiman, perilaku konsumen yang sulit diprediksi, dan guncangan rantai pasok global. Lead Researchers menekankan bahwa pendekatan deterministik yang selama ini diadopsi secara luas oleh praktisi gagal menangkap risiko stokout, *overproduction*, dan *setup cost* yang tidak perlu.

Forel dan Grunow (2023) dengan DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881) dalam *Production and Operations Management* memperkuat argumen tersebut melalui temuan empiris mereka: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates."* Gap antara riset akademis dan praktik industri ini memotivasi lahirnya paradigma baru berupa *hybrid stochastic optimization* yang menggabungkan kekuatan formulasi matematis stokastik dengan fleksibilitas pembaruan ramalan secara *rolling-horizon*. Urgensi ekonominya cukup besar: pada industri FMCG dengan ratusan SKU, selisih 1–3% pada *holding cost* dan *setup cost* akibat perencanaan yang suboptimal dapat menimbulkan pemborosan hingga jutaan dolar per tahun. Lebih lanjut, transisi ke Industry 4.0 menuntut integrasi *real-time data*, sensor IoT, dan algoritma optimasi yang mampu memberikan keputusan secara *near-real-time*. Konteks inilah yang melatarbelakangi pentingnya pembahasan Modul 2449.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Stokastik

Formulasi dasar untuk masalah penentuan ukuran lot stokastik dapat ditulis sebagai program linear integer campuran dua tahap (*two-stage stochastic program*). Misalkan himpunan $T = \{1, 2, \ldots, |T|\}$ merepresentasikan periode perencanaan, $I$ himpunan produk, dan $S$ himpunan skenario permintaan. Parameter-parameter keputusan meliputi:

- $d_{i,t}^s$: permintaan produk $i$ pada periode $t$ di skenario $s$
- $c_i^h$: biaya simpan per unit per periode untuk produk $i$
- $c_i^p$: biaya produksi variabel per unit
- $c_i^f$: biaya *setup* tetap untuk produk $i$
- $K_t$: kapasitas produksi total pada periode $t$
- $p_i$: kapasitas yang dikonsumsi per unit produk $i$
- $I_{i,0}$: persediaan awal produk $i$

Variabel keputusan: $x_{i,t}^s$ (jumlah produksi), $y_{i,t}^s \in \{0,1\}$ (indikator *setup*), $I_{i,t}^s$ (level persediaan), $q_{i,t}^s$ (kuantitas pesanan), dan $\ell_{i,t}^s$ (penalti *lost-sales* atau *backorder*). Fungsi tujuan untuk meminimalkan total biaya yang diharapkan (*expected total cost*) adalah:

$$
\min \; Z = \sum_{s \in S} \pi_s \left[ \sum_{i \in I} \sum_{t \in T} \left( c_i^p x_{i,t}^s + c_i^f y_{i,t}^s + c_i^h I_{i,t}^s + c_i^\ell \ell_{i,t}^s \right) \right]
$$

dengan kendala-kendala utama:

$$
I_{i,t}^s = I_{i,t-1}^s + x_{i,t}^s - d_{i,t}^s + \ell_{i,t}^s, \quad \forall i, t, s
$$

$$
x_{i,t}^s \leq M \cdot y_{i,t}^s, \quad \forall i, t, s
$$

$$
\sum_{i \in I} p_i x_{i,t}^s \leq K_t, \quad \forall t, s
$$

$$
x_{i,t}^s, I_{i,t}^s, \ell_{i,t}^s \geq 0, \quad y_{i,t}^s \in \{0,1\}
$$

dengan $\pi_s$ sebagai probabilitas skenario $s$ dan $M$ sebagai bilangan besar (*big-M*).

### 2.2 Model Martingale untuk Evolusi Ramalan (MMFE)

Forel dan Grunow (2023) mengajukan penggunaan *Martingale Model of Forecast Evolution* (MMFE) yang menyatakan bahwa permintaan aktual pada horizon $t+\tau$ dapat ditulis sebagai:

$$
D_{t+\tau} = F_t + \sum_{j=1}^{\tau} \epsilon_{t+j}
$$

dengan $F_t$ adalah ramalan pada periode $t$, dan $\epsilon_{t+j}$ adalah inkremen ramalan yang mengikuti proses *martingale difference*:

$$
E[\epsilon_{t+j} \mid \mathcal{F}_t] = 0
$$

dengan $\mathcal{F}_t$ sebagai filtrasi informasi hingga periode $t$. Kovariansi antar-inkremen menentukan korelasi permintaan lintas periode, yang ditangkap oleh matriks:

$$
\Sigma = \begin{bmatrix} \sigma_1^2 & \sigma_{1,2} & \cdots & \sigma_{1,\tau} \\ \sigma_{2,1} & \sigma_2^2 & \cdots & \sigma_{2,\tau} \\ \vdots & \vdots & \ddots & \vdots \\ \sigma_{\tau,1} & \sigma_{\tau,2} & \cdots & \sigma_\tau^2 \end{bmatrix}
$$

Model ini memungkinkan integrasi eksplisit terhadap *rolling-horizon replanning* karena setiap kali horizon bergeser satu periode, MMFE secara natural memprediksi evolusi distribusi permintaan.

### 2.3 Formulasi Hibrida (Paper Utama)

Pendekatan hibrida yang diusulkan Lead Researchers (2025) memadukan formulasi stokastik dua-tahap dengan *matheuristic* berbasis *decomposition*. Subproblem diselesaikan melalui *Benders decomposition*, sedangkan *master problem* menggunakan *cutting plane* dengan inequalitas:

$$
\theta \geq \alpha_s + \sum_{i,t} \pi_{i,t}^s (d_{i,t}^s - \bar{d}_{i,t}) + \sum_{i,t} \beta_{i,t}^s (I_{i,t}^s - \bar{I}_{i,t})
$$

dengan $\alpha_s$ sebagai nilai optimal subproblem skenario $s$ dan $\pi^s, \beta^s$ sebagai multiplikator dual. Pendekatan ini memberikan *lower bound* yang kuat dan konvergen secara optimal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pendekatan hibrida ini di industri mengikuti SOP delapan tahap yang terstruktur:

**Tahap 1 — Karakterisasi Data Historis:** Kumpulkan 36–60 bulan data permintaan, bersihkan dari pencilan, dan uji stasioneritas menggunakan *Augmented Dickey-Fuller test*. Estimasi parameter MMFE melalui *maximum likelihood*.

**Tahap 2 — Generasi Skenario:** Gunakan *Monte Carlo simulation* atau *Latin Hypercube Sampling* untuk membangkitkan $S$ skenario permintaan. Untuk $|S| \geq 200$, reduksi skenario via *Kannan-Frontolizzo* clustering.

**Tahap 3 — Formulasi Model:** Bangun *mixed-integer linear program* dengan parameter skenario. Estimasi *big-M* melalui validasi batas atas produksi.

**Tahap 4 — Solusi Eksak Awal:** Jalankan solver seperti CPLEX atau Gurobi dengan batas waktu 600–3600 detik untuk mendapatkan *upper bound*.

**Tahap 5 — Benders Decomposition Iteratif:** Pecahkan *master problem* dan *subproblem* hingga gap optimalitas $< 1\%$. Setiap iterasi menambahkan satu *optimality cut*.

**Tahap 6 — Integrasi Rolling-Horizon:** Geser horizon satu periode, perbarui $F_t$ dengan data aktual, dan re-olve dengan MMFE.

**Tahap 7 — Validasi dengan Simulasi:** Uji kebijakan dengan *discrete-event simulation* pada horizon 12–24 bulan.

**Tahap 8 — Implementasi ERP:** Integrasikan output dengan modul PP/DS di SAP S/4HANA atau setara.

Diagram alir logikanya: *Data Historis → Estimasi Parameter → Generasi Skenario → Benders → Validasi → Replan*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan lini produksi minuman ringan dengan dua varian (A, B) pada horizon $T = \{1, 2, 3, 4\}$ periode (mingguan). Parameter biaya: $c_A^p = 2$ USD/unit, $c_A^f = 150$ USD, $c_A^h = 0{,}5$ USD/unit/minggu, dan serupa untuk B dengan faktor 1,2. Kapasitas mingguan $K_t = 1000$ unit. Permintaan aktual (unit) dan ramalan:

| Periode | $F_t$ (Ramalan) | $D_t$ (Aktual) |
|---|---|---|
| 1 | 600 | 580 |
| 2 | 700 | 750 |
| 3 | 800 | 820 |
| 4 | 750 | 730 |

**Langkah 1 — Estimasi MMFE.** Hitung inkremen: $\