# 2062 — Peningkatan Kinerja Pesawat Udara melalui Machine Learning: Tinjauan Sistematis dan Aplikasi Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Improving aircraft performance using machine learning: A review
**Jurnal & Sitasi Utama:** Soledad Le Clainche, Esteban Ferrer, S. Gibson (2023). *Aerospace Science and Technology*. DOI: [https://doi.org/10.1016/j.ast.2023.108354](https://doi.org/10.1016/j.ast.2023.108354)
**Sitasi Pendukung:** Soledad Le Clainche, Esteban Ferrer, S. Gibson (2022). *arXiv (Cornell University)*. DOI: [https://doi.org/10.48550/arxiv.2210.11481](https://doi.org/10.48550/arxiv.2210.11481)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tantangan multidimensi yang semakin kompleks pada dekade ketiga abad ke-21. Berdasarkan tinjauan komprehensif yang dilakukan oleh Le Clainche, Ferrer, dan Gibson (2023) dalam *Aerospace Science and Technology*, penerapan *machine learning* (ML) telah muncul sebagai katalis transformasional yang menyentuh seluruh spektrum disiplin rekayasa pesawat udara — dari dinamika fluida fundamental, aerodinamika, akustik, pembakaran, hingga *structural health monitoring* (SHM). Konteks industrialisasi teknologi ini tidak dapat dipisahkan dari tiga tekanan strategis simultan: (1) target dekarbonisasi aviasi yang mensyaratkan pengurangan emisi CO₂ sebesar 50% per penumpang-kilometer pada tahun 2050 (visi IATA *Fly Net Zero 2050*), (2) eskalasi biaya operasional yang didorong oleh harga avtur yang volatil, dan (3) permintaan kapasitas penumpang yang diproyeksikan tumbuh pada *compound annual growth rate* (CAGR) 4,3% per tahun (Boeing Commercial Market Outlook).

Urgensi ekonominya bersifat konkret. Le Clainche et al. (2023) menekankan bahwa reduksi koefisien hambatan aerodinamis ($C_D$) sebesar 1% saja pada armada *single-aisle* seperti Boeing 737 dapat menghemat hingga 400.000 galon bahan bakar per pesawat per tahun. Jika diterapkan pada seluruh armada global, potensi penghematan kolektif mencapai miliaran USD per tahun. Lebih lanjut, downtime pesawat yang dipicu oleh kerusakan struktural yang tidak terdeteksi dini menimbulkan kerugian pendapatan operasional hingga $150.000 per hari per pesawat (berdasarkan data industri MRO regional). Di sinilah ML menawarkan paradigma baru: menggantikan atau mengaugmentasi simulasi *Computational Fluid Dynamics* (CFD) berbasis *Navier-Stokes solvers* tradisional yang memerlukan waktu komputasi $O(n^3)$ hingga $O(n^4)$ — menjadi model prediktif yang berjalan dalam orde milidetik setelah fase pelatihan selesai.

Tinjauan Le Clainche et al. (2023) secara eksplisit menyatakan bahwa ML "is improving aircraft performance and these techniques will have a large impact in the near future." Pernyataan ini bukan sekadar retorika prospektif; melainkan sintesis dari bukti empiris lintas-disiplin yang dikumpulkan penulis dari berbagai sub-domain aerospace. Versi preprint dari artikel ini (Le Clainche, Ferrer, & Gibson, 2022, *arXiv*) memuat dasar metodologis yang sama dan telah menerima lebih dari 100 sitasi dalam komunitas riset aerodinamika dan ML, menandakan momentum ilmiah yang kuat.

Dalam konteks Teknik Industri, fenomena ini bukan sekadar persoalan teknologi dirgantara, melainkan studi kasus par excellence untuk *cyber-physical systems*, *digital twin*, dan *data-driven decision making* yang kini menjadi pilar Revolusi Industri 4.0. Integrasi ML ke dalam *product lifecycle management* pesawat — mulai dari desain konseptual, sertifikasi, operasi, hingga *end-of-life* — merepresentasikan peluang rekayasa sistem industri yang membutuhkan pendekatan holistik terhadap trade-off antara akurasi, interpretabilitas, *computational cost*, dan *regulatory compliance* (standar EASA CS-25 dan FAA Part 25).

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis ML dalam rekayasa aerospace yang diuraikan Le Clainche et al. (2023) bertumpu pada empat pilar matematis utama: (i) formulasi supervised/unsupervised learning sebagai *surrogate models* bagi persamaan diferensial parsial (PDP) aerodinamika, (ii) arsitektur *deep neural networks* (DNN) untuk ekstraksi fitur dari data CFD/eksperimen, (iii) formulasi *Gaussian Process Regression* (GPR) untuk *uncertainty quantification*, dan (iv) algoritma *reinforcement learning* untuk kontrol adaptif.

### 2.1 Persamaan Navier-Stokes sebagai Basis Formulasi

Dinamika fluida di sekitar profil aerodinamis pesawat direpresentasikan oleh Persamaan Navier-Stokes tak-mampat:

$$\rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \mathbf{f}_{\text{ext}}$$

dengan $\rho$ adalah densitas udara ($1,225\ \text{kg/m}^3$ pada kondisi ISA *sea level*), $\mathbf{u}$ adalah vektor kecepatan, $p$ adalah tekanan, $\mu$ adalah viskositas dinamis ($1,789 \times 10^{-5}\ \text{kg/(m·s)}$), dan $\mathbf{f}_{\text{ext}}$ adalah gaya eksternal. Tujuan utama aplikasi ML adalah mengaproksimasi operator $\mathcal{N}: \mathbf{u} \mapsto p, \mathbf{u}, \rho$ dengan fungsi parametrik $\hat{\mathcal{N}}_{\theta}(\mathbf{u})$ yang jauh lebih murah secara komputasional.

### 2.2 Formulasi Neural Network untuk Surrogate Aerodinamika

Untuk regresi koefisien hambatan dan angkat, jaringan saraf tiruan umpan-maju (*feedforward NN*) dengan $L$ lapisan memiliki formulasi:

$$\hat{y} = f_L \circ f_{L-1} \circ \cdots \circ f_1(\mathbf{x}; \theta), \quad f_l(\mathbf{h}) = \sigma_l(\mathbf{W}_l \mathbf{h} + \mathbf{b}_l)$$

di mana $\mathbf{W}_l \in \mathbb{R}^{n_l \times n_{l-1}}$ dan $\mathbf{b}_l \in \mathbb{R}^{n_l}$ adalah parameter lapisan ke-$l$, $\sigma_l$ adalah fungsi aktivasi (ReLU, tanh, atau swish), dan $\theta = \{\mathbf{W}_l, \mathbf{b}_l\}_{l=1}^{L}$ adalah himpunan parameter lengkap. Pelatihan dilakukan dengan minimisasi fungsi kerugian *Mean Squared Error*:

$$\mathcal{L}(\theta) = \frac{1}{N} \sum_{i=1}^{N} \left\| y_i - \hat{y}_i(\theta) \right\|^2 + \lambda \|\theta\|_2^2$$

di mana $\lambda$ adalah koefisien regularisasi L2 (weight decay) yang mencegah overfitting. Le Clainche et al. (2023) melaporkan bahwa dengan $N = 10.000$ sampel CFD, jaringan dengan dua hidden layers (masing-masing 128 neuron) mampu mencapai *coefficient of determination* $R^2 > 0{,}98$ untuk prediksi $C_L$ dan $C_D$.

### 2.3 Formulasi Convolutional Neural Networks untuk Aliran Visualisasi

Untuk data medan-alir 2D/3D (*velocity fields*), CNN digunakan dengan operasi konvolusi:

$$(\mathbf{F} * \mathbf{K})_{i,j} = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} \mathbf{F}_{i+m, j+n} \cdot \mathbf{K}_{m,n}$$

Fungsi kerugian yang umum untuk tugas rekonstruksi medan-alir adalah kombinasi L2 dengan istilah gradien:

$$\mathcal{L}_{\text{field}} = \alpha \mathcal{L}_{L2} + \beta \mathcal{L}_{\nabla} = \alpha \| \mathbf{U} - \hat{\mathbf{U}} \|_2^2 + \beta \| \nabla \mathbf{U} - \nabla \hat{\mathbf{U}} \|_2^2$$

dengan $\alpha, \beta > 0$ adalah hiperparameter yang mengontrol fidelitas kontur vorteks dan *shear layers*.

### 2.4 Formulasi Gaussian Process Regression untuk Uncertainty Quantification

GPR, yang banyak digunakan dalam tinjauan Le Clainche et al. (2023) untuk aplikasi SHM dan desain aerodinamis, dirumuskan sebagai:

$$\hat{f}(\mathbf{x}_*) = \mathbf{k}_*^\top (\mathbf{K} + \sigma_n^2 \mathbf{I})^{-1} \mathbf{y}$$

dengan $\mathbf{k}_* = [k(\mathbf{x}_*, \mathbf{x}_1), \ldots, k(\mathbf{x}_*, \mathbf{x}_N)]^\top$, $\mathbf{K}_{ij} = k(\mathbf{x}_i, \mathbf{x}_j)$, dan $\sigma_n^2$ adalah varians noise observasi. *Kernel* yang lazim dipakai adalah *Squared Exponential*:

$$k(\mathbf{x}_i, \mathbf{x}_j) = \sigma_f^2 \exp\left( -\frac{\|\mathbf{x}_i - \mathbf{x}_j\|^2}{2\ell^2} \right)$$

dengan $\sigma_f^2$ adalah *signal variance* dan $\ell$ adalah *length-scale*; kedua parameter ini dipelajari dengan *marginal likelihood maximization*.

### 2.5 Formulasi Reinforcement Learning untuk Kontrol Adaptif

Untuk aplikasi *flight control* dan *morphing wing*, Le Clainche et al. (2023) mendiskusikan penggunaan *Deep Q-Network* (DQN) dengan fungsi nilai:

$$Q^\pi(s, a) = \mathbb{E}_\pi \left[ \sum_{t=0}^{\infty} \gamma^t r_{t+1} \mid s_t = s, a_t = a \right]$$

dan *Bellman optimality equation*:

$$Q^*(s, a) = \mathbb{E}\left[ r + \gamma \max_{a'} Q^*(s', a') \mid s, a \right]$$

dengan $\gamma \in [0, 1)$ adalah *discount factor* dan $r$ adalah *reward* (misalnya invers dari *drag force*).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi ML dalam alur rekayasa pesawat udara mengikuti SOP berlapis yang Le Clainche et al. (2023) identifikasi sebagai kerangka *data-driven aerodynamics engineering*. Diagram alir berikut merepresentasikan sintesis SOP tersebut yang telah diadaptasi untuk konteks industri:

### Tahap 1: Akuisisi & Kurasi Data
1. **Pengumpulan data eksperimen** dari *wind tunnel* dan *flight test* (variabel: $C_L$, $C_D$, AoA, Mach number, Reynolds number).
2. **Generasi data CFD** dengan solver RANS/LES pada grid terstruktur atau tidak-terstruktur; resolusi tipikal $5{-}10 \times 10^6$ sel per konfigurasi.
3. **Pembersihan data** — menghapus pencilan dengan *z-score* $|z| > 3$ dan melakukan *imputation* terhadap data hilang dengan GPR.
4. **Normalisasi fitur**: $\tilde{x}_i = (x_i - \mu_x)/\sigma_x$ untuk memastikan konvergensi optimal.

### Tahap 2: Rekayasa Fitur (*Feature Engineering*)
1. Ekstraksi *dimensionless numbers*: $\text{Re}$, $\text{Ma}$, $C_L$, rasio aspek (*aspect ratio* AR), dan sudut *sweep*.
2. Pembentukan fitur polinomial dan interaksi orde-2 untuk menangkap non-linearitas.
3. Untuk data gambar medan-alir, augmentasi geometrik (*rotation*, *flip*) guna meningkatkan generalisasi.

### Tahap 3: Pelatihan & Validasi Model
1. **Partisi data**: 70% *training*, 15% *validation*, 15% *test set* (stratified sampling).
2. **Inisialisasi bobot**: *He initialization* atau *Xavier initialization* untuk mencegah vanishing/exploding gradients.
3. **Optimasi**: algoritma Adam dengan *learning rate* $\eta_0 = 10^{-3}$ dan *scheduler* *cosine annealing*.
4. **Early stopping** ketika validation loss tidak membaik selama $p = 20$ epoch.
5. **K-fold cross-validation** ($k = 5$) untuk estimasi generalisasi error.

### Tahap 4: Verifikasi, Validasi & Sertifikasi
1. **Benchmark terhadap data eksperimen tinggi-fidelity** (deflection sudut, transisi laminar-turbulen).
2. **Uncertainty quantification** dengan Monte Carlo Dropout atau Deep Ensembles.
3. **Dokumentasi sesuai EASA Concept Paper level 1–5** untuk AI dalam aviasi sipil.

### Tahap 5: Integrasi Operasional
1. **Deployment** ke *edge device* atau cloud (latency budget $< 50\ \text{ms}$ untuk kontrol *real-time*).
2. **Monitoring drift** model dengan *Population Stability Index