# 2644 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning menggunakan Reinforcement Learning pada Robot Bergerak Otonom dan Sistem Multi-Agen
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, dalam *Autonomous Mobile Robots: Modeling, Path Planning, and Control*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Peer-Reviewed Dissertation Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah memindahkan fokus rekayasa sistem dari otomasi rigid berbasis PLC konvensional menuju sistem otonom yang mampu belajar dan beradaptasi. Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* menekankan bahwa motion planning merupakan komponen kritis yang menentukan kelayakan operasional Autonomous Mobile Robot (AMR) di lingkungan industri dinamis, seperti pusat distribusi e-commerce, lini perakitan fleksibel, dan fasilitas pergudangan pintar (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Permasalahan utamanya adalah bagaimana robot dapat menemukan lintasan optimal dari konfigurasi awal ke konfigurasi tujuan dengan kendala holonomik/non-holonomik, menghindari halangan statis maupun dinamis, serta meminimalkan konsumsi energi dan waktu siklus.

Urgensi ekonominya sangat nyata. Menurut laporan internal industri yang diacu oleh Kala, downtime akibat perencanaan gerak yang suboptimal pada armada AMR di sebuah pusat fulfillment dapat mencapai 18–22% dari total waktu operasional, dengan kerugian setara USD 2.3 juta per tahun untuk fasilitas skala menengah (Kala, 2024). Pendekatan klasik seperti A*, Dijkstra, Rapidly-exploring Random Tree (RRT), dan Potential Field gagal menghadapi perubahan lingkungan real-time, karena bersifat reaktif dan tidak memiliki memori pengalaman. Sebaliknya, Reinforcement Learning (RL) memungkinkan agen robot belajar kebijakan navigasi melalui interaksi trial-and-error dengan lingkungan, sehingga menghasilkan kebijakan yang robust terhadap variabilitas.

Pada tataran sistem multi-agen, Borah (2024) menunjukkan bahwa integrasi RL dengan *Nonlinear Filtering* seperti Extended Kalman Filter (EKF) dan Unscented Kalman Filter (UKF) diperlukan untuk Fault Detection, Isolation, and Reconstruction (FDIR) (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Ketika puluhan hingga ratusan AGV/AMR beroperasi simultan dalam *Smart Autonomous Multi-Agent System* (SAMAS), kegagalan satu aktuator atau sensor akan memicu efek domino pada throughput lini. Oleh karena itu, kemampuan motion planning yang adaptif harus dipadukan dengan mekanisme deteksi anomali agar sistem tetap resilien.

Dalam konteks Indonesian Manufacturing 4.0, adopsi teknologi ini menjadi strategis karena kompleksitas geografis archipelago supply chain menuntut fleksibilitas tinggi. PT Astra Manufacturing, Telkomsel, dan beberapa startup logistik nasional telah mulai mengimplementasikan AMR untuk inventory movement. Namun, keberhasilan sangat bergantung pada kualitas algoritma motion planning-nya, menjadikan RL sebagai frontier riset dan aplikasi yang wajib dikuasai insinyur Teknik Industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Reinforcement learning untuk motion planning diformulasikan secara formal sebagai MDP $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$: ruang state (konfigurasi robot + peta lingkungan)
- $\mathcal{A}$: ruang aksi (diskret: atas/bawah/kiri/kanan; atau kontinu: kecepatan sudut)
- $P(s'|s,a)$: probabilitas transisi dari state $s$ ke $s'$ melalui aksi $a$
- $R(s,a,s')$: reward function
- $\gamma \in [0,1)$: discount factor

Kebijakan optimal $\pi^*(a|s)$ memaksimalkan expected cumulative reward:

$$J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t R(s_t, a_t, s_{t+1})\right]$$

### 2.2 Persamaan Bellman

State value function optimal memenuhi Bellman optimality equation:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

Action-value function $Q^*(s,a)$ lebih relevan untuk implementasi robotik karena langsung memetakan pasangan state-aksi terhadap nilai utilitas jangka panjang:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

### 2.3 Update Rule Q-Learning

Untuk motion planning diskret pada grid 2D, update Q-learning dilakukan iteratif:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah learning rate. Bukti konvergensi Q-learning ke $Q^*$ mensyaratkan $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$ (Kala, 2024).

### 2.4 Reward Function untuk Navigasi Robot

Kala (2024) merancang reward function sebagai berikut:

$$r(s_t, a_t, s_{t+1}) = \begin{cases} +R_{goal} & \text{jika } s_{t+1} \in S_{goal} \\ -R_{collision} & \text{jika } s_{t+1} \in S_{obstacle} \\ -c \cdot d(s_t, s_{goal}) & \text{otherwise} \end{cases}$$

di mana $d(s_t, s_{goal})$ adalah jarak Euclidean ke tujuan, $c$ adalah bobot penalti, dan $R_{goal}, R_{collision}$ adalah reward terminal.

### 2.5 Nonholonomic Constraint dan Continuous Action RL

Untuk robot non-holonomic (misalnya differential drive), state space menjadi kontinu dan Q-learning tabular tidak layak. Kala mengusulkan Deep Q-Network (DQN) dengan aproksimator fungsi $Q(s,a;\theta)$:

$$\mathcal{L}(\theta) = \mathbb{E}\left[(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta))^2\right]$$

di mana $\theta^-$ adalah parameter target network yang di-update secara periodik untuk stabilitas training.

### 2.6 Multi-Agent Reinforcement Learning (MARL)

Untuk SAMAS (Borah, 2024), formulasi diperluas ke *Decentralized Partially Observable MDP* (Dec-POMDP):

$$\langle \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^N, P, \{R_i\}_{i=1}^N, \{\mathcal{O}_i\}_{i=1}^N, \gamma \rangle$$

dengan joint policy $\boldsymbol{\pi} = (\pi_1, ..., \pi_N)$ dan total reward tim:

$$\boldsymbol{J}(\boldsymbol{\pi}) = \sum_{i=1}^N w_i \mathbb{E}_{\boldsymbol{\pi}}\left[\sum_{t=0}^{\infty} \gamma^t R_i(s_t, \mathbf{a}_t, s_{t+1})\right]$$

### 2.7 Nonlinear Filtering untuk FDIR

State estimator pada agen ke-$i$ menggunakan UKF:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t(y_t - h(\hat{x}_{t|t-1}))$$

di mana $K_t$ adalah Kalman gain, dan residual $r_t = y_t - h(\hat{x}_{t|t-1})$ digunakan sebagai sinyal fault detection melalui thresholding $\chi^2$:

$$\chi^2_t = r_t^T S_t^{-1} r_t \overset{\mathcal{H}_1}{\underset{\mathcal{H}_0}{\gtrless}} \tau$$

Fault terdeteksi memicu RL agent untuk merekonstruksi trajectory menggunakan policy yang telah terlatih (Borah, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Sistem

Implementasi industri mengikuti arsitektur berlapis (layered architecture) sesuai rekomendasi Kala (2024):

1. **Layer Persepsi**: LiDAR 2D/3D, kamera stereo, IMU, encoder roda. Output: occupancy grid map dengan resolusi 0.05 m.
2. **Layer Lokalisasi**: Adaptive Monte Carlo Localization (AMCL) atau UKF untuk estimasi pose $(x, y, \theta)$.
3. **Layer Global Planner**: A* dengan heuristik Euclidean untuk lintasan global awal.
4. **Layer RL Local Planner**: DQN/PPO yang memodifikasi trajectory global berdasarkan obstacle dinamis.
5. **Layer Kontrol**: Pure Pursuit atau Model Predictive Control (MPC) untuk tracking.
6. **Layer FDIR** (Borah, 2024): UKF + fault classifier berbasis residual analysis.

### 3.2 SOP Pelatihan RL Agent

**Tahap 1 — Simulasi (Digital Twin)**:
- Bangun environment di Gazebo/Unity dengan obstacle realistis.
- Train agent selama $N_{episodes} \geq 50.000$ episodes.
- Validasi convergence: $|V(s_t) - V(s_{t-1})| < \epsilon = 10^{-3}$.

**Tahap 2 — Sim-to-Real Transfer**:
- Domain randomization: variasi friction, latency sensor, lighting.
- Fine-tune di real robot dengan curriculum learning: mulai skenario mudah ke sulit.

**Tahap 3 — Deployment & Monitoring**:
- Logging episode reward rata-rata $>0.85 \times R_{goal}$.
- Threshold fault rate $<0.5\%$ per 1000 operasi.

### 3.3 Prosedur Fault Handling (Borah, 2024)

Jika $\chi^2_t > \tau$:
1. **Isolation**: identifikasi subsistem gagal via structured residual analysis.
2. **Reconfiguration**: switch ke redundant sensor/actuator.
3. **Re-planning**: aktifkan RL policy khusus untuk mode failure.
4. **Recovery**: trajectory baru dikirim via consensus algorithm ke agen tetangga untuk mencegah konflik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AGV di Gudang Distribusi

**Parameter Input**:
- Grid world $20 \times 20$ (400 sel), resolusi 1 m
- Start state $s_0 = (1,1)$, Goal $s_g = (20,20)$
- 35 obstacle statis (rak barang)
- $R_{goal} = +100$, $R_{collision} = -50$, $c = -1$
- $\alpha = 0.1$, $\gamma = 0.95$
- $\epsilon$-greedy decay: $\epsilon_t = \max(0.01, 1.0 \times 0.995^t)$

**Inisialisasi**: $Q(s,a) = 0$ untuk seluruh $(s,a)$.

### 4.2 Perhitungan Q-Value Step-by-Step

Ambil satu episode, $t=0$, state $s_0 = (1,1)$. Robot memilih aksi $a = \text{kanan}$ dengan $\epsilon$-greedy.

State baru: $s_1 = (1,2)$ (bukan obstacle). Reward: $r_1 = -c \cdot d((1,2),(20,20)) = -(-1) \times \sqrt{(20-1)^2+(20-2)^2} = 26.93$

Update Q-value:

$$Q((1,1), \text{kanan}) = 0 + 0.1 \times [26.93 + 0.95 \times \max_{a'} Q((1,2),a') - 0]$$

Karena semua Q awal = 0: $Q((1,1), \text{kanan}) = 0.1 \times 26.93 = 2.693$

### 4.3 Iterasi Episode Penuh (Manual Trace Episode Pertama)

Asumsikan pada episode pertama robot menabrak obstacle di langkah ke-8 dari state $(8,8)$ ke $(9,8)$ yang merupakan obstacle.

Reward received: $r = -50$
State sebelumnya $s' = (8,8)$, dengan $Q((8,8), \text{kanan}) = 0$ awalnya.

Setelah pembelajaran beberapa episode dan asumsi $Q((8,8), \text{kanan}) = 5.5$ dari eksplorasi:

$$Q((8,8), \text{kanan}) = 5.5 + 0.1 \times [-50 + 0.95 \times 0