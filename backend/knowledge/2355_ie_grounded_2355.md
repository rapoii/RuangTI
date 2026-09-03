# 2355 — Deteksi Anomali Berbasis Citra pada Peralatan Industri menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Sektor manufaktur dan proses global menghadapi tekanan biaya operasional yang semakin berat akibat waktu henti (*downtime*) tak terjadwal yang, menurut literatur pemeliharaan industri, menyedot hingga 20–30% dari total biaya produksi (Pearson, 2024). Peralatan kritis seperti pompa sentrifugal, motor induksi, kompresor, dan sistem perpipaan mengalami degradasi yang lambat namun pasti — korosi internal, retakan mikro pada bearing, misalignment, kebocoran pada flange, serta overheating pada electrical junction box. Deteksi anomali secara visual dan termal menggunakan Convolutional Neural Networks (CNN) menjadi tulang punggung strategi *predictive maintenance* (PdM) era Industri 4.0 karena kemampuannya mengekstraksi fitur hierarkis spasial-temporal langsung dari citra tanpa rekayasa fitur manual.

Pearson (2024) dalam studinya di SSRN menyoroti bahwa integrasi CNN dengan arsitektur *autoencoder* dan *one-class learning* memungkinkan industri mencapai *true positive rate* melebihi 92% dengan *false alarm rate* di bawah 4% pada dataset MVTec AD dan custom thermal imagery dari plant rotasi. Urgensi ekonominya sangat nyata: pada industri semen dengan kapasitas 5.000 ton/hari, satu jam unplanned shutdown kiln bernilai lebih dari USD 45.000 dalam kehilangan produksi dan biaya restart. Studi Pearson membuktikan bahwa implementasi vision-based anomaly detection menurunkan Mean Time To Repair (MTTR) sebesar 37% dan meningkatkan Overall Equipment Effectiveness (OEE) rata-rata 8,2 poin persentase.

Pada sisi kendali proses, Patel, Bhartiya, dan Gudi (2024) dalam IFAC-PapersOnLine menunjukkan bahwa Model Predictive Control (MPC) berbasis Physics-Informed Neural Networks (PINN) mampu mengintegrasikan persamaan konservasi massa, momentum, dan energi ke dalam fungsi kerugian jaringan saraf. Pendekatan hibrida fisika-ML ini penting karena sistem deteksi anomali vision-based harus beroperasi di dalam plant yang dikendalikan MPC untuk menjaga kestabilan proses saat kegiatan inspeksi berlangsung. Sinergi keduanya merepresentasikan arsitektur *cyber-physical system* masa depan di mana persepsi visual dan kendali prediktif saling melengkapi dalam satu *digital twin* industri.

Tujuan modul ini adalah membekali praktisi Teknik Industri dengan kerangka konseptual, matematis, dan operasional untuk merancang, mengimplementasikan, dan mengevaluasi sistem deteksi anomali berbasis citra yang memenuhi standar ISA-95, IEC 62443 untuk keamanan siber industri, serta ISO 13374 untuk condition monitoring.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Deteksi Anomali

Operasi konvolusi 2D pada lapisan CNN didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} w_{m,n}^{(l)} \cdot x_{i+m,\, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $y_{i,j}^{(l)}$ adalah fitur output pada posisi $(i,j)$ lapisan $l$, $w_{m,n}^{(l)}$ adalah kernel konvolusi berukuran $k \times k$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear seperti ReLU: $f(z) = \max(0, z)$.

Untuk arsitektur autoencoder yang digunakan dalam deteksi anomali *unsupervised*, fungsi objektifnya adalah meminimalkan *reconstruction error*:

$$\mathcal{L}_{AE}(\theta, \phi) = \frac{1}{N}\sum_{i=1}^{N}\left\| x_i - \mathcal{D}_\phi(\mathcal{E}_\theta(x_i)) \right\|^2_2$$

di mana $\mathcal{E}_\theta$ adalah encoder dengan parameter $\theta$, $\mathcal{D}_\phi$ adalah decoder dengan parameter $\phi$, dan $x_i \in \mathbb{R}^{H \times W \times C}$ adalah citra input.

### 2.2 Skor Anomali dan Threshold Decision

Skor anomali untuk citra baru $x_{new}$ dihitung sebagai:

$$s(x_{new}) = \frac{1}{H W}\sum_{i=1}^{H}\sum_{j=1}^{W}\left(x_{i,j} - \hat{x}_{i,j}\right)^2$$

di mana $\hat{x} = \mathcal{D}_\phi(\mathcal{E}_\theta(x_{new}))$ adalah rekonstruksi. Keputusan klasifikasi mengikuti:

$$\hat{y} = \begin{cases} \text{Normal} & \text{jika } s(x_{new}) \leq \tau \\ \text{Anomali} & \text{jika } s(x_{new}) > \tau \end{cases}$$

Threshold $\tau$ umumnya ditetapkan pada persentil ke-95 dari distribusi skor rekonstruksi data训练 normal: $\tau = Q_{0.95}(\{s(x_i)\}_{i \in \mathcal{D}_{normal}})$.

### 2.3 Physics-Informed Neural Network Loss (Patel et al., 2024)

Untuk integrasi dengan MPC, Patel dkk. (2024) merumuskan PINN loss sebagai kombinasi data-driven dan physics-based term:

$$\mathcal{L}_{PINN} = \lambda_{data}\,\mathcal{L}_{data} + \lambda_{phy}\,\mathcal{L}_{phy} + \lambda_{BC}\,\mathcal{L}_{BC}$$

di mana $\mathcal{L}_{phy}$ menghukum residual persamaan diferensial parsial governing process, misalnya persamaan difusi-reaksi:

$$\mathcal{L}_{phy} = \frac{1}{N_r}\sum_{r=1}^{N_r}\left\| \frac{\partial \hat{u}}{\partial t} - \mathcal{D}\nabla^2\hat{u} + k\hat{u} \right\|^2$$

dengan $\mathcal{D}$ koefisien difusi dan $k$ konstanta reaksi. Gradien dihitung via automatic differentiation.

### 2.4 Formulasi MPC

Problem optimal control dalam MPC diselesaikan setiap timestep horizon prediksi $N_p$:

$$\min_{\mathbf{u}_0,\dots,\mathbf{u}_{N_p-1}} \sum_{k=0}^{N_p-1}\left[(x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k\right] + (x_{N_p} - x_{ref})^T P (x_{N_p} - x_{ref})$$

subject to $x_{k+1} = f_{PINN}(x_k, u_k)$ dengan $f_{PINN}$ adalah model proses yang didekati jaringan saraf informed-fisika.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali vision-based mengikuti SOP 8 tahap yang diturunkan dari metodologi Pearson (2024) dan selaras dengan kerangka MLOps untuk industri:

**Tahap 1 – Asset Criticality Ranking:** Gunakan FMEA (Failure Mode and Effects Analysis) untuk memprioritaskan peralatan. Hitung Risk Priority Number (RPN):

$$RPN = S \times O \times D$$

di mana $S$ (Severity, 1–10), $O$ (Occurrence, 1–10), dan $D$ (Detection, 1–10). Kamera inspeksi dipasang hanya pada aset dengan RPN ≥ 50.

**Tahap 2 – Image Acquisition Setup:** Pilih sensor sesuai aplikasi:
- **Visible light camera** (5–20 MP) untuk inspeksi visual eksternal
- **Thermal camera** (resolusi 640×480, sensitivitas ≤ 50 mK) untuk hotspot detection
- **Hyperspectral camera** untuk deteksi korosi tersembunyi

Sampling rate mengikuti standar ISO 13374-1: minimum 1 frame per 5 menit untuk kondisi steady-state, 10 fps untuk rotating equipment.

**Tahap 3 – Data Preprocessing & Annotation:** Pipeline standar:
1. Resize ke $224 \times 224 \times 3$
2. Normalisasi: $x_{norm} = (x - \mu)/\sigma$ dengan $\mu, \sigma$ statistik ImageNet
3. Augmentasi: rotasi ±15°, flipping horizontal, brightness jitter ±10%, cutout
4. Untuk training set normal: minimal 5.000 citra per kelas aset; anomali disintesis via *CutPaste* atau difusi.

**Tahap 4 – Model Architecture Selection:** Gunakan EfficientNet-B4 atau ResNet-50 sebagai backbone encoder, dengan decoder simetris. Untuk plant dengan keterbatasan edge compute, MobileNetV3-Large memberikan trade-off akurasi-latensi optimal.

**Tahap 5 – Training Protocol:**
- Optimizer: AdamW dengan learning rate $\eta = 3 \times 10^{-4}$, weight decay $10^{-4}$
- Batch size: 32, Epochs: 100 dengan early stopping patience 10
- Mixed precision training (FP16) untuk akselerasi GPU
- Loss function: $\mathcal{L}_{AE} + \beta \cdot \mathcal{L}_{perceptual}$ dengan $\beta = 0.1$

**Tahap 6 – Threshold Calibration:** Pada validation set berisi 1.000 citra normal dan 200 anomali, optimalkan $\tau$ untuk memenuhi target $F_1 \geq 0.90$ menggunakan grid search.

**Tahap 7 – Edge Deployment & Integration:** Model dikuantisasi INT8 dan di-deploy pada edge device (NVIDIA Jetson Orin, 40 TOPS) dengan inferensi latency target ≤ 50 ms. Output diserialisasi via MQTT ke SCADA/DCS layer (Level 2 ISA-95).

**Tahap 8 – Continuous Learning Loop:** Mekanisme feedback dari teknisi lapangan dimasukkan ke *active learning* pipeline untuk retraining mingguan, dengan *model drift detection* berbasis Page-Hinkley test pada distribusi $s(x)$.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Motor Induksi 250 kW di Plant Petrokimia

Sebuah motor induksi tiga fasa 250 kW, 4 kutub, slip nominal $s_n = 0.03$, diinspeksi menggunakan kamera termal FLIR T540 (resolusi 464×348, NETD < 25 mK). Suhu ambient $T_{amb} = 30°C$.

**Langkah 1: Perhitungan Kerugian Energi dan Downtime Cost**

Asumsi: harga listrik industri Rp 1.500/kWh, produksi bernilai Rp 25 juta/jam, probabilitas unplanned failure tanpa PdM: $P_f = 0.15$/tahun, dengan PdM vision-based: $P_f' = 0.03$/tahun.

Expected Annual Loss (EAL) tanpa PdM:

$$EAL = P_f \times (C_{down} \cdot t_{repair} + C_{lost\_prod})$$

dengan $t_{repair} = 8$ jam, $C_{down} = \text{Rp } 5 \text{ juta/jam}$ (suku cadang + teknisi), $C_{lost\_prod} = 8 \times 25 = \text{Rp } 200 \text{ juta}$.

$$EAL_{no\,PdM} = 0.15 \times 205.000.000 = \text{Rp } 30.750.000/\text{tahun}$$

Dengan PdM: $EAL_{PdM} = 0.03 \times 205.000.000 = \text{Rp } 6.150.000/\text{tahun}$.

Penghematan kotor: $\Delta EAL = \text{Rp } 24.600.000/\text{tahun}$. Dengan biaya investasi sistem (kamera + edge AI + integrasi) sekitar Rp 180 juta, payback period:

$$PP = \frac{180.000.000}{24.600.000} = 7,32 \text{ bulan}$$

**Langkah 2: Perhitungan Reconstruction Error pada Citra Bearing**

Ambil patch $64 \times 64$ dari citra termal bearing housing. Encoder memetakan ke latent vector $z \in \mathbb{R}^{128}$, decoder merekonstruksi. Untuk citra normal (T = 58°C di bearing, sesuai kelas isolasi F), MSE:

$$s_{normal} = \frac{1}{64 \times 64}\sum_{i,j}(x_{ij} - \hat{x}_{ij})^2 = 0{,}0042$$

Untuk citra anomali (overheating, T = 92°C — indikasi bearing failure):

$$s_{anomali} = 0{,}0287$$

Rasio signal-to-noise: $\text{SNR}_{anomali} = 10 \log_{10}(0{,}0287/0{,}0042) = 8{,}35$ dB, jauh di atas threshold deteksi yang ditetapkan $\tau = 0{,}012$ (persentil 95 data normal).

**Langkah 3: Perhitungan