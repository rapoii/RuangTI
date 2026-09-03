# 1755 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Lintas Domain dalam Rantai Nilai Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik yang dipicu oleh berakhirnya kelayakan ekonomi dari penskalaan planar *node* tunggal sebagaimana diformalisasikan oleh prediksi *Moore's Law* klasik. Biaya fabrikasi *wafer* pada *node* 3 nm dan 2 nm telah melampaui ambang USD 20.000 per *wafer*, sementara *yield* menurun drastis seiring menyusutnya fitur transistor, sehingga *Cost-Per-Good-Die* melonjak secara non-linear (Lau, 2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)). Fenomena ini memicu pergeseran strategis dari pendekatan *monolithic SoC* menuju arsitektur **chiplet** dan **3D-IC** yang mengandalkan integrasi heterogen dari beberapa *die* kecil—masing-masing mungkin diproduksi pada *node* proses yang berbeda—ke dalam satu paket terpadu. Roze dan Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menyoroti bahwa realisasi ekonomi arsitektur chiplet hanya dimungkinkan apabila tersedia **solusi EDA (*Electronic Design Automation*) lintas domain** yang mampu melakukan *partitioning*, *floorplanning*, analisis *signal integrity*, *power integrity*, dan *thermal integrity* secara simultan untuk seluruh tumpukan multi-die.

Urgensi operasional bersifat multidimensi. Pertama, dari perspektif *time-to-market*, perusahaan semikonduktor besar seperti AMD (Arsitektur Infinity Fabric), Intel (Foveros, Ponte Vecchio), dan TSMC (SoIC, 3DFabric) telah membuktikan bahwa desain chiplet mempersingkat siklus desain hingga 30–40% melalui *parallelization* fabrikasi *die*. Kedua, dari perspektif *yield*, disagregasi *die* besar menjadi beberapa *die* kecil mengikuti hukum statistik negatif binomial yang dibahas Lau (2023) — ketika area *die* berkurang empat kali lipat, *yield* naik dari sekitar 30% menjadi lebih dari 80% pada *node* mutakhir. Ketiga, dari perspektif fungsional, integrasi heterogen memungkinkan penggabungan *logic die* (3 nm), *HBM stack* (DRAM), *I/O die* (5 nm RF), dan *silicon interposer* ke dalam satu paket, membuka kapabilitas komputasi yang mustahil dicapai pada pendekatan monolitik.

Akar masalah teknis yang dijawab oleh literatur ini adalah **ketidaktersediaan metodologi desain holistik** yang menyatukan representasi fisik dari beberapa *die* ke dalam satu *canvas* desain. Perbedaan *process design kit* (PDK), aturan *bump pitch*, ketinggian *stacking*, serta efek termo-mekanis akibat *mismatched coefficient of thermal expansion* (CTE) antara tembaga, silikon, dan substrat organik menimbulkan kompleksitas yang hanya dapat ditangani oleh *tool* EDA generasi baru. Roze dan Gerber (2026) mengusulkan kerangka kerja EDA yang mengintegrasikan modul *multi-die floorplanning*, *Bump/Ball planning*, *TSV array generation*, dan analisis *system-level SI/PI/Thermal* dalam satu *flow* yang konsisten dengan *standard* UCIe (Universal Chiplet Interconnect Express) dan BoW (Bunch of Wires). Sementara itu, Lau (2023) memberikan landasan rekayasa proses untuk teknologi **Cu-Cu hybrid bonding**, yang merupakan *enabler* utama dari *pitch* interkoneksi *die-to-die* di bawah 3 μm—jauh lebih rapat dibanding *micro-bump* C4 atau solder ball tradisional yang terbatas pada 40–55 μm. Tulub

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Multi-Die dan Ekonomi Disagregasi

Yield kumulatif dari rakitan chiplet mengikuti model probabilistik serial. Jika sebuah paket tersusun atas $N$ *die* independen dengan *yield* individual $Y_i$, maka *yield* sistem:

$$Y_{\text{system}} = \prod_{i=1}^{N} Y_i \cdot Y_{\text{assembly}}$$

Untuk *die* persegi panjang dengan luas $A_i$ dan *defect density* $D_0$ (cacat/cm²), model Poison mengasumsikan:

$$Y_i = e^{-D_0 \cdot A_i}$$

Namun, pada praktik modern dengan *defect clustering*, model negatif binomial lebih akurat:

$$Y_i = \left(1 + \frac{D_0 \cdot A_i}{\alpha}\right)^{-\alpha}$$

dengan $\alpha$ sebagai *clustering parameter* (Lau, 2023). Untuk *node* 5 nm, $D_0 \approx 0{,}008$ cm⁻² dan $\alpha \approx 1{,}5$.

### 2.2 Karakteristik Elektrik Interkoneksi Cu-Cu Hybrid Bonding

Resistansi sambungan Cu-Cu hybrid bonding didominasi oleh *interfacial contact resistance*. Untuk *bump* silinder dengan diameter $d$, tinggi $h$, dan *bond pitch* $p$, resistansi DC per sambungan:

$$R_{\text{bond}} = \frac{\rho_{\text{Cu}} \cdot h_{\text{eff}}}{\pi \left(\frac{d}{2}\right)^2} + R_{\text{contact}}$$

dengan $\rho_{\text{Cu}} = 1{,}68 \times 10^{-8}\,\Omega\cdot\text{m}$ dan $h_{\text{eff}}$ adalah tebal efektif termasuk kontribusi *copper grain boundary*. Roze dan Gerber (2026) menekankan bahwa nilai tipikal $R_{\text{bond}}$ pada *pitch* 3 μm adalah sekitar 15–25 mΩ, jauh lebih rendah dibanding *micro-bump* solder (≈80–120 mΩ) sehingga kapasitansi parasitik dan *insertion loss* untuk *signal* GHz-order berkurang signifikan.

Kapasitansi *die-to-die*:

$$C_{\text{dd}} = \varepsilon_0 \varepsilon_r \frac{A_{\text{bond}}}{h_{\text{eff}}}$$

sehingga *RC delay* per sambungan:

$$\tau_{\text{dd}} = R_{\text{bond}} \cdot C_{\text{dd}}$$

Untuk $d = 3\,\mu\text{m}$, $h_{\text{eff}} = 5\,\mu\text{m}$, $\varepsilon_r = 3{,}9$ (SiO₂):

$$\tau_{\text{dd}} \approx 20 \times 10^{-3} \times 4{,}3 \times 10^{-15} \approx 8{,}6 \times 10^{-17}\,\text{s} = 0{,}086\,\text{fs}$$

Angka ini membuktikan bahwa batas kecepatan bukan lagi pada *bump*, melainkan pada *driver buffer* dan *channel loss*.

### 2.3 Analisis Termal dan Daya

Densitas daya pada arsitektur 3D meningkat mengikuti hukum *power-density stacking*:

$$P_{\text{stack}} = \sum_{i=1}^{N} P_i + P_{\text{interconnect}}$$

Resistansi termal *junction-to-ambient* untuk konfigurasi *face-to-face bonding*:

$$\theta_{\text{JA}} = \theta_{\text{si}} + \theta_{\text{bond}} + \theta_{\text{interposer}} + \theta_{\text{TIM}} + \theta_{\text{sink}}$$

dengan:

$$\theta_{\text{si}} = \frac{t_{\text{si}}}{k_{\text{si}} \cdot A_{\text{eff}}}$$

di mana $k_{\text{si}} = 149\,\text{W/(m·K)}$. Untuk *die* $10 \times 10\,\text{mm}^2$ dengan tebal $t_{\text{si}} = 750\,\mu\text{m}$:

$$\theta_{\text{si}} = \frac{750 \times 10^{-6}}{149 \times 100 \times 10^{-6}} \approx 0{,}05\,\text{K/W}$$

Namun, kehadiran TSV (*Through-Silicon Via*) menurunkan $\theta_{\text{si}}$ efektif hingga 15–25% karena konduksi vertikal melalui Cu ($k_{\text{Cu}} = 401\,\text{W/(m·K)}$).

### 2.4 Optimasi Floorplan Multi-Die

Masalah *multi-die floorplanning* diformulasikan sebagai minimasi fungsi objektif multi-kriteria:

$$\min_{x_i, y_i, o_i} \left[ w_1 \cdot L_{\text{wire}} + w_2 \cdot \theta_{\text{JA}} + w_3 \cdot A_{\text{package}} - w_4 \cdot Y_{\text{system}} \right]$$

dengan $L_{\text{wire}} = \sum_{i<j} w_{ij} \cdot \text{HPWL}(i,j)$ adalah estimasi *half-perimeter wirelength*, $w_{ij}$ adalah bobot koneksi, dan $(x_i, y_i, o_i)$ adalah posisi serta orientasi *die* $i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan arsitektur *flow* EDA multi-domain dengan tahapan sebagai berikut:

### Langkah 1 — Inisialisasi Multi-Die Project
Membuat proyek dengan modul integrasi heterogen, mendefinisikan PDK untuk masing-masing *die* (misal: 3 nm untuk *compute die*, 5 nm untuk *I/O die*, 28 nm untuk *power management*), serta mendeklarasikan *interface protocol* sesuai standar UCIe-A (Standard Package, *pitch* 100–130 μm) atau UCIe-S (Advanced Package, *pitch* 25–55 μm).

### Langkah 2 — System-Level Partitioning
Algoritma *min-cut* dengan *cost function* gabungan mempertimbangkan:
- **Functional partitioning**: pemisahan *logic*, *memory*, *analog*, *I/O*.
- **Technology mapping**: penugasan *node* proses optimal per blok.
- **Connectivity analysis**: minimalisasi jumlah *die-to-die link*.

Formulasi:

$$\min \sum_{(u,v)\in E} c_{uv} \cdot \mathbb{1}[\phi(u) \neq \phi(v)]$$

dengan $\phi(\cdot)$ sebagai fungsi partisi dan $c_{uv}$ bobot koneksi.

### Langkah 3 — Multi-Die Floorplanning
Menggunakan algoritma *simulated annealing* atau *mixed integer linear programming* (MILP) dengan batasan: luas total ≤ luas substrat, *thermal hotspot* tidak tumpang tindih, *power delivery network* (PDN) layak.

### Langkah 4 — Bump/Ball & TSV Planning
Auto-generation *bump array* sesuai *pitch* dan *keep-out zone*. Verifikasi:
- *Current density* per *bump* $J \leq 5 \times 10^5\,\text{A/cm}^