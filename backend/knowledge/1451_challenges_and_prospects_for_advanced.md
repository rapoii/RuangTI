# 1451 — Tantangan dan Prospek Kemasan Elektronik Lanjutan (Advanced Packaging) di Era Pascamorphan Moore untuk Rekayasa Sistem Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Challenges and prospects for advanced packaging
**Jurnal & Sitasi Utama:** Zhiwen Chen, J. Zhang, Shizhao Wang (2023). *Fundamental Research*. DOI: [https://doi.org/10.1016/j.fmre.2023.04.014](https://doi.org/10.1016/j.fmre.2023.04.014)
**Sitasi Pendukung:** Zhiwen Chen, J. Zhang, Shizhao Wang (2023). *Fundamental Research*. DOI: [https://doi.org/10.1016/j.fmre.2023.04.014](https://doi.org/10.1016/j.fmre.2023.04.014)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang memasuki sebuah titik infleksi strategis yang oleh Chen, Zhang, dan Wang (2023) disebut sebagai *post-Moore era* — periode di mana Hukum Moore tradisional (penskalaan transistor menjadi dua kali lipat setiap 18–24 bulan) tidak lagi menjadi sumber utama peningkatan kinerja, efisiensi biaya, dan miniaturisasi produk elektronik (Chen *et al.*, 2023, DOI: [10.1016/j.fmre.2023.04.014](https://doi.org/10.1016/j.fmre.2023.04.014)). Dalam konteks ini, *advanced packaging* atau kemasan elektronik lanjutan telah bertransformasi dari sekadar aktivitas "pembungkus" IC pasif-proses-belakang menjadi sebuah *strategic value driver* yang menentukan daya saing produk di pasar *smartphone*, *high-performance computing* (HPC), *artificial intelligence accelerator*, *Internet of Things* (IoT), dan sistem otomotif *autonomous driving*.

Permintaan operasional industri modern mensyaratkan tiga vektor sekaligus yang sering kali saling kontradiktif: **(1)** ukuran yang lebih kecil (*smaller form factor*), **(2)** kinerja yang lebih powerful (*higher bandwidth*, *lower latency*, *higher thermal dissipation*), dan **(3)** biaya per fungsi yang lebih rendah (*lower cost-per-function*). Trilema ini tidak lagi dapat diselesaikan melalui pendekatan *front-end-of-line* (FEOL) transistor scaling semata. Oleh karena itu, kemasan telah bergeser paradigma menuju *Back-End-of-Line*-*centric innovation*, termasuk teknologi **3D IC packaging** (stacking *vertikal* menggunakan *through-silicon vias/TSV*, *hybrid bonding*, dan *micro-bumps*), **fan-out wafer-level packaging** (FOWLP) seperti platform *InFO* dari TSMC dan *Integrated Fan-Out* lainnya yang memungkinkan redistribusi *routing* ke luar area die, serta **chiplet packaging** yang merupakan pendekatan *heterogeneous integration* di mana beberapa *die* kecil (chiplet) dengan *process node* berbeda diintegrasikan dalam satu paket melalui *interconnect fabric* seperti *Universal Chiplet Interconnect Express* (UCIe) atau *BoW* (Bunch of Wires) (Chen *et al.*, 2023).

Dari perspektif ekonomi industri, transisi ini menciptakan *disruption* pada rantai pasok global. Biaya *mask set* untuk node 5 nm telah melampaui USD 30 juta, sementara biaya untuk node 2 nm mendekati USD 80–100 juta menurut estimasi IBS (International Business Strategies) yang banyak dikutip dalam literatur kemasan lanjutan. Sebagai konsekuensinya, *chiplet architecture* memungkinkan disagregasi *monolithic SoC* menjadi beberapa *die* kecil yang masing-masing dapat diproduksi pada *node* optimalnya, sehingga menurunkan *die cost* agregat dan meningkatkan *yield*. Namun, biaya kemasan lanjutan, terutama *assembly* + *test*, kini menyumbang proporsi yang semakin besar terhadap *bill of materials* (BOM) — pada beberapa produk *leading-edge HPC*, proporsi *packaging cost* telah mencapai 25–40 % dari total biaya chip.

Urgensi keberlanjutan juga ditekankan oleh Chen *et al.* (2023). Proses kemasan lanjutan membutuhkan konsumsi energi termal yang signifikan (curing, bonding, reflow), material *rare-earth* dan *high-purity chemical*, serta menghasilkan limbah *dicing tape*, *photoresist*, dan *etchant* yang harus dikelola sesuai regulasi RoHS, REACH, dan *carbon border adjustment mechanism* (CBAM) Uni Eropa. *Multi-scale modeling* dan *co-design tools* yang diusulkan paper ini bukan sekadar instrumen akademis, melainkan kebutuhan industri untuk mengkuantifikasi *carbon footprint per functional unit* dan merancang kemasan dengan siklus hidup yang lebih hijau.

---

## 2. Landasan Teori & Formulasi Matematis

Dalam kerangka rekayasa sistem industri, kemasan lanjutan dapat dimodelkan sebagai masalah optimasi multi-target (*multi-objective optimization problem*). Fungsi obyektif utama yang harus diminimalkan secara simultan adalah: **(a)** biaya per fungsi, **(b)** latensi interkoneksi, **(c)** footprint area, dan **(d)** jejak karbon proses. Berikut adalah formulasi matematis utama yang relevan dengan paper Chen *et al.* (2023):

### 2.1 Fungsi Biaya per Fungsi (Cost-per-Function)

Untuk arsitektur *chiplet*, total biaya paket $C_{pkg}$ dapat didekomposisi menjadi:

$$C_{pkg} = \sum_{i=1}^{n} \left( C_{die,i} \cdot Y_i^{-1} \right) + C_{interposer} + C_{assembly} + C_{test}$$

di mana $n$ adalah jumlah chiplet, $C_{die,i}$ adalah biaya *wafer* per die ke-$i$ yang dihitung melalui formula klasik *die yield model*:

$$C_{die,i} = \frac{C_{wafer,i}}{\pi \cdot (D/2)^2 \cdot N_{gross,i} \cdot Y_i}$$

dan *yield* $Y_i$ mengikuti model *negative binomial* (model Stapper):

$$Y_i = \left(1 + \frac{D \cdot A_c}{\alpha}\right)^{-\alpha}$$

dengan parameter:
- $D$ = luas *die* (cm²)
- $A_c$ = *defect density* (defects/cm²)
- $\alpha$ = *clustering parameter* (umumnya $\alpha \approx 2$ untuk proses mature, $\alpha \approx 0{,}5$ untuk proses cutting-edge)

### 2.2 *Known-Good-Die* (KGD) Yield Agregat

Karena chiplet yang sudah di-*package* tidak dapat diuji secara individual setelah *assembly*, probabilitas seluruh paket berfungsi adalah produk yield masing-masing komponen:

$$Y_{system} = Y_{KGD,1} \cdot Y_{KGD,2} \cdots Y_{KGD,n} \cdot Y_{assembly}$$

Untuk $n$ chiplet identik dengan yield $Y_{KGD} = 0{,}95$ dan $Y_{assembly} = 0{,}99$, maka:

$$Y_{system} = (0{,}95)^n \cdot 0{,}99$$

Fenomena degradasi yield eksponensial ini merupakan salah satu tantangan utama yang diidentifikasi oleh Chen *et al.* (2023), dan mendorong kebutuhan akan *new handling technologies* dan *standardized test interface* (misalnya *BIST* dan *JTAG*-based KGD verification).

### 2.3 Resistansi Termal dan Kerapatan Daya

Untuk kemasan 3D IC dengan $k$ *stack layers*, resistansi termal junction-to-ambient didekati:

$$\theta_{JA} = \theta_{JC} + \theta_{TIM} + \theta_{HS} + \theta_{conv}$$

di mana $\theta_{JC}$ adalah resistansi junction-to-case, $\theta_{TIM}$ adalah resistansi *thermal interface material*, dan $\theta_{conv}$ adalah resistansi konveksi heatsink. Kerapatan daya volumetrik dapat ditulis:

$$q_v = \frac{P}{V_{stack}} = \frac{P}{A_{die} \cdot \sum_{j=1}^{k} t_j}$$

dengan $t_j$ adalah tebal setiap layer. Untuk HPC accelerator dengan $P = 300$ W, $A_{die} = 100$ mm², dan $k = 12$ *chiplet stack* dengan tebal rata-rata $t = 75\,\mu m$ per layer:

$$V_{stack} = 100\,\text{mm}^2 \cdot 12 \cdot 75\,\mu m = 9 \cdot 10^{-8}\text{m}^3$$
$$q_v = \frac{300}{9 \cdot 10^{-8}} \approx 3{,}33 \times 10^9\,\text{W/m}^3$$

Nilai ini mendekati orde $10^{9}$ W/m³ yang menjadi benchmark termal untuk kemasan *leading-edge* — jauh di atas kemampuan pendinginan konvensional sehingga memerlukan *liquid cooling*, *microchannel heat sink*, atau *vapor chamber*.

### 2.4 Model Laju Cacat dan Keandalan

Tingkat cacat *Time-to-First-Failure* untuk *solder joint* atau *hybrid bonding interface* mengikuti *Arrhenius-Weibull model*:

$$\text{AF}(T) = \exp\left[\frac{E_a}{k_B}\left(\frac{1}{T_{use}} - \frac{1}{T_{stress}}\right)\right]$$

dengan $E_a$ adalah *activation energy* (umumnya 0,7–1,0 eV untuk *solder SAC305*, hingga 1,5 eV untuk *Cu-Cu hybrid bond*), $k_B = 8{,}617 \times 10^{-5}$ eV/K, $T_{use}$ dan $T_{stress}$ dalam Kelvin.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka solusi yang diuraikan Chen *et al.* (2023) — *standardization*, *co-design tools*, *new handling technologies*, serta *multi-scale modeling & simulation* — dapat disusun sebuah SOP tujuh-tahap untuk implementasi kemasan lanjutan di lantai produksi:

**Tahap 1 — *Multi-Scale Thermal-Mechanical Co-Design*.** Dimulai dari level *system architecture* (chiplet partitioning, floorplan, interposer routing), turun ke level *package* (substrate stack-up, bump pitch, underfill selection), hingga level *wafer* (TSV placement, BEOL routing). Setiap level memerlukan *finite element analysis* (FEA) coupled dengan *computational fluid dynamics* (CFD). *Tools* standar industri termasuk ANSYS RedHawk, Cadence Voltus, dan Siemens Calibre.

**Tahap 2 — *Wafer-Level Process*.** Meliputi *thinning* (target $\leq 50\,\mu m$ untuk *3D stack*), *via reveal*, *temporary bonding/debonding*, dan *TSV formation*. *Critical-to-Quality* (CTQ) parameters: kerataan wafer *taper* $\leq 5\,\mu m$, *bow* $\leq 1$ mm pada wafer 300 mm.

**Tahap 3 — *Known-Good-Die Verification*.** Setiap chiplet harus melalui *final test* suhu tinggi (milspec −55°C sampai +125°C) sebelum *assembly*. Tanpa KGD tervalidasi, yield sistem runtuh secara eksponensial sesuai persamaan $Y_{system}$ di Bagian 2.

**Tahap 4 — *Hybrid Bonding / Micro-Bump Assembly*.** Standar proses *Cu-Cu hybrid bonding* memerlukan *annealing* pada 200–400°C dengan presisi aligner $\leq 200$ nm (3σ). *Throughput* target: 1000 unit/jam per *bonder*.

**Tahap 5 — *Underfill & Encapsulation*.** *Capillary underfill* (CUF) atau *molded underfill* (MUF) diaplikasikan dengan viskositas $50$–$500$ Pa·s pada suhu dispense 80–120°C. Tahapan *curing*: 150°C selama 60–120 menit.

**Tahap 6 — *Final Test & Burn-In*.** *Burn-in* pada 125°C selama 168 jam untuk *infant mortality screening*, dilanjutkan *ATE* (Automatic Test Equipment) *boundary scan* dan *functional test*.

**Tahap 7 — *Reliability Qualification*.** Berdasarkan standar **JEDEC** (JESD22, JESD47), uji minimum: *Temperature Cycling* (TC-B: −55°C/+125°C, 1000 siklus), *HAST* (Highly Accelerated Stress Test, 130°C/85% RH, 96 jam), *HTOL* (High Temperature Operating Life, 1000 jam), dan *drop test* sesuai IEC 60068-2-27.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Sebuah vendor semikonduktor *fabless* sedang mengevaluasi transisi arsitektur *monolithic SoC* 5 nm menjadi arsitektur *chiplet-based* 3D IC untuk *AI accelerator* kelas enterprise.

**Parameter Input:**
- *Monolithic SoC*: luas die $D_m = 250$ mm², biaya wafer $C_w = \$3.500$, defect density $A_c = 0{,}10$ cm⁻², $\alpha = 0{,}5$
- *Chiplet partitioning*: 4 chiplet, masing-masing $D_c = 65$ mm² (total 260 mm² + *interposer area* loss 4 % = 270 mm² equivalent)
- Biaya interposer silicon: $C_{interposer} = \$12$ per unit
- Biaya *assembly* + *test* per unit: $C_{a/t} = \$25$
- Volume produksi: $N = 50.000$ unit/tahun

**Langkah 1 — Yield Die Monolithic (menggunakan Persamaan Stapper):**

$$Y_m = \left(1 + \frac{0{,}250\,\text{cm}^2 \cdot 0{,}10\,\text{cm}^{-2}}{0{,}5}\right)^{-0{,}5} = (1{,}05)^{-0{,}5} \approx 0{,}9762$$

**Langkah 2 — Yield Die Chiplet:**

$$Y_c = \left(1 + \frac{0{,}065\,\text{cm}^2 \cdot 0{,}10\,\text{cm}^{-2}}{0{,}5}\right)^{-0{,}5} = (1{,}013)^{-0{,}5} \approx 0{,}9936$$

**Langkah 3 — Yield Sistem (4 chiplet + interposer + assembly, asumsikan $Y_{KGD} = Y_c$):**

$$Y_{sys} = (0{,}9936)^4 \cdot