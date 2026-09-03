# 2891 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Multi-Fisika dalam Rantai Pasok Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma desain semikonduktor dari pendekatan *monolithic System-on-Chip* (SoC) menuju *disaggregated chiplet architecture* dan *three-dimensional integrated circuits* (3D-IC) bukan sekadar evolusi teknologi melainkan keniscayaan strategis yang dipicu oleh empat tekanan simultan terhadap industri semikonduktor global. Pertama, biaya litografi *extreme ultraviolet* (EUV) untuk proses sub-3 nm telah melonjak melampaui ambang USD 300 juta per *wafer mask set*, menciptakan *economic moat* yang hanya dapat disilangkan oleh sedikit entitas industri. Kedua, batas fisik *reticle limit* (~858 mm² pada alat EUV berreticle standar; ~3.300 mm² pada *high-NA EUV*) membatasi luas *die* monolitik sehingga *yield* turun drastis mengikuti persamaan *Stapper's yield model*. Ketiga, proliferasi *workload* AI generatif dan *high-performance computing* (HPC) menuntut *memory bandwidth* yang tidak lagi mampu disediakan oleh arsitektur *off-package* konvensional, dan keempat, fragmentasi rantai pasok semikonduktor pasca-ketegangan geopolitik 2022–2025 mendorong perlunya *modular design philosophy* yang memungkinkan fabrikasi *chiplet* pada *node* yang berbeda-beda sesuai spesialisasi proses (Roze & Gerber, 2026).

Dalam makalah utamanya, Roze dan Gerber (2026) menegaskan bahwa Electronic Design Automation (EDA) untuk chiplet dan 3D-IC kini menghadapi tantangan yang secara kualitatif berbeda dengan EDA tradisional. Jika pada desain monolitik yang dimodelkan adalah satu *die* tunggal dengan dua dimensi fisik, maka pada arsitektur chiplet—terutama yang menggunakan *Cu-Cu hybrid bonding* dengan pitch sub-10 μm—ruang desain menjadi tiga dimensi dengan ratusan juta interkoneksi padat yang harus di-*co-optimize* secara simultan untuk sinyal, daya, termal, mekanis, dan manufacturability. Lau (2023) menunjukkan bahwa *Cu-Cu hybrid bonding* pada pitch 10 μm mampu mencapai *interconnect density* ~10.000 koneksi/mm² dengan resistansi kontak <10 mΩ per *bump*, dua order of magnitude lebih padat dibanding *micro-bump* solder konvensional. Densitas ini membawa konsekuensi langsung: *signal integrity* margin menjadi tipis, *power delivery network* (PDN) menjadi terdistribusi secara vertikal, dan disipasi panas 3D stack mendekati 1 kW/cm² pada konfigurasi HPC.

Urgensi ekonomi juga tampak pada studi kasus NVIDIA H100, AMD MI300, dan Intel Ponte Vecchio yang dilaporkan oleh Roze dan Gerber: biaya rekayasa EDA untuk 3D-IC naik ~3–5× dibanding SoC monolitik, namun *time-to-market* berkurang 30–40% karena fabrikasi *chiplet* dapat di-*parallelize* pada *foundry* berbeda. Bagi insinyur industri, fenomena ini melahirkan metrik baru berupa *design partitioning efficiency* (DPE) yang harus diintegrasikan ke dalam kerangka keputusan *make-or-buy* dan *capacity planning* pada tingkat lantai produksi (*fab floor*). Disertasi dan buku Lau (2023) selanjutnya menyediakan kerangka rekayasa yang menjembatani aspek *process-design co-optimization* dengan *heterogeneous integration packaging*, menjadikannya referensi wajib bagi perancangan SOP manufaktur chiplet.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis EDA chiplet dan 3D-IC yang dirumuskan oleh Roze dan Gerber (2026) berpijak pada empat pilar matematis: model *interconnect parasitik* 3D, model termal multi-die, model keandalan sambungan *hybrid bonding*, dan fungsi biaya total (*total cost of ownership*, TCO).

### 2.1 Model Interconnect Delay (Elmore Delay) untuk Jaringan Beban 3D

Untuk jalur sinyal yang melintasi *through-silicon via* (TSV) dan *hybrid bonding* pad pada arsitektur 3D-IC, delay propagasi pada orde pertama dimodelkan dengan rumus Elmore yang diperluas:

$$\tau_{Elmore} = \sum_{i=1}^{N} R_i \sum_{j=i}^{N} C_j$$

di mana $R_i$ adalah resistansi segmen ke-$i$ (mencakup resistansi *TSV*, resistansi *hybrid bond pad*, dan resistansi *redistribution layer*/RDL), sedangkan $C_j$ adalah kapasitansi node ke-$j$ yang mencakup kapasitansi parasitik *fringe*, kapasitansi *landside* ke substrat, serta kapasitansi *coupling* antar-saluran. Untuk arsitektur *face-to-face* bonding dengan pitch $p$, kapasitansi *coupling* antara dua jalur bersebelahan dapat diestimasi dengan:

$$C_{coupling} \approx \varepsilon_0 \varepsilon_r \frac{L \cdot t}{p} \cdot k_c$$

dengan $L$ panjang saluran, $t$ ketebalan dielektrik antar-logam, $\varepsilon_r$ permitivitas relatif (~3.5 untuk SiO₂, ~2.8 untuk low-k SiCOH), dan $k_c$ faktor geometri koreksi (~0.8 untuk struktur *microstrip*).

### 2.2 Model Termal Multi-Die dan Resistansi Junction-to-Ambient

Disipasi termal pada 3D-IC bersifat *stacked* dan anisotropik. Resistansi termal total dari *junction* ke *ambient* untuk konfigurasi $N$ die vertikal dengan *thermal interface material* (TIM) antar-die diekspresikan sebagai:

$$\theta_{JA} = \sum_{i=1}^{N} \left( \frac{t_{die,i}}{k_{die,i} \cdot A_i} \right) + \sum_{j=1}^{N-1} \theta_{TIM,j} + \theta_{HS} + \theta_{conv}$$

dengan $t_{die,i}$ ketebalan die ke-$i$, $k_{die,i}$ konduktivitas termal efektif die (~$148 \text{ W/m·K}$ untuk Si mono-kristalin pada arah lateral; ~$1.4 \text{ W/m·K}$ untuk SiO₂), $A_i$ luas efektif die ke-$i$, $\theta_{TIM,j}$ resistansi TIM (~$0.05$–$0.5 \text{ cm}^2\text{K/W}$), $\theta_{HS}$ resistansi *heat spreader*, dan $\theta_{conv}$ resistansi konveksi ke lingkungan. Suhu *junction* tertinggi pada die aktif:

$$T_{J,max} = T_A + P_{total} \cdot \theta_{JA}$$

### 2.3 Model Keandalan Sambungan Cu-Cu Hybrid Bonding

Kekuatan mekanis dan elektrikasik sambungan *Cu-Cu* sangat dipengaruhi oleh *annealing* dan tingkat dislokasi pada界面 Cu-Cu. Roze dan Gerber menurunkan model kualitas sambungan sebagai fungsi waktu dan suhu annealing:

$$Q_{bond}(T,t) = 1 - \exp\left[ -\left(\frac{t}{t_0}\right)^n \cdot \exp\left(-\frac{E_a}{k_B T}\right) \right]$$

dengan $t_0$ konstanta waktu referensi, $n$ eksponen *Avrami*, $E_a$ energi aktivasi difusi Cu ($E_a \approx 1.7 \text{ eV}$ untuk batas butir Cu), $k_B$ konstanta Boltzmann, dan $T$ suhu absolut. Sambungan dengan $Q_{bond} > 0.95$ dikategorikan *production-grade*; di bawah 0.90, sambungan memiliki risiko *electromigration* tinggi.

### 2.4 Model Yield Chiplet dan Biaya Total

Yield gabungan untuk paket multi-chiplet yang menggunakan *Known-Good Die* (KGD) mengikuti pendekatan *multiplicative yield*:

$$Y_{pkg} = \prod_{i=1}^{M} Y_{KGD,i} \cdot \left(1 - \sum_{k} F_k \right)$$

di mana $M$ jumlah *chiplet*, $Y_{KGD,i}$ yield *Known-Good Die* untuk chiplet ke-$i$ (umumnya 90–99% tergantung kompleksitas dan test coverage), dan $F_k$ fraktor kegagalan proses perakitan (misalnya misalignment *hybrid bonding*, delaminasi TIM). Biaya per unit fungsi sistem (*cost-per-function*) kemudian:

$$C_{fungsi} = \frac{\sum_{i=1}^{M} (C_{fab,i} + C_{assembly,i})}{Y_{pkg} \cdot \sum_{i=1}^{M} N_{fungsi,i}}$$

Metrik ini memungkinkan insinyur industri membandingkan arsitektur chiplet dengan monolitik secara kuantitatif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA berlapis yang mereka sebut *Co-Design Multi-Fisika 4-Dimensi* (listrik, termal, mekanis, manufaktur) untuk chiplet dan 3D-IC. SOP implementasi di lantai produksi mengikuti alur berikut:

**Tahap 1 — Partisi Sistem dan Spesifikasi Inter-Chiplet.** Sistem dipecah menggunakan *platform-based design* dengan standar *Universal Chiplet Interconnect Express* (UCIe) atau *Bunch of Wires* (BoW). Keluaran: *chiplet specification document* yang mencakup bandwidth target (Gb/s per lane), latency budget (ns), power budget (W), dan sinyal integritas minimum.

**Tahap 2 — Co-Optimasi Blok IP dan Floorplan 3D.** Iteratif dengan *thermal-aware placement* menggunakan solver FEM 3D untuk setiap konfigurasi stacking. Constraint: $T_{J,max} \leq T_{spec}$ dan $\Delta T_{inter-die} \leq 15°\text{C}$.

**Tahap 3 — Routing Sinyal Diferensial melalui TSV dan Hybrid Pad.** Verifikasi *signal integrity* melalui *eye diagram* post-layout pada rasio bit error rate (BER) target $\leq 10^{-15}$. Roze dan Gerber menekankan bahwa untuk UCIe standar 32 Gbps/lane, *eye height* minimum 0.4 V dan *eye width* minimum 0.4 UI menjadi acuan wajib.

**Tahap 4 — Desain Power Delivery Network (PDN).** Impedansi target PDN memenuhi persamaan:

$$Z_{PDN}(f) \leq \frac{V_{ripple,max}}{I_{step,max}} \quad \forall f \leq f_{BW}$$

dengan $f_{BW}$ bandwidth regulasi (umumnya 1/3 *clock frequency*). Implementasi menggunakan *decap capacitor* terdistribusi pada tiap *chiplet* plus *TSV array* untuk grounding.

**Tahap 5 — Verifikasi Multi-Fisika Terintegrasi.** Validasi silang antara solver listrik (ANSYS HFSS, Cadence Clarity), termal (ANSYS Icepak, Siemens FloTHERM), dan mekanis (ANSYS Mechanical untuk warpage). Kriteria lulus: *warpage* paket $\leq 100 \text{ μm}$, *stress* Cu-Cu bond $\leq \sigma_{yield}$, dan *TSV* stress $\leq 200 \text{ MPa}$.

**Tahap 6 — Tape-out dan Streaming-Fab Hand-off.** File GDS-II setiap chiplet dikirim ke foundry berbeda; file packaging assembly dikirim ke OSAT (Outsourced Semiconductor Assembly and Test). SOP quality gate mengikuti standar IPC-7091 dan JEDEC J-STD-033.

Lau (2023) menambahkan prosedur khusus *Cu-Cu hybrid bonding* yang mensyaratkan *wafer-to-wafer* (W2W) alignment $\leq 200 \text{ nm}$ (3σ), pre-bonding cleanliness Class 1 (ISO 14644-1), dan annealing pada $300\text{–}400°\text{C}$ selama 30–60 menit dalam atmosfer $N_2$.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Paket 3D-IC HPC dengan 4 *chiplet* (1 *base die* + 3 *compute die* di-stacked face-to-face menggunakan Cu-Cu hybrid bonding pitch 3 μm). Spesifikasi: target $T_{J,max}