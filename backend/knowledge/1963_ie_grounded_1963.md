# 1963 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimalisasi Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari pendekatan *monolithic System-on-Chip* (SoC) menuju arsitektur *chiplet* dan *three-dimensional Integrated Circuit* (3D-IC) sebagai respons atas tiga keterbatasan fundamental fisika dan ekonomi. Pertama, batas skala *node* transistor di bawah 3 nm menghadapi peningkatan biaya *wafer fab* yang eksponensial, di mana biaya kapital *fab* telah menembus US$20 miliar per fasilitas (Roze & Gerber, 2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)). Kedua, *yield* monolitik menurun drastis seiring luas *die*, mengikuti formulasi Seiv dari Poisson, sehingga menyulitkan integrasi *heterogeneous IP* dalam satu *substrate* silikon. Ketiga, lonjakan permintaan bandwidth memori akibat workload *AI generative*, *high-performance computing* (HPC), dan *edge inference* memerlukan *data rate* di atas 8 Tbps yang hanya dapat dipenuhi oleh *interconnect* vertikal berdensitas ultra-tinggi.

Roze dan Gerber (2026) menegaskan bahwa paradigma chiplet membagi satu *SoC* besar menjadi beberapa *die* kecil yang berfungsi independen, kemudian diintegrasikan melalui *interposer* silikon, *bridge* organik, atau *direct stacking* 3D. Pendekatan ini memungkinkan pencampuran *process node* (misalnya *logic* 3 nm dengan *I/O* 28 nm) untuk menekan biaya hingga 40% sambil meningkatkan *yield* manufaktur. Namun, kompleksitas desain melonjak karena *floorplanning* tidak lagi二维; ia menjadi三维 dengan kendala *thermal*, *signal integrity*, *power delivery*, dan *mechanical stress* yang saling tergantung. Tanpa *Electronic Design Automation* (EDA) yang koheren, rantai pasok *heterogeneous integration* (HI) tidak akan mampu memenuhi jadwal *time-to-market* yang dituntut oleh hyperscaler.

Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) melengkapi narasi ini dengan menyoroti bahwa *direct Cu-Cu hybrid bonding* (HCB) merupakan *backbone* fisik dari stack chiplet, menawarkan pitch interkoneksi sub-10 μm dengan resistansi kontak mendekati nol, sehingga menggantikan *micro-bump* solder yang selama ini menjadi bottleneck bandwidth. Urgensi industrialisasi HCB tecermin dari investasi kolosal TSMC, Intel (Foveros), dan Samsung (X-Cube) yang memasuki volume produksi. Dalam konteks Teknik Industri, hal ini bukan sekadar persoalan fabrikasi, melainkan *network design problem* yang membutuhkan optimasi *supply chain*, alokasi kapasitas, dan kontrol kualitas statistik pada tingkat sistem.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield dan Defect Density untuk Chiplet

Yield kumulatif sistem chiplet dimodelkan sebagai perkalian yield setiap komponen, dengan asumsi *defect* bersifat independen per *die*:

$$Y_{system} = \prod_{i=1}^{n} Y_i \cdot Y_{assembly}$$

di mana $Y_i = e^{-D_0 \cdot A_i}$ merupakan yield chip individual mengikuti model Seiv, $D_0$ adalah *defect density* (cacat/cm²), dan $A_i$ adalah luas area chiplet ke-$i$. $Y_{assembly}$ merepresentasikan yield proses *bonding* yang dipengaruhi oleh akurasi alignment $(\sigma_{x}, \sigma_{y})$ menurut:

$$Y_{assembly} = \Phi\!\left(\frac{d_{pad}/2 - 3\sigma_{align}}{\sigma_{align}}\right)$$

dengan $\Phi(\cdot)$ fungsi kumulatif distribusi normal standar, $d_{pad}$ diameter pad Cu, dan $\sigma_{align}$ standar devisi alignment alat bonder.

### 2.2 Model Termal Jaringan Resistansi

Untuk stack 3D-IC dengan $k$ lapisan, resistansi termal ekuivalen dari *heat spreader* ke ambient dimodelkan sebagai:

$$R_{th} = \sum_{j=1}^{k} \frac{t_j}{k_j \cdot A_j}$$

dengan $t_j$ ketebalan lapisan ke-$j$, $k_j$ konduktivitas termal material (W/m·K), dan $A_j$ luas penampang efektif. Suhu *junction* maksimum kemudian:

$$T_j = T_{amb} + P_{tot} \cdot R_{th}$$

### 2.3 Optimasi Floorplanning Chiplet

Roze dan Gerber (2026) merumuskan *objective function* multi-kriteria untuk *partition* dan *placement* chiplet:

$$\min_{x,y,z,\rho} \;\; f = w_1 \cdot L_{wire} + w_2 \cdot P_{dyn} + w_3 \cdot \Delta T_{max} + w_4 \cdot C_{BoM}$$

terhadap约束:
- $0 \leq x_i, y_i \leq W_{interposer}$ (batas layout)
- $\sum_i P_i \leq P_{budget}$
- $T_j \leq T_{max}$
- $L_{wire} \leq L_{critical}$ (kendala timing)

di mana $w_1, w_2, w_3, w_4$ adalah bobot prioritas rekayasa, $L_{wire}$ total panjang kabel, $P_{dyn}$ disipasi dinamis, $\Delta T_{max}$ gradien termal maksimum, dan $C_{BoM}$ biaya material.

### 2.4 Kapasitansi dan Resistansi Interkoneksi Cu-Cu

Lau (2023) menurunkan model *parasitic* untuk pad HCB dengan diameter $d$ dan pitch $p$:

$$R_{Cu} = \frac{\rho_{Cu}}{t_{Cu}} \cdot \frac{4}{\pi d^2}, \quad C_{coupling} = \varepsilon_0 \varepsilon_r \frac{\pi d}{2 \cosh^{-1}(p/d)}$$

di mana $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m resistivitas tembaga, $t_{Cu}$ ketebalan pad, dan $\varepsilon_r$ permitivitas relatif dielektrik sekitarnya.

### 2.5 Energi Bonding dan CTE Mismatch

Tegangan geser antarmuka akibat *Coefficient of Thermal Expansion* (CTE) mismatch pasca-bonding:

$$\tau_{CTE} = G_{interface} \cdot \Delta\alpha \cdot \Delta T$$

dengan $G_{interface}$ modulus geser interface HCB, $\Delta\alpha = \alpha_{Si} - \alpha_{Cu}$, dan $\Delta T$ selisih suhu *bonding* ke suhu operasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka kerja EDA end-to-end untuk chiplet/3D-IC yang terdiri atas tujuh tahap *co-design* yang saling iteratif:

**Tahap 1 — System-Level Specification & Workload Profiling.** Definisikan *target performance* (TOPS, bandwidth, *latency*), *power envelope*, dan *thermal budget*. Profil workload AI/HPC digunakan untuk menentukan rasio komputasi-vs-memori.

**Tahap 2 — Chiplet Partitioning.** Gunakan algoritma *min-cut* dan *simulated annealing* untuk membagi *RTL* menjadi blok chiplet. Constraint meliputi area maksimum per chiplet ($\leq 100$ mm² untuk yield optimal) dan jumlah *I/O* per tepi yang konsisten dengan *pitch* HCB (umumnya $10$–$40$ μm).

**Tahap 3 — 3D Floorplanning.** Tentukan koordinat $(x_i, y_i, z_i)$ setiap chiplet dalam stack. Optimasi memperhitungkan *thermal coupling* silang dengan memprioritaskan chiplet berdaya tinggi di posisi dekat *heat sink*.

**Tahap 4 — Interconnect Planning & TSV/Bump Synthesis.** Untuk HCB, lakukan *pad assignment* dengan memperhatikan *signal integrity*, *power/ground* ratio (target 30%–50% pad daya), dan *redundancy* untuk toleransi defect.

**Tahap 5 — Physical Implementation (P&R 3D-aware).** *Place and Route* simultan multi-die dengan kendala *bump pattern*, *keep-out zone* TSV, dan *signal shielding*.

**Tahap 6 — Sign-off Multi-domain.** Lakukan verifikasi *timing*, *IR-drop*, *electromigration*, *thermal*, dan *mechanical stress* secara simultan karena variabel keputusan bersifat kopel.

**Tahap 7 — Packaging Assembly & Test Optimization.** Hasil layout die menjadi *input* untuk *pick-and-place* sequence, *underfill* dispense pattern, dan *known-good-die* (KGD) testing flow.

Standar industri terkait yang menjadi acuan antara lain:
- **JEDEC JEP95** untuk *package outline* dan termal.
- **SEMI EDA Standards** untuk interoperabilitas format data (*OpenAccess*, *LEF/DEF*, *GDSII OASIS*).
- **IPC-7095** untuk *3D component* defect criteria.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: SoC AI Accelerator 4-Chiplet dengan HCB

Misalkan sebuah *AI accelerator* dirancang dengan konfigurasi berikut:

| Parameter | Nilai |
|---|---|
| Jumlah chiplet logic | 4 |
| Proses fabrikasi | 3 nm logic / 5 nm memory |
| Luas per chiplet logic | $A_i = 80$ mm² |
| Diameter pad Cu HCB | $d = 5$ μm |
| Pitch HCB | $p = 10$ μm |
| Defect density wafer | $D_0 = 0.15$ cacat/cm² |
| Standar deviasi alignment | $\sigma_{align} = 0.5$ μm |
| Tebal Cu pad | $t_{Cu} = 3$ μm |
| Total daya aktif | $P_{tot} = 150$ W |
| Stack layer | 4 (2 logik + 2 HBM) |
| Ketebalan tiap die | $t_j = 50$ μm |

### 4.2 Perhitungan Yield

**Yield per chiplet logic:**
$$Y_i = e^{-0.15 \times 0.80} = e^{-0.12} \approx 0.8869$$

**Yield per HBM (asumsi $A = 70$ mm²):**
$$Y_{HBM} = e^{-0.15 \times 0.70} \approx 0.9003$$

**Yield assembly (alignment):**
$$Y_{assembly} = \Phi\!\left(\frac{2.5 - 1.5}{0.5}\right) = \Phi(2) \approx 0.9772$$

**Yield sistem total (4 chiplet logic + 2 HBM):**
$$Y_{sistem} = (0.8869)^4 \cdot (0.9003)^2 \cdot 0.9772$$
$$= 0.6185 \cdot 0.8106 \cdot 0.9772 \approx 0.4899$$

Artinya hanya sekitar 49% wafer-stack lolos uji fungsional, menyiratkan pentingnya strategi *redundancy* dan *repair*.

### 4.3 Perhitungan Termal

Asumsikan konduktivitas termal: $k_{Si} = 150$ W/m·K, $k_{TIM} = 5$ W/m·K, $k_{Cu} = 400$ W/m·K, dan luas efektif panas $A =