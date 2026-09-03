# 2493 — Analisis Perilaku Pembentukan Kerak Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel primer terus melonjak tajam seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi baterai Lithium-ion (NMC/NCA). Lebih dari 60% cadangan nikel dunia tersimpan dalam bijih laterit kadar rendah (limonit dan saprolit), yang tidak dapat diproses secara efektif melalui teknologi pirometalurgi konvensional. **High-Pressure Acid Leaching (HPAL)** muncul sebagai solusi teknologi kunci dengan tingkat pemulihan Ni–Co yang mampu mencapai 85–95%, beroperasi pada rentang suhu 240–270 °C dan tekanan 35–45 bar dengan media asam sulfat (Dickson et al., 2026, [DOI: 10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Namun, HPAL menghadapi tantangan operasional kronis berupa **pembentukan kerak (scale/scaling)** pada dinding internal, baffle, dan pipa autoclave yang menurunkan koefisien perpindahan panas secara drastis, meningkatkan konsumsi asam spesifik, serta memaksa shut-down unit secara periodik untuk *pigging* dan acid cleaning. Studi Andrameda et al. (2024, [DOI: 10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) pada residu HPAL yang telah mengalami *roasting-reduction* menunjukkan bahwa pengelolaan residu berskala tebal menjadi bottleneck keberlanjutan, sehingga pemahaman perilaku kerak secara fundamental menjadi *critical success factor* bagi operasional pabrik HPAL modern berkapasitas 30.000–50.000 ton Ni per tahun. Urgensi ekonominya bersifat langsung: setiap 1 mm akresi kerak setebal rata-rata dapat menurunkan *throughput* autoclave sebesar 2–4%, yang pada skala pabrik setara dengan kerugian pendapatan USD 5–10 juta per tahun. Oleh karena itu, dokumen modul ini membahas secara sistematis karakterisasi termodinamik, kinetika deposisi, dan metodologi mitigasi kerak dalam kerangka *Industrial Engineering* yang mengintegrasikan analisis proses, optimasi operasional, dan rekayasa keandalan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pelindian dan Pengendapan

Reaksi pelindian utama bijih laterit dalam autoclave mengikuti stoikiometri:

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{Ni}^{2+} + \text{SO}_4^{2-} + \text{H}_2\text{O}$$

Di sisi lain, besi(II) yang terekstrak akan dioksidasi menjadi Fe(III) dan mengendap kembali sebagai **hematit** yang merupakan penyusun dominan kerak:

$$2\text{Fe}^{2+} + \tfrac{1}{2}\text{O}_2 + 2\text{H}^+ \rightarrow \text{Fe}_2\text{O}_3\downarrow + 2\text{Fe}^{3+} + \text{H}_2\text{O}$$

Kelarutan Fe(III) dalam larutan asam sulfat pekat menurun tajam dengan kenaikan suhu mengikuti persamaan empiris:

$$\log[\text{Fe}^{3+}] = A - \frac{B}{T} - C\cdot pH$$

dengan $A$, $B$, $C$ adalah parameter empiris yang bergantung pada kekuatan ionik, dan $T$ dalam Kelvin. Pengendapan selektif ini dimanfaatkan untuk memisahkan Fe dari Ni–Co, namun menjadi bumerang ketika endapan melekat pada permukaan heat exchanger sebagai kerak.

### 2.2 Kinetika Pertumbuhan Kerak

Pertumbuhan ketebalan kerak $x(t)$ terhadap waktu umumnya mengikuti model **asymptotic–parabolic** untuk deposit padat yang terbentuk melalui difusi ion melalui lapisan berpori:

$$\frac{dx}{dt} = \frac{k_d \cdot \Delta C_s}{x(t) + x_0}$$

yang menghasilkan solusi analitis:

$$x(t)^2 + 2 x_0 \, x(t) = 2 k_d \Delta C_s \, t$$

dengan $k_d$ adalah koefisien difusi reaktif (m²/s), $\Delta C_s$ adalah gradien konsentrasi Fe³⁺ antara *bulk solution* dan *interface* kerak (mol/m³), dan $x_0$ adalah ketebalan awal *seed layer*. Konstanta $k_d$ mengikuti hukum Arrhenius:

$$k_d = k_{d,0} \exp\!\left(-\frac{E_a}{R T}\right)$$

dengan energi aktivasi $E_a$ tipikal 60–90 kJ/mol untuk pengendapan hematit pada permukaan baja.

### 2.3 Penurunan Koefisien Perpindahan Panas

Efek kerak terhadap perpindahan panas dimodelkan melalui **fouling resistance** $R_f$ yang ditambahkan pada resistansi termal total:

$$\frac{1}{U_{\text{fouled}}} = \frac{1}{h_i} + R_f + \frac{x_{\text{wall}}}{k_{\text{wall}}} + \frac{1}{h_o}$$

$$R_f(t) = \frac{x(t)}{k_{\text{scale}}} = \frac{1}{k_{\text{scale}}}\sqrt{x_0^2 + 2 k_d \Delta C_s \, t - x_0^2}$$

Laju perpindahan panas kemudian menjadi:

$$\dot{Q} = U_{\text{fouled}} \cdot A \cdot \Delta T_{\text{LMTD}}$$

### 2.4 Neraca Massa Asam Sulfat

Konsumsi asam spesifik total (kg H₂SO₄ per ton bijih kering) merupakan jumlah kontribusi dari setiap mineral terlarut:

$$\text{KA} = \sum_{i} \alpha_i \, \frac{w_i}{M_i} \cdot 98{,}08 \cdot 10$$

dengan $\alpha_i$ fraksi ekstraksi mineral ke-$i$, $w_i$ kadar (% massa), $M_i$ massa molar, dan faktor 10 mengonversi dari % ke kg/ton.

### 2.5 Model Kinetika Pelindian Inti Mengkerut (Shrinking Core)

Konversi Ni per satuan waktu untuk partikel spheris mengikuti:

$$1 - \frac{2}{3}\eta - (1-\eta)^{2/3} = \frac{k_c \, C_A^n}{\rho_s R_p^2} \cdot t$$

dengan $\eta$ fraksi konversi, $k_c$ konstanta kinetika, $C_A$ konsentrasi asam, dan $R_p$ jari-jari partikel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi kerak mengikuti alur rekayasa berikut:

```
┌────────────────────────────────────────────────────────┐
│ 1. CHARACTERIZATION (Pre-Shutdown Sampling)            │
│    • Coupon baja karbon ASTM A516 Gr.70 terpasang      │
│      pada baffle & shell selama 30/60/90 hari          │
│    • Analisa SEM-EDS, XRD, XRF pada kerak              │
│    • Pengukuran ketebalan ultrasonik (UT)              │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ 2. DIAGNOSTIC & KINETIC FITTING                        │
│    • Regresi non-linear data x(t) → kd, ΔCs            │
│    • Coupling dengan data plant DCS (T, P, τ)          │
│    • Validasi cross-section mapping (grid 50×50 mm)    │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ 3. PROCESS MITIGATION                                  │
│    • Optimasi profil suhu multi-stage (pre-heat 180°C) │
│    • Adjust acid-to-ore ratio (A/O) 0.25–0.35          │
│    • Injeksi seed hematit re-circulated 5–15 g/L       │
│    • Modifikasi geometri baffle (turbulator inserts)   │
└──────────────────────┬─────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────┐
│ 4. CLEANING SCHEDULE & ASSET INTEGRITY                  │
│    • Acid wash 5% H₂SO₄ + inhibitor pada τ = 4 jam     │
│    • High-pressure water jet (200 bar) tiap 90 hari    │
│    • Risk-Based Inspection (RBI) per API 580           │
└────────────────────────────────────────────────────────┘
```

SOP karakterisasi mengikuti protokol: (i) sampling