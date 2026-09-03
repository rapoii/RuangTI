# 2715 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Bonding Hibrida Cu-Cu, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari paradigma desain *monolithic System-on-Chip* (SoC) menuju paradigma *disaggregated chiplet* dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: pertama, biaya masker (*mask cost*) untuk teknologi *advanced node* di bawah 3 nm telah menembus ambang USD 50 juta per set masker, menciptakan ekonomi yang melarang fabrikasi chip monolitik berskala besar (Lau, 2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)); kedua, *yield* wafer turun secara eksponensial terhadap luas area die, sehingga pendekatan *known-good-die* (KGD) melalui integrasi chiplet menjadi solusi ekonomis; ketiga, *throughput* komputasi berbasis AI generatif menuntut bandwidth memori yang hanya dapat dipenuhi oleh *stacked DRAM* dengan *pitch* interkoneksi sub-mikron. Roze dan Gerber (2026) dalam makalahnya yang dipresentasikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menekankan bahwa tanpa solusi *Electronic Design Automation* (EDA) yang koheren dan *multi-physics aware*, transisi ini akan terhambat oleh inefisiensi *time-to-market* dan *re-spin* desain yang mahal.

Permintaan pasar untuk *high-performance computing* (HPC), akselerator AI, dan *edge computing* mendorong adopsi *chiplet* di mana beberapa *die* heterogen — fabrikasi pada node proses berbeda — diintegrasikan dalam satu paket. Menurut Lau (2023), teknologi *Cu-Cu hybrid bonding* merupakan tulang punggung *interconnect* bagi integrasi vertikal 3D-IC karena memungkinkan pitch interconnection turun ke skala 3 µm bahkan di bawah 1 µm, dengan resistansi kontak rendah dan *thermal budget* yang kompatibel dengan proses *back-end-of-line* (BEOL). Bagi praktisi teknik industri, fenomena ini bukan sekadar persoalan teknologis, melainkan persoalan *design-for-manufacturability* (DfM), optimasi rantai pasok, dan rekayasa kualitas. Keputusan *die partitioning* yang salah akan memicu defek termal-mekanis, kenaikan *bill-of-material* (BoM), dan bottleneck verifikasi yang merugikan secara finansial.

Urgensi pengembangan solusi EDA khusus chiplet terletak pada kenyataan bahwa *tool-chain* EDA konvensional — yang dioptimasi untuk desain SoC 2D — tidak memiliki kapabilitas asli untuk menangani abstraksi *die-to-die interface*, simulasi *thermo-mechanical stress* pada *bonded stack*, dan verifikasi protokol interoperabilitas seperti *Universal Chiplet Interconnect Express* (UCIe) atau *Bunch of Wires* (BoW). Roze dan Gerber (2026) berargumen bahwa arsitektur EDA masa depan haruslah *co-design aware*, mampu melakukan partisi logika-fisika lintas-domain secara simultan, dan menyediakan *closed-loop feedback* antara modul analisis termal, listrik, dan keandalan. Tulisan ini akan membedah landasan kuantitatif, metodologi rekayasa, dan implikasi manajerial dari kedua literatur tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal untuk Stack 3D-IC

Resistansi termal total $R_{th,total}$ dari sebuah stack 3D-IC dengan $N$ lapisan chiplet dapat dimodelkan sebagai jaringan termal satu dimensi:

$$R_{th,total} = \sum_{i=1}^{N} \frac{t_i}{k_i \cdot A_i} + R_{th,interf,i}$$

di mana $t_i$ adalah ketebalan lapisan ke-$i$, $k_i$ konduktivitas termal material (W/m·K), $A_i$ luas area efektif, dan $R_{th,interf,i}$ adalah resistansi antarmuka *bonding*. Untuk *Cu-Cu hybrid bonding*, Lau (2023) melaporkan bahwa $R_{th,interf}$ dapat diminimalisasi hingga sekitar $0.05~\text{K·cm}^2/\text{W}$ karena eliminasi *underfill* dan *solder bump*. Suhu junction maksimum $T_j$ pada chip aktif lapisan atas memenuhi:

$$T_j = T_a + P_{diss} \cdot R_{th,total}$$

di mana $T_a$ adalah suhu ambient dan $P_{diss}$ adalah disipasi daya total. Dengan $P_{diss} = 150~\text{W}$, $T_a = 45~^\circ\text{C}$, dan target $T_j \leq 85~^\circ\text{C}$, maka $R_{th,total} \leq 0.267~\text{K/W}$.

### 2.2 Model Listrik untuk Interkoneksi Hybrid Bonding

Resistansi kontak per *bump* $R_b$ pada sambungan Cu-Cu mengikuti formulasi Holm:

$$R_b = \frac{\rho_{Cu}}{A_{contact}} + R_{interface}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}~\Omega\cdot\text{m}$ dan $A_{contact}$ adalah luas kontak efektif pasca-bonding. Kapasitansi parasitik per sambungan:

$$C_b = \varepsilon_0 \varepsilon_r \frac{A_{pad}}{d_{effective}}$$

Untuk pitch $p = 3~\mu\text{m}$, diameter pad $d_{pad} = 2~\mu\text{m}$, dan jarak efektif $d_{effective} = 0.5~\mu\text{m}$ (roughness-induced gap), maka $C_b \approx 0.11~\text{fF}$ dengan $\varepsilon_r \approx 4$. Konstanta propagasi untuk saluran *die-to-die*:

$$\gamma = \alpha + j\beta = \sqrt{(R + j\omega L)(G + j\omega C)}$$

di mana $R$, $L$, $G$, $C$ adalah parameter *per-unit-length* (p.u.l.). Untuk bandwidth target $f_{3dB} \geq 16$ Gbps pada protokol UCIe, atenuasi $\alpha$ per mm haruslah $\leq 0.3~\text{dB/mm}$.

### 2.3 Yield dan Defect Density

Model yield partisipatif untuk rakitan chiplet mengikuti persamaan:

$$Y_{assembly} = Y_{KGD,1} \cdot Y_{KGD,2} \cdots Y_{KGD,N} \cdot Y_{bonding}^N$$

dengan $Y_{KGD,i}$ adalah yield *known-good-die* untuk chiplet ke-$i$, dan $Y_{bonding}$ adalah yield proses *Cu-Cu hybrid bonding* per sambungan. Roze dan Gerber (2026) menekankan bahwa verifikasi EDA harus memasukkan *defect probability* per sambungan $p_d$ dalam perhitungan *redundancy allocation*:

$$P_{fail,link} = 1 - (1 - p_d)^n$$

di mana $n$ adalah jumlah link aktif. Dengan target availability $A = 0.99999$ (*five-nines*), redundansi $n_{red} = \lceil \log(1 - A) / \log(1 - p_d) \rceil$ diperlukan.

### 2.4 Optimasi Biaya Total Kepemilikan (TCO)

Fungsi objektif TCO untuk desain chiplet:

$$TCO = \sum_{i=1}^{N} \left( C_{mask,i} \cdot N_{mask,i} + C_{wafer,i} \cdot \frac{A_i}{A_{wafer}} + C_{bond,i} \right) + C_{package} + C_{test}$$

di mana $C_{mask,i}$ adalah biaya masker per proses, $C_{wafer,i}$ biaya wafer, $A_i$ luas area chiplet, $A_{wafer}$ luas wafer utilisable, dan $C_{bond,i}$ biaya assembly + bonding per chiplet. Roze dan Gerber (2026) menunjukkan bahwa EDA yang baik dapat mengeksplorasi *design space* partisi secara otomatis untuk meminimalkan $TCO$ dengan konstrain performa.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA berlapis (*multi-tier methodology*) yang dapat diterjemahkan menjadi SOP industri sebagai berikut:

**Tahap 1 — Spesifikasi dan Partisi Logika.** Arsitek sistem menentukan *performance budget*, *power budget*, dan *area budget*. Algoritma partisi EDA memecah RTL menjadi *chiplets* menggunakan optimasi mixed-integer:

$$\min_{x_{i,j}} \sum_{j} w_j x_{i,j} \quad \text{s.t.} \quad \sum_i x_{i,j} = 1, \quad x_{i,j} \in \{0,1\}$$

di mana $x_{i,j}$ menunjukkan apakah *block* $j$ ditempatkan pada chiplet $i$.

**Tahap 2 — Co-Design Fisik.** *Floor-planner* EDA melakukan *place-and-route* simultan untuk semua chiplet dengan约束 *die-to-die* pitch dan *keep-out zone* termal. Standar UCIe (2024) mensyaratkan pitch minimal 25 µm untuk *standard package* dan 3 µm untuk *advanced package*.

**Tahap 3 — Verifikasi Multi-Fisika.** Tahapan ini menjalankan secara paralel: (a) simulasi *signal integrity* (SI) dan *power integrity* (PI); (b) analisis termal *steady-state* dan *transient*; (c) analisis *thermomechanical stress* dengan FEM; (d) verifikasi *electromigration* dan *TDDB*.

**Tahap 4 — Sign-off dan Tape-out.** Setelah *power, performance, area* (PPA) memenuhi target, EDA menghasilkan GDSII untuk masing-masing chiplet dan *substrate* interposer. Lau (2023) menambahkan bahwa verifikasi *Cu-Cu hybrid bonding* memerlukan *overlay alignment check* dengan toleransi $\leq 0.5~\mu\text{m}$ (3σ).

**Tahap 5 — Assembly dan Uji KGD.** Prosedur *thermocompression bonding* (TCB) mengikuti protokol: suhu $300~^\circ\text{C} - 400~^\circ\text{C}$, tekanan $1 - 5~\text{MPa}$, durasi $30 - 60$ menit, dalam atmosfer *formic acid* + N₂ untuk reduksi oksida Cu.

**Tahap 6 — Validasi Sistem.** Pengujian *functional*, *burn-in*, dan *HTOL* pada level board memastikan yield assembly memenuhi target $Y_{assembly} \geq 0.95$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah hyperscaler ingin mengintegrasikan empat chiplet (1 *logic*, 1 *HBM*, 1 *I/O*, 1 *base die*) dalam konfigurasi 3D-IC menggunakan *Cu-Cu hybrid bonding*.

**Input Parameter:**
- $P_{diss} = 120$ W (logic chiplet), 30 W (HBM), 15 W (I/O)
- $T_a = 40~^\circ\text{C}$
- Pitch bonding = 3 µm, diameter Cu pad = 2 µm
- $A_{contact}$ pasca-bonding = $3.14 \times 10^{-12}$ m² (luas efektif 1.5 µm × 1.5 µm setelah *deformation*)
- Ketebalan stack: 770 µm (logic) + 50 µm (bond) + 770 µm (HBM)

**Langkah Kalkulasi:**

**Langkah A — Resistansi kontak per sambungan:**
$$R_b = \frac{1.68 \times 10^{-8}}{3.14 \times 10^{-12}} + 0.05 \approx 5.4~\text{m}\Omega$$

**Langkah B — Resistansi termal total (estimasi 1D):** Dengan $k_{Si} = 148~\text{W/m·K}$, $A = 100~\text{mm}^2$:
$$R_{th,Si} = \frac{770 \times 10^{-6}}{148 \times 100 \times 10^{-6}} = 0.052~\text{K/W}$$
$$R_{th,bond} = 0.05~\text{K·cm}^2/\text{W} \cdot \