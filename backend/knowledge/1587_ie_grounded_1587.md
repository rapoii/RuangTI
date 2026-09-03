# 1587 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur dan proses modern menghadapi tantangan operasional yang semakin kompleks seiring dengan meningkatnya tingkat otomatisasi, usia pakai aset yang menua, serta tuntutan *zero-downtime* pada lini produksi kritis. Kerusakan mendadak (*unplanned downtime*) pada peralatan putar (rotating equipment), komponen elektromekanis, atau sistem perpipaan proses secara empiris menyebabkan kerugian ekonomi rata-rata USD 50.000 per jam pada industri minyak & gas, dan mencapai USD 125.000 per jam pada fasilitas petrokimia skala besar (Pearson, 2024). Paradigma pemeliharaan konvensional—baik reaktif (*run-to-failure*) maupun periodik (*scheduled-based*)—terbukti tidak efisien karena tidak mampu mengidentifikasi degradasi komponen secara presisi sebelum kegagalan katastrofik terjadi. Hal ini memunculkan kebutuhan akan sistem *Predictive Maintenance* (PdM) berbasis data yang mampu mendeteksi anomali visual pada tahap paling awal.

Pearson (2024) dalam kajiannya di jurnal *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menekankan bahwa integrasi *Convolutional Neural Networks* (CNN) dengan sistem pencitraan industri—seperti kamera *thermographic*, CCTV resolusi tinggi, dan sensor *hyperspectral*—membentuk lapisan baru dalam arsitektur PdM. Pendekatan ini melengkapi sinyal *vibration-based* dan *acoustic emission* tradisional dengan representasi visual yang kaya akan informasi morfologis dan tekstural. Pelengkap yang sangat relevan datang dari Patel, Bhartiya, dan Gudi (2024) dalam IFAC-PapersOnLine (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)), yang mengusulkan integrasi *Physics-Informed Neural Networks* (PINNs) ke dalam *Model Predictive Control* (MPC). Kombinasi kedua pendekatan ini merepresentasikan visi *Industry 5.0*: penggabungan *physics-based modeling* dengan *deep learning* untuk menghasilkan keputusan pemeliharaan dan kontrol yang tidak hanya akurat secara statistik, tetapi juga konsisten dengan hukum fisika.

Urgensi adopsi teknologi ini semakin nyata ketika memperhitungkan dampak lingkungan dan keselamatan kerja (*Safety, Health, and Environment*—SHE). Kegagalan bearing pada turbin angin lepas pantai, misalnya, tidak hanya menimbulkan kerugian finansial tetapi juga risiko pencemaran lingkungan laut dan kecelakaan personel. Oleh karena itu, deteksi anomali berbasis citra menjadi pilar strategis dalam transformasi digital industri modern.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusional untuk Ekstraksi Fitur Visual

CNN beroperasi melalui operasi konvolusi diskrit dua-dimensi yang memetakan citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ ke *feature map* $\mathbf{Z} \in \mathbb{R}^{H' \times W' \times K}$ menggunakan filter $\mathbf{W}^{(k)}$ yang dapat dipelajari:

$$Z_{i,j,k} = f\left(\sum_{u=0}^{m-1}\sum_{v=0}^{n-1}\sum_{c=0}^{C-1} X_{i+u, j+v, c} \cdot W^{(k)}_{u,v,c} + b^{(k)}\right)$$

di mana $m \times n$ adalah ukuran kernel, $C$ kedalaman kanal, $K$ jumlah filter, $b^{(k)}$ bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $f(z) = \max(0, z)$). Pearson (2024) menggunakan arsitektur *Deep Residual Network* (ResNet-50) dengan *skip connection* untuk mencegah degradasi gradien pada jaringan dalam:

$$\mathbf{y} = \mathcal{F}(\mathbf{x}, \{W_i\}) + \mathbf{x}$$

di mana $\mathcal{F}(\mathbf{x}, \{W_i\})$ adalah *residual mapping* yang dipelajari, dan $\mathbf{x}$ adalah identitas *shortcut*.

### 2.2 Formulasi Masalah Deteksi Anomali

Deteksi anomali visual diformulasikan sebagai masalah klasifikasi biner dengan Peirce (2024) menggunakan *binary cross-entropy* sebagai fungsi rugi:

$$\mathcal{L}_{\text{BCE}}(\theta) = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log \hat{y}_i(\theta) + (1-y_i)\log(1-\hat{y}_i(\theta))\right]$$

dengan $y_i \in \{0,1\}$ label aktual (0 = normal, 1 = anomali), $\hat{y}_i(\theta)$ probabilitas prediksi model dengan parameter $\theta$, dan $N$ jumlah sampel pelatihan.

Untuk arsitektur berbasis *autoencoder* (seperti yang dievaluasi Pearson untuk kasus *unlabeled data*), anomali didefinisikan melalui *reconstruction error*:

$$e_{\text{recon}}(\mathbf{x}) = \|\mathbf{x} - \hat{\mathbf{x}}\|_2^2 = \sum_{c=1}^{C}\sum_{i=1}^{H}\sum_{j=1}^{W}(x_{c,i,j} - \hat{x}_{c,i,j})^2$$

Sampel diklasifikasikan sebagai anomali ketika $e_{\text{recon}} > \tau$, dengan $\tau$ merupakan *threshold* yang ditetapkan dari persentil ke-95 distribusi galat pada data normal.

### 2.3 Integrasi Physics-Informed Neural Networks (PINNs)

Patel, Bhartiya, dan Gudi (2024) memperkenalkan PINN yang menggabungkan *data loss* dengan *physics loss*:

$$\mathcal{L}_{\text{PINN}}(\theta) = \lambda_1 \mathcal{L}_{\text{data}}(\theta) + \lambda_2 \mathcal{L}_{\text{physics}}(\theta)$$

di mana $\mathcal{L}_{\text{physics}}$ adalah residual dari persamaan diferensial parsial (PDE) yang mengatur dinamika proses:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{j=1}^{N_p}\left\| \mathcal{N}[u_{\theta}(\mathbf{x}_j, t_j)] - f(\mathbf{x}_j, t_j) \right\|^2$$

dengan $\mathcal{N}[\cdot]$ operator diferensial, $u_{\theta}$ keluaran jaringan, dan $f$ *forcing term*. Pada konteks turbin uap, PDE yang relevan mencakup persamaan konservasi massa dan energi:

$$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0, \quad \rho c_p\left(\frac{\partial T}{\partial t} + \mathbf{v}\cdot\nabla T\right) = \nabla\cdot(k\nabla T) + \dot{Q}$$

### 2.4 Metrik Evaluasi Kinerja

Kinerja detektor anomali dikuantifikasi melalui metrik standar berbasis *confusion matrix*:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2\cdot\frac{\text{Precision}\cdot\text{Recall}}{\text{Precision}+\text{Recall}}$$

di mana $TP$ (*true positive*) adalah anomali yang terdeteksi benar, $FP$ (*false positive*) adalah false alarm, dan $FN$ (*false negative*) adalah anomali yang terlewat. Pearson (2024) melaporkan target industri $F_1 \geq 0{,}92$ untuk akseptasi operasional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti prosedur operasional standar (SOP) berlapis yang terstruktur dalam enam fase menurut kerangka kerja Pearson (2024):

**Fase 1 — Akuisisi Data Citra.** Instalasi kamera industri (*GigE Vision* atau *USB3 Vision*) dengan resolusi minimum $1920 \times 1080$ piksel dan laju bingkai $\geq 30$ fps pada titik inspeksi kritis (misalnya rumah bearing, permukaan bilah turbin, sambungan las). Pencahayaan terkontrol menggunakan LED ring *strobe* untuk menghilangkan bayangan dan menjamin iluminasi seragam $E \geq 500$ lux.

**Fase 2 — Pra-pemrosesan & Augmentasi.** Dataset dinormalisasi melalui *histogram equalization* dan *resize* ke dimensi standar $224 \times 224 \times 3$. Augmentasi via *Albumentations* mencakup rotasi $\pm 30°$, *horizontal flip*, *brightness contrast adjustment* (faktor 0,8–1,2), dan *Gaussian noise injection* ($\sigma = 0{,}01$) untuk meningkatkan *robustness* terhadap kondisi operasional nyata.

**Fase 3 — Arsitektur & Transfer Learning.** Inisialisasi bobot dari model pra-terlatih ImageNet (*ResNet-50* atau *EfficientNet-B3*), kemudian *fine-tuning* pada dataset spesifik komponen. Lapisan *fully-connected* akhir diganti dengan dua neuron keluaran (softmax: normal/anomali) dan lapisan *dropout* ($p = 0{,}5$) ditambahkan untuk regularisasi.

**Fase 4 — Pelatihan & Validasi.** Pelatihan menggunakan *Adam optimizer* dengan *learning rate* awal $\eta_0 = 10^{-4}$, *batch size* $B = 32$, dan *early stopping* berdasarkan *validation loss* dengan kesabaran 10 epoch. Pembagian data: 70% *training*, 15% *validation*, 15% *test* dengan stratifikasi kelas.

**Fase 5 — Integrasi MPC-PINN (berdasarkan Patel et al., 2024).** Model CNN menghasilkan *anomaly score* $a(t) \in [0,1]$ yang menjadi variabel kendala dalam formulasi MPC:

$$\min_{u(\cdot)} \int_{t_0}^{t_0+T_p} \left[\|y(\tau)-y_{\text{ref}}(\tau)\|_Q^2 + \|u(\tau)\|_R^2\right] d\tau$$

$$\text{subject to:} \quad \dot{x} = f(x,u), \quad y = h(x), \quad a(t) \leq a_{\text{crit}}$$

**Fase 6 — Deployment & Monitoring.** Model dikonversi ke format ONNX atau TensorRT untuk inferensi *edge* pada perangkat NVIDIA Jetson atau PLC industri dengan latensi target $\leq 50$ ms per citra. *Dashboard* SCADA menampilkan peta panas lokasi anomali, *trend* skor, dan rekomendasi jadwal intervensi.

Diagram alur keseluruhan mengikuti standar ISO 13373-*Condition monitoring and diagnostics of machines* dan ISO/IEC 23053-*Framework for Artificial Intelligence Systems Using Machine Learning*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Sebuah fasilitas manufaktur semikonduktor mengoperasikan 120 unit *spindle motor* pada lini *wafer handling*. Tiap spindle dilengkapi kamera inspeksi visual terintegrasi untuk mendeteksi anomali permukaan bearing. Data historis 12 bulan menunjukkan 8 kejadian kerusakan spindle dengan kerugian rata-rata USD 18.000 per kejadian (downtime + scrap). Tim rekayasa menerapkan model CNN hasil kalibrasi paper Pearson (2024).

### 4.2 Perhitungan *Confusion Matrix* dan Metrik

Setelah pelatihan pada 5.000 citra berlabel (3.500 normal, 1.500 anomali), model dievaluasi pada *test set* 750 citra, menghasilkan *confusion matrix* berikut:

| | Prediksi Normal | Prediksi Anomali |
|---|---|---|
| **Aktual Normal** | 515 (TN) | 10 (FP) |
| **Aktual Anomali** | 8 (FN) | 217 (TP) |

**Perhitungan Presisi:**
$$\text{Precision} = \frac{TP}{TP+FP} = \frac{217}{217+10} = \frac{217}{227} = 0{,}9559$$

**Perhitungan *Recall* (Sensitivitas):**
$$\text{Recall} = \frac{TP}{TP+FN} = \frac{217}{217+8} = \frac{217}{225} = 0{,}9644$$

**Perhitungan F1-Score:**
$$F_1 = 2 \cdot \frac{0{,}9559 \times 0{,}9644}{0{,}9559 + 0{,}9644} = 2 \cdot \frac{0{,}9220}{1{,}9203} = 0{,}9601$$

Nilai $F_1 = 0{,}9601$ melampaui ambang batas industri $F_1 \geq 0{,}92$ yang disyaratkan Pearson (2024), sehingga model lolos validasi untuk deployment.

### 4.3 Perhitungan Dampak Ekonomi

**Tanpa Sistem CNN (baseline):**
- *Mean Time Between Failures* (MTBF