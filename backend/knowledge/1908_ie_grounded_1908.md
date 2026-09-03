# 1908 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Robot Bergerak Otonom dalam Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan inisiatif *Smart Manufacturing* telah menempatkan robot bergerak otonom (*Autonomous Mobile Robots*/AMR) sebagai tulang punggung utama dalam rantai pasok modern. Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* menyoroti bahwa perencanaan gerak (motion planning) bukan sekadar persoalan navigasi geometris, melainkan permasalahan keputusan sekuensial yang harus diselesaikan secara real-time di lingkungan industri yang dinamis, seperti gudang *e-commerce*, lantai produksi fleksibel, dan terminal kontainer. Permasalahan ini menjadi semakin kompleks ketika robot menghadapi dinamika non-linear, ketidakpastian sensorik (noisy LiDAR, occlusion kamera), serta kehadiran agen-agen lain yang juga bergerak secara simultan. Kala (2024) berargumen bahwa pendekatan klasik berbasis *graph search* (A*, D*-Lite) dan *sampling-based planning* (RRT, PRM) menunjukkan degradasi performa yang signifikan ketika ruang keadaan (*state space*) membesar secara eksponensial dengan bertambahnya derajat kebebasan robot dan dimensi lingkungan.

Konteks industri yang melatarbelakangi penggunaan reinforcement learning (RL) dalam motion planning sangat erat kaitannya dengan tiga urgensi operasional. Pertama, **urgensi ekonomi**: biaya downtime akibat tabrakan atau deadlock AMR di gudang otomatis Amazon, Alibaba, dan DHL dilaporkan mencapai USD 50.000 per jam per fasilitas (Kala, 2024). Kedua, **urgensi teknis**: metode konvensional *A\** dan *RRT\** memerlukan *re-planning* penuh setiap kali lingkungan berubah, sehingga boros secara komputasional pada robot dengan sumber daya komputasi terbatas. Ketiga, **urgensi keselamatan dan keandalan**: seperti yang ditegaskan oleh Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-Agent Systems* (SAMAS), sistem otonom modern menghadapi potensi malfungsi pada sensor, aktuator, komunikasi, dan kontroler yang memerlukan *Fault Detection, Isolation, and Reconstruction* (FDIR). Borah (2024) secara eksplisit menyebutkan bahwa integrasi RL dengan nonlinear filtering (misalnya *Extended Kalman Filter* dan *Particle Filter*) memungkinkan agen tidak hanya menavigasi, tetapi juga secara otonom mendeteksi, mengisolasi, dan merekonstruksi kerusakan komponen tanpa intervensi manusia. 

Dalam lanskap manufaktur modern, kombinasi RL dengan arsitektur multi-agen juga mendukung paradigma *cooperative manufacturing* di mana beberapa AMR harus berkolaborasi dalam menyelesaikan task assignment, *traffic management*, dan *formation control*. Hal ini menciptakan kebutuhan akan algoritma *Multi-Agent Reinforcement Learning* (MARL) yang mampu menangani *partial observability* dan *non-stationarity* akibat perubahan kebijakan agen lain. Dengan demikian, modul 1908 ini membahas secara sistematis bagaimana metodologi RL—mulai dari formulasi *Markov Decision Process* (MDP), algoritma value-based seperti Q-learning dan SARSA, hingga algoritma policy-based seperti REINFORCE dan Actor-Critic—diterapkan untuk menghasilkan kebijakan navigasi yang optimal, adaptif, dan robust terhadap gangguan industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) menyatakan bahwa seluruh permasalahan motion planning otonom dapat diformulasikan sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tuple $(S, A, P, R, \gamma)$, di mana:

- $S$ adalah himpunan keadaan (*states*) yang merepresentasikan konfigurasi robot dalam ruang kerja, misalnya posisi $(x, y)$, orientasi $\theta$, dan kecepatan linear $v$ serta angular $\omega$.
- $A$ adalah himpunan aksi (*actions*) yang tersedia bagi robot, seperti gerak translasi, rotasi, atau diskretisasi aksi kecepatan.
- $P(s'|s,a)$ adalah fungsi transisi probabilistik yang menyatakan peluang berpindah dari keadaan $s$ ke $s'$ apabila aksi $a$ diambil.
- $R: S \times A \times S \rightarrow \mathbb{R}$ adalah fungsi reward yang mengukur kualitas transisi.
- $\gamma \in [0,1)$ adalah *discount factor* yang menentukan bobot relatif reward masa depan terhadap reward segera.

Tujuan utama RL adalah menemukan kebijakan optimal $\pi^*: S \rightarrow A$ yang memaksimalkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

### 2.2 Persamaan Bellman dan Optimalitas

Fungsi nilai kebijakan $\pi$ didefinisikan melalui *Bellman Expectation Equation* (Kala, 2024):

$$V^\pi(s) = \sum_{a \in A} \pi(a|s) \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^\pi(s')\right]$$

Fungsi nilai optimal $V^*(s)$ memenuhi *Bellman Optimality Equation*:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

Secara ekuivalen, fungsi aksi-nilai optimal $Q^*(s,a)$ memenuhi:

$$Q^*(s,a) = \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

### 2.3 Algoritma Q-Learning untuk Motion Planning

Untuk permasalahan dengan state space diskret dan tidak diketahui secara eksplisit, Kala (2024) mengusulkan penggunaan Q-learning dengan aturan pembaruan (*update rule*):

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Aturan ini menjamin konvergensi ke $Q^*$ dengan probabilitas 1 selama seluruh pasangan $(s,a)$ dikunjungi tak terhingga kali dan $\alpha$ memenuhi *Robbins-Monro conditions*: $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.4 Formulasi Reward untuk Navigasi Otonom

Kala (2024) merancang fungsi reward berbentuk *sparse reward* dengan augmentasi *potential-based shaping* untuk mempercepat konvergensi:

$$R(s, a, s') = R_{\text{goal}}(s') + \gamma \Phi(s') - \Phi(s)$$

dengan komponen reward tujuan:

$$R_{\text{goal}}(s') = \begin{cases} +R_{\text{max}} & \text{jika } \|p_{s'} - p_{\text{goal}}\| < \epsilon \\ -R_{\text{collision}} & \text{jika terjadi tabrakan} \\ -c \cdot d(s', s_{\text{goal}}) & \text{state lainnya} \end{cases}$$

di mana $d(s', s_{\text{goal}})$ adalah jarak Euclidean antara posisi robot saat ini dan target, serta $c > 0$ adalah koefisien biaya jarak.

### 2.5 Deep Q-Network (DQN) untuk State Kontinu

Untuk mengatasi keterbatasan Q-learning pada state space kontinu, Kala (2024) membahas penggunaan DQN dengan neural network sebagai approximator $Q(s,a;\theta)$. Fungsi kehilangan (*loss function*) yang diminimalkan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer* yang menyimpan tuple pengalaman untuk dekorelasi sampel.

### 2.6 Multi-Agent Reinforcement Learning (MARL)

Borah (2024) mengembangkan kerangka SAMAS dengan formulasi *Decentralized Partially Observable Markov Decision Process* (Dec-POMDP) untuk $N$ agen:

$$\langle S, \{A_i\}_{i=1}^N, P, \{R_i\}_{i=1}^N, \{\Omega_i\}_{i=1}^N, \{O_i\}_{i=1}^N, \gamma \rangle$$

di mana setiap agen $i$ menerima observasi parsial $o_i \in \Omega_i$ melalui fungsi observasi $O_i$ dan memilih aksi berdasarkan kebijakan kondisional $\pi_i(a_i|\tau_i)$, dengan $\tau_i$ adalah *history* observasi agen. Dalam konteks FDIR, Borah (2024) menambahkan residual filter:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k \left( y_k - h(\hat{x}_{k|k-1}) \right)$$

di mana $K_k$ adalah Kalman gain yang diadaptasi secara online oleh agen RL berdasarkan tingkat kepercayaan terhadap sensor.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP terstruktur yang selaras dengan standar ISO 10218 (robotik industri) dan ISO 3691-4 (AMR). Berdasarkan kerangka yang diajukan Kala (2024) dan Borah (2024), prosedur operasional dapat dirangkum dalam diagram alir berikut:

**Tahap 1 — Pemodelan Lingkungan dan Diskretisasi**

1. Lakukan pemetaan fasilitas menggunakan SLAM (*Simultaneous Localization and Mapping*) dengan sensor LiDAR 2D/3D untuk menghasilkan occupancy grid map dengan resolusi sel $\Delta = 0{,}05$ m hingga $0{,}5$ m.
2. Definisikan state space $S$ sebagai himpunan tuple $(x, y, \theta)$ dengan diskretisasi posisi pada grid dan orientasi pada $\{0°, 45°, 90°, ..., 315°\}$ (8 arah diskret).
3. Identifikasi zona eksklusi (*no-go zones*), zona dinamis (jalur pejalan kaki), dan titik-titik *pick-up/drop-off* (PUDOs).

**Tahap 2 — Desain MDP dan Fungsi Reward**

1. Tentukan aksi $A$: $\{ \text{forward}, \text{turn-left}, \text{turn-right}, \text{stop} \}$ dengan kecepatan tetap $v_{\max} = 1{,}5$ m/s.
2. Rancang reward function dengan bobot: $R_{\text{goal}} = +100$, $R_{\text{collision}} = -50$, dan $c = -1$ untuk biaya jarak.
3. Validasi fungsi reward melalui simulasi Monte Carlo dengan minimal $n = 10.000$ episode.

**Tahap 3 — Pelatihan Kebijakan RL**

1. Inisialisasi replay buffer $\mathcal{D}$ dengan kapasitas 100.000 tuple.
2. Latih kebijakan menggunakan algoritma DQN dengan hyperparameter: $\alpha = 10^{-4}$ (Adam optimizer), $\gamma = 0{,}99$, $\epsilon$-greedy decay dari $1{,}0$ ke $0{,}05$ selama 50.000 episode.
3. Implementasikan mekanisme *safety layer* (Kala, 2024) berupa *Control Barrier Function* (CBF) untuk menjamin hard constraint:

$$h(x_{k+1}) \geq (1-\eta) h(x_k)$$

di mana $\eta \in (0,1)$ adalah parameter konservativitas.

**Tahap 4 — Validasi Simulasi dan Hardware-in-the-Loop (HIL)**

1. Uji kebijakan pada simulator fisika (Gazebo, Isaac Sim) dengan skenario edge cases: lalu lintas padat, sensor noise, dan kegagalan aktuator.
2. Lakukan *Software-in-the-Loop* (SIL) testing sesuai dengan standar IEC 61508 SIL 2.
3. Validasi menggunakan *Hardware-in-the-Loop* dengan robot fisik di lingkungan terbatas (cage area).

**Tahap 5 — Deployment, Monitoring, dan FDIR**

1. Deploy kebijakan ke fleet AMR dengan *edge computing* (NVIDIA Jetson Orin).
2. Aktifkan modul FDIR (Borah, 2024) yang terdiri dari:
   - **Fault Detection**: monitor residual $r_k = y_k - \hat{y}_k$ dengan threshold adaptif