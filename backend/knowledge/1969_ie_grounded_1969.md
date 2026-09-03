# 1969 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan produksi dalam lingkungan manufaktur modern menghadapi tantangan struktural yang semakin kompleks seiring dengan meningkatnya volatilitas permintaan, fragmentasi rantai pasok global, dan tekanan margin operasional. Dua keputusan fundamental yang menentukan efisiensi sistem produksi adalah *lot sizing* (penentuan ukuran lot ekonomis) dan *scheduling* (penjadwalan urutan operasi pada sumber daya terbatas). Secara historis, masalah ini dimodelkan secara deterministik melalui formulasi Wagner-Whitin (1958) yang menghasilkan kebijakan produksi optimal dengan kompleksitas pseudopolinomial. Akan tetapi, asumsi deterministik tersebut terbukti tidak realistis dalam konteks praktik industri contemporary, di mana permintaan berfluktuasi mengikuti pola stokastik yang sulit diprediksi secara akurat (Forel & Grunow, 2023, [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Lead Researchers (2025, [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti bahwa meskipun literatur akademis telah menghasilkan ratusan varian model stokastik untuk lot sizing dan scheduling, adopsi di industri masih sangat terbatas. Kesenjangan antara riset akademik dan praktik industri ini terutama disebabkan oleh tiga faktor: (i) kompleksitas komputasional model stokastik murni yang sulit diimplementasikan pada Enterprise Resource Planning (ERP) konvensional; (ii) kebutuhan akan data historis berkualitas tinggi untuk mengkalibrasi distribusi permintaan; dan (iii) kurangnya integrasi antara modul peramalan, lot sizing, dan scheduling dalam satu kerangka kerja yang koheren. Sebagai respons, Lead Researchers (2025) mengusulkan formulasi hibrida yang memadukan pemrograman stokastik dua-tahap (*two-stage stochastic programming*) dengan metaheuristik berbasis populasi untuk menyelesaikan masalah *lot sizing and scheduling* (LSS) dalam skala produksi nyata.

Urgensi ekonomis dari optimalisasi LSS dapat diilustrasikan melalui data industri: perusahaan manufaktur consumer goods rata-rata mempertahankan 20–35% modal kerja dalam bentuk persediaan, di mana 60–70% di antaranya merupakan persediaan barang jadi dan work-in-process (WIP). Kesalahan perencanaan 5–10% pada lot sizing dapat menimbulkan biaya persediaan tambahan sebesar 2–4% dari revenue, yang dalam konteks perusahaan dengan omset USD 500 juta berarti pemborosan USD 10–20 juta per tahun. Lebih lanjut, Forel & Grunow (2023) mendemonstrasikan bahwa model yang mengabaikan evolusi forecast dalam rolling horizon menghasilkan keputusan lot sizing yang suboptimal hingga 8–15% dibandingkan pendekatan yang secara eksplisit memodelkan pembaruan informasi permintaan.

## 2. Landasan Teori & Formulasi Matematis

Formulasi LSS stokastik hibrida yang diusulkan Lead Researchers (2025) dibangun di atas kerangka *multi-item capacitated lot sizing and scheduling problem* (MICLSP) yang diperluas dengan ketidakpastian permintaan. Model matematis dasarnya dapat dinyatakan sebagai berikut.

**Parameter dan indeks:**
- $T$ = jumlah periode perencanaan (horizon)
- $N$ = jumlah item produk
- $M$ = jumlah mesin atau workstation
- $d_{nt}$ = permintaan item $n$ pada periode $t$ (variabel acak)
- $c^{setup}_{nmt}$ = biaya setup item $n$ pada mesin $m$ periode $t$
- $c^{hold}_{nt}$ = biaya penyimpanan unit item $n$ pada akhir periode $t$
- $c^{prod}_{nmt}$ = biaya produksi unit item $n$ pada mesin $m$ periode $t$
- $h_{nt}$ = biaya inventaris per unit item $n$ di akhir periode $t$
- $K_{m}$ = kapasitas mesin $m$ per periode
- $p_{nm}$ = waktu proses unit item $n$ pada mesin $m$

**Variabel keputusan:**
- $X_{nmt} \geq 0$ = jumlah produksi item $n$ pada mesin $m$ periode $t$
- $Y_{nmt} \in \{0,1\}$ = 1 jika setup item $n$ pada mesin $m$ di periode $t$ dilakukan, 0 sebaliknya
- $I_{nt} \geq 0$ = tingkat persediaan item $n$ di akhir periode $t$
- $S_{nmt} \in \{0,1\}$ = variabel sequencing (1 jika item $n$ memproduksi tepat setelah item $n'$ pada mesin $m$ di periode $t$)

**Formulasi deterministik baseline (Wagner-Whitin diperluas):**

$$\min \sum_{n=1}^{N} \sum_{m=1}^{M} \sum_{t=1}^{T} \left( c^{setup}_{nmt} Y_{nmt} + c^{prod}_{nmt} X_{nmt} + h_{nt} I_{nt} \right) \tag{1}$$

subject to:

$$\sum_{m=1}^{M} X_{nmt} + I_{n,t-1} - I_{nt} = d_{nt}, \quad \forall n, t \tag{2}$$

$$\sum_{n=1}^{N} p_{nm} X_{nmt} \leq K_{m}, \quad \forall m, t \tag{3}$$

$$X_{nmt} \leq M_n Y_{nmt}, \quad \forall n, m, t \tag{4}$$

$$Y_{nmt} + Y_{n'mt} \leq 1 + S_{nmt}, \quad \forall n \neq n', m, t \tag{5}$$

Persamaan (2) menjamin keseimbangan inventory, (3)约束 kapasitas mesin, (4) mengkopel variabel produksi dan setup melalui big-M, dan (5) mengatur transisi sequencing pada setiap mesin.

**Ekspansi stokastik dua-tahap (Two-Stage Stochastic Programming):**

Pada tahap pertama, keputusan setup dan lot sizing diambil sebelum realisasi permintaan. Pada tahap kedua (*recourse*), variabel penyesuaian produksi $X^+_{nmt}$ dan inventory akhir $\tilde{I}_{nt}$ dipilih setelah permintaan $\tilde{d}_{nt}$ terobservasi. Fungsi objektif harapan menjadi:

$$\min \sum_{n,m,t} c^{setup}_{nmt} Y_{nmt} + \mathbb{E}_{\tilde{d}}\left[ \sum_{n,m,t} \left( c^{prod}_{nmt} X^+_{nmt}(\tilde{d}) + h_{nt} \tilde{I}_{nt}(\tilde{d}) \right) \right] \tag{6}$$

dengan kendala recourse:

$$\sum_{m} X^+_{nmt} + I_{n,t-1} - \tilde{I}_{nt} = \tilde{d}_{nt}, \quad \forall n, t, \omega \in \Omega \tag{7}$$

dimana $\Omega$ merepresentasikan ruang skenario permintaan. Karena $|\Omega|$ bersifat eksponensial terhadap $T$, Lead Researchers (2025) mengadopsi *Sample Average Approximation* (SAA) dengan $S$ skenario yang dibangkitkan melalui simulasi Monte Carlo.

**Inkorporasi Evolusi Forecast (MMFE Framework):**

Berdasarkan Forel & Grunow (2023), permintaan aktual $\tilde{d}_{nt}$ didekomposisi menjadi:

$$\tilde{d}_{nt} = \hat{d}_{n,t|t-1} + \sum_{k=1}^{t} \epsilon_{n,k} \tag{8}$$

dimana $\hat{d}_{n,t|t-1}$ adalah forecast pada periode $t$ yang dibuat di periode $t-1$, dan $\epsilon_{n,k}$ adalah *forecast error* (martingale difference sequence). Evolusi forecast mengikuti:

$$\hat{d}_{n,t|t} = \hat{d}_{n,t|t-1} + \alpha_t (\tilde{d}_{nt} - \hat{d}_{n,t|t-1}) \tag{9}$$

dengan $\alpha_t$ adalah *smoothing parameter* yang menurun terhadap horizon. Koefisien ini secara empiris diestimasi dari data historis menggunakan *least squares regression* (Forel & Grunow, 2023).

**Mekanisme Hibrida (Exact + Metaheuristic):**

Lead Researchers (2025) mengusulkan dekomposisi Benders untuk menangani subproblem tahap kedua, sementara tahap pertama diselesaikan menggunakan algoritma *genetic programming* yang disesuaikan (NSGA-II) untuk mengeksplorasi ruang solusi biner $Y_{nmt}$. Fungsi cut Benders ditambahkan secara iteratif:

$$\theta \geq \mathbb{E}_{\tilde{d}}\left[ Q(Y, \tilde{d}) \right] - \sum_{n,m,t} \pi_{nmt}(\tilde{d}) \left( d_{nt}(\tilde{d}) - \sum_{m} X_{nmt} \right) \tag{10}$$

dimana $\pi_{nmt}(\tilde{d})$ adalah dual variable dari kendala keseimbangan inventory pada skenario $\tilde{d}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasi (SOP)

Implementasi model hibrida di lingkungan industri mengikuti SOP delapan tahap yang distandardisasi sebagai berikut:

**Tahap 1 — Akuisisi dan Pembersihan Data.** Data historis minimal 36 bulan diekstrak dari modul MRP/ERP (SAP S/4HANA, Oracle Cloud SCM). Atribut yang dibutuhkan: master data item, bill of materials, routing, kapasitas mesin, biaya setup, holding cost, dan forecast historis dengan timestamp pembaruan.

**Tahap 2 — Estimasi Parameter Stokastik.** Distribusi permintaan diuji menggunakan Anderson-Darling dan Kolmogorov-Smirnov. Untuk kasus heavy-tailed, distribusi Johnson-SU atau log-normal digunakan. Parameter MMFE diestimasi menggunakan OLS pada data forecast aktual.

**Tahap 3 — Pembangkitan Skenario.** Teknik *moment matching* dan *Latin Hypercube Sampling* digunakan untuk membangkitkan $S = 200$–$500$ skenario. Reduksi skenario dilakukan dengan algoritma *k-means clustering* hingga tersisa $S' = 20$–$50$ skenario representatif.

**Tahap 4 — Formulasi Model.** Model deterministik baseline dikonstruksi dalam format .lp atau .mps, lalu diperluas dengan recourse menggunakan generator otomatis (Pyomo, GAMS EMP).

**Tahap 5 — Penyelesaian Hybrid.** Master problem (tahap pertama) diselesaikan oleh pemecah MILP (CPLEX 22.1, Gurobi 11.0) hingga gap optimalitas 1%. Subproblem recourse diselesaikan via Benders cut generation.

**Tahap 6 — Validasi dan Backtesting.** Solusi diuji pada data out-of-sample 6 bulan terakhir dengan metrik MAPE, WAPE, dan total cost deviation.

**Tahap 7 — Integrasi Rolling Horizon.** Model di-embed dalam modul APO (Advanced Planning & Optimization) dengan frekuensi re-run mingguan, menyerap forecast baru sesuai dengan MMFE.