# 1474 — Pembangunan Sistem Pemeliharaan Prediktif Cerdas Berbasis Digital Twin untuk Mesin AC Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Building a Digital Twin Powered Intelligent Predictive Maintenance System for Industrial AC Machines
**Jurnal & Sitasi Utama:** R. Raja Singh, Ghanishtha Bhatti, Dattatraya Kalel (2023). *Machines*. DOI: [https://doi.org/10.3390/machines11080796](https://doi.org/10.3390/machines11080796)
**Sitasi Pendukung:** Lei Wang, Yina Jiang, Jialong Zhu (2026). *Virtual and Physical Prototyping*. DOI: [https://doi.org/10.1080/17452759.2026.2639147](https://doi.org/10.1080/17452759.2026.2639147)

---

## 1. Pendahuluan dan Konteks Industri

Motor induksi sangkar tupai (*squirrel cage induction motor*) merupakan tulang punggung industri manufaktur modern. Lebih dari 60% konsumsi listrik industri global diserap oleh motor listrik arus bolak-balik (AC), dengan pangsa motor induksi tiga fasa mencapai hampir 90% dari total populasi motor listrik industri (Singh dkk., 2023, DOI: 10.3390/machines11080796). Kegagalan tak terencana (*unplanned downtime*) pada motor kritis—misalnya pada kompresor, pompa sentrifugal, konveyor, atau blower—menyebabkan kerugian produksi yang menurut estimasi industri bernilai 10.000–50.000 USD per jam untuk fasilitas proses kontinu seperti kilang, petrokimia, dan baja. Dalam konteks Industri 4.0, strategi pemeliharaan berevolusi dari *corrective* (reakif) menuju *predictive* (prediktif), di mana keputusan pemeliharaan didasarkan pada proyeksi kondisi masa depan komponen, bukan interval waktu tetap (*preventive*) atau kerusakan aktual (*run-to-failure*).

Singh, Bhatti, dan Kalel (2023, DOI: 10.3390/machines11080796) menegaskan bahwa *digital twin* (DT) adalah teknologi heuristik yang memungkinkan pemeliharaan prediktif melalui pembentukan sistem kembangan antara mesin fisik dan dunia virtual. Berbeda dengan model simulasi konvensional yang statis, DT menyediakan tautan dua arah (*closed-loop*) antara data sensor aktual dan model multi-fisika-motor, sehingga status rotor, stator, dan bearing dapat diproyeksikan secara *real-time*. Urgensi ini makin relevan ketika kegagalan motor tidak lagi bersifat mekanik murni, melainkan gabungan antara degradasi termal, listrik, dan getaran yang saling berkorelasi (*cross-domain fault propagation*). Wang, Jiang, dan Zhu (2026, DOI: 10.1080/17452759.2026.2639147) memperluas relevansi DT ke lingkungan ekstrim seperti manufaktur luar angkasa, di mana empat pilar teknis—*high-fidelity multi-physics modelling*, *near-real-time simulation*, *multi-source sensing and sparse data fusion*, serta *autonomous collaborative decision-making*—menjadi cetak biru yang sama untuk DT motor industri di bumi. Pengalihan teknologi dari ruang angkasa ke lantai pabrik (*technology transfer*) menunjukkan bahwa arsitektur DT untuk motor AC bukan sekadar tren, melainkan kebutuhan operasional yang terverifikasi lintas-domain.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Rangkaian Ekuivalen Motor Induksi

Model fisika motor induksi sangkar tupai per fase berdasarkan referensi rotor yang dilewatkan ke stator mengikuti formulasi Singh dkk. (2023, DOI: 10.3390/machines11080796):

$$Z_{eq} = R_s + jX_s + \left(jX_m \,\|\, \frac{R_r'}{s} + jX_r'\right)$$

dengan:
- $R_s, X_s$ = resistansi dan reaktansi bocor stator (Ω),
- $R_r', X_r'$ = resistansi dan reaktansi rotor yang direferensikan ke stator (Ω),
- $X_m$ = reaktansi magnetisasi (Ω),
- $s$ = slip.

**Slip** didefinisikan sebagai:

$$s = \frac{n_s - n_r}{n_s}, \qquad n_s = \frac{120 f}{p}$$

dengan $f$ = frekuensi jala-jala (Hz), $p$ = jumlah kutub, $n_s$ = kecepatan sinkron (rpm), dan $n_r$ = kecepatan rotor aktual (rpm).

### 2.2 Persamaan Torka Elektromagnetik

Torka yang dikembangkan pada poros mengikuti persamaan Thevenin ekuivalen:

$$T_{em} = \frac{3}{\omega_s} \cdot \frac{V_{th}^2 \cdot (R_r'/s)}{\left(R_{th} + R_r'/s\right)^2 + \left(X_{th} + X_r'\right)^2}$$

dengan $\omega_s = 2\pi n_s/60$ (rad/s), $V_{th}$ = tegangan Thevenin, dan $R_{th} + jX_{th}$ = impedansi Thevenin yang memandang sisi magnetisasi.

### 2.3 Model Termal Multi-Fisika

Singh dkk. (2023) menggunakan pemodelan termal nodal yang direpresentasikan sebagai jaringan resistansi-kapasitansi (RC lumped-parameter). Kenaikan suhu pada tiap node $i$ mengikuti:

$$m_i c_i \frac{dT_i}{dt} = \sum_{j} \frac{T_j - T_i}{R_{ij}} + P_i^{loss}$$

dengan $m_i$ = massa node, $c_i$ = panas jenis, $R_{ij}$ = resistansi termal antar-node, dan $P_i^{loss}$ = rugi-rugi (listrik, gesekan, stray-load loss).

### 2.4 Indeks Kesehatan dan *Remaining Useful Life* (RUL)

*Health Index* (HI) didefinisikan sebagai fungsi monoton-turun dari degradasi kumulatif:

$$HI(t) = 1 - \frac{D(t)}{D_{crit}}, \qquad D(t) = \int_0^t \dot{D}(\tau)\, d\tau$$

dengan $D(t)$ = akumulasi kerusakan (misal: panjang retakan, aus bearing, atau degradasi isolasi), dan $D_{crit}$ = ambang batas kegagalan.

Probabilitas kelangsungan hidup mengikuti distribusi Weibull:

$$R(t) = \exp\left[-\left(\frac{t-\gamma}{\eta}\right)^\beta\right]$$

dengan $\beta$ = parameter bentuk, $\eta$ = parameter skala, $\gamma$ = lokasi. *Mean Time To Failure* (MTTF) diekspektasikan sebagai:

$$\text{MTTF} = \gamma + \eta \,\Gamma\!\left(1 + \tfrac{1}{\beta}\right)$$

### 2.5 Fusi Data Bayesian untuk Estimasi Fault

Untuk menangani fusi sensor dengan sparsitas tinggi (sebagaimana Wang dkk., 2026 soroti untuk manufaktur luar angkasa), digunakan pembaruan Bayesian:

$$P(F_k \mid \mathbf{z}_{1:t}) \propto P(\mathbf{z}_t \mid F_k)\, P(F_k \mid \mathbf{z}_{1:t-1})$$

dengan $F_k$ = kejadian kegagalan modus-$k$, dan $\mathbf{z}_t$ = vektor pengukuran sensor pada waktu $t$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur DT yang diusulkan Singh dkk. (2023, DOI: 10.3390/machines11080796) mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Akuisisi Data Sensor (Lapisan Fisik).** Sensor getaran (akselerometer triaksial, laju sampel ≥ 10 kHz untuk menangkap frekuensi slot harmonik), sensor arus dan tegangan (CT/PT dengan *sampling rate* ≥ 5 kHz), termokopel tipe-K pada belitan stator dan rumah bearing, serta sensor kecepatan (encoder atau tachometer) dipasang sesuai standar ISO 10816 untuk getaran mekanik dan IEC 60034 untuk mesin berputar.

**Tahap 2 — Pembuatan Model Multi-Fisika.** Model *finite element* (FEM) motor dibangun menggunakan parameter desain (material laminasi, geometri slot, jenis rotor sangkar), lalu dikalibrasi terhadap data operasional. Model termal, elektromagnetik, dan mekanik digabung dalam *co-simulation* untuk menghasilkan model virtual ber-fidelity tinggi.

**Tahap 3 — Lapisan Data-Driven.** Algoritma *machine learning* seperti *Random Forest*, *Gradient Boosting*, atau *Long Short-Term Memory* (LSTM) dilatih menggunakan fitur statistik sinyal (RMS, kurtosis, crest factor) dan *spectrogram* dari FFT untuk mendiagnosis modus kegagalan: *broken rotor bar*, *bearing defect*, *stator winding short*, dan *air-gap eccentricity*.

**Tahap 4 — Lapisan Integrasi dan Sinkronisasi.** Platform DT menerima data sensor via protokol OPC UA / MQTT, melakukan pembaruan parameter model secara periodik, dan menampilkan dasbor kondisi melalui *human-machine interface* (HMI).

**Tahap 5 — Penjadwalan Pemeliharaan.** Hasil estimasi RUL dan HI diteruskan ke *Computerized Maintenance Management System* (CMMS) untuk penjadwalan pekerjaan berdasarkan ambang batas ekonomi (misal: biaya downtime > biaya perbaikan preventif).

**Tahap 6 — Loop Tertutup (*Closed-Loop Control*).** Jika anomali terdeteksi, sistem secara otomatis mengaktifkan mode operasi terdegradasi (*derated operation*) atau memicu perintah *shutdown* aman sebelum kerusakan terjadi.

Diagram alir logika keputusan mengikuti:

```
Sensor → Pra-pemrosesan → Ekstraksi Fitur → Diagnosis (ML)
                                                ↓
                              Model Multi-Fisika ←→ Parameter Update
                                                ↓
                                          Estimasi RUL
                                                ↓
                              HI < Threshold? → Ya → Trigger CMMS
                                                ↓
                                              Tidak → Lanjut Operasi
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Motor induksi sangkar tupai 3 fasa, $P_{rated}=50$ HP (37,3 kW), $V=400$ V, $f=50$ Hz, $p=4$ kutub, $n_s=$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
