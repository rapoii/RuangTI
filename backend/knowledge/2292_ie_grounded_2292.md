# 2292 — Perencanaan Gerak Robot Otonom Berbasis Reinforcement Learning untuk Sistem Industri Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah mengubah secara fundamental arsitektur lantai produksi, pusat distribusi, dan rantai pasok global. Salah satu pilar utama transformasi tersebut adalah adopsi masif *Autonomous Mobile Robots* (AMR) dan *Automated Guided Vehicles* (AGV) yang membutuhkan kemampuan perencanaan gerak (*motion planning*) otonom dalam lingkungan dinamis. Rahul Kala (2024) dalam karyanya yang diterbitkan pada *Autonomous Mobile Robots* menekankan bahwa perencanaan gerak klasik seperti A*, Dijkstra, atau Rapidly-exploring Random Tree (RRT) memiliki keterbatasan fatal ketika menghadapi lingkungan yang tidak sepenuhnya terstruktur, terdapat agen dinamis lain (manusia, robot), serta adanya degradasi sensor dan aktuator [DOI: 10.1016/b978-0-443-18908-1.00016-9]. Pendekatan *Reinforcement Learning* (RL) muncul sebagai paradigma alternatif yang memungkinkan robot belajar kebijakan (*policy*) optimal melalui interaksi langsung dengan lingkungannya tanpa memerlukan peta prior yang lengkap.

Konteks industri yang melatarbelakangi urgensi topik ini sangat luas. Pertama, sektor *e-commerce fulfillment* yang didorong oleh pemain seperti Amazon (dengan sistem Kiva), Alibaba (dengan Cainiao Smart Logistics Network), dan JD.com membutuhkan ribuan AGV untuk beroperasi secara simultan di gudang ratusan ribu meter persegi. Kedua, sektor manufaktur presisi tinggi (semikonduktor, otomotif) memerlukan AMR yang mampu menavigasi jalur sempit dengan akurasi sub-sentimeter sembari berkolaborasi dengan lengan robot dan operator manusia. Ketiga, sektor pertambangan, pertanian, dan pertahanan membutuhkan platform otonom di lingkungan GPS-denied yang menuntut kebijakan navigasi adaptif. Kaustav Borah (2024) memperkuat relevansi ini dengan menunjukkan bahwa sistem multi-agen otonom (Smart Autonomous Multi-Agent Systems/SAMAS) menjadi krusial ketika sistem mengalami degradasi pada sensor, aktuator, maupun jaringan komunikasi, sehingga *Fault Detection, Isolation, and Reconstruction* (FDIR) yang adaptif harus tertanam dalam kebijakan RL [DOI: 10.32920/25412566.v1].

Secara ekonomis, pasar AMR global diproyeksikan menembus USD 14+ miliar pada 2030 dengan CAGR >15%, menjadikan efisiensi perencanaan gerak sebagai penentu langsung *throughput*, *order fulfillment lead time*, dan *total cost of ownership* (TCO). Kenaikan *throughput* gudang hingga 300% pasca-implementasi AMR berskala besar sebagian besar ditentukan oleh kemampuan sistem RL menghasilkan jalur yang collision-free, energy-efficient, dan *deadlock-free*. Dari perspektif keselamatan operasional (*Safety of Intended Functionality* sesuai ISO 21448 SOTIF), kemampuan RL beradaptasi dengan anomali lingkungan menjadi pembeda utama antara AMR generasi awal (rule-based) dengan generasi baru (learning-based). Integrasi RL dengan *nonlinear filtering* (Extended Kalman Filter, Unscented Kalman Filter, Particle Filter) seperti diusulkan Borah (2024) memungkinkan estimasi state yang robust terhadap noise sensor dan gangguan lingkungan, sehingga keputusan aksi tetap dapat diandalkan dalam skenario mission-critical.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Perencanaan gerak berbasis RL diformulasikan secara formal sebagai MDP dengan tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ = ruang state (posisi, orientasi, kecepatan, pembacaan sensor)
- $\mathcal{A}$ = ruang aksi (diskret atau kontinu)
- $P(s'|s,a) = \Pr(S_{t+1}=s'|S_t=s, A_t=a)$ = probabilitas transisi
- $R(s,a,s')$ = fungsi reward
- $\gamma \in [0,1)$ = faktor diskon

Kala (2024) menekankan bahwa dalam konteks AMR, ruang state umumnya kontinu berdimensi tinggi (misalnya gabungan data LiDAR 360° + odometri + IMU), sehingga diperlukan generalisasi fungsi nilai melalui *Deep Reinforcement Learning* (DRL).

### 2.2 Persamaan Bellman dan Fungsi Nilai

Fungsi nilai optimal $V^*(s)$ dan fungsi aksi-nilai optimal $Q^*(s,a)$ didefinisikan melalui persamaan Bellman optimalitas:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma V^*(s') \right]$$

$$Q^*(s,a) = \sum_{s' \in \mathcal{S}} P(s'|s,a) \left[ R(s,a,s') + \gamma \max_{a' \in \mathcal{A}} Q^*(s',a') \right]$$

Kebijakan optimal diekstraksi sebagai $\pi^*(s) = \arg\max_{a} Q^*(s,a)$.

### 2.3 Algoritma Q-Learning dan Deep Q-Network (DQN)

Untuk state diskret, algoritma tabular Q-Learning melakukan pembaruan iteratif:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate* dan *temporal difference error* didefinisikan sebagai $\delta_t = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t)$.

Untuk state kontinu berdimensi tinggi, Kala (2024) membahas penggunaan DQN dengan *experience replay buffer* $\mathcal{D}$ dan *target network* $Q_{\theta^-}$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_\theta(s,a) \right)^2 \right]$$

### 2.4 Metode Policy Gradient dan Actor-Critic

Untuk ruang aksi kontinu (kendali kecepatan dan steering AGV), pendekatan *Policy Gradient* dengan teorema policy gradient dirumuskan:

$$\nabla J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{T} \nabla_\theta \log \pi_\theta(a_t|s_t) \cdot A^{\pi_\theta}(s_t, a_t) \right]$$

dengan *advantage function* $A^{\pi}(s_t, a_t) = Q^{\pi}(s_t, a_t) - V^{\pi}(s_t)$. Algoritma *Actor-Critic* seperti DDPG, PPO, dan SAC yang dibahas Kala (2024) menggabungkan estimator fungsi nilai (critic) dengan parametrizasi kebijakan (actor), dengan loss critic:

$$\mathcal{L}_{\text{critic}}(\phi) = \mathbb{E} \left[ \left( r + \gamma V_{\phi'}(s') - V_\phi(s) \right)^2 \right]$$

dan update actor melalui *deterministic policy gradient*:

$$\nabla_{\theta} J \approx \mathbb{E} \left[ \nabla_a Q_\phi(s,a) \big|_{a=\pi_\theta(s)} \cdot \nabla_\theta \pi_\theta(s) \right]$$

### 2.5 Nonlinear Filtering untuk Estimasi State

Borah (2024) menyoroti bahwa dalam sistem multi-agen, observasi sensor $z_k$ terhadap state $x_k$ bersifat nonlinear dan tertekan noise. *Extended Kalman Filter* (EKF) melakukan linearisasi melalui