# 2259 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses pada dasawarsa terakhir menuntut paradigma baru dalam pengelolaan aset fisik. Pendekatan *corrective maintenance* dan *preventive maintenance* berbasis jadwal rutin semakin ditinggalkan karena terbukti inefisien secara biaya dan tidak mampu mencegah *unscheduled downtime* yang menimbulkan kerugian produksi masif. Pearson (2024) dalam studi yang dipublikasikan melalui *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menegaskan bahwa pergeseran menuju *predictive maintenance* (PdM) berbasis kecerdasan buatan merupakan respons langsung terhadap meningkatnya kompleksitas sistem produksi modern, di mana peralatan kritikal seperti turbin gas, pompa sentrifugal, motor induksi, dan konveyor memiliki nilai aset hingga ratusan juta dolar per unit.

Urgensi ekonomis dari topik ini tecermin dari data industri secara umum: satu jam *unplanned shutdown* pada pabrik petrokimia berskala besar dapat menimbulkan kerugian berkisar USD 250.000 hingga USD 1.000.000, belum termasuk potensi insiden keselamatan kerja dan pencemaran lingkungan. Pearson (2024) mengajukan arsitektur berbasis *Convolutional Neural Networks* (CNN) yang bekerja langsung pada citra visual—baik citra RGB, citra termal (thermogram), maupun citra getaran yang dikonversi ke dalam representasi spektogram—sebagai media diagnostik utama. Pendekatan ini memanfaatkan kemampuan representasi hierarkis CNN untuk mengekstraksi fitur-fitur lokal seperti retakan mikro, perubahan warna, korosi, kebocoran, dan anomali termal yang sebelumnya hanya dapat dideteksi melalui inspeksi visual ahli.

Konteks teknis yang mendasari paper ini juga berkaitan erat dengan sistem kontrol proses modern. Patel, Bhartiya, dan Gudi (2024) dalam karya yang diterbitkan di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) menunjukkan bahwa integrasi antara *Physics-Informed Neural Networks* (PINN) dengan *Model Predictive Control* (MPC) memungkinkan sistem produksi merespons anomali secara real-time melalui penyesuaian variabel kontrol sebelum degradasi peralatan menjadi kegagalan katastrofik. Sinergi antara deteksi anomali visual berbasis CNN (Pearson, 2024) dan kerangka kontrol prediktif berbasis fisika (Patel et al., 2024) merepresentasikan arsitektur *cyber-physical system* masa depan yang krusial bagi industri proses dan manufaktur diskrit.

Dari perspektif strategis, adopsi pendekatan ini juga didorong oleh ketersediaan infrastruktur *Industrial Internet of Things* (IIoT), kamera industri beresolusi tinggi dengan harga terjangkau, serta platform *edge computing* yang mampu menjalankan inferensi CNN secara latensi rendah. Pearson (2024) menekankan bahwa kombinasi ketiga elemen tersebut memungkinkan skenario *continuous monitoring* 24/7 tanpa memerlukan kehadiran operator inspeksi secara fisik di lapangan, sehingga menekan *mean time to detect* (MTTD) anomali hingga kurang dari satu menit pada kondisi ideal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network untuk Klasifikasi Citra

CNN bekerja melalui komposisi berlapis dari operasi konvolusi diskret, aktivasi non-linear, dan *pooling*. Untuk citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dengan tinggi $H$, lebar $W$, dan jumlah kanal $C$, lapisan konvolusi ke-$l$ menghasilkan peta fitur:

$$Z^{(l)}_{i,j,k} = \sum_{u=0}^{k_h-1}\sum_{v=0}^{k_w-1}\sum_{c=0}^{C_{l-1}-1} W^{(l)}_{u,v,c,k} \cdot X^{(l-1)}_{i+u, j+v, c} + b^{(l)}_k$$

dengan $W^{(l)}$ adalah kernel konvolusi, $b^{(l)}$ adalah bias, $k_h$ dan $k_w$ adalah dimensi kernel, dan indeks $k$ menandai kanal fitur. Aktivasi non-linear menggunakan ReLU $f(z) = \max(0, z)$ untuk memperkenalkan kemampuan representasi non-linear.

Pearson (2024) menggunakan arsitektur *deep* (lebih dari 20 lapisan) berbasis *residual blocks* yang dirumuskan sebagai:

$$X^{(l)} = X^{(l-1)} + \mathcal{F}\left(X^{(l-1)}, \{W^{(l)}\}\right)$$

di mana $\mathcal{F}$ adalah fungsi residual. Mekanisme *skip connection* ini memungkinkan gradien mengalir efektif selama *backpropagation*, mencegah masalah *vanishing gradient* pada jaringan sangat dalam.

### 2.2 Fungsi Loss untuk Deteksi Anomali

Untuk tugas klasifikasi biner (normal vs. anomali), Pearson (2024) menerapkan *Binary Cross-Entropy Loss*:

$$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^{N}\left[y_i \log(\hat{y}_i) + (1-y_i)\log(1-\hat{y}_i)\right]$$

dengan $y_i \in \{0,1\}$ adalah label ground-truth dan $\hat{y}_i \in [0,1]$ adalah probabilitas prediksi yang dihasilkan oleh fungsi sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$.

Mengingat distribusi kelas anomali yang sangat tidak seimbang (anomali biasanya < 1% dari total observasi), paper ini mengusulkan *Focal Loss*:

$$\mathcal{L}_{FL} = -\alpha_t (1-p_t)^{\gamma} \log(p_t)$$

di mana $\alpha_t$ adalah *weighting factor* untuk kelas positif, $\gamma \geq 0$ adalah *focusing parameter*, dan $p_t$ adalah probabilitas prediksi yang dikoreksi kelas.

### 2.3 Metrik Evaluasi Kinerja Anomali

Kinerja detektor dievaluasi menggunakan metrik standar berikut:

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}$$

$$F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

$$\text{AUC} = \int_0^1 \text{TPR}(\text{FPR}^{-1}(t))\, dt$$

di mana *True Positive Rate* (TPR) = Recall dan *False Positive Rate* (FPR) = FP/(FP+TN). Pearson (2024) melaporkan bahwa pada dataset citra termal bearing, model mencapai F1-score > 0,95 dengan AUC > 0,98.

### 2.4 Integrasi dengan Physics-Informed Neural Networks (PINN)

Patel et al. (2024) mengembangkan kerangka MPC-PINN untuk sistem proses, dengan fungsi loss gabungan:

$$\mathcal{L}_{PINN} = \lambda_d \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics}$$

di mana:

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{j=1}^{N_p}\left\| \frac{\partial \hat{u}}{\partial t} - \mathcal{N}[\hat{u}; \theta] \right\|^2$$

dengan $\mathcal{N}[\hat{u}; \theta]$ adalah operator persamaan diferensial parsial (PDE) yang mengatur dinamika proses, dan $\lambda_d, \lambda_p$ adalah bobot penyeimbang. Persamaan residual PDE ini ditegakkan secara *soft constraint* melalui jaringan saraf.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pearson (2024) mengusulkan alur kerja implementasi sistematis untuk sistem PdM berbasis CNN yang dapat diadopsi di fasilitas industri. Prosedur ini terdiri dari delapan tahapan utama:

**Tahap 1 – Akuisisi Data Citra.** Pemasangan kamera industri (RGB, termal, atau hyperspectral) pada titik-titik inspeksi kritikal. Resolusi minimum 640×480 piksel dengan laju bingkai 1–30 fps. Pencahayaan terkontrol menggunakan iluminator LED pada panjang gelombang spesifik untuk mengurangi noise.

**Tahap 2 – Pelabelan dan Annotasi.** Setiap citra diberi label oleh teknisi ahli berdasarkan kondisi aktual peralatan. Anotasi *bounding box* menggunakan format COCO atau Pascal VOC. Untuk mengatasi kelangkaan sampel anomali, digunakan teknik *synthetic minority oversampling* (SMOTE) atau *generative adversarial networks* (GAN).

**Tahap 3 – Preprocessing Citra.** Normalisasi piksel ke rentang $[0,1]$, augmentasi data melalui rotasi, flipping, perubahan kecerahan, dan *random cropping*. Resolusi citra distandarisasi pada 224×224 piksel untuk kompatibilitas dengan backbone CNN.

**Tahap 4 – Arsitektur Model dan Transfer Learning.** Menggunakan pretrained model (ResNet-50, EfficientNet-B3, atau Vision Transformer) yang sudah dilatih pada ImageNet, kemudian di-*fine-tune* pada dataset industri spesifik. Lapisan akhir (classifier head) diganti dengan dua neuron output untuk klasifikasi biner.

**Tahap 5 – Pelatihan dan Validasi.** Optimasi menggunakan Adam optimizer dengan learning rate $\eta = 10^{-4}$, *batch size* = 32, dan *early stopping* berdasarkan validation loss. Validasi silang *k-fold* (k = 5) untuk memastikan generalisasi.

**Tahap 6 – Deployment Edge Computing.** Model di-*compile* menggunakan TensorRT atau ONNX Runtime dan di-deploy pada *edge device* (NVIDIA Jetson, Google Coral, atau Intel OpenVINO). Latensi inferensi target: < 50 ms per citra.

**Tahap 7 – Integrasi dengan SCADA/MES.** Hasil deteksi dikirim melalui protokol MQTT atau OPC UA ke sistem SCADA, yang kemudian memicu alarm pada dashboard operator dan secara otomatis menghasilkan *work order* di sistem CMMS (Computerized Maintenance Management System).

**Tahap 8 – Continuous Learning dan Model Drift Monitoring.** Pipeline ML Ops secara berkala melakukan *retraining* dengan data baru yang telah diverifikasi ahli, serta memantau degradasi performa akibat *concept drift*.

```
[Akuisisi Citra] → [Preprocessing] → [Inferensi CNN]
        ↓                                    ↓
[Pelabelan Ahli]                  [Skor Anomali > Threshold?]
        ↓                                    ↓
[Augmentasi]                          [Ya] → [Alarm + Work Order]
        ↓                                  [Tidak]
[Training Model]                      [Logging ke Database]
        ↓
[Validasi K-fold]
        ↓
[Deployment Edge + Cloud]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Deteksi Anomali pada Bearing Motor Induksi

Pertimbangkan sebuah motor induksi 50 HP yang menggerakkan pompa sentrifugal di pabrik kimia. Kamera termal dipasang pada housing bearing dengan akuisisi citra setiap 5 menit. Data historis menunjukkan laju kegagalan bearing rata-rata adalah $\lambda_{fail} = 0{,}002$故障/jam operasi.

**Parameter Masukan:**
- Total operasi: 8.760 jam/tahun
- Biaya *unplanned downtime*: