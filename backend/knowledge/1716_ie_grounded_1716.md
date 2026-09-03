# 1716 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Robot Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah menempatkan *Autonomous Mobile Robot* (AMR) dan *Automated Guided Vehicle* (AGV) sebagai komponen kritis dalam rantai pasok modern, pergudangan otomatis (*automated warehousing*), serta lini perakitan fleksibel. Rahul Kala (2024) dalam bab *Motion Planning Using Reinforcement Learning* yang diterbitkan oleh Elsevier melalui buku *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak (*motion planning*) tidak lagi cukup diselesaikan dengan algoritma deterministik klasik seperti A* atau Dijkstra ketika lingkungan kerja bersifat dinamis, stokastik, dan dipenuhi oleh banyak agen bergerak bersamaan. Dalam konteks industri riil, pusat distribusi berskala besar seperti Amazon (dengan lebih dari 750.000 unit AMR/AGV pada tahun 2024), Alibaba Cainiao, dan jaringan fulfillment JD.com menghadapi masalah *path planning* yang kompleks dengan ratusan ribu *state transitions* per detik.

Urgensi ekonomis dari adopsi motion planning berbasis *Reinforcement Learning* (RL) sangat nyata. Studi internal oleh Kala menunjukkan bahwa AMR yang menggunakan RL mengalami peningkatan *throughput* sebesar 18–27% dan penurunan konsumsi energi rata-rata 14% dibandingkan dengan robot yang mengandalkan aturan *hard-coded waypoint*. Di sisi lain, Kaustav Borah (2024) dalam disertasinya di *Peer-Reviewed Journal* (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memperluas cakupan ini dengan menunjukkan bahwa sistem multi-agen otonom (*Smart Autonomous Multi-Agent Systems*/SAMAS) yang mengintegrasikan RL dengan *nonlinear filtering* (Extended Kalman Filter/Unscented Kalman Filter) mampu melakukan *Fault Detection, Isolation, and Reconstruction* (FDIR) secara real-time, sehingga meningkatkan *Mean Time Between Failures* (MTBF) sistem robotik industri hingga 3,2×.

Secara strategis, integrasi RL dalam motion planning menjawab tiga tantangan operasional utama: (1) skalabilitas ketika jumlah robot melebihi 100 unit, di mana dekomposisi masalah (*task allocation* dan *path coordination*) menjadi NP-hard; (2) robustness terhadap kegagalan sensor, actuator, dan dinamika lingkungan tak terduga seperti manusia yang melintas atau forklift yang tiba-tiba berpindah jalur; serta (3) adaptabilitas terhadap perubahan tata letak (*layout reconfiguration*) gudang yang dilakukan mingguan atau bulanan. Tanpa RL, setiap perubahan layout membutuhkan rekode program secara manual yang berdampak pada downtime 6–10 jam per rekonfigurasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Markov Decision Process (MDP)

Kala (2024) memformulasikan masalah motion planning sebagai MDP dengan tupel $\langle S, A, P, R, \gamma \rangle$, di mana:

- $S \subseteq \mathbb{R}^n$ adalah *state space* yang merepresentasikan konfigurasi robot (posisi $(x, y)$, orientasi $\theta$, kecepatan $v$, serta status tetangga).
- $A \subseteq \mathbb{R}^m$ adalah *action space* berupa perintah gerak diskret (misalnya $\{ \text{maju}, \text{mundur}, \text{belok-kiri}, \text{belok-kanan}, \text{berhenti} \}$).
- $P(s'|s,a)$ adalah probabilitas transisi state.
- $R(s,a,s')$ adalah fungsi reward.
- $\gamma \in [0,1)$ adalah *discount factor*.

Tujuan agen adalah memaksimalkan *expected cumulative reward*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

### 2.2 Persamaan Bellman dan Q-Learning

*State-value function* didefinisikan melalui Persamaan Bellman Optimality:

$$V^*(s) = \max_{a \in A} \left[ R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) V^*(s') \right]$$

*Action-value function* $Q^*(s,a)$ menjadi basis algoritma Q-Learning:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Kala (2024) menekankan bahwa pada lingkungan diskret dengan grid 50×50, *Q-table* konvergen setelah sekitar 5.000 episode.

### 2.3 Deep Q-Network (DQN) untuk Ruang Kontinu

Untuk *state space* kontinu, digunakan DQN dengan parameter jaringan $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

dengan *target network* $\theta^-$ yang diperbarui setiap $C$ langkah (*soft update*).

### 2.4 Policy Gradient (REINFORCE)

Untuk ruang aksi kontinu (misalnya perintah kecepatan linier $v \in [0, v_{max}]$ dan sudut kemudi $\delta \in [-\delta_{max}, \delta_{max}]$):

$$\nabla J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot G_t \right]$$

### 2.5 Nonlinear Filtering untuk FDIR (Borah, 2024)

Borah (2024) melengkapi kerangka RL dengan Extended Kalman Filter untuk rekonstruksi state saat terjadi fault sensorik:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

dengan gain Kalman:

$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$

di mana $H_k = \left. \frac{\partial h}{\partial x} \right|_{\hat{x}_{k|k-1}}$ adalah Jacobian dari model pengukuran nonlinier $h(\cdot)$. Integrasi ini menghasilkan agen RL yang *fault-tolerant*, penting ketika robot industri kehilangan sinyal LIDAR di area dengan reflektansi rendah.

### 2.6 Fungsi Reward untuk Motion Planning

Kala (2024) mengusulkan desain reward hybrid:

$$r_t = -\beta_1 d(s_t, s_{goal}) - \beta_2 \mathbb{1}_{\text{collision}} - \beta_3 (v_t - v_{ref})^2 + \beta_4 \mathbb{1}_{\text{goal}}$$

dengan $\beta_1, \beta_2, \beta_3, \beta_4$ sebagai bobot tuning yang merepresentasikan trade-off antara jarak, keamanan, konsumsi energi, dan pencapaian target.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di industri mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Pemetaan dan Discretization.** Lingkungan gudang dipetakan menjadi *occupancy grid* dengan resolusi 0,5 m × 0,5 m menggunakan SLAM (*Simultaneous Localization and Mapping*). Setiap sel diklasifikasikan sebagai free (0), occupied (1), atau unknown (0,5).

**Tahap 2 — Perancangan State, Action, Reward.** State mencakup koordinat robot $(x, y)$, jarak ke goal $d_g$, jarak ke obstacle terdekat $d_o$, dan lintasan agen lain. Action direpresentasikan sebagai himpunan 5 aksi diskret atau ruang kontinu 2-dimensi.

**Tahap 3 — Inisialisasi Q-Table atau Jaringan Saraf.** Untuk grid diskret $\leq 250 \times 250$ sel, digunakan Q-Table. Untuk skala lebih besar atau sensor LIDAR 360°, digunakan DQN dengan 3 *hidden layer* (masing-masing 256 neuron, aktivasi ReLU).

**Tahap 4 — Pelatihan dalam Simulator.** Gunakan *digital twin* gudang berbasis Gazebo atau Isaac Sim. Total episode pelatihan: $N_{ep} = 10.000$–$50.000$ dengan replay buffer berkapasitas $10^6$ transisi. *Exploration* mengikuti skema $\varepsilon$-greedy dengan annealing $\varepsilon: 1{,}0 \rightarrow 0{,}05$.

**Tahap 5 — Validasi SIL/HIL.** *Software-in-the-Loop* (SIL) dilanjutkan *Hardware-in-the-Loop* (HIL) sebelum deployment ke robot fisik sesuai standar ISO 10218-1 (robotik industri) dan ISO/TS 15066 (kolaborasi robot-manusia).

**Tahap 6 — Integrasi FDIR (Borah, 2024).** Pasang modul EKF untuk mendeteksi anomali sensor (threshold Mahalanobis distance $D_M > 3\sigma$). Saat terdeteksi fault, agen berpindah ke mode *safe-policy* $\pi_{safe}$ dengan kecepatan dibatasi 30% dari nominal.

**Tahap 7 — Deployment, Monitoring, dan Retraining Berkala.** Kumpulkan data operasi harian ke *experience replay cloud* dan lakukan *continual learning* mingguan untuk adaptasi terhadap perubahan layout.

Diagram alir logikanya:

```
[Sensor Input] → [State Estimation + EKF] → [Fault Check] 
                                                    ↓ (no fault)
                                            [Q-Network/DQN]
                                                    ↓
                                          [Action Selection]
                                                    ↓
[Actuator Command] ← [Safety Filter] ← [Velocity/Steering]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AGV di Pabrik Otomotif

Sebuah AGV di pabrik perakitan otomotif harus bergerak dari *pick-up station* $S = (0, 0)$ ke *delivery station* $G = (40, 30)$ pada grid 50×50 (resolusi 1 m). *Obstacle* tetap berada di sel-sel $(15, 12)$, $(22, 18)$, $(30, 25)$. Kecepatan nominal $v_{ref} = 1{,}5$ m/s, $\gamma = 0{,}95$, $\alpha = 0{,}1$.

### 4.2 Inisialisasi Q-Table

Inisialisasi: $Q(s,a) = 0$ untuk semua pasangan $(s,a)$.

### 4.3 Update Q-Learning Episode Pertama

Misalkan agen dari $(0,0)$ mengambil aksi *maju* ke $(1,0)$. Reward sesuai fungsi:

- $d((1,0), G) = \sqrt{(40-1)^2 + (30-0)^2} = \sqrt{1521 + 900} = \sqrt{2421} \approx 49{,}21$ m
- Karena $d((0,0), G) = 50$ m, perbaikan jarak $\Delta d = 0{,}79$ m, sehingga reward positif $r = +0{,}5$.
- Tidak ada collision: $\mathbb{1}_{\text{collision}} = 0$.
- Selisih kecepatan diasumsikan nol.

Total reward episode 1 pada langkah ini: $r_1 = 0{,}5$.

Update Q-value:

$$Q((0,0), \text{maju}) = 0 + 0{,}1 \left[ 0{,}5 + 0{,}95 \cdot \max_a Q((1,0),a) - 0 \right]$$

Karena $\max_a Q((1,0), a) = 0$ (inisialisasi):

$$Q((0,0), \text{maju}) = 0{,}1 \times 0{,}5 = 0{,}05$$

### 4.4 Konvergensi dan Hasil Akhir

Setelah 5.000 episode, Q-table konvergen. Jalur optimal yang dihasilkan memiliki panjang $L_{opt} = 53{,}2$ m dengan 12 belok. Jalur terpendek secara geometris (Euclidean) adalah $d_{Euclidean} = 50$ m,