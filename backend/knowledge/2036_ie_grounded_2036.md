# 2036 — Perencanaan Gerak (Motion Planning) Robot Otonom Berbasis Reinforcement Learning untuk Sistem Manufaktur dan Logistik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Perencanaan Gerak Menggunakan Reinforcement Learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Disertasi Peer-Reviewed. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan Society 5.0 telah mendorong kebutuhan akan sistem robot otonom yang mampu beroperasi secara adaptif di lingkungan manufaktur, pergudangan, dan rantai pasok yang dinamis. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* edisi Elsevier menegaskan bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan paling mendasar dalam operasionalisasi robot bergerak otonom, karena robot tidak hanya harus menavigasi dari titik awal ke tujuan, tetapi juga harus menghindari rintangan statis maupun dinamis, memenuhi kendala kinematik, dan mengoptimalkan konsumsi energi serta waktu siklus (Kala, 2024; DOI: 10.1016/b978-0-443-18908-1.00016-9).

Dalam konteks industri manufaktur modern, Automated Guided Vehicle (AGV) dan Autonomous Mobile Robot (AMR) menjadi tulang punggung sistem intralogistik. Pasar global AMR diproyeksikan mencapai USD 14–18 miliar pada 2030 dengan CAGR di kisaran 15–20%, didorong oleh kebutuhan *flexible automation* di mana lini produksi sering direkonfigurasi mengikuti permintaan pasar yang *high-mix low-volume*. Permasalahan utamanya adalah metode *motion planning* klasik seperti A*, RRT (Rapidly-exploring Random Tree), dan Potential Field bersifat deterministik dan sering gagal ketika lingkungan berubah secara real-time, misalnya adanya pekerja lintasan, palet yang berpindah, atau perubahan layout karena *changeover* produk.

Pendekatan *Reinforcement Learning* (RL) menawarkan paradigma baru di mana agen (robot) belajar kebijakan navigasi optimal melalui interaksi berulang dengan lingkungannya tanpa memerlukan model eksplisit peta lengkap. Kala (2024) menekankan bahwa RL memungkinkan robot menangani ketidakpastian (*uncertainty*), rintangan dinamis, dan trade-off multi-objektif seperti antara keamanan, kelancaran, dan efisiensi energi secara bersamaan. Lebih jauh, Borah (2024) dalam disertasinya menunjukkan bahwa integrasi RL dengan sistem multi-agen (Multi-Agent Systems) dan FDIR (*Fault Detection, Isolation, and Reconstruction*) membuka peluang terciptanya *Smart Autonomous Multi-Agent Systems* (SAMAS) yang tidak hanya bergerak secara optimal tetapi juga mampu mendeteksi dan mengisolasi kegagalan sensor, aktuator, maupun komunikasi jaringan secara otonom (Borah, 2024; DOI: 10.32920/25412566.v1).

Urgensi ekonomis dari adopsi teknologi ini cukup signifikan. Downtime AGV akibat tabrakan atau kegagalan navigasi dapat menyebabkan kerugian produksi hingga USD 5.000–50.000 per jam pada fasilitas *high-throughput*. Dengan motion planning berbasis RL yang mampu *self-learning* dari pengalaman operasional, robot dapat terus meningkatkan kinerjanya (*lifelong learning*), menurunkan Total Cost of Ownership (TCO) hingga 20–30% dalam horizon 5 tahun. Oleh karena itu, penguasaan metodologi ini menjadi kompetensi strategis bagi insinyur industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Dasar teoretis dari motion planning menggunakan RL adalah *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $\langle S, A, P, R, \gamma \rangle$:

- $S$ : himpunan *state* (konfigurasi robot + persepsi lingkungan)
- $A$ : himpunan *action* (perintah gerak)
- $P(s'|s,a)$ : probabilitas transisi state
- $R(s,a,s')$ : fungsi reward
- $\gamma \in [0,1)$ : faktor diskon temporal

Untuk robot bergerak 2D dengan konfigurasi $q = (x, y, \theta)$, state dapat didefinisikan sebagai:

$$s_t = \left[ x_t, y_t, \theta_t, v_t, d_{\text{obs},t}, \omega_t \right] \in S$$

di mana $d_{\text{obs},t}$ adalah jarak ke rintangan terdekat hasil pembacaan *LIDAR* dan $\omega_t$ adalah simpangan orientasi terhadap jalur referensi.

### 2.2 Bellman Optimality Equation

Tujuan RL adalah menemukan kebijakan optimal $\pi^*(a|s)$ yang memaksimalkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Fungsi nilai optimal memenuhi *Bellman Optimality Equation*:

$$V^*(s) = \max_{a \in A} \left[ R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) V^*(s') \right]$$

Secara ekuivalen, fungsi Q optimal:

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) \max_{a'} Q^*(s',a')$$

### 2.3 Q-Learning Update Rule

Kala (2024) membahas bahwa untuk lingkungan diskret atau diskretisasi state-action, algoritma *Q-learning* memperbarui nilai Q melalui:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. *Temporal Difference error* didefinisikan sebagai:

$$\delta_t = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)$$

### 2.4 Reward Function untuk Motion Planning

Perancangan *reward shaping* merupakan aspek kritis. Kala (2024) mengusulkan fungsi reward multi-komponen:

$$R(s,a,s') = w_1 R_{\text{goal}}(s') + w_2 R_{\text{collision}}(s') + w_3 R_{\text{progress}}(s,a,s') + w_4 R_{\text{smooth}}(a)$$

dengan formulasi konkret:

$$R_{\text{goal}}(s') = \begin{cases} +R_g, & \text{if } \|p_{s'} - p_{\text{goal}}\| < \epsilon \\ 0, & \text{otherwise} \end{cases}$$

$$R_{\text{collision}}(s') = \begin{cases} -R_c, & \text{if } d_{\text{obs}} < d_{\min} \\ 0, & \text{otherwise} \end{cases}$$

$$R_{\text{progress}}(s,a,s') = \beta \cdot \left( \|p_s - p_{\text{goal}}\| - \|p_{s'} - p_{\text{goal}}\| \right)$$

di mana $w_i$ adalah bobot kepentingan dan $\beta$ adalah koefisien insentif kedekatan.

### 2.5 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Untuk ruang state kontinu (misalnya citra LIDAR), Kala (2024) menjelaskan penggunaan *Deep Q-Network* (DQN) yang mengaproksimasi $Q(s,a;\theta)$ dengan neural network. Fungsi loss:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter *target network* yang diperbarui periodik dan $\mathcal{D}$ adalah *replay buffer*.

### 2.6 Integrasi dengan Multi-Agent RL

Borah (2024) dalam disertasinya membahas *Multi-Agent Reinforcement Learning* (MARL) untuk sistem SAMAS di mana setiap agen $i$ memiliki kebijakan $\pi_i$ dan nilai bersama:

$$Q_i^{\text{total}}(s, a_1, ..., a_N) = R_i(s,a) + \gamma \sum_{s'} P(s'|s,a) \max_{a'} Q_i^{\text{total}}(s', a')$$

Pendekatan ini relevan untuk armada AGV yang saling berinteraksi di *intersection* jalur.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem RL untuk Motion Planning

Implementasi industri mengikuti kerangka berlapis sebagai berikut (Kala, 2024):

1. **Lapisan Persepsi**: Fusion sensor (LIDAR 2D/3D, kamera stereo, IMU) menghasilkan state $s_t$.
2. **Lapisan Diskretisasi/Encoding**: Konversi state kontinu ke tensor input jaringan saraf.
3. **Lapisan Kebijakan (Policy Network)**: DQN/PPO/SAC menghasilkan aksi $a_t$ (kecepatan linear $v_t$ dan angular $\omega_t$).
4. **Lapisan Eksekusi Kinematik**: Konversi aksi ke perintah roda/motor menggunakan model *differential drive* atau *Ackermann steering*.
5. **Lapisan Reward Calculation**: Modul yang menghitung $r_{t+1}$ berbasis bacaan sensor.

### 3.2 SOP Pelatihan dan Deployment

```
┌────────────────────────────────────────────────────────────┐
│  FASE 1: SIMULASI (Training Offline)                       │
│  ├─ Inisialisasi lingkungan Gazebo/Webots/Isaac Sim        │
│  ├─ Definisikan MDP (S, A, R) sesuai SOP                │
│  ├─ Train policy π selama N episode (≥10⁶ step)         │
│  └─ Validasi: success rate ≥ 95%, collision rate < 1%  │
├────────────────────────────────────────────────────────────┤
│  FASE 2: SIM-TO-REAL TRANSFER                              │
│  ├─ Domain randomization (tekstur, cahaya, dinamika)    │
│  ├─ Fine-tuning di test bench dengan safety cage        │
│  └─ Validasi ISO 3691-4 (driverless industrial trucks)   │
├────────────────────────────────────────────────────────────┤
│  FASE 3: DEPLOYMENT OPERASIONAL                            │
│  ├─ Mode shadow-running (robot inferensi, operator ctrl) │
│  ├─ Human-in-the-loop override via HMI                 │
│  ├─ Logging telemetry + edge case untuk continuous      │
│  │   learning                                          │
│  └─ Audit bulanan kepatuhan ISO 10218 / ANSI/RIA R15.06 │
└────────────────────────────────────────────────────────────┘
```

### 3.3 Integrasi FDIR (Borah, 2024)

Untuk sistem kritis, Borah (2024) merekomendasikan integrasi modul FDIR berbasis *Nonlinear Filtering* (Extended Kalman Filter / Unscented Kalman Filter) yang berjalan paralel dengan RL policy:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t (z_t - h(\hat{x}_{t|t-1}))$$

di mana $K_t$ adalah *Kalman gain* dan $z_t$ adalah pengukuran sensor. *Residual* $r_t = z_t - h(\hat{x}_{t|t-1})$ dipantau untuk deteksi anomali; jika $\left|r_t\right| > \tau$, agen memasuki *safe state* (berhenti, alarm ke fleet manager) dan mengirimkan sinyal fallback.

### 3.4 Standar Industri yang Relevan

- **ISO 3691-4**: Persyaratan keselamatan untuk kendaraan industri driverless.
- **ISO 10218-1/2**: Persyaratan keselamatan robot industri.
- **ANSI/RIA R15.08**: Standar khusus AMR industri.
- **IEC 61508**: Functional safety sistem elektronik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pabrik *electronic manufacturing services* (EMS) di Batam memiliki 12 unit AGV tipe *differential drive* dengan spesifikasi:

- Konfigurasi state diskret: grid $20 \times 20$ sel (1 sel = 0.5 m)
- Aksi diskret: 5 pilihan $(v, \omega) \in \{(-0.2, 0), (0, 0), (0.2, 0), (0, 0.5), (0, -0.5)\}$ m/s, rad/s
- Start: $s_0 = (2, 3)$, Goal: $s_g = (18, 17)$, dengan 8 rintangan statis.
- Parameter reward: $R_g = +100$, $R_c = -100$, $\beta = 1$, $\gamma = 0.95$, $\alpha = 0.1$.

### 4.2 Langkah Perhitungan Q-Learning Step-by-Step

**Iterasi Episode 1, Step 1**: Dari state $s_1 = (2,3)$, agen memilih aksi $a_1 = (0