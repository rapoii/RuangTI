# 2772 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Berbasis Reinforcement Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur dan logistik modern, robot bergerak otonom (Autonomous Mobile Robots/AMR) telah menjadi tulang punggung transformasi Industri 4.0. Rahul Kala (2024) dalam bab *Motion planning using reinforcement learning* yang diterbitkan melalui *Autonomous Mobile Robots* (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) menegaskan bahwa perencanaan gerak bukan lagi sekadar persoalan geometris statis, melainkan masalah keputusan stokastik yang harus diselesaikan secara real-time di tengah lingkungan dinamis, adanya rintangan bergerak, serta ketidakpastian sensorik dan aktuatorik. Urgensi permasalahan ini semakin nyata ketika kita memperhatikan data operasional: menurut laporan internal perusahaan logistik global, downtime akibat kolisi atau jalur suboptimal pada armada AMR dapat meningkatkan biaya operasional hingga 18–22% per tahun, dengan rata-rata losses USD 47.000 per insiden pada fasilitas pergudangan berskala besar.

Secara ekonomis, penerapan reinforcement learning (RL) untuk motion planning memungkinkan reduksi *total travel distance* hingga 30–45% dibandingkan dengan algoritma klasik seperti A* atau Rapidly-exploring Random Tree (RRT) di lingkungan dengan densitas rintangan tinggi, karena agen RL mampu mempelajari kebijakan (policy) yang bukan hanya shortest-path, tetapi *energy-optimal* dan *collision-aware*. Secara teknis, kompleksitas meningkat ketika sistem harus beroperasi di lingkungan *non-stationary* — misalnya lantai pabrik dengan pekerja pejalan kaki, Automated Guided Vehicle (AGV) lain, dan palet bergerak — di mana pemodelan Markov Decision Process (MDP) klasik sering kali tidak cukup. Kala (2024) mengusulkan kerangka hybrid yang menggabungkan *value iteration* dengan *deep function approximation*, sehingga state-space yang sebelumnya intractably large (ordo $10^{12}$ state) dapat diaproksimasi dengan jaringan saraf dalam.

Kontribusi Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-Agent Systems* (SAMAS) (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) memberikan konteks sistemik yang saling melengkapi: motion planning tidak dapat dipisahkan dari keandalan sistem multi-agen, di mana Fault Detection, Isolation, and Reconstruction (FDIR) menjadi prasyarat operasional. Borah menunjukkan bahwa degradasi sensorik atau kegagalan aktuator pada satu agen dapat menurunkan *task completion rate* seluruh armada hingga 35% jika tidak ada mekanisme FDIR berbasis *nonlinear filtering* dan RL. Integrasi kedua perspektif ini — perencanaan gerak (Kala) dan manajemen fault multi-agen (Borah) — merepresentasikan state-of-the-art dalam rekayasa sistem otonom kontemporer, dan menjadi perhatian utama bagi insinyur teknik industri yang bertanggung jawab atas desain, pengoperasian, dan optimalisasi sistem manufaktur fleksibel.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis motion planning dengan reinforcement learning diformulasikan secara formal sebagai **Markov Decision Process (MDP)** yang didefinisikan oleh tupel $\langle S, A, P, R, \gamma \rangle$, dengan $S$ adalah himpunan state, $A$ himpunan aksi, $P(s'|s,a)$ probabilitas transisi, $R(s,a)$ fungsi reward, dan $\gamma \in [0,1)$ adalah discount factor.

**Fungsi Nilai (Value Function)** untuk kebijakan $\pi$ didefinisikan sebagai ekspektasi discounted return:

$$V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^{t} R(s_t, a_t) \,\Big|\, s_0 = s\right]$$

Fungsi Q-value merepresentasikan nilai ekspektasi apabila aksi $a$ diambil pada state $s$ dan selanjutnya mengikuti kebijakan optimal:

$$Q^{\pi}(s,a) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty}\gamma^{t} R(s_t, a_t) \,\Big|\, s_0 = s, a_0 = a\right]$$

**Persamaan Bellman Optimal** menjadi titik fundamental komputasi:

$$V^{*}(s) = \max_{a \in A}\left[R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) V^{*}(s')\right]$$

dan dalam bentuk Q-function:

$$Q^{*}(s,a) = R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) \max_{a'} Q^{*}(s',a')$$

Kala (2024) menekankan bahwa dalam aplikasi motion planning, transisi state seringkali *deterministic* (perpindahan robot mengikuti kinematic model), sehingga $P(s'|s,a) \in \{0,1\}$, yang menyederhanakan Bellman update menjadi:

$$Q^{*}(s,a) = R(s,a) + \gamma \max_{a'} Q^{*}(s',a')$$

**Update Rule Q-Learning** (off-policy, tabular) yang diperkenalkan Watkins & dikembangkan oleh Kala untuk kasus continuous state-space adalah:

$$Q(s,a) \leftarrow Q(s,a) + \alpha\left[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\right]$$

dengan $\alpha \in (0,1)$ adalah learning rate. Untuk menangani state-space kontinu (posisi $x,y \in \mathbb{R}^{2}$, orientasi $\theta \in [0, 2\pi)$), Kala menggunakan **Deep Q-Network (DQN)** dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta)\right)^{2}\right]$$

di mana $\theta^{-}$ adalah parameter *target network* yang diperbarui secara periodik, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N$.

**Reward Function Engineering** untuk motion planning dirancang sebagai composite function yang menjumlahkan komponen-komponen:

$$R(s,a) = w_1 R_{\text{goal}} + w_2 R_{\text{collision}} + w_3 R_{\text{progress}} + w_4 R_{\text{energy}} + w_5 R_{\text{smooth}}$$

dengan $w_i$ adalah bobot tunable. Secara tipikal:

$$R_{\text{progress}} = \beta \cdot (d_{t-1} - d_t), \quad R_{\text{collision}} = -\mathbb{1}[\text{collision}], \quad R_{\text{goal}} = +\mathbb{1}[\|p - p_{\text{goal}}\| < \epsilon]$$

di mana $d_t$ adalah jarak Euclidean ke goal pada timestep $t$.

Untuk aplikasi multi-agen yang relevan dengan Borah (2024), state diperluas menjadi joint state $s^{(joint)} = (s_1, s_2, \ldots, s_N)$ dengan fungsi reward kooperatif:

$$R^{(joint)} = \sum_{i=1}^{N} R_i(s_i, a_i) + \lambda \cdot R_{\text{coord}}(s^{(joint)})$$

di mana $R_{\text{coord}}$ menangkap metrik koordin seperti *inter-agent collision avoidance* dan *task allocation efficiency*, dengan $\lambda$ sebagai bobot koordinasi.

**Kinematic Constraint** untuk robot differential-drive mengikuti *unicycle model*:

$$\dot{x} = v \cos\theta, \quad \dot{y} = v \sin\theta, \quad \dot{\theta} = \omega$$

dengan $(v, \omega)$ sebagai aksi kontrol kecepatan linier dan angular, yang harus memenuhi $v \in [v_{\min}, v_{\max}]$ dan $\omega \in [-\omega_{\max}, \omega_{\max}]$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri motion planning berbasis RL mengikuti prosedur sistematis berlapis yang dapat distandarkan sebagai SOP (Standard Operating Procedure). Berikut adalah arsitektur implementasi yang disintesiskan dari kerangka Kala (2024) dan Borah (2024):

**Tahap 1 — Pemodelan Sistem (System Modeling).** Definisikan state-space diskret atau kontinu sesuai sensor yang tersedia (LiDAR, IMU, encoder roda). Untuk warehouse robot tipikal, state direpresentasikan sebagai tuple $(x, y, \theta, d_{\text{nearest obstacle}}, v, \omega)$ dengan normalisasi ke rentang $[-1,1]$ untuk stabilitas training.

**Tahap 2 — Desain Reward Function.** Gunakan reward shaping berdasarkan *potential-based reward function* (Ng et al.) untuk menjamin konvergensi ke kebijakan optimal:

$$R(s,a,s') = \gamma \Phi(s') - \Phi(s)$$

dengan $\Phi(s)$ adalah potential function yang menurun seiring mendekatnya robot ke target.

**Tahp 3 — Arsitektur Training.** Gunakan algoritma yang sesuai dengan kompleksitas:
- **DQN** untuk kasus discrete action space (8 arah diskret)
- **PPO (Proximal Policy Optimization)** atau **SAC (Soft Actor-Critic)** untuk continuous control
- **MADDPG (Multi-Agent DDPG)** untuk multi-robot kooperatif sesuai kerangka Borah

**Tahap 4 — Simulasi & Validasi.** Training dilakukan di simulator fisika tinggi (Gazebo, Isaac Sim, atau Webots) dengan domain randomization untuk memastikan transferability ke robot riil. Standar ISO 3691-4:2020 untuk AMR mensyaratkan *safety-rated speed monitoring* dan *emergency stop* yang harus dipantau selama fase validasi.

**Tahap 5 — Fault-Aware Deployment.** Integrasikan modul FDIR dari Borah (2024) yang menggunakan *Extended Kalman Filter* (EKF) dan *Particle Filter* untuk estimasi state sensorik, dengan residual generator:

$$r_k = y_k - \hat{y}_{k|k-1}$$

di mana $r_k > \tau_{\text{threshold}}$ mengindikasikan anomali yang memicu *reconfiguration policy* pada agen RL.

**Diagram Alir Proses (Logic Flow):**

```
[Input Sensori] → [State Estimation + FDIR Check]
        ↓                            ↓
   [Valid State]              [Fault Detected?]
        ↓                            ↓
   [DQN/PPO Policy]         [Reconfigure / Safe-Stop]
        ↓                            ↓
   [Action Sampling] ←——————[Recovery Action]
        ↓
   [Kinematic Execution]
        ↓
   [Reward Computation] → [Replay Buffer] → [Network Update]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah gudang e-commerce berskala besar dengan 3 AMR tipe differential-drive beroperasi untuk memindahkan palet dari picking station ke packing station. Jarak rata-rata 80 meter dengan 15 rintangan statis dan 5 pekerja pejalan kaki (rintangan dinamis). Kecepatan operasi $v_{\max} = 1.5$ m/s, waktu siklus target $T_{\text{target}} \leq 90$ detik.

**Parameter Training RL:**
- State dimension: 8 (continuous)
- Action dimension: 2 (continuous: $v, \omega$)
- Discount factor $\gamma = 0.99$
- Learning rate $\alpha = 3 \times 10^{-4}$
- Replay buffer size $N = 10^6$
- Batch size $B = 256$
- Episode horizon $H = 200$ steps
- Total training episodes: $K = 50{,}000$

**Reward Function yang Diimplementasikan:**

$$R = 100 \cdot \mathbb{1}[\text{goal}] + 2 \cdot (d_{t-1} - d_t) - 50 \cdot \mathbb{1}[\text{collision}] - 0.01 \cdot |v_t| - 0.005 \cdot |\omega_t|$$

**Perhitungan Step-by-Step Q-Value Update** (Episode hipotetis, $\gamma = 0.99$, $\alpha = 0.1$):

Misalkan pada state $s$ robot berada di $(x,y) = (20, 5)$, jarak ke goal $d = 35$ m, dan setelah aksi $a = (v=1.2, \omega=0.3)$ berpindah ke state $s'$ dengan $d' = 33.8$ m. Reward sesaat:

$$r = 2 \cdot (35 - 33.8) - 0.01 \cdot 1.2 - 0.005 \cdot 0.3 = 2.4 - 0.012 - 0.0015 \approx 2.387$$

Q-value update (dengan $Q(s,a) = 12.5$ dan $\max_{a'} Q(s',a') = 14.8$):

$$Q(s,a) \leftarrow 12.5 + 0.1 \cdot [2.387 + 0.99 \cdot 14.8 - 12.5]$$
$$= 12.5 + 0.1 \cdot [2.387