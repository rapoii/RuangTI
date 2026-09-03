# 1731 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Jaringan Saraf Konvolusional untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mentransformasi fundamental paradigma pemeliharaan aset produksi dari *corrective* dan *preventive maintenance* konvensional menuju *predictive maintenance* (PdM) yang digerakkan oleh data. Dalam konteks ini, **James Pearson (2024)** [DOI: 10.2139/ssrn.5266589] menyoroti bahwa kegagalan tak terencana pada peralatan kritis—seperti pompa sentrifugal, motor listrik, bearing mesin CNC, dan turbin—menyebabkan *downtime* rata-rata 4–8 jam per kejadian di sektor manufaktur diskrit, dengan kerugian ekonomi yang diestimasi mencapai USD 50.000–250.000 per jam pada industri *semiconductor* dan *oil & gas*. Akar masalahnya adalah tidak terdeteksinya degradasi fungsional secara dini karena metode inspeksi visual tradisional bersifat *subjective*, intermiten, dan sangat bergantung pada keahlian teknisi senior.

Pearson (2024) mengargumentasikan bahwa Computer Vision berbasis Deep Learning, khususnya Convolutional Neural Networks (CNN), menawarkan pendekatan *non-invasive* dan *scalable* untuk mengonversi sinyal multi-fisik—seperti getaran, termogram inframerah, dan citra akustik—ke dalam representasi citra yang dapat dipelajari secara hierarkis. Pendekatan ini menjawab tiga limitasi utama PdM konvensional: (i) *feature engineering* manual yang *labor-intensive*, (ii) akurasi rendah pada data *imbalanced* (rasio normal:anomali ≈ 100:1), dan (iii) *false positive rate* tinggi yang membebani tim pemeliharaan dengan alarm palsu.

Secara paralel, **Patel, Bhartiya, dan Gudi (2024)** [DOI: 10.1016/j.ifacol.2024.08.431] melengkapi diskursus ini dengan mengusulkan integrasi Physics-Informed Neural Networks (PINN) ke dalam Model Predictive Control (MPC) untuk sistem proses. Kontribusi mereka menunjukkan bahwa ketika keputusan pemeliharaan dan kontrol operasional digabungkan dalam satu kerangka optimasi dinamis, *total cost of ownership* dapat ditekan hingga 15–25% melalui penjadwalan inspeksi vision-based yang sinkron dengan trajectory kontrol optimal. Kedua literatur ini bersama-sama membentuk perspektif *cyber-physical* yang menjadi pilar keputusan Teknik Industri modern: di mana persepsi visual (vision), pembelajaran mesin (learning), dan fisika proses (physics) bertemu dalam satu *closed-loop* keputusan rekayasa.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Pearson (2024) membangun arsitektur deteksi anomali dengan memodifikasi backbone CNN (convolutional neural network) untuk klasifikasi biner $\mathcal{Y} \in \{0,1\}$, di mana $y=1$ mengindikasikan anomali. Operasi fundamental konvolusi 2-D didefinisikan sebagai:

$$(f * k)[i,j] = \sum_{m=0}^{M-1}\sum_{n=0}^{N-1} f[i+m,\, j+n] \cdot k[m,n] + b$$

di mana $f \in \mathbb{R}^{H \times W}$ adalah citra input, $k$ adalah kernel konvolusi berukuran $M \times N$, dan $b$ adalah bias. Aktivasi non-linear menggunakan Rectified Linear Unit (ReLU):

$$\sigma(x) = \max(0, x)$$

Untuk mengurangi dimensi fitur spasial, *max-pooling* diterapkan:

$$p[i,j] = \max_{(m,n)\in \mathcal{R}_{i,j}} h[i+m,\, j+n]$$

di mana $\mathcal{R}_{i,j}$ adalah *receptive field* pooling. Setelah beberapa blok konvolusi-pooling, fitur diratakan (*flatten*) dan dilewatkan ke *fully-connected layer* dengan aktivasi sigmoid:

$$\hat{y} = \sigma_{\text{sigmoid}}(W_L \cdot \mathbf{h}_{L-1} + b_L) = \frac{1}{1 + e^{-(W_L \mathbf{h}_{L-1} + b_L)}}$$

### 2.2 Fungsi Loss dan Optimasi

Mengingat ketidakseimbangan kelas (*imbalanced dataset*), Pearson (2024) menggunakan *Focal Loss* sebagai pengganti *cross-entropy* standar:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas target, $\alpha_t$ adalah *weighting factor* untuk kelas positif, dan $\gamma \geq 0$ adalah *focusing parameter* yang menekan kontribusi *easy negatives*. Optimasi parameter $\theta = \{W^{(\ell)}, b^{(\ell)}\}_{\ell=1}^{L}$ dilakukan dengan Adam optimizer:

$$\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

dengan $\eta$ sebagai *learning rate*, dan $\hat{m}_t$, $\hat{v}_t$ adalah estimasi momen pertama dan kedua terkoreksi-bias dari gradien.

### 2.3 Formulasi Physics-Informed Neural Networks (PINN)

Patel *et al.* (2024) membangun PINN dengan menyertakan residual persamaan diferensial dalam fungsi loss. Untuk sistem proses yang govern oleh PDE:

$$\mathcal{N}[u(x,t)] = 0$$

di mana $\mathcal{N}$ adalah operator diferensial nonlinear, total loss didefinisikan sebagai:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}} + \lambda_b \mathcal{L}_{\text{BC/IC}}$$

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{i=1}^{N_p} \left| \frac{\partial u_\theta}{\partial t}\bigg|_{(x_i,t_i)} + \mathcal{N}_\theta[u_\theta](x_i, t_i) \right|^2$$

Residual ini dihitung secara *automatic differentiation* terhadap parameter jaringan $\theta$, memungkinkan jaringan belajar konsisten dengan hukum fisika meskipun data eksperimen terbatas.

### 2.4 Model Predictive Control (MPC) dengan Model Hibrida

Formulasi MPC yang menggunakan model PINN sebagai *predictor* adalah:

$$\min_{u_0, \ldots, u_{N_c-1}} J = \sum_{k=0}^{N_p-1} \|x_k - x_{\text{ref}}\|_Q^2 + \sum_{k=0}^{N_c-1} \|u_k\|_R^2$$

$$\text{subject to: } x_{k+1} = f_{\text{PINN}}(x_k, u_k),\quad u_k \in \mathcal{U},\quad x_k \in \mathcal{X}$$

di mana $N_p$ dan $N_c$ adalah *prediction* dan *control horizon*, $Q \succeq 0$ dan $R \succ 0$ adalah matriks pembobot, dan $\mathcal{U}$, $\mathcal{X}$ adalah himpunan kendala operasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menetapkan SOP implementasi vision-based PdM sebagai berikut:

**Tahap 1 — Akuisisi Data & Preprocessing.** Citra diketidak melalui kamera industri (resol