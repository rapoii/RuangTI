# 2651 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Lintas Disiplin dalam Rantai Pasok Semikonduktor Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik yang fundamental — pergeseran dari arsitektur *System-on-Chip* (SoC) monolitik menuju paradigma **heterogeneous integration (HI)** berbasis *chiplet* dan penumpukan tiga dimensi (*3D-IC*). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: (1) biaya *mask set* pada node先進 (*advanced node*) 3 nm dan 2 nm yang melonjak melampaui USD 500 juta per desain (Roze & Gerber, 2026); (2) perlambatan *Moore's Law* pada dimensi planar yang memaksa eksploitasi dimensi vertikal; serta (3) kebutuhan akan *time-to-market* yang lebih singkat dengan tetap mempertahankan efisiensi energi dan *throughput* komputasi (Lau, 2023).

Roze dan Gerber (2026) dalam paparannya di *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa desain chiplet tidak lagi dapat dituntaskan dengan *tool* EDA (*Electronic Design Automation*) warisan yang dirancang untuk SoC planar. Kompleksitas baru muncul berupa: perencanaan *through-silicon via* (TSV), *floorplan* tiga dimensi yang harus mempertimbangkan gradien termal, verifikasi *bump* pitch pada skala <10 µm, dan validasi protokol *die-to-die interconnect* seperti UCIe (Universal Chiplet Interconnect Express). Tanpa dukungan EDA holistik yang meng-*couple* domain listrik, termal, mekanis, dan manufacturability, *yield* produksi anjlok secara eksponensial seiring bertambahnya jumlah *die* dalam tumpukan (Roze & Gerber, 2026).

Secara ekonomis, adopsi chiplet menurunkan biaya *non-recurring engineering* (NRE) melalui *die reuse*, memungkinkan pabrikan kecil-menengah memasuki pasar tanpa investasi *fab* miliaran dolar. Namun, keberhasilan ekonomi ini sangat bergantung pada kualitas orkestrasi EDA yang mengintegrasikan *foundry process design kit* (PDK), pustaka *intellectual property* (IP) chiplet, dan aturan *assembly* lintas-pemasok. Lau (2023) dalam bab *Cu-Cu Hybrid Bonding*-nya menyoroti bahwa *hybrid bonding* tembaga-tembaga — dengan *pitch* yang telah turun ke 3 µm — memerlukan toleransi alignment sub-mikron yang hanya bisa dijamin melalui *co-design* elektro-mekanis-termal sejak tahap arsitektural. Artikel ini, dengan demikian, memposisikan solusi EDA sebagai **infrastruktur kritis** bagi keberlanjutan rantai pasok semikonduktor abad ke-21, di mana keputusan rekayasa di tingkat *layout* memiliki dampak langsung pada profitabilitas lini produksi, keandalan produk, dan kemampuan penskalaan lintas sektor (telekomunikasi, otomotif, komputasi awan, dan AI *edge*).

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka kuantitatif untuk desain chiplet dan 3D-IC memerlukan beberapa model dasar yang digunakan oleh *tool* EDA modern sebagaimana dirujuk oleh Roze dan Gerber (2026) serta Lau (2023).

### 2.1 Model Yield Komposit untuk Tumpukan Chiplet

Untuk tumpukan $N$ *die* yang di-*bond* menggunakan *hybrid bonding*, *yield* sistem $Y_{\text{system}}$ dapat dimodelkan sebagai hasil kali *yield* individual *die* dan *yield* proses *bonding*:

$$Y_{\text{system}} = \left(\prod_{i=1}^{N} Y_i\right) \cdot Y_{\text{bond}}^{N-1}$$

dengan $Y_i$ adalah *yield* fabrikasi *die* ke-$i$, dan $Y_{\text{bond}}$ adalah probabilitas keberhasilan satu antarmuka *hybrid bonding*. Untuk tumpukan 4 chiplet identik dengan $Y_i = 0{,}90$ dan $Y_{\text{bond}} = 0{,}98$, maka:

$$Y_{\text{system}} = (0{,}90)^4 \cdot (0{,}98)^3 \approx 0{,}656 \cdot 0{,}942 \approx 0{,}618$$

Model ini menjelaskan mengapa desain yang hanya mengandalkan *yield* individual tanpa optimasi proses *bonding* akan kehilangan ~38% kapasitas produksi.

### 2.2 Model Termal Resistansi Jaringan untuk 3D-IC

Gradien termal pada tumpukan 3D-IC dimodelkan melalui **resistansi termal ekivalen** dari setiap lapisan:

$$R_{\text{th,total}} = \sum_{j=1}^{M} \frac{t_j}{k_j \cdot A_j}$$

dengan $t_j$, $k_j$, dan $A_j$ berturut-turut adalah tebal, konduktivitas termal, dan luas penampang efektif lapisan ke-$j$ (silikon aktif, *underfill*, *bump* Cu, *adhesive* die-to-wafer). Roze dan Gerber (2026) menekankan bahwa tanpa *thermal-aware floorplanning* — misalnya penempatan *logic die* di atas *memory die* dengan kepadatan daya rendah — suhu *junction* dapat melebihi $T_j = 105\,°\text{C}$ yang menjadi batas operasional standar JEDEC.

### 2.3 Model Throughput dan Biaya Total Kepemilikan (TCO)

Total biaya kepemilikan untuk satu paket chiplet, menurut kerangka yang dirujuk Lau (2023), dapat diformulasikan:

$$\text{TCO} = C_{\text{NRE}} + \sum_{i=1}^{N} \left(\frac{C_{\text{wafer},i}}{\text{DPW}_i \cdot Y_i}\right) + N \cdot C_{\text{bond}} + C_{\text{test}} + C_{\text{pkg}}$$

dengan $\text{DPW}_i$ adalah *dies-per-wafer* untuk chiplet ke-$i$, dan $C_{\text{bond}}$ adalah biaya per operasi *hybrid bonding*. Model ini memungkinkan analis Teknik Industri melakukan *trade-off analysis* antara jumlah chiplet, ukuran masing-masing, dan biaya integrasi.

### 2.4 Toleransi Alignment Hybrid Bonding

Lau (2023) menurunkan hubungan antara *bonding pitch* $p$ dan toleransi alignment $\sigma_{\text{align}}$ yang dapat diterima:

$$\sigma_{\text{align}} \le \frac{p}{6} - \text{CTE}_{\text{mismatch}} \cdot \Delta T \cdot L_{\text{die}}$$

dengan $\text{CTE}_{\text{mismatch}}$ adalah selisih koefisien ekspansi termal efektif antara wafer atas dan bawah, $\Delta T$ selisih suhu *bonding* terhadap suhu ruang, dan $L_{\text{die}}$ dimensi lateral *die*. Pada pitch $p = 10\,\mu\text{m}$ dengan $\text{CTE}_{\text{mismatch}} = 2\,\text{ppm/K}$, $\Delta T = 200\,\text{K}$, dan $L_{\text{die}} = 10\,\text{mm}$, kontribusi deformasi termal mencapai $\approx 0{,}04\,\mu\text{m}$, sehingga *tool* EDA harus mengintegrasikan simulasi *thermomechanical* secara *native*.

### 2.5 Metrik Kinerja Antarmuka Die-to-Die

*Bandwidth density* $B_{\rho}$ dan *energy-per-bit* $E_b$ digunakan untuk membandingkan standar interkoneksi:

$$B_{\rho} = \frac{f_{\text{clk}} \cdot N_{\text{lane}} \cdot W_{\text{bus}}}{A_{\text{interface}}}, \quad E_b = \frac{P_{\text{link}}}{f_{\text{clk}} \cdot N_{\text{lane}} \cdot W_{\text{bus}}}$$

Variabel-variabel ini menjadi *figure-of-merit* utama yang dipakai *tool* seperti Synopsys 3DIC Compiler dan Cadence Integrity 3D-IC yang dibahas Roze dan Gerber (2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi desain chiplet dan 3D-IC mengikuti alur EDA berlapis yang harus disiplin SOP-nya untuk menjamin *first-pass silicon success*. Berdasarkan Roze dan Gerber (2026) serta kerangka referensi Lau (2023), prosedur operasional standar dapat diuraikan sebagai berikut:

### 3.1 Tahap 1 — Partisi Sistem dan Penentuan *Chiplets*
Langkah pertama adalah **system-level partitioning**, di mana arsitek memutuskan fungsi mana yang menjadi *chiplet* terpisah (misalnya CPU core, I/O controller, HBM memory, NPU) dan mana yang tetap monolitik. Keputusan ini di-*drive* oleh metrik TCO dan *yield* model pada Persamaan (1). EDA *tool* modern menyediakan mode eksplorasi *what-if* yang menghitung sensitivitas biaya terhadap variasi jumlah *chiplet*.

### 3.2 Tahap 2 — *Floorplanning* 3D dan Penempatan TSV
Pada tahap ini, dilakukan **3D floorplanning** dengan masukan peta daya (*power map*) setiap *die*. Algoritma optimasi bertujuan meminimalkan $R_{\text{th,total}}$ sambil mempertahankan panjang *signal trace* minimum. *Through-silicon via* (TSV) ditempatkan mengikuti aturan: diameter $d_{\text{TSV}} \ge 5\,\mu\text{m}$, *keep-out zone* $\ge 2d_{\text{TSV}}$ dari *active device*, dan *array pitch* yang kompatibel dengan *bump* *hybrid bonding* di atasnya.

### 3.3 Tahap 3 — Implementasi Antarmuka *Die-to-Die*
Pustaka IP *die-to-die* (UCIe, BoW, atau AIB) di-*instantiate* pada setiap *chiplet*, dengan parameter sesuai Persamaan (5). *Tool* EDA melakukan *routing* lintasan sinyal dan daya secara *cross-die*, sekaligus menyimulasikan *signal integrity* (crosstalk, insertion loss) dan *power integrity* (IR drop) pada tumpukan.

### 3.4 Tahap 4 — Simulasi Termal dan Termo-Mekanis
Menggunakan model resistansi termal jaringan (Persamaan 2), *tool* melakukan *steady-state* dan *transient* thermal analysis. Untuk deformasi *wafer* selama *bonding*, digunakan Persamaan (4) sebagai batas desain. Lau (2023) menekankan bahwa iterasi antara layout dan simulasi termal harus dilakukan minimal 3–5 kali untuk konvergensi.

### 3.5 Tahap 5 — Verifikasi, *Sign-off*, dan *Test Strategy*
Tahap akhir memverifikasi: *Design Rule Check* (DRC) lintas proses, *Layout Versus Schematic* (LVS), *Electrical Rule Check* (ERC), dan *thermal sign-off*. Strategi *test* mencakup *known-good-die* (KGD) sebelum *bonding* dan *post-bond test* dengan *boundary scan* melalui antarmuka *die-to-die*.

**Diagram alir proses:**

```
[System Partition] → [3D Floorplan + TSV] → [Die-to-Die IP Integration]
        ↓                                              ↓
   [Cost/Yield Trade-off]