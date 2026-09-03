# 2500 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Robot Bergerak Otonom di Lingkungan Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era Industri 4.0 dan transisi menuju Society 5.0, permintaan akan sistem robot bergerak otonom (*Autonomous Mobile Robots*/AMR) di lantai produksi, gudang distribusi, dan rantai pasok global mengalami lonjakan signifikan. Kala (2024) dalam karyanya *Motion planning using reinforcement learning* yang dimuat dalam buku *Autonomous Mobile Robots* menjelaskan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan kemampuan robot untuk bernavigasi dari konfigurasi awal ke konfigurasi target tanpa menabrak rintangan, sekaligus memenuhi kendala kinematik dan dinamik (Kala, 2024). Urgensi ekonomis dari teknologi AMR sangat nyata: pasar global AMR diproyeksikan melampaui USD 8 miliar pada 2030 dengan tingkat pertumbuhan majemuk (*CAGR*) lebih dari 18%, didorong oleh kelangkaan tenaga kerja, biaya logistik yang meningkat, dan kebutuhan akan *throughput* yang deterministik di pusat *e-commerce fulfillment*.

Secara operasional, AMR menggantikan peran *Automated Guided Vehicle* (AGV) konvensional yang bergantung pada jalur magnetik/fisik. Kala (2024) menekankan bahwa permasalahan utama AGV klasik adalah rigiditas rute, biaya retrofit infrastruktur, dan ketidakmampuan menangani lingkungan dinamis (pejalan kaki, palet berpindah, kendaraan lintas). Pendekatan berbasis *Reinforcement Learning* (RL) menjawab keterbatasan ini dengan membiarkan agen robot belajar kebijakan optimal melalui interaksi trial-and-error dengan lingkungan, sehingga mampu menggeneralisasi pada skenario yang tidak pernah ditemui selama pelatihan. Pendekatan ini selaras dengan arsitektur *Smart Autonomous Multi-Agent Systems* (SAMAS) yang dikemukakan Borah (2024), di mana beberapa agen berkolaborasi untuk *Fault Detection, Isolation, and Reconstruction* (FDIR) guna mempertahankan operasi otonom yang aman (Borah, 2024).

Dari perspektif rekayasa sistem industri, integrasi RL dalam motion planning menyentuh empat pilar kinerja: (1) *safety* (collision avoidance probability), (2) *efficiency* (path length optimality), (3) *robustness* (handling uncertainty), dan (4) *scalability* (multi-robot coordination). Paper Kala (2024) menyoroti bahwa algoritma RL seperti Q-learning, Deep Q-Network (DQN), dan Proximal Policy Optimization (PPO) telah diaplikasikan pada robot dengan konfigurasi *differential drive*, *Ackermann steering*, dan *omnidirectional*, dengan tingkat keberhasilan *task completion* mencapai 92–97% pada lingkungan *warehouse* yang disimulasikan. Bagi insinyur industri, adopsi RL bukan sekadar pilihan teknologis melainkan katalis transformasional untuk *flexible manufacturing system* (FMS), *just-in-time* delivery, dan *lights-out manufacturing*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Markov Decision Process (MDP)

Inti dari pendekatan RL untuk motion planning adalah pemodelan masalah sebagai *Markov Decision Process* (MDP) tuple $M = \langle S, A, P, R, \gamma \rangle$ (Kala, 2024), dengan:

- $S$ = himpunan state (konfigurasi robot + peta okupansi lokal)
- $A$ = himpunan action (diskret: 4–8 arah gerak, atau kontinu: kecepatan linier $v$ dan angular $\omega$)
- $P(s'|s,a)$ = probabilitas transisi dari state $s$ ke $s'$ setelah action $a$
- $R(s,a,s')$ = reward function
- $\gamma \in [0,1)$ = discount factor

Tujuan agen RL adalah menemukan kebijakan optimal $\pi^*(a|s)$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}, \qquad J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^t R_t\right]$$

### 2.2. Persamaan Bellman dan Value Function

*State-value function* didefinisikan sebagai ekspektasi return ketika mengikuti kebijakan $\pi$ dari state $s$:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^t R(s_t,a_t,s_{t+1}) \,\Big|\, s_0=s\right]$$

*Action-value function* (Q-function) untuk pasangan state-action:

$$Q^{\pi}(s,a) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^t R_t \,\Big|\, s_0=s, a_0=a\right]$$

Persamaan Bellman optimalitas yang menjadi dasar konvergensi RL (Kala, 2024):

$$Q^*(s,a) = \mathbb{E}_{s'}\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

### 2.3. Q-Learning Off-Policy

Update rule tabular Q-learning dengan *learning rate* $\alpha \in (0,1]$:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

Batas konvergensi: $\sum_{t=0}^{\infty} \alpha_t = \infty$ dan $\sum_{t=0}^{\infty} \alpha_t^2 < \infty$ menjamin konvergensi ke $Q^*$ dengan probabilitas 1 (Kala, 2024).

### 2.4. Deep Q-Network (DQN)

Untuk state ruang kontinu/berdimensi tinggi (misalnya lidar scan 360°), Kala (2024) menggunakan aproksimator fungsi dengan parameter $\theta$:

$$Q(s,a;\theta) \approx Q^*(s,a)$$

*Loss function* dengan *target network* berparameter $\theta^-$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s')\sim D}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

*Experience replay buffer* $D$ menyimpan tuple transisi untuk mengurangi korelasi temporal.

### 2.5. Reward Shaping untuk Motion Planning

Perancangan reward adalah aspek paling kritis. Kala (2024) mengusulkan:

$$R(s,a,s') = w_1 \cdot R_{\text{goal}} + w_2 \cdot R_{\text{collision}} + w_3 \cdot R_{\text{proximity}} + w_4 \cdot R_{\text{progress}}$$

dengan tipikal:

$$R_{\text{progress}} = d_{\text{prev}}(s,s_{\text{goal}}) - d_{\text{now}}(s',s_{\text{goal}})$$

di mana $d(\cdot,\cdot)$ adalah jarak Euclidean. Ini memberikan *dense reward* yang mempercepat konvergensi dibanding *sparse reward* binary.

### 2.6. Integrasi dengan Pemetaan dan Sensor Fusion

Untuk menggabungkan observasi noisy (odometry, IMU, lidar), Borah (2024) merekomendasikan *Nonlinear Filtering* seperti Extended Kalman Filter (EKF) atau Unscented Kalman Filter (UKF) untuk estimasi state:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k(z_k - h(\hat{x}_{k|k-1}))$$

dengan *Kalman gain*:

$$K_k = P_{k|k-1}H_k^T(H_kP_{k|k-1}H_k^T + R_k)^{-1}$$

Estimasi state terfilter ini menjadi input kebijakan RL, menutup *perception-planning loop* secara optimal (Borah, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL di lantai pabrik mengikuti SOP terstruktur berdasarkan kerangka Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Lingkungan (Environment Modeling).** Bangun *occupancy grid map* 2D/3D dari fasilitas dengan resolusi sel 5–10 cm. Definisikan state sebagai tuple $\langle x, y, \theta, v, \text{lidar scan} \rangle$. Untuk AMR industri tipikal, $|S|$ dapat mencapai $10^6$–$10^9$ sehingga memerlukan *function approximation*.

**Tahap 2 — Desain Action Space.** Terapkan salah satu: (i) *discrete actions* $\{ \text{forward, left, right, stop} \}$; (ii) *continuous actions* $a = (v, \omega)$ dengan $v \in [0, v_{\max}]$, $\omega \in [-\omega_{\max}, \omega_{\max}]$. Diskritisasi kontinu lebih disukai untuk kontrol halus di lorong sempit gudang.

**Tahap 3 — Perancangan Reward Function.** Gunakan *potential-based reward shaping* dengan bobot:
- $R_{\text{goal}} = +100$ saat mencapai target
- $R_{\text{collision}} = -50$ saat kontak rintangan
- $R_{\text{proximity}} = -5 \cdot \max(0, d_{\text{safe}} - d_{\text{obs}})$ untuk menjaga *safety bubble*
- $R_{\text{progress}} = \eta (d_{\text{prev}} - d_{\text{now}})$

**Tahap 4 — Pelatihan Simulasi (Sim-to-Real).** Gunakan *digital twin* (Gazebo, Isaac Sim, Unity ML-Agents) untuk melatih 1–5 juta episode. Validasi dengan *domain randomization* terhadap tekstur lantai, pencahayaan, dan posisi pejalan kaki acak.

**Tahap 5 — Transfer ke Robot Fisik.** Terapkan *sim-to-real transfer* dengan *progressive neural network* atau fine-tuning. Jalankan dalam mode *shadow* (dual-run dengan planner klasik) selama minimum 200 jam operasional sesuai standar ISO 3691-4 untuk AMR.

**Tahap 6 — Integrasi FDIR Multi-Agen.** Integrasikan dengan arsitektur SAMAS (Borah, 2024) untuk deteksi anomali sensor/aktuator. Tetapkan *threshold* residual EKF $\chi^2 > \alpha_{\text{fault}}$ untuk triggering *safe-stop* dan *task reallocation*.

**Tahap 7 — Monitoring & Continuous Learning.** Pasang *performance dashboard* metrik: *success rate*, *average path length*, *collision rate per 1000 km*, *mean time between failure* (MTBF). Update model tiap季度 menggunakan *federated learning* dari armada AMR.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AMR *differential-drive* pada gudang *e-commerce* 50 m × 30 m dengan 200 rak penyimpanan tetap dan 5 zona dinamis (pejalan kaki). Robot harus bergerak dari *pick station* A ke *pack station* B berulang kali.

**Parameter Input:**
- Grid discretization: $50 \times 30 = 1500$ sel
- State representation: posisi $(x,y)$ + heading diskret 8 arah → $|S| = 1500 \times 8 = 12.000$ state
- Action set: $A = \{N, NE, E, SE, S, SW, W, NW, \text{stop}\}$, $|A|=9$
- Learning rate: $\alpha = 0{,}2$
- Discount factor: $\gamma = 0{,}95$
- Exploration: $\varepsilon$-greedy dengan $\varepsilon_0 = 1{,}0$, decay $\varepsilon_t = 0{,}995^t$
- Episode budget: 5.000 episode, max 200 langkah/episode

**Komponen Reward:**
- $R_{\text{goal}} = +200$, $R_{\text{collision}} = -100$, $R_{\text{step}} = -1$ (efisiensi waktu), $R_{\text{proximity}} = -10 \cdot \max(0, 1 - d_{\text{obs}}/d_{\text{safe}})$

**Iterasi Q-Learning Step-by-Step (Episode 1, Step 1):**
State awal $s_0 = (5, 5, N)$, target $s_g = (45, 25)$. Inisialisasi $Q(s,a) = 0, \forall s,a$.

Robot memilih action East dengan $\varepsilon$-greedy ($\varepsilon = 0{,}995$). Transisi ke $s_1 = (6, 5, E)$.

$$Q(s_0, E) \leftarrow Q(s_0, E) + \alpha [R_1 + \gamma \max_{a'} Q(s_1, a') - Q(s_0, E)]$$

$$Q(s_0, E) \leftarrow 0 + 0{,}2 [-1 + 0{,}95 \cdot