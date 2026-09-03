# 2596 — Perencanaan Gerak (Motion Planning) Berbasis Reinforcement Learning untuk Robot Bergerak Otonom

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Smart Autonomous Multi-agent Systems (FDIR dengan Reinforcement Learning)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan pesat sektor *e-commerce*, manufaktur fleksibel, dan logistik pintar telah menciptakan permintaan eksponensial terhadap **Autonomous Mobile Robots (AMR)** dan **Automated Guided Vehicles (AGV)**. Menurut analisis Kala (2024) dalam bab *Motion planning using reinforcement learning* pada buku *Autonomous Mobile Robots* (Elsevier, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)), perencanaan gerak (*motion planning*) bukan sekadar persoalan geometris menemukan jalur bebas-halangan (*collision-free path*), melainkan masalah **pengambilan keputusan sekuensial di bawah ketidakpastian** yang krusial bagi keberlangsungan operasi industri modern. Kala menekankan bahwa *Reinforcement Learning* (RL) memberikan paradigma baru di mana agen robotik belajar kebijakan optimal (*optimal policy*) melalui interaksi langsung dengan lingkungannya, tanpa memerlukan model dinamika eksplisit yang sering kali tidak tersedia atau berubah secara stokastik pada lini produksi nyata (Kala, 2024).

Konteks industri yang melatarbelakangi urgensi topik ini sangat konkret. Pertama, pada **gudang otomatis** (misalnya fasilitas Amazon, Alibaba Cainiao, atau DHL), ratusan hingga ribuan AMR harus bernavigasi secara simultan di lorong-lorong sempit, dengan布局 dinamis (petugas, palet yang dipindahkan, robot lain). Algoritma *A\** atau *Dijkstra* klasik yang bersifat *deterministic* dan *reaktif* tidak mampu menangani perubahan topografi secara *real-time*. Kedua, pada **manufaktur semi-konduktor**, wafer perlu diangkut di antara cleanroom dengan presisi sub-milimeter di mana pemodelan gangguan aerodinamis menjadi non-trivial. Ketiga, pada **pertanian presisi** dan **pertambangan terbuka**, lingkungan *unstructured* mengharuskan robot belajar dari pengalaman (Kala, 2024).

Secara ekonomi, pasar AMR global diproyeksikan mencapai USD 8,70 miliar pada 2030 dengan CAGR >15%, dan *motion planning* adalah salah satu *value driver* paling menentukan adopsi. Dari perspektif Teknis Industri, integrasi RL dengan *digital twin* memungkinkan simulasi ribuan skenario sebelum deployment, mengurangi *time-to-market* dan *Mean Time To Failure* (MTTF) sistem. Borah (2024) dalam disertasinya (DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)) melengkapi relevansi ini dengan menunjukkan bahwa dalam **Smart Autonomous Multi-agent Systems (SAMAS)**, *fault detection, isolation, and reconstruction* (FDIR) harus bekerja seiring dengan perencanaan gerak; ketika sebuah aktuator robot gagal, agen harus *re-plan* lintasannya secara otonom untuk mempertahankan throughput lini. Kedua literatur ini secara bersama memperkuat tesis bahwa RL bukan sekadar algoritma robotik, melainkan pilar pengambilan keputusan dalam **sistem manufaktur siber-fisik (CPS) Industri 4.0** yang resilien.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti RL untuk motion planning dibangun di atas **Proses Keputusan Markov (Markov Decision Process, MDP)**, yang didefinisikan oleh tuple $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana:

- $\mathcal{S}$: himpunan state (status robot + persepsi lingkungan)
- $\mathcal{A}$: himpunan aksi (misalnya $\{maju, mundur, belok\,kiri, belok\,kanan\}$)
- $P(s'|s,a)$: probabilitas transisi ke state $s'$ setelah mengambil aksi $a$ di state $s$
- $R(s,a)$: fungsi *reward* (imbalan)
- $\gamma \in [0,1)$: faktor diskonto untuk imbalan masa depan

Tujuan agen adalah menemukan kebijakan $\pi(a|s)$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^{k} R_{t+k+1}$$

Nilai state-action menurut **Bellman Optimality Equation** (Kala, 2024):

$$Q^{*}(s,a) = \mathbb{E}\!\left[ R_{t+1} + \gamma \max_{a'} Q^{*}(S_{t+1}, a') \,\big|\, S_t = s, A_t = a \right]$$

### 2.1 Algoritma Q-Learning

Update rule tabular Q-Learning yang dipakai Kala (2024) untuk *grid-world* dan navigasi diskrit:

$$Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha \left[ R_{t+1} + \gamma \max_{a} Q(S_{t+1}, a) - Q(S_t, A_t) \right]$$

di mana $\alpha \in (0,1]$ adalah *learning rate*. Untuk masalah dengan state kontinu (misalnya koordinat $(x,y)$ dan orientasi $\theta$), Kala menggunakan **Deep Q-Network (DQN)** dengan *parameter* $\theta$ dan *replay buffer* $\mathcal{D}$:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s')\sim \mathcal{D}} \!\left[ \left( r + \gamma \max_{a'} Q(s', a';\theta^{-}) - Q(s,a;\theta) \right)^{2} \right]$$

dengan $\theta^{-}$ adalah parameter dari *target network* yang diperbarui periodik untuk menstabilkan training.

### 2.2 Formulasi Reward untuk Motion Planning

Kala (2024) merancang reward multi-komponen:

$$R(s,a) = r_{goal} + r_{collision} + r_{progress} + r_{smoothness}$$

Sebagai contoh kuantitatif:

$$r_{goal} = \begin{cases} +100 & \text{jika } s \in \mathcal{S}_{goal} \\ -50 & \text{jika tabrakan} \\ -\Delta d & \text{jika mendekat target} \\ +\eta \cdot |\Delta \theta| & \text{penalty perubahan arah} \end{cases}$$

di mana $\Delta d = d_{t-1} - d_t$ adalah selisih jarak Euclidean ke target, dan $\eta$ adalah koefisien kehalusan lintasan.

### 2.3 Policy Gradient (REINFORCE)

Untuk aksi kontinu (kecepatan linier $v$ dan angular $\omega$), Kala menggunakan **Actor-Critic** dengan gradien:

$$\nabla_{\theta} J(\theta) = \mathbb{E}_{\pi_{\theta}} \!\left[ \nabla_{\theta} \log \pi_{\theta}(a|s) \cdot A^{\pi_{\theta}}(s,a) \right]$$

di mana *advantage function* $A^{\pi}(s,a) = Q^{\pi}(s,a) - V^{\pi}(s)$. Pendekatan ini menjamin konvergensi lokal menuju kebijakan optimal di bawah hipotesis *policy gradient theorem* (Sutton & Barto, diacu dalam Kala, 2024).

### 2.4 Multi-Agent Extension (Borah, 2024)

Borah (2024) memperluas kerangka ini ke *multi-agent setting* dengan FDIR. Setiap agen $i \in \{1,\ldots,N\}$ mempertahankan *local MDP* $\mathcal{M}_i$ dan berbagi state via *consensus filter*:

$$\hat{x}_{i}(k) = \sum_{j \in \mathcal{N}_i} w_{ij} \hat{x}_{j}(k-1)$$

dengan bobot $w_{ij} \geq 0$ dan $\sum_j w_{ij} = 1$. *Fault reconstruction* dicapai dengan *Extended Kalman Filter* (EKF) yang state-nya diperbarui oleh kebijakan RL saat anomali terdeteksi (Borah, 2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan industri RL motion planning mengikuti SOP berlapis yang diformalisasi Kala (2024):

**Fase 1 — Pemodelan Lingkungan & Digital Twin.** Buat *digital twin* fasilitas (pabrik/gudang) menggunakan ROS 2 + Gazebo atau NVIDIA Isaac Sim. State ruang $\mathcal{S}$ mencakup posisi robot $(x,y,\theta)$, data LiDAR 360° (biasanya 720 ray), dan status obstacle dinamis.

**Fase 2 — Desain MDP.** Definisikan aksi diskret $\{0,1,2,3\}$ untuk AGV atau aksi kontinu $(v,\omega)$ untuk AMR. Bangun fungsi reward dengan bobot yang dikalibrasi terhadap KPI operasional (misalnya *throughput*, *cycle time*).

**Fase 3 — Pelatihan & Validasi.** Gunakan *Parallel Curriculum Learning*: mulai dari skenario mudah (lintasan lurus tanpa halangan), lalu tingkatkan kesulitan (lorong sempit, trafik padat). Validasi silang dengan *k-fold* pada data historis.

**Fase 4 — Sim2Real Transfer.** Terapkan *domain randomization* (variasi tekstur lantai, pencahayaan, slip roda) untuk mengurangi *reality gap*. Standar ISO 3691-4:2020 untuk AMR mensyaratkan uji keselamatan sebelum deployment.

**Fase 5 — Monitoring & Continuous Learning.** Pasang *monitoring loop* yang mengirim *telemetry* ke MLOps pipeline. Saat *reward* aktual di lapangan menurun, picu *re-training* dengan data baru (*lifelong learning*). Borah (2024) menambahkan modul FDIR: ketika anomali sensor terdeteksi, agen RL *re-plans* sambil sistem nonlinear filter merekonstruksi state估计器.

```
┌────────────────┐    ┌──────────────┐    ┌──────────────┐
│ Digital Twin   │───▶│  RL Training │───▶│  Validation  │
│ (Gazebo/Isaac) │    │ (PPO/DQN)    │    │  (k=5 fold)  │
└────────────────┘    └──────────────┘    └──────┬───────┘
                                                 │
┌─────────────┐    ┌──────────────┐    ┌─────────▼────────┐
│ Live Fleet  │◀───│ Sim2Real +   │◀───│ Safety Cert.     │
│ Monitoring  │    │ Domain Rand. │    │ (ISO 3691-4)     │
└─────────────┘    └──────────────┘    └──────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah gudang *e-commerce* 50×30 meter memiliki 6 AGV yang harus mengambil barang dari *picking station* (S1) ke *packing station* (G). Kami melatih satu AGV dengan tabular Q-Learning pada grid 10×6 (skala 5 m/sel). Parameter:

- $\alpha = 0.1$, $\gamma = 0.9$, $\epsilon$-greedy dengan $\epsilon_0=0.9$ decay $0.995$ per episode
- $R_{goal} = +100$, $R_{collision} = -50$, $R_{step} = -1$

Inisialisasi: $Q(s,a) = 0$. Jalankan episode 1, trajectory: $S_t=(0,0) \to (0,1) \to (0,2)$ lalu menabrak rintangan di $(0,3)$.

**Episode 1, langkah 1:** $s=(0,0)$, $a=\text{up}$, $s'=(0,1)$, $r=-1$

$$Q(0,0,\text{up}) = 0 + 0.1\big[ -1 + 0.9 \cdot \max_{a'}Q(0,1,a') - 0 \big] = -0.1$$

**Episode 1, langkah 2:** $s=(0,1)$, $a=\text{up}$, $s'=(0,2)$, $r=-1$, semua $Q(0,2,\cdot)=0$:

$$Q(0,1,\text{up}) = 0 + 0.1[-1 + 0.9 \cdot 0 - 0] = -0.1$$

**Episode 1, langkah 3:** tabrakan, $r=-50$, $s'=$*absorbing state*. Update mundur dari $s'=(0,2)$:

$$Q(0,2,\text{up}) = 0 + 0.1[-50 + 0.9\cdot 0 - 0] = -5.0$$

**Episode 1, langkah 4:** propagasi balik ke $(0,1)$:

$$Q(0,1,\text{up}) \leftarrow -0.1 + 0.1[-1 + 0.9\cdot\max\{0,-5,0,0\} - (-0.1)] = -0.585$$

**Episode 1, langkah 5:** ke $(0,0)$:

$$Q(0,0,\text{up}) \leftarrow -0.1 + 0.1[-1 + 0.9\cdot\max\{-0.585,0,0,0\} - (-0.1)] = -
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
