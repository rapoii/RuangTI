# 2836 — Perencanaan Gerak Otomatis Robot Bergerak Menggunakan Reinforcement Learning untuk Sistem Industri Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, in *Autonomous Mobile Robots: Planning, Navigation, and Perception for Intelligent Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Repository (Figshare). DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mengubah secara fundamental arsitektur lantai produksi, pergudangan, dan rantai pasok global. Salah satu pilar utamanya adalah adopsi *Autonomous Mobile Robots* (AMR) untuk menggantikan proses material handling yang selama decades didominasi oleh *Automated Guided Vehicles* (AGV) berbasis lintasan tetap. Rahul Kala (2024) dalam bab *Motion planning using reinforcement learning* dari buku *Autonomous Mobile Robots* (Elsevier, DOI: 10.1016/b978-0-443-18908-1.00016-9) menegaskan bahwa kemampuan AMR untuk bernavigasi secara otonom di lingkungan *dynamic, partially observable*, dan *uncertain* merupakan pembeda struktural dibanding AGV klasik yang beroperasi pada trajectories deterministik yang telah diprogram sebelumnya. Kala menyatakan bahwa permintaan pasar global untuk AMR di sektor manufaktur, e-commerce fulfillment, dan healthcare logistics tumbuh dengan CAGR rata-rata 23–25% selama periode 2020–2025, sehingga membuat kemampuan perencanaan gerak (*motion planning*) menjadi *core competency* kompetitif bagi integrator sistem otomasi industri.

Permasalahan mendasar yang diangkat Kala (2024) adalah bagaimana mengonstruksi kebijakan navigasi $\pi: S \rightarrow A$ yang memetakan keadaan (*state*) lingkungan ke aksi motorik robot sedemikian rupa sehingga tercapai tujuan (misalnya, mengambil pallet di rak B-12) dengan konsumsi energi minimum, *collision-free*, dan waktu siklus deterministik. Pendekatan konvensional seperti *A\* search*, *Rapidly-exploring Random Trees* (RRT), dan *Probabilistic Roadmaps* (PRM) gagal secara sistematis ketika menghadapi (1) lingkungan dengan obstacle bergerak seperti AGV lain atau pekerja manusia, (2) perubahan layout gudang secara periodik, dan (3) kebutuhan *re-planning* real-time dengan latensi < 100 ms. Untuk mengatasi keterbatasan ini, Kala mengusulkan penggunaan *Reinforcement Learning* (RL) sebagai *paradigm* perencanaan gerak yang *data-driven*, adaptif, dan mampu belajar dari interaksi trial-and-error tanpa memerlukan model eksplisit dinamika lingkungan.

Komplementer dengan temuan Kala, Kaustav Borah (2024) dalam disertasinya *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (DOI: 10.32920/25412566.v1) memperkenalkan arsitektur *Smart Autonomous Multi-agent Systems* (SAMAS) yang mengintegrasikan RL dengan *nonlinear filtering* untuk memenuhi fungsi *Fault Detection, Isolation, and Reconstruction* (FDIR) pada sistem multi-robot. Borah menekankan bahwa pada skala fleet AMR yang terdiri dari 50–500 unit, kemampuan setiap agen untuk membuat keputusan gerak lokal sambil mempertahankan koordinasi global menjadi krusial untuk menjaga *throughput* operasional. Konteks industri ini — mulai dari gudang Amazon yang mengoperasikan > 750.000 unit AMR, hingga lini perakitan Toyota yang menggunakan 200+ AGV/AMR simultan — menunjukkan urgensi operasional dan ekonomis dari riset Kala dan Borah bagi komunitas Teknik Industri. Investasi modal untuk satu unit AMR berkisar USD 25.000–75.000, sehingga *downtime* akibat kegagalan motion planning memiliki dampak finansial yang sangat material.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformulasikan masalah perencanaan gerak AMR sebagai *Markov Decision Process* (MDP) berhingga yang didefinisikan oleh tupel 5-elemen:

$$\mathcal{M} = \langle S, A, P, R, \gamma \rangle$$

di mana:
- $S$ = himpunan *state* (keadaan diskret atau kontinyu) yang merepresentasikan konfigurasi robot dan lingkungannya, misalnya posisi $(x, y)$, orientasi $\theta$, dan jarak ke obstacle terdekat $d_{obs}$.
- $A$ = himpunan *action* (aksi diskret atau kontinyu) seperti $\{ \text{North}, \text{South}, \text{East}, \text{West}, \text{Stop} \}$ untuk diskret, atau $\{v, \omega\}$ (kecepatan linear dan angular) untuk kontinyu.
- $P(s'|s,a)$ = probabilitas transisi ke state $s'$ jika mengambil aksi $a$ di state $s$.
- $R(s, a, s')$ = *reward function* skalar.
- $\gamma \in [0, 1)$ = *discount factor* yang menurunkan bobot reward di masa depan.

### 2.2 Persamaan Bellman dan Optimal Value Function

Tujuan RL adalah menemukan kebijakan $\pi^*$ yang memaksimalkan ekspektasi *cumulative discounted reward*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

*State-value function* untuk kebijakan $\pi$ didefinisikan sebagai:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s \right]$$

Yang memenuhi *Bellman equation*:

$$V^{\pi}(s) = \sum_{a \in A} \pi(a|s) \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma V^{\pi}(s') \right]$$

Fungsi nilai optimal $V^*(s) = \max_{\pi} V^{\pi}(s)$ memenuhi *Bellman optimality equation*:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

### 2.3 Q-Learning dan Pembaruan Nilai

Karena transisi probabilistik $P(s'|s,a)$ sulit diketahui di lingkungan industri nyata, Kala (2024) menggunakan *model-free* algoritma Q-Learning yang mempelajari *action-value function* $Q(s,a)$ secara langsung melalui interaksi:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Bukti konvergensi Q-Learning ke $Q^*(s,a)$ untuk semua pasangan $(s,a)$ telah diberikan oleh Watkins & Dayan (1992) dengan syarat $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.4 Fungsi Reward untuk Motion Planning

Kala merancang fungsi reward dengan komposisi multi-komponen untuk memenuhi kendala operasional industri:

$$R(s, a, s') = R_{goal} + R_{obs} + R_{step} + R_{energy}$$

Secara eksplisit:

$$R(s,a,s') = \begin{cases} +100 & \text{jika } s' = s_{goal} \\ -50 & \text{jika } s' \in S_{obstacle} \\ -1 & \text{untuk setiap langkah biasa} \\ -0.05 \cdot |v| & \text{beban energi proporsional} \end{cases}$$

di mana $|v|$ adalah magnitude kecepatan linear. Komponen ini menjamin bahwa robot mencapai target dengan cepat tanpa menabrak obstacle dan meminimalkan konsumsi energi baterai.

### 2.5 Deep Q-Network (DQN) untuk State Kontinyu

Untuk ruang state kontinyu dimensi tinggi (misalnya citra kamera LiDAR), Kala (2024) menggunakan *Deep Q-Network* (DQN) yang mengaproksimasi $Q(s,a;\theta)$ dengan *neural network* parameterized by weights $\theta$. Fungsi loss yang diminimisasi:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a; \theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang di-*update* secara periodik, dan $\mathcal{D}$ adalah *replay buffer* yang menyimpan transisi eksperien.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Industri

Berdasarkan kerangka Kala (2024) dan integrasi SAMAS Borah (2024), prosedur implementasi motion planning RL untuk AMR industri mengikuti pipeline tujuh tahap:

**Tahap 1 — Pemetaan Lingkungan (SLAM):** Robot melakukan *Simultaneous Localization and Mapping* menggunakan sensor LiDAR 2D/3D dan/atau kamera stereo untuk membangun occupancy grid $G \in \{0,1\}^{m \times n}$ dengan resolusi sel tipikal 0.05–0.20 m.

**Tahap 2 — Diskretisasi State Space:** Konfigurasi kontinyu $(x, y, \theta)$ didiskretisasi menjadi indeks sel grid: $s = (i, j, k)$ dengan $i \in [1,m]$, $j \in [1,n]$, dan $k$ merepresentasikan 8 orientasi diskret.

**Tahap 3 — Inisialisasi Q-Table atau Neural Network:** 
- Untuk grid ≤ 100×100 sel, gunakan tabular Q-Learning dengan $Q \in \mathbb{R}^{|S| \times |A|}$ diinisialisasi nol atau nilai kecil $\epsilon$.
- Untuk ruang state > $10^6$, inisialisasi CNN dengan bobot He initialization.

**Tahap 4 — Pelatihan Offline/Simulasi:** Robot dijalankan di *digital twin* (Gazebo, NVIDIA Isaac Sim) selama $N_{episodes}$ episode dengan $\epsilon$-greedy exploration:

$$a_t = \begin{cases} \arg\max_a Q(s_t, a) & \text{dengan probabilitas } 1-\epsilon \\ \text{acak} & \text{dengan probabilitas } \epsilon \end{cases}$$

dengan $\epsilon$ decay: $\epsilon_t = \epsilon_{min} + (\epsilon_{max} - \epsilon_{min}) \cdot e^{-\lambda t}$.

**Tahap 5 — Validasi Hardware-in-the-Loop (HIL):** Kebijakan $\pi^*$ di-*test* pada unit AMR fisik di *test track* berisolasi dengan barrier safety, mengikuti standar **ISO 3691-4:2020** untuk *Driverless industrial trucks*.

**Tahap 6 — Deployment dan Continual Learning:** Robot beroperasi di fasilitas produksi dengan *continual learning* — data eksperien baru diunggah ke *central server* untuk *retraining* periodik (tiap 24–168 jam).

**Tahap 7 — Integrasi FDIR (Borah, 2024):** Mekanisme FDIR di-*overlay* untuk mendeteksi degradasi sensor/aktuator: jika residual filter Kalman > threshold $\tau$, agen akan melakukan *safe-stop* dan mengirim alarm ke fleet management system.

### 3.2 Diagram Alur Logika

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Sensor Fusion  │───▶│ State Estimation │───▶│ RL Policy π*    │
│ (LiDAR+IMU+Cam) │    │   (EKF/UKF)      │    │   (DQN)         │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                      │
                                                      ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Replay Buffer │◀───│   Environment    │◀───│  Action a_t     │
│      𝒟          │    │ (Occupancy Grid) │    │  (v, ω)         │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 3.3 SOP Kesel