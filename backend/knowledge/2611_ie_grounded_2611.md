# 2611 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance — PdM) telah bergeser dari paradigma konvensional berbasis getaran satu-dimensi dan analisis akustik manual menuju paradigma baru yang mengandalkan citra visual resolusi tinggi serta algoritma *deep learning*. Pergeseran ini didorong oleh tiga kekuatan struktural: (i) konvergensi sensor kamera termal, kamera cahaya tampak, dan hyperspectral imaging yang semakin terjangkau di lantai pabrik; (ii) ledakan kapasitas komputasi edge berbasis GPU industri (NVIDIA Jetson, Intel OpenVINO); serta (iii) menurunnya tingkat *mean time to detect* (MTTD) kerusakan yang dibutuhkan pada sistem produksi *just-in-time* modern. James Pearson (2024) dalam tulisannya yang dipublikasikan melalui *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menekankan bahwa integrasi Convolutional Neural Networks (CNN) ke dalam lini inspeksi visual mampu menekan *false alarm rate* hingga di bawah 3%, sebuah ambang batas yang sulit dicapai menggunakan statistical process control (SPC) konvensional berbasis aturan Shewhart.

Urgensi ekonomi dari adopsi pendekatan ini sangat nyata. Menurut laporan internal industri manufaktur Eropa yang dirujuk oleh Pearson, downtime tak terencana pada lini pengemasan *food & beverage* rata-rata menimbulkan kerugian €18.000–€42.000 per jam, dengan 67% kegagalan yang sebenarnya dapat dideteksi secara visual (retakan housing bearing, korosi poros, delaminasi insulation) setidaknya 30–90 jam sebelum *catastrophic failure*. Dalam konteks *Industry 4.0*, keputusan deteksi anomali tidak lagi berdiri sendiri, melainkan menjadi umpan balik langsung bagi *model predictive control* (MPC). Di sinilah kontribusi Patel, Bhartiya, dan Gudi (2024) pada *IFAC-PapersOnLine* dengan DOI [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menjadi relevan: mereka mengusulkan Physics-Informed Neural Networks (PINN) sebagai pengganti model first-principles untuk sistem proses, di mana sinyal degradasi yang dideteksi oleh modul vision-based CNN Pearson dapat digunakan sebagai *state variable* nyata yang mengoreksi trajectory MPC.

Dengan demikian, integrasi kedua pendekatan membentuk arsitektur *closed-loop cognitive maintenance*: CNN mendeteksi anomali, PINN-MPC merestrukturisasi *set-point* operasi untuk mengompensasi degradasi yang terdeteksi, dan operator menerima rekomendasi dalam horizon prediksi $N_p$. Pendekatan ini selaras dengan kerangka acuan ISO 13373-*Condition monitoring and diagnostics of machines* serta ISO 23247 untuk *digital twin framework*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Networks untuk Deteksi Anomali

Pearson (2024) mengimplementasikan varian autoencoder convolutional yang dilatih hanya pada citra kondisi normal (one-class learning). Setiap citra input $x \in \mathbb{R}^{H \times W \times C}$ dipetakan ke ruang laten $z \in \mathbb{R}^{d}$ oleh encoder $f_\theta$, lalu direkonstruksi oleh decoder $g_\phi$. Anomali dideteksi melalui *reconstruction error*. Formulasi operasionalnya adalah:

$$\hat{x} = g_\phi(f_\theta(x))$$

$$A(x) = \frac{1}{HWC}\sum_{i=1}^{H}\sum_{j=1}^{W}\sum_{c=1}^{C}\left(x_{i,j,c} - \hat{x}_{i,j,c}\right)^2$$

di mana $A(x)$ adalah *anomaly score* rata-rata piksel. Keputusan klasifikasi biner mengikuti aturan ambang $\tau$:

$$\text{Label}(x) = \begin{cases} \text{Normal}, & \text{jika } A(x) \leq \tau \\ \text{Anomali}, & \text{jika } A(x) > \tau \end{cases}$$

Operasi konvolusi diskrit yang menjadi tulang punggung CNN dinyatakan oleh:

$$y_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{k-1}\sum_{n=0}^{k-1} w_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

dengan $w_{m,n}^{(l)}$ adalah kernel berukuran $k \times k$ pada lapisan $l$, $b^{(l)}$ adalah bias, dan $\sigma$ adalah fungsi aktivasi ReLU:

$$\sigma(u) = \max(0, u)$$

Fungsi kerugian untuk pelatihan autoencoder menggabungkan *Mean Squared Error* (MSE) dengan regularisasi sparsity untuk mencegah *overfitting*:

$$\mathcal{L}_{AE}(\theta,\phi) = \frac{1}{N}\sum_{n=1}^{N}\left\|x_n - g_\phi(f_\theta(x_n))\right\|_2^2 + \lambda \sum_{l=1}^{L}\text{KL}(\rho \| \hat{\rho}_l)$$

di mana $\text{KL}(\rho \| \hat{\rho}_l) = \rho \log\frac{\rho}{\hat{\rho}_l} + (1-\rho)\log\frac{1-\rho}{1-\hat{\rho}_l}$ adalah divergensi Kullback–Leibler antara aktivitas sparsity target $\rho$ dan rata-rata aktivasi aktual $\hat{\rho}_l$.

### 2.2 Physics-Informed Neural Networks sebagai Umpan Balik MPC

Patel et al. (2024) merumuskan PINN yang menggabungkan *data loss* dengan *physics loss* berbasis persamaan diferensial parsial sistem proses. Untuk sistem nonlinear $\dot{x} = \mathcal{F}(x, u)$, total loss dinyatakan:

$$\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics}$$

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{i=1}^{N_p}\left\|\frac{\partial \hat{x}}{\partial t}(t_i) - \mathcal{F}(\hat{x}(t_i), u(t_i))\right\|_2^2$$

Dalam konteks integrasi dengan deteksi CNN, sinyal $A(x) > \tau$ digunakan sebagai *soft constraint* yang menggeser batas operasi aman:

$$J = \sum_{k=0}^{N-1}\left[(x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k\right]$$

dengan kendala tambahan $x_k \in \mathcal{X}_{safe}(A_k)$ di mana himpunan layak menyusut sebanding dengan intensitas anomali.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP berlapis yang distandarkan dengan acuan ISO 13373-1 untuk *condition monitoring* dan IEC 61784 untuk integrasi jaringan industri. Tahapan utamanya:

**Tahap 1 — Akuisisi & Kalibrasi Citra.** Kamera ditempatkan pada jarak $d$ sedemikian hingga *field of view* memenuhi luas fisik target dengan resolusi minimal 0,5 mm/piksel. Pencahayaan dikontrol dalam ruang lingkup *machine vision* (CIE D65, iluminansi 1000–2000 lux) untuk menjamin konsistensi radiometrik.

**Tahap 2 — Preprocessing.** Citra dinormalisasi melalui:

$$\tilde{x}_{i,j,c} = \frac{x_{i,j,c} - \mu_c}{\sigma_c + \epsilon}$$

di mana $\mu_c$ dan $\sigma_c$ adalah rata-rata dan standar deviasi kanal $c$ yang dihitung dari dataset referensi kondisi normal.

**Tahap 3 — Pelatihan Autoencoder CNN.** Dataset hanya berisi citra kondisi operasional normal (≥10.000 sampel). Validasi menggunakan 10-fold cross-validation. Early stopping diaktifkan dengan patience 15 epoch.

**Tahap 4 — Penentuan Threshold Anomali.** Threshold ditetapkan sebagai persentil ke-99 dari skor rekonstruksi data validasi normal: $\tau = P_{99}(A(\mathcal{X}_{val}))$.

**Tahap 5 — Integrasi dengan PINN-MPC.** Sinyal anomali dimasukkan ke dalam sistem kontrol sebagai variabel keadaan tambahan $d_k$, dengan horizon prediksi $N_p$ = 10 langkah.

**Tahap 6 — Logging & Audit.** Seluruh keputusan deteksi dicatat dalam *time-series database* sesuai IEC 62264 untuk traceability.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Inspeksi otomatis housing bearing motor induksi 3 fasa pada lini produksi *food processing* kapasitas 8.000 unit/jam.

**Parameter Input:**

| Parameter | Nilai |
|---|---|
| Dimensi citra input | $224 \times 224 \times 3$ |
| Dataset normal | 12.000 citra |
| Dataset anomali (uji) | 800 citra (4 kelas cacat) |
| Arsitektur encoder | Conv(32,3×3) → Conv(64,3×3) → Conv(128,3×3) → Dense(64) |
| Optimizer | Adam, lr = $10^{-4}$ |
| Epoch | 60 |
| $\tau$ (threshold) | P$_{99}$ dari validation set |

**Langkah 1 — Perhitungan Anomaly Score.** Ambil satu citra uji $x^*$ yang mengandung retakan housing. Forward pass menghasilkan rekonstruksi $\hat{x}^*$. Misalnya, MSE total yang dihasilkan:

$$A(x^*) = \frac{1}{224 \cdot 224 \cdot 3}\sum_{i,j,c}(x^*_{i,j,c} - \hat{x}^*_{i,j,c})^2 = 0{,}0412$$

**Langkah 2 — Penentuan Threshold.** Dari 1.200 citra validasi normal, skor rekonstruksi memiliki rata-rata $\bar{A} = 0{,}0068$ dan standar deviasi $s = 0{,}0019$. Persentil ke-99 (asumsi Gaussian) dihitung sebagai:

$$\tau = \bar{A} + z_{0{,}99} \cdot s = 0{,}0068 + 2{,}326 \cdot 0{,}0019 = 0{,}01122$$

**Langkah 3 — Keputusan Klasifikasi.** Karena $A(x^*) = 0{,}0412 > \tau = 0{,}01122$, sistem mengklasifikasikan $x^*$ sebagai **anomali** dengan confidence ratio:

$$\text{CR} = \frac{A(x^*) - \tau}{\tau} = \frac{0{,}0412 - 0{,}01122}{0{,}01122} = 2{,}67$$

artinya intensitas anomali 2,67 kali di atas ambang batas operasi aman.

**Langkah 4 — Confusion Matrix dan Metrik.** Setelah pengujian terhadap 800 citra anomali dan 1.200 citra normal, diperoleh hasil hipotetis:

- True Positive (TP) = 762
- False Positive (FP) = 27
- True Negative (TN) = 1.173
- False Negative (FN) = 38

Akurasi, presisi, recall, dan F1-score:

$$\text{Accuracy} = \frac{TP + TN}{TP + FP + TN + FN} = \frac{762+1173}{2000} = 96{,}75\%$$

$$\text{Precision} = \frac{TP}{TP + FP} = \frac{762}{789} = 96{,}58\%$$

$$\text{Recall} = \frac{TP}{TP + FN} = \frac{762}{800} = 95{,}25\%$$

$$\text{F1} = 2 \cdot \frac{P \cdot R}{P + R} = 2 \cdot \frac{0{,}9658 \cdot 0{,}9525}{1{,}9183} = 95{,}91\%$$

**Langkah 5 — Integrasi dengan PINN-MPC.** Sinyal anomali ini menggeser *set-point* operasi motor dari $n_{ref}$ = 1.480 rpm menjadi $n_{safe}$ = 1.350 rpm, mengurangi risiko *catastrophic failure* sebesar estimasi 78% berdasarkan model kerusakan Arr