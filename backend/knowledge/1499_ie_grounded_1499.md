# 1499 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Hybrid Bonding Cu-Cu dalam Ekosistem Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma desain semikonduktor dari pendekatan monolithic System-on-Chip (SoC) menuju arsitektur disagregasi chiplet dan *three-dimensional integrated circuit* (3D-IC) telah menjadi respons strategis industri mikroelektronika terhadap batas fisik Hukum Moore, batas ekonomi Hukum Rock, serta kompleksitas desain yang semakin eksponensial. Roze dan Gerber (2026) dalam paparannya di *International Conference on Electronics Packaging and Hybrid Bonding Symposium* menegaskan bahwa solusi Electronic Design Automation (EDA) untuk chiplet dan 3D-IC bukan lagi sekadar *enabler* teknis, melainkan telah menjadi *strategic infrastructure* yang menentukan kemampuan suatu negara atau perusahaan untuk berpartisipasi dalam rantai pasok semikonduktor maju (high-end) [DOI: 10.23919/icep-hbs69241.2026.11550563].

Urgensi industri ini bersifat multidimensional. Dari sisi operasional, panjang garis interkoneksi pada sistem monolithic 2D untuk chip >100 mm² dapat melampaui 50 mm, sehingga resistansi dan kapasitansi寄生 (parasitik) menurunkan integritas sinyal (signal integrity) dan meningkatkan disipasi daya dinamis. Dari sisi ekonomi, biaya masker (mask set) untuk node N3 sudah menembus US$ 30 juta per desain penuh, sementara desain chiplet memungkinkan pemakaian ulang *intellectual property* (IP) blok sehingga biaya *non-recurring engineering* (NRE) dapat ditekan hingga 40–60%. Dari sisi teknis, integrasi heterogen melalui hybrid bonding Cu-Cu — sebagaimana dirinci oleh Lau (2023) — memungkinkan pitch interkoneksi sub-10 µm dengan resistansi kontak < 50 mΩ per sambungan dan densitas I/O > 10⁶/cm² [DOI: 10.1007/978-981-19-9917-8_6].

Konteks rantai pasok semakin relevan dengan adanya *Universal Chiplet Interconnect Express* (UCIe) yang distandardisasi pada tahun 2022 dan terus diperbarui, serta inisiatif CHIPS Act Amerika Serikat (US$ 52 miliar) dan European Chips Act (€ 43 miliar) yang secara eksplisit menyebutkan heterogen integration sebagai area prioritas. Dalam kerangka Teknik Industri, fenomena ini merepresentasikan konfigurasi ulang total dari sistem produksi: dari lini fabrikasi wafer tunggal menjadi *distributed manufacturing network* yang mengintegrasikan beberapa fab (foundry), beberapa OSAT (Outsourced Semiconductor Assembly and Test), dan platform EDA kolaboratif multi-vendor.

Roze dan Gerber (2026) menekankan bahwa tantangan inti bukan pada fabrikasi fisik melainkan pada *co-design* lintas domain: integritas daya (power integrity), integritas sinyal frekuensi tinggi, manajemen termal 3D, desain-untuk-testabilitas (Design-for-Test/DFT) pada level die dan stack, serta verifikasi *multi-physics* yang sebelumnya ditangani secara silo kini harus diselesaikan secara simultan dalam satu *unified database* EDA. Tanpa platform EDA yang mature, biaya rekayasa dan risiko *time-to-market* untuk produk chiplet akan membuat pendekatan ini secara ekonomis tidak viable bagi sebagian besar pemain industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resistansi Termal Jaringan 3D-IC

Sistem 3D-IC dengan *n* die yang di-*stack* membentuk jaringan konduksi termal satu dimensi yang dapat dimodelkan sebagai resistor seri-paralel. Resistansi termal total dari *junction* ke *ambient* didefinisikan sebagai:

$$\theta_{ja} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + \theta_{TIM} + \theta_{hs}$$

di mana $t_i$ adalah ketebalan die ke-$i$ (m), $k_i$ adalah konduktivitas termal material (W/m·K), $A_i$ adalah luas efektif area termal (m²), $\theta_{TIM}$ adalah resistansi thermal interface material, dan $\theta_{hs}$ adalah resistansi heat sink eksternal. Untuk stack 3D-IC khas dengan empat die masing-masing $t_i = 50\ \mu m$, $k_{Si} = 148$ W/m·K, dan $A = 100$ mm²:

$$\theta_{stack} = \frac{4 \times 50 \times 10^{-6}}{148 \times 100 \times 10^{-6}} = 1{,}35 \times 10^{-2}\ \text{K/W}$$

Temperatur *junction* maksimum $T_j$ memenuhi:

$$T_j = P_{total} \cdot \theta_{ja} + T_a$$

### 2.2 Model Kualitas Sambungan Hybrid Bonding Cu-Cu

Lau (2023) menurunkan parameter kualitas sambungan Cu-Cu hybrid bonding melalui tiga variabel proses utama: suhu annealing $T_a$ (°C), waktu bonding $t_b$ (s), dan tekanan bonding $P_b$ (MPa). Kekuatan tarik sambungan (bonding tensile strength) dapat dimodelkan dengan persamaan Arrhenius-Coble type diffusion bonding:

$$\sigma_{bond} = \sigma_0 \cdot \exp\left(-\frac{Q_a}{R \cdot T_a}\right) \cdot \left(\frac{P_b \cdot t_b}{d_{pitch}}\right)^{m}$$

di mana $\sigma_0$ adalah konstanta referensi (~120 MPa untuk Cu murni), $Q_a$ adalah energi aktivasi difusi batas butir Cu (~104 kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), $d_{pitch}$ adalah pitch sambungan (m), dan $m$ adalah eksponen pengerasan regangan (~0,5).

Resistansi kontak spesifik sambungan Cu-Cu memenuhi:

$$R_c = \frac{\rho_{Cu}}{2 \cdot \pi \cdot r_{contact}} + R_{interface}$$

dengan $\rho_{Cu} = 1{,}68 \times 10^{-8}\ \Omega\cdot$m, $r_{contact}$ radius kontak efektif, dan $R_{interface}$ merepresentasikan kontribusi oksida dan *micro-void* yang menurun eksponensial terhadap suhu annealing.

### 2.3 Model Biaya Rekayasa Desain Chiplet

Dalam perspektif Teknik Industri, keputusan disagregasi chiplet harus dievaluasi dengan fungsi biaya total:

$$C_{total} = \sum_{j=1}^{m} \left( C_{NRE,j} + C_{mask,j} + N \cdot C_{die,j} \right) + C_{assembly} + C_{test}$$

di mana $m$ adalah jumlah chiplet unik, $N$ adalah jumlah unit produksi, dan $C_{assembly}$ mencakup biaya hybrid bonding (yang turun signifikan seiring kematangan proses). Break-even volume untuk disagregasi versus SoC monolitik dapat ditentukan dengan menyamakan kedua fungsi biaya dan menyelesaikan untuk $N^*$.

### 2.4 Yield Model untuk Stack Multi-Die

Yield sistem 3D-IC dimodelkan dengan komposisi yield individu *known-good-die* (KGD):

$$Y_{stack} = \prod_{i=1}^{n} Y_{KGD,i} \cdot Y_{assembly,i}$$

Untuk yield KGD yang mengikuti distribusi Weibull dengan parameter bentuk $\beta$ dan skala $\eta$, yield individual die adalah:

$$Y_{KGD} = \exp\left[-\left(\frac{A_d}{\eta}\right)^{\beta}\right]$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka metodologi EDA berlapis yang disebut *Unified 3D-IC Co-Design Flow*. Arsitektur ini terdiri atas tujuh tahapan operasional yang harus dieksekusi secara sekuensial namun dengan data exchange iteratif.

**Tahap 1 — System-Level Partitioning.** Keputusan partisi fungsional antara chiplet dilakukan berdasarkan tiga metrik optimasi: *bandwidth density* (Gb/s/mm), *thermal density* (W/mm²), dan *manufacturability yield*. Pitch interkoneksi UCIe standar (45 µm untuk Gen 1) memberikan *bandwidth density* dasar 1,35 Tb/s/mm per stack.

**Tahap 2 — Physical Implementation Multi-Die.** Setiap chiplet diimplementasikan secara paralel dengan constraint footprint yang telah disepakati. Pada tahap ini, *floorplanning tool* harus memiliki visibilitas 3D untuk menghindari *thermal hot-spot* dan *signal congestion*.

**Tahap 3 — Verification Integritas Sinyal Multi-Domain.** Simulasi *electromagnetic* (EM) dilakukan pada struktur *through-silicon via* (TSV) dan interposer dengan model S-parameter hingga 110 GHz untuk aplikasi UCIe Gen 2. Persyaratan *insertion loss* dijaga pada < 0,5 dB per mil dan *return loss* < −10 dB.

**Tahap 4 — Power Integrity and IR-Drop Analysis.** Analisis IR-drop dilakukan pada jaringan distribusi daya yang melewati beberapa die dengan resistansi TSV tipikal 50 mΩ per via. Power mesh harus didesain untuk menjaga $V_{min} - V_{drop} > V_{threshold}$ pada semua kondisi operasi.

**Tahap 5 — Thermal Co-Simulation.** Simulasi termal 3D menggunakan *finite element method* atau *compact thermal RC model* dengan boundary condition konveksi dan radiasi. Hasil menjadi input bagi dynamic thermal management (DTM) unit.

**Tahap 6 — Design-for-Test Multi-Die.** Mengacu pada Lau (2023), arsitektur DFT untuk chiplet harus menyediakan *Test Access Mechanism* (TAM) yang memungkinkan pengujian *pre-bond* dan *post-bond* secara independen. Standar IEEE 1838 mendefinisikan protokol *die-to-die interconnect test*.

**Tahap 7 — Assembly-Aware Sign-Off.** Sebelum tape-out akhir, dilakukan verifikasi aturan desain (DRC) dan layout-versus-schematic (LVS) pada level stack penuh, termasuk verifikasi pitch bonding $d_{pitch}$, CD (critical dimension) Cu pad, dan profil permukaan (*coplanarity* < 50 nm).

Diagram alir proses mengikuti pola *Y-chart* multi-domain: dimulai dari spesifikasi fungsional, dilakukan partisi dan implementasi pada masing-masing domain (behavioral, struktural, fisik), kemudian dilakukan verifikasi silang sebelum sign-off final.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Desain stack 3D-IC untuk akselerator AI dengan dua chiplet — compute die (5 nm, $A = 100$ mm²) dan memory die (HBM-like, $A = 80$ mm²) — yang diintegrasikan menggunakan teknologi hybrid bonding Cu-Cu pitch 10 µm sesuai referensi Lau (2023).

**Langkah 1 — Perhitungan Resistansi Termal Stack:**
$$A_{eff} = 80 \times 10^{-6}\ \text{m}^2,\quad t_{Si} = 75\ \mu\text{m},\quad k_{Si} = 148\ \text{W/m·K}$$
$$\theta_{stack} = \frac{2 \times 75 \times 10^{-6}}{148 \times 80 \times 10^{-6}} = 1{,}27 \times 10^{-2}\ \text{K/W}$$

Tambahkan TIM ($\theta_{TIM} = 0{,}05$ K/W) dan heat sink ($\theta_{hs} = 0{,}3$ K/W):
$$\theta_{ja} = 1{,}27 \times 10^{-2} + 0{,}05 + 0{,}3 = 0{,}363\ \text{K/W}$$

**Langkah 2 — Kapasitas Disipasi Daya:**
Dengan batas $T_j = 85$ °C dan $T_a = 55$ °C:
$$P_{max} = \frac{T_j - T_a}{\theta_{ja}} = \frac{85 - 55}{0{,}363} = 82{,}6\ \text{W}$$

Artinya stack 3D-IC ini memiliki *thermal envelope* ~83 W pada kondisi operasi nyata — sebanding dengan