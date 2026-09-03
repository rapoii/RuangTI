# 1572 — Perencanaan Gerak (Motion Planning) Otonom Berbasis Reinforcement Learning untuk Sistem Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 mendorong adopsi masif *Autonomous Mobile Robots* (AMR) di lini produksi, pergudangan, logistik, dan fasilitas manufaktur pintar. Menurut Kala (2024) dalam bab buku *Autonomous Mobile Robots*, perencanaan gerak (*motion planning*) merupakan salah satu subsistem paling krusial yang menentukan keberhasilan operasional AMR, karena robot harus mampu memutuskan lintasan secara adaptif di lingkungan yang bersifat *stochastic*, *partially observable*, dan terus berubah akibat pergerakan manusia, palet, maupun robot lain (Kala, 2024; DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Konteks industri yang melatarbelakangi urgensi topik ini sangat kuat. Pertama, pasar AMR global diproyeksikan melampaui USD 8 miliar pada 2030 dengan CAGR di kisaran 18–22%, didorong oleh *e-commerce fulfillment*, *dark store*, dan *smart factory*. Kedua, metode perencanaan klasik seperti A*, RRT, PRM, dan potential field menunjukkan degradasi performa signifikan ketika lingkungan berubah secara dinamis—tepat di mana reinforcement learning (RL) menawarkan keunggulan struktural. Ketiga, di lingkungan *multi-robot*, koordinasi menjadi *non-trivial problem* karena harus memperhitungkan interferensi lintas agen. Disertasi Borah (2024) menekankan bahwa sistem otonom modern harus dilengkapi *Fault Detection, Isolation, and Reconstruction* (FDIR) agar keandalan operasional dapat dijaga ketika salah satu agen mengalami degradasi sensor, aktuator, atau kontroller (Borah, 2024; DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

Secara ekonomis, downtime AMR di pusat distribusi modern berkisar USD 1.500–3.000 per jam per robot, sehingga peningkatan *success rate* perencanaan gerak dari 92% menjadi 98% akan memberikan *savings* signifikan. Secara teknis, tantangan utama yang diidentifikasi Kala (2024) meliputi: (i) *curse of dimensionality* pada ruang state kontinu, (ii) eksplorasi–eksploitasi trade-off, (iii) *sample inefficiency* RL klasik, dan (iv) *sim-to-real gap* saat transfer kebijakan dari simulator ke robot fisik. Paper Kala (2024) secara khusus mengargumentasikan bahwa formulasi RL memungkinkan *closed-loop motion planning* yang reaktif terhadap perubahan lingkungan real-time, berbeda dengan *open-loop trajectory* dari metode konvensional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) merumuskan masalah motion planning sebagai MDP tuple $\mathcal{M} = (\mathcal{S}, \mathcal{A}, P, R, \gamma)$, di mana:

- $\mathcal{S}$ : himpunan state (konfigurasi robot + persepsi lingkungan)
- $\mathcal{A}$ : himpunan aksi (perintah kecepatan linear $v$ dan angular $\omega$)
- $P(s_{t+1} \mid s_t, a_t)$ : probabilitas transisi state
- $R: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$ : fungsi reward
- $\gamma \in [0,1)$ : discount factor

Untuk lingkungan dengan sensor terbatas, formulasi diperluas menjadi Partially Observable MDP (POMDP), di mana agen menerima observasi $o_t \in \Omega$ alih-alih state penuh, dan harus mempertahankan *belief state* $b_t$:

$$b_{t+1}(s') = \eta \cdot O(o_{t+1} \mid s') \sum_{s \in \mathcal{S}} P(s' \mid s, a_t) b_t(s)$$

dengan $\eta$ sebagai normalizer dan $O(o \mid s)$ sebagai *observation likelihood*.

### 2.2 Fungsi Nilai dan Persamaan Bellman

Tujuan RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimumkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k})$$

State-value function didefinisikan sebagai:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k}) \mid s_t = s\right]$$

dan memenuhi persamaan Bellman:

$$V^{\pi}(s) = \sum_{a \in \mathcal{A}} \pi(a \mid s) \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s' \mid s,a) V^{\pi}(s') \right]$$

### 2.3 Algoritma Q-Learning dan Deep Q-Network (DQN)

Untuk diskretisasi ruang state–action, Kala (2024) membahas Q-learning dengan *update rule*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

Ketika state bersifat kontinu (misalnya posisi $(x,y)$ dan heading $\theta$ robot), digunakan DQN dengan *function approximator* $Q(s,a;\theta)$ dan *replay buffer* $\mathcal{D}$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

dengan $\theta^-$ sebagai parameter *target network* yang di-update secara periodik.

### 2.4 Konfigurasi Ruang (*Configuration Space*)

Ruang konfigurasi $\mathcal{C}$ didefinisikan sebagai:

$$\mathcal{C} = \mathcal{C}_{\text{free}} \cup \mathcal{C}_{\text{obs}}$$

di mana $\mathcal{C}_{\text{obs}} = \{ q \in \mathcal{C} \mid A(q) \cap O \neq \emptyset \}$ dengan $A(q)$ adalah volume robot pada konfigurasi $q$ dan $O$ adalah rintangan. Robot harus merencanakan lintasan $\tau: [0,T] \rightarrow \mathcal{C}_{\text{free}}$.

### 2.5 Reward Function untuk Navigasi

Kala (2024) mengusulkan reward function komposit:

$$R(s_t, a_t) = R_{\text{goal}} + R_{\text{collision}} + R_{\text{proximity}} + R_{\text{smooth}}$$

dengan komponen tipikal:
- $R_{\text{goal}} = +100$ saat mencapai target
- $R_{\text{collision}} = -50$ saat terjadi kontak dengan rintangan
- $R_{\text{proximity}} = -0.5 \cdot d^{-1}_{\min}$ untuk menjaga jarak aman
- $R_{\text{smooth}} = -0.1 \cdot |\Delta \omega_t|$ untuk mengendalikan *jerk*

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan motion planning berbasis RL di industri mengikuti SOP berlapis berikut, yang disintesis dari Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Lingkungan.** Bangun *digital twin* pabrik dalam simulator (Gazebo, Isaac Sim, atau Unity ML-Agents) dengan akurasi sensor LiDAR 2D/3D $\pm 0.02$ m, dan presisi odometri $\pm 0.5\%$.

**Tahap 2 — Diskretisasi & Feature Engineering.** Tentukan state space $\mathcal{S} = \{x, y, \theta, v, \omega, d_{\text{front}}, d_{\text{left}}, d_{\text{right}}\}$ dan action space $\mathcal{A} = \{v \in [0, 1.5] \text{ m/s}, \omega \in [-1.0, 1.0] \text{ rad/s}\}$.

**Tahap 3 — Inisialisasi & Pelatihan.** Inisialisasi replay buffer $\mathcal{D}$ kapasitas 100.000 tuple. Latih dengan $\epsilon$-greedy ($\epsilon_{\text{start}} = 1.0$, $\epsilon_{\text{end}} = 0.05$, *decay* 0.995 per episode), learning rate $\alpha = 10^{-4}$, batch size 64, selama 500.000–1.000.000 langkah.

**Tahap 4 — Validasi Sim-to-Real.** Gunakan *domain randomization* (variasi koefisien gesekan $\mu \in [0.3, 0.8]$, latensi sensor 50–150 ms) dan *fine-tuning* dengan 5.000 langkah data dunia nyata.

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Pasang modul *nonlinear filtering* (Extended Kalman Filter / Unscented Kalman Filter) untuk estimasi state, dan RL kedua (hierarchical) untuk *fault-aware replanning* ketika residual filter melebihi threshold $\chi^2_{0.95}$.

**Tahap 6 — Audit Operasional.** Terapkan KPI: *success rate* $\geq 98\%$, *average path length ratio* $\leq 1.15$ (vs. path optimal), *collision rate* $\leq 0.1$ per 1.000 misi, dan *MTBF* $\geq 2.000$ jam.

Standar acuan yang relevan meliputi ISO 3691-4 (AMR safety), ISO/TS 15066 (kolaborasi robot–manusia), dan ASTM F45 (ujian AMR).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AMR di gudang *e-commerce* dengan target memindahkan pallet dari *pick station* A $(x_A, y_A) = (0, 0)$ ke *drop station* B $(x_B, y_B) = (20, 15)$ meter, di antara 12 rintangan statis dan 3 rintangan dinamis (pejalan kaki).

**Parameter Input Industri:**

| Parameter | Nilai |
|---|---|
| $v_{\max}$ | 1.2 m/s |
| $\omega_{\max}$ | 0.8 rad/s |
| $\Delta t$ | 0.1 s |
| $\gamma$ | 0.99 |
| $\alpha$ (lr) | $5 \times 10^{-4}$ |
| Jarak aman $d_{\text{safe}}$ | 0.35 m |
| Batas episode | 1.000 langkah |

**Komputasi Reward satu Langkah (Step ke-$t$):**

Misalkan state $s_t$: posisi $(5.3, 2.1)$ m, jarak ke rintangan terdekat $d_{\min} = 0.62$ m, jarak ke target $d_g = \sqrt{(20-5.3)^2 + (15-2.1)^2} = 19.61$ m, $\Delta \omega = 0.12$ rad/s.

$$R_t = \underbrace{0}_{\text{bukan goal}} + \underbrace{0}_{\text{bukan collision}} + \underbrace{-0.5 \cdot \frac{1}{0.62}}_{\text{proximity}} + \underbrace{-0.1 \cdot 0.12}_{\text{smooth}}$$

$$R_t = -0.806 - 0.012 = -0.818$$

**Estimasi Episode Return dengan Kebijakan Acuan (Euclidean distance):**

Waktu tempuh optimal secara Euclidean: $T_{\text{euclid}} = \frac{\sqrt{20^2 + 15^2}}{1.2} = \frac{25.0}{1.2} \approx 20.83