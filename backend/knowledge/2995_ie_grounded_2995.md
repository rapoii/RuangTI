# 2995 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif dan Integrasi Physics-Informed Neural Networks dalam Model Predictive Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan peralatan industri telah berevolusi dari strategi *reactive* (korektif setelah kerusakan terjadi) menuju *preventive* (berbasis jadwal) dan kini menuju paradigma **predictive maintenance (PdM)** yang digerakkan oleh data. Pearson (2024) dalam tulisannya di jurnal *peer-reviewed* yang terindeks di SSRN ([DOI: 10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa pendekatan berbasis citra menggunakan *Convolutional Neural Networks* (CNN) memberikan lompatan kuantitatif dalam akurasi deteksi anomali visual pada komponen mekanis, elektris, dan proses. Studi ini muncul di tengah tekanan operasional industri manufaktur global di mana **unplanned downtime** masih merajai biaya operasional: laporan Deloitte (2023) menunjukkan bahwa kerugian akibat *downtime* tidak terjadwal pada industri berat mencapai USD 50 miliar per tahun, dengan 70% di antaranya berasal dari kegagalan peralatan yang sebenarnya sudah memiliki tanda-tanda degradasi visual sejak 30-90 hari sebelum *breakdown*.

Urgensi ekonomis ini semakin tajam dengan hadirnya konsep **Industry 4.0** dan **Industrial Internet of Things (IIoT)** yang membanjiri lini produksi dengan sensor multimodal (citra termal, *vibration*, akustik, dan data proses). Pearson (2024) berargumen bahwa data citra resolusi tinggi yang dikumpulkan dari kamera inspeksi (termasuk *drone-based inspection*, *fixed-mount vision system*, dan *borescope*) merupakan sumber informasi yang kaya namun selama ini kurang dieksploitasi secara optimal karena keterbatasan algoritma *hand-crafted feature extraction*. Disinilah CNN berperan sebagai *automatic feature extractor* yang mampu menangkap pola degradasi (retakan mikro, korosi, *spalling*, kebocoran, *overheating*) dengan generalisasi yang superior dibanding pendekatan *Support Vector Machine* (SVM) atau *Random Forest* tradisional.

Secara paralel, komplemen penting dari strategi PdM adalah pengendalian proses yang adaptif, sebagaimana ditunjukkan oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* ([DOI: 10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)). Ketiga peneliti ini mengusulkan **Model Predictive Control (MPC) berbasis *Physics-Informed Neural Networks* (PINN)** yang memungkinkan sistem kontrol memperhitungkan dinamika fisika proses secara eksplisit di dalam fungsi kerugian jaringan saraf. Sinergi antara deteksi anomali visual (Pearson, 2024) dan MPC fisika-informatif (Patel et al., 2024) membentuk kerangka *closed-loop* yang utuh: anomali terdeteksi → akar penyebab fisika diprediksi → kontrol adaptif diterapkan sebelum degradasi menjadi kegagalan. Inilah konteks industri kontemporer yang melatari pentingnya integrasi kedua pendekatan dalam modul spesialisasi Teknik Industri ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Pearson (2024) membangun kerangka deteksi anomali di atas arsitektur *encoder-decoder* yang dilatih secara *semi-supervised* pada data kondisi normal. Formulasi matematis dasarnya mengikuti paradigma **reconstruction-based anomaly detection**. Diberikan citra masukan $x \in \mathbb{R}^{H \times W \times C}$, encoder $f_{\theta_e}: \mathcal{X} \rightarrow \mathcal{Z}$ memetakan citra ke *latent space* berdimensi rendah $z \in \mathbb{R}^{d}$, dan decoder $f_{\theta_d}: \mathcal{Z} \rightarrow \mathcal{X}$ merekonstruksi citra $\hat{x}$.

Fungsi kerugian rekonstruksi yang digunakan adalah kombinasi *Mean Squared Error* (MSE) dan *Structural Similarity Index* (SSIM):

$$
\mathcal{L}_{\text{recon}}(x, \hat{x}) = \lambda_1 \, \|x - \hat{x}\|_2^2 + \lambda_2 \, \big(1 - \text{SSIM}(x, \hat{x})\big)
$$

dengan $\lambda_1, \lambda_2 \in \mathbb{R}^+$ adalah bobot regularisasi. Setelah model terlatih, **anomaly score** untuk citra baru didefinisikan sebagai:

$$
A(x) = \|x - f_{\theta_d}(f_{\theta_e}(x))\|_2^2
$$

Klasifikasi anomali dilakukan dengan ambang batas $\tau$ yang ditentukan secara statistik, misalnya menggunakan *Percentile-Based Threshold*:

$$
\tau = Q_{1-\alpha}\big(\{A(x_i)\}_{i=1}^{N_{\text{val}}}\big)
$$

dengan $\alpha$ adalah tingkat signifikansi yang ditetapkan (umumnya 0.01–0.05 untuk aplikasi kritis keselamatan).

### 2.2 Physics-Informed Neural Networks dalam MPC

Patel et al. (2024) memformulasikan PINN sebagai penyelesaian persamaan diferensial parsial (PDE) yang mengatur dinamika proses, misalnya *reaction-diffusion* atau *heat equation*:

$$
\frac{\partial u}{\partial t} + \mathcal{N}[u; \lambda] = 0, \quad x \in \Omega, \quad t \in [0, T]
$$

Jaringan saraf $u_{\theta}(x, t)$ menggantikan solusi analitik dan fungsi kerugian totalnya adalah:

$$
\mathcal{L}_{\text{PINN}} = w_d \mathcal{L}_{\text{data}} + w_p \mathcal{L}_{\text{physics}} + w_b \mathcal{L}_{\text{boundary}}
$$

dengan:

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_p} \sum_{i=1}^{N_p} \left\| \frac{\partial u_{\theta}}{\partial t}\bigg|_{x_i, t_i} + \mathcal{N}[u_{\theta}; \lambda]\bigg|_{x_i, t_i} \right\|_2^2
$$

Untuk aplikasi MPC, masalah optimasi pada setiap *sampling time* $k$ adalah:

$$
\min_{u_{k}, \dots, u_{k+H_p-1}} J = \sum_{j=0}^{H_p-1} \big( (y_{k+j} - y_r)^T Q (y_{k+j} - y_r) + u_{k+j}^T R \, u_{k+j} \big)
$$

tunduk pada kendala dinamika PINN $y_{k+1} = u_{\theta}(y_k, u_k)$ dan kendala operasional $u_{\min} \leq u_k \leq u_{\max}$.

### 2.3 Formulasi Keputusan Penting (Penting)

Secara manajerial, keputusan pemeliharaan diambil dengan membandingkan **expected cost of failure** $C_f$ dengan **expected cost of preventive action** $C_p$:

$$
\mathbb{E}[C_f \mid A(x) > \tau] \cdot P(A(x) > \tau) > \mathbb{E}[C_p] \quad \Rightarrow \quad \text{Lakukan tindakan preventif}
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka deteksi anomali visual dan MPC-PINN mengikuti SOP berlapis yang diadopsi dari standar **ISO 23247** (Digital Twin framework for manufacturing) dan **ISO 13373** (Condition monitoring and diagnostics of machines):

**Tahap 1 — Akuisisi Data & Kalibrasi Sensor Visual**
- Pemasangan kamera industri (resolusi minimum 1920×1080, *frame rate* ≥30 fps) dengan pencahayaan terkontrol (*diffuse LED ring* atau *structured light*).
- Kalibrasi geometrik menggunakan papan checkerboard untuk koreksi distorsi lensa.

**Tahap 2 — Pra-pemrosesan & Augmentasi**
- Normalisasi piksel ke $[0,1]$, *resize* ke $224 \times 224$, segmentasi ROI (Region of Interest) untuk memfokuskan area inspeksi.
- Augmentasi: rotasi $\pm 15°$, *flip* horizontal, variasi brightness $\pm 20\%$, *cutout* regularization untuk mencegah overfitting.

**Tahap 3 — Pelatihan Model**
- Arsitektur: backbone CNN (ResNet-50 atau EfficientNet-B3) pretrained pada ImageNet, diikuti *latent dimension* $d = 128$.
- Optimizer: Adam dengan *learning rate* $\eta = 10^{-4}$ dan *scheduler* CosineAnnealing.
- Epoch: 100, *batch size*: 32, *early stopping* dengan *patience* = 10.

**Tahap 4 — Validasi & Penentuan Threshold**
- Validasi silang 5-fold pada data berlabel anomali.
- Penentuan $\tau$ menggunakan kurva ROC dan metrik **F1-score**, **AUPRC** (Area Under Precision-Recall Curve).

**Tahap 5 — Integrasi MPC-PINN (berdasarkan Patel et al., 2024)**
- Identifikasi PDE proses menggunakan *symbolic regression* atau *Sparse Identification of Nonlinear Dynamics* (SINDy).
- Pelatihan PINN dengan bobot $w_d = 1.0$, $w_p = 10.0$, $w_b = 5.0$ (mengikuti rekomendasi Patel et al., 2024).
- Implementasi MPC dalam horizon $H_p = 20$ langkah dengan solver *Sequential Quadratic Programming* (SQP) pada PLC industri.

**Tahap 6 — Pemantauan Berkelanjutan & *Model Drift* Detection**
- Monitor performansi model secara *real-time* menggunakan *Population Stability Index* (PSI).
- *Retraining* terjadwal setiap 6 bulan atau ketika PSI > 0.25.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik petrokimia memiliki *heat exchanger* (HE) dengan risiko *fouling* (penumpukan deposit pada permukaan perpindahan panas). Inspeksi visual dilakukan setiap 7 hari menggunakan kamera termal. Total populasi HE: $N = 200$ unit.

### Langkah 1 — Perhitungan Anomaly Score pada Sampel Uji

Ambil citra termal pada unit HE-045 dengan distribusi piksel suhu pada area kritis $[T_{\min}, T_{\max}]$ sebagai *proxy* intensitas piksel. Misalkan model CNN terlatih menghasilkan rekonstruksi dengan galat:

| Region | MSE Rekonstruksi |
|--------|------------------|
| Pipa masuk (inlet) | $1.8 \times 10^{-4}$ |
| Bundel tabung | $7.3 \times 10^{-3}$ |
| Pipa keluar (outlet) | $2.1 \times 10^{-4}$ |

Anomaly score agregat (rata-rata terbobot) dengan bobot area kritis $w_1 = 0.5$, $w_2 = 0.3$, $w_3 = 0.2$:

$$
A(\text{HE-045}) = (0.5)(1.8 \times 10^{-4}) + (0.3)(7.3 \times 10^{-3}) + (0.2)(2.1 \times 10^{-4})
$$

$$
A(\text{HE-045}) =