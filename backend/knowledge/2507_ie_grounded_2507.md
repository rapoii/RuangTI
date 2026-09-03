# 2507 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisika dalam Rantai Pasok Semikonduktor Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik dari pendekatan *monolithic SoC* (System-on-Chip) menuju arsitektur *chiplet* dan *3D-IC* sebagai respons terhadap tiga tekanan struktural yang saling berinteraksi. Pertama, **bottleneck ekonomi fotolitografi EUV** (Extreme Ultraviolet) di mana biaya masker untuk proses N3 (3 nm) telah melonjak melampaui USD 30 juta per set masker (Roze & Gerber, 2026), sehingga pendekatan *reticle-stitching* dan disagregasi fungsional menjadi imperatif strategis. Kedua, **limitasi fisik hukum Moore** yang ditandai dengan menurunnya *yield gain* per node menjadi hanya 1,3× – 1,5× per generasi (Lau, 2023). Ketiga, **heterogenitas komputasi modern** yang menuntut integrasi simultan antara *compute die* (logika CMOS canggih), *HBM stack* (memori bandwidth tinggi), *I/O die* (transceiver optik/SerDes), dan *analog/RF die* dalam satu paket yang koheren.

Roze dan Gerber (2026) dalam paparannya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) mengidentifikasi bahwa tantangan utama perancang *chiplet* bukan lagi semata pada fabrikasi, melainkan pada *flow* EDA (Electronic Design Automation) yang belum terstandarisasi untuk validasi lintas-die, verifikasi termal-mekanisal-listrik secara simultan, dan optimasi *die-to-die interconnect*. Solusi EDA yang mereka usulkan mengintegrasikan modul *floorplanning* hierarkis, *signal integrity co-simulation* untuk link *hybrid bonding*, serta *design-for-yield* (DFY) berbasis model *negative binomial* yang sebelumnya hanya applicable untuk wafer 2D. Sementara itu, Lau (2023) dalam bab buku *Chiplet Design and Heterogeneous Integration Packaging* memberikan fondasi teknologi Cu-Cu *hybrid bonding* — sebuah proses di mana dua permukaan Cu planar di-bonding pada suhu rendah (300–400°C) dengan *pitch* interkoneksi mencapai ≤ 2 µm, berbeda dari soldering konvensional yang memiliki pitch 20–40 µm.

Urgensi operasional modul ini bagi insinyur teknik industri terletak pada empat aspek manajerial: (i) **desain ulang rantai pasok wafer** dari model *integrated foundry* menjadi *chiplet marketplace* (model *Agnostic* dari AMD, *Open Chiplet* dari Intel); (ii) **re-balance line yield** karena *known-good-die* (KGD) testing menjadi variabel penentu profitability; (iii) **ko-optimasi termal** karena *3D-IC* memiliki *thermal resistance* junction-to-ambient yang jauh lebih tinggi akibat *stacking*; dan (iv) **keputusan make-or-buy** di tingkat *package design house* yang kini harus memilih antara platform EDA proprietary (Cadence, Synopsys, Siemens EDA) atau alur *open-source* seperti OpenROAD yang baru beradaptasi untuk chiplet sejak 2024. Dokumen knowledge base ini akan membedah formulasi kuantitatif, metodologi rekayasa, dan studi kasus numerik yang diperlukan untuk mengambil keputusan rekayasa tersebut secara presisi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Chiplet dan Disagregasi SoC

Yield total sistem chiplet dimodelkan menggunakan asumsi *independent die yield* (umumnya cukup akurat untuk fabrikasi pada *fab* berbeda) menurut Roze & Gerber (2026):

$$Y_{system} = \prod_{i=1}^{n} Y_{die,i} \cdot Y_{assembly,i}$$

dengan $Y_{die,i}$ adalah *yield* intrinsik die ke-$i$ dan $Y_{assembly,i}$ adalah yield proses bonding/packaging-nya. Untuk die tunggal pada wafer mature, model *negative binomial* (Murphy approximation) digunakan:

$$Y_{die} = \left[ \frac{e^{-D_0}}{1 + D_0 \cdot A_{die}/A_{crit}} \right]^2$$

di mana $D_0$ adalah *defect density* (def/cm²), $A_{die}$ luas die, dan $A_{crit}$ *critical area* yang merupakan parameter EDA-dependent.

### 2.2 Resistansi Interkoneksi Cu-Cu Hybrid Bonding

Lau (2023) menurunkan resistansi per *bump* Cu-Cu hybrid bonding dengan luas penampang $A_{bump} = w \times w$ (umumnya $w = 1\text{ µm}$ – $5\text{ µm}$) dan jarak pusat ke pusat (pitch) $p$:

$$R_{Cu-Cu} = \frac{\rho_{Cu} \cdot t_{bond}}{A_{bump}} = \frac{1.68 \times 10^{-8} \cdot t_{bond}}{w^2}$$

dengan $\rho_{Cu} = 1{,}68 \times 10^{-8}\ \Omega\cdot\text{m}$ dan $t_{bond}$ adalah ketebalan efektif sambungan (0,5 – 1,5 µm). Kapasitansi parasitik per sambungan dimodelkan sebagai:

$$C_{bond} = \varepsilon_0 \varepsilon_r \frac{A_{bump}}{d_{ILD}} + C_{fringe}$$

di mana $d_{ILD}$ adalah ketebalan *inter-layer dielectric* (umumnya SiN atau SiO₂ dengan $\varepsilon_r \approx 4$) dan $C_{fringe} \approx 0{,}1$ – $0{,}3$ fF dari kontribusi *fringing field*. Impedansi karakteristik link *hybrid bonding* pendek didekati dengan:

$$Z_0 = \sqrt{\frac{L_{bond}}{C_{bond}}}$$

dengan $L_{bond} \approx \mu_0 \cdot t_{bond}$ (orde pH) yang biasanya dapat diabaikan untuk link pendek sehingga $Z_0 \approx 30\text{ – }50\ \Omega$.

### 2.3 Model Termal 3D-IC

Resistansi termal *junction-to-ambient* untuk stack 3D-IC dengan $k$ die ditumpuk dan *thermal interface material* (TIM) di antaranya adalah:

$$\theta_{JA} = \sum_{j=1}^{k} \frac{t_j}{k_j \cdot A_j} + \sum_{m=1}^{k-1} \frac{BLT_m}{k_{TIM,m} \cdot A_m}$$

dengan $t_j$ tebal die ke-$j$, $k_j$ konduktivitas termal silikon ($\approx 150$ W/m·K pada suhu ruang), dan $BLT_m$ *bond line thickness* TIM. Roze & Gerber (2026) menekankan bahwa $\theta_{JA}$ untuk stack 4-die HBM + logic dapat melebihi 1,5 K/W, jauh melampaui $\theta_{JA} \approx 0{,}4$ K/W untuk paket SoC konvensional planar.

### 2.4 Optimasi Biaya Total Kepemilikan (TCO) Chiplet

Fungsi biaya total yang digunakan dalam EDA optimasi (Roze & Gerber, 2026):

$$C_{TCO} = \sum_{i=1}^{n} \left( \frac{C_{wafer,i} \cdot A_{die,i}}{Y_{die,i} \cdot N_{reticle}} \right) + C_{assembly} + C_{test} + C_{redundancy}$$

dengan $C_{wafer,i}$ biaya per wafer untuk proses target, $N_{reticle}$ jumlah die per *reticle*, dan $C_{redundancy}$ mencakup biaya die cadangan untuk kompensasi yield.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis desain chiplet dan 3D-IC mengikuti *flow* EDA delapan-tahap yang distandarkan oleh *chiplet design house* modern dan divalidasi dalam paper Roze & Gerber (2026):

**Tahap 1 — Spesifikasi Sistem & Partisi Fungsional**
Definisikan *throughput target*, *power budget*, dan *inter-die bandwidth*. Tentukan batas *latency* maksimum antar-die. Gunakan *analytical model* untuk memutuskan disagregasi (misalnya, apakah *PCIe PHY* dipisahkan atau tidak).

**Tahap 2 — Pilihan Proses & BoM (Bill of Materials)**
Tetapkan *technology node* tiap chiplet (umumnya dicampur: 5 nm logika + 7 nm I/O + 28 nm analog). Pilih substrat *interposer* (silikon atau organik) dan tipe interkoneksi (*micro-bump* vs *hybrid bonding*).

**Tahap 3 — Floorplanning Hierarkis Lintas-Die**
EDA modern menggunakan algoritma *simulated annealing* dengan fungsi objektif gabungan:

$$\min_{x_i, y_i} \left( \alpha \cdot L_{wire} + \beta \cdot \theta_{JA} + \gamma \cdot A_{package} \right)$$

di mana $L_{wire}$ total panjang kabel inter-die, dan $\alpha, \beta, \gamma$ adalah bobot yang dapat disetel oleh desainer.

**Tahap 4 — Implementasi PHY & Protokol Die-to-Die**
Pilih standar seperti *UCIe* (Universal Chiplet Interconnect Express) atau *BoW* (Bunch of Wires). Validasi *eye diagram* pada *channel* Cu-Cu hybrid bonding dengan target *bit error rate* ≤ $10^{-12}$.

**Tahap 5 — Co-Simulation Termal-Mekanisal-Listrik**
Gunakan solver *finite element* (ANSYS, Cadence Celsius) untuk memastikan *stress* pada sambungan Cu-Cu ≤ 200 MPa dan *junction temperature* ≤ 85°C (aplikasi komersial) atau 110°C (aplikasi industri).

**Tahap 6 — DRC (Design Rule Checking) & LVS Lintas-Die**
Validasi aturan desain khusus hybrid bonding: *pitch* minimum, *enclosure* Cu pad, *keep-out zone* TSV. Roze & Gerber (2026) memperkenalkan modul DRC terpadu yang memvalidasi konsistensi antara GDSII chiplet A dan B secara bersamaan.

**Tahap 7 — Yield & Reliability Modelling**
Simulasi Monte Carlo terhadap variasi *bonding misalignment* (toleransi umum ±0,5 µm), distribusi *defect density*, dan *thermal cycling stress*.

**Tahap 8 — Tape-out, Assembly & Known-Good-Die Test**
Lakukan *wafer-level burn-in*, *final test* pada masing-masing die sebelum assembly untuk menjamin KGD, dan *post-bond test* untuk yield final.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain Paket CPU-GPU Heterogen + HBM3

Misalkan seorang *package architect* di sebuah *fabless company* akan merancang paket yang mengintegrasikan tiga jenis chiplet: (1) *compute die* CMOS 3 nm berukuran $A_1 = 100\ \text{mm}^2$, (2) *GPU die* CMOS 5 nm berukuran $A_2 = 150\ \text{mm}^2$, dan (3) *HBM3 stack* dengan 8 *memory die* per stack. Target *total bandwidth* memory adalah 1 TB/s.

**Langkah 1: Hitung Yield Tiap Die**

Untuk proses 3 nm mature, defect density $D_0 = 0{,}15$ def/cm² dan critical area $A_{crit} = 0{,}05$ cm². Defect density proses 5 nm sedikit lebih tinggi: $D_0 = 0{,}22$ def/cm².

Yield compute die:
$$Y_{die,1} = \left[ \frac{e^{-0,15}}{1 + 0{,}15 \times (100/100) / 0{,}05} \right]^2 = \left[ \frac{0{,}8607}{1 + 0{,}30} \right]^2 = [0{,}662]^2 = 0{,}438$$

Yield GPU die:
$$Y_{die,2} = \left[ \frac{e^{-0,22}}{1 + 0{,}22 \times (150/100) / 0{,}05} \right]^2 = \left[ \frac{0{,}8025}{1 + 0{,}66} \right]^2 = [0{,}4835]^2 = 0{,}234$$

**Langkah 2: Resistansi Cu-Cu Hybrid Bonding**

Asumsikan *pitch* 3 µm