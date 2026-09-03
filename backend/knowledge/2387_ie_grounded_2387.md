# 2387 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan peralatan industri telah mengalami transformasi fundamental dari paradigma reaktif (*run-to-failure*) menuju pendekatan prediktif berbasis data. Menurut Pearson (2024) dalam tulisannya di jurnal peer-review dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), pendekatan konvensional seperti *time-based preventive maintenance* (TBM) dan *condition-based maintenance* (CBM) masih menghadapi keterbatasan signifikan ketika diterapkan pada aset industri kritikal seperti turbin gas, pompa sentrifugal, kompresor, dan sistem perpipaan bertekanan tinggi. Keterbatasan ini terutama muncul karena (1) inspeksi visual manual bersifat subjektif dan tidak dapat di-skalakan, (2) sensor getaran dan akustik memerlukan pemasangan invasif, dan (3) frekuensi inspeksi yang tidak optimal menimbulkan trade-off antara biaya operasional dan risiko *unscheduled downtime*.

Konteks urgensi ekonomi sangat nyata: studi industri估计 melaporkan bahwa biaya *unscheduled downtime* pada industri proses rata-rata mencapai $25.000–$50.000 per jam untuk fasilitas petrokimia menengah, dan dapat melebihi $1 juta per jam pada kilang minyak terintegrasi (Pearson, 2024). Di sisi lain, *over-maintenance* akibat inspeksi terlalu sering juga menimbulkan *maintenance-induced failure* dan pemborosan sumber daya hingga 30% dari total biaya pemeliharaan. Oleh karena itu, integrasi Computer Vision berbasis Deep Learning menawarkan jalur strategis untuk mencapai *zero-touch inspection*, di mana citra permukaan peralatan dianalisis secara otomatis oleh algoritma untuk mendeteksi anomali seperti retakan, korosi, *spalling*, kebocoran, dan misalignment.

Pearson (2024) mengusulkan kerangka Convolutional Neural Network (CNN) yang di-fine-tune dari arsitektur *pre-trained* (transfer learning) untuk mendeteksi anomali multi-kelas pada citra peralatan industri. Pendekatan ini mengatasi dua tantangan utama: (a) keterbatasan data citra anomali yang biasanya tidak seimbang (*imbalanced dataset*), dan (b) kebutuhan komputasi inferensi real-time pada lini produksi. Pelengkap penting datang dari Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) yang menunjukkan bahwa arsitektur hybrid *Physics-Informed Neural Networks* (PINNs) dapat diintegrasikan dengan *Model Predictive Control* (MPC) untuk sistem proses, memberikan konteks bahwa integrasi *physics-based* constraint ke dalam jaringan saraf semakin relevan dalam domain teknik industri modern. Sinergi kedua pendekatan ini — vision-based detection dan physics-informed control — merepresentasikan frontier baru dalam *smart manufacturing*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

CNN adalah kelas jaringan saraf tiruan feed-forward yang dioptimalkan untuk data grid-like (citra 2D atau 3D). Unit fundamental adalah operasi konvolusi 2D:

$$(f * k)(i, j) = \sum_{m=0}^{M-1}\sum_{n=0}^{N-1} f(i+m, j+n) \cdot k(m, n)$$

di mana $f \in \mathbb{R}^{H \times W}$ adalah citra input, $k \in \mathbb{R}^{M \times N}$ adalah kernel filter (learnable weight), dan $(i,j)$ adalah indeks spasial output *feature map*. Setelah konvolusi, *bias* ditambahkan dan fungsi aktivasi non-linear diterapkan. Pearson (2024) menggunakan **Rectified Linear Unit (ReLU)** sebagai default:

$$\sigma_{\text{ReLU}}(z) = \max(0, z)$$

Untuk lapisan klasifikasi akhir, digunakan **softmax** untuk probabilitas multi-kelas:

$$P(y = c \mid \mathbf{x}) = \frac{e^{z_c}}{\sum_{k=1}^{C} e^{z_k}}, \quad c \in \{1, 2, \ldots, C\}$$

### 2.2 Fungsi Loss dan Optimasi

Untuk deteksi anomali sebagai masalah klasifikasi biner (anomali vs. normal), fungsi loss yang digunakan adalah **Binary Cross-Entropy (BCE)**:

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1 - y_i)\log(1 - \hat{y}_i)\right]$$

di mana $y_i \in \{0,1\}$ adalah label ground-truth dan $\hat{y}_i \in [0,1]$ adalah probabilitas prediksi. Pearson (2024) menunjukkan bahwa pada dataset industri yang *imbalanced* (rasio normal:anomali ≈ 9:1), penggunaan *focal loss* lebih superior:

$$\mathcal{L}_{\text{focal}} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

di mana $\alpha_t$ adalah *class weighting factor* dan $\gamma \geq 2$ adalah *focusing parameter* yang menekan loss untuk sampel well-classified dan memfokuskan learning pada *hard examples*. Optimasi parameter $\theta$ dilakukan dengan *Adam optimizer*:

$$\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

dengan *learning rate* $\eta$, momen pertama $\hat{m}_t$, momen kedua $\hat{v}_t$, dan $\epsilon = 10^{-8}$.

### 2.3 Transfer Learning

Karena data anomali industri langka, Pearson (2024) menggunakan pendekatan **transfer learning** dari backbone yang telah dilatih pada ImageNet (ResNet-50 atau EfficientNet-B0). Formulasi transfer learning adalah:

$$\theta^* = \arg\min_{\theta} \mathcal{L}_{\text{task}}(f_{\theta_L \circ \theta_P}(\mathbf{x}), y)$$

di mana $\theta_P$ adalah parameter pre-trained (dibekukan atau *fine-tuned* dengan learning rate kecil), $\theta_L$ adalah parameter lapisan klasifikasi baru yang dilatih dari awal.

### 2.4 Physics-Informed Neural Networks (PINNs) — Konteks Pendukung

Patel, Bhartiya, dan Gudi (2024) merumuskan PINN sebagai neural network $u_{\theta}(x,t)$ yang memenuhi *governing PDE* dengan menyertakan *physics residual* ke dalam loss function:

$$\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda_{\text{phy}} \mathcal{L}_{\text{physics}}$$

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_r}\sum_{i=1}^{N_r}\left\|\mathcal{R}\left[u_{\theta}(x_i, t_i)\right]\right\|^2$$

di mana $\mathcal{R}[\cdot]$ adalah *operator diferensial* dari PDE (misalnya persamaan panas atau reaksi-diffusi) dan $\lambda_{\text{phy}}$ adalah bobot regularisasi. Integrasi kedua kerangka ini pada lini industri memungkinkan sistem *closed-loop*: CNN mendeteksi anomali visual → PINN-MPC menyesuaikan parameter kontrol proses untuk mencegah degradasi lebih lanjut.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menyusun SOP implementasi sebagai berikut:

### 3.1 Akuisisi Data Citra
- **Resolusi citra:** minimal $640 \times 480$ piksel (idealnya $1920 \times 1080$).
- **Illumination:** pencahayaan LED ring diffuse (CRI ≥ 90) untuk konsistensi.
- **Standar referensi:** ISO 9001:2015 untuk dokumentasi mutu, ASTM E165 untuk *liquid penetrant inspection* sebagai pembanding ground-truth.
- **Frekuensi sampling:** 1 citra per 4 jam untuk aset kritikal, 1 citra per 24 jam untuk aset sekunder.

### 3.2 Preprocessing Pipeline
1. **Resize** ke $224 \times 224$ (standar input ResNet).
2. **Normalization** piksel: $x_{\text{norm}} = \frac{x - \mu}{\sigma}$ dengan $\mu, \sigma$ dari statistik ImageNet.
3. **Augmentasi data:** rotasi (±15°), flip horizontal, *brightness adjustment* (±20%), *Gaussian noise injection* ($\sigma = 0.01$).
4. **Region of Interest (ROI) cropping** menggunakan *bounding box annotation* dari inspektur ahli.

### 3.3 Arsitektur Sistem (Diagram Alir)

```
[Citra Inspeksi] → [Preprocessing] → [ResNet-50 Backbone] → [Global Average Pooling]
       ↓                                                              ↓
[Anomali Terdeteksi] ← [Sigmoid/Softmax] ← [Fully Connected Layer (256 → 1)]
       ↓
[Alert ke CMMS] → [Work Order Generation] → [MPC Recalibration via PINN]
```

### 3.4 Evaluasi dan Validasi
- **K-fold cross-validation** dengan $k = 5$.
- **Confusion matrix** dihitung pada *held-out test set* (20% data).
- **Threshold tuning** pada *precision-recall curve* untuk optimasi sesuai *business cost* (biaya false negative vs. false positive).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario
Sebuah pabrik petrokimia memiliki 50 pompa sentrifugal. Inspeksi manual memerlukan 30 menit per unit. Tim teknik ingin mengotomasi deteksi anomali casing pompa (retakan, korosi, kebocoran seal).

**Parameter input:**
- Jumlah citra pelatihan: $N = 5{,}000$ (4,500 normal, 500 anomali).
- Arsitektur: ResNet-50 pre-trained, fine-tuned 10 lapisan akhir.
- Epochs: $E = 30$, batch size $B = 32$.
- Learning rate: $\eta = 10^{-4}$ dengan scheduler *cosine annealing*.

### 4.2 Perhitungan Loss dan Akurasi

**Langkah 1 — Inisialisasi bobot:**
Inisialisasi He: $W \sim \mathcal{N}\left(0, \sqrt{\frac{2}{n_{\text{in}}}}\right)$ dengan $n_{\text{in}} = 2048$ untuk lapisan dense pertama, sehingga $\sigma_W = \sqrt{2/2048} \approx 0.0313$.

**Langkah 2 — Forward pass pada satu batch (32 sampel):**
Misalkan setelah 10 epoch, model menghasilkan output $\hat{y}$ untuk 32 sampel dengan 6 anomali dan 26 normal. BCE loss dihitung:

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{32}\left[\sum_{i \in \text{anom}} \log(\hat{y}_i) + \sum_{i \in \text{normal}} \log(1 - \hat{y}_i)\right]$$

Dengan asumsi $\hat{y}_i = 0.92$ untuk anomali dan $1 - \hat{y}_i = 0.88$ untuk normal:

$$\mathcal{L}_{\text{BCE}} \approx -\frac{1}{32}\left[6 \log(0.92) + 26 \log(0.88)\right] = -\frac{1}{32}\left[6(-0.0834) + 26(-0.1278)\right]$$
$$= -\frac{1}{32}\left[-0.500 - 3.323\right] = \frac{3.823}{32} \approx 0.119$$

**Langkah 3 — Confusion matrix hipotetis pada test set (1,000 citra):**

|  | Prediksi Anomali | Prediksi Normal |
|---|---|---|
| **Aktual Anomali** | TP = 92 | FN = 8 |
| **Aktual Normal** | FP = 18 | TN = 882 |

- **Precision** $= \frac{TP}{TP+FP} = \frac{92}{110} = 0.836$ (83.6%)
- **Recall (Sensitivity)** $= \frac{TP}{TP+FN} = \frac{92}{100} = 0.920$ (92.0%)
- **Specificity** $= \frac{TN}{TN+FP} = \frac{882}{900} = 0.980$ (98.0%)
- **F1-Score** $= 2 \cdot \frac{P \cdot R}{P + R} = 2 \cdot \frac{0.836 \times 0.920}{1.756} = 0.876$
- **Accuracy** $= \frac{92 + 882}{1000} = 0.974$ (97.4%)

### 4.3 Perhitungan Nilai Ekonomi

**Penghematan biaya inspeksi:**
- Inspeksi manual: 50 pompa × 30 menit × $50/jam = $1,250 per siklus.
- Inspeksi otomatis: 50 pompa × 2 menit (akuisisi + inferensi) × $30/jam = $50 per sik