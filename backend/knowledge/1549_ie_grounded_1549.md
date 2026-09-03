# 1549 — Perilaku dan Karakterisasi Kerak Autoclave dalam Pelindian Bijih Nikel Laterit pada Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nikel dari bijih laterit menghadapi tantangan operasional yang sangat spesifik karena semakin menurunnya cadangan bijih sulfida (pentlandit) berkualitas tinggi, sehingga industri global beralih ke bijih laterit yang menyumbang lebih dari 70% cadangan nikel dunia namun hanya menghasilkan ~30% produksi global karena kompleksitas metalurginya (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)). Teknologi *High-Pressure Acid Leaching* (HPAL) merupakan metode hidrometalurgi paling efisien untuk mengekstraksi nikel dan kobalt dari bijih laterit jenis limonit dan saprolit, dengan operasi pada suhu 240–270 °C dan tekanan 35–45 bar dalam autoclave multilantai (multi-compartment autoclave). Namun, salah satu bottleneck operasional terbesar adalah fenomena *autoclave scaling*, yaitu pengendapan kerak anorganik pada dinding dan agitator autoclave yang menurunkan efisiensi perpindahan panas secara signifikan, meningkatkan konsumsi energi spesifik, dan memaksa shutdown prematur untuk descaling manual/mekanis.

Studi yang dipublikasikan oleh Dickson dkk. (2026) menyoroti bahwa kehilangan produktivitas akibat scaling dapat mencapai 15–25% dari total *on-stream time* pada plant HPAL komersial, dengan estimasi kerugian ekonomi tahunan mencapai USD 30–80 juta untuk plant berkapasitas 30.000–50.000 ton nikel per tahun. Urgensi ekonomis ini diperparah oleh tuntutan keberlanjutan: semakin ketatnya regulasi *carbon footprint* dan target *zero liquid discharge* memaksa operator HPAL untuk meminimalisir konsumsi asam sulfat berlebih (oversupply H₂SO₄) yang justru mempercepat laju scaling. Andrameda, Triaswinanti, dan Madra (2024) dalam studi komplementernya menunjukkan bahwa proses pra-perlakuan desulfurisasi dan *roasting-reduction* terhadap bijih/residu HPAL dapat memodifikasi profil mineralogi umpan, sehingga secara langsung memengaruhi komposisi dan morfologi kerak autoclave (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)).

Konteks strategis bagi praktisi Teknik Industri adalah bagaimana mengintegrasikan variabel-variabel metalurgi ini ke dalam kerangka optimasi sistem produksi: perencanaan kapasitas, penjadwalan shutdown, *total cost of ownership* (TCO), dan *key performance indicators* (KPI) keberlanjutan. Modul ini akan membedah perilaku scaling secara kuantitatif, formulasi matematis laju pengendapan, dan integrasi ke dalam keputusan rekayasa proses.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Pembentukan Kerak Autoclave

Kerak autoclave HPAL terutama terbentuk melalui dua mekanisme dominan:

1. **Reaksi Reverse-Sticking Silica (RSS):** Pada pH < 1 dan suhu > 200 °C, asam silikat (H₄SiO₄) dalam larutan mengalami polimerisasi dan deposisi sebagai silica gel amorf, mengikuti reaksi:
$$\text{n H}_4\text{SiO}_4 \longrightarrow (\text{H}_2\text{SiO}_3)_n + n\text{ H}_2\text{O}$$

2. **Presipitasi Senyawa Hematit/Alumino-Hematit:** Ion Fe³⁺ dan Al³⁺ yang jenuh (supersaturation) mengendap sebagai hematit (α-Fe₂O₃), alunit/jarosit, atau kompleks Fe-Al-OH:
$$\text{Fe}^{3+} + 2\text{H}_2\text{O} \longrightarrow \text{FeOOH}_{(s)} + 3\text{H}^+$$
$$\text{Al}^{3+} + 3\text{H}_2\text{O} \longrightarrow \text{Al(OH)}_{3(s)} + 3\text{H}^+$$

### 2.2 Model Kinetika Laju Scaling

Berdasarkan pendekatan Dickson dkk. (2026), laju deposisi kerak di permukaan logam autoclave mengikuti hukum *diffusion-controlled deposition* analogi dengan model Levêque:

$$J_s = 0.538 \cdot D_s \cdot \left(\frac{\rho \cdot u}{L}\right)^{1/3} \cdot \left(\frac{\Delta C_s}{\nu}\right)^{1/3}$$

di mana:
- $J_s$ = fluks massa scaling (kg·m⁻²·jam⁻¹)
- $D_s$ = koefisien difusi spesies pembentuk kerak (m²·s⁻¹)
- $\rho$ = densitas fluida slurry (kg·m⁻³)
- $u$ = kecepatan tangensial agitator (m·s⁻¹)
- $L$ = panjang karakteristik dinding (m)
- $\Delta C_s$ = gradien konsentrasi spesies jenuh vs bulk (kmol·m⁻³)
- $\nu$ = viskositas kinetik slurry (m²·s⁻¹)

Ketebalan kerak kumulatif pada waktu operasi $t$ mengikuti integrasi:

$$\delta(t) = \int_0^t \frac{J_s(\tau)}{\rho_{crust}} \, d\tau$$

di mana $\rho_{crust}$ adalah densitas kerak terkompaksi (~1.500–1.800 kg·m⁻³ untuk silica-hematit composite).

### 2.3 Model Perpindahan Panas dengan Resistansi Kerak

Efek kerak terhadap koefisien perpindahan panas keseluruhan (U) mengikuti konsep resistansi seri:

$$\frac{1}{U_{eff}} = \frac{1}{U_0} + \frac{\delta}{k_{crust}}$$

di mana:
- $U_0$ = koefisien perpindahan panas pada dinding bersih (~2.000–2.500 W·m⁻²·K⁻¹)
- $k_{crust}$ = konduktivitas termal kerak (0,3–0,7 W·m⁻¹·K⁻¹ untuk kerak amorf basah)
- $\delta$ = ketebalan kerak (m)

Dampak terhadap waktu pemanasan slurry dalam autoclave batch/continuous:

$$\Delta t_{heat} = \frac{m \cdot c_p}{A \cdot U_{eff}} \cdot \ln\left(\frac{T_{steam} - T_{in}}{T_{steam} - T_{out}}\right)$$

### 2.4 Keseimbangan Massa Asam dan Korelasi Scaling

Konsumsi spesifik asam sulfat (kg H₂SO₄ per ton bijih kering) berkorelasi positif dengan laju scaling melalui parameter $R_{acid}$:

$$R_{acid} = \frac{m_{H_2SO_4}}{m_{ore,dry}}$$

Secara empiris (Andrameda dkk., 2024), penambahan 1% agen desulfurisasi (seperti Na₂CO₃ atau CaO) pada tahap pretreatment menurunkan laju scaling rata-rata sebesar 12–18% karena reduksi konsentrasi sulfat bebas dan ion logam berat yang ikut terpresipitasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian scaling pada plant HPAL mengikuti siklus PDCA (*Plan-Do-Check-Akt*) dengan struktur SOP sebagai berikut:

### 3.1 Tahap Plan — Karakterisasi Umpan dan Prediksi Scaling

```
┌──────────────────────────────────────────────────┐
│  INPUT: Komposisi mineralogi bijih laterit       │
│  → XRF + XRD analysis (%Fe, %Mg, %Al, %Si, %S)  │
│  ↓                                               │
│  Perhitungan saturasi indeks (SI):              │
│  SI = log(IAP/Ksp) untuk SiO₂, Fe₂O₃, Al(OH)₃  │
│  ↓                                               │
│  PREDIKSI: jika SI > 0 → risiko scaling tinggi  │
│  → Rekomendasi pretreatment / seeding adjustment │
└──────────────────────────────────────────────────┘
```

### 3.2 Tahap Do — Operasi Autoclave Terkendali

**Parameter operasi kritis (COP) yang harus dimonitor real-time:**

| Parameter | Set Point | Toleransi | Dampak pada Scaling |
|-----------|-----------|-----------|---------------------|
| Suhu autoclave (T) | 250 °C | ±5 °C | T↑ → RSS↑, Hematit↓ |
| Tekanan (P) | 40 bar | ±1 bar | Stabilitas fase |
| pH slurry outlet | 1,2–1,5 | ±0,2 | pH↑ → Al(OH)₃↑ |
| Kecepatan agitator (N) | 90–110 rpm | ±5 rpm | N↑ → δ↓ (shear thinning) |
| Solid-to-liquid ratio | 1:3 | ±0,1 | Mengencerkan supersaturasi |
| Konsentrasi asam bebas | 35–55 g/L H₂SO₄ | ±3 g/L | Asam↑ → RSS↑ |

### 3.3 Tahap Check — Inspeksi dan Pengukuran Kerak

1. **Ultrasonic Thickness Gauge (UTG):** pengukuran ketebalan kerak pada titik-titik referensi dinding tiap 250 jam operasi.
2. **Coupon Analysis:** pemasangan *corrosion-scaling coupon* (baja karbon rendah ASTM A36) di dalam autoclave, ditimbang dan dianalisis XRD/SEM-EDS tiap siklus 720 jam.
3. **Heat Flux Monitoring:** pemasangan termokopel multi-titik untuk menghitung $U_{eff}$ aktual.

### 3.4 Tahap Akt — Tindakan Perbaikan

- **Descaling kimiawi:** injeksi larutan HF 2–5% atau campuran HF/HNO₃ dengan sirkulasi pada suhu 60–80 °C selama 8–12 jam.
- **Mechanical pigging:** penggunaan *high-pressure water jet* (200–300 bar) untuk kerak adherent.
- **Seeding optimization:** injeksi partikel silica atau hematit halus (5–20 µm) sebagai *nucleation sites* agar kerak tumbuh di suspensi (bulk) bukan di dinding.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Plant

Sebuah plant HPAL di Sulawesi Tenggara mengolah bijih limonit dengan kapasitas 1.500 ton bijih kering per hari. Autoclave 4-kompartemen dengan diameter dalam 4,2 m dan panjang total 28 m. Umpan memiliki komposisi: Fe 38%, Mg 4,2%, Al 2,8%, SiO₂ 1,6%, Ni 1,1%.

### 4.2 Perhitungan Ketebalan Kerak Kumulatif

**Data operasi:**
- $D_s$ (silisat) = $1{,}2 \times 10^{-9}$ m²/s (pada 250 °C)
- $\rho$ slurry = 1.350 kg/m³
- $u$ = 1,8 m/s
- $L$ = 7 m (per kompartemen)
- $\Delta C_s$ = 0,015 kmol/m³
- $\nu$ = $8{,}5 \times 10^{-7}$ m²/s
- $\rho_{crust}$ = 1.700 kg/m³

**Langkah 1: Hitung fluks scaling**
$$J_s = 0{,}538 \cdot (1{,}2 \times 10^{-9}) \cdot \left(\frac{1350 \cdot 1{,}8}{7}\right)^{1/3} \cdot \left(\frac{0{,}015}{8{,}5 \times 10^{-7}}\right)^{1/3}$$

Hitung setiap komponen:
- $\left(\frac{1350 \cdot 1{,}8}{7}\right)^{1/3} = (347{,}14)^{1/3} = 7{,}03$
- $\left(\frac{0{,}015}{8{,}5 \times 10^{-7}}\right)^{1/3} = (17.647)^{1/3} = 26{,}03$

$$J_s = 0{,}538 \cdot 1{,}2 \times 10^{-9} \cdot 7{,}03 \cdot 26{,}03 = 1{,}18 \times 10^{-7} \text{ kg/(m²·s)}$$

Konversi ke satuan jam: $J_s = 1{,}18 \times 10^{-7} \cdot 3.600 = 4{,}25 \times 10^{-4}$ kg/(m²·jam)

**Langkah 2: Ketebalan setelah 720 jam operasi (30 hari)**

Asumsi fluks konstan (steady scaling):
$$\delta(720) = \frac{J_s \cdot t}{\rho_{crust}} = \frac{4{,}25 \times 10^{-4} \cdot 720}{1.700} = 1{,}8 \times 10^{-4} \text{ m} = 0{,}18 \text{ mm}$$

**Langkah 3: Dampak pada perpindahan panas**

Dengan $U_0 = 2.200$ W/(m²·K) dan $k_{crust} = 0{,}5$ W/(m·K):

$$\frac{1}{U_{eff}} = \frac{1}{2.200} + \frac{0{,}00018}{0{,}5} = 4{,}55 \times 10^{-4} + 3{,}6 \times 10^{-4} = 8{,}15 \times 10^{-4}$$

$$U_{eff} = 1.227 \text{ W/(m²·K)}$$

Penurunan koefisien perpindahan panas: $\frac{2.200 - 1.227}{2.200} \times 100\% = 44{,}2\%$

**Langkah 4: Konsumsi energi tambahan**

Luas permukaan panas autocl