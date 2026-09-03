# 2605 — Karakterisasi dan Pengendalian Perilaku Pembentukan Kerak (Scaling) Autoclave pada Pelindian Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri nikel global sedang mengalami transformasi struktural yang didorong oleh transisi energi dan permintaan baterai kendaraan listrik (EV) yang diproyeksikan tumbuh pada Compound Annual Growth Rate (CAGR) lebih dari 18% hingga 2030. Lebih dari 60% cadangan nikel dunia berada dalam bentuk bijih laterit—bukan sulfida—yang didominasi oleh mineral limonit (Fe-goethit) dan saprolit (Mg-silikat). Karena kandungan nikel dalam bijih laterit umumnya rendah (0,8–2,5% Ni) dan tersebar dalam matriks oksida yang kompleks, teknologi High-Pressure Acid Leaching (HPAL) menjadi pilihan utama untuk mengekstraksi nikel dalam skala komersial dengan tingkat recovery yang mampu mencapai 90–95% (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun demikian, operasi HPAL menghadapi tantangan operasional yang signifikan, yaitu pembentukan kerak (*scaling*) pada dinding internal autoclave dan jaringan perpipaan. Kerak yang terbentuk terutama tersusun atas hematit (Fe₂O₃), anhidrit (CaSO₄), alunit (KAl₃(SO₄)₂(OH)₆), dan jarosit (KFe₃(SO₄)₂(OH)₆), yang mengendap ketika suhu operasi 245–270 °C dan tekanan 4,0–5,5 MPa bertemu dengan konsentrasi ion sulfat, besi, dan alumunium yang sangat tinggi (Andrameda, Triaswinanti, & Madra, 2024, DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)). Akumulasi kerak yang tidak terkontrol dapat menurunkan efisiensi perpindahan panas hingga 30–45%, meningkatkan konsumsi asam sulfat hingga 20% di atas desain, dan memaksa *shutdown* tidak terjadwal dengan kerugian produksi yang dapat mencapai USD 5–10 juta per kejadian untuk pabrik berkapasitas 30.000–40.000 t Ni/tahun.

Urgensi rekayasa industri terhadap pengendalian scaling bukan hanya bersifat teknis, tetapi juga strategis. Dari perspektif *total cost of ownership* (TCO), biaya pemeliharaan autoclave di fasilitas HPAL dapat mencapai 25–30% dari total biaya operasional (OPEX). Dalam konteks keekonomian baterai nikel-kobalt, selisih USD 0,30–0,50 per pon nikel yang hilang akibat efisiensi termal yang terdegradasi akan menentukan apakah suatu proyek HPAL layak secara finansial atau tidak. Oleh karena itu, kemampuan untuk mengkarakterisasi perilaku scaling secara kuantitatif, memprediksi laju pengendapannya, dan merancang strategi descaling berbasis bukti ilmiah merupakan kompetensi kritis bagi insinyur proses dan perancang pabrik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Pelindian Asam Tekanan Tinggi

Pelindian nikel laterit dalam autoclave mengikuti model *shrinking unreacted core* yang dimodifikasi untuk kondisi non-isotermal dengan gradien konsentrasi asam. Untuk partikel laterit berbentuk mendekati bola, fraksi nikel yang terlarut pada waktu $t$ memenuhi:

$$1 - (1 - X_{Ni})^{1/3} = \frac{k_L \cdot C_{H^+,s}}{r_p \cdot \rho_s} \cdot t$$

di mana $X_{Ni}$ adalah fraksi Ni yang terekstrak, $k_L$ adalah konstanta laju pelindian efektif (m/s), $C_{H^+}$ adalah konsentrasi asam pada permukaan partikel (mol/L), $r_p$ adalah jari-jari partikel (m), dan $\rho_s$ adalah densitas mineral padat (kg/m³).

### 2.2 Dependensi Suhu — Persamaan Arrhenius

Konstanta laju pelindian mengikuti hukum Arrhenius, yang penting untuk memprediksi perilaku scaling yang sangat sensitif terhadap suhu operasi:

$$k_L = k_0 \exp\left(-\frac{E_a}{R T}\right)$$

dengan $E_a$ adalah energi aktivasi pelindian Ni-goethit (umumnya 65–85 kJ/mol), $R$ = 8,314 J/(mol·K), dan $T$ suhu absolut (K). Untuk proses HPAL, kenaikan suhu dari 245 °C ke 270 °C secara teoritis melipatgandakan laju pelindian hingga 2,5–3× lipat, namun juga secara eksponensial mempercepat nukleasi dan pertumbuhan kerak.

### 2.3 Kinetika Pembentukan Kerak (Scaling)

Laju akresi kerak dapat dimodelkan sebagai fungsi laju pengendapan senyawa jenuh dan gaya adhesi pada permukaan logam autoclave. Untuk kerak anhidrit dan alunit, persamaan laju akresi mengikuti:

$$\frac{dm_s}{dt} = K_s \left(C_{ion}^{sat} - C_{ion}^{bulk}\right)^n - K_d$$

di mana $m_s$ adalah massa kerak per satuan luas (kg/m²), $K_s$ adalah konstanta presipitasi yang bergantung pada suhu, $C_{ion}^{sat}$ adalah konsentrasi ion jenuh, $C_{ion}^{bulk}$ konsentrasi ion dalam bulk solution, $n$ orde presipitasi (umumnya 1,5–2 untuk alunit), dan $K_d$ adalah laju desorpsi spontan yang biasanya dapat diabaikan untuk kerak anhidrat bersuhu tinggi.

### 2.4 Neraca Massa dan Energi pada Autoclave

Untuk autoclave kontinu dengan volume reaktif $V_r$ (m³), laju umpan slurry $F$ (m³/jam), dan fraksi padatan $\phi$, neraca massa Fe yang membentuk kerak hematit adalah:

$$F \cdot C_{Fe,in} - F \cdot (1 - \phi) \cdot C_{Fe,out} = V_r \frac{dC_{Fe,scale}}{dt} + r_{Fe,scale}$$

dengan $r_{Fe,scale}$ laju deposisi Fe ke dalam kerak. Perpindahan panas efektif di dinding autoclave mengikuti:

$$Q = \frac{2\pi L (T_{steam} - T_{slurry})}{\frac{\ln(r_o/r_i)}{k_{steel}} + \frac{1}{r_i h_i} + \frac{1}{r_o h_o} + R_{scale}}$$

di mana $R_{scale} = \delta_{scale}/k_{scale}$ adalah resistansi termal kerak yang menjadi variabel kunci degradasi performa; ketebalan kerak $\delta_{scale}$ yang meningkat dari 2 mm menjadi 10 mm dapat melipatgandakan $R_{scale}$ hingga 4–5×, menurunkan fluks panas secara proporsional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dan Titik-Titik Kritis Scaling

```
[Bijih Laterit] → [Repulp & Slurrying, 70% solid] 
        → [Pre-heater 1-3 stage] → [Autoclave HPAL 245-270°C, 4-5 MPa] 
        → [Flash Cooling] → [Counter-Current Decantation (CCD)] 
        → [Net Acid Leach Residue] → [Neutralization] 
        → [Sulfide Precipitation Ni/Co] → [Refinery]

       ⇩ Titik Sampling & Inspeksi Scaling ⇩
       • Steam inlet nozzles
       • Agitator shafts & baffles
       • Down-comer pipes
       • Discharge valves
```

### 3.2 SOP Karakterisasi Kerak (Dickson et al., 2026)

1. **Sampling Periodik**: Pengambilan kerak pada lokasi kritis setiap 500–1.000 jam operasi menggunakan *online coupon holder* atau saat *scheduled shutdown* melalui teknik *drilling sampling*.
2. **Karakterisasi Mineralogi**: Analisis XRD (X-Ray Diffraction) dengan rasio Cu-Kα untuk identifikasi fasa hematit, goethit, alunit, jarosit, dan anhidrit. Pola difraktogram di-match dengan database ICDD PDF-4+.
3. **Analisis Morfologi & Komposisi**: SEM-EDS (Scanning Electron Microscopy – Energy Dispersive Spectroscopy) untuk menentukan morfologi kerak (berlapis/massive/porous), ukuran kristal, dan rasio atomik Fe/S, Al/S, K/S yang mengindikasikan komposisi alunit.
4. **Analisis Termal**: TGA (Thermogravimetric Analysis) untuk menentukan kehilangan massa pada rentang suhu 25–1000 °C guna membedakan kerak hidrat (alunit dekomposisi ~550 °C) dan anhidrat.
5. **Pengukuran Ketebalan & Adhesi**: Ultrasonic thickness gauge dan pull-off adhesion tester untuk menentukan $\delta_{scale}$ dan kekuatan adhesi kerak-substrat.

### 3.3 SOP Descaling dan Pencegahan

Strategi operasional dari Andrameda et al. (2024) merekomendasikan tiga pilar utama:

- **Pre-treatment Desulfurization**: penambahan agen desulfurisasi (misalnya CaO, CaCO₃, atau Na₂CO₃ dosis 5–15 kg/ton bijih) untuk mempresipitasikan sulfur sebagai gipsum/anhidrit sebelum feed masuk autoclave, sehingga menurunkan potensi pembentukan kerak sulfat.
- **Optimasi Parameter Roasting-Reduction**: Pemanggangan reduksi pada 600–800 °C dengan atmosfer CO/CO₂ selama 30–90 menit dapat mengubah struktur mineral Fe dan mengurangi kelarutan besi dalam asam.
- **Pulse Acid Washing**: Pencucian asam berkala (acid wash cycle) setiap 200–400 jam operasi dengan H₂SO₄ 10–15% pada 80–90 °C untuk melarutkan kerak anhidrit yang baru terbentuk sebelum sinter lanjut.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Pabrik HPAL Kapasitas 35.000 t Ni/tahun

**Parameter input industri (representatif untuk laterit limonit Indonesia):**

| Parameter | Nilai |
|---|---|
| Laju umpan bijih | $F = 250$ t/jam (basis kering) |
| Suhu operasi autoclave | $T = 265$ °C = 538,15 K |
| Tekanan operasi | $P = 4{,}5$ MPa |
| Konsentrasi asam | $C_{H^+} = 35$ g/L |
| Komposisi bijih: Ni | 1,4%; Fe | 38%; Al | 4,5%; Mg | 1,8%; S | 0,05% |
| Target recovery Ni | 92% |

### 4.2 Perhitungan Kinetika Pelindian

**Langkah 1**: Estimasi $k_L$ dari data referensi Dickson et al. (2026) untuk limonit pada 265 °C dengan $E_a = 72$ kJ/mol dan $k_0 = 4{,}2 \times 10^7$ m/s:

$$k_L = 4{,}2 \times 10^7 \cdot \exp\left(-\frac{72.000}{8{,}314 \cdot 538{,}15}\right)$$
$$k_L = 4{,}2 \times 10^7 \cdot \exp(-16{,}11) = 4{,}2 \times 10^7 \cdot 9{,}97 \times 10^{-8}$$
$$k_L \approx 4{,}19 \text{ m/s}$$

**Langkah 2**: Hitung waktu pelindian untuk $X_{Ni} = 0{,}92$, dengan $r_p = 75\,\mu\text{m} = 7{,}5 \times 10^{-5}$ m, $\rho_s = 3.500$ kg/m³, $C_{H^+,s} \approx 30$ mol/m³:

$$t = \frac{r_p \cdot \rho_s}{k_L \cdot C_{H^+,s}} \cdot \left[1 - (1 - 0{,}92)^{1/3}\right]$$
$$t = \frac{7{,}5 \times 10^{-5} \cdot 3.500}{4{,}19 \cdot 30} \