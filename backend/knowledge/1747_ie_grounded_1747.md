# 1747 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai dengan adopsi *Industry 4.0* dan integrasi *Cyber-Physical Production Systems* (CPPS), deteksi anomali peralatan industri telah menjadi pilar strategis untuk mempertahankan keunggulan kompetitif. Pearson (2024), dalam karyanya yang diterbitkan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), menyoroti bahwa pendekatan konvensional berbasis *threshold-based vibration analysis* dan inspeksi manual memiliki keterbatasan fundamental ketika diterapkan pada sistem manufaktur modern yang semakin kompleks. Studi ini secara khusus mengkaji bagaimana arsitektur *Convolutional Neural Networks* (CNN) dapat diimplementasikan untuk menganalisis citra visual peralatan industri—mulai dari permukaan komponen mekanis, pola termal, hingga citra *ultrasonic phased array*— guna mengidentifikasi anomali yang menjadi prekursor kegagalan fungsi (*failure precursors*).

Urgensi permasalahan ini bersifat multidimensi. Secara ekonomi, *U.S. Department of Energy* melaporkan bahwa biaya pemeliharaan yang tidak terjadwal menyumbang 18–40% dari total *Operation & Maintenance* (O&M) pada fasilitas industri berat, dengan *downtime cost* pada lini manufaktur semikonduktor dapat melampaui USD 2 juta per jam. Secara teknis, anomali visual seperti retakan mikro (*micro-cracks*), korosi pitting, delaminasi coating, atau *overheating hotspots* sering kali muncul jauh sebelum degradasi fungsional terdeteksi oleh sensor konvensional. Pearson (2024) berargumen bahwa integrasi modul computer vision ke dalam *Predictive Maintenance* (PdM) framework memungkinkan transisi paradigma dari *reactive maintenance* dan *preventive maintenance* berbasis jadwal menjadi *condition-based maintenance* yang adaptif.

Kontribusi paper ini diperkuat oleh penelitian paralel Patel, Bhartiya, dan Gudi (2024) yang dipublikasikan di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431). Meskipun konteks penelitian mereka berfokus pada *Physics-Informed Neural Networks* (PINNs) untuk *Model Predictive Control* (MPC) sistem proses, kesamaan metodologisnya—yaitu embedding domain knowledge ke dalam arsitektur deep learning—menjadi referensi kritis bagi Pearson. Integrasi dua pendekatan ini merepresentasikan tren riset mutakhir di mana *data-driven learning* tidak berdiri sendiri, melainkan harus harmonis dengan *first-principles models* agar menghasilkan sistem yang *interpretable, robust, dan transferable* lintas lini produksi. Secara strategis, kombinasi CNN untuk deteksi anomali visual dan PINN untuk kontrol prediktif proses akan menghasilkan闭环 (*closed-loop*) sistem manufaktur otonom yang mampu men-sensing, men-diagnosing, dan men-mitigating anomali secara real-time.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Klasifikasi Anomali

CNN adalah arsitektur *deep learning* yang dioptimalkan untuk memproses data dengan topologi grid (citra 2D). Pearson (2024) mendasarkan pendekatannya pada varian *Residual CNN* (ResNet) untuk menangani degradasi gradien pada jaringan dalam. Operasi konvolusi diskrit didefinisikan sebagai:

$$
Y[i,j] = (X * K)[i,j] = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} X[i+m, j+n] \cdot K[m,n] + b
$$

di mana $X \in \mathbb{R}^{H \times W \times C}$ adalah tensor input (citra dengan tinggi $H$, lebar $W$, dan jumlah channel $C$), $K \in \mathbb{R}^{M \times N}$ adalah *kernel* konvolusi dengan bobot yang *learnable*, dan $b$ adalah *bias*. Aktivasi non-linear *Rectified Linear Unit* (ReLU) diterapkan secara element-wise:

$$
f(z) = \max(0, z)
$$

Untuk agregasi fitur spasial, *max-pooling* dengan stride $s$ menghasilkan:

$$
P[i,j,c] = \max_{(m,n) \in \mathcal{W}_{i,j}} Y[m,n,c]
$$

dengan $\mathcal{W}_{i,j}$ merupakan *receptive field* pooling.

### 2.2 Residual Connection dan Blok Residual

Untuk mencegah *vanishing gradient*, Pearson (2024) mengadopsi *skip connection* dalam *Residual Block*:

$$
\mathcal{F}(x) = \sigma(W_2 \cdot \sigma(W_1 x + b_1) + b_2) + x
$$

di mana $x$ adalah input blok, $\mathcal{F}(x)$ adalah output, dan $\sigma$ merupakan aktivasi ReLU. Parameter $W_1, W_2$ adalah matriks bobot yang dioptimasi.

### 2.3 Formulasi Loss Function untuk Anomaly Detection

Untuk permasalahan *binary classification* (normal vs. anomali), Pearson menggunakan *Binary Cross-Entropy* (BCE) Loss yang diperluas dengan *Focal Loss* untuk menangani *class imbalance* (anomali jauh lebih jarang daripada kondisi normal):

$$
\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)
$$

di mana $p_t$ adalah probabilitas prediksi kelas yang benar, $\alpha_t \in [0,1]$ adalah *weighting factor* untuk kelas positif, dan $\gamma \geq 0$ adalah *focusing parameter* yang menurunkan loss untuk *easy examples* dan menekankan pada *hard examples*. Rekomendasi Pearson (2024) menggunakan $\gamma = 2$ dan $\alpha_t = 0.75$.

### 2.4 Metrik Evaluasi Kinerja

Pearson (2024) mengevaluasi model menggunakan empat metrik standar:

$$
\text{Precision} = \frac{TP}{TP + FP}
$$

$$
\text{Recall} = \frac{TP}{TP + FN}
$$

$$
F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}
$$

$$
\text{AUC} = \int_{0}^{1} \text{TPR}(\text{FPR}^{-1}(t)) \, dt
$$

di mana $TP$ (*True Positive*), $FP$ (*False Positive*), $FN$ (*False Negative*), $TPR$ (*True Positive Rate*), dan $FPR$ (*False Positive Rate*).

### 2.5 Bridging Theory: Physics-Informed Neural Networks sebagai Referensi Komplementer

Patel, Bhartiya, dan Gudi (2024) memperkenalkan formulasi *Physics-Informed Neural Networks* (PINN) yang secara konseptual relevan dengan pendekatan Pearson. PINN meng-*embed* *governing equations* (misalnya PDE) ke dalam *loss function*:

$$
\mathcal{L}_{\text{PINN}} = \lambda_{\text{data}} \mathcal{L}_{\text{data}} + \lambda_{\text{PDE}} \mathcal{L}_{\text{PDE}} + \lambda_{\text{BC}} \mathcal{L}_{\text{BC}}
$$

di mana $\mathcal{L}_{\text{data}}$ adalah *data mismatch*, $\mathcal{L}_{\text{PDE}}$ adalah *residual* persamaan diferensial parsial:

$$
\mathcal{L}_{\text{PDE}} = \frac{1}{N_r} \sum_{i=1}^{N_r} \left| f\left(x_r^{(i)}, \frac{\partial \hat{u}}{\partial x}, \frac{\partial^2 \hat{u}}{\partial x^2}\right) \right|^2
$$

dan $\mathcal{L}_{\text{BC}}$ adalah *boundary condition mismatch*. Bobot $\lambda$ menyeimbangkan kontribusi setiap term.

### 2.6 Formulasi Model Predictive Control (MPC) Tertanam PINN

MPC menyelesaikan optimisasi berikut pada setiap *time step* $k$:

$$
\min_{u_0, u_1, \dots, u_{N-1}} \sum_{j=0}^{N-1} \ell(x_{k+j}, u_j) + V_f(x_{k+N})
$$

$$
\text{subject to: } x_{k+j+1} = g_{\text{PINN}}(x_{k+j}, u_j), \quad x_{k+j} \in \mathcal{X}, \quad u_j \in \mathcal{U}
$$

di mana $g_{\text{PINN}}$ adalah model dinamika yang didekati oleh jaringan saraf terinformasi fisika. Integrasi konseptual ini menunjukkan bahwa arsitektur CNN Pearson dapat diperluas menjadi *physics-guided CNN* dengan menambahkan term *physical consistency loss* untuk meningkatkan interpretabilitas dan generalisasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari sistem deteksi anomali berbasis CNN mengikuti kerangka *CRISP-DM* (Cross-Industry Standard Process for Data Mining) yang telah disesuaikan untuk konteks pemeliharaan prediktif:

### 3.1 Tahap 1: Akuisisi dan Preprocessing Citra

1. **Image Acquisition**: Menggunakan sensor visual berkualitas industri—seperti kamera *machine vision* (Basler ace 2, FLIR Blackfly), kamera termal (FLIR T1020 dengan sensitivitas < 20 mK), atau *phased array ultrasonic* (Olympus OmniScan SX). Resolusi minimum yang direkomendasikan Pearson (2024) adalah $640 \times 480$ piksel dengan bit depth 12-bit untuk aplikasi inspeksi kritis.
2. **Image Annotation**: Anotasi dilakukan oleh *domain expert* menggunakan tool *CVAT* atau *LabelImg*, dengan standar labeling mengikuti ISO 9001 untuk *quality management* dan ISO/IEC 23053 untuk *AI trustworthiness*.
3. **Preprocessing Pipeline**:
   - *Resizing* ke dimensi standar $224 \times 224$ atau $256 \times 256$ (tergantung arsitektur backbone).
   - Normalisasi: $\tilde{X} = (X - \mu) / \sigma$ dengan $\mu$ dan $\sigma$ sebagai *channel-wise mean* dan *standard deviation* dari ImageNet.
   - *Data augmentation*: rotasi acak $\pm 15°$, *horizontal/vertical flipping*, *brightness/contrast jitter*, *Gaussian noise injection* ($\sigma_n = 0.02$), dan *mixup augmentation*.

### 3.2 Tahap 2: Desain Arsitektur dan Transfer Learning

Pearson (2024) merekomendasikan strategi *transfer learning* dengan backbone pretrained:

| Backbone | Parameter (Juta) | Top-1 Acc (%) | Cocok untuk |
|---|---|---|---|
| ResNet-50 | 25.6 | 76.0 | Citra RGB umum |
| EfficientNet-B3 | 12.0 | 81.7 | Citra termal/defect minor |
| ViT-B/16 | 86.6 | 84.2 | Dataset besar (> 100K) |

Layer *classifier head* disesuaikan dengan:

$$
h_{\theta}(z) = \text{softmax}(W_{\text{fc}} \cdot \text{GAP}(z) + b_{\text{fc}})
$$

di mana $\text{GAP}$ adalah *Global Average Pooling*, dan $W_{\text{fc}}, b_{\text{fc}}$ adalah parameter *fully-connected layer* yang dilatih ulang.

### 3.3 Tahap 3: Pelatihan dan Validasi

- **Optimizer**: Adam dengan *learning rate* awal $\eta_0 = 10^{-4}$ dan *weight decay* $\lambda = 5 \times 10^{-4}$.
- **Learning Rate Scheduler**: *Cosine annealing* dengan $T_0 = 10$ epoch dan $T_{mult} = 2$.
- **Batch Size**: 32–128 tergantung kapasitas GPU.
- **Epochs**: Maksimum 100 dengan *early stopping* (patience = 15 epoch berdasarkan validation loss).
- **Cross-validation**: *Stratified k-fold* dengan $k = 5$.

### 3.4 Tahap 4: Deployment dan Integrasi dengan CMMS

Model yang telah dilatih dikonversi ke format ONNX atau TensorRT untuk inferensi pada *edge device* (NVIDIA Jetson AGX Orin, 275 TOPS). Integrasi dengan *Computerized Maintenance Management System* (CMMS) mengikuti protokol OPC UA dengan:

$$
\text{Alert} = \begin{cases} \text{RED (Critical)} & \text{if } P(\text{anomali}) > 0.85 \\ \text{YELLOW (Warning)} & \text{if } 0.6 < P(\text{anomali}) \leq 0.85 \\ \text{GREEN (Normal)} & \text{if } P(\text{anomali}) \leq 0.6 \end{cases}
$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pabrik baja terintegrasi (*integrated steel mill*) memiliki lini *continuous casting* dengan 12 *segment rollers* yang rentan terhadap *thermal cracking*. Inspeksi manual dilakukan setiap 8 jam dengan rata-rata waktu inspeksi 45 menit per roller dan *false negative rate* historis 22%. Manajemen memutuskan untuk mengimplementasikan sistem deteksi anomali berbasis CNN sesuai kerangka Pearson (2024).

### 4