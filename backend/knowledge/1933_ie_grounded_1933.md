# 1933 — Karakterisasi dan Pengendalian Autoclave Scaling pada Pelindian Bijih Nikel Laterit dalam Kondisi High-Pressure Acid Leaching (HPAL)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak secara eksponensial seiring transisi energi menuju elektrifikasi kendaraan dan penyimpanan energi stasioner. Bijih nikel laterit, yang menyumbang sekitar 70% dari cadangan nikel terrestrial dunia namun hanya 40% dari produksi global, menjadi sumber daya strategis yang tidak terhindarkan. Dickson, Deleau, dan Espitalier (2026) dalam *Cleaner Waste Systems* menyoroti bahwa proses High-Pressure Acid Leaching (HPAL) merupakan teknologi hidrometalurgi paling mapan untuk mengekstraksi nikel dan kobalt dari bijih limonit dan saprolit kadar rendah, dengan kondisi operasi tipikal pada rentang suhu 240–270 °C dan tekanan 30–55 bar menggunakan asam sulfat pekat sebagai agen pelindi.

Namun demikian, operasionalisasi HPAL menghadapi bottleneck klasik yang menurunkan availability autoclave secara signifikan: fenomena **autoclave scaling** — terbentuknya lapisan kerak anorganik pada dinding dalam reaktor yang menghambat perpindahan panas, mempersempit luas penampang efektif pipa, dan menurunkan koefisien perpindahan kalor menyeluruh hingga 35–50%. Dickson et al. (2026) mengkarakterisasi bahwa scale pada autoclave HPAL tersusun atas campuran multi-fasa yang terdiri dari amorf silika (SiO₂·nH₂O), basic iron sulfates seperti jarosite-natrium/kalium [Na/KFe₃(SO₄)₂(OH)₆], hematit (Fe₂O₃), alunit, dan gypsum (CaSO₄·2H₂O) yang terbentuk melalui mekanisme presipitasi retrograde ketika ion Fe³⁺, Al³⁺, dan Si⁴⁺ mengalami hidrolisis pada kondisi superkritis air. Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* menambahkan dimensi penting melalui studi proses *roasting-reduction* terhadap residu HPAL dengan variasi agen desulfurisasi, suhu, dan waktu tinggal, yang secara langsung memengaruhi komposisi residu dan sifat adhesifnya terhadap dinding autoclave.

Urgensi ekonomis dari pengendalian scaling ini sangat substansial. Setiap siklus *shut-down* untuk *acid wash* dan descaling mekanis pada autoclave HPAL berkapasitas 5.000–7.000 ton umpan per hari menyebabkan kerugian produksi yang diestimasi mencapai USD 1,5–3 juta per kejadian pada fasilitas kelas dunia. Konsumsi asam sulfat juga meningkat 8–15% akibat retensi asam pada lapisan scale. Oleh karena itu, pemahaman kuantitatif terhadap perilaku scaling, laju akumulasinya, dan komposisi mineraloginya menjadi fondasi penting bagi *reliability engineering*, predictive maintenance, dan optimalisasi *throughput* fasilitas HPAL modern.

## 2. Landasan Teori & Formulasi Matematis

Karakterisasi autoclave scaling memerlukan kerangka kuantitatif multi-disiplin yang mengintegrasikan termodinamika presipitasi, kinetika reaksi heterogen, dan perpindahan massa-kalor antarmuka padat-cair. Berikut formulasi fundamental yang digunakan dalam kerangka analisis Dickson et al. (2026) dan studi pendukung Andrameda et al. (2024).

### 2.1 Kinetika Pertumbuhan Scale

Laju akumulasi scale pada permukaan autoclave dimodelkan menggunakan persamaan laju presipitasi heterogen orde pseudo-pertama terhadap konsentrasi ion logam sisa:

$$\frac{dm_s}{dt} = k_p \cdot C_{ion}^n \cdot \exp\left(-\frac{E_a}{RT}\right) - k_d \cdot \tau_{shear}$$

di mana $m_s$ adalah massa scale per satuan luas (kg/m²), $k_p$ adalah konstanta laju presipitasi (m/s), $C_{ion}$ adalah konsentrasi ion terlarut dalam mol/L, $n$ adalah orde reaksi (umumnya 1–2), $E_a$ adalah energi aktivasi (kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), $T$ adalah suhu operasi (K), $k_d$ adalah konstanta detachmen bergantung shear stress fluida, dan $\tau_{shear}$ adalah tegangan geser dinding.

### 2.2 Termodinamika Presipitasi Retrograde

Pada kondisi HPAL, kelarutan basic iron sulfates dan silika amorf menurun seiring kenaikan suhu di atas 200 °C, yang diformulasikan melalui persamaan van't Hoff untuk produk kelarutan:

$$\ln K_{sp}(T) = \ln K_{sp}(T_{ref}) - \frac{\Delta H_{diss}}{R}\left(\frac{1}{T} - \frac{1}{T_{ref}}\right)$$

dengan $K_{sp}$ sebagai konstanta produk kelarutan, $\Delta H_{diss}$ sebagai entalpi dissosiasi, dan $T_{ref}$ sebagai suhu referensi. Indeks supersaturasi S yang memicu nukleasi didefinisikan sebagai:

$$S = \frac{[Fe^{3+}][OH^-]^3}{K_{sp}(T)} \cdot \prod_i [X_i]^{m_i}$$

Laju nukleasi homogen dan heterogen mengikuti formulasi klasik:

$$J = J_0 \cdot \exp\left(-\frac{16\pi \gamma^3 v^2}{3k_B^3 T^3 (\ln S)^2}\right)$$

dengan $\gamma$ sebagai energi antarmuka (J/m²), $v$ sebagai volume molekuler (m³), dan $k_B$ sebagai konstanta Boltzmann.

### 2.3 Perpindahan Kalor dengan Resistansi Scale

Koefisien perpindahan kalor menyeluruh (overall heat transfer coefficient, $U$) pada autoclave berscale dimodelkan sebagai resistansi seri:

$$\frac{1}{U} = \frac{1}{h_i} + \frac{\delta_{wall}}{k_{steel}} + \frac{\delta_{scale}}{k_{scale}} + \frac{1}{h_o}$$

di mana $h_i$ dan $h_o$ adalah koefisien konveksi sisi dalam dan luar, $\delta$ adalah ketebalan lapisan, dan $k$ adalah konduktivitas termal. Untuk scale komposit dengan porositas $\epsilon$:

$$k_{scale}^{eff} = k_{solid}(1-\epsilon) + k_{fluid}\epsilon$$

Dickson et al. (2026) melaporkan bahwa $k_{scale}^{eff}$ untuk scale jarosite-silika-hematit berada pada rentang 0,4–1,2 W/m·K, jauh lebih rendah dibandingkan baja autoclave (~45 W/m·K), sehingga setiap milimeter scale menyebabkan degradasi termal signifikan.

### 2.4 Ekstraksi Nikel sebagai Fungsi Temperatur dan Konsentrasi Asam

Yield ekstraksi nikel dan kobalt dimodelkan menggunakan pers Shrinking Core Model (SCM) untuk partikel bijih laterit:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_c \cdot C_{H_2SO_4}}{\rho_p r_p^2} \cdot t$$

dengan $\alpha$ sebagai fraksi konversi, $k_c$ sebagai konstanta laju reaksi intrinsik (m/s), $\rho_p$ sebagai densitas partikel, dan $r_p$ sebagai jari-jari awal partikel. Andrameda et al. (2024) melaporkan bahwa *pre-treatment roasting-reduction* dengan variasi agen desulfurisasi mampu meningkatkan recovery residu secara signifikan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengendalian autoclave scaling mengikuti kerangka SOP berlapis yang dikembangkan dari praktik terbaik industri dan temuan Dickson et al. (2026). Diagram alir proses rekayasa dapat digambarkan sebagai berikut:

```
┌──────────────────────────────────────────────────────────────┐
│ 1. KARAKTERISASI UMHPAN (Feed Characterisation)             │
│    • XRF/XRD mineralogi bijih laterit                        │
│    • Distribusi ukuran partikel (PSD)                        │
│    • Rasio limonit:saprolit, kadar MgO/Al₂O₃/SiO₂           │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. PRE-TREATMENT (Andrameda et al., 2024)                   │
│    • Roasting-Reduction (700–900 °C, 30–90 menit)           │
│    • Penambahan agen desulfurisasi (CaO/Na₂CO₃)              │
│    • Pengaturan waktu tinggal & atmosfer (N₂/CO)             │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. HPAL OPERASI (Dickson et al., 2026)                      │
│    • Injeksi slurry 25–35% solids + H₂SO₄ 95–98%            │
│    • Pemanasan bertahap ke 245–270 °C                       │
│    • Tekanan autogenous 40–55 bar                           │
│    • Waktu tinggal 60–90 menit dalam 4–6 kompartemen         │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│ 4. MONITORING SCALE FORMATION                                │
│    • Online skin thermocouple untuk deteksi fouling          │
│    • Sampling kerak terjadwal (per 30 hari operasi)          │
│    • SEM-EDS, XRD untuk karakterisasi mineralogi             │
│    • Tracking pressure drop & steam consumption              │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│ 5. MITIGASI & DESCALING                                     │
│    • Chemical acid wash (H₂SO₄ 10–15%, 80 °C, 6–8 jam)     │
│    • Mechanical pigging (jetting 200–400 bar)                │
│    • Inhibitor injection (polimer/fosfonat skala ppm)        │
└──────────────────────────────────────────────────────────────┘
```

**SOP Rinci untuk Setiap Kompartemen Autoclave:**

1. **Kompartemen Pemanas Awal (Pre-heater):** Pemanasan slurry dari 80 °C ke 200 °C dengan steam langsung; monitoring kandungan Fe²⁺/Fe³⁺ ratio target 1:3 untuk mencegah presipitasi dini jarosite.

2. **Kompartemen Reaksi Utama:** Operasi pada 250 ± 5 °C dengan residence time 75 menit; kontrol *excess acid* 25–35 g/L H₂SO₄ bebas untuk memastikan dissolution limonit optimal tanpa overshoot.

3. **Kompartemen Pendingin (Flash Cooler):** Penurunan tekanan secara bertahap dari 50 bar ke atmosfer; investasi flash steam recovery untuk efisiensi energi.

4. **Siklus Descaling Periodik:** Dilakukan setiap 60–90 hari operasi kontinu dengan parameter spesifik sesuai komposisi scale hasil karakterisasi XRD.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Autoclave HPAL Kompartemen-3 pada fasilitas hipotetik berkapasitas 6.000 tpd bijih laterit limonit dengan komposisi umpan 1,45% Ni, 0,12% Co, 38% Fe, 4,2% MgO, 5,8% Al₂O₃, dan 12% SiO₂. Suhu operasi target $T = 255°C = 528,15 K$, tekanan $P = 48 bar$, konsentrasi asam sulfat bebas $C_{H_2SO_4} = 30 g/L$, laju alir slurry $Q = 280 m^3/jam$.

### Langkah 1: Perhitungan Perpindahan Kalor dengan Scale

Misalkan setelah 45 hari operasi, terbentuk scale dengan komposisi 55% jarosite-Na, 25% amorf silika, 15% hematit, dan 5% gypsum. Konduktivitas termal masing-masing komponen: $k_{jarosite} = 0,55$ W/m·K, $k_{silika} = 0,35$ W/m·K, $k_{hematit} = 2,2$ W/m·K, $k_{gypsum} = 1,3$ W/m·K.

Konduktivitas efektif rule-of-mixture (parallel model untuk estimasi konservatif):

$$k_{scale}^{eff} = \sum_i x_i \cdot k_i = 0,55(0,55) + 0,25(0,35) + 0,15(2,2) + 0,05(1,3)$$

$$k_{scale}^{eff} = 0,3025 + 0,0875 +