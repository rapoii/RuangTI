# 0260 — Perencanaan Gerak Otomatis dan Sistem Multi-Agen Cerdas Berbasis Reinforcement Learning untuk Robotika Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning dalam sistem otonom multi-agen untuk aplikasi industri
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning* dalam *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Peer-Reviewed Journal Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur menuju paradigma *Industry 4.0* dan *Industry 5.0* telah mengubah secara fundamental arsitektur lantai produksi, gudang otomatis, dan rantai pasok. Salah satu pilar utama transformasi ini adalah kehadiran **Autonomous Mobile Robots (AMR)** dan **Smart Autonomous Multi-Agent Systems (SAMAS)** yang mampu melakukan navigasi, pengambilan keputusan, dan koordinasi任务 secara adaptif di lingkungan yang dinamis dan tidak pasti (Kala, 2024; Borah, 2024). Dalam konteks Teknik Industri, perencanaan gerak (*motion planning*) bukan sekadar persoalan geometris menemukan lintasan terpendek, melainkan masalah optimasi stokastik multi-kriteria yang harus mempertimbangkan produktivitas, keselamatan pekerja, konsumsi energi, tingkat kerusakan inventaris, dan *throughput* lini produksi.

Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* bab tentang *Motion Planning Using Reinforcement Learning* menekankan bahwa robot otonom modern beroperasi pada lingkungan *partially observable* dengan peta yang berubah-ubah akibat pergerakan manusia, forklift, maupun robo-mobilitas lainnya. Pendekatan konvensional berbasis graf seperti A* atau Rapidly-exploring Random Tree (RRT) memerlukan re-planning setiap kali terjadi perubahan lingkungan dan tidak memiliki mekanisme pembelajaran dari pengalaman. Hal ini menimbulkan latensi keputusan yang signifikan pada *real-time shop floor control* dan menurunkan *Overall Equipment Effectiveness* (OEE) hingga 8–15% pada sistem AMR berskala besar (Kala, 2024).

Di sisi lain, Kaustav Borah (2024) menyoroti bahwa kompleksitas sistem rekayasa modern, yang terdiri dari banyak agen dengan sensor, aktuator, jaringan komunikasi, dan kontroler yang saling dependen, memerlukan kemampuan *Fault Detection, Isolation, and Reconstruction* (FDIR) secara otonom. Disertasinya memperkenalkan kerangka SAMAS yang mengintegrasikan *nonlinear filtering* (misalnya Extended Kalman Filter, Particle Filter) dengan *reinforcement learning* untuk mendeteksi, mengisolasi, dan merekonstruksi kegagalan komponen secara *real-time*. Konteks工业 langsung dari penelitian ini adalah sistem manufaktur fleksibel (FMS), jalur perakitan otomatis, dan armada *Automated Guided Vehicle* (AGV) di mana satu kegagalan agen dapat menyebabkan *domino effect* pada seluruh rantai produksi.

Urgensi ekonomis dari integrasi kedua pendekatan ini sangat jelas. Pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR 23,5%, namun tingkat utilisasi aktual banyak dilaporkan masih di bawah 60% akibat perencanaan gerak yang suboptimal dan waktu henti yang tinggi karena故障. Dengan mengadopsi kerangka *reinforcement learning* untuk *motion planning* yang dipadukan dengan FDIR berbasis *nonlinear filtering*, organisasi工业 dapat mencapai peningkatan *uptime*, penurunan *mean time to recovery* (MTTR), dan pengembalian investasi yang lebih cepat (Kala, 2024; Borah, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Proses Keputusan Markov (MDP)

Kerangka dasar reinforcement learning untuk perencanaan gerak diformulasikan sebagai *Markov Decision Process* (MDP) dengan tupel:

$$\mathcal{M} = (S, A, P, R, \gamma)$$

di mana $S$ adalah himpunan state (konfigurasi robot + peta lingkungan + posisi dinamis), $A$ adalah himpunan aksi (kecepatan linear, kecepatan sudut, perintah berhenti), $P(s'|s,a)$ adalah probabilitas transisi state, $R(s,a,s')$ adalah fungsi reward sesaat, dan $\gamma \in [0,1)$ adalah *discount factor* (Kala, 2024).

### 2.2. Persamaan Bellman dan Fungsi Nilai

Fungsi nilai optimal $V^*(s)$ memenuhi *Bellman optimality equation*:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

Sementara fungsi aksi-nilai (*Q-function*) didefinisikan sebagai:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

Kala (2024) menekankan bahwa dalam konteks AMR, diskretisasi state dilakukan pada grid okupansi 2D atau *configuration space*, sedangkan reward dirancang multi-objektif:

$$R(s,a,s') = w_1 R_{\text{safety}} + w_2 R_{\text{progress}} + w_3 R_{\text{energy}} - w_4 R_{\text{collision}}$$

dengan $\sum_i w_i = 1$ merupakan bobot preferensi operator lantai produksi.

### 2.3. Algoritma Q-Learning dan Deep Q-Network (DQN)

Untuk lingkungan diskret dengan transisi yang dapat dijelajahi secara langsung, algoritma *Q-learning* melakukan pembaruan iteratif:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha\left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)\right]$$

dengan $\alpha$ adalah *learning rate*. Untuk ruang state kontinu berdimensi tinggi (misalnya input dari LiDAR 360°), Kala (2024) mengusulkan penggunaan **Deep Q-Network (DQN)** dengan *experience replay buffer* $\mathcal{D}$ dan jaringan target $Q_\theta^-$ yang diperbarui setiap $C$ langkah:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_\theta(s,a)\right)^2\right]$$

### 2.4. Formulasi POMDP dan Nonlinear Filtering pada SAMAS

Ketika lingkungan tidak terobservasi penuh (sensor noise, oklusi), formulasi diperluas menjadi **Partially Observable Markov Decision Process** (POMDP). Borah (2024) memodelkan dinamika agen ke-$i$ pada sistem multi-agen melalui persamaan state nonlinier:

$$\mathbf{x}_{k+1}^{(i)} = f^{(i)}(\mathbf{x}_k^{(i)}, \mathbf{u}_k^{(i)}) + \mathbf{w}_k^{(i)}$$

dengan observasi:

$$\mathbf{z}_k^{(i)} = h^{(i)}(\mathbf{x}_k^{(i)}) + \mathbf{v}_k^{(i)}$$

di mana $\mathbf{w}_k^{(i)} \sim \mathcal{N}(0, Q_k^{(i)})$ dan $\mathbf{v}_k^{(i)} \sim \mathcal{N}(0, R_k^{(i)})$ adalah noise proses dan pengukuran.

**Extended Kalman Filter (EKF)** menghasilkan estimasi state melalui dua tahap:

**Tahap Prediksi:**
$$\hat{\mathbf{x}}_{k|k-1}^{(i)} = f^{(i)}(\hat{\mathbf{x}}_{k-1|k-1}^{(i)}, \mathbf{u}_{k-1}^{(i)})$$
$$P_{k|k-1}^{(i)} = F_k^{(i)} P_{k-1|k-1}^{(i)} (F_k^{(i)})^\top + Q_k^{(i)}$$

**Tahap Pembaruan:**
$$K_k^{(i)} = P_{k|k-1}^{(i)} (H_k^{(i)})^\top \left[H_k^{(i)} P_{k|k-1}^{(i)} (H_k^{(i)})^\top + R_k^{(i)}\right]^{-1}$$
$$\hat{\mathbf{x}}_{k|k}^{(i)} = \hat{\mathbf{x}}_{k|k-1}^{(i)} + K_k^{(i)}\left[\mathbf{z}_k^{(i)} - h^{(i)}(\hat{\mathbf{x}}_{k|k-1}^{(i)})\right]$$
$$P_{k|k}^{(i)} = (I - K_k^{(i)} H_k^{(i)}) P_{k|k-1}^{(i)}$$

di mana $F_k^{(i)} = \frac{\partial f^{(i)}}{\partial \mathbf{x}}$ dan $H_k^{(i)} = \frac{\partial h^{(i)}}{\partial \mathbf{x}}$ adalah Jacobian yang dievaluasi pada estimasi state saat ini (Borah, 2024).

### 2.5. Fault Detection, Isolation, and Reconstruction (FDIR)

Borah (2024) mendefinisikan *residual* untuk deteksi故障:

$$\mathbf{r}_k^{(i)} = \mathbf{z}_k^{(i)} - h^{(i)}(\hat{\mathbf{x}}_{k|k-1}^{(i)})$$

Statistik uji Chi-square:

$$\chi_k^{(i)} = (\mathbf{r}_k^{(i)})^\top \left[H_k^{(i)} P_{k|k-1}^{(i)} (H_k^{(i)})^\top + R_k^{(i)}\right]^{-1} \mathbf{r}_k^{(i)}$$

di mana故障 terdeteksi ketika $\chi_k^{(i)} > \tau$ dengan $\tau$ adalah ambang yang ditetapkan dari distribusi Chi-square $\chi^2_m$ dengan derajat kebebasan $m$ (dimensi observasi). Isolasi故障 dilakukan melalui *structured residual* dan *reinforcement learning agent* yang mempelajari kebijakan rekonstruksi untuk memilih aktuator atau sensor pengganti.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem Terintegrasi

Kerangka implementasi yang diadaptasi dari Kala (2024) dan Borah (2024) untuk lantai produksi industri mengikuti arsitektur berlapis:

1. **Layer Persepsi**: LiDAR 2D/3D, kamera stereo, IMU, encoder roda.
2. **Layer Estimasi State**: EKF/UKF untuk fusi sensor lokal, *particle filter* untuk lokalisasi global.
3. **Layer Perencanaan Gerak RL**: modul DQN/PPO menghasilkan aksi berdasarkan state estimate.
4. **Layer Koordinasi Multi-Agen**: protokol *consensus* terdistribusi (misalnya gossip algorithm).
5. **Layer FDIR**: monitor residual dan trigger rekonstruksi saat故障 terdeteksi.
6. **Layer Eksekusi & Safety**: *low-level controller* PID dengan *safety filter* (ISO 13849 untuk robot kolaboratif).

### 3.2. SOP Implementasi RL-based Motion Planning

**Fase 1 — Pemodelan Lingkungan (Minggu 1–3):**
- Akuisisi peta statis fasilitas via SLAM.
- Identifikasi zona dinamis (area pejalan kaki, *conveyor*, *pickup/dropoff bay*).
- Diskretisasi state: ukuran cell 0,5 m × 0,5 m untuk armada AMR di gudang 10.000 m².
- Definisi fungsi reward dengan konsultasi operator HSE dan manajer logistik.

**Fase 2 — Pelatihan Offline (Minggu 4–10):**
- Inisialisasi *replay buffer* kapasitas $10^6$ transisi.
- Pelatihan DQN selama 200.000 episode simulasi di ROS+Gazebo.
- Validasi dengan metrik *cumulative reward* per episode dan *success rate* (target ≥ 95%).

**Fase 3 — Sim-to-Real Transfer (Minggu 11–13):**
- *Domain randomization* terhadap parameter fisik (koefisien gesekan, latensi aktuator).
- *Progressive neural network* untuk transfer pengetahuan tanpa *catastrophic forgetting*.

**Fase 4 — Deployment & Supervised Operation (Minggu 14–16):**
- *Shadow mode*: AMR beroperasi dengan kebijakan RL namun keputusan ditinjau operator.
- *A/B testing* terhadap baseline A* dengan metrik *average task completion time* dan *collision count*.

**Fase 5 — Continuous Learning (Ongoing):**
- *Online fine-tuning* dengan prioritas *experience replay* berbasis *temporal difference error*.
- *Periodic retraining* setiap 6 bulan untuk adaptasi.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
