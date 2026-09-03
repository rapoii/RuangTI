# 2963 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance/PdM) telah bertransformasi dari pendekatan konvensional berbasis getaran dan termografi menjadi paradigma berbasis *computer vision* yang memanfaatkan *deep learning*. Pearson (2024) dalam tulisannya di jurnal *peer-reviewed* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyoroti bahwa kegagalan mendadak pada peralatan rotasi seperti pompa sentrifugal, kompresor, motor listrik, dan turbin menyebabkan kerugian ekonomi signifikan — secara global, unplanned downtime diestimasi merugikan industri manufaktur hingga USD 50 miliar per tahun (sitasi internal Pearson, 2024). Pearson menegaskan bahwa inspeksi visual yang dilakukan operator memiliki tiga kelemahan fatal: subyektivitas tinggi (variabilitas antar-inspektor dapat mencapai 30–40%), keterbatasan akses pada area berbahaya (misalnya ruang bakar boiler), dan kelelahan kognitif yang menurunkan akurasi di shift malam. 

Urgensi teknis makin terasa ketika korporasi manufaktur mengadopsi arsitektur *Cyber-Physical Systems* (CPS) dan *Digital Twin* yang menuntut data visual berkualitas tinggi secara *real-time*. Pearson (2024) menunjukkan bahwa *Convolutional Neural Networks* (CNN) mampu meniru dan melampaui persepsi visual manusia dengan cara mengekstraksi fitur hierarkis dari citra tanpa rekayasa fitur manual. Studi tersebut menggunakan arsitektur *transfer learning* dari backbone pretrained (ResNet-50, EfficientNet-B3) yang disesuaikan untuk mendeteksi anomali permukaan seperti retak (crack), korosi, kebocoran (leak), deformasi, dan kontaminasi pada komponen kritis. Komplementer dengan itu, Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memaparkan bahwa integrasi *Physics-Informed Neural Networks* (PINN) ke dalam kerangka *Model Predictive Control* (MPC) memungkinkan prediksi dinamika proses yang konsisten dengan hukum kekekalan massa, energi, dan momentum, mengurangi kebutuhan data eksperimen hingga 60%. Gabungan kedua pendekatan — deteksi anomali visual untuk *conditional monitoring* dan PINN-MPC untuk *process control* — menjadi pilar Industry 5.0 yang human-centric dan resilient. Konteks nasional Indonesia juga relevan: dengan lebih dari 30.000 perusahaan manufaktur skala menengah-besar dan tingkat adopsi PdM yang masih di bawah 15% (estimasi McKinsey Indonesia 2023), gap implementasi teknologi ini merupakan peluang efisiensi yang sangat besar.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Anomali

Model Pearson (2024) menggunakan CNN dengan operasi konvolusi sebagai building block. Untuk citra input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$, fitur pada posisi $(i, j)$ di channel ke-$k$ dihitung sebagai:

$$Z^{(l)}_{i,j,k} = \sigma\left(\sum_{u=0}^{F-1}\sum_{v=0}^{F-1}\sum_{c=0}^{C_{l-1}-1} W^{(l)}_{u,v,c,k} \cdot X^{(l-1)}_{i+u, j+v, c} + b^{(l)}_k\right)$$

di mana $W^{(l)}_{u,v,c,k}$ adalah kernel konvolusi dengan ukuran $F \times F$, $b^{(l)}_k$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear seperti ReLU: $\sigma(z) = \max(0, z)$. Setelah beberapa blok konvolusi dan pooling, vektor fitur $\mathbf{f} \in \mathbb{R}^{d}$ dimasukkan ke *fully-connected layer* untuk menghasilkan probabilitas kelas:

$$\hat{y}_k = \frac{\exp(z_k)}{\sum_{j=1}^{K} \exp(z_j)}, \quad k = 1, \ldots, K$$

di mana $K$ adalah jumlah kelas kondisi (normal, crack, corrosion, leak, deformation, contamination).

### 2.2 Fungsi Loss dan Optimasi

Untuk dataset anomali yang sangat *imbalanced* (rasio normal:anomali ≈ 100:1), Pearson menggunakan *focal loss* sebagai modifikasi cross-entropy:

$$\mathcal{L}_{\text{focal}} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas benar, $\alpha_t$ adalah *class weight*, dan $\gamma \geq 2$ adalah *focusing parameter* yang menekan loss untuk kelas mudah dan memperkuat pada kelas sulit (anomali minor). Pelatihan dilakukan dengan optimizer Adam:

$$\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

dengan $\hat{m}_t$ dan $\hat{v}_t$ sebagai estimasi momen pertama dan kedua yang dikoreksi bias, $\eta$ adalah *learning rate* (umumnya $10^{-4}$), dan $\epsilon = 10^{-8}$ untuk stabilitas numerik.

### 2.3 Metrik Evaluasi Kinerja

Untuk sistem deteksi anomali, Pearson (2024) menggunakan metrik berbasis *confusion matrix*:

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}, \quad F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

di mana $TP, FP, FN$ berturut-turut adalah *true positive*, *false positive*, *false negative*. Threshold optimal dipilih dengan memaksimalkan *Youden's J statistic*: $J = \text{Recall} + \text{Specificity} - 1$.

### 2.4 Integrasi dengan PINN-MPC (Patel et al., 2024)

Patel et al. (2024) mengusulkan kerangka hibrida di mana PINN memastikan bahwa prediksi state $\hat{x}(t)$ memenuhi constraint fisik. Residual fisika didefinisikan sebagai:

$$\mathcal{R}_{\text{phys}}(t) = \frac{d\hat{x}}{dt} - f(\hat{x}(t), u(t); \theta)$$

di mana $f(\cdot)$ adalah dinamika sistem (misalnya ODE dari proses kimia). Total loss adalah:

$$\mathcal{L}_{\text{total}} = \lambda_{\text{data}} \mathcal{L}_{\text{data}} + \lambda_{\text{phys}} \|\mathcal{R}_{\text{phys}}\|^2_2 + \lambda_{\text{IC}} \|\hat{x}(0) - x_0\|^2_2$$

dengan bobot $\lambda_{\text{data}}, \lambda_{\text{phys}}, \lambda_{\text{IC}}$ yang di-tune secara adaptif menggunakan *soft attention* (Patel et al., 2024). Dalam konteks integrasi dengan modul deteksi anomali visual, output deteksi anomali $a(t) \in \{0, 1\}$ berfungsi sebagai *disturbance estimator* yang dimasukkan ke dalam fungsi biaya MPC:

$$J_{\text{MPC}} = \sum_{k=0}^{N-1} \left[(x_k - x_{\text{ref}})^\top Q (x_k - x_{\text{ref}}) + u_k^\top R u_k\right] + a(t) \cdot \rho$$

di mana $\rho$ adalah penalty akibat anomali terdeteksi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti protokol tujuh-tahap yang selaras dengan ISO 13373-*Condition monitoring* dan ISO/IEC 23053 untuk *AI trustworthiness*:

```
┌──────────────────────────────────────────────────────────┐
│  Tahap 1: Akuisisi Data Citra (IP Camera / Drone / IR)   │
│            ↓                                             │
│  Tahap 2: Pre-processing (Resize 224×224, Normalize,     │
│            Augmentasi: rotasi, flip, color jitter)        │
│            ↓                                             │
│  Tahap 3: Anotasi oleh Domain Expert (Label Studio/CVAT) │
│            ↓                                             │
│  Tahap 4: Training CNN (Transfer Learning + Focal Loss)  │
│            ↓                                             │
│  Tahap 5: Validasi (K-fold CV, Confusion Matrix, ROC)    │
│            ↓                                             │
│  Tahap 6: Deployment ke Edge Device (NVIDIA Jetson)      │
│            ↓                                             │
│  Tahap 7: Integrasi ke CMMS & PINN-MPC (Patel et al.)   │
└──────────────────────────────────────────────────────────┘
```

**Tahap 1** — Akuisisi: Kamera IP resolusi minimal 1920×1080 dengan frame rate 30 fps dipasang pada *robot crawler* atau *pan-tilt-zoom mount*. Untuk area bersuhu tinggi, digunakan kamera termal FLIR (rentang 8–14 μm). **Tahap 2** — Pre-processing: Citra di-resize ke 224×224 (standar input ResNet), dinormalisasi ke $[0,1]$ dengan mean $[0.485, 0.456, 0.406]$ dan std $[0.229, 0.224, 0.225]$ (ImageNet stats). Augmentasi dilakukan dengan *Albumentations library*: rotasi ±30°, flip horizontal/vertikal, brightness ±20%, dan *CutMix* untuk meningkatkan robustnes. **Tahap 3** — Anotasi: Minimal 3 anotator independen, dengan Cohen's Kappa $\kappa \geq 0.75$ sebagai ambang konsensus. **Tahap 4** — Training: Backbone dibekukan (*freeze*) pada 10 epoch pertama lalu di-*fine-tune* dengan learning rate rendah ($10^{-5}$). **Tahap 5** — Validasi: 5-fold cross-validation dengan stratifikasi per kelas. **Tahap 6** — Deployment: Model dikonversi ke ONNX atau TensorRT untuk inference latency <50 ms pada Jetson Orin. **Tahap 7** — Integrasi: Output anomali dikirim via MQTT ke *Computerized Maintenance Management System* (CMMS) seperti SAP PM atau IBM Maximo, sekaligus menjadi umpan balik bagi PINN-MPC.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik petrokimia di Cilegon memiliki 24 pompa sentrifugal kritis (debit 250 m³/jam, head 50 m). Tim rekayasa ingin mengimplementasikan deteksi anomali visual untuk mengurangi unplanned downtime yang rata-rata 18 jam/tahun per pompa.

**Langkah 1: Pengumpulan Data**
Total citra terkumpul: $N_{\text{total}} = 24{,}000$, dengan distribusi:
- Normal: $N_0 = 20{,}000$ (83.3%)
- Crack: $N_1 = 1{,}500$ (6.25%)
- Corrosion: $N_2 = 1{,}200$ (5.0%)
- Leak: $N_3 = 800$ (3.33%)
- Deformation: $N_4 = 500$ (2.08%)

**Langkah 2: Perhitungan Class Weight**
Untuk focal loss, bobot kelas dihitung sebagai:

$$\alpha_k = \frac{1}{\ln\left(\kappa + N_k\right)}, \quad \kappa = 1.02$$

Diperoleh:
- $\alpha_0 = 1/\ln(1.02 + 20000) = 0.0855$
- $\alpha_1 = 1/\ln(1.02 + 1500) = 0.1141$
- $\alpha_2 = 1/\ln(1.02 + 1200) = 0.1187$
- $\alpha_3 = 1/\ln(1.02 + 800) = 0.1260$
- $\alpha_4 = 1/\ln(1.02 + 500) = 0.1343$

Bobot dinormalisasi: $\alpha_k' = \alpha_k / \sum_j \alpha_j$, sehingga $\alpha_0' = 0.147$, $\alpha_1' = 0.196$, $\alpha_2' = 0.204$, $\alpha_3' = 0.217$, $\alpha_4' = 0.231$.

**Langkah 3: Confusion Matrix Hasil Validasi**
Setelah 50 epoch pelatihan, hasil pada test set ($N_{\text{test}} = 4{,}800$):

| Aktual \ Pred | Normal | Crack | Corrosion | Leak | Deform |
|---|---|---|---|---|---|
| Normal (4000) | 3952 | 18 | 14 | 10 | 6 |
| Crack (300) | 6 | 276 | 8 | 7 | 3 |
| Corrosion (240) | 4 | 7 | 218 | 8 | 3 |
| Leak (160) | 3 | 4 | 6 | 142 | 5 |
| Deform (100) | 2 | 3 |