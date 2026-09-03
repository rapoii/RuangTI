# 1491 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*
**Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan aset (asset maintenance) dari pendekatan reaktif (*breakdown maintenance*) dan.preventif berbasis jadwal menuju **pemeliharaan prediktif** (*predictive maintenance* – PdM). Menurut Pearson (2024) dalam publikasinya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), integrasi teknik computer vision dengan *deep learning* memungkinkan identifikasi anomali visual pada komponen mekanis, listrik, dan proses secara *real-time*, sehingga *unscheduled downtime* dapat ditekan hingga kisaran 30–50%. Studi ini menunjukkan bahwa kamera industri (visible, thermal, hyperspectral) yang dipasang pada lini produksi dapat menangkap *degradation signatures* berupa retakan mikro, korosi, kebocoran fluida, perubahan warna insulator, atau deformasi termal yang tidak terdeteksi oleh sensor getaran konvensional.

Urgensi ekonomi dari penerapan deteksi anomali berbasis citra bersifat tripartit: (a) **pengurangan biaya pemeliharaan** yang menurut riset Pearson mencapai rata-rata 25% pengurangan OPEX; (b) **peningkatan availability** aset kritis karena *Mean Time Between Failure* (MTBF) dapat diperpanjang melalui intervensi dini; dan (c) **kepatuhan terhadap standar** internasional seperti ISO 13373 (*Condition monitoring and diagnostics of machines*) serta ISO 55000 (*Asset management*). Dalam konteks manufaktur semikonduktor, petrokimia, dan pembangkitan listrik, satu jam *unplanned shutdown* pada fasilitas炼制原油 bernilai ekonomis antara USD 250.000 hingga USD 1.000.000, menjadikan akurasi deteksi anomali sebagai variabel strategis yang直接影响 profitabilitas dan keselamatan kerja.

Sinergi dengan literatur pendukung dari Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menunjukkan bahwa arsitektur Physics-Informed Neural Networks (PINNs) yang digabungkan dengan Model Predictive Control (MPC) memungkinkan sistem pemeliharaan tidak hanya mendeteksi anomali tetapi juga memprediksi trajectory degradasi dan menghasilkan rekomendasi setpoint kontrol optimal. Pendekatan hybrid data-driven dan physics-based ini menjawab keterbatasan CNN murni yang bersifat *black-box*, sehingga *trustworthiness* model meningkat untuk aplikasi *safety-critical*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Anomali

CNN yang digunakan dalam kerangka Pearson (2024) mengikuti formulasi *forward propagation* standar:

$$z_j^{(l)} = \sum_{i \in \mathcal{M}_j} x_i^{(l-1)} * k_{ij}^{(l)} + b_j^{(l)}$$

$$x_j^{(l)} = f\left(z_j^{(l)}\right) = \max(0, z_j^{(l)})$$

di mana $z_j^{(l)}$ adalah pre-activation neuron ke-$j$ pada layer $l$, $k_{ij}^{(l)}$ adalah kernel konvolusi, $b_j^{(l)}$ adalah bias, dan $f(\cdot)$ merupakan fungsi aktivasi ReLU. Untuk lapisan output klasifikasi biner (anomali vs. normal), digunakan *sigmoid*:

$$\hat{y} = \sigma(z^{(L)}) = \frac{1}{1 + e^{-z^{(L)}}}$$

### 2.2 Fungsi Loss dan Optimasi

Pelatihan menggunakan *Binary Cross-Entropy Loss* yang diperkaya dengan *Focal Loss* untuk menangani *class imbalance* (anomali jauh lebih jarang daripada kondisi normal):

$$\mathcal{L}_{focal} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

dengan $p_t = \hat{y}$ jika $y=1$, dan $\alpha_t \in [0,1]$ adalah *weighting factor* untuk kelas positif; $\gamma \geq 0$ adalah *focusing parameter*. Optimasi parameter jaringan $\theta = \{W, b\}$ dilakukan melalui Adam optimizer:

$$\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

### 2.3 Formulasi Autoencoder untuk Anomaly Detection

Untuk skenario *unsupervised* di mana citra anomali sulit dilabeli, digunakan arsitektur *Convolutional Autoencoder* (CAE) dengan *reconstruction error* sebagai *anomaly score*:

$$\mathcal{L}_{CAE} = \frac{1}{N}\sum_{i=1}^{N}\|x_i - \hat{x}_i\|_2^2$$

Anomali terdeteksi jika:

$$\mathcal{A}(x) = \|x - D(E(x))\|_2^2 > \tau$$

di mana $E(\cdot)$ adalah encoder, $D(\cdot)$ adalah decoder, dan $\tau$ adalah *threshold* yang ditetapkan berdasarkan distribusi *reconstruction error* pada data normal (umumnya pada persentil ke-99).

### 2.4 Physics-Informed Neural Networks untuk MPC (Sitasi Pendukung)

Patel, Bhartiya, dan Gudi (2024) mengusulkan PINNs yang meminimalkan *combined loss*:

$$\mathcal{L}_{PINN} = \lambda_{data} \mathcal{L}_{data} + \lambda_{physics} \mathcal{L}_{physics}$$

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{i=1}^{N_p}\|\mathcal{N}[u_\theta(x_i, t_i)] - f(x_i, t_i)\|_2^2$$

di mana $\mathcal{N}$ adalah operator diferensial dari PDE governing equations (misalnya persamaan difusi panas atau dinamika fluida), dan $f$ adalah *forcing term*. Formulasi MPC kemudian:

$$\min_{u_0, \ldots, u_{N-1}} \sum_{k=0}^{N-1} \left[(x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k\right]$$

$$\text{subject to: } x_{k+1} = \mathcal{N}_{PINN}(x_k, u_k)$$

$$x_{min} \leq x_k \leq x_{max}, \quad u_{min} \leq u_k \leq u_{max}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti SOP 7-tahap yang dipetakan ke kerangka CRISP-DM (*Cross-Industry Standard Process for Data Mining*):

**Tahap 1 — Akuisisi Data Citra.** Pemasangan kamera IP67 industrial pada titik kritis (motor, bearing housing, panel listrik, pipa bertekanan). Resolusi minimum 1920×1080 piksel, *frame rate* ≥ 30 fps untuk aplikasi dinamis. Standar referensi: IEC 61724 (performance monitoring untuk sistem PV) dan ISO 13373-1.

**Tahap 2 — Pre-processing.** Normalisasi piksel ke rentang $[0,1]$, augmentasi data (*rotation*, *flip*, *brightness adjustment*, *mixup*) untuk meningkatkan *robustness*, dan segmentasi ROI (*Region of Interest*) menggunakan algoritma *Otsu thresholding* atau U-Net.

**Tahap 3 — Arsitektur Model.** Pemilihan backbone: ResNet-50, EfficientNet-B3, atau Vision Transformer (ViT) tergantung pada kompleksitas anomali. Untuk skenario *real-time edge deployment*, arsitektur MobileNetV3 atau ShuffleNetV2 lebih sesuai karena parameter < 5 juta dan latensi inferensi < 50 ms pada GPU NVIDIA Jetson Orin.

**Tahap 4 — Pelatihan dan Validasi.** *Stratified k-fold cross-validation* ($k=5$) untuk memastikan distribusi kelas seimbang. *Early stopping* dengan *patience*=10 epoch berdasarkan *validation loss*.

**Tahap 5 — Kalibrasi Threshold.** Penentuan $\tau$ menggunakan *Precision-Recall curve* dengan target $F_1 \geq 0.92$ dan *Recall* $\geq 0.95$ (mengingat biaya *false negative* pada pemeliharaan jauh lebih tinggi daripada *false positive*).

**Tahap 6 — Deployment & MLOps.** Kontainerisasi model menggunakan Docker, *orchestration* via Kubernetes, dan *monitoring drift* menggunakan alat seperti Evidently AI atau Prometheus. Standar: ISO/IEC 23053 (*Framework for AI systems using ML*).

**Tahap 7 — Integrasi dengan CMMS.** Hasil prediksi di-*push* ke *Computerized Maintenance Management System* (misalnya SAP PM, IBM Maximo) untuk *auto-generation* work order dengan prioritas dan SLA sesuai severity.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Deteksi Anomali pada Motor Induksi 3-Fasa di Pabrik Petrokimia

**Input Parameter:**
- Populasi motor: $N = 500$ unit
- Kelas anomali: *bearing wear*, *misalignment*, *overheating*
- Distribusi data pelatihan: 4.000 citra normal, 800 citra anomali (rasio 5:1)
- Arsitektur: ResNet-50 (25,6 juta parameter)
- *Batch size*: 32, *learning rate*: $\eta = 10^{-4}$, epoch = 50

**Langkah 1 — Perhitungan Focal Loss pada Epoch ke-25:**

Dengan $\gamma = 2$, $\alpha_t = 0.75$, dan $p_t = 0{,}85$ (untuk sampel anomali yang diprediksi benar):

$$\mathcal{L}_{focal} = -0{,}75 \times (1 - 0{,}85)^2 \times \log(0{,}85) = -0{,}75 \times 0{,}0225 \times (-0{,}1625) = 0{,}00274$$

Untuk sampel normal dengan $p_t = 0{,}92$:

$$\mathcal{L}_{focal} = -0{,}25 \times (1 - 0{,}92)^2 \times \log(0{,}92) = -0{,}25 \times 0{,}0064 \times (-0{,}0834) = 0{,}000133$$

**Langkah 2 — Confusion Matrix Hasil Validasi (sampel 1.000):**

| Aktual \ Prediksi | Normal | Anomali |
|---|---|---|
| **Normal** | 920 | 30 |
| **Anomali** | 5 | 45 |

- $Accuracy = \frac{920+45}{1000} = 96{,}5\%$
- $Precision = \frac{45}{75} = 60{,}0\%$
- $Recall = \frac{45}{50} = 90{,}0\%$
- $F_1 = 2 \times \frac{0{,}60 \times 0{,}90}{0{,}60 + 0{,}90} = 72{,}0\%$

**Langkah 3 — Perhitungan *Anomaly Score* (Autoencoder):**

Ambang batas $\tau$ ditetapkan di persentil ke-99 *reconstruction error* data normal: $\tau = 0{,}0245$.

| Citra | MSE Rekonstruksi | Keputusan |
|---|---|---|
| #1 (bearing normal) | 0,0089 | Normal |
| #2 (retakan mikro) | 0,0421 | **Anomali** |
| #3 (overheat) | 0,0517 | **Anomali** |

**Langkah 4 — Analisis Dampak Ekonomi:**

Tanpa sistem: *Unplanned downtime* rata-rata 120 jam/tahun × 500 unit × USD 5.000/jam = **USD 300 juta/tahun**.
Dengan sistem (pengurangan 40%): penghematan = **USD 120 juta/tahun**, dengan CAPEX implementasi (kamera, GPU cluster, software) sekitar USD 8 juta → *Payback Period* ≈ 25 hari.

**Langkah 5 — Formulasi MPC untuk Setpoint Pemeliharaan (Patel et al., 2024):**

Dengan $Q = \text{diag}(10, 1)$, $R = 0{,}1$, *prediction horizon* $N=10$, suhu bearing $x_1$ dan vibrasi RMS $x_2$:

$$\min_{u} \sum_{k=0}^{9}\left[10(x_{1,k} - 80)^2 + (x_{2,k} - 2{,}8)^2 + 0{,}1 u_k^2\right]$$

Solusi menghasilkan *trajectory* operasi yang menjaga bearing pada suhu $\leq 80°C$ dan vibrasi $\leq 2{,}8$ mm/s (sesuai ISO 10816-3 untuk mesin *medium*).

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologi

Pearson (2024) mengakui beberapa keterbatasan: (a) ketergantungan pada kualitas data berlabel yang membutuhkan *domain expert* untuk anotasi; (b) *concept drift* ketika pola anomali berevolusi (misalnya modus kegagalan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
