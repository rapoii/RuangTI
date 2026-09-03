# 2587 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Bonding Hibrida, dan Optimasi Sistem Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design — Integrasi Heterogen dengan Antarmuka Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma yang paling signifikan sejak diperkenalkannya hukum Moore lebih dari lima dekade lalu. Pergeseran dari pendekatan *monolithic System-on-Chip* (SoC) menuju arsitektur berbasis *chiplet* dan *3D-Integrated Circuit* (3D-IC) bukan sekadar evolusi teknologi melainkan respons strategis terhadap empat batasan fundamental yang dihadapi manufaktur CMOS sub-3 nm: *power wall*, *memory wall*, *interconnect wall*, dan yang paling menentukan — *economics wall*. Roze dan Gerber (2026) dalam naskah yang disajikan pada ICEP-HBS 2026 menunjukkan bahwa biaya wafer 300 mm pada proses advanced node telah melampaui USD 18.000–20.000 per wafer, sementara *die yield* menurun drastis secara eksponensial terhadap luas die aktif. Kombinasi这两 membuat pendekatan desain *monolithic* tidak lagi layak secara ekonomi untuk die yang melebihi sekitar 150–200 mm² pada node 5 nm dan 3 nm.

Konteks industri ini diperparah oleh fragmentasi rantai pasok: tidak ada satu foundry pun yang memiliki kapasitas manufaktur optimal untuk logika先进 node, *high-bandwidth memory* (HBM), *analog/RF*, *photonic*, dan *power device* sekaligus. Heterogeneous Integration (HI) melalui arsitektur chiplet memungkinkan setiap subsistem diproduksi pada *process node* yang paling sesuai — misalnya logika pada 3 nm, SRAM pada 5 nm, I/O pada 12 nm, dan *photonic engine* pada *silicon photonics node* khusus. Roze & Gerber (2026) menekankan bahwa Electronic Design Automation (EDA) modern harus berevolusi dari paradigma "desain satu die" menjadi paradigma "desain multi-die koheren" dengan *co-optimization* lintas domain: elektris, termal, mekanis, termomekanis, dan manufaktur.

Secara paralel, Lau (2023) dalam bab *Cu-Cu Hybrid Bonding* dari buku *Chiplet Design and Heterogeneous Integration Packaging* (Springer, DOI: 10.1007/978-981-19-9917-8_6) menjelaskan bahwa keberhasilan integrasi heterogen ini secara fisik ditentukan oleh kemampuan antarmuka *bonding*. Lau mendokumentasikan bahwa *Cu-Cu direct hybrid bonding* — berbeda dengan *solder microbump* atau *thermocompression bonding* konvensional — mampu mencapai pitch interconeksi serendah 3 µm dengan resistansi kontak di bawah 50 mΩ per sambungan dan *current carrying capacity* lebih dari 100.000 A/cm². Pitch sekecil ini mustahil dicapai dengan solder ball tradisional yang terbatas pada pitch ~40–100 µm.

Implikasi ekonomi dan operasional dari pertemuan kedua tren ini sangat besar. Pasar *heterogeneous integration* diproyeksikan tumbuh dari USD 38 miliar (2024) menjadi lebih dari USD 95 miliar pada 2030, didorong oleh permintaan *high-performance computing* (HPC) untuk AI/ML, *data center accelerators* (GPU, TPU, NPU), *automotive SoC*, dan *edge AI devices*. Bagi praktisi Teknik Industri, topik ini bukan sekadar persoalan desain chip, melainkan persoalan optimasi sistem manufaktur multi-die, *yield management* lintas *process node*, desain untuk kemampuan uji (Design-for-Test) tingkat paket, dan rekayasa rantai pasok global yang harus menjamin keseragaman *Known-Good-Die* (KGD) sebelum proses bonding.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya Manufaktur Chiplet vs Monolitik

Kerangka teori fundamental yang digunakan dalam kedua literatur dimulai dari model biaya die berbasis *Poisson yield model*. Untuk *monolithic die* dengan luas $A$ dan *defect density* $D$, yield diberikan oleh:

$$Y_{\text{mono}} = e^{-D \cdot A}$$

Untuk arsitektur chiplet yang memecah die monolitik menjadi $N$ sub-die identik dengan luas $A/N$ (ideal), yield total paket menjadi:

$$Y_{\text{chiplet}} = \left(e^{-D \cdot A/N}\right)^N = e^{-D \cdot A}$$

Namun, *assembly yield* $Y_{\text{ass}}$ (akibat misalignment, bonding defect, KGD rejection) harus dimasukkan:

$$Y_{\text{paket}} = Y_{\text{chiplet}}^{\text{die}} \cdot Y_{\text{ass}}$$

Jika kita asumsikan $D = 0{,}005~\text{defects/cm}^2$ (realistis untuk advanced node pasca-2024), $A_{\text{mono}} = 400~\text{mm}^2$ dan $A_{\text{chiplet}} = 100~\text{mm}^2$ (4 chiplet identik), maka:

$$Y_{\text{mono}} = e^{-0{,}005 \times 4} \approx 0{,}9802$$

$$Y_{\text{chiplet}} = (e^{-0{,}005 \times 1})^4 \approx 0{,}9900$$

Dengan $Y_{\text{ass}} = 0{,}95$:

$$Y_{\text{paket}}^{\text{chiplet}} \approx 0{,}9405$$

Meskipun yield per paket sedikit lebih rendah, *cost amortization* per working die pada arsitektur chiplet menjadi superior karena lebih banyak die per wafer.

### 2.2 Model Resistansi dan Kapasitansi Antarmuka Hybrid Bonding

Lau (2023) menurunkan formula parasitik untuk sambungan Cu-Cu hybrid bonding pada pitch $p$ dengan luas kontak efektif $A_{\text{eff}} = p^2 \cdot \eta$, di mana $\eta$ adalah *bonding efficiency* (umumnya 0,85–0,95):

$$R_{\text{bond}} = \frac{\rho_{\text{Cu}} \cdot t_{\text{eff}}}{A_{\text{eff}}} = \frac{1{,}68 \times 10^{-8} \cdot t_{\text{eff}}}{p^2 \cdot \eta}$$

Untuk pitch $p = 10~\mu\text{m}$, $t_{\text{eff}} = 3~\mu\text{m}$, dan $\eta = 0{,}9$:

$$R_{\text{bond
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
