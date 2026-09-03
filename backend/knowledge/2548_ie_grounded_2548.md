# 2548 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning menggunakan reinforcement learning (RL) untuk autonomous mobile robots dan smart autonomous multi-agent systems (SAMAS)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan otomasi industri abad ke-21 ditandai oleh transisi paradigma dari robot terpogram rigid (*predefined trajectory*) menuju sistem otonom adaptif yang mampu membuat keputusan secara *real-time* di tengah ketidakpastian lingkungan. Rahul Kala (2024) dalam chapter *Motion Planning Using Reinforcement Learning* yang diterbitkan melalui Elsevier dalam serial *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menyatakan bahwa motion planning merupakan jantung dari mobilitas otonom — problem mendasar yang harus diselesaikan sebelum robot dapat menjalankan misi seperti *pick-and-place*, navigasi warehouse AGV (*Automated Guided Vehicle*), atau inspeksi fasilitas. Kala menekankan bahwa metode konvensional seperti A*, RRT (*Rapidly-exploring Random Tree*), dan potential field memiliki kelemahan fatal ketika state-space berskala besar, dinamikanya non-linear, atau ketika terdapat *partial observability*.

Di sisi paralel, Kaustav Borah (2024) dalam disertasinya *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) menyoroti urgensi *Fault Detection, Isolation, and Reconstruction* (FDIR) pada sistem multi-agen otonom — fault dapat muncul pada sensor, aktuator, komunikasi jaringan, atau controller, sehingga memerlukan arsitektur resilien yang tidak hanya merencanakan gerak tetapi juga memperbaiki diri secara *online*. Kedua paper ini bertemu pada satu konvergensi: **reinforcement learning (RL) sebagai tulang punggung kebijakan keputusan adaptif di lingkungan stokastik berskala industri**.

Konteks ekonominya sangat relevan: pasar global AGV dan AMR (*Autonomous Mobile Robot*) diproyeksikan menembus USD 18+ miliar pada 2030 (compound annual growth rate > 20%), dengan sektor manufaktur, logistik (*e-commerce fulfillment*), dan pertambangan sebagai adopter terbesar. Di Indonesia, inisiatif *Making Indonesia 4.0* mendorong integrasi RL-based motion planning pada lini produksi PT Toyota, Astra Manufacturing, dan pelabuhan smart-logistik Tanjung Priok. Kegagalan perencanaan gerak tidak hanya menurunkan *throughput* tetapi meningkatkan *downtime cost* yang pada industri semikonduktor bernilai hingga USD 250.000 per jam. Oleh karena itu, kemampuan mengkuantifikasi, memformulasikan, dan mengimplementasikan RL motion planner menjadi kompetensi inti insinyur industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Markov Decision Process (MDP)

Reinforcement learning untuk motion planning diformalisasikan sebagai **Markov Decision Process** tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ (Kala, 2024):

- $\mathcal{S}$: himpunan state, merepresentasikan konfigurasi robot — misalnya posisi $(x,y,\theta)$, kecepatan linear $v$, kecepatan angular $\omega$, dan pembacaan sensor jarak.
- $\mathcal{A}$: himpunan aksi diskret atau kontinyu $a_t \in \mathcal{A}$.
- $P(s'|s,a)$: probabilitas transisi state.
- $R(s,a)$: fungsi reward.
- $\gamma \in [0,1)$: discount factor.

Tujuan agen adalah memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

### 2.2. Bellman Optimality Equation

State-value dan action-value function memenuhi persamaan Bellman (Kala, 2024; Borah, 2024):

$$V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s'} P(s'|s,a)\left[R(s,a) + \gamma V^\pi(s')\right]$$

$$Q^\pi(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a) + \gamma \sum_{a'} \pi(a'|s') Q^\pi(s',a')\right]$$

Solusi optimal memenuhi:

$$V^*(s) = \max_{a} \sum_{s'} P(s'|s,a)\left[R(s,a) + \gamma V^*(s')\right]$$

### 2.3. Algoritma Q-Learning dan Deep Q-Network (DQN)

Update rule Q-learning klasik (off-policy, tabular):

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\right]$$

Untuk environment berskala industri (*continuous high-dimensional state*), Kala (2024) merekomendasikan **Deep Q-Network (DQN)** dengan parameter $\theta$ dan *replay buffer* $\mathcal{D}$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[\left(r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_\theta(s,a)\right)^2\right]$$

dengan $\theta^-$ adalah parameter *target network* yang di-*update* periodik.

### 2.4. Multi-Agent Reinforcement Learning (MARL)

Borah (2024) menggeneralisasi ke multi-agen dengan indeks $i \in \{1,\ldots,N\}$:

$$\max_{\pi_i} J_i = \mathbb{E}_{\tau \sim \pi}\left[\sum_{t=0}^{T} \gamma^t R_i(s_t, a_t^1,\ldots,a_t^N)\right]$$

dengan $\tau = (s_0,a_0,\ldots,s_T)$ adalah trajectory gabungan dan joint-policy $\pi = (\pi_1,\ldots,\pi_N)$. Untuk sistem dengan komunikasi, digunakan protokol *consensus*:

$$m_t^i = h(s_t^i, a_t^i) \quad ; \quad a_t^i = \mu_\theta(s_t^i, \{m_t^j\}_{j \in \mathcal{N}_i})$$

### 2.5. Nonlinear Filtering untuk FDIR

Borah (2024) memodelkan dinamika agen dengan sistem non-linear dan gangguan proses $\omega_t$:

$$x_{t+1} = f(x_t, u_t) + \omega_t$$
$$y_t = h(x_t) + v_t$$

Di mana $v_t$ adalah noise sensor. Estimasi state menggunakan *Extended Kalman Filter* (EKF) atau *Unscented Kalman Filter* (UKF):

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t \left(y_t - h(\hat{x}_{t|t-1})\right)$$

dengan *Kalman gain*:

$$K_t = P_{t|t-1} H_t^T (H_t P_{t|t-1} H_t^T + R_t)^{-1}$$

### 2.6. Fungsi Reward untuk Motion Planning

Kala (2024) memberikan bentuk reward khas untuk navigasi robot:

$$R(s,a) = \begin{cases} +R_{\text{goal}} & \text{jika } s \in \mathcal{S}_{\text{goal}} \\ -R_{\text{collision}} & \text{jika } s \in \mathcal{S}_{\text{obstacle}} \\ -\eta \cdot \|a\|^2 - c \cdot \Delta t & \text{lainnya} \end{cases}$$

di mana $\eta$ adalah koefisien biaya energi (efisiensi baterai) dan $c$ adalah *time penalty* untuk mendorong convergence cepat.

---

## 3. Metodologi Rekayasa & SOP Implementasi

Berdasarkan integrasi metodologi Kala (2024) dan Borah (2024), SOP implementasi RL motion planner di lingkungan industri dapat disusun sebagai berikut:

**Tahap 1 — Pemodelan Sistem & Akuisisi Data**
1. Definisikan *workspace* dalam continuous 2D/3D dengan occupancy grid resolution $\Delta x = 0.05\,\text{m}$ (standar ISO 19649 untuk AGV safety).
2. Pasang sensor: LiDAR 2D (range 30 m, scan rate 10–20 Hz), IMU 9-DoF, encoder wheel.
3. Bangun dataset *teleoperation* awal untuk *behavior cloning* opsional.

**Tahap 2 — Formulasi MDP**
1. Tentukan state-space $s_t = [x_t, y_t, \theta_t, v_t, \omega_t, \text{LiDAR}_{t,1:K}]$ dengan $K=360$ ray.
2. Tentukan action space diskret (5 aksi: lurus, kiri, kanan, berhenti, mundur) atau kontinyu.
3. Definisikan reward shaping sesuai persamaan (2.6).

**Tahap 3 — Pelatihan Agen**
1. Inisialisasi *replay buffer* $\mathcal{D}$ kapasitas $10^6$.
2. Pilih algoritma: DQN, Double-DQN (DDQN), DDPG (untuk aksi kontinyu), atau SAC.
3. Hyperparameter: $\alpha=0.00025$, $\gamma=0.99$, batch size 64, target update 10.000 steps.
4. Episode termination: collision, goal reached, atau timeout 500 steps.

**Tahap 4 — Validasi & Sim-to-Real Transfer**
1. Uji di simulator Gazebo/Isaac Sim dengan domain randomization pada tekstur, pencahayaan, dinamika motor.
2. Hitung *success rate*, *average steps to goal*, dan *collision rate*.
3. Lakukan *progressive transfer* ke real robot dengan *safety wrapper* (force-field monitoring).

**Tahap 5 — Integrasi FDIR Multi-Agen (Borah, 2024)**
1. Pasang EKF/UKF pada setiap agen untuk state estimation.
2. Residual generator: $r_t = y_t - h(\hat{x}_{t|t-1})$.
3. Threshold detector: fault alarm jika $\|r_t\| > \tau_{\text{threshold}}$.
4. RL policy re-routing saat fault terdeteksi.

**Arsitektur Sistem:**

```
┌────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│ Sensor Fusion  │───▶│   EKF / UKF     │───▶│  RL Policy Net   │
│ (LiDAR+IMU+Enc)│    │ (State Estimator)│    │  (DQN/DDPG/SAC) │
└────────────────┘    └─────────────────┘    └──────────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│   FDIR Module  │    │ Reward Function │    │ Motor Controllers│
│  (Residual +   │◀──▶│   (collision/   │    │   (v, ω commands)│
│   threshold)   │    │   goal shaping) │    │                  │
└────────────────┘    └─────────────────┘    └──────────────────┘
        │
        ▼
┌────────────────────────────────────────────┐
│ Multi-Agent Consensus & Communication Bus   │
│ (shared policy / message passing)           │
└────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: AGV Warehouse 30×20 m dengan 3 Robot

**Skenario:** Sebuah *e-commerce fulfillment center* memiliki 3 unit AMR dengan misi mengambil paket dari *picking station* A, B, C dan mengirimkannya ke *packing station* D, E, F. Collision avoidance harus terjamin.

**Parameter Input:**

| Parameter | Nilai |
|-----------|-------|
| Workspace $W$ | $30 \times 20$ m |
| Jumlah agen $N$ | 3 |
| Resolusi grid $\Delta x$ | 0.5 m |
| State dimensionality | 366 (3 kinematik + 360 LiDAR + 3 ID) |
| Action set $\mathcal{A}$ | {kiri, lurus, kanan, berhenti} |
| Learning rate $\alpha$ | $2.5 \times 10^{-4}$ |
| Discount factor $\gamma$ | 0.99 |
| Reward goal $R_g$ | +100 |
| Reward collision $R_c$ | -100 |
| Step penalty $c$ | -1 |

### Perhitungan Step-by-Step

**Langkah 1 — Inisialisasi Q-table (pre-DQN).**
Untuk versi tabular sederhana: $|\mathcal{S}| \approx 60 \times 40 \times 4 = 9{,}600$ state dengan $|\mathcal{A}| = 4$, total sel $Q = 38{,}400$ diinisialisasi nol.

**Langkah 2 — Update Q-Learning pada satu transisi.**
Misalkan agen 1 pada state $s_t$ (di posisi (10, 8), kecepatan 0.5 m/s) mengambil aksi $a_t =$ "lurus" mencapai $s_{t+1}$ (posisi (10.4, 8.1), tanpa obstacle). Reward $r = -1$ (step penalty).

Parameter: $\alpha = 0.1$, $\gamma = 0.99$, $\max_{a'} Q(s_{t+1}, a') = 15.3$.

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha\left[r + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\right]$$