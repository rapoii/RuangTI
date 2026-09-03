# 2099 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* telah memaksa pelaku industri manufaktur dan proses untuk bertransformasi dari paradigma pemeliharaan reaktif (*run-to-failure*) dan preventif berbasis jadwal menuju pemeliharaan prediktif berbasis kondisi (*condition-based predictive maintenance*). Kerusakan mendadak pada peralatan kritikal—seperti turbin gas, pompa sentrifugal, motor listrik, dan sistem konveyor—menyebabkan *unplanned downtime* yang secara empiris menimbulkan kerugian produksi rata-rata USD 50.000–250.000 per jam pada industri *oil & gas*, petrokimia, dan manufaktur semikonduktor (Pearson, 2024, DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)). Data lapangan menunjukkan bahwa 70% biaya siklus hidup aset industri berasal dari fase operasi dan pemeliharaan, sehingga peningkatan akurasi deteksi anomali memiliki *leverage* ekonomi yang sangat tinggi.

Pearson (2024) dalam studi yang dipublikasikan di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) memperkenalkan arsitektur *Convolutional Neural Network* (CNN) yang dilatih secara spesifik untuk mengenali pola degradasi pada citra visual peralatan industri—misalnya korosi pada permukaan pipa, retakan pada bilah turbin, perubahan warna pada isolator listrik, kebocoran pada *heat exchanger*, atau kontaminasi pada jalur optik. Berbeda dengan sensor getaran atau akustik yang terbatas pada titik ukur tertentu, pendekatan *image-based* memungkinkan cakupan inspeksi non-kontak yang lebih luas, konsisten, dan terdokumentasi secara otomatis. Pendekatan ini melengkapi kerangka kerja *Physics-Informed Neural Networks* (PINN) yang diajukan oleh Patel, Bhartiya, dan Gudi (2024, DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) untuk *Model Predictive Control* (MPC) pada sistem proses—karena kedua teknologi sama-sama mengandalkan representasi neural untuk menggantikan model analitik klasik, namun dengan tetap mempertahankan konsistensi fisika.

Urgensi integrasi kedua pendekatan ini terletak pada kenyataan bahwa deteksi anomali saja tidak cukup; hasil deteksi harus diterjemahkan menjadi keputusan operasional (misalnya penjadwalan shutdown, penurunan set-point, atau *re-routing* produksi) yang membutuhkan horizon prediksi beberapa jam hingga hari ke depan. Dengan demikian, modul ini membahas bagaimana CNN deteksi anomali dan PINN-MPC dapat diorkestrasikan dalam arsitektur *cyber-physical system* untuk menghasilkan sistem manufaktur yang benar-benar otonom.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali

Model CNN Pearson (2024) mengikuti arsitektur *encoder–decoder* (autoencoder konvolusional) yang dilatih hanya pada citra kondisi normal. Fitur diekstraksi melalui konvolusi diskret:

$$
y_{j}^{(l)} = f\left(\sum_{i \in M_j} x_i^{(l-1)} * k_{ij}^{(l)} + b_j^{(l)}\right)
$$

dengan $x_i^{(l-1)}$ adalah peta fitur masukan layer $l-1$, $k_{ij}^{(l)}$ adalah kernel konvolusi berukuran $m \times m$, $b_j^{(l)}$ adalah bias, dan $f(\cdot)$ adalah fungsi aktivasi non-linear seperti ReLU $f(z) = \max(0, z)$. Reduksi dimensionalitas dilakukan melalui *max-pooling* dengan *stride* $s$:

$$
p_j^{(l)}(u,v) = \max_{(a,b) \in \mathcal{N}} y_j^{(l-1)}(s \cdot u + a, s \cdot v + b)
$$

Skor anomali untuk citra masukan $x$ didefinisikan sebagai *reconstruction error* terhadap citra rekonstruksi $\hat{x}$:

$$
A(x) = \frac{1}{N}\sum_{i=1}^{N}\left(x_i - \hat{x}_i\right)^2
$$

di mana keputusan anomali diambil melalui ambang (*threshold*) $\tau$: jika $A(x) > \tau$, citra diklasifikasikan sebagai anomali. Pearson (2024) menggunakan ambang yang ditentukan berdasarkan persentil ke-99 dari distribusi $A(x)$ pada *validation set* kondisi normal.

### 2.2 PINN untuk Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) mengusulkan PINN sebagai model suruga (*surrogate model*) untuk MPC, di mana *loss function* mengandung dua komponen: *data loss* dan *physics loss*:

$$
\mathcal{L}_{\text{total}} = \lambda_d \mathcal{L}_{\text{data}} + \lambda_p \mathcal{L}_{\text{physics}}
$$

dengan $\lambda_d + \lambda_p = 1$. Komponen *physics loss* memastikan bahwa output neural network $\hat{y}(t)$ memenuhi persamaan diferensial parcial yang mengatur sistem proses, misalnya konservasi massa dan energi:

$$
\mathcal{L}_{\text{physics}} = \frac{1}{T}\int_0^T \left\| \frac{\partial \hat{y}}{\partial t} - \mathcal{F}(\hat{y}, u, \theta) \right\|^2 dt
$$

Formulasi MPC dengan horizon prediksi $H_p$ dan *control horizon* $H_c$ adalah:

$$
\min_{U} J = \sum_{k=0}^{H_p-1} \left\| y_{k+1|k} - y^{\text{ref}}_{k+1} \right\|_Q^2 + \sum_{k=0}^{H_c-1} \left\| \Delta u_{k|k} \right\|_R^2
$$

tunduk pada kendala $\underline{y} \le y_{k+1|k} \le \bar{y}$, $\underline{u} \le u_k \le \bar{u}$, yang dievaluasi melalui PINN suruga.

### 2.3 Metrik Evaluasi Kinerja

Untuk deteksi anomali, Pearson (2024) menggunakan metrik:

$$
\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}
$$

serta kurva ROC–AUC untuk menilai diskriminasi model pada berbagai nilai $\tau$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN memerlukan SOP terstruktur sebagai berikut:

**Tahap 1 – Akuisisi & Kurasi Data (Minggu 1–4).** Kamera industri (resolusi ≥ 2 MP, *frame rate* ≥ 30 fps) dipasang pada *fixed mount* dengan pencahayaan terkontrol (*IP67-rated LED ring*). Minimal 10.000 citra kondisi normal dikumpulkan per peralatan; beberapa ratus citra anomali dikumpulkan melalui augmentasi (rotasi, flip, *cutout*, *Gaussian noise*) untuk mencegah *overfitting* pada kelas minoritas.

**Tahap 2 – Pra-pemrosesan (Minggu 5).** Citra dinormalisasi ke ukuran $224 \times 224$ piksel, dilakukan *histogram equalization*, dan augmentasi on-the-fly selama pelatihan. Dataset dipisah 70/15/15 untuk *train/validation/test*.

**Tahap 3 – Pelatihan Model (Minggu 6–10).** Arsitektur backbone menggunakan *transfer learning* dari ResNet-50 pretrained pada ImageNet. *Fine-tuning* dilakukan dengan *learning rate* $\eta_0 = 10^{-4}$ dan *Adam optimizer* ($\beta_1=0.9$, $\beta_2=0.999$). *Early stopping* dipicu jika *validation loss* tidak membaik selama 10 epoch. *Batch size* = 32, *epoch* maksimum = 100.

**Tahap 4 – Kalibrasi Threshold (Minggu 11).** Nilai $\tau$ ditetapkan sehingga *False Positive Rate* $\le 5\%$ pada *validation set* (sesuai ISO 13373-3 untuk *condition monitoring*).

**Tahap 5 – Integrasi dengan CMMS/EAM (Minggu 12).** Output model di-*stream* via REST API ke *Computerized Maintenance Management System* (CMMS) seperti SAP PM atau IBM Maximo, sehingga deteksi anomali secara otomatis menghasilkan *work order* dengan tingkat urgensi yang dipetakan dari skor $A(x)$.

**Tahap 6 – Continuous Learning (Ongoing).** Mekanisme *human-in-the-loop* memungkinkan teknisi memvalidasi hasil deteksi melalui aplikasi mobile; sampel yang terverifikasi dimasukkan kembali ke *training pipeline* untuk *model retraining* triwulanan.

Diagram alur: `Citra Akuisisi → Pra-proses → CNN Inference → Skor Anomali → Threshold Check → [Anomali?] → Ya → CMMS Work Order → Tidak → Log Normal`.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Inspeksi visual pompa sentrifugal di pabrik petrokimia kapasitas 100.000 barel/hari. Satu pompa kritikal menggantikan biaya USD 1.250.000; kerusakan unplanned menyebabkan kerugian produksi USD 180.000/jam.

**Langkah 1 – Input Parameter:**
- Akuisisi citra: 500 citra/hari × 30 hari = 15.000 citra kondisi normal + 250 citra anomali (retakan, korosi, kebocoran segel).
- Akurasi model Pearson (2024) pada *test set*: Precision = 0,93; Recall = 0,89; F1 = 0,91.

**Langkah 2 – Perhitungan Dampak Operasional:**
- *Baseline failure* (tanpa sistem): 2 kerusakan unplanned/tahun × 6 jam per kejadian × USD 180.000 = **USD 2.160.000/tahun**.
- Dengan sistem deteksi anomali: *lead time* deteksi rata-rata 14 hari sebelum failure. Kerusakan dapat dijadwalkan pada *planned shutdown* (biaya kehilangan produksi hanya USD 30.000/jam karena sebagian lini tetap berjalan).
- Pengurangan kerugian: 2 kejadian × (USD 180.000 – USD 30.000)/jam × 6 jam = **USD 1.800.000/tahun**.

**Langkah 3 – CAPEX & OPEX Sistem:**
- CAPEX: 4 kamera IP67 + server GPU + instalasi = USD 85.000.
- OPEX tahunan: pelatihan ulang, *cloud storage*, teknisi validasi = USD 22.000/tahun.

**Langkah 4 – Perhitungan ROI dan Payback Period:**

$$
\text{ROI} = \frac{\text{Benefit} - \text{Cost}}{\text{Cost}} \times 100\% = \frac{(1.800.000 - 22.000) - 85.000}{85.000} \times 100\% \approx 1.991\%
$$

$$
\text{Payback