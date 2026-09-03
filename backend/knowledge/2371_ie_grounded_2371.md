# 2371 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Sektor manufaktur global menghadapi tantangan strategis berupa peningkatan *mean time between failures* (MTBF) dan penurunan *unscheduled downtime* yang secara agregat menimbulkan kerugian produktivitas hingga USD 50 miliar per tahun pada industri proses kontinyu (Pearson, 2024). Dalam konteks transformasi industri 4.0, deteksi anomali berbasis citra (*image-based anomaly detection*) muncul sebagai pendekatan transformatif yang menggantikan paradigma inspeksi visual manual yang bersifat subyektif,间歇 (terputus-putus), dan rentan terhadap *human error*. Pearson (2024) dalam studinya di *Peer-Reviewed Journal* menegaskan bahwa integrasi Convolutional Neural Networks (CNN) ke dalam arsitektur pemeliharaan prediktif memungkinkan ekstraksi fitur hierarkis secara otomatis dari citra permukaan peralatan, citra termal, maupun citra akustik-visual, sehingga menghasilkan *classification latency* di bawah 200 milidetik per frame pada lini produksi dengan *throughput* tinggi.

Urgensi ekonomis pendekatan ini diperkuat oleh data industri yang menunjukkan bahwa biaya pemeliharaan reaktif 3–5 kali lebih tinggi dibandingkan pemeliharaan prediktif berbasis kondisi (*condition-based maintenance*). Pearson (2024) melakukan studi pada peralatan kritis seperti pompa sentrifugal, kompresor reciprocating, motor listrik, dan gearbox, di mana kegagalan bearing, misalignment, dan korosi permukaan menjadi modus kegagalan dominan. Pendekatan CNN menggantikan metode *handcrafted feature extraction* (misalnya Histogram of Oriented Gradients, Local Binary Patterns) yang membutuhkan rekayasa fitur manual dan tidak robust terhadap variasi iluminasi, oklusi, maupun perubahan tekstur akibat degradasi material.

Dari perspektif sistem, paper ini beresonansi kuat dengan kerangka *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINN) yang dikembangkan oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine*. Keduanya membentuk continuum inteligensi: CNN bertugas melakukan *perception* dan *fault classification* terhadap anomali, sementara PINN-MPC melakukan *state estimation* dan *control trajectory optimization* untuk mengompensasi degradasi yang terdeteksi. Dalam industri proses kimia, integrasi keduanya memungkinkan *closed-loop predictive maintenance* di mana anomali yang dideteksi secara visual langsung diterjemahkan menjadi variabel manipulasi pada *receding horizon controller* dengan horizon prediksi 24–72 jam.

Konteks operasional semakin relevan ketika memperhitungkan fenomena *data imbalance* pada dataset anomali industri, di mana rasio kelas normal terhadap defective dapat mencapai 1000:1. Pearson (2024) mengusulkan arsitektur Siamese-Triplet CNN dengan *contrastive loss* untuk menangani masalah ini, sekaligus mempertahankan *false positive rate* di bawah 1,5% yang menjadi ambang batas kritis untuk *operator trust* dan *alarm fatigue mitigation*. Pendekatan ini merupakan evolusi dari sistem SCADA konvensional yang hanya mengandalkan threshold-based alarms dengan *receiver operating characteristic* yang suboptimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) mengusulkan arsitektur *Deep Residual Convolutional Autoencoder* (DR-CAE) sebagai backbone deteksi anomali. Encoder memetakan citra input $\mathbf{x} \in \mathbb{R}^{H \times W \times C}$ ke dalam *latent representation* $\mathbf{z} \in \mathbb{R}^{d}$, sementara decoder merekonstruksi $\hat{\mathbf{x}}$. Anomali didefinisikan sebagai *reconstruction error* yang melebihi ambang batas $\tau$:

$$\mathcal{L}_{\text{recon}}(\mathbf{x}, \hat{\mathbf{x}}) = \frac{1}{H \cdot W \cdot C} \sum_{i=1}^{H} \sum_{j=1}^{W} \sum_{k=1}^{C} \left( x_{ijk} - \hat{x}_{ijk} \right)^2$$

Fungsi keputusan anomali dinyatakan sebagai:

$$y = \begin{cases} 1 & \text{(anomali)} \quad \text{jika } \mathcal{L}_{\text{recon}} > \tau \\ 0 & \text{(normal)} \quad \text{jika } \mathcal{L}_{\text{recon}} \leq \tau \end{cases}$$

### 2.2 Contrastive Loss untuk Few-Shot Anomaly Detection

Mengingat kelangkaan sampel anomali pada data historis, Pearson (2024) mengadopsi *triplet loss* untuk pembelajaran metrik embedding:

$$\mathcal{L}_{\text{triplet}}(\mathbf{x}_a, \mathbf{x}_p, \mathbf{x}_n) = \max\left(0, \; d(f(\mathbf{x}_a), f(\mathbf{x}_p)) - d(f(\mathbf{x}_a), f(\mathbf{x}_n)) + \alpha \right)$$

di mana $f(\cdot)$ adalah fungsi embedding, $d(\cdot,\cdot)$ adalah jarak Euclidean, dan $\alpha$ adalah *margin hyperparameter* (umumnya $\alpha = 0.2$).

### 2.3 Integrasi dengan Physics-Informed Neural Networks (PINN)

Patel, Bhartiya, dan Gudi (2024) melengkapi kerangka ini dengan PINN yang menggabungkan *data-driven loss* dan *physics-based residual loss*:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}}$$

di mana residual fisika untuk sistem dinamis $\frac{d\mathbf{x}}{dt} = \mathbf{f}(\mathbf{x}, \mathbf{u})$ diekspresikan sebagai:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_p} \sum_{i=1}^{N_p} \left\| \frac{\partial \hat{\mathbf{x}}}{\partial t}\bigg|_{t_i} - \mathbf{f}(\hat{\mathbf{x}}(t_i), \mathbf{u}(t_i)) \right\|^2$$

dengan $\lambda_d$ dan $\lambda_p$ sebagai bobot regularisasi yang mengontrol trade-off antara fit data dan konsistensi fisika.

### 2.4 Formulasi Model Predictive Control (MPC)

Pada lapisan kontrol, MPC meminimalkan fungsi biaya terhadap horizon prediksi $N_p$:

$$J = \sum_{k=0}^{N_p-1} \left[ (\mathbf{x}_k - \mathbf{x}_{\text{ref}})^\top \mathbf{Q} (\mathbf{x}_k - \mathbf{x}_{\text{ref}}) + \mathbf{u}_k^\top \mathbf{R} \, \mathbf{u}_k \right]$$

dengan kendala:

$$\mathbf{x}_{k+1} = g(\mathbf{x}_k, \mathbf{u}_k), \quad \mathbf{x}_{\min} \leq \mathbf{x}_k \leq \mathbf{x}_{\max}, \quad \mathbf{u}_{\min} \leq \mathbf{u}_k \leq \mathbf{u}_{\max}$$

di mana $\mathbf{Q}$ dan $\mathbf{R}$ adalah matriks bobot yang merepresentasikan prioritas deviasi状态 dan upaya kontrol.

### 2.5 Metrik Evaluasi dan Remaining Useful Life (RUL)

Pearson (2024) menggunakan metrik Area Under Precision-Recall Curve (AUPRC) sebagai indikator kinerja utama karena karakteristik *imbalanced data*. Prediksi *Remaining Useful Life* diformulasikan sebagai:

$$\hat{R}(t) = \int_{t}^{\infty} S(u \mid \boldsymbol{\theta}) \, du = \int_{t}^{\infty} \exp\left( - \int_{t}^{u} h(\tau \mid \boldsymbol{\theta}) \, d\tau \right) du$$

dengan $h(\tau \mid \boldsymbol{\theta})$ adalah *hazard function* yang diparameterisasi oleh bobot CNN $\boldsymbol{\theta}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti *Standard Operating Procedure* (SOP) yang terdiri atas tujuh fase rekayasa:

**Fase 1 – Akuisisi Data dan Sensor Fusion.** Instalasi kamera industri (resolusi minimum 1920×1080, frame rate 30 fps) yang dipasang pada enclosure IP67 dengan *ring illumination* LED terkalibrasi. Sensor tambahan (vibrasi akselerometer triaksial, sensor suhu PT100, sensor akustik) diintegrasikan melalui protokol OPC-UA untuk membentuk *multimodal dataset*. Frekuensi sampling mengikuti standar ISO 10816 untuk evaluasi getaran mekanis.

**Fase 2 – Pra-pemrosesan Citra.** Pipeline meliputi resize ke 224×224, normalisasi pixel $[0,1]$, augmentasi geometris (rotasi ±15°, flip horizontal, translasi ±10%), augmentasi fotometris (penyesuaian kontras, penambahan Gaussian noise $\sigma=0.02$, *CutMix* regularization). Distribusi kelas dipastikan menggunakan teknik SMOTE-Tomek untuk menangani *class imbalance*.

**Fase 3 – Arsitektur Model dan Transfer Learning.** Backbone menggunakan ResNet-50 pretrained pada ImageNet dengan *frozen convolutional layers* pada 4 blok pertama. *Fully connected head* diganti dengan *global average pooling* dan dua *dense layer* (512 → 256 → 1) dengan aktivasi sigmoid untuk klasifikasi biner normal/anomali. Optimizer Adam dengan *learning rate scheduling* (Cosine Annealing, $T_{\max}=50$).

**Fase 4 – Pelatihan dan Validasi.** Skema 5-fold stratified cross-validation dengan *early stopping* pada validation F1-score. Hyperparameter tuning menggunakan Bayesian Optimization dengan *acquisition function* Expected Improvement. Loss function menggabungkan Binary Cross-Entropy dan Focal Loss:

$$\mathcal{L}_{\text{focal}} = -\alpha_t (1 - p_t)^\gamma \log(p_t), \quad \gamma = 2.0$$

**Fase 5 – Kalibrasi dan Threshold Tuning.** Penentuan threshold optimal $\tau$ berbasis analisis ROC pada validation set, dengan target *specificity* ≥ 98,5% guna meminimalkan *false alarms*. Confidence interval diestimasi menggunakan *bootstrap resampling* ($n=1000$).

**Fase 6 – Integrasi dengan PINN-MPC.** Output klasifikasi anomali (lokasi, tipe fault, confidence score) difeed ke *digital twin* berbasis PINN untuk *state estimation*. Fault severity score $s \in [0,1]$ menjadi parameter referensi pada fungsi biaya MPC untuk mengatur *control trajectory* secara adaptif.

**Fase 7 – Monitoring, Drift Detection, dan Retraining.** *Population Stability Index* (PSI) dihitung mingguan untuk deteksi *concept drift*. Jika PSI > 0,25, maka *trigger* retraining otomatis dengan *incremental learning* menggunakan *elastic weight consolidation* untuk mencegah *catastrophic forgetting*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Monitoring Pompa Sentrifugal P-101A pada Pabrik Petrokimia

Studi kasus mengadopsi skenario pompa sentrifugal kapasitas 250 m³/h, head 45 m, kecepatan 2950 rpm, daya motor 90 kW yang melayani layanan *cooling water circulation* pada unit *hydrocracker*. Sensor akselerometer dipasang pada *bearing housing* (DE dan NDE) sesuai ISO 10816-3 Class II. Kamera termal (FLIR A65) dipasang pada jarak 1,5 meter untuk memantau suhu housing dan kebocoran seal.

### 4.2 Parameter Input

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Sampling rate akselerometer | 12.800 | Hz |
| Citra termal per siklus inspeksi | 1.200 | frame |
| Dimensi citra (resize) | 224 × 224 | pixel |
| Total dataset | 50.000 | sampel |
| Rasio kelas (Normal : Inner Race Fault : Outer Race Fault : Seal Leakage) | 40.000 : 4.000 : 3.500 : 2.500 | sampel |
| $f_s$ (sampling rate) | 12.800 | Hz |
| $N$ (jumlah titik FFT) | 8.192 | points |
| Frekuensi rotasi $f_r$ | 49,17 | Hz |
| BPFO (Ball Pass Frequency Outer) | 152,4 | Hz |
| BPFI (Ball Pass Frequency Inner) | 245,2 | Hz |

### 4.3 Langkah Perhitungan Step-by-Step

**Langkah 1 – Ekstraksi Fitur Spektral.**
Spektrum daya dihitung menggunakan FFT pada window Hanning 8192-point dengan overlap 50%:

$$S_{xx}(f) = \frac{2}{f_s \cdot N_{\text{window}}} \left| \sum_{n=0}^{N-1} x[n] \cdot w[n] \cdot e^{-j2\pi fn/f_s} \right|^2$$

Untuk sinyal vibrasi akselerometer dengan RMS velocity 3,2 mm/s pada frekuensi BPFO, *peak amplitude* spektral dihitung sebagai:

$$A_{\text{BPFO}} = 3{,}2 \times \sqrt{2} \approx 4{,