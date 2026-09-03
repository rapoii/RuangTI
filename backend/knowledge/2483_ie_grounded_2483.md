# 2483 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *Model Predictive Control using Physics Informed Neural Networks for Process Systems*. IFAC-PapersOnLine. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (*predictive maintenance* / PdM) telah menjadi pilar strategis dalam Transformasi Industri 4.0, khususnya pada sektor manufaktur, energi, dan proses kimia yang mengandalkan ketersediaan (*availability*) peralatan kritis. Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) memposisikan deteksi anomali berbasis citra sebagai salah satu pendekatan paling prospektif karena sifatnya yang non-instrumen, non-kontak, dan mampu menangkap degradasi morfologis permukaan secara real-time. Berbeda dengan sensor getaran atau termokopel yang hanya menghasilkan sinyal satu dimensi, citra visual memberikan informasi spasial dua dimensi yang merepresentasikan kondisi fisik aktual dari komponen seperti impeller pompa, permukaan bearing, isolator motor listrik, dan jalur konveyor.

Urgensi ekonomis dari pendekatan ini dapat ditelusuri melalui biaya *unplanned downtime* pada industri proses. Pada industri petrokimia global, biaya satu jam downtime berkisar USD 50.000 – USD 250.000 tergantung kompleksitas unit (Hofmann & Sauer, 2024, dirujuk dalam Pearson, 2024). Pearson (2024) menunjukkan bahwa integrasi Convolutional Neural Networks (CNN) untuk menganalisis citra visual mampu menurunkan false negative rate deteksi cacat hingga di bawah 5%, sehingga memberikan jendela waktu mitigasi yang lebih panjang bagi tim rekayasa pemeliharaan.

Secara strategis, framework PdM berbasis CNN juga harus mampu berkomunikasi dengan sistem kendali upstream seperti Model Predictive Control (MPC). Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) mengemukakan bahwa Physics-Informed Neural Networks (PINNs) dapat menjembatani kesenjangan antara model fisika deterministik dan model data-driven. Sinergi keduanya memungkinkan sistem deteksi anomali tidak hanya mendeteksi cacat, tetapi juga memproyeksikan trajectory degradasi sehingga keputusan shutdown dapat dioptimasi berdasarkan horizon predictive control. Pendekatan ini secara langsung mendukung filosofi Total Productive Maintenance (TPM) dan Risk-Based Inspection (RBI) yang menjadi standar di banyak perusahaan manufaktur kelas dunia.

Dalam konteks Industri 5.0 yang sedang berkembang, integrasi manusia-mesin juga menjadi perhatian. Sistem berbasis citra harus dapat diinterpretasikan (*explainable AI*) oleh operator lantai pabrik, sehingga bukan sekadar "black-box" yang mengeluarkan alarm. Inilah yang menjadi latar belakang kuat bagi penelitian Pearson (2024) dan elaborasi kontrol lanjutan oleh Patel et al. (2024).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Citra Industri

CNN bekerja melalui operasi konvolusi diskrit dua dimensi. Untuk citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dan kernel $K \in \mathbb{R}^{h \times w \times C}$, feature map keluaran dihitung sebagai:

$$Y_{i,j} = \sigma\left(\sum_{m=0}^{h-1}\sum_{n=0}^{w-1} \sum_{c=0}^{C-1} X_{i+m,\, j+n,\, c} \cdot K_{m,n,c} + b\right)$$

di mana $b$ adalah bias dan $\sigma$ adalah fungsi aktivasi non-linear, umumnya ReLU $\sigma(x) = \max(0,x)$. Untuk tugas deteksi anomali biner (normal vs. anomali), lapisan dense akhir menggunakan aktivasi sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$ sehingga menghasilkan probabilitas $p(\text{anomali} \mid X) \in [0,1]$.

### 2.2 Formulasi Anomaly Score

Pearson (2024) mengadopsi paradigma *reconstruction-based* anomaly detection, di mana autoencoder $\phi_\theta$ dilatih hanya pada citra kondisi normal. Skor anomali didefinisikan sebagai jarak rekonstruksi antara citra input dan citra rekonstruksi:

$$s(X) = \frac{1}{HW}\sum_{i=1}^{H}\sum_{j=1}^{W} \left\| X_{i,j} - \phi_\theta(X)_{i,j} \right\|_2^2$$

Suatu citra diklasifikasikan anomali jika $s(X) > \tau$, dengan threshold $\tau$ ditentukan melalui analisis statistik *validation set* menggunakan kuantil ke-99: $\tau = Q_{0.99}(s(X_{\text{val}}))$.

### 2.3 Fungsi Loss dan Optimasi

Fungsi loss biner untuk klasifikasi akhir didefinisikan sebagai binary cross-entropy:

$$L_{\text{BCE}} = -\frac{1}{N}\sum_{n=1}^{N}\left[y_n \log(\hat{y}_n) + (1-y_n)\log(1-\hat{y}_n)\right]$$

di mana $y_n \in \{0,1\}$ adalah label ground truth dan $\hat{y}_n$ adalah prediksi model. Untuk pelatihan autoencoder, digunakan Mean Squared Error (MSE) sebagai loss rekonstruksi:

$$L_{\text{MSE}} = \frac{1}{NHW}\sum_{n=1}^{N}\sum_{i=1}^{H}\sum_{j=1}^{W}\left(X_{n,i,j} - \hat{X}_{n,i,j}\right)^2$$

### 2.4 Integrasi dengan Physics-Informed Neural Networks (PINNs)

Patel et al. (2024) menyusun loss PINN yang menggabungkan data eksperimen dan residual persamaan diferensial parsial (PDE) governing:

$$L_{\text{PINN}} = \lambda_{\text{data}}\, L_{\text{data}} + \lambda_{\text{physics}}\, L_{\text{physics}}$$

di mana:

$$L_{\text{physics}} = \frac{1}{N_r}\sum_{r=1}^{N_r}\left\| \mathcal{N}[u](x_r, t_r) \right\|^2$$

dengan $\mathcal{N}[\cdot]$ adalah operator diferensial dari governing equation (misalnya persamaan difusi panas atau dinamika fluida). Konstanta $\lambda_{\text{data}}$ dan $\lambda_{\text{physics}}$ adalah bobot regularisasi.

### 2.5 Formulasi Model Predictive Control (MPC)

MPC di suatu horizon prediksi $N_p$ memformulasikan masalah optimasi:

$$\min_{u_0,\dots,u_{N_p-1}} J = \sum_{k=0}^{N_p-1}\left[(x_k - x_{\text{ref}})^\top Q (x_k - x_{\text{ref}}) + u_k^\top R u_k\right]$$

$$\text{subject to:} \quad x_{k+1} = Ax_k + Bu_k,\quad x_{\min} \leq x_k \leq x_{\max},\quad u_{\min} \leq u_k \leq u_{\max}$$

Matriks $Q$ dan $R$ berturut-turut adalah bobot state tracking dan effort kontrol. Ketika anomali terdeteksi oleh CNN, horizon $N_p$ dan bobot $Q, R$ dapat di-adjust ulang oleh modul keputusan, sebagaimana disarankan oleh integrasi arsitektur Patel et al. (2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti SOP enam tahapan yang disusun berdasarkan metodologi Pearson (2024):

1. **Akuisisi Data Citra.** Pemasangan kamera industri (misalnya FLIR Blackfly atau Basler ace) dengan rating IP67 pada housing pelindung, resolusi minimum 1920×1080 piksel, frame rate 5–15 fps untuk inspeksi periodik atau 30 fps untuk continuous monitoring. Pencahayaan LED terkontrol (ring light, diffuse dome) wajib untuk menghindari variansi iluminasi yang menurunkan akurasi model.

2. **Pra-pemrosesan Citra.** Normalisasi piksel ke rentang $[0,1]$, augmentasi data (*rotation*, *flip*, *brightness jitter*, *Gaussian noise*), dan segmentasi ROI (*Region of Interest*) menggunakan algoritma Otsu atau anotasi manual melalui tools *LabelImg*.

3. **Pelatihan Model.** Arsitektur CNN yang direkomendasikan Pearson (2024) berbasis *transfer learning* dari ResNet-50 atau EfficientNet-B3 yang sudah pretrained pada ImageNet, dilanjutkan *fine-tuning* pada dataset anomali industri. Hyperparameter: batch size = 32, learning rate = $10^{-4}$ dengan scheduler *cosine annealing*, optimizer Adam, epoch = 50–100 dengan *early stopping* (patience = 10).

4. **Kalibrasi Threshold.** Menggunakan data *validation set* untuk menentukan $\tau$ pada kuantil 99% agar target false positive rate $\leq 1\%$.

5. **Deployment & Integrasi.** Model di-export ke format ONNX atau TensorRT dan dideploy pada edge device (NVIDIA Jetson Orin) atau cloud (AWS Panorama). Output prediksi dikirim melalui protokol MQTT ke *Manufacturing Execution System* (MES).

6. **Monitoring & Retraining Berkala.** Logging keputusan model ke *data lake* untuk *concept drift detection*. Retraining dijadwalkan setiap 3–6 bulan atau ketika *drift metric* (misalnya PSI $> 0.25$) terlampaui.

```
Diagram Alir: Akuisisi Citra → Pra-pemrosesan → CNN Inference → Anomaly Score →
[Score ≤ τ] → Logging Normal → END
[Score > τ] → Alarm + MPC Horizon Adjustment (Patel et al., 2024) → Work Order CMMS → END
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Plant Petrokimia dengan 500 Pompa Sentrifugal

**Parameter operasional:** Sebuah unit *cracker* memiliki 500 pompa sentrifugal kritis. Sistem CNN-PdM dipasang untuk mendeteksi anomali visual: kebocoran seal, korosi impeller, dan *cavitation*.

| Parameter | Nilai |
|---|---|
| Jumlah aset kritis $N$ | 500 unit |
| Biaya downtime/jam $C_d$ | USD 75.000 |
| Frekuensi unplanned failure (baseline) | 2,4 insiden/bulan |
| MTTR (Mean Time to Repair)