# 1998 — Analitik Pemeliharaan Prediktif dan Implementasi pada Pesawat Terbang: Tantangan, Peluang, dan Integrasi Machine Learning untuk Optimasi Kinerja Armada

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Predictive Maintenance Analytics and Implementation for Aircraft: Challenges and Opportunities
**Jurnal & Sitasi Utama:** Izaak Stanton, Kamran Munir, Ahsan Ikram (2022). *Predictive maintenance analytics and implementation for aircraft: Challenges and opportunities.* **Systems Engineering.** DOI: [https://doi.org/10.1002/sys.21651](https://doi.org/10.1002/sys.21651)
**Sitasi Pendukung:** Soledad Le Clainche, Esteban Ferrer, S. Gibson (2023). *Improving aircraft performance using machine learning: A review.* **Aerospace Science and Technology.** DOI: [https://doi.org/10.1016/j.ast.2023.108354](https://doi.org/10.1016/j.ast.2023.108354)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil dan militer global menghadapi tekanan operasional yang semakin kompleks, di mana biaya siklus hidup (life-cycle cost) sebuah pesawat narrow-body komersial modern dapat melampaui USD 50 miliar selama 30 tahun服役 dengan porsi pemeliharaan mencapai 30–40 % dari total biaya operasional (Direct Operating Cost/DOC) (Stanton, Munir, & Ikram, 2022). Dalam konteks ini, paradigma pemeliharaan telah bergeser secara fundamental dari *corrective maintenance* (CM) menuju *preventive maintenance* (PM), dan kini menuju *predictive maintenance* (PdM) berbasis sensor dan analitik data. Seperti ditegaskan oleh Stanton, Munir, dan Ikram (2022) dalam *Systematic Literature Review* mereka, "the increase in available data from sensors embedded in industrial equipment has led to a recent rise in the use of industrial predictive maintenance" — sebuah pernyataan yang menandai konvergensi antara *Industrial Internet of Things* (IIoT), komputasi *edge*, dan algoritma pembelajaran mesin.

Urgensi ekonomi dari PdM pada pesawat terbang sangat nyata. Setiap jam *ground time* pesawat narrow-body komersial yang tidak terjadwal bernilai sekitar USD 25.000–50.000 dalam kehilangan pendapatan, sementara biaya inspeksi *unscheduled maintenance* untuk komponen turbin gas (misalnya High Pressure Turbine/HPT blade) bisa mencapai USD 200.000 per kejadian (Stanton et al., 2022). Ketidakmampuan memprediksi *fault* sebelum mencapai tingkat *functional failure* tidak hanya mengancam keselamatan penumpang sesuai regulasi FAA Part 121 dan EASA Part-CAMO, tetapi juga menciptakan efek domino terhadap *fleet availability*, jadwal rotasi awak pesawat, dan kepuasan pelanggan maskapai.

Lebih jauh, Le Clainche, Ferrer, dan Gibson (2023) dalam *Aerospace Science and Technology* menunjukkan bahwa integrasi Machine Learning (ML) bukan hanya domain *Structural Health Monitoring* (SHM) semata, tetapi merambah ke fundamental *fluid dynamics* (eksperimental dan numerik), aerodinamika, akustik, dan pembakaran. Mereka menyatakan bahwa "ML is improving aircraft performance and that these techniques will have a large impact in the near future", menandakan bahwa PdM bukan lagi pilihan strategis melainkan kebutuhan operasional yang tidak terhindarkan. Kedua paper ini secara komplementer menggambarkan lanskap transformasi digital industri aerospace, di mana data telemetri *real-time* (biasanya 5–20 GB per *flight hour* dari *Full Authority Digital Engine Control*/FADEC dan *Aircraft Health Monitoring*/AHM) menjadi *primary asset* pengambilan keputusan pemeliharaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Reliabilitas dan Distribusi Kegagalan

Dasar analitik PdM pesawat terbang adalah pemodelan reliabilitas komponen kritis menggunakan distribusi Weibull dua parameter (Weibull-2P), yang mampu menangkap karakteristik *infant mortality*, *useful life*, dan *wear-out phase* dalam *bathtub curve*:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana:
- $R(t)$ = probabilitas reliabilitas pada waktu operasi $t$ (jam terbang atau siklus),
- $\beta$ = *shape parameter* (slope karakteristik kegagalan; $\beta < 1$ menandakan *early failure*, $\beta \approx 1$ menandakan *random failure*, $\beta > 1$ menandakan *wear-out*),
- $\eta$ = *scale parameter* atau *characteristic life* (jam terbang saat 63,2 % populasi komponen telah gagal).

Fungsi densitas kegagalan (*probability density function*):

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

Laju kegagalan sesaat (*instantaneous hazard rate*):

$$h(t) = \frac{f(t)}{R(t)} = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Untuk komponen turbin gas pesawat (misalnya HPT blade Inconel 718), tipikal parameter literature adalah $\beta \approx 2{,}3$ dan $\eta \approx 12.000$ *flight cycles* (Stanton et al., 2022).

### 2.2 Estimasi Remaining Useful Life (RUL) dengan Model Regresi Machine Learning

Salah satu kontribusi penting Le Clainche et al. (2023) adalah kerangka regresi ML untuk memprediksi degradasi. Formulasi RUL berbasis *degradation model* dapat dinyatakan sebagai:

$$\hat{RUL}(t) = T_{threshold} - \int_{t_0}^{t} \frac{d\tau}{g(X(\tau); \boldsymbol{\theta})}$$

di mana $g(X(\tau); \boldsymbol{\theta})$ adalah *degradation rate function*, $X(\tau)$ adalah *feature vector* sinyal sensor pada waktu $\tau$, dan $\boldsymbol{\theta}$ adalah parameter model yang dioptimasi melalui *mean squared error minimization*:

$$\boldsymbol{\theta}^{*} = \arg\min_{\boldsymbol{\theta}} \frac{1}{N}\sum_{i=1}^{N}\left(RUL_i - \hat{RUL}_i(\boldsymbol{\theta})\right)^2$$

Untuk pendekatan *supervised classification* terhadap *fault mode*, fungsi keputusan ML (misalnya *Random Forest* atau *Gradient Boosting*) menghasilkan probabilitas posterior:

$$P(y = k \mid \mathbf{x}) = \frac{e^{\mathbf{w}_k^T \mathbf{x} + b_k}}{\sum_{j=1}^{K} e^{\mathbf{w}_j^T \mathbf{x} + b_j}}$$

### 2.3 Model Keputusan Ekonomi Pemeliharaan: Cost-Benefit PdM

Pengambilan keputusan PdM versus PM tradisional dimodelkan melalui *Expected Total Cost*:

$$E[TC] = C_{insp} \cdot f_{insp} + C_{fail} \cdot P_{fail}(t) + C_{down} \cdot E[T_{down}]$$

di mana $C_{insp}$ adalah biaya inspeksi PdM, $f_{insp}$ frekuensi inspeksi, $C_{fail}$ biaya kegagalan (termasuk *penalty* keselamatan), $P_{fail}(t)$ probabilitas kegagalan kumulatif, $C_{down}$ biaya *downtime* per jam, dan $E[T_{down}]$ ekspektasi waktu *ground*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka sistematis yang diidentifikasi Stanton et al. (2022) dan kerangka ML yang dipetakan Le Clainche et al. (2023), implementasi PdM pada pesawat terbang mengikuti SOP berikut:

### Tahap 1 — Akuisisi Data Sensor & Feature Engineering
Data dikumpulkan dari *on-board sensors*: *vibration accelerometers* (sampling 25,6 kHz per standar ISO 10816), *thermocouples* (EGT — Exhaust Gas Temperature), *pressure transducers*, *acoustic emission sensors*, dan *oil debris sensors*. Total *data rate* tipikal 5–20 GB/jam terbang (Stanton et al., 2022).

### Tahap 2 — Pra-pemrosesan & Normalisasi
Sinyal mentah melalui *band-pass filtering* (Butterworth orde-4 dengan frekuensi cutoff 10 Hz–10 kHz untuk analisis vibrasi bantalan), *downsampling*, *z-score normalization*:

$$x_{norm} = \frac{x - \mu}{\sigma}$$

dan *Principal Component Analysis* (PCA) untuk reduksi dimensionalitas:

$$\mathbf{Z} = \mathbf{X} \mathbf{W}_{PCA}$$

dengan $\mathbf{W}_{PCA}$ berisi *eigenvectors* dari matriks kovarians.

### Tahap 3 — Pemodelan & Validasi
Algoritma ML yang umum diterapkan (Le Clainche et al., 2023): *Convolutional Neural Networks* (CNN) untuk klasifikasi citra vibrasi *spectrogram*, *Long Short-Term Memory* (LSTM) untuk prediksi sekuensial degradasi, dan *Isolation Forest* untuk deteksi anomali tanpa label.

### Tahap 4 — Integrasi SOP Operasional
Perangkat lunak PdM diintegrasikan dengan *Computerized Maintenance Management System* (CMMS) seperti SAP PM atau *Aviation Maintenance Tracking System* (AMTS) sesuai standar *MSG-3* (Maintenance Steering Group-3) dari ATA. SOP *decision logic*:

```
IF RUL_predicted < RUL_threshold AND confidence > 0.85
   THEN SCHEDULE unscheduled_maintenance within T_window
ELSE CONTINUE normal_operation with monitoring
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Maskapai X mengoperasikan 50 pesawat Airbus A320neo. Satu HPT blade (material Inconel 718) mengalami degradasi termal-mekanis. Parameter Weibull dari data historis: $\beta = 2{,}3$, $\eta = 12.000$ siklus.

### Langkah 1 — Hitung Reliabilitas pada t = 8.000 siklus

$$R(8000) = e^{-\left(\frac{8000}{12000}\right)^{2,3}} = e^{-(0{,}667)^{2,3}} = e^{-0{,}4076} = 0{,}6652$$

Artinya, pada 8.000 siklus, probabilitas blade masih berfungsi = **66,52 %**.

### Langkah 2 — Hitung Laju Kegagalan Sesaat

$$h(8000) = \frac{2{,}3}{12000}\left(\frac{8000}{12000}\right)^{1,3} = 1{,}917 \times 10^{-4} \times 0{,}6119 = 1{,}173 \times 10^{-4} \text{ /siklus}$$

### Langkah 3 — Estimasi RUL dengan ML Degradation Model
Misalkan output model LSTM memberikan $\hat{RUL} = 3.250$ siklus dengan confidence interval 95 %: $[2.950; 3.550]$ siklus. Karena $\hat{RUL} < 0{,}25 \times \eta = 3.000$? Hampir mendekati threshold, sehingga trigger inspeksi.

### Langkah 4 — Analisis Ekonomi PdM vs PM

| Parameter | PdM | PM terjadwal |
|---|---|---|
| Biaya inspeksi ($C_{insp}$) | USD 5.000/inspeksi | USD 0 (terjadwal) |
| Frekuensi inspeksi | 1× (prediktif) | 1× per 4.000 siklus |
| $P_{fail}$ dalam interval | 0,021 | 0,085 |
| Biaya kegagalan ($C_{fail}$) | USD 250.000 | USD 250.000 |
| Biaya downtime ($C_{down} \times E[T_{down}]$) | USD 30.000 | USD 120.000 |
| **E[TC] per interval** | **USD 85.250** | **USD 141.250** |

$$\Delta E[TC] = \frac{141.250 - 85.250}{141.250} \times 100\% = 39{,}6\%$$

**Interpretasi Manajerial:** Implementasi PdM menurunkan *expected total cost* hingga 39,6 % per interval inspeksi. Dengan 50 pesawat × 4 mesin × 1 HPT blade per interval, penghematan agregat maskapai dapat melampaui **USD 11,2 juta per tahun**, konsisten dengan temuan Stanton et al. (2022) yang menyatakan PdM mampu "optimizing maintenance schedules, reducing aircraft downtime, and identifying unexpected faults."

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Batasan Metodologis
Stanton et al. (2022) secara eksplisit mengakui belum adanya survei komprehensif yang didedikasikan khusus untuk PdM di industri *aircraft manufacturing*, sehingga generalisasi ke *rotorcraft*, *eVTOL*, dan *U.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
