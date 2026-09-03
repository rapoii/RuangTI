# 2779 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisika dalam Rantai Pasok Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Transisi arsitektur monolitik System-on-Chip (SoC) menuju paradigma *heterogeneous integration* berbasis chiplet dan *three-dimensional integrated circuits* (3D-IC) telah mengubah secara fundamental peta manufaktur semikonduktor global. Roze dan Gerber (2026), dalam papernya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS), menegaskan bahwa kompleksitas desain chip modern—yang kini mengintegrasikan unit pemrosesan AI, memori bandwidth-tinggi (HBM), RF front-end, dan sensor optik dalam satu paket—telah melampaui kapasitas metodologi Electronic Design Automation (EDA) konvensional yang berorientasi pada *planar monolithic flow* (Roze & Gerber, 2026, DOI: 10.23919/icep-hbs69241.2026.11550563). Urgensi operasional muncul dari tiga tekanan simultan: (1) batas fisik *reticle limit* litografi EUV yang mendekati 26 mm × 33 mm, (2) kenaikan biaya masker masker (mask cost) yang melebihi USD 50 juta per set pada node 3 nm, dan (3) kebutuhan time-to-market yang menuntut *design closure* kurang dari 9 bulan.

Konteks ekonomi memperkuat urgensi ini. Pasar chiplet global diproyeksi mencapai USD 148 miliar pada 2030 dengan CAGR >40%, didorong oleh hyperscaler seperti NVIDIA, AMD, Intel, dan AWS yang beralih ke arsitektur *disaggregated compute*. Lau (2023) menekankan bahwa *Cu-Cu hybrid bonding* menjadi *enabling technology* utama karena menawarkan pitch interkoneksi sub-10 µm, latensi sinyal rendah, dan integritas termal superior dibanding *micro-bump* soldering tradisional (Lau, 2023, DOI: 10.1007/978-981-19-9917-8_6). Namun, integrasi teknologi ini dalam *toolchain* EDA menghadapi tantangan masif: alignment tolerance harus dipertahankan di bawah ±200 nm, *bonding yield* harus melebihi 99,99% untuk wafer-level stacking, dan simulasi multi-fisika (termal-mekanikal-listrik) harus mencakup puluhan miliar transistor serta ribuan *through-silicon vias* (TSV).

Dari perspektif teknik industri, problematika ini bukan sekadar teknis—melainkan merupakan *complex adaptive system* yang membutuhkan optimasi lintas-domain: desain, manufaktur, pengujian, dan rantai pasok. Roze dan Gerber (2026) mengusulkan kerangka EDA terpadu yang menjembatani gap antara *physical design* dan *package-level co-design*, sementara Lau (2023) menyediakan landasan proses bonding yang harus diakomodasi oleh rule deck EDA. Kedua referensi ini membentuk basis bagi Modul 2779 untuk membedah rekayasa sistem integrasi heterogen secara komprehensif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kerapatan Interkoneksi Hybrid Bonding

Lau (2023) mendefinisikan pitch interkoneksi $p$ sebagai parameter kritis yang menentukan bandwidth dan densitas sinyal. Hubungan antara luas die efektif dan jumlah I/O dapat diformulasikan:

$$N_{IO} = \frac{A_{die}}{p^2} \cdot \eta_{utilization}$$

di mana $N_{IO}$ adalah jumlah I/O, $A_{die}$ adalah luas area die aktif, $p$ adalah pitch bonding, dan $\eta_{utilization} \in [0.6, 0.85]$ adalah *utilization factor* yang memperhitungkan area *keep-out* untuk ESD, scribe line, dan *redistribution layer* (RDL). Untuk pitch 10 µm dan die 100 mm², dengan $\eta_{utilization}=0.75$:

$$N_{IO} = \frac{100 \times 10^6}{(10 \times 10^{-6})^2} \times 0.75 = 7.5 \times 10^5 \text{ I/O}$$

Angka ini mendekati kapasitas HBM4 (~1024-bit interface per stack) yang memerlukan >5000 koneksi per stack.

### 2.2 Model Resistansi Listrik TSV dan Hybrid Bond

Resistansi DC sebuah hybrid bond Cu-Cu mengikuti formulasi:

$$R_{bond} = \frac{\rho_{Cu} \cdot L_{bond}}{A_{contact}} + R_{interface}$$

di mana $\rho_{Cu} = 1.68 \times 10^{-8}~\Omega\cdot m$, $L_{bond}$ adalah tinggi bonding tipikal 3-5 µm, dan $A_{contact}$ adalah luas area kontak efektif. Roze dan Gerber (2026) menekankan bahwa term $R_{interface}$ didominasi oleh oksidasi dan *misalignment*, dengan degradasi:

$$R_{interface} = R_0 \cdot e^{\alpha \cdot \delta_{misalign}}$$

di mana $\delta_{misalign}$ adalah misalignment dalam nm dan $\alpha \approx 0.003~\text{nm}^{-1}$. Untuk target misalignment <200 nm, kenaikan resistansi dijaga <82%.

### 2.3 Model Resistansi Termal 3D-Stack

Resistansi termal total stack 3D-IC dihitung sebagai resistansi seri multilayer:

$$\theta_{JA} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + \theta_{TIM} + \theta_{heatsink}$$

di mana $t_i$, $k_i$, dan $A_i$ berturut-turut adalah ketebalan, konduktivitas termal, dan luas area layer ke-$i$. Untuk stack 4-die HBM di atas logic die dengan *thermal interface material* (TIM):

$$\theta_{JA} = \frac{t_{logic}}{k_{Si} \cdot A} + \frac{t_{TIM}}{k_{TIM} \cdot A} + \theta_{hs}$$

dengan $k_{Si}=148~\text{W/m·K}$, $k_{TIM}=3-12~\text{W/m·K}$, dan $t_{TIM}=50-100~\mu m$. Roze dan Gerber (2026) menunjukkan bahwa tanpa optimasi, $\theta_{JA}$ stack 8-die dapat mencapai 4-6× nilai single-die, menjadi bottleneck performa termal.

### 2.4 Model Yield dan Keandalan

Yield bonding wafer didekati dengan model负二项分布 (negative binomial) yang umum digunakan dalam *yield engineering* semikonduktor:

$$Y_{bond} = \left(1 + \frac{D_0 \cdot A}{\alpha}\right)^{-\alpha}$$

di mana $D_0$ adalah defect density per satuan luas (tipikal 0.05-0.2 cm⁻² untuk hybrid bonding mature), $A$ adalah luas bonding area per chip, dan $\alpha$ adalah clustering parameter. Untuk target yield >99.95% pada area 100 mm²:

$$0.9995 = \left(1 + \frac{0.1 \times 10}{2}\right)^{-2} = 0.9804$$

yang memerlukan perbaikan proses hingga $D_0 < 0.03~\text{cm}^{-2}$ atau *self-healing* redundancy dalam chiplet interconnect.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan alur kerja EDA terpadu untuk chiplet dan 3D-IC yang mengikuti arsitektur *closed-loop design*: (1) *Architecture exploration* dengan platform multi-chiplet, (2) *Co-design* sinyal, daya, termal, dan mekanikal, (3) *Physical verification* lintas-domain, dan (4) *Sign-off* dengan mempertimbangkan *manufacturing variability*. Prosedur operasional standar (SOP) yang dirumuskan untuk Modul 2779 adalah sebagai berikut:

**Fase 1 — Konteks Sistem (System Contextualization):**
1. Definisikan disaggregasi fungsi: identifikasi blok IP (CPU, GPU, memory, IO) yang akan dijadikan *die* terpisah.
2. Tentukan topologi interconnect: bus, mesh, atau ring; pilih protokol (UCIe, BoW, OpenHBI).
3. Lakukan *trade-off analysis* antara pitch bonding ($p$), jumlah I/O ($N_{IO}$), dan thermal envelope $(\theta_{JA})$.

**Fase 2 — Co-Design Multi-Fisika:**
1. Buat *unified database* yang menyatukan netlist logic, layout package, dan model termal.
2. Jalankan simulasi *signal integrity* (SI) dan *power integrity* (PI) dengan tool SI/PI engine.
3. Jalankan simulasi *thermal-mechanical* dengan finite element analysis (FEA) untuk mendeteksi *hot spot* dan stres CTE mismatch.

**Fase 3 — Physical Implementation & Verification:**
1. Synthesis RTL → place & route chiplet dengan rule deck spesifik hybrid bonding.
2. DRC/LVS dengan mempertimbangkan keep-out zone di sekitar bonding interface.
3. Multi-die timing closure dengan memperhatikan *path delay* lintas chiplet.

**Fase 4 — Manufacturing Sign-off:**
1. Validasi alignment budget: total misalignment $< 0.2 \mu m$ pada 3-sigma.
2. Verifikasi DFM rule: copper recess <50 nm, surface roughness Ra<1 nm.
3. Generate GDSII final dengan *chiplet hand-off* ke foundry/packaging partner.

Diagram alir prosesnya mengikuti kerangka *RTL → GDSII → KGD → Assembly*, di mana *Known Good Die* (KGD) testing wajib dilakukan sebelum stacking untuk menekan biaya rework.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Disain SoC AI Accelerator 4-Chiplet dengan HBM Stack

**Spesifikasi Input:**
- 4 compute chiplet @ 15 mm × 15 mm, node 5 nm
- 1 HBM3 stack (8-Hi) di atas interposer
- Pitch hybrid bonding target: 6 µm
- TDP total: 350 W (4 chiplet × 80 W + HBM 30 W)

**Langkah 1 — Perhitungan I/O Budget per Chiplet:**
$$N_{IO/chiplet} = \frac{(15 \times 10^{-3})^2}{(6 \times 10^{-6})^2} \times 0.78 = 4.875 \times 10^6~\text{I/O}$$

Jumlah ini 4× lebih besar dibanding paket BGA konvensional, memungkinkan *bandwidth* memory hingga 5 TB/s dengan arsitektur *wide I/O*.

**Langkah 2 — Resistansi Termal Stack:**
Misal die setebal 75 µm, TIM 50 µm dengan $k=8~\text{W/m·K}$, luas efektif $225~\text{mm}^2$:

$$\theta_{stack} = \frac{75 \times 10^{-6}}{148 \times 225 \times 10^{-6}} + \frac{50 \times 10^{-6}}{8 \times 225 \times 10^{-6}} = 0.00225 + 0.0278 = 0.0300~\text{K/W}$$

Untuk HBM 8-Hi dengan total ketebalan 720 µm:

$$\theta_{HBM} = \frac{720 \times 10^{-6}}{148 \times 225 \times 10^{-6}} = 0.0216~\text{K/W}$$

Total $\theta_{JA} = 0.0300 + 0.0216 + \theta_{hs}$. Dengan $\theta_{hs}=0.08~\text{K/W}$ (heatsink liquid-cooled): $\theta_{JA}=0.1316~\text{K/W}$.

**Langkah 3 — Suhu Junction:**
$$T_j = T_a + P_{total} \cdot \theta_{JA} = 45 + 350 \times 0.1316 = 91.06°\text{C}$$

Di bawah *thermal limit* 105°C untuk junction logika 5 nm, margin desain 13.94°C.

**Langkah 4 — Yield Bonding Prediksi:**
Dengan $D_0=0.08~\text{cm}^{-2}$, $\alpha=2$, $A=2.25~\text{cm}^2$:

$$Y_{bond} = \left(1 + \frac{0.08 \times 2.25}{2}\right)^{-2} = (1.09)^{-2} = 0.8417$$

Yield 84.17% per bonding event. Dengan 3 bonding event (2× hybrid + 1× micro-bump), yield assembly: $0.8417^3 = 0.5963$. Untuk mencapai yield sistem >95%, diperlukan *redundant link* atau *known good die* screening.

**Langkah 5 — Analisis Sensitivitas Biaya:**
Misal biaya wafer processing 5 nm USD 16.000/die, biaya HBM stack USD 200, biaya assembly & bonding USD 150/die:

$$C_{package} = (4 \times 16000 \times 0.5963) + 200 + 150 = USD 38.503$$

Tanpa hybrid bonding efisiensi, *cost* SoC monolithic 700 mm² akan 1.8× lebih mahal karena yield turun drastis.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### Evaluasi Kritis

Metodologi EDA yang diusulkan Roze dan Gerber (2026) memiliki keterbatasan: (1) *runtime* simulasi termal 3D penuh masih memakan 48-72 jam per iterasi pada cluster HPC enterprise, menghambat *design space exploration* massif; (2) akurasi model CTE mismatch masih bergantung pada data material yang belum sepenuhnya terstandar untuk material