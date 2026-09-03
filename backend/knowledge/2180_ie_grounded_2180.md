# 2180 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Robot Bergerak Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Perencanaan Gerak (Motion Planning) menggunakan Reinforcement Learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mendorong kebutuhan akan sistem robotika otonom yang mampu beroperasi di lingkungan manufaktur, pergudangan, dan rantai pasok dengan tingkat adaptabilitas tinggi. Dalam konteks ini, kemampuan *motion planning* atau perencanaan gerak menjadi fondasi kritis bagi robot bergerak otonom (AMR) yang harus bernavigasi di lingkungan dinamis, menghindari hambatan, dan menyelesaikan misi dengan efisiensi energi serta waktu yang optimal. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan Elsevier dan diindeks dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), secara eksplisit mengajukan Reinforcement Learning (RL) sebagai paradigma penyelesaian untuk masalah motion planning yang bersifat *sequential decision-making* di bawah ketidakpastian lingkungan.

Urgensi ekonomi dari adopsi RL dalam motion planning dapat dilihat dari tiga perspektif. Pertama, biaya operasional gudang otomatis yang dilaporkan oleh *LogisticsIQ* dan berbagai studi empiris menunjukkan bahwa AMR berbasis RL dapat mengurangi *order-picking time* hingga 30–45% dibanding sistem AGV (*Automated Guided Vehicle*) konvensional berbasis lintasan tetap. Kedua, fleksibilitas produksi:车间 (workshop) dengan *mixed-model assembly line* membutuhkan robot yang dapat *reroute* secara real-time ketika jalur terblokir atau terjadi perubahan layout—skenario ini sulit dijawab oleh algoritma klasik seperti A* atau RRT (Rapidly-exploring Random Tree) tanpa re-planning penuh. Ketiga, kompleksitas lingkungan modern (gudang e-commerce dengan ribuan SKU, fasilitas manufaktur dengan manusia dan robot bekerja bersama / *collaborative robots*) menciptakan state space yang sedemikian besar sehingga pendekatan berbasis *lookup table* dan *potential field* tidak lagi skalabel.

Kontribusi teoretis Kala (2024) menekankan bahwa RL memungkinkan agen robot untuk belajar kebijakan (*policy*) optimal melalui interaksi trial-and-error dengan lingkungannya, tanpa memerlukan model eksplisit dari dinamika lingkungan. Pendekatan ini sangat relevan untuk sistem manufaktur yang terus berubah. Pelengkap penting datang dari Borah (2024) dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) yang menunjukkan bagaimana RL dapat diintegrasikan dengan *nonlinear filtering* (misalnya Extended Kalman Filter atau Particle Filter) untuk membangun Smart Autonomous Multi-Agent Systems (SAMAS) yang tidak hanya merencanakan gerak, tetapi juga mendeteksi, mengisolasi, dan merekonstruksi (*FDIR: Fault Detection, Isolation, and Reconstruction*) kerusakan sensor, aktuator, maupun kegagalan komunikasi jaringan. Sinergi kedua literatur ini menunjukkan bahwa motion planning berbasis RL bukan lagi domain riset murni, melainkan pilar rekayasa sistem otonom industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formalisasi Markov Decision Process (MDP)

Reinforcement learning untuk motion planning secara formal dimodelkan sebagai Markov Decision Process (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ (Kala, 2024):

- $\mathcal{S}$: state space, merepresentasikan konfigurasi robot dan lingkungannya, misalnya posisi $(x, y)$, orientasi $\theta$, dan jarak ke obstacle terdekat $d_{obs}$.
- $\mathcal{A}$: action space, himpunan aksi diskret atau kontinyu (translasi $v$, rotasi $\omega$).
- $P(s'|s,a)$: probabilitas transisi state.
- $R(s, a)$: reward function.
- $\gamma \in [0,1)$: discount factor.

State sebuah AMR 2D tipikal dapat ditulis sebagai:
$$s_t = (x_t, y_t, \theta_t, v_t, d_{obs,t}, d_{goal,t})$$

### 2.2 Fungsi Nilai dan Persamaan Bellman

Tujuan agen RL adalah mempelajari *policy* $\pi(a|s)$ yang memaksimumkan *expected cumulative discounted reward*:
$$G_t = \sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k})$$

State-value function didefinisikan sebagai:
$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k}) \mid s_t = s\right]$$

Action-value function (Q-function):
$$Q^{\pi}(s, a) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k}) \mid s_t = s, a_t = a\right]$$

Persamaan Bellman optimal (Kala, 2024):
$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^*(s') \right]$$

### 2.3 Q-Learning sebagai Algoritma Inti

Update规则 untuk algoritma Q-Learning tabular:
$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah learning rate. Bukti konvergensi Q-learning ke $Q^*$ mensyaratkan bahwa semua pasangan $(s,a)$ dikunjungi tak hingga kali dan $\alpha$ memenuhi kondisi Robbins-Monro:
$$\sum_{t=1}^{\infty} \alpha_t = \infty \quad \text{dan} \quad \sum_{t=1}^{\infty} \alpha_t^2 < \infty$$

### 2.4 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Untuk lingkungan dengan state kontinyu (ruang $\mathbb{R}^n$), Kala (2024) mengadopsi Deep Q-Network dengan parameter $\theta$ dan *experience replay* untuk menstabilkan training:
$$L_i(\theta_i) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta_i^-) - Q(s, a; \theta_i) \right)^2 \right]$$

di mana $\theta_i^-$ adalah parameter *target network* yang di-update periodik.

### 2.5 Reward Function untuk Motion Planning

Reward function khas yang digunakan Kala (2024) untuk AMR memiliki tiga komponen:
$$R(s, a) = w_1 \cdot R_{goal} + w_2 \cdot R_{collision} + w_3 \cdot R_{progress}$$

dengan formulasi spesifik:
$$R_{progress} = (d_{t-1,goal} - d_{t,goal}) \cdot \kappa$$
$$R_{collision} = \begin{cases} -C_{penalty} & \text{jika } d_{obs} < d_{safe} \\ 0 & \text{lainnya} \end{cases}$$

### 2.6 Integrasi dengan Nonlinear Filtering (Borah, 2024)

Borah (2024) menambahkan lapisan *state estimation* menggunakan Extended Kalman Filter (EKF) untuk menangani noise sensor pada AMR:
$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$
$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$
$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

di mana $\hat{x}_{k|k}$ adalah estimasi state yang kemudian menjadi input bagi Q-network.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Keseluruhan

Implementasi motion planning RL di lingkungan industri mengikuti arsitektur berlapis (Borah, 2024):

**Lapisan 1 — Persepsi & Estimasi State:** Sensor fusion (LiDAR, IMU, encoder) → EKF → estimasi state $\hat{x}_t$.

**Lapisan 2 — RL Agent (Decision Layer):** State $\hat{x}_t$ → DQN/PPO → aksi $(v_t, \omega_t)$.

**Lapisan 3 — Kontroler Tingkat Rendah:** PID controller menerjemahkan aksi menjadi sinyal aktuator roda.

**Lapisan 4 — Fault Management (FDIR):** Anomali sensor/aktuator dideteksi oleh *nonlinear observer* dan dilaporkan ke supervisor.

### 3.2 SOP Implementasi RL untuk AMR Industri

**Tahap 1 — Pemetaan State dan Aksi**
Definisikan diskretisasi atau continuous representation. Contoh: posisi 5cm × 5cm grid pada area gudang 50m × 30m menghasilkan $|\mathcal{S}| = 60.000$ state.

**Tahap 2 — Desain Reward Function**
Gunakan *sparse reward* dengan *reward shaping* untuk mempercepat konvergensi. Standar industri: $R_{goal} = +100$, $R_{collision} = -100$, $R_{progress}$ terukur per timestep.

**Tahap 3 — Simulasi & Pre-training**
Gunakan simulator (Gazebo, Unity, atau NVIDIA Isaac) untuk melatih agen selama 1–5 juta episode sebelum deployment ke robot fisik. Standar industri mengikuti protokol *sim-to-real transfer* dengan *domain randomization*.

**Tahap 4 — Validasi dengan ISO 3691-4**
Robot yang beroperasi di lingkungan industri wajib memenuhi ISO 3691-4:2020 untuk *driverless industrial trucks*, termasuk uji keselamatan tabrakan dan *emergency stop*.

**Tahap 5 — Deployment & Continual Learning**
Setelah deployment, agen terus belajar secara *online* dengan *safety shield* (misalnya *Control Barrier Function*) untuk mencegah aksi berbahaya.

### 3.3 Diagram Alir Proses RL

```
[Inisialisasi Q(s,a) sebarang] → 
[Loop untuk setiap episode] → 
  [Reset environment, amati s_t] → 
  [Pilih aksi a_t via ε-greedy] → 
  [Eksekusi a_t, amati r_t, s_{t+1}] → 
  [Update Q(s_t,a_t) dengan Bellman] → 
  [Decay ε dan α] → 
[Konvergen atau max episode tercapai] → 
[Ekstrak policy π*] → 
[Validasi di test environment]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AMR di Gudang E-commerce 50m × 30m

Sebuah perusahaan e-commerce ingin men-deploy 10 unit AMR untuk mengambil barang dari *picking station* ke *packing station* dengan jarak rata-rata 25 meter. Parameter industri:

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Luas gudang | 1500 m² | $A$ |
| Jumlah rak | 120 unit | - |
| Kecepatan maks robot | 1.5 m/s | $v_{max}$ |
| Waktu target perjalanan | < 60 detik | $T_{target}$ |
| Jarak rata-rata | 25 m | $d$ |
| Jumlah state diskret | 60.000 | $|\mathcal{S}|$ |
| Learning rate | 0.1 | $\alpha$ |
| Discount factor | 0.95 | $\gamma$ |
| Reward goal | +100 | $R_{goal}$ |
| Penalty collision | -100 | $R_{collision}$ |
| Reward progress per meter | +0.5 | $R_{progress}$ |

### 4.2 Perhitungan Manual Q-Learning Update

Misalkan pada state $s_t$ robot berada pada jarak 5 m dari goal dan 2 m dari obstacle. Action yang tersedia: $\{a_1: \text{maju}, a_2: \text{belok kiri}, a_3: \text{belok kanan}\}$.

Nilai Q awal (arbitrary): $Q(s_t, a_1) = 10$, $Q(s_t, a_2) = 8$, $Q(s_t, a_3) = 8$.

Robot memilih $a_1$ (maju) berdasarkan ε-greedy. Setelah eksekusi:
- Jarak ke goal berkurang dari 5 m menjadi 3.8 m, sehingga $R_{progress} = (5 - 3.8) \times 0.5 = 0.6$.
- Jarak ke obstacle masih > $d_{safe}$ (1.5 m), sehingga $R_{collision} = 0$.
- Total reward: $r_{t+1} = 0.6$.

State baru $s_{t+1}$ dengan jarak 3.8 m dari goal. Dari Q-table: $Q(s_{t+1}, a_$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
