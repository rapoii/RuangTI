# 2595 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital sektor manufaktur global yang dipicu oleh inisiatif *Industry 4.0* telah menempatkan pemeliharaan peralatan sebagai salah satu pilar strategis untuk mempertahankan keunggulan kompetitif. Pearson (2024) dalam studinya yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti bahwa downtime tak terencana pada peralatan kritis di lini produksi manufaktur menimbulkan biaya operasional yang signifikan, dengan estimasi kerugian mencapai 50 miliar dolar AS per tahun pada industri proses kontinyu di negara-negara OECD. Studi tersebut mengusulkan pendekatan deteksi anomali berbasis citra menggunakan *Convolutional Neural Networks* (CNN) sebagai tulang punggung strategi *Predictive Maintenance* (PdM) yang menggantikan paradigma *preventive* dan *reactive maintenance* konvensional.

Urgensi metodologis Pearson (2024) berangkat dari kenyataan bahwa inspeksi visual manual—meskipun merupakan metode paling umum di pabrik—memiliki keterbatasan inheren: subjektivitas operator, kelelahan kognitif, variabilitas pengalaman, serta ketidakmampuan memantau peralatan secara 24/7. Pearson mendemonstrasikan bahwa arsitektur CNN seperti ResNet-50, EfficientNet-B3, dan Vision Transformer (ViT) yang di-*fine-tune* pada dataset citra kerusakan industri (MVTec AD, NEU-DET, atau DAGM) mampu menghasilkan akurasi klasifikasi defect di atas 96% dengan F1-score rata-rata 0,94. Pendekatan ini secara langsung menurunkan *Mean Time To Repair* (MTTR) hingga 35% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 8–12% pada studi kasus industri baja dan semikonduktor.

Pelengkap yang sangat relevan adalah karya Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) yang membahas *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINNs). Keduanya membentuk ekosistem AI industri yang kohesif: CNN-Pearson untuk persepsi visual anomali, sementara PINN-Patel untuk kendali proses optimal yang memanfaatkan persamaan diferensial fisika sebagai *regularizer* dalam fungsi loss. Integrasi keduanya mewujudkan kerangka *Closed-Loop Intelligent Manufacturing* di mana deteksi anomali visual memicu *re-planning* trayektori kendali MPC secara real-time.

Konteks ekonomi industri Indonesia turut relevan: berdasarkan data Kemenperin (2023), downtime rata-rata pabrik manufaktur nasional mencapai 12–18% dari total jam produksi, sehingga adopsi pendekatan Pearson-Patel berpotensi meningkatkan produktivitas nasional hingga 5–7% dengan payback period investasi AI sekitar 18–24 bulan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Operasi konvolusi diskrit dua-dimensi yang menjadi fondasi CNN Pearson (2024) didefinisikan sebagai:

$$(f * g)[i,j] = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} f[m,n] \cdot g[i-m, j-n]$$

di mana $f$ adalah kernel konvolusi berukuran $M \times N$, dan $g$ adalah peta fitur (*feature map*) input. Aktivasi non-linear menggunakan ReLU:

$$h_{i,j}^{(l)} = \max\left(0, \sum_{(p,q) \in \mathcal{K}} W_{p,q}^{(l)} \cdot x_{i+p, j+q}^{(l-1)} + b^{(l)}\right)$$

dengan $\mathcal{K}$ adalah receptive field lokal, $W^{(l)}$ matriks bobot pada layer $l$, dan $b^{(l)}$ bias.

### 2.2 Skor Anomali dan Fungsi Loss

Untuk deteksi anomali tanpa监督 (unsupervised), Pearson (2024) mengadopsi pendekatan *reconstruction-based* dengan autoencoder atau *student-teacher network*:

$$A(x) = \frac{1}{HW} \sum_{i=1}^{H} \sum_{j=1}^{W} \left\| x_{i,j} - \hat{x}_{i,j} \right\|_2^2$$

di mana $\hat{x}$ adalah rekonstruksi citra. Anomali diklasifikasikan ketika $A(x) > \tau$ dengan threshold $\tau$ ditentukan dari distribusi normal *validation set* pada tingkat *false positive rate* (FPR) yang dapat diterima.

Fungsi loss total menggabungkan *reconstruction loss* dan regularisasi spasial:

$$\mathcal{L}_{total} = \alpha \mathcal{L}_{rec} + \beta \mathcal{L}_{struct} + \gamma \mathcal{L}_{latent}$$

dengan $\alpha, \beta, \gamma$ adalah hyperparameter pembobot.

### 2.3 Physics-Informed Neural Networks untuk MPC (Patel et al., 2024)

Patel, Bhartiya, dan Gudi (2024) menyusun PINN dengan fungsi loss yang menggabungkan data eksperimen dan residual persamaan diferensial:

$$\mathcal{L}_{PINN} = \lambda_{data} \underbrace{\frac{1}{N_d} \sum_{i=1}^{N_d} \left| \hat{y}(x_i) - y_i \right|^2}_{\mathcal{L}_{data}} + \lambda_{phys} \underbrace{\frac{1}{N_f} \sum_{j=1}^{N_f} \left| \mathcal{N}[\hat{y}](x_j) \right|^2}_{\mathcal{L}_{physics}}$$

di mana $\mathcal{N}[\hat{y}]$ adalah operator diferensial yang merepresentasikan dinamika proses (misalnya CSTR: $\frac{dC_A}{dt} = \frac{F}{V}(C_{A,in} - C_A) - k_0 e^{-E/RT}C_A$).

### 2.4 Formulasi Model Predictive Control

Kendali prediktif yang memanfaatkan model hasil identifikasi PINN diformulasikan sebagai:

$$\min_{u_0, \ldots, u_{N-1}} J = \sum_{k=0}^{N-1} \left[ (x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k \right] + (x_N - x_{ref})^T P (x_N - x_{ref})$$

$$\text{subject to: } x_{k+1} = f_{PINN}(x_k, u_k), \quad u_{min} \leq u_k \leq u_{max}, \quad y_{min} \leq y_k \leq y_{max}$$

dengan horizon prediksi $N$ dan matriks bobot $Q, R, P$ definit positif.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Pearson (2024) menyusun protokol *Standard Operating Procedure* (SOP) lima tahap untuk implementasi sistem deteksi anomali berbasis CNN:

**Tahap 1 — Akuisisi & Anotasi Data Citra:**
Akuisisi menggunakan kamera industri resolusi minimum 1920×1080 pixel dengan *frame rate* 30 fps, iluminasi terkontrol (≥500 lux), dan akuisisi multi-angle. Anotasi mengikuti standar PASCAL VOC dengan bounding box dan *polygon segmentation* untuk setiap jenis defect (retak, korosi, keausan, kontaminasi, deformasi). Standar yang digunakan adalah ISO 2859-1 untuk *sampling* dan ISO/IEC 23053 untuk kerangka AI.

**Tahap 2 — Pra-pemrosesan & Augmentasi:**
Normalisasi pixel ke [0,1], resize ke 224×224, augmentasi geometris (rotasi ±15°, translasi, flip horizontal), dan augmentasi fotometris (penyesuaian brightness ±20%, kontras, Gaussian noise $\sigma=0.02$). Teknik *CutMix* dan *MixUp* digunakan untuk meningkatkan generalisasi.

**Tahap 3 — Pelatihan & Validasi Model:**
Arsitektur *backbone* yang direkomendasikan Pearson: EfficientNet-B4 dengan *pre-trained weights* ImageNet, *transfer learning* dua tahap (freeze backbone → fine-tune seluruh layer dengan *learning rate* $10^{-4}$ dan Adam optimizer). Validasi 5-fold *cross-validation* dengan *stratified sampling*. *Early stopping* berdasarkan *validation loss* dengan *patience* 15 epoch.

**Tahap 4 — Deployment Edge/Cloud:**
Model dikonversi ke ONNX atau TensorRT untuk inferensi di edge device (NVIDIA Jetson AGX Orin, latency target < 50 ms per citra). SOP integrasi mengikuti OPC UA (IEC 62541) untuk komunikasi dengan SCADA/MES.

**Tahap 5 — Monitoring & Re-training:**
Pipeline MLOps dengan *drift detection* pada distribusi fitur menggunakan Population Stability Index (PSI > 0,2 memicu re-training). Interval re-training: 90 hari atau setelah 10.000 citra baru terakuisisi.

**Diagram alir integrasi Pearson-Patel:**

```
[Citra Peralatan] → [Pra-pemrosesan] → [CNN Inference] → [Skor Anomali A(x)]
                                                              ↓ (jika A(x)>τ)
                                              [Trigger MPC Re-optimization]
                                                              ↓
                                     [PINN-MPC Solve: u* = argmin J(u)]
                                                              ↓
                                                    [Actuator Command]
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Studi Kasus: Inspeksi Visual Bantalan Rol pada Conveyor Tambang Batubara**

**Input Parameter:**
- Jumlah citra uji: $N_{test} = 1.000$ citra
- Distribusi ground truth: 700 normal, 200 retak, 70 korosi, 30 keausan berat
- Threshold anomali: $\tau = 0{,}045$ (ditentukan dari kuantil ke-95 distribusi A(x) pada validation set normal)
- Matriks konfusi hasil inferensi CNN Pearson (2024):

| Prediksi → / Ground Truth ↓ | Normal | Retak | Korosi | Keausan |
|---|---|---|---|---|
| **Normal** | 680 | 8 | 5 | 2 |
| **Retak** | 12 | 180 | 4 | 1 |
| **Korosi** | 5 | 6 | 58 | 1 |
| **Keausan** | 3 | 6 | 3 | 26 |

**Perhitungan Metrik Kinerja:**

*Akurasi keseluruhan:*
$$\text{Accuracy} = \frac{TP+TN}{N_{total}} = \frac{680+180+58+26}{1000} = 0{,}944 = 94{,}4\%$$

*Precision kelas Retak (kritis untuk safety):*
$$P_{retak} = \frac{TP_{retak}}{TP_{retak} + FP_{retak}} = \frac{180}{180 + 17} = 0{,}914$$

*Recall kelas Retak:*
$$R_{retak} = \frac{TP_{retak}}{TP_{retak} + FN_{retak}} = \frac{180}{180 + 20} = 0{,}