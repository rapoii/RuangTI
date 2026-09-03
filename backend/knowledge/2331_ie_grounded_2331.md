# 2331 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Otomasi Rekayasa Elektronik Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah menghadapi transisi paradigma fundamental dari arsitektur monolithic System-on-Chip (SoC) menuju paradigma *heterogeneous integration* berbasis chiplet dan *3D-IC* (Integrated Circuit tiga dimensi). Pergeseran ini dipicu oleh berakhirnya efektivitas ekonomis dari *node* planar CMOS tunggal, di mana biaya litografi EUV (Extreme Ultraviolet) melonjak secara eksponensial seiring menyusutnya *node* di bawah 3 nm. Roze dan Gerber (2026) dalam naskah "*EDA Solution for Chiplet and 3D-IC Design*" yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menekankan bahwa arsitektur chiplet memungkinkan disagregasi fungsi logika, memori, dan I/O menjadi beberapa die kecil (*chiplet*) yang kemudian diintegrasikan melalui *interposer* silikon atau *direct hybrid bonding*. Pendekatan ini secara signifikan meningkatkan *yield* manufaktur (rumus Moore vs. chiplet economy), menurunkan *time-to-market*, dan memungkinkan penskalaan performa melalui *parallelism* arsitektural.

Konteks industri yang melatarbelakangi kebutuhan akan solusi EDA (Electronic Design Automation) baru ini bersifat multidimensional. Pertama, dari sisi ekonomi, biaya produksi wafer monolitik 2 nm telah melampaui ambang batas \$20.000 per wafer, sementara disagregasi chiplet memungkinkan penggunaan *node* yang berbeda untuk blok fungsi yang berbeda (*mix-and-match*). Kedua, dari sisi manufakturabilitas, *yield* per wafer mengikuti model:

$$Y_{wafer} = Y_{die}^{\left(\frac{A_{wafer}}{A_{die}}\right)}$$

di mana $Y_{wafer}$ adalah *yield* keseluruhan wafer, $Y_{die}$ adalah *yield* per die, $A_{wafer}$ adalah luas wafer, dan $A_{die}$ adalah luas die individual. Dengan memecah die besar menjadi beberapa chiplet kecil, eksponen rasio area berkurang, sehingga *yield* wafer meningkat secara dramatis. Ketiga, dari sisi rekayasa sistem industri, desainer harus mengelola koherensi sinyal, integritas daya (PDN), integritas termal, dan strategi *test* serta *known-good-die* (KGD) secara simultan—suatu kompleksitas yang tidak tertangani oleh *toolchain* EDA planar konvensional.

Lau (2023) dalam bab "*Cu-Cu Hybrid Bonding*" dari monografinya *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menyoroti bahwa teknologi *Cu-Cu hybrid bonding* telah menjadi *enabler* utama untuk integrasi vertikal pitch ultra-halus (sub-10 µm, dengan roadmap menuju 1 µm). Pitch bonding $P_b$ yang semakin kecil ini memungkinkan *interconnect density*:

$$\rho_{interconnect} = \frac{1}{P_b^2} \quad [\text{koneksi/mm}^2]$$

yang melonjak secara kuadratik terhadap penurunan pitch, sehingga memenuhi kebutuhan bandwidth memori HBM (High Bandwidth Memory) dan logika yang sebelumnya tidak tercapai dengan teknik *micro-bump* solder konvensional. Urgensi operasional industri tampak jelas pada proliferasi produk komersial seperti AMD Instinct MI300, Intel Ponte Vecchio, dan TSMC CoWoS-L yang semuanya mengadopsi arsitektur chiplet 2.5D/3D, serta kebutuhan akan *tool* EDA yang mampu melakukan *floorplanning*, *partitioning*, *signal integrity analysis*, dan *thermal co-design* secara holistik dalam satu *flow* rekayasa terpadu.

## 2. Landasan Teori & Formulasi Matematis

Rekayasa chiplet dan 3D-IC membutuhkan kerangka matematis multi-disiplin yang menjembatani elektromagnetisme, termodinamika, mekanika solid, dan teori probabilitas untuk *yield*. Roze dan Gerber (2026) mengusulkan arsitektur EDA berlapis yang beroperasi pada empat domain komputasional: (i) *physical design* (floorplan, routing, placement), (ii) *electrical analysis* (signal integrity, power integrity), (iii) *thermal analysis* (konduksi 3D, konveksi), dan (iv) *manufacturing-aware yield analysis*. Beberapa formulasi fundamental yang relevan dirangkum sebagai berikut.

### 2.1 Model Termal Konduksi 3D

Untuk stack 3D-IC dengan $N$ die, distribusi suhu tunak (*steady-state*) mengikuti persamaan Laplace 3D:

$$\nabla \cdot \left[k(x,y,z) \nabla T(x,y,z)\right] + q'''(x,y,z) = 0$$

di mana $k$ adalah konduktivitas termal, dan $q'''$ adalah volumetrik heat generation. Solusi numerik dengan metode beda hingga (*finite difference*) menghasilkan matriks tridiagonal yang diselesaikan melalui algoritma *multigrid*. Resistansi termal ekuivalen dari stack adalah:

$$R_{th,stack} = \sum_{i=1}^{N} \frac{t_i}{k_i \cdot A_i} + R_{th,TIM} + R_{th,HS}$$

dengan $t_i$ adalah tebal die ke-$i$, $k_i$ konduktivitas termal, $A_i$ luas efektif, $R_{th,TIM}$ resistansi *thermal interface material*, dan $R_{th,HS}$ resistansi *heat spreader/heat sink*.

### 2.2 Integritas Sinyal pada Interconnect Hybrid Bonding

Untuk interconnect Cu-Cu hybrid bonding dengan pitch $P_b$, resistansi DC per koneksi:

$$R_{DC} = \frac{\rho_{Cu} \cdot L}{A_{bond}} = \frac{\rho_{Cu} \cdot L}{P_b^2}$$

di mana $\rho_{Cu} = 1.68 \times 10^{-8} \, \Omega \cdot m$ adalah resistivitas tembaga dan $L$ adalah tinggi pillar. Model RLC (Resistance-Inductance-Capacitance) untuk transmisi sinyal GHz:

$$Z_0 = \sqrt{\frac{L_{line}}{C_{line}}}, \quad \tau_{prop} = l \sqrt{L_{line} C_{line}}$$

dengan $Z_0$ impedansi karakteristik, $\tau_{prop}$ delay propagasi per satuan panjang, dan $l$ panjang interconnect. Kenaikan pitch *hybrid bonding* menuju 1 µm memungkinkan latensi inter-chiplet < 5 ps, mendekati performa *on-die*.

### 2.3 Yield Model untuk Known-Good-Die (KGD)

Lau (2023) menekankan bahwa salah satu tantangan terbesar rekayasa chiplet adalah memastikan setiap die yang terpasang adalah *Known Good Die* (KGD). Model probabilitas KGD setelah *bonding*:

$$P_{KGD,post-bond} = \prod_{i=1}^{N} p_i \cdot \left[1 - (1-p_i)(1-p_{test,i})\right]$$

di mana $p_i$ adalah probabilitas intrinsik die-$i$ berfungsi, dan $p_{test,i}$ adalah *coverage* test untuk die-$i$. Yield akhir sistem multi-chiplet:

$$Y_{system} = \left(P_{KGD,post-bond}\right)^M$$

dengan $M$ jumlah chiplet aktif dalam satu paket.

### 2.4 Optimasi Multi-Objektif Floorplan

Roze dan Gerber (2026) memperkenalkan formulasi optimasi Mixed-Integer Linear Programming (MILP) untuk *floorplanning* chiplet pada *interposer*:

$$\min_{x,y,w,h} \left[ \alpha \cdot f_{length} + \beta \cdot f_{thermal} + \gamma \cdot f_{congestion} \right]$$

terhadap kendala: $\sum A_i \leq A_{interposer}$, jarak minimum antar chiplet $d_{min}$, dan alignment dengan *through-silicon-via* (TSV) grid. Fungsi objektif menggabungkan panjang wiring rata-rata tertimbang, gradien termal maksimum, dan *routing congestion* estimator.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari solusi EDA chiplet mengikuti alur kerja (*workflow*) sistematis yang mengintegrasikan simulasi multi-fisik sejak tahap desain awal (*shift-left methodology*). Berdasarkan kerangka yang diuraikan Roze dan Gerber (2026), SOP rekayasa 3D-IC terdiri dari delapan tahapan kritis yang disajikan dalam diagram alir berikut.

```
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 1: System Specification & Architecture Partitioning   │
│  (Partisi logika-memori-I/O menjadi chiplet candidates)      │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 2: Chiplet-Level RTL Design & Verification (UVM)      │
│  (HDL synthesis, formal verification, functional coverage)   │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 3: Physical Implementation per Chiplet                │
│  (Synthesis, PnR, CTS, DRC/LVS di node masing-masing)        │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 4: Package Co-Design: Floorplan & Partitioning        │
│  (Penempatan chiplet pada interposer, optimasi MILP)         │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 5: Interconnect Planning: TSV & Hybrid Bonding        │
│  (Pitch assignment, RDL routing, signal/power TSV map)       │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 6: Multi-Physics Analysis (SI/PI/Thermal/Stress)      │
│  (Eye diagram, IR-drop, thermal map, warpage prediction)     │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 7: Sign-off, DFM, Yield & Reliability Analysis       │
│  (Monte Carlo, electromigration, KGD probabilistic modeling)  │
└────────────────────┬─────────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 8: Tape-out → Foundry Fabrication → Hybrid Bonding    │
│  (Cu-Cu thermo-compression bonding < 300°C, 1-3 kN)         │
└──────────────────────────────────────────────────────────────┘
```

**Tahap Cu-Cu Hybrid Bonding** (Lau, 2023) memerlukan kontrol proses yang sangat presisi: (a) persiapan permukaan Cu dengan *chemical mechanical polishing* (CMP) mencapai *roughness* Ra < 0.5 nm; (b) pretreatment plasma untuk menghilangkan oksida残留; (c) alignment wafer-to-wafer atau die-to-wafer dengan akurasi < ±200 nm pada pitch 10 µm dan < ±50 nm pada pitch 1 µm; (d) thermo-compression bonding pada suhu 250–400°C dengan tekanan 1–3 kN selama 30–60 menit di atmosfer inert N₂; (e) *post-bond anneal* untuk difusi interfacial Cu dan rekristalisasi.

Standar industri yang relevan mencakup **JEDEC JEP-160** (Long-Term Reliability of Cu-Cu Interconnects), **IEEE 1838** (Test Access Architecture for 3D-IC), dan **SEMI 3D5** (Terminology for 3D Integration). SOP ini harus didokumentasikan dalam *Design-for-Test* (DFT) handbook organisasi dan di-*audit* secara periodik terhadap *lessons-learned* dari setiap *tape-out*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah perusahaan desain semikonduktor (analog dengan TSMC CoWoS-S atau Intel Foveros) akan mengintegrasikan empat chiplet pada satu *interposer* silikon berukuran $25 \times 25$ mm. Spesifikasi:

| Parameter | Nilai |
|-----------|-------|
| Jumlah chiplet aktif ($M$) | 4 |
| Dimensi interposer | $25 \times 25$ mm |
| Pitch hybrid bonding ($P_b$) | 10 µm |
| Jumlah koneksi per chiplet | 5.000 |
| Resistivitas Cu ($\rho_{Cu}$) | $1{,}