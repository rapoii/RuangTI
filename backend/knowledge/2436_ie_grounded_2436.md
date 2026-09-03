# 2436 — Perencanaan Gerak Berbasis Reinforcement Learning untuk Sistem Otonom Multi-Agen dalam Konteks Teknik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion Planning using Reinforcement Learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah memposisikan *Autonomous Mobile Robot* (AMR) dan sistem multi-agen sebagai tulang punggung baru rantai pasok modern, khususnya di sektor manufaktur, pergudangan, dan logistik *e-commerce*. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menyoroti bahwa perencanaan gerak (*motion planning*) merupakan salah satu tantangan fundamental yang menentukan keberhasilan operasional armada robot otonom di lingkungan industri yang dinamis, tidak terstruktur, dan rawan interferensi manusia (Kala, 2024; DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Berbeda dengan robot industri tradisional yang beroperasi di *cage* dengan lintasan deterministik, AMR dituntut untuk bernavigasi secara *real-time* dengan kemampuan *obstacle avoidance*, penemuan ulang jalur, dan optimalisasi konsumsi energi.

Konteks industri yang melatarbelakangi urgensi topik ini sangat kuat. Pertama, *Amazon Robotics* melaporkan bahwa konversi gudang menjadi sistem robotik menghasilkan peningkatan throughput拣选 pesanan hingga 400% dengan tingkat kesalahan拣选 yang turun di bawah 0,01%. Kedua, *market size* AMR global diproyeksikan tumbuh dari USD 4,8 miliar (2023) menjadi USD 12,1 miliar (2030) dengan CAGR 14,2%, didorong oleh *labor shortage* dan meningkatnya kompleksitas SKU. Ketiga, integrasi Reinforcement Learning (RL) ke dalam *motion planning* memungkinkan robot untuk belajar dari interaksi lingkungan tanpa pemodelan eksplisit, sehingga menurunkan biaya *engineering* integrasi yang sebelumnya didominasi oleh *hard-coded path planning* seperti A* atau Rapidly-exploring Random Tree (RRT) (Kala, 2024).

Pada tataran multi-agen, kompleksitas meningkat secara eksponensial karena setiap agen harus memperhitungkan kebijakan agen lain. Borah (2024) dalam disertasinya menjelaskan bahwa Smart Autonomous Multi-Agent Systems (SAMAS) dirancang untuk beroperasi pada sistem teknik kompleks yang rawan *malfunction* pada sensor, aktuator, jaringan komunikasi, dan pengendali (Borah, 2024; DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Integrasi RL dengan FDIR (*Fault Detection, Isolation, and Reconstruction*) memungkinkan agen tidak hanya menavigasi tetapi juga melakukan *self-healing* secara otonom. Relevansi industri dari pendekatan ganda ini sangat tinggi: satu *downtime* AMR di lini拣选 Automated Storage and Retrieval System (ASRS) dapat menyebabkan kerugian produksi hingga USD 8.000–15.000 per jam di fasilitas *e-commerce hyperscale*. Dengan demikian, kemampuan *motion planning* yang adaptif dan toleran terhadap kegagalan menjadi variabel strategis bagi *overall equipment effectiveness* (OEE).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) memformulasikan masalah perencanaan gerak otonom sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma \rangle$, di mana:

- $\mathcal{S}$ adalah himpunan state (keadaan) agen yang merepresentasikan konfigurasi *pose*, kecepatan, dan observasi lingkungan,
- $\mathcal{A}$ adalah himpunan aksi diskret atau kontinu (misalnya *linear velocity* $v \in [0, v_{max}]$ dan *angular velocity* $\omega \in [-\omega_{max}, \omega_{max}]$),
- $\mathcal{P}(s_{t+1} \mid s_t, a_t)$ adalah fungsi transisi probabilistik,
- $\mathcal{R}: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$ adalah fungsi reward,
- $\gamma \in [0,1)$ adalah *discount factor* yang mengontrol preferensi reward jangka panjang.

Fungsi nilai state optimal $V^*(s)$ memenuhi **Bellman Optimality Equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} \mathcal{P}(s' \mid s, a) \left[ \mathcal{R}(s, a, s') + \gamma V^*(s') \right]$$

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk lingkungan dengan state diskret, Q-Learning menghasilkan tabel $Q: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}$ yang diperbarui dengan aturan:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Kala (2024) menekankan bahwa untuk AMR industri dengan ruang state kontinu (akibat input sensor LiDAR resolusi tinggi), digunakan aproksimasi fungsi dengan *Deep Q-Network* (DQN) sehingga $Q(s, a; \theta) \approx Q^*(s, a)$ dengan parameter jaringan $\theta$ yang diminimalkan melalui *loss function*:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s'; \theta^{-}) - Q(s, a; \theta) \right)^2 \right]$$

dengan $\theta^{-}$ adalah parameter *target network* yang di-*soft-update* dengan $\tau \ll 1$, dan $\mathcal{D}$ adalah *replay buffer*.

### 2.3 Formulasi Multi-Agen dan SAMAS

Untuk sistem multi-agen dengan $N$ agen, Borah (2024) mendefinisikan ruang aksi gabungan $\mathcal{A} = \mathcal{A}_1 \times \mathcal{A}_2 \times \cdots \times \mathcal{A}_N$ yang menyebabkan *curse of dimensionality*. Solusi yang ditawarkan menggunakan *decentralized partially observable MDP* (Dec-POMDP) $\langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}, \mathcal{P}, \{\Omega_i\}, \mathcal{O}, \{\mathcal{R}_i\} \rangle$ di mana setiap agen $i$ menerima observasi parsial $o_i \in \Omega_i$. Untuk modul FDIR, residual observasi didefinisikan:

$$r_k^{(i)} = z_k^{(i)} - H^{(i)} \hat{x}_{k \mid k-1}^{(i)}$$

dengan *Extended Kalman Filter* (EKF) yang memberikan estimasi state $\hat{x}_{k \mid k-1}^{(i)}$ dan residual ini dibandingkan terhadap ambang $\tau_{FD}$ untuk deteksi fault. Kombinasi residual dan RL policy menghasilkan keputusan *reconfiguration* yang adaptif.

### 2.4 Reward Shaping untuk Navigasi

Reward function untuk AMR dirancang hierarkis:

$$\mathcal{R}(s, a, s') = \underbrace{r_{goal}}_{\text{+100}} + \underbrace{r_{collision}}_{\text{-50}} + \underbrace{r_{time}}_{\text{-0.1}} + \underbrace{r_{smooth}}_{\beta(1 - |\Delta \omega|/\omega_{max})}$$

di mana $\beta$ adalah koefisien smoothing untuk mencegah *oscillatory behavior* pada *differential drive robot* (Kala, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem SAMAS

Borah (2024) mengusulkan arsitektur tiga lapis untuk SAMAS yang selaras dengan standar ISO 10218 (robot industri kolaboratif) dan ISO 3691-4 (AMR):

1. **Lapisan Persepsi**: LiDAR 2D/3D, IMU, *wheel odometry*, dan kamera RGB-D dengan *sensor fusion* berbasis EKF.
2. **Lapisan Keputusan**: Modul RL yang menghasilkan aksi navigasi, ditambah modul FDIR yang memonitor residual.
3. **Lapisan Eksekusi**: *Motion controller* berfrekuensi 100 Hz yang menerima *velocity command* dari lapisan keputusan.

### 3.2 SOP Implementasi RL-based Motion Planning

Berdasarkan sintesis Kala (2024) dan Borah (2024), SOP rekayasa yang direkomendasikan:

**Tahap 1 — Pemodelan Lingkungan.** Definisikan state space (misalnya jarak ke goal $\rho_t$, heading error $\theta_t$, jarak ke obstacle terdekat $d_t$), diskretisasi atau normalisasi untuk jaringan saraf.

**Tahap 2 — Inisialisasi Policy.** Gunakan *behavior cloning* dari data teleoperated atau demonstrasi A* sebagai *pre-training* untuk mengurangi *sample complexity*.

**Tahap 3 — Simulasi Training.** Gunakan *digital twin* (Gazebo, Isaac Sim) untuk 1–2 juta episode, dengan *domain randomization* parameter fisik (massa, gesekan, latency sensor).

**Tahap 4 — Validasi SIL/HIL.** *Software-in-the-Loop* (SIL) dan *Hardware-in-the-Loop* (HIL) sesuai ISO 26262 untuk memastikan *functional safety*.

**Tahap 5 — Deployment dan Continual Learning.** Policy di-*deploy* ke edge GPU (NVIDIA Jetson Orin), dengan *online fine-tuning* menggunakan *safety layer* (Control Barrier Function) sebagai *hard constraint*.

**Tahap 6 — FDIR Integration.** Modul FDIR EKF memonitor $r_k^{(i)}$; ketika $\|r_k\| > \tau_{FD}$, agen memicu *reconfiguration policy* RL yang memilih *safe-state* terdekat (Borah, 2024).

### 3.3 Diagram Alir Logika

```
[Sensor Input] → [State Estimation (EKF)] → [FDIR Residual Check]
       ↓                                          ↓
[Pre-trained Policy π_θ] ← [Fault Detected?]
       ↓                       ↓ (Yes)
[CBF Safety Filter]    [Reconfiguration RL Agent]
       ↓                       ↓
       └──────→ [Motion Controller] → [Actuator Command] ─┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AMR di Gudang *E-Commerce*

Sebuah gudang *e-commerce* Tier-1 di Jakarta memiliki 25 unit AMR拣选 dengan spesifikasi:
- Dimensi: 0,8 m × 0,6 m × 1,2 m
- Sensor: LiDAR 2D 25 m jangkauan, resolusi 0,25°
- Aksi diskret: $\{a_1=\text{maju 0,5 m/s}, a_2=\text{belok kiri 30°/s}, a_3=\text{belok kanan 30°/s}, a_4=\text{berhenti}\}$
- $\gamma = 0{,}95$, $\alpha = 0{,}1$, $\epsilon$-greedy dengan $\epsilon$ decaying dari 0,9 ke 0,05

### 4.2 Perhitungan Q-Update Step-by-Step

Misalkan pada episode 1.000, agen pada state $s_t$ (jarak ke goal 4 m, heading error 20°, obstacle di 1,2 m) memilih $a_t = a_1$ (maju) dan menerima $r_{t+1} = 2{,}5$ (reward intermediasi), berpindah ke $s_{t+1}$ (jarak 3,5 m, obstacle 0,9 m). Tabel Q awal: $Q(s_t, a_1$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
