# 2337 — Model Optimasi Stokastik Hibrida untuk Penentuan Ukuran Lot dan Penjadwalan Produksi pada Sistem Manufaktur dengan Permintaan Tidak Pasti

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*, 32(4), 1154–1172. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (lot sizing) dan penjadwalan produksi (LSSP — *Lot Sizing and Scheduling Problem*) merupakan salah satu keputusan operasional paling krusial dalam sistem manufaktur modern, dengan dampak langsung terhadap tingkat persediaan, utilisasi kapasitas, dan total biaya rantai pasok. Lead Researchers (2025) dalam artikel yang diterbitkan di *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan sebuah model optimasi stokastik hibrida yang mengintegrasikan teknik dekomposisi skenario dengan heuristik meta-search untuk menyelesaikan LSSP berskala besar yang selama ini sulit ditangani oleh formulasi deterministik konvensional. Urgensi riset ini muncul karena dalam praktik industri nyata—mulai dari industri makanan dan minuman, kimia, hingga farmasi—permintaan konsumen bersifat stokastik, sementara pendekatan deterministik seperti model Wagner-Whitin atau algoritma Silver-Meal masih menjadi default di sebagian besar sistem ERP (Enterprise Resource Planning) modern.

Forel dan Grunow (2023) — DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881) — secara eksplisit mengkritik kesenjangan (*research-practice gap*) ini: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."* Pernyataan ini menegaskan bahwa meskipun literatur akademik telah menghasilkan ratusan varian model stokastik sejak paper seminal Dantzig dan Ferguson (1956), adopsi di lapangan masih sangat rendah karena tiga tantangan utama: (1) kompleksitas komputasional yang eksponensial terhadap jumlah periode dan skenario, (2) kebutuhan akan input distribusi probabilitas yang sulit diestimasi, dan (3) misalignment antara struktur model akademik dengan praktik *rolling-horizon planning* (RHP) yang menjadi tulang punggung sistem MRP-II dan S&OP modern. Dalam konteks ekonomi, biaya akibat perencanaan lot sizing yang suboptimal dapat mencapai 5–15% dari total biaya operasional persediaan (Sahin, 2024; Forel & Grunow, 2023), sehingga pengembangan model hibrida yang menggabungkan rigor matematis optimasi stokastik dengan fleksibilitas operasional RHP menjadi kebutuhan industri yang mendesak dan bernilai ekonomi tinggi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Dasar Lot Sizing Deterministik (Wagner-Whitin)

Model acuan yang menjadi basis bagi hampir semua ekstensi LSSP adalah formulasi Wagner-Whitin (1958) yang diminimisasi melalui *dynamic programming*. Untuk $T$ periode dengan permintaan deterministik $d_t$ pada periode $t$, biaya total $TC$ didefinisikan sebagai:

$$TC = \sum_{t=1}^{T} \left( s_t \cdot y_t + h_t \cdot I_t + c_t \cdot x_t \right)$$

dengan parameter keputusan: $x_t$ = jumlah produksi pada periode $t$, $y_t \in \{0,1\}$ sebagai variabel setup, $I_t$ = inventaris akhir periode, $s_t$ = biaya setup, $h_t$ = biaya holding per unit, dan $c_t$ = biaya produksi variabel per unit. Kendala utama meliputi *inventory balance* $I_t = I_{t-1} + x_t - d_t$ dengan $I_0 = 0$ dan linking constraint $x_t \le M \cdot y_t$ di mana $M$ adalah big-M.

### 2.2. Formulasi Stokastik Hibrida (Lead Researchers, 2025)

Lead Researchers (2025) memperluas model Wagner-Whitin ke dalam ranah stokastik dengan menggabungkan tiga elemen: (a) pemodelan skenario permintaan $d_t(\omega)$ pada skenario $\omega \in \Omega$, (b) recourse decision berupa koreksi produksi setelah realisasi permintaan, dan (c) mekanisme dekomposisi Benders untuk tractability. Fungsi tujuan model hibridanya adalah:

$$\min_{y_t, x_t} \sum_{t=1}^{T} \left( s_t y_t + c_t x_t \right) + \mathbb{E}_{\omega}\left[Q(y, \omega)\right]$$

di mana $Q(y, \omega)$ adalah fungsi recourse yang menyelesaikan subproblem:

$$Q(y, \omega) = \min_{x_t^+, I_t} \sum_{t=1}^{T} \left( h_t I_t(\omega) + p_t x_t^+(\omega) \right)$$

terhadap kendala $I_t(\omega) = I_{t-1}(\omega) + x_t(\omega) + x_t^+(\omega) - d_t(\omega)$ dengan biaya recourse $p_t$ (biaya ekspedisi/subkontrak) untuk menutupi *stockout* melalui produksi darurat. Elemen "hibrida" muncul karena Lead Researchers (2025) mengombinasikan *Benders decomposition* (yang bersifat eksak untuk masalah stage-wise) dengan *variable neighborhood search* (VNS) sebagai pemecah heuristik pada subproblem yang bersifat *mixed-integer*, sehingga tercapai keseimbangan antara optimalitas dan kelayakan komputasional.

### 2.3. Martingale Model of Forecast Evolution (MMFE) — Forel & Grunow (2023)

Forel dan Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) untuk menjembatani model stokastik dengan praktik rolling-horizon. Jika $F_{t_0}^t$ adalah forecast permintaan untuk periode $t$ yang dibuat pada periode perencanaan $t_0$, maka MMFE mendefinisikan evolusi forecast sebagai:

$$F_{t_0+1}^t = F_{t_0}^t + \varepsilon_{t_0}^t \quad \text{dengan} \quad \varepsilon_{t_0}^t \sim N(0, \sigma_t^2 \cdot (t - t_0))$$

di mana *variance* kesalahan forecast tumbuh secara linear terhadap *forecast lead time*. Model lot sizing berbasis MMFE diintegrasikan ke dalam kerangka RHP melalui fungsi tujuan:

$$\min \sum_{k=0}^{K-1} \sum_{t=k+1}^{T} \left( s_t y_t^k + h_t I_t^k + p_t \cdot \text{Pen}_t^k \right)$$

di mana $y_t^k, I_t^k$ adalah variabel keputusan pada iterasi rolling $k$ dan $\text{Pen}_t^k$ adalah penalti deviasi dari rencana awal. Inilah yang disebut Forel & Grunow (2023) sebagai *production recourse* yang merepresentasikan *replanning flexibility* dalam RHP.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model hibrida Lead Researchers (2025) dan pendekatan MMFE Forel & Grunow (2023) mengikuti *Standard Operating Procedure* (SOP) delapan tahap berikut, yang selaras dengan kerangka S&OP APICS/ASCM:

1. **Akuisisi Data Historis:** Kumpulkan 24–36 bulan data permintaan, biaya setup $s_t$, biaya holding $h_t$, kapasitas $Cap_t$, dan lead time采购.
2. **Estimasi Parameter Stokastik:** Tentukan distribusi permintaan $f(d_t)$ dan parameter MMFE $\{\sigma_t^2\}_{t=1}^{T}$ menggunakan *Maximum Likelihood Estimation* (MLE) pada residual forecast historis.
3. **Generasi Skenario:** Gunakan *Monte Carlo sampling* atau *moment-matching scenario generation* untuk membangun $N_s = 50$ hingga $200$ skenario permintaan.
4. **Pre-processing Benders:** Formulasikan master problem (variabel first-stage) dan subproblem (variabel recourse) sesuai struktur hibrida Lead Researchers (2025).
5. **Optimasi Iteratif:** Jalankan algoritma Benders selama 10–30 iterasi hingga gap optimalitas $< 0,5\%$; untuk subproblem MIP, aktifkan *VNS* fallback bila solver komersial (Gurobi/CPLEX) tidak konvergen dalam 300 detik.
6. **Integrasi Rolling-Horizon (MMFE):** Terapkan logika Forel & Grunow (2023) — setiap awal periode, update forecast dengan MMFE dan re-solve model stokastik dengan *frozen period* sepanjang *replanning interval* $\tau$.
7. **Validasi & Sensitivity Analysis:** Uji robustness dengan perturbasi parameter $\pm 20\%$ dan lakukan *in-sample backtesting*.
8. **Deployment & Monitoring:** Integrasikan hasil ke modul S&OP ERP (SAP IBP, Oracle S&OP) dan monitor *service level* mingguan.

Arsitektur teknologi yang direkomendasikan adalah *three-tier*: (i) layer data historis (data lake pada SQL Server/PostgreSQL), (ii) layer optimasi (Python + Gurobi + Pyomo), dan (iii) layer presentasi (Power BI dashboard). Diagram alir keputusan mengikuti *feedback loop* RHP: data historis → forecast MMFE → model stokastik → rekomendasi lot → eksekusi → observasi demand aktual → update parameter (learning loop).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik pengemasan minuman ringan di Jawa Timur dengan horizon perencanaan $T = 6$ minggu, satu lini produksi, dan permintaan yang berfluktuasi musiman. Parameter industri riil: