# 1860 — Perencanaan Gerak (Motion Planning) Otonom menggunakan Pembelajaran Penguatan (Reinforcement Learning) untuk Sistem Robotik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Motion Planning using Reinforcement Learning* — Integrasi Markov Decision Process (MDP), Q-Learning, dan Deep Reinforcement Learning (DRL) pada Multi-Agent Autonomous System
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Disertasi Peer-Reviewed. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan inisiatif *Smart Manufacturing* telah menempatkan *Autonomous Mobile Robot* (AMR) dan *Automated Guided Vehicle* (AGV) sebagai tulang punggung sistem logistik internal, perakitan fleksibel, dan rantai pasok just-in-time. Rahul Kala (2024) dalam chapter "Motion planning using reinforcement learning" pada buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak otonom不再是 merupakan persoalan geometris deterministik, melainkan masalah keputusan stokastik berdimensi tinggi di mana agen robotik harus belajar menavigasi lingkungan dinamis, menghindari halangan bergerak, dan mengoptimalkan konsumsi energi secara simultan. Kala menekankan bahwa pendekatan klasik seperti A*, RRT, dan Potential Field menjadi tidak memadai ketika lingkungan kerja bersifat non-stasioner (misalnya lantai pabrik dengan pekerja manusia, palet yang berpindah, dan perubahan layout akibat produksi mix-model).

Konteks industri yang melatarbelakangi urgensi topik ini cukup kuat. Berdasarkan proyeksi internal industri yang dikutip Kala (2024), pasar global AMR/AGV diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR 14,3%, didorong oleh e-commerce fulfilment (Amazon, Alibaba), manufaktur semikonduktor (TSMC, Intel), dan otomatisasi gudang dingin. Pada lingkungan ini, *pick time* per item dapat ditekan 30–45% bila perencanaan gerak AMR bersifat adaptif real-time, bukan berbasis peta statis. Lebih lanjut, Kaustav Borah (2024) dalam disertasinya (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas cakupan dari robot tunggal ke *Smart Autonomous Multi-Agent Systems* (SAMAS) yang menuntut koordinasi kooperatif, deteksi-fault, dan rekonstruksi perilaku secara on-line. Sambutan industri terhadap arsitektur SAMAS sangat positif karena downtime sistem yang mampu menurunkan Fault Detection Latency hingga 60% berdampak langsung pada *Overall Equipment Effectiveness* (OEE) dan biaya garansi.

Secara ekonomis, kesalahan perencanaan gerak konvensional (collision, deadlock, path inefficiency) berkontribusi pada 18–25% kerugian produktivitas sistem AMR menurut studi kasus yang dirangkum Kala (2024). Oleh karena itu, integrasi Reinforcement Learning (RL) — khususnya Deep RL — ke dalam motion planning bukan sekadar peningkatan teknis, melainkan kebutuhan strategis untuk mempertahankan *competitive advantage* perusahaan manufaktur dan logistik dalam era *mass customization* dan *lot-size-one*. Dokumen modul ini akan membedah formulasi matematis, SOP implementasi, dan studi kasus kuantitatif agar para perekayasa industri dapat mengadopsi teknologi ini secara terstruktur dan terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformulasikan permasalahan motion planning otonom sebagai MDP tuple:

$$\mathcal{M} = \langle S, A, P, R, \gamma \rangle$$

dengan $S$ adalah himpunan state (konfigurasi robot: posisi $(x,y)$, orientasi $\theta$, kecepatan $v$, status sensor); $A$ adalah himpunan aksi diskret/kontinu (translasi, rotasi, *stop*); $P(s'|s,a)$ adalah probabilitas transisi state; $R(s,a,s')$ adalah *immediate reward*; dan $\gamma \in [0,1)$ adalah *discount factor*. Untuk AMR di lantai pabrik dengan grid $N \times N$, dimensi state space adalah $|S| = N^2 \times |\Theta| \times |V|$, sehingga untuk grid $20 \times 20$ dengan 8 arah orientasi dan 3 level kecepatan kita memperoleh $|S| = 9.600$ state — masih dapat ditangani oleh tabular Q-learning.

### 2.2 Bellman Optimality Equation

Fungsi nilai optimal $V^*(s)$ memenuhi *Bellman optimality equation*:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

Karena $P(s'|s,a)$ sulit diakses secara eksplisit di lingkungan riil (model-free RL), Kala (2024) mengusulkan penggunaan Q-function yang langsung diestimasi dari interaksi:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

dengan $\alpha \in (0,1]$ adalah *learning rate*. Algoritma ini menjamin konvergensi ke $Q^*(s,a)$ selama semua pasangan $(s,a)$ dikunjungi tak hingga kali (bersifat *exploratory sufficient*).

### 2.3 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Untuk lingkungan kontinu (continuous state space seperti LIDAR point cloud), Kala (2024) mengadopsi DQN dengan *experience replay* buffer $\mathcal{D}$ dan *target network* $\hat{Q}$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} \hat{Q}(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

Update gradien: $\theta \leftarrow \theta - \eta \nabla_\theta L(\theta)$, dengan $\theta^-$ disinkronkan tiap $C$ langkah. Arsitektur tipikal: convolutional layers untuk pemrosesan peta okupansi + fully-connected layers untuk Q-value output per aksi diskret.

### 2.4 Policy Gradient dan Actor-Critic

Untuk aksi kontinu (misalnya kontrol kecepatan dan steering angle secara simultan), Borah (2024) menggunakan Actor-Critic (A2C) dengan *advantage function*:

$$A^\pi(s,a) = Q^\pi(s,a) - V^\pi(s)$$

Update parameter policy $\phi$ (actor):

$$\nabla_\phi J(\phi) = \mathbb{E}_{s \sim \rho^\pi} \left[ \nabla_\phi \log \pi_\phi(a|s) \cdot A^\pi(s,a) \right]$$

### 2.5 Fungsi Reward untuk Motion Planning Industri

Kala (2024) memberikan rekomendasi reward shaping untuk konteks AMR manufaktur:

$$r(s,a,s') = r_{\text{goal}} \cdot \mathbb{1}_{\text{goal}} + r_{\text{collision}} \cdot \mathbb{1}_{\text{collision}} + r_{\text{step}} + \beta \cdot d_{\text{progress}}$$

dengan $r_{\text{goal}} = +100$, $r_{\text{collision}} = -100$, $r_{\text{step}} = -1$ (penalti waktu), dan $d_{\text{progress}}$ adalah jarak Euclidean menuju goal (untuk *reward shaping* yang mempercepat konvergensi).

### 2.6 Koordinasi Multi-Agen (Borah, 2024)

Pada SAMAS, Borah menggunakan *decentralized partially observable MDP* (Dec-POMDP) dengan komunikasi antar-agen:

$$\pi_i^*(s_i, m_{i}) = \arg\max_{\pi_i} \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t r_t(s_t, a_t) \right]$$

dengan $m_i$ adalah *message* yang diterima agen $i$ dari agen tetangga, memungkinkan koalisi dan alokasi tugas dinamis untuk menghindari deadlock di *intersection zone* gudang.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lantai pabrik mengikuti SOP 7-fase yang distandarkan oleh referensi Kala (2024) dan disesuaikan dengan framework Borah (2024) untuk multi-agen:

### Fase 1 — Pemetaan Lingkungan dan Akuisisi Data
1. Deploy *SLAM* (Simultaneous Localization and Mapping) menggunakan LIDAR 2D/3D dan odometri IMU untuk menghasilkan *occupancy grid* dengan resolusi 5 cm.
2. Identifikasi zona dinamis: area pekerja, conveyor bergerak, charging station.
3. Ekstrak *topological map* dengan *nodes* (persimpangan, rak, workstation) dan *edges* (koridor).

### Fase 2 — Desain MDP
1. Diskretisasi state (jika tabular RL) atau definisikan *state representation* (jika DRL): misal $s_t = [\text{robot pose}, \text{LIDAR scan}_{64}, \text{goal vector}]$.
2. Definisikan aksi: $\{ \text{forward}, \text{left}, \text{right}, \text{stop} \}$ untuk diskret; atau $(v, \omega)$ untuk kontinu.
3. Rancang reward function sesuai persamaan di Sub-bagian 2.5.

### Fase 3 — Pelatihan Simulasi (Digital Twin)
1. Bangun *digital twin* lantai pabrik dalam simulator (Gazebo, Unity ML-Agents, atau NVIDIA Isaac Sim) dengan fisika realistis.
2. Lakukan *curriculum learning*: mulai dari skenario tanpa halangan → halangan statis → halangan dinamis → multi-robot.
3. Training DQN selama $M = 10^6$ episode dengan $\epsilon$-greedy exploration decaying dari 1,0 ke 0,05: $\epsilon_t = \epsilon_{\min} + (\epsilon_{\max} - \epsilon_{\min}) e^{-\lambda t}$, dengan $\lambda = 10^{-4}$.

### Fase 4 — Validasi Simulasi
1. Ukur *success rate* (goal tercapai tanpa collision) pada $N=1.000$ episode uji.
2. Ukur *average path length* dan *time-to-goal*.
3. Bandingkan dengan baseline A* (path optimal tanpa halangan dinamis).
4. Threshold lulus: success rate ≥ 98%, rata-rata path length ≤ 1,15× panjang A*.

### Fase 5 — Transfer Learning ke Robot Fisik
1. *Domain randomization*: vary sim-to-real gap (tekstur, pencahayaan, slip roda).
2. *Fine-tuning* dengan *real-world demonstrations* menggunakan *Behavior Cloning* sebagai inisialisasi.
3. Safety wrapper: *emergency stop* triggered jika $\|v\| > v_{\max}$ atau jarak ke halangan $< d_{\text{safe}}$.

### Fase 6 — Deployment Multi-Agen (Borah, 2024)
1. Setiap AMR menjalankan policy $\pi_i$ lokal secara *decentralized*.
2. *Intersection manager* (bisa berupa agen RL terpisah atau protokol *time slot*) memprioritaskan akses.
3. *Fault detection module* (FDIR) memantau anomaly pada sensor/aktuator; jika terdeteksi, agen tetangga melakukan re-planning melalui komunikasi peer-to-peer.

### Fase 7 — Monitoring & Continuous Improvement
1. Logging *t