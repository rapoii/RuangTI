# 2459 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Bonding Hibrida, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global saat ini berada di persimpangan kritis. Setelah hampir enam dekade mengikuti Hukum Moore melalui penyusutan node planar, biaya litografi EUV (Extreme Ultraviolet) pada node 3 nm dan 2 nm melonjak secara eksponensial, sementara *yield* (tingkat hasil) menurun drastis karena kompleksitas proses manufaktur monolitik. Roze dan Gerber (2026) dalam makalahnya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* — yang dipublikasikan melalui DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) — menekankan bahwa arsitektur chiplet dan *3D-IC* (tiga dimensi integrated circuit) bukan lagi sekadar opsi teknis, melainkan telah menjadi *imperatif strategis* bagi keberlanjutan performa komputasi. Pendekatan ini memungkinkan fabrikasi *dies* kecil (*chiplets*) menggunakan *process node* yang berbeda-beda (heterogen) — misal logika 3 nm, memori 5 nm, I/O 7 nm — yang kemudian diintegrasikan dalam satu paket melalui *interposer*, *redistribution layer* (RDL), atau *through-silicon via* (TSV).

Secara ekonomis, strategi chiplet menekan biaya *non-recurring engineering* (NRE) karena masing-masing *die* dapat di-*tape-out* dengan mask set yang lebih kecil dan *yield* yang lebih tinggi dibanding *reticle-limit* monolitik. Secara teknis, integrasi vertikal mengurangi panjang *interconnect* kritis dari skala milimeter (pada PCB) menjadi skala mikrometer (pada RDL/TSV), sehingga menurunkan latensi dan konsumsi daya. Namun, pergeseran paradigma ini menciptakan tantangan desain yang sangat besar: desainer tidak lagi bekerja pada satu *die* terisolasi, melainkan pada sistem multi-die yang memerlukan ko-simulasi listrik, termal, mekanik, dan *signal/power integrity* secara simultan.

Di sinilah peran *Electronic Design Automation* (EDA) menjadi sentral. Roze dan Gerber (2026) memposisikan platform EDA modern — yang mencakup *system-level co-design*, *package implementation*, dan *multi-die physical verification* — sebagai *backbone* yang memungkinkan iterasi cepat dari partisi arsitektural hingga *sign-off* manufaktur. Pelengkap penting untuk konteks ini adalah teknologi *Cu-Cu hybrid bonding* yang diuraikan secara komprehensif oleh John H. Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)). Lau menjelaskan bahwa *hybrid bonding* Cu-Cu dengan pitch sub-10 µm memungkinkan densitas sambungan yang sebelumnya hanya dapat dicapai oleh TSV, tetapi dengan resistansi寄生 dan kapasitansi yang jauh lebih rendah, sekaligus mendukung penumpukan *face-to-face* yang esensial untuk *3D-IC* performa-tinggi. Kombinasi EDA terpadu dan proses *hybrid bonding* menjadi tulang punggung *More-than-Moore* era pasca-2025.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka kuantitatif untuk desain chiplet dan 3D-IC memerlukan beberapa model fundamental yang harus diselesaikan secara simultan oleh platform EDA:

**Model Termal Jaringan Resistansi.** Panas yang dibangkitkan oleh *chiplet* daya-tinggi harus dihantarkan ke *heat spreader* dan akhirnya ke *heat sink*. Resistansi termal konduksi 1D mengikuti hukum Fourier:

$$R_{th} = \frac{t}{k \cdot A}$$

di mana $t$ adalah ketebalan lapisan (m), $k$ adalah konduktivitas termal material (W/m·K), dan $A$ adalah luas penampang (m²). Untuk *stack* 3D multi-die, total resistansi termal ekivalen dievaluasi menggunakan jaringan *thermal RC* analog dengan jaringan *electrical RC*, di mana kapasitansi termal $C_{th} = \rho \cdot c_p \cdot V$ merepresentasikan kemampuan *die* menyimpan energi panas.

**Model Keterlambatan Interkoneksi.** Panjang interkoneksi yang sangat pendek pada *hybrid bonding* Cu-Cu membuat penundaan propagasi didominasi oleh efek RC. Penundaan *interconnect* Elmore untuk segmen terdistribusi:

$$t_d \approx 0.69 \cdot R_{int} \cdot C_{int}$$

dengan $R_{int}$ dan $C_{int}$ masing-masing adalah resistansi dan kapasitansi parasitik *bump*. Roze dan Gerber (2026) menekankan bahwa pitch *hybrid bonding* modern (sekitar 3–10 µm) menghasilkan kapasitansi sambungan yang mendekati orde femtofarad, sehingga penundaan I/O antar-die turun secara signifikan dibanding solder bump pitch ~130 µm.

**Model Penjadwalan Sinyal Jam Lintas-Die.** Untuk sinyal jam yang melewati batas *die* melalui sambungan *hybrid bonding*, diperlukan *budget* penjadwalan yang ketat. Batasan *clock period* minimum:

$$T_{clk} > T_{co} + T_{su} + T_{d,inter} + T_{skew}$$

di mana $T_{co}$ adalah *clock-to-output* *flip-flop*, $T_{su}$ adalah *setup time*, $T_{d,inter}$ adalah penundaan antar-die (tergantung geometri *bump* dan *buffer* *driver*), dan $T_{skew}$ adalah variasi *clock skew*.

**Model Hasil dan Ekonomi Manufaktur.** *Yield* sebuah *die* individual mengikuti model Poison:

$$Y = e^{-\lambda D}$$

dengan $\lambda$ adalah *defect density* (cm⁻²) dan $D$ adalah luas *die* aktif (cm²). Untuk sistem chiplet, *yield* paket total mempertimbangkan *known-good-die* (KGD):

$$Y_{pkg} = \prod_{i=1}^{n} Y_i \cdot Y_{assembly}$$

Nilai ini langsung mempengaruhi biaya per sistem, yang diformulasikan sebagai:

$$C_{sistem} = \frac{\sum_i C_{wafer,i}}{N_i \cdot Y_i \cdot Y_{assembly}} + C_{pkg} + C_{test}$$

di mana $C_{wafer,i}$ adalah biaya *wafer* untuk *chiplet* ke-$i$ dan $N_i$ adalah jumlah *die* per *wafer*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan alur kerja rekayasa berlapis yang menstandarkan proses desain chiplet/3D-IC dari partisi hingga *tape-out*. Prosedur operasional standar ini dapat diabstraksikan sebagai berikut:

**Tahap 1 — Partisi Arsitektural & Spesifikasi Sistem.** *System architect* menentukan fungsi logika, memori, dan I/O yang akan dialokasikan ke masing-masing *chiplet*. Platform EDA modern menyediakan *early system-level exploration* dengan *power/performance/area* (PPA) dan estimasi termal berbasis abstraksi.

**Tahap 2 — Desain *Chiplet* Independen (Block-Level).** Setiap *chiplet* dirancang menggunakan *standard cell*, *IP*, dan *memory compilers* yang sesuai dengan *process design kit* (PDK) target. Pada tahap ini, *floorplan*, *place-and-route*, dan *clock tree synthesis* dilakukan secara independen per *chiplet*.

**Tahap 3 — Integrasi Paket & Implementasi *Interposer*/RDL.** Setelah *chiplet* masing-masing mencapai *sign-off*, EDA *package implementation tool* melakukan penempatan *chiplet* pada *interposer* atau *substrate*, perutean RDL/TSV, dan generasi *bump map* untuk *hybrid bonding*. Tahap ini memerlukan verifikasi *design rule checking* (DRC) dan *layout-versus-schematic* (LVS) khusus 3D.

**Tahap 4 — Ko-simulasi Multi-Fisika.** Ini adalah diferensiasi utama yang disoroti Roze dan Gerber (2026): simulasi listrik, termal, dan mekanik dilakukan secara *co-simulated* untuk mencegah iterasi mahal. *Power map* dari hasil simulasi listrik digunakan sebagai *input* untuk analisis termal *finite element* (FEA) yang menghasilkan peta suhu, yang kemudian dimasukkan kembali ke *timing analysis* untuk koreksi *temperature-dependent delay*.

**Tahap 5 — Verifikasi & *Tape-out* Multi-Die.** *Multi-die DRC* memastikan kepatuhan terhadap aturan *hybrid bonding* (misal *minimum pitch*, *keep-out zone*). Setelah semua verifikasi lulus, *GDSII/OASIS* untuk setiap *chiplet* dan *package* dihasilkan secara terpisah.

Untuk proses *hybrid bonding* Cu-Cu yang dijelaskan Lau (2023), SOP manufaktur tambahan meliputi: (a) persiapan permukaan Cu dengan *chemical-mechanical polishing* (CMP) mencapai kekasaran sub-nanometer; (b) aktivasi permukaan pada suhu ruang atau rendah (300–400 °C); (c) *dielectric-dielectric bonding* (umumnya SiCN atau SiO₂) secara simultan dengan *Cu-Cu bonding*; dan (d) *annealing* pasca-bonding untuk memperbaiki kontak Cu dan densifikasi *dielectric*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Sistem Multi-Chiplet Akselerator AI.**

Sebuah *design house* ingin mengintegrasikan 4 *chiplet* logika (masing-masing 100 mm², node 3 nm) dan 4 *chiplet* HBM3e pada *interposer* silikon menggunakan *hybrid bonding* Cu-Cu dengan pitch 5 µm.

**Langkah 1 — Estimasi *Yield* dan Biaya.**
Misalkan *defect density* proses 3 nm adalah $\lambda = 0.15$ cm⁻². Untuk satu *chiplet* logika $D = 1$ cm²:

$$Y_{logic} = e^{-0.15 \times 1} = 0.861$$

Untuk 4 *chiplet* logika (asumsi independen):

$$Y_{logic,total} = 0.861^4 = 0.549$$

Asumsikan *yield* HBM3e (dari vendor memori) = 0.95 per *chiplet*, dan *yield assembly* (hybrid bonding) = 0.97:

$$Y_{pkg} = 0.549 \times 0.95^4 \times 0.97 = 0.549 \times 0.815 \times 0.97 = 0.434$$

Artinya, hanya ~43.4% paket lolos tanpa *defect* — angka ini nyata dan mencerm