# 1779 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif, dengan Integrasi Model Predictive Control Berbasis Physics-Informed Neural Networks

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan peralatan industri merupakan salah satu fungsi kritikal dalam sistem manufaktur modern yang secara langsung menentukan *Overall Equipment Effectiveness* (OEE), ketersediaan (*availability*), dan total biaya siklus hidup aset (*Life Cycle Cost — LCC*). Pearson (2024) dalam studi yang dipublikasikan melalui *peer-reviewed journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti pergeseran paradigma fundamental dari paradigma *reactive* (run-to-failure) dan *preventive* (time-based) menuju paradigma *predictive maintenance* (PdM) yang digerakkan oleh data multimodal, khususnya data citra visual yang ditangkap melalui sensor opto-elektronik, kamera termal inframerah (*thermal imaging*), dan sistem *machine vision* terintegrasi. Dalam konteks industri proses dan manufaktur diskrit, kerugian produksi akibat *unplanned downtime* dilaporkan mencapai USD 50 miliar per tahun secara global, dengan proporsi signifikan berasal dari kerusakan bearing, misalignment poros, korosi permukaan, kebocoran pada *heat exchanger*, dan degradasi lapisan isolasi pada peralatan putar.

Urgensi ekonomi dari adopsi Computer Vision untuk inspeksi otomatis diperkuat oleh tiga faktor struktural. Pertama, kelangkaan tenaga ahli inspeksi bersertifikat (ASNT/ISO 9712) yangqualified untuk melakukan *Non-Destructive Testing* (NDT) konvensional, sehingga *false positive rate* pada inspeksi manual relatif tinggi. Kedua, kemampuan jaringan saraf tiruan konvolusional (*Convolutional Neural Networks* — CNN) untuk mengekstraksi fitur hierarkis secara otomatis dari citra RGB, citra termal, maupun citra getaran spektral telah matang secara teoritis sejak publikasi seminal arsitektur ResNet (He et al., 2016) dan EfficientNet (Tan & Le, 2019). Ketiga, integrasi arsitektur CNN dengan *edge computing devices* seperti NVIDIA Jetson Orin dan Google Coral TPU memungkinkan latensi inferensi di bawah 50 ms, memenuhi persyaratan *real-time condition monitoring* pada lini produksi berkecepatan tinggi.

Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) melengkapi bangunan sistem PdM ini dengan mengusulkan kerangka *Model Predictive Control* (MPC) yang diperkuat oleh *Physics-Informed Neural Networks* (PINNs). Pendekatan ini memungkinkan aksi kontrol tidak hanya bergantung pada prediksi anomali visual, tetapi juga menghormati hukum kekekalan massa, energi, dan momentum yang tertanam dalam *soft constraint* PINN. Dalam ekosistem *Industry 4.0*, integrasi PdM berbasis CNN dengan MPC berbasis PINN membentuk arsitektur *cyber-physical production system* (CPPS) yang adaptif, di mana keputusan pemeliharaan dan optimasi proses dijalankan secara koupled.

Pearson (2024) menekankan bahwa deteksi anomali berbasis citra unggul dalam tiga dimensi kuantitatif: (1) *recall* deteksi cacat permukaan pada kisaran 0,93–0,98 untuk dataset MVTec AD dan NEU-DET, (2) kemampuan generalisasi lintas-domain melalui *transfer learning*, dan (3) kompatibilitas dengan protokol ISO 13373 untuk *condition monitoring* mesin putar. Ketiga dimensi ini menjadikan CNN sebagai komponen sentral dalam arsitektur PdM kontemporer. Lebih jauh, Pearson menunjukkan bahwa kombinasi arsitektur *autoencoder* dan *variational autoencoder* (VAE) mampu memberikan skor anomali kontinu yang informatif bagi sistem pendukung keputusan, sehingga *maintenance crew* tidak hanya menerima peringatan biner tetapi juga estimasi tingkat keparahan degradasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Anomali

Secara matematis, operasi konvolusi 2-D pada lapisan konvolusional CNN didefinisikan sebagai berikut. Misalkan $\mathbf{X} \in \mathbb{R}^{H \times W \times C_{in}}$ merupakan *feature map* masukan dengan tinggi $H$, lebar $W$, dan jumlah kanal $C_{in}$, sedangkan $\mathbf{K} \in \mathbb{R}^{k_h \times k_w \times C_{in} \times C_{out}}$ merupakan bank kernel konvolusi. Operasi konvolusi pada lokasi spasial $(i,j)$ untuk kanal keluaran $c$ menghasilkan:

$$Y_{i,j,c} = \sum_{u=0}^{k_h-1} \sum_{v=0}^{k_w-1} \sum_{z=0}^{C_{in}-1} X_{i+u, j+v, z} \cdot K_{u,v,z,c} + b_c$$

dengan $b_c$ adalah *bias term*. Pearson (2024) mengadopsi fungsi aktivasi *Rectified Linear Unit* (ReLU) $\sigma(x) = \max(0, x)$ karena komputasinya efisien dan mitigasi gradien vanish yang baik.

### 2.2 Fungsi Kerugian untuk One-Class & Supervised Anomaly Detection

Untuk skenario one-class anomaly detection (yang relevan ketika data kerusakan langka), Pearson (2024) menggunakan fungsi kerugian kontrastif berdasarkan *hypersphere boundary*:

$$\mathcal{L}_{\text{OCSVM-CNN}} = \sum_{i=1}^{N} \left\| \phi(\mathbf{X}_i; \boldsymbol{\theta}) - \mathbf{c} \right\|^2 + \lambda \cdot R(\boldsymbol{\theta})$$

di mana $\phi(\mathbf{X}_i; \boldsymbol{\theta})$ adalah representasi laten hasil encoder, $\mathbf{c}$ adalah pusat hipersfer yang dipelajari, dan $R(\boldsymbol{\theta})$ adalah regularisasi parameter. Skor anomali untuk citra uji $\mathbf{X}_{\text{test}}$ didefinisikan sebagai jarak Euclidean ke pusat:

$$s(\mathbf{X}_{\text{test}}) = \left\| \phi(\mathbf{X}_{\text{test}}; \boldsymbol{\theta}) - \mathbf{c} \right\|^2$$

Anomali dideteksi ketika $s(\mathbf{X}_{\text{test}}) > \tau$, dengan $\tau$ adalah *threshold* yang dikalibrasi menggunakan *receiver operating characteristic* (ROC) pada *validation set*.

Untuk skenario supervised multi-kelas, digunakan *Categorical Cross-Entropy*:

$$\mathcal{L}_{\text{CE}} = -\frac{1}{N} \sum_{i=1}^{N} \sum_{k=1}^{K} y_{i,k} \log \left( \hat{p}_{i,k} \right)$$

dengan $\hat{p}_{i,k} = \text{softmax}(z_k) = \frac{e^{z_k}}{\sum_{j=1}^{K} e^{z_j}}$ dan $y_{i,k}$ adalah indikator *one-hot* kelas sebenarnya.

### 2.3 Formulasi Physics-Informed Neural Network (PINN)

Patel, Bhartiya, dan Gudi (2024) membangun PINN dengan menginkorporasikan *residual* persamaan diferensial parsial (PDP) ke dalam fungsi kerugian. Untuk sistem proses yang governed oleh hukum kekekalan dan kinetika reaksi, PDP umum berbentuk:

$$\mathcal{N}[u(\mathbf{x}, t); \boldsymbol{\lambda}] = 0, \quad \mathbf{x} \in \Omega, \quad t \in [0, T]$$

dengan kondisi batas $\mathcal{B}[u] = g(\mathbf{x}, t)$ pada $\partial \Omega$ dan kondisi awal $\mathcal{I}[u] = u_0(\mathbf{x})$ pada $t=0$. Fungsi kerugian total PINN merupakan kombinasi terbobot dari komponen data, PDP, dan kondisi batas:

$$\mathcal{L}_{\text{PINN}} = w_d \mathcal{L}_{\text{data}} + w_r \mathcal{L}_{\text{PDE}} + w_b \mathcal{L}_{\text{BC}} + w_0 \mathcal{L}_{\text{IC}}$$

dengan:

$$\mathcal{L}_{\text{PDE}} = \frac{1}{N_r} \sum_{j=1}^{N_r} \left| \mathcal{N}[u_{\boldsymbol{\theta}}(\mathbf{x}_r^{(j)}, t_r^{(j)})] \right|^2$$

Diferensiasi otomatis (*automatic differentiation*) terhadap $\mathbf{x}$ dan $t$ memungkinkan komputasi $\partial u / \partial x$, $\partial^2 u / \partial x^2$ secara eksak melalui komputasi grafik, sebuah kekuatan utama PINN dibanding aproksimasi beda hingga.

### 2.4 Formulasi Model Predictive Control (MPC)

MPC menyelesaikan masalah optimasi constrained pada setiap *sampling instant* $k$:

$$\min_{\mathbf{u}_{k:k+H_c-1}} \sum_{i=0}^{H_p-1} \left\| \mathbf{x}_{k+i|k} - \mathbf{x}_{\text{ref},k+i} \right\|_Q^2 + \sum_{i=0}^{H_c-1} \left\| \Delta \mathbf{u}_{k+i|k} \right\|_R^2$$

tunduk pada:

$$\mathbf{x}_{k+i+1|k} = f_{\text{PINN}}(\mathbf{x}_{k+i|k}, \mathbf{u}_{k+i|k})$$

$$\mathbf{u}_{\min} \leq \mathbf{u}_{k+i|k} \leq \mathbf{u}_{\max}$$

$$\mathbf{x}_{\min} \leq \mathbf{x}_{k+i|k} \leq \mathbf{x}_{\max}$$

dengan $H_p$ adalah *prediction horizon*, $H_c$ adalah *control horizon*, $Q \succeq 0$ dan $R \succ 0$ adalah matriks pembobot. Ketika plant model $f(\cdot, \cdot)$ diganti dengan $f_{\text{PINN}}$, maka terjadi *hybrid MPC* yang menggabungkan kemampuan generalisasi neural network dengan kepatuhan fisika. Patel et al. (2024) menunjukkan bahwa pendekatan ini menurunkan *tracking error* sebesar 28–42% dibanding MPC dengan model linear nominal pada kasus *Continuously Stirred Tank Reactor* (CSTR).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Akuisisi Data Citra

Pearson (2024) menyusun SOP akuisisi dengan parameter sebagai berikut. Pencahayaan dilakukan secara *diffuse coaxial LED ring* dengan suhu warna 5500 K dan iluminansi 1500–2500 lux untuk mencegah *specular reflection* pada permukaan logam mengkilap. Resolusi citra ditetapkan minimum 1024 × 1024 piksel dengan *bit depth* 12-bit untuk citra termal guna memanfaatkan *dynamic range* sensor mikrobolometer. *Field of view* (FoV) kamera harus mencakup area inspeksi penuh dengan *spatial resolution* ≤ 0,2 mm/piksel sesuai ISO 12233 untuk *spatial frequency response*. Citra disimpan dalam format TIFF lossless untuk mencegah artefak kompresi JPEG yang menurunkan akurasi deteksi *hairline cracks*.

### 3.2 SOP Pelabelan dan Pra-Pemrosesan

Pelabelan mengikuti konvensi COCO atau Pascal VOC menggunakan *bounding box* dan *segmentation mask*. Pearson (2024) merekomendasikan augmentasi data sebagai berikut:

| Teknik Augmentasi | Parameter | Tujuan |
|-------------------|-----------|--------|
| Rotasi acak | $\theta \in [-15°, +15°]$ | Invariansi orientasi |
| Translasi | Maks. 10% dimensi | Variasi posisi |
| Penyesuaian brightness | $\Delta \in [-20\%, +20\%]$ | Robustness iluminasi |
| Gaussian noise | $\sigma \in [0, 15]$ (skala 0–255) | Regularisasi implisit |
| Mixup / CutMix | $\alpha = 0.2$ | Generalisasi |

Normalisasi dilakukan melalui *z-score*: $\hat{X}_{i,j,c} = \frac{X_{i,j,c} - \mu_c}{\sigma_c}$, dengan $\mu_c$ dan $\sigma_c$ dihitung dari *training set*.

### 3.3 Arsitektur Teknologi Sistem Terintegrasi

Diagram alir sistem terintegrasi CNN-PdM dan MPC-PINN mengikuti alur berikut:

```
[Citra Raw] → [Pra-pemrosesan] → [CNN Backbone (ResNet-50/EfficientNet-B4)]
    → [Anomaly Score s(X)] → [Threshold Decision] 
        → JIKA anomali terdeteksi: 
            → [Generate Maintenance Alert via OPC-UA/MTConnect]
            → [Update Condition Indicator di CMMS (SAP PM / IBM Maximo)]
        → JIKA tidak:
            → [Lanjutkan operasi normal]
[Sensor proses (T, P, F, C)] → [PINN State Estimator] → [MPC Solver]
    → [Sinyal kontrol ke aktuator] → [Plant fisik]
[Plant fisik] → [Update data ke Data Historian (PI System)] → [Loop tertutup]
```

### 3.