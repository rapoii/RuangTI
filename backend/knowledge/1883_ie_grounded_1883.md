# 1883 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki era *post-Moore's Law* di mana penskalaan planar transistor monolitik mendekati batas fisik, ekonomi, dan termal. Roze dan Gerber (2026) dalam paper "EDA Solution for Chiplet and 3D-IC Design" yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menunjukkan bahwa biaya desain wafer monolitik 3 nm telah menembus ambang USD 500 juta, sementara *yield* turun signifikan menjadi 60-70% pada area die di atas 100 mm². Sebagai respons, industri bergerak masif ke arah **heterogeneous integration (HI)** melalui arsitektur chiplet dan *three-dimensional integrated circuits* (3D-IC). Namun, transisi ini memperkenalkan tantangan rekayasa yang belum sepenuhnya ditangani oleh *Electronic Design Automation* (EDA) konvensional.

Roze & Gerber (2026) menekankan bahwa desain chiplet memerlukan *multi-physics co-design* yang mengintegrasikan analisis sinyal, daya, termal, mekanis, dan *manufacturability* dalam satu kerangka kerja EDA. Berbeda dengan desain SoC monolitik, sistem chiplet memiliki *interface* lintas-die yang kompleks, di mana setiap interkoneksi Die-to-Die (D2D) menjadi titik kritis terhadap *latency*, *bandwidth*, dan keandalan. Standar *Universal Chiplet Interconnect Express* (UCIe) menjadi protokol komunikasi dominan, dengan target *bandwidth density* sebesar 1,35 TB/s/mm pada *bump pitch* 10 µm, yang hanya dapat dicapai melalui teknologi **hybrid bonding** Cu-Cu seperti yang diuraikan secara komprehensif oleh John H. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging*.

Lau (2023) mendokumentasikan bahwa hybrid bonding Cu-Cu merevolusi paket semikonduktor dengan menggantikan *solder microbumps* tradisional melalui ikatan metalurgi langsung pada suhu rendah (≤300°C). Pitch interconnect berkurang dari 40-50 µm pada solder bumping menjadi 2-10 µm, menghasilkan peningkatan densitas I/O lebih dari satu urutan magnitudo. Secara ekonomis, pasar chiplet diproyeksikan mencapai USD 100 miliar pada 2030, didorong oleh aplikasi AI accelerator (NVIDIA H100, AMD MI300), komputasi HPC, dan otomotif otonom. Urgensi operasional bagi insinyur Teknik Industri adalah bagaimana mengelola **trade-off** antara kompleksitas desain, biaya kemasan, yield produksi, dan siklus verifikasi yang dapat berlangsung 12-18 bulan. Dokumen modul ini akan membedah solusi EDA holistik yang diperlukan untuk menjawab tantangan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Multi-Die Sistem Chiplet

Yield sistem chiplet yang mengintegrasikan $N$ chiplet berbeda dapat dimodelkan menggunakan asumsi independensi defect per die dan probabilitas kelolosan KGD (*Known Good Die*). Jika $Y_i$ adalah yield individual chiplet $i$, maka yield sistem $Y_s$ diberikan oleh:

$$Y_s = \prod_{i=1}^{N} Y_i$$

Model yield negatif binomial Poisson lebih realistis karena memperhitungkan *clustering defect* pada wafer besar:

$$Y_i = \left(1 + \frac{D_0 \cdot A_i}{\alpha}\right)^{-\alpha}$$

di mana $D_0$ adalah densitas defect (cm⁻²), $A_i$ adalah luas area chiplet $i$ (cm²), dan $\alpha$ adalah *clustering parameter*. Untuk chiplet kecil ($A_i \leq 50$ mm²), yield dapat melebihi 95%, sementara untuk reticle-monolithic die ($A_i \geq 700$ mm²), yield turun drastis (Roze & Gerber, 2026).

### 2.2 Rent's Rule untuk Estimasi I/O Chiplet

Jumlah terminal I/O yang diperlukan antar chiplet mengikuti generalisasi Rent's rule:

$$T = k \cdot N^p$$

dengan $T$ adalah jumlah I/O, $N$ adalah jumlah blok logika (gates), $k$ adalah konstanta Rent, dan $p$ adalah eksponen Rent (umumnya 0,5–0,75). Untuk arsitektur 3D-IC dengan $L$ *stack layer*, jumlah *through-silicon via* (TSV) yang dibutuhkan mengikuti:

$$N_{TSV} = k_{TSV} \cdot (N \cdot L)^{p_{TSV}}$$

Roze & Gerber (2026) melaporkan bahwa pada GPU AI tipikal dengan 80 miliar transistor, kebutuhan *inter-die interconnect* mencapai 10.000-50.000 link, jauh melampaui kemampuan solder microbumps konvensional.

### 2.3 Model Termal 3D-IC

Resistansi termal total untuk stack 3D-IC dengan $L$ layer dapat dimodelkan sebagai jaringan resistor paralel-seri:

$$R_{th,total} = \left[\sum_{l=1}^{L} \frac{1}{R_{th,l}^{-1} + R_{th,TSV,l}^{-1}}\right]^{-1}$$

dengan $R_{th,l} = \frac{t_l}{k_l \cdot A_l}$ untuk setiap layer (ketebalan $t$, konduktivitas termal $k$, luas $A$), dan kontribusi TSV terhadap *spreading thermal resistance*:

$$R_{th,TSV} = \frac{1}{N_{TSV} \cdot k_{Cu} \cdot \frac{\pi d_{TSV}^2}{4 t_{TSV}}}$$

Lau (2023) menunjukkan bahwa dengan hybrid bonding, jarak antar-die berkurang dari 50-100 µm (solder) menjadi 5-10 µm, menurunkan resistansi termal *junction-to-ambient* secara signifikan.

### 2.4 Resistansi Listrik Hybrid Bonding Cu-Cu

Resistansi kontak per *bond pad* pada hybrid bonding Cu-Cu mengikuti:

$$R_c = \frac{\rho_{Cu} \cdot \delta}{A_{pad}} + R_{interface}$$

dengan $\rho_{Cu} = 1,68 \times 10^{-8}$ Ω·m adalah resistivitas tembaga, $\delta$ adalah ketebalan efektif lapisan intermetalik yang terbentuk saat *bonding*, dan $R_{interface}$ adalah resistansi antarmuka Cu-Cu. Lau (2023) melaporkan nilai $R_c$ tipikal 0,3-0,5 Ω per sambungan pada pitch 10 µm, sedangkan solder microbumps pada pitch 40 µm menghasilkan 5-10 mΩ per sambungan namun dengan *pitch* lebih besar dan induktansi parasitik tinggi.

### 2.5 Bandwidth Density UCIe

Bandwidth density $\rho_{BW}$ (TB/s/mm) untuk interface UCIe die-to-die:

$$\rho_{BW} = \frac{f_{clk} \cdot N_{lanes} \cdot W_{bus}}{2 \cdot 10^{12} \cdot p_{pitch}}$$

dengan $f_{clk}$ adalah frekuensi clock, $N_{lanes}$ jumlah lane paralel, $W_{bus}$ lebar bus per lane (bit), dan $p_{pitch}$ pitch antar-bump (mm). Roze & Gerber (2026) menunjukkan bahwa target UCIe 1.0 (32 Gbps) pada pitch 10 µm mencapai $\rho_{BW} \approx 1,6$ TB/s/mm.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur EDA Unified untuk Chiplet/3D-IC

Roze & Gerber (2026) mengusulkan kerangka EDA 5-lapis yang mengintegrasikan seluruh *design closure* dalam satu *flow* digital-twin:

**Lapisan 1: Architectural Co-Design**
- Partisi logika-fisik otomatis menggunakan algoritma *multi-level hypergraph partitioning* (mis. KaFFPa, hMETIS) dengan objective function yang meminimalkan *cut-cost* I/O.
- Optimasi *chiplet selection* dengan Mixed-Integer Linear Programming (MILP) yang mempertimbangkan biaya IP, yield, termal, dan roadmap proses.

**Lapisan 2: Physical Implementation Multi-Die**
- *Floorplanning* 3D dengan constraint termal menggunakan simulated annealing.
- *Placement* chiplet-aware dengan pengurangan *cross-die wirelength* melalui buffer insertion pada *interface block*.

**Lapisan 3: Verification Multi-Physics**
- Static Timing Analysis (STA) hierarkis yang mencakup *chiplet boundary abstraction*.
- Power Integrity Analysis menggunakan reduced-order modeling dari substrate package.
- Electromigration check antar-die sesuai IR-drop target.

**Lapisan 4: Manufacturing & Test**
- DFM (Design-for-Manufacturing) check termasuk pattern density, CMP variation, dan hybrid bonding alignment tolerance (±200 nm).
- Built-In Self-Test (BIST) dan JTAG multi-die boundary scan.

**Lapises 5: System-Level Validation**
- Thermal-mechanical co-simulation (FEA + CFD).
- Signal integrity dengan 3D EM extraction.

### 3.2 SOP Proses Hybrid Bonding Cu-Cu

Berdasarkan Lau (2023), proses fabrikasi hybrid bonding Cu-Cu mengikuti SOP berikut:

1. **Preparasi wafer**: deposisi Cu damascene (damascene/replacement process) pada kedua wafer dengan dishing ≤30 nm dan recess ≤10 nm.
2. **Surface activation**: plasma treatment N₂/H₂ pada suhu ruang untuk menghilangkan native oxide.
3. **Pre-bonding**: alignment wafer-to-wafer pada akurasi ±200 nm, kontak pada suhu ruang.
4. **Anneal bonding**: suhu 250-300°C selama 1-2 jam pada tekanan 50-100 N/cm² dalam atmosfer N₂.
5. **Post-bond metrology**: inspeksi SAM (Scanning Acoustic Microscopy) dan CSAM untuk void detection.

*Critical Process Parameters* (CPP):
- Pitch target: 2-10 µm
- Cu recess optimum: 5-15 nm
- Wafer bow: <50 µm
- Particle contamination: <0,3 µm

### 3.3 Diagram Alir Desain Chiplet

```
[System Spec] → [Chiplet Partition] → [Individual Die P&R] 
     ↓                                          ↓
[UCIe IP Selection] ← [Interface Planning] ← [DFT Insertion]
     ↓
[Multi-Die STA] → [Power/Thermal Co-Sim] → [SI/PI Analysis]
     ↓
[Hybrid Bonding DFM] → [Tape-out] → [Wafer Fab] → [Bonding] → [Package]
     ↓
[Test (KGD)] → [System Integration] → [Qualification]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: GPU Accelerator 3D-IC

Sebuah vendor AI ingin merancang accelerator GPU 3D-IC menggunakan 4 chiplet: 1× logic die (80 mm², 5 nm), 2× HBM3e memory stack (60 mm², 10 nm), dan 1× I/O die (40 mm², 7 nm). Target: bandwidth 5 TB/s, daya total ≤600 W.

**Langkah 1: Estimasi Yield Multi-Die**

Menggunakan $D_0 = 0,15$ cm⁻² dan $\alpha = 2$:
- $Y_{logic} = (1 + \frac{0,15 \times 0,8}{2})^{-2} = (1,06)^{-2} = 0,890$
- $Y_{memory} = (1 + \frac{0,15 \times 0,6}{2})^{-2} = (1,045)^{-2} = 0,915$
- $Y_{IO} = (1 + \frac{0,15 \times 0,4}{2})^{-2} = (1,03)^{-2} = 0,943$

$$Y_s = 0,890 \times 0,915