# 1804 — Wireless Sensor Networks dan Teknologi Emerging untuk Lyophilisasi Farmasi: Arsitektur Pemantauan Cerdas dalam Kerangka Process Analytical Technology (PAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Lyophilisasi (freeze‑drying) merupakan unit operasi kritis dalam manufaktur farmasi modern yang berfungsi untuk menghilangkan air dari produk biologis, vaksin, antibiotik, dan sediaan steril parenteral bernilai tinggi lainnya melalui proses sublimasi di bawah vakum. Lebih dari 50 % produk bioterapeutik baru yang disetujui oleh badan regulatori global—mencakup antibodi monoklonal, konjugat obat‑antibodi (ADC), dan terapi gen—memerlukan siklus liofilisasi sebagai tahap akhir formulasi karena sifat termolabilnya (Meza‑Galvan *et al.*, 2026). Menurut Meza‑Galvan, Strongrich, dan Darwish dalam bab *Wireless Sensor Networks for Lyophilization* (DOI: 10.1002/9783527850303.ch4), nilai sebuah batch tunggal dalam lini produksi liofilisasi parenteral dapat melampaui USD 1–5 juta, sehingga variabilitas vial‑ke‑vial yang tidak terdeteksi menjadi sumber utama kerugian ekonomi dan risiko mutu.

Dalam operasional konvensional, liofilizer industri (kapasitas 5–100 m² luas rak, berisi 10.000–100.000 vial per batch) hanya dilengkapi sensor kabel (thermocouple Tipe‑T) terbatas—umumnya 4 hingga 12 titik pada posisi corner, center, dan edge rak—sehingga > 99,9 % vial tidak terukur secara langsung (Artusio, Barresi, & Pisano, 2026). Padahal, gradien suhu pada rak tunggal dapat mencapai 3–5 °C selama primary drying, yang secara langsung mendorong *batch heterogeneity* terhadap parameter kritis seperti *product temperature (Tp)*, *sublimation flux (dm/dt)*, dan *residual moisture*. Framework Process Analytical Technology (PAT) yang diterbitkan FDA pada Guidance for Industry PAT‑2004, serta inisiatif Pharma 4.0™, mendorong transformasi menjadi *real‑time release* (RTR) berbasis data sensorik terdistribusi. Di sinilah Wireless Sensor Networks (WSN) muncul sebagai enabler strategis: jaringan node nirkabel miniatur yang mampu memantau ratusan hingga ribuan vial secara simultan dengan akurasi ± 0,2 °C untuk suhu dan ± 0,1 mbar untuk tekanan ruang, sembari mempertahankan kepatuhan terhadap lingkungan Good Manufacturing Practice (GMP) Grade B/C.

Urgensi penerapan WSN semakin meningkat ketika industri farmasi global menghadapi tekanan ganda: (1) meningkatnya kompleksitas molekul biologis yang menuntut kontrol proses lebih ketat, dan (2) kebutuhan untuk menekan *cycle time* liofilisasi yang secara konvensional mencapai 48–96 jam per batch—sumbangan energi listrik 30–60 % dari total biaya produksi vial. Dengan WSN, rekayasawan proses dapat menerapkan strategi *smart freezing*, *controlled nucleation*, dan *dynamic shelf temperature ramping* yang hanya mungkin dilakukan ketika tersedia umpan balik sensorik real‑time. Bab Meza‑Galvan *et al.* (2026) menekankan bahwa integrasi WSN bukan sekadar peningkatan instrumentasi, melainkan transformasi arsitektur informasi yang mengubah liofilizer dari *black‑box batch reactor* menjadi *cyber‑physical system* yang sepenuhnya dapat diawasi, dikendalikan, dan dioptimasi berbasis data (*data‑driven manufacturing*).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Primary Drying

Dasar analisis kuantitatif liofilisasi adalah model *quasi‑steady state* dari Pikal dan Nail yang dikutip oleh Meza‑Galvan *et al.* (2026). Laju sublimasi pada vial ke‑$i$ dapat dinyatakan sebagai:

$$\left(\frac{dm}{dt}\right)_{i} = \frac{P_{s,i}(T_p) - P_{c}}{R_{p,i}(l)} \quad \text{(kg/s)}$$

dengan $P_{s,i}(T_p)$ adalah tekanan uap es pada interface sublimasi (fungsi suhu produk, umumnya mengikuti korelasi Clausius‑Clapeyron), $P_c$ adalah tekanan ruang (chamber pressure), dan $R_{p,i}(l)$ adalah resistansi lapisan kering (*dried layer resistance*) yang tumbuh seiring waktu:

$$R_{p,i}(l) = R_{p,0} + \frac{A_p \, l_i}{K_{e,i}}$$

dengan $A_p$ adalah luas penampang sublimasi, $l_i$ adalah ketebalan lapisan kering pada waktu ke‑$t$, $K_{e,i}$ adalah permeabilitas efektifnya, dan $R_{p,0}$ adalah resistansi stopper/vial. Neraca energi pada rak menghasilkan:

$$Q_i = \Delta H_s \left(\frac{dm}{dt}\right)_i A_v = K_v \left(T_{s,i} - T_{p,i}\right)$$

dengan $Q_i$ adalah kalor yang masuk ke vial, $\Delta H_s \approx 2.838$ kJ/kg (kalor sublimasi es), $A_v$ luas vial, $K_v$ koefisien transfer panas vial (efektif), $T_s$ suhu rak, dan $T_p$ suhu produk. Sensor WSN berperan mengukur $T_{p,i}$ secara langsung untuk setiap vial, sehingga gradien $T_p$ antarrak dapat dipetakan secara spasial.

### 2.2 Statistik Jaringan Sensor Nirkabel

Kinerja WSN pada liofilizer dimodelkan sebagai jaringan graf $G = (V, E)$ dengan $|V| = n$ node sensor. Metrik konektivitas kunci meliputi (Meza‑Galvan *et al.*, 2026):

- **Degree rata‑rata node:** $\bar{k} = \frac{1}{n}\sum_{v \in V} \deg(v)$
- **Network reliability** (probabilitas semua node aktif): $R(t) = e^{-\lambda t}$ dengan $\lambda$ laju kegagalan node (umumnya 10⁻⁴/jam untuk sensor industri).
- **End‑to‑end latency** untuk transmisi data vial ke gateway:

$$L_{e2e} = L_{proc} + L_{queue} + L_{trans} + L_{prop}$$

dengan $L_{trans} = \frac{N_{bits}}{R_b}$ di mana $N_{bits}$ adalah ukuran paket (misal 64 bit pengukuran suhu 16‑bit + timestamp + ID), dan $R_b$ adalah bit‑rate radio (250 kbps untuk IEEE 802.15.4 / ZigBee).

### 2.3 Energi Konsumsi Node

Batas energi baterai litium node sensor mengikuti model discharge linear:

$$E_{batt}(t) = E_0 - P_{idle} \cdot t - P_{tx} \cdot t_{tx} - P_{rx} \cdot t_{rx}$$

Untuk duty‑cycle $\delta = t_{active}/T$ dengan periode pengukuran $T = 1$ menit, konsumsi daya tipikal node adalah $P_{avg} = \delta (P_{tx} + P_{rx}) + (1-\delta) P_{sleep} \approx 0{,}12$ mW, memungkinkan operasi $> 5$ tahun pada baterai 2.400 mAh (3 V).

### 2.4 Statistical Process Control (SPC) untuk Data WSN

Data multivariat dari $n$ vial dipantau menggunakan *Hotelling's T² statistic*:

$$T^2 = (\mathbf{x} - \bar{\mathbf{x}})^\top S^{-1} (\mathbf{x} - \bar{\mathbf{x}})$$

dengan $\mathbf{x} \in \mathbb{R}^p$ vektor fitur (mis. $[T_p, dm/dt, R_p, l]$), $\bar{\mathbf{x}}$ mean, dan $S$ matriks kovariansi. Batas kendali UCL untuk fase I adalah $UCL = \frac{(n-1)p}{n-p} F_{\alpha, p, n-p}$, memungkinkan deteksi *out‑of‑control* vial secara real‑time.

## 3. Metodologi Rekayasa & SOP Implementasi WSN pada Liofilizer Industri

### 3.1 Arsitektur Teknologi (3‑Tier)

Meza‑Galvan *et al.* (2026) mengusulkan arsitektur tiga lapis (Gambar logika):

1. **Tier 1 – Sensing Layer:** Node sensor nirkabel miniatur (volume < 0,8 cm³) berisi thermocouple Tipe‑T, pressure transducer MEMS, mikrokontroler SoC (mis. CC2652), dan baterai Li‑SOCl₂. Node ditempatkan pada posisi spesifik vial menggunakan adaptor *vial‑cap* steril sekali pakai.
2. **Tier 2 – Network Layer:** Protokol IEEE 802.15.4g dengan topologi *mesh*; aggregator node pada setiap rak mengumpulkan data vial dan meneruskan ke gateway melalui *store‑and‑forward*.
3. **Tier 3 – Application Layer:** SCADA/OPC‑UA server di ruang kontrol GMP menerima stream data, menjalankan model *primary drying* real‑time, dan mengumpankan *control loop* ke PLC liofilizer untuk *dynamic shelf temperature* dan *chamber pressure setpoint*.

### 3.2 SOP Implementasi Sistematis

1. **Risk Assessment & URS (User Requirement Specification):** Definisikan Critical Quality Attributes (CQA)—residual moisture, cake appearance, reconstitution time—dan Critical Process Parameters (CPP) yang akan dipantau.
2. **IQ (Installation Qualification):** Verifikasi penempatan node; pemetaan RSSI (*Received Signal Strength Indicator*) minimal ‑75 dBm di setiap posisi vial untuk menjamin Packet Error Rate (PER) < 1 %.
3. **OQ (Operational Qualification):** Kalibrasi thermocouple terhadap standar ITS‑90 di *dry‑block calibrator* (akurasi ± 0,05 °C); pengujian latensi end‑to‑end di bawah 2 detik untuk 1.000 node aktif simultan.
4. **PQ (Performance Qualification):** Jalankan tiga batch validation dengan Placebo/Active Product; bandingkan prediksi *endpoint primary drying* (pirani vs thermocouple pressure divergence) dengan metode gravimetri.
5. **Continuous Monitoring:** Aktifkan SPC multivariat, alert otomatis ke Quality Assurance jika $T^2 > UCL$ atau terjadi vial *supercooling > ‑5 °C*.
6. **Data Integrity:** Sesuai ALCOA+ principles; timestamp NTP, hash SHA‑256 setiap record, arsip di WORM storage minimal 10 tahun.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Liofilizer produksi skala‑pilot dengan luas rak total $A_{rack} = 4$ m², memuat $N = 5.000$ vial 10R (volume isi 3 mL, formulasi 5 % sukrosa + protein model). Suhu rak dijadwalkan $T_s = ‑25$ °C selama freezing, lalu $+20$ °C selama primary drying; tekanan ruang $P_c = 0{,}1$ mbar.

### Langkah