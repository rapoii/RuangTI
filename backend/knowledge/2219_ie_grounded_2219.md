# 2219 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Arsitektur Rekayasa Heterogen, Hybrid Bonding, dan Optimalisasi Sistem Pengemasan Lanjut

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki fase transisi fundamental dari paradigma *system-on-chip* (SoC) monolitik menuju arsitektur *system-in-package* (SiP) berbasis chiplet dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh tiga tekanan simultan: (1) melonjaknya biaya litografi *sub-3 nm* yang melampaui USD 200 juta per *mask set*; (2) menipisnya *headroom* penskalaan Moore yang ditandai dengan efek *short-channel*, *leakage*, dan *variability* transistor; serta (3) meningkatnya kebutuhan komputasi heterogen yang menuntut ko-lokasi CPU, GPU, memori bandwidth-tinggi (*HBM*), akselerator AI, dan *radio-frequency* dalam satu kemasan dengan efisiensi energi optimal.

Roze dan Gerber (2026), dalam makalah yang dipresentasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS), menegaskan bahwa rantai nilai desain semikonduktor kini tidak lagi berakhir pada *tape-out* *wafer*, melainkan harus diperluas ke domain *packaging* yang selama ini diperlakukan sebagai *back-end* sekunder. Mereka berargumen bahwa tanpa *Electronic Design Automation* (EDA) terpadu yang mampu menjembatani *chip*, *package*, dan *board*, *design closure* untuk rakitan chiplet tidak akan tercapai pada iterasi pertama. Pendekatan konvensional yang memisahkan tanggung jawab antara *foundry*, *OSAT* (*Outsourced Semiconductor Assembly and Test*), dan *OEM* terbukti menghasilkan *iterasi* desain yang panjang, di mana satu *trial* pada *advanced substrate* dapat menelan biaya NRE (Non-Recurring Engineering) USD 5–15 juta dengan waktu siklus 8–14 minggu.

Di sisi material dan proses, Lau (2023) mendokumentasikan bahwa teknologi *Cu-Cu hybrid bonding* telah menjadi tulang punggung utama pengemasan 3D-IC kelas atas, menggantikan *micro-bump* solder tradisional karena tiga keunggulan kuantitatif: pitch interkoneksi yang dapat dipadatkan hingga 3 µm atau bahkan sub-1 µm; resistansi kontak per sambungan yang turun dua ordres magnitudo (dari ~10 mΩ pada *micro-bump* menjadi < 100 µΩ pada *direct Cu-Cu bond*); serta *current-carrying capacity* yang memenuhi ambang *electromigration* untuk aplikasi daya tinggi. Namun, Lau juga menekankan bahwa adopsi *hybrid bonding* menuntut toleransi proses pada tingkat sub-mikron, yang mustahil dipenuhi tanpa model EDA yang secara koheren memprediksi *coplanarity*, *thermal expansion mismatch*, dan perilaku *anneal* pada suhu 250–400 °C.

Secara ekonomis, pasar *advanced packaging* diproyeksikan tumbuh dari USD 44,8 miliar pada 2023 menjadi lebih dari USD 80 miliar pada 2030, dengan *chiplet* dan *3D-IC* menyumbang > 45 % pangsa pendapatan. Aplikasi *driver*-nya meliputi *data center accelerators* (NVIDIA, AMD Instinct, Google TPU), *smartphone* AI *on-device* (Apple M-series, Qualcomm Snapdragon), serta *high-performance computing* eksaskala. Urgensi industri, oleh karena itu, bukan sekadar teknologis, melainkan strategis-nasional: kemampuan merancang dan memverifikasi chiplet menjadi *sovereign capability* yang menentukan daya saing rantai pasok elektronik suatu negara.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Hasil (Yield) untuk Rakitan Chiplet

Berbeda dengan SoC monolitik yang *yield*-nya dimodelkan oleh persamaan Seed seperti $Y_{SoC} = e^{-\sqrt{AD}}$ dengan $A$ adalah *defect density* dan $D$ luas *die*, sistem chiplet memerlukan formulasi *compound yield* yang memperhitungkan hasil setiap *tile* dan probabilitas keberhasilan *bonding*:

$$Y_{assembly} = \prod_{i=1}^{n} Y_i \cdot Y_{bond}^{n-1}$$

di mana $Y_i$ adalah hasil *known-good-die* (KGD) chiplet ke-$i$, $Y_{bond}$ adalah hasil sambungan *hybrid bonding* per *interface*, dan $n$ adalah jumlah *tile* aktif. Roze dan Gerber (2026) menekankan bahwa asumsi KGD dengan $Y_i \geq 0{,}95$ adalah prasyarat absolut—tanpanya, $Y_{assembly}$ untuk $n = 8$ *tile* runtuh menjadi $(0{,}90)^8 \approx 0{,}43$, yang secara komersial tidak layak.

### 2.2 Resistansi Sambungan Hybrid Bonding Cu-Cu

Lau (2023) menurunkan resistansi sambungan *hybrid bonding* dari geometri *pad* tembaga pasivasi dan resistivitas *bulk* Cu ($\rho_{Cu} \approx 1{,}68 \times 10^{-8}$ Ω·m):

$$R_{Cu-Cu} = \frac{\rho_{Cu}}{2\pi r_{contact}} + R_{interface}$$

dengan $r_{contact}$ adalah jari-jari efektif sambungan setelah *annealing* dan *grain growth*, dan $R_{interface}$ menangkap kontribusi *oxide barrier* dan *dislocation*. Untuk pitch $p = 3\ \mu m$ dan *pad* diameter 2 µm, $R_{Cu-Cu}$ tipikal berada di rentang 30–80 µΩ per sambungan, dibandingkan dengan *micro-bump* solder Cu-pillar + Sn-Ag yang mencapai 5–15 mΩ.

### 2.3 Kapasitansi dan Induktansi Through-Silicon-Via (TSV)

Untuk TSV silikon dengan diameter $d_{TSV}$, tinggi $h$, dan *liner* dielektrik $\text{SiO}_2$ dengan permitivitas relatif $\varepsilon_r = 3{,}9$:

$$C_{TSV} = \frac{2\pi \varepsilon_0 \varepsilon_r h}{\ln\!\left(\dfrac{d_{TSV}}{d_{core}}\right)}, \quad L_{TSV} \approx \frac{\mu_0 h}{2\pi}\left[\ln\!\left(\frac{2h}{r_{TSV}}\right) - 1\right]$$

Variabel-variabel ini menentukan *impedansi karakteristik* $\sqrt{L/C}$ yang harus dicocokkan dengan *transmission line* *redistribution layer* (RDL) untuk mencegah refleksi pada bandwidth > 100 GHz (khas *SerDes* 112G/224G).

### 2.4 Anggaran Termal dan Persamaan Konduksi

Untuk *stack* 3D-IC dengan $n$ *layer* aktif, densitas daya rata-rata $\bar{q}$ (W/cm²), dan resistansi termal *package* $\theta_{JA}$:

$$T_j = T_a + \bar{q} \cdot A \cdot \theta_{JA}$$

Integrasi vertikal menurunkan $\theta_{JA}$ efektif sebesar faktor:

$$\theta_{JA,3D} = \theta_{JA,2D} \cdot \left(1 - \eta_{3D}\right), \quad \eta_{3D} \approx 0{,}15 - 0{,}30$$

Artinya, untuk paket yang sama dengan daya 150 W, transisi 2.5D ke 3D-CMOS-on-CMOS menurunkan $T_j$ sebesar 22–45 K, namun menempatkan *thermal hotspot* pada lapisan terdalam sehingga *thermal-aware floorplanning* EDA menjadi wajib.

### 2.5 Model Biaya Total Sistem Chiplet

$$C_{total} = \underbrace{\sum_{i=1}^{n}(C_{die,i} + C_{probe,i} + C_{kgd,i})}_{\text{biaya wafer + uji}} + \underbrace{\sum_{j=1}^{m} C_{bond,j}}_{\text{hybrid bonding}} + C_{substrate} + C_{final\ test}$$

di mana indeks $i$ berjalan pada *tile* heterogen (misalnya 3 nm compute + 5 nm I/O + 28 nm analog) dan indeks $j$ pada tahap *stacking* (misalnya *face-to-face* + *face-to-back*).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA tiga-pilar yang secara struktural harus dijalankan secara *co-design*, bukan sekuensial:

**Pilar 1 — System-Level Planning & Partitioning.** Berangkat dari spesifikasi *workload* (misalnya throughput inferensi AI dalam *tokens/s*) dan anggaran area, daya, serta