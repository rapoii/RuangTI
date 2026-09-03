# 1700 — Perencanaan Gerak Cerdas Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion Planning menggunakan Reinforcement Learning untuk Sistem Otonom Multi-Agen
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning* dalam *Autonomous Mobile Robots*, Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah memaksa lantai produksi, gudang distribusi, dan rantai pasok global untuk bermigrasi dari sistem kaku berbasis konveyor menuju arsitektur otonom berbasis *Automated Mobile Robots* (AMR) dan *Autonomous Guided Vehicles* (AGV). Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menegaskan bahwa motion planning merupakan jantung kecerdasan AMR: tanpa kemampuan menavigasi ruang状态 yang dinamis, robot tidak dapat mengeksekusi misi *pick-and-place*, *last-mile delivery*, atau *bin-to-picker* dengan keandalan industri. Kala menekankan bahwa Reinforcement Learning (RL) memberikan lompatan paradigmatic dibanding perencana jalur klasik seperti A*, Rapidly-exploring Random Tree (RRT), atau Potential Field, karena RL tidak memerlukan peta statis lengkap dan mampu belajar dari interaksi kontinu dengan lingkungan yang tidak pasti.

Urgensi ekonomi dari adopsi RL-based motion planning cukup mencolok. Menurut laporan internal McKinsey yang dirujuk secara implisit dalam literatur robotic, downtime konveyor dan ketidakmampuan AMR klasik beradaptasi terhadap perubahan tata letak (layout) pabrik menyumbang kerugian hingga 12–18% dari *overall equipment effectiveness* (OEE) pada fasilitas manufaktur pintar. Kala (2024) menunjukkan bahwa RL—terutama algoritma *Deep Q-Network* (DQN), *Proximal Policy Optimization* (PPO), dan *Soft Actor-Critic* (SAC)—memampukan robot merencanakan ulang (re-plan) dalam orde milidetik dengan kebijakan yang telah dilatih secara *offline* lalu di-*fine-tune* secara *online*.

Perspektif sistemik juga diperkuat oleh Kaustav Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS). Borah menyoroti bahwa perencanaan gerak otonom tidak bisa dilepaskan dari *Fault Detection, Isolation, and Reconstruction* (FDIR). Sebuah armada AGV yang motion planning-nya sempurna akan gagal total jika satu aktuator mengalami kemacetan atau jika link komunikasi nirkabel antar-agen terputus. Borah mengusulkan integrasi *nonlinear filtering* (Extended Kalman Filter / Unscented Kalman Filter) dengan RL sehingga agen mampu secara simultan (i) merencanakan jalur optimal, (ii) mendeteksi anomali sensor/aktuator, dan (iii) merekonstruksi perilaku komponen yang gagal. Dengan integrasi ini, reliabilitas armada naik signifikan, biaya *unplanned maintenance* turun hingga 30%, dan Mean Time Between Failures (MTBF) sistem kolaboratif dapat diperpanjang.

Konteks industri yang relevan mencakup: (1) Pusat distribusi *e-commerce* besar (Amazon, JD.com) yang mengoperasikan ribuan AMR di gudang 100.000+ m²; (2) Pabrik semikonduktor *wafer fab* yang memerlukan presisi sub-milimeter dalam transportasi *lot* antar cleanroom; (3) Otomasi pelabuhan (*automated container terminal*) seperti di Rotterdam dan Singapura; serta (4) Sistem intralogistik rumah sakit untuk transport spesimen dan obat kritis. Dalam semua skenario tersebut, motion planning bukan sekadar masalah geometris, melainkan masalah keputusan stokastik di bawah ketidakpastian lingkungan, kegagalan komponen, dan dinamika multi-agen—persis ruang masalah yang diformulasikan oleh Kala (2024) dan Borah (2024) melalui kerangka Reinforcement Learning.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Proses Keputusan Markov (MDP)

Dasar teoretis motion planning dengan RL adalah Process Keputusan Markov (*Markov Decision Process*) yang didefinisikan oleh tuple:

$$\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$$

di mana $\mathcal{S}$ adalah himpunan state (konfigurasi ruang robot), $\mathcal{A}$ adalah himpunan action (misalnya translasi Δx, Δy, dan rotasi Δθ), $P(s'|s,a)$ adalah probabilitas transisi, $R(s,a,s')$ adalah reward langsung, dan $\gamma \in [0,1)$ adalah faktor diskonto.

Untuk AMR 2D, state umumnya adalah tuple posisi-orientasi:

$$s_t = \langle x_t, y_t, \theta_t, v_t, \omega_t, d_{\text{obs}} \rangle$$

di mana $d_{\text{obs}}$ adalah jarak ke obstacle terdekat hasil pembacaan *light detection and ranging* (LiDAR).

### 2.2 Fungsi Nilai dan Persamaan Bellman

Kala (2024) merumuskan fungsi nilai optimal sebagai:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

atau dalam bentuk Q-value (action-value):

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

### 2.3 Aturan Pembaruan Q-Learning

Untuk agen dengan tabel diskret, update Q-Learning mengikuti:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha\left[r_{t+1} + \gamma \max_{a} Q(s_{t+1},a) - Q(s_t,a_t)\right]$$

di mana $\alpha$ adalah *learning rate*. Untuk lingkungan kontinu berdimensi tinggi, Kala mengusulkan penggunaan DQN dengan parameter $\theta$ yang meminimalkan loss:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta)\right)^2\right]$$

di mana $\theta^{-}$ adalah parameter dari *target network* yang di-*update* periodik, dan $\mathcal{D}$ adalah *replay buffer*.

### 2.4 Policy Gradient untuk Motion Planning

Untuk action kontinu (kecepatan linear dan angular), algoritma *Deep Deterministic Policy Gradient* (DDPG) atau PPO lebih sesuai. Fungsi objektif PPO adalah:

$$\mathcal{L}^{\text{CLIP}}(\theta) = \mathbb{E}_t\left[\min\left(\rho_t(\theta) \hat{A}_t, \text{clip}(\rho_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t\right)\right]$$

dengan rasio penting $\rho_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{\text{old}}}(a_t|s_t)}$ dan advantage $\hat{A}_t = R_t - V(s_t)$.

### 2.5 Nonlinear Filtering untuk FDIR (Borah, 2024)

Borah (2024) memodelkan dinamika multi-agen dengan persamaan state nonlinier:

$$\mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}_k$$

$$\mathbf{y}_k = h(\mathbf{x}_k) + \mathbf{v}_k$$

di mana $\mathbf{w}_k \sim \mathcal{N}(0, Q_k)$ dan $\mathbf{v}_k \sim \mathcal{N}(0, R_k)$ adalah noise proses dan pengukuran. Unscented Kalman Filter (UKF) mengestimasi state $\hat{\mathbf{x}}$ melalui *sigma points*, lalu *residual*:

$$\boldsymbol{\nu}_k = \mathbf{y}_k - h(\hat{\mathbf{x}}_{k|k-1})$$

digunakan untuk uji Chi-square pada deteksi fault:

$$\chi^2_k = \boldsymbol{\nu}_k^T S_k^{-1} \boldsymbol{\nu}_k \quad \text{fault jika } \chi^2_k > \chi^2_{\alpha, m}$$

Integrasi RL-FDIR Borah menghasilkan *reward* tambahan yang sensitif terhadap anomali residual sehingga agen belajar menghindari region yang rentan terhadap fault.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan.** Bangun *occupancy grid map* resolusi 5 cm dari hasil SLAM (*Simultaneous Localization and Mapping*) menggunakan *LiDAR* 2D atau *depth camera*. Definisikan state $s_t$ dari sensor fusion (IMU + odometry + LiDAR), action diskret atau kontinu, dan reward function:

$$r_t = -d(s_t, g_{\text{target}}) - \lambda \cdot \mathbb{1}_{\text{collision}} - \mu \cdot t_{\text{step}}$$

di mana $d(s_t, g_{\text{target}})$ adalah jarak Euclidean ke goal, dan $\lambda, \mu$ adalah bobot惩罚 collision dan waktu.

**Tahap 2 — Pelatihan Offline.** Gunakan simulator (Gazebo, Isaac Sim) untuk melatih DQN/PPO selama 1–5 juta episode. Simpan *checkpoint* setiap 100.000 episode. Validasi dengan metrik *success rate*, *average path length*, dan *cumulative reward*.

**Tahap 3 — Fine-tuning Online.** Deploy model ke fleet AGV dengan *federated learning*: bobot lokal diunggah periodik ke *edge server*, diagregasi (FedAvg), dan didistribusikan kembali.

**Tahap 4 — Integrasi FDIR (Borah, 2024).** Pasang modul UKF pada setiap agen. Residual dikirim ke *policy network* sebagai fitur tambahan state: $s_t^{\text{ext}} = [s_t; \boldsymbol{\nu}_k; \chi^2_k]$. Saat $\chi^2_k$ melebihi threshold, agen secara otomatis beralih ke *safe policy* (berhenti dan kembali ke *charging dock*).

**Tahap 5 — Monitoring & Iterasi.** Dashboard Prometheus/Grafana menampilkan *KPI*: (a) *Pick success rate* ≥ 99,5%; (b) Collision rate ≤ 0,01% per 10.000 misi; (c) Fault detection latency ≤ 200 ms; (d) MTBF ≥ 800 jam. *Standard-compliant*: ISO 3691-4 (driverless industrial trucks), ISO 10218 (robot safety), IEC 61508 (functional safety).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *fulfillment center* e-commerce di Jabodetabek memiliki 50 AGV tipe AMR kapasitas 250 kg. Peta gudang 80 m × 60 m dengan 200 rak *picking station*. Kita akan menghitung kebijakan Q-Learning untuk satu AGV yang harus berpindah dari *charging station* (0,0) ke *packing station* (60,40) sambil menghindari tiga obstacle tetap di (20,15), (35,25), dan (50,10).

**Parameter industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Diskonto $\gamma$ | 0,95 | — |
| Learning rate $\alpha$ | 0,10 | — |
| Reward goal | +100 | poin |
| Reward collision | −100 | poin |
| Reward per step | −1 | poin/step |
| Grid resolution | 1 | m |
| Episode max | 200 | step |

**Episode Pelatihan Step-by-Step (3 iterasi awal):**

Iterasi 1: AGV di state $s_0=(0,0)$, pilih $a_0 = \text{kanan}$. Transisi ke $s_1=(1,0)$, $r_1=-1$ (bukan goal, bukan collision). Update Q:

$$Q(s_0, a_0