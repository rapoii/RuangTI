# 2675 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance*/PdM) telah menjadi pilar strategis dalam transformasi digital industri manufaktur dan proses global, menggantikan paradigma reaktif dan terjadwal yang selama decades menimbulkan pemborosan (*waste*) berupa downtime tidak terjadwal, over-maintenance, dan kerusakan modalitas aset kritis. Pearson (2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyoroti bahwa hingga 70% biaya siklus hidup peralatan industri modern—mencakup pompa sentrifugal, motor induksi, kompresor, dan boiler—berasal dari fase operasi dan pemeliharaan, bukan dari kapitalisasi awal. Kerusakan bearing pada motor listrik, misalnya, menyumbang sekitar 51% dari total kegagalan motor induksi menurut standar IEEE 493, dengan biaya rata-rata kerusakan tidak terjadwal pada lini produksi mencapai USD 50.000 per jam pada industri petrokimia.

Dalam konteks ini, Pearson (2024) mengusulkan arsitektur *Convolutional Neural Network* (CNN) berbasis citra visual (RGB, termal, atau X-ray) untuk mendeteksi anomali permukaan, perubahan warna, deformasi geometris, dan pola korosi pada peralatan secara *real-time*. Pendekatan ini menjawab keterbatasan metode sensor tradisional (vibrasi, akustik, arus) yang memerlukan pemasangan sensor kontak invasif, rentan terhadap noise lingkungan, dan gagal mendeteksi anomali visual seperti retakan mikrofatigue pada impeller turbin. Pearson (2024) menegaskan bahwa integrasi computer vision ke dalam arsitektur PdM mampu menurunkan Mean Time To Detect (MTTD) hingga 60% dan meningkatkan akurasi klasifikasi hingga 95% pada dataset MVTec AD.

Urgensi ekonominya bersifat nyata: dunia kehilangan sekitar USD 50 miliar per tahun akibat downtime yang tidak diperlukan (*unplanned downtime*), dan analitik prediktif berbasis CNN menjanjikan *Return on Investment* (ROI) 10 kali lipat dalam 24 bulan pertama (Pearson, 2024). Lebih lanjut, integrasi framework Physics-Informed Neural Networks (PINN) yang dikemukakan oleh Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) untuk Model Predictive Control (MPC) melengkapi lapisan operasional dengan kontrol optimal yang menghormati hukum kekekalan massa, energi, dan momentum—sehingga PdM tidak berdiri sendiri tetapi menjadi bagian dari *cyber-physical production system* yang kohesif. Tulisan ini mengintegrasikan kedua perspektif untuk membangun fondasi teknis yang kokoh bagi modul 2675.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Pearson (2024) mengadopsi arsitektur CNN berlapis (*layered convolutional feature extractor*) yang menerima input citra $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$, dengan $H$, $W$, $C$ masing-masing menyatakan tinggi, lebar, dan jumlah channel (3 untuk RGB). Operasi konvolusi pada layer $l$ didefinisikan sebagai:

$$\mathbf{F}_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} \mathbf{W}_{m,n}^{(l)} \cdot \mathbf{X}_{i+m,\,j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $\mathbf{W}^{(l)} \in \mathbb{R}^{k \times k}$ adalah kernel konvolusi dengan ukuran $k \times k$, $b^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(x) = \max(0, x)$). Fitur hasil konvolusi $\mathbf{F}^{(l)}$ lalu melalui operasi *pooling* untuk mereduksi dimensi:

$$\mathbf{P}^{(l)} = \text{maxpool}(\mathbf{F}^{(l)}) = \max_{(i,j)\in \Omega_{p}} \mathbf{F}^{(l)}_{i,j}$$

### 2.2 Fungsi Loss dan Optimasi

Untuk tugas klasifikasi biner (normal/anomali), Pearson (2024) menggunakan Binary Cross-Entropy (BCE):

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

di mana $y_i \in \{0,1\}$ adalah label ground-truth dan $\hat{y}_i = P(y_i=1|\mathbf{X}_i; \boldsymbol{\theta})$ adalah probabilitas prediksi dari jaringan dengan parameter $\boldsymbol{\theta}$. Optimasi parameter dilakukan dengan *Adam optimizer*:

$$\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

dengan $\eta$ learning rate, $\hat{m}_t$ dan $\hat{v}_t$ masing-masing adalah *first moment* dan *second moment* estimator yang dikoreksi bias.

### 2.3 Metrik Evaluasi Kinerja

Pearson (2024) mengusulkan evaluasi multi-metrik: Precision ($P$), Recall ($R$), F1-Score, dan AUC-ROC:

$$P = \frac{TP}{TP + FP}, \quad R = \frac{TP}{TP + FN}, \quad F_1 = 2\cdot\frac{P \cdot R}{P + R}$$

dengan TP, FP, FN berturut-turut adalah True Positive, False Positive, False Negative. Untuk industri dengan biaya *false negative* tinggi (misalnya kerusakan reaktor nuklir), recall harus diprioritaskan; sedangkan untuk lini perakitan dengan biaya *false alarm* tinggi, precision menjadi dominan.

### 2.4 Integrasi PINN-MPC sebagai Pelapis Kontrol

Patel, Bhartiya, dan Gudi (2024) merumuskan MPC dengan PINN sebagai pengganti model first-principles:

$$\min_{\mathbf{u}(t)} J = \int_{t_0}^{t_f}\left[(\mathbf{x}(t)-\mathbf{x}_{ref})^\top Q (\mathbf{x}(t)-\mathbf{x}_{ref}) + \mathbf{u}(t)^\top R \mathbf{u}(t)\right]dt$$

tunduk pada约束 dinamika sistem yang dipelajari PINN:

$$\dot{\mathbf{x}}(t) = f_{\text{PINN}}(\mathbf{x}(t), \mathbf{u}(t); \boldsymbol{\theta}_{\text{PINN}})$$

dengan $\mathbf{x}$ state, $\mathbf{u}$ variabel kontrol, $Q$ dan $R$ matriks bobot. Loss fungsi PINN menggabungkan dua komponen:

$$\mathcal{L}_{\text{PINN}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}}$$

di mana $\mathcal{L}_{\text{data}}$ adalah MSE pada data terukur dan $\mathcal{L}_{\text{physics}} = \|\dot{\mathbf{x}} - f_{\text{PINN}}\|_2^2$ adalah residual persamaan diferensial, dengan bobot $\lambda_d, \lambda_p$ yang dapat di-tuning.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem PdM berbasis CNN mengikuti SOP berlapis sesuai Pearson (2024) dan integrasi Patel et al. (2024):

**Tahap 1 — Akuisisi Data Visual.** Kamera industri (IP67/IP69K rated, resolusi minimum 1920×1080) dipasang pada posisi strategis di sekitar peralatan target. Citra dikumpulkan dengan tiga protokol: (a) operasi normal untuk kelas *negative*, (b) degradasi terinduksi untuk kelas *positive*, dan (c) augmentasi data: rotasi $\pm 15°$, flipping horizontal, variasi brightness $\pm 20%$, Gaussian noise $\sigma=0.02$.

**Tahap 2 — Preprocessing.** Citra dinormalisasi ke rentang $[0,1]$, lalu dilakukan resize ke $224 \times 224$ piksel sesuai input standar arsitektur (misal ResNet-50). Dataset dibagi 70/15/15 untuk training/validation/testing.

**Tahap 3 — Transfer Learning.** Menggunakan bobot pra-latih ImageNet, layer konvolusi dibekukan (*frozen*) dan hanya *fully-connected head* yang di-*fine-tune* dengan learning rate $\eta = 10^{-4}$.

**Tahap 4 — Training dan Validasi.** Pelatihan dilakukan selama 50 epoch dengan *early stopping* (patience = 10 epoch) berdasarkan validation loss. Batch size = 32, optimizer Adam.

**Tahap 5 — Deployment Edge Computing.** Model CNN dikuantisasi INT8 dan di-deploy pada GPU edge (NVIDIA Jetson Orin) dengan latency inferensi $< 50$ ms per citra.

**Tahap 6 — Integrasi MPC-PINN untuk Kontrol Adaptif.** Output deteksi anomali menjadi sinyal umpan balik untuk MPC yang dikontrol oleh PINN, memungkinkan *set-point adjustment* otomatis sebelum kerusakan terjadi.

Diagram alir prosesnya: *Image Acquisition → Preprocessing → CNN Inference → Anomaly Score $s \in [0,1]$ → Thresholding ($s > \tau$) → Alert Trigger → PINN-MPC Re-optimization → Actuator Command*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Lini produksi pompa sentrifugal di pabrik petrokimia dengan 120 unit pompa, target inspeksi harian 480 citra (4 citra per pompa). Kelas anomali yang dideteksi: korosi impeller, retakan poros, dan kebocoran seal.

**Parameter Model (berdasarkan Pearson, 2024):**
- Akurasi CNN pada validation set: $A_{\text{val}} = 0.962$
- Precision: $P = 0.948$
- Recall: $R = 0.971$
- F1-Score: $F_1 = 0.959$
- AUC-ROC: $0.983$
- Threshold alert: $\tau = 0.85$
- Biaya inspeksi manual per pompa: $C_m = $ USD 25
- Biaya perbaikan preventif: $C_p = $ USD 1.200
- Biaya kerusakan tidak terjadwal: $C_f = $ USD 50.000

**Langkah 1 — Penentuan Akurasi Operasional.** Diberikan confusion matrix aktual pada testing set (n=2.400): TP = 580, FP = 32, FN = 18, TN = 1.770.

$$P = \frac{580}{580+32} = \frac{580}{612} = 0.9477$$

$$R = \frac{580}{580+18} = \frac{580}{598} = 0.9699$$

$$F_1 = \frac{2 \times 0.9477 \times 0.9699}{0.9477 + 0.9699} = \frac{1.8382}{1.9176} = 0.9586$$

**Langkah 2 — Perhitungan Biaya Total dengan Sistem CNN vs Manual.**

*Baseline manual:* Asumsikan 20% pompa (24 unit) terdeteksi late, 4 unit di antaranya mengalami kerusakan besar.

$$TC_{\text{manual}} = 120 \cdot C_m + 4 \cdot C_f = 120(25) + 4(50.000) = 3.000 + 200.000 = \text{USD } 203.000$$

*Sistem CNN:* 95% anomali terdeteksi lebih awal, hanya 0,2 unit mengalami catastrophic failure (dari 4 unit baseline). Inspeksi menggunakan CNN hanya membutuhkan 1 inspeksi ringkas/pompa ($C_m^{\text{CNN}} = $ USD 5):

$$TC_{\text{CNN}} = 120(5) + 24 \cdot C_p + 0{,}2 \cdot C_f = 600 + 24(1.200) + 0{,}2(50.000) = 600 + 28.800 + 10.000 = \text{USD } 39.400$$

**Langkah 3 — ROI dan Penghematan.**

$$\text{Savings} = 203.000 - 39.400 = \text{USD } 163.600$$

$$\text{ROI} = \frac{163.600}{C