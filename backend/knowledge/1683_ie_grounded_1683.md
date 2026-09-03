# 1683 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif, dengan Pendekatan Physics-Informed Neural Networks pada Model Predictive Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era **Industri 4.0** telah memaksa perusahaan manufaktur, energi, dan proses kimia untuk meninggalkan paradigma *reactive maintenance* (perbaikan setelah kerusakan terjadi) menuju *predictive maintenance* (PdM) yang didukung kecerdasan buatan. Kerugian ekonomi akibat unplanned downtime pada industri proses tercatat mencapai USD 50 miliar per tahun secara agregat global (sekitar 5–20% dari potensi kapasitas produksi menurut konsorsium industri terkait). Pada lini produksi modern yang mengandalkan *computer vision* untuk quality control, muncul kebutuhan mendesak untuk mengintegrasikan deteksi anomali visual (misalnya retak mikro pada permukaan pompa, korosi pada heat exchanger, misalignment pada rotor, atau kontaminasi pada lini pengemasan) ke dalam satu arsitektur *closed-loop* yang tidak hanya memprediksi kegagalan tetapi juga mengarahkan tindakan kontrol operasional.

Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) mengusulkan arsitektur *Convolutional Neural Network* (CNN) sebagai tulang punggung deteksi anomali berbasis citra yang dipasang pada peralatan industri, dengan penekanan pada kemampuan generalisasi terhadap *class imbalance* yang ekstrem (data anomaly jauh lebih sedikit daripada data normal). Sementara itu, Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memperkenalkan kerangka *Physics-Informed Neural Networks* (PINNs) yang digabungkan dengan *Model Predictive Control* (MPC) untuk sistem proses, sehingga prediksi anomali dari modul vision dapat diterjemahkan menjadi set-point baru pada pengendali proses. Sinergi kedua karya ini merepresentasikan tren mutakhir *cyber-physical production systems* (CPPS), di mana persepsi visual, model fisika, dan aksi kendali membentuk satu rantai keputusan otonom.

Urgensi operasional dari integrasi kedua pendekatan ini dapat dilihat pada tiga dimensi. Pertama, dimensi **ekonomi**: setiap 1% peningkatan akurasi prediksi anomali dapat menurunkan *maintenance cost* hingga 8–12% pada aset kritis (rotating equipment). Kedua, dimensi **teknis**: citra beresolusi tinggi (≥ 4K) yang ditangkap oleh kamera industri mengandung informasi spasial yang tidak dapat digantikan oleh sensor SCADA konvensional. Ketiga, dimensi **regulasi**: standar ISO 13373 untuk *condition monitoring* dan IEC 62443 untuk *industrial cyber security* mensyaratkan integrasi antara lapisan persepsi dan lapisan kontrol yang dapat diaudit.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Operasi konvolusi dua-dimensi yang menjadi inti CNN Pearson (2024) dapat ditulis sebagai:

$$y_{i,j,k} = \phi\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} W_{m,n,k} \cdot x_{i+m, j+n} + b_k\right)$$

dengan $x_{i,j}$ adalah pixel input citra, $W_{m,n,k}$ adalah kernel konvolusi ke-$k$, $b_k$ adalah bias, dan $\phi(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $\phi(z)=\max(0,z)$). Untuk tugas deteksi anomali, Pearson (2024) memanfaatkan arsitektur *encoder–decoder* (mirip U-Net atau autoencoder variasional) yang memetakan citra $x$ ke ruang laten $z \in \mathbb{R}^{d}$ lalu melakukan rekonstruksi $\hat{x}$. Anomali diukur melalui *reconstruction error*:

$$\mathcal{A}(x) = \frac{1}{HW}\sum_{i=1}^{H}\sum_{j=1}^{W}\left(x_{i,j} - \hat{x}_{i,j}\right)^{2}$$

di mana keputusan biner $\hat{y} = \mathbb{1}\{\mathcal{A}(x) > \tau\}$ ditentukan oleh threshold $\tau$ yang dikalibrasi pada validation set.

### 2.2 Fungsi Loss untuk Class Imbalance

Karena proporsi citra anomali terhadap normal pada data industri bisa mencapai 1:1000, Pearson (2024) mengadopsi *Focal Loss* (Lin et al., 2017):

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

dengan $p_t$ adalah probabilitas prediksi kelas benar, $\alpha_t$ adalah *class weighting factor* untuk menangani *prior* yang tidak seimbang, dan $\gamma$ (umumnya 2) adalah *focusing parameter* yang menurunkan kontribusi loss dari *easy examples* sehingga jaringan lebih fokus pada *hard negatives*.

### 2.3 Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya, dan Gudi (2024) memperluas NN menjadi PINNs dengan menambahkan *physics residual* pada fungsi loss:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_r \mathcal{L}_{\text{residual}}$$

Untuk sistem proses satu dimensi dengan variabel keadaan $u(x,t)$, PINN meminimalkan *governing equation* seperti persamaan panas:

$$\mathcal{L}_{\text{residual}} = \frac{1}{N_r}\sum_{i=1}^{N_r}\left(\frac{\partial \hat{u}}{\partial t}(x_i,t_i) - \alpha \frac{\partial^{2}\hat{u}}{\partial x^{2}}(x_i,t_i)\right)^{2}$$

Diferensial ini dihitung secara otomatis via *automatic differentiation* (AD) pada framework seperti PyTorch atau JAX.

### 2.4 Formulasi Model Predictive Control

Prediksi $\hat{u}$ dari PINN kemudian menjadi model internal pada MPC:

$$\min_{u_0, u_1, \dots, u_{N-1}} \sum_{k=0}^{N-1} \left(\|x_k - x_{\text{ref}}\|_Q^{2} + \|u_k\|_R^{2}\right) + \|x_N - x_{\text{ref}}\|_P^{2}$$

tunduk pada dinamika $x_{k+1} = f_{\text{PINN}}(x_k, u_k)$, kendala operasional $x_{\min} \le x_k \le x_{\max}$, dan $u_{\min} \le u_k \le u_{\max}$. Saat modul CNN memberikan sinyal anomali dengan skor melebihi threshold, referensi $x_{\text{ref}}$ secara otomatis direvisi ke режим konservatif untuk melindungi aset.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi di lantai pabrik mengikuti alur berikut (diagram alir dalam bentuk teks terstruktur):

```
[Tahap 1] Akuisisi Data
   └─ Kamera industri (≥ 4K, frame rate 30–60 fps, IP67)
   └─ Sensor proses (T, P, flow) → sinkronisasi timestamp via PTP (IEEE 1588)
[Tahap 2] Pre-processing
   └─ ROI cropping, normalisasi piksel [0,1], augmentasi (flip, rotasi, MixUp)
   └─ Balancing dengan SMOTE atau oversampling citra anomali minoritas
[Tahap 3] Training CNN
   └─ Backbone: ResNet-50 / EfficientNet-B3 pre-trained ImageNet
   └─ Fine-tuning dengan $\mathcal{L}_{\text{focal}}$ (Eq. 3)
   └─ Validasi 5-fold CV, metrik: Precision, Recall, F1, AUROC
[Tahap 4] Integrasi PINN-MPC
   └─ Kalibrasi parameter fisika ($\alpha$, $k$ reaksi, dll.)
   └─ Pelatihan PINN dengan $\mathcal{L}_{\text{PINN}}$ (Eq. 4)
   └─ Deployment solver MPC (IPOPT / qpOASES) pada PLC atau edge gateway
[Tahap 5] Closed-Loop & Audit
   └─ Alarm threshold τ_AUC ≥ 0.95 sebelum aktivasi
   └─ Log ke Historian (PI/Databricks Lakehouse)
   └─ Kepatuhan ISO 13373-9 & IEC 62443-3-3
```

Standar industri yang relevan antara lain: **ISO 13373** (*Condition monitoring and diagnostics of machines*), **ISO/IEC 27001** untuk keamanan data, **API 670** untuk proteksi mesin rotari, dan **NAMUR NE 107** untuk kategori diagnostik instrumen.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi kasus:** Pemantauan pompa sentrifugal (kapasitas 250 m³/jam, head 45 m, daya 75 kW) pada unit *cooling water* pabrik petrokimia. Citra thermal + RGB diambil setiap 5 menit, total 4.800 citra/hari.

**Langkah 1 — Distribusi data:** Dari 9.600 citra berlabel (4 minggu operasi), hanya 96 citra anomali (kebocoran seal, retak impeller, fouling). Rasio kelas 1:99 (anomali:normal).

**Langkah 2 — Pelatihan:** Model CNN dengan backbone EfficientNet-B3 dan Focal Loss ($\alpha_t = 0.99$, $\gamma = 2$). Pada epoch ke-40, fungsi loss mencapai:
$$\mathcal{L}_{\text{focal}}^{(40)} = \frac{1}{N}\sum_{i=1}^{N} - (0.99)(1 - p_t^{(i)})^{2}\log(p_t^{(i)}) \approx 0{,}0314$$

**Langkah 3 — Evaluasi:** Metrik pada test set (1.920 citra):
$$\text{Precision} = \frac{TP}{TP+FP} = \frac{18}{18+2} = 0{,}90$$
$$\text{Recall} = \frac{TP}{TP+FN} = \frac{18}{18+1} = 0{,}947$$
$$\text{F1} = \frac{2 \cdot 0{,}90 \cdot 0{,}947}{0{,}90+0{,}947} = 0{,}923$$
$$\text{AUROC} = 0{,}987$$

**Langkah 4 — False Alarm Rate (FAR):**
$$\text{FAR} = \frac{FP}{FP+TN} = \frac{2}{1899} = 0{,}105\%$$

**Langkah 5 — Nilai ekonomi:** Jika satu kejadian kerusakan pompa yang tak terprediksi menyebabkan shutdown 8 jam dengan kerugian produksi Rp 480 juta, maka *expected loss* tanpa sistem adalah $E[L_{\text{no PdM}}] = 480\text{ juta} \times P_{\text{fail}}$. Dengan sistem, recall 94,7% menangkap 18 dari 19 kasus potensial per periode. *Return on Investment* sederhana:

$$\text{ROI} = \frac{(480\text{ juta} \times 18/19) - C_{\text{sistem}}}{C_{\text{sistem}}} \times 100\%$$

dengan $C_{\text{sistem}}$ (CAPEX + OPEX 5 tahun) ≈ Rp 950 juta