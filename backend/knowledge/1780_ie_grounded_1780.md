# 1780 — Perencanaan Gerak (Motion Planning) Menggunakan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan inisiatif *Smart Manufacturing* telah mengubah secara fundamental arsitektur lantai produksi dan rantai pasok global. Robot bergerak otonom (*Autonomous Mobile Robots*/AMR) dan *Automated Guided Vehicles* (AGV) menjadi tulang punggung sistem intralogistik modern, menggantikan sistem konveyor rigid yang selama beberapa dekade mendominasi lini perakitan. Menurut Rahul Kala (2024) dalam bab "Motion planning using reinforcement learning" yang termuat di *Autonomous Mobile Robots* (Elsevier, DOI: 10.1016/b978-0-443-18908-1.00016-9), perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan keandalan, efisiensi energi, dan throughput operasional robot otonom. Di lingkungan industri yang dinamis—di mana tata letak gudang dapat berubah karena penambahan work-station baru, kemacetan lorong, atau keberadaan manusia sebagai *dynamic obstacle*—pendekatan perencanaan gerak klasik berbasis *Configuration Space* (C-Space) dan *probabilistic roadmap* menunjukkan degradasi kinerja yang signifikan.

Urgensi ekonomis topik ini sangat tinggi. Laporan internal industri manufaktur menunjukkan bahwa downtime akibat tabrakan atau kegagalan navigasi AMR dapat menimbulkan kerugian hingga $50.000–$250.000 per jam pada fasilitas *semiconductor fab* dan pusat distribusi e-commerce skala besar. Kala (2024) menekankan bahwa *Reinforcement Learning* (RL) menawarkan paradigma baru di mana agen robot tidak lagi memerlukan peta statis eksplisit melainkan belajar kebijakan (*policy*) optimal melalui interaksi berulang dengan lingkungan. Pendekatan ini sangat relevan ketika sistem menghadapi *partial observability*, kegagalan sensor (LiDAR, IMU), atau perubahan topografi yang tidak dapat diprediksi oleh perencana klasik.

Komplementer dengan temuan Kala, Kaustav Borah (2024) dalam disertasinya pada *Peer-Reviewed Journal* (DOI: 10.32920/25412566.v1) memperkenalkan kerangka *Smart Autonomous Multi-agent Systems* (SAMAS) yang mengintegrasikan RL dengan *Nonlinear Filtering* untuk deteksi, isolasi, dan rekonstruksi故障 (*Fault Detection, Isolation, and Reconstruction*/FDIR). Borah menyoroti bahwa dalam sistem rekayasa kompleks—seperti fleet AMR yang terdiri dari puluhan hingga ratusan unit—komponen seperti sensor, aktuator, jaringan komunikasi, dan *controller* rentan terhadap malfunction. Tanpa arsitektur fault-tolerant, satu agen yang gagal dapat memicu *cascading failure* pada seluruh fleet. Integrasi antara RL-based motion planning dengan FDIR berbasis nonlinear filtering menjadi tema riset terkini yang menentukan keberlangsungan operasional (*operational continuity*) fasilitas industri masa depan.

Konteks aplikasi industri sangat luas: dari *warehouse automation* (Amazon, Alibaba Cainiao), perakitan otomotif (BMW, Tesla), pertanian presisi, hingga eksplorasi sumber daya di lingkungan berbahaya. Setiap domain memiliki karakteristik *state space*, *action space*, dan *reward function* yang berbeda sehingga pendekatan RL harus disesuaikan secara hati-hati. Pada bagian selanjutnya, dokumen ini membahas landasan matematis yang diperlukan untuk merancang sistem perencanaan gerak berbasis RL yang memenuhi standar rekayasa dan kebutuhan operasional lantai produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformalkan masalah motion planning sebagai sebuah *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$ dengan:

- $\mathcal{S}$: himpunan *state* (konfigurasi robot + posisi obstacle)
- $\mathcal{A}$: himpunan *action* (perintah kecepatan linear dan angular)
- $\mathcal{P}(s'|s,a)$: probabilitas transisi ke state $s'$ dari state $s$ melalui aksi $a$
- $\mathcal{R}(s,a)$: fungsi reward skalar
- $\gamma \in [0,1)$: faktor diskonto untuk reward masa depan

Tujuan utama agen RL adalah menemukan kebijakan optimal $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Nilai state-action optimal didefinisikan oleh *Bellman optimality equation*:

$$Q^*(s,a) = \mathbb{E}\left[R_{t+1} + \gamma \max_{a'} Q^*(s_{t+1}, a') \,\Big|\, s_t=s, a_t=a\right]$$

### 2.2 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Ketika $\mathcal{S}$ berdimensi tinggi (misalnya representasi grid $50 \times 50$ atau *raw sensor input*), tabel Q menjadi tidak praktis. Kala (2024) mengadopsi arsitektur *Deep Q-Network* (DQN) dengan parameter jaringan $\theta$:

$$Q(s,a;\theta) \approx Q^*(s,a)$$

Fungsi loss yang diminimalkan adalah:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s')\sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

di mana $\theta^-$ adalah parameter *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N$ yang menyimpan tuple pengalaman $(s,a,r,s')$ untuk memutus korelasi temporal antar sampel.

### 2.3 Ekstensi Partially Observable MDP (POMDP)

Untuk kasus di mana observasi sensor tidak lengkap—situasi yang lazim di lingkungan industri dengan oklusi atau derau sensor—Borah (2024) memperluas formulasi ke *Partially Observable MDP* (POMDP). State internal kepercayaan (*belief state*) diperbarui melalui *Nonlinear Filter* (misalnya Extended Kalman Filter atau Particle Filter):

$$b_{t+1}(s') = \eta \cdot \mathcal{O}(o_{t+1}|s') \int_{\mathcal{S}} \mathcal{T}(s'|s,a_t) b_t(s) ds$$

di mana $\eta$ adalah konstanta normalisasi dan $\mathcal{O}(o|s)$ adalah *observation likelihood*. Kombinasi nonlinear filtering dengan RL ini menjadi arsitektur SAMAS yang diusulkan Borah (2024) untuk memastikan agen tetap dapat mengambil keputusan navigasi meskipun terjadi degradasi sensor.

### 2.4 Reward Function Engineering

Perancangan *reward function* sangat menentukan konvergensi dan kualitas kebijakan. Untuk motion planning, Kala (2024) merekomendasikan bentuk:

$$R(s,a) = \alpha \cdot \mathbb{1}_{\text{goal}}(s) - \beta \cdot d(s, s_{\text{goal}}) - \delta \cdot \mathbb{1}_{\text{collision}}(s) - \epsilon \cdot \|a\|^2$$

di mana $\alpha,\beta,\delta,\epsilon$ adalah bobot trade-off. Term pertama memberikan bonus saat target tercapai; term kedua memberi sinyal progres; term ketiga adalah penalti keras untuk tabrakan; dan term keempat adalah regularisasi energi. Penalaan (*hyperparameter tuning*) terhadap koefisien-koefisien ini merupakan keputusan rekayasa kritis yang dibahas pada Bagian 3.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri motion planning berbasis RL mengikuti *Standard Operating Procedure* (SOP) yang sistematis:

**Tahap 1 — Analisis Kebutuhan & Pemodelan Lingkungan.** Tim rekayasa工业 melakukan pemetaan zona operasi (lorong gudang, work-station, area charging) menggunakan sensor fusion (LiDAR 2D/3D, IMU, wheel odometry). Lingkungan didiskretisasi menjadi *occupancy grid* dengan resolusi sel $r$ (umumnya 0,1–0,5 meter).

**Tahap 2 — Perancangan MDP.** Definisikan state space (koordinat relatif terhadap target + jarak minimum ke obstacle), action space (8–24 diskretisasi arah atau aksi continuous via *Deep Deterministic Policy Gradient*/DDPG), dan reward function sesuai persamaan pada Bagian 2.4.

**Tahap 3 — Pelatihan Simulasi.** Gunakan *digital twin* fasilitas industri untuk melatih agen secara masif. Kecepatan simulasi umumnya $1000\times$ real-time menggunakan *physics engine* seperti Gazebo, Unity, atau NVIDIA Isaac Sim. Hyperparameter awal mengikuti praktik terbaik: *learning rate* $\eta = 10^{-4}$, *batch size* $B = 64$, $\gamma = 0{,}99$, ukuran replay buffer $N = 10^6$.

**Tahap 4 — Validasi SIL/HIL.** Setelah konvergensi (diindikasikan oleh *average episode reward* yang stabil selama ≥100 episode), kebijakan dipindahkan ke tahap *Software-in-the-Loop* (SIL) dan *Hardware-in-the-Loop* (HIL) untuk verifikasi keamanan sesuai standar ISO 13849 (keamanan mesin) dan ISO/TS 15066 (kolaborasi robot-manusia).

**Tahap 5 — Integrasi FDIR (Borah, 2024).** Terapkan modul nonlinear filtering untuk monitoring residual sensor. Jika residual $\hat{r}_t = y_t - \hat{y}_t$ melewati ambang $\tau_{\text{FDI}}$, sistem memicu mode degradasi (*safe stop* atau *re-planning*) sesuai protokol ISO 26262 untuk functional safety.

**Tahap 6 — Deployment & Continuous Learning.** Agen di-deploy dengan mekanisme *shadow mode* selama 2–4 minggu sebelum *full autonomy*. Telemetri operasional digunakan untuk *continual fine-tuning* kebijakan melalui federated learning lintas fleet, menjaga kerahasiaan data antar fasilitas.

Arsitektur teknologi ini mengimplementasikan loop闭环 *Perception → Planning → Control → Monitoring → Replanning*, sebagaimana ditampilkan dalam referensi Kala (2024) dan diperkuat dengan modul FDIR Borah (2024).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Pertimbangkan sebuah fasilitas gudang e-commerce dengan layout 50 m × 30 m, resolusi occupancy grid $r = 0{,}5$ m sehingga menghasilkan state space $100 \times 60 = 6000$ sel. Sebuah AMR ditugaskan berpindah dari state awal $s_0 = (5, 5)$ ke state tujuan $s_{\text{goal}} = (90, 55)$ dengan 3 obstacle statis (rak barang) dan 2 zona dynamic obstacle (area kerja manusia).

Parameter RL: $\alpha = 100$, $\beta = 1$, $\delta = 50$, $\epsilon = 0{,}01$, $\gamma = 0{,}99$, $\eta = 5 \times 10^{-4}$, $B = 32$.

### 4.2 Perhitungan Step-by-Step

**Langkah 1: Inisialisasi Q-network.** Dua jaringan saraf tiruan (online dan target) diinisialisasi dengan bobot $\theta_0 \sim \mathcal{N}(0, 0{,}01^2)$. Arsitektur: Input(6000) → Dense(256, ReLU) → Dense(128, ReLU) → Dense(8 aksi, Linear).

**Langkah 2: Sampling aksi dengan ε-greedy.** Pada episode $t = 1$, dengan $\epsilon = 1{,}0$, agen memilih aksi secara acak. Misalkan aksi yang dipilih $a = \text{forward}$ menyebabkan transisi ke $s_1 = (6, 5)$ dan menerima reward:

$$R(s_0, a) = \alpha \cdot \mathbb{1}_{\text{goal}}(s_1) - \beta \cdot d(s_1, s_{\text{goal}}) - \delta \cdot \mathbb{1}_{\text{collision}}(s_1) - \epsilon \cdot \|a\|^2$$

Jarak Euclidean $d(s_1, s_{\text{goal}}) = \sqrt{(90-6)^2 + (55-5)^2} = \sqrt{84^2 + 50^2} = \sqrt{7056 + 2500} = \sqrt{9556} \approx 97{,}75$ m.

$$R(s_0, a) = 0 - 1 \cdot 97{,}75 - 0 - 0{,}01 = -97{,}76$$

**Langkah 3: Update Bellman.** Setelah menyimpan tuple $(s_0, a, -97{,}76, s_1)$ ke replay buffer dan mengambil *minibatch* $B=32$, hitung target:

$$y_i = r_i + \gamma \max_{a'} Q(s'_i, a'; \theta^-)$$

Untuk satu tuple dengan $\max_{a'} Q(s'_i, a'; \theta^-) = -85{,}5$ (estimasi jaringan target):

$$y_i = -97{,}76 + 0{,}99 \times (-85{,}5) = -97{,}76 - 84{,}645 = -182{,}405$$

**Langkah 4: Gradien descent.** Hitung loss $\mathcal{L} = (y_i - Q(s_i, a_i; \theta))^2$. Jika $Q(s_0, a; \theta) = -98{,}0$:

$$\mathcal{L} = (-182{,}405 - (-98{,}0))^2 = (-84{,}405)^2 \approx 7124{,}2$$

Parameter diperbarui: $\theta \leftarrow \theta - \eta \nabla_\theta \mathcal{L} = \theta - 5 \times 10^{-4} \nabla_\theta \mathcal{L}$.

**Langkah 5: Proyeksi Konvergensi.** Setelah 50.000 episode pelatihan di simulator, kurva *average episode reward* meningkat dari $-1850$ (episode 100) menjadi $+95$ (episode 50.000). Panjang path terpendek yang ditemukan RL adalah 110 sel (55 m) dengan 0 tabrakan, dibandingkan 132 sel pada kebijakan reactive