# 2171 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi arsitektural paling signifikan sejak diperkenalkannya *System-on-Chip* (SoC) monolitik, yaitu pergeseran menuju **heterogeneous integration (HI)** melalui paradigma *chiplet* dan *3D-IC*. Roze dan Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menekankan bahwa batas penskalaan node CMOS—yang kini menyentuh ambang 2 nm/18 Å—tidak lagi mampu menekan biaya *wafer* secara ekonomis; biaya mask-set sebuah *leading-edge SoC* sudah melampaui US$ 500 juta, sementara *yield* turun drastis pada area die >600 mm². Solusinya bukan memperbesar *die*, melainkan **mendekomposisi fungsi kompleks menjadi beberapa *chiplet*** yang masing-masing difabrikasi pada *process node* optimalnya, lalu diintegrasikan dalam satu paket melalui *interposer*, *bridge*, atau *direct hybrid bonding*.

Urgensi operasional ini bersifat multidimensional. Dari perspektif **ekonomi**, biaya total kepemilikan (*total cost of ownership*) turun 30–40% ketika sebuah SoC AI accelerator 800 mm² dipecah menjadi empat *chiplet* 200 mm² pada node yang berbeda, sebagaimana dilaporkan dalam studi industri terbaru yang dirujuk Roze & Gerber. Dari perspektif **teknis**, integrasi vertikal 3D melalui *Through-Silicon Via* (TSV) dan *Cu-Cu hybrid bonding* memungkinkan bandwidth memori HBM3/HBM4 mencapai 1 TB/s per *stack*, menjawab瓶颈 komputasi AI generatif dan HPC. Dari perspektif **manufaktur**, konsep *Known-Good-Die* (KGD) menjadi prasyarat karena satu *chiplet* cacat dapat menggagalkan seluruh paket bernilai ribuan dolar—menjadikan strategi *test*, *repair*, dan *redundancy* sebagai variabel keputusan kritis.

Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) mempertegas bahwa *Cu-Cu hybrid bonding* dengan *pitch* <3 µm telah menjadi *backbone* integrasi densitas-tinggi, menggantikan *micro-bump* solder tradisional yang terbatas pada *pitch* ~40 µm. Kombinasi kedua paper ini membentuk kerangka utuh: bagaimana *tool* EDA merancang, memverifikasi, dan menandatangani (*sign-off*) sistem chiplet 3D—serta bagaimana proses fisik *Cu-Cu bonding* menentukan约束 desain di tingkat *layout*. Bagi insinyur industri, memahami keterkaitan ini krusial karena keputusan *partitioning* arsitektur di fase *early design* akan menentukan utilisasi lini *packaging*, biaya *NRE*, dan *time-to-market* yang menjadi KPI utama di era *post-Moore*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield dan Reliabilitas Chiplet

Roze dan Gerber (2026) mengadopsi **model yield komponensial negatif binomial** untuk menggambarkan probabilitas kelolosan KGD pada populasi *chiplet*:

$$Y_{KGD} = \left(1 + \frac{D \cdot A_{die}}{c}\right)^{-c}$$

di mana $A_{die}$ adalah luas *die* (mm²), $D$ adalah *defect density* (defect/cm²), dan $c$ adalah *cluster parameter*. Untuk paket *multi-chiplet*, *bond yield* Cu-Cu menurut Lau (2023) mengikuti persamaan:

$$Y_{bond} = Y_0 \cdot e^{-\lambda \cdot N_{bonds}}$$

dengan $Y_0$ adalah *baseline yield* (tanpa cacat), $\lambda$ adalah *failure rate* per sambungan, dan $N_{bonds}$ adalah jumlah total *bond pad*. Pada *pitch* 2 µm dengan paket berisi 50.000 sambungan, $\lambda$ harus dijaga di bawah $10^{-6}$ agar $Y_{bond} > 95\%$.

### 2.2 Resistansi Listrik TSV dan Interkoneksi

Resistansi DC sebuah TSV silinder diberikan oleh:

$$R_{TSV} = \frac{\rho_{Cu} \cdot L_{TSV}}{\pi \cdot (r_{TSV}^2 - r_{barrier}^2)} + R_{contact}$$

dengan $\rho_{Cu} \approx 1.68 \times 10^{-8}$ Ω·m, $L_{TSV}$ adalah kedalaman TSV (umumnya 50–100 µm), dan $r_{TSV}$ radius efektif. Untuk Cu-Cu hybrid bonding pada *pitch* $p$, kapasitansi sambungan dapat diminimalkan melalui:

$$C_{bond} = \varepsilon_0 \varepsilon_r \frac{A_{pad}}{d_{effort}}$$

di mana $d_{effort}$ adalah *effective dielectric spacing* yang pada *bonding* modern hanya 200–500 nm—menghasilkan $C_{bond}$ dalam skala femto-farad yang esensial untuk sinyal GHz.

### 2.3 Model Termal 3D-Stack

Roze & Gerber (2026) menurunkan *thermal resistance* tumpukan 3D melalui analogi resistansi seri:

$$\theta_{JA} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i}$$

dengan $t_i$ adalah ketebalan lapisan ke-$i$, $k_i$ konduktivitas termal, dan $A_i$ luas efektif. Untuk *chiplet* aktif di atas *interposer* silikon, hambatan termal didominasi oleh *thermal interface material* (TIM) yang dapat dimodelkan:

$$\theta_{TIM} = \frac{BLT_{TIM}}{k_{TIM} \cdot A_{die}}$$

di mana $BLT$ (*bond line thickness*) harus diminimumkan <20 µm untuk $k_{TIM} > 3$ W/m·K.

### 2.4 Optimasi Biaya Lintas-Node

Fungsi obyektif desain chiplet dalam perspektif *industrial engineering*:

$$C_{total} = \sum_{j=1}^{m} \left(C_{fab,j} + C_{pack,j} + C_{test,j}\right) + C_{integration}$$

dengan kendala *performance*, *power*, *area* (PPA) dan *yield* agregat $\geq Y_{threshold}$. Roze & Gerber menunjukkan bahwa *partitioning* optimal terjadi ketika:

$$\frac{\partial C_{total}}{\partial A_j} = 0 \quad \forall j \in \{1,\dots,m\}$$

menghasilkan *die size* keseimbangan *trade-off* biaya *wafer* versus *yield loss*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan **alur EDA 5-tahap** untuk desain chiplet/3D-IC yang menjadi acuan prosedural:

**Tahap 1: Architectural Partitioning.** Analisis *workload* dan *datapath* untuk menentukan batas *chiplet*—misalnya memisahkan *logic die*, *I/O die*, *memory die*, dan *analog/RF die*. Keputusan ini harus memperhitungkan *thermal coupling* dan *signal integrity* antar-*die*.

**Tahap 2: Unified Floorplanning & Placement.** Berbeda dengan *flat SoC*, EDA modern harus menangani *bump grid*, *TSV array*, dan *RDL routing* secara simultan. Algoritma *simulated annealing* dengan fungsi biaya gabungan:

$$\Phi = w_1 \cdot W_{wire} + w_2 \cdot A_{total} + w_3 \cdot \theta_{JA}^{-1} + w_4 \cdot (1-Y_{KGD})$$

di mana bobot $w_i$ disesuaikan oleh *designer* berdasarkan prioritas (performa vs. biaya vs. termal).

**Tahap 3: Multi-Die Sign-off.** Verifikasi lintas-die termasuk DRC (*Design Rule Check*) hybrid—menggabungkan aturan *foundry* masing-masing *chiplet* dengan aturan *assembly house* (pitch *bump*, warpage, CTE mismatch). Lau (2023) menekankan verifikasi khusus untuk *Cu-Cu bonding*: toleransi misalignment $\sigma_{xy} < 0.5$ µm pada pitch 2 µm, serta *coplanarity* <2 µm seluruh permukaan *wafer*.

**Tahap 4: Thermal-Mechanical Co-Simulation.** Simulasi FEM (*Finite Element Method*) untuk menganalisis *stress* akibat CTE mismatch pada saat *reflow* atau operasi. Parameter kunci: $E_{Cu} = 110$ GPa, $E_{Si} = 130$ GPa, koefisien ekspansi termal Si = 2.6 ppm/°C versus Cu = 17 ppm/°C. *Underfill* dan *TIM* dipilih untuk meredam $\Delta CTE$.

**Tahap 5: Test, Repair & Yield Management.** Penerapan *Built-In Self-Test* (BIST), *redundant rows/columns* di memori, dan strategi *known-good-die* pra-*integration*. Roze & Gerber (2026) merinci bahwa standar industri saat ini mengikuti **IEEE Std 1838** untuk *test access architecture* 3D-IC, memastikan *testability* tiap *die* sebelum *stacking*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Desain Accelerator AI 4-Chiplet dengan HBM4**

Sebuah *startup* AI merancang *accelerator* dengan empat *chiplet* komputasi (masing-masing 150 mm² pada node 3 nm) terintegrasi dengan 8 *stack* HBM4 melalui *Cu-Cu hybrid bonding* di atas *interposer* silikon 60×60 mm.

**Input parameter industri:**
- $A_{die,logic}$ = 150 mm² per *chiplet*; jumlah = 4
- $A_{die,HBM}$ = 80 mm² per *stack*; jumlah = 8
- Node fabrikasi *logic*: 3 nm ($D$ = 0.08 defect/cm², $c$ = 3)
- *Pitch* Cu-Cu: 2.5 µm
- $N_{bonds}$ per *logic-HBM interface* = 25.000

**Langkah 1: Perhitungan KGD per Chiplet Logic**

$$Y_{KGD} = \left(1 + \frac{0.08 \times 1.5}{3}\right)^{-3} = (1 + 0.04)^{-3} = (1.04)^{-3} \approx 0.889$$

Artinya, ~88.9% *die logic* lolos KGD. Untuk keempatnya (probabilitas independen):

$$Y_{4\chi} = 0.889^4 \approx 0.624$$

**Langkah 2: Bond Yield Cu-Cu**

Dengan $\lambda = 5 \times 10^{-7}$ (asumsi proses matang pada *pitch* 2.5 µm) dan $N_{bonds} = 25.000$:

$$Y_{bond} = 1.0 \cdot e^{-5 \times 10^{-7} \times 25.000} = e^{-0.0125} \approx 0.9876$$

**Langkah 3: Yield Agregat Paket**

Menggabungkan KGD, bond yield, dan asumsi yield *assembly* 99%:

$$Y_{paket} = Y_{4\chi} \times Y_{bond,8HBM} \times Y_{assy}$$

Untuk 8 *HBM stack* dengan asumsi yield HBM individual 95%:

$$Y_{HBM,8} = 0.95^