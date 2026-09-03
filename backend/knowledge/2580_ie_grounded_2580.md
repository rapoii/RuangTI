# 2580 — Perencanaan Gerak Robot Otonom Berbasis Pembelajaran Penguatan: Framework Rekayasa untuk Sistem Manufaktur dan Logistik Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning using Reinforcement Learning untuk Robot Bergerak Otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam *Autonomous Mobile Robots: Modelling, Path Planning, Control and Tracking*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (Disertasi Doktoral). Peer-Reviewed Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah memunculkan permintaan masif terhadap sistem robot bergerak otonom (*Autonomous Mobile Robots* – AMR) yang mampu beroperasi di lingkungan manufaktur, pergudangan, dan rantai pasok dengan tingkat otonomi tinggi. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier, menegaskan bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan paling krusial dalam pengoperasian AMR karena harus menyeimbangkan tiga dimensi keputusan secara simultan: keselamatan navigasi, optimalitas lintasan, dan konsumsi energi (Kala, 2024). Pasar AMR global, yang menurut berbagai studi industri bernilai lebih dari USD 4 miliar pada 2023 dan diproyeksikan tumbuh dengan CAGR >15%, menunjukkan urgensi ekonomi dari adopsi teknologi ini pada lini produksi dan *fulfillment center* berskala besar.

Dalam konteks *smart manufacturing*, AMR tidak lagi sekadar pengangkut material melainkan agen manufaktur terdistribusi yang berkolaborasi dalam *cyber-physical production systems* (CPPS). Kala (2024) menekankan bahwa pendekatan konvensional motion planning berbasis algoritma klasik seperti A*, Rapidly-exploring Random Tree (RRT), atau Potential Field memiliki keterbatasan fundamental ketika berhadapan dengan lingkungan dinamis di mana manusia, AGV lain, dan halangan bergerak berpindah secara stokastik. Pendekatan *Reinforcement Learning* (RL) menjawab keterbatasan ini dengan memungkinkan agen belajar kebijakan navigasi optimal melalui interaksi langsung dengan lingkungan, tanpa memerlukan peta statis yang lengkap (Kala, 2024).

Pada tataran sistem multi-agen, Kaustav Borah (2024) dalam disertasinya menyoroti bahwa robot bergerak dalam sistem rekayasa kompleks — seperti jaringan sensor, aktuator, dan kontroler terdistribusi — menghadapi risiko kegagalan komponen (*fault*) yang dapat menurunkan kinerja kolektif. Borah memperkenalkan arsitektur *Smart Autonomous Multi-Agent Systems* (SAMAS) yang mengintegrasikan *Nonlinear Filtering* (misalnya Extended Kalman Filter/Particle Filter) dengan RL untuk melakukan *Fault Detection, Isolation, and Reconstruction* (FDIR) secara otonom (Borah, 2024). Sinergi antara kedua paper ini menunjukkan bahwa RL tidak hanya relevan untuk perencanaan gerak individual, melainkan juga untuk orkestrasi armada robot dalam skala industri dengan jaminan keandalan tinggi.

Urgensi operasional dari adopsi RL untuk AMR sangat nyata: di pusat distribusi *e-commerce*, setiap downtime AGV dapat menyebabkan kerugian hingga USD 5.000–10.000 per jam karena kemacetan alur *order picking*. RL memungkinkan kebijakan navigasi yang *adaptive* terhadap pola permintaan musiman, perubahan layout gudang, dan degradasi sensor — hal yang mustahil dilakukan secara real-time oleh pendekatan berbasis aturan deterministik. Selain itu, RL mengurangi ketergantungan pada pemetaan presisi tinggi (*SLAM*) yang mahal secara komputasional dengan memungkinkan agen belajar dari representasi keadaan (*state representation*) yang lebih abstrak.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

RL untuk motion planning diformulasikan secara formal sebagai MDP yang didefinisikan oleh tupel:

$$\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$$

di mana $\mathcal{S}$ adalah himpunan keadaan (*state space*) yang merepresentasikan konfigurasi robot dan persepsi lingkungannya (misalnya posisi, kecepatan, jarak ke halangan), $\mathcal{A}$ adalah himpunan aksi (*action space*) seperti diskretisasi perintah kecepatan sudut dan linier, $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a,s')$ adalah *reward function* immédiat, dan $\gamma \in [0,1]$ adalah *discount factor* yang mengontrol horizon pengambilan keputusan (Kala, 2024).

Tujuan RL adalah menemukan kebijakan $\pi^*: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t, a_t, s_{t+1})\right]$$

### 2.2 Persamaan Bellman dan Fungsi Nilai

Fungsi nilai keadaan optimal $V^*(s)$ memenuhi Persamaan Bellman Optimalitas:

$$V^{*}(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^{*}(s')\right]$$

Fungsi aksi-nilai (*Q-function*) $Q^*(s,a)$ merepresentasikan nilai期待 jangka panjang dari pasangan keadaan-aksi:

$$Q^{*}(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^{*}(s',a')\right]$$

Kala (2024) menekankan bahwa pada robot otonom dengan ruang aksi kontinu, dekomposisi diskret atau penggunaan *function approximation* (deep Q-network, DQN) menjadi esensial untuk menangani Curse of Dimensionality.

### 2.3 Algoritma Q-Learning dan Deep Q-Network (DQN)

Aturan pembaruan Q-learning tabular adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)\right]$$

di mana $\alpha$ adalah *learning rate*. Untuk menyiasati instabilitas DQN, Kala (2024) menjelaskan dua inovasi kunci: *experience replay* dengan buffer $\mathcal{D}$ yang menyimpan transisi $(s,a,r,s')$, dan *target network* dengan parameter $\theta^{-}$ yang diperbarui secara periodik. *Loss function* untuk DQN menjadi:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s', a'; \theta^{-}) - Q(s,a; \theta)\right)^{2}\right]$$

### 2.4 Metode Policy Gradient dan Actor-Critic

Untuk aksi kontinu (kecepatan sudut dan translasi yang riil), pendekatan policy gradient lebih sesuai. Parameter kebijakan $\theta$ diperbarui menggunakan teorema *policy gradient* (Sutton & Barto; dirujuk oleh Kala, 2024):

$$\nabla_{\theta} J(\pi_{\theta}) = \mathbb{E}_{s \sim \rho^{\pi}, a \sim \pi_{\theta}}\left[\nabla_{\theta} \log \pi_{\theta}(a|s) \cdot A^{\pi}(s,a)\right]$$

di mana $A^{\pi}(s,a) = Q^{\pi}(s,a) - V^{\pi}(s)$ adalah *advantage function*. Algoritma PPO (*Proximal Policy Optimization*) membatasi besarnya update dengan rasio kliping:

$$L^{CLIP}(\theta) = \mathbb{E}_t\left[\min\left(r_t(\theta) A_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) A_t\right)\right]$$

dengan $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$.

### 2.5 Desain Reward Function untuk Motion Planning

Kala (2024) memaparkan bahwa desain *reward shaping* menentukan keberhasilan pembelajaran secara drastis. Bentuk tipikal untuk navigasi robot:

$$r_t = -\lambda_1 d_{obs}(s_t) - \lambda_2 |v_{des} - v_t| + \lambda_3 \cdot \mathbb{1}_{\text{goal}} - \lambda_4 \cdot \mathbb{1}_{\text{collision}}$$

di mana $d_{obs}$ adalah jarak ke halangan terdekat, $v_{des}$ kecepatan yang diinginkan, dan $\lambda_i$ adalah bobot tuning. *Sparse reward* berbasis hanya pada keberhasilan goal memiliki tantangan *exploration* yang diselesaikan melalui teknik seperti *curiosity-driven exploration* dengan modul ICM (*Intrinsic Curiosity Module*).

### 2.6 Filter Nonlinier untuk Estimasi Keadaan pada SAMAS

Borah (2024) melengkapi kerangka RL dengan *Nonlinear Filtering* untuk estimasi keadaan sistem dinamis yang tidak linier. Persamaan *Extended Kalman Filter* (EKF) yang relevan untuk memperbarui estimasi keadaan $\hat{x}_k$ pada agen robot:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

dengan gain Kalman $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$, di mana $H_k = \frac{\partial h}{\partial x}|_{\hat{x}_{k|k-1}}$. Integrasi filter ini dengan RL memungkinkan deteksi anomali sensor secara real-time yang kemudian menjadi input fitur bagi kebijakan navigasi (Borah, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem RL untuk AMR

Implementasi industri motion planning RL mengikuti arsitektur berlapis seperti yang diuraikan Kala (2024):

1. **Persepsi (Perception Layer):** Akuisisi data dari LiDAR 2D/3D, kamera RGB-D, IMU, dan odometri roda. Pra-pemrosesan menghasilkan *occupancy grid map* lokal dan *state vector*.
2. **Representasi Keadaan (State Abstraction):** Kompresi informasi spasial menggunakan CNN untuk data visual, atau PointNet untuk data LiDAR. *State vector* mencakup: posisi relatif ke tujuan, jarak ke halangan terdekat dalam N arah, kecepatan saat ini, dan jejak lintasan terakhir.
3. **Decision-Making (RL Policy):** Model deep network (DQN/PPO) yang memetakan state ke aksi diskret atau kontinu.
4. **Control Layer:** Konversi aksi RL menjadi perintah kecepatan roda via kontroler PID atau Model Predictive Control (MPC).
5. **Fault Diagnosis Layer (Borah, 2024):** Modul nonlinear filtering yang berjalan paralel untuk mendeteksi degradasi sensor/aktuator dan memberi sinyal ke *safety supervisor*.

### 3.2 SOP Implementasi RL di Lintas Fungsional Industri

**Tahap 1 — Pemodelan Lingkungan (1–2 minggu):**
- Diskretisasi aksi dengan resolusi yang sesuai: misalnya translasi $\Delta x \in \{0, 0.2, 0.5\}$ m dan rotasi $\Delta \theta \in \{-30°, -15°, 0°, 15°, 30°\}$.
- Desain ruang keadaan minimal: jarak ke halangan dalam 8 sektor (LiDAR 360°/8 = 45° per sektor), jarak ke goal, dan heading error.
- Validasi simrossi dengan simulator Gazebo atau NVIDIA Isaac Sim.

**Tahap 2 — Pelatihan Awal (Training):**
- Training selama 1–5 juta episode di simulator dengan *domain randomization* (variasi pencahayaan, tekstur lantai, posisi halangan).
- Hyperparameter tuning: learning rate $\alpha = 3 \times 10^{-4}$, discount factor $\gamma = 0.99$, batch size 256.
- Logging ke MLflow atau Weights & Biases untuk reproducibility (mengacu pada praktik MLOps ISO/IEC 23053).

**Tahap 3 — Sim-to-Real Transfer:**
- *Progressive Domain Adaptation*: pelatihan bertahap dengan real-world data yang dikumpulkan dalam mode *teleoperation supervised*.
- *Safety wrapper*: integrasi *hard constraints* (misalnya zona eksklusi manusia) sebagai post-processing pada output aksi RL, sesuai standar ISO 10218 untuk robot industri kolaboratif.

**Tahap 4 — Deployment & Continuous Learning:**
- Online fine-tuning dengan pengalaman baru menggunakan *prioritized experience replay* dengan prioritas $p_i = |\delta_i$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
