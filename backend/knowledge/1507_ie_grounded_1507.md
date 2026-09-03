# 1507 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif serta Integrasi Physics-Informed Neural Networks pada Model Predictive Control Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mentransformasi secara fundamental paradigma pemeliharaan aset manufaktur, yang sebelumnya didominasi oleh strategi *corrective maintenance* (CM) dan *preventive maintenance* (PM) berbasis jadwal waktu tetap (TBM), menuju arsitektur *predictive maintenance* (PdM) berbasis kondisi aktual (*condition-based maintenance*). Pergeseran paradigma ini terutama dipicu oleh konvergensi tiga megatrend teknologi: (1) penurunan drastis biaya sensor pencitraan industri (industrial vision sensors, hyperspectral cameras, dan acoustic emission sensors); (2) kematangan algoritma *deep learning*, khususnya Convolutional Neural Networks (CNN) yang mampu mengekstraksi fitur hierarkis dari data citra kompleks; serta (3) ketersediaan *edge computing* dengan kapasitas komputasi tinggi di lapangan (*field-deployable GPUs*).

Menurut Pearson (2024) dalam tulisannya di SSRN dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), anomali visual pada peralatan industri—seperti retakan mikro (*micro-cracks*), korosi permukaan, kebocoran seal, deformasi termal, dan kontaminasi pada komponen kritis—merupakan prekursor dominan kegagalan katastrofik pada aset berputar dan bejana tekan. Studi tersebut melaporkan bahwa deteksi anomali visual secara manual oleh inspektur manusia memiliki *miss rate* sebesar 18–24% pada lini produksi berkecepatan tinggi, terutama karena *operator fatigue*, *cognitive bias*, dan inkonsistensi subjektif antar-inspektur. Sebaliknya, sistem CNN otomatis yang dievaluasi Pearson mencapai *true positive rate* (TPR) sebesar 96,3% pada dataset MVTec AD dan *false alarm rate* (FAR) sebesar 2,1%, suatu lompatan kuantum dalam akurasi deteksi.

Urgensi ekonomis dari adopsi PdM berbasis citra ini sangat substansial. Laporan industri menunjukkan bahwa downtime tak terjadwal di sektor manufaktur bernilai rata-rata USD 50.000–250.000 per jam, dengan kehilangan produksi tahunan mencapai 5–20% dari kapasitas terpasang. Ketika diintegrasikan dengan arsitektur *Model Predictive Control* (MPC) yang diperkuat Physics-Informed Neural Networks (PINNs) sebagaimana diusulkan Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431), sistem tidak hanya mampu memprediksi kapan kegagalan akan terjadi, tetapi juga secara proaktif menyesuaikan *setpoint* operasional untuk memperpanjang *remaining useful life* (RUL) aset.

Sinergi kedua pendekatan ini merepresentasikan visi *self-healing manufacturing systems*: CNN sebagai "indra penglihatan" (visual cognition layer) dan PINN-MPC sebagai "otak pengambil keputusan" (decision-making layer). Dalam konteks teknik industri, integrasi ini bukan sekadar inovasi teknis, melainkan transformasi rantai nilai (*value chain*) yang menyentuh perencanaan kapasitas, *overall equipment effectiveness* (OEE), dan strategi *total productive maintenance* (TPM).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Ekstraksi Fitur Anomali

Pearson (2024) mengadopsi varian arsitektur *deep residual network* (ResNet-50) yang telah di-*pre-train* pada ImageNet, kemudian dilakukan *fine-tuning* menggunakan dataset anomali industri berlabel. Formulasi fundamental operasi konvolusi dua dimensi dinyatakan sebagai:

$$
\mathbf{Y}_{i,j,k} = f\left(\sum_{c=0}^{C-1}\sum_{u=0}^{K_h-1}\sum_{v=0}^{K_w-1} \mathbf{W}_{u,v,c,k} \cdot \mathbf{X}_{i+u,j+v,c} + b_k\right)
$$

di mana $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ merupakan tensor citra masukan, $\mathbf{W} \in \mathbb{R}^{K_h \times K_w \times C \times K}$ adalah bank filter konvolusi, $b_k$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $f(x) = \max(0,x)$).

### 2.2 Formulasi Anomaly Score dan Threshold Adaptif

Untuk keperluan *anomaly detection*, Pearson menggunakan *teacher-student* knowledge distillation framework. Anomaly score dihitung menggunakan *multi-scale structural similarity* (MS-SSIM) antara fitur teacher dan student:

$$
\mathcal{A}(\mathbf{X}) = \sum_{l=1}^{L} w_l \cdot \left(1 - \text{SSIM}(\mathbf{T}_l(\mathbf{X}), \mathbf{S}_l(\mathbf{X}))\right)
$$

dengan $\text{SSIM}(x,y) = \frac{(2\mu_x\mu_y + C_1)(2\sigma_{xy} + C_2)}{(\mu_x^2+\mu_y^2+C_1)(\sigma_x^2+\sigma_y^2+C_2)}$, dan bobot $w_l$ memenuhi $\sum_{l=1}^{L} w_l = 1$.

*Decision threshold* ditentukan secara statistik dari distribusi skor pada data normal: $\tau = \mu_{\mathcal{A}} + 3\sigma_{\mathcal{A}}$, menghasilkan *false positive rate* teoretis sebesar 0,135% pada distribusi Gaussian.

### 2.3 Physics-Informed Neural Networks (PINNs) untuk MPC Proses

Patel et al. (2024) memformulasikan PINN-MPC sebagai masalah optimasi *receding horizon* yang menggabungkan *first-principles physics constraints* dengan pembelajaran data. Persamaan diferensial parsial (PDP) umum yang mendeskripsikan dinamika proses industri berbentuk:

$$
\frac{\partial \mathbf{x}(t)}{\partial t} = \mathbf{f}\!\left(\mathbf{x}(t), \mathbf{u}(t)\right), \quad \mathbf{x}(0) = \mathbf{x}_0
$$

di mana $\mathbf{x} \in \mathbb{R}^{n_x}$ adalah vektor state, $\mathbf{u} \in \mathbb{R}^{n_u}$ adalah vektor input kontrol. Jaringan saraf $\hat{\mathbf{x}}(t; \boldsymbol{\theta})$ dengan parameter $\boldsymbol{\theta}$ dilatih untuk meminimalkan *loss function* komposit:

$$
\mathcal{L}_{\text{PINN}}(\boldsymbol{\theta}) = \lambda_{\text{data}}\mathcal{L}_{\text{data}} + \lambda_{\text{physics}}\mathcal{L}_{\text{physics}} + \lambda_{\text{BC}}\mathcal{L}_{\text{BC}}
$$

dengan komponen:

$$
\mathcal{L}_{\text{data}} = \frac{1}{N_d}\sum_{i=1}^{N_d}\left\|\hat{\mathbf{x}}(t_i) - \mathbf{x}_i^{\text{obs}}\right\|_2^2
$$

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_r}\sum_{j=1}^{N_r}\left\|\frac{\partial \hat{\mathbf{x}}}{\partial t}(t_j) - \mathbf{f}(\hat{\mathbf{x}}(t_j), \mathbf{u}(t_j))\right\|_2^2
$$

$$
\mathcal{L}_{\text{BC}} = \left\|\hat{\mathbf{x}}(0) - \mathbf{x}_0\right\|_2^2
$$

### 2.4 Formulasi MPC Receding Horizon

Fungsi biaya MPC yang harus diminimalkan pada setiap langkah waktu:

$$
J(\mathbf{U}_k) = \sum_{i=0}^{H_p-1}\left\|\hat{\mathbf{x}}(k+i|k)-\mathbf{x}^{\text{ref}}(k+i)\right\|_{\mathbf{Q}}^2 + \sum_{i=0}^{H_c-1}\left\|\Delta\mathbf{u}(k+i)\right\|_{\mathbf{R}}^2
$$

terhadap kendala $\mathbf{u}_{\min} \leq \mathbf{u}(k+i) \leq \mathbf{u}_{\max}$ dan $\Delta \mathbf{u}_{\min} \leq \Delta\mathbf{u}(k+i) \leq \Delta\mathbf{u}_{\max}$, dengan $H_p$ adalah prediction horizon, $H_c$ adalah control horizon, serta $\mathbf{Q} \succ 0$, $\mathbf{R} \succ 0$ adalah matriks pembobot.

### 2.5 Kriteria Penurunan (Degradation) dan Remaining Useful Life

Distribusi Weibull untuk probabilitas kegagalan kumulatif:

$$
F(t) = 1 - e^{-(t/\eta)^{\beta}}, \quad \eta > 0, \beta > 0
$$

di mana $\eta$ adalah *characteristic life* dan $\beta$ adalah *shape parameter*. Hubungan dengan anomaly score CNN: $\eta_{\text{eff}} = \eta_0 \cdot (1 - \alpha \cdot \mathcal{A}_{\text{norm}})$ dengan $\mathcal{A}_{\text{norm}} \in [0,1]$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Kerja End-to-End Sistem PdM Berbasis CNN

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ 1. Akuisisi Citra│ -> │ 2. Pra-pemrosesan│ -> │ 3. Inferensi CNN │
│ (CCTV/thermal/UV)│    │ (resize, denoise,│    │ (ResNet/PatchCore│
│ @ 30 fps         │    │  histogram eq.)  │    │  / EfficientAD)  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
                                                       │
┌──────────────────┐    ┌──────────────────┐    ┌──────▼───────────┐
│ 7. Aksi Kontrol  │ <- │ 6. Optimasi MPC  │ <- │ 5. Estimasi RUL  │
│ (setpoint adjust)│    │ (PINN solver,    │    │ (Weibull +      │
│                  │    │  horizon=20)     │    │  Bayesian updt.) │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### 3.2 SOP Akuisisi dan Anotasi Data (Mengacu Pearson 2024)

| Langkah | Prosedur | Parameter Operasional |
|---------|----------|----------------------|
| **L1** | Kalibrasi kamera | Resolusi ≥ 1024×1024 px, iluminasi 500–5000 lux, white balance otomatis |
| **L2** | Segmentasi ROI | Region of interest 400×400 px ± 5% overlap |
| **L3** | Anotasi oleh ahli | Tiga annotator independen, *Cohen's kappa* ≥ 0,85 sebagai filter kualitas |
| **L4** | Augmentasi data | Random crop, rotation ±15°, brightness ±20%, *CutMix*, *MixUp* |
| **L5** | Validasi model | *k-fold cross-validation* (k=5), metrik AUROC ≥ 0,95 |

### 3.3 SOP Integrasi PINN-MPC (Mengacu Patel et al. 2024)

1. **Identifikasi model first-principles**: Bentuk persamaan neraca massa/energi/momentum proses.
2. **Sampling collocation points**: $N_r = 10.000$ titik terdistribusi secara *Latin Hypercube Sampling*.
3. **Training PINN**: Optimizer Adam dengan *learning rate* $10^{-3}$ (scheduler *cosine annealing*), 50.000 epoch, early stopping berbasis $\mathcal{L}_{\text{physics}} < 10^{-4}$.
4. **Validasi sim-to-real**: Pengujian pada plant nyata dengan *setpoint tracking error* $\leq 2\%$.
5. **Deploy edge-controller**: NVIDIA Jetson AGX Orin atau industrial PLC dengan *cycle time* $\leq 100$ ms.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Deteksi Anomali pada Pompa Sentrifugal di Plant Petrokimia

**Parameter operasi aktual:**
- Pompa sentrifugal tipe OH2, kapasitas 250 m³/jam, head 45 m
- Kecepatan putar $N = 2950$ rpm
- Suhu bearing housing $T_{\text{bearing}} = 68°C$ (baseline)
- Tekanan discharge $P_d = 4{,}2$ bar (baseline)

**Langkah 1 — Akuisisi dan Pra-pemrosesan Citra:**
Tiga kamera termal FLIR A700 dipasang pada housing bearing. Citra termal 640×480 px diakuisisi setiap 60 detik. Konversi ke pseudo-RGB untuk kompatibilitas dengan CNN.

**Langkah 2 — Ekstraksi Anomaly Score:**
Misalkan pada waktu inspeksi $t = 720$ jam kumulatif operasi, fitur teacher-student menghasilkan skor multi-skala:

$$
w_1 = 0{,}3, \quad w_2 = 0{,}4, \quad w_3 = 0{,}3
$$

$$
\text{SSIM}_1 = 0{,}92, \quad \text{SSIM}_2 = 0{,}85, \quad \text{SSIM}_3 = 0{,}88
$$

$$
\mathcal{A} = 0{,}3(1-0{,}92) + 0{,}4(1-0{,}85) + 0{,}3(1-0{,}88)
$$
$$
\mathcal{A} = 0{,}024 + 0{,}060 + 0{,}036 = 0{,}120
$$

**Langkah 3 — Deteksi Threshold:**
Dengan $\mu_{\mathcal{A}} = 0{,}045$ dan $\sigma_{\mathcal{A}} = 0{,}018$ dari baseline 30 hari operasi normal:

$$
\tau = 0{,}045 +