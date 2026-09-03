# 2724 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Menggunakan Reinforcement Learning dalam Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 telah mengubah secara fundamental arsitektur operasional manufaktur dan rantai pasok global, di mana Autonomous Mobile Robots (AMR) menjadi tulang punggung sistem material handling, intralogistik, dan produksi fleksibel. Rahul Kala (2024) dalam capítulo "Motion planning using reinforcement learning" yang diterbitkan pada *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menekankan bahwa kemampuan AMR untuk bernavigasi secara otonom di lingkungan industri yang dinamis—seperti gudang *e-commerce* dengan tingkat inventaris turnover harian mencapai 10.000–50.000 unit per fasilitas—menjadi penentu langsung terhadap *Order Fulfillment Cycle Time*, *pick accuracy*, dan *labor productivity*. Kala berargumen bahwa motion planning konvensional berbasis algoritma graf deterministik seperti A*, D*, atau Rapidly-exploring Random Tree (RRT) memiliki keterbatasan inheren ketika menghadapi *non-stationary environments* yang dipenuhi oleh pejalan kaki, forklift manual, dan perubahan tata letak rak secara *real-time*.

Konteks industri yang melatarbelakangi adopsi reinforcement learning (RL) untuk motion planning sangat mendesak. Pertama, biaya operasional gudang modern mencapai USD 5–15 per kaki persegi per tahun, sehingga setiap detik keterlambatan konvoi AMR berdampak langsung pada margin EBITDA. Kedua, dinamika permintaan *same-day delivery* mengharuskan AMR beroperasi selama 20–24 jam per hari dengan *mean time between failures* (MTBF) minimum 5.000 jam. Ketiga, integrasi AMRs dalam *Smart Autonomous Multi-Agent Systems* (SAMAS) yang dikaji Borah (2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) mensyaratkan arsitektur *Fault Detection, Isolation, and Reconstruction* (FDIR) yang mampu mempertahankan kontinuitas operasional meskipun salah satu agen mengalami degradasi fungsi sensor atau aktuator. Urgensi ini diperkuat oleh proyeksi pasar global AMR yang bernilai USD 4,9 miliar pada 2024 dan diproyeksikan mencapai USD 15,5 miliar pada 2030 (CAGR ≈ 21%), sehingga rekayasa motion planning yang skalabel, adaptif, dan resilient menjadi *core competency* engineering industri masa depan.

Secara operasional, motion planning dengan RL menjawab tiga masalah kritikal: (1) bagaimana agen belajar kebijakan navigasi optimal melalui interaksi trial-and-error tanpa *explicit programming*; (2) bagaimana menyeimbangkan eksplorasi state space yang belum dikunjungi dengan eksploitasi kebijakan yang sudah diketahui (*exploration-exploitation tradeoff*); dan (3) bagaimana menjamin *safety constraints* di lingkungan fisik riil dengan manusia dan aset berharga. Kala (2024) menunjukkan bahwa RL—berbeda dengan *classical control theory* yang memerlukan model dinamika eksplisit—mampu mempelajari kebijakan navigasi hanya dari *reward signal*, sehingga menghilangkan kebutuhan akan kalibrasi presisi model kinematik dan dinamik yang rentan terhadap *parameter drift* pada AMR sungguhan.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis motion planning dengan RL dibangun di atas kerangka *Markov Decision Process* (MDP) yang didefinisikan oleh tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana $\mathcal{S}$ adalah ruang state (configuration space), $\mathcal{A}$ adalah himpunan aksi diskret atau kontinyu, $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a,s')$ adalah reward function, dan $\gamma \in [0,1)$ adalah *discount factor*. Kala (2024) menekankan bahwa untuk AMR industri, configuration space $\mathcal{C}$ biasanya didiskretisasi menjadi grid 2D dengan resolusi tipikal $\Delta = 0{,}1$–$0{,}5$ meter, sehingga $|\mathcal{S}| \approx 10^4$–$10^6$ sel per fasilitas.

**Persamaan Bellman Optimality.** Fungsi nilai optimal $V^*(s)$ dan *state-action value* $Q^*(s,a)$ memenuhi:

$$V^{*}(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^{*}(s') \right]$$

$$Q^{*}(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a'} Q^{*}(s',a')$$

**Update Rule Q-Learning.** Algoritma *model-free* paling fundamental yang dibahas Kala (2024) adalah tabular Q-Learning dengan *update rule*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate* dan $r_{t+1}$ adalah *immediate reward* yang diterima setelah transisi dari $s_t$ ke $s_{t+1}$. Konvergensi Q-Learning ke $Q^*$ dijamin oleh persamaan Robbins-Monro untuk *stochastic approximation* asalkan $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

**Deep Q-Network (DQN).** Untuk state space berskala besar, Kala (2024) membahas penggunaan *function approximator* berupa *neural network* dengan parameter $\theta$:

$$Q(s,a;\theta) \approx Q^{*}(s,a)$$

*Loss function* yang diminimalkan adalah:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta) \right)^2 \right]$

di mana $\theta^{-}$ adalah parameter dari *target network* yang di-*update* secara periodik setiap $C$ langkah untuk menstabilkan training, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N$ dengan distribusi transisi historis.

**Reward Shaping untuk AMR.** Kala (2024) merumuskan *reward function* sebagai fungsi multikomponen:

$$r_{t+1} = r_{\text{goal}} + r_{\text{collision}} + r_{\text{step}} + r_{\text{smooth}}$$

dengan nilai tipikal: $r_{\text{goal}} = +100$ saat mencapai target, $r_{\text{collision}} = -50$ saat menabrak rintangan, $r_{\text{step}} = -1$ per langkah waktu (untuk mendorong efisiensi), dan $r_{\text{smooth}} = -0{,}1 \cdot |\Delta\theta|$ sebagai penalti perubahan arah mendadak (di mana $\theta$ adalah *heading angle*).

**Konstrain Keamanan (Constrained MDP).** Untuk operasi di fasilitas dengan pekerja manusia, Kala mengusulkan formulasi Constrained MDP (CMDP):

$$\max_{\pi} \mathbb{E}_{\tau \sim \pi} \left[ \sum_{t=0}^{T} \gamma^t r_t \right] \quad \text{subject to} \quad \mathbb{E}_{\tau \sim \pi} \left[ \sum_{t=0}^{T} \gamma^t c_t(s_t, a_t) \right] \leq C_{\text{safety}}$$

di mana $c_t(s_t, a_t)$ adalah *cost function* yang mengukur jarak minimum terhadap manusia atau obstacles, dan $C_{\text{safety}}$ adalah ambang batas probabilitas tabrakan yang dapat diterima (misalnya $\leq 10^{-6}$ per jam operasi sesuai ISO 3691-4).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di fasilitas industri mengikuti *Standard Operating Procedure* (SOP) berlapis yang terdiri dari tujuh tahapan utama, sebagaimana diuraikan Kala (2024) dan diperkuat oleh Borah (2024) untuk konteks multi-agen:

**Tahap 1: Pemetaan dan Discretisasi Environment.** Tahap awal adalah membangun *occupancy grid map* $\mathcal{M} \in \{0,1\}^{W \times H}$ dari fasilitas menggunakan *Simultaneous Localization and Mapping* (SLAM) dengan sensor LiDAR 2D (resolusi 5 cm). Untuk fasilitas 100 m × 60 m, grid yang dihasilkan berukuran $W=2000$, $H=1200$. Sel $m_{i,j}=0$ menandakan area bebas dan $m_{i,j}=1$ menandakan halangan.

**Tahap 2: Definisi MDP.** State $s_t$ didefinisikan sebagai tuple $(x_t, y_t, \theta_t, d_t^{\text{goal}}, \{d_k^{\text{obs}}\}_{k=1}^{K})$ dengan $K$ adalah jumlah obstacles terdekat yang terdeteksi sensor. Action space didiskretisasi menjadi 8 arah gerak (N, NE, E, SE, S, SW, W, NW) atau dipertahankan kontinyu untuk algoritma *policy gradient*.

**Tahap 3: Inisialisasi Replay Buffer dan Jaringan.** $\mathcal{D}$ diinisialisasi kosong dengan kapasitas $N = 10^6$ transisi. Dua jaringan Q (online dan target) diinisialisasi dengan bobot acak menurut inisialisasi He, dan target network disalin dari online network setiap $C = 10000$ langkah.

**Tahap 4: Loop Training dengan Safety Filter.** Algoritma training mengikuti pseudo-code:

```
Initialize θ, θ⁻ = θ, D = ∅
for episode = 1 to M do
    Reset environment, observe s₀
    for t = 0 to T do
        With probability ε select a_t ~ Uniform(A)
        else select a_t = argmax_a Q(s_t, a; θ)
        Execute a_t via safety filter (CLF-CBF)
        Observe r_{t+1}, s_{t+1}, done
        Store (s_t, a_t, r_{t+1}, s_{t+1}) in D
        Sample mini-batch from D
        Perform gradient descent on L(θ)
        Every C steps: θ⁻ ← θ
    end
end
```

Di sini *safety filter* berbasis *Control Lyapunov Function* dan *Control Barrier Function* (CLF-CBF) menjamin bahwa setiap aksi yang dipilih agen RL akan diproyeksikan ke himpunan aksi *safe* sebelum dieksekusi ke aktuator. Pendekatan ini sesuai dengan rekomendasi Borah (2024) untuk SAMAS dengan FDIR berlapis.

**Tahap 5: Simulasi dengan Domain Randomization.** Sebelum deployment, kebijakan RL disimulasikan dengan *domain randomization* terhadap parameter fisika: koefisien gesekan $\mu \in [0{,}3; 0{,}7]$, slip ratio roda, dan penundaan komunikasi 10–200 ms untuk mensimulasikan latensi jaringan 5G/WiFi-6.

**Tahap 6: Validasi Hardware-in-the-Loop (HIL).** Tahap ini menjalankan kebijakan pada *digital twin* fasilitas yang di-*couple* dengan AMR fisik melalui ROS2 (Robot Operating System 2) untuk menguji *failure modes*.

**Tahap 7: Deployment dengan FDIR.** Mengikuti kerangka Borah (2024), setiap agen dilengkapi modul FDIR: (a) *Detection* menggunakan *nonlinear filtering* (Extended Kalman Filter / Unscented Kalman Filter) terhadap residual $r_t = y_t - \hat{y}_t$; (b) *Isolation* melalui *consensus algorithm* antar agen; (c) *Reconstruction* dengan aktivasi kebijakan RL *backup* yang telah dilatih untuk *fault scenario* tersebut.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Gudang *e-commerce* 80 m × 50 m dengan 200 rak拣选 (*picking stations*) dan 30 AMR bertenaga baterai lithium 48V. Target: meminimalkan *average travel time* dari *charging dock* ke *picking station* sembari menghindari 15 obstacles dinamis (pejalan kaki, forklift).

**Parameter Input:**
- Resolusi grid: $\Delta = 0{,}5$ m, sehingga grid berukuran $160 \times 100 = 16.000$ sel.
- Discount factor: $\gamma = 0{,}95$.
- Learning rate: $\alpha = 0{,}001$ (Adam optimizer).
- Replay buffer: $N = 50.000$.
- Mini-batch size: $B = 32$.
- Episode length maksimum: $T = 500$ langkah (setara dengan 250 m perjalanan).
- $\varepsilon$-greedy decay: $\varepsilon_t = \max(0{,}05, 1{,}0 \cdot 0{,}995^t)$.

**Reward Function:**
$$r_{t+1} = \begin{cases} +100 & \text{if } s_{t+1} = s_{\text{goal}} \\ -50 & \text{if } s_{t+1} \in \mathcal{O}_{\text{obs}} \\ -0{,}5 & \text{if } s_{t+1} \in \mathcal{S}_{\text{free}} \end{cases}$$

di mana $\mathcal{O}_{\text{obs}}$ adalah himpunan sel berisi halangan dan