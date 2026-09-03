# 2612 — Perencanaan Gerak (Motion Planning) Cerdas berbasis Reinforcement Learning untuk Sistem Robot Otonom di Lingkungan Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industry 4.0 dan Society 5.0 menempatkan *autonomous mobile robot* (AMR) sebagai tulang punggung sistem intralogistik modern. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menjelaskan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan apakah sebuah agen robot otonom dapat bernavigasi secara andal pada lingkungan yang dinamis, tidak deterministik, dan padat hambatan [DOI: 10.1016/b978-0-443-18908-1.00016-9]. Berbeda dengan *Automated Guided Vehicle* (AGV) konvensional yang masih bergantung pada jalur fisik (magnetik, optik, atau RFID) dengan tingkat fleksibilitas rendah, AMR modern memerlukan perencanaan gerak berbasis persepsi untuk menghindari tabrakan, memperpendek *cycle time*, dan mengoptimalkan konsumsi energi baterai. 

Konteks industri yang melatarbelakangi pengusulan reinforcement learning (RL) dalam perencanaan gerak bersumber dari tiga tantangan operasional riil: (1) variabilitas layout gudang dan lantai produksi akibat *re-layout* berkala untuk memenuhi *mixed-model assembly*; (2) tingkat *throughput* yang harus meningkat rata-rata 15–25% per tahun untuk mengimbangi pertumbuhan e-commerce (data benchmark direferensikan oleh Kala, 2024); dan (3) kebutuhan *fault detection, isolation, and reconstruction* (FDIR) yang mampu mendeteksi anomali sensor atau aktuator secara *real-time*. Borah (2024) menegaskan dalam disertasinya bahwa sistem multi-agen otonom masa depan harus menggabungkan *nonlinear filtering* (misalnya Extended Kalman Filter atau Unscented Kalman Filter) dengan RL agar mampu melakukan rekonstruksi perilaku agen ketika terjadi degradasi sensorik [DOI: 10.32920/25412566.v1]. Integrasi kedua pendekatan ini menghasilkan *Smart Autonomous Multi-Agent Systems* (SAMAS) yang relevan untuk lantai manufaktur, *cross-docking*, dan *warehouse* dengan tingkat otonomi tinggi.

Urgensi ekonomisnya sangat nyata: biaya pick-and-place di gudang manual di negara maju berkisar USD 1,5–3,0 per item, sedangkan dengan AMR dapat ditekan menjadi USD 0,30–0,60. Setiap detik penghematan *path planning* pada 500 unit AMR di sebuah *fulfillment center* dapat menghemat lebih dari USD 4 juta per tahun. Oleh karena itu, pemilihan algoritma motion planning yang adaptif—yakni yang belajar dari data operasional—menjadi keputusan rekayasa strategis yang tidak bisa ditunda. Pendekatan RL, khususnya *Deep Reinforcement Learning* (DRL), dipilih karena mampu menyelesaikan masalah *sequential decision-making* di bawah ketidakpastian tanpa memerlukan model eksplisit lingkungan, sebagaimana ditegaskan Kala (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formalisasi Markov Decision Process (MDP)

Perencanaan gerak dengan RL diformalisasikan sebagai *Markov Decision Process* berhingga yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = himpunan *state* yang merepresentasikan konfigurasi robot (posisi $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, dan jarak ke hambatan $d_{\text{obs}}$);
- $\mathcal{A}$ = himpunan *action* diskret atau kontinu (misalnya, $\{a_1, a_2, \ldots, a_m\}$);
- $P(s'|s,a)$ = probabilitas transisi ke state $s'$ setelah mengambil aksi $a$ di state $s$;
- $R(s,a)$ = *reward function* skalar;
- $\gamma \in [0,1)$ = faktor diskonto terhadap horizon masa depan.

Fungsi nilai *state* diekspresikan oleh Bellman optimality equation:

$$V^{*}(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a)\, V^{*}(s') \right]$$

Secara ekuivalen, fungsi aksi-nilai (*Q-function*) memenuhi:

$$Q^{*}(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a'} Q^{*}(s', a')$$

Iterasi *Value Iteration* melakukan pembaruan:

$$V_{k+1}(s) \leftarrow \max_{a} \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a)\, V_k(s') \right]$$

yang konvergen ke $V^{*}$ ketika $|V_{k+1} - V_k| < \varepsilon$ untuk $\varepsilon$ yang ditetapkan.

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk lingkungan dengan ruang state kontinu (misalnya koordinat planar presisi sentimeter), Kala (2024) mengusulkan penggunaan DQN dengan parameter $\theta$ yang mendekomposisikan $Q(s,a;\theta) \approx Q^{*}(s,a)$. *Loss function*-nya:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^{-}) - Q(s,a;\theta) \right)^{2} \right]$$

di mana $\theta^{-}$ adalah parameter *target network* yang diperbarui periodik setiap $C$ langkah untuk menstabilkan pelatihan. Sampel diambil dari *replay buffer* $\mathcal{D}$ dengan kapasitas $N$ menggunakan distribusi seragam (uniform sampling) atau *Prioritized Experience Replay* (PER) berbobot $p_i \propto |\delta_i| + \epsilon$, dengan $\delta_i$ adalah TD-error.

### 2.3 Policy Gradient dan Actor-Critic

Untuk ruang aksi kontinu (steering angle $\delta \in [-\pi, \pi]$ dan akselerasi $a \in [-a_{\max}, a_{\max}]$), algoritma Deep Deterministic Policy Gradient (DDPG) menggunakan kebijakan deterministik $\mu(s;\theta^{\mu})$ yang diperbarui dengan gradien dari *critic*:

$$\nabla_{\theta^{\mu}} J \approx \mathbb{E}_{s \sim \mathcal{D}} \left[ \nabla_{a} Q(s,a;\theta^{Q})|_{a=\mu(s)} \nabla_{\theta^{\mu}} \mu(s;\theta^{\mu}) \right]$$

Sementara *critic* diperbarui dengan meminimalkan:

$$L(\theta^{Q}) = \mathbb{E}_{(s,a,r,s')} \left[ \left( Q(s,a;\theta^{Q}) - y \right)^{2} \right], \quad y = r + \gamma Q(s', \mu(s';\theta^{\mu^{-}}); \theta^{Q^{-}})$$

### 2.4 Perancangan Reward Function

Kala (2024) merekomendasikan fungsi reward majemuk untuk motion planning:

$$R(s,a) = w_{g}\, r_{\text{goal}} + w_{c}\, r_{\text{collision}} + w_{v}\, r_{\text{velocity}} + w_{s}\, r_{\text{smoothness}}$$

dengan bobot $w_g, w_c, w_v, w_s \geq 0$. Komponen tipikalnya:

$$r_{\text{goal}} = \mathbb{1}_{\|p - p_{\text{goal}}\|_2 < \delta_g}, \quad r_{\text{collision}} = -\mathbb{1}_{d_{\text{obs}} < d_{\text{safe}}}$$

$$r_{\text{velocity}} = -\lambda_v (v_{\text{ref}} - v), \quad r_{\text{smoothness}} = -\lambda_{\omega} |\omega|^2$$

### 2.5 Nonlinear Filtering untuk Estimasi State pada SAMAS

Borah (2024) menambahkan bahwa pada sistem multi-agen, state robot tidak dapat diobservasi langsung melainkan harus diestimasi dari sensor yang bising. *Extended Kalman Filter* melakukan prediksi:

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$
$$P_{k|k-1} = F_{k-1} P_{k-1|k-1} F_{k-1}^{T} + Q_{k-1}$$

dan koreksi:

$$K_{k} = P_{k|k-1} H_{k}^{T} (H_{k} P_{k|k-1} H_{k}^{T} + R_{k})^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_{k} (z_{k} - h(\hat{x}_{k|k-1}))$$

State hasil estimasi $\hat{x}_{k|k}$ inilah yang kemudian dimasukkan ke dalam fungsi $Q(s,a)$ sebagai input *actor-critic*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL di lingkungan industri mengikuti tahapan sistematis berikut (disintesis dari Kala, 2024 dan Borah, 2024):

**Tahap 1 — Pemetaan Lingkup dan Akuisisi Data.** Definisikan *working envelope* AMR (misalnya area gudang 50 × 30 m), petakan hambatan statis (rak, kolom, *conveyor*) dan dinamis (pejalan kaki, AMR lain). Lakukan akuisisi data LiDAR 2D/3D dengan *scan rate* minimal 10 Hz dan odometri IMU.

**Tahap 2 — Konstruksi Simulasi Digital Twin.** Bangun lingkungan simulasi pada Gazebo atau Unity ML-Agents yang merepresentasikan layout fisik dengan tingkat kesetiaan tinggi. Gunakan *domain randomization* (variasi tekstur, pencahayaan, koefisien gesekan $\mu$) untuk meningkatkan *transferability* ke robot riil.

**Tahap 3 — Perancangan Reward dan MDP.** Tentukan state space (misalnya *occupancy grid* 20×20 sel ukuran 0,5 m dengan 8 kanal jarak ke hambatan terdekat per arah), action space (diskret 5 aksi atau kontinu 2-dimensi), dan reward sesuai formula di §2.4.

**Tahap 4 — Pelatihan Off-line.** Latih kebijakan RL selama $N_{\text{episode}}$ episode, masing-masing maksimum $T_{\max}$ langkah. Validasi konvergensi menggunakan *learning curve* (reward rata-rata per episode). Simpan *checkpoint* setiap 10.000 langkah.

**Tahap 5 — Validasi Hardware-in-the-Loop (HIL).** Sebelum deployment, jalankan kebijakan pada robot fisik dalam *test cage* dengan parameter keamanan (misalnya *virtual bumper* elektronik).

**Tahap 6 — Deployment Supervised.** Operasikan AMR dengan mode *shadow mode* (robot merekam aksi manusia/AGV lawas), lanjutkan ke mode *advisory* (kebijakan memberi rekomendasi kepada operator), dan akhirnya *full autonomy* dengan *human-on-the-loop*.

**Tahap 7 — Pemantauan dan Pemeliharaan.** Borah (2024) menekankan pentingnya FDIR berbasis *nonlinear filtering* untuk mendeteksi anomali sensor (residual $>3\sigma$) dan *trigger re-training* ketika distribusi state lingkungan bergeser secara signifikan (*concept drift detection*).

Diagram alur logika pelatihan dan deployment dapat dirangkum sebagai:

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Akuisisi Data   │ ──▶ │  Bangun Digital  │ ──▶ │  Desain Reward   │
│   LiDAR/IMU      │     │   Twin (Gazebo)  │     │   & MDP Space    │
└──────────────────┘     └──────────────────┘     └──────────────────┘
                                                          │
┌──────────────────┐     ┌──────────────────┐     ┌────────▼─────────┐
│   Deployment     │ ◀── │   HIL Testing    │ ◀── │  Training RL     │
│   Supervised     │     │   (Test Cage)    │     │  (DQN/DDPG)      │
└──────────────────┘     └──────────────────┘     └──────────────────┘
         │                                           ▲
         ▼                                           │
┌──────────────────┐     ┌──────────────────┐     ┌────────┴─────────┐
│   Pemantauan     │ ──▶ │  Trigger Re-     │ ──▶ │  Concept Drift   │
│   FDIR (EKF)     │     │  Training        │     │  Detection       │
└──────────────────┘     └──────────────────┘     └──────────────────┘
```

Standar acuan yang relevan mencakup ISO 3691-4 (2020) untuk *driverless industrial trucks*, IEC 61508 untuk *functional safety*, dan ISO 10218 untuk *robot safety*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pusat distribusi e-commerce配备 20 unit AMR tipe *differential drive* dengan spesifikasi: kecepatan maksimum $v_{\max} = 1.5 \text{ m/s}$, radius aman $r_{\text{safe}} = 0.3 \text{ m}$, dan dimensi $0.8 \times 0.6 \text{ m}$. Layout gudang $50 \times 30 \text{ m}$ dibagi dalam *occupancy grid* $100 \times 60$ sel. Tugas *pick-and-place*: berpindah dari *pick station