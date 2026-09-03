# 2179 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif serta Integrasi Physics-Informed Neural Networks dalam Model Predictive Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah muncul sebagai pilar strategis dalam transformasi digital industri manufaktur dan proses, menggantikan paradigma reaktif (run-to-failure) dan preventif berbasis jadwal tetap yang diketahui inefisien secara Total Cost of Ownership (TCO). Pearson (2024) dalam *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa integrasi Computer Vision berbasis *Convolutional Neural Networks* (CNN) ke dalam lini PdM memungkinkan deteksi anomali visual — seperti retakan mikro pada permukaan rol, korosi pada heat exchanger, misalignment pada poros, atau keausan abnormal pada cutting tool — secara *real-time* dengan akurasi yang sebelumnya tidak dapat dicapai oleh inspeksi manual. Urgensi permasalahan ini sangat nyata: studi lintas industri menunjukkan bahwa unplanned downtime menyebabkan kerugian produksi rata-rata 5–20% dari kapasitas tahunan, dengan nilai absolut mencapai puluhan juta dolar per insiden pada fasilitas petrokimia, manufaktur semikonduktor, dan pembangkitan energi. Secara teknis, tantangan utama terletak pada tiga hal sekaligus: (i) variabilitas kondisi operasi yang membuat fitur anomali sulit distandarisasi; (ii) ketersediaan data *labeled* yang sangat terbatas untuk kasus failure mode langka (long-tail distribution); dan (iii) kebutuhan akan *inference latency* rendah agar sistem dapat menutup loop dengan pengendali proses.

Pearson (2024) menekankan bahwa deep learning vision menggantikan pendekatan handcrafted feature extraction (misalnya HOG, SIFT, atau Local Binary Patterns) karena kemampuannya mempelajari representasi hierarkis yang invarian terhadap rotasi, translasi, dan perubahan iluminasi. Sementara itu, paper pendukung oleh Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menyoroti dimensi komplementer: ketika anomali visual terdeteksi, sistem kendali proses harus segera mengadaptasi trajectory operasional agar tidak terjadi runaway condition. Di sinilah *Physics-Informed Neural Networks* (PINNs) digabungkan dengan *Model Predictive Control* (MPC) — arsitektur yang memungkinkan state observer berbasis neural network tetap konsisten dengan hukum fisika (persamaan konservasi massa, energi, momentum) sehingga koreksi kendali tetap stabil secara termodinamika. Kombinasi PdM vision + PINN-MPC ini merepresentasikan blueprint *Closed-Loop Intelligent Maintenance and Control* yang menjadi frontier riset sistem industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Anomali Visual

Model deteksi anomali yang diajukan Pearson (2024) mengikuti paradigma reconstruction-based atau classification-based. Untuk pendekatan autoencoder convolutional, fungsi rekonstruksi didefinisikan sebagai:

$$\mathcal{L}_{\text{recon}}(x, \hat{x}) = \frac{1}{N}\sum_{i=1}^{N} \| x_i - \hat{x}_i \|_2^2$$

di mana $x_i \in \mathbb{R}^{H \times W \times C}$ adalah citra input dan $\hat{x}_i$ adalah rekonstruksinya. *Anomaly score* untuk citra baru dihitung sebagai:

$$s(x) = \| x - f_\theta(g_\theta(x)) \|_2^2$$

dengan $g_\theta$ sebagai encoder dan $f_\theta$ sebagai decoder. Keputusan anomali ditentukan oleh ambang $\tau$:

$$y = \begin{cases} 1 \; (\text{anomali}), & \text{jika } s(x) \geq \tau \\ 0 \; (\text{normal}), & \text{lainnya} \end{cases}$$

Untuk pendekatan klasifikasi supervised (misalnya fine-tuned ResNet-50 atau EfficientNet-B0), fungsi损失 berupa binary cross-entropy:

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\left[ y_i \log \hat{y}_i + (1-y_i)\log(1-\hat{y}_i) \right]$$

### 2.2 Physics-Informed Neural Network untuk MPC

Patel et al. (2024) mengusulkan kerangka PINN-MPC di mana neural network $\hat{u}_\theta(x,t)$ mewakili aksi kendali dan state predictor $\hat{x}_\theta(x,t)$, dengan *physics loss* berupa residual PDE proses:

$$\mathcal{L}_{\text{physics}} = \frac{1}{M}\sum_{j=1}^{M}\left\| \mathcal{N}[\hat{x}_\theta](x_j,t_j) \right\|_2^2$$

di mana $\mathcal{N}$ adalah operator PDE (misalnya $\frac{\partial \hat{x}}{\partial t} - \mathcal{F}(\hat{x},\hat{u}_\theta,\nabla\hat{x})$). Total loss adalah:

$$\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}} + \lambda_b \mathcal{L}_{\text{boundary}}$$

dengan $\lambda_d, \lambda_p, \lambda_b$ sebagai hiperparameter bobot. MPC kemudian menyelesaikan masalah optimasi kuadratik pada setiap time-step $k$:

$$\min_{u_{k:k+H_c}} \sum_{i=0}^{H_p-1}\left[ (x_{k+i|k} - x_{\text{ref}})^\top Q (x_{k+i|k} - x_{\text{ref}}) + u_{k+i|k}^\top R \, u_{k+i|k} \right]$$

subject to plant dynamics $\mathcal{F}$ dan konstrain $x \in \mathcal{X}$, $u \in \mathcal{U}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi engineering mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Akuisisi Data & Kalibrasi Vision System.** Kamera industri (resolusi minimum 1920×1080, frame rate 30 fps) dipasang pada *fixed mounting bracket* dengan pencahayaan terkontrol (LED ring light, intensitas 800–1200 lux, color temperature 5000K). Kalibrasi dilakukan menggunakan *checkerboard target* untuk mendapatkan intrinsic matrix $\mathbf{K}$ dan distortion coefficients $(k_1,k_2,p_1,p_2,k_3)$ sehingga *undistortion* citra presisi.

**Tahap 2 — Preprocessing & Augmentation.** Citra dinormalisasi ke $[0,1]$, dilakukan resize ke $224\times224$ atau $256\times256$, dan augmentasi geometris/fotometris (rotasi $\pm 15°$, flip horizontal, brightness jitter $\pm 20\%$) untuk meningkatkan generalisasi model terhadap variasi kondisi lapangan.

**Tahap 3 — Training & Validation Pipeline.** Dataset dibagi 70/15/15 untuk train/validation/test, dengan *stratified sampling* agar distribusi kelas failure mode terjaga. Model dilatih menggunakan Adam optimizer ($\beta_1=0.9$, $\beta_2=0.999$, learning rate awal $10^{-4}$ dengan *cosine annealing*), batch size 32, dan *early stopping* berpatokan pada validation loss dengan patience 10 epoch.

**Tahap 4 — Threshold Calibration & Drift Monitoring.** Threshold $\tau$ ditetapkan menggunakan validation set agar F1-score optimal, kemudian dimonitor terhadap *concept drift* dengan sliding window Page-Hinkley test. Jika drift terdeteksi ($\text{PH} > \lambda_{\text{PH}}$), model dijadwalkan *retraining* dengan data baru.

**Tahap 5 — Integrasi PINN-MPC & Closed-Loop Control.** Output anomali dari vision module menjadi *trigger event* yang menginisiasi re-optimization trajectory MPC. PINN memastikan state prediction tetap konsisten dengan hukum kekalan, dan *safety filter* (Emergency Shutdown System) diaktifkan jika anomaly score $> \tau_{\text{critical}}$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah fasilitas manufaktur baja memiliki lini *continuous casting* dengan 8 unit *segment rolls*. CNN vision system memantau kondisi permukaan rol setiap 5 detik. Kita akan menghitung kinerja deteksi anomali dan dampaknya terhadap jadwal pemeliharaan.

**Data Operasional:**
- Total observasi harian: $N = 17{,}280$ citra (interval 5 detik × 24 jam × 8 rol / 4 inspection station)
- Distribusi aktual: 17{,}107 citra normal (98.9%), 173 citra anomali (1.1%) — terdiri dari 62 *thermal crack*, 54 *surface score*, 38 *crust formation*, 19 *misalignment*
- Hasil model pada test set (Pearson, 2024, baseline ResNet-50 fine-tuned):

| Kelas | Precision | Recall | F1-score | Support |
|---|---|---|---|---|
| Thermal crack | 0.94 | 0.92 | 0.93 | 62 |
| Surface score | 0.91 | 0.89 | 0.90 | 54 |
| Crust formation | 0.96 | 0.95 | 0.955 | 38 |
| Misalignment | 0.88 | 0.84 | 0.86 | 19 |
| **Macro Avg** | **0.9225** | **0.90** | **0.911** | **173** |

**Perhitungan Threshold & Anomaly Score.** Misalkan untuk *thermal crack*, validation set menghasilkan skor rekonstruksi autoencoder dengan distribusi: normal $\sim \mathcal{N}(\mu_n=0.018, \sigma_n^2=0.004^2)$, anomali $\sim \mathcal{N}(\mu_a=0.142, \sigma_a^2=0.035^2)$. Threshold optimal $\tau$ memaksimalkan Youden's J-statistic:

$$J(\tau) = \text{TPR}(\tau) - \text{FPR}(\tau) = \text{Se}(\tau) - [1-\text{Sp}(\tau)]$$

Dengan $\tau = 0.078$:

$$\text{TPR} = \Phi\!\left(\frac{\tau-\mu_a}{\sigma_a}\right) = \Phi\!\left(\frac{0.078-0.142}{0.035}\right) = \Phi(-1.829) \approx 0.0337$$

Nilai rendah ini menunjukkan distribusi normal cukup terpisah; threshold dinaikkan ke persentil ke-95 dari skor normal:

$$\tau^* = \mu_n + 1.645\sigma_n = 0.018 + 1.645 \times 0.004 = 0.02458$$

**Perhitungan Dampak Ekonomi.** Biaya unplanned downtime lini = \$45{,}000/jam. Frekuensi failure tanpa PdM = 2.4 insiden/bulan, dengan MTTR rerata 6.5 jam. Dengan PdM, deteksi dini memungkinkan preventive intervention pada 78% kasus sebelum *catastrophic failure*, sehingga:

$$\Delta\text{Cost} = 0.78 \times 2.4 \times 6.5 \times \$45{,}000 = \$548{,}280/\text{bulan}$$

Pengurangan biaya tahunan: $\approx \$6.58$ juta, dengan payback period sistem (CAPEX \$185{,}000 + instalasi \$40{,}000 + pelatihan \$15{,}000) kurang dari **3 hari operasi**.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologi.** Pearson (2024) mengakui tiga.limitasi utama: pertama, *domain shift* antara kondisi pelatihan (laboratorium terkontrol) dan operasi nyata (debu, uap, getaran) dapat menurunkan akurasi 8–15%; kedua, interpretabilitas CNN masih rendah dibanding rule-based expert system, menghambat auditability untuk industri regulated (farmasi, aerospace); ketiga, false negative pada *thermal crack* tahap sub-milimeter masih menjadi *blind spot* yang memerlukan sensor komplementer (eddy current, ultrasound). Patel et al. (2024) menambahkan bahwa PINN-MPC sensitif terhadap kualitas *physics prior* — jika persamaan governing tidak lengkap (misalnya fenomena