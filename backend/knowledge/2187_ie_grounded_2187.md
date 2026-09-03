# 2187 — Solusi EDA untuk Desain Chiplet dan Sirkuit Terintegrasi Tiga Dimensi (3D-IC): Integrasi Heterogen, Verifikasi Multi-Die, dan Optimasi Hybrid Bonding Tembaga-Tembaga

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi arsitektur chip paska-Moore telah memaksa industri semikonduktor global bertransisi dari desain *monolithic System-on-Chip* (SoC) menuju paradigma integrasi heterogen berbasis **chiplet** dan **tiga-dimensi Integrated Circuit (3D-IC)**. Pergeseran paradigma ini tidak sekadar merupakan pilihan teknologi, melainkan respons strategis terhadap tiga keterbataan fundamental: (1) batas fisik litografi EUV pada panjang gelombang 13,5 nm yang menghadapi difraksi dan biaya masker masif (mencapai USD 30–50 juta per set masker), (2) batas skalabilitas *reticle limit* pada area die efektif (≈858 mm² untuk reticle EUV kelas-eksposur), dan (3) batas ekonomi *yield* yang menurun secara eksponensial terhadap luas area die. Ksenia Roze dan Mark Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) dalam naskahnya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menunjukkan bahwa solusi *Electronic Design Automation* (EDA) modern harus mampu mengelola kompleksitas verifikasian multi-die yang mencakup lebih dari 100 miliar transistor terdistribusi, rute sinyal antar-die dengan pitch mikro pada ordo 3–10 µm, dan jaringan distribusi daya (*Power Delivery Network*/PDN) yang menembus substrat silikon melalui *Through-Silicon Via* (TSV).

Urgensi operasionalnya bersifat ekonomis sekaligus teknis. Pasar chiplet global diproyeksi menembus USD 110 miliar pada 2030 dengan CAGR >35%, sementara biaya rekayasa EDA tradisional meningkat drastis karena siklus iterasi desain-pabrikasi-verifikasi yang memanjang. Lebih lanjut, John H. Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) mendokumentasikan bahwa teknologi **Cu-Cu hybrid bonding** (ikatan hibrida tembaga-tembaga) telah menjadi enabler utama untuk stack 3D-IC densitas-tinggi dengan pitch interconection sub-10 µm, menggantikan metode *micro-bump* solder-based yang menghadapi bottleneck elektromigrasi dan resistansi kontak. Roze & Gerber (2026) menekankan bahwa *tool* EDA generasi baru—melipupi Siemens EDA Calibre 3DSTACK, Synopsys 3DIC Compiler, dan Cadence Integrity 3D-IC Platform—harus mengintegrasikan verifikasi DRC (*Design Rule Checking*), simulasi termal multi-fisika, *floorplanning* hierarkis, dan *sign-off* multi-die dalam satu *framework* koheren, demi menghindari iterasi fisik yang membuang siklus fabrikasi wafer bernilai USD 15.000–20.000 per lot.

Konteks rantai pasok industri semikonduktor menuntut integrasi vertikal antara vendor IP (seperti ARM, Synopsys IP), foundry (TSMC, Samsung, Intel Foundry), OSAT (*Outsourced Semiconductor Assembly and Test*), dan integrator sistem (NVIDIA, AMD, Apple). Tanpa platform EDA yang terstandarisasi, risiko *design re-spin* meningkat dari baseline industri 1,5 iterasi menjadi 3–4 iterasi per program tape-out, menambah *time-to-market* 8–14 minggu. Dokumen modul ini akan membedah solusi EDA mutakhir untuk desain chiplet/3D-IC berdasarkan kerangka teoritis yang dibangun Roze & Gerber (2026) dan Lau (2023), lengkap dengan formulasi matematis, SOP rekayasa, serta studi kasus kuantitatif industri.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis rekayasa EDA untuk chiplet dan 3D-IC dibangun di atas empat pilar matematis yang saling tergantung: (i) optimasi *floorplan* multi-die, (ii) verifikasi aturan desain multi-lapis, (iii) analisis termal dan keandalan, serta (iv) pemodelan proses Cu-Cu hybrid bonding.

### 2.1 Model Optimasi Floorplan Multi-Die

Permasalahan *floorplan* chiplet dapat diformulasikan sebagai masalah optimasi kombinatorial:

$$\min_{x_i, y_i, \theta_i} \sum_{i=1}^{N} \left( W_i \cdot H_i \cdot C_{area,i} + t_{route,i} \cdot C_{time,i} + P_{thermal,i} \cdot C_{thermal,i} \right)$$

dengan batasan:

$$\sum_{i=1}^{N} (W_i \cdot H_i) \leq A_{reticle}, \quad \forall i: (x_i, y_i) \in \mathcal{F}_{valid}$$

di mana $W_i$, $H_i$ adalah lebar dan tinggi die-i; $\theta_i$ adalah orientasi rotasi (0°, 90°, 180°, 270°); $C_{area,i}$, $C_{time,i}$, $C_{thermal,i}$ adalah koefisien biaya area, routing, dan termal; $A_{reticle}$ adalah luas reticle efektif; dan $\mathcal{F}_{valid}$ adalah ruang pencarian geometri legal.

### 2.2 Formulasi Crosstalk dan Integritas Sinyal pada Pitch Sub-10 µm

Untuk interconection Cu-Cu hybrid bonding dengan pitch $p$ (μm), kapasitansi kopling antar-bantalan dapat dimodelkan sebagai:

$$C_{coupling} = \frac{\pi \epsilon_0 \epsilon_r}{\cosh^{-1}(p / (2 \cdot r_{pad))}}$$

di mana $\epsilon_r$ adalah permitivitas relatif dielektrik interfacial (≈2,5 untuk SiO₂, ≈3,0 untuk SiCN), dan $r_{pad}$ adalah jari-jari bantalan Cu. Roze & Gerber (2026) menunjukkan bahwa pitch 3 µm pada Cu-Cu bonding menghasilkan kapasitansi kopling >15 fF/mm, yang memerlukan *driver* sinyal dengan impedansi terkontrol <50 Ω untuk mempertahankan *eye-opening* ≥60% terhadap periode unit-interval (UI).

### 2.3 Analisis Resistansi Termal TSV dan Jaringan Termal 3D

Resistansi termal *Through-Silicon Via* (TSV) dapat dihitung dengan persamaan konduksi silinder kompak:

$$R_{th,TSV} = \frac{L_{TSV}}{k_{Cu} \cdot A_{TSV}} + \frac{L_{Si}}{k_{Si} \cdot (A_{die} - n \cdot A_{TSV})}$$

dengan $L_{TSV}$ kedalaman via (50–100 µm), $k_{Cu} = 385$ W/m·K konduktivitas termal tembaga, $k_{Si} = 150$ W/m·K konduktivitas silikon, $A_{TSV} = \pi d_{TSV}^2/4$ luas penampang via, dan $n$ jumlah TSV. Untuk stack 8-die dengan $n=10.000$ TSV berdiameter $d_{TSV}=5$ µm, resistansi termal efektif dapat turun hingga <0,3 K/W, memungkinkan disipasi daya per-die hingga 5 W tanpa degradasi termal signifikan.

### 2.4 Model Yield Cu-Cu Hybrid Bonding

Yield bonding hibrida Cu-Cu mengikuti model statistik Poisson-Nelson yang diaplikasikan Lau (2023):

$$Y_{bonding} = e^{-\lambda \cdot A_{bond}} \cdot \prod_{j=1}^{m} (1 - D_j)^{N_j}$$

di mana $\lambda$ adalah densitas cacat permukaan (defect/cm², tipikal 0,05–0,2 untuk wafer 300 mm modern), $A_{bond}$ luas area bonding (cm²), $D_j$ probabilitas cacat per-bantalan ke-j, dan $N_j$ jumlah bantalan pada kelas cacat j.

### 2.5 Model Biaya Total Kepemilikan (TCO) Desain Chiplet

$$TCO = C_{NRE} + \sum_{k=1}^{K} n_{wafer,k} \cdot C_{wafer} + \sum_{r=1}^{R} C_{respin,r} + C_{assembly} + C_{test}$$

dengan $C_{NRE}$ biaya rekayasa non-recurring (mask, lisensi IP), $n_{wafer,k}$ jumlah wafer pada iterasi ke-k, $C_{respin,r}$ biaya re-spin desain ke-r, $C_{assembly}$ biaya packaging hybrid bonding, dan $C_{test}$ biaya pengujian final. Pendekatan ini menegaskan bahwa desain chiplet memiliki TCO lebih rendah 18–35% dibanding SoC monolitik pada volume produksi >5 juta unit, asalkan yield per-die chiplet individual ≥85%.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze & Gerber (2026) mengusulkan metodologi lima-tahap untuk implementasi desain chiplet/3D-IC yang terstandarisasi, yang selanjutnya kami elaborasi menjadi SOP operasional:

### Tahap 1 — Partisi Arsitektur dan Spesifikasi Multi-Die

1. Definisikan **die boundary specification** meliputi luas target, target *yield* per-die (>90%), batas termal (<125°C junction), dan target biaya per-unit.
2. Tentukan **interconnect protocol** antar-die: UCIe (Universal Chiplet Interconnect Express), BoW (Bunch of Wires), atau OpenHBI.
3. Pilih **substrate teknologi**: Si interposer, RDL fan-out, atau active interposer (TSMC SoIC-X, Intel Foveros).
4. Lakukan **co-design power/thermal/ signal integrity (PT/TS)** awal dengan simulasi sistem penuh.

### Tahap 2 — Floorplanning Hirarkis dan Penempatan Die

1. Input *netlist* dari masing-masing chiplet (dengan abstraksi I/O dan bumper list).
2. Jalankan algoritma *placement* multi-die: simulated annealing + force-directed.
3. Optimasi menggunakan fungsi objektif gabungan: area, panjang routing, dan gradien termal.
4. Validasi terhadap **keep-out zone** untuk warpage, CTE mismatch, dan manufacturing grid.

### Tahap 3 — Perancangan Power Delivery Network (PDN)

1. Definisikan **target impedansi PDN**: $Z_{target} = V_{dd} \cdot \Delta V / I_{transient}$
2. Tempatkan **TSV array** dengan densitas >10⁴ via/cm² untuk stack tinggi.
3. Integrasikan **decoupling capacitor** on-die (MiM, MIMCap) dan on-package.
4. Jalankan **simulasi PDN** AC sweep 0,1–10 GHz dan *transient analysis*.

### Tahap 4 — Implementasi Routing dan Verifikasi Multi-Fisika

1. Routing sinyal antar-die menggunakan *pin access optimization*.
2. Penempatan **bumps** Cu-Cu pitch 3–10 µm sesuai desain rule foundry.
3. **DRC & LVS multi-die** — dijalankan lintas seluruh stack.
4. Simulasi **termal 3D** dengan Fluent/Calibre 3DSTACK.
5. Simulasi **keandalan**: termo-mekanik, electromigrasi, *stress migration*.

### Tahap 5 — Sign-off, Tape-out, dan Assembly Planning

1. Eksekusi **sign-off multi-domain**: timing, power, IR-drop, DRC, DFM, ESD.
2. Generate **GDSII/OASIS stacked layout** untuk keseluruhan 3D-IC.
3. Siapkan **assembly process flow**: Cu-Cu hybrid bonding pada suhu 300–400°C, tekanan 50–150 MPa, annealing 60–120 menit pada atmosfer N₂/H₂.
4. Eksekusi **KGD (Known-Good-Die) test** sebelum stacking, dengan target yield KGD >97%.

Standar industri yang relevan: **JEDEC JEP156** (thermal characterization of 3D-IC), **IEEE 1838** (test access for 3D-IC), **UCIe 2.0 Specification** (chiplet interconnect), dan **SEMI 3D-IC standards**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Desain AI Accelerator 3D-IC 8-Stack dengan Cu-Cu Hybrid Bonding

**Spesifikasi Sistem:**
- Aplikasi: AI inference accelerator untuk data center
- Konfigurasi: 4 compute chiplet + 4 HBM3 memory stack
- Target: 150 TOPS, <75W total power, throughput 1,2 TB/s memory bandwidth
- Proses teknologi: TSMC N5 + N7 untuk memory controller

**Langkah 1 — Perhitungan Floorplan:**

Asumsikan dimensi