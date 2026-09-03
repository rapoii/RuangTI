# 1844 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Menggunakan Reinforcement Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Motion planning using reinforcement learning* untuk sistem multi-agen otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, in: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap *Industry 4.0* dan *Society 5.0*, robot bergerak otonom (AMR — *Autonomous Mobile Robots*) telah menjadi tulang punggung sistem intralogistik, manufaktur fleksibel, serta rantai pasok cerdas. Permintaan global terhadap AMR diproyeksikan mencapai USD 8,70 miliar pada tahun 2030 dengan CAGR sebesar 14,7% (data sekunder yang digunakan Kala, 2024, untuk mengontekstualisasikan urgensi riset). Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier/B978-0-443-18908-1 menegaskan bahwa permasalahan paling fundamental dalam pengoperasian AMR adalah **motion planning** — yaitu kemampuan robot merumuskan lintasan optimal dari konfigurasi awal ke konfigurasi tujuan dengan tetap memenuhi kendala dinamis, kinematik, dan lingkungan yang berubah secara stokastik.

Urgensi operasional dari studi ini muncul dari tiga fenomena industri konkret. Pertama, metode *classical motion planning* seperti A*, D* Lite, dan Rapidly-exploring Random Trees (RRT) bersifat *deterministic* dan membutuhkan pemodelan lingkungan yang lengkap (*complete prior knowledge*) — kondisi yang nyaris mustahil di gudang *e-commerce* berskala besar dengan inventaris dinamis >10.000 SKU. Kedua, biaya downtime akibat AMR yang gagal menavigasi kemacetan (*traffic deadlock*) dapat menimbulkan kerugian Rp 4,2 miliar per bulan pada fasilitas fulfilment 50.000 m². Ketiga, peraturan Keselamatan Mesin ISO 13849-1:2023 dan ISO/TS 15066:2016 (kolaboratif) mensyaratkan kemampuan reaktif dan adaptif yang hanya bisa dipenuhi oleh arsitektur pembelajaran mesin. Kala (2024) menyitir bahwa pendekatan *Reinforcement Learning* (RL) menjawab keterbatasan ini dengan memungkinkan agen belajar *value function* dan *policy* secara langsung dari interaksi dengan lingkungan (*trial-and-error*), sehingga menghasilkan kebijakan navigasi yang adaptif terhadap ketidakpastian sensorik dan topologis.

Penelitian yang dipublikasikan pada portal Knowledge Network (Borah, 2024) memberikan relevansi pendukung yang kuat, yaitu bahwa sistem multi-agen otonom masa kini tidak cukup hanya *plan*, tetapi juga harus memiliki kemampuan *Fault Detection, Isolation, and Reconstruction* (FDIR). Borah menunjukkan bahwa integrasi RL dengan *nonlinear filtering* (misalnya Extended Kalman Filter dan Particle Filter) mampu meningkatkan keandalan AMR hingga 23,6% pada skenario kegagalan sensor dan actuator. Dengan demikian, sinergi antara motion planning berbasis RL dan arsitektur FDIR berbasis filtering nonlinier menjadi pilar penting dalam rekayasa sistem otonom generasi baru — yang akan diuraikan secara kuantitatif pada Bagian 4.

---

## 2. Landasan Teori & Formulasi Matematis

Motion planning dengan RL diformulasikan sebagai **Markov Decision Process (MDP)** tuple $\mathcal{M} = (\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$ sesuai notasi Kala (2024). Berikut komponen-komponen utamanya:

**a. Ruang Keadaan ($\mathcal{S}$):** Mewakili konfigurasi diskret atau kontinu robot. Untuk AMR planar dengan *differential drive*, state minimal adalah $s_t = (x_t, y_t, \theta_t, v_t, \omega_t) \in \mathcal{S}$ di mana $(x_t, y_t)$ posisi kartesian, $\theta_t$ orientasi heading, $v_t$ kecepatan linier, dan $\omega_t$ kecepatan sudut.

**b. Ruang Aksi ($\mathcal{A}$):** Diskret atau kontinu. Untuk versi diskret dengan delapan arah gerakan: $\mathcal{A} = \{N, NE, E, SE, S, SW, W, NW\}$, sedangkan versi kontinu (Cocok untuk *deep RL*) menggunakan akselerasi linier $a_v \in [-a_{max}, a_{max}]$ dan sudut steering $\delta \in [-\delta_{max}, \delta_{max}]$.

**c. Fungsi Transisi ($\mathcal{P}$):** $\mathcal{P}(s'|s,a) = \Pr(S_{t+1}=s' \mid S_t=s, A_t=a)$. Dalam simulator deterministik, transisi mengikuti model kinematik:

$$x_{t+1} = x_t + v_t \cos(\theta_t) \Delta t$$
$$y_{t+1} = y_t + v_t \sin(\theta_t) \Delta t$$
$$\theta_{t+1} = \theta_t + \omega_t \Delta t$$

**d. Reward Function ($\mathcal{R}$):** Kala (2024) mengusulkan *shaped reward* gabungan:

$$r_t = r_{goal} \cdot \mathbb{1}_{\text{goal}} + r_{collision} \cdot \mathbb{1}_{\text{col}} + \alpha_{dist} \cdot (d_{t-1} - d_t) + \alpha_{time} \cdot (-1)$$

di mana $d_t = \|p_t - p_{goal}\|_2$ adalah jarak Euclidean ke tujuan, $r_{goal}$ reward sukses (umumnya +100), $r_{collision}$ penalti tabrakan (umumnya $-100$), $\alpha_{dist}$ koefisien jarak (misal 1,0), dan $\alpha_{time}$ penalti langkah ($-0,1$). Faktor shaped ini mempercepat konvergensi 3–5× dibanding sparse reward.

**e. Faktor Diskon ($\gamma$):** $\gamma \in [0,1)$, umumnya 0,99 untuk horizon episodik terbatas.

**Persamaan Bellman Optimalitas:**

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ \mathcal{R}(s,a) + \gamma \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a) V^*(s') \right]$$

**Update Aturan Q-Learning (Tabular):**

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \Big[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t,a_t) \Big]$$

dengan *learning rate* $\alpha \in (0,1]$. Untuk lingkungan dengan state kontinu berdimensi tinggi (misalnya pemrosesan peta okupansi 64×64), Kala (2024) merekomendasikan **Deep Q-Network (DQN)** yang menstabilkan pembelajaran menggunakan *experience replay buffer* $\mathcal{D}$ dengan kapasitas $N$ dan *target network* yang diperbarui setiap $C$ langkah:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \Big( r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_\theta(s,a) \Big)^2 \right]$$

Untuk aplikasi kontinu (continuous control) seperti AMR dengan kecepatan variabel, pendekatan **Actor-Critic** lebih sesuai. Gradien kebijakan (REINFORCE/Actor) adalah:

$$\nabla_\theta J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot A^{\pi_\theta}(s_t, a_t) \right]$$

di mana *advantage function* $A^\pi(s_t,a_t) = Q^\pi(s_t,a_t) - V^\pi(s_t)$ mengurangi varians estimator.

Kontribusi orisinal Kala (2024) adalah integrasi *reward shaping* dengan informasi *potential field* $F(s) = \beta \cdot d(s, goal) + \sum_{obs \in \mathcal{O}} \frac{\kappa}{d(s,obs)^2}$ ke dalam fungsi reward RL, yang secara efektif menggabungkan keunggulan classical potential field (lokal optimal avoidance) dengan kemampuan global optimization RL.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL untuk AMR mengikuti SOP 8-tahap berikut, yang distandarkan berdasarkan praktik Kala (2024) dan diperkuat dengan modul FDIR Borah (2024):

**Tahap 1 — Pemetaan & Kalibrasi Sensor:** Akuisisi peta 2D menggunakan LiDAR 2D (±2 cm akurasi) atau SLAM dengan covariance terkalibrasi $\Sigma_{SLAM} \leq 0{,}05$ m². Standar acuan: ISO 18421:2021 untuk performance evaluation of mobile robots.

**Tahap 2 — Diskretisasi Ruang Keadaan:** Konversi peta kontinu menjadi *occupancy grid* dengan resolusi sel $\Delta = 0{,}1$ m sampai 0,5 m. Resolusi lebih halus meningkatkan akurasi namun meningkatkan ukuran state space secara eksponensial.

**Tahap 3 — Desain MDP:** Definisikan state space, action space, dan reward function sesuai Bagian 2. Validasi Markovian assumption melalui uji korelasi serial state transitions.

**Tahap 4 — Pelatihan Offline (Sim2Real):** Latih di simulator (Gazebo, Webots, atau Isaac Sim) dengan 1–5 juta episode. Gunakan *domain randomization* untuk transfer ke robot fisik: variasi koefisien gesekan $\mu \in [0{,}3; 1{,}1]$, slip roda, latensi sensor 10–80 ms.

**Tahap 5 — Validasi Sim-to-Real:** *Fine-tuning* pada robot fisik dengan *real-world episodes* terbatas (50–200 episode) menggunakan *real-time recurrent learning*.

**Tahap 6 — Integrasi dengan FDIR (Borah, 2024):** Pasang modul nonlinear filtering (EKF/UKF) untuk estimasi state $\hat{x}_t$ dengan ketidakpastian $P_t$, dan *residual generator* $r_t = y_t - H\hat{x}_t$ untuk deteksi anomali. Threshold deteksi $T_{FD} = \chi^2_{\alpha, n_y}$ dengan $\alpha = 0{,}01$.

**Tahap 7 — Deployment & Monitoring:** Jalankan AMR dengan *safety envelope* — robot berhenti otomatis jika Q-value tertinggi < threshold $\tau_Q$ atau residual FDIR > $T_{FD}$. Logging ke *digital twin* untuk *continuous learning*.

**Tahap 8 — Re-training Berkala:** Setiap 1–3 bulan, *fine-tune* kebijakan dengan data insiden terbaru.

Arsitektur lengkap digambarkan dalam diagram alir berikut:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LiDAR/SLAM  │───▶│ EKF State   │───▶│  RL Policy  │
│  Sensor     │    │  Estimator  │    │  π_θ(a|s)   │
└─────────────┘    └──────┬──────┘    └──────┬──────┘
                         │                   │
                  ┌──────▼──────┐    ┌──────▼──────┐
                  │  Residual   │    │  Action     │
                  │  r_t = y-Hx̂│    │  Executor   │
                  └──────┬──────┘    └──────┬──────┘
                         │                   │
                  ┌──────▼──────┐    ┌──────▼──────┐
                  │  FDIR       │    │  Odometry   │
                  │  Decision   │    │  Feedback   │
                  └─────────────┘    └─────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Gudang *e-commerce* di Bekasi dengan 6 AMR jenis *differential-drive* mengangkut pallet 200 kg antar *pick-station* dan *pack-station*. Peta grid 30×20 sel (1 sel = 1 m). Episode dimulai di $(0,0)$, tujuan di $(29,19)$. Obstacle tetap di sel $(10,10), (15,12), (20,8)$.

**Parameter MDP:**
- $\mathcal{A} = \{N, E, S, W\}$ (4 diskret)
- $\alpha = 0{,}1$ (learning rate), $\gamma = 0{,}95$
- $\epsilon$-greedy: $\epsilon_0 = 1{,}0$; *decay* $\epsilon_t = 0{,}995^t$
- Reward: $r_{goal} = +100$, $r_{collision} = -50$, $\alpha_{dist} = 1{,}0$, $\alpha_{time} = -0