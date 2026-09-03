# 1667 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif: Integrasi dengan Physics-Informed Neural Networks untuk Pengendalian Prediktif Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 dan transisi menuju Industri 5.0 telah menempatkan pemeliharaan prediktif (*predictive maintenance*, PdM) sebagai pilar strategis dalam operasional manufaktur dan proses. Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti bahwa downtime tak terencana pada peralatan kritis—seperti pompa sentrifugal, kompresor, motor listrik, dan turbin—dapat menimbulkan kerugian ekonomi hingga USD 50.000–250.000 per jam pada fasilitas petrokimia dan manufaktur semikonduktor. Biaya siklus hidup (*life-cycle cost*) peralatan modern didominasi oleh fase operasi dan pemeliharaan (lebih dari 60% total cost of ownership), sehingga akurasi deteksi anomali visual menjadi variabel keputusan yang menentukan profitabilitas.

Pearson (2024) mengusulkan arsitektur Convolutional Neural Network (CNN) untuk menganalisis citra thermal, vibrasi visual, dan inspeksi optik peralatan industri secara *real-time*. Pendekatan ini menggantikan metode inspeksi manual yang bersifat subyektif, rentan *human error*, dan tidak skalabel. Dalam konteks complementar, Patel, Bhartiya, dan Gudi (2024) melalui DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) memperkenalkan Physics-Informed Neural Networks (PINNs) untuk Model Predictive Control (MPC) pada sistem proses, yang memungkinkan integrasi antara deteksi anomali visual (bagian upstream) dan pengendalian optimal proses (bagian downstream) dalam satu kerangka digital twin.

Urgensi operasional semakin nyata ketika mempertimbangkan bahwa 70% kegagalan peralatan bersifat degradation-driven (keausan, korosi, retak lelah) dan memunculkan signature visual sebelum failure mode terjadi. CNN mampu menangkap pola spasial pada citra yang tidak terdeteksi oleh sensor SCADA konvensional (suhu, tekanan, arus), sehingga memberikan *lead time* mitigasi yang lebih panjang. Integrasi dengan PINN-MPC sebagaimana dikemukakan Patel et al. (2024) memungkinkan sistem untuk tidak hanya mendeteksi anomali tetapi juga secara proaktif menyesuaikan setpoint proses guna mencegah eskalasi kerusakan, menciptakan闭环 (closed-loop) predictive-maintenance-control yang adaptif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Pearson (2024) membangun model CNN dengan operasi konvolusi dua-dimensi sebagai operator ekstraksi fitur. Untuk citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$, peta fitur keluaran pada lapisan konvolusi ke-$l$ didefinisikan sebagai:

$$\mathbf{Y}^{(l)}_{i,j,k} = \sigma\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1}\sum_{c=0}^{C-1} \mathbf{W}^{(l)}_{m,n,c,k} \, \mathbf{X}^{(l-1)}_{i+m, j+n, c} + b^{(l)}_k\right)$$

dengan $\mathbf{W}^{(l)}$ adalah kernel konvolusi berukuran $M \times N \times C \times K$, $b^{(l)}_k$ adalah bias, dan $\sigma(\cdot)$ merupakan fungsi aktivasi ReLU $\sigma(z) = \max(0, z)$.

Untuk tugas deteksi anomali, Pearson (2024) menggunakan arsitektur autoencoder konvolusional. Citra masukan $\mathbf{x}$ direkonstruksi menjadi $\hat{\mathbf{x}}$ melalui pelatihan meminimalkan *reconstruction error*:

$$\mathcal{L}_{AE}(\theta) = \frac{1}{N}\sum_{i=1}^{N}\left\|\mathbf{x}^{(i)} - \hat{\mathbf{x}}^{(i)}\right\|_2^2 + \lambda_{reg}\,\Omega(\theta)$$

dengan $\Omega(\theta)$ adalah regularisasi bobot (L2 atau weight decay). Anomali dideteksi ketika *anomaly score* melebihi ambang $\tau$:

$$s(\mathbf{x}) = \left\|\mathbf{x} - \hat{\mathbf{x}}\right\|_2^2 > \tau$$

Untuk meningkatkan sensitivitas terhadap cacat struktural, diterapkan indeks kesamaan struktural (SSIM) sebagai loss gabungan:

$$\mathcal{L}_{total} = \alpha\,\mathcal{L}_{MSE} + (1-\alpha)\,\mathcal{L}_{SSIM}$$

### 2.2 Physics-Informed Neural Networks untuk MPC

Patel et al. (2024) memformulasikan sistem proses dalam ruang keadaan diskret:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{d}_k, \quad \mathbf{y}_k = \mathbf{C}\mathbf{x}_k$$

dengan $\mathbf{x}_k \in \mathbb{R}^{n_x}$ adalah vektor状態, $\mathbf{u}_k \in \mathbb{R}^{n_u}$ adalah variabel kendali, dan $\mathbf{d}_k$ adalah disturbance. MPC meminimalkan fungsi biaya dalam horizon prediksi $H_p$:

$$J = \sum_{k=0}^{H_p-1}\left[(\mathbf{x}_k - \mathbf{x}_{ref})^T\mathbf{Q}(\mathbf{x}_k - \mathbf{x}_{ref}) + \mathbf{u}_k^T\mathbf{R}\mathbf{u}_k\right] + \mathbf{x}_{H_p}^T\mathbf{P}\mathbf{x}_{H_p}$$

PINN menggabungkan *data loss* dengan *physics loss* yang menghukum residual persamaan diferensial partial governing:

$$\mathcal{L}_{PINN} = \underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d}\left\|\hat{\mathbf{x}}(t_i) - \mathbf{x}_i\right\|_2^2}_{\mathcal{L}_{data}} + \underbrace{\frac{1}{N_r}\sum_{j=1}^{N_r}\left\|\mathcal{F}\!\left(t_j, \hat{\mathbf{x}}, \frac{\partial \hat{\mathbf{x}}}{\partial t}\right)\right\|_2^2}_{\mathcal{L}_{physics}}$$

dengan $\mathcal{F}(\cdot)$ adalah residual operator dari persamaan fisika (misalnya neraca massa-energi), dan keseimbangan antara kedua loss diatur melalui bobot adaptif $\lambda_{phy}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka deteksi anomali-CNN dan PINN-MPC mengikuti SOP yang distandarkan oleh ISO 13373 (vibrasi mekanik), ISO 17359 (kondisi monitoring), dan ISA-95 (integrasi sistem kontrol). Tahapan prosedural disusun sebagai berikut:

**Tahap 1 – Akuisisi Data Citra.** Kamera termal (FLIR A700), sensor inspeksi optik resolusi tinggi (5 MP+), dan robot *crawler* digunakan untuk menangkap citra peralatan pada interval 5–15 menit. Pencahayaan terkontrol dan referensi *white-balance* diterapkan untuk mengurangi variabilitas lingkungan. Metadata (timestamp, ID peralatan, lokasi) disimpan dalam format parquet sesuai standar OPC UA.

**Tahap 2 – Preprocessing Citra.** Pipeline preprocessing mencakup *image resizing* ke 224×224 piksel, normalisasi piksel $\tilde{x} = (x - \mu)/\sigma$, augmentasi (rotasi, flipping, cutout), dan segmentasi ROI (region of interest) berbasis U-Net untuk memfokuskan analisis pada area kritis (misalnya rumah bearing, rumah pompa).

**Tahap 3 – Pelatihan Model.** Dataset dilabeli oleh *domain expert* menjadi kelas *normal*, *warning*, dan *critical*. Model CNN (misalnya ResNet-50 atau EfficientNet-B0) dilatih menggunakan *transfer learning* dengan *frozen backbone* pada 50 epoch pertama dan *fine-tuning* seluruh parameter pada 30 epoch berikutnya. Optimizer AdamW dengan *learning rate* $1 \times 10^{-4}$ dan *cosine annealing scheduler* digunakan. Validasi dilakukan dengan *k-fold cross-validation* ($k=5$).

**Tahap 4 – Deployment Inferensi.** Model dikonversi ke format ONNX dan dideploy pada edge device (NVIDIA Jetson AGX Orin) untuk inferensi latensi rendah (<50 ms). Hasil deteksi anomali dikirim ke platform CMMS (SAP PM, IBM Maximo) melalui protokol MQTT.

**Tahap 5 – Integrasi PINN-MPC.** Output deteksi anomali dari CNN digunakan sebagai sinyal umpan balik pada PINN yang menjadi surrogate model MPC di Distributed Control System (DCS).