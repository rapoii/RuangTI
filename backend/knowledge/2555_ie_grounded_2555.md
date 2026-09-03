# 2555 — EDA Solution dan Rekayasa Proses Cu-Cu Hybrid Bonding untuk Integrasi Chiplet dan 3D-IC: Perspektif Teknik Industri Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Manufaktur Mikroelektronika Heterogen
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design; Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah menghadapi sebuah *inflection point* teknologi yang fundamental, di mana batas-batas fisik penskalaan node CMOS monolitik tradisional (semakin mahal dan semakin mendekati batas atomik) memaksa transisi paradigma menuju desain *heterogeneous integration* (HI) berbasis chiplet dan *three-dimensional integrated circuits* (3D-IC). Roze dan Gerber (2026) dalam paparannya di ICEP-HBS Symposium menegaskan bahwa kompleksitas desain chiplet modern—yang mengintegrasikan beberapa *die* heterogen dari berbagai proses fabrikasi, node teknologi, dan bahkan material semikonduktor yang berbeda (Si, SiGe, GaN, InP)—menuntut kapabilitas *Electronic Design Automation* (EDA) yang melampaui tool konvensional untuk sistem planar 2D. Kebutuhan ini muncul karena verifikasi *floorplan* 3D, analisis termal multi-die, validasi integritas sinyal *across-stack*, dan optimasi *power delivery network* tidak lagi dapat diselesaikan oleh pendekatan *flat* 2D. DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563).

Secara strategis, urgensi industri ini dipercepat oleh empat faktor utama. Pertama, *economics of scaling*: biaya desain masker (mask set) untuk node 3 nm dan 2 nm melonjak hingga di atas USD 500 juta per desain, sedangkan arsitektur chiplet memungkinkan re-use *intellectual property* (IP) dan amortisasi biaya NRE (Non-Recurring Engineering) lintas beberapa produk turunan. Kedua, urgensi performa: 3D-IC dengan *through-silicon via* (TSV) dan *hybrid bonding* mampu mengurangi panjang interkoneksi kritis hingga 100× dibanding wire-bond atau flip-chip BGA, sehingga menurunkan latensi dan konsumsi daya secara drastis. Ketiga, urgensi manufaktur: yield per wafer untuk reticle besar (*large-area die*) menurun secara superlinear dengan luas area, sehingga memecah satu *monolithic die* besar menjadi beberapa chiplet kecil yang *known-good-die* (KGD) dapat meningkatkan *effective yield* sistemik secara eksponensial. Keempat, urgensi pasar: segmen HPC (High-Performance Computing), AI accelerator, dan networking ASIC memimpin adopsi, dengan pasar 3D-IC diproyeksi menembus USD 40 miliar pada 2030.

Dalam konteks inilah, Lau (2023) menekankan bahwa *Cu-Cu hybrid bonding*—yakni proses *direct copper-to-copper bonding* pada suhu rendah (200–300 °C) dengan pitch interkoneksi sub-10 μm—telah muncul sebagai *enabling technology* utama untuk merealisasikan potensi penuh integrasi chiplet 3D. Berbeda dengan soldering berbasis microbumps (yang terbatas pada pitch ~40–50 μm), hybrid bonding memungkinkan kepadatan interkoneksi mencapai >10⁶/mm², dengan resistansi kontak yang mendekati resistansi kawat tembaga bulk. DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6). Tulisan ini akan membedah secara kuantitatif bagaimana EDA dan proses hybrid bonding saling mengunci (*co-design*) dalam rantai nilai manufaktur semikonduktor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Sistemik Multi-Chiplet

Yield total sistem chiplet yang terdiri dari $n$ chiplet individual yang diintegrasikan mengikuti hukum perkalian yield (Roze & Gerber, 2026):

$$Y_{system} = \prod_{i=1}^{n} Y_{chiplet,i} \cdot Y_{assembly}$$

di mana $Y_{chiplet,i}$ adalah yield masing-masing *die* sebelum integrasi dan $Y_{assembly}$ adalah yield proses *hybrid bonding* dan stacking. Untuk distribusi cacat acak (*Poisson defect model*), yield sebuah chiplet dengan luas efektif $A_i$ dapat dimodelkan sebagai:

$$Y_{chiplet,i} = e^{-D_0 \cdot A_i}$$

dengan $D_0$ adalah *defect density* (cacat per cm²). Model ini menjelaskan mengapa arsitektur chiplet *small-is-better*: memecah satu die 100 mm² menjadi 10 chiplet @ 10 mm² meningkatkan yield per chiplet secara dramatis, namun yield sistemik baru superior jika $Y_{assembly} \approx 1$.

### 2.2 Resistansi Listrik Interkoneksi Cu-Cu

Lau (2023) menurunkan persamaan resistansi sambungan hybrid bonded sebagai resistansi paralel dari $N$ *copper pillar* dalam area bonding $A_b$:

$$R_{contact} = \frac{\rho_{Cu} \cdot h_{pillar}}{N \cdot A_{pillar}}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m (resistivitas tembaga), $h_{pillar}$ tinggi pillar Cu (umumnya 3–10 μm), dan $A_{pillar}$ luas penampang pillar per sambatan. Pada pitch $p$ dan diameter pillar $d$, berlaku:

$$A_{pillar} = \frac{\pi d^2}{4}, \quad N = \frac{A_b}{p^2}$$

Untuk pitch 6 μm dan diameter 4 μm pada area bonding 10 × 10 mm:

$$N = \frac{(10 \times 10^{-3})^2}{(6 \times 10^{-6})^2} = \frac{10^{-4}}{3.6 \times 10^{-11}} \approx 2.78 \times 10^{6} \text{ sambungan}$$

### 2.3 Thermal Resistance Stack 3D-IC

Manajemen termal merupakan *bottleneck* kritis dalam 3D-IC. Resistansi termal satu-dimensi dari *stack* $n$-lapis die:

$$R_{th} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff}}$$

di mana $t_i$ adalah ketebalan lapis ke-$i$, $k_i$ konduktivitas termal material (Si ≈ 148 W/m·K, Cu ≈ 400 W/m·K, dielektrik BEOL ≈ 1.4 W/m·K), dan $A_{eff}$ luas efektif heat spreading. Untuk arsitektur 3D dengan *thermal TSV*, kontribusi resistansi paralel TSV:

$$\frac{1}{R_{th,total}} = \frac{1}{R_{th,stack}} + \frac{N_{TSV}}{R_{th,TSV}}$$

### 2.4 Model Optimasi Multi-Obyektif EDA

Roze dan Gerber (2026) memformulasikan optimasi co-design 3D-IC sebagai masalah *Pareto-optimal* yang menyeimbangkan tiga objektif: **Area** ($A$), **Timing margin** ($T_{margin}$), dan **Thermal hot-spot** ($T_{max}$):

$$\min_{\mathbf{x}} \left\{ A(\mathbf{x}), -T_{margin}(\mathbf{x}), T_{max}(\mathbf{x}) \right\}$$

di mana $\mathbf{x}$ merepresentasikan variabel desain: *partitioning*, *floorplanning*, *TSV placement*, dan *bonding pitch*. Algoritma optimasi yang digunakan umumnya berbasis *reinforcement learning* atau *genetic algorithm* dengan kompleksitas $O(n \log n)$ hingga $O(n^2)$ per iterasi untuk $n$ chiplet.

### 2.5 Kriteria Proses Bonding Thermocompression

Lau (2023) menyatakan bahwa kekuatan sambungan Cu-Cu pada interface hasil *thermocompression bonding* (TCB) dapat dimodelkan sebagai fungsi Arhenius-like terhadap parameter proses:

$$\sigma_{bond} = \sigma_{0} \cdot \exp\left(-\frac{E_a}{R \cdot T}\right) \cdot f(P, t, R_a)$$

dengan $E_a$ energi aktivasi *diffusion bonding* (≈ 0.6–0.8 eV untuk sistem Cu-Cu), $T$ suhu absolut, $P$ tekanan bonding (umumnya 50–150 MPa), $t$ waktu dwell (umumnya 30–600 detik), dan $R_a$ kekasaran permukaan (target < 0.5 nm RMS untuk hybrid bonding). Kontrol parameter ini menjadi inti SOP manufaktur.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri terhadap *design-through-manufacturing* flow untuk chiplet + hybrid bonding mengikuti SOP berlapis yang disintesis dari referensi Roze & Gerber (2026) dan Lau (2023). Tahapan-tahapan utamanya:

**Tahap 1 — System-Level Architectural Partitioning (EDA Front-End).**
Arsitek sistem menentukan *function block* mana yang dipisahkan menjadi chiplet berdasarkan tiga kriteria: (a) efisiensi area, (b) isolasi teknologi (misalnya chiplet analog/RF pada node matang, chiplet logika pada node mutakhir), dan (c) *yield economics*. Tool EDA seperti *Synopsys 3DIC Compiler*, *Cadence Integrity 3D-IC*, dan *Siemens Aprisa* melakukan *RTL-to-GDSII* dengan awareness terhadap *bump/bond grid* hybrid bonding.

**Tahap 2 — Chiplet Physical Design & Verification.**
Setiap chiplet dirancang dengan *full physical implementation flow*: floorplan, placement, CTS, routing, DRC, LVS. Validasi tambahan berupa *multi-physics co-simulation* (termal-mekanikal-elektrikal) dan *signal integrity* untuk *through-stack* interconnects.

**Tahap 3 — Wafer Preparation & Surface Activation.**
Proses *pre-bonding* di wafer fab mengikuti flow: (i) Chemical Mechanical Polishing (CMP) untuk mencapai kekasaran $R_a < 0.5$ nm, (ii) plasma activation N₂/H₂ untuk membentuk surface layer reaktif, (iii)清洗 *de-ionized water* dengan megasonic, (iv) *drying* IPA vapor, dan (v) inspeksi *particle scan* pada whole-wafer (target ≤ 1 partikel >50 nm per 100 cm²).

**Tahap 4 — Cu-Cu Hybrid Bonding (TCB).**
Kedua wafer (top dan bottom) disejajarkan (*wafer-to-wafer alignment*) dengan akurasi sub-200 nm menggunakan *infrared alignment* atau *optical alignment*. Proses TCB dilakukan dalam *bond chamber* v