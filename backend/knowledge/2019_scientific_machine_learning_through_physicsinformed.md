# 2019 — Scientific Machine Learning untuk Rekayasa Industri: Physics–Informed Neural Networks (PINN) sebagai Kerangka Multi-Task Learning untuk Solusi PDE dan Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Scientific Machine Learning Through Physics–Informed Neural Networks: Where we are and What's Next
**Jurnal & Sitasi Utama:** Salvatore Cuomo, Vincenzo Schiano Di Cola, Fabio Giampaolo (2022). *Journal of Scientific Computing*. DOI: [https://doi.org/10.1007/s10915-022-01939-z](https://doi.org/10.1007/s10915-022-01939-z)
**Sitasi Pendukung:** Mounia Achouch, Mariya Dimitrova, Khaled Ziane (2022). *Applied Sciences*. DOI: [https://doi.org/10.3390/app12168081](https://doi.org/10.3390/app12168081)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses pada era Revolusi Industri 4.0 telah menghasilkan ledakan volume data sensorik yang diekstraksi dari sistem produksi. Achouch, Dimitrova, dan Ziane (2022, DOI: [10.3390/app12168081](https://doi.org/10.3390/app12168081)) menegaskan bahwa data hasil proses produksi meningkat secara eksponensial akibat proliferasi teknologi sensing, dan konsep *Predictive Maintenance* (Pemeliharaan Prediktif) menjadi pilar utama dalam *sustainable manufacturing*. Pendekatan ini meminimalisasi *machine downtime*, menekan biaya operasional, memperpanjang siklus hidup mesin, serta memperbaiki kualitas dan kestabilan ritme produksi. Namun, di balik peluang strategis tersebut, Maintenance 4.0 masih menghadapi tantangan organisasional, finansial, kualitas sumber data, dan kompleksitas perbaikan mesin yang bersifat teknis-fisik.

Di sisi paralel, komunitas riset komputasi ilmiah bergulat dengan keterbatasan metode numerik konvensional (Finite Difference, Finite Element, Finite Volume) ketika menghadapi Persamaan Diferensial Parsial (PDE) berdimensi tinggi, geometri kompleks, atau domain dengan data稀少. Cuomo, Schiano Di Cola, dan Giampaolo (2022, DOI: [10.1007/s10915-022-01939-z](https://doi.org/10.1007/s10915-022-01939-z)) memperkenalkan kerangka *Physics-Informed Neural Networks* (PINN) sebagai paradigma *scientific machine learning* yang menyandikan (encode) persamaan model fisika langsung ke dalam arsitektur jaringan saraf tiruan (JST). Berbeda dengan JST konvensional yang sepenuhnya *data-driven*, PINN melakukan pembelajaran multi-tugas: secara simultan meminimalkan *data mismatch* terhadap pengukuran dan mengurangi residual PDE pada titik-titik *collocation*. 

Urgensi industrial-ekonomis penggabungan keduanya tampak jelas ketika industri menghadapi masalah degenerasi komponen mesin yang dimodelkan oleh PDE konduksi panas, difusi kerusakan fatik, atau persamaan vibrasi mekanis. Data sensorik historis mesin jarang, ruidos, dan tidak lengkap, namun hukum fisika material dan dinamika strukturalnya tetap governing. PINN menjawab gap tersebut dengan menyediakan regularisasi fisika yang menekan ruang hipotesis JST, sehingga generalisasi terhadap data稀少 menjadi feasible. Integrasi ini merepresentasikan lompatan paradigma dari *black-box machine learning* menuju *glass-box scientific learning* yang sangat relevan untuk rekayasa sistem industri modern.

## 2. Landasan Teori & Formulasi Matematis

Formulasi kanonik PINN bermula dari PDE umum berbentuk:

$$\mathcal{N}[u(x,t); \lambda] = 0, \quad x \in \Omega \subseteq \mathbb{R}^d, \quad t \in [0,T]$$

dengan $\mathcal{N}$ adalah operator diferensial nonlinear parameterized oleh $\lambda$, $u(x,t)$ adalah solusi latent, dan syarat batas/awal $u(x,t) = g(x,t)$ pada $\partial \Omega \times [0,T]$. Pendekatan PINN membangun approximator neural network $u_{\theta}(x,t) \approx u(x,t)$ dengan parameter $\theta \in \mathbb{R}^p$ yang dilatih melalui composite loss function:

$$L(\theta) = w_d L_{data}(\theta) + w_r L_{residual}(\theta) + w_b L_{BC/IC}(\theta)$$

di mana $w_d, w_r, w_b$ adalah bobot regularisasi. Komponen *data loss* diekspresikan sebagai Mean Squared Error (MSE) terhadap pengamatan:

$$L_{data}(\theta) = \frac{1}{N_d} \sum_{i=1}^{N_d} \left| u_{\theta}(x_d^i, t_d^i) - u^i \right|^2$$

Komponen *physics loss* (residual PDE) dievaluasi pada $N_r$ titik collocation $\{x_r^i, t_r^i\}$:

$$L_{residual}(\theta) = \frac{1}{N_r} \sum_{i=1}^{N_r} \left| r_{\theta}(x_r^i, t_r^i) \right|^2$$

dengan residual:

$$r_{\theta}(x,t) := \frac{\partial u_{\theta}}{\partial t}(x,t) + \mathcal{N}[u_{\theta}; \lambda]$$

Turunan parsial dihitung secara *automatic differentiation* (AD) terhadap input $(x,t)$ — inilah yang menjadi pembeda struktural PINN: jaringan saraf berfungsi ganda sebagai approximator universal *dan* representasi diskret dari operator diferensial. Untuk menjamin kepatuhan terhadap syarat batas dan awal:

$$L_{BC/IC}(\theta) = \frac{1}{N_b} \sum_{i=1}^{N_b} \left| u_{\theta}(x_b^i, t_b^i) - g(x_b^i, t_b^i) \right|^2$$

Arsitektur khasnya adalah *fully-connected feed-forward* dengan 4–8 hidden layer, 20–50 neuron per layer, dan aktivasi $\tanh$ atau $\sin$ (alternatif aktivasi Fourier-inspired seperti $\sin(\omega x)$ terbukti meningkatkan spektral bias). Pelatihan dilakukan via Adam optimizer dengan learning rate adaptif $10^{-3}$ hingga $10^{-4}$, dilanjutkan L-BFGS untuk fine-tuning konvergensi kuadratik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PINN dalam rantai nilai industri mengikuti SOP terstruktur berikut:

**Tahap 1 – Pemodelan Fisika & Akuisisi Data.** Insinyur menetapkan PDE governing dari fenomena (misal: persamaan panas untuk monitoring termal bearing, persamaan difusi untuk korosi, atau persamaan gelombang untuk vibrasi pahat). Data sensor IoT (temperature, vibration, current) dikumpulkan dari PLC/SCADA dengan sampling rate konsisten.

**Tahap 2 – Preprocessing & Normalisasi.** Variabel input $(x,t)$ dan output sensor dinormalisasi ke rentang $[-1, 1]$ atau $[0, 1]$ untuk menghindari saturation aktivasi dan mempercepat konvergensi.

**Tahap 3 – Arsitektur Jaringan & Inisialisasi.** Bangun MLP dengan inisialisasi Xavier/Glorot; pilih jumlah collocation points $N_r = 10.000$ hingga $100.000$ melalui sampling Latin Hypercube untuk cakupan domain optimal.

**Tahap 4 – Pelatihan Multi-Task.** Definisikan composite loss dengan bobot yang dituning via *learning rate annealing* (algoritma seperti NTK-balancing atau ReLoBRaLo) untuk mencegah gradient pathology — masalah klasik PINN di mana $L_{residual}$ mendominasi $L_{data}$ atau sebaliknya.

**Tahap 5 – Validasi & Deployment.** Validasi dengan *hold-out set*, hitung Relative $L^2$ Error:

$$\text{Err}_{L^2} = \frac{\| u_{\theta} - u_{true} \|_2}{\| u_{true} \|_2}$$

Jika Err$_{L^2} < 10^{-2}$, model siap dideploy ke *edge device* (NVIDIA Jetson, Intel NUC) untuk inferensi real-time pada lini produksi.

Diagram alir logikanya: **Data Sensor → Preprocessing → Split (Data Pelatihan/Collocation) → PINN Forward + AD → Compute Composite Loss → Backprop → Update $\theta$ → Convergence Check → Deployment**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pemodelan distribusi suhu pada *sleeve bearing* mesin CNC menggunakan persamaan panas 1-D:

$$\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}, \quad x \in [0, L], \quad t \in [0, T]$$

dengan $\alpha = 0.01 \, \text{m}^2/\text{s}$ (diffusivitas termal baja), $L = 0.1 \, \text{m}$, $T = 10 \, \text{s}$. Syarat awal $u(x,0) = \sin(\pi x / L)$ dan syarat batas Dirichlet $u(0,t) = u(L,t) = 0$.

Solusi analitik eksak: $u_{exact}(x,t) = \sin(\pi x / L) \cdot \exp(-\alpha \pi^2 t / L^2)$.

**Langkah 1 – Sampling Data.** Misalkan kita hanya memiliki $N_d = 50$ pengukuran sensorik ruidos (Gaussian noise $\sigma = 0.01$) pada titik acak $\{x_d^i, t_d^i\}$, dan $N_r = 10.000$ collocation points via Latin Hypercube.

**Langkah 2 – Forward Pass PINN.** Misalkan hidden layer dengan aktivasi $\tanh$ dan arsitektur $(2 \to 32 \to 32 \to 32 \to 1)$. Output $u_{\theta}(x,t)$. Dengan AD:

$$\frac{\partial u_{\theta}}{\partial t} = \nabla_t u_{\theta}, \quad \frac{\partial^2 u_{\theta}}{\partial x^2} = \nabla_x^2 u_{\theta}$$

**Langkah 3 – Evaluasi Residual pada $x_r = 0.05$ m, $t_r = 5$ s.** Misalkan iterasi ke-$k$ menghasilkan $u_{\theta}(0.05, 5) = 0.245$, $\nabla_t u_{\theta} = -0.0245$, $\nabla_x^2 u_{\theta} = -24.5$. Maka:

$$r_{\theta} = \nabla_t u_{\theta} - \alpha \nabla_x^2 u_{\theta} = -0.0245 - (0.01)(-24.5) = -0.0245 + 0.245 = 0.2205$$

**Langkah 4 – Komponen Loss.** Dengan asumsi $u^i = 0.240$ pada titik data $(0.05, 5)$:

$$L_{data} = \frac{1}{50} (0.245 - 0.240)^2 \cdot 50 = (0.005)^2 = 2.5 \times 10^{-5}$$

$$L_{residual} = (0.2205)^2 \approx 0.0486$$

**Langkah 5 – Composite Loss.** Dengan $w_d = w_r = 1$:

$$L(\theta) = 2.5 \times 10^{-5} + 0.0486 \approx 0.04863$$

**Langkah 6 – Validasi.** Setelah 50.000 epoch Adam + 500 iterasi L-BFGS, Relative $L^2$ Error:

$$\text{Err}_{L^2} = \frac{\sqrt{\sum_{i} (u_{\theta}^i - u_{exact}^i)^2}}{\sqrt{\sum_{i} (u_{exact}^i)^2}} \approx 3.2 \times 10^{-3}$$

**Interpretasi Manajerial:** Model PINN mencapai akurasi 99,7% dengan hanya 50 titik data — menunjukkan kemampuan *data efficiency* yang luar biasa untuk