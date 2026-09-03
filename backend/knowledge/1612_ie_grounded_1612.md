# 1612 — Jaringan Sensor Nirkabel untuk Proses Liofilisasi Farmasi: Integrasi PAT, Kontrol Kualitas, dan Optimalisasi Energi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Industri farmasi global menghadapi tantangan signifikan dalam mempertahankan stabilitas produk biologis yang sensitif terhadap panas, termasuk vaksin mRNA, antibodi monoklonal, dan protein terapeutik. Liofilisasi (*freeze-drying*) tetap menjadi teknologi dehidrasi paling dominan karena mampu mempertahankan aktivitas biologis senyawa aktif dengan menguapkan air melalui sublimasi pada kondisi vakum dan suhu rendah. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), kompleksitas intrinsik proses liofilisasi memerlukan paradigma observabilitas yang lebih kaya daripada pendekatan instrumentasi kabel tradisional yang selama ini digunakan di lini produksi farmasi.

Secara ekonomi, biaya operasional satu siklus liofilisasi untuk batch 10.000 vial dapat melebihi USD 25.000, dengan konsumsi energi listrik untuk mempertahankan suhu rak (*shelf temperature*) rendah dan tekanan ruang (< 100 mTorr) menjadi komponen biaya terbesar. Kegagalan satu batch akibat kerusakan produk (misalnya *collapse*, *meltback*, atau moisture residual terlalu tinggi) dapat menimbulkan kerugian finansial dan reputasi yang substansial, terlebih untuk produk *biologic* bernilai tinggi. Oleh sebab itu, *Food and Drug Administration* (FDA) melalui inisiatif **Process Analytical Technology (PAT)** mendorong penerapan monitoring real-time berbasis sensor untuk menggantikan paradigma *batch release* konvensional berbasis *end-product testing*.

Paper Meza‐Galvan et al. (2026) memperkenalkan **Jaringan Sensor Nirkabel (Wireless Sensor Networks/WSN)** sebagai solusi monitoring *in-situ* terdistribusi pada vial-vial yang tersebar dalam rak (*shelf*) lyophilizer. Berbeda dari thermocouple kabel yang hanya mampu memantau ≤ 5 vial dalam satu batch (mewakili < 0,05% populasi), WSN berpotensi memberikan data suhu dan kelembapan dari puluhan hingga ratusan vial secara simultan tanpa gangguan jalur sublimasi dan tanpa menambah beban sterilitas. Pendekatan ini selaras dengan kerangka *Quality by Design* (QbD) yang menekankan pemahaman variabilitas proses sebagai basis kontrol mutu.

Sementara itu, Chapter 11 oleh Artusio, Barresi, dan Pisano (2026) (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) memberikan konteks teknologi emergen pelengkap, termasuk soft-sensor berbasis model dan *Tunable Diode Laser Absorption Spectroscopy* (TDLAS), yang apabila dikombinasikan dengan WSN akan membentuk arsitektur **cyber-physical quality system** yang holistik. Urgensi industri untuk adopsi WSN diperkuat oleh tiga faktor konkruen: (i) transisi ke *personalized medicine* yang memerlukan batch kecil dengan fleksibilitas tinggi, (ii) keterbatasan operator terampil pasca-pandemi, dan (iii) mandat regulatori untuk *continuous process verification* sesuai ICH Q8/Q9/Q10.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dan Massa pada Liofilisasi

Proses liofilisasi primer (*primary drying*) dikarakterisasi oleh dua mekanisme transpor simultan: **perpindahan panas** dari rak ke produk dan **perpindahan massa** berupa uap air dari es sublimasi ke ruang vakum. Meza‐Galvan et al. (2026) merumuskan model vial-sku sebagai berikut:

$$Q_v = K_v \cdot A_v \cdot (T_s - T_b)$$

di mana $Q_v$ adalah laju perpindahan panas per vial (W), $K_v$ adalah koefisien transfer panas efektif vial (W/m²·K), $A_v$ adalah luas penampang vial (m²), $T_s$ adalah suhu rak, dan $T_b$ adalah suhu pada *product interface* (basis beku).

Laju sublimasi massa dikendalikan oleh resistansi total lapisan kering dan *stopper* vial:

$$J_q = \frac{P_{ice}(T_b) - P_c}{R_p}$$

dengan $J_q$ adalah fluks sublimasi (kg/m²·s), $P_{ice}(T_b)$ adalah tekanan uap es pada suhu $T_b$ (Pa) yang umumnya dihitung dengan persamaan Goff–Gratch atau *modified Clausius–Clapeyron*, $P_c$ adalah tekanan ruang (*chamber pressure*), dan $R_p$ adalah resistansi total lapisan kering (Pa·m²·s/kg). Waktu pengeringan primer diperoleh melalui integrasi:

$$t_d = \frac{L_0 \cdot \rho_{ice}}{J_q}$$

di mana $L_0$ adalah ketebalan awal lapisan beku (m) dan $\rho_{ice}$ adalah densitas es (≈ 917 kg/m³).

### 2.2 Kinetika Pengeringan Sekunder

Tahap *secondary drying* dikendalikan oleh desorpsi air terikat dari matriks amorf, mengikuti kinetika Arrhenius orde pertama:

$$\frac{dC_w}{dt} = -k_0 \cdot e^{-E_a/RT} \cdot C_w^n$$

dengan $C_w$ adalah kadar air residual (%), $k_0$ faktor pra-eksponensial, $E_a$ energi aktivasi (≈ 50–80 kJ/mol untuk protein), $R$ konstanta gas universal (8,314 J/mol·K), $T$ suhu produk, dan $n$ orde reaksi (umumnya = 1).

### 2.3 Model Propagasi Sinyal WSN

Sensor nirkabel harus mempertahankan konektivitas di dalam ruang lyophilizer yang merupakan *Faraday cage* parsial. Model path loss log-distance yang digunakan Meza‐Galvan et al. (2026):

$$PL(d) = PL_0 + 10n \log\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d)$ redaman sinyal (dB) pada jarak $d$, $PL_0$ redaman referensi, $n$ *path loss exponent* (2–4 di dalam ruang tertutup), dan $X_\sigma$ variabel acak normal shadowing. **Link budget** untuk transmisi valid:

$$P_{rx} = P_{tx} + G_{tx} + G_{rx} - PL(d) - PL_{multipath}$$

dengan $P_{rx}$ harus melebihi *receiver sensitivity* (-97 dBm untuk ZigBee 2,4 GHz tipikal) untuk menjamin *packet delivery ratio* (PDR) ≥ 99%.

### 2.4 Akurasi Pengukuran dan Ketertelusuran

WSN farmasi memerlukan akurasi termal ±0,5°C untuk memenuhi USP <1207> dan protokol ASTM E2503. *Standard uncertainty* kombinasi sensor mengikuti:

$$u_c = \sqrt{u_{cal}^2 + u_{drift}^2 + u_{self-heating}^2 + u_{wireless}^2}$$

Ketertelusuran NIST (*National Institute of Standards and Technology*) wajib didokumentasikan untuk validasi sesuai 21 CFR Part 11.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur WSN yang diusulkan Meza‐Galvan et al. (2026) mengikuti topologi **star-mesh hybrid** dengan tiga lapisan fungsional:

1. **Lapisan persepsi:** sensor *Surface Acoustic Wave* (SAW) untuk suhu produk dan *thin-film capacitive* untuk kelembapan, terintegrasi dalam *system-on-chip* (SoC) dengan dimensi < 8 mm³.
2. **Lapisan komunikasi:** protokol IEEE 802.15.4 (ZigBee) atau Bluetooth Low Energy (BLE) 5.0 untuk transmisi data ke koordinator dengan latensi < 250 ms.
3. **Lapisan analitik:** *edge gateway* yang menjalankan inferensi soft-sensor (PID kontrol adaptif) dan mengirim data ke *Manufacturing Execution System* (MES) via OPC-UA.

**SOP Implementasi (tahapan kritis):**

| Tahap | Aktivitas | Output Kontrol |
|-------|-----------|----------------|
| 1. Pra-instalasi | Kalibrasi multi-titik sensor terhadap standar NIST pada 0°C, 25°C, dan 40°C | Sertifikat kalibrasi, *drift* ≤ ±0,1°C |
| 2. Pemetaan awal | Karakterisasi *path loss* ruang lyophilizer dengan 5 titik referensi | Peta $PL(d)$ dan *RSSI threshold* |
| 3. Penempatan vial | Distribusi sensor pada posisi *edge*, *center*, dan *corner* rak sesuai desain *edge-vial-center* | Topologi sampling terdistribusi |
| 4. Validasi proses | *Concurrent release* berbasis data WSN vs. *end-product testing* | Cpk ≥ 1,33 untuk suhu dan kelembapan |
| 5. Operasi rutin | Real-time monitoring via dashboard SCADA dengan alarm deviasi | OEE ≥ 85% dan *batch failure rate* < 0,5% |

Integrasi dengan soft-sensor dari Artusio et al. (2026) memungkinkan prediksi **primary drying endpoint** secara real-time dengan metode *pressure rise test* (PRT) yang dikuantifikasi melalui:

$$\frac{dP_c}{dt}\bigg|_{t \to t_d} \leq \epsilon$$

di mana $\epsilon$ = 0,05 mTorr/min sebagai ambang batas sublimasi telah berakhir.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Proses

Sebuah lini produksi di industri bioteknologi memproses batch 7.500 vial (volume isi 5 mL, diameter 22 mm) dalam lyophilizer dengan rak seluas 4 m². Parameter proses tipikal:

- $T_s$ = 25°C (suhu rak)
- $P_c$ = 100 mTorr (13,3 Pa)
- $T_b$ target = -25°C
- $L_0$ = 1,2 cm (ketebalan lapisan beku)
- Formulasi: 5% sukrosa, 1% protein terapeutik

### 4.2 Perhitungan Laju Sublimasi

Menggunakan persamaan Goff–Gratch untuk $P_{ice}(-25°C) \approx 313$ Pa:

$$J_q = \frac{313 - 13,3}{R_p}$$

Dengan asumsi lapisan kering resistansi $R_p = 1,2 \times 10^4$ Pa·m²·s/kg (nilai tipikal untuk formulasi sukrosa 5%):

$$J_q = \frac{299,7}{1,2 \times 10^4} = 2,498 \times 10^{-2} \text{ kg/m}^2\text{·s}$$

Laju sublimasi per vial dengan $A_v = 3,8 \times 10^{-4}$ m²:

$$\dot{m}_{vial} = J_q \cdot A_v = 2,498 \times 10^{-2} \times 3,8 \times 10^{-4} = 9,49 \times 10^{-6} \text{ kg/s} \approx 34,2 \text{ g/jam}$$

### 4.3 Estimasi Waktu Pengeringan Primer

Massa es per vial: $m_{