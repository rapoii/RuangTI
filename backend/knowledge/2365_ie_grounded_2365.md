# 2365 — Rekayasa Autoclave dan Karakterisasi Scaling pada Proses High-Pressure Acid Leaching (HPAL) Bijih Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang mengalami pergeseran paradigma yang signifikan. Dengan semakin menipisnya cadangan bijih nikel sulfida primer yang grade-nya tinggi, bijih nikel laterit — yang mencakup lebih dari 60% cadangan nikel terrestre namun hanya menyumbang ~40% produksi nikel dunia — menjadi sumber daya strategis yang semakin penting, terutama untuk memenuhi permintaan baterai lithium-ion kendaraan listrik (EV) yang diproyeksikan mencapai >3 juta ton Ni per tahun pada 2030. Dalam konteks ini, Dickson, Deleau, dan Espitalier (2026) menyoroti bahwa proses High-Pressure Acid Leaching (HPAL) merupakan satu-satunya rute hidrometalurgi yang secara teknis dan ekonomik viable untuk mengekstraksi nikel dan kobalt dari bijih laterit limonitik dengan kadar Ni rendah (0,8–1,5%) (Dickson et al., 2026, *Cleaner Waste Systems*, DOI: 10.1016/j.clwas.2026.100503).

Namun, HPAL menghadapi tantangan operasional yang sangat spesifik dan merugikan secara ekonomis: **autoclave scaling** — yaitu pengendapan lapisan kerak (scale) pada dinding, agitator, dan komponen internal autoclave. Dickson et al. (2026) mendokumentasikan bahwa fenomena scaling ini menurunkan plant availability rata-rata 4–8% per tahun, meningkatkan specific acid consumption 8–15%, dan menambah specific energy consumption hingga 20% karena degradasi koefisien perpindahan panas pada dinding autoclave. Studi mereka mengkuantifikasi bahwa laju pertumbuhan scale pada operasi komersial dapat mencapai 1,5–4 mm/hari, dengan komposisi dominan berupa hematit (Fe₂O₃), alunit (KAl₃(SO₄)₂(OH)₆), dan magnesium sulfat terhidrasi.

Di sisi hilir yang saling melengkapi, Andrameda, Triaswinanti, dan Madra (2024) dari *AIP Conference Proceedings* (DOI: 10.1063/5.0186417) menunjukkan bahwa pengelolaan residu HPAL melalui *roasting-reduction* dengan agen desulfurisasi (Na₂CO₃, CaO, atau NaOH) pada suhu 600–900°C mampu mengubah fasa skala menjadi fasa yang lebih stabil dan recoverable, sekaligus meningkatkan recovery Fe sebagai byproduct pig iron (Andrameda et al., 2024). Integrasi kedua perspektif ini — karakterisasi scale in-situ (Dickson et al.) dan pengelolaan residu (Andrameda et al.) — menjadi kerangka kerja rekayasa sistem terpadu untuk meningkatkan sustainability dan circular economy industri HPAL.

Urgensi permasalahan ini menjadi semakin nyata karena Indonesia, sebagai penghasil nikel laterit terbesar dunia, memiliki beberapa proyek HPAL dalam tahap konstruksi dan commissioning (contoh: proyek Halmahera, Sulawesi) yang memerlukan pedoman rekayasa presisi untuk mengontrol scaling. Studi ini menyediakan fondasi saintifik untuk: (1) memprediksi laju scaling berdasarkan parameter operasi; (2) mengoptimasi protocol acid washing & descaling; (3) meningkatkan availability autoclave; dan (4) mengintegrasikan pengelolaan residu untuk mendukung ekonomi sirkular sesuai prinsip *Cleaner Waste Systems* yang menjadi nama jurnal utama sitasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika dan Kinetika Leaching

Proses HPAL berlangsung pada rentang suhu $T = 240{-}270°\mathrm{C}$ dan tekanan $P = 35{-}45~\mathrm{bar}$ dengan larutan $\mathrm{H_2SO_4}$ 30–50 g/L. Reaksi leaching utama untuk limonit mengikuti stoikiometri:

$$\mathrm{NiO \cdot Fe_2O_3 + 4\,H_2SO_4 \rightarrow NiSO_4 + Fe_2(SO_4)_3 + 4\,H_2O}$$

Kinetika leaching Ni dari limonit mengikuti model shrinking-core dengan kontrol difusi melalui lapisan produk:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_p \cdot C_{H^+}^{n} \cdot t}{r_0^2}$$

di mana $\alpha$ adalah fraksi konversi, $k_p$ adalah konstanta laju spesifik ($k_p \approx 8{,}5 \times 10^{-4}~\mathrm{m/s}$ untuk Ni pada 250°C), $C_{H^+}$ adalah konsentrasi asam (mol/L), $n$ adalah orde reaksi asam ($n \approx 1{,}2{-}1{,}5$), $r_0$ jari-jari partikel awal, dan $t$ adalah waktu tinggal (Dickson et al., 2026).

### 2.2 Model Pertumbuhan Scale

Pertumbuhan scale pada dinding autoclave mengikuti **parabolic growth kinetics** yang dikontrol oleh difusi ion melalui lapisan scale yang sudah terbentuk:

$$\frac{dx_{scale}}{dt} = \frac{D_{eff} \cdot (C_{sat} - C_{bulk})}{x_{scale}}$$

Integrasi terhadap waktu menghasilkan:

$$x_{scale}(t) = \sqrt{2 \cdot D_{eff} \cdot (C_{sat} - C_{bulk}) \cdot t} = \sqrt{k_{scale} \cdot t}$$

dengan $x_{scale}$ ketebalan scale (m), $D_{eff}$ koefisien difusi efektif ($\mathrm{m^2/s}$), $C_{sat}$ konsentrasi jenuh, $C_{bulk}$ konsentrasi bulk larutan, dan $k_{scale}$ konstanta pertumbuhan parabolic.

Dependensi temperatur mengikuti hukum Arrhenius:

$$k_{scale} = k_0 \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi tipikal $E_a = 45{-}75~\mathrm{kJ/mol}$ untuk scale berbasis hematit dan $E_a = 60{-}90~\mathrm{kJ/mol}$ untuk alunit (Dickson et al., 2026).

### 2.3 Degradasi Perpindahan Panas

Scale memiliki konduktivitas termal rendah ($\lambda_{scale} = 0{,}3{-}1{,}2~\mathrm{W/(m \cdot K)}$) dibanding baja ($\lambda_{steel} \approx 45~\mathrm{W/(m \cdot K)}$). Koefisien perpindahan panas overall (U-value) dinyatakan:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{x_{scale}}{\lambda_{scale}} + \frac{x_{wall}}{\lambda_{wall}} + \frac{1}{h_o}$$

Laju aliran kalor ke slurry:

$$q = U \cdot A \cdot \Delta T_{LMTD}$$

Penurunan $U$ akibat scale setebal $x_{scale} = 10~\mathrm{mm}$ dapat menyebabkan peningkatan specific steam consumption sebesar 18–25%, yang langsung menggerus margin operasi.

### 2.4 Neraca Massa Asam dan Konsumsi Specific

Konsumsi asam spesifik ($\mathrm{kg~H_2SO_4 / ton~ore}$) dimodelkan sebagai:

$$\eta_{acid} = a_1 \cdot [\mathrm{Fe}] + a_2 \cdot [\mathrm{Al}] + a_3 \cdot [\mathrm{Mg}] + a_4 \cdot [\mathrm{Ni}] + a_5 \cdot [\mathrm{Co}]$$

dengan koefisien stoikiometri $a_i$ yang pada operasi HPAL tipikal bernilai $a_1 \approx 2{,}5$ untuk Fe (refeeding sebagai hematit), $a_2 \approx 3{,}0$ untuk Al, $a_3 \approx 2{,}0$ untuk Mg, dan $a_4 \approx 1{,}0$ untuk Ni (Dickson et al., 2026).

### 2.5 Kinetika Desulfurisasi Residu

Andrameda et al. (2024) menurunkan persamaan desulfurisasi residu HPAL dengan agen Na₂CO₃:

$$\mathrm{Na_2CO_3 + MgSO_4 \rightarrow Na_2SO_4 + MgCO_3}$$

dengan konversi sulfur yang dimodelkan menggunakan shrinking unreacted-core model:

$$1 - (1 - \alpha_R)^{1/3} = \frac{k_d \cdot C_{ag}}{r_0 \cdot \rho_R} \cdot t$$

dimana $k_d = 2{,}1 \times 10^{-4}~\mathrm{m/s}$ pada 700°C, dengan orde reaksi terhadap agen desulfurisasi $C_{ag}$ mendekati 1.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Integrated Scale Management

```
┌─────────────────────────────────────────────────────────────┐
│              FEED PREPARATION & GRINDING                    │
│  Bijih laterit → Ball mill → Ukuran < 75 μm → Slurry 45%   │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│        PRE-LEACH (Atmospheric Acid Mixing)                   │
│  H2SO4 98% dosing → pH 1,5–2,0 → Flash tank                │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  AUTOCLAVE TRAIN (4–6 Compartments, 250°C, 40 bar)          │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐    │
│  │ Stage 1  │ Stage 2  │ Stage 3  │ Stage 4  │ Stage 5  │    │
│  │ 245°C    │ 250°C    │ 250°C    │ 248°C    │ 240°C    │    │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘    │
│  Continuous monitoring: T, P, pH, ORP, scale probe          │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           CCD COUNTER-CURRENT DECANTATION                   │
│  Solid-liquid separation → Pregnant liquor → Neutralization │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│         SCALE MITIGATION SUBSYSTEM                          │
│  • Online scale thickness probe (ultrasonic)                │
│  • Acid wash cycle (scheduled every 30–45 hari)             │
│  • Antiscalant injection (polyacrylate 5–15 ppm)            │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│      RESIDUE PROCESSING (Andrameda et al., 2024)            │
│  • Desulfurization (Na2CO3, 700°C, 2 jam)                   │
│  • Roasting-reduction (coke/coal, 900°C, 4 jam)             │
│  • Magnetic separation → Pig iron + Slag (cement)            │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Pemantauan Scale In-Situ

Dickson et al. (2026) merekomendasikan protokol **Real-Time Scale Monitoring** dengan langkah sebagai berikut:

1. **Instalasi sensor ultrasonic** pada dinding autoclave setiap 4–6 m² luas permukaan, dengan resolusi pengukuran $\pm 0{,}5~\mathrm{mm}$ dan akuisisi data setiap 60 detik.
2. **Kalibrasi temperatur referensi** $T_{ref}$ dengan akurasi $\pm 1°C$ menggunakan RTD Pt-100 Class A.
3. **Threshold alarm** diaktifkan pada $x_{scale} \geq 8~\mathrm{mm}$ (alarm dini), $x_{scale} \geq 12~\mathrm{mm}$ (peringatan kritis),