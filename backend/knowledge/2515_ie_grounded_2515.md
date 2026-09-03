# 2515 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance* — PdM) telah menjadi pilar strategis dalam transformasi digital industri manufaktur dan proses. Berbeda dengan strategi *corrective* (reaktif setelah kegagalan) maupun *preventive* (berbasis jadwal tetap), PdM mengandalkan pemantauan kondisi (*condition monitoring*) secara kontinu untuk memprediksi degradasi aset sebelum terjadi *downtime* yang merugikan. Pearson (2024) dalam studinya yang berjudul "Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance" (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menekankan bahwa inspeksi visual berbasis kamera resolusi tinggi yang diolah dengan arsitektur *Convolutional Neural Network* (CNN) mampu mengidentifikasi anomali permukaan, korosi, retakan mikro, dan deformasi geometris pada peralatan kritis seperti turbin, pompa sentrifugal, *heat exchanger*, dan *gearbox* secara *real-time*.

Urgensi ekonomi dari penerapan pendekatan ini sangat substansial. Studi-studi referensi industri (termasuk kerangka kerja yang dirujuk oleh Pearson, 2024) menunjukkan bahwa *unscheduled downtime* pada pabrik proses kontinu bernilai antara $10.000 hingga $250.000 per jam tergantung sektor, dan bahwa deteksi anomali dini melalui computer vision dapat menurunkan tingkat kegagalan mendadak hingga 30–50%. Lebih lanjut, integrasi arsitektur CNN ke dalam *Internet of Things* (IoT) memungkinkan pemrosesan citra di *edge device*, menekan latensi transmisi data ke *cloud* dan memenuhi kebutuhan *closed-loop* dengan *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINN) yang dipelajari oleh Patel, Bhartiya, dan Gudi (2024) (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)). Sinergi kedua pendekatan — deteksi anomali berbasis CNN untuk *fault diagnosis* dan PINN-MPC untuk *fault-tolerant control* — merepresentasikan state-of-the-art dalam *smart manufacturing* Industry 4.0.

Konteks teknisnya diperkuat oleh ketersediaan *benchmark dataset* citra industri seperti MVTec AD dan NEU-DET, yang memuat citra kondisi normal dan cacat pada berbagai komponen. Pearson (2024) berargumen bahwa CNN yang dirancang dengan tepat — memanfaatkan *transfer learning* dari arsitektur ResNet atau EfficientNet yang sudah terlatih pada ImageNet — dapat mencapai *F1-score* di atas 0.95 bahkan pada kondisi pencahayaan (*illumination*) dan orientasi yang bervariasi di lantai pabrik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Ekstraksi Fitur Citra

Operasi konvolusi diskrit dua-dimensi yang menjadi inti CNN diformulasikan sebagai:

$$y_{i,j,k}^{(l)} = f\left( \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} W_{m,n,k}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b_k^{(l)} \right)$$

di mana $y_{i,j,k}^{(l)}$ adalah fitur aktivasi pada lapisan $l$, indeks spasial $(i,j)$, dan *kernel* ke-$k$; $W_{m,n,k}^{(l)}$ adalah bobot filter; $b_k^{(l)}$ adalah bias; serta $f(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $f(z) = \max(0,z)$).

Untuk mengurangi dimensi fitur dan memperkenalkan invariansi translasi lokal, diterapkan *max-pooling*:

$$p_{i,j,k}^{(l)} = \max_{(m,n) \in \mathcal{P}} y_{i+m, j+n, k}^{(l)}$$

dengan $\mathcal{P}$ merupakan jendela pooling berukuran $2 \times 2$ atau $3 \times 3$.

### 2.2 Skor Anomali dan Fungsi Loss

Pendekatan deteksi anomali yang digunakan Pearson (2024) mengikuti paradigma *reconstruction-based* menggunakan *Convolutional Autoencoder* (CAE). Model CAE memetakan citra input $\mathbf{x} \in \mathbb{R}^{H \times W \times C}$ ke representasi laten $\mathbf{z} \in \mathbb{R}^{d}$ dan merekonstruksinya kembali sebagai $\hat{\mathbf{x}}$. Fungsi loss pelatihan adalah *Mean Squared Error* (MSE) rekonstruksi:

$$\mathcal{L}_{\text{AE}}(\theta, \phi) = \frac{1}{N} \sum_{i=1}^{N} \| \mathbf{x}_i - \hat{\mathbf{x}}_i \|_2^2 = \frac{1}{N} \sum_{i=1}^{N} \| \mathbf{x}_i - D_\phi(E_\theta(\mathbf{x}_i)) \|_2^2$$

Skor anomali untuk citra uji $\mathbf{x}_{\text{test}}$ kemudian didefinisikan sebagai *pixel-wise reconstruction error* agregat:

$$A(\mathbf{x}_{\text{test}}) = \frac{1}{H \cdot W} \sum_{i=1}^{H} \sum_{j=1}^{W} \left( x_{i,j}^{\text{test}} - \hat{x}_{i,j}^{\text{test}} \right)^2$$

*Threshold* keputusan $\tau$ ditetapkan melalui kuantil ke-$(1-\alpha)$ dari distribusi skor anomali pada data latih normal:

$$\tau = Q_{1-\alpha}\left( \{ A(\mathbf{x}_k^{\text{train}}) \}_{k=1}^{N_{\text{train}}} \right)$$

Klasifikasi biner anomali:

$$\hat{y} = \begin{cases} 1 \text{ (anomali)}, & \text{jika } A(\mathbf{x}) \geq \tau \\ 0 \text{ (normal)}, & \text{lainnya} \end{cases}$$

### 2.3 Integrasi dengan Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya, dan Gudi (2024) mengembangkan pendekatan PINN-MPC yang relevan untuk *fault-tolerant control* ketika anomali terdeteksi. MPC menyelesaikan masalah optimasi horizon prediksi $N_p$:

$$\min_{\mathbf{u}_{0:N_c-1}} \; J = \sum_{k=0}^{N_p-1} \left( \|\mathbf{x}_k - \mathbf{x}_k^{\text{ref}}\|_Q^2 + \|\mathbf{u}_k\|_R^2 \right)$$

$$\text{subject to:} \quad \mathbf{x}_{k+1} = f_{\text{PINN}}(\mathbf{x}_k, \mathbf{u}_k), \quad \mathbf{x}_k \in \mathcal{X}, \quad \mathbf{u}_k \in \mathcal{U}$$

Di sini $f_{\text{PINN}}$ adalah jaringan saraf yang dlatih tidak hanya dari data tetapi juga dari residual persamaan diferensial proses:

$$\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda \cdot \mathcal{L}_{\text{physics}} = \frac{1}{N_d}\sum_{i=1}^{N_d}\|f_{\text{PINN}}(\mathbf{x}_i) - \mathbf{y}_i\|^2 + \lambda \cdot \frac{1}{N_r}\sum_{j=1}^{N_r}\|r(\mathbf{x}_j)\|^2$$

dengan $r(\mathbf{x}) = \frac{\partial f_{\text{PINN}}}{\partial t} + \mathcal{N}[f_{\text{PINN}}] - 0$ adalah residual PDE/ODE sistem fisik.

### 2.4 Estimasi Remaining Useful Life (RUL)

RUL dapat diestimasi secara stokastik dari laju degradasi anomali:

$$\text{RUL} = \int_{A_0}^{A_{\text{critical}}} \frac{dA}{g(A; \boldsymbol{\beta})}$$

di mana $g(A; \boldsymbol{\beta})$ adalah model degradasi parametrized oleh $\boldsymbol{\beta}$ (umumnya model *Proportional Hazards* atau *Wiener process*).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN di lapangan mengikuti SOP delapan tahapan yang diadaptasi dari praktik terbaik Pearson (2024) dan referensi MPC-PINN Patel et al. (2024):

**Tahap 1 — Penentuan Cakupan Aset Kritis.** Lakukan *Failure Mode, Effects, and Criticality Analysis* (FMECA) untuk mengidentifikasi 20% aset yang menyebabkan 80% downtime (*vital few*). Tetapkan *criticality index* $C_i = S_i \times P_i \times D_i$ di mana $S$ adalah severity, $P$ probability of failure, $D$ detectability.

**Tahap 2 — Akuisisi Data Citra.** Posisikan kamera industri (resolusi ≥ 5 MP, rating IP67) pada jarak 30–80 cm dari target dengan pencahayaan *ring light* LED terkontrol. Akuisisi pada frekuensi $f_s = 1$–$10$ Hz selama 24/7 menghasilkan dataset citra $\mathcal{D} = \{\mathbf{x}_i, y_i\}_{i=1}^{N}$.

**Tahap 3 — Preprocessing.** Terapkan resize ke dimensi standar (misal $224 \times 224 \times 3$), normalisasi piksel $\tilde{x} = (x/255 - 0.485)/\sigma$ menggunakan statistik ImageNet, dan augmentasi data (*rotation*, *flip*, *brightness jitter*) untuk meningkatkan generalisasi.

**Tahap 4 — Arsitektur Model.** Gunakan backbone ResNet-50 pre-trained, tambahkan *bottleneck layer* $z \in \mathbb{R}^{128}$ untuk CAE. Untuk klasifikasi, ganti *final fully-connected layer* dengan dua neuron output (normal/anomali) dan terapkan *softmax*.

**Tahap 5 — Pelatihan dan Validasi.** Bagi data dengan rasio 70/15/15 untuk *train/validation/test*. Gunakan *optimizer* Adam dengan *learning rate* $\eta = 10^{-4}$ dan *early stopping* berdasarkan *validation loss* dengan patience = 10 epoch. Pantau metrik *precision*, *recall*, *F1-score*, dan *AUC-ROC*.

**Tahap 6 — Deployment Edge/Cloud.** Model di-*quantize* ke format INT8 dan di-deploy ke GPU edge (NVIDIA Jetson Orin) untuk inferensi ≤ 50 ms/citra. Log skor anomali ke *time-series database* (InfluxDB).

**Tahap 7 — Integrasi PINN-MPC.** Hubungkan flag anomali $y=1$ ke modul MPC yang menurunkan setpoint operasi atau mengaktifkan mode *graceful degradation*, mengikuti arsitektur Patel et al. (2024).

**Tahap 8 — Audit dan Retraining Berkala.** Jadwalkan retraining setiap 3 bulan atau ketika *concept drift* terdeteksi (KL-divergence $D_{\text{KL}}(P_{\text{current}} \| P_{\text{baseline}}) > 0.1$).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pabrik kimia ingin memantau kondisi *shell-and-tube heat exchanger* (HX-104) yang beroperasi pada suhu $180°\text{C}$ dan tekanan $12$ bar. Biaya *unscheduled shutdown* pabrik diestimasikan $\$15,000$/jam. Tim memasang kamera thermal-vision untuk mendeteksi *fouling* dan korosi.

**Langkah 1 — Pengumpulan Data.** Selama 30 hari, dikumpulkan $N = 5{,}000$ citra dengan distribusi: 4,500 citra *normal* (fouling level 0–10%), 400 citra *warning* (fouling 10–25%),