# 2748 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur PAT, Pemodelan Sublimasi, dan Optimalisasi Siklus Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan operasi unit kritis dalam manufaktur farmasi modern, khususnya untuk produk biologi, vaksin mRNA, antibodi monoklonal, dan API (Active Pharmaceutical Ingredient) yang tidak stabil secara termal. Lebih dari 50% produk biofarmasi yang disetujui FDA dalam dekade terakhir memerlukan formulasi liofilisasi untuk menjamin stabilitas jangka panjang dan integritas struktural molekul aktif (Meza-Galvan dkk., 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Dalam konteks Teknik Industri, proses ini merupakan sistem manufaktur *batch* bernilai tambah tinggi, di mana satu lot produk biologi komersial dapat bernilai USD 5–50 juta, dan satu *batch failure* dapat menimbulkan kerugian ekonomi langsung antara USD 500.000 hingga USD 2 juta akibat pembuangan produk, kehilangan kapasitas lini produksi, serta kebutuhan investigasi OOS (*Out-of-Specification*).

Inisiatif FDA tentang Process Analytical Technology (PAT) yang dirilis sejak 2004, dan diperkuat oleh pedoman ICH Q8/Q9/Q10, telah mendorong transformasi paradigma kontrol proses dari *end-product testing* menuju *real-time quality assurance*. Dalam liofilisasi, tantangan fundamentalnya adalah bahwa produk berada di dalam vial tertutup dengan lingkungan vakum dan gradien termal yang kompleks, sehingga pemantauan konvensional berbasis termokopel berkabel hanya mampu mengakuisisi data dari 12–16 posisi vial—terlalu稀疏 untuk merepresentasikan heterogenitas intrinsik dari ribuan vial yang diproses secara simultan. Heterogenitas ini bersumber dari efek *edge vial* (vial tepi yang lebih cepat kering karena radiasi dinding), variasi ketinggian dan volume *fill*, serta dinamika front sublimasi yang bersifat *batch-dependent*.

Wireless Sensor Networks (WSN) muncul sebagai solusi arsitektural yang memungkinkan densitas sensor jauh lebih tinggi (50–500 node per *batch*), mendukung pengambilan keputusan berbasis data secara real-time, dan memungkinkan implementasi *advanced process control* (APC) berbasis model predictive control (MPC). Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) secara komprehensif mendokumentasikan arsitektur WSN untuk aplikasi liofilisasi, termasuk desain *hardware* sensor miniatur yang mampu bertahan pada rentang suhu $-80°C$ hingga $+40°C$, protokol komunikasi nirkabel dengan latensi rendah, dan integrasi dengan platform PAT digital. Sementara itu, Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) memposisikan WSN sebagai salah satu teknologi emergent kunci yang mengubah landscape PAT liofilisasi, bersama dengan soft-sensing, Raman spectroscopy, dan machine learning-based state estimation.

Secara strategis, adopsi WSN dalam liofilisasi farmasi berpotensi menurunkan *cycle time* primer drying sebesar 15–30%, mengurangi konsumsi energi spesifik (kWh per vial) sebesar 10–25%, dan meningkatkan *yield* produk合格的 hingga 5–8% melalui identifikasi dini vial-vial *over-drying* atau *collapse*. Bagi insinyur industri, ini merepresentasikan peluang signifikan dalam optimalisasi kapasitas lini (*capacity utilization*), pengurangan biaya kualitas (*cost of poor quality*), dan peningkatan kepatuhan terhadap Quality by Design (QbD) framework.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan matematis liofilisasi primer drying memerlukan kopling antara perpindahan panas (dari *shelf* menuju sublimation front) dan perpindahan massa (uap air dari front sublimasi menuju ruang vakum). Model Pikal (1985) yang telah menjadi standar industri merepresentasikan laju sublimasi per vial sebagai berikut:

$$\frac{dm}{dt} = \frac{A_p \cdot \left[P_{ice}(T_s) - P_c\right]}{R_p}$$

di mana $dm/dt$ adalah laju sublimasi (kg/s), $A_p$ adalah luas penampang sublimasi vial (m²), $P_{ice}(T_s)$ adalah tekanan uap air pada suhu front sublimasi $T_s$ (Pa), $P_c$ adalah tekanan ruang (*chamber pressure*, Pa), dan $R_p$ adalah hambatan perpindahan massa produk kering (Pa·s/kg). Tekanan uap es mengikuti persamaan Clausius-Clapeyron:

$$P_{ice}(T_s) = \exp\left(24.019 - \frac{6144.96}{T_s + 273.15}\right)$$

dengan $T_s$ dalam °C dan $P_{ice}$ dalam Torr. Resistansi produk kering bervariasi sepanjang waktu sesuai dengan:

$$R_p(t) = R_{p,0} + \frac{A_0 \cdot \int_0^t \frac{dm}{d\tau} d\tau}{A_p \cdot D_{eff}}$$

di mana $R_{p,0}$ adalah resistansi awal, $A_0$ adalah konstanta struktural produk, dan $D_{eff}$ adalah difusivitas efektif uap air dalam matriks beku.

Untuk perpindahan panas dari *shelf* ke vial:

$$q = \frac{T_{shelf} - T_s}{R_s} = A_v \cdot K_v \cdot (T_{shelf} - T_s)$$

dengan $R_s$ adalah hambatan termal total (m²·K/W), $A_v$ luas dasar vial, dan $K_v$ koefisien transfer panas vial efektif. Energi sublimasi:

$$Q_{sub} = \dot{m} \cdot \Delta H_s$$

di mana $\Delta H_s \approx 2800$ kJ/kg adalah entalpi sublimasi es. Neraca energi total untuk satu *batch* dengan $N$ vial:

$$E_{batch} = N \cdot \int_0^{t_d} \dot{m}(t) \cdot \Delta H_s \, dt$$

Pada sisi Wireless Sensor Network, model propagasi sinyal mengikuti *log-distance path loss*:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d)$ redaman pada jarak $d$ (dB), $PL(d_0)$ redaman referensi pada $d_0 = 1$ m, $n$ adalah *path loss exponent* (2–4 untuk lingkungan dalam ruang dengan logam), dan $X_\sigma \sim \mathcal{N}(0, \sigma^2)$ adalah *shadow fading* Gaussian. Received Signal Strength Indicator (RSSI) menjadi:

$$RSSI = P_t - PL(d)$$

di mana $P_t$ adalah daya transmisi (dBm). Model konsumsi energi node sensor mengikuti framework Heinzelman:

$$E_{total} = N \cdot \left(E_{sense} + E_{tx} + E_{rx} + E_{sleep}\right)$$

dengan $E_{tx} = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{\alpha}$, di mana $k$ adalah ukuran paket data (bit) dan $\alpha$ adalah path loss exponent transmisi (umumnya 2 untuk kondisi vakum dengan propagasi guided).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam liofilisasi farmasi mengikuti kerangka sistematis yang mengintegrasikan desain eksperimen, kualifikasi sensor, dan integrasi data ke dalam Manufacturing Execution System (MES). Tahapan utamanya adalah sebagai berikut:

**Tahap 1: Analisis Kebutuhan & Desain Jaringan.** Insinyur menentukan jumlah node sensor optimal berdasarkan analisis heterogenitas vial menggunakan teknik Design of Experiments (DoE). Untuk batch 10.000 vial pada freeze dryer LyoStar III atau berbasis pilot, rekomendasi minimum adalah 48–64 node yang terdistribusi secara *stratified random sampling* untuk menangkap efek posisi (pusat, tepi, sudut). Topologi jaringan direkomendasikan *hybrid mesh-star* untuk menjamin redundansi komunikasi.

**Tahap 2: Kualifikasi Sensor Miniatur.** Sensor suhu dan tekanan miniatur berbasis RTD (Resistance Temperature Detector) atau termistor harus memenuhi protokol IQ/OQ/PQ sesuai GAMP 5. Akurasi minimum $\pm 0.5°C$ pada rentang $-60°C$ hingga $+60°C$, dengan *drift* kurang dari $0.1°C$ per siklus. Sensor harus bersifat *non-outgassing* (sesuai ASTM E595) untuk mencegah kontaminasi produk.

**Tahap 3: Instalasi & Pemetaan Lokasi.** Sensor ditempatkan dalam vial representatif yang tersebar di seluruh rak (*shelf*). Lokasi didokumentasikan dalam koordinat 3D $(x, y