# 2315 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Optimasi Lintas-Die, Hybrid Bonding Cu-Cu, dan Integrasi Heterogen dalam Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Konsentrasi Manufaktur Elektronik Lanjut dan Otomasi Desain
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki fase transisi struktural yang ditandai dengan berakhirnya era *Dennard scaling* dan perlambatan *Moore's Law* pada node proses sub-3 nm. Dalam kurun 2023–2026, biaya desain transistor monolitik melonjak secara eksponensial — fabrication plant (fab) untuk node 2 nm membutuhkan investasi modal hingga USD 20 miliar per fasilitas (Roze & Gerber, 2026). Sebagai respons strategis, arsitektur *chiplet* muncul sebagai paradigma dekomposisi sistem yang memungkinkan disagregasi desain monolitik menjadi beberapa *die* kecil yang diproduksi secara independen menggunakan *process node* yang optimal untuk fungsinya, lalu diintegrasikan kembali dalam satu paket menggunakan *interconnect* berdensitas tinggi. Roze dan Gerber (2026) menggarisbawahi bahwa desain *chiplet* dan 3D-IC bukan sekadar inovasi teknologi, melainkan pergeseran fundamental dalam rantai pasok semikonduktor yang menuntut integrasi *Electronic Design Automation* (EDA) lintas-domain — mulai dari partisi fungsional, optimasi *floorplan*, validasi termal, hingga verifikasi *signal/power integrity* pada antarmuka *die-to-die*.

Urgensi ekonominya bersifat ganda. Dari sisi *time-to-market*, penggunaan *chiplet* terbukti memangkas siklus desain sebesar 30–50% karena fabrikasi paralel pada node yang sudah matang mengurangi kompleksitas per-die. Dari sisi manufacturability, yield per wafer meningkat signifikan karena area *die* yang lebih kecil menurunkan probabilitas cacat acak (*defect density*-related yield loss). Namun, Roze dan Gerber (2026) menekankan bahwa keuntungan ini tidak terealisasi tanpa EDA toolset holistik yang mampu menjembatani tiga dunia yang biasanya terpisah: *front-end design* (RTL-to-GDSII), *package co-design*, dan *heterogeneous integration verification*.

Di sisi integrasi fisik, Lau (2023) memaparkan bahwa *Cu-Cu hybrid bonding* telah menjadi tulang punggung teknologi *3D stacking* dan *chiplet interconnection* ber-pitch halus (sub-10 μm). Berbeda dengan *microbump* konvensional berbasis solder (*flip-chip*), *hybrid bonding* memungkinkan *interconnect* langsung antarmuka tembaga-tembaga melalui difusi termal pada suhu rendah (~200–300 °C), menghasilkan resistansi kontak di bawah 0,1 Ω per sambungan dan densitas I/O mencapai 10⁶ sambungan per mm² pada roadmap industri (Lau, 2023). Kombinasi EDA solusi yang matang dengan proses hybrid bonding inilah yang menjadi enabler utama bagi arsitektur *3D-IC* heterogen — seperti yang diterapkan pada produk *High Bandwidth Memory* (HBM4), *Compute Express Link* (CXL) accelerators, dan *AI training accelerators* generasi terbaru.

Konteks industri ini memposisikan modul 2315 sebagai materi esensial bagi insinyur industri yang terlibat dalam perancangan sistem manufaktur elektronik, *yield management*, dan *supply chain orchestration* untuk produk semikonduktor heterogen. Tanpa pemahaman terhadap solusi EDA dan proses hybrid bonding, pengambilan keputusan rekayasa pada level sistem (misalnya pemilihan *process node*, *partitioning strategy*, atau *packaging technology*) akan kehilangan basis kuantitatifnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Partisi Multi-Die dan Optimasi Floorplan

Problem *multi-die partitioning* pada dasarnya adalah masalah optimasi kombinatorial yang dapat diformulasikan sebagai berikut. Misalkan suatu fungsi sistem monolitik $F$ dipartisi menjadi $N$ *chiplet* $C_i$, $i = 1, 2, \ldots, N$, dengan area masing-masing $A_i$ dan jumlah I/O internal $n_i$. Fungsi objektif umumnya meminimalkan *total wirelength* lintas-die yang proporsional terhadap biaya sambungan *hybrid bonding*:

$$\min Z = \sum_{i=1}^{N-1} \sum_{j=i+1}^{N} w_{ij} \cdot d_{ij} \cdot c_b$$

di mana $w_{ij}$ adalah jumlah *net* antara chiplet $i$ dan $j$, $d_{ij}$ adalah jarak Manhattan antara pusat *chiplet* pada *floorplan*, dan $c_b$ adalah biaya per sambungan *inter-die* (secara empirik ~$10\times$ lebih mahal dari *intra-die* routing). Roze dan Gerber (2026) mengusulkan heuristik *partitioning-driven floorplanning* yang menginkorporasi constraint *thermal coupling* dan *signal integrity budget*.

### 2.2 Model Termal untuk Through-Silicon Via (TSV) dan Die Stack

Untuk analisis termal pada 3D-IC, resistansi termal TSV dapat dimodelkan sebagai silinder vertikal konduktor:

$$R_{th,TSV} = \frac{d_{TSV}}{k_{Cu} \cdot A_{TSV}}$$

di mana $d_{TSV}$ adalah kedalaman TSV (tipikal 50–100 μm), $k_{Cu} \approx 400 \text{ W/(m·K)}$ adalah konduktivitas termal tembaga, dan $A_{TSV} = \pi (r_{TSV})^2$ adalah luas penampang. Temperatur *junction* pada die aktif $T_j$ yang membangkitkan daya $P$ adalah:

$$T_j = T_a + P \cdot \theta_{JA} - \sum_{k=1}^{M} \frac{P_k}{R_{th,TSV,k}}$$

dengan $T_a$ suhu ambient, $\theta_{JA}$ thermal resistance *junction-to-ambient*, dan penjumlahan atas $M$ TSV pendingin. Roze dan Gerber (2026) menunjukkan bahwa tanpa optimasi EDA, hot-spot pada die atas bisa melampaui 105 °C pada paket *3D stacked memory-logic*, mengancam *reliability* sesuai dengan model *Arrhenius*:

$$AF = \exp\left[\frac{E_a}{k_B}\left(\frac{1}{T_{ref}} - \frac{1}{T_{op}}\right)\right]$$

di mana $AF$ adalah *acceleration factor*, $E_a \approx 0.7$ eV untuk mekanisme *electromigration* pada sambungan Cu, dan $k_B$ adalah konstanta Boltzmann.

### 2.3 Mekanisme Cu-Cu Hybrid Bonding

Lau (2023) menjelaskan bahwa proses *hybrid bonding* Cu-Cu terjadi melalui dua tahap simultan: (i) *dielectric bonding* antara lapisan SiO₂/SiCN, dan (ii) *metal bonding* Cu-Cu melalui *creep deformation* dan *grain boundary diffusion*. Kualitas sambungan dikuantifikasi oleh *bond strength*:

$$\sigma_{bond} = \frac{F_{bond}}{A_{pad}}$$

dengan target $\sigma_{bond} \geq 200$ MPa untuk aplikasi *production*. Persamaan *diffusion creep* yang relevan:

$$\dot{\epsilon}_{diff} = \frac{A_{DC}}{T \cdot d^2} \cdot \exp\left(-\frac{Q_{GB}}{R \cdot T}\right) \cdot \sigma_{bond}$$

di mana $d$ adalah ukuran butir Cu pasca-anneal, $Q_{GB} \approx 0.9$ eV adalah *activation energy* untuk *grain boundary diffusion*, dan $A_{DC}$ konstanta material. Untuk menghasilkan sambungan berkualitas, Lau (2023) merekomendasikan profil termal berikut:

$$T(t) = T_{peak} \cdot \left[1 - \exp\left(-\frac{t}{\tau_{ramp}}\right)\right], \quad T_{peak} = 250\text{-}300 \text{ °C}$$

dengan holding time $t_{hold} \geq 30$ menit pada tekanan $P_{bond} = 100\text{-}200$ MPa.

### 2.4 Model Yield dan Biaya Manufaktur

Yield sistem *chiplet* mengikuti model komposisional:

$$Y_{system} = \prod_{i=1}^{N} Y_i \cdot Y_{assembly}$$

di mana $Y_i$ adalah yield fabrikasi chiplet $i$ mengikuti distribusi Poisson $Y_i = e^{-D_0 \cdot A_i}$ (dengan $D_0$ *defect density* per cm²), dan $Y_{assembly}$ adalah yield proses integrasi hybrid bonding. Roze dan Gerber (2026) menekankan bahwa metrik EDA harus mencakup *Design-for-Manufacturability* (DFM) berbasis *critical area analysis* (CAA):

$$CA = \sum_{k} L_k \cdot w_k$$

di mana $L_k, w_k$ adalah panjang dan lebar fitur kritis yang rentan cacat.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka yang diajukan Roze dan Gerber (2026), alur desain EDA untuk chiplet/3D-IC mengikuti SOP berlapis berikut:

**Tahap 1 — System-Level Partitioning**
1. Lakukan *functional decomposition* pada level RTL menjadi blok-blok yang akan diimplementasikan sebagai *chiplet* independen.
2. Jalankan *profiling* termal dan *timing* pada setiap blok menggunakan *virtual prototyping* (misalnya *Synopsys Platform Architect*, *Cadence Palladium*).
3. Tentukan *interface protocol* standar (UCIe, BoW, atau proprietary) dan alokasikan *bandwidth budget*.

**Tahap 2 — Chiplet Implementation**
1. Implementasikan setiap *chiplet* secara independen hingga *tape-out*, dengan mempertimbangkan *process node* optimal.
2. Lakukan *package co-design* simultan: pilih substrate/organic interposer vs. silicon interposer vs. *active interposer*.
3. Untuk stack 3D, rancang TSV dan *micro-bump* / *hybrid bonding* pitch sesuai standar (≥ 40 μm untuk *microbump*, ≤ 10 μm untuk hybrid).

**Tahap 3 — Verification Lintas Domain**
1. Thermal analysis: gunakan *finite element solver* (ANSYS Icepak, Cadence Celsius) dengan grid resolution ≤ 5