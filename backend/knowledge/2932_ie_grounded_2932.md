# 2932 — Perencanaan Gerak Cerdas Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom di Lingkungan Manufaktur dan Logistik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning dalam konteks Sistem Otonom Multi-Agen (SAMAS) dengan Fault Detection, Isolation, and Reconstruction (FDIR)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mengubah secara fundamental paradigma operasional lantai produksi dan gudang distribusi global. Kala (2024) dalam chapter *Motion planning using reinforcement learning* menegaskan bahwa kemampuan robot bergerak otonom (*Autonomous Mobile Robots*, AMR) untuk menavigasi lingkungan yang dinamis dan tidak pasti kini menjadi *backbone* produktivitas di sektor manufaktur, pergudangan, dan *last-mile delivery* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Pasar AMR global diproyeksikan menembus USD 14+ miliar pada 2030 dengan CAGR >15%, didorong oleh tiga faktor struktural: (1) kelangkaan tenaga kerja operasional di negara maju, (2) permintaan *same-day-fulfillment* e-commerce, dan (3) kebutuhan *just-in-sequence* pada lini perakitan otomotif. Secara teknis, permasalahan utama bukan sekadar memindahkan robot dari titik A ke titik B, melainkan bagaimana menghasilkan *trajectory* yang optimal terhadap multi-kriteria: waktu tempuh, konsumsi baterai, *clearance* terhadap manusia/pekerja, dan kemampuan *replanning* secara real-time ketika terjadi anomali.

Borah (2024) menyoroti masalah yang lebih dalam, yaitu bahwa dalam sistem rekayasa kompleks, kegagalan dapat terjadi pada *sensor*, *aktuator*, komponen, jaringan komunikasi, hingga *controller* itu sendiri. Fault Detection, Isolation, and Reconstruction (FDIR) menjadi krusial untuk sistem otonom (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Disertasi Borah memperkenalkan kerangka *Smart Autonomous Multi-agent Systems* (SAMAS) yang mengintegrasikan *nonlinear filtering* dengan *reinforcement learning* (RL) untuk mendeteksi, mengisolasi, dan merekonstruksi kegagalan secara otonom ketika sistem sedang beroperasi. Urgensi ekonominya sangat nyata: downtime satu menit di lini *semiconductor* bernilai USD 50.000+, sementara di *fulfillment center* Amazon, satu menit downtime AMR di *peak season* dapat menunda ribuan pesanan.

Integrasi kedua literatur tersebut menghasilkan *research frontier* baru: perencanaan gerak tidak lagi dapat dipisahkan dari kemampuan mitigasi kegagalan. Robot harus secara simultan (i) merencanakan jalur optimal, (ii) mendeteksi anomali sensor/aktuator, dan (iii) merekonstruksi trayektori yang aman dalam orde milidetik. Pendekatan klasik seperti *A\**, *RRT\**, atau *potential field* terbukti handal pada lingkungan statis namun gagal ketika menghadapi (a) dinamika pejalan kaki yang stokastik, (b) kegagalan sensor LiDAR/dead-reckoning, dan (c) kebutuhan koordinasi multi-robot. Reinforcement learning menjawab keterbatasan ini melalui kemampuan generalisasi kebijakan dari pengalaman (*experience replay*) dan eksplorasi stokastik (*ε-greedy* atau *Thompson sampling*).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi *Markov Decision Process* (MDP)

Permasalahan motion planning dengan RL diformulasikan sebagai tuple MDP $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ sesuai pendekatan Kala (2024):

- **State space** $\mathcal{S}$: mencakup konfigurasi robot $s_t = [x_t, y_t, \theta_t, v_t, \omega_t]^{\top}$, pembacaan sensor LiDAR 360° yang terdiskretisasi menjadi *ray-cast* 180 elemen, serta posisi agen-agen lain dalam radius 5 m.
- **Action space** $\mathcal{A}$: perintah kecepatan linear dan angular $(v, \omega)$ untuk *differential-drive*, atau *steering angle* + *throttle* untuk model *Ackermann*.
- **Transition function** $P(s_{t+1} | s_t, a_t)$: dinamika robot dimodelkan dengan *non-holonomic constraint*:

$$
x_{t+1} = x_t + v_t \Delta t \cos(\theta_t), \quad y_{t+1} = y_t + v_t \Delta t \sin(\theta_t), \quad \theta_{t+1} = \theta_t + \omega_t \Delta t
$$

- **Reward function** $R: \mathcal{S} \times \mathcal{A} \to \mathbb{R}$: dirancang untuk menyeimbangkan *progress*, *safety*, dan *efficiency*.
- **Discount factor** $\gamma \in [0,1)$: umumnya $\gamma \in [0.95, 0.99]$ untuk horizon perencanaan yang panjang.

Tujuan RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected return*:

$$
J(\pi) = \mathbb{E}_{\tau \sim \pi}\left[\sum_{t=0}^{T} \gamma^t R(s_t, a_t)\right]
$$

### 2.2 Persamaan Bellman dan Algoritma Value-Based

*Bellman optimality equation* untuk *state-value function*:

$$
V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]
$$

Untuk *action-value function* (Q-function):

$$
Q^*(s,a) = \mathbb{E}_{s'}\left[R(s,a,s') + \gamma \max_{a'} Q^*(s', a')\right]
$$

Algoritma Q-learning melakukan aproksimasi tabular dengan *update rule*:

$$
Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s', a') - Q(s,a) \right]
$$

dengan $\alpha \in (0,1)$ sebagai *learning rate*. Kala (2024) menekankan bahwa untuk state-space kontinu berdimensi tinggi (LiDAR 360° menghasilkan >1000 fitur), Q-learning tabular menjadi *intractable*, sehingga digunakan **Deep Q-Network (DQN)** dengan parameter $\theta$:

$$
L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]
$$

dengan $\theta^-$ parameter *target network* yang di-*copy* setiap $N$ langkah dari $\theta$, dan $\mathcal{D}$ *replay buffer* berkapasitas $10^5$–$10^6$ transisi.

### 2.3 Policy-Gradient dan Actor-Critic

Untuk ruang aksi kontinu (kecepatan linear $v \in [0, 1.5]$ m/s dan angular $\omega \in [-1.0, 1.0]$ rad/s), algoritma policy-based lebih efisien. **Proximal Policy Optimization** (PPO) yang umum digunakan memiliki *clipped surrogate objective*:

$$
L^{\text{CLIP}}(\theta) = \mathbb{E}_t\left[\min\left(r_t(\theta) A_t,\; \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) A_t\right)\right]
$$

dengan rasio kebijakan $r_t(\theta) = \pi_\theta(a_t|s_t) / \pi_{\theta_{\text{old}}}(a_t|s_t)$ dan *advantage estimate* $A_t = \sum_{i=0}^{T-t} (\gamma\lambda)^i \delta_{t+i}$, di mana $\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$.

### 2.4 Nonlinear Filtering untuk FDIR (Borah, 2024)

Untuk deteksi kegagalan sensor, digunakan **Extended Kalman Filter** (EKF) atau **Unscented Kalman Filter** (UKF). Model prediksi的状态:

$$
\hat{x}_{t|t-1} = f(\hat{x}_{t-1|t-1}, u_t), \quad P_{t|t-1} = F_t P_{t-1|t-1} F_t^{\top} + Q_t
$$

dengan $F_t = \left.\frac{\partial f}{\partial x}\right|_{\hat{x}_{t-1|t-1}}$. Tahap koreksi:

$$
K_t = P_{t|t-1} H_t^{\top} (H_t P_{t|t-1} H_t^{\top} + R_t)^{-1}
$$
$$
\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t (z_t - h(\hat{x}_{t|t-1})), \quad P_{t|t} = (I - K_t H_t) P_{t|t-1}
$$

Inovasi $\nu_t = z_t - h(\hat{x}_{t|t-1})$ menjadi basis deteksi anomali melalui uji $\chi^2$:

$$
T_t = \nu_t^{\top} S_t^{-1} \nu_t \;\;\; \text{dengan}\;\;\; S_t = H_t P_{t|t-1} H_t^{\top} + R_t
$$

Jika $T_t > \tau$ (threshold), maka flag FDIR terpicu dan RL agent melakukan *replanning* menggunakan estimasi state terekonstruksi $\hat{x}_{t|t}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem AMR + RL + FDIR mengikuti SOP lima fase berikut berdasarkan integrasi kedua paper:

**Fase 1 — Akuisisi Data & Pemodelan Lingkungan.** Bangun peta 2D menggunakan SLAM (*Hector SLAM* atau *Cartographer*), identifikasi zona eksklusif pejalan kaki, area *no-go*, dan *chokepoint*. Standar acuan: ISO 3691-4:2020 untuk *driverless industrial trucks*.

**Fase 2 — Desain MDP dan Simulasi.** Tentukan state, action, reward. Reward tipikal yang diusulkan Kala (2024):

$$
r_t = w_1 \cdot \mathbb{1}_{\text{goal}} + w_2 \cdot \Delta d_{\text{progress}} - w_3 \cdot \mathbb{1}_{\text{collision}} - w_4 \cdot \min(d_{\text{obstacle}}, d_{\max}) + w_5 \cdot (1 - \mathbb{1}_{\text{stop}})
$$

dengan bobot tipikal $w_1 = 100$, $w_2 = 1.0$, $w_3 = 50$, $w_4 = 0.5$, $w_5 = 0.1$. Latih kebijakan di simulator (Gazebo, Isaac Sim, atau Unity ML-Agents) selama $\geq 10^7$ langkah.

**Fase 3 — Pelatihan dengan *Domain Randomization*.** Variasikan tekstur, pencahayaan, dinamika pejalan kaki, dan tingkat kegagalan sensor secara prosedural. Borah (2024) menyarankan pelatihan bersamaan dengan modul deteksi anomali agar agen belajar *graceful degradation*.

**Fase 4 — Integrasi FDIR & Sim-to-Real Transfer.** Deploy model TensorRT/ONNX ke onboard compute (NVIDIA Jetson Orin). Jalankan UKF pada frekuensi 50 Hz, policy RL pada 10 Hz. Tetapkan *safety layer* (opsional: *control barrier function*) yang *

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
