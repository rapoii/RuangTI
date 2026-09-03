# 2692 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan (Reinforcement Learning) untuk Sistem Robot Otonom pada Lingkungan Industri Manufaktur dan Logistik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Perencanaan Gerak menggunakan Pembelajaran Penguatan (Motion Planning using Reinforcement Learning)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots: Planning, Perception and Control*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memunculkan tuntutan operasional yang semakin kompleks terhadap sistem robotik otonom, khususnya *Autonomous Mobile Robot* (AMR) dan *Automated Guided Vehicle* (AGV) yang beroperasi di lantai pabrik, gudang distribusi, dan pusat fulfilment e-commerce. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa motion planning—yakni proses menentukan trajectory optimal yang aman, efisien secara energi, dan kolaboratif—merupakan salah satu pilar kritis dalam orkestrasi AMR modern. Kala menyatakan bahwa pendekatan klasik seperti *A\**, *Rapidly-exploring Random Tree* (RRT), dan *Probabilistic Road Map* (PRM) seringkali gagal ketika menghadapi dinamika lingkungan yang bersifat stokastik, seperti pergerakan pekerja, halangan dinamis, serta variasi kondisi lantai (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Secara ekonomis, urgensi adopsi Reinforcement Learning (RL) dalam motion planning diperkuat oleh data pasar global. Menurut proyeksi pasar robotika logistik, efisiensi satu unit AMR dalam pick-and-pack warehouse mampu menurunkan biaya operasional hingga 40% dibandingkan sistem konveyor tetap, namun hanya jika robot mampu *re-plan* secara real-time dengan latensi rendah. Kala (2024) mengidentifikasi bahwa RL—melalui interaksi Markov Decision Process (MDP)—memungkinkan robot mempelajari *policy* yang dapat menggeneralisasi pola障碍 baru tanpa pemrograman ulang eksplisit. Pendekatan ini sangat relevan dengan hasil disertasi Kaustav Borah (2024) yang memperkenalkan kerangka *Smart Autonomous Multi-agent Systems* (SAMAS), di mana deteksi, isolasi, dan rekonstruksi故障 (FDIR) harus berjalan paralel dengan perencanaan gerak agar sistem multi-agen tetap resilien saat terjadi anomali sensor atau aktuator (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

Konteks industri nyata yang menjadi latar belakang riset ini mencakup tiga skenario utama: (1) lantai produksi *high-mix low-volume* yang membutuhkan AMR berpindah antar workstation secara fleksibel; (2) gudang *cross-docking* dengan throughput >5.000 paket/jam per robot; dan (3) lingkungan kolaboratif manusia-robot (cobot) di mana standar ISO/TS 15066 mengatur batasan kecepatan dan jarak aman. Permasalahan mendasar yang diangkat Kala (2024) adalah bagaimana menyeimbangkan tiga objective function secara simultan, yaitu meminimalkan waktu tempuh (*makespan*), meminimalkan konsumsi energi baterai, dan memaksimalkan jarak aman dari halangan dinamis. Borah (2024) melengkapi perspektif ini dengan menyoroti bahwa dalam sistem multi-agen, kegagalan satu agen tidak boleh mengkompromikan rencana gerak agen lain, sehingga arsitektur RL harus dirancang *fault-tolerant* sejak tahap desain.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis motion planning berbasis RL diformalkan sebagai *Markov Decision Process* (MDP) dengan tupel:

$$M = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$$

di mana $\mathcal{S}$ merupakan himpunan state (konfigurasi robot + lingkungan teramati), $\mathcal{A}$ adalah himpunan tindakan (misalnya translasi $(\Delta x, \Delta y)$ dan rotasi $\Delta\theta$), $P(s'|s,a)$ adalah probabilitas transisi state, $R(s,a)$ adalah fungsi reward sesaat, dan $\gamma \in [0,1)$ adalah *discount factor*. Kala (2024) mendefinisikan state sebagai:

$$s_t = \left[ x_t, y_t, \theta_t, \dot{x}_t, \dot{y}_t, \mathbf{o}_t \right] \in \mathbb{R}^{n_s}$$

dengan $\mathbf{o}_t \in \mathbb{R}^{k}$ merepresentasikan vektor observasi障碍 yang terdeteksi oleh sensor LiDAR 2D atau kamera kedalaman. Tindakan $a_t$ dipilih dari ruang diskret atau kontinu sesuai dengan kinematic constraint *non-holonomic* AMR.

Fungsi nilai optimal $V^*(s)$ dan fungsi aksi-nilai optimal $Q^*(s,a)$ memenuhi **Bellman Optimality Equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \, V^*(s') \right]$$

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a' \in \mathcal{A}} Q^*(s',a')$$

Untuk implementasi tanpa model eksplisit (*model-free*), Kala (2024) menurunkan **Q-Learning update rule**:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

dengan $\alpha \in (0,1)$ adalah *learning rate*. Algoritma ini konvergen ke $Q^*$ jika semua pasangan $(s,a)$ dikunjungi tak hingga sering (*infinite exploration*) dan $\alpha$ memenuhi kondisi Robbins-Monro $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

Untuk ruang state berdimensi tinggi (misalnya grid $50 \times 50$ dengan 8 arah gerakan), Kala merekomendasikan penggunaan **Deep Q-Network (DQN)** dengan *loss function*:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter *target network* yang diperbarui setiap $C$ langkah, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N$.

Dalam konteks multi-agen yang disinggung Borah (2024), formulasi diperluas menjadi **Decentralized Partially Observable MDP (Dec-POMDP)**:

$$\langle \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^{N}, P, \{R_i\}_{i=1}^{N}, \{\mathcal{O}_i\}_{i=1}^{N}, \gamma \rangle$$

di mana setiap agen $i$ hanya memiliki observasi parsial $o_i \in \mathcal{O}_i$. Pendekatan *Multi-Agent Deep Deterministic Policy Gradient* (MADDPG) yang dirujuk Borah (2024) menggabungkan komponen *Actor-Critic* dengan *Centralized Training with Decentralized Execution* (CTDE). Gradien kebijakan aktor agen $i$ diperbarui sebagai:

$$\nabla_{\theta_i} J(\theta_i) = \mathbb{E}_{\mathcal{D}} \left[ \nabla_{\theta_i} \pi_i(o_i) \nabla_{a_i} Q_i^\mu(\mathbf{x}, a_1, \dots, a_N) \big|_{a_i=\pi_i(o_i)} \right]$$

dengan $\mathbf{x}$ menyatakan informasi gabungan state semua agen saat training.

---

## 3. Metodologi Rekayasa & Prosedur Operasional Standar (SOP)

Implementasi industri motion planning berbasis RL mengikuti SOP lima fase berikut, yang disintesis dari protokol Kala (2024) dan Borah (2024):

**Fase 1 — Pemodelan Lingkungan & Akuisisi Data.** Peta statis fasilitas diimpor ke dalam *Occupancy Grid Map* dengan resolusi tipikal $0{,}1$ m per sel. Data historis telemetri AMR (jalur, kecepatan, konsumsi baterai) diekstrak dari *fleet management system* untuk digunakan sebagai *prior* inisialisasi Q-table atau *pre-training* jaringan saraf.

**Fase 2 — Desain Fungsi Reward.** Reward harus mencerminkan tujuan operasional. Fungsi reward khas untuk AMR gudang adalah:

$$R(s, a, s') = r_{\text{goal}} \cdot \mathbb{1}_{s' = s_g} + r_{\text{collision}} \cdot \mathbb{1}_{\text{collision}} - \lambda_1 \cdot d(s', s_g) - \lambda_2 \cdot \Delta t - \lambda_3 \cdot E(s,a)$$

di mana $r_{\text{goal}} \gg 0$, $r_{\text{collision}} \ll 0$, $d(s',s_g)$ adalah jarak Euclidean ke goal, $\Delta t$ adalah waktu tempuh, $E(s,a)$ adalah energi yang dikonsumsi, dan $\lambda_{1,2,3}$ adalah bobot tunable.

**Fase 3 — Pelatihan Offline & Validasi Silang.** Algoritma Q-learning atau DQN dilatih pada simulator (Gazebo, Isaac Sim) selama $10^5$–$10^6$ episode dengan *epsilon-greedy* exploration $\epsilon_t = \epsilon_0 \cdot e^{-\beta t}$. Model dievaluasi menggunakan *cross-validation* 5-fold pada skenario障碍 yang belum pernah dilihat.

**Fase 4 — Integrasi FDIR (Protokol Borah 2024).** Sensor fault dideteksi menggunakan *nonlinear Kalman filter* atau *particle filter*; jika deviasi observasi melebihi threshold, agen memicu *re-planning* dengan reward penalty tambahan $r_{\text{fault}} = -10$.

**Fase 5 — Deployment, Monitoring, dan Fine-Tuning Online.** Model di-*deploy* ke edge computer onboard (misalnya NVIDIA Jetson Orin). Telemetri aktual dikirim ke *cloud* untuk *continual learning* dengan *safe exploration guard* sesuai ISO 10218-1.

Diagram alur keputusan agen RL dapat diringkas sebagai berikut: `(Observasi → State Encoding → Policy Network → Action Sampling → Safety Filter → Actuator Command) → (Reward Computation → Replay Buffer → Gradient Update)`.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah AGV pengangkut palet beroperasi di gudang *cross-docking* berukuran $30 \times 30$ meter (grid $30 \times 30$ sel). AGV harus berpindah dari start.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
