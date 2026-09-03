# 1547 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Penduung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari arsitektur *System-on-Chip* (SoC) monolitik menuju paradigma **heterogeneous integration (HI)** berbasis *chiplet* dan *3D-IC*. Pergeseran ini dipicu oleh tiga tekanan simultan yang tidak dapat diabaikan oleh rantai pasok manufaktur elektronik: (1) perlambatan *Moore's Law* yang membuat biaya *node* lanjutan (3 nm/2 nm) melonjak secara eksponensial hingga menyentuh ambang USD 30.000–50.000 per *wafer* (Fab-Economist, 2024); (2) permintaan masif dari pasar *high-performance computing* (HPC), akselerator AI generatif, dan kendaraan otonom terhadap *bandwidth* memori serta *compute density* yang melampaui kapasitas *reticle limit*; serta (3) perlunya *time-to-market* yang lebih pendek melalui重用 IP (*intellectual property*) lintas produk. Ksenia Roze dan Mark Gerber (2026), dalam paper yang disajikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, menegaskan bahwa tanpa **solusi Electronic Design Automation (EDA)** yang matang, transisi arsitektural ini akan mandek di tingkat *proof-of-concept* dan gagal memenuhi target produksi volume. DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563).

Konteks operasional ini diperkuat oleh temuan John H. Lau (2023) yang mendokumentasikan bahwa teknologi **Cu-Cu hybrid bonding** telah menjadi *backbone* fisik dari seluruh ekosistem chiplet modern. Dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)), Lau menjelaskan bahwa pitch *interconnect* telah turun dari 100 µm (generasi flip-chip BGA) menjadi 40 µm (TCB *mass reflow*), dan kini merambah ke 10 µm hingga sub-1 µm pada riset *direct Cu-Cu bonding*. Setiap penurunan pitch satu *order of magnitude* membawa implikasi operasional yang sangat berat bagi *tool* EDA: *routing congestion*, *signal integrity*, *power integrity*, *thermal co-design*, dan *mechanical stress* tidak lagi dapat diselesaikan secara sekuensial, melainkan menuntut co-optimization simultan dalam satu *design closure loop*.

Urgensi ekonominya juga nyata. Sebagai contoh kuantitatif, NVIDIA H100/H200, AMD MI300, dan Intel Ponte Vecchio semuanya mengadopsi arsitektur chiplet dengan *interposer* silikon atau hybrid bonding. Pasar chiplet diproyeksikan mencapai USD 107 miliar pada 2030 (Yole Group, 2024), tumbuh CAGR >40%. Tanpa EDA yang mampu menjamin *first-time-right silicon* pada *die* multi-vendor yang heterogen (logika + HBM + analog/RF + fotonik), investasi *mask set* dan *advanced packaging* menjadi tidak efisien. Oleh karena itu, modul 1547 ini memposisikan diri sebagai tulang punggung teknis untuk memahami bagaimana solusi EDA mengorkestrasi kompleksitas 3D-IC end-to-end.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Densitas Interkoneksi dan Pitch Scaling

Untuk arsitektur chiplet, densitas *I/O* per satuan luas *die* adalah metrik utama yang menentukan apakah sebuah *interposer* atau *bridge* silikon diperlukan. Roze & Gerber (2026) menurunkan formula densitas *bump* efektif sebagai:

$$\rho_{IO} = \frac{N_{bump}}{A_{die}} = \frac{4 \cdot N_{edge}}{P_{pitch}^{2}} \quad \left[\frac{\text{bump}}{\text{mm}^{2}}\right]$$

di mana $N_{edge}$ adalah jumlah *bump* per sisi *edge* dan $P_{pitch}$ adalah *pitch* hybrid bonding. Dengan $N_{edge} = 256$ (standar UCIe Advanced) dan $P_{pitch} = 25~\mu m$, diperoleh $\rho_{IO} = 1{,}638~\text{bump/mm}^{2}$. Jika pitch turun menjadi $10~\mu m$ sesuai target Lau (2023), densitas melonjak menjadi $10{,}240~\text{bump/mm}^{2}$ — peningkatan 6,25×.

### 2.2 Overlay Budget Hybrid Bonding

Akurasi *alignment* pada Cu-Cu hybrid bonding mengikuti *root-sum-square* dari tiga sumber error utama:

$$\epsilon_{overlay} = \sqrt{\epsilon_{tool}^{2} + \epsilon_{align}^{2} + \epsilon_{thermal}^{2}}$$

Untuk memenuhi aturan desain *bump-on-pad* dengan *pad opening* $D_{pad}$ dan toleransi proses $\delta$, harus dipenuhi:

$$3\sigma_{overlay} + \delta \leq \frac{P_{pitch}}{2}$$

Misal: pada $P_{pitch} = 10~\mu m$ dengan $\delta = 1,5~\mu m$, maka $3\sigma_{overlay} \leq 3{,}5~\mu m$, sehingga $\sigma_{overlay,total} \leq 1{,}17~\mu m$. Spesifikasi ini mendorong permintaan terhadap *stepper* lithografi *backside* dan *bond aligner* dengan presisi sub-mikron (Lau, 2023).

### 2.3 Model Termal Stack 3D

Resistansi termal efektif sebuah *stack* 3D *n-tier* diberikan oleh:

$$R_{th,stack} = \sum_{i=1}^{n} \frac{t_{i}}{k_{i} \cdot A_{i}} + R_{th,TIM} + R_{th,HS}$$

dengan $t_i$ adalah tebal layer, $k_i$ konduktivitas termal material, $A_i$ luas efektif, dan $R_{th,TIM}$ resistansi *thermal interface material*. Pada stack dengan $t_{die} = 50~\mu m$, $k_{Si} = 148~\text{W/m·K}$, $A = 100~\text{mm}^2$, kontribusi satu die adalah $R_{th} = 3{,}38 \times 10^{-3}~\text{K/W}$. Penumpukan 8-die memberi total $R_{th,intrinsic} \approx 0{,}027~\text{K/W}$ — mendekati orde resistansi *heat spreader*, mengonfirmasi bahwa *thermal-aware EDA* wajib melakukan *floorplanning* untuk mencegah *hot-spot* terlokalisasi (Roze & Gerber, 2026).

### 2.4 Model Yield Known-Good-Die (KGD)

Yield stack 3D dengan asumsi KGD adalah:

$$Y_{stack} = \prod_{i=1}^{n} Y_{i,KGD}$$

Untuk $n = 8$ die dengan $Y_{KGD} = 0{,}97$ masing-masing, $Y_{stack} = 0{,}97^{8} = 0{,}784$ (78,4%). Bandingkan dengan SoC monolitik pada area setara $A_{mono} = n \cdot A_{die}$ dengan model yield Murphy:

$$Y_{mono} = \left[\frac{1 - e^{-D \cdot A_{mono}}}{D \cdot A_{mono}}\right]^{2}$$

Untuk defect density $D = 0{,}005/\text{cm}^2$ dan $A_{mono} = 8~\text{cm}^2$, yield turun menjadi $\approx 0{,}61$ — menunjukkan *sweet spot* ekonomis chiplet.

### 2.5 Energi per Bit dan Bandwidth Density

Standar UCIe menetapkan target energi per bit:

$$E_{bit} = C_{eff} \cdot V_{swing}^{2} + \alpha \cdot C_{lump}$$

dengan $C_{eff}$ kapasitansi efektif *interconnect*, $V_{swing}$ ayunan tegangan, dan $\alpha C_{lump}$ biaya *clocking*. Target $E_{bit} \leq 0{,}5~\text{pJ/bit}$ pada $V_{swing} = 0{,}3~\text{V}$ membutuhkan $C_{eff} \leq 5{,}6~\text{fF}$, yang hanya dapat dipenuhi oleh hybrid bonding dengan $P_{pitch} \leq 25~\mu m$ (Roze & Gerber, 2026).

---

## 3. Metodologi Rekayasa & SOP EDA untuk Chiplet/3D-IC

Roze & Gerber (2026) mengajukan *framework* EDA 7-tahap untuk menutup *design closure* arsitektur chiplet:

```
┌─────────────────────────────────────────────────────────────┐
│ ① Partitioning & Architecture Exploration                  │
│    → Co-optimization: PPA vs. yield vs. cost vs. thermal  │
│ ② Chiplet-level RTL / Physical Synthesis                   │
│    → Unified power/clock intent across chiplets            │
│ ③ Floorplan-aware Interposer / Bridge Routing              │
│    → RDL congestion-driven, SI-aware                        │
│ ④ 3D Stack Assembly + Hybrid Bonding Interface Planning    │
│    → Pitch allocation, ESD, TSV keep-out zones             │
│ ⑤ Multi-physics Sign-off (Thermal × PI × SI × Mech)       │
│    → Co-simulation: ANSYS/Cadence/Synopsys