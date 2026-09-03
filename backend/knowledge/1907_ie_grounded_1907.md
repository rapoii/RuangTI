# 1907 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan aset fisik di lantai produksi. Pergeseran dari *corrective maintenance* dan *preventive maintenance* berbasis jadwal tetap menuju *predictive maintenance* (PdM) berbasis kondisi aktual (*condition-based maintenance*) menjadi kebutuhan strategis bagi industri manufaktur, energi, dan proses kimia. Dalam konteks ini, James Pearson (2024) menyoroti bahwa anomali visual pada peralatan industri — seperti retakan mikro pada permukaan turbin, korosi pada pipa heat exchanger, keausan abnormal pada bearing, atau delaminasi pada belt conveyor — merupakan prekursor kegagalan yang dapat dideteksi melalui analisis citra digital. Studi ini dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) dan menawarkan kerangka kerja berbasis *Convolutional Neural Networks* (CNN) untuk mengotomasi deteksi anomali tersebut.

Urgensi ekonomi dari pendekatan ini sangat signifikan. Menurut estimasi International Society of Automation (ISA), kerugian industri akibat *unscheduled downtime* mencapai USD 50 miliar per tahun secara global, dengan 42% di antaranya berasal dari kegagalan peralatan yang sebenarnya sudah memiliki tanda-tanda visual degradasi yang dapat dikenali sejak dini. Pearson (2024) berargumen bahwa inspeksi visual manual memiliki tiga kelemahan struktural: (1) subyektivitas tinggi antar-inspektur (*inter-rater reliability* rendah), (2) kelelahan kognitif pada shift panjang yang menurunkan *sensitivity* deteksi hingga 30%, dan (3) tidak scalable untuk fleet peralatan yang berjumlah ratusan hingga ribuan unit. Implementasi CNN vision-based PdM menjawab ketiga limitasi ini secara simultan.

Lebih lanjut, integrasi dengan arsitektur *Model Predictive Control* (MPC) yang diperkuat *Physics-Informed Neural Networks* (PINNs) — sebagaimana dikemukakan oleh Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) — memungkinkan sistem tidak hanya mendeteksi anomali visual, tetapi juga memprediksi trayektori operasi sistem proses dalam horizon prediksi tertentu. Sinergi antara CNN sebagai *perception layer* dan PINN-MPC sebagai *decision layer* menciptakan闭环 (*closed-loop*) PdM yang bersifat otonom. Pendekatan ini secara khusus relevan untuk industri proses kontinyu seperti petrokimia, *pulp & paper*, dan *power generation*, di mana degradasi visual komponen berkorelasi langsung dengan degradasi performa kontrol proses.

Konteks industri ini juga didorong oleh ketersediaan masif *edge computing devices*, kamera industri resolusi tinggi (hingga 20 MP), dan platform *cloud-based MLOps* yang memungkinkan inferensi CNN berjalan secara real-time pada latensi di bawah 50 ms per frame. Dengan demikian, kombinasi CNN untuk persepsi visual dan MPC-PINN untuk keputusan kontrol menjadi arsitektur referensi bagi implementasi PdM di fasilitas industri modern.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur CNN yang digunakan untuk deteksi anomali visual pada peralatan industri mengikuti formulasi matematis berlapis. Pearson (2024) membangun model berdasarkan arsitektur *deep residual CNN* dengan *transfer learning* dari ImageNet, yang kemudian di-*fine-tune* menggunakan dataset citra anomali industri spesifik.

### 2.1 Operasi Konvolusi Dasar

Untuk citra input dua dimensi $X \in \mathbb{R}^{H \times W \times C}$ dengan tinggi $H$, lebar $W$, dan jumlah channel $C$, operasi konvolusi dengan kernel $K \in \mathbb{R}^{h \times w \times C}$ menghasilkan *feature map*:

$$Y_{i,j} = \sigma\left(\sum_{m=0}^{h-1}\sum_{n=0}^{w-1}\sum_{c=0}^{C-1} X_{i+m, j+n, c} \cdot K_{m,n,c} + b\right)$$

di mana $b$ adalah bias dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear. Pearson (2024) menggunakan **ReLU** ($\sigma(x) = \max(0, x)$) untuk lapisan konvolusi tengah dan **sigmoid** untuk lapisan klasifikasi akhir karena problema deteksi anomali merupakan klasifikasi biner (*anomali* vs *normal*).

### 2.2 Residual Block

Untuk menangani degradasi gradien pada jaringan sangat dalam, digunakan *residual block*:

$$\mathcal{F}(X) = \sigma(W_2 \cdot \sigma(W_1 X) + b_2) + X$$

di mana *skip connection* $X$ memungkinkan gradien mengalir langsung, meningkatkan akurasi konvergusi hingga 1,8× dibanding *plain CNN* dengan kedalaman setara menurut hasil empiris Pearson (2024).

### 2.3 Fungsi Loss untuk Deteksi Anomali

Karena anomali industri bersifat **imbalanced** (rasio normal:anomali ≈ 100:1), Pearson (2024) merekomendasikan *Focal Loss*:

$$\mathcal{L}_{focal} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

di mana $p_t$ adalah probabilitas prediksi kelas target, $\alpha_t \in [0,1]$ adalah *weighting factor*, dan $\gamma \geq 0$ adalah *focusing parameter* yang menekan loss dari contoh mudah (*easy negatives*) sehingga model fokus pada contoh sulit.

### 2.4 Anomali Scoring dengan Autoencoder Reconstruction Error

Untuk deteksi anomali *unsupervised*, Pearson (2024) mengadopsi arsitektur *convolutional autoencoder* dengan *reconstruction error* sebagai skor anomali:

$$E(x) = \frac{1}{N}\sum_{i=1}^{N}(x_i - \hat{x}_i)^2$$

di mana $\hat{x}$ adalah rekonstruksi dari encoder-decoder. Ambang batas (*threshold*) $\tau$ ditentukan dari distribusi $E(x)$ pada data normal:

$$\tau = \mu_E + k \cdot \sigma_E, \quad k \in [2, 3]$$

### 2.5 Integrasi dengan PINN-MPC (Patel et al., 2024)

Untuk sistem proses kontinyu, keputusan pemeliharaan yang diturunkan dari deteksi anomali visual dimasukkan ke dalam formulasi MPC-PINN:

$$\min_{u(t)} J = \int_{t_0}^{t_f} \left[ (y(t) - y_{ref}(t))^T Q (y(t) - y_{ref}(t)) + u(t)^T R u(t) \right] dt$$

dengan kendala dinamika sistem yang dipenuhi secara *soft* melalui *physics-informed loss*:

$$\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda \mathcal{L}_{physics}$$

di mana $\mathcal{L}_{physics}$ adalah residual persamaan diferensial model proses (misalnya neraca massa-energi). DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa penambahan $\mathcal{L}_{physics}$ meningkatkan akurasi prediksi *state trajectory* hingga 23% dibanding *black-box neural network*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem CNN-based anomaly detection untuk predictive maintenance mengikuti SOP terstruktur delapan tahap yang disintesis dari rekomendasi Pearson (2024) dan best practice industri (ISO 13373 untuk *condition monitoring* dan ISO 55000 untuk *asset management*).

**Tahap 1 — Penentuan Cakupan Aset Kritis.** Lakukan *criticality analysis* menggunakan matriks Risk Priority Number (RPN) dengan formula:

$$RPN = S \times O \times D$$

di mana $S$ = severity, $O$ = occurrence, $D$ = detection difficulty. Aset dengan $RPN \geq 125$ menjadi kandidat prioritas.

**Tahap 2 — Akuisisi Dataset Citra.** Pasang kamera industri IP67 dengan iluminasi terkontrol (LED ring atau strobe) pada sudut 30°–60° terhadap permukaan target. Resolusi minimal 1920×1080 piksel; akuisisi pada frekuensi 1–5 fps. Standar referensi: EMVA 1288 untuk karakterisasi sensor.

**Tahap 3 — Anotasi dan Pre-processing.** Labeli citra menggunakan *bounding box* (format YOLO atau Pascal VOC) untuk anomali: retak, korosi, keausan, kontaminasi, deformasi. Terapkan augmentasi: *random rotation* ±15°, *horizontal/vertical flip*, *color jitter* (HSV ±10%), dan *cutout*. Normalisasi piksel: $X_{norm} = (X - \mu_{ImageNet}) / \sigma_{ImageNet}$.

**Tahap 4 — Arsitektur Model dan Transfer Learning.** Inisialisasi bobot dari ResNet-50 atau EfficientNet-B3 pretrained pada ImageNet. *Freeze* 80% lapisan awal; *fine-tune* 20% lapisan akhir + classifier head dengan learning rate $1 \times 10^{-4}$ (Adam optimizer) dan *cosine annealing scheduler*.

**Tahap 5 — Validasi dan Kalibrasi.** Gunakan *k-fold cross-validation* ($k=5$). Metrik wajib: Precision, Recall, F1-score, dan **mAP@0.5** (*mean Average Precision* pada IoU threshold 0,5). Target performa minimal: Recall ≥ 95% (karena *missed anomaly* berbiaya tinggi) dan *false positive rate* ≤ 5%.

**Tahap 6 — Deployment di Edge/Cloud.** Untuk inferensi real-time, gunakan *NVIDIA Jetson AGX Orin* (275 TOPS) atau *Google Coral TPU*. Latensi target: ≤ 50 ms per frame. Integrasikan dengan protokol MQTT untuk streaming hasil deteksi ke *Manufacturing Execution System* (MES).

**Tahap 7 — Integrasi dengan Work Order System.** Output deteksi anomali (kelas, confidence score, koordinat ROI) secara otomatis menghasilkan *work order* di *Computerized Maintenance Management System* (CMMS) seperti SAP PM atau IBM Maximo, dengan prioritas diturunkan dari skor anomali.

**Tahap 8 — Continuous Learning dan Model Drift Monitoring.** Pantau *data drift* menggunakan *Population Stability Index* (PSI):

$$PSI = \sum_{i=1}^{n} (A_i - E_i) \cdot \ln\left(\frac{A_i}{E_i}\right)$$

Jika $PSI > 0{,}25$, jadwalkan *re-training* dengan data baru. SOP ini menjamin keberlanjutan akurasi model sepanjang siklus hidup peralatan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Inspeksi Visual Pipa Heat Exchanger di Pabrik Petrokimia.**

Sebuah *refinery* memiliki 120 unit shell-and-tube heat exchanger. Inspeksi manual memerlukan waktu 45 menit/unit dengan *throughput* inspektur 8 unit/hari, sehingga satu siklus inspeksi penuh membutuhkan 15 hari kerja dengan biaya inspektur USD 25/jam.

**Langkah 1 — Perhitungan Baseline Manual.**
$$T_{manual} = 120 \times 45 \text{ menit} = 5.400 \text{ menit} = 90 \text{ jam}$$
$$C_{manual} = 90 \times \$25 = \$2.250 \text{ per siklus}$$

**Langkah 2 — Perhitungan Throughput CNN Vision System.**
Sistem kamera tetap (*fixed-mount*) dengan 4 kamera per heat exchanger, akuisisi pada 2 fps, dan inferensi CNN pada latensi 40 ms/frame. Total citra per unit: 4 kamera × 50 posisi × 2 fps × 5 detik = 2.000 citra/unit.

$$T_{CNN} = \frac{2.000 \text{ citra/unit} \times 120 \text{ unit}}{2 \text{ fps} \times 8 \text{ jam}} = 15.000 \text{ citra/menit kapasitas} \Rightarrow T_{CNN} \approx 8 \text{ jam total}$$

**Langkah 3 — Perhitungan Dampak Ekonomi dari Deteksi Dini.**
Misalkan CNN mendeteksi 8 anomali korosi Stage 2 pada tube bundle yang sebelumnya luput dari inspeksi manual (false negative). Kerugian *unscheduled shutdown* heat exchanger akibat tube rupture adalah:

$$L_{shutdown} = \$50.000 \text{ (produksi hilang)} + \$30.000 \text{ (perbaikan darurat)} = \$80.000$$

Probabilitas rupture tanpa deteksi dini: $P_{rupture} = 0{,}15$. Expected Loss Avoided (ELA) dari deteksi CNN:

$$ELA = N_{anomali} \times P_{rupture} \times L_{shutdown} = 8 \times 0{,}15 \times \$80.000 = \$96.000$$

**Langkah 4 — Perhitungan ROI Sistem.**
Asumsikan investasi awal sistem CNN (kamera, edge device, software, integrasi): $I = \$120.000$. Biaya operasional tahunan: $C_{op} = \$15.000$. Penghematan inspeksi per tahun (4 siklus):

$$\Delta C_{insp} = 4 \times (\$2.250 - \$200) = \$8.200$$

Total benefit tahun pertama: $B_1 = \$