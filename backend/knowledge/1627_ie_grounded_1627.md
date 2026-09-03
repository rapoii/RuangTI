# 1627 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Verifikasi Multi-Fisika, dan Paradigma Cu-Cu Hybrid Bonding

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi arsitektural fundamental dari paradigma *system-on-chip* (SoC) monolitik menuju ekosistem *chiplet* dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga tekanan simultan yang tidak lagi mampu diakomodasi oleh hukum skalaran Dennard dan kelambanan adopsi proses litografi EUV pada node Sub-3 nm: (i) batas ekonomis *reticle limit* (~858 mm² pada Extreme Ultraviolet), (ii) lonjakan biaya fabrikasi wafer yang melebihi US$ 20 miliar per *fab* Sub-2 nm, dan (iii) fragmentasi proses optimal untuk logika, memori, RF, dan power delivery yang menuntut *process technology co-optimization* (DTCO/STCO) secara heterogen.

Roze dan Gerber (2026) dalam paper "EDA Solution for Chiplet and 3D-IC Design" yang dipublikasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) menyoroti bahwa Electronic Design Automation (EDA) konvensional untuk SoC monolitik tidak lagi memadai untuk menghadapi kompleksitas baru ini. Penulis menegaskan urgensi pengembangan *design flow* terpadu yang mampu melakukan partisi die, *floorplanning* lintas-substrat, *placement-and-routing* tiga-dimensi, serta verifikasi *signal integrity* (SI), *power integrity* (PI), dan termal secara koheren dalam satu kerangka kerja (Roze & Gerber, 2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)).

Secara paralel, Lau (2023) dalam bab "Cu-Cu Hybrid Bonding" dari monografinya *Chiplet Design and Heterogeneous Integration Packaging* menunjukkan bahwa tanpa terobosan interconnect pitch Sub-10 μm melalui *direct copper-to-copper bonding*, heterogenitas arsitektural chiplet tidak akan menghasilkan *bandwidth density* dan efisiensi energi yang dibutuhkan oleh workload HPC, AI accelerator, dan HBM stacking. Cu-Cu hybrid bonding (CB) dengan alignment accuracy ±200 nm dan pitch 3–10 μm dilaporkan mampu menurunkan resistansi kontak per sambungan hingga 0,1–0,3 Ω, sebuah lompatan порядок-besaran (order-of-magnitude) dibanding micro-bump C4 tradisional (Lau, 2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)).

Perspektif rantai pasok industri menunjukkan bahwa pasar *advanced packaging* — yang sebelumnya merupakan "Supporting Cast" terhadap front-end fab — kini menguasai >35% nilai tambah per wafer pada node Sub-5 nm menurut data TSMC dan Intel Foundry. Implikasinya terhadap rekayasa sistem industri adalah fundamental: keputusan *make-or-buy* chiplet, lokasi *assembly*, dan toleransi *bonding* kini menjadi variabel keputusan desain (*design-dependent variables*), bukan lagi variabel pascaproduksi. Artikel ini memformulasi kerangka analitis yang menjembatani literatur EDA dan packaging tersebut dengan lensa Teknik Industri: optimasi biaya total kepemilikan (TCO), keandalan produksi, dan traceability lintas-domain.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal untuk Array TSV (Through-Silicon Via)

Resistansi termal efektif suatu array TSV dengan jumlah $N$ via, diameter $d_v$, pitch $p_v$, dan ketebalan silikon $t_{Si}$ dapat diformulasikan sebagai resistansi paralel terkopling:

$$R_{th,array} = \frac{t_{Si}}{k_{Si} \cdot A_{eff}} \quad \text{dengan} \quad A_{eff} = N \cdot \pi \left(\frac{d_v}{2}\right)^2 + \alpha \cdot (p_v^2 - \pi r_v^2)$$

di mana $k_{Si} \approx 150 \text{ W/m·K}$ adalah konduktivitas termal silikon dan $\alpha \approx 0{,}6$ adalah *coupling factor* antara TSV yang berdekatan. Roze dan Gerber (2026) menekankan bahwa EDA modern harus menyelesaikan *thermal-electrical co-simulation* dengan persamaan konduksi 3D:

$$\nabla \cdot (k(x,y,z) \nabla T(x,y,z)) + q'''(x,y,z) = 0$$

### 2.2 Model Impedansi Power Distribution Network (PDN)

Untuk stack chiplet 3D-IC, impedansi PDN dimodelkan sebagai jaringan RLC terdistribusi:

$$Z_{PDN}(\omega) = \sum_{i=1}^{n_{layer}} \frac{R_{i} + j\omega L_{i}}{1 + j\omega R_{i} C_{i} - \omega^2 L_{i} C_{i}}$$

di mana $n_{layer}$ menyatakan jumlah metal layer stack yang saling terhubung melalui TSV dan microbump/hybrid bond. Target desain adalah mempertahankan $|Z_{PDN}(\omega)| < Z_{target}$ pada rentang frekuensi kritis hingga 10 GHz, dengan margin terhadap *self-resonance* paket bonding.

### 2.3 Model Yield Hybrid Bonding

Sesuai formulasi Lau (2023), yield proses Cu-Cu hybrid bonding dipengaruhi oleh tiga mekanisme kegagalan dominan:

$$Y_{HB} = Y_{align} \cdot Y_{bond} \cdot Y_{electrical}$$

dengan:

- $Y_{align} = \exp\left(-\dfrac{d_{offset}^2}{2\sigma_{align}^2}\right)$ — yield alignment mengikuti distribusi Gaussian;
- $Y_{bond} = 1 - \exp\left(-\dfrac{E_a}{k_B T}\right)$ — yield difusi Cu-Cu mengikuti Arrhenius;
- $Y_{electrical} = \dfrac{1}{1 + R_d / R_{nom}}$ — yield kontak listrik yang bergantung pada resistansi sambungan.

di mana $d_{offset}$ adalah offset misalignment aktual, $\sigma_{align}$ adalah standar deviasi alat bonding, $E_a \approx 1{,}7$ eV adalah energi aktivasi difusi Cu, dan $R_d$ adalah resistansi defek. Untuk target pitch $p = 3\,\mu m$ dan $\sigma_{align} = 200$ nm, yield alignment turun tajam bila offset > 500 nm.

### 2.4 Model Biaya Total Kepemilikan Chiplet

Dari perspektif Teknik Industri, biaya total per sistem adalah:

$$C_{tot} = \sum_{i=1}^{n_{chiplet}} \left( C_{wafer,i} \cdot \dfrac{A_i}{A_{reticle}} + C_{pkg,i} + C_{test,i} + C_{yield,i}(A_i) \right) + C_{integration}$$

dengan model biaya yield klasik $C_{yield,i} = \dfrac{C_{wafer,i}}{Y_i}$ dan $Y_i = e^{-D_0 \cdot A_i}$ (model Poisson). Roze dan Gerber (2026) berargumen bahwa keputusan partisi die harus memenuhi:

$$\dfrac{\partial C_{tot}}{\partial A_i} = 0 \Rightarrow A_i^{*} = \dfrac{1}{D_0} \quad \text{(titik optimum area per chiplet)}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Flow rekayasa sistem untuk desain chiplet dan 3D-IC berbasis EDA modern mengikuti *Standard Operating Procedure* berlapis yang diformalisasikan oleh Roze dan Gerber (2026) ke dalam enam tahap kritis:

```
┌──────────────────────────────────────────────────────────────────┐
│ TAHAP 1: System Specification & Chiplet Partitioning             │
│   • Definisikan functional block, bandwidth budget, power budget │
│   • Algoritma: Multi-objective optimization (MOO) Pareto        │
│   • Tools: System-level model (Matlab/Simulink, Synopsys Platform│
│     Architect, Cadence Optimality)                              │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│ TAHAP 2: Logical-to-Physical Implementation (Single-Die then    │
│          Multi-Die)                                             │
│   • Synthesis → Floorplanning → Placement → CTS → Routing       │
│   • Multi-die: unified database dengan *die boundary* constraint │
│   • Hard-IP placement across reticle field                      │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│ TAHAP 3: 3D Stack Planning & TSV/Bump Synthesis                │
│   • Penentuan face-to-face (F2F) vs face-to-back (F2B) stack    │
│   • TSV generation (keep-out zone, redundancy)                  │
│   • Bump assignment: hybrid bonding vs micro-bump vs hybrid      │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│ TAHAP 4: Multi-Physics Verification                            │
│   • Static Timing Analysis (STA) lintas-die                     │
│   • Signal Integrity (SI): eye diagram, jitter, crosstalk       │
│   • Power Integrity (PI): IR-drop, electromigration             │
│   • Thermal: steady-state & transient dengan boundary condition │
│   • Mechanical: warpage, stress, thermo-mechanical reliability  │
└──────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────────────────────────────────────────────────────┐
│ TAHAP 5: Package-Assembly Co-Design                            │
│   • Substrate routing fan-out                                   │
│   • Interposer / RDL layer synthesis                            │
│   • Thermal