# 2579 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital pada sektor manufaktur dan proses industri telah memunculkan paradigma *Industry 4.0* yang menempatkan data dan kecerdasan buatan sebagai tulang punggung pengambilan keputusan operasional. Di dalam konteks ini, *predictive maintenance* (pemeliharaan prediktif) muncul sebagai pendekatan strategis yang menggantikan paradigma reaktif (*run-to-failure*) dan preventif berbasis jadwal (*scheduled maintenance*). James Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa degradasi peralatan industri modern—mulai dari bearing, motor listrik, pompa sentrifugal, hingga heat exchanger—memiliki pola visual dan termal yang dapat diekstraksi melalui teknik *computer vision* berbasis *Convolutional Neural Networks* (CNN).

Urgensi ekonomis dari topik ini tidak dapat dipandang sebelah mata. Studi-studi terdahulu yang dirujuk Pearson (2024) memperkirakan bahwa downtime tak terencana di industri proses (seperti kilang minyak, petrokimia, dan *pulp & paper*) menimbulkan kerugian berkisar USD 50.000 hingga USD 250.000 per jam, tergantung pada kapasitas dan kompleksitas lini produksi. Secara nasional, menurut laporan *International Society of Automation* (ISA) yang dikutip secara implisit dalam literatur, pabrik-pabrik di negara berkembang masih mengalokasikan 60–70% anggaran pemeliharaan untuk aktivitas korektif, padahal rasio ideal best-practice *world-class manufacturing* mengarahkan komposisi tersebut turun menjadi 20–30% dengan sisanya dialokasikan ke aktivitas prediktif dan preventif.

Secara teknis, metode inspeksi konvensional—seperti *vibration analysis*, *ultrasonic thickness gauging*, dan *infrared thermography*—memiliki keterbatasan inheren: memerlukan teknisi bersertifikat, perangkat ukur mahal, waktu pengukuran yang panjang, serta potensi *human error* dalam interpretasi spektrum atau citra termal. Pearson (2024) berargumen bahwa pendekatan CNN memberikan tiga keunggulan struktural: pertama, kemampuan *feature learning* otomatis yang meniadakan kebutuhan *hand-crafted feature extraction*; kedua, skalabilitas tinggi karena model dapat di-*retrain* untuk kelas aset baru dengan menambah dataset; ketiga, kemampuan *near-real-time inference* pada edge device seperti NVIDIA Jetson atau Google Coral yang memungkinkan pengambilan keputusan di lantai pabrik (<100 ms per citra).

Konteks integratif ini juga diperkuat oleh riset Patel, Bhartiya, & Gudi (2024) di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) yang menunjukkan bahwa *Physics-Informed Neural Networks* (PINN) dapat menjadi jembatan antara model *data-driven* (seperti CNN) dan model *first-principles* (persamaan diferensial parsial phenomena perpindahan panas, dinamika fluida, dan keausan mekanis). Integrasi ini menjadi penting karena anomali visual pada permukaan pipa atau dinding reaktor sering kali merupakan manifestasi dari proses fisika yang lebih dalam—seperti korosi galvanik, erosi partikulat, atau *cavitation*—yang memiliki tanda tangan matematis spesifik.

Dengan demikian, kerangka kerja deteksi anomali berbasis citra bukan sekadar proyek *machine learning* terisolasi, melainkan merupakan komponen dari arsitektur *Cyber-Physical System* (CPS) yang lebih besar, di mana citra, data sensor, dan model fisika digabungkan untuk menghasilkan keputusan pemeliharaan yang optimal.

## 2. Landasan Teori & Formulasi Matematis

Arsitektur CNN yang digunakan untuk deteksi anomali peralatan industri pada dasarnya merupakan tumpukan (*stacking*) lapisan konvolusi, aktivasi non-linear, dan *pooling* yang diakhiri dengan *fully-connected layer* untuk klasifikasi atau *encoder-decoder* untuk rekonstruksi. Operasi konvolusi dua dimensi pada sebuah citra masukan $X \in \mathbb{R}^{H \times W \times C}$ dengan kernel $K \in \mathbb{R}^{h \times w \times C}$ didefinisikan sebagai:

$$
Y_{i,j,k} = \sigma\left(\sum_{u=0}^{h-1}\sum_{v=0}^{w-1}\sum_{c=0}^{C-1} X_{i+u,\,j+v,\,c} \cdot K_{u,v,c,k} + b_k\right)
$$

di mana $\sigma(\cdot)$ merupakan fungsi aktivasi non-linear (umumnya ReLU: $\sigma(z) = \max(0,z)$), $b_k$ adalah bias untuk filter ke-$k$, dan $Y_{i,j,k}$ adalah fitur aktivasi pada posisi spasial $(i,j)$ untuk filter ke-$k$.

Untuk deteksi anomali, Pearson (2024) membahas dua paradigma utama. Paradigma pertama adalah **klasifikasi supervised** yang meminimalkan *categorical cross-entropy loss*:

$$
\mathcal{L}_{CE} = -\frac{1}{N}\sum_{i=1}^{N}\sum_{c=1}^{C} y_{i,c}\,\log(\hat{y}_{i,c})
$$

dengan $y_{i,c}$ merupakan label ground-truth (one-hot encoded) dan $\hat{y}_{i,c}$ probabilitas prediksi untuk kelas $c$ pada sampel ke-$i$. Paradigma kedua adalah **rekonstruksi autoencoder** di mana anomali dideteksi berdasarkan *reconstruction error*:

$$
\mathcal{L}_{AE} = \frac{1}{N}\sum_{i=1}^{N}\left\| X_i - \hat{X}_i \right\|_2^2
$$

dengan $X_i$ citra asli dan $\hat{X}_i$ citra hasil rekonstruksi. Ambang batas (*threshold*) anomali $\tau$ ditetapkan secara statistik menggunakan persentil ke-95 dari distribusi *reconstruction error* pada data normal:

$$
\tau = \mu_{err} + z_{0.95} \cdot \sigma_{err}
$$

di mana $z_{0.95} \approx 1{,}645$ untuk distribusi normal standar.

Pearson (2024) juga memperkenalkan konsep **transfer learning** dari arsitektur pre-trained seperti ResNet-50 atau EfficientNet-B0 yang telah dilatih pada ImageNet, dengan *fine-tuning* lapisan konvolusi akhir menggunakan dataset domain-specific (citra korosi, retak, aus, kebocoran). Metrik evaluasi kinerja utama yang digunakan mengikuti standar *information retrieval* dan *reliability engineering*:

- **Accuracy:** $\text{Acc} = \frac{TP+TN}{TP+TN+FP+FN}$
- **Precision:** $P = \frac{TP}{TP+FP}$
- **Recall (Sensitivity):** $R = \frac{TP}{TP+FN}$
- **F1-Score:** $F_1 = \frac{2PR}{P+R}$
- **Mean Time To Detection (MTTD):** $\text{MTTD} = \frac{1}{N}\sum_{i=1}^{N}(t_{detect,i} - t_{fault,i})$
- **Mean Time Between Failures (MTBF):** $\text{MTBF} = \frac{\text{Total Operating Time}}{\text{Number of Failures}}$

Komplementer terhadap framework CNN, integrasi dengan PINN yang dikemukakan Patel dkk. (2024) memperkenalkan *residual physics loss*:

$$
\mathcal{L}_{PINN} = \mathcal{L}_{data} + \lambda\,\mathcal{L}_{physics}
$$

di mana $\mathcal{L}_{physics}$ mengukur seberapa jauh prediksi jaringan melanggar persamaan diferensial governing (misalnya persamaan panas Fourier: $\nabla \cdot (k\nabla T) = \rho c_p \frac{\partial T}{\partial t}$). Parameter $\lambda$ adalah bobot regularisasi fisika yang menseimbangkan kecocokan data dan kepatuhan pada hukum fisika.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN di lingkungan industri tunduk pada kerangka SOP yang terdiri atas delapan tahap sistematis. Tahapan ini selaras dengan standar **ISO 13374** (*Condition Monitoring and Diagnostics of Machines*) dan **ISO/IEC 23053** (*Framework for AI Systems Using ML*).

**Tahap 1 — Penentuan Ruang Lingkup Aset Kritis.** Lakukan *criticality analysis* menggunakan matriks RAM (Reliability, Availability, Maintainability) untuk memilih 10–20% aset yang menyumbang 80% risiko produksi. Tetapkan Key Performance Indicators (KPI) pemeliharaan: target MTTD < 24 jam, akurasi deteksi > 95%.

**Tahap 2 — Akuisisi Data Citra.** Pasang kamera industri (IP67/IK10 rated) pada posisi tetap dengan pencahayaan *controlled* (LED ring @ 5500K, intensitas 800–1500 lux). Resolusi minimal 1920×1080 piksel, frame rate 1–5 fps untuk inspeksi periodik. Format penyimpanan: TIFF (lossless) atau PNG. Minimum 1.000 citra per kelas anomali.

**Tahap 3 — Anotasi dan Pelabelan.** Gunakan *bounding box* atau *segmentation mask* dengan perangkat seperti LabelImg atau CVAT. Terapkan *double-blind annotation* oleh dua anotator bersertifikat; ukur *inter-annotator agreement* menggunakan Cohen's Kappa ($\kappa > 0{,}80$).

**Tahap 4 — Pre-processing.** Normalisasi piksel ke rentang $[0,1]$ dengan $X_{norm} = X/255$. Terapkan augmentasi geometris dan fotometris: rotasi $\pm 15°$, *horizontal flip*, *brightness jitter* $\pm 20%$, *Gaussian noise* $\sigma=0{,}01$. Augmentasi krusial untuk mencegah *overfitting* pada dataset industri yang cenderung terbatas.

**Tahap 5 — Arsitektur dan Pelatihan Model.** Pilih backbone (ResNet-50 atau EfficientNet-B3), inisialisasi bobot dengan *ImageNet pre-trained weights*, ganti *classification head* dengan *fully-connected layer* baru (jumlah neuron = jumlah kelas anomali + 1 kelas normal). Optimizer: Adam dengan learning rate $\eta = 10^{-4}$, *batch size* 32, *epochs* 50–100, *early stopping* dengan *patience* 10.

**Tahap 6 — Validasi dan Kalibrasi Ambang Batas.** Evaluasi pada *hold-out test set* (20% data). Hitung *confusion matrix*, ROC-AUC, dan PR-AUC. Tetapkan threshold operasi $\tau$ pada titik yang memenuhi *constraint* False Positive Rate < 5%.

**Tahap 7 — Deployment Edge/Cloud.** Deploy model terkuantisasi (INT8) ke edge device (NVIDIA Jetson Orin, 40 TOPS) untuk inferensi lokal, atau ke cloud (AWS SageMaker, Azure ML) untuk inferensi batch. Latency target: <200 ms per citra pada edge.

**Tahap 8 — Monitoring, Retraining, dan Audit.** Pasang *model monitoring* untuk *data drift detection* (menggunakan *Population Stability Index*). Jadwalkan *retraining* triwulanan atau ketika PSI > 0{,}25. Simpan log inferensi untuk auditability sesuai ISO/IEC 23053.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Deteksi korosi dinding luar pada jaringan pipa pendingin (*cooling water pipeline*) di pabrik petrokimia kapasitas 100.000 barel/hari.

**Parameter Input:**

- Panjang pipa yang dimonitor: $L = 2$ km
- Jumlah segmen inspeksi: $N_{seg} = 200$ (setiap segmen = 10 m)
- Frekuensi inspeksi: 1× per minggu (52 siklus/tahun)
- Biaya inspeksi manual: $C_{manual} = \text{USD }50$ per segmen
- Biaya perbaikan korosi ringan (patch coating): $C_{light} = \text{USD }5.000$ per titik
- Biaya perbaikan korosi berat (replacement section): $C_{heavy} = \text{USD }75.000$ per titik
- Biaya kegagalan pipa (downtime + spill): $C_{fail} = \text{USD }500.000$ per insiden
- Akurasi model CNN (berdasarkan Pearson 2024): $P = 0{,}96$, $R = 0{,}93$
- False Positive Rate: $FPR = 0{,}04$

**Perhitungan 1 — Biaya Inspeksi Manual Tahunan:**

$$
C_{insp,manual} = N_{seg} \times f \times C_{manual} = 200 \times 52 \times 50 = \text{USD }520.000/\text{tahun}
$$

**Perhitungan 2 — Biaya Sistem CNN (CAPEX + OPEX).** Asumsikan investasi awal (kamera + edge AI + instalasi): CAPEX = USD 120.000, OPEX (listrik + pemeliharaan + retraining) = USD 15.000/tahun. Total annualized cost (asumsi umur 5 tahun, *discount rate* 8%):

$$
C_{CNN} = \text{USD }120.000 \times \frac{0{,}08(1{,}08)^5