# 2771 — Deteksi Anomali Berbasis Citra dan Kontrol Prediktif dengan Jaringan Saraf Berinformasi Fisika untuk Sistem Industri Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan dan pengendalian proses di industri manufaktur, kimia, dan energi. Dua pilar teknologi yang menjadi tulang punggung transformasi ini adalah *deep learning* untuk inspeksi visual otomatis dan *model predictive control* (MPC) berbasis model hybrid. Pearson (2024) dalam penelitiannya yang diterbitkan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) mengajukan arsitektur *Convolutional Neural Network* (CNN) untuk mendeteksi anomali visual pada peralatan industri—seperti retakan mikro pada permukaan baja, korosi pada pipa, keausan bearing, dan misalignment komponen rotasi—yang sulit diidentifikasi oleh inspektur manusia pada tahap awal. Studi ini muncul sebagai respons terhadap kenyataan bahwa 70–80% biaya *unplanned downtime* di industri proses berasal dari kegagalan peralatan yang sebenarnya sudah menunjukkan indikasi visual jauh sebelum *breakdown* terjadi.

Di sisi lain, Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) mempublikasikan pendekatan *Physics-Informed Neural Networks* (PINNs) untuk MPC pada sistem proses, sebuah terobosan yang menjembatani kesenjangan antara model *first-principles* dan model *data-driven*. Permasalahan fundamental yang diidentifikasi keduanya adalah bahwa metode pemeliharaan konvensional (reactive dan preventive berbasis jadwal) menghasilkan *over-maintenance* yang memboroskan sumber daya, sementara inspeksi manual memiliki *subjectivity* tinggi, laju *false negative* yang tidak dapat diterima untuk peralatan kritis, serta biaya *human capital* yang signifikan.

Secara ekonomis, biaya pemeliharaan menyumbang 15–70% dari total biaya operasional pabrik (tergantung sektor), dan *downtime* yang tidak direncanakan dapat merugikan industri petrokimia hingga USD 1,4 juta per insiden menurut berbagai studi reliabilitas industri. Urgensi integrasi CNN untuk deteksi anomali visual menjadi semakin penting ketika industri bergerak menuju konsep *zero-touch manufacturing* dan *digital twin*. Pearson menekankan bahwa CNN tidak hanya mengklasifikasikan citra, tetapi juga menghasilkan *localization map* anomali melalui *Class Activation Mapping* (CAM) atau *Grad-CAM*, yang menyediakan interpretabilitas tinggi bagi teknisi pemeliharaan. Sementara itu, framework Patel et al. memungkinkan MPC yang adaptif terhadap perubahan dinamika proses karena PINNs mampu mempelajari parameter fisika yang tidak diketahui dari data operasional, sehingga mengurangi *model-plant mismatch* yang menjadi kelemahan kronis MPC tradisional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur CNN untuk Deteksi Anomali (Pearson, 2024)

CNN merupakan kelas *deep feedforward neural network* yang dioptimasi untuk data grid (citra). Operasi fundamentalnya adalah *discrete convolution* antara citra masukan $\mathbf{X} \in \mathbb{R}^{H \times W \times C}$ dengan filter $\mathbf{K} \in \mathbb{R}^{k_h \times k_w \times C}$:

$$Y_{i,j} = (\mathbf{X} * \mathbf{K})_{i,j} + b = \sum_{c=1}^{C}\sum_{u=0}^{k_h-1}\sum_{v=0}^{k_w-1} X_{i+u,\,j+v,\,c} \cdot K_{u,v,c} + b$$

dengan $b$ adalah *bias*. Aktivasi non-linear ReLU diterapkan untuk memperkenalkan *non-linearity*:

$$f(x) = \max(0, x)$$

Untuk klasifikasi biner (anomali vs normal), lapisan *fully connected* akhir menggunakan fungsi sigmoid $\sigma(z) = \frac{1}{1+e^{-z}}$, sementara untuk multi-kelas digunakan *softmax*. Pearson (2024) menggunakan arsitektur *transfer learning* berbasis ResNet-50 dengan *fine-tuning* pada domain industri spesifik. *Loss function* untuk masalah deteksi anomali yang bersifat *imbalanced* menggunakan *Focal Loss*:

$$\mathcal{L}_{focal}(p_t) = -\alpha_t (1 - p_t)^{\gamma} \log(p_t)$$

dengan $p_t$ adalah probabilitas kelas target, $\alpha_t$ adalah *weighting factor* untuk menangani *class imbalance*, dan $\gamma$ (umumnya $= 2$) adalah *focusing parameter* yang mengurangi kontribusi *easy examples* terhadap gradien.

Metrik evaluasi mengikuti standar ISO dan literatur *computer vision*:

$$\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}, \quad F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}$$

### 2.2 Physics-Informed Neural Networks untuk MPC (Patel et al., 2024)

MPC menyelesaikan masalah optimal pada *prediction horizon* $N_p$ dan *control horizon* $N_c$:

$$\min_{\mathbf{u}} J = \sum_{k=0}^{N_p-1} \left[(\mathbf{y}_{k+1} - \mathbf{y}^{ref}_{k+1})^{\top} \mathbf{Q} (\mathbf{y}_{k+1} - \mathbf{y}^{ref}_{k+1}) + \mathbf{u}_k^{\top} \mathbf{R} \, \mathbf{u}_k\right]$$

$$\text{subject to: } \mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k), \quad \mathbf{y}_k = g(\mathbf{x}_k), \quad \mathbf{u}_k \in \mathcal{U}, \quad \mathbf{y}_k \in \mathcal{Y}$$

Kelemahan MPC adalah ketergantungan pada model $f$ yang akurat. Patel et al. (2024) mengusulkan PINN yang menggabungkan *data loss* $\mathcal{L}_{data}$ dengan *physics loss* $\mathcal{L}_{physics}$:

$$\mathcal{L}_{PINN} = \lambda_1 \mathcal{L}_{data} + \lambda_2 \mathcal{L}_{physics}$$

dengan:

$$\mathcal{L}_{data} = \frac{1}{N_d}\sum_{i=1}^{N_d} \|\hat{\mathbf{y}}(t_i) - \mathbf{y}_i\|^2$$

$$\mathcal{L}_{physics} = \frac{1}{N_c}\sum_{j=1}^{N_c} \|f_{res}(\hat{\mathbf{x}}_j, \hat{\mathbf{u}}_j)\|^2$$

di mana $f_{res}$ adalah *residual* persamaan diferensial parsial atau *ordinary differential equations* (ODE) yang mendeskripsikan dinamika proses. Pendekatan ini memungkinkan identifikasi parameter fisika yang tidak diketahui ($\theta$) seperti koefisien perpindahan panas atau konstanta reaksi kimia langsung dari data operasional.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi CNN Anomaly Detection (Pearson, 2024)

Prosedur implementasi mengikuti alur sistematis berikut:

```
[Fase 1: Akuisisi Data]
   ↓ Akuisisi citra via kamera IP industri (resolusi ≥ 1920×1080)
   ↓ Pre-processing: resize, normalisasi [0,1], augmentasi (rotasi, flip, brightness)
[Fase 2: Pelabelan & Splitting]
   ↓ Anotasi oleh ahli domain (bounding box untuk CAM)
   ↓ Splitting: 70% training, 15% validation, 15% test
[Fase 3: Training]
   ↓ Transfer learning ResNet-50 pre-trained ImageNet
   ↓ Fine-tuning lapisan akhir dengan learning rate η = 1e-4, Adam optimizer
   ↓ Early stopping berdasarkan validation F1-score
[Fase 4: Validasi & Deployment]
   ↓ Pengujian pada set independen
   ↓ Edge deployment pada GPU industri (NVIDIA Jetson)
   ↓ Integrasi dengan SCADA/MES via protokol OPC-UA
[Fase 5: Continuous Learning]
   ↓ Feedback loop dari teknisi (active learning)
   ↓ Periodic retraining setiap 30 hari
```

Standar yang dipatuhi meliputi ISO 13373 (vibration monitoring), ISO 17359 (condition monitoring), dan IEC 62443 untuk keamanan siber sistem industri.

### 3.2 SOP Implementasi PINN-MPC (Patel et al., 2024)

Tahapan teknis:

1. **Formulasi model fisika awal** — identifikasi persamaan *governing* (misalnya neraca massa-energi reaktor CSTR: $\frac{dC_A}{dt} = \frac{F}{V}(C_{A,in} - C_A) - k_0 e^{-E/RT}C_A$).
2. **Akuisisi data historis** — pasangan $(\mathbf{u}_k, \mathbf{y}_k)$ selama 6–12 bulan operasi normal.
3. **Arsitektur PINN** — *input layer* dengan variabel keadaan dan kontrol, *hidden layers* (4–6 lapisan, 64–256 neuron), aktivasi tanh.
4. **Training komposit** — minimasi $\mathcal{L}_{PINN}$ dengan bobot adaptif $\lambda_1, \lambda_2$ menggunakan *gradient descent* berbasis *automatic differentiation* (PyTorch/JAX).
5. **Integrasi dengan MPC solver** — model PINN menggantikan *process model* pada horizon prediksi; optimasi dengan *interior-point method*.
6. **Validasi** — *closed-loop simulation* dengan *disturbance scenarios*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus CNN untuk Inspeksi Pipa Industri (Pearson, 2024)

**Parameter Input:**
- Dataset: 10.000 citra pipa baja karbon (kelas normal: 8.000; kelas anomali: 2.000 — korosi, retakan, *deformation*).
- Resolusi citra: $224 \times 224 \times 3$ piksel.
- Arsitektur: ResNet-50, $\gamma = 2$, $\alpha_t = 0{,}25$ untuk kelas minoritas.
- Optimizer: Adam, learning rate $10^{-4}$, batch size 32, epoch 50.

**Perhitungan Focal Loss pada iterasi tertentu:**

Misalkan untuk satu sampel anomali, model menghasilkan $p_t = 0{,}3$ (kurang percaya), dengan $\alpha_t = 0{,}75$ (bobot lebih besar untuk anomali):

$$\mathcal{L}_{focal} = -0{,}75 \times (1 - 0{,}3)^2 \times \log(0{,}3)$$
$$= -0{,}75 \times 0{,}49 \times (-1{,}204)$$
$$= 0{,}442$$

Untuk sampel *easy negative* (kelas normal dengan $p_t = 0{,}95$, $\alpha_t = 0{,}25$):

$$\mathcal{L}_{focal} = -0{,}25 \times (1 - 0{,}95)^2 \times \log(0{,}95)$$
$$= -0{,}25 \times 0{,}0025 \times (-0{,}0513)$$
$$= 3{,}21 \times 10^{-5}$$

**Interpretasi:** Kontribusi *easy negative* ke gradien hampir nol ($\sim 3 \times 10^{-5}$), memungkinkan model untuk fokus pada *hard examples*. Setelah training, Pearson melaporkan kinerja tipikal *precision* $= 0{,}94$, *recall* $= 0{,}91$, $F_1 = 0{,}925$, dengan *false positive rate* $FPR = 0{,}018$.

**Implikasi Manajerial:** dengan asumsi 1.000 inspeksi/hari dan biaya *false negative* (kerusakan tidak terdeteksi) Rp 50 juta/insiden, biaya tahunan akibat FN: $1000 \times 365 \times 0{,}09 \times 50\text{ juta} = \text{Rp } 1{,}64 \text{ miliar}$. Sistem CNN menurunkan *false negative rate* dari ~15% (