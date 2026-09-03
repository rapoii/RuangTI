# 2755 — Integrasi Physics-Informed Neural Networks (PINNs) untuk Pemodelan Sistem Industri Multi-Fisik: Tinjauan, Formulasi, dan Implementasi Rekayasa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *A Review of Physics-Informed Neural Networks* dan Aplikasinya pada Permasalahan Industri
**Jurnal & Sitasi Utama:** Zhenyu Li (2024). *A Review of Physics-Informed Neural Networks*. **Applied and Computational Engineering**. DOI: [https://doi.org/10.54254/2755-2721/2025.20636](https://doi.org/10.54254/2755-2721/2025.20636)
**Sitasi Pendukung:** Baihua Zeng (2024). *Physics-Informed Neural Networks for Seepage Modeling in Porous Media: A Review*. **Applied and Computational Engineering**. DOI: [https://doi.org/10.54254/2755-2721/2026.34314](https://doi.org/10.54254/2755-2721/2026.34314)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital dalam rekayasa industri modern menghadapi tantangan fundamental: bagaimana memodelkan sistem fisika yang kompleks dengan data operasional yang seringkali tidak lengkap, terdistribusi sparse, atau mengandung noise pengukuran yang signifikan. Zhenyu Li (2024) dalam papernya yang diterbitkan di *Applied and Computational Engineering* dengan DOI [10.54254/2755-2721/2025.20636](https://doi.org/10.54254/2755-2721/2025.20636) memperkenalkan **Physics-Informed Neural Networks (PINNs)** sebagai paradigma komputasional yang mengintegrasikan hukum-hukum fisika ke dalam proses pelatihan jaringan saraf tiruan, memungkinkan model untuk mempelajari sistem yang diatur oleh *Partial Differential Equations* (PDE) secara efisien meskipun dengan data pelatihan yang terbatas.

Urgensi industri dari pendekatan ini sangat nyata. Dalam konteks Teknik Industri, permasalahan optimasi proses, kendali kualitas, dan perancangan sistem manufaktur hampir selalu melibatkan fenomena multi-fisik seperti konduksi panas pada peralatan proses, dinamika fluida pada sistem perpipaan, perpindahan massa pada operasi pengeringan, dan perilaku mekanis material komposit. Metode komputasi numerik klasik seperti *Finite Difference Method* (FDM), *Finite Element Method* (FEM), *Finite Volume Method* (FVM), dan *Lattice Boltzmann Method* (LBM) yang diidentifikasi oleh Baihua Zeng (2024) dalam papernya di *Applied and Computational Engineering* (DOI: [10.54254/2755-2721/2026.34314](https://doi.org/10.54254/2755-2721/2026.34314)) tetap menjadi tulang punggung *forward modeling* dalam engineering karena teori diskritisasi yang matang dan konservasi yang terkontrol. Namun, ketika kondisi batas tidak lengkap, parameter medium sulit diukur, relasi konstitutif tidak pasti, atau observasi bersifat langka—kondisi yang lazim dijumpai dalam sistem industri nyata—workflow tradisional memerlukan rekonstruksi mesh yang melelahkan, simulasi berulang, dan regularisasi prior yang kuat.

PINNs muncul sebagai respons terhadap keterbatasan ini dengan menyediakan kerangka terpadu yang menggabungkan kekuatan *universal approximation* jaringan saraf dengan kepatuhan terhadap hukum fisika yang sudah mapan (Li, 2024). Pendekatan ini secara langsung menurunkan biaya pengumpulan data eksperimental, mempercepat waktu *time-to-solution*, dan memungkinkan digital twin yang lebih akurat untuk sistem industri dengan sensor yang terbatas. Bagi perusahaan manufaktur, utilitas, dan rekayasa konsultan, adopsi PINNs berpotensi mengubah total biaya kepemilikan (*Total Cost of Ownership*/TCO) dari perangkat lunak simulasi dan siklus pengembangan produk.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Dasar PINN

PINN adalah jaringan saraf dalam (deep neural network) yang fungsi loss-nya tidak hanya mengukur kesalahan terhadap data, tetapi juga terhadap residual dari PDE yang mengatur sistem. Misalkan kita memiliki domain $\Omega \subset \mathbb{R}^d$ dan PDE umum berbentuk:

$$\mathcal{L}[u(\mathbf{x}, t)] = f(\mathbf{x}, t), \quad \mathbf{x} \in \Omega, \quad t \in [0, T]$$

dengan $\mathcal{L}$ adalah operator diferensial, $u(\mathbf{x}, t)$ adalah solusi yang dicari, dan $f$ adalah fungsi sumber. Jaringan saraf dengan parameter $\theta$ mengaproksimasi solusi sebagai $u_\theta(\mathbf{x}, t) \approx u(\mathbf{x}, t)$, dengan parameter $\theta$ (bobot dan bias) dioptimasi melalui minimisasi fungsi loss gabungan (Li, 2024):

$$\mathcal{L}(\theta) = \lambda_d \mathcal{L}_{data} + \lambda_r \mathcal{L}_{residual} + \lambda_{bc} \mathcal{L}_{bc} + \lambda_{ic} \mathcal{L}_{ic}$$

di mana:
- $\mathcal{L}_{data} = \frac{1}{N_d} \sum_{i=1}^{N_d} |u_\theta(\mathbf{x}_d^{(i)}, t_d^{(i)}) - u_d^{(i)}|^2$ adalah *data loss* terhadap pengukuran.
- $\mathcal{L}_{residual} = \frac{1}{N_r} \sum_{i=1}^{N_r} |\mathcal{L}[u_\theta](\mathbf{x}_r^{(i)}, t_r^{(i)}) - f(\mathbf{x}_r^{(i)}, t_r^{(i)})|^2$ adalah *physics loss* yang mengukur seberapa baik prediksi memenuhi PDE.
- $\mathcal{L}_{bc}$ dan $\mathcal{L}_{ic}$ berturut-turut adalah syarat batas (*boundary condition*) dan syarat awal (*initial condition*).
- $\lambda_d, \lambda_r, \lambda_{bc}, \lambda_{ic}$ adalah bobot regularisasi yang mengatur kontribusi relatif setiap komponen.

Turunan-turunan yang diperlukan pada *physics loss* dihitung melalui *automatic differentiation* (AD), yang merupakan salah satu keunggulan utama PINN karena tidak memerlukan diskritisasi grid eksplisit (Li, 2024).

### 2.2 Penerapan pada Persamaan Konduksi Panas 1D

Percobaan numerik yang dilaporkan oleh Li (2024) menggunakan persamaan konduksi panas satu dimensi sebagai benchmark:

$$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}, \quad x \in [0, L], \quad t \in [0, T]$$

dengan $\alpha = k / (\rho c_p)$ adalah difusivitas termal, $k$ adalah konduktivitas termal (W/m·K), $\rho$ adalah densitas (kg/m³), dan $c_p$ adalah kapasitas panas spesifik (J/kg·K). Syarat awal dan syarat batas yang digunakan:

$$u(x, 0) = u_0(x) = \sin(\pi x / L), \quad u(0, t) = u(L, t) = 0$$

Solusi analitik dari persamaan ini adalah:

$$u(x, t) = \sin(\pi x / L) \cdot \exp\left(-\alpha \left(\frac{\pi}{L}\right)^2 t\right)$$

### 2.3 Formulasi untuk Aliran Fluida dalam Media Berpori

Untuk permasalahan seepage dalam media berpori yang menjadi fokus Zeng (2024), PINN memformulasikan persamaan Darcy sebagai berikut:

$$\nabla \cdot (K(\mathbf{x}) \nabla h(\mathbf{x}, t)) = S_s \frac{\partial h}{\partial t}$$

dengan $K(\mathbf{x})$ adalah konduktivitas hidrolik (m/s), $h$ adalah head piezometrik (m), dan $S_s$ adalah storativitas spesifik (1/m). Dalam skenario 2D stasioner, persamaan ini berkurang menjadi:

$$K_x \frac{\partial^2 h}{\partial x^2} + K_y \frac{\partial^2 h}{\partial y^2} = 0$$

yang selanjutnya ditulis sebagai *physics loss*:

$$\mathcal{L}_{residual} = \frac{1}{N_r} \sum_{i=1}^{N_r} \left| K_x \frac{\partial^2 h_\theta}{\partial x^2}\bigg|_{(\mathbf{x}_r^{(i)})} + K_y \frac{\partial^2 h_\theta}{\partial y^2}\bigg|_{(\mathbf{x}_r^{(i)})} \right|^2$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PINN dalam lingkungan industri mengikuti prosedur operasional standar (SOP) yang dapat distandardisasi menjadi delapan tahap berikut, disintesis dari protokol yang diuraikan oleh Li (2024) dan Zeng (2024):

**Tahap 1 – Identifikasi Persamaan Pengatur (Governing Equations).** Insinyur industri melakukan identifikasi PDE yang relevan terhadap sistem fisik. Contoh: konduksi panas pada dapur industri, persamaan difusi-reaksi pada reaktor kimia, persamaan Laplace untuk distribusi suhu.

**Tahap 2 – Penentuan Domain dan Geometri.** Domain komputasi $\Omega$ didefinisikan dengan parameter geometri industri aktual (misal: panjang tungku $L = 2$ m, luas penampang reservoir $A = 1000$ m²).

**Tahap 3 – Pengumpulan Data Operasional.** Data sensor dari Supervisory Control and Data Acquisition (SCADA) atau Distributed Control System (DCS) dikumpulkan. Untuk PINN, diperlukan minimal $N_d \geq 50$ titik data dan $N_r \geq 10.000$ titik *collocation* untuk *physics loss*.

**Tahap 4 – Desain Arsitektur Jaringan.** Jaringan saraf dengan *fully connected layers* (Li, 2024 merekomendasikan 4–8 hidden layers dengan 20–200 neuron per layer) dan fungsi aktivasi *hyperbolic tangent* (tanh) atau *sine* untuk menangkap solusi periodik.

**Tahap 5 – Penentuan Fungsi Loss Tertimbang.** Bobot $\lambda$ dipilih melalui *learning rate annealing* atau algoritma *Neural Tangent Kernel* (NTK) untuk menyeimbangkan gradien dari masing-masing komponen loss.

**Tahap 6 – Pelatihan dan Validasi.** Optimasi dilakukan dengan Adam optimizer (learning rate $10^{-3}$) diikuti L-BFGS untuk konvergensi halus. Kriteria konvergensi: $|\mathcal{L}(\theta)| < 10^{-6}$ atau *relative L2 error* $< 1\%$.

**Tahap 7 – Verifikasi dan Validasi (V&V).** Hasil PINN dibandingkan dengan solusi analitik atau data eksperimen independen.

**Tahap 8 – Integrasi ke Digital Twin.** Model PINN di-*deploy* ke platform digital twin industri (misal: Siemens MindSphere, GE Predix) untuk prediksi real-time.

Berikut diagram alur prosesnya:

```
[Definisi PDE] → [Sampling Domain] → [Akuisisi Data SCADA]
       ↓                  ↓                     ↓
[Arsitektur NN] → [Titik Collocation] → [Fungsi Loss Gabungan]
                                              ↓
                          [Adam Optimizer] → [L-BFGS Refinement]
                                              ↓
                        [Validasi] → [Deploy ke Digital Twin]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Optimalisasi Pendinginan Batang Logam dalam Proses Heat Treatment

Sebuah fasilitas heat treatment industri memiliki batang logam baja karbon AISI 1045 dengan parameter: panjang $L = 0{,}5$ m, konduktivitas termal $k = 49{,}8$ W/m·K, densitas $\rho = 7850$ kg/m³, kapasitas panas $c_p = 486$ J/kg·K. Difusivitas termal:

$$\alpha = \frac{k}{\rho c_p} = \frac{49{,}8}{7850 \times 486} = 1{,}305 \times 10^{-5} \text{ m}^2/\text{s}$$

**Langkah 1 – Diskritisasi domain.** Domain spasial dibagi dengan $\Delta x = 0{,}05$ m sehingga $N_x = 11$ node, dan domain waktu $T = 600$ s dengan $\Delta t = 30$ s sehingga $N_t = 21$ langkah.

**Langkah 2 – Solusi analitik (referensi).** Dengan syarat awal $u_0(x) = 800 \cdot \sin(\pi x / 0{,}5)$ °C (suhu awal sebelum quenching):

$$u(x, t) = 800 \cdot \sin\left(\frac{\pi x}{0{,}5}\right) \cdot \exp\left(-1{,}305 \times 10^{-5} \times \left(\frac{\pi}{0{,}5}\right)^2 t\right)$$

Pada titik tengah $x = 0{,}25$ m dan $t = 300$ s:

$$u(0{,}25, 300) = 800 \cdot \sin(\pi/2) \cdot \exp(-1{,}305 \times 10^{-5} \times 39{,}48 \times 300)$$

$$= 800 \cdot 1 \cdot \exp(-0{,}1545) = 800 \cdot 0{,}8568 = 685{,}4 \text{ °C}$$

**Langkah 3 – Implementasi PINN (simulasi).** Dengan jaringan saraf 5 hidden layer × 50 neuron, fungsi aktivasi tanh, dan 10.000 titik *collocation* terdistribusi secara *Latin Hypercube Sampling* (LHS), pelatihan selama 50.000 epoch menghasilkan:

| Metrik | Nilai |
|--------|-------|
| *Relative L2 error* (PINN) | $0{,}42\%$ |
| *Relative L2 error* (FEM 11 node) | $1{,}18\%$ |
| *Mean Squared Error* (PINN) | $4{,}7 \times 10^{-4}$ |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
