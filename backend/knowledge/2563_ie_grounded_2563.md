# 2563 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur yang bergerak menuju paradigma *Industry 4.0* dan *Industry 5.0* telah menempatkan pemeliharaan prediktif (*predictive maintenance*/PdM) sebagai pilar strategis peningkatan ketersediaan fisik (*physical asset availability*) dan penurunan *total cost of ownership* (TCO). Studi Pearson (2024) dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti bahwa pendekatan inspeksi visual tradisional—yang bersifat periodik dan sangat bergantung pada keahlian operator—memiliki kelemahan struktural berupa *human-variability error* yang dapat mencapai 15–30% (Pearson, 2024). Dalam konteks ini, integrasi sensor visual (kamera industri, termografi, akustik) dengan arsitektur *Convolutional Neural Networks* (CNN) membuka peluang deteksi anomali secara *real-time*, *non-destructive*, dan dapat diskalakan.

Urgensi ekonomis dari penerapan deteksi anomali berbasis citra semakin diperkuat oleh data bahwa downtime tak terencana pada peralatan kritis di industri proses (reaktor, kompresor, *rotating equipment*) dapat menyebabkan kerugian produksi hingga $50.000–$250.000 per jam (Pearson, 2024). Lebih lanjut, paper tersebut melaporkan bahwa pada dataset inspeksi visual bearing dan pompa sentrifugal yang dikumpulkan dari fasilitas manufaktur diskrit, model CNN berbasis arsitektur *Residual Network* (ResNet) mampu meningkatkan *recall* deteksi cacat minor (micro-cracks, pitting corrosion, misalignment) sebesar 18,7% dibanding inspektur manusia bersertifikat. Pendekatan ini sejajar dengan kontribusi Patel, Bhartiya, dan Gudi (2024) pada DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) yang menunjukkan bahwa penggabungan *physics-informed* prior ke dalam neural network—meski dalam konteks *Model Predictive Control* (MPC)—secara signifikan memperbaiki generalisasi model dan interpretabilitas fisik, suatu prinsip yang juga relevan ketika melakukan *physics-informed* anomali scoring dalam deteksi kerusakan struktural.

Dalam lanskap operasional, integrasi CNN-PdM juga harus memperhitungkan variabel-variabel rantai pasok dan *overall equipment effectiveness* (OEE). Pearson (2024) menekankan bahwa availability data citra industrial-grade masih menjadi *bottleneck*: hanya 23% perusahaan manufaktur di negara berkembang yang memiliki repositori citra kegagalan historial terstruktur. Oleh karena itu, strategi *transfer learning*, *few-shot learning*, dan *synthetic data generation* melalui *generative adversarial networks* (GAN) menjadi sangat krusial untuk membangun sistem yang robust terhadap kelangkaan data.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur Convolutional Neural Network untuk Anomali Detection

Arsitektur CNN yang digunakan untuk deteksi anomali berbasis citra mengikuti prinsip *hierarchical feature learning*. Operasi konvolusi dua-dimensi pada lapisan ke-$l$ didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} W_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $W^{(l)}$ adalah kernel konvolusi berukuran $k \times k$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $f(z) = \max(0,z)$). Untuk arsitektur ResNet yang digunakan Pearson (2024), koneksi residual memastikan gradien dapat dipropagasikan secara efektif:

$$\mathbf{h}^{(l)} = \mathcal{F}(\mathbf{x}^{(l)}, \{W^{(l)}\}) + \mathbf{x}^{(l)}$$

dengan $\mathbf{h}^{(l)}$ sebagai output blok residual, dan $\mathcal{F}$ sebagai *residual mapping*.

### 2.2. Formulasi Anomali Scoring

Pearson (2024) menggunakan pendekatan *reconstruction-based* anomaly scoring, di mana autoencoder atau model *student-teacher* menghasilkan *reconstruction error* sebagai indikator anomali:

$$A(\mathbf{x}) = \frac{1}{N}\sum_{i=1}^{N}\left(x_i - \hat{x}_i\right)^2$$

di mana $\hat{x}_i$ adalah rekonstruksi piksel ke-$i$ oleh model, dan $A(\mathbf{x})$ adalah *anomaly score* agregat. Threshold keputusan ditentukan melalui distribusi empiris:

$$A(\mathbf{x}) \geq \tau \implies \mathbf{x} \in \mathcal{A}_{anomali}$$

dengan $\tau$ sebagai threshold yang dioptimasi menggunakan *precision-recall* trade-off atau metrik AUROC.

### 2.3. Physics-Informed Loss Function

Mengginspirasi framework Patel et al. (2024) pada DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431), kita dapat menggabungkan prior fisika ke dalam fungsi loss pelatihan:

$$\mathcal{L}_{total} = \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics}$$

di mana $\mathcal{L}_{data}$ adalah *binary cross-entropy* atau *focal loss* untuk klasifikasi anomali:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

$$\mathcal{L}_{focal} = -\frac{1}{N}\sum_{i=1}^{N}(1-\hat{y}_i)^{\gamma} y_i \log(\hat{y}_i)$$

sedangkan $\mathcal{L}_{physics}$ adalah *physics-residual loss* yang menghukum deviasi dari hukum kekekalan massa, energi, atau persamaan konstitutif material. Untuk deteksi retakan pada komponen mekanik, misalnya:

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{j=1}^{N_p}\left\|\nabla \cdot \boldsymbol{\sigma}(\mathbf{u}_j) + \mathbf{f}_j\right\|^2$$

dengan $\boldsymbol{\sigma}$ sebagai tensor tegangan, $\mathbf{u}_j$ sebagai displacement field hasil prediksi, dan $\mathbf{f}_j$ sebagai gaya badan.

### 2.4. Formulasi Predictive Maintenance sebagai Optimasi

Pemeliharaan prediktif dapat diformulasikan sebagai masalah optimasi biaya siklus hidup:

$$\min_{T_{insp}, T_{replace}} \quad C_{total} = \int_0^{L} \left[C_{insp}(t) + C_{down}(t) + C_{rep}(t)\right] dt$$

dengan kendala probabilitas kegagalan $P_f(t) \leq P_{threshold}$. Pearson (2024) menunjukkan bahwa threshold keputusan anomali $\tau$ secara langsung memengaruhi keseimbangan antara *false positive* (menurunkan efisiensi inspeksi) dan *false negative* (meningkatkan risiko kerusakan katastrofik).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis sistem deteksi anomali berbasis CNN mengikuti SOP yang dirancang berdasarkan framework Pearson (2024) dan prinsip-prinsip *physics-informed modeling* dari Patel et al. (2024):

### Tahap 1: Akuisisi Data Citra & Kalibrasi Sensor

1. **Seleksi modalitas sensor visual**: kamera RGB resolusi tinggi (minimal 5 MP), kamera termal (untuk deteksi anomali termal), atau line-scan camera untuk komponen berputar.
2. **Penentuan *sampling rate***: 1–30 fps untuk *continuous monitoring*, atau trigger-based untuk *event-driven inspection*.
3. **Kalibrasi iluminasi dan posisi**: gunakan *diffuse lighting enclosure* dan *fiducial markers* untuk mengurangi variabilitas.
4. **Annotasi oleh ahli domain**: bounding box anomali dianotasi menggunakan standar *PASCAL VOC* atau *COCO format*.

### Tahap 2: Pre-processing & Augmentasi Data

1. **Resize dan normalisasi**: $x_{norm} = (x - \mu)/\sigma$ dengan $\mu, \sigma$ dari *ImageNet statistics*.
2. **Augmentasi geometris dan fotometris**: rotasi ($\pm 15°$), translasi, flipping horizontal, *color jittering*, *Gaussian noise injection*.
3. **Synthetic anomaly generation** menggunakan *CutPaste*, *DRAEM*, atau GAN untuk menangani *class imbalance*.

### Tahap 3: Pelatihan Model CNN

```
[Data Split] → [70% Train / 15% Validation / 15% Test]
       ↓
[Initialize Pre-trained Weights] (ImageNet / Domain-specific)
       ↓
[Fine-tune dengan learning rate scheduling]
       ↓
[Validasi menggunakan AUROC, F1-score, mAP]
       ↓
[Physics-Informed Refinement] (jika data terbatas)
```

Algoritma pelatihan menggunakan optimizer AdamW dengan *learning rate* awal $\eta_0 = 10^{-4}$ dan *cosine annealing*. *Early stopping* diterapkan pada epoch ke-15 tanpa peningkatan *validation AUROC*.

### Tahap 4: Deployment & Integrasi dengan CMMS/EAM

Model CNN di-*export* ke format ONNX atau TensorRT untuk inferensi pada *edge device* (NVIDIA Jetson, Intel OpenVINO). Output deteksi anomali diintegrasikan dengan:

- **Computerized Maintenance Management System (CMMS)** melalui REST API untuk *work order generation* otomatis.
- **Enterprise Asset Management (EAM)** untuk *asset health scoring* agregat.
- **Dashboard real-time** menggunakan Grafana/Power BI dengan KPI: *MTBF* (Mean Time Between Failures), *MTTR* (Mean Time To Repair), *anomaly detection rate*.

### Tahap 5: Monitoring Model Drift & Re-training

Terapan *model drift detection* menggunakan *Population Stability Index* (PSI) dan *Kolmogorov-Smirnov test* pada distribusi fitur. Jika PSI > 0.25, trigger *pipeline re-training* dengan data terbaru.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Deteksi Anomali pada Pompa Sentrifugal Pabrik Kimia

**Asumsi Parameter Industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah pompa kritis | 50 | unit |
| Citra per inspeksi | 4 (4 sudut) | image/unit |
| Frekuensi inspeksi | 3 | kali/hari |
| Biaya downtime | 80.000 | USD/jam |
| Biaya inspeksi manual | 120 | USD/inspeksi |
| Biaya inspeksi CNN | 15 | USD/inspeksi (amortisasi+komputasi) |

**Langkah 1: Perhitungan Throughput Inspeksi**

$$T_{insp} = N_{pompa} \times N_{citra} \times f_{insp} = 50 \times 4 \times 3 = 600 \text{ image/hari}$$

**Langkah 2: Biaya Tahunan Inspeksi Manual**

$$C_{manual} = 600 \times 365 \times 120 = 26.280.000 \text{ USD/tahun}$$

**Langkah 3: Biaya Tahunan Inspeksi CNN**

$$C_{CNN} = 600 \times 365 \times 15 = 3.285.000 \text{ USD/tahun}$$

**Langkah 4: Penghematan Biaya Inspeksi**

$$\Delta C = C_{manual} - C_{CNN} = 26.280.000 - 3.285.000 = 22.995.000 \text{ USD/tahun}$$

**Langkah 5: Perhitungan Pencegahan Downtime**

Berdasarkan Pearson (2024), CNN meningkatkan *recall* deteksi dini dari 71% (manual) menjadi 89,7%. Misalkan rata-rata 12 kejadian failure/tahun dengan downtime rata-rata 8 jam:

$$E[D_{manual}] = 12 \times 8 \times 80.000 \times 0.29 = 2.227.200 \text{ USD/tahun (downtime tak dicegah)}$$

$$E[D_{CNN}] = 12 \times 8 \times 80.000 \times 0.103 = 791.040 \text{ USD/tahun (downtime tak dicegah)}$$

**Langkah 6: Total Penghematan**

$$S_{total} = \Delta C + (E[D_{manual}] - E[D_{CNN}]) = 22.995.000 + 1.436