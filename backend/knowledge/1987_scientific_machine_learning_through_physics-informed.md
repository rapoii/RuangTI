# 1987 — Simulasi Proses Industri Berbasis Physics-Informed Neural Networks (PINN): Rekayasa Model Persamaan Diferensial untuk Optimasi Sistem Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Scientific Machine Learning through Physics-Informed Neural Networks: Where we are and What's next
**Jurnal & Sitasi Utama:** Salvatore Cuomo, Vincenzo Schiano Di Cola, Fabio Giampaolo (2022). *arXiv (Cornell University)*. DOI: [https://doi.org/10.48550/arxiv.2201.05624](https://doi.org/10.48550/arxiv.2201.05624)
**Sitasi Pendukung:** Bicheng Yan, D. R. Harp, Bailian Chen (2022). *Journal of Computational Physics*. DOI: [https://doi.org/10.1016/j.jcp.2022.111277](https://doi.org/10.1016/j.jcp.2022.111277)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur, energi, dan proses kimia modern menghadapi tantangan fundamental berupa kebutuhan untuk memodelkan fenomena fisik kompleks yang governed by *Partial Differential Equations* (PDE), *fractional equations*, *integral-differential equations*, hingga *stochastic PDEs*. Cuomo, Schiano Di Cola, dan Giampaolo (2022) dalam tinjauan komprehensifnya di *arXiv* (DOI: [10.48550/arxiv.2201.05624](https://doi.org/10.48550/arxiv.2201.05624)) memperkenalkan paradigma **Physics-Informed Neural Networks (PINN)** sebagai pendekatan *multi-task learning* di mana jaringan saraf tidak hanya memfitting data observasi tetapi simultan meminimalkan *residual* PDE yang tertanam dalam arsitekturnya. Pendekatan ini muncul sebagai jawaban atas kelemahan metode numerik konvensional — *Finite Difference* (FDM), *Finite Element* (FEM), dan *Finite Volume* (FVM) — yang memerlukan *mesh generation* mahal, mengalami *curse of dimensionality*, dan kesulitan menangani geometri irregular dalam aplikasi industri nyata seperti desain *heat exchanger*, optimasi reservoir minyak, dan kontrol proses kontinu.

Urgensi operasional PINN semakin nyata ketika Yan, Harp, dan Chen (2022) dalam *Journal of Computational Physics* (DOI: [10.1016/j.jcp.2022.111277](https://doi.org/10.1016/j.jcp.2022.111277)) mendemonstrasikan bahwa model *gradient-based deep neural network* dapat menyimulasikan *multiphase flow in porous media* — sebuah permasalahan dengan non-linearitas tinggi dan computational cost masif dalam industri E&P (*Exploration & Production*) migas. Dalam konteks rekayasa sistem industri, biaya satu simulasi *reservoir simulator* konvensional (misalnya ECLIPSE, CMG-STARS) dapat mencapai USD 50.000–500.000 per skenario untuk *history matching*, menjadikan PINN sebagai *disruptive technology* dengan potensi pengurangan *time-to-solution* sebesar 40–80% (Cuomo dkk., 2022). Pinjaman penelitian ini juga menunjukkan bahwa PINN bersifat *mesh-free* dan mampu menangani *data scarcity* melalui regularisasi fisika, sebuah karakteristik krusial bagi industri dengan sensor terbatas.

Dari perspektif ekonomi teknik, pengintegrasian PINN ke dalam *Digital Twin* lini manufaktur memungkinkan prediksi suhu, konsentrasi, atau stress secara real-time dengan akurasi yang sebanding dengan *Computational Fluid Dynamics* (CFD) tradisional, namun dengan *inference time* 100–1000 kali lebih cepat pada GPU. Hal ini menjadikan PINN sebagai enabler utama bagi *Industry 4.0/5.0*, di mana keputusan operasional harus diambil dalam rentang milidetik.

## 2. Landasan Teori & Formulasi Matematis

PINN diperkenalkan oleh Raissi, Perdikaris, dan Karniadakis (2019) — yang dirujuk ekstensif oleh Cuomo dkk. (2022) — sebagai kerangka kerja di mana sebuah *neural network* $\mathcal{NN}_\theta(x,t)$ dengan parameter $\theta$ mendekati solusi $u(x,t)$ dari suatu PDE. Formulasi umum PDE yang ditangani adalah:

$$\mathcal{N}[u](x,t) = f(x,t), \quad x \in \Omega \subset \mathbb{R}^d, \; t \in [0,T]$$

dengan kondisi batas $\mathcal{B}[u] = g$ pada $\partial\Omega$ dan kondisi awal $\mathcal{I}[u] = h$ pada $t=0$. Operator $\mathcal{N}$ dapat berupa turunan ruang-waktu, misalnya untuk persamaan panas 1D:

$$\mathcal{N}[u] = \frac{\partial u}{\partial t} - \alpha \frac{\partial^2 u}{\partial x^2}$$

**Fungsi kerugian (Loss Function) Total** PINN merupakan komposit tertimbang:

$$\mathcal{L}_{total}(\theta) = \lambda_d \mathcal{L}_{data} + \lambda_p \mathcal{L}_{physics} + \lambda_b \mathcal{L}_{BC} + \lambda_0 \mathcal{L}_{IC}$$

di mana:

$$\mathcal{L}_{data} = \frac{1}{N_d}\sum_{i=1}^{N_d} \left| u_{NN}(x_i^d, t_i^d) - u_i^{obs} \right|^2$$

$$\mathcal{L}_{physics} = \frac{1}{N_c}\sum_{j=1}^{N_c} \left| \mathcal{N}[u_{NN}](x_j^c, t_j^c) - f(x_j^c, t_j^c) \right|^2$$

dengan bobot $\lambda_d, \lambda_p, \lambda_b, \lambda_0$ sebagai *balancing hyperparameters*. Titik $(x_j^c, t_j^c)$ disebut *collocation points* — lokasi di mana residual PDE dievaluasi tanpa data aktual. Turunan parsial dihitung melalui *automatic differentiation* (reverse-mode AD) dari framework seperti PyTorch atau JAX, menjadikan PINN **mesh-free**.

Untuk kasus industri *multiphase flow* yang ditangani Yan dkk. (2022), governing equations adalah sistem dua-fase air-minyak dalam media berpori:

$$\frac{\partial (\phi S_w)}{\partial t} + \nabla \cdot \left( -\frac{k k_{rw}}{\mu_w} \nabla p_w \right) = q_w$$

$$\frac{\partial (\phi S_o)}{\partial t} + \nabla \cdot \left( -\frac{k k_{ro}}{\mu_o} \nabla (p_o) \right) = q_o$$

dengan *constraint* $S_w + S_o = 1$ dan $p_c(p_o - p_w) = p_c(S_w)$. Di sini $\phi$ adalah porositas, $k$ permeabilitas absolut, $k_{r\alpha}$ permeabilitas relatif fasa $\alpha$, dan $\mu_\alpha$ viskositas. Yan dkk. menggunakan arsitektur *gradient-based DNN* dengan *loss function* yang menggabungkan *mean squared error* data produksi historis dengan residual persamaan Buckley-Leverett dan Darcy.

Arsitektur jaringan standar PINN menggunakan *fully-connected layers* dengan aktivasi *hyperbolic tangent*: $u_{NN}(x,t) = W_L \sigma(\cdots \sigma(W_1 [x,t]^T + b_1) \cdots) + b_L$ dengan $\sigma(z) = \tanh(z)$. Cuomo dkk. (2022) menekankan bahwa pemilihan arsitektur ini memengaruhi trade-off antara *expressivity* dan *trainability*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PINN dalam rekayasa sistem industri mengikuti SOP berlapis berikut, yang konsisten dengan framework yang diuraikan Cuomo dkk. (2022) dan Yan dkk. (2022):

**Tahap 1 — Formulasi Fisika & Pengumpulan Data.** Insinyur proses mengidentifikasi PDE governing, kondisi batas (misalnya inlet/outlet *flow rate*, *temperature*), dan kondisi awal. Data sensor historis dikumpulkan; minimum $N_d = 50$ titik direkomendasikan untuk konvergensi.

**Tahap 2 — Pre-processing & Normalisasi.** Semua input $(x,t)$ dan output $u$ dinormalisasi ke rentang $[-1, 1]$ menggunakan:

$$\tilde{x} = 2\frac{x - x_{min}}{x_{max} - x_{min}} - 1$$

**Tahap 3 — Definisi Arsitektur.** Lebar hidden layer 4–9 layer dengan 20–200 neuron per layer. Sebagai baseline industri: 5 hidden layers × 50 neurons (Yan dkk., 2022).

**Tahap 4 — Sampling Collocation Points.** Menggunakan *Latin Hypercube Sampling* (LHS) atau *Halton sequence* untuk $N_c = 10.000$–$100.000$ titik residual.

**Tahap 5 — Pelatihan (Training).** Optimizer Adam dengan *learning rate* $10^{-3}$ hingga $10^{-4}$, dilanjutkan *L-BFGS* untuk fine-tuning. *Gradient balancing* weight $\lambda_p$ adaptif menggunakan *Neural Tangent Kernel* atau algoritma *grad-norm* untuk mencegah salah satu loss mendominasi.

**Tahap 6 — Validasi & Sertifikasi.** Bandingkan prediksi PINN dengan *hold-out test set* dan solusi analitis/FEM referensi. Metrik: *Relative L2 Error*:

$$\epsilon_{L2} = \frac{\|u_{NN} - u_{ref}\|_2}{\|u_{ref}\|_2} < 10^{-2}$$

**Tahap 7 — Deployment ke Digital Twin.** Integrasi ke platform *Industrial Internet of Things* (IIoT) dengan *inference latency* < 50 ms per query.

Diagram alir prosesnya adalah: *Data Akuisisi → Formulasi PDE → Sampling Collocation → Training PINN → Validasi → Deployment*. Variasi lanjutan seperti *Conservative PINN* (cPINN), *Extended PINN* (XPINN), dan *Gradient-Enhanced PINN* (gPINN) memperluas kapabilitas untuk domain komposit dan masalah inversi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Simulasi distribusi suhu pada batang tembaga (*heat rod*) dalam proses *annealing* menggunakan PINN. Persamaan governing adalah *heat equation* 1D:

$$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2}, \quad x \in [0, L], \; t \in [0, t_f]$$

**Parameter Industri Input:**
- Panjang batang: $L = 1{,}0$ m
- Difusivitas termal tembaga: $\alpha = 1{,}11 \times 10^{-4}$ m²/s
- Kondisi awal: $T(x,0) = 100 \sin(\pi x)$ °C
- Kondisi batas: $T(0,t) = T(L,t) = 0$ °C
- Waktu simulasi: $t_f = 60$ s
- *Collocation points*: $N_c = 10{,}000$
- Data observasi: $N_d = 200$ titik dari sensor termokopel

**Solusi Analitis Referensi** (untuk validasi):

$$T_{ref}(x,t) = 100 \sin(\pi x) \cdot \exp\left(-\alpha \pi^2 t\right)$$

**Kalkulasi Step-by-Step PINN:**

Langkah 1: Definisikan jaringan $T_{NN}(x,t;\theta)$ dengan 5 hidden layers × 64 neurons, aktivasi tanh.

Langkah 2: Hitung residual PDE pada collocation point $(x_j, t_j)$:

$$r_j = \frac{\partial T_{NN}}{\partial t}\bigg|_{x_j,t_j} - \alpha \frac{\partial^2 T_{NN}}{\partial x^2}\bigg|_{x_j,t_j}$$

Langkah 3: Hitung *physics loss*:

$$\mathcal{L}_{physics} = \frac{1}{10{,}000} \sum_{j=1}^{10{,}000} r_j^2$$

Langkah 4: Hitung *data loss* terhadap 200 titik observasi:

$$\mathcal{L}_{data} = \frac{1}{200} \sum_{i