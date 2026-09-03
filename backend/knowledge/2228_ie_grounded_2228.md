# 2228 — Perencanaan Gerak (Motion Planning) Robot Otonom menggunakan Reinforcement Learning untuk Sistem Manufaktur & Logistik Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju *Industry 4.0* dan *Society 5.0* menempatkan robot otonom sebagai tulang punggung sistem manufaktur fleksibel dan rantai pasok cerdas. Rahul Kala (2024) dalam buku *Autonomous Mobile Robots* menegaskan bahwa perencanaan gerak (*motion planning*) merupakan subsistem paling menentukan bagi kemampuan robot bergerak otonom di lingkungan industri yang dinamis, tidak terstruktur, dan padat gangguan (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Berbeda dengan pendekatan klasik berbasis graf visibilitas atau *Rapidly-exploring Random Tree* (RRT) yang memerlukan pemodelan lingkungan secara eksplisit, Kala (2024) mengusulkan paradigma *Reinforcement Learning* (RL) agar agen robot mampu belajar kebijakan navigasi secara adaptif melalui interaksi trial-and-error dengan lingkungannya.

Urgensi ekonomis dan operasional dari adopsi teknologi ini sangat nyata. McKinsey Global Institute memperkirakan pasar robotika logistik akan bertumbuh dari USD 8,3 miliar (2022) menjadi lebih dari USD 42 miliar pada 2030, didorong oleh tiga faktor struktural: (i) kelangkaan tenaga kerja gudang di negara maju — di Amerika Serikat saja, lowongan posisi material handler mencapai lebih dari 1,1 juta pada 2023; (ii) ekspektasi *same-day delivery* dari raksasa e-commerce seperti Amazon, Alibaba, dan JD.com; serta (iii) kebutuhan akurasi inventaris yang hanya dapat dipenuhi oleh armada *Automated Guided Vehicle* (AGV) dan *Autonomous Mobile Robot* (AMR). Sebagai contoh, Amazon Robotics melaporkan bahwa setiap AMR di pusat fulfillment mereka menggantikan manusia yang berjalan rata-rata 12–16 km per shift, sekaligus menurunkan tingkat kesalahan picking dari 1 dari 300 menjadi 1 dari 10.000.

Di sisi lain, Kaustav Borah (2024) dalam disertasinya menekankan bahwa di dalam sistem multi-agen otonom — seperti armada AGV di sebuah *cross-docking terminal* — deteksi, isolasi, dan rekonstruksi (*Fault Detection, Isolation, and Reconstruction*/FDIR) menjadi prasyarat operasional. Tanpa FDIR yang andal, satu agen yang gagal dapat memicu efek domino berupa kemacetan, konflik lintas jalur, dan kerugian produksi yang material (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Integrasi RL ke dalam perencanaan gerak bukan sekadar inovasi algoritmik, melainkan kebutuhan strategis untuk memastikan *uptime* sistem di atas 99,5% yang menjadi tolok ukur *Service Level Agreement* (SLA) pada industri modern.

Dalam konteks Indonesia, dengan luasnya geografi, dominasi UMKM, dan proyek *smart port* di Tanjung Priok serta Bitung, teknologi RL-based motion planning berpotensi menurunkan *lead time* logistik domestik yang saat ini rata-rata 4,7 hari (BPS, 2023) menjadi di bawah 2 hari. Dengan demikian, menguasai metodologi ini bukan pilihan, melainkan kompetensi inti insinyur industri masa depan.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang digunakan Kala (2024) berakar pada **Markov Decision Process** (MDP), yang didefinisikan sebagai tuple $\langle S, A, P, R, \gamma \rangle$, dengan:
- $S$ : himpunan state (keadaan) robot, misalnya posisi $(x, y)$, orientasi $\theta$, dan pembacaan sensor jarak;
- $A$ : himpunan aksi diskret atau kontinu, misalnya $\{ \text{maju}, \text{belok kiri}, \text{belok kanan}, \text{berhenti} \}$;
- $P(s' \mid s, a)$ : probabilitas transisi ke state $s'$ setelah mengambil aksi $a$ pada state $s$;
- $R(s, a) \in \mathbb{R}$ : fungsi imbal hasil (reward);
- $\gamma \in [0,1)$ : faktor diskonto terhadap imbal hasil masa depan.

Tujuan agen RL adalah menemukan kebijakan $\pi: S \rightarrow A$ yang memaksimumkan *expected discounted return*:

$$J(\pi) = \mathbb{E}_{\pi}\!\left[ \sum_{t=0}^{\infty} \gamma^{t} R(s_{t}, a_{t}) \right] \tag{1}$$

Persamaan Bellman optimalitas yang mendasari seluruh algoritma RL dirumuskan:

$$V^{*}(s) = \max_{a \in A} \left[ R(s, a) + \gamma \sum_{s' \in S} P(s' \mid s, a)\, V^{*}(s') \right] \tag{2}$$

di mana $V^{*}(s)$ adalah *state-value function* optimal. Dalam bentuk *action-value* (Q-function):

$$Q^{*}(s, a) = R(s, a) + \gamma \sum_{s'} P(s' \mid s, a) \max_{a'} Q^{*}(s', a') \tag{3}$$

Untuk sistem dengan state-space berdimensi tinggi (misalnya gudang 50.000 m² yang dipetakan ke dalam *occupancy grid* 500×500 sel), Kala (2024) merekomendasikan penggunaan *Deep Q-Network* (DQN) dengan fungsi aproksimasi $Q(s, a; \theta) \approx Q^{*}(s, a)$, di mana $\theta$ adalah parameter jaringan saraf tiruan. Update parameter dilakukan melalui minimisasi *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^{-}) - Q(s, a; \theta) \right)^{2} \right] \tag{4}$$

dengan $\theta^{-}$ adalah parameter *target network* yang di-*copy* setiap $C$ langkah untuk stabilitas, dan $\mathcal{D}$ adalah *replay buffer*.

Untuk formulasi reward, Kala (2024) menyarankan desain *sparse + shaped reward*:

$$R(s, a) = \alpha_{\text{goal}} \mathbb{1}_{\|p_{t}-p_{\text{goal}}\| < \epsilon} - \alpha_{\text{coll}} \mathbb{1}_{\text{collision}} - \alpha_{\text{time}} \Delta t - \alpha_{\text{prog}} \left( d_{t-1} - d_{t} \right) \tag{5}$$

di mana $d_{t} = \|p_{t} - p_{\text{goal}}\|$ adalah jarak euclidean ke titik tujuan pada langkah $t$. Koefisien $\alpha$ dituning untuk menyeimbangkan antara kecepatan konvergensi dan keamanan.

Sementara itu, Borah (2024) menambahkan lapisan *Nonlinear Filtering* — khususnya *Extended Kalman Filter* (EKF) dan *Particle Filter* — sebagai estimator state yang menyaring noise sensor sebelum state tersebut menjadi input kebijakan RL:

$$\hat{x}_{k\mid k} = \hat{x}_{k\mid k-1} + K_{k}\!\left( z_{k} - h(\hat{x}_{k\mid k-1}) \right) \tag{6}$$

dengan gain Kalman $K_{k}$ yang memastikan *minimum mean square error* (MMSE). Integrasi EKF + RL menghasilkan arsitektur **SAMAS** (*Smart Autonomous Multi-Agent System*) yang mampu menangani ketidakpastian sensor dan actuator secara simultan dengan perencanaan gerak (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *Motion Planning using Reinforcement Learning* di lingkungan industri mengikuti SOP tujuh fase berikut, yang disintesis dari metodologi Kala (2024) dan kerangka SAMAS Borah (2024):

**Fase 1 — Analisis Sistem & Pernyataan Masalah.** Definisikan *mission profile* robot (payload, kecepatan maksimum, lingkungan operasi, KPI). Contoh KPI: *mean time between failures* (MTBF) ≥ 2.500 jam, collision rate ≤ 0,01%.

**Fase 2 — Pemodelan Lingkungan & Akuisisi Data.** Pilih representasi state: *occupancy grid* 2D, *point cloud* 3D, atau *semantic feature map*. Sensor yang lazim: LiDAR 2D/3D (10–100 Hz), IMU, encoder roda, kamera RGB-D. Data disimpan ke *ROS bag* atau *MCAP*.

**Fase 3 — Desain MDP.** Tentukan state space $S$, action space $A$, dan reward function $R(s,a)$ menggunakan Persamaan (5). Diskretisasi aksi: misal 5 kecepatan × 7 sudut = 35 aksi diskret.

**Fase 4 — Simulasi & Pre-training.** Gunakan *digital twin* (Gazebo, Isaac Sim, Webots) untuk menjalankan 1–10 juta episode secara paralel pada GPU farm. Hyperparameter: learning rate $\eta = 10^{-4}$, batch size = 256, $\gamma = 0{,}99$, buffer size = $10^{6}$.

**Fase 5 — Validasi & Pengujian Keamanan.** Terapkan standar **ISO 13482** (robot personal care), **ISO/TS 15066** (kolaboratif), dan **IEC 61508** (SIL untuk safety integrity). Pengujian mencakup 1.000 *edge case*: manusia tiba-tiba, lantai licin, LiDAR gagal.

**Fase 6 — *Sim-to-Real Transfer*.** Gunakan *domain randomization* (acak tekstur, pencahayaan, friction) dan *progressive neural network* untuk menutupi kesenjangan *reality gap*. Fine-tune dengan 10–50 ribu episode di dunia nyata.

**Fase 7 — Deployment & FDIR Loop.** Integrasikan dengan modul FDIR Borah (2024): EKF menyaring sensor, agen RL mengambil keputusan, supervisor mendeteksi anomali menggunakan *residual-based fault detection*:

$$r_{k} = z_{k} - h(\hat{x}_{k\mid k-1}) \quad \text{dengan ambang} \quad |r_{k}| > \tau_{\text{th}} \Rightarrow \text{fault alarm} \tag{7}$$

Diagram alir proses:

```
[Sensor Fusion/EKF] → [State sₜ] → [DQN πθ] → [Action aₜ] → [Robot Aktuator]
        ↑                                                                ↓
        └────────────[Reward R(s,a) + Next State s']←──────[Environment]┘
```

Arsitektur ini memenuhi prinsip *closed-loop optimal control* yang menjamin *stability margin* memadai untuk operasi komersial jangka panjang.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *e-commerce fulfillment center* di Cibitung, Bekasi, ingin men-deploy 30 unit AMR untuk mengambil *bin* dari 5.000 lokasi penyimpanan dan membawanya ke 24 *pack station*. Peta gudang 200 m × 100 m. Tujuan: meminimalkan *average pickup time*.

**Parameter desain:**

| Parameter | Nilai |
|---|---|
| State space | $200 \times 100$ occupancy grid (resolusi 0,5 m) |
| Action space | 8 arah diskret (N, NE, E, SE, S, SW, W, NW) |
| $\gamma$ | 0,99 |
| $\alpha_{\text{goal}}$ | +100 |
| $\alpha_{\text{coll}}$ | −50 |
| $\alpha_{\text{time}}$ | −0,1 per detik |
| $\alpha_{\text{prog}}$ | +1,0 |

**Langkah 1 — Inisialisasi Q-table.** Karena jumlah sel sangat besar, gunakan DQN. Episode awal menghasilkan jalur acak.

**Langkah 2 — Iterasi Q-Learning pada subset kecil (manual trace).** Misalkan pada state $s=(10, 5)$ dengan jarak $d_{0}=20$ m ke goal, agen memilih aksi *maju*. Setelah langkah, jarak menjadi $d_{1}=19$ m, tidak ada tabrakan, $\Delta t=1$ s. Reward sesuai Persamaan (5):

$$R = +1{,}0 \cdot (20-19) - 0{,}1 \cdot 1 = 0{,}9 \tag{8}$$

**Langkah 3 — Update Q-value.** Dengan reward $r=0{,}9$ dan estimasi $\max