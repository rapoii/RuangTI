# 3044 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning* dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 menuju *Society 5.0* mendorong perusahaan manufaktur, logistik, dan pergudangan untuk mengadopsi *Autonomous Mobile Robot* (AMR) dan *Automated Guided Vehicle* (AGV) secara masif. Menurut Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), perencanaan gerak (*motion planning*) merupakan salah satu pilar rekayasa kritis yang menentukan tingkat otonomi sebuah robot di lingkungan industri yang dinamis. Berbeda dengan robot konvensional yang bergantung pada lintasan tetap (*fixed trajectory*), AMR modern harus mampu merencanakan, merevisi, dan mengeksekusi lintasannya secara *real-time* ketika menghadapi hambatan dinamis seperti pejalan kaki, forklift lain, atau perubahan tata letak rak gudang.

Urgensi ekonomis dari adopsi motion planning berbasis Reinforcement Learning (RL) semakin nyata. Pasar global AMR/AGV diproyeksikan melampaui USD 8 miliar pada 2030 dengan *Compound Annual Growth Rate* (CAGR) lebih dari 15% (Kala, 2024). Dalam konteks rantai pasok, kesalahan perencanaan gerak satu robot saja dapat menimbulkan *downtime* kumulatif hingga 8–12 jam per bulan, setara kerugian produktivitas Rp 150–250 juta per robot per tahun pada operasional *e-commerce fulfillment center* berskala menengah di Indonesia. Selain itu, Borah (2024) dalam disertasinya yang dipublikasikan dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) menekankan bahwa sistem multi-agen otonom (*Smart Autonomous Multi-Agent Systems*/SAMAS) memerlukan integrasi antara *nonlinear filtering*, deteksi-isolasi-rekonstruksi fault (FDIR), dan algoritma RL agar robot-robot dapat beroperasi secara kolaboratif di lingkungan industri yang sarat gangguan sensor, aktuator, dan komunikasi jaringan.

Dari sisi teknikal, permasalahan motion planning di industri dapat diformulasikan sebagai pencarian lintasan optimal pada ruang state kontinu-diskrit dengan kendala non-konveks (misalnya zona steril, lorong sempit, dan rambu-rambu K3). Metode konvensional seperti *Artificial Potential Field* (APF) dan *Rapidly-exploring Random Tree* (RRT) memiliki kelemahan berupa *local minima* dan ledakan kompleksitas kombinatorial ketika dimensi state melebihi 6 (Kala, 2024). RL, khususnya *Deep Q-Network* (DQN) dan *Proximal Policy Optimization* (PPO), menawarkan solusi *model-free* yang mampu belajar kebijakan navigasi langsung dari pengalaman interaksi dengan lingkungan, sehingga adaptif terhadap variasi tata letak pabrik tanpa perlu pemrograman ulang manual.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka matematis dominan untuk motion planning menggunakan RL adalah *Markov Decision Process* (MDP) 5-tupel. Formulasi dasarnya menurut Kala (2024):

$$M = \langle S, A, P, R, \gamma \rangle$$

di mana:
- $S$ = himpunan state (posisi, orientasi, kecepatan, dan pembacaan sensor robot),
- $A$ = himpunan aksi diskret/kontinu (translasi, rotasi, akselerasi),
- $P(s'|s,a)$ = probabilitas transisi state,
- $R(s,a)$ = fungsi reward,
- $\gamma \in [0,1)$ = faktor diskon untuk horizon tak hingga.

Tujuan robot adalah memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^{k} R(s_{t+k}, a_{t+k})$$

Kebijakan optimal $\pi^*(a|s)$ memenuhi *Bellman Optimality Equation*:

$$V^*(s) = \max_{a \in A} \left[ R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) V^*(s') \right]$$

Untuk kasus di mana model transisi $P$ tidak diketahui (model-free), digunakan algoritma **Q-Learning** dengan aturan pembaruan:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Kala (2024) menjelaskan bahwa untuk ruang state kontinu berdimensi tinggi (misalnya input kamera LiDAR 360°), fungsi $Q(s,a;\theta)$ diaproksimasi oleh *neural network* dengan parameter $\theta$, menghasilkan arsitektur **Deep Q-Network (DQN)** dengan *loss function*:

$$L(\theta) = \mathbb{E}\left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^{-}$ adalah parameter *target network* yang diperbarui periodik untuk menstabilkan pelatihan.

Fungsi reward untuk motion planning industri pada umumnya berbentuk:

$$r_t = -d(s_t, s_{goal}) + \beta \cdot \mathbb{1}_{collision} - \lambda \cdot \Delta t$$

dengan $d(s_t, s_{goal})$ adalah jarak Euclidean ke target, $\beta$ penalti tabrakan (negatif besar), $\lambda$ penalti waktu/langkah, dan $\mathbb{1}_{collision}$ indikator insiden.

Untuk sistem multi-agen (Borah, 2024), formulasi diperluas menjadi *Decentralized Partially Observable MDP* (Dec-POMDP):

$$M_{multi} = \langle I, S, \{A_i\}, P, \{R_i\}, \{\Omega_i\}, \{O_i\}, \gamma \rangle$$

di mana setiap agen $i \in I$ memiliki observasi parsial $o_i \in \Omega_i$ dan reward lokal $R_i$. Koordinasi dicapai melalui pembelajaran kebijakan bersama (*shared policy*) atau *communication channel* dengan pesan $m_i$ berdimensi terbatas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP 7-tahap yang diadaptasi dari kerangka Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Lingkungan (Environment Modeling).**
Pabrik/peta gudang direpresentasikan sebagai *occupancy grid* 2D atau *voxel grid* 3D dengan resolusi 0,1–0,5 m. Sel yang mengandung rak, mesin, atau zona terlarang ditandai sebagai obstacle (nilai 1), sedangkan area bebas bernilai 0.

**Tahap 2 — Diskretisasi State-Aksi.**
Untuk AGV, state dapat direduksi menjadi tuple $s = (x, y, \theta, v, d_{LiDAR})$ dengan aksi diskret $a \in \{$maju, mundur, belok-kiri, belok-kanan, berhenti$\}$. Resolusi umum: 0,25 m per sel, 15° per bin heading.

**Tahap 3 — Desain Fungsi Reward.**
Insinyur industri menetapkan bobot reward melalui kalibrasi *expert heuristic* dan *sim-to-real tuning*. Contoh reward shaping:

$$r_t = -0{,}5 \cdot d_t - 2 \cdot \mathbb{1}_{near\_obs} + 100 \cdot \mathbb{1}_{goal}$$

**Tahap 4 — Pelatihan Simulasi (Sim2Real).**
Latih agen RL dalam simulator fisika tinggi (Gazebo, Isaac Sim, Webots) selama 1–5 juta episode dengan *domain randomization* pada tekstur, pencahayaan, dan parameter dinamika robot. *Replay buffer* berkapasitas $10^5$–$10^6$ transisi.

**Tahap 5 — Validasi dengan Nonlinear Filtering (Borah, 2024).**
Terapkan *Extended Kalman Filter* (EKF) atau *Unscented Kalman Filter* (UKF) untuk mengestimasi state aktual robot dari pengukuran sensor yang derau. Persamaan prediksi EKF:

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_{k-1})$$
$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$
$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$

di mana $F_k$ dan $H_k$ adalah Jacobian dari model transisi dan observasi. Langkah ini memastikan *fault detection and isolation* (FDI) ketika sensor LiDAR gagal atau komunikasi agen terputus.

**Tahap 6 — Transfer ke Robot Fisik (Sim-to-Real Transfer).**
Lakukan *fine-tuning* kebijakan RL pada robot fisik dengan *safety layer* berupa *control barrier function* (CBF) untuk mencegah aksi berbahaya selama eksplorasi awal.

**Tahap 7 — Pemantauan Operasional dan Retraining Berkala.**
Pantau *Key Performance Indicator* (KPI): *task completion rate*, *average path length*, *collision rate per 1000 km*, dan *energy consumption per mission*. Lakukan *online fine-tuning* mingguan untuk adaptasi terhadap perubahan tata letak musiman.

Diagram alir lengkapnya adalah sebagai berikut:

```
[Data LiDAR/Kamera] → [EKF State Estimation] → [MDP State s_t]
        ↓                                          ↓
[FDI Module]                              [Policy π_θ(a|s_t)]
        ↓                                          ↓
[Fault Alert] ←──────[Aktor Robot] ←──────[Aksi a_t] 
        ↓                                          ↓
[Reward r_t] ←─────────────────────[Environment Transition]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** AGV *picker-to-packer* di gudang *e-commerce* 50 m × 30 m, mengambil barang dari *picking station* A(5,5) ke *packing station* B(45,25). Satu halangan permanen (rak) menutup koordinat (20–25, 10–15).

**Langkah 1 — Inisialisasi Q-Table.**
Kita gunakan grid diskret 10×10 (resolusi 5 m). Inisialisasi $Q(s,a) = 0$ untuk seluruh 100 state × 5 aksi.

**Langkah 2 — Episode Pertama (Eksplorasi Acak, $\epsilon = 1$).**
Robot dari $s_0 = (1,1)$ dengan kebijakan acak menghasilkan lintasan: $(1,1) \to (2,1) \to (2,2) \to (3,2)$. Reward per langkah $r = -0{,}5 \cdot d_t = -0{,}5 \cdot \sqrt{(45-3)^2+(25-2)^2} = -0{,}5 \cdot 43{,}83 = -21{,}91$.

**Langkah 3 — Update Q-Learning dengan Parameter $\alpha = 0{,}1$, $\gamma = 0{,}9$.**
Misalkan agen sampai di $s' = (2,2)$ setelah aksi "maju". Update:

$$Q((1,1), maju) \leftarrow 0 + 0{,}1 \cdot [(-21{,}91) + 0{,}9 \cdot \max_{a'} Q((2,2),a') - 0]$$
$$Q((1,1), maju) \leftarrow -2{,}191$$

**Langkah 4 — Setelah 5.000 Episode Konvergensi.**
Asumsikan Q-table konvergen dengan $Q(s_{goal}, a) = +100$ untuk semua aksi di *packing station*. Hitung *expected path length* optimal.

Lakukan *value iteration* untuk state di sekitar goal. Untuk state $s = (8,4)$ (satu langkah