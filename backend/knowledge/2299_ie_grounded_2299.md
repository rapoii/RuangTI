# 2299 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Arsitektur Rekayasa Heterogen, Hybrid Bonding, dan Optimasi Multi-Fisika dalam Ekosistem Semikonduktor Pasca-Moore

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In: *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah menghadapi transisi paradigmatik dari arsitektur System-on-Chip (SoC) monolitik menuju paradigma *heterogeneous integration* (HI) berbasis chiplet dan *three-dimensional integrated circuits* (3D-IC). Menurut Roze dan Gerber (2026) dalam makalah mereka di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, transisi ini dipicu oleh tiga tekanan struktural simultan yang tidak dapat diselesaikan oleh Hukum Moore tradisional: (i) melonjaknya biaya litografi EUV di bawah node 3 nm yang melampaui ambang USD $200 juta per *mask set*; (ii) menurunnya *yield* die pada area wafer yang semakin besar; dan (iii) kebutuhan heterogenitas fungsional yang mengharuskan penggabungan proses logika先进, memori, RF, dan power dalam satu paket sistem [DOI: 10.23919/icep-hbs69241.2026.11550563]. Roze dan Gerber secara eksplisit menyatakan bahwa solusi *Electronic Design Automation* (EDA) bukan sekadar alat bantu, melainkan已成为 inti strategis yang menentukan kelayakan ekonomis dan teknis dari seluruh rantai pasok chiplet.

Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* melengkapi analisis ini dengan perspektif manufaktur, khususnya teknologi Cu-Cu *hybrid bonding* yang memungkinkan pitch interconnect turun ke skala sub-mikrometer. Lau mendokumentasikan bagaimana transisi dari *microbump* solder-based (pitch ≈ 40–50 µm) menuju Cu-Cu direct bonding (pitch < 10 µm) memberikan peningkatan densitas I/O lebih dari satu порядок magnitude, sekaligus menurunkan resistansi寄生 dan induktansi pada level yang fundamental [DOI: 10.1007/978-981-19-9917-8_6]. Kedua perspektif ini—EDA dari sisi desain dan hybrid bonding dari sisi proses—membentuk satu kesatuan rekayasa yang menentukan apakah sebuah produk 3D-IC dapat diproduksi secara massal dengan margin keuntungan yang sehat.

Konteks ekonomi makro yang melatarbelakanginya juga tidak dapat diabaikan. Pasar chiplet global diproyeksikan mencapai USD $50+ miliar pada akhir dekade ini dengan CAGR >35%. Permintaan ini utamanya datang dari pusat data AI/HPC (misalnya GPU Tensor Core generasi terbaru dari NVIDIA, AMD Instinct MI300, dan accelerator TPU Google), otomotif (ADAS level 4+ dengan sensor LiDAR dan radar 4D), serta aplikasi edge-AoT yang memerlukan integrasi sensor multi-modal. Urgensi operasional terletak pada kemampuan EDA tools untuk melakukan *co-design* lintas domain (listrik, termal, mekanik, manufacturability, dan cost) dalam satu kerangka kerja terpadu. Tanpa platform EDA yang mature, yield 3D-IC akan turun drastis karena setiap misalignment pada level sub-µm di hybrid bonding dapat menggandakan biaya produksi.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis yang dibangun oleh Roze dan Gerber (2026) serta dilandasi oleh formulasi Lau (2023) memerlukan beberapa model matematis fundamental untuk mengkuantifikasi perilaku sistem 3D-IC.

### 2.1 Model Hasil (Yield) Chiplet Terdisagregasi

Berbeda dengan SoC monolitik di mana yield die tunggal mengikuti model Poisson:

$$Y_{die} = e^{-D_0 \cdot A}$$

di mana $D_0$ adalah defect density (def/cm²) dan $A$ adalah luas area die (cm²), sistem chiplet memiliki struktur hasil majemuk:

$$Y_{system} = \prod_{i=1}^{N_c} Y_{die,i} \cdot Y_{bond,i}$$

dengan $N_c$ adalah jumlah chiplet yang diintegrasikan dan $Y_{bond,i}$ adalah yield proses bonding untuk chiplet ke-$i$. Model ini menjelaskan mengapa disaggregasi ke chiplet kecil meningkatkan yield sistem keseluruhan, bahkan ketika yield per-die tidak sempurna.

### 2.2 Analisis Sinyal Integritas pada Antarmuka Hybrid Bonding

Untuk interconnect Cu-Cu hybrid bonding dengan pitch $p$ dan tinggi pillar $h$, resistansi DC per kontak mengikuti:

$$R_{contact} = \frac{\rho_{Cu} \cdot h}{A_{contact}} = \frac{\rho_{Cu} \cdot h}{\pi (p/2)^2 \cdot \alpha}$$

di mana $\alpha$ adalah faktor area efektif akibat *misalignment* dan *bonding non-ideal*. Kapasitansi寄生 kapasitif terhadap ground berdekatan:

$$C_{parasitic} = \varepsilon_0 \varepsilon_r \frac{A_{contact}}{d_{isolation}}$$

sehingga konstanta RC untuk satu interconnect:

$$\tau_{RC} = R_{contact} \cdot C_{parasitic} = \frac{\rho_{Cu} \cdot h \cdot \varepsilon_0 \varepsilon_r}{d_{isolation}}$$

Menurut Lau (2023), pada hybrid bonding pitch 10 µm, nilai $\tau_{RC}$ turun 10–100× dibanding microbump solder 40 µm, menjelaskan mengapa bandwidth antarmuka chiplet dapat menembus >10 Tbps/mm.

### 2.3 Model Termal untuk Stack 3D

Tahanan termal stack 3D-IC dengan $n$ layer:

$$R_{th,stack} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff}}$$

di mana $t_i$ dan $k_i$ adalah tebal dan konduktivitas termal layer ke-$i$, sedangkan $A_{eff}$ adalah luas efektif spread thermique. Kenaikan suhu junction:

$$\Delta T_j = P_{total} \cdot R_{th,stack} - P_{sink} \cdot R_{heatsink}$$

### 2.4 Model Keandalan Arrhenius untuk Cu-Cu Bonding

Lau (2023) mengadopsi model MTTF berbasis energi aktivasi:

$$MTTF = A \cdot \exp\left(\frac{E_a}{k_B T}\right) \cdot j^{-n}$$

di mana $E_a$ adalah energi aktivasi untuk electromomigrasi (~0.9 eV untuk Cu), $k_B$ adalah konstanta Boltzmann, $T$ suhu operasi (K), $j$ densitas arus (A/cm²), dan $n$ eksponen (~2 untuk Cu).

### 2.5 Fungsi Objektif Optimasi EDA

Roze dan Gerber (2026) merumuskan optimasi co-design sebagai masalah multi-objective:

$$\min_{x \in \mathcal{X}} F(x) = \left[ f_1(x), f_2(x), f_3(x), f_4(x) \right]^T$$

dengan empat fungsi tujuan: $f_1$ = PPA (Performance, Power, Area), $f_2$ = thermal gradient, $f_3$ = manufacturability index (DFM), dan $f_4$ = total cost of ownership (TCO). Constraint $\mathcal{X}$ meliputi Design Rule Checking (DRC), pin assignment, dan routing congestion.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka metodologi EDA end-to-end yang terdiri dari tujuh fase rekayasa sistematis:

**Fase 1 — Chiplet Partitioning & Floorplanning:** Penentuan batas-batas fungsional die berdasarkan analitik thermal, signal integrity, dan biaya. Algoritma menggunakan hierarchical clustering dengan constraint bahwa jumlah I/O per chiplet tidak melebihi kapasitas hybrid bonding.

**Fase 2 — Interconnect Planning & Bump Map Synthesis:** Generate distribusi pillar Cu berdasarkan analisis sinyal dan termal. Pitch dan diameter dioptimasi per region.

**Fase 3 — Physical Implementation:** Place & route setiap chiplet menggunakan library standar sel dengan augmented rule sets untuk TSV dan hybrid bond pad.

**Fase 4 — Multi-Physics Verification:** Co-simulasi elektro-thermal-mekanik yang mengintegrasikan solver finite-element dengan solver RLC/EM.

**Fase 5 — DFM/DFY Closure:** Iterasi antara layout dan rule proses hybrid bonding, termasuk bow/warpage compensation.

**Fase 6 — Sign-off & Tape-out:** DRC final, LVS, dan verifikasi terhadap IRDS roadmap dan standar JEDEC (JESD22, JESD51).

**Fase 7 — Package Co-Design:** Integrasi substrate, interposer, dan TIM (Thermal Interface Material) dalam satu kerangka optimasi.

Lau (2023) melengkapi sisi proses dengan SOP hybrid bonding sebagai berikut:

1. **Surface Preparation**: Plasma activation pada permukaan Cu (umumnya N₂/H₂, 200–400°C).
2. **Alignment**: Precision < ±200 nm pada alat seperti EVG Gemini atau Besi Bonder.
3. **Bonding Initiation**: Pre-bonding pada suhu ruang, lalu thermal compression bonding.
4. **Annealing**: 250–400°C untuk difusi Cu-Cu interface.

Diagram alir integratif antara EDA flow dan proses fabrikasi membentuk *closed-loop* yang memungkinkan iterasi desain cepat ketika parameter proses berubah.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain AI Accelerator 3D-IC (8 Chiplet)

**Spesifikasi Awal:** GPU compute chiplet (3 buah) + HBM3 memory chiplet (4 buah) + I/O chiplet (1 buah). Target: bandwidth antarmuka >5 Tbps, daya total <300 W, target yield sistem >85%.

**Langkah 1: Perhitungan Yield dengan Disagregasi vs Monolitik.**

Misalkan die monolitik berukuran 600 mm² dengan $D_0 = 0.05$ def/cm²:

$$Y_{mono} = e^{-0.05 \times 6} = e^{-0.30} = 0.741$$

Untuk disaggregasi ke 8 chiplet rerata 75 mm² dengan tambahan yield bonding 0.97 per interface:

$$Y_{sys} = \left(e^{-0.05 \times 0.75}\right)^8 \times 0.97^8 = (0.963)^8 \times (0.97)^8$$

$$Y_{sys} = 0.748 \times 0.785 = 0.587$$

Angka ini tampak lebih rendah, namun dengan arsitektur *redundant chiplet* yang umum di accelerator:

$$Y_{sys,with\;redundancy} = 1 - (1 - Y_{die})^{N_c} \times (1 - Y_{bond})$$

dengan $N_c = 9$ (1 chiplet cadangan):

$$Y_{sys