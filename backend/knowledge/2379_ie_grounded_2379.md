# 2379 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Teknologi Hybrid Bonding Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global saat ini menghadapi konvergensi dua tekanan struktural yang saling menguatkan: perlambatan historis dari hukum Moore pada node transistor sub-3nm, serta ledakan permintaan akan bandwidth komputasi yang didorong oleh aplikasi *Artificial Intelligence* (AI), *High-Performance Computing* (HPC), dan sistem *autonomous driving*. Biaya desain mask (*mask set cost*) pada node N2 telah melonjak melampaui USD 500 juta per desain, sementara *yield* wafer turun drastis karena meningkatnya kompleksitas litografi EUV dan efek *random defect* pada pitch logam yang menyusut ke angka <20 nm. Dalam konteks inilah paradigma *chiplet* dan integrasi 3D muncul bukan sekadar sebagai pilihan teknologi, melainkan sebagai keharusan strategis.

Ksenia Roze dan Mark Gerber (2026) dalam papernya yang berjudul "EDA Solution for Chiplet and 3D-IC Design" (disajikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) 2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menegaskan bahwa keberhasilan arsitektur multi-die sangat ditentukan oleh kesiapan *toolchain* EDA yang mampu mengoordinasikan verifikasi *package-assembly*, analisis termal multi-fisik, dan validasi *sign-off* kelistrikan dalam satu *unified design environment*. Pendekatan ini berbeda secara fundamental dengan alur desain IC tradisional yang monolitik, karena partisi fungsional antar-chiplet memerlukan metodologi *floorplanning*, *routing*, dan *physical verification* yang sepenuhnya baru.

Di sisi manufaktur, John H. Lau (2023) dalam karyanya "Cu-Cu Hybrid Bonding" (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menunjukkan bahwa teknologi *hybrid bonding* dengan pitch sambungan yang telah mencapai 3 µm—dan menuju 1 µm—menghadirkan kerapatan interkoneksi 100× lebih tinggi dibanding *micro-bump* solder tradisional. Pitch 10 µm pada *micro-bump* solder memberikan sekitar $10^2$ I/O per mm², sedangkan hybrid bonding Cu-Cu menembus angka $10^4$–$10^5$ sambungan per mm². Transformasi ini memungkinkan terbentuknya *die-to-die interconnect* ultra-pendek yang notabene memiliki *latency* mirip dengan sambungan on-chip, sehingga batas antara "package" dan "chip" menjadi semakin kabur.

Urgensi ekonominya tampak jelas: *cost-per-good-die* untuk sistem monolithic 600 mm² pada node 5 nm mendekati USD 17.000, sementara partisi menjadi empat chiplet 150 mm² dengan *known-good-die* (KGD) yield di atas 90% dapat menurunkan biaya efektif hingga 35–45%. Inilah landasan industri yang mengemuka pada literatur Roze & Gerber (2026) dan menjadi justifikasi utama mengapa rekayasa sistem industri modern wajib menguasai integrasi heterogen sebagai kompetensi inti.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resistansi Kontak Hybrid Bonding

Resistansi listrik dari satu sambungan Cu-Cu pada hybrid bonding dimodelkan sebagai resistansi *spreading* pada pad bulat dengan jari-jari efektif $r_{eff}$ (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)):

$$R_{contact} = \frac{\rho_{Cu}}{2\pi r_{eff}} \cdot \ln\left(\frac{r_{a}}{r_{b}}\right)$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m adalah resistivitas tembaga, $r_{a}$ jari-jari pad eksternal, dan $r_{b}$ jari-jari *bond interface*. Pada pitch $p = 3$ µm dan *bond diameter* $d = 2.5$ µm, nilai $R_{contact}$ tipikal berada di rentang 20–50 mΩ per sambungan—jauh lebih rendah dibanding *micro-bump* solder yang mencapai 100–300 mΩ.

### 2.2 Model Yield Negatif-Binomial (Murphy)

Roze & Gerber (2026) mengandalkan *Poisson* dan model *negative binomial* untuk mengkuantifikasi yield system-in-package. Untuk desain chiplet dengan area kritis $A$ dan *defect density* $D$ (defect/cm²):

$$Y_{chiplet} = \left(1 + \frac{D \cdot A}{c}\right)^{-c}$$

dengan $c$ adalah *clustering parameter*. Untuk $c \to \infty$, rumus ini konvergen ke model Poisson murni $Y = e^{-DA}$. Yield sistem multi-die yang memerlukan seluruh $n$ chiplet *known-good* adalah:

$$Y_{system} = \prod_{i=1}^{n} Y_{i}^{KGD_i}$$

### 2.3 Analisis Termal Jaringan Resistansi (Thermal RC)

Untuk stack 3D-IC dengan $n$ *layer*, resistansi termal total *junction-to-ambient* dinyatakan sebagai:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff,i}} + R_{th,interface} + R_{th,heatsink}$$

dengan $t_i$ adalah ketebalan layer ke-$i$, $k_i$ konduktivitas termal material (Si = 150 W/m·K, Cu = 400 W/m·K, $\text{SiO}_2$ = 1.4 W/m·K), dan $A_{eff,i}$ area efektif jalur termal. Pada hybrid bonding Cu-Cu, $R_{th,interface}$ mendekati nol karena terjadi ikatan metalurgi langsung, berbeda dengan TIM (*thermal interface material*) pada *micro-bump* yang menyumbang 0.5–1.5 K/W per interface.

### 2.4 Model Kerapatan Bandwidth

Untuk menilai kualitas interkoneksi *die-to-die*, digunakan metrik *bandwidth density*:

$$BD = \frac{N_{lanes} \cdot f_{clk} \cdot W_{bus}}{A_{die}}$$

dengan $N_{lanes}$ jumlah *lane* paralel, $f_{clk}$ frekuensi clock, $W_{bus}$ lebar bus per lane, dan $A_{die}$ luas chiplet. Standar UCIe (Universal Chiplet Interconnect Express) menargetkan $BD \geq 1$ Tbps/mm² pada generasi 1.0, dan >10 Tbps/mm² pada roadmap 2.0.

### 2.5 Kinetika Diffusion Bonding

Proses *hybrid bonding* dikendalikan oleh *Arrhenius diffusion*:

$$k_{diff} = k_0 \cdot \exp\left(-\frac{E_a}{k_B \cdot T}\right)$$

dengan $E_a \approx 1.5$–2.0 eV untuk difusi Cu-Cu, $k_B$ konstanta Boltzmann, dan $T$ suhu anil (tipikal 300–400°C). Roze & Gerber (2026) menekankan bahwa profil suhu-tekanan (P = 50–150 MPa) harus disimulasikan secara termal-mekanik untuk memprediksi *bonding quality* dan mencegah *thermal stress-induced cracking* pada dieletrik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka yang diuraikan Roze & Gerber (2026) untuk solusi EDA end-to-end pada desain chiplet dan 3D-IC, berikut adalah SOP terstruktur yang adaptif untuk lingkungan manufaktur dan rekayasa industri modern:

**Fase 1 — Partisi Sistem & Spesifikasi Multi-Die (Day 0–14)**
1. Definisikan *use case* dan alokasi *performance budget* (daya, bandwidth, termal).
2. Lakukan *system-level partitioning* menggunakan *algoritma min-cut hypergraph* untuk menentukan batas chiplet.
3. Tetapkan *interface protocol* (UCIe, BoW, atau proprietary), termasuk target $BD$, $E_b$ (energi/bit), dan *lane count*.
4. Identifikasi *chiplet reuse* dari *library IP* untuk menekan *non-recurring engineering* (NRE).

**Fase 2 — Co-Design & Floorplanning 3D (Day 15–60)**
1. Jalankan *physical implementation* pada masing-masing chiplet dengan *technology node* yang optimal (misal compute 3nm + I/O 5nm + analog 12nm).
2. Lakukan *package co-design* termasuk *substrate routing*, *TSV placement*, dan *bump map generation*.
3. Validasi *Design Rule Check* (DRC) dan *Layout Versus Schematic* (LVS) pada level *package-assembly*.

**Fase 3 — Verifikasi Multi-Fisik (Day 60–90)**
1. **Analisis Termal:** bangun *compact thermal model* (CTM) sesuai JEDEC JESD15 dan jalankan *transient simulation*.
2. **Power Integrity:** verifikasi *IR-drop* pada *power delivery network* (PDN) dengan target $\Delta V < 3\%$ $V_{DD}$.
3. **Signal Integrity:** lakukan *channel simulation* dengan *s-parameter*抽取 untuk memastikan *eye diagram margin* > 30%.
4. **SI/PI Co-Simulation