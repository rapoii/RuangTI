# 1773 — Perilaku Pembentukan Kerak (Scaling) dan Karakterisasi Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL (High-Pressure Acid Leaching)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan nikel global sedang mengalami transformasi strategis yang mendalam seiring dengan meningkatnya permintaan baterai kendaraan listrik (EV) dan paduan stainless steel bermutu tinggi. Bijih nikel laterit—yang menyumbang sekitar 70% dari cadangan nikel terrestre dunia—menjadi fokus utama karena keterbatasan cadangan bijih sulfida yang semakin tipis. Namun, bijih laterit memiliki tantangan metalurgi yang signifikan: kadar nikel rendah (0,8–2,5%), kadar magnesium dan besi tinggi, serta kadar air serta lempung yang membuat proses pirometalurgi konvensional tidak efisien secara energetik. Oleh karena itu, **High-Pressure Acid Leaching (HPAL)** menjadi teknologi unggulan yang memungkinkan ekstraksi nikel dan kobalt secara selektif dari bijih laterit limonit dan saprolit dalam autoclave pada suhu 240–270°C dan tekanan 30–45 bar dengan media asam sulfat (Dickson et al., 2026).

Meskipun menawarkan recoveries nikel hingga 90–95% dan kobalt 85–95%, proses HPAL menghadapi tantangan operasional kritis berupa **pembentukan kerak (scale) pada dinding autoclave**. Dickson et al. (2026) dalam *Cleaner Waste Systems* mendokumentasikan bahwa akumulasi kerak terutama terdiri atas hematit (α-Fe₂O₃), anhydrit (CaSO₄), jarosit, dan aluminium hidroksida yang terbentuk dari reaksi hidroksilisis dan supersaturasi larutan. Kerak tersebut menurunkan koefisien perpindahan panas dinding autoclave (overall heat transfer coefficient) hingga 40–60% setelah 200–400 jam operasi, memaksa penghentian tidak terjadwal (unplanned shutdown) untuk descaling. Konsekuensinya, kapasitas produksi turun 8–15%, konsumsi spesifik asam sulfat naik 5–10%, dan *Specific Energy Consumption* (SEC) meningkat signifikan.

Di sisi hulu, Andrameda et al. (2024) dalam *AIP Conference Proceedings* menyoroti bahwa **pre-treatment desulfurisasi dan roasting-reduksi** memegang peran strategis dalam menentukan kualitas residue HPAL. Penambahan agen desulfurisasi (seperti CaO, Na₂CO₃, atau karbonat aktif) mampu menurunkan kadar sulfur residue yang menjadi prekursor utama pembentukan kerak sulfat. Kombinasi optimal antara suhu roasting (700–900°C), waktu tinggal (60–180 menit), dan jenis agen desulfurisasi menjadi variabel kendali mutu yang menentukan keberlanjutan operasional autoclave.

Secara ekonomis, investasi fasilitas HPAL mencapai USD 1,5–4 miliar per pabrik dengan kapasitas 30.000–50.000 ton nikel per tahun, sehingga setiap kehilangan 1% kapasitas produksi berdampak pada opportunity cost puluhan juta USD per tahun. Oleh karena itu, perilaku dan karakterisasi scaling bukan sekadar isu teknis, melainkan masalah strategis yang menentukan *bankability* proyek nikel laterit. Modul 1773 ini menyintesis bukti empiris dari kedua paper tersebut untuk membangun kerangka rekayasa yang dapat digunakan oleh insinyur proses, analis kelayakan, dan perancang autoclave.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Termodinamika Reaksi HPAL

Reaksi utama pelindian bijih laterit dalam autoclave mengikuti stoikiometri berikut (Dickson et al., 2026):

$$\text{NiO} + \text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{H}_2\text{O} \quad \Delta G^\circ_{250°C} \approx -45 \text{ kJ/mol}$$

$$\text{CoO} + \text{H}_2\text{SO}_4 \rightarrow \text{CoSO}_4 + \text{H}_2\text{O} \quad \Delta G^\circ_{250°C} \approx -42 \text{ kJ/mol}$$

$$2\text{FeO(OH)} + 3\text{H}_2\text{SO}_4 \rightarrow \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

$$\text{Fe}_2(\text{SO}_4)_3 + 3\text{H}_2\text{O} \rightarrow \text{Fe}_2\text{O}_3 \downarrow + 3\text{H}_2\text{SO}_4$$

Reaksi terakhir merupakan **hydrolysis-hematite** yang menjadi sumber utama kerak. Konstanta kesetimbangan K sebagai fungsi suhu mengikuti van't Hoff:

$$\ln K(T) = \ln K(T_{\text{ref}}) - \frac{\Delta H^\circ}{R}\left(\frac{1}{T} - \frac{1}{T_{\text{ref}}}\right)$$

dengan $\Delta H^\circ$ entalpi reaksi, $R = 8{,}314$ J/(mol·K), dan $T$ dalam Kelvin.

### 2.2. Kinetika Pertumbuhan Kerak

Dickson et al. (2026) menggunakan **parabolic rate law** untuk memodelkan pertumbuhan ketebalan kerak $\delta(t)$:

$$\delta(t) = \sqrt{2 D_{\text{eff}} \, C_s \, t}$$

dengan:
- $D_{\text{eff}}$: koefisien difusi efektif ion Fe³⁺ dalam matriks kerak (m²/s)
- $C_s$: konsentrasi jenuh (supersaturation) Fe³⁺ pada permukaan autoclave (mol/m³)
- $t$: waktu operasi (s)

Model ini mengasumsikan difusi sebagai *rate-limiting step*. Laju pertumbuhan sesaat:

$$\frac{d\delta}{dt} = \frac{D_{\text{eff}} \, C_s}{\delta(t)}$$

Ketergantungan suhu mengikuti persamaan Arrhenius:

$$D_{\text{eff}}(T) = D_0 \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi tipikal $E_a = 60{-}95$ kJ/mol untuk transport ion dalam kerak hematit.

### 2.3. Penurunan Perpindahan Panas

Kerak yang terbentuk meningkatkan resistansi termal total dinding autoclave. Untuk autoclave baja dengan lapisan kerak, perpindahan panas radial mengikuti:

$$q = \frac{T_{\text{process}} - T_{\text{cool}}}{\frac{r_{\text{inner}} \ln(r_{\text{steel}}/r_{\text{inner}})}{k_{\text{steel}}} + \frac{r_{\text{inner}} \ln(r_{\text{scale}}/r_{\text{inner}})}{k_{\text{scale}}} + \frac{1}{h_{\text{conv}}}}$$

Overall heat transfer coefficient direduksi menjadi:

$$U_{\text{eff}} = \frac{1}{\frac{1}{U_0} + \frac{\delta}{k_{\text{scale}}}}$$

dengan $k_{\text{scale}} \approx 0{,}8{-}1{,}5$ W/(m·K) untuk kerak hematit berpori, jauh lebih rendah dibanding baja karbon ($k_{\text{steel}} \approx 45$ W/(m·K)).

### 2.4. Kinetika Pelindian Bijih (Shrinking Core Model)

Untuk partikel bijih laterit berbentuk spherical, **shrinking core model (SCM)** digunakan dengan persamaan:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_c \, C_A \, M_B}{\rho_B \, r_0} t$$

dengan $\alpha$ konversi fraksi, $k_c$ konstanta kinetika, $C_A$ konsentrasi asam sulfat, $M_B$ massa molar bijih, $\rho_B$ densitas partikel, $r_0$ radius awal. Konstanta $k_c$ obeys Arrhenius sehingga performa HPAL sangat sensitif pada profil suhu.

### 2.5. Efektivitas Desulfurisasi & Roasting

Andrameda et al. (2024) merumuskan **desulfurization efficiency** sebagai:

$$\eta_{\text{desulf}} = \frac{S_{\text{initial}} - S_{\text{final}}}{S_{\text{initial}}} \times 100\%$$

serta recovery logam berharga dari residue:

$$R_{\text{metals}} = \frac{m_{\text{metal, leach}}}{m_{\text{metal, feed}}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Proses HPAL dengan Mitigasi Scaling

```
[Bijih Laterit] → [Kominusi & Slurry Prep] → [Pre-treatment: Desulfurisasi/Roasting]
        ↓                                              ↓
[Autoclave Feed Pump] ← [Heat Exchanger Pre-heating]
        ↓
[AUTOCLAVE TAHAP 1: 240-270°C, 30-45 bar, residence 60-90 min]
        ↓                                        ↓
[Heat Recovery]                            [Scale Sampling Ports]
        ↓
[Flash Cooling → Multi-stage] → [CCD Thickener]
        ↓
[Neutralisasi & Mixed Hydroxide Precipitation (MHP)] → [Residue to Tailings]
        ↓
[Filtrasi & Refining → NiSO₄/CoSO₄ → Battery-Grade]
```

### 3.2. SOP Operasional Autoclave Anti-Scaling

Berdasarkan Dickson et al. (2026) dan Andrameda et al. (2024), berikut adalah SOP rekayasa:

**Tahap Pra-Operasi:**
1. **Karakterisasi Bijih**: Tentukan rasio Fe/Mg, kadar limonit/saprolit, distribusi ukuran partikel (P80 = 75–150 μm).
2. **Desulfurisasi & Roasting**: Tambahkan agen desulfurisasi (CaO 3–8% berat bijih, atau Na₂CO₃ 4–6%) dan lakukan roasting pada suhu 750–850°C selama 90–150 menit sesuai rekomendasi Andrameda et al. (2024) untuk menekan kadar S-residue hingga <0,3%.
3. **Settling & Slurry Density**: Atur pulp density 25–35% solids untuk viskositas optimum.

**Tahap Operasi Autoclave:**
4. **Kontrol Suhu Bertahap**: Pemanasan 5°C/menit hingga 250°C untuk mencegah thermal shock pada lining.
5. **Konsentrasi Asam**: H₂SO₄ 150–220 g/L, dipertahankan excess 15–25 g/L free acid.
6. **Injeksi O₂/Air**: Tekanan parsial O₂ 5–10 bar untuk oksidasi Fe²⁺ → Fe³⁺.
7. **Sampling Scale Periodik**: Setiap 50 jam operasi, sampling dinding autoclave pada 6 titik axial untuk monitoring ketebalan kerak dan komposisi mineralogi (XRD, SEM-EDS).

**Tahap Pemeliharaan:**
8. **Predictive Descaling**: Gunakan model $\delta(t) = \sqrt{2D_{\text{eff}}C_s t}$ untuk memprediksi kapan ketebalan kerak melampaui batas kritis 5–8 mm.
9. **Acid Wash & Mechanical Cleaning**: Siklus CIP dengan HCl 5–10% atau inhibitive wash dengan fosfonat.
10. **Performance Tracking**: Hitung KPI: heat flux reduction, unplanned downtime, OEE (Overall Equipment Effectiveness) autoclave.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus: Autoclave HPAL Kapasitas 3.000 ton/hari Bijih Laterit

**Parameter Input (representatif proyek nikel Indonesia, sesuai paper):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Feed bijih laterit | 3.000 | ton/hari |
| Kadar Ni | 1,30 | % |
| Kadar Fe | 38,0 | % |
| Kadar MgO | 8,5 | % |
| Kadar S (residue target) | <0,30 | % |
| Suhu autoclave | 255 | °C |
| Tekanan | 38 | bar |
| Free acid excess | 20 | g/L |
| Konsentrasi Fe³⁺ awal | 4,2 | g/L |
| Waktu operasi | 250 | jam |
| $D_0$ (pre-eksponensial) | 2,5×10⁻⁴ | m²/s |
| $E_a$ | 78 | kJ/mol |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
