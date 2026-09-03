# 2804 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Robot Bergerak Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Motion planning using reinforcement learning*
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan inisiatif *smart manufacturing* telah memunculkan kebutuhan akan sistem robotik otonom yang mampu beroperasi secara independen di lingkungan yang dinamis dan tidak pasti. Perencanaan gerak (*motion planning*) merupakan komponen fundamental yang menentukan efektivitas robot bergerak otonom (AMR — *Autonomous Mobile Robots*) dalam menjalankan misi logistik, manufaktur, dan operasional gudang. Rahul Kala (2024), dalam chapter buku *Autonomous Mobile Robots* yang diterbitkan Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), menekankan bahwa pendekatan klasik terhadap motion planning—seperti algoritma A*, Rapidly-exploring Random Tree (RRT), maupun Probabilistic Roadmaps (PRM)—menghadapi keterbatasan signifikan ketika diterapkan pada lingkungan berskala industri dengan ratusan hingga ribuan state space, dinamika obstacle yang berubah secara real-time, serta ketidakpastian sensor.

Dalam konteks industri, urgensi penerapan *reinforcement learning* (RL) untuk motion planning muncul dari tiga pendorong utama. Pertama, **variabilitas lingkungan operasional**: AMR di pusat distribusi e-commerce menghadapi perubahan tata letak rak secara periodik (slotting ulang), manusia sebagai obstacle dinamis, serta permintaan reorder yang fluktuatif. Kedua, **tekanan produktivitas**: benchmark industri menunjukkan bahwa AMR dengan planner konvensional berbasis graf statis menghasilkan utilisasi armada hanya 65–75%, sedangkan pendekatan RL adaptif berpotensi mencapai 85–92% (Rahul Kala, 2024). Ketiga, **kebutuhan multi-agent coordination**: sistem AMR modern tidak lagi beroperasi sebagai unit terisolasi, melainkan sebagai *fleet* terkoordinasi. Borah (2024) dalam disertasinya dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) menguraikan bahwa arsitektur SAMAS (*Smart Autonomous Multi-Agent Systems*) memerlukan integrasi *nonlinear filtering* (misalnya Extended Kalman Filter) dengan RL untuk memastikan *Fault Detection, Isolation, and Reconstruction* (FDIR) berjalan paralel dengan eksekusi motion plan.

Secara ekonomis, investasi dalam RL-based motion planning menjadi justifikasi strategis ketika biaya downtime satu lini produksi mencapai USD 22.000–50.000 per jam pada industri semikonduktor, atau ketika *order fulfillment cycle time* di gudang ritel menjadi penentu *competitive advantage*. Oleh karena itu, penguasaan metodologi RL untuk motion planning menjadi kompetensi inti bagi insinyur industri yang merancang sistem intralogistik modern.

## 2. Landasan Teori & Formulasi Matematis

Fondasi teoritis motion planning berbasis RL berpijak pada *Markov Decision Process* (MDP), yang diformalisasikan sebagai tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ dengan $\mathcal{S}$ sebagai himpunan state, $\mathcal{A}$ sebagai himpunan aksi, $P(s'|s,a)$ sebagai probabilitas transisi, $R(s,a)$ sebagai fungsi reward, dan $\gamma \in [0,1)$ sebagai *discount factor*.

**Persamaan Bellman Optimalitas** untuk value function didefinisikan sebagai:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \, V^*(s') \right]$$

Sementara action-value function $Q^*(s,a)$ memenuhi:

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a'} Q^*(s', a')$$

Rahul Kala (2024) menjelaskan bahwa dalam skenario motion planning, state $s_t$ umumnya memuat informasi posisi robot $(x_t, y_t, \theta_t)$, pembacaan sensor jarak $d_{i,t}$ untuk $i=1,\ldots,n$, kecepatan linier $v_t$, kecepatan sudut $\omega_t$, serta status misi. Aksi $a_t$ merupakan perintah gerak diskret (misalnya, $\mathcal{A} = \{\text{maju}, \text{belok-kanan}, \text{belok-kiri}, \text{berhenti}\}$).

**Update rule Q-learning** sebagai algoritma *model-free* dasar adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

dengan $\alpha \in (0,1]$ sebagai *learning rate*. Untuk state space berdimensi tinggi yang lazim di AMR industri, Kala (2024) merekomendasikan **Deep Q-Network (DQN)** dengan parameter $\theta$ yang meminimalkan loss:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right]$$

dengan $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer*.

Untuk aksi kontinu (kecepatan linier dan sudut yang halus), **Deep Deterministic Policy Gradient (DDPG)** lebih sesuai dengan policy $\mu_\phi$ dan critic $Q_\theta$:

$$\nabla_\phi J(\phi) = \mathbb{E}_{s \sim \mathcal{D}} \left[ \nabla_a Q(s, a; \theta) \big|_{a=\mu_\phi(s)} \nabla_\phi \mu_\phi(s) \right]$$

Borah (2024) melengkapi kerangka ini dengan **filter state estimation** menggunakan Extended Kalman Filter (EKF) untuk menyaring pengukuran sensor yang noisy sebelum dimasukkan ke policy network:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$

dengan $K_k$ Kalman gain, $H_k$ Jacobian observasi, dan $R_k$ kovariansi noise pengukuran. Integrasi EKF-RL ini memungkinkan FDIR: ketika residual $|z_k - h(\hat{x}_{k|k-1})| > \tau$ melebihi threshold $\tau$, agen mengaktifkan protokol isolasi fault.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis motion planning berbasis RL di lingkungan industri mengikuti tahapan SOP berikut, yang disintesis dari prosedur yang diuraikan oleh Kala (2024) dan Borah (2024):

**Tahap 1 — Analisis Sistem & Akuisisi Data**
1. Pemetaan *workspace* menggunakan SLAM (*Simultaneous Localization and Mapping*) untuk menghasilkan occupancy grid dengan resolusi tipikal 0,05 m untuk AMR ringan dan 0,2 m untuk AGV (*Automated Guided Vehicle*) berat.
2. Identifikasi obstacle statis (dinding, rak) dan dinamis (pejalan kaki, kendaraan lain), dengan klasifikasi zona *restricted*, *caution*, dan *free*.
3. Penyiapan *digital twin* lingkungan industri dalam simulator (Gazebo, Isaac Sim) untuk melatih kebijakan secara paralel dengan operasi nyata.

**Tahap 2 — Perancangan MDP**
4. Diskretisasi state: posisi $(x,y)$, orientasi $\theta$, jarak ke obstacle dalam 8 sektor ($\{d_1, \ldots, d_8\}$), kecepatan saat ini, serta sisa jarak ke *goal*.
5. Perancangan reward function multi-komponen:

$$r_t = w_1 \cdot r_{\text{goal}} + w_2 \cdot r_{\text{progress}} + w_3 \cdot r_{\text{collision}} + w_4 \cdot r_{\text{efficiency}}$$

dengan $r_{\text{goal}} = +100$ saat sampai tujuan, $r_{\text{collision}} = -50$ saat terjadi kontak, $r_{\text{progress}} = \Delta d_{\text{goal}}$, dan $r_{\text{efficiency}} = -0{,}1$ per timestep untuk mendorong *time-optimal path*. Bobot $w_i$ dikalibrasi menggunakan *Bayesian optimization*.

**Tahap 3 — Pelatihan Policy**
6. Inisialisasi replay buffer $\mathcal{D}$ kapasitas $10^6$ transisi.
7. Pelatihan DQN/DDPG selama $\sim 1$–$2$ juta episode di lingkungan simulasi dengan *domain randomization* untuk *transfer learning*.
8. Validasi dengan metrik: *success rate* $> 95\%$, *average path length* $< 1{,}3 \times$ panjang lintasan optimal, *collision rate* < 0,5%.

**Tahap 4 — Integrasi FDIR (berdasarkan Borah, 2024)**
9. Pemasangan sensor fusion (LIDAR + IMU + odometry wheels) dengan pipeline EKF pada *edge computing unit*.
10. Aktivasi modul *anomaly detection* berbasis residual EKF; ketika fault terdeteksi, agen transisi ke *safe state* (berhenti, pindah ke zona netral).
11. Implementasikan *reconfiguration mechanism*: alokasi ulang misi ke agen tetangga dengan policy network fallback yang telah terlatih untuk skenario degraded sensing.

**Tahap 5 — Deployment & Continuous Improvement**
12. *Shadow mode* selama 2–4 minggu: kebijakan RL berjalan paralel dengan sistem konvensional tanpa mengambil keputusan aktual.
13. *A/B testing* dengan metrik KPI: cycle time, throughput, utilisasi baterai, Mean Time Between Failure (MTBF).
14. *Periodic retraining* setiap 3–6 bulan untuk adaptasi terhadap perubahan layout atau profil lalu lintas.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah AMR dengan kapasitas payload 500 kg di gudang e-commerce berdimensi 80 m × 60 m harus melakukan motion planning dari *pick station* (P) di koordinat $(5, 5)$ ke *drop station* (D) di koordinat $(70, 50)$. Lintasan terhalang oleh 3 rak statis berbentuk persegi panjang dan 1 zona dinamis (pejalan kaki). Diskretisasi state space menghasilkan $25$ kemungkinan aksi $\{a_1, \ldots, a_{25}\}$ yang merupakan vektor $(\Delta x, \Delta y, \Delta \theta)$ dengan $\|\Delta\| \leq 0{,}5$ m per step.

**Tabel 1: Hyperparameter RL**

| Parameter | Nilai |
|---|---|
| Discount factor $\gamma$ | 0,99 |
| Learning rate $\alpha$ | 0,0005 |
| Replay buffer | $10^6$ |
| Batch size | 64 |
| Target update freq | 1000 langkah |
| Exploration $\varepsilon$ | 1,0 → 0,05 (decay 0,995) |

**Reward function konkret** yang digunakan:

$$r_t = +200 \cdot \mathbb{1}_{\text{goal}} - 100 \cdot \mathbb{1}_{\text{collision}} + 5 \cdot (d_{t-1}^{\text{goal}} - d_t^{\text{goal}}) - 0{,}5$$

**Perhitungan step-by-step episode tunggal:**

Misalkan pada $t=0$ posisi robot $(5,5)$ dengan jarak Euclidean ke goal: $d_0^{\text{goal}} = \sqrt{(70-5)^2 + (50-5)^2} = \sqrt{4225 + 2025} = \sqrt{6250} \approx 79{,}06$ m. Robot memilih aksi $a_{14}$ (maju diagonal) sehingga berpindah ke $(5{,}35; 5{,}35)$.

- Jarak baru: $d_1^{\text{goal}} = \sqrt{64{,}65^2 + 44{,}65^2} = \sqrt{4179{,}6 + 1993{,}6} = \sqrt{6173{,}2} \approx 78{,}57$ m.
- Progress: $\Delta d = 79{,}06 - 78{,}57 = 0{,}49$ m.
- Reward: $r_1 = 0