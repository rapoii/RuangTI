# 2707 — Deteksi Anomali Berbasis Citra dan Kendali Prediktif Menggunakan Jaringan Saraf Tiruan dalam Sistem Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur dan proses modern menghadapi tantangan struktural yang semakin kompleks di era *Industry 4.0*. Downtime tak terencana pada peralatan kritis seperti pompa sentrifugal, kompresor, motor listrik, dan reaktor proses kimia menimbulkan kerugian ekonomi yang signifikan. Menurut James Pearson (2024) dalam studi *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), biaya pemeliharaan tak terencana di sektor manufaktur global dapat mencapai USD 50 miliar per tahun, dengan kontribusi dominan berasal dari kegagalan bearing, korosi permukaan, dan kebocoran pada sistem perpipaan. Pearson secara eksplisit menunjukkan bahwa inspeksi visual manual yang masih menjadi praktik dominan memiliki *miss rate* hingga 18–22% untuk cacat minor seperti retak rambut (*hairline cracks*) dan *spalling* pada permukaan bearing.

Di sisi lain, paradigma kendali proses juga mengalami disrupsi. Patel, Bhartiya, dan Gudi (2024) dalam makalah *Model Predictive Control using Physics Informed Neural Networks for Process Systems* yang dipublikasikan di IFAC-PapersOnLine (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menegaskan bahwa integrasi antara *physics-informed neural networks* (PINNs) dengan *model predictive control* (MPC) mampu menjawab keterbatasan model first-principles yang nonlinier dan mahal secara komputasional. Kedua makalah ini, meskipun berfokus pada lapisan keputusan yang berbeda (yaitu lapisan *perception* versus lapisan *control*), merepresentasikan pilar teknologi kembar (*twin pillars*) dari sistem manufaktur otonom:感知/persepsi visual dan optimasi dinamis berbasis model.

Urgensi praktis dari integrasi kedua pendekatan ini dapat dirangkum dalam tiga dimensi. Pertama, dimensi **ekonomi**: pengurangan *unplanned downtime* sebesar 30–50% melalui deteksi dini anomali visual, sebagaimana ditunjukkan oleh Pearson, berdampak langsung pada OEE (*Overall Equipment Effectiveness*). Kedua, dimensi **keselamatan**: anomali termal atau struktural yang tak terdeteksi dapat memicu insiden keselamatan kerja serius, khususnya pada industri proses dengan fluida bertekanan tinggi. Ketiga, dimensi **regulasi dan keberlanjutan**: standar ISO 13373 (kondisi monitoring dan diagnostik mesin) dan ISO 55000 (manajemen aset) secara eksplisit mendorong adopsi teknologi *predictive*而非 reaktif.

Konteks Indonesia juga relevan: dengan target *Making Indonesia 4.0*, sektor manufaktur nasional membutuhkan leapfrog technologique untuk mengejar ketertinggalan produktivitas. Adopsi CNN-based anomaly detection dan PINN-MPC menjadi salah satu jalur strategis yang diusulkan Pearson (2024) dan Patel et al. (2024).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali Visual

Pearson (2024) mengadopsi arsitektur CNN berbasis *transfer learning* dari backbone ResNet-50 yang telah dilatih pada ImageNet, dengan *fine-tuning* pada empat lapis akhir (*layer*) untuk menangkap fitur spesifik anomali industri. Operasi konvolusi dua dimensi didefinisikan sebagai:

$$
\left( f * g \right)[i, j] = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} f[m, n] \cdot g[i-m, j-n]
$$

di mana $f$ adalah citra masukan berukuran $H \times W$, $g$ adalah *kernel* konvolusi berukuran $M \times N$, dan output adalah *feature map* $[i, j]$. Untuk task *binary anomaly classification* (normal versus anomali), Pearson menggunakan lapisan *fully connected* akhir dengan fungsi aktivasi sigmoid:

$$
\hat{y} = \sigma\left( \mathbf{W}_L \cdot \mathbf{a}_{L-1} + b_L \right) = \frac{1}{1 + e^{-(\mathbf{W}_L \cdot \mathbf{a}_{L-1} + b_L)}}
$$

di mana $\mathbf{a}_{L-1}$ adalah aktivasi lapisan sebelumnya. Fungsi kerugian yang digunakan adalah *binary cross-entropy* yang dimodifikasi menjadi *focal loss* untuk menangani *class imbalance* (citra anomali jauh lebih sedikit daripada citra normal):

$$
\mathcal{L}_{\text{focal}} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)
$$

dengan $\alpha_t = 0.75$ dan $\gamma = 2.0$ sesuai konfigurasi Pearson. Untuk menangani ketidakseimbangan ini, *precision-recall curve* dan *Area Under Curve* (AUC-PR) lebih diutamakan dibanding AUC-ROC.

### 2.2 Physics-Informed Neural Networks (PINN) untuk Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) mengusulkan arsitektur PINN yang menggabungkan *data loss* dengan *physics loss*:

$$
\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}}
$$

di mana:

$$
\mathcal{L}_{\text{data}} = \frac{1}{N_d} \sum_{i=1}^{N_d} \left| \hat{u}_{\theta}(x_i, t_i) - u_i^{\text{meas}} \right|^2
$$

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_f} \sum_{j=1}^{N_f} \left| \mathcal{R}\left( \hat{u}_{\theta}(x_j, t_j) \right) \right|^2
$$

$\mathcal{R}$ adalah residual dari persamaan diferensial parsial (PDP) governing process, misalnya model reaktor CSTR nonlinier:

$$
\frac{dC_A}{dt} = \frac{F}{V}(C_{A,in} - C_A) - k_0 e^{-E/RT} C_A
$$

PINN memastikan bahwa output jaringan $\hat{u}_{\theta}(x, t)$ tidak hanya cocok dengan data pengukuran, tetapi juga memenuhi hukum fisika melalui *soft constraint* pada *collocation points*. Dalam kerangka MPC, solusi PINN digunakan sebagai model surrogate untuk menyelesaikan masalah optimasi:

$$
\min_{\mathbf{u}_{0:H-1}} \sum_{k=0}^{H-1} \left( \mathbf{x}_k - \mathbf{x}_{\text{ref}} \right)^\top Q \left( \mathbf{x}_k - \mathbf{x}_{\text{ref}} \right) + \mathbf{u}_k^\top R \mathbf{u}_k
$$

dengan kendala $\mathbf{x}_{k+1} = f_{\text{PINN}}(\mathbf{x}_k, \mathbf{u}_k)$ dan $H$ adalah *prediction horizon*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi CNN Anomaly Detection (Pearson, 2024)

Tahapan implementasi sistematis yang dirancang Pearson (2024) mengikuti *cross-industry standard process for data mining* (CRISP-DM) yang telah disesuaikan:

1. **Akuisisi Data Citra**: Pemasangan kamera IP industri (resolusi minimum 1920×1080, rating IP67) di lokasi strategis (housing bearing, permukaan pipa, panel kontrol). Akuisisi pada tiga spektrum: visible, thermal (jika tersedia), dan ultraviolet untuk deteksi kebocoran fluoresen.
2. **Pre-processing**: Resizing ke 224×224, normalisasi pixel $x' = (x/255 - 0.485)/0.229$ (sesuai stats ImageNet), augmentasi melalui rotasi, flip, dan *mixup* untuk meningkatkan generalisasi.
3. **Pelatihan Model**: *Training set* 70%, *validation* 15%, *test* 15%. Optimizer Adam dengan *learning rate* $10^{-4}$ dan *batch size* 32. *Early stopping* berdasarkan *validation loss* dengan *patience* 10 epoch.
4. **Deployment Edge**: Model dikuantisasi (INT8) dan dideploy ke GPU edge (NVIDIA Jetson Orin) untuk inferensi real-time dengan latensi target < 50 ms per frame.
5. **Monitoring & Retraining Pipeline**: *Drift detection* berbasis PSI (*Population Stability Index*) untuk memicu *retraining* otomatis ketika degradasi terdeteksi.

### 3.2 SOP Integrasi PINN-MPC (Patel et al., 2024)

Arsitektur operasional yang dirancang Patel, Bhartiya, dan Gudi (2024) mengikuti diagram alir sebagai berikut:

- **Langkah 1**: Identifikasi PDP governing process (misalnya CSTR, distilasi kolom).
- **Langkah 2**: Generate *collocation points* secara acak dalam domain $(x, t)$.
- **Langkah 3**: Bangun jaringan saraf fully-connected dengan 4 hidden layer @ 64 neuron, aktivasi tanh.
- **Langkah 4**: Latih menggunakan loss gabungan $\mathcal{L}_{\text{total}}$ dengan bobot $\lambda_d = 1.0$ dan $\lambda_p = 0.1$.
- **Langkah 5**: Validasi model pada *test set* dengan metrik RMSE < 5% dari range variabel.
- **Langkah 6**: Integrasikan ke solver MPC (misalnya IPOPT) sebagai *surrogate model*.
- **Langkah 7**: *Closed-loop validation* menggunakan digital twin atau Hardware-in-the-Loop (HIL) sebelum deployment lapangan.

Standar acuan: ISO 22400 (KPI untuk operasi manufaktur), IEC 62443 (keamanan siber sistem industri), dan ISA-95 (integrasi enterprise-control system).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Inspeksi Visual Bearing Pompa Sentrifugal di Pabrik Kimia

**Parameter Input (berdasarkan skenario Pearson, 2024):**
- Jumlah citra pelatihan: $N = 4{,}800$ (rasio 9:1 normal:anomali)
- Citra anomali: 480 (berisi defect classes: *outer race defect*, *cage fault*, *ball wear*)
- Resolusi citra: $224 \times 224$ piksel
- *Batch size*: 32, *epochs* maks: 50
- Arsitektur: ResNet-50 pre-trained

**Perhitungan Step-by-Step:**

Setelah pelatihan, Pearson melaporkan metrik berikut pada *test set*:

$$
\text{Precision} = \frac{TP}{TP + FP} = \frac{68}{68 + 9} = 0.883
$$

$$
\text{Recall} = \frac{TP}{TP + FN} = \frac{68}{68 + 7} = 0.907
$$

$$
F_1 = 2 \cdot \frac{P \cdot R}{P + R} = 2 \cdot \frac{0.883 \cdot 0.907}{0.883 + 0.907} = 0.895
$$

dengan $TP = 68$, $FP = 9$, $FN = 7$, dan *true negatives* $TN = 416$. AUC-ROC yang dicapai adalah 0.964, sementara AUC-PR mencapai 0.912, mengindikasikan kemampuan diskriminatif yang sangat baik bahkan pada *class imbalance* yang tinggi.

**Interpretasi Manajerial:**
- Pengurangan inspeksi manual: 78% (dari 40 jam/minggu menjadi 8,8 jam/minggu untuk satu lini produksi).
- Deteksi dini 14 hari sebelum failure rata-rata, memberikan jendela perencanaan maintenance.
- *Return on Investment* (ROI) diestimasikan 240% pada tahun pertama berdasarkan asumsi *downtime cost* USD 12.000/jam dan 6 kegagalan yang berhasil dicegah.

### 4.2 Studi Kasus: PINN-MPC pada Continuous Stirred Tank Reactor (CSTR)

**Parameter Sistem (Patel et al., 2024):**
- Volume reaktor $V = 1{,}0$ m³
- Laju alir $F = 0{,}1$ m³/min
- Konsentrasi inlet $C_{A,in} = 1{,}0$ mol/L
- Suhu inlet $T_{in} = 350$ K
- Parameter Arrhenius: $k_0 = 7{,}2 \times 10^{10}$ min⁻¹, $E/R = 8750$ K
- Konsentrasi setpoint: $C_A^{sp} = 0{,}1$ mol/L
- Suhu *setpoint*: $T^{sp} = 350$ K
- *Prediction horizon* $H = 10$, *control horizon* $H_u = 3$
- Bobot MPC: $Q = \text{diag}(100, 1)$, $R = 0{,}01$

**Simulasi Numerik Closed-Loop:**

Patel, Bhartiya, dan Gudi (2024) mensimulasikan respons CSTR terhadap *setpoint tracking* dan *disturbance rejection*. Model PINN menghasilkan RMSE training $4{,}3 \times