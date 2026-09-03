# 1508 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Robot Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning menggunakan reinforcement learning untuk robot otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multiagent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur dan logistik modern, robot otonom telah menjadi tulang punggung transformasi Industri 4.0. Rahul Kala (2024) dalam chapter buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (motion planning) bukan sekadar masalah navigasi geometris, melainkan masalah pengambilan keputusan sekuensial dalam lingkungan yang dinamis, sebagian dapat diamati (partially observable), dan penuh ketidakpastian. Permasalahan ini menjadi semakin relevan ketika Automated Guided Vehicles (AGV), Autonomous Mobile Robots (AMR), dan collaborative robots (cobot) harus beroperasi berdampingan dengan manusia dalam *smart warehouse*, lini perakitan fleksibel, dan fasilitas distribusi e-commerce. Kala (2024) menunjukkan bahwa pendekatan konvensional seperti A*, Dijkstra, dan Rapidly-exploring Random Tree (RRT) bersifat deterministik dan memerlukan pemodelan lingkungan yang eksplisit, sehingga sulit beradaptasi terhadap perubahan rintangan, kegagalan sensor, atau variasi布局 (layout) pabrik.

Konteks ekonominya sangat signifikan: menurut proyeksi internal berbagai studi implementasi, downtime akibat perencanaan gerak yang suboptimal pada armada AGV di pusat distribusi skala besar dapat menimbulkan kerugian operasional hingga ratusan ribu dolar per jam. Oleh karena itu, integrasi *reinforcement learning* (RL) menjadi strategis karena memungkinkan robot *belajar* kebijakan navigasi optimal melalui interaksi berulang dengan lingkungannya, tanpa memerlukan peta statis yang harus diperbarui secara manual. Pendekatan ini juga selaras dengan temuan Borah (2024) dalam disertasinya tentang Smart Autonomous Multiagent Systems (SAMAS), yang menegaskan bahwa sistem otonom modern harus memiliki kapabilitas *fault detection, isolation, and reconstruction* (FDIR) secara real-time—sebuah kebutuhan yang hanya dapat dipenuhi jika arsitektur pengendaliannya adaptif dan berbasis pembelajaran.

Urgensi teknis lainnya adalah meningkatnya kompleksitas task scheduling pada lantai produksi. Robot tidak hanya harus bergerak dari titik A ke titik B, melainkan juga harus mengoptimalkan waktu siklus (cycle time), konsumsi energi baterai, keausan mekanik roda, dan kepatuhan terhadap standar keselamatan ISO 3691-4 untuk driverless industrial trucks. Dalam konteks inilah Kala (2024) memposisikan RL sebagai paradigma yang memungkinkan *trade-off multi-objective* ditangani secara dinamis melalui fungsi reward yang dirancang secara cermat. Lebih jauh, kemampuan generalisasi RL—yang telah ditunjukkan melalui Deep Q-Networks (DQN), Proximal Policy Optimization (PPO), dan Soft Actor-Critic (SAC)—menjadikan pendekatan ini *scalable* dari simulasi ke implementasi fisik di pabrik riil, mengurangi gap yang selama ini menghambat transfer teknologi dari laboratorium ke lini produksi.

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti RL untuk motion planning berangkat dari *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$:

- $\mathcal{S}$ : himpunan state (konfigurasi robot + persepsi lingkungan)
- $\mathcal{A}$ : himpunan action (perintah motorik, mis. translasi dan rotasi)
- $P(s'|s,a)$ : probabilitas transisi state
- $R(s,a,s')$ : reward function
- $\gamma \in [0,1)$ : discount factor

Kebijakan (policy) robot didefinisikan sebagai $\pi : \mathcal{S} \rightarrow \mathcal{P}(\mathcal{A})$, dan tujuan RL adalah menemukan kebijakan optimal $\pi^*$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^{k} R_{t+k+1}$$

State-value function di bawah kebijakan $\pi$ memenuhi *Bellman expectation equation*:

$$V^{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s'} P(s'|s,a)\left[ R(s,a,s') + \gamma V^{\pi}(s') \right]$$

Untuk permasalahan motion planning diskrit dengan state yang dapat dijelajahi secara tabular, algoritma *value iteration* (Kala, 2024) melakukan update secara iteratif:

$$V_{k+1}(s) = \max_{a \in \mathcal{A}} \sum_{s'} P(s'|s,a)\left[ R(s,a,s') + \gamma V_k(s') \right]$$

yang konvergen ke $V^*$ ketika $k \rightarrow \infty$. Jika model transisi $P$ tidak tersedia (kasus umum pada robot riil), digunakan *model-free* Q-learning dengan aturan pembaruan:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Kala (2024) menekankan bahwa untuk ruang state kontinu (posisi $(x,y,\theta)$ robot), representasi Q disimpan dalam *function approximator* seperti *deep neural network* (DQN), dengan *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[ \left( r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_{\theta}(s,a) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter *target network* yang diperbarui periodik untuk menstabilkan training. Untuk aplikasi multi-robot seperti disinggung Borah (2024), formulasi MDP diperluas menjadi *decentralized partially observable MDP* (Dec-POMDP) dengan *joint state* $\mathbf{s} = (s_1, ..., s_N)$ dan *joint action* $\mathbf{a} = (a_1, ..., a_N)$. Fungsi reward kolektif dapat dirancang sebagai:

$$R(\mathbf{s}, \mathbf{a}, \mathbf{s}') = \sum_{i=1}^{N} R_i(s_i, a_i) - \lambda \cdot C_{\text{collision}}(\mathbf{s}, \mathbf{a})$$

dengan $C_{\text{collision}}$ adalah penalti tabrakan antar-robot dan $\lambda$ parameter penyeimbang. Pendekatan ini memungkinkan emergence of *cooperative behavior* tanpa komunikasi eksplisit penuh, melainkan melalui pembelajaran berbasis sinyal reward bersama.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lingkungan industri mengikuti SOP bertahap berikut, yang disintesis dari kerangka Kala (2024) dan arsitektur SAMAS Borah (2024):

**Tahap 1 — Diskritisasi & Pemodelan Environment.** Lantai pabrik direpresentasikan sebagai *occupancy grid* dengan resolusi tipikal $0{,}25$ m sampai $0{,}5$ m. State robot mencakup posisi $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, dan jarak ke rintangan terdekat $d_{\min}$ yang dibaca dari LiDAR 2D. Action space untuk AMR biasanya diskretisasi menjadi 5 opsi: $\mathcal{A} = \{\text{maju}, \text{mundur}, \text{belok kiri}, \text{belok kanan}, \text{berhenti}\}$.

**Tahap 2 — Desain Reward Function.** Reward function dirancang sebagai kombinasi Sparse Goal Reward dan Dense Shaping Reward:

$$r_t = r_{\text{goal}} + r_{\text{progress}} + r_{\text{collision}} + r_{\text{efficiency}}$$

dengan komponen tipikal:
- $r_{\text{goal}} = +100$ saat robot mencapai waypoint target
- $r_{\text{progress}} = \beta (d_{t-1} - d_t)$, insentif pergerakan mendekat ke target dengan $\beta = 1$
- $r_{\text{collision}} = -50$ saat $d_{\min} < d_{\text{safe}}$ (threshold keselamatan)
- $r_{\text{efficiency}} = -\eta (v_t^2 + \omega_t^2)$, penalti energi kinetik

**Tahap 3 — Training Loop.** Mengikuti protokol Kala (2024), training dilakukan dalam simulator high-fidelity (Gazebo, Isaac Sim, atau Unity ML-Agents) selama $1 \times 10^6$ sampai $5 \times 10^6$ timestep dengan *experience replay buffer* berkapasitas $\mathcal{D} = 10^5$ transisi. Hyperparameter standar: $\alpha = 5 \times 10^{-4}$, $\gamma = 0{,}99$, $\varepsilon$-greedy decay dari $1{,}0$ ke $0{,}05$ dalam 100k langkah.

**Tahap 4 — Domain Randomization & Transfer.** Untuk menjembatani *sim-to-real gap*, dilakukan randomisasi terhadap friction lantai, latency sensor (50–200 ms), dan noise LiDAR ($\sigma = 0{,}02$ m). Setelah konvergen, bobot policy $\pi_{\theta}$ di-*fine-tune* pada robot fisik dengan *safe exploration* menggunakan *control barrier function* (CBF) sebagai filter keamanan.

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Sensor anomaly dideteksi menggunakan *nonlinear Kalman filter*; jika fault terdeteksi, policy RL dialihkan ke *safe fallback controller* (mis. berhenti total) sambil menunggu recovery.

**Tahap 6 — Validasi & Sertifikasi.** Sesuai ISO 3691-4 dan ANSI/RIA R15.08-1, setiap kebijakan RL harus lulus uji Safety Integrity Level (SIL) 2 dengan metric seperti *probability of collision per mission hour* $< 10^{-6}$.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** AMR di Gudang E-Commerce dengan Layout 60 m × 40 m.

**Parameter Input:**
- State space diskret: $60 \times 40 / 0{,}25^2 = 38.400$ sel
- Action space: $|\mathcal{A}| = 5$
- Discount factor $\gamma = 0{,}95$
- Learning rate $\alpha = 0{,}1$
- Start state: $(x_0, y_0) = (2, 2)$
- Goal state: $(x_g, y_g) = (58, 38)$
- $d_{\text{safe}} = 0{,}5$ m
- $r_{\text{goal}} = +100$, $r_{\text{collision}} = -50$, $\beta = 1$, $\eta = 0{,}01$

**Langkah Perhitungan Q-Learning (3 iterasi pertama):**

*Episode 1, langkah 1:* Dari $s_1=(2,2)$, robot ambil $a_1=\text{maju}$, mencapai $s_2=(2,3)$ dengan $r=0{,}8$ (progress $0{,}99$ m tanpa collision). Inisialisasi $Q=0$.

$$Q(s_1,a_1) \leftarrow 0 + 0{,}1 \cdot [0{,}8 + 0{,}95 \cdot \max_{a'} 0 - 0] = 0{,}08$$

*Episode 1, langkah 2:* Dari $(2,3)$, $a_2=\text{maju}$ ke $(2,4)$ dengan $r=0{,}8$:

$$Q(s_2,a_2) \leftarrow 0 + 0{,}1 \cdot [0{,}8 + 0{,}95 \cdot 0 - 0] = 0{,}08$$

*Episode 1, langkah 3:* Dari $(2,4)$, $a_3=\text{belok kanan}$ ke $(3,4)$ dengan $r=0{,}85$:

$$Q(s_3,a_3) \leftarrow 0{,}085$$

*Episode 47, langkah terakhir:* Robot mencapai goal $(58,38)$ dengan $r=+100$, episode sukses. Backpropagation reward ke state sebelumnya:

$$Q(s_{T-1}, a_{T-1}) \leftarrow Q + 0{,}1 \cdot [100 + 0{,}95 \cdot 0 - 0{,}08] = 9{,}992$$

**Kalkulasi Total Episode sampai Konvergensi:**

Asumsikan success rate meningkat secara eksponensial, dengan target konvergensi $\epsilon < 10^{-3}$ untuk selisih max Q:

$$N_{\text{episodes}} \approx \frac{\log(\epsilon_0 / \epsilon)}{\log(1 - \alpha \cdot p)} = \frac{\log(0{,}5/0{,}001)}{\log(1 - 0{,}1 \cdot 0{,}05)} \approx 487 \text{ episode}$$

dengan $p = 0{,}05$ adalah probabilitas reward positif per langkah. Total langkah training: $487 \times 80 = 38.960$ langkah.

**Interpretasi Manajerial:** Dengan asumsi waktu siklus rata-rata berkurang dari 180 detik (manual AGV) menjadi 95 detik (AMR-RL), produktivitas *throughput* pickup harian meningkat:

$$\text{Throughput} = \frac{3600 \text{ s/jam} \cdot 16 \text{ jam/hari}}{95 \text{ s/order}} \cdot 12 \text{ robot} = 7.275 \text{ order/hari}$$

vs baseline: $\frac{3600 \cdot 16}{180} \cdot 12 = 3.840$ order/hari, yaitu **peningkatan 89,5%**. Dengan margin kontribusi Rp 8.500/order, *incremental profit* tahunan: $(7.275 - 3.840) \cdot