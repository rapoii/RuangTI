# 1796 — Perencanaan Gerak (Motion Planning) Cerdas Berbasis Reinforcement Learning untuk Sistem Otonom Multi-Agen dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning pada robot bergerak otonom dan sistem multi-agen
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 menempatkan robot bergerak otonom (*Autonomous Mobile Robots* — AMR) serta sistem multi-agen (*Multi-Agent Systems* — MAS) sebagai tulang punggung rantai pasok modern, manufaktur fleksibel, dan logistik presisi tinggi. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* (DOI: 10.1016/b978-0-443-18908-1.00016-9) menegaskan bahwa perencanaan gerak (*motion planning*) bukan sekadar persoalan geometrik menemukan lintasan bebas-tabrakan, melainkan masalah pengambilan keputusan sekuensial di bawah ketidakpastian lingkungan, di mana agen harus belajar dari interaksi langsung dengan dunia nyata melalui Reinforcement Learning (RL). Permasalahan klasik seperti *configuration space* (C-space), *probabilistic roadmap* (PRM), dan *Rapidly-exploring Random Tree* (RRT) yang bersifat *model-based* sering gagal ketika peta lingkungan bersifat dinamis, sensor memiliki derau, atau terdapat agen-agen lain yang bergerak secara simultan (Kala, 2024). 

Urgensi ekonominya sangat nyata: pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR >20%, sementara kerugian akibat downtime sistem otonom di pusat distribusi e-commerce rata-rata bernilai USD 25.000 per jam. Kala (2024) menekankan bahwa algoritma RL — khususnya *Deep Q-Network* (DQN), *Proximal Policy Optimization* (PPO), dan *Soft Actor-Critic* (SAC) — memungkinkan robot menghasilkan kebijakan navigasi yang *near-optimal* tanpa memerlukan model eksplisit lingkungan, sehingga menurunkan biaya re-engineering saat perubahan layout pabrik. 

Di sisi lain, Kaustav Borah (2024) dalam disertasinya (DOI: 10.32920/25412566.v1) melengkapi perspektif ini dengan menyoroti bahwa otonomi tidak berdiri sendiri; ia harus disertai kemampuan *Fault Detection, Isolation, and Reconstruction* (FDIR). Borah memperkenalkan arsitektur **Smart Autonomous Multi-Agent Systems (SAMAS)** di mana agen-agen berkolaborasi menyelesaikan misi kompleks (misalnya inspeksi pipa lepas-pantai, konvoi truk otonom, atau armada AGV di gudang) sembari melakukan deteksi anomali sensor/aktuator secara *online* menggunakan gabungan *nonlinear filtering* (Extended/Unscented Kalman Filter) dan RL. Integrasi kedua perspektif ini — motion planning adaptif (Kala, 2024) plus FDIR kolaboratif (Borah, 2024) — menjadi kerangka rekayasa modern untuk Sistem Otonom Tingkat Tinggi (*High-Level Autonomous Systems*).

Dari sisi rekayasa industri, modul ini relevan bagi para perancang *cell manufacturing*, perencana *warehouse management system* (WMS), dan integrator sistem *Industry 5.0* yang menuntut kolaborasi manusia-robot (cobot) dengan tingkat keselamatan fungsional SIL-3 (IEC 61508). Penguasaan motion planning RL menjadi kompetensi diferensial bagi lulus program studi Teknik Industri di era *smart factory*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Reinforcement Learning memformalkan masalah perencanaan gerak sebagai MDP yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$ (Kala, 2024):

- $\mathcal{S}$ : himpunan state (konfigurasi robot + posisi target + peta lokal)
- $\mathcal{A}$ : himpunan aksi (kecepatan linear $v \in [0, v_{max}]$ dan angular $\omega \in [-\omega_{max}, \omega_{max}]$)
- $\mathcal{P}(s'|s,a)$ : probabilitas transisi state
- $\mathcal{R}(s,a,s')$ : fungsi reward
- $\gamma \in [0,1)$ : faktor diskonto

Tujuan agen adalah menemukan kebijakan $\pi^* : \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimumkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k \, r_{t+k+1}$$

### 2.2 Persamaan Bellman dan Value Function

Fungsi nilai state optimal memenuhi *Bellman optimality equation* (Kala, 2024):

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ \mathcal{R}(s,a) + \gamma \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a)\, V^*(s') \right]$$

Untuk *action-value*:

$$Q^*(s,a) = \mathcal{R}(s,a) + \gamma \sum_{s'} \mathcal{P}(s'|s,a) \max_{a'} Q^*(s',a')$$

### 2.3 Q-Learning dan Deep Q-Network (DQN)

Update Q-Learning tabular mengikuti:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

Ketika state-space kontinu dan dimensi tinggi (misalnya citra lidar 360°), Kala (2024) menggunakan **DQN** dengan *experience replay* $\mathcal{D}$ dan *target network* $\theta^-$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

### 2.4 Policy Gradient dan PPO

Untuk aksi kontinu (kecepatan roda), algoritma *Policy Gradient* dengan *Proximal Policy Optimization* (Schulman et al., diacu Kala, 2024) memaksimumkan:

$$L^{CLIP}(\theta) = \mathbb{E}_t \left[ \min\left( r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t \right) \right]$$

dengan $r_t(\theta) = \dfrac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ dan *advantage estimate* $\hat{A}_t$.

### 2.5 Reward Shaping untuk Motion Planning

Kala (2024) merekomendasikan reward berbentuk:

$$r_t = w_1 \cdot \mathbb{1}_{\text{goal}} - w_2 \cdot d(s_t, s_{goal}) - w_3 \cdot \mathbb{1}_{\text{collision}} - w_4 \cdot \mathbb{1}_{\text{timeout}}$$

dengan bobot $w_i > 0$ yang di-tuning melalui *Bayesian optimization*.

### 2.6 Multi-Agent Reinforcement Learning (MARL)

Borah (2024) memperluas formulasi ke *Decentralized Partially Observable MDP* (Dec-POMDP) untuk SAMAS:

$$V^{\pi}(s) = \mathbb{E}_{\boldsymbol{a} \sim \boldsymbol{\pi}} \left[ \sum_{t=0}^{\infty} \gamma^t \, r_t(s_t, \boldsymbol{a}_t) \,\middle|\, s_0 = s, \boldsymbol{\pi} \right]$$

di mana $\boldsymbol{\pi} = (\pi_1, \pi_2, ..., \pi_n)$ adalah kebijakan gabung $n$ agen, dan setiap agen menerima observasi parsial $o_i$.

### 2.7 Nonlinear Filtering untuk FDIR

Borah (2024) menggunakan *Extended Kalman Filter* dengan model state nonlinear:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k \left( z_k - h(\hat{x}_{k|k-1}) \right)$$

$$K_k = P_{k|k-1} H_k^T \left( H_k P_{k|k-1} H_k^T + R_k \right)^{-1}$$

Residu $\varepsilon_k = z_k - h(\hat{x}_{k|k-1})$ diumpankan ke modul RL untuk klasifikasi fault dan rekonstruksi trajectory.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL di lingkungan industri mengikuti SOP enam tahap yang disintesis dari Kala (2024) dan Borah (2024):

### SOP-01: Pemodelan Lingkungan dan Akuisisi Data
1. Pilih simulator high-fidelity: **Gazebo + ROS 2 Humble**, **Isaac Sim**, atau **Webots**.
2. Konfigurasi sensor: 2D LiDAR (10–40 m jangkauan), IMU, odometri roda, RGB-D camera.
3. Bangun *digital twin* fasilitas (pabrik, gudang, rumah sakit) dalam format URDF/SDF.
4. Akuisisi minimal 100 ribu episode menggunakan *random policy* untuk *replay buffer* awal.

### SOP-02: Definisi MDP dan Reward Engineering
1. Diskretisasi state: posisi $(x,y)$, orientasi $\theta$, jarak ke goal $d_g$, jarak obstacle minimum $d_{obs}$, kecepatan linier/angular.
2. Aksi diskret (DQN) atau kontinu (PPO/SAC) sesuai kemampuan aktuator.
3. *Reward shaping* mengikuti persamaan di §2.5; tuning bobot $w_i$ melalui DOE.
4. Validasi dengan *sparse reward baseline* untuk mengukur *sample efficiency*.

### SOP-03: Pelatihan dan Validasi
1. Inisialisasi *replay buffer* $\mathcal{D}$ kapasitas 10⁶.
2. Latih dengan *epsilon-greedy* schedule $\epsilon: 1.0 \rightarrow 0.05$ selama 1 juta langkah.
3. Evaluasi setiap 10 ribu episode menggunakan 100 *deterministic test episodes*.
4. Kriteria lulus: *success rate* ≥95%, *collision rate* <1%, *average path length* <1,3× lintasan optimal Euclidean.

### SOP-04: Integrasi FDIR (Borah, 2024)
1. Pasang modul EKF/UKF untuk estimasi state dan residual generator.
2. Latih *fault classifier* (PPO dengan ruang observasi residual) menggunakan dataset injeksi fault: bias sensor, drift aktuator, packet loss komunikasi.
3. Threshold deteksi: $\chi^2$ test dengan confidence 99,5%.
4. Mekanisme *reconfiguration*: agen kedua mengambil alih misi saat residual > threshold.

### SOP-05: Pengujian di Dunia Nyata (Pilot)
1. *Hardware-in-the-loop* (HIL) test pada 5% fleet selama 168 jam operasi.
2. Bandingkan metrik: *mean time between failures* (MTBF), *mean time to recovery* (MTTR).
3. Catat *edge cases* ke *replay buffer* untuk *continual learning*.

### SOP-06: Deploy, Monitor, dan Retraining
1. *Shadow mode* 30 hari sebelum *full autonomous*.
2. *Telemetry dashboard*: success rate, average reward, Q-value divergence.
3. Trigger *retraining* otomatis bila *reward moving average* turun >10% selama 24 jam.
4. Audit keselamatan mengikuti ISO 13482 (robot personal care) dan ISO 3691-4 (driverless industrial trucks).

### Diagram Alir Arsitektur SAMAS (Borah, 2024)

```
[Sensor Layer] → [EKF/UKF Filter] → [Residual Generator]
        ↓                                   ↓
[Perception] → [State Estimator] → [MDP State s_t]
                                          ↓
                              [RL Policy π_θ (PPO/DQN)]
                                          ↓
[Action a_t] → [Actuator] → [Environment] → [Reward r_t]
        ↑___________________________________|
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: AGV di Gudang E-Commerce 50.000 m²

**Skenario:** Sebuah AGV dengan muatan 250 kg harus berpindah dari picking station A $(x=5, y=10)$ ke packing station B $(x=45, y=40)$ pada gudang dengan 320 rak货架 dan rata-rata 12 AGV lain yang bergerak simultan.

**Parameter awal (Kala, 2024):**
- $v_{max} = 1{,}5$ m/s, $\omega_{max} = 1{,}0$ rad/s
- Aksi diskret: 5档 kecepatan × 5档 angular = 25 aksi
- State space: $x, y, \theta, d_g, d_{obs}$ → diskretisasi 5 level = $5^5 = 3{,}125$ state
- $\gamma = 0{,}99$, $\alpha = 0{,}1$ (learning rate)
- Bobot reward: $w_1 = 100$, $w_2 = 1$, $w_3 = 50$, $w_4 = 10$

**Iterasi Q-Learning (manual trace, 5 iterasi pada 3 state kunci):**

| Step | $s_t$ | $a_t$ | $r_t$ | $s_{t+1}$ | $Q(s_t,a_t)$ lama | $Q(s_t,a_t)$ baru |
|------|--------|--------|--------|-----------|-------------------|----------------