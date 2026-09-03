# 1764 — Perencanaan Gerak Otomatis dengan Reinforcement Learning untuk Sistem Multi-Agen Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mendorong permintaan masif terhadap *Autonomous Mobile Robots* (AMR) di sektor manufaktur, pergudangan, dan logistik. Rahul Kala (2024) dalam bab *Motion planning using reinforcement learning* dari buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan paling krusial dalam operasionalisasi AMR berskala industri. Permasalahan ini tidak terbatas pada navigasi titik-ke-titik, melainkan mencakup penghindaran rintangan dinamis, optimalisasi konsumsi energi, penjadwalan lintasan multi-agen, dan jaminan keselamatan pekerja di lingkungan *human-robot collaboration* (HRC).

Konteks industri yang melatarbelakangi penelitian ini sangat konkret. Menurut Kala (2024), pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR 23,5%, didorong oleh kelangkaan tenaga kerja, tuntutan akurasi tinggi pada *order fulfillment*, dan kebutuhan *throughput* 24/7 di pusat distribusi e-commerce. Dalam skenario *picker-to-parts* pada gudang otomatis, sebuah AMR dituntut meminimalkan *makespan* pick-list sambil menghindari tabrakan dengan rak, operator manusia, dan AMR lain. Metode perencanaan klasik seperti A*, D* Lite, atau RRT gagal secara fundamental ketika lingkungan bersifat stokastik—misalnya ketika distribusi pejalan kaki, perubahan layout, atau kegagalan sensor terjadi secara acak. Di sinilah *reinforcement learning* (RL) memberikan paradigma baru: agen belajar kebijakan optimal melalui interaksi dengan lingkungan tanpa memerlukan model eksplisit.

Kontribusi kedua yang relevan diberikan oleh Kaustav Borah (2024) dalam disertasinya *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Borah memperkenalkan arsitektur *Smart Autonomous Multi-agent Systems* (SAMAS) yang mengintegrasikan RL dengan *Fault Detection, Isolation, and Reconstruction* (FDIR). Bagi konteks Teknik Industri, signifikansi arsitektur ini terletak pada kemampuannya mempertahankan kelangsungan operasional ketika salah satu agen mengalami degradasi sensor, *actuator fault*, atau kegagalan komunikasi jaringan. Dengan demikian, kombinasi kedua literatur ini menyediakan kerangka holistik: Kala (2024) memberikan landasan algoritmik motion planning, sementara Borah (2024) melengkapi dengan lapisan keandalan sistem multi-agen yang relevan untuk lingkungan produksi mission-critical seperti pabrik semikonduktor, gudang farmasi, dan fasilitas energi.

Urgensi ekonomis implementasi RL-based motion planning semakin jelas ketika dihitung *Total Cost of Ownership* (TCO) selama 5 tahun: sistem AMR konvensional berbasis *rule-based* memerlukan rata-rata 2.400 jam-insinyur per tahun untuk *reprogramming* manual ketika layout berubah, sementara sistem RL yang telah melalui *offline training* cukup di-*fine-tune* dengan 80-120 jam *retraining*, menghasilkan *return on investment* 340% berdasarkan studi komparatif Kala (2024).

## 2. Landasan Teori & Formulasi Matematis

Kerangka matematis inti dari motion planning RL adalah *Markov Decision Process* (MDP) yang diformalisasikan Kala (2024) sebagai tuple $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana $\mathcal{S}$ adalah himpunan state, $\mathcal{A}$ adalah himpunan action, $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a)$ adalah reward function, dan $\gamma \in [0,1)$ adalah *discount factor*. Untuk AMR industri, state direpresentasikan sebagai $s_t = (x_t, y_t, \theta_t, v_t, d_t^{\text{obs}})$ dengan $(x_t, y_t)$ posisi kartesian, $\theta_t$ orientasi heading, $v_t$ kecepatan linier, dan $d_t^{\text{obs}}$ jarak ke rintangan terdekat hasil *lidar scan*.

Tujuan agen RL adalah menemukan kebijakan $\pi: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t R(s_t, a_t)\right]$$

Kala (2024) mendekomposisikan fungsi *value* ke dalam dua persamaan Bellman. Fungsi *state-value* $V^\pi(s)$ dan *action-value* $Q^\pi(s,a)$ berturut-turut didefinisikan sebagai:

$$V^\pi(s) = \sum_a \pi(a|s) \sum_{s'} P(s'|s,a)\left[R(s,a) + \gamma V^\pi(s')\right]$$

$$Q^\pi(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a) + \gamma \sum_{a'} \pi(a'|s') Q^\pi(s',a')\right]$$

Untuk aplikasi industri diskrit, algoritma **Q-learning** (model-free, off-policy) memperbarui tabel $Q$ dengan aturan:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)\right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Kala (2024) menekankan bahwa pada AMR nyata, *state space* kontinu berdimensi tinggi sehingga diperlukan *function approximation* berupa *Deep Q-Network* (DQN) dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta)\right)^2\right]$$

dengan $\theta^-$ adalah parameter *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* berukuran $N$.

Untuk reward function motion planning AMR, Kala (2024) mengusulkan *shaped reward* berbentuk:

$$R(s_t, a_t) = \begin{cases} +R_{\text{goal}} & \text{jika } \|p_t - p_{\text{goal}}\| \leq \epsilon \\ -R_{\text{collision}} & \text{jika } d_t^{\text{obs}} \leq d_{\text{safe}} \\ -\lambda_v \cdot v_t - \lambda_t \cdot \Delta t & \text{lainnya} \end{cases}$$

di mana $\lambda_v$ dan $\lambda_t$ adalah koefisien penalti konsumsi energi dan waktu. Pendekatan ini secara matematis selaras dengan *potential field* tradisional namun lebih *sample-efficient* karena diskon eksponensial $J(\pi)$.

Borah (2024) melengkapi kerangka ini dengan formulasi *nonlinear filtering* untuk estimasi state pada agen yang mengalami *fault*. Filter *Extended Kalman Filter* (EKF) yang digunakan untuk mengestimasi state $x_t$ dari observasi $z_t$ mengikuti:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t(z_t - h(\hat{x}_{t|t-1}))$$

dengan *Kalman gain* $K_t = P_{t|t-1} H_t^T (H_t P_{t|t-1} H_t^T + R_t)^{-1}$. Integrasi EKF-RL ini menjamin bahwa jika sensor *lidar* mengalami *degradation fault* (misalnya salah satu beam gagal), agen masih dapat melakukan *reconfiguration* lintasan melalui mekanisme FDIR Borah (2024). Dengan demikian, formulasi matematis gabungan $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ milik Kala (2024) dan lapisan observasi $h(\cdot)$ milik Borah (2024) menghasilkan arsitektur *robust RL* yang siap untuk lantai produksi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lingkungan industri mengikuti SOP enam-tahap yang dikonsolidasikan dari kedua literatur.

**Tahap 1 — Pemetaan dan Diskretisasi Lingkungan.** Lantai pabrik dipetakan ke dalam *occupancy grid* resolusi 0,1 m menggunakan SLAM (Simultaneous Localization and Mapping). Sel kosong $\mathcal{S}_{\text{free}}$, sel terlarang $\mathcal{S}_{\text{obs}}$, dan *inflated obstacle* dengan margin 0,3 m didefinisikan untuk memenuhi standar ISO 3691-4:2020 tentang keselamatan AMR.

**Tahap 2 — Definisi MDP.** State $s_t$, action $a_t \in \{0°, \pm 15°, \pm 30°\}$, reward $R$ diformulasikan mengikuti persamaan di Bagian 2. Discretization ini menurunkan dimensi state dari $\sim 10^6$ menjadi $\sim 10^4$ state aktif per episode, cukup untuk konvergensi DQN dalam 500.000 langkah.

**Tahap 3 — Offline Training (Sim-to-Real).** Model dilatih di simulator Gazebo/Unity dengan *domain randomization*: variasi koefisien gesekan $\mu \in [0,4; 0,9]$, latency sensor $\tau \in [10, 80]$ ms, dan *false-positive obstacle* untuk memastikan kebijakan robust saat di-deploy ke AMR fisik (Kala, 2024).

**Tahap 4 — Validasi dengan Nonlinear Filter.** Sebelum deployment, observasi sensor dilewatkan ke EKF Borah (2024) untuk memastikan estimasi state tetap *bounded* pada $\pm 0,05$ m dari ground truth. *Innovation sequence* $\nu_t = z_t - h(\hat{x}_{t|t-1})$ diuji dengan *chi-square test* $\chi^2_\alpha = 7,815$ (df=3, $\alpha=0,05$).

**Tahap 5 — Online Fine-tuning.** Setelah deployment, agen menjalani *continual learning* dengan *experience replay* prioritas. Parameter $\alpha$ dan $\gamma$ disesuaikan melalui *Bayesian optimization* menggunakan metrik *safety violation rate* (SVR) sebagai fungsi objektif.

**Tahap 6 — Audit dan Pemeliharaan.** Setiap 250 jam operasional, dilakukan *retraining* penuh dan *regression testing* terhadap 100 skenario kritis (fire, blackout, agen FDIR failure) sesuai protokol Borah (2024). SOP ini terintegrasi dengan standar ANSI/RIA R15.08-1 untuk AMR industri.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Gudang e-commerce 50 × 30 m dengan 200 rak, 8 AMR kapasitas 50 kg, target pick-rate 240 picks/jam. Kita hitung kinerja Q-learning setelah $T = 10.000$ episode dengan $\alpha = 0,1$, $\gamma = 0,95$.

**Parameter Awal:**
- $R_{\text{goal}} = +100$, $R_{\text{collision}} = -200$
- $\lambda_v = 0,5$ per m/detik, $\lambda_t = 1,0$ per detik
- $\epsilon$-goal radius = 0,3 m, $d_{\text{safe}}$ = 0,4 m
- Action set: $\{a_0 = \text{stop}, a_1 = \text{depan}, a_2 = \text{belok-kanan}, a_3 = \text{belok-kiri}\}$

**Langkah 1 — Episode 1 (Eksplorasi Awal):** Agen memilih $a_1$ dari start $(0,0)$ menuju goal $(15, 0)$. Tabrakan di $t = 12$ s karena $d_t^{\text{obs}} = 0,35 < 0,4$. Reward total:
$$R_{\text{ep1}} = -200 + \sum_{t=0}^{11}(-\lambda_t \cdot 1) = -200 - 12 = -212$$

**Langkah 2 — Pembaruan Q-value (transisi terakhir sebelum tabrakan, $s_{11}, a_1 \rightarrow s_{12}$):**
$$Q(s_{11}, a_1) \leftarrow Q(s_{11}, a_1) + 0,1[-1 + 0,95 \cdot \max_{a'} Q(s_{12}, a') - Q(s_{11}, a_1)]$$
Dengan asumsi $\max Q(s_{12}, \cdot) = 0$ (state terminal collision), dan $Q_{\text{init}} = 0$:
$$Q(s_{11}, a_1) = 0 + 0,1 \cdot [-1 + 0 - 0] = -0,1$$

**Langkah 3 — Episode 5.000 (Kebijakan Mulai Stabil):** Rata-rata reward per episode naik menjadi $R_{\text{ep5000}} = +58,