# 2740 — Perencanaan Gerak (Motion Planning) Cerdas Menggunakan Reinforcement Learning untuk Sistem Robot Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Tesis Disertasi. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental arsitektur sistem manufaktur, intralogistik, dan rantai pasok global. Di pusat transformasi tersebut berdiri robot otonom bergerak (Autonomous Mobile Robots/AMR) yang berfungsi sebagai tulang punggung fleksibilitas produksi. Rahul Kala (2024) dalam chapter *Motion Planning Using Reinforcement Learning* yang diterbitkan melalui Elsevier dan terindeks DOI [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), menegaskan bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan paling krusial dalam operasionalisasi AMR, karena robot dituntut untuk menemukan lintasan optimal dari konfigurasi awal ke konfigurasi tujuan di ruang kerja yang mengandung rintangan statis maupun dinamis. Kala menekankan bahwa metode konvensional seperti *Rapidly-exploring Random Tree* (RRT) dan *Artificial Potential Fields* (APF) memiliki keterbatasan fundamental dalam menghadapi lingkungan yang tidak sepenuhnya diketahui (*unknown environment*) atau ketika kondisi berubah secara stokastik sepanjang waktu. Kondisi ini lazim dijumpai pada lantai pabrik dengan lalu lintas forklift, operator manusia, serta inventaris dinamis yang berubah setiap shift (Kala, 2024).

Urgensi ekonomis dari adopsi AMR dengan motion planning berbasis *Reinforcement Learning* (RL) tidak dapat dipandang sebelah mata. Laporan internal industri yang dirujuk secara luas menunjukkan bahwa sistem pergudangan modern (*modern warehousing*) mengalami peningkatan *order-picking throughput* sebesar 20–40% ketika AMR berbasis RL menggantikan sistem konveyor tetap, sementara *total cost of ownership* turun hingga 30% dalam horizon 5 tahun (Kala, 2024). Kompleksitas meningkat ketika AMR harus berkolaborasi dalam formasi multi-agen, misalnya pada sistem *Smart Autonomous Multi-Agent Systems* (SAMAS) yang dikaji oleh Kaustav Borah (2024) dengan DOI [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1). Borah menekankan bahwa sistem multi-agen untuk deteksi, isolasi, dan rekonstruksi kesalahan (*Fault Detection, Isolation, and Reconstruction/FDIR*) memerlukan protokol navigasi yang tidak hanya menghindari rintangan tetapi juga mempertahankan koherensi formasi dan toleransi terhadap degradasi sensor atau aktuator. Dengan kata lain, motion planning tidak berdiri sendiri, melainkan menjadi subsistem kritis yang menentukan keandalan, keselamatan, dan produktivitas seluruh lini produksi otonom.

Dari perspektif Teknik Industri, topik ini menjembatani tiga bidang sekaligus: (i) *Operations Research* melalui formulasi Markov Decision Process (MDP), (ii) *Control Engineering* melalui dinamika kinematik dan aktuator, serta (iii) *Industrial Systems Engineering* melalui optimalisasi *throughput*, *cycle time*, dan utilisasi aset. Dokumen modul ini akan membedah secara kuantitatif arsitektur RL untuk motion planning, formulasi matematis MDP, algoritma Q-learning dan Deep Q-Network (DQN), hingga studi kasus numerik yang menggambarkan bagaimana parameter industri riil—seperti kecepatan AMR, jarak antar-rintangan, dan bobot reward—secara langsung memengaruhi kualitas kebijakan navigasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) dan Borah (2024) secara konsisten membangun landasan motion planning otonom di atas kerangka **Markov Decision Process** yang didefinisikan oleh himpuan lima tupel $(S, A, P, R, \gamma)$. Formulasi ini menyatakan:

$$MDP = (S, A, P, R, \gamma)$$

di mana:
- $S$ adalah himpunan state (konfigurasi robot dalam ruang kerja),
- $A$ adalah himpunan aksi yang tersedia (misalnya: bergerak maju, belok kiri, belok kanan, berhenti),
- $P(s'|s,a)$ adalah fungsi transisi probabilistik,
- $R(s,a,s')$ adalah fungsi reward langsung,
- $\gamma \in [0,1)$ adalah faktor diskonto temporal.

Untuk AMR dengan konfigurasi planar $(x, y, \theta)$ di mana $\theta$ adalah orientasi heading, ruang state kontinu didekati (diskretisasi) ke dalam *occupancy grid* berdimensi $N \times M$ dengan resolusi sel $r$ (meter). Kala (2024) menunjukkan bahwa diskretisasi pada resolusi $r = 0{,}25$ m memberikan keseimbangan antara kompleksitas komputasi dan fidelitas navigasi untuk lingkungan gudang tipikal.

### 2.2 Persamaan Bellman dan Fungsi Nilai

Tujuan fundamental agen RL adalah mempelajari kebijakan optimal $\pi^*: S \to A$ yang memaksimalkan *expected cumulative discounted reward*. Persamaan Bellman optimalitas menjadi jangkar matematis:

$$V^*(s) = \max_{a \in A} \left[ R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) \, V^*(s') \right]$$

Bentuk ekuivalen dalam hal *action-value function* $Q^*(s,a)$ adalah:

$$Q^*(s,a) = \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right]$$

Kala (2024) menekankan bahwa dalam motion planning, reward function dirancang secara cermat untuk menyeimbangkan tiga tujuan: (i) pencapaian tujuan (jarak Euclidean ke target), (ii) penghindaran rintangan (hukuman berbasis jarak), dan (iii) efisiensi energi. Secara matematis:

$$R(s,a,s') = w_g \cdot R_{goal}(s') + w_o \cdot R_{obs}(s,a) + w_e \cdot R_{energy}(a)$$

dengan $w_g + w_o + w_e = 1$. Untuk kasus tipikal gudang: $w_g = 0{,}6$, $w_o = 0{,}3$, $w_e = 0{,}1$.

### 2.3 Algoritma Q-Learning

Untuk lingkungan diskret dengan matriks transisi yang sepenuhnya dapat diamati, algoritma tabular Q-Learning diperbarui menurut aturan (Kala, 2024):

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Kala merekomendasikan jadwal peluruhan $\alpha_t = \alpha_0 / (1 + \beta t)$ dengan $\alpha_0 = 0{,}5$ dan $\beta = 0{,}001$ untuk menjamin konvergensi asimtotik.

### 2.4 Deep Q-Network (DQN) untuk Ruang State Kontinu

Ketika state space menjadi kontinu (misalnya pembacaan lidar 360°), Kala (2024) dan Borah (2024) menggunakan arsitektur **Deep Q-Network** dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui setiap $C$ langkah (umumnya $C = 1000$), dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N$ tuple transisi. Penggunaan *experience replay* ini secara drastis mengurangi korelasi temporal antar-sampel dan menstabilkan pelatihan.

### 2.5 Kinematika Diferensial AMR

Kala (2024) menyatakan bahwa AMR tipikal memiliki kinematika diferensial dengan persamaan:

$$\begin{cases} \dot{x} = v \cos(\theta) \\ \dot{y} = v \sin(\theta) \\ \dot{\theta} = \omega \end{cases}$$

dengan $v$ adalah kecepatan linear (m/s) dan $\omega$ adalah kecepatan sudut (rad/s). Untuk *differential drive* dengan radius roda $r$ dan jarak antar-roda $L$:

$$v = \frac{r(\omega_R + \omega_L)}{2}, \quad \omega = \frac{r(\omega_R - \omega_L)}{L}$$

Aksi diskret yang tersedia adalah subset dari $(v, \omega)$: misalnya $A = \{(-0{,}3, 0), (0, 0), (0{,}3, 0), (0, 0{,}5), (0, 0,-0{,}5)\}$ yang mewakili "mundur pelan", "diam", "maju", "belok kanan", "belok kiri".

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi End-to-End

Implementasi RL-based motion planning dalam lingkungan industri mengikuti arsitektur berlapis yang terdiri dari empat subsistem utama, sebagaimana diuraikan Kala (2024) dan Borah (2024):

**a. Subsistem Persepsi (Perception Layer):**
- LiDAR 2D/3D dengan rentang pemindaian 25–100 m dan frekuensi 10–40 Hz.
- Encoder okupansi probabilistic yang mengkonversi raw scan menjadi *costmap* dengan grid 0,25 m.
- Sensor fusion dengan IMU dan odometry wheel untuk estimasi pose (Extended Kalman Filter sesuai Borah, 2024).

**b. Subsistem Keputusan (Decision Layer):**
- Agen RL dengan arsitektur DQN 3-layer MLP: input (lidar scan 360°) → Dense(256) → ReLU → Dense(128) → ReLU → Dense($|A|$).
- Output Q-value untuk setiap aksi diskret.

**c. Subsistem Kontrol Gerak (Control Layer):**
- PID controller untuk mengejar referensi $(v_{ref}, \omega_{ref})$ dari aksi diskret.
- *Trajectory smoothing* dengan polinomial orde-3 untuk menghindari osilasi heading.

**d. Subsistem Pemantauan & Keselamatan (Safety Layer):**
- *Emergency stop* berbasis laser scanner zona-1 (ISO 3691-4:2020).
- Watchdog timer untuk mendeteksi *stuck state* (agen tidak bergerak > 30 detik).

### 3.2 Diagram Alir Prosedur Operasional

```
┌─────────────────────────────────────────────┐
│   MULAI: Inisialisasi Episod RL              │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 1. Baca state s_t dari sensor (lidar, IMU)  │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 2. Pilih aksi a_t via ε-greedy:             │
│    - dengan prob ε: aksi acak               │
│    - dengan prob 1-ε: argmax_a Q(s_t,a)     │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 3. Eksekusi aksi via kontroler PID          │
│    (10 ms loop rate)                         │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 4. Amati reward r_{t+1}, state s_{t+1}      │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 5. Simpan (s_t,a_t,r_{t+1},s_{t+1}) ke      │
│    Replay Buffer D                           │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 6. Sample minibatch dari D, update θ        │
│    setiap C langkah via gradien L(θ)        │
└────────────────────┬────────────────────────┘
                     ▼
              ┌──────┴──────┐
              │ Goal tercapai?│
              └──┬───────┬──┘
                 Ya      Tidak
                  ▼       ▼
            [Simpan    [Kembali
             model]    ke step 1]
```

### 3.3 Prosedur Kalibrasi & Validasi

Mengacu pada standar ISO 3691-4:2020 untuk *driverless industrial trucks* dan integrasi RL menurut Kala (2024), SOP kalibrasi meliputi:

1. **Pemetaan awal** (*SLAM*) dengan presisi < 5 cm.
2. **Simulasi pra-deployment** minimal 10.000 episode di *digital twin* (Gazebo/Isaac Sim).
3. **Pelatihan bertahap** (*curriculum learning*): mulai dari 0 rintangan → 5 → 20 rintangan.
4. **Validasi lapangan** dengan *safety pilot* selama 40 jam pertama operasi.
5. **Audit berkala** setiap 250 jam operasi untuk *policy drift*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah *fulfillment center* e-commerce seluas 6.000 m² menggunakan 12 unit AMR untuk memindahkan *totes* dari *staging area* ke *pick stations*. Kita akan merancang kebijakan motion planning RL untuk satu AMR dengan parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Panjang lorong kerja | 60 | m |
| Lebar lorong | 2,4 | m |
| Resolusi grid $r$ | 0,25 | m |
| Kecepatan nominal $v$ | 1,2 | m/s |
| Kecepatan sudut $\omega$ | 0,9 | rad/s |
| Faktor diskonto $\gamma$