# 2452 — Perencanaan Gerak (Motion Planning) Cerdas Menggunakan Reinforcement Learning untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah menempatkan sistem otonom — khususnya *Autonomous Mobile Robots* (AMR) dan *Automated Guided Vehicles* (AGV) — sebagai tulang punggung rantai pasok modern. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan kemampuan robot untuk bernavigasi di lingkungan manufaktur, gudang, dan fasilitas logistik yang dinamis. Berbeda dengan pendekatan klasik seperti *A\**, *Rapidly-exploring Random Tree* (RRT), atau *Artificial Potential Field* yang bersifat deterministik dan memerlukan pemetaan statis, reinforcement learning (RL) menawarkan paradigma adaptif di mana agen (robot) belajar kebijakan optimal melalui interaksi berulang dengan lingkungan.

Urgensi ekonomi dari adopsi RL dalam motion planning sangat nyata. Menurut proyeksi yang dirujuk Kala (2024), pasar robotika otonom global mencapai USD 8,17 miliar pada 2024 dan diproyeksikan melampaui USD 23 miliar pada 2032, dengan CAGR 12,7%. Di sisi operasional, sistem AMR berbasis RL mampu mengurangi *order-picking time* gudang e-commerce hingga 40% dan menurunkan konsumsi energi AGV hingga 18–25% melalui optimasi trajectory. Sebaliknya, Kaustav Borah (2024) dalam disertasinya (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas perspektif ini dengan memperkenalkan kerangka *Smart Autonomous Multi-Agent Systems* (SAMAS) yang mengintegrasikan RL dengan *nonlinear filtering* untuk kebutuhan *Fault Detection, Isolation, and Reconstruction* (FDIR) pada sistem multi-agen. Borah menekankan bahwa di lingkungan industri, sensor, aktuator, maupun jaringan komunikasi dapat mengalami malfungsi; tanpa mekanisme FDIR yang adaptif, kegagalan satu agen dapat menyebabkan *cascading failure* yang menurunkan *Overall Equipment Effectiveness* (OEE) hingga 30%.

Secara teknis, Kala (2024) mengidentifikasi tiga tantangan utama motion planning di industri: (i) ketidakpastian lingkungan dinamis (pejalan kaki, operator manusia, perubahan tata letak), (ii) batasan kinematik/dinamik non-holonomik robot, dan (iii) kebutuhan koordinasi multi-robot dalam ruang kerja bersama. RL menjawab tantangan ini melalui formulasi *Markov Decision Process* (MDP) yang memungkinkan agen menyeimbangkan eksplorasi-eksploitasi secara sistematis. Dalam konteks industrial engineering, hal ini berkorelasi langsung dengan teori *Queueing Networks* dan *Discrete Event Simulation* untuk mengoptimasi *throughput*, *cycle time*, dan utilisasi aset. Dengan demikian, integrasi RL motion planning bukan sekadar peningkatan teknis, melainkan merupakan *enabler* strategis untuk sistem manufaktur fleksibel (FMS) dan rantai pasok otonom.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis motion planning menggunakan RL dibangun di atas formulasi *Markov Decision Process* (MDP) yang didefinisikan oleh Kala (2024) sebagai tuple lima-elemen:

$$\mathcal{M} = (S, A, P, R, \gamma)$$

di mana $S$ adalah himpunan state (konfigurasi robot dan lingkungannya), $A$ adalah himpunan aksi (percepatan, kecepatan sudut, atau diskret direction), $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a)$ adalah *reward function*, dan $\gamma \in [0,1)$ adalah *discount factor* yang memprioritaskan reward jangka pendek versus jangka panjang. Untuk aplikasi industri, state direpresentasikan sebagai $s_t = [x_t, y_t, \theta_t, v_t, d_{obs,t}]$, mencakup posisi 2D, orientasi, kecepatan, dan jarak ke obstacle terdekat.

Kebijakan (*policy*) optimal $\pi^*(a|s)$ memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

dan memenuhi *Bellman Optimality Equation*:

$$V^*(s) = \max_{a \in A} \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^*(s') \right]$$

Dalam implementasi *value-based*, Kala (2024) menurunkan *Q-learning update rule*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah *learning rate*. Untuk lingkungan dengan state-space kontinu berdimensi tinggi (tipikal gudang modern dengan $>10^4$ state), Deep Q-Network (DQN) digunakan dengan fungsi loss:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a; \theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter *target network* yang di-*update* periodik untuk mengurangi *overestimation bias*.

Borah (2024) melengkapi kerangka ini dengan formulasi *Partially Observable MDP* (POMDP) untuk menangani ketidakpastian sensor:

$$\mathcal{P} = (S, A, O, P, Z, R, \gamma)$$

di mana $O$ adalah himpunan observasi dan $Z(o|s',a)$ adalah probabilitas observasi. *Nonlinear filter* seperti *Extended Kalman Filter* (EKF) atau *Unscented Kalman Filter* (UKF) digunakan untuk mengestimasi $b_t(s)$ (*belief state*), yang kemudian menjadi input bagi deep RL policy. Persamaan EKF untuk estimasi state $\hat{x}_t$:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t (z_t - h(\hat{x}_{t|t-1}))$$

dengan *Kalman gain* $K_t = P_{t|t-1} H^T (H P_{t|t-1} H^T + R_t)^{-1}$.

Untuk aplikasi multi-robot, Kala (2024) mengusulkan *Multi-Agent Reinforcement Learning* (MARL) dengan *decentralized partially observable MDP* (Dec-POMDP) yang diformulasikan sebagai:

$$\max_{\pi_i} \mathbb{E} \left[ \sum_{t=0}^{\infty} \gamma^t \sum_{i=1}^{N} R_i(s_t, a_t^1, ..., a_t^N) \right]$$

dengan constraint *collision avoidance*: $\| p_t^i - p_t^j \| \geq d_{safe}$ untuk semua pasangan agen $(i,j)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP terstandarisasi yang mengintegrasikan referensi ISO 3691-4 (robot industri — persyaratan keselamatan untuk AGV), ISO/TS 15066 (kolaborasi robot-manusia), dan IEC 61508 (keselamatan fungsional sistem elektronik). Berdasarkan kerangka Kala (2024) dan diperkuat oleh Borah (2024), berikut adalah tahapan sistematis:

**Tahap 1 — Analisis Sistem & Formulasi MDP.** Insinyur mengidentifikasi state-space, action-space, dan reward function yang selaras dengan KPI industri. Contoh reward function untuk AGV warehouse:

$$r_t = -w_1 \cdot t_{step} - w_2 \cdot d_{coll} - w_3 \cdot E_{cons} + w_4 \cdot \mathbb{1}_{goal}$$

dengan bobot $w_1, ..., w_4$ yang men-trade-off waktu, collision risk, energi, dan pencapaian tujuan.

**Tahap 2 — Pembangunan Simulator Digital Twin.** Mengikuti arsitektur Borah (2024), simulator dibangun dengan ROS-Gazebo atau NVIDIA Isaac Sim untuk melatih agen dalam *scenario diversity* tinggi (ribuan episode). Distribusi reward dan *policy entropy* dimonitor untuk mencegah *reward hacking*.

**Tahap 3 — Pelatihan dengan Curriculum Learning.** Model DQN atau PPO (*Proximal Policy Optimization*) dilatih dengan *learning rate scheduling* $\alpha_t = \alpha_0 / (1 + \beta t)$ dan *experience replay buffer* $\mathcal{D}$ berkapasitas $10^6$ transisi. Checkpoint disimpan setiap 100 episode.

**Tahap 4 — Validasi SIL/HIL.** *Software-in-the-Loop* (SIL) dan *Hardware-in-the-Loop* (HIL) testing dilakukan sesuai ISO 26262 (untuk domain otomotif) atau IEC 61508. Metrik validasi mencakup *success rate* $\geq 99,5\%$, *average path length* terhadap *optimal path*, dan *Mean Time Between Failure* (MTBF).

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Filter nonlinear (EKF/UKF) dipasang untuk state estimation. *Residual generator* $r_t = z_t - h(\hat{x}_{t|t-1})$ dimonitor dengan threshold $\tau_{fault}$ untuk *fault detection*.。一旦 terdeteksi, *isolation* dilakukan melalui *bank of observers*, dan *reconfiguration* policy RL mengaktifkan *degraded mode* sambil mempertahankan operasi minimal.

**Tahap 6 — Deployment & Continuous Learning.** Agen di-deploy dengan *safety layer* (misalnya *Control Barrier Function*) menjamin $\dot{h}(x) \geq -\alpha h(x)$ untuk constraint waktu-nyata. *Online fine-tuning* dilakukan dengan data operasional untuk adaptasi terhadap perubahan layout.

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Digital Twin   │───▶│  RL Training    │───▶│ SIL/HIL Test    │
│  (ROS/Gazebo)   │    │  (DQN/PPO/SAC)  │    │  (ISO Compliance)│
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Edge Deploy    │◀───│  Safety Layer   │◀───│  FDIR Module    │
│  (Jetson/NUC)   │    │  (CBF/SSL)      │    │  (EKF+RL)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** AGV di Pusat Distribusi E-Commerce (5000 m², 80 *picking stations*, 25 AGV).

**Parameter Input Industri:**
- Dimensi area: $L_x = 100$ m, $L_y = 50$ m
- Grid resolution: $\Delta = 0,5$ m → state-space $\approx 40.000$ sel
- Kecepatan AGV: $v_{max} = 1,5$ m/s, $a_{max} = 0,5$ m/s²
- Jarak aman antar-AGV: $d_{safe} = 1,0$ m
- Kapasitas baterai: 48 V / 100 Ah (4,8 kWh), konsumsi $E_{spesifik} = 0,05$ kWh/m
- Throughput target: 800 pesanan/jam

**Langkah 1: Inisialisasi Q-table/Network.** Untuk DQN, arsitektur: Input(40.000) → Dense(512) → Dense(256) → Dense(8 actions). Parameter: $\gamma = 0,99$, $\alpha = 10^{-4}$ (Adam optimizer), *batch size* = 64, *replay buffer* = $10^6$.

**Langkah 2: Reward Engineering.** 
- $w_1$ (waktu): $-0,1$ per step
- $w_2$ (collision): $-100$ (terminal penalty)
- $w_3$ (energi): $-0,01$ per meter
- $w_4$ (goal): $+100$ (terminal reward)

**Langkah 3: Simulasi Episode.** Misalkan AGV dari $(x_0, y_0) = (5, 5)$ ke $(x_g, y_g) = (95, 45)$. Jalur optimal Euclidean: $d^* = \sqrt{(90)^2 + (40)^2} = 98,49$ m. Episode RL (setelah training