# 2819 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif: Integrasi dengan Physics-Informed Neural Networks pada Model Predictive Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur dan proses global tengah menghadapi transformasi paradigma yang ditandai dengan meningkatnya kompleksitas aset fisik, tuntutan *zero-downtime*, dan kebutuhan efisiensi energi yang semakin ketat. Pada lingkungan *high-capital equipment* seperti turbin gas, pompa sentrifugal, *heat exchanger*, dan motor listrik bertegangan tinggi, kegagalan fungsi (*failure*) yang tidak terdeteksi secara dini dapat menimbulkan kerugian ekonomi hingga jutaan dolar per kejadian, tidak termasuk dampak terhadap keselamatan pekerja dan kerusakan lingkungan. Pearson (2024) dalam publikasinya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) mengusulkan pendekatan *Image-Based Anomaly Detection* berbasis *Convolutional Neural Networks* (CNN) sebagai tulang punggung sistem pemeliharaan prediktif. Pendekatan ini memanfaatkan citra termal, visual, dan akustik yang dikumpulkan melalui kamera industri, *drone inspection*, dan sensor *edge* untuk mengidentifikasi anomali mikroskopis pada permukaan, retakan, korosi, atau perubahan warna yang mengindikasikan degradasi fungsi.

Urgensi metodologis pekerjaan Pearson tersebut tidak terlepas dari kenyataan bahwa metode inspeksi konvensional—seperti *vibration analysis* berbasis Fast Fourier Transform (FFT) atau *ultrasonic testing*—memiliki keterbatasan inherent pada aset yang berputar lambat, tertutup, atau beroperasi pada lingkungan dengan *signal-to-noise ratio* rendah. Pearson (2024) menunjukkan bahwa CNN, dengan kemampuan ekstraksi fitur hierarkis melalui *convolutional*, *pooling*, dan *fully connected layers*, mampu mencapai tingkat *recall* di atas 95% pada dataset benchmark MVTec AD dan NEU-DET, melampaui ambang batas akurasi manusia visual (~85%). Integrasi arsitektur *Residual Neural Network* (ResNet) dan *transfer learning* dari ImageNet terbukti menurunkan kebutuhan data pelatihan hingga 70%, sehingga relevan untuk industri dengan data historis yang terbatas.

Di sisi lain, kontrol proses pada sistem manufaktur berumur panjang masih mengandalkan *Proportional-Integral-Derivative* (PID) yang meskipun robust, tidak adaptif terhadap *drift* kondisi operasi. Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) mengajukan *Physics-Informed Neural Networks* (PINNs) sebagai komponen prediksi dalam *Model Predictive Control* (MPC), di mana kekangan fisika (misalnya *heat equation*, persamaan Navier-Stokes, atau neraca massa) tertanam langsung ke dalam *loss function*. Kombinasi arsitektur deep learning dari kedua paper tersebut menjanjikan terbentuknya *closed-loop digital twin* yang menggabungkan deteksi anomali visual dengan kontrol optimal berbasis fisika.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

CNN bekerja melalui operasi konvolusi diskrit yang memetakan citra $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ menjadi peta fitur (feature map) melalui filter $\mathbf{W}_{k}$ berukuran $m \times n$:

$$Y_{i,j,k} = \sigma\left(\sum_{c=1}^{C}\sum_{p=0}^{m-1}\sum_{q=0}^{n-1} W_{p,q,c,k} \cdot X_{i+p, j+q, c} + b_k\right) \tag{1}$$

dengan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(x)=\max(0,x)$), $b_k$ adalah *bias*, dan indeks $k$ menandakan filter ke-$k$. Setelah beberapa blok konvolusi-pooling, fitur diekstrak ke dalam *fully connected layer* untuk klasifikasi biner (anomali vs normal) melalui fungsi sigmoid:

$$\hat{y} = \frac{1}{1 + e^{-(\mathbf{w}^\top \mathbf{h} + b)}} \tag{2}$$

Pelatihan dilakukan dengan meminimalkan *binary cross-entropy loss*:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right] \tag{3}$$

Untuk dataset dengan ketidakseimbangan kelas yang signifikan (anomali hanya 2-5% dari total), Pearson (2024) merekomendasikan penggunaan *focal loss* sebagai modifikasi dari cross-entropy:

$$\mathcal{L}_{focal} = -\frac{1}{N}\sum_{i=1}^{N}\alpha_i (1-\hat{y}_i)^{\gamma} y_i \log(\hat{y}_i) \tag{4}$$

dengan $\alpha_i$ adalah bobot kelas dan $\gamma \in [0,5]$ adalah *focusing parameter* yang menekan kontribusi *easy negatives* dalam proses gradien.

### 2.2 Physics-Informed Neural Networks (PINNs) untuk MPC

PINNs mengintegrasikan pengetahuan *prior* fisika ke dalam jaringan saraf melalui *physics-based regularization term*. Misalkan sistem proses dideskripsikan oleh *partial differential equation* (PDE):

$$\mathcal{N}[u](x, t) = f(x, t), \quad (x, t) \in \Omega \times [0, T] \tag{5}$$

di mana $\mathcal{N}$ adalah operator diferensial non-linear, $u(x, t)$ adalah solusi yang didekati oleh neural network $u_\theta(x, t)$, dan $f(x, t)$ adalah *forcing term*. *Loss function* total PINN, sebagaimana dirumuskan Patel et al. (2024), adalah:

$$\mathcal{L}_{PINN} = \lambda_{data}\mathcal{L}_{data} + \lambda_{physics}\mathcal{L}_{physics} + \lambda_{BC}\mathcal{L}_{BC} + \lambda_{IC}\mathcal{L}_{IC} \tag{6}$$

dengan:

$$\mathcal{L}_{data} = \frac{1}{N_d}\sum_{i=1}^{N_d}\|u_\theta(x_i^d, t_i^d) - u_i^{obs}\|^2 \tag{7}$$

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{j=1}^{N_p}\|\mathcal{N}[u_\theta](x_j^p, t_j^p) - f(x_j^p, t_j^p)\|^2 \tag{8}$$

Pada kerangka MPC, PINN berperan sebagai model internal yang memprediksi *state trajectory* $x_{k+1}, \ldots, x_{k+N}$ untuk *prediction horizon* $N$:

$$\min_{u_0, \ldots, u_{N-1}} J = \sum_{k=0}^{N-1}\left[(x_k - x_{ref})^\top Q (x_k - x_{ref}) + u_k^\top R u_k\right] + (x_N - x_{ref})^\top P (x_N - x_{ref}) \tag{9}$$

Tunables $Q, R, P$ adalah matriks bobot yang mengendalikan trade-off antara *tracking error*, biaya kontrol, dan *terminal cost*. Subtitusi $x_{k+1} = \mathcal{F}_\theta(x_k, u_k)$ dengan $\mathcal{F}_\theta$ adalah model PINN menghasilkan masalah optimisasi non-konveks yang diselesaikan melalui *gradient-based optimization* (misalnya L-BFGS atau Adam).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti *Standard Operating Procedure* (SOP) lima tahap yang distandarkan oleh ISO 13374 untuk *condition monitoring*:

**Tahap 1: Akuisisi Data Citra.** Kamera termal FLIR T1020 (resolusi $1024 \times 768$ piksel, sensitivitas termal $<20$ mK) dipasang pada posisi tetap (*fixed-mount*) atau *robotic crawler*. Frekuensi sampling disesuaikan dengan *criticality* aset: 1 frame/detik untuk *real-time monitoring*, 1 frame/menit untuk *trend analysis*. Pencahayaan terkontrol melalui *LED ring illuminator* dengan *color temperature* 5000-6500 K.

**Tahap 2: Preprocessing Citra.** Tahapan ini mencakup *ROI (Region of Interest) cropping*, normalisasi intensitas ke rentang $[0, 1]$, *histogram equalization* (CLAHE), dan augmentasi data (*rotation*, *flip*, *Gaussian noise injection*, *mixup*) untuk meningkatkan generalisasi model.

**Tahap 3: Pelatihan Model CNN.** Arsitektur yang digunakan adalah ResNet-50 *pre-trained* pada ImageNet, dengan *fine-tuning* dua *fully connected layer* terakhir. *Hyperparameter* optimum berdasarkan Pearson (2024): *learning rate* $10^{-4}$ dengan *cosine annealing*, *batch size* 32, *optimizer* AdamW, dan *early stopping* berdasarkan *validation F1-score*.

**Tahap 4: Integrasi dengan PINN-MPC.** Output klasifikasi anomali dari CNN digunakan sebagai *trigger* untuk memperbarui *state estimator* (misalnya Kalman filter) yang selanjutnya menjadi input bagi MPC berbasis PINN. Jika anomali terdeteksi dengan probabilitas $>0.85$, sistem secara otomatis mengurangi set-point operasi hingga 80% dan menjadwalkan inspeksi terjadwal.

**Tahap 5: Validasi & Audit.** Model dievaluasi menggunakan metrik *precision*, *recall*, *F1-score*, dan *Area Under ROC Curve* (AUC-ROC). Standar minimum yang diterima industri: *recall* $\geq 95\%$ dan *false positive rate* $\leq 2\%$ (sesuai ISO 17359).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Monitoring Bantalan Pompa Sentrifugal di Pabrik Kimia

Sebuah pabrik petrokimia memiliki 120 unit pompa sentrifugal yang beroperasi 24/7. Tim rekayasa menerapkan sistem deteksi anomali berbasis CNN sesuai kerangka Pearson (2024). Dataset terdiri dari 10.000 citra termal, terbagi dalam *training* (7.000), *validation* (1.500), dan *testing* (1.500). Distribusi kelas: 9.500 citra *normal*, 500 citra anomali (keretakan, *overheating*, *cavitation*).

**Langkah 1: Pelatihan dan Hasil Awal.** Model menghasilkan *confusion matrix* pada data uji sebagai berikut:

| | Prediksi Normal | Prediksi Anomali |
|---|---|---|
| **A