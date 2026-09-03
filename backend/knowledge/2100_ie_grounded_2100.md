# 2100 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Berbasis Pembelajaran Penguatan (Reinforcement Learning)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, in: *Autonomous Mobile Robots*, Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mendorong adopsi masif robot bergerak otonom (Autonomous Mobile Robots/AMR) di lantai pabrik, pergudangan otomatis, pelabuhan cerdas, hingga rantai pasok farmasi dan makanan. Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa permasalahan fundamental AMR adalah perencanaan gerak (*motion planning*) yang andal di lingkungan dinamis, di mana robot harus bernavigasi dari konfigurasi awal menuju target sembari menghindari rintangan statis maupun bergerak. Dalam literatur klasik, masalah ini ditangani oleh algoritma deterministik seperti A*, Rapidly-exploring Random Tree (RRT), dan Potential Field, yang memerlukan peta global lengkap dan parameter lintasan yang telah ditentukan terlebih dahulu. Akan tetapi, lini produksi modern ditandai oleh perubahan tata letak yang cepat, keberadaan pejalan kaki, forklift, serta AGV (*Automated Guided Vehicle*) lain, sehingga pendekatan rule-based menjadi tidak memadai.

Kala (2024) menegaskan bahwa *Reinforcement Learning* (RL) muncul sebagai paradigma alternatif yang memungkinkan agen robot mempelajari kebijakan navigasi optimal melalui interaksi trial-and-error dengan lingkungannya, tanpa memerlukan model eksplisit lingkungan. Pendekatan ini memanfaatkan *Markov Decision Process* (MDP) sebagai kerangka matematis, di mana state merepresentasikan posisi serta orientasi robot, action adalah perintah kecepatan linear dan angular, dan reward dirancang untuk memberi sinyal kedekatan dengan target sekaligus penalti akibat tabrakan. Borah (2024) melengkapi perspektif ini dengan menunjukkan bahwa dalam sistem multi-agen (seperti konvoi AGV atau armada robot gudang), RL juga berfungsi sebagai mekanisme Fault Detection, Isolation, and Reconstruction (FDIR), memungkinkan sistem memperbaiki strategi navigasi saat terjadi degradasi sensor atau aktuator.

Secara ekonomis, pasar AMR global diproyeksikan mencapai lebih dari USD 8 miliar pada 2030 dengan CAGR >15% (Grand View Research, 2023), sehingga efisiensi motion planning berdampak langsung pada *throughput*, *order fulfillment cycle time*, dan *Total Cost of Ownership*. Urgensi industri semakin nyata ketika pandemi COVID-19 memicu otomatisasi gudang (*dark warehouse*) di mana campur tangan manusia diminimalkan. Penerapan RL memungkinkan reduksi *mean time to navigate* hingga 30–45% dibanding algoritma klasik pada lingkungan dengan tingkat perubahan layout yang tinggi (Kala, 2024). Lebih jauh, integrasi dengan *digital twin* memungkinkan pelatihan kebijakan RL secara *offline* dalam lingkungan simulasi sebelum di-*deploy* ke robot fisik, menekan risiko operasional dan mempercepat *commissioning*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformalkan masalah motion planning sebagai MDP tuple $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ dengan komponen:

$$\mathcal{S} = \{s \in \mathbb{R}^n : s \text{ merepresentasikan state robot}\}$$
$$\mathcal{A} = \{a \in \mathbb{R}^m : a = (v, \omega), \text{ kecepatan linear } v \text{ dan angular } \omega\}$$
$$P(s_{t+1} | s_t, a_t) : \mathcal{S} \times \mathcal{A} \times \mathcal{S} \to [0,1]$$
$$R(s_t, a_t, s_{t+1}) : \mathcal{S} \times \mathcal{A} \times \mathcal{S} \to \mathbb{R}$$
$$\gamma \in [0,1) : \text{faktor diskonto temporal}$$

Untuk robot differential-drive, *state transition* mengikuti *kinematic unicycle model*:

$$x_{t+1} = x_t + v_t \cos(\theta_t) \Delta t$$
$$y_{t+1} = y_t + v_t \sin(\theta_t) \Delta t$$
$$\theta_{t+1} = \theta_t + \omega_t \Delta t$$

di mana $(x, y, \theta)$ adalah *pose* robot dan $\Delta t$ adalah periode kontrol.

### 2.2 Fungsi Reward

Kala (2024) mengusulkan fungsi reward komposit:

$$r_t = \alpha \cdot r_{\text{goal}} + \beta \cdot r_{\text{collision}} + \delta \cdot r_{\text{progress}}$$

dengan:

$$r_{\text{goal}} = \begin{cases} +R_g, & \text{jika } \|p_t - p_{\text{goal}}\| \leq \epsilon \\ 0, & \text{lainnya} \end{cases}$$

$$r_{\text{collision}} = \begin{cases} -R_c, & \text{jika terjadi tabrakan} \\ 0, & \text{lainnya} \end{cases}$$

$$r_{\text{progress}} = d_{t-1} - d_t = \|p_{t-1} - p_{\text{goal}}\| - \|p_t - p_{\text{goal}}\|$$

Parameter tipikal: $R_g = 100$, $R_c = -50$, $\alpha = 1, \beta = 1, \delta = 0,5$ (Kala, 2024).

### 2.3 Persamaan Bellman dan Q-Learning

Kebijakan optimal $\pi^*$ memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k r_{t+k}$$

Fungsi nilai state optimal memenuhi persamaan Bellman:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a) V^*(s') \right]$$

Untuk algoritma Q-Learning (*off-policy*, *model-free*), update aturan (*Bellman optimality backup*):

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \eta \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\eta \in (0,1]$ adalah *learning rate*. Kala (2024) menyarankan skema decay eksponensial:

$$\eta_t = \eta_0 \cdot e^{-\lambda t}, \quad \text{dengan } \eta_0 = 0{,}5, \lambda = 10^{-4}$$

### 2.4 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Untuk state kontinu (misalnya citra lidar), Kala (2024) menggunakan arsitektur DQN dengan *replay buffer* $\mathcal{D}$ dan target network $\hat{Q}$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} \hat{Q}(s', a'; \theta^-) - Q(s, a; \theta) \right)^2 \right]$$

### 2.5 Kerangka Multi-Agen (Borah, 2024)

Borah (2024) memperluas formulasi untuk sistem multi-agen dengan indeks $i = 1, 2, \ldots, N$:

$$\pi_i^* = \arg\max_{\pi_i} \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma^t r_i(s_t, a_{1,t}, \ldots, a_{N,t})\right]$$

dan menambahkan komponen FDI (*fault detection index*):

$$\text{FDI}_i(t) = \|y_i(t) - \hat{y}_i(t)\| > \tau_{\text{threshold}}$$

yang memicu rekonstruksi kebijakan melalui transfer learning lintas-agen.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka Kala (2024) dan Borah (2024), berikut adalah SOP tujuh tahap untuk implementasi motion planning RL di lingkungan industri:

### Tahap 1 — Pemodelan Lingkungan & Digital Twin

1. Lakukan *site survey* dan pemetaan SLAM (*Simultaneous Localization and Mapping*) menggunakan lidar 2D/3D.
2. Bangun *digital twin* pada simulator (Gazebo, Unity, atau NVIDIA Isaac Sim) dengan akurasi fisis realistis (koefisien gesekan, inersia, latensi sensor).
3. Definisikan area operasi $\mathcal{W} \subset \mathbb{R}^2$ dan *pickup/dropoff* node.

### Tahap 2 — Desain MDP

1. Diskretisasi state: jarak ke goal $d$, heading error $\psi = \text{atan2}(y_g-y, x_g-x) - \theta$, jarak rintangan minimum $d_{\min}$.
2. Diskretisasi action: $\{a_1, a_2, a_3, a_4\} = \{\text{forward, left, right, stop}\}$ atau ruang kontinu $(v, \omega)$.
3. Kalibrasi bobot reward $\alpha, \beta, \delta$ melalui *expert demonstration*.

### Tahap 3 — Pelatihan Offline (Sim-to-Real)

1. Inisialisasi Q-Net bobot acak dan replay buffer kapasitas $10^6$.
2. Jalankan *episode* selama $T_{\max} = 500$ langkah; reset saat goal tercapai atau tabrakan.
3. *Hyperparameter*: $\gamma = 0{,}99$, $\eta_0 = 0{,}5$ dengan decay, batch size 64, target network *update* setiap $C = 1000$ langkah.
4. Konvergensi:终止 jika *average reward* 100 episode terakhir meningkat < 1%.

### Tahap 4 — Validasi Sim-to-Real

1. Domain randomization: variasi pencahayaan, posisi rintangan, slip roda.
2. Uji *safety envelope*: kecepatan maksimum $v_{\max} = 0{,}5$ m/s, jarak berhenti darurat $d_{\text{stop}} = 0{,}3$ m.

### Tahap 5 — Deploy & Supervisi

1. *Shadow mode* — kebijakan RL berjalan paralel dengan planner klasik, output dibandingkan.
2. *Supervised autonomy* — RL aktif dengan operator override.

### Tahap 6 — Integrasi FDIR Multi-Agen (Borah, 2024)

1. Setiap agen menjalankan nonlinear filter (mis. *Extended Kalman Filter* atau *Particle Filter*) untuk estimasi state.
2. Jika $\text{FDI}_i > \tau$, agen mengirim sinyal broadcast dan sistem mengaktifkan *policy reconstruction* dengan bobot dari agen tetangga.

### Tahap 7 — Pemeliharaan & Peningkatan Berkelanjutan

1. Monitor metrik KRI: *success rate*, *average completion time*, *near-miss incidents*.
2. *Periodic retraining* mingguan menggunakan data produksi aktual.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Pabrik *X* memiliki AMR tipe *differential-drive* dengan misi转运 komponen dari *pick station* A $(0, 0)$ ke *drop station* B $(10, 0)$ m. Di lintasan terdapat satu rintangan statis di $(5, 1)$ m dan satu rintangan dinamis (pejalan kaki) yang bergerak dengan kecepatan $v_p = 0{,}3$ m/s dari $(0, 2)$ ke $(10, 2)$ m. Parametrik robot: $v_{\max} = 0{,}5$ m/s, $\omega_{\max} = 1{,}0$ rad/s, $\Delta t = 0{,}1$ s.

### 4.2 Inisialisasi Q-Table

State didiskretisasi menjadi 10 sel jarak $(d \in \{0, 1, \ldots, 9\}$ m) dan 8 sektor heading $(\psi \in \{0°, 45°, \ldots, 315°\})$, total $|\mathcal{S}| = 80$ state. Actions $\mathcal{A} = \{\text{N, NE, E, SE, S, SW, W, NW}\}$ (8 arah diskret). Inisialisasi:

$$Q_0(s, a) = 0, \quad \forall s \in \mathcal{S}, a \in \mathcal{A}$$

### 4.3 Satu Episode Manual — Trajektori Lurus (A→B tanpa rintangan)

Episode 1: Reward $r_{\text{progress}} = 1$ setiap langkah yang mendekatkan robot ke goal.

Episode steps (Tabel 1):

| Langkah $t$ | Posisi $(x,y)$ | Jarak ke goal $d_t$ | $r_{\text{progress}}$ |
|:---:|:---:|:---:|:---:|
| 0 | (0, 0) | 10,00 | — |
| 1 | (0,5; 0) | 9,50 | +0,50 |
| 2 | (1,0; 0) | 9,00 | +0,50 |
| 10 | (5,0; 0) | 5,00 | +0,50 |
| 20 | (9,5; 0) | 0,50 | +0,50 |
| 21 | (.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
