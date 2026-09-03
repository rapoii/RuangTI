# 2516 — Perencanaan Gerak (Motion Planning) Robot Otonom Berbasis Reinforcement Learning untuk Sistem Manufaktur dan Logistik Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*, dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan Society 5.0 telah menempatkan robot bergerak otonom (*Autonomous Mobile Robots*, AMR) sebagai tulang punggung operasional pada fasilitas manufaktur, pergudangan, dan rantai pasok modern. Rahul Kala (2024) dalam karyanya yang diterbitkan pada buku *Autonomous Mobile Robots* dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9) menekankan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan tingkat otonomi, keselamatan, dan throughput sebuah agen robotik. Tanpa perencanaan gerak yang adaptif, robot tidak mampu merespons dinamika lingkungan yang penuh ketidakpastian seperti pejalan kaki yang berpindah, halangan dinamis, maupun perubahan layout gudang yang sering terjadi pada operasional *e-commerce fulfillment center*.

Urgensi ekonomis dari topik ini dapat dilihat dari data operasional global. Menurut laporan Mordor Intelligence dan McKinsey yang dirujuk secara implisit dalam literatur AMR, pasar robot bergerak otonom diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR lebih dari 14%. Pada konteks operasional, downtime akibat kesalahan navigasi dapat menimbulkan kerugian hingga USD 30.000 per jam pada fasilitas distribusi skala besar. Kala (2024) mengargumentasikan bahwa pendekatan klasik seperti *A\**, *Rapidly-exploring Random Tree* (RRT), dan *Probabilistic Roadmap* (PRM) bersifat *deterministik-optimal* pada lingkungan statis, namun mengalami degradasi performa signifikan ketika menghadapi lingkungan dinamis dengan banyak agen — sebuah skenario yang justru paling relevan pada lantai pabrik dan gudang modern.

Di sisi lain, Kaustav Borah (2024) dalam disertasinya yang dipublikasikan dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) melengkapi narasi industri dengan menyatakan bahwa sistem multi-agen otonom memerlukan arsitektur *Fault Detection, Isolation, and Reconstruction* (FDIR) yang terintegrasi dengan kemampuan navigasi adaptif. Kombinasi *nonlinear filtering* (seperti Extended Kalman Filter atau Particle Filter) dengan *Reinforcement Learning* (RL) memungkinkan agen untuk secara simultan (i) memperbarui keyakinannya terhadap posisi dan kondisi lingkungan melalui sensor fusion, dan (ii) memutuskan lintasan optimal berdasarkan kebijakan yang dipelajari. Integrasi ini menjadi pondasi apa yang disebut Borah sebagai *Smart Autonomous Multi-Agent Systems* (SAMAS) — sebuah kerangka yang memiliki relevansi langsung pada lini produksi fleksibel dan sistem logistik otonom.

Kontribusi fundamental Kala (2024) terletak pada formulasi *motion planning* sebagai masalah *sequential decision-making* di bawah kerangka *Markov Decision Process* (MDP), di mana agen belajar melalui interaksi trial-and-error dengan lingkungan sehingga menghasilkan kebijakan navigasi yang *near-optimal* tanpa memerlukan peta statis yang lengkap. Pendekatan ini mengatasi dua keterbatasan utama metode konvensional: (1) ketergantungan pada model lingkungan eksplisit, dan (2) ketidakmampuan untuk beradaptasi secara *real-time* terhadap perubahan konfigurasi ruang kerja.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka matematis utama yang digunakan dalam *motion planning* berbasis RL adalah *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$. Berikut adalah elemen-elemennya secara presisi:

- **State space** $\mathcal{S}$: representasi konfigurasi robot dan lingkungannya, misalnya posisi $(x, y)$, orientasi $\theta$, kecepatan linear $v$ dan sudut $\omega$.
- **Action space** $\mathcal{A}$: himpunan perintah gerak diskret atau kontinu yang dapat dieksekusi aktuator.
- **Transition function** $P(s'|s,a)$: probabilitas transisi menuju state $s'$ ketika aksi $a$ dieksekusi dari state $s$.
- **Reward function** $R: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$: umpan balik skalar yang mengukur kualitas aksi.
- **Discount factor** $\gamma \in [0,1)$: faktor diskonto untuk menghargai imbalan masa depan.

Tujuan agen adalah menemukan kebijakan $\pi^*: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k})$$

$$\pi^* = \arg\max_{\pi} \mathbb{E}_{\pi}[G_t \mid s_t]$$

*Value function* suatu kebijakan $\pi$ didefinisikan sebagai ekspektasi return ketika mengikuti kebijakan tersebut mulai dari state $s$:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^k R(s_{t+k}, a_{t+k}) \mid s_t = s\right]$$

Persamaan *Bellman optimality* yang menjadi inti komputasi RL menurut Kala (2024) adalah:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^*(s') \right]$$

Untuk kasus *state space* kontinu dengan dimensi tinggi (misalnya peta gudang dengan resolusi 0,1 m pada area 100 × 100 m), pendekatan *tabular* tidak feasible. Oleh karena itu, Kala (2024) mengusulkan penggunaan *Deep Q-Network* (DQN) yang mengaproksimasi $Q(s,a;\theta)$ dengan jaringan saraf tiruan berparameter $\theta$. Fungsi loss yang diminimalkan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s, a; \theta)\right)^2\right]$$

di mana $\mathcal{D}$ adalah *replay buffer* dan $\theta^-$ adalah parameter jaringan target yang diperbarui secara periodik.

Untuk kebijakan stokastik kontinu, Kala merujuk pada algoritme *Deep Deterministic Policy Gradient* (DDPG) dengan *actor-critic*:

$$\nabla_{\theta^{\mu}} J \approx \mathbb{E}_{s \sim \mathcal{D}} \left[\nabla_a Q(s,a;\theta^Q)\big|_{a=\mu(s;\theta^{\mu})} \nabla_{\theta^{\mu}} \mu(s;\theta^{\mu}) \right]$$

Komplemen penting dari Borah (2024) adalah pemodelan keyakinan (*belief state*) $b_t$ yang memperbarui estimasi state melalui *nonlinear filter* ketika observasi sensor $z_t$ tersedia:

$$b_t = \eta \cdot P(z_t \mid s_t) \sum_{s_{t-1}} P(s_t \mid s_{t-1}, a_{t-1}) b_{t-1}$$

di mana $\eta$ adalah konstanta normalisasi. Belief state ini kemudian digunakan sebagai input bagi kebijakan RL, menghasilkan arsitektur *partially observable MDP* (POMDP) yang lebih robust terhadap derau sensorik dan kegagalan aktuator — sebuah skenario yang sangat relevan pada robot industri berskala besar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lingkungan industri mengikuti prosedur operasional standar berikut, yang disintesis dari metodologi Kala (2024) dan Borah (2024):

**Tahap 1: Karakterisasi Lingkungan dan State Engineering**
- Lakukan *SLAM* (*Simultaneous Localization and Mapping*) awal untuk membangun peta occupancy grid dengan resolusi $\Delta x = \Delta y = 0{,}05$ m.
- Definisikan state $s_t = [x_t, y_t, \theta_t, v_t, \omega_t, d_{obstacle}^{\min}, b_{goal}]$ dengan $d_{obstacle}^{\min}$ jarak ke halangan terdekat dan $b_{goal}$ vektor arah menuju target.
- Validasi state space menggunakan representasi graf atau *voxel grid* sesuai standar ISO 3691-4 untuk AMR.

**Tahap 2: Desain Action dan Reward Function**
- Diskretkan action space menjadi 8 arah gerak utama, atau gunakan aksi kontinu $(\Delta v, \Delta \omega)$ untuk manipulator bergerak.
- Rancang reward function multi-komponen:
$$r_t = r_{goal} \cdot \mathbb{1}_{\|p_t - p_{goal}\| < \epsilon} + r_{collision} \cdot \mathbb{1}_{collision} + \alpha \cdot \|p_{goal} - p_t\| + \beta \cdot \Delta t$$
dengan $r_{goal} = +100$, $r_{collision} = -50$, $\alpha = -0{,}1$ (penalisasi jarak), $\beta = -0{,}01$ (penalisasi waktu).

**Tahap 3: Pelatihan dengan Simulasi Domain Randomization**
- Bangun lingkungan simulasi tinggi-fidelitas pada platform Gazebo atau NVIDIA Isaac Sim.
- Terapkan *domain randomization* pada tekstur, pencahayaan, dan parameter dinamika untuk meningkatkan transferability ke dunia nyata (*sim-to-real*).
- Latih agen selama $N_{episodes} = 50.000$ hingga konvergensi $Q$-value atau reward rata-rata terjaga.

**Tahap 4: Integrasi FDIR sesuai Borah (2024)**
- Pasang modul *nonlinear filter* (EKF atau UKF) pada lapisan sensor fusion untuk estimasi state dan deteksi anomali.
- Aktifkan protokol isolasi ketika residual inovasi $\tilde{y}_t = z_t - \hat{z}_t$ melebihi ambang $\tau = 3\sigma$.
- Hubungkan modul FDIR dengan mekanisme *reward shaping* sehingga agen secara otomatis menghindari zona dengan risiko kegagalan aktuator tinggi.

**Tahap 5: Validasi, Deployment dan Continuous Learning**
- Lakukan *shadow mode deployment* minimal 72 jam di mana agen RL mengendalikan robot secara bersamaan dengan sistem klasik (baseline) untuk verifikasi keamanan.
- Setelah lulus uji keselamatan sesuai ISO 13849 (Performance Level d), aktifkan mode otonom penuh.
- Implementasikan *continual learning* dengan *experience replay* periodik agar kebijakan tetap adaptif terhadap perubahan layout gudang.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *Automated Storage and Retrieval System* (AS/RS) di pusat distribusi e-commerce memiliki luas 80 × 40 m dengan 12 aisle dan 800 loker penyimpanan. Diperlukan 10 unit AMR untuk mengambil item dari loker dan membawanya ke *pick station* dengan jarak rata-rata 35 m. Throughput target adalah 600 pick/jam.

**Parameter Input:**

| Parameter | Nilai | Satuan |
|---|---|---|
| Panjang area (L) | 80 | m |
| Lebar area (W) | 40 | m |
| Kecepatan maksimum $v_{max}$ | 1,5 | m/s |
| Kecepatan rotasi $\omega_{max}$ | 1,0 | rad/s |
| Resolusi grid $\Delta$ | 0,1 | m/pixel |
| Diskonto $\gamma$ | 0,99 | - |
| Learning rate $\alpha$ | $5 \times 10^{-4}$ | - |
| Batch size | 64 | samples |

**Langkah Perhitungan:**

**Langkah 1:** Estimasi kompleksitas state space. Dengan diskretisasi posisi pada resolusi 0,1 m dan orientasi pada 12 arah (30° per step), ukuran state space teoretis adalah:

$$|\mathcal{S}| = \frac{L \cdot W}{\Delta^2} \cdot n_{\theta} = \frac{80 \times 40}{0{,}01^2} \cdot 12 = 3.840.000 \text{ state}$$

**Langkah 2:** Perhitungan reward per episode tipikal. Sebuah episode dengan panjang rata-rata $T = 35 \text{ s}$ pada $v = 1{,}0 \text{ m/s}$ menghasilkan total reward:

$$R_{episode} = r_{goal} + \sum_{t=1}^{T/\Delta t} \left(\alpha \cdot \|p_{goal} - p_t\| + \beta \cdot \Delta t\right)$$

dengan $\Delta t = 0{,}1$ s. Untuk trajectory lurus ideal, jarak rata-rata ke target berkurang secara linear dari 35 m ke 0 m, sehingga rata-rata $\|p_{goal} - p_t\| = 17{,}5$ m:

$$R_{episode} = 100 + 350 \times \left(-0{,}1 \times 17{,}5 - 0{,}01 \times 0{,}1\right) = 100 + 350 \times (-1{,}751) \approx 100 - 613 = -513$$

Nilai negatif ini mengindikasikan bahwa reward positif dari pencapaian goal (+100) harus lebih dominan, atau koefisien $\alpha$ harus diturunkan untuk mencegah kebijakan konvergen ke perilaku pasif.

**Langkah 3:** Perhitungan waktu tempuh optimal vs aktual. Mengikuti Kala (2024), jalur optimal RL memiliki panjang $L^* \approx L_{euclidean} \cdot 1{,}15 = 35 \times 1{,}15 = 40{,