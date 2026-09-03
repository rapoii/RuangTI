# 1827 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Eisei Mogi, Akira Mano, Shigeru Taniguchi (2024). *Ricerche di Matematica*. DOI: [https://doi.org/10.1007/s11587-026-01105-9](https://doi.org/10.1007/s11587-026-01105-9)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan aset manufaktur. Pergeseran arsitektur ini berpindah dari *reactive maintenance* (korektif setelah kegagalan) dan *preventive maintenance* (berbasis jadwal tetap) menuju *predictive maintenance* (PdM) yang digerakkan oleh data dan kondisi aktual peralatan. Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) memposisikan *Convolutional Neural Network* (CNN) sebagai instrumen utama untuk mendeteksi anomali visual pada peralatan industri kritis — termasuk turbin, pompa sentrifugal, bearing, dan panel kontrol — melalui akuisisi citra termal, citra可见 (visible), maupun citra akustik yang dikonversi menjadi spektogram.

Urgensi operasional dari adopsi deteksi anomali berbasis CNN ini bersifat multi-dimensi. Pertama, secara ekonomis, biaya *unplanned downtime* pada industri proses kontinu (minyak & gas, petrokimia, dan pembangkitan listrik) dapat mencapai USD 50.000–250.000 per jam menurut berbagai studi可靠度 industri. Kedua, secara teknis, degradasi peralatan sering kali bermanifestasi sebagai perubahan tekstur mikro pada permukaan, pola keausan pada gigi gear, atau distribusi termal anomali yang luput dari inspeksi visual manusia namun sangat representatif untuk dikenali oleh *deep convolutional features*. Ketiga, secara strategis, integrasi Computer Vision dengan PdM mendukung pencapaian *Overall Equipment Effectiveness* (OEE) di atas 85%, yang merupakan standar *world-class manufacturing* yang dirujuk dalam WER (World Economic Roundtable) Manufacturing Index.

Pearson (2024) menegaskan bahwa arsitektur CNN modern — seperti ResNet-50, EfficientNet-B3, dan Vision Transformer (ViT) hibrida — mampu mengekstraksi *spatial hierarchies* dari citra cacat dengan tingkat generalisasi yang melampaui ambang inspeksi visual konvensional (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)). Pendekatan ini semakin kuat ketika digabungkan dengan kerangka *Physics-Informed Neural Networks* (PINN) yang diperkenalkan oleh Mogi, Mano, dan Taniguchi (2024) dalam DOI [10.1007/s11587-026-01105-9](https://doi.org/10.1007/s11587-026-01105-9), di mana PINN menyuntikkan kendala persamaan diferensial parsial (PDB) ke dalam fungsi kerugian untuk menjamin konsistensi fisik dari solusi numerik, sebuah pendekatan yang kini mulai diadaptasikan untuk memodelkan dinamika *shock* dan *sub-shock* pada sistem mekanik industri.

Konteks Indonesia juga relevan: dengan target *Making Indonesia 4.0* yang dicanangkan sejak 2018, sektor manufaktur prioritas (makanan & minuman, tekstil, otomotif, elektronika, dan kimia) memerlukan teknologi PdM yang scalable dan cost-effective. Penerapan CNN-PdM pada UMKM manufaktur, misalnya, menghadapi tantangan berupa dataset yang tidak seimbang (*class imbalance*), ketersediaan *edge computing* terbatas, dan kebutuhan akan *transfer learning* dari model pra-terlatih seperti ImageNet.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

CNN merupakan arsitektur *deep learning* yang dioptimalkan untuk pemrosesan data grid (citra 2D) melalui tiga komponen utama: *convolutional layer*, *pooling layer*, dan *fully-connected layer*. Operasi konvolusi diskrit 2D didefinisikan sebagai:

$$
y_{i,j}^{(l)} = f\left( \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} w_{m,n}^{(l)} \cdot x_{i+m,\,j+n}^{(l-1)} + b^{(l)} \right)
$$

di mana $x^{(l-1)}$ adalah *feature map* masukkan, $w^{(l)} \in \mathbb{R}^{M \times N}$ adalah kernel konvolusi yang dapat dipelajari (learnable filter), $b^{(l)}$ adalah *bias*, dan $f(\cdot)$ adalah fungsi aktivasi non-linear. Pearson (2024) dalam DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) merekomendasikan penggunaan **ReLU** sebagai fungsi aktivasi standar karena konvergensinya yang cepat dan mitigasi *vanishing gradient*:

$$
\text{ReLU}(z) = \max(0, z)
$$

Untuk lapisan klasifikasi akhir (anomali vs. normal), fungsi **softmax** digunakan guna menghasilkan distribusi probabilitas kelas:

$$
\sigma(z_k) = \frac{e^{z_k}}{\sum_{j=1}^{K} e^{z_j}}, \quad \sum_{k=1}^{K} \sigma(z_k) = 1
$$

### 2.2 Fungsi Kerugian (Loss Function)

Pelatihan CNN meminimalkan fungsi kerugian lintas-entropi kategorik (*categorical cross-entropy*):

$$
\mathcal{L}_{\text{CE}} = -\frac{1}{N} \sum_{i=1}^{N} \sum_{k=1}^{K} y_{i,k} \log\left( \hat{y}_{i,k} \right)
$$

di mana $N$ adalah jumlah sampel, $K$ adalah jumlah kelas (misalnya 2: normal/anomali), $y_{i,k}$ adalah label *ground truth* (one-hot encoded), dan $\hat{y}_{i,k}$ adalah probabilitas prediksi. Untuk menangani *class imbalance* pada dataset inspeksi industri, Pearson (2024) menyarankan penggunaan **focal loss** yang menurunkan bobot kontribusi sampel mudah:

$$
\mathcal{L}_{\text{focal}} = -\alpha_k (1 - \hat{y}_{i,k})^{\gamma} \log(\hat{y}_{i,k})
$$

dengan $\alpha_k$ adalah *class weight* dan $\gamma \geq 2$ adalah *focusing parameter*.

### 2.3 Integrasi Physics-Informed Neural Networks (PINN)

Pendekatan PINN yang diperkenalkan oleh Raissi dkk. dan diaplikasikan untuk struktur *shock* oleh Mogi, Mano, & Taniguchi (2024) dalam DOI [10.1007/s11587-026-01105-9](https://doi.org/10.1007/s11587-026-01105-9) menambahkan *physics loss* ke dalam fungsi objektif:

$$
\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda \, \mathcal{L}_{\text{physics}}
$$

di mana $\lambda$ adalah *trade-off hyperparameter* dan $\mathcal{L}_{\text{physics}}$ adalah residual dari PDB yang mengatur sistem fisik (misalnya persamaan Euler untuk dinamika fluida atau persamaan panas Fourier untuk konduksi termal pada bearing):

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_p} \sum_{j=1}^{N_p} \left\| \mathcal{N}[u_\theta](x_j, t_j) \right\|^2
$$

dengan $\mathcal{N}[\cdot]$ adalah operator diferensial non-linear dan $u_\theta$ adalah aproksimasi neural network terhadap solusi PDB. Untuk aplikasi deteksi anomali peralatan, PINN memungkinkan model CNN untuk menghormati hukum kekekalan energi dan kekekalan massa ketika memprediksi pola degradasi, sehingga mengurangi *false positive* akibat noise akuisisi citra.

### 2.4 Metrik Evaluasi Kinerja

Kinerja deteksi anomali diukur melalui *precision*, *recall*, *F1-score*, dan *AUC-ROC*:

$$
P = \frac{TP}{TP + FP}, \quad R = \frac{TP}{TP + FN}, \quad F_1 = 2 \cdot \frac{P \cdot R}{P + R}
$$

Pearson (2024) melaporkan bahwa model CNN berbasis *transfer learning* EfficientNet-B3 mencapai $F_1 \geq 0{,}94$ pada dataset MVTec AD dan dataset proprietary bearing-fault (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi deteksi anomali berbasis CNN dalam ekosistem industri mengikuti kerangka CRISP-DM (*Cross-Industry Standard Process for Data Mining*) yang disesuaikan dengan ISO 13374 untuk *condition monitoring*. Tahapan SOP adalah sebagai berikut:

**Tahap 1 — Akuisisi Data Citra.** Instalasi sensor citra industri (kamera termal FLIR A655sc, kamera visible Basler ace 2, atau akustik emisi PCB PZT) pada titik inspeksi kritis. Resolusi minimum 640×480 piksel, frekuensi sampling 1–30 Hz untuk aplikasi *continuous monitoring*. Format penyimpanan: TIFF 16-bit (preservasi data radiometrik).

**Tahap 2 — Pra-pemrosesan & Augmentasi.** Normalisasi intensitas piksel ke rentang $[0,1]$, segmentasi Region of Interest (ROI), augmentasi data melalui rotasi, flip, *elastic deformation*, dan injeksi Gaussian noise ($\sigma = 0{,}01$) untuk meningkatkan *robustness* model. Teknik *CutMix* dan *MixUp* direkomendasikan oleh Pearson (2024) untuk generalisasi (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)).

**Tahap 3 — Transfer Learning & Fine-tuning.** Inisialisasi bobot dari EfficientNet-B3 atau ResNet-50 pretrained pada ImageNet, kemudian *fine-tuning* pada dataset anomali domain-spesifik dengan *learning rate* $10^{-4}$ (Adam optimizer), *batch size* 32, dan *early stopping* berdasarkan *validation loss* dengan toleransi 10 epoch.

**Tahap 4 — Validasi & Kalibrasi.** *K-fold cross-validation* ($k = 5$) untuk estimasi performa generalisasi. Kalibrasi probabilitas melalui *temperature scaling* guna menghasilkan *reliability diagram* yang selaras dengan ISO/IEC TS 4213:2022.

**Tahap