# 1891 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era industri 4.0 telah mentransformasikan fundamental paradigma pemeliharaan aset dari pendekatan *reactive* dan *preventive time-based* menuju *predictive condition-based maintenance* (PdM/CBM). Dalam konteks ini, James Pearson (2024) memposisikan deteksi anomali berbasis citra sebagai salah satu enabler kritis karena lebih dari 70% defect visual pada peralatan rotasi dan statis di sektor manufaktur berat, petrokimia, dan pembangkitan energi bersifat *surface-degrading* — yaitu retakan, korosi, kebocoran, keausan bearing, scorching, dan delaminasi coating — yang secara langsung dapat diamati melalui pencitraan (Pearson, 2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)). Urgensi ekonominya substansial: studi-studi referensi yang dikutip Pearson menunjukkan bahwa downtime tak terjadwal di industri proses dapat merugikan hingga USD 50.000 per jam pada plant kelas menengah, dan kehilangan produksi ini menyerap 15–30% margin EBITDA operasional.

Secara teknis, kombinasi tiga kekuatan konvergen memungkinkan lompatan kualitas deteksi berbasis CNN. Pertama, ketersediaan *high-resolution CMOS/thermal imaging sensors* yang sudah terpasang pada banyak plant (drone inspection, CCTV, robot crawler) menyediakan data citra dengan *signal-to-noise ratio* memadai. Kedua, arsitektur CNN modern (ResNet, EfficientNet, Vision Transformer hibrida) mampu mengekstraksi fitur hierarkis — dari edge lokal pada early layer hingga pola cacat semantik pada deep layer — dengan akurasi yang melampaui inspektur manusia pada tugas tertentu. Ketiga, integrasi dengan *Physics-Informed* pendekatan, seperti yang dikembangkan Patel, Bhartiya, dan Gudi (2024) untuk Model Predictive Control (MPC) berbasis Physics-Informed Neural Networks (PINN), memungkinkan penggabungan prior fisika (persamaan panas, dinamika fluida, hukum kekekalan massa) ke dalam loop keputusan pemeliharaan sehingga false positive berkurang dan keputusan intervensi tetap konsisten dengan batas operasional (Patel dkk., 2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)).

Konteks regulerior dan standar juga relevan. ISO 13373 (Condition monitoring and diagnostics of machines) dan ISO 55000 (Asset management) kini secara eksplisit mengakui pendekatan data-driven sebagai komponen yang sah dari strategi pemeliharaan, sehingga adopsi CNN-PdM tidak hanya bernilai ekonomis tetapi juga memenuhi kepatuhan governance. Pearson (2024) berargumen bahwa kombinasi citra-citra historis (yang membentuk *digital twin of asset degradation*) dengan model fisika process akan menggantikan inspeksi manual periodik yang selama ini menjadi bottleneck OEE (Overall Equipment Effectiveness) di banyak fasilitas. Dengan kerangka tersebut, modul ini akan membedah formulasi matematis CNN untuk anomali visual, prosedur implementasi sistematis, dan integrasinya dengan MPC berbasis PINN untuk pengambilan keputusan pemeliharaan-prediksi yang optimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Klasifikasi Anomali

CNN memproses citra input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ melalui lapisan konvolusi yang menerapkan filter $\mathbf{W}_k \in \mathbb{R}^{f_h \times f_w \times C}$ untuk menghasilkan *feature map*:

$$Z_{i,j,k} = \sum_{u=0}^{f_h-1}\sum_{v=0}^{f_w-1}\sum_{c=0}^{C-1} W_{u,v,c,k} \cdot X_{i+u, j+v, c} + b_k$$

di mana $b_k$ adalah bias dan aktivasi非线性 $a_k = \sigma(Z_{i,j,k})$ dengan $\sigma(\cdot)$ berupa ReLU $\sigma(z) = \max(0,z)$. Setelah $L$ lapis konvolusi-pooling, vektor fitur $\mathbf{f} \in \mathbb{R}^{d}$ dimasukkan ke *fully connected classifier*:

$$\hat{y} = \mathrm{softmax}\left(\mathbf{W}_o \mathbf{f} + \mathbf{b}_o\right)$$

dengan $\hat{y} \in [0,1]^{K}$ untuk $K$ kelas anomali (misal: *normal, crack, corrosion, overheating, leak*). Pearson (2024) memanfaatkan *transfer learning* dari backbone EfficientNet-B3 yang sudah pre-trained pada ImageNet, sehingga hanya *final classification head* yang di-fine-tune — menekan kebutuhan data berlabel industri hingga ~5.000 citra per kelas.

### 2.2 Fungsi Loss untuk Deteksi Anomali Imbalance

Karena anomali bersifat *rare event* (prevalensi < 5%), Pearson menggunakan *focal loss* sebagai modifikasi cross-entropy:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1-p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas benar, $\alpha_t \in [0,1]$ bobot kelas, dan $\gamma \geq 0$ *focusing parameter* yang menekan loss pada easy negatives. Untuk $\gamma = 2$ (kondisi default Pearson), kontribusi easy negative ditekan hingga 4× lebih rendah, sehingga gradient descent fokus pada sampel hard (anomali langka namun kritis).

### 2.3 Anomaly Score via Reconstruction

Untuk deteksi *unsupervised*, autoencoder menghasilkan reconstruction error sebagai anomaly score:

$$s(\mathbf{x}) = \|\mathbf{x} - \hat{\mathbf{x}}\|_2^2 = \sum_{i=1}^{H \cdot W \cdot C}(x_i - \hat{x}_i)^2$$

Threshold $\tau$ ditentukan dari distribusi training (normal) melalui aturan $3\sigma$:

$$\tau = \mu_{\text{normal}} + 3\sigma_{\text{normal}}$$

Sampel dengan $s(\mathbf{x}) > \tau$ diklasifikasikan anomali.

### 2.4 Integrasi dengan MPC Berbasis Physics-Informed Neural Networks

Patel, Bhartiya, dan Gudi (2024) merumuskan PINN sebagai approximator state dinamik $\dot{\mathbf{x}}(t) = f_{\theta}(\mathbf{x}(t), \mathbf{u}(t))$ dengan *physics residual*:

$$\mathcal{L}_{\text{phys}} = \frac{1}{N_r}\sum_{i=1}^{N_r}\left\| \frac{\partial \hat{\mathbf{x}}}{\partial t}\bigg|_{t_i} - f_{\text{governing}}(\hat{\mathbf{x}}(t_i), \mathbf{u}(t_i))\right\|_2^2$$

yang memastikan jaringan menghormati *governing equations* (misalnya persamaan panas 1D: $\rho c_p \partial T/\partial t = k \partial^2 T/\partial z^2$). Kerangka MPC dengan horizon prediksi $H_p$ meminimalkan:

$$J = \sum_{k=0}^{H_p-1}\left[\|\mathbf{x}(t_k) - \mathbf{x}^{ref}\|_Q^2 + \|\Delta \mathbf{u}(t_k)\|_R^2\right]$$

terikat pada dinamika PINN dan constraint operasi $\mathbf{x}_{min} \leq \mathbf{x} \leq \mathbf{x}_{max}$. Output anomaly score $s(\mathbf{x})$ dari CNN Pearson dapat dimasukkan sebagai *soft constraint penalty*:

$$J_{\text{aug}} = J + \lambda \cdot \mathbb{1}[s(\mathbf{x}) > \tau] \cdot \|\mathbf{x} - \mathbf{x}^{safe}\|^2$$

sehingga controller secara proaktif menyesuaikan operasi untuk memperpanjang *Remaining Useful Life* (RUL) ketika anomali terdeteksi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti SOP 5-fase berikut, yang konsisten dengan rekomendasi Pearson (2024) dan integrasi MPC-PINN Patel dkk. (2024):

**Fase 1 — Akuisisi Data dan Pre-processing.** Pasang imaging sensor (RGB, thermal IR, atau hyperspectral) pada posisi inspeksi tetap. Akuisisi citra berlabel dengan anotasi ahli domain. Augmentasi: rotation, flip, brightness jitter, MixUp. Resolusi standar: $1024 \times 1024$, batch size 32.

**Fase 2 — Training dan Validasi Model.** Fine-tune EfficientNet-B3 dengan focal loss ($\gamma=2$, $\alpha_t=0.25$). Optimizer Adam, learning rate $10^{-4}$ dengan cosine decay. Validasi 5-fold cross-validation. Metrik: precision, recall, F1-score, AUC-ROC. Threshold moving untuk memenuhi target recall $\geq 0.95$ (konservatif untuk keselamatan).

**Fase 3 — Deployment Edge/On-prem.** Model di-quantize (INT8) dan di-deploy ke edge GPU (NVIDIA Jetson) di plant. Inference latency target: < 100 ms per citra. Alert di-route ke SCADA/DCS.

**Fase 4 — Integrasi dengan MPC-PINN.** Hasil deteksi anomali dimasukkan ke *augmented state* controller sebagai variabel eksogen. PINN di-retrain mingguan dengan data operasi baru (online learning). Horizon prediksi MPC: $H_p = 24$ langkah (4 jam pada sampling 10 menit).

**Fase 5 — Monitoring dan Continuous Improvement.** Dashboard KPI: *Mean Time To Detection* (MTTD), false alarm rate, RUL distribution. Retraining triwulan dengan *concept drift detection* (ADWIN, Page-Hinkley).

```
[Sensor] → [Pre-process] → [CNN Inference] → [Anomaly Score s(x)]
                                              ↓
                          [MPC-PINN Controller] → [Adjusted Setpoint]
                                              ↓
                                       [Actuator/Valve]
```

Diagram alir logika keputusan: jika $s(\mathbf{x}) \leq \tau$, operasi nominal; jika $\tau < s(\mathbf{x}) \leq 2\tau$, alarm kuning — turunkan beban 10%; jika $s(\mathbf{x}) > 2\tau$, alarm merah — schedule maintenance dalam 72 jam.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pompa sentrifugal di plant petrokimia kapasitas 5.000 barrel/hari. Inspeksi thermal imaging pada housing bearing. Target: deteksi overheating anomali (kelas suhu > 85°C).

**Parameter industri:**
- Suhu operasi nominal: $T_{nom} = 65°\text{C}$, standar deviasi historis: $\sigma_T = 4°\text{C}$
- Thermal noise: $\pm 2°\text{C}$ (sensor FLIR A655sc)
- Citra termal input: $640 \times 480$ piksel, dynamic range 14-bit
- Prevalensi anomali historis: 3.2%
- Downtime cost: $C_{dt} = \text{USD }25{,}000$/jam; maintenance terjadwal: $C_{pm} = \text{USD }8{,}000$; emergency: $C_{em} = \text{USD }45{,}000$

**Langkah 1 — Hitung anomaly score threshold.**
$$\tau = \mu + 3\sigma = 65 + 3(4) = 77°\text{C}$$

Untuk operasi dua-arah (overheating dan undercooling), threshold dua sisi: $\tau_{low} = 53°\text{C}$, $\tau_{high} = 77°\text{C}$.

**Langkah 2 — Hitung confusion matrix ekspektansi pada test set (N=10.000).**

Asumsikan classifier CNN mencapai (berdasarkan benchmark Pearson pada kasus sejenis):
- True Positive Rate (Recall): $TPR = 0.96$
- False Positive Rate: $FPR = 0.04$
- Prevalensi anomali: $p = 0.032$, sehingga $n_{+} = 320$, $n_{-} = 9.680$

$$TP = TPR \cdot n_{+} = 0.96 \times 320 = 307$$
$$FN = n_{+} - TP = 13$$
$$FP = FPR \cdot