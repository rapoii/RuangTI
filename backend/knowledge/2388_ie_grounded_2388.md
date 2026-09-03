# 2388 — Perencanaan Gerak Otonom Menggunakan Reinforcement Learning untuk Sistem Robotik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam *Autonomous Mobile Robots: Planning, Navigation, and Control*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal (Disertasi). DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mendorong adopsi masif terhadap *Autonomous Mobile Robots* (AMR) dan *Automated Guided Vehicles* (AGV) di lantai produksi, pergudangan, dan rantai pasok global. Menurut Kala (2024), perencanaan gerak (*motion planning*) merupakan komponen fundamental dalam arsitektur otonomi AMR karena menentukan kemampuan robot dalam bernavigasi dari konfigurasi awal ke konfigurasi tujuan sambil menghindari tabrakan dengan rintangan statis maupun dinamis. Dalam konteks Teknik Industri, hal ini bukan sekadar persoalan algoritmik, melainkan persoalan strategis yang berkaitan langsung dengan *throughput*, *cycle time*, *mean time between failures* (MTBF), dan *Overall Equipment Effectiveness* (OEE) sistem produksi.

Urgensi operasional perencanaan gerak berbasis *Reinforcement Learning* (RL) muncul karena metode konvensional seperti *A* (A-star), *Rapidly-exploring Random Tree* (RRT), dan *Artificial Potential Field* (APF) memiliki keterbatasan inheren: pertama, ketergantungan pada peta global yang presisi menjadi masalah di lingkungan dinamis (misalnya gudang dengan inventaris bergerak); kedua, kemampuan reaktif terhadap perubahan lingkungan secara *real-time* sangat terbatas; ketiga, biaya *replanning* yang tinggi ketika terjadi perubahan tata ruang. Kala (2024) menekankan bahwa RL memungkinkan robot *belajar* dari interaksi dengan lingkungan melalui mekanisme *trial-and-error* yang terstruktur, sehingga menghasilkan kebijakan navigasi yang adaptif terhadap ketidakpastian.

Secara ekonomis, pasar AMR global diproyeksikan mencapai lebih dari USD 8 miliar pada tahun 2030 dengan Compound Annual Growth Rate (CAGR) di atas 18%. Adopsi RL dalam perencanaan gerak berpotensi menurunkan biaya integrasi sistem hingga 30-40% karena mengurangi ketergantungan pada *high-precision mapping* dan memungkinkan deployment di lingkungan *brownfield* yang telah beroperasi. Borah (2024) melengkapi narasi ini dengan menunjukkan bahwa integrasi RL dalam sistem multi-agen otonom (*Smart Autonomous Multi-agent Systems*/SAMAS) tidak hanya menyelesaikan masalah navigasi, tetapi juga coupled dengan *Fault Detection, Isolation, and Reconstruction* (FDIR), di mana agen mampu mendeteksi malfungsi sensor, aktuator, atau *controller* secara *real-time* dan merekonstruksi operasi tanpa intervensi manusia.

Konteks industri yang paling relevan meliputi: (i) *manufacturing shop floor* dengan lintasan produksi dinamis; (ii) pergudangan otomatis dengan SKU yang berpindah posisi; (iii) pelabuhan dan terminal kontainer; (iv) fasilitas kesehatan dengan *mobile service robots*; serta (v) *last-mile delivery* di logistik perkotaan. Dalam setiap domain ini, kemampuan AMR untuk merencanakan gerak secara otonom dan adaptif menjadi *value driver* utama yang memisahkan sistem otomasi generasi lama dari generasi baru berbasis *learning*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformulasikan masalah perencanaan gerak sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, dengan:

- $\mathcal{S}$ : himpunan state (konfigurasi robot dalam ruang kerja),
- $\mathcal{A}$ : himpunan aksi (perintah gerak diskret atau kontinyu),
- $P(s'|s,a)$ : probabilitas transisi dari state $s$ ke $s'$ dengan mengambil aksi $a$,
- $R(s,a,s')$ : fungsi reward sesaat,
- $\gamma \in [0,1]$ : faktor diskonto untuk horizon tak hingga.

Formulasi ini mengasumsikan *Markov property* bahwa transisi state hanya bergantung pada state dan aksi saat ini, sehingga memungkinkan pemecahan masalah secara rekursif.

### 2.2 Persamaan Bellman dan Fungsi Nilai

Tujuan utama dalam RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan ekspektasi *cumulative discounted reward*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Fungsi nilai state untuk kebijakan $\pi$ didefinisikan sebagai:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s\right]$$

Persamaan Bellman optimalitas menjadi:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

Atau dalam bentuk Q-function (action-value):

$$Q^*(s,a) = \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right]$$

### 2.3 Algoritma Q-Learning untuk Diskret State-Action Space

Untuk state dan aksi diskret, Kala (2024) menggunakan Q-Learning *off-policy*:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a} Q(s_{t+1},a) - Q(s_t,a_t) \right]$$

dengan $\alpha$ sebagai *learning rate*. Untuk ruang state kontinyu (umum pada motion planning dengan sensor seperti LiDAR), digunakan *Deep Q-Network* (DQN) dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

### 2.4 Reward Function Engineering

Perancangan fungsi reward untuk motion planning biasanya berbentuk:

$$R(s,a,s') = R_{\text{goal}} \cdot \mathbb{1}[s'=s_{\text{goal}}] + R_{\text{collision}} \cdot \mathbb{1}[s' \in \mathcal{O}_{\text{obs}}] + c_{\text{step}} + c_{\text{time}} + c_{\text{energy}} \cdot \|v\|^2$$

dengan $\mathcal{O}_{\text{obs}}$ himpunan obstacle, $c_{\text{step}}$ adalah penalti setiap step (mendorong efisiensi), $c_{\text{time}}$ adalah penalti waktu, dan $\|v\|^2$ adalah penalti energi kinetik. Perancangan reward ini adalah keputusan rekayasa kritis yang dibahas secara mendalam oleh Kala (2024).

### 2.5 Integrasi Multi-Agent dengan FDIR

Borah (2024) memperkenalkan arsitektur SAMAS di mana setiap agen $i$ memiliki state estimate $\hat{x}_i$ melalui *nonlinear filtering* (misalnya *Extended Kalman Filter* atau *Particle Filter*):

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - h(\hat{x}_{k|k-1}))$$

dengan gain Kalman $K_k$ yang dihitung dari kovariansi error. Ketika residual $r_k = y_k - h(\hat{x}_{k|k-1})$ melebihi ambang statistik, agen RL merekonstruksi kebijakan navigasi untuk menghindari zona berbahaya—mengintegrasikan deteksi fault dengan motion planning.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lingkungan industri mengikuti SOP berikut yang disintesis dari Kala (2024) dan diperkuat dengan pendekatan multi-agen Borah (2024):

**Tahap 1 — Analisis Ruang Kerja dan Diskretisasi.** Lakukan pemetaan area kerja ke dalam *occupancy grid* dengan resolusi $\Delta$ (umumnya 0.1-0.5 m untuk AMR industri). Identifikasi *static obstacles* (dinding, rak tetap) dan *dynamic zones* (area dengan lalu lintas manusia/pejalan kaki). Validasi peta menggunakan standar ISO 3691-4 untuk driverless industrial trucks.

**Tahap 2 — Definisi MDP.** Tentukan state space $\mathcal{S}$ mencakup posisi robot $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan angular $\omega$, serta data sensor (jarak LiDAR 360°). Tentukan aksi diskret $\mathcal{A} = \{\text{forward}, \text{turn-left}, \text{turn-right}, \text{stop}\}$ atau aksi kontinyu dengan bounding box $[v_{\min}, v_{\max}]$.

**Tahap 3 — Perancangan Reward Function.** Tetapkan parameter:
- $R_{\text{goal}} = +100$ saat robot mencapai tujuan
- $R_{\text{collision}} = -100$ saat terjadi kontak dengan obstacle
- $c_{\text{step}} = -1$ untuk setiap langkah (efisiensi)
- $c_{\text{time}} = -0.5$ untuk penalti waktu
- $c_{\text{energy}} = -0.05$ untuk konsumsi energi

**Tahap 4 — Pelatihan dengan Simulasi.** Gunakan *digital twin* lingkungan produksi (Gazebo, Unity, NVIDIA Isaac Sim) untuk melatih agen RL selama minimal 10$^5$–10$^6$ episode. Terapkan *experience replay buffer* berkapasitas $N = 10^5$ transisi. Gunakan *target network* dengan update period $\tau = 1000$ langkah untuk stabilitas.

**Tahap 5 — Validasi Sim-to-Real.** Sebelum deployment, uji kebijakan pada hardware menggunakan *domain randomization* untuk parameter fisik seperti gesekan roda, latensi sensor, dan slip. Validasi dengan metrik *success rate* $\geq 95\%$ dalam 100 trial sesuai pedoman Kala (2024).

**Tahap 6 — Integrasi FDIR Multi-Agen.** Terapkan modul nonlinear filtering dari Borah (2024) untuk memantau kesehatan sensor dan aktuator. Tetapkan threshold residual $r_{th} = 3\sigma$ untuk deteksi fault. Jika terdeteksi, robot harus *safe-stop* atau melakukan graceful degradation ke mode operasi terbatas.

**Tahap 7 — Deployment dan Monitoring.** Pasang sistem *logging* untuk merekam Q-value, reward trajectory, dan statistik fault. Lakukan *retraining* periodik setiap 30-90 hari untuk adaptasi terhadap perubahan layout atau SKU baru.

Diagram alir proses secara skematis: **Persepsi Sensor → State Estimator (EKF) → FDIR Check → Q-Network Inference → Aksi Motor → Environment → Reward → Experience Replay Buffer**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: AGV di Gudang E-Commerce

Sebuah perusahaan e-commerce besar menerapkan AGV untuk memindahkan item picker di gudang 50.000 m². Peta diskretisasi menghasilkan grid 100×100 dengan $\Delta = 0.5$ m. Robot harus berpindah dari posisi awal $(x_0, y_0) = (0, 0)$ ke tujuan $(x_g, y_g) = (49, 49)$ sambil menghindari 8 rak barang statis dan 5 zona dinamis dengan pejalan kaki.

**Parameter MDP:**
- $\mathcal{S}$: 10.000 state (grid 100×100)
- $\mathcal{A}$: 5 aksi {N, S, E, W, Stop}
- $\gamma = 0.95$
- $\alpha = 0.1$ (learning rate awal, decay ke 0.01)
- $\epsilon = 0.9$ (exploration, decay ke 0.05)

**Perhitungan Episode 1 (Q-Learning Initialization):**
Misalkan robot pada state $s_t = (10, 10)$, mengambil aksi $a_t = E$ (East), mencapai $s_{t+1} = (11, 10)$, dengan reward $r = -1$ (bukan goal, bukan collision).

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t) \right]$$

Karena inisialisasi $Q(s,a) = 0$ untuk semua pasangan, maka:

$$Q((10,10), E) \leftarrow 0 + 0.1 \left[ -1 + 0.95 \cdot 0 - 0 \right] = -0.1$$

**Iterasi setelah 100 episode (perkiraan konvergensi lokal):**
Untuk transisi mendekati goal, misalnya dari $(48,49)$ ke $(49,49)$:

$$Q((48,49), E) \leftarrow 0 + 0.1 \left[ 100 + 0.95 \cdot 0 - 0 \right] = 10.0$$

Nilai Q-value ini merepresentasikan "potensi" jangka panjang bahwa aksi East dari state $(48,49)$ akan mengarah ke reward positif.

**Evaluasi Kebijakan Optimal:**
Setelah konvergensi ($\approx$ 50.000 episode), hitung nilai kebijakan optimal untuk lintasan tipikal $(0,0) \to (49,49)$ dengan panjang lintasan minimal 98 langkah (Manhattan distance). Cumulative reward:

$$G_0 = R_{\text{goal}} + \sum_{k=0}^{97} \gamma^k \cdot c_{\text{step}} = 100 + \sum_{k=0}^{97} (0.95)^k \cdot (-1)$$

$$\sum_{k=0}^{97} (0.95)^k = \frac{1-(0.95)^{98}}{1-0.95} = \frac{1-0.00706}{0.05} \approx 19.86$$

$$G_0