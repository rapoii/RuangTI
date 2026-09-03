# 1955 — Deteksi Anomali Berbasis Citra dan Model Predictive Control Menggunakan Physics-Informed Neural Networks untuk Sistem Pemeliharaan Prediktif Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era **Industry 4.0** dan transisi menuju **Industry 5.0** telah memaksa pelaku industri manufaktur dan proses untuk mengadopsi paradigma *cyber-physical production systems* (CPPS) yang mengintegrasikan sensor multimodal, komputasi awan, dan algoritma kecerdasan buatan ke dalam lini produksi. Dalam konteks ini, downtime tak terjadwal (*unplanned downtime*) masih menjadi salah satu kontributor terbesar terhadap inefisiensi rantai pasok global. Laporan Deloitte (2023) memperkirakan bahwa biaya downtime pada industri manufaktur bernilai lebih dari USD 50 miliar per tahun, dengan satu jam downtime pada lini *semiconductor fabrication* mampu menimbulkan kerugian hingga USD 1,3 juta. Kebutuhan akan sistem pemeliharaan prediktif (*predictive maintenance* — PdM) yang akurat, real-time, dan mampu memproses data multimodal menjadi semakin mendesak.

Pearson (2024) dalam artikelnya yang berjudul *"Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance"* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menyajikan kerangka deteksi anomali berbasis citra yang mengandalkan arsitektur **Convolutional Neural Networks** (CNN) untuk mengklasifikasikan kondisi visual komponen kritis seperti bearing, pompa sentrifugal, motor listrik, dan *heat exchanger*. Pendekatan ini mengisi celah yang ditinggalkan oleh sistem condition monitoring tradisional berbasis sensor getaran atau termografi yang memiliki keterbatasan dalam hal cakupan inspeksi dan biaya akuisisi data. Pearson menunjukkan bahwa integrasi citra resolusi tinggi dengan arsitektur CNN modern (misalnya EfficientNet-B3 dan ResNet-50) mampu mencapai *F1-score* lebih dari 0,94 pada dataset MVTec AD dan DAGM, dengan tingkat *false positive rate* (FPR) di bawah 2,5%.

Di sisi komplementer, Patel, Bhartiya, dan Gudi (2024) dalam makalahnya yang diterbitkan di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) mengusulkan pendekatan **Model Predictive Control (MPC)** berbasis **Physics-Informed Neural Networks** (PINN) yang menggabungkan persamaan diferensial parsial (PDP) hukum fisika pertama dengan jaringan saraf dalam. Pendekatan ini sangat relevan untuk sistem proses seperti kolom distilasi, reaktor CSTR, dan *heat exchanger networks*, di mana kontrol optimal harus memperhitungkan dinamika non-linear dan kendala proses (*process constraints*). Sinergi antara deteksi anomali berbasis citra (Pearson, 2024) dan kontrol prediktif berbasis PINN (Patel et al., 2024) membentuk arsitektur **Predictive Maintenance Closed Loop (PMCL)** yang memungkinkan sistem industri tidak hanya memprediksi kegagalan tetapi juga secara proaktif menyesuaikan parameter operasi guna memperpanjang *remaining useful life* (RUL) aset.

Urgensi ekonomi dari integrasi kedua pendekatan ini dapat diukur melalui metrik **Overall Equipment Effectiveness (OEE)**, di mana kombinasi PdM-MPC berpotensi meningkatkan availabilitas aset dari 85% menjadi 95% dan menurunkan *quality losses* hingga 30%. Dengan demikian, modul 1955 ini menjadi fondasi teknis bagi insinyur industri dalam merancang sistem pemeliharaan dan kontrol generasi berikutnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali Citra

Pearson (2024) menggunakan arsitektur CNN dengan *backbone* EfficientNet-B3 sebagai *feature extractor*. Keluaran diekstrak ke dalam *latent space* berdimensi $d = 1280$, kemudian dipetakan ke kelas *normal* atau *anomali* melalui *fully connected layer*. Fungsi aktivasi softmax menghasilkan probabilitas posterior:

$$P(y=c \mid \mathbf{x}) = \frac{\exp(\mathbf{w}_c^{\top} \mathbf{h} + b_c)}{\sum_{k=1}^{C} \exp(\mathbf{w}_k^{\top} \mathbf{h} + b_k)}$$

di mana $\mathbf{x} \in \mathbb{R}^{H \times W \times 3}$ adalah tensor citra masukan, $\mathbf{h} \in \mathbb{R}^{d}$ adalah vektor fitur tersembunyi, $C$ adalah jumlah kelas, dan $\mathbf{w}_c, b_c$ adalah parameter bobot serta bias untuk kelas $c$. Fungsi kerugian yang digunakan adalah *binary cross-entropy*:

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log \hat{y}_i + (1-y_i)\log(1-\hat{y}_i) \right]$$

dengan $\hat{y}_i = P(y_i = 1 \mid \mathbf{x}_i)$ adalah probabilitas prediksi anomali pada sampel ke-$i$.

### 2.2 Physics-Informed Neural Networks untuk MPC

Patel et al. (2024) memperkenalkan PINN yang menggabungkan *data-driven loss* dengan *physics-based loss*. Untuk sistem proses non-linear dengan state $\mathbf{x}(t) \in \mathbb{R}^{n_x}$ dan input kontrol $\mathbf{u}(t) \in \mathbb{R}^{n_u}$, dinamika sistem didefinisikan oleh:

$$\dot{\mathbf{x}}(t) = f(\mathbf{x}(t), \mathbf{u}(t))$$

Jaringan saraf $\hat{\mathbf{x}}_\theta(t)$ dengan parameter $\theta$ dilatih untuk memenuhi dua fungsi kerugian secara simultan:

$$\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}} + \lambda_c \mathcal{L}_{\text{constraint}}$$

di mana:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_r} \sum_{j=1}^{N_r} \left\| \frac{d\hat{\mathbf{x}}_\theta}{dt}\bigg|_{t_j} - f(\hat{\mathbf{x}}_\theta(t_j), \mathbf{u}(t_j)) \right\|^2_2$$

dengan $N_r$ adalah jumlah *collocation points* (residual points) pada domain waktu. Turunan $d\hat{\mathbf{x}}_\theta/dt$ dihitung melalui *automatic differentiation* pada jaringan saraf. Bobot $\lambda_d, \lambda_p, \lambda_c$ merupakan *hyperparameter* yang mengontrol keseimbangan kontribusi setiap komponen.

### 2.3 Formulasi Model Predictive Control

MPC mengoptimalkan trajectory kontrol pada *prediction horizon* $H_p$ sembari memenuhi *control horizon* $H_c$ dengan meminimalkan fungsi biaya kuadratik:

$$\min_{\mathbf{U}} J = \sum_{k=0}^{H_p-1} \left[ (\mathbf{x}_{k} - \mathbf{x}_{\text{ref}})^{\top} \mathbf{Q} (\mathbf{x}_{k} - \mathbf{x}_{\text{ref}}) + \mathbf{u}_k^{\top} \mathbf{R} \mathbf{u}_k \right]$$

$$\text{subject to: } \mathbf{x}_{k+1} = \hat{f}_{\text{PINN}}(\mathbf{x}_k, \mathbf{u}_k), \quad \mathbf{x}_{\min} \le \mathbf{x}_k \le \mathbf{x}_{\max}, \quad \mathbf{u}_{\min} \le \mathbf{u}_k \le \mathbf{u}_{\max}$$

Matriks $\mathbf{Q} \succeq 0$ dan $\mathbf{R} \succ 0$ adalah *weighting matrices* untuk deviasi state dan upaya kontrol. Pada implementasi Patel et al. (2024), $\hat{f}_{\text{PINN}}$ menggantikan model first-principles sebagai *internal predictive model* dalam MPC, sehingga menghasilkan *surrogate model* yang akurat secara fisik namun fleksibel secara komputasional.

### 2.4 Integrasi dengan Remaining Useful Life

Ketika Pearson (2024) mendeteksi anomali $a_i$ pada komponen ke-$i$, sinyal tersebut dimasukkan ke model **Proportional Hazard Model** untuk mengestimasi RUL:

$$\lambda_i(t) = \lambda_0(t) \exp(\beta^{\top} \mathbf{z}_i(t))$$

dengan $\lambda_0(t)$ adalah *baseline hazard*, $\mathbf{z}_i(t)$ adalah kovariat (termasuk skor anomali CNN), dan $\beta$ adalah vektor koefisien regresi. RUL didefinisikan sebagai:

$$\text{RUL}_i = \int_{t}^{\infty} S_i(\tau) \, d\tau, \quad S_i(t) = \exp\left(-\int_0^t \lambda_i(u)\, du\right)$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem integratif deteksi anomali-MPC di lingkungan industri mengikuti SOP berlapis yang dapat dipetakan ke dalam **8 tahap prosedural** berikut:

### Tahap 1: Akuisisi Data & Image Acquisition
- **Input:** Citra resolusi tinggi (minimal $1920 \times 1080$ piksel) dari kamera industri IP67 (misalnya FLIR Blackfly S atau Basler ace 2).
- **Standar:** ISO 13373-1 untuk condition monitoring getaran; ASTM E2862 untuk image-based inspection.
- **Sampling rate:** 1 frame per 5 detik pada mode continuous, 30 fps pada mode event-triggered.

### Tahap 2: Pre-processing Citra
- Resizing ke $300 \times 300$ piksel (standar input EfficientNet-B3).
- Normalisasi piksel: $\mathbf{x}_{\text{norm}} = (\mathbf{x}/255 - \mu)/\sigma$, dengan $\mu = [0.485, 0.456, 0.406]$ dan $\sigma = [0.229, 0.224, 0.225]$ (statistik ImageNet).
- Augmentasi: rotasi $\pm 15°}$, *horizontal flip*, *color jitter* ($\Delta H = \pm 0,02$, $\Delta S = \pm 0,02$).

### Tahap 3: Pelatihan & Validasi CNN
- *Train/Validation/Test split*: 70%/15%/15%.
- *Optimizer*: AdamW dengan *learning rate* $\eta = 3 \times 10^{-4}$ dan *weight decay* $10^{-4}$.
- *Batch size*: 32; *epochs*: 50 dengan *early stopping* (patience = 7).
- *Hardware*: GPU NVIDIA A100 (80 GB VRAM).

### Tahap 4: Identifikasi Persamaan Fisika Proses
- Turunkan PDP dari hukum kekekalan massa, energi, dan momentum.
- Contoh untuk CSTR: $V \frac{dC_A}{dt} = F(C_{A,\text{in}} - C_A) - kC_A$, $V\rho C_p \frac{dT}{dt} = \rho C_p F(T_{\text{in}} - T) + \Delta H k C_A - UA(T - T_c)$.

### Tahap 5: Konstruksi PINN
- Arsitektur: MLP 4-layer dengan 64 neuron per layer, aktivasi *tanh*.
- Residual points: $N_r = 10.000$ pada domain $t \in [0, T_{\text{horizon}}]$.
- *Training loss weights*: $\lambda_d = 1,0$, $\lambda_p = 10,0$, $\lambda_c = 5,0$.

### Tahap 6: Formulasi MPC
- Prediction horizon $H_p = 20$ step, control horizon $H_c = 5$ step.
- Solver: IPOPT (Interior Point Optimizer) dengan *time step* $\Delta t = 0,1$ jam.
- Constraint: suhu reaktor $T \in [320, 380]$ K; konsentrasi $C_A \in [0,1]$ mol/L.

### Tahap 7: Integrasi Closed-Loop
- Modul deteksi anomali memicu *re-planning* trajectory MPC ketika skor anomali melebihi threshold $\tau = 0,75$.
- Output CNN digunakan sebagai *disturbance variable* dalam MPC: $\mathbf{d}_k = [\text{score}_{\text{CNN}}, \text{RUL}_{\text{est}}]$.

### Tahap 8: Monitoring & Continuous Improvement
- Logging seluruh prediksi ke **time-series database** (InfluxDB / TimescaleDB).
- Dashboard real-time menggunakan **Grafana** dengan KPI: OEE, MTBF, MTTR, *anomaly detection rate*, *control tracking error* RMSE.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik