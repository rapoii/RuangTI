# 1469 — Kecerdasan Buatan untuk Pemeliharaan Prediktif: Komponen Kunci, Kepercayaan, dan Tren Masa Depan dalam Konteks Industri 4.0/5.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Artificial Intelligence for Predictive Maintenance Applications: Key Components, Trustworthiness, and Future Trends
**Jurnal & Sitasi Utama:** Ayşegül Uçar, Mehmet Karaköse, Necim Kırımça (2024). *Applied Sciences*, 14(2), 898. DOI: [https://doi.org/10.3390/app14020898](https://doi.org/10.3390/app14020898)
**Sitasi Pendukung:** Marina Efthymiou, Katie A. McCarthy, Chris Markou (2022). *Sustainability*, 14(5), 2643. DOI: [https://doi.org/10.3390/su14052643](https://doi.org/10.3390/su14052643)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*Predictive Maintenance*, PdM) merupakan kebijakan pemeliharaan berbasis kondisi (*condition-based maintenance*) yang memanfaatkan data operasional dan analitik untuk memprediksi kapan suatu komponen dalam sistem nyata akan mengalami degradasi fatal atau anomali, sehingga tindakan intervensi dapat dilakukan sebelum kegagalan terjadi (Uçar, Karaköse, & Kırımça, 2024, DOI: [10.3390/app14020898](https://doi.org/10.3390/app14020898)). Pergeseran paradigma dari strategi *reactive* (run-to-failure) dan *preventive* (time-based) menuju PdM menjadi sangat urgen di tengah kompleksitas sistem industri modern yang didorong oleh Industrial Internet of Things (IIoT), *cyber-physical production systems* (CPPS), serta tuntutan *zero-downtime manufacturing*. Uçar et al. (2024) menekankan bahwa integrasi teknologi *cutting-edge* seperti *data analytics* dan Kecerdasan Buatan (AI) tidak hanya meningkatkan akurasi sistem PdM, tetapi juga otonomi dan adaptabilitasnya di lingkungan kerja yang kompleks dan dinamis.

Secara ekonomis, biaya pemeliharaan industri manufaktur dan proses umumnya menyumbang 15–40% dari total *cost of goods manufactured*, dengan unplanned downtime menyebabkan kerugian hingga $50.000 per jam pada lini produksi *high-tech* dan $250.000 per jam di industri petrokimia. Di sektor aviasi, Efthymiou, McCarthy, dan Markou (2022, DOI: [10.3390/su14052643](https://doi.org/10.3390/su14052643)) melaporkan bahwa sektor *Maintenance, Repair and Overhaul* (MRO) pesawat terbang memiliki kompleksitas tinggi dengan banyak perantara (*intermediaries*), berbagai aktor yang saling berbagi data, dan kebutuhan kuat akan keamanan data. Kedua paper ini saling melengkapi: Uçar et al. (2024) menyediakan kerangka AI/teknologis untuk prediksi kegagalan, sementara Efthymiou et al. (2022) menyediakan kerangka tata kelola data (Blockchain) yang menjamin integritas catatan pemeliharaan lintas organisasi MRO.

Urgensi strategis PdM semakin nyata dengan tren digitalisasi Industry 4.0 yang menghasilkan *big data* dari sensor, aktuator, dan sistem SCADA. Volume data ini melampaui kemampuan operator manusia, sehingga algoritma AI—mulai dari *machine learning* klasik (SVM, Random Forest, XGBoost) hingga *deep learning* (CNN, LSTM, Transformer)—menjadi tulang punggung pemrosesan. Lebih lanjut, isu *trustworthiness* (kepercayaan) menjadi kritikal: regulator, insinyur, dan operator harus mampu menjelaskan keputusan model (*explainability*), memverifikasi ketahanannya terhadap *adversarial attack*, serta menjamin fairness dan privasi data. Uçar et al. (2024) secara eksplisit menyatakan bahwa salah satu tantangan utama ke depan adalah integrasi *human-robot interaction* (HRI) dalam sistem PdM otonom, yang memerlukan pendekatan *human-in-the-loop* (HITL) dan standar etika AI.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis PdM berbasis AI dibangun di atas tiga pilar: model keandalan stokastik, model degradasi deterministik/stokastik, dan metrik performa model AI.

### 2.1 Model Keandalan Weibull

Distribusi Weibull adalah standar de facto untuk memodelkan waktu gagal (*time-to-failure*, TTF) komponen mekanik dan elektronik. Fungsi keandalan dinyatakan sebagai:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad t \geq 0$$

di mana $\beta > 0$ adalah parameter bentuk (*shape*) yang merepresentasikan mode kegagalan ( $\beta < 1$: *infant mortality*, $\beta = 1$: eksponensial/acak, $\beta > 1$: *wear-out* ) dan $\eta > 0$ adalah parameter skala (*scale*) yang mewakili *characteristic life* (umur di mana 63,2% populasi telah gagal). Fungsi densitas probabilitas dan laju hazard adalah:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

$$h(t) = \frac{f(t)}{R(t)} = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Degradation Modeling dan Remaining Useful Life (RUL)

Model degradasi stokastik Wiener dengan drift digunakan secara luas (misalnya pada *bearing* dan *turbine blade*). Misalkan $X(t)$ adalah tingkat degradasi kumulatif:

$$X(t) = \mu t + \sigma B(t)$$

di mana $\mu$ adalah drift rate, $\sigma$ adalah volatilitas, dan $B(t)$ adalah proses Wiener standar. *Remaining Useful Life* didefinisikan sebagai waktu pertama $X(t)$ mencapai ambang batas kegagalan $\omega$:

$$\text{RUL}(t) = \inf\{\tau \geq 0 : X(t+\tau) \geq \omega \mid \mathcal{F}_t\}$$

Untuk pendekatan AI, Uçar et al. (2024) menyoroti penggunaan Recurrent Neural Network (RNN) dan LSTM untuk menangkap dependensi temporal dalam sekuens sensor:

$$\hat{y}_t = f_{\text{LSTM}}(x_{t-T:t}; \theta)$$

di mana $x_{t-T:t}$ adalah jendela observasi sepanjang $T$ *time-step* dan $\hat{y}_t$ adalah estimasi RUL atau tingkat degradasi. Fungsi loss yang umum adalah *Mean Squared Error* (MSE):

$$\mathcal{L}_{\text{MSE}} = \frac{1}{N}\sum_{i=1}^{N}\left(\text{RUL}_i - \hat{\text{RUL}}_i\right)^2$$

### 2.3 Metrik Evaluasi AI-PdM

Untuk sistem deteksi anomali/klasifikasi fault, matriks konfusi menghasilkan metrik:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}$$

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

Untuk *early fault detection*, metrik *anticipation time* $\Delta t_a = t_{\text{detect}} - t_{\text{failure}}$ harus diminimalkan untuk mengurangi false alarm sambil mempertahankan deteksi dini.

### 2.4 Model Keputusan Pemeliharaan

Keputusan optimal antara predictive vs. corrective maintenance dapat diformulasikan sebagai minimisasi *expected total cost*:

$$\min_{n, T_p} \left[ C_{\text{insp}} \cdot n + \int_0^{T_p} h(t) \cdot C_{\text{down}} \cdot R(t) \, dt \right]$$

di mana $C_{\text{insp}}$ adalah biaya inspeksi, $n$ jumlah inspeksi, $T_p$ periode pemeliharaan, dan $C_{\text{down}}$ adalah biaya *downtime* per unit waktu. Kondisi optimal kebijakan intervensi threshold-based (Cox, 1975; diacu dalam Uçar et al., 2024):

$$\tau^* = \inf\left\{t : P(\text{failure dalam } \Delta t \mid \mathcal{F}_t) \geq \delta_{\text{crit}}\right\}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AI-PdM di industri mengikuti siklus CRISP-DM yang diperluas dengan komponen *trustworthiness*. Berdasarkan kerangka Uçar et al. (2024) dan integrasi tata kelola data Efthymiou et al. (2022), SOP berikut dapat diadopsi:

**Tahap 1 — Akuisisi Data & Instrumentasi IIoT.** Pasang sensor getaran (accelerometer tri-axial), termokopel, sensor akustik (AE), dan sensor arus pada peralatan kritis. Sampling rate untuk *bearing* minimal 25,6 kHz menurut ISO 10816. Data disimpan dalam *time-series database* (InfluxDB, TimescaleDB) dengan *metadata* yang kaya.

**Tahap 2 — Pra-pemrosesan & Feature Engineering.** Terapkan filter band-pass, FFT, *wavelet packet decomposition*, dan ekstraksi fitur statistik domain waktu–frekuensi: RMS, kurtosis, crest factor, spectral entropy, dan *Hilbert-Huang Transform* margin.

**Tahap 3 — Pelatihan & Validasi Model.** Partisi data 70/15/15 (train/val/test). Gunakan teknik *k-fold cross-validation* dengan $k=5$ untuk mencegah *overfitting*. Untuk ketidakseimbangan kelas fault, terapkan SMOTE atau *cost-sensitive learning*.

**Tahap 4 — Integrasi Blockchain untuk MRO.** Mengikuti rekomendasi Efthymiou et al. (2022), setiap event inspeksi, penggantian part, dan pembaruan firmware dicatat dalam *distributed ledger* (Hyperledger Fabric) dengan *smart contract* yang menjamin immutability. *Consensus mechanism* (PBFT) memastikan bahwa data historis pemeliharaan tidak dapat dimanipulasi oleh satu aktor tunggal, mengatasi masalah *single point of failure* dalam sistem MRO tradisional.

**Tahap 5 — Validasi Trustworthiness.** Uçar et al. (2024) mensyaratkan empat dimensi kepercayaan: (i) *explainability* (SHAP, LIME, attention visualization), (ii) *robustness* (uji *adversarial examples*, sensor noise), (iii) *fairness* (uji performa lintas vendor/model equipment), dan (iv) *privacy* (federated learning, differential privacy).

**Tahap 6 — Deployment & HITL Monitoring.** Model di-deploy ke *edge device* (NVIDIA Jetson, Siemens IOT2050) untuk inferensi *real-time* dengan latensi < 100 ms. Operator manusia tetap di loop untuk konfirmasi alarm (human-on-the-loop), sesuai dengan rekomendasi HRI dalam Uçar et al. (2024).

**Arsitektur Sistem (diagram alir logis):**

```
[Sensor IIoT] → [Edge Gateway] → [Stream Processing] 
       ↓                                      ↓
   [Time-Series DB]              [Feature Store] 
       ↓                                      ↓
   [Blockchain Ledger]  ←→  [Model Training Pipeline]
                                          ↓
                                  [Model Registry]
                                          ↓
                            [Edge Inference (LSTM/CNN)]
                                          ↓
                          [XAI Module (SHAP)] → [HMI/Alarm]
                                          ↓
                            [Human Operator (HITL)]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik petrokimia memiliki 10 unit pompa sentrifugal kritis yang beroperasi 24/7. Data historis 5 tahun menunjukkan distribusi waktu antar kegagalan (TTF) mengikuti Weibull dengan $\beta = 2{,}4$ (mode *wear-out*) dan $\eta = 4.200$ jam. Biaya *downtime* $C_{\text{down}}$ = Rp 75.000.000/jam, biaya inspeksi $C_{\text{insp}}$ = Rp 6.000.000/event, dan biaya perbaikan prediktif $C_{\text{pred}}$ = Rp 90.000.000. Biaya perbaikan *corrective* (setelah gagal) $C_{\text{corr}}$ = Rp 300.000.000.

**Langkah 1 — Estimasi parameter Weibull dan MTTF:**
$$\text{MTTF} = \eta \cdot \Gamma\left(1+\frac{1}{\beta}\right) = 4200 \cdot \Gamma(1,4167)$$

Karena $\Gamma(1,4167) \approx 0{,}886$, maka:

$$\text{MTTF} = 4200 \times 0{,}886 = 3.721{,}2 \text{ jam} \approx 155{,}9 \text{ hari}$$

**Langkah 2 — Keandalan pada $t = 3.000$ jam:**

$$R(3000) = e^{-(3000/4200)^{2,4}} = e^{-(0{,}7143)^{2,4}} = e^{-0{,}4523} = 0{,}6361$$

Artinya, pada 3.000 jam operasi, masih ada 63,61% pompa yang belum gagal.

**Langkah 3 — Hazard rate pada $t = 3.000$ jam:**

$$h(3000) = \frac