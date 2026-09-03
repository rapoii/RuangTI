# 1859 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Jaringan Saraf Konvolusional untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai dengan kompleksitas sistem *cyber-physical* dan meningkatnya biaya downtime, **pemeliharaan prediktif** (*predictive maintenance* — PdM) telah bergeser dari pendekatan terjadwal tradisional menuju paradigma berbasis data dan kondisi aktual aset. James Pearson (2024), dalam naskah yang dipublikasikan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589), menegaskan bahwa integrasi **Convolutional Neural Networks (CNN)** dengan pencitraan industri (*image-based monitoring*) merepresentasikan lompatan kuantum dalam akurasi deteksi anomali pada peralatan kritis seperti turbin, bearing, pompa sentrifugal, dan sistem perpipaan bertekanan tinggi. Secara historis, inspeksi visual dilakukan secara manual dengan tingkat subjektivitas yang tinggi dan *miss-rate* yang dapat mencapai 15–25% pada komponen fatig di lingkungan industri berat (Pearson, 2024).

Urgensi ekonominya tidak dapat diabaikan. Survei industri menunjukkan bahwa biaya downtime yang tidak terjadwal pada pabrik proses kontinyu dapat menembus USD 50.000 per jam, dengan kerugian agregat sektor manufaktur global akibat kerusakan tak terduga melebihi USD 50 miliar per tahun. Dari perspektif **Rekayasa Sistem Industri**, penerapan arsitektur deep learning untuk inspeksi otomatis mengurangi *mean time to detect* (MTTD) secara signifikan, sekaligus memungkinkan integrasi dengan sistem *Enterprise Asset Management* (EAM) dan *Manufacturing Execution Systems* (MES). Pearson (2024) menekankan bahwa transisi dari *reactive maintenance* ke PdM berbasis CNN berpotensi menurunkan total cost of ownership (TCO) aset rotasi hingga 30% dalam horizon 5 tahun.

Kerangka konseptual yang diajukan Pearson (2024) tidak berdiri sendiri; melainkan saling komplementer dengan riset Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* (DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)), yang mengusulkan **Physics-Informed Neural Networks (PINNs)** untuk Model Predictive Control (MPC) pada sistem proses. Sinergi kedua pendekatan ini merepresentasikan evolusi dari *digital twin* pasif menuju *digital twin* kognitif yang mampu mendeteksi anomali visual sekaligus mengontrol dinamika proses secara optimal. Dengan demikian, modul ini membahas arsitektur hulu (CNN untuk persepsi) dan hilir (PINN-MPC untuk aksi kontrol) yang menjadi tulang punggung transformasi industri 4.0 di fasilitas manufaktur kelas dunia.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Konvolusional untuk Ekstraksi Fitur Citra

CNN beroperasi melalui operasi konvolusi diskrit dua-dimensi yang memproses citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ dengan kernel $\mathbf{K} \in \mathbb{R}^{k_h \times k_w \times C}$ untuk menghasilkan peta fitur $\mathbf{F}$:

$$F_{i,j} = \sigma\left(\sum_{m=0}^{k_h-1}\sum_{n=0}^{k_w-1}\sum_{c=0}^{C-1} X_{i+m,\, j+n,\, c} \cdot K_{m,n,c} + b\right)$$

di mana $b$ adalah *bias* dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear — umumnya ReLU: $\sigma(x) = \max(0, x)$. Untuk deteksi anomali pada permukaan komponen industri, Pearson (2024) merekomendasikan arsitektur dengan kedalaman minimal 18–50 lapisan, mengadopsi *residual blocks* untuk mitigasi *vanishing gradient*.

### 2.2 Formulasi Autoencoder untuk Anomaly Detection

Pearson (2024) membangun kerangka deteksi anomali di atas **Convolutional Autoencoder (CAE)** yang meminimalkan rekonstruksi error antara citra asli $\mathbf{X}$ dan citra rekonstruksi $\hat{\mathbf{X}}$:

$$\mathcal{L}_{\text{rec}}(\theta, \phi) = \frac{1}{N}\sum_{i=1}^{N} \left\| \mathbf{X}^{(i)} - \mathcal{D}_\phi(\mathcal{E}_\theta(\mathbf{X}^{(i)})) \right\|_2^2$$

di mana $\mathcal{E}_\theta$ adalah *encoder* berparameter $\theta$ dan $\mathcal{D}_\phi$ adalah *decoder* berparameter $\phi$. **Anomaly score** untuk citra baru didefinisikan sebagai:

$$\mathcal{A}(\mathbf{X}) = \left\| \mathbf{X} - \hat{\mathbf{X}} \right\|_2^2 = \sum_{p=1}^{H}\sum_{q=1}^{W}(X_{p,q} - \hat{X}_{p,q})^2$$

Suatu citra diklasifikasikan anomali jika $\mathcal{A}(\mathbf{X}) > \tau$, dengan threshold $\tau$ ditetapkan melalui analisis distribusi *Mahalanobis distance* pada data normal.

### 2.3 Integrasi PINN-MPC untuk Kontrol Proses (Patel et al., 2024)

Patel, Bhartiya, dan Gudi (2024) melengkapi arsitektur ini dengan **Physics-Informed Neural Networks** yang menyertakan residual persamaan diferensial sebagai *regularizer*. Untuk sistem proses dengan dinamika:

$$\dot{\mathbf{x}}(t) = f(\mathbf{x}(t), \mathbf{u}(t)), \quad \mathbf{y}(t) = g(\mathbf{x}(t))$$

PINN meminimalkan *loss* gabungan:

$$\mathcal{L}_{\text{PINN}} = \lambda_{\text{data}}\mathcal{L}_{\text{data}} + \lambda_{\text{physics}}\mathcal{L}_{\text{physics}} + \lambda_{\text{IC}}\mathcal{L}_{\text{IC}}$$

dengan komponen *physics loss*:

$$\mathcal{L}_{\text{physics}} = \frac{1}{N_p}\sum_{j=1}^{N_p}\left\| \dot{\mathbf{x}}_{\text{NN}}(t_j) - f(\mathbf{x}_{\text{NN}}(t_j), \mathbf{u}(t_j)) \right\|_2^2$$

Formulasi **Model Predictive Control** kemudian diselesaikan sebagai masalah optimasi horizon $H_p$:

$$\min_{\mathbf{U}} \; J = \sum_{k=0}^{H_p-1}\left[(\mathbf{y}_{k+1} - \mathbf{y}_{\text{ref}})^\top \mathbf{Q}(\mathbf{y}_{k+1} - \mathbf{y}_{\text{ref}}) + \mathbf{u}_k^\top \mathbf{R}\mathbf{u}_k\right]$$

Kendala: $\mathbf{x}_{k+1} = \mathbf{x}_{\text{PINN},k}(\mathbf{x}_k, \mathbf{u}_k)$, $\mathbf{u}_{\min} \le \mathbf{u}_k \le \mathbf{u}_{\max}$.

### 2.4 Metrik Evaluasi Kinerja

Kinerja detektor anomali CNN dilaporkan melalui:

$$\text{Precision} = \frac{TP}{TP+FP}, \quad \text{Recall} = \frac{TP}{TP+FN}, \quad F_1 = 2\cdot\frac{\text{Precision}\cdot\text{Recall}}{\text{Precision}+\text{Recall}}$$

Pearson (2024) melaporkan bahwa arsitektur CNN-nya mencapai **F1-score rata-rata 0,94** pada dataset MVTec AD untuk kategori komponen industri seperti baut, mur, dan permukaan metalik, melampaui baseline *statistical process control* yang hanya mencapai F1 ≈ 0,71.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi deteksi anomali berbasis CNN di fasilitas industri mengikuti SOP berlapis yang diselaraskan dengan standar **ISO 13373** (condition monitoring) dan **ISO/IEC 23053** (kerangka AI). Pearson (2024) merekomendasikan protokol 6-tahap berikut:

**Tahap 1 — Akuisisi Data Citra.** Kamera industri resolusi tinggi (minimal 5 MP) dipasang pada posisi tetap dengan pencahayaan terkontrol (*structured illumination*). Frekuensi akuisisi 1–10 fps, dengan metadata sinkronisasi sensor getaran dan suhu. Standar rujukan: ISO 23569 untuk karakterisasi kamera mesin.

**Tahap 2 — Pra-pemrosesan & Anotasi.** Citra dinormalisasi ke resolusi $224\times224$ piksel, dilakukan *histogram equalization*, dan augmentasi melalui rotasi ($\pm 15°$), flipping, serta penyesuaian brightness ($\pm 10\%$). Anotasi anomali mengikuti konvensi *bounding box* COCO-format dengan kelas cacat: retak, korosi, keausan, kontaminasi.

**Tahap 3 — Pelatihan Model.** Dataset dibagi 70/15/15 (train/val/test) dengan *stratified sampling*. Optimizer Adam dengan *learning rate* $\eta = 10^{-4}$, *batch size* 32, dan *early stopping* berbasis *validation loss*. Pearson (2024) menerapkan *transfer learning* dari ImageNet untuk mempercepat konvergensi pada dataset industri terbatas (1.000–5.000 citra).

**Tahap 4 — Validasi & Kalibrasi Threshold.** Threshold anomaly $\tau$ dikalibrasi menggunakan *precision-recall curve* pada data validasi, dengan target *precision* $\geq 0{,}95$ untuk meminimalkan *false alarm* yang mengganggu operasi.

**Tahap 5 — Deployment Edge.** Model dikuantisasi (INT8) dan di-deploy ke GPU industri (NVIDIA Jetson Orin) atau FPGA, dengan *inference latency* target $\le 50$ ms per citra.

**Tahap 6 — Integrasi dengan PINN-MPC (Patel et al., 2024).** Sinyal anomali dari CNN menjadi *trigger* reparameterisasi MPC: ketika $\mathcal{A}(\mathbf{X}) > \tau_{\text{critical}}$, horizon prediksi diperluas dari $H_p = 20$ menjadi $H_p = 50$ langkah untuk antisipasi kegagalan.

Diagram alir proses secara ringkas: **[Akuisisi Citra] → [Pra-pemrosesan] → [CNN Inference] → [Anomaly Score] → [Threshold Decision] → [Alarm/Trigger MPC Recalibration]**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Inspeksi otomatis bearing SKF 6205 pada lini produksi motor listrik PT XYZ (skala ilustratif berbasis protokol Pearson, 2024).

**Parameter Input:**
- Jumlah citra pelatihan: $N_{\text{train}} = 4.000$ (kelas normal), $N_{\text{test}} = 800$ (400 normal + 400 anomali)
- Resolusi citra: $224 \times 224 \times 3$
- Arsitektur: ResNet-18 Autoencoder dengan *latent dimension* $d_z = 128$
- Threshold anomali awal: $\tau_0 = 0{,}015$ (berdasarkan distribusi training)

**Langkah 1 — Rekonstruksi Error pada Sampel Anomali.**
Untuk satu citra bearing berkorosi dengan rekonstruksi error:

$$\mathcal{A}(\mathbf{X}_{\text{cacat}}) = \sum_{p=1}^{224}\sum_{q=1}^{224}(X_{p,q} - \hat{X}_{p,q})^2 = 0{,}0284$$

**Langkah 2 — Keputusan Klasifikasi.**
Karena $\mathcal{A}(\mathbf{X}_{\text{cacat}}) = 0{,}0284 > \tau_0 = 0{,}015$, citra diklasifikasikan **ANOMALI** (true positive).

**Langkah 3 — Perhitungan Metrik pada Test Set (ilustr