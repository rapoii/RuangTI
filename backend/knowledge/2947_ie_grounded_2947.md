# 2947 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan peralatan industri merupakan salah satu fungsi kritikal dalam sistem manufaktur modern yang secara langsung menentukan *Overall Equipment Effectiveness* (OEE), ketersediaan kapasitas produksi, dan total biaya operasional. Laporan-laporan industri secara konsisten menunjukkan bahwa biaya *unplanned downtime* pada fasilitas manufaktur bernilai tambah tinggi (seperti *semiconductor fab*, *oil & gas refinery*, dan lini *assembly* otomotif) berkisar antara USD 10.000 hingga USD 250.000 per jam kejadian, dengan rata-rata global industri proses mendekati USD 25.000 per jam (Siemens, 2023; Deloitte, 2022). Pearson (2024) — seperti dirujuk dalam naskah dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — menyoroti bahwa salah satu kontributor utama kehilangan ketersediaan tersebut adalah degradasi peralatan yang *tidak tertangkap* hingga kegagalan fungsional terjadi, karena metode inspeksi visual konvensional memiliki tiga kelemahan struktural: (i) subyektivitas tinggi antar-inspektor, (ii) kelelahan kognitif pada shift panjang, dan (iii) periode siklus inspeksi yang terlalu jarang untuk menangkap degradasi cepat seperti *spalling* bantalan rol, retakan mikro pada bilah turbin, dan korosi *pitting* pada penukar panas.

Pergeseran paradigma dari *reactive maintenance* (korektif setelah gagal) dan *preventive maintenance* (periodik berbasis waktu) menuju *predictive maintenance* (PdM) berbasis kondisi (*condition-based*) dimungkinkan oleh konvergensi tiga tren teknologi: ketersediaan *industrial imaging* beresolusi tinggi dan berbiaya turun (kamera CMOS industri, *thermal imager*, dan akuisisi *hyperspectral*), infrastruktur komputasi *edge* dengan akselerator GPU/TPU, serta kematangan arsitektur *deep learning* — khususnya Convolutional Neural Networks (CNN) — yang melampaui kemampuan persepsi manusia pada tugas klasifikasi citra. Pearson (2024) memposisikan CNN sebagai *enabler* utama untuk sistem deteksi anomali visual nirawak (*unattended*) yang beroperasi 24/7, mengurangi rata-rata *dwell time* anomali dari hitungan minggu menjadi hitungan menit. Kontribusi teoretis dan empiris pada DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menjadi semakin relevan ketika integrasi dengan lapisan kontrol lanjutan — seperti yang diinvestigasi oleh Patel, Bhartiya, dan Gudi (2024) pada DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) — memungkinkan anomali visual memicu aksi kontrol prediktif (*model predictive control* dengan *physics-informed neural networks*) sebelum variabel proses keluar dari batas aman.

Dalam konteks Teknik Industri, masalah ini bukan sekadar masalah *computer vision*, melainkan masalah pengambilan keputusan multi-kriteria yang menyeimbangkan *false positive cost* (penghentian lini tidak perlu) terhadap *false negative cost* (kerusakan katastrofik). Pearson (2024) memberikan kerangka operasional untuk menjawab tantangan ini dengan mengombinasikan kekuatan representasional CNN dengan disiplin rekayasa keandalan klasik (RAM analysis, FMEA, dan RCM).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Ekstraksi Fitur Citra

CNN memproses citra input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ (tinggi × lebar × kanal warna) melalui lapisan konvolusi yang menerapkan kernel $\mathbf{K} \in \mathbb{R}^{h \times w \times C}$ secara geser (sliding window). Operasi konvolusi 2-D pada posisi $(i,j)$ didefinisikan sebagai:

$$z_{i,j}^{(l)} = \sum_{u=0}^{h-1} \sum_{v=0}^{w-1} \sum_{c=0}^{C-1} X_{i+u,\, j+v,\, c}^{(l)} \cdot K_{u,v,c}^{(l)} + b^{(l)}$$

dengan $b^{(l)}$ adalah bias pada lapisan $l$. Aktivasi non-linear $\phi(\cdot)$ (umumnya ReLU: $\phi(z) = \max(0,z)$) menghasilkan peta fitur $\mathbf{A}^{(l)}$:

$$A_{i,j}^{(l)} = \phi\!\left(z_{i,j}^{(l)}\right)$$

Lapisan *pooling* (umumnya *max-pooling* dengan kernel $2 \times 2$, *stride* 2) mereduksi dimensi secara invarian translasi:

$$P_{i,j}^{(l)} = \max_{u,v \in \{0,1\}} A_{2i+u,\, 2j+v}^{(l)}$$

Untuk tugas deteksi anomali dengan data cacat langka, arsitektur *backbone* seperti ResNet-50 (He et al., 2016) atau EfficientNet-B0 (Tan & Le, 2019) yang telah *pre-trained* pada ImageNet digunakan sebagai *feature extractor*, dengan lapisan klasifikasi biner di kepala jaringan.

### 2.2 Formulasi Deteksi Anomali sebagai Klasifikasi Biner

Misalkan $\mathcal{D} = \{(\mathbf{X}_n, y_n)\}_{n=1}^{N}$ dengan $y_n \in \{0,1\}$ menandakan kelas *normal* dan *anomali*. Fungsi keputusan jaringan adalah $f_\theta(\mathbf{X}) = \hat{p}(y=1|\mathbf{X})$ dengan parameter $\theta$. Pearson (2024) — merujuk pada DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — mengadopsi *binary cross-entropy loss*:

$$\mathcal{L}_{\text{BCE}}(\theta) = -\frac{1}{N}\sum_{n=1}^{N}\Big[y_n \log \hat{p}(y_n|\mathbf{X}_n) + (1-y_n)\log\big(1-\hat{p}(y_n|\mathbf{X}_n)\big)\Big]$$

Untuk menangani *class imbalance* yang ekstrem pada data anomali industri (rasio normal:anomali dapat mencapai 1000:1), *focal loss* (Lin et al., 2017) lebih sesuai:

$$\mathcal{L}_{\text{Focal}} = -\frac{1}{N}\sum_{n=1}^{N}\big(1-\hat{p}_n\big)^{\gamma} \cdot y_n \log \hat{p}_n - \hat{p}_n^{\gamma} \cdot (1-y_n)\log(1-\hat{p}_n)$$

dengan $\gamma \in [0,5]$ adalah *focusing parameter* yang menekan kerugian dari klasifikasi mudah dan menaikkan bobot pada sampel sulit.

### 2.3 Metrik Kinerja Operasional

Kinerja model dilaporkan dalam metrik yang bermakna bagi perekayasa keandalan:

$$\text{Precision} = \frac{TP}{TP+FP}, \qquad \text{Recall} = \frac{TP}{TP+FN}$$

$$F_1 = \frac{2 \cdot \text{Precision} \cdot \text{Recall}}{\text{Precision}+\text{Recall}}, \qquad \text{AUC} = \int_{0}^{1} \text{TPR}(\text{FPR})\, d(\text{FPR})$$

dengan $TPR = \text{Recall}$, $FPR = FP/(FP+TN)$. Untuk pemeliharaan prediktif, **recall** lebih diprioritaskan karena biaya *false negative* (anomali tak terdeteksi) umumnya satu orde magnitudo lebih tinggi daripada *false positive* (alarm palsu).

### 2.4 Integrasi dengan Physics-Informed Neural Network Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) pada DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) mengembangkan kerangka Model Predictive Control (MPC) yang menggunakan Physics-Informed Neural Networks (PINN) sebagai model internal *predictor*. Formulasi optimal control horizon $H_p$ adalah:

$$\min_{\mathbf{u}_{k}} \; J = \sum_{i=0}^{H_p-1}\Big[\|\mathbf{x}_{k+i|k}-\mathbf{x}_{\text{ref}}\|_Q^2 + \|\Delta\mathbf{u}_{k+i|k}\|_R^2\Big]$$

$$\text{s.t.} \quad \mathbf{x}_{k+i+1|k} = \mathcal{N}_\phi\!\left(\mathbf{x}_{k+i|k}, \mathbf{u}_{k+i|k}\right), \quad \mathbf{x}_{k|k} = \mathbf{x}_{\text{meas},k}$$

dengan $\mathcal{N}_\phi$ adalah jaringan PINN yang menghormati *physics residuals* $\mathcal{L}_{\text{phys}} = \|\partial_t \mathbf{x} - f(\mathbf{x},\mathbf{u})\|^2$. Ketika deteksi anomali dari modul Pearson (2024) mengirim sinyal degradasi (misalnya, aus bantalan terdeteksi), sinyal ini dapat dimasukkan sebagai *disturbance state* atau *constraint tightening*:

$$\mathbf{x}_{\min}^{(t)} \leftarrow \mathbf{x}_{\min}^{(0)} - \delta \cdot