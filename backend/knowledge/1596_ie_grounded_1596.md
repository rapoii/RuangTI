# 1596 — Jaringan Sensor Nirkabel (WSN) dan Teknologi Emergen untuk Liofilisasi Farmasi: Pilar Process Analytical Technology (PAT) dalam Rekayasa Sistem Manufaktur Biologis Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization & Emerging Process Analytical Technologies
**Sitasi Utama:** Meza‐Galvan, J., Strongrich, A., & Darwish, A. (2026). *Wireless Sensor Networks for Lyophilization*. In: Process Analytical Technology for Pharmaceutical Freeze‐Drying (Chapter 4). Wiley‐VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Artusio, F., Barresi, A. A., & Pisano, R. (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*. In: Process Analytical Technology for Pharmaceutical Freeze‐Drying (Chapter 11). Wiley‐VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze‐drying) merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk biologis bernilai tinggi seperti antibodi monoklonal, mRNA‐based vaccines, dan Advanced Therapy Medicinal Products (ATMP). Meza‐Galvan *et al.* (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) menyoroti bahwa lebih dari 50% produk bioterapeutik baru dalam pipeline FDA memerlukan proses liofilisasi, menciptakan urgensi operasional akan visibilitas *real‐time* terhadap kondisi vial selama proses sublimasi berlangsung. Dalam industri 4.0, konvensional thermocouple‐tree wiring pada dryer menjadi bottleneck karena (i) membatasi jumlah titik monitoring per batch (umumnya hanya 3–5 vial representatif dari ribuan vial), (ii) menghasilkan *single‐point‐of‐failure* pada konektor feedthrough, dan (iii) tidak scalable untuk konsep *continuous freeze‐drying* yang kini mulai diadopsi pasca‐2023.

Secara ekonomi, satu batch gagal liofilisasi produk biologis bernilai tinggi (misalnya sel CAR‐T atau viral vector) dapat menimbulkan kerugian > USD 5 juta ditambah penundaan *time‐to‐market* 6–9 bulan. Oleh sebab itu, investasi pada arsitektur **Wireless Sensor Networks (WSN)** dan **Process Analytical Technology (PAT)** menjadi *business case* yang sangat kuat. Artusio, Barresi, & Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) memposisikan WSN sebagai komponen fundamental dari paradigma **PAT 4.0**, di mana setiap vial dipandang sebagai *cyber‐physical entity* yang terus‐menerus melaporkan status fisisnya ke *digital twin* proses. Konteks regulasi yang melatarbelakanginya adalah FDA PAT Guidance (2004) dan ICH Q8/Q9/Q10 yang mendorong *real‐time release* (RTR) berbasis data multivariat, bukan berbasis *off‐line* QC tradisional.

Urgensi ini diperkuat oleh tiga tren simultan: (a) meningkatnya kompleksitas formulasi (misalnya high‐concentration protein > 100 mg/mL yang rentan terhadap *collapse* dan *micro‐collapse*), (b) transisi ke *personalized medicine* yang menuntut *batch size* kecil dengan proses fleksibel, dan (c) kebutuhan akan *parametric release* untuk mempersingkat *lead time* rilis produk. WSN menjawab tantangan‐tantangan ini dengan menyediakan data spatial–temporal resolusi tinggi yang memungkinkan *advanced process control* (APC) dan *Machine Learning*‐based endpoint detection, sebagaimana diuraikan dalam Chapter 4 dan Chapter 11 buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (Wiley‐VCH, 2026).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Transfer Panas dan Massa pada Primary Drying

Meza‐Galvan *et al.* (2026) membangun kerangka analitisnya pada persamaan klasik sublimasi pseudo‐steady state yang pertama kali diformalkan oleh Pikal (1985). Laju sublimasi per vial dapat ditulis sebagai:

$$\frac{dm}{dt} = \frac{A_v \, (P_i(T_p) - P_c)}{R_p(T_p)}$$

dengan $A_v$ = luas area sublimasi internal vial (m²), $P_i(T_p)$ = tekanan uap ice pada suhu produk $T_p$ (Pa), $P_c$ = tekanan ruang (chamber pressure, Pa), dan $R_p(T_p)$ = resistance terhadap aliran uap air yang biasanya dimodelkan sebagai cake resistance kering:

$$R_p(T_p) = R_{p,0} + \frac{A_1}{1 + B_1 \, m_{sub}}$$

dengan $m_{sub}$ = massa air tersublimasi kumulatif (kg). Pada saat yang sama, neraca energi pada vial menghasilkan:

$$Q_{tot} = \Delta H_s \, \frac{dm}{dt} = K_v \, A_v \, (T_s - T_b)$$

dengan $\Delta H_s$ ≈ 2.840 kJ/kg (panas laten sublimasi es), $K_v$ = koefisien transfer panas vial (W/m²·K), $T_s$ = suhu shelf, dan $T_b$ = suhu dasar vial (bottom). Nilai $T_b$ dapat diestimasi dari $T_p$ melalui *heat transfer resistance* vial:

$$T_b = T_p + \frac{\Delta H_s \, (P_i - P_c) \, L}{K_v \, (T_s - T_b)}$$

### 2.2 Arsitektur Jaringan Sensor Nirkabel

Meza‐Galvan *et al.* (2026) menjelaskan bahwa sebuah node WSN pada vial freeze‐drying minimal terdiri dari: (i) sensor suhu resistif (RTD atau thermistor dengan akurasi ±0,1°C), (ii) mikrokontroler daya rendah (misalnya ARM Cortex‐M0+), (iii) transceiver radio IEEE 802.15.4/ZigBee 2,4 GHz, dan (iv) sumber energi (battery LiSOCl₂ atau *energy harvesting* dari gradien termal vial). Link budget radio dapat diekspresikan dengan persamaan *Friis*:

$$P_r = P_t + G_t + G_r + 20 \log_{10}\left(\frac{\lambda}{4\pi d}\right) - L_{misc}$$

Untuk $\lambda$ = 0,125 m (2,4 GHz), $d$ = 1,5 m (jarak tipikal rak dalam freeze dryer industri), atenuasi ruang bebas ≈ −46 dB. Dengan transmit power $P_t$ = +8 dBm, margin link sekitar 60 dB memberikan keandalan Packet Error Rate (PER) < 1%.

Konsumsi energi per transmisi mengikuti model:

$$E_{tx}(k,d) = k \cdot E_{elec} + k \cdot \epsilon_{fs} \cdot d^2$$

dengan $k$ = ukuran paket (bit), $E_{elec}$ ≈ 50 nJ/bit, $\epsilon_{fs}$ ≈ 10 pJ/bit/m². Estimasi *lifetime* baterai pada duty‐cycle 1 transmisi per 30 detik:

$$T_{life} = \frac{C_{bat}}{I_{avg}} \approx \frac{2400 \,\text{mAh}}{(\frac{I_{tx} \cdot t_{tx} + I_{sleep} \cdot t_{sleep}}{T_{cycle}})} \approx 180 \,\text{hari}$$

cukup untuk satu siklus liofilisasi 72 jam dengan cadangan untuk kalibrasi dan *post‐process* download.

### 2.3 Sensor Cerdas dan PAT Multivariat

Artusio *et al.* (2026) melengkapi kerangka ini dengan membahas sensor *non‐invasive* berbasis spektroskopi: **Tunable Diode Laser Absorption Spectroscopy (TDLAS)** untuk konsentrasi uap air di ruang pengering (rentang 0,1–1000 ppm), **Raman Spectroscopy** untuk monitoring *crystallization* mannitol/trehalose secara *in situ*, dan **Near‐Infrared (NIR)** imaging untuk pemetaan heterogenitas antar vial. Model Principal Component Analysis (PCA) pada streaming data WSN mengikuti:

$$X_{n \times p} = T_{n \times k} \, P_{k \times p}^T + E_{n \times p}$$

dengan $T$ = *score matrix*, $P$ = *loading matrix*, dan $E$ = residual. Hotelling's $T^2$ serta *Squared Prediction Error* (SPE/Q‐residuals) berfungsi sebagai batas kendali multivariat untuk deteksi anomali proses secara *real‐time*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN‐PAT dalam freeze‐drying mengikuti SOP 10‐tahap berikut, sebagaimana disintesiskan dari Chapter 4 (Meza‐Galvan *et al.*, 2026) dan Chapter 11 (Artusio *et al.*, 2026):

1. **Process Risk Assessment (PRA)** menggunakan Failure Mode and Effects Analysis (FMEA) untuk mengidentifikasi Critical Process Parameters (CPP): $T_s$, $P_c$, dan $T_p$.
2. **Design of Experiments (DoE)** untuk membangun *design space* primer: misal Central Composite Design dengan 5 level $T_s$ (−5°C hingga +35°C) dan 3 level $P_c$ (10–30 Pa).
3. **Sensor Selection & Calibration** sesuai ISO/IEC 17025; RTD dikalibrasi pada titik tripel air (0,01°C) dan titik es.
4. **Network Deployment Planning** — pemetaan posisi vial pada *edge*, *corner*, dan *center* shelf mengikuti protokol ASTM E2503 untuk thermal mapping.
5. **Wireless Node Sterilization & Venting** — semua node harus melalui **gamma irradiation** 25 kGy atau **autoclave** 121°C/20 min (tergantung housing polymer) tanpa degradasi akurasi > 0,05°C.
6. **Mesh Network Commissioning** — verifikasi routing melalui *Received Signal Strength Indicator* (RSSI) > −75 dBm di setiap rak.
7. **Time Synchronization** via **IEEE 1588 Precision Time Protocol** dengan drift < 1 μs untuk memastikan korelasi temporal antar node.
8. **Data Acquisition & Streaming** ke Historian OSIsoft PI atau Aveva dengan timestamp resolution 1 s.
9. **Multivariate Model Deployment** — *Partial Least Squares* (PLS) atau *Principal Component Regression* (PCR) untuk memprediksi *Residual Moisture* (< 1% w/w) dari spektrum NIR.
10. **Continuous Verification** — *Control charts* Shewhart atau CUSUM untuk monitoring *batch‐to‐batch* consistency, dengan aturan Western Electric (1σ, 2σ, 3σ) sebagai *out‐of‐control* triggers.

Diagram alir logika proses secara umum adalah sebagai berikut:

```
[Pra‐Freeze] → [Annealing (opsional)] → [Freezing @ −45°C, 2°C/min]
      ↓
[Primary Drying: WSN monitoring T_p, TDLAS H2O flux, NIR endpoint]
      ↓ (Model‐Predictive Control adjusts T_s & P_c)
[Secondary Drying: ramping ke 30–40°C, P_c < 5 Pa]
      ↓
[Endpoint Verification via PLS model on Raman/NIR]
      ↓
[Stoppering under N2/vacuum] → [Aerosol‐Free Unloading]
```

## 4.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
