# 2867 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah paradigma pemeliharaan aset dari pendekatan *reactive* (korektif setelah kegagalan) dan *preventive* (berbasis jadwal tetap) menuju **pemeliharaan prediktif** (*predictive maintenance*, PdM) yang digerakkan oleh data. Dalam lingkungan manufaktur modern—mulai dari lini perakitan otomotif, kilang petrokimia, hingga fasilitas pembangkitan listrik—gangguan tak terencana pada peralatan kritis seperti bearing, pompa sentrifugal, motor listrik, dan sistem hidrolik menyebabkan kerugian ekonomi yang sangat signifikan. Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menekankan bahwa hingga **23% dari total *downtime* manufaktur global** bersumber dari kerusakan peralatan yang未能 terdeteksi secara dini, dengan estimasi biaya机会成本 mencapai USD 50 miliar per tahun untuk industri proses kontinyu.

Secara operasional, inspeksi visual konvensional memiliki keterbatasan inheren: subjektivitas operator, kelelahan manusia, frekuensi sampling yang rendah, serta ketidakmampuan untuk beroperasi pada lingkungan berbahaya (suhu ekstrem, radiasi, area confined space). Pearson (2024) mengajukan **Convolutional Neural Network (CNN)** sebagai tulang punggung sistem deteksi anomali visual otomatis yang mampu mengekstraksi fitur hierarkis dari citra peralatan—mulai dari edge dan tekstur tingkat rendah hingga pola degradasi tingkat tinggi—tanpa rekayasa fitur manual. Pendekatan ini bersifat *non-invasive*, *scalable*, dan dapat diintegrasikan dengan sistem *supervisory control and data acquisition* (SCADA) yang sudah ada.

Urgensi teknis semakin meningkat ketika industri bergerak menuju *cyber-physical production systems* (CPPS) di mana data citra dari kamera industri, drone inspeksi, dan sensor termal harus diolah secara *real-time*. Dalam konteks ini, paper pendukung dari Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa penggabungan neural network dengan model fisika—melalui arsitektur *Physics-Informed Neural Networks* (PINN)—memungkinkan sistem pemeliharaan prediktif tidak hanya mendeteksi anomali tetapi juga memprediksi *remaining useful life* (RUL) dan menginformasikan keputusan *Model Predictive Control* (MPC). Sinergi keduanya menjadi fondasi bagi sistem industri *self-healing* yang menjadi visi Industry 5.0.

Dari perspektif strategis, adopsi PdM berbasis CNN meningkatkan *overall equipment effectiveness* (OEE) rata-rata 8–12%, mengurangi inventaris *spare parts* hingga 30%, dan memperpanjang interval overhaul hingga 40% (Pearson, 2024). Dengan kata lain, investasi pada sistem deteksi anomali visual bukan sekadar *technological upgrade*, melainkan *strategic imperative* bagi daya saing manufaktur berkelanjutan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Dasar CNN untuk Deteksi Anomali

CNN bekerja melalui operasi konvolusi diskrit pada citra masukan $X \in \mathbb{R}^{H \times W \times C}$, di mana $H$, $W$, dan $C$ berturut-turut menyatakan tinggi, lebar, dan jumlah kanal warna. Fitur keluaran setiap layer konvolusi ke-$\ell$ didefinisikan sebagai:

$$Y_{i,j,k}^{(\ell)} = f\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} \sum_{c=0}^{C-1} W_{m,n,c,k}^{(\ell)} \cdot X_{i+m,\,j+n,\,c}^{(\ell-1)} + b_k^{(\ell)}\right)$$

di mana $W^{(\ell)}$ adalah kernel konvolusi berukuran $M \times N \times C$ dengan $K$ filter, $b_k^{(\ell)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear. Pearson (2024) menggunakan **Leaky ReLU** $f(z) = \max(\alpha z, z)$ dengan $\alpha = 0{,}1$ untuk mencegah *dying ReLU* saat melatih arsitektur dalam pada dataset cacat minor.

Setelah konvolusi, *spatial downsampling* dilakukan melalui **max-pooling**:

$$Z_{i,j,k}^{(\ell)} = \max_{(m,n) \in \mathcal{P}} Y_{i\cdot s+m,\,j\cdot s+n,\,k}^{(\ell)}$$

dengan stride $s$ dan jendela pooling $\mathcal{P}$. Tahapan konvolusi–aktivasi–pooling diulang hingga representasi fitur terkompresi, kemudian dilewatkan ke *fully connected layer* dan fungsi **softmax** untuk klasifikasi biner:

$$P(y = 1 \mid X) = \frac{\exp(\mathbf{w}_1^\top \mathbf{h} + b_1)}{\exp(\mathbf{w}_0^\top \mathbf{h} + b_0) + \exp(\mathbf{w}_1^\top \mathbf{h} + b_1)}$$

di mana $\mathbf{h}$ adalah vektor fitur hasil *global average pooling* (Pearson, 2024).

### 2.2 Fungsi Loss untuk Deteksi Anomali Visual

Untuk menangani **class imbalance** yang ekstrem (data abnormal jauh lebih sedikit dibanding normal), Pearson (2024) memodifikasi *binary cross-entropy* dengan bobot kelas:

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{i=1}^{N}\left[w_1 \cdot y_i \log(\hat{y}_i) + w_0 \cdot (1-y_i)\log(1-\hat{y}_i)\right]$$

dengan $w_1 = N / (2N_1)$ dan $w_0 = N / (2N_0)$, di mana $N_1$ dan $N_0$ adalah jumlah sampel abnormal dan normal. Pendekatan ini menghasilkan **F1-score** yang lebih stabil pada kondisi *rare-fault detection*.

### 2.3 Physics-Informed Loss untuk Integrasi dengan MPC

Mengikuti kerangka Patel dkk. (2024), total loss pada PINN untuk sistem proses didefinisikan sebagai kombinasi *data loss*, *physics loss*, dan *boundary loss*:

$$\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}} + \lambda_b \mathcal{L}_{\text{BC}}$$

di mana:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_r}\sum_{r=1}^{N_r}\left[\mathcal{N}\!\left(u_\theta(t_r, \mathbf{x}_r)\right)\right]^2$$

dengan $\mathcal{N}(\cdot)$ adalah *residual operator* dari persamaan diferensial parsial (PDE) yang governing proses industri—misalnya persamaan panas 1-D:

$$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2} - \beta (T - T_{\text{amb}})$$

Sinergi ini memungkinkan CNN untuk mendeteksi anomali visual sekaligus memastikan prediksi RUL konsisten dengan hukum fisika, sehingga dapat diintegrasikan dengan **MPC** sebagai umpan balik kontrol prediktif (Patel, Bhartiya, & Gudi, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali visual di industri mengikuti SOP berlapis yang diuraikan oleh Pearson (2024) dan distandardisasi oleh ISO 13373 (*Condition monitoring and diagnostics of machines*) serta ISO/IEC 23053 (*Framework for AI systems using ML*).

**Tahap 1 — Akuisisi Data & Preprocessing.**
Citra peralatan dikumpulkan melalui kamera IP industrial (resolusi minimum 1920×1080), drone inspeksi, atau sensor termal FLIR. Setiap frame dinormalisasi ke dimensi $224 \times 224 \times 3$, dilakukan augmentasi geometris (rotasi, flip, crop) untuk memperbesar variabilitas data, dan augmentasi fotometris (penyesuaian brightness, kontras, *gaussian noise*) untuk mensimulasikan kondisi operasional nyata.

**Tahap 2 — Anotasi & Pelabelan.**
Anomali diklasifikasikan ke dalam minimal 5 kategori menurut ISO 17359: *cracking*, *corrosion*, *wear*, *overheating*, *leakage*. Dua annotator independen memberikan label, dan *Cohen's kappa* $\kappa \geq 0{,}85$ digunakan sebagai ambang persetujuan.

**Tahap 3 — Arsitektur & Transfer Learning.**
Model backbone yang digunakan Pearson (2024) adalah modifikasi ResNet-50 dengan *transfer learning* dari bobot ImageNet, dilanjutkan *fine-tuning* pada dataset domain-spesifik (misalnya MVTec AD atau dataset proprietary). Lapisan fully-connected akhir diganti dengan dua neuron keluaran untuk klasifikasi *normal/abnormal*.

**Tahap 4 — Pelatihan & Validasi.**
Pelatihan menggunakan *Adam optimizer* dengan *learning rate* $\eta_0 = 10^{-4}$ dan *scheduled decay* $\eta_t = \eta_0 / (1 + \gamma t)$ di mana $\gamma = 0{,}1$. Validasi menggunakan 5-fold *cross-validation* dan metrik *precision*, *recall*, *F1-score*, serta *ROC-AUC*.

**Tahap 5 — Deployment & Integrasi MPC.**
Model yang telah di-*quantize* (INT8) di-deploy ke edge device (NVIDIA Jetson Orin). Sinyal anomali dari CNN menjadi umpan balik bagi *Model Predictive Controller* yang menyelesaikan masalah optimasi horizon-$H$:

$$\min_{\mathbf{u}_0,\dots,\mathbf{u}_{H-1}} \sum_{k=0}^{H-1}\left[\|\mathbf{x}_k - \mathbf{x}_k^{\text{ref}}\|_Q^2 + \|\mathbf{u}_k\|_R^2\right]$$

dengan kendala dinamika sistem $\mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k)$ dan kendala operasional $\mathbf{x}_k \in \mathcal{X}$, $\mathbf{u}_k \in \mathcal{U}$ (Patel dkk., 2024).

**Tahap 6 — Monitoring & Retraining.**
Sistem *monitoring drift* berbasis *population stability index* (PSI) memicu *retraining* otomatis ketika degradasi performa terdeteksi. SOP ini memastikan kepatuhan terhadap standar IEC 62443 untuk keamanan siber sistem industri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik petrokimia dengan 500 pompa sentrifugal kritis. Setiap pompa kehilangan *mean time between failures* (MTBF) historis sebesar 6.800 jam dan menimbulkan kerugian produksi sebesar