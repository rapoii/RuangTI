# 2091 — Solusi EDA untuk Desain Chiplet dan Integrasi Tiga Dimensi (3D-IC): Optimasi Multi-Fisika, Bonding Hibrida Cu-Cu, dan Manajemen Termal Lintas Domain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada di persimpangan kritis: sementara biaya fabrikasi *wafer* pada node 3 nm dan 2 nm melonjak hingga USD 20.000–25.000 per *wafer* (menurut data publik TSMC dan IBS), produktivitas transistor per dolar terus menurun setelah dua dekade mengikuti Hukum Moore klasik. Paradigma *monolithic System-on-Chip* (SoC) menjadi tidak lagi layak secara ekonomi untuk sebagian besar aplikasi komputasi高性能, kecuali untuk produk dengan volume sangat tinggi. Dalam konteks ini, arsitektur **chiplet**—di mana beberapa *die* kecil (chiplet) dari proses fabrikasi berbeda diintegrasikan ke dalam satu paket—hadir sebagai respons strategis, dan pergeseran ini secara langsung menciptakan permintaan baru akan **solusi Electronic Design Automation (EDA)** yang mampu menjembatani desain multi-*die*, multi-*foundry*, dan multi-teknologi.

Roze dan Gerber (2026) dalam makalah mereka yang berjudul *EDA Solution for Chiplet and 3D-IC Design* menyoroti bahwa keterbatasan utama adopsi chiplet bukan lagi pada proses fabrikasi, melainkan pada *toolchain* EDA yang belum terpadu. Mereka mengidentifikasi empat *gap* utama: (1) kurangnya kerangka *floorplanning* koheren untuk *heterogeneous integration*, (2) ketidakmampuan simulator tradisional menangani efek kopling termal-listrik-mekanik secara simultan, (3) fragmentasi *intellectual property* (IP) dan *verification flow* antar-pemasok chiplet, dan (4) belum adanya standar universal untuk *die-to-die interface* (D2D). Di sisi hilir, Lau (2023) menekankan bahwa **Cu-Cu hybrid bonding** merupakan teknologi enabling kritis untuk mencapai kepadatan interkoneksi >10⁶ koneksi/mm² dengan pitch sub-10 μm—suatu tingkat integrasi yang mustahil dicapai dengan *solder micro-bump* konvensional.

Secara ekonomi, biaya rekayasa non-tulang berulang (NRE) untuk sebuah desain SoC monolithic pada node 5 nm dapat mencapai USD 540 juta (menurut estimasi IBS 2022), sementara arsitektur chiplet dengan *known-good-die* (KGD) dapat menurunkan NRE hingga 40–60% karena memungkinkan penggunaan ulang IP, *yield* per *die* yang lebih tinggi, dan fabrikasi paralel pada node yang berbeda. Namun, potensi penghematan ini baru terealisasi bila ada rantai alat EDA yang matang—menjadikan topik ini sangat relevan bagi insinyur industri yang mengelola keputusan Make-or-Buy, optimasi portofolio produk, dan *time-to-market*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal Jaringan Resistansi untuk Stack 3D-IC

Untuk paket chiplet multi-*die*, manajemen termal dimodelkan sebagai jaringan resistansi termal satu dimensi hingga tiga dimensi. Resistansi termal konduksi die diberikan oleh:

$$R_{th,die} = \frac{t_{die}}{k_{Si} \cdot A_{die}}$$

di mana $t_{die}$ adalah ketebalan die (tipikal 50–775 μm), $k_{Si} \approx 149 \text{ W/(m·K)}$ adalah konduktivitas termal silikon pada suhu ruang, dan $A_{die}$ adalah luas *footprint*. Untuk stack multi-die, resistansi total die-stack dapat dihampiri dengan **resistor network** menggunakan analogi nodal:

$$\sum_{j \in N(i)} \frac{T_i - T_j}{R_{ij}} + q_i = 0$$

di mana $q_i$ adalah *power dissipation* pada node $i$, dan $R_{ij}$ adalah resistansi termal antar-node. Untuk mengkuantifikasi gradien termal lateral yang menyebabkan *thermal crosstalk*, kita gunakan parameter **thermal coupling efficiency**:

$$\eta_{TC} = \frac{T_{j,peak} - T_{ambient}}{q_i \cdot R_{th,self}} \leq 1$$

di mana $\eta_{TC} = 1$ menandakan kopling sempurna (kasus terburuk), dan nilai rendah diinginkan untuk isolasi termal antar chiplet.

### 2.2 Model Yield untuk Bonding Hibrida Cu-Cu

Lau (2023) mendokumentasikan bahwa *bonding yield* $Y$ pada proses Cu-Cu hybrid bonding sangat bergantung pada tiga parameter: kualitas permukaan (roughness $R_a$), ko-planaritas, dan suhu/ waktu annealing. Model yield *compound* yang umum digunakan:

$$Y_{total} = Y_{KGD} \cdot Y_{bond} \cdot Y_{TSV}$$

dengan

$$Y_{bond} = \exp\left(-\frac{A_{bond} \cdot D_0 \cdot p_{def}}{\sqrt{N_{connections}}}\right)$$

di mana $A_{bond}$ adalah luas bonding, $D_0$ adalah densitas cacat (defect density per cm²), $p_{def}$ adalah probabilitas cacat per koneksi, dan $N_{connections}$ adalah jumlah koneksi. Untuk pitch 10 μm dengan densitas cacat $D_0 = 0{,}1 \text{ cm}^{-2}$, yield bonding pada area 100 mm² mendekati 99,5%—jauh melampaui *solder bump* pitch 100 μm yang yield-nya turun drastis di bawah 40 μm pitch karena jembatan solder dan *non-wet*.

### 2.3 Model Biaya Total Kepemilikan (TCO) Chiplet vs. Monolitik

Fungsi biaya total untuk arsitektur chiplet:

$$C_{TCO} = \sum_{i=1}^{n}\left(NRE_i + C_{mask,i} + C_{wafer,i} \cdot \frac{A_i}{A_{reticle}}\right) + C_{pkg} + C_{test} + C_{yield,i}(1-Y_i)$$

di mana $n$ adalah jumlah chiplet berbeda, $C_{mask,i}$ adalah biaya masker per node, dan $A_i/A_{reticle}$ adalah jumlah *wafer* per reticle. *Yield* per chiplet dimodelkan dengan distribusi Poisson:

$$Y_i = \left(\frac{1 - e^{-D_0 A_i}}{D_0 A_i}\right)^2$$

Persamaan ini mengkuantifikasi bagaimana *disaggregation* ke chiplet kecil meningkatkan yield (karena $A_i$ turun), namun menambah biaya paket, *test*, dan *assembly*. *Break-even area* $A^*$ di mana biaya chiplet = biaya monolitik dapat dicari secara numerik.

### 2.4 Formulasi Integritas Sinyal untuk Die-to-Die Interface

Untuk *interface* D2D, *eye diagram margin* dievaluasi melalui:

$$SNR_{D2D} = 20 \log_{10}\left(\frac{V_{swing}}{2 \cdot \sigma_{jitter} \cdot \frac{dV}{dt} + V_{noise}}\right)$$

yang menentukan apakah *channel* antara chiplet dapat beroperasi pada laju data target (misal 32 Gbps untuk standar UCIe). Degradasi *jitter* $\sigma_{jitter}$ muncul dari *reflections* pada *through-silicon via* (TSV) dan *interposer*, dimodelkan dengan *S-parameters* dan dihitung via TDR/TDT.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan arsitektur EDA berlapis untuk desain chiplet yang mengikuti alur berikut:

**Tahap 1 — *Specification & Partitioning*:** Definisikan spesifikasi fungsional sistem, lakukan *workload characterization*, dan partisi menjadi chiplet dengan algoritma *min-cut multi-constraint* yang meminimalkan:
$$\min \sum_{i,j} w_{ij} \cdot x_{ij} \quad \text{subject to } \sum_k A_k \leq A_{budget}$$

**Tahap 2 — *Chiplet Implementation*:** Setiap chiplet didesain dengan *tool* standar (Synopsys, Cadence, Siemens EDA), tetapi dengan *constraints* tambahan: posisi *bump array*, *keep-out zone* untuk TSV, dan zona termal.

**Tahap 3 — *Package Co-Design*:** Integrasikan floorplan paket dengan simulasi multi-fisika: termal (ANSYS Icepak/Celsius), struktural (ANSYS Mechanical), elektrik (Sigrity/HSPICE), dan manufaktur (Predictive Process Modeling). SOP ini mengikuti standar IPC-7093 untuk *multi-chip packaging* dan JEDEC JESD51 untuk karakterisasi termal.

**Tahap 4 — *Verification & Sign-off*:** Lakukan verifikasi *die-to-die* (D2D) protokol, *power integrity*, *signal integrity*, dan *thermal-mechanical reliability* (siklus termal -55°C hingga 125°C per JESD22-A104).

**Tahap 5 — *Test & Known-Good-Die*:** Setiap chiplet diuji secara individual (KGD) sebelum *assembly*, dengan *fault coverage* target >95% mengikuti IEEE Std 1500.

Diagram alir proses lengkap mengikuti **V-model chiplet** yang merupakan ekstensi dari V-model klasik ASIC, dengan tambahan *package-aware verification* di setiap level.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain Paket AI Accelerator 2.5D dengan 4 Chiplet pada Interposer Silikon

**Skenario:** Sebuah *AI accelerator* untuk inferensi *edge* memerlukan throughput 100 TOPS (INT8) dengan TDP 75 W. Tim engineering memilih arsitektur 4 chiplet identik (compute die) pada *interposer* silikon 25×25 mm, ditambah 1 chiplet I/O.

**Parameter desain:**

| Parameter | Nilai |
|---|---|
| Ukuran chiplet komputasi | 12×12 mm ($