# 1515 — EDA untuk Desain Chiplet dan 3D-IC: Solusi Integrasi Heterogen dengan Hybrid Bonding Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigma yang mendasar dari arsitektur *system-on-chip* (SoC) monolitik menuju paradigma *chiplet* dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh berakhirnya *node* planar tradisional di bawah 3 nm, melonjaknya biaya litografi EUV (*extreme ultraviolet*) yang mencapai USD 200–300 juta per *tool*, serta kelangkaan *yield* wafer pada area die besar (>700 mm²). Roze dan Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menekankan bahwa solusi *Electronic Design Automation* (EDA) modern harus mampu mengelola kompleksitas desain yang didistribusikan ke beberapa *die*, dikemas secara heterogen, dan diinterkoneksi melalui *hybrid bonding* dengan *pitch* sub-mikron. Pendekatan ini memungkinkan *time-to-market* yang lebih singkat, optimalisasi biaya produksi, dan peningkatan *performance-per-watt* yang signifikan.

Menurut Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)), integrasi heterogen melalui *chiplet* telah menjadi strategi dominan bagi pemain utama seperti AMD (Ryzen), Intel (Ponte Vecchio), TSMC (CoWoS), dan Apple (M-Ultra series). Pasar 3D-IC diproyeksikan tumbuh dari USD 12,8 miliar (2024) menjadi USD 86,6 miliar pada 2030 dengan CAGR 37,2% (Yole Group, 2024). Urgensi ekonomis ini didukung oleh tiga faktor struktural: (1) biaya NRE (*non-recurring engineering*) untuk *mask set* 2 nm mendekati USD 60 juta, (2) keterbatasan *reticle limit* (~858 mm² pada EUV), dan (3) permintaan komputasi HPC/AI yang membutuhkan bandwidth memori >10 TB/s.

Solusi EDA yang diajukan Roze dan Gerber menjawab tantangan ini dengan menyediakan *toolchain* end-to-end yang mencakup: *floorplanning* 3D, optimasi *through-silicon via* (TSV) dan *bump*阵列, verifikasi termo-mekanis, sign-off DRC untuk aturan *hybrid bonding*, dan *power-delivery network* (PDN) co-design. Dalam konteks Teknik Industri, topik ini bukan sekadar persoalan teknologi, melainkan sistem produksi yang menggabungkan *Design-for-Manufacturing* (DFM), *Design-for-Test* (DFT), dan *Design-for-Reliability* (DFR) ke dalam kerangka keputusan multi-kriteria yang harus dikelola oleh insinyur proses, analis rantai pasok, dan manajer program secara simultan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield untuk Chiplet Assembly

Yield total sistem chiplet tidak lagi mengikuti model Munro-Beadle sederhana, melainkan harus memperhitungkan *known-good-die* (KGD) sebagai variabel dependen. Roze dan Gerber (2026) mengusulkan model *compound yield* berikut:

$$Y_{assembly} = \prod_{i=1}^{n} Y_{i}^{KGD} \cdot Y_{bonding} \cdot Y_{interconnect}$$

di mana $Y_{i}^{KGD}$ adalah yield KGD untuk chiplet ke-$i$, $n$ adalah jumlah chiplet aktif, dan $Y_{bonding}$ adalah yield proses *hybrid bonding* yang sangat bergantung pada *bonding misalignment* $\Delta x$.

Probabilitas keberhasilan *hybrid bonding* Cu-Cu dapat dimodelkan dengan distribusi Weibull terhadap parameter kritis *misalignment* $\Delta x$ dan *coplanarity* $\Delta z$:

$$P_{HB}(\Delta x, \Delta z) = \exp\left[-\left(\frac{\Delta x}{\eta_x}\right)^{\beta_x} - \left(\frac{\Delta z}{\eta_z}\right)^{\beta_z}\right]$$

dengan $\eta$ sebagai *scale parameter* dan $\beta$ sebagai *shape parameter*. Untuk *pitch* 10 μm, Lau (2023) melaporkan $\eta_x \approx 1.5\,\mu m$, $\beta_x \approx 3.2$, sementara untuk *pitch* 3 μm yang kini menjadi target, $\eta_x$ turun menjadi ~0.4 μm.

### 2.2 Resistansi Termal pada Stack 3D

Manajemen termal menjadi constraint dominan. Resistansi termal ekuivalen untuk stack $N$ *die* dengan *thermal interface material* (TIM) di antaranya dirumuskan sebagai:

$$\theta_{JA} = \theta_{JC} + \sum_{k=1}^{N-1}\left(\frac{t_{TIM,k}}{k_{TIM,k} \cdot A_{eff,k}}\right) + \theta_{CA}$$

di mana $t_{TIM}$ adalah ketebalan TIM, $k_{TIM}$ adalah konduktivitas termal, dan $A_{eff}$ adalah area efektif perpindahan panas. Untuk stack 8-die dengan TIM $20\,\mu m$ dan $k_{TIM} = 5\,W/m\cdot K$, Roze dan Gerber menghitung $\theta_{JA} \approx 0.42\,K/W$ per watt, turun 65% dibanding *wire-bond* konvensional.

### 2.3 Optimasi Biaya Manufaktur

Fungsi biaya total *chiplet-based system* mengikuti model *cost-of-ownership* (CoO):

$$C_{total} = C_{wafer} \cdot \sum_{i=1}^{n}\frac{A_i}{Y_i \cdot A_{wafer}} + C_{assembly} \cdot n + C_{test} \cdot n + C_{pkg}$$

Roze dan Gerber menunjukkan bahwa dengan partisi optimal sebuah die 600 mm² menjadi 4 chiplet @ 150 mm², biaya wafer turun 28% meskipun *assembly cost* naik 18%, menghasilkan *net cost saving* 14%.

### 2.4 Bandwidth Interconnect

Untuk *hybrid bonding* dengan *pitch* $p$, jumlah interkoneksi per mm² adalah:

$$N_{IO} = \frac{10^6}{p^2}\,\text{I/O per mm}^2$$

Pada pitch 3 μm: $N_{IO} \approx 1.11\times 10^5$/mm²; pada pitch 1 μm (target 2030): $N_{IO} \approx 10^6$/mm². Ini menjelaskan mengapa *hybrid bonding* Cu-Cu menjadi enabler utama *die-to-die* bandwidth >10 TB/s.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan SOP lima-fase untuk integrasi chiplet dalam *toolchain* EDA:

**Fase 1 — System-Level Partitioning.** Analis melakukan dekomposisi fungsi IC (CPU, GPU, IO, SRAM, analog) menjadi blok *chiplet* kandidat berdasarkan *driver file* PPA (Power-Performance-Area). Constraint: setiap chiplet ≤ 200 mm² untuk kompatibilitas *reticle*.

**Fase 2 — Floorplanning 3D & Interconnect Planning.** Tahapan ini menggunakan modul 3D place-and-route dari EDA vendor. Input: *netlist* pasca-partisi, *bump map* pitch (10/3/1 μm), dan *thermal budget*. Output: file GDSII stack dengan layer *hybrid bonding* (Cu-Cu) dan TSV.

**Fase 3 — DRC & LVS Multi-Die.** Verifikasi aturan desain menggabungkan *design rule* dari masing-masing fab (TSMC N5, Samsung 3GAE, Intel 18A) serta aturan integrasi. *Sign-off* L memastikan topologi *hybrid bond* bebas *short* dan *open* pada *misalignment* ±0.5 μm.

**Fase 4 — Thermal-Mechanical Co-Simulation.** Simulasi Coupled FEM-thermal dengan solver Ansys/RedHawk-CDM. Validasi: $\Delta T_{max} \leq 85°C$ pada profil beban AI workload.

**Fase 5 — Tape-Out & WAT Correlation.** Konversi ke format *mask* GDSII+OASIS, kemudian verifikasi *wafer acceptance test* pasca-fabrikasi. SOP ini mengikuti standar JEDEC JEP30 dan IEC 62474 untuk material declaration.

Diagram alir proses: `Netlist → Partition → 3D P&R → DRC/LVS → Thermal Sim → Tape-out → Wafer Fab → KGD Test → Hybrid Bonding → SLT → Ship`.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Desain 3D-IC untuk AI Accelerator (8-Chiplet Stack)**

Spesifikasi: akselerator AI dengan target 2 PFLOPS FP8, TDP 350 W, area total 800 mm². Partisi optimal menurut algoritma Roze-Gerber:

| Chiplet | Fungsi | Area (mm²) | Node | Yield KGD |
|---------|--------|------------|------|-----------|
| Compute-1 | 4× Matrix Unit | 144 | TSMC N3 | 0.82 |
| Compute-2 | 4× Matrix Unit | 144 | TSMC N3 | 0.82 |
| HBM-Base | Memory Controller | 90 | TSMC N5 | 0.91 |
| IO-Die | PCIe Gen6 + I/O | 110 | TSMC N5 | 0.91 |
| Analog | PMIC + Sensor | 60 | TSMC N28 | 0.96 |

**Perhitungan Yield Assembly:**

$$Y_{assembly} = (0.82)^2 \cdot (0.91)^2 \cdot 0.96 \cdot Y_{HB}$$

Untuk *hybrid bonding* dengan $\Delta x_{max} = 0.5\,\mu m$, $\beta_x = 3.2$, $\eta_x = 1.5\,\mu m$:

$$P_{HB} = \exp\left[-\left(\frac{0.5}{1.5}\right)^{3.2}\right] = \exp(-0.046) \approx 0.955$$

Maka $Y_{assembly} = 0.6724 \cdot 0.91 \cdot 0.91 \cdot 0.96 \cdot 0.955 = 0.519 \approx 51.9\%$

**Perhitungan Biaya per Unit:**

Asumsi wafer 300 mm, biaya wafer N3 USD 18.500, N5 USD 13.000:
- Compute chiplet: 144 mm² → 343 dies/wafer → biaya per die = $18.500/(343·0.82) = USD 65,8
- HBM-Base: 90 mm² → 549/wafer → $13.000/(549·0.91) = USD 26,0
- IO-Die: 110 mm² → 449/wafer → $13.000/(449·0.91) = USD 31,8
- Analog: 60 mm² → 824/wafer → USD 850/(824·0.96) ≈ USD 1,1

Biaya wafer total per stack = 2·65,8 + 26,0 + 31,8 + 1,1 = USD 190,5

Tambahkan *assembly cost* 5 chiplet @ USD 8 = USD 40, *test* @ USD 12 = USD 60, *packaging* = USD 55.

$$C_{unit} = \frac{190,5 + 40 + 60 + 55}{0.519} \approx \text{USD 666 per unit (setelah yield)}$$

**Perhitungan Bandwidth:**
8 stack dengan pitch 10 μm, area interkoneksi 6×6 mm = 36 mm²:
$$BW_{total} = 36 \times 1.11\times 10^5 \times 2\,Gb/s = 8.0\,Tb/s \approx 1.0\,TB/s$$

**Interpretasi Manajerial:**
Yield 51,9% mengindikasikan perlunya strategi *redundancy* (1 chiplet cadangan) atau peningkatan $Y_{HB}$ melalui *self-alignment* optimization. Bandwidth 1 TB/s per stack sudah memenuhi syarat untuk inference LLM 70B parameter. Cost-of-good-unit USD 666 memberi margin bruto 64% pada harga jual USD 1.850.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Evaluasi Batasan

Metodologi Roze-Gerber memiliki tiga limitasi utama: (1) ketergantungan pada kualitas model KGD yang sering underestimate *defect clustering*; (2) belum sepenuhnya mengintegrasikan *wafer-scale* testability (IEEE Std 1500); (3) *thermal simulation* mengasumsikan TIM ideal tanpa degradasi *thermal fatigue*. Dibandingkan metode konvensional SoC monolitik, biaya per transistor turun ~22%, namun kompleksitas rantai pasok naik signifikan karena ketergantungan pada 3-5 foundry berbeda.

### 5.2 Aplikasi