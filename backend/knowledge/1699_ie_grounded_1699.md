# 1699 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal (2024). DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju **Industri 4.0** telah mengubah secara fundamental paradigma pemeliharaan aset manufaktur. Pergeseran dari *reactive maintenance* (korektif setelah kegagalan) menuju *predictive maintenance* (PdM) berbasis data menjadi kebutuhan strategis karena downtime tak terjadwal di fasilitas proses kontinyu (kilang, petrokimia, baja, pulp & paper) dapat menimbulkan kerugian ekonomi antara USD 10.000–250.000 per jam tergantung kompleksitas lini produksi (Pearson, 2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)). Studi Pearson (2024) menekankan bahwa pendekatan non-destruktif berbasis **computer vision** memberikan keunggulan dibanding sensor getaran dan akustik karena citra dapat menangkap pola degradasi spasial seperti retakan permukaan, korosi, kebocoran termal, delaminasi, dan perubahan warna yang mengindikasikan overheating pada motor listrik, pompa, dan bearing.

Dalam konteks industri modern, anomali visual muncul dari interaksi fenomena multiphysics: degradasi termal, keausan mekanis, kontaminasi fluida, dan oksidasi kimia. Inilah mengapa integrasi antara arsitektur *deep learning* perseptual (CNN) dengan model fisika menjadi semakin relevan. Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menunjukkan bahwa **Physics-Informed Neural Networks (PINN)** mampu menggabungkan data-driven learning dengan约束 hukum fisika (conservation of mass, energy, momentum) untuk menghasilkan kontrol prediktif yang robust. Sinergi keduanya—CNN untuk penginderaan visual anomali dan PINN untuk prediksi dinamika proses—mendefinisikan kerangka *cyber-physical maintenance system* generasi baru.

Urgensi ekonominya juga tecermin dari data *International Society of Automation* (ISA) yang menunjukkan bahwa penerapan PdM mengurangi biaya pemeliharaan 25–30% dan menurunkan breakdown 70–75%. Namun adopsi teknologi ini terkendala tiga hal utama: (i) **scarcity data kegagalan berlabel** pada kondisi operasi normal terhadap anomali; (ii) **concept drift** ketika mode operasi berubah; (iii) kebutuhan **interpretability** bagi insinyur lapangan. Pearson (2024) menjawab tantangan ini dengan mengusulkan arsitektur CNN autoencoder semi-supervised yang mampu belajar dari data normal mayoritas dan menandai pencilan (*outlier*) sebagai anomali.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur deteksi anomali visual yang diajukan Pearson (2024) menggunakan **Convolutional Autoencoder (CAE)** sebagai backbone. Encoder memetakan citra input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ ke ruang laten berdimensi rendah $\mathbf{z} \in \mathbb{R}^{d}$, sedangkan decoder merekonstruksi citra $\hat{\mathbf{X}}$. Anomali diukur melalui **reconstruction error** sebagai *anomaly score*.

### 2.1 Operasi Konvolusi Diskrit

Operasi konvolusi 2-D pada lapisan *convolutional* didefinisikan sebagai:

$$
y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} x_{i+m,\,j+n}^{(l-1)} \cdot w_{m,n}^{(l)} + b^{(l)}\right)
$$

di mana $w_{m,n}^{(l)}$ adalah kernel filter pada lapisan $l$ berukuran $k_h \times k_w$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $f(x) = \max(0,x)$). Operasi ini menangkap fitur lokal seperti tepi, tekstur, dan pola kegagalan permukaan.

### 2.2 Autoencoder & Anomaly Score

Fungsi objektif CAE meminimalkan **Mean Squared Error (MSE)** rekonstruksi:

$$
\mathcal{L}_{MSE} = \frac{1}{N\,H\,W\,C}\sum_{n=1}^{N}\sum_{i,j,c}\left(X_{n,i,j,c} - \hat{X}_{n,i,j,c}\right)^2
$$

Untuk deteksi anomali, didefinisikan *pixel-wise* dan *image-wise* anomaly score:

$$
s_{n} = \frac{1}{HWC}\sum_{i,j,c}\left(X_{n,i,j,c} - \hat{X}_{n,i,j,c}\right)^2
$$

Sampel diklasifikasikan anomali jika $s_n > \tau$, dengan threshold $\tau$ ditentukan dari distribusi data validasi normal menggunakan kuantil ke-$(1-\alpha)$.

### 2.3 Integrasi Physics-Informed Loss (Patel et al., 2024)

Ketika model CNN-CAE digunakan untuk peralatan proses (misalnya pompa, heat exchanger), constraint fisika dapat disuntikkan ke fungsi loss (Patel et al., 2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)):

$$
\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda \mathcal{L}_{physics}
$$

dengan $\mathcal{L}_{physics}$ adalah residual persamaan diferensial parsial (misalnya persamaan konduksi panas Fourier):

$$
\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{k=1}^{N_p}\left\|\rho c_p \frac{\partial T}{\partial t} - k_{th}\nabla^2 T - Q_k\right\|^2
$$

Pendekatan hybrid ini meningkatkan *generalization* dan *interpretability*, khususnya ketika data pelatihan anomali terbatas.

### 2.4 Metrik Evaluasi Kinerja

Untuk mengukur performa detektor anomali, digunakan metrik standar:

$$
\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2\cdot\frac{P\cdot R}{P+R}
$$

serta **Area Under the Receiver Operating Characteristic Curve (AUROC)** yang robust terhadap *class imbalance* yang melekat pada data anomali industri.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem PdM berbasis citra mengikuti kerangka SOP 7-tahap yang disintesis dari praktik terbaik industri dan temuan Pearson (2024):

**Tahap 1 — Akuisisi Data Citra Multispektral.** Instalasi kamera termal (long-wave infrared, 8–14 μm) dan/atau kamera RGB-IP pada titik inspeksi kritis (motor, bearing housing, gearbox, flange). Resolusi minimum 640×480 piksel, frame rate disesuaikan dengan siklus inspeksi (1–4 citra per jam).

**Tahap 2 — Preprocessing Citra.** Normalisasi intensitas, denoising dengan filter Gaussian $\sigma=1.0$, segmentasi ROI (*region of interest*) berbasis bounding box asset, dan augmentasi data (*rotation, flip, brightness jitter*) untuk meningkatkan generalisasi model.

**Tahap 3 — Pelatihan Model CAE.** Arsitektur tipikal: 4–5 lapisan konvolusi (32, 64, 128, 256 filter) di encoder dengan *stride-2* downsampling, mirror decoder dengan *transposed convolution*. Optimizer Adam dengan *learning rate* $10^{-3}$ dan *early stopping* berdasarkan validation loss.

**Tahap 4 — Kalibrasi Threshold.** Dari himpunan validasi normal, set $\tau$ pada kuantil $1-\alpha$ dengan target *false positive rate* $\alpha = 0.05$. Validasi silang 5-fold untuk robust.

**Tahap 5 — Integrasi dengan CMMS/EAM.** Output skor anomali $s_n$ di-streaming via MQTT/OPC-UA ke *Computerized Maintenance Management System* untuk auto-generate *work order* ketika $s_n > \tau$.

**Tahap 6 — Physics-Informed Refinement** (opsional, sesuai Patel et al., 2024): Suntikkan constraint fisika proses (neraca energi, momentum) ke *fine-tuning* model untuk menekan false positive yang melanggar hukum fisika.

**Tahap 7 — Continuous Learning & Monitoring.** Mekanisme *concept drift detection* berbasis Page-Hinkley test dan *periodic retraining* (3–6 bulan) untuk menjaga performa seiring perubahan kondisi operasi.

Diagram alir proses secara skematis: `Sensor Citra → Preprocessing → CNN-CAE Inference → Anomaly Score → Threshold Check → [ANOMALI] → CMMS Alert → Teknisi → Root Cause Analysis → CMMS Update → Retraining Pipeline`.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik petrokimia memiliki **120 unit pompa sentrifugal**等级 kritis (API 610, duty continuous) yang diinspeksi setiap 4 jam menggunakan kamera termal terpasang tetap.

### 4.1 Parameter Input

| Parameter | Nilai |
|---|---|
| Jumlah aset dimonitor (N) | 120 pompa |
| Frekuensi akuisisi citra | 6 citra/hari per aset |
| Citra/hari | $120 \times 6 = 720$ |
| Citra/tahun operasi | $720 \times 330 = 237.600$ |
| Proporsi anomali aktual (prevalensi) | $p = 2\%$ |
| True Positive Rate (sensitivitas) | $TPR = 0{,}92$ |
| False Positive Rate | $FPR = 0{,}05$ |

### 4.2 Perhitungan Confusion Matrix Harian

Jumlah anomali harian: $720 \times 0{,}02 = 14{,}4 \approx 14$ citra anomali.

- **True Positive (TP):** $14 \times 0{,}92 = 12{,}88 \approx 13$ citra anomali terkoreksi.
- **False Negative (FN):** $14 - 13 = 1$ citra anomali terlewat.
- **False Positive (FP):** $(720-14) \times 0{,}05 = 706 \times 0{,}05 = 35{,}3 \approx 35