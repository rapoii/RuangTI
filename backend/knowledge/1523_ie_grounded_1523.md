# 1523 — Image-Based Anomaly Detection dan Physics-Informed Predictive Control untuk Sistem Pemeliharaan Industri Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Sektor manufaktur dan proses global menghadapi tantangan struktural yang semakin kompleks terkait dengan keandalan aset produksi. Pembahasan yang diangkat oleh Pearson (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)) menegaskan bahwa *unscheduled downtime* pada peralatan industri kritikal—seperti turbin gas, pompa sentrifugal, motor listrik tegangan tinggi, dan sistem perpipaan—menyerap hingga 30–40% dari total biaya pemeliharaan siklus hidup aset. Kerangka prediktif berbasis *Convolutional Neural Network* (CNN) yang diusulkan penulis menjadi relevan mengingat semakin matangnya infrastruktur *edge computing* dan ketersediaan *vision sensor* berbiaya rendah (CMOS industri, kamera termal, hyperspectral imager) di lantai pabrik.

Dalam konteks Transformasi Industri 4.0, Pearson menekankan bahwa pendekatan *condition-based monitoring* konvensional yang hanya mengandalkan analisis sinyal getaran (*vibration analysis*), akustik emisi, atau termografi manual memiliki tiga kelemahan mendasar: (i) ketergantungan tinggi pada interpretabilitas operator, (ii) lead time pendek sebelum kerusakan menjadi katastrofik, dan (iii) tingkat *false alarm rate* yang dapat mencapai 15–25% sehingga memboroskan kapasitas teknisi. Pendekatan *image-based anomaly detection* menawarkan paradigma *data-driven* di mana citra visual permukaan, citra termal, atau citra akustik diproses oleh arsitektur konvolusional multi-layer untuk mengekstrak fitur diskriminatif secara hierarkis—dari *edge* dan *texture* tingkat rendah hingga representasi semantik tingkat tinggi.

Secara strategis, paper Patel, Bhartiya, dan Gudi (2024) yang diterbitkan di *IFAC-PapersOnLine* (DOI: [10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)) melengkapi kerangka deteksi anomali visual dengan lapisan *Model Predictive Control* (MPC) yang diberi约束 fisika melalui *Physics-Informed Neural Networks* (PINN). Sinergi ini menjawab kebutuhan industri proses—kimia, petrokimia, farmasi, dan *pulp & paper*—di mana keputusan pemeliharaan tidak dapat dilepaskan dari dinamika proses yang tunduk pada hukum konservasi massa, energi, dan momentum. Dengan mengintegrasikan anomali visual pada level unit operasi dengan kontrol prediktif berbasis fisika pada level proses, organisasi dapat membangun *closed-loop decision support system* yang tidak hanya reaktif terhadap kerusakan, tetapi juga mampu mereduksi *upstream stressors* yang menjadi akar degradasi.

Urgensi ekonomis dari adopsi kerangka ini juga diperkuat oleh tren *mean time between failures* (MTBF) yang semakin pendek akibat operasi pada *throughput* tinggi, serta meningkatnya *skill gap* pada teknisi pemeliharaan senior yang pensiun. Investasi pada arsitektur CNN-PINN-MPC bukan hanya *capital expenditure* untuk perangkat keras, melainkan juga *knowledge capitalization* yang menjaga kontinuitas operasional lintas generasi tenaga kerja.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur CNN untuk Deteksi Anomali Visual

Operasi fundamental dari CNN adalah *discrete convolution* dua dimensi yang memetakan citra masukan $X \in \mathbb{R}^{H \times W \times C}$ ke peta fitur $Y \in \mathbb{R}^{H' \times W' \times K}$ melalui sekumpulan *learnable filter* $W_k \in \mathbb{R}^{h \times w \times C}$:

$$Y_{i,j,k} = \sigma\left( \sum_{m=0}^{h-1} \sum_{n=0}^{w-1} \sum_{c=0}^{C-1} W_{m,n,c}^{(k)} \cdot X_{i+m,\,j+n,\,c} + b_k \right)$$

di mana $\sigma(\cdot)$ merupakan fungsi aktivasi non-linear—umumnya *Rectified Linear Unit* (ReLU) yang didefinisikan sebagai $\sigma(x) = \max(0, x)$—dan $b_k$ adalah *bias term* untuk filter ke-$k$. Untuk task klasifikasi biner "normal vs. anomali" atau multi-kelas "jenis cacat", lapisan akhir menggunakan aktivasi sigmoid atau softmax:

$$P(y = k | X) = \frac{\exp(z_k)}{\sum_{j=1}^{K} \exp(z_j)}, \quad z_k = W_k^{\top} h + b_k$$

dengan $h$ adalah vektor fitur hasil *global average pooling* dari lapisan konvolusional terdalam.

### 2.2. Fungsi Objektif dan Regularisasi

Pelatihan jaringan meminimalkan *binary cross-entropy* untuk kasus dua kelas:

$$\mathcal{L}_{BCE} = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log \hat{y}_i + (1 - y_i) \log (1 - \hat{y}_i) \right]$$

di mana $\hat{y}_i$ adalah probabilitas anomali hasil prediksi dan $y_i \in \{0, 1\}$ adalah label ground truth. Untuk kasus *imbalanced dataset*—yang umum dijumpai di industri karena kerusakan lebih jarang daripada kondisi normal—digunakan *focal loss*:

$$\mathcal{L}_{FL} = -\alpha_t (1 - \hat{y}_t)^{\gamma} \log(\hat{y}_t)$$

dengan $\gamma \geq 2$ berfungsi menekan kontribusi *easy negative samples* dan $\alpha_t$ mengatasi *class imbalance*.

### 2.3. Formulasi Autoencoder untuk Anomaly Detection

Untuk *unsupervised* atau *semi-supervised* learning di mana label anomali langka, arsitektur *convolutional autoencoder* (CAE) melatih fungsi enkoder $\phi(\cdot)$ dan dekoder $\psi(\cdot)$ sedemikian rupa sehingga rekonstruksi $\hat{X} = \psi(\phi(X))$逼近 citra masukan untuk sampel normal. Anomali dideteksi melalui *reconstruction error*:

$$\mathcal{L}_{AE}(X) = \|X - \hat{X}\|_2^2 = \sum_{i,j,c} \left( X_{i,j,c} - \hat{X}_{i,j,c} \right)^2$$

Sampel dengan $\mathcal{L}_{AE}(X) > \tau$ diklasifikasikan sebagai anomali, dengan threshold $\tau$ ditentukan melalui statistik *validation set*.

### 2.4. Physics-Informed Neural Networks (PINN) untuk MPC

Merujuk pada kerangka Patel, Bhartiya, dan Gudi (2024), PINN mengintegrasikan *ordinary* atau *partial differential equations* (ODE/PDE) yang governing proses industri ke dalam *loss function* jaringan syaraf:

$$\mathcal{L}_{PINN} = \lambda_{data} \mathcal{L}_{data} + \lambda_{physics} \mathcal{L}_{physics} + \lambda_{BC/IC} \mathcal{L}_{BC/IC}$$

di mana untuk sistem proses $dx/dt = f(x, u, t)$:

$$\mathcal{L}_{physics} = \frac{1}{N_r} \sum_{r=1}^{N_r} \left\| \frac{\partial \hat{x}_\theta}{\partial t}(x_r, t_r) - f\bigl(\hat{x}_\theta(x_r, t_r), u_r, t_r\bigr) \right\|^2$$

dengan $\hat{x}_\theta$ adalah aproksimasi neural network terhadap state proses, dan $\lambda$ adalah bobot regularisasi.

### 2.5. Formulasi Model Predictive Control (MPC)

MPC menyelesaikan pada setiap *sampling time* $k$ masalah optimisasi horizon $N_p$:

$$\min_{u_{k|k}, \ldots, u_{k+N_c-1|k}} \quad J = \sum_{j=0}^{N_p-1} \left[ x_{k+j|k}^\top Q x_{k+j|k} + u_{k+j|k}^\top R u_{k+j|k} \right] + x_{k+N_p|k}^\top P x_{k+N_p|k}$$

$$\text{subject to:} \quad x_{k+j+1|k} = Ax_{k+j|k} + Bu_{k+j|k}$$
$$x_{\min} \leq x_{k+j|k} \leq x_{\max}, \quad u_{\min} \leq u_{k+j|k} \leq u_{\max}$$
$$x_{k|k} = x(k)$$

di mana $Q \succeq 0$, $R \succ 0$ adalah *weighting matrices*, dan $N_c \leq N_p$ adalah *control horizon*. Dalam kerangka Patel et al. (2024), fungsi