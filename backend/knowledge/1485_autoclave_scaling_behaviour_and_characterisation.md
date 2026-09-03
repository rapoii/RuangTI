# 1485 — Rekayasa Autoclave HPAL: Karakterisasi dan Pengendalian Scaling pada Pelindian Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang mengalami transformasi struktural yang dipicu oleh meningkatnya permintaan baterai kendaraan listrik (*electric vehicle*/EV) dan stainless steel. Menurut Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* dengan DOI [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503), nikel laterit menyumbang sekitar 60–70% dari total cadangan nikel dunia namun hanya menghasilkan 40–50% produksi global karena kompleksitas metalurginya. Proses *High Pressure Acid Leaching* (HPAL) merupakan teknologi hidrometalurgi dominan untuk mengekstraksi nikel dari bijih laterit saprolit dan limonit, dengan suhu operasi tipikal 240–270 °C dan tekanan 35–55 bar dalam autoclave titanium-clad.

Permasalahan kritis yang menghambat keberlanjutan operasional HPAL adalah fenomena *autoclave scaling* — akresi endapan anorganik pada dinding internal, impeller, dan *baffle* autoclave yang secara langsung menurunkan efisiensi perpindahan panas, meningkatkan konsumsi asam sulfat, dan memaksa shutdown tidak terjadwal. Dickson et al. (2026) mendokumentasikan bahwa *scaling* dapat mengurangi kapasitas produksi hingga 25–30% dan menaikkan *specific acid consumption* sebesar 15–40 kg H₂SO₄ per ton bijih. Endapan ini terutama terbentuk dari gypsum (CaSO₄·2H₂O), alunit (KAl₃(SO₄)₂(OH)₆), jarosit (KFe₃(SO₄)₂(OH)₆), dan silika amorf hasil polimerisasi asam silikat.

Kompleksitas permasalahan diperparah oleh variasi komposisi umpan (*feed*) laterit yang sangat heterogen antar deposit — misalnya kadar MgO dapat berkisar 2–25%, Fe₂O₃ 10–60%, dan Al₂O₃ 1–10%. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa residu HPAL yang mengandung sulfur dan logam transisi (Fe, Ni, Co) memerlukan tahap *roasting-reduction* lanjutan dengan penambahan *desulfurization agent* seperti Na₂CO₃ atau CaO pada suhu 600–900 °C untuk mencapai pemulihan logam yang layak secara ekonomi. Sinergi antara karakterisasi scaling di autoclave dan optimalisasi proses reduksi residu menjadi pilar strategis dalam desain pabrik HPAL modern.

Urgensi rekayasa dari topik ini bersifat multi-dimensi: (1) **ekonomi** — biaya *downtime* autoclave mencapai USD 200.000–500.000 per hari untuk pabrik berkapasitas 30.000–50.000 ton nikel tahunan; (2) **lingkungan** — waste-to-product valorization residu HPAL mendukung prinsip *cleaner production* dan circular economy; (3) **keselamatan proses** — akumulasi scale berlebihan berisiko menyebabkan *hot spot*, korosi lokal, dan bahkan ledakan tekanan (*thermal runaway*); (4) **kapasitas** — availability factor autoclave harus dijaga ≥92% untuk memenuhi *key performance indicator* (KPI) proyek. Modul 1485 ini mengintegrasikan perspektif rekayasa proses, karakterisasi material, dan manajemen operasi untuk memberikan kerangka komprehensif bagi spesialis teknik industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian dan Pembentukan Scale

Kinetika pelindian nikel dari bijih laterit umumnya mengikuti model *shrinking core* (SCM) untuk partikel non-poros, dengan resistensi kontrol difusi lapisan边界 (*ash layer*) yang dominan pada suhu HPAL:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \cdot C_{H^+}^{n} \cdot t}{\rho_s \cdot r_0^2}$$

di mana $\alpha$ adalah fraksi konversi nikel, $k_s$ adalah konstanta kecepatan intrinsik (m·s⁻¹), $C_{H^+}$ adalah konsentrasi asam sulfat bebas (mol·L⁻¹), $n$ adalah orde reaksi parsial terhadap H⁺ (tipikal 0,5–1,2), $\rho_s$ adalah densitas partikel padat, dan $r_0$ adalah radius awal partikel. Pada kondisi HPAL, $k_s$ mengikuti persamaan Arrhenius:

$$k_s = k_0 \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi $E_a$ berkisar 45–75 kJ·mol⁻¹ untuk nikel laterit, dan $R = 8{,}314$ J·mol⁻¹·K⁻¹.

### 2.2 Model Pertumbuhan Scale pada Permukaan Autoclave

Pertumbuhan ketebalan scale $\delta(t)$ pada permukaan autoclave dapat dimodelkan sebagai proses dua tahap: (1) nukleasi heterogen, dan (2) deposisi partikel dengan reaksi permukaan. Persamaan konservasi massa pada fase scale menghasilkan:

$$\rho_{sc} \frac{d\delta}{dt} = k_m (C_{sat} - C_{bulk}) + k_r \cdot C_{bulk}^{m}$$

di mana $\rho_{sc}$ adalah densitas scale (1.600–2.300 kg·m⁻³ untuk gypsum-alunit mixture), $k_m$ adalah koefisien transfer massa (m·s⁻¹), $k_r$ adalah konstanta reaksi heterogen, $C_{sat}$ adalah konsentrasi jenuh spesies pengendap, dan $C_{bulk}$ adalah konsentrasi bulk. Pada regime awal (induction period $\tau_i$), ketebalan遵守 relasi:

$$\delta(t) = k_g (t - \tau_i)^{0{,}5}, \quad t > \tau_i$$

dengan $k_g$ mengikuti korelasi Arrhenius dengan $E_{a,g} \approx 30{-}55$ kJ·mol⁻¹.

### 2.3 Neraca Energi dan Perpindahan Panas Autoclave

Efektivitas perpindahan panas antara uap pemanas (*steam injection*) dan slurry HPAL yang menurun akibat scale mengikuti model resistansi termal seri:

$$\frac{1}{U} = \frac{1}{h_{steam}} + \frac{\delta_{wall}}{k_{steel}} + \frac{\delta_{sc}}{k_{sc}} + \frac{1}{h_{slurry}}$$

Koefisien perpindahan panas overall $U$ (W·m⁻²·K⁻¹) mengalami degradasi seiring pertumbuhan scale karena konduktivitas termal scale $k_{sc}$ sangat rendah (0,3–1,1 W·m⁻¹·K⁻¹ untuk gypsum), dibanding baja autoclave $k_{steel} \approx 16$ W·m⁻¹·K⁻¹. Konsumsi steam spesifik meningkat menurut:

$$\dot{m}_{steam} \propto \frac{1}{U} \propto \delta_{sc}^{0.6{-}0.8}$$

### 2.4 Kinetika Reduksi Residu HPAL (Pendukung)

Andrameda et al. (2024) memodelkan proses *roasting-reduction* residu HPAL dengan *desulfurization agent* menggunakan pendekatan reaksi padat-gas:

$$\frac{dX}{dt} = k_r (1-X)^{p}$$

dengan $X$ sebagai konversi sulfur, dan parameter kinetik bergantung pada jenis *desulfurization agent* (CaO, Na₂CO₃, atau campuran), suhu (500–950 °C), dan waktu tinggal (15–120 menit).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Karakterisasi Multi-Skala Scale

Dickson et al. (2026) mengusulkan protokol karakterisasi bertingkat yang terdiri dari:

**Tahap I — *In-situ* Monitoring:**
- *Pressure differential transmitter* (PDT) dipasang pada inlet dan outlet autoclave untuk mendeteksi peningkatan $\Delta P$ akibat penebalan scale.
- *Wall temperature thermocouple* (WTT) pada zona kritis (typically di sekitar *compartments* 2 dan 3 dari 4-compartment autoclave) mengukur degradasi $U$.
- *Online slurry sampling* dengan *laser diffraction particle sizer* untuk memantau perubahan distribusi ukuran partikel.

**Tahap II — *Ex-situ* Characterization saat Shutdown Terjadwal:**
1. **Visual inspection & thickness mapping** menggunakan *ultrasonic thickness gauge* (UTG) pada grid 0,5 × 0,5 m di seluruh dinding internal.
2. **Sampling representatif** (minimum 5 lokasi per compartment) untuk analisis laboratorium.
3. **X-Ray Diffraction (XRD)** untuk identifikasi fase mineralogi dengan software Rietveld refinement (TOPAS/Bruker).
4. **Scanning Electron Microscopy–Energy Dispersive X-ray (SEM-EDX)** untuk morfologi dan mikro-komposisi.
5. **Thermogravimetric Analysis (TGA-DSC)** untuk stabilitas termal dan kadar air kristalin.
6. **Inductively Coupled Plasma–Optical Emission Spectrometry (ICP-OES)** untuk komposisi kimia total.

### 3.2 SOP Pembersihan dan Pencegahan Scale

Standar prosedur operasional pembersihan (*acid boil* / *caustic wash*) mengikuti siklus:

```
┌─────────────────────────────────────────────┐
│ Step 1: Cooling & depressurization (T<50°C) │
│ Step 2: Drain slurry & flush water          │
│ Step 3: Acid boil (5-15% H₂SO₄, 80-90°C,   │
│          4-8 jam) untuk dissolusi gypsum     │
│ Step 4: Caustic wash (5-10% NaOH, 70°C,     │
│          3-6 jam) untuk dissolusi alunit     │
│ Step 5: High-pressure water jet (150-250    │
│          bar) untuk removal residu mekanis   │
│ Step 6: Inspection & UTG verification       │
│ Step 7: Re-commissioning & ramp-up          │
└─────────────────────────────────────────────┘
```

### 3.3 Integrasi dengan Proses Reduksi Residu

Berdasarkan Andrameda et al. (2024), *desulfurization agent* CaO pada konsentrasi 10–15% massa residu, suhu 750–850 °C, dan waktu tinggal 60–90 menit menghasilkan tingkat desulfurisasi terbaik (≥85%) dengan pemulihan Ni residual melalui magnetic separation. SOP integrasi:

1. Pengeringan residu HPAL (moisture <5%).
2. Pencampuran dengan CaO rasio stoikiometri + 20% excess.
3. *Roasting* di rotary kiln dengan atmosfer sedikit reduktif (excess air 5–10%).
4. *Water leaching* selektif untuk sulfat larut.
5. *Magnetic separation* pada residu tereduksi untuk konsentrat Fe–Ni.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik HPAL 40.000 ton Ni/tahun

**Parameter desain (diadaptasi dari Dickson et al., 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Feed rate bijih | 285 | t/jam |
| Konsentrasi slurry | 45 | % solid |
| Suhu operasi | 255 | °C |
| Tekanan operasi | 42 | bar |
| Konsentrasi H₂SO₄ initial | 98 | g/L |
| Diameter autoclave | 5,0 | m |
| Panjang total autoclave | 36 | m |
| Material dinding | Baja karbon + Ti clad (3 mm) | — |

### 4.2 Perhitungan Ketebalan Scale dan Dampak Termal

Asumsikan data operasi selama satu *campaign* 90 hari menunjukkan