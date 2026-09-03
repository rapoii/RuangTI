# 1825 — Model Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54, No. 2, hal. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning*. Production and Operations Management. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan tulang punggung sistem perencanaan produksi di berbagai industri manufaktur dan proses, mulai dari industri makanan dan minuman, kimia, farmasi, hingga perakitan otomotif. Dalam praktik industri kontemporer, perencanaan produksi harus mampu menghadapi dua tantangan fundamental secara simultan: (1) fluktuasi permintaan yang sangat dinamis dan sulit diprediksi secara deterministik, serta (2) kompleksitas kombinatorial dari keputusan *setup*, produksi, persediaan, dan alokasi kapasitas lintas periode waktu (Lead Researchers, 2025). Ketidakmampuan mengelola kedua dimensi ini secara bersamaan akan menghasilkan biaya total kepemilikan (*total relevant cost*) yang suboptimal, tingkat *service level* yang terdegradasi, serta *bullwhip effect* yang semakin parah di sepanjang rantai pasok.

Lead Researchers (2025) menekankan bahwa di lantai pabrik, praktisi masih mengandalkan pendekatan deterministik berbasis MRP (*Material Requirements Planning*) atau algoritma *Wagner-Whitin* yang diperluas, lalu mengakomodasi ketidakpastian melalui *safety stock* dan *buffer time* yang bersifat reaktif. Namun, Forel & Grunow (2023) dalam studi berbasis simulasi ekstensif pada data sintetis maupun *real-world* menunjukkan bahwa pendekatan tersebut secara sistematis menghasilkan *actual cost* 8–15% lebih tinggi dibandingkan dengan formulasi stokastik yang secara eksplisit memodelkan evolusi peramalan permintaan (*forecast evolution*). Lebih lanjut, Forel dan Grunow (2023, p. 1) menyatakan secara eksplisit: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."* Kutipan ini menegaskan adanya *practice–academia gap* yang substansial dan menjadi justifikasi utama pengembangan model hybrid.

Urgensi operasional semakin tinggi ketika scheduler harus memutuskan lot produksi yang akan dieksekusi minggu depan, namun demand forecast akan direvisi setiap awal periode (rolling-horizon). Keputusan yang dibuat hari ini akan menentukan kemampuan perusahaan untuk merespons revisi peramalan esok hari. Tanpa formulasi yang visioner, produksi *over-batch* akan menghasilkan inventaris berlebih, sedangkan produksi *under-batch* akan memicu *stockout* dan kehilangan penjualan. Modul 1825 ini membahas bagaimana Model Optimasi Stokastik Hybrid (Lead Researchers, 2025) yang dipadukan dengan kerangka *Martingale Model of Forecast Evolution* (MMFE) dari Forel & Grunow (2023) mampu menjawab tantangan tersebut secara kuantitatif, terstruktur, dan terimplementasi di industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (CLSP – Capacitated Lot Sizing Problem)

Sebagai fondasi, model *lot sizing* berkapasitas deterministik untuk horizon perencanaan $T$ periode dapat dituliskan sebagai berikut (Lead Researchers, 2025):

$$
\min \; Z = \sum_{t=1}^{T} \left( c_t \, x_t + s_t \, y_t + h_t \, I_t^+ + p_t \, I_t^- \right)
$$

dengan kendala:

$$
\sum_{i=1}^{m} a_{i,t}\, x_{i,t} \leq C_t, \quad \forall t \in \{1, \dots, T\}
$$

$$
I_t = I_{t-1} + x_t - d_t, \quad \forall t
$$

$$
x_t \leq M\, y_t, \quad y_t \in \{0,1\}, \quad x_t, I_t^+, I_t^- \geq 0
$$

dengan $x_t$ = kuantitas produksi periode $t$, $y_t$ = variabel keputusan *setup* (biner), $I_t^+$ dan $I_t^-$ masing-masing adalah inventaris positif dan *backorder*, $c_t$, $s_t$, $h_t$, $p_t$ berturut-turut adalah biaya produksi satuan, biaya *setup*, biaya *holding*, dan biaya *backorder*, $C_t$ adalah kapasitas tersedia, dan $M$ adalah bilangan *big-M*. Notasi $a_{i,t}$ merepresentasikan konsumsi sumber daya $i$ (jam mesin, jam tenaga kerja, bahan baku) per unit produk pada periode $t$.

### 2.2 Ekstensi Stokastik Dua Tahap (*Two-Stage Stochastic Programming*)

Untuk mengakomodasi ketidakpastian permintaan, Lead Researchers (2025) merumuskan kembali model sebagai *two-stage stochastic program* dengan himpunan skenario $\Omega$, masing-masing memiliki probabilitas realisasi $\pi_\omega$:

$$
\min_{x,y} \; \mathbb{E}_\omega \left[ \sum_{t=1}^{T} \left( c_t x_t + s_t y_t + h_t I_t^+(\omega) + p_t I_t^-(\omega) \right) + \sum_{t=1}^{T} q_t \, r_t(\omega) \right]
$$

$$
\text{s.t.} \quad I_t(\omega) = I_{t-1}(\omega) + x_t + r_t(\omega) - d_t(\omega)
$$

$$
x_t \leq M y_t, \quad y_t \in \{0,1\}
$$

$$
r_t(\omega) \leq R_t^{\max} \quad \text{(recourse capacity)}
$$

di mana $r_t(\omega)$ adalah keputusan *recourse* (produksi tambahan atau *overtime*) yang baru diambil setelah realisasi permintaan $d_t(\omega)$ terobservasi, dengan biaya $q_t$ per unit recourse. Formulasi ini menjamin keputusan tingkat pertama (*here-and-now*) tetap layak (*feasible*) untuk semua skenario recourse.

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengusulkan bahwa permintaan aktual $D_t$ mengikuti proses stokastik yang bergantung pada *forecast* periode sebelumnya $F_{t-1}$:

$$
D_t = F_{t-1} + \varepsilon_t, \quad \text{dengan} \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_t^2)
$$

Sementara evolusi *forecast* itu sendiri bersifat *martingale*:

$$
F_t = F_{t-1} + \eta_t, \quad \eta_t \sim \mathcal{N}(0, \tau_t^2), \quad \mathbb{E}[F_t \mid F_{t-1}] = F_{t-1}
$$

Implikasi langsungnya adalah kovarians antara realisasi permintaan di periode $t$ dan revisi forecast berikutnya tidak nol, melainkan:

$$
\text{Cov}(D_t, F_t \mid F_{t-1}) = \sigma_t^2
$$

Forel dan Grunow (2023) menunjukkan bahwa mengabaikan kovariansi ini (dengan memperlakukan demand dan forecast sebagai independen) akan menaksir terlalu rendah nilai opsi recourse, sehingga keputusan *here-and-now* menjadi terlalu konservatif. Model hybrid pada Modul 1825 mengintegrasikan MMFE ini ke dalam struktur *scenario tree* dengan jumlah skenario $|\Omega| = 50$–200 yang dibangkitkan melalui *Monte Carlo sampling*.

### 2.4 Struktur Hybrid: Penggabungan MIP + Metaheuristik

Kompleksitas komputasional MIP (*Mixed Integer Programming*) murni untuk $|\Omega|$ besar menjadi tidak tractable. Lead Researchers (2025) mengusulkan arsitektur hybrid:

$$
x^{\text{MASTER}} = \arg\min_{x \in \mathcal{X}} \; \mathbb{E}_\omega[\Phi(x, \omega)]
$$

di mana masalah recourse $\Phi(x,\omega)$ diselesaikan dengan *rolling-horizon heuristic*, dan *upper bound* global dicari melalui *simulated annealing* atau *genetic algorithm*. Relaksasi LP dari masalah master digunakan sebagai *lower bound*, sedangkan gap optimalitas ditutup dengan pemanenan *cutting plane* dari *Benders decomposition*:

$$
\theta \geq \mathbb{E}_\omega[\pi_\omega^\top (b_\omega - A_\omega x)] + c^\top x
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid di industri mengikuti SOP delapan tahap yang diturunkan oleh Lead Researchers (2025) dan Forel & Grunow (2023):

**Tahap 1 – Akuisisi Data Historis.** Kumpulkan histori permintaan $D_{t,\text{hist}}$ minimal 36–60 periode, hitung *mean absolute deviation* dan *mean squared error* peramalan untuk mengestimasi $\sigma_t$ dan $\tau_t$.

**Tahap 2 – Kalibrasi MMFE.** Bangun estimator maximum likelihood untuk parameter $(\sigma_t^2, \tau_t^2)$ per produk-per-periode, validasi dengan *out-of-sample backtest* pada rolling window 12 periode.

**Tahap 3 – Pembangkitan Skenario.** Gunakan teknik *moment matching* (berbasis Johnson atau Pearson distribution) untuk mereduksi 10.000 *raw scenarios* dari Monte Carlo menjadi 100–200 skenario representatif yang mempertahankan momen orde-1 dan orde-2 serta struktur korelasi.

**Tahap 4 – Formulasi MIP Master.** Susun masalah master dengan variabel *here-and-now* $(x_t, y_t)$ untuk horizon panjang $T=12$ bulan, integrasikan biaya produksi, setup, holding, dan backorder.

**Tahap 5 – Penyelesaian Recourse via Rolling Horizon.** Setiap awal periode, selesaikan sub-masalah recourse $T'=4$ periode ke depan dengan update forecast $F_{t}$ aktual, terapkan *safety stock policy* $(s,S)$ sebagai *recourse heuristic*.

**Tahap 6 – Validasi Cutting Plane.** Tambahkan *optimality cut* dari sub-masalah recourse ke dalam master untuk menutup gap optimalitas hingga toleransi $\epsilon = 0{,}5\%$.

**Tahap 7 – Eksekusi Eksekutor Batching.** Keputusan lot akhir dideliver ke *MES* (Manufacturing Execution System) sebagai *planned order schedule*, dengan toleransi deviasi 5% untuk *execution flexibility*.

**Tahap 8 – Monitoring KPI.** Pantau *service level* $\alpha \geq 95\%$, *inventory turnover* $\geq 8\times$, dan *schedule stability* (jumlah perubahan jadwal antar revisi) $\leq 10\%$.

Diagram alir logikanya secara ringkas: **Data Historis → Kalibrasi MMFE → Skenario → MIP Master → Recourse RH → Cutting Plane → Eksekusi MES → KPI Dashboard → Feedback Loop**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Setting

Pertimbangkan pabrik pengemasan minuman ringan dengan horizon $T=6$ minggu, satu lini produksi berkapasitas $C_t = 4.000$ karton/minggu. Data parameter biaya (dalam ribu Rp/karton): $c_t=5$, $s_t=800$, $h_t=1$, $p_t=4$, $q_t=6{,}5$ (recourse). Demand aktual minggu ke-1 s.d. ke-6 (karton): $d=[2.500, 3.200, 2.800, 3.500, 3.100, 2.900]$, dengan *forecast evolution* $\sigma_t = 250$ karton.

### 4.2 Penyelesaian Deterministik (Benchmark)

Dengan formulasi Wagner-Whitin deterministik terhadap forecast rata-rata $\bar{d} = [2.600, 3.000, 3.000, 3.300, 3.000, 2.900]$, diperoleh rencana produksi $x^* = [2.600, 3.000, 0, 3.300, 3.000, 2.900]$ dengan dua periode *setup* nol. Biaya total deterministik:

$$
Z_{\text{det}} = 5(14.800) + 800(4) + 1(150) = 74.000 + 3.200 + 150 = 77.350 \text{ ribu Rp}
$$

### 4.3 Penyelesaian Stokastik Hybrid (Modul 1825)

Dengan MMFE, 50 skenario dibangkitkan, $|y_t|=1$ untuk seluruh $t$ (tidak ada lot skip yang diizinkan pada kapasitas penuh). Hasilkan keputusan master $(x_t)$ berikut: $x = [2.900, 3.400, 2.800, 3.500, 3.000, 2.900]$. Recourse rata-rata $r_t = 175$ karton/minggu (berupa *overtime* reguler). Hitung:

$$
\mathbb{E}[Z] = 5(14.500) + 800(6) + 1(95) + 4(105) + 6{,}5(175 \cdot 6)
$$

$$
= 72.500 + 4.800 + 95 + 420 + 6.825 = 84.640 \text{ ribu Rp}
$$

### 4.4 Evaluasi Out-of-Sample pada 1000 Skenario Monte Carlo

Saat dijalankan pada simulasi 1.000 skenario permintaan aktual yang independen terhadap skenario perancangan, biaya rata.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
