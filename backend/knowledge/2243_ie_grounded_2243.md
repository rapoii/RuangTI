# 2243 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* telah mengubah paradigma pemeliharaan peralatan industri dari pendekatan reaktif dan terjadwal (*scheduled maintenance*) menjadi pemeliharaan prediktif berbasis kondisi aktual (*condition-based predictive maintenance*). Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (https://doi.org/10.2139/ssrn.5266589) menyoroti bahwa kerugian ekonomi akibat *unplanned downtime* pada fasilitas manufaktur berat dapat mencapai 50.000–250.000 USD per jam pada lini produksi *high-speed* di sektor semikonduktor dan petrokimia, sehingga kebutuhan akan sistem deteksi anomali yang andal, cepat, dan otomatis menjadi sangat strategis. Pearson mengusulkan kerangka kerja *Image-Based Anomaly Detection* berbasis *Convolutional Neural Networks* (CNN) yang memanfaatkan citra visual resolusi tinggi — baik dari kamera termal, sensor hiperspektral, maupun kamera CCD standar — sebagai sumber data utama untuk mengidentifikasi degradasi komponen seperti retak mikro pada *bearing*, korosi pada *heat exchanger*, serta deformasi pada *rotor* turbin.

Urgensi teknis dari pendekatan ini terletak pada tiga keterbatasan metode konvensional. Pertama, inspeksi manual memiliki variabilitas antarpengamat (*inter-observer variability*) yang tinggi, berkisar 15–30% menurut literatur terkait. Kedua, sensor getaran dan akustik tradisional hanya mampu mendeteksi anomali yang sudah berkembang secara signifikan, sering kali setelah kerusakan fungsional muncul. Ketiga, algoritme *threshold-based* klasik tidak mampu menangani *non-linear feature interactions* yang menjadi ciri khas degradasi multi-modal. Pearson (2024) menunjukkan bahwa CNN mampu melakukan *hierarchical feature extraction* secara otomatis dari data citra mentah, sehingga dapat mengenali pola anomali pada tahap *incipient failure* — jauh sebelum gejala makroskopis terdeteksi oleh inspektur manusia. Pendekatan ini juga mendapat dukungan konseptual dari Patel, Bhartiya, dan Gudi (2024) di *IFAC-PapersOnLine* (https://doi.org/10.1016/j.ifacol.2024.08.431), yang mengintegrasikan *Physics-Informed Neural Networks* (PINN) ke dalam *Model Predictive Control* (MPC) untuk proses industri. Sinergi antara deteksi anomali berbasis citra dan kontrol prediktif berbasis fisika memungkinkan arsitektur *closed-loop* di mana keputusan pemeliharaan tidak hanya didasarkan pada pengenalan pola visual, tetapi juga pada model dinamika proses yang menghormati hukum kekekalan massa, energi, dan momentum.

Dari perspektif ekonomi teknik, investasi pada sistem CNN-anomali-detection memberikan *Internal Rate of Return* (IRR) rata-rata 22–35% dalam horizon 5 tahun, dengan *payback period* 18–28 bulan, sebagaimana dilaporkan oleh Pearson (2024) berdasarkan studi kasus pada tiga pabrik manufaktur di Asia Tenggara dan Eropa Timur. Konteks ini menegaskan bahwa modul 2243 bukan sekadar latihan akademis, melainkan kompetensi rekayasa kritis bagi insinyur industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Ekstraksi Fitur Citra

CNN beroperasi melalui operasi konvolusi diskrit dua-dimensi. Untuk citra input $X \in \mathbb{R}^{H \times W \times C}$ dan kernel $K \in \mathbb{R}^{h \times w \times C}$, *feature map* pada lapisan ke-$l$ didefinisikan sebagai:

$$h_{i,j}^{(l)} = \sigma\left(\sum_{m=0}^{h-1}\sum_{n=0}^{w-1} W_{m,n}^{(l)} \cdot X_{i+m, j+n}^{(l-1)} + b^{(l)}\right)$$

di mana $\sigma(\cdot)$ adalah fungsi aktivasi non-linear (umumnya ReLU: $\sigma(z) = \max(0,z)$), $W^{(l)}$ adalah matriks bobot yang dapat dipelajari, dan $b^{(l)}$ adalah bias. Pearson (2024) menggunakan arsitektur *modified ResNet-50* dengan *transfer learning* dari dataset ImageNet, kemudian *fine-tuned* pada 12.400 citra anomali peralatan industri.

### 2.2 Formulasi Anomaly Score

Untuk mendeteksi anomali, Pearson mengadopsi pendekatan *reconstruction-based* menggunakan *Convolutional Autoencoder* (CAE). Anomaly score $A(x)$ untuk citra input $x$ didefinisikan sebagai:

$$A(x) = \frac{1}{N}\sum_{i=1}^{N}\|x_i - \hat{x}_i\|_2^2$$

di mana $\hat{x} = f_\theta(g_\phi(x))$ adalah rekonstruksi citra oleh encoder $g_\phi$ dan decoder $f_\theta$. Citra dengan $A(x) > \tau$ (ambang batas yang ditentukan dari distribusi normal data latih) diklasifikasikan sebagai anomali. Pearson (2024) melaporkan bahwa pendekatan ini mencapai *Area Under the ROC Curve* (AUROC) sebesar 0,973 pada dataset *Casting Product* dan 0,941 pada dataset *MVTec AD*.

### 2.3 Fungsi Loss Teroptimasi

Loss training menggabungkan *reconstruction loss* dan *perceptual loss*:

$$\mathcal{L}_{total} = \lambda_1 \mathcal{L}_{MSE}(x, \hat{x}) + \lambda_2 \mathcal{L}_{perceptual}(x, \hat{x})$$

dengan:

$$\mathcal{L}_{MSE} = \frac{1}{HW}\sum_{i,j}(x_{i,j} - \hat{x}_{i,j})^2$$

### 2.4 Integrasi dengan Physics-Informed MPC

Patel, Bhartiya, dan Gudi (2024) melengkapi kerangka ini dengan PINN yang memenuhi *governing equation* proses industri. PINN meminimalkan *physics loss*:

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{k=1}^{N_p}\left\|\mathcal{N}[u_\theta](x_k, t_k) - \mathcal{F}(x_k, t_k)\right\|^2$$

di mana $\mathcal{N}[\cdot]$ adalah operator diferensial dari *neural network* output $u_\theta$ terhadap input $(x,t)$, dan $\mathcal{F}$ adalah *residual* dari persamaan fisika (misalnya persamaan difusi, *Navier-Stokes*, atau *heat equation*). Total loss PINN menjadi:

$$\mathcal{L}_{PINN} = \alpha \mathcal{L}_{data} + \beta \mathcal{L}_{physics} + \gamma \mathcal{L}_{boundary}$$

dengan $\alpha, \beta, \gamma$ sebagai *weighting factors* yang mengontrol trade-off antara akurasi data dan kepatuhan terhadap fisika.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis CNN di lingkungan industri mengikuti SOP yang distandarkan oleh Pearson (2024) dan diperkuat dengan kontrol prediktif dari Patel et al. (2024):

**Tahap 1 — Akuisisi Data Citra.** Instalasi kamera IP67 di titik kritis (rotating equipment, pressure vessel, welding seam) dengan pencahayaan LED terkontrol (*ring light*) dan filter polarisasi untuk mengurangi *specular reflection*. Resolusi minimum 1920×1080 piksel, *frame rate* ≥ 30 fps untuk inspeksi continuous.

**Tahap 2 — Pra-pemrosesan.** Normalisasi intensitas piksel ke rentang $[0,1]$, *histogram equalization* untuk meningkatkan kontras, augmentasi data melalui *rotation* (±15°), *flip horizontal*, dan *Gaussian noise injection* ($\sigma = 0,01$) untuk meningkatkan *robustness* terhadap variasi operasional.

**Tahap 3 — Pelatihan Model.** Dataset dibagi 70/15/15 untuk *training/validation/testing*. Optimasi dengan Adam optimizer, *learning rate* awal $10^{-4}$ dengan *cosine annealing*, *batch size* 32, dan *early stopping* berdasarkan *validation loss*.

**Tah
ap 4 — Kalibrasi Ambang Batas ($\tau$).** Menggunakan *quantile regression* pada distribusi $A(x)$ dari data normal (kuantil ke-99,5 sebagai default).

**Tahap 5 — Integrasi dengan MES/ERP.** Output anomali dikirim ke *Manufacturing Execution System* melalui *OPC-UA protocol* untuk memicu *work order* pemeliharaan otomatis.

**Tahap 6 — Validasi Berkelanjutan.** *Model drift detection* setiap 30 hari menggunakan *Population Stability Index* (PSI); *retraining* otomatis jika PSI > 0,2.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** PT Manufaktur XYZ — lini produksi motor listrik 5.000 unit/hari, dengan *critical equipment*: 8 unit *stamping press* kapasitas 200 ton. Kerusakan *bearing* pada *press* historis menyebabkan *unplanned downtime* rata-rata 12 jam/kejadian dengan kerugian Rp 480 juta/kejadian.

**Langkah 1 — Pengumpulan Dataset.** 4.200 citra *bearing housing* dikumpulkan dalam 90 hari, dengan distribusi: 3.360 citra normal (80%), 420 citra *incipient defect* (10%), dan 420 citra *severe defect* (10%).

**Langkah 2 — Pelatihan Model.** Menggunakan arsitektur CAE dengan *latent dimension* 128. Setelah 50 epoch, *training loss* konvergen pada $\mathcal{L}_{MSE} = 0,0087$ dan *validation loss* $= 0,0094$.

**Langkah 3 — Perhitungan Anomaly Score.** Untuk 5 citra uji:
- Citra normal: $A(x) = \{0,0032; 0,0028; 0,0041; 0,0035; 0,0029\}$, rata-rata $= 0,00330$
- Citra *incipient defect*: $A(x) = \{0,0187; 0,0212; 0,0198; 0,0231; 0,0205\}$, rata-rata $= 0,02066$
- Citra *severe defect*: $A(x) = \{0,0542; 0,0611; 0,0489; 0,0573; 0,0520\}$, rata-rata $= 0,05470$

**Langkah 4 — Penentuan Ambang Batas.** Dari distribusi normal, kuantil ke-99,5 menghasilkan $\tau = 0,0118$. Dengan ambang ini:
- *True Positive Rate* (TPR) untuk *severe defect*: $\frac{5}{5} = 100\%$
- *TPR* untuk *incipient defect*: $\frac{5}{5} = 100\%$
- *False Positive Rate* (FPR) pada data normal: $\frac{0}{5} = 0\%$

**Langkah 5 — Analisis Ekonomi.** Biaya implementasi sistem: Rp 1,2 miliar (kamera + server GPU + integrasi). Pengurangan *unplanned downtime*: 75% (dari 4 kejadian/tahun menjadi 1 kejadian/tahun). Penghematan tahunan: $3 \times 480 = 1,44$ miliar rupiah. *Payback period*: $\frac{1,2}{1,44} = 0,83$ tahun (10 bulan). NPV pada diskon 12% selama 5 tahun: $\sum_{t=1}^{5}\frac{1,44}{(1,12)^t} - 1,2 = 5,12 - 1,2 = 3,92$ miliar rupiah.

**Langkah 6 — Integrasi dengan PINN-MPC.** Menggunakan pendekatan Patel et al. (2024), model dinamika *press* di-embed ke dalam PINN dengan *governing equation*:

$$m\ddot{x} + c\dot{x} + kx = F_{applied}(t)