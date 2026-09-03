# 1708 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Sistem Monitoring Proses Analitik pada Rantai Pasok Bioteknologi Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization & Process Analytical Technology (PAT)
**Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi bioteknologi modern, khususnya untuk produk biologi bernilai tinggi seperti antibodi monoklonal (*mAbs*), vaksin mRNA, dan terapi seluler yang membutuhkan stabilitas jangka panjang tanpa refrigerasi rantai dingin. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4), proses ini menyumbang 30–50% biaya produksi keseluruhan untuk banyak sediaan protein terapeutik, dengan satu siklus batch untuk 10.000 vial skala komersial mencapai durasi 48–96 jam pada fasilitas GMP (Good Manufacturing Practice). Urgensi工业 *engineering* pada tahap ini sangat tinggi karena kegagalan sublimasi atau desorpsi yang tidak terdeteksi secara *real-time* dapat menyebabkan kerugian finansial melebihi USD 1–5 juta per batch, ditambah risiko *batch rejection* oleh regulator.

Dalam kerangka *Process Analytical Technology* (PAT) yang diinisiasi FDA sejak 2004, monitoring *in-process* menjadi pilar utama *Quality by Design* (QbD). Meza-Galvan et al. (2026) menegaskan bahwa implementasi Jaringan Sensor Nirkabel (*Wireless Sensor Networks*/WSN) merepresentasikan *paradigm shift* dari pendekatan *wired thermocouple* konvensional menuju arsitektur sensing terdistribusi tanpa menembus dinding ruang vakum (*chamber*). Pendekatan ini menghilangkan masalah *feedthrough leakage*, memperluas densitas titik monitoring dari sekitar 16–32 titik menjadi ratusan titik per rak (*shelf*), serta memungkinkan penempatan sensor *in-vial* langsung untuk mengukur suhu produk, laju sublimasi, dan tekanan parsial uap air secara simultan.

Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) melengkapi konteks dengan menjelaskan bahwa WSN memungkinkan integrasi *soft-sensor* berbasis model *primary drying* untuk memprediksi *Cake Resistance* ($R_p$) dan *Vial Heat Transfer Coefficient* ($K_v$) secara adaptif. Dalam skala industri, kemampuan ini diterjemahkan menjadi optimalisasi *shelf temperature* ramping dan pengurangan *primary drying time* sebesar 15–30%, yang berimplikasi langsung pada peningkatan *throughput* fasilitas hingga 25%. Oleh karena itu, penguasaan terhadap WSN-PAT bukan sekadar kompetensi teknis, melainkan keharusan strategis bagi insinyur industri yang beroperasi di sektor biofarmasi, vaksin, dan *contract development & manufacturing organizations* (CDMO).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas Vial dalam Liofilisasi

Meza-Galvan et al. (2026) menurunkan model panas vial total sebagai kombinasi konduksi melalui gas (*conduction*, $K_c$) dan radiasi ($K_r$):

$$K_v = K_c + K_r$$

dengan komponen konduksi bergantung pada tekanan ruang ($P_c$) sesuai korelasi Polli et al.:

$$K_c = \alpha_1 \cdot P_c + \alpha_2$$

di mana $\alpha_1 \approx 0.000078 \text{ W/(m²·K·Pa)}$ dan $\alpha_2 \approx 0.0028 \text{ W/(m²·K)}$ untuk vial standar tipe tubing 10 mL. Komponen radiasi mengikuti Hukum Stefan-Boltzmann dengan *view factor* antar vial dan rak:

$$q_{rad} = \sigma \cdot F \cdot A_v (T_s^4 - T_p^4)$$

dengan $\sigma = 5.67 \times 10^{-8} \text{ W/(m²·K⁴)}$, $F$ faktor bentuk (~0.86 untuk vial adjacent), dan $T_s$, $T_p$ berturut-turut suhu rak dan produk.

### 2.2 Persamaan Sublimasi dan Laju Pengeringan Primer

Fluks sublimasi ($\dot{m}$) pada antarmuka es-dry layer mengikuti persamaan *Pseudo-Steady-State*:

$$\dot{m} = \frac{A_v (P_{w,i}(T_i) - P_{w,c})}{R_p}$$

dengan $P_{w,i}(T_i)$ adalah tekanan uap air pada suhu antarmuka sublimasi (diestimasi melalui persamaan Goff-Gratch atau Wagner-Pruss), $P_{w,c}$ tekanan parsial di *chamber*, dan $R_p$ resistansi *dried cake* terhadap aliran uap:

$$R_p = R_{p,0} + \frac{A_1 \cdot m_0}{1 - m_0}$$

di mana $m_0$ adalah fraksi massa terlarut (untuk formulasi 5% sucrose, $m_0 = 0.05$) dan $A_1$ parameter formulasi spesifik.

### 2.3 Propagasi Sinyal Nirkabel dalam Lingkungan Vakum-Lot tertutup

WSN dalam liofilizer menghadapi tantangan propagasi RF (*radio frequency*) karena geometri *chamber* logam (*Faraday cage*) dan fluktuasi tekanan. Model *path loss* log-distance:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ rugi lintasan referensi, $n$ *path loss exponent* (2.0 untuk *free-space*, 3.5–5.0 di dalam *chamber* logam), dan $X_\sigma$ variabel acak normal dengan simpangan baku $\sigma_{PL}$.

Daya terima (*received power*) pada sensor node sesuai persamaan Friis:

$$P_r = P_t G_t G_r \left(\frac{\lambda}{4\pi d}\right)^2$$

dengan $\lambda = c/f$, $c = 3 \times 10^8$ m/s, dan frekuensi operasi khas WSN-PAT 433 MHz atau 2.4 GHz (IEEE 802.15.4/ZigBee).

### 2.4 Model Konsumsi Energi Node Sensor

Konsumsi energi transmisi mengikuti:

$$E_{tx}(k,d) = \begin{cases} k \cdot E_{elec} + k \cdot \epsilon_{fs} \cdot d^2 & d < d_0 \\ k \cdot E_{elec} + k \cdot \epsilon_{mp} \cdot d^4 & d \geq d_0 \end{cases}$$

dengan $E_{elec}$ energi elektronik sirkuit, $\epsilon_{fs}$, $\epsilon_{mp}$ parameter amplifier. Untuk *duty-cycle* monitoring suhu setiap 30 detik, kapasitas baterai lithium primer 3.6 V/2.4 Ah mendukung operasi 720+ jam, melampaui durasi siklus liofilisasi standar.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN-PAT mengikuti SOP berlapis sebagaimana diuraikan Meza-Galvan et al. (2026) dan diperkuat oleh Artusio et al. (2026):

**Tahap 1 — Pemetaan Ruang & Risiko RF:** Lakukan *site survey* untuk identifikasi blind-spot propagasi RF di dalam *chamber* dengan menggunakan *spectrum analyzer*. Tetapkan lokasi *gateway* (coordinator node) sedekat mungkin dengan dinding *chamber* yang memiliki *feedthrough* antenna terdedikasi.

**Tahap 2 — Kalibrasi & Validasi Sensor:** Sensor nirkabel termokopel tipe T dikalibrasi terhadap standar NIST pada rentang -50 °C hingga +60 °C dengan akurasi ±0.3 °C. Validasi dilakukan terhadap *Manometric Temperature Measurement* (MTM) atau *Tunable Diode Laser Absorption Spectroscopy* (TDLAS) sebagai metode referensi (Artusio et al., 2026).

**Tahap 3 — Konfigurasi Topologi Jaringan:** Gunakan topologi *star-mesh hybrid* dengan *router node* pada setiap *shelf* dan *end device* pada posisi vial sentinel (edge, center, corner). Pengalamatan mengikuti standar IEEE 802.15.4 dengan enkripsi AES-128 sesuai 21 CFR Part 11.

**Tahap 4 — Integrasi Data Historian:** Stream data di-aggregate ke *Process Historian* (PI System atau AVEVA) dengan sampling rate 1 Hz untuk suhu dan 0.1 Hz untuk tekanan. *Soft-sensor* berbasis *Moving Boundary Model* (Pikal) dijalankan secara *real-time* untuk estimasi $T_i$ dan $\dot{m}$.

**Tahap 5 — Quality Decision Logic:** Gunakan *fuzzy logic controller* atau *Model Predictive Control* (MPC) untuk mengatur $T_s$ dan $P_c$ agar mempertahankan $T_i$ di bawah *collapse temperature* ($T_{col}$) produk dengan margin keamanan 2–3 °C.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Siklus *primary drying* formulasi 50 mg/mL protein monoklonal dalam vial 10 mL tipe tubing, menggunakan *freeze dryer* pilot skala 1 m² luas rak total dengan 8 rak × 250 vial/rak = 2.000 vial. Spesifikasi proses: $T_s$ = 20 °C, $P_c$ = 10 Pa, target $\dot{m}$ = 0.4 g/vial/jam.

### Langkah 1: Perhitungan Panas Vial Total

$$K_c = (7.8 \times 10^{-5})(10) + 0.0028 = 0.00358 \text{ W/(m²·K)}$$

Untuk komponen radiasi dengan $T_s = 293.15$ K, $T_p = 263.15$ K (estimasi awal), $F = 0.86$:

$$K_r = \frac{\sigma F (T_s^4 - T_p^4)}{T_s - T_p} = \frac{(5.67 \times 10^{-8})(0.86)((293.15)^4 - (263.15)^4)}{30}$$

Menghitung numerator: $(293.15)^4 = 7.39 \times 10^9$, $(263.15)^4 = 4.80 \times 10^9$, selisih = $2.59 \times 10^9$ K⁴. Maka:

$$K_r = \frac{(5.67 \times 10^{-8})(0.86)(2.59 \times 10^9)}{30} = \frac{0.126}{30} \approx 4.21 \times 10^{-3} \text{ W/(m²·K)}$$

$$K_v = 0.00358 + 0.00421 = 0.00779 \text{ W/(m²·K)}$$

### Langkah 2: Fluks Panas per Vial

Luas vial efektif $A_v = 3.8 \times 10^{-3}$ m². Fluks panas total.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
