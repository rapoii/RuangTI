# 2803 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance/PdM) telah muncul sebagai pilar strategis dalam manajemen operasi industri modern, menggantikan paradigma reaktif (*run-to-failure*) dan preventif berbasis jadwal yang sering kali menghasilkan *over-maintenance* maupun *under-maintenance*. Pearson (2024) dalam studinya yang dipublikasikan pada jurnal peer-review dan terindeks DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa pendekatan berbasis citra menggunakan *Convolutional Neural Networks* (CNN) memberikan lompatan kuantum dalam akurasi deteksi anomali pada peralatan kritis seperti turbin, pompa sentrifugal, motor listrik, dan sistem perpipaan bertekanan tinggi. Secara ekonomis, downtime yang tidak terjadwal pada fasilitas manufaktur kelas dunia dapat merugikan perusahaan hingga USD 50.000–250.000 per jam (tergantung sektor), sehingga investasi pada sensor视觉 otomatis menjadi sangat rasional.

Konteks operasional yang melatarbelakangi kebutuhan sistem deteksi anomali visual mencakup empat pilar utama. Pertama, **peningkatan kompleksitas aset** di era Industry 4.0 di mana peralatan semakin terintegrasi dengan sistem cyber-physical. Kedua, **keterbatasan inspeksi manusia** yang bersifat subyektif, lelah, dan sulit diskalakan pada lini produksi 24/7. Ketiga, **ledakan data citra** dari kamera industri, drone inspeksi, dan endoscopic probes yang membutuhkan arsitektur komputasional otomatis untuk mengekstraksi fitur kerusakan seperti retakan mikro, korosi, kebocoran, atau perubahan warna akibat overheating. Keempat, **regulasi keselamatan dan keandalan** seperti ISO 55000 (asset management), API 571 (damage mechanisms), dan IEC 61508 (functional safety) yang menuntut dokumentasi kondisi aset secara kuantitatif dan *traceable*.

Pearson (2024) menunjukkan bahwa kombinasi arsitektur CNN—seperti ResNet-50, EfficientNet, atau Vision Transformer—dengan strategi *transfer learning* dari dataset ImageNet mampu mencapai *recall* di atas 95% untuk klasifikasi cacat pada bearing, valve, dan heat exchanger. Pendekatan ini selaras dengan kerangka Physics-Informed Neural Networks (PINNs) yang dikemukakan Patel, Bhartiya, dan Gudi (2024) dalam paper mereka di *IFAC-PapersOnLine* [DOI: 10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431), di mana pengetahuan fisika proses disuntikkan ke dalam fungsi loss jaringan saraf tiruan untuk meningkatkan generalisasi model pada sistem proses. Sinergi antara computer vision untuk deteksi anomali dan PINN-MPC untuk kontrol proses membuka paradigma *closed-loop intelligent maintenance*, di mana keputusan pemeliharaan tidak hanya berdasarkan diagnosis visual tetapi juga prediksi dinamika proses secara *real-time*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Citra Anomali

Operation dasar CNN didefinisikan sebagai konvolusi diskret dua dimensi antara citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dan kernel filter $K \in \mathbb{R}^{h \times w \times C}$:

$$Y_{i,j}^{(l)} = f\left(\sum_{m=0}^{h-1}\sum_{n=0}^{w-1} W_{m,n}^{(l)} \cdot X_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $f(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $f(z) = \max(0,z)$), $W^{(l)}$ adalah bobot layer $l$, dan $b^{(l)}$ adalah bias. Setelah beberapa layer konvolusi dan pooling, *feature map* diratakan dan dimasukkan ke *fully-connected layer* untuk menghasilkan probabilitas kelas $P(\hat{y}=k|x) = \text{softmax}(z_k)$ dengan $z_k = W_k \cdot h + b_k$.

### 2.2 Fungsi Loss untuk Deteksi Biner (Anomali/Normal)

Untuk masalah deteksi anomali biner, digunakan *binary cross-entropy loss*:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

di mana $y_i \in \{0,1\}$ adalah label ground truth (1 = anomali, 0 = normal) dan $\hat{y}_i$ adalah probabilitas prediksi anomali. Untuk pendekatan autoencoder (rekonstruksi), Pearson (2024) mengusulkan penggunaan *reconstruction error* sebagai *anomaly score*:

$$\mathcal{L}_{AE} = \frac{1}{N}\sum_{i=1}^{N}\|x_i - \hat{x}_i\|_2^2$$

dengan *threshold* $\tau$ yang ditetapkan berdasarkan distribusi statistik training: $\hat{y}_i = \mathbb{1}[\mathcal{L}_{AE}(x_i) > \tau]$.

### 2.3 Metrik Evaluasi Kinerja Diagnostik

Pearson (2024) menilai kinerja model menggunakan metrik standar informatika medis dan manufaktur:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}$$

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

serta *Receiver Operating Characteristic - Area Under Curve* (ROC-AUC), yang mengukur kemampuan diskriminasi model pada seluruh ambang keputusan.

### 2.4 Physics-Informed Loss (Pendukung)

Patel, Bhartiya, dan Gudi (2024) memperkenalkan formulasi PINN di mana *total loss* menggabungkan *data fitting* dan *physics residual*:

$$\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda \mathcal{L}_{physics}$$

di mana $\mathcal{L}_{physics} = \frac{1}{N_f}\sum_{i=1}^{N_f}\|r(x_i)\|^2$ dengan residual $r(x)$ berasal dari persamaan diferensial parsial governing (misalnya dinamika reaksi-kimia atau perpindahan panas). Parameter $\lambda$ mengatur权衡 antara ketaatan pada data dan kepatuhan pada hukum fisika.

### 2.5 Formulasi Model Predictive Control (MPC)

Untuk kontrol proses pendukung, MPC diselesaikan sebagai berikut:

$$\min_{\mathbf{u}} J = \sum_{k=0}^{N_p-1} \left[(x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k\right] + (x_{N_p} - x_{ref})^T P (x_{N_p} - x_{ref})$$

$$\text{subject to: } x_{k+1} = f(x_k, u_k), \quad u_{k} \in \mathcal{U}, \quad x_k \in \mathcal{X}$$

di mana $N_p$ adalah *prediction horizon*, $Q, R, P$ adalah matriks pembobot, dan $\mathcal{U}, \mathcal{X}$ adalah konstrain aktuasi dan keadaan.

### 2.6 Indikator Kinerja Pemeliharaan

Hubungan antara deteksi anomali dan outcome pemeliharaan dinyatakan melalui:

$$A = \frac{MTBF}{MTBF + MTTR}, \quad RUL(t) = \mathbb{E}[T_{fail} - t \,|\, x_t]$$

di mana $A$ adalah availability, $MTBF$ adalah *Mean Time Between Failures*, $MTTR$ adalah *Mean Time To Repair*, dan $RUL$ adalah *Remaining Useful Life* yang dapat diprediksi menggunakan model degradasi stokastik (misalnya Wiener process).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN untuk pemeliharaan prediktif mengikuti kerangka sistematis yang terdiri atas delapan tahap rekayasa, diadopsi dari praktik terbaik Pearson (2024) dan selaras dengan standar ISO 13373 (condition monitoring) serta IEC 61784 (industrial communications).

**Tahap 1 – Penentuan Lingkup Aset Kritis.** Lakukan *criticality analysis* menggunakan matriks risiko $R = P \times S \times D$ (Probability × Severity × Detectability) sesuai FMEA untuk memprioritaskan peralatan yang akan dimonitor (misalnya pompa reaktor, kompresor udara, motor crane).

**Tahap 2 – Akuisisi Data Citra.** Pasang kamera industri resolusi tinggi (≥ 5 MP) dengan pencahayaan terstruktur (*structured LED lighting*) pada sudut inspeksi tetap. Untuk area berbahaya, gunakan drone inspeksi atau robot crawler. Resolusi citra minimal $1024 \times 1024$ piksel dengan format standar (PNG/JPEG) dan metadata EXIF yang memuat timestamp, lokasi, dan parameter exposure.

**Tahap 3 – Anotasi dan Pelabelan.** Terapkan *weakly supervised learning* atau *active learning* untuk mengurangi biaya anotasi. Gunakan platform seperti LabelImg, CVAT, atau Roboflow. Setiap citra diberi label multi-kelas: normal, retak_permukaan, korosi, kebocoran, overheating, atau aus. Minimum 1.000 citra per kelas direkomendasikan.

**Tahap 4 – Preprocessing dan Augmentasi.** Normalisasi piksel ke rentang $[0,1]$, resize ke dimensi input CNN (misal $224 \times 224$), dan augmentasi dengan rotasi, flip, perubahan brightness, Gaussian noise, dan *CutMix* untuk meningkatkan generalisasi.

**Tahap 5 – Pelatihan dan Validasi Model.** Gunakan arsitektur CNN pre-trained (ResNet-50, EfficientNet-B3, atau ConvNeXt-Tiny) dengan *transfer learning*. Hyperparameter: optimizer AdamW dengan *learning rate* $\eta = 10^{-4}$, batch size 32, *early stopping* pada validation loss. Validasi silang *k-fold* ($k=5$) untuk mengukur robustisitas.

**Tahap 6 – Deployment Edge/Cloud.** Model di-quantize (INT8) dan di-deploy ke edge device (NVIDIA Jetson, Intel OpenVINO) untuk inferensi latensi rendah (<100 ms) atau ke cloud (AWS SageMaker, Azure ML) untuk analisis batch.

**Tahap 7 – Integrasi dengan CMMS/EAM.** Hubungkan output deteksi (probabilitas anomali, kelas cacat, confidence score) ke sistem Computerized Maintenance Management System (CMMS) seperti SAP PM atau IBM Maximo untuk *auto-generate work order* ketika ambang $\hat{y} > \tau$ terlampaui.

**Tahap 8 – Monitoring Model dan Retraining.** Pantau *model drift* dengan metrik PSI (*Population Stability Index*) pada distribusi fitur input dan output. Jadwalkan *retraining* periodik (3–6 bulan) dengan data