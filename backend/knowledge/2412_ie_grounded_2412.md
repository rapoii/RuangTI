# 2412 — Jaringan Sensor Nirkabel untuk Liofilisasi: Integrasi Process Analytical Technology (PAT) dalam Pemantauan Proses Pengeringan Beku Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk biologis, vaksin, antibiotik, dan *parenteral* yang rentan terhadap degradasi termal. Proses ini melibatkan tiga tahap utama: pembekuan (*freezing*), pengeringan primer (*primary drying*) melalui sublimasi di bawah vakum, dan pengeringan sekunder (*secondary drying*) melalui desorpsi. Kerentanan proses ini terhadap variasi suhu antar vial, gradien tekanan ruang, serta risiko kontaminasi mikroba menjadikan *Process Analytical Technology* (PAT) sebagai kerangka regulator wajib yang diadopsi FDA sejak pedoman PAT 2004 (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Dalam konteks industri 4.0, jaringan sensor nirkabel (*Wireless Sensor Networks*/WSN) muncul sebagai solusi transformatif untuk mengatasi keterbatasan instrumentasi berkabel tradisional. Sistem berkabel memerlukan *feedthrough* pada dinding ruang vakum yang menimbulkan titik kebocoran (*leak points*) potensial, menambah beban sterilitas, serta membatasi jumlah titik pengukuran spasial. Meza‐Galvan et al. (2026) menekankan urgensi transisi ke sensor nir kabel untuk memenuhi tiga pilar PAT: *real-time monitoring*, *multivariate analysis*, dan *continuous quality assurance*. Dari perspektif ekonomi, satu batch produk biofarmasi bernilai antara \$500 ribu hingga \$5 juta, sehingga kerugian satu batch gagal akibat *out-of-specification* dapat mencapai tujuh digit. Studi kasus dari Artusio, Barresi, & Pisano (2026) menunjukkan bahwa implementasi WSN dapat meningkatkan *batch success rate* sebesar 8–12% melalui deteksi dini vial-vial *edge effect* yang selama ini luput dari thermocouple konvensional (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Permasalahan operasional lainnya adalah *spatial heterogeneity*—yaitu perbedaan suhu produk antar vial yang dapat mencapai 2–4°C pada rak pinggir versus rak tengah, yang secara langsung memengaruhi *residual moisture* akhir dan stabilitas jangka panjang. Tanpa sensor nirkabel yang mampu memantau ratusan titik secara simultan, *control strategy* hanya dapat berbasis asumsi homogenitas semu (*pseudo-homogeneity assumption*), yang secara empiris terbukti tidak valid pada rak dengan konfigurasi vial lebih dari 500 unit. WSN menjawab tantangan ini melalui arsitektur *mesh multi-hop* dengan konsumsi daya rendah, latency rendah, dan kemampuan bertahan pada lingkungan kriogenik serta vakum tinggi (10⁻³ hingga 10⁻⁵ Pa).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Perpindahan Panas dan Massa pada Sublimasi

Model klasik sublimasi vial liofilisasi dirumuskan oleh Pikal (1985) dan diadopsi oleh Meza‐Galvan et al. (2026) sebagai berikut:

$$q = \frac{T_s - T_b}{R_p + R_s} = \frac{A_v \cdot \Delta H_s}{m_{ice}} \cdot \frac{dm}{dt}$$

di mana $q$ adalah fluks panas (W), $T_s$ suhu rak (*shelf*), $T_b$ suhu produk pada antarmuka sublimasi, $R_p$ tahanan vial terhadap uap air (cm²·h·Torr/g), $R_s$ tahanan stopper, $A_v$ luas penampang vial, $\Delta H_s$ entalpi sublimasi es ($\approx 2.838$ kJ/g pada 0°C), dan $dm/dt$ laju sublimasi massa. Kecepatan sublimasi didorong oleh beda tekanan uap berdasarkan hukum Fick:

$$J_w = -D_{eff} \cdot \nabla C_w \approx \frac{P_{w,i} - P_{w,c}}{R_p}$$

dengan $D_{eff}$ koefisien difusi efektif, $P_{w,i}$ tekanan uap air pada antarmuka, dan $P_{w,c}$ tekanan parsial di ruang (chamber).

### 2.2 Model Propagasi Sinyal Nirkabel dalam Ruang Vakum

Untuk link budget sensor nirkabel di dalam chamber, persamaan Friis disesuaikan dengan redaman akibat dinding baja tahan karat dan kondisi kriogenik:

$$P_r = P_t + G_t + G_r - 20\log_{10}\left(\frac{4\pi d}{\lambda}\right) - L_{cryo} - L_{multipath}$$

di mana $P_r$ daya terima (dBm), $P_t$ daya transmisi, $G_t, G_r$ gain antena, $d$ jarak (m), $\lambda$ panjang gelombang, $L_{cryo}$ redaman spesifik lingkungan (3–7 dB pada 2.4 GHz untuk suhu −40°C, menurut Meza‐Galvan et al., 2026), dan $L_{multipath}$ rugi akibat refleksi dinding metalik.

### 2.3 Konsumsi Energi dan Model Umur Baterai

Sensor nirkabel di lingkungan liofilisasi harus beroperasi secara *wireless-powered* atau dengan baterai lithium primer tahan suhu rendah. Model discharge Arrhenius-Type:

$$C_{usable}(T) = C_{nom} \cdot \exp\left[-\frac{E_a}{R}\left(\frac{1}{T} - \frac{1}{T_{nom}}\right)\right]$$

dengan $E_a$ energi aktivasi degradasi (kJ/mol), $R$ konstanta gas universal, dan $T$ suhu operasional dalam Kelvin. Pada $T = 233$ K (−40°C), kapasitas efektif turun menjadi 60–70% kapasitas nominal.

### 2.4 Arsitektur Jaringan Mesh dan Topologi

WSN untuk liofilisasi umumnya menggunakan topologi *star-of-stars* dengan *gateway node* di luar chamber yang berkomunikasi dengan *sink* melalui *isolated feedthrough* nirkabel (misalnya menggunakan *inductive coupling* atau *RF-through-glass*). Jumlah node sensor $N$ yang diperlukan untuk cakupan spatial density $\rho_s$ (titik/m²) pada luas rak $A_s$:

$$N = \lceil \rho_s \cdot A_s \rceil$$

Meza‐Galvan et al. (2026) merekomendasikan $\rho_s \geq 1$ sensor per 25 cm² untuk menangkap gradien suhu vial pinggir-tengah secara signifikan.

### 2.5 Sensor Cerdas dan Estimasi State Process

Algoritma state estimation berbasis Kalman Filter digunakan untuk mengestimasi parameter proses yang tidak terukur langsung:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H\hat{x}_{k|k-1})$$

dengan gain Kalman $K_k$ yang dihitung dari covariance error $P_{k|k}$. Pada penerapan PAT, *state vector* mencakup suhu vial tersembunyi, kadar air residual, dan tingkat sublimasi—variabel yang sebelumnya hanya bisa diestimasi secara *offline*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam liofilisasi farmasi mengikuti SOP enam tahap yang divalidasi oleh Meza‐Galvan, Strongrich, & Darwish (2026):

**Tahap 1 — Risk Assessment & URS (User Requirement Specification).** Tim rekayasa melakukan *Failure Mode and Effects Analysis* (FMEA) terhadap titik pengukuran kritis: suhu produk, tekanan chamber, dan konduktivitas uap. Setiap *risk priority number* (RPN) > 100 memerlukan titik sensor tambahan.

**Tahap 2 — Sensor Selection & Qualification.** Sensor harus memenuhi: (i) akurasi ±0.3°C pada rentang −50°C hingga +40°C; (ii) waktu respon termal $\tau < 5$ detik; (iii) sertifikasi biocompatibility USP <88> Class VI; (iv) kemampuan sterilisasi *gamma irradiation* 25 kGy atau *autoclave* 121°C.

**Tahap 3 — Network Deployment.** Penempatan node mengikuti pola *latin hypercube sampling* untuk memastikan cakupan spasial representatif. Jarak antar-node dibatasi ≤ 3 m untuk memastikan RSSI > −75 dBm pada semua kondisi proses.

**Tahap 4 — IQ/OQ/PQ Validation.** Sesuai pedoman GAMP 5 dan FDA Process Validation Guidance (2011), instalasi qualification (IQ), operational qualification (OQ), dan performance qualification (PQ) wajib didokumentasikan dengan *traceability matrix* lengkap.

**Tahap 5 — Data Integration dengan Historian (PI, OSIsoft).** Aliran data 4–20 mA atau MQTT dari gateway di-*stream* ke *Manufacturing Execution System* (MES) dengan *latency* < 2 detik dan *data integrity* sesuai ALCOA+ principles.

**Tahap 6 — Continuous Verification.** Algoritma *multivariate statistical process control* (MSPC) berbasis PCA atau PLS memonitor *Hotelling's T²* dan *Q-residuals* secara real-time untuk *out-of-control detection*. Batas kendali umumnya $T^2_{lim} = \chi^2_{p, 0.99}$.

Diagram alir logikanya adalah sebagai berikut:

```
[Sensor Node] → (BLE/ZigBee) → [Cluster Head] → (Wi-Fi 6) → [Gateway Eksternal]
       ↓                                        ↓
[Kalman Filter]                            [Time-Series DB]
       ↓                                        ↓
[State Estimator] ←——→ [MSPC Engine] ←——→ [MES / Historian]
                                ↓
                       [Auto-Reject Flag] → [QA Review]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Pemantauan 1.000 Vial pada Lyo dengan Rak 0,45 m²

Sebuah *contract development and manufacturing organization* (CDMO) menjalankan *batch* produk antibodi monoklonal (mAb) konsentrasi 50 mg/mL, volume isi 5 mL per vial, pada *freeze dryer* dengan luas rak total $A_s = 0{,}45$ m² dan tinggi 16 rak. Asumsikan topologi WSN dengan satu *sensor node* per 25 cm², menggunakan sensor termokopel tipe T nirkabel BLE 5.2 pada 2,4 GHz.

**Langkah 1 — Penentuan Jumlah Sensor:**

$$N = \rho_s \cdot A_s = 4 \text{ sensor/cm}^2 \times 4500 \text{ cm}^2 = 180 \text{ node}$$

Jika ditambah *redundancy* 15%, maka $N_{total} = 207 \approx 210$ node sensor.

**Langkah 2 — Konsumsi Daya & Umur Baterai:**

Daya rata-rata tiap node saat transmisi: $P_t = 0{,}5$ mW (peak), duty cycle 0,1% (pengukuran tiap 10 detik), sehingga konsumsi efektif:

$$P_{avg} = P_t \cdot \delta + P_{idle} = 0{,}5 \cdot 0{,}001 + 0{,}05 \text{ mW} = 0{,}0505 \text{ mW}$$

Kapasitas baterai lithium primer CR2450 pada suhu ruang 25°C: $C_{nom} = 620$ mAh pada 3 V. Pada suhu ruang pengeringan 35°C, kapasitas efektif:

$$C_{usable}(308\text{K}) = 620 \cdot \exp\left[-\frac{15}{8{,}314}\left(\frac{1}{308} - \frac{1}{298}\right)\right] \approx 620 \cdot e^{-0{,}0606} \approx 583 \text{ mAh}$$

Energi total: $E = 583 \times 3 = 1{,}749$ Wh = $6{,}296 \cdot 10^3$ Joule. Durasi operasi:

$$T_{ops} = \frac{E}{P_{avg}} = \frac{1{,}749 \text{ Wh}}{0{,}0505 \cdot 10^{-3} \text{ W}} \approx 34{,}633 \text{ jam} \approx 1{,}443 \text{ hari} \approx 3{,}95 \text{ tahun}$$

**Langkah 3 — Perhitungan Sublimasi & Validasi Sensor:**

Pada primary drying dengan $T_s = −20°C$, $T_b = −32°C$, $R_p = 0{,}8$ cm²·h·Torr/g (untuk 5% formulasi sukrosa):

$$q = \frac{-20 - (-32)}{0{,}8} = \frac{12}{0{,}8} = 15 \text{ W/m}^2$$

Laju sublimasi per vial (asumsi luas sublimasi $A_v = 2{,}5$ cm²