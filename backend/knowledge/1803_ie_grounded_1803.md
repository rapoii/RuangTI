# 1803 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Chiplet Design and Heterogeneous Integration Packaging. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma yang sangat signifikan, yaitu pergeseran dari arsitektur *System-on-Chip* (SoC) monolitik menuju arsitektur *System-in-Package* (SiP) berbasis chiplet dan *Three-Dimensional Integrated Circuit* (3D-IC). Menurut Roze dan Gerber (2026) dalam papernya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, pendekatan desain konvensional menghadapi瓶颈 (*bottleneck*) fundamental pada tiga aspek kritis: biaya masker litografi yang melonjak eksponensial seiring penurunan *node*, yield manufaktur yang menurun tajam pada area die besar, serta keterbatasan *reticle limit* yang membatasi kompleksitas fungsional dalam satu die. DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563).

Disrupsi teknologi ini dipicu oleh permintaan pasar yang masif terhadap aplikasi *High-Performance Computing* (HPC), *Artificial Intelligence* (AI) accelerator, dan *edge computing* yang membutuhkan throughput data masif dengan latensi rendah. Roze dan Gerber (2026) menekankan bahwa desainer chip kini harus menangani tantangan *heterogeneous integration* yang jauh lebih kompleks dibanding era SoC: perbedaan *process design kit* (PDK) antar chiplet, variasi *thermal expansion coefficient* (CTE), dan kompleksitas *routing* sinyal pada *interposer* atau *bridge*. Tanpa dukungan *Electronic Design Automation* (EDA) yang dirancang ulang secara fundamental, desain 3D-IC tidak akan mampu memenuhi *time-to-market* yang dituntut oleh rantai pasok semikonduktor modern.

Lau (2023) dalam karyanya *Chiplet Design and Heterogeneous Integration Packaging* meletakkan landasan teknologi manufaktur yang relevan, khususnya teknologi *Cu-Cu Hybrid Bonding*. Teknologi ini memungkinkan pitch koneksi antar die mencapai sub-mikron (≤ 3 µm) dengan resistansi kontak yang sangat rendah, sehingga menjadi tulang punggung arsitektur 3D-IC *face-to-face* dan *face-to-back*. DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6). Kombinasi antara solusi EDA yang holistik (Roze & Gerber, 2026) dan proses hybrid bonding yang成熟 (Lau, 2023) merepresentasikan *value chain* rekayasa industri yang saling komplementer—dimana otomatisasi desain dan presisi manufaktur harus berjalan simultan untuk mencapai target *Known Good Die* (KGD) yield di atas 95%.

Konteks ekonomi makro menunjukkan bahwa pasar *advanced packaging* diproyeksikan melampaui USD 80 miliar pada 2030, dengan CAGR di atas 10% (Roze & Gerber, 2026). Bagi insinyur industri, hal ini bukan sekadar peluang teknologi, melainkan sebuah imperative strategis: merancang *production system* yang mampu mengelola yield, throughput, dan *cycle time* pada lini hybrid bonding yang memiliki toleransi proses sangat ketat.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis untuk desain EDA chiplet dan 3D-IC memerlukan formulasi multi-disiplin yang mengintegrasikan aspek elektrikal, termal, mekanis, dan manufaktur. Berdasarkan Roze dan Gerber (2026), terdapat empat persamaan fundamental yang membentuk dasar optimasi:

**2.1 Model Yield Chiplet Modular**

Berbeda dengan SoC monolitik, yield sistem chiplet mengikuti formulasi probabilistik kombinasi independen:

$$Y_{system} = \prod_{i=1}^{n} Y_{chiplet,i}$$

di mana $Y_{system}$ adalah yield total rakitan, $Y_{chiplet,i}$ adalah yield individual chiplet ke-$i$, dan $n$ adalah jumlah chiplet dalam paket. Untuk chiplet identik dengan area $A$ dan defect density $D_0$ (def/cm²), yield mengikuti model Poisson:

$$Y_{chiplet} = e^{-D_0 \cdot A}$$

Pentingnya dekomposisi area ini terlihat dari perbandingan kuantitatif: sebuah die monolitik 600 mm² dengan $D_0 = 0{,}005$ def/cm² memiliki yield $Y \approx e^{-0{,}3} \approx 0{,}741$, sedangkan dekomposisi menjadi 4 chiplet masing-masing 150 mm² menghasilkan yield gabungan $(e^{-0{,}075})^4 \approx 0{,}740$ per chiplet dan $0{,}740^4 \approx 0{,}300$ untuk seluruh paket — yang justru lebih rendah kecuali strategi *redundancy* dan *known-good-die* testing diterapkan (Roze & Gerber, 2026).

**2.2 Resistansi Termal Jaringan Stacked-Die**

Distribusi panas pada 3D-IC dimodelkan menggunakan *thermal resistance network*:

$$\theta_{JA} = \theta_{JC} + \theta_{TIM} + \theta_{HS}$$

dengan $\theta_{JA}$ adalah resistansi termal total junction-to-ambient, $\theta_{JC}$ junction-to-case, $\theta_{TIM}$ resistansi *thermal interface material*, dan $\theta_{HS}$ heatsink. Untuk stack vertikal dengan $n$ die dan vias termal, Roze dan Gerber (2026) menurunkan formula efektif:

$$\theta_{stack} = \sum_{i=1}^{n} \left( \frac{t_i}{k_{Si} \cdot A_{eff,i}} \right) \parallel \left( \frac{1}{\theta_{TSV,i}} \right)$$

di mana $t_i$ adalah ketebalan die ke-$i$, $k_{Si} \approx 148$ W/m·K adalah konduktivitas termal silikon, $A_{eff,i}$ area efektif, dan $\theta_{TSV,i}$ resistansi termal TSV yang dihitung melalui:

$$\theta_{TSV} = \frac{t_{Si}}{k_{Cu} \cdot \pi r_{TSV}^2} + \frac{t_{barrier}}{k_{barrier} \cdot \pi r_{TSV}^2}$$

dengan $k_{Cu} \approx 400$ W/m·K untuk tembaga, $r_{TSV}$ radius vias, dan $t_{barrier}$ ketebalan *barrier layer*.

**2.3 Pitch Hybrid Bonding dan Toleransi Alignment**

Lau (2023) menurunkan relasi antara pitch bonding $p$, akurasi alignment $\sigma_{align}$, dan *bonding yield*:

$$p_{min} = k \cdot \sigma_{align}$$

dengan $k$ adalah faktor desain (umumnya $k = 6$ untuk yield 99,7% atau *3-sigma*). Untuk target pitch 3 µm dengan $\sigma_{align} = 0{,}5$ µm, ekspresi ini menunjukkan akurasi alat hybrid bonding harus $\sigma_{align} \leq 0{,}5$ µm. Resistansi kontak hybrid bonding Cu-Cu juga mengikuti:

$$R_{contact} = \frac{\rho_{Cu}}{p \cdot t_{bond}}$$

dengan $\rho_{Cu} = 1{,}68 \times 10^{-8}$ Ω·m, $t_{bond}$ ketebalan Cu pad. Untuk $p = 3$ µm dan $t_{bond} = 500$ nm, diperoleh $R_{contact} \approx 11{,}2$ mΩ per kontak, sebanding dengan target interconnect.

**2.4 Optimasi Multi-Objective EDA**

Roze dan Gerber (2026) mengusulkan *cost function* multi-target untuk router EDA 3D-IC:

$$\min_{\mathbf{x}} F(\mathbf{x}) = w_1 \cdot L_{wire} + w_2 \cdot \tau_{delay} + w_3 \cdot P_{dyn} - w_4 \cdot M_{margin}$$

dengan bobot $w_i$ yang diatur oleh desainer, $L_{wire}$ total panjang routing, $\tau_{delay}$ delay propagasi, $P_{dyn}$ disipasi daya dinamis, dan $M_{margin}$ margin manufaktur (terutama terhadap variasi CTE).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi desain chiplet dan 3D-IC di industri mengikuti *workflow* EDA yang direkonstruksi total. Roze dan Gerber (2026) memaparkan arsitektur solusi EDA end-to-end yang terdiri atas tujuh tahap utama:

**Tahap 1: Chiplet Library dan PDK Harmonization.** Setiap chipletvendor menyediakan *abstract* yang berisi *bump map*, *timing model*, *power profile*, dan *thermal characteristics*. PDK harus dinormalisasi agar tools EDA downstream mampu melakukan integrasi tanpa ambiguitas.

**Tahap 2: System-Level Partitioning.** Optimasi partisi fungsional dilakukan dengan algoritma *min-cut multi-constraint* yang mempertimbangkan throughput data, thermal envelope, dan biaya per chiplet. Roze dan Gerber (2026) menekankan perlunya iterasi antara electrical-thermal-mechanical (ETM) co-simulation sejak tahap awal.

**Tahap 3: Interposer / Bridge Floorplanning.** Penempatan chiplet pada interposer dilakukan dengan objektif meminimalkan panjang routing, memaksimumkan thermal spreading, dan mempertahankan area margin untuk dicing street. Algoritma *simulated annealing* atau *mixed-integer linear programming* (MILP) digunakan.

**Tahap 4: 3D Routing dan Signal Integrity.** Router harus menangani *micro-bumps* dan *hybrid bonding pads* dengan densitas tinggi, melakukan *shielding* untuk sinyal critical, dan menjamin *signal integrity* lintas-stack. Tools seperti Cadence Integrity 3D-IC atau Synopsys 3DIC Compiler menjadi referensi industri.

**Tahap 5: Thermal-Aware Verification.** Simulasi termal full-chip dengan power map realistis dijalankan untuk menjamin junction temperature $T_j \leq 85$°C pada workload puncak.

**Tahap 6: Manufacturability Check (DFM).** DRC/LVS disesuaikan dengan aturan hybrid bonding Lau (2023): *bonding pitch minimum* 3 µm, *Cu recess* ±50 nm, *dishing control* ≤ 20 nm, dan *dielectric recess* ≤ 30 nm.

**Tahap 7: Tape-out dan Hand-off ke Foundry.** Output GDSII atau OASIS di-*merge* dengan chiplet individual untuk *mask data preparation*.

Lau (2023) melengkapi sisi manufaktur dengan SOP proses hybrid bonding yang terdiri atas: (i) *chemical mechanical polishing* (CMP) untuk mencapai *Cu dishing* terkontrol, (ii) *surface clean* plasma untuk menghilangkan oksida dan kontaminan, (iii) *alignment* optik dengan akurasi sub-µm, (iv) *thermo-compression bonding* pada suhu 200–300°C dengan tekanan 50–150 MPa selama 30–60 menit, dan (v) *anneal* pasca-bonding untuk difusi Cu dan perbaikan rekristalisasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Desain paket 3D-IC untuk AI accelerator yang mengintegrasikan 4 chiplet komputasi (masing-masing 100 mm², teknologi 5 nm) di atas 1 chiplet memori HBM3 base (200 mm²) melalui *active interposer* 65 nm.

**Langkah 1: Perhitungan Yield Chiplet**

Dengan defect density $D_0 = 0{,}005$ def/cm² pada node 5 nm:

$$Y_{compute} = e^{-0{,}005 \times 1{,}0} = e^{-0{,}005} \approx 0{,}9950$$

Setelah KGD testing dengan *test coverage* 99%:

$$Y_{KGD} = Y_{compute} \times C_{test} = 0{,}9950 \times 0{,}99 \approx 0{,