# 1828 — Perencanaan Gerak Otonom Menggunakan Reinforcement Learning untuk Sistem Multi-Agen dalam Rekayasa Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap Industry 4.0 dan Society 5.0, sistem otonom telah menjadi pilar transformasional yang mendefinisikan ulang arsitektur operasional lantai produksi, rantai pasok, dan logistik pintar. Rahul Kala (2024) dalam bab *Motion planning using reinforcement learning* pada buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (motion planning) merupakan kemampuan fundamental yang menentukan tingkat otonomi sebuah agen robotik dalam menavigasi lingkungan kerja yang kompleks, dinamis, dan tidak pasti. Kala (2024) mengargumentasikan bahwa pendekatan klasik berbasis algoritma deterministik seperti A*, Rapidly-exploring Random Tree (RRT), atau Potential Field sudah tidak cukup memadai ketika menghadapi ruang状态 (state space) berdimensi tinggi, hambatan dinamis, serta kendala kinematik non-holonomik (DOI: 10.1016/b978-0-443-18908-1.00016-9).

Urgensi industrialisasi pendekatan reinforcement learning (RL) untuk motion planning didorong oleh tiga faktor konkuren. Pertama, peningkatan volume *automated guided vehicles* (AGV) dan *autonomous mobile robots* (AMR) di gudang pintar—pasar global AMR diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR lebih dari 14%. Kedua, kompleksitas sistem manufaktur fleksibel (FMS) yang menuntut adaptasi real-time terhadap perubahan tata letak, kedatangan pesanan yang stokastik, dan kegagalan sensor/aktuator. Ketiga, keterbatasan metode konvensional dalam menangani *partial observability* dan *stochastic transition* yang inheren di lingkungan industri nyata (Kala, 2024).

Kontribusi metodologis yang sangat relevan untuk konteks Teknik Industri datang dari Kaustav Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-Agent Systems* (SAMAS). Borah menekankan bahwa sistem rekayasa modern—mulai dari lini perakitan otomotif hingga jaringan logistik multi-modal—memiliki potensi kegagalan pada sensor, aktuator, komponen mekanis, jaringan komunikasi, maupun pengendali. Framework Fault Detection, Isolation, and Reconstruction (FDIR) yang dikombinasikan dengan RL menjadi krusial untuk memastikan kontinuitas operasional (DOI: 10.32920/25412566.v1). Dengan mengintegrasikan perspektif Kala (2024) tentang motion planning RL dan Borah (2024) tentang arsitektur multi-agen otonom, modul ini menyajikan kerangka komprehensif bagi insinyur industri untuk merancang sistem gerak otonom yang adaptif, tangguh terhadap故障 (fault), dan teroptimisasi secara ekonomi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Motion planning dengan reinforcement learning secara formal dimodelkan sebagai MDP yang didefinisikan oleh tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$:

- $\mathcal{S}$: himpunan state yang merepresentasikan konfigurasi robot pada waktu $t$, misalnya posisi $\mathbf{x}_t = (x, y, \theta)$, kecepatan $\mathbf{v}_t$, dan pembacaan sensor jarak $d_{i,t}$ untuk $i=1,\dots,n$.
- $\mathcal{A}$: himpunan aksi (perintah kecepatan linear $v$ dan angular $\omega$, atau lebih umum vektor kendali $\mathbf{u}_t \in \mathbb{R}^m$).
- $P(s'|s,a)$: probabilitas transisi状态 ke $s'$ setelah menjalankan aksi $a$ di state $s$.
- $R: \mathcal{S} \times \mathcal{A} \to \mathbb{R}$: fungsi reward.
- $\gamma \in [0,1)$: faktor diskonto temporal.

Tujuan agen adalah mempelajari policy $\pi(a|s)$ yang memaksimumkan *expected discounted return*:

$$J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^t R(s_t, a_t)\right]$$

### 2.2 Persamaan Bellman dan Value Function

*State-value function* memenuhi persamaan Bellman optimal:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^*(s') \right]$$

*Action-value function* (Q-function) untuk algoritma Deep Q-Network (DQN) yang digunakan Kala (2024):

$$Q^*(s,a) = \mathbb{E}\left[R(s,a) + \gamma \max_{a'} Q^*(s',a')\right]$$

Update Q-network dilakukan dengan meminimalkan *temporal-difference loss*:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[\left(r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_{\theta}(s,a)\right)^2\right]$$

di mana $\theta^-$ adalah parameter *target network* dan $\mathcal{D}$ adalah *replay buffer* pengalaman (Kala, 2024).

### 2.3 Kinematika Non-Holonomik dan Model Gerak

Untuk AMR tipe differential-drive dengan kontrol $(v, \omega)$, model kinematik unicycle adalah:

$$\dot{x} = v\cos\theta, \quad \dot{y} = v\sin\theta, \quad \dot{\theta} = \omega$$

Disretisasi dengan langkah waktu $\Delta t$ memberikan:

$$x_{t+1} = x_t + v_t \cos\theta_t \Delta t$$
$$y_{t+1} = y_t + v_t \sin\theta_t \Delta t$$
$$\theta_{t+1} = \theta_t + \omega_t \Delta t$$

### 2.4 Extended Kalman Filter (EKF) untuk State Estimation

Integrasi nonlinear filtering ala Borah (2024) diperlukan karena pengukuran sensor di dunia nyata mengandung derau. Prediksi状态 EKF:

$$\hat{\mathbf{x}}_{t|t-1} = f(\hat{\mathbf{x}}_{t-1|t-1}, \mathbf{u}_t)$$
$$\mathbf{P}_{t|t-1} = \mathbf{F}_t \mathbf{P}_{t-1|t-1} \mathbf{F}_t^T + \mathbf{Q}_t$$

Update pengukuran:

$$\mathbf{K}_t = \mathbf{P}_{t|t-1} \mathbf{H}_t^T (\mathbf{H}_t \mathbf{P}_{t|t-1} \mathbf{H}_t^T + \mathbf{R}_t)^{-1}$$
$$\hat{\mathbf{x}}_{t|t} = \hat{\mathbf{x}}_{t|t-1} + \mathbf{K}_t (\mathbf{z}_t - h(\hat{\mathbf{x}}_{t|t-1}))$$
$$\mathbf{P}_{t|t} = (\mathbf{I} - \mathbf{K}_t \mathbf{H}_t) \mathbf{P}_{t|t-1}$$

di mana $\mathbf{F}_t = \partial f/\partial \mathbf{x}|_{\hat{\mathbf{x}}_{t-1}}$ dan $\mathbf{H}_t = \partial h/\partial \mathbf{x}|_{\hat{\mathbf{x}}_{t|t-1}}$ (DOI: 10.32920/25412566.v1).

### 2.5 Multi-Agent RL dengan FDIR

Untuk $N$ agen dalam sistem manufaktur kolaboratif, fungsi Q dapat diperluas ke *decentralized partially observable MDP* (Dec-POMDP). Borah (2024) mengusulkan bahwa setiap agen $i$ mempertahankan keyakinan状态 $\mathbf{b}_t^{(i)}$ yang diperbarui menggunakan residual filter $r_t^{(i)} = \mathbf{z}_t^{(i)} - \hat{\mathbf{z}}_t^{(i)}$. Jika $\|r_t^{(i)}\| > \tau$ (ambang故障), agen mengisolasi sub-sistem dan meminta rekonstruksi dari agen tetangga melalui protokol konsensus:

$$\hat{\mathbf{x}}_t^{(i,\text{rec})} = \sum_{j \in \mathcal{N}(i)} w_{ij} \hat{\mathbf{x}}_t^{(j)}, \quad \sum_{j} w_{ij} = 1$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Motion Planning RL

Berdasarkan sintesis Kala (2024) dan Borah (2024), arsitektur SOP implementasi motion planning RL untuk AMR industri tersusun atas lima lapisan:

```
┌─────────────────────────────────────────────────────────┐
│ Layer 5: Mission Planner & Fleet Coordinator            │
│          (penugasan job, penjadwalan, optimasi rute)    │
├─────────────────────────────────────────────────────────┤
│ Layer 4: Reinforcement Learning Policy π(a|s,θ)         │
│          (DQN / PPO / SAC, training & deployment)       │
├─────────────────────────────────────────────────────────┤
│ Layer 3: Motion Planner Lokal (trajectory generation)   │
│          (output: sekuens waypoint & kontrol v, ω)      │
├─────────────────────────────────────────────────────────┤
│ Layer 2: State Estimator (EKF/UKF) + FDIR Module        │
│          (fusi sensor LiDAR, IMU, encoder roda)         │
├─────────────────────────────────────────────────────────┤
│ Layer 1: Sensor & Aktuator (LiDAR 2D, IMU 9-DOF, motor) │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Operasional Langkah demi Langkah

**Langkah 1 — Pemetaan dan Kalibrasi Pabrik.** Lakukan SLAM (*Simultaneous Localization and Mapping*) menggunakan LiDAR 2D untuk membangun peta occupancy grid $\mathcal{M} \in \{0,1\}^{W \times H}$ dengan resolusi sel $r$ (mis. 0,05 m). Standar referensi: ISO 3691-4:2020 untuk AMR industri.

**Langkah 2 — Definisi Reward Function.** Rancang reward yang menyeimbangkan keselamatan, efisiensi, dan kelancaran. Formulasi yang disarankan Kala (2024):

$$r_t = \alpha_1 \cdot r_{\text{goal}} + \alpha_2 \cdot r_{\text{collision}} + \alpha_3 \cdot r_{\text{smooth}} + \alpha_4 \cdot r_{\text{time}}$$

dengan tipikal $\alpha_1 = +100$, $\alpha_2 = -200$, $\alpha_3 = -0{,}5 \cdot |\omega_t|$, $\alpha_4 = -0{,}1$.

**Langkah 3 — Training dalam Simulasi.** Gunakan *digital twin* pabrik (Gazebo, Isaac Sim) untuk melatih policy selama $\geq 2 \times 10^6$ episode sebelum deployment. Terapkan *domain randomization* pada tekstur lantai, posisi rintangan, dan parameter drift sensor.

**Langkah 4 — Integrasi EKF + FDIR.** Konfigurasikan EKF dengan matriks kovarians proses $\mathbf{Q} = \text{diag}(0{,}01, 0{,}01, 0{,}005)$ dan kovarians pengukuran $\mathbf{R} = \text{diag}(0{,}05, 0{,}05, 0{,}02)$. Aktifkan modul deteksi故障 berbasis residual seperti Borah (2024).

**Langkah 5 — Validasi dan Commissioning.** Lakukan uji Site Acceptance Test (SAT) mengikuti VDI 2510 dengan metrik: *success rate* navigasi $\geq 99{,}5\%$, *mean time between failures* (MTBF) $\geq 500$ jam, dan *positioning accuracy* $\leq \pm 10$ mm.

**Langkah 6 — Continuous Improvement.** Implementasikan *safe exploration* dengan *shielding* policy (melindungi aksi berbahaya) dan pipeline RL kontinu yang memperbarui model dari data operasional nyata menggunakan *human-in-the-loop* override.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AMR Pengangkut Komponen di Pabrik Otomotif

Sebuah pabrik otomotif memiliki **10 unit AMR** yang bertugas memindahkan komponen dari *staging area* ke 5 *assembly station* dengan tata letak seperti ditunjukkan pada denah 50 m × 30 m. Satu unit AMR difokuskan untuk dianalisis.

**Parameter input industri:**
- Peta grid: $W = 1000$, $H = 600$ sel, resolusi $r = 0{,}05$ m.
- Kecepatan linear operasi: $v_{\max} = 1{,}5$ m/s, $\omega_{\max} = 1{,}0$ rad/s.
- Beban muatan: $m = 250$ kg.
- LiDAR: jangkauan 25 m, frekuensi 10 Hz, derau jarak $\sigma_r = 0{,}03$ m.
- IMU: drift gyro $\sigma_g = 0{,}001$ rad/s.
- Goal position: $(x_g, y_g, \theta_g) = (40, 20, 0)$.
- Posisi awal: $(x_0, y_0, \theta_0) = (5, 5, 0)$.

### 4.2 Perhitungan 1: Estimasi State dengan EKF

Misalkan pada waktu $t-1$ estimasi state adalah $\hat{\mathbf{x}}_{t-1} = [5{,}0; 5{,}0; 0{,}0]$ dengan $\mathbf{P}_{t-1} = \text{diag}(0{,}01, 0{,}01, 0{,}001)$. Agen menjalankan aksi $\mathbf{u}_t = [v=1{,}0 \text{ m/s}, \omega=0{,}2 \text{ rad/s}]$ dengan $\Delta t = 0{,}1$ s.

**Tahap prediksi (predict):**
$$x_{t|t-1} = 5{,}0 + 1{,}0 \cdot \cos(0) \cdot 0{,}1 = 5{,}100$$
$$y_{t|t-1} = 5{,}0 + 1{,}0 \cdot \sin(0) \cdot