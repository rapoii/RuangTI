# 2621 — Karakterisasi dan Pengendalian Pembentukan Kerak Autoclave pada Proses Pelindian Asam Tekanan Tinggi Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural yang signifikan seiring meningkatnya permintaan baterai kendaraan listrik (EV), stainless steel, dan material katoda berbasis nikel-kobalt. Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel dunia tetapi hanya menghasilkan 40% produksi global, menjadi fokus utama karena keterbatasan sumberdaya bijih sulfida. Dalam konteks ini, teknologi *High-Pressure Acid Leaching* (HPAL) muncul sebagai satu-satunya rute hidrometalurgi yang mampu mengekstraksi nikel dan kobalt secara selektif dari bijih laterit kadar rendah (limonit dan saprolit kadar menengah) dengan recoveries mencapai 90–95% untuk nikel dan 80–90% untuk kobalt (Dickson, Deleau, & Espitalier, 2026).

Namun demikian, operasi HPAL menghadapi tantangan operasional kronis yang menjadi *single point of failure* dalam rantai pasok: **pembentukan kerak (*scaling*) pada dinding dan pipa internal autoclave**. Dickson et al. (2026) mendokumentasikan bahwa deposit kerak anhidrat yang terbentuk dari campuran senyawa besi, aluminium, dan sulfat dapat menurunkan koefisien perpindahan panas hingga 40–60% dalam waktu 3.000 jam operasi, memaksa *shut-down* tidak terjadwal (*unplanned downtime*) yang merugikan secara ekonomi dengan estimasi kerugian produksi nikel senilai USD 1,5–3 juta per event untuk pabrik berkapasitas 30.000–50.000 ton Ni per tahun. Andrameda, Triaswinanti, dan Madra (2024) melengkapi pemahaman ini dengan menunjukkan bahwa pada tahap *roasting-reduction* terhadap residu HPAL, keberadaan sulfur residual 0,8–2,5% dan suhu 700–900°C secara signifikan memengaruhi kualitas kerak sekunder yang terbentuk pada autoclave tahap kedua.

Urgensi ekonomi-teknis dari pengendalian kerak autoclave diperkuat oleh beberapa faktor. Pertama, investasi modal (*CAPEX*) untuk satu train autoclave HPAL dengan empat kompartemen (total volume 800–1.200 m³) mencapai USD 250–400 juta. Kedua, konsumsi asam sulfat pada proses HPAL (200–350 kg H₂SO₄ per ton bijih) menjadikannya proses yang *acid-intensive*, sehingga akumulasi sulfat dalam sistem recycle liquor menjadi *driver* utama pembentukan kerak aluminium-sulfat (alunite) dan besi-sulfat. Ketiga, target dekarbonisasi industri metalurgi mensyaratkan *heat integration* yang optimal, yang secara langsung bergantung pada koefisien perpindahan panas dinding autoclave (U) yang rentan degradasi akibat fouling. Oleh karena itu, kemampuan memodelkan, mengukur, dan memitigasi *scaling rate* menjadi kompetensi rekayasa kritis bagi insinyur Teknik Industri yang terlibat dalam *plant design*, *process optimization*, dan *maintenance planning* fasilitas HPAL.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Pembentukan Kerak

Mekanisme pembentukan kerak pada HPAL mengikuti reaksi heterogen antara ion terlarut dalam *leach slurry* dan permukaan baja autoclave (*alloy* SA-387 Gr. 11/22 atau titanium) pada kondisi super-kritis. Tiga jenis kerak dominan yang dikarakterisasi oleh Dickson et al. (2026) adalah:

1. **Hematit skaler (α-Fe₂O₃)**: Terbentuk dari dekomposisi termal *jarosite* dan *basic ferric sulfate*.
2. **Alunite/Na-alunite** (K,Na)Al₃(SO₄)₂(OH)₆: Terbentuk pada pH 1,0–2,5 dan suhu 240–270°C.
3. **Anhidrat/gypsum** (CaSO₄): Terbentuk dari pengendapan kalsium sulfat pada *preheating stage*.

Reaksi pembentukan alunite secara stoikiometri dapat dinyatakan sebagai:

$$3\text{Al}^{3+} + \text{K}^+ + 2\text{SO}_4^{2-} + 6\text{H}_2\text{O} \rightleftharpoons \text{KAl}_3(\text{SO}_4)_2(\text{OH})_6 + 6\text{H}^+ \quad \Delta G^0_{523\text{K}} = -127{,}4 \text{ kJ/mol}$$

Konstanta kesetimbangan termodinamika (K_eq) pada suhu T (K) mengikuti persamaan van't Hoff:

$$\ln K_{eq} = -\frac{\Delta H^0}{RT} + \frac{\Delta S^0}{R}$$

dengan R = 8,314 J/(mol·K), ΔH⁰ = entalpi reaksi, dan ΔS⁰ = entropi reaksi. Untuk reaksi alunitisasi, nilai ΔH⁰ = -158,2 kJ/mol dan ΔS⁰ = -61,8 J/(mol·K), sehingga kenaikan suhu dari 250°C ke 270°C menggeser K_eq sebesar faktor 2,3 (Dickson et al., 2026).

### 2.2 Kinetika Pertumbuhan Kerak

Laju pertumbuhan tebal kerak (δ) terhadap waktu operasi (t) mengikuti model paralel *nucleation-growth* yang diformulasikan oleh Dickson et al. (2026) sebagai:

$$\frac{d\delta}{dt} = k_n \cdot e^{-E_a/RT} \cdot C_{Al}^{n_1} \cdot C_{SO_4}^{n_2} \cdot [\text{H}^+]^{n_3} - k_d \cdot \tau$$

dengan:
- $k_n$ = konstanta laju nukleasi heterogen (m/s), bernilai 4,7×10⁻⁶ m/s untuk alunite
- $E_a$ = energi aktivasi, berkisar 78–112 kJ/mol
- $C_{Al}$, $C_{SO_4}$, $[\text{H}^+]$ = konsentrasi molar ion dalam larutan
- $n_1$, $n_2$, $n_3$ = orde reaksi parsial (tipikal: 1,8; 1,2; -0,6)
- $k_d$ = laju disolusi kerak oleh turbulensi slurry (m/s)
- $\tau$ = tegangan geser dinding (*wall shear stress*)

Persamaan ini dikonstruksi dari eksperimen *batch autoclave* selama 1.200 jam pada konsentrasi Al 4,5–8,2 g/L dan SO₄ 35–60 g/L. Energi aktivasi efektif E_a = 89,4 kJ/mol mengindikasikan mekanisme *chemically-controlled* (bukan *diffusion-limited*) pada suhu > 240°C.

### 2.3 Model Perpindahan Panas dengan Fouling

Degradasi koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, U) akibat akumulasi kerak dinyatakan dengan *resistance-in-series* model:

$$\frac{1}{U(t)} = \frac{1}{h_i} + \frac{\delta_{scale}(t)}{k_{scale}} + \frac{\delta_{wall}}{k_{steel}} + \frac{1}{h_o}$$

dengan:
- $h_i$ = koefisien konveksi sisi dalam (slurry) ≈ 2.500–3.800 W/(m²·K)
- $k_{scale}$ = konduktivitas termal kerak, tipikal 0,6–1,4 W/(m·K) untuk alunite
- $k_{steel}$ = konduktivitas baja SA-387 ≈ 36 W/(m·K)
- $h_o$ = koefisien konveksi sisi luar (steam) ≈ 8.000–12.000 W/(m·K)

Untuk kerak alunite dengan $k_{scale} = 1{,}1$ W/(m·K) dan ketebalan δ = 8 mm, resistansi termal kerak menjadi:

$$R_{scale} = \frac{0{,}008}{1{,}1} = 0{,}00727 \text{ m}^2\text{·K/W}$$

yang setara dengan 65% dari total resistansi termal sistem pada kondisi awal operasi (Dickson et al., 2026).

### 2.4 Analisis Termo-Ekonomi

Kerugian kapasitas produksi akibat fouling dapat dikuantifikasi dengan *Availability Loss Index* (ALI):

$$ALI = \frac{Q_{design} - Q_{actual}(\delta)}{Q_{design}} = 1 - \frac{U(\delta)}{U_0}$$

Untuk desain Q_design = 25 MW perpindahan panas dan U₀ = 850 W/(m²·K), setiap 1 mm pertumbuhan kerak menurunkan kapasitas hingga 5,3% (Andrameda et al., 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian kerak autoclave mengikuti kerangka **Detect-Characterize-Mitigate (DCM)** yang diajukan oleh Dickson et al. (2026), dengan integrasi prosedur *acid wash*, *kinetic monitoring*, dan *predictive maintenance*:

```
┌──────────────────────────────────────────────────────────────┐
│  Tahap 1: DETECT                                              │
│  • Wall temperature monitoring (RTD sensor, 12 titik)         │
│  • Acoustic resonance frequency analysis (ARFA)               │
│  • Heat flux sensor (HF-100 series)                           │
│  → Trigger: U(t)/U₀ < 0,75 (ambang batas operasional)         │
└─────────────────────────┬────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 2: CHARACTERIZE                                        │
│  • Online sampling slurry → ICP-OES (Fe, Al, Si, Ca, Mg)     │
│  • XRD analysis scale deposit (Cu-Kα, scan 5–80° 2θ)          │
│  • SEM-EDS mapping komposisi elemental                        │
│  • TGA-DSC identifikasi transformasi fase termal              │
└─────────────────────────┬────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 3: MITIGATE                                            │
│  • Acid washing: 8–12% HCl, 60°C, 4–6 jam circulation        │
│  • Blow-down pH adjustment: 1,8–2,2 (window operasi optimal) │
│  • Aditif inhibitor: polikarboksilat 50–150 ppm              │
│  • Predictive replacement (jadwal: 6.000–8.000 jam operasi)   │
└──────────────────────────────────────────────────────────────┘
```

**SOP Pemantauan Kerak Mingguan:**

1. **Akuisisi Data (Senin 06:00 WITA)**: Catat T_wall, T_steam, ΔT, dan laju alir slurry dari DCS historian.
2. **Kalkulasi U(t)**: Hitung $U(t) = Q / (A \cdot \Delta T_{LMTD})$ menggunakan software internal.
3. **Deteksi Anomali**: Bandingkan dengan *baseline*; jika deviasi > 10% dalam 7 hari, naikkan level inspeksi.
4. **Sampling Slurry**: Ambil 3×500 mL pada posisi 1/3 dan 2/3 tinggi autoclave kompartemen 2.
5. **Analisis Lab**: Kirim ke lab ICP; hasil keluar 24 jam.
6. **Decision Tree**: Jika Al > 6,5 g/L DAN SO₄ > 55 g/L DAN pH > 1,9 → jadwalkan *acid wash* dalam 14 hari.

Andrameda et al. (2024) melengkapi protokol ini dengan prosedur *pre-treatment* bijih sebelum HPAL, berupa *roasting* pada suhu 800°C selama 60–90 menit dengan aditif desulfurisasi (CaO atau Na₂CO₃) pada rasio molar Ca/S = 1,5–2,0, yang menurunkan konsentrasi sulfur dari 2,5% menjadi 0,3% dan secara signifikan mengurangi kecenderungan pembentukan kerak sulfat pada autoclave.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Autoclave Kompartemen 2 Pabrik HPAL Halmahera (Kapasitas 40.000 t