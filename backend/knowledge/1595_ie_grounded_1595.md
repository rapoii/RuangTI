# 1595 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Bonding Hibrida Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatal dari arsitektur *System-on-Chip* (SoC) monolitik menuju paradigma *chiplet* dan integrasi tiga dimensi (3D-IC) yang heterogen. Pergeseran ini dipicu oleh tiga tekanan simultan yang tidak lagi dapat diakomodasi oleh pendekatan monolitik konvensional. Pertama, biaya fabrikasi masker pada node lanjutan (3 nm, 2 nm, dan di bawahnya) melonjak secara eksponensial, dilaporkan melampaui USD 50 juta per set masker, sehingga hanya sedikit pemain yang mampu menanggung risiko *time-to-market* dan *mask-cost* sekaligus. Kedua, *yield* (*D0* — *defect density*) menurun drastis seiring menyusutnya *critical dimension*, dengan *yield* wafer efektif pada node 3 nm sering kali jatuh di bawah 60–70% untuk area *die* besar > 100 mm². Ketiga, kompleksitas verifikasi *place-and-route*, *timing closure*, dan *sign-off* multi-domain (sinyal, daya, termal, mekanis) melampaui kapasitas metodologi EDA warisan yang dirancang untuk SoC planar.

Dalam konteks inilah Roze dan Gerber (2026, DOI: 10.23919/icep-hbs69241.2026.11550563) menyajikan arsitektur *Electronic Design Automation* (EDA) holistik yang secara eksplisit memperlakukan *chiplet* sebagai *first-class citizen* — bukan sekadar *IP block* yang disambung dalam *package*. Solusi mereka menjawab tiga pertanyaan operasional utama yang selama ini menjadi ganjalan *product team*: (a) bagaimana melakukan *partitioning* logika–fungsi secara optimal antara *compute*, *I/O*, *memory*, dan *analog chiplet*; (b) bagaimana menjamin koherensi sinyal dan integritas daya pada antarmuka *hybrid bonding* dengan *pitch* < 10 µm; serta (c) bagaimana melakukan verifikasi lintas-domain secara *concurrent* sebelum *tape-out*.

Sejalan dengan itu, Lau (2023, DOI: 10.1007/978-981-19-9917-8_6) menekankan bahwa keberhasilan arsitektur chiplet sangat bergantung pada kualitas sambungan fisik antardie. Teknologi *Cu-Cu hybrid bonding* — yang didefinisikan sebagai penyambungan langsung paduan tembaga pada suhu rendah (200–300 °C) tanpa solder *bump* timbal — menjadi *enabler* utama karena menawarkan resistansi kontak $R_c < 10\,\text{m}\Omega$ per sambungan, *pitch* interkoneksi yang dapat dipadatkan hingga 1–3 µm, dan kompatibilitas dengan proses *back-end-of-line* (BEOL) planar. Tanpa EDA yang mampu memodelkan perilaku elektrik–termal–mekanis sambungan ini secara akurat, prediksi kinerja produk menjadi tidak reliabel, dan *respined* menjadi mahal.

Dari perspektif Teknik Industri, fenomena ini memiliki implikasi manajerial yang luas: keputusan *make-or-buy* untuk *chiplet*, optimalisasi portofolio produk, *capacity planning* lini *assembly* dan *hybrid-bonding*, hingga manajemen rantai pasok substrat *silicon interposer* dan *wafer*. Modul ini menyintesiskan kedua literatur tersebut ke dalam kerangka kerja rekayasa yang dapat dioperasionalkan oleh *industrial engineer*, *package architect*, dan *program manager* secara bersamaan.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis untuk desain chiplet dan 3D-IC memerlukan formulasi multi-disiplin yang mencakup *yield economics*, elektrik, termal, dan mekanis. Roze dan Gerber (2026) memformalkan masalah partisi sebagai optimasi *cost-of-good-die* dengan kendala *performance*, sedangkan Lau (2023) menyediakan model sambungan hibrida.

### 2.1 Model Yield Multi-Chiplet

Untuk partisi monolitik dengan luas aktif $A_{mono}$, *yield* wafer mengikuti model Poisson sederhana:

$$Y_{mono} = e^{-D_0 \cdot A_{mono}}$$

Ketika partisi dipecah menjadi $n$ chiplet dengan luas $A_i$, asumsinya bahwa setiap chiplet harus lulus secara independen (*known-good-die*, KGD), sehingga *yield* sistem menjadi:

$$Y_{system} = \prod_{i=1}^{n} Y_i = \prod_{i=1}^{n} e^{-D_0 \cdot A_i} = e^{-D_0 \sum_{i=1}^{n} A_i}$$

Namun, *yield* paket 3D-IC juga dipengaruhi oleh *assembly yield* $Y_a$ dan *bonding yield* $Y_b$:

$$Y_{3D} = Y_{system} \cdot Y_a \cdot Y_b$$

### 2.2 Cost-of-Good-Die (CoGD)

Biaya per *die* yang layak menjadi metrik keputusan utama. Untuk arsitektur chiplet:

$$\text{CoGD}_{chiplet} = \frac{\sum_{i=1}^{n} C_{wafer,i} / N_{gross,i}}{Y_{system} \cdot Y_a \cdot Y_b}$$

dengan $C_{wafer,i}$ adalah biaya wafer untuk chiplet ke-$i$, dan $N_{gross,i}$ jumlah *die* bruto per wafer. Pada arsitektur monolitik, $n=1$ dan $Y_a \cdot Y_b = 1$, tetapi $C_{wafer}$ jauh lebih tinggi karena proses node lanjutan digunakan untuk seluruh *die*.

### 2.3 Resistansi Sambungan Cu-Cu Hybrid Bonding

Lau (2023) menurunkan resistansi kontak sambungan *hybrid bonding* sebagai:

$$R_c = \frac{\rho_{Cu}}{2 \pi r_b} \cdot \tanh\!\left(\frac{t_{Cu}}{2 r_b}\right) + R_{interface}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}\,\Omega\cdot\text{m}$ adalah resistivitas tembaga, $r_b$ jari-jari *bond pad* efektif, $t_{Cu}$ ketebalan tembaga difusi, dan $R_{interface}$ resistansi lapisan antarmuka oksida/senyawa intermetalik. Untuk $r_b = 1.5\,\mu\text{m}$ dan $t_{Cu} = 3\,\mu\text{m}$, diperoleh $R_c \approx 5\text{–}10\,\text{m}\Omega$ per sambungan.

### 2.4 Model Termal Jaringan Resistansi

Stack 3D-IC dengan $k$ die direpresentasikan sebagai jaringan *thermal resistance* seri dan paralel:

$$\theta_{JA,total} = \left( \sum_{i=1}^{k} \frac{1}{\theta_{JA,i}^{-1} + \theta_{TIM}^{-1}} \right)^{-1} + \theta_{HS}$$

dengan $\theta_{TIM}$ resistansi *thermal interface material* dan $\theta_{HS}$ resistansi *heat spreader*. Temperatur *junction* maksimum:

$$T_{J,max} = T_A + P_{total} \cdot \theta_{JA,total}$$

### 2.5 Bandwidth Antarmuka dan Power Delivery

*Bandwidth* total agregat antarmuka *hybrid bonding*:

$$BW = N_{bumps} \cdot f_{clock} \cdot W_{bus} \cdot \eta_{encoding}$$

dengan $\eta_{encoding}$ efisiensi skema *encoding* (misalnya PAM-4, 64b/66b). Untuk catu daya, *target impedance* PDN:

$$Z_{target} = \frac{\Delta V_{allowed}}{I_{transient,max}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) merancang *flow* EDA chiplet yang terstruktur dalam tujuh tahap utama yang harus dijalankan secara *concurrent* (bukan sekuensial) untuk menghindari iterasi mahal pasca-tape-out.

**Tahap 1 — Spesifikasi dan Partisi Arsitektural.** Tim produk dan *architect* menetapkan *performance budget* (throughput, latensi, *power*, *area*) serta *chiplet boundary* berdasarkan *roadmap* proses (misalnya chiplet logika pada 3 nm, chiplet I/O pada 7 nm, chiplet analog pada 28 nm). Output: dokumen *chiplet specification* dengan target *yield*, *cost*, dan *interface protocol* (UCIe, BoW, atau *proprietary*).

**Tahap 2 — Co-Design Logis-Fisik.** Platform EDA menjalankan *partitioning* otomatis dengan *objective function* CoGD minimum, kendala *thermal*, *timing*, dan *signal integrity*. Algoritma *floorplanning* 3D diterapkan dengan *thermal-aware placement* sejak iterasi pertama.

**Tahap 3 — Desain Antarmuka Hybrid Bonding.** Mengikuti pedoman Lau (2023), dirancang *pad array* dengan *pitch* target (umumnya 3–10 µm untuk produksi masal). Parameter *bonding window* — suhu 250–300 °C, tekanan 100–200 N/cm², waktu 30–60 menit, alignment < ±200 nm — menjadi *hard constraint* dalam DRC.

**Tahap 4 — Verifikasi Multi-Domain.** Ini adalah kontribusi orisinal Roze dan Gerber: *unified verification engine* yang menjalankan secara paralel *static timing analysis* (STA), *power integrity* (IR-drop, *electromigration*), *signal integrity* (crosstalk, refleksi pada *TSV*/*bond*), dan *thermal-electrical co-simulation* untuk mencegah *thermal runaway*.

**Tahap 5 — Sign-off Ekstraksi Parasitik dan Rule Check.** Ekstraksi parasitik RLC dari layout 3D dengan model *bonding pad*, *TSV*, dan *redistribution layer* (RDL). *Design Rule Check* (DRC) dan *Layout Versus Schematic* (LVS) mencakup ketiga domain.

**Tahap 6 — Generasi Data Manufaktur (Tape-Out).** Output berupa *GDSII-OASIS*