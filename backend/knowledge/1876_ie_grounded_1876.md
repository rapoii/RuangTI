# 1876 — Perencanaan Gerak (Motion Planning) Cerdas Berbasis Reinforcement Learning untuk Sistem Robotik Otonom dan Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, in: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma industri menuju *Industry 4.0* dan *Industry 5.0* telah memunculkan kebutuhan kritis akan sistem robotik otonom yang mampu melakukan perencanaan gerak (*motion planning*) secara adaptif di lingkungan produksi yang dinamis dan penuh ketidakpastian. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier, menegaskan bahwa *reinforcement learning* (RL) telah muncul sebagai pendekatan dominan untuk menggantikan algoritma *motion planning* klasik berbasis *graph search* seperti A* dan RRT yang membutuhkan peta statis lengkap (*a-priori*). Kala berargumen bahwa dalam lantai pabrik modern—di mana AGV (*Automated Guided Vehicle*), AMR (*Autonomous Mobile Robot*), dan *collaborative robot* (cobot) harus berbagi ruang kerja dengan manusia dan peralatan bergerak lain—sistem perencanaan gerak harus mampu *belajar dari interaksi* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Konteks operasional yang menjadi perhatian utama mencakup: (1) optimalisasi *throughput* lini perakitan dengan mengurangi *cycle time* pergerakan material handling; (2) peningkatan *occupational health and safety* dengan mencegah tabrakan robot-manusia; (3) penurunan konsumsi energi melalui perencanaan lintasan efisien; dan (4) mitigasi kegagalan (*fault*) sensor atau aktuator secara *real-time*. Borah (2024), dari disertasinya, melengkapi perspektif ini dengan menunjukkan bahwa pada sistem multi-agen (seperti armada AGV di pergudangan *e-commerce*), *fault detection, isolation, and reconstruction* (FDIR) harus diintegrasikan dengan arsitektur RL sehingga agen tidak hanya merencanakan gerak optimal, tetapi juga secara otonom mendeteksi degradasi komponen dan merekonstruksi perilaku (*DOI:* [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Permasalahan industri yang dijawab mencakup downtime yang ditaksir mencapai 25–40 jam per tahun per AGV akibat kesalahan perencanaan gerak suboptimal, dengan kerugian ekonomi mencapai USD 50.000–200.000 per lini produksi per tahun. Dengan demikian, adopsi RL untuk motion planning bukan sekadar opsi teknologis, melainkan keharusan strategis bagi daya saing manufaktur modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformalkan masalah motion planning sebagai **Markov Decision Process (MDP)** yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:
- $\mathcal{S}$ = himpunan *state* (konfigurasi ruang robot: posisi, orientasi, kecepatan, status障碍),
- $\mathcal{A}$ = himpunan *action* (perintah kecepatan linear/angular atau lintasan diskret),
- $P(s'|s,a)$ = probabilitas transisi dari *state* $s$ ke $s'$ melalui aksi $a$,
- $R(s,a)$ = *reward function* langsung, dan
- $\gamma \in [0,1)$ = faktor diskonto temporal.

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman Optimalitas**:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \, V^*(s') \right]$$

Dengan mengambil argumen $\max$ terhadap aksi, kita peroleh **Q-function** optimal:

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s'} P(s'|s,a) \max_{a'} Q^*(s',a')$$

### 2.2 Algoritma Q-Learning dan Deep Q-Network (DQN)

Untuk lingkungan dengan ruang state kontinu (yang khas pada motion planning), Kala (2024) membahas penggunaan **Deep Q-Network (DQN)** yang mengaproksimasi $Q^*(s,a;\theta)$ dengan *neural network* parametrized oleh bobot $\theta$. Aturan *update* gradien menjadi:

$$\theta_{t+1} = \theta_t + \alpha \left[ y_t^{\text{target}} - Q(s,a;\theta_t) \right] \nabla_{\theta_t} Q(s,a;\theta_t)$$

di mana *target* $y_t^{\text{target}}$ didefinisikan sebagai:

$$y_t^{\text{target}} = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a'; \theta^{-})$$

dengan $\theta^{-}$ adalah bobot jaringan *target* yang diperbarui periodik (period $\tau$) untuk stabilitas (*target network* trick, Mnih et al.). Untuk masalah *continuous action space*, Kala merekomendasikan algoritma *policy gradient* seperti **DDPG (Deep Deterministic Policy Gradient)** dengan fungsi objektif:

$$J(\phi) = \mathbb{E}_{s \sim \rho^\pi} \left[ Q(s, \pi(s;\phi)) \right]$$

yang dimaksimumkan melalui *deterministic policy gradient theorem*:

$$\nabla_\phi J(\phi) = \mathbb{E}_{s} \left[ \nabla_a Q(s,a;\theta) \big|_{a=\pi(s;\phi)} \nabla_\phi \pi(s;\phi) \right]$$

### 2.3 Kinematika Holonomic dan Reward Shaping

Untuk AGV/AMR dengan kinematika diferensial (*differential drive*), model state transition-nya adalah:

$$s_{t+1} = \begin{bmatrix} x_{t+1} \\ y_{t+1} \\ \theta_{t+1} \end{bmatrix} = \begin{bmatrix} x_t + v_t \Delta t \cos\theta_t \\ y_t + v_t \Delta t \sin\theta_t \\ \theta_t + \omega_t \Delta t \end{bmatrix}$$

di mana $(x,y,\theta)$ adalah pose, $v$ kecepatan linear, dan $\omega$ kecepatan angular. Kala (2024) merekomendasikan *reward shaping* dengan fungsi:

$$R(s_t, a_t) = -w_1 \| p_t - p_g \|_2 - w_2 \| a_t \|_2^2 + w_3 \cdot \mathbb{1}_{\|p_t - p_g\|<\epsilon} - w_4 \cdot \mathbb{1}_{\text{collision}}$$

dengan $p_t = (x_t, y_t)$ posisi agen, $p_g$ posisi tujuan, dan $w_1, w_2, w_3, w_4$ bobot trade-off.

### 2.4 Multi-Agent Reinforcement Learning (MARL) untuk Armada

Borah (2024), dalam konteks SAMAS, memperluas formulasi menjadi **Decentralized Partially Observable MDP (Dec-POMDP)**, di mana setiap agen $i$ mengamati observasi parsial $o^i$ dan mempertahankan kebijakan $\pi^i(a^i|o^i)$. *Joint policy* $\boldsymbol{\pi} = (\pi^1,\dots,\pi^N)$ mengoptimalkan expected return kolektif dengan *cooperative reward*:

$$\bar{R}(\mathbf{s}, \mathbf{a}) = \sum_{i=1}^N R^i(s, a^i) - \lambda \sum_{i<j} C^{ij}(a^i, a^j)$$

di mana $C^{ij}$ adalah biaya konflik inter-agen (kolisi atau interferensi lintasan).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *reinforcement learning-based motion planning* di industri mengikuti protokol rekayasa terstruktur yang terdiri dari delapan tahap menurut Kala (2024) dan diperkuat oleh Borah (2024) untuk skenario multi-agen:

**Tahap 1 – Analisis Lingkungan dan Pemetaan State-Action.** Identifikasi *workspace* fisik (lantai pabrik, gudang, jalur logistik), diskretisasi atau representasi kontinu state space menggunakan sensor (*LiDAR 2D/3D*, kamera stereo, IMU), dan pendefinisian action space sesuai kemampuan kinematik robot.

**Tahap 2 – Perancangan Reward Function.** Reward harus *sparse* (berbasis pencapaian tujuan) atau *dense* (berbasis progress), dengan *penalty* tegas untuk tabrakan dan pelanggaran zona aman manusia (sesuai ISO 13849 dan ISO/TS 15066 untuk kolaborasi manusia-robot).

**Tahap 3 – Pemilihan Algoritma.** Untuk state diskret-kecil gunakan *tabular Q-learning*; untuk state kontinu gunakan DQN/Double DQN/Dueling DQN; untuk aksi kontinu gunakan DDPG/TD3/SAC; untuk multi-agen gunakan MADDPG atau QMIX.

**Tahap 4 – Simulasi dan Pre-Training.** Gunakan *digital twin* (Gazebo, NVIDIA Isaac Sim, Unity ML-Agents) untuk melatih kebijakan selama $\sim 10^5$–$10^6$ episode.

**Tahap 5 – Sim-to-Real Transfer.** Terapkan *domain randomization* pada parameter fisik (massa, gesekan, latency sensor) untuk memastikan robustnes.

**Tahap 6 – Validasi di Lintasan Tes.** Ukur metrik: *success rate*, *average path length*, *collision rate*, *completion time*, dan *energy consumption*.

**Tahap 7 – Integrasi FDIR (Borah, 2024).** Pasang modul nonlinear filtering (Extended Kalman Filter / Particle Filter) untuk mendeteksi anomali sensor/aktuator; jika terdeteksi, aktifkan *reconstruction policy* yang memaksimalkan *safety constraint*:

$$\pi_{\text{safe}}(s) = \arg\max_{\pi} \min_{a \in \mathcal{A}_{\text{safe}}} Q(s,a)$$

**Tahap 8 – Pemantauan Berkelanjutan dan Re-training.** Log seluruh episode ke *edge server* untuk *federated learning* antar armada.

Standar acuan industri: ISO 3691-4 (driverless industrial trucks), ISO 10218 (robot industri), ANSI/RIA R15.08 (mobile robot safety), serta IEC 61508 untuk integritas fungsional sistem.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Pertimbangkan sebuah lini perakitan otomotif dengan **armada 4 AMR** yang harus memindahkan komponen dari *stasiun buffer* ke *assembly line* dalam *grid* 20×20 meter. Setiap sel berukuran 1 m², dengan rintangan tetap 15% dari total luas. Asumsikan AMR menggunakan *differential drive* ($v_{\max}=0.5$ m/s, $\omega_{\max}=1.0$ rad/s) dengan time step $\Delta t = 0.5$ s.

### 4.2 Definisi State-Action-Reward

- $\mathcal{S}$: tupel $(\text{posisi}, \text{orientasi}, \text{jarak ke tujuan})$. Kontinu → direpresentasikan sebagai vektor fitur berdimensi $d=12$.
- $\mathcal{A}$: $\{0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°\}$ (8 arah diskret) atau kontinu $(v,\omega)$.
- Reward: $R = -0.1 + 100 \cdot \mathbb{1}_{\text{goal}} - 50 \cdot \mathbb{1}_{\text{collision}}$.

### 4.3 Perhitungan Langkah Q-Learning (Episode Pertama, Tabular)

Ambil sampel transisi: agen di state $s_t$ (koordinat $(2,3)$, heading $90°$), mengeksekusi $a_t = \text{forward}$, transisi ke $s_{t+1} = (2,4)$, menerima $r_{t+1} = -0.1$, dan $\gamma = 0.95$, $\alpha = 0.1$.

Hitung TD-target:
$$y_t = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') = -0.1 + 0.95 \cdot \max_{a'} Q(s_{t+1}, a')$$

Asumsikan setelah inisialisasi acak $\max_{a'} Q(s_{t+1}, a') \approx 5.4$, maka $y_t = -0.1 + 0.95 \times 5.4 = 5.03$.

Update Q-value:
$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha [y_t - Q(s_t, a_t)] = 3.2 + 0.1 \times [5.03 - 3.2
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
