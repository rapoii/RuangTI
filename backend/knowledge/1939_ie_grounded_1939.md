# 1939 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Sektor manufaktur dan proses industri global menghadapi tantangan operasional yang semakin kompleks terkait keandalan aset fisik, dengan kerugian ekonomi tahunan yang ditimbulkan oleh *unscheduled downtime* diperkirakan mencapai USD 50 miliar pada industri berat (Pearson, 2024). Dalam konteks transformasi digital Industri 4.0, integrasi *Computer Vision* dengan arsitektur *Deep Learning* khususnya *Convolutional Neural Networks* (CNN) telah menjadi pilar strategis untuk sistem pemeliharaan prediktif (*predictive maintenance* — PdM). Pearson (2024) menyoroti bahwa pendekatan inspeksi visual konvensional yang bersifat *human-in-the-loop* memiliki kelemahan inheren: subjektivitas penilaian, kelelahan operator, keterbatasan akurasi pada cacat *low-contrast*, serta frekuensi inspeksi yang tidak sinkron dengan laju degradasi aset.

Urgensi ekonomi dari deteksi anomali berbasis citra semakin nyata ketika mempertimbangkan data industri dari sektor minyak & gas, petrokimia, dan manufaktur otomotif. Sebagai contoh, kerusakan pada *heat exchanger*, *rotating equipment*, atau *pressure vessel* yang tidak terdeteksi secara dini dapat memicu *catastrophic failure* dengan konsekuensi keselamatan kerja, pencemaran lingkungan, dan hilangnya produktivitas. Pearson (2024) — melalui publikasi pada *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — mengusulkan kerangka kerja (*framework*) berbasis CNN untuk mengotomatisasi proses identifikasi anomali pada citra peralatan industri, seperti korosi, kebocoran, deformasi termal, dan *misalignment*.

Komplementer dengan visi Pearson, penelitian Patel, Bhartiya, dan Gudi (2024) yang dipublikasikan di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) membahas penggunaan *Physics-Informed Neural Networks* (PINNs) pada *Model Predictive Control* (MPC) untuk sistem proses. Sinergi antara kedua pendekatan ini merepresentasikan evolusi paradigma PdM menuju *Cognitive Maintenance*, di mana deteksi anomali visual (lapis persepsi) digabungkan dengan kendali prediktif berbasis fisika (lapis keputusan) untuk membentuk *closed-loop intelligent asset management*. Tulisan ini bertujuan menyusun basis pengetahuan spesialis yang mengintegrasikan kedua perspektif tersebut ke dalam modul Teknik Industri yang aplikatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

Model CNN untuk deteksi anomali visual yang digunakan Pearson (2024) dibangun di atas operasi konvolusi diskrit dua dimensi. Untuk citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dan kernel konvolusi $K \in \mathbb{R}^{k_h \times k_w \times C}$, fitur keluaran pada lapisan $l$ didefinisikan sebagai:

$$Z^{(l)}_{i,j,c} = f\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1}\sum_{c'=0}^{C-1} K^{(l)}_{m,n,c,c'} \cdot X_{i+m,\, j+n,\, c'} + b^{(l)}_c\right)$$

di mana $f(\cdot)$ merupakan fungsi aktivasi non-linear (umumnya ReLU: $f(z) = \max(0,z)$), $b^{(l)}_c$ adalah bias, dan $(i,j,c)$ masing-masing menyatakan indeks spasial dan kanal fitur.

### 2.2 Anomaly Scoring Function

Untuk tugas deteksi anomali satu kelas (*one-class classification*), Pearson (2024) mengadopsi paradigma *reconstruction-based* dengan *Convolutional Autoencoder* (CAE). Skor anomali $S(x)$ untuk citra uji $x$ didefinisikan sebagai *reconstruction error* ternormalisasi:

$$S(x) = \frac{1}{H W C}\sum_{i=1}^{H}\sum_{j=1}^{W}\sum_{c=1}^{C}\left(x_{i,j,c} - \hat{x}_{i,j,c}\right)^2$$

di mana $\hat{x}$ adalah rekonstruksi dari encoder-decoder. Keputusan klasifikasi biner dilakukan melalui ambang $\tau$:

$$\hat{y} = \begin{cases} 1 \; (\text{anomali}) & \text{jika } S(x) \geq \tau \\ 0 \; (\text{nominal}) & \text{lainnya} \end{cases}$$

### 2.3 Fungsi Loss untuk Data Tidak Seimbang

Mengingat distribusi kelas anomali yang sangat timpang (*imbalanced*) pada data industri (rasio normal:anomali ≈ 100:1), Pearson (2024) menerapkan *Focal Loss* untuk mengatasi dominasi gradien dari kelas mayoritas:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

dengan $p_t$ adalah probabilitas prediksi kelas yang benar, $\alpha_t$ faktor penyeimbang kelas, dan $\gamma$ (biasanya 2) merupakan *focusing parameter* yang menurunkan kontribusi loss dari contoh yang sudah terklasifikasi dengan baik.

### 2.4 Formulasi PINN untuk MPC (Patel et al., 2024)

Sebagai kerangka pendukung, Patel, Bhartiya, dan Gudi (2024) memformulasikan MPC berbasis PINN sebagai masalah optimasi constrained:

$$\min_{u(\cdot)} \; J = \int_{t_0}^{t_0+T_p} \left[\|x(\tau) - x_{\text{ref}}(\tau)\|_Q^2 + \|u(\tau)\|_R^2\right] d\tau$$

terhadap kendala dinamika sistem yang dipelajari oleh PINN:

$$\dot{x}(t) = \mathcal{N}_\theta(x(t), u(t)) + \lambda_{\text{phys}} \cdot \mathcal{R}\left(\frac{\partial \mathcal{N}_\theta}{\partial x}, \frac{\partial^2 \mathcal{N}_\theta}{\partial x^2}, \ldots\right)$$

di mana $\mathcal{N}_\theta$ adalah jaringan saraf dengan parameter $\theta$, $\mathcal{R}$ adalah *residual physics* (misalnya persamaan Navier-Stokes, neraca massa/energi), dan $\lambda_{\text{phys}}$ mengontrol kekuatan regularisasi fisika. Persamaan ini menjamin bahwa prediksi state sistem tetap konsisten dengan hukum kekekalan massa, momentum, dan energi.

### 2.5 Indikator Kinerja Pemeliharaan

Pearson (2024) menggunakan metrik *Mean Time Between Failures* (MTBF) dan *Mean Time To Repair* (MTTR) yang terkait dengan akurasi deteksi:

$$\text{MTBF} = \frac{\text{Total Operating Time}}{\text{Number of Failures}}, \quad \text{MTTR} = \frac{\text{Total Downtime}}{\text{Number of Repairs}}$$

Tujuan PdM adalah memaksimalkan *Availability*:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} \times 100\%$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework deteksi anomali berbasis CNN mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Akuisisi & Anotasi Data.** Citra peralatan dikumpulkan melalui kamera industri resolusi tinggi (minimal 1920×1080 piksel), *thermal imaging camera*, atau *drone-mounted RGB camera*. Dataset dilabeli berdasarkan kelas: *normal*, *korosi*, *kebocoran*, *deformasi*, *crack*, dan *fouling*. Pearson (2024) menyarankan minimal 5.000 citra per kelas dengan augmentasi geometris (*rotation*, *flip*, *crop*) dan fotometris (*brightness*, *contrast adjustment*).

**Tahap 2 — Pre-processing.** Normalisasi nilai piksel ke rentang $[0,1]$, *resizing* ke dimensi tetap (misal 224×224), dan segmentasi latar belakang menggunakan *U-Net* untuk memfokuskan model pada region of interest (ROI).

**Tahap 3 — Transfer Learning.** Inisialisasi bobot dari arsitektur pra-latih (ResNet-50, EfficientNet-B3, atau Vision Transformer), kemudian *fine-tuning* pada dataset industri spesifik dengan *learning rate* $10^{-4}$ dan *optimizer* AdamW.

**Tahap 4 — Validasi & Evaluasi.** K-fold cross-validation (k=5) dengan metrik *Precision*, *Recall*, *F1-Score*, *Area Under ROC Curve* (AUC), dan *Intersection over Union* (IoU) untuk segmentasi.

**Tahap 5 — Deployment & Edge Integration.** Model dikuantisasi (INT8) untuk deployment pada edge device (NVIDIA Jetson, Intel Movidius), dengan *threshold calibration* berbasis distribusi *reconstruction error* pada data validasi.

**Tahap 6 — Integrasi PINN-MPC (Patel et al., 2024).** Hasil deteksi anomali dikirim sebagai *health indicator* ke modul MPC, yang menyesuaikan *setpoint* operasional atau memicu *soft shutdown* untuk mencegah eskalasi kerusakan. Diagram alir proses mengikuti arsitektur *sense → analyze → decide → act*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Inspeksi visual *shell-and-tube heat exchanger* pada unit *crude preheat train* kilang minyak dengan kapasitas 150.000 barel/hari.

**Parameter Masukan:**

| Parameter | Nilai |
|---|---|
| Jumlah citra训练 (training) | 8.000 |
| Jumlah citra validasi | 1.600 |
| Dimensi citra | 224 × 224 × 3 |
| Arsitektur | ResNet-50 transfer learning |
| Batch size | 32 |
| Epochs | 50 |
| Distribusi kelas | Normal: 92%, Korosi: 4%, Kebocoran: 2%, Crack: 1%, Fouling: 1% |

**Langkah 1 — Perhitungan Class Weighting.**
Untuk Focal Loss dengan $\alpha_t$ berbasis frekuensi invers:

$$\alpha_t = \frac{1}{\sqrt{f_c}}, \quad f_c = \text{frekuensi kelas } c$$

Maka untuk kelas *crack* ($f_c = 0{,}01$): $\alpha_t = 10{,}0$, dan untuk kelas *normal* ($f_c = 0{,}92$): $\alpha_t = 1{,}043$.

**Langkah 2 — Perhitungan Reconstruction Error.**
Ambil satu citra uji *heat exchanger* dengan $S(x) = 0{,}0187$ (MSE ternormalisasi). Ambang batas $\tau$ yang ditetapkan dari kuantil 99% data normal: $\tau = 0{,}0220$. Karena $S(x) = 0{,}0187 < \tau$, citra diklasifikasikan sebagai *nominal* (false negative rate perlu dimonitor).

**Langkah 3 — Confusion Matrix & Metrik Kinerja.**
Misalkan hasil pengujian pada 1.600 citra validasi menghasilkan:

| | Prediksi Anomali | Prediksi Normal |
|---|---|---|
| **Aktual Anomali** | TP = 118 | FN = 14 |
| **Aktual Normal** | FP = 22 | TN = 1.446 |

Perhitungan metrik:

$$\text{Precision} = \frac{TP}{TP+FP} = \frac{118}{118+22} = 0{,}843$$

$$\text{Recall} = \frac{TP}{TP+FN} = \frac{118}{118+14} = 0{,}894$$

$$F_1 = 2 \cdot \frac{P \cdot R}{P+R} = 2 \cdot \frac{0{,}843 \times 0{,}894}{0{,}843+0{,}894} = 0{,}868$$

$$AUC = 0{,}961 \text{ (dari kurva ROC)}$$

**Langkah 4 — Dampak pada Availability.**
Sebelum implementasi sistem deteksi anomali otomatis: MTBF = 2.400 jam, MTTR = 18 jam → $A = \frac{2.400}{2.418} \times 100\% = 99{,}26\%$.

Setelah implementasi (dengan Recall 89,4% mampu mendeteksi 89% anomali sebelum menjadi kegagalan): MTBF baru =