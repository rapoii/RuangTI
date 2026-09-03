# 2795 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dalam Ekosistem Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global saat ini menghadapi persimpangan strategis yang fundamental. Setelah lima dekade mengikuti *Moore's Law* melalui penyusutan geometris transistor planar, batas-batas fisik, ekonomi, dan termodinamika mulai menghambat laju miniaturisasi monolitik konvensional. Biaya fabrikasi *wafer* pada node 3 nm dan 2 nm telah melonjak melampaui USD 20 miliar per *fab*, sementara *yield* turun secara eksponensial seiring bertambahnya luas *die* — menghasilkan efek paradoksal di mana transistor per *chip* meningkat, tetapi *cost-per-transistor* tidak lagi turun secara monoton. Konteks ini menjadi latar belakang urgensi operasional dan ekonomis yang diangkat oleh Roze dan Gerber (2026) dalam makalah "EDA Solution for Chiplet and 3D-IC Design" yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*.

Pergeseran paradigma dari *system-on-chip* (SoC) monolitik menuju *system-in-package* (SiP) berbasis chiplet bukan sekadar opsi teknologis, melainkan keniscayaan strategis. McKinsey & Company memperkirakan pasar chiplet akan tumbuh dari USD 5,7 miliar (2023) menjadi lebih dari USD 100 miliar pada 2033, dengan CAGR lebih dari 33%. Namun demikian, adopsi luas chiplet dan 3D-IC terhambat oleh satu *bottleneck* kritis: ketiadaan *tooling* EDA (*Electronic Design Automation*) yang mampu melakukan *co-design*, verifikasi multi-fisika, dan optimasi lintas-die secara holistik. Roze dan Gerber (2026) secara eksplisit mengidentifikasi kesenjangan ini dan mengajukan kerangka solusi EDA yang menjembatani domain *front-end* (logika), *back-end* (routing), dan *advanced packaging* yang selama ini berjalan secara silo.

Di sisi hilir rantai pasok, teknologi *Cu-Cu Hybrid Bonding* yang diuraikan oleh John H. Lau (2023) dalam bab "Cu-Cu Hybrid Bonding" dari buku *Chiplet Design and Heterogeneous Integration Packaging* (Springer, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menjadi *enabler* fisik yang memungkinkan pitch interkoneksi sub-mikron (≤ 2 µm) pada tumpukan 3D. Tanpa *hybrid bonding*, potensi integrasi yang dirancang oleh solusi EDA tidak dapat direalisasikan secara fisik. Oleh karena itu, modul 2795 membahas *co-design* yang tidak terpisahkan: algoritma EDA ↔ proses *hybrid bonding*.

Dari perspektif Teknik Industri, topik ini bukan semata urusan teknisi semikonduktor, melainkan masalah rekayasa sistem yang kompleks — melibatkan keputusan partisi arsitektur, optimasi biaya total kepemilikan (*total cost of ownership*), perencanaan kapasitas *assembly*, dan mitigasi risiko rantai pasok yang harus diselesaikan oleh insinyur industri yang memahami simultanitas约束 teknis dan约束 ekonomis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield untuk Arsitektur Chiplet

Yield total sistem chiplet $\ Y_{sys}$ sangat bergantung pada *Known Good Die* (KGD) yield masing-masing chiplet dan yield proses integrasi paket. Untuk sistem dengan $N$ chiplet, model independensi sederhana mengikuti:

$$\ Y_{sys} = \prod_{i=1}^{N} Y_{i}^{KGD} \cdot Y_{ass}$$

dengan $Y_{i}^{KGD}$ adalah yield KGD chiplet ke-$i$ dan $Y_{ass}$ adalah yield perakitan paket. Karena degradasi $Y_{i}^{KGD}$ akibat partikel dan *defect* acak lebih realistis dimodelkan dengan distribusi *negative binomial* (model Poisson-Compositor), maka yield per die diberikan oleh:

$$\ Y_{die}(A) = \left(1 + \frac{D \cdot A}{c} \right)^{-c}$$

dengan $A$ adalah luas aktif die, $D$ adalah densitas *defect* (defects/cm²), dan $c$ adalah parameter *clustering*. Untuk arsitektur chiplet, defisiensi KGD menurunkan yield sistem secara kompounding. Jika chiplet A (5 mm × 5 mm, $Y_A = 0{,}95$) dan chiplet B (10 mm × 10 mm, $Y_B = 0{,}85$) digabung, maka:

$$\ Y_{sys} = 0{,}95 \times 0{,}85 \times Y_{ass} \approx 0{,}807 \cdot Y_{ass}$$

### 2.2 Model Biaya Total Kepemilikan (*Total Cost of Ownership*)

Biaya per unit fungsi ($C_{fungsi}$) untuk sistem heterogen dapat diformulasikan sebagai:

$$\ C_{fungsi} = \frac{C_{wafer} + N_{chiplet} \cdot C_{ass} + C_{test}}{\sum_{i} f_i \cdot Y_{sys}}$$

dengan $C_{wafer}$ adalah biaya wafer per *processed wafer*, $N_{chiplet}$ jumlah chiplet, $C_{ass}$ biaya *assembly* per *bump*, $C_{test}$ biaya pengujian akhir, dan $f_i$ adalah fungsi logik yang diimplementasikan per chiplet. Roze dan Gerber (2026) menekankan bahwa EDA berperan dalam mengoptimasi agar $C_{fungsi}$ diminimalkan melalui pilihan partisi dan jumlah *bump*.

### 2.3 Resistansi Termal TSV dan Tumpukan 3D

Resistansi termal dari satu *Through-Silicon Via* (TSV) mengikuti konduksi silinder 1-D:

$$\ R_{th,TSV} = \frac{L_{TSV}}{k_{Cu} \cdot A_{TSV}} = \frac{4 L_{TSV}}{k_{Cu} \cdot \pi \cdot d_{TSV}^{2}}$$

dengan $L_{TSV}$ adalah panjang TSV, $d_{TSV}$ diameter TSV, dan $k_{Cu} \approx 401 \text{ W/(m·K)}$ konduktivitas termal tembaga. Untuk *array* TSV dengan kerapatan pitch $p$, resistansi termal efektif per area diberikan oleh:

$$\ R_{th,eff} = \frac{1}{n_{TSV}} \left( \frac{L_{TSV}}{k_{Cu} \cdot A_{TSV}} \parallel \frac{p^{2}}{k_{Si} \cdot L_{TSV}} \right)$$

### 2.4 Resistansi Kontak *Hybrid Bonding* Cu-Cu

Lau (2023) menurunkan resistansi kontak untuk sambungan Cu-Cu *hybrid bonding* dengan luas kontak $A_c$ dan resistivitas interfacial $\rho_c$:

$$\ R_{contact} = \frac{\rho_{Cu-Cu}}{A_c} + \frac{\rho_c}{A_c} = \frac{\rho_{eff}}{A_c}$$

Untuk geometri bundar dengan diameter $d_{bump}$ dan pitch $p_{pitch}$, kerapatan interkoneksi maksimum adalah:

$$\ \rho_{int} = \frac{1}{p_{pitch}^{2}} \text{ [koneksi/mm}^2\text{]}$$

### 2.5 Delay RC untuk Interkoneksi Sub-Mikron

Pada pitch 1–2 µm, delay RC menjadi dominan. Untuk saluran transmisi terdistribusi:

$$\ \tau_{RC} = 0{,}38 \cdot R_{int} \cdot C_{int} \cdot L^{2}$$

dengan $R_{int}$ resistansi per satuan panjang, $C_{int}$ kapasitansi per satuan panjang, dan $L$ panjang saluran. Hal ini menjadi justifikasi kuat bagi tools EDA untuk melakukan *buffer insertion* dan *wire sizing* otomatis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Alur Kerja EDA untuk Chiplet dan 3D-IC

Roze dan Gerber (2026) mengusulkan alur kerja terintegrasi dengan tahapan sebagai berikut:

**Tahap 1 — Partisi Arsitektur Lintas-Die.** Spesifikasi sistem (target performa, daya, area, biaya) didekomposisi menjadi sub-fungsi dan dialokasikan ke chiplet yang mungkin menggunakan *process node* berbeda (heterogen). Algoritma partisi memperhitungkan *trade-off* antara luas die (→ yield), jumlah *bump* (→ biaya interkoneksi), dan panjang kabel kritis (→ performa).

**Tahap 2 — Co-Design Logika dan Paket.** Setelah partisi, *floorplanning* dilakukan secara simultan untuk semua chiplet dengan *unified bump grid*. Pada tahap ini, EDA mengakomodasi *bump assignment* yang memperhitungkan sinyal, daya, dan termal secara terpadu.

**Tahap 3 — Place-and-Route Multi-Die.** Routing dilakukan secara global dengan *through-silicon-via* (TSV) dan *micro-bump* sebagai primitif. Verifikasi DRC (*Design Rule Check*) lintas-die memastikan kepatuhan terhadap约束 proses *hybrid bonding*.

**Tahap 4 — Verifikasi Multi-Fisika.** Ini merupakan kontribusi orisinal Roze & Gerber (2026): integrasi simultan:
- *Signal Integrity* (SI): analisis crosstalk pada pitch < 2 µm
- *Power Integrity* (PI): drop IR pada *power delivery network* TSV
- *Thermal analysis*: identifikasi *hotspot* pada die aktif
- *Thermo-mechanical stress*: simulasi CTE mismatch pada antarmuka Cu-Cu

**Tahap 5 — Tape-out dan Assembly Hand-off.** Hasil desain diekspor dalam format GDSII/OASIS