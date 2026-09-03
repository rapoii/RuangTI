# 1729 — Optimasi Stokastik Hibrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, Vol. 54(02), hal. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning.* Production and Operations Management. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam praktik manufaktur modern, keputusan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) menempati posisi strategis karena berdampak langsung pada biaya persediaan, biaya *setup*, tingkat pelayanan pelanggan (*service level*), dan utilisasi kapasitas mesin. Literatur akademik selama empat dekade menunjukkan bahwa pendekatan stokastik—yang secara eksplisit memodelkan ketidakpastian permintaan, waktu proses, dan ketersediaan material—secara teoritis menghasilkan kebijakan yang lebih robust dibandingkan model deterministik. Namun, Forel & Grunow (2023) dalam *Production and Operations Management* menegaskan adanya *practice–research gap* yang nyata: "academic approaches considering demand uncertainty in lot sizing are seldom used in practice; industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates" (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Kesenjangan ini muncul karena model optimasi stokastik murni (misalnya program stokastik dua-tahap dengan ratusan skenario) sulit diimplementasikan pada sistem ERP/MRP berskala besar yang memiliki siklus perencanaan mingguan atau harian. Lead Researchers (2025) dalam *Cuestiones de Fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menjawab tantangan ini dengan mengusulkan **model optimasi stokastik hibrid** yang mengintegrasikan keputusan lot sizing dan scheduling secara simultan, sekaligus mempertahankan kelayakan komputasional untuk industri. Pendekatan hibrid tersebut menggabungkan kekuatan *mixed-integer linear programming* (MILP) stokastik dengan dekomposisi heuristik/metaheuristik, sehingga mampu menyelesaikan masalah CLSP (Capacitated Lot Sizing Problem) dengan horizon 12–52 periode beserta assignment penjadwalan pada multi-mesin dalam waktu komputasi yang dapat diterima untuk perencanaan operasional.

Urgensi ekonomis pendekatan ini dapat dilihat dari data empiris: industri FMCG (*fast-moving consumer goods*) pada umumnya menghadapi biaya *setup* yang mencapai 30–60% dari total biaya logistik, sementara pada industri baja dan semikonduktor biaya *changeover* dapat menyerap 8–15% kapasitas efektif. Dengan mengintegrasikan lot sizing dan scheduling dalam satu kerangka optimasi, perusahaan dapat menekan biaya *setup* melalui *sequencing* yang efisien, mengurangi *work-in-process*, dan meningkatkan *on-time delivery*. Lebih jauh, evolusi prakiraan (*forecast evolution*) yang dimodelkan secara eksplisit memungkinkan perusahaan memperbarui keputusan lot sizing ketika informasi permintaan baru tersedia—sebuah karakteristik kunci dari sistem *rolling-horizon* yang sudah lazim di industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (CLSP)

Model *Capacitated Lot Sizing Problem* (CLSP) standar untuk horizon $T$ periode dapat diformulasikan sebagai berikut:

$$\min \; Z = \sum_{t=1}^{T}\left( s_t\, y_t + h_t\, I_t + p_t\, Q_t \right) \tag{1}$$

dengan kendala:

$$I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in \{1,\dots,T\} \tag{2}$$

$$Q_t \le C_t\, y_t, \quad \forall t \tag{3}$$

$$y_t \in \{0,1\},\quad Q_t \ge 0,\quad I_t \ge 0 \tag{4}$$

di mana $y_t$ adalah variabel biner keputusan *setup*, $Q_t$ adalah kuantitas produksi, $I_t$ adalah inventaris akhir periode, $s_t$ biaya *setup*, $h_t$ biaya *holding*, $p_t$ biaya produksi variabel, $C_t$ kapasitas produksi, dan $d_t$ permintaan deterministik.

### 2.2 Program Stokastik Dua-Tahap dengan *Recourse* Produksi

Untuk mengakomodasi ketidakpastian permintaan, formulasi diperluas ke program stokastik dua-tahap:

$$\min \; c^\top x + \mathbb{E}_\xi\!\left[ Q(x,\xi) \right] \tag{5}$$

dengan fungsi recourse:

$$Q(x,\xi) = \min \left\{\, q(\xi)^\top y \;:\; W(\xi)\,y = h(\xi) - T(\xi)\,x,\; y \ge 0 \,\right\} \tag{6}$$

Variabel keputusan tahap pertama ($x$) adalah keputusan lot sizing tingkat tinggi (*aggregate*), sedangkan variabel recourse tahap kedua ($y$) merepresentasikan keputusan korektif setelah realisasi permintaan $\xi$. Forel & Grunow (2023) memperkenalkan **production recourse** yang secara eksplisit memungkinkan revisi kuantitas produksi pada horizon perencanaan yang lebih panjang ketika prakiraan permintaan berevolusi.

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) menggunakan MMFE untuk menangkap dinamika pembaruan prakiraan. Misalkan $D_t$ adalah permintaan aktual pada periode $t$ dan $F_t$ adalah prakiraan yang tersedia pada awal periode $t$:

$$D_t = F_t + \varepsilon_t, \quad \forall t \tag{7}$$

dengan $\varepsilon_t$ merupakan *martingale difference sequence*, sehingga:

$$\mathbb{E}\!\left[\varepsilon_{t+1} \mid \mathcal{F}_t\right] = 0 \tag{8}$$

Evolusi prakiraan dimodelkan sebagai:

$$F_{t+1} = F_t + \delta_{t+1}, \quad
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
