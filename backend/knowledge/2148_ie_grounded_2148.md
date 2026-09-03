# 2148 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Berbasis Reinforcement Learning untuk Sistem Manufaktur dan Logistik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning menggunakan Reinforcement Learning (RL)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memunculkan permintaan masif terhadap *Autonomous Mobile Robots* (AMR) dan *Automated Guided Vehicles* (AGV) di lantai produksi, pergudangan, dan rantai pasok. Berdasarkan tinjauan Kala (2024) dalam bab buku *Autonomous Mobile Robots*, perencanaan gerak (*motion planning*) menjadi salah satu tantangan teknis paling determinan terhadap produktivitas sistem robotik, karena keputusan lintasan robot secara langsung memengaruhi *throughput*, *cycle time*, konsumsi energi, dan keselamatan kerja (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Dalam lanskap industri modern—mulai dari *e-commerce fulfillment center* (Amazon, JD.com), manufaktur semikonduktor (TSMC, Samsung), hingga pergudangan farmasi (Pfizer)—AMR harus bernavigasi pada lingkungan yang dinamis dengan ratusan rak, pekerja manusia, dan kendaraan lain secara simultan.

Secara ekonomis, pasar AMR global diproyeksikan mencapai lebih dari USD 14 miliar pada 2030 dengan CAGR >15% (Statista, 2024), sehingga efisiensi perencanaan gerak bukan sekadar keunggulan kompetitif melainkan kebutuhan survival. Kala (2024) menekankan bahwa pendekatan konvensional seperti A*, Rapidly-exploring Random Trees (RRT), dan Potential Field memiliki keterbatasan fundamental ketika lingkungan bersifat stokastik, kontinyu berdimensi tinggi, atau memiliki banyak agen. Hal ini dikonfirmasi oleh Borah (2024) yang menyatakan bahwa sistem multi-agen otonom (SAMAS) membutuhkan arsitektur kontrol yang mampu menangani *fault detection, isolation, and reconstruction* (FDIR) sekaligus mempelajari kebijakan optimal melalui interaksi dengan lingkungan (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

Reinforcement Learning (RL) muncul sebagai paradigma solusi karena tiga karakteristik utamanya: (i) *model-free* learning yang tidak memerlukan peta eksak lingkungan; (ii) kemampuan menangani ruang aksi-kontinyu berdimensi tinggi; dan (iii) adaptabilitas terhadap perubahan dinamis seperti gangguan sensor atau kegagalan aktuator (Kala, 2024). Konteks industri yang relevan mencakup: (a) pergudangan otonom dengan ribuan pick-order harian, (b) lini perakitan fleksibel dengan mobile manipulators, (c) logistik rumah sakit untuk delivery obat kritis, dan (d) pelabuhan smart-port dengan container handling otomatis. Modul 2148 ini akan membedah formulasi matematis, metodologi implementasi, dan validasi kuantitatif RL-based motion planning dalam kerangka rekayasa industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Markov Decision Process (MDP)

RL berbasis motion planning diformulasikan sebagai MDP dengan tuple $\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$ (Kala, 2024), di mana:

- $\mathcal{S}$: himpunan state (konfigurasi robot dalam *configuration space* $\mathcal{C}$).
- $\mathcal{A}$: himpunan action (lintasan atau kecepatan roda).
- $\mathcal{P}(s'|s,a)$: probabilitas transisi state.
- $\mathcal{R}(s,a,s')$: reward function.
- $\gamma \in [0,1]$: discount factor.

### 2.2 Persamaan Bellman

Fungsi nilai optimal $V^*(s)$ memenuhi Persamaan Bellman optimal:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a)\left[\mathcal{R}(s,a,s') + \gamma V^*(s')\right]$$

Fungsi aksi-nilai (Q-function) yang lebih sering digunakan dalam implementasi motion planning adalah:

$$Q^*(s,a) = \sum_{s'} \mathcal{P}(s'|s,a)\left[\mathcal{R}(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

### 2.3 Algoritma Q-Learning untuk Motion Planning

Update rule tabular Q-learning yang menjadi backbone RL-based motion planning (Kala, 2024):

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)\right]$$

di mana $\alpha$ adalah *learning rate*. Untuk ruang state kontinyu (umum di AMR), digunakan *Deep Q-Network* (DQN) dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[\left(r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta)\right)^2\right]$$

### 2.4 Reward Function untuk Navigasi

Kala (2024) merancang reward function multi-komponen untuk motion planning:

$$r(s, a, s') = \underbrace{r_{\text{goal}}}_{\text{capai target}} + \underbrace{r_{\text{collision}}}_{\text{hindari tabrakan}} + \underbrace{r_{\text{progress}}}_{\text{jarak ke goal}} + \underbrace{r_{\text{smooth}}}_{\text{kelancaran lintasan}}$$

Formulasi tipikal:

$$r(s,a,s') = \begin{cases} +R_{\text{goal}}, & \text{jika } s' \in \mathcal{S}_{\text{goal}} \\ -R_{\text{collision}}, & \text{jika } s' \in \mathcal{S}_{\text{obs}} \\ -\lambda_1 \cdot d(s', s_{\text{goal}}) - \lambda_2 \cdot |\Delta\theta|, & \text{lainnya} \end{cases}$$

di mana $d(s', s_{\text{goal}})$ adalah jarak Euclidean ke target, dan $\Delta\theta$ adalah perubahan sudut heading (penalty smoothness).

### 2.5 Model Kinematik Diferensial

Untuk AMR tipe *differential-drive* (paling umum di industri), Kala (2024) menggunakan model kinematik:

$$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{\theta} \end{bmatrix} = \begin{bmatrix} \cos\theta & 0 \\ \sin\theta & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} v \\ \omega \end{bmatrix}$$

dengan constraint $|v| \leq v_{\max}$ dan $|\omega| \leq \omega_{\max}$.

### 2.6 Formulasi Fault Detection (Borah, 2024)

Borah (2024) melengkapi kerangka dengan FDIR menggunakan Kalman Filter nonlinier (Extended Kalman Filter):

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$

$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$

di mana $F_k = \left.\frac{\partial f}{\partial x}\right|_{\hat{x}_{k-1|k-1}}$ adalah Jacobian. Innovation sequence $\nu_k = y_k - h(\hat{x}_{k|k-1})$ digunakan untuk deteksi anomali sensor.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem RL-Based Motion Planning

```
┌──────────────────────────────────────────────────────┐
│        LAYER 1: PERCEPTION & LOCALIZATION            │
│  (LiDAR, IMU, Encoder, SLAM → pose estimate)         │
└─────────────────────┬────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────────┐
│        LAYER 2: MDP STATE CONSTRUCTION               │
│  (Occupancy grid + robot pose → state s_t)           │
└─────────────────────┬────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────────┐
│        LAYER 3: RL POLICY (π*: S → A)                │
│  (DQN / PPO / SAC → linear/angular velocity)        │
└─────────────────────┬────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────────┐
│        LAYER 4: MOTION CONTROLLER & ACTUATORS        │
│  (PID controller → motor drivers → wheels)           │
└─────────────────────┬────────────────────────────────┘
                      ↓
┌──────────────────────────────────────────────────────┐
│   LAYER 5: FDIR MONITOR (Borah, 2024)               │
│   (EKF + χ² test → fault flag → re-planning)        │
└──────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi RL untuk AMR Industri

**Tahap 1 — Pemodelan Masalah (Minggu 1-2):**
1. Definisikan state space $\mathcal{S}$: posisi $(x,y)$, heading $\theta$, jarak sensor LiDAR 360° (misal 24 rays), kecepatan saat ini.
2. Definisikan action space $\mathcal{A}$: diskretisasi $(v, \omega)$ menjadi 5×5 = 25 aksi.
3. Bangun peta statis (SLAM) + layer dinamis (deteksi manusia/rak bergerak).

**Tahap 2 — Desain Reward (Minggu 2-3):**
Terapkan persamaan reward multi-komponen Bagian 2.4 dengan parameter industri tipikal: $R_{\text{goal}} = +100$, $R_{\text{collision}} = -50$, $\lambda_1 = 0.1$, $\lambda_2 = 0.05$.

**Tahap 3 — Training (Minggu 3-6):**
- Gunakan simulator Gazebo / Webots / NVIDIA Isaac Sim untuk training 1 juta episode.
- Replay buffer size $N = 10^6$, batch size $B = 256$.
- Target network update setiap $\tau = 1000$ langkah.
- Validasi di dunia nyata dengan *safety wrapper* (jika diprediksi tabrakan, override dengan emergency stop).

**Tahap 4 — Deployment & Monitoring (Minggu 7+):**
- Integrasikan modul FDIR Borah (2024) untuk deteksi fault sensor/aktuator.
- Threshold inovasi: $\chi^2_{k} = \nu_k^T S_k^{-1} \nu_k > \chi^2_{\alpha, m}$ memicu re-training atau pergantian ke mode failsafe.
- Logging performa ke dashboard KPI industri: OEE (Overall Equipment Effectiveness), MTBF, MTTR.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Warehouse AGV dengan Grid 10×10

Sebuah *fulfillment center* memiliki AGV yang harus bergerak dari *pick station* (S) ke *packing station* (G) pada grid 10×10 (100 sel). Terdapat 12 halangan statis (rak) dan obstacle dinamis (pekerja manusia).

**Parameter RL:**
- Learning rate $\alpha = 0.1$
- Discount factor $\gamma = 0.95$
- Epsilon-greedy: $\varepsilon = 1.0 \to 0.01$ dengan decay $0.995$ per episode
- Reward: $R_{\text{goal}} = +100$, $R_{\text{collision}} = -50$, $R_{\text{step}} = -1$

### 4.2 Perhitungan Step-by-Step Q-Learning Iteration

Misalkan state $s_t = (1,1)$ (sel awal S), action yang diambil $a_t = \text{right}$ ke state $s_{t+1} = (1,2)$ (sel kosong). Misal $Q(s_t, a_t)$ awal = 0 dan $\max_{a'} Q(s_{t+1}, a$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
