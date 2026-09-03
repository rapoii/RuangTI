# 1820 — Wireless Sensor Networks untuk Lyophilization Farmasetikal: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Proses Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Lyophilization atau freeze-drying merupakan unit operasi kritikal dalam industri biofarmasetikal yang berfungsi menstabilkan produk termolabil seperti antibodi monoklonal, vaksin mRNA, dan protein terapeutik dengan menghilangkan air melalui sublimasi di bawah tekanan vakum. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), siklus lyophilization tipikal berlangsung 24–96 jam dengan nilai produk antara USD 50.000–500.000 per batch, sehingga setiap deviasi proses yang tidak terdeteksi secara real-time dapat menimbulkan kerugian ekonomi dan risiko regulasi yang substansial. Inisiatif Process Analytical Technology (PAT) yang diluncurkan FDA sejak 2004 telah mendorong paradigma baru dari *quality by testing* menjadi *quality by design*, di mana atribut kritis proses (Critical Process Parameters/CPP) seperti suhu rak (shelf temperature), tekanan ruang (chamber pressure), dan suhu produk harus dipantau secara *in-line*, *at-line*, atau *on-line*.

Wireless Sensor Networks (WSN) muncul sebagai solusi arsitektural yang menjawab keterbatasan sistem instrumentasi kabel konvensional. Sensor thermocouple berbasis kabel membatasi jumlah titik pengukuran karena setiap kabel menembus dinding ruang vakum melalui port hermetik yang mahal (mencapai USD 500–2.000 per port). Akibatnya, operator hanya dapat memantau 1–16 vial representatif dari total 10.000–100.000 vial dalam satu batch. Meza-Galvan *et al.* (2026) menunjukkan bahwa implementasi WSN berbasis topologi mesh dapat menambah titik pengukuran secara signifikan tanpa menambah jumlah port, sehingga menghasilkan *spatial resolution* yang sebelumnya tidak ekonomis. Artikel pelengkap dari Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) memperkuat posisi WSN sebagai salah satu teknologi *emerging* utama selain soft-sensor, *tunable diode laser absorption spectroscopy* (TDLAS), dan *near-infrared* (NIR) imaging. Secara strategis, adopsi WSN terkait erat dengan transformasi *Industry 4.0* di mana data proses menjadi aset digital yang dapat diintegrasikan dengan *Manufacturing Execution System* (MES) dan *digital twin* untuk optimasi *cycle development* dan *scale-up*.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan kuantitatif WSN untuk lyophilization memerlukan integrasi tiga domain fisika: termodinamika sublimasi, perpindahan panas transien, dan propagasi gelombang elektromagnetik dalam lingkungan vakum.

**2.1 Model Sublimasi dan Perpindahan Panas.** Laju sublimasi front es dapat dinyatakan dengan persamaan阻力-tahanan Sherwood-like:

$$\frac{dm}{dt} = \frac{A_p \left[P_w(T_i) - P_c\right]}{R_p}$$

di mana $dm/dt$ adalah laju sublimasi (kg/s), $A_p$ luas penampang vial (m²), $P_w(T_i)$ tekanan uap air pada suhu interface $T_i$ (Pa), $P_c$ tekanan ruang (Pa), dan $R_p$ tahanan terhadap aliran uap melalui lapisan kering (Pa·m²·s/kg). Untuk vial side-by-side dengan luas sublimasi konstan, total tahanan termal antara shelf dan produk mengikuti:

$$R_{total} = \frac{1}{K_c} + \frac{1}{K_s} + \frac{1}{K_r}$$

di mana $K_c$, $K_s$, dan $K_r$ masing-masing merepresentasikan konduktansi konduksi melalui gas, melalui glass vial, dan radiasi (W/m²·K). Fluks panas yang sampai ke sublimation front:

$$q = \frac{T_s - T_b}{R_{total}}$$

dengan $T_s$ suhu shelf dan $T_b$ suhu dasar vial.

**2.2 Model Propagasi Sinyal Nirkabel dalam Lingkungan Vakum.** Redaman sinyal dalam ruang lyophilizer yang terbuat dari stainless steel mengikuti *modified log-distance path loss model*:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ redaman pada jarak referensi $d_0 = 1$ m, $n$ adalah *path loss exponent* (umumnya 2.0–3.5 dalam ruang berlogam), dan $X_\sigma$ adalah variabel acak Gaussian dengan standar deviasi $\sigma$ yang merepresentasikan efek *fading* akibat refleksi multipath pada dinding logam. Skema modulasi yang digunakan pada umumnya adalah IEEE 802.15.4 (Zigbee) atau BLE 5.0 dengan *bit error rate* (BER) yang harus dijaga $<10^{-5}$ untuk transmisi data suhu dengan akurasi $\pm 0.1$ °C.

**2.3 Konsumsi Energi Node Sensor.** Umur baterai node sensor $T_b$ mengikuti:

$$T_b = \frac{E_{bat}}{P_{avg}} = \frac{V \cdot C}{I_{sleep} \cdot t_{sleep} + I_{tx} \cdot t_{tx} + I_{rx} \cdot t_{rx}}$$

di mana $V$ tegangan baterai, $C$ kapasitas (Ah), dan $I$ masing-masing arus pada mode *sleep*, *transmit*, dan *receive*. Pada siklus lyophilization 48 jam, node dengan kapasitas 600 mAh dan *duty cycle* 5% dapat beroperasi hingga 7 hari sesuai kebutuhan batch.

**2.4 Spatial Sampling Theorem.** Jumlah minimum node $N$ untuk menangkap gradien radial dan aksial dalam satu shelf mengikuti kriteria Nyquist diskretisasi:

$$N \geq \left(\frac{L_{shelf}}{2 \Delta x}\right)^2$$

dengan $L_{shelf}$ dimensi shelf dan $\Delta x$ resolusi spasial yang diinginkan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam lyophilizer mengikuti arsitektur berlapis yang dapat diuraikan dalam tujuh tahap rekayasa sistematis.

**Tahap 1 — Kualifikasi Sensor.** Sensor suhu nirkabel (umumnya berbasis RTD Pt100 atau termistor NTC dengan akurasi $\pm 0.1$ °C) dan sensor tekanan miniatur (Pirani atau kapasitif MEMS) harus memenuhi protokol *IQ/OQ/PQ* (Installation/Operational/Performance Qualification) sesuai FDA 21 CFR Part 11 dan *Good Automation Manufacturing Practice* (GAMP 5). Kalibrasi tiga titik (–40 °C, 25 °C, 75 °C) wajib dilakukan dengan *traceable reference* ke NIST.

**Tahap 2 — Penempatan Node.** Meza-Galvan *et al.* (2026) merekomendasikan pola *hexagonal packing* untuk meminimalkan celah cakupan, dengan ketinggian node 5–10 mm di atas dasar vial untuk menangkap suhu produk pada posisi *bottom-corner* yang merupakan *hot spot*.

**Tahap 3 — Desain Topologi Jaringan.** Topologi *mesh* dengan *self-healing routing* (RIP atau RPL) lebih dipilih daripada topologi *star* karena redundansi jalur transmisi. Gateway dipasang di luar ruang vakum melalui dinding *viewport* kuarsa dengan feedthrough nirkabel (RF transparent).

**Tahap 4 — Pengujian EMI/RFI dalam Vakum.** Pengujian *Electromagnetic Compatibility* (EMC) wajib dilakukan pada tekanan $P_c < 0.1$ mbar karena *outgassing* material dapat menurunkan *signal-to-noise ratio* (SNR). Nilai SNR minimum:

$$SNR_{min} = 10 \log_{10}\left(\frac{P_{signal}}{P_{noise} + P_{interference}}\right) \geq 18 \text{ dB}$$

**Tahap 5 — Validasi Sterilisasi.** Sensor yang masuk ke dalam ruang vial harus mampu bertahan pada sterilisasi *vaporized hydrogen peroxide* (VHP) atau *autoclave* pada 121 °C tanpa degradasi karakteristik.

**Tahap 6 — Integrasi Data Historian.** Data dari WSN dikirim ke server OPC-UA (*Unified Architecture*) untuk diintegrasikan dengan *Process Analytical Technology* (PAT) knowledge management system sesuai kerangka ISPE PQLI.

**Tahap 7 — Continuous Monitoring & Model Predictive Control (MPC).** Data real-time dimasukkan ke model *first-principles* (1D heat-mass transfer) untuk memprediksi *endpoint* primary drying (dimana $T_i = T_b$, menandai transisi ke secondary drying).

Diagram alir integrasi: **Sensor Node → Mesh Network → Gateway → OPC-UA Server → PAT Data Lake → MPC Controller → Set-Point Adjustment**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah lyophilizer industri tipe LyoStar III dengan kapasitas 100 vial 10R (volume isi 3 mL) beroperasi pada tekanan ruang $P_c = 100$ mTorr (13.3 Pa) dan suhu shelf $T_s = -25$ °C. Tim R&D