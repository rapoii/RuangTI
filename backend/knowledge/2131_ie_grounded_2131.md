# 2131 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mengubah paradigma pemeliharaan aset fisik dari pendekatan reaktif (*run-to-failure*) dan preventif berbasis jadwal (*scheduled preventive*) menuju **pemeliharaan prediktif** (*predictive maintenance* — PdM) yang digerakkan oleh data. Studi Pearson (2024) dalam jurnal *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa downtime tak terencana pada lini manufaktur modern dapat menimbulkan kerugian produksi antara \$10.000 hingga \$250.000 per jam, tergantung kompleksitas lini, dengan rata-rata biaya tidak langsung (*hidden cost*) berupa kehilangan pangsa pasar dan penalti kontrak sebesar 2–4 kali biaya langsung. Akar masalah dominan adalah kegagalan mendeteksi cacat *micro-crack*, korosi, kebocoran, *overheating*, atau misalignment pada tahap awal, ketika biaya intervensi masih rendah dan waktu perbaikan singkat.

Pearson (2024) mengusulkan arsitektur *Convolutional Neural Networks* (CNN) sebagai tulang punggung sistem inspeksi visual otomatis yang mampu mengolah ribuan citra per detik dari kamera industri, drone inspeksi, maupun sensor hyperspectral. Pendekatan ini mengatasi tiga keterbatasan inspeksi manual: (i) subjektivitas operator, (ii) kelelahan visual pada shift panjang, dan (iii) ketidakmampuan manusia untuk mendeteksi pola cacat piksel-subpixel. Pelengkap strategis disediakan oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) melalui integrasi **Physics-Informed Neural Networks (PINNs)** ke dalam *Model Predictive Control* (MPC) untuk sistem proses, yang memungkinkan data citra dan sinyal fisik digabungkan ke dalam kerangka optimasi dinamis kendala (*constrained dynamic optimization*).

Urgensi integratif ini diperkuat oleh data International Society of Automation (ISA) yang menunjukkan bahwa 70% kegagalan aset industri memiliki *fingerprint* visual atau termal pada 24–72 jam sebelum *trip*. Kombinasi CNN untuk persepsi dan PINN-MPC untuk aksi kontrol prediktif membentuk **cyber-physical predictive maintenance loop** yang menjadi standar masa depan di industri proses dan manufaktur diskrit.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusi untuk Ekstraksi Fitur

Operasi konvolusi 2D sebagai blok bangunan CNN diformulasikan sebagai berikut untuk lapisan ke-$l$ dengan filter $\mathbf{W}^{(l)}$ dan bias $b^{(l)}$:

$$y_{i,j}^{(l)} = f\left( \sum_{m=0}^{k-1}\sum_{n=0}^{k-1} \mathbf{W}_{m,n}^{(l)} \cdot x_{i+m,\,j+n}^{(l-1)} + b^{(l)} \right) \tag{1}$$

di mana $f(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $f(u)=\max(0,u)$), $k$ adalah ukuran kernel, dan $(i,j)$ adalah koordinat spasial. Stride $s$ dan operasi *max-pooling* mereduksi dimensi fitur secara bertahap, sehingga untuk citra input $\mathbf{X}\in\mathbb{R}^{H\times W\times C}$, volume fitur setelah $L$ lapisan konvolusi adalah:

$$\mathbf{Z}^{(L)} = \mathcal{F}_{\text{CNN}}(\mathbf{X}; \boldsymbol{\theta}) \in \mathbb{R}^{H'\times W'\times C'} \tag{2}$$

dengan $\boldsymbol{\theta}=\{\mathbf{W}^{(l)},b^{(l)}\}_{l=1}^{L}$ sebagai parameter-parameter yang dipelajari.

### 2.2 Formulasi Deteksi Anomali: Autoencoder Konvolusional

Pearson (2024) menerapkan varian *Convolutional Autoencoder* (CAE) yang memetakan citra input ke representasi laten berdimensi rendah dan merekonstruksinya kembali. Anomali dideteksi melalui *reconstruction error*:

$$\mathcal{L}_{\text{rec}}(\mathbf{X}) = \frac{1}{N}\sum_{i=1}^{N}\left\| \mathbf{X}_i - \hat{\mathbf{X}}_i \right\|_2^2 = \frac{1}{N}\sum_{i=1}^{N}\left\| \mathbf{X}_i - g_\phi(f_\psi(\mathbf{X}_i)) \right\|_2^2 \tag{3}$$

di mana $f_\psi$ adalah encoder dan $g_\phi$ adalah decoder. Untuk mengklasifikasikan apakah observasi ke-$i$ bersifat anomali, digunakan ambang (*threshold*) $\tau$ yang ditetapkan pada tingkat *false positive rate* $\alpha$ tertentu:

$$\text{Anomali}_i = \begin{cases} 1 & \text{jika } \mathcal{L}_{\text{rec}}(\mathbf{X}_i) > \tau \\ 0 & \text{otherwise} \end{cases} \tag{4}$$

Fungsi kehilangan total pelatihan CAE menggabungkan rekonstruksi dan regularisasi sparse untuk mencegah overfitting:

$$\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{rec}} + \lambda \sum_{l} \mathrm{KL}\!\left(\rho \,\|\, \hat{\rho}_l\right) \tag{5}$$

dengan $\rho$ adalah parameter *sparsity* (tipikal $\rho=0.05$), $\hat{\rho}_l$ adalah aktivasi rata-rata neuron pada lapisan $l$, dan $\lambda$ adalah koefisien regularisasi.

### 2.3 Physics-Informed Neural Networks (PINNs) untuk MPC

Patel et al. (2024) merumuskan PINNs dengan menyisipkan *residual* persamaan diferensial ke dalam fungsi kehilangan. Untuk sistem proses yang governed oleh ODE $\mathcal{N}[u(t);\lambda]=0$, PINN meminimalkan:

$$\mathcal{L}_{\text{PINN}} = \underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d} \left\| u(t_i^d) - \hat{u}(t_i^d) \right\|_2^2}_{\text{data loss}} + \underbrace{\frac{1}{N_r}\sum_{j=1}^{N_r} \left\| \mathcal{N}[\hat{u}(t_j^r);\lambda] \right\|_2^2}_{\text{physics residual}} \tag{6}$$

di mana $\hat{u}(t;\boldsymbol{\theta})$ adalah solusi aproksimasi jaringan saraf, $\{t_i^d\}$ adalah *collocation points* data, dan $\{t_j^r\}$ adalah titik residual. Formulasi ini kemudian disubstitusikan ke dalam horizon MPC sepanjang $H_p$:

$$\min_{U_{k:k+H_p-1}} \; J = \sum_{\tau=0}^{H_p-1}\left\| \mathbf{y}_{k+\tau|k} - \mathbf{y}^{\text{ref}}_{k+\tau}\right\|_{\mathbf{Q}}^2 + \left\| \Delta \mathbf{u}_{k+\tau}\right\|_{\mathbf{R}}^2 \tag{7}$$

tunduk pada kendala dinamika PINN $\hat{\mathbf{y}}_{k+1} = \mathcal{F}_{\text{PINN}}(\hat{\mathbf{y}}_k,\mathbf{u}_k)$ dan batas operasional $\mathbf{u}_{\min}\le\mathbf{u}_k\le\mathbf{u}_{\max}$.

### 2.4 Metrik Kinerja Klasifikasi

Untuk mengevaluasi kualitas deteksi anomali, digunakan metrik standar industri:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad \text{F1} = \frac{2\cdot \text{Precision}\cdot \text{Recall}}{\text{Precision}+\text{Recall}} \tag{8}$$

serta *Area Under the Receiver Operating Characteristic Curve* (AUC-ROC) yang robust terhadap *class imbalance* yang umum dijumpai pada data kerusakan industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti SOP terstruktur delapan tahap yang konsisten dengan kerangka *CRISP-DM* (Cross-Industry Standard Process for Data Mining) dan ISO 13374 untuk *Condition Monitoring*:

**Tahap 1 — Akuisisi Data Citra.** Pemasangan kamera industri (resolusi minimum 1920×1080, IP67, *global shutter*) di titik kritis: housing bearing, permukaan heat exchanger, panel kontrol, dan sambungan flange. Sampling rate 1–5 fps dengan pencahayaan terstruktur (LED ring 5600K) untuk memastikan konsistensi iluminasi.

**Tahap 2 — Pre-processing.** Normalisasi piksel ke $[0,1]$, resize ke 224×224, augmentasi melalui *random rotation* (±15°), *horizontal flip*, dan *CutMix* untuk memperbesar variasi data pelatihan dan mengurangi *overfitting*.

**Tahap 3 — Pelabelan & Anotasi.** Citra dilabeli oleh teknisi ahli menggunakan *bounding box* cacat (keretakan, korosi, kebocoran) sesuai standar ISO 22468 (*Visual Inspection*). Rasio data latih:validasi:uji = 70:15:15 dengan *stratified split*.

**Tahap 4 — Arsitektur Model.** Pearson (2024) mengusulkan backbone ResNet-50 yang di-*fine-tune* dengan *transfer learning* dari bobot ImageNet, dilanjutkan dengan *global average pooling* dan dua *fully connected layer* (512→128→1) dengan sigmoid untuk klasifikasi biner.

**Tahap 5 — Pelatihan & Validasi.** Optimizer Adam dengan *learning rate* $\eta=10^{-4}$, *batch size* 32, dan *early stopping* (patience 10 epoch) berdasarkan val_loss. *Class weighting* $w_i=\frac{N}{K\cdot n_i}$ diterapkan untuk menangani *imbalance* rasio kelas anomali:normal yang tipikalnya 1:50.

**Tahap 6 — Kalibrasi Threshold.** Ambang $\tau$ ditetapkan pada kuantil ke-95 dari distribusi rekonstruksi data normal (*contamination=5%*) menggunakan metode *Isolation Forest* sebagai validator silang.

**Tahap 7 — Integrasi PINN-MPC.** Berdasarkan Patel et al. (2024), hasil deteksi anomali dari CNN digunakan sebagai *disturbance feedforward* ke dalam horizon MPC: jika anomali terdeteksi dengan confidence $>0.85$, sistem secara otomatis menyesuaikan *setpoint* operasi dan menginisiasi *graceful shutdown* terstruktur.

**Tahap 8 — Monitoring & Retraining Loop.** Pipeline MLOps (MLflow/Kubeflow) memantau *data drift* melalui PSI (*Population Stability Index*): jika $\text{PSI}>0.25$, *trigger