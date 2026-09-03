# 2524 — Jaringan Sensor Nirkabel untuk Liofilisasi: Pemantauan Proses Cerdas dan Teknologi Analitik dalam Rekayasa Farmasi Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Proses Liofilisasi Farmasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization* dalam buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying* dalam buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan salah satu unit operasi paling kritikal dalam industri biofarmasi modern, digunakan untuk menstabilkan lebih dari 50% produk bioterapeutik, antibodi monoklonal, dan vaksin yang sensitif terhadap termal (Meza-Galvan, Strongrich, & Darwish, 2026). Proses ini melibatkan tiga tahapan utama — pembekuan (*freezing*), pengeringan primer (*primary drying*) melalui sublimasi, dan pengeringan sekunder (*secondary drying*) melalui desorpsi — yang keseluruhannya memerlukan kontrol suhu, tekanan, dan laju sublimasi yang presisi. Sebuah *batch* produksi vial dalam industri farmasi dapat bernilai hingga USD 2–5 juta, sehingga satu kegagalan proses akibat *batch variability* berdampak finansial dan reputasi yang sangat signifikan. Meza-Galvan et al. (2026) menegaskan bahwa *Wireless Sensor Networks* (WSN) muncul sebagai pilar utama dalam kerangka *Process Analytical Technology* (PAT) yang dicanangkan oleh U.S. Food and Drug Administration (FDA) sejak 2004, karena memungkinkan pemetaan spasial parameter proses secara *real-time* tanpa konstrain kabel yang selama ini menghambat instrumentasi di dalam ruang vakum *freeze dryer*.

Artusio, Barresi, dan Pisano (2026) melengkapi perspektif ini dengan menunjukkan bahwa teknologi emerging dalam liofilisasi — seperti *controlled nucleation*, *in-line* spectroscopy, dan sistem vakum *next-generation* — semakin memerlukan jaringan instrumentasi terdistribusi dengan latensi rendah. Secara agregat, pasar global PAT farmasi diproyeksikan tumbuh pada CAGR 10,2% (2024–2030), didorong oleh kebutuhan akan *continuous manufacturing* dan rilis data *real-time* untuk regulator. Urgensi industri ini dapat dirangkum pada tiga vektor: (a) pengurangan *batch failure* melalui deteksi dini *out-of-specification* vials; (b) optimasi energi (satu siklus liofilisasi mengonsumsi 30–50 kWh per *batch* vial); dan (c) pemenuhan mandat QbD (*Quality by Design*). Pada bagian Modul 2524 ini, jaringan sensor nirkabel diposisikan sebagai *enabler technology* yang menjembatani instrumentasi fisik dan keputusan rekayasa manufaktur berbasis data.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Perpindahan Panas dan Massa pada Vial Liofilisasi

Model pseudo-steady satu dimensi vial liofilisasi dari Pikal (1985) yang dikutip oleh Meza-Galvan et al. (2026) merumuskan keseimbangan energi di tiap vial:

$$Q_v = K_v \cdot A_v \cdot (T_s - T_p) + \Delta H_s \cdot \frac{dm}{dt}$$

dengan $K_v$ = koefisien perpindahan panas vial (W/m²K), $A_v$ = luas penampang silang vial, $T_s$ = suhu *shelf*, $T_p$ = suhu produk, $\Delta H_s$ = panas sublimasi (≈ 2.840 kJ/kg untuk es), dan $dm/dt$ = laju sublimasi massa.

Laju sublimasi yang melewati lapisan produk kering diekspresikan oleh hukum Darcy:

$$J_w = \frac{P_i - P_c}{R_p}$$

dengan $J_w$ = fluks uap air (kg/m²s), $P_i$ = tekanan uap pada *sublimation interface*, $P_c$ = tekanan ruang (*chamber*), dan $R_p$ = resistansi massa lapisan kering (m²·Pa·s/kg).

### 2.2 Propagasi Sinyal Nirkabel dalam Lingkungan Vakum-Lemak Air

Model *path loss* log-normal yang relevan untuk propagasi WSN di dalam bilik *freeze dryer*:

$$PL(d) = PL(d_0) + 10\, n \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ = rugi lintasan referensi pada jarak $d_0$ = 1 m, $n$ = *path-loss exponent* (2–4 untuk *line-of-sight* di dalam lemari baja), dan $X_\sigma \sim \mathcal{N}(0, \sigma^2)$ = komponen *shadowing*. Persamaan Friis untuk daya terima:

$$P_r = P_t\, G_t\, G_r \left(\frac{\lambda}{4\pi d}\right)^2$$

### 2.3 Kapabilitas Proses dan Kinetika Degradasi

Kemampuan proses (*process capability index*) didefinisikan:

$$C_{pk} = \min\!\left(\frac{USL - \mu}{3\sigma},\; \frac{\mu - LSL}{3\sigma}\right)$$

Kinetika degradasi服从 hukum Arrhenius:

$$k = A \exp\!\left(-\frac{E_a}{R\, T_p}\right)$$

dengan $A$ = faktor pra-eksponensial, $E_a$ = energi aktivasi (kJ/mol), dan $R$ = 8,314 J/mol·K. Pada produk liofilisasi, mempertahankan $T_p < T_g'$ (suhu transisi gelas) merupakan syarat wajib; pendekatan WSN memungkinkan pembacaan $T_p$ dengan akurasi ±0,5 °C per vial, jauh melampaui *single-thermocouple* konvensional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur sistem yang diusulkan oleh Meza-Galvan et al. (2026) mengikuti kerangka PAT berlapis:

1. **Layer 1 — Sensor Node (vial-level):** Setiap *node* mencakup termokoplas Tipe-T miniatur, sensor kelembapan kapasitif, dan transduser tekanan. Komunikasi menggunakan protokol IEEE 802.15.4 (*Zigbee*) atau Bluetooth Low Energy (BLE) untuk latensi rendah.
2. **Layer 2 — Cluster Head:** Agregasi data per rak (*shelf*) menjadi *gateway* dengan kemampuan pemrosesan tepi (*edge computing*) untuk menyaring anomali.
3. **Layer 3 — Process Historian & Multivariate Analytics:** Penyimpanan data sesuai ALCOA+ (FDA) dan pemodelan *batch* melalui PCA / PLS untuk ekstraksi *critical quality attributes* (CQA).
4. **Layer 4 — HMI / MES Integration:** Visualisasi *spatiotemporal heat-map* dan *closed-loop* umpan balik ke pengendali suhu *shelf*.

Diagram alir logika keputusan SOP:

```
[Inisialisasi sensor WSN] → [Kalibrasi di vakum] → 
   ↓
[Akuisisi data tiap 5 detik] → [Filter Kalman] → 
   ↓
[Estimasi Tp & Pc per vial] → [Prediksi R_p(t)] → 
   ↓
{Cpk < 1,33?} → YA → [Hold-cycle + Investigasi OOS] 
   ↓ TIDAK
[Lanjutkan siklus] → [Dokumentasi PAT-record]
```

Artusio et al. (2026) menekankan bahwa prosedur ini harus memenuhi ASTM E2503 untuk kalibrasi termal, ISO 13485 untuk sistem mutu alat kesehatan, dan 21 CFR Part 11 untuk rekaman elektronik.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *freeze dryer* skala pilot dengan 7 *shelf* masing-masing berisi 200 vial (total 1.400 vial), menjalankan siklus *primary drying* pada $T_s$ = 25 °C, $P_c$ = 10 Pa. Sensor WSN dipasang pada 30 vial terdistribusi (≈2,1% sampel) mengikuti *stratified random sampling*.

**Langkah 1 — Perpindahan panas per vial.** Asumsi $K_v$ = 0,0075 W/m²K (umum untuk vial 10R dengan gas konduksi pada tekanan 10 Pa), $A_v$ = 3,5 × 10⁻⁴ m², dan $T_p$ = −25 °C:

$$Q_v = 0{,}0075 \cdot 3{,}5 \times 10^{-4} \cdot (25 - (-25)) = 1{,}31 \times 10^{-4}\text{ W per vial}$$

Untuk 1.400 vial: $Q_{total}$ = 0,184 W — sangat rendah, menunjukkan efisiensi termal tinggi namun membutuhkan kontrol presisi.

**Langkah 2 — Laju sublimasi.** Dengan $R_p$ tipikal 1.000 m²·Pa·s/kg untuk produk 5% w/v sukrosa pada akhir *primary drying*, dan $