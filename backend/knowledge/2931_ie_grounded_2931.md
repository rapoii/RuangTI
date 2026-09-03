# 2931 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan peralatan industri merupakan salah satu fungsi kritikal dalam rantai nilai manufaktur modern. Studi Pearson (2024) yang dipublikasikan melalui *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti pergeseran paradigma dari *reactive maintenance* dan *preventive time-based maintenance* menuju *predictive maintenance* (PdM) berbasis data citra. Dalam konteks industri 4.0, downtime yang tidak terjadwal pada peralatan rotasi (pompa, kompresor, turbin, motor listrik) serta peralatan statis (bejana tekan, heat exchanger) menimbulkan kerugian ekonomi yang signifikan. Secara empiris, biaya downtime tidak terjadwal pada industri proses kontinyu berkisar antara USD 10.000–250.000 per jam, tergantung kompleksitas lini produksi dan sektor industri (Pearson, 2024).

Urgensi operasional semakin meningkat ketika kegagalan komponen tidak terdeteksi hingga fase degradasi lanjut. Pearson (2024) menunjukkan bahwa inspeksi visual manual memiliki *human-dependent variability* yang tinggi, dengan tingkat *false negative* deteksi cacat permukaan (retak, korosi, delaminasi) berkisar 18–35% pada inspektur berpengalaman, dan lebih tinggi pada inspektur dengan pengalaman terbatas. Variabilitas ini menurunkan keandalan sistem inspeksi dan meningkatkan risiko *unplanned shutdown*. Solusi berbasis Computer Vision dengan arsitektur *Convolutional Neural Networks* (CNN) menawarkan kapasitas generalisasi fitur yang konsisten terhadap variasi pencahayaan, orientasi, dan noise lingkungan industri.

Dari perspektif teknis-ekonomi, transisi menuju PdM berbasis CNN memerlukan investasi awal pada infrastruktur akuisisi citra (kamera industri resolusi tinggi, *thermal imaging*, *hyperspectral sensors*), platform komputasi edge (GPU embedded, TPU), serta integrasi dengan sistem CMMS/EAM. Namun, *return on investment* (ROI) dapat dicapai dalam horizon 12–24 bulan melalui reduksi *unplanned downtime* sebesar 30–50% dan perpanjangan *mean time between failure* (MTBF) sebesar 20–40% (Pearson, 2024).

Studi pelengkap dari Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memperluas cakupan menjadi integrasi antara *Physics-Informed Neural Networks* (PINNs) dengan *Model Predictive Control* (MPC) untuk sistem proses. Integrasi ini relevan karena output deteksi anomali dari modul vision-based CNN dapat menjadi sinyal umpan balik bagi pengontrol proses untuk melakukan *set-point adjustment* atau *load shedding* sebelum kegagalan terjadi. Dengan demikian, ekosistem PdM vision-based tidak berdiri sendiri, melainkan menjadi bagian dari *closed-loop cyber-physical production system* yang menggabungkan observasi (vision), inferensi (CNN/PINN), dan aksi kontrol (MPC).

Konteks aplikasi industri yang dibahas mencakup: (a) manufaktur semikonduktor yang memerlukan inspeksi wafer sub-mikron; (b) industri makanan dan minuman dengan inspeksi kemas; (c) industri petrokimia yang memerlukan monitoring korosi pipa dan tangki; serta (d) industri pembangkitan energi dengan inspeksi turbin dan boiler. Pada modul ini, pembahasan difokuskan pada peralatan rotasi dan statis sebagai kasus benchmark dengan ketersediaan data publik yang luas.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Anomali Citra

Arsitektur CNN yang digunakan dalam kerangka PdM mengikuti pola encoder–decoder atau backbone klasifikasi yang telah terlatih (*transfer learning*). Pearson (2024) memanfaatkan arsitektur berbasis ResNet-50 dan EfficientNet-B0 yang disesuaikan dengan task *binary* (normal/anomali) atau *multi-class* (jenis cacat). Operasi fundamental CNN adalah konvolusi dua dimensi:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} W_{m,n}^{(l)} \cdot x_{i+m,\, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $y_{i,j}^{(l)}$ adalah aktivasi neuron pada lapisan $l$ di posisi $(i,j)$, $W_{m,n}^{(l)}$ adalah elemen kernel konvolusi berukuran $k_h \times k_w$, $x^{(l-1)}$ adalah *feature map* masukkan, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (ReLU, LeakyReLU, atau GELU).

Untuk task deteksi anomali pada permukaan peralatan, digunakan pendekatan *reconstruction-based* menggunakan *Convolutional Autoencoder* (CAE) atau *Variational Autoencoder* (CAE-VAE). Model CAE-VAE mempelajari distribusi laten $\mathbf{z} \sim \mathcal{N}(\mu_\phi(\mathbf{x}), \sigma_\phi(\mathbf{x})^2)$ dari citra kondisi normal. Anomali dideteksi melalui *anomaly score* berbasis rekonstruksi:

$$\mathcal{S}(\mathbf{x}) = \frac{1}{N}\sum_{i=1}^{N}\left\| \mathbf{x}_i - \hat{\mathbf{x}}_i \right\|_2^2 + \beta \cdot D_{KL}\left(q_\phi(\mathbf{z}|\mathbf{x}) \,\|\, p(\mathbf{z})\right)$$

di mana $\|\mathbf{x} - \hat{\mathbf{x}}\|_2^2$ adalah *reconstruction error*, $D_{KL}$ adalah *Kullback–Leibler divergence* antara distribusi laten yang dipelajari dan prior Gaussian $\mathcal{N}(0, \mathbf{I})$, dan $\beta$ adalah koefisien penyeimbang (regularisasi $\beta$-VAE). Threshold $\tau$ ditetapkan berdasarkan *percentile* dari distribusi $\mathcal{S}$ pada data validasi normal (Pearson, 2024).

### 2.2 Fungsi Loss untuk Pelatihan

Pelatihan menggunakan *compound loss function* yang menggabungkan rekonstruksi spasial dan regularisasi struktural:

$$\mathcal{L}_{total} = \alpha \mathcal{L}_{MSE} + \gamma \mathcal{L}_{SSIM} + \lambda \mathcal{L}_{perceptual}$$

di mana:

$$\mathcal{L}_{MSE} = \frac{1}{H \cdot W}\sum_{i=1}^{H}\sum_{j=1}^{W}\left(x_{i,j} - \hat{x}_{i,j}\right)^2$$

$$\mathcal{L}_{SSIM} = 1 - \frac{(2\mu_x \mu_{\hat{x}} + C_1)(2\sigma_{x\hat{x}} + C_2)}{(\mu_x^2 + \mu_{\hat{x}}^2 + C_1)(\sigma_x^2 + \sigma_{\hat{x}}^2 + C_2)}$$

Komponen $\mathcal{L}_{perceptual}$ dihitung sebagai jarak L2 antara *feature maps* intermediet hasil ekstraksi jaringan pre-trained VGG-16 pada citra asli dan rekonstruksi. Pendekatan ini meningkatkan kemampuan model menangkap anomali tekstur halus yang relevan untuk inspeksi cacat mikro pada permukaan logam (Pearson, 2024).

### 2.3 Metrik Evaluasi Kinerja

Kinerja sistem deteksi anomali dievaluasi menggunakan metrik klasifikasi standar yang disesuaikan untuk skenario *imbalanced* (cacat umumnya <5% dari total observasi):

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}, \quad F_1 = \frac{2 \cdot P \cdot R}{P + R}$$

Untuk konteks PdM, *recall* (sensitivitas) memiliki bobot yang lebih tinggi karena *false negative* (cacat tidak terdeteksi) dapat berujung pada kegagalan katastrofik. Pearson (2024) melaporkan bahwa model CNN dengan augmentasi data dan *class-weighted loss* mencapai $F_1 \geq 0{,}93$ pada dataset MVTec AD untuk kategori cacat permukan logam.

### 2.4 Physics-Informed Neural Networks untuk Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) mengembangkan kerangka PINN-MPC di mana *neural network* disisipkan dengan *physics-based residual loss* yang menjamin kepatuhan terhadap hukum kekekalan massa, energi, dan momentum. Formulasi umum PINN untuk sistem proses dengan *Ordinary Differential Equations* (ODE) atau *Partial Differential Equations* (PDE):

$$\mathcal{L}_{PINN} = \mathcal{L}_{data} + \omega_p \mathcal{L}_{physics}$$

di mana:

$$\mathcal{L}_{physics} = \frac{1}{N_r}\sum_{i=1}^{N_r} \left\|\mathcal{F}(\hat{\mathbf{y}}(t_i; \theta)) - \mathbf{0}\right\|^2$$

dengan $\mathcal{F}$ adalah operator diferensial yang mendeskripsikan dinamika sistem. Contoh untuk reaktor CSTR isotermal:

$$\mathcal{F} = \frac{dC_A}{dt} - \left(\frac{F}{V}(C_{A,in} - C_A) - k_0 e^{-E_a/RT} C_A\right)$$

Solusi optimal MPC yang digerakkan oleh model hybrid (PINN + first-principles) diminimasi pada setiap *sampling time* $k$:

$$\min_{\mathbf{u}_k} J = \sum_{j=0}^{N_p-1} \left\|\mathbf{x}_{k+j|k} - \mathbf{x}^{ref}\right\|_Q^2 + \sum_{j=0}^{N_c-1}\left\|\Delta \mathbf{u}_{k+j|k}\right\|_R^2$$

dengan kendala dinamika sistem $\mathbf{x}_{k+j+1|k} = f_{PINN}(\mathbf{x}_{k+j|k}, \mathbf{u}_{k+j|k})$, batas operasi $\mathbf{u}_{min} \leq \mathbf{u}_{k+j|k} \leq \mathbf{u}_{max}$, dan horizon prediksi $N_p$, horizon kontrol $N_c$ (Patel, Bhartiya, & Gudi, 2024).

### 2.5 Formulasi Penjadwalan Pemeliharaan Prediktif

Dengan terdeteksinya anomali pada waktu $t_d$ dan estimasi *Remaining Useful Life* (RUL) $T_{RUL}$, keputusan pemeliharaan dapat diformulasikan sebagai masalah optimasi biaya:

$$\min_{t_m \in [t_d, t_d + T_{RUL}]} \mathbb{E}\left[C_{PM} \cdot \mathbb{1}_{t_m < T_f} + C_f \cdot \mathbb{1}_{t_m \geq T_f}\right]$$

di mana $C_{PM}$ adalah biaya pemeliharaan preventif terjadwal, $C_f$ adalah biaya kegagalan (downtime + perbaikan), dan $T_f$ adalah *time-to-failure* stokastik. Strategi optimal menentukan penjadwalan inspeksi/pemeliharaan berbasis *risk-informed threshold* yang menurunkan ekspektasi biaya total siklus hidup (Pearson, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Vision-Based PdM

Implementasi sistem deteksi anomali berbasis CNN untuk PdM mengikuti arsitektur berlapis yang terstandardisasi. Diagram alir proses operasional mengikuti tahapan berikut:

**Tahap 1 — Akuisisi Data Citra.** Pemasangan kamera industri (CCD/CMOS monokromatik atau RGB, resolusi minimum 1920×1080 piksel) pada *stationary mount* atau *robotic crawler* (untuk inspeksi pipa/tangki). Pencahayaan terkontrol menggunakan *ring light*, *backlight*, atau *dome light* dengan intensitas 800–1200 lux. Akuisisi mengikuti protokol ISO 9001 untuk konsistensi data.

**Tahap 2 — Preprocessing Citra.** Tahapan preprocessing mencakup: *resize* ke dimensi standar (misal 224×224 untuk ResNet-50), *normalisasi* piksel $[0, 255] \rightarrow [0, 1]$, *white balance correction*, dan *noise filtering* (Gaussian atau median filter). Augmentasi data selama pelatihan mencakup rotasi, translasi, flip, *brightness/contrast jitter*, dan *cutout* untuk meningkatkan *robustness* model.

**Tahap 3 — Pelatihan Model.** Dataset citra kondisi normal (kelas mayoritas, >10.000 sampel per kategori peralatan) digunakan melatih CAE-VAE. Dataset cacat berlabel (≥1.500 sampel per kelas cacat) digunakan melatih classifier CNN. Validasi silang 5-fold untuk generalisasi. Hyperparameter tuning menggunakan Bayesian optimization dengan ruang pencarian: *learning rate* $[10^{-5}, 10^{-2}]$, *batch size* $[16, 128]$, *dropout* $[0.1, 0.5]$.

**Tahap 4 — Inferensi Real-Time.** Inferensi dilakukan pada *edge device* (NVIDIA Jetson Orin, Google Coral) dengan *latency* <50 ms per citra, *throughput* ≥20 FPS. Pipeline inferensi menggunakan TensorRT atau ONNX Runtime untuk optimasi.

**Tahap 5 — Integrasi MPC dan Penjadwalan Pemeliharaan.** Sinyal anomali dari modul vision dikirim ke *supervisory control system* (SCADA/DCS)