# 1644 — Jaringan Sensor Nirkabel untuk Liofilisasi: Arsitektur Pemantauan Proses Kritis dalam Manufaktur Farmasi Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritikal dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti protein monoklonal, antibodi terapeutik, dan vaksin mRNA. Secara global, lebih dari 50% produk biofarmasi yang telah disetujui FDA memerlukan proses liofilisasi dalam jalur manufakturnya, menjadikan siklus *batch* liofilisasi sebagai titik penentu kualitas, biaya produksi, dan *time-to-market* suatu terapi. Meza‐Galvan, Strongrich, dan Darwish (2026) dalam bab monograf mereka yang berjudul *Wireless Sensor Networks for Lyophilization* (DOI: 10.1002/9783527850303.ch4) menekankan bahwa kompleksitas fisika-fisika-kimia di dalam bilik vakum—yang melibatkan transfer panas konduktif melalui lapisan es beku, transfer massa melalui sublimasi, dan dinamika desorpsi air terikat—menuntut strategi pemantauan *real-time*, *in-situ*, dan beresolusi spasial tinggi. 

Dalam operasional konvensional, mayoritas lini produksi liofilisasi masih mengandalkan **probe thermocouple kabel tembaga–konstantan (T-type)** yang ditempatkan secara terbatas (biasanya hanya 1–4 vial per siklus) karena kendala *feedthrough* pada dinding ruang vakum, risiko kontaminasi partikulat dari kebocoran, serta biaya tinggi setiap kali konfigurasi *batch* berubah. Meza‐Galvan dkk. (2026, ch.4) mengidentifikasi bahwa pendekatan *wired sensing* ini menciptakan **blind spot monitoring** yang signifikan: variasi suhu produk antar-vial di rak (*shelf*) yang mencapai ±2–4 °C tidak dapat terdeteksi, padahal variasi tersebut terbukti berkorelasi langsung dengan heterogenitas kadar air residu akhir (*residual moisture*) yang menentukan stabilitas jangka panjang produk. 

Urgensi ekonominya juga substansial: satu siklus liofilisasi skala industri untuk *batch* komersial (10.000–20.000 vial) membutuhkan biaya operasional USD 8.000–25.000 (energi listrik, refrigerasi, *consumables*), sementara satu kegagalan *batch* akibat *out-of-specification* (OOS) produk dapat menimbulkan kerugian hingga USD 500.000–2.000.000 setelah diperhitungkan biaya bahan aktif, kerugian reputasi regulatoris, dan penundaan peluncuran. Oleh karena itu, inisiatif FDA *Process Analytical Technology* (PAT) sejak 2004 dan kerangka *Quality by Design* (QbD) ICH Q8(R2) mendorong penerapan **Continuous Process Verification** yang secara inheren memerlukan jaringan sensor dengan *granularitas* tinggi. Artusio, Barresi, dan Pisano (2026) dalam bab pelengkap (*Emerging Technologies in Pharmaceutical Freeze-Drying*, DOI: 10.1002/9783527850303.ch11) turut mengonfirmasi bahwa integrasi sensor nirkabel dengan sistem kontrol lanjutan (*Model Predictive Control*, *digital twin*) merupakan pilar transformasi Industri 4.0 di sektor *fill-finish* farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kuantitatif proses liofilisasi memerlukan penyelesaian simultan dari persamaan transfer panas dan massa. Meza‐Galvan dkk. (2026, ch.4) menggunakan formulasi klasik berbasis **Pikal's heat transfer model** yang memisahkan laju sublimasi menjadi komponen resistansi termal dan resistansi massa.

### 2.1 Laju Sublimasi dan Resistansi Produk

Laju sublimasi massa air pada antarmuka sublimasi (*sublimation interface*) diberikan oleh:

$$\frac{dm}{dt} = \frac{P_{ice}(T_p) - P_c}{R_p} = A_v \cdot \frac{K_v}{R_s}\left(T_s - T_p\right)$$

di mana $m$ adalah massa (kg), $t$ adalah waktu (s), $P_{ice}(T_p)$ adalah tekanan uap air jenuh pada suhu produk $T_p$ (Pa), $P_c$ adalah tekanan bilik (*chamber pressure*, Pa), $R_p$ adalah resistansi transfer massa lapisan kering ($\text{Pa}\cdot\text{m}^2\cdot\text{s/kg}$), $A_v$ adalah luas penampang vial ($\text{m}^2$), $K_v$ adalah koefisien transfer panas vial ($\text{W/m}^2\cdot\text{K}$), $R_s$ adalah resistansi termal lapisan kering ($\text{m}^2\cdot\text{K/W}$), dan $T_s$ adalah suhu rak (*shelf*).

### 2.2 Koefisien Transfer Panas Vial (Kv)

Persamaan empiris Pikal untuk $K_v$ yang banyak digunakan dalam desain ruang:

$$K_v = \frac{K_c}{1 + \frac{K_c}{K_s}\left(\frac{P_c}{P_{ice}(T_p) - P_c}\right)}$$

dengan $K_c$ adalah konduktansi efektif gas pada tekanan $P_c$ ($\text{W/m}^2\cdot\text{K}$) dan $K_s$ adalah koefisien konduksi *solid-to-solid* kontak vial–rak. Meza‐Galvan dkk. (2026, ch.4) menunjukkan bahwa karakterisasi akurat parameter $K_v$ melalui eksperimen *gravimetric* adalah prasyarat sebelum jaringan sensor nirkabel dapat memberikan data yang dapat ditindaklanjuti untuk *feedforward control*.

### 2.3 Kinetika Desorpsi Air (Secondary Drying)

Untuk *secondary drying*, desorpsi air terikat遵循模型 Arrhenius:

$$\frac{dC_w}{dt} = -k_0 \cdot C_w^n \cdot \exp\left(-\frac{E_a}{RT_p}\right)$$

di mana $C_w$ adalah konsentrasi air residual (kg/kg berat kering), $k_0$ adalah faktor pra-eksponensial, $E_a$ adalah energi aktivasi (kJ/mol), $R$ adalah konstanta gas universal (8,314 J/mol·K), dan $n$ adalah orde reaksi (umumnya $n \approx 1$). 

### 2.4 Karakteristik Wireless Link dalam Lingkungan Vakum

Sensor nirkabel di dalam bilik liofilisasi menghadapi tantangan propagasi RF karena dinding baja stainless dan gas bertekanan rendah. Atenuasi jalur (*path loss*) mengikuti model Friis yang dimodifikasi:

$$L_{path} = 20\log_{10}\left(\frac{4\pi d}{\lambda}\right) + \alpha_{vac} \cdot d + L_{metal}$$

di mana $\lambda$ adalah panjang gelombang ($\approx$ 0,125 m untuk frekuensi 2,4 GHz pada protokol IEEE 802.15.4), $\alpha_{vac}$ adalah koefisien atenuasi spesifik vakum (umumnya $< 0,01$ dB/m untuk 2,4 GHz), dan $L_{metal}$ adalah redaman oleh refleksi/difraksi pada struktur logam ($\approx$ 15–30 dB). Meza‐Galvan dkk. (2026, ch.4) menekankan pentingnya *diversity antenna* dan *mesh topology* untuk mengatasi kondisi RF yang keras tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan jaringan sensor nirkabel (WSN) di lini produksi farmasi mengikuti kerangka Validasi sesuai **FDA PAT Guidance (2004)** dan **GAMP 5 V-model**. SOP yang diuraikan oleh Meza‐Galvan dkk. (2026, ch.4) mencakup tujuh tahap implementasi:

**Tahap 1 — Pemetaan Proses dan Risk Assessment (FMEA).** Setiap variabel proses (suhu rak, tekanan bilik, laju sublimasi, kadar air akhir) di-*rank* berdasarkan *Severity*, *Occurrence*, dan *Detectability*. Variabel dengan *RPN* (Risk Priority Number) > 100 menjadi titik kritis yang wajib dipantau sensor nirkabel.

**Tahap 2 — Seleksi Platform Sensor.** Sensor nirkabel harus memenuhi spesifikasi:
- Rentang operasional suhu: $-50$ °C hingga $+60$ °C (sesuai siklus liofilisasi).
- Akurasi: $\pm 0,3$ °C untuk termokopel nirkabel tertanam, $\pm 0,1$ °C untuk RTD.
- Kemampuan vakum: $< 10^{-3}$ mbar dengan *outgassing* total < $10^{-8}$ Torr·L/s.
- Ketahanan baterai: minimum 72 jam siklus kontinu pada $-40$ °C, atau implementasi *energy harvesting* termoelektrik.

**Tahap 3 — Penempatan Sensor (*Spatial Sampling Strategy*).** Pola penempatan mengikuti metode **Latin Hypercube Sampling (LHS)** atau **Edge-Center Sampling** untuk memastikan cakupan variasi termal di rak. Untuk rak berisi 20.000 vial, standar industri yang dirujuk Meza‐Galvan dkk. (2026, ch.4) merekomendasikan minimal 12–16 vial *instrumented* yang terdistribusi secara stratific menurut kuadran.

**Tahap 4 — Arsitektur Komunikasi.** Topologi *mesh* dengan protokol **IEEE 802.15.4 (ZigBee)** atau **Bluetooth Low Energy (BLE 5.0)** untuk komunikasi intra-vial, dan **Wi-Fi/LoRaWAN** sebagai *gateway* ke luar bilik. Sensor dirancang dengan *sleep current* < 1 µA untuk memperpanjang usia baterai.

**Tahap 5 — Akuisisi Data dan Integrasi Historian.** Data sensor dikirim ke *Process Historian* (misalnya OSIsoft PI, Siemens SIPAT) dengan laju sampling 0,1–1 Hz. Disini diterapkan **4-eyes principle** untuk menjamin integritas data sesuai 21 CFR Part 11.

**Tahap 6 — Analitik dan Kontrol Lanjutan.** Algoritma *moving horizon estimation* (MHE) dan *model predictive control* (MPC) menggunakan data sensor nirkabel sebagai *input state estimator*. Meza‐Galvan dkk. (2026, ch.4) menunjukkan bahwa implementasi MPC dengan WSN menghasilkan pengurangan waktu siklus 18–27% melalui optimalisasi gradien suhu rak secara adaptif.

**Tahap 7 — Validasi dan Continuous Verification.** Setiap perubahan konfigurasi sensor, firmware, atau algoritma kontrol memerlukan **IQ/OQ/PQ** (Installation/Operational/Performance Qualification) sesuai GAMP 5 dan didokumentasikan dalam *Validation Master Plan*.

Diagram alur integrasi lengkap: **Vial Sensor → Wireless Node → Mesh Router → Vacuum Feedthrough (specialized RF) → Gateway → Historian → MPC Controller → Shelf Temperature Setpoint**, membentuk *closed-loop cyber-physical system* yang menjadi fondasi *Pharma 4.0*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Formulasi protein monoklonal (mAb) dalam vial 6R (6 mL), fill volume 3 mL, konsentrasi 50 mg/mL, di dalam liofilizer skala produksi (rak 1,2 m × 0,6 m, berisi 12.500 vial). Tekanan bilik $P_c = 10$ Pa, suhu rak target $T_s = -10$ °C pada fase *primary drying*.

### Langkah 1: Perhitungan Tekanan Uap Jenuh Es

Menggunakan persamaan Goff-Gratch atau korelasi sederhana:

$$P_{ice}(T_p) \approx \exp\left(28,901 - \frac{6140,4}{273,15 + T_p}\right) \text{ [Pa]}$$

Untuk