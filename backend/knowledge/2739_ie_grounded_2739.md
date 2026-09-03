# 2739 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Convolutional Neural Networks untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal / SSRN Working Paper*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital lini produksi yang digerakkan oleh paradigma *Industry 4.0* dan *Industrial AI* telah menempatkan pemeliharaan prediktif (*predictive maintenance* — PdM) sebagai salah satu pilar strategis untuk meningkatkan *Overall Equipment Effectiveness* (OEE) dan menekan biaya siklus hidup aset. Studi Pearson (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589) secara eksplisit membahas bagaimana arsitektur *Convolutional Neural Networks* (CNN) dapat dieksploitasi untuk melakukan deteksi anomali visual pada peralatan industri — seperti pompa sentrifugal, motor listrik, *gearbox*, dan bejana tekan — dengan memanfaatkan citra termal, citra akustik (spektrogram), maupun citra RGB resolusi tinggi yang dihasilkan oleh kamera industri *machine vision*. Urgensi ekonomi dari pendekatan ini sangat nyata: laporan-laporan internal industri manufaktur global menunjukkan bahwa biaya *unplanned downtime* pada lini produksi kelas dunia berkisar antara $10.000–$25.000 per menit, dan bahwa 70–75% kegagalan aset kritis bermanifestasi secara visual sebelum berubah menjadi kerusakan fungsional (Pearson, 2024).

Pearson (2024) menekankan bahwa inspeksi visual manual memiliki tiga kelemahan struktural: (i) subjektivitas evaluator, (ii) kelelahan operator pada shift panjang, dan (iii) laju inspeksi yang tidak mampu mengikuti skala *fleet* aset di era IoT. CNN menjawab tantangan ini dengan cara melakukan ekstraksi fitur hierarkis secara otomatis — dari *low-level features* (tepi, tekstur) hingga *high-level features* (pola retakan, korosi, deformasi) — sehingga menghasilkan sistem klasifikasi biner *anomali vs. normal* dengan tingkat konsistensi yang jauh melampaui inspektur manusia. Pearson juga merangkum bahwa integrasi CNN dengan arsitektur *Physics-informed Neural Networks* (PINN) — seperti yang diusulkan oleh Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) untuk sistem kendali prediktif — membuka peluang pengembangan *digital twin* yang tidak hanya memantau tetapi juga mengoreksi dinamika proses melalui *Model Predictive Control* (MPC). Kedua literatur ini, ketika digabungkan, merepresentasikan evolusi teknologi dari *monitoring* pasif menuju *closed-loop autonomous maintenance*.

Aspek penting lainnya yang diangkat oleh Pearson (2024) adalah masalah *class imbalance* — di mana citra kondisi normal jauh lebih banyak daripada citra anomali — serta kebutuhan akan *edge inference* untuk menekan latensi komunikasi di lingkungan industri. Kedua hal ini menjadi justifikasi kuat bagi pemilihan arsitektur CNN ringan (seperti MobileNetV3 atau EfficientNet-B0) yang dapat dijalankan pada *industrial edge gateway* dengan *real-time constraint* < 50 ms per inferensi. Dengan demikian, pemahaman terhadap formulasi matematis CNN dan integrasinya dengan kerangka kendali prediktif menjadi kompetensi wajib bagi insinyur industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Convolutional Neural Network (CNN)

Operasi konvolusi 2-D pada lapisan konvolusional dapat diformulasikan sebagai:

$$
y_{i,j,k}^{(l)} = \sigma\!\left( \sum_{c=0}^{C-1} \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} w_{m,n,c,k}^{(l)} \cdot x_{i+m,\, j+n,\, c}^{(l-1)} + b_k^{(l)} \right)
$$

di mana $y_{i,j,k}^{(l)}$ adalah *feature map* keluaran pada lapisan $l$, indeks $k$ merepresentasikan *filter* ke-$k$, $w_{m,n,c,k}^{(l)}$ adalah bobot konvolusi, $b_k^{(l)}$ adalah bias, dan $\sigma(\cdot)$ adalah fungsi aktivasi non-linear — biasanya ReLU, $\sigma(x)=\max(0,x)$. Setelah operasi konvolusi, *max-pooling* dilakukan untuk mereduksi dimensi:

$$
p_{i,j,k}^{(l)} = \max_{(m,n)\in \mathcal{R}} \, x_{i \cdot s + m,\; j \cdot s + n,\; k}^{(l)}
$$

di mana $\mathcal{R}$ adalah jendela pooling dan $s$ adalah *stride*.

Untuk lapisan klasifikasi akhir, digunakan *fully-connected layer* dengan fungsi aktivasi *softmax* untuk menghasilkan distribusi probabilitas kelas:

$$
\hat{y}_c = \frac{\exp(z_c)}{\sum_{c'=1}^{C} \exp(z_{c'})}, \quad c \in \{1, 2, \ldots, C\}
$$

Fungsi kerugian yang digunakan adalah *binary cross-entropy* (untuk kasus deteksi anomali dua kelas):

$$
\mathcal{L}_{\text{BCE}} = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$

di mana $y_i \in \{0,1\}$ adalah label aktual dan $\hat{y}_i \in [0,1]$ adalah probabilitas prediksi anomali. Pearson (2024) menambahkan komponen *focal loss* untuk menangani *class imbalance*:

$$
\mathcal{L}_{\text{Focal}} = -\alpha_t (1 - \hat{y}_t)^{\gamma} \log(\hat{y}_t)
$$

dengan $\alpha_t$ sebagai *class weight* dan $\gamma \geq 2$ sebagai *focusing parameter* yang menekan kontribusi contoh mudah dan memaksa jaringan memfokuskan pembelajaran pada contoh sulit.

### 2.2 Metrik Kinerja Klasifikasi Anomali

Empat metrik utama yang digunakan oleh Pearson (2024) untuk mengevaluasi kinerja deteksi anomali:

$$
\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}
$$

$$
F_1 = 2 \cdot \frac{\text{Precision} \cdot \text{Recall}}{\text{Precision} + \text{Recall}}, \quad \text{AUC} = \int_{0}^{1} \text{TPR}(f) \, df
$$

di mana $TP$, $FP$, $FN$, dan $TN$ berturut-turut adalah *True Positive*, *False Positive*, *False Negative*, dan *True Negative*; sedangkan AUC adalah luas di bawah kurva ROC yang merepresentasikan kemampuan diskriminatif model secara *threshold-independent*.

### 2.3 Integrasi Physics-Informed Neural Networks (PINN) untuk Model Predictive Control

Patel, Bhartiya, dan Gudi (2024) dalam DOI [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431) mengusulkan kerangka MPC berbasis PINN di mana jaringan saraf $u_\theta(x,t)$ tidak hanya meminimalkan kesalahan terhadap data observasi tetapi juga terhadap *residual* persamaan diferensial parsial (PDE) yang mengatur dinamika proses. Untuk kasus konduksi panas satu dimensi:

$$
\mathcal{R}_\theta(x,t) = \frac{\partial u_\theta}{\partial t} - \alpha \frac{\partial^2 u_\theta}{\partial x^2} = 0
$$

Total *loss function* PINN menjadi:

$$
\mathcal{L}_{\text{total}} = \underbrace{\frac{1}{N_d} \sum_{i=1}^{N_d} \| u_\theta(x_i^d, t_i^d) - u_i^{\text{data}} \|^2}_{\mathcal{L}_{\text{data}}} + \lambda \underbrace{\frac{1}{N_r} \sum_{j=1}^{N_r} \| \mathcal{R}_\theta(x_j^r, t_j^r) \|^2}_{\mathcal{L}_{\text{physics}}}
$$

di mana $\lambda$ adalah *weighting hyperparameter* antara kesesuaian data dan kepatuhan fisika. Gradien terhadap operator diferensial dihitung menggunakan *automatic differentiation* (PyTorch/TensorFlow). Kerangka MPC kemudian meminimalkan biaya horizon prediksi $N_p$:

$$
J = \sum_{k=0}^{N_p - 1} \left[ (x_k - x_{\text{ref}})^\top Q (x_k - x_{\text{ref}}) + u_k^\top R u_k \right]
$$

dengan kendala dinamika $x_{k+1} = f_\theta(x_k, u_k)$, di mana $f_\theta$ adalah model PINN yang telah dilatih. Hasil dari Patel et al. (2024) menunjukkan bahwa pendekatan ini memperbaiki *tracking error* hingga 38% dibanding *black-box neural network* murni pada studi kasus *Continuously Stirred Tank Reactor* (CSTR).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi deteksi anomali berbasis CNN untuk pemeliharaan prediktif mengikuti SOP delapan tahap yang didasarkan pada rekomendasi Pearson (2024) dan diintegrasikan dengan kerangka kerja Patel et al. (2024