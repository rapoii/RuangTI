# 1438 — Analitik Pemeliharaan Prediktif dan Implementasinya untuk Pesawat Udara: Tantangan, Peluang, dan Aplikasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Predictive maintenance analytics and implementation for aircraft: Challenges and opportunities
**Jurnal & Sitasi Utama:** Izaak Stanton, Kamran Munir, Ahsan Ikram (2022). *Systems Engineering*. DOI: [https://doi.org/10.1002/sys.21651](https://doi.org/10.1002/sys.21651)
**Sitasi Pendukung:** Abdulhamid Hamdan Al-Hinai, Karu Clement Varaprasad, Vinod Kumar (2024). *Mechanical Engineering for Society and Industry*. DOI: [https://doi.org/10.31603/mesi.12466](https://doi.org/10.31603/mesi.12466)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tekanan operasional dan ekonomi yang semakin kompleks di era Industri 4.0. Pertumbuhan eksponensial data sensor yang tertanam (embedded sensors) pada peralatan industri telah mengubah paradigma pemeliharaan pesawat dari pendekatan reaktif dan terjadwal (preventive) menjadi pendekatan berbasis kondisi (condition-based) dan prediktif (predictive). Stanton, Munir, dan Ikram (2022) dalam *tinjauan literatur sistematis* yang dipublikasikan di jurnal *Systems Engineering* (DOI: [10.1002/sys.21651](https://doi.org/10.1002/sys.21651)) menyoroti bahwa *predictive maintenance* (PdM) telah menjadi instrumen esensial untuk mengoptimalkan jadwal perawatan, meminimalkan *downtime* pesawat, dan mengidentifikasi anomali kerusakan yang tidak terduga.

Secara ekonomis, biaya *Aircraft on Ground* (AOG) dapat mencapai USD 10.000–150.000 per jam tergantung tipe pesawat (Stanton *et al.*, 2022), sehingga setiap peningkatan akurasi prediksi kerusakan berdampak langsung pada profitabilitas operator. Lebih jauh, *International Air Transport Association* (IATA) melaporkan bahwa biaya pemeliharaan menyumbang 10–15% dari total biaya operasional maskapai, menjadikan efisiensi pemeliharaan sebagai *strategic lever* yang sangat determinan. Stanton *et al.* (2022) menekankan bahwa mayoritas riset akademis saat ini masih bias pada mesin turbofan karena keterbatasan akses terhadap *dataset* publik komponen lain seperti *landing gear*, *avionik*, dan sistem hidrolik — sebuah *gap* riset yang harus dijawab oleh komunitas teknik industri.

Konteks pelengkap datang dari penelitian Al-Hinai, Varaprasad, dan Kumar (2024) di jurnal *Mechanical Engineering for Society and Industry* (DOI: [10.31603/mesi.12466](https://doi.org/10.31603/mesi.12466)) yang melakukan tinjauan komprehensif terhadap analisis getaran (*vibration-based analysis*) untuk *condition monitoring* turbin angin. Meskipun berbeda sektor, kedua paper tersebut bertemu pada satu titik penting: data getaran multi-sumbu yang dikombinasikan dengan algoritma pembelajaran mesin (*machine learning*) menjadi tulang punggung deteksi dini kerusakan mekanis, degradasi, dan pemodelan *Remaining Useful Life* (RUL). Al-Hinai *et al.* (2024) menekankan bahwa analisis vibrasi efektif untuk identifikasi *unbalance*, *misalignment*, *bearing fault*, dan *gear wear* — semua kondisi yang juga relevan pada komponen rotasi pesawat.

Urgensi implementasi PdM di industri penerbangan juga didorong oleh regulator. Framework *MSG-3* (Maintenance Steering Group - 3rd edition) dari ATA sudah secara eksplisit mengadopsi filosofi *on-condition maintenance* berbasis data *health monitoring*. Integrasi antara PdM dan regulasi ini menciptakan peluang riset sistem rekayasa yang sangat luas: mulai dari arsitektur data, akuisisi sinyal, *feature engineering*, hingga *decision support system* bagi teknisi lini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Reliabilitas Weibull

Distribusi Weibull merupakan landasan probabilistik yang lazim digunakan untuk memodelkan *time-to-failure* komponen pesawat. Fungsi reliabilitasnya dinyatakan sebagai:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad t \geq 0$$

dengan $t$ adalah waktu operasi (jam terbang atau siklus), $\beta > 0$ adalah *shape parameter* (parameter bentuk), dan $\eta > 0$ adalah *scale parameter* (parameter skala, dalam satuan waktu). Nilai $\beta < 1$ menunjukkan *infant mortality* (kerusakan awal), $\beta = 1$ menandakan laju kerusakan konstan (distribusi eksponensial), dan $\beta > 1$ menunjukkan *wear-out phase* yang relevan untuk komponen fatiguerelated seperti bilah turbin dan roda pendarat.

Laju kerusakan (*hazard rate*) diturunkan dari fungsi reliabilitas:

$$\lambda(t) = \frac{f(t)}{R(t)} = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta - 1}$$

dengan $f(t) = \frac{d}{dt}[1 - R(t)]$ adalah *probability density function* waktu kegagalan. Stanton *et al.* (2022) menekankan bahwa parameter Weibull untuk komponen pesawat terbang umumnya memiliki $\beta \in [1.5, 3.5]$ karena dominansi mekanisme *fatigue*, *creep*, dan *thermal degradation*.

### 2.2 Remaining Useful Life (RUL)

*Remaining Useful Life* adalah estimasi waktu tersisa sebelum komponen mencapai ambang batas kerusakan kritis. Model stokastik berbasis *Proportional Hazards Model* (PHM) — diperkenalkan oleh Cox (1972) dan diadaptasi ke rekayasa oleh pesquisadores seperti Banjevic (2004) — memformulasikan:

$$h(t \mid \mathbf{x}) = h_0(t) \cdot \exp(\boldsymbol{\beta}^T \mathbf{x})$$

di mana $h_0(t)$ adalah *baseline hazard*, $\mathbf{x}$ adalah vektor *covariate* (misalnya suhu, getaran, siklus beban), dan $\boldsymbol{\beta}$ adalah koefisien regresi yang diestimasi dari data historis. RUL kemudian didefinisikan sebagai:

$$\text{RUL}(t) = \int_t^{\infty} R(u \mid \mathbf{x}) \, du$$

Untuk implementasi praktis, digunakan diskretisasi dengan selang waktu $\Delta t$ sehingga:

$$\widehat{\text{RUL}}(t) = \sum_{k=0}^{T_{\max}} R(t + k\Delta t \mid \mathbf{x}_t) \cdot \Delta t$$

### 2.3 Analisis Sinyal Vibrasi

Al-Hinai *et al.* (2024) menjelaskan bahwa sinyal akselerasi getaran $x(t)$ pada domain waktu diekstraksi menjadi fitur statistik yang representatif. Fitur-fitur utama adalah:

- **Root Mean Square (RMS):** Mengukur energi total sinyal.
$$x_{\text{RMS}} = \sqrt{\frac{1}{N}\sum_{i=1}^{N} x_i^2}$$

- **Crest Factor (CF):** Indikator *impulsiveness* untuk mendeteksi *bearing defect*.
$$\text{CF} = \frac{x_{\text{peak}}}{x_{\text{RMS}}}$$

- **Kurtosis (K):** Mengukur "ekor" distribusi; sensitif terhadap *spike* transien.
$$K = \frac{\frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^4}{\left[\frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^2\right]^2}$$

Nilai $K > 3$ (Gaussian) mengindikasikan onset kerusakan *bearing*. Pada domain frekuensi, *Fast Fourier Transform* (FFT) memetakan sinyal ke spektrum $X(f)$ di mana muncul *sidebands* karakteristik di sekitar frekuensi fundamental poros:

$$X(f) = \int_{-\infty}^{\infty} x(t) e^{-j2\pi f t} \, dt$$

Untuk kerusakan *bearing*, frekuensi *Ball Pass Frequency Outer race* (BPFO) menjadi penanda diagnostik utama:

$$f_{\text{BPFO}} = \frac{N}{2} f_r \left(1 - \frac{d}{D}\cos\alpha\right)$$

dengan $N$ jumlah elemen rolling, $f_r$ frekuensi rotasi, $d$ diameter elemen, $D$ diameter *pitch*, dan $\alpha$ sudut kontak.

### 2.4 Fungsi Nilai Informasi (Information Value)

Untuk mengukur kontribusi relatif setiap fitur sensor terhadap prediksi kegagalan, digunakan *mutual information*:

$$I(X; Y) = \sum_{y \in Y} \sum_{x \in X} p(x, y) \log\left(\frac{p(x,y)}{p(x)p(y)}\right)$$

Stanton *et al.* (2022) mencatat bahwa fitur dengan $I(X;Y) > 0.1$ bit umumnya lolos seleksi pada studi kasus mesin turbofan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PdM mengikuti kerangka *Cross Industry Standard Process for Data Mining* (CRISP-DM) yang diadaptasi untuk rekayasa sistem. Diagram alir di bawah merangkum langkah-langkah sistematis:

**Tahap 1 — Akuisisi & Fusi Data Sensor.** Data dikumpulkan dari *Avionics Full-Duplex Switched Ethernet* (AFDX) dan *Aircraft Condition Monitoring System* (ACMS) dengan laju sampling tipikal 100 Hz – 50 kHz tergantung subsistem. Sensor yang relevan mencakup: akselerometer piezoelektrik (getaran), *thermocouple* tipe K (suhu), *pressure transducer* (tekanan hidrolik & oli), dan *rotational speed sensor* (RPM turbin).

**Tahap 2 — Pra-pemrosesan Sinyal.** Normalisasi *z-score*, filtrasi *band-pass* (0.5 Hz – 10 kHz), *resampling* untuk menyelaraskan laju sampling, dan *outlier removal* menggunakan *winsorization* pada persentil 1%–99%.

**Tahap 3 — Ekstraksi Fitur.** Dari domain waktu dan frekuensi dihitung $x_{\text{RMS}}$, CF, $K$, *spectral centroid*, *spectral entropy*, dan *wavelet packet energy*. Al-Hinai *et al.* (2024) menyarankan minimal 12 fitur untuk diagnosis kerusakan turbin angin — panduan yang sama berlaku untuk komponen rotasi pesawat.

**Tahap 4 — Pemodelan Prediktif.** Algoritma yang lazim digunakan: Random Forest (RF), Gradient Boosting (XGBoost), Long Short-Term Memory (LSTM), dan 1D-Convolutional Neural Network (CNN). Metrik performa yang wajib dilaporkan: *precision*, *recall*, *F1-score*, dan *Mean Absolute Error* (MAE) untuk prediksi RUL.

**Tahap 5 — Penentuan Ambang Batas (*Threshold*) & Alarm.** Ambang batas dinamis ditentukan dari distribusi historis $\mu \pm k\sigma$ dengan $k = 3$ untuk peringatan dini dan $k = 5$ untuk *critical alarm*.

**Tahap 6 — Integrasi dengan MRO System.** Hasil prediksi di-*push* ke *Maintenance Repair and Overhaul* (MRO) *Enterprise Resource Planning* (ERP) seperti SAP PM atau RAMCO, sehingga teknisi menerima *work order* otomatis.

**Tahap 7 — Loop Umpan Balik & Retraining.** Model di-*retrain* setiap 90 hari dengan data baru mengikuti protokol *concept drift detection* berbasis ADWIN (Adaptive Windowing).

SOP ini selaras dengan standar SAE JA6268 (*Design and Run-Time Information Exchange and Utilization for In-Service Aircraft Health Monitoring Systems*) dan regulasi EASA Part-CAMO.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Prediksi RUL Bantalan Poros Turbin Pesawat Narrow-Body

**Parameter Input Industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Total flight cycles (N) | 12.000 | siklus |
| Laju sampling vibrasi | 25.600 | Hz |
| Weibull shape ($\beta$) | 2,3 | – |
| Weibull scale ($\eta$) | 18.000 | siklus |
| Threshold RMS kritis ($x_{c}$) | 4,5 | g |
| Biaya PdM per tahun ($C_{PdM}$) | 180.000 | USD |
| Biaya kegagalan tak terencana ($C_{f}$) | 1.250.000 | USD |
| Biaya preventive terjadwal ($C_{PM}$) | 420.000 | USD |
| Probabilitas deteksi PdM ($P_d$) | 0,92 | – |
| Probabilitas deteksi PM ($P_{PM}$) | 0,65 | – |

**Langkah 1 — Estimasi Probabilitas Kegagalan di $t = 12.000$ siklus:**

$$F(12.000) = 1 - e^{-\left(\frac{12.000}{18.000}\right)^{2,3}} = 1 - e^{-(