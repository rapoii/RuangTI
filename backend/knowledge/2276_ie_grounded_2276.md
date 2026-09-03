# 2276 — Perencanaan Gerak (Motion Planning) Otonom Berbasis Reinforcement Learning untuk Sistem Industri Multi-Agen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Perencanaan Gerak (Motion Planning) menggunakan Reinforcement Learning pada Sistem Otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, dalam *Autonomous Mobile Robots: Modeling, Control, and Applications*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Peer-Reviewed Dissertation Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan Society 5.0 menempatkan robot bergerak otonom (Autonomous Mobile Robots/AMR) sebagai tulang punggung rantai pasok modern. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots* yang diterbitkan Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), menegaskan bahwa *motion planning* merupakan subsistem kritis yang menentukan keberhasilan misi robot di lingkungan industri yang dinamis, termasuk gudang otomatis (*automated warehouses*), lini perakitan fleksibel, dan fasilitas manufaktur pintar. Kala menekankan bahwa metode perencanaan gerak klasik seperti *Rapidly-exploring Random Tree* (RRT), *Probabilistic Roadmap* (PRM), dan algoritma berbasis grid sering kali gagal ketika menghadapi ketidakpastian tinggi, perubahan *layout* dinamis, atau interaksi multi-robot.

Kebutuhan industri akan perencanaan gerak yang adaptif semakin mendesak karena tiga faktor utama. Pertama, lonjakan volume e-commerce mendorong perusahaan seperti Amazon, Alibaba, dan JD.com mengoperasikan lebih dari 500.000 AMR secara global, dengan target peningkatan produktivitas *picking* sebesar 30–40%. Kedua, keterbatasan algoritma konvensional dalam menangani *non-stationary environments*—di mana manusia, palet, dan forklift bergerak secara tak terduga—mengakibatkan tingkat tabrakan (*collision rate*) yang secara langsung meningkatkan *downtime* dan biaya operasional. Ketiga, integrasi dengan sistem Warehouse Management System (WMS) menuntut perencanaan gerak yang optimal secara *real-time* dengan *latency* kurang dari 100 milidetik.

Kontribusi Kaustav Borah (2024) dalam disertasinya yang terdokumentasi pada DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) melengkapi perspektif ini dengan mengusulkan kerangka Smart Autonomous Multi-Agent Systems (SAMAS) yang menggabungkan *nonlinear filtering* (misalnya Extended Kalman Filter) dengan *reinforcement learning* (RL) untuk deteksi, isolasi, dan rekonstruksi故障 (FDIR). Borah menyoroti bahwa dalam sistem multi-agen yang beroperasi 24/7 di lingkungan industri, kegagalan sensor, aktuator, atau jaringan komunikasi dapat menyebabkan kerugian produksi hingga USD 50.000 per jam pada pabrik semikonduktor. Dengan demikian, perencanaan gerak tidak dapat dipisahkan dari arsitektur toleransi故障 dan rekonstruksi otonom.

Integrasi kedua perspektif ini menunjukkan bahwa RL bukan sekadar algoritma pembelajaran, melainkan pendekatan *decision-making* yang mampu menangani dimensi state yang tinggi (high-dimensional state space), ketidakpastian stokastik, serta kolaborasi multi-agen secara simultan. Urgensi ekonominya tecermin dari laporan McKinsey (2023) yang menyebutkan bahwa otomasi gudang berbasis AI dapat menurunkan biaya tenaga kerja hingga 35% dan meningkatkan throughput sebesar 50–70%. Oleh karena itu, penguasaan metodologi RL untuk *motion planning* menjadi kompetensi wajib bagi insinyur industri abad ke-21.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Permasalahan *motion planning* diformulasikan secara formal sebagai *Markov Decision Process* (MDP) dengan komponen tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan state (konfigurasi robot + lingkungan),
- $\mathcal{A}$ = himpunan aksi (perintah gerak diskret/kontinu),
- $P(s'|s,a)$ = probabilitas transisi state,
- $R(s,a,s')$ = reward function,
- $\gamma \in [0,1)$ = discount factor untuk konvergensi horizon tak hingga.

Kala (2024) menekankan bahwa asumsi Markov $P(s_{t+1}|s_t,a_t,s_{t-1},a_{t-1},\ldots) = P(s_{t+1}|s_t,a_t)$ menjadi fondasi bagi hampir seluruh algoritma RL. Untuk AMR di gudang, state dapat direpresentasikan sebagai $s_t = (x_t, y_t, \theta_t, v_t, \mathbf{o}_t)$, di mana $(x_t, y_t, \theta_t)$ adalah pose 2D robot, $v_t$ adalah kecepatan linear, dan $\mathbf{o}_t \in \mathbb{R}^{n}$ adalah vektor observasi dari *LiDAR* atau kamera.

### 2.2 Persamaan Bellman dan Fungsi Nilai

Tujuan agen RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan ekspektasi *return* kumulatif:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Fungsi nilai state (value function) didefinisikan sebagai:

$$V^\pi(s) = \mathbb{E}_\pi \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s \right]$$

dan memenuhi persamaan Bellman:

$$V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^\pi(s') \right] \tag{1}$$

Persamaan optimalnya (Bellman optimality equation) adalah:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right] \tag{2}$$

### 2.3 Algoritma Q-Learning

Untuk permasalahan dengan transisi yang tidak diketahui (model-free), Kala (2024) merekomendasikan Q-Learning sebagai algoritma *off-policy* dengan *update rule*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right] \tag{3}$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Konvergensi terjamin jika $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.4 Reward Function untuk Motion Planning

Perancangan *reward function* merupakan aspek paling kritis. Kala mengusulkan bentuk komposit:

$$R(s,a,s') = R_{\text{goal}} + R_{\text{collision}} + R_{\text{progress}} + R_{\text{smoothness}}$$

Secara matematis:

$$R(s,a,s') = \begin{cases} +R_g, & \text{jika } s' \in \mathcal{S}_{\text{goal}} \\ -R_c, & \text{jika } s' \in \mathcal{S}_{\text{collision}} \\ \beta \cdot \Delta d(s_{\text{prev}}, s_{\text{goal}}), & \text{lainnya} \end{cases} \tag{4}$$

di mana $\Delta d$ adalah reduksi jarak Euclidean ke target, dan $\beta$ adalah koefisien *progress shaping*.

### 2.5 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Untuk lingkungan dengan state kontinu, Kala (2024) menguraikan penggunaan DQN dengan jaringan saraf $\theta$ sebagai *function approximator*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right] \tag{5}$$

di mana $\theta^-$ adalah parameter jaringan target (*target network*) yang di-*update* periodik, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N$.

### 2.6 Formulasi Multi-Agen (berdasarkan Borah 2024)

Untuk sistem SAMAS, Borah (2024) memformulasikan协同 multi-agen dengan game theoretic payoff:

$$J_i(\pi_i, \pi_{-i}) = \mathbb{E} \left[ \sum_{t=0}^{T} \gamma^t r_i(s_t, a_{i,t}, a_{-i,t}) \right]$$

dan menggunakan *mean-field approximation* untuk tractability:

$$\pi_i^* = \arg\max_{\pi_i} \sum_a \pi_i(a|s) Q_i(s, a, \bar{\pi}_{-i})$$

di mana $\bar{\pi}_{-i}$ adalah distribusi rata-rata kebijakan agen lain.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based *motion planning* di lingkungan industri mengikuti SOP tujuh tahap yang diadaptasi dari framework Kala (2024) dan arsitektur FDIR Borah (2024):

### Tahap 1: Pemodelan Lingkungan (Environment Modeling)
1. Akuisisi peta 2D/3D gudang menggunakan SLAM (*Simultaneous Localization and Mapping*).
2. Diskretisasi grid dengan resolusi $\Delta x = 0.1$ m (presisi standar AMR industri).
3. Definisi zona terlarang (*forbidden zones*), *charging stations*, dan *pickup/drop-off points*.
4. Validasi menggunakan standar ISO 3691-4 untuk keselamatan AMR industri.

### Tahap 2: Perancangan Ruang State-Aksi
- **State**: Pose robot + jarak minimum ke obstacle (LiDAR 360° dengan $n=36$ rays).
- **Action**: 5 aksi diskret (maju, mundur, belok kiri, belok kanan, berhenti) atau aksi kontinu $(v, \omega)$.

### Tahap 3: Perancangan Reward Function
Gunakan persamaan (4) dengan parameter tipikal: $R_g = +100$, $R_c = -100$, $\beta = 1.0$.

### Tahap 4: Pelatihan dalam Simulator
Gunakan platform seperti NVIDIA Isaac Sim, Gazebo, atau Webots dengan akselerasi GPU. Total episode minimum $10^5$ dengan *early stopping* berbasis konvergensi $|Q_{t+1} - Q_t| < \epsilon$.

### Tahap 5: Transfer Sim-to-Real
- *Domain randomization* terhadap parameter fisik (massa, gesekan, latensi sensor).
- *Progressive fine-tuning* pada robot fisik dengan *safety override* (emergency stop berbasis PLC).

### Tahap 6: Integrasi FDIR (berdasarkan Borah 2024)
- Pasang Extended Kalman Filter untuk estimasi state.
- Modul deteksi anomali berbasis threshold pada residual inovasi filter.
- *Fallback policy*: jika agen RL terdeteksi故障, aktifkan kontroler PID klasik atau *safe-stop* trajectory.

### Tahap 7: Validasi dan Deployment
- Pengujian berdasarkan ISO 13482 (personal care robots) dan ANSI/RIA R15.08.
- *Shadow mode* selama 2–4 minggu sebelum *full autonomous deployment*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pusat distribusi e-commerce di Tangerang akan menerapkan 50 unit AMR untuk operasi *goods-to-person*. Dimensi gudang: $100 \times 60$ m dengan grid $0.5 \times 0.5$ m (total $200 \times 120 = 24{,}000$ sel). Robot tipe Kiva/Hidrobot dengan kecepatan maksimum $v_{\max} = 1.5$ m/s.

**Tujuan:** Menemukan kebijakan optimal $\pi^*$ untuk AMR berpindah dari *pick station* $(x_0, y_0) = (0, 0)$ ke *drop station* $(x_g, y_g) = (80, 50)$ dengan meminimalkan waktu tempuh dan menghindari 5 obstacle statis.

### 4.2 Parameter MDP

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| $\gamma$ | 0.99 | Discount factor |
| $\alpha$ awal | 0.5 | Learning rate (decaying) |
| $\epsilon$ eksplorasi | 1.0 → 0.01 | Decay rate 0.995 |
| $R_g$ | +100 | Reward goal |
| $R_c$ | −100 | Penalty collision |
| $\beta$ | 1.0 | Progress coefficient |
| $\|\mathcal{A}\|$ | 5 | Aksi diskret |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
