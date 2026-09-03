# 2851 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Pemeliharaan prediktif (predictive maintenance/PdM) telah bertransformasi dari pendekatan konvensional berbasis jadwal menjadi disiplin berbasis data (*data-driven*) yang mengandalkan pembelajaran mesin dan computer vision. Menurut Pearson (2024) dalam tulisannya di jurnal ber-peer-review dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), anomali pada peralatan industri seperti korosi pada pipa, deformasi pada komponen mekanis, keausan bearing, serta retakan mikro pada rotary equipment memiliki kemiripan visual yang dapat dideteksi secara otomatis melalui arsitektur Convolutional Neural Networks (CNN). Studi Pearson tersebut secara empiris menunjukkan bahwa penerapan deep learning pada citra inspeksi mampu menurunkan tingkat *false negative* hingga 8–12% dibandingkan inspeksi visual manual yang dilakukan oleh teknisi lapangan, yang secara historis memiliki variabilitas subyektivitas manusia (human subjectivity bias) berkisar 18–25%.

Konteks urgensi ekonomi dari penerapan deteksi anomali berbasis citra ini sangat relevan bagi industri proses dan manufaktur diskrit. Sebagai contoh, dalam industri minyak dan gas, satu kali unplanned shutdown akibat kegagalan pompa sentrifugal dapat menimbulkan kerugian produksi senilai USD 250.000–USD 1.500.000 per hari, tergantung pada kapasitas kilang dan harga pasar minyak. Pearson (2024) menegaskan bahwa implementasi arsitektur CNN seperti ResNet-50, EfficientNet-B3, dan DenseNet-121 yang telah di-*pre-train* pada ImageNet dan di-*fine-tune* menggunakan dataset MVTec AD serta dataset proprietary perusahaan mampu mencapai nilai Akurasi klasifikasi 96,4% dan F1-Score 0,952 pada kasus deteksi cacat permukaan (*surface defect detection*). 

Kontribusi penting lain yang memperkaya paradigma ini datang dari Patel, Bhartiya, dan Gudi (2024) dalam publikasi mereka di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431). Mereka mengusulkan integrasi Physics-Informed Neural Networks (PINNs) dengan Model Predictive Control (MPC) untuk sistem proses, yang meskipun fokusnya pada kendali proses, memiliki relevansi langsung dengan strategi pemeliharaan prediktif melalui embedding hukum fisika ke dalam jaringan saraf. Pendekatan hibrid ini mampu mengurangi jumlah data训练 yang dibutuhkan hingga 60% karena PINN memanfaatkan persamaan diferensial parsial (PDE) sebagai *regularizer* terhadap solusi neural network. Sinergi kedua literatur ini menunjukkan arah riset masa depan di mana deteksi anomali visual tidak berdiri sendiri, melainkan diintegrasikan dengan sistem kendali proses untuk mencegah degradasi peralatan secara real-time.

Dalam konteks operasional, kerangka kerja pemeliharaan prediktif modern dituntut untuk memenuhi tiga pilar utama: (1) akuisisi data berkualitas tinggi melalui sensor visual seperti kamera industri IP67, hyperspectral imaging, atau drone-mounted LiDAR; (2) arsitektur pemrosesan yang mampu menangani data tidak seimbang (*imbalanced dataset*) yang melekat pada kasus anomali langka; serta (3) mekanisme pengambilan keputusan yang dapat di-*integrate* dengan Computerized Maintenance Management System (CMMS) dan Enterprise Resource Planning (ERP). Pearson (2024) menekankan bahwa keberhasilan implementasi tidak semata-mata bergantung pada akurasi algoritmik, melainkan pada integrasi end-to-end dengan rantai pasok pemeliharaan dan protokol keselamatan kerja sesuai standar ISO 45001 dan OSHA 1910.132.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur CNN untuk deteksi anomali industri beroperasi melalui operasi konvolusi diskret dua-dimensi yang didefinisikan sebagai:

$$y_{i,j}^{(l)} = f\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1} x_{i+m,j+n}^{(l-1)} \cdot w_{m,n}^{(l)} + b^{(l)}\right)$$

di mana $y_{i,j}^{(l)}$ adalah *feature map* keluaran pada lapisan $l$, $x^{(l-1)}$ adalah peta fitur masukan, $w^{(l)}$ adalah kernel konvolusi dengan dimensi $k_h \times k_w$, $b^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear. Pearson (2024) menggunakan fungsi aktivasi ReLU $f(x) = \max(0, x)$ pada hidden layers dan softmax pada lapisan klasifikasi:

$$\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_{j=1}^{C} e^{z_j}}$$

di mana $C$ adalah jumlah kelas anomali yang akan diklasifikasikan (misalnya: normal, korosi, retakan, deformasi, keausan). Fungsi kerugian lintas-entropi kategorik yang diminimalkan selama proses training adalah:

$$\mathcal{L}_{CE} = -\frac{1}{N}\sum_{n=1}^{N}\sum_{c=1}^{C} y_{n,c}\log(\hat{y}_{n,c})$$

Untuk kasus deteksi anomali dengan ketidakseimbangan kelas yang signifikan, Pearson (2024) mengadopsi Focal Loss sebagai modifikasi:

$$\mathcal{L}_{FL} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

di mana $\alpha_t$ adalah *weighting factor* untuk kelas positif dan $\gamma \geq 0$ adalah *focusing parameter* yang menekan kontribusi *easy examples* dan memperkuat pembelajaran pada *hard examples* (anomali langka).

Pada dimensi sistem pemeliharaan, laju kegagalan peralatan dimodelkan melalui distribusi reliabilitas eksponensial ketika komponen berada dalam fase *useful life*:

$$R(t) = e^{-\lambda t}$$

dengan $\lambda$ adalah *hazard rate* (laju kegagalan). *Mean Time To Failure* (MTTF) didefinisikan sebagai:

$$\text{MTTF} = \int_0^{\infty} R(t)\,dt = \frac{1}{\lambda}$$

Sementara itu, Remaining Useful Life (RUL) dapat diestimasi melalui:

$$\text{RUL}(t) = \mathbb{E}[T - t \mid T > t] = \frac{\int_t^{\infty} R(u)\,du}{R(t)} = \frac{1}{\lambda}$$

Untuk arsitektur hybrid yang diusulkan Patel et al. (2024), fungsi kerugian total PINN-MPC mengintegrasikan komponen data-driven dan physics-based:

$$\mathcal{L}_{total} = \mathcal{L}_{data} + \lambda_{phys} \mathcal{L}_{physics}$$

di mana:

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{i=1}^{N_p} \left\| f_{PDE}(\hat{u}(x_i, t_i; \theta)) \right\|^2$$

Persamaan $f_{PDE}(\cdot)$ merepresentasikan residual dari persamaan diferensial yang mengatur dinamika sistem proses (misalnya persamaan Navier-Stokes untuk aliran fluida atau persamaan konduksi panas). Pendekatan ini memungkinkan jaringan saraf untuk menghormati hukum konservasi massa, energi, dan momentum selama proses pelatihan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi deteksi anomali berbasis CNN di lingkungan industri mengikuti SOP yang ketat sesuai dengan kerangka kerja MLOps (Machine Learning Operations) untuk menjamin reproducibility, traceability, dan compliance terhadap regulasi. Pearson (2024) menyusun protokol implementasi yang terdiri dari delapan tahapan utama sebagai berikut:

**Tahap 1 — Akuisisi Data & Kalibrasi Sensor Visual.** Kamera industri dengan resolusi minimum 1920×1080 piksel, Global Shutter (untuk menghindari motion artifact), dan enclosure IP67 dipasang pada lokasi inspeksi strategis. Kalibrasi dilakukan menggunakan *chessboard pattern* dan algoritma Zhang untuk memperoleh parameter intrinsik dan ekstrinsik kamera.

**Tahap 2 — Pra-pemrosesan Citra.** Operasi normalisasi, resizing ke dimensi 224×224 atau 299×299 piksel (tergantung arsitektur), dan augmentasi data melalui rotasi, flipping, color jittering, dan MixUp untuk meningkatkan generalisasi model.

**Tahap 3 — Arsitektur & Transfer Learning.** Model backbone (ResNet, EfficientNet, atau Vision Transformer) yang telah di-*pre-train* pada ImageNet atau MVTec AD di-*fine-tune* menggunakan dataset proprietary. Pearson (2024) melaporkan bahwa strategi *frozen backbone + trainable classifier head* memberikan keseimbangan optimal antara akurasi dan waktu training (4–6 jam pada GPU NVIDIA A100).

**Tahap 4 — Validasi & Evaluasi.** K-fold cross-validation (k=5) dengan metrik akurasi, presisi, recall, F1-score, dan AUC-ROC. Confusion matrix dianalisis untuk mengidentifikasi kelas yang paling sering salah klasifikasi.

**Tahap 5 — Explainability & Interpretability.** Penerapan Grad-CAM (Gradient-weighted Class Activation Mapping) untuk memvisualisasikan region of interest yang digunakan model dalam mengambil keputusan. Hal ini krusial untuk audit dan sertifikasi regulator.

**Tahap 6 — Integrasi CMMS/ERP.** Output model (kelas anomali, confidence score, lokasi spasial) dikirimkan melalui REST API ke sistem SAP PM atau IBM Maximo untuk auto-generation work order.

**Tahap 7 — Monitoring Model Drift.** Performance metrics dipantau secara kontinyu; jika akurasi turun di bawah threshold (misalnya 90%), *retraining pipeline* dipicu secara otomatis menggunakan Airflow atau Kubeflow.

**Tahap 8 — Compliance & Audit Trail.** Sesuai dengan standar ISO 13374 (Condition monitoring and diagnostics of machines) dan IEC 62443 (cybersecurity industri), seluruh pipeline harus memiliki dokumentasi lengkap dan *immutable audit trail*.

Patel et al. (2024) melengkapi kerangka ini dengan mengusulkan integrasi PINN-MPC ke dalam *digital twin* peralatan industri, di mana state kesehatan mesin (degradasi, keausan, akumulasi fouling) diprediksi secara real-time dan digunakan sebagai variabel input bagi pengendali MPC untuk mencegah operasi di luar batas aman. Sinergi antara CNN-based anomaly detection dan PINN-MPC predictive control merepresentasikan arsitektur **closed-loop intelligent maintenance system** yang menjadi standar masa depan industri 4.0 dan 5.0.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Deteksi Korosi pada Pipa Heat Exchanger di Pabrik Petrokimia.

Sebuah perusahaan petrokimia mengoperasikan 120 unit shell-and-tube heat exchanger. Inspeksi visual dilakukan setiap 6 bulan menggunakan kamera borescope. Tim rekayasa menerapkan arsitektur EfficientNet-B3 yang di-*fine-tune* dengan 4.500 citra latihan (3 kelas: normal, korosi ringan, korosi berat). Hasil pengujian pada 900 citra validasi memberikan hasil sebagai berikut:

| Kelas | TP | FP | FN | TN |
|---|---|---|---|---|
| Normal | 350 | 12 | 8 | — |
| Korosi Ringan | 280 | 18 | 22 | — |
| Korosi Berat | 215 | 7 | 13 | — |

**Perhitungan Metrik Performa:**

Presisi untuk kelas "Korosi Berat" (kritis untuk keselamatan):
$$P = \frac{TP}{TP + FP} = \frac{215}{215 + 7} = \frac{215}{222} = 0.9685$$

Recall (Sensitivity) untuk kelas "Korosi Berat":
$$R = \frac{TP}{TP + FN} = \frac{215}{215 + 13} = \frac{215}{228} = 0.9429$$

F1-Score:
$$F_1 = 2 \cdot \frac{P \cdot R}{P + R} = 2 \cdot \frac{0.9685 \times 0.9429}{0.9685 + 0.9429} = 2 \cdot \frac{0.9133}{1.9114} = 0.9555$$

Akurasi Keseluruhan:
$$\text{Acc} = \frac{TP_{total}}{N} = \frac{350 + 280 + 215}{900} = \frac{845}{900} = 0.9389 \approx 93{,}89\%$$

**Perhitungan Nilai Tambah Ekonomi