# 2883 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* telah mengubah secara fundamental paradigma pemeliharaan aset industri dari pendekatan reaktif (*run-to-failure*) dan preventif berbasis jadwal menuju *predictive maintenance* (PdM) berbasis data. Dalam konteks ini, Pearson (2024) melalui paper yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) mengusulkan arsitektur *Convolutional Neural Networks* (CNN) untuk mendeteksi anomali visual pada peralatan industri kritis seperti pompa sentrifugal, kompresor, motor listrik, dan *heat exchanger*. Urgensi riset ini didorong oleh data empiris yang menunjukkan bahwa biaya *unplanned downtime* pada fasilitas manufaktur dan *oil & gas* dapat mencapai USD 50.000 hingga USD 250.000 per jam kejadian, dengan kontribusi kegagalan peralatan mekanis terhadap total downtime industri berkisar 35–45%. Anomali seperti retakan mikro pada *bearing race*, kebocoran *gasket*, korosi permukaan, dan overheat pada *insulator* sering kali memiliki *signature* visual—baik langsung melalui inspeksi visual maupun tidak langsung melalui citra termal (*thermography*), getaran spektrogram, atau radiografi—yang sebelumnya hanya dapat diidentifikasi oleh teknisi ahli dengan pengalaman bertahun-tahun.

Pearson (2024) menekankan bahwa pendekatan inspeksi manual memiliki tiga kelemahan struktural: (1) subjektivitas tinggi yang menurunkan reprodusibilitas diagnosis, (2) keterbatasan *throughput* inspeksi pada fasilitas dengan ribuan aset (contoh: kilang dengan >10.000 item peralatan kritis), dan (3) ketidakmampuan menangkap degradasi *inter-stage* antar siklus inspeksi terjadwal. Pendekatan berbasis CNN menjawab keterbatasan ini melalui ekstraksi fitur hierarkis otomatis dari citra mentah, memungkinkan skalabilitas dan konsistensi keputusan. Sebagai komplemen metodologis, paper Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* ([10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memperkenalkan kerangka *Physics-Informed Neural Networks* (PINN) yang dapat diintegrasikan ke dalam *Model Predictive Control* (MPC) untuk sistem proses, memberikan referensi tentang bagaimana jaringan saraf dapat digabungkan dengan *first-principles* model fisis untuk meningkatkan robustness sistem kendali industri—anugerah yang relevan ketika anomali yang terdeteksi oleh CNN akan ditindaklanjuti melalui strategi kontrol preventif.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur CNN yang digunakan Pearson (2024) dibangun di atas operasi konvolusi diskrit dua-dimensi. Untuk citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dan kernel filter $K \in \mathbb{R}^{k_h \times k_w}$, *feature map* keluaran pada posisi $(i,j)$ didefinisikan sebagai:

$$
Y[i,j] = \sigma\left( \sum_{m=0}^{k_h-1} \sum_{n=0}^{k_w-1} X[i+m, j+n] \cdot K[m,n] + b \right)
$$

dengan $b$ adalah *bias* dan $\sigma$ adalah fungsi aktivasi non-linear. Pearson (2024) memilih *Rectified Linear Unit* (ReLU), $\sigma(x) = \max(0, x)$, karena konvergensi *gradient* yang lebih stabil dibanding sigmoid atau tanh pada lapisan dalam.

Untuk tugas *anomaly detection*, arsitektur yang banyak digunakan adalah *Convolutional Autoencoder* (CAE) atau *Variational Autoencoder* (CAE-VAE). Encoder memampatkan citra masukan ke *latent space* $\mathbf{z} \in \mathbb{R}^d$, sedangkan decoder merekonstruksinya menjadi $\hat{X}$. Skor anomali didefinisikan sebagai *reconstruction error*:

$$
s(\mathbf{x}) = \frac{1}{N}\sum_{i=1}^{N}\left\| x_i - \hat{x}_i \right\|_2^2
$$

dengan $\hat{x}_i = D(E(x_i))$ adalah rekonstruksi oleh pasangan encoder-decoder. keputusan anomali ditetapkan dengan thresholding:

$$
\text{Label}(\mathbf{x}) = \begin{cases} \text{Normal} & \text{jika } s(\mathbf{x}) \leq \tau \\ \text{Anomali} & \text{jika } s(\mathbf{x}) > \tau \end{cases}
$$

Threshold $\tau$ umumnya ditetapkan pada persentil ke-95 dari distribusi skor rekonstruksi pada data latih (semua normal), sehingga memenuhi target *false positive rate* $\alpha = 0.05$.

Untuk pelatihan, *binary cross-entropy* loss digunakan pada klasifikasi akhir:

$$
\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\left[ y_i \log \hat{y}_i + (1-y_i)\log(1-\hat{y}_i) \right]
$$

dengan $y_i \in \{0,1\}$ adalah label ground truth (0 = normal, 1 = anomali) dan $\hat{y}_i = \sigma(\mathbf{w}^\top \mathbf{h}_i + b)$ adalah probabilitas keluaran.

Sebagai pengayaan, kerangka Patel, Bhartiya, dan Gudi (2024) untuk MPC-PINN menggunakan fungsi obyektif:

$$
\min_{\mathbf{u}_0, \ldots, \mathbf{u}_{N-1}} J = \sum_{k=0}^{N-1} \left( \mathbf{x}_k - \mathbf{x}_{\text{ref}} \right)^\top Q \left( \mathbf{x}_k - \mathbf{x}_{\text{ref}} \right) + \mathbf{u}_k^\top R \mathbf{u}_k
$$

dengan kendala dinamika $\mathbf{x}_{k+1} = f_{\text{PINN}}(\mathbf{x}_k, \mathbf{u}_k)$, di mana $f_{\text{PINN}}$ adalah jaringan saraf yang dilatih dengan *physics-informed loss*:

$$
\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda_{\text{phys}} \mathcal{L}_{\text{phys}}
$$

dengan $\mathcal{L}_{\text{phys}}$ mengevaluasi residu persamaan diferensial yang mengatur proses (misalnya persamaan konservasi massa dan energi). Integrasi keduanya memungkinkan sistem kendali industri merespons anomali yang terdeteksi oleh CNN Pearson (2024) melalui *re-routing* atau *derating* operasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menyusun SOP implementasi sistem deteksi anomali berbasis CNN dalam tujuh tahap rekayasa yang saling tergantung. Tahap pertama adalah **akuisisi data citra** menggunakan kamera industri (RGB resolusi ≥1024×1024), kamera termal (rentang -20°C hingga 650°C, NETD ≤50 mK), atau sensor akustik spektrogram. Tahap kedua adalah **preprocessing** yang mencakup *resize* ke resolusi tetap, normalisasi intensitas piksel ke $[0,1]$, augmentasi data (*rotation*, *flip*, *brightness jitter*, *mixup*) untuk meningkatkan generalisasi, dan segmentasi ROI (*Region of Interest*) berbasis anotasi *bounding box* atau *semantic mask*.

Tahap ketiga adalah **perancangan arsitektur CNN**. Pearson (2024) membandingkan beberapa backbone: (a) *Custom Shallow CNN* (3–5 lapisan konvolusi) untuk kasus data terbatas; (b) *ResNet-50* atau *EfficientNet-B3* yang di-*pre-trained* pada ImageNet untuk transfer learning; (c) *Vision Transformer* (ViT) untuk dataset besar. Tahap keempat adalah **pelatihan model** dengan *optimizer* Adam ($\eta = 10^{-4}$, $\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$), *batch size* 32, dan *early stopping* berdasarkan *validation loss* dengan *patience* 10 epoch. Tahap kelima adalah **kalibrasi threshold** $\tau$ menggunakan kurva ROC pada *validation set* untuk mencapai target *recall* ≥0.95 pada kelas anomali.

Tahap keenam adalah **deployment** pada *edge device* (NVIDIA Jetson Orin, Intel OpenVINO) atau *cloud inference* (AWS SageMaker, Azure ML), dengan arsitektur *MLOps* mencakup *model registry*, *CI/CD pipeline*, dan *drift detection*. Tahap ketujuh adalah **loop闭环 umpan balik** (*closed-loop feedback*) di mana *false positives* dan *false negatives* yang teridentifikasi oleh teknisi lapangan dimasukkan kembali ke *retraining pipeline* (active learning), memastikan peningkatan akurasi secara berkelanjutan. SOP ini mengikuti kerangka ISO 55000 untuk manajemen aset dan selaras dengan standar ISA-95 untuk integrasi sistem manufacturing execution.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik petrokimia memiliki 200 pompa sentrifugal kritis. Inspeksi termal dilakukan mingguan menggunakan kamera FLIR T540. Dataset pelatihan: 1.200 citra termal kondisi normal dan 480 citra anomali (terklasifikasi oleh teknisi ahli). Dataset dipecah 70/15/15 untuk *train/validation/test*.

**Langkah 1 — Pelatihan Autoencoder.** Encoder: 4 lapisan konvolusi (32, 64, 128, 256 filter) masing-masing dengan kernel 3×3, *stride* 2, dan ReLU. Decoder simetris dengan *transposed convolution*. *