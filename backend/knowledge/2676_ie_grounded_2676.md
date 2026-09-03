# 2676 — Perencanaan Gerak Otomatis Berbasis Pembelajaran Penguatan (Reinforcement Learning) untuk Sistem Multi-Agen Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion Planning menggunakan Reinforcement Learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma manufaktur global menuju **Industry 5.0** dan **Society 5.0** menempatkan sistem otonom sebagai tulang punggung produktivitas rantai pasok modern. Dalam konteks ini, *motion planning* (perencanaan gerak) bukan sekadar persoalan navigasi robot, melainkan fungsi kritikal yang menentukan throughput, keselamatan, dan adaptabilitas lini produksi. Kala (2024) dalam bab buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa integrasi Reinforcement Learning (RL) ke dalam perencanaan gerak memungkinkan robot mobile beroperasi di lingkungan *semi-structured warehouse* dan *unstructured factory floor* dengan tingkat otonomi yang sebelumnya tidak tercapai oleh metode konvensional seperti A*, RRT, atau Potential Field.

Urgensi ekonominya sangat nyata: menurut proyeksi pasar yang dirujuk dalam literatur, pasar robot mobile otonom (AMR) global melampaui USD 4,9 miliar pada 2024 dengan CAGR >17%. Namun, tantangan operasionalnya pun signifikan—sekitar 30–40% downtime AMR disebabkan oleh kegagalan navigasi di lingkungan dinamis (pejalan kaki, AGV lain, halangan sementara). RL menjawab tantangan tersebut dengan kemampuan generalisasi kebijakan (*policy*) terhadap state-space kontinu tanpa rekayasa fitur manual.

Kontribusi Borah (2024) (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) melengkapi perspektif ini melalui kerangka *Smart Autonomous Multi-Agent Systems* (SAMAS), yang mengintegrasikan nonlinear filtering (EKF/UKF) dengan Multi-Agent Reinforcement Learning (MARL) untuk menjamin *Fault Detection, Isolation, and Reconstruction* (FDIR). Dalam sistem industri, satu agen AMR yang gagal mem-*plan* gerakannya dapat memicu efek domino pada seluruh fleet. Oleh karena itu, pendekatan MARL menjadi krusial ketika skalabilitas, redundansi, dan koherensi kolektif menjadi prasyarat produktivitas.

Signifikansi operasional RL untuk motion planning industri dapat dikuantifikasi melalui tiga metrik utama: (1) *path optimality ratio*—rasio panjang lintasan terhadap lintasan terpendek Euclidean; (2) *success rate*—proporsi episode di mana agen mencapai goal tanpa碰撞; dan (3) *average step latency*—waktu rata-rata yang di butuhkan agen untuk memutuskan satu langkah. Literatur menunjukkan bahwa RL hybrid (deep RL + classical planner) mampu menurunkan optimality ratio hingga 1,05–1,15 (mendekati optimal) dengan success rate >95% setelah 50.000 episode pelatihan. Aspek keselamatan (ISO 3691-4:2020 untuk AMR) dan interoperabilitas (VDMA/AWG) menjadi standar operasional yang melatarbelakangi adopsi pendekatan ini di lantai pabrik.

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti RL untuk motion planning berpijak pada **Markov Decision Process (MDP)** tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ dengan:

- $\mathcal{S}$: himpunan state (posisi, orientasi, kecepatan, jarak ke obstacle);
- $\mathcal{A}$: himpunan action (diskrit atau kontinu: translasi $\Delta x, \Delta y$ atau angular $\Delta\theta$);
- $P(s'|s,a)$: probabilitas transisi state;
- $R(s,a,s')$: reward function;
- $\gamma \in [0,1)$: discount factor.

Tujuan agen adalah menemukan kebijakan $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimumkan *expected return*:

$$J(\pi) = \mathbb{E}_{\tau \sim \pi}\left[\sum_{t=0}^{T} \gamma^{t} R(s_t, a_t, s_{t+1})\right]$$

dengan $\tau = (s_0, a_0, s_1, a_1, \ldots)$ adalah trajectory. Persamaan **Bellman optimal** untuk value function:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^*(s') \right]$$

dan action-value function:

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s'} P(s'|s,a) \max_{a'} Q^*(s', a')$$

Dalam konteks *deep RL*, Q-function ini diaproksimasi oleh jaringan saraf $Q_\theta(s,a;\theta)$ dan diperbarui melalui *Bellman residual minimization*:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[\left( r + \gamma \max_{a'} Q_{\theta^-}(s', a') - Q_\theta(s,a) \right)^2 \right]$$

dengan $\mathcal{D}$ adalah *replay buffer* dan $\theta^-$ parameter dari *target network* yang di-update secara periodik.

Untuk **multi-agent** (Borah, 2024), formulasi berkembang menjadi *Markov Game* $(\mathcal{S}, \{\mathcal{A}_i\}_{i=1}^{N}, P, \{R_i\}_{i=1}^{N}, \gamma)$ dengan kebijakan bersama $\boldsymbol{\pi} = (\pi_1, \ldots, \pi_N)$. Untuk fleet AMR, digunakan **Centralized Training with Decentralized Execution (CTDE)**:

$$\nabla_{\theta_i} J(\theta_i) = \mathbb{E} \left[ \nabla_{\theta_i} \log \pi_{\theta_i}(a_i|s) \cdot Q_i^{\boldsymbol{\pi}}(s, a_1, \ldots, a_N) \right]$$

di mana *critic* $Q_i^{\boldsymbol{\pi}}$ memiliki akses ke state dan action global saat *training*, namun setiap *actor* $\pi_i$ hanya menggunakan observasi lokalnya saat eksekusi. Arsitektur ini sesuai untuk AMR industri yang memiliki keterbatasan komputasi onboard.

Reward function yang representatif untuk motion planning kontinu dapat didefinisikan sebagai:

$$R(s, a, s') = \underbrace{-d(s', s_{goal})}_{\text{jarak ke goal}} + \underbrace{c_{collision} \cdot \mathbb{1}_{\text{collision}}}_{\text{penalty tabrakan}} + \underbrace{c_{time}}_{\text{penalty waktu}} + \underbrace{c_{smooth} \cdot (1 - \cos \Delta\theta)}_{\text{halus lintasan}}$$

dengan $d(\cdot,\cdot)$ jarak Euclidean, $c_{collision} \ll 0$ (misal $-100$), $c_{time} = -0{,}1$, dan $c_{smooth}$ tergantung karakteristik platform. Reward shaping ini vital karena sparse reward (hanya +1 saat goal) membuat konvergensi sangat lambat pada state-space berdimensi tinggi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lantai pabrik mengikuti kerangka *V-Model* rekayasa sistem, dengan tahapan sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan & Digital Twin.** Pabrik direpresentasikan sebagai occupancy grid 2D atau 3D voxel dengan resolusi tipikal 0,1–0,5 m untuk AMR industri. Digital twin (terintegrasi dengan platform seperti NVIDIA Isaac Sim atau Gazebo) menjadi tempat simulasi jutaan episode sebelum deployment fisik. Standar referensi: ISO 23247 (Digital Twin framework for manufacturing).

**Tahap 2 — Desain MDP dan Reward Engineering.** State space direduksi menggunakan *raw sensor fusion* (LiDAR 360° + odometry + IMU). Aksi diskret (8 atau 16 heading) umumnya lebih stabil untuk AMR industri dibandingkan aksi kontinu karena kompatibilitas dengan motion controller low-level. SOP reward engineering mengikuti heuristik:

- $R_{goal} = +200$ ketika jarak ke goal $< \epsilon_{goal}$;
- $R_{collision} = -200$ ketika jarak ke obstacle $< d_{safe}$;
- $R_{progress} = \alpha (d_{prev} - d_{now})$ dengan $\alpha = 10$ untuk memberi sinyal progress;
- $R_{step} = -0{,}05$ untuk mencegah episode idle.

**Tahap 3 — Arsitektur Jaringan dan Algoritma.** Untuk fleet AMR 5–20 unit pada warehouse 50.000 m², digunakan algoritma **MAPPO (Multi-Agent PPO)** atau **MADDPG**. Jaringan actor memiliki dua hidden layer (256, 128 unit, aktivasi ReLU), sedangkan critic memiliki tiga hidden layer (512, 256, 128). Batch size 256, learning rate $3 \times 10^{-4}$, entropy coefficient 0,01 untuk eksplorasi.

**Tahap 4 — Pelatihan dan Validasi SIL (Software-in-the-Loop).** Pelatihan dilakukan di simulator dengan 8–16 GPU paralel, mencapai 5–10 juta langkah (3–7 hari wall-clock). Validasi menggunakan *held-out scenarios*: lorong sempit 1,5 m, persimpangan empat arah, dynamic obstacles dengan kecepatan 0,5–1,5 m/s.

**Tahap 5 — Transfer Learning ke Hardware (HIL).** Parameter policy ditransfer ke onboard computer (NVIDIA Jetson Orin, 40 TOPS) melalui ONNX runtime. Fine-tuning 5.000 episode di dunia nyata dengan *human-in-the-loop safety override* sesuai ISO 10218 dan ISO/TS 15066 untuk kolaborasi manusia-robot.

**Tahap 6 — Integrasi FDIR (Borah, 2024).** Sensor noise dimodelkan melalui **Extended Kalman Filter** dengan state transisi:

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$
$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$
$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$

Fault detection menggunakan **CUSUM (Cumulative Sum)** pada residual $\nu_k = z_k - H_k \hat{x}_{k|k-1}$, dengan threshold $\tau_{fault}$ yang ditentukan dari distribusi $\chi^2$. Ketika fault terdeteksi pada agen $i$, sistem secara otomatis merekonstruksi kebijakan melalui consensus-based policy transfer dari agen tetangga dengan parameter $w_{ij}$ (bobot interkoneksi) sesuai Laplacian graf komunikasi fleet.

**Tahap 7 — Continuous Monitoring dan Retraining.** Telemetri (reward rata-rata, success rate, mean time-to-collision) dikirim ke MLOps pipeline (MLflow + Kubernetes) untuk trigger retraining berkala setiap 30 hari atau ketika *distribution shift* terdeteksi (misalnya, perubahan layout gudang).

Diagram alur keputusan (*runtime policy*):

```
[Sensor Observation] → [State Encoder CNN/LSTM]
        ↓
[Local Observation o_i] → [Actor Network π_θ] → [Action a_i]
        ↓
[Motion Controller PID] → [Wheel Commands]
        ↓
[New Sensor Reading] → [EKF Update] → [Residual Test]
        ↓ (jika |ν| > τ)
[FDIR Module] → [Fault Isolation] → [Policy Reconstruction via MARL Consensus]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Warehouse AMR Fleet untuk E-Commerce Fulfillment.

**Parameter Awal:**
- Luas gudang: $L = 100$ m $\times$ $W = 50$ m;
- Jumlah AMR: $N = 8$ unit (model differential-drive, $v_{max} = 1{,}5$ m/s, payload 250 kg);
- Resolusi grid: $\Delta = 0{,}25$ m, sehingga $|\mathcal{S}| \approx 4 \times 10^4$ state per agen;
- Obstacle statis: rak-rak tetap (30% area);
- Obstacle dinamis: 12 pekerja pejalan kaki dengan kecepatan rata-rata $\bar{v}_h = 1{,