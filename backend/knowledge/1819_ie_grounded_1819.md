# 1819 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Cu-Cu Bonding, dan Optimasi Manufaktur Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma fundamental dari desain *monolithic System-on-Chip* (SoC) menuju arsitektur *disintegrated* berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh beberapa tekanan struktural yang saling berinteraksi. Pertama, biaya litografi *extreme ultraviolet* (EUV) pada node N3 dan N2 telah melonjak melampaui ambang USD 200 juta per *mask set*, sehingga pendekatan *chiplet* yang memungkinkan *reuse* IP blok pada *process node* yang berbeda menjadi semakin menarik secara ekonomi. Kedua, *yield* wafer untuk *die* berukuran besar (>600 mm²) menurun secara eksponensial menurut hukum *Stine*, sehingga memecah *die* menjadi beberapa chiplet kecil yang diintegrasikan secara *heterogeneous integration* (HI) terbukti meningkatkan *manufacturing yield* sistem secara keseluruhan (Roze & Gerber, 2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)).

Konteks operasional yang dibahas oleh Roze dan Gerber (2026) dalam proceeding *ICEP-HBS* menyoroti bahwa solusi *Electronic Design Automation* (EDA) tradisional yang dirancang untuk SoC *monolithic* tidak lagi memadai. Industri memerlukan *toolchain* EDA baru yang mampu menangani *floorplanning* multi-die, verifikasi *bump map*, simulasi *signal integrity* lintas substrat, serta validasi termal 3D secara kohesif. Tanpa kerangka EDA yang terpadu, *time-to-market* akan melambat dan risiko *re-spin* mask yang bernilai miliaran rupiah per iterasi meningkat tajam (Roze & Gerber, 2026).

Dari sisi material dan proses, teknologi *Cu-Cu hybrid bonding* yang dipopulerkan oleh Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) telah muncul sebagai *backbone* fisik dari arsitektur chiplet modern. Berbeda dengan *micro-bump* berbasis solder (Sn-Ag) yang memiliki pitch minimal ~40 μm, *Cu-Cu direct bonding* memungkinkan pitch *interconnect* turun hingga 3–10 μm dengan resistansi kontak yang jauh lebih rendah. Hal ini secara langsung mengurangi *power consumption* per bit yang ditransmisikan antar chiplet serta meningkatkan *bandwidth density*, dua metrik kritis dalam aplikasi *high-performance computing* (HPC), akselerator AI, dan *data center* (Lau, 2023).

Urgensi teknis juga didorong oleh fenomena *memory wall* dan *power wall* yang menghambat peningkatan performa komputasi konvensional. Arsitektur *3D-stacked memory-on-logic* menggunakan chiplet HBM (High Bandwidth Memory) yang di-*stack* di atas chiplet *logic* melalui *hybrid bonding* dilaporkan mampu mencapai bandwidth >1 TB/s dengan efisiensi energi per bit transfer yang 3–5× lebih baik dibandingkan *package-on-package* konvensional. Oleh karena itu, investasi dalam solusi EDA untuk chiplet bukan sekadar tren teknologi, melainkan kebutuhan strategis yang menentukan daya saing industri semikonduktor suatu negara dalam dekade berikutnya (Roze & Gerber, 2026; Lau, 2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Multi-Chiplet

Yield sistem pada integrasi chiplet tidak lagi mengikuti model sederhana *Murphy* atau *Bose-Einstein* untuk *single die*, melainkan harus mempertimbangkan yield individual setiap chiplet, yield proses bonding, dan yield interkoneksi. Roze dan Gerber (2026) mengusulkan kerangka yield kumulatif berikut:

$$Y_{system} = Y_{bonding} \cdot \prod_{i=1}^{N} Y_{chiplet,i} \cdot \prod_{j=1}^{M} Y_{TSV,j}$$

di mana $Y_{chiplet,i}$ adalah yield fabrikasi chiplet ke-$i$, $Y_{TSV,j}$ adalah yield *Through-Silicon Via* ke-$j$, dan $Y_{bonding}$ adalah yield proses *hybrid bonding*. Yield individual chiplet mengikuti model *negative binomial*:

$$Y_{chiplet,i} = \left(1 + \frac{D_0 \cdot A_i}{\alpha}\right)^{-\alpha}$$

dengan $D_0$ sebagai *defect density* (defect/cm²), $A_i$ sebagai luas area chiplet ke-$i$ (cm²), dan $\alpha$ sebagai *clustering parameter*. Untuk chiplet kecil (A < 1 cm²) pada node 5 nm dengan $D_0 \approx 0{,}05$ defect/cm², yield individual bisa mencapai 95–98%, jauh lebih tinggi dibanding *monolithic die* 600 mm² yang yield-nya anjlok di bawah 40%.

### 2.2 Model Termal Jaringan Resistansi 3D-IC

Distribusi suhu dalam struktur 3D-IC dimodelkan sebagai *thermal resistance network* sesuai formulasi compact yang dirujuk Lau (2023):

$$T_{j,max} = T_{a} + \sum_{k=1}^{n} R_{th,k} \cdot P_k$$

dengan $T_{j,max}$ sebagai suhu junction maksimum, $T_a$ sebagai suhu ambient, $R_{th,k}$ sebagai resistansi termal lapisan ke-$k$ (substrat, TIM, heat spreader, heatsink), dan $P_k$ sebagai disipasi daya pada elemen ke-$k$. Untuk *hybrid bonded* stack, resistansi antarmuka Cu-Cu menjadi kritis dan dirumuskan:

$$R_{th,interface} = \frac{t_{Cu}}{k_{Cu} \cdot A_{contact}} + \frac{Ra}{\lambda_{contact}}$$

di mana $t_{Cu}$ adalah ketebalan lapisan Cu, $k_{Cu} \approx 401$ W/m·K adalah konduktivitas termal tembaga, $A_{contact}$ luas kontak efektif, $Ra$ adalah *surface roughness* (nm), dan $\lambda_{contact}$ adalah konduktivitas termal kontak yang sangat bergantung pada kualitas *bonding*.

### 2.3 Model Signal Integrity dan Insertion Loss

Untuk *interconnect* hybrid bonding dengan pitch sangat halus, *insertion loss* saluran transmisi antar chiplet dimodelkan melalui persamaan *RLGC* terdistribusi:

$$\gamma = \sqrt{(R + j\omega L)(G + j\omega C)}$$

di mana $\gamma$ adalah *propagation constant*, $R$ resistansi seri per satuan panjang, $L$ induktansi, $G$ konduktansi parasitik, dan $C$ kapasitansi. Roze dan Gerber (2026) menekankan bahwa pada pitch 3 μm, kapasitansi parasitik $C$ turun signifikan, menurunkan *rise time* dan memungkinkan *data rate* per lane hingga 112 Gbps (PAM4). Redaman (*insertion loss*) pada frekuensi $f$ tertentu:

$$IL(f) = 8{,}686 \cdot \alpha(f) \cdot L_{channel} \quad \text{[dB]}$$

dengan $\alpha(f) = \text{Re}(\gamma)$ sebagai *attenuation constant* dan $L_{channel}$ panjang fisik kanal.

### 2.4 Model Biaya Total Kepemilikan (TCO) Multi-Chiplet

Roze dan Gerber (2026) juga menyajikan formulasi TCO yang membandingkan arsitektur chiplet dengan monolithic:

$$C_{TCO} = C_{mask} + \sum_{i=1}^{N}(C_{wafer,i} + C_{assembly,i} + C_{test,i}) + C_{yield\_loss}$$

di mana $C_{mask}$ adalah biaya mask set gabungan, $C_{wafer,i}$ biaya wafer untuk chiplet-$i$, $C_{assembly,i}$ biaya *hybrid bonding* dan *packaging*, $C_{test,i}$ biaya *known-good-die* (KGD) test, dan $C_{yield\_loss}$ adalah biaya akibat *yield loss* kumulatif. Model ini menjadi dasar keputusan rekayasa apakah arsitektur harus disintegrasi atau tetap monolitik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur EDA Multi-Die End-to-End

Roze dan Gerber (2026) memperkenalkan kerangka EDA berlapis yang terdiri dari tujuh *stage* utama:

1. **Chiplet Library & PDK Generation** — Pembuatan *Process Design Kit* khusus untuk setiap chiplet vendor, termasuk file GDSII abstrak, model Liberty, model termal, dan rule deck DRC/LVS.
2. **Multi-Die Floorplanning** — Penempatan relatif chiplet pada *interposer* atau *silicon bridge*, dengan optimasi multi-obyektif (area, panjang wire, termal, manufacturability).
3. **Bump Map Synthesis & Pitch Optimization** — Penentuan lokasi *micro-bump* atau *hybrid bond pad* sesuai topologi sinyal dan catu daya.
4. **Cross-Die Routing & Signal Integrity Analysis** — Routing sinyal antar chiplet menggunakan *interposer* redistribution layer (RDL) atau *direct hybrid bond*; simulasi *channel loss*, *crosstalk*, dan *eye diagram*.
5. **Thermal-Aware Power Delivery Network (PDN) Synthesis** — Integrasi IR-drop analysis, *decoupling capacitor* sizing, dan prediksi hotspot termal.
6. **DFY/DFT Insertion** — Penambahan *Design-for-Yield* (redundan via, spare rows) dan *Design-for-Testability* (BIST, scan chain, JTAG) pada tingkat chiplet.
7. **Co-Optimization & Sign-off** — Iterasi *timing closure*, *DRC/LVS*, *ERC*, dan verifikasi final sebelum tape-out.

### 3.2 SOP Proses Cu-Cu Hybrid Bonding

Berdasarkan referensi Lau (2023), SOP proses *hybrid bonding* meliputi tahapan dengan parameter kritis sebagai berikut:

| Tahapan Proses | Parameter Kritis | Nilai Tipikal |
|---|---|---|
| Cu Pad Deposition | Thickness uniformity | 200–500 nm ± 5% |
| CMP Planarization | Surface roughness $R_a$ | <0,5 nm |
| Plasma Activation | Surface energy | >40 mJ/m² |
| Alignment & Bonding | Misalignment | <±200 nm (3σ) |
| Annealing | Temperature / Time / Pressure | 300–400 °C / 30–60 min / 50–150 N/cm² |

Diagram alir ringkas:

$$\text{Wafer In} \rightarrow \text{Photo/PECVD} \rightarrow \text{Cu ECD} \rightarrow \text{CMP} \rightarrow \text{Plasma Activation} \rightarrow \text{Dicing} \rightarrow \text{Align \& Bond} \rightarrow \text{Anneal} \rightarrow \text{KGD Test} \rightarrow \text{Package}$$

### 3.3 Standar Industri dan Interoperabilitas

Roze dan Gerber (2026) menekankan pentingnya standar terbuka seperti **UCIe** (Universal Chiplet Interconnect Express) untuk menjamin interoperabilitas chiplet antar vendor. UCIe mendefinisikan protokol fisik, *die-to-die adapter*, dan *compliance test* yang harus dipenuhi agar chiplet dari satu foundry dapat beroperasi dengan chiplet dari foundry lain tanpa *re-design* masif.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain Modul AI Accelerator 4-Chiplet dengan Hybrid Bonding

Misalkan sebuah perusahaan fabless (PT Nusantara Semikonduktor) akan merancang *AI inference accelerator* yang terdiri dari empat chiplet: 1× *compute die* (12 mm × 12 mm, node 5 nm), 2× *HBM3 chiplet* (10 mm × 8 mm), dan 1× *I/O die* (15 mm × 15 mm, node 12 nm). Modul di-*stack* menggunakan *Cu-Cu hybrid bonding* dengan pitch 6 μm.

**Langkah 1: Perhitungan Yield Sistem**

Misalkan $D_0 = 0{,}05$ defect/cm² dan $\alpha = 2$. Luas masing-masing chiplet:

- Compute die: $A_1 = 1{,}2 \times 1{,}2 = 1{,}44$ cm²
- HBM: $A_2 = 1{,}0 \times 0{,}8 = 0{,}80$ cm² (×2)
- I/O die: $A_3 = 1{,}5 \times 1{,}5 = 2{,}25$ cm²

Yield individual:

$$Y_{compute} = \left(1 + \frac{0{,}05 \times 1{,}44}{2}\right)^{-2} = (1{,}036)^{-2} \approx 0{,}931$$

$$Y_{HBM} = \left(1 + \frac{