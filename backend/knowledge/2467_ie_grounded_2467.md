# 2467 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif: Integrasi Physics-Informed Neural Networks dalam Sistem Model Predictive Control Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah memaksa perusahaan manufaktur dan proses untuk mengadopsi paradigma *cyber-physical production system* (CPPS) di mana aset fisik, sensor, dan algoritma kecerdasan buatan saling terhubung dalam satu arsitektur keputusan. Dalam konteks ini, *downtime* tak terencana (unplanned downtime) masih menjadi salah satu sumber inefisiensi terbesar: menurut berbagai studi konsultan industri, biaya satu jam *downtime* pada pabrik petrokimia berkisar USD 50.000 – USD 250.000, dan pada lini *semiconductor fabrication* dapat melampaui USD 1.000.000 per jam. Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menyoroti bahwa strategi pemeliharaan tradisional (*reactive* dan *preventive time-based*) tidak lagi cukup karena menghasilkan *over-maintenance* (biaya komponen dan jam kerja teknisi) sekaligus *under-detection* (kerusakan progresif seperti retakan mikro pada sudu turbin atau *hot spot* pada insulasi motor tidak terdeteksi hingga kerusakan katastropik terjadi). Pearson (2024) kemudian mengusulkan arsitektur *image-based anomaly detection* berbasis *Convolutional Neural Networks* (CNN) yang dipasang pada kamera inspeksi termo-grafi, kamera RGB resolusi tinggi, maupun sistem *X-ray imaging* untuk memantau kondisi komponen kritis seperti bantalan rol, roda gigi, heat exchanger, dan rumah pompa sentrifugal secara *real-time*.

Signifikansi ekonominya semakin kuat ketika deteksi anomali visual digabungkan dengan sistem kendali proses lanjutan. Patel, Bhartiya, dan Gudi (2024) dalam makalahnya di *IFAC-PapersOnLine* (DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memperkenalkan arsitektur *Physics-Informed Neural Networks* (PINNs) yang digunakan sebagai *surrogate model* di dalam loop *Model Predictive Control* (MPC) untuk sistem proses, seperti reaktor CSTR (*Continuous Stirred-Tank Reactor*) dan kolom distilasi. Kedua paper, bila diintegrasikan, merepresentasikan pergeseran paradigma besar: dari *schedule-based maintenance* menjadi *condition-based predictive maintenance* yang bersifat *data-driven* dan *physics-aware*. Urgensi penerapan di lapangan juga didorong oleh meningkatnya usia pakai aset (*aging infrastructure*) di negara-negara industri mature seperti Amerika Serikat, Jepang, dan Jerman, di mana lebih dari 40% aset produksi berusia di atas 20 tahun. Pearson (2024) menekankan bahwa CNN modern dengan arsitektur *transfer learning* (misalnya ResNet-50, EfficientNet-B3) mampu mencapai *true-positive rate* di atas 92% pada dataset citra anomali industri yang sangat *imbalanced*, sesuatu yang mustahil dicapai oleh inspeksi visual manusia yang dibatasi oleh kelelahan, subjektivitas, dan biaya SDM.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Klasifikasi Citra Anomali

Operasi konvolusi 2-D pada layer pertama CNN Pearson (2024) didefinisikan sebagai:

$$y_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} w_{m,n}^{(l)} \cdot x_{i+m,\, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $w_{m,n}^{(l)}$ adalah bobot kernel berukuran $(k_h \times k_w)$ pada layer $l$, $b^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi *Rectified Linear Unit* (ReLU), $\sigma(z) = \max(0, z)$. Untuk layer output klasifikasi biner (*anomaly* vs *normal*), digunakan fungsi aktivasi sigmoid:

$$P(\hat{y}=1 \mid x) = \frac{1}{1+e^{-z}} \quad \text{ dengan } z = W_o h + b_o$$

Fungsi rugi (*loss function*) untuk pelatihan adalah *Binary Cross-Entropy* (BCE) yang cocok untuk data tidak seimbang:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

di mana $y_i \in \{0,1\}$ adalah label ground-truth dan $\hat{y}_i$ adalah probabilitas prediksi anomali. Pearson (2024) juga melaporkan penggunaan *focal loss* untuk mengatasi rasio *normal:anomaly* yang ekstrem (misalnya 10:1 atau lebih besar):

$$\mathcal{L}_{focal} = -\alpha_t (1-p_t)^{\gamma} \log(p_t)$$

dengan *focusing parameter* $\gamma = 2$ dan *balancing weight* $\alpha_t \in [0.25, 0.75]$.

### 2.2 Physics-Informed Neural Networks untuk Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) memformulasikan sistem proses nonlinear dalam bentuk ruang-keadaan (*state-space*) kontinu:

$$\dot{x}(t) = f\big(x(t), u(t)\big), \quad y(t) = g\big(x(t)\big)$$

di mana $x(t) \in \mathbb{R}^{n_x}$ adalah vektor状态 (misalnya konsentrasi reaktan $C_A$, suhu reaktor $T$), $u(t) \in \mathbb{R}^{n_u}$ adalah variabel manipulasi (misalnya laju alir air pendingin), dan $f$ merupakan dinamika nonlinear yang umumnya diketahui secara parsial dari prinsip konservasi massa dan energi. PINN meminimalkan fungsi rugi gabungan:

$$\mathcal{L}_{PINN} = \lambda_{data}\,\underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d}\|x_{NN}(t_i) - x_i^{meas}\|^2}_{\mathcal{L}_{data}} + \lambda_{phys}\,\underbrace{\frac{1}{N_r}\sum_{j=1}^{N_r}\left\|\frac{dx_{NN}}{dt}\bigg|_{t_j} - f\big(x_{NN}(t_j), u(t_j)\big)\right\|^2}_{\mathcal{L}_{phys}}$$

Parameter $\lambda_{data}$ dan $\lambda_{phys}$ adalah bobot relatif yang men-trade-off antara *fitting* data pengukuran sensor dan kepatuhan terhadap hukum fisika (ODE/PDE residual). Setelah PINN terlatih, *surrogate model* $x_{NN}(t)$ menggantikan model first-principles yang mahal secara komputasional dalam loop MPC. Masalah optimasi MPC pada cakrawala prediksi $N_p$ adalah:

$$\min_{u_0,\ldots,u_{N_c-1}} J = \sum_{k=0}^{N_p-1}\left[(x_k - x^{ref})^T Q (x_k - x^{ref}) + u_k^T R u_k\right] + (x_{N_p} - x^{ref})^T P (x_{N_p} - x^{ref})$$

$$\text{subject to: } x_{k+1} = x_{NN}(x_k, u_k), \quad u_{min} \le u_k \le u_{max}, \quad x_{min} \le x_k \le x_{max}$$

dengan $Q \succeq 0$ dan $R \succ 0$ merupakan matriks bobot biaya *tracking error* dan upaya kendali.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) menyusun SOP implementasi *image-based anomaly detection* dalam lima tahap berikut:

**Tahap 1 – Akuisisi & Anotasi Dataset.** Kamera industri (RGB, termal, atau *hyperspectral*) dipasang di *fixed mounting bracket* pada jarak 30–80 cm dari aset target dengan pencahayaan *diffuse LED* terkontrol. Dataset dilabeli oleh *domain expert* (insinyur reliability) menggunakan protokol *consensus labeling* (≥2 anotator independen) untuk menjamin kualitas ground-truth. Patel et al. (2024) melengkapi tahap ini dengan akuisisi data sensor proses (suhu, tekanan, laju alir) sebagai data *training* bagi komponen $\mathcal{L}_{data}$ PINN.

**Tahap 2 – Pre-processing & Augmentasi.** Citra di-resize ke resolusi standar $224\times224$ piksel, dinormalisasi pada rentang $[0,1]$, dan diaugmentasi dengan rotasi acak ($\pm 15^\circ$), *horizontal flip*, *Gaussian noise* ($\sigma = 0.01$), serta *cutout* untuk meningkatkan *robustness* terhadap variasi lingkungan. Patel et al. (2024) menggunakan normalisasi Min-Max pada data sensor proses sebelum dimasukkan ke PINN.

**Tahapan 3 – Arsitektur Model & Transfer Learning.** Pearson (2024) menggunakan backbone ResNet-50 *pre-trained* pada ImageNet, dengan *fine-tuning* pada layer akhir (*classifier head*) menggunakan *learning rate* $10^{-4}$ dan *optimizer* Adam ($\beta_1=0.9, \beta_2=0.999$). Patel et al. (2024) membangun jaringan *fully-connected* dengan 4 hidden layer masing-masing 64 neuron dan aktivasi $\tanh$ untuk PINN.

**Tahap 4 – Pelatihan, Validasi, & Evaluasi.** Dataset dibagi 70/15/15 untuk *train/val/test*. Pearson (2024) melaporkan pelatihan selama 50 *epoch* dengan *early stopping* (patience = 10) berdasarkan *validation