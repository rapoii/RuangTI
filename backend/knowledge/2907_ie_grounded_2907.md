# 2907 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding Cu-Cu, dan Alur Kerja Rekayasa Sistem Elektronik Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki era pasca-*Moore's Law* di mana penskalaan node planar tunggal sudah mendekati batas fisika, ekonomi, dan manufaktur. Biaya fabrikasi *wafer* pada node 3 nm dan 2 nm telah melonjak melampaui USD 20 miliar per *fab*, sehingga tidak lagi rasional untuk memadatkan seluruh fungsi sistem ke dalam satu *monolithic die*. Sebagai respons strategis, paradigma *heterogeneous integration* (HI) melalui arsitektur *chiplet* dan *three-dimensional integrated circuit* (3D-IC) muncul sebagai solusi dominan. Roze dan Gerber (2026), dalam makalah yang dipublikasikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563), menegaskan bahwa *Electronic Design Automation* (EDA) modern harus berevolusi dari paradigma 2D-tradisional menjadi kerangka kerja multi-disiplin yang mampu menangani partisi sistem, fabrikasi *interposer*, *stacking*, dan verifikasi lintas-domain secara simultan.

Konteks industri menunjukkan urgensi yang nyata: pasar *chiplet* global diproyeksikan tumbuh dari USD 6,5 miliar (2023) menjadi lebih dari USD 145 miliar pada 2033 (CAGR ~36%), didorong oleh adopsi pada *data center accelerator*, *AI training chips*, *automotive SoC*, dan perangkat *edge AI* berdaya rendah. Namun, transisi ini menghadapi empat bottleneck utama: (1) fragmentasi *toolchain* EDA yang tidak memiliki antarmuka universal antar-vendor; (2) kompleksitas verifikasi termal-mekanis-listrik pada tumpukan 3D; (3) kurangnya *Design-for-Test* (DFT) yang kompatibel dengan *Known-Good-Die* (KGD) pasca-bonding; dan (4) belum matangnya standar *interconnect*—sudah di antaranya *Universal Chiplet Interconnect Express* (UCIe) dan *Bunch of Wires* (BoW). Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menekankan bahwa tanpa integrasi EDA-to-packaging yang mulus, *time-to-yield* dan *time-to-market* tidak akan mampu mengikuti siklus permintaan industri. Kedua literatur ini saling melengkapi: Roze & Gerber membahas sisi *tool* dan alur kerja digital, sedangkan Lau membahas proses fisik *Cu-Cu hybrid bonding* yang menjadi tulang punggung koneksi antarketul. Dalam kerangka Teknik Industri, topik ini menjembatani tiga pilar: optimasi proses manufaktur, keandalan sistem, dan efisiensi rantai pasok semikonduktor.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resistansi Termal Tumpukan 3D-IC

Pada arsitektur 3D-IC dengan $n$ lapis *die* yang dihubungkan oleh *hybrid bonding* Cu-Cu, total resistansi termal dari sumber panas (*hotspot*) ke *heat sink* dimodelkan sebagai jaringan seri-resistor satu dimensi:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff,i}} + R_{TIM} + R_{spreader}$$

dengan $t_i$ adalah ketebalan lapisan ke-$i$ (m), $k_i$ konduktivitas termal material (W/m·K), dan $A_{eff,i}$ luas efektif aliran panas. Untuk *bond layer* Cu-Cu dengan luas bantalan $A_{b}$, resistansi kontaknya dapat dinyatakan sebagai:

$$R_{bond} = \frac{1}{A_b} \cdot \sqrt{\frac{\rho_{Cu}}{k_{Cu} \cdot C_{TSV}}}$$

dengan $\rho_{Cu} = 1,68 \times 10^{-8}\,\Omega\cdot$m, $k_{Cu} = 401\,\text{W/m·K}$, dan $C_{TSV}$ kapasitansi *through-silicon via* per sambungan.

### 2.2 Penundaan RC pada Interkoneksi Chiplet

Untuk *interconnect* pendek antarketul pada *pitch* $p$, penundaan propagasi sinyal didekati dengan model RC terdistribusi:

$$\tau_{RC} = 0{,}35 \cdot R_{int} \cdot C_{int}, \quad R_{int} = \frac{\rho \cdot L}{w \cdot t}, \quad C_{int} = \varepsilon_0 \varepsilon_r \frac{w \cdot L}{d}$$

dengan $L$ panjang lintasan, $w$ lebar, $t$ tebal, $d$ jarak ke *ground plane*, $\rho$ resistivitas, dan $\varepsilon_r$ permitivitas relatif dielektrik. Pada *hybrid bonding* dengan pitch 3 µm, panjang interkoneksi efektif turun drastis sehingga $\tau_{RC}$ berkurang lebih dari 10× dibanding *micro-bump* konvensional (pitch ~25 µm).

### 2.3 Model Akurasi Alignment

Toleransi keselarasan total pada proses bonding mengikuti hukum perambatan kesalahan:

$$\sigma_{total} = \sqrt{\sigma_{tool}^2 + \sigma_{overlay}^2 + \sigma_{thermal}^2 + \sigma_{particle}^2}$$

Kriteria kelayakan sambungan mensyaratkan $3\sigma_{total} \leq 0{,}3 \cdot p$ (aturan $3\sigma$ industri). Untuk $p = 3\,\mu$m maka $\sigma_{total} \leq 0{,}9\,\mu$m.

### 2.4 Model Yield Murphy dan Biaya Integrasi

Yield kumulatif seluruh proses integrasi mengikuti model Murphy:

$$Y_{total} = \prod_{j=1}^{m} Y_j = \prod_{j=1}^{m} \left(\frac{1 - e^{-D_j \cdot A_j}}{D_j \cdot A_j}\right)$$

dengan $D_j$ adalah densitas cacat per cm² pada tahap $j$ (wafer-fab, dicing, bonding, dll.) dan $A_j$ luas area kritis. Biaya total per sistem terkemas:

$$C_{system} = \frac{\sum_{i=1}^{n} (C_{chiplet,i} + C_{assembly,i} + C_{KGD-test,i})}{Y_{total} \cdot Y_{final-test}}$$

Persamaan ini menjadi dasar keputusan rasional antara integrasi internal (*monolithic*) versus eksternal (*multi-die*) dalam manajemen rantai pasok.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA 10-tahap untuk desain chiplet/3D-IC yang menjadi referensi industri:

**Tahap 1 — Spesifikasi Sistem & Partisi:** Definisikan *performance*, *power*, *area* (PPA), antarmuka UCIe/BoW, dan lakukan partisi logika-fisik berbasis *thermal-aware floorplanning*. Keluaran: *chiplet manifest* (IP block, target node, target proses bonding).

**Tahap 2 — Co-Design & RTL Partitioning:** Setiap *chiplet* dirancang dengan *toolchain* node-optimal (mis. *logic die* 3 nm + *memory die* 18 nm + *I/O die* 65 nm). Gunakan *High-Level Synthesis* (HLS) dan *logic synthesis* dengan kendala *die-to-die timing budget*.

**Tahap 3 — Physical Implementation per Chiplet:** Tempatkan & rute (*place-and-route*) setiap *die* secara independen dengan约束 I/O sesuai protokol UCIe (jalur *sideband*, *mainband*, *valid*, *clock*).

**Tahap 4 — Assembly & Package Co-Design:** Integrasikan seluruh *chiplet* ke dalam *substrate* atau *interposer* Si. Lakukan *signal integrity* (SI) dan *power integrity* (PI) analisis pada jalur *die-to-die* termasuk *microstrip*, *stripline*, dan *TSV*.

**Tahap 5 — Thermal-Mechanical Co-Simulation:** Lakukan simulasi coupled *finite element analysis* (FEA) untuk memvalidasi $R_{th,total} < R_{th,target}$ dan tekanan termo-mekanis $\sigma_{vonMises} < \sigma_{yield,Cu}$. Lau (2023) menegaskan bahwa profil suhu annealing 200–400 °C pada Cu-Cu bonding menentukan *stress* residu yang harus diminimisasi.

**Tahap 6 — Design-for-Test (DFT):** Terapkan *Built-In Self-Test* (BIST) per chiplet, *boundary scan* (IEEE 1687), dan *test access mechanism* (TAM) sesuai standar IEEE 1838 untuk *stacked die*.

**Tahap 7 — Manufacturing Hand-off & Sign-off:** Validasi DRC, LVS, DFM, dan *bonding-rule check* (BRC). Aturan ini mencakup *copper recess* 200–500 nm, *dishing* <50 nm, dan *underfill* clearance.

**Tahap 8 — Wafer Preparation:** Deposisi *Cu pad*, *chemical-mechanical polishing* (CMP) untuk mencapai *Ra* <0,5 nm dan *dishing* <15 nm, *surface activation* plasma N₂/H₂.

**Tahap 9 — Hybrid Bonding Cu-Cu:** Proses *thermocompression bonding* pada suhu $T_{bond} = 300\text{–}400\,°\text{C}$, tekanan $P_{bond} = 50\text{–}150\,\text{MPa}$, selama $t_{bond} = 30\text{–}120$ menit, dalam atmosfer inert (N₂, <10 ppm O₂). Lau (2023) menunjukkan bahwa $E_{bond} = P \cdot A_{b} \cdot t_{bond}$ harus cukup untuk memicu difusi interfacial Cu-Cu namun tidak menyebabkan *die cracking*.

**Tahap 10 — Test, Burn-in & Reliability:** Lakukan *Known-Good-Die* (KGD) test pra-bonding, *post-bonding* interkoneksi test, dan *burn-in* 168 jam pada 125 °C sesuai standar JEDEC JESD22-A104.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: *AI Accelerator* 4-Chiplet pada Interposer Si

Sebuah perusahaan *fabless* merancang *AI accelerator* dengan konfigurasi: 2× *logic chiplet* (5 nm, area 100 mm², target freq 2,5 GHz), 1× *HBM3 memory stack* (area 70 mm²), 1× *I/O chiplet* (area 30 mm²). Target termal sistem: junction temperature $T_j < 85\,°\text{C}$ pada $P = 150\,\text{W}$.

**Langkah 1 — Resistansi termal.** Asumsikan setiap *die* tebal $t = 750\,\mu\text{m}$, $k