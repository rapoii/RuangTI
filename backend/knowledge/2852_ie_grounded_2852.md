# 2852 — Perencanaan Gerak Otonom Berbasis Reinforcement Learning untuk Sistem Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Smart Autonomous Multi-Agent Systems via Nonlinear Filtering & RL*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memaksa pelaku manufaktur, pergudangan, serta operator *third-party logistics* (3PL) untuk mengadopsi kendaraan berpemandu otomatis (*Automated Guided Vehicle* — AGV) dan *Autonomous Mobile Robot* (AMR) dalam skala masif. Permintaan *e-commerce* global yang diproyeksikan menembus USD 8,1 triliun pada 2026 (statista, 2024) dan kelangkaan tenaga kerja gudang di negara maju mendorong perusahaan seperti Amazon (Kiva/Hercules), Ocado, dan Toyota Material Handling untuk berinvestasi pada armada robot otonom. Rahul Kala (2024), dalam bab *Motion Planning Using Reinforcement Learning* yang dimuat di buku *Autonomous Mobile Robots* (Elsevier, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)), menekankan bahwa perencanaan gerak (*motion planning*) merupakan jantung otonomi karena menentukan bagaimana robot memutuskan lintasan, kecepatan, dan urutan manuver di lingkungan yang dinamis, parsial teramati, serta penuh ketidakpastian.

Urgensi ekonominya nyata: sebuah *fulfillment center* modern dengan luas 100.000 m² membutuhkan 500–800 AMR untuk mempertahankan *throughput* pesanan 100.000 unit/hari. Biaya downtime satu AMR macet di lorong dapat menelan kerugian USD 2.500–5.000 per jam karena *order-fulfillment lead time* yang meleset. Karenanya, metode konvensional seperti *A*-search, Rapidly-exploring Random Tree (RRT), dan *potential field* mulai dianggap *brittle* ketika dihadapkan pada kemacetan multi-agen, perubahan tata letak gudang mingguan, serta kebutuhan *real-time re-routing* saat terjadi gangguan. Kala (2024) berargumen bahwa *reinforcement learning* (RL) menawarkan kerangka *sequential decision-making* yang mampu belajar kebijakan optimal secara adaptif melalui interaksi berulang dengan lingkungan, sehingga melampaui keterbatasan algoritma deterministik berbasis peta statis.

Di sisi lain, Kaustav Borah (2024) dalam disertasinya di *Peer-Reviewed Journal* (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas perspektif otonomi ke tingkat sistem multi-agen lewat kerangka **Smart Autonomous Multi-Agent Systems (SAMAS)**. Borah memperkenalkan arsitektur yang menggabungkan *nonlinear filtering* (misalnya *Extended Kalman Filter* dan *Particle Filter*) untuk estimasi status internal agen, *Fault Detection, Isolation, and Reconstruction* (FDIR) untuk menjaga integritas sistem ketika sensor, aktuator, atau komunikasi gagal, serta RL untuk koordinasi kebijakan. Dalam sistem manufaktur terdistribusi — lini perakitan modular, *mobile manipulator* kolaboratif, atau jaringan *drone delivery* — kemampuan setiap agen melakukan *motion planning* sambil tetap resilient terhadap kerusakan internal adalah prasyarat keandalan (*reliability*) dan ketersediaan (*availability*) sistem yang dituntut mencapai target Overall Equipment Effectiveness (OEE) ≥ 85%.

Integrasi kedua perspektif ini — perencanaan gerak berbasis RL untuk satu agen dan arsitektur SAMAS untuk kolaborasi banyak agen — menjadi landasan Modul 2852. Modul ini mengajarkan bagaimana seorang *industrial engineer* tidak cukup hanya men-*deploy* algoritma, tetapi juga harus merancang ruang keadaan (*state space*), fungsi imbalan (*reward function*), protokol deteksi kegagalan, dan strategi rekonstruksi perilaku yang memenuhi standar keselamatan ISO 13849 (PL=d) serta IEC 61508 SIL 2 untuk aplikasi industri kritis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Markov Decision Process (MDP) sebagai Fondasi Motion Planning

Perencanaan gerak otonom diformulasikan secara matematis sebagai **Markov Decision Process** (MDP) yang didefinisikan oleh tupel:

$$
\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle
$$

dengan $\mathcal{S}$ adalah himpunan keadaan (*state*), $\mathcal{A}$ himpunan aksi, $P(s'|s,a)$ probabilitas transisi ke keadaan $s'$ ketika aksi $a$ diambil di keadaan $s$, $R(s,a)$ fungsi imbalan skalar, dan $\gamma \in [0,1)$ faktor diskon. Untuk AGV di gudang diskrit, $\mathcal{S}$ dapat berupa sel-sel *occupancy grid* dua-dimensi; untuk AMR dengan lintasan kontinu, $\mathcal{S} \subset \mathbb{R}^{4}$ mencakup posisi $(x,y)$, orientasi $\theta$, dan kecepatan $v$.

Kebijakan (*policy*) $\pi : \mathcal{S} \rightarrow \mathcal{A}$ memetakan keadaan ke aksi. Tujuan agen adalah memaksimalkan *expected cumulative discounted reward*:

$$
J(\pi) = \mathbb{E}_{\pi}\!\left[\sum_{t=0}^{\infty} \gamma^{t}\, R(s_t, a_t)\right]
$$

### 2.2. Persamaan Bellman dan Optimalitas

Fungsi nilai kebijakan $\pi$ memenuhi **Bellman Expectation Equation**:

$$
V^{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a|s)\!\left[R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a)\, V^{\pi}(s')\right]
$$

dan fungsi nilai optimal $V^{\ast}(s)$ memenuhi **Bellman Optimality Equation**:

$$
V^{\ast}(s) = \max_{a \in \mathcal{A}} \!\left[R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a)\, V^{\ast}(s')\right]
$$

Secara ekivalen, fungsi aksi-nilai Q didefinisikan:

$$
Q^{\ast}(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a'} Q^{\ast}(s', a')
$$

Kebijakan optimal lalu diperoleh dengan $\pi^{\ast}(s) = \arg\max_{a} Q^{\ast}(s,a)$ (Sutton & Barto, 2018; Kala, 2024).

### 2.3. Q-Learning dan Batas Konvergensi

Untuk lingkungan dengan $P$ dan $R$ yang tidak diketahui, *model-free* Q-learning menggunakan aturan pembaruan:

$$
Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha\!\left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)\right]
$$

dengan $\alpha \in (0,1]$ laju pembelajaran. Konvergensi ke $Q^{\ast}$ terjamin jika (i) semua pasangan $(s,a)$ dikunjungi tak hingga kali (*infinite exploration*), (ii) $\alpha_t$ memenuhi $\sum_{t} \alpha_t = \infty$ dan $\sum_{t} \alpha_t^{2} < \infty$, dan (iii) imbalan dibatasi $|r_t| \leq R_{\max} < \infty$ (Watkins & Dayan, 1992).

### 2.4. Reward Shaping untuk Motion Planning

Kala (2024) menekankan bahwa perancangan *reward function* adalah keputusan rekayasa paling kritis. Untuk lintasan aman:

$$
r_t = r_{\text{goal}} + r_{\text{collision}} + r_{\text{time}} + r_{\text{smoothness}}
$$

dengan komponen tipikal:

$$
r_{\text{goal}} = \begin{cases} +100 & \text{jika } s_t = s_{\text{target}} \\ 0 & \text{lainnya} \end{cases}, \quad
r_{\text{collision}} = -200,\quad
r_{\text{time}} = -\Delta t,\quad
r_{\text{smoothness}} = -\|u_t - u_{t-1}\|^{2}
$$

Reward *potential-based shaping* $F(s,s') = \gamma \Phi(s') - \Phi(s)$ dengan $\Phi(s)$ potensial jarak euclidean ke target menjamin optimalitas tak berubah (Ng et al., 1999).

### 2.5. Multi-Agent Reinforcement Learning (MARL) untuk SAMAS

Untuk kolaborasi $N$ agen, Borah (2024) memformulasikan masalah sebagai *Decentralized Partially Observable MDP* (Dec-POMDP):

$$
\mathcal{M}_{N} = \langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^{N}, P, \{R_i\}_{i=1}^{N}, \{\Omega_i\}_{i=1}^{N}, \{O_i\}_{i=1}^{N}, \gamma \rangle
$$

dengan $\mathcal{I}$ himpis agen, $\Omega_i$ himpunan observasi agen $i$, dan $O_i$ fungsi observasi. Kebijakan bersama $\boldsymbol{\pi} = (\pi_1,\ldots,\pi_N)$ memaksimalkan:

$$
J(\boldsymbol{\pi}) = \mathbb{E}\!\left[\sum_{t=0}^{\infty} \gamma^{t}\, \sum_{i=1}^{N} R_i(s_t, \mathbf{a}_t)\right]
$$

Implementasi praktis Borah menggunakan **QMIX**, yang menggabungkan *value decomposition* dengan *monotonic mixing network*:

$$
Q_{\text{tot}}(\boldsymbol{\tau}, \mathbf{a}) = f_{\text{mix}}\!\left(Q_1(\tau_1,a_1), \ldots, Q_N(\tau_N,a_N); \theta_{\text{mix}}\right)
$$

dengan $\partial Q_{\text{tot}} / \partial Q_i \geq 0$, menjamin *Individual-Global-Max* (IGM).

### 2.6. Formulasi FDIR (Fault Detection, Isolation & Reconstruction)

Setiap agen $i$ mempertahankan estimasi status $\hat{x}_t^{(i)}$ via *Extended Kalman Filter*:

$$
\hat{x}_{t|t-1} = f(\hat{x}_{t-1|t-1}, u_{t-1}),\qquad
P_{t|t-1} = F_t P_{t-1|t-1} F_t^{\top} + Q_t
$$

Residual deteksi $r_t = z_t - h(\hat{x}_{t|t-1})$; keputusan gagal diambil saat $\|r_t\| > \tau$ dengan $\tau$ ambang statistik (Bisa, 2024). Setelah isolasi indeks $i^{\ast}$, rekonstruksi dilakukan dengan memanfaatkan kebijakan RL agen tetangga sebagai *fallback controller*, sehingga target ketersediaan $\mathcal{A}_{\text{SAMAS}} \geq 0{,}999$ dapat dipenuhi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur rekayasa sistematis Modul 2852 mengikuti **lima tahap implementasi** yang mengintegrasikan kontribusi Kala (2024) dan Borah (2024):

**Tahap 1 — Pemetaan Lingkungan & Diskretisasi.** Buat *occupancy grid* dua-dimensi dengan resolusi $\Delta x = \Delta y = 0{,}5$ m menggunakan sensor LiDAR 2D. Tetapkan *inflation layer* 0,3 m untuk *safety margin* AGV sesuai standar VDI 2510. Setiap sel menjadi keadaan $s \in \mathcal{S}$ sehingga $|\mathcal{S}| = n_x \cdot n_y$.

**Tahap 2 — Perancangan MDP.** Tentukan himpunan aksi diskret $\mathcal{A} = \{\text{N}, \text{NE}, \text{E}, \text{SE}, \text{S}, \text{SW}, \text{W}, \text{NW}, \text{Stay}\}$ (8-connected motion) atau $\mathcal{A} = \{\text{maju}, \text{belok-kanan}, \text{belok-kiri}, \text{berhenti}\}$ sesuai *kinematic constraint*. Susun *reward shaping* dengan bob