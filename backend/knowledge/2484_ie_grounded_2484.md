# 2484 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mengubah secara fundamental arsitektur operasional lantai produksi, logistik, dan rantai pasok global. Unit-unit manufaktur modern — mulai dari Automated Storage and Retrieval Systems (AS/RS) hingga konveyor pintar dan armada AGV (Automated Guided Vehicle) — tidak lagi dapat direkayasa dengan pemodelan deterministik klasik semata. Kala (2024) dalam bab "*Motion planning using reinforcement learning*" yang dimuat pada buku *Autonomous Mobile Robots* (Elsevier, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menekankan bahwa permasalahan perencanaan gerak (*motion planning*) pada robot otonom merupakan masalah keputusan sekuensial di bawah ketidakpastian lingkungan, yang secara natural diformulasikan sebagai *Markov Decision Process* (MDP). Dalam konteks industri, ini berarti sebuah AGV yang beroperasi di gudang e-commerce dengan 5.000 *pick locations* harus mampu membuat keputusan navigasi secara *real-time* dengan horizon perencanaan yang panjang, di tengah dinamika pesanan (*order arrival rate* mengikuti proses Poisson nonstasioner) dan keberadaan operator manusia.

Urgensi ekonominya sangat nyata. Menurut proyeksi yang dikutip secara konsisten dalam literatur otomasi industri, biaya downtime pada lini produksi bernilai sekitar \$10.000–\$250.000 per jam tergantung sektor, dan inefisiensi routing AGV menyumbang 8–15% dari total *material handling cost* pada fasilitas *goods-to-person* modern. Kala (2024) menunjukkan bahwa pendekatan classical motion planning — seperti *Rapidly-exploring Random Tree* (RRT), *Probabilistic Roadmap* (PRM), dan A* — memiliki kelemahan struktural ketika menghadapi lingkungan *dynamic* (pejalan kaki, rak yang berpindah, palletizer yang sedang beroperasi) karena re-planning penuh harus dilakukan setiap kali obstacle berubah. Di sinilah *Reinforcement Learning* (RL) menjadi paradigma disruptif: agen belajar *policy* optimal π(a|s) yang memetakan state ke action melalui interaksi trial-and-error, sehingga mampu meng-*approximate* strategi navigasi yang robust terhadap perubahan lingkungan tanpa rekayasa ulang manual.

Borah (2024) dalam disertasinya "*Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*" (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas perspektif ini ke level sistem. Borah berargumen bahwa dalam sistem rekayasa modern — jaringan sensor, aktuator, *controller*, dan *communication network* — kebutuhan akan *Fault Detection, Isolation, and Reconstruction* (FDIR) menjadi kritis. Sistem multi-agen otonom (Smart Autonomous Multi-Agent Systems / SAMAS) yang dirancang Borah mengintegrasikan *nonlinear filtering* (Extended Kalman Filter, Particle Filter) untuk estimasi state dengan modul RL untuk kebijakan kontrol tingkat tinggi. Sinergi ini memungkinkan agen tidak hanya merencanakan gerak, tetapi juga mendiagnosis kegagalan sensor, mengisolasi lokasi *fault*, dan merekonstruksi operasi sistem secara otonom.

Relevansi industri langsung modul ini mencakup: (1) optimalisasi *order picking* di pusat distribusi; (2) *coordinated fleet management* pada armada AGV/AMR (Autonomous Mobile Robot) di pabrik *semiconductor* dengan *cleanroom class* ISO 3; (3) sistem *collaborative robot* (cobot) pada lini perakitan yang harus menghindari kontak berbahaya dengan manusia; serta (4) *last-mile delivery* dengan robot otonom di lingkungan urban. Kala (2024) dan Borah (2024) bersama-sama memberikan kerangka pikir bahwa *motion planning* bukan lagi persoalan geometris terpisah, melainkan masalah kontrol optimal stokastik yang harus diselesaikan dalam *closed-loop* dengan toleransi *fault* yang terdefinisi formal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Motion Planning sebagai MDP

Kala (2024) merumuskan masalah perencanaan gerak sebagai tuple MDP $\mathcal{M} = (\mathcal{S}, \mathcal{A}, P, R, \gamma)$, di mana:

- $\mathcal{S}$ adalah himpunan state kontinu atau diskret yang merepresentasikan konfigurasi robot (posisi $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan angular $\omega$).
- $\mathcal{A}$ adalah himpunan aksi (misalnya perintah motor penggerak roda differential).
- $P(s'|s,a)$ adalah fungsi transisi probabilistik yang memodelkan dinamika lingkungan.
- $R: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$ adalah *reward function*.
- $\gamma \in [0,1)$ adalah *discount factor* yang mengontrol horizon penilaian reward masa depan.

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman Optimalitas**:

$$
V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^*(s') \right]
$$

dan *optimal policy* $\pi^*(s) = \arg\max_{a} Q^*(s,a)$, di mana $Q^*(s,a)$ adalah *action-value function*:

$$
Q^*(s,a) = R(s,a) + \gamma \sum_{s'} P(s'|s,a) \max_{a'} Q^*(s', a')
$$

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk state space berdimensi tinggi (misalnya peta gudang 100×100 grid dengan rak dinamis), Kala (2024) menjelaskan bahwa tabel Q tidak lagi feasible sehingga digunakan approximator fungsi $Q(s,a;\theta)$ berupa *deep neural network* dengan bobot $\theta$. *Loss function* yang diminimalkan adalah:

$$
L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^{-}) - Q(s,a;\theta) \right)^2 \right]
$$

di mana $\theta^{-}$ adalah parameter dari *target network* yang di-*update* periodik untuk menstabilkan training, dan $\mathcal{D}$ adalah *replay buffer* berukuran $N$.

### 2.3 Policy Gradient dan Actor-Critic

Untuk aksi kontinu (kontrol kecepatan dan steering secara *smooth*), Kala (2024) menggunakan parametrized stochastic policy $\pi_{\theta}(a|s)$ dengan algoritma *Proximal Policy Optimization* (PPO). *Objective function* PPO dengan *clipping* adalah:

$$
L^{CLIP}(\theta) = \mathbb{E}_t \left[ \min\left( r_t(\theta) A_t, \; \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) A_t \right) \right]
$$

dengan $r_t(\theta) = \frac{\pi_{\theta}(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ dan *advantage estimate* $A_t = \sum_{i=0}^{T-t} (\gamma\lambda)^i \delta_{t+i}$, di mana $\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$ adalah *temporal difference error*.

### 2.4 Nonlinear Filtering untuk Estimasi State pada Multi-Agen

Borah (2024) menambahkan lapisan estimasi state melalui *nonlinear filtering*. Untuk sistem nonlinier dengan model state-space:

$$
x_{k+1} = f(x_k, u_k) + w_k, \quad y_k = h(x_k) + v_k
$$

di mana $w_k \sim \mathcal{N}(0, Q_k)$ dan $v_k \sim \mathcal{N}(0, R_k)$, **Extended Kalman Filter (EKF)** melakukan linierisasi melalui Jacobian:

$$
F_k = \left. \frac{\partial f}{\partial x} \right|_{\hat{x}_k}, \quad H_k = \left. \frac{\partial h}{\partial x} \right|_{\hat{x}_k^{-}}
$$

dengan langkah prediksi dan update standar. Untuk kasus non-Gaussian berat yang relevan pada lingkungan industri dengan sensor Lidar terpengaruh debu/debu cleanroom, Borah (2024) merekomendasikan **Particle Filter** dengan *Sequential Importance Resampling*:

$$
p(x_k | y_{1:k}) \approx \sum_{i=1}^{N_p} w_k^{(i)} \delta(x_k - x_k^{(i)})
$$

dengan bobot $w_k^{(i)} \propto w_{k-1}^{(i)} p(y_k | x_k^{(i)})$.

### 2.5 Consensus dan Pembelajaran Multi-Agen Terdistribusi

Pada SAMAS, Borah (2024) merumuskan masalah konsensus sebagai:

$$
\lim_{t \to \infty} \| x_i(t) - x_j(t) \| = 0, \quad \forall i,j \in \mathcal{V}
$$

untuk graf komunikasi $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ dengan adjacency matrix $A$ dan Laplacian $L = D - A$. Protokol konsensus:

$$
\dot{x}_i(t) = -\sum_{j \in \mathcal{N}_i} a_{ij}(x_i(t) - x_j(t))
$$

Konsensus tercapai jika $\text{Re}(\lambda_i(L)) > 0$ untuk semua $i$ kecuali satu eigenvalur nol yang merepresentasikan mode rata-rata.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi modul 2484 pada fasilitas industri mengikuti kerangka SOP berlapis yang mengadopsi metodologi Kala (2024) dan Borah (2024). Tahapan-tahapannya adalah sebagai berikut:

### 3.1 Pemodelan Lingkungan dan Digital Twin

1. **Akuisisi peta** menggunakan SLAM (*Simultaneous Localization and Mapping*) berbasis Lidar 2D/3D dengan resolusi grid 0,1 m.
2. **Konstruksi Digital Twin** fasilitas di dalam simulator Gazebo atau NVIDIA Isaac Sim untuk melatih agen RL secara paralel.
3. **Identifikasi zona kritis**: jalur evakuasi (ISO 3691-4), area eksklusif manusia (collaborative workspace), dan zona *no-go* (panel listrik, tangki kimia).

### 3.2 Desain Reward Function

Reward function $R(s,a)$ dirancang mengikuti prinsip *shaping* bertahap Kala (2024):

$$
R(s,a) = \underbrace{r_{goal} \cdot \mathbb{1}_{\text{goal}}}_{\text{tujuan tercapai}} + \underbrace{r_{collision} \cdot \mathbb{1}_{\text{collision}}}_{\text{penalisasi tabrakan}} + \underbrace{r_{time} \cdot \Delta t}_{\text{penalisasi waktu}} + \underbrace{r_{smooth} \cdot (1 - \sigma(\Delta\theta))}_{\text{insentif manuver halus}}
$$

dengan parameter tipikal: $r_{goal} = +100$, $r_{collision} = -50$, $r_{time} = -0{,}1/\text{detik}$, $r_{smooth} = +0{,}5$.

### 3.3 Arsitektur Training

- **Hardware**: GPU NVIDIA RTX 4090 / A100; training paralel 256 environment instance.
- **Software stack**: Python 3.11, PyTorch 2.1, Stable-Baselines3, ROS 2 Humble untuk deployment.
- **Hyperparameter** mengikuti saran Kala (2024): learning rate $\alpha = 3 \times 10^{-4}$, *batch size* $B = 256$, $\gamma = 0{,}99$, *target update* setiap 10.000 langkah.

### 3.4 Integrasi FDIR (Borah 2024)

Modul deteksi anomali sensor dipasang secara paralel:

$$
\hat{y}_k = h(\hat{x}_k); \quad \text{residual } r_k = y_k - \hat{y}_k; \quad \text{alarm jika } r_k^T S_k^{-1} r_k > \chi^2_{d, \alpha}
$$

di mana $S_k$ adalah kovarians residual dan $\chi^2_{d,\alpha}$ adalah threshold statistik chi-square dengan derajat kebebasan $d$ dan signifikansi $\alpha = 0{,}01$.

### 3.5 SOP Penyebaran (Deployment)

| Tahap | Aktivitas | Output | Standar Acuan |
|-------|-----------|--------|----------------|
| 1 | Validasi simulator | Baseline match ≥ 95% dengan track nyata | ISO 10218-1 |
| 2 | Shadow mode (2 minggu) | Logging keputusan tanpa eksekusi | Internal QA |
| 3 | Supervised mode (4 minggu) | Operator override aktif | IEC 61508 SIL 2 |
|