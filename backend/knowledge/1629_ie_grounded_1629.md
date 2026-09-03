# 1629 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Laterit Nikel dengan Kondisi High Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global akan nikel telah meningkat secara eksponensial dalam dekade terakhir, terutama didorong oleh ekspansi industri baterai kendaraan listrik (EV) yang membutuhkan nikel sulfat kelas baterai (Ni ≥ 99.9%). Cadangan nikel laterit menyumbang sekitar 70% dari total cadangan nikel dunia, namun hanya sekitar 40% produksi nikel primer berasal dari laterit karena kompleksitas metalurgi yang jauh lebih tinggi dibandingkan bijih sulfida. Proses High Pressure Acid Leaching (HPAL) merupakan teknologi utama untuk mengekstraksi nikel dari bijih laterit jenis limonit dan saprolit, dengan operasi pada suhu 240–270 °C dan tekanan 30–55 bar menggunakan asam sulfat pekat (150–250 g/L H₂SO₄). Dickson, Deleau, dan Espitalier (2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)) menekankan bahwa salah satu tantangan operasional paling kritis pada HPAL adalah pembentukan *kerak* (*scaling*) pada dinding internal autoclave, yang menurunkan koefisien perpindahan panas hingga 40–60% dan memaksa *shutdown* tidak terjadwal dengan kerugian produksi mencapai USD 200.000–500.000 per kejadian pada pabrik berkapasitas 50.000 ton Ni/tahun.

Menurut Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)), pengelolaan residu HPAL yang mengandung sulfur memerlukan pendekatan desulfurisasi dan reduksi *roasting* untuk mengubah fasa berbahaya menjadi produk yang stabil secara lingkungan. Komposisi kerak pada autoclave HPAL dilaporkan mengandung campuran kompleks: hematit (α-Fe₂O₃), alunit (KAl₃(SO₄)₂(OH)₆), basic iron sulfate (Fe(OH)SO₄·nH₂O), gypsum (CaSO₄·2H₂O), dan aluminium hidroksida (AlOOH, Al(OH)₃). Pembentukan kerak terjadi melalui tiga mekanisme simultan: (1) *inverse solubility* senyawa besi-aluminium pada suhu HPAL, (2) nukleasi heterogen pada permukaan baja autoclave, dan (3) *co-precipitation* silika-gipsum. Urgensi industri dari studi ini sangat tinggi karena downtime autoclave mewakili 8–15% dari total *unplanned downtime* pada rantai pasok HPAL, yang secara langsung menurunkan *overall equipment effectiveness* (OEE) pabrik.

Aspek lingkungan semakin relevan karena residu kerak dan *slurry* yang dihasilkan harus memenuhi standar TCLP (*Toxicity Characteristic Leaching Procedure*) sebelum disposal. Oleh karena itu, pemahaman kuantitatif atas perilaku scaling bukan hanya persoalan efisiensi termal dan kapasitas produksi, melainkan juga kepatuhan regulasi dan profitabilitas jangka panjang. Dickson et al. (2026) mempublikasikan studi komprehensif yang memadukan karakterisasi XRD, SEM-EDS, dan TGA dengan model kinetik untuk memprediksi laju akresi kerak pada dinding autoclave pilot-plant berkapasitas 200 L, memberikan basis empiris yang dapat diskalakan ke desain industri penuh.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dengan Shrinking Core Model (SCM)

Pelindian partikel laterit nikel mengikuti model *shrinking core* dengan reaksi permukaan kimia sebagai tahap pengendali (chemical reaction-controlled regime), yang dinyatakan oleh:

$$1 - (1 - X)^{1/3} = \frac{k_s \cdot C_{H^+}^n}{r_0 \cdot \rho_s} \cdot t$$

di mana $X$ adalah fraksi konversi nikel (0–1), $k_s$ adalah konstanta kecepatan reaksi intrinsik (m/s), $C_{H^+}$ adalah konsentrasi ion hidrogen dalam larutan (mol/L), $n$ adalah orde reaksi terhadap $H^+$ (umumnya $n \approx 0.5$ untuk HPAL), $r_0$ adalah radius awal partikel (m), $\rho_s$ adalah densitas padatan (kg/m³), dan $t$ adalah waktu pelindian (s). Konstanta $k_s$ mengikuti persamaan Arrhenius:

$$k_s = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$

dengan $A$ sebagai faktor pre-eksponensial (m/s), $E_a$ energi aktivasi (kJ/mol, tipikal 60–85 kJ/mol untuk laterit limonitik menurut literatur), $R = 8.314$ J/(mol·K), dan $T$ suhu absolut (K).

### 2.2 Model Pertumbuhan Kerak (*Scale Growth Kinetics*)

Laju akresi kerak pada dinding autoclave dapat dimodelkan dengan persamaan diferensial berikut yang diadopsi dari kerangka Dickson et al. (2026):

$$\frac{d\delta(t)}{dt} = \frac{k_d \cdot (C_{Fe}^{sat}(T) - C_{Fe}^{bulk}(t))}{\rho_{scale}}$$

dengan $\delta(t)$ adalah tebal kerak pada waktu $t$ (m), $k_d$ koefisien transfer massa deposisi (m/s), $C_{Fe}^{sat}(T)$ konsentrasi jenuh besi pada suhu $T$ (g/L), $C_{Fe}^{bulk}(t)$ konsentrasi besi dalam *bulk slurry* (g/L), dan $\rho_{scale}$ densitas kerak (≈ 3500–4200 kg/m³ untuk komposisi hematit-alunit). Konsentrasi jenuh mengikuti relasi *inverse solubility*:

$$C_{Fe}^{sat}(T) = C_0 \cdot \exp\left(-\frac{\Delta H_{diss}}{R}\left(\frac{1}{T} - \frac{1}{T_{ref}}\right)\right)$$

di mana $\Delta H_{diss}$ adalah entalpi disolusi (negatif untuk *inverse solubility*, tipikal −25 hingga −45 kJ/mol) dan $T_{ref} = 298$ K.

### 2.3 Penurunan Koefisien Perpindahan Panas

Akresi kerak menyebabkan resistansi termal total sistem meningkat sesuai model resistansi seri:

$$\frac{1}{U_{eff}(t)} = \frac{1}{U_0} + \frac{\delta(t)}{k_{scale}}$$

dengan $U_0$ koefisien perpindahan panas overall pada kondisi bersih (≈ 850–1100 W/(m²·K)), dan $k_{scale}$ konduktivitas termal kerak (tipikal 0.8–1.5 W/(m·K) untuk hematit berpori). Dampak terhadap kebutuhan luas perpindahan panas adalah:

$$A_{required}(t) = \frac{Q}{U_{eff}(t) \cdot \Delta T_{lm}}$$

dengan $Q$ beban panas total (W), dan $\Delta T_{lm}$ beda suhu logaritmik rata-rata.

### 2.4 Neraca Massa Asam Sulfat

Konsumsi asam sulfat spesifik dapat dihitung dari neraca stoikiometri:

$$m_{H_2SO_4} = \sum_i \nu_i \cdot \frac{m_{oxide,i}}{M_i} \cdot M_{H_2SO_4}$$

dengan $\nu_i$ koefisien stoikiometri untuk oksida logam $i$ (NiO → 1, FeO → 1, Fe₂O₃ → 3, Al₂O₃ → 3, MgO → 1, CaO → 1), $m_{oxide,i}$ massa oksida dalam umpan (kg), dan $M_i$ berat molarnya (kg/kmol). Untuk bijih laterit tipikal dengan kadar 1.5% Ni, 35% Fe₂O₃, 4% Al₂O₃, 8% MgO, konsumsi asam mencapai 350–500 kg H₂SO₄/ton bijih.

### 2.5 Model Desulfurisasi Residu HPAL (Pendukung Andrameda et al., 2024)

Andrameda, Triaswinanti, dan Madra (2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) memformulasikan efisiensi desulfurisasi agen padat terhadap sulfur residu:

$$\eta_{desulf} = \frac{S_{initial} - S_{final}}{S_{initial}} \times 100\%$$

dan reaksi reduksi *roasting*:

$$FeSO_4 + 2C \xrightarrow{700-900°C} FeO + 2CO_2 + SO_2$$

dengan kinetika reaksi reduksi orde pseudo-pertama:

$$-\ln(1 - X_{red}) = k_{red} \cdot \exp\left(-\frac{E_{a,red}}{RT}\right) \cdot t$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian kerak HPAL mengikuti alur rekayasa terstruktur sebagai berikut:

**Tahap 1 — Karakterisasi Umpan (Feed Characterization).** Bijih laterit dianalisis dengan XRF untuk komposisi oksida utama, XRD untuk fasa mineral (garnierit, goethit, hematit, magnetit), dan PSA (*particle size analyzer*) untuk distribusi ukuran partikel target $P_{80} \leq 75$ μm untuk efisiensi pelindian optimum. Variasi $\pm 10\%$ kadar Fe atau Al mengharuskan penyesuaian rasio asam/bijih otomatis.

**Tahap 2 — Slurry Preparation.** Pembuatan *slurry* dengan solid loading 35–45% w/w menggunakan *re-pulping tank* yang dilengkapi *agitator* tipe Rushton. *Pre-heating* dilakukan dalam *heater train* bertahap (60°C → 120°C → 180°C) untuk menghindari *thermal shock* pada autoclave.

**Tahap 3 — Operasi Autoclave Multi-Kompartemen.** Autoclave HPAL industrial menggunakan 4–6 kompartemen horizontal dengan pengadukan bertingkat. Kondisi operasi standar:
- Kompartemen 1–2: 245–255°C, residence time 20–30 menit (pelindian utama Fe dan Al)
- Kompartemen 3–4: 260–270°C, residence time 15–25 menit (pelindian Ni residual)
- Tekanan operasi: 42–48 bar (auto-regulated oleh *pressure control valve*)
- Asam umpan: 180–220 g/L H₂SO₄, dengan *flash steam* recovery

**Tahap 4 — Sampling dan Characterisation Kerak.** Prosedur sampling kerak mengikuti standar ASTM E1721 untuk pengambilan sampel representatif dari dinding autoclave saat *shutdown*. Kar