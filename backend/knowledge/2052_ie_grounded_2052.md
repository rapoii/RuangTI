# 2052 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Sistem Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era *Industry 4.0* dan *Society 5.0* mendorong transformasi fundamental pada rantai pasok manufaktur, intralogistik, dan sistem produksi diskret menjadi entitas otonom yang *cyber-physical*. Menurut Rahul Kala (2024) dalam bab "*Motion planning using reinforcement learning*" yang termuat dalam buku *Autonomous Mobile Robots* (Elsevier, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)), perencanaan gerak (*motion planning*) merupakan komponen kritis yang memungkinkan *Automated Guided Vehicle* (AGV), *Autonomous Mobile Robot* (AMR), dan drone logistik menavigasi lingkungan manufaktur yang dinamis, semi-terstruktur, dan padat hambatan. Kala menegaskan bahwa pendekatan klasik seperti *A\**, *Rapidly-exploring Random Tree* (RRT), dan *Potential Field* memiliki keterbatasan inheren ketika diterapkan pada lingkungan yang berubah secara *real-time*, di mana peta statis tidak lagi memadai karena variasi布局 produksi, keberadaan pekerja manusia, dan mobilitas peralatan lain.

Urgensi ekonomis dan operasional dari adopsi Reinforcement Learning (RL) dalam perencanaan gerak semakin nyata. Studi yang dilakukan oleh McKinsey (2022) dan disitir dalam berbagai telaah sistematis menunjukkan bahwa otomatisasi gudang menggunakan AMR dapat menurunkan biaya operasional hingga 30% dan meningkatkan *throughput*拣选 hingga 300%. Kala (2024) mengargumentasikan bahwa RL memungkinkan robot mempelajari kebijakan navigasi optimal melalui interaksi trial-and-error dengan lingkungan, tanpa memerlukan model eksplisit先前. Pendekatan ini menjadi semakin relevan ketika digabungkan dengan arsitektur multi-agen seperti yang diusulkan oleh Kaustav Borah (2024) dalam disertasinya "*Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*" (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)), di mana arsitektur SAMAS (*Smart Autonomous Multi-Agent System*) mengintegrasikan RL untuk mendukung *Fault Detection, Isolation, and Reconstruction* (FDIR) pada sistem dinamis kompleks dengan komponen sensor, aktuator, jaringan komunikasi, dan kontroler yang rentan terhadap malfunction.

Konteks industri yang dibahas meliputi: (i) *smart warehousing* dan*e-commerce fulfillment centers* yang membutuhkan keputusan routing adaptif; (ii) lini perakitan fleksibel (*flexible manufacturing systems*) dengan workstation yang dapat direkonfigurasi; (iii) pelabuhan dan terminal kontainer yang memerlukan penjadwalan crane otomatis; (iv) fasilitas *semiconductor fabrication* dengan约束洁净室 dan lintasan yang sangat terbatas. Permasalahan perencanaan gerak dalam domain ini bukan sekadar menemukan jalur terpendek secara geometris, melainkan mengoptimasi *makespan*, konsumsi energi, tingkat tabrakan, dan kepatuhan terhadap zona keselamatan. Inilah titik di mana RL memberikan diferensiasi substantif dibandingkan metode klasik — melalui fungsi reward yang mampu meng-*encode* tujuan majemuk secara simultan.

## 2. Landasan Teori & Formulasi Matematis

Formulasi kanonik dari perencanaan gerak berbasis RL dimodelkan sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$ adalah himpunan state yang merepresentasikan konfigurasi robot dan lingkungannya (posisi, orientasi, kecepatan, pembacaan sensor LiDAR/IMU, status hambatan);
- $\mathcal{A}$ adalah himpunan aksi diskret atau kontinyu (translasi ke depan/belok, perubahan kecepatan);
- $P(s'|s,a)$ adalah probabilitas transisi state;
- $R(s,a,s')$ adalah *reward function* yang mengukur kualitas transisi;
- $\gamma \in [0,1)$ adalah *discount factor* yang mengatur horizon reward.

Kebijakan optimal $\pi^*(a|s)$ memaksimalkan *expected cumulative discounted reward*:

$$J^\pi(s_0) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t, a_t, s_{t+1}) \Big| s_0\right]$$

Persamaan Bellman untuk *state-value function* $V^\pi(s)$ dituliskan sebagai:

$$V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^\pi(s')\right]$$

dan untuk *action-value function* $Q^\pi(s,a)$:

$$Q^\pi(s,a) = \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma \sum_{a'} \pi(a'|s') Q^\pi(s',a')\right]$$

Kala (2024) menekankan bahwa dalam lingkungan dengan model transisi yang tidak diketahui (*model-free*), algoritma **Q-learning** (Watkins & Dayan, 1992) melakukan pembaruan iteratif terhadap估计 $Q(s,a)$ menggunakan aturan:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha\left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Konvergensi ke $Q^*(s,a)$ terjamin jika semua pasangan $(s,a)$ dikunjungi tak hingga kali dan $\alpha$ memenuhi kondisi Robbins-Monro: $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$.

Untuk ruang state dimensi tinggi (misalnya peta gudang dengan $>10^4$ sel), Kala (2024) merekomendasikan **Deep Q-Network** (DQN) yang mengaproksimasi $Q(s,a;\theta)$ dengan jaringan saraf tiruan. Fungsi loss yang diminimalkan adalah:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left(r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta)\right)^2\right]$$

dengan $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer*. Untuk permasalahan multi-agen seperti pada arsitektur SAMAS yang dibahas Borah (2024), formulasi diperluas ke **Decentralized Partially Observable MDP** (Dec-POMDP), di mana setiap agen $i$ memilih aksi berdasarkan observasi lokal $o_i$ dengan kebijakan $\pi_i(a_i|o_i)$. Tujuan kooperatif menjadi:

$$\max_{\pi_1,\ldots,\pi_N} \mathbb{E}\left[\sum_{t=0}^{T} \gamma^t \sum_{i=1}^{N} r_i(s_t, a_t^{(i)})\right]$$

dengan *consensus constraint* agar estimasi state melalui Kalman Filter terdistribusi tetap konvergen untuk FDIR.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL untuk motion planning di lingkungan industri mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan dan Akuisisi Data.**
Lakukan *SLAM* (*Simultaneous Localization and Mapping*) menggunakan sensor LiDAR 2D/3D, kamera stereo, dan IMU sesuai standar ISO 3691-4:2020 untuk kendaraan industri tanpa pengemudi. Hasil pemetaan disimpan dalam format *Occupancy Grid Map* dengan resolusi sel $r \in [0.05, 0.20]$ m. Definisikan $\mathcal{S}$ sebagai himpunan sel yang dapat dikunjungi, dengan tambahan fitur: jarak ke tetangga, keberadaan ada zona terlarang (no-go), dan status semafor lalu lintas internal.

**Tahap 2 — Desain Fungsi Reward.**
Fungsi reward dirancang hierarkis sesuai rekomendasi Kala (2024):
$$r(s,a,s') = w_1 \cdot r_{\text{goal}} + w_2 \cdot r_{\text{collision}} + w_3 \cdot r_{\text{efficiency}} + w_4 \cdot r_{\text{smoothness}}$$
dengan bobot $w_i \geq 0$ dan $\sum w_i = 1$. Komponen tipikal: $r_{\text{goal}} = +100$ jika mencapai target, $r_{\text{collision}} = -50$ jika kontak dengan hambatan, $r_{\text{efficiency}} = -\Delta t / T_{\max}$ (penalisasi waktu), $r_{\text{smoothness}} = -|\Delta v|$.

**Tahap 3 — Pelatihan di Simulator.**
Gunakan simulator deterministik dan stokastik (Gazebo, Isaac Sim, Unity ML-Agents) dengan parameter domain randomization: variasi koefisien gesekan ($\mu \in [0.4, 0.9]$), latensi sensor ($10{-}100$ ms), dan gangguan lingkungan. Jalankan pelatihan dengan $\epsilon$-greedy exploration: $\epsilon_t = \max(\epsilon_{\min}, \epsilon_0 \cdot \delta^t)$ hingga konvergensi ($|Q_{t+1}-Q_t| < 10^{-4}$).

**Tahap 4 — Validasi dan *Sim-to-Real Transfer*.**
Terapkan teknik *domain randomization* dan *domain adaptation* (fine-tuning dengan data nyata). Validasi metrik: tingkat keberhasilan ($\geq 99.5\%$), *mean time-to-goal*, konsumsi energi per misi.

**Tahap 5 — Deployment dan Pemantauan Berkelanjutan.**
Integrasikan dengan MES (*Manufacturing Execution System*) melalui protokol OPC UA / MQTT. Lakukan *online fine-tuning* dengan prioritas keselamatan sesuai ISO 10218-1 dan ISO/TS 15066 untuk kolaborasi manusia-robot.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *e-commerce fulfillment center* di Jakarta memiliki grid gudang $10 \times 10$ sel (resolusi 1 m). AGV harus berpindah dari *pick station* $S=(1,1)$ ke *pack station* $G=(10,10)$ melalui lorong dengan tiga hambatan tetap di sel $(3,4)$, $(5,5)$, dan $(7,6)$. Tabel Q-learning awal $Q(s,a)$ diinisialisasi nol.

Parameter RL: $\alpha = 0{,}1$; $\gamma = 0{,}9$; $\epsilon = 0{,}1$; aksi $\mathcal{A} = \{\text{North, South, East, West}\}$; reward $r_{\text{goal}}=+100$, $r_{\text{collision}}=-10$, $r_{\text{step}}=-1$.

**Iterasi Episode 1 — Jalur Percobaan:** $(1,1) \to (1,2) \to (1,3) \to (2,3) \to (3,3) \to (4,3) \to (4,4) \to (5,4) \to (6,4) \to (6,5) \to (7,5) \to (8,5) \to (9,5) \to (10,5) \to (10,6) \to (10,7) \to (10,8) \to (10,9) \to (10,10)$. Panjang jalur = 18 langkah. Q-update di state akhir:

$$Q((10,9),\text{East}) = 0 + 0{,}1\left[100 + 0{,}9 \cdot 0 - 0\right] = 10{,}0$$

**Iterasi Episode 1 — state awal:** Setelah propagasi mundur, di sel $(10,9)$ estimasi reward masa depan maksimum = 10, sehingga update di sel $(10,8)$:

$$Q((10,8),\text{East}) = 0 + 0{,}1\left[-1 + 0{,}9 \cdot 10 - 0\right] = 0{,}89$$

**Iterasi Episode 5 (estimasi