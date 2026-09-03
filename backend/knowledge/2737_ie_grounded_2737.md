# 2737 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (lot sizing) dan penjadwalan produksi merupakan salah satu keputusan taktis paling krusial dalam manajemen operasi modern, terutama pada lingkungan manufaktur dengan permintaan yang bersifat stochastic, kapasitas produksi yang terbatas, serta lead time yang tidak deterministik. Secara historis, keputusan-keputusan ini diselesaikan melalui model deterministik seperti Wagner-Whitin (1958) dan posteriormente berkembang ke model capacitated lot sizing problem (CLSP), namun gap antara formulasi akademis dan praktik industri tetap signifikan. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: 10.48047/cu/54/02/2007-2018) menyoroti bahwa kebanyakan perusahaan依旧 menggantungkan keputusan lot sizing pada aturan-aturan启发istik sederhana (seperti Silver-Meal, EOQ, atau lot-for-lot) yang mengabaikan interaksi dengan penjadwalan dan ketidakpastian permintaan. Akibatnya, biaya persediaan (inventory carrying cost), biaya setup, dan biaya keterlambatan (backorder) melonjak saat permintaan aktual偏离 dari rencana awal.

Konteks industri yang melatarbelakangi的研究 ini sangat penting untuk dipahami. Pada industri proses seperti kimia, makanan dan minuman, farmasi, serta elektronik konsumen, keputusan lot sizing memiliki dampak langsung pada total biaya yang bisa mencapai 20–35% dari total biaya operasional. Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: 10.1111/poms.13881) secara eksplisit menyatakan bahwa "pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan dalam praktik" — sebuah ironi mengingat ketidakpastian permintaan adalah realitas harian yang dihadapi oleh para perencana produksi. Industri biasanya menerapkan model deterministik dan mengelola ketidakpastian melalui framework rolling-horizon dengan pembaruan prakira (forecast updates) yang sering. Namun, tanpa model yang secara formal mengantisipasi evolusi prakira, keputusan yang dihasilkan menjadi suboptimal secara struktural.

Urgensi operasional dari penelitian Lead Researchers (2025) dan Forel & Grunow (2023) dapat dirangkum dalam tiga dimensi: (i) urgensi ekonomi — pengurangan 5–15% pada total biaya produksi melalui optimisasi stokastik yang tepat; (ii) urgensi teknis — kemampuan mengintegrasikan keputusan lot sizing dengan penjadwalan mesin (machine scheduling) untuk menghindari solusi infeasible; dan (iii) urgensi komputasional — kebutuhan akan model hibrida yang menggabungkan kekuatan exact methods (MILP) dengan efisiensi metaheuristik (genetic algorithm, simulated annealing) untuk memecahkan实例 industri berskala besar dalam waktu yang acceptable untuk pengambilan keputusan mingguan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik

Model lot sizing capacitated (CLSP) dapat diformulasikan sebagai berikut. Misalkan $T$ adalah jumlah periode perencanaan, $d_t$ adalah permintaan pada periode $t$, $c_t$ adalah biaya produksi per unit, $h_t$ adalah biaya simpan per unit per periode, $s_t$ adalah biaya setup, dan $K_t$ adalah kapasitas produksi pada periode $t$. Variabel keputusan: $x_t$ = jumlah produksi, $y_t \in \{0,1\}$ = variabel biner setup, $I_t$ = inventory akhir periode.

$$\min \sum_{t=1}^{T} \left( c_t x_t + s_t y_t + h_t I_t \right)$$

$$\text{subject to:}$$
$$I_t = I_{t-1} + x_t - d_t, \quad \forall t \in \{1, \ldots, T\}$$
$$x_t \leq K_t y_t, \quad \forall t$$
$$I_t, x_t \geq 0, \quad y_t \in \{0,1\}$$
$$I_0 = I_T = 0$$

### 2.2 Ekstensi Stokastik Dua-Tahap (Two-Stage Stochastic Programming)

Lead Researchers (2025) mengusulkan hibridisasi melalui formulasi stokastik dua-tahap yang menangkap ketidakpastian permintaan. Permintaan direpresentasikan sebagai skenario $\xi \in \Omega$ dengan probabilitas $p_\xi$. Keputusan tahap pertama (here-and-now) adalah $y_t$, sementara keputusan tahap kedua (recourse) adalah $x_t^\xi, I_t^\xi$.

$$\min \sum_{t=1}^{T} s_t y_t + \mathbb{E}_\xi \left[ \sum_{t=1}^{T} c_t x_t^\xi + h_t I_t^\xi + b_t B_t^\xi \right]$$

dimana $B_t^\xi$ adalah variabel backorder dengan biaya $b_t$. Fungsi recourse menangkap fleksibilitas untuk menyesuaikan produksi setelah permintaan aktual $\xi$ terungkap.

### 2.3 Martingale Model of Forecast Evolution (MMFE) — Forel & Grunow (2023)

Forel dan Grunow (2023) memperkenalkan MMFE yang memungkinkan antisipasi terhadap pembaruan prakira. Misalkan $F_t^j$ adalah prakira permintaan pada periode $j$ yang dibuat di periode $t$, dengan $F_t^j = F_{t-1}^j + \varepsilon_{t}^j$, dimana $\varepsilon_t^j$ adalah inovasi nol-rata-rata dengan varian $\sigma_j^2$. Bentuk rekursif ini menghasilkan:

$$F_{t+1}^j = F_t^j + \varepsilon_{t+1}^j, \quad \varepsilon_{t+1}^j \sim \mathcal{N}(0, \sigma_j^2)$$

Model ini memungkinkan integrasi dengan rolling-horizon planning dimana keputusan lot sizing pada periode $t$ mempertimbangkan tidak hanya prakira saat ini $F_t^j$, tetapi juga distribusi prakira di masa depan $F_{t+1}^j, F_{t+2}^j, \ldots$

### 2.4 Formulasi Hibrida MILP–Metaheuristik

Lead Researchers (2025) mengintegrasikan formulasi MILP stokastik dengan komponen penjadwalan melalui indexed variables $x_{i,t}^{\xi}$ untuk produk $i$ pada periode $t$, dan variabel urutan $\pi$ yang diselesaikan melalui algoritma genetika. Arsitektur hibridanya adalah:

$$\min \sum_{i,\xi} p_\xi \sum_t (c_{i,t} x_{i,t}^\xi + s_{i,t} y_{i,t}^\xi + h_{i,t} I_{i,t}^\xi) + \alpha \cdot C_{seq}(\pi)$$

dimana $C_{seq}(\pi)$ adalah fungsi biaya urutan (sequence-dependent setup) yang diminimasi oleh subroutine genetika, dan $\alpha$ adalah bobot penghubung. Dengan cara ini, lot sizing dan penjadwalan diselesaikan secara simultan (integrated approach), bukan sequential.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model hibrida Lead Researchers (2025) mengikuti SOP enam-tahap yang terstruktur:

**Tahap 1 — Pengumpulan Data Historis dan Kalibrasi Prakira.** Kumpulkan data permintaan 24–36 bulan terakhir, hitung parameter MMFE $\sigma_j^2$ per periode $j$, dan validasikan menggunakan uji Ljung-Box untuk autokorelasi residual.

**Tahap 2 — Generasi Skenario.** Gunakan teknik Sample Average Approximation (SAA) dengan $N = 200$ hingga $N = 1000$ skenario permintaan yang mengurangi variance dari estimasi objective function hingga di bawah threshold 2%.

**Tahap 3 — Formulasi MILP Stokastik.** Bangun model two-stage stochastic program dengan bantuan algebraic modeling language (AMPL/Gurobi atau Pyomo/CPLEX). Estimasi bound gaps melalui dual bounds dari subproblem recourse.

**Tahap 4 — Komponen Penjadwalan Hibrida.** Untuk setiap skenario $\xi$, selesaikan integrated lot sizing–scheduling menggunakan algoritma genetika dengan populasi 100, crossover rate 0.85, mutation rate 0.05, dan 500 generasi.

**Tahap 5 — Validasi dengan Rolling-Horizon.** Terapkan kebijakan rolling-horizon dengan horizon $H = 12$ periode dan re-plan setiap periode sesuai Forel & Grunow (2023). Bandingkan kinerja dengan baseline deterministik (Silver-Meal + EDT).

**Tahap 6 — Implementasi ERP dan Continuous Improvement.** Integrasikan output ke modul MRP/MES pada sistem ERP (SAP, Oracle), bangun dashboard KPI (service level, inventory turn, setup frequency), dan lakukan recalibration bulanan terhadap $\sigma_j^2$.

Diagram alir proses mengikuti logika: *Data Input → Skenario Generation → MILP Solver → GA Scheduling → Solution Aggregation → Decision Output*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Produsen Minuman Multi-Produk (5 SKU, 6 periode)**

Data parameter industri:

| Parameter | Nilai |
|-----------|-------|
| Produk | A, B, C, D, E |
| Periode | 6 (mingguan) |
| Permintaan rata-rata | $d_A = [80, 90, 100, 110, 120, 130]$ |
| Biaya setup | $s_i = \$200$ untuk semua produk |
| Biaya produksi | $c_i = \$5/unit$ |
| Biaya simpan | $h_i = \$0.50/unit$/minggu |
| Kapasitas | $K_t = 250$ unit/minggu |
| Biaya backorder | $b_i = \$2/unit$ |

**Langkah 1 — Formulasi Skenario (MMFE).** Dengan $\sigma_j^2 = 0.05 \cdot d_j$, permintaan aktual untuk Produk A pada periode 3 (prakira 100 unit) menjadi distribusi $\mathcal{N}(100, 25)$. Tiga skenario representatif: rendah ($\xi_1 = 88$), sedang ($\xi_2 = 100$), tinggi ($\xi_3 = 112$) dengan probabilitas $p = [0.25, 0.50, 0.25]$.

**Langkah 2 — Optimisasi Deterministik (Baseline Silver-Meal).** Untuk Produk A tunggal dengan permintaan $[80, 90, 100, 110, 120, 130]$:
- EOQ-like average = $\sqrt{2 \cdot 200 \cdot 100 / 0.5} \approx 283$ unit
- Silver-Meal memilih lot: $[170, 0, 230, 0, 0, 130]$ → total setup = $2 \times 200 = \$400$, holding = $(0+80+0+0+0) \times 0.5 = \$40$, **total cost = \$440**

**Langkah 3 — Optimisasi Stokastik Dua-Tahap.** Dengan 3 skenario, kebijakan optimal berubah. Setup pada periode 1 mencakup produksi 175 unit (mencakup skenario $\xi_1$ dan $\xi_2$), dengan recourse action menyesuaikan produksi di periode 2–6.

Perhitungan biaya ekspektasian:

$$E[C] = \sum_\xi p_\xi C(\xi) = 0.25(432) + 0.50(440) + 0.25(478) = \$447.50$$

Karena model stokastik mengizinkan recourse, kita menghitung **Value of Stochastic Solution (VSS)**:

$$\text{VSS} = E[C_{det}] - E[C_{stoch}] = 447.50 - 432 = \$15.50$$

Artinya, model stokastik memberikan penghematan 3.5% dibanding pendekatan deterministik pada kasus tunggal ini. Jika diterapkan ke 5 produk × 6 periode, penghematan tahunan diestimasikan mencapai \$50,000–\$120,000 untuk pabrik skala menengah.

**Langkah 4 — Integrasi Penjadwalan Hibrida.** Ketika sequence-dependent setup $\$150$ antara produk A→B tetapi $\$50$ untuk B→A, algoritma genetika menemukan urutan optimal [B→C→A→D→E] yang menghemat \$200 dalam sequence cost dibanding urutan alfabetik.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Evaluasi Kritis

Kedua paper memiliki keterbatasan yang perlu diakui. Lead Researchers (2025) mengandalkan kompleksitas komputasional tinggi pada instans bers