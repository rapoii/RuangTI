# 2731 — Solusi EDA untuk Desain Chiplet dan 3D-IC dengan Dukungan Teknologi Cu-Cu Hybrid Bonding

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami pergeseran paradigma fundamental dari pendekatan monolithic System-on-Chip (SoC) menuju arsitektur *heterogeneous integration* berbasis chiplet. Pergeseran ini dipicu oleh tiga fenomena simultan yang dilaporkan Roze dan Gerber (2026, DOI: 10.23919/icep-hbs69241.2026.11550563) dalam simposium ICEP-HBS: pertama, *node scaling* transistor mendekati batas fisika sub-2nm dengan biaya fabrikasi wafer 300mm yang melonjak hingga USD 18.000–22.000 per wafer; kedua, *yield* die individual turun secara eksponensial seiring pertambahan luas area retikel; ketiga, kompleksitas desain Electronic Design Automation (EDA) meningkat hampir 10× lipat ketika transisi dari planar 2D ke arsitektur 3D-IC. Fenomena ini memaksa pemain industri seperti AMD, Intel, TSMC, dan Samsung untuk mengadopsi strategi *disaggregation* di mana fungsi logika, memori, dan I/O dipecah menjadi beberapa *chiplet* yang kemudian diintegrasikan kembali dalam satu kemasan menggunakan teknologi *advanced packaging*.

Lau (2023, DOI: 10.1007/978-981-19-9917-8_6) mengidentifikasi bahwa *Cu-Cu hybrid bonding* telah menjadi teknologi *back-end-of-line* (BEOL) paling krusial untuk mewujudkan integrasi 3D dengan kepadatan sambungan (*pitch*) di bawah 3 μm. Berbeda dengan teknik *solder micro-bump* konvensional yang memiliki pitch minimal 25–40 μm, hybrid bonding tembaga mampu mencapai kepadatan 10⁶ sambungan/mm² dengan resistansi sambungan rendah (R < 50 mΩ) dan bandwidth density mencapai 1,6 Tb/s/mm sesuai standar UCIe (Universal Chiplet Interconnect Express). Permasalahan operasional yang muncul adalah: (i) kebutuhan akan *tool flow* EDA baru yang mampu melakukan *co-design* multi-die secara simultan termasuk analisis termal, integritas sinyal, dan distribusi daya; (ii) tantangan proses *Chemical Mechanical Polishing/Planarization* (CMP) untuk menghasilkan kekasaran permukaan Cu di bawah 0,5 nm Ra; (iii) manajemen *thermal budget* pada proses *low-temperature anneal* 250–400°C untuk mencegah delaminasi.

Konteks urgensi ekonomi dan teknis ini menjelaskan mengapa *tool* EDA generasi baru seperti Cadence Integrity 3D-IC Platform, Synopsys 3DIC Compiler, dan Siemens Calibre nmDRC 3DT dikembangkan dengan arsitektur *unified database* yang mampu mengelola *netlist* lintas-die, verifikasi *Design Rule Check* (DRC) tiga dimensi, dan simulasi *multi-physics* secara *concurrent*. Dalam kerangka Manajemen Rantai Pasok Industri, solusi EDA yang dibahas Roze dan Gerber (2026) merepresentasikan *enabling technology* yang menurunkan Total Cost of Ownership (TCO) produksi semikonduktor hingga 30–40% melalui peningkatan *first-pass yield* dan reduksi jumlah iterasi desain-fabrikasi (*design-fab loop*).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resistansi Through-Silicon Via (TSV)

Resistansi listrik TSV yang merupakan elemen interconnect vertikal dalam stack 3D-IC dihitung menggunakan persamaan konduksi silinder:

$$R_{TSV} = \frac{\rho_{Cu} \cdot h_{TSV}}{\pi \cdot d_{TSV}^2 / 4} = \frac{4 \cdot \rho_{Cu} \cdot h_{TSV}}{\pi \cdot d_{TSV}^2}$$

di mana $\rho_{Cu} = 1{,}68 \times 10^{-8}\,\Omega\cdot m$ adalah resistivitas tembaga, $h_{TSV}$ adalah kedalaman TSV, dan $d_{TSV}$ adalah diameter TSV. Untuk TSV berdiameter $d_{TSV} = 5\,\mu m$ dan kedalaman $h_{TSV} = 50\,\mu m$, diperoleh $R_{TSV} \approx 42{,}8\,m\Omega$.

### 2.2 Model Yield Sistem Multi-Chiplet

Yield keseluruhan sistem chiplet mengikuti model probabilistik multinomial dengan asumsi independensi defect per chiplet:

$$Y_{system} = \prod_{i=1}^{N} Y_{chiplet,i}^{k_i}$$

di mana $N$ adalah jumlah chiplet unik, $Y_{chiplet,i}$ adalah yield chiplet jenis ke-$i$, dan $k_i$ adalah jumlah instance chiplet tersebut. Sebagai contoh, sistem 4 chiplet dengan yield homogen $Y = 0{,}95$ menghasilkan $Y_{system} = 0{,}95^4 \approx 81{,}5\%$. Model ini diperluas oleh Lau (2023) untuk menangani *known-good-die* (KGD) dengan memasukkan faktor burn-in:

$$Y_{KGD} = Y_{wafer} \cdot P_{pass|burn\text{-}in}$$

### 2.3 Model Resistansi Termal Stack 3D-IC

Distribusi panas dalam stack dihitung sebagai resistansi termal seri:

$$R_{th} = \sum_{j=1}^{M} \frac{t_j}{k_j \cdot A_j}$$

di mana $t_j$ adalah tebal lapisan, $k_j$ konduktivitas termal material, dan $A_j$ luas area efektif. Untuk stack dengan Si ($k_{Si} = 150\,W/m\cdot K$), SiO₂ ($k_{SiO_2} = 1{,}4\,W/m\cdot K$), dan timah solder ($k_{SnAg} = 57\,W/m\cdot K$), lapisan tipis SiO₂ biasanya menjadi *bottleneck* termal utama.

### 2.4 Model Bandwidth Density Inter-die

Bandwidth density antar chiplet dengan teknologi Cu-Cu hybrid bonding mengikuti persamaan:

$$BD = \frac{f_{clk} \cdot N_{lanes} \cdot 2}{W_{interface} \cdot P}$$

di mana $f_{clk}$ adalah frekuensi clock, $N_{lanes}$ jumlah lane paralel, $W_{interface}$ lebar antarmuka fisik, dan $P$ pitch sambungan. Standar UCIe menghasilkan $BD = 1{,}6\,Tb/s/mm$ pada $P = 3\,\mu m$.

### 2.5 Model Pitch Scaling Cu-Cu Hybrid Bonding

Roadmap pitch hybrid bonding mengikuti hukum *geometric scaling*:

$$P_{n} = P_0 \cdot 2^{-n \cdot \log_2(\alpha)}$$

dengan $\alpha \approx 0{,}7$ sebagai faktor pitch scaling per generasi. Lau (2023) menunjukkan trajectory dari $P_0 = 10\,\mu m$ (2018) → $3\,\mu m$ (2023) → target $1\,\mu m$ (2027).

### 2.6 Model Kekuatan Sambungan Cu-Cu

Kekuatan sambungan dihitung melalui *shear strength test*:

$$\tau = \frac