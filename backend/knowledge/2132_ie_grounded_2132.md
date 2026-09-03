# 2132 — Perencanaan Gerak Cerdas Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma industri manufaktur menuju *Industry 5.0* dan *smart factory* menempatkan robot bergerak otonom (*Autonomous Mobile Robots*/AMR) sebagai tulang punggung sistem intralogistik. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (*motion planning*) bukan lagi permasalahan pencarian jalur geometris semata, melainkan masalah keputusan sekuensial di bawah ketidakpastian lingkungan dinamis yang harus diselesaikan secara adaptif melalui *reinforcement learning* (RL). Permasalahan ini muncul secara empiris pada lantai pabrik, gudang *e-commerce*, terminal peti kemas, dan fasilitas layanan kesehatan, di mana AMR harus menavigasi lorong sempit, menghindari pekerja manusia, bereaksi terhadap halangan tak terduga, dan mengoptimalkan konsumsi energi (Kala, 2024).

Dalam konteks ekonomi, biaya tenaga kerja intralogistik secara global dapat mencapai 30–50% dari total biaya operasional gudang. Studi McKinsey menunjukkan bahwa otomatisasi gerak menggunakan AMR berpotensi menurunkan biaya拣货 (*picking*) hingga 40% dan meningkatkan throughput sebesar 25–50%. Kala (2024) mengargumentasikan bahwa algoritma klasik seperti *A\**, *Rapidly-exploring Random Tree* (RRT), dan *Probabilistic Road Map* (PRM) memiliki kelemahan struktural ketika lingkungan berubah secara *real-time* karena memerlukan re-planning penuh setiap kali terjadi perubahan peta. Sebaliknya, RL memungkinkan agen untuk mempelajari *policy* optimal yang telah meng-*encode* pengetahuan tentang dinamika lingkungan, sehingga keputusan dapat diambil dalam orde milidetik.

Urgensi penelitian ini juga diperkuat oleh kontribusi Borah (2024) yang menyatakan bahwa sistem multi-agen otonom (*Smart Autonomous Multi-Agent Systems*/SAMAS) menghadapi tantangan kerusakan sensor, aktuator, dan jaringan komunikasi yang tidak dapat diabaikan. Integrasi perencanaan gerak RL dengan *Fault Detection, Isolation, and Reconstruction* (FDIR) menjadi kebutuhan fundamental untuk menjamin keberlangsungan operasi (*continuity of operation*) di lingkungan industri kritis (Borah, 2024). Oleh karena itu, modul 2132 ini membahas sinergi antara RL, perencanaan gerak, dan rekayasa sistem multi-agen otonom sebagai kompetensi inti insinyur industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi *Markov Decision Process* (MDP)

RL secara formal dimodelkan sebagai MDP dengan tupel $(S, A, P, R, \gamma)$ di mana:
- $S$ = himpunan state (konfigurasi robot + lingkungan),
- $A$ = himpunan aksi (mis. translasi $v$, rotasi $\omega$),
- $P(s'|s,a)$ = probabilitas transisi,
- $R(s,a,s')$ = *reward* immediate,
- $\gamma \in [0,1)$ = faktor diskonto.

Fungsi nilai optimal $V^*(s)$ memenuhi **Persamaan Bellman Optimal**:

$$V^*(s) = \max_{a \in A} \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]$$

dan fungsi aksi-nilai (*Q-function*):

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

(Kala, 2024).

### 2.2 Algoritma Q-Learning Off-Policy

Q-Learningtabular melakukan pembaruan (*update*) terhadap estimasi $Q(s,a)$ setiap kali agen menerima transisi $(s,a,r,s')$:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Kala (2024) menekankan bahwa untuk ruang state kontinu (posisi robot kontinu $x, y, \theta$), representasi tabular tidak layak sehingga digunakan *function approximation*, misalnya jaringan saraf dalam (*Deep Q-Network*/DQN). *Loss function* DQN adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

dengan $\theta^-$ adalah parameter *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer* untuk dekorelasi sampel.

### 2.3 *Policy Gradient* dan Actor-Critic

Untuk ruang aksi kontinu (kecepatan linear dan angular), algoritma *Deep Deterministic Policy Gradient* (DDPG) atau *Proximal Policy Optimization* (PPO) lebih sesuai. Kala (2024) menurunkan *objective* PPO:

$$L^{CLIP}(\theta) = \mathbb{E}_t\left[\min\left(r_t(\theta)\hat{A}_t, \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon)\hat{A}_t\right)\right]$$

di mana $r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ adalah rasio probabilitas, dan $\hat{A}_t$ adalah *advantage estimate*.

### 2.4 Perencanaan Gerak RRT sebagai Baseline

RRT membangun pohon eksplorasi melalui sampling acak:

$$x_{rand} \sim \mathcal{U}(X_{free}), \quad x_{near} = \arg\min_{x \in V} \|x - x_{rand}\|, \quad x_{new} = x_{near} + \eta \cdot \frac{x_{rand} - x_{near}}{\|x_{rand} - x_{near}\|}$$

dengan $\eta$ sebagai ukuran langkah. Jalur RRT digunakan sebagai *baseline* untuk membandingkan *path length* $L_{path}$ dan *computation time* $T_{comp}$ terhadap RL (Kala, 2024).

### 2.5 *Nonlinear Filtering* untuk FDIR pada Multi-Agen

Borah (2024) melengkapi arsitektur dengan *Extended Kalman Filter* (EKF) untuk estimasi state agen yang terpengaruh derau sensor. Prediksi dan koreksi EKF:

$$\hat{x}_{k|k-1} = f(\hat{x}_{k-1|k-1}, u_k)$$
$$P_{k|k-1} = F_k P_{k-1|k-1} F_k^T + Q_k$$
$$K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}$$
$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - h(\hat{x}_{k|k-1}))$$

di mana $F_k$, $H_k$ adalah Jacobian dari $f$ dan $h$. Residual $\mathbf{r}_k = z_k - h(\hat{x}_{k|k-1})$ digunakan sebagai input *fault detector* dengan uji $\chi^2$:

$$\chi^2_k = \mathbf{r}_k^T S_k^{-1} \mathbf{r}_k \overset{\mathcal{H}_1}{\underset{\mathcal{H}_0}{\gtrless}} \tau$$

(Borah, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AMR dengan RL di lingkungan industri mengikuti SOP berlapis berikut, yang disintesis dari kerangka Kala (2024) dan Borah (2024):

### Tahap 1 — Pemetaan dan Diskretisasi Lingkungan
1. Lakukan *Simultaneous Localization and Mapping* (SLAM) untuk menghasilkan *occupancy grid* dengan resolusi $r$ (umumnya $r = 0{,}05$ m).
2. Definisikan $S$ sebagai set pasangan $(x, y, \theta, \text{status agen lain})$ di sekitar posisi target.
3. Tentukan $A = \{a_1, ..., a_N\}$ yang merupakan kombinasi kecepatan linear $v \in [-v_{max}, v_{max}]$ dan angular $\omega \in [-\omega_{max}, \omega_{max}]$.

### Tahap 2 — Desain Fungsi Reward
Fungsi reward multi-tujuan untuk AMR gudang:

$$r_t = w_1 \cdot r_{goal} + w_2 \cdot r_{collision} + w_3 \cdot r_{time} + w_4 \cdot r_{energy} + w_5 \cdot r_{traffic}$$

dengan:
- $r_{goal} = +100$ saat mencapai target,
- $r_{collision} = -100$ saat tabrakan,
- $r_{time} = -0{,}1$ per timestep,
- $r_{energy} = -0{,}01 \cdot (v^2 + \omega^2)$,
- $r_{traffic} = -2$ jika terlalu dekat dengan agen lain.

### Tahap 3 — Pelatihan dengan Domain Randomization
Untuk transfer ke dunia nyata, gunakan *domain randomization* pada parameter fisik (koefisien gesekan, massa, delay sensor).

### Tahap 4 — Integrasi FDIR (Borah, 2024)
Sisipkan modul EKF antara sensor dan *policy network*. Jika $\chi^2_k > \tau$, aktifkan *reconfiguration* agen tetangga untuk menutupi tugas yang gagal.

### Tahap 5 — Validasi dan Deployment
Gunakan protokol **ISO 3691-4:2020** untuk keselamatan AMR industri, dengan *safety-rated monitored stop* dan *emergency stop*.

### Diagram Alir Arsitektur

```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐
   Sensor Suite │ → │ EKF Estimator │ → │ Residual χ²   │
   (LIDAR, IMU) │    │ (Borah 2024) │    │ FDIR Logic   │
└─────────────┘    └──────────────┘    └──────┬───────┘
                                               │
                                               ▼
┌──────────────┐    ┌─────────────────┐    ┌──────────────┐
   Action $v,ω$ │ ← │ PPO/DDPG Policy │ ← │ State $s_t$   │
               │    │  (Kala 2024)    │    │  Concatenated│
└──────────────┘    └─────────────────┘    └──────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Skenario
Sebuah gudang *e-commerce* memiliki:
- Area operasional $A = 50 \times 30 \text{ m}^2$
- 1 *picking station* di $(x_g, y_g) = (45, 25)$
- 3 AMR identik (agen A, B, C)
- Kecepatan maksimum $v_{max} = 1{,}5$ m/s, $\omega_{max} = 1{,}0$ rad/s
- Timestep kontrol $\Delta t = 0{,}1$ s
- Diskonto $\gamma = 0{,}99$

### 4.2 Perhitungan *Q-Update* Step-by-Step

Misalkan agen A pada *episode* ke-$k$ berada di state $s = (10, 5, 0)$, memilih aksi $a = (v=1{,}0, \omega=0{,}2)$, menerima reward $r = -0{,}3$, dan bertransisi ke $s' = (10{,}1, 5{,}02, 0{,}02)$. Tabel Q menunjukkan:

| State-Action | $Q(s,a)$ lama |
|---|---|
| $Q(s,a)$ | 4,50 |
| $\max_{a'}Q(s',a')$ | 5,10 |

Gunakan $\alpha = 0{,}1$:

$$TD_{error} = r + \gamma \max_{a'} Q(s',a') - Q(s,a)$$
$$= -0{,}3 + (0{,}99)(5{,}10) - 4{,}50$$
$$= -0{,}3 + 5{,}049 - 4{,}50 = 0{,}249$$

$$Q_{baru}(s,a) = 4{,}50 + (0{,}1)(0{,}249) = 4{,}5249$$