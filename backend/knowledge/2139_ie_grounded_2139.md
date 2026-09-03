# 2139 — EDA Solution untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang berada di titik infleksi fundamental. Setelah beberapa dekade mengandalkan strategi penskalaan planar (planar scaling) mengikuti Hukum Moore, biaya fabrikasi node先进技术 (advanced node) di bawah 5 nm melonjak secara eksponensial — kapitalisasi satu fabrikasi先进逻辑 (advanced logic) seperti TSMC N3 melampaui US$20 miliar per fasilitas. Dalam konteks inilah paradigma *chiplet* dan *3D-IC* menjadi strategi arsitektural yang tidak terelakkan. Roze dan Gerber (2026) dalam paparannya di *ICEP-HBS 2026* mengargumentasikan bahwa desain chiplet menuntut Electronic Design Automation (EDA) baru yang mampu menjembatani gap antara fabrikasi wafer-level dan packaging-level, karena proses verifikasi, floorplanning, dan sign-off yang sebelumnya terpisah kini harus dilakukan secara koheren dalam satu rantai alat [DOI: 10.23919/icep-hbs69241.2026.11550563].

Urgensi operasionalnya bersifat trifecta. Pertama, secara ekonomi, pasar chiplet diproyeksikan mencapai US$47 miliar pada 2028 (Yole Group), didorong oleh hyperscaler seperti AMD, Intel, dan NVIDIA yang mengadopsi arsitektur multi-die untuk produk data center. Kedua, secara teknis, integrasi heterogen mensyaratkan Electrical-thermal-mechanical co-design yang tidak dapat diselesaikan oleh tool EDA konvensional. Roze & Gerber menekankan bahwa EDA Solution modern harus menyediakan unified database yang mampu memodelkan inter-koneksi hybrid bonding — area yang sebelumnya menjadi domain eksklusif pakar packaging — ke dalam flow RTL-to-GDSII [DOI: 10.23919/icep-hbs69241.2026.11550563]. Ketiga, secara rantai pasok, pendekatan chiplet memungkinkan *yield recovery* yang signifikan: dengan mempartisi die monolitik 600 mm² menjadi empat chiplet 150 mm², yield dapat meningkat dari sekitar 35% menjadi lebih dari 85% per die, mengubah total biaya fabrikasi secara fundamental.

Lau (2023) melengkapi narasi ini dari perspektif proses, dengan menguraikan bahwa hybrid bonding Cu-Cu adalah teknologi *enabler* utama. Berbeda dengan micro-bump soldering tradisional yang memiliki pitch minimum ~40 µm dan memerlukan underfill, hybrid bonding Cu-Cu dapat mencapai pitch sub-10 µm dengan resistansi kontak mendekati nol [DOI: 10.1007/978-981-19-9917-8_6]. Kepadatan inter-koneksi ini — yang diukur dalam *bond pad per mm²* — meningkat lebih dari satu order of magnitude, yang secara langsung mendukung bandwidth memory yang dibutuhkan oleh workload AI/HPC modern. Tanpa EDA tool yang mampu mengorkestrasikan kompleksitas ini — verifikasi DRC/LVS multi-die, thermal-aware floorplanning, dan sign-off power integrity — desain chiplet tidak akan feasible secara industrial. Inilah celah strategis yang menjadi justifikasi pengembangan EDA Solution yang dibahas oleh Roze dan Gerber (2026).

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis desain chiplet dan 3D-IC memerlukan beberapa model fundamental yang saling terkait. Kami menyusunnya sebagai berikut.

### 2.1 Model Yield Multi-Die dan Recovery Biaya

Untuk sistem yang terdiri dari $N$ chiplet dengan area masing-masing $A_i$ dan defect density proses $D$ (cacat/cm²), yield individual chiplet mengikuti model Poisson:

$$Y_i = e^{-D \cdot A_i}$$

Yield keseluruhan sistem $Y_{system}$ dengan asumsi chiplet beroperasi independen (tidak ada redundancy) adalah:

$$Y_{system} = \prod_{i=1}^{N} Y_i = e^{-D \sum_{i=1}^{N} A_i}$$

Namun, ketika desain menggunakan redundansi (misalnya $k$-out-of-$n$ chiplet aktif dengan cadangan), yield menjadi:

$$Y_{system} = \sum_{j=k}^{N} \binom{N}{j} Y^j (1-Y)^{N-j}$$

di mana $Y$ adalah yield rata-rata per chiplet. Model ini menjadi dasar keputusan partisi die dalam EDA tool modern [Roze & Gerber, 2026].

### 2.2 Resistansi Koneksi Hybrid Bonding Cu-Cu

Lau (2023) menurunkan persamaan resistansi kontak untuk hybrid bonding Cu-Cu. Untuk satu bump dengan area $A_b$, tinggi $h$, dan resistivitas tembaga $\rho_{Cu} \approx 1.68 \times 10^{-8}\ \Omega\cdot\text{m}$:

$$R_{contact} = \frac{\rho_{Cu} \cdot h}{A_b} + R_{interface}$$

di mana $R_{interface}$ adalah resistansi termal-elektrik pada界面 Cu-Cu hasil difusi. Untuk hybrid bonding yang berhasil, Lau melaporkan $R_{interface} \approx 0.5\ \text{m}\Omega$ per sambungan pada pitch 10 µm dengan diameter pad 5 µm, jauh lebih rendah dibanding solder joint Sn-Ag-Cu pada micro-bump 40 µm yang memiliki $R \approx 15{-}20\ \text{m}\Omega$ [DOI: 10.1007/978-981-19-9917-8_6].

### 2.3 Model Termal 3D-IC

Distribusi termal pada stack 3D dimodelkan dengan persamaan konduksi panas steady-state:

$$\nabla \cdot (k(x,y,z) \nabla T(x,y,z)) + q'''(x,y,z) = 0$$

dengan kondisi batas konveksi pada permukaan atas: $-k \frac{\partial T}{\partial z}\bigg|_{top} = h_c(T_s - T_\infty)$, di mana $h_c$ adalah koefisien konveksi, $T_s$ suhu permukaan, $T_\infty$ suhu ambient. Resistansi termal total stack dengan $n$ layer die dan $m$ lapisan TIM (Thermal Interface Material):

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i A_i} + \sum_{j=1}^{m} R_{TIM,j}$$

Roze dan Gerber (2026) menekankan bahwa integrasi tool thermal-aware ke dalam EDA flow memerlukan pemecahan PD ini secara coupled dengan power map dari simulasi dinamis.

### 2.4 Kapasitansi Parazit dan Integritas Sinyal

Untuk inter-koneksi hybrid bonding dengan panjang $l$, lebar $w$, jarak $s$, dan tinggi terhadap ground plane $h$:

$$C_{parasitic} = \varepsilon_0 \varepsilon_r \frac{w \cdot l}{h} \quad \text{(plate)} + C_{fringe}$$

Impedansi karakteristik saluran transmisi:

$$Z_0 = \sqrt{\frac{L}{C}} = \frac{1}{c \cdot C}$$

di mana $c$ adalah kecepatan cahaya dalam medium. Untuk menjaga integritas sinyal pada frekuensi Nyquist $f_{Nyq}$ dengan rise time $t_r = 0.35/f_{Nyq}$, panjang kritis inter-koneksi dibatasi oleh:

$$l_{max} = \frac{t_r}{2 \cdot t_{pd}}$$

dengan $t_{pd}$ sebagai propagation delay per satuan panjang.

### 2.5 Fungsi Objektif Optimasi Floorplan

EDA tool modern menyelesaikan masalah multi-objective untuk partisi chiplet dan placement:

$$\min_{x_i, y_i, \theta_i} \left[ \alpha \cdot T_{max} + \beta \cdot P_{total} + \gamma \cdot A_{total} + \delta \cdot L_{wire} \right]$$

di mana $T_{max}$ adalah suhu maksimum die, $P_{total}$ disipasi daya, $A_{total}$ area interposer, $L_{wire}$ total panjang wire, dan $\alpha, \beta, \gamma, \delta$ adalah bobot kepentingan. Constraint hard-nya mencakup: $\sum A_i \leq A_{interposer}$, $T_{max} \leq T_{junction,limit}$, dan timing closure pada semua path kritis [Roze & Gerber, 2026].

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi desain chiplet dan 3D-IC di industri mengikuti alur metodologis yang distandardisasi sebagai berikut, mengikuti arsitektur EDA yang diuraikan Roze dan Gerber (2026) dengan referensi silang ke rekomendasi proses Lau (2023):

### Tahap 1: System-Level Architectural Partitioning
1. **Dekomposisi fungsional**: Identifikasi blok IP yang akan diisolasi sebagai chiplet independen, mempertimbangkan *technology affinity* (logic vs. memory vs. analog), target yield, dan reusability.
2. **Analisis antarmuka**: Tentukan protokol inter-chiplet (misalnya UCIe, BoW, OpenHBI) dengan target bandwidth per lane dan latensi.
3. **Trade-space exploration**: Gunakan platform seperti Siemens EDA Tessent, Synopsys 3DIC Compiler, atau Cadence Integrity 3D-IC untuk mengeksplorasi konfigurasi partisi.

### Tahap 2: Multi-Die Floorplanning
1. **Initial placement** berbasis thermal-aware optimization menggunakan algoritma simulated annealing atau reinforcement learning.
2. **IO assignment** — penempatan *bump* hybrid bonding pada pitch target (umumnya 3–10 µm untuk high-density).
3. **Power delivery network (PDN) co-design** dengan mensimulasikan IR-drop pada stack.

### Tahap 3: Implementasi Fisik per Chiplet
1. **RTL-to-GDSII** untuk masing-masing die menggunakan PDK masing-masing foundry (TSMC, Samsung, Intel Foundry).
2. **TSV (Through-Silicon Via) insertion** dengan aturan keep-out zone dari active devices.
3. **Backside power delivery network (BSPDN)** untuk node N2 dan di bawahnya.

### Tahap 4: Hybrid Bonding Process Flow (menurut Lau, 2023)
1. **Wafer preparation**: deposition Cu pad dengan profil dish/recess optimal (kedalaman recess ~50–100 nm).
2. **Surface activation**: plasma treatment N₂/H₂ untuk menghilangkan oksida dan meningkatkan difusi.
3. **Bonding alignment**: presisi ≤ 200 nm menggunakan alat seperti EVG Gemini FB.
4. **Thermo-compression bonding**: suhu 300–400°C, tekanan 100–200 MPa, durasi 30–60 menit.
5. **Post-bond anneal**: untuk homogenisasi界面 dan menurunkan resistansi kontak.

### Tahap 5: Sign-off Multi-Fisik Terintegrasi
- **DRC/LVS multi-die**: verifikasi terhadap unified rule deck yang mencakup semua layer.
- **Static timing analysis (STA)** dengan path yang melintasi chiplet boundary.
- **Thermal-thermal & thermal-mechanical co-simulation**.
- **Electromigration check** pada pad hybrid bonding, dengan aturan $J_{max} < 10^5\ \text{A/cm}^2$.

### Tahap 6: Test & Known-Good-Die (KGD)
- **Pre-bond testing** menggunakan probe card pada tingkat wafer.
- **Post-bond testing** dengan aksesibilitas melalui TSV test pad.
- **Built-in self-test (BIST)** untuk diagnosis fault pada hybrid bonding interface.

Diagram alur ini sesuai dengan rekomendasi IRDS (International Roadmap for Devices and Systems) 2023 More Moore chapter, yang menstandarisasi EDA tool requirement untuk heterogeneous integration.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Desain SoC AI Accelerator dengan Partisi 4-Chiplet**

Sebuah hyperscaler ingin membangun AI training accelerator dengan target komputasi 1 PetaFLOPS (FP16) pada konsumsi daya ≤ 400 W. Strategi partisi monolitik tunggal 600 mm² terbukti tidak ekonomis.

### Langkah 1: Penentuan Konfigurasi Partisi

Partisi monolitik 600 mm² pada node TSMC N5 dengan $D = 0.15\ \text{cacat/cm}^2$:

$$Y_{mono} = e^{-0.15 \times 6} = e^{-0.9} = 0.4066 \approx 40.7\%$$

Alternatif partisi 4 chiplet identik 150 mm²:

$$Y_{chiplet} = e^{-0.15 \times 1.5} = e^{-0.225} = 0.7985 \approx 79.9\%$$

Untuk sistem 4 chiplet tanpa redundansi:

$$Y_{system} = (0.7985)^4 = 0.4066$$

Yield identik, namun dengan partisi, setiap wafer 300 mm menghasilkan lebih banyak *good die*: dari 1 die monolitik per ~120 cm², menjadi 4 chiplet per ~30 cm², meningkatkan utilisasi wafer.

### Langkah 2: Analisis Interkoneksi Hybrid Bonding

Pilihan desain: komunikasi 4 chiplet melalui *unidirectional ring* dengan 4 link per chiplet. Target bandwidth: 250 GB/s per chiplet.

Jika menggunakan micro-bump 40 µm pitch, kapasitas per link pada data rate 16 Gbps/lane:
- Pads per mm² (square array): $1/40^2 = 625$ pads/mm²
- Bandwidth per mm²: $625 \times 16\ \text{Gbps} = 10\ \text{Tbps/mm}^2$

Untuk 250 GB/s (2 Tbps), dibutuhkan area interconnect: $2/10 = 0.2\ \text{mm}^2$ — masih feasible.

Jika menggunakan hybrid bonding