# 1540 — Perencanaan Gerak Otonom Berbasis Reinforcement Learning untuk Sistem Robotik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma industri menuju *Industry 4.0* dan *Society 5.0* telah menempatkan robot otonom — baik Automated Guided Vehicle (AGV), Autonomous Mobile Robot (AMR), maupun drone logistik — sebagai tulang punggung operasional pada lini produksi modern, pergudangan otomatis, dan rantai pasok just-in-time. Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* menyoroti bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan paling fundamental dalam mengoperasionalkan robot otonom secara andal di lingkungan yang dinamis dan tidak terstruktur. Berbeda dengan pendekatan geometris klasik seperti A*, Rapidly-exploring Random Tree (RRT), atau Potential Field yang bergantung pada peta statis dan model lingkungan deterministik, Kala mengemukakan bahwa *Reinforcement Learning* (RL) memberikan kapabilitas adaptif karena agen pembelajar mampu memperbarui kebijakan navigasinya secara inkremental melalui interaksi langsung dengan lingkungan (Kala, 2024, [DOI:10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Urgensi ekonomis dari adopsi teknologi ini cukup substansial. Laporan Allied Market Research menunjukkan pasar AGV/AMR global mencapai USD 4,9 miliar pada 2022 dan diproyeksikan menembus USD 12,8 miliar pada 2030 dengan CAGR 12,8%. Dalam konteks manufaktur, downtime akibat kesalahan navigasi robot dapat menimbulkan kerugian produksi hingga USD 50.000 per jam pada lini *semiconductor fab*. Kala (2024) menekankan bahwa RL memungkinkan robot menangani situasi yang sebelumnya tidak terprogram (*out-of-distribution states*), sehingga menurunkan kebutuhan *re-deployment engineering* yang biasanya memakan 30–40% biaya implementasi robotika otonom. Lebih lanjut, Borah (2024) dalam disertasinya tentang *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (SAMAS) memperluas horizon riset ini dengan mengintegrasikan RL untuk deteksi, isolasi, dan rekonstruksi fault (FDIR) pada sistem multi-agen otonom, yang sangat relevan untuk armada robot kolaboratif di lantai pabrik ([DOI:10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

Dalam konteks rekayasa sistem industri, integrasi RL untuk motion planning menyentuh empat pilar keputusan: (1) desain lintasan adaptif pada lingkungan *mixed-traffic* (manusia dan robot berbagi area), (2) optimalisasi konsumsi energi robot melalui kebijakan navigasi yang mempertimbangkan profil baterai, (3) keandalan sistem melalui *fault-tolerant planning*, dan (4) skalabilitas armada melalui pembelajaran terdistribusi. Dengan kerangka ini, RL tidak sekadar menjadi algoritma kontrol, melainkan sebuah *strategic capability* yang menentukan keunggulan operasional fasilitas industri modern.

## 2. Landasan Teori & Formulasi Matematis

Formulasi RL untuk motion planning berangkat dari kerangka *Markov Decision Process* (MDP) yang didefinisikan sebagai tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan state (status robot: posisi $(x,y)$, orientasi $\theta$, kecepatan $v$, status baterai $b$),
- $\mathcal{A}$ = himpunan aksi (perpindahan diskret: $\{$maju, mundur, belok kiri, belok kanan, berhenti$\}$ atau kontinu: $(v, \omega)$),
- $P(s'|s,a)$ = probabilitas transisi dari state $s$ ke $s'$ setelah mengambil aksi $a$,
- $R(s,a,s')$ = fungsi reward sesaat,
- $\gamma \in [0,1]$ = faktor diskonto untuk trade-off reward sesaat dan masa depan.

Tujuan utama agen RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Persamaan Bellman optimal untuk *value function* $V^*(s)$ dan *action-value function* $Q^*(s,a)$ menurut Kala (2024) dituliskan sebagai:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

Untuk implementasi praktis ketika model transisi $P$ tidak diketahui (*model-free RL*), Kala (2024) membahas algoritma **Q-learning** dengan aturan pembaruan:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate* dan selisih dalam kurung disebut *TD-error*. Untuk lingkungan dengan state kontinu berdimensi tinggi, **Deep Q-Network (DQN)** menggunakan *neural network* dengan bobot $\theta$ sebagai approximator $Q(s,a;\theta) \approx Q^*(s,a)$, dengan *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

dengan $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik dan $\mathcal{D}$ adalah *replay buffer*.

Untuk tugas dengan aksi kontinu, Kala (2024) merekomendasikan algoritma **Deep Deterministic Policy Gradient (DDPG)** yang menggabungkan *actor-critic architecture*:

$$\nabla_{\theta^{\mu}} J \approx \mathbb{E}\left[\nabla_a Q(s,a|\theta^Q)|_{a=\mu(s|\theta^{\mu})} \cdot \nabla_{\theta^{\mu}} \mu(s|\theta^{\mu})\right]$$

Borah (2024) melengkapi kerangka ini dengan menyertakan **Nonlinear Filtering** menggunakan *Extended Kalman Filter* (EKF) atau *Particle Filter* untuk estimasi state yang akurat di tengah derau sensor dan ketidakpastian model:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$

Fungsi reward yang representatif untuk motion planning industri dapat diformulasikan sebagai kombinasi tertimbang:

$$r_t = w_1 r_{\text{goal}} + w_2 r_{\text{collision}} + w_3 r_{\text{efficiency}} + w_4 r_{\text{smoothness}}$$

dengan $w_1, w_2, w_3, w_4 \geq 0$ sebagai bobot manajerial yang mencerminkan prioritas operasional fasilitas.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti *Standard Operating Procedure* (SOP) terstruktur sebagai berikut:

**Tahap 1: Pemodelan Lingkungan & Akuisisi Data**
Lakukan *mapping* fasilitas menggunakan SLAM (Simultaneous Localization and Mapping) untuk membangun occupancy grid $\mathcal{G} \in \{0,1\}^{W \times H}$. Setiap sel grid merepresentasikan status bebas/terhalang. Sensor LiDAR 2D dengan resolusi 0,1 m dan frekuensi 10 Hz menjadi standar minimal. Standar ISO 3691-4:2020 untuk driverless industrial trucks menjadi acuan.

**Tahap 2: Diskretisasi State-Action Space**
Berdasarkan kerangka Kala (2024), state mencakup posisi diskret $(i,j)$, heading $h \in \{0°, 90°, 180°, 270°\}$, dan status *safety zone* $\in \{0,1\}$. Action space mengikuti *kinematic bicycle model* dengan set akselerasi dan laju belok terbatas.

**Tahap 3: Perancangan Reward Function**
Tetapkan bobot reward:
- $r_{\text{goal}} = +100$ ketika mencapai target,
- $r_{\text{collision}} = -50$ saat kontak dengan obstacle,
- $r_{\text{step}} = -1$ per time step (efisiensi),
- $r_{\text{jerk}} = -0{,}5$ per perubahan arah mendadak (smoothness).

**Tahap 4: Pelatihan dengan Simulator**
Gunakan platform seperti ROS2 + Gazebo atau NVIDIA Isaac Sim. Total episode pelatihan 50.000–200.000 dengan *epsilon-greedy exploration*:

$$a_t = \begin{cases} \arg\max_a Q(s_t,a), & \text{dengan probabilitas } 1-\epsilon \\ \text{aksi acak uniform}, & \text{dengan probabilitas } \epsilon \end{cases}$$

dengan jadwal *epsilon decay*: $\epsilon_t = \epsilon_0 \cdot \kappa^t$, $\kappa = 0{,}995$.

**Tahap 5: Validasi & Transfer ke Real Robot (Sim-to-Real)**
Terapkan teknik *domain randomization* pada parameter simulator (friksi, massa, latency sensor) untuk menutup *reality gap* yang secara kuantitatif diukur dengan *success rate* (standar minimal 95%).

**Tahap 6: Integrasi FDIR (Borah, 2024)**
Pasang modul *fault detection* berbasis filter nonlinier di samping policy RL. Jika terdeteksi anomali sensor/aktuator (residu filter $>3\sigma$), alihkan ke *safe policy* yang telah dipre-train.

**Tahap 7: Pemantauan Berkelanjutan (MISP - Monitoring, Improvement, Standardization, Perpetuation)**
Pantau KPI: *task completion rate*, *average path length*, *collision rate per 1000 jam*, dan *mean energy consumption*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah AMR di fasilitas pergudangan *e-commerce* berkapasitas 10.000 m² ditugaskan mengambil barang dari Picking Station S5 ke Packaging Station G4, dengan satu zona terlarang (obstacle).

**Representasi Lingkungan (4×4 grid):**
$$\mathcal{G} = \begin{bmatrix} F & F & F & O \\ F & O & F & F \\ F & F & F & F \\ F & F & F & G \end{bmatrix}$$

S = Start $(0,0)$, G = Goal $(3,3)$, O = Obstacle. Aksi: Atas (U), Bawah (D), Kiri (L), Kanan (R).

**Parameter Pembelajaran:** $\alpha = 0{,}1$, $\gamma = 0{,}9$, $\epsilon = 0{,}1$. Reward: $r_{\text{goal}}=+100$, $r_{\text{collision}}=-50$, $r_{\text{step}}=-1$.

**Inisialisasi:** $Q(s,a) = 0$ untuk seluruh pasangan state-action.

**Episode 1, Iterasi Step 1:** Agen di $S=(0,0)$, pilih aksi R (kanan) via $\epsilon$-greedy. Transisi ke $(0,1)$ yang valid. Pembaruan:

$$Q((0,0),R) \leftarrow 0 + 0{,}1 \cdot [-1 + 0{,}9 \cdot \max_a Q((0,1),a) - 0] = 0 + 0{,}1 \cdot [-1 + 0] = -0{,}1$$

**Episode 1, Iterasi Step 2:** Di $(0,1)$, pilih U (eksplorasi). Transisi ke obstacle $(1,1) \in O$.