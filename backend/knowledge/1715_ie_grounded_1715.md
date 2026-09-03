# 1715 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif serta Integrasi Physics-Informed Neural Networks pada Model Predictive Control Sistem Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance*, PdM) telah berevolusi menjadi pilar strategis dalam rekayasa keandalan (*reliability engineering*) modern karena tekanan ekonomi yang ditimbulkan oleh waktu henti tidak terjadwal (*unplanned downtime*). Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa industri manufaktur dan proses global masih menanggung kerugian sekitar USD 50 miliar per tahun akibat kegagalan peralatan yang sebenarnya dapat diantisipasi melalui inspeksi visual otomatis berbasis pembelajaran mendalam. Pearson (2024) menunjukkan bahwa arsitektur Convolutional Neural Networks (CNN) yang dirancang untuk mendeteksi anomali permukaan—seperti retakan pada impeller pompa, korosi pada bejana tekan, dan delaminasi pada belt conveyor—mampu menurunkan *mean time to failure* (MTTF) yang tidak terprediksi hingga 38% bila dibandingkan dengan jadwal pemeliharaan berbasis waktu (time-based maintenance) konvensional.

Urgensi teknis dari pendekatan ini muncul dari tiga keterbatasan utama inspeksi manual: (i) subjektivitas operator yang menghasilkan variabilitas antar-penilai (*inter-rater variability*) sebesar 12–18% pada deteksi cacat mikro; (ii) ketidakmampuan manusia memantau aset dalam kondisi lingkungan ekstrem (suhu > 300°C, radiasi tinggi, atmosfer eksplosif); dan (iii) biaya inspeksi periodik yang mencapai USD 120–250 per titik ukur pada industri petrokimia. Pearson (2024) secara eksplisit mengajukan pipeline deep learning dua tahap—*feature extractor* CNN ter-*pre-train* (misal ResNet-50, EfficientNet-B3) yang di-*fine-tune* pada dataset cacat domain-spesifik, dilanjutkan dengan modul *anomaly scoring* berbasis autoencoder variasional (VAE)—untuk menjawab keterbatasan tersebut. Pearson mengklaim bahwa kombinasi representasi hierarkis citra dengan *reconstruction error thresholding* menghasilkan *area under the ROC curve* (AUC) di atas 0,96 pada kasus deteksi cacat bearing dan korosi pipa.

Konteks ini semakin relevan ketika integrasikan dengan sistem kendali proses. Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) memperkenalkan kerangka Model Predictive Control (MPC) berbasis Physics-Informed Neural Networks (PINN) yang mampu menggantikan model *first-principles* yang mahal secara komputasional pada sistem proses multi-variabel. PINN memastikan bahwa prediksi state trajectory tetap konsisten dengan hukum kekekalan massa, energi, dan momentum, sehingga when digabung dengan output inspeksi visual dari modul Pearson (2024), diperoleh闭环(*closed-loop*) operasional yang **meramal** degradasi sekaligus **mengkompensasi** dinamika proses secara real-time. Integrasi ini menjawab tantangan transisi Industri 4.0 menuju *self-optimizing plant* dan menjadi fondasi filosofi *cyber-physical production systems* (CPPS).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Pearson (2024) membangun CNN dengan lapisan konvolusi yang menerapkan operasi diskret atas volume fitur input $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$. Untuk kernel $\mathbf{K} \in \mathbb{R}^{k_h \times k_w \times C}$ dan bias $b$, peta fitur keluaran dihitung sebagai:

$$
y_{i,j} = f\!\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1}\sum_{c=0}^{C-1} x_{i+m,\,j+n,\,c} \cdot k_{m,n,c} + b\right)
$$

dengan $f(\cdot)$ merupakan fungsi aktivasi non-linear Pearson (2024) memilih **ReLU** karena kestabilan gradien dan efisiensi komputasi:

$$
f(z) = \max(0, z)
$$

### 2.2 Modul Autoencoder Variasional untuk Anomaly Scoring

Encoder memetakan citra masukan $\mathbf{x} \in \mathbb{R}^{H \times W \times 3}$ ke ruang laten melalui distribusi Gaussian $\mathcal{N}(\boldsymbol{\mu}(\mathbf{x}), \boldsymbol{\sigma}^2(\mathbf{x}))$. Reparameterization trick:

$$
\mathbf{z} = \boldsymbol{\mu}(\mathbf{x}) + \boldsymbol{\sigma}(\mathbf{x}) \odot \boldsymbol{\epsilon}, \quad \boldsymbol{\epsilon} \sim \mathcal{N}(\mathbf{0}, \mathbf{I})
$$

Fungsi kerugian VAE Pearson (2024) adalah kombinasi rekonstruksi dan regularisasi Kullback–Leibler:

$$
\mathcal{L}_{\text{VAE}}(\theta, \phi) = \underbrace{\|\mathbf{x} - \hat{\mathbf{x}}\|_2^2}_{\text{rekonstruksi}} + \beta \underbrace{D_{\text{KL}}\!\left(q_\phi(\mathbf{z}|\mathbf{x}) \,\|\, p(\mathbf{z})\right)}_{\text{regularisasi}}
$$

dengan $\beta$ adalah koefisien pengontrol trade-off (di-setting 0,001–0,01). Anomaly score ditetapkan sebagai:

$$
A(\mathbf{x}) = \|\mathbf{x} - \hat{\mathbf{x}}\|_2^2 > \tau
$$

Ambang batas $\tau$ ditentukan dari persentil ke-99 *reconstruction error* pada data kondisi normal (inliers), menghasilkan titik operasi spesifik-plant yang menimbang *false positive rate* (FPR) terhadap *false negative rate* (FNR).

### 2.3 Physics-Informed Neural Network untuk Model Predictive Control

Patel, Bhartiya, & Gudi (2024) melatih jaringan saraf $\hat{\mathbf{u}}_\theta(\mathbf{x}, t)$ yang menghampiri solusi persamaan diferensial parsial (PDP) sistem proses. Misalkan residu PDP adalah:

$$
\mathcal{R}_\theta(\mathbf{x}, t) := \frac{\partial \hat{\mathbf{u}}_\theta}{\partial t} + \mathcal{N}_\lambda[\hat{\mathbf{u}}_\theta] - \mathbf{f}(\mathbf{x}, t)
$$

maka *physics loss* dirumuskan sebagai ekspektasi kuadrat atas *collocation points*:

$$
\mathcal{L}_{\text{phys}}(\theta) = \frac{1}{N_c}\sum_{i=1}^{N_c} \left\|\mathcal{R}_\theta(\mathbf{x}_i, t_i)\right\|_2^2
$$

Total loss PINN mencakup data loss $\mathcal{L}_{\text{data}}$ dan *boundary/initial condition loss* $\mathcal{L}_{\text{BC/IC}}$:

$$
\mathcal{L}_{\text{PINN}} = w_1 \mathcal{L}_{\text{data}} + w_2 \mathcal{L}_{\text{phys}} + w_3 \mathcal{L}_{\text{BC/IC}}
$$

### 2.4 Formulasi Model Predictive Control

Dengan model proses diskret $ \mathbf{x}_{k+1} = \mathbf{F}_\theta(\mathbf{x}_k, \mathbf{u}_k) $ di mana $\mathbf{F}_\theta$ adalah surrogate PINN, MPC meminimalkan biaya horizon prediksi $N_p$ :

$$
\min_{\mathbf{u}_0,\ldots,\mathbf{u}_{N_p-1}} \; J = \sum_{k=0}^{N_p-1}\left[\|\mathbf{x}_k - \mathbf{x}_{\text{ref}}\|_{\mathbf{Q}}^2 + \|\mathbf{u}_k - \mathbf{u}_{\text{ref}}\|_{\mathbf{R}}^2\right] + \|\mathbf{x}_{N_p} - \mathbf{x}_{\text{ref}}\|_{\mathbf{P}}^2
$$

Kendala operasional dan batas aktuator:

$$
\mathbf{x}_{\min} \le \mathbf{x}_k \le \mathbf{x}_{\max}, \quad \mathbf{u}_{\min} \le \mathbf{u}_k \le \mathbf{u}_{\max}, \quad \Delta\mathbf{u}_{\min} \le \mathbf{u}_k - \mathbf{u}_{k-1} \le \Delta\mathbf{u}_{\max}
$$

Keunggulan integratif, seperti ditegaskan Patel et al. (2024), adalah gradien $\partial \mathbf{F}_\theta / \partial \mathbf{u}$ dapat dihitung secara analitik melalui *automatic differentiation*, sehingga solusi MPC konvergen dalam < 30 ms per *sampling time* pada plant reaktor CSTR.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) bersama kerangka Patel et al. (2024) menyusun SOP lima-tahap yang dapat diadopsi langsung pada lantai pabrik:

**Tahap 1 – Akuisisi Data Visual & Instrumentasi Proses.**
Pasang kamera IP *high-resolution* (minimal 5 MP, IP66) pada titik inspeksi kritis (misal area bearing housing, flange katup, dan fin-tube heat exchanger). Kamera di-trigger oleh Programmable Logic Controller (PLC) yang juga membaca sinyal Pressure Transmitter (PT), Temperature Transmitter (TT), dan Flow Transmitter (FT) sesuai ISO 10495 untuk instrumentasi proses. Laju sampling disarankan 1 frame tiap 5 detik dengan resolusi 1920×1080 piksel.

**Tahap 2 – Pra-pemrosesan & Augmentasi Citra.**
Terapkan pipeline: *resize* → 224×224, normalisasi $(x - \mu)/\sigma$ menggunakan statistik ImageNet, augmentasi via *random rotation* (±15°), *horizontal flip*, dan *CutMix* untuk meningkatkan generalisasi model terhadap variasi pencahayaan di lantai pabrik. Pearson (2024) melaporkan bahwa augmentasi tersebut meningkatkan akurasi dari 0,89 menjadi 0,94 pada test set independen.

**Tahap 3 – Fine-Tuning CNN & Pelatihan VAE.**
Inisialisasi bobot dengan bobot *pre-trained* ResNet-50 (ImageNet). Fine-tune 50 epoch terakhir dengan *learning rate* $10^{-4}$ dan *optimizer* AdamW. Latih VAE secara terpisah dengan *reconstruction loss* MSE. Validasi silang 5-fold untuk menghindari overfitting.

**Tahap 4 – Thresholding Anomali & Integrasi PINN-MPC.**
Hitung ambang batas $\tau$ sebagai persentil ke-99 distribusi *reconstruction error* pada 10.000 citra normal. Stream hasil deteksi anomali (skor $A(\mathbf{x})$) ke *digital twin* yang menjalankan MPC berbasis PINN. *Health indicator* $h \in [0,1]$ didefinisikan:

$$
h(t) = 1 - \frac{A(\mathbf{x}_t)}{\tau}
$$

Nilai $h < 0{,}85$ akan memicu *reconfiguration* MPC: trajektori referensi $\mathbf{x}_{\text{ref}}$ disesuaikan dan gain konservatif $\mathbf{Q}$ dinaikkan 20% untuk mengurangi *stress* pada peralatan yang terindikasi cacat.

**Tahap 5 – Alarm, Log, dan Continuous Learning.**
Sistem menulis hasil inspeksi ke historian (PI System atau OSIsoft) sesuai ISO 22400 untuk *key performance indicators*. Alarm dikirimkan ke *control room* jika $h < 0{,}70$ (level *critical*). Setiap 30 hari, model di-*retrain* dengan data baru menggunakan *active learning* untuk mencegah *concept drift*.

Diagram alir integrasi: **Citra → CNN → Skor Anomali