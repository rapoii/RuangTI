# 2045 — Rekayasa Autoclave HPAL Nikel Laterit: Karakterisasi Scaling, Kinetika Pertumbuhan Kerak, dan Optimasi Perpindahan Panas pada Sistem High-Pressure Acid Leaching

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan nikel global tengah menghadapi tekanan struktural yang bersifat *simultan*: di satu sisi, permintaan akan nikel kelas baterai (*battery-grade nickel*) untuk aplikasi *electric vehicle* (EV) meningkat dengan CAGR lebih dari 12% per tahun menurut proyeksi USGS dan BloombergNEF; di sisi lain, cadangan bijih nikel sulfida (*sulfide ore*) yang selama ini menopang produksi dunia semakin menipis. Sejak 2010-an, bijih nikel laterit (*nickel laterite ore*) yang menyumbang sekitar 60% dari total sumber daya nikel global menjadi tumpuan strategis, sehingga teknologi **High-Pressure Acid Leaching (HPAL)** menjadi pusat perhatian para insinyur metalurgi dan perekayasa sistem industri.

Proses HPAL beroperasi pada kondisi termodinamika ekstrem, yaitu temperatur 240–270 °C dan tekanan 30–55 bar dengan konsentrasi asam sulfat 200–400 kg H₂SO₄ per ton bijih. Pada intensitas operasional tersebut, dinding autoclave baja karbon rendah berlapis titanium (*Grade-2/Grade-7 titanium-clad*) maupun paduan *Alloy 625* rentan terhadap pembentukan **kerak (*scaling*)** yang menurunkan koefisien perpindahan panas keseluruhan (*overall heat transfer coefficient, U*) hingga 40–60% dalam satu siklus operasi. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* menekankan bahwa **autoclave scaling behaviour** adalah *single largest contributor* terhadap *downtime* tidak terjadwal (*unplanned downtime*) pada fasilitas HPAL di Indonesia, Filipina, dan Kaledonia Baru. Studi mereka menunjukkan bahwa karakterisasi kerak secara kuantitatif merupakan prasyarat bagi strategi *predictive maintenance* dan peningkatan *Specific Heat Duty* (MWh/t Ni).

Di sisi hilir, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* menyoroti bahwa residu HPAL (*HPAL residue*) mengandung sulfur residual dalam bentuk pirit/markasit yang menurunkan kualitas *Mixed Hydroxide Precipitate* (MHP) dan memicu pembentukan kerak sekunder ber-basis besi sulfida. Penggunaan *desulfurization agent* serta optimalisasi *roasting-reduction* menjadi pendekatan komplementer. Integrasi kedua perspektif ini — karakterisasi kerak primer pada dinding autoclave dan penanganan sulfur pada residu — menjadi kerangka kerja rekayasa yang holistik untuk meningkatkan availabilitas, efisiensi energi, dan keberlanjutan proses HPAL.

Konteks industri Indonesia sangat relevan: dengan cadangan nikel laterit lebih dari 21 juta ton Ni metal (ESDM, 2023), pabrik HPAL seperti di Halmahera Tengah dan Morowali menjadi *critical infrastructure* bagi rantai pasok baterai global. Setiap 1% peningkatan *Ni recovery* pada throughput 50.000 t bijih/tahun berpotensi menambah revenue ± USD 8–12 juta/tahun pada harga nikel USD 18.000/t. Dengan demikian, mitigasi scaling bukan sekadar isu teknis, melainkan *driver* profitabilitas dan keamanan energi nasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika dan Kinetika Pertumbuhan Kerak

Pertumbuhan kerak pada autoclave HPAL mengikuti **model kinetika parabolic** yang dikombinasikan dengan persamaan Arrhenius untuk efek temperatur:

$$\delta(t) = \sqrt{2 \, k_p \, t}$$

dengan $\delta(t)$ adalah tebal kerak (m), $k_p$ adalah konstanta kinetika pertumbuhan (m²·s⁻¹), dan $t$ adalah waktu eksposur (s). Konstanta $k_p$ mengikuti:

$$k_p = k_{p,0} \, \exp\left(-\frac{E_a}{R \, T}\right)$$

di mana $E_a$ adalah energi aktivasi (kJ·mol⁻¹), $R = 8{,}314$ J·mol⁻¹·K⁻¹, dan $T$ adalah temperatur absolut (K). Untuk kerak berbasis hematit-goethit pada dinding autoclave HPAL, Dickson et al. (2026) melaporkan $E_a \approx 55{-}72$ kJ·mol⁻¹.

### 2.2 Resistansi Perpindahan Panas dengan Fouling Factor

Persamaan perpindahan panas keseluruhan pada dinding autoclave dengan lapisan kerak multi-komponen mengikuti analogi tahanan seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{ti}}{k_{ti}} + \sum_{j=1}^{n} \frac{\delta_j}{k_j} + \frac{\delta_{steel}}{k_{steel}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi di sisi dalam (*slurry*) dan luar (*steam*) autoclave, $\delta$ adalah tebal lapisan, dan $k$ adalah konduktivitas termal. **Fouling resistance** total:

$$R_f = \sum_{j=1}^{n} \frac{\delta_j}{k_j}$$

Konduktivitas termal tipikal (Dickson et al., 2026):
- Hematit (Fe₂O₃): $k \approx 1{,}2$ W·m⁻¹·K⁻¹
- Alunit [KAl₃(SO₄)₂(OH)₆]: $k \approx 0{,}6$ W·m⁻¹·K⁻¹
- Amorf SiO₂: $k \approx 1{,}0$ W·m⁻¹·K⁻¹
- Baja karbon: $k \approx 45$ W·m⁻¹·K⁻¹

### 2.3 Stoikiometri Konsumsi Asam Sulfat

Untuk bijih limonitik dengan kadar Fe ≈ 35–45%, konsumsi asam sulfat didominasi oleh reaksi:

$$\mathrm{Fe_2O_3 \cdot H_2O + 3\,H_2SO_4 \rightarrow Fe_2(SO_4)_3 + 4\,H_2O}$$

Kebutuhan asam teoritis:

$$m_{H_2SO_4}^{teo} = \sum_i \nu_i \, n_i \, M_{H_2SO_4}$$

dengan $\nu_i$ adalah koefisien stoikiometri, $n_i$ jumlah mol oksida terlarut, dan $M_{H_2SO_4} = 98{,}08$ g·mol⁻¹.

### 2.4 Ekstraksi Nikel dan Efisiensi Proses

*Nickel recovery* didefinisikan sebagai:

$$\eta_{Ni} = \frac{m_{Ni}^{sol}}{m_{Ni}^{ore}} \times 100\%$$

Kinetika ekstraksi mengikuti model *shrinking core* untuk bijih berbutir:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_s \, C_{acid}}{\rho_s \, r_0^2} \, t$$

dengan $\alpha$ fraksi konversi, $k_s$ konstanta laju, $C_{acid}$ konsentrasi asam, $\rho_s$ densitas partikel, dan $r_0$ jari-jari awal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dengan Mitigasi Scaling

```
[1] Bijih Laterit (Limonitic, Fe>35%, Mg<5%)
         │
         ▼  (Repulp + klasifikasi, P80=150μm)
[2] Slurry Feed (~45% solids, pH 2-3)
         │
         ▼
[3] Pre-heater (Ti-tube, indirect steam)
         │
         ▼
[4] AUTOCLAVE HPAL (6-compartment)
    • T_kompartemen: 70→150→220→260→260→250 °C
    • P: 30-44 bar
    • τ_total: 60-90 menit
    • Injeksi H₂SO₄ 98% terdistribusi
         │
         ▼
[5] Flash & Cooling (Multi-stage)
         │
         ▼
[6] CCD Thickener (Counter-Current Decantation)
         │
         ▼
[7] Net Acid Make-up & Neutralization
         │
         ▼
[8] Precipitation (MHP/Intermediate)
         │
         ▼
[9] Residue Treatment (Roasting-Reduction) ───► Andrameda et al.