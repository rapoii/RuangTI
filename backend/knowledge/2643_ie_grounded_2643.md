# 2643 — Deteksi Anomali Berbasis Citra pada Peralatan Industri dengan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Eshit Dhiman (2024). *International Journal of Multidisciplinary Research and Analysis*. DOI: [https://doi.org/10.47191/ijmra/v9-i7-28](https://doi.org/10.47191/ijmra/v9-i7-28)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur global yang dipicu oleh *Industry 4.0* dan *Industrial Internet of Things* (IIoT) telah mengubah secara fundamental paradigma pemeliharaan aset fisik. Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa deteksi anomali berbasis citra menggunakan *Convolutional Neural Networks* (CNN) merupakan tulang punggung sistem *predictive maintenance* (PdM) modern yang menggantikan pendekatan *reactive maintenance* (perbaikan setelah kegagalan) dan *preventive maintenance* (pemeliharaan terjadwal tanpa indikasi kondisi nyata). Urgensi ekonomis dari transisi ini sangat substansial: menurut laporan industri yang dikutip Pearson, downtime yang tidak terjadwal pada fasilitas manufaktur kelas dunia dapat menimbulkan kerugian hingga USD 50.000 per jam, setara dengan 8–12% dari *gross domestic product* manufaktur hilang akibat kegagalan aset yang tidak terprediksi.

Konteks teknis yang melatari pekerjaan Pearson bersandar pada realitas bahwa peralatan industri kritis—mulai dari turbin gas, pompa sentrifugal, bearing rotor, heat exchanger, hingga sistem Conveyor—menghasilkan degradasi visual yang kaya akan sinyal degradasi: retakan permukaan, korosi, keausan abnormal, kebocoran fluida, perubahan warna termal, maupun kontaminasi. Citra visual tersebut, ketika direkam melalui kamera industri resolusi tinggi, kamera termal, atau sensor *hyperspectral*, mengandung *feature signatures* yang sangat kaya yang sebelumnya hanya dapat diinterpretasikan oleh inspektur manusia berpengalaman. Pearson menunjukkan bahwa inspeksi manual memiliki tingkat kesalahan subyektif 15–25% dan tidak dapat diskalakan pada lini produksi kontinyu 24/7. CNN menawarkan kemampuan generalisasi hierarkis yang mampu mengekstraksi fitur low-level (edge, texture), mid-level (part, motif), dan high-level (semantic defect patterns) secara otomatis.

Lebih jauh, Pearson (2024) menghubungkanframework ini dengan *physics-informed modelling* yang dikaji oleh Dhiman (2024) dalam *International Journal of Multidisciplinary Research and Analysis* (DOI: [10.47191/ijmra/v9-i7-28](https://doi.org/10.47191/ijmra/v9-i7-28)). Dhiman mengemukakan bahwa integrasi hukum fisika—seperti persamaan konduksi panas Fourier, dinamika fluida Navier–Stokes, dan mekanika kontinum—ke dalam arsitektur neural network mampu mengatasi kelemahan inheren model *purely data-driven*: kebutuhan data latih masif, ketidakstabilan generalisasi di luar distribusi, dan ketidakpatuhan terhadap konservasi energi/massa. Sinergi antara representasi citra berbasis CNN dan prior fisika ini menjadi fondasi sistem PdM *trustworthy* yang relevan untuk aset misi-kritis. Kombinasi keduanya menjawab kebutuhan industri akan sistem yang tidak hanya akurat, tetapi juga *interpretable* dan *physically consistent*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Operasi fundamental CNN adalah konvolusi diskret yang memetakan tensor input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ menjadi *feature map* melalui kernel $\mathbf{K} \in \mathbb{R}^{k_h \times k_w \times C}$:

$$Y_{i,j,c} = f\left(\sum_{u=0}^{k_h-1}\sum_{v=0}^{k_w-1} \sum_{m=0}^{C-1} X_{i+u,\, j+v,\, m} \cdot K_{u,v,m,c} + b_c\right) \quad (1)$$

di mana $f(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $f(z)=\max(0,z)$ untuk hidden layer, dan sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$ untuk output klasifikasi biner). Pearson (2024) menjelaskan bahwa arsitektur yang digunakan untuk deteksi anomali berbasis citra umumnya mengadopsi backbone seperti ResNet-50, EfficientNet-B3, atau VGG-16 dengan modifikasi *final fully-connected layer* menjadi dua neuron (normal vs. anomali) atau satu neuron dengan aktivasi sigmoid untuk *anomaly scoring*.

### 2.2 Formulasi Anomaly Score

Untuk pendekatan *one-class classification* atau autoencoder-based detection yang banyak dirujuk Pearson, *anomaly score* $s(\mathbf{x})$ didefinisikan sebagai jarak rekonstruksi:

$$s(\mathbf{x}) = \left\| \mathbf{x} - \hat{\mathbf{x}} \right\|_2^2 = \sum_{i=1}^{n}\left(x_i - \hat{x}_i\right)^2 \quad (2)$$

di mana $\hat{\mathbf{x}}$ adalah rekonstruksi citra oleh decoder. Keputusan anomali diambil berdasarkan threshold $\tau$:

$$\text{Label}(\mathbf{x}) = \begin{cases} \text{Normal} & \text{jika } s(\mathbf{x}) \leq \tau \\ \text{Anomali} & \text{jika } s(\mathbf{x}) > \tau \end{cases} \quad (3)$$

Threshold $\tau$ umumnya ditetapkan pada persentil ke-99 dari distribusi skor pada data normal validasi, memberikan *expected false positive rate* kurang dari 1%.

### 2.3 Fungsi Loss Hybrid: Data-Driven + Physics-Informed

Mengikuti kerangka Dhiman (2024), *physics-informed loss function* menggabungkan data loss dan physics residual:

$$\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}} \quad (4)$$

Untuk kasus deteksi anomali termal pada heat exchanger, residual fisika dapat berupa pelanggaran hukum konservasi energi:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N}\sum_{i=1}^{N} \left( \nabla \cdot (k\nabla T_i) - \rho c_p \frac{\partial T_i}{\partial t} \right)^2 \quad (5)$$

dengan $\lambda_d, \lambda_p$ sebagai bobot regularisasi (umumnya $\lambda_d = 0.7, \lambda_p = 0.3$), $k$ konduktivitas termal, $\rho$ densitas, dan $c_p$ kapasitas panas spesifik. Pearson menekankan bahwa embedding persamaan diferensial parsial ini secara signifikan meningkatkan robustness saat data pelatihan terbatas.

### 2.4 Metrik Kinerja Klasifikasi

Kinerja sistem dievaluasi melalui *confusion matrix* dengan metrik turunan:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN} \quad (6)$$

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}} \quad (8)$$

$$\text{AUC} = \int_{0}^{1} \text{TPR}(\text{FPR}) \, d(\text{FPR}) \quad (9)$$

Pearson melaporkan bahwa arsitektur CNN hibrid-nya mencapai $F_1 > 0.94$ dan AUC $> 0.97$ pada benchmark MVTec AD dan dataset proprietary-nya.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN untuk predictive maintenance mengikuti SOP terstruktur yang selaras dengan standar ISO 55000 (Asset Management) dan ISO 13374 (Condition Monitoring). Pearson (2024) menyusun metodologi dalam tujuh tahap:

**Tahap 1 – Akuisisi Data Citra.** Pemasangan kamera industri (resolusi $\geq 1920 \times 1080$ piksel, frame rate 30–60 fps) atau kamera termal FLIR pada titik inspeksi strategis. Pencahayaan terkontrol (LED ring diffuser) dan protokol jarak fokus tetap ($300 \pm 50$ mm) wajib distandarkan.

**Tahap 2 – Preprocessing Citra.** Pipeline preprocessing mencakup resize ke $224 \times 224$ piksel, normalisasi $[0,1]$, *histogram equalization* CLAHE untuk menghadapi variasi iluminasi, dan augmentasi data (rotasi $\pm 15°$, flip, brightness jitter $\pm 10\%$, cutout).

**Tahap 3 – Anotasi dan Pelabelan.** Anomali dilabeli oleh ahli pemeliharaan dengan *bounding box* sesuai format YOLO/COCO. Minimum 1.000 citra per kelas anomali dibutuhkan untuk memenuhi Central Limit Theorem pada pelatihan deep learning.

**Tahap 4 – Arsitektur Model.** Backbone CNN (ResNet-50 pretrained ImageNet) + *transfer learning* dengan *fine-tuning* layer akhir. Untuk kasus *rare defect*, diterapkan *few-shot learning* atau *synthetic data generation* via GAN.

**Tahap 5 – Pelatihan dan Validasi.** Optimizer Adam dengan learning rate $\eta = 10^{-4}$, batch size 32, *early stopping* (patience=10), dan k-fold cross-validation ($k=5$).

**Tahap 6 – Deployment Edge/Cloud.** Model dikonversi ke ONNX/TensorRT untuk inferensi pada GPU edge (NVIDIA Jetson AGX) atau cloud (AWS Inferentia). Latensi inferensi ditarget $< 50$ ms per citra.

**Tahap 7 – Integrasi CMMS & Alerting.** Hasil deteksi di-streaming ke *Computerized Maintenance Management System* (CMMS) melalui MQTT, memicu *work order* otomatis saat confidence $> 0.85$.

Diagram alur logika keputusan: **Citra → Preprocessing → CNN Inference → Anomaly Score $s(\mathbf{x})$ → Threshold Check $\tau$ → Jika $s > \tau$ → Trigger Alert + Severity Classification → CMMS Work Order**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Deteksi Retakan pada Dinding Reaktor Tekanan Tinggi di Pabrik Petrokimia.

**Parameter Input Industri:**
- Dataset: 5.000 citra X-ray resolusi $512 \times 512$ piksel
- Distribusi kelas: 4.250 normal, 500 retakan minor, 250 retakan mayor
- Arsitektur: ResNet-50 transfer learning, dilatih 30 epoch
- Hasil pelatihan: Training Accuracy = 96.8%, Validation Accuracy = 94.2%

**Perhitungan 1 – Confusion Matrix dan Metrik.**
Misalkan hasil inferensi pada 1.000 citra uji:

| | Prediksi Normal | Prediksi Anomali |
|---|---|---|
| **Aktual Normal** | TN = 840 | FP = 10 |
| **Aktual Anomali** | FN = 15 | TP = 135 |

$$\text{Precision} = \frac{135}{135+10} = 0.931 \quad (10)$$

$$\text{Recall} = \frac{135}{135+15} = 0.900 \quad (11)$$

$$F_1 = 2 \cdot \frac{0.931 \times 0.900}{0.931 + 0.900} = 0.915 \quad (12)$$

**Perhitungan 2 – Dampak Ekonomi Pemeliharaan Prediktif.**
Asumsikan: biaya downtime per jam $C_d = \$25.000$, frekuensi kegagalan historis tanpa PdM = 12 insiden/tahun dengan rata-rata downtime 8 jam, biaya perbaikan darurat $C_e = \$75.000$/insiden, investasi sistem PdM $I = \$850.000$, biaya operasional tahunan $C_o = \$120.000$.

Tanpa PdM: $L_{\text{before}} = 12 \times (8 \times 25.000 + 75.000) = \$3.300.000$/tahun.

Dengan PdM (Recall 0.900 mendeteksi 90% anomali lebih awal, downtime turun 60% menjadi 3.2 jam/insiden):
$$L_{\text{after}} = 12 \times (1-0.9)(8 \times 25.000 + 75.000) + 12 \times 0.9 \times (3.2 \times 25.000 + 75.000) \times 0.4$$
$$= 12 \times 0.1 \times 275.000 + 12 \times 0.9 \times 155.000 \times 0.4$$
$$= 330.000 + 669.600 = \$999.600/\text{tahun}$$

Penghematan bersih: $S = 3.300.000 - 999.600 - 120.000 = \$2.180.400$/tahun.

**Payback Period:**
$$T_p = \frac{I}{S} = \frac{850.000}{2.180.400} \approx 0.39 \text{ tahun} \approx 4.7 \text{ bulan} \quad (13)$$

**Perhitungan 3 – Reliabilitas Sistem (MTBF Improvement).**
MTBF awal $M_0 = 720$ jam. Dengan PdM, probabilitas kegagalan antar-inspeksi berkurang mengikuti *bathtub curve* yang dimodifikasi:
$$M_1 = M_0 \times \left(1 + \frac{R_{\text{recall}}}{1-R_{\text{recall}}}\right