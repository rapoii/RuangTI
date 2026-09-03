# 1588 — Perencanaan Gerak (Motion Planning) dengan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 dan Society 5.0 telah menempatkan sistem otonom (autonomous systems) sebagai pilar strategis dalam rantai nilai manufaktur modern. Rahul Kala (2024) dalam chapter *Autonomous Mobile Robots* dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9) menekankan bahwa kemampuan *motion planning* merupakan fungsi kritis yang menentukan kelayakan operasional Autonomous Mobile Robot (AMR) dan Automated Guided Vehicle (AGV) di lingkungan industri. AMR tidak hanya dituntut bernavigasi dari titik A ke titik B, melainkan harus mampu menghindari rintangan dinamis (pejalan kaki, forklift lain, pallet bergerak), merencanakan ulang lintasan secara real-time, dan meminimalkan konsumsi energi — tiga permasalahan yang sulit dipecahkan dengan pendekatan klasik berbasis graf statis seperti A* atau Dijkstra.

Secara ekonomis, pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 (compound annual growth rate ≈ 17%), sehingga setiap peningkatan efisiensi 1% pada perencanaan gerak berdampak langsung pada penghemasan jutaan jam operasi dan pengurangan *downtime* lini produksi. Kala (2024) menunjukkan bahwa metode konvensional *sampling-based motion planning* (RRT, PRM) memiliki kompleksitas komputasi eksponensial ketika ruang konfigurasi menyempit (narrow passage problem), sedangkan *grid-based search* menderita *curse of dimensionality* pada lingkungan skala besar. Di sinilah *Reinforcement Learning* (RL) memberikan paradigma baru: agen belajar kebijakan (policy) optimal melalui interaksi trial-and-error dengan lingkungan, sehingga mampu menggeneralisasi pola navigasi pada kondisi yang belum pernah dijumpai saat pelatihan.

Borhor pendukung yang dipublikasikan Borah (2024) dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) memperluas horizon ini dengan konsep *Smart Autonomous Multi-Agent Systems* (SAMAS), di mana beberapa agen otonom — termasuk AMR — berkolaborasi dengan sensor, aktuator, dan jaringan komunikasi. Integrasi RL dengan *nonlinear filtering* (misalnya Extended Kalman Filter dan Particle Filter) memungkinkan agen tidak hanya merencanakan gerak, tetapi juga melakukan Fault Detection, Isolation, and Reconstruction (FDIR) terhadap komponen kritis secara otonom. Urgensi industri terhadap kapabilitas ini tecermin dari fakta bahwa satu jam *downtime* lini perakitan otomotif bernilai sekitar USD 1,3 juta, sehingga *fault-tolerance* dan *self-recovery* menjadi *key performance indicator* baru dalam desain sistem otonom.

Relevansi bagi insinyur industri sangat luas: mulai dari perancangan *flexible manufacturing system* (FMS), optimasi *warehouse picking route*, hingga *closed-loop dispatching* pada sistem produksi *job-shop*. Permasalahan motion planning dengan RL bukan sekadar persoalan algoritmik, melainkan keputusan arsitektural yang memengaruhi total cost of ownership, skalabilitas, dan keselamatan operasional sesuai standar ISO 3691-4 (driverless industrial trucks).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Reinforcement Learning untuk motion planning secara formal dimodelkan sebagai Markov Decision Process (MDP) tuple $\mathcal{M} = (\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$ sesuai framework yang dirujuk Kala (2024):

- $\mathcal{S}$ — himpunan *state*, merepresentasikan pose robot $(x, y, \theta)$, kecepatan $(v, \omega)$, serta pembacaan sensor jarak $d_i$.
- $\mathcal{A}$ — himpunan aksi, misalnya $(v, \omega) \in \mathbb{R}^2$ untuk robot *differential drive*.
- $\mathcal{P}(s'|s,a)$ — probabilitas transisi ke state $s'$ setelah mengambil aksi $a$ di state $s$.
- $\mathcal{R}: \mathcal{S} \times \mathcal{A} \to \mathbb{R}$ — fungsi reward.
- $\gamma \in [0,1)$ — faktor diskonto.

Tujuan agen adalah menemukan kebijakan $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected return*:

$$
G_t = \sum_{k=0}^{\infty} \gamma^{k} R_{t+k+1}
$$

dengan *value function* optimal $V^{\pi}(s)$ memenuhi **Bellman optimality equation**:

$$
V^{*}(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a)\, V^{*}(s') \right]
$$

dan padanan *action-value function* (Q-function):

$$
Q^{*}(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} \mathcal{P}(s'|s,a) \max_{a'} Q^{*}(s',a')
$$

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk ruang state kontinu berukuran besar (tipikal warehouse >10.000 m² dengan ratusan rak), Kala (2024) menyitir penggunaan fungsi aproksimasi. Algoritma *Deep Q-Network* memperbarui parameter jaringan $\theta$ dengan meminimalkan *loss function*:

$$
L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( y_i - Q(s,a;\theta) \right)^2 \right]
$$

di mana *target network* memberikan:

$$
y_i = r + \gamma \max_{a'} Q(s',a';\theta^{-})
$$

dengan $\theta^{-}$ parameter target yang di-*copy* secara periodik dari $\theta$, dan $\mathcal{D}$ adalah *replay buffer* berukuran hingga $10^6$ transisi.

### 2.3 Policy Gradient (REINFORCE & Actor-Critic)

Untuk aksi kontinu (misal perintah kecepatan linier $v \in [0, v_{\max}]$), algoritma *policy gradient* seperti Proximal Policy Optimization (PPO) yang dibahas Kala (2024) memaksimalkan:

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \gamma^{t} R_t \right]
$$

dengan update:

$$
\nabla_\theta J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot \hat{A}_t \right]
$$

di mana *advantage estimator* $\hat{A}_t = Q(s_t,a_t) - V(s_t)$ merepresentasikan seberapa baik aksi $a_t$ relatif terhadap rata-rata.

### 2.4 Desain Fungsi Reward untuk Motion Planning

Fungsi reward untuk navigasi AMR mengikuti pola yang teruji:

$$
R(s,a) = \begin{cases}
+R_{\text{goal}} & \text{jika } \|p - p_{\text{goal}}\| < \epsilon \\
-R_{\text{collision}} & \text{jika } \min_i d_i < d_{\text{safe}} \\
-c_{\text{time}} - \lambda \|p - p_{\text{goal}}\| & \text{lainnya}
\end{cases}
$$

dengan $p = (x,y)$ posisi agen, $d_{\text{safe}}$ jarak aman (umumnya 0,3–0,5 m untuk AMR standar ISO 3691-4).

### 2.5 Integrasi dengan Nonlinear Filtering (Borah, 2024)

Borah (2024) menekankan bahwa observasi sensor tidak sempurna, sehingga filter perlu menyertai keputusan RL. *Extended Kalman Filter* memperbarui estimasi state $\hat{x}_k$ sebagai:

$$
\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))
$$

dengan *Kalman gain*:

$$
K_k = P_{k|k-1} H_k^\top (H_k P_{k|k-1} H_k^\top + R_k)^{-1}
$$

Estimasi state inilah yang kemudian menjadi input $\tilde{s}_k$ bagi kebijakan RL, menciptakan *closed-loop* sensing-planning yang robust terhadap noise sensor dan fault.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di industri mengikuti kerangka terstruktur yang disusun Kala (2024) dan diperkuat dengan arsitektur FDIR Borah (2024):

**Langkah 1 — Pemodelan Lingkungan & Akuisisi Data.** Bangun *digital twin* gudang/pabrik menggunakan ROS (Robot Operating System) dan Gazebo, lengkap dengan layout, daftar obstacle statis, dan *traffic pattern* dinamis. Akuisisi dataset historis pergerakan AGV minimal 200 jam operasi.

**Langkah 2 — Perancangan MDP.** Definisikan diskretisasi state (misal sel 0,25 m × 0,25 m pada grid 200×200 untuk gudang 50×50 m), ruang aksi diskret atau kontinu sesuai *drive system*, serta parameter reward $R_{\text{goal}}$, $R_{\text{collision}}$, $c_{\text{time}}$, $\lambda$.

**Langkah 3 — Pelatihan di Simulator.** Latih agen menggunakan Stable-Baselines3 atau Ray RLlib pada GPU server dengan target 5–10 juta episode. Validasi dengan metrik *success rate* ≥ 95% dan *collision rate* ≤ 0,1%.

**Langkah 4 — Sim-to-Real Transfer.** Terapkan *domain randomization* (variasi friction, slip, latency sensor 50–200 ms) untuk menutup *reality gap*. Uji bertahap pada *test track* sebelum deployment penuh.

**Langkah 5 — Integrasi Nonlinear Filtering.** Pasang modul EKF/UKF pada lapis persepsi (Borah, 2024) untuk menyaring derau lidar dan IMU. Tetapkan ambang fault dan aktifkan prosedur *graceful degradation* saat confidence estimasi jatuh di bawah 0,7.

**Langkah 6 — Supervisi & Continuous Learning.** Pasang *human-on-the-loop* dashboard, log seluruh transisi $(s,a,r,s')$ untuk *lifelong learning*, dan jadwalkan *fine-tuning* mingguan.

**Langkah 7 — Kepatuhan Standar.** Validasi terhadap ISO 3691-4 (truk industri tanpa pengemudi), ISO 13849 (safety-related control systems), dan IEC 61508 (SIL 2 minimal).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pusat distribusi e-commerce di Jawa Tengah memiliki gudang 60 m × 40 m dengan 320 rak, menggunakan 8 AGV *differential drive* kapasitas 250 kg. Kita ingin melatih satu kebijakan RL untuk tugas *pick-and-transport* dari *picking station* ke salah satu dari 24 *packing station*.

Parameter kunci:
- Kecepatan maksimum $v_{\max} = 1{,}5$ m/s
- Akselerasi maksimum $a_{\max} = 0{,}6$ m/s²
- Jarak aman $d_{\text{safe}} = 0{,}4$ m
- Diskretisasi aksi: 5 level $(v,\omega)$
- Episode = 1 siklus pick-deliver-return

### 4.2 Perhitungan Q-Value Iteratif (Tabular Q-Learning Sederhana)

Untuk menyederhanakan, gunakan *grid* 4×4 dengan koordinat target $(3,3)$ dan satu rintangan di $(1,1)$. Inisialisasi $Q(s,a) = 0$ untuk semua state-aksi, $\gamma = 0{,}9$, $\alpha = 0{,}5$.

Misalkan agen di state $s=(0,0)$, mencoba aksi $a = \text{kanan}$ dan berpindah ke $s'=(0,1)$ dengan reward $r = -0{,}1$ (biaya waktu). Update Q-value:

$$
Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]
$$

Asumsikan $\max_{a'} Q((0,1),a') = 0{,}15$ (setelah iterasi awal). Maka:

$$
Q((0,0),\text{kanan}) = 0 + 0{,}5 \left[ -0{,}1 + 0{,}9 \times 0{,}15 - 0 \right] = 0{,}5 \times 0{,}035 = 0{,}0175
$$

Iterasi kedua di state $s=(0,1)$, aksi $a = \text{kanan}$ ke $s'=(0,2)$, $r=-0{,}1$, dengan $\max Q = 0{,}25$:

$$
Q((0,1),\text{kanan}) = 0{,}1 + 0{,}5 \left[ -0{,}1 + 0{,}9 \times 0{,}25 - 0{,}1 \right] = 0{,}1 + 0{,}5 \times 0{,}025 = 0{,}1125
$$

Setelah 200 episode konvergensi (mengikuti $\epsilon$-greedy dengan $\epsilon$ menurun dari 1,0 ke 0,05