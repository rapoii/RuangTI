# 2531 — Deteksi Anomali Berbasis Citra pada Peralatan Industri menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance/PdM) telah bertransformasi dari pendekatan konvensional berbasis getaran dan termografi titik-tunggal menuju paradigma *computer vision* berbasis *deep learning*. James Pearson (2024) dalam publikasinya di jurnal *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa integrasi *Convolutional Neural Networks* (CNN) ke dalam lini inspeksi visual peralatan industri—seperti pompa sentrifugal, kompresor, motor listrik, dan bearing—mampu menekan *unplanned downtime* hingga 35–50% sekaligus meningkatkan akurasi deteksi anomali di atas 92% (Pearson, 2024). Urgensi ini diperkuat oleh data McKinsey & Deloitte (2023) yang menunjukkan bahwa pabrik modern kehilangan produktivitas senilai USD 50 miliar per tahun akibat kegagalan peralatan yang tidak terdeteksi dini.

Dalam konteks industri manufaktur 4.0, anomali visual seperti korosi, retakan permukaan, kebocoran pelumas, perubahan warna isolator, dan deformasi mekanik merupakan prekursor kerusakan katastrofik. Pendekatan inspeksi manual memiliki keterbatasan subjektivitas, kelelahan operator, dan throughput rendah (±30 unit/jam), sementara sistem otomatis berbasis CNN mampu memproses lebih dari 2.000 citra per detik pada GPU kelas industri (Pearson, 2024). Pearson (2024) juga menyoroti bahwa tantangan utama terletak pada ketersediaan data *long-tail* (kelas anomali langka), kebutuhan *explainability* untuk kepatuhan ISO 13373, serta integrasi dengan *Enterprise Asset Management* (EAM) seperti SAP PM dan IBM Maximo.

Riset ini berdiri di atas persimpangan dua pilar komputasional modern: arsitektur CNN *state-of-the-art* (ResNet, EfficientNet, Vision Transformer) untuk ekstraksi fitur spasial, dan *Physics-Informed Neural Networks* (PINN) untuk menjaga konsistensi fisik model digital twins. Patel, Bhartiya, dan Gudi (2024) dalam makalah IFAC-PapersOnLine dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa penyematan *physics loss* ke dalam neural network mampu mempertahankan kemampuan generalisasi pada regime operasi di luar distribusi data pelatihan—kondisi yang sangat relevan di lini produksi dengan variasi beban musiman. Sinergi keduanya memungkinkan deteksi anomali yang tidak hanya *data-driven* tetapi juga *physics-grounded*, memenuhi tuntutan standar IEC 62443 untuk keamanan siber pada sistem industri kritis.

Secara ekonomi, implementasi sistem vision-based PdM memberikan *payback period* rata-rata 14–22 bulan untuk fasilitas manufaktur mid-scale (Pearson, 2024). Pada industri semikonduktor, biaya satu jam downtime wafer-fab mencapai USD 1,2 juta, menjadikan ROI sistem deteksi otomatis sangat atraktif. Oleh karena itu, modul ini akan membedah arsitektur, formulasi matematis, dan protokol implementasi yang diperlukan untuk mendeploy solusi tersebut secara robust dan terukur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusi dan Forward Pass CNN

Operasi konvolusi 2D pada lapisan CNN didefinisikan sebagai:

$$
\mathbf{Y}_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} \mathbf{W}_{m,n}^{(l)} \cdot \mathbf{X}_{i+m,\,j+n}^{(l-1)} + b^{(l)}\right)
$$

di mana $\mathbf{X}^{(l-1)}$ adalah *feature map* lapisan sebelumnya, $\mathbf{W}^{(l)}$ adalah kernel konvolusi berukuran $M \times N$, $b^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(x)=\max(0,x)$).

### 2.2 Anomaly Scoring via Autoencoder Rekonstruksi

Pearson (2024) mengusulkan penggunaan *convolutional autoencoder* (CAE) untuk deteksi anomali tanpa pengawasan (unsupervised). Skor anomali didefinisikan sebagai *reconstruction error* piksel-wise:

$$
\mathcal{A}(x) = \frac{1}{HW}\sum_{i=1}^{H}\sum_{j=1}^{W}\left(\mathbf{X}_{i,j}-\hat{\mathbf{X}}_{i,j}\right)^2
$$

dengan $\hat{\mathbf{X}}$ adalah rekonstruksi citra input $\mathbf{X}$ melalui encoder-decoder. Threshold $\tau$ ditentukan secara adaptif menggunakan prinsip Extreme Value Theory (EVT):

$$
\tau = \mu_{\mathcal{A}} + k \cdot \sigma_{\mathcal{A}}
$$

di mana $\mu_{\mathcal{A}}$ dan $\sigma_{\mathcal{A}}$ adalah rata-rata dan standar deviasi skor rekonstruksi pada *validation set* normal, dan $k \in [2.5, 4.0]$ adalah konstanta sensitivitas.

### 2.3 Loss Function Gabungan Data-Physics (PINN)

Berdasarkan kerangka Patel, Bhartiya, dan Gudi (2024), fungsi kerugian total menggabungkan *data loss*, *physics loss*, dan *boundary loss*:

$$
\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}} + \lambda_b \mathcal{L}_{\text{BC}}
$$

dengan:

$$
\mathcal{L}_{\text{data}} = \frac{1}{N}\sum_{i=1}^{N}\left(\hat{y}_i - y_i\right)^2
$$

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{j=1}^{N_p}\left\|\mathcal{N}[u_\theta](x_j,t_j)\right\|^2
$$

di mana $\mathcal{N}[\cdot]$ adalah operator persamaan diferensial parsial (misalnya persamaan panas, Navier-Stokes, atau vibrasi piringan), dan $\lambda_d, \lambda_p, \lambda_b$ adalah hyperparameter bobot (Patel, Bhartiya, & Gudi, 2024). Untuk sistem deteksi anomali pada motor listrik, persamaan fisika yang relevan adalah persamaan vibrasi piringan tipis 2D.

### 2.4 Prediksi Remaining Useful Life (RUL)

Untuk aplikasi pemeliharaan prediktif, Pearson (2024) mengintegrasikan regresor CNN-LSTM dengan model degradasi eksponensial:

$$
\text{RUL}(t) = \alpha \cdot e^{-\beta \cdot S(t)} + \gamma
$$

di mana $S(t)$ adalah *health indicator* berbasis fitur citra, $\alpha, \beta, \gamma$ adalah parameter degradasi yang dipelajari melalui *inverse problem*.

### 2.5 Metrik Evaluasi Kinerja

Untuk pelaporan hasil deteksi, digunakan metrik:

$$
\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2 \cdot \frac{P \cdot R}{P+R}
$$

$$
\text{mAP} = \frac{1}{C}\sum_{c=1}^{C}\text{AP}_c, \quad \text{AUC} = \int_0^1 \text{TPR}(\text{FPR})\, d(\text{FPR})
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem End-to-End

Pearson (2024) merekomendasikan arsitektur lima-lapisan untuk sistem vision-based PdM:

```
┌──────────────────────────────────────────────────────────┐
│ Layer 5: Dashboard & Alert (EAM/SAP PM Integration)      │
├──────────────────────────────────────────────────────────┤
│ Layer 4: MLOps Pipeline (MLflow, Kubernetes, Drift Mon.) │
├──────────────────────────────────────────────────────────┤
│ Layer 3: Model Serving (TensorRT, ONNX Runtime, Triton)  │
├──────────────────────────────────────────────────────────┤
│ Layer 2: Vision Engine (CNN + Physics-Informed Module)   │
├──────────────────────────────────────────────────────────┤
│ Layer 1: Edge Acquisition (IP67 Cameras, Lighting, IoT)   │
└──────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi Standar ISO 13373 & IEC 62443

**Tahap 1 — Akuisisi Data dan Pre-processing:**
1. Instalasi kamera industri *global shutter* resolusi 1920×1080 dengan *frame rate* ≥ 30 fps.
2. Standarisasi pencahayaan menggunakan *diffused LED ring* (5000–6500 K, illuminance 1000–2000 lux).
3. *Image normalization* dengan resizing ke 224×224 atau 256×256 dan normalisasi Z-score per kanal RGB:

$$
\tilde{\mathbf{X}} = \frac{\mathbf{X} - \mu_{\text{ImageNet}}}{\sigma_{\text{ImageNet}}}
$$

4. Augmentasi data: *random rotation* (±15°), *horizontal flip*, *CutMix*, *MixUp*, dan *GAN-based synthesis* untuk kelas minoritas.

**Tahap 2 — Pelatihan Model:**
1. *Transfer learning* dari ImageNet pretrained backbone (EfficientNet-B4 atau ResNet-50).
2. *Freeze backbone* selama 5 epoch awal, kemudian *fine-tune* seluruh jaringan dengan *learning rate* $10^{-4}$ dan optimizer AdamW.
3. *Early stopping* berbasis *validation F1-score* (patience = 15 epoch).
4. *Class weighting* untuk menangani imbalanced dataset:

$$
w_c = \frac{N}{C \cdot N_c}
$$

**Tahap 3 — Validasi dan Sertifikasi:**
1. *K-fold cross-validation* (k = 5) pada dataset historis.
2. Pengujian pada *unseen test set* dengan target: Precision ≥ 0.90, Recall ≥ 0.88, AUC ≥ 0.95.
3. Uji robustness terhadap *adversarial perturbation* (FGSM, PGD) sesuai IEC 62443-4-2.

**Tahap 4 — Deployment dan Monitoring:**
1. Konversi model ke format ONNX atau TensorRT untuk inferensi latensi < 50 ms.
2. Deploy pada edge device (NVIDIA Jetson AGX Orin) dengan fallback ke cloud inference.
3. *Continuous monitoring* menggunakan *data drift detector* (KS-test, PSI ≥ 0.25 men-trigger retraining).

### 3.3 Integrasi dengan Model Predictive Control (MPC)

Patel, Bhartiya, dan Gudi (2024) mengusulkan integrasi *physics-informed* model dengan pengendali MPC untuk optimasi set-point secara real-time:

$$
\min_{\mathbf{u}(t)} \int_{t_0}^{t_0+H_p} \|\mathbf{y}(\tau)-\mathbf{y}_{\text{ref}}(\tau)\|_Q^2 + \|\mathbf{u}(\tau)\|_R^2 \, d\tau
$$

$$
\text{subject to: } \dot{\mathbf{x}} = f_{\theta}(\mathbf{x},\mathbf{u}), \quad \mathbf{x}(t_0) = \mathbf{x}_0, \quad \mathbf{u} \in \mathcal{U}
$$

di mana $f_\theta$ adalah neural network dengan *physics constraint* tertanam (Patel, Bhartiya, & Gudi, 2024).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Inspeksi Bearing Pompa Sentrifugal di Pabrik Petrokimia

**Parameter industri:**
- Objek: 200 unit bearing pompa sentrifugal tipe 6312-2RS
- Laju inspeksi: 10 unit/jam per kamera
- Kerusakan target: *outer race defect*, *inner race defect*, *ball defect*, *cage fracture*
- Dataset: 12.000 citra (8.000 train, 2.000 val, 2.000 test) beresolusi 224×224×3

**Hasil Pelatihan Model CNN (ResNet-50 + CAE Head):**

| Metrik | Nilai | Threshold Industri |
|---|---|---|
| Accuracy | 0.947 | ≥ 0.90 ✓ |
| Precision | 0.932 | ≥ 0.90 ✓ |
| Recall | 0.918 | ≥ 0.88 ✓ |
| F1-Score | 0.925 | ≥ 0.89 ✓ |
| AUC-ROC | 0.