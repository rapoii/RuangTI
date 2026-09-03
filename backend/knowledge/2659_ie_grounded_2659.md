# 2659 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah bertransformasi dari pendekatan berbasis jadwal menjadi paradigma berbasis kondisi (condition-based maintenance) yang ditenagai oleh pembelajaran mesin dan visi komputer. Dalam konteks manufaktur modern dan inisiatif *Industry 4.0*, downtime tak terencana pada peralatan kritis seperti turbin gas, motor induksi, pompa sentrifugal, dan conveyor belt menimbulkan kerugian ekonomi yang sangat signifikan. Studi-studi klasik dalam literatur keandalan menyebutkan bahwa biaya downtime satu jam pada lini produksi *continuous process* di industri petrokimia dapat mencapai ratusan ribu dolar AS, dengan rasio biaya kumulatif 1:3:10 untuk kegiatan perawatan versus downtime versus kerusakan lingkungan (Pearson, 2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)).

Pearson (2024) menyoroti bahwa pendekatan tradisional berbasis *vibration spectral analysis* dan *thermography point measurement* memiliki keterbatasan inherent: cakupan sensorik yang sempit, ketergantungan pada sensor kontak yang mudah rusak di lingkungan abrasif/suhu tinggi, dan ambiguitas interpretasi spektrum getaran ketika beberapa mode kegagalan terjadi simultan. Sebaliknya, citra visual dan termal resolusi tinggi mampu menangkap pola degradasi permukaan—seperti retakan mikro pada rotor, korosi pitting pada heat exchanger, misalignment pada kopling, dan kebocoran mikro pada segel mekanis—dengan cakupan spasial yang luas dan non-kontak. Integrasi arsitektur *Convolutional Neural Network* (CNN) untuk ekstraksi fitur hierarkis dari citra ini menjadi solusi *scalable* yang menjawab kebutuhan tersebut, sebagaimana dibuktikan oleh Pearson melalui eksperimen pada 12.000 citra kondisi abnormal dari 8 kategori peralatan industri.

Urgensi ekonominya diperkuat oleh laporan bahwa alokasi biaya *maintenance, repair, and operations* (MRO) di industri proses mencapai 15–40% dari total *operating expense*, dan implementasi strategi PdM berbasis AI berpotensi menurunkan biaya ini hingga 25% sambil meningkatkan *mean time between failures* (MTBF) sebesar 30–50%. Kerangka matematis dan komputasional yang dikembangkan oleh Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) mengenai *Physics-Informed Neural Networks* (PINN) untuk *Model Predictive Control* semakin melengkapi arsitektur PdM dengan memungkinkan penyematan hukum fisika ke dalam fungsi *loss* jaringan saraf, sehingga prediksi degradasi tidak hanya *data-driven* tetapi juga konsisten dengan dinamika termodinamika dan mekanika yang relevan. Sinergi kedua pendekatan ini merepresentasikan frontier riset mutakhir dalam *cyber-physical production systems*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Ekstraksi Fitur Citra

CNN merupakan kelas *deep feedforward network* yang dirancang untuk memproses data dengan topologi grid (citra 2D atau sinyal 1D). Operasi fundamentalnya adalah *discrete convolution* yang didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} x_{i+m,\,j+n}^{(l-1)} \cdot w_{m,n}^{(l)} + b^{(l)}\right)$$

di mana $x^{(l-1)}$ adalah *feature map* masukkan pada layer $l-1$, $w^{(l)} \in \mathbb{R}^{M \times N}$ adalah kernel konvolusi yang *trainable*, $b^{(l)}$ adalah *bias*, dan $f(\cdot)$ adalah fungsi aktivasi non-linear. Pearson (2024) menggunakan fungsi aktivasi ReLU untuk lapisan tersembunyi karena konvergensi *gradient* yang lebih stabil:

$$f(z) = \max(0, z)$$

dan fungsi Softmax pada lapisan keluaran untuk klasifikasi multi-kelas anomali:

$$\sigma(z_i) = \frac{e^{z_i}}{\sum_{k=1}^{K} e^{z_k}}, \quad \sum_{i=1}^{K}\sigma(z_i) = 1$$

Operasi *max-pooling* diterapkan untuk mengurangi dimensi spasial dan menambah invariansi terhadap translasi kecil:

$$p_{i,j}^{(l)} = \max_{(m,n)\in\mathcal{W}_{i,j}} y_{m,n}^{(l)}$$

di mana $\mathcal{W}_{i,j}$ adalah jendela pooling $2 \times 2$. Setelah beberapa blok konvolusi–pooling, *feature map* tiga dimensi diflatten dan dimasukkan ke *fully connected layer* untuk klasifikasi akhir.

### 2.2 Fungsi Kerugian dan Optimisasi

Pelatihan jaringan meminimalkan *categorical cross-entropy loss*:

$$\mathcal{L}_{\text{CE}} = -\frac{1}{N_b}\sum_{n=1}^{N_b}\sum_{k=1}^{K} y_{n,k} \log\hat{y}_{n,k}$$

di mana $N_b$ adalah ukuran *batch*, $y_{n,k}$ adalah label ground-truth *one-hot*, dan $\hat{y}_{n,k}$ adalah probabilitas prediksi kelas $k$. Parameter jaringan $\theta = \{W, b\}$ diperbarui menggunakan *Adam optimizer* dengan *learning rate* adaptif $\eta_t$:

$$\theta_{t+1} = \theta_t - \eta_t \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}$$

di mana $\hat{m}_t$ dan $\hat{v}_t$ adalah estimator momen pertama dan kedua yang dikoreksi bias. Pearson (2024) melaporkan penggunaan *learning rate* awal $10^{-4}$ dengan *decay* eksponensial dan *early stopping* berdasarkan *validation loss* untuk mencegah *overfitting*.

### 2.3 Skor Anomali dan Ambang Batas Keputusan

Untuk mendeteksi anomali *out-of-distribution*, Pearson mengusulkan skor anomali berbasis entropi prediksi:

$$S_{\text{anomali}}(\mathbf{x}) = -\sum_{k=1}^{K} \hat{y}_k(\mathbf{x}) \log \hat{y}_k(\mathbf{x})$$

Anomali ditetapkan ketika $S_{\text{anomali}} > \tau$, dengan $\tau$ ditentukan dari distribusi skor pada data validasi normal menggunakan persentil ke-99.

### 2.4 Integrasi Physics-Informed Neural Networks (PINN-MPC)

Patel, Bhartiya, dan Gudi (2024) mengembangkan formulasi *loss* gabungan yang menyertakan residual persamaan diferensial dinamika sistem:

$$\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda_{\text{phy}}\,\mathcal{L}_{\text{physics}}$$

dengan

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_r}\sum_{j=1}^{N_r}\left\| \dot{\mathbf{x}}_j - f(\mathbf{x}_j, \mathbf{u}_j) \right\|^2_2$$

di mana $\lambda_{\text{phy}}$ adalah *hyperparameter* penyeimbang dan $f(\cdot)$ merupakan dinamika sistem yang diketahui secara fisika. Dalam kerangka MPC, masalah optimasi yang diselesaikan pada setiap langkah waktu $t$ adalah:

$$\min_{\mathbf{U}_t} \; J(\mathbf{x}_t, \mathbf{U}_t) = \sum_{k=0}^{N_p-1} \left[\|\mathbf{x}_{t+k|t} - \mathbf{x}_{\text{ref}}\|^2_{Q} + \|\mathbf{u}_{t+k|t}\|^2_{R}\right] + \|\mathbf{x}_{t+N_p|t} - \mathbf{x}_{\text{ref}}\|^2_{P}$$

*dengan kendala*:
$$\mathbf{x}_{t+k+1|t} = g_{\text{PINN}}(\mathbf{x}_{t+k|t}, \mathbf{u}_{t+k|t}), \quad \mathbf{u}_{\min} \leq \mathbf{u}_{t+k|t} \leq \mathbf{u}_{\max}$$

di mana $N_p$ adalah *prediction horizon*, $Q, R, P$ adalah matriks bobot definit positif, dan $g_{\text{PINN}}$ adalah model prediksi berbasis jaringan saraf terinformasi fisika.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN untuk PdM mengikuti SOP berikut, yang disusun berdasarkan prosedur yang dilaporkan Pearson (2024) dan best practice industri yang relevan dengan ISO 13373 (condition monitoring) serta ISO/IEC 23053 (AI risk management):

**Tahap 1 – Akuisisi Data & Kalibrasi Sensor Visual.** Instalasi kamera termal (resolusi ≥ 640×480 px, sensitivitas ≤ 50 mK) atau kamera RGB-IP dengan pencahayaan terkontrol pada titik inspeksi kritis. Akuisisi minimal 1.500 citra per kategori kondisi, mencakup kondisi normal, 8 mode kegagalan utama (misalnya *overheating*, *cracking*, *corrosion*, *misalignment*, *looseness*, *wear*, *leakage*, *contamination*), dengan *ground-truth labelling* oleh teknisi ahli bersertifikat.

**Tahap 2 – Pra-pemrosesan Citra.** Normalisasi nilai piksel ke rentang $[0,1]$, resize ke dimensi standar (misal 224×224 untuk kompatibilitas dengan backbone *ResNet-50*), augmentasi data melalui rotasi ±15°, *horizontal flip*, penyesuaian kecerahan/kontras, dan *CutMix* untuk meningkatkan robustisitas.

**Tahap 3 – Arsitektur Model.** Penggunaan *transfer learning* dengan backbone *ResNet-50* pra-terlatih pada *ImageNet*, mengganti lapisan klasifikasi akhir dengan *fully connected layer* baru berukuran 9 (1 normal + 8 anomali), dan *fine-tuning* dengan *learning rate* berbeda (10× lebih kecil untuk backbone, penuh untuk head).

**Tahap 4 – Pelatihan & Validasi.** Pembagian data 70/15/15 untuk *train/validation/test*. Pelatihan selama maksimum 100 epoch dengan *early stopping patience* = 15 epoch. Validasi silang 5-*fold* untuk mengestimasi generalisasi.

**Tahap 5 – Deployment Edge & Integrasi SCADA.** Konversi model ke format ONNX/TensorRT, deployment pada GPU *edge* (NVIDIA Jetson) atau PLC industri, integrasi dengan protokol OPC-UA ke sistem SCADA/DCS, dengan *latency budget* ≤ 200 ms per inferensi.

**Tahap 6 – Pemantauan Berkelanjutan & Retraining.** Logging inferensi, drift detection menggunakan *Population Stability Index* (PSI), retraining terjadwal setiap 6 bulan atau ketika PSI > 0.25.

Diagram alir proses mengikuti urutan: **[Akuisisi] → [Pra-pemrosesan] → [Inferensi CNN] → [Skor Anomali] → [Threshold Check] → [Alarm & Work Order] → [Root Cause Analysis]**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik semen terintegrasi kapasitas 5.000 ton/hari memiliki 24 *idler conveyor* pada jalur transport batubara. Tim rekayasa menerapkan sistem deteksi anomali berbasis CNN untuk memantau *idler misalignment* dan *bearing failure*.

**Parameter Input:**
- Dataset pelatihan: 12.000 citra termal idler, terdistribusi: 4.000 normal, 8.000 anomali (5 jenis)
- Resolusi citra: 224×224