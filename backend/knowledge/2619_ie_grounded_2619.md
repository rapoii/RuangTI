# 2619 — Perancangan Sistem EDA untuk Chiplet dan Integrasi Tiga Dimensi (3D-IC): Formulasi Kuantitatif, Termal-Mekanis, dan Rekayasa Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami pergeseran paradigma fundamental dari arsitektur *System-on-Chip* (SoC) monolitik menuju arsitektur *System-in-Package* (SiP) berbasis **chiplet** dan **3D-IC**. Pergeseran ini dipicu oleh empat faktor struktural yang saling berinteraksi: (1) pelambatan *Moore's Law* yang ditandai oleh kenaikan biaya litografi EUV per transistor, (2) batas fisik *reticle* masker步进 (mask stitching) yang membatasi ukuran *die* monolitik pada ~700–800 mm², (3) menurunnya *yield* manufaktur secara eksponensial terhadap luas *die*, dan (4) permintaan akan integrasi heterogen antara node proses lanjutan (misalnya 3 nm/2 nm) dengan node matang untuk IP analog, RF, dan I/O.

Roze & Gerber (2026) dalam papernya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menyoroti bahwa desainer chip saat ini menghadapi ledakan kompleksitas pada tingkat **sistem, bukan transistor**. Mereka mencatat bahwa tanpa piranti *Electronic Design Automation* (EDA) yang secara原生 men-*native* memahami konektivitas antar-chiplet, hierarki termal tiga dimensi, dan kendala integritas sinyal lintas *substrate*, biaya verifikasi proyek 3D-IC akan melonjak dua kali lipat dari generasi SoC monolitik (Roze & Gerber, 2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)). Solusi EDA modern harus menyediakan *unified database* untuk seluruh domain—logika, fisik, termal, mekanis, listrik, dan verifikasi—yang mencakup *package*, *interposer*, *substrate*, dan *silicon chiplet* secara simultan.

Di sisi proses manufaktur, **Cu-Cu hybrid bonding** telah muncul sebagai teknologi *interconnect* dominan untuk 3D-IC. Lau (2023) menjelaskan bahwa teknologi ini memungkinkan kepadatan *bump* setara dengan pitch ~3–10 μm (dengan roadmap menuju <1 μm), jauh melampaui *micro-bump* solder tradisional (~20–40 μm) yang terbatas oleh *electromigration* dan *thermomigration* (Lau, 2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)). Pitch yang lebih halus ini memungkinkan jalur *signal* dan *power* lintas *die* dengan parasitik RC rendah dan bandwidth per footprint yang tinggi, sehingga heterogenitas node proses—misalnya chiplet komputasi 3 nm dengan chiplet memori HBM pada interposer silikon—dapat direalisasikan secara ekonomis.

Urgensi ekonomi diukur dari total addressable market (TAM) chiplet yang diproyeksikan menembus USD 400 miliar pada akhir dekade ini, didorong oleh akselerator AI, jaringan 6G, dan komputasi *edge* otonom. Namun tanpa piranti EDA yang matang, *time-to-market* sebuah desain heterogen 3D-IC dapat melebihi 30 bulan, suatu jendela yang tidak dapat ditoleransi dalam siklus produk semikonduktor modern.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Hasil (Yield) Monolithic vs. Chiplet

Model *Murphy* memberikan kerangka analitis untuk memperkirakan hasil manufaktur (*yield*) suatu *die* berdasarkan kerapatan cacat $D_0$ (cm⁻²) dan luas area $A$ (cm²):

$$Y_{\text{mono}} = \left[\frac{1 - e^{-D_0 A}}{D_0 A}\right]^2$$

Untuk arsitektur chiplet yang menggunakan **Known-Good-Die (KGD)** sebelum *assembly*, hasil efektif sistem menjadi:

$$Y_{\text{sistem}} = \prod_{i=1}^{n} Y_{\text{KGD},i} \cdot Y_{\text{bonding}}$$

di mana $Y_{\text{bonding}}$ adalah hasil proses *hybrid bonding* (umumnya 0,95–0,99 untuk Cu-Cu sesuai Lau, 2023).

### 2.2 Resistansi Termal Stacked Die

Resistansi termal total susunan 3D dari *junction* ke *heat sink* dimodelkan sebagai jaringan seri:

$$R_{th,\text{total}} = \sum_{j=1}^{n} \frac{t_j}{k_j \cdot A_j}$$

di mana $t_j$ adalah tebal lapisan ke-$j$, $k_j$ konduktivitas termal material (Cu ≈ 400 W/m·K, Si ≈ 150 W/m·K, $\text{SiO}_2$ ≈ 1,4 W/m·K, *underfill* ≈ 1–3 W/m·K), dan $A_j$ luas penampang efektif. Untuk susunan dengan *interposer* dan *thermal interface material* (TIM), rumus *Foster* atau *Cauer network* digunakan, dengan kapasitas termal:

$$C_{th} = \sum_{j=1}^{n} \rho_j c_{p,j} t_j A_j$$

### 2.3 Penundaan Interkoneksi (RC Delay) antar Chiplet

Untuk *link* hybrid bonding dengan panjang $l$, lebar $w$, tebal $t_{\text{Cu}}$, dan jarak $s$, resistansi dan kapasitansi per unit panjang mengikuti:

$$R_{\text{line}} = \frac{\rho_{\text{Cu}}}{w \cdot t_{\text{Cu}}} \quad \text{(Ω/m)}$$

$$C_{\text{line}} = \frac{\varepsilon_0 \varepsilon_r w}{s} \quad \text{(F/m)}$$

Penundaan propagasi Elmore untuk segmen $n$-stage:

$$\tau_{50\%} \approx 0{,}69 \sum_{k=1}^{n} R_{k \rightarrow k+1} \cdot C_{k+1}$$

Pada pitch 3 μm dengan $w = s = 1{,}5~\mu$m dan $t_{\text{Cu}} = 5~\mu$m, diperoleh $R_{\text{line}} \approx 2{,}3~\Omega$/cm dan $C_{\text{line}} \approx 1{,}8$ pF/cm, yang memberikan bandwidth >4 Gbps per lajur dengan *signaling* diferensial (sesuai benchmark UCIe standar).

### 2.4 Regangan Mekanis dan Keandalan *Hybrid Bond*

Koefisien ekspansi termal (CTE) Cu (~17 ppm/K) tidak匹配 dengan Si (~2,6 ppm/K). Regangan *she