# 2949 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) Baterai Pensiun: Optimalisasi Echelon Utilization, Remanufacturing, dan Daur Ulang

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Research on Closed-loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Massimiliano Caramia, Emanuele Pizzari (2023). *Supply Chain Analytics*. DOI: [https://doi.org/10.1016/j.sca.2023.100020](https://doi.org/10.1016/j.sca.2023.100020)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan eksponensial pasar kendaraan listrik (EV) global telah menciptakan tantangan industri yang belum pernah terjadi sebelumnya dalam pengelolaan akhir siklus hidup baterai lithium-ion (LIB). Berdasarkan proyeksi International Energy Agency (IEA), lebih dari 2 juta ton baterai EV akan mencapai end-of-life (EOL) secara global pada tahun 2030, menjadikan pengelolaan baterai pensiun sebagai salah satu masalah rantai pasok paling kritis di abad ke-21. JIANG Lin dan TANG Lidan (2025) dalam proceeding ICLSE 2024 menyoroti bahwa keputusan strategis terkait *echelon utilization* (pemanfaatan bertingkat/cascaded) versus *remanufacturing* dan *recycling* harus diintegrasikan ke dalam arsitektur rantai pasok tertutup (CLSC) yang kohesif.

Echelon utilization merujuk pada penggunaan baterai pensiun pada aplikasi *second-life* yang tuntutan dayanya lebih rendah (misalnya penyimpanan energi stasioner grid, telekomunikasi, forklift listrik, atau lampu jalan pintar) sebelum akhirnya didaur ulang. Strategi ini memperpanjang umur útil baterai hingga 5–10 tahun tambahan, menunda kebutuhan daur ulang yang intensif energi, sekaligus menghasilkan nilai ekonomi residual yang signifikan (diperkirakan 30–60% dari nilai baterai baru).

Sementara itu, Caramia dan Pizzari (2023) dalam *Supply Chain Analytics* memperkenalkan dimensi regulasi lingkungan melalui model *cap-and-trade* bi-objektif, di mana perusahaan tidak hanya mengejar minimalisasi biaya tetapi juga kepatuhan terhadap plafon emisi karbon dengan mekanisme perdagangan kredit karbon. Integrasi kedua perspektif ini—optimalisasi keputusan echelon/remanufacturing/recycling dan mekanisme pasar karbon—mencerminkan kompleksitas nyata yang dihadapi OEM baterai global seperti CATL, BYD, LG Energy Solution, dan Tesla yang harus menavigasi antara profitabilitas, regulasi lingkungan, dan tanggung jawab extended producer responsibility (EPR).

Urgensi penelitian ini diperkuat oleh kebijakan Uni Eropa melalui *EU Battery Regulation 2023/1542* yang mewajibkan tingkat daurulang material tertentu (90% untuk kobalt, tembaga, nikel; 50% untuk litium pada 2027), serta kebijakan similar di Tiongkok dan California. Tanpa kerangka keputusan kuantitatif yang robust, perusahaan menghadapi risiko *stranded asset* berupa inventori baterai pensiun yang tidak termonetisasi dengan optimal, ditambah penalti regulasi yang menurunkan margin operasional hingga 8–15%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Multi-Echelon

Model CLSC yang dirumuskan mengintegrasikan empat lapisan keputusan: **(i)** lokasi dan kapasitas fasilitas pengumpulan (collection centers), **(ii)** stasiun pengujian dan pemilahan baterai (testing & sorting facilities), **(iii)** unit remanufacturing dan echelon utilization, serta **(iv)** fasilitas daur ulang material (recycling plants). Aliran material bersifat bifasial: *forward flow* (produsen → konsumen) dan *reverse flow* (konsumen → collection → processing).

### 2.2 Formulasi Mixed-Integer Linear Programming (MILP) Bi-Objektif

**Himpunan dan Indeks:**
- $i \in I$: himpunan node fasilitas (collection, testing, remanufacturing, recycling, second-life application)
- $j \in J$: himpunan zona permintaan (grid storage, telecom, low-speed EV, dll.)
- $k \in K = \{1, 2, 3\}$: tipe aliran—echelon (k=1), remanufacturing (k=2), recycling (k=3)
- $s \in S$: state of health (SoH) baterai, $s \in \{A\ (80-100\%), B\ (60-80\%), C\ (<60\%)\}$

**Parameter skalar:**
- $c_{ij}^{k}$: biaya transportasi per unit baterai dari $i$ ke $j$ untuk tipe $k$
- $p_i$: kapasitas pemrosesan fasilitas $i$ (unit/tahun)
- $d_j$: permintaan aplikasi second-life pada zona $j$
- $r_s$: harga jual baterai remanufacturing sesuai grade $s$
- $\pi^{rec}$: revenue dari material hasil recycling (Li, Co, Ni, Cu)
- $\alpha_i$: biaya investasi fasilitas $i$
- $e_{ij}^{k}$: emisi CO₂e per unit baterai untuk tipe aliran $k$
- $C^{cap}$: plafon emisi karbon (ton CO₂e/tahun)
- $p^{CO_2}$: harga kredit karbon ($/ton)

**Variabel keputusan:**
- $x_{ij}^{k} \in \mathbb{Z}_{\geq 0}$: jumlah baterai tipe $k$ yang dikirimkan dari $i$ ke $j$
- $y_{ij}^{ks} \in \{0,1\}$: 1 jika baterai grade $s$ dialokasikan ke jalur $k$ antara $i$ dan $j$
- $z_i \in \{0,1\}$: 1 jika fasilitas $i$ dibuka
- $\delta^{buy}, \delta^{sell} \in \mathbb{R}_{\geq 0}$: kuantitas kredit karbon yang dibeli/dijual

**Fungsi Objektif 1 — Minimalisasi Total Biaya Rantai Pasok:**

$$\min Z_1 = \sum_{i,j,k,s} c_{ij}^{k} \cdot x_{ij}^{k} + \sum_{i} \alpha_i \cdot z_i + p^{CO_2} \cdot (\delta^{buy} - \delta^{sell}) - \sum_{j,s} r_s \cdot x_{ij=rem}^{2s} - \pi^{rec} \cdot \sum_{i} x_{i \to rec}^{3}$$

**Fungsi Objektif 2 — Minimalisasi Jejak Karbon:**

$$\min Z_2 = \sum_{i,j,k} e_{ij}^{k} \cdot x_{ij}^{k}$$

**Konstrain utama:**

$$\sum_{k} x_{ij}^{k} \leq p_i \cdot z_i \quad \forall i \in I \quad \text{(kapasitas fasilitas)}$$

$$\sum_{i} x_{ij}^{1s} \geq d_j \quad \forall j \in J \quad \text{(pemenuhan permintaan second-life)}$$

$$Z_2 - C^{cap} = \delta^{buy} - \delta^{sell} \quad \text{(mekanisme cap-and-trade)}$$

$$\sum_{s} y_{ij}^{ks} = x_{ij}^{k} \quad \forall i,j,k \quad \text{(konsistensi alokasi grade)}$$

$$x_{ij}^{1} \leq M \cdot \sum_{s \in \{A,B\}} y_{ij}^{1s} \quad \text{(echelon hanya untuk SoH ≥ 60\%)}$$

$$x_{ij}^{2} \leq M \cdot y_{ij}^{2,A} \quad \text{(remanufacturing hanya untuk SoH grade A)}$$

Persamaan terakhir merefleksikan *technical feasibility*: baterai dengan SoH < 60% tidak layak untuk echelon utilization maupun remanufacturing, dan hanya dapat memasuki jalur daur ulang material.

### 2.3 Penyelesaian Bi-Objektif

Mengikuti pendekatan Caramia & Pizzari (2023), penyelesaian menggunakan $\varepsilon$-constraint method atau NSGA-II (Non-dominated Sorting Genetic Algorithm II) untuk menghasilkan *Pareto front* yang menunjukkan trade-off antara biaya dan emisi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti kerangka **D4R (Design-Disassemble-Disposition-Remanufacture)** dengan tahapan:

**Tahap 1 — Profiling & Pengumpulan Baterai Pensiun.** OEM atau *third-party logistics* (3PL) membangun *take-back network* dengan incentive pricing ($/kWh) untuk memastikan tingkat pengembalian ≥ 75% sesuai target EPR Eropa.

**Tahap 2 — Diagnostic & State-of-Health Assessment.** Setiap baterai melalui pengujian electrochemical impedance spectroscopy (EIS), capacity testing (C/3 discharge), dan visual inspection. Output: klasifikasi ke Grade A/B/C.

**Tahap 3 — Decision Routing (Optimization Engine).** Sistem menjalankan MILP bi-objektif dengan input data real-time untuk menentukan alokasi optimal setiap batch baterai. *Decision rules* yang dihasilkan:

| SoH Grade | Probabilitas Echelon | Probabilitas Remanufacturing | Probabilitas Recycling |
|-----------|---------------------|------------------------------|------------------------|
| A (80–100%) | 0.40 | 0.55 | 0.05 |
| B (60–80%) | 0.70 | 0.10 | 0.20 |
| C (<60%) | 0.00 | 0.00 | 1.00 |

**Tahap 4 — Processing & Quality Assurance.** Modul remanufacturing mengikuti standar **GB/T 34014-2017** (Tiongkok) atau **IEC 62933-2-1** untuk aplikasi second-life, termasuk *cell balancing*, *module replacement*, dan *safety certification*.

**Tahap 5 — Carbon Accounting & Trading.** Jejak karbon dihitung mengikuti GHG Protocol Scope 3, kemudian offset melalui pasar EU Emissions Trading System (ETS) atau pasar sukarela (Verra, Gold Standard).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Seorang OEM baterai di Asia Tenggara mengelola pensiun 50.000 unit baterai EV/tahun (rata-rata 60 kWh per unit, total 3 GWh), dengan komposisi SoH: 35% Grade A, 45% Grade B, 20% Grade C.

**Parameter input:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Biaya transportasi rata-rata $c_{ij}^{k}$ | 18 | $/baterai |
| Kapasitas fasilitas remanufacturing $p_{rem}$ | 20.000 | unit/tahun |
| Permintaan second-life (grid storage) $d_j$ | 25.000 | unit/tahun |
| Revenue remanufacturing grade A ($r_A$) | 2.400 | $/unit |
| Revenue recycling material $\pi^{rec}$ | 850 | $/unit |
| Emisi echelon $e^{1}$ | 45 | kg CO₂e/unit |
| Emisi remanufacturing $e^{2}$ | 120