# 1787 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatis dari paradigma *monolithic System-on-Chip* (SoC) menuju arsitektur *disaggregated chiplet* dan *three-dimensional integrated circuits* (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: (1) melonjaknya biaya *mask set* untuk node teknologi sub-3 nm yang telah menembus ambang USD 50 juta per desain (Roze & Gerber, 2026), (2) turunnya *yield* wafer monolitik seiring meningkatnya area die — sebuah fenomena yang secara empiris dijelaskan oleh model hasil Murphy $Y = \left(\frac{1-e^{-D_0 A}}{D_0 A}\right)^2$, dan (3) permintaan *bandwidth* memori yang berlipat ganda setiap dua tahun untuk mengakomodasi workload *high-performance computing* (HPC), *artificial intelligence* (AI), dan *machine learning* (Lau, 2023).

Roze dan Gerber (2026) dalam makalahnya yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) mengidentifikasi bahwa keterbatasan utama dalam adopsi chiplet bukan terletak pada teknologi fabrikasi, melainkan pada fragmentasi *toolchain* EDA (*Electronic Design Automation*) yang masih dirancang dengan asumsi die monolitik. Mereka menegaskan perlunya arsitektur EDA *unified* yang mampu menangani ko-optimasi *floorplanning*, *signal integrity*, *power integrity*, *thermal analysis*, dan verifikasi *Design-for-Test* (DFT) secara simultan untuk multi-die. Studi ini menjadi krusial karena tanpa orkestrasi EDA yang kohesif, *time-to-market* untuk desain heterogen akan bertambah 30–40% (Roze & Gerber, 2026).

Sementara itu, Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* menekankan bahwa *Cu-Cu hybrid bonding* — yang merealisasikan interkoneksi vertikal dengan pitch di bawah 10 μm melalui ikatan termo-kompresi pada suhu 300–400°C — merupakan *enabling technology* bagi 3D-IC. Adopsi teknologi ini memerlukan disiplin proses yang ketat pada parameter-parameter seperti *surface roughness* (Ra < 0,5 nm), keselarasan (*misalignment* < 200 nm), dan profil *annealing*. Dari perspektif teknik industri, integrasi dua pilar ini — EDA dan proses packaging — membentuk *value chain* yang harus dikelola secara *end-to-end*, mulai dari arsitektur produk, desain fisik, fabrikasi, hingga integrasi sistem akhir.

Urgensi ekonominya juga nyata: pasar *heterogeneous integration* diproyeksikan mencapai USD 96 miliar pada 2030 dengan CAGR 9,8%, menjadikan penguasaan solusi EDA-native chiplet sebagai *competitive advantage* strategis bagi *fabless*, *foundry*, dan *OSAT* (Outsourced Semiconductor Assembly and Test).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal untuk Stack 3D-IC

Resistansi termal konduksi pada *Through-Silicon Via* (TSV) dan *micro-bump* Cu-Cu mengikuti hukum Fourier satu dimensi:

$$R_{th} = \sum_{i=1}^{n} \frac{L_i}{k_i \cdot A_i}$$

di mana $L_i$ adalah ketebalan lapisan ke-$i$, $k_i$ konduktivitas termal material, dan $A_i$ luas penampang efektif. Untuk stack 3D-IC tipikal dengan 4 die aktif, total *thermal resistance* dapat dimodelkan sebagai jaringan *lumped RC*:

$$\theta_{JA} = \frac{1}{\sum_{j=1}^{m} \frac{1}{\theta_{j}}}$$

di mana $\theta_{j}$ merepresentasikan jalur konduksi paralel menuju *heat sink* (Roze & Gerber, 2026).

### 2.2 Model Integritas Sinyal untuk Interkoneksi Pitch Sub-10 μm

Untuk *hybrid bonding* dengan pitch $p$, *characteristic impedance* dari pasangan diferensial dihitung melalui formula per-unit-length:

$$Z_0 = \frac{83}{C_{0,eff}} \sqrt{\varepsilon_{r,eff}} \quad [\Omega]$$

dengan $C_{0,eff}$ kapasitansi per-unit-length (pF/in) dan $\varepsilon_{r,eff}$ permitivitas efektif. *Crosstalk* antara *lane* yang berdekatan dimodelkan dengan koefisien Near-End Crosstalk (NEXT):

$$\text{NEXT}_{dB} = 20 \log_{10} \left| \frac{V_{NEXT}(f)}{V_{aggressor}(f)} \right|$$

Lau (2023) menunjukkan bahwa pada pitch 6 μm, NEXT dapat ditekan di bawah −30 dB hanya jika *return loss* jalur transmisi dioptimasi dengan *pre-emphasis* dan *de-emphasis* pada *transmitter*.

### 2.3 Model Hasil (Yield) untuk Multi-Die Assembly

Untuk *known-good-die* (KGD) yang akan diintegrasikan, hasil sistem *k*-die mengikuti:

$$Y_{system} = \prod_{i=1}^{k} Y_i \cdot Y_{bonding}$$

di mana $Y_i$ adalah hasil die individual dan $Y_{bonding}$ adalah hasil proses *hybrid bonding* — yang untuk teknologi Cu-Cu modern berada di rentang 95–99,8% tergantung pada *throughput* dan kompleksitas (Lau, 2023).

### 2.4 Model Stress Termo-mekanis

Mismatch koefisien ekspansi termal (CTE) antara die Si ($α_{Si} \approx 2,6 \text{ ppm/°C}$) dan substrat organik ($α_{org} \approx 14 \text{ ppm/°C}$) menghasilkan regangan:

$$\varepsilon_{mismatch} = \Delta\alpha \cdot \Delta T$$

dan tegangan geser kritis pada界面 *bond*:

$$\sigma_{max} = \frac{E_{bond}}{1-\nu} \cdot \Delta\alpha \cdot \Delta T$$

dengan $E_{bond}$ modulus Young dan $\nu$ rasio Poisson. Roze dan Gerber (2026) menekankan bahwa simulasi *finite element analysis* (FEA) dari persamaan ini wajib tertanam dalam *toolchain* EDA modern.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Alur kerja EDA untuk desain chiplet dan 3D-IC mengikuti arsitektur *closed-loop* seperti yang distandarkan oleh IEEE 1838 dan JEDEC JESD22:

**Tahap 1 — Partitioning dan Architectural Planning:**
Definisikan *functional blocks* (CPU, GPU, IO, memori) dan tetapkan masing-masing pada die independen. Gunakan metrik *figure-of-merit*: biaya per transistor, *bandwidth* inter-die, dan *thermal envelope*.

**Tahap 2 — Floorplanning Multi-Die:**
Tetapkan lokasi die pada interposer atau *bridge die*. Optimasi dengan *objective function* gabungan:

$$\min_{x,y} \left( w_1 \sum L_{wire} + w_2 \sum R_{th} + w_3 \sum P_{dynamic} \right)$$

**Tahap 3 — Hybrid Bonding Interconnect Planning:**
Tentukan pitch, jumlah I/O, dan *redundancy*. Roze dan Gerber (2026) merekomendasikan aturan *design rule* (DRC) spesifik untuk *dishing*, *slip-off*, dan *micro-void* prevention.

**Tahap 4 — Multi-Physics Co-Simulation:**
Jalankan secara simultan: *static timing analysis* (STA), *power integrity*, *electromigration*, dan *thermal-mechanical stress* analysis.

**Tahap 5 — DFT dan Test Access Architecture (TAA):**
Implementasikan *IEEE 1687* (IJTAG) untuk *test access* port antar-die, dengan *wrapper* sesuai *IEEE 1838*.

**Tahap 6 — Tape-out dan Assembly Yield Forecasting:**
Hitung $Y_{system}$ menggunakan rumus pada Bagian 2.3 dan validasi dengan *Monte Carlo simulation* ≥ 10.000 iterasi.

SOP ini bersifat *iteratif*: setiap perubahan pada tahap 1–3 memicu *re-convergence* simulasi di tahap 4, yang merupakan inovasi utama yang dipaparkan Roze dan Gerber (2026) dibanding alur EDA konvensional sekuensial.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain 3D-IC HBM4-on-Logic untuk Akselerator AI

**Parameter Input (Sumber: Lau, 2023; Roze & Gerber, 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah die logika | 2 | buah |
| Jumlah die HBM (stacked) | 8 (4 stack × 2) | buah |
| Pitch TSV | 6 | μm |
| Pitch microbump Cu-Cu | 10 | μm |
| Konsumsi daya total | 350 | W |
| Ambient temperature | 45 | °C |
| Thermal conductivity Si | 148 | W/m·K |
| Ketebalan die logika | 750 | μm |
| Ketebalan die HBM | 50 | μm (setiap layer) |

**Langkah 1 — Perhitungan Resistansi Termal:**

Untuk satu TSV tunggal dengan diameter 5 μm:

$$R_{th,TSV} = \frac{L}{k \cdot A} = \frac{50 \times 10^{-6}}{148 \cdot \pi \cdot (2{,}5 \times 10^{-6})^2} = \frac{50 \times 10^{-6}}{148 \cdot 1{,}963 \times 10^{-11}} \approx 17{,}2 \text{ K/W}$$

**Langkah 2 — Parallel Thermal Network:**

Asumsikan 10.000 TSV paralel per die HBM memberikan jalur termal:

$$R_{th,array} = \frac{R_{th,TSV}}{N} = \frac{17{,}2}{10.000} = 0{,}00172 \text{ K/W}$$

**Langkah 3 — Estimasi Kenaikan Suhu Junction:**

$$\Delta T_{junction} = P_{die} \cdot R_{th,total}$$

Untuk $P_{die} = 175$ W (setengah dari total) dan $R_{th,total} = 0{,}15$ K/W (termasuk resistansi *heat spreader* dan *TIM*):

$$\Delta T = 175 \times 0{,}15 = 26{,}25 \text{ °C}$$

$$T_{junction} = T_{ambient} + \Delta T = 45 + 26{,}25 = 71{,}25 \text{ °C}$$

**Langkah 4 — Perhitungan Yield Sistem:**

Dengan asumsi $Y_{die} = 0{,}92$ per die logika dan 4 stack HBM, serta $Y_{bonding} = 0{,}995$:

$$Y_{system} = (0{,}92)^2 \cdot (0{,}90)^4 \cdot (0{,}995)^2 = 0{,}8464 \cdot 0{,}6561 \cdot 0{,}9900 \approx 0{,}5497$$

**Interpretasi Manajerial:** Hasil sistem hanya 55%. Untuk mencapai target yield ≥ 80%, diperlukan strategi *known-good-die* yang lebih ketat (menaikkan $Y_{die}$ menjadi 0,96) atau arsitektur *redundant lane* pada interkoneksi. Perhitungan ini menunjukkan bahwa keputusan EDA awal tentang pitch dan jumlah TSV berdampak langsung pada *unit economics* dan waktu *ramp-up* produksi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologi