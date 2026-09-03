# 2955 — Perancangan Chip-Chiplet dan Sirkuit Terintegrasi 3D: Solusi EDA, Integrasi Hibrid Tembaga-Tembaga, dan Rekayasa Sistem Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Bidang Konsentrasi Rancang Bangun Mikroelektronik Lanjutan
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer, Singapura. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma yang sangat mendasar dari arsitektur sistem monolitik monolitik berskala tunggal (*monolithic System-on-Chip*, atau **SoC**) menuju arsitektur **heterogen berbasis chiplet** yang bersifat modular, terukur, dan terdistribusi secara fisik. Pergeseran ini dipicu oleh tiga tekanan industri simultan: (a) melonjaknya biaya litografi di bawah node 5 nm yang menembus ambang USD 200 juta per *mask set*; (b) turunnya *yield* wafer pada area die besar yang mengikuti hukum *defect density* klasik; dan (c) meningkatnya diversifikasi fungsional chip (CPU + GPU + NPU + I/O + memori) yang sulit diakomodasi dalam satu proses fabrikasi homogen. Roze & Gerber (2026) dalam naskah resmi yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menekankan bahwa **Electronic Design Automation (EDA)** bukan lagi sekadar alat bantu gambar skematik dan *place-and-route*, melainkan telah berevolusi menjadi tulang punggung strategis yang mengorkestrasi seluruh rantai nilai mulai dari partisi arsitektural, verifikasi multi-disiplin, fabrikasi, hingga pengemasan dan pengujian *known-good-die* (KGD).

Paralel dengan itu, Lau (2023) dalam bab "*Cu-Cu Hybrid Bonding*" pada monografi *Chiplet Design and Heterogeneous Integration Packaging* yang diterbitkan Springer dengan DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6) memaparkan bahwa teknologi **hybrid bonding** tembaga-tembaga (Cu-Cu) dengan pitch kurang dari 10 µm telah menjadi *enabler* utama untuk integrasi 3D vertikal dengan kepadatan interkoneksi yang melampaui batas solder-bump konvensional. Sinergi antara EDA generasi baru dan proses hybrid bonding Cu-Cu memungkinkan *vertical pitch* turun hingga 3 µm, sehingga jumlah sambungan per mm² menembus orde 10⁵. Konteks industri ini sangat relevan bagi para insinyur teknik industri karena menyentuh keputusan-keputusan strategis: alokasi kapasitas produksi wafer, desain *assembly line* back-end, optimalisasi rantai pasok substrat interposer, dan rekayasa keandalan (*reliability engineering*) untuk siklus termal operasi.

Urgensi ekonominya ditunjukkan oleh proyeksi pasar *heterogeneous integration* yang mencapai USD 96 miliar pada 2030 (Yole Group, 2024), sementara *total cost of ownership* sistem berbasis chiplet untuk aplikasi AI *datacenter* mampu ditekan 35–45% dibanding SoC monolitik setara. Oleh sebab itu, penguasaan metodologi EDA end-to-end dan pemahaman proses hybrid bonding Cu-Cu menjadi kompetensi inti yang wajib dimiliki oleh spesialis teknik industri modern yang bergerak di ranah *back-end semiconductor manufacturing*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Chiplet dan Hukum Skala Ekonomi

Yield suatu sistem multi-chiplet yang tersusun dari $N$ chiplet individual dengan yield masing-masing $Y_i$ mengikuti asumsi **independent failure** (Roze & Gerber, 2026):

$$Y_{system} = \prod_{i=1}^{N} Y_i$$

Untuk chiplet homogen berukuran identik dengan yield dasar $Y_0$ dan luas area efektif $A$, yield mengikuti model Poisson:

$$Y = e^{-D_0 \cdot A}$$

dengan $D_0$ adalah *defect density* (cacat/cm²). Keunggulan chiplet muncul ketika area monolitik besar $A_{mono}$ dipartisi menjadi $N$ chiplet kecil dengan total area $\sum A_i + A_{interposer}$. Jika partisi optimal menghasilkan $\sum A_i \approx A_{mono}/k$ dengan faktor partisi $k > 1$, maka yield sistem naik signifikan.

### 2.2 Model Termal 3D-IC

Untuk tumpukan 3D dengan $n$ die, resistansi termal vertikal total mengikuti deret resistansi konduksi (Lau, 2023):

$$R_{th,total} = \sum_{j=1}^{n} \frac{t_j}{k_j \cdot A_{eff}}$$

dengan $t_j$ adalah tebal die ke-$j$, $k_j$ konduktivitas termal material, dan $A_{eff}$ area efektif jalur panas. Hybrid bonding Cu-Cu menggantikan *thermal interface material* (TIM) konvensional sehingga:

$$R_{th,bond} = \frac{t_{Cu}}{k_{Cu} \cdot A_{pad}} \approx \frac{3 \times 10^{-6}}{401 \cdot A_{pad}}$$

Pitch mikro pada hybrid bonding menghasilkan area sambungan $A_{pad}$ yang jauh lebih besar dibanding solder ball, menurunkan resistansi termal hingga 60%.

### 2.3 Model Integritas Sinyal Saluran TSV

Kecepatan propagasi dan atenuasi sinyal melalui *Through-Silicon Via* (TSV) dimodelkan sebagai saluran transmisi terdistribusi:

$$Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}}$$

$$ \gamma = \alpha + j\beta = \sqrt{(R + j\omega L)(G + j\omega C)}$$

Roze & Gerber (2026) menekankan bahwa meningkatnya jumlah TSV (orde 10⁴ per chip) menuntut simulasi elektromagnetik 3D penuh, dengan parameter $R$ yang dipengaruhi efek *current crowding* pada interface Cu-Si.

### 2.4 Model Keandalan Sambungan Hybrid Bonding

Kekuatan tarik geser sambungan Cu-Cu selama siklus termal mengikuti persamaan Coffin-Manson termodifikasi (Lau, 2023):

$$N_f = C \cdot (\Delta\varepsilon_{pl})^{-m} \cdot e^{\frac{E_a}{k_B T}}$$

dengan $\Delta\varepsilon_{pl}$ regangan plastik inkremental, $E_a$ energi aktivasi, dan $T$ suhu siklus. Sambungan hybrid Cu-Cu memiliki $N_f > 10.000$ siklus pada rentang $-55^{\circ}\text{C}$ hingga $125^{\circ}\text{C}$.

### 2.5 Fungsi Biaya Heterogen

*Total cost* sistem chiplet dimodelkan sebagai:

$$C_{total} = \sum_{i=1}^{N}\left( C_{wafer,i} \cdot \frac{1}{Y_i} + C_{pkg,i} \right) + C_{interposer} + C_{test} + C_{integration}$$

Roze & Gerber (2026) membuktikan bahwa turunan parsial $\partial C_{total}/\partial N$ memiliki titik optimum pada $N^*$ yang menyeimbangkan peningkatan yield dan biaya integrasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze & Gerber (2026) bersama Lau (2023) menyusun kerangka SOP EDA-to-Packaging yang diuraikan sebagai berikut:

### Tahap 1: Partisi Arsitektural & Floorplanning
1. Definisikan *use case* dan anggaran termal/daya.
2. Partisi IP block menjadi chiplet berdasarkan *process node* optimal per blok.
3. Tentukan jumlah TSV dan *micro-bump* dengan target impedansi terkontrol $Z_0 = 50\,\Omega$.

### Tahap 2: Co-Design Multi-Disiplin
Diagram alir implementasi mengikuti loop iteratif:

$$\text{Logic Design} \leftrightarrow \text{Thermal Sim.} \leftrightarrow \text{SI/PI Sim.} \leftrightarrow \text{DFM}$$

Alat EDA modern (seperti yang diuraikan Roze & Gerber 2026) mengintegrasikan modul simulasi termal, integritas sinyal, dan *power integrity* dalam satu *common database*.

### Tahap 3: Validasi Layout 3D
- Verifikasi *Design Rule Check* (DRC) lintas-die.
- *Layout Versus Schematic* (LVS) multi-domain.
- *Antenna check* dan *ESD protection* pada TSV.

### Tahap 4: Fabrikasi Wafer & Hybrid Bonding
1. **Surface preparation**: chemical-mechanical polishing (CMP) dengan *dishing* < 5 nm.
2. **Cu pad deposition**: damascene process menghasilkan Cu recess terkontrol 1–5 nm.
3. **Bonding**: thermo-compression pada suhu 250–400°C, tekanan 50–150 MPa, durasi 30–600 detik (Lau, 2023).
4. **Anneal**: post-bond anneal pada 200–300°C selama 60 menit untuk difusi Cu-Cu dan rekristalisasi.

### Tahap 5: Test, Assembly, & Reliability Qualification
- *Known-Good-Die* (KGD) test pada tingkat wafer.
- Stack assembly dengan kontrol misalignment ±0.5 µm.
- Uji keandalan sesuai standar **JEDEC JESD22** (TC, HTSL, HTS, uHAST).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain AI Accelerator 2.5D untuk Datacenter

**Spesifikasi awal** (typ. dari Roze & Gerber 2026):
- SoC target monolitik: area $A_{mono} = 600\,\text{mm}^2$, node 5 nm
- Partisi: $N = 6$ chiplet, masing-masing $A_i = 95\,\text{mm}^2$
- Defect density: $D_0 = 0.05\,\text{cm}^{-2}$
- Konduktivitas termal: $k_{Si} = 150\,\text{W/mK}$, $k_{Cu} = 401\,\text{W/mK}$

**Langkah 1: Hitung yield monolitik**
$$Y_{mono} = e^{-0.05 \times 6.00} = e^{-0.30} = 0.7408 \approx 74.1\%$$

**Langkah 2: Hitung yield per chiplet**
$$Y_{chiplet} = e^{-0.05 \times 0.95} = e^{-0.0475} = 0.9536 \approx 95.4\%$$

**Langkah 3: Hitung yield sistem multi-chiplet**
$$Y_{sys} = (0.9536)^6 = 0.7497 \approx 75.0\%$$

**Interpretasi awal**: Yield sistem dan monolitik hampir setara, namun biaya wafer turun drastis karena setiap chiplet dicetak pada node optimalnya: chiplet logika inti 5 nm, chiplet I/O 12 nm, chiplet memori 7 nm.

**Langkah 4: Resistansi termal TSV bundle**
Misalkan 10.000 TSV per chiplet, diameter $d = 5\,\mu\text{m}$, tinggi $h = 50\,\mu\text{m}$. Area Cu efektif:

$$A_{Cu} = N_{TSV} \cdot \frac{\pi d^2}{4} = 10^4 \times \frac{\pi \times (5\times10^{-6})^2}{4} = 1.963\times10^{-7}\,\text{m}^2$$

Resistansi termal satu TSV:
$$R_{th,TSV} = \frac{h}{k_{Cu} \cdot A_{TSV}} = \frac{50\times10^{-6}}{401 \times 1.963\times10^{-11}} = 6.35\,\text{K/W}$$

Untuk 10.000 TSV paralel:
$$R_{th,parallel} = \frac{6.35}{10^4} = 6.35\times10^{-4}\,\text{K/W}$$

**Langkah 5: Resistansi hybrid bond Cu-Cu**
Tebal sambungan Cu-Cu efektif $t = 3\,\mu\text{m}$, area pad $A_{pad} = 10 \times 10\,\mu\text{m}^2 = 1\times10^{-7}\,\text{m}^2$. Jika terdapat $M = 20.000$ sambungan paralel:

$$R_{th,bond} = \frac{t}{k_{Cu} \cdot M \cdot A_{pad}} = \frac{3\times10^{-6}}{401 \times 2\times10^4 \times 1\times10^{-7}} = 3.74\times10^{-6}\,\text{K/W}$$

**Langkah 6: Tegangan termal dan umur fatigue**
Untuk $\Delta T = 100\,\text{K}$, koefisien ekspansi termal efektif $\alpha_{eff} = 5\times10^{-6}/\text{K}$, panjang karakteristik $L = 10\,\text{mm}$:

$$\Delta\varepsilon_{pl} = (\alpha_{eff} \cdot \Delta T)^2 \cdot \frac{L}{h} = (5