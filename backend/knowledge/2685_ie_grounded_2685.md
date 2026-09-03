# 2685 — Perilaku dan Karakterisasi *Scaling* Autoclave pada Pelindian Bijih Nikel Laterit Kondisi HPAL: Perspektif Teknik Industri, Perpindahan Massa, dan Optimasi Operasional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural yang dipicu oleh transisi energi, elektrifikasi kendaraan, dan permintaan baterai lithium-ion berbasis Ni-Co-Mn (NMC) yang terus meningkat. Lebih dari 60% cadangan nikel dunia berupa bijih laterit (limonit dan saprolit), yang hanya dapat diproses secara ekonomis melalui teknologi *High-Pressure Acid Leaching* (HPAL) karena kadar nikelnya yang rendah (0,8–1,5%) namun disertai kandungan magnesium dan besi yang tinggi (Dickson, Deleau & Espitalier, 2026). Proses HPAL beroperasi pada suhu 240–270 °C dan tekanan 30–40 bar dengan pereaksi asam sulfat, sehingga memungkinkan pelindian selektif nikel dan kobalt dari matriks goetit/limonit, sementara sebagian besar besi tetap dalam bentuk hematit yang relatif inert terhadap asam.

Namun, efisiensi proses HPAL sangat terganggu oleh fenomena *scaling* (pengkerakan) pada dinding dan komponen internal autoclave. Dickson, Deleau dan Espitalier (2026) mendokumentasikan secara sistematis bagaimana deposit kerak berlapis—terutama terdiri dari gypsum ($CaSO_4 \cdot 2H_2O$), jarosit ($KFe_3(SO_4)_2(OH)_6$), alunit, dan ferri-hidrosulfat—terbentuk selama siklus operasi dan menyebabkan *downtime* yang signifikan. Studi ini menjadi sangat relevan karena operasi HPAL modern membutuhkan kapasitas 30.000–50.000 ton nikel per tahun per train autoclave, dan setiap kehilangan hari operasi akibat *descaling* kimiawi (leaching asam klorida atau pencucian tekanan tinggi) mampu menimbulkan kerugian ekonomi hingga USD 1,5–3 juta per kejadian, belum termasuk degradasi termal pada baja autoclave.

Konsekuensi teknis dari *scaling* ini bersifat multifaset: penurunan koefisien perpindahan panas keseluruhan ($U$) sebesar 30–60%, peningkatan tekanan hidrostatik lokal, peningkatan konsumsi asam sulfat 5–12% karena acid-consuming minerals dalam kerak, serta kontaminasi produk MHP (Mixed Hydroxide Precipitate) oleh sulfur dan besi residu. Andrameda, Triaswinanti dan Madra (2024) melengkapi lanskap masalah ini dengan menunjukkan bahwa residu HPAL (*HPAL residue*) yang mengandung besi dan sulfur tinggi masih memerlukan tahap *roasting-reduction* dan *desulfurization* lanjutan agar layak dijadikan umpan pirometalurgi sekunder, sehingga kualitas residu sangat ditentukan oleh seberapa bersih proses leaching berlangsung—dan ini sangat dipengaruhi oleh karakteristik *scaling* di dalam autoclave.

Dengan demikian, pemahaman kuantitatif terhadap mekanisme nukleasi, pertumbuhan, dan adhesi kerak pada permukaan baja autoclave (umumnya *Alloy 59*, *Hastelloy*, atau baja karbon berlapis *rubber-lined* + *acid-resistant brick*) menjadi pilar strategis dalam rekayasa keandalan (*reliability engineering*) fasilitas HPAL. Kedua paper di atas memberikan kerangka empiris-analitis yang menjembatani kebutuhan operasi industri dengan kebutuhan daur ulang limbah dan keberlanjutan proses (*cleaner production*), sesuai dengan visi jurnal *Cleaner Waste Systems*.

---

## 2. Landasan Teori & Formulasi Matematis

Perilaku *scaling* dalam autoclave HPAL merupakan fenomena multi-fisika yang menggabungkan termodinamika kesetimbangan, kinetika presipitasi, perpindahan massa-kalor, dan mekanika fluida. Berikut adalah formulasi fundamental yang digunakan dalam karakterisasi *scaling* menurut kerangka yang dibangun Dickson dkk. (2026) dan Andrameda dkk. (2024).

### 2.1. Kinetika Pertumbuhan Kerak (*Scale Growth Kinetics*)

Laju penebalan kerak terhadap waktu dapat dimodelkan menggunakan pendekatan paralel antara *reaction-controlled* dan *diffusion-controlled*, mengikuti hukum Arrhenius:

$$\frac{d\delta(t)}{dt} = k_0 \exp\left(-\frac{E_a}{RT}\right) \cdot C_s^n$$

di mana $\delta(t)$ adalah tebal kerak (m), $k_0$ adalah konstanta pre-eksponensial (m·s⁻¹), $E_a$ adalah energi aktivasi presipitasi (kJ·mol⁻¹), $R$ adalah konstanta gas universal (8,314 J·mol⁻·K⁻¹), $T$ adalah suhu operasi (K), $C_s$ adalah konsentrasi jenuh ion sulfat (mol·L⁻¹), dan $n$ adalah orde reaksi (umumnya 1,5–2 untuk nukleasi gypsum).

### 2.2. Persamaan Nukleasi Klasik

Untuk karakteristik deposit *hematite scale* dan *jarosite scale*, laju nukleasi homogen dalam larutan leaching diberikan oleh:

$$J = J_0 \exp\left(-\frac{\Delta G^*}{k_B T}\right)$$

dengan energi bebas kritis:

$$\Delta G^* = \frac{16 \pi \gamma^3 v^2}{3 (k_B T)^2 (\ln S)^2}$$

di mana $\gamma$ adalah tegangan permukaan antar-fase (J·m⁻²), $v$ adalah volume molar presipitat, $S$ adalah derajat kejenuhan (*supersaturation*), dan $k_B$ adalah konstanta Boltzmann. Pada operasi HPAL, $S$ untuk gypsum dapat melampaui 5–8 pada suhu ruang sebelum turun signifikan pada suhu 250 °C akibat turunnya kelarutan balik.

### 2.3. Perpindahan Panas melalui Kerak

Penurunan efisiensi termal autoclave dimodelkan dengan tahanan termal total:

$$\frac{1}{U_{overall}} = \frac{1}{h_i} + \frac{\delta_{steel}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi internal dan eksternal (W·m⁻²·K⁻¹), $k$ adalah konduktivitas termal (W·m⁻¹·K⁻¹), dan $\delta$ adalah tebal lapisan (m). Untuk kerak hematit-jarosit, $k_{scale} \approx 0{,}8{-}1{,}5$ W·m⁻¹·K⁻¹, jauh lebih rendah dibanding baja autoclave ($k_{steel} \approx 16$ W·m⁻¹·K⁻¹), sehingga lapisan kerak 5 mm saja sudah mampu meningkatkan hambatan termal hingga 35–50%.

### 2.4. Neraca Massa Sulfat dan Iron

Fraksi sulfur dalam kerak dapat ditentukan dari neraca stoikiometri leaching:

$$\text{Fe}_2\text{O}_3 \cdot \text{H}_2\text{O}_{(s)} + 3\text{H}_2\text{SO}_4_{(aq)} \rightarrow \text{Fe}_2(\text{SO}_4)_3{}_{(aq)} + 4\text{H}_2\text{O}_{(l)}$$

Massa kerak total yang terbentuk selama satu batch leaching berdurasi $t_b$ adalah:

$$m_{scale} = \int_0^{t_b} \rho_{scale} \cdot A_{wetted} \cdot \frac{d\delta(t)}{dt} \, dt$$

dengan $\rho_{scale}$ densitas kerak (kg·m⁻³) dan $A_{wetted}$ luas permukaan basah autoclave (m²).

### 2.5. Kinetika *Desulfurization-Residue Roasting* (Andrameda dkk., 2024)

Untuk proses lanjutan pada residu HPAL, Andrameda, Triaswinanti dan Madra (2024) menggunakan pendekatan *shrinking core* untuk reaksi reduksi:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_r}{r_0^2 \rho_s} t$$

di mana $\alpha$ adalah fraksi konversi residu, $k_r$ adalah konstanta laju reaksi (m·s⁻¹), $r_0$ adalah jari-jari awal partikel, dan $\rho_s$ adalah densitas padatan. Pengaruh agen desulfurisasi (CaO, Na₂CO₃, atau NaHCO₃) ditangkap melalui:

$$\text{S}_{residual} = \text{S}_0 - \eta_{DS} \cdot \left(\frac{m_{DS}}{m_{residue}}\right)^{\beta} \cdot \exp\left(-\frac{E_{DS}}{RT}\right) \cdot t$$

dengan $\eta_{DS}$ efisiensi desulfurisasi, $\beta$ parameter stoikiometri agen, dan $E_{DS}$ energi aktivasi desulfurisasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis untuk mitigasi dan karakterisasi *scaling* pada fasilitas HPAL mengikuti protokol rekayasa berikut:

**Tahap 1 — Karakterisasi Awal (*Baseline Sampling*):**
Pengambilan sampel kerak dari empat zona autoclave (zona preheat 180 °C, zona leaching utama 250 °C, zona flash cooling, dan zona discharge). Karakterisasi dilakukan dengan X-Ray Diffraction (XRD), Scanning Electron Microscopy-Energy Dispersive X-Ray (SEM-EDX), dan Inductively Coupled Plasma-Optical Emission Spectroscopy (ICP-OES) untuk komposisi kimia. Pendekatan ini konsisten dengan metodologi Dickson, Deleau & Espitalier (2026) yang mengkuantifikasi *scale layer thickness* sebagai fungsi posisi aksial.

**Tahap 2 — Pemodelan Termodinamika:**
Penggunaan software proses kimia (OLI, HSC Chemistry, atau Aspen Plus) untuk memprediksi spesies jenuh dan *supersaturation index* (SI) tiap mineral sepanjang profil suhu. Kriteria: jika SI > 0 maka presipitasi dimungkinkan secara termodinamik.

**Tahap 3 — Pengendalian Proses:**
- *Acid-to-ore ratio* dijaga pada 0,35–0,45 ton H₂SO₄/ton bijih kering;
- *Retention time* total 60–90 menit dengan distribusi *multi-compartment*;
- Penambahan *seed crystals* gypsum pada recycle stream untuk mengontrol morfologi (teknik *seeding*);
- Penyesuaian *impeller speed* (RPM) untuk menjaga *shear stress* ≥ 50 Pa agar adhesi kerak ke dinding berkurang.

**Tahap 4 — *Descaling* Terjadwal:**
Pencucian kimia dengan campuran HCl 5–8% + inhibitor korosi pada suhu 80 °C, atau *high-pressure water jet* pada 1.500 bar. Andrameda dkk. (2024) menekankan bahwa kualitas residu setelah leaching sangat memengaruhi beban desulfurisasi; semakin rendah sulfur dalam kerak adhesif yang terlepas ke discharge, semakin rendah konsumsi agen desulfurisasi pada tahap *roasting-reduction*.

**Tahap 5 — *Closed-Loop Recovery* (Cleaner Production):**
Filtrat descaling dilewatkan ke unit *neutralization-lime precipitation* untuk回收 CaSO₄ sebagai *by-product* gypsum industri (gypsum papan dinding atau semen), sehingga *zero liquid discharge* tercapai—sesuai visi *Cleaner Waste Systems*.

Diagram alir proses lengkap dapat direpresentasikan sebagai berikut:

```
Bijih Laterit → Pengeringan → Slurry Mixing (H₂SO₄ 98%) 
    → Preheater (180 °C) → Autoclave HPAL (250 °C, 40 bar) 
    → Flash Cooling → CCD Counter-Current Decantation 
    → Neutralisasi (MgO/CaO) → MHP Precipitation 
    → Residu ke Roasting-Reduction + Desulfurization (Andrameda dkk., 2024)
    → Kerak Autoclave → Descaling → Recovery CaSO₄ + Recycle Acid
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Autoclave HPAL kapasitas 30.000 ton nikel/tahun, dengan 4 train paralel, diameter autoclave 4,5 m, panjang 36 m, luas permukaan basah efektif $A_{wetted} \approx 450$ m² per train. Kondisi operasi: $T = 523$ K (250 °C), $P = 40$ bar, *retention time* 75 menit, kadar bijih 1,2% Ni, bijih 38% Fe, 1,8% Mg.

**Langkah 1 — Estimasi Laju Pertumbuhan Kerak**

Menggunakan parameter kinetik dari Dickson dkk. (2026):
- $k_0 = 4{,