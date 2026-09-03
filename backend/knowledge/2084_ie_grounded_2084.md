# 2084 — Perencanaan Gerak Robot Otonom Menggunakan Reinforcement Learning dan Sistem Multi-Agen Cerdas dalam Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah memposisikan robot otonom sebagai tulang punggung utama rantai pasok manufaktur modern. Dalam lingkungan pabrik pintar (smart factory), Automated Guided Vehicle (AGV), Autonomous Mobile Robot (AMR), dan sistem multi-agen kooperatif tidak lagi menjadi sekadar alat bantu produksi, melainkan telah menjadi entitas pengambilan keputusan yang harus bernavigasi secara optimal dalam lingkungan dinamis yang dipenuhi hambatan fisik, mesin bergerak, pekerja manusia, dan ketidakpastian operasional. Kala (2024) dalam bab "Motion planning using reinforcement learning" yang diterbitkan pada *Autonomous Mobile Robots* (Elsevier, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak (motion planning) merupakan masalah fundamental yang menentukan keberhasilan misi robot, karena menentukan lintasan optimal dari konfigurasi awal ke konfigurasi tujuan dengan memperhatikan batasan kinematik, dinamik, dan lingkungan.

Dari perspektif ekonomi industri, biaya downtime akibat tabrakan atau misrouting pada armada AGV di pusat distribusi modern dapat mencapai USD 50.000–250.000 per insiden menurut laporan konsultan McKinsey (2023), sehingga kemampuan *re-planning* secara *real-time* menjadi krusial. Kala (2024) menekankan bahwa pendekatan klasik seperti *A\* search*, Rapidly-exploring Random Tree (RRT), dan Potential Fields memiliki keterbatasan inheren: tidak adaptif terhadap perubahan lingkungan dan memerlukan re-planning penuh setiap kali kondisi berubah. Sebaliknya, *Reinforcement Learning* (RL) memungkinkan agen untuk mempelajari kebijakan (policy) optimal melalui interaksi berulang dengan lingkungan, sehingga mampu menghasilkan keputusan gerak yang *near-optimal* dengan latensi rendah — properti yang sangat dibutuhkan dalam lini perakitan otomatis dan pergudangan *e-commerce*.

Melengkapi hal tersebut, Borah (2024) dalam disertasinya yang diterbitkan di [DOI: 10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) mengusulkan kerangka Smart Autonomous Multi-agent Systems (SAMAS) yang mengintegrasikan *nonlinear filtering* dengan RL untuk deteksi, isolasi, dan rekonstruksi fault (FDIR). Relevansi industri dari karya Borah sangat jelas: sistem produksi modern memiliki ratusan sensor, aktuator, dan subsistem komunikasi yang rentan terhadap degradasi performa, sehingga kemampuan sistem multi-agen untuk secara otonom mengidentifikasi dan mengisolasi kegagalan menjadi pembeda kompetitif yang signifikan.

Urgensi integratif dari kedua literatur ini adalah bahwa sistem robotik industri masa depan tidak hanya harus mampu merencanakan gerak secara adaptif (Kala, 2024), tetapi juga harus beroperasi secara *fault-tolerant* dalam formasi multi-agen (Borah, 2024). Dokumen modul ini akan membahas secara komprehensif landasan matematis, prosedur implementasi, dan perhitungan numerik yang diperlukan untuk menerapkan metodologi tersebut dalam konteks rekayasa sistem industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Markov Decision Process (MDP) sebagai Fondasi RL

Sebagaimana dirumuskan oleh Kala (2024), masalah motion planning dengan RL secara formal dimodelkan sebagai Markov Decision Process (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan state (konfigurasi robot dalam ruang kerja),
- $\mathcal{A}$ = himpunan aksi (perintah gerak: maju, mundur, belok kiri/kanan),
- $P(s'|s,a)$ = probabilitas transisi ke state $s'$ setelah mengambil aksi $a$ pada state $s$,
- $R(s,a,s')$ = fungsi reward sesaat,
- $\gamma \in [0,1)$ = faktor diskon (*discount factor*) untuk menghargai reward masa depan.

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman**:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right] \quad (1)$$

Secara ekuivalen, **fungsi aksi-nilai** $Q^*(s,a)$ didefinisikan sebagai:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right] \quad (2)$$

### 2.2. Algoritma Q-Learning untuk Motion Planning

Kala (2024) menjelaskan bahwa untuk environment dengan transisi deterministik dan diskrit (seperti grid world gudang), algoritma **Q-Learning** sesuai digunakan. Update rule-nya adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t) \right] \quad (3)$$

di mana $\alpha \in (0,1]$ adalah laju pembelajaran (learning rate). Konvergensi ke $Q^*(s,a)$ dijamin oleh teorema Watkins & Dayan (1992) dengan syarat $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

### 2.3. Deep Q-Network (DQN) untuk Ruang Kontinu

Untuk ruang state kontinu (posisi $(x,y) \in \mathbb{R}^2$, orientasi $\theta$), Kala (2024) merekomendasikan **DQN** yang menggunakan neural network dengan parameter $\theta$ sebagai approximator: $Q(s,a;\theta) \approx Q^*(s,a)$. Fungsi loss yang diminimalkan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right] \quad (4)$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer* untuk dekorelasi sampel.

### 2.4. Policy Gradient untuk Kontrol Gerak Halus

Untuk aplikasi yang membutuhkan aksi kontinu (misalnya kecepatan roda), algoritma REINFORCE atau Proximal Policy Optimization (PPO) digunakan. Objective function PPO adalah:

$$L^{CLIP}(\theta) = \mathbb{E}_t \left[ \min\left( r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t \right) \right] \quad (5)$$

dengan $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ dan $\hat{A}_t$ adalah *advantage estimate*.

### 2.5. Multi-Agent Reinforcement Learning (MARL) dan FDIR

Borah (2024) mengembangkan MDP multi-agen dengan state gabungan $s \in \mathcal{S}_1 \times \mathcal{S}_2 \times \cdots \times \mathcal{S}_N$ untuk $N$ agen. Untuk subsistem FDIR, ia mengusulkan observasi melalui *Unscented Kalman Filter* (UKF):

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - h(\hat{x}_{k|k-1})) \quad (6)$$

dengan gain $K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$. Fault dideteksi ketika residual $\|y_k - h(\hat{x}_{k|k-1})\|$ melebihi threshold statistik $\tau$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL dalam sistem industri mengikuti SOP berjenjang berikut, yang disintesis dari prosedur Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Ruang Kerja.** Diskretisasi lingkungan gudang/pabrik menjadi grid $G \in \mathbb{Z}^{m \times n}$, identifikasi zona bebas ($\mathcal{F}$), zona hambatan statis ($\mathcal{O}_s$), dan zona dinamis ($\mathcal{O}_d$). Standar ISO 3691-4:2020 tentang *driverless industrial trucks* menjadi acuan safety zone minimal 0,5 m.

**Tahap 2 — Desain Fungsi Reward.** Reward shaping harus menghasilkan sinyal sparse reward yang menghindari local optimum:

$$r(s,a,s') = \begin{cases} +R_{goal} & \text{jika } s' = s_{goal} \\ -R_{collision} & \text{jika } s' \in \mathcal{O}_s \\ -c \cdot d(s', s_{goal}) & \text{state antara} \end{cases} \quad (7)$$

dengan $c$ konstanta *potential-based shaping* (Ng et al., 1999) dan $d(\cdot,\cdot)$ jarak Euclidean.

**Tahap 3 — Pelatihan & Validasi Sim2Real.** Latih kebijakan di simulator high-fidelity (Gazebo, Isaac Sim) minimal 1 juta episode; kemudian lakukan *domain randomization* pada parameter friction, lighting, dan sensor noise. Validasi mengikuti standar ISO 13849 (Safety of machinery).

**Tahap 4 — Integrasi FDIR.** Terapkan arsitektur SAMAS (Borah, 2024): setiap agen memiliki modul UKF untuk state estimation dan modul RL untuk kebijakan gerak. Fault diisolasi menggunakan mekanisme *consensus* antar-agen:

$$u_i(t+1) = \sum_{j \in \mathcal{N}_i} w_{ij} u_j(t) \quad \text{dengan} \quad w_{ij} = \frac{\exp(-\|s_i - s_j\|^2 / \sigma^2)}{\sum_{k} \exp(-\|s_i - s_k\|^2 / \sigma^2)} \quad (8)$$

**Tahap 5 — Deployment & Monitoring.** Gunakan arsitektur ROS 2 dengan *watchdog timer* 100 ms; integrasikan *digital twin* untuk monitoring Key Performance Indicator (KPI) seperti path efficiency ($\eta_{path}$), collision rate ($\lambda_{col}$), dan task completion time (TCT).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AGV di gudang *e-commerce* berukuran 6×6 grid. Start $s_0 = (0,0)$, Goal $s_g = (5,5)$. Hambatan statis di $(2,2), (3,3), (4,1)$. Aksi: atas, bawah, kiri, kanan. Parameter: $\alpha = 0.1$, $\gamma = 0.9$, $\epsilon = 0.1$ (eksplorasi). Reward: $R_{goal} = +100$, $R_{collision} = -10$, $R_{step} = -1$.

**Inisialisasi:** $Q(s,a) = 0$ untuk seluruh $(s,a)$.

**Episode 1 — Iterasi Pertama (state $s = (0,0)$, aksi = kanan → $s' = (1,0)$):**

$$Q((0,0), kanan) \leftarrow 0 + 0.1 \left[ -1 + 0.9 \cdot \max_a