# 2083 — Pemodelan Multiskala dan Kecerdasan Buatan untuk Komposit Linear serta Non-Linear: Tinjauan Rekayasa Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multiscale Computational and Artificial Intelligence Models of Linear and Nonlinear Composites: A Review
**Jurnal & Sitasi Utama:** Mohit Agarwal, Parameshwaran Pasupathy, Xuehai Wu (2024). *Small Science*. DOI: [https://doi.org/10.1002/smsc.202300185](https://doi.org/10.1002/smsc.202300185)
**Sitasi Pendukung:** F. Fernando Jurado-Lasso, Letizia Marchegiani, J. F. Jurado (2022). *IEEE Access*. DOI: [https://doi.org/10.1109/access.2022.3153521](https://doi.org/10.1109/access.2022.3153521)

---

## 1. Pendahuluan dan Konteks Industri

Material komposit merupakan tulang punggung inovasi manufaktur modern pada industri kedirganturan, otomotif, energi, dan biomedis. Permintaan global untuk *Carbon Fiber Reinforced Polymer* (CFRP) mencapai USD 51,4 miliar pada 2023 dengan proyeksi CAGR sebesar 11,2%, didorong oleh mandat dekarbonisasi dan kebutuhan *lightweighting* struktural. Namun, perilaku mekanis komposit tidak dapat direpresentasikan secara akurat oleh satu skala analisis tunggal karena muncul dari interaksi hierarkis antara fase matriks, antarmuka, serat, hingga struktur kristal molekuler.

Agarwal, Pasupathy, dan Wu (2024) dalam *Small Science* [DOI: 10.1002/smsc.202300185] melakukan tinjauan komprehensif terhadap empat tingkat pemodelan — **molecular dynamics (MD)**, **mikromekanika**, **mesoskopik**, dan **makroskopik** — untuk material keras (polimer, logam, *yarn*, *fiber*, *Fiber-Reinforced Polymer*/FRP, *Polymer Matrix Composite*/PMC) maupun material lunak (jaringan biologis seperti *Brain White Matter*/BWM). Mereka menekankan bahwa tantangan utama industri bukan pada ketersediaan material melainkan pada kesenjangan antara *fidelity* model fisika dan biaya komputasi yang dapat ditoleransi oleh lini produksi. Sebagai contoh, simulasi MD dengan *ensemble* NVT dan potensial *ReaxFF* untuk satu RVE (*Representative Volume Element*) dapat memerlukan 10⁶ langkah waktu pada superkomputer, sehingga tidak layak untuk desain iteratif.

Pada sisi operasional, jaringan sensor nirkabel (WSN) yang dipadukan dengan SDN (*Software-Defined Networking*) dan algoritma *machine learning* — yang diulas oleh Jurado-Lasso, Marchegiani, dan Jurado (2022) pada *IEEE Access* [DOI: 10.1109/access.2022.3153521] — menyediakan lapisan akuisisi data *real-time* yang esensial untuk memvalidasi model multiskala di lantai pabrik. Sinergi keduanya memungkinkan *digital twin* material komposit yang terus diperbarui berdasarkan pembacaan sensor regangan, akustik, dan termal, sehingga mengurangi waktu sertifikasi dari rata-rata 18 bulan menjadi 6 bulan untuk komponen struktural pesawat baru. Urgensi industrial-ekonomis ini menjadi latar belakang utama modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Homogenisasi Mikromekanika

Untuk menentukan sifat efektif komposit, pendekatan *rule of mixtures* klasik Voigt (iso-strain) dan Reuss (iso-stress) masing-masing memberikan batas atas dan batas bawah modulus efektif:

$$E_V = \sum_{i} f_i \, E_i \quad \text{(Voigt)}$$

$$\frac{1}{E_R} = \sum_{i} \frac{f_i}{E_i} \quad \text{(Reuss)}$$

dengan $f_i$ dan $E_i$ berturut-turut adalah fraksi volume dan modulus Young fase ke-$i$. Batas-batas ini kemudian dirata-ratakan oleh Hill menjadi *bulk modulus* efektif:

$$E_H = \frac{E_V + E_R}{2}$$

Akan tetapi, untuk CFRP dengan geometri *fiber* non-random, model Halpin–Tsai memberikan pendekatan yang jauh lebih akurat dengan parameter penguat $\xi = 2(l/d)$ untuk modulus longitudinal dan $\xi = 2$ untuk modulus transversal:

$$\frac{E_L}{E_m} = \frac{1 + \xi \, \eta_L \, V_f}{1 - \eta_L \, V_f}, \quad \eta_L = \frac{E_f/E_m - 1}{E_f/E_m + \xi}$$

### 2.2 Model Konstitutif Non-Linear

Untuk material hiperelastik seperti BWM dan elastomer, Agarwal et al. (2024) menggunakan fungsi energi regangan bentuk Yeom atau Ogden:

$$W = \sum_{p=1}^{N} \frac{\mu_p}{\alpha_p}\left(\lambda_1^{\alpha_p} + \lambda_2^{\alpha_p} + \lambda_3^{\alpha_p} - 3\right)$$

dengan $\lambda_i$ adalah *principal stretch* dan $\mu_p$, $\alpha_p$ parameter material. Tekanan Piola–Kirchhoff kedua kemudian diturunkan sebagai $S_i = \partial W / \partial \lambda_i$.

Untuk respon viskoelastik dengan memori fraksional, model *fractional viscoelastic* yang diajukan oleh para penulis mengikuti:

$$\sigma(t) = E_0 \, \varepsilon(t) + \frac{E_{\alpha}}{\Gamma(1-\alpha)} \int_{0}^{t} \frac{\dot{\varepsilon}(\tau)}{(t-\tau)^{\alpha}} \, d\tau$$

dengan $\alpha \in (0,1)$ adalah orde fraksional, $\Gamma$ fungsi gamma, dan $E_\alpha$ modulus viskoelastik. Model ini menangkap perilaku *creep* dan relaksasi yang intermediate antara elemen Maxwell dan Kelvin–Voigt klasik.

### 2.3 Formulasi Elemen Hingga

Pada tingkat makro, persamaan keseimbangan diselesaikan melalui analisis FE diskrit:

$$\mathbf{K} \mathbf{u} = \mathbf{F}, \quad \mathbf{K} = \int_{\Omega} \mathbf{B}^{T} \mathbf{C} \mathbf{B} \, d\Omega$$

dengan $\mathbf{B}$ matriks gradien regangan-diskret, $\mathbf{C}$ tensor konstitutif (hasil homogenisasi), dan $\mathbf{F}$ vektor gaya nodal. Untuk kasus non-linear geometris, persamaan ini diselesaikan secara inkremental Newton–Raphson:

$$\mathbf{K}_T^{(k)} \, \Delta \mathbf{u}^{(k)} = \mathbf{R}^{(k)} - \mathbf{F}_{int}^{(k)}$$

### 2.4 Model Surrogate *Machine Learning*

Untuk menekan biaya komputasi, Agarwal et al. (2024) mengulas dua arsitektur dominan. Pertama, *Gaussian Process Regression* (GPR) yang menghasilkan prediksi dengan estimasi ketidakpastian:

$$\hat{y}(\mathbf{x}) = \mathbf{k}^{T}(\mathbf{x}) \mathbf{K}^{-1} \mathbf{y}, \quad \sigma^2(\mathbf{x}) = k(\mathbf{x},\mathbf{x}) - \mathbf{k}^{T} \mathbf{K}^{-1} \mathbf{k}$$

Kedua, jaringan saraf konvolusional (*Convolutional Neural Network*/CNN) yang menerima *microstructure image* $\mathbf{X} \in \mathbb{R}^{H \times W \times 1}$ dan memetakan langsung ke tensor efektif $\mathbb{C}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pemodelan multiskala untuk lini produksi mengikuti SOP berlapis sebagai berikut (sesuai dengan alur yang disintesiskan dari kerangka kerja Agarwal et al. dan integrasi data Jurado-Lasso et al.):

**Tahap 1 – Akuisisi Data Sensor dan Konfigurasi Jaringan.** node sensor MEMS (akselerometer, *strain gauge*, termokopel) dipasang pada struktur komposit. Kontroler SDN (*OpenFlow*) melakukan *trafﬁc engineering* untuk menjamin latensi < 50 ms. Model *Random Forest* di edge gateway mengompresi *raw stream* 1,2 Mbps menjadi fitur 12-dimensi (misalnya RMSE, kurtosis, spectral centroid).

**Tahap 2 – Homogenisasi Mikromekanika.** Mikrograf SEM/CT-scan diproses menjadi RVE digital, lalu disimulasikan dengan *Fast Fourier Transform*-based homogenization atau FE homogenization untuk menurunkan $\mathbb{C}_{\text{eff}}$.

**Tahap 3 – Pelatihan Surrogate ML.** Dataset latih $\{(\mathbf{x}_i, \mathbb{C}_i)\}_{i=1}^{N}$ dihasilkan dari tahap 2, dengan $N \geq 10^4$. Validasi 10-*fold cross-validation* memastikan *coefficient of determination* $R^2 \geq 0{,}95$.

**Tahap 4 – Simulasi FE Skala Penuh dan Validasi.** Model FE komponen penuh dijalankan dengan $\mathbb{C}_{\text{eff}}$ dari surrogate; hasilnya dibandingkan dengan pembacaan sensor dengan metrik *Normalized Root Mean Square Error* (NRMSE).

**Tahap 5 – Iterasi dan Sertifikasi.** Loop umpan-balik dilakukan hingga NRMSE $\leq 8\%$, memenuhi standar ASTM D3039 (tarik), ASTM D3518 (shear), dan ISO 14130.

**Arsitektur teknologi:**

```
[Sensor WSN] → [SDN Controller] → [Edge ML] → [Cloud Database]
                                                    ↓
[FE Simulation] ← [Surrogate Model] ← [RVE Homogenization]
        ↓
[Digital Twin Dashboard] → [Operator Decision]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Perancangan Panel CFRP untuk *Stringer* Pesawat Narrow-Body.**

**Input parameter:**
- *Carbon fiber* (T700S): $E_f = 230$ GPa, $\rho_f = 1{,}76$ g/cm³, $d_f = 7\,\mu\text{m}$, $l/d = 100$
- *Epoxy matrix* (EPON 862): $E_m =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
