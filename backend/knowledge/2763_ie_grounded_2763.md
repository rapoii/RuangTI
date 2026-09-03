# 2763 — Perancangan EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding Cu-Cu, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma fundamental dari arsitektur *System-on-Chip* (SoC) monolitik menuju paradigma *heterogeneous integration* berbasis chiplet dan *3D Integrated Circuit* (3D-IC). Pergeseran ini dipicu oleh berakhirnya *Moore's Law* dalam hal miniaturisasi transistor secara ekonomis, di mana biaya desain dan fabrikasi untuk *node*先进 (3 nm ke bawah) melonjak secara eksponensial—dikenal sebagai fenomena "*design cost cliff*". Sebagaimana ditegaskan oleh Roze dan Gerber (2026) dalam proceeding ICEP-HBS, solusi EDA (*Electronic Design Automation*) yang mumpuni menjadi *enabler* strategis untuk melakukan dekomposisi SoC kompleks menjadi beberapa chiplet yang kemudian diintegrasikan kembali dalam kemasan tingkat lanjut (*advanced packaging*).

Konteks industri riil menunjukkan urgensi yang tidak dapat ditunda. Pertama, dari sisi **ekonomi**: biaya *mask set* untuk *node* N3 sudah melampaui USD 500 juta per desain (estimasi industri 2024–2026), sehingga pendekatan chiplet memungkinkan amortisasi biaya melalui *chiplet reuse* dan *mix-and-match* node teknologi. Kedua, dari sisi **yield manufaktur**: semakin luas area die monolitik, semakin rendah *yield*-nya mengikuti distribusi probabilitas cacat acak. Ketiga, dari sisi **performa**: latency komunikasi antar-inti dapat dipangkas signifikan dengan stacking vertikal melalui *Through-Silicon Via* (TSV) atau *hybrid bonding* tembaga-tembaga (Cu-Cu) seperti yang diuraikan secara ekstensif oleh John H. Lau (2023) dalam *Chiplet Design and Heterogeneous Integration Packaging*.

Lau (2023) mendokumentasikan bahwa *hybrid bonding* Cu-Cu merupakan teknologi pengikatan logam langsung (*direct metal-to-metal bonding*) yang memungkinkan pitch interkoneksi sub-10 μm hingga mendekati sub-mikron, jauh melampaui kemampuan *micro-bump* solder tradisional (yang terbatas pada pitch ~40–50 μm untuk produksi massal). Bagi praktisi teknik industri, transisi ini merepresentasikan perubahan rantai pasok: dari model *integrated device manufacturer* (IDM) tunggal menuju ekosistem disagregat yang mencakup *fabless designer*, *chiplet vendor*, *foundry*, *OSAT* (*Outsourced Semiconductor Assembly and Test*), dan *EDA vendor*. Inilah yang menjadi justifikasi utama dikembangkannya metodologi EDA khusus chiplet—karena *toolchain* legacy untuk SoC monolitik tidak lagi memadai untuk menghadapi tantangan *partitioning*, *inter-die signaling*, *thermal co-design*, dan *verification* lintas-die.

---

## 2. Landasan Teori & Formulasi Matematis

Perancangan chiplet memerlukan beberapa model kuantitatif fundamental yang membentuk basis keputusan rekayasa. Roze dan Gerber (2026) menekankan bahwa kerangka EDA modern harus mengintegrasikan model-model berikut secara *co-simulation*.

### 2.1 Model Yield Probabilistik

Yield sebuah die monolitik dengan luas area $A$ (cm²) dan densitas cacat $D$ (cacat/cm²) mengikuti model Poisson sederhana:

$$Y_{\text{mono}} = e^{-D \cdot A}$$

Untuk partisi menjadi $n$ chiplet identik dengan luas masing-masing $A_c = A/n$, asumsi *defect clustering* mengikuti distribusi Gamma menghasilkan model *negative binomial*:

$$Y_{\text{chiplet}} = \left(1 + \frac{D \cdot A_c}{\alpha}\right)^{-\alpha}$$

dengan $\alpha$ adalah parameter clustering (umumnya $1 \leq \alpha \leq 3$ untuk proses CMOS成熟). Rasio yield:

$$\eta = \frac{Y_{\text{chiplet}}^n}{Y_{\text{mono}}} > 1$$

selalu bernilai >1 untuk parameter proses riil, menjadi justifikasi ekonomis inti partisi chiplet.

### 2.2 Model Biaya per Die yang Layak (*Cost per Good Die*)

$$C_{\text{good}} = \frac{C_{\text{wafer}}}{N_{\text{die}} \cdot Y_{\text{assembled}}}$$

dengan $N_{\text{die}} = \dfrac{\pi \cdot (R_{\text{wafer}} - \Delta r)^2}{A} - \pi \cdot \dfrac{R_{\text{wafer}} - \Delta r}{\sqrt{2A}}$ adalah jumlah die per wafer (Grossman formula), dan $Y_{\text{assembled}}$ memperhitungkan yield *bonding*:

$$Y_{\text{assembled}} = Y_{\text{known-good-die}} \cdot P_{\text{bonding}}^{N_{\text{bonds}}}$$

di mana $P_{\text{bonding}}$ adalah probabilitas sukses satu *bond* (untuk Cu-Cu hybrid bonding modern, $P_{\text{bonding}} \approx 0{,}9999$ pada pitch 10 μm menurut Lau, 2023).

### 2.3 Resistansi Termal Stack 3D

Untuk stack $k$ chiplet, resistansi termal total yang relevan untuk analisis *thermal hotspot*:

$$R_{\text{th,total}} = \sum_{i=1}^{k} \frac{t_i}{k_{th,i} \cdot A_i}$$

dengan $t_i$ adalah ketebalan die $i$, $k_{th,i}$ konduktivitas termal (untuk Si, $k_{th} \approx 150$ W/m·K), dan $A_i$ luas efektif. Kenaikan suhu *junction*:

$$\Delta T_j = P_{\text{total}} \cdot R_{\text{th,total}} - R_{\text{th,heatsink}}$$

Pada stack padat seperti HBM4 dengan kapasitas thermal budget $\Delta T_j \leq 85$ K di atas ambien, persamaan ini menjadi约束 desain utama.

### 2.4 Delay Interkoneksi Inter-Chiplet

Untuk link *bump* atau *hybrid bond* dengan resistansi $R_{\text{int}}$ dan kapasitansi $C_{\text{int}}$:

$$\tau_{RC} = 0{,}69 \cdot R_{\text{int}} \cdot C_{\text{int}}$$

Untuk Cu-Cu hybrid bonding pada pitch $p$ dengan diameter pad $d$, resistansi per bond:

$$R_{\text{int}} = \frac{\rho_{\text{Cu}} \cdot t_{\text{pad}}}{A_{\text{pad}}} = \frac{1{,}68 \times 10^{-8} \cdot t_{\text{pad}}}{\pi (d/2)^2}$$

yang untuk $d = 5$ μm dan $t_{\text{pad}} = 3$ μm menghasilkan $R_{\text{int}} \approx 2{,}6$ mΩ—jauh di bawah micro-bump solder (~50–100 mΩ), membuktikan keunggulan elektris *hybrid bonding* (Lau, 2023).

### 2.5 Kepadatan Interkoneksi

Batas *Rent's rule* untuk bandwidth interkoneksi:

$$I = O \cdot p^{r}$$

dengan $O$ jumlah pin/output, $p$ jumlah blok fungsional, dan $r \approx 0{,}5$–$0{,}75$. Untuk paket multi-die modern dengan $p > 50$, jumlah *interconnect link* $I$ meningkat secara superlinier, menjadi约束 bagi *floorplanning* EDA.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menyajikan kerangka EDA terpadu untuk desain chiplet/3D-IC yang dapat distandardisasi menjadi SOP industri sebagai berikut:

### 3.1 Arsitektur Alur Kerja (Workflow)

```
┌─────────────────────────────────────────────────────────┐
│  Tahap 1: System Specification & Architecture           │
│  → Penentuan fungsi, throughput target, latensi, power  │
├─────────────────────────────────────────────────────────┤
│  Tahap 2: Chiplet Partitioning & Floorplanning          │
│  → Optimasi biaya-yield, IP reuse, IO boundary planning│
├─────────────────────────────────────────────────────────┤
│  Tahap 3: Physical Implementation (per-chiplet)         │
│  → Synthesis, P&R, CTS, optimization (per node)        │
├─────────────────────────────────────────────────────────┤
│  Tahap 4: Inter-Chiplet Interface Definition            │
│  → PHY: UCIe / BoW / OpenHBI; protokol, sideband       │
├─────────────────────────────────────────────────────────┤
│  Tahap 5: Multi-Physics Co-Simulation                  │
│  → Thermal, SI, PI, TIM, warpage cross-die             │
├─────────────────────────────────────────────────────────┤
│  Tahap 6: Verification & Signoff                       │
│  → DRC/LVS, DFM, multi-die STA, functional ECO         │
├─────────────────────────────────────────────────────────┤
│  Tahap 7: Assembly & Test Hand-off                     │
│  → Package co-design, KGD testing, burn-in            │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Partisi Optimum

Langkah partisi harus meminimumkan fungsi objektif gabungan:

$$\min_{z \in \mathcal{Z}} \left[ w_1 \cdot C_{\text{total}}(z) + w_2 \cdot P_{\text{total}}(z) + w_3 \cdot L_{\text{critical}}(z) + w_4 \cdot T_{\text{junction}}(z) \right]$$

dengan $w_1, \ldots, w_4$ adalah bobot preferensi desain (umumnya $w_1 \geq w_3$). Domain pencarian $\mathcal{Z}$ meliputi semua partisi graph $G(V,E)$ yang merepresentasikan IP-blocks dan koneksi sinyal.