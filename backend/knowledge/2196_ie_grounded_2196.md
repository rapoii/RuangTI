# 2196 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Menggunakan Reinforcement Learning: Formulasi Matematis, Implementasi Industri, dan Integrasi Sistem Multi-Agen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma manufaktur global menuju *Industry 4.0* dan *Industry 5.0* telah menempatkan robot bergerak otonom (Autonomous Mobile Robots/AMR) sebagai tulang punggung logistik internal, *flexible manufacturing systems* (FMS), dan operasional *smart warehouse*. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menyoroti bahwa perencanaan gerak (motion planning) tradisional yang berbasis pada algoritma deterministik seperti A*, Rapidly-exploring Random Tree (RRT), dan Potential Fields mengalami degradasi performa signifikan ketika dihadapkan pada lingkungan dinamis, non-stasioner, dan penuh ketidakpastian — kondisi yang justru merupakan norma di lantai pabrik modern (*[Kala, 2024, DOI:10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)*).

Urgensi ekonomi dari adopsi motion planning berbasis Reinforcement Learning (RL) dapat diukur dari beberapa indikator industri. Menurut laporan internal yang dikutip Kala (2024), downtime akibat tabrakan dan ineisiensi routing pada armada AMR konvensional dapat mencapai 18–23% dari total *productive time*, dengan estimasi kerugian USD 220–450 per jam per armada pada fasilitas e-commerce ber-volume tinggi. Lebih lanjut, integrasi AMR dengan lingkungan manusia (*human-robot collaboration*/HRC) mensyaratkan protokol keamanan dinamis yang tidak dapat dipenuhi oleh planner berbasis aturan statis. Di sinilah RL, dengan kemampuan *sequential decision-making* di bawah ketidakpastian, memberikan nilai tambah strategis.

Kala (2024) menekankan bahwa RL memungkinkan robot untuk *learn-to-navigate* melalui interaksi langsung dengan lingkungan, membangun kebijakan (policy) optimal yang meminimalkan biaya perjalanan sekaligus memaksimalkan keselamatan. Pendekatan ini secara fundamental berbeda dengan motion planning klasik yang memerlukan *complete world model* — asumsi yang hampir selalu dilanggar di skenario dunia nyata. Pelengkap penting datang dari Borah (2024) yang mendemonstrasikan bagaimana arsitektur *Smart Autonomous Multi-agent Systems* (SAMAS) dapat memperluas kapabilitas RL ke koordinasi multi-robot, dengan tetap mempertahankan kapabilitas *Fault Detection, Isolation, and Reconstruction* (FDIR) melalui *nonlinear filtering* ([Borah, 2024, DOI:10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Sinergi kedua kerangka pikir ini menjadi dasar bagi sistem robotik industri masa depan yang *resilient*, *adaptive*, dan *scalable*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Markov Decision Process (MDP) sebagai Fondasi

RL untuk motion planning diformalisasikan sebagai **Markov Decision Process** (MDP) yang didefinisikan oleh tupel $\langle S, A, P, R, \gamma \rangle$:

- $S$: himpunan state (status robot dan persepsi lingkungan),
- $A$: himpunan action (manuver gerak diskret/kontinu),
- $P(s'|s,a)$: probabilitas transisi dari state $s$ ke $s'$ melalui action $a$,
- $R(s,a,s')$: *immediate reward* setelah transisi,
- $\gamma \in [0,1]$: *discount factor* untuk nilai reward masa depan.

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman**:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

Kala (2024) menjelaskan bahwa untuk aplikasi motion planning, state $s$ biasanya merepresentasikan kombinasi antara *pose* robot $(x, y, \theta)$, kecepatan, dan fitur lingkungan yang diekstrak dari sensor (misalnya jarak ke obstacle terdekat, jarak ke goal, sudut bearing).

### 2.2 Fungsi Reward untuk Navigasi

Perancangan *reward shaping* merupakan elemen kritis. Untuk masalah navigasi AMR, Kala (2024) merumuskan reward function sebagai:

$$r_t = -d_t + \alpha \cdot \mathbb{1}_{\text{goal}} - \beta \cdot \mathbb{1}_{\text{collision}} - \delta \cdot |\Delta \theta_t|$$

di mana $d_t$ adalah jarak Euclidean ke target pada timestep $t$, $\mathbb{1}_{\text{goal}}$ adalah *indicator function* bernilai 1 saat goal tercapai, $\mathbb{1}_{\text{collision}}$ bernilai 1 saat terjadi kontak dengan obstacle, dan $|\Delta \theta_t|$ adalah perubahan orientasi (penalty untuk manuver tajam). Parameter $\alpha, \beta, \delta$ adalah *hyperparameter* yang disetel melalui eksperimen atau *Bayesian optimization*.

### 2.3 Algoritma Q-Learning dan Deep Q-Network (DQN)

**Q-Learning** mengaproksimasi fungsi nilai-aksi $Q^*(s,a)$ melalui aturan pembaruan iteratif:

$$Q(s,a) \leftarrow Q(s,a) + \alpha\left[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\right]$$

di mana $\alpha$ adalah *learning rate*. Untuk ruang state kontinu berdimensi tinggi (khas pada AMR dengan sensor LiDAR), Kala (2024) merekomendasikan penggunaan **Deep Q-Network** (DQN) dengan parameter $\theta$, di mana fungsi loss didefinisikan sebagai:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas terbatas. Stabilitas tambahan diperoleh melalui **Double DQN** yang mendekomposisi *action selection* dan *action evaluation*:

$$L(\theta) = \mathbb{E}\left[\left(r + \gamma Q(s',\arg\max_{a'} Q(s',a';\theta);\theta^-) - Q(s,a;\theta)\right)^2\right]$$

### 2.4 Policy Gradient dan Actor-Critic

Untuk action space kontinu (kecepatan linear dan angular pada AMR), metode **Policy Gradient** lebih sesuai. Kala (2024) membahas algoritma REINFORCE dengan objektif:

$$\nabla J(\theta) = \mathbb{E}_{\pi_\theta}\left[\nabla_\theta \log \pi_\theta(a|s) \cdot R_t\right]$$

dengan $R_t = \sum_{k=0}^{T-t} \gamma^k r_{t+k}$. **Actor-Critic** menggabungkan value estimation sebagai *baseline* untuk mengurangi varians:

$$A^{\pi}(s,a) = Q^{\pi}(s,a) - V^{\pi}(s)$$

$$L(\theta_{\text{actor}}) = -\mathbb{E}\left[\log \pi_\theta(a|s) \cdot A^{\pi}(s,a)\right]$$

Borah (2024) melengkapi kerangka ini dengan mengusulkan integrasi **Unscented Kalman Filter** (UKF) untuk estimasi state non-linear pada setiap agen, menghasilkan state estimate $\hat{x}_{t|t}$ yang digunakan sebagai input bagi Q-network: $\hat{s}_t = h(\hat{x}_{t|t})$, sehingga mengurangi dampak *partial observability* ([Borah, 2024, DOI:10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

### 2.5 Multi-Agent Reinforcement Learning (MARL)

Untuk armada multi-AMR, formulasi diperluas menjadi **Decentralized Partially Observable MDP** (Dec-POMDP) $\langle S, A, P, R, O, \gamma \rangle$ dengan $O$ sebagai fungsi observasi. Fungsi Q multi-agen diekstensikan menjadi $Q_i^{\pi}(s, a_1, \dots, a_N)$. Pendekatan QMIX yang diadopsi dalam literatur MARL menggunakan *mixing network*:

$$Q_{\text{tot}} = f_{\text{mix}}(Q_1, Q_2, \dots, Q_N; \phi)$$

dengan *monotonicity constraint* $\frac{\partial Q_{\text{tot}}}{\partial Q_i} \geq 0$ untuk menjamin *credit assignment* yang konsisten.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem AMR Berbasis RL

Implementasi motion planning RL di lingkungan industri mengikuti arsitektur berlapis:

| Lapisan | Komponen | Fungsi |
|---------|----------|--------|
| **Persepsi** | LiDAR 2D/3D, IMU, kamera RGB-D | Estimasi state lingkungan |
| **Estimasi State** | UKF/EKF [Borah, 2024] | Filter noise sensor |
| **Representasi** | Occupancy grid atau CNN-based feature extractor | Encoding state → vektor fitur |
| **Decision-Making** | DQN/Actor-Critic policy network | Seleksi action optimal |
| **Eksekusi** | Motion controller (PID/MPC) | Tracking referensi trajectory |
| **Monitoring** | FDIR module [Borah, 2024] | Deteksi anomali sensor/aktuator |

### 3.2 SOP Implementasi (8 Tahapan)

1. **Pemetaan Lingkungan Awal**: SLAM (Simultaneous Localization and Mapping) untuk membentuk *occupancy grid* resolusi 5–10 cm.
2. **Desain Reward Function**: Melibatkan *domain expert* dan *safety engineer*; validasi melalui simulasi Monte Carlo minimal 10.000 episode.
3. **Inisialisasi Policy Network**: Arsitektur tipikal — 3–4 *fully-connected layer* dengan aktivasi ReLU, output layer sesuai dimensi action space.
4. **Training Loop**: Episode horizon $T_{\max} = 1000$ steps, replay buffer $|\mathcal{D}| = 10^6$, target network update setiap $\tau = 1000$ steps.
5. **Sim-to-Real Transfer**: *Domain randomization* pada parameter dinamika (massa, friction, sensor noise) sebelum deployment ke robot fisik.
7. **Validasi di Test Track**: 50+ skenario termasuk *edge cases* (lorong sempit, pejalan kaki, pencahayaan rendah).
8. **Continuous Learning**: *Online fine-tuning* dengan *safety layer* berbasis Control Barrier Function (CBF) untuk mencegah catastrophic action selama eksplorasi.

### 3.3 Standar Industri Terkait

- **ISO 3691-4:2020** — *Driverless industrial trucks — Safety requirements*
- **ISO 13482:2014** — *Personal care robots — Safety requirements*
- **ANSI/RIA R15.