# 1579 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Optimasi Heterogen, Hybrid Bonding, dan Integrasi Lintas Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari pendekatan monolitik tradisional menuju arsitektur *disaggregated* berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga keterbatasan fundamental yang tak terhindarkan dari hukum Moore: (1) biaya litografi EUV (Extreme Ultraviolet) yang melonjak secara eksponensial menembus US$200 juta per masker untuk node N2 (2 nm), (2) *yield* wafer 300 mm yang menurun drastis di bawah 60% untuk retikel di atas 100 mm², dan (3) kompleksitas verifikasi *place-and-route* yang mendekati batas eksponensial ($O(n!)$) untuk desain multi-miliar transistor. Roze dan Gerber (2026) dalam prosiding ICEP-HBS menegaskan bahwa *Electronic Design Automation* (EDA) generasi baru harus menjawab tantangan topologi ini melalui platform *co-design* elektro-termal-mekanikal yang mengintegrasikan *floorplanning*, *partitioning*, dan verifikasi sign-off dalam satu kerangka kerja terpadu.

Urgensi ekonomi sangat nyata: pasar chiplet global diproyeksi mencapai US$147 miliar pada 2030 dengan CAGR (Compound Annual Growth Rate) 42,5%, didominasi oleh aplikasi HPC (High Performance Computing), AI accelerator, dan komputasi tepi (*edge computing*). Sebagai contoh konkret, AMD Ryzen dengan arsitektur Infinity Fabric, Intel Meteor Lake dengan Foveros 3D stacking, dan NVIDIA Grace Hopper Superchip telah mengadopsi filosofi chiplet untuk memperoleh *yield advantage* signifikan. Sementara itu, teknologi *Cu-Cu hybrid bonding* yang diuraikan Lau (2023) memungkinkan pitch interkoneksi 10 μm ke bawah—sebagai pembanding, solder microbump konvensional masih terbatas pada 40–50 μm pitch. Pitch yang lebih halus berarti densitas I/O per mm² meningkat dengan kuadrat pitch ratio:

$$\rho_{IO} = \frac{1}{p^2}$$

dimana $p$ adalah pitch dalam milimeter. Reduksi pitch dari 40 μm ke 10 μm berarti peningkatan densitas 16×, membuka peluang integrasi heterogen dengan bandwidth memori HBM yang melonjak ke >10 TB/s.

Konteks operasional juga tidak terlepas dari disrupsi rantai pasok. *Hyperscaler* (AWS, Azure, Google Cloud) mendorong proliferasi paket *multi-die* melalui inisiatif UCIe (Universal Chiplet Interconnect Express) yang telah memasuki spesifikasi 2.0 pada 2024. Roze dan Gerber (2026) menekankan bahwa tanpa solusi EDA end-to-end yang mengotomasi verifikasi *bump assignment*, *timing closure* lintas-die, dan analisis termal, *time-to-tapeout* untuk SoC multi-die akan membengkak dari 9 bulan menjadi 24 bulan—suatu kemunduran tak terakomodasi dalam siklus hidup produk semikonduktor.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Chiplet

Berbeda dengan desain monolitik, *yield* paket chiplet mengikuti prinsip komposisi probabilistik *independent die*. Jika suatu paket terdiri dari $N$ chiplet dengan *yield* individual $y_i$, maka *yield* paket total $Y_{pkg}$ adalah:

$$Y_{pkg} = \prod_{i=1}^{N} y_i$$

Namun, Roze dan Gerber (2026) menyempurnakan model ini dengan memasukkan *known good die* (KGD) probability yang sudah mencakup *burn-in* dan *probe test*. Defect clustering pada wafer dimodelkan dengan distribusi *Negative Binomial* (model Poisson dua-parameter):

$$y_{wafer} = \left(1 + \frac{A \cdot D_0}{c}\right)^{-c}$$

dimana $A$ adalah luas aktif die dalam cm², $D_0$ adalah defect density (defect/cm²), dan $c$ adalah *cluster parameter* (tipikal 1,5–4,0 untuk proses mature).

### 2.2 Cost Model Total

Lau (2023) menurunkan *cost of ownership* (CoO) untuk *Cu-Cu hybrid bonding* yang mencakup biaya wafer, *bonding process*, dan *Known Good Stack* (KGS):

$$CoO = \frac{C_{wafer} + C_{bonding} \cdot N_{stack}}{Y_{pkg} \cdot \eta_{KGS}}$$

dimana $\eta_{KGS}$ adalah efisiensi deteksi KGD pasca-stack (umumnya 0,90–0,98).

### 2.3 Resistansi Termal dan Kepadatan Daya

Untuk stack 3D, model resistansi termal *steady-state* mengikuti resistansi jaringan seri:

$$R_{th,j-a} = \sum_{k=1}^{N_{stack}} \frac{t_k}{k_k \cdot A_k} + R_{th,hs} + R_{th,jc}$$

dimana $t_k$, $k_k$, $A_k$ adalah ketebalan, konduktivitas termal, dan luas efektif layer ke-$k$. Temperatur junction $T_j$ dihitung dari:

$$T_j = P_{tot} \cdot R_{th,j-a} + T_a$$

dengan $P_{tot}$ adalah disipasi daya total.

### 2.4 Total Thickness Variation (TTV) untuk Hybrid Bonding

Lau (2023) menetapkan bahwa TTV wafer harus berada di bawah ambang kritis:

$$TTV_{max} < \frac{p_{min}}{2}$$

Untuk pitch 10 μm, TTV maksimum yang diizinkan adalah 5 μm, dan untuk pitch 3 μm (generasi berikutnya), TTV harus turun ke 1,5 μm. Ini menjelaskan mengapa *back-grinding*, *polishing*, dan *planarization* menjadi node bottleneck operasional.

### 2.5 Bandwidth Density dan Latency

Metrik utama UCIe didefinisikan sebagai:

$$B_d = \frac{N_{lanes} \cdot f_{clk} \cdot W_{encoding}}{A_{bump}}$$

Untuk UCIe-A standar (32 lanes, 16 Gbps, PAM-16), bandwidth density mendekati 1 TB/s/mm².

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka kerja EDA 5-tahap untuk desain chiplet/3D-IC yang menjadi acuan operasional baru:

**Tahap 1 — System-Level Partitioning.**
Awalnya, spesifikasi sistem didekomposisi ke dalam *functional partition* (compute, I/O, memory, analog) dengan mempertimbangkan *technology node assignment*. Algoritma *min-cut partitioning* digunakan dengan objective function gabungan:

$$\min_{P} \left[ \alpha \cdot \sum_{e \in E_{cross}} w_e + \beta \cdot \sum_{v \in V} a_v \cdot y_v^{-1} \right]$$

dimana $w_e$ adalah bobot edge lintas partisi, $a_v$ luas chiplet, dan $y_v$ yield individual.

**Tahap 2 — Chiplet IP Sourcing.**
Mengevaluasi *make-or-buy* untuk setiap IP block dengan mengkuantifikasi biaya lisensi $C_{license}$, integrasi $C_{int}$, dan risiko:

$$C_{total,chiplet} = \min\{C_{inhouse}, C_{license} + C_{int} + R_{risk}\}$$

**Tahap 3 — Physical Co-Design & Floorplanning.**
Implementasi *co-floorplan* dengan tool Cadence Integrity 3D-IC, Synopsys 3DIC Compiler, atau Siemens Calibre 3DSTACK. Setiap die memiliki *power, performance, area* (PPA) profile yang disinkronkan melalui *unified power format* (UPF).

**Tahap 4 — Verification & Sign-off.**
Termasuk verifikasi *thermal-aware*, *signal integrity* (SI), *power integrity* (PI), dan *design-for-test* (DFT) untuk *inter-die interconnect*. *Test access architecture* (TAP) port direplikasi pada setiap chiplet.

**Tahap 5 — Package Assembly & KGD Screening.**
Dilanjutkan *dicing*, *pick-and-place*, dan *hybrid bonding* pada suhu rendah (≤300°C) untuk menghindari *thermal stress*. Lau (2023) menekankan bahwa profil termal harus dijaga:

$$\frac{dT}{dt} \leq \lambda_{max}$$

dengan $\lambda_{max}$ tipikal 3°C/menit untuk mencegah *Cu grain growth* dan *stress-induced voiding*.

SOP operasional ini di-*codify* ke dalam *tape-out checklist* yang mencakup 137 kriteria kelulusan (Lau, 2023), di antaranya TTV, *wafer bow*, *alignment accuracy* (±200 nm @3σ untuk hybrid bonding), dan *contact resistance* target <10 mΩ per bump.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus A: Yield Comparison Monolitik vs Chiplet pada Node 5 nm

Asumsikan *defect density* proses 5 nm = $D_0 = 0{,}12$ defect/cm², cluster parameter $c = 2{,}5$.

**Desain Monolitik:**
- Luas die = 600 mm² = 6 cm²
- $y_{mono} = (1 + \frac{6 \cdot 0{,}12}{2{,}5})^{-2{,}5} = (1 + 0{,}288)^{-2{,}5} = (1{,}288)^{-2{,}5}$
- $y_{mono} \approx 0{,}456$ (45,6%)

**Desain Chiplet (12 buah, luas 50 mm² masing-masing):**
- $y_{chiplet} = (1 + \frac{0{,}5 \cdot 0{,}12}{2{,}5})^{-2{,}5} = (1 + 0{,}024)^{-2{,}5} \approx 0{,}942$
- $Y_{pkg} = 0{,}942^{12} \approx 0{,}485$

**Yield Improvement Multiplier (YIM):**
$$YIM = \frac{Y_{pkg}}{y_{mono}} = \frac{0{,}485}{0{,}456} \approx 1{,}063 \text{ atau } +6{,}3\%$$

Untuk wafer 300 mm dengan 60 retikel 600 mm² vs 720 retikel 50 mm² (asumsi reticle reuse 80%), *die per wafer* (DPW) naik dari 60 menjadi 576—peningkatan 9,6× kapasitas meskipun *yield* per reticle turun.

### Studi Kasus B: Thermal Analysis 3D Stack

Konfigurasikan stack 3-tier: Logic (50 μm) + HBM (50 μm) + Base logic (50 μm), dengan $k_{Si} = 149$ W/m·K, luas efektif 100 mm² = 10⁻⁴ m².

$$R_{th,stack} = 3 \cdot \frac{50 \times 10^{-6}}{149 \cdot 10^{-4}} = \frac{150 \times 10^{-6}}{149 \times 10^{-4}} \approx 0{,}1007 \text{ K/W}$$

Tambahkan TIM1 ($R_{th} = 0{,}15$ K/W) dan heatsink ($R_{th,hs} = 0{,}05$ K/W), maka:

$$R_{th,j-a} = 0{,}1007 + 0{,}15 + 0{,}05 = 0{,}3007 \text{ K/W}$$

Pada $P_{tot} = 50$ W dan $T_a = 45°C$ (ambient server rack):

$$T_j = 50 \cdot 0{,}3007 + 45 = 60{,}04°C$$

Hasil ini masih di bawah $T_{j,max} = 85°C$ untuk aplikasi HPC, menyisikan margin 25°C untuk *thermal headroom* lonjakan beban AI inference.

### Studi Kasus C: Hybrid Bonding Pitch Decision

Hitung *cost-per-bit* untuk pitch 10 μm vs 25 μm pada interkoneksi die-to-die. Asumsikan 4 file × 64 baris × 16 lanes = 4096 interkoneksi per stack.

**Pitch 25 μm:**
- Luas antarmuka = $4096 \cdot 25^2 = 2{,}56 \times 10^6 \text{ μm}^2$ = 2,56 mm²
- Throughput per pin = 16 Gbps → total = 65,5 Tbps
- $B_d = 65{,}5 / 2{,}56 = 25{,}6