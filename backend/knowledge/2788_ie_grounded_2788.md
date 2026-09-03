# 2788 — Perencanaan Gerak (Motion Planning) Menggunakan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning Menggunakan Reinforcement Learning pada Robot Bergerak Otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma manufaktur dan logistik menuju **Industry 4.0** dan **Society 5.0** telah menempatkan robot bergerak otonom (*Autonomous Mobile Robots*/AMR) sebagai tulang punggung operasional berbagai fasilitas modern. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan Elsevier menjelaskan bahwa perencanaan gerak (*motion planning*) merupakan salah satu subsistem paling kritis yang menentukan tingkat otonomi, keselamatan, dan produktivitas armada robot di lingkungan industri dinamis. Permasalahan motion planning pada dasarnya adalah pencarian lintasan optimal dari konfigurasi awal (*start state*) menuju konfigurasi target (*goal state*) di dalam ruang konfigurasi $C \subseteq \mathbb{R}^n$ yang mungkin dihuni oleh rintangan statis maupun dinamis. Kala menegaskan bahwa pendekatan klasik seperti *Roadmap*, *Cell Decomposition*, dan *Potential Field* memiliki keterbatasan inheren ketika diterapkan pada lingkungan dengan tingkat ketidakpastian tinggi, misalnya gudang otomatis dengan lalu lintas padat, lantai produksi *just-in-time*, atau ruang rumah sakit dengan pergerakan manusia yang tidak terprediksi.

Konteks industri yang melatarbelakangi adopsi *Reinforcement Learning* (RL) dalam motion planning sangat kuat. Kala (2024) mengutip DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9) bahwa biaya downtime akibat tabrakan AMR di pusat distribusi e-commerce dapat mencapai USD 5.000–10.000 per jam, sementara kerugian tahunan akibat perencanaan lintasan yang suboptimal mencapai 3–7% dari total biaya operasional logistik. Oleh karena itu, kemampuan robot untuk *belajar* perilaku navigasi melalui interaksi berulang dengan lingkungannya menjadi nilai strategis yang signifikan. Pendekatan RL—berbeda dengan *classical motion planning* yang bersifat *reaktif* dan *lokal*—mampu menghasilkan kebijakan (*policy*) yang bersifat *global*, adaptif terhadap perubahan lingkungan, serta dapat mentransfer pengetahuan (*transfer learning*) ke skenario baru.

Melengkapi perspektif tersebut, Kaustav Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS) dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) menekankan bahwa sistem industri modern tidak lagi hanya membutuhkan satu agen otonom, melainkan kolaborasi multi-agen yang harus mampu melakukan *Fault Detection, Isolation, and Reconstruction* (FDIR) secara simultan. Borah menunjukkan bahwa integrasi RL dengan *nonlinear filtering* memungkinkan armada AMR untuk secara kolektif menavigasi lingkungan sambil mendeteksi anomali sensor, mengisolasi lokasi kegagalan, dan merekonstruksi lintasan secara *real-time*. Sinergi antara kedua literatur ini menegaskan urgensi pengembangan metodologi motion planning berbasis RL yang tidak hanya optimal secara lokal, melainkan juga robust secara sistemik untuk kebutuhan manufaktur, pergudangan, dan rantai pasok modern.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Markov Decision Process (MDP)

Kala (2024) merumuskan bahwa permasalahan motion planning dengan reinforcement learning secara formal dimodelkan sebagai **Markov Decision Process** (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan state (konfigurasi robot dan lingkungan)
- $\mathcal{A}$ = himpunan aksi (percepatan, kemudi, kecepatan sudut)
- $\mathcal{P}(s'|s,a)$ = probabilitas transisi dari state $s$ ke state $s'$ setelah aksi $a$
- $\mathcal{R}(s,a)$ = fungsi reward (imbalan)
- $\gamma \in [0,1]$ = faktor diskonto temporal

### 2.2 Persamaan Bellman dan Fungsi Nilai

Tujuan utama agen RL adalah memaksimalkan *expected cumulative reward*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Fungsi nilai state $V^{\pi}(s)$ untuk kebijakan $\pi$ memenuhi **Bellman Equation**:

$$V^{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a) \left[ \mathcal{R}(s,a) + \gamma V^{\pi}(s') \right]$$

Kala menjelaskan bahwa *Bellman Optimality Equation* memberikan fungsi nilai optimal:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a) \left[ \mathcal{R}(s,a) + \gamma V^*(s') \right]$$

### 2.3 Q-Learning dan Deep Q-Network (DQN)

Untuk ruang state yang kontinu dan berdimensi tinggi (umumnya dijumpai pada AMR industri), Kala (2024) menggunakan **Q-Learning** dengan **Deep Q-Network**. Aturan pembaruan Q-Learning adalah:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s', a') - Q(s,a) \right]$$

di mana $\alpha$ adalah laju pembelajaran. Untuk generalisasi pada state kontinu, digunakan neural network $Q(s,a;\theta)$ dengan parameter $\theta$, dan fungsi loss yang diminimasi adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer*.

### 2.4 Reward Shaping untuk Motion Planning

Kala (2024) dan Borah (2024) menekankan pentingnya *reward shaping* untuk mempercepat konvergensi dan menjamin keselamatan. Fungsi reward tipikal adalah:

$$R(s,a,s') = w_1 \cdot \mathbb{I}_{\text{goal}} - w_2 \cdot \mathbb{I}_{\text{collision}} - w_3 \cdot d(s', s_{\text{goal}}) + w_4 \cdot \Delta v$$

di mana $d(s', s_{\text{goal}})$ adalah jarak Euclidean ke goal, $\Delta v$ adalah perubahan kecepatan, dan $w_1, w_2, w_3, w_4$ adalah bobot yang dikalibrasi.

### 2.5 Pemfilteran Nonlinear untuk Ketidakpastian Sensor

Borah (2024) melengkapi formulasi di atas dengan menyertakan **Extended Kalman Filter** (EKF) atau **Particle Filter** untuk mengestimasi state sebenarnya $\hat{x}_t$ dari pengukuran yang mengandung noise $\epsilon_t \sim \mathcal{N}(0, \Sigma)$. Prediksi state:

$$\hat{x}_{t|t-1} = f(\hat{x}_{t-1|t-1}, u_{t-1})$$

dan pembaruan:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t (z_t - h(\hat{x}_{t|t-1}))$$

dengan gain Kalman $K_t = P_{t|t-1} H^T (H P_{t|t-1} H^T + R)^{-1}$. Output EKF menjadi input state $s$ pada agen RL, sehingga motion planning menjadi robust terhadap derau sensor industri.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan integrasi metodologi Kala (2024) dan Borah (2024), implementasi motion planning berbasis RL untuk AMR industri mengikuti **SOP 8 Tahap** berikut:

**Tahap 1 — Pemetaan Lingkungan (*Mapping*).** Menggunakan sensor LiDAR 2D/3D dan algoritma SLAM (*Simultaneous Localization and Mapping*) seperti GMapping atau Cartographer untuk menghasilkan peta occupancy grid $M \in \{0,1\}^{H \times W}$.

**Tahap 2 — Diskritisasi State-Action.** State didefinisikan sebagai $s_t = [x_t, y_t, \theta_t, v_t, d_{\text{goal}}, d_{\text{nearest\_obs}}]$. Aksi diskret atau kontinu $a_t \in \mathcal{A}$ mencakup perintah kecepatan linear $v \in [0, v_{\max}]$ dan kecepatan sudut $\omega \in [-\omega_{\max}, \omega_{\max}]$.

**Tahap 3 — Estimasi State dengan Nonlinear Filter.** Terapkan EKF (Borah, 2024) untuk menyaring derau sensor LiDAR, IMU, dan odometry wheel sebelum dimasukkan ke jaringan RL.

**Tahap 4 — Desain Fungsi Reward.** Rancang reward dengan bobot: $w_1 = +100$ (goal tercapai), $w_2 = -50$ (collision), $w_3 = -1$ (jarak ke goal), $w_4 = -0.1$ (waktu). Penalti tambahan untuk area terlarang (*keep-out zones*) sesuai standar ISO 3691-4 tentang AMR.

**Tahap 5 — Pelatihan Agen.** Gunakan simulator Gazebo atau Webots dengan skenario deterministik dan stochastic. Latih agen DQN selama $N = 10^6$ episode dengan target konvergensi $\epsilon_{\text{policy}} < 10^{-3}$.

**Tahap 6 — Validasi Simulasi.** Uji 1000 episode pengujian dengan metrik: *success rate*, *average path length*, *collision rate*, *average completion time*. Standar minimum industri: success rate $\geq 99.5%$, collision rate $\leq 0.1\%$.

**Tahap 7 — Transfer Learning dan Fine-tuning.** *Transfer* kebijakan dari simulator ke robot fisik menggunakan *domain randomization* (Kala, 2024), lalu *fine-tune* di lantai produksi dengan *human-in-the-loop* supervision.

**Tahap 8 — Integrasi FDIR Multi-Agen.** Terapkan arsitektur SAMAS (Borah, 2024) untuk monitoring anomali lintas armada AMR, dengan protokol komunikasi terdistribusi menggunakan ROS 2 + DDS.

**Diagram alir proses** secara ringkas dapat direpresentasikan sebagai:

```
[Sensor LiDAR/IMU] → [EKF Filter] → [State s_t]
                                          ↓
                                  [DQN Agent π(a|s;θ)]
                                          ↓
                                  [Action a_t (v,ω)]
                                          ↓
              [Robot Actuator] ← [Safety Check ISO 3691-4]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Pertimbangkan AMR yang beroperasi di gudang distribusi PT Logistik Nusantara (data ilustratif). Robot bertugas mengambil pallet di rak **A7** dan mengantar ke area staging **B12** dengan jarak Euclidean 85 meter. Peta gudang 100×100 m dengan resolusi grid 0,5 m. Kecepatan operasi $v_{\max} = 1{,}5$ m/s. Empat obstacle statis (rak tambahan) dan dua obstacle dinamis (operator manusia).

### 4.2 Parameter MDP dan Hyperparameter

| Parameter | Nilai |
|-----------|-------|
| $\gamma$ | 0,99 |
| $\alpha$ (laju belajar) | 0,0005 |
| Batch size | 64 |
| Replay buffer | 100.000 |
| $\epsilon$ (eksplorasi awal) | 1,0 → 0,01 (decay 0,995) |

### 4.3 Reward Shaping Awal

$$R(s,a,s') = \underbrace{+100 \cdot \mathbb{I}_{\text{goal}}}_{R_1} - \underbrace{50 \cdot \mathbb{I}_{\text{collision}}}_{R_2} - \underbrace{1{,}0 \cdot d_{Euclidean}(s', s_g)}_{R_3} - \underbrace{0{,}05 \cdot |a_t|}_{R_4}$$

### 4.4 Simulasi Episode Tunggal

Misalkan pada episode ke-50.000, robot berada di state $s_t = (45{,}2 \text{ m},\ 30{,}8 \text{ m},\ 47^\circ,\