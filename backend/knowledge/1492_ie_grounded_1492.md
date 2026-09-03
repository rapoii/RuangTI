# 1492 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning untuk Sistem Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion Planning menggunakan Reinforcement Learning untuk Robot Otonom dan Sistem Multi-Agen
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*. Dalam *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. Peer-Reviewed Journal. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 dan Society 5.0 telah memposisikan *Autonomous Mobile Robot* (AMR) dan *Automated Guided Vehicle* (AGV) sebagai tulang punggung sistem intralogistik modern. Di lantai pabrik, gudang distribusi, dan rantai pasok e-commerce, AMR menggantikan sistem konveyor statis dengan armada dinamis yang mampu merencanakan jalur secara adaptif. Rahul Kala (2024) dalam chapter *"Motion planning using reinforcement learning"* yang diterbitkan oleh Elsevier menegaskan bahwa permasalahan *motion planning* bukan sekadar menemukan lintasan bebas hambatan, melainkan menentukan kebijakan (policy) optimal yang memaksimalkan utilitas sistem secara jangka panjang di tengah ketidakpastian lingkungan [DOI: 10.1016/b978-0-443-18908-1.00016-9].

Urgensi ekonomis dari penerapan Reinforcement Learning (RL) dalam motion planning sangat nyata. Menurut Markets and Markets (2024), pasar AMR global diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR 17,2%, didorong oleh kebutuhan *flexible manufacturing* dan *order fulfillment* yang semakin pendek. Tantangan operasional yang dijawab RL antara lain: (1) **dinamika lingkungan non-stasioner** — pejalan kaki, robot lain, dan rak bergerak; (2) **trade-off multi-objektif** — antara konsumsi energi, waktu siklus, dan keselamatan; (3) **partial observability** — keterbatasan sensor LiDAR dan kamera dalam kondisi oklusi. Kaustav Borah (2024) melengkapi perspektif ini dengan menegaskan bahwa pada sistem multi-agen (*Smart Autonomous Multi-agent Systems / SAMAS*), kemampuan *Fault Detection, Isolation, and Reconstruction* (FDIR) menjadi prasyarat agar armada otonom tetap beroperasi saat terjadi malfungsi sensor, aktuator, atau jaringan komunikasi [DOI: 10.32920/25412566.v1]. Kombinasi RL untuk *motion planning* dengan nonlinear filtering untuk FDIR menjadi arsitektur holistik yang kini diadopsi oleh pemain industri seperti Amazon Robotics, Locus Robotics, dan Symbotic.

Dari perspektif Teknik Industri, integrasi RL memungkinkan konversi masalah *vehicle routing problem* klasik menjadi *sequential decision-making under uncertainty* yang dapat diskalakan secara real-time. Kala (2024) menunjukkan bahwa RL menggeser paradigma dari *planner-centric* (membutuhkan peta lengkap) ke *learning-centric* (belajar dari interaksi), sehingga mengurangi biaya rekayasa untuk setiap perubahan tata letak pabrik (*layout reconfiguration*). Borah (2024) menambahkan bahwa dalam konteks manufaktur kompleks, kesalahan satu agen dapat memicu efek domino pada lini produksi, sehingga RL yang dipadukan dengan filter Kalman atau Particle Filter menjadi mekanisme pertahanan berlapis (*defense-in-depth*). Kedua paper ini menjadi landasan mengapa modul 1492 relevan bagi insinyur industri yang merancang *smart factory*, sistem *warehouse execution*, dan *flexible manufacturing system* (FMS) generasi berikutnya.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formalisasi Markov Decision Process (MDP)

Permasalahan motion planning dengan RL diformalisasikan sebagai *Markov Decision Process* (MDP) yang didefinisikan oleh tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$ [Kala, 2024]:

- $\mathcal{S}$: himpunan state (konfigurasi robot dalam ruang kerja),
- $\mathcal{A}$: himpunan aksi (komando kecepatan linier $v$ dan sudut $\omega$),
- $P(s'|s,a)$: probabilitas transisi ke state $s'$,
- $R(s,a)$: fungsi reward (misal: $-1$ untuk langkah biasa, $+100$ untuk mencapai target, $-50$ untuk tabrakan),
- $\gamma \in [0,1)$: faktor diskonto untuk horizon ke depan.

Fungsi nilai state $V^\pi(s)$ didefinisikan sebagai ekspektasi return kumulatif:

$$V^\pi(s) = \mathbb{E}_\pi \left[ \sum_{t=0}^{\infty} \gamma^t R(s_t, a_t) \,\Big|\, s_0 = s \right]$$

Persamaan Bellman optimal untuk fungsi aksi-nilai (Q-function):

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) \max_{a'} Q^*(s',a')$$

### 2.2 Algoritma Q-Learning dan Deep Q-Network (DQN)

Untuk state diskret yang besar, Kala (2024) menggunakan pendekatan *tabular Q-learning* dengan update:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

di mana $\alpha$ adalah *learning rate*. Ketika ruang state bersifat kontinu (misalnya posisi $(x,y) \in \mathbb{R}^2$), digunakan *Deep Q-Network* dengan parameter $\theta$:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

dengan $\theta^-$ parameter *target network* yang di-*update* secara periodik, dan $\mathcal{D}$ adalah *replay buffer* berukuran $N$.

### 2.3 Multi-Agent Reinforcement Learning (MARL)

Borah (2024) memperluas formulasi ke domain multi-agen SAMAS. Untuk $N$ agen, state gabungan didefinisikan sebagai $\mathbf{s} = (s^{(1)}, s^{(2)}, \dots, s^{(N)}) \in \mathcal{S}^N$, dan joint policy $\boldsymbol{\pi}(\mathbf{a}|\mathbf{s})$ dengan $\mathbf{a} = (a^{(1)},\dots,a^{(N)})$. Utilitas sistem memenuhi persamaan *value decomposition*:

$$Q_{tot}(\mathbf{s}, \mathbf{a}; \theta) \approx \sum_{i=1}^{N} Q_i(s^{(i)}, a^{(i)}; \theta_i)$$

### 2.4 Nonlinear Filtering untuk FDIR

Untuk deteksi anomali pada aktuator dan sensor, Borah (2024) menggunakan *Extended Kalman Filter* (EKF) dan *Particle Filter* (PF). Model state nonlinier:

$$\mathbf{x}_k = f(\mathbf{x}_{k-1}, \mathbf{u}_{k-1}) + \mathbf{w}_{k-1}, \quad \mathbf{y}_k = h(\mathbf{x}_k) + \mathbf{v}_k$$

dengan $\mathbf{w}_k \sim \mathcal{N}(0, Q_k)$ dan $\mathbf{v}_k \sim \mathcal{N}(0, R_k)$. Update EKF:

$$\hat{\mathbf{x}}_k = \hat{\mathbf{x}}_{k|k-1} + K_k (\mathbf{y}_k - h(\hat{\mathbf{x}}_{k|k-1}))$$

$$K_k = P_{k|k-1} H_k^\top (H_k P_{k|k-1} H_k^\top + R_k)^{-1}$$

Inovasi residu $\mathbf{r}_k = \mathbf{y}_k - h(\hat{\mathbf{x}}_{k|k-1})$ dibandingkan dengan ambang $\chi^2_{\alpha, m}$ untuk memicu keputusan FDIR.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### SOP-1492: Implementasi RL untuk Motion Planning AMR Industri

**Fase 1 — Pemodelan Lingkungan (Minggu 1-2)**

1. Akuisisi peta 2D/3D fasilitas menggunakan SLAM (*Simultaneous Localization and Mapping*) dengan LiDAR 2D/3D.
2. Diskretisasi ruang kerja menjadi *occupancy grid* dengan resolusi $\Delta x = \Delta y = 0{,}1$ m.
3. Definisi state: posisi $(x,y)$, orientasi $\theta$, kecepatan $(v,\omega)$, dan proximity sensor $[d_1, d_2, \dots, d_8]$.

**Fase 2 — Desain Fungsi Reward (Minggu 2-3)**

$$r_t = \underbrace{+100 \cdot \mathbb{1}_{\text{goal}}}_{r_{\text{goal}}} \underbrace{- 50 \cdot \mathbb{1}_{\text{collision}}}_{r_{\text{safety}}} \underbrace{- 0{,}1 \cdot v_t}_{r_{\text{energy}}} \underbrace{- 0{,}5 \cdot (1 - \cos(\theta_t - \theta_{\text{ref}}))}_{r_{\text{heading}}}$$

**Fase 3 — Pelatihan (Minggu 3-6)**

1. Inisialisasi *replay buffer* $\mathcal{D}$ berkapasitas $10^6$ transisi.
2. Latih DQN dengan $\alpha = 10^{-4}$, $\gamma = 0{,}99$, ukuran batch $B = 64$.
3. Gunakan *epsilon-greedy* dengan $\varepsilon$ decay: $\varepsilon_t = \max(0{,}01, 1 - t/10^5)$.
4. Validasi pada *validation environment* setiap 100 episode.

**Fase 4 — Integrasi FDIR (Minggu 6-7)**

Berdasarkan Borah (2024), integrasikan modul EKF untuk estimasi state, dan threshold-based classifier:

$$\text{Fault Flag} = \begin{cases} 1, & \text{jika } \mathbf{r}_k^\top S_k^{-1} \mathbf{r}_k > \chi^2_{\alpha, m} \\ 0, & \text{lainnya} \end{cases}$$

**Fase 5 — Deployment & Continuous Learning (Minggu 8+)**

1. *Shadow mode* — bandingkan keputusan RL dengan *rule-based* baseline A*.
2. *Canary deployment* pada 5% armada.
3. *Transfer learning* dengan fine-tuning $\theta \to \theta'$ jika layout berubah.

Diagram alir proses: **[SLAM Mapping] → [MDP Formulation] → [Reward Design] → [DQN Training] → [EKF-FDIR Integration] → [Sim Validation] → [Hardware-in-the-Loop] → [Production Rollout] → [Monitoring & Retraining]**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Gudang E-Commerce dengan 10 AMR

**Parameter Industri:**

- Dimensi gudang: $60 \text{ m} \times 40 \text{ m}$
- Jumlah rak: 50 unit, tinggi 2 m,间距 lorong 1,5 m
- Kecepatan operasi: $v_{\max} = 1{,}5$ m/s
- Beban per pick: 3 kg, kapasitas baterai: 100 Ah @ 24 V (≈ 2,4 kWh)
- Time window fulfillment: 8 jam/hari, target throughput: 500 picks/jam

**Langkah 1: Perhitungan Lintasan Optimal dengan Q-Learning (state diskret)**

Misalkan grid 600×400 dengan downsampling menjadi 60×40 sel ($\Delta x = 1$ m). Episode maksimum: 500. Parameter: $\alpha = 0{,}1$, $\gamma = 0{,}95$, $\varepsilon = 0{,}1$.

Update Q-function untuk satu transisi riil:

Diketahui: $Q(s,a) = 12{,}5$; reward $r = -0{,}1$; $\max_{a'} Q(s',a') = 14{,}2$.

$$Q_{\text{new}}(s,a) = 12{,}5 + 0{,}1 \cdot \left[ -0{,}1 + 0{,}95 \cdot 14{,}2 - 12{,}5 \right]$$
$$= 12{,}5 + 0{,}1 \cdot [\, -0{,}1 + 13{,}49 - 12{,}5 \,] = 12{,}5 + 0{,}1 \cdot 0{,}89 = 12{,}589$$

Artinya, satu episode memberi gain $\Delta Q = +0{,}089$ pada pasangan state-aksi tersebut.

**Langkah 2: Perhitungan Waktu Siklus AMR**

Panjang lintasan tipikal pick-station A → rak B → packing: $L = 28$ m. Kecepatan rata-rata (termasuk akselerasi): $\bar{v} = 1{,}1$ m/s.

$$T_{\text{siklus}} = \frac{L}{\bar{v}} + T_{\text{pick}} + T_{\text{dock}} = \frac{28}{1{,}1} + 8 + 5 \approx 38{,}45 \text{ s}$$

Dengan reward $-0{,}1$ per detik, total step reward siklus.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
