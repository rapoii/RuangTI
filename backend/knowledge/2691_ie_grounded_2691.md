# 2691 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur dan proses industri modern, downtime peralatan yang tidak terencana仍然是 menjadi salah sumber kerugian ekonomi paling signifikan. Menurut estimasi industri yang dikutip oleh Pearson (2024) dalam studinya tentang deteksi anomali berbasis citra untuk pemeliharaan prediktif, biaya downtime tak terjadwal pada sektor manufaktur berat dapat mencapai USD 50.000 hingga USD 250.000 per jam, tergantung pada kompleksitas lini produksi dan nilai tambah produk yang sedang diproses. Kerugian ini tidak hanya berasal dari hilangnya output produksi, tetapi juga mencakup biaya restart, kerusakan sekunder pada peralatan tetangga, penalty clause dalam kontrak pengiriman, dan degradasi moral pekerja (Pearson, 2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)).

Secara historis, strategi pemeliharaan industri telah berkembang melalui tiga paradigma utama: *reactive maintenance* (pemeliharaan setelah kerusakan terjadi), *preventive maintenance* berbasis jadwal waktu atau siklus usage, dan *predictive maintenance* (PdM) yang berbasis kondisi aktual (*condition-based maintenance*). Pearson (2024) menegaskan bahwa deteksi anomali berbasis Computer Vision (CV) merupakan salah satu enabler paling disruptif untuk transisi dari pendekatan preventive berbasis waktu menuju PdM berbasis bukti visual real-time. Berbeda dengan sensor getaran, termografi inframerah titik-tunggal, atau analisis oli yang memerlukan probe fisik, kamera industri modern dapat dipasang secara non-invasif, memiliki coverage spasial luas, dan mampu menangkap pola degradasi yang tidak terlihat oleh sensor konvensional—seperti retakan mikro pada permukaan bearing, perubahan warna pada insulation motor, atau akumulasi korosi pada heat exchanger tubes.

Urgensi pengembangan sistem ini diperkuat oleh empat megatrend industri contemporer: (1) adopsi Industry 4.0 yang menuntut integrasi data multi-modal ke dalam digital twin; (2) kekurangan tenaga ahli inspeksi visual berpengalaman (*visual inspector*) di negara-negara industri maju; (3) peningkatan kompleksitas peralatan yang membuat pola degradasi semakin sulit didiagnosis secara manual; dan (4) tekanan regulasi keselamatan kerja yang mensyaratkan dokumentasi kondisi peralatan secara periodik. Pearson (2024) menunjukkan bahwa penggunaan *Convolutional Neural Networks* (CNN) sebagai backbone arsitektur deep learning mampu mengotomatisasi proses inspeksi visual dengan tingkat akurasi yang konsisten—dan pada banyak kasus—mampu melampaui konsistensi inspektur manusia yang rentan terhadap kelelahan dan subjective bias.

Dalam konteks integrasi sistem, hasil deteksi anomali berbasis citra tidak berdiri sendiri. Patel, Bhartiya, dan Gudi (2024) dalam makalahnya di IFAC-PapersOnLine tentang *Model Predictive Control* (MPC) menggunakan Physics-Informed Neural Networks (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menjelaskan bahwa sinyal anomali yang dihasilkan oleh modul CV dapat menjadi input bagi sistem kontrol prediktif untuk menyesuaikan setpoint operasional secara real-time—misalnya menurunkan kecepatan putar turbin ketika anomali visual early-stage terdeteksi pada blade. Sinergi antara deteksi anomali visual dan MPC berbasis fisika inilah yang menjadi frontier riset mutakhir dalam *cyber-physical production systems*.

Pearson (2024) juga menekankan bahwa penerapan arsitektur CNN untuk inspeksi visual industri harus mempertimbangkan tiga tantangan utama: (a) *class imbalance* antara citra kondisi normal dan anomali (yang dalam praktik rasio imbalance-nya bisa mencapai 1000:1), (b) ketersediaan labeled data yang terbatas karena anomali merupakan peristiwa langka, dan (c) kebutuhan interpretabilitas model untuk memenuhi standar auditabilitas industri seperti ISO 13373 untuk condition monitoring dan API 571 untuk mekanisme degradasi. Ketiga tantangan ini menjadi pilar arsitektur sistem yang akan diuraikan dalam modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network

CNN adalah arsitektur deep learning yang dioptimalkan untuk memproses data grid (citra 2D atau volume 3D). Unit fundamental CNN adalah operasi konvolusi diskrit. Untuk input citra $X \in \mathbb{R}^{H \times W \times C}$ dan kernel $K \in \mathbb{R}^{k_h \times k_w \times C}$, feature map keluaran pada koordinat $(i,j)$ didefinisikan sebagai:

$$Y_{i,j,c'} = \sigma\left(\sum_{m=0}^{k_h-1} \sum_{n=0}^{k_w-1} \sum_{c=0}^{C-1} X_{i+m,\, j+n,\, c} \cdot K_{m,n,c,c'} + b_{c'}\right)$$

dengan $\sigma$ adalah fungsi aktivasi non-linear (umumnya ReLU: $\sigma(x) = \max(0,x)$), $b_{c'}$ adalah bias untuk filter ke-$c'$, dan $C$ adalah jumlah channel input. Pearson (2024) menjelaskan bahwa untuk tugas anomaly detection pada peralatan industri, arsitektur yang digunakan adalah hybrid antara *feature extractor* (misalnya ResNet-50 atau EfficientNet-B3 pre-trained pada ImageNet) dan *anomaly scoring head*.

### 2.2 Formulasi Anomaly Scoring

Pearson (2024) mengusulkan penggunaan *anomaly score* berbasis reconstruction error sebagai metrik utama. Untuk citra input $x$ yang dilewatkan melalui autoencoder, skor anomali didefinisikan sebagai:

$$A(x) = \frac{1}{N}\sum_{i=1}^{N}\left(x_i - \hat{x}_i\right)^2$$

dengan $\hat{x}_i$ adalah rekonstruksi piksel ke-$i$ dan $N$ adalah total piksel. Ambang batas keputusan $\tau$ ditentukan berdasarkan distribusi skor pada data training (normal-only):

$$\hat{y} = \begin{cases} 1 \text{ (anomali)} & \text{jika } A(x) \geq \tau \\ 0 \text{ (normal)} & \text{jika } A(x) < \tau \end{cases}$$

Threshold optimal $\tau^*$ dapat dicari dengan memaksimalkan *F1-score*:

$$\tau^* = \arg\max_{\tau} F_1(\tau) = \arg\max_{\tau} 2 \cdot \frac{P(\tau) \cdot R(\tau)}{P(\tau) + R(\tau)}$$

dengan precision $P(\tau) = \frac{TP}{TP+FP}$ dan recall $R(\tau) = \frac{TP}{TP+FN}$.

### 2.3 Loss Function untuk Imbalanced Data

Karena rasio imbalance normal:anomali yang ekstrem, Pearson (2024) menggunakan Focal Loss sebagai pengganti standard cross-entropy:

$$\mathcal{L}_{FL}(p_t) = -\alpha_t(1-p_t)^\gamma \log(p_t)$$

dengan $p_t$ adalah probabilitas prediksi kelas yang benar, $\alpha_t \in [0,1]$ adalah weighting factor untuk kelas positif, dan $\gamma \geq 0$ adalah *focusing parameter* yang menekan loss untuk contoh yang mudah diklasifikasikan. Parameter $\gamma = 2$ umum digunakan dan memberikan gains signifikan pada dataset dengan rasio imbalance > 100:1.

### 2.4 Integrasi dengan Physics-Informed MPC

Patel et al. (2024) menunjukkan bahwa sinyal anomali $A(x)$ dapat menjadi state variable dalam formulasi MPC. Untuk sistem dinamis dengan state $\mathbf{z}_k$, kontrol $\mathbf{u}_k$, dan disturbance terdeteksi $\mathbf{d}_k = A(x_k)$:

$$\min_{\mathbf{u}_{0:H-1}} \sum_{k=0}^{H-1} \ell(\mathbf{z}_k, \mathbf{u}_k) + V_f(\mathbf{z}_H)$$

$$\text{s.t. } \mathbf{z}_{k+1} = f_{PINN}(\mathbf{z}_k, \mathbf{u}_k, \mathbf{d}_k), \quad \mathbf{g}(\mathbf{z}_k, \mathbf{u}_k) \leq 0$$

dengan $f_{PINN}$ adalah dynamics yang didekati oleh Physics-Informed Neural Network dan $\ell$ adalah stage cost (misalnya quadratic tracking error). Ketika anomali visual terdeteksi, komponen $\mathbf{d}_k$ dalam MPC secara otomatis menyesuaikan trajectory operasi untuk mencegah propagasi kerusakan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti kerangka SOP 7-tahap yang disusun berdasarkan prosedur Pearson (2024):

**Tahap 1 — Akuisisi Data & Image Acquisition Protocol.**
Pemasangan kamera industri (resolusi minimal 1920×1080, frame rate 30 fps untuk inspeksi continuous, atau triggered capture untuk batch inspection) pada titik-titik kritis peralatan. Standar iluminasi mengikuti ISO 8995 untuk kondisi lighting konsisten. Interval akuisisi disesuaikan dengan criticality peralatan: 1 menit untuk rotating equipment kritis, 15 menit untuk static equipment.

**Tahap 2 — Pre-processing Pipeline.**
Setiap frame mengalami (a) resize ke dimensi standar $224 \times 224 \times 3$, (b) normalisasi piksel $[0,255] \rightarrow [0,1]$ dengan transformasi $(x - \mu)/\sigma$ menggunakan statistik ImageNet, dan (c) augmentasi geometris (rotation ±15°, horizontal flip, crop random) untuk meningkatkan generalisasi model. Untuk surface defect detection pada komponen metalik, konversi ke grayscale dan penerapan Contrast Limited Adaptive Histogram Equalization (CLAHE) direkomendasikan.

**Tahap 3 — Pemodelan & Transfer Learning.**
Model backbone (ResNet-50 pre-trained pada ImageNet) di-fine-tune menggunakan dataset kondisi normal dan anomali yang telah di-label oleh inspector bersertifikat. Pearson (2024) merekomendasikan strategi *two-phase training*: (i) fase warm-up dengan learning rate $\eta = 10^{-4}$ selama 10 epoch dengan frozen backbone, (ii) fase fine-tuning dengan $\eta = 10^{-5}$ dan unfrozen seluruh layer selama 50 epoch, menggunakan Adam optimizer ($\beta_1=0.9, \beta_2=0.999$) dan early stopping berdasarkan validation loss.

**Tahap 4 — Validasi & Threshold Calibration.**
Dataset divalidasi menggunakan stratified k-fold cross-validation ($k=5$). Threshold $\tau^*$ dioptimasi pada validation set menggunakan pendekatan precision-recall curve, dengan target operating point $P \geq 0.95$ untuk menekan false positive yang dapat memicu alarm maintenance palsu.

**Tahap 5 — Deployment ke Edge/Cloud.**
Model yang telah tervalidasi dikonversi ke format ONNX atau TensorRT untuk deployment. Untuk latency-critical applications, inferensi dilakukan pada edge GPU (NVIDIA Jetson Orin) dengan target inference time $< 50$ ms per frame. Untuk batch analysis historis, deployment pada cloud (AWS SageMaker, Azure ML) lebih ekonomis.

**Tahap 6 — Integrasi dengan CMMS & Alerting.**
Output deteksi anomali diintegrasikan dengan Computerized Maintenance Management System (CMMS) melalui REST API. Ketika skor $A(x) \geq \tau^*$ terdeteksi, sistem secara otomatis (i) mengirim notifikasi ke inspector melalui mobile app, (ii) membuka work order dengan severity berdasarkan confidence score, dan (iii) meng-update asset health index di digital twin.

**Tahap 7 — Monitoring & Retraining Berkala.**
Performance model dipantau melalui drift detection (Population Stability Index, KS-test). Ketika $PSI > 0.25$ terdeteksi, proses labeling ulang dan retraining diprakarsai. Siklus retraining direkomendasikan setiap 6 bulan atau setelah 10.000 frame baru terakumulasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Inspeksi visual bearing housing pada pompa sentrifugal di kilang petrokimia. Total dataset: 5.000 citra (4.750 kondisi normal, 250 kondisi anomali—*crack initiation* pada housing), rasio imbalance 19:1.

**Langkah 1 — Inisialisasi Performance Baseline.**
Misalkan confusion matrix pada validation set (n=1.000) memberikan hasil:
- True Positive (TP) = 45 (anomali terdeteksi benar)
- False Negative (FN) = 5 (anomali tak terdeteksi)
- False Positive (FP) = 12 (normal diklasifikasi anomali)
- True Negative (TN) = 938

Hitung metrik:
$$P = \frac{45}{45+12} = \frac{45}{57} \approx 0.789$$
$$R = \frac{45}{45+5} = \frac{45}{50} = 0.900$$
$$F