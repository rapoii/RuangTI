# 2964 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning untuk Sistem Manufaktur dan Logistik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Perencanaan gerak berbasis reinforcement learning untuk robot otonom dalam lingkungan manufaktur, pergudangan, dan rantai pasok
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah menempatkan robot otonom sebagai tulang punggung operasional di sektor manufaktur, pergudangan otomatis (*automated storage and retrieval systems*/ASRS), dan logistik rantai pasok. Permasalahan perencanaan gerak (*motion planning*) menjadi isu strategis karena jalur produksi modern mensyaratkan ketepatan sub-sentimeter pada lintasan robot, kemampuan menghindari halangan dinamis seperti AGV (*Automated Guided Vehicle*) lain, pekerja manusia, serta perubahan layout produksi yang cepat. Menurut Rahul Kala (2024) dalam bab *Motion planning using reinforcement learning* pada buku *Autonomous Mobile Robots* (Elsevier, DOI: 10.1016/b978-0-443-18908-1.00016-9), pendekatan konvensional seperti algoritma A*, Rapidly-exploring Random Tree (RRT), dan potential field gagal mengatasi lingkungan stokastik dengan ruang keadaan (*state space*) berdimensi tinggi dan ketidakpastian sensorik. Kala menegaskan bahwa reinforcement learning (RL) memberikan kerangka pemecahan masalah *sequential decision-making* yang memungkinkan robot belajar kebijakan optimal melalui interaksi dengan lingkungan, bukan melalui pemodelan eksplisit peta lingkungan.

Urgensi ekonomis dari adopsi teknologi ini dapat dilihat dari laporan industri yang menyebutkan bahwa downtime jalur produksi karena tabrakan antar-AGV di pusat distribusi e-commerce mencapai 8–14% dari total waktu operasional, dengan estimasi kerugian USD 2,3 juta per tahun untuk fasilitas berskala 100.000 ft². Selain itu, Kaustav Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS) (DOI: 10.32920/25412566.v1) menekankan bahwa sistem multi-agen otonom memerlukan integrasi *fault detection, isolation, and reconstruction* (FDIR) dengan RL untuk menjamin kontinuitas operasional ketika terjadi kegagalan sensor, aktuator, atau tautan komunikasi. Borah menunjukkan bahwa nonlinear filtering (misalnya Kalman filter dan particle filter) yang digabung dengan RL menghasilkan arsitektur *resilient* yang mampu mengisolasi kegagalan secara real-time dan merekonstruksi kebijakan agen tanpa menghentikan lini produksi. Integrasi kedua perspektif ini — perencanaan gerak RL ala Kala dan arsitektur multi-agen FDIR ala Borah — menjadi kerangka referensi bagi insinyur industri dalam merancang sistem otonom yang aman, adaptif, dan efisien secara ekonomi untuk lingkungan manufaktur modern.

## 2. Landasan Teori & Formulasi Matematis

Perencanaan gerak dengan reinforcement learning diformalisasikan sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tuple $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ (Kala, 2024):

- $\mathcal{S}$: himpunan keadaan (*states*), merepresentasikan posisi, orientasi, kecepatan, dan pembacaan sensor (misalnya lidar, encoder).
- $\mathcal{A}$: himpunan aksi (*actions*), misalnya kecepatan linier $v \in [0, v_{\max}]$ dan kecepatan sudut $\omega \in [-\omega_{\max}, \omega_{\max}]$.
- $P(s'|s,a)$: probabilitas transisi ke keadaan $s'$ dari keadaan $s$ dengan aksi $a$.
- $R(s,a) \in \mathbb{R}$: fungsi imbalan (*reward function*).
- $\gamma \in [0,1)$: faktor diskonto untuk nilai masa depan.

Tujuan agen RL adalah menemukan kebijakan $\pi: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k})$$

Fungsi nilai keadaan $V^\pi(s)$ memenuhi **persamaan Bellman**:

$$V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^\pi(s') \right]$$

dan fungsi nilai aksi $Q^\pi(s,a)$:

$$Q^\pi(s,a) = R(s,a) + \gamma \sum_{s'} P(s'|s,a) \sum_{a'} \pi(a'|s') Q^\pi(s',a')$$

**Algoritma Q-learning** (Kala, 2024) melakukan pembelajaran *off-policy* dengan aturan pembaruan:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

dengan $\alpha \in (0,1)$ adalah laju pembelajaran. Untuk ruang keadaan kontinu berdimensi tinggi (tipikal robot di gudang), Kala merekomendasikan penggunaan **Deep Q-Network (DQN)** yang mengaproksimasi $Q(s,a;\theta)$ dengan jaringan saraf dalam, serta menstabilkan pelatihan menggunakan *experience replay* dan *target network*.

Untuk kebijakan stokastik, metode **Policy Gradient** (REINFORCE) yang juga dirujuk Kala (2024) mengoptimalkan parameter $\theta$ melalui gradien:

$$\nabla_\theta J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot G_t \right]$$

dan turunannya yang lebih stabil, **Actor-Critic** dengan *advantage function* $A^\pi(s,a) = Q^\pi(s,a) - V^\pi(s)$, serta **Proximal Policy Optimization (PPO)** yang membatasi pembaruan kebijakan dengan rasio *clipping*.

Dalam kerangka multi-agen ala Borah (2024), setiap agen $i \in \{1, \dots, N$ mempertahankan estimasi keadaan lokal $\hat{x}_t^{(i)}$ yang diperbarui oleh *Extended Kalman Filter* (EKF) untuk sistem nonlinear:

$$\hat{x}_{t|t}^{(i)} = \hat{x}_{t|t-1}^{(i)} + K_t^{(i)} \left( z_t^{(i)} - h(\hat{x}_{t|t-1}^{(i)}) \right)$$

dengan $K_t^{(i)}$ adalah *Kalman gain* dan $h(\cdot)$ adalah model pengukuran nonlinear. Detektor FDIR menguji residual $\nu_t^{(i)} = z_t^{(i)} - h(\hat{x}_{t|t-1}^{(i)})$ terhadap ambang $\chi^2$ untuk mengisolasi kesalahan sensor. Ketika terdeteksi anomali, agen beralih ke kebijakan *reconfiguration* $\pi_{\text{fail}}^{(i)}$ yang dilatih sebelumnya dengan RL, sehingga kontinuitas operasional terjaga.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kerangka Kala (2024) dan Borah (2024), implementasi SOP rekayasa untuk sistem motion planning RL di fasilitas industri dapat disusun sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan & Diskretisasi Keadaan.** Tentukan area operasional (misalnya gudang 100 m × 60 m), petakan dalam *occupancy grid* dengan resolusi $\Delta = 0{,}25\,\text{m}$. Setiap sel merepresentasikan keadaan $s = (x, y, \theta, v, \omega)$ dengan 5 dimensi.

**Tahap 2 — Desain Fungsi Imbalan.** Kala (2024) menyarankan imbalan majemuk (*shaped reward*):

$$R(s,a) = r_{\text{goal}} + r_{\text{collision}} + r_{\text{step}} + r_{\text{smooth}}$$

dengan $r_{\text{goal}} = +100$ saat mencapai target, $r_{\text{collision}} = -50$ saat menabrak halangan, $r_{\text{step}} = -1$ untuk penalti langkah (mendorong efisiensi), dan $r_{\text{smooth}} = -0{,}1(|\Delta v| + |\Delta \omega|)$ untuk menghaluskan trajektori.

**Tahap 3 — Pemilihan Algoritma.** Untuk lingkungan dengan ruang keadaan diskret ($|\mathcal{S}| < 10^5$), gunakan Q-learning tabular. Untuk ruang keadaan kontinu atau berdimensi tinggi, gunakan DQN, DDPG, atau PPO. Borah (2024) merekomendasikan PPO untuk sistem multi-agen karena stabilitasnya.

**Tahap 4 — Pelatihan Simulasi.** Gunakan simulator Gazebo atau NVIDIA Isaac Sim dengan model fisik akurat. Latih selama $\geq 1 \times 10^6$ langkah (*episodes*), simpan *checkpoint* setiap 10.000 langkah.

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Pasang modul nonlinear filter (EKF/UKF) pada setiap AGV. Konfigurasi detektor residual $\chi^2$ dengan tingkat signifikansi $\alpha = 0{,}01$. Siapkan kebijakan fallback $\pi_{\text{fail}}$ hasil pelatihan RL khusus skenario kegagalan.

**Tahap 6 — Validasi & Deployment.** Uji *hardware-in-the-loop* (HIL) dengan stand ISO 3691-4 untuk AGV industri, verifikasi *safety integrity level* (SIL) sesuai IEC 61508, lalu lakukan *pilot run* 30 hari sebelum *full deployment*.

**Diagram alir proses keputusan agen RL:
```
   [Sensor Read] → [State s_t] → [π_θ(a_t|s_t)] → [Action a_t]
         ↓                                          ↓
   [EKF Filter] ← [Reward r_{t+1}] ← [Environment Step]
         ↓
   [FDIR Test: ν_t² > τ?] → Yes → [π_fail] → [Safe Stop or Reconfigure]
         ↓ No
   [Store (s_t,a_t,r_{t+1},s_{t+1}) in Replay Buffer]
         ↓
   [Update θ via gradient descent on L(θ)]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AGV di pusat distribusi perlu berpindah dari *pick station* P1(5, 5) ke *drop station* P2(45, 30) dengan 8 halangan statis dan 3 AGV lain yang bergerak. Resolusi grid $0{,}25\,\text{m}$, $\gamma = 0{,}95$, $\epsilon$-greedy decay dari $1{,}0$ ke $0{,}05$ selama 10.000 episode.

**Langkah 1 — Inisialisasi Q-Tabel.** Untuk状态 diskret sederhana dengan 4 arah diskret (utara, timur, selatan, barat) di petak 5×5 lokal, ukuran Q-tabel adalah $|\mathcal{S}| \times |\mathcal{A}| = 200 \times 4 = 800$ sel, diinisialisasi $Q(s,a) = 0$.

**Langkah 2 — Satu Episode Pembaruan Q-Learning.** Agen di $s_0 = (5,5)$ memilih aksi $a_0 = \text{utara}$ ($\epsilon$-greedy), menerima $r_1 = -1$ (langkah biasa), berpindah ke $s_1 = (5, 6)$. Pembaruan:

$$Q(s_0, a_0) \leftarrow 0 + 0{,}1 \left[ -1 + 0{,}95 \cdot \max_{a'} Q(s_1, a') - 0 \right]$$

Misalkan $\max_{a'} Q(s_1, a') = 0{,}5$ (estimasi dari iterasi sebelumnya), maka:

$$Q(s_0, \text{utara}) = 0{,}1 \cdot (-1 + 0{,}475) = -0{,}0525$$

**Langkah 3 — Estimasi Total Episode sampai Konvergensi.** Kala (2024) merujuk bahwa konvergensi Q-learning secara teoritis membutuhkan $O(|\mathcal{S}|^2 |\mathcal{A}| / (1-\gamma)^2)$ episode. Untuk $|\mathcal{S}| = 200$, $|\mathcal{A}| = 4$, $\gamma = 0{,}95$:

$$N_{\text{conv}} \approx \frac{200^2 \cdot 4}{(1-0{,}95)^2} = \frac{160.000}{0{,}0025} = 6{,}4 \times 10^7 \text{ iterasi}$$

Secara praktis dengan dekomposisi dan inisialisasi启发, pelatihan efektif tercapai pada $5