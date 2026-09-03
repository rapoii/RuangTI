# 2523 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Arsitektur, Verifikasi, dan Integrasi Hibrid Tembaga-Tembaga

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet dan 3D-IC Design dengan Fokus pada Cu-Cu Hybrid Bonding
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah menghadapi transisi paradigma yang disruptif. Setelah hampir enam dekade mengandalkan hukum Moore melalui penyusutan transistor planar, biaya fabrikasi node先进技术 (advanced node) di bawah 3 nm melonjak secara eksponensial—diperkirakan mencapai USD 20 miliar per fab (GAA-FET 2 nm), sementara *yield* turun drastis karena kompleksitas litografi EUV dan *multi-patterning*. Roze dan Gerber (2026) dalam papernya di *ICEP-HBS 2026* menegaskan bahwa arsitektur **chiplet** dan **3D-IC** bukan sekadar pilihan teknologi, melainkan *imperatif strategis* untuk mempertahankan trajektori peningkatan *Performance, Power, Area* (PPA) yang menjadi tulang punggung ekonomi digital.

Konteks operasional industri ditunjukkan oleh data: pasar *heterogeneous integration* diproyeksikan tumbuh dari USD 45,9 miliar (2024) menjadi USD 95,8 miliar pada 2030 (CAGR 13,1%). Urgensi ini dipercepat oleh permintaan *high-bandwidth memory* (HBM), *AI accelerator*, dan *data center* yang membutuhkan bandwidth lebih dari 1 TB/s per paket. Roze & Gerber (2026) menekankan bahwa tantangan fundamental dalam desain chiplet adalah **koherensi EDA lintas domain**: dari *front-end* RTL hingga *back-end* package, *parasitics extraction* interconnect hybrid bond, dan verifikasi termal-mekanis harus dilakukan secara simultan dalam *unified design environment*. Tanpa integrasi EDA ini, siklus desain melonjak dari 12 bulan menjadi 24–30 bulan, mengancam *time-to-market* produk kritis.

Lau (2023) dari perspektif proses manufaktur melengkapi argumentasi tersebut dengan menunjukkan bahwa **Cu-Cu hybrid bonding**—teknologi yang menggunakan *direct copper-to-copper fusion* pada suhu rendah (<300°C) dengan pitch sub-10 μm—telah menjadi *backbone* integrasi vertikal. Pitch bonding telah turun dari 10 μm (generasi pertama) menjadi 3 μm (HBM4), dengan target 1 μm pada roadmap industri. Namun, penyusutan pitch ini membawa tantangan baru: toleransi misalignment harus turun dari ±500 nm menjadi ±100 nm, *surface roughness* Cu harus <0,5 nm RMS, dan *dishing* elektrokimia harus diminimalisasi. Semua parameter ini memerlukan **verifikasi fisik dan termal** yang presisi pada fase desain—bukan setelah fabrikasi—sehingga *failures due to design errors* dapat ditekan dari 35% menjadi <5% dari total *yield loss*.

Dari perspektif ekonomi industri, adopsi chiplet memungkinkan *reuse* IP block, *mix-and-match* node proses (misalnya 5 nm untuk *compute*, 12 nm untuk *IO*, 28 nm untuk *power management*), yang menurunkan biaya *non-recurring engineering* (NRE) hingga 40% dan meningkatkan *effective yield* melalui *known-good-die* (KGD) selection. Tanpa solusi EDA end-to-end, potensi penghematan ini tidak terealisasi karena *integration risk* dan *verification gap* mendominasi struktur biaya.

## 2. Landasan Teori & Formulasi Matematis

Model kuantitatif yang menjadi tulang punggung metodologi Roze & Gerber (2026) dan Lau (2023) dibangun atas empat pilar formulasi: **interconnect parasitik**, **kontak resistansi hybrid bond**, **model yield komposit**, dan **optimasi PPA**.

### 2.1 Resistansi dan Kapasitansi Interconnect Hybrid Bond

Resistansi kontak Cu-Cu pada hybrid bond dapat dimodelkan sebagai:

$$R_{contact} = \frac{\rho_{Cu}}{N_{bumps} \cdot A_{bond}} \cdot t_{eff} + R_{interface}$$

di mana $\rho_{Cu} = 1{,}68 \times 10^{-8}\ \Omega\!\cdot\!\text{m}$ adalah resistivitas tembaga, $A_{bond} = p^2$ adalah luas penampang kontak dengan pitch $p$, $t_{eff}$ adalah ketebalan efektif lapisan Cu, dan $R_{interface}$ adalah resistansi antarmuka akibat *bonding defect* (void, misalignment). Lau (2023) menunjukkan bahwa untuk pitch $p = 3\ \mu\text{m}$ dengan dimensi Cu $2{,}5 \times 2{,}5\ \mu\text{m}^2$ dan ketebalan $5\ \mu\text{m}$:

$$R_{contact} \approx \frac{1{,}68 \times 10^{-8}}{1 \times (2{,}5 \times 10^{-6})^2} \cdot 5 \times 10^{-6} \approx 13{,}4\ \text{m}\Omega$$

Kapasitansi parasitik antar-bump dimodelkan sebagai:

$$C_{parasitic} = \varepsilon_0 \varepsilon_r \frac{A_{couple}}{d_{couple}}$$

dengan $\varepsilon_r \approx 3{,}9$ untuk SiO$_2$ dielektrik. Untuk *coupling distance* 1 μm antar hybrid bond pada stack 3D, $C_{parasitic} \approx 1{,}7\ \text{fF}$, signifikan untuk sinyal GHz.

### 2.2 RC Delay Inter-Chiplet

Total delay sinyal inter-chiplet melalui hybrid bond:

$$\tau_{total} = (R_{driver} + R_{wire} + R_{contact}) \cdot (C_{load} + C_{wire} + C_{parasitic})$$

Untuk aplikasi HBM pada bandwidth 8 GT/s per pin, target $\tau_{total} < 62{,}5\ \text{ps}$, yang mensyaratkan $R_{contact} < 50\ \text{m}\Omega$.

### 2.3 Model Yield Komposit Chiplet

Yield total sistem chiplet mengikuti model *compound yield*:

$$Y_{system} = Y_{KGD}^{N_{chiplets}} \cdot \prod_{i=1}^{N_{chiplets}} Y_{bond,i} \cdot \prod_{j=1}^{M_{interfaces}} Y_{interface,j}$$

di mana $Y_{KGD} = 0{,}95$ untuk chiplet mature node, $Y_{bond,i} = 0{,}998$ per hybrid bonding interface, dan $Y_{interface,j} = 0{,}99$ per *bump* konvensional. Untuk sistem 4-chiplet dengan 3D stack:

$$Y_{system} = 0{,}95^4 \cdot 0{,}998^3 \cdot 0{,}99^{200} \approx 0{,}31$$

Ini menjelaskan mengapa **architecture-aware yield optimization** dalam EDA menjadi kritis: tool harus mampu mengeksplorasi trade-off antara jumlah chiplet, jumlah bond layer, dan disagregasi fungsional.

### 2.4 Model Termal Resistansi

Resistansi termal *junction-to-ambient* untuk stack 3D:

$$\theta_{JA} = \theta_{JC} + \theta_{TIM} + \theta_{spreader} + \theta_{ambient}$$

dengan $\theta_{TIM}$ (thermal interface material) dapat dihitung:

$$\theta_{TIM} = \frac{t_{TIM}}{k_{TIM} \cdot A_{contact}}$$

Roze & Gerber (2026) menekankan bahwa tool EDA modern harus menyelesaikan persamaan konduksi panas 3D transient:

$$\rho c_p \frac{\partial T}{\partial t} = \nabla \cdot (k \nabla T) + q_{generated}$$

untuk mendeteksi *thermal hotspot* akibat *stacking* chiplet dengan densitas daya tinggi (>100 W/cm²).

### 2.5 Formulasi Optimasi PPA

Optimasi desain chiplet dapat diformulasikan sebagai masalah *multi-objective*:

$$\min_{x} \left[ P(x), -f(x), A(x) \right]$$

dengan kendala: $T_{junction}(x) \leq T_{max}$, $Y_{system}(x) \geq Y_{target}$, $C_{total}(x) \leq C_{budget}$. Variabel keputusan $x$ mencakup partisi fungsional, pilihan teknologi node per chiplet, pitch hybrid bond, dan topologi interconnect. EDA solution modern menggunakan *Pareto-front exploration* dengan algoritma NSGA-III untuk mengeksplorasi ribuan konfigurasi secara paralel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis desain chiplet mengikuti *flow* yang diuraikan oleh Roze & Gerber (2026), yang mengintegrasikan best-practice industri:

### 3.1 Tahap 1: Architectural Planning (4–6 minggu)

1. **System-level partitioning**: Definisikan functional block boundaries menggunakan analitik workload (target throughput, latency budget).
2. **Technology node assignment**: Setiap chiplet dipilih node proses berdasarkan trade-off biaya-performansi. Misalnya: *compute* pada 3 nm, *memory controller* pada 5 nm, *PHY* pada 7 nm.
3. **Interface specification**: Tentukan protokol inter-chiplet (UCIe, Bunch of Wires/BoW, atau proprietary), bandwidth target per lane, dan PHY characteristics.

### 3.2 Tahap 2: Unified Design Implementation (12–20 minggu)

Flow implementasi menggunakan **integrated tool chain** dengan *common database*:

```mermaid
RTL Capture → Synthesis → Floorplan 3D-IC → Partitioning
    ↓
Place & Route per Chiplet → Hybrid Bond Planning → SI/PI Extraction
    ↓
Thermal Analysis → Power Integrity → Timing Closure
```

Tool EDA seperti Siemens Tessent (DFT), Calibre (DRC/LVS), HyperLynx (SI/PI), dan Xpedition-IC (package) bekerja dalam *co-design environment* yang sama, memastikan konsistensi data dan deteksi dini masalah lintas domain.

### 3.3 Tahap 3: Hybrid Bonding Verification (2–4 minggu)

Berdasarkan Lau (2023), verifikasi khusus hybrid bond meliputi:

- **Geometric DRC**: Pitch check, Cu density rule, keep-out zone, dan *dishing* toleransi (<10 nm untuk pitch 3 μm).
- **Electrical co-design**: *Parasitic extraction* dengan model 3D EM (Ansys HFSS, Cadence Clarity), termasuk efek *proximity* antar-bump.
- **Thermo-mechanical**: Analisis *stress* akibat *CTE mismatch* Si-Cu-organic substrate, prediksi *warpage* dan *delamination risk*.
- **DFM rule check**: Validasi *process window* dengan *corner analysis* terhadap variasi fabrikasi (±10% Cu thickness, ±5% pitch).

### 3.4 Tahap 4: Sign-off dan Tape-out (2 minggu)

Final verification stack:
- Static timing analysis (STA) corner multi-mode multi-corner (MMMC)
- IR-drop analysis pada power delivery network (PDN) hybrid bond
- Signal integrity (eye diagram, jitter, crosstalk)
- Power integrity (target impedance < 1 mΩ untuk core supply)
- Reliability check: