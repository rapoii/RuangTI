# 1892 — Perencanaan Gerak Otonom Berbasis Reinforcement Learning untuk Sistem Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning Using Reinforcement Learning pada Sistem Otonom Industri
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots: Planning, Sliding Mode Control and Deep Reinforcement Learning*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah menempatkan sistem otonom—mulai dari *Automated Guided Vehicle* (AGV) di gudang distribusi, drone logistik last-mile, hingga *Autonomous Mobile Robot* (AMR) di lini manufaktur—sebagai tulang punggung produktivitas modern. Dalam konteks ini, **motion planning** (perencanaan gerak) bukan sekadar persoalan navigasi titik-ke-titik, melainkan keputusan multi-kriteria yang harus menyeimbangkan tiga dimensi secara simultan: kelayakan kinematik, efisiensi energi, dan keselamatan operasional. Rahul Kala (2024) dalam chapter *Autonomous Mobile Robots* yang diterbitkan Elsevier secara eksplisit menyatakan bahwa keterbatasan metode planner klasik—seperti *Rapidly-exploring Random Tree* (RRT), *Artificial Potential Field* (APF), dan algoritma graf visibel—terletak pada asumsi deterministik lingkungan dan kurangnya kemampuan adaptasi terhadap dinamika dunia nyata yang bersifat stokastik, non-linear, serta penuh dengan uncertainty sensor (Kala, 2024, DOI: 10.1016/b978-0-443-18908-1.00016-9).

Urgensi ekonominya dapat dihitung dari laporan internal McKinsey yang dirujuk dalam banyak studi rekayasa: downtime akibat kegagalan navigasi AMR di pusat fulfilment e-commerce mencapai 18–25% dari total jam operasional. Setiap insiden tabrakan atau *deadlock* pada *multi-robot* fleet berpotensi merugikan USD 2.500–8.000 per kejadian dalam konteks gudang hiper-modern. Borah (2024) menyoroti bahwa pada sistem *multi-agent*, kompleksitas meningkat secara eksponensial karena setiap agen harus membuat keputusan di bawah *partial observability*, dengan risiko propagasi kegagalan dari satu agen ke seluruh armada (Borah, 2024, DOI: 10.32920/25412566.v1). Inilah mengapa Reinforcement Learning (RL)—yang bersifat *model-free*, adaptif, dan mampu belajar kebijakan optimal melalui interaksi langsung dengan lingkungan—menawarkan paradigma baru yang relevan untuk domain teknik industri.

Kontribusi spesifik chapter Kala (2024) adalah formulasi terpadu antara *Markov Decision Process* (MDP), *value iteration*, dan arsitektur *Deep Q-Network* (DQN) yang disesuaikan dengan ruang keadaan (*state space*) kontinyu kendaraan otonom. Sementara itu, disertasi Borah (2024) melengkapi dengan integrasi *nonlinear filtering*—meliputi *Extended Kalman Filter* (EKF) dan *Unscented Kalman Filter* (UKF)—ke dalam kerangka RL untuk menangani noise sensor dan *fault detection, isolation, and reconstruction* (FDIR) pada agen. Gabungan keduanya membentuk **Smart Autonomous Multi-Agent System (SAMAS)** yang menjadi acuan masa depan rekayasa sistem industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Markov Decision Process (MDP) sebagai Fondasi Planner RL

Formulasi inti yang digunakan Kala (2024) adalah MDP dengan tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ : himpunan keadaan (*states*) yang merepresentasikan konfigurasi robot—misalnya posisi $(x,y)$, orientasi $\theta$, dan kecepatan linier $v$.
- $\mathcal{A}$ : himpunan aksi (*actions*), seperti $\{a_1, a_2, a_3\}$ yang masing-masing bersesuaian dengan $\{ \text{belok kiri}, \text{lurus}, \text{belok kanan} \}$.
- $P(s' \mid s, a)$ : fungsi transisi probabilistik.
- $R(s, a, s')$ : fungsi reward skalar.
- $\gamma \in [0,1)$ : faktor diskon untuk horizon tak hingga.

Persamaan Bellman optimal untuk fungsi nilai keadaan $V^*(s)$ adalah:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s' \mid s, a) \left[ R(s, a, s') + \gamma V^*(s') \right]$$

dan untuk fungsi aksi-nilai (*Q-function*):

$$Q^*(s, a) = \sum_{s'} P(s' \mid s, a) \left[ R(s, a, s') + \gamma \max_{a'} Q^*(s', a') \right] \tag{2.1}$$

### 2.2 Aturan Pembaruan Q-Learning

Untuk lingkungan dengan matriks transisi yang tidak diketahui secara eksplisit, Kala (2024) merujuk pada algoritma *tabular Q-learning* dengan aturan pembaruan:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right] \tag{2.2}$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Konvergensi ke $Q^*$ dijamin selama $\alpha$ memenuhi *Robbins-Monro condition* $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.3 State Transition Non-Linear untuk AMR

Borah (2024) memodelkan dinamika fisik agen dengan persamaan keadaan non-linear:

$$\mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}_k, \quad \mathbf{y}_k = h(\mathbf{x}_k) + \mathbf{v}_k \tag{2.3}$$

dengan $\mathbf{w}_k \sim \mathcal{N}(0, Q_k)$ dan $\mathbf{v}_k \sim \mathcal{N}(0, R_k)$. Estimasi dilakukan melalui EKF:

$$\hat{\mathbf{x}}_{k \mid k} = \hat{\mathbf{x}}_{k \mid k-1} + \mathbf{K}_k \left[ \mathbf{y}_k - h(\hat{\mathbf{x}}_{k \mid k-1}) \right] \tag{2.4}$$

dengan *Kalman gain*:

$$\mathbf{K}_k = \mathbf{P}_{k \mid k-1} \mathbf{H}_k^\top \left( \mathbf{H}_k \mathbf{P}_{k \mid k-1} \mathbf{H}_k^\top + \mathbf{R}_k \right)^{-1} \tag{2.5}$$

### 2.4 Dec-POMDP untuk Multi-Agen

Untuk armada dengan $N$ agen, formulasi diperluas menjadi *Decentralized Partially Observable MDP* (Dec-POMDP):

$$\langle \mathcal{S}, \{\mathcal{A}_i\}_{i=1}^N, T, R, \{\Omega_i\}_{i=1}^N, O, h, \gamma \rangle$$

dengan *joint action* $\mathbf{a} = (a_1, \ldots, a_N)$ dan *joint observation* $\boldsymbol{\omega}$. Kebijakan bersama $\pi = (\pi_1, \ldots, \pi_N)$ bertujuan memaksimalkan:

$$J(\pi) = \mathbb{E}_{\pi} \left[ \sum_{t=0}^{h} \gamma^t R(s_t, \mathbf{a}_t, s_{t+1}) \right] \tag{2.6}$$

### 2.5 Deep Q-Network (DQN) untuk State Kontinyu

Kala (2024) menggunakan arsitektur *Deep Q-Network* dengan parameter $\theta$ untuk mengaproksimasi $Q(s,a;\theta)$. Fungsi loss yang diminimisasi:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right] \tag{2.7}$$

dengan $\theta^-$ adalah parameter *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas terbatas.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL pada lingkungan industri mengikuti SOP berikut, yang disintesis dari kedua literatur:

**Tahap 1 — Pemodelan Lingkungan (Environment Modeling).** Definisikan *state space* dan *action space* berdasarkan spesifikasi AMR. Untuk AGV warehouse, state direpresentasikan sebagai tuple $(x, y, \theta, v, d_{\text{obstacle}})$, dengan *discretization* grid 0,5 m × 0,5 m dan kecepatan diskret $\{0, 0{,}5, 1{,}0\}$ m/s.

**Tahap 2 — Desain Fungsi Reward.** Kala (2024) merekomendasikan *sparse reward* dengan *shaping* sebagai berikut:

$$r(s, a, s') = \begin{cases} +100 & \text{jika } s' = s_{\text{goal}} \\ -50 & \text{jika tabrakan} \\ -1 \cdot d(s', s_{\text{goal}}) & \text{lainnya (jarak Euclidean)} \end{cases} \tag{3.1}$$

**Tahap 3 — Inisialisasi dan Pelatihan.** Inisialisasi $Q(s,a) = 0$ untuk semua pasangan. Lakukan episode pelatihan dengan parameter $\alpha = 0{,}1$, $\gamma = 0{,}95$, dan $\epsilon$-greedy exploration dengan $\epsilon$ decay $\epsilon_t = \epsilon_0 \cdot 0{,}995^t$ (dimulai dari $\epsilon_0 = 1{,}0$).

**Tahap 4 — Integrasi Nonlinear Filter.** Borah (2024) menekankan bahwa sebelum *state* dimasukkan ke jaringan RL, observasi sensor harus difilter terlebih dahulu menggunakan EKF/UKF untuk menekan noise LiDAR dan IMU. Standar ISO 3691-4:2020 untuk AMR mensyaratkan toleransi kesalahan posisi $\leq \pm 10$ mm pada kecepatan operasional.

**Tahap 5 — Validasi SIL/HIL.** *Software-in-the-Loop* (SIL) di Gazebo dengan parameter fisika realistis, dilanjutkan *Hardware-in-the-Loop* (HIL) sebelum deployment. Metrik yang dipantau: *success rate*, *average steps to goal*, *collision rate*, dan *time-to-recovery* pasca-fault.

**Tahap 6 — Deployment dan Continuous Learning.** Model DQN di-*quantize* ke format ONNX atau TensorRT untuk inferensi latency rendah ($\leq 50$ ms) pada edge device (NVIDIA Jetson Orin).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AGV pada Gudang 5 × 5 Grid

Pertimbangkan AGV dengan tugas navigasi dari sel start $S = (0,0)$ ke sel goal $G = (4,4)$ pada grid diskret $5 \times 5$. Satu sel obstakel tetap di posisi $(2,2$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
