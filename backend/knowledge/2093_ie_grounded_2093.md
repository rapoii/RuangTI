# 2093 — Perilaku dan Karakteristik *Scaling* Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL: Analisis Rekayasa, Kinetika Korosi-Fouling, dan Strategi Mitigasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan nikel laterit berbasis *High Pressure Acid Leaching* (HPAL) merupakan tulang punggung strategis transisi energi global, khususnya untuk memenuhi permintaan *Class 1 nickel* bagi baterai kendaraan listrik (*lithium-ion battery*) dan stainless steel austenitik. Indonesia, sebagai produsen nikel laterit terbesar dunia dengan kontribusi lebih dari 38% produksi global pada 2024, mengandalkan teknologi HPAL yang beroperasi pada temperatur 240–270 °C dan tekanan 30–45 bar di dalam autoclave *titanium-clad* (Dickson, Deleau & Espitalier, 2026). Dalam kerangka *cleaner production*, isu *autoclave scaling* — akumulasi deposit anorganik pada dinding dan komponen internal autoclave — menjadi salah satu bottleneck operasional paling signifikan yang menentukan availabilitas pabrik, konsumsi energi spesifik, dan total biaya operasional *Life-Cycle Cost* (LCC).

Dickson, Deleau dan Espitalier (2026) dalam *Cleaner Waste Systems* mendokumentasikan bahwa deposit *scaling* di autoclave HPAL terbentuk melalui mekanisme kristalisasi *basic iron sulfate* (FeOHSO₄), hematit (α-Fe₂O₃), anhydrit (CaSO₄), dan sodium jarosit [NaFe₃(SO₄)₂(OH)₆] yang menempel pada permukaan paduan titanium dan *refractory lining*. Studi ini menegaskan bahwa ketebalan *scale* dapat mencapai 5–15 mm setelah 30–60 hari operasi kontinyu, yang menurunkan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient*, U) hingga 40% dan menambah konsumsi spesifik asam sulfat (H₂SO₄) per ton bijih. Andrameda, Triaswinanti dan Madra (2024) dari *AIP Conference Proceedings* melengkapi gambaran ini dengan menunjukkan bahwa proses *roasting-reduction* pra-HPAL pada residu nikel laterit, melalui kontrol agen desulfurisasi, temperatur, dan waktu tinggal, mampu memodifikasi komposisi fasa sehingga menurunkan potensi pengendapan kembali di dalam autoclave, sekaligus meningkatkan *recovery* Ni menjadi >92% dan Co >88%. Integrasi kedua referensi ini menunjukkan bahwa strategi *front-end ore preparation* dan *back-end scaling management* harus dirancang sebagai satu sistem rekayasa terpadu.

Urgensi ekonomis industri ini sangat nyata: dengan kapasitas tipikal autoclave 4.500–5.500 m³ pada kompleks HPAL modern, downtime 24 jam akibat *acid wash* descaling dapat menimbulkan kerugian *opportunity cost* produksi mixed hydroxide precipitate (MHP) setara USD 1,2–2,0 juta per shift (Dickson dkk., 2026). Oleh karena itu, pengembangan model kuantitatif perilaku *scaling*, karakterisasi deposit, dan SOP mitigasi menjadi esensial bagi spesialis teknik industri untuk merancang sistem produksi yang *robust*, *predictable*, dan *sustainable*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika dan Kinetika Pelindian HPAL

Reaksi pelindian mineral limonit dan saprolit dalam autoclave HPAL mengikuti model kinetika *shrinking core* dengan difusi melalui lapisan produk (Levenspiel, 1999). Persamaan umum tingkat konversi fraksional $\alpha$ terhadap waktu $t$ adalah:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \cdot C_{A}^{n}}{\rho_B \cdot r_p} \cdot t$$

di mana $k_s$ adalah konstanta kecepatan reaksi permukaan (m/s), $C_A$ konsentrasi reaktan H₂SO₄ (kmol/m³), $n$ orde reaksi, $\rho_B$ densitas partikel bijih (kg/m³), dan $r_p$ jari-jari awal partikel (m). Untuk mineralisasi laterit, Dickson dkk. (2026) menunjukkan bahwa orde reaksi pseudo-first-order berlaku pada rentang $C_A$ = 0,8–1,5 M dengan energi aktivasi:

$$k_s = A \cdot e^{-E_a/RT}$$

dengan $E_a$ = 65–78 kJ/mol untuk fase goethit (α-FeOOH) dan 48–55 kJ/mol untuk fase serpentin. Variasi $E_a$ ini menentukan strategi *temperature ramp profile* di dalam autoclave.

### 2.2 Model Pertumbuhan *Scaling*

Deposisi *scaling* dimodelkan sebagai laju penebalan film $\delta(t)$ yang tergantung pada laju presipitasi, adhesi, dan re-dissolution:

$$\frac{d\delta}{dt} = \frac{k_p \cdot (C_{sat} - C_{bulk})}{\rho_{scale}} - k_r \cdot \delta$$

dengan $k_p$ koefisien presipitasi (m/s), $C_{sat}$ konsentrasi saturasi, $C_{bulk}$ konsentrasi bulk larutan, $\rho_{scale}$ densitas deposit (≈ 2.800–3.200 kg/m³ untuk hematit, 2.970 kg/m³ untuk jarosit), dan $k_r$ koefisien *self-cleaning* akibat turbulensi. Persamaan diferensial ini menghasilkan solusi asimtotik:

$$\delta(t) = \delta_{max}\left(1 - e^{-k_r t}\right), \quad \text{dengan} \quad \delta_{max} = \frac{k_p(C_{sat}-C_{bulk})}{k_r \rho_{scale}}$$

### 2.3 Penurunan Koefisien Perpindahan Panas

Tahanan termal total dinding autoclave dengan *scale* mengikuti model resistansi seri:

$$\frac{1}{U_{eff}} = \frac{1}{h_{in}} + \frac{\delta_{scale}}{k_{scale}} + \frac{\delta_{wall}}{k_{Ti}} + \frac{1}{h_{out}}$$

di mana $h_{in}$ dan $h_{out}$ adalah koefisien konveksi di sisi dalam (leach slurry) dan luar (steam). Karena $k_{scale}$ hanya 0,35–1,20 W/m·K versus $k_{Ti}$ = 21,9 W/m·K, setiap milimeter deposit setara dengan 18–63 mm titanium murni dalam hal tahanan termal — menjelaskan mengapa *scale* 8 mm sudah cukup menurunkan steam economy secara drastis (Dickson dkk., 2026).

### 2.4 Konsumsi Asam dan Neraca Massa

Konsumsi spesifik asam sulfat mengikuti model:

$$M_{H_2SO_4} = \sum_i \nu_i \cdot x_i \cdot \frac{MW_{H_2SO_4}}{MW_i} \cdot m_{ore}$$

dengan $\nu_i$ stoikiometri mol H₂SO₄ per mol mineral $i$, $x_i$ fraksi massa mineral, $MW$ berat molekul, dan $m_{ore}$ massa umpan. Andrameda dkk. (2024) menunjukkan bahwa melalui *pre-roasting* dengan aditif CaO dan Na₂CO₃ sebagai agen desulfurisasi, konsumsi H₂SO₄ dapat turun dari 480 menjadi 380 kg/ton bijih, sekaligus mengurangi pembentukan *basic iron sulfate* yang menjadi prekursor *scaling*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses HPAL dan Titik Kritis *Scaling*

Diagram alir rekayasa HPAL-*scaling management* terdiri atas empat subsistem utama:

```
[Run-of-Mine] → [Crushing & Slurrying] → [Pre-heating (V-7)]
      ↓
[Autoclave HPAL — 6 compartemen @ 245-270°C]
      ↓
[Flash Cooling (V-8)] → [CCD Washing] → [Neutralization]
      ↓
[Mixed Hydroxide Precipitate (MHP)]
      ↓
[Scaling Mitigation Loop] ←──→ [Acid Wash Recycle]
```

### 3.2 SOP Karakterisasi Deposit

Dickson dkk. (2026) menyusun protokol karakterisasi deposit berlapis:

1. **In-situ NDT inspection** menggunakan ultrasonic thickness gauge (UTG) untuk pemetaan ketebalan δ pada titik grid 200×200 mm di dinding dan *agitator*.
2. **Sampling coupon** pada *test plate* titanium Grade-2 yang dipasang di dalam autoclave selama 720 jam.
3. **Analisis laboratorium**: XRD (identifikasi fasa), SEM-EDS (morfologi dan komposisi), TGA-DSC (stabilitas termal), ICP-OES (leaching konsentrasi elemen).
4. **Statistical mapping** ketebalan deposit menggunakan kriging geostatistik untuk memprediksi *mean time between acid wash* (MTBAW).

### 3.3 SOP Mitigasi Integrated

Mengintegrasikan rekomendasi Andrameda dkk. (2024) untuk *pre-roasting* dan Dickson dkk. (2026) untuk *acid wash scheduling*:

| Parameter | Target SOP | Toleransi |
|-----------|------------|-----------|
| Temperatur operasi autoclave | 255 ± 5 °C | ± 8 °C |
| Tekanan operasi | 38 ± 2 bar | ± 3 bar |
| Konsentrasi H₂SO₄ umpan | 1,2 M | 1,0–1,4 M |
| Solid-to-liquid ratio | 1:4 | 1:3,5–4,5 |
| Suhu *roasting pre-treatment* | 750 °C (30 min) | ±25 °C |
| Agen desulfurisasi (CaO) | 5% wt bijih | ±1% |
| MTBAW (Mean Time Between Acid Wash) | 45 hari | min 35 hari |
| pH *acid wash* (5% H₂SO₄ + 0,5% inhibitor) | 1,5–2,0 | ±0,3 |

### 3.4 Algoritma Predictive Maintenance

Model keputusan penentuan waktu *acid wash*:

$$\text{Jika } \delta(t) \geq \delta_{critical} = 8 \text{ mm} \Rightarrow \text{Trigger Acid Wash}$$

dengan implementasi sistem *expert rule-based* SCADA yang menggabungkan data real-time *torque agitator*, *steam flow*, dan *slurry outlet temperature deviation*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Hipotetis Pabrik HPAL Kapasitas 50.000 ton Ni/yr

Ambil basis desain mengikuti referensi Dickson dkk. (2026):

- Umpan bijih limonit: $m_{ore}$ = 3.500 ton/hari, kadar Ni 1,25%, Fe 38%, Mg 4,8%, S 0,15%
- Autoclave: volume efektif 5.000 m³, luas permukaan internal perpindahan panas $A$ = 850 m²
- Target operasi: $T$ = 255 °C, $P$ = 38 bar, $C_{H_2SO_4}$ = 1,2 M
- Ketebalan *scale