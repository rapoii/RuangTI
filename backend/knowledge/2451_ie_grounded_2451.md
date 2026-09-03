# 2451 — Deteksi Anomali Berbasis Citra pada Peralatan Industri dengan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin terdigitalisasi, transisi menuju **Industry 4.0** telah mengubah secara fundamental paradigma pengelolaan aset fisik di lantai pabrik. Sistem manufaktur konvensional yang mengandalkan *reactive maintenance* (tindakan perbaikan setelah kegagalan terjadi) dan *preventive maintenance* berbasis jadwal tetap (time-based) semakin ditinggalkan karena terbukti suboptimal secara ekonomis. James Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menekankan bahwa biaya *unplanned downtime* di industri proses dan manufaktur diskret dapat mencapai USD 50.000 hingga USD 250.000 per jam pada fasilitas petrokimia berskala besar, dan secara agregat industri manufaktur global kehilangan produktivitas hingga USD 50 miliar per tahun akibat kegagalan peralatan yang tidak terdeteksi secara dini.

Pearson (2024) berargumen bahwa akar permasalahan terletak pada **observability gap**—yakni ketidakmampuan sistem inspeksi konvensional untuk menangkap degradasi *micro-scale* (retak mikro, korosi awal, delaminasi coating, keausan bearing awal) sebelum kegagalan katastrofik terjadi. Inspeksi visual manusia memiliki keterbatasan inheren: fatigue, subjektivitas, sampling bias (hanya 5–10% populasi aset yang diperiksa), serta ketidakmampuan mendeteksi pola multi-dimensi pada ribuan citra historis. Sementara itu, sensor IoT berbasis getaran, akustik, dan termografi—meskipun berguna—sering kali baru mendeteksi anomali ketika kerusakan sudah memasuki fase propagasi lanjut, sehingga *lead time* untuk tindakan korektif menjadi sangat pendek.

Konteks ini diperkuat oleh temuan Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431), yang menunjukkan bahwa integrasi *physics-informed neural networks* (PINNs) dengan *Model Predictive Control* (MPC) mampu menyediakan representasi kondisi sistem yang akurat secara *real-time*. Pearson (2024) melengkapi perspektif ini dengan mengusulkan **arsitektur Convolutional Neural Network (CNN) berbasis citra** yang dirancang khusus untuk mendeteksi anomali visual pada peralatan industri—mulai dari pompa, katup, heat exchanger, hingga conveyor belt—dengan akurasi yang mendekati atau melampaui kemampuan inspektur ahli berpengalaman.

Urgensi penerapan pendekatan ini diperkuat oleh tiga tren makro: (1) **Peningkatan kompleksitas aset industri** yang beroperasi pada tekanan, temperatur, dan kecepatan yang semakin ekstrem; (2) **Keterbatasan tenaga ahli inspeksi** di pasar tenaga kerja global, khususnya pasca-pandemi; dan (3) **Ketersediaan data citra beresolusi tinggi secara masif** melalui kamera industri, drone inspeksi, dan *endoscope* digital yang telah terinstalasi di banyak fasilitas namun belum dimanfaatkan secara optimal. Pearson (2024) memperkirakan bahwa adopsi sistem deteksi anomali berbasis CNN dapat menurunkan *mean time to detection* (MTTD) sebesar 60–80% dan mengurangi *false alarm rate* hingga 35% dibanding sistem inspeksi manual, sehingga secara langsung meningkatkan *Overall Equipment Effectiveness* (OEE) dan margin operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) mengadopsi arsitektur CNN berbasis *modified ResNet-50* yang telah di-*pre-train* pada dataset ImageNet, kemudian dilakukan *transfer learning* menggunakan dataset cacat industri berlabel. Operasi fundamental CNN adalah konvolusi 2D yang didefinisikan sebagai:

$$
y_{i,j}^{(l)} = f\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} x_{i+m,\,j+n}^{(l-1)} \cdot w_{m,n}^{(l)} + b^{(l)}\right)
$$

di mana $y_{i,j}^{(l)}$ adalah fitur aktivasi pada lapisan $l$ di posisi $(i,j)$, $x^{(l-1)}$ adalah *input feature map* dari lapisan sebelumnya, $w_{m,n}^{(l)}$ adalah bobot kernel konvolusi berukuran $M \times N$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear seperti ReLU:

$$
f(z) = \max(0, z)
$$

Untuk lapisan akhir, digunakan fungsi *softmax* guna klasifikasi multi-kelas kondisi peralatan (normal, korosi ringan, korosi berat, retak, deformasi):

$$
P(y = c \mid \mathbf{x}) = \frac{e^{\mathbf{w}_c^{\top} \mathbf{x} + b_c}}{\sum_{k=1}^{C} e^{\mathbf{w}_k^{\top} \mathbf{x} + b_k}}
$$

dengan $C$ adalah jumlah kelas kondisi dan $\mathbf{x}$ adalah *feature vector* hasil *global average pooling*.

### 2.2 Fungsi Loss dan Optimisasi

Pearson (2024) menggunakan *focal loss* untuk menangani ketidakseimbangan kelas (*class imbalance*) yang menjadi karakteristik dataset inspeksi industri—di mana sampel "normal" jauh lebih banyak daripada sampel cacat:

$$
\mathcal{L}_{\text{focal}} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)
$$

di mana $p_t$ adalah probabilitas prediksi kelas benar, $\alpha_t \in [0,1]$ adalah *weighting factor*, dan $\gamma \geq 0$ adalah *focusing parameter*. Optimisasi parameter jaringan dilakukan dengan algoritma Adam:

$$
\theta_{t+1} = \theta_t - \eta \cdot \frac{\hat{m}_t}{\sqrt{\hat{v}_t} + \epsilon}
$$

dengan $\eta$ adalah *learning rate* (umumnya $10^{-4}$), $\hat{m}_t$ dan $\hat{v}_t$ adalah estimasi momen pertama dan kedua dari gradien yang dikoreksi bias, dan $\epsilon = 10^{-8}$.

### 2.3 Anomaly Scoring dengan Rekonstruksi Error

Untuk mode *unsupervised anomaly detection*, Pearson (2024) mengimplementasikan varian *autoencoder* konvolusi di mana skor anomali dihitung berdasarkan *reconstruction error*:

$$
A(\mathbf{x}) = \frac{1}{HW} \sum_{i=1}^{H}\sum_{j=1}^{W} \left\| \mathbf{x}_{i,j} - \hat{\mathbf{x}}_{i,j} \right\|_2^2
$$

di mana $\mathbf{x}$ adalah citra input, $\hat{\mathbf{x}}$ adalah rekonstruksi oleh *decoder*, dan $H, W$ adalah dimensi citra. Ambang batas keputusan ditetapkan berdasarkan distribusi skor anomali pada data latih normal:

$$
\hat{y} = \begin{cases} \text{Anomali}, & A(\mathbf{x}) > \tau \\ \text{Normal}, & A(\mathbf{x}) \leq \tau \end{cases}
$$

### 2.4 Integrasi dengan Physics-Informed Framework

Membangun sinergi dengan paper Patel et al. (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431), skor anomali visual $A(\mathbf{x})$ dapat diintegrasikan ke dalam fungsi biaya MPC sebagai *soft constraint*:

$$
J = \sum_{k=0}^{N_p-1} \left[ (\mathbf{y}_{k+1} - \mathbf{y}_{\text{ref}})^{\top} \mathbf{Q} (\mathbf{y}_{k+1} - \mathbf{y}_{\text{ref}}) + \mathbf{u}_k^{\top} \mathbf{R} \mathbf{u}_k + \lambda \cdot \phi(A(\mathbf{x}_k)) \right]
$$

di mana $\phi(\cdot)$ adalah fungsi penalti yang meningkat secara monoton terhadap skor anomali, dan $\lambda$ adalah koefisien bobot penalti. Pendekatan hibrida ini memungkinkan sistem kontrol proses mengurangi *setpoint* agresif ketika anomali terdeteksi, sehingga mengurangi *stress* pada peralatan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menetapkan **SOP tujuh tahap** untuk implementasi sistem deteksi anomali berbasis CNN di fasilitas manufaktur:

**Tahap 1 — Akuisisi Data Citra.** Kamera industri resolusi tinggi (minimal 5 MP), *thermal imager*, atau drone inspeksi digunakan untuk menangkap citra peralatan pada kondisi operasi nyata. Pencahayaan standar (color temperature 5500K) dan jarak pengambilan (0.5–2.0 m) dijaga konsisten. Frekuensi akuisisi mengikuti pola *risk-based*: aset kritikal (Kelas I) setiap 4 jam, aset semi-kritikal setiap 24 jam.

**Tahap 2 — Pre-processing dan Augmentasi.** Citra di-resize ke dimensi standar $224 \times 224$ piksel, dilakukan normalisasi:

$$
x_{\text{norm}} = \frac{x - \mu}{\sigma}
$$

dengan $\mu$ dan $\sigma$ adalah *mean* dan standar deviasi kanal RGB dari dataset ImageNet. Augmentasi mencakup *random rotation* ($\pm 15°$), *horizontal flip*, *brightness adjustment* ($\pm 20%$), dan *cutout* untuk meningkatkan robustnes model.

**Tahap 3 — Pelabelan oleh Ahli.** Sampel cacat dilabeli oleh *domain expert* (inspektur bersertifikat ASNT Level II/III) menggunakan standar ISO 15257 dan ASTM E165. Minimum 500 sampel per kelas cacat diperlukan untuk mencapai konvergensi model yang memadai.

**Tahap 4 — Arsitektur dan Transfer Learning.** Model backbone (ResNet-50 pre-trained) di-*fine-tune* dengan mengganti *fully connected layer* terakhir sesuai jumlah kelas kondisi. *Learning rate scheduling* menggunakan *cosine annealing*:

$$
\eta_t = \eta_{\min} + \frac{1}{2}(\eta_{\max} - \eta_{\min})\left(1 + \cos\left(\frac{t}{T}\pi\right)\right)
$$

dengan $T$ adalah total jumlah epoch (umumnya 50).

**Tahap 5 — Validasi dan Kalibrasi.** Model dievaluasi menggunakan *k-fold cross-validation* ($k=5$) dengan metrik akurasi, presisi, *recall*, dan F1-score. Kalibrasi ambang batas $\tau$ dilakukan pada *validation set* untuk memenuhi target *false positive rate* (FPR) $\leq 5\%$.

**Tahap 6 — Deployment Edge-Cloud.** Model di-*deploy* pada arsitektur hybrid: inferensi *real-time* di edge device (NVIDIA Jetson atau Intel NCS) dengan latensi target $< 100$ ms per citra, sedangkan *retraining* berkala dilakukan di *cloud server* dengan data baru yang telah diverifikasi ahli.

**Tahap 7 — Integrasi CMMS dan Loop Perbaikan.** Hasil deteksi secara otomatis dikirim ke *Computerized Maintenance Management System* (CMMS) melalui API, menghasilkan *work order* yang mencakup lokasi anomali, tingkat keyakinan model (*confidence score*), dan rekomendasi tindakan. Loop umpan balik memastikan setiap anomali yang dikonfirmasi oleh teknisi lapangan menambah dataset *retraining* berikutnya.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Heat Exchanger Shell-and-Tube di Pabrik Petrokimia

Sebuah fasilitas petrokimia memiliki **120 unit heat exchanger** yang beroperasi pada tekanan 30 bar dan temperatur 280°C. Inspeksi manual setiap 6 bulan memerlukan 8 inspektur × 5 hari × 8 jam = 320 jam-orang per siklus, dengan *coverage* hanya 15% dari total permukaan yang dapat diperiksa. Setelah implementasi sistem deteksi anomali berbasis CNN sesuai metodologi Pearson (2024), dilakukan perhitungan kuantitatif berikut:

### 4.2 Perhitungan Sampling dan Akuisisi Data

Dengan frekuensi inspeksi 4 jam per unit untuk 20 unit *high-criticality* dan 24 jam untuk sisanya:

$$
N_{\text{citra/hari}} = 20 \times \frac{24}{4} + 100 \times \frac{24}{24} = 120 + 100 = 220 \text{ citra/hari}
$$

Total dataset latih setelah 90 hari: $N_{\text{train}} = 220 \times 90 = 19.800$ citra. Dengan rasio 70/15/15 untuk *train/validation/test*:

$$
N_{\text{train}} = 13.860,\quad N_{\text{val}} = 2.970,\quad N_{\text{test}} = 2.970
$$

### 4.3 Perhitungan Akurasi dan Confusion Matrix

Model CNN mencapai hasil berikut pada *test set*:

| Kelas | Presisi | Recall | F1-Score |
|-------|---------|--------|----------|
| Normal | 0.987 | 0.992 | 0.989 |
| Korosi ringan | 0.923 | 0.901 | 0.912 |
| Korosi berat | 0.948 | 0.935 | 0.941 |
| Retak | 0.962 | 0.958 | 0.960 |
| Fouling | 0.919 | 0.927 | 0.923 |

Akurasi agregat (*macro-averaged accuracy*):

$$
\text{Acc} = \frac{1}{C}\sum_{c=1}^{C} \frac{TP_c + TN_c}{TP_c + TN_c + FP_c + FN_c} = 0.948
$$

*False Positive Rate* agregat: $\text{FPR} = 1.3\%$, lebih rendah dari