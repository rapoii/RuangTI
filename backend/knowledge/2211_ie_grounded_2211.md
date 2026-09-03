# 2211 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah bertransformasi menjadi pilar strategis dalam manajemen aset industri modern, terutama sejak bergulirnya paradigma **Industri 4.0** dan **Smart Manufacturing**. Data dari International Society of Automation (ISA) menunjukkan bahwa organisasi manufaktur mengalami kerugian produksi rata-rata **USD 50 miliar per tahun** akibat *unplanned downtime*, dengan proporsi kegagalan peralatan yang sebenarnya dapat diprediksi melalui pola degradasi multimodal—sensorik, akustik, termal, dan visual—jauh sebelum *failure* terjadi (Pearson, 2024). Kerangka konseptual yang diajukan Pearson dalam makalah *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance* (DOI: 10.2139/ssrn.5266589) menyoroti pergeseran paradigma dari *reactive maintenance* menuju *condition-based* dan *predictive maintenance*, di mana citra visual dari kamera industri, drone inspeksi, maupun *endoscope* menjadi sumber data primer untuk inferensi kondisi aset secara *real-time*.

Urgensi ekonomis dari deteksi anomali visual sangat terasa di industri-industri capital-intensive. Pada pabrik semen dan petrokimia, satu kali *shutdown* tak terjadwal pada *rotary kiln* atau *cracker furnace* dapat menimbulkan kerugian hingga **USD 250.000–500.000 per jam** karena hilangnya *throughput*, biaya *start-up* ulang, dan kerusakan kaskade pada lini hilir. Pada industri semikonduktor, *yield loss* akibat *vibration-induced misalignment* pada *lithography stepper* dapat bernilai jutaan dolar per wafer yang terbuang. Dalam konteks ini, Convolutional Neural Networks (CNN) menawarkan kapabilitas unggulan untuk mengekstraksi *spatial hierarchies* dari citra termal, akustik spektogram, maupun *high-resolution RGB*, dengan akurasi yang secara konsisten melampaui inspeksi visual manual maupun algoritma *hand-crafted feature extraction* tradisional seperti Scale-Invariant Feature Transform (SIFT) atau Histogram of Oriented Gradients (HOG).

Pearson (2024) menekankan bahwa integrasi CNN dengan arsitektur *edge computing* dan protokol komunikasi OPC UA memungkinkan *closed-loop predictive maintenance*, di mana keputusan pemeliharaan (jadwal inspeksi, *replacement*, *re-calibration*) tidak hanya berdasarkan ambang batas statistik statis, melainkan pada *anomaly score* yang dipelajari dari data historis kegagalan. Pendekatan ini paralel dengan kerangka *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINN) yang dikemukakan oleh Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: 10.1016/j.ifacol.2024.08.431), di mana model hibrida *data-driven–physics-based* digunakan untuk mengendalikan sistem proses secara optimal dengan tetap menghormati kendala fisika dan operasional. Sinergi keduanya merepresentasikan visi *cognitive manufacturing system* yang adaptif, *self-diagnosing*, dan *self-optimizing*.

Dari perspektif **Rekayasa Sistem Industri**, persoalan utama yang hendak diatasi dapat diformulasikan sebagai berikut: bagaimana meminimalkan *expected total cost of ownership* (TCO) suatu aset kritis selama *life-cycle*-nya dengan menentukan kebijakan inspeksi dan intervensi yang paling informatif, sambil mempertahankan tingkat keselamatan, kualitas produk, dan kepatuhan regulasi (misalnya ISO 55000 untuk *asset management*, serta OSHA 1910 untuk keselamatan operasional). Di sinilah peran *computer vision* dan *deep learning* menjadi *disruptive enabler*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Klasifikasi Citra

Secara matematis, operasi konvolusi 2-D pada lapisan konvolusional CNN didefinisikan sebagai:

$$
y_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} w_{m,n}^{(l)} \cdot x_{i+m,\,j+n}^{(l-1)} + b^{(l)}\right)
$$

di mana $x^{(l-1)}$ adalah *feature map* dari lapisan sebelumnya, $w^{(l)}_{m,n}$ adalah *kernel weights* berukuran $k \times k$, $b^{(l)}$ adalah *bias*, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear—umumnya **Rectified Linear Unit (ReLU)** yang didefinisikan sebagai $\sigma(z) = \max(0, z)$. Untuk tugas klasifikasi biner (anomali vs. normal) pada lapisan output, fungsi aktivasi **sigmoid** digunakan:

$$
P(\text{anomaly} \mid \mathbf{x}) = \frac{1}{1 + e^{-(\mathbf{w}^\top \mathbf{x} + b)}}
$$

sedangkan untuk klasifikasi multi-kelas (misalnya jenis kerusakan: *corrosion*, *crack*, *deformation*, *wear*), digunakan **softmax**:

$$
P(y = k \mid \mathbf{x}) = \frac{e^{\mathbf{w}_k^\top \mathbf{x} + b_k}}{\sum_{j=1}^{K} e^{\mathbf{w}_j^\top \mathbf{x} + b_j}}
$$

Fungsi kerugian (*loss function*) untuk klasifikasi biner adalah **Binary Cross-Entropy (BCE)**:

$$
\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log \hat{y}_i + (1 - y_i)\log(1 - \hat{y}_i)\right]
$$

di mana $y_i \in \{0,1\}$ adalah label aktual (1 untuk anomali, 0 untuk normal) dan $\hat{y}_i$ adalah probabilitas prediksi. Pelatihan dilakukan dengan *mini-batch stochastic gradient descent* (SGD) atau optimizers adaptif seperti **Adam**, dengan laju pembelajaran $\eta$ yang umumnya ditetapkan pada orde $10^{-4}$ hingga $10^{-3}$.

### 2.2 Formulasi Autoencoder untuk Anomali Visual

Untuk skenario di mana data anomali bersifat langka (*class-imbalanced*), Pearson (2024) mengadopsi pendekatan **Convolutional Autoencoder (CAE)** untuk *unsupervised anomaly detection*. Model ini merekonstruksi citra input $\mathbf{x}$ melalui *encoder* $f_e: \mathcal{X} \to \mathcal{Z}$ ke ruang laten $\mathbf{z} \in \mathbb{R}^d$, dan *decoder* $f_d: \mathcal{Z} \to \mathcal{X}$ untuk menghasilkan rekonstruksi $\hat{\mathbf{x}}$. Fungsi kerugian rekonstruksi:

$$
\mathcal{L}_{\text{rec}}(\mathbf{x}, \hat{\mathbf{x}}) = \frac{1}{M}\sum_{p=1}^{M}\left(x_p - \hat{x}_p\right)^2 = \frac{1}{M}\|\mathbf{x} - f_d(f_e(\mathbf{x}))\|_2^2
$$

*Anomaly score* untuk citra baru $\mathbf{x}_{\text{new}}$ dihitung sebagai:

$$
s(\mathbf{x}_{\text{new}}) = \left\|\mathbf{x}_{\text{new}} - f_d(f_e(\mathbf{x}_{\text{new}}))\right\|_2^2
$$

dan keputusan anomali ditetapkan melalui *threshold* $\tau$ yang dikalibrasi menggunakan *validation set* untuk memenuhi tingkat *false positive rate* yang dapat diterima (umumnya $\alpha = 0.05$ atau $\alpha = 0.01$).

### 2.3 Integrasi dengan Physics-Informed Neural Networks (PINN) untuk Sistem Kendali

Paralel dengan Pearson (2024), Patel, Bhartiya, dan Gudi (2024) merumuskan arsitektur **Physics-Informed Neural Network (PINN)** yang menggabungkan *data-driven learning* dengan kendala persamaan diferensial parsial (PDE) yang governing pada sistem proses. Untuk sistem proses linier waktu-invariant dengan state $\mathbf{x}(t) \in \mathbb{R}^{n_x}$ dan input kendali $\mathbf{u}(t) \in \mathbb{R}^{n_u}$:

$$
\dot{\mathbf{x}}(t) = A\mathbf{x}(t) + B\mathbf{u}(t), \quad \mathbf{y}(t) = C\mathbf{x}(t)
$$

maka PINN meminimalkan *combined loss function*:

$$
\mathcal{L}_{\text{PINN}} = \lambda_{\text{data}} \mathcal{L}_{\text{data}} + \lambda_{\text{physics}} \mathcal{L}_{\text{physics}}
$$

di mana:

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{j=1}^{N_p}\left\|\hat{\mathbf{x}}(t_j) - A\mathbf{x}(t_j) - B\mathbf{u}(t_j)\right\|_2^2
$$

Dengan formulasi ini, jaringan saraf "diberitahu" tentang struktur fisika sistem, sehingga generalisasi pada *out-of-distribution* data meningkat secara signifikan dibanding *pure black-box* neural network.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi