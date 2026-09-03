# 3012 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Menggunakan Reinforcement Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning menggunakan Reinforcement Learning untuk Robot Bergerak Otonom dalam Lingkungan Manufaktur dan Logistik
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Robot bergerak otonom (Autonomous Mobile Robots/AMR) telah menjadi tulang punggung transformasi industri 4.0 dan 5.0, khususnya dalam operasional intralogistik, pergudangan otomatis, lini perakitan fleksibel, dan sistem manufaktur responsif. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (motion planning) merupakan salah satu kemampuan paling kritis yang menentukan keberhasilan misi robot di lingkungan industri yang dinamis dan tidak terstruktur. Berbeda dengan robot industri tradisional yang beroperasi di lingkungan terkurung dengan lintasan tetap (seperti robot manipulator di sel kerja tetap), AMR harus mampu menavigasi ruang kerja bersama manusia (human-robot collaboration), menghindari rintangan dinamis, dan mengoptimalkan konsumsi energi secara real-time (Kala, 2024).

Urgensi ekonomis dari adopsi AMR sangat nyata. Menurut proyeksi yang dikutip dalam literatur, pasar global AMR diperkirakan melebihi USD 8 miliar pada 2030 dengan tingkat pertumbuhan tahunan gabungan (CAGR) di atas 20%. Dalam konteks Teknik Industri, AMR menggantikan sistem conveyor tradisional yang memerlukan investasi modal tinggi (CAPEX) sebesar USD 3–10 juta per fasilitas, dengan solusi fleksibel yang dapat diimplementasikan secara bertahap. Kala (2024) menyoroti bahwa tantangan terbesar dalam AMR adalah menghasilkan kebijakan navigasi (policy) yang optimal ketika peta lingkungan tidak lengkap, sensor mengandung derau (noise), dan terdapat ketidakpastian gerakan akibat slip roda atau gangguan lantai.

Pendekatan konvensional untuk motion planning, seperti Algoritma Dijkstra, A*, Rapidly-exploring Random Tree (RRT), dan Potential Field, bekerja optimal pada lingkungan statis dengan peta lengkap. Ketika lingkungan berubah secara dinamis—misalnya ketika pallet dipindahkan, operator manusia melintas, atau AGV lain beroperasi sebagai moving obstacle—algoritma ini memerlukan komputasi ulang yang mahal. Di sinilah Reinforcement Learning (RL) menawarkan paradigma baru: robot belajar kebijakan navigasi optimal melalui interaksi berulang dengan lingkungannya, sehingga mampu menggeneralisasi solusi untuk kondisi yang belum pernah dijumpai selama pelatihan (Kala, 2024).

Kontribusi metodologis yang relevan juga ditemukan dalam disertasi Kaustav Borah (2024) yang mengusulkan kerangka *Smart Autonomous Multi-agent Systems* (SAMAS) berbasis RL untuk deteksi, isolasi, dan rekonstruksi kesalahan (FDIR). Borah (2024) menunjukkan bahwa ketika beberapa agen beroperasi dalam sistem multi-robot, pembelajaran kebijakan terdistribusi berbasis RL memungkinkan koordinasi yang resilient terhadap kegagalan sensor, aktuator, maupun kegagalan komunikasi jaringan. Integrasi antara motion planning berbasis RL (Kala, 2024) dengan arsitektur SAMAS (Borah, 2024) menjadi cetak biru bagi sistem manufaktur otonom generasi berikutnya yang tidak hanya cerdas secara individual tetapi juga kooperatif dan fault-tolerant secara kolektif.

Dalam konteks industri manufaktur Indonesia—yang tengah menghadapi Revolusi Industri 4.0 melalui program *Making Indonesia 4.0*—penguasaan teknologi motion planning RL menjadi kompetensi strategis bagi insinyur Teknik Industri. Implementasi AMR berbasis RL di PT Unilever Indonesia, PT Toyota Astra Motor, dan berbagai pusat distribusi e-commerce seperti Shopee dan Tokopedia menunjukkan bahwa kemampuan navigasi adaptif menjadi pembeda kompetitif utama.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Reinforcement Learning untuk motion planning diformulasikan secara formal sebagai Markov Decision Process (MDP) yang didefinisikan oleh tupel $(S, A, P, R, \gamma)$ (Kala, 2024):

$$MDP = (S, A, P, R, \gamma)$$

di mana:
- $S$ = himpunan状态 (state space) yang merepresentasikan konfigurasi robot dan lingkungannya
- $A$ = himpunan aksi (action space), misalnya $\{$maju, mundur, belok kiri, belok kanan$\}$
- $P(s'|s,a)$ = probabilitas transisi dari state $s$ ke state $s'$ ketika aksi $a$ dieksekusi
- $R(s,a,s')$ = fungsi reward langsung yang diterima
- $\gamma \in [0,1)$ = faktor diskon untuk nilai masa depan

### 2.2 Persamaan Bellman

Tujuan optimalisasi RL adalah menemukan kebijakan $\pi^*: S \to A$ yang memaksimalkan *expected cumulative discounted reward*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k r_{t+k+1}$$

Fungsi nilai state optimal $V^*(s)$ memenuhi Persamaan Bellman Optimality (Kala, 2024):

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

Sementara fungsi nilai aksi (action-value) optimal didefinisikan sebagai:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right]$$

### 2.3 Algoritma Q-Learning

Untuk motion planning dengan ruang state diskret (misalnya grid world), algoritma Q-Learning diterapkan dengan aturan pembaruan berikut (Kala, 2024):

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah laju pembelajaran (learning rate). Konvergensi Q-Learning ke $Q^*$ dijamin jika semua pasangan state-action dikunjungi tak hingga kali dan $\alpha$ memenuhi kondisi Robbins-Monro:

$$\sum_{t=1}^{\infty} \alpha_t = \infty \quad \text{dan} \quad \sum_{t=1}^{\infty} \alpha_t^2 < \infty$$

### 2.4 Desain Fungsi Reward untuk Motion Planning

Kala (2024) menekankan bahwa desain reward function menentukan kualitas kebijakan yang dipelajari. Untuk masalah navigasi, fungsi reward tipikal adalah:

$$R(s,a,s') = \begin{cases} 
+100 & \text{jika } s' = s_{goal} \\
-50 & \text{jika } s' \in S_{obstacle} \\
-1 & \text{jika碰撞 dinding} \\
-\beta \cdot d(s', s_{goal}) & \text{otherwise}
\end{cases}$$

di mana $d(s', s_{goal})$ adalah jarak Euclidean antara state baru dan goal, dengan $\beta$ sebagai bobot pengarah (shaping reward). Pendekatan *reward shaping* ini secara teoritis terbukti tidak mengubah kebijakan optimal jika potensial $\Phi$ memenuhi kondisi *potential-based* (Ng et al., 1999, yang dirujuk oleh Kala, 2024):

$$F(s,s') = \gamma \Phi(s') - \Phi(s)$$

### 2.5 Deep Q-Network (DQN) untuk State Berdimensi Tinggi

Ketika state space terlalu besar untuk tabel Q (misalnya input kamera), Kala (2024) mengusulkan penggunaan Deep Q-Network dengan parameter $\theta$:

$$Q(s,a;\theta) \approx Q^*(s,a)$$

Fungsi loss untuk melatih jaringan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* untuk dekorelasi sampel.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP terstruktur sebagai berikut (disintesis dari Kala, 2024 dan Borah, 2024):

### Langkah 1: Analisis Sistem dan Pemodelan Lingkungan
- Identifikasi parameter kinematik robot (radius roda, kecepatan maksimum, akselerasi)
- Diskretisasi ruang kerja menjadi grid sel berukuran $0.5 \times 0.5$ m atau octree representation
- Inventarisasi lokasi statis (rack, mesin, dinding) dan zona dinamis (jalur pejalan kaki)
- Penetuan koordinat start $(x_s, y_s)$ dan goal $(x_g, y_g)$

### Langkah 2: Desain State, Action, dan Reward
- **State**: $(x, y, \theta, v, \text{LIDAR readings})$ atau representasi grid diskret
- **Action**: 5 aksi diskret $\{$stay, maju 0.5 m, putar kiri 15°, putar kanan 15°, mundur$\}$
- **Reward**: sesuai formula pada Bagian 2.4

### Langkah 3: Implementasi Algoritma RL
Gunakan arsitektur **DQN** dengan tiga komponen utama: (1) Q-network dengan 3 hidden layers (256-256-128 neuron, aktivasi ReLU), (2) target network, dan (3) experience replay buffer kapasitas 100.000 transisi. Hyperparameter: $\alpha = 10^{-4}$, $\gamma = 0.99$, $\epsilon$-greedy decay dari 1.0 ke 0.05 selama 10.000 episode.

### Langkah 4: Pelatihan dalam Simulator
Menggunakan simulator Gazebo atau Isaac Sim dengan akselerasi 1000× (wall-clock time). Jumlah episode: 50.000–100.000 episode atau hingga reward kumulatif konvergen.

### Langkah 5: Validasi dan Sim-to-Real Transfer
Uji kebijakan di lingkungan nyata menggunakan **domain randomization** (variasi tekstur lantai, intensitas cahaya, posisi rintangan). Borah (2024) menambahkan komponen nonlinear filtering (Extended Kalman Filter) untuk memitigasi derau sensor pada tahap ini.

### Langkah 6: Integrasi dengan Sistem Multi-Agen
Jika deployed dalam *swarm*, gunakan kerangka SAMAS (Borah, 2024) dengan protokol komunikasi MQTT atau ROS 2 DDS, ditambah modul FDIR untuk deteksi anomali.

### Diagram Alir Proses

```
┌─────────────────────┐
│ Inisialisasi Q(s,a) │ ← nol atau random
└──────────┬──────────┘
           ▼
┌─────────────────────┐    ┌─────────────────┐
│ Observasi state s_t │───▶│ Pilih aksi a_t  │ (ε-greedy)
└──────────┬──────────┘    └────────┬────────┘
           ▲                       ▼
┌─────────────────────┐    ┌─────────────────┐
│ Update Q(s,a) dengan│◀───│ Eksekusi a_t,   │
│ rumus Bellman       │    │ amati r, s'     │
└──────────┬──────────┘    └─────────────────┘
           ▼
┌─────────────────────┐
│ Konvergen? atau     │
│ s' = terminal?      │
└──────┬───────┬──────┘
   Tidak│       │Ya
        ▼       ▼
    (loop)   [Deploy π*]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah Automated Guided Vehicle (AGV) beroperasi di gudang e-commerce $10 \times 10$ meter, divisualisasikan sebagai **grid 5×5** (tiap sel = 2×2 m). AGV harus berpindah dari **start S = (1,1)** ke **goal G = (5,5)**, menghindari **dua zona rintangan statis** di (3,3) dan (4,3).

Parameter:
- Aksi diskret: Atas (↑), Bawah (↓), Kiri (←), Kanan (→)
- Learning rate $\alpha =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
