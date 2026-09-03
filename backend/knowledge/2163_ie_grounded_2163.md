# 2163 — Deteksi Anomali Visual dan Kontrol Prediktif Cerdas untuk Sistem Industri Modern: Integrasi Convolutional Neural Networks dan Physics-Informed Neural Networks

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* dan *smart manufacturing* telah memaksa pelaku industri untuk bertransformasi dari paradigma *reactive maintenance* (perawatan setelah kegagalan) menuju *predictive maintenance* (PdM) berbasis data dan kecerdasan buatan. Menurut laporan *International Society of Automation* (ISA), downtime tak terencana pada pabrik proses kontinu bernilai antara USD 10.000 hingga USD 250.000 per jam, dengan rata-rata penurunan kapasitas produksi 5–20% sepanjang siklus hidup aset. Dalam konteks inilah Pearson (2024) — melalui publikasi "*Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*" yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) — mengusulkan kerangka kerja deteksi anomali visual berbasis Convolutional Neural Network (CNN) yang mampu mengidentifikasi cacat permukaan, kebocoran, korosi, dan perubahan morfologi pada peralatan industri melalui analisis citra termal maupun RGB resolusi tinggi.

Urgensi ekonomis pendekatan ini tecermin dari tiga fenomena simultan. Pertama, biaya inspeksi visual manual oleh teknisi berpengalaman terus meningkat di tengah kelangkaan tenaga ahli (*workforce scarcity*). Kedua, infrastruktur *Industrial Internet of Things* (IIoT) sudah matang: kamera industri IP67 dengan resolusi 4K, edge gateway berbasis NVIDIA Jetson, dan jaringan 5G privat memungkinkan akuisisi citra secara real-time. Ketiga, ledakan data berlabel — termasuk *MIMII* (Malfunctioning Industrial Machine Investigation and Inspection), *MVTec AD*, dan *DAGM* — telah membuka ruang bagi pelatihan *deep learning* skala besar. Pearson (2024) mendemonstrasikan bahwa model CNN terlatih pada dataset tersebut dapat mencapai *F1-score* di atas 0,92 pada tugas klasifikasi anomali multi-kelas (*normal*, *crack*, *leak*, *corrosion*, *deformation*).

Di sisi komplementer, Patel, Bhartiya, dan Gudi (2024) dalam "*Model Predictive Control using Physics Informed Neural Networks for Process Systems*" yang dimuat di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memaparkan bagaimana Physics-Informed Neural Networks (PINNs) dapat menggantikan model first-principles yang mahal secara komputasional pada sistem kontrol prediktif (MPC). Integrasi keduanya — deteksi anomali visual sebagai *trigger* pemeliharaan dan PINN-MPC sebagai pengendali proses adaptif — menjadi arsitektur cyber-fisik yang menjawab kebutuhan *self-optimizing* dan *self-healing* pada pabrik masa depan. Konteks industri yang relevan mencakup *oil & gas*, petrokimia, pulp & paper, serta *semiconductor fab* di mana setiap detik downtime bernilai ribuan dolar dan satu *false positive* inspeksi dapat menghentikan lini produksi bernilai puluhan juta dolar.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Citra Anomali

CNN mengekstraksi fitur hierarkis melalui operasi konvolusi, aktivasi non-linear, dan *pooling*. Untuk citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$, fitur pada lapisan konvolusional ke-$l$ didefinisikan sebagai:

$$y_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} \sum_{c=0}^{C^{(l-1)}-1} w_{m,n,c}^{(l)} \cdot x_{i+m, j+n, c}^{(l-1)} + b^{(l)}\right)$$

dengan $k_h, k_w$ adalah dimensi kernel, $w_{m,n,c}^{(l)}$ adalah bobot yang dapat dipelajari, $b^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi ReLU: $\sigma(z) = \max(0, z)$. Pearson (2024) menggunakan arsitektur *transfer learning* dari ResNet-50 yang telah dilatih pada ImageNet, kemudian melakukan *fine-tuning* pada empat lapisan akhir dengan dataset anomali industri.

Untuk tugas klasifikasi multi-kelas, lapisan *fully connected* terakhir menerapkan fungsi *softmax*:

$$\hat{y}_c = \frac{\exp(z_c)}{\sum_{c'=1}^{K}\exp(z_{c'})}, \quad c = 1, 2, \ldots, K$$

Fungsi kerugian *categorical cross-entropy* meminimalkan divergensi antara distribusi prediksi dan distribusi sebenarnya:

$$\mathcal{L}_{\text{CE}} = -\frac{1}{N}\sum_{i=1}^{N} \sum_{c=1}^{K} y_{i,c} \log(\hat{y}_{i,c})$$

Optimasi dilakukan dengan *Adam optimizer* pada *learning rate* $\eta = 10^{-4}$ dengan *decay* eksponensial.

### 2.2 Rekonstruksi Autoencoder dan Skor Anomali

Untuk deteksi anomali tanpa pengawasan (*unsupervised*), Pearson (2024) mengadopsi *Convolutional Autoencoder* (CAE) yang meminimalkan *reconstruction error*:

$$\mathcal{L}_{\text{AE}}(\theta_E, \theta_D) = \frac{1}{N}\sum_{i=1}^{N} \left\| \mathbf{x}_i - D_\phi(E_\psi(\mathbf{x}_i)) \right\|^2_2$$

di mana $E_\psi(\cdot)$ adalah *encoder* dan $D_\phi(\cdot)$ adalah *decoder*. Skor anomali untuk citra baru $\mathbf{x}_{\text{new}}$ adalah:

$$s(\mathbf{x}_{\text{new}}) = \left\| \mathbf{x}_{\text{new}} - D_\phi(E_\psi(\mathbf{x}_{\text{new}})) \right\|^2_2$$

Keputusan anomali ditetapkan oleh ambang $\tau$ yang dioptimasi melalui analisis kurva ROC pada set validasi:

$$\text{label}(\mathbf{x}) = \begin{cases} 1 \; (\text{anomali}) & \text{jika } s(\mathbf{x}) > \tau \\ 0 \; (\text{normal}) & \text{selainnya} \end{cases}$$

### 2.3 Physics-Informed Neural Networks untuk MPC

Patel dkk. (2024) mengusulkan PINN sebagai