# 2861 — Perilaku dan Karakterisasi Kerak Autoclave pada Pelindian Bijih Nikel Laterit dalam Kondisi HPAL

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan bijih nikel laterit merupakan tulang punggung strategis bagi rantai pasok baterai kendaraan listrik, baja tahan karat, dan superalloy global. Lebih dari 60% cadangan nikel dunia berada dalam bentuk bijih laterit, namun kadar rendah (0.8–1.5% Ni), kadar air tinggi (25–45%), serta komposisi mineralogi yang kompleks (goethit, limonit, saprolit, serpentinit) menjadikan proses pirometalurgi konvensional kurang efisien. Sejak dekade 1990-an, teknologi **High-Pressure Acid Leaching (HPAL)** diadopsi secara luas karena kemampuannya mengekstraksi nikel dan kobalt secara selektif melalui pelarutan dalam asam sulfat pada suhu 240–270°C dan tekanan 30–40 bar (Dickson, Deleau, & Espitalier, 2026, DOI: [10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)).

Namun demikian, operasi HPAL menghadapi satu permasalahan operasional kronis yang mendestabilisasi keekonomian pabrik: **autoclave scaling** atau pembentukan kerak padat pada dinding bagian dalam reaktor. Dickson dkk. (2026) dalam riset terbaru mereka di *Cleaner Waste Systems* mendokumentasikan bahwa deposit kerak ini terbentuk akibat presipitasi senyawa besi, aluminium, dan kalsium sulfat selama siklus pemanasan dan pendinginan autoclave. Kerak ini menyebabkan tiga dampak operasional terukur: (1) penurunan koefisien perpindahan panas keseluruhan (overall heat transfer coefficient, U) hingga 35–60%; (2) berkurangnya volume efektif reaktor yang pada akhirnya menurunkan *throughput* umpan; dan (3) peningkatan frekuensi *unscheduled shutdown* untuk pembersihan mekanis maupun kimiawi. Studi lapangan oleh Dickson dkk. (2026) menyebutkan bahwa pada fasilitas HPAL berskala komersial, downtime akibat scaling dapat mencapai 12–18% dari total *available operating time* per tahun, yang secara langsung memengaruhi *Net Present Value* (NPV) proyek.

Di sisi hulu, Andrameda, Triaswinanti, dan Madra (2024) dalam *AIP Conference Proceedings* (DOI: [10.1063/5.0186417](https://doi.org/10.1063/5.0186417)) menunjukkan bahwa proses pra-perlakuan bijih, khususnya **desulfurisasi** dan **roasting-reduction**, memiliki pengaruh signifikan terhadap karakteristik residu HPAL. Residu dengan kandungan sulfur dan besi fero tinggi akan mempercepat laju pengendapan kerak di dalam autoclave. Integrasi kedua paper ini memberikan kerangka analitis yang komprehensif: dari persiapan umpan (pra-pengolahan) hingga perilaku reaktor (pelindian aktual). Urgensi riset ini makin nyata mengingat target produksi nikel kelas baterai (*battery-grade NiSO₄*) akan meningkat hampir tiga kali lipat hingga 2030 seiring transisi energi global, sehingga efisiensi autoclave menjadi penentu margin kompetitif.

---

## 2. Landasan Teori & Formulasi Matematis

Perilaku kerak autoclave dapat dimodelkan secara kuantitatif melalui tiga pendekatan utama: **kinetika pertumbuhan kerak**, **penurunan perpindahan panas**, dan **keseimbangan massa pelindian**.

### 2.1 Kinetika Pertumbuhan Kerak

Pertumbuhan ketebalan kerak $\delta(t)$ mengikuti hukum paralel antara laju presipitasi kimia dan laju difusi ion melalui lapisan kerak yang sudah terbentuk (model shrinking-core untuk kerak):

$$\frac{d\delta}{dt} = \frac{k_p \cdot C_{Fe^{3+}}^n}{1 + \frac{\delta}{D_{eff}}}$$

di mana:
- $k_p$ = konstanta laju presipitasi intrinsik (m/s)
- $C_{Fe^{3+}}$ = konsentrasi ion besi(III) dalam larutan bulk (kg/m³)
- $n$ = orde reaksi terhadap konsentrasi Fe³⁺ (tipikal $n = 1.2$ menurut Dickson dkk., 2026)
- $D_{eff}$ = koefisien difusi efektif ion melalui kerak (m²/s)
- $\delta$ = ketebalan kerak pada waktu $t$ (m)

Integrasi persamaan di bawah kondisi batas $\delta(0) = \delta_0$ menghasilkan solusi asimtotik:

$$\delta(t) = \sqrt{\delta_0^2 + 2 \cdot k_p \cdot C_{Fe^{3+}}^n \cdot D_{eff} \cdot t}$$

Persamaan ini menunjukkan bahwa **ketebalan kerak tumbuh secara proporsional terhadap akar waktu operasi**, menjelaskan mengapa autoklaf yang beroperasi kontinu selama 60–90 hari harus menjalani siklus *controlled cooling* untuk *stress-release* kerak.

### 2.2 Penurunan Koefisien Perpindahan Panas

Dickson dkk. (2026) mengukur bahwa keberadaan kerak menurunkan koefisien perpindahan panas keseluruhan $U$ sesuai model resistansi termal seri:

$$\frac{1}{U_{fouled}} = \frac{1}{U_{clean}} + \frac{\delta}{k_{scale}}$$

dengan $U_{clean} \approx 850$ W/m²·K untuk autoclave baja tahan karat 316L bersih, $k_{scale} \approx 0.18$–$0.42$ W/m·K (tergantung komposisi dominan goethit/hematit/anhidrit), dan $\delta$ adalah ketebalan kerak rata-rata. Pada $\delta = 5$ mm, resistansi kerak mencapai $0.012$–$0.028$ m²·K/W, atau setara dengan **kehilangan kapasitas termal 18–35%** yang harus dikompensasi oleh peningkatan konsumsi uap suplai.

### 2.3 Keseimbangan Massa Pelindian

Reaksi pelindian utama bijih laterit limonit oleh asam sulfat:

$$\text{NiO} \cdot \text{Fe}_2\text{O}_3 \cdot \text{H}_2\text{O} + 4\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + 3\text{H}_2\text{O}$$

Konsumsi asam per ton bijih umpan:

$$m_{H_2SO_4} = \frac{\sum_i \nu_i \cdot M_{H_2SO_4}}{y_i} \cdot \frac{w_i}{M_i}$$

dengan $w_i$ = fraksi massa oksida logam $i$ dalam bijih, $M_i$ = berat molekul, $\nu_i$ = stoikiometri kebutuhan asam, dan $y_i$ = fraksi yang terlarut (recovery).

### 2.4 Persamaan Arrhenius untuk Laju Pelindian

Tergantung pada suhu $T$ (K):

$$k(T) = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi tipikal $E_a = 45$–$68$ kJ/mol untuk pelindian goethit, $A$ = faktor pre-eksponensial, dan $R = 8.314$ J/mol·K.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mitigasi kerak autoclave mengikuti kerangka 7-langkah yang diturunkan dari protokol Dickson dkk. (2026) dan prakondisi umpan Andrameda dkk. (2024):

### SOP-HPAL-SCALE-01: Manajemen Kerak Autoclave

**Langkah 1 — Karakterisasi Umpan (Pra-Leaching).**
Bijih laterit kering dianalisis dengan **XRD (X-Ray Diffraction)**, **XRF (X-Ray Fluorescence)**, dan **TGA (Thermogravimetric Analysis)** untuk mengidentifikasi komposisi mineralogi. Menurut Andrameda dkk. (2024), proses **roasting-reduction** pada suhu 700–900°C dengan agen pereduksi batubara kokas selama 60–120 menit menurunkan kadar Fe³⁺ menjadi Fe²⁺ serta mengurangi sulfur (desulfurisasi dengan CaO/Na₂CO₃), sehingga mengurangi kecenderungan presipitasi kerak sulfat.

**Langkah 2 — Slurry Preparation.**
Bijih dicampur dengan air proses dan asam sulfat umpan pada konsentrasi pulp 35–45% w/w di dalam tangki pencampur. Konsentrasi asam awal dijaga pada $C_{H_2SO_4} = 80$–$120$ g/L.

**Langkah 3 — Pre-heating Zone (Autoclave Stage 1).**
Slurry dipanaskan bertahap dari 90°C ke 150°C dalam kompartemen pertama autoclave multi-kompartemen (4–6 kompartemen seri). Di zona ini, sebagian besar mineral sulfida terlarut dan goethit mulai terhidrasi.

**Langkah 4 — Main Leaching Zone (Stage 2–4).**
Suhu dipertahankan pada 245–270°C dengan tekanan uap 35–42 bar. Waktu tinggal 60–90 menit di setiap kompartemen. Kontrol parameter dilakukan dengan **Distributed Control System (DCS)** menggunakan sensor $T$, $P$, dan pH *in-line*.

**Langkah 5 — Flash Cooling & Discharge.**
Larutan hasil pelindian didinginkan secara mendadak (*flash*) ke 90–110°C, yang menjadi momen kritis pelepasan kerak (*scale spallation*) karena *thermal stress* antara baja autoclave (CTE ≈ 17·10⁻⁶ /°C) dan kerak (CTE ≈ 8·10⁻⁶ /°C).

**Langkah 6 — Acid Wash / Descaling Cycle.**
Setiap 30–60 hari operasi, autoclave menjalani siklus pencucian asam dengan larutan $\text{H}_2\text{SO}_4$ 5–8% pada suhu 80–95°C selama 6–12 jam untuk melarutkan kerak sulfat residual.

**Langkah 7 — Inspeksi & Monitoring.**
Pengukuran ketebalan kerak dengan **ultrasonic thickness gauge** dan **eddy current testing** pada titik-titik kritis (sambungan las, zona transisi panas). Data historis diolah dengan model **ARIMA** atau **Random Forest regression** untuk memprediksi jadwal descaling optimal.

```
[Umpan Bijih] → [Roasting-Reduction] → [Slurry Mixing]
       ↓                                       ↓
[Karakterisasi XRD/XRF]              [Pre-heater (90→150°C)]
                                                ↓
                                       [Main Leaching (245–270°C)]
                                                ↓
                                       [Flash Cooling]
                                                ↓
                            ┌───────────────────┴────────────────┐
                            ↓                                    ↓
                  [Larutan Pregnant (Ni, Co)]      [Residu Tailing ke Neutralisasi]
                            ↓                                    ↑
                  [Purifikasi & Recovery]         [Monitoring Kerak via UT]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Operasi HPAL

Ambil kapasitas umpan harian: $F = 2{,}500$ ton bijih laterit/hari dengan komposisi:
- Ni = 1.25%, Co = 0.08%, Fe total = 38.0%, Al = 4.2%, Mg = 4.8%, S = 0.05%
- Mineralogi dominan: goethit (α-FeOOH) 60%, hematit 15%, serpentin 18%, garnierit 5%, kuarsa 2%
- Operasi autoclave: $T = 255°C = 528$ K, $P = 38$ bar
- Recovery target: Ni = 94%, Co = 92%, Fe = <2% (sebagian besar Fe ikut tailing)

### 4.2 Perhitungan Kebutuhan Asam Sulfat

Kebutuhan asam dominan adalah pelarutan Fe (oksida besi), Al, dan Mg:

$$m_{H_2SO_4}^{Fe} = \frac{3 \cdot 98}{160} \cdot \frac{0.94 \cdot 0.38 \cdot F}{1} = 1.8425 \cdot 0.3572 \cdot F = 0.658 \cdot F$$

$$m_{H_2SO_4}^{Al} = \frac{3 \cdot 98}{102} \cdot 0.42 \cdot F = 2.882 \cdot 0.042 \cdot F = 0.121 \cdot F$$

$$m_{H_2SO_4}^{Mg} = \frac{98}{40} \cdot 0.70 \cdot F = 2.45 \cdot 0.048 \cdot F = 0.118 \cdot F$$

$$m_{H_2SO_4}^{Ni+Co} = \frac{98}{59} \cdot 0.94 \cdot 0.0125 \cdot