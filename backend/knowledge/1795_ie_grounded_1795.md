# 1795 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah memaksa perusahaan manufaktur global untuk mengadopsi paradigma *predictive maintenance* (PdM) yang mengandalkan analisis data real-time guna memprediksi kegagalan peralatan sebelum terjadi. James Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyoroti bahwa pendekatan konvensional berbasis getaran, akustik, atau termografi memiliki keterbatasan inheren ketika anomali muncul sebagai cacat visual permukaan — seperti retakan mikro pada bilah turbin, korosi pitting pada heat exchanger, misalignment pada komponen presisi, atau kontaminasi pada lini produksi makanan dan farmasi. Pearson (2024) menegaskan bahwa deteksi anomali berbasis citra (image-based anomaly detection) menggunakan *Convolutional Neural Networks* (CNN) memberikan kemampuan ekstraksi fitur hierarkis yang tidak dapat dicapai oleh sensor threshold-based tradisional.

Urgensi ekonomis dari topik ini bersifat strategis. Berdasarkan studi Pearson (2024), downtime tak terencana pada industri proses bernilai rata-rata $50.000–$250.000 per jam pada fasilitas petrokimia skala besar, sementara biaya pemeliharaan preventif berbasis jadwal mencapai 20–30% dari total biaya operasional pabrik. Pearson (2024) mendemonstrasikan bahwa sistem Computer Vision berbasis CNN mampu mengurangi *false positive rate* hingga 40% dibanding inspeksi visual manual, dengan throughput inspeksi 30–50 kali lebih cepat. Pendekatan ini menjadi tulang punggung *smart manufacturing* yang didukung oleh visi mesin (machine vision) terintegrasi dengan Industrial Internet of Things (IIoT).

Dalam konteks yang saling melengkapi, Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menekankan bahwa integrasi antara data-driven learning (CNN) dan *physics-informed* models (PINN) dalam kerangka *Model Predictive Control* (MPC) menjadi semakin vital untuk sistem proses. Sinergi antara deteksi anomali visual dan kontrol prediktif memungkinkan respons operasional yang adaptif ketika anomali terdeteksi — misalnya, penurunan set-point atau aktivasi protokol isolasi otomatis. Kedua literatur ini membentuk landasan holistik untuk rekayasa sistem industri modern yang menggabungkan persepsi visual, inferensi fisik, dan kontrol optimal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

Pearson (2024) menjelaskan bahwa CNN merupakan arsitektur *deep learning* yang terdiri atas lapisan konvolusi, aktivasi non-linear, dan pooling untuk ekstraksi fitur spasial. Operasi konvolusi dua dimensi didefinisikan sebagai:

$$Y_{i,j,k} = f\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} X_{i+m, j+n} \cdot W_{m,n,k} + b_k\right)$$

di mana $X \in \mathbb{R}^{H \times W \times C}$ adalah tensor input (citra), $W_{m,n,k}$ adalah kernel konvolusi ke-$k$ dengan ukuran $M \times N$, $b_k$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi ReLU: $f(z) = \max(0, z)$. Fitur output $Y_{i,j,k}$ merepresentasikan aktivasi detektor fitur di lokasi $(i,j)$ untuk filter ke-$k$.

### 2.2 Backpropagation dan Optimasi Parameter

Pembelajaran jaringan dilakukan melalui minimisasi *cross-entropy loss function*:

$$\mathcal{L}_{CE} = -\frac{1}{N}\sum_{i=1}^{N}\sum_{c=1}^{C} y_{i,c} \cdot \log\left(\hat{y}_{i,c}\right)$$

di mana $y_{i,c}$ adalah label ground truth one-hot encoded, $\hat{y}_{i,c}$ adalah probabilitas prediksi softmax $\hat{y}_{i,c} = \frac{e^{z_c}}{\sum_{j} e^{z_j}}$, $N$ adalah jumlah sampel, dan $C$ adalah jumlah kelas (normal/anomali). Pearson (2024) menggunakan Adam optimizer dengan learning rate adaptif:

$$\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

dengan $\hat{m}_t$ dan $\hat{v}_t$ adalah estimasi momen pertama dan kedua yang dikoreksi bias.

### 2.3 Anomaly Score untuk Deteksi Out-of-Distribution

Untuk mendeteksi anomali tanpa label eksplisit, Pearson (2024) menggunakan pendekatan *reconstruction-based* dengan autoencoder:

$$\mathcal{A}(x) = \|x - \hat{x}\|_2^2 = \left\|x - g_\phi(f_\psi(x))\right\|_2^2$$

di mana $f_\psi$ adalah encoder dan $g_\phi$ adalah decoder. Ambang batas (threshold) $\tau$ ditentukan berdasarkan distribusi skor pada data normal: $x$ diklasifikasikan anomali jika $\mathcal{A}(x) > \tau$.

### 2.4 Physics-Informed Neural Network (PINN) untuk MPC

Patel, Bhartiya, dan Gudi (2024) memperkenalkan PINN yang menggabungkan hukum fisika ke dalam fungsi loss:

$$\mathcal{L}_{PINN} = \lambda_1 \mathcal{L}_{data} + \lambda_2 \mathcal{L}_{physics}$$

di mana $\mathcal{L}_{physics}$ merupakan residual dari persamaan diferensial parsial yang mengatur dinamika sistem:

$$\mathcal{L}_{physics} = \frac{1}{N_r}\sum_{i=1}^{N_r}\left\| \mathcal{N}[u_\theta(t_i, x_i)] - f(t_i, x_i) \right\|^2$$

dengan $\mathcal{N}[\cdot]$ adalah operator diferensial non-linear. Untuk kontrol prediktif, hukum kontrol optimal diperoleh melalui minimisasi cost function horizon $H_p$:

$$J = \sum_{k=0}^{H_p-1}\left[(y_{k} - r_{k})^T Q (y_{k} - r_{k}) + u_k^T R u_k\right] + (y_{H_p} - r_{H_p})^T P (y_{H_p} - r_{H_p})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Implementasi

Berdasarkan Pearson (2024), prosedur operasional standar untuk implementasi sistem deteksi anomali berbasis CNN dalam industri mengikuti alur berikut:

1. **Akuisisi Data Citra** — Pemasangan kamera industri resolusi tinggi (minimal 1920×1080 piksel) di titik inspeksi kritis dengan pencahayaan terkontrol (LED diffused 5000K, iluminansi ≥ 1000 lux) sesuai standar ISO 8995 dan机器视觉 (machine vision) industrial guidelines.
2. **Pra-pemrosesan Citra** — Normalisasi piksel ke rentang $[0,1]$, resizing ke dimensi input model (misal 224×224), augmentasi data melalui rotasi, flipping, dan brightness adjustment untuk meningkatkan generalisasi.
3. **Pelatihan Model CNN** — Menggunakan arsitektur *transfer learning* (ResNet-50 atau EfficientNet-B3) dengan *fine-tuning* lapisan akhir pada dataset cacat spesifik industri. Pearson (2024) merekomendasikan minimal 1000 sampel per kelas dengan rasio data latih:validasi:uji = 70:15:15.
4. **Validasi dan Kalibrasi** — Evaluasi menggunakan metrik akurasi, presisi, *recall*, dan *F1-score*; penentuan threshold optimal melalui kurva ROC (*Receiver Operating Characteristic*).
5. **Deployment Edge/Cloud** — Inferensi pada edge device (NVIDIA Jetson) dengan latensi < 100 ms, atau pada cloud server dengan API RESTful.
6. **Integrasi dengan Sistem Pemeliharaan** — Output deteksi anomali memicu *work order* otomatis di CMMS (Computerized Maintenance Management System) dan notifikasi real-time ke teknisi.

### 3.2 Diagram Alir Logika Keputusan

```
[Citra Input] → [Pra-pemrosesan] → [CNN Inference] 
       ↓                                     ↓
[Anomali Score] → [Threshold Check] → [Kelas: Normal/Anomali]
                                                ↓
                                  [Anomali?] → [Trigger Work Order + Alert]
                                                ↓
                                  [Normal?] → [Log ke Database + Continue]
```

### 3.3 Integrasi dengan MPC Berbasis PINN

Patel et al. (2024) mengusulkan integrasi dua lapisan: ketika CNN mendeteksi anomali visual (misal: kebocoran pada pipa), sinyal umpan balik diteruskan ke PINN-MPC yang menghitung ulang *set-point* optimal dan trajectory kontrol untuk mengisolasi area terdampak sambil mempertahankan yield produksi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Deteksi Cacat pada Lini Pengelasan Robotik

**Parameter Input:**
- Dimensi citra: 224 × 224 × 3 piksel
- Dataset: 5.000 citra las (4.000 normal, 1.000 anomali: porositas, undercut, lack of fusion)
- Arsitektur: ResNet-50 pre-trained, fine-tuned 10 lapisan akhir
- Epoch pelatihan: 50, batch size: 32, learning rate awal: 1×10⁻⁴

**Langkah Perhitungan:**

**Langkah 1: Komputasi Forward Pass**
Untuk citra input $X$ dengan dimensi output feature map pertama (kernel 7×7, stride 2, 64 filter):
$$H_{out} = \left\lfloor \frac{H_{in} + 2p - k}{s} \right\rfloor + 1 = \left\lfloor \frac{224 + 2(3) - 7}{2} \right\rfloor + 1 = 112$$

Jadi feature map pertama memiliki ukuran 112×112×64, dengan total parameter lapisan konvolusi pertama:
$$P_1 = (7 \times 7 \times 3) \times 64 + 64 = 9.472 \text{ parameter}$$

**Langkah 2: Total Parameter ResNet-50**
ResNet-50 memiliki 50 lapisan konvolusi + 1 lapisan fully connected. Total parameter:
$$P_{total} \approx 25.6 \times 10^6 \text{ parameter}$$

**Langkah 3: Perhitungan Loss**
Misalkan untuk satu batch, prediksi softmax menghasilkan:
$$\hat{y} = [0.85, 0.10, 0.03, 0.02] \text{ untuk kelas [normal, porositas, undercut, lack of fusion]}$$

Label ground truth: $y = [1, 0, 0, 0]$ (kelas normal). Cross-entropy loss:
$$\mathcal{L}_{CE} = -[1 \cdot \log(0.85) + 0 + 0 + 0] = 0.1625$$

**Langkah 4: Evaluasi Metrik Kinerja**
Misalkan hasil confusion matrix pada data uji (500 sampel):

|  | Prediksi Normal | Prediksi Anomali |
|---|---|---|
| **Aktual Normal** | TP = 380 | FN = 20 |
| **Aktual Anomali** | FP = 10 | TN = 90 |

Akurasi: 
$$Accuracy = \frac{TP + TN}{Total} = \frac{380 + 90}{500} = 0.94 = 94\%$$

Presisi: 
$$Precision = \frac{TP}{TP + FP} = \frac{380}{380 + 10} = 0.9744$$

Recall: 
$$Recall = \frac{TP}{TP + FN} = \frac{380}{380 + 20} = 0.95$$

F1-Score:
$$F_1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall} = 2 \cdot \frac{0.9744 \times 0.95}{0.9744 + 0.95} = 0.9620$$

**Langkah 5: Analisis Dampak Ekonomi**
Dengan waktu inspeksi manual 60 detik/cacat vs 0.5 detik/cacat otomatis:
$$Throughput_{improvement} = \frac{60}{0.5} = 120\times$$

Pengurangan biaya inspeksi (asumsi $50/jam teknisi):
$$Savings = 5000 \text{ cacat/hari} \times \frac{59.5 \text{ detik}}{3600} \times \$50/\text{jam} = \$4.132/\text{hari}$$

Deteksi dini anomali mencegah 1 downtime bulanan @ $100.000:
$$ROI_{tahunan} = (12 \times \$100.000 + 365 \times \$4.132) - \$15.000_{sistem} = \$1.198.182$$

**Interpretasi Manajerial:** Sistem mencapai akurasi 94% dengan F1-score 96.2%, melampaui target threshold industri ≥90% (Pearson, 2024). Investasi CAPEX