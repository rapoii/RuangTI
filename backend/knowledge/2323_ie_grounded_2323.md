# 2323 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah paradigma manajemen aset fisik dari pendekatan *reactive* dan *preventive* berbasis jadwal kalender menuju arsitektur *predictive maintenance* (PdM) berbasis kondisi aktual (*condition-based*). Dalam konteks ini, Pearson (2024) — melalui DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — menegaskan bahwa integrasi sensor visual (kamera industri, endoskop, termografi, dan akuisisi citra getaran spektral) dengan arsitektur *Convolutional Neural Networks* (CNN) mampu mendeteksi anomali permukaan, retakan mikro, korosi pitting, dan cacat subsurfis pada peralatan kritis seperti turbin gas, pompa sentrifugal, rolling mill, dan heat exchanger. Urgensi ekonomi dari adopsi metodologi ini sangat substansial: studi-studi industri yang dirujuk Pearson menunjukkan bahwa downtime yang tidak terjadwal pada lini manufaktur kontinyu bernilai $10.000–$250.000 per jam, sementara inspeksi manual memiliki *false negative rate* mencapai 18–35% karena kelelahan operator, subjektivitas penilaian, dan terbatasnya akses fisik pada peralatan berputar atau beroperasi pada suhu ekstrem.

Pearson (2024) menekankan tiga vektor nilai tambah yang melatarbelakangi penelitiannya. Pertama, **peningkatan Mean Time Between Failures (MTBF)** melalui deteksi degradasi lebih awal (15–45 hari sebelum *failure*) yang diekstraksi dari pola evolusi fitur pada *feature map* CNN. Kedua, **penurunan Mean Time To Repair (MTTR)** karena anomali terlokalisasi secara presisi, memungkinkan just-in-time parts replacement dan disassembly terarah. Ketiga, **peningkatan Overall Equipment Effectiveness (OEE)** yang merupakan produk dari *Availability × Performance × Quality*. Dari sisi teknis, kontribusi Pearson (2024) — yang terdaftar pada DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — adalah mengusulkan arsitektur dua tahap: tahap pertama adalah *backbone feature extractor* berbasis *transfer learning* (misal ResNet-50 atau EfficientNet-B3) yang sudah di-*pre-train* pada ImageNet, kemudian tahap kedua adalah *anomaly scoring head* berbasis reconstruction error dari *autoencoder* atau *student-teacher distillation* ala Student–Teacher Anomaly Detection (STAD).

Pelengkap penting dari sisi kontrol proses datang dari Patel, Bhartiya, dan Gudi (2024) — DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) — yang mengintegrasikan *Physics-Informed Neural Networks* (PINN) ke dalam *Model Predictive Control* (MPC). Relevansi integrasi keduanya untuk modul ini adalah：当 CNN menghasilkan skor anomali tinggi, sinyal tersebut menjadi *feedback variable* bagi MPC untuk menyesuaikan *setpoint* operasi (misal menurunkan temperatur, mengurangi *load*), sehingga memperlambat laju degradasi sambil menunggu jadwal *shutdown* terjadwal. Sinergi PdM berbasis citra dan MPC berbasis fisika inilah yang menjadi arsitektur *cyber-physical system* masa depan untuk manufaktur responsif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Ekstraksi Fitur Citra

Operasi konvolusi diskrit 2D yang menjadi blok bangunan CNN Pearson (2024) didefinisikan sebagai:

$$Y_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} W_{m,n}^{(l)} \cdot X_{i+m,\,j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $Y_{i,j}^{(l)}$ adalah nilai aktivasi neuron pada lapisan $l$, $W_{m,n}^{(l)}$ adalah elemen kernel konvolusi dengan dimensi $k_h \times k_w$, $X^{(l-1)}$ adalah *feature map* dari lapisan sebelumnya, $b^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (ReLU: $\sigma(z)=\max(0,z)$). Pearson (2024) — DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — melaporkan konfigurasi optimal dengan kedalaman jaringan $L=18$–$50$ lapisan, kernel $3\times 3$ dengan *stride* $s=1$–$2$, dan *max-pooling* $2\times 2$ untuk reduksi dimensionalitas.

### 2.2 Formulasi Anomaly Score

Untuk deteksi anomali, Pearson (2024) mengadopsi formulasi *reconstruction-based* autoencoder dengan *bottleneck* dimensi $d_z \ll d_x$:

$$\mathcal{L}_{AE}(\theta,\phi) = \mathbb{E}_{x \sim \mathcal{D}_{\text{norm}}}\left[\|x - \hat{x}\|_2^2\right] = \mathbb{E}_{x}\left[\|x - g_\phi(f_\theta(x))\|_2^2\right]$$

di mana $f_\theta$ adalah *encoder*, $g_\phi$ adalah *decoder*, dan $\mathcal{D}_{\text{norm}}$ adalah himpunan data citra kondisi normal. Skor anomali untuk citra uji $x_i$ kemudian didefinisikan sebagai:

$$s_i = \|x_i - g_\phi(f_\theta(x_i))\|_2^2 + \alpha \cdot \|z_i - \mu_z\|_2^2$$

dengan $\alpha$ adalah bobot regularisasi laten (di-tuning pada rentang 0,1–1,0 menurut Pearson), dan $z_i = f_\theta(x_i)$ adalah vektor laten. Keputusan klasifikasi biner dilakukan dengan ambang batas $\tau$:

$$\hat{y}_i = \begin{cases} 1 \text{ (anomali)} & \text{jika } s_i \geq \tau \\ 0 \text{ (normal)} & \text{jika } s_i < \tau \end{cases}$$

### 2.3 Metrik Evaluasi Kinerja Klasifikasi

Pearson (2024) menggunakan metrik standar industri *imbalanced classification*:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision}+\text{Recall}}$$

di mana $TP$, $FP$, $FN$, $TN$ adalah *true positive*, *false positive*, *false negative*, dan *true negative* dari *confusion matrix*. Untuk pemilihan ambang batas $\tau$, digunakan kurva ROC dengan luas Area Under Curve:

$$\text{AUC} = \int_{0}^{1} \text{TPR}(\text{FPR}) \, d(\text{FPR})$$

### 2.4 Formulasi Kontrol Prediktif dengan PINN (Patel dkk., 2024)

Patel, Bhartiya, dan Gudi (2024) — DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) — merumuskan PINN-MPC sebagai penyelesaian masalah optimasi horizon $N_p$:

$$\min_{u_0,\ldots,u_{N_p-1}} \sum_{k=0}^{N_p-1} \|y_k - y_{\text{ref}}\|_Q^2 + \|u_k\|_R^2$$

dengan kendala dinamika fisis:

$$\dot{x}(t) = \mathcal{N}_x(x(t),u(t)) + \mathcal{F}_{\text{phys}}(x(t),u(t))$$

di mana $\mathcal{N}_x$ adalah dinamika terbobot jaringan dan $\mathcal{F}_{\text{phys}}$ adalah *residual* fisika (mis. persamaan neraca massa/energi). Sinyal skor anomali $s_i$ dari CNN Pearson diumpankan sebagai *disturbance variable* $d_k$ yang menurunkan $y_{\text{ref}}$ secara adaptif.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan sistematis di lantai pabrik mengikuti *Standard Operating Procedure* (SOP) 7-tahap yang selaras dengan metodologi Pearson (2024) dan integrasi Patel dkk. (2024):

**Tahap 1 – Akuisisi Data Citra.** Instalasi kamera IP industri (resolusi minimum 1920×1080, framerate 30 fps) dengan pencahayaan terstruktur *ring light* atau *line laser* untuk mengurangi *specular reflection*. Standar referensi: ISO 9001:2015 untuk dokumentasi kalibrasi dan ISO 1940-1 untuk keseimbangan peralatan berputar. Frekuensi sampling mengikuti *Nyquist* terhadap laju degradasi: untuk komponen kritis, akuisisi setiap 1–4 jam.

**Tahap 2 – Pre-processing Citra.** Resolusi unifikasi ke $224\times 224$ piksel, normalisasi $[0,1]$ dengan $x' = x/255$, augmentasi data (*rotation* ±15°, *flip* horizontal, *brightness* ±10%) untuk memperbesar *training set* dan mengurangi overfitting.

**Tahap 3 – Transfer Learning & Fine-tuning.** Inisialisasi bobot dari ImageNet, kemudian *fine-tune* seluruh lapisan dengan *learning rate* $\eta = 10^{-4}$, *optimizer* Adam ($\beta_1=0{,}9; \beta_2=0{,}999$), dan *batch size* 32 selama 50 epoch.

**Tahap 4 – Pelatihan Autoencoder Anomali.** Pelatihan hanya dengan citra kondisi normal (one-class learning), dengan *early stopping* berdasarkan *validation loss* $\mathcal{L}_{\text{val}} < 10^{-4}$.

**Tahap 5 – Threshold Calibration.** Penentuan $\tau$ menggunakan dataset validasi berlabel dengan optimasi *Youden's J-statistic*: $\tau^* = \arg\max_\tau \{ \text{TPR}(\tau) - \text{FPR}(\tau) \}$.

**Tahap 6 – Deployment Edge/Cloud.** Inferensi dijalankan pada *edge device* (NVIDIA Jetson AGX Orin, ~275 TOPS) untuk latensi <50 ms, dengan *telemetry* ke *cloud dashboard* berbasis MQTT.

**Tahap 7 – Integrasi MPC-PINN (Patel dkk., 2024).** Sinyal $s_i$ dikirim ke *controller* PLC/DCS yang menjalankan MPC horizon $N_p=20$ dengan laju *recalculation* 1 Hz.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Inspeksi Bearing Pompa Sentrifugal P-101 di Pabrik Kimia

Studi kasus ini menggunakan data sintetis yang konsisten dengan benchmark Pearson (2024). Paket inspeksi diambil dari bearing housing pompa sentrifugal (debit 250 m³/jam, head 45 m, kecepatan 2950 rpm) yang melayani reaktor CSTR. Total dataset: $N=10.000$ citra, dengan distribusi *imbalanced* normal:anomali = 9.500:500.

### 4.2 Perhitungan Confusion Matrix dan Metrik

Misalkan hasil inferensi CNN dengan $\tau^*=0{,}42$ menghasilkan *confusion matrix* berikut (konsisten dengan performa Pearson pada benchmark MVTec AD untuk kategori *bearing*):

| | Prediksi Anomali | Prediksi Normal |
|---|---|---|
| **Aktual Anomali** | $TP=437$ | $FN=63$ |
| **Aktual Normal** | $FP=95$ | $TN=9.405$ |

Perhitungan metrik:

$$\text{Precision} = \frac{437}{437+95} = \frac{437}{532} = 0{,}8214 \;(82{,}14\%)$$

$$\text{Recall} = \frac{437}{437+63} = \frac{437}{500} = 0{,}8740 \;(87{,}40\%)$$

$$F_1 = \frac{2 \times 0{,}8214 \times 0{,}8740}{0{,}8214 + 0{,}8740} = \frac{1{,}4357}{1{,}6954} = 0{,}8468$$

$$\text{AUC} \approx 0{,}961 \text{ (dari kurva ROC hasil eksperimen Pearson, 2024)}$$

### 4.3