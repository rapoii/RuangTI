# 2868 — Motion Planning Cerdas Menggunakan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era otomatisasi industri 4.0 telah mengubah secara fundamental paradigma operasional di lantai produksi, gudang logistik, dan rantai pasok global. Permintaan akan sistem yang mampu beroperasi secara otonom—tanpa ketergantungan penuh pada intervensi manusia—meningkat tajam seiring dengan kompleksitas sistem rekayasa modern yang melibatkan sensor, aktuator, jaringan komunikasi, dan pengendali terdistribusi. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa motion planning merupakan salah satu tantangan paling fundamental dalam pengembangan robot otonom, karena keputusan trajectory secara langsung menentukan keselamatan, efisiensi energi, throughput produksi, dan keandalan sistem secara keseluruhan [DOI: 10.1016/b978-0-443-18908-1.00016-9]. Kala berargumen bahwa pendekatan classical motion planning—seperti Rapidly-exploring Random Tree (RRT), Probabilistic Roadmaps (PRM), dan Artificial Potential Fields—memiliki keterbatasan signifikan ketika berhadapan dengan lingkungan dinamis, obstacle bergerak, dan kebutuhan adaptasi real-time terhadap perubahan kondisi operasional.

Urgensi ekonomis dari adopsi reinforcement learning (RL) dalam motion planning sangat konkret. Studi McKinsey (2023) memperkirakan pasar robotika logistik akan mencapai USD 75,4 miliar pada 2030, dengan Automated Guided Vehicle (AGV) dan Autonomous Mobile Robot (AMR) menyumbang porsi dominan. Dalam konteks tersebut, downtime akibat perencanaan jalur yang suboptimal atau kegagalan navigasi dapat menimbulkan kerugian hingga USD 50.000 per jam di fasilitas manufaktur semikonduktor. Kaustav Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems (SAMAS)* menunjukkan bahwa integrasi RL dengan nonlinear filtering—seperti Extended Kalman Filter (EKF) dan Particle Filter—memungkinkan sistem multi-agen tidak hanya melakukan perencanaan gerak adaptif tetapi juga melakukan Fault Detection, Isolation, and Reconstruction (FDIR) secara simultan [DOI: 10.32920/25412566.v1]. Pendekatan ini secara langsung menjawab kebutuhan industri akan sistem yang resilient terhadap degradasi sensor dan failure mode yang tidak terprediksi.

Kedua literatur ini saling melengkapi: Kala menyediakan kerangka algoritmik RL untuk motion planning individual, sementara Borah memperluas ke arsitektur multi-agen dengan kapabilitas fault-tolerant. Dari perspektif Teknik Industri, sinergi keduanya merepresentasikan evolusi dari *single-robot cell* menuju *swarm robotics* dan *flexible manufacturing system* yang sepenuhnya otonom. Modul ini akan mengintegrasikan kedua perspektif tersebut menjadi satu kerangka rekayasa yang aplikatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Markov Decision Process (MDP)

Reinforcement learning untuk motion planning diformulasikan secara matematis sebagai Markov Decision Process (MDP) yang didefinisikan oleh tuple lima-elemen:

$$\mathcal{M} = (S, A, P, R, \gamma)$$

di mana $S$ adalah himpunan state (konfigurasi robot dan lingkungannya), $A$ adalah himpunan action (perintah motorik seperti kecepatan linear $v$ dan angular $\omega$), $P(s'|s,a)$ adalah fungsi probabilitas transisi state, $R(s,a,s')$ adalah fungsi reward, dan $\gamma \in [0,1)$ adalah discount factor. Asumsi Markov menyatakan bahwa transisi state hanya bergantung pada state dan action saat ini, tanpa memerlukan memori historis:

$$P(s_{t+1} | s_t, a_t, s_{t-1}, a_{t-1}, \ldots, s_0, a_0) = P(s_{t+1} | s_t, a_t)$$

### 2.2 Fungsi Nilai dan Persamaan Bellman

Tujuan utama adalah menemukan policy optimal $\pi^*: S \rightarrow A$ yang memaksimalkan expected cumulative reward. Fungsi nilai state didefinisikan sebagai:

$$V^\pi(s) = \mathbb{E}_\pi \left[ \sum_{t=0}^{\infty} \gamma^t R(s_t, a_t, s_{t+1}) \bigg| s_0 = s \right]$$

Persamaan Bellman optimal, yang menjadi dasar konvergensi value iteration, adalah:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

### 2.3 Q-Learning Update Rule

Karena transisi probabilitas $P(s'|s,a)$ sulit diketahui di dunia nyata, Kala (2024) merekomendasikan algoritma model-free Q-learning yang secara langsung mempelajari action-value function $Q(s,a)$. Update rule-nya adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah learning rate dan $\delta_t = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)$ disebut sebagai temporal-difference (TD) error. Konvergensi terjamin apabila semua state-action pairs dikunjungi cukup sering dan $\alpha$ memenuhi kondisi Robbins-Monro: $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.4 Reward Function untuk Motion Planning

Perancangan reward function adalah komponen kritis. Untuk robot navigasi, fungsi tipikal adalah:

$$r(s_t, a_t, s_{t+1}) = \begin{cases} +R_g & \text{jika } s_{t+1} \in S_{goal} \\ -R_c & \text{jika } s_{t+1} \in S_{collision} \\ -\beta \cdot d(s_{t+1}, S_{goal}) - \lambda \cdot \|a_t\|^2 & \text{otherwise} \end{cases}$$

di mana $R_g$ dan $R_c$ adalah reward/penalty terminal, $d(\cdot,\cdot)$ adalah jarak Euclidean ke goal, $\beta$ adalah bobot proximity, dan $\lambda \cdot \|a_t\|^2$ adalah penalti energi untuk aksi berlebihan.

### 2.5 Eksistensi Multi-Agen dan FDIR

Untuk sistem multi-agen seperti dibahas Borah (2024), state setiap agent $i$ menjadi:

$$s_t^i = \left[ x_t^i, y_t^i, \theta_t^i, \dot{x}_t^i, \dot{y}_t^i, \hat{f}_t^i \right]^T$$

di mana $\hat{f}_t^i$ adalah estimasi fault state dari nonlinear filter (EKF). Persamaan state menjadi:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t \left( z_t - h(\hat{x}_{t|t-1}) \right)$$

dengan $K_t$ Kalman gain dan $z_t$ observasi sensor. Fault detection dilakukan melalui residual test: $\chi^2_t = r_t^T \Sigma_r^{-1} r_t > \tau_{threshold}$ mengindikasikan anomali yang memerlukan reconfiguration trajectory.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning dalam industri mengikuti SOP terstruktur yang dapat dipetakan dalam diagram alir berikut:

**Tahap 1 — Pemodelan Lingkungan dan State Space Engineering.**
Lingkungan kerja (pabrik, gudang, rumah sakit) dipetakan menjadi occupancy grid dengan resolusi $\Delta x \times \Delta y$. Untuk fasilitas 100m × 50m dengan resolusi 0,5 m, state space berukuran $|S| = 200 \times 100 = 20.000$ states. Action space untuk differential-drive robot: $A = \{ \text{forward}, \text{turn-left}, \text{turn-right}, \text{stop} \}$ dengan 4 diskret aksi atau continuous action space $a = [v, \omega]^T$.

**Tahap 2 — Perancangan Reward Function dan Simulasi.**
Reward function dirancang menggunakan kerangka Kala (2024): $R_g = +100$, $R_c = -100$, $\beta = 1,0$ (reward shaping), $\lambda = 0,01$ (energi penalty). Simulasi dibangun dalam environment digital twin (Gazebo, Unity, atau NVIDIA Isaac Sim) dengan physics engine realistis.

**Tahap 3 — Pelatihan dan Validasi.**
Algoritma Q-learning atau Deep Q-Network (DQN) dilatih selama $N_{episodes} = 5.000 - 50.000$ episode. Hyperparameter: $\alpha = 0{,}1$, $\gamma = 0{,}95$, $\epsilon_{decay}$ dari 1,0 ke 0,01 (ε-greedy exploration). Validasi dilakukan terhadap metrik: success rate $> 95\%$, average path length ratio (terhadap path optimal) $< 1,3$, collision rate $< 0,5\%$.

**Tahap 4 — Integrasi FDIR (Borah Framework).**
Untuk sistem multi-agen, tambahkan modul nonlinear filter (EKF/Particle Filter) untuk state estimation, residual generation, dan fault isolation. Sambungkan ke reconfiguration policy yang memilih action fallback ketika fault terdeteksi.

**Tahap 5 — Deployment dan Continuous Learning.**
Implementasi di ARM fisik (seperti TurtleBot 4, MiR250, atau OTTO 100). Monitor dengan KPI industri: Mean Time Between Failures (MTBF), Overall Equipment Effectiveness (OEE), dan throughput (unit/jam).

Arsitektur teknologi mengikuti standar ISO 10218 (Robot Safety), ISO/TS 15066 (Collaborative Robots), dan ASTM F45 (Autonomous Mobile Robots).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: AMR Navigasi di Gudang E-commerce

**Skenario:** Sebuah gudang e-commerce 30m × 20m akan diterapkan AMR dengan RL-based motion planning. Robot harus bergerak dari pick station (titik A = (2,2)) ke drop station (titik B = (28,18)) dengan menghindari 3 obstacle statis dan 2 obstacle dinamis.

**Parameter Input:**
- Grid resolution: 1 m × 1 m → $|S| = 30 \times 20 = 600$ states
- Action space: 4 diskret (up, down, left, right)
- Hyperparameter: $\alpha = 0{,}1$, $\gamma = 0{,}9$, $\epsilon_0 = 0{,}9$, $\epsilon_{min} = 0{,}05$, $\epsilon_{decay} = 0{,}995$
- Episode maximum steps: 100
- Total training episodes: $N = 1.000$

**Langkah Perhitungan Manual — Update Q-Learning:**

Inisialisasi $Q(s,a) = 0$ untuk semua pasangan. Robot di state $s_0 = (2,2)$, action $a_0 = \text{right}$, berpindah ke $s_1 = (3,2)$. Misalkan $s_1$ adalah free state (bukan goal/collision):

$$r_1 = -\beta \cdot d((3,2), (28,18)) - \lambda \cdot \|a_0\|^2$$

Jarak Euclidean: $d = \sqrt{(28-3)^2 + (18-2)^2} = \sqrt{625 + 256} = \sqrt{881} = 29{,}68$ m

$$r_1 = -1{,}0 \times 29{,}68 - 0{,}01 \times 1 = -29{,}69$$

Update Q-value:

$$Q((2,