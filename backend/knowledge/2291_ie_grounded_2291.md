# 2291 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance/PdM) telah menjadi pilar strategis dalam transformasi digital industri manufaktur dan proses, menggantikan paradigma reaktif tradisional yang menimbulkan *Mean Time To Repair* (MTTR) panjang dan biaya *unplanned downtime* yang mencapai USD 50.000 per jam pada industri petrokimia dan semikonduktor (Pearson, 2024). Dalam laporan SSRN yang dipublikasikan Pearson (2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), diuraikan bahwa lebih dari 70% anomali pada peralatan industri kritis—seperti *motor rotor squirrel-cage*, pompa sentrifugal, katup kontrol, dan *heat exchanger shell-and-tube*—memiliki signature visual yang dapat diekstraksi melalui *image-based condition monitoring* (IBCM). Anomali ini mencakup retak mikro (*microcrack*), korosi pitting, delaminasi lapisan, kebocoran uap, serta misalignment mekanis yang sebelumnya hanya dapat dideteksi melalui inspeksi manual periodik atau *vibration analysis* yang membutuhkan sensor kontak fisik.

Urgensi ekonomi dari penerapan Computer Vision dalam PdM diperkuat oleh data bahwa inspeksi visual manual memiliki tingkat *false negative* hingga 25–40% pada lingkungan dengan paparan panas, kebisingan, dan cahaya rendah, sementara CNN otomatis dapat menekan laju tersebut di bawah 5% dengan akurasi AUC > 0,95 (Pearson, 2024). Pearson (2024) juga menekankan bahwa integrasi deep learning dengan arsitektur *edge computing* berbasis GPU NVIDIA Jetson atau Google Coral TPU memungkinkan *latency inference* di bawah 50 ms, memenuhi требования real-time monitoring. Pelengkap penting datang dari Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) yang mempublikasikan arsitektur *Physics-Informed Neural Networks* (PINN) untuk *Model Predictive Control* (MPC) pada proses industri—menjembatani kesenjangan antara *image-based detection* (Pearson) dan *process control* (Patel et al.) untuk membentuk *closed-loop predictive maintenance ecosystem*. Sinergi keduanya memungkinkan sistem tidak hanya mendeteksi anomali visual tetapi juga memprediksi trajectory proses dan mengaktifkan *control action* korektif sebelum degradasi menjadi kegagalan fungsional, sebagaimana tuntutan standar ISO 13373-1:2002 untuk *condition monitoring* dan ISO 55000:2014 untuk *asset management*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

CNN yang digunakan Pearson (2024) berbasis backbone ResNet-50 termodifikasi dengan *transfer learning* dari ImageNet. Operasi konvolusi dua dimensi didefinisikan sebagai:

$$(f * g)(i, j) = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} f(m, n) \cdot g(i-m, j-n)$$

di mana $f$ adalah citra input $\in \mathbb{R}^{H \times W \times C}$, $g$ adalah *kernel* konvolusi $\in \mathbb{R}^{M \times N}$, dan output *feature map* dihasilkan melalui aktivasi ReLU:

$$a_{i,j}^{(l)} = \max\left(0, \sum_{m,n} W_{m,n}^{(l)} \cdot a_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

Residual block untuk mencegah *vanishing gradient* pada jaringan dalam:

$$\mathcal{F}(x) = \sigma(W_2 \cdot \sigma(W_1 \cdot x + b_1) + b_2) + x$$

dengan $x$ sebagai *identity shortcut connection*.

### 2.2 Fungsi Loss untuk Deteksi Anomali

Mengingat ketidakseimbangan kelas (*class imbalance*) antara kondisi normal dan anomali, Pearson (2024) mengadopsi Focal Loss:

$$\mathcal{L}_{FL}(p_t) = -\alpha_t (1-p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas target, $\alpha_t$ adalah *weighting factor* ($\alpha_t = 0.25$ untuk kelas anomali), dan $\gamma$ adalah *focusing parameter* ($\gamma = 2.0$). Loss total menggabungkan klasifikasi dan *anomaly localization*:

$$\mathcal{L}_{total} = \lambda_1 \mathcal{L}_{CLS} + \lambda_2 \mathcal{L}_{LOC} + \lambda_3 \mathcal{L}_{SEG}$$

dengan $\lambda_1 = 1.0$, $\lambda_2 = 0.5$, $\lambda_3 = 0.3$ sebagai bobot regularisasi.

### 2.3 Physics-Informed Neural Network (PINN)

Patel, Bhartiya, dan Gudi (2024) merumuskan PINN yang menggabungkan *governing equation* proses industri (misalnya dinamika perpindahan panas) ke dalam *loss function*:

$$\mathcal{L}_{PINN} = \underbrace{\frac{1}{N_u}\sum_{i=1}^{N_u} \left| u_{NN}(x_i, t_i) - u_i \right|^2}_{\text{Data loss}} + \underbrace{\frac{1}{N_f}\sum_{j=1}^{N_f} \left| \mathcal{R}(u_{NN}(x_j, t_j)) \right|^2}_{\text{Physics residual}}$$

di mana $\mathcal{R}(\cdot)$ adalah *residual operator* dari Persamaan Differensial Parsial (PDP) proses, misalnya *heat equation*:

$$\mathcal{R} = \frac{\partial u}{\partial t} - \alpha \nabla^2 u + f(x,t)$$

### 2.4 Metrik Evaluasi

Kinerja deteksi anomali dievaluasi menggunakan Precision, Recall, F1-Score, dan AUC-ROC:

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}, \quad F_1 = 2 \cdot \frac{P \cdot R}{P + R}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi mengikuti SOP 5-tahap yang distandardisasi Pearson (2024) sesuai kerangka MLOps:

**Tahap 1 — Akuisisi Data Citra:** Pemasangan kamera industri IP67 (resolusi 2048×2048 pixel, frame rate 30 fps) pada posisi strategis dengan pencahayaan LED terkontrol (*diffuse ring light*). Sampling minimum 5.000 citra per kelas cacat sesuai rekomendasi MVTec AD dataset (Pearson, 2024).

**Tahap 2 — Preprocessing & Augmentasi:** Normalisasi pixel $[0,255] \rightarrow [0,1]$, resize ke 224×224, augmentasi geometris (*rotation* ±15°, *flip horizontal*, *zoom* 0.9–1.1), dan augmentasi fotometris (penyesuaian brightness/contrast ±20%). Dataset dibagi 70/15/15 untuk *training/validation/testing*.

**Tahap 3 — Training Model:** Fine-tuning ResNet-50 pretrained dengan *learning rate* $10^{-4}$ (Adam optimizer), *batch size* 32, dan *early stopping* dengan *patience* 10 epoch. Durasi training 50–80 epoch pada GPU NVIDIA A100.

**Tahap 4 — Deployment Edge Computing:** Model dikonversi ke TensorRT dan di-deploy pada NVIDIA Jetson AGX Orin dengan optimasi INT8 quantization, mempertahankan akurasi ±0.5%.

**Tahap 5 — Integrasi dengan MPC (Patel et al., 2024):** Output anomali dari CNN menjadi *disturbance variable* $d(t)$ pada formulasi MPC:

$$\min_{u} \sum_{k=0}^{N_p-1} \left[ \|y(k) - y_{ref}(k)\|_Q^2 + \|\Delta u(k)\|_R^2 \right]$$

terhadap kendala $\dot{x} = f(x,u,d_{CNN})$, dengan $d_{CNN}$ merupakan sinyal anomali yang di-inject dari sistem vision.

Standar acuan: ISO 13373-1:2002 (*condition monitoring*), ISO 55000:2014 (*asset management*), IEC 62443 (*industrial cybersecurity*).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Deteksi cacat *pitting corrosion* pada pipa heat exchanger di unit *crude preheat train* kilang PT. X (throughput 100.000 barel/hari).

**Parameter Input:**
- Citra inspeksi: 224×224×3 RGB, korosi label kelas positif
- Total dataset: 6.000 citra (4.200 normal, 1.800 korosi)
- Threshold klasifikasi: $\tau = 0.85$
- Biaya *unplanned shutdown*: $C_{down} = $ USD 250.000/insiden
- Biaya inspeksi manual: $C_{manual} = $ USD 800/inspeksi
- Frekuensi inspeksi CNN otomatis: 4× per shift = 12×/hari

**Perhitungan Confusion Matrix pada Test Set (n=900):**
- True Positive (TP) = 252 (kelas korosi terkoreksi)
- False Positive (FP) = 18
- False Negative (FN) = 9
- True Negative (TN) = 621

**Kalkulasi Metrik:**

$$\text{Precision} = \frac{252}{252+18} = 0.933$$

$$\text{Recall} = \frac{252}{252+9} = 0.966$$

$$F_1 = \frac{2 \times 0.933 \times 0.966}{0.933 + 0.966} = 0.949$$

**Analisis Nilai Ekonomi (Per Tahun):**

$$ROI = \frac{(C_{down,baseline} \times N_{prevented}) - C_{CNN,system}}{C_{CNN,system}} \times 100\%$$

Dengan asumsi CNN mencegah 8 insiden/tahun (Recall 96.6% dari 12 estimasi potensi kegagalan), $C_{CNN,system}$ = USD 120.000 (CAPEX+OPEX):

$$ROI = \frac{(250.000 \times 8) - 120.000}{120.000} \times 100\% = 1.466,67\%$$

**Perhitungan *Payback Period*:**

$$T_{payback} = \frac{C_{CAPEX}}{\text{Savings tahunan}} = \frac{80.000}{(8 \times 250.000) - 40.000} = 0,041 \text{ tahun} \approx 15 \text{ hari}$$

**Interpretasi Manajerial:** Sistem mencapai F1-Score 94,9% dengan ROI 1.467% dan *payback period* kurang dari 1 bulan, memenuhi kriteria investasi industri kelas *mission-critical*. Pearson (2024) melaporkan bahwa integrasi PINN-MPC (Patel et al., 2024) menambah *lead time* peringatan dini hingga 14–21 hari sebelum *failure threshold*, menurunkan *false alarm rate* dari 8% ke 2,3%.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologis

Pearson (2024) secara eksplisit mengakui tiga limitasi utama: (1) *domain shift* ketika model yang di-*training* pada satu jenis peralatan ditransfer ke peralatan lain dengan karakteristik optik berbeda; (2) ketergantungan pada *labeled data* yang memerlukan anotasi ahli inspeksi bersertifikat ASNT/ISO 9712; (3) *black-box nature* CNN yang menyulitkan *explainability* bagi auditor keselamatan. Patel et al. (2024) menambahkan bahwa PINN membutuhkan pengetahuan akurat terhadap *governing physics*—ketidakpastian parameter proses (misalnya viskositas yang bervariasi terhadap temperatur) dapat menurunkan akurasi prediksi hingga 12%.

### 5.2 Perbandingan dengan Metode Konvensional

| Aspek | Inspeksi Manual | Vibration Analysis | CNN (Pearson, 2024) | CNN+PINN (Patel et al., 2024) |
|-------|----------------|---------------------|----------------------|-------------------------------|
| Akurasi | 60–75% | 80–85% | 93–