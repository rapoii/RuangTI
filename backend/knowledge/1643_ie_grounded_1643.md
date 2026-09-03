# 1643 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Rekayasa Sistem Elektronik Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In: Chiplet Design and Heterogeneous Integration Packaging. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi arsitektur semikonduktor memasuki babak baru ketika batas fisik penskalaan node planar tunggal (monolithic SoC) mulai menunjukkan fenomena *diminishing returns* yang signifikan. Ksenia Roze dan Mark Gerber (2026) dalam papernya yang berjudul "EDA Solution for Chiplet and 3D-IC Design" yang dipublikasikan di *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* (DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menegaskan bahwa industri semikonduktor global sedang melakukan transisi paradigma dari pendekatan *System-on-Chip* (SoC) konvensional menuju paradigma *Chiplet-based Heterogeneous Integration* (CHI) dan *Three-Dimensional Integrated Circuit* (3D-IC). Pergeseran ini bukan semata-mata evolusi teknologi, melainkan respons strategis terhadap tiga tekanan fundamental yang dihadapi oleh seluruh rantai nilai manufaktur semikonduktor: pertama, melonjaknya biaya fabrikasi *wafer* pada node 3 nm dan 2 nm yang telah melampaui ambang USD 20 miliar per fab; kedua, fragmentasi pasar aplikasi yang membutuhkan integrasi proses logika, memori, RF, dan power dalam satu kemasan; ketiga, keterbatasan *reticle limit* photolithography yang tidak lagi mampu menampung desain kompleks dalam satu die.

Konteks ekonomi mikroelektronika menunjukkan bahwa pasar chiplet global diproyeksikan mencapai USD 148 miliar pada 2030 dengan CAGR (Compound Annual Growth Rate) sebesar 38,4%, didorong oleh adopsi masif di hyperscaler data center, komputasi AI/HPC, dan perangkat edge computing. Roze dan Gerber (2026) menekankan bahwa tantangan utama bukan pada pembuatan fisik chiplet itu sendiri—yang telah dimungkinkan oleh teknologi *hybrid bonding* Cu-Cu yang dipaparkan secara ekstensif oleh John H. Lau (2023) dalam bukunya *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6))—melainkan pada **desain kolaboratif lintas domain** yang membutuhkan platform EDA (Electronic Design Automation) dengan kapabilitas co-design, verifikasi multi-die, dan optimasi lintas paket.

Urgensi operasional dari paper ini juga tampak pada fakta bahwa yield per-die pada *wafer* 300 mm turun secara eksponensial dengan meningkatnya ukuran die, mengikuti formulasi $\text{Yield} = e^{-D_0 \cdot A}$ (model Poisson), sehingga fabrikasi beberapa chiplet kecil kemudian diintegrasikan menawarkan yield komposit yang jauh lebih tinggi. Roze dan Gerber (2026) mengemukakan bahwa pipeline EDA modern harus mampu menangani partisi desain logika, floorplanning multi-die, analisis *thermal-mechanical stress*, verifikasi *signal/power integrity* lintas-die, dan generasi *GDSII* terpadu dalam satu *flow* yang koheren. Tanpa tool EDA yang matang, manfaat teknis Cu-Cu hybrid bonding—yang mampu mencapai pitch interkoneksi 3 µm atau bahkan sub-mikron (Lau, 2023)—tidak akan terealisasi secara ekonomis dan tepat waktu (*time-to-market*). Oleh karena itu, solusi EDA untuk chiplet dan 3D-IC bukan sekadar tools TI, melainkan *strategic enabler* bagi keberlanjutan Hukum Moore di era post-planar.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang mendasari solusi EDA untuk chiplet dan 3D-IC sebagaimana diuraikan oleh Roze & Gerber (2026) dan diperkuat oleh Lau (2023) terdiri atas beberapa pilar model kuantitatif yang saling terkait.

### 2.1 Model Yield Multi-Die Komposit

Untuk sistem multi-chiplet, yield total didefinisikan sebagai produk yield masing-masing die yang telah melewati proses sort dan Known-Good-Die (KGD):

$$Y_{total} = \prod_{i=1}^{N} Y_i \cdot Y_{assembly}$$

Di mana $Y_i = e^{-D_{0,i} \cdot A_i}$ adalah yield individual die ke-$i$, $D_{0,i}$ adalah defect density (defect/cm²), dan $A_i$ adalah luas aktif die. Untuk arsitektur 4-chiplet, jika masing-masing die memiliki yield individual 90%, maka $Y_{total} = 0.9^4 \times Y_{assembly} = 0.656 \times Y_{assembly}$. Namun, dengan strategi *redundancy* dan *repair link* yang difasilitasi oleh EDA, yield efektif dapat ditingkatkan menjadi:

$$Y_{eff} = 1 - (1 - Y_i)^M$$

di mana $M$ adalah jumlah unit redundan. Roze & Gerber (2026) menunjukkan bahwa EDA modern harus menyediakan modul *yield-aware optimization* yang secara iteratif menyesuaikan partisi dan redundansi untuk memenuhi target $Y_{eff} \geq 99\%$.

### 2.2 Model Thermal Multi-Die 3D-IC

Distribusi temperatur dalam stack 3D-IC dimodelkan dengan persamaan konduksi panas *steady-state* multi-layer:

$$T_j = T_a + \sum_{k=1}^{n} \frac{q_k \cdot t_k}{k_{th,k}}$$

di mana $T_j$ adalah temperatur junction, $T_a$ adalah temperatur ambient, $q_k$ adalah flux panas (W/cm²) pada layer ke-$k$, $t_k$ adalah ketebalan layer, dan $k_{th,k}$ adalah konduktivitas termal material (W/m·K). Untuk stack dengan *thermal interface material* (TIM) dan *underfill*, resistansi termal total die-to-ambient menjadi:

$$R_{ja} = R_{jc} + R_{tim} + R_{spreader} + R_{hs}$$

Roze & Gerber (2026) menekankan bahwa EDA pipeline harus melakukan *thermal co-simulation* dengan akurasi tinggi menggunakan solver *finite element* atau *compact thermal model* (CTM) untuk mencegah thermal runaway.

### 2.3 Model Signal Integrity untuk Hybrid Bonding

Lau (2023) memaparkan bahwa pitch interkoneksi Cu-Cu hybrid bonding mencapai 3–10 µm dengan resistansi kontak tipikal $R_c = 5$–$50$ mΩ per sambungan. Time constant RC untuk interkoneksi sinyal didekati dengan:

$$\tau_{RC} = R_{int} \cdot C_{int} = \rho \cdot \frac{L}{A} \cdot \varepsilon_0 \varepsilon_r \frac{W \cdot L}{d}$$

di mana $\rho$ adalah resistivitas Cu ($1.68 \times 10^{-8}$ Ω·m), $L$ adalah panjang interkoneksi, $A$ adalah luas penampang, $\varepsilon_r$ adalah permitivitas relatif dielektrik, dan $d$ adalah jarak antar-trace. Untuk pitch 3 µm, panjang 100 µm, dengan dielektrik SiO₂ ($k = 3.9$), diperoleh $\tau_{RC}$ dalam orde pikodetik yang cukup untuk transmisi sinyal GHz–THz.

### 2.4 Model Mechanical Stress pada Hybrid Bonding

Roze & Gerber (2026) membahas pentingnya analisis warpage dan *thermomechanical stress* mengingat Coefficient of Thermal Expansion (CTE) mismatch:

$$\varepsilon_{mismatch} = \Delta T \cdot (\alpha_{Cu} - \alpha_{Si})$$

dengan $\alpha_{Cu} = 17 \times 10^{-6}$ /°C dan $\alpha_{Si} = 2.6 \times 10^{-6}$ /°C. Untuk proses bonding pada suhu 300°C dan operasi pada 25°C, regangan diferensial $\varepsilon = 275 \times 14.4 \times 10^{-6} \approx 0.4\%$ cukup untuk menghasilkan stress yang dapat memicu *delamination* atau *void* pada interface Cu-Cu.

### 2.5 Model Optimasi Multi-Objektif EDA

Pipeline EDA chiplet menyelesaikan fungsi objektif:

$$\min_{x \in X} \left[ f_1(x), f_2(x), f_3(x), f_4(x) \right]^T$$

di mana $f_1$ = biaya manufaktur, $f_2$ = delay timing kritis, $f_3$ = temperatur junction maksimum, dan $f_4$ = yield efektif. Solusi Pareto-front diperoleh melalui algoritma NSGA-II atau *reinforcement learning-based* floorplanner sebagaimana diusulkan oleh Roze & Gerber (2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi desain chiplet dan 3D-IC memerlukan SOP rekayasa yang sangat terstruktur. Berdasarkan Roze & Gerber (2026) dan diperkuat oleh protokol industri yang dijabarkan Lau (2023), alur kerja EDA end-to-end terdiri dari delapan fase operasional:

**Fase 1 – System-Level Architecture Partitioning.** Tahap awal adalah dekomposisi fungsi sistem (compute, memory, I/O, RF) menjadi blok-blok logika yang akan di-*fab* sebagai chiplet terpisah. EDA tool menerima *RTL description* dan menghasilkan *candidate partition* yang dievaluasi berdasarkan metrik bandwidth, latency, dan biaya. Roze & Gerber (2026) memperkenalkan modul *AI-assisted partitioning* yang menggunakan Graph Neural Network (GNN) untuk memprediksi kualitas partisi sebelum *synthesis* aktual.

**Fase 2 – Multi-Die Floorplanning & Placement.** Setelah partisi disetujui, EDA melakukan *floorplanning* simultan untuk seluruh chiplet dalam satu *package*. Constraint thermal, area interposer, dan routing die-to-die dimasukkan dalam objective function. Algoritma *simulated annealing* dan *force-directed placement* digunakan secara iteratif.

**Fase 3 – Die-to-Die (D2D) Interface Design.** Protokol komunikasi antar-chiplet seperti UCIe (Universal Chiplet Interconnect Express), BoW (Bunch of Wires), atau OpenHBI diimplementasikan. Setiap interface memiliki constraint PHY (physical layer) yang ketat: bandwidth minimum, latency maksimum, dan BER target $10^{-12}$. Lau (2023) menunjukkan bahwa interface ini perlu divalidasi melalui *channel simulation* dan *equalization design*.

**Fase 4 – Hybrid Bonding Physical Implementation.** Pada level layout fisik, *bump pattern* Cu-Cu dirancang dengan pertimbangan *alignment tolerance* ($\leq 200$ nm) dan *bonding force uniformity*. Parameter proses seperti *annealing temperature* (300–400°C), *bonding pressure* (100–300 MPa), dan *time* (30–60 menit) harus di-*input* ke EDA untuk *process-aware design rule check* (DRC).

**Fase 5 – Multi-Physics Verification.** Fase ini melakukan verifikasi terintegrasi: (a) *Static Timing Analysis* (STA) lintas-die dengan corner case PVT (Process-Voltage-Temperature); (b) *Power Integrity Analysis* (PI) termasuk IR-drop dan *power network resonance*; (c) *Signal Integrity* (SI) untuk GHz signalling; (d) *Thermal Analysis* dengan solver 3D; (e) *Mechanical Stress Analysis* untuk reliability prediction.

**Fase 6 – DRC/LVS Multi-Die.** Design Rule Check dan Layout Versus Schematic dilakukan pada tingkat individual chiplet dan tingkat package assembly. Aturan khusus diterapkan untuk *hybrid bonding keep-out zone*, *through-silicon via (TSV) keep-out*, dan *seal ring*.

**Fase 7 – Tape-Out & Assembly Documentation.** EDA menghasilkan *GDSII* untuk masing-masing chiplet, *bonding diagram*, dan *assembly drawing*. Dokumentasi *Known-Good-Die (KGD) test program*, *package test program*, dan *burn-in profile* juga disiapkan.

**Fase 8 – Post-Silicon Validation.** Setelah fabrikasi, data *ATE* (Automatic Test Equipment) dan *in-situ monitoring* di-*feedback* ke database machine learning untuk meningkatkan akurasi model pada iterasi desain berikutnya. Roze & Gerber (2026) menyebut siklus tertutup ini sebagai *closed-loop EDA optimization*.

Standar industri yang relevan meliputi: **IEEE 1838** untuk test access architecture 3D-IC, **JEDEC JESD235C** untuk HBM interface, **UCIe Specification 1.0/2.0** untuk chiplet interconnect, dan **IPC-7095** untuk BGA packaging.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi aplikasi kuantitatif, perhatikanlah desain SoC berbasis chiplet untuk accelerator AI yang terdiri dari:

- **1× Compute Chiplet**: