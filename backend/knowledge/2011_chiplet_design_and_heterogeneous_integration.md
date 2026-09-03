# 2011 — Desain Chiplet dan Pengemasan Integrasi Heterogen: Rekayasa Sistem, Optimasi Biaya, dan Keandalan untuk Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Chiplet Design and Heterogeneous Integration Packaging
**Jurnal & Sitasi Utama:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8](https://doi.org/10.1007/978-981-19-9917-8)
**Sitasi Pendukung:** John H. Lau (2023). *Recent Advances and Trends in Chiplet Design and Heterogeneous Integration Packaging*. *Journal of Electronic Packaging*. DOI: [https://doi.org/10.1115/1.4062529](https://doi.org/10.1115/1.4062529)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari pendekatan monolitik System-on-Chip (SoC) menuju arsitektur *System-in-Package* (SiP) berbasis chiplet dan integrasi heterogen. Pergeseran ini bukan sekadar evolusi teknologi, melainkan respons strategis terhadap tiga tekanan struktural yang semakin mengencang: (1) batas fisik penskalaan Moore's Law pada node sub-3 nm, (2) melonjaknya biaya desain dan fabrikasi wafer reticle besar, dan (3) meningkatnya kompleksitas Sistemmikroelektromekanis pada aplikasi *high-performance computing* (HPC), kecerdasan buatan (AI), dan komputasi awan hiperskala. Lau (2023) dalam monografnya yang diterbitkan oleh Springer menjelaskan secara ekstensif bagaimana desainer chip harus melakukan partisi fungsional pada sebuah die monolitik menjadi beberapa chiplet yang kemudian diintegrasikan secara heterogen melalui berbagai platform pengemasan tingkat lanjut.

Dalam karya pendukungnya di *Journal of Electronic Packaging*, Lau (2023, DOI: 10.1115/1.4062529) mengidentifikasi lima vektor strategis integrasi heterogen yang krusial bagi rekayasa industri modern: (a) partisi chip yang digerakkan oleh optimasi biaya dan teknologi, (b) pemecahan (*split*) chip yang digerakkan oleh biaya dan *yield* (hasil produksi), (c) sistem multipel dengan lapisan *thin-film* langsung di atas substrat *build-up package*, (d) sistem multipel dengan *organic interposer* di atas substrat *build-up*, dan (e) sistem multipel dengan *Through-Silicon Via* (TSV) interposer di atas substrat *build-up*. Vektor (c), (d), dan (e) secara eksplisit digerakkan oleh *form factor* dan kinerja, bukan hanya biaya. Urgensi industrialisasi pendekatan ini tampak pada data empiris bahwa biaya masker satu set untuk node 3 nm sudah melebihi US$ 500 juta, sehingga pendekatan chiplet memungkinkan reutilisasi *die* dari proses node yang lebih成熟 pada subsistem yang berbeda.

Konteks rekayasa industri juga diperkuat oleh dinamika rantai pasok global. Pemain semikonduktor utama seperti AMD (Arsitektur Infinity Fabric), Intel (Foveros, Ponte Vecchio), dan TSMC (CoWoS-S, InFO) telah mengadopsi arsitektur chiplet sebagai strategi komersial. Oleh karena itu, kemampuan merekayasa partisi, fabrikasi, dan integrasi chiplet menjadi kompetensi inti yang harus dikuasai oleh insinyur industri untuk mengelola lini perakitan lanjutan (*advanced packaging assembly lines*) yang nilai tambah per wafernya mampu mengimbangi biaya node proses termutakhir.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya dan Yield Chiplet

Model fundamental yang mendasari keputusan partisi chip menjadi chiplet adalah keseimbangan antara pengurangan area aktif per die dan peningkatan biaya integrasi paket. Model *cost-per-good-die* (CPGD) untuk pendekatan monolitik dirumuskan sebagai:

$$
C_{mono} = \frac{C_{wafer}}{N \cdot Y_{mono}}
$$

di mana $C_{wafer}$ adalah biaya pemrosesan wafer (termasuk fotolitografi, etsa, dan pengujian), $N$ adalah jumlah die teoretis per wafer, dan $Y_{mono}$ adalah *yield* monolitik. Yield mengikuti model Poisson yang telah dimodifikasi oleh Seeds untuk semikonduktor modern:

$$
Y_{mono} = \left(\frac{1 - e^{-D_0 A}}{D_0 A}\right)^{2}
$$

dengan $D_0$ adalah densitas cacat per satuan luas (defects/cm²) dan $A$ adalah luas die aktif (cm²). Ketika die monolitik dipartisi menjadi $k$ chiplet identik dengan luas total $A_{total}$ yang sama, maka *yield* sistem baru menjadi:

$$
Y_{chiplet} = 1 - (1 - Y_{k})^{k}
$$

di mana $Y_{k}$ adalah *yield* individual chiplet. Perbandingan rasio biaya kemudian dapat dinyatakan sebagai:

$$
R_{cost} = \frac{C_{chiplet}}{C_{mono}} = \frac{N \cdot Y_{mono}}{N_{chiplet} \cdot Y_{chiplet} \cdot \eta_{assembly}}
$$

di mana $\eta_{assembly}$ adalah efisiensi perakitan paket (*Known Good Die stacking yield*).

### 2.2 Model Termal dan Keandalan TSV

Through-Silicon Via (TSV) berperan sebagai konduktor vertikal dengan resistansi yang menurunkan integritas sinyal dan menghasilkan panas Joule:

$$
R_{TSV} = \frac{\rho_{Cu} \cdot L_{TSV}}{\pi \cdot r_{TSV}^{2}}
$$

di mana $\rho_{Cu} = 1.68 \times 10^{-8}\ \Omega \cdot m$ adalah resistivitas tembaga, $L_{TSV}$ adalah kedalaman via (umumnya 50–100 µm), dan $r_{TSV}$ adalah jari-jari via (5–10 µm). Disipasi daya akibat resistansi ini adalah $P_{Joule} = I^{2} R_{TSV}$.

Untuk keandalan jangka panjang, model Arrhenius digunakan untuk memprediksi *Time-to-Failure* (TTF) pada suhu operasi $T$:

$$
TTF = A \cdot e^{\frac{E_a}{k_B T}}
$$

di mana $E_a$ adalah energi aktivasi (umumnya 0.7–1.0 eV untuk degradasi *electromigration*), $k_B = 8.617 \times 10^{-5}\ eV/K$ adalah konstanta Boltzmann, dan $A$ adalah konstanta material. Hubungan ini digunakan untuk menentukan *junction temperature* maksimum agar tidak melampaui ambang $\theta_{JA}$ yang direkomendasikan.

### 2.3 Model Distribusi Daya dan Form Factor

Total daya pada paket chiplet adalah jumlahan daya setiap chiplet ditambah rugi-rugi interkoneksi:

$$
P_{total} = \sum_{i=1}^{k} P_{i} + P_{interconnect}
$$

Kerapatan daya per satuan area paket dievaluasi untuk menjamin *thermal design power* (TDP):

$$
q = \frac{P_{total}}{A_{package}} \quad \left[W/cm^{2}\right]
$$

Optimasi *form factor* dirumuskan sebagai minimisasi volume efektif paket terhadap jumlah fungsi logis:

$$
V_{eff} = \frac{V_{package}}{N_{function}} \rightarrow \min
$$

dengan kendala kerapatan daya $q \leq q_{max}$ dan impedansi termal paket $\theta_{JA} \leq \theta_{JA,max}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri desain chiplet mengikuti protokol rekayasa sistematis yang diuraikan oleh Lau (2023, DOI: 10.1007/978-981-19-9917-8) sebagai berikut:

**Tahap 1 – Analisis Partisi Sistem.** Insinyur sistem melakukan *Hardware-Software Co-Design* dengan bantuan Electronic Design Automation (EDA) seperti Synopsys 3DIC Compiler atau Cadence Integrity 3D-IC. Fungsi dipecah berdasarkan domain IP (CPU, GPU, I/O, memori HBM, analog/RF) dengan metrik optimasi biaya-waktu-kinerja. Trade-off diezi dirumuskan sebagai:

$$
\Delta = w_1 \cdot \Delta C + w_2 \cdot \Delta T + w_3 \cdot \Delta P
$$

di mana $w_1, w_2, w_3$ adalah bobot manajerial dengan $w_1 + w_2 + w_3 = 1$.

**Tahap 2 – Fabrikasi Die Individual.** Setiap chiplet difabrikasi pada proses node yang optimal terhadap fungsinya (misalnya, CPU logika pada 3 nm, I/O pada 7 nm, power management pada 16 nm BCD). Tahap ini menggunakan lini wafer CMOS成熟 (*mature*) atau mutakhir sesuai rekomendasi *design rules* per node.

**Tahap 3 – Sort dan Known Good Die (KGD).** Setiap chiplet diuji pada suhu (-40°C hingga 125°C) dan frekuensi penuh. Burn-in selama 168 jam dilakukan sesuai standar JEDEC JESD22-A108 untuk menjamin KGD sebelum perakitan.

**Tahap 4 – Integrasi pada Interposer.** Berdasarkan vektor integrasi yang dipilih dari Lau (2023, DOI: 10.1115/1.4062529):

- **Vektor (c):** Chiplet disusun di atas *thin-film* fan-out (contoh: TSMC InFO) langsung pada substrat *build-up*.
- **Vektor (d):** Chiplet ditempatkan di atas *organic interposer* (contoh: Ibiden, Shinko).
- **Vektor (e):** Chiplet di-*stacking* di atas *silicon interposer* dengan TSV (contoh: TSMC CoWoS-S, Intel Foveros).

Proses *hybrid bonding* atau thermo-compression bonding dilakukan dengan presisi ±0.5 µm pada *pick-and-place* tool.

**Tahap 5 – Underfill, Encapsulation, dan Final Test.** Celah antara chiplet dan interposer diisi dengan *capillary underfill* (CUF) atau *non-conductive paste* (NCP). Mold compound diaplikasikan untuk proteksi mekanis. Pengujian akhir (*final test*) dilakukan pada level paket sesuai standar JEDEC JESD22.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah perusahaan merancang paket AI accelerator dengan 4 chiplet identik (CPU/GPU core) dan 1 chiplet I/O. Node proses CPU core: 5 nm (luas 100 mm²), node I/O: 12 nm (luas 50 mm²). Platform integrasi: TSV interposer (Vektor e).

**Langkah 1 – Hitung Yield Monolitik.**

Asumsikan $D_0 = 0.15\ defects/cm^2$. Luas die monolitik total $A_{mono} = 4(100) + 50 = 450\ mm^2 = 4.5\ cm^2$.

$$
Y_{mono} = \left(\frac{1 - e^{-(0.15)(4.5)}}{(0.15)(4.5)}\right)^{2} = \left(\frac{1 - e^{-0.675}}{0.675}\right)^{2} = \left(\frac{0.491}{0.675}\right)^{2} = 0.530
$$

**Langkah 2 – Hitung Yield Chiplet Individual.**

Luas per chiplet CPU = 100 mm² = 1.0 cm².

$$
Y_{CPU} = \left(\frac{1 - e^{-(0.15)(1.0)}}{(0.15)(1.0)}\right)^{2} = \left(\frac{0.139}{0.15}\right)^{2} = 0.860
$$

Luas chiplet I/O = 50 mm² = 0.5 cm².

$$
Y_{IO} = \left(\frac{1 - e^{-(0.15)(0.5)}}{(0.15)(0.5)}\right)^{2} = \left(\frac{0.0724}{0.075}\right)^{2} = 0.932
$$

**Langkah 3 – Hitung Yield Sistem Paket.**

Asumsikan *assembly yield* $\eta_{assembly} = 0.95$ (95% paket lolos setelah integrasi).

$$
Y_{system} = Y_{CPU}^{4} \cdot Y_{IO} \cdot \eta_{assembly} = (0.860)^{4} \cdot 0.932 \cdot 0.95
$$

$$
= 0.547 \cdot 0.932 \cdot 0.95 = 0.484
$$

**Langkah 4 – Bandingkan Yield Gabungan.**

Yield monolitik (0.530) vs yield chiplet system (0.484). Tampaknya