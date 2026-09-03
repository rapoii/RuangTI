# 2059 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Optimasi Multi-Fisika dalam Ekosistem Hybrid Bonding

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Rantai Pasok Semikonduktor Lanjutan
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). "Cu-Cu Hybrid Bonding" dalam *Chiplet Design and Heterogeneous Integration Packaging*, Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma dari *system-on-chip* (SoC) monolitik menuju arsitektur *chiplet* dan *three-dimensional integrated circuit* (3D-IC) merepresentasikan salah satu transformasi paling disruptif dalam industri semikonduktor kontemporer. Kenaikan biaya *mask set* menuju ambang USD 50 juta pada node 3 nm/2 nm迫使 para perancang untuk mengadopsi strategi *heterogeneous integration* (HI), di mana beberapa die dengan proses fabrikasi berbeda diintegrasikan dalam satu paket melalui *interconnect* pitch sub-10 mikrometer. Roze dan Gerber (2026) dalam paper yang dipublikasikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (DOI: 10.23919/icep-hbs69241.2026.11550563) menekankan bahwa tanpa solusi *Electronic Design Automation* (EDA) yang koheren dan *multi-physics aware*, potensi ekonomi dan performa dari arsitektur chiplet tidak dapat direalisasikan secara optimal.

Urgensi industri ini bersifat multidimensional. Pertama, dimensi ekonomis: biaya per transistor pada node lanjut tidak lagi menurun secara eksponensial sesuai Hukum Moore, sehingga disagregasi die menjadi chiplet khusus menjadi satu-satunya strategi untuk mempertahankan *yield* yang dapat diterima—di mana satu retakan pada die monolitik 600 mm² akan menurunkan *yield* secara dramatis, sementara disagregasi menjadi empat chiplet 150 mm² secara statistik melipatgandakan probabilitas keberhasilan. Kedua, dimensi teknis: kebutuhan bandwidth memori pada aplikasi *high-performance computing* (HPC) dan akselerator AI mendorong adopsi *hybrid bonding* tembaga-tembaga (Cu-Cu) dengan pitch 3–10 µm, yang menyediakan *interconnect density* melampaui 10⁴ koneksi/mm² dan panjang listrik (*electrical length*) yang secara fundamental lebih pendek daripada *micro-bump* konvensional. Lau (2023) dalam bukunya (DOI: 10.1007/978-981-19-9917-8_6) mendokumentasikan bagaimana rekayasa *thermo-compression bonding* Cu-Cu pada suhu rendah (200–400 °C) memungkinkan integrasi heterogen antara logika CMOS lanjut, memori HBM, dan *photonic integrated circuits* tanpa *thermal budget* yang merusak.

Ketiga, dimensi rantai pasok: model bisnis *chiplet marketplace* (Universal Chiplet Interconnect Express—UCIe, BoW, dll.) menuntut interoperabilitas desain yang hanya dapat dijamin oleh kerangka EDA terstandarisasi. Roze dan Gerber (2026) mengidentifikasi tiga titik kegagalan kritis dalam EDA flow konvensional ketika diterapkan pada desain chiplet: (i) fragmentasi toolchain antara floorplan, verifikasi *signal/power integrity*, dan *thermal analysis*; (ii) absennya *native representation* untuk *inter-chiplet interconnect* pada level abstraksi yang memadai; serta (iii) kurangnya *sign-off* yang mencakup efek paket terhadap timing *die-internal*. Konteks ini menegaskan bahwa rekayasa sistem industri modern memerlukan perangkat EDA holistik yang menjembatani batas antara desain IC tradisional dan teknologi pengemasan lanjut.

## 2. Landasan Teori & Formulasi Matematis

Rekayasa desain chiplet dan 3D-IC memerlukan kerangka analitis multi-fisika yang menjangkau empat domain dominan: termal, elektrik, mekanis, dan manufacturability. Kami membangun fondasi matematis untuk masing-masing domain berdasarkan formulasi yang relevan dengan paper acuan.

**2.1 Model Termal Jaringan Resistansi (Thermal Resistance Network).** Untuk tumpukan 3D-IC dengan $n$ layer, resistansi termal total dari junction ke ambient dirumuskan sebagai:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff,i}} + R_{TIM} + R_{hs}$$

di mana $t_i$ adalah ketebalan layer ke-$i$, $k_i$ konduktivitas termal material (W/m·K), $A_{eff,i}$ luas efektif perpindahan panas, $R_{TIM}$ resistansi *thermal interface material*, dan $R_{hs}$ resistansi *heat sink*. Temperatur junction kemudian dihitung melalui:

$$T_j = T_a + P_{diss} \cdot R_{th,total}$$

Persamaan konduksi panas 3D unsteady-state yang menjadi dasar simulasi termal (*finite element/finite volume*) pada *multi-die stack*:

$$\rho c_p \frac{\partial T(\vec{r},t)}{\partial t} = \nabla \cdot \big[ k(\vec{r}) \nabla T(\vec{r},t) \big] + q(\vec{r},t)$$

dengan $\rho$ densitas, $c_p$ kapasitas panas spesifik, dan $q$ laju generasi panas volumetrik. Roze dan Gerber (2026) menekankan bahwa algoritma thermal-aware floorplanning wajib menggunakan versi diskretisasi persamaan ini dengan *adaptive mesh refinement* di sekitar region *hot-spot* antardie.

**2.2 Model Elektrik Interkoneksi Hybrid Bonding.** Resistansi DC satu *bonded interconnect* Cu-Cu dengan panjang $L$, lebar $w$, dan tinggi $h$:

$$R_{dc} = \frac{\rho_{Cu} \cdot L}{w \cdot h} + 2 R_{c,contact}$$

di mana $\rho_{Cu} \approx 1.68 \times 10^{-8}$ Ω·m dan $R_{c,contact}$ adalah resistansi kontak interfacial yang muncul akibat *micro-roughness* dan proses annealing. Untuk analisis AC pada frekuensi tinggi, impedansi harus memasukkan efek *skin* dan *proximity*:

$$Z(f) = R_{dc} \cdot \left[ 1 + \frac{1}{3}\left( \frac{f}{f_{skin}} \right)^2 \right]^{1/2} \cdot e^{j\phi(f)}$$

dengan $f_{skin} = \rho_{Cu}/(\pi \mu_0 w^2)$ frekuensi transisi *skin effect*.

**2.3 Model RC Delay dan Bandwidth.** Konstanta RC per satuan panjang untuk interkoneksi padat hybrid bonding pitch $\rho$ (µm):

$$\tau_{RC} = r \cdot c \cdot L^2 = \left(\frac{\rho_{Cu}}{w \cdot h}\right) \cdot \left(\frac{\epsilon_0 \epsilon_r w}{h}\right) \cdot L^2 = \frac{\rho_{Cu} \epsilon_0 \epsilon_r L^2}{h^2}$$

Persamaan ini menjelaskan mengapa pengurangan pitch dari 25 µm (micro-bump) menjadi 3 µm (hybrid bonding) menurunkan $\tau_{RC}$ secara kuadratik, memungkinkan *data rate* per link melampaui 4 Gbps dalam arsitektur UCIe.

**2.4 Model Yield dan Defectivity.** Yield fabrikasi chip dengan luas aktif $A$ mengikuti model负-binomial umum:

$$Y = \left( 1 + \frac{D \cdot A_c}{s} \right)^{-s}$$

di mana $D$ adalah densitas defect (cm⁻²), $A_c$ luas kritis, dan $s$ parameter clustering. Untuk hybrid bonding, yield tambahan dipengaruhi oleh akurasi alignment $\sigma_{align}$:

$$Y_{bond} = \prod_{i=1}^{N} \Phi\left( \frac{p_i/2 - 3\sigma_{align}}{p_i/2} \right)$$

di mana $p_i$ adalah pitch koneksi ke-$i$ dan $\Phi$ fungsi distribusi kumulatif normal.

**2.5 Model Biaya Total Sistem Chiplet.** Fungsi biaya terpadu yang digunakan dalam optimasi *make-or-buy* dan *chiplet partitioning*:

$$C_{total} = \sum_{i=1}^{N} \big[ C_{wafer,i} + C_{packaging,i} \cdot Y_i^{-1} \big] + C_{interposer} + C_{integration} + C_{test,i}$$

dengan $Y_i$ yield chiplet ke-$i$ dan $C_{test,i