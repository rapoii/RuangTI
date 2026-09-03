# 2811 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimisasi Rekayasa Sistem Mikroelektronika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigma yang fundamental dari pendekatan *monolithic system-on-chip* (SoC) menuju arsitektur *chiplet* dan *three-dimensional integrated circuit* (3D-IC). Menurut Roze dan Gerber (2026, DOI: 10.23919/icep-hbs69241.2026.11550563), transisi ini dipicu oleh tiga tekanan struktural simultan yang tidak lagi mampu dipecahkan oleh pendekatan konvensional. Pertama, *node* teknologi CMOS mendekati batas fisik penskalaan planar (*planar scaling limit*) di mana biaya litografi *extreme ultraviolet* (EUV) melonjak secara non-linear mendekati *node 2 nm dan 1,4 nm*. Kedua, *yield* wafer pada die berukuran besar (>600 mm²) turun secara eksponensial sehingga menurunkan efisiensi biaya per transistor fungsional. Ketiga, meningkatnya diversifikasi beban kerja komputasi (AI training, inferensi *edge*, HPC, otomotif otonom) menuntut heterogenitas material—seperti logika CMOS先进, HBM, photonic I/O, dan MEMS—yang tidak dapat di-monolithize-kan pada satu *process node* yang sama.

Lau (2023, DOI: 10.1007/978-981-19-9917-8_6) menekankan bahwa arsitektur chiplet, dengan *die* kecil yang diproduksi secara independen lalu diintegrasikan melalui *interposer*, *bridge*, atau *stacking* vertikal, memungkinkan yield die naik secara dramatis karena mengikuti model yield negatif binomial:

$$Y_{die} = \left(1 + \frac{D \cdot A_0}{c}\right)^{-c}$$

di mana $Y_{die}$ adalah *die yield*, $D$ adalah *defect density* (defect/cm²), $A_0$ adalah luas area die aktif (cm²), dan $c$ adalah *cluster parameter*. Untuk sebuah reticle 25×25 mm² dengan $D=0{,}1$ cm⁻² dan $c=2$, *yield* turun di bawah 30%; sementara memecahnya menjadi 4 *chiplet* 12,5×12,5 mm² meningkatkan *yield* menjadi >70% (Lau, 2023). Implikasi ekonominya adalah *cost-per-good-die* turun signifikan, yang menjadi justifikasi bisnis utama adopsi chiplet.

Namun, desain chiplet dan 3D-IC menimbulkan tantangan EDA yang sangat berbeda dengan desain SoC monolitik. Roze dan Gerber (2026) mengidentifikasi empat tantangan inti: (1) *partitioning* fisik-logis multi-die yang harus mengoptimalkan *thermal*, *timing*, *power*, dan *signal integrity* secara simultan; (2) standarisasi *die-to-die interconnect* (misalnya UCIe, BoW) yang membutuhkan verifikasi protokol fisik dan logika secara koheren; (3) manajemen *thermal* 3D di mana *power density* lokal dapat melebihi 100 W/cm²; dan (4) verifikasi *package-PCB-system* secara holistik karena parasitik *package* kini sebanding dengan parasitik *on-chip*. Konteks industri menunjukkan urgensi operasional: pasar chiplet diproyeksikan mencapai USD 105,4 miliar pada 2030 dengan CAGR >38%, sehingga kapabilitas EDA menjadi *bottleneck* strategis yang menentukan kelayakan produk generasi berikutnya.

## 2. Landasan Teori & Formulasi Matematis

Solusi EDA untuk chiplet dan 3D-IC membutuhkan fondasi matematis yang menggabungkan teori *graph partitioning*, optimisasi multi-objektif, dan model elektro-termal. Roze dan Gerber (2026) merumuskan masalah *chiplet partitioning* sebagai masalah optimisasi:

$$\min_{\mathbf{x}} \left[ \alpha \cdot C_{\text{comm}}(\mathbf{x}) + \beta \cdot C_{\text{thermal}}(\mathbf{x}) + \gamma \cdot C_{\text{fab}}(\mathbf{x}) \right]$$

dengan *constraint*:

$$\sum_{i \in \text{die}_k} x_i \leq A_{\max}, \quad \forall k \in \{1, 2, \ldots, K\}$$

di mana $\mathbf{x}$ adalah vektor *bipartition* yang menentukan penempatan setiap IP (*intellectual property block*) ke salah satu dari $K$ *chiplet*; $C_{\text{comm}}$ adalah biaya komunikasi antar-die yang sebanding dengan jumlah dan lebar *interconnect*; $C_{\text{thermal}}$ adalah biaya termal; $C_{\text{fab}}$ adalah biaya fabrikasi yang bergantung pada jumlah mask-layer dan *node* teknologi; sementara $\alpha, \beta, \gamma$ adalah bobot preferensi desain. Batasan $A_{\max}$ merepresentasikan *reticle size limit* (umumnya ~858 mm² untuk *exposure field* EUV modern).

Komponen biaya komunikasi dimodelkan melalui total *bandwidth* antar-die yang dibutuhkan:

$$C_{\text{comm}} = \sum_{e \in E_{\text{inter}}} w_e \cdot d_e$$

dengan $w_e$ adalah *bandwidth requirement* (Gb/s) untuk *edge* $e$ yang melintasi batas *chiplet*, dan $d_e$ adalah *latency penalty* yang proporsional terhadap jarak fisik *die-to-die interconnect*.

Untuk interkoneksi Cu-Cu hybrid bonding yang menjadi tulang punggung 3D-IC, Lau (2023) menurunkan model resistansi kontak sebagai:

$$R_{\text{contact}} = \frac{\rho_{\text{Cu}}}{t_{\text{bond}}} \cdot \frac{1}{N_{\text{bump}} \cdot A_{\text{bump}}}$$

di mana $\rho_{\text{Cu}} = 1{,}68 \times 10^{-8}$ Ω·m adalah resistivitas tembaga, $t_{\text{bond}}$ adalah ketebalan lapisan difusi pasca-bonding (umumnya 50–200 nm), $N_{\text{bump}}$ adalah jumlah *bump* per milimeter persegi, dan $A_{\text{bump}}$ adalah luas penampang setiap *bump*. Dengan pitch *bonding* 10 μm, Lau (2023) melaporkan $R_{\text{contact}}$ efektif <5 mΩ per *bump*, memungkinkan *interconnect* ~10⁶ koneksi per cm².

Dari perspektif termal, *thermal resistance* paket 3D dimodelkan dengan *Foster network* atau *Cauer network*:

$$\theta_{JA} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i}$$

di mana $\theta_{JA}$ adalah *thermal resistance junction-to-ambient* (K/W), $t_i$ dan $k_i$ berturut-turut adalah ketebalan dan konduktivitas termal lapisan ke-$i$ (TIM1, *heat spreader*, TIM2, *heatsink*), dan $A_i$ adalah luas efektif setiap lapisan. Suhu *junction* kritis dijaga pada:

$$T_j = T_a + P_{\text{total}} \cdot \theta_{JA} \leq T_{j,\max}$$

dengan $T_a$ suhu ambient, $P_{\text{total}}$ disipasi total, dan $T_{j,\max} \leq 85°C$ untuk aplikasi server dan ≤125°C untuk otomotif grade-0.

Analisis *signal integrity* pada *interconnect* chiplet panjang memerlukan model *transmission line*:

$$Z_0 = \sqrt{\frac{L}{C}}, \quad v_p = \frac{1}{\sqrt{LC}}$$

dengan $Z_0$ impedansi karakteristik, $L$ induktansi per satuan panjang, $C$ kapasitansi per satuan panjang, dan $v_p$ kecepatan propagasi. Pada *substrate* organik dengan $L \approx 0{,}4$ nH/mm dan $C \approx 0{,}15$ pF/mm, $Z_0 \approx 52$ Ω mendekati standar *single-ended* 50 Ω.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan alur kerja EDA terintegrasi yang mencakup tujuh tahap. Tahap pertama adalah *system-level architecture exploration* di mana desainer menetapkan *workload partitioning* menggunakan platform seperti Synopsys 3DIC Compiler atau Cadence Integrity 3D-IC. Tahap kedua adalah *RTL-to-GDSII* dengan *chiplet-aware synthesis* yang menggunakan *unified power format* (UPF) untuk mendefinisikan *power domain* lintas-die. Tahap ketiga adalah *physical implementation* dengan co-optimization *floorplan* top-die dan bottom-die secara simultan, dibantu oleh algoritma *simulated annealing* atau *genetic algorithm*.

Tahap keempat adalah *interconnect planning* yang mencakup penentuan *bump pitch*, *redistribution layer* (RDL), dan *through-silicon via* (TSV) untuk *signal*, *power*, dan *ground*. Lau (2023) menekankan pentingnya proses *Cu-Cu hybrid bonding* pada fase ini: permukaan Cu disiapkan dengan aktivasi plasma Ar/N₂ pada energi 100–500 eV, lalu *thermocompression bonding* dilakukan pada suhu 200–300°C dengan tekanan 50–150 MPa selama 30–60 menit dalam lingkungan *forming gas* (N₂/H₂). Tahap kelima adalah verifikasi multi-fisika: DRC (*design rule check*), LVS (*layout versus schematic*), *static timing analysis* (STA) dengan model parasitik *interposer*, dan *thermal-electrical co-simulation* menggunakan Finite Element Method (FEM). Tahap keenam adalah *design-for-test* (DFT) yang mencakup *boundary scan* (IEEE 1149.1/1149.6), *built-in self-test* (BIST) untuk memori HBM, dan *die-to-die loopback test*. Tahap ketujuh adalah *sign-off* termasuk *power integrity* (IR-drop analysis), *electromigration*, dan *signal integrity* pada frekuensi *Nyquist* hingga 32 GHz untuk aplikasi PCIe Gen6 dan UCIe.

SOP operasional di industri mengikuti struktur *gate-review*: G0 *spec freeze*, G1 *architecture freeze*, G2 *RTL freeze*, G3 *layout freeze*, G4 *tape-out*. Setiap *gate* memiliki metrik kelulusan seperti *timing closure*, *IR-drop* ≤ 5%, dan *thermal margin* ≥ 10°C.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Desain akselerator AI 144-TOPS yang terdiri dari 4 *chiplet* logika 7 nm (masing-masing 8×8 mm²) dan 1 *chiplet* HBM3e 12-Hi stack pada *interposer* silikon organik.

**Langkah 1 — Yield Modeling.** Defect density lini 7 nm tipikal $D = 0{,}08$ cm⁻², cluster parameter $c = 1{,}5$. Untuk satu die monolitik 26×26 mm² ($A_0 = 6{,}76$ cm²):

$$Y_{\text{mono}} = \left(1 + \frac{0{,}08 \times 6{,}76}{1{,}5}\right)^{-1{,}5} = (1 + 0{,}361)^{-1{,}5} = 0{,}661^{-1{,}5} \approx 0{,}523$$

Untuk satu chiplet 8×8 mm² ($A_0 = 0{,}64$ cm²):

$$Y_{\text{chiplet}} = \left(1 + \frac{0{,}08 \times 0{,}64}{1{,}5}\right)^{-1{,}5} = (1{,}034)^{-1{,}5} \approx 0{,}951$$

Dengan 4 chiplet independen, *effective yield system* $= 1 - (1 - 0{,}951)^4 \approx 0{,}9998$. Peningkatan ini mentranslasikan menjadi penghematan biaya manufaktur signifikan.

**Langkah 2 — Interconnect Budget Cu-Cu Hybrid Bonding.** Pitch *bonding* dipilih $p = 10$ μm. Jumlah *bump* per mm²:

$$N_{\text{bump}} = \frac{1}{p^2} = \frac{1}{(10 \times 10^{-3})^2} = 10^4 \text{ bump/mm}^2$$

Untuk area inter-die 8×8 mm² = 64 mm², total *bump* = 640.000. Resistansi kontak efektif dengan $t_{\text{bond}} = 100$ nm dan $A_{\text{bump