# 1843 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif, dengan Integrasi Physics-Informed Neural Networks pada Model Predictive Control Sistem Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah menggeser paradigma pemeliharaan peralatan industri dari paradigma *reactive* dan *preventive* menuju *predictive maintenance* (PdM). Pergeseran ini didorong oleh data sensor resolusi tinggi — termasuk citra termal, foto RGB, dan citra vibro-akustik — yang sebelumnya tidak dimanfaatkan secara optimal. James Pearson (2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menunjukkan bahwa integrasi *Convolutional Neural Networks* (CNN) pada lini inspeksi visual mampu mendeteksi anomali mikro pada peralatan putar (pompa sentrifugal, kompresor, motor listrik, dan konveyor) dengan *false alarm rate* yang signifikan lebih rendah dibanding inspeksi visual manual. Dalam konteks industri proses, kelemahan model CNN murni data-driven adalah ketidakmampuannya menjamin kepatuhan terhadap hukum kekekalan massa, energi, dan momentum. Untuk menutup gap tersebut, Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) memperkenalkan kerangka *Physics-Informed Neural Networks* (PINN) yang digabungkan dengan *Model Predictive Control* (MPC) pada sistem proses, sehingga keputusan kendali tidak hanya akurat secara statistik tetapi juga konsisten secara fisika.

Urgensi ekonomis dari integrasi kedua pendekatan ini dapat dilihat dari data industri manufaktur global: studi-studi referensi terkini (Pearson, 2024) melaporkan bahwa downtime tak terjadwal pada pabrik proses bernilai rata-rata $USD\,50{,}000$ hingga $USD\,250{,}000$ per jam, dengan 70–80% kegagalan berakar pada kerusakan bearing, misalignment, kebocoranseal, dan korosi yang sebenarnya sudah terdeteksi dalam citra beberapa minggu sebelum kegagalan total. Dengan akuisisi citra beresolusi $1024 \times 1024$ piksel pada kecepatan 30 fps menggunakan kamera industri *GigE Vision*, volume data mentah sebuah lini produksi tunggal dapat mencapai 12–18 TB per hari. CNN dengan arsitektur modern seperti ResNet-50, EfficientNet-B3, atau Vision Transformer (ViT) mampu mengekstraksi fitur hierarkis dari data tersebut, namun membutuhkan strategi komputasi tepi (*edge computing*) untuk memenuhi latensi < 50 ms yang disyaratkan oleh SOP manufaktur modern. Di sisi lain, MPC-PINN menyumbangkan kemampuan *look-ahead horizon* kendali selama $H_p = 20$–$60$ langkah waktu, yang sangat penting untuk sistem proses multi-variabel dengan keterkaitan *input-output* yang kuat.

Secara manajerial, adopsi PdM berbasis CNN-MPC memberikan tiga nilai strategis: pertama, *overall equipment effectiveness* (OEE) dapat ditingkatkan dari baseline 65% menjadi rentang 82–88%; kedua, biaya siklus hidup (*life-cycle cost*) peralatan dapat ditekan 18–25% melalui pergantian komponen tepat waktu; ketiga, kepatuhan terhadap standar ISO 13373 (condition monitoring), ISO 55000 (asset management), dan IEC 61508 (functional safety) menjadi lebih mudah dibuktikan secara terdokumentasi. Dokumen modul ini akan membedah formulasi matematis, SOP implementasi, studi kasus kuantitatif, dan evaluasi kritis terhadap kedua pendekatan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali Citra

Model CNN yang digunakan oleh Pearson (2024) mengikuti konvensi *supervised classifier* dengan backbone feature extractor. Untuk citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$, operasi konvolusi dua-dimensi didefinisikan sebagai:

$$
\mathbf{Y}[i,j] = (\mathbf{X} * \mathbf{K})[i,j] = \sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} \mathbf{X}[i+m, j+n] \cdot \mathbf{K}[m,n] + b
$$

dengan $\mathbf{K}$ adalah kernel konvolusi berukuran $k_h \times k_w$, dan $b$ adalah bias. Aktivasi non-linear menggunakan ReLU:

$$
\sigma(z) = \max(0, z)
$$

Fungsi kerugian lintas-entropi kategorikal yang diminimalkan selama pelatihan adalah:

$$
\mathcal{L}_{\text{CE}} = -\frac{1}{N}\sum_{i=1}^{N} \sum_{c=1}^{C} y_{i,c} \log\!\left(\hat{y}_{i,c}\right)
$$

dengan $y_{i,c}$ adalah label *one-hot* ground truth, $\hat{y}_{i,c}$ adalah probabilitas keluaran softmax, $N$ jumlah sampel, dan $C$ jumlah kelas. Untuk menyeimbangkan kelas anomali yang jarang, Pearson (2024) memperkenalkan bobot kelas $w_c$ pada *focal loss*:

$$
\mathcal{L}_{\text{focal}} = -\frac{1}{N}\sum_{i=1}^{N} \sum_{c=1}^{C} w_c \left(1 - \hat{y}_{i,c}\right)^{\gamma} y_{i,c} \log\!\left(\hat{y}_{i,c}\right)
$$

dengan parameter fokus $\gamma = 2.0$ yang menekan kontribusi *easy negative* dan memaksa gradien fokus pada sampel anomali yang sulit diklasifikasi.

### 2.2 Skor Anomali dan Thresholding

Untuk aplikasi tanpa label anomali eksplisit, digunakan autoencoder konvolusional. Skor anomali didefinisikan sebagai galat rekonstruksi:

$$
A(\mathbf{x}) = \left\|\mathbf{x} - \hat{\mathbf{x}}\right\|_2^2 = \sum_{p=1}^{P}\left(x_p - \hat{x}_p\right)^2
$$

Threshold optimal ditetapkan dengan prinsip *Youden's J-statistic* pada kurva ROC:

$$
J = \max_{t}\!\left(\text{TPR}(t) - \text{FPR}(t)\right) = \max_{t}\!\left(\text{Recall}(t) + \text{Specificity}(t) - 1\right)
$$

dengan $t$ adalah threshold keputusan. Pearson (2024) melaporkan titik operasi $J = 0{,}91$ pada dataset MVTec AD, menghasilkan F1-score $0{,}943$.

### 2.3 Physics-Informed Neural Network (PINN)

Patel et al. (2024) merumuskan PINN sebagai jaringan saraf $\hat{f}_\theta(x, u)$ yang mendekati dinamika sistem proses $\dot{x} = f(x, u)$ dengan parameter $\theta$. Fungsi kerugian PINN menggabungkan kerugian data dan kerugian fisika:

$$
\mathcal{L}_{\text{PINN}} = \lambda_{\text{data}}\, \mathcal{L}_{\text{data}} + \lambda_{\text{physics}}\, \mathcal{L}_{\text{physics}}
$$

dengan:

$$
\mathcal{L}_{\text{data}} = \frac{1}{N_d}\sum_{i=1}^{N_d} \left\|x_i^{\text{meas}} - \hat{x}_\theta(x_i^{\text{meas}}, u_i)\right\|^2
$$

$$
\mathcal{L}_{\text{physics}} = \frac{1}{N_c}\sum_{j=1}^{N_c} \left\| \frac{d\hat{x}_\theta}{dt}\bigg|_{t_j} - f\!\left(\hat{x}_\theta(t_j), u(t_j)\right)\right\|^2
$$

Turunan total $\frac{d\hat{x}_\theta}{dt}$ dihitung melalui *automatic differentiation* PyTorch/JAX, sehingga tidak memerlukan finite difference numerik. Untuk sistem reaktor Continuous Stirred Tank Reactor (CSTR), dinamika first-principles-nya adalah:

$$
\frac{dC_A}{dt} = \frac{F}{V}(C_{A,\text{in}} - C_A) - k_0 e^{-E_a/(RT)} C_A
$$

$$
\frac{dT}{dt} = \frac{F}{V}(T_{\text{in}} - T) + \frac{-\Delta H}{\rho C_p} k_0 e^{-E_a/(RT)} C_A + \frac{UA}{V\rho C_p}(T_c - T)
$$

Konsistensi persamaan-persamaan ini di dalam jaringan saraf menjamin bahwa prediksi model memenuhi hukum kekekalan massa dan energi.

### 2.4 Model Predictive Control (MPC) dengan Model PINN

Formulasi MPC standar adalah masalah optimasi constrained pada horizon prediksi $H_p$ dan horizon kontrol $H_c$:

$$
\min_{\mathbf{u}_{0:H_c-1}} \; J = \sum_{k=0}^{H_p-1} \left[(x_k - x_{\text{ref}})^T Q (x_k - x_{\text{ref}}) + u_k^T R u_k\right] + (x_{H_p} - x_{\text{ref}})^T P (x_{H_p} - x_{\text{ref}})
$$

dengan kendala:

$$
x_{k+1} = x_k + \int_{t_k}^{t_{k+1}} \hat{f}_\theta(x, u)\, dt, \quad u_{\min} \leq u_k \leq u_{\max}, \quad \Delta u_{\min} \leq u_k - u_{k-1} \leq \Delta u_{\max}
$$

Matriks bobot $Q \succeq 0$ dan $R \succ 0$ adalah *tuning parameter* yang menyeimbangkan performa tracking dan upaya kendali. Patel et al. (2024) menyelesaikan masalah QP ini setiap detik menggunakan interior-point solver IPOPT dengan warm-start dari iterasi sebelumnya, sehingga waktu komputasi rata-rata turun menjadi 180–220 ms.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Akuisisi Data Citra (Modul CNN-PdM)

1. **Pra-survei lini produksi** — identifikasi *critical assets* berdasarkan analisis FMEA dan Pareto downtime historis.
2. **Instalasi kamera industri** — pilih kamera *machine vision* dengan global shutter (misal FLIR Blackfly S, Basler ace 2), protokol GigE Vision atau USB3 Vision, resolusi minimum $1280 \times 1024$, laju frame 30 fps.
3. **Kondisi pencahayaan** — pasang ring light LED 5600 K dengan diffuser, atau gunakan housing *IP67* dengan illuminator infra-merah untuk operasi 24/7.