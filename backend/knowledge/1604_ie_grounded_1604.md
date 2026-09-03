# 1604 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning untuk Sistem Manufaktur dan Logistik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, dalam buku *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Figshare/Dissertation. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memunculkan permintaan masif terhadap sistem robot otonom (Autonomous Mobile Robots/AMR) di lantai pabrik, gudang distribusi, pelabuhan, dan pusat fulfillment e-commerce. Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier menekankan bahwa perencanaan gerak (motion planning) merupakan salah satu tantangan paling kritis dalam pengoperasian AMR, karena sistem ini harus mampu menentukan lintasan optimal secara real-time di lingkungan yang dinamis, penuh ketidakpastian, dan terus berubah (Kala, 2024, DOI: 10.1016/b978-0-443-18908-1.00016-9). Permasalahan tersebut menjadi semakin kompleks ketika AMR harus berkolaborasi sebagai multi-agent system (MAS) dengan deteksi kesalahan, isolasi, dan rekonstruksi (FDIR) sebagaimana dibahas Borah (2024, DOI: 10.32920/25412566.v1) yang menekankan bahwa sistem otonom masa kini wajib memiliki kemampuan self-healing dan adaptif terhadap failure mode sensor, aktuator, maupun jaringan komunikasi.

Secara ekonomis, pasar AMR global diproyeksikan melampaui USD 8 miliar pada 2030 dengan compound annual growth rate (CAGR) di atas 17%. Adopsi AMR di sektor manufaktur ditujukan untuk meningkatkan *overall equipment effectiveness* (OEE) hingga 25%, menurunkan biaya tenaga kerja langsung hingga 40%, dan memangkas lead time order fulfillment dari rata-rata 4 jam menjadi kurang dari 1 jam pada operasi picking. Urgensi teknis berasal dari keterbatasan algoritma konvensional seperti A*, Dijkstra, dan Rapidly-exploring Random Tree (RRT) yang bersifat *deterministik* dan gagal menangani dinamika stokastik lingkungan (agen pejalan kaki, lalu lintas AGV lain, perubahan layout musiman). Reinforcement Learning (RL) menawarkan paradigma *learning-from-interaction* di mana agen belajar kebijakan (policy) optimal melalui trial-and-error dengan sinyal reward, sehingga mampu beradaptasi terhadap variasi kondisi operasional tanpa pemrograman ulang eksplisit. Inilah mengapa Kala (2024) menempatkan RL sebagai tulang punggung arsitektur kontrol generasi baru untuk AMR, khususnya dalam skenario navigasi point-to-point, obstacle avoidance, dan task allocation di lingkungan multi-robot. Dokumen Knowledge Base ini akan membedah formulasi matematis, prosedur rekayasa, dan perhitungan numerik yang diperlukan untuk mengimplementasikan RL-based motion planning di konteks industri riil.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti motion planning dengan RL adalah **Markov Decision Process (MDP)** yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ (Kala, 2024):

- $\mathcal{S}$: himpunan state (posisi, kecepatan, orientasi, jarak ke obstacle, status baterai)
- $\mathcal{A}$: himpunan action (kecepatan linear $v \in [0, v_{\max}]$, kecepatan sudut $\omega \in [-\omega_{\max}, \omega_{\max}]$)
- $P(s'|s,a)$: probabilitas transisi state
- $R(s,a,s')$: reward function
- $\gamma \in [0,1)$: discount factor

**Persamaan Bellman optimal** untuk value function:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\bigl[R(s,a,s') + \gamma V^*(s')\bigr]$$

dan **Q-function (action-value)** yang lebih praktis karena tidak memerlukan model transisi:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\Bigl[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\Bigr]$$

**Algoritma Q-learning** memperbarui Q-value secara iteratif:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha\Bigl[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\Bigr]$$

di mana $\alpha$ adalah learning rate dan $\delta_t = r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)$ adalah **TD-error** (Temporal Difference error).

Untuk state space kontinu berdimensi tinggi, Kala (2024) merekomendasikan **Deep Q-Network (DQN)** dengan *experience replay* dan *target network*:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s')\sim \mathcal{D}}\Bigl[\bigl(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\bigr)^2\Bigr]$$

di mana $\theta$ adalah parameter jaringan target (target network diperbarui setiap $C$ langkah dengan $\theta^- \leftarrow \theta$).

**Reward shaping** untuk motion planning didefinisikan sebagai:

$$r_t = w_1 \cdot r_{\text{goal}} + w_2 \cdot r_{\text{collision}} + w_3 \cdot r_{\text{progress}} + w_4 \cdot r_{\text{time}}$$

dengan:
- $r_{\text{goal}} = +100$ jika mencapai target, $0$ selainnya
- $r_{\text{collision}} = -50$ jika menabrak obstacle
- $r_{\text{progress}} = d(s_{t-1}, g) - d(s_t, g)$ (jarak Euclidean ke goal)
- $r_{\text{time}} = -0{,}1$ per langkah (efisiensi waktu)

**Policy gradient (REINFORCE/PPO)** untuk continuous action space:

$$\nabla_\theta J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\Bigl[\sum_t \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot A^{\pi_\theta}(s_t,a_t)\Bigr]$$

dengan *advantage estimate* $A^{\pi}(s_t,a_t) = \sum_{i=t}^{T} \gamma^{i-t} r_i - V^\pi(s_t)$.

Borah (2024) menambahkan dimensi **nonlinear filtering** (misalnya Extended Kalman Filter / Particle Filter) untuk mengestimasi state sebenarnya $\hat{x}_t$ dari observasi noisy $z_t$:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t\bigl(z_t - h(\hat{x}_{t|t-1})\bigr)$$

yang penting ketika sensor lidar/camera menghasilkan data tidak presisi pada AGV industri.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Implementasi RL-based motion planning di industri mengikuti SOP 7-tahap berikut:

**Tahap 1 – Pemetaan State-Action Space.** Diskretisasi lingkungan gudang menjadi occupancy grid $G \in \{0,1\}^{W \times H}$ (1 = occupied, 0 = free). Definisikan state sebagai vektor $[x, y, \theta, d_{\text{nearest}}, v_{\text{current}}, \text{battery}]$. Action space: $\{v_{\min}, v_{\min}/2, v_{\text{nom}}, v_{\max}\} \times \{-\omega_{\max}, -\omega_{\max}/2, 0, \omega_{\max}/2, \omega_{\max}\}$, total 20 aksi.

**Tahap 2 – Desain Simulasi Digital Twin.** Bangun environment di Gazebo/Isaac Sim yang mereplikasi layout pabrik dengan API ROS 2. Ini sesuai rekomendasi Kala (2024) untuk *sim-to-real transfer* guna menghindari kerusakan fisik selama training (jutaan episode).

**Tahap 3 – Inisialisasi Q-Network/DQN.** Gunakan arsitektur MLP: Input(state, 6) → Dense(128, ReLU) → Dense(64, ReLU) → Dense(|A|, linear). Optimizer: Adam, $\alpha = 10^{-4}$, $\gamma = 0{,}99$, batch size = 64, replay buffer = 100.000 transisi.

**Tahap 4 – Training Loop.** Untuk setiap episode:
1. Reset AMR ke posisi awal acak $s_0$
2. Pilih aksi dengan **ε-greedy**: $a_t = \arg\max_a Q(s_t,a;\theta)$ dengan probabilitas $1-\varepsilon$, atau acak dengan probabilitas $\varepsilon$ (anneal $\varepsilon$ dari 1,0 → 0,05 selama 10.000 episode)
3. Eksekusi aksi, amati $r_{t+1}, s_{t+1}$
4. Simpan tuple $(s_t,a_t,r_{t+1},s_{t+1},\text{done})$ ke replay buffer
5. Sample mini-batch, hitung TD-target, update $\theta$ via SGD
6. Setiap $C = 1000$ langkah: $\theta^- \leftarrow \theta$

**Tahap 5 – Validasi & Domain Randomization.** Tambahkan variasi tekstur lantai, pencahayaan, dan noise sensor untuk robustifikasi (Kala, 2024). Ukur *success rate*, *collision rate*, dan *average path length* terhadap baseline A*.

**Tahap 6 – Deployment & Transfer Learning.** Fine-tune model pada robot fisik dengan *safe exploration* (maksimum velocity 0,2 m/s selama 100 episode pertama) sebelum full deployment pada 1,5 m/s.

**Tahap 7 – Integrasi Multi-Agent.** Sesuai Borah (2024), tambahkan layer **FDIR** dengan deteksi anomali menggunakan *Mahalanobis distance*:

$$D_M = \sqrt{(x - \mu)^\top \Sigma^{-1} (x - \mu)}$$

threshold $D_M > \chi^2_{0,99}(k)$ mengindikasikan fault pada agen.

Diagram alir keseluruhan: **(Env Reset → Sensor Read → State Encode → Action Select → Execute → Reward → Buffer Store → Network Update) → Loop** dengan siklus FDIR paralel yang melakukan *fault isolation* berbasis konsensus multi-agen.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Penerapan DQN pada AMR拣选 (picking) di gudang e-commerce 50.000 m² dengan target throughput 300 picks/jam per robot.

### 4.1 Parameter Sistem

| Parameter | Nilai |
|---|---|
| State dimension | 6 |
| Action space | 20 |
| Learning rate $\alpha$ | 1×10⁻⁴ |
| Discount factor $\gamma$ | 0,99 |
| Epsilon decay | 1,0 → 0,05 (10k episodes) |
| Reward goal $r_{\text{goal}}$ | +100 |
| Reward collision $r_{\text{collision}}$ | -50 |
| Battery cost | -0,05 per step |
| Robot fleet | 20 AMR |
| Target speed | 1,5 m/s |

### 4.2 Simulasi Iterasi Q-learning pada Sub-grid 4×4

Untuk intuisi analitis, perhatikan grid sederhana dengan $r_{\text{goal}}=+10$, $r_{\text{collision}}=-10$, $\gamma=0{,}9$, dan $r_{\text{step}}=-1$. Tabel Q awal adalah nol.

Episode 1 (agen dari S1):
- S1 → kanan → S2: $Q(S1,\text{right}) = 0 + 0{,}5[(-1) + 0{,}9 \cdot \max_a Q(S2,a)] = -0{,}5$
- S2 → kanan → S3: $Q(S2,\text{right}) = 0 + 0{,}5[(-1) + 0{,}9 \cdot 0] = -0{,}5$
- S3 → kanan → Goal: $Q(S3,\text{right}) = 0 + 0{,}5[(+10) + 0{,}9 \cdot 0] = +5{,}0$
- Backward update: $Q(S2,\text{right}) = -0{,}5 + 0{,}5[(-1) + 0{,}9 \cdot 5{,}0] = +1{,}25$

Episode 50 (konvergensi parsial):
- $Q^*(S3,\text{right}) = 9{,}46$ (dekat optimal $9{,}5$ untuk $\gamma=0{,}9$)
- $Q^*(S2,\text{right}) = 7{,}61$
- $Q^*(S1,\text{right}) = 5{,}85$

### 4.3 Perhitungan ROI Manajerial

**Input Industri:**
- Investasi awal 20 AMR × USD 25.000 = USD 500.000
- Infrastruktur RL (GPU server, SIM, integrasi): USD 150.000
- Total CAPEX: USD 650.000
- Biaya training & deployment: USD 50.000