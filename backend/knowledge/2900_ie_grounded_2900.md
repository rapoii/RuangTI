# 2900 — Perencanaan Gerak (Motion Planning) Menggunakan Pembelajaran Penguatan (Reinforcement Learning) untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma manufaktur global menuju *Industry 4.0* dan *Industry 5.0* telah memposisikan robot bergerak otonom (Autonomous Mobile Robots/AMR) sebagai tulang punggung logistik internal, intralogistik, dan sistem produksi fleksibel. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak (motion planning) merupakan salah satu tantangan paling fundamental dalam mengoperasionalkan AMR di lingkungan industri yang dinamis, tidak terstruktur, dan berbagi ruang dengan pekerja manusia (human-robot coexistence). Permasalahan ini menjadi semakin kompleks ketika robot harus bernavigasi pada gudang *e-commerce* berskala besar, jalur perakitan otomotif yang dipenuhi lalu lintas AGV (Automated Guided Vehicle), atau fasilitas *clean room* farmasi yang memerlukan presisi lintasan tingkat milimeter [DOI: 10.1016/b978-0-443-18908-1.00016-9].

Secara ekonomis, pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR >14%, sehingga efisiensi perencanaan gerak berdampak langsung pada *throughput*, *order fulfillment cycle time*, dan *total cost of ownership* (TCO) armada robot. Kala (2024) mengidentifikasi bahwa pendekatan klasik motion planning—seperti *A\**, *Dijkstra*, *Rapidly-exploring Random Tree (RRT)*, dan *Potential Fields*—mengalami degradasi kinerja signifikan ketika menghadapi lingkungan stokastik, dinamika non-linear, serta kendala ketidakpastian sensor dan aktuator. Hal ini kemudian membuka adopsi *Reinforcement Learning* (RL) sebagai pendekatan perencanaan gerak berbasis pengalaman (experience-driven) yang mampu belajar kebijakan optimal melalui interaksi trial-and-error dengan lingkungan.

Di sisi lain, Kaustav Borah (2024) dalam disertasinya tentang *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems* (SAMAS) memperkuat relevansi industri dengan menunjukkan bahwa sistem otonom modern tidak berdiri sendiri, melainkan beroperasi sebagai *multi-agent system* (MAS) dengan kebutuhan *Fault Detection, Isolation, and Reconstruction* (FDIR) yang ketat. Integrasi RL dengan *nonlinear filtering* (misalnya *Extended Kalman Filter*, *Particle Filter*, dan *Unscented Kalman Filter*) memungkinkan agen tidak hanya merencanakan gerak, tetapi juga mempertahankan integritas operasional ketika terjadi anomali pada sensor, aktuator, atau jaringan komunikasi [DOI: 10.32920/25412566.v1]. Urgensi industri terhadap sistem semacam ini meningkat menyusul maraknya penerapan *digital twin*, *smart manufacturing*, dan *warehouse automation* pasca-pandemi, di mana downtime satu agen dapat menurunkan Overall Equipment Effectiveness (OEE) lini produksi hingga 15-25%.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

RL bekerja di atas kerangka *Markov Decision Process* yang didefinisikan oleh tuple $\mathcal{M} = (\mathcal{S}, \mathcal{A}, P, R, \gamma)$ (Kala, 2024). Untuk motion planning robot otonom, komponen-komponen ini diformulasikan sebagai berikut:

- **State space** $\mathcal{S}$: konfigurasi robot pada waktu diskrit $t$, yaitu $s_t = (x_t, y_t, \theta_t, v_t, \omega_t) \in \mathcal{S}$, dengan $(x,y)$ posisi planar, $\theta$ orientasi heading, $v$ kecepatan linear, dan $\omega$ kecepatan angular.
- **Action space** $\mathcal{A}$: perintah gerak seperti $a_t = (v_t^{cmd}, \omega_t^{cmd})$ dengan $v \in [v_{min}, v_{max}]$ dan $\omega \in [-\omega_{max}, \omega_{max}]$.
- **Transition probability** $P(s_{t+1}|s_t, a_t)$: distribusi probabilitas transisi state yang diestimasi dari model kinematik/dinamik robot atau melalui sampling data.
- **Reward function** $R: \mathcal{S} \times \mathcal{A} \to \mathbb{R}$: sinyal umpan balik skalar yang mendorong kebijakan optimal.
- **Discount factor** $\gamma \in [0,1)$: faktor diskonto imbalan masa depan.

### 2.2 Persamaan Bellman dan Value Function

Tujuan RL adalah memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

*State-value function* $V^\pi(s)$ merepresentasikan ekspektasi return ketika mengikuti kebijakan $\pi$ dari state $s$:

$$V^\pi(s) = \mathbb{E}_\pi \left[ \sum_{k=0}^{\infty} \gamma^k R_{t+k+1} \mid S_t = s \right]$$

Persamaan Bellman untuk $V^\pi$ adalah:

$$V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^\pi(s') \right]$$

Analog, *action-value function* $Q^\pi(s,a)$ adalah:

$$Q^\pi(s,a) = \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma \sum_{a'} \pi(a'|s') Q^\pi(s',a') \right]$$

Persamaan optimalitas Bellman untuk $Q^*(s,a)$:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a'} Q^*(s',a') \right]$$

### 2.3 Algoritma Q-Learning

Kala (2024) menekankan bahwa *Q-learning* merupakan algoritma *model-free*, *off-policy* yang banyak digunakan untuk motion planning AMR. Aturan pembaruan (update rule) adalah:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Batas kesalahan Q-learning setelah $T$ iterasi memenuhi:

$$\max_{s,a} |Q_T(s,a) - Q^*(s,a)| \leq \frac{1}{(1-\gamma)^2} \sqrt{\frac{\ln(\mathcal{|S|}|\mathcal{A}|T/\delta)}{T}}$$

dengan probabilitas setidaknya $1-\delta$ (bounds klasik dari tabular Q-learning). Untuk state dengan dimensi tinggi (kontinu), Kala merekomendasikan *Deep Q-Network* (DQN) dengan *experience replay* buffer $\mathcal{D}$ dan *target network* $\theta^-$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s'; \theta^-) - Q(s; \theta) \right)^2 \right]$$

### 2.4 Desain Reward Function untuk Motion Planning

Fungsi reward yang lazim dalam motion planning AMR (Kala, 2024):

$$r_{t+1} = \begin{cases} +R_{goal} & \text{jika } \|p_t - p_{goal}\| \leq \epsilon \\ -R_{collision} & \text{jika tabrakan} \\ -c \cdot d_{obs} & \text{state antara} \end{cases}$$

dengan $d_{obs}$ jarak ke obstacle terdekat, $c > 0$ konstanta penalty, $R_{goal} \gg R_{collision}$. Untuk multi-agent (Borah, 2024), reward ditambah komponen kooperasi:

$$r_{t+1}^{i} = r_{t+1}^{i,local} + \lambda \sum_{j \in \mathcal{N}_i} r_{t+1}^{j}$$

di mana $\mathcal{N}_i$ adalah *neighborhood* agen $i$ dan $\lambda$ adalah bobot kooperasi.

### 2.5 Pemodelan Non-linear Filtering (Borah, 2024)

Untuk sistem dinamik non-linear agen:

$$x_{t+1} = f(x_t, u_t) + w_t, \quad y_t = h(x_t) + v_t$$

dengan $w_t \sim \mathcal{N}(0, Q_t)$ dan $v_t \sim \mathcal{N}(0, R_t)$. *Extended Kalman Filter* melakukan aproksimasi linier:

$$\hat{x}_{t|t-1} = f(\hat{x}_{t-1|t-1}, u_{t-1})$$

$$P_{t|t-1} = F_t P_{t-1|t-1} F_t^\top + Q_t$$

$$K_t = P_{t|t-1} H_t^\top (H_t P_{t|t-1} H_t^\top + R_t)^{-1}$$

di mana $F_t = \frac{\partial f}{\partial x}\big|_{\hat{x}_{t-1|t-1}}$ dan $H_t = \frac{\partial h}{\partial x}\big|_{\hat{x}_{t|t-1}}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP berlapis berikut (disintesis dari Kala, 2024 dan Borah, 2024):

**Tahap 1 — Pemodelan Sistem & Akuisisi Data.** Definisikan state space diskrit (cell-grid 0,1 m × 0,1 m) atau kontinu (LiDAR 360° dengan resolusi 0,5°). Kumpulkan data historis operasional: 50.000-200.000 episode simulasi dengan parameter domain randomization.

**Tahap 2 — Desain Simulator.** Gunakan *Gazebo*, *Isaac Sim*, atau *Webots* dengan *digital twin* lingkungan (peta gudang, layout produksi). Standar ISO 3691-4:2020 untuk driverless industrial trucks harus dipenuhi (safety-rated monitored stop, emergency stop time < 0,5 s).

**Tahap 3 — Pelatihan (Training).** Inisialisasi Q-table atau neural network weights $\theta_0$. Iterasikan: (i) pilih aksi via $\epsilon$-greedy dengan *decay schedule* $\epsilon_t = \epsilon_0 \cdot 0,995^t$; (ii) eksekusi di simulator; (iii) simpan tuple $(s,a,r,s')$ ke *replay buffer* $|\mathcal{D}| = 10^6$; (iv) sample *mini-batch* 32-256 dan perbarui parameter via gradient descent (Adam, lr=$10^{-4}$).

**Tahap 4 — Validasi SIL/HIL.** Software-in-the-Loop (SIL) lalu Hardware-in-the-Loop (HIL) dengan *fault injection*: sensor bias, actuator degradation 10-30%, packet drop komunikasi.

**Tahap 5 — Deployment & Monitoring.** *Shadow mode* 2-4 minggu, kemudian *supervised deployment*, terakhir *full autonomous*. Pemantauan metrik: collision rate, path optimality ratio ($\eta = L_{optimal}/L_{actual}$), task completion time, OEE delta.

**Tahap 6 — Integrasi FDIR (Borah, 2024).** Pasang *residual generator* dengan threshold $\chi^2_{0.95}$ untuk deteksi anomali. Saat fault terdeteksi, agen melakukan *policy switching* ke mode aman (safe-stop) atau *reconfiguration* melalui *actor-critic* fallback.

**Arsitektur Sistem Terintegrasi:**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Sensor Stack   │───▶│ Nonlinear Filter │───▶│  State Estimator│
│ (LiDAR/IMU/Cam) │    │  (EKF/UKF/PF)    │    │   s_t (belief)  │
└─────────────────┘    └──────────────────┘    └────────┬────────┘
                                                         ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Actuator Cmd   │◀───│   RL Policy      │◀───│  FDIR Module    │
│   (v, ω)        │    │  π*(a|s) (DQN)   │    │ (residual + RL) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Implementasikan Q-learning untuk AMR navigasi di gudang 50 m × 30 m dengan 12 obstacle statis. Robot harus bergerak dari start $S=(2,2)$ ke goal $G=(48,28)$ dengan kecepatan $v_{max}=1,5$ m/s.

**Parameter:**

| Parameter | Nilai |
|---|---|
| Discretization grid | 1 m × 1 m |
| State space | $50 \times 30 = 1.500$ state |
| Action space | 5 aksi (atas, bawah, kiri, kanan, diam) |
| $\alpha$ (learning rate) | 0,1 |
| $\gamma$ (discount) | 0,9 |
| $\epsilon_0$ | 1,0; decay 0,995 |
| Reward goal | $+100$ |
| Reward collision | $-50$ |
| Reward per step | $-1$ |

**