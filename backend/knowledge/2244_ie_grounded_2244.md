# 2244 — Perencanaan Gerak Robot Otonom Berbasis Pembelajaran Penguatan dalam Sistem Manufaktur dan Logistik Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion Planning Menggunakan Reinforcement Learning (RL) untuk Multi-Agent Autonomous Systems
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memaksa sistem manufaktur dan rantai pasok global untuk mengadopsi kendaraan berpemandu otomatis (Automated Guided Vehicle/AGV), mobile robot kolaboratif (AMR), dan armada drone inspeksi sebagai tulang punggung produktivitas. Menurut Kala (2024) dalam bab *Motion Planning Using Reinforcement Learning* yang diterbitkan oleh Elsevier, perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan kemampuan robot otonom bernavigasi di lingkungan dinamis, menghindari halangan statis maupun dinamis, sekaligus mengoptimalkan konsumsi energi dan waktu siklus. Kala menegaskan bahwa metode perencanaan klasik seperti *Rapidly-exploring Random Tree* (RRT), *Probabilistic Roadmaps* (PRM), dan *Artificial Potential Fields* (APF) mengalami degradasi kinerja signifikan ketika menghadapi lingkungan *non-holonomic*, ketidakpastian sensor, dan perubahan tata letak pabrik secara real-time (Kala, 2024).

Urgensi operasional dari adopsi RL-based motion planning dapat dilihat dari data empiris pasar. Pasar AGV global diproyeksikan mencapai USD 4,9 miliar pada 2028 dengan CAGR 11,3% (post-pandemic warehouse automation boom), di mana *path planning latency* menjadi *bottleneck* yang直接影响 throughput gudang. Borah (2024) memperkuat argumen ini dari perspektif multi-agent systems dengan menunjukkan bahwa Fault Detection, Isolation, and Reconstruction (FDIR) sangat esensial untuk operasi kontinyu — kegagalan satu agen dapat menyebabkan *cascading failure* pada seluruh lini produksi. Dalam konteks ini, integrasi *nonlinear filtering* (seperti Extended Kalman Filter dan Particle Filter) dengan RL menjadi pendekatan hybrid yang memungkinkan robot mendeteksi degradasi sensor/aktuator dan secara otonom merekonstruksi lintasan alternatif.

Aspek ekonomis dari implementasi RL motion planning juga signifikan. Kala (2024) menunjukkan bahwa robot yang menggunakan Deep Q-Network (DQN) dapat mengurangi *average travel time* sebesar 23-37% dibanding algoritma konvensional A* di lingkungan gudang e-commerce, sekaligus meningkatkan *collision avoidance rate* menjadi 99,2%. Dari perspektif Industrial Engineering, hal ini berarti peningkatan *Overall Equipment Effectiveness* (OEE) pada lini intralogistik sebesar 8-15%, yang secara langsung meningkatkan margin operasi. Borah (2024) menambahkan bahwa sistem multi-agen dengan FDIR-RL mampu mempertahankan availability di atas 95% meski terjadi *partial sensor failure*, menurunkan *Mean Time To Recovery* (MTTR) hingga 62% dibanding sistem tanpa FDIR. Kedua referensi ini menjadi fondasi bagi pengembangan SOP industri untuk manufaktur pintar.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) merumuskan permasalahan motion planning sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $(S, A, P, R, \gamma)$:

$$M = (S, A, P, R, \gamma)$$

di mana:
- $S$ = himpunan state (konfigurasi robot: posisi $(x, y)$, orientasi $\theta$, kecepatan $v$, pembacaan sensor LiDAR $z_t$)
- $A$ = himpunan aksi (percepatan linear $a_v$, kecepatan angular $\omega$)
- $P(s'|s,a)$ = probabilitas transisi state
- $R(s,a)$ = fungsi reward
- $\gamma \in [0,1]$ = discount factor untuk horizon masa depan

Fungsi value $V^\pi(s)$ yang menyatakan *expected cumulative reward* ketika mengikuti policy $\pi$ memenuhi **Persamaan Bellman**:

$$V^\pi(s) = \sum_{a \in A} \pi(a|s) \sum_{s' \in S} P(s'|s,a)\left[R(s,a) + \gamma V^\pi(s')\right]$$

Bentuk optimalnya adalah:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a) + \gamma V^*(s')\right]$$

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk diskritisasi aksi, Kala menggunakan **Q-Learning** dengan *update rule*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah *learning rate*. Ketika state-space berdimensi tinggi (continuous LiDAR scans dengan 360 titik), Kala (2024) mengadopsi **Deep Q-Network** dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta)\right)^2\right]$$

dengan $\theta^-$ adalah parameter dari *target network* yang di-update secara periodik, dan $\mathcal{D}$ adalah *experience replay buffer* berkapasitas $N = 10^6$ transisi.

### 2.3 Policy Gradient dan PPO

Untuk kontrol continuous-action (misalnya steering sudut dan throttle pada AMR), Kala menggunakan **Proximal Policy Optimization (PPO)** dengan *clipped objective*:

$$L^{CLIP}(\theta) = \mathbb{E}_t\left[\min\left(r_t(\theta)A_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)A_t\right)\right]$$

di mana $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ adalah rasio probabilitas, dan $A_t$ adalah *advantage estimate*:

$$A_t = \sum_{l=0}^{T-t} (\gamma\lambda)^l \delta_{t+l}, \quad \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$$

### 2.4 State Estimation dengan Nonlinear Filtering

Borah (2024) melengkapi arsitektur dengan **Extended Kalman Filter (EKF)** untuk estimasi state robot di bawah ketidakpastian sensor:

**Prediksi:**
$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$
$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$

**Update:**
$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k(z_k - h(\hat{x}_{k|k-1}))$$

di mana $K_k$ adalah *Kalman gain*, $P_k$ adalah kovariansi error, $Q_k$ dan $R_k$ berturut-turut adalah kovariansi *process noise* dan *measurement noise*.

### 2.5 Multi-Agent Reinforcement Learning (MARL)

Untuk kawanan AGV, **Joint Action Value Function** didefinisikan:

$$Q^{\pi}(s, a^1, a^2, \ldots, a^n) = \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma^t r_t \mid s_0 = s, a_t^i \sim \pi^i\right]$$

Borah (2024) mengusulkan *Centralized Training with Decentralized Execution* (CTDE), di mana *critic* jaringan menggunakan informasi global selama training, namun setiap agen mengeksekusi policy terdesentralisasi saat deployment:

$$L_i(\theta_i) = \mathbb{E}\left[\min\left(\frac{\pi_{\theta_i}(a_i|s)}{\pi_{\theta_i^{old}}(a_i|s)} \hat{A}_i, \text{clip}(\cdot, 1-\epsilon, 1+\epsilon)\hat{A}_i\right)\right]$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan integrasi kerangka Kala (2024) dan Borah (2024), prosedur operasional standar untuk deployment RL-based motion planning di fasilitas manufaktur/logistik adalah sebagai berikut:

**Fase 1 — Pemetaan Lingkungan & Digital Twin Construction**
1. Lakukan *3D LiDAR scan* fasilitas dengan akurasi ±2 cm menggunakan perangkat seperti Leica RTC360 atau Velodyne HDL-32E.
2. Bangun *digital twin* dalam format OpenUSD atau ROS-Gazebo yang merepresentasikan layout statis (rak, conveyor, workstation) dan zona dinamis (area kerja manusia).
3. Definisikan *occupancy grid* dengan resolusi $\Delta = 0{,}1$ m (atau sesuai dengan dimensi robot terkecil).

**Fase 2 — Formulasi MDP & Reward Engineering**
1. **State space** $S$: posisi $(x,y)$ ∈ $[0,100] \times [0,100]$ m, orientasi $\theta \in [-\pi, \pi]$, kecepatan $v \in [0, 1{,}5]$ m/s, jarak halangan $d_{obs} \in \mathbb{R}^{360}$ dari LiDAR scan.
2. **Action space** $A$: diskret (5 aksi: maju, belok kiri 15°, belok kanan 15°, berhenti, mundur) untuk DQN; kontinu untuk PPO dengan $a = (v, \omega) \in [0, v_{max}] \times [-\omega_{max}, \omega_{max}]$.
3. **Reward function** $R(s,a)$:
$$R = -0{,}1 \cdot \mathbb{1}_{\text{move}} + 100 \cdot \mathbb{1}_{\text{goal}} - 50 \cdot \mathbb{1}_{\text{collision}} - 2 \cdot (d_{goal}^{-1})$$

**Fase 3 — Pelatihan Policy dengan Simulasi**
1. Inisialisasi dua jaringan saraf: *policy network* dan *value network* dengan arsitektur 3-layer MLP (256-256-128 neuron) atau CNN-LSTM untuk data LiDAR.
2. Lakukan simulasi paralel menggunakan **Isaac Gym** (NVIDIA) atau **MuJoCo** dengan 4096 environment instances selama $T = 5 \times 10^6$ timesteps.
3. Terapkan *experience replay* dengan prioritas (*prioritized experience replay*, $\alpha = 0{,}6$, $\beta = 0{,}4$).

**Fase 4 — Integrasi State Estimation & FDIR**
1. Pasang EKF dengan frekuensi update 50 Hz untuk estimasi pose; gunakan IMU + wheel odometry + LiDAR (sensor fusion).
2. Implementasikan modul FDIR Borah (2024): jika residual $|z_k - h(\hat{x}_{k|k-1})| > 3\sigma$ selama >10 timestep berturut-turut, aktifkan protokol isolasi dan switch ke mode *safe-stop* atau *degraded operation*.

**Fase 5 — Deployment, Validasi & Continuous Learning**
1. Transfer policy dari simulasi ke robot fisik dengan **domain randomization** (variasi friction, sensor noise, payload mass ±5%).
2. Lakukan *shadow mode* selama 2 minggu tanpa eksekusi aksi; bandingkan dengan planned trajectory.
3. Aktifkan *online fine-tuning* dengan *safety layer* (control barrier functions) yang memverifikasi setiap aksi sebelum dieksekusi di dunia nyata.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Gudang E-Commerce 50.000 m²

Sebuah fasilitas *e-commerce* di kawasan industri Cikarang memiliki 40 unit AMR dengan spesifikasi sebagai berikut:

| Parameter | Nilai |
|-----------|-------|
| Panjang gudang $L$ | 200 m |
| Lebar gudang $L$ | 100 m |
| Jumlah rak picking | 240 unit |
| Kecepatan max $v_{max}$ | 1,5 m/s |
| Kecepatan angular max $\omega_{max}$ | 1,0 rad/s |
| Radius robot $r$ | 0,35 m |
| Beban payload | 50 kg |
| Sensor LiDAR | 360° @ 10 Hz, range 30 m |

###  Kala (2024) — Episode Reward Over Time
import numpy as np

class Q