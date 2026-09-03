# 1555 — Integrasi Computer Vision dan Physics-Informed Neural Networks untuk Sistem Pemeliharaan Prediktif dan Kontrol Proses Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai pabrik telah memasuki era *Industry 4.0* dan *Industry 5.0*, di mana integrasi antara *cyber-physical systems* (CPS), *Internet of Things* (IoT), dan algoritma *deep learning* menjadi tulang punggung keberlangsungan operasi. Dalam konteks ini, dua tantangan utama yang menjadi perhatian perekayasa industri modern adalah (i) deteksi dini anomali pada peralatan industri berbasis citra visual, dan (ii) pengendalian proses multi-variabel yang bersifat nonlinier dan *ill-conditioned*. Pearson (2024) dalam tulisannya di jurnal *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) menekankan bahwa inspeksi visual manual memiliki *Mean Time To Detection* (MTTD) yang sangat tinggi, sedangkan *Convolutional Neural Networks* (CNN) mampu menekan MTTD hingga 78% pada studi kasus rotor turbin, gearbox, dan *heat exchanger*. Studi ini juga menyoroti bahwa biaya *unplanned downtime* pada industri proses mencapai USD 50 miliar per tahun secara global, dan 42% di antaranya disebabkan oleh kegagalan yang sebenarnya sudah dapat dideteksi secara visual jauh sebelum *failure*.

Di sisi lain, Patel, Bhartiya, dan Gudi (2024) dalam publikasinya di *IFAC-PapersOnLine* dengan DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) mengusulkan kerangka *Model Predictive Control* (MPC) berbasis *Physics-Informed Neural Networks* (PINN) untuk sistem proses. Pendekatan ini menjawab keterbatasan MPC konvensional yang memerlukan model *first-principles* lengkap dan sulit diakomodasi ketika sistem memiliki *drift* parameter. Urgensi ekonominya sangat relevan untuk industri *batch* dan *continuous process* seperti petrokimia, *pharma*, dan *food & beverage*, di mana deviasi kecil pada suhu, tekanan, atau konsentrasi dapat menurunkan *yield* hingga 3–7% per siklus produksi.

Secara strategis, kedua paper tersebut saling melengkapi: Pearson (2024) menawarkan persepsi (sense) berbasis citra untuk pemeliharaan prediktif, sementara Patel et al. (2024) menawarkan kognisi (control) berbasis fisika untuk optimasi proses. Integrasi keduanya membentuk *closed-loop intelligent manufacturing system* yang tidak hanya memonitor tetapi juga mengoreksi kondisi operasi secara adaptif. Konteks ini menjadi semakin penting ketika perusahaan menghadapi tekanan untuk mencapai *net-zero emission*, *zero-defect manufacturing*, dan *OEE* (Overall Equipment Effectiveness) di atas 85%.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur CNN untuk Deteksi Anomali Visual

Pearson (2024) mengusulkan arsitektur CNN modifikasi berbasis *transfer learning* dari *backbone* ResNet-50 yang telah dilatih pada ImageNet. Operasi konvolusi dua dimensi diekspresikan sebagai:

$$Y[i,j] = \sigma\left(\sum_{m=0}^{M-1}\sum_{n=0}^{N-1} X[i+m,\,j+n] \cdot K[m,n] + b\right)$$

di mana $X \in \mathbb{R}^{H \times W}$ adalah citra masukan, $K \in \mathbb{R}^{M \times N}$ adalah kernel konvolusi, $b$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi nonlinier. Pearson menggunakan *Leaky ReLU* dengan parameter $\alpha = 0{,}1$ untuk menjaga gradien pada neuron mati:

$$f(x) = \begin{cases} x, & x \geq 0 \\ \alpha x, & x < 0 \end{cases}$$

Fungsi kerugian klasifikasi anomali menggunakan *Focal Loss* untuk menangani *class imbalance* antara kondisi normal dan anomali:

$$\mathcal{L}_{focal} = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

dengan $\gamma = 2$ sebagai *focusing parameter* dan $\alpha_t$ sebagai bobot kelas.

### 2.2. Physics-Informed Neural Networks (PINN)

Patel, Bhartiya, dan Gudi (2024) mendefinisikan PINN sebagai jaringan saraf yang fungsi kerugiannya menggabungkan kesalahan data dan kesalahan fisika. Untuk suatu sistem yang governed oleh *Partial Differential Equation* (PDE) berbentuk:

$$\frac{\partial u}{\partial t} + \mathcal{N}[u; \lambda] = 0,\quad x \in \Omega,\quad t \in [0,T]$$

maka PINN meminimalkan:

$$\mathcal{L}_{PINN} = \lambda_d \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics}$$

di mana:

$$\mathcal{L}_{physics} = \frac{1}{N_p}\sum_{i=1}^{N_p} \left| \frac{\partial \hat{u}}{\partial t}(x_i,t_i) + \mathcal{N}[\hat{u};\lambda](x_i,t_i) \right|^2$$

dengan $\lambda_d$ dan $\lambda_p$ adalah hiperparameter bobot keseimbangan data-fisika.

### 2.3. Formulasi MPC

Masalah MPC dalam kerangka Patel et al. (2024) dirumuskan sebagai optimasi horizon prediksi $N_p$:

$$\min_{U} J = \sum_{k=0}^{N_p-1} \left[(x_k - x_{ref})^T Q (x_k - x_{ref}) + (u_k - u_{ref})^T R (u_k - u_{ref})\right] + (x_{N_p} - x_{ref})^T P (x_{N_p} - x_{ref})$$

*Subject to*:

$$x_{k+1} = f_{PINN}(x_k, u_k),\quad u_{min} \leq u_k \leq u_{max}$$

di mana $f_{PINN}$ adalah model proses yang didekati oleh PINN, sehingga menggantikan model *first-principles* yang sulit diidentifikasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari kedua pendekatan mengikuti SOP industri sesuai ISO 13374 (untuk *condition monitoring*) dan ISA-95 (untuk integrasi enterprise-control):

**Tahap 1 — Akuisisi Data Citra.** Kamera industri resolusi $\geq$ 2 MP dengan iluminasi terstruktur (LED *ring light*) dipasang pada *robotic crawler* atau *fixed mount*. Frekuensi sampling citra adalah 1 fps untuk inspeksi periodik, atau *event-triggered* ketika sensor getaran mencurigai anomali. Citra disimpan dalam format TIFF 16-bit untuk menjaga *dynamic range*.

**Tahap 2 — Pra-pemrosesan.** Tahapan ini mencakup *ROI extraction*, *histogram equalization*, *noise filtering* dengan *Gaussian kernel* ($\sigma = 1{,}2$), dan augmentasi data: *rotation* $\pm 15°$, *flip* horizontal, *brightness jitter* $\pm 20%$, dan *CutMix* dengan $p = 0{,}3$.

**Tahap 3 — Pelatihan Model CNN.** *Hyperparameter*: *batch size* = 32, *optimizer* = AdamW dengan $lr = 3 \times 10^{-4}$ dan *weight decay* $10^{-4}$, *scheduler* = *cosine annealing*, *epochs* = 100 dengan *early stopping* (patience = 15). Validasi menggunakan *k-fold cross-validation* dengan $k=5$.

**Tahap 4 — Deployment & Inferensi.** Model diekspor ke format ONNX dan di-*deploy* pada *edge device* NVIDIA Jetson AGX Orin dengan *inference latency* < 50 ms per citra.

**Tahap 5 — Integrasi dengan PINN-MPC.** Sinyal anomali dari CNN dikirimkan ke *Process Historian* (PI System atau Honeywell PHD) sebagai *soft sensor*. Model PINN-MPC dijalankan pada *control server* dengan *sampling time* 1 detik, menghasilkan *set-point adjustment* yang dikirim ke DCS (Distributed Control System) via OPC-UA.

**Tahap 6 — Validasi & Audit.** Kinerja diverifikasi terhadap *benchmark* MIMII Dataset (untuk audio anomaly) dan *MVTec AD Dataset* (untuk citra anomali), dengan metrik AUC-ROC $\geq 0{,}95$ sebagai ambang kelayakan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus CNN — Inspeksi *Shell-and-Tube Heat Exchanger*

Sebuah pabrik kimia di Cilacap memiliki 24 unit *shell-and-tube heat exchanger*. Citra permukaan *tube bundle* diambil menggunakan kamera *borescope*. Dataset terdiri dari 5.000 citra: 4.000 *normal*, 500 *fouling*, dan 500 *corrosion*.

**Perhitungan Confusion Matrix (sampel uji $N=500$):**

| Aktual \ Prediksi | Normal | Anomali |
|---|---|---|
| Normal (350) | 335 (TN) | 15 (FN) |
| Anomali (150) | 8 (FP) | 142 (TP) |

Metrik kinerja:

$$\text{Accuracy} = \frac{TP+TN}{N} = \frac{142+335}{500} = 0{,}954$$

$$\text{Precision} = \frac{TP}{TP+FP} = \frac{142}{150} = 0{,