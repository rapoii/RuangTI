# 2275 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif, serta Integrasi Physics-Informed Neural Networks pada Model Predictive Control Sistem Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses yang berlangsung di era Industri 4.0 menuntut paradigma baru dalam pengelolaan aset fisik. Kerusakan mendadak (*unplanned downtime*) pada peralatan kritis—seperti pompa sentrifugal, kompresor, motor induksi, dan bejana tekan—meny造成了 kerugian ekonomi sangat signifikan. Studi-studi referensi industri memperkirakan biaya downtime tak terencana pada manufaktur global mencapai kisaran USD 50 miliar per tahun, dengan satu jam停止 produksi pada industri petrokimia dapat menimbulkan kerugian hingga USD 500.000 (Pearson, 2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)). Pearson (2024) menekankan bahwa metode pemeliharaan tradisional berbasis jadwal waktu (*time-based maintenance*) maupun inspeksi visual manual memiliki dua kelemahan fundamental: (i) subjektivitas pengamat manusia yang menyebabkan variabilitas tinggi, dan (ii) ketidakmampuan menangkap degradasi *sub-surface* atau mikroskopis pada tahap awal.

Sebagai respons, Pearson (2024) mengusulkan arsitektur Convolutional Neural Network (CNN) yang dilatih secara end-to-end untuk melakukan deteksi anomali berbasis citra—baik citra可见 (RGB), termal (infrared), maupun citra getaran yang telah dikonversi menjadi representasi spektrogram. Pendekatan ini memungkinkan transisi dari paradigma *corrective* ke *predictive maintenance*, di mana keputusan intervensi diambil berdasarkan probabilitas anomali yang dipelajari dari ribuan citra historis. Di sisi komplementer, Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa pada tingkat pengendalian proses, integrasi Physics-Informed Neural Networks (PINNs) ke dalam Model Predictive Control (MPC) mampu menggantikan model first-principles yang sulit diidentifikasi, sekaligus mempertahankan kepatuhan terhadap hukum fisika seperti konservasi massa, energi, dan momentum. Kombinasi keduanya merepresentasikan kerangka cyber-physical system (CPS) yang utuh:感知 (sensing) melalui CNN dan actuation (kontrol) melalui PINN-MPC.

Urgensi ekonomi semakin kuat ketika memperhitungkan Mean Time Between Failures (MTBF) peralatan berusia di atas 15 tahun, di mana kurva bathtub failure menunjukkan laju kegagalan naik eksponensial. Implementasi CNN untuk deteksi anomali kualitatif—dikombinasikan dengan MPC yang adaptif terhadap dinamika proses—menjadi investasi yang *high-return* bagi fasilitas yang beroperasi pada margin keuntungan tipis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Klasifikasi Anomali

CNN untuk deteksi anomali pada dasarnya merupakan fungsi pemetaan nonlinier $f_{\theta}: \mathbb{R}^{H \times W \times C} \rightarrow [0,1]$, di mana $\theta$ adalah himpunan parameter (kernel, bias), $H \times W$ adalah dimensi citra, dan $C$ adalah jumlah kanal (RGB = 3, termal = 1). Operasi konvolusi dua-dimensi pada lapisan konvolusional ke-$l$ didefinisikan sebagai:

$$
\mathbf{Z}^{[l]}_{i,j,k} = \sum_{m=0}^{M-1}\sum_{n=0}^{N-1} \mathbf{W}^{[l]}_{m,n,k} \cdot \mathbf{A}^{[l-1]}_{i+m,\,j+n,\,c} + b^{[l]}_k
$$

dengan $\mathbf{W}^{[l]} \in \mathbb{R}^{M \times N \times C \times K}$ adalah bank $K$ filter, $\mathbf{A}^{[l-1]}$ adalah *feature map* lapisan sebelumnya, dan $b^{[l]}_k$ adalah bias untuk filter ke-$k$. Aktivasi nonlinier menggunakan ReLU untuk隐含层 dan sigmoid untuk output biner:

$$
\text{ReLU}(z) = \max(0, z), \qquad \sigma(z) = \frac{1}{1+e^{-z}}
$$

Fungsi kerugian untuk klasifikasi anomali biner (normal vs. anomali) adalah *binary cross-entropy*:

$$
\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\Big[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\Big]
$$

di mana $y_i \in \{0,1\}$ adalah label ground-truth dan $\hat{y}_i = \sigma(z_i)$ adalah prediksi model.

### 2.2 Skor Anomali Berbasis Autoencoder Konvolusional

Untuk deteksi anomali tanpa label (*unsupervised*), Pearson (2024) menggunakan autoencoder konvolusional dengan skor rekonstruksi:

$$
s(\mathbf{x}) = \frac{1}{HWC}\sum_{i,j,c}\big(\mathbf{x}_{i,j,c} - \hat{\mathbf{x}}_{i,j,c}\big)^2, \qquad \hat{\mathbf{x}} = D_{\phi}(E_{\psi}(\mathbf{x}))
$$

dengan $E_{\psi}$ adalah *encoder*, $D_{\phi}$ adalah *decoder*, dan keputusan anomali ditentukan oleh阈值 $\tau$:

$$
\text{anomali} = \begin{cases} 1 & \text{jika } s(\mathbf{x}) > \tau \\ 0 & \text{jika } s(\mathbf{x}) \leq \tau \end{cases}
$$

### 2.3 Physics-Informed Neural Networks untuk MPC

Patel dkk. (2024) memformulasikan PINN sebagai jaringan $\hat{u}_{\theta}(x,t)$ yang meminimalkan gabungan tiga komponen kerugian:

$$
\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{PDE}} + \lambda_b \mathcal{L}_{\text{BC/IC}}
$$

di mana $\mathcal{L}_{\text{PDE}}$ adalah residual dari persamaan diferensial parsial (misalnya, persamaan adveksi-difusi reaktor):

$$
\mathcal{L}_{\text{PDE}} = \frac{1}{N_r}\sum_{i=1}^{N_r}\Big|\frac{\partial \hat{u}_{\theta}}{\partial t} + v\frac{\partial \hat{u}_{\theta}}{\partial x} - D\frac{\partial^2 \hat{u}_{\theta}}{\partial x^2} - R(\hat{u}_{\theta})\Big|^2
$$

Fungsi biaya MPC dengan horizon prediksi $N_p$ adalah:

$$
J = \sum_{k=0}^{N_p-1}\Big[(\mathbf{x}_k - \mathbf{x}_{ref})^\top \mathbf{Q}(\mathbf{x}_k - \mathbf{x}_{ref}) + \mathbf{u}_k^\top \mathbf{R}\, \mathbf{u}_k\Big] + (\mathbf{x}_{N_p}-\mathbf{x}_{ref})^\top \mathbf{P}\,(\mathbf{x}_{N_p}-\mathbf{x}_{ref})
$$

di mana $\mathbf{Q}, \mathbf{R}, \mathbf{P}$ adalah matriks pembobot状态 (state), masukan (input), dan terminal. Hukum dinamika proses $\mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k)$ diganti dengan prediktor PINN $\hat{\mathbf{x}}_{k+1} = \hat{f}_{\theta}(\mathbf{x}_k, \mathbf{u}_k)$ (Patel dkk., 2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi CNN Anomaly Detection (berdasarkan Pearson, 2024)

```
[1] Akuisisi Data Citra
    ├─ Termal (FLIR/Infrared, 640×480, 8-14 μm)
    ├─ RGB (kamera industri IP67, 1920×1080)
    └─ Vibrasi-as-image (STFT spectrogram, 224×224)
         ↓
[2] Preprocessing
    ├─ Resize ke 224×224 (standar ImageNet)
    ├─ Normalisasi: x ← (x - μ)/σ
    ├─ Augmentasi: flip, rotasi ±15°, brightness ±20%
    └─ Labeling: normal / crack / corrosion / misalignment
         ↓
[3] Arsitektur CNN
    ├─ Backbone: ResNet-50 pre-trained (transfer learning)
    ├─ Head: GlobalAveragePooling → Dense(128, ReLU) → Dropout(0.5) → Dense(1, Sigmoid)
    └─ Optimizer: Adam, lr=1e-4, batch=32, epochs=50
         ↓
[4] Validasi & Deploy
    ├─ 5-fold cross-validation
    ├─ Threshold optimization (Youden's J statistic)
    └─ Integrasi ke CMMS (SAP PM, IBM Maximo) via REST API
```

### 3.2 SOP Integrasi PINN-MPC (berdasarkan Patel dkk., 2024)

1. **Identifikasi dinamika proses:** Tentukan PDE/ODE governing equations (misal: CSTR dengan reaksi Arrhenius $r = k_0 e^{-E/RT}C_A$).
2. **Sampling data:** Kumpulkan pasangan $(\mathbf{x}_k, \mathbf{u}_k)$ dari histori operasi, ukuran $N_d \geq 1000$.
3. **Training PINN:** Bangun MLP dengan 4 hidden layer × 64 neuron, aktivasi tanh; bobot $\lambda_d = \lambda_p = 1$.
4. **Formulasi QP MPC:** Diskretisasi horizon $N_p = 20$, bobot $\mathbf{Q} = \text{diag}(10, 1)$ (komposisi, suhu), $\mathbf{R} = 0{,}1$.
5. **Real-time execution:** Solve QP pada edge controller (PLC + NVIDIA Jetson), periode