# 2020 — Pengendalian Armada Robot Mobil Otonom (AMR) Berbasis Pembelajaran Penguatan (Reinforcement Learning): Tinjauan Sistematis, Formulasi Matematis, dan Standar Interoperabilitas VDA5050

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Controlling Fleets of Autonomous Mobile Robots with Reinforcement Learning: A Brief Survey
**Jurnal & Sitasi Utama:** Mike Wesselhöft, Johannes Hinckeldeyn, Jochen Kreutzfeldt (2022). *Robotics*, 11(5), 85. DOI: [https://doi.org/10.3390/robotics11050085](https://doi.org/10.3390/robotics11050085)
**Sitasi Pendukung:** Niels van Duijkeren, Luigi Palmieri, Ralph Lange (2023). *arXiv (Cornell University)*, 2311.14615. DOI: [https://doi.org/10.48550/arxiv.2311.14615](https://doi.org/10.48550/arxiv.2311.14615)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan e-commerce global yang diproyeksikan mencapai USD 8,1 triliun pada 2026 (Statista, 2023) telah memaksa pelaku industri manufaktur dan logistik untuk mengadopsi *Autonomous Mobile Robots* (AMR) sebagai tulang punggung intralogistik. Wesselhöft, Hinckeldeyn, dan Kreutzfeldt (2022) dalam survei mereka di jurnal *Robotics* (DOI: 10.3390/robotics11050085) menekankan bahwa pengendalian armada AMR bukan sekadar masalah pemrograman robotik, melainkan **masalah optimasi kombinatorial berskala besar** dengan kompleksitas eksponensial terhadap jumlah unit dan ukuran fasilitas. Pengendalian armada AMR secara tradisional mengandalkan tiga pendekatan: (1) *heuristics* seperti algoritma A* dan tabu search yang cepat tetapi suboptimal; (2) *mathematical programming* (mixed-integer linear programming/MILP) yang menjamin optimalitas tetapi mahal secara komputasional; serta (3) *Multi-Agent Systems* (MAS) berbasis aturan deterministik (van Duijkeren, Palmieri, & Lange, 2023, DOI: 10.48550/arxiv.2311.14615).

Urgensi ekonomis pengendalian armada AMR sangat nyata. Pasar AMR global bernilai USD 4,9 miliar pada 2023 dan diproyeksi tumbuh pada CAGR 15,5% hingga 2030 (Grand View Research, 2024). Dalam konteks ini, *Reinforcement Learning* (RL) muncul sebagai paradigma optimasi berbasis hadiah (*reward-based optimization*) yang secara inheren dirancang untuk menemukan kebijakan optimal dalam lingkungan stokastik dengan state-space besar. Wesselhöft et al. (2022) mengidentifikasi **enam masalah fundamental** yang harus dipecahkan RL dalam konteks ini: *task assignment*, *path planning*, *traffic management*, *battery management*, *fleet sizing*, dan *heterogeneity handling*. Tanpa orkestrasi cerdas, investasi miliaran dolar pada hardware AMR akan sia-sia karena inefisiensi koordinasi yang menimbulkan *deadlock*, *congestion*, dan *waiting time* yang menurunkan *throughput* hingga 30-40%.

Sementara itu, van Duijkeren et al. (2023) menyoroti bahwa ekosistem industri modern semakin heterogen: AMR harus beroperasi berdampingan dengan *Automated Guided Vehicles* (AGV) warisan, kendaraan yang dikemudikan manusia, dan pekerja di fasilitas *mixed-traffic*. Standar VDA5050 yang dipublikasikan oleh *Verband der Automobilindustrie* (Verein Deutscher Automobilindustrie) bersama *Verband Deutscher Maschinen- und Anlagenbau* (VDMA) menjadi protokol komunikasi terbuka antara *Fleet Management System* (FMS) dan AMR, memungkinkan interoperabilitas lintas-vendor. Kombinasi RL untuk *decision-making* tingkat tinggi dan VDA5050 untuk interoperabilitas komunikasi tingkat rendah merepresentasikan arsitektur referensi industri 4.0 kontemporer. Bagian selanjutnya akan memformulasikan masalah ini secara matematis dan menyajikan prosedur operasional berbasis bukti.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP) untuk Fleet Control

Masalah pengendalian armada AMR diformulasikan secara formal sebagai *Markov Decision Process* (MDP) tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ menurut kerangka Wesselhöft et al. (2022). Untuk armada dengan $N$ robot homogen, *state space* gabungan didefinisikan sebagai:

$$\mathcal{S} = \mathcal{S}_1 \times \mathcal{S}_2 \times \dots \times \mathcal{S}_N$$

di mana $\mathcal{S}_i = \{x_i, y_i, \theta_i, b_i, l_i\}$ merepresentasikan *state* individual robot $i$, berturut-turut: posisi kartesian, orientasi heading, level baterai, dan status beban (loaded/unloaded). *Action space* $\mathcal{A}$ adalah himpunan aksi diskret atau kontinyu yang tersedia, termasuk perintah navigasi kecepatan linier/angular, instruksi *pick-up*, dan *drop-off*.

Fungsi transisi probabilistik $P(s'|s,a)$ memodelkan dinamika lingkungan stokastik, sementara *reward function* dirancang untuk menyeimbangkan beberapa tujuan operasional:

$$R(s_t, a_t) = w_1 \cdot R_{\text{thr}}(t) - w_2 \cdot R_{\text{delay}}(t) - w_3 \cdot R_{\text{conflict}}(t) - w_4 \cdot R_{\text{energy}}(t)$$

dengan bobot $w_k$ sebagai parameter *multi-objective optimization* yang biasa disetel melalui *preference elicitation* atau *Bayesian optimization*. Komponen throughput reward $R_{\text{thr}}(t) = \mathbb{1}[\text{task selesai pada siklus } t]$, delay penalty $R_{\text{delay}}(t) = -\Delta t_{\text{completion}}$, conflict penalty $R_{\text{conflict}}(t) = -\mathbb{1}[\text{konflik terdeteksi}]$, dan energi penalty $R_{\text{energy}}(t) = -\Delta b_{\text{consumed}}$.

### 2.2 Persamaan Bellman dan Q-Learning Update

Tujuan RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}, \quad \gamma \in [0,1)$$

Sesuai kerangka Bellman, *value function* optimal memenuhi:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^*(s') \right]$$

Untuk implementasi praktis tanpa akses ke $P(s'|s,a)$, algoritma *Q-learning* mengestimasi *action-value function* melalui update iteratif:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah *learning rate* (umumnya $\alpha = 10^{-3}$ hingga $10^{-1}$ dengan jadwal *decay* eksponensial). Untuk armada berskala besar dengan state-space dimensional tinggi, Wesselhöft et al. (2022) merekomendasikan penggunaan *Deep Q-Network* (DQN) dengan *function approximator* $Q(s,a;\theta)$ berparameter $\theta$ yang dioptimasi melalui minimisasi *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* berukuran $10^5$ hingga $10^6$ transisi untuk mitigasi *correlation bias*.

### 2.3 Multi-Agent RL dan Dec-POMDP

Untuk armada dengan $N > 1$, masalah diperluas menjadi *Decentralized Partially Observable MDP* (Dec-POMDP) tuple $\langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}, P, \{R_i\}, \gamma \rangle$ dengan $i \in \{1,\dots,N\}$ robot. Setiap agen mempertahankan keyakinan (*belief*) $b_i \in \Delta(\mathcal{S})$ terhadap state lingkungan dan memaksimalkan *joint value function*:

$$V^*(\mathbf{b}) = \max_{\pi_1,\dots,\pi_N} \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t \sum_{i=1}^{N} R_i(s_t, a_t^i) \bigg| \mathbf{b}_0, \pi_1, \dots, \pi_N \right]$$

van Duijkeren et al. (2023) mencatat bahwa kompleksitas Dec-POMDP adalah *NEXP-complete*, sehingga dalam praktik industri digunakan *Centralized Training with Decentralized Execution* (CTDE) melalui algoritma seperti MADDPG (Multi-Agent Deep Deterministic Policy Gradient) atau QMIX.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Tiga-Lapis (Three-Tier Architecture)

Berdasarkan temuan Wesselhöft et al. (2022) dan diperkuat oleh kerangka VDA5050 dari van Duijkeren et al. (2023), arsitektur pengendalian AMR industri direkomendasikan dalam tiga lapisan:

1. **Tier 1 – Fleet Management System (FMS):** Menjalankan algoritma RL tingkat armada, menerima *order stream* dari WMS (*Warehouse Management System*), melakukan *task allocation* dan *dispatching*, mengomunikasikan misi ke robot melalui protokol VDA5050 (MQTT message broker dengan topik `uagv/v1/{vendor}/{serial}/order` dan `uagv/v1/{vendor}/{serial}/state`).
2. **Tier 2 – Coordination Layer:** Berisi *local planner* seperti *Reciprocal Velocity Obstacles* (RVO) atau *Optimal Reciprocal Collision Avoidance* (ORCA) untuk resolusi konflik *real-time* dalam horizon 1–3 detik.
3. **Tier 3 – Robot Onboard Controller:** Mengendalikan aktuator *low-level* (motor penggerak, lidar, IMU) pada frekuensi 50–100 Hz dengan arsitektur ROS2 *node-based* sesuai standar *Open Robotics Middleware Framework* (OpenRMF).

### 3.2 SOP Implementasi RL untuk Fleet AMR

**Tahap 1: Pemodelan Lingkungan (Environment Modeling).** Bangun representasi state ruang diskret atau kontinyu menggunakan *occupancy grid map* (resolusi 0,1–0,5 m per cell) atau *semantic graph map* dengan node-node waypoint. Lakukan *domain randomization* terhadap parameter dinamika (koefisien gesekan, latensi komunikasi, akurasi sensor) untuk meningkatkan *robustness* terhadap kesenjangan *sim-to-real*.

**Tahap 2: Desain Reward Function.** Terapkan *reward shaping* secara hati-hati untuk menghindari *reward hacking*. Wesselhöft et al. (2022) merekomendasikan kombinasi reward *sparse* (berbasis penyelesaian tugas) dan *dense* (berbasis jarak ke goal, kecepatan, atau proximity penalty).

**Tahap 3: Pelatihan dalam Simulator (Sim2Real).** Gunakan simulator seperti NVIDIA Isaac Sim, Gazebo, atau Webots dengan akurasi fisika tinggi. Lakukan *curriculum learning* dari skenario sederhana (1 robot, 1 target) hingga kompleks (20+ robot, lalu lintas padat). Target episode pelatihan: $5 \times 10^5$ hingga $5 \times 10^6$ episode.

**Tahap 4: Validasi dan Deployment.** Terapkan protokol *Safety Assurance* sesuai ISO 13849 (Performance Level d) dan ISO/TS 15066 (collaborative robots). Implementasikan *shadow mode* deployment di mana kebijakan RL berjalan paralel dengan sistem konvensional selama 2–4 minggu untuk validasi *safety envelope*.

**Tahap 5: Pemantauan Berkelanjutan.** Pasang *telemetry dashboard* yang melacak metrik: *mean time between collisions* (MTBC), *task completion rate*, *battery utilization rate*, dan *policy drift*. Lakukan *periodic retraining* setiap 3–6 bulan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Pertimbangkan fasilitas e-commerce di Indonesia (luas 5.000 m²) dengan **$N = 12$ unit AMR homogen** mengangkut *totes* dari *inbound docking* ke *picking stations* sepanjang *fulfillment process*. Tujuan RL adalah meminimalkan *makespan* pesanan harian sambil mencegah konflik.

**Parameter Input Industri:**
- Kecepatan AMR maksimum: $v_{\max} = 1{,}5$ m/s
- Kapasitas baterai: $b_{\text{cap}} = 100$ Wh, konsumsi $0{,}5$ Wh/meter
- Throughput pesanan target: $\lambda = 180$ pesanan/jam
- Panjang koridor utama: 60 m, lebar 2,5 m
- Tingkat kedatangan pesanan: Poisson dengan rate $\mu = 180$ pesanan/jam
- *Discount factor*: $\gamma = 0{,}99$
- *Learning rate*: $\alpha = 0{,}0005$

### 4.