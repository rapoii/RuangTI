# 2732 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dan Sistem Pemantauan Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi modern yang digunakan untuk menstabilkan produk biologis, antibodi monoklonal, vaksin mRNA, dan formulasi protein termolabil. Proses ini menghilangkan air melalui sublimasi pada tekanan rendah sehingga mempertahankan integritas struktural produk yang tidak dapat dicapai oleh metode pengeringan konvensional. Seperti ditegaskan oleh Meza-Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4), kebutuhan akan visibilitas *real-time* terhadap variabel kritis proses (*Critical Process Parameters*/CPP) telah menjadi pendorong utama adopsi Jaringan Sensor Nirkabel (*Wireless Sensor Networks*/WSN) di lini produksi farmasi maju.

Secara ekonomis, industri farmasi global menghadapi kerugian lebih dari USD 50 miliar per tahun akibat *batch failure* dan *deviasi proses* yang tidak terdeteksi secara dini (Artusio, Barresi, & Pisano, 2026, DOI: 10.1002/9783527850303.ch11). Regulator FDA melalui inisiatif *Process Analytical Technology* (PAT) dan kerangka Quality-by-Design (QbD) ICH Q8-Q11 secara eksplisit menuntut *continuous monitoring* dan *feedback control* terhadap parameter suhu produk, tekanan ruang (*chamber pressure*), dan fluks sublimasi. Implementasi WSN memungkinkan penempatan banyak *node* sensor secara spasial tanpa hambatan kabel elektrik—sebuah keterbatasan signifikan pada thermocouple konvensional yang seringkali hanya memetakan satu titik representatif per vial.

Urgensi teknis utama terletak pada karakteristik *batch heterogeneity* pada skala industri: gradien suhu radial antara vial tepi (*edge vials*) dan vial tengah (*center vials*) di rak (*shelf*) liofilizer dapat melebihi 5–8°C pada kondisi sublimasi agresif, menimbulkan risiko *collapse* pada produk biologis bernilai tinggi. Dengan jaringan sensor nirkabel, operator dapat memperoleh *spatial-temporal mapping* yang granular—mendukung strategi *advanced process control* (APC) berbasis model *first-principles* atau *machine learning*. Integrasi ini merupakan manifestasi langsung dari visi *Industry 4.0* dan *Smart Manufacturing* dalam konteks *aseptic processing* farmasi.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kuantitatif proses liofilisasi dalam kerangka WSN-PAT mengikuti rezim perpindahan kalor dan massa simultan. Persamaan dasar sublimasi pada *primary drying* dirumuskan oleh Meza-Galvan dkk. (2026) sebagai:

$$\dot{m} = \frac{A_p \cdot P_c}{R_g \cdot T_{ice}} \cdot \left[ x_w(T_p) - x_w(P_c) \right]$$

di mana $\dot{m}$ adalah laju sublimasi (kg/s), $A_p$ luas sublimasi efektif (m²), $P_c$ tekanan ruang (Pa), $R_g$ konstanta gas (J/(kg·K)), $T_{ice}$ suhu es sublimasi (K), dan $x_w$ fraksi mol uap air. Laju sublimasi ini harus sama dengan fluks kalor yang dihantarkan dari rak:

$$\dot{Q} = K_v \cdot A_v \cdot (T_{shelf} - T_p)$$

dengan $K_v$ koefisien transfer kalor keseluruhan (W/(m²·K)), $A_v$ luas vial, $T_{shelf}$ suhu rak, dan $T_p$ suhu produk pada *ice front*. Mekanisme $K_v$ tersusun atas tiga resistansi seri:

$$K_v = \left( \frac{1}{K_c} + \frac{1}{K_r} + \frac{1}{K_g} \right)^{-1}$$

di mana $K_c$ konduksi kontak vial-rak, $K_r$ radiasi (signifikan pada vakum tinggi), dan $K_g$ konduksi gas residu.

Untuk memantau suhu produk $T_p$ melalui WSN, sensor thermocouple nirkabel harus memenuhi *response time* yang memenuhi kriteria Biot number rendah:

$$Bi = \frac{h \cdot L}{k_{ice}} < 0{,}1$$

di mana $h$ koefisien konveksi pada permukaan vial dan $k_{ice}$ konduktivitas termal es ($k_{ice} \approx 2{,}22$ W/(m·K) pada −20°C). Model degradasi produk mengikuti kinetika Arrhenius:

$$\ln(k) = \ln(A) - \frac{E_a}{R_g \cdot T_p}$$

Konsentrasi produk aktif terdegradasi $C(t) = C_0 \cdot e^{-k \cdot t^m}$, dengan $m \approx 1$ untuk orde pertama. Ketidakpastian pengukuran sensor mengikuti hukum propagasi Gauss:

$$u_c^2(y) = \sum_{i=1}^{n} \left( \frac{\partial y}{\partial x_i} \right)^2 u^2(x_i)$$

yang menjadi dasar validasi metrologi WSN dalam kepatuhan GMP (Artusio dkk., 2026).

## 3. Metodologi Rekayasa & SOP

Standard Operating Procedure (SOP) untuk implementasi WSN dalam liofilisasi farmasi mengikuti arsitektur berlapis yang dipetakan oleh Meza-Galvan dkk. (2026):

**Tahap 1 — Risk Assessment & Sensor Specification (ICH Q9):**
Identifikasi *Critical Quality Attributes* (CQA) seperti residu air ≤ 1%, aktivitas biologis > 95%, dan *cake appearance*. Tetapkan CPP: $T_{shelf}$, $P_c$, $T_p$, dan waktu *primary drying*. Akuisisi sensor WSN harus memenuhi akurasi ±0,5°C untuk suhu dan ±0,1 Pa untuk tekanan.

**Tahap 2 — Deployment Jaringan Sensor:**
Penempatan *mesh node* dengan protokol IEEE 802.15.4 atau LoRaWAN pada frekuensi 2,4 GHz / 868 MHz. *Gateway* terpasang di luar *cleanroom* Grade B sesuai ISO 14644-1. Validasi kalibrasi 3-titik dengan traceability ke NIST melalui *Standard Reference Material* (SRM).

**Tahap 3 — Akuisisi & Streaming Data:**
Arsitektur berlapis: (a) *edge node* dengan ADC 24-bit dan sampling rate ≥ 1 Hz; (b) *fog layer* untuk filter Kalman; (c) *cloud* berbasis OPC UA / MQTT untuk supervisory control. Format data mengikuti ISA-95 dan batch standar ISA-88.

**Tahap 4 — Process Control & Model-Predictive Strategy:**
Implementasi MPC (*Model Predictive Control*) dengan *prediction horizon* $N_p$ dan *control horizon* $N_c$ yang meminimalkan fungsi biaya:

$$J = \sum_{j=1}^{N_p} \| \hat{y}(k+j|k) - r(k+j) \|_Q^2 + \sum_{j=1}^{N_c} \| \Delta u(k+j-1) \|_R^2$$

dengan bobot matriks $Q$ dan $R$ diset untuk menyeimbangkan *setpoint tracking* dan *actuator effort*.

**Tahap 5 — Continuous Verification (FDA PAT Guidance):**
Real-time *release testing* (RTRT) menggantikan *end-product testing*, dengan statistical process control (SPC) pada *control charts* CUSUM atau EWMA. Dokumentasi mengikuti 21 CFR Part 11 dengan *electronic signature* dan *audit trail*.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Studi Kasus:** Liofilisasi antibodi monoklonal (mAb) 100 mg/mL pada lyophilizer skala pilot dengan 1.000 vial (volume isi 2 mL).

**Parameter input industri:**
- Diameter vial dalam: $d_i = 16{,}0$ mm, tinggi isi $L = 10$ mm
- $T_{shelf} = -15°C$, $P_c = 10$ Pa
- Tekanan uap air es pada $T_p = -25°C$: $p_w(T_p) \approx 63{,}3$ Pa (Clausius-Clapeyron)
- $K_v = 11$ W/(m²·K) tipikal vial tubuler Schott

**Langkah 1 — Hitung fluks sublimasi per vial:**
$$A_v = \pi \cdot d_i \cdot L / 2 = \pi \cdot 0{,}016 \cdot 0{,}010 = 5{,}03 \times 10^{-4} \text{ m}^2$$

$$x_w(T_p) = \frac{p_w(T_p)}{P_{total}} = \frac{63{,}3}{10^5} = 6{,}33 \times 10^{-4} \text{ (fraksi mol parsial)}$$

$$\dot{m} = K_v \cdot A_v \cdot (T_{shelf} - T_p) / \Delta H_s$$

dengan $\Delta H_s \approx 2.838$ kJ/kg. Fluks kalor per vial:
$$\dot{Q} = 11 \cdot 5{,}03 \times 10^{-4} \cdot (-15 - (-25)) = 0{,}0553 \text{ W}$$

Laju sublimasi:
$$\dot{m} = 0{,}0553 / 2.838 = 1{,}95 \times 10^{-5} \text{ kg/s} \approx 1{,}17 \text{ g/jam per vial}$$

**Langkah 2 — Durasi primary drying:**
Massa air yang harus di-sublimasi per vial = $2$ mL × 80% (konsentrasi air awal) × 1 g/mL = $1{,}6$ g/vial (fraksi air padat sekitar 5% w/w diasumsikan). Estimasi total: $m_{air} = 1{,}6 \times 10^{-3}$ kg.

$$t_{dry} = \frac{m_{air}}{\dot{m}} = \frac{1{,}6 \times 10^{-3}}{1{,}95 \times 10^{-5}} = 82 \text{ jam} \approx 3{,}4 \text{ hari}$$

Namun dengan heterogenitas vial (gradient center vs. edge ~30%), vial tepi selesai dalam ~50 jam, sedangkan vial tengah mendekati ~110 jam — memerlukan WSN multi-titik untuk deteksi *endpoint* yang presisi via perbandingan sensor Pirani–kapasitansi (Meza-Galvan dkk., 2026).

**Langkah 3 — Degradasi produk (Arrhenius):**
Dengan $E_a = 80$ kJ/mol, $A = 10^{12}$ jam⁻¹, $T_p = -25°C = 248{,}15$ K:
$$k = 10^{12} \cdot e^{-80000/(8{,}314 \cdot 248{,}15)} = 10^{12} \cdot e^{-38{,}77} = 1{,}58 \times 10^{-5} \text{ jam}^{-1}$$

Aktivitas setelah 100 jam primary drying: $C/C_0 = e^{-k \cdot t} = e^{-1{,}58 \times 10^{-3}} = 0{,}9984$ (kehilangan < 0,2%).

**Langkah 4 — Yield ekonomis:**
Asumsikan harga pasar mAb = USD 5.000/g, batch 1.000 vial × 100 mg = 100 g produk aktif. Nilai batch = USD 500.000. Penurunan yield 0,2% berarti kerugian USD 1.000/batch; tanpa WSN-PAT, heterogenitas yang tidak terkontrol dapat menurunkan yield total hingga 5–10% (Artusio dkk., 2026), sehingga kerugian potensial dapat melampaui USD 25.000 per batch—sangat signifikan dibandingkan investasi sensor WSN.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan metodologi:** Pendekatan WSN-PAT yang dipaparkan Meza-Galvan dkk. (2026) menghadapi tantangan *latency* komunikasi pada rak logam (*Faraday cage effect*) dan degradasi baterai pada lingkungan cryogenic. *Sensor drift* akibat paparan uap air berulang menuntut kalibrasi ulang periodik, sementara integrasi dengan DCS legacy sering terhambat *interoperability*. Dibandingkan metode thermocouple berkabel, WSN unggul pada densitas spasial namun masih inferior pada *reliability* jangka panjang (>5 tahun) dan *cost per node* (~USD 200–500 per titik).

**Aplikasi lintas sektor:** Prinsip WSN-PAT ini dapat di-*leverage* pada: (1) *cold chain logistics*