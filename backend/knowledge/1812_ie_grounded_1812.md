# 1812 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Motion Planning using Reinforcement Learning* untuk Robot Bergerak Otonom dan Sistem Multi-Agen Cerdas
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Tesis Disertasi Peer-Reviewed. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 dan transisi menuju *Society 5.0* telah menempatkan sistem robotik otonom sebagai tulang punggung operasional di berbagai lini industri modern — dari *automated guided vehicle* (AGV) di gudang *e-commerce* hingga *autonomous mobile robot* (AMR) di lantai manufaktur presisi tinggi. Rahul Kala (2024) dalam bab bukunya *Motion planning using reinforcement learning* di terbitan Elsevier (*Autonomous Mobile Robots*, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak (*motion planning*) bukan sekadar persoalan geometrik menemukan lintasan bebas halangan, melainkan masalah keputusan sekuensial di bawah ketidakpastian yang harus diselesaikan secara adaptif. Kala berargumen bahwa pendekatan klasik seperti *Rapidly-exploring Random Tree* (RRT) dan *Artificial Potential Field* (APF) mengalami degradasi kinerja ketika menghadapi lingkungan *dynamic*, *partially observable*, dan *high-dimensional state-space* — kondisi khas yang dijumpai di pabrik pintar (*smart factory*).

Konteks industri yang melatarbelakangi pentingnya topik ini sangat mendesak. Pertama, secara ekonomis, International Federation of Robotics (IFR) melaporkan peningkatan kepadatan robot industri sebesar rata-rata 5–7% per tahun, dengan kebutuhan akan robot yang mampu beroperasi berdampingan dengan manusia (*collaborative robots* atau *cobots*) dan robot logistik otonom. Kedua, secara operasional, jalur produksi modern menuntut waktu siklus (*cycle time*) yang pendek, tingkat ketersediaan (*availability*) di atas 95%, dan toleransi kesalahan posisi sub-sentimeter. Ketiga, secara teknis, integrasi sensor LiDAR, kamera stereo, dan *inertial measurement unit* (IMU) membanjiri sistem dengan data *high-dimensional* yang mustahil diproses secara eksplisit oleh pengendali deterministik tradisional.

Kaustav Borah (2024) dalam disertasinya (*Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) melengkapi perspektif ini dengan menyoroti bahwa pada sistem multi-agen yang beroperasi secara kontinu, persoalan *fault detection, isolation, and reconstruction* (FDIR) menjadi krusial ketika sensor, aktuator, atau *controller* mengalami degradasi kinerja. Borah memperkenalkan kerangka *Smart Autonomous Multi-Agent Systems* (SAMAS) yang memadukan *nonlinear filtering* (misalnya *Unscented Kalman Filter* / UKF) dengan *reinforcement learning* (RL) agar agen mampu mempertahankan performa meskipun terjadi kerusakan parsial. Sinergi antara perencanaan gerak berbasis RL (Kala) dan arsitektur multi-agen yang resilien (Borah) menjadi pondasi bagi sistem robotik industri masa depan yang benar-benar otonom dan adaptif.

Urgensi adopsi metodologi ini dalam konteks Teknik Industri semakin kuat ketika mempertimbangkan total biaya kepemilikan (*total cost of ownership* — TCO) sistem otomasi. Studi menunjukkan bahwa downtime yang tidak direncanakan dapat merugikan pabrik hingga $50.000 per jam, sehingga kemampuan robot untuk *self-recover* melalui RL menjadi nilai strategis yang signifikan. Selain itu, di lingkungan *mixed traffic* (campuran manusia-robot-AGV), perencanaan gerak harus menghormati kendala ergonomis dan keselamatan sesuai standar **ISO/TS 15066** untuk robot kolaboratif, yang mensyaratkan batas kecepatan dan gaya kontak. Dengan demikian, *motion planning* bukan hanya persoalan algoritmik, melainkan keputusan rekayasa sistem yang berdampak langsung pada produktivitas, keselamatan, dan profitabilitas.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Dasar teoretis perencanaan gerak berbasis RL adalah *Markov Decision Process* (MDP) yang didefinisikan sebagai tupel $\mathcal{M} = (\mathcal{S}, \mathcal{A}, P, R, \gamma)$, di mana:

- $\mathcal{S} \subseteq \mathbb{R}^{n}$ adalah ruang keadaan (*state space*) yang merepresentasikan konfigurasi robot, misalnya posisi $(x, y)$, orientasi $\theta$, kecepatan linier $v$, dan kecepatan sudut $\omega$.
- $\mathcal{A}$ adalah ruang aksi (*action space*), misalnya perintah kecepatan atau gaya dorong.
- $P(s'|s,a)$ adalah fungsi transisi probabilistik yang memodelkan dinamika robot.
- $R: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$ adalah fungsi imbalan (*reward function*).
- $\gamma \in [0,1)$ adalah *discount factor*.

Tujuan agen adalah mempelajari kebijakan optimal $\pi^*: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *expected cumulative discounted return*:

$$J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^{t} R(s_t, a_t)\right]$$

Persamaan **Bellman optimality** menjadi pusat pembelajaran:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^*(s') \right]$$

dengan $V^*(s)$ adalah *optimal value function* (Kala, 2024).

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk ruang keadaan berdimensi tinggi, Kala (2024) membahas penggunaan algoritma **Deep Q-Network (DQN)** yang mengaproksimasi fungsi nilai aksi $Q(s,a;\theta)$ dengan jaringan saraf tiruan (*deep neural network*) parameter $\theta$. Fungsi kerugian (*loss function*) yang diminimalkan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( y_i - Q(s,a;\theta) \right)^2 \right]$$

dengan *target*:

$$y_i = r + \gamma \max_{a'} Q(s', a'; \theta^-)$$

di mana $\theta^-$ adalah parameter jaringan target yang diperbarui secara periodik (*target network*), dan $\mathcal{D}$ adalah *replay buffer* pengalaman.

### 2.3 Filter Nonlinier untuk Estimasi Keadaan

Borah (2024) menekankan bahwa estimasi keadaan yang akurat adalah prasyarat bagi perencanaan gerak yang andal. **Unscented Kalman Filter** (UKF) melakukan *unscented transform* untuk mengaproksimasi distribusi probabilitas nonlinier dengan menerapkan sekumpulan *sigma points* $\mathcal{X}^{(i)}$ yang merepresentasikan momen statistik orde dua. Prediksi keadaan dilakukan melalui:

$$\hat{x}_{k|k-1} = \sum_{i=0}^{2n} W_m^{(i)} f(\mathcal{X}_{k-1|k-1}^{(i)})$$

dengan bobot mean $W_m^{(i)}$ yang memenuhi $\sum_{i=0}^{2n} W_m^{(i)} = 1$.

### 2.4 Reward Function untuk Collision Avoidance

Kala merancang fungsi imbalan khas untuk masalah *collision avoidance*:

$$R(s,a) = \begin{cases} +R_{\text{goal}} & \text{jika } s \in \mathcal{S}_{\text{goal}} \\ -R_{\text{collision}} & \text{jika } s \in \mathcal{S}_{\text{collision}} \\ -\lambda \, d(s, \mathcal{O}) & \text{selainnya} \end{cases}$$

di mana $d(s, \mathcal{O})$ adalah jarak Euclidean ke halangan terdekat, dan $\lambda > 0$ adalah parameter regularisasi yang mengontrol *risk-averseness* agen.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *motion planning* berbasis RL di lingkungan industri mengikuti prosedur operasional terstruktur sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan dan Akuisisi Data**
1. Lakukan *site survey* untuk memetakan topologi fasilitas (gudang, lantai produksi, koridor) menggunakan * Simultaneous Localization and Mapping* (SLAM) dengan sensor LiDAR 2D/3D.
2. Tentukan *origin frame* dan *coordinate system* sesuai konvensi ISO 9283 untuk kinerja robot industri.
3. Ekstrak *occupancy grid map* dengan resolusi sel $\Delta x \in \{0.05\,\text{m}, 0.1\,\text{m}, 0.2\,\text{m}\}$ tergantung skala fasilitas.
4. Integrasikan data dinamis seperti pola lalu lintas pejalan kaki dan jadwal operasional AGV lain.

**Tahap 2 — Desain MDP dan Fungsi Imbalan**
1. Definisikan ruang keadaan: posisi diskret $(x_i, y_j)$, orientasi $\theta_k$, dan pembacaan sensor jarak $d_l$ dari *ray casting*.
2. Tentukan ruang aksi: perintah kecepatan $(v, \omega)$ dengan batasan $v \in [-v_{\max}, v_{\max}]$ dan $\omega \in [-\omega_{\max}, \omega_{\max}]$ sesuai standar ISO 10218-1 untuk kecepatan maksimum robot industri.
3. Rancang fungsi imbalan multi-objektif yang mencakup keselamatan (penalisasi jarak ke manusia), efisiensi (penalisasi *path length*), dan kehalusan (*smoothness* dengan jerk minimization).
4. Validasi imbalan melalui *expert demonstration* atau *inverse reinforcement learning* (IRL).

**Tahap 3 — Pelatihan dan Validasi Model RL**
1. Pilih arsitektur algoritma: DQN untuk aksi diskret, atau *Deep Deterministic Policy Gradient* (DDPG) / *Soft Actor-Critic* (SAC) untuk aksi kontinu.
2. Lakukan simulasi pelatihan dalam *digital twin* lingkungan menggunakan *Gazebo*, *Webots*, atau *Isaac Sim* dengan akselerasi GPU.
3. Terapkan teknik *domain randomization* agar kebijakan robust terhadap variasi dunia nyata.
4. Validasi kebijakan dengan *hold-out test set* yang mencakup skenario *edge case* (lorong sempit, halangan dinamis, kegagalan sensor parsial sesuai FDIR Borah 2024).

**Tahap 4 — Integrasi dengan Sistem FDIR Multi-Agen (Borah, 2024)**
1. Pasang modul UKF untuk estimasi keadaan *real-time*.
2. Implementasikan mekanisme deteksi anomali berbasis *residual generation* dengan ambang batas statistik $\chi^2$.
3. Aktifkan *policy fallback* ke mode konservatif ketika tingkat kepercayaan estimator jatuh di bawah ambang $\eta_{\min}$.
4. Konfigurasikan protokol komunikasi multi-agen (misalnya ROS 2 DDS) untuk pertukaran informasi lalu lintas.

**Tahap 5 — Deployment, Monitoring, dan Continual Learning**
1. Terapkan protokol *shadow mode* di mana kebijakan RL berjalan paralel dengan pengendali klasik tanpa mengambil alih aktuator.
2. Lakukan *A/B testing* untuk membandingkan *cycle time*, *collision rate*, dan *energy consumption*.
3. Aktifkan *continual learning* dengan pengiriman *experience replay* ke *federated learning server* untuk pembaruan model kolektif.

Standar acuan: **ISO 10218-1/2** (robot industri), **ISO/TS 15066** (kolaborasi manusia-robot), **ISO 13849** (keselamatan fungsional), dan **ANSI/RIA R15.08** (robot mobile industri).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah fasilitas *e-commerce fulfillment center* seluas 10.000 m² akan mengoperasikan 12 unit AMR untuk pemindahan *tote* dari *staging area* ke *packout station*. Peta diskret memiliki resolusi $\Delta x = 0{,}1\,\text{m}$, menghasilkan grid $316 \times 316$ sel. Kecepatan maksimum AMR adalah $v_{\max} = 1{,}5\,\text{m/s}$ dengan waktu siklus target 90 detik per misi.

### 4.2 Perhitungan Waktu Tempuh Baseline (Pendekatan Geometrik)

Misalkan jarak Manhattan dari *pick station* ke *drop station* adalah $D = 84\,\text{m}$ (jalur terpendek di grid). Dengan akselerasi terbatas, profil kecepatan *trapezoidal* menghasilkan:

$$t_{\text{baseline}} = \frac{D}{v_{\max}} = \frac{84}{1{,}5} = 56{,}0\,\text{ detik}$$

### 4.3 Penalti Dinamis akibat Lalu Lintas dan Penghindaran

Kala (2024) menunjukkan bahwa kebijakan RL menghasilkan *path deviation* rata-rata $\delta = 12\%$ dari jalur optimal akibat respons terhadap halangan dinamis. Tambahkan *safety margin* $d_{\text{safe}} = 0{,}5\,\text{m}$ dan faktor perlambatan saat berdekatan dengan manusia/AGV lain $\beta = 0{,}15$:

$$t_{\text{RL}} = t_{\text{baseline}} \cdot (1 + \delta) \cdot (1 + \beta) = 56{,}0 \times 1{,}12 \times 1{,}15 = 72{,}13\,\text{ detik}$$

### 4.4 Dampak pada *Throughput*

Jika setiap misi memerlukan $t_{\text{handle}} = 15\,\text{ detik}$ untuk *pick/put*, total waktu per misi adalah:

$$T_{\text{total}} = t_{\text{RL}} + t_{\text