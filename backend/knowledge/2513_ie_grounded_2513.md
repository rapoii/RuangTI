# 2513 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54, No. 2, hlm. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan tulang punggung dari sistem manufaktur modern, terutama pada lingkungan *make-to-stock* dan *assemble-to-order* yang menghadapi permintaan musiman, ketidakpastian rantai pasok, serta variasi permintaan harian yang tinggi. Dalam praktik industri, sebagian besar perusahaan masih mengandalkan model deterministik — seperti *Wagner-Whitin* atau *Silver-Meal* — yang kemudian dikombinasikan dengan kerangka *rolling-horizon* untuk menyerap fluktuasi permintaan aktual. Forel dan Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyatakan bahwa "pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan dalam praktik", padahal secara teoretis model stokastik mampu menurunkan biaya total aktual hingga 8–15% dibanding pendekatan deterministik-naif.

Kesenjangan antara riset akademik dan implementasi inilah yang dijawab oleh Lead Researchers (2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) melalui formulasi **Hybrid Stochastic Optimization** yang memadukan *two-stage stochastic programming* dengan modul penjadwalan kapasitas terbatas (*capacitated lot sizing and scheduling problem*, CLSP). Urgensi ekonominya sangat nyata: pada industri FMCG dengan *bill of materials* multi-level, setiap kesalahan 1% dalam perencanaan ukuran lot dapat meningkatkan *safety stock* hingga 3–5%, yang berarti modal kerja tambahan miliaran rupiah per tahun untuk perusahaan skala menengah. Secara teknis, hibridisasi diperlukan karena masalah lot sizing dan penjadwalan bersifat *NP-hard* ketika kapasitas menjadi kendala; dekomposisi Benders atau *column generation* menjadi satu-satunya jalur komputasional yang layak untuk horizon 12–24 periode.

Konteks industri yang relevan mencakup: (i) pabrik perakitan *automotive* dengan variabilitas permintaan 20–35% antar minggu; (ii) lini produksi makanan dan minuman dengan shelf-life pendek; (iii) manufaktur elektronik dengan *ramp-up* produk baru; serta (iv) industri farmasi yang harus memenuhi stringent GMP planning. Keempat sektor ini memiliki karakteristik共同的: lead time produksi nontrivial, biaya setup signifikan, dan kemampuan *postponement* yang bervariasi. Dengan mengintegrasikan evolusi forecast menggunakan *Martingale Model of Forecast Evolution* (MMFE) ke dalam lot sizing stokastik, Forel dan Grunow (2023) menunjukkan bahwa "model evolusi forecast mampu mereduksi biaya aktual secara signifikan karena mereka meng-*encapsulate* informasi terkini yang akan tersedia di masa depan." Paper Lead Researchers (2025) memperluas ide ini dengan menggabungkan keputusan lot sizing, *sequence-dependent setup*, dan *scheduling* dalam satu kerangka optimisasi terpadu, sehingga menghasilkan rencana produksi yang tidak hanya *cost-optimal* secara ekspektasional tetapi juga *feasible* secara operasional.

## 2. Landasan Teori & Formulasi Matematis

Formulasi hibrida yang diusulkan Lead Researchers (2025) berpijak pada **two-stage stochastic mixed-integer programming** dengan recourse terhadap keputusan produksi. Berikut notasi dan formulasi intinya.

**Himpunan dan Indeks:**
- $T = \{1, 2, \ldots, |T|\}$: himpunan periode perencanaan diskrit
- $S = \{1, 2, \ldots, |S|\}$: himpunan skenario permintaan dengan probabilitas $p_s$
- $M = \{1, 2, \ldots, |M|\}$: himpunan produk (item)
- $K = \{1, 2, \ldots, |K|\}$: himpunan kapasitas/resource time

**Parameter:**
- $c_{mt}$: biaya produksi per unit produk $m$ pada periode $t$
- $h_{mt}$: biaya *holding* per unit produk $m$ dari $t$ ke $t+1$
- $s_{mt}$: biaya *setup* (fixed) untuk produk $m$ pada periode $t$
- $d_{m,t,s}$: permintaan acak produk $m$ pada periode $t$ di skenario $s$
- $C_{k t}$: kapasitas resource $k$ pada periode $t$
- $a_{km}$: waktu yang dibutuhkan resource $k$ untuk memproduksi 1 unit $m$
- $u_{mt}$: biaya *backorder* per unit

**Variabel Keputusan:**
- $x_{m,t,s} \geq 0$: kuantitas produksi produk $m$ pada periode $t$ di skenario $s$ (variabel *recourse*)
- $y_{m,t,s} \in \{0,1\}$: keputusan setup produk $m$ pada periode $t$ di skenario $s$
- $I_{m,t,s} \geq 0$: inventori akhir produk $m$ di periode $t$ pada skenario $s$
- $B_{m,t,s} \geq 0$: *backorder* produk $m$ pada periode $t$ di skenario $s$

**Formulasi Master Problem (First Stage + Recourse):**

Minimisasi total biaya ekspektasional:

$$
\min \; \sum_{m \in M} \sum_{t \in T} c_{mt} \mathbb{E}[x_{m,t,s}] + \sum_{m \in M} \sum_{t \in T} s_{mt} \mathbb{E}[y_{m,t,s}] + \sum_{m \in M} \sum_{t \in T} \left( h_{mt}\mathbb{E}[I_{m,t,s}] + u_{mt}\mathbb{E}[B_{m,t,s}] \right)
$$

dengan subject to:

$$
I_{m,t,s} = I_{m,t-1,s} + x_{m,t,s} - d_{m,t,s} + B_{m,t-1,s} - B_{m,t,s} \quad \forall m,t,s
$$

$$
\sum_{m \in M} a_{km} x_{m,t,s} \leq C_{kt} \quad \forall k,t,s
$$

$$
x_{m,t,s} \leq M_y \cdot y_{m,t,s} \quad \forall m,t,s
$$

$$
x_{m,t,s}, I_{m,t,s}, B_{m,t,s} \geq 0; \quad y_{m,t,s} \in \{0,1\}
$$

Komponen hibrida muncul saat kendala penjadwalan *sequence-dependent setup* dimasukkan:

$$
y_{m,t,s} + y_{m',t,s} \leq 1 + z_{m,m',t,s} \quad \forall m \neq m', t, s
$$

$$
z_{m,m',t,s} + z_{m',m'',t,s} \leq 1 \quad \forall \text{ triplet } m, m', m'', t, s
$$

dengan $z_{m,m',t,s} \in \{0,1\}$ merepresentasikan transisi urutan pada periode yang sama. Pendekatan MMFE dari Forel dan Grunow (2023) digunakan untuk membangkitkan $d_{m,t,s}$ sedemikian rupa sehingga $\mathbb{E}[d_{m,t,s} | \mathcal{F}_{\tau}] = F_{t|\tau}$ untuk $\tau < t$, di mana $F_{t|\tau}$ adalah forecast yang tersedia di periode $\tau$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SOP di lantai pabrik mengikuti protokol berlapis berikut:

**Tahap 1 — Akuisisi Data & Pemodelan Forecast (Garis Besar SOP/ISO 9001:2015 Klausul 7.5)**
1. Kumpulkan historis penjualan 24–36 bulan dan bersihkan *outlier* menggunakan *Tukey fences* dengan multiplier $k=1{,}5$.
2. Pilih keluarga model forecast: ARIMA, *exponential smoothing* Holt-Winters, atau *gradient boosting* jika tersedia data eksogen.
3. Hitung *forecast evolution variance* $\sigma_{t|\tau}^2$ yang akan menjadi input MMFE:

$$
\sigma_{t|\tau}^2 = \sigma_{\varepsilon}^2 \sum_{j=\tau+1}^{t} \phi_j^2
$$

4. Bangkitkan $|S| \in [50, 500]$ skenario menggunakan *moment matching* atau *Latin Hypercube Sampling*.

**Tahap 2 — Formulasi Model Hibrida**
5. Translasi parameter biaya dari *standard costing* ERP (SAP/Oracle) ke format model.
6. Bangun matriks $a_{km}$ dari *routing sheet* manufaktur.
8. Susun model *two-stage stochastic* dengan perangkat lunak seperti GAMS/CPLEX, Pyomo/Gurobi, atau AIMMS.

**Tahap 3 — Solusi & Validasi**
9. Jalankan solver dengan *time limit* 30–60 menit; catat *optimality gap*.
10. Validasi rencana dengan *rolling-horizon simulation*: setiap periode $\tau$, *fix* keputusan $x_{m,1..\tau}$ dan re-optimize periode $\tau+1..T$ dengan informasi baru.
11. Bandingkan *expected cost* vs *realized cost*; jika gap > 5%, lakukan *re-calibration* parameter.

**Tahap 4 — Eksekusi & Pengendalian**
12. Terjemahkan keputusan $x_{m,t,s}$ ke *production order* di MES; gunakan nilai ekspektasional sebagai baseline dan aktifkan *recourse* mingguan.
13. Monitor KPI: *service level*, *inventory turn*, *setup frequency*, dan *capacity utilization*.
14. Lakukan *post-implementation review* bulanan sesuai siklus PDCA Deming.

Diagram alir proses mengikuti kerangka **Plan-Do-Check-Act** dengan *gate review* setiap akhir kuartal untuk memastikan rencana lot sizing adaptif terhadap perubahan permintaan aktual.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan lini perakitan *consumer electronics* dengan 3 produk ($M = \{A, B, C\}$) dan horizon $T = 5$ periode (mingguan). Parameter biaya:

| Parameter | Produk A | Produk B | Produk C |
|---|---|---|---|
| $c_m$ (biaya variabel) | 50 | 70 | 90 |
| $s_m$ (biaya setup) | 400 | 600 | 800 |
| $h_m$ (holding/unit) | 2 | 3 | 4 |
| $u_m$ (backorder/unit) | 15 | 20 | 25 |

Kapasitas mingguan: $C_t = 2000$ unit (setara). Permintaan produk A untuk skenario "rendah", "sedang", "tinggi":

| $t$ | $d_{A,t,\text{low}}$ | $d_{A,t,\text{med}}$ | $d_{A,t,\text{high}}$ |
|---|---|---|---|
| 1 | 80 | 100 | 130 |
| 2 | 90 | 120 | 150 |
| 3 | 110 | 140 | 175 |
| 4 | 100 | 130 | 160 |
| 5 | 95 | 125 | 155 |

Probabilitas skenario: $p_{\text{low}} = 0{,}25$, $p_{\text{med}} = 0{,}50$, $p_{\text{high}} = 0{,}25$. Permintaan ekspektasional $\mathbb{E}[d_{A,t}] = 0{,}25 d_{\text{low}} + 0{,}5 d_{\text{med}} + 0{,}25 d_{\text{high}}$:

- $\mathbb