# 2381 — Perilaku Pembentukan Kerak (Scaling) Autoclave dan Karakterisasinya pada Pelindian Bijih Nikel Laterit pada Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang menghadapi transformasi struktural akibat semakin menipisnya cadangan bijih nikel sulfida (saprolit) berkualitas tinggi dan meningkatnya permintaan baterai kendaraan listrik (*electric vehicle*/EV). Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel dunia namun hanya 40% produksi global, menjadi fokus utama karena karakteristik geokimianya yang kompleks dan kandungan limonit–saprolit yang heterogen (Dickson et al., 2026). Teknologi **High-Pressure Acid Leaching (HPAL)** telah muncul sebagai *workhorse technology* untuk mengekstraksi nikel dan kobalt dari bijih laterit kadar rendah (biasanya 0,8–1,5% Ni), dengan kondisi operasi pada suhu 240–270°C dan tekanan 35–55 bar dalam autoclave titanium-clad.

Namun, efisiensi operasional HPAL sangat dibatasi oleh satu fenomena kritis: **autoclave scaling** — yaitu pengendapan lapisan kerak (scales) anorganik terutama berupa *basic iron sulfate* (jarosit), hematit (Fe₂O₃), dan aluminium hidroksida pada dinding internal, agitator, dan pipa sirkulasi autoclave. Dickson, Deleau, dan Espitalier (2026) melaporkan bahwa fenomena scaling ini mampu menurunkan *overall heat transfer coefficient* autoclave sebesar 30–60% setelah 30–60 siklus operasi, yang secara langsung meningkatkan konsumsi uap (steam) spesifik per ton bijih dan menurunkan *online availability* autoclave dari target desain ~92% menjadi hanya 78–83% (Dickson et al., 2026). Studi Andrameda, Triaswinanti, dan Madra (2024) di *AIP Conference Proceedings* menunjukkan bahwa strategi desulfurisasi awal dengan penambahan agen seperti Na₂CO₃ atau Ca(OH)₂ mampu mereduksi sulfur dalam residu HPAL sebesar 40–65%, sekaligus memodifikasi morfologi kerak yang terbentuk pada tahap *roasting-reduction* lanjutan (Andrameda et al., 2024).

Dari perspektif **Rekayasa Sistem Industri**, permasalahan scaling ini bukan semata-mata isu *unit operation* kimia, melainkan sebuah masalah optimasi sistem terpadu yang menyentuh aspek *production planning* (penjadwalan *campaign* antar-bijih), *reliability engineering* (strategi *turnaround*/TA), *supply chain* (kebutuhan asam sulfat, soda ash, dan bijih umpan), serta *sustainability engineering* (limbah BAP/Gypsum dan tailing netralisasi). Kerugian ekonomi akibat scaling diestimasikan mencapai USD 8–15 per ton bijih yang diproses, yang pada kapasitas pabrik HPAL 50.000 ton Ni/tahun berarti kerugian USD 25–45 juta per tahun (Dickson et al., 2026). Dokumen modul ini akan membedah secara kuantitatif perilaku scaling, formulasi matematis kinetika pembentukannya, metodologi rekayasa karakterisasi, dan strategi optimasi proses HPAL berdasarkan dua literatur ilmiah riil tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Asam dan Pembentukan Kerak

Reaksi pelindian nikel laterit pada HPAL mengikuti model *shrinking core* dengan lapisan produk Fe₂O₃ sebagai penghalang difusi. Untuk partikel bijih limonit, laju pelindian nikel dapat dinyatakan sebagai:

$$\frac{dX_{Ni}}{dt} = k_{Ni} \cdot \frac{C_{H^{+}}^{n}}{(1 - X_{Ni})^{2/3}}$$

di mana $X_{Ni}$ adalah fraksi nikel terlarut (0 ≤ X ≤ 1), $k_{Ni}$ adalah konstanta laju efektif (m/s), $C_{H^{+}}$ adalah konsentrasi asam sulfat bebas (mol/L), dan $n$ adalah orde reaksi terhadap ion hidrogen (tipikal $n \approx 0{,}5$–1,0 untuk limonit).

Pembentukan kerak hematit mengikuti reaksi *hydrolysis*:

$$2\text{Fe}^{3+} + 3\text{H}_2\text{O} \xrightarrow{T > 200°C} \text{Fe}_2\text{O}_3 \downarrow + 6\text{H}^{+}$$

sedangkan kerak jarosit (basic iron sulfate) mengikuti stoikiometri:

$$3\text{Fe}_3(\text{SO}_4)_2(\text{OH})_5 \cdot 2\text{H}_2\text{O} \text{ (jarosit)} \rightarrow \text{endapan padat pada dinding autoclave}$$

Model laju akumulasi kerak permukaan autoclave dideklarasikan oleh Dickson et al. (2026) mengikuti persamaan *deposition rate* berbasis fluks massa:

$$R_{scale} = k_{dep} \cdot (C_{Fe^{3+}, bulk} - C_{Fe^{3+}, sat}) - k_{diss} \cdot m_{scale}$$

dengan $R_{scale}$ laju pertumbuhan massa kerak per satuan luas (kg/m²·h), $k_{dep}$ koefisien deposisi (tergantung suhu dan shear rate agitator), $k_{diss}$ koefisien disolusi parsial, dan $m_{scale}$ akumulasi massa kerak. Konsentrasi saturasi $C_{sat}$ untuk Fe³⁺ dalam sistem sulfat-air pada suhu operasi HPAL:

$$C_{sat, Fe^{3+}} = C_0 \cdot \exp\left(-\frac{\Delta H_{diss}}{R \cdot T}\right)$$

dengan $\Delta H_{diss}$ entalpi disolusi hematit (~85 kJ/mol), $R$ konstanta gas universal (8,314 J/mol·K), dan $T$ suhu operasi (K). Pada $T = 543$ K (270°C), $C_{sat}$ turun drastis hingga hanya 0,02–0,08 mol/L dibanding ~1,2 mol/L pada suhu ruang.

### 2.2 Koefisien Perpindahan Panas dengan Efek Kerak

Untuk desain *heat exchanger* dan *jacket* autoclave, koefisien perpindahan panas overall $U$ didekati oleh model *thermal resistance network*:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal dan eksternal (W/m²·K), $\delta_{wall}$ tebal dinding bejana (tipikal 0,05–0,08 m baja karbon dilapis *rubber lining* + titanium), $k_{steel}$ konduktivitas baja (~45 W/m·K), $\delta_{scale}$ tebal kerak (m), dan $k_{scale}$ konduktivitas termal kerak hematit (0,4–1,2 W/m·K). Karena $k_{scale} \ll k_{steel}$, lapisan kerak sangat dominan menurunkan $U$ (Dickson et al., 2026).

### 2.3 Model Kinetika Desulfurisasi Pendukung

Andrameda et al. (2024) merumuskan efisiensi desulfurisasi residu HPAL sebagai:

$$\eta_{desulf} = \frac{S_0 - S_t}{S_0} \times 100\% = 1 - \exp(-k_{desulf} \cdot t)$$

dengan $S_0$ kadar sulfur awal residu (%wt), $S_t$ kadar sulfur setelah desulfurisasi pada waktu $t$ (menit), dan $k_{desulf}$ konstanta laju desulfurisasi yang bergantung pada suhu dan jenis agen. Andrameda et al. melaporkan $k_{desulf}$ untuk agen Na₂CO₃ mencapai $0{,}041$ min⁻¹ pada suhu 900°C (Andrameda et al., 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis strategi mitigasi scaling pada pabrik HPAL mengikuti kerangka **Plan–Do–Check–Act (PDCA)** yang dipadukan dengan **Reliability-Centered Maintenance (RCM)**. Diagram alir metodologi karakterisasi scaling menurut Dickson et al. (2026) adalah sebagai berikut:

```
[STEP 1] Pengambilan sampel kerak autoclave paska-shutdown
   ↓ (Sampling points: dinding, agitator, pipa discharge, baffle)
[STEP 2] Karakterisasi multi-dimensi:
   - XRD (X-Ray Diffraction) → identifikasi fasa kristal
   - SEM-EDS → morfologi & komposisi elemental
   - TGA-DSC → stabilitas termal & dekomposisi
   - ICP-OES → analisis leachate
   ↓
[STEP 3] Pemetaan ketebalan kerak (ultrasonic thickness gauge)
   ↓
[STEP 4] Perhitungan fouling resistance R_f:
   R_f = 1/U_fouled - 1/U_clean
   ↓
[STEP 5] Penentuan Cleaning Interval (CI) optimal:
   CI* = argmin {TC(CI)} = argmin {C_loss(CI) + C_clean}
   ↓
[STEP 6] Keputusan: CIP kimia (asam) vs.shutdown mekanis
```

**SOP Pengoperasian Autoclave HPAL** berbasis *best practice* industri nikel (Dickson et al., 2026):

1. **Pre-heating stage (Ramp-up 30–45 menit):** suhu dinaikkan dari ambient ke 200°C dengan gradien 4–6°C/menit, tekanan mengikuti kurva saturasi uap air.
2. **Leaching stage (60–90 menit, $T = 250$–270°C, $P = 40$–55 bar):** injeksi asam sulfat (180–250 kg H₂SO₄/ton bijih) dengan konsentrasi 95–98% w/w, agitasi 80–120 RPM.
3. **Discharge stage (15–25 menit):* flash cooling ke flash tank pada tekanan 4–6 bar.
4. **Acid wash / CIP (Cleaning-In-Place):** pencucian kerak dengan campuran 5–8% H₂SO₄ + 2% inhibitor (misalnya *Rodine*-type) pada 60–80°C selama 4–8 jam setiap 30–45 siklus.

Untuk jalur *roasting-reduction* residu HPAL (Andrameda et al., 2024), SOP mencakup: pengeringan residu pada 105°C selama 12 jam → pencampuran dengan agen desulfurisasi (rasio molar Na₂CO₃/S = 1,2–1,5) → roasting pada 800–950°C selama 60–120 menit → *water leaching* pada rasio S/L = 1:5 → filtrasi → recovery nikel–kobalt dari filtrat.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain Cleaning Interval Optimal Autoclave HPAL Kapasitas 50.000 ton Ni/tahun

**Input Parameter Industri:**
- Kapasitas umpan: $M_{feed} = 2.500$ ton bijih/hari
- Konsentrasi asam sulfat operasi: $C_{H^+} = 1{,}8$ mol/L
- Suhu operasi: $T = 543$ K (270°C)
- Tekanan operasi: $P = 50$ bar
- Diameter autoclave: $D = 4{,}5$ m; panjang efektif: $L = 28$ m
- Luas permukaan perpindahan panas: $A = \pi \cdot D \cdot L \approx 396$ m²
- Koefisien perpindahan panas awal (clean): $U_{clean} = 850$ W/m²·K
- Konduktivitas termal kerak hematit: $k_{scale} = 0{,}8$ W/m·K
- Laju pertumbuhan kerak rata-rata: $r_{scale} = 0{,}15$ mm/siklus (berdasarkan Dickson et al., 2026)

**Langkah Perhitungan:**

**Langkah 1:** Hitung koefisien perpindahan panas efektif sebagai fungsi jumlah siklus $n$:

$$\delta_{scale}(n) = n \cdot r_{scale} = n \cdot 0{,}15 \text{ mm}$$

$$\frac{1}{U(n)} = \frac{1}{U_{clean}} + \frac{\delta_{scale}(n)}{k_{scale}}$$

Untuk $n = 30$ siklus: $\delta_{scale} = 30 \times 0{,}15 = 4{,}5$ mm $= 0{,}0045$ m

$$\frac{1}{U(30)} = \frac{1}{850} + \frac{0{,}0045}{0{,}8} = 0{,}001176 + 0{,}005625 = 0{,}006801 \text{ m}^2\text{K/W}$$

$$U(30) = 147 \text{ W/m}^2\text{K} \quad (\text{penurunan } \approx 82{,}7\%)$$

**Langkah 2:** Hitung tambahan konsumsi energi pemanasan umpan akibat scaling.

Duty perpindahan panas required untuk heating feed slurry dari $T_{in} = 80°C$ ke $T_{op} = 270°C$:

$$Q_{req}(n) = \dot{m}_{slurry} \cdot c_p \cdot \Delta T / U(n)$$

Dengan $\dot{m}_{slurry} = 2.500 \times 2{,}5 = 6.250$ ton/hari (rasio S/L = 1:2,5), $c_p = 3{,}5$ kJ/kg·K, $\Delta T = 190$ K, maka *steam consumption* spesifik:

$$\dot{m}_{steam}(n) = \frac{\dot{m}_{slurry