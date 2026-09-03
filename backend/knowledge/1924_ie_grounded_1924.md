# 1924 — Perencanaan Gerak (Motion Planning) Menggunakan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning menggunakan reinforcement learning untuk robot bergerak otonom dan sistem multi-agen
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Disertasi Peer-Reviewed. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah memaksa perusahaan manufaktur, logistik, dan pergudangan untuk mengadopsi *Autonomous Mobile Robots* (AMR) secara masif. Menurut Kala (2024) dalam bab *Motion planning using reinforcement learning* pada buku *Autonomous Mobile Robots*, perencanaan gerak (*motion planning*) bukan lagi persoalan geometris murni melainkan masalah keputusan sekuensial dalam ruang keadaan (*state space*) yang harus diselesaikan secara adaptif terhadap dinamika lingkungan industri yang stokastik. Rahul Kala (2024) menekankan bahwa algoritma classical seperti A*, RRT, dan potential field methods memiliki keterbatasan fatal ketika diterapkan pada lingkungan dinamis, tidak lengkap informasinya, atau mengandung agen-agen otonom lain yang berperilaku tidak deterministik (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Urgensi ekonomi dari adopsi teknologi ini sangat nyata. Pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR lebih dari 15%, didorong oleh *e-commerce*, *micro-fulfillment*, dan kebutuhan akan *order-picking* yang fleksibel. Namun, tantangan operasional seperti tabrakan lintas lorong, *deadlock* di persimpangan sempit, dan *throughput bottleneck* menjadi masalah klasik yang menghabiskan hingga 18–25% dari total *cycle time* jika tidak diselesaikan dengan benar. Pendekatan *rule-based* (misalnya *traffic light coordination* atau *zone-based reservation*) menghasilkan utilisasi ruang yang rendah karena konservatif secara inheren.

Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-Agent Systems* (SAMAS) menunjukkan bahwa integrasi reinforcement learning (RL) dengan *nonlinear filtering* (misalnya *Extended Kalman Filter* dan *Particle Filter*) mampu memberikan kemampuan *Fault Detection, Isolation, and Reconstruction* (FDIR) yang esensial bagi armada AMR untuk beroperasi secara kontinu tanpa intervensi manusia (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Pendekatan ini sangat relevan ketika satu agen mengalami degradasi sensor atau kegagalan aktuator, di mana agen lain harus melakukan re-planning secara real-time.

Dari perspektif Teknik Industri, masalah motion planning dapat diformulasikan sebagai *decision-making problem* yang harus menyeimbangkan tiga metrik utama: (1) **makespan** atau *travel time* minimum, (2) **safety** atau jarak minimum ke halangan, dan (3) **energy efficiency** yang kini menjadi perhatian keberlanjutan. Pendekatan RL memungkinkan robot belajar kebijakan (*policy*) yang optimal melalui interaksi dengan lingkungan—baik lingkungan nyata maupun simulator—tanpa memerlukan model eksplisit dari dinamika障碍 dan agen lain. Inilah yang menjadi paradigma baru dalam perancangan sistem otonom industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Permasalahan motion planning dengan RL diformulasikan secara formal sebagai MDP $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ (Kala, 2024):

- $\mathcal{S}$: himpunan keadaan (*states*), merepresentasikan konfigurasi robot $(x, y, \theta, v)$ ditambah informasi sensorik seperti jarak ke halangan.
- $\mathcal{A}$: himpunan tindakan (*actions*), misalnya perpindahan diskrit ke 8 arah atau perintah kecepatan linear dan angular continuous.
- $P(s' \mid s, a)$: probabilitas transisi, yang umumnya tidak diketahui (*model-free*) dan harus dipelajari.
- $R(s, a, s')$: fungsi reward, yang menjadi inti *engineering* karena menentukan perilaku yang muncul.
- $\gamma \in [0, 1)$: faktor diskonto untuk menyeimbangkan reward jangka pendek dan jangka panjang.

Tujuan agen RL adalah mempelajari kebijakan $\pi: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$J(\pi) = \mathbb{E}_{\tau \sim \pi}\left[\sum_{t=0}^{T} \gamma^t R(s_t, a_t, s_{t+1})\right]$$

dengan $\tau = (s_0, a_0, s_1, a_1, \ldots)$ adalah *trajectory* yang dilalui.

### 2.2 Persamaan Bellman dan Value Function

*State-value function* didefinisikan sebagai ekspektasi return ketika mengikuti kebijakan $\pi$ dari keadaan $s$:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t R(s_t, a_t, s_{t+1}) \,\Big|\, s_0 = s\right]$$

*Action-value function* (Q-function) didefinisikan sebagai:

$$Q^{\pi}(s, a) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t R(s_t, a_t, s_{t+1}) \,\Big|\, s_0 = s, a_0 = a\right]$$

Hubungan rekursifnya memenuhi persamaan Bellman:

$$V^{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s) \sum_{s' \in \mathcal{S}} P(s' \mid s, a)\left[R(s, a, s') + \gamma V^{\pi}(s')\right]$$

Optimalitas dicapai ketika $V^{\pi^*}(s) = \max_{\pi} V^{\pi}(s)$, dengan optimal action-value:

$$Q^{*}(s, a) = \sum_{s'} P(s' \mid s, a)\left[R(s, a, s') + \gamma \max_{a'} Q^{*}(s', a')\right]$$

### 2.3 Q-Learning sebagai Fondasi Algoritma

Kala (2024) menekankan bahwa Q-learning merupakan titik awal yang penting karena *off-policy* dan convergence-nya terjamin. Update rule:

$$Q(s, a) \leftarrow Q(s, a) + \alpha \left[r + \gamma \max_{a'} Q(s', a') - Q(s, a)\right]$$

dengan $\alpha$ adalah learning rate. Untuk ruang keadaan kontinu yang besar (misalnya gudang 200×200 m dengan resolusi 0,1 m menghasilkan $|S| = 4 \times 10^6$), maka digunakan **Deep Q-Network (DQN)** dengan *function approximator* $Q(s, a; \theta)$ dan *target network* $\theta^-$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta)\right)^2\right]$$

dengan $\mathcal{D}$ adalah *replay buffer* untuk dekorelasi sampel. Untuk *continuous action space* (seperti perintah kecepatan motor BLDC pada AMR), digunakan algoritma *policy gradient* seperti DDPG, TD3, atau PPO dengan objective:

$$L^{CLIP}(\theta) = \mathbb{E}_t\left[\min\left(r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t\right)\right]$$

dengan $r_t(\theta) = \frac{\pi_\theta(a_t \mid s_t)}{\pi_{\theta_{old}}(a_t \mid s_t)}$ adalah probability ratio dan $\hat{A}_t$ adalah *advantage estimator*.

### 2.4 Reward Shaping Engineering

Peran insinyur industri dalam RL motion planning adalah merancang fungsi reward yang tepat (Kala, 2024). Bentuk tipikal adalah:

$$R(s, a, s') = w_1 r_{goal} + w_2 r_{collision} + w_3 r_{time} + w_4 r_{smoothness}$$

dengan:
- $r_{goal} = +100$ jika mencapai target,
- $r_{collision} = -100$ jika menabrak halangan,
- $r_{time} = -0{,}1$ setiap langkah (efisiensi),
- $r_{smoothness} = -0{,}05 \cdot \|a_t - a_{t-1}\|^2$ (mengontrol perubahan kecepatan untuk mengurangi aus motor).

Bobot $w_i$ dituning melalui *grid search* atau *Bayesian optimization*—menjadikan RL motion planning sebagai masalah optimasi meta (*hyperparameter optimization*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL motion planning di industri mengikuti SOP berlapis yang dapat disintesis dari Kala (2024) dan Borah (2024):

**Fase 1 — Pemodelan Lingkungan.** Buat representasi *occupancy grid* dari fasilitas dengan resolusi sesuai aplikasi (umumnya 5–10 cm). Tentukan *boundary conditions* zona拣选, charging station, dan lorong. Validasi akurasi sensor LIDAR dengan ground truth SLAM.

**Fase 2 — Perancangan Arsitektur RL.** Pilih algoritma sesuai dimensi aksi. Untuk ruang aksi diskrit (8–16 arah), gunakan DQN atau Rainbow. Untuk ruang aksi kontinu (linear/angular velocity), gunakan PPO atau SAC. Tentukan *observation space* yang mencakup: posisi relatif terhadap target, jarak ke halangan terdekat (4–8 beam LIDAR), dan kecepatan saat ini.

**Fase 3 — Pelatihan dalam Simulator.** Gunakan *digital twin* (Gazebo, Isaac Sim, atau Unity ML-Agents) untuk melatih kebijakan awal. Episode pelatihan harus mencakup variasi: kepadatan lorong (0–30 agen), posisi target acak, dan dynamic obstacles (pejalan kaki, forklifts manual). Standar industri: minimal 10⁶ langkah sebelum deployment.

**Fase 4 — Validasi SIL (Software-in-the-Loop).** Jalankan kebijakan terlatih dalam simulator dengan model dinamika high-fidelity. Ukur metrik: success rate, average episode reward, dan collision rate. Target industri: success rate ≥ 99,5% untuk warehouse operations.

**Fase 5 — Sim-to-Real Transfer.** Terapkan *domain randomization* (variasi friction, delay sensor, noise) selama pelatihan. Fine-tune dengan *real-world data* terbatas menggunakan algoritma *RL with offline pretraining* seperti CQL atau IQL.

**Fase 6 — FDIR Integration.** Sesuai Borah (2024), integrasikan modul nonlinear filtering (EKF/UKF) untuk estimasi state yang robust terhadap sensor noise. Setiap agen AMR menjalankan filter lokal untuk mendeteksi anomali; jika terdeteksi fault pada aktuator atau sensor, agen mengirim sinyal ke *fleet manager* yang memicu *coordinated re-planning* oleh agen tetangga.

**Fase 7 — Supervised Deployment dengan Safety Layer.** Pasang *safety controller* berbasis classical methods (Dynamic Window Approach) sebagai *override* jika RL mengeluarkan perintah yang tidak aman. Ini memenuhi standar ISO 13482 (robot personal care) dan ISO 3691-4 (driverless industrial trucks).

Diagram alur logika proses pengambilan keputusan agen RL:

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Sensor Fusion   │───▶│ State Estimation │───▶│ Policy Network  │
│ (LIDAR+IMU+GPS) │    │ (EKF/Particle)   │    │  π_θ(a|s)       │
└─────────────────┘    └──────────────────┘    └────────┬────────┘
                                                       │
┌─────────────────┐    ┌──────────────────┐            ▼
│ Motor Commands  │◀───│ Safety Override  │◀───┌─────────────────┐
│ (v, ω)          │    │  (DWA check)     │    │ Action Sampling │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AGV di Gudang E-Commerce 200×100 m

**Parameter Input:**
- Peta gudang: 200 m × 100 m, resolusi grid = 0,5 m, sehingga $|\mathcal{S}_{grid}| = 80.000$ states.
- 5 AGV beroperasi simultan, kecepatan maksimum $v_{max} = 1{,}5$ m/s, $\omega_{max} = 1{,}0$ rad/s.
- Diskretisasi aksi: 8 arah heading + 3 level kecepatan, $|\mathcal{A}| = 24$.
- Hyperparameter: $\alpha = 0{,}00025$, $\gamma = 0{,}99$, batch size = 64, replay buffer = $10^6$.

### 4.2 Perhitungan Q-Value Iteratif pada Sub-Masalah

Pertimbangkan satu state