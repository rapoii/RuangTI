# 1923 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan aset manufaktur, dari pendekatan *reactive* dan *preventive* berbasis jadwal kalender menuju *predictive maintenance* (PdM) berbasis kondisi aktual peralatan. Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyoroti bahwa kegagalan mendadak pada peralatan kritis—seperti pompa sentrifugal, kompresor, motor listrik, dan bearing—menyebabkan kerugian produksi hingga 5–10% dari kapasitas utilisasi pabrik serta *unplanned downtime* yang secara global merugikan industri manufaktur lebih dari USD 50 miliar per tahun (estimasi yang dikutip dari literatur International Society of Automation). 

Urgensi ekonomi menjadi semakin nyata ketika ditinjau dari perspektif *total cost of ownership* (TCO): satu jam *downtime* pada lini produksi kontinyu di sektor petrokimia dapat menimbulkan kerugian hingga USD 500.000, belum termasuk biaya *opportunity loss*, klaim pelanggan, dan degradasi reputasi. Pearson (2024) berargumen bahwa inspeksi visual manual—meskipun masih menjadi standar di banyak fasilitas—memiliki tiga kelemahan struktural: (1) subjektivitas evaluator, (2) kelelahan manusia pada shift panjang, dan (3) frekuensi inspeksi yang terbatas sehingga anomali intermediet luput terdeteksi. 

Solusi berbasis *Computer Vision* dan *Deep Learning*, khususnya Convolutional Neural Networks (CNN), menawarkan skalabilitas dan konsistensi yang sebelumnya tidak mungkin dicapai. Integrasi CNN dengan arsitektur *Internet of Things* (IoT) dan *edge computing* memungkinkan pengambilan keputusan pemeliharaan secara *real-time*, membentuk loop tertutup: sensor/kamera → inferensi model → rekomendasi aksi → eksekusi teknisi. Pelengkap penting bagi pendekatan vision-based ini adalah kerangka kontrol yang menjamin sistem proses tetap stabil selama anomali terdeteksi, seperti yang dikemukakan oleh Patel, Bhartiya, dan Gudi (2024) dalam makalah *Model Predictive Control using Physics Informed Neural Networks for Process Systems* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)), yang menyediakan landasan integrasi fisis ke dalam loop keputusan otomatis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network

Pearson (2024) mengadopsi arsitektur CNN dengan blok konvolusi sebagai ekstraktor fitur hierarkis. Operasi konvolusi 2D pada lapisan ke-$l$ didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left( \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} w_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b^{(l)} \right)$$

di mana $w_{m,n}^{(l)}$ adalah bobot kernel konvolusi berukuran $M \times N$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $f(z)=\max(0,z)$).

### 2.2 Fungsi Loss untuk Klasifikasi Anomali

Untuk klasifikasi biner (anomali vs. normal), Pearson (2024) menggunakan *Binary Cross-Entropy* yang dikombinasikan dengan *Focal Loss* untuk menangani *class imbalance* yang lazim pada data inspeksi industri:

$$\mathcal{L}_{BCE} = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i) \right]$$

$$\mathcal{L}_{Focal} = -\frac{1}{N} \sum_{i=1}^{N} \left( 1-\hat{y}_i \right)^{\gamma} y_i \log(\hat{y}_i)$$

di mana $\gamma \geq 0$ adalah *focusing parameter* yang menekan kontribusi *easy negatives*. Untuk *transfer learning* dari model terlatih ImageNet, Pearson (2024) melakukan *fine-tuning* hanya pada lapisan fully-connected terakhir dengan *learning rate* $10^{-4}$ dan *weight decay* $5 \times 10^{-4}$.

### 2.3 Metrik Evaluasi Kinerja

Kualitas deteksi diukur melalui metrik standar:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2 \cdot \frac{P \cdot R}{P+R}$$

serta *Area Under the Receiver Operating Characteristic Curve* (AUC-ROC) yang merepresentasikan probabilitas model memberi skor lebih tinggi pada sampel positif acak dibanding negatif acak.

### 2.4 Integrasi Physics-Informed Neural Network (PINN) untuk Kontrol Prediktif

Patel dkk. (2024) memperkenalkan komponen fisis ke dalam jaringan saraf dengan menambahkan *residual* persamaan diferensial ke fungsi loss:

$$\mathcal{L}_{PINN} = \underbrace{\lambda_d \mathcal{L}_{data}}_{\text{data-fitting}} + \underbrace{\lambda_p \mathcal{L}_{physics}}_{\text{PDE-residual}}$$

$$\mathcal{L}_{physics} = \frac{1}{N_p} \sum_{j=1}^{N_p} \left| \mathcal{N}[u_{\theta}](t_j, x_j) \right|^2$$

di mana $\mathcal{N}[\cdot]$ adalah operator diferensial persamaan dinamika proses (misalnya persamaan panas, neraca massa). Pendekatan ini menjamin bahwa prediksi model tetap konsisten dengan hukum fisika meskipun data pelatihan terbatas.

### 2.5 Formulasi Model Predictive Control (MPC)

Fungsi objektif MPC untuk horizon prediksi $H_p$ adalah:

$$\min_{u_{k},\ldots,u_{k+H_p-1}} \sum_{j=0}^{H_p-1} \left\| \hat{y}_{k+j|k} - r_{k+j} \right\|_Q^2 + \sum_{j=0}^{H_p-1} \left\| \Delta u_{k+j} \right\|_R^2$$

dengan kendala $\hat{y}_{k+j|k} = f_{PINN}(x_k, u_{k:k+j-1})$ dan batasan operasional $u_{min} \leq u_k \leq u_{max}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi Sistem Deteksi Anomali Berbasis CNN

Pearson (2024) mengusulkan alur rekayasa berikut sebagai *Standard Operating Procedure* (SOP) untuk adopsi industri:

**Tahap 1 — Akuisisi Data & Pelabelan:**
- Pemasangan kamera industri IP67 dengan resolusi minimum $1920 \times 1080$ pada jarak 0,5–2 meter dari aset kritis.
- Akuisisi citra pada frekuensi 1–5 fps dengan pencahayaan terkontrol (ring light LED 5600K atau filter inframerah termal).
- Pelabelan anotasi *bounding box* menggunakan format Pascal VOC atau COCO, dengan minimum 5.000 citra per kelas anomali.

**Tahap 2 — Pra-pemrosesan:**
- *Image augmentation*: rotasi $\pm 15°$, flip horizontal, *random crop*, *color jitter*, dan *Gaussian noise injection* untuk meningkatkan *robustness*.
- Normalisasi piksel ke rentang $[0,1]$ dengan transformasi:

$$x_{norm} = \frac{x - \mu_{dataset}}{\sigma_{dataset}}$$

**Tahap 3 — Pelatihan & Validasi:**
- Split dataset 70/15/15 (train/val/test) dengan stratified sampling.
- Pelatihan dengan optimizer AdamW, *batch size* 32, dan *early stopping* berbasis *validation loss* dengan *patience* 10 epoch.

**Tahap 4 — Deployment Edge:**
- Konversi model ke format ONNX atau TensorRT untuk inferensi pada *edge device* (NVIDIA Jetson Orin, Intel OpenVINO).
- Integrasi dengan SCADA/DCS melalui protokol OPC UA atau MQTT untuk *closed-loop* notifikasi.

**Tahap 5 — Monitoring & Retraining:**
- *Drift detection* berbasis *Population Stability Index* (PSI) dengan ambang $\psi \geq 0.25$.
- *Retraining pipeline* terjadwal (bulanan) menggunakan *active learning* dari sampel *false negative* yang dikonfirmasi teknisi.

### 3.2 Integrasi dengan Kerangka MPC Berbasis PINN

Patel dkk. (2024) melengkapi sistem vision-based dengan kontrol prediktif yang mempertahankan stabilitas proses selama anomali teridentifikasi. Arsitektur hibrida ini memungkinkan transisi operasi yang mulus menuju *safe shutdown* ketika anomali tingkat kritis terdeteksi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Inspeksi Motor Listrik Induksi 50 HP

Sebuah fasilitas manufaktur memiliki 120 unit motor induksi 50 HP sebagai penggerak utama *conveyor line*. Pearson (2024) melaporkan bahwa implementasi CNN pada dataset MVTec AD mencapai performa berikut pada subset motor:

| Kelas | Sampel Test | TP | FP | FN |
|---|---|---|---|---|
| Normal | 400 | 388 | 12 | — |
| Anomali (overheating discoloration) | 150 | 142 | — | 8 |
| Anomali (housing crack) | 80 | 74 | — | 6 |

**Perhitungan Metrik:**

$$\text{Precision} = \frac{TP}{TP+FP} = \frac{142+74}{(142+74)+12} = \frac{216}{228} = 0.9474$$

$$\text{Recall} = \frac{TP}{TP+FN} = \frac{216}{216+14} = 0.9391$$

$$F_1 = 2 \cdot \frac{0.9474 \times 0.9391}{0.9474 + 0.9391} = 0.9433$$

**Interpretasi Manajerial:** Dengan $F_1 = 0.9433$, sistem melampaui ambang industri 0.90 yang lazim digunakan pada aplikasi *mission-critical*. Namun, 14 *false negative* mengindikasikan bahwa model belum cukup sensitif terhadap anomali tahap awal, sehingga Pearson (2024) merekomendasikan penambahan *threshold tuning* dan *human-in-the-loop verification* untuk anomali kepercayaan rendah.

### 4.2 Analisis Nilai Ekonomi (TCO)

Asumsikan biaya *unplanned downtime* per kejadian: $C_{down} = \text{USD } 25.000$. Frekuensi anomali historis: $\lambda = 12$ kejadian/tahun. Deteksi dini mampu mencegah 75% kejadian (*detection-driven prevention rate* $\delta = 0.75$).

Penghematan tahunan:

$$S = \lambda \cdot \delta \cdot C_{down} = 12 \times 0.75 \times 25.000 = \text{USD } 225.000$$

Biaya investasi sistem (kamera, edge device, integrasi): $C_{inv} = \text{USD } 85.000$. *Payback period*:

$$T_{PB} = \frac{C_{inv}}{S} = \