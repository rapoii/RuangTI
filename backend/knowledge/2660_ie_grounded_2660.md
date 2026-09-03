# 2660 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Motion planning using reinforcement learning* dengan integrasi arsitektur *multi-agent* dan estimasi nonlinear
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 telah menempatkan **robot mobil otonom** (*Autonomous Mobile Robots* — AMR) sebagai tulang punggung sistem intralogistik, manufaktur fleksibel, dan rantai pasok just-in-time. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan keberhasilan AMR menavigasi lingkungan dinamis tanpa intervensi manusia. Permasalahan motion planning secara tradisional diselesaikan melalui algoritma deterministik seperti A*, Rapidly-exploring Random Tree (RRT), atau Potential Field, yang meskipun efektif pada lingkungan statis, gagal ketika menghadapi situasi stokastik seperti pergerakan pejalan kaki, perubahan tata letak gudang, atau kegagalan sensor (Kala, 2024, DOI: 10.1016/b978-0-443-18908-1.00016-9).

Urgensi ekonominya sangat nyata. Menurut proyeksi yang dikutip dalam literatur AMR, pasar robot mobile global bernilai lebih dari USD 4 miliar dengan tingkat pertumbuhan tahunan majemuk (CAGR) >15%. Bagi seorang insinyur industri, kemampuan AMR menentukan *throughput* gudang, *order fulfillment cycle time*, dan *safety incident rate*. Kala (2024) berargumen bahwa **Reinforcement Learning (RL)** memberikan paradigma baru di mana agen belajar kebijakan navigasi optimal melalui interaksi trial-and-error dengan lingkungan, sehingga mampu menggeneralisasi pola yang tidak tersedia secara eksplisit dalam peta statis.

Perspektif komplementer diajukan oleh Kaustav Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS) yang menekankan bahwa dalam sistem industri modern, AMR tidak beroperasi secara terisolasi, melainkan sebagai bagian dari armada multi-agen yang harus mengoordinasikan keputusan gerak, mendeteksi anomali sensor/aktuator, dan mengisolasi kegagalan secara *real-time* (Borah, 2024, DOI: 10.32920/25412566.v1). Integrasi RL dengan *nonlinear filtering* (misalnya Extended Kalman Filter atau Particle Filter) memungkinkan agen tidak hanya merencanakan gerak tetapi juga mempertahankan estimasi状态 yang akurat di tengah ketidakpastian observasi. Gabungan kedua literatur ini menjadi landasan modul yang membahas bagaimana teknik industri dapat merancang, mengimplementasikan, dan mengevaluasi sistem motion planning berbasis RL untuk kebutuhan produksi nyata.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

RL formal dibangun di atas **Markov Decision Process (MDP)** yang didefinisikan sebagai tuple $\langle S, A, P, R, \gamma \rangle$ di mana:

- $S$ : himpunan state (konfigurasi posisi, orientasi, dan status sensor agen)
- $A$ : himpunan aksi diskret/kontinu (kecepatan, sudut steering)
- $P(s'|s,a)$ : probabilitas transisi ke state $s'$ dari state $s$ dengan aksi $a$
- $R(s,a,s')$ : *reward function* bernilai riil
- $\gamma \in [0,1)$ : faktor diskonto terhadap *reward* masa depan

Tujuan agen adalah menemukan kebijakan $\pi: S \to A$ yang memaksimalkan ekspektasi *return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

### 2.2 Persamaan Bellman dan Value Function

**State value function** didefinisikan sebagai ekspektasi return ketika mengikuti kebijakan $\pi$ dari state $s$:

$$V^{\pi}(s) = \sum_{a \in A} \pi(a|s) \sum_{s' \in S} P(s'|s,a)\big[R(s,a,s') + \gamma V^{\pi}(s')\big]$$

**Action-value function** (Q-function) yang lebih relevan untuk motion planning karena langsung mengevaluasi pasangan state-aksi:

$$Q^{\pi}(s,a) = \sum_{s' \in S} P(s'|s,a)\big[R(s,a,s') + \gamma \sum_{a' \in A} \pi(a'|s') Q^{\pi}(s',a')\big]$$

Kebijakan optimal memenuhi **Bellman Optimality Equation**:

$$Q^{*}(s,a) = \sum_{s' \in S} P(s'|s,a)\big[R(s,a,s') + \gamma \max_{a'} Q^{*}(s',a')\big]$$

### 2.3 Q-Learning sebagai Algoritma Inti

Untuk aplikasi industri, **Q-learning** (model-free, off-policy) paling banyak digunakan karena tidak memerlukan pengetahuan eksplisit tentang $P(s'|s,a)$. Aturan pembaruan (*update rule*) adalah:

$$Q(s,a) \leftarrow Q(s,a) + \alpha\Big[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\Big]$$

di mana $\alpha \in (0,1]$ adalah *learning rate* dan $[r + \gamma \max_{a'} Q(s',a') - Q(s,a)]$ adalah *temporal-difference (TD) error*.

### 2.4 Perluasan Multi-Agen dan Nonlinear Filtering

Untuk konteks armada AMR di gudang, Borah (2024) mengajukan formulasi **Partially Observable Markov Decision Process (POMDP)** $\langle S, A, O, P, Z, R, \gamma \rangle$ di mana $o \in O$ adalah observasi parsial. State internal agen diestimasi melalui filter nonlinear:

$$\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t\big(z_t - h(\hat{x}_{t|t-1})\big)$$

dengan gain Kalman $K_t = P_{t|t-1} H_t^{T} (H_t P_{t|t-1} H_t^{T} + R_t)^{-1}$. *Belief state* $b_t = p(s_t | o_{1:t})$ kemudian menggantikan state deterministik dalam pembaruan Q.

---

## 4. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis Kala (2024) dan Borah (2024), implementasi motion planning RL di fasilitas industri mengikuti SOP berikut:

**Tahap 1 — Analisis Sistem & Pemetaan Ruang Keadaan**
1. Lakukan *site survey* untuk mengidentifikasi zona pick-up, drop-off, rintangan tetap (rak, pilar), dan zona eksklusif pejalan kaki.
2. Diskretisasi ruang operasi menjadi *occupancy grid* dengan resolusi $\Delta$ (umumnya 0.5–1.0 m untuk gudang).
3. Definisikan $S$ sebagai himpunan sel grid $\{(i,j) \mid i=1..N, j=1..M\}$, dan $A = \{\text{utara, timur, selatan, barat, diam}\}$.

**Tahap 2 — Desain Reward Function yang Aman**
1. $r_{goal} = +100$ saat agen mencapai sel tujuan.
2. $r_{obstacle} = -50$ saat menabrak rintangan.
3. $r_{step} = -1$ untuk setiap langkah (menghukum jalur panjang).
4. $r_{safety} = -10$ saat memasuki zona pejalan kaki.

**Tahap 3 — Pelatihan dengan Simulasi Digital Twin**
Gunakan platform simulasi (Gazebo, Unity ML-Agents, atau NVIDIA Isaac Sim) untuk menjalankan episode secara paralel. Hyperparameter standar industri:

| Parameter | Simbol | Nilai Tipikal |
|-----------|--------|----------------|
| Learning rate | $\alpha$ | 0.1 – 0.5 |
| Discount factor | $\gamma$ | 0.95 – 0.99 |
| Exploration rate ($\epsilon$) | $\epsilon_0$ | 1.0 |
| $\epsilon$ decay | – | 0.995 per episode |
| Episode maksimum | $E_{max}$ | 5.000 – 20.000 |
| Replay buffer | – | 10$^5$ transisi |

**Tahap 4 — Integrasi Nonlinear Filter (Borah, 2024)**
Untuk setiap agen AMR, pasang estimator Extended Kalman Filter (EKF) pada odometri dan LiDAR. State estimasi $\hat{x}_t = [x, y, \theta, v]^T$ diperbarui dengan frekuensi sensor (umumnya 10–100 Hz), sedangkan keputusan RL diambil pada frekuensi perencanaan yang lebih rendah (1–5 Hz) untuk efisiensi komputasi.

**Tahap 5 — Validasi, Verifikasi, dan Commissioning**
1. Pengujian *hardware-in-the-loop* (HIL) minimal 72 jam operasi tanpa insiden.
2. Pengujian *fault injection* mengikuti protokol FDIR (Fault Detection, Isolation, Reconstruction) Borah (2024).
3. Penyiapan *fall-back policy* berbasis algoritma geometris klasik untuk mode *fail-safe*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah gudang *e-commerce* seluas $20 \times 20$ meter memiliki AMR yang harus berpindah dari **Start (S1) di sel (1,1)** ke **Goal (G) di sel (20,20)**. Terdapat 12 rintangan tetap yang didistribusikan sebagai berikut:

- Rintangan tipe A (kritis): sel-sel $\{(5,5), (5,6), (6,5), (10,10), (10,11), (11,10)\}$
- Rintangan tipe B (zona pejalan kaki): sel-sel $\{(8,15), (9,15), (10,15), (15,8), (15,9), (15,10)\}$

Agen menggunakan Q-learning tabular dengan $\alpha = 0.3$, $\gamma = 0.95$, dan reward $r_{goal}=+100$, $r_{obstacle}=-50$, $r_{safety}=-10$, $r_{step}=-1$.

### 4.2 Hasil Pembaruan Q-Value pada Jalur Optimal

Misalkan agen menjalankan satu episode pelatihan dari $(1,1)$ menuju $(20,20)$. Jalur aktual yang ditempuh (berdasarkan kebijakan $\epsilon$-greedy dengan $\epsilon=0.1$) adalah:

$$(1,1) \to (1,2) \to (2,2) \to (3,2) \to (3,3) \to \cdots \to (20,20)$$

Total langkah aktual: $N_{step} = 38$ langkah, tanpa menyentuh rintangan.

Ambil satu pembaruan Q-value tipikal pada transisi dari $s=(5,10)$ ke $s'=(6,10)$ dengan aksi $a=$"timur":

- $Q_{old}(5,10, \text{timur}) = 12{,}4$ (nilai sebelum episode ke-250)
- Reward diterima $r = -1$ (langkah biasa)
- $\max_{a'} Q(6,10, a') = 14{,}7$ (aksi optimal berikutnya "utara" mengarah