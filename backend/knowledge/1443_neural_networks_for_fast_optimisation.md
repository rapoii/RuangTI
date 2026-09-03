# 1443 — Optimisasi Cerdas untuk Kontrol Prediktif dan Perencanaan Jalur: Integrasi Jaringan Saraf Tiruan, RRT* Terinformasi, dan Particle Swarm Optimization dalam Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Neural Networks for Fast Optimisation in Model Predictive Control: A Review
**Jurnal & Sitasi Utama:** Camilo González, Houshyar Asadi, Lars Kooijman (2023). *arXiv (Cornell University)*. DOI: [https://doi.org/10.48550/arxiv.2309.02668](https://doi.org/10.48550/arxiv.2309.02668)
**Sitasi Pendukung:** Muhammad Aria Rajasa Pohan, Bambang Riyanto Trilaksono, Sigit Puji Santosa (2024). *IEEE Access*. DOI: [https://doi.org/10.1109/access.2024.3389152](https://doi.org/10.1109/access.2024.3389152)

---

## 1. Pendahuluan dan Konteks Industri

Model Predictive Control (MPC) telah menjadi algoritma *advanced process control* (APC) paling dominan dalam otomasi industri modern karena jaminan stabilitas dan robustnesnya yang kuat. González, Asadi, dan Kooijman (2023) dalam *survei* di arXiv (DOI: [10.48550/arxiv.2309.02668](https://doi.org/10.48550/arxiv.2309.02668)) menjelaskan bahwa MPC bekerja dengan menyelesaikan masalah optimasi pada setiap *control interval*, yang menghasilkan biaya komputasi sangat tinggi sehingga menjadi hambatan utama dalam deploymennya pada *real-time embedded system*, robotika, dan *process control* berkecepatan tinggi. Studi tersebut mengidentifikasi urgensi operasional berikut: (1) dalam industri petrokimia, *predictive horizon* sepanjang $N = 50$ dengan laju sampling 10 ms membutuhkan waktu komputasi 8–15 ms pada solver *quadratic programming* (QP) konvensional, mendekati batas atas *deadline* kontrol; (2) pada kendaraan otonom dan mobile robot di lantai pabrik, latensi solver MPC dapat menyebabkan trajectory deviation hingga 0,3–0,8 m pada kecepatan 5 m/s; (3) pada sistem HVAC gedung pintar, konsumsi CPU solver MPC mencapai 40–60% dari total *edge computing* budget.

Konteks ekonomi menjadi semakin kritis dengan maraknya *Industry 4.0* dan *Industrial AI* yang menuntut *deterministic real-time control* pada *edge devices* dengan sumber daya terbatas. Survei González dkk. (2023) menekankan bahwa pendekatan reduksi biaya komputasi melalui aproksimasi Neural Network (NN) terhadap solver MPC merupakan *trade-off* strategis antara *optimality*, *feasibility*, dan *real-time feasibility*. Pendekatan ini harus mempertahankan jaminan teoritis berupa *recursive feasibility*, *stability*, dan *constraint satisfaction* yang menjadi nilai jual utama MPC terhadap kontroler konvensional seperti PID.

Pada tataran perencanaan jalur (*path planning*) di lingkungan gudang otomatis (AGV/AMR) dan lantai manufaktur, masalah serupa muncul. Pohan, Trilaksono, dan Santosa (2024) dalam IEEE Access (DOI: [10.1109/access.2024.3389152](https://doi.org/10.1109/access.2024.3389152)) mendemonstrasikan bahwa algoritma Informed RRT* murni kadang gagal menaikkan laju konvergensi, sementara Particle Swarm Optimization (PSO) memiliki kemampuan eksplorasi global yang kuat. Kombinasi keduanya—RRT-PSO—memberikan jalur optimal yang memenuhi *known optimum* pada delapan skenario benchmark dengan laju konvergensi superior. Konteks integratif ini menunjukkan bahwa optimisasi cerdas (NN-based MPC + metaheuristic path planning) merupakan pilar fundamental untuk Sistem Manufaktur Fleksibel (FMS) dan *smart logistics* masa depan.

Urgensi kompetitifnya nyata: perusahaan yang mampu menurunkan *solver latency* hingga 70–95% melalui NN-approximation akan memiliki *throughput* 15–25% lebih tinggi dan *energy efficiency* 10–20% lebih baik pada lini produksi otomatis. Hal ini menjadi motivasi kuat untuk mengadopsi kerangka kerja optimisasi cerdas yang akan diuraikan secara sistematis dalam modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Model Predictive Control

MPC menyelesaikan masalah *constrained finite-horizon optimal control* (CFHOC) pada setiap langkah waktu $k$. Untuk sistem linear *time-invariant* (LTI) dengan state $x_k \in \mathbb{R}^{n_x}$ dan input $u_k \in \mathbb{R}^{n_u}$:

$$x_{k+1} = A x_k + B u_k$$

di mana $A \in \mathbb{R}^{n_x \times n_x}$ dan $B \in \mathbb{R}^{n_x \times n_u}$ adalah matriks dinamika diskret. Masalah optimasi MPC standar adalah:

$$\min_{U_k} \; J(x_k, U_k) = \sum_{i=0}^{N-1} \left[ x_{k+i|k}^{\top} Q \, x_{k+i|k} + u_{k+i|k}^{\top} R \, u_{k+i|k} \right] + x_{k+N|k}^{\top} P_f \, x_{k+N|k}$$

dengan *subject to* kendala:

$$x_{k+i+1|k} = A x_{k+i|k} + B u_{k+i|k}, \quad i = 0, \dots, N-1$$

$$x_{k|k} = x_k, \quad x_{k+i|k} \in \mathcal{X}, \quad u_{k+i|k} \in \mathcal{U}$$

di mana $Q \succeq 0$, $R \succ 0$, dan $P_f \succ 0$ adalah matriks pembobot biaya (*stage cost* dan *terminal cost*), $N$ adalah *prediction horizon*, $U_k = \{u_{k|k}, \dots, u_{k+N-1|k}\}$ adalah *control sequence*. Pada setiap *control interval*, hanya $u^*_{k|k}$ yang diaplikasikan (prinsip *receding horizon*).

### 2.2 Kompleksitas Komputasi dan Kebutuhan Aproksimasi

Solver QP interior-point untuk masalah MPC memiliki kompleksitas komputasional:

$$T_{\text{solver}} = \mathcal{O}(N^3 \, n_u^3) + \mathcal{O}(N^2 \, n_x^2 n_u)$$

Waktu komputasi tipikal untuk $N = 30$, $n_u = 5$, $n_x = 10$ pada CPU industri *real-time* adalah 5–20 ms, yang sering melebihi *sampling time* 1–10 ms pada aplikasi high-speed. González dkk. (2023) merangkum tiga pendekatan utama reduksi biaya: (a) *explicit MPC* dengan *multi-parametric programming*; (b) *fast QP solver* berbasis *structure exploiting*; dan (c) aproksimasi NN—yang menjadi fokus tinjauan mereka.

### 2.3 Formulasi Neural Network sebagai Aproksimator MPC

NN $\mathcal{N}_\theta: \mathbb{R}^{n_x} \to \mathbb{R}^{n_u}$ dengan parameter $\theta$ dipelatihkan untuk mengaproksimasi *optimal control law* MPC:

$$u_k \approx \mathcal{N}_\theta(x_k) \approx \pi^*(x_k) = u^*_{0|k}(x_k)$$

*Speedup factor* didefinisikan sebagai:

$$S = \frac{T_{\text{MPC}}(N, n_x, n_u)}{T_{\text{NN}}(n_x, n_u)}$$

dengan $T_{\text{NN}}$ hanya melibatkan beberapa perkalian matriks dan aktivasi *forward pass*:

$$T_{\text{NN}} = \mathcal{O}\left( \sum_{\ell=1}^{L} n_{\ell-1} \cdot n_{\ell} \right)$$

di mana $n_\ell$ adalah jumlah neuron pada layer $\ell$. Untuk *feedforward NN* dengan $L = 3$, dimensi tersembunyi $[32, 16, 8]$, dan $n_x = 10$, $T_{\text{NN}} \approx 50{-}200 \; \mu\text{s}$ pada mikrokontroler ARM Cortex-M4, memberikan $S \approx 50{-}200\times$.

### 2.4 Jaminan Teoritis: Stability dan Robustness

Untuk menjamin bahwa aproksimasi NN mempertahankan sifat MPC, tiga syarat berikut harus dipenuhi (menurut kerangka González dkk., 2023):

1. **Batas error aproksimasi:** $\|\mathcal{N}_\theta(x) - \pi^*(x)\| \leq \varepsilon$ untuk seluruh $x \in \mathcal{X}_{\text{train}}$.
2. **Perturbation analysis:** jika error perturbasi $\|e_k\| \leq \varepsilon$, maka sistem tertutup $\|x_k\|$ tetap bounded jika $\varepsilon < \delta_{\text{stable}}$.
3. **Constraint satisfaction guarantee:** melalui *robust MPC formulation* dengan *tightened constraints* $\mathcal{U}_\varepsilon \subseteq \mathcal{U}$.

### 2.5 Path Planning dengan Informed RRT* dan PSO

Pohan dkk. (2024) memformulasikan masalah path planning sebagai pencarian jalur minimum-biaya:

$$\min_{\sigma \in \Sigma_{\text{free}}} \; J(\sigma) = \int_0^1 c(\sigma(s)) \, ds$$

di mana $\sigma: [0,1] \to \mathbb{R}^2$ adalah kurva kontinu dari *start* $x_{\text{start}}$ ke *goal* $x_{\text{goal}}$ dalam *configuration space* bebas $\Sigma_{\text{free}}$. Informed RRT* memperbaiki RRT* dengan *sampling heuristic*:

$$x_{\text{sample}} \sim \mathcal{U}(\mathcal{B}(x_{\text{start}}, x_{\text{goal}})) \cap \mathcal{U}\left( \text{ellipse}\left( x_{\text{start}}, x_{\text{goal}}, c_{\text{best}} \right) \right)$$

di mana $c_{\text{best}}$ adalah biaya jalur terbaik saat ini, sehingga sampling terkonsentrasi pada region yang prospektif. PSO memperbarui posisi partikel:

$$v_i^{t+1} = w v_i^t + c_1 r_1 (p_i^{\text{best}} - x_i^t) + c_2 r_2 (g^{\text{best}} - x_i^t)$$
$$x_i^{t+1} = x_i^t + v_i^{t+1}$$

RRT-PSO mengintegrasikan keduanya dengan menggunakan Informed RRT* untuk menghasilkan jalur inisial, kemudian PSO memoles jalur dengan *smooth cost function*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi NN-Approximated MPC pada Sistem Industri

Berdasarkan taksonomi González, Asadi, dan Kooijman (2023), prosedur implementasi sistematis adalah sebagai berikut:

**Tahap 1: Karakterisasi Sistem dan Desain MPC Baseline**
1. Identifikasi model dinamika plant: $(A, B)$ atau model nonlinear $f(x,u)$.
2. Tentukan matriks pembobot $Q, R, P_f$ melalui LQR *Bryson's rule* atau *tuning iteratif*.
3. Pilih *prediction horizon* $N$ dan *constraint sets* $\mathcal{X}, \mathcal{U}$.
4. Validasi MPC baseline via *closed-loop simulation* (minimal 10.000 step Monte Carlo).

**Tahap 2: Generasi Dataset Pelatihan**
1. Buat *grid* atau *sampling* acak pada $\mathcal{X}_{\text{train}} \subseteq \mathcal{X}$ (umumnya $10^4$–$10^6$ sampel).
2. Untuk setiap $x^{(i)} \in \mathcal{X}_{\text{train}}$, selesaikan masalah MPC dengan solver referensi (CVXPY, OSQP, atau qpOASES) untuk memperoleh $\pi^*(x^{(i)})$.
3. Verifikasi *feasibility rate* $\geq 99{,}9\%$ pada dataset.

**Tahap 3: Desain dan Pelatihan Neural Network**
1. Pilih arsitektur: MLP untuk MPC linear, LSTM/Transformer untuk *time-varying*, *physics-informed NN* untuk MPC nonlinear.
2. Fungsi *loss* komposit:
$$\mathcal{L}(\theta) = \alpha \| \mathcal{N}_\theta(x) - \pi^*(x) \|^2 + \beta \cdot \mathbb{1}[\mathcal{N}_\theta(x) \notin \mathcal{U}] + \gamma \cdot \text{Reg}(\theta)$$
dengan $\alpha, \beta, \gamma$ sebagai *hyperparameter*.
3. Pelatihan dengan *early stopping* berdasarkan *validation loss*.

**Tahap 4: Validasi dan Verifikasi**
1. Uji pada *test set* terpisah (k-fold cross-validation, $k=5$).
2. Verifikasi *closed-loop stability* via Lyapunov analysis.
3. *Hardware-in-the-loop* (HIL) testing pada PLC/SCADA target.

**Tahap 5: Deployment dan Monitoring**
1. Konversi model ke format ONNX/TensorRT untuk inferensi *real-time*.
2. Implementasikan *safety wrapper* yang fallback ke MPC solver ketika error prediksi NN melebihi ambang batas.
3. Logging dan *drift detection* untuk *online fine-tuning*.

### 3.2 SOP Integrasi Path Planning pada AGV/AMR Gudang Otomatis

Merujuk pada metodologi Pohan dkk. (2024):

1. **Pemodelan lingkungan**: discretisasi peta gudang menjadi *occupancy grid* atau *probabilistic roadmap*.
2. **Inisialisasi Informed RRT***: bangun *tree* awal dengan sampling dalam elips informed.
3. **Optimisasi PSO**: inisialisasi partikel dengan waypoint dari jalur Informed RRT*, optimisasi dengan parameter $(w, c_1, c_2) = (0{,}7298, 1{,}49618, 1{,}49618)$.
4. **Validasi statistik**: jalankan $\geq 50$ trial dengan *seed