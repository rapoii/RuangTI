# 1884 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Rekayasa Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau freeze-drying merupakan proses unit operasi kritis dalam industri farmasi bioteknologi yang digunakan untuk menstabilkan produk biologis sensitif seperti vaksin mRNA, antibodi monoklonal, dan protein terapeutik. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *Wireless Sensor Networks for Lyophilization* dari buku *Process Analytical Technology for Pharmaceutical Freeze-Drying*, lebih dari 50% produk biofarmasi yang saat ini disetujui oleh FDA memerlukan proses liofilisasi untuk menjamin stabilitas jangka panjangnya. Proses ini melibatkan tiga tahap utama: pembekuan (*freezing*), pengeringan primer (*primary drying*) yang sublimasi, dan pengeringan sekunder (*secondary drying*) yang desorpsi, dimana kontrol suhu dan tekanan yang presisi menjadi determinan utama kualitas produk akhir.

Urgensi ekonomi dan teknis dari penerapan Wireless Sensor Networks (WSN) dalam liofilisasi farmasi didorong oleh beberapa faktor struktural. Pertama, biaya satu siklus batch liofilisasi pada skala produksi dapat mencapai USD 50.000–250.000 mengingat konsumsi energi sublimasi yang masif dan nilai produk yang sangat tinggi. Kedua, kegagalan satu batch dapat menimbulkan kerugian hingga jutaan dolar dan keterlambatan pasokan obat kritis. Ketiga, regulasi FDA Process Validation Guidance (2011) dan ICH Q8-Q12 mendorong implementasi *Quality by Design* (QbD) yang memerlukan monitoring real-time multivariat. Dalam konteks ini, Meza-Galvan et al. (2026) menekankan bahwa WSN memungkinkan pengukuran *in-situ* parameter kritis seperti suhu produk (T_p), suhu rak (T_sh), tekanan ruang (P_c), dan resistansi lapisan kering (R_p) tanpa mengganggu sterilitas atau integritas vial.

Artikel pendukung dari Artusio, Barresi, dan Pisano (2026) pada bab *Emerging Technologies in Pharmaceutical Freeze-Drying* menyoroti bahwa penerapan sensor konvensional seperti thermocouple kawat sering kali tidak representatif karena posisinya yang terbatas pada vial sentinel. Ketidakakuratan ini memicu *batch failure rate* yang secara historis mencapai 5–15% pada industri farmasi. WSN dengan node miniaturisasi (≤5 mm) memungkinkan penempatan multipoint pada ribuan vial secara simultan, membuka paradigma *per-vial monitoring* yang sebelumnya mustahil. Lebih lanjut, integrasi WSN dengan platform *machine learning* dan *digital twin* sebagaimana dibahas oleh Artusio et al. (2026) memungkinkan prediksi *endpoint* sublimasi dengan akurasi yang sebelumnya tidak dapat dicapai, sehingga mengurangi over-drying yang membuang energi hingga 30% dari total konsumsi proses. Sinergi kedua literatur ini membentuk fondasi bahwa WSN bukan sekadar alat ukur, melainkan komponen strategis dalam transformasi digital manufacturing farmasi 4.0.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Meza-Galvan et al. (2026) membangun analisis WSN di atas kerangka perpindahan panas dan massa yang dirumuskan melalui persamaan energi pada vial liofilisasi. Laju sublimasi per vial $\dot{m}_{sub}$ (kg/s) mengikuti:

$$\dot{m}_{sub} = \frac{A_v \cdot (P_{ice}(T_p) - P_c)}{R_p}$$

dimana $A_v$ adalah luas penampang internal vial (m²), $P_{ice}(T_p)$ adalah tekanan uap es pada suhu antarmuka sublimasi (Pa) yang bergantung secara eksponensial pada suhu menurut persamaan Goff-Gratch atau Murphy-Koop, $P_c$ adalah tekanan ruang terkontrol (Pa), dan $R_p$ adalah resistansi aliran uap air melalui lapisan kering produk (Pa·m²·s/kg). Nilai $R_p$ sendiri meningkat secara kuadratik terhadap kedalaman lapisan kering $L_d$ (m) menurut:

$$R_p = R_{p,0} + \frac{a \cdot L_d^2}{1 + b \cdot L_d}$$

dengan $R_{p,0}$ adalah resistansi awal (≈ 0.1–1.0 Pa·m²·s/kg untuk larutan buffer sederhana), serta parameter empiris $a$ dan $b$ yang bergantung pada formulasi. Keakuratan pemodelan $R_p$ menjadi semakin penting ketika WSN memberikan data suhu vial individual, karena resistansi lokal berbeda antar posisi rak akibat efek *edge effect* dan *radiation effect*.

### 2.2 Persamaan Energi pada Vial

Keseimbangan energi pada vial menghasilkan:

$$m_v c_{p,v} \frac{dT_p}{dt} = \Delta H_{sub} \dot{m}_{sub} + A_v h_{eff}(T_{sh} - T_p) + Q_{rad}$$

dimana $m_v$ adalah massa produk (kg), $c_{p,v}$ kapasitas panas spesifik (J/kg·K), $\Delta H_{sub}$ entalpi sublimasi es (≈ 2.838 MJ/kg pada 0°C), $h_{eff}$ koefisien perpindahan panas efektif (W/m²·K) yang menggabungkan konduksi gas, konduksi kontak padat, dan radiasi, serta $Q_{rad}$ fluks radiasi dari dinding ruang (W). WSN memungkinkan pengukuran langsung $T_p$ sehingga seluruh ruas kiri dapat dihitung secara *real-time*, dan sebaliknya parameter $h_{eff}$ serta $R_p$ dapat diestimasi melalui *inversion* numerik.

### 2.3 Arsitektur WSN dan Model Konsumsi Daya

Arsitektur WSN yang diusulkan Meza-Galvan et al. (2026) mengikuti topologi *star-mesh hybrid* dengan parameter kunci sebagai berikut. Setiap node sensor memiliki model konsumsi daya:

$$P_{node} = P_{sleep} \cdot (1 - \delta) + P_{tx} \cdot \delta_{tx} + P_{rx} \cdot \delta_{rx} + P_{sens} \cdot \delta_{sens}$$

dimana $\delta$ adalah duty cycle, dan $\delta_{tx}$, $\delta_{rx}$, $\delta_{sens}$ adalah fraksi waktu aktif pada mode transmisi, receive, dan sensing. Masa pakai baterai node $t_{life}$ (jam) untuk kapasitas baterai $C_{bat}$ (mAh) dan tegangan $V_{bat}$ (V) adalah:

$$t_{life} = \frac{C_{bat} \cdot V_{bat}}{P_{node} / 3600}$$

Untuk aplikasi farmasi dengan siklus liofilisasi 48–120 jam, optimasi duty cycle menjadi krusial agar node mampu bertahan sepanjang proses tanpa intervensi manual yang melanggar aseptisitas.

### 2.4 Model Akurasi Pengukuran dan Kalman Filtering

Akurasi estimasi state sistem WSN ditingkatkan menggunakan *Extended Kalman Filter* (EKF) untuk fusi data dari sensor suhu ganda (termokopel Tipe T dan RTD Pt1000). Persamaan prediksi EKF adalah:

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$

dengan kovariansi prediksi:

$$P_{k|k-1} = F_{k-1} P_{k-1|k-1} F_{k-1}^T + Q_{k-1}$$

dan langkah koreksi menggunakan pengukuran WSN $z_k$:

$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

Pendekatan ini secara eksplisit dibahas oleh Artusio et al. (2026) sebagai komponen penting dari PAT generasi baru yang mengurangi noise pengukuran hingga 60% dibanding filter moving-average konvensional, sehingga memungkinkan deteksi anomali seperti *collapse* atau *melt-back* lebih awal 5–15 menit sebelum termanifestasi pada parameter makroskopis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi farmasi mengikuti SOP berlapis yang dimulai dari tahap *Design Qualification* hingga *Continued Process Verification*. Tahapan tersebut secara sistematis disajikan sebagai berikut.

**Tahap 1 – Risk Assessment & Sensor Placement Planning.** Melakukan *Failure Mode and Effects Analysis* (FMEA) dengan menghitung *Risk Priority Number* (RPN) untuk setiap mode kegagalan:

$$RPN = S \times O \times D$$

dengan $S$ (severity), $O$ (occurrence), $D$ (detection). Penempatan node sensor difokuskan pada zona rawan seperti *edge vials*, *center vials*, dan vial dengan variasi ketinggian filling tertinggi.

**Tahap 2 – Node Calibration & IQ/OQ/PQ.** Setiap node WSN dikalibrasi terhadap standar traceability NIST pada rentang -50°C hingga +50°C dengan akurasi target ≤ ±0.3°C. Prosedur Installation Qualification (IQ), Operational Qualification (OQ), dan Performance Qualification (PQ) mengikuti ASTM E2503 dan GAMP 5.

**Tahap 3 – Real-time Data Acquisition.** Node sensor akuisisi data pada frekuensi sampling $f_s = 0.1$–$1$ Hz, ditransmisikan via protokol IEEE 802.15.4 (Zigbee) atau Bluetooth Low Energy 5.0 ke gateway steril, lalu diteruskan ke historian PI System atau OSIsoft untuk penyimpanan dengan *time-stamping* NTP-disinkronkan.

**Tahap 4 – Advanced Process Control (APC).** Berdasarkan data WSN, algoritma *Model Predictive Control* (MPC) mengoptimasi laju kenaikan suhu rak $dT_{sh}/dt$ untuk menjaga $T_p$ pada setpoint yang menjamin sublimasi di bawah *collapse temperature* $T_c$ dengan margin keamanan $\Delta T_{margin} = T_c - T_p \geq 2°C$ (sesuai rekomendasi Pikal, 1985 yang dirujuk Meza-Galvan et al., 2026).

**Tahap 5 – Endpoint Detection & Secondary Drying Trigger.** Deteksi endpoint sublimasi dilakukan menggunakan metode *Pressure Rise Test* (PRT) yang ditingkatkan dengan data WSN. Kenaikan tekanan ruang $\Delta P$ saat katup isolasi ditutup selama 30 detik dihitung dengan:

$$\Delta P = \frac{dm_{sub}/dt \cdot R_{eq} \cdot t_{PRT}}{V_c}$$

dimana $V_c$ adalah volume ruang. Jika $\Delta P$ turun di bawah threshold yang ditetapkan (umumnya ≤ 5 mTorr/min), maka proses berpindah ke *secondary drying*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Optimasi Primary Drying Vaksin mRNA

Sebuah fasilitas produksi liofilisasi vaksin mRNA memiliki parameter berikut: rak liofilizer berisi 6.000 vial 10R dengan filling volume 5 mL, luas penampang vial $A_v = 4.91 \times 10^{-4}$ m², suhu sublimasi awal $T_p = -25°C$ (248.15 K), tekanan ruang $P_c = 10$ Pa, dan resistansi lapisan kering awal $R_{p,0} = 0.5$ Pa·m²·s/kg.

**Langkah 1: Hitung Tekanan Uap Es pada Suhu Sublimasi**

Menggunakan persamaan Goff-Gratch pada $T_p = 248.15$ K:

$$\log_{10}(P_{ice}) = -9.09718 \left(\frac{T_0}{T_p} - 1\right) - 3.56654 \log_{10}\left(\frac{T_0}{T_p}\right) + 0.876793 \left(1 - \frac{T_p}{T_0}\right)$$

dengan $T_0 = 273.16$ K. Substitusi menghasilkan $\log_{10}(P_{ice}) \approx 1.89$, sehingga $P_{ice}(248.15\,K) \approx 77.6$ Pa.

**Langkah 2: Hitung Driving Force Sublimasi**

$$\Delta P = P_{ice} - P_c = 77.6 - 10 = 67.6 \text{ Pa}$$

**Langkah 3: Hitung Laju Sublimasi per Vial**

Asumsikan $R_p$ berkembang selama 20 jam menjadi $R_p \approx 3.0$ Pa·m²·s/kg (nilai tipikal untuk larutan mRNA dengan eksipien sukrosa):

$$\dot{m}_{sub} = \frac{4.91 \times 10^{-4} \times 67.6}{3.0} = 1.107 \times 10^{-2} \text{ g/s per vial}$$

atau $\approx 39.8$ g/jam per vial.

**Langkah 4: Hitung Total Laju Sublimasi dan Konsumsi Energi**

Untuk 6.000 vial:

$$\dot{M}_{sub,total} = 6000 \times 1.107 \times 10^{-2} = 66.4 \text{ g/s} = 239.0 \text{ kg/jam}$$

Konsumsi energi sublimasi:

$$\dot{Q}_{sub} = \dot{M}_{sub,total} \times \Delta H_{sub} = 0.0664 \times 2.838 \times 10^6 = 188.4 \text{ kW}$$

Tambahkan beban desorpsi dan radiasi 25%, total beban pendingin $\dot{Q}_{total} \approx 235.5$ kW.

**Langkah 5: Estimasi Penghematan dengan WSN-enabled MPC**

Tanpa WSN, *safety margin* konservatif menyebabkan over-drying 30% dari total waktu (Artusio et al., 2026). Dengan WSN-MPC, margin dapat dikurangi dari 5°C menjadi 2°C, mempersingkat siklus dari 48 jam menjadi 38 jam, dan menurunkan konsumsi energi dari ≈ 9.040 kWh menjadi ≈ 7.150 kWh per batch. Penghematan biaya energi pada tarif industri USD 0.12/kWh adalah:

$$\Delta C_{energy} = (9040 - 7150) \times 0.12 = \text{USD } 226.8 \