# 2324 — Perencanaan Gerak Robot Otonom Menggunakan Pembelajaran Penguatan (Reinforcement Learning) untuk Sistem Manufaktur, Logistik Cerdas, dan Multi-Agen Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental lanskap operasional manufaktur, pergudangan, dan rantai pasok global. Salah satu pilar utamanya adalah adopsi masif *Autonomous Mobile Robot* (AMR) dan *Automated Guided Vehicle* (AGV) yang berfungsi sebagai tulang punggung *intralogistics* modern. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menegaskan bahwa perencanaan gerak (*motion planning*) merupakan permasalahan inti yang menentukan tingkat otonomi, efisiensi energi, dan keselamatan operasional robot di lingkungan industri yang dinamis ([DOI: 10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Berbeda dengan robot industri tradisional yang beroperasi di ruang kerja terstruktur dengan lintasan tetap, AMR modern dituntut menavigasi lingkungan semi-terstruktur—gudang *e-commerce*, lini perakitan fleksibel, dan rumah sakit—di mana rintangan bersifat dinamis dan tata letak berubah.

Urgensi ekonominya sangat nyata. Menurut proyeksi pasar robotika logistik yang sering dirujuk dalam literatur AMR, biaya tenaga kerja拣拣 (*picking*) di gudang meningkat 8–12% per tahun, sementara *throughput* permintaan konsumen *e-commerce* tumbuh secara eksponensial. AMR yang menggunakan *Reinforcement Learning* (RL) untuk perencanaan gerak mampu mengurangi *order cycle time* hingga 30–45% dibanding sistem lintasan tetap, sekaligus menekan konsumsi energi melalui kebijakan navigasi adaptif. Kala (2024) menekankan bahwa pendekatan RL menggantikan perencanaan klasik berbasis *A\**, *RRT\**, atau *potential field* yang bersifat *reaktif-statik*, dengan kebijakan (*policy*) yang dipelajari dari interaksi berulang (*trial-and-error*) terhadap lingkungan.

Di sisi lain, sistem multi-agen otonom (*Smart Autonomous Multi-agent Systems*/SAMAS) yang dibahas Kaustav Borah (2024) menambahkan dimensi kritis: deteksi, isolasi, dan rekonstruksi kesalahan (*Fault Detection, Isolation, and Reconstruction*/FDIR) pada sensor, aktuator, komunikasi, dan pengontrol ([DOI: 10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Borah berargumen bahwa otonomi tanpa kemampuan diagnostik mandiri akan menghasilkan *mean time between failures* (MTBF) yang tidak dapat diterima di lingkungan misi-kritis. Integrasi RL untuk *motion planning* dengan FDIR berbasis *nonlinear filtering* (misalnya *Unscented Kalman Filter*, *Particle Filter*) menciptakan arsitektur robot yang tidak hanya menavigasi secara efisien tetapi juga pulih dari degradasi fungsi secara otonom—persyaratan wajib untuk otomasi Industri 5.0 yang *human-centric* dan resilien.

---

## 2. Landasan Teori & Formulasi Matematis

Perencanaan gerak dengan RL diformulasikan secara formal sebagai *Markov Decision Process* (MDP) berhingga atau kontinu. MDP didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ di mana:

- $\mathcal{S}$ adalah himpunan keadaan (*state space*) yang merepresentasikan konfigurasi robot—umumnya posisi $(x, y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, dan fitur sensor (misalnya jarak rintangan dari *LiDAR*).
- $\mathcal{A}$ adalah himpunan aksi (*action space*), diskret $\{0, 1, \dots, n-1\}$ atau kontinu $\mathcal{A} \subseteq \mathbb{R}^m$.
- $P(s' \mid s, a)$ adalah probabilitas transisi keadaan.
- $R: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$ adalah fungsi imbal-hasil (*reward function*).
- $\gamma \in [0, 1)$ adalah faktor diskonto temporal.

Tujuan RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *return* yang diharapkan:

$$J^\pi(s) = \mathbb{E}_\pi \left[ \sum_{t=0}^{\infty} \gamma^t R(s_t, a_t) \,\Big|\, s_0 = s \right]$$

Persamaan Bellman optimalitas untuk fungsi nilai aksi $Q^*(s,a)$ adalah:

$$Q^*(s, a) = \mathbb{E}_{s'} \left[ R(s, a) + \gamma \max_{a'} Q^*(s', a') \right]$$

Untuk kebijakan deterministik optimal $\pi^*(s) = \arg\max_a Q^*(s,a)$, Kala (2024) menurunkan aturan pembelajaran tabular *Q-learning*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah laju pembelajaran. Untuk ruang keadaan kontinu berdimensi-tinggi (umumnya pada AMR industri), digunakan *Deep Q-Network* (DQN) dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s'; \theta^-) - Q(s; \theta) \right)^2 \right]$$

dengan *replay buffer* $\mathcal{D}$ dan jaringan target $\theta^-$ yang diperbarui periodik.

Untuk kebijakan stokastik pada ruang aksi kontinu, Kala (2024) merekomendasikan algoritma *Proximal Policy Optimization* (PPO) dengan fungsi tujuan:

$$L^{CLIP}(\theta) = \mathbb{E}_t \left[ \min\left( r_t(\theta) \hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t \right) \right]$$

di mana $r_t(\theta) = \pi_\theta(a_t|s_t)/\pi_{\theta_{old}}(a_t|s_t)$ adalah rasio probabilitas, $\hat{A}_t$ adalah estimator keunggulan (*advantage*), dan $\epsilon$ adalah parameter pemotongan (umumnya $0{,}1$–$0{,}3$).

Fungsi imbal-hasil untuk AMR pergudangan tipikal dirancang melalui *reward shaping*:

$$R(s, a) = R_{goal} + R_{collision} + R_{step} + R_{smooth}$$

dengan nilai tipikal $R_{goal} = +100$ saat target tercapai, $R_{collision} = -50$ saat kontak rintangan, $R_{step} = -0{,}1$ per langkah (menghambat jalan memutar), dan $R_{smooth} = -\lambda (|\Delta v| + |\Delta \omega|)$ untuk menghaluskan trajektori.

Untuk SAMAS dengan FDIR, Borah (2024) memformulasikan estimasi状态 sistem nonlinier melalui *Extended Kalman Filter* (EKF):

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$
$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$
$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

di mana residu $r_k = z_k - h(\hat{x}_{k|k-1})$ digunakan sebagai dasar deteksi故障 melalui uji $\chi^2$:故障 terdeteksi bila $r_k^T S_k^{-1} r_k > \tau$ dengan $S_k = H_k P_{k|k-1} H_k^T + R_k$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL untuk *motion planning* AMR di lingkungan industri mengikuti SOP berlapis berikut:

**Tahap 1 — Pemodelan Lingkungan & Akuisisi Data.** Peta topologi gudang direkonstruksi melalui *Simultaneous Localization and Mapping* (SLAM), umumnya berbasis algoritma *Cartographer* atau *Hector SLAM*. Peta 2D Occupancy Grid direpresentasikan sebagai matriks $\mathcal{M} \in \{0,1\}^{H \times W}$ dengan resolusi tipikal $0{,}05$ m/piksel. Keadaan robot diekstrak sebagai $s_t = [x_t, y_t, \theta_t, d_{lidar}^t(1{:}N)]$ dengan $N = 360$ berkas *LiDAR*.

**Tahap 2 — Desain MDP & Rekayasa Imbalhasil.** Definisikan $\mathcal{S}$, $\mathcal{A}$, $R$ sesuai poin 2. Parameter kunci: $\gamma = 0{,}99$, $\alpha$ dijadwalkan dari $1{,}0$ turun secara eksponensial ke $0{,}05$. Aksi diskret $\{ \text{maju}, \text{belok-kiri}, \text{belok-kanan}, \text{berhenti} \}$ atau aksi kontinu $(v, \omega) \in [0, v_{max}] \times [-\omega_{max}, \omega_{max}]$.

**Tahap 3 — Pelatihan dalam Simulator.** Pelatihan dilakukan di *Gazebo*, *Isaac Sim*, atau *Webots* dengan akselerasi GPU. Total episode tipikal: $1 \times 10^6$–$5 \times 10^6$ episode. Validasi dilakukan dengan metrik *success rate* (target $\geq 95\%$), *collision rate* ($\leq 2\%$), dan *average episode length* yang menurun secara monoton.

**Tahap 4 — Transfer Sim-to-Real.** Terapkan *domain randomization* pada parameter fisik (koefisien gesekan, latensi sensor, derau *LiDAR*) dan *fine-tuning* di lantai produksi nyata dengan *human-in-the-loop safety supervisor* sesuai standar ISO 3691-4 untuk kendaraan industri tanpa pengemudi.

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Setiap agen meng-*run* filter nonlinier untuk状态估计. Logika RL di-*bungkus* dengan *safety shield*: jika residu sensor melebihi ambang atau estimator menunjukkan divergensi, robot berpindah ke mode *safe-stop* dan memicu protokol reconfigurasi multi-agen di mana agen tetangga mengambil alih misi.

Diagram alir logika keputusan dapat diringkas sebagai: **Perception → State Estimation (EKF/UKF) → FDIR Check → Policy Network $\pi_\theta(s)$ → Safety Shield → Action Execution → Reward Computation → Buffer Update**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AMR tipe *diff-drive* di gudang *e-commerce* dengan 12 *picking station*. Petak gudang $60 \times 40$ m, resolusi栅格 1 m. Robot harus bergerak dari状态 awal $s_0 = (2, 2)$ ke状态 tujuan $s_g = (55, 35)$避开 3 rintangan statis.

**Langkah 1 — Disretisasi Ruang Keadaan.** Ukuran栅格 $|\mathcal{S}| = 60 \times 40 = 2.400$状态. Aksi: $\{ \text{utara}, \text{selatan}, \text{timur}, \text{barat} \}$ dengan 4 kemungkinan transisi. Inisialisasi $Q(s,a) = 0$ untuk semua $(s,a)$.

**Langkah 2 — Definisikan Fungsi Imbal-hasil.**
$$R(s, a, s') = \begin{cases} +100 & \text{jika } s