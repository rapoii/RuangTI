# 1521 — Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu masalah klasik dalam riset operasi dan teknik industri yang memiliki dampak ekonomi sangat signifikan pada rantai pasok manufaktur modern. Lead Researchers (2025) dalam publikasinya di *Cuestiones de fisioterapia* menyoroti bahwa dalam lingkungan produksi nyata, keputusan lot sizing dan scheduling tidak pernah berdiri sendiri sebagai deterministik, melainkan harus mengakomodasi fluktuasi permintaan, gangguan kapasitas, serta ketidakpastian harga dan lead time. Ketidakpastian permintaan (*demand uncertainty*) adalah variabel yang paling dominan: pada industri FMCG, variasi permintaan mingguan dapat mencapai 20–35% terhadap rencana awal, sementara pada industri baja dan semikonduktor, volatilitas ini bisa melampaui 40% (Lead Researchers, 2025). DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018).

Urgensi ekonominya sangat jelas: biaya persediaan (*inventory carrying cost*) rata-rata mencapai 20–30% dari nilai inventaris per tahun, sementara biaya setup yang tidak terkontrol dengan baik dapat menambah 8–15% terhadap total biaya produksi. Pada perusahaan manufaktur kelas menengah dengan 50 SKU dan horizon perencanaan 26 minggu, selisih 1% saja dalam efisiensi lot sizing dapat berarti penghematan USD 200.000–500.000 per tahun. Studi Forel & Grunow (2023) di *Production and Operations Management* bahkan menunjukkan bahwa hingga saat ini, lebih dari 70% perusahaan industri masih menggunakan model deterministik (*Deterministic Lot Sizing* – DLS) yang kemudian "ditambal" dengan pendekatan *rolling-horizon*, padahal pendekatan tersebut belum tentu optimal secara stokastik. DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881).

Kesenjangan antara riset akademis dan praktik industri (*theory-practice gap*) inilah yang coba ditutup oleh Lead Researchers (2025) melalui formulasi model optimasi stokastik hybrid yang menggabungkan *two-stage stochastic programming* dengan heuristik metaheuristik (hybrid SA-VNS atau *Simulated Annealing* – *Variable Neighborhood Search*) untuk menyelesaikan jointly lot-sizing dan scheduling problem (DLSP – *Dynamic Lot-Sizing Problem*) dalam horizon multi-period dengan demand scenarios. Model ini mempertimbangkan recourse decisions berupa produksi korektif (*corrective production*) dan backorder, sehingga menyerupai fleksibilitas nyata yang dimiliki perencana produksi di lantai pabrik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (Uncapacitated Lot Sizing – ULS)

Formulasi *Wagner-Whitin* klasik digunakan sebagai baseline:

$$\min Z = \sum_{t=1}^{T} \left( s_t \cdot Y_t + h \cdot I_t \right)$$

dengan kendala keseimbangan inventory:

$$I_t = I_{t-1} + X_t - d_t, \quad I_0 = 0, \quad I_t \geq 0$$

di mana $s_t$ adalah biaya setup, $Y_t \in \{0,1\}$ variabel keputusan setup, $X_t$ kuantitas produksi, $h$ biaya simpan per unit per periode, dan $d_t$ permintaan deterministik pada periode $t$.

### 2.2 Formulasi Stokastik Hybrid (Lead Researchers, 2025)

Untuk mengakomodasi ketidakpastian, Lead Researchers (2025) DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengembangkan model *two-stage stochastic mixed-integer programming* dengan himpunan skenario $\Omega$:

$$\min \quad Z = \sum_{t=1}^{T} \left( s \cdot Y_t + \mathbb{E}_\omega\left[\sum_{t=1}^{T} \left(c X_{t,\omega} + h I_{t,\omega}^+ + b I_{t,\omega}^- \right)\right]\right)$$

Kendala recourse untuk setiap skenario $\omega \in \Omega$:

$$I_{t,\omega} = I_{t-1,\omega} + X_{t,\omega} - d_{t,\omega}$$

$$X_{t,\omega} \leq M \cdot Y_t$$

$$Y_t \in \{0,1\}, \quad X_{t,\omega}, I_{t,\omega}^+, I_{t,\omega}^- \geq 0$$

di mana $I_{t,\omega}^+$ adalah inventory positif, $I_{t,\omega}^-$ adalah backlog, dan $b$ adalah biaya backorder per unit. Nilai ekspektasi $\mathbb{E}_\omega$ dihitung melalui diskritisasi distribusi permintaan ke $N_s$ skenario dengan probabilitas $\pi_\omega$.

### 2.3 Martingale Model of Forecast Evolution (MMFE) – Forel & Grunow (2023)

Forel & Grunow (2023) DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881) memperkenalkan MMFE yang menyatakan bahwa permintaan yang direvisi mengikuti proses martingale:

$$d_{t,\omega} = d_{t-1,\omega} + \varepsilon_{t,\omega}$$

dengan $\mathbb{E}[\varepsilon_{t,\omega} | \mathcal{F}_{t-1}] = 0$. Implikasinya, perencana tidak lagi memperlakukan permintaan sebagai fixed scenario, melainkan sebagai *evolving forecast* yang diperbarui setiap kali horizon bergulir (*rolling horizon*). Fungsi biaya recourse menjadi:

$$Z^{rec} = \sum_{t=1}^{T} \left( s Y_t + h I_t^+ + b I_t^- + \mathbb{E}[d_T - \hat{d}_T | \mathcal{F}_t] \right)$$

### 2.4 Prosedur Hybrid Solusi

Lead Researchers (2025) mengusulkan dekomposisi Benders untuk variabel integer dan *Simulated Annealing* (SA) untuk memperbaiki solusi *upper bound*. Iterasi sampai gap optimalitas $< 1\%$:

$$\text{Gap} = \frac{|UB - LB|}{UB} \times 100\% \leq \epsilon$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Lead Researchers (2025) di industri mengikuti SOP delapan tahap berikut:

**Tahap 1 – Pengumpulan Data Historis.** Minimum 104 minggu data permintaan, biaya setup, biaya simpan, kapasitas mesin, dan lead time. Data dibersihkan dari outlier menggunakan metode *interquartile range* (IQR): outlier jika $x > Q_3 + 1.5 \cdot \text{IQR}$.

**Tahap 2 – Pemodelan Distribusi Permintaan.** Uji stasioneritas (Augmented Dickey-Fuller), identifikasi tren, musiman, dan残差. Distribusi kandidat: Normal, Log-Normal, Poisson, atau Negative Binomial. Pemilihan berdasarkan AIC (*Akaike Information Criterion*):

$$\text{AIC} = 2k - 2\ln(\hat{L})$$

**Tahap 3 – Generasi Skenario.** Monte Carlo simulation menghasilkan $N_s = 200$–500 skenario dengan reduksi menggunakan *Kantorovich distance* hingga tersisa 20–50 skenario representatif.

**Tahap 4 – Formulasi Model.** Bangun model MIP stokastik dalam bahasa AMPL/GAMS atau Pyomo, dengan parameter kapasitas $C_t$, biaya overtime $o_t$, dan kapasitas overtime $O_t^{max}$.

**Tahap 5 – Solusi Awal (Heuristik).** Gunakan algoritma *Sequential Lot Sizing with Variable Neighbourhood Search* (SLS-VNS) untuk solusi awal dalam <60 detik.

**Tahap 6 – Optimasi Eksak.** Jalankan Benders Decomposition dengan commercial solver (CPLEX/Gurobi) pada time limit 600 detik.

**Tahap 7 – Validasi & Backtesting.** Validasi dengan *rolling-horizon backtest* (Forel & Grunow, 2023) pada 26 minggu terakhir; bandingkan *realized cost* dengan model deterministik.

**Tahap 8 – Implementasi & Monitoring.** Deploy pada ERP (SAP PP/DS atau Oracle ASCP), integrasikan dengan MES, dan monitor KPI: *service level*, *inventory turn*, *setup frequency*, *backorder rate*.

Diagram alir logika keputusan mengikuti arsitektur *closed-loop*: data historis → forecast → optimasi stokastik → rencana produksi → eksekusi → data aktual → update forecast (feedback).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik pengemasan minuman dengan 3 lini produk (A, B, C), horizon $T = 6$ minggu.

**Parameter Industri:**

| Produk | Setup Cost $s_i$ (USD) | Holding $h_i$ (USD/unit) | Backorder $b_i$ (USD/unit) | Produksi $c_i$ (USD/unit) |
|--------|------------------------|--------------------------|----------------------------|---------------------------|
| A      | 500                    | 1.20                     | 5.00                       | 3.00                      |
| B      | 450                    | 1.50                     | 6.00                       | 3.50                      |
| C      | 400                    | 1.00                     | 4.50                       | 2.80                      |

**Permintaan mingguan (skenario $\omega_1$ – base case):**

| Minggu | A   | B   | C   |
|--------|-----|-----|-----|
| 1      | 320 | 280 | 410 |
| 2      | 350 | 300 | 380 |
| 3      | 400 | 330 | 450 |
| 4      | 380 | 310 | 420 |
| 5      | 410 | 340 | 460 |
| 6      | 450 | 360 | 500 |

**Langkah 1 – Total Permintaan Skenario Base:**

$$D_A = 320+350+400+380+410+450 = 2310 \text{ unit}$$
$$D_B = 280+300+330+310+340+360 = 1920 \text{ unit}$$
$$D_C = 410+380+450+420+460+500 = 2620 \text{ unit}$$

**Langkah 2 – Solusi Deterministik (Wagner-Whitin) untuk Produk A:**

Perhatikan pola produksi optimal ketika inventory just-in-time (ZZZ pattern): produksi di minggu 1, 3, 5, 6. Perhitungan:

- **Minggu 1** (setup 500): produksi $X_1 = 320$, biaya $= 500 + 1.20 \times (320+350+400+380+410+450-320) \times \text{???}$. Pendekatan ZZZ: produksi 320, inventory 0.
- Setelah full ZZZ untuk A: Setup di minggu 1, 3, 5, 6. Total setup A = $4 \times 500 = 2000$ USD.
- Inventory carry: minggu 1 akhir = 0, minggu 3 produksi 400 cover minggu 3,4,5 → carry 2 minggu × 400 unit × 1.20 (salah, hanya inventory berlebih).

Perhitungan lebih akurat dengan ZZZ pattern untuk produk A:
- Setup week 1 (prod 320) → hold 0
- Setup week 3 (prod 400) → covers week 3,4 → hold week 4: (320+350+400)−320−350 = 400−350 = 50 unit × 1 minggu × 1.20 = 60 USD
- Setup week 5 (prod 410) → covers week 5,6 → hold week 6: 410−450 = −40 (backorder)
- Backorder minggu 6: 40 × 5.00 = 200 USD

Untuk produk A dengan 3 setup