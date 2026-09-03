# 2403 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan aset pada sistem manufaktur dan proses. Pergeseran dari *corrective maintenance* (CM) dan *preventive maintenance* (PM) berbasis jadwal menuju *predictive maintenance* (PdM) berbasis kondisi (*condition-based maintenance*) menjadi imperatif strategis bagi perusahaan yang beroperasi dengan margin operasional tipis dan keandalan tinggi. Dalam konteks ini, kontribusi James Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyajikan kerangka kerja deteksi anomali visual menggunakan *Convolutional Neural Networks* (CNN) yang ditujukan khusus untuk mengidentifikasi degradasi dini pada peralatan industri melalui citra visual—mulai dari retakan pada permukaan bearing, korosi pada pipa, anomali termal pada panel listrik, hingga kontaminasi pada lini produksi semikonduktor.

Urgensi permasalahan ini dapat dikuantifikasi melalui data industri global. Menurut berbagai laporan industri yang dirujuk Pearson (2024), biaya downtime tak terjadwal pada manufaktur diskrit mencapai sekitar USD 50.000 per jam, sedangkan pada industri proses kontinyu seperti kilang minyak dan petrokimia, kerugian dapat melampaui USD 1 juta per insiden. Secara agregat, *unplanned downtime* menyumbang estimasi 5–20% dari total kapasitas produksi hilang di berbagai sektor. Sistem deteksi anomali berbasis CNN menawarkan janji pengurangan *Mean Time To Detection* (MTTD) hingga 60–80% dibanding inspeksi visual manual yang memiliki tingkat *false negative rate* antara 15–25% akibat kelelahan operator, subjektivitas, dan keterbatasan akurasi mata manusia.

Tantangan teknis yang diidentifikasi Pearson (2024) meliputi tiga dimensi: (1) **ketersediaan data berlabel** yang terbatas pada kondisi fault, karena mayoritas operasi berada dalam regime *normal*; (2) **variabilitas kondisi operasional** yang menghasilkan citra dengan intensitas pencahayaan, sudut pandang, dan tingkat keausan yang heterogen; serta (3) **kebutuhan interpretabilitas** model agar teknisi lapangan dapat memercayai keputusan otomatis (*human-in-the-loop*). Pendekatan yang diajukan memanfaatkan arsitektur CNN dengan *transfer learning* dari jaringan pra-latih seperti ResNet-50 atau EfficientNet, yang kemudian di-*fine-tune* menggunakan dataset citra kondisi abnormal yang disintesis melalui *generative adversarial networks* (GAN) dan augmentasi canggih.

Kontribusi teoretis dari Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menjadi pelengkap yang relevan karena menyediakan pendekatan *Physics-Informed Neural Networks* (PINNs) untuk *Model Predictive Control* (MPC). Sinergi keduanya adalah fondasi **predictive maintenance yang digerakkan oleh kontrol**: anomali visual yang dideteksi oleh CNN Pearson memicu perubahan parameter MPC, sementara PINNs Patel et al. memastikan bahwa model proses yang menjadi dasar keputusan pemeliharaan tetap akurat secara fisika meskipun beroperasi di luar regime desain. Integrasi ini merepresentasikan visi *cognitive manufacturing* di mana persepsi visual, pemodelan proses, dan kontrol optimal bekerja secara koheren.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) mengadopsi kerangka CNN dengan lapisan konvolusi yang mengekstraksi fitur hierarkis. Operasi konvolusi dua dimensi pada lapisan ke-$l$ didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} W_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $W_{m,n}^{(l)}$ adalah kernel konvolusi berukuran $k \times k$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $f(z) = \max(0, z)$). Untuk arsitektur modern dengan *residual connections* seperti ResNet-50 yang digunakan Pearson (2024), output blok residual diberikan oleh:

$$\mathbf{x}^{(l+1)} = \mathcal{F}(\mathbf{x}^{(l)}, \{W_i\}) + \mathbf{x}^{(l)}$$

di mana $\mathcal{F}(\mathbf{x}^{(l)}, \{W_i\})$ merepresentasikan transformasi non-linear yang dipelajari.

### 2.2 Formulasi *Anomaly Score*

Untuk mendeteksi anomali pada tingkat piksel dan citra, Pearson (2024) menggunakan pendekatan *feature embedding* melalui *pretrained network* $\phi(\cdot)$ dan *anomaly score* berbasis jarak Mahalanobis:

$$\mathcal{A}(\mathbf{x}) = \min_{c \in \mathcal{C}} \sqrt{(\phi(\mathbf{x}) - \mu_c)^\top \Sigma_c^{-1} (\phi(\mathbf{x}) - \mu_c)}$$

di mana $\mu_c$ dan $\Sigma_c$ adalah vektor rata-rata dan matriks kovarians dari fitur kelas normal $c \in \mathcal{C}$ pada *feature space* berdimensi $d$. Ambang batas keputusan $\tau$ ditetapkan sehingga keputusan anomali dinyatakan ketika $\mathcal{A}(\mathbf{x}) \geq \tau$.

### 2.3 *Loss Function* untuk Fine-Tuning dengan Kelas Tidak Seimbang

Karena data fault jauh lebih sedikit, Pearson (2024) menggunakan *focal loss* untuk mengatasi ketidakseimbangan kelas:

$$\mathcal{L}_{focal}(p_t) = -\alpha_t (1 - p_t)^\gamma \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas target, $\alpha_t$ adalah *weighting factor*, dan $\gamma$ adalah *focusing parameter* (umumnya $\gamma = 2$). Mekanisme ini secara efektif mengurangi kontribusi *easy negatives* (kelas normal yang diprediksi benar dengan confidence tinggi) dan memperkuat sinyal gradien dari *hard examples* (anomali langka).

### 2.4 Physics-Informed Neural Networks (PINNs) untuk Model Prediktif

Patel, Bhartiya, dan Gudi (2024) mengusulkan PINNs yang menggabungkan hukum fisika ke dalam fungsi loss jaringan saraf. Untuk sistem yang governed oleh persamaan diferensial parsial (PDE) $\mathcal{N}[\mathbf{u}](t, \mathbf{x}) = 0$, loss total PINNs diformulasikan sebagai:

$$\mathcal{L}_{PINN} = \lambda_d \mathcal{L}_{data} + \lambda_r \mathcal{L}_{residual} + \lambda_b \mathcal{L}_{boundary}$$

dengan masing-masing komponen:

$$\mathcal{L}_{data} = \frac{1}{N_d}\sum_{i=1}^{N_d} |\mathbf{u}_{\theta}(t_i, \mathbf{x}_i) - \mathbf{u}_i|^2$$

$$\mathcal{L}_{residual} = \frac{1}{N_r}\sum_{j=1}^{N_r} |\mathcal{N}[\mathbf{u}_{\theta}](t_j, \mathbf{x}_j)|^2$$

$$\mathcal{L}_{boundary} = \frac{1}{N_b}\sum_{k=1}^{N_b} |\mathbf{u}_{\theta}(t_k, \mathbf{x}_k) - \mathbf{u}_{k}^{bc}|^2$$

di mana $\mathbf{u}_{\theta}$ adalah solusi aproksimasi jaringan dengan parameter $\theta$, dan $\lambda_d, \lambda_r, \lambda_b$ adalah bobot regularisasi.

### 2.5 Formulasi *Model Predictive Control* (MPC) dengan Model PINN

Masalah MPC pada horizon prediksi $N_p$ diselesaikan sebagai:

$$\min_{\mathbf{U}_k} \sum_{i=0}^{N_p-1} \left[(\mathbf{y}_{k+i|k} - \mathbf{y}_{ref,k+i})^\top Q (\mathbf{y}_{k+i|k} - \mathbf{y}_{ref,k+i}) + \Delta \mathbf{u}_{k+i}^\top R \Delta \mathbf{u}_{k+i}\right]$$

$$\text{subject to: } \mathbf{x}_{k+1} = \mathbf{f}_{PINN}(\mathbf{x}_k, \mathbf{u}_k), \quad \mathbf{u}_{k} \in \mathcal{U}, \quad \mathbf{y}_k \in \mathcal{Y}$$

di mana $\mathbf{f}_{PINN}$ adalah model proses berbasis PINN dari Patel et al. (2024), $Q$ dan $R$ adalah matriks bobot pelacakan dan upaya kontrol.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem End-to-End

Sistem yang dirancang mengikuti arsitektur berlapis sesuai prosedur Pearson (2024) yang disesuaikan dengan praktik terbaik industri:

**Lapisan 1 — Akuisisi Data Visual**: Kamera industri (resolusi ≥ 2MP, *frame rate* 30 fps) dipasang pada posisi tetap dengan pencahayaan terkontrol (*illumination dome* atau *ring light*). Citra di-*stream* ke *edge gateway* (NVIDIA Jetson Orin atau setara) untuk inferensi lokal.

**Lapisan 2 — Pra-pemrosesan**: Normalisasi resolusi ke $224 \times 224$ piksel, konversi ruang warna RGB, normalisasi intensitas menggunakan statistik ImageNet $(\mu, \sigma)$, dan augmentasi *on-the-fly* berupa *random crop*, *horizontal flip*, *color jitter*, dan *mixup* dengan probabilitas $p=0.5$.

**Lapisan 3 — Inferensi CNN**: Model *fine-tuned* ResNet-50 dijalankan untuk menghasilkan *anomaly score* $\mathcal{A}(\mathbf{x})$ dan *localization map* melalui *Grad-CAM*.

**Lapisan 4 — Keputusan Pemeliharaan**: Logika *thresholding* dengan *hysteresis* (ambang atas $\tau_h = 0.85$ untuk trip, ambang bawah $\tau_l = 0.65$ untuk reset) untuk mencegah osilasi alarm.

**Lapisan 5 — Integrasi MPC**: Ketika anomali terkonfirmasi, *health indicator* $h \in [0,1]$ diturunkan dan dikirim ke sistem MPC berbasis PINN (Patel et al., 2024) untuk *re-routing* setpoint dan penjadwalan ulang produksi.

### 3.2 Diagram Alir SOP

```
[Citra Input] → [Pra-pemrosesan] → [Ekstraksi Fitur CNN]
                                          ↓
                          [Hitung Anomaly Score A(x)]
                                          ↓
                    ┌─────────────────────┴─────────────────────┐
                    ↓                                           ↓
            A(x) < τ_l                                   A(x) ≥ τ_h
        [Kondisi Normal]                          [Kondisi Anomali]
        Reset health h=1                          Update health h=h-Δ
                    ↓                                           ↓
            [Logging ke DB]                            [Trigger PINN-MPC]
                                                                ↓
                                                [Hitung U* optimal]
                                                                ↓
                                            [Dispatch ke Aktuator]
                                                                ↓
                                                  [Alert ke Operator]
```

### 3.3 Standar Industri yang Diacu

Prosedur mengikuti kerangka **ISO 13373-9:2017** untuk *condition monitoring and diagnostics of machines* berbasis pencitraan, **ISO/IEC 27001:2022** untuk keamanan data citra, dan praktik terbaik **API RP 581** untuk *risk-based inspection* pada industri proses. Dokumentasi mengikuti prinsip **ALCOA+** untuk integritas data.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Deteksi Anomali pada Conveyor Belt di Pabrik Semen

**Parameter Input** (dari dataset publik MVTec AD yang diadaptasi Pearson, 2024):
- Dimensi citra: $224 \times 224 \times 3$
- Kelas normal: permukaan belt homogen (10.000 citra)
- Kelas abnormal: retakan, lubang, kontaminasi (500 citra)
- Arsitektur: ResNet-50 (25.6M parameter)
- *Batch size*: 32, *learning rate*: $\eta = 10^{-4}$ dengan *cosine annealing*
- Epoch: 50, *hardware*: NVIDIA A100 80GB

**Perhitungan Forward Pass Layer Konvolusi** (Lapisan Konvolusi ke-3, $k=3$, *stride*=1, *padding*=1):

$$H_{out} = \left\lfloor \frac{H_{in} + 2p - k}{s} \right\rfloor + 1 = \left\lfloor \frac{224 + 2(1) - 3}{1} \right\rfloor + 1 = 224$$

Jumlah parameter lapisan konvolusi dengan 64 *input channels* dan 64 *output channels*:

$$P_{conv} = (k \cdot k \cdot C_{in} + 1) \cdot C_{out} = (9 \cdot 64 + 1) \cdot 64 = 36.928 \text{ parameter}$$

**Perhitungan Anomaly Score** untuk satu citra uji dengan fitur embedding $\phi(\mathbf{x}) \in