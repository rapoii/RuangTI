# 2635 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Manufaktur Tingkat Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki era pasca-Morea yang ditandai dengan berakhirnya efisiensi biaya penskalaan planar transistor, sehingga desainer集成电路 (IC) beralih dari pendekatan *System-on-Chip* (SoC) monolitik menuju paradigma *Chiplet* dan *Three-Dimensional Integrated Circuit* (3D-IC). Pergeseran paradigma ini bukan sekadar evolusi teknologi, melainkan transformasi struktural dalam rantai pasok manufaktur semikonduktor yang berdampak langsung pada rekayasa sistem industri modern. Roze dan Gerber (2026) dalam makalah yang disajikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) menyoroti bahwa kompleksitas integrasi heterogen dengan jumlah *die* lebih dari delapan unit, beragam teknologi proses (3 nm, 5 nm, 16 nm, 65 nm), serta kepadatan interkoneksi pitch < 10 μm telah melampaui kapasitas *Electronic Design Automation* (EDA) konvensional yang dirancang untuk SoC monolitik [DOI: 10.23919/icep-hbs69241.2026.11550563].

Urgensi operasional dari perspektif teknik industri berpangkal pada tiga fenomena simultan. Pertama, *design-rule mismatch* antara blok IP pada *process design kit* (PDK) yang berbeda menuntut kerangka kerja EDA baru yang mampu melakukan *co-design* lintas-PDK secara simultan — fitur yang tidak dimiliki oleh platform EDA warisan (legacy). Kedua, biaya fabrikasi masker untuk node 3 nm telah melampaui USD 50 juta per set, sehingga strategi *chiplet* memungkinkan disagregasi fungsional menjadi modul-modul yang lebih kecil dengan yield lebih tinggi. Ketiga, hybrid bonding Cu-Cu yang dipopulerkan oleh Lau (2023) memberikan interkoneksi pitch sub-10 μm dengan resistansi kontak tipikal di bawah 50 mΩ per sambungan dan *thermal conductivity* efektif yang mendekati tembaga padat [DOI: 10.1007/978-981-19-9917-8_6], sehingga menjadi tumpuan performa untuk aplikasi *High-Bandwidth Memory* (HBM), AI accelerator, serta *data-center* SoC.

Secara ekonomis, pasar *heterogeneous integration* diproyeksikan tumbuh dengan CAGR > 12% hingga 2030, sementara kompleksitas desain menyebabkan *time-to-market* untuk SoC 3 nm monolitik menembus 24–30 bulan. Solusi EDA terpadu yang ditawarkan oleh Roze dan Gerber (2026) — yang mencakup platform debug, floorplanning 3D, dan verifikasi termal-mekanis simultan — menjadi *enabler* bagi *Design House* dan *Foundry* untuk mengompresi siklus desain hingga 30–40%. Konteks ini memperkuat posisi rekayasa sistem industri dalam mengorkestrasi sumber daya desain, verifikasi, dan manufaktur secara *co-optimized*, sehingga modul ini sangat relevan bagi spesialis Teknik Industri yang bergerak di bidang *operations research*, *manufacturing systems engineering*, dan *supply chain analytics* untuk semikonduktor tingkat lanjut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya Manufaktur Chiplet

Untuk mengevaluasi kelayakan ekonomi dari disagregasi *chiplet*, kita gunakan model biaya total sistem:

$$C_{total} = \sum_{i=1}^{n} \left( \frac{C_{mask,i} \cdot A_{die,i}}{A_{reticle}^2} \right) + C_{packaging} + C_{test} + C_{integration}$$

di mana $C_{mask,i}$ adalah biaya masker untuk chiplet ke-$i$, $A_{die,i}$ adalah luas *die* chiplet, $A_{reticle}$ adalah luas area reticle standar ($858{,}24\ \text{mm}^2$ pada EUV), $C_{packaging}$ adalah biaya *assembly* hybrid bonding, $C_{test}$ adalah biaya pengujian *Known-Good-Die* (KGD), dan $C_{integration}$ adalah biaya verifikasi lintas-chiplet.

### 2.2 Model Yield Kumulatif untuk Integrasi Multi-Chiplet

Yield keseluruhan sistem tergantung pada yield individual chiplet dan yield proses integrasi:

$$Y_{system} = \prod_{i=1}^{n} Y_{die,i} \cdot Y_{bonding} \cdot Y_{KGD}$$

Formula yield individual chiplet mengikuti model negatif-binomial (Stapper):

$$Y_{die,i} = \left(1 + \frac{D_0 \cdot A_{die,i}}{c}\right)^{-c}$$

di mana $D_0$ adalah cacat per satuan luas (defect density, tipikal 0,05–0,15 /cm² untuk node成熟) dan $c$ adalah *clustering parameter* (umumnya $c = 2$ untuk proses成熟). Yield *hybrid bonding* Cu-Cu dapat dimodelkan sebagai:

$$Y_{bonding} = \exp\left(-\lambda \cdot N_{bumps}\right)$$

di mana $\lambda$ adalah *bump failure rate* (tipikal 1–5 ppm untuk Cu-Cu hybrid bonding pada pitch 10 μm menurut Lau, 2023) dan $N_{bumps}$ adalah jumlah *bump*.

### 2.3 Resistansi Termal Jaringan Thermal 3D-IC

Untuk stack 3D-IC dengan $k$ lapisan aktif dan satu *interposer*, model resistansi termal ekuivalen:

$$R_{th,total} = \sum_{j=1}^{k} \frac{t_j}{k_j \cdot A_j} + R_{th,TIM} + R_{th,heat-spreader}$$

di mana $t_j$ adalah ketebalan lapisan ke-$j$, $k_j$ adalah konduktivitas termal efektif (termasuk efek *thermal boundary resistance* TBR pada antarmuka hybrid bonding yang dilaporkan Lau sekitar $1{-}3\ \text{m}^2\cdot\text{K}/\text{W}$ per sambungan Cu-Cu), dan $A_j$ adalah luas efektif disipasi. Suhu *junction*:

$$T_j = T_{ambient} + P_{diss} \cdot R_{th,total}$$

### 2.4 Optimasi Pitch Hybrid Bonding

Luas penampang sambungan Cu-Cu terhadap pitch $p$:

$$A_{bond} = \left(\frac{p}{2}\right)^2 \pi \cdot \eta_{area}$$

dengan $\eta_{area}$ adalah *bonding area ratio* (target ≥ 0,85 pada pitch 10 μm). Resistansi kontak DC mengikuti:

$$R_{contact} = \frac{\rho_{Cu}}{t_{Cu}} \cdot \frac{1}{N_{bumps}} \cdot f(\eta_{area})$$

di mana $\rho_{Cu} = 1{,}68\ \mu\Omega\cdot\text{cm}$, $t_{Cu}$ adalah tebal *copper pad*, dan $f(\eta_{area})$ adalah faktor koreksi yang memperhitungkan *misalignment* dan rongga (*void*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Kerja EDA untuk Chiplet (Berdasarkan Roze & Gerber, 2026)

Platform EDA modern untuk chiplet dan 3D-IC mengimplementasikan *co-design framework* dengan urutan sebagai berikut:

```
┌────────────────────────────────────────────────────────────┐
│ FASE 1: System Specification & Architecture Partitioning  │
│  • Define functional blocks & process node mapping         │
│  • Cost-yield-thermal co-optimization                     │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│ FASE 2: Multi-PDK Co-Design & Synthesis                   │
│  • Cross-PDK RTL synthesis & place-and-route               │
│  • Inter-chiplet interface synthesis (UCIe, BoW, XSR)     │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│ FASE 3: 3D Floorplanning & Routing                        │
│  • Z-axis stacking optimization                            │
│  • TSV / hybrid bond placement                             │
│  • Power delivery network (PDN) co-design                 │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│ FASE 4: Multi-Physics Verification                        │
│  • Thermal-mechanical-electrical co-simulation             │
│  • Signal integrity (SI) & power integrity (PI)            │
│  • Electromigration & TDDB analysis                        │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│ FASE 5: Sign-off & Tape-out Orchestration                 │
│  • Unified DRC/LVS across multi-vendor PDK                │
│  • Yield analysis & DFM sign-off                          │
└────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Fabrikasi Hybrid Bonding Cu-Cu (Berdasarkan Lau, 2023)

1. **Preparasi Wafer**: *Chemical-mechanical polishing* (CMP) untuk mencapai *surface roughness* Ra < 0,5 nm pada permukaan Cu; *surface activation* menggunakan plasma N₂/H₂ atau asam format.
2. **Metrologi**: Pengukuran *copper recess*, *dishing*, dan *erosion* dengan AFM dan profilometri; target keseragaman < 5 nm pada wafer 300 mm.
3. **Alignment & Bonding**: *Wafer-to-wafer* alignment dengan akurasi < 200 nm (3σ); bonding pada suhu ruang dengan tekanan 150–250 MPa, diikuti *annealing* pada 200–400°C selama 30–60 menit di lingkungan N₂.
4. **Kontrol Proses**: Monitoring parameter *bonding temperature*, *pressure ramp*, *dwell time*, dan *post-bond anneal atmosphere*; implementasi *statistical process control* (SPC) dengan Cpk > 1,33.
5. **Inspeksi & Pengujian**: *Scanning acoustic microscopy* (SAM) untuk deteksi rongga, *dye penetration test*, dan four-point probe untuk verifikasi resistansi kontak tipikal < 50 mΩ per sambungan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: AI Accelerator 3D-IC dengan 4 Chiplet

**Skenario**: Sebuah startup AI merancang akselerator dengan 4 *chiplet* logika (compute) pada node 5 nm dan 1 *base die* pada node 16 nm, diintegrasikan melalui hybrid bonding Cu-Cu pada pitch 10 μm.

**Parameter Input**:
- Luas *die* logika: $A_{die,logic} = 100\ \text{mm}^2$ (4 unit)
- Luas *base die*: $A_{base} = 400\ \text{mm}^2$
- Biaya masker 5 nm: $C_{mask,5nm} = 50\ \text{USD-juta}$
- Biaya masker 16 nm: $C_{mask,16nm} = 12\ \text{USD-juta}$
- Defect density 5 nm: $D_{0,5nm} = 0{,}12\ \text{cm}^{-2}$; $c = 2$
- Defect density 16 nm: $D_{0,16nm} = 0{,}05\ \text{cm}^{-2}$; $c = 2$
- Bump failure rate Cu-Cu hybrid: $\lambda = 3\ \text{ppm}$
- Jumlah sambungan per chiplet: $N_{bumps} = 10{,}000$
- Yield KGD: $Y_{KGD} = 0{,}98$

**Perhitungan Step-by-Step**:

**Langkah 1**: Hitung yield individual chiplet logika (5 nm):
$$Y_{die,5nm} = \left(1 + \frac{0{,}12 \times 100\ \text{mm}^2 \times 10^{-2}\ \text{cm}^2/\text{mm}^2}{2}\right)^{-2} = (1 + 0{,}06)^{-2} = 0{,}890$$

**Langkah 2**: Hitung yield base die (16 nm):
$$Y_{base} = \left(1 + \frac{0{,}05 \times 400 \times 10^{-2}}{2}\right)^{-2