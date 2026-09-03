# 1971 — Physics-Informed Machine Learning dalam Rekayasa Geoteknik: Integrasi Model Fisik dan Pembelajaran Mesin untuk Sistem Industri Infrastruktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Physics-informed machine learning in geotechnical engineering: a direction paper*
**Jurnal & Sitasi Utama:** Biao Yuan, Chung Siung Choo, Lit Yen Yeo (2025). *Geomechanics and Geoengineering*. DOI: [https://doi.org/10.1080/17486025.2025.2502029](https://doi.org/10.1080/17486025.2025.2502029)
**Sitasi Pendukung:** Mahdi Khodayar, Jacob Regan (2023). *Energies*. DOI: [https://doi.org/10.3390/en16124773](https://doi.org/10.3390/en16124773)

---

## 1. Pendahuluan dan Konteks Industri

Sektor infrastruktur dan pertambangan global menghadapi tekanan yang belum pernah terjadi sebelumnya untuk meningkatkan keselamatan, akurasi prediktif, dan efisiensi biaya operasional. Yuan, Choo, dan Yeo (2025) dalam *direction paper* yang diterbitkan di *Geomechanics and Geoengineering* (DOI: [10.1080/17486025.2025.2502029](https://doi.org/10.1080/17486025.2025.2502029)) menyoroti bahwa pendekatan *physics-informed machine learning* (PIML) muncul sebagai paradigma baru yang menjembatani kesenjangan antara model mekanika tanah klasik berbasis persamaan diferensial parsial (PDE) dan kemampuan generalisasi jaringan saraf tiruan modern. Dalam konteks Teknik Industri, fenomena ini bukan sekadar wacana akademis: industri konstruksi global yang bernilai lebih dari USD 13 triliun pada 2024 mensyaratkan keputusan rekayasa yang cepat, berbasis data, namun tetap patuh pada hukum fisika material.

Urgensi operasional PIML dapat dirangkum dalam tiga poros strategis. Pertama, ** poros keselamatan**. Kegagalan lereng tambang, liquefaksi fondasi, dan deformasi terowongan menimbulkan kerugian jiwa dan material yang signifikan; model prediktif yang dapat menginkorporasikan batasan fisika seperti keseimbangan momentum dan konservasi massa akan menurunkan tingkat *false negative* peringatan dini. Kedua, **poros ekonomi**. Survei lapangan menunjukkan bahwa 30–40% biaya siklus hidup proyek geoteknik berasal dari investigasi lapangan berulang; model hibrid PIML dapat memanfaatkan data historis yang terbatas untuk mengurangi jumlah *borehole* dan *cone penetration test* (CPT) baru. Ketiga, **poros keberlanjutan**. Seperti ditegaskan oleh Yuan et al. (2025), kemampuan PIML untuk mengintegrasikan hukum fisika mengurangi kebutuhan komputasi eksplisit penuh (*full-order FEM*), sehingga menurunkan jejak karbon komputasional proyek infrastruktur.

Paralel dengan hal tersebut, literatur komplementer dari Khodayar dan Regan (2023) di *Energies* (DOI: [10.3390/en16124773](https://doi.org/10.3390/en16124773)) menunjukkan bahwa jaringan saraf dalam (DNN) telah merevolusi analisis sistem tenaga listrik melalui representasi data hierarkis yang menangkap pola non-linearitas kompleks. Sinergi antara arsitektur DNN dari literatur sistem tenaga dan prinsip konservasi fisika dari literatur geoteknik membentuk tulang punggung PIML: kita tidak lagi memilih antara model *white-box* (fisik murni) atau *black-box* (ML murni), melainkan membangun *gray-box* yang dapat diaudit. Dokumen ini akan membedah formulasi matematis, prosedur operasional, dan aplikasi lintas sektoral dari pendekatan PIML dalam kerangka kerja Teknik Industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Physics-Informed Neural Network (PINN)

PINN yang menjadi tulang punggung tulisan Yuan et al. (2025) adalah jaringan saraf umpan-maju (FFNN) dengan parameter $\theta = \{W_\ell, b_\ell\}_{\ell=1}^{L}$ yang dilatih bukan hanya untuk meminimalkan *data loss*, tetapi juga *physics loss* yang didefinisikan melalui residu PDE. Bentuk umum fungsi aktivasi dalam lapisan tersembunyi $\ell$ dinyatakan sebagai:

$$h_\ell = \sigma_\ell(W_\ell h_{\ell-1} + b_\ell), \quad h_0 = \mathbf{x}, \quad y = h_L$$

di mana $\mathbf{x} \in \mathbb{R}^{d_x}$ adalah vektor masukan (koordinat spasial, waktu, parameter material), dan $\sigma_\ell$ adalah fungsi aktivasi non-linear seperti $\tanh$ atau $\text{swish}$. Fungsi kerugian total PINN adalah:

$$\mathcal{L}(\theta) = \underbrace{\frac{1}{N_d}\sum_{i=1}^{N_d}\left(u_\theta(\mathbf{x}_i^d) - u_i^{obs}\right)^2}_{\mathcal{L}_{data}} + \lambda \underbrace{\frac{1}{N_f}\sum_{j=1}^{N_f}\left[\mathcal{R}\left(u_\theta, \mathbf{x}_j^f\right)\right]^2}_{\mathcal{L}_{physics}}$$

dengan $\mathcal{R}(u_\theta, \mathbf{x})$ adalah operator residu PDE, $\lambda$ adalah hiperparameter bobot regularisasi fisika, dan himpunan titik $\{\mathbf{x}_j^f\}$ adalah *collocation points* di mana hukum fisika ditegakkan.

### 2.2 Persamaan Pengaturan Geoteknik

Untuk aplikasi spesifik pada mekanika tanah dan stabilitas lereng, Yuan et al. (2025) menekankan tiga keluarga PDE utama:

**(a) Hukum Darcy untuk rembesan air tanah:**

$$q = -K \nabla h, \quad \text{dengan} \quad \nabla \cdot q = 0 \implies \nabla \cdot (K \nabla h) = 0$$

di mana $K$ adalah konduktivitas hidrolik (m/s) dan $h$ adalah tinggi tekan (m).

**(b) Persamaan konsolidasi Biot-Terzaghi untuk pemampatan tanah jenuh:**

$$\frac{\partial \varepsilon_v}{\partial t} = \nabla \cdot (k \nabla u_w)$$

dengan $\varepsilon_v$ regangan volumetrik, $k$ koefisien permeabilitas, dan $u_w$ tekanan air pori berlebih. Persamaan ini merupakan PDE parabolik non-linear yang sangat sulit diselesaikan secara analitis untuk geometri lapangan.

**(c) Keseimbangan momen untuk analisis batas:**

$$\nabla \cdot \sigma' + \rho \mathbf{g} = 0$$

di mana $\sigma'$ adalah tensor tegangan efektif, $\rho$ densitas tanah, dan $\mathbf{g}$ vektor gravitasi. Untuk kondisi batas plastis, kriteria Mohr-Coulomb mendominasi:

$$\tau = c' + \sigma' \tan \phi'$$

dengan $c'$ kohesi efektif (kPa) dan $\phi'$ sudut gesek internal efektif (derajat).

### 2.3 Formulasi Faktor Keamanan Lereng

Dalam analisis stabilitas lereng limit equilibrium, *Factor of Safety* (FoS) didefinisikan sebagai rasio gaya penahan terhadap gaya penggerak. Metode irisan Bishop yang disederhanakan menghasilkan:

$$FoS = \frac{\sum_{i=1}^{n} \frac{c' b_i + (W_i - u_i b_i) \tan\phi'}{m_\alpha(i)}}{\sum_{i=1}^{n} W_i \sin\alpha_i}$$

dengan $m_\alpha(i) = \cos\alpha_i + \frac{\tan\phi' \sin\alpha_i}{FoS}$ yang memerlukan solusi iteratif, $b_i$ lebar irisan, $W_i$ berat irisan, dan $\alpha_i$ sudut inklinasi dasar irisan.

### 2.4 Representasi DNN untuk Data Skala Besar

Merujuk kerangka Khodayar dan Regan (2023), representasi hierarkis DNN untuk data sistem tenaga (yang dalam konteks geoteknik dapat diaplikasikan pada data *sensor* IoT lapangan) mengikuti dekomposisi fitur bertingkat:

$$f_\ell(\mathbf{x}) = \sigma(W_\ell \cdot \sigma(W_{\ell-1} \cdot (\ldots \sigma(W_1 \mathbf{x} + b_1)\ldots) + b_{\ell-1}) + b_\ell)$$

Fungsi kerugian *mean squared error* (MSE) untuk pelatihan terawasi:

$$\mathcal{L}_{MSE} = \frac{1}{N}\sum_{i=1}^{N}(y_i - \hat{y}_i)^2 + \beta \|\theta\|_2^2$$

di mana $\beta$ adalah koefisien regularisasi L2 untuk mencegah *overfitting*, hal yang sangat relevan ketika data geoteknik lapangan bersifat terbatas dan mahal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PIML dalam proyek geoteknik industri mengikuti alur SOP tujuh tahapan yang diadaptasi dari kerangka Yuan et al. (2025) dan diselaraskan dengan standar ISO 31000 untuk manajemen risiko serta ASTM D2487 untuk klasifikasi tanah:

**Tahap 1 — Penyiapan Dataset dan Formulasi Batasan Fisika.**
Data investigasi lapangan (CPT, SPT, laboratorium triaksial) dikompilasi menjadi himpunan $\mathcal{D} = \{(\mathbf{x}_i^d, u_i^{obs})\}_{i=1}^{N_d}$. Bersamaan, tim rekayasa menetapkan sistem PDE governing, kondisi batas, dan kondisi awal yang relevan dengan proyek.

**Tahap 2 — Desain Arsitektur Jaringan.**
Pemilihan jumlah lapisan $L$ dan neuron per lapisan dilakukan melalui *Bayesian optimization* dengan akuisisi *expected improvement* (EI). Untuk PINN 2D, konfigurasi tipikal adalah $L=6$ lapisan tersembunyi dengan 40 neuron dan aktivasi $\tanh$, sesuai rekomendasi Yuan et al. (2025).

**Tahap 3 — Pembangkitan *Collocation Points*.**
Titik-titik $\{\mathbf{x}_j^f\}_{j=1}^{N_f}$ dibangkitkan secara acak atau dengan *Latin Hypercube Sampling* (LHS) di seluruh domain fisika, dengan konsentrasi lebih tinggi di sekitar zona kritis (misalnya zona潜在滑动 lereng).

**Tahap 4 — Pelatihan Hybrid Loss.**
Optimasi dilakukan dengan Adam atau L-BFGS dengan *learning rate* adaptif. Rasio awal $\lambda = 1$ lalu disesuaikan melalui *learning rate annealing* agar keseimbangan antara *data fit* dan *physics fit* tercapai.

**Tahap 5 — Validasi Silang dengan Data Independen.**
Validasi menggunakan data yang tidak dilihat model, dengan metrik $R^2$, RMSE, dan yang lebih penting: kepatuhan terhadap hukum kekekalan (misalnya konservasi massa air) yang harus terpenihi hingga toleransi $10^{-3}$.

**Tahap 6 — Analisis Sensitivitas dan Uncertainty Quantification (UQ).**
Menggunakan metode Monte Carlo Dropout (Gal & Ghahramani, 2016) atau Deep Ensembles untuk mengkuantifikasi ketidakpastian prediksi, suatu kebutuhan wajib untuk keputusan rekayasa berisiko tinggi.

**Tahap 7 — Penerapan dan Pemantauan Berkelanjutan.**
Model PIML di-*deploy* ke *edge device* atau *cloud*, dengan *feedback loop* ke sistem SCADA lapangan. Jika sensor baru memberikan data anomali, *online fine-tuning* dilakukan.

Diagram alur logika (pseudo-flowchart):

```
┌────────────────────────────────────────┐
│  Data Investigasi Lapangan + PDE Fisika │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│  Pra-pemrosesan & Normalisasi Fitur    │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│  Inisialisasi Arsitektur FFNN (L=6)    │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│  Loop: hitung L_data + λ·L_physics     │
│  Optimasi Adam/L-BFGS → update θ       │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│  Validasi: R², RMSE, Fisik Residu ≤ ε  │
└──────────────┬─────────────────────────┘
               ▼
┌────────────────────────────────────────┐
│  UQ (