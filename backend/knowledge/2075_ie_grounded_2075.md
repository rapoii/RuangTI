# 2075 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dalam Ekosistem Manufaktur Semikonduktor Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari arsitektur monolitik menuju arsitektur *chiplet* dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga tekanan simultan yang tidak lagi mampu diatasi oleh *scaling* planar tradisional: (i) melonjaknya biaya litografi EUV per wafer menuju ambang USD 20.000–25.000 untuk node 3 nm/2 nm; (ii) menurunnya *return on investment* dari setiap penambahan node (Dennard scaling breakdown); serta (iii) kebutuhan komputasi eksponensial dari workload AI/HPC yang menuntut bandwidth memori > 8 TB/s dan *latency* paket di bawah 5 ns. Roze dan Gerber (2026) dalam papernya di ICEP-HBS Symposium menegaskan bahwa *Electronic Design Automation* (EDA) bukan lagi sekadar alat bantu gambar, melainkan telah menjadi *strategic enabler* yang menentukan kelayakan ekonomi dan waktu *time-to-market* sebuah desain 3D-IC.

Konteks operasionalnya adalah Heterogeneous Integration (HI), di mana beberapa die berbeda proses (misalnya logika 5 nm CMOS, HBM3e DRAM, photonic I/O, dan analog/RF) disatukan dalam satu paket menggunakan interposer silikon atau *direct hybrid bonding*. Sebagaimana ditegaskan oleh Lau (2023) dalam *Chiplet Design and Heterogeneous Integration Packaging*, teknologi Cu-Cu *hybrid bonding* telah menggantikan *solder micro-bump* thermocompression sebagai antarmuka dominan pada pitch ≤ 10 μm, dengan densitas sambungan mencapai 10^6/mm² dan resistansi kontak < 5 mΩ per sambungan. Pergeseran ini menimbulkan konsekuensi manajerial yang serius: siklus desain yang dulu 12–18 bulan untuk ASIC monolitik, kini harus diselesaikan dalam 6–9 bulan dengan mengoordinasikan 4–6 vendor IP, fab, dan *assembly house* secara paralel.

Urgensi ekonominya terlihat pada *bill-of-material* (BOM) sebuah paket HPC kelas atas: biaya NRE EDA dan verifikasi sekarang menyumbang 18–25% dari total biaya pengembangan (sekitar USD 250–450 juta untuk satu program 3D-IC), naik dari 8–12% pada era desain SoC monolitik tahun 2018. Kegagalan verifikasi *thermal-mechanical-electrical* di tahap *pre-silicon* saja dapat menyebabkan kerugian iterasi mask USD 5–15 juta per siklus. Oleh karena itu, kemampuan platform EDA modern—seperti yang diuraikan Roze dan Gerber (2026)—untuk melakukan *co-design* lintas-disiplin (listrik, termal, mekanik, termo-mekanik, dan keandalan) menjadi pembeda kompetitif utama antara vendor yang mampu beroperasi di pasar 3D-IC generasi berikutnya dan yang tertinggal di era planar.

## 2. Landasan Teori & Formulasi Matematis

Desain chiplet dan 3D-IC memerlukan kerangka kuantitatif yang menjembatani empat fenomena fisik yang saling tergandeng: keterlambatan propagasi sinyal listrik, disipasi termal tiga-dimensi, integritas mekanik akibat *Coefficient of Thermal Expansion* (CTE) mismatch, serta biaya manufaktur yang tergantung pada *yield*. Formulasi di bawah ini merepresentasikan kerangka dasar yang harus diselesaikan oleh *solver* EDA secara simultan.

### 2.1 Model Keterlambatan Interkoneksi (RC Delay)

Untuk jalur sinyal dalam *Through-Silicon Via* (TSV) atau *hybrid bonding* pitch halus, total *delay* propagasi didekati dengan model Elmore:

$$\tau_{delay} \approx \sum_{i=1}^{n} R_i \cdot C_i + 0.69 \cdot R_{drv} \cdot C_L$$

dengan $R_i$ dan $C_i$ berturut-turut adalah resistansi dan kapasitansi parasitik segmen ke-$i$, $R_{drv}$ adalah resistansi *driver*, dan $C_L$ adalah kapasitansi beban. Untuk TSV silikon dengan diameter $d$, tinggi $h$, dan *pitch* $p$, resistansinya mengikuti:

$$R_{TSV} = \frac{\rho_{Cu} \cdot h}{\pi \cdot (d/2)^2}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}\ \Omega\cdot m$. Kapasitansi TSV terhadap substrat dihitung melalui konfigurasi silinder koaksial:

$$C_{TSV} = \frac{2\pi \epsilon_0 \epsilon_r h}{\ln(p/d)}$$

Pada teknologi Cu-Cu hybrid bonding dengan pitch 3 μm sebagaimana didokumentasikan Lau (2023), $R_{joint}$ turun hingga $< 1$ mΩ dibanding 50–100 mΩ pada solder bump pitch 40 μm, sehingga *delay* interconnect berkurang secara kuadratik.

### 2.2 Resistansi Termal Stack 3D

Untuk paket 3D-IC dengan $N$ die yang ditumpuk, resistansi termal ekuivalen dari *heat-spreader* ke *heat-sink* mengikuti model resistansi seri dengan area efektif:

$$\Theta_{ja} = \frac{1}{\sum_{i=1}^{N} \left( \dfrac{A_{eff,i}}{t_i / k_i} \right)^{-1}}$$

dengan $t_i$, $k_i$, dan $A_{eff,i}$ berturut-turut adalah tebal, konduktivitas termal, dan area efektif die ke-$i$. Tegangan termal *junction-to-ambient* kemudian:

$$T_j = T_a + P_{diss} \cdot \Theta_{ja}$$

Kenaikan suhu junction ini menentukan *derating* performa dan *lifetime* perangkat melalui Arrhenius: $L \propto e^{E_a / k_B T_j}$.

### 2.3 Tegangan Termo-Mekanik (CTE Mismatch)

Untuk interposer silikon ($\alpha_{Si} \approx 2.6\ \text{ppm/K}$) yang dipasang pada substrat organik ($\alpha_{org} \approx 14\text{–}17\ \text{ppm/K}$), regangan geser maksimum:

$$\gamma_{max} = \Delta T \cdot \Delta\alpha \cdot L_{eff}$$

dengan $\Delta T = T_{curie} - T_{op}$ adalah selisih suhu curing dan operasi, dan $L_{eff}$ adalah jarak efektif dari netral *point*. Tegangan ini menjadi *driver* utama *fatigue* pada sambungan dan *delaminasi* *underfill*.

### 2.4 Model Yield dan Biaya Efektif

Yield kumulatif $Y$ untuk paket yang menggabungkan $M$ chiplet mengikuti formulasi:

$$Y_{package} = \prod_{i=1}^{M} Y_{chiplet,i} \cdot Y_{assembly,i}$$

dengan biaya per sistem fungsional:

$$C_{good} = \frac{\sum_{i=1}^{M} (C_{die,i} + C_{assembly,i})}{Y_{package}}$$

Persamaan ini menjelaskan secara langsung *sweet spot* ekonomis dari integrasi heterogen: peningkatan kompleksitas die ditoleransi jika $Y_{chiplet}$ dapat dipertahankan > 90% melalui *known-good-die* (KGD) testing.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) memaparkan kerangka metodologis tujuh-tahap yang kini menjadi SOP de facto pada *design house* 3D-IC kelas dunia:

**Tahap 1 — System Partitioning dan Feasibility Analysis.** Kandidat dekomposisi die dievaluasi terhadap metrik *bandwidth*, *latency*, *power*, dan *yield* menggunakan algoritma *min-cut* multi-konstrain. Keluaran: daftar konfigurasi chiplet layak beserta *interface specification* (PHY, protokol, lebar bus).

**Tahap 2 — RTL dan IP Integration.** Setiap chiplet dikode secara independen dengan antarmuka standar (misalnya UCIe, BoW, atau OpenHBI). *Lint*, *synthesis*, dan *formal verification* dilakukan pada tingkat IP.

**Tahap 3 — Physical Implementation (Place & Route).** Platform EDA modern (Cadence Virtuoso 3D-IC, Synopsys 3DIC Compiler, Siemens Aprisa) menangani *stacking-aware* P&R dengan kendala TSV dan *bump* placement.

**Tahap 4 — Multi-Physics Verification.** Ini adalah *core contribution* yang ditekankan Roze dan Gerber (2026): verifikasi listrik (IR-drop, SI/PI), termal (ANSYS RedHawk/Celsius, Cadence Voltus/Thermal), termo-mekanik (ANSYS Sherlock, Siemens Calibre 3DStress), dan keandalan (*electromigration*, *time-dependent dielectric breakdown*) dilakukan secara simultan dalam satu *unified database*, menggantikan alur *siloed* tradisional.

**Tahap 5 — Package Co-Design.** Interposer, *substrate*, dan *lid* dioptimasi bersama dengan *floorplan* die menggunakan *co-optimization* yang meminimalkan $\Theta_{ja}$ sekaligus menekan $\gamma_{max}$.

**Tahap 6 — Tape-Out dan Manufacturing Hand-Off.** File GDSII unified dengan *sign-off* DRC/LVS pada setiap *process node* dan verifikasi *assembly* rule (bonding pitch, overlay tolerance).

**Tahap 7 — Post-Silicon Validation.** *Boundary scan*, *built-in self-test* (BIST), dan *system-level test* dengan KGD memastikan yield packaging sesuai model.

Arsitektur teknologi acuan mengikuti standar industri JEDEC JEP30 dan IEEE 2873 untuk 3D-IC, dengan *process flow* Cu-Cu hybrid bonding Lau (2023): planarisasi permukaan ($\text{Ra} < 0.5\ \text{nm}$), aktivasi permukaan Cu, *pre-bonding* pada suhu ruang, *annealing* 200–300°C selama 30–60 menit dalam atmosfer inert, menghasilkan sambungan metalurgi kontinu dengan *void rate* < 0.001%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah paket HPC AI accelerator dengan konfigurasi berikut: 1 *base die* logika 3 nm ($12 \times 12\ \text{mm}^2$, $P_{