# 2068 — Inspeksi Non-Destruktif Pesawat Berbasis Robotika Menuju Smart Hangar: Kerangka Rekayasa Industri 4.0 untuk MRO Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A comprehensive review of robotics-aided aircraft non-destructive inspection towards the smart hangar
**Jurnal & Sitasi Utama:** Angelos Plastropoulos, Argyrios Zolotas, Nicolas P. Avdelidis (2025). *The Aeronautical Journal*. DOI: [https://doi.org/10.1017/aer.2025.10048](https://doi.org/10.1017/aer.2025.10048)
**Sitasi Pendukung:** Angelos Plastropoulos, Argyrios Zolotas, Nicolas P. Avdelidis (2025). *The Aeronautical Journal*. DOI: [https://doi.org/10.1017/aer.2025.10048](https://doi.org/10.1017/aer.2025.10048)

---

## 1. Pendahuluan dan Konteks Industri

Industri Maintenance, Repair, and Overhaul (MRO) penerbangan global merupakan tulang punggung keselamatan operasional armada udara dunia. Menurut Plastropoulos, Zolotas, dan Avdelidis (2025) dalam *The Aeronautical Journal* (DOI: 10.1017/aer.2025.10048), pemeliharaan pesawat merupakan proses multifaset yang mensyaratkan personel bersertifikat dengan tingkat kualifikasi dan pengalaman tinggi. Proses ini tidak hanya bertujuan untuk mempertahankan *operational lifespan* pesawat terbang komersial—yang bisa mencapai 25–30 tahun untuk pesawat narrow-body seperti Boeing 737 atau Airbus A320—tetapi juga untuk meminimasi *life-cycle cost* (LCC) yang menurut kajian industri penerbangan bernilai 1,5–2,5 kali harga pembelian awal unit pesawat.

Fase diagnostik awal dalam ekosistem MRO sangat bergantung pada inspeksi visual detail yang dilakukan teknisi bersertifikasi (Part-66 EASA / A&P FAA). Setelah data inspeksi dikumpulkan, dilakukan asesmen komprehensif untuk menyusun rencana pemeliharaan termasuk penyediaan *suku cadang* dan sumber daya pendukung. Plastropoulos et al. (2025) menekankan bahwa seiring transisi sektor MRO ke era **Industry 4.0**, terjadi pergeseran paradigma dari inspeksi manual artisanal menuju integrasi *data analytics* dan *cyber-physical systems* (CPS). Pergeseran ini menjadi landasan konseptual bagi apa yang kini dikenal sebagai **Smart Hangar**—sebuah fasilitas MRO yang dilengkapi sensor IoT, platform robotik otonom, *digital twin* struktur pesawat, dan algoritma *machine learning* untuk *defect classification*.

Urgensi ekonomi dari adopsi robotika dalam inspeksi non-destruktif (*Non-Destructive Inspection*/NDI) dapat dikuantifikasi melalui tiga metrik utama. Pertama, **biaya A-check** pesawat narrow-body mencapai USD 10.000–25.000 per kejadian dengan downtime 50–70 jam. Kedua, **false call ratio** inspeksi manual ultrasonik terhadap *fuselage skin* berkisar 8–15%, yang berarti pemborosan jam kerja dan material rework. Ketiga, **Probability of Detection (POD)** cacat korosi *fatigue-critical* pada struktur sayap hanya 70–80% pada inspeksi visual manual, sehingga *inspector-dependent variability* menjadi risiko keselamatan laten. Plastropoulos et al. (DOI: 10.1017/aer.2025.10048) menyatakan bahwa "a key objective in modern MRO is reducing the probability of unexpected maintenance events"—sebuah pernyataan yang secara langsung menunjukkan urgensi penerapan sistem inspeksi otomatis dengan reliabilitas terukur dan terdokumentasi.

Konvergensi empat teknologi pendorong—(i) **robot kolaboratif (cobot)** dengan payload 10–35 kg, (ii) **sensor NDI portabel** generasi baru (phased-array UT, eddy current array, shearografi digital), (iii) **edge computing** dengan GPU Jetson Orin untuk inferensi AI real-time, dan (iv) **komunikasi 5G privat** latensi rendah—menciptakan kondisi teknis-ekonomi yang akhirnya memungkinkan transformasi Smart Hangar dari konsep futuristik menjadi *capability* operasional nyata pada hangar MRO generasi 2025–2030. Modul 2068 ini mengelaborasi kerangka rekayasa industri untuk menjawab transformasi tersebut secara kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis untuk inspeksi robotik pesawat terbang memerlukan integrasi empat pilar matematis: (a) kinematika manipulator, (b) model statistik deteksi cacat, (c) teori sinyal NDI, dan (d) optimasi rantai proses inspeksi.

### 2.1 Kinematika Manipulator dan Cakupan Ruang Kerja

Untuk robot inspeksi *in-situ* pada fuselage, parameter **Denavit–Hartenberg (DH)** digunakan untuk menyatakan transformasi antar-sendi:

$$T_i^{i-1} = \begin{bmatrix} \cos\theta_i & -\sin\theta_i\cos\alpha_i & \sin\theta_i\sin\alpha_i & a_i\cos\theta_i \\ \sin\theta_i & \cos\theta_i\cos\alpha_i & -\cos\theta_i\sin\alpha_i & a_i\sin\theta_i \\ 0 & \sin\alpha_i & \cos\alpha_i & d_i \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

Matriks transformasi homogen end-effector terhadap base frame merupakan perkalian berantai:

$$T_{end}^{0}(\theta) = \prod_{i=1}^{n} T_i^{i-1}(\theta_i)$$

Untuk manipulator 6-DOF yang lazim digunakan (UR10e, KUKA KR 16 R2010, FANUC LR Mate 200iD), *workspace coverage ratio* terhadap area fuselage dinyatakan sebagai:

$$\eta_{cov} = \frac{\iiint_{V_{reach}} \mathbb{1}_{surface}(\mathbf{p}) \, dV}{A_{fuselage}}$$

di mana $\mathbb{1}_{surface}(\mathbf{p})$ adalah fungsi indikator yang bernilai 1 jika titik $\mathbf{p}$ dalam jangkauan robot sekaligus berseberangan dengan permukaan fuselage yang dapat diakses.

### 2.2 Model Probability of Detection (POD)

Sesuai ASTM E2862-12 dan standar inspeksi авиационного, hubungan antara amplitudo cacat $a$ (mm) dan probabilitas deteksi dimodelkan dengan fungsi logistik:

$$POD(a) = \frac{1}{1 + e^{-\frac{\pi}{\sqrt{3}\sigma}\left[\ln(a) - \ln(a_{50})\right]}}$$

di mana $a_{50}$ adalah ukuran cacat pada peluang deteksi 50% dan $\sigma$ adalah deviasi standar natural-log ukuran. Untuk inspeksi manual, tipikal $a_{50}^{manual} = 2{,}5$ mm dan $\sigma_{manual} = 0{,}7$, sedangkan sistem robotik phased-array UT yang digabungkan dengan AI classifier mampu menurunkan $a_{50}^{robot}$ menjadi 1,2–1,5 mm.

### 2.3 Analisis Sinyal NDI

Untuk pengujian ultrasonik, *Signal-to-Noise Ratio* (SNR) didefinisikan:

$$SNR_{dB} = 20\log_{10}\left(\frac{V_{signal,peak}}{V_{noise,RMS}}\right)$$

Untuk eddy current testing pada struktur aluminium 2024-T3 (banyak digunakan di fuselage):

$$Z(\omega) = R_0 + j\omega L_0\left[1 - \frac{N^2}{R_c + j\omega L_c}\right]^{-1}$$

di mana $R_0, L_0$ adalah resistansi dan induktansi koil primer, $R_c, L_c$ parameter koil sekunder (coupled ke struktur), $N$ rasio lilitan. Perubahan impedansi $\Delta Z / Z_0$ menjadi fitur untuk klasifikasi cacat.

### 2.4 Throughput dan Bottleneck Analysis

Kecepatan siklus inspeksi mengikuti hukum Little untuk sistem antrian:

$$\theta_{sys} = \min\left(\theta_{robot}, \theta_{NDI}, \theta_{AI}, \theta_{data}\right)$$

di mana masing-masing subsistem merupakan *cycle time* (detik/inspeksi). Biasanya $\theta_{AI}$ (latensi inferensi CNN) menjadi *bottleneck* pada arsitektur lama, namun dengan GPU modern dapat ditekan menjadi 80–150 ms per frame 1024×1024.

### 2.5 Indeks Keandalan dan Perawatan

Waktu rata-rata antar kegagalan (MTBF) sistem inspeksi robotik:

$$MTBF = \frac{T_{total}}{\sum_{i=1}^{N} N_i}$$

dan biaya total inspeksi per unit aircraft:

$$C_{insp} = C_{labor}\cdot t_{manual} + C_{robot}\cdot t_{robot} + C_{downtime}\cdot t_{down}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka yang diajukan Plastropoulos, Zolotas, dan Avdelidis (2025), implementasi sistem inspeksi robotik mengikuti arsitektur berlapis (*layered architecture*) yang harus memenuhi standar **SAE ARP6073**, **ASTM E2862**, **EASA Part-145**, dan **FAA AC 43-204*. Tahapan SOP teknis sebagai berikut.

**Tahap 1 — Penyiapan Area Hangar dan Digital Twin.** Buat *point cloud* fuselage dari hasil *laser scan* (Leica RTC360 atau FARO Focus Premium) dengan akurasi $\pm 0{,}5$ mm @ 10 m. Data dikonversi ke model mesh (STL/OBJ) dan diintegrasikan ke platform digital twin (ANSYS Twin Builder, Siemens Xcelerator, atau Azure Digital Twins). Model ini menjadi referensi geometris bagi *path planning*.

**Tahap 2 — Kalibrasi Robot–Sensor.** Lakukan *hand-eye calibration* dengan target checkerboard 8×6 untuk kamera RGB-D (Intel RealSense D455 atau Stereolabs ZED 2i), dan gunakan prosedur *tool center point* (TCP) pada flange robot dengan akurasi target $\leq 0{,}2$ mm repetabilitas (sesuai ISO 9283). Probe UT phased-array (Olympus OmniScan X3) dan probe eddy-current array (Olympus Nortec 600D) dipasang pada *end-effector* modular.

**Tahap 3 — Path Planning dan Trajectory Generation.** Gunakan algoritma *Coverage Path Planning* (CPP) berbasis algoritma Boustrophedon atau Wavefront Expansion:

$$\mathcal{P}^* = \arg\min_{\mathcal{P}} \int_{\mathcal{P}} \frac{1}{v(s)}\, ds \quad \text{s.t. } \quad \forall p \in \mathcal{S}: \text{dist}(p, \mathcal{P}) \leq \epsilon$$

di mana $\mathcal{S}$ permukaan fuselage target, $\epsilon$ toleransi jarak probe-skin (umumnya 1–3 mm untuk UT contact, 5–15 mm untuk eddy current non-contact).

**Tahap 4 — Eksekusi Inspeksi.** Robot mengikuti trajectory dengan kecepatan linear 50–150 mm/s (tergantung metode NDI), merekam data sensor secara simultan. Untuk setiap *scan line* (lebar swath 50–100 mm), diperoleh matriks B-scan $S(x, t)$ yang disimpan dalam format HDF5 untuk traceability.

**Tahap 5 — Analisis Data dan Klasifikasi AI.** Pipeline AI terdiri dari: (a) pre-processing denoising (wavelet thresholding atau U-Net denoiser), (b) segmentation dengan Mask R-CNN atau YOLOv8 untuk *defect candidate localization*, (c) classification (ResNet-50 atau EfficientNet-B4). Confidence threshold $\tau = 0{,}85$.

**Tahap 6 — Reporting dan Audit Trail.** Hasil inspeksi—termasuk koordinat cacat, dimensi estimasi, confidence score, dan citra NDI—dikemas dalam format **ASTM E2598 compliant report** dan disimpan di *blockchain-anchored ledger* untuk immutability (ISO 9001 + AS9100D traceability requirement).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Ambil kasus inspeksi **fuselage