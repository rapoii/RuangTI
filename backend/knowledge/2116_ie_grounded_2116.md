# 2116 — Perencanaan Gerak Berbasis Pembelajaran Penguatan untuk Sistem Otonom Cerdas Multi-Agen dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning Menggunakan Reinforcement Learning untuk Autonomous Multi-Agent Systems
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (Disertasi). Figshare Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Revolusi Industri 4.0 dan Society 5.0 telah memaksa ekosistem manufaktur, logistik, dan rantai pasok untuk mengadopsi kendaraan berpemandu otomatis (Automated Guided Vehicle/AGV), *autonomous mobile robot* (AMR), dan armada drone pengiriman sebagai tulang punggung operasional. Rahul Kala (2024) dalam bab bukunya yang diterbitkan Elsevier (*Autonomous Mobile Robots*, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menekankan bahwa perencanaan gerak (motion planning) merupakan lapisan keputusan kritis yang menentukan apakah robot otonom mampu bernavigasi pada lingkungan yang kompleks, dinamis, dan seringkali tidak sepenuhnya terobservasi. Tanpa algoritma perencanaan gerak yang adaptif, biaya downtime akibat tabrakan, konvoi yang tidak efisien, dan kerusakan aset di lantai pabrik dapat meningkatkan *total cost of ownership* (TCO) hingga 30–45% sepanjang siklus hidup armada (Kala, 2024).

Di sisi lain, Kaustav Borah (2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) dalam disertasinya menyoroti bahwa sistem otonom modern tidak cukup hanya mampu merencanakan gerak; sistem juga harus memiliki kemampuan *Fault Detection, Isolation, and Reconstruction* (FDIR) yang real-time. Sistem yang dimaksud Borah adalah *Smart Autonomous Multi-Agent Systems* (SAMAS), yang dirancang untuk beroperasi terus-menerus meskipun terjadi kegagalan pada sensor, aktuator, maupun jaringan komunikasi. Kombinasi antara reinforcement learning (RL) untuk kebijakan gerak dan nonlinear filtering (misalnya Extended Kalman Filter dan Particle Filter) untuk rekonstruksi status agen menjadi pendekatan unggulan dalam menjamin *fault-tolerant autonomy*.

Urgensi industrial engineering dari topik ini tampak dari tiga tren makro: (1) kelangkaan tenaga kerja operator forklift dan picker di gudang modern yang mendorong otomasi 70–80% tugas transport internal; (2) standar keselamatan ISO 3691-4 yang mensyaratkan protokol mitigasi risiko untuk AGV; dan (3) tuntutan *resilience* rantai pasok pasca-pandemi, di mana kemampuan robot untuk *re-plan* secara otonom ketika menghadapi kegagalan sekecil apa pun menjadi pembeda kompetitif. Kajian Kala (2024) dan Borah (2024) secara komplementer menjawab tantangan ini—pertama dengan formulasi RL untuk perencanaan gerak yang optimal, kedua dengan arsitektur multi-agen yang toleran terhadap kegagalan sehingga keputusan perencanaan tetap valid di tengah anomali sistem.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Proses Keputusan Markov (MDP)

Baik Kala (2024) maupun Borah (2024) memformalkan masalah keputusan otonom sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan state (kondisi robot, posisi, kecepatan, status sensor)
- $\mathcal{A}$ = himpunan aksi (misalnya kecepatan linear $v$ dan angular $\omega$)
- $P(s' \mid s, a)$ = probabilitas transisi state
- $R(s, a)$ = reward function
- $\gamma \in [0,1)$ = faktor diskonto

Fungsi nilai keadaan (state-value function) didefinisikan melalui Persamaan Bellman optimal:

$$V^{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s) \left[ R(s, a) + \gamma \sum_{s' \in \mathcal{S}} P(s' \mid s, a) V^{\pi}(s') \right]$$

### 2.2. Algoritma Q-Learning untuk Motion Planning

Kala (2024) menurunkan algoritma Q-Learning sebagai pendekatan *model-free* yang sesuai untuk motion planning di lingkungan dengan model dinamika yang sulit diidentifikasi secara eksplisit. Aturan pembaruan adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha$ adalah laju pembelajaran (learning rate). Bukti konvergensi mensyaratkan bahwa $\sum_{t=0}^{\infty} \alpha_t = \infty$ dan $\sum_{t=0}^{\infty} \alpha_t^2 < \infty$.

### 2.3. Reward Function untuk Navigasi

Untuk aplikasi motion planning, Kala (2024) mengusulkan reward function gabungan yang menyeimbangkan tujuan pencapaian target dan penalti碰撞:

$$r_t = r_{\text{goal}} \cdot \mathbb{1}_{\text{reached}} - \beta \cdot d_{\text{obs}}(s_t) - \lambda \cdot \|v_t\| - \mu \cdot \mathbb{1}_{\text{collision}}$$

di mana $d_{\text{obs}}(s_t)$ adalah jarak ke obstacle terdekat, $\|v_t\|$ adalah kecepatan, dan $\beta, \lambda, \mu$ adalah hyperparameter.

### 2.4. Nonlinear Filtering pada SAMAS

Borah (2024) memperluas formulasi di atas dengan menambahkan lapisan estimasi state melalui *Extended Kalman Filter* (EKF). Langkah prediksi dan koreksi EKF:

$$\hat{x}_{t \mid t-1} = f(\hat{x}_{t-1 \mid t-1}, u_{t-1})$$
$$P_{t \mid t-1} = F_t P_{t-1 \mid t-1} F_t^\top + Q_t$$
$$K_t = P_{t \mid t-1} H_t^\top (H_t P_{t \mid t-1} H_t^\top + R_t)^{-1}$$
$$\hat{x}_{t \mid t} = \hat{x}_{t \mid t-1} + K_t (z_t - h(\hat{x}_{t \mid t-1}))$$

Untuk sistem dengan nonlinieritas tinggi (misalnya multi-AGV dengan dinamika slip), Borah (2024) merekomendasikan *Particle Filter* dengan bobot:

$$w_t^{(i)} \propto w_{t-1}^{(i)} \cdot p(z_t \mid x_t^{(i)})$$

### 2.5. Konsensus Multi-Agen

Pada level koordinator armada, fungsi nilai gabungan yang memenuhi protokol konsensus diformulasikan sebagai:

$$\bar{Q}(s, a) = \frac{1}{N} \sum_{i=1}^{N} Q_i(s, a)$$

dengan syarat stabilitas $\sum_{i=1}^{N} a_i \| \mathbf{L} \| < 1$ di mana $\mathbf{L}$ adalah matriks Laplacian dari graf komunikasi antar-agen (Borah, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari kerangka RL-multi-agen Kala–Borah mengikuti SOP 7-tahap berikut:

1. **Pemetaan Lingkungan (SLAM)** — Menggunakan LiDAR 2D/3D dan odometri untuk membangun peta occupancy grid $M \in \{0,1\}^{W \times H}$.
2. **Discretisasi State-Action** — Konversi ruang kontinu menjadi grid state $s_t = (x_t, y_t, \theta_t, d_{\text{obs}}, v_t)$ dan himpunan aksi diskret (misalnya 8 arah heading).
3. **Inisialisasi Q-Table/Network** — Untuk RL tabular, $Q(s,a) = 0$; untuk Deep RL, bobot neural network diinisialisasi dengan *Xavier initialization*.
4. **Training Episode Loop** — Jalankan simulasi ribuan episode di *digital twin* (Gazebo, Unity, NVIDIA Isaac) sebelum deployment.
5. **Validasi dengan Nonlinear Filter** — Pasang EKF/UKF sebagai *sanity check* pada observasi sensor sebelum reward dihitung.
6. **Deployment & Monitoring** — Integrasikan dengan *fleet management system* (FMS) dan catat metrik KPI: mean time to goal, collision rate, energi per misi.
7. **Continuous Retraining** — Mekanisme *online fine-tuning* menggunakan transfer learning ketika lingkungan berubah (misalnya layout gudang baru).

Diagram alur logika keputusan MDP-nya adalah: **Observe → Estimate State (EKF) → Choose Action (ε-greedy) → Execute → Observe Reward → Update Q**. Pada level multi-agen, Borah (2024) menambahkan protokol *consensus-then-planning* di mana agen berbagi estimasi state sebelum memutuskan aksi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: AGV di Gudang E-Commerce 60.000 m²

Sebuah operator gudang e-commerce besar memiliki 25 AGV yang beroperasi 20 jam/hari. Kita akan menghitung ulang parameter RL dan memvalidasi kinerja sistem.

**Parameter Input:**
- State space: $s = (x, y, \theta)$ diskretisasi grid $0,5\text{ m}$
- Aksi: $a \in \{\text{N, S, E, W, NE, NW, SE, SW}\}$ (8 diskret)
- Learning rate $\alpha = 0,1$
- Discount factor $\gamma = 0,95$
- $\epsilon$-decay: $\epsilon_t = 0{,}99^t$ (mulai 1,0)
- Hyperparameter reward: $r_{\text{goal}} = +100$, $\beta = 2$, $\lambda = 0{,}05$, $\mu = -50$

**Langkah 1: Update Q-Learning Episode Pertama**

Misalkan AGV pada $s_t = (10, 12)$ memilih aksi $a_t = \text{East}$, mencapai $s_{t+1} = (11, 12)$ dengan reward $r_{t+1} = -1$ (jarak ke obstacle = 0,3 m) dan $\max_{a'} Q(s_{t+1}, a') = 0$ (belum pernah dikunjungi).

$$Q(s_t, a_t) \leftarrow 0 + 0{,}1 \left[ -1 + 0{,}95 \cdot 0 - 0 \right] = -0{,}1$$

**Langkah 2: Update Episode ke-1000**

Dengan asumsi konvergensi, pada $s_t = (10,12)$ setelah 1000 episode, estimasi nilai $Q(s_t, \text{East}) \approx 47{,}3$ (diperoleh melalui simulasi numerik iteratif). Maka Bellman update menjadi:

$$Q(s_t, a_t) \leftarrow 47{,}3 + 0{,}1 \left[ -1 + 0{,}95 \cdot 52{,}8 - 47{,}3 \right] = 47{,}78$$

**Langkah 3: Perhitungan Kinerja Operasional**

Misalkan setelah training 50.000 episode, AGV memiliki:
- Kecepatan rata-rata $v_{\text{avg}} = 1{,}5 \text{ m/s}$
- Collision rate $= 0{,}12\%$ per misi (standar industri target $< 0{,}5\%$)
- Mean time to goal $= 45 \text{ detik}$ untuk jarak 30 m

Produktivitas armada:
$$P_{\text{armada}} = \frac{N_{\text{AGV}} \times T_{\text{operasi}} \times 3600}{\text{MTTG}} = \frac{25 \times 20 \times 3600}{45} \approx 40{,}000 \text{ pick/misi/hari}$$

**Langkah 4: Validasi Nonlinear Filter (EKF)**

Untuk sensor LiDAR dengan noise covariance $R = \text{diag}(0{,}05^2, 0{,}05^2)$ dan model proses covariance $Q = \text{diag}(0{,}01^2, 0{,}01^2, 0{,}005^2)$ (m, m, rad), gain Kalman saat pengukuran:

$$K_t = P_{t \mid t-1} H^\top (H P_{t \mid t-1} H^\top + R)^{-1}$$

Jika $P_{t \mid t-1} = \text{diag}(0{,}5, 0{,}5, 0{,}05)$ dan $H = I_3$:

$$K_t = \begin{bmatrix} 0{,}5 & 0 & 0 \\ 0 & 0{,}5 & 0 \\ 0 & 0 & 0{,}05 \end{bmatrix} \left( \begin{bmatrix}