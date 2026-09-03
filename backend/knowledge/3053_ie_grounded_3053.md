# 3053 — Karakteristik dan Perilaku Scaling Autoclave pada Pelindian Bijih Nikel Laterit dengan Kondisi High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Autoclave Scaling Behaviour and Characterisation during Nickel Laterite Ore Leaching under HPAL Conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade Ni·SO₄·6H₂O) telah melonjak signifikan seiring transisi elektrifikasi kendaraan listrik dan penetrasi baterai lithium-ion NMC/NCA. Lebih dari 70% cadangan nikel dunia berupa bijih laterit (limonit dan saprolit), namun teknologi pirometalurgi konvensional (rotary kiln electric furnace/RKEF) hanya mampu mengolah bijih saprolit kadar tinggi (>1,8% Ni) menjadi ferronickel atau nickel pig iron. Bijih laterit kadar rendah (0,8–1,5% Ni) seperti yang dominan di Indonesia, Filipina, Kaledonia Baru, dan Kuba hanya dapat diolah secara ekonomis melalui **High-Pressure Acid Leaching (HPAL)** yang beroperasi pada 240–270 °C dengan tekanan parsial 35–55 bar dalam autoclave multilining titanium (Dickson, Deleau, & Espitalier, 2026, *Cleaner Waste Systems*, https://doi.org/10.1016/j.clwas.2026.100503).

Dalam operasi HPAL, asam sulfat konsentrasi tinggi (~50–200 g/L H₂SO₄) digunakan untuk melindi nikel dan kobalt dari struktur kristal goethit (α-FeOOH) dan limonit, sementara besi harus dijaga agar tetap berada dalam fasa溶液中 sebagai Fe³⁺ untuk menghindari presipitasi goethit/hematit yang tidak terkontrol. Namun demikian, persoalan kronis yang menghambat operasional HPAL adalah **autoclave scaling** — terbentuknya kerak padat pada dinding autoclave, impeller, pipa heat exchanger, dan zona vapour-liquid yang menurunkan efisiensi perpindahan panas secara drastis. Dickson et al. (2026) melaporkan bahwa scaling dapat menyebabkan downtime pabrik 8–15% per tahun, menurunkan kapasitas produksi nikel hingga 20%, dan menambah konsumsi asam spesifik 5–12%. Andrameda, Triaswinanti, dan Madra (2024) menambahkan bahwa residu proses HPAL yang mengandung hematit, jarosit, dan basic ferric sulfate masih memiliki potensi daur ulang logam melalui proses reduksi-roasting (https://doi.org/10.1063/5.0186417).

Urgensi industri ini bersifat multidimensional: (1) **ekonomi** — setiap 1 mm kerak mengurangi koefisien perpindahan panas *U* autoclave sebesar ~7–12%; (2) **keselamatan proses** — kerak tebal menciptakan hot spot lokal yang berisiko thermal stress failure pada lining titanium; (3) **lingkungan** — blow-down slurry mengandung residu asam dan logam berat yang memerlukan neutralization; (4) **sustainability** — minimize waste menjadi tema sentral jurnal *Cleaner Waste Systems* yang menaungi publikasi Dickson et al. (2026).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dengan Resistansi Scaling

Efektivitas autoclave HPAL sangat bergantung pada koefisien perpindahan panas menyeluruh (*overall heat transfer coefficient*, $U$). Dengan memperhitungkan resistansi termal scaling, $U$ dapat diformulasikan:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_w}{k_w} + \frac{\delta_s}{k_s} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ berturut-turut adalah koefisien konveksi internal (slurry) dan eksternal (steam), $\delta_w$ dan $k_w$ adalah tebal dan konduktivitas dinding (titanium ASTM Grade 2, $k_w \approx 16{,}3$ W/m·K), sedangkan $\delta_s$ dan $k_s$ adalah tebal dan konduktivitas termal kerak. Berdasarkan karakterisasi Dickson et al. (2026), komposisi kerak didominasi oleh:

$$\text{Kerak HPAL} = \underbrace{x_1 \text{Fe}_2\text{O}_3}_{\text{hematit}} + \underbrace{x_2 \text{NaFe}_3(\text{SO}_4)_2(\text{OH})_6}_{\text{natrojarosit}} + \underbrace{x_3 \text{Al(OH)}_3}_{\text{gibbsite}} + \underbrace{x_4 \text{CaSO}_4 \cdot 2\text{H}_2\text{O}}_{\text{gypsum}} + \underbrace{x_5 \text{H}_3\text{OFe}_3(\text{SO}_4)_2(\text{OH})_6}_{\text{hydronium jarosit}}$$

dengan fraksi massa $x_1 \approx 0{,}45$, $x_2 \approx 0{,}25$, $x_3 \approx 0{,}15$, $x_4 \approx 0{,}10$, dan $x_5 \approx 0{,}05$.

### 2.2 Kinetika Pertumbuhan Kerak

Pertumbuhan tebal kerak $\delta_s(t)$ mengikuti hukum paralel antara laju deposisi partikel dan laju kristalisasi *in-situ*:

$$\frac{d\delta_s}{dt} = k_d \cdot C_p - k_r \cdot \delta_s$$

dengan solusi steady-state:

$$\delta_{s,\infty} = \frac{k_d \cdot C_p}{k_r}$$

di mana $k_d$ adalah koefisien deposisi (m/s), $C_p$ adalah konsentrasi padatan tersuspensi (kg/m³), dan $k_r$ adalah koefisien peluruhan/reaksi balik. Persamaan Arrhenius untuk $k_d$:

$$k_d = A_d \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi deposisi kerak $E_a \approx 42$–$68$ kJ/mol (kisaran tipikal untuk presipitasi basic ferric sulfate, Dickson et al., 2026).

### 2.3 Neraca Massa Logam Autoclave HPAL

Reaksi pelindian inti HPAL pada bijih limonit:

$$\text{NiO·Fe}_2\text{O}_3\text{·H}_2\text{O} + 3\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + 2\text{FeSO}_4 + 3\text{H}_2\text{O} + \tfrac{1}{2}\text{O}_2$$

Recovery nikel $\eta_{Ni}$ mengikuti model shrinking core untuk partikel goethit:

$$\eta_{Ni} = 1 - \left(1 - \frac{t}{\tau}\right)^3$$

dengan waktu karakteristik:

$$\tau = \frac{\rho_s R_p^2}{6 D_s C_{H^+}}$$

di mana $\rho_s$ adalah densitas partikel padat, $R_p$ radius partikel, $D_s$ koefisien difusi asam (~$1{,}8 \times 10^{-9}$ m²/s pada 250 °C), dan $C_{H^+}$ konsentrasi asam bebas.

### 2.4 Model Korelasi Fouling Factor

Berdasarkan data Dickson et al. (2026), fouling factor $R_f$ (m²·K/W) tumbuh secara linier terhadap siklus operasi:

$$R_f(t) = R_{f,0} + \beta \cdot t, \quad \beta \approx 1{,}2 \times 10^{-9} \text{ m}^2\text{K/(W·s)}$$

di mana $R_{f,0}$ adalah resistansi awal ($5 \times 10^{-5}$ m²·K/W untuk autoclave baru).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dan Zona Scaling

```
[Bijih Laterit] → [Repulping] → [Pre-heater 1-4 (85-220°C)] 
       ↓
[Autoclave Multi-compartment (240-270°C, 40-55 bar)] 
       ↓ (90-120 menit residence time)
[Flash Cooling] → [CCD Washing] → [Neutralization]
       ↓
[Precipitation Ni·Co (MgO/Mg(OH)₂)] → [Sulfat Refining]
       ↓
[Kristalisasi NiSO₄·6H₂O / Ni(OH)₂]
```

**Zona kritis pembentukan kerak** terjadi di tiga lokasi utama menurut Dickson et al. (2026):

1. **Vapor-liquid interface (VLI)** pada autoclave kompartemen 1 dan 2 — dominan membentuk natrojarosit.
2. **Heat exchanger surface (pre-heater stage 3 & 4)** — dominan gypsum dan basic iron sulfate.
3. **Stirrer blade tip & shaft** — dominan hematit karena turbulensi lokal.

### 3.2 SOP Operasional Standar (Best Practice Industri)

| Tahapan | Parameter | Set-Point | Toleransi |
|---|---|---|---|
| Pre-heater outlet T | Steam pijar | 220 °C | ±5 °C |
| Autoclave operating T | Direct steam | 255 °C | ±3 °C |
| Total pressure | Vapor | 43 bar | ±0,5 bar |
| Acid-to-ore ratio | H₂SO₄ feed | 420 kg/t ore | ±15 kg/t |
| Slurry density | Feed | 1,35 g/cm³ | ±0,05 |
| Retention time | Compartment cascade | 90 min | ±5 min |
| Free acid residual | Discharge | 35 g/L | ±5 g/L |
| Fe³⁺/Fe_total ratio | Discharge | ≥0,90 | — |

### 3.3 Protokol Karakterisasi Scaling

Berdasarkan metodologi Dickson et al. (2026), karakterisasi kerak dilakukan dengan:

1. **Sampling kerak saat shutdown terencana** — sampel dinding dan impeller dipotong 5×5 cm.
2. **XRD (X-Ray Diffraction)** — identifikasi fase kristal dengan Cu-Kα pada 40 kV.
3. **SEM-EDS (Scanning Electron Microscopy)** — morfologi dan komposisi elemental.
4. **TGA-DSC** — stabilitas termal dan dekomposisi.
5. **ICP-OES** — komposisi kimia total setelah digesti asam.
6. **Micro-CT scanning** — porositas internal kerak.

### 3.4 Prosedur Descaling Berkala

Andrameda, Triaswinanti, dan Madra (2024) mengusulkan variasi roasting-reduction untuk menghilangkan sulfur dari residu HPAL. Dalam konteks maintenance, descaling dilakukan melalui:

1. **Mechanical descaling** dengan high-pressure water jetting (200–300 bar) setiap 3 bulan.
2. **Chemical cleaning** dengan campuran HCl 5% + inhibitor (0,2% Rodine-213) untuk mengangkat jarosit.
3. **Acid wash sequence** — flush dengan spent acid 80 g/L H₂SO₄ pada 80 °C selama 4 jam.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Operasi Autoclave

Diketahui sebuah pabrik HPAL kapasitas 30.000 tNi/tahun dengan spesifikasi:

- Diameter autoclave: $D_a = 4{,}5$ m
- Panjang efektif: $L_a = 28$ m
- Luas permukaan heat transfer: $A_{HT} = \pi D_a L_a = \pi \times 4{,}5 \times 28 = 396$ m²
- Steam heating duty target: $Q = 25$ MW
- Suhu steam pemanas: $T_s = 290$ °C
- Suhu slurry target: $T_{sl} = 255$ °C
- Konduktivitas titanium: $k_w = 16{,}3$ W/m·K, tebal dinding $\delta_w = 0{,}012$ m

### 4.2 Perhitungan Fouling Factor Maksimum

Batas operasional $U_{\min}$ yang dapat diterima untuk mempertahankan duty 25 MW:

$$U_{\min} = \frac{Q}{A_{HT} \cdot \Delta T_{LMTD}}$$

Dengan $\Delta T_1 = 290-255 = 35$ °C dan $\Delta T_2 = 290-235 = 55$ °C (slurry outlet 235 °C):

$$\Delta T_{LMTD} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1/\Delta T_2)} = \frac{35 - 55}{\ln(35/55)} = \frac{-20}{-0{,}452} = 44{,}3 \text{ °C}$$

$$U_{\min} = \frac{25 \times 10^6}{396 \times 44{,}3} = 1425 \text{ W/(m}^2\text{·K)}$$

### 4.3