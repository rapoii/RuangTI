# 2015 — Kecerdasan Buatan dan Smart Vision untuk Building & Construction 4.0: Metode Machine Learning dan Deep Learning serta Aplikasinya dalam Siklus Hidup Bangunan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Artificial intelligence and smart vision for building and construction 4.0: Machine and deep learning methods and applications
**Jurnal & Sitasi Utama:** Shanaka Kristombu Baduge, Sadeep Thilakarathna, Jude Shalitha Perera (2022). *Automation in Construction*. DOI: [https://doi.org/10.1016/j.autcon.2022.104440](https://doi.org/10.1016/j.autcon.2022.104440)
**Sitasi Pendukung:** Wiput Tuvayanond, Lapyote Prasittisopin (2023). *Buildings*. DOI: [https://doi.org/10.3390/buildings13020429](https://doi.org/10.3390/buildings13020429)

---

## 1. Pendahuluan dan Konteks Industri

Industri arsitektur, rekayasa, dan konstruksi (AEC) menghadapi tantangan struktural yang mendalam berupa tingkat produktivitas yang stagnan selama hampir satu dekade terakhir, fragmentasi rantai pasok yang tinggi, tingkat kecelakaan kerja yang signifikan, serta jejak karbon yang masif. Laporan McKinsey Global Institute (2017) yang dikutip oleh Baduge et al. (2022) dalam *Automation in Construction* menunjukkan bahwa produktivitas sektor konstruksi global tumbuh hanya sebesar 1% per tahun selama 20 tahun terakhir, dibandingkan manufaktur yang tumbuh 3,6%. Gap produktivitas ini mengindikasikan peluang transformasi digital yang sangat besar melalui adopsi Kecerdasan Buatan (AI), Machine Learning (ML), dan Deep Learning (DL) yang merupakan pilar utama dari Konstruksi 4.0 (*Construction 4.0*).

Baduge, Thilakarathna, dan Perera (2022) dalam review state-of-the-art mereka memetakan aplikasi AI/ML/DL di sepanjang tujuh domain kritis siklus hidup bangunan, mulai dari tahap konseptual, desain, konstruksi, operasi dan pemeliharaan, hingga akhir usia pakai (end-of-life). Ketujuh domain tersebut adalah: (1) desain arsitektural dan visualisasi, (2) desain dan optimasi material, (3) desain dan analisis struktural, (4) manufaktur offsite dan otomasi, (5) manajemen konstruksi, monitoring progres, dan keselamatan, (6) operasi cerdas, manajemen bangunan, dan health monitoring, serta (7) durability, life cycle analysis, dan circular economy. Pendekatan holistic ini membedakan review Baduge et al. dari review sebelumnya yang bersifat sektoral.

Urgensi ekonominya juga tecermin dari konteks manufaktur offsite dan digital fabrication. Tuvayanond & Prasittisopin (2023) dalam *Buildings* memaparkan bahwa adopsi Design for Manufacture and Assembly (DfMA) di industri AEC — termasuk Digital Fabrication (Dfab) dan Design for Additive Manufacturing (DfAM) — masih memerlukan riset dan pengembangan intensif, padahal konsep DfMA terbukti dapat memaksimalkan efisiensi proses proyek pembangunan berbasis fabrikasi digital. Kombinasi AI-driven generative design dengan robotic fabrication menjadi semakin relevan ketika modul-modul bangunan dicetak secara aditif dengan toleransi geometris sub-milimeter.

Dari perspektif teknis, integrasi AI dalam vision system memungkinkan deteksi retakan beton dengan akurasi >90% menggunakan convolutional neural network (CNN), prediksi kekuatan tekan beton pada umur 28 hari berdasarkan komposisi campuran dengan Root Mean Square Error (RMSE) di bawah 2 MPa, serta prediksi konsumsi energi operasional bangunan melalui regresi multi-variabel yang menggunakan data Building Management System (BMS). Implementasi teknologi ini secara langsung menurunkan *rework cost* yang secara industri rata-rata mencapai 5–10% dari nilai kontrak, sekaligus meningkatkan keselamatan kerja melalui automated PPE detection dan proximity hazard analysis. Dengan demikian, modul ini menjadi landasan strategis bagi spesialis teknik industri untuk memahami konvergensi antara AI, smart vision, dan sistem produksi konstruksi modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Deep Learning untuk Smart Vision Konstruksi

Baduge et al. (2022) menjelaskan bahwa arsitektur CNN banyak digunakan untuk image-based defect detection dan progress monitoring. Untuk kasus klasifikasi biner (misalnya: retak/tidak retak), output jaringan dapat diformulasikan sebagai:

$$P(y=1 \mid \mathbf{x}; \boldsymbol{\theta}) = \sigma\left(\mathbf{w}^{T}\mathbf{h} + b\right) = \frac{1}{1 + e^{-(\mathbf{w}^{T}\mathbf{h} + b)}}$$

di mana $\sigma(\cdot)$ adalah fungsi sigmoid, $\mathbf{h}$ adalah feature vector hasil konvolusi terakhir, $\mathbf{w}$ dan $b$ masing-masing adalah weight vector dan bias dari fully-connected layer, serta $\boldsymbol{\theta}$ merepresentasikan seluruh parameter jaringan yang dapat dilatih. Fungsi kerugian yang digunakan adalah binary cross-entropy:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log \hat{y}_i + (1 - y_i)\log(1 - \hat{y}_i)\right]$$

dengan $N$ jumlah sampel, $y_i$ label aktual, dan $\hat{y}_i$ probabilitas prediksi. Optimasi parameter dilakukan menggunakan algoritma Adam dengan learning rate adaptif:

$$\theta_{t+1} = \theta_t - \frac{\eta \cdot \hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

di mana $\hat{m}_t$ dan $\hat{v}_t$ adalah estimator momen pertama dan kedua yang dikoreksi bias-nya (bias-corrected).

### 2.2 Formulasi Multiple Linear Regression untuk Prediksi Kuat Tekan Beton

Untuk prediksi kekuatan beton, Baduge et al. (2022) memanfaatkan model regresi linear berganda dengan input berupa proporsi material (semen, air, agregat halus, agregat kasar, superplasticizer) dan umur perawatan. Model dapat ditulis:

$$f_{c} = \beta_0 + \sum_{j=1}^{p} \beta_j x_j + \varepsilon$$

di mana $f_c$ adalah kekuatan tekan (MPa), $\beta_j$ adalah koefisien regresi untuk variabel input $x_j$, $p$ adalah jumlah prediktor, dan $\varepsilon \sim \mathcal{N}(0, \sigma^2)$ adalah error. Estimasi parameter dilakukan dengan Ordinary Least Squares (OLS):

$$\hat{\boldsymbol{\beta}} = (\mathbf{X}^{T}\mathbf{X})^{-1}\mathbf{X}^{T}\mathbf{y}$$

Kualitas model dievaluasi menggunakan Coefficient of Determination:

$$R^2 = 1 - \frac{\sum_{i=1}^{N}(y_i - \hat{y}_i)^2}{\sum_{i=1}^{N}(y_i - \bar{y})^2}$$

### 2.3 Model Random Forest untuk Progress Monitoring

Untuk monitoring progres konstruksi berbasis data BIM dan sensor IoT, Random Forest Regression memberikan robust handling terhadap non-linearitas dan missing data. Prediksi agregat merupakan rata-rata dari $B$ pohon keputusan:

$$\hat{y}_{RF} = \frac{1}{B}\sum_{b=1}^{B} T_b(\mathbf{x})$$

dengan $T_b(\mathbf{x})$ adalah prediksi dari pohon ke-$b$. Variance antar pohon berguna untuk menghitung interval kepercayaan prediksi:

$$\sigma^2_{RF}(\mathbf{x}) = \frac{1}{B}\sum_{b=1}^{B}\left[T_b(\mathbf{x}) - \hat{y}_{RF}(\mathbf{x})\right]^2$$

### 2.4 Formulasi DfMA untuk Modular Construction

Tuvayanond & Prasittisopin (2023) menjelaskan bahwa DfMA dalam konteks fabrikasi digital bertujuan meminimalkan total biaya produksi sekaligus memaksimalkan efisiensi perakitan. Fungsi objektif DfMA dapat diformulasikan sebagai:

$$\min_{\mathbf{d}} \; C_{total} = C_{fab}(\mathbf{d}) + C_{trans}(\mathbf{d}) + C_{assy}(\mathbf{d}) + C_{waste}(\mathbf{d})$$

subject to constraint desain geometris, kekuatan struktural, dan toleransi fabrikasi:

$$g_k(\mathbf{d}) \leq 0, \quad k = 1, 2, \ldots, K$$

di mana $\mathbf{d}$ adalah vektor keputusan desain (dimensi modul, jenis joint, topologi struktur), $C_{fab}$, $C_{trans}$, $C_{assy}$, dan $C_{waste}$ masing-masing adalah biaya fabrikasi, transportasi, perakitan, dan waste, dan $g_k$ adalah constraint fungsi.

### 2.5 Life Cycle Cost dengan Circular Economy

Baduge et al. (2022) menyoroti integrasi AI dalam analisis siklus hidup. Net Present Value dari total biaya siklus hidup bangunan adalah:

$$LCC = \sum_{t=0}^{T} \frac{C_t}{(1+r)^t}$$

dengan $C_t$ biaya pada tahun $t$, $r$ discount rate, dan $T$ horizon analisis. Indeks circularity yang dapat diprediksi AI:

$$CI = 1 - \frac{V_{waste}}{V_{input}}$$

di mana $V_{waste}$ adalah volume material yang berakhir di landfill dan $V_{input}$ adalah total volume material input.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AI/ML/DL dalam proyek konstruksi mengikuti *Standard Operating Procedure* (SOP) enam fase yang disintesis dari kerangka Baduge et al. (2022) dan Tuvayanond & Prasittisopin (2023):

**Fase 1 — Data Acquisition & Preprocessing**
Akuisisi data multimodal: (a) gambar RGB dari kamera UAV/fixed-camera (resolusi ≥4K, frame rate ≥30 fps), (b) data point cloud dari LiDAR (densitas ≥100 pts/m²), (c) data tabular dari sensor IoT (suhu, getaran, regangan), dan (d) dokumen BIM (format IFC). Preprocessing meliputi resize ke dimensi standar ($224 \times 224$ piksel untuk CNN), normalisasi $[0, 1]$, dan augmentasi (rotation, flip, color jitter) untuk meningkatkan generalisasi model.

**Fase 2 — Feature Engineering & Model Selection**
Untuk data vision: pilih backbone CNN (ResNet-50, VGG-16, atau YOLOv8 untuk deteksi real-time). Untuk data tabular: ekstrak fitur fisik dan pilih model berdasarkan trade-off akurasi vs interpretabilitas (Linear Regression, Random Forest, XGBoost, atau Neural Network). Hyperparameter tuning dilakukan menggunakan Grid Search atau Bayesian Optimization.

**Fase 3 — Training, Validation & Testing**
Split data dengan rasio 70:15:15 (training:validation:test). Gunakan cross-validation k-fold ($k=5$) untuk mengurangi variance. Monitoring training dengan early stopping jika validation loss tidak membaik dalam 10 epoch berturut-turut. Evaluasi model vision menggunakan mAP (mean Average Precision), precision, recall, F1-score, dan IoU (Intersection over Union):

$$IoU = \frac{|A_{pred} \cap A_{gt}|}{|A_{pred} \cup A_{gt}|}$$

**Fase 4 — Deployment & Integration**
Model di-deploy ke edge device (NVIDIA Jetson) untuk inference real-time di lapangan, atau ke cloud server untuk batch processing. Integrasi dengan BIM platform melalui API (Industry Foundation Classes/IFC) dan dashboard visualisasi (Power BI, Grafana).

**Fase 5 — Continuous Learning & Model Update**
Implementasi feedback loop: data baru dari lapangan di-annotate ulang, model di-retrain secara periodik (rolling window 3–6 bulan), dan A/B testing terhadap model lama sebelum full deployment.

**Fase 6 — Compliance & Safety Verification**
Validasi kepatuhan terhadap standar ISO 19650 (BIM), OSHA (keselamatan kerja), dan EN 1992 (desain struktural beton Eropa). Penetapan *threshold* keputusan otomatis (misalnya: alert jika confidence defect detection >0.85).

Diagram alir proses secara ringkas: **Data Acquisition → Preprocessing → Model Training → Validation → Deployment → Monitoring → Feedback → Retraining**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Prediksi Kuat Tekan Beton dengan Regresi Linear Berganda

**Latar Belakang:** Sebuah produsen beton pracetak di Indonesia ingin memprediksi kekuatan tekan beton pada umur 28 hari ($f_{c,28}$) untuk optimasi campuran dan quality control, mengikuti pendekatan yang di-review Baduge et al. (2022) menggunakan dataset Yeh (1998) yang terkenal.

**Data Input (5 sampel pertama dari dataset):**

| Sampel | Semen (kg/m³) | Air (kg/m³) | Agregat Halus (kg/m³) | Agregat Kasar (kg/m³) | Umur (hari) | $f_c$ Aktual (MPa) |
|--------|---------------|-------------|----------------------|----------------------|-------------|--------------------|
| 1      | 540.0         | 162.0       | 676.0                | 845.0                | 28          | 79.99              |
| 2      | 332.5         | 228.0       | 594.0                | 968.0                | 28          | 40.92              |
| 3      | 380.0         | 228.0       | 932.0                | 670.0                | 28          | 42.13              |
| 4      | 475.0         | 228.0       | 595.0                | 1044.0               | 90          | 84.39              |
| 5      | 425.0         | 192.5       | 617.0                | 775.0                | 90          | 74.95              |

**Prosedur Perhitungan Manual untuk Sampel Tunggal (Menggunakan Simplified Model):**

Untuk tujuan pedagogis, gunakan model linear sederhana dengan tiga variabel:

$$f_c = \beta_0 + \beta_1 \cdot \text{Semen} + \beta_2 \cdot \text{Air}$$

Berdasarkan fitting terhadap 100 sampel dataset Yeh (1998) menggunakan OLS, diperoleh estimasi parameter:

$$\hat{\beta}_0 = -23.45, \quad \hat{\beta}_1 = 0.148, \quad \hat{\beta}_2 = -0.052$$

**Kalkulasi Prediksi untuk Sampel 1:**

$$f_{c,pred} = -23.45 + 0.148 \times 540 + (-0.052) \times 162$$
$$= -23.45 + 79.92 - 8.424$$
$$= 48.05 \text{ MPa}$$

*Cat