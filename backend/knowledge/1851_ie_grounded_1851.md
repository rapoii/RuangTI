# 1851 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Optimasi Proses, Keandalan, dan Rekayasa Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Fokus pada Sistem Manufaktur Mikroelektronika Lanjutan
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang menghadapi transisi paradigmatik dari pendekatan monolithic System-on-Chip (SoC) menuju arsitektur **heterogeneous integration (HI)** berbasis chiplet dan *three-dimensional integrated circuits* (3D-IC). Pergeseran ini dipicu oleh berakhirnya好处 ekonomi konvensional penskalaan node planar (yang dikenal sebagai *end of Moore's Law*), di mana biaya litografi EUV untuk node sub-3 nm melonjak secara eksponensial — melampaui US$ 300 juta per *mask set* (Roze & Gerber, 2026). Roze dan Gerber (2026) menyatakan bahwa Electronic Design Automation (EDA) modern harus berevolusi dari sekadar *place-and-route* 2D menjadi orkestrator multi-disiplin yang mengelola koherensi *thermal-mechanical-electrical* pada tumpukan chiplet tiga dimensi. Kompleksitas ini muncul karena sebuah paket 3D-IC modern dapat mengintegrasikan 4–12 chiplet yang berbeda (logika, memori HBM, analog/RF, photonic, power management) dalam satu *package substrate*, menghasilkan lebih dari **10 juta koneksi inter-chiplet** yang harus divalidasi secara simultan.

Urgensi ekonominya bersifat strategis. Sebagaimana diuraikan oleh Lau (2023) dalam *Chiplet Design and Heterogeneous Integration Packaging*, pasar chiplet global diproyeksikan mencapai US$ 92 miliar pada 2028 dengan CAGR 41,5%, didorong oleh permintaan *high-bandwidth memory (HBM)*, akselerator AI, dan komputasi *edge*. Lau (2023) menekankan bahwa **Cu-Cu Hybrid Bonding (HCB)** — dengan pitch interkoneksi mencapai 3 µm dan densitas >100.000 koneksi/mm² — telah menjadi *backbone* manufaktur 3D-IC, menggantikan *micro-bump* solder tradisional yang terbatas pada pitch >10 µm. Namun, Lau (2023) juga menyoroti paradoks operasional: meskipun densitas I/O meningkat hampir 30×, *bonding yield* turun dari 99,9% (pitch 10 µm) menjadi sekitar 95% (pitch 3 µm) akibat sensitivitas terhadap *misalignment*, *contamination*, dan *copper oxidation*. Fenomena ini menciptakan celah besar dalam kapasitas rekayasa industri: bagaimana merancang metodologi EDA yang mampu mengoptimasi *design-for-manufacturing (DFM)*, *design-for-test (DFT)*, dan *multi-physics co-simulation* secara kohesif sebelum fabrikasi — mengingat *re-spin* sebuah desain 3D-IC membutuhkan siklus 16–24 minggu dan biaya >US$ 5 juta.

Roze dan Gerber (2026) menjawab tantangan ini dengan mengusulkan kerangka EDA empat-lapis: (i) *chiplet-level floorplanning* dengan optimasi *thermal-aware*, (ii) *inter-chiplet signal-integrity* verification, (iii) *TSV/redistribution layer* co-design, dan (iv) *manufacturability scoring* berbasis *process window*. Dari perspektif Teknik Industri, modul ini memperlakukan desain 3D-IC bukan sekadar masalah elektris, melainkan sebagai **masalah optimasi multi-objektif** dengan fungsi tujuan yang meliputi biaya, yield, *time-to-market*, dan keandalan termal-mekanis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal Multi-Chiplet dengan Coupling Konduksi

Untuk mengevaluasi *thermal hot-spot* pada stack 3D-IC, digunakan model resistansi termal *compact* berbasis jaringan RC (Roze & Gerber, 2026). Untuk tumpukan $n$ chiplet, suhu *junction* ke-$i$ diberikan oleh:

$$T_{j,i} = T_{a} + \sum_{k=1}^{n} R_{th,ik} \cdot P_{k}$$

di mana $T_{a}$ adalah suhu ambien (°C), $R_{th,ik}$ adalah *thermal resistance* antara chiplet $i$ dan sumber panas $k$ (K/W), dan $P_{k}$ adalah disipasi daya chiplet $k$. Resistansi termal antar-chiplet melalui TSV dan *bonding layer* Cu-Cu dimodelkan sebagai:

$$R_{th,layer} = \frac{t_{Cu}}{k_{Cu} \cdot A_{eff}} + \frac{t_{bond}}{k_{bond} \cdot A_{eff}} + R_{th,TSV} \cdot \frac{A_{TSV}}{A_{eff}}$$

dengan $k_{Cu} = 401$ W/(m·K), $k_{bond} \approx 200$ W/(m·K) untuk *hybrid-bonded interface*, $A_{eff}$ luas efektif, dan $A_{TSV}$ area total TSV.

### 2.2 Fungsi Yield untuk Cu-Cu Hybrid Bonding

Lau (2023) merumuskan model yield bonding berdasarkan toleransi misalignment dan densitas cacat. Yield koneksi tunggal (*single-bond yield*):

$$Y_{b} = \exp\left(-\lambda \cdot A_{bond}\right) \cdot \Phi\!\left(\frac{t_{misalign}}{3\sigma_{align}}\right)$$

di mana $\lambda$ adalah densitas cacat permukaan (defects/cm²), $A_{bond}$ luas bond-pad, $\Phi$ adalah fungsi distribusi kumulatif normal standar, $t_{misalign}$ adalah toleransi pitch, dan $\sigma_{align}$ adalah standar deviasi alignment (umumnya 0,3 µm untuk tool modern). Yield total untuk $N$ koneksi paralel:

$$Y_{total} = \prod_{j=1}^{N} Y_{b,j} = Y_{b}^{N}$$

### 2.3 Optimasi Multi-Objektif Desain Chiplet

Roze dan Gerber (2026) memformalkan desain sebagai masalah Pareto:

$$\min_{\mathbf{x}} \;\mathbf{F}(\mathbf{x}) = \left[f_{1}(\mathbf{x}), f_{2}(\mathbf{x}), f_{3}(\mathbf{x}), f_{4}(\mathbf{x})\right]$$

dengan:
- $f_{1}(\mathbf{x}) = -\text{Yield}(\mathbf{x})$ — memaksimalkan yield
- $f_{2}(\mathbf{x}) = \text{Cost}(\mathbf{x})$ — meminimalkan biaya fabrikasi
- $f_{3}(\mathbf{x}) = T_{j,max}(\mathbf{x})$ — meminimalkan suhu junction maksimum
- $f_{4}(\mathbf{x}) = -\text{Bandwidth}(\mathbf{x})$ — memaksimalkan bandwidth inter-chiplet

Vektor keputusan $\mathbf{x}$ mencakup pitch TSV $\{p_{TSV}\}$, dimensi chiplet $\{w_i, l_i\}$, material *underfill*, dan *redistribution layer routing*.

### 2.4 Model Keandalan Termo-Mekanis

Tegangan geser pada *bonded interface* akibat *Coefficient of Thermal Expansion (CTE)* mismatch:

$$\tau_{max} = \frac{\Delta\alpha \cdot \Delta T \cdot E_{eff}}{2(1-\nu)} \cdot \sqrt{\frac{\pi}{d_{bond}}}$$

di mana $\Delta\alpha$ adalah selisih CTE, $\Delta T$ rentang termal, $E_{eff}$ modulus efektif, $\nu$ rasio Poisson, dan $d_{bond}$ diameter bond-pad. Kriteria kegagalan (failure criterion): $\tau_{max} \leq \tau_{allowable} \approx 30$ MPa untuk Cu-Cu interface pasca-anneal (Lau, 2023).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan **SOP empat-fase** untuk integrasi EDA-to-fabrication pada desain chiplet/3D-IC, yang dapat diadopsi sebagai *standard operating procedure* pada divisi *Advanced Packaging* di perusahaan semikonduktor:

**Fase 1 — Architectural Planning & Chiplet Selection**
1. Definisikan *target use-case* dan *performance requirements* (TOPS, bandwidth memori, *power budget*).
2. Pilih chiplet dari *chiplet library* atau *foundry IP catalog*, dengan validasi protokol *die-to-die interface* (misal: UCIe, BoW, OpenHBI).
3. Lakukan *trade-off analysis* antara *monolithic SoC* dan *multi-chiplet disaggregation*.

**Fase 2 — Multi-Physics Co-Simulation**
1. *Floorplanning* 3D dengan algoritma *thermal-aware placement* (misal: simulasi annealing + gradient descent).
2. Ekstraksi parasitik RLC dari *inter-chiplet routing* dan validasi *signal integrity* pada frekuensi target (hingga 112 GHz untuk UCIe-Advanced).
3. Simulasi *power delivery network (PDN)* dengan *target impedance* $< 0,5$ mΩ pada rentang DC–10 GHz.
4. Iterasi desain menggunakan *sensitivity analysis* dan *Design of Experiments (DoE)* taguchi L18 untuk parameter kritis.

**Fase 3 — DFM/DFT Verification**
1. Jalankan *Design Rule Check (DRC)* dan *Layout-vs-Schematic (LVS)* pada seluruh stack.
2. Lakukan *bonding yield prediction* menggunakan rumus pada §2.2.
3. Sisipkan *Built-In Self-Test (BIST)* untuk setiap chiplet dengan *boundary scan* antar-die.
4. Validasi *test coverage* $> 98\%$ untuk *stuck-at* dan *transition fault*.

**Fase 4 — Tape-Out & Process Window Qualification**
1. *Tape-out* GDSII final ke foundry.
2. Jalankan *process window qualification* dengan variasi $\pm 10\%$ pada parameter bonding (suhu, tekanan, waktu).
3. Monitor *Key Process Indicators (KPI)*: alignment accuracy ($\sigma_{align}$), bond strength (shear > 15 MPa), dan electrical continuity.

Diagram alir proses secara skematis mengikuti urutan: **Requirement → Floorplan → Co-Sim → DFM/DFT → Tape-out → Bonding Qualification → Reliability Test → Mass Production**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain 3D-IC Akselerator AI 4-Chiplet

**Spesifikasi Sistem:**
- 4 chiplet logika (compute die), masing-masing $10 \times 10$ mm, disipasi $P = 25$ W per chiplet
- 1 chiplet HBM3e di atas stack, disipasi $P = 8$ W
- Pitch Cu-Cu HCB: $p = 3$ µm
- $\sigma_{align} = 0,3$ µm
- Densitas cacat $\lambda = 0,2$ defects/cm²
- $A_{bond}$ per koneksi: $3 \times 3$ µm = $9 \times 10^{-8}$ cm²
- $N = 50.000$ koneksi per chiplet

### Langkah 1: Perhitungan Yield Bonding

Probabilitas alignment (3σ rule):
$$\Phi\!\left(\frac{1,5}{3 \times 0,3}\right) = \Phi(1,667) \approx 0,9525$$

Probabilitas bebas cacat:
$$\exp(-0,2 \times 9 \times 10^{-8}) = \exp(-1,8 \times 10^{-8}) \approx 0,99999998$$

Yield per koneksi:
$$Y_b = 0,9525 \times 0,99999998 \approx 0,9525$$

Yield total per chiplet:
$$Y_{chiplet} = (0,9525)^{50.000} \approx e^{-50.000 \times 0,0487} \approx e^{-2435}$$

Yield total 5-chiplet stack:
$$Y_{stack} = (Y_{chiplet})^{5} \approx e^{-12.175} \approx 0$$

**Interpretasi:** Hasil ini menunjukkan kelayakan teknis marginal. Untuk mencapai $Y_{stack} > 50\%$, diperlukan perbaikan proses. Dengan $\sigma_{align} = 0,15$ µm (tool generasi berikutnya):

$$\Phi\!\left(\frac{1,5}{3 \times 0,15}\right) = \Phi(3,333) \approx 0,9991$$

$$Y_b = 0,9991$$

$$Y_{stack} = (0,9991)^{250.000} \approx e^{-224} \