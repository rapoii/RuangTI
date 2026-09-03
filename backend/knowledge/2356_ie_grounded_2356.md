# 2356 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industry 4.0 dan subsequently Industry 5.0 telah memposisikan robot bergerak otonom (*Autonomous Mobile Robots*/AMR) sebagai tulang punggung rantai pasok modern. Kala (2024) dalam bab "Motion planning using reinforcement learning" (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menjelaskan bahwa perencanaan gerak (*motion planning*) adalah masalah keputusan sekuensial di mana agen harus memilih lintasan melalui ruang状态 (*state space*) yang kompleks, dinamis, dan seringkali tidak sepenuhnya terobservasi. Berbeda dengan pendekatan klasik seperti *A\**, Rapidly-exploring Random Tree (RRT), atau Potential Fields yang bersifat *offline* dan deterministik, *reinforcement learning* (RL) memungkinkan agen mempelajari kebijakan optimal melalui interaksi trial-and-error dengan lingkungannya, menjadikannya sangat adaptif terhadap perubahan布局 gudang, kegagalan sensor, atau variasi permintaan produksi [Kala, 2024].

Urgensi ekonomi dari adopsi teknologi ini sangat nyata. Menurut laporan internal McKinsey yang dikutip secara luas dalam literatur logistik, pasar AMR gudang diproyeksikan mencapai USD 14–18 miliar pada 2030 dengan CAGR >20%. Dalam konteks *smart manufacturing*, downtime akibat perencanaan gerak yang suboptimal dapat menimbulkan kerugian hingga USD 50.000 per jam pada lini perakitan otomotif. Kala (2024) menekankan bahwa RL—khususnya algoritma *Q-learning*, *Deep Q-Network* (DQN), dan *Proximal Policy Optimization* (PPO)—menawarkan kerangka kerja yang elegan untuk optimasi sekuensial ini karena mampu menangani masalah *curse of dimensionality* yang melekat pada ruang状态 kontinu berdimensi tinggi.

Borah (2024) dalam disertasinya tentang *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (SAMAS, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas relevansi ini ke ranah multi-agen. Borah berargumen bahwa sistem manufaktur masa depan akan terdiri dari banyak agen (robot, AGV, drone inspeksi, cobot) yang harus berkolaborasi. Modul ini menjadi krusial karena *Fault Detection, Isolation, and Reconstruction* (FDIR) yang diusung Borah mensyaratkan setiap agen memiliki kebijakan perencanaan gerak *real-time* yang *fault-tolerant*—di mana RL berperan sebagai mekanisme pembelajaran ulang ketika terjadi degradasi aktuator atau anomali sensor. Integrasi perspektif Kala (perencanaan gerak RL) dan Borah (koordinasi multi-agen & FDIR) membentuk kerangka holistik untuk sistem robotik industri generasi berikutnya.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Proses Keputusan Markov (MDP)

Kerangka teoretis fundamental untuk *motion planning* RL adalah *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ di mana:

- $\mathcal{S}$ : himpunan状态 (posisi, orientasi, kecepatan agen +状态障碍),
- $\mathcal{A}$ : himpunan aksi (percepatan, perubahan arah),
- $P(s'|s,a)$ : probabilitas transisi,
- $R(s,a,s')$ : fungsi reward,
- $\gamma \in [0,1)$ : faktor diskonto.

Kala (2024) merumuskan fungsi nilai状态 optimal $V^*(s)$ melalui Persamaan Bellman:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

Untuk lingkungan di mana transisi $P$ tidak diketahui (*model-free*), digunakan fungsi aksi-nilai (Q-function):

$$Q^*(s,a) = \mathbb{E}_{s'}\left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right]$$

### 2.2. Algoritma Q-Learning

Pembaruan iteratif *Q-learning* mengikuti aturan temporal-difference:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

dengan $\alpha$ adalah *learning rate*. Kala (2024) membuktikan bahwa dengan $\alpha$ yang menurun secara Robbins-Monro ($\sum_t \alpha_t = \infty$, $\sum_t \alpha_t^2 < \infty$), $Q$ konvergen ke $Q^*$ dengan probabilitas 1.

### 2.3. Deep Q-Network (DQN)

Untuk ruang状态 kontinu (misalnya representasi LiDAR point cloud), Kala (2024) menggunakan *Deep Q-Network* (DQN) yang mempelajari $Q(s,a;\theta)$ dengan bobot jaringan $\theta$. Fungsi loss yang diminimalkan:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah bobot *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* berukuran $|\mathcal{D}|$. Dua inovasi ini (target network & experience replay) menstabilkan训练.

### 2.4. Policy Gradient dan Actor-Critic

Untuk aksi kontinu (steering angle, kecepatan roda), Kala merekomendasikan metode *Actor-Critic* (A2C/PPO) dengan:

$$\nabla_\theta J(\pi_\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t|s_t) A^{\pi_\theta}(s_t, a_t) \right]$$

dengan *advantage function*:

$$A^{\pi}(s_t, a_t) = Q^{\pi}(s_t, a_t) - V^{\pi}(s_t)$$

### 2.5. Formulasi Reward dalam Konteks Industri

Kala (2024) menyusun reward multi-komponen yang khas untuk AMR gudang:

$$r_t = -\alpha_1 \cdot d(s_t, s_{\text{goal}}) - \alpha_2 \cdot \mathbb{1}_{\text{collision}} - \alpha_3 \cdot \mathbb{1}_{\text{time\_exceeded}} + \alpha_4 \cdot \mathbb{1}_{\text{reached\_goal}}$$

dengan bobot $\alpha_i$ yang dapat di-*tune* sesuai KPI operasional (throughput, safety, energi).

### 2.6. Ekstensi Multi-Agen Borah (2024)

Borah (2024) menggeneralisasi MDP ke *Decentralized Partially Observable MDP* (Dec-POMDP) untuk $N$ agen dengan状态 bersama $s^{(1:N)}$:

$$V^*(s) = \max_{\pi^{(1)},...,\pi^{(N)}} \mathbb{E}\left[ \sum_{t=0}^{\infty} \gamma^t \sum_{i=1}^{N} r_t^{(i)} \right]$$

dengan setiap agen memiliki belief state $b_t^{(i)}$ yang diperbarui via *Nonlinear Filtering* (Extended/Unscented Kalman Filter):

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t (y_t - h(\hat{x}_{t|t-1}))$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *motion planning* RL di industri mengikuti SOP 7-tahap yang disintesis dari Kala (2024) dan diperkuat dengan protokol FDIR Borah (2024):

**Tahap 1 – Pemodelan Lingkungan.** Bangun representasi状态 menggunakan *occupancy grid* (resolusi 0,1–0,5 m untuk gudang) atau *signed distance field* (SDF) untuk lingkungan dinamis. Sensor fusion: LiDAR 2D/3D + IMU + odometry roda.

**Tahap 2 – Desain MDP & Reward Engineering.** Definisikan $\mathcal{S}, \mathcal{A}, R$ dengan keterlibatan *domain expert* lantai pabrik. Validasi melalui simulasi *digital twin* sebelum deployment.

**Tahap 3 – Pra-pelatihan dalam Simulasi.** Gunakan simulator (Gazebo, NVIDIA Isaac Sim, Unity ML-Agents) untuk训练 1–5 juta episode. Hyperparameter awal: $\alpha=0{,}00025$, $\gamma=0{,}99$, batch size 32, replay buffer $10^6$.

**Tahap 4 – Transfer ke Robot Fisik (Sim-to-Real).** Terapkan *domain randomization* (variasi friksi, latency sensor, iluminasi) sesuai protokol ISO/TS 15066 untuk kolaborasi manusia-robot.

**Tahap 5 – Fine-tuning On-site dengan Human-in-the-Loop.** Training online dengan $\alpha$ kecil ($10^{-5}$) selama 2–4 minggu, disertai *safety layer* (emergency stop, barrier certificate) berstandar ISO 10218-1.

**Tahap 6 – Integrasi Multi-Agen (Borah, 2024).** Aktifkan protokol FDIR: agen tetangga mengirim sinyal consensus $\bar{x}_t^{(i)} = \frac{1}{|\mathcal{N}_i|}\sum_{j \in \mathcal{N}_i} \hat{x}_t^{(j)}$ untuk validasi状态 dan deteksi anomali.

**Tahap 7 – Pemantauan & Audit Berkelanjutan.** Logging metrik KPI: *success rate*, *path length efficiency* ($\eta = L_{\text{optimal}}/L_{\text{actual}}$), *collision rate* per 10.000 jam operasi, dan *mean time between failures* (MTBF).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah gudang *e-commerce* di Jakarta mengoperasikan 50 AMR untuk *picking* pesanan. Layout gudang dimodelkan sebagai *grid* 10×10 sel (1 sel = 1 m²). Tujuan: AGV harus bergerak dari状态 awal $s_0=(1,1)$ ke状态 tujuan $s_{\text{goal}}=(10,10)$ dengan避免 obstacle di sel (3,3), (3,4), (4,4), (5,5), (5,6).

**Parameter RL (setelah tuning):** $\alpha=0{,}1$, $\gamma=0{,}9$, $\epsilon$-greedy dengan $\epsilon$ decay dari 0,9 ke 0,05. Aksi: 4 (atas, bawah, kiri, kanan). Reward: $+100$ untuk goal, $-10$ untuk tabrakan, $-1$ per langkah.

**Inisialisasi:** $Q(s,a)=0$ untuk semua $(s,a)$.

**Iterasi Episode 1 (Q-Learning tabular).** Agen dieksplorasi secara acak; misalnya mencapai goal dalam 47 langkah, menerima $r=+100$ di状态 tujuan. Update mundur (back-up) dengan $\alpha=0{,}1$, $\gamma=0{,}9$:

$$Q(s_{46}, a_{\text{ke goal}}) \leftarrow 0 + 0{,}1 \cdot [100 + 0{,}9 \cdot \max Q(s_{\text{goal}}, \cdot) - 0] = 10{,}0$$

Untuk state sebelumnya dengan $r=-1$ per langkah:

$$Q(s_{45}, a) \leftarrow 0 + 0{,}1 \cdot [-1 + 0{,}9 \cdot 10{,}0 - 0] = 0{,}8$$

**Iterasi Episode 25 (konvergensi awal).** Jalur optimal yang ditemukan: $(1,1)\to(1,2)\to\cdots\to(10,10)$ tanpa obstacle, panjang 18 langkah. Q-value di $