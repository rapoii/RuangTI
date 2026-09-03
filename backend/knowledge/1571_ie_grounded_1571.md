# 1571 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya & Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance*, PdM) telah bertransformasi dari pendekatan getaran dan akustik klasik menjadi paradigma视觉 yang digerakkan oleh pembelajaran mendalam, seiring dengan masifnya ketersediaan kamera resolusi tinggi, sensor *hyperspectral*, dan *edge computing* di lantai pabrik. Studi Pearson (2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyoroti bahwa inspeksi visual manual memiliki kelemahan struktural: kelelahan operator, subjektivitas penilaian, serta tingkat deteksi (*true positive rate*) yang sering kali di bawah 70% untuk cacat *low-contrast* seperti retak mikro, korosi awal, atau *delaminasi* pada lapisan isolasi. Ketidakpastian ini memicu biaya *unplanned downtime* yang, menurut berbagai laporan industri proses, dapat mencapai USD 50.000–250.000 per jam pada sektor *oil & gas*, petrokimia, dan *semiconductor fab*.

Urgensi ekonomi ini diperparah oleh fakta bahwa sekitar 70% kegagalan peralatan rotasi (pompa sentrifugal, kompresor, motor listrik) bermula dari anomali permukaan yang seharusnya dapat dideteksi melalui citra statis atau *thermal imaging*. Pearson (2024) berargumen bahwa konvolusi dua dimensi (2D-CNN) dan arsitektur *autoencoder* mampu menekan *miss rate* hingga di bawah 5% pada dataset benchmark MVTec AD dan NEU-DET, sekaligus mengurangi *human-in-the-loop inspection time* hingga 80%. Secara paralel, integrasi dengan kendali prediktif berbasis *physics-informed neural networks* (PINN) yang dikemukakan oleh Patel, Bhartiya & Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memungkinkan sistem PdM tidak hanya mendeteksi tetapi juga memproyeksikan lintasan degradasi komponen ke dalam horizon kendali MPC, sehingga keputusan pergantian *spare part* dan jadwal shutdown menjadi optimal secara *total cost of ownership*. Konteks Industri 4.0 dan *digital twin* menjadikan integrasi CNN–PINN–MPC sebagai arsitektur referensi untuk pabrik pintar (*smart factory*) generasi berikutnya.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Operasi Konvolusi dan Ekstraksi Fitur

Inti dari arsitektur CNN Pearson (2024) adalah operasi konvolusi diskrit 2D terhadap citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dengan kernel $W \in \mathbb{R}^{k_h \times k_w \times C}$:

$$
Y_{i,j} = \sigma\!\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} W_{m,n}\, X_{i+m,\,j+n} + b\right)
$$

dengan $\sigma(\cdot)$ merupakan fungsi aktivasi non-linear (umumnya ReLU: $\sigma(x) = \max(0,x)$), $b$ adalah *bias*, dan $Y_{i,j}$ adalah *feature map* keluaran. Penumpukan beberapa lapisan konvolusi dengan operasi *max-pooling* memungkinkan hierarki fitur dari *edge* tingkat rendah hingga pola cacat tingkat tinggi.

### 2.2 Formulasi Autoencoder untuk Deteksi Anomali

Untuk skenario *unsupervised* di mana label cacat稀少 (*rare defect*), Pearson (2024) mengusulkan arsitektur *convolutional autoencoder* (CAE). Encoder $E(\cdot)$ memetakan citra $x$ ke *latent space* $z = E(x) \in \mathbb{R}^d$, sedangkan decoder $D(\cdot)$ merekonstruksinya menjadi $\hat{x} = D(z)$. Fungsi kerugian rekonstruksi:

$$
\mathcal{L}_{\text{AE}} = \frac{1}{N}\sum_{i=1}^{N}\bigl\|x_i - D(E(x_i))\bigr\|_2^2
$$

Skor anomali didefinisikan sebagai jarak rekonstruksi:

$$
A(x) = \bigl\|x - D(E(x))\bigr\|_2^2
$$

Keputusan klasifikasi diambil melalui *threshold* $\tau$ yang ditetapkan dari distribusi skor pada data normal: $A(x) > \tau \Rightarrow$ anomali.

### 2.3 Formulasi Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya & Gudi (2024) mengembangkan kerangka PINN yang menggabungkan dinamika fisis (PDE/ODE) ke dalam jaringan saraf. Untuk sistem proses dengan state $x(t) \in \mathbb{R}^n$ dan masukan kendali $u(t)$, model surrogate $\hat{x}_\theta(t)$ dibatasi oleh persamaan residu fisis:

$$
\mathcal{F}\!\left(\hat{x}_\theta(t),\, \frac{d\hat{x}_\theta}{dt},\, u(t)\right) = 0
$$

Fungsi kerugian total PINN:

$$
\mathcal{L}_{\text{PINN}} = \underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d}\bigl\|x_i^{\text{data}} - \hat{x}_\theta(t_i)\bigr\|^2}_{\mathcal{L}_{\text{data}}} \;+\; \lambda\underbrace{\frac{1}{N_f}\sum_{j=1}^{N_f}\bigl\|\mathcal{F}\bigl(\hat{x}_\theta(t_j)\bigr)\bigr\|^2}_{\mathcal{L}_{\text{fisika}}}
$$

dengan $\lambda$ adalah *hyperparameter* penyeimbang. Model ini kemudian disubstitusikan ke dalam masalah MPC:

$$
\min_{u_0,\ldots,u_{N-1}} \sum_{k=0}^{N-1}\bigl\|x_{k} - x^{\text{ref}}\bigr\|_Q^2 + \|u_k\|_R^2
$$

$$
\text{s.t.}\quad x_{k+1} = f_{\theta}(x_k, u_k),\quad x_0 = x(t_0),\quad u_k \in \mathcal{U}
$$

dengan $Q \succ 0$ dan $R \succ 0$ merupakan matriks bobot biaya keadaan dan upaya kendali.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti SOP terstruktur enam tahap yang diadopsi dari standar **ISO 13374** (*Condition Monitoring and Diagnostics of Machines*) dan **ISO/IEC 23053** (*AI Trustworthiness*):

1. **Akuisisi Data Citra.** Penempatan kamera industri (*line-scan*, *area-scan*, atau *thermal*) pada posisi tetap di sepanjang lini produksi dengan pencahayaan terkontrol (diffuse LED ring, lux $\geq 500$). Resolusi minimal 1024×1024 piksel per frame, *frame rate* disesuaikan dengan kecepatan konveyor.
2. **Pra-pemrosesan.** Normalisasi intensitas $X_{\text{norm}} = (X - \mu)/\sigma$, augmentasi geometris (rotasi, flip, *crop*), dan segmentasi ROI (*region of interest*) untuk memfokuskan area inspeksi.
3. **Pelatihan Model.** Arsitektur baseline: *Modified U-Net* atau *ResNet-18* untuk klasifikasi; *CAE* untuk deteksi tanpa label. Optimizer Adam dengan *learning rate* $\eta = 10^{-4}$, *batch size* 32, *early stopping* berdasarkan *validation loss*.
4. **Kalibrasi Threshold.** Menggunakan distribusi $A(x)$ pada validation set normal; pilih $\tau$ pada quantile 95–99% tergantung toleransi risiko.
5. **Inferensi Real-Time.** Deploy model ke *edge device* (NVIDIA Jetson, Intel OpenVINO) dengan *inference latency* target $\leq 50$ ms per citra.
6. **Integrasi CM