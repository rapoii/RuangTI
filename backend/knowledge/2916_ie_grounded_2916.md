# 2916 — Motion Planning dengan Reinforcement Learning untuk Robot Otonom dan Sistem Multi-Agen Cerdas pada Lingkungan Manufaktur dan Logistik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era Revolusi Industri 4.0, permintaan terhadap sistem otonom yang mampu beroperasi di lingkungan manufaktur dan logistik telah meningkat secara eksponensial. Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa **motion planning** atau perencanaan gerak merupakan salah satu tantangan paling fundamental dalam robotika otonom, karena robot dituntut untuk menemukan lintasan bebas-tabrakan dari konfigurasi awal ke konfigurasi tujuan dalam ruang kerja yang statis maupun dinamis. Permasalahan ini menjadi semakin relevan ketika diterapkan pada *Automated Guided Vehicle* (AGV), *Autonomous Mobile Robot* (AMR), dan armada robot kolaboratif di lini produksi modern.

Konteks industri yang melatarbelakangi kebutuhan ini sangat mendesak. Pertama, dari sisi ekonomi, biaya tenaga kerja di sektor logistik dan manufaktur global terus meningkat, dengan rata-rata *order picking cost* di gudang konvensional mencapai USD 3,50–5,00 per item (praktik industri 2023–2024), sementara implementasi AMR dapat menurunkannya hingga 40%. Kedua, kompleksitas operasional meningkat seiring penerapan *mass customization*, di mana lintasan produksi harus adaptif terhadap perubahan SKU dan layout. Ketiga, Kaustav Borah (2024) dalam disertasinya tentang **Smart Autonomous Multi-Agent Systems (SAMAS)** (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) menyoroti bahwa sistem multi-agen modern menghadapi potensi malfungsi pada sensor, aktuator, dan jaringan komunikasi, sehingga membutuhkan arsitektur *Fault Detection, Isolation, and Reconstruction* (FDIR) yang cerdas.

Pendekatan konvensional motion planning seperti A*, Dijkstra, dan Rapidly-exploring Random Tree (RRT) memerlukan pemodelan lingkungan secara eksplisit dan sulit beradaptasi terhadap perubahan dinamis. Sebaliknya, **Reinforcement Learning** (RL) memungkinkan agen robot untuk *belajar* kebijakan navigasi optimal melalui interaksi berulang dengan lingkungan, tanpa memerlukan peta global yang lengkap. Kala (2024) mendemonstrasikan bahwa integrasi RL dengan *nonlinear filtering* (misalnya Extended Kalman Filter dan Particle Filter) yang dibahas Borah (2024) menghasilkan sistem yang robust terhadap derau sensor dan dinamika lingkungan yang tidak stasioner — sebuah kebutuhan kritis pada lantai pabrik dengan interferensi elektromagnetik dan oklusi sensor LiDAR. Oleh karena itu, modul ini membahas secara mendalam formulasi matematis, implementasi prosedural, dan studi kasus kuantitatif motion planning berbasis RL untuk aplikasi industri nyata.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Markov Decision Process (MDP)

Kala (2024) dan Borah (2024) secara konsisten memformulasikan permasalahan motion planning dalam kerangka **Markov Decision Process** (MDP), yang didefinisikan sebagai tuple:

$$\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$$

di mana:
- $\mathcal{S}$ = himpunan state (konfigurasi robot dalam ruang kerja)
- $\mathcal{A}$ = himpunan action (perintah gerak diskret atau kontinu)
- $P(s'|s,a)$ = probabilitas transisi dari state $s$ ke state $s'$ akibat action $a$
- $R(s,a,s')$ = reward function sesaat
- $\gamma \in [0,1)$ = discount factor untuk nilai reward masa depan

### 2.2. Persamaan Bellman

Nilai optimal suatu state kebijakan $\pi$ didefinisikan melalui **Bellman Optimality Equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

Untuk masalah motion planning, Kala (2024) merepresentasikan $V^*(s)$ sebagai jarak atau biaya minimum yang diharapkan untuk mencapai goal state dari konfigurasi $s$ sembarang.

### 2.3. Q-Learning Update Rule

Algoritma *model-free* yang paling banyak diterapkan untuk motion planning diskret adalah Q-Learning, dengan *update rule*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Kala (2024) menunjukkan bahwa untuk lingkungan dengan dimensi state tinggi (continuous spaces), digunakan arsitektur **Deep Q-Network** (DQN) dengan fungsi aproksimasi $Q(s,a;\theta)$ yang dioptimasi melalui minimisasi *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang di-*update* periodik untuk menstabilkan training.

### 2.4. Policy Gradient untuk Aksi Kontinu

Untuk robot dengan ruang aksi kontinu (kecepatan linear dan angular), algoritma **Deep Deterministic Policy Gradient** (DDPG) lebih sesuai:

$$\nabla_\theta J(\theta) = \mathbb{E}_{s \sim \rho^\pi} \left[ \nabla_\theta \mu_\theta(s) \, \nabla_a Q^\mu(s,a) \big|_{a=\mu_\theta(s)} \right]$$

dengan kebijakan deterministik $\mu_\theta: \mathcal{S} \rightarrow \mathcal{A}$.

### 2.5. Nonlinear Filtering untuk Estimasi State

Borah (2024) melengkapi kerangka di atas dengan **Extended Kalman Filter** (EKF) untuk menangani nonlinieritas pada model gerak robot:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

di mana $K_k$ adalah Kalman gain yang memperbarui estimasi state $\hat{x}_{k|k}$ berdasarkan pengukuran sensor $z_k$ dan matriks observasi $H$. Integrasi EKF dengan RL menghasilkan sistem yang tahan terhadap derau sensor dan *fault* pada aktuator sesuai arsitektur FDIR yang diajukan Borah.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP berlapis berikut, yang disintesis dari Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Lingkungan dan Discretization.** Ruang kerja AGV dimodelkan sebagai *occupancy grid* 2D dengan resolusi $\Delta = 0{,}5$ m (sesuai ISO 3691-4 untuk AGV). Tiap cell direpresentasikan sebagai state $s \in \{0,1\}^{n \times m}$ di mana nilai 1 menandakan obstacle.

**Tahap 2 — Definisi Reward Function.** Kala merekomendasikan reward sparse dengan *positive reward* $+R_g = +100$ saat mencapai goal, *negative reward* $R_c = -10$ saat collision, dan *step penalty* $R_s = -1$ untuk tiap time-step. Formulasi:

$$R(s,a,s') = \begin{cases} +R_g & \text{jika } s' = s_{goal} \\ R_c & \text{jika } s' \in \mathcal{O} \\ R_s & \text{lainnya} \end{cases}$$

**Tahap 3 — Inisialisasi dan Training.** Inisialisasi Q-table secara acak $\sim \mathcal{U}(-0{,}01, 0{,}01)$, kemudian jalankan $\epsilon$-greedy policy dengan $\epsilon$-decay dari 1,0 ke 0,05 selama $N_{episodes} = 5000$.

**Tahap 4 — Integrasi dengan Nonlinear Filter.** Borah menyarankan penyisipan EKF antara pembacaan sensor dan input state ke agen RL untuk menangani derau LiDAR dan *wheel odometry* (typical SNR ≈ 15–25 dB pada lingkungan manufacturing).

**Tahap 5 — Validasi dan Deployment.** Uji kebijakan di *digital twin* sebelum deployment di lini produksi, dengan metrik: *success rate* ≥ 95%, *average path length* ≤ 1,3 × panjang lintasan optimal, dan *collision rate* < 0,1%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Skenario

Sebuah fasilitas manufaktur elektronik di kawasan industri Cikarang memiliki AGV yang harus berpindah dari *charging station* (titik A) ke workstation perakitan (titik B) pada grid 5×5. Layout障碍 disederhanakan sebagai berikut:

| Parameter | Nilai |
|---|---|
| Dimensi grid | 5 × 5 cells (25 states) |
| Aksi | 4 (N, S, E, W) |
| Start state $s_0$ | (0,0) |
| Goal state $s_g$ | (4,4) |
| Obstacle states $\mathcal{O}$ | {(2,2), (2,3), (3,2)} |
| $\alpha$ (learning rate) | 0,10 |
| $\gamma$ (discount factor) | 0,90 |
| $\epsilon$ (exploration) | 0,10 |
| Reward goal $R_g$ | +100 |
| Reward collision $R_c$ | −10 |
| Step penalty $R_s$ | −1 |

### 4.2. Langkah Perhitungan Q-Learning Episode Pertama

Misalkan pada episode 1, agen berada di $s_t = (0,0)$, memilih aksi $a_t = E$ (East), berpindah ke $s_{t+1} = (0,1)$, dengan reward $r_{t+1} = -1$. Q-table awal: $Q((0,0),E) = 0{,}00$.

**Langkah 1:** Hitung nilai target TD:

$$\text{TD target} = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') = -1