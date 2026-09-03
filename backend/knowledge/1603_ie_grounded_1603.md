# 1603 — Integrasi Computer Vision Berbasis CNN untuk Deteksi Anomali dan Physics-Informed Neural Networks untuk Model Predictive Control dalam Ekosistem Pemeliharaan Prediktif Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* telah mengubah paradigma pengelolaan aset industri dari pendekatan reaktif dan terjadwal menjadi pendekatan *predictive intelligence*, di mana keputusan pemeliharaan diambil berdasarkan bukti kuantitatif yang diekstraksi secara real-time dari sensor dan sistem visual. Dalam konteks ini, dua pilar teknologi muncul sebagai game-changer: **(i)** Computer vision berbasis *Convolutional Neural Networks* (CNN) untuk mendeteksi anomali visual pada peralatan industri, dan **(ii)** *Physics-Informed Neural Networks* (PINN) yang digabungkan dengan *Model Predictive Control* (MPC) untuk optimasi dinamika proses.

Pearson (2024) dalam penelitiannya yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa inspeksi visual manual yang selama ini menjadi tulang punggung pemeliharaan preventif memiliki tiga kelemahan fundamental: subjektivitas operator, keterbatasan cakupan pada peralatan *mission-critical*, serta tidak mampu mengkuantifikasi tingkat degradasi secara presisi. Studi tersebut mengusulkan arsitektur CNN multi-skala yang mampu mengekstraksi fitur spasial-temporal dari citra termal, citra RGB resolusi tinggi, dan citra akustik untuk mengidentifikasi cacat mikro pada bearing, korosi pada pipa, serta *misalignment* pada poros pompa.

Di sisi lain, Patel, Bhartiya, dan Gudi (2024) dalam publikasinya di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) melengkapi ekosistem tersebut dengan memperkenalkan kerangka MPC yang didorong oleh PINN, di mana hukum fisika proses (keseimbangan massa, energi, momentum) di-*encode* langsung ke dalam fungsi loss jaringan saraf. Pendekatan ini menjawab kelemahan utama model *black-box* yang selama ini membutuhkan data operasional dalam volume masif untuk menggeneralisasi perilaku *nonlinear* pada sistem proses kimia dan *batch manufacturing*.

Urgensi integratif keduanya dapat dilihat dari data empiris industri: kehilangan produktivitas akibat unplanned downtime pada pabrik manufaktur kelas dunia rata-rata mencapai USD 50 miliar per tahun secara global, dengan 70% kegagalan equipment disebabkan oleh degradasi yang sebenarnya sudah dapat dideteksi 30-60 hari sebelumnya melalui analisis visual dan dinamika proses. Bagi seorang insinyur industri, kemampuan mengintegrasikan deteksi anomali visual dengan kontrol prediktif bukan lagi keunggulan kompetitif, melainkan kebutuhan survival dalam pasar yang semakin fluktuatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali Visual

Landasan matematis CNN dimulai dari operasi konvolusi diskrit dua-dimensi. Untuk citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dan kernel $W \in \mathbb{R}^{k_h \times k_w \times C}$, *feature map* keluaran dihitung sebagai:

$$Y_{i,j} = f\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} X_{i+m,\, j+n} \cdot W_{m,n} + b\right)$$

di mana $f(\cdot)$ adalah fungsi aktivasi non-linear, umumnya ReLU $f(z) = \max(0, z)$, dan $b$ adalah bias. Untuk tugas klasifikasi anomali biner (normal vs. cacat), lapisan *fully connected* akhir menggunakan aktivasi sigmoid:

$$\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}, \quad z = \mathbf{w}^T \mathbf{h} + b$$

Fungsi loss yang umum digunakan adalah *binary cross-entropy*:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

Untuk arsitektur autoencoder yang digunakan dalam deteksi anomali tanpa-label (unsupervised), Pearson (2024) menggunakan *anomaly score* berbasis rekonstruksi:

$$S(\mathbf{x}) = \|\mathbf{x} - \hat{\mathbf{x}}\|_2^2 = \sum_{k=1}^{d}(x_k - \hat{x}_k)^2$$

di mana ambang batas $\tau$ ditetapkan sehingga $S(\mathbf{x}) > \tau$ mengindikasikan anomali.

### 2.2 Physics-Informed Neural Networks (PINN) untuk MPC

Kerangka PINN yang diajukan Patel dkk. (2024) meminimalkan fungsi loss gabungan:

$$\mathcal{L}_{total} = \lambda_d \mathcal{L}_{data} + \lambda_p \mathcal{L}_{phys}$$

di mana *data loss* mengukur kesesuaian dengan pengukuran:

$$\mathcal{L}_{data} = \frac{1}{M}\sum_{j=1}^{M}\left\| u_\theta(t_j, \mathbf{x}_j) - u_{obs}(t_j, \mathbf{x}_j) \right\|^2$$

dan *physics loss* memastikan jaringan memenuhi *governing equation* (misalnya persamaan reaksi- difusi atau dinamika reaktor CSTR):

$$\mathcal{L}_{phys} = \frac{1}{N}\sum_{i=1}^{N}\left\| \mathcal{N}[u_\theta](t_i, \mathbf{x}_i) - f(t_i, \mathbf{x}_i) \right\|^2$$

dengan $\mathcal{N}[\cdot]$ adalah operator diferensial nonlinear dan $f(\cdot)$ adalah *forcing term* atau residual fisika. Gradien dihitung melalui *automatic differentiation* pada komputasi graf.

### 2.3 Formulasi Model Predictive Control (MPC)

MPC menyelesaikan masalah optimasi receding-horizon pada setiap langkah sampling $k$:

$$\min_{u_0, \ldots, u_{N-1}} J = \sum_{k=0}^{N-1}\left[\mathbf{x}_k^T Q \mathbf{x}_k + \mathbf{u}_k^T R \mathbf{u}_k\right] + \mathbf{x}_N^T P \mathbf{x}_N$$

*dengan kendala dinamika:*

$$\mathbf{x}_{k+1} = g_\theta(\mathbf{x}_k, \mathbf{u}_k)$$

dan kendala operasional $h(\mathbf{x}_k, \mathbf{u}_k) \leq 0$. Di sini $g_\theta$ adalah model dinamika yang dipelajari PINN, $Q \succeq 0$ dan $R \succ 0$ adalah matriks bobot, dan $P$ menyelesaikan persamaan Riccati diskrit untuk menjamin stabilitas terminal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti protokol tujuh tahap yang distandardisasi berdasarkan integrasi kedua paper:

**Tahap 1 — Akuisisi Data Multisumber.** Instalasi kamera IP67 (resolusi minimum 1920×1080, frame rate 30 fps), sensor termal (rentang -20°C hingga 550°C), dan sensor proses (flow, pressure, temperature transmitter dengan akurasi ±0.1% FS). Data disimpan dalam *time-series database* (InfluxDB/TimeScale) dengan retensi minimum 24 bulan.

**Tahap 2 — Pra-pemrosesan Citra.** Normalisasi pixel value $X_{norm} = (X - \mu)/\sigma$, augmentasi geometris (rotasi, flip, *random crop*), dan segmentasi ROI menggunakan *Otsu thresholding* untuk memfokuskan komputasi pada area kritis.

**Tahap 3 — Pelatihan Model CNN.** Arsitektur transfer learning dari *ResNet-50* atau *EfficientNet-B3* yang telah di-*pre-train* pada ImageNet, dilakukan *fine-tuning* dengan dataset industri spesifik. Optimizer Adam dengan *learning rate* $\eta = 10^{-4}$, *batch size* 32, dan *early stopping* berbasis validasi loss. Pearson (2024) menekankan pentingnya *class balancing* melalui *focal loss*:

$$\mathcal{L}_{focal} = -\alpha_t(1 - \hat{y}_t)^\gamma \log(\hat{y}_t)$$

dengan $\gamma = 2$ untuk menangani kelangkaan citra cacat.

**Tahap 4 — Pelatihan Model PINN.** Penentuan persamaan fisika proses (misalnya model CSTR dua dimensi), pilih *collocation points* secara *latin hypercube sampling*, dan tune bobot $\lambda_d, \lambda_p$ melalui *grid search* pada validasi.

**Tahap 5 — Integrasi MPC-PINN.** Embed solusi PINN ke dalam solver MPC (CVXPY, CasADi, atau ACADO). Tentukan horizon prediksi $N_p = 20$ dan *control horizon* $N_c = 5$ dengan waktu sampling 60 detik.

**Tahap 6 — Deployment Edge-Cloud.** Model CNN dijalankan pada *edge device* (NVIDIA Jetson AGX