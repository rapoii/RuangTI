# 1584 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dan Rantai Pasok Balik dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibanding rantai pasok produk manufaktur konvensional. Produk susu—terutama *fresh milk*, yogurt, dan keju lunak—memiliki karakteristik *short shelf life* (1–14 hari untuk produk segar dan 30–90 hari untuk keju olahan), memerlukan *cold chain* yang tidak terputus pada suhu 2–4°C, dan mengalami degradasi mutu yang sensitif terhadap waktu (*time-dependent quality decay*). Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menegaskan bahwa keputusan desain jaringan untuk produk susu tidak dapat dipisahkan dari keputusan operasional harian, sehingga memerlukan kerangka *multi-objective* yang menyeimbangkan biaya total, tingkat pemborosan (*wastage*), dan emisi karbon dari transportasi berpendingin.

Urgensi ekonominya nyata. FAO (2022) melaporkan bahwa sekitar 14% produk susu global terbuang sebelum sampai konsumen; di Indonesia, estimasi serupa mencapai 8–12% akibat kerusakan rantai dingin dan mismatch kapasitas produksi–distribusi. Kompleksitas bertambah ketika jaringan harus bersifat *multi-echelon* (peternakan → pabrik pengolahan → pusat distribusi → ritel) dan *multi-product* dengan umur simpan berbeda. Masalah ini secara natural diformulasikan sebagai *Mixed-Integer Linear Programming* (MILP) berskala besar, di mana variabel biner fasilitas bertemu dengan variabel kontinu aliran produk.

Untuk menyelesaikan skala ini, Lead Researchers (2023) mengusulkan *Benders Decomposition*—teknik dekomposisi Lagrange-relaxation yang memisahkan keputusan *strategic* (lokasi fasilitas, kapasitas) dari keputusan *operasional* (aliran, inventaris, penjadwalan produksi). Pendekatan ini secara paralel dikonfirmasi oleh Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) dalam konteks *reverse supply chain* dengan keputusan berbasis kualitas (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)), yang menunjukkan bahwa dekomposisi Benders efektif untuk memisahkan keputusan desain jaringan dari keputusan inspeksi mutu, grading, dan alokasi produk ke jalur *remanufacturing* versus *disposal*. Kedua paper ini, ketika digabungkan, memberikan cetak biru optimisasi rantai pasok modern yang tidak hanya mengejar efisiensi biaya tetapi juga keberlanjutan dan kualitas produk.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Set dan Parameter

Misalkan:
- $I$ = himpunan peternakan/supleir susu ($i \in I$)
- $J$ = himpunan kandidat pabrik pengolahan ($j \in J$)
- $K$ = himpunan kandidat pusat distribusi ($k \in K$)
- $L$ = himpunan zona pelanggan ritel ($l \in L$)
- $P$ = himpunan produk susu ($p \in P$), misalnya $\{p_1=\text{seg}, p_2=\text{yogurt}, p_3=\text{keju}\}$
- $T$ = himpunan periode waktu (hari), $t \in T$, $|T| = H$

Parameter kunci:
- $f_j$ = biaya tetap buka pabrik $j$ (Rp/unit/tahun)
- $g_k$ = biaya tetap buka DC $k$
- $c_{ijp}^T$ = biaya transportasi berpendingin $i \to j$ untuk produk $p$
- $\alpha_p$ = umur simpan produk $p$ (hari)
- $\beta_p \in (0,1]$ = faktor retensi mutu harian (misal $\beta_{seg}=0{,}92$)
- $d_{lpt}$ = permintaan deterministik di zona $l$ pada hari $t$
- $\text{Cap}_j$ = kapasitas harian pabrik $j$
- $Q_{0,p}$ = mutu awal produk $p$ saat keluar lini produksi

### 2.2 Formulasi MILP Master-Integrasi

Variabel keputusan:
- $x_j \in \{0,1\}$: buka pabrik $j$?
- $y_k \in \{0,1\}$: buka DC $k$?
- $q_{ijpt} \geq 0$: kuantitas aliran $i \to j$
- $w_{jkpt} \geq 0$: kuantitas aliran $j \to k$
- $z_{klpt} \geq 0$: kuantitas aliran $k \to l$
- $s_{jpt} \geq 0$: stok akhir periode di pabrik $j$
- $r_{kpt} \geq 0$: stok akhir periode di DC $k$

**Objektif 1 — Biaya Total:**

$$\min Z_1 = \sum_j f_j x_j + \sum_k g_k y_k + \sum_{i,j,p,t} c_{ijp}^T q_{ijpt} + \sum_{j,k,p,t} c_{jkp}^T w_{jkpt} + \sum_{k,l,p,t} c_{klp}^T z_{klpt} + \sum_{j,p,t} h_{jp} s_{jpt} + \sum_{k,p,t} h_{kp} r_{kpt} + \sum_{p,t} \text{Waste}_{p} \cdot W_{pt}$$

**Objektif 2 — Rata-rata Mutu Terkirim (maksimasi):**

$$\max Z_2 = \frac{\sum_{k,l,p,t} \beta_p^{T_{kl}} \cdot Q_{0,p} \cdot z_{klpt}}{\sum_{k,l,p,t} z_{klpt}}$$

di mana $T_{kl}$ adalah *lead time* efektif (transportasi + inventaris) dari pabrik ke konsumen melalui DC $k$. Masalah *multi-objective* diselesaikan dengan metode **$\varepsilon$-constraint**:

$$\min Z_1 \quad \text{s.t.} \quad Z_2 \geq \varepsilon, \; \text{dan约束 operasional berikut.}$$

### 2.3 Kendala Operasional

**Konservasi aliran di pabrik:**

$$\sum_i q_{ijpt} + s_{jp,t-1} = \sum_k w_{jkpt} + s_{jpt} + W_{pt}^{\text{prod}}, \quad \forall j,p,t$$

**Konservasi aliran di DC:**

$$\sum_j w_{jkpt} + r_{kp,t-1} = \sum_l z_{klpt} + r_{kpt} + W_{pt}^{\text{dc}}, \quad \forall k,p,t$$

**Kapasitas:**

$$\sum_p \sum_k w_{jkpt} \leq \text{Cap}_j \cdot x_j, \quad \sum_p \sum_l z_{klpt} \leq \text{Cap}_k \cdot y_k$$

**Demand fulfillment:**

$$\sum_k z_{klpt} \geq d_{lpt}, \quad \forall l,p,t$$

**Non-negativitas & biner:** $x_j, y_k \in \{0,1\}$; semua variabel aliran $\geq 0$.

### 2.4 Benders Decomposition

Masalah dipecah menjadi:

**(a) Master Problem (MP) — keputusan *strategic*:**

$$\min_{x,y,\theta} \; \sum_j f_j x_j + \sum_k g_k y_k + \theta$$

dengan *optimality cuts* berbentuk:

$$\theta \geq \eta_u - \sum_j \pi_j^u (x_j - x_j^u) - \sum_k \rho_k^u (y_k - y_k^u), \quad \forall u \in U^{\text{opt}}$$

**(b) Subproblem (SP) — keputusan *operational* given $x^*, y^*$:**

$$\min_{q,w,z,s,r} \; \text{biaya operasional}$$

Dual solusi SP menghasilkan $\pi^u, \rho^u$ sebagai *dual prices*