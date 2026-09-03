# 1805 — Rekayasa Autoclave HPAL: Karakterisasi Pembentukan Scale dan Optimasi Desulfurisasi pada Proses Hidrometalurgi Nikel Laterit

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Autoclave scaling behaviour and characterisation during nickel laterite ore leaching under HPAL conditions
**Jurnal & Sitasi Utama:** Okechukwu Vincent Dickson, Thomas Deleau, Fabienne Espitalier (2026). *Cleaner Waste Systems*. DOI: [https://doi.org/10.1016/j.clwas.2026.100503](https://doi.org/10.1016/j.clwas.2026.100503)
**Sitasi Pendukung:** Yurian Ariandi Andrameda, Rininta Triaswinanti, Quinta Nadya Madra (2024). *AIP Conference Proceedings*. DOI: [https://doi.org/10.1063/5.0186417](https://doi.org/10.1063/5.0186417)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap nikel kelas baterai (battery-grade nickel) telah melonjak tajam seiring transisi elektrifikasi kendaraan dan penyimpanan energi skala utilitas. International Energy Agency (IEA) melaporkan bahwa permintaan nikel untuk baterai lithium-ion akan naik lebih dari tiga kali lipat pada 2030, dengan porsi terbesar berasal dari bijih nikel laterit yang menyumbang sekitar 60–70% cadangan nikel terrestre global namun hanya 40% produksi karena kendala teknis ekstraksi. Dalam konteks ini, **High-Pressure Acid Leaching (HPAL)** muncul sebagai teknologi hidrometalurgi strategis untuk mengolah bijih limonit dan saprolit kadar rendah (0,8–1,5% Ni) yang tidak ekonomis melalui pirometalurgi konvensional (Dickson, Deleau, & Espitalier, 2026).

Namun, adopsi HPAL menghadapi satu masalah operasional kronis yang mendistorsi keekonomisan proyek: **pembentukan kerak (scale) pada dinding dan komponen internal autoclave**. Dickson et al. (2026) mendokumentasikan bahwa endapan mineral anorganik — terutama *amorphous silica*, *cristobalite*, *hematite*, *goethite*, dan *alunite* — terakumulasi pada permukaan padatan autoclave dengan laju 0,8–2,3 mm per 100 siklus operasi, mengurangi koefisien perpindahan panas dinding efektif hingga 35% dan menurunkan *overall nickel extraction yield* sebesar 4–9 poin persentase akibat gangguan hidrodinamika slurry. Studi Andrameda, Triaswinanti, dan Madra (2024) dari *AIP Conference Proceedings* melengkapi temuan ini dengan menunjukkan bahwa residu HPAL yang mengandung sulfur tinggi memerlukan tahap *roasting-reduction* lanjutan untuk memulihkan nikel residual, namun proses desulfurisasi ini sendiri dapat memicu refluidisasi skala dan deposisi ulang di autoclave.

Urgensi ekonomi persoalan ini sangat besar. Untuk pabrik HPAL dengan kapasitas 30.000–50.000 ton nikel per tahun (misalnya pabrik PT Halmahera Persada Lygend di Indonesia, atau proyek Huafei di Sulawesi), downtime akibat *acid washing* dan *mechanical descaling* dapat mencapai 12–18% dari *nameplate capacity*, setara kerugian revenue USD 60–120 juta per tahun pada harga nikel LME USD 18.000/ton. Ditambah lagi, konsumsi asam sulfat yang melonjak 15–25% akibat inefisiensi leaching yang dipicu fouling, menambah *operating cost* sebesar USD 8–14 per pon nikel. Oleh karena itu, kemampuan memodelkan kinetika pembentukan scale, memprediksi komposisi fasa endapan, dan merancang jadwal descaling prediktif merupakan kompetensi rekayasa kritis bagi praktisi Teknik Industri yang terlibat dalam *process design*, *plant reliability engineering*, dan *operations research* di sektor metalurgi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Termodinamika Leaching dan Driving Force Supersaturasi

Proses HPAL terjadi pada rentang termodinamika yang sangat spesifik: temperatur 240–270 °C, tekanan parsial 35–55 bar, dan konsentrasi asam sulfat 150–250 g/L. Pada kondisi ini, reaksi disolusi nikel, kobalt, dan besi mengikuti stoikiometri:

$$\text{NiO}\cdot\text{Fe}_2\text{O}_3 + 4\text{H}_2\text{SO}_4 \rightarrow \text{NiSO}_4 + \text{Fe}_2(\text{SO}_4)_3 + 4\text{H}_2\text{O}$$

$$\text{CoO} + \text{H}_2\text{SO}_4 \rightarrow \text{CoSO}_4 + \text{H}_2\text{O}$$

Kelarutan silika amorf $\text{SiO}_2$ pada kondisi HPAL meningkat hingga 350–450 ppm, kemudian turun kembali saat slurry mendingin di zona outlet. Penurunan kelarutan ini menciptakan *supersaturation index* (SI) yang didefinisikan sebagai:

$$\text{SI} = \log_{10}\left(\frac{a_{\text{H}_4\text{SiO}_4}}{K_{sp,\text{SiO}_2}(T)}\right)$$

di mana $a_{\text{H}_4\text{SiO}_4}$ adalah aktivitas asam silikat dan $K_{sp}$ adalah konstanta kesetimbangan yang bergantung temperatur menurut persamaan *van't Hoff*:

$$\ln K_{sp}(T) = \ln K_{sp}(T_0) - \frac{\Delta H^\circ}{R}\left(\frac{1}{T} - \frac{1}{T_0}\right)$$

dengan $\Delta H^\circ \approx -19{,}2$ kJ/mol untuk reaksi polimerisasi silika dan $R = 8{,}314$ J/(mol·K). Ketika SI melewati ambang kritis +1.5, nukleasi heterogen pada dinding autoclave menjadi dominan (Dickson et al., 2026).

### 2.2 Model Kinetika Pertumbuhan Skala

Laju deposisi massa scale per satuan luas permukaan autoclave dimodelkan dengan persamaan *parabolic rate law* yang telah divalidasi oleh Dickson et al. (2026) melalui eksperimen *autoclave pilot* 50 L:

$$\frac{dm_s}{dt} = \frac{k_p}{m_s + m_0}$$

dengan solusi integral:

$$m_s(t) = \sqrt{2 k_p t + m_0^2} - m_0$$

di mana:
- $m_s(t)$ = massa scale per satuan luas pada waktu $t$ (mg/cm²)
- $k_p$ = konstanta laju parabolic (mg²/(cm⁴·jam))
- $m_0$ = massa scale awal (mg/cm²)

Parameter $k_p$ mengikuti hukum Arrhenius:

$$k_p = A_p \exp\left(-\frac{E_a}{RT}\right)$$

dengan energi aktivasi $E_a = 68{,}4$ kJ/mol untuk skala silika dan $E_a = 41{,}7$ kJ/mol untuk skala besi-oksida, serta faktor pre-eksponensial $A_p$ yang bergantung pada komposisi slurry (Dickson et al., 2026).

### 2.3 Model Perpindahan Panas dengan Resistansi Termal Skala

Efek scale terhadap perpindahan panas dinding autoclave dimodelkan sebagai resistansi termal seri:

$$U_{\text{eff}}^{-1} = U_0^{-1} + \frac{\delta_s}{k_s} + \frac{\delta_f}{k_f}$$

di mana:
- $U_0$ = koefisien overall heat transfer bersih (W/(m²·K))
- $\delta_s, \delta_f$ = tebal scale dan fouling layer (m)
- $k_s, k_f$ = konduktivitas termal scale dan fouling

Untuk skala silika amorf, $k_s \approx 0{,}15$ W/(m·K), sedangkan untuk hematit $\approx 2{,}5$ W/(m·K). Dengan tebal scale 3 mm, penurunan fluks kalor mencapai 28–40% tergantung komposisi (Dickson et al., 2026).

### 2.4 Model Recovery Nikel dari Residu Desulfurisasi

Andrameda et al. (2024) menurunkan model kinetika *roasting-reduction* dengan persamaan *shrinking core* untuk recoveri nikel dari residu HPAL:

$$1 - \frac{2}{3}\alpha - (1-\alpha)^{2/3} = \frac{k_r}{R_p^2 \rho_s C_s} \cdot t$$

dengan:
- $\alpha$ = fraksi konversi
- $R_p$ = radius partikel (m)
- $\rho_s$ = densitas padatan (kg/m³)
- $C_s$ = konsentrasi reaktan padat (mol/m³)
- $k_r$ = konstanta laju reaksi (m²/s)

Konstanta $k_r$ dipengaruhi temperatur sesuai Arrhenius dengan $E_a = 142{,}3$ kJ/mol untuk reaksi reduksi NiO oleh CO (Andrameda, Triaswinanti, & Madra, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Proses HPAL dan Titik Kritis Pembentukan Scale

Diagram alir proses HPAL secara umum mencakup tahapan *preparation*, *leaching*, *neutralization*, *CCD washing*, *SX-EW*, dan *product precipitation*. Tahapan kritis pembentukan scale terutama terjadi pada:

1. **Zona 1: Slurry inlet nozzle (180–220 °C)** — titik awal nukleasi heterogen silika karena pendinginan lokal.
2. **Zona 2: Agitator shaft dan impeller** — akumulasi endapan akibat turbulensi rendah di belakang blade.
3. **Zona 3: Internal baffles dan heat exchanger tubes** — *hot spots* memicu dekomposisi alunit.
4. **Zona 4: Discharge nozzle (90–110 °C)** — quenching mendadak menurunkan kelarutan Si dan Al.

### 3.2 SOP Pengendalian Scale Berbasis Prediksi Kinetika

Berikut adalah SOP yang dirancang berdasarkan metodologi Dickson et al. (2026):

**Langkah 1: Sampling dan Karakterisasi Awal**
Ambil *coupon* baja tahan karat 316L yang dipasang di empat lokasi kritis autoclave. Lakukan analisis XRD (rentang 2θ = 5–80°) dan SEM-EDS untuk identifikasi fasa scale dominan.

**Langkah 2: Penentuan Indeks Supersaturasi Harian**
Hitung SI setiap 4 jam menggunakan data operasional:

$$\text{SI} = f(T, [\text{H}_2\text{SO}_4], [\text{Si}]_{\text{dissolved}}, \text{pH})$$

Implementasikan model ini ke dalam *digital twin* berbasis sensor IoT.

**Langkah 3: Penjadwalan Acid Wash**
Trigger *acid wash* dengan larutan H₂SO₄ 5% + HF 0,3% pada 80 °C selama 6 jam ketika:

$$\int_0^t \text{SI}(t) \, dt > \text{SI}_{\text{threshold}} \cdot t_{\text{cycle}}$$

dengan $\text{SI}_{\text{threshold}} = 1{,}2$ (Dickson et al., 2026).

**Langkah 4: Roasting-Reduction Residu (Andrameda et al., 2024)**
Untuk residu HPAL dengan kadar S > 0,8%, lakukan roasting pada 700–850 °C selama 60–120 menit dengan reduktan kokas 8–12% wt, diikuti *magnetic separation* untuk recoveri Fe-Ni.

**Langkah 5: Validasi Kualitas Scale Removal**
Ukur ketebalan scale residual menggunakan ultrasonic thickness gauge. Kriteria lulus: $\delta_s \leq 0{,}3$ mm.

### 3.3 Standar Industri Acuan

Implementasi SOP harus memenuhi standar:
- **ASM Handbook Vol. 13** untuk *corrosion and scaling control*
- **NACE SP0176** untuk *autoclave material selection*
- **ISO 9001:2015** untuk *quality management system*
- **ASTM D1129** untuk terminology scale chemistry

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Kasus: Autoclave HPAL Kapasitas 50.000 ton Ni/tahun

Parameter operasional referensi:
- Temperatur operasi: $T = 255$ °C = 528,15 K
- Tekanan: $P = 42$ bar
- Konsentrasi asam sulfat awal: $C_{\text{acid}} = 200$ g/L
- Residence time: $t_{res} = 60$ menit
- Laju alir slurry: $\dot{m}_{sl} = 280$ ton/jam
- Komposisi slurry: 35% padatan laterit, kadar SiO₂ = 4,2% wt
- Diameter autoclave: $D = 4{,}5$ m, panjang $L = 28$ m
- Luas permukaan dalam autoclave: $A \approx \pi D L + 2 \cdot \pi D^2/4 \approx 428{,}8$ m²

### 4.2 Perhitungan Laju Pembentukan Skala Silika

**Langkah 1: Konsentrasi silika terlarut saat leaching**

Dari keseimbangan massa leaching pada 255 °C dengan SiO₂ dalam bijih 4,2% wt dan recovery leaching 92%:

$$[\text{Si}]_{\text{dissolved}} = \frac{0{,}042 \times 0{,}92}{M_{\text{SiO}_2}} \times \frac{\rho_{\text{sl}}}{\dot{m}_{sl}} \times 10^6$$

$$[\text{Si}] = \frac{0{,}042 \times 0{,}92}{60{,}08} \times 1{,}42 \times 10^6 \approx 713 \text{ ppm}$$

Namun, kelarutan jenuh SiO₂ amorf pada 255 °C