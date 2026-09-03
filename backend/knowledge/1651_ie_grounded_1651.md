# 1651 — Deteksi Anomali Berbasis Citra dan Kontrol Prediktif Menggunakan Jaringan Saraf Dalam untuk Sistem Pemeliharaan dan Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental paradigma pemeliharaan (maintenance) dan pengendalian proses (process control) di fasilitas manufaktur dan proses. Pergeseran dari pendekatan *reactive* dan *preventive* menuju *predictive maintenance* berbasis kecerdasan buatan (AI) menjadi kebutuhan strategis bagi perusahaan yang beroperasi dengan aset modal intensif. Menurut Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)), kegagalan mendadak pada peralatan kritis seperti pompa sentrifugal, kompresor, motor listrik, dan katup kontrol dapat menyebabkan kerugian produksi rata-rata sebesar USD 10.000–50.000 per jam pada industri proses kimia dan petrokimia, dengan total biaya downtime tak terencana yang mencapai 1–3% dari turnover tahunan perusahaan. Lebih lanjut, Pearson menekankan bahwa metode inspeksi visual manual memiliki tingkat kesalahan subyektivitas hingga 25–30% dan tidak scalable untuk ribuan aset yang tersebar secara geografis.

Konteks ini diperparah oleh kompleksitas sistem proses modern yang melibatkan ratusan variabel keadaan (*state variables*) yang saling bergantung non-linear. Patel, Bhartiya, dan Gudi (2024) dalam makalahnya yang diterbitkan di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) mengidentifikasi bahwa model *first-principles* untuk sistem proses seperti reaktor CSTR (*Continuous Stirred Tank Reactor*) dan kolom distilasi sering kali memerlukan asumsi linearisasi yang menurunkan akurasi prediksi hingga 15–20% ketika beroperasi di luar titik desain nominal. Solusi berbasis data murni (*pure data-driven*) seperti Recurrent Neural Networks (RNN) memerlukan dataset historis dalam jumlah masif (>100.000 sampel) yang jarang tersedia di industri.

Urgensi integrasi kedua pendekatan—yaitu CNN untuk deteksi anomali visual dan Physics-Informed Neural Networks (PINN) untuk Model Predictive Control (MPC)—menjadi semakin nyata ketika biaya sensorisasi dan komputasi tepi (*edge computing*) menurun drastis (sekitar 40% year-over-year sejak 2020), sementara standar internasional seperti ISO 13373 (Condition monitoring and diagnostics of machines) dan IEC 61512 (Batch control) menuntut kepatuhan terhadap praktik pemeliharaan dan kontrol berbasis bukti (*evidence-based*). Pearson (2024) mencatat bahwa adopsi CNN untuk inspeksi visual otomatis telah menunjukkan peningkatan *recall* deteksi cacat hingga 92–96% dibanding metode threshold-based konvensional (~70%), sementara Patel *et al.* (2024) melaporkan bahwa PINN-MPC mampu mengurangi variansi trayek kontrol hingga 35% dibanding MPC linear standar dengan paritas data training yang jauh lebih rendah.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN) untuk Deteksi Anomali Visual

CNN yang digunakan untuk deteksi anomali pada citra peralatan industri mengikuti arsitektur hierarkis feature-extractor. Operasi konvolusi dua dimensi didefinisikan sebagai:

$$(f * g)[i, j] = \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} f[m, n] \cdot g[i-m, j-n]$$

di mana $f[m,n]$ adalah nilai piksel citra input dan $g[i-m,j-n]$ adalah kernel konvolusi dengan ukuran $M \times N$. Pearson (2024) menggunakan arsitektur *modified ResNet-50* dengan *transfer learning* dari bobot ImageNet, menggantikan lapisan klasifikasi 1000-kelas dengan lapisan *sigmoid* biner (normal vs anomali).

Fungsi aktivasi ReLU yang digunakan secara predominant adalah:

$$f(x) = \max(0, x) = \begin{cases} x, & \text{jika } x \geq 0 \\ 0, & \text{jika } x < 0 \end{cases}$$

Operasi *max-pooling* untuk reduksi dimensionalitas:

$$y_{i,j,d} = \max_{(m,n) \in \mathcal{R}_{i,j}} x_{m,n,d}$$

di mana $d$ adalah indeks *feature map* dan $\mathcal{R}_{i,j}$ adalah wilayah pooling $2 \times 2$.

Untuk klasifikasi biner anomali, fungsi *sigmoid* digunakan:

$$\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}$$

Fungsi kerugian *binary cross-entropy* yang diminimalkan selama training:

$$\mathcal{L}_{BCE} = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]$$

### 2.2 Physics-Informed Neural Networks (PINN) untuk Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) mengusulkan kerangka PINN-MPC di mana jaringan saraf tidak hanya dilatih terhadap data, tetapi juga terhadap *physics residual* dari persamaan diferensial yang mengatur sistem proses. Untuk reaktor CSTR dengan dinamika konsentrasi $C_A(t)$ dan suhu $T(t)$, persamaan governing adalah:

$$\frac{dC_A}{dt} = \frac{F}{V}(C_{A,in} - C_A) - k_0 e^{-E/RT} C_A$$

$$\frac{dT}{dt} = \frac{F}{V}(T_{in} - T) + \frac{-\Delta H}{\rho C_p} k_0 e^{-E/RT} C_A + \frac{UA}{V\rho C_p}(T_c - T)$$

PINN mendefinisikan fungsi kerugian gabungan:

$$\mathcal{L}_{PINN} = \lambda_{data} \mathcal{L}_{data} + \lambda_{phy} \mathcal{L}_{physics}$$

di mana:

$$\mathcal{L}_{physics} = \frac{1}{N_{coll}} \sum_{j=1}^{N_{coll}} \left\| r(x_j, t_j) \right\|^2$$

dengan *residual* di titik kolokasi $(x_j, t_j)$:

$$r(x,t) = \frac{\partial \hat{u}}{\partial t} + \mathcal{N}[\hat{u}](x,t) - f(x,t)$$

di sini $\mathcal{N}[\cdot]$ adalah operator diferensial non-linear dan $\hat{u}(x,t)$ adalah output neural network. Gradien dihitung via *automatic differentiation* (PyTorch/TensorFlow).

### 2.3 Formulasi Model Predictive Control (MPC)

Optimasi MPC pada horizon prediksi $N_p$ dengan horizon kontrol $N_c$ :

$$\min_{u_0, u_1, \ldots, u_{N_c-1}} J = \sum_{k=0}^{N_p-1} \left[ (x_k - x_{ref})^T Q (x_k - x_{ref}) + u_k^T R u_k \right] + (x_{N_p} - x_{ref})^T P (x_{N_p} - x_{ref})$$

subject to: $x_{k+1} = f_{PINN}(x_k, u_k)$, dengan kendala $u_{min} \leq u_k \leq u_{max}$. Matriks $Q$, $R$, dan $P$ masing-masing adalah bobot状态犯错, kontrol, dan terminal state.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi CNN untuk Predictive Maintenance (Pearson, 2024)

**Tahap 1: Akuisisi Data Citra**
- Instalasi kamera IP industri (resolusi minimum 1920×1080, IP67/IP69K) pada titik inspeksi kritis
- Sampling rate: 1–5 fps untuk aset stationary; 30–60 fps untuk rotating equipment (sinkronisasi dengan tachometer)
- Dataset minimum: 5.000 citra per kelas anomali (sesuai rekomendasi ISO/IEC 23053)

**Tahap 2: Preprocessing**
- Resolusi standardisasi: $224 \times 224 \times 3$ piksel
- Augmentasi: rotasi $\pm 15°$, translasi $\pm 10\%$ skala brightness $\pm 20\%$
- Normalisasi: $x_{norm} = (x - \mu_{ImageNet}) / \sigma_{ImageNet}$

**Tahap 3: Training & Validasi**
- *Pre-trained weights*: ResNet-50 (ImageNet)
- *Fine-tuning*: 50 epoch, batch size 32, Adam optimizer ($\beta_1=0.9$, $\beta_2=0.999$, $\epsilon=10^{-8}$)
- Learning rate scheduling: *cosine annealing* dari $10^{-4}$ ke $10^{-6}$
- Validasi silang: $k$-fold ($k=5$)
- *Early stopping*: patience 10 epoch berdasarkan validation loss

**Tahap 4: Deployment Edge**
- Inference pada NVIDIA Jetson AGX Orin atau Intel OpenVINO
- Threshold klasifikasi: $\tau = 0.85$ (optimasi terhadap kurva ROC)
- Alert generation via Modbus TCP / OPC-UA ke SCADA

### 3.2 SOP Implementasi PINN-MPC untuk Process Control (Patel et al., 2024)

**Tahap 1: Identifikasi Persamaan Governing**
- Turunkan ODE/PDE dari *first principles* (neraca massa, energi, momentum)
- Validasi dengan data historis DCS/PLC

**Tahap 2: Desain Arsitektur PINN**
- Input: $(x, t)$, Output: state variables
- Hidden layers: 4–6 layers dengan 50–100 neuron per layer
- Activation: $\tanh(x)$ (smooth, mendukung automatic differentiation)
- Initialization: Glorot/Xavier

**Tahap 3: Training dengan Physics Loss**
- $\lambda_{data} : \lambda_{phy} = 1 : 10$ (rasio optimal Patel et al.)
- Collocation points: *Latin Hypercube Sampling* dengan $N_{coll} = 10.000$

**Tahap 4: Integrasi dengan MPC Solver**
- IPOPT atau SQP untuk optimasi NLP
- Sampling time: 1–60 detik (tergantung dinamika proses)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Deteksi Kerusakan Bantalan Pompa Sentrifugal (CNN)

**Parameter Input:**
- Dataset: MVTec AD (bantalan), 1.200 citra training (900 normal, 300 anomali)
- Arsitektur: ResNet-50, learning rate $10^{-4}$
- Test set: 300 citra (240 normal, 60 anomali)

**Perhitungan Confusion Matrix (as