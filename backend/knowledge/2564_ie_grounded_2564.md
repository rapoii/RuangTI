# 2564 — Perencanaan Gerak Otomatis Berbasis Pembelajaran Penguatan untuk Robot Bergerak Otonom dalam Sistem Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning menggunakan Reinforcement Learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju paradigma **Industri 4.0** dan *smart manufacturing* telah memunculkan kebutuhan mendesak akan sistem robotika otonom yang mampu bernavigasi di lingkungan manufaktur, pergudangan, dan distribusi yang semakin kompleks. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menegaskan bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan fundamental dalam operasionalisasi robot bergerak otonom (*Autonomous Mobile Robots*/AMR), karena robot dituntut untuk menemukan lintasan optimal dari konfigurasi awal ke konfigurasi tujuan di ruang kerja yang bersifat dinamis, penuh hambatan, dan tidak pasti (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Secara ekonomis, pasar AMR global diproyeksikan mencapai lebih dari USD 8 miliar pada tahun 2030 dengan tingkat pertumbuhan tahunan majemuk (*CAGR*) di kisaran 15–18%. Pendorong utamanya antara lain: kelangkaan tenaga kerja di sektor logistik, meningkatnya permintaan *e-commerce*, kebutuhan fleksibilitas lini produksi, dan standar Keselamatan dan Kesehatan Kerja (K3) yang semakin ketat. Dalam konteks ini, metode perencanaan gerak klasik berbasis *Artificial Potential Fields* (APF), *Rapidly-exploring Random Tree* (RRT), atau *A\** algoritma memiliki keterbatasan signifikan ketika menghadapi dinamika lingkungan yang berubah secara *real-time*, yang merupakan ciri khas lantai pabrik modern dengan lalu lintas AMR yang tinggi, pekerja manusia, serta perubahan tata letak yang adaptif.

Kala (2024) mengajukan **Reinforcement Learning (RL)** sebagai paradigma pemecahan masalah yang memungkinkan robot belajar kebijakan navigasi optimal melalui interaksi langsung dengan lingkungannya, tanpa memerlukan model eksplisit yang lengkap. Pendekatan ini semakin relevan ketika dikombinasikan dengan arsitektur *deep learning* dan *multi-agent reinforcement learning* (MARL). Kaustav Borah (2024) dalam disertasinya mengembangkan *Smart Autonomous Multi-Agent Systems* (SAMAS) yang menggabungkan RL dengan teknik *nonlinear filtering* (Extended Kalman Filter dan Unscented Kalman Filter) untuk deteksi, isolasi, dan rekonstruksi kesalahan (*Fault Detection, Isolation, and Reconstruction*/FDIR), sehingga tidak hanya lintasan yang optimal tetapi juga sistem yang resilien terhadap kegagalan sensor, aktuator, maupun komunikasi (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

Urgensi industri dari integrasi RL dalam motion planning ini dapat dirangkum dalam tiga pilar strategis: (1) peningkatan **throughput** operasional dengan reduksi waktu siklus navigasi; (2) peningkatan **fleksibilitas** melalui kemampuan adaptasi terhadap perubahan layout tanpa pemrograman ulang; dan (3) peningkatan **keselamatan** melalui kebijakan collision-avoidance yang dipelajari dari data. Ketiga pilar ini secara langsung berkorelasi dengan metrik Key Performance Indicator (KPI) industri seperti Overall Equipment Effectiveness (OEE), *Order Cycle Time*, dan insiden kecelakaan kerja. Dokumen modul ini akan membahas formulasi matematis, metodologi implementasi, studi kasus kuantitatif, serta arah riset masa depan yang didasarkan pada kedua literatur ilmiah tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formalisasi *Markov Decision Process* (MDP)

Kala (2024) membangun seluruh kerangka RL-nya di atas formalisasi **Markov Decision Process** yang didefinisikan sebagai tuple $(S, A, P, R, \gamma)$, di mana:

- $S$ : himpunan state (keadaan) yang merepresentasikan konfigurasi robot dan persepsi lingkungannya
- $A$ : himpunan aksi yang dapat dieksekusi oleh robot (misal: gerak translasi, rotasi)
- $P(s'|s,a)$ : probabilitas transisi dari state $s$ ke $s'$ dengan mengambil aksi $a$
- $R(s,a,s')$ : fungsi reward langsung
- $\gamma \in [0,1)$ : faktor diskonto (*discount factor*)

Kebijakan (*policy*) robot didefinisikan sebagai $\pi: S \rightarrow A$, dengan fungsi nilai state sebagai:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t, a_t, s_{t+1}) \,\Big|\, s_0 = s\right]$$

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman Optimal**:

$$V^{*}(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^{*}(s')\right] \tag{1}$$

### 2.2 Algoritma Q-Learning sebagai Fondasi

Kala (2024) membahas secara ekstensif algoritma **Q-Learning** sebagai metode RL *model-free* untuk perencanaan gerak. Fungsi aksi-nilai (*action-value function*) didefinisikan sebagai:

$$Q^{\pi}(s,a) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t, a_t, s_{t+1}) \,\Big|\, s_0 = s, a_0 = a\right]$$

Dengan aturan pembaruan iteratif:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right] \tag{2}$$

di mana $\alpha \in (0,1)$ adalah laju pembelajaran (*learning rate*) dan $\gamma$ adalah *discount factor*. Untuk aplikasi praktis AMR di gudang otomatis, Kala (2024) merekomendasikan penggunaan **Deep Q-Network (DQN)** dengan fungsi loss:

$$L(\theta) = \mathbb{E}\left[\left( r + \gamma \max_{a'} Q(s', a'; \theta^{-}) - Q(s, a; \theta) \right)^{2}\right] \tag{3}$$

di mana $\theta$ adalah parameter jaringan saraf dan $\theta^{-}$ adalah parameter jaringan target yang diperbarui secara berkala untuk menstabilkan pelatihan.

### 2.3 *Policy Gradient* untuk Aksi Kontinu

Karena gerak robot pada dasarnya bersifat kontinu (kecepatan linear $v$ dan angular $\omega$), Kala (2024) membahas metode **Policy Gradient** seperti REINFORCE dan *Actor-Critic*:

$$\nabla_{\theta} J(\theta) = \mathbb{E}_{\pi_{\theta}}\left[\nabla_{\theta} \log \pi_{\theta}(a|s) \, Q^{\pi_{\theta}}(s,a)\right] \tag{4}$$

Pendekatan *Actor-Critic* dengan dua jaringan saraf — *actor* $\pi_{\theta}(a|s)$ dan *critic* $V_{\phi}(s)$ — memberikan varian *Advantage Actor-Critic* (A2C):

$$A(s,a) = Q(s,a) - V(s) = r + \gamma V(s') - V(s) \tag{5}$$

### 2.4 Multi-Agent Reinforcement Learning (MARL)

Borah (2024) mengembangkan arsitektur SAMAS untuk sistem multi-robot dengan menggabungkan RL dengan *nonlinear filtering*. Untuk $n$ agen, fungsi aksi-nilai bersama didefinisikan sebagai:

$$Q^{\pi}(s, a_1, \dots, a_n) = \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma^{t} R_t \,\Big|\, s_0, a_{1,0}, \dots, a_{n,0}\right] \tag{6}$$

di mana setiap agen memiliki kebijakan parsial $\pi_i(a_i|s)$. Untuk estimasi state pada sistem nonlinier, digunakan **Unscented Kalman Filter (UKF)** dengan transformasi unscented:

$$\mathcal{X}_{i} = \bar{x} + \left(\sqrt{(n+\lambda)P_x}\right)_i, \quad i = 1, \dots, 2n \tag{7}$$

dengan $\lambda$ parameter penskalaan. Kombinasi UKF dan RL memungkinkan agen tidak hanya merencanakan lintasan tetapi juga mendiagnosis dan memulihkan diri dari kerusakan sensor/aktuator selama operasi (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Terintegrasi

Berdasarkan integrasi kedua literatur, arsitektur sistem motion planning RL untuk AMR industri dapat dirumuskan dalam SOP lima tahap sebagai berikut:

**Tahap 1 — *Environment Perception & State Definition*.** Robot dilengkapi sensor LIDAR 2D/3D, IMU, dan *wheel odometry*. State $s_t$ didefinisikan sebagai tuple jarak ke obstacle terdekat $\{d_1, d_2, \dots, d_k\}$, posisi relatif terhadap target $(\Delta x, \Delta y)$, heading $\theta$, dan kecepatan linear/angular saat ini. Discretisasi state dilakukan menggunakan *tile coding* atau *coarse coding* untuk mempercepat konvergensi.

**Tahap 2 — *Action Space & Reward Engineering*.** Aksi diskret $\{A_1 = \text{forward}, A_2 = \text{turn-left}, A_3 = \text{turn-right}, A_4 = \text{stop}\}$ untuk aplikasi sederhana, atau aksi kontinu $(v, \omega)$ dengan $v \in [0, v_{max}]$ dan $\omega \in [-\omega_{max}, \omega_{max}]$ untuk aplikasi presisi tinggi. Fungsi reward dirancang dengan *reward shaping*:

$$r(s,a,s') = \begin{cases} +R_{goal} & \text{jika } s' \in S_{goal} \\ -R_{collision} & \text{jika terjadi tabrakan} \\ -\eta \cdot d(s', S_{goal}) & \text{lainnya} \end{cases} \tag{8}$$

dengan $\eta$ koefisien penjamin jarak dan $d(s, S_{goal})$ jarak Euclidean ke target.

**Tahap 3 — *Training Phase*.** Pelatihan dilakukan dalam simulator seperti Gazebo, Webots, atau NVIDIA Isaac Sim dengan ratusan ribu episode. Algoritma DQN digunakan dengan *experience replay buffer* $D$ berkapasitas $N = 10^6$ transisi, dan jaringan target disinkronkan setiap $C = 1000$ langkah.

**Tahap 4 — *Sim-to-Real Transfer & Domain Randomization*.** Untuk menutup kesenjangan simulasi-realitas (*reality gap*), diterapkan *domain randomization* pada parameter fisik (koefisien gesekan, noise sensor), serta *fine-tuning* dengan sedikit episode di lingkungan sebenarnya.

**Tahap 5 — *Deployment, Monitoring & FDIR*.** Mengikuti kerangka Borah (2024), setiap agen dilengkapi modul UKF untuk estimasi state dan deteksi anomali. Jika residual inovasi $\tilde{y}_k = y_k - H\hat{x}_{k|k-1}$ melebihi ambang batas $\sigma_{th}$, sistem mengaktifkan protokol isolasi dan rekonstruksi (*fault reconstruction*) dengan mengaktifkan ulang kebijakan RL berbasis reward yang dimodifikasi (Borah, 2024).

### 3.2 Diagram Alir Logika Keputusan

```
[Inisialisasi Q(s,a) atau bobot θ]
        ↓
[Loop Episode]
        ↓
[Reset robot ke posisi awal acak
```

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
