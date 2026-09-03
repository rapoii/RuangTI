# 2796 — Jaringan Sensor Nirkabel (WSN) untuk Liofilisasi Farmasi: Arsitektur PAT, Pemantauan Real-Time, dan Optimasi Siklus Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan salah satu unit operasi paling kritikal dan paling *capital-intensive* dalam rantai nilai biofarmasi modern, dengan konsumsi energi berkisar antara 6–10 kWh per siklus per vial dan menyumbang 30–45% biaya produksi obat steril parenteral bernilai tinggi seperti antibodi monoklonal, vaksin mRNA, dan sediaan lyophilized protein (Meza-Galvan et al., 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Proses ini beroperasi pada tiga fase berurutan — *freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi) — yang masing-masing memerlukan kendali parameter proses yang sangat presisi untuk mempertahankan *Critical Quality Attributes* (CQA) seperti aktivitas biologis, stabilitas amorf, dan residu air akhir (<1–3% w/w). Kegagalan satu parameter saja dapat menyebabkan kerugian finansial miliaran rupiah per batch, karena sediaan yang gagal tidak dapat di-*recover* dan harus dimusnahkan sesuai regulasi *Good Manufacturing Practice* (GMP) FDA 21 CFR 211.

Dalam konteks ini, Meza-Galvan, Strongrich, dan Darwish (2026) dalam babnya yang berjudul "Wireless Sensor Networks for Lyophilization" memposisikan *Wireless Sensor Networks* (WSN) sebagai enabler strategis transformasi *Process Analytical Technology* (PAT) sesuai kerangka ICH Q8(R2), Q9, Q10, dan Q13. Mereka berargumen bahwa arsitektur instrumentasi liofilisasi konvensional — yang didominasi thermocouple kabel tembaga–konstantan (T-type), sensor tekanan *Pirani* dan *capacitance manometer* (CM), serta *thermal conductivity gauge* (TCG) — memiliki tiga kelemahan struktural: (i) kabel harness menambah *heat load* konduktif ke vial sehingga mendistorsi bacaan suhu produk; (ii) jumlah titik ukur terbatas (umumnya 3–16 thermocouple per batch) sehingga tidak mampu memetakan gradien termal lateral di antara rak; dan (iii) integrasi data ke *Manufacturing Execution System* (MES) masih *batch-oriented* sehingga menghambat *real-time release* (RTR).

Konteks ekonomi memperkuat urgensi adopsi WSN: pasar global contract lyophilization diproyeksikan tumbuh dari USD 4,2 miliar (2024) menjadi USD 7,1 miliar (2030) dengan CAGR 9,1%, sementara biaya satu unit *freeze-dryer* skala produksi (*50–200 ft² shelf area*) mencapai USD 1,5–4 juta (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)). Oleh sebab itu, paper Meza-Galvan et al. (2026) mengusulkan WSN berbasis transceiver nirkabel low-power IEEE 802.15.4 (Zigbee/Thread) atau Bluetooth Low Energy 5.x dengan sensor MEMS termo-resistif, mikro-pressure transducer, dan *mass spectrometric vapor composition analyzer* sebagai platform PAT generasi berikutnya. Pendekatan ini memungkinkan *continuous process verification*, *adaptive cycle optimization* berbasis *soft-sensor models*, dan deteksi dini anomali sublimasi melalui *pressure rise analysis* (PRA) otomatis. Dengan demikian, WSN bukan sekadar instrumen ukur, melainkan komponen integral dari arsitektur *Pharma 4.0* yang mengubah paradigma *quality-by-testing* menjadi *quality-by-design* (QbD).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termodinamika Sublimasi dan Desorpsi Primer

Meza-Galvan et al. (2026) membangun kerangka analitis di atas model transfer panas dan massa quasi-steady yang dikembangkan Pikal (1985) dan dimodifikasi oleh Rambhatla et al. Model ini memandang vial sebagai elemen volume terkontrol (*lumped capacitance*) dengan tiga resistansi seri dominan: resistansi heat transfer vial–rak ($K_v$), resistansi dried-layer terhadap aliran uap air ($R_p$), dan resistansi lapisan produk beku. Persamaan konservasi energi di dinding vial:

$$Q(t) = A_v \cdot K_v \cdot \left[ T_{shelf}(t) - T_{bot}(t) \right]$$

di mana $A_v$ adalah luas penampang dalam vial (m²), $K_v$ koefisien transfer panas efektif (W/m²·K), $T_{shelf}$ suhu rak, dan $T_{bot}$ suhu dasar vial. Laju sublimasi ditentukan oleh driving force parsial tekanan:

$$\dot{m}(t) = \frac{A_v \cdot \left[ P_{ice}(T_b) - P_c(t) \right]}{R_p(T_b, \xi)}$$

dengan $P_{ice}(T_b)$ tekanan uap jenuh es di interface sublimasi yang dihitung dari persamaan Goff–Gratch atau perkiraan Clausius–Clapeyron:

$$\ln P_{ice} = -\frac{6134.6}{T_b} + 24.721 - 0.0025 \cdot T_b + 1.506 \times 10^{-6} \cdot T_b^2$$

dengan $T_b$ dalam Kelvin dan $P_{ice}$ dalam Torr. $P_c$ adalah tekanan ruang (*chamber pressure*), dan $\xi$ adalah posisi interface sublimasi yang bergerak dari bawah ke atas. Resistansi dried layer meningkat secara kuadratik sesuai:

$$R_p(\xi) = R_{p,0} + A_\xi \cdot \xi^2$$

di mana $A_\xi$ adalah parameter empiris yang bergantung pada formulasi dan konsentrasi padatan.

### 2.2 Persamaan Energi pada Produk

Untuk lumped capacitance dengan *latent heat of sublimation* $\Delta H_s \approx 2800 \text{ kJ/kg}$, keseimbangan energi pada layer frozen memberikan:

$$\Delta H_s \cdot \rho_f \cdot A_v \cdot \frac{d\xi}{dt} = Q(t) - Q_{top}(t)$$

di mana $Q_{top}$ adalah fluks panas radiasi dari dinding atas yang diekspansikan menjadi:

$$Q_{top} = A_v \cdot \sigma \cdot F_{12} \cdot \left[ (T_{stopper} + 273.15)^4 - (T_b + 273.15)^4 \right]$$

dengan $\sigma = 5{,}67 \times 10^{-8} \text{ W/m}^2\text{K}^4$ konstanta Stefan–Boltzmann dan $F_{12}$ faktor bentuk radiasi geometris stopper–vial.

### 2.3 Analisis Pressure Rise (PRA) — Fondasi PAT Nirkabel

Komponen kunci yang memungkinkan WSN memberikan *real-time endpoint detection* adalah metode *pressure rise analysis*. Saat katup isolasi ditutup selama 10–25 detik, kurva $P_c(t)$ mengikuti persamaan:

$$P_c(t) = P_{ice}(T_b) - \left[ P_{ice}(T_b) - P_c(t_0) \right] \cdot \exp\left( -\frac{t - t_0}{\tau} \right)$$

dengan konstanta waktu:

$$\tau = \frac{V_c}{N_v \cdot A_v \cdot \left( \dfrac{1}{R_p \cdot R \cdot T_b} + \dfrac{1}{R_{leak}} \right)}$$

$V_c$ adalah volume chamber (m³), $N_v$ jumlah vial, $R$ konstanta gas (J/kg·K), dan $R_{leak}$ resistansi kebocoran sistem. Parameter $\tau$ memungkinkan estimasi nilai $R_p$ *in situ* dan identifikasi akhir primary drying ketika $\tau \to \infty$ (tidak ada lagi sublimasi). WSN mempercepat iterasi PRA menjadi <30 detik per siklus pengukuran melalui komputasi edge.

### 2.4 Link Budget dan Throughput Jaringan WSN

Meza-Galvan et al. (2026) menurunkan model propagasi nirkabel dengan *path loss* log-distance:

$$PL(d) = PL(d_0) + 10 \cdot n \cdot \log_{10}\left( \frac{d}{d_0} \right) + X_\sigma$$

dengan $n$ *path loss exponent* (2,0–3,5 dalam lingkungan stainless steel chamber), $d_0 = 1$ m referensi, dan $X_\sigma$ shadow fading (deviasi standar 3–7 dB). Bit-error-rate (BER) untuk modulasi O-QPSK mengikuti:

$$P_b = Q\left( \sqrt{\frac{2 \cdot E_b}{N_0}} \right)$$

di mana $Q(\cdot)$ adalah fungsi Q-tail Gaussian. Battery life sensor node diproyeksikan dengan model linear discharge:

$$T_{bat} = \frac{C_{bat} \cdot V_{nom}}{\bar{I}_{active} \cdot V_{avg} + I_{sleep} \cdot V_{sleep}}$$

dengan $C_{bat}$ kapasitas (mAh), $\bar{I}_{active}$ arus aktif rata-rata, dan $I_{sleep}$ arus tidur (µA). Sensor MEMS terkini mencapai $\bar{I}_{active} \approx 3$ mA dan $I_{sleep} \approx 1{,}5$ µA, sehingga baterai 250 mAh bertahan 100–200 jam aktif intermiten.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti SOP 7-tahap yang distandardisasi oleh Meza-Galvan et al. (2026) dengan integrasi ke kerangka PAT FDA 2004:

**Tahap 1 — Design Space Definition & Risk Assessment (FMEA):** Tentukan *Design Space* menggunakan Design of Experiments (DoE) JMP/SIMCA. Identifikasi CQA (misalnya cake appearance, reconstitution time, residual moisture, potency). Tetapkan Critical Process Parameters (CPP): $T_{shelf}$, $P_c$, ramp rate, annealing hold. Lakukan FMEA dengan RPN = S × O × D untuk setiap potensi kegagalan thermocouple drift, vial breakage, sensor dropout.

**Tahapan 2 — Node Placement & RF Mapping:** Peta 3D ruang rak dengan *grid* 5–10 cm. Tentukan lokasi gateway radio (single-hop star atau mesh multi-hop). Lakukan *RF site survey* untuk validasi link budget PL(d). Setiap vial berisi sensor *patch* thermocouple wireless tipe RTD PT1000 (±0,1°C akurasi, sampling 1 Hz).

**Tahap 3 — Calibration & IQ/OQ/PQ:** Kalibrasi tiga titik (0°C, 25°C, 40°C) terhadap standard ITS-90. Lakukan Installation Qualification (IQ), Operational Qualification (OQ) dengan *chamber empty test*, dan Performance Qualification (PQ) dengan *placebo run*. Verifikasi linearitas $K_v$ dan reproducibility $R_p$ antar-batch (RSD < 5%).

**Tahap 4 — Sensor Networking & Edge Computing:** Konfigurasi gateway dengan redundansi 2N+1, protokol MQTT atau OPC UA Pub/Sub ke historian (PI System, Siemens PCS 7). Aktifkan edge analytics: *moving average filter* 15-detik, *Kalman filter* untuk de-noising tekanan Pirani.

**Tahap 5 — Real-time Monitoring & PAT Loop:** Selama primary drying, monitor terus-menerus: (a) $T_{bot}$, $T_{side}$, $T_{stopper}$ tiap vial; (b) $P_c$ dari CM dan TCG; (c) komposisi uap H₂O/N₂ via *quadrupole MS*; (d) heat flux $Q$ via *heat flux sensor* pada rak. Jika $T_{bot} > T_{collapse}$ atau $T_{eutectic}$ → trigger alarm *soft-sensor model* (Random Forest, XGBoost) untuk *automated feedback* ke PLC → adjustment $T_{shelf}$ dan $P_c$.

**Tahap 6 — Endpoint Detection via PRA:** Tutup isolation valve selama 15–25 detik setiap 30–60 menit. Hitung $\tau$ dan $R_p$ otomatis. Primary drying berakhir saat slope $\frac{dm}{dt} < 0{,}01 \text{ kg/m}^2\text{h}$ atau $\tau > 10^6