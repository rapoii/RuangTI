# 2352 — Optimasi Rantai Pasok Multi-Objektif dengan Dekomposisi Benders: Framework untuk Jaringan Produk Susu dan Reverse Supply Chain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition*
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir. Produk susu merupakan kategori *perishable goods* dengan karakteristik biologis yang unik: masa simpan (*shelf life*) yang pendek, degradasi kualitas yang sensitif terhadap waktu dan suhu, serta rantai dingin (*cold chain*) yang membutuhkan investasi modal signifikan. Menurut Lead Researchers (2023) dalam paper yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), perancangan jaringan rantai pasok susu tidak dapat dipisahkan dari keputusan operasional seperti alokasi produksi, rute distribusi, dan manajemen inventaris, sehingga menghasilkan masalah optimasi *mixed-integer* berskala besar yang bersifat *non-convex*.

Urgensi utama yang mendasari penelitian ini adalah *trade-off* antara tiga dimensi keputusan yang saling bertentangan: minimasi total biaya logistik, maksimasi tingkat kesegaran produk yang dikirim ke konsumen, dan minimasi emisi karbon dari operasional armada distribusi. Dalam konteks Indonesia, konsumsi susu per kapita masih di bawah rata-rata Asia Tenggara, namun permintaan produk olahan (keju, yogurt, UHT) tumbuh 8–12% per tahun, sehingga perusahaan menghadapi tekanan untuk memperluas jaringan distribusi tanpa mengorbankan kualitas. Kerangka kerja multi-objektif (*multi-objective optimization*) dengan Dekomposisi Benders menjadi pendekatan yang relevan karena mampu mendekomposisi masalah MINLP (*Mixed-Integer Nonlinear Programming*) menjadi submasalah yang lebih tractable.

Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menunjukkan bahwa pendekatan serupa juga berlaku pada *reverse supply chain*, di mana keputusan kualitas (*quality decisions*) menjadi variabel kopling antara desain jaringan hulu dan operasi回收. Kedua paper ini memberikan fondasi bagi rekayasawan industri untuk menangani masalah optimasi rantai pasok berskala nyata dengan dimensi keputusan yang tinggi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif untuk Jaringan Produk Susu

Model jaringan rantai pasok susu Lead Researchers (2023) memformulasikan tiga fungsi objektif yang dioptimasi secara simultan:

$$\min \; F = \left[ f_1(x,y), \; f_2(x,y), \; f_3(x,y) \right]^T$$

di mana:

- $f_1 = \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} c_{jk} y_{jk}$ (total biaya distribusi)
- $f_2 = \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} \alpha \cdot t_{ijk} \cdot q_{ijk}$ (degradasi kesegaran)
- $f_3 = \sum_{(i,j) \in A} \beta \cdot d_{ij} \cdot E_{ij}$ (emisi karbon dari transportasi)

dengan himpunan keputusan biner $x_{ij} \in \{0,1\}$ untuk pembukaan fasilitas, dan variabel kontinu $y_{jk} \geq 0$ untuk alur distribusi.

### 2.2 Prinsip Dekomposisi Benders

Untuk masalah dengan struktur *block-angular*, Dekomposisi Benders memisahkan variabel menjadi dua kelompok: variabel *first-stage* (desain jaringan $x$) dan variabel *second-stage* (alokasi operasional $y$). Master Problem (MP) yang diselesaikan secara iteratif adalah:

$$\min_{x \in X, \, \theta \geq 0} \; c^T x + \theta$$

$$\text{subject to:} \quad Ax \geq b, \quad \theta \geq \pi^T(h - Tx) \; \forall \pi \in \Pi$$

di mana $\theta$ adalah variabel skalar yang merepresentasikan nilai optimal subproblem, dan $\pi$ adalah dual variable dari subproblem. Subproblem untuk fixed $\bar{x}$ adalah:

$$\min_{y \geq 0} \; q^T y \quad \text{s.t.} \quad Wy \geq h - T\bar{x}$$

Dual subproblem menghasilkan *Benders optimality cut*:

$$\theta \geq (h - T\bar{x})^T \pi^* \quad \forall \pi^* \in \arg\max \{u^T(h - T\bar{x}) : u \in U\}$$

### 2.3 Ekstensi untuk Reverse Supply Chain dengan Keputusan Kualitas

Zhang, Li, dan Ren (2024) memperluas kerangka Benders dengan menambahkan variabel keputusan kualitas $z_{r} \in [0,1]$ yang merepresentasikan tingkat kualitas produk yang dikembalikan pada tahap *recovery*. Fungsi objektif tambahan mencakup biaya inspeksi:

$$f_4 = \sum_{r \in R} \gamma_r z_r$$

dengan kendala kualitas:

$$\sum_{r \in R} z_r \cdot q_r^{\min} \geq Q^{target}$$

Mekanisme *quality-driven cuts* ditambahkan untuk mempercepat konvergensi algoritma.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka Benders Multi-Objektif untuk jaringan produk susu mengikuti protokol tujuh-tahap berikut:

**Tahap 1 — Karakterisasi Data Industri.** Pengumpulan data primer: kapasitas produksi fasilitas $C_i$, permintaan pasar $D_k$, biaya transportasi $c_{ij}$, jarak $d_{ij}$, laju degradasi kesegaran $\alpha$, dan faktor emisi $\beta$. Standar ISO 22005:2007 tentang *traceability in the feed and food chain* menjadi acuan dokumentasi.

**Tahap 2 — Formulasi Model Matematis.** Pembangunan model MINLP dengan perangkat lunak optimasi (GAMS, AMPL, atau Pyomo). Validasi struktur *block-angular* melalui identifikasi variabel kopling.

**Tahap 3 — Generasi Pareto Front.** Penerapan metode $\varepsilon$-constraint: konversi dua objektif menjadi kendala, optimasi satu objektif tersisa. Langkah iteratif menghasilkan $\varepsilon \in \{\varepsilon_{\min}, \varepsilon_{\min} + \Delta, ..., \varepsilon_{\max}\}$.

**Tahap 4 — Inisialisasi Master Problem.** Penyelesaian MP relaxed dengan *feasibility cuts* awal. Penentuan lower bound $LB^{(0)}$.

**Tahap 5 — Iterasi Benders.** Penyelesaian subproblem untuk $\bar{x}^{(k)}$, ekstraksi dual multiplier $\pi^{*(k)}$, penambahan optimality cut ke MP. Update lower bound $LB^{(k+1)} = \max(LB^{(k)}, c^T\bar{x} + \theta^{(k)})$ dan upper bound $UB^{(k+1)} = \min(UB^{(k)}, c^T\bar{x} + SP^*)$.

**Tahap 6 — Konvergensi.** Algoritma berhenti saat $|UB^{(k)} - LB^{(k)}| / |LB^{(k)}| \leq \epsilon$ dengan $\epsilon = 10^{-4}$.

**Tahap 7 — Decision Support System (DSS).** Visualisasi Pareto front kepada pengambil keputusan melalui *trade-off analysis dashboard*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Pertimbangkan jaringan distribusi susu pasteurisasi di Pulau Jawa dengan parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah fasilitas produksi ($I$) | 3 | unit |
| Jumlah gudang regional ($J$) | 5 | unit |
| Jumlah zona permintaan ($K$) | 20 | zona |
| Permintaan harian rata-rata ($D_k$) | 1.500–4.000 | liter |
| Kapasitas produksi ($C_i$) | 25.000 | liter/hari |
| Biaya tetap pembukaan gudang | Rp 850.000.000 | /unit |
| Biaya distribusi ($c_{ij}$) | 350–720 | Rp/liter |
| Laju degradasi kesegaran ($\alpha$) | 0,018 | /jam |
| Faktor emisi ($\beta$) | 0,062 | kg CO₂/liter.km |

### 4.2 Perhitungan Step-by-Step

**Iterasi 0:** Master Problem relaxed dengan $x_{ij}=0,5$ untuk semua $i,j$ menghasilkan $LB^{(0)} = \text{Rp } 12,85 \text{ miliar}$.

**Subproblem Iterasi 1:** Dengan $\bar{x}$ dari MP, alokasi $y_{jk}$ optimal dihitung menggunakan simpleks dengan biaya operasional total $SP^* = \text{Rp } 9,42 \text{ miliar}$. Dual multiplier $\pi^{*(1)} = [0,23; 0,19; 0,15]^T$.

**Benders Cut #1:**
$$\theta \geq 0,23(h_1 - 1,8\bar{x}) + 0,19(h_2 - 2,1\bar{x}) + 0,15(h_3 - 1,5\bar{x})$$

**Iterasi 1:** MP dengan cut baru menghasilkan $\bar{x}^{(1)}$: gudang $j=2,4$ dibuka. $LB^{(1)} = \text{Rp } 22,08 \text{ miliar}$.

**Subproblem Iterasi 2:** $SP^* = \text{Rp } 9,78 \text{ miliar}$. Total $UB^{(1)} = \text{Rp } 22,08 \text{ miliar}$.

**Iterasi 4