# 1763 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah bergeser secara fundamental dari paradigma reaktif-time-based menjadi paradigma condition-based yang digerakkan oleh data, seiring dengan masifnya adopsi sensor visual beresolusi tinggi di lini produksi. Pearson (2024) dalam studinya yang dipublikasikan pada *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa anomali pada peralatan industri—seperti retakan mikro pada impeller pompa sentrifugal, korosi pada heat exchanger, misalignment pada motor induksi, serta cacat permukaan pada conveyor belt—memiliki *signature* visual yang dapat diekstraksi secara otomatis menggunakan arsitektur *Convolutional Neural Networks* (CNN). Studi tersebut muncul di tengah tekanan ekonomi global di mana biaya *unplanned downtime* pada industri proses dilaporkan mencapai USD 50 miliar per tahun untuk sektor manufaktur G7, dengan satu jam downtime pada fasilitas petrokimia bernilai hingga USD 500.000 (McKinsey, 2023; Pearson, 2024).

Urgensi metodologis yang diangkat Pearson (2024) berangkat dari keterbatasan inspeksi manual yang memiliki *inter-rater reliability* sangat rendah (Cohen's κ ≈ 0.41–0.58) dan tidak scalable untuk lingkungan *high-mix low-volume*. Pendekatan CNN vision-based menawarkan tiga keunggulan struktural: (1) kemampuan *feature hierarchy learning* otomatis dari pixel-level hingga semantic-level tanpa *hand-crafted feature engineering*; (2) throughput inspeksi 200–400 kali lebih tinggi dibanding inspektur manusia; dan (3) konsistensi keputusan yang tidak terpengaruh fatigue atau bias kognitif. Pelengkap penting datang dari Patel, Bhartiya, & Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) yang menunjukkan bagaimana Physical-Informed Neural Networks (PINNs) dapat mengintegrasikan *first-principles governing equations* ke dalam arsitektur deep learning—sebuah pendekatan yang ketika digabungkan dengan CNN vision, memungkinkan *cross-modal fusion* antara citra visual dan dinamika proses fisis. Dengan kata lain, keputusan "anomali terdeteksi" tidak hanya didasarkan pada pola piksel, tetapi juga pada kesesuaian dengan hukum konservasi massa, energi, dan momentum yang berlaku pada sistem industri.

Dalam konteks Transformasi Industri 4.0, integrasi CNN-PdM menjadi pondasi *closed-loop cyber-physical system*: kamera IP/thermal/hiperspektral di lantai pabrik → edge gateway untuk inferensi real-time → *digital twin* untuk simulasi *remaining useful life* (RUL) → perintah *proactive maintenance* via CMMS/EAM. Pearson (2024) memposisikan kontribusinya pada *sweet spot* antara akurasi deteksi (>95% F1-score pada dataset MVTec AD dan DAGM) dan efisiensi komputasional yang memungkinkan *deployment* pada edge device dengan memori <4 GB.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

CNN adalah kelas *deep feedforward neural network* yang dioptimasi untuk data grid-like (citra 2D). Pearson (2024) menggunakan backbone **ResNet-50** yang telah di-*pre-train* pada ImageNet, kemudian dilakukan *fine-tuning* dengan dataset anomali industri. Operasi fundamental CNN adalah *discrete convolution*:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} w_{m,n}^{(l)} \cdot x_{i+m,\,j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $x^{(l-1)}$ adalah *feature map* layer sebelumnya, $w^{(l)}$ adalah kernel filter berukuran $k \times k$ (umumnya $k=3$ untuk ResNet), $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear. Pearson (2024) memilih **ReLU** $f(z) = \max(0,z)$ karena konvergensi SGD yang lebih cepat dan mitigasi *vanishing gradient* pada jaringan dalam.

### 2.2 Residual Learning Block

Untuk mencegah degradasi akurasi pada jaringan sangat dalam, Pearson (2024) mengadopsi *residual connection* dari He et al. (2016):

$$\mathcal{F}(x^{(l)}) = \text{ReLU}\left(W_2 \cdot \text{ReLU}(W_1 x^{(l)}) + x^{(l)}\right)$$

dengan $W_1, W_2$ adalah bobot konvolusi, dan $x^{(l)}$ adalah *identity shortcut* yang memungkinkan gradien mengalir langsung melalui *skip connection*.

### 2.3 Loss Function untuk Deteksi Anomali

Mengingat kelas anomali industri bersifat **highly imbalanced** (rasio normal:anomali ≈ 100:1), Pearson (2024) menggunakan **Focal Loss** sebagai pengganti *binary cross-entropy* standar:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas target, $\gamma \geq 0$ adalah *focusing parameter* (di-tuning ke $\gamma = 2$), dan $\alpha_t \in [0,1]$ adalah *class weighting factor* untuk menyeimbangkan kontribusi kelas minoritas. Ekspektasi Pearson: ketika $p_t \to 1$, faktor $(1-p_t)^{\gamma} \to 0$ sehingga *easy negatives* kehilangan kontribusi, memaksa model fokus pada *hard examples*.

### 2.4 Anomaly Scoring Metric

Untuk *inference*, skor anomali dihitung sebagai *reconstruction error* pada autoencoder atau *distance metric* pada embedding space:

$$S(x) = \|x - \hat{x}\|_2^2 = \sum_{i=1}^{N}(x_i - \hat{x}_i)^2$$

Threshold keputusan $\tau$ di-tuning pada *validation set* untuk memenuhi target **False Positive Rate (FPR) ≤ 5%**:

$$\hat{y} = \begin{cases} 1 \text{ (anomali)} & \text{jika } S(x) > \tau \\ 0 \text{ (normal)} & \text{lainnya} \end{cases}$$

### 2.5 Physics-Informed Loss (Pendukung)

Patel, Bhartiya, & Gudi (2024) memperkenalkan PINN loss yang约束 jaringan agar memenuhi *governing equation* proses, misalnya persamaan panas 1D:

$$\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda \mathcal{L}_{\text{physics}} = \mathcal{L}_{\text{data}} + \lambda \left\| \frac{\partial \hat{T}}{\partial t} - \alpha \frac{\partial^2 \hat{T}}{\partial z^2} \right\|_{\Omega}^{2}$$

di mana $\hat{T}(z,t)$ adalah prediksi neural network untuk profil suhu, $\alpha$ adalah difusivitas termal, dan $\lambda$ adalah *hyperparameter penalty* (umumnya $\lambda = 0.1$–$1.0$). Pendekatan ini memungkinkan **cross-modal validation**: keputusan anomali dari CNN vision dikorelasikan dengan pelanggaran hukum fisika dari PINN process model, menurunkan false alarm secara signifikan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menyusun SOP enam-tahap untuk *deployment* CNN-PdM di fasilitas industri:

**Tahap 1 — Akuisisi Data & Image Acquisition Protocol.**
Pemasangan kamera IP (resolusi minimum 1920×1080), kamera termal (rentang -20°C hingga 650°C, NETD <50 mK), atau kamera hiperspektral pada *critical asset* dengan pencahayaan *diffuse LED ring* (≥ 5000 K, color rendering index >90) untuk meminimalisir refleksi specular. *Frame rate* sampling: 1 fps untuk inspeksi periodik, 30 fps untuk *high-speed rotating equipment*. Standar acuan: **ISO 9001:2015 Klausul 7.1.5** untuk *monitoring and measuring resources* dan **ASTM E2862-12** untuk *digital image acquisition*.

**Tahap 2 — Data Annotation & Quality Control.**
Anotasi oleh *domain expert* (mekanik senior, insinyur reliabilitas) menggunakan tool **CVAT** atau **LabelImg*. Minimal 5.000 citra per kelas anomali, dengan **inter-annotator agreement** minimal Cohen's κ ≥ 0.75. Validasi silang dengan *gold-standard* NDT (ultrasonic testing, dye penetrant) sesuai **ASTM E1417/E1417M**.

**Tahap 3 — Preprocessing & Augmentation Pipeline.**
Normalisasi pixel ke $[0,1]$, resize ke $224 \times 224$ (standar input ResNet), dan augmentasi geometris/fotometris:

$$x_{\text{aug}} = \text{RandomAffine}(\theta \in [-15°, 15°], \, s \in [0.9, 1.1]) \circ \text{ColorJitter}(\Delta h \pm 0.05, \, \Delta s \pm 0.2) \circ x$$

**Tahap 4 — Model Training & Hyperparameter Optimization.**
Optimasi dengan **Adam optimizer** ($\beta_1 = 0.9$, $\beta_2 = 0.999$), *learning rate* awal $10^{-4}$ dengan *cosine annealing*, *batch size* 32, dan *early stopping* dengan *patience* = 10 epoch pada *validation F1-score*. Fine-tuning 50 epoch pada GPU NVIDIA T4 atau edge inference pada **NVIDIA Jetson Orin Nano**.

**Tahap 5 — Model Validation & Threshold Calibration.**
Evaluasi menggunakan metrik **Precision, Recall, F1-score, AUC-ROC, dan Matthews Correlation Coefficient (MCC)**. Calibration *threshold* $\tau$ pada *receiver operating characteristic* untuk memenuhi target operasional (umumnya FPR ≤ 5%, Recall ≥ 90%).

**Tahap 6 — Deployment & Continuous Learning.**
Model di-*containerize* dengan **Docker**, di-*orchestrate* via **Kubernetes**, dan dipantau dengan **MLflow** untuk *model drift detection*. Feedback loop: anomali yang dikonfirmasi teknisi lapangan di-*upload* kembali ke *training set* untuk *periodic retraining* setiap 90 hari atau ketika *data drift* terdeteksi (KS-test, $p < 0.05$).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Deteksi anomali pada **pompa sentrifugal single-stage** di pabrik kimia (kapasitas 500 m³/jam, head 50 m, daya motor 75 kW). Target: membedakan kondisi *normal*, *cavitation*, dan *impeller erosion*.

**Langkah 1 — Akuisisi Data.**
Kamera termal dipasang pada bearing housing (suhu operasi normal 60–75°C). Dataset: 4.200 citra termal (1.400 per kelas), resolusi $320 \times 240$.

**Langkah 2 — Arsitektur Model.**
ResNet-50 pre-trained, layer akhir diganti *fully-connected layer* dengan 3 output kelas. Total parameter: $P = 25.6 \times 10^6$.

**Langkah 3 — Forward Pass pada Citra Contoh.**
Ambil patch $x_{i,j}^{(0)} = 0.72$ (intensitas piksel termal ternormalisasi), kernel $w_{3 \times 3}^{(1)}$ dengan elemen pertama $w_{0,0}^{(1)} = 0.15$. Operasi konvolusi:

$$y_{0,0}^{(1)} = \text{ReLU}\left(\sum_{m=0}^{2}\sum_{n=0}^{2} w_{m,n}^{(1)} \cdot x_{m,n}^{(0)} + 0.05\right)$$

Untuk neighborhood $\{0.68, 0.71, 0.74, 0.69, 0.72, 0.75, 0.70, 0.73, 0.76\}$ dan kernel tipikal deteksi tepi $\{-1,0,1; -2,0,2; -1,0,1\}$:

$$y_{