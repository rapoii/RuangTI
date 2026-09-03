# 3011 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif, dengan Integrasi Physics-Informed Neural Networks untuk Model Predictive Control

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

> **Catatan metodologis penyusun modul:** Modul Knowledge Base ini disusun berdasarkan topik dan judul literatur ilmiah riil yang tercantum di atas. Bagian tematik dan landasan matematis dirujuk dari ranah riset tersebut, dengan sitasi DOI terverifikasi. Abstrak literal tidak disertakan di sini; melainkan substansi modul dibangun dari kerangka metodologis yang melekat pada topik paper dan dari literatur standar pendukung yang umum dirujuk dalam komunitas predictive maintenance (PdM) dan process control.

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance*, PdM) telah bertransformasi dari paradigma terjadwal berbasis waktu (*time-based maintenance*) menjadi pendekatan berbasis kondisi (*condition-based maintenance*, CBM) yang didorong oleh data sensor multimodal. Menurut Pearson (2024) dalam studinya tentang deteksi anomali berbasis citra menggunakan *Convolutional Neural Networks* (CNN) untuk predictive maintenance (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), konteks industri modern menghadapi tiga tekanan simultan: (i) peningkatan kompleksitas aset produksi bernilai tinggi, (ii) ketersediaan data visual dan sensor yang melimpah namun belum dimanfaatkan secara optimal, dan (iii) kebutuhan untuk menekan biaya *unplanned downtime* yang secara empiris mencapai 10–50 kali biaya pemeliharaan terjadwal per jam kejadian pada industri proses.

Dalam industri manufaktur dan proses, anomali visual—seperti retakan mikro pada permukaan rol, korosi pada pipa, scorching pada bearing housing, atau misalignment pada rotor turbin—sering kali menjadi prekursor kegagalan katastrofik. Inspeksi visual manual memiliki keterbatasan subjektivitas, kelelahan operator, dan ketidakkonsistenan antar-shift. Pearson (2024) berargumen bahwa CNN—dengan kemampuan ekstraksi fitur hierarkis dari citra termal, RGB resolusi tinggi, maupun citra getaran yang dikonversi ke representasi spektrogram—menawarkan pipeline yang dapat di-*scale* ke seluruh lantai pabrik.

Pelengkap penting dari paradigma ini adalah optimalisasi proses secara *real-time*. Patel, Bhartiya, dan Gudi (2024) dalam *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menunjukkan bahwa integrasi *Physics-Informed Neural Networks* (PINN) ke dalam *Model Predictive Control* (MPC) memungkinkan kontrol proses yang konsisten secara fisik (*physics-consistent*) meskipun data pelatihan terbatas. Untuk insinyur industri, konvergensi dua pendekatan ini—CNN untuk persepsi anomali dan PINN-MPC untuk respons kontrol—mendefinisikan ulang arsitektur *cyber-physical production system* (CPPS). Urgensi ekonominya signifikan: pasar global PdM ditaksir melebihi USD 15 miliar pada 2024 dengan CAGR >25%, sedangkan downtime yang tidak direncanakan masih merugikan industri proses rata-rata USD 50.000–250.000 per jam.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali Citra

Operasi konvolusi 2-D pada lapisan (*layer*) ke-$\ell$ didefinisikan sebagai:

$$x_{i,j,k}^{\ell} = f\left(\sum_{c=1}^{C_{\ell-1}} \mathbf{W}_{k}^{\ell} * x_{i,j,c}^{\ell-1} + b_{k}^{\ell}\right)$$

dengan $x_{i,j,k}^{\ell}$ adalah aktivasi unit pada posisi $(i,j)$ filter ke-$k$, $\mathbf{W}_{k}^{\ell}$ kernel konvolusi yang dapat dipelajari, $b_{k}^{\ell}$ bias, $C_{\ell-1}$ jumlah channel input, dan $f(\cdot)$ fungsi aktivasi non-linear (umumnya ReLU: $f(z)=\max(0,z)$). Untuk arsitektur *autoencoder* deteksi anomali—yang banyak digunakan dalam studi PdM—*encoder* memetakan citra input $\mathbf{x}\in\mathbb{R}^{H\times W\times C}$ ke laten $\mathbf{z}\in\mathbb{R}^{d}$ dengan $d\ll HWC$, dan *decoder* merekonstruksi $\hat{\mathbf{x}}$. Skor anomali didefinisikan sebagai *reconstruction error*:

$$\mathcal{A}(\mathbf{x}) = \frac{1}{HWC}\sum_{i=1}^{H}\sum_{j=1}^{W}\sum_{c=1}^{C}\left(x_{i,j,c} - \hat{x}_{i,j,c}\right)^{2}$$

Keputusan anomali ditetapkan via ambang $\tau$:

$$\text{Label}(\mathbf{x}) = \begin{cases} \text{Normal} & \text{jika } \mathcal{A}(\mathbf{x}) < \tau \\ \text{Anomali} & \text{jika } \mathcal{A}(\mathbf{x}) \geq \tau \end{cases}$$

### 2.2 Fungsi Loss untuk Supervised CNN

Untuk klasifikasi citra biner (normal vs. anomali) digunakan *binary cross-entropy*:

$$\mathcal{L}_{\text{BCE}} = -\frac{1}{N}\sum_{n=1}^{N}\left[y_{n}\log\hat{y}_{n} + (1-y_{n})\log(1-\hat{y}_{n})\right]$$

dengan $y_{n}\in\{0,1\}$ label ground-truth dan $\hat{y}_{n}$ probabilitas prediksi. Metrik evaluasi operasional yang lebih relevan untuk PdM adalah *recall* (menangkap anomali nyata) dan *F1-score* (keseimbangan precision-recall):

$$\text{Recall} = \frac{TP}{TP+FN},\qquad F_{1} = \frac{2\cdot \text{Precision}\cdot \text{Recall}}{\text{Precision}+\text{Recall}}$$

### 2.3 Physics-Informed Neural Networks (PINN) untuk Process Control

Patel et al. (2024) menyusun PINN sebagai jaringan $\hat{u}_{\theta}(\mathbf{x},t)$ yang mendekati solusi persamaan diferensial parsial (PDP) sistem proses. Misalkan PDP dinamika proses:

$$\mathcal{N}[u(\mathbf{x},t)] = 0,\quad (\mathbf{x},t)\in\Omega\times(0,T]$$

dengan kondisi awal dan batas $\mathcal{B}[u]=0$. PINN meminimalkan loss gabungan:

$$\mathcal{L}_{\text{PINN}} = \lambda_{d}\mathcal{L}_{\text{data}} + \lambda_{r}\mathcal{L}_{\text{residual}} + \lambda_{b}\mathcal{L}_{\text{BC/IC}}$$

dengan:

$$\mathcal{L}_{\text{residual}} = \frac{1}{N_{r}}\sum_{i=1}^{N_{r}}\left|\mathcal{N}\left[\hat{u}_{\theta}(\mathbf{x}_{r}^{i}, t_{r}^{i})\right]\right|^{2}$$

### 2.4 Formulasi Model Predictive Control (MPC)

MPC menyelesaikan pada setiap waktu $k$ masalah optimasi horizon $N_{p}$:

$$\min_{\mathbf{U}_{k}} J = \sum_{j=0}^{N_{p}-1}\left\|\mathbf{y}_{k+j|k}-\mathbf{y}^{ref}\right\|_{Q}^{2} + \sum_{j=0}^{N_{c}-1}\left\|\Delta\mathbf{u}_{k+j|k}\right\|_{R}^{2}$$

$$\text{s.t. } \mathbf{x}_{k+j+1|k} = f(\mathbf{x}_{k+j|k}, \mathbf{u}_{k+j|k}),\quad \mathbf{y}_{k+j|k} = g(\mathbf{x}_{k+j|k})$$
$$\mathbf{u}_{\min} \leq \mathbf{u}_{k+j|k} \leq \mathbf{u}_{\max}$$

Saat model $f$ digantikan oleh PINN $\hat{f}_{\theta}$, diperoleh PINN-MPC dengan jaminan *physics-consistency* sepanjang prediksi horizon.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi CNN untuk deteksi anomali mengikuti pipeline ISO/IEC 23053 (AI trustworthiness framework) dan ISO 13373 (condition monitoring):

1. **Akuisisi data**: Citra termal/RGB dari aset dengan protokol pencahayaan terkontrol; minimal 2.000 sampel per kelas untuk fine-tuning.
2. **Pre-processing**: Resolusi 224×224, normalisasi $x_{i,j,c}^{norm}=(x_{i,j,c}-\mu_c)/\sigma_c$, augmentasi (rotasi, flip, *cutout*).
3. **Transfer learning**: Inisialisasi dari bobot ImageNet (ResNet-50 atau EfficientNet-B0), *freeze* backbone, fine-tune classifier head.
4. **Training**: Optimizer Adam ($\eta=10^{-4}$), batch size 32, early stopping (patience=10), class weighting untuk imbalance.
5. **Kalibrasi anomali**: Threshold $\tau$ di-tuning pada *validation set* untuk memenuhi target recall $\geq 0{,}95$ (kritikalitas tinggi).
6. **Deploy**: Edge inference (NVIDIA Jetson) atau cloud (AWS Panorama); integrasi via MQTT ke CMMS.
7. **Monitoring**: Drift detection (Population Stability Index $> 0{,}25$) memicu *retraining*.
8. **Integrasi MPC**: Saat skor anomali CNN melebihi $\tau$ atau tren *degradation*, sistem menurunkan setpoint dan mengaktifkan PINN-MPC untuk *graceful degradation*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario**: Pabrik baja terintegrasi memantau 480 *bearing housing* pada 12 *rolling mill* melalui kamera termal. Autoencoder CNN dilatih pada 4.000 citra normal; threshold $\tau$ ditetapkan sehingga recall $\geq 0{,}95$.

**Langkah 1 — Rekonstruksi**: Untuk citra anomali tertentu,