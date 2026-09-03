# 1539 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di sektor manufaktur global telah mengubah secara fundamental paradigma pemeliharaan aset industri, dari pendekatan reaktif-korektif menuju pemeliharaan prediktif berbasis data (*data-driven predictive maintenance*). Pearson (2024) dalam tulisannya yang dipublikasikan melalui *Social Science Research Network* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti bahwa kerusakan tak terduga (*unscheduled downtime*) pada peralatan kritis di industri proses, manufaktur diskrit, serta fasilitas energi dapat menimbulkan kerugian ekonomi antara 10.000 hingga 250.000 USD per jam, tergantung pada skala operasi dan kompleksitas lini produksi. Studi ini mengusulkan arsitektur Convolutional Neural Network (CNN) berbasis citra visual—meliputi citra termal, citra RGB resolusi tinggi, dan citra getaran yang dikonversi menjadi spectrogram—sebagai mekanisme deteksi anomali yang mampu memprediksi degradasi komponen secara lebih dini dibanding sensor konvensional seperti vibration analyzer atau oil debris monitor.

Urgensi metodologis dari penelitian Pearson (2024) muncul akibat keterbatasan pendekatan threshold-based monitoring yang masih dominan di lantai pabrik. Sistem konvensional biasanya mengandalkan satu atau dua parameter skalar (misalnya suhu bantalan atau tingkat getaran RMS) dengan ambang batas tetap (*static threshold*). Statistik industri menunjukkan bahwa lebih dari 65% kegagalan katastrofik pada motor listrik dan pompa sentrifugal tidak terdeteksi oleh sistem threshold ini karena degradasi bersifat multi-modal dan non-linear. Pearson (2024) berargumen bahwa citra dua dimensi yang ditangkap oleh kamera industri, drone inspeksi, atau *thermal imager* mengandung informasi spasial-temporal yang jauh lebih kaya, dan CNN mampu mengekstraksi fitur hierarkis dari representasi tersebut secara otomatis.

Dari sisi integrasi sistem kontrol, pendekatan ini memiliki kompatibilitas tinggi dengan kerangka Model Predictive Control (MPC) berbasis Physics-Informed Neural Networks (PINNs) yang dikemukakan oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431). Kedua kerangka ini saling melengkapi: CNN menyediakan umpan balik diagnostik berbasis visual, sementara PINN-MPC menerjemahkan prediksi degradasi menjadi kebijakan kontrol optimal yang memperpanjang umur pakai aset (*remaining useful life extension*). Konteks industri penerapan mencakup sektor minyak & gas, petrokimia, pulp & paper, semen, baja, serta manufaktur semikonduktor—di mana biaya kegagalan aset (*asset failure cost*) sangat tinggi dan siklus kalibrasi ulang sistem monitoring menjadi bottleneck operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Arsitektur CNN yang diusulkan Pearson (2024) mengadopsi kerakter *convolutional autoencoder* yang dilatih hanya pada citra kondisi normal. Model ini mempelajari fungsi rekonstruksi $f_\theta: \mathcal{X} \rightarrow \mathcal{X}$ dengan parameter $\theta$ yang diminimalkan melalui rekonstruksi error:

$$\mathcal{L}_{\text{rec}}(\theta) = \frac{1}{N}\sum_{i=1}^{N} \| x_i - f_\theta(x_i) \|_2^2$$

di mana $x_i \in \mathbb{R}^{H \times W \times C}$ adalah citra input dengan tinggi $H$, lebar $W$, dan $C$ kanal warna. Anomali terdeteksi ketika *reconstruction error* melebihi ambang batas statistik $\tau$ yang ditentukan dari distribusi training:

$$\text{Anomali}(x) = \begin{cases} 1, & \text{jika } \| x - f_\theta(x) \|_2^2 > \tau \\ 0, & \text{lainnya} \end{cases}$$

### 2.2 Formulasi Forward Pass Konvolusi

Operasi konvolusi pada lapisan ke-$l$ didefinisikan sebagai:

$$h_i^{l+1} = \sigma\left( \sum_{j \in \mathcal{M}_i} h_j^l \cdot k_{ij}^l + b_i^l \right)$$

di mana $h_i^l$ adalah fitur map pada posisi $i$, $\mathcal{M}_i$ adalah receptive field, $k_{ij}^l$ adalah kernel konvolusi, $b_i^l$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(z) = \max(0, z)$).

### 2.3 Residual Anomaly Scoring

Untuk meningkatkan robustness terhadap noise lingkungan (debu, pencahayaan, oklusi sebagian), Pearson (2024) memperkenalkan *multi-scale anomaly score*:

$$S(x) = \alpha \cdot \mathcal{L}_{\text{rec}}(x) + \beta \cdot D_{\text{KL}}\left(p(z|x) \, \| \, p_{\text{normal}}(z)\right)$$

di mana $\alpha + \beta = 1$ adalah bobot kombinasi, $D_{\text{KL}}$ adalah divergensi Kullback-Leibler antara distribusi laten citra input dan distribusi laten data normal. Komponen ini memungkinkan deteksi anomali yang tidak hanya bergantung pada error rekonstruksi piksel, tetapi juga pada penyimpangan distribusi fitur latent space.

### 2.4 Integrasi dengan PINN-MPC (Patel et al., 2024)

Patel, Bhartiya, dan Gudi (2024) memformulasikan MPC sebagai optimisasi constraint dengan prediktor berbasis PINN:

$$\min_{u_{0:H_p-1}} J = \sum_{k=0}^{H_p-1} \left[ (x_k - x_{\text{ref}})^\top Q (x_k - x_{\text{ref}}) + u_k^\top R u_k \right]$$

$$\text{subject to: } x_{k+1} = \mathcal{N}_\phi(x_k, u_k, t_k)$$

di mana $\mathcal{N}_\phi$ adalah neural network dengan parameter $\phi$ yang memodelkan dinamika proses dan diberi *physics loss* tambahan $\mathcal{L}_{\text{phys}}$ untuk memastikan kepatuhan terhadap hukum kekekalan massa, energi, dan momentum:

$$\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{data}} + \lambda_{\text{phys}} \cdot \mathcal{L}_{\text{phys}}$$

Kondisi kesehatan aset yang dilaporkan CNN (misalnya *health index* $h_t \in [0, 1]$) dimasukkan ke dalam state $x_k$ sebagai koordinat tambahan, sehingga pengontrol MPC dapat menyesuaikan *setpoint* dan *control effort* secara adaptif seiring degradasi aset.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi End-to-End

Implementasi sistematika dari sistem deteksi anomali berbasis CNN mengikuti SOP berikut:

```
[Langkah 1] Akuisisi Citra
   ├─ Kamera RGB resolusi ≥ 1920×1080
   ├─ Kamera Termal (FLIR/Teledyne) sensitivitas ≤ 50 mK
   └─ Akuisisi periodik: 1–30 fps sesuai criticality

[Langkah 2] Pre-processing
   ├─ Resize ke 224×224 (standar ImageNet)
   ├─ Normalisasi: $x_{\text{norm}} = (x - \mu)/\sigma$
   ├─ Augmentasi: rotasi, flip, brightness jitter
   └─ Filtering noise: Gaussian kernel $\sigma_f = 1.2$

[Langkah 3] Feature Extraction (CNN Backbone)
   ├─ Backbone: ResNet-50 pretrained (ImageNet)
   ├─ Transfer learning dengan fine-tuning 20 epoch
   └─ Output: feature map 7×7×2048

[Langkah 4] Anomaly Detection
   ├─ Hitung $S(x)$ pada validation set
   ├─ Kalibrasi threshold $\tau$ di percentile 99
   └─ Flag anomali → trigger alarm tier 1/2/3

[Langkah 5] Integrasi PINN-MPC
   ├─ Update health index $h_t$ ke digital twin
   ├─ Recompute optimal control trajectory
   └─ Log ke historian (PI Tag historian)

[Langkah 6] Tindakan Pemeliharaan
   ├─ Tier 1: inspeksi visual (0–24 jam)
   ├─ Tier 2: predictive replacement (1–7 hari)
   └─ Tier 3: immediate shutdown (real-time)
```

### 3.2 SOP Penentuan Threshold Anomali

Penentuan $\tau$ mengikuti prosedur statistik Pearson (2024):

1. Jalankan model pada validation set berisi $N_{\text{val}} = 1000$ citra normal.
2. Hitung distribusi empiris $F_S(s)$ dari skor anomali $S(x)$.
3. Tentukan $\tau = F_S^{-1}(1 - p_{\text{FPR}})$ dengan *false positive rate* $p_{\text{FPR}} \leq 0.01$ (akurasi minimal 99%).

### 3.3 Standar Industri yang Dipatuhi

- **ISO 13373-1**: Condition monitoring untuk mesin berputar.
- **ISO 55000**: Manajemen aset fisik.
- **API 670**: Machinery protection systems.
- **IEC 62443**: Keamanan siber untuk sistem industri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Monitoring Bantalan Gelinding pada Motor Induksi 75 kW

**Parameter Input:**
- Kecepatan operasi: $n = 1470$ rpm → frekuensi fundamental $f_r = 24.5$ Hz
- Diameter pitch bearing: $D = 62$ mm
- Jumlah elemen rolling: $Z = 9$ balls
- Diameter bola: $d = 12$ mm
- Sudut kontak: $\phi = 15°$
- Frekuensi sampling citra termal: 5 Hz

**Langkah 1: Perhitungan Frekuensi Karakteristik Bearing**

Frekuensi *Ball Pass Frequency Outer* (BPFO) dihitung sebagai:

$$\text{BPFO} = \frac{Z \cdot n}{120} \cdot \left(1 - \frac{d}{D} \cos\phi \right) \cdot 2$$

Substitusi numerik:

$$\text{BPFO} = \frac{9 \times 1470}{120} \cdot \left(1 - \frac{12}{62} \cos 15° \right) \cdot 2$$

$$= 110.25 \cdot \left(1 - 0.1872 \right) \cdot 2 = 110.25 \times 0.8128 \times 2 = 179.2 \text{ Hz}$$

**Langkah 2: Estimasi Deteksi Dini CNN**

Misalkan CNN mendeteksi anomali dengan tingkat keyakinan 0.87 pada $t = T_{\text{detect}}$. Kecepatan degradasi diasumsikan mengikuti hukum Paris-Erdogan:

$$\frac{da}{dN} = C (\Delta K)^m$$

di mana $a$ adalah panjang retak, $\Delta K$ adalah rentang *stress intensity factor*, $C = 1.5 \times 10^{-11}$, dan $m = 3.0$ (tipikal baja bearing AISI 52100).

Jika panjang retak kritis $a_c = 2.5$ mm dan retak terdeteksi pada $a_0 = 0.8$ mm, maka jumlah siklus menuju kegagalan diestimasi:

$$N_f = \int_{a_0}^{a_c} \frac{da}{C (\Delta K)^m} \approx 4.6 \times 10^6 \text{ siklus}$$

Pada kecepatan operasi dengan *shaft rotation frequency* 24.5 Hz, waktu menuju kegagalan prediktif:

$$T_{\text{RUL}} = \frac{N_f}{f_r \times 3600 \times 24} = \frac{4.6 \times 10^6}{24.5 \times 86400} \approx 2.17 \text{ hari}$$

**Langkah 3: Optimasi Trajektori Kontrol PINN-MPC**

Patel et al. (2024) menunjukkan bahwa dengan integrasi *health-aware MPC*, biaya operasional dapat diminimalkan. Misalkan *health index* $h_t$ menurun secara eksponensial: $h_t = h_0 \cdot e^{-\lambda t}$, dengan $\lambda = 0.02$ hari$^{-1}$.

Biaya total pemeliharaan dihitung sebagai:

$$C_{\text{total}} = C_{\text{preventive}} \cdot P_{\text{PM}} + C_{\text{corrective}} \cdot P_{\text{CM}}$$

di mana:
- $C_{\text{preventive}} = 5{,}000$ USD (downtime terencana)
- $C_{\text{corrective}} = 85{,}000$ USD (downtime tak terencana)
- $P_{\text{PM}} = 0.95$ (akurasi deteksi dini CNN)
- $P_{\text{CM}} = 0.05$ (probabilitas missed detection)

$$C_{\text{total}} = 5{,}000 \times 0.95 + 85{,}000 \times 0.05 = 4{,}750 + 4{,}250 = 9{,}000 \text{ USD}$$

**Langkah 4: Return on Investment (ROI)**

Tanpa sistem CNN, biaya yang diharapkan (*expected cost*) dari pendekatan reaktif adalah:

$$C_{\text{reaktif}} = 0.