# 2723 — Deteksi Anomali Berbasis Citra dan Kendali Prediktif Berbasis Jaringan Saraf Terfisik untuk Pemeliharaan dan Pengendalian Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mentransformasi fundamental cara fasilitas manufaktur dan proses mengelola aset fisik mereka. Dalam laporan Pearson (2024) yang dipublikasikan melalui *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), ditegaskan bahwa anomali visual pada peralatan industri—seperti retakan mikro pada turbin, korosi pada heat exchanger, misalignment pada roller bearing, atau cacat solder pada printed circuit board—menyumbang rata-rata 23–38% dari total *unscheduled downtime* pada plant manufaktur kelas dunia. Kerugian ekonomis yang ditimbulkan oleh satu jam *unplanned shutdown* pada industri petrokimia dapat melampaui USD 1,4 juta, sehingga kebutuhan akan sistem deteksi anomali yang *real-time*, non-invasif, dan memiliki akurasi tinggi menjadi sangat strategis.

Pendekatan konvensional berbasis *vibration analysis*, *thermography*, dan inspeksi manual terbukti memiliki tiga kelemahan struktural: (1) *false negative rate* yang tinggi pada tahap degradasi awal, (2) ketergantungan pada teknisi ahli dengan *domain knowledge* yang semakin langka, dan (3) ketidakmampuan untuk melakukan generalisasi lintas jenis peralatan. Pearson (2024) mengusulkan arsitektur *Convolutional Neural Network* (CNN) berbasis *transfer learning* yang dilatih menggunakan dataset citra termal dan RGB beresolusi tinggi untuk mengidentifikasi pola anomali pada komponen kritis.

Di sisi komplementer, Patel, Bhartiya, dan Gudi (2024) dalam paper mereka yang terbit di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menyoroti bahwa kendali optimal pada sistem proses—seperti *Continuous Stirred Tank Reactor* (CSTR), kolom distilasi, dan boiler—tidak lagi cukup hanya mengandalkan model first-principles yang kaku atau PID controller klasik. Mereka mengintegrasikan *Physics-Informed Neural Networks* (PINNs) ke dalam kerangka *Model Predictive Control* (MPC) untuk menangkap dinamika nonlinier sambil mempertahankan kepatuhan terhadap hukum kekekalan massa, energi, dan momentum. Sinergi keduanya—CNN untuk *asset health monitoring* dan PINN-MPC untuk *process control optimization*—membentuk pilar utama *smart manufacturing* yang dibahas dalam modul ini.

Urgensi penerapan gabungan ini juga didorong oleh tren *digital twin adoption* yang tumbuh 38% CAGR (2023–2030) menurut berbagai studi konsultan, di mana *feedback loop* antara kondisi fisik peralatan dan strategi operasional menjadi semakin penting. Kegagalan mengintegrasikan kedua aspek ini akan menghasilkan *silo decision-making*: tim *reliability engineering* tidak memiliki akses ke kendali proses, sementara tim *process control* tidak memahami kondisi degradasi aset yang mereka operasikan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Pearson (2024) membangun pipeline berdasarkan *backbone* CNN *pre-trained* (misalnya ResNet-50 atau EfficientNet-B3) yang di-*fine-tune* menggunakan dataset anomali spesifik industri. Operasi konvolusi dua dimensi pada layer ke-$l$ didefinisikan sebagai:

$$y_{i,j,k}^{(l)} = \sigma\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} W_{m,n,k}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b_k^{(l)}\right)$$

di mana $W^{(l)} \in \mathbb{R}^{M \times N \times K}$ adalah kernel konvolusi, $b_k^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi nonlinier (umumnya ReLU: $\sigma(z) = \max(0,z)$). Untuk tugas deteksi anomali, Pearson (2024) menggunakan pendekatan *reconstruction-based* dengan *autoencoder*, di mana citra input $x \in \mathbb{R}^{H \times W \times C}$ dipetakan ke *latent space* berdimensi rendah $z = E_\phi(x)$ dan direkonstruksi kembali menjadi $\hat{x} = D_\theta(z)$. *Anomaly score* dihitung menggunakan gabungan *pixel-wise loss* dan *Structural Similarity Index* (SSIM):

$$\mathcal{L}_{rec}(x, \hat{x}) = \alpha \cdot \frac{1}{HWC}\sum_{i,j,k}(x_{i,j,k} - \hat{x}_{i,j,k})^2 + (1-\alpha)\cdot (1 - \text{SSIM}(x, \hat{x}))$$

dengan SSIM yang diformulasikan sebagai:

$$\text{SSIM}(x, \hat{x}) = \frac{(2\mu_x\mu_{\hat{x}} + C_1)(2\sigma_{x\hat{x}} + C_2)}{(\mu_x^2 + \mu_{\hat{x}}^2 + C_1)(\sigma_x^2 + \sigma_{\hat{x}}^2 + C_2)}$$

di mana $C_1 = (K_1 L)^2$ dan $C_2 = (K_2 L)^2$ adalah konstanta stabilisasi dengan $L = 255$ untuk citra 8-bit. Ambang batas (threshold) anomali $\tau$ ditetapkan melalui persentil ke-99 dari skor rekonstruksi pada data *normal-only*, dan piksel dengan skor melebihi $\tau$ diklasifikasikan sebagai anomali.

### 2.2 Physics-Informed Neural Networks untuk MPC

Patel et al. (2024) mengusulkan PINN yang didefinisikan oleh parameter $\theta$ pada jaringan saraf $u_\theta(t, x)$ yang memenuhi *partial differential equation* (PDE) bentuk umum:

$$\mathcal{F}\left(t, x, u_\theta, \frac{\partial u_\theta}{\partial t}, \frac{\partial u_\theta}{\partial x}, \frac{\partial^2 u_\theta}{\partial x^2}, \ldots\right) = 0$$

Fungsi *loss* total PINN menggabungkan *data mismatch* dan *physics residual*:

$$\mathcal{L}_{PINN}(\theta) = \underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d}\left(u_\theta(t_i, x_i) - u_i^{obs}\right)^2}_{\mathcal{L}_{data}} + \lambda \underbrace{\frac{1}{N_r}\sum_{j=1}^{N_r}\left[\mathcal{F}(t_j, x_j, u_\theta, \ldots)\right]^2}_{\mathcal{L}_{physics}}$$

di mana $\lambda$ adalah *weighting factor* yang menseimbangkan kedua term, $N_d$ adalah jumlah titik data observasi, dan $N_r$ adalah jumlah *collocation points* di mana hukum fisika dievaluasi (biasanya dipilih melalui *Latin Hypercube Sampling*).

### 2.3 Formulasi Model Predictive Control

MPC dengan model PINN menyelesaikan masalah optimasi rekursif pada setiap *sampling time* $k$:

$$\min_{u_0, u_1, \ldots, u_{N-1}} J = \sum_{k=0}^{N-1}\left[(x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k\right] + x_N^T P x_N$$

*dengan kendala*:

$$x_{k+1} = f_{PINN}(x_k, u_k)$$
$$u_{min} \leq u_k \leq u_{max}$$
$$\Delta u_{min} \leq u_k - u_{k-1} \leq \Delta u_{max}$$

di mana $f_{PINN}$ adalah model dinamika yang dipelajari oleh PINN, $N$ adalah *prediction horizon*, $Q \succ 0$ dan $R \succ 0$ adalah matriks pembobot biaya state-tracking dan *control effort*, dan $P$ adalah solusi dari *Discrete Algebraic Riccati Equation* (DARE) untuk menjamin stabilitas *terminal cost*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial-grade dari sistem terintegrasi ini mengikuti SOP berlapis sebagai berikut:

**Tahap 1 – Akuisisi Data Citra.** Kamera industri (resolusi minimum 1920×1080, frame rate ≥ 30 fps) dipasang pada *robotic arm* atau *fixed gantry* dengan pencahayaan *structured LED* (5000–6500 K) untuk memastikan konsistensi iluminasi. Citra disimpan dalam format lossless (PNG atau TIFF) dengan metadata sensor (timestamp, suhu ambient, humidity).

**Tahap 2 – Preprocessing Pipeline.** Citra di-resize ke 224×224 piksel, dinormalisasi ke rentang [0,1], dan diaugmentasi menggunakan *random rotation* (±15°), *horizontal/vertical flip*, dan *color jitter* untuk meningkatkan *robustness*. Normalisasi *Z-score* diterapkan per-channel:

$$\hat{x}_{i,j,k} = \frac{x_{i,j,k} - \mu_k}{\sigma_k}$$

**Tahap 3 – Training CNN.** Dataset dibagi dengan rasio 70:15:15 untuk *training/validation/testing*. *Backbone* ResNet-50 di-*freeze* pada 40 layer pertama dan hanya *fully-connected head* yang di-*fine-tune* menggunakan *learning rate* $1 \times 10^{-4}$ dengan *Adam optimizer* dan *cosine annealing scheduler*. *Early stopping* diaktifkan dengan *patience* = 10 epoch berdasarkan *validation loss*.

**Tahap 4 – Deployment Inference.** Model diekspor ke format ONNX dan dideploy pada edge device (NVIDIA Jetson AGX Orin) dengan *inference latency* target ≤ 50 ms per citra.

**Tahap 5 – Integrasi PINN-MPC.** State process variables (T, P, F) di-stream ke PINN yang berjalan pada *process control server* dengan *refresh rate* 1 Hz. Output kendalan $u^*$ dihitung setiap *sampling time* dan dikirim ke Distributed Control System (DCS) melalui protokol OPC-UA.

**Tahap 6 – Feedback Loop dengan Predictive Maintenance.** Hasil deteksi anomali dari CNN di-*feed* ke *maintenance planning module* yang menyesuaikan *remaining useful life* (RUL) prediction dan *spare part inventory* menggunakan *Bayesian update*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Kasus CNN