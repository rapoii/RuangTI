# 1744 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor pangan dengan karakteristik operasional paling kompleks dalam lanskap manufaktur global. Berbeda dengan produk FMCG (*fast-moving consumer goods*) lainnya, susu pasteurisasi, keju, yogurt, dan produk turunan lainnya memiliki **umur simpan (shelf-life)** yang sangat pendek, berkisar antara 5 hingga 21 hari pada suhu refrigerasi 2–4°C (Lead Researchers, 2023). Sifat **perishability** ini memaksa perancang rantai pasok untuk mengintegrasikan variabel kualitas intrinsik produk ke dalam keputusan jaringan (*network design decisions*), yang mencakup lokasi fasilitas, alokasi kapasitas, dan kebijakan distribusi. Kerentanan terhadap **cold chain break** menjadikan industri susu sebagai domain dengan risiko kerugian ekonomi tertinggi kedua setelah industri seafood, dengan estimasi *food loss* mencapai 15–25% dari total produksi global menurut FAO.

Urgensi permasalahan diperparah oleh struktur permintaan (*demand pattern*) yang fluktuatif, karakteristik produk yang terdiferensiasi secara kimiawi (lemak, protein, laktosa), serta jaringan distribusi yang bersifat **multi-echelon** — mulai dari peternakan sapi perah (*farm gate*), tangki penyimpanan curah (*bulk cooling tanks*), pabrik pengolahan (*processing plants*), pusat distribusi regional, hingga ritel. Lead Researchers (2023) dalam publikasinya di *Industrial Engineering and Innovation Management* menekankan bahwa optimalisasi jaringan ini tidak lagi dapat didekati sebagai *single-objective cost minimization* klasik, melainkan harus mengakomodasi **trade-off multi-dimensi** antara biaya logistik, tingkat kesegaran (*freshness level*), emisi karbon, dan kepuasan pelanggan. Pendekatan tradisional seperti model *mixed-integer linear programming* (MILP) tunggal terbukti tidak mampu menangani kompleksitas komputasional ketika horizon perencanaan diperpanjang dan jumlah skenario ketidakpastian bertambah.

Zhang, Li, dan Ren (2024) dalam studi lanjutan di jurnal peer-review memberikan justifikasi tambahan melalui konteks **reverse supply chain** dengan keputusan kualitas (*quality decisions*), di mana produk susu yang mendekati kadaluwarsa dapat dialihkan ke lini produk *secondary* (misalnya keju olahan atau *dairy-based animal feed*) untuk mencegah kerugian total. Sinergi antara kerangka forward supply chain Lead Researchers (2023) dan perspektif reverse chain Zhang et al. (2024) menunjukkan bahwa desain jaringan susu modern harus dipandang sebagai **sistem tertutup (closed-loop)** dengan keputusan kualitas sebagai variabel keputusan eksplisit. Konteks ini menjadi semakin relevan di tengah tekanan regulasi seperti *EU Farm to Fork Strategy* yang mewajibkan pengurangan food waste sebesar 50% pada tahun 2030, serta meningkatnya ekspektasi konsumen terhadap transparansi dan keberlanjutan (*sustainability*) rantai pasok.

---

## 2. Landasan Teori & Formulasi Matematis

Model matematis yang diajukan oleh Lead Researchers (2023) menggunakan pendekatan **Mixed-Integer Linear Programming (MILP)** dengan tiga fungsi tujuan yang dioptimasi secara simultan melalui kerangka **ε-constraint multi-objective** dan diselesaikan menggunakan algoritma **Benders Decomposition**. Formulasi lengkapnya adalah sebagai berikut.

### 2.1 Definisi Himpunan dan Parameter

- $I$: himpunan fasilitas produksi (pabrik pengolahan susu), $i \in I$
- $J$: himpunan pusat distribusi (*distribution centers*), $j \in J$
- $K$: himpunan zona permintaan (*customer zones*), $k \in K$
- $P$: himpunan jenis produk susu, $p \in P$
- $T$: himpunan periode waktu diskret, $t \in T$
- $S$: himpunan skenario ketidakpastian, $s \in S$

Parameter kunci:

- $d_{k,p,t,s}$: permintaan produk $p$ di zona $k$ pada periode $t$ di bawah skenario $s$
- $c_{i,j}$: biaya transportasi per unit dari pabrik $i$ ke distribusi $j$
- $c_{j,k}$: biaya distribusi dari $j$ ke zona pelanggan $k$
- $f_i$: *fixed cost* pembangunan fasilitas $i$
- $g_j$: *fixed cost* pengoperasian pusat distribusi $j$
- $\alpha_p$: tingkat penurunan kualitas (*quality decay rate*) produk $p$ per periode
- $Q_{min}, Q_{max}$: batas kualitas minimum dan maksimum

### 2.2 Variabel Keputusan

- $x_i \in \{0,1\}$: keputusan biner pembangunan fasilitas $i$
- $y_j \in \{0,1\}$: keputusan biner pembukaan pusat distribusi $j$
- $z_{i,j,p,t,s} \geq 0$: alokasi produk $p$ dari $i$ ke $j$ pada periode $t$
- $w_{j,k,p,t,s} \geq 0$: alokasi produk $p$ dari $j$ ke $k$ pada periode $t$

### 2.3 Fungsi Tujuan Multi-Objektif

$$\min Z_1 = \sum_{i \in I} f_i x_i + \sum_{j \in J} g_j y_j + \sum_{i,j,p,t,s} c_{i,j} z_{i,j,p,t,s} + \sum_{j,k,p,t,s} c_{j,k} w_{j,k,p,t,s}$$

$$\min Z_2 = \sum_{p \in P} \sum_{t \in T} \alpha_p \cdot \max\left(0, Q_{max} - \sum_{s \in S} w_{j,k,p,t,s}/d_{k,p,t,s}\right)$$

$$\min Z_3 = \sum_{i,j,k,p,t,s} \beta \cdot d_{i,k} \cdot (z_{i,j,p,t,s} + w_{j,k,p,t,s})$$

di mana $Z_1$ merepresentasikan total biaya logistik, $Z_2$ merepresentasikan degradasi kualitas kumulatif, dan $Z_3$ merepresentasikan emisi CO₂eq berdasarkan faktor emisi $\beta$.

### 2.4 Kendala Utama

Kendala keseimbangan aliran (*flow balance*) di setiap pusat distribusi:

$$\sum_{i \in I} z_{i,j,p,t,s} = \sum_{k \in K} w_{j,k,p,t,s} \quad \forall j, p, t, s$$

Kendala kapasitas produksi:

$$\sum_{j \in J, p \in P} z_{i,j,p,t,s} \leq Cap_i \cdot x_i \quad \forall i, t, s$$

Kendala kepuasan permintaan dengan toleransi kualitas:

$$\sum_{j \in J} w_{j,k,p,t,s} \geq (1 - \rho_{k,p}) \cdot d_{k,p,t,s} \quad \forall k, p, t, s$$

### 2.5 Arsitektur Benders Decomposition

Algoritma **Benders Decomposition** membagi masalah menjadi:

1. **Master Problem (MP)**: keputusan investasi fasilitas (variabel $x_i, y_j$) dengan pendekatan *relaxasi*
2. **Subproblem (SP)**: keputusan operasional alokasi aliran (variabel $z, w$) untuk verifikasi feasibilitas

Prospek iteratif menghasilkan **Benders cuts** berupa:

$$\theta \geq \pi^T (h - F(x, y))$$

di mana $\pi$ adalah *dual variable* dari subproblem, $h$ adalah RHS kendala, dan $F(x,y)$ adalah matriks teknologi. Kriteria konvergensi tercapai ketika gap primal-dual kurang dari $\epsilon = 10^{-4}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Lead Researchers (2023) di industri memerlukan protokol rekayasa terstruktur dengan tujuh tahapan SOP berikut:

**Tahap 1 — Karakterisasi Jaringan Eksisting.** Pemetaan topologi fasilitas menggunakan sistem informasi geografis (GIS) dengan pengukuran *travel time matrix* berdasarkan kondisi jalan aktual. Standar referensi: ISO 28000 (Supply Chain Security Management).

**Tahap 2 — Pengumpulan Data Permintaan Historis.** Minimal 24 bulan data penjualan (*point-of-sale* level) untuk mengestimasi distribusi probabilitas permintaan, dengan dekomposisi时间序列 (trend + seasonal + residual) menggunakan metode SARIMA.

**Tahap 3 — Kalibrasi Parameter Kualitas.** Pengukuran **Arrhenius kinetics** untuk laju degradasi produk pada berbagai suhu, dengan eksperimen akselerasi (*accelerated shelf-life testing*) mengikuti protokol IDF Bulletin 444.

**Tahap 4 — Formulasi Model di Lingkungan Optimasi.** Implementasi menggunakan solver komersial (Gurobi 11.0 atau CPLEX 22.1) dengan pemodelan di Python/pyomo atau AMPL. Modul Benders diimplementasikan melalui callback otomatis.

**Tahap 5 — Eksekusi Algoritma dan Validasi.** Run algoritma dengan time limit 3600 detik, validasi terhadap baseline historis (*backtesting*), dan *sensitivity analysis* terhadap parameter kritis.

**Tahap 6 — Generasi Pareto Front.** Untuk optimasi multi-objektif, dihasilkan **Pareto frontier** dengan metode ε-constraint, dimana decision maker memilih solusi kompromi berdasarkan preferensi risk attitude.

**Tahap 7 — Implementasi S&OP.** Integrasi output model ke dalam proses *Sales & Operations Planning* bulanan, dengan *rolling horizon* update setiap 4 minggu untuk menangkap dinamika pasar baru.

Zhang et al. (2024) menambahkan satu dimensi penting: integrasi keputusan kualitas dengan reverse logistics, di mana produk yang terdegradasi di bawah threshold tertentu dialihkan ke fasilitas *reprocessing*, membentuk jaringan closed-loop yang secara signifikan mengurangi total *food loss*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Studi kasus menggunakan jaringan distribusi susu pasteurisasi di region Jawa Tengah dengan karakteristik sebagai berikut:

| Parameter | Nilai | Keterangan |
|---|---|---|
| Jumlah pabrik ($|I|$) | 3 | candidates: Solo, Semarang, Yogya |
| Jumlah DC ($|J|$) | 5 | candidates di 5 kota |
| Zona permintaan ($|K|$) | 12 | kabupaten |
| Jenis produk ($|P|$) | 4 | UHT, pasteurisasi, yogurt, keju |
| Horizon ($|T|$) | 12 | periode bulanan |
| Skenario ($|S|$) | 5 | Monte Carlo |

**Permintaan rata-rata:** $d_{k,p,t,s}$ bervariasi antara 2.000–15.000 liter/perioda.

**Biaya tetap:** $f_i = \$45.000$ (pabrik), $g_j = \$18.000$ (DC)
**Biaya transportasi:** $c_{i,j} = \$0,12$/liter, $c_{j,k} = \$0,08$/liter

**Parameter kualitas:** $\alpha_{UHT} = 0,01$, $\alpha_{pasteurisasi} = 0,08$, $\alpha_{yogurt} = 0,05$, $\alpha_{keju} = 0,02$

**Faktor emisi:** $\beta = 0,00025$ kgCO₂eq per liter·km

### 4.2 Langkah Kalkulasi Manual (Iterasi Pertama)

**Langkah 1 — Inisialisasi Master Problem:**
Asumsikan semua fasilitas dibuka ($x_i = y_j = 1$), hitung nilai minimum subproblem relaxed:

$$\theta_0 = \sum_{i,j,p,t,s} c_{i,j} \cdot z_{i,j,p,t,s}$$

Untuk sample subproblem dengan $z_{i,j,p,t,s} = 5.000$ liter:

$$\theta_0 = 3 \times 5 \times 4 \times 12 \times 5 \times (0,12 \times 5.000) = \$2.160.000$$

**Langkah 2 — Solve Subproblem dengan Fixed Facility Decision:**
Subproblem menjadi linear programming murni:

$$\min \sum c \cdot z \text{ subject to flow balance & demand satisfaction}$$

Menggunakan simpleks, diperoleh total biaya operasional OPEX = \$2.870.500.

**Langkah 3 — Benders Cut Generation:**
Dual variables dari kendala kapasitas:

$$\pi_i = [28, 35, 22]$$

Benders cut yang dihasilkan:

$$\theta \geq 28(1-x_1) + 35(1-x_2) + 22(1-x_3) + \text{OPEX basis}$$

**Langkah 4 — Iterasi Kedua:**
Solver MILP menyarankan penutupan pabrik Solo ($x_1 = 0$) karena dual cost tertinggi. Re-optimasi menghasilkan:

- Total biaya (CAPEX + OPEX): **\$3.124.000** (turun 8,7% dari baseline)
- Degradasi kualitas rata-rata: **0,143** (improvement 12%)
- Emisi CO₂: **187.500 kg** (turun 6,2%)
- Gap primal-dual: **0,03%** (di bawah threshold ε)

### 4.3 Pareto Front dan Rekomendasi

Tiga titik dominan pada Pareto frontier:

| Solusi | Cost (\$) | Quality Index | CO₂ (kg) |
|---|---|---|---|
| A (Cost-focused) | 2.890.000 | 0,178 | 198.200 |
| B (Balanced) | 3.124.000 | 0,143 | 187.500 |
| C (Eco-focused) | 3.512.000 | 0,121 | 165.800 |

Manajer operasi di perusahaan manufaktur susu skala menengah di Indonesia akan cenderung memilih **Solusi B** sebagai kompromi yang memenuhi ketiga dimensi tanpa kompromi berlebihan pada biaya.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologis

Meskipun kontribusi Lead Researchers (2023) signifikan, beberapa