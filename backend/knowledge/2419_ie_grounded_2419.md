# 2419 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah menjadi pilar strategis dalam transformasi Industri 4.0, khususnya pada aset manufaktur bernilai tinggi seperti turbin gas, pompa sentrifugal, motor listrik, dan lini perakitan robotik. Studi yang dipublikasikan oleh **James Pearson (2024)** dalam *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) secara eksplisit memposisikan computer vision—khususnya arsitektur *Convolutional Neural Networks* (CNN)—sebagai enabler utama deteksi anomali visual pada permukaan, sambungan, dan komponen kritis peralatan industri. Latar belakang urgensi paper ini berangkat dari kenyataan empiris bahwa biaya *unplanned downtime* pada industri proses kontinyu (minyak & gas, petrokimia, semen, pulp & kertas) dapat mencapai USD 10.000–250.000 per jam insiden, dengan rata-rata *Mean Time To Repair* (MTTR) yang tidak optimal karena inspeksi manual bersifat subyektif dan terlambat.

Pearson (2024) mengargumentasikan bahwa inspeksi visual tradisional yang dilakukan oleh teknisi berpengalaman memiliki tiga kelemahan struktural: (i) variabilitas antar-operator (*inter-rater reliability*) yang tinggi, (ii) ketidakmampuan mengamati peralatan yang beroperasi pada lingkungan ekstrem (suhu > 200°C, zona radiasi, ruang terkurung), serta (iii) akuisisi data yang tidak kontinyu. CNN menjawab tantangan ini dengan melakukan ekstraksi fitur hierarkis (dari *low-level edges* hingga *high-level semantic patterns*) secara otomatis dan konsisten dari citra termal, citra RGB beresolusi tinggi, maupun citra *acoustic emission* yang telah dikonversi ke dalam domain spektrogram.

Konteks industri modern juga mensyaratkan integrasi data visual dengan *Enterprise Asset Management* (EAM) dan sistem *Manufacturing Execution System* (MES). Atas dasar inilah paper pendukung dari **Rahul Patel, Sharad Bhartiya, dan Ravindra Gudi (2024)** dalam *IFAC-PapersOnLine* (DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menjadi relevan: ketika hasil deteksi anomali digunakan sebagai *soft sensor* atau *fault indicator* bagi *Model Predictive Controller* (MPC), jaringan saraf fisik-berbasis (*Physics-Informed Neural Networks*, PINN) menjamin bahwa keputusan kontrol tetap konsisten dengan hukum kekekalan massa, energi, dan momentum. Kombinasi keduanya membentuk arsitektur *closed-loop*: CNN mendeteksi anomali, PINN-MPC menyesuaikan *setpoint* untuk mencegah eskalasi kegagalan. Pendekatan ini merepresentasikan *state-of-the-art* dalam *Prognostics and Health Management* (PHM) dan selaras dengan standar **ISO 13373-1:2015** untuk *condition monitoring* serta **ISO 55000:2014** untuk *asset management*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) mengusulkan pipeline berbasis CNN dengan backbone arsitektur *transfer learning* (ResNet-50, EfficientNet-B3, atau Vision Transformer) yang difine-tune pada dataset anomali industri. Operasi konvolusi dua dimensi didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} W_{m,n}^{(l)} \cdot x_{i+m,\,j+n}^{(l-1)} + b^{(l)}\right)$$

dengan $W_{m,n}^{(l)}$ adalah kernel konvolusi pada layer $l$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear—umumnya ReLU: $f(z) = \max(0, z)$. Untuk lapisan klasifikasi anomali, digunakan *softmax*:

$$\hat{p}_c = \frac{\exp(z_c)}{\sum_{k=1}^{C} \exp(z_k)}, \quad c = 1, 2, \ldots, C$$

di mana $C$ adalah jumlah kelas (misalnya: *normal*, *retak*, *korosi*, *deformasi*, *kontaminasi*).

### 2.2 Fungsi Loss dan Optimisasi

Fungsi loss yang digunakan adalah *categorical cross-entropy*:

$$\mathcal{L}_{CE} = -\frac{1}{N}\sum_{i=1}^{N}\sum_{c=1}^{C} y_{i,c} \log(\hat{p}_{i,c})$$

Optimisasi dilakukan dengan *Adam optimizer* dengan laju pembelajaran adaptif $\eta_t$:

$$\eta_t = \eta_0 \cdot \frac{\sqrt{1 - \beta_2^t}}{1 - \beta_1^t}, \quad \beta_1 = 0.9,\; \beta_2 = 0.999$$

### 2.3 Metrik Evaluasi Deteksi Anomali

Pearson (2024) menekankan empat metric utama yang wajib dilaporkan:

$$Precision = \frac{TP}{TP + FP}, \quad Recall = \frac{TP}{TP + FN}$$

$$F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}, \quad AUC = \int_0^1 TPR(FPR)\, d(FPR)$$

### 2.4 Autoencoder untuk Deteksi Anomali Tanpa Supervisi

Untuk skenario *rare-fault* di mana data anomali sangat terbatas, Pearson (2024) merekomendasikan *Convolutional Autoencoder* (CAE) dengan *reconstruction error* sebagai *anomaly score*:

$$\mathcal{L}_{AE}(\mathbf{x}) = \|\mathbf{x} - \hat{\mathbf{x}}\|_2^2 = \sum_{k=1}^{K}(x_k - \hat{x}_k)^2$$

Ambang batas deteksi ditetapkan sebagai: $\tau = \mu_{AE} + k \cdot \sigma_{AE}$, dengan $k$ antara 2 hingga 3.

### 2.5 Integrasi dengan Physics-Informed Neural Networks (PINN-MPC)

Patel, Bhartiya, & Gudi (2024) melengkapi kerangka kerja dengan PINN yang memastikan kepatuhan terhadap dinamika proses. Loss PINN didefinisikan sebagai:

$$\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics} + \lambda_{bc}\mathcal{L}_{BC} + \lambda_{ic}\mathcal{L}_{IC}$$

di mana $\mathcal{L}_{physics}$ adalah residu persamaan diferensial parsial (misalnya persamaan difusi-transport untuk reaktor kimia), sementara $\lambda_p$ adalah *weighting factor* yang mengkalibrasi trade-off antara *data fit* dan *physics consistency*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Pearson (2024) dan Patel et al. (2024), SOP implementasi sistem deteksi anomali berbasis CNN di industri mengikuti tujuh tahapan sistematis berikut:

**Tahap 1 – Akuisisi Data Visual.** Pemasangan kamera industri (IP67/IP69K, *frame rate* ≥ 30 fps, *global shutter*) di titik inspeksi kritis. Citra dikumpulkan dalam tiga kondisi: (a) operasi normal, (b) operasi *transient*, (c) kondisi *fault-induced* (disimulasikan atau historis).

**Tahap 2 – Preprocessing & Augmentasi.** Normalisasi piksel ke $[0,1]$, resizing ke $224 \times 224$, augmentasi geometris (rotasi ±30°, translasi, flip horizontal), augmentasi fotometris (penyesuaian brightness/contrast), dan *CutMix/MixUp* untuk meningkatkan generalisasi.

**Tahap 3 – Anotasi & Labeling.** Anotasi dilakukan oleh *domain expert* dengan protokol *double-blind cross-validation* antar dua anotator. *Cohen's Kappa* ≥ 0.80 menjadi syarat minimum konsistensi:

$$\kappa = \frac{p_o - p_e}{1 - p_e}$$

**Tahap 4 – Training & Validasi Model.** Split data 70/15/15 (train/val/test) dengan *stratified sampling*. Implementasi *early stopping* berbasis *validation loss*, dengan *patience* = 10 epoch. *Batch size* = 32, *epochs* maksimum = 100.

**Tahap 5 – Kalibrasi Threshold Anomali.** Penentuan threshold $\tau$ melalui analisis ROC pada validation set, dengan target *False Positive Rate* (FPR) ≤ 5% untuk aplikasi industri kritis.

**Tahap 6 – Edge Deployment & Inferensi Real-Time.** Model dikonversi ke format ONNX atau TensorRT, dan di-deploy pada *edge computing device* (NVIDIA Jetson AGX Orin, Intel OpenVINO) dengan *latency* target ≤ 50 ms per inferensi.

**Tahap 7 – Integrasi dengan PINN-MPC dan Feedback Loop.** Output deteksi anomali (kelas, confidence, lokasi) dikirimkan ke *supervisory control* (Patel et al., 2024) yang menyesuaikan trajectory *setpoint* melalui MPC untuk mencegah eskalasi kerusakan.

Standar acuan: **ISO 13373-1:2015** (vibration condition monitoring), **ISO 17359:2018** (general guidelines untuk condition monitoring), dan **IEC 61784** (komunikasi industri).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pabrik petrokimia memiliki 8 unit pompa sentrifugal berdaya 250 kW yang mengangkut *slurry* pada suhu 180°C. Inspeksi visual casing pompa dilakukan setiap 8 jam dengan citra RGB 1024×1024 piksel. Dataset pelatihan berisi **N = 2.400 citra** dengan distribusi:

| Kelas | Jumlah Citra | Proporsi |
|-------|--------------|----------|
| Normal | 1.800 | 75,0% |
| Retak mikro | 300 | 12,5% |
| Korosi | 180 | 7,