# 2915 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah bertransformasi dari paradigma berbasis jadwal konvensional menuju paradigma berbasis kondisi (condition-based maintenance) yang digerakkan oleh data. Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menunjukkan bahwa integrasi Convolutional Neural Networks (CNN) ke dalam lini inspeksi visual peralatan industri mampu mendeteksi anomali lebih dini dengan tingkat presisi yang signifikan dibandingkan metode inspeksi manual. Konteks ini menjadi sangat krusial ketika industri manufaktur menghadapi tekanan berupa downtime yang merugikan, biaya perbaikan darurat, serta risiko keselamatan kerja yang tidak terkontrol.

Secara ekonomis, biaya downtime yang tidak direncanakan pada industri proses berskala besar seperti petrokimia, baja, dan semikonduktor dapat mencapai ratusan ribu dolar per jam, tergantung pada kapasitas produksi dan nilai tambah per unit. Pearson (2024) mengemukakan bahwa sistem inspeksi visual otomatis berbasis CNN mampu mengurangi rata-rata *mean time to detect* (MTTD) anomali sebesar 40–60% dibandingkan inspeksi manual, sekaligus menekan *false positive rate* (FPR) di bawah ambang yang dapat diterima operasional. Temuan ini menjadi landasan urgensi adopsi teknologi computer vision dalam arsitektur pemeliharaan modern.

Dari perspektif teknologi, integrasi CNN dengan sistem kontrol proses lanjutan seperti Model Predictive Control (MPC) yang diperkuat Physics-Informed Neural Networks (PINN) —sebagaimana dikaji oleh Patel, Bhartiya, dan Gudi (2024) dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)— memungkinkan loop umpan balik yang adaptif antara kondisi fisik aktual dan keputusan kontrol. Dengan demikian, anomali visual yang terdeteksi pada peralatan kritis tidak hanya berfungsi sebagai pemicu alarm, tetapi juga menjadi sinyal bagi pengendali untuk menyesuaikan parameter operasional secara real-time. Pendekatan ini merepresentasikan konvergensi antara domain computer vision, machine learning, dan control engineering yang menjadi pilar Revolusi Industri 4.0.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Arsitektur deteksi anomali yang digunakan mengikuti paradigma *reconstruction-based* dengan autoencoder convolutional, di mana jaringan dilatih untuk merekonstruksi citra kondisi normal sehingga anomali menghasilkan *reconstruction error* yang tinggi. Operasi konvolusi dua dimensi pada lapisan $l$ didefinisikan sebagai:

$$h_{i,j}^{(l)} = f\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} W_{m,n}^{(l)} \cdot x_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $W_{m,n}^{(l)}$ adalah kernel konvolusi dengan ukuran $M \times N$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear seperti ReLU: $f(z) = \max(0, z)$. Fungsi kerugian rekonstruksi untuk pelatihan didefinisikan sebagai Mean Squared Error (MSE):

$$\mathcal{L}_{MSE} = \frac{1}{N}\sum_{i=1}^{N} \|x_i - \hat{x}_i\|_2^2$$

di mana $x_i$ adalah citra input dan $\hat{x}_i$ adalah rekonstruksinya.

### 2.2 Skor Anomali dan Klasifikasi

Skor anomali untuk setiap citra dihitung berdasarkan rekonstruksi dan digunakan sebagai masukan ambang keputusan:

$$s(x) = \|x - \hat{x}\|_2^2 = \sum_{p,q}(x_{p,q} - \hat{x}_{p,q})^2$$

Keputusan klasifikasi biner (normal/anomali) mengikuti aturan:

$$\hat{y} = \begin{cases} 1 & \text{jika } s(x) \geq \tau \\ 0 & \text{jika } s(x) < \tau \end{cases}$$

di mana $\tau$ adalah ambang optimal yang dipilih berdasarkan kurva ROC untuk memaksimalkan *True Positive Rate* (TPR) sembari meminimalkan *False Positive Rate* (FPR):

$$TPR = \frac{TP}{TP+FN}, \quad FPR = \frac{FP}{FP+TN}$$

### 2.3 Integrasi dengan Physics-Informed Neural Networks (PINN)

Patel, Bhartiya, dan Gudi (2024) mengembangkan kerangka PINN untuk MPC yang menggabungkan hukum fisika dengan jaringan saraf. Fungsi kerugian total PINN adalah:

$$\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda_{phy} \mathcal{L}_{physics}$$

di mana:

$$\mathcal{L}_{data} = \frac{1}{N_d}\sum_{i=1}^{N_d}(y_i^{pred} - y_i^{obs})^2$$

dan $\mathcal{L}_{physics}$ adalah residu persamaan diferensial yang mengatur dinamika sistem. Untuk proses industri, misalnya reaktor dengan dinamika suhu $T(t)$, persamaan konservasi energi dapat ditulis:

$$m c_p \frac{dT}{dt} = \dot{Q}_{in} - \dot{Q}_{out} - U A (T - T_{ambient})$$

Residu PINN memastikan jaringan menghormati kendala fisika ini:

$$\mathcal{L}_{physics} = \frac{1}{N_f}\sum_{j=1}^{N_f}\left\|m c_p \frac{d\hat{T}_j}{dt} - \dot{Q}_{in,j} + \dot{Q}_{out,j} + U A (\hat{T}_j - T_{ambient})\right\|^2$$

Parameter $\lambda_{phy}$ mengontrol bobot relatif antara fitting data dan kepatuhan terhadap hukum fisika. Pendekatan ini menjamin generalisasi model yang lebih baik pada kondisi operasional yang beragam.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN untuk pemeliharaan prediktif mengikuti prosedur operasional standar yang terdiri dari tujuh tahap sistematis:

**Tahap 1: Akuisisi Data Citra.** Pengumpulan dataset citra kondisi normal dan anomali menggunakan kamera industri (misalnya IP67-rated GigE Vision) yang dipasang pada titik inspeksi kritis seperti housing motor, permukaan pipa, atau sambungan las. Resolusi citra minimum 1024×768 piksel dengan iluminasi terkontrol. Dataset dinormalisasi melalui *histogram equalization* dan *rescaling* ke rentang $[0,1]$.

**Tahap 2: Pre-processing dan Augmentasi.** Augmentasi data untuk meningkatkan robustnes model: rotasi acak ±15°, flipping horizontal, penyesuaian brightness ±20%, dan penambahan Gaussian noise dengan $\sigma = 0.01$. Teknik ini mengurangi risiko *overfitting* dan meningkatkan kemampuan generalisasi.

**Tahap 3: Arsitektur dan Pelatihan Model.** Autoencoder convolutional dengan encoder $(3 \rightarrow 32 \rightarrow 64 \rightarrow 128)$ dan decoder simetris. Optimizer Adam dengan *learning rate* $\alpha = 10^{-4}$, *batch size* 32, dan *early stopping* berdasarkan *validation loss* dengan patience 10 epoch.

**Tahap 4: Validasi dan Kalibrasi Ambang.** Ambang keputusan $\tau$ dikalibrasi menggunakan set validasi berlabel. Target operasional: $FPR \leq 5\%$ dengan $TPR \geq 95\%$. Kurva Precision-Recall digunakan sebagai metrik utama untuk dataset yang tidak seimbang.

**Tahap 5: Integrasi dengan Sistem Kontrol.** Output deteksi anomali diintegrasikan ke platform SCADA/DCS melalui protokol OPC-UA atau MQTT. Sinyal anomali menjadi variabel input bagi modul MPC berbasis PINN yang menyesuaikan parameter operasi secara real-time.

**Tahap 6: Pemantauan Kinerja Berkelanjutan.** Metrik *drift detection* (menggunakan Population Stability Index, PSI) diterapkan untuk memantau degradasi performa model akibat perubahan kondisi operasional. Retraining terjadwal dilakukan ketika PSI > 0,25.

**Tahap 7: Loop Umpan Balik dan Pembelajaran.** Hasil inspeksi diverifikasi oleh teknisi ahli dan diumpanbalikkan ke dataset untuk *continuous learning*, memastikan peningkatan akurasi seiring waktu sesuai dengan Standar ISO 55000 untuk manajemen aset dan ISO 13374 untuk condition monitoring.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Deteksi Kerusakan Permukaan pada Pompa Sentrifugal

Sebuah fasilitas petrokimia mengoperasikan 24 pompa sentrifugal untuk sirkulasi fluida proses. Sistem CNN diimplementasikan untuk mendeteksi anomali visual berupa korosi, retakan, dan kebocoran seal. Parameter industri yang digunakan:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah pompa termonitor | 24 | unit |
| Citra per pompa per hari | 144 | citra (interval 10 menit) |
| Biaya downtime per jam | 45.000 | USD |
| Biaya inspeksi manual per pompa | 350 | USD |
| Frekuensi inspeksi manual saat ini | 30 | hari |

**Perhitungan Skor Anomali.** Misalkan citra anomali korosi memiliki nilai piksel rekonstruksi sebagai berikut (sampel 4×4 untuk ilustrasi):

$$x = \begin{bmatrix} 0.82 & 0.79 & 0.85 & 0.81 \\ 0.78 & 0.83 & 0.80 & 0.77 \\ 0.84 & 0.79 & 0.82 & 0.86 \\ 0.80 & 0.78 & 0.83 & 0.81 \end{bmatrix}, \quad \hat{x} = \begin{bmatrix} 0.80 & 0.80 & 0.80 & 0.80 \\ 0.80 & 0.80 & 0.80 & 0.80 \\ 0.80 & 0.80 & 0.80 & 0.80 \\ 0.80 & 0.80 & 0.80 & 0.80 \end{bmatrix}$$

Skor anomali:
$$s(x) = \sum_{p,q}(x_{p,q} - \hat{x}_{p,q})^2 = 0.0015$$

Dengan ambang kalibrasi $\tau = 0.0010$, maka $s(x) = 0.0015 \geq \tau$, sehingga citra diklasifikasikan sebagai anomali.

**Perhitungan Dampak Ekonomi.** Dalam periode satu tahun (365 hari), tanpa sistem otomatis, inspeksi dilakukan setiap 30 hari dengan tingkat deteksi dini 60% (manual). Dengan sistem CNN (TPR=95%, FPR=4%):

$$N_{deteksi,manual} = 24 \times 12 \times 0.60 = 172.8 \text{ kasus/tahun}$$
$$N_{deteksi,CNN} = 24 \times 365 \times 0.95 \times \frac{\text{kasus signifikan}}{\text{total}} \approx 2.000 \text{ deteksi (dengan verifikasi)}$$

Pengurangan downtime karena deteksi lebih awal:

$$\Delta t_{downtime} = (T_{repair,late} - T_{repair,early}) = 8 - 2 = 6 \text{ jam per insiden}$$

Penghematan tahunan:
$$S = N_{insiden} \times \Delta t_{downtime} \times C_{downtime} = 24 \times 6 \times 45.000 = 6.480.000 \text{ USD/tahun}$$

Setelah dikurangi biaya implementasi sistem ($C_{sistem} = 480.000$ USD untuk 24 kamera + server + integrasi) dan biaya pemeliharaan sistem ($C_{ops} = 80.000$ USD/tahun):

$$NPV_{5\text{ tahun}} = \sum_{t=1}^{5} \frac{6.480.000 - 80.000}{(1+0.10)^t} - 480.000 \approx 19.85 \text{ juta USD}$$

*Payback period*: $T_{payback} = 480.000 / (6.480.000 - 80.000) \approx 0.075$ tahun atau sekitar 27 hari.

### 4.2 Integrasi dengan PINN-MPC

Ketika anomali terdeteksi pada pompa, sinyal umpan balik dikirim ke modul PINN-MPC yang menghitung ulang set