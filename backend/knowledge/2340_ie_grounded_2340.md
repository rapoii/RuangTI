# 2340 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning untuk Sistem Manufaktur dan Multi-Agen Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning untuk robot otonom dan sistem multi-agen (SAMAS)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*, Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan Society 5.0 menuntut sistem produksi, pergudangan, dan distribusi memiliki tingkat otonomi yang semakin tinggi. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* menegaskan bahwa perencanaan gerak (motion planning) merupakan sub-sistem kritis pada robot bergerak otonom (AMR) yang beroperasi di lingkungan dinamis seperti lantai pabrik, gudang *e-commerce*, dan rumah sakit (DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)). Kala menunjukkan bahwa pendekatan klasik berbasis *grid search*, A*, dan Rapidly-exploring Random Tree (RRT) mengalami degradasi performa signifikan ketika kepadatan obstacle berubah secara stokastik — situasi yang lazim pada *shared workspace* manufaktur fleksibel.

Secara ekonomis, pasar AMR global diproyeksikan mencapai USD 8.7 miliar pada 2030 dengan CAGR ~14%. Namun, *Mean Time Between Failures* (MTBF) navigasi masih menjadi瓶颈 (*bottleneck*) — studi yang dirangkum Kala (2024) menunjukkan bahwa 62% downtime AMR disebabkan oleh kegagalan lokal menghindari dinamika obstacle (pejalan kaki, forklift, robot kolaboratif). Pendekatan *Reinforcement Learning* (RL) menawarkan paradigma pembelajaran kebijakan (*policy*) secara *sample-efficient* melalui interaksi trial-and-error dengan lingkungan, sehingga AMR dapat beradaptasi terhadap pola lalu lintas lantai-pabrik yang tidak stasioner.

Di sisi lain, Borah (2024) dalam disertasinya menyoroti bahwa sistem otonom modern tidak berdiri sendiri; melainkan beroperasi sebagai *Smart Autonomous Multi-Agent Systems* (SAMAS) yang terdiri dari beberapa agen dengan kemampuan deteksi, isolasi, dan rekonstruksi故障 (*fault*) — Fault Detection, Isolation, and Reconstruction (FDIR) (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Konteks industri yang dimaksud Borah mencakup sistem multi-agen di mana sensor, aktuator, dan controller dapat mengalami malfungsi secara independen namun saling memengaruhi. Integrasi RL dengan *nonlinear filtering* (misalnya Extended Kalman Filter dan Particle Filter) memungkinkan agen-agen tersebut secara kolektif mempertahankan kinerja meskipun terjadi degradasi komponen.

Urgensi operasional dari integrasi kedua literatur ini jelas: dalam lini perakitan otomotif modern, satu workstation dapat memiliki 5–12 AMR beroperasi simultan, di mana perencanaan gerak harus memperhitungkan *fault* sensor agen tetangga. Tanpa arsitektur SAMAS-RL, satu kegagalan lokal dapat menyebabkan *cascade collision* dengan kerugian puluhan ribu dolar per kejadian. Dengan demikian, penguasaan formulasi MDP, Q-learning, dan algoritma actor-critic untuk konteks multi-agen menjadi kompetensi inti bagi insinyur teknik industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) merumuskan masalah motion planning sebagai MDP dengan tupel:

$$\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$$

di mana:

- $\mathcal{S}$: ruang state kontinu atau diskret (posisi $x,y$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, dan jarak ke obstacle $d_i$);
- $\mathcal{A}$: ruang aksi (diskret: $\{ \text{depan}, \text{belok-kiri}, \text{belok-kanan}, \text{berhenti} \}$; atau kontinu: $(v, \omega)$);
- $P(s'|s,a)$: probabilitas transisi state;
- $R(s,a,s')$: *reward function*;
- $\gamma \in [0,1)$: *discount factor*.

Fungsi nilai state optimal memenuhi **Bellman optimality equation**:

$$V^{*}(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[ R(s,a,s') + \gamma V^{*}(s') \right]$$

dan fungsi aksi-nilai (*Q-function*):

$$Q^{*}(s,a) = \sum_{s'} P(s'|s,a)\left[ R(s,a,s') + \gamma \max_{a'} Q^{*}(s',a') \right]$$

### 2.2 Algoritma Q-Learning dan Deep Q-Network (DQN)

Ketika ruang state terlalu besar untuk tabel Q diskret, Kala (2024) mengusulkan penggunaan **Deep Q-Network** (DQN) dengan parameter $\theta$. Update rule:

$$\theta_{t+1} = \theta_t + \alpha \nabla_{\theta} \mathbb{E}_{s,a,r,s'}\left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^{-}) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^{-}$ adalah parameter *target network* yang diperbarui periodik untuk stabilitas, dan $\alpha$ adalah *learning rate*.

**Reward shaping** yang dirancang Kala (2024) untuk motion planning:

$$R(s,a,s') = w_1 \cdot \mathbb{1}_{\text{goal}}(s') - w_2 \cdot \mathbb{1}_{\text{collision}}(s') + w_3 \cdot \Delta d_{\text{goal}}(s,s') - w_4 \cdot \mathbb{1}_{|a| > a_{\max}}$$

dengan bobot tipikal $w_1 = 100, w_2 = 50, w_3 = 1, w_4 = 0.1$.

### 2.3 Stochastic Multi-Agent Framework (Borah, 2024)

Borah (2024) memperluas formulasi ke domain multi-agen $\mathcal{N} = \{1,\ldots,N\}$ dengan state gabungan:

$$\mathbf{s}_t = (s_t^{(1)}, s_t^{(2)}, \ldots, s_t^{(N)}) \in \mathcal{S}^{N}$$

dan kebijakan terdistribusi $\pi^{(i)}(a^{(i)} | \tau^{(i)})$ berbasis riwayat observasi $\tau^{(i)}$. Filtrasi nonlinear (Extended Kalman Filter) memberikan estimasi state pasca-fault:

$$\hat{s}_{t|t}^{(i)} = \hat{s}_{t|t-1}^{(i)} + K_t^{(i)} \left( z_t^{(i)} - h(\hat{s}_{t|t-1}^{(i)}) \right)$$

dengan *Kalman gain* $K_t^{(i)} = P_{t|t-1}^{(i)} H^T (H P_{t|t-1}^{(i)} H^T + R_t)^{-1}$. Indikator故障 didefinisikan sebagai:

$$\mathcal{F}^{(i)}_t = \mathbb{1}\{ \| r_t^{(i)} \| > \eta \}, \quad r_t^{(i)} = z_t^{(i)} - h(\hat{s}_{t|t}^{(i)})$$

di mana $\eta$ adalah ambang deteksi yang dikalibrasi terhadap distribusi残差 saat *healthy mode*.

### 2.4 Convergence Guarantee

Kala (2024) menjamin konvergensi Q-learning tabular dengan syarat:

$$\sum_{t=0}^{\infty} \alpha_t = \infty \quad \text{dan} \quad \sum_{t=0}^{\infty} \alpha_t^2 < \infty$$

Robbins-Monro conditions ini menjamin bahwa iterasi Q-Learning konvergen ke $Q^{*}$ dengan probabilitas 1 selama semua state-action pairs dikunjungi tak terhingga kali.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning RL di industri mengikuti SOP terstruktur sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan (Environment Engineering).** Definisikan *occupancy grid* dengan resolusi sel 0.1–0.5 m menggunakan data SLAM (Simultaneous Localization and Mapping). Buat simulator digital-twin berbasis Gazebo atau Isaac Sim sesuai standar ISO 3691-4 untuk AMR industri.

**Tahap 2 — Desain MDP.** Identifikasi state (posisi, heading, kecepatan, jarak LiDAR minimum), action (diskret 5-aksi atau kontinu), dan reward function dengan bobot yang telah dikalibrasi pada sub-seksi 2.2.

**Tahap 3 — Pra-pelatihan (Offline Training).** Jalankan DQN dengan *experience replay buffer* berkapasitas $B = 10^5$ selama minimal $5 \times 10^5$ episode di simulator. Validasi metrik: *success rate* $> 95\%$, *average path length* $\leq 1.15 \times$ lintasan optimal A*.

**Tahap 4 — Fine-tuning On-site.** Transfer kebijakan ke AMR fisik dengan lapisan keamanan (*safety layer*) berbasis *control barrier function* (CBF) yang menjamin invarian keselamatan:

$$\dot{h}(x) \geq -\alpha h(x), \quad \alpha > 0$$

**Tahap 5 — Integrasi SAMAS (Borah, 2024).** Untuk multi-agen, deploy modul Extended Kalman Filter per agen dan protokol konsensus FDIR terdistribusi dengan komunikasi via ROS 2 DDS *Quality-of-Service*.

**Tahap 6 — Audit & Validasi Berkelanjutan.** Lakukan *safety case* sesuai ISO 13849 (PL=d) dan rekam metrik KPI: *collision rate*, *task completion time*, *MTBF*.

Diagram alur keputusan agen:
```
Perceive z_t → EKF Estimasi s_t → Cek Residual r_t
       ↓                               ↓
|r_t| ≤ η: Mode Sehat     |r_t| > η: Fault Declared
       ↓                               ↓
Pilih aksi via π_θ       Isolasi & Rekonstruksi via RL Reconfig
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** AMR mengangkut pallet seberat 250 kg dari pick-station A(0,0) ke drop-station B(20,10) di gudang *e-commerce* dengan lebar lorong 2 m. obstacle statis: rak-rak; obstacle dinamis: 3 pekerja berjalan dengan kecepatan 1.2 m/s.

**Parameter MDP (dari Kala, 2024):**
- State diskret: $8 \times 8$ grid relatif terhadap posisi agen.
- Action diskret: $\{a_0=\text{utara}, a_1=\text{selatan}, a_2=\text{timur}, a_3=\text{barat}, a_4=\text{berhenti}\}$.
- Learning rate $\alpha = 0.1$, discount $\gamma = 0.9$, $\epsilon$-greedy decay $0.99$ per episode.

**Perhitungan 1 — Update Q-value pada satu transisi.**
Misalkan agen pada state $s_9$ (jarak 3 sel ke goal) mengambil aksi $a_2$ (timur), berpindah ke $s_{11}$ (jarak 1 sel), menerima reward $r = w_1 = 100$ (pencapaian sub-goal). Tabel Q awal: $Q(s_9, a_2) = 45.2$, $\max_{a'} Q(s_{11}, a') = 92.5$.

$$Q^{\text{new}}(s_9,a_2) = Q(s_9,a_2) + \alpha\left[ r + \gamma \max_{a'}Q(s_{11},a') - Q(s_9,a_2) \right]$$

$$= 45.2 + 0.1 \times [100 + 0.9 \times 92.5 - 45.2]$$

$$= 45.2 + 0.1 \times [100 + 83.25 - 45.2]$$

$$= 45.2 + 0.1 \times 138.05 = 45.2 + 13.805 = 59.005$$

**Perhitungan 2 — Estimasi MTBF Nav**

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
