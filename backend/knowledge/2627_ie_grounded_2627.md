# 2627 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Jaringan Saraf Konvolusional untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* dan *Industrial Internet of Things* (IIoT) telah memunculkan kebutuhan fundamental akan sistem diagnostik peralatan yang mampu mengolah data visual berdimensi tinggi secara *real-time*. Dalam konteks rekayasa keandalan (*reliability engineering*), kegagalan mendadak pada peralatan kritis—seperti motor listrik, pompa sentrifugal, kompresor, dan sistem bearing—menyebabkan *unplanned downtime* yang secara empiris merugikan industri manufaktur global sekitar USD 50 miliar per tahun (估测 menurut laporan tahunan beberapa konsultan industri). Pearson (2024) dalam karyanya yang dipublikasikan melalui DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa pendekatan *image-based anomaly detection* berbasis *Convolutional Neural Networks* (CNN) menawarkan lompatan paradigma dibandingkan metode konvensional yang mengandalkan analisis getaran (*vibration analysis*) satu dimensi atau inspeksi visual manual.

Urgensi ekonomis teknologi ini tecermin dari tiga parameter operasional utama yang dibahas Pearson (2024): (1) **Mean Time Between Failures (MTBF)** yang umumnya turun 30–40% bila anomali tidak terdeteksi dini; (2) **Overall Equipment Effectiveness (OEE)** yang dapat dipertahankan di atas 85% melalui deteksi citra otomatis; dan (3) **Total Productive Maintenance (TPM)** yang bertransformasi dari *reactive* menjadi *predictive* dengan akurasi klasifikasi citra di atas 95%. Pendekatan vision-based juga menghilangkan *human subjectivity* yang selama ini menjadi sumber *false positive* dan *false negative* dalam inspeksi berkala.

Secara teknis, arsitektur CNN yang diusulkan Pearson (2024) mengintegrasikan *transfer learning* dari model pra-terlatih (misalnya ResNet-50 atau EfficientNet-B0) dengan *fine-tuning* pada dataset anomali spesifik industri (misalnya retakan pada housing pompa, korosi pada pipa, *overheating discoloration* pada panel listrik). Pendekatan ini semakin relevan ketika dikombinasikan dengan kerangka *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINNs) yang dipublikasikan oleh Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431), di mana residual fisik sistem dapat diprediksi dan divalidasi terhadap citra anomali yang ditangkap oleh kamera industri. Sinergi kedua pendekatan ini merepresentasikan visi *cyber-physical production systems* (CPPS) masa depan, di mana *soft sensor* visual menjadi komponen integral dalam *closed-loop control* dan *predictive maintenance*.

Implikasi manajerial dari adopsi teknologi ini bersifat strategis: pengambil keputusan teknik dapat menggeser alokasi belanja operasional (*OPEX*) dari perbaikan darurat (*breakdown maintenance*) yang berbiaya 3–5 kali lebih tinggi menuju investasi modal (*CAPEX*) untuk infrastruktur sensor visual dan *edge computing*. Konteks ini mengukuhkan mengapa modul 2627 menjadi esensial bagi spesialis teknik industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan Saraf Konvolusional (CNN)

Operasi konvolusi fundamental yang digunakan Pearson (2024) didefinisikan sebagai pemetaan fitur dari tensor citra input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ ke *feature map* $\mathbf{Y} \in \mathbb{R}^{H' \times W' \times K}$ melalui kernel konvolusi yang dapat dipelajari $\mathbf{W}_k \in \mathbb{R}^{h \times w \times C}$:

$$Y_{i,j,k} = f\left(\sum_{u=0}^{h-1}\sum_{v=0}^{w-1}\sum_{c=0}^{C-1} X_{i+u,\,j+v,\,c} \cdot W_{u,v,c}^{(k)} + b_k\right)$$

di mana $b_k$ adalah *bias* untuk kernel ke-$k$, dan $f(\cdot)$ adalah fungsi aktivasi non-linear—umumnya **ReLU** $f(z) = \max(0, z)$ atau **LeakyReLU** $f(z) = \max(\alpha z, z)$ dengan $\alpha = 0.01$.

Dimensi output untuk *stride* $s$ dan *zero-padding* $p$ mengikuti:

$$H' = \left\lfloor \frac{H - h + 2p}{s} \right\rfloor + 1, \quad W' = \left\lfloor \frac{W - w + 2p}{s} \right\rfloor + 1$$

### 2.2 Formulasi *Image-Based Anomaly Detection*

Pearson (2024) merumuskan deteksi anomali sebagai masalah klasifikasi biner yang membedakan citra kondisi *normal* $\mathcal{N}$ dan citra *anomali* $\mathcal{A}$. Model CNN memetakan fungsi keputusan:

$$\hat{y} = \sigma\left(\mathbf{w}^{\top}\mathbf{z} + b\right)$$

dengan $\mathbf{z}$ adalah vektor fitur hasil *global average pooling* dari *convolutional backbone*, $\sigma(\cdot)$ adalah fungsi sigmoid $\sigma(z) = \tfrac{1}{1+e^{-z}}$, dan $\hat{y} \in [0,1]$ merupakan probabilitas anomali. Fungsi kerugian yang digunakan adalah *Binary Cross-Entropy*:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{n=1}^{N}\left[y_n \log(\hat{y}_n) + (1-y_n)\log(1-\hat{y}_n)\right]$$

### 2.3 Metrik Evaluasi Kuantitatif

Untuk menilai kinerja model secara robust, Pearson (2024) menggunakan empat metrik utama yang diturunkan dari *confusion matrix*:

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}$$

$$\text{F1-Score} = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

di mana $TP$, $TN$, $FP$, $FN$ berturut-turut merepresentasikan *True Positive*, *True Negative*, *False Positive*, dan *False Negative*.

### 2.4 Integrasi dengan *Physics-Informed Neural Networks* (PINNs)

Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) memperkenalkan kerangka MPC-PINN di mana fungsi kerugian total menggabungkan *data loss* dan *physics loss*:

$$\mathcal{L}_{total} = \lambda_d \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics}$$

dengan $\lambda_d, \lambda_p$ sebagai hiperparameter bobot, dan $\mathcal{L}_{physics}$ merupakan residual persamaan diferensial parsial (PDE) yang mengatur dinamika proses. Dalam konteks deteksi anomali berbasis citra, *physics loss* ini dapat diformulasikan sebagai:

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{i=1}^{N_p}\left[\mathcal{R}\left(\hat{T}(x_i,t_i;\theta)\right)\right]^2$$

di mana $\mathcal{R}$ adalah operator residual PDE misalnya persamaan panas $\partial T/\partial t = \alpha \nabla^2 T$ untuk mengukur kesesuaian distribusi termal hasil inferensi CNN dengan hukum fisika termodinamika.

### 2.5 *Gradient Class Activation Map* (Grad-CAM) untuk Lokalisasi

Pearson (2024) memanfaatkan Grad-CAM untuk memvisualisasikan region of interest (ROI) anomali:

$$L_{Grad-CAM}^{c} = \text{ReLU}\left(\sum_{k} \alpha_k^{c} A^{k}\right)$$

dengan bobot $\alpha_k^{c}$ dihitung sebagai rata-rata gradien global:

$$\alpha_k^{c} = \frac{1}{Z}\sum_{i}\sum_{j}\frac{\partial Y^{c}}{\partial A_{i,j}^{k}}$$

Formulasi ini memungkinkan interpretabilitas model yang memenuhi regulasi Explainable AI (XAI) untuk aplikasi industri kritikal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis citra mengikuti SOP berlapis yang dirancang oleh Pearson (2024) untuk memastikan reproducibility dan compliance terhadap standar ISO 13373 (Condition Monitoring) dan ISO/IEC 23053 (Framework for AI-based Systems). Prosedur sistematis ini diuraikan dalam diagram alir berikut:

**Tahap 1 — Akuisisi Data Visual:** Pemasangan kamera industri (*IP67/IP69K rated*) beresolusi minimal 1920×1080 piksel pada titik-titik inspeksi kritis dengan pencahayaan terkontrol (*controlled illumination*, intensitas 500–2000 lux) dan frame rate 30–60 fps. Citra disimpan dalam format TIFF/PNG lossless untuk mencegah artefak kompresi JPEG.

**Tahap 2 — Preprocessing & Augmentasi:** Dataset dinormalisasi ke rentang $[0,1]$ melalui $X_{norm} = (X - \mu)/\sigma$ (standarisasi). Augmentasi meliputi *random rotation* $\pm 15°$, *horizontal/vertical flip*, *color jitter* ($\Delta\text{HSV} = \pm 0.1$), dan *CutMix* untuk mencegah overfitting pada kondisi minoritas.

**Tahap 3 — Partisi Dataset:** Pembagian stratified 70/15/15 untuk *training/validation/testing* sesuai konvensi Pearson (2024), memastikan distribusi kelas anomali konsisten di seluruh partisi.

**Tahap 4 — Arsitektur & Transfer Learning:** Inisialisasi backbone CNN dari bobot ImageNet (*pre-trained*), pembekuan 80% layer awal, dan *fine-tuning* 20% layer akhir dengan learning rate $\eta = 10^{-4}$ dan optimizer Adam ($\beta_1 = 0.9$, $\beta_2 = 0.999$).

**Tahap 5 — Pelatihan & Validasi:** *Early stopping* dengan *patience* = 10 epoch berdasarkan val_loss, dan *learning rate scheduler* (*ReduceLROnPlateau*, *factor* = 0.5).

**Tahap 6 — Evaluasi & Deployment:** Pengujian pada *hold-out test set*, kalkulasi metrik Precision/Recall/F1, dan deployment ke *edge device* (NVIDIA Jetson AGX Orin atau Intel OpenVINO) dengan latensi inferensi < 50 ms per citra.

**Tahap 7 — Integrasi dengan CMMS:** Hasil klasifikasi otomatis dikirimkan ke *Computerized Maintenance Management System* (CMMS) untuk memicu *work order* pemeliharaan prediktif sesuai protokol ISO 55000 (Asset Management).

**Tahap 8 — Continuous Learning:** Mekanisme *feedback loop* dari teknisi lapangan untuk memperbarui dataset dan melakukan *periodic retraining* setiap 90 hari guna mempertahankan performa terhadap *concept drift*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Deteksi Anomali pada Motor Listrik 3-Fasa

Sebuah pabrik manufaktur otomotif di kawasan industri Cikarang memiliki 120 unit motor listrik induksi 3-fasa (rated power 15 kW, 380 V, 50 Hz) yang menggerakkan *conveyor line*. Departemen *reliability engineering* mengimplementasikan sistem inspeksi visual otomatis sesuai kerangka Pearson (2024) untuk mendeteksi tiga kelas anomali utama: (1) *overheating discoloration* pada housing, (2) korosi terminal, dan (3) retakan pada *mounting bracket*.

### 4.2 Parameter Input dan Konfigurasi Model

| Parameter | Nilai |
|-----------|-------|
| Ukuran dataset | 10.000 citra |
| Distribusi kelas | Normal: 6.500; Anomali: 3.500 |
| Resolusi citra | 224 × 224 × 3 |
| Backbone CNN | EfficientNet-B0 |
| Optimizer | Adam ($\eta = 10^{-4}$) |
| Batch size |