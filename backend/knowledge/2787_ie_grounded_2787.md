# 2787 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance, PdM) telah bertransformasi secara fundamental sejak adopsi luas komputasi visual dan arsitektur deep learning di lantai pabrik. Dalam ekosistem *Industry 4.0*, biaya *unplanned downtime* pada aset industri kelas berat — turbin, pompa sentrifugal, motor listrik, dan lini perakitan otomatis — rata-rata mencapai USD 50.000 per jam menurut literatur konsultan manufaktur, dengan proporsi signifikan disebabkan oleh cacat yang sebenarnya sudah dapat dideteksi secara visual sebelum kegagalan fungsional terjadi. Pearson (2024) dalam tulisannya yang berjudul *Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa inspeksi visual manual memiliki *mean-time-to-detect* (MTTD) yang tinggi dan tingkat subjektivitas yang tidak dapat diterima dalam konteks manufaktur dengan volume tinggi serta *tolerance* kualitas yang semakin ketat.

Pergeseran paradigma dari *reactive maintenance* menuju *condition-based* dan akhirnya *predictive* mensyaratkan kemampuan untuk mengolah data citra resolusi tinggi — yang dihasilkan oleh kamera industri, drone inspeksi, atau sensor termal — secara *real-time* dan dapat diandalkan. Pendekatan *Convolutional Neural Networks* (CNN) memberikan arsitektur yang secara matematis dirancang untuk menangkap hierarki fitur spasial mulai dari tepi dan tekstur lokal hingga pola cacat global. Pearson (2024) memposisikan CNN sebagai tulang punggung sistem Computer Vision-based PdM karena kemampuannya melakukan *feature extraction* secara otomatis tanpa ketergantungan pada *handcrafted features* yang rentan terhadap variasi lingkungan pabrik.

Dalam konteks operasional yang lebih luas, sistem deteksi anomali berbasis citra juga harus berintegrasi dengan kerangka kontrol lanjutan. Patel, Bhartiya, dan Gudi (2024) dalam karya mereka di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) menunjukkan bahwa integrasi *Physics-Informed Neural Networks* (PINNs) dengan *Model Predictive Control* (MPC) memungkinkan sistem proses merespons anomali yang terdeteksi secara optimal. Keduanya membentuk pasangan sinergi: CNN mendeteksi anomali visual, sementara PINN-MPC menentukan lintasan kontrol optimal untuk memitigasi konsekuensi operasional dari anomali tersebut. Secara strategis, kombinasi ini merepresentasikan evolusi dari deteksi pasif menuju orkestrasi aktif yang menjadi prasyarat *smart manufacturing*.

Urgensi ekonomis dan teknis ini — yang ditegaskan Pearson (2024) — mengarahkan praktisi teknik industri pada kebutuhan akan SOP implementasi yang kokoh, metrik kinerja yang terukur, dan integrasi lintas disiplin. Tanpa fondasi matematis dan prosedural yang kuat, investasi pada infrastruktur Computer Vision di pabrik tidak akan menghasilkan pengembalian yang proporsional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusi untuk Ekstraksi Fitur Citra

Operasi konvolusi 2D yang menjadi primitif komputasional CNN didefinisikan sebagai:

$$(f * k)[i, j] = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} f[i+m, j+n] \cdot k[m, n]$$

di mana $f \in \mathbb{R}^{H \times W \times C}$ adalah tensor citra masukan dengan tinggi $H$, lebar $W$, dan jumlah kanal $C$, sedangkan $k \in \mathbb{R}^{M \times N}$ adalah kernel konvolusi yang parameternya $\theta_k$ dipelajari melalui *backpropagation*. Untuk citra industri RGB, $C = 3$, sementara untuk citra termal atau citra hasil segmentasi *multispectral*, $C$ dapat bernilai lebih besar.

Fungsi aktivasi non-linear dominan dalam arsitektur CNN modern adalah *Rectified Linear Unit* (ReLU):

$$\sigma_{\text{ReLU}}(z) = \max(0, z)$$

yang dipilih Pearson (2024) karena karakteristik gradiennya yang tidak mengalami *vanishing* pada nilai positif, sehingga mempercepat konvergensi saat melatih pada dataset citra cacat industri yang cenderung *imbalanced* (lebih banyak citra kondisi normal dibanding anomali).

### 2.2 Formulasi Deteksi Anomali sebagai Masalah Klasifikasi Biner

Masalah deteksi anomali dapat diformalisasikan sebagai klasifikasi biner: $y \in \{0, 1\}$, dengan $y = 1$ untuk kondisi anomali dan $y = 0$ untuk kondisi normal. Model CNN memetakan distribusi probabilitas posterior $p(y \mid \mathbf{x}; \theta)$, dan prediksi dilakukan dengan aturan keputusan Bayes:

$$\hat{y} = \arg\max_{y \in \{0,1\}} P(y \mid \mathbf{x}; \theta)$$

Fungsi kerugian (*loss function*) yang digunakan dalam pelatihan adalah *binary cross-entropy*:

$$\mathcal{L}_{\text{BCE}}(\theta) = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]$$

di mana $N$ adalah jumlah sampel pelatihan dan $\hat{y}_i \in [0,1]$ adalah probabilitas anomali keluaran model untuk sampel ke-$i$. Pearson (2024) menekankan bahwa pada kasus *class imbalance* ekstrem (rasio normal:anomali hingga 100:1), penggunaan *focal loss* lebih disarankan:

$$\mathcal{L}_{\text{focal}}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

dengan $\gamma \geq 2$ dan $\alpha_t$ sebagai faktor penyeimbang kelas.

### 2.3 Metrik Evaluasi Kinerja

Pearson (2024) mengandalkan metrik *precision*, *recall*, dan $F_1$-score yang didefinisikan sebagai:

$$P = \frac{TP}{TP + FP}, \quad R = \frac{TP}{TP + FN}, \quad F_1 = 2 \cdot \frac{P \cdot R}{P + R}$$

Untuk konteks deteksi anomali industri, *recall* lebih diprioritaskan karena biaya *false negative* (gagal mendeteksi cacat yang lolos ke pelanggan) secara ekonomis jauh melampaui biaya *false positive* (memanggil inspeksi ulang). Kurva *Receiver Operating Characteristic* (ROC) dan *Area Under the Curve* (AUC) menjadi alat ukur agregat:

$$\text{AUC} = \int_{0}^{1} TPR(FPR^{-1}(t)) \, dt$$

### 2.4 Integrasi dengan Physics-Informed Neural Networks untuk MPC

Patel, Bhartiya, dan Gudi (2024) merumuskan bahwa ketika anomali terdeteksi oleh modul Computer Vision, sistem MPC yang diperkuat PINN menghasilkan kebijakan kontrol optimal $u^*(t)$ dengan meminimalkan fungsi biaya:

$$J(u) = \int_{t_0}^{t_f} \left[ \mathbf{x}(t)^T Q \mathbf{x}(t) + u(t)^T R u(t) \right] dt$$

dengan kendala dinamika sistem $\dot{\mathbf{x}}(t) = f_{\text{NN}}(\mathbf{x}(t), u(t))$ yang didekati oleh jaringan saraf yang menghormati hukum fisika. Total kerugian PINN mencakup komponen data dan komponen fisika:

$$\mathcal{L}_{\text{PINN}} = \mathcal{L}_{\text{data}} + \lambda_{\text{phy}} \mathcal{L}_{\text{physics}}$$

di mana $\mathcal{L}_{\text{physics}} = \| f_{\text{NN}}(\mathbf{x}, u) - f_{\text{fisika}}(\mathbf{x}, u) \|^2_2$ dan $\lambda_{\text{phy}}$ adalah koefisien pembobot regularisasi fisika.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN mengikuti SOP bertahap yang dapat distandarkan ke dalam tujuh tahapan utama, sebagaimana disintesiskan dari arsitektur yang diuraikan Pearson (2024):

**Tahap 1 — Akuisisi Data Citra.** Kamera industri dipasang pada posisi inspeksi stasioner atau pada *mobile robot* / *drone* dengan pencahayaan terkontrol. Resolusi minimal $1920 \times 1080$ dengan kecepatan bingkai $\geq 30$ fps direkomendasikan untuk lini dengan kecepatan tinggi.

**Tahap 2 — Pra-pemrosesan Citra.** Augmentasi data melalui rotasi, flipping, penyesuaian brightness/contrast, dan penambahan *Gaussian noise* untuk meningkatkan robustitas model. Normalisasi nilai piksel ke interval $[0, 1]$ atau standarisasi menggunakan statistik *ImageNet* jika menggunakan *transfer learning*.

**Tahap 3 — Pelabelan Anotasi.** Anotasi *bounding box* untuk setiap cacat dengan kelas spesifik (retak, korosi, aus, kebocoran). Penggunaan alat seperti *CVAT* atau *LabelImg* sesuai standar ISO/IEC 23894 untuk tata kelola AI.

**Tahap 4 — Arsitektur Model.** Pemanfaatan backbone CNN (mis. ResNet-50, EfficientNet-B3) atau arsitektur deteksi seperti *YOLOv8* / *Faster R-CNN*. Pearson (2024) menyarankan *transfer learning* dari bobot yang telah dilatih pada dataset industri sejenis.

**Tahap 5 — Pelatihan dan Validasi.** Pembagian data 70/15/15 untuk *training*/*validation*/*test set*. Pelatihan dengan *optimizer* Adam, *learning rate* awal $10^{-4}$, dan *early stopping* berdasarkan *validation loss*.

**Tahap 6 — Deployment Edge/Cloud.** Inferensi pada GPU edge (NVIDIA Jetson Orin) untuk respons *real-time*, dengan *failover* ke *cloud inference* untuk analisis lanjutan.

**Tahap 7 — Integrasi MPC.** Sinyal anomali menjadi masukan bagi modul PINN-MPC untuk menyesuaikan parameter operasi mesin secara proaktif.

Diagram alir logikanya adalah sebagai berikut:

$$\text{Citra} \rightarrow \text{Pra-proses} \rightarrow \text{CNN}_{\theta} \rightarrow \hat{y} \rightarrow \begin{cases} \text{Tidak ada anomali} \Rightarrow \text{Lanjut operasi} \\ \text{Anomali terdeteksi} \Rightarrow \text{PINN-MPC}(u^*) \Rightarrow \text{Work Order} \end{cases}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus

Pertimbangkan lini produksi rotor pompa sentrifugal di pabrik petrokimia dengan karakteristik operasional berikut:

- Volume produksi: 500 unit rotor/hari
- Cacat anomali yang disasar: retak mikro, korosi permukaan, keausan *impeller*
- Dataset: 50.000 citra tersegmentasi, dengan rasio kelas normal:anomali = 95:5
- Kelas anomali terdiri dari 2.500 citra (50 retak, 1.250 korosi, 1.200 aus)

### 4.2 Perhitungan Matriks Konfusi Hipotetis

Misalkan model CNN Pearson-tuned menghasilkan *confusion matrix* berikut pada *test set* (n = 7.500):

| Prediksi \ Aktual | Normal | Anomali |
|---|---|---|
| Normal | 7.012 | 38 |
| Anomali | 113 | 337 |

Maka:

$$P = \frac{337}{337 + 113} = \frac{337}{450} =