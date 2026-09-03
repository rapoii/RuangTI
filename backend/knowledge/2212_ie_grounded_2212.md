# 2212 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning untuk Sistem Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning using Reinforcement Learning pada Robot Otonom dan Sistem Multi-Agen Cerdas
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Dissertation Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 memaksa lantai pabrik, gudang distribusi, pelabuhan kargo, dan fasilitas pertanian presisi untuk mengadopsi *Autonomous Mobile Robots* (AMR) sebagai tulang punggung otomatisasi. Dalam konteks ini, *motion planning* — proses menentukan lintasan optimal dari konfigurasi awal ke konfigurasi target di ruang kerja yang mungkin bersifat statis maupun dinamis — menjadi kompetensi teknis yang menentukan throughput, keselamatan kerja, dan biaya operasional. Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan Elsevier secara eksplisit menyatakan bahwa Reinforcement Learning (RL) merevolusi pendekatan tradisional motion planning karena kemampuannya menangani ruang状态 (*state space*) kontinu berdimensi tinggi yang sebelumnya tidak dapat dipecahkan secara *closed-form* oleh algoritma klasik seperti A*, RRT, atau Potential Fields (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Urgensi ekonomi dari adopsi teknologi ini sangat konkret. Menurut proyeksi yang dikutip dalam literatur AMR global, pasar robot otonom bergerak dari USD 4,9 miliar pada 2023 menjadi lebih dari USD 12 miliar pada 2030, didorong oleh krisis tenaga kerja di sektor logistik dan kebutuhan akan *order fulfillment* dalam hitungan menit pada e-commerce. AMR yang dilengkapi RL *motion planner* dapat mengurangi *downtime* hingga 35% karena mampu beradaptasi terhadap perubahan tata letak gudang (*dynamic re-layout*) tanpa memerlukan rekode program secara manual. Lebih jauh, Kala (2024) menekankan bahwa RL memungkinkan robot belajar dari interaksi nyata dengan lingkungan (*sample-efficient learning*), sehingga biaya commissioning turun signifikan.

Pada tataran sistem multi-agen, Borah (2024) menunjukkan bahwa arsitektur *Smart Autonomous Multi-Agent Systems* (SAMAS) menggabungkan RL dengan *nonlinear filtering* untuk kebutuhan *Fault Detection, Isolation, and Reconstruction* (FDIR) (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Pendekatan ini relevan bagi industri manufaktur dan energi yang mengoperasikan armada robot dalam jangka panjang, di mana degradasi sensor, aktuator, dan komunikasi jaringan nirkabel menjadi tantangan operasional harian. Dengan mengintegrasikan deteksi anomali berbasis Kalman Filter/Particle Filter ke dalam kerangka RL multi-agen, sistem dapat mengisolasi kegagalan agen dan melakukan *task reallocation* secara otonom — mempertahankan tingkat availability yang tinggi.

Konteks aplikasi riil mencakup: (1) *Automated Storage and Retrieval Systems* (AS/RS) di gudang Amazon, Alibaba, dan DHL; (2) AGV (*Automated Guided Vehicle*) di lini perakitan Toyota, BMW, dan Tesla; (3) *Unmanned Ground Vehicles* (UGV) di pertambangan Rio Tinto dan BHP; (4) robot layanan di rumah sakit dan bandara; serta (5) armada drone di pertanian presisi. Dalam seluruh skenario ini, motion planning berbasis RL tidak hanya berfungsi sebagai algoritma navigasi, tetapi juga sebagai mekanisme pengambilan keputusan optimal yang mempertimbangkan keselamatan manusia, efisiensi energi, dan kolaborasi multi-robot.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) merumuskan masalah motion planning sebagai MDP yang didefinisikan oleh tupel $\mathcal{M} = \langle S, A, P, R, \gamma \rangle$, di mana:

- $S$ : himpunan *state* (konfigurasi robot dan posisi障碍 dalam ruang状态 kontinu atau diskret).
- $A$ : himpunan aksi (*action*) berupa perintah kecepatan linier $v$ dan kecepatan sudut $\omega$ pada differential-drive robot.
- $P(s' \mid s, a)$ : probabilitas transisi ke state $s'$ dari state $s$ melalui aksi $a$.
- $R(s, a, s')$ : fungsi *reward* yang memberikan sinyal evaluasi kualitas lintasan.
- $\gamma \in [0,1)$ : faktor diskon (*discount factor*) untuk horizon tak hingga.

Tujuan utama adalah menemukan *policy* optimal $\pi^* : S \rightarrow A$ yang memaksimumkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k}, s_{t+k+1})$$

### 2.2 Persamaan Bellman dan Value Function

Fungsi nilai (*value function*) untuk policy $\pi$ didefinisikan oleh Kala (2024) sebagai:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[ \sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k}, s_{t+k+1}) \mid s_t = s \right]$$

Yang memenuhi bentuk rekursif *Bellman expectation equation*:

$$V^{\pi}(s) = \sum_{a \in A} \pi(a \mid s) \sum_{s' \in S} P(s' \mid s, a) \left[ R(s, a, s') + \gamma V^{\pi}(s') \right]$$

Secara ekuivalen, *action-value function* atau *Q-function* adalah:

$$Q^{\pi}(s, a) = \sum_{s' \in S} P(s' \mid s, a) \left[ R(s, a, s') + \gamma \sum_{a' \in A} \pi(a' \mid s') Q^{\pi}(s', a') \right]$$

*Optimal Q-function* memenuhi *Bellman optimality equation*:

$$Q^*(s, a) = \sum_{s' \in S} P(s' \mid s, a) \left[ R(s, a, s') + \gamma \max_{a'} Q^*(s', a') \right]$$

### 2.3 Algoritma Q-Learning dan Deep Q-Network (DQN)

Untuk kasus di mana $P(s' \mid s, a)$ tidak diketahui (*model-free*), Kala (2024) mengusulkan Q-Learning dengan aturan pembaruan iteratif:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah *learning rate*. Untuk menangani ruang状态 kontinu berdimensi tinggi, digunakan Deep Q-Network dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right]$$

dengan $\theta^-$ adalah parameter *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer* (Kala, 2024).

### 2.4 Desain Fungsi Reward untuk Motion Planning

Reward function dirancang secara hati-hati untuk mengarahkan agen RL pada perilaku yang diinginkan:

$$r(s, a, s') = \begin{cases} +R_{\text{goal}} & \text{jika } s' \in S_{\text{goal}} \\ -R_{\text{collision}} & \text{jika } s' \in S_{\text{collision}} \\ -\lambda \| p_{t+1} - p_{\text{goal}} \|_2 + r_{\text{smoothness}} & \text{lainnya} \end{cases}$$

di mana $r_{\text{smoothness}} = -\mu \| a - a_{\text{prev}} \|^2$ menandakan penalti perubahan aksi mendadak untuk mencegah osilasi lintasan.

### 2.5 Multi-Agent Reinforcement Learning (MARL) dan FDIR

Borah (2024) memperluas kerangka RL ke sistem multi-agen SAMAS dengan formulasi *Decentralized Partially Observable MDP* (Dec-POMDP):

$$\langle I, S, A, O, P, R, \gamma \rangle$$

di mana setiap agen $i \in I$ memilih aksi berdasarkan observasi lokal $o_i \in O_i$, dan reward bersama $R$ mengoordinasikan perilaku *cooperative*. Untuk deteksi anomali, residual sensor dimodelkan melalui *Extended Kalman Filter* (EKF):

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t \left( z_t - h(\hat{x}_{t|t-1}) \right)$$

dengan *innovation sequence* $\nu_t = z_t - h(\hat{x}_{t|t-1})$ yang diuji menggunakan *chi-square test* untuk isolasi故障 (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP berlapis sebagai berikut (disintesis dari Kala, 2024 dan Borah, 2024):

**Tahap 1 — Pemodelan Ruang Kerja.** Definisikan *occupancy grid* atau *configuration space* ($\mathcal{C}$-space) dengan resolusi $\Delta x, \Delta y$. Tentukan *static obstacles* (rak, pilar, mesin) dan *dynamic obstacles* (pejalan kaki, AGV lain). Ukuran grid tipikal untuk gudang 50.000 m² adalah $500 \times 500$ sel dengan resolusi 0,5 m.

**Tahap 2 — Diskretisasi Aksi.** Untuk differential-drive robot, gunakan aksi diskret $(v, \omega) \in \{0.5, 1.0, 1.5\} \text{ m/s} \times \{-1.0, -0.5, 0, 0.5, 1.0\} \text{ rad/s}$, menghasilkan 15 kombinasi aksi.

**Tahap 3 — Desain Arsitektur RL.** Pilih algoritma sesuai kompleksitas:
- **Q-Learning Tabel** untuk grid $\leq 100 \times 100$.
- **DQN** dengan arsitektur CNN (untuk input peta) atau MLP (untuk input fitur LiDAR) untuk grid lebih besar.
- **PPO / SAC** untuk aksi kontinu dan keamanan tinggi (ISO 13482 untuk robot layanan).
- **MADDPG / QMIX** untuk skenario multi-agen kolaboratif (Borah, 2024).

**Tahap 4 — Pelatihan dan Validasi.** Gunakan simulator Gazebo / Isaac Sim / Webots dengan *digital twin* pabrik. Latih selama $10^6$ – $10^7$ episode dengan $\epsilon$-greedy exploration ($\epsilon$ decay dari 1,0 ke 0,01). Validasi silang menggunakan *k-fold cross-validation* dengan $k=5$.

**Tahap 5 — Integrasi FDIR dan Keselamatan.** Pasang *safety layer* dengan *Control Barrier Function* (CBF) yang menjamin *forward invariance*:

$$\dot{h}(x) + \alpha h(x) \geq 0$$

di mana $h(x) \geq 0$ adalah himpunan aman. Implementasikan *watchdog* berbasis EKF dari Borah (2024) untuk memantau residual sensor dan memicu *safe stop* jika $\|\nu_t\|^2 > \chi^2_{0.95, n}$ (Borah, 2024).

**Tahap 6 — Deployment dan Monitoring.** Deploy policy terlatih ke ROS2 (*Robot Operating System* 2) Humble/Iron dengan node frekuensi 20 Hz. Pantau *metrics* KPI industri: *mean time between failures* (MTBF), *collision rate*, *task completion rate*, dan *energy consumption per mission* (kWh).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AGV di Gudang E-Commerce

Pertimbangkan AGV dengan *state* diskret pada grid $10 \times 10$ sel, masing-masing berukuran $1 \text{ m} \times 1 \text{ m}$. AGV harus bergerak dari state awal $s_0 = (0,0)$ ke state tujuan $s_g = (9,9)$, menghindari障碍 pada sel $(4,4)$, $(4,5)$, $(5,4)$, $(5,5)$.

**Parameter RL:**
- $\alpha = 0.1$ (learning rate)
- $\gamma = 0.9$ (discount factor)
- $\epsilon = 0.1$ (eksplorasi)
- $R_{\text{goal}} = +100$, $R_{\text{collision}} = -100$, $R_{\text{step}} = -1$

**Inisialisasi Q-Table:** $Q(s,a) = 0$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
