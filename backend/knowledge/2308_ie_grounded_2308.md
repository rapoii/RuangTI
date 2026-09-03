# 2308 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning menggunakan reinforcement learning untuk autonomous mobile robots dan sistem multi-agen otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Disertasi Peer-Reviewed. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma manufaktur dan logistik menuju **Industri 4.0/5.0** telah menempatkan *autonomous mobile robots* (AMR) dan *automated guided vehicles* (AGV) sebagai tulang punggung rantai pasok modern. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots* (DOI: 10.1016/b978-0-443-18908-1.00016-9), menekankan bahwa perencanaan gerak (motion planning) merupakan salah satu tantangan paling kritis dalam pengoperasian AMR di lingkungan industri yang dinamis dan tak-deterministik. Berbeda dengan algoritma klasik seperti Rapidly-exploring Random Tree (RRT) atau A*, pendekatan berbasis *reinforcement learning* (RL) memungkinkan robot untuk *belajar* kebijakan navigasi optimal dari interaksi langsung dengan lingkungan—sebuah karakteristik yang sangat dibutuhkan ketika peta lingkungan tidak diketahui secara sempurna atau berubah secara real-time akibat pergerakan manusia, palet, atau AGV lain.

Urgensi ekonomis dari topik ini tidak dapat dipandang sebelah mata. McKinsey Global Institute (2023) memperkirakan pasar logistik otonom akan mencapai USD 130 miliar pada 2030, dengan CAGR lebih dari 18%. Di lantai pabrik, *downtime* akibat tabrakan AMR dapat menimbulkan kerugian hingga USD 50.000 per jam di fasilitas *semiconductor fab* kelas atas. Oleh karena itu, kemampuan AMR untuk merencanakan lintasan secara adaptif—dengan tetap memenuhi *safety standard* ISO 3691-4:2020—menjadi pembeda kompetitif yang signifikan.

Kontribusi Kaustav Borah (2024) dalam disertasinya (DOI: 10.32920/25412566.v1) memperluas perspektif ini ke level **multi-agen**, mengusulkan arsitektur *Smart Autonomous Multi-Agent Systems* (SAMAS) yang menggabungkan *nonlinear filtering* (misalnya Extended Kalman Filter / Unscented Kalman Filter) dengan RL untuk menyelesaikan tiga fungsi kritis secara simultan: (i) *Fault Detection, Isolation, and Reconstruction* (FDIR); (ii) navigasi kooperatif; dan (iii) rekonstruksi komponen dinamis yang gagal. Integrasi ini menjawab kelemahan historis AMR industri—yaitu ketidakmampuan mendeteksi degradasi sensor/aktuator secara otonom—yang selama ini menjadi penyebab 23–35% *unscheduled downtime* pada armada AGV menurut laporan ARC Advisory Group (2022).

Dengan demikian, integrasi motion planning berbasis RL tidak hanya persoalan algoritmik, melainkan merupakan keputusan rekayasa sistem industri yang berdampak langsung pada *Overall Equipment Effectiveness* (OEE), *mean time between failures* (MTBF), dan total biaya operasional (TCO) armada robotik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Motion planning dengan RL diformulasikan secara formal sebagai **Markov Decision Process** (MDP) tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$:

- $\mathcal{S}$: state space merepresentasikan konfigurasi robot (pose, kecepatan, pembacaan sensor)
- $\mathcal{A}$: action space (perpindahan diskret atau continuous)
- $P(s'|s,a)$: probabilitas transisi state
- $R(s,a,s')$: reward function
- $\gamma \in [0,1)$: discount factor

Fungsi nilai optimal $V^*(s)$ memenuhi **Bellman optimality equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[ R(s,a,s') + \gamma V^*(s') \right]$$

### 2.2 Q-Learning dan Deep Q-Network (DQN)

Untuk ruang state kontinu berdimensi tinggi (umum di AMR industri), Kala (2024) menggunakan arsitektur **Deep Q-Network**. Update aturan Q-learning:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

dengan $\alpha$ adalah *learning rate*. Loss function untuk DQN:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang di-update secara periodik, dan $\mathcal{D}$ adalah *replay buffer*.

### 2.3 Kebijakan Actor-Critic untuk Aksi Kontinu

Untuk AMR dengan ruang aksi kontinu (kecepatan linear $v$ dan angular $\omega$), algoritma **Deep Deterministic Policy Gradient** (DDPG) lebih sesuai:

$$\nabla_{\theta^\mu} J \approx \mathbb{E}_{s \sim \mathcal{D}} \left[ \nabla_a Q(s,a|\theta^Q) \Big|_{a=\mu(s|\theta^\mu)} \nabla_{\theta^\mu} \mu(s|\theta^\mu) \right]$$

### 2.4 Formulasi Reward Engineering

Kala (2024) menekankan rekayasa *reward* sebagai komponen kritis. Fungsi reward khas untuk AMR industri:

$$r_t = -d(p_t, p_{\text{goal}}) + \beta \cdot \mathbb{1}_{\text{collision}} - \zeta \cdot \mathbb{1}_{\text{obstacle\_proximity}} + \eta \cdot \mathbb{1}_{\text{goal\_reached}}$$

dengan $d(p_t, p_{\text{goal}})$ adalah jarak Euclidean ke target, dan $\beta, \zeta, \eta$ adalah bobot penalti/premi yang harus di-tuning melalui *sensitivity analysis*.

### 2.5 Nonlinear Filtering untuk FDIR (Kontribusi Borah 2024)

Borah (2024) memodelkan dinamika agen ke-$i$ dari $N$ agen sebagai:

$$\dot{x}_i(t) = f_i(x_i(t)) + g_i(x_i(t)) u_i(t) + w_i(t)$$
$$y_i(t) = h_i(x_i(t)) + v_i(t)$$

dengan $w_i, v_i$ adalah *process noise* dan *measurement noise*. **Extended Kalman Filter** memberikan estimasi state $\hat{x}_i$:

$$K_k = P(t^-) H^T (H P(t^-) H^T + R)^{-1}$$
$$\hat{x}(t) = \hat{x}(t^-) + K_k (y(t) - h(\hat{x}(t^-)))$$

Residu $r_i(t) = y_i(t) - h_i(\hat{x}_i(t))$ digunakan sebagai input fitur ke *fault isolation network* yang berbasis RL.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

### 3.1 Arsitektur Sistem AMR Berbasis RL

```
┌────────────────────────────────────────────────────┐
│  PERCEPTION LAYER (LiDAR, IMU, Encoder, Camera)   │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│  STATE ESTIMATION (EKF / UKF + Sensor Fusion)      │
│  → Fault Detection via Residual Analysis           │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│  RL POLICY NETWORK (πθ / Qθ)  ←—— Target Net θ⁻   │
│  - Input: state vector s_t                         │
│  - Output: action a_t (v, ω)                       │
└────────────────────┬───────────────────────────────┘
                     ▼
┌────────────────────────────────────────────────────┐
│  MOTION CONTROLLER + SAFETY OVERLAY (ISO 3691-4)  │
└────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi 10 Tahap

1. **Karakterisasi Lingkungan**: Pemetaan zona kerja dengan *Simultaneous Localization and Mapping* (SLAM), identifikasi *static obstacles*, *dynamic agents*, dan *forbidden zones*.

2. **Desain State Space**: Termasuk posisi $(x,y)$, orientasi $\theta$, kecepatan $(v,\omega)$, jarak ke obstacle terdekat $d_{\min}$, dan jarak ke goal $d_g$.

3. **Desain Action Space**: Diskret (5 aksi: maju, mundur, kiri, kanan, berhenti) untuk warehouse sederhana; kontinu untuk AMR di koridor sempit.

5. **Rekayasa Reward**: Kombinasi *sparse terminal reward* (mis. +100 saat goal) dan *dense intermediate reward* (mis. $-d_t + d_{t-1}$ untuk potensi pergerakan).

6. **Inisialisasi Replay Buffer**: Kapasitas $\mathcal{D} = 10^6$ transisi, sampling *uniform random*.

7. **Training Loop**:
   ```
   for episode = 1 to M:
       reset env to initial state s_0
       for t = 0 to T_max:
           a_t = π(s_t) + noise (exploration)
           execute a_t, observe r_t, s_{t+1}
           store (s_t, a_t, r_t, s_{t+1}) in D
           sample mini-batch from D
           compute loss L(θ), backprop
           if step mod C == 0: θ⁻ ← θ
   ```

8. **Validasi Simulasi**: Minimal 1000 episode di environment tervalidasi (Gazebo/Isaac Sim) dengan metrik *success rate*, *average steps*, *collision rate*.

9. **Pilot Deployment (Shadow Mode)**: Jalankan kebijakan RL *di belakang* controller klasik selama 2–4 minggu; bandingkan keputusan tanpa mengendalikan aktuator.

10. **Production Rollout dengan Safety Wrapper**: Implementasikan *safety filter* (mis. Control Barrier Function) untuk menjamin *safety constraint*:

$$ \dot{h}(x) \geq -\alpha h(x), \quad \alpha > 0 $$

### 3.3 Integrasi FDIR Multi-Agen (Borah 2024)

Untuk armada $N$ AMR, setiap agen menjalankan *local EKF* dan berbagi informasi melalui *consensus protocol*:

$$\hat{x}_i^{k+1} = \hat{x}_i^k + \epsilon \sum_{j \in \mathcal{N}_i} (\hat{x}_j^k - \hat{x}_i^k)$$

Fault diisolasi menggunakan *isolation network* berbasis *Deep RL*, dan rekonstruksi dilakukan dengan *virtual actuator* yang mengkompensasi hilangnya fungsi komponen.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: AGV di Gudang E-Commerce

**Parameter Industri:**
- Luas gudang: $L = 100$ m $\times$ $60$ m
- Jumlah pick-station: 12
- Kapasitas AGV: 50 unit, dimensi $1.2 \times 0.8$ m
- Kecepatan maks: $v_{\max} = 1.5$ m/s
- Radius aman: $r_{\text{safe}} = 1.5$ m
- Throughput target: 800 picks/jam
- Operating hours: 20 jam/hari

### 4.2 Grid-World Discretization

Kita diskretkan area kerja menjadi grid $20 \times 12$ sel (ukuran sel = 5 m). State adalah indeks sel $(i,j) \in \{0,\ldots,19\} \times \{0,\ldots,11\}$. Aksi diskret $\mathcal{A} = \{\text{N, S, E, W, stay}\}$.

**Reward function:**
$$r(s,a,s') = \begin{cases} +100 & \text{jika } s' = s_{\text{goal}} \\ -50 & \text{jika collision} \\ -0.1 & \text{otherwise (time penalty)} \end{cases}$$

### 4.3 Perhitungan Q-Value secara Manual

Misalkan agen di state $s = (5,3)$, goal $s_g = (15,9)$. Aksi 'E' membawa ke $s' = (6,3)$. Transisi deterministik, $\gamma = 0.95$.

**Iterasi 0** (Q-table nol): $Q(s, \text{E}) =