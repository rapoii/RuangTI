# 1972 — Perencanaan Gerak (Motion Planning) Robot Otonom Menggunakan Reinforcement Learning untuk Sistem Industri Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Motion planning using reinforcement learning untuk robot otonom bergerak (AMR) dalam lingkungan manufaktur dan logistik
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion Planning Using Reinforcement Learning*. Dalam: *Autonomous Mobile Robots*. Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. Peer-Reviewed Dissertation Repository. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industry 4.0 dan inisiatif *Smart Manufacturing* telah mengubah secara fundamental arsitektur sistem material handling, intralogistik, dan produksi di lantai pabrik. Robot Bergerak Otonom (*Autonomous Mobile Robots*/AMR) menjadi tulang punggung fleksibilitas operasional, menggantikan *Automated Guided Vehicle* (AGV) konvensional yang bergantung pada jalur magnetik atau pita reflektif. Kala (2024) dalam bab buku *Autonomous Mobile Robots* menekankan bahwa komponen paling kritis dari AMR adalah modul **perencanaan gerak (motion planning)**, yaitu kemampuan menentukan urutan aksi optimal untuk memindahkan robot dari konfigurasi awal ke konfigurasi tujuan di dalam ruang kerja yang statis maupun dinamis (Kala, 2024; DOI: 10.1016/b978-0-443-18908-1.00016-9).

Permasalahan industri yang melatarbelakangi pentingnya topik ini sangat konkret. Pertama, di pusat distribusi *e-commerce* berskala besar (misalnya gudang Amazon, Alibaba, atau JD.com), ratusan AMR beroperasi simultan untuk memenuhi pesanan dengan target *order fulfillment* di bawah 60 menit. Kedua, lingkungan pabrik modern bersifat *semi-terstruktur*: tata letak berubah secara periodik akibat *line rebalancing*, workstation mobile, dan manusia yang bekerja berdampingan dengan robot (human-robot collaboration). Algoritma motion planning klasik seperti A*, Dijkstra, atau Rapidly-exploring Random Tree (RRT) gagal memberikan solusi adaptif yang efisien ketika distribusi rintangan berubah-ubah secara stokastik (Kala, 2024).

Kebutuhan akan algoritma yang mampu **belajar dari pengalaman operasional** menjadi urgensi strategis. Di sinilah *Reinforcement Learning* (RL) menawarkan paradigma baru: robot tidak lagi diprogram secara eksplisit untuk setiap skenario, melainkan mengembangkan kebijakan (*policy*) optimal melalui interaksi berulang dengan lingkungan. Borah (2024) melengkapi perspektif ini dengan menunjukkan bahwa pada sistem multi-agen otonom (SAMAS), kemampuan RL juga harus dipadukan dengan *Fault Detection, Isolation, and Reconstruction* (FDIR) untuk menjamin kontinuitas operasional ketika terjadi degradasi sensor atau aktuator (Borah, 2024; DOI: 10.32920/25412566.v1).

Secara ekonomis, laporan internal industri yang dirujuk oleh Kala (2024) menunjukkan bahwa downtime AMR akibat kegagalan navigasi dapat menurunkan *Overall Equipment Effectiveness* (OEE) hingga 12–18% per bulan, dengan kerugian finansial rata-rata USD 8.000–15.000 per jam untuk fasilitas kelas dunia. Oleh karena itu, investasi pada algoritma motion planning berbasis RL bukan sekadar peningkatan teknologi, melainkan kebutuhan strategis untuk mempertahankan daya saing. Dalam konteks Indonesia, adopsi AMR masih dalam tahap awal (TKMMR = 5–8% menurut estimasi Asosiasi Robotika Indonesia 2023), sehingga pemahaman metodologis tentang RL motion planning menjadi celah kompetensi yang perlu diisi oleh insinyur Teknik Industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Proses Keputusan Markov (Markov Decision Process)

Formulasi matematis inti untuk RL motion planning adalah **Markov Decision Process (MDP)** yang didefinisikan sebagai tuple 5-elemen (Kala, 2024):

$$
\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle
$$

di mana:
- $\mathcal{S}$ = himpunan state (konfigurasi robot + lingkungan), $|\mathcal{S}| = n$
- $\mathcal{A}$ = himpunan aksi (perpindahan diskret: atas, bawah, kiri, kanan, atau manuver holonomik), $|\mathcal{A}| = m$
- $P(s'|s,a)$ = probabilitas transisi dari state $s$ ke $s'$ melalui aksi $a$
- $R(s,a,s')$ = reward function (imbalan sesaat)
- $\gamma \in [0,1)$ = discount factor untuk nilai masa depan

Asumsi Markov menyatakan bahwa transisi state hanya bergantung pada state dan aksi saat ini, bukan riwayat masa lalu:

$$
P(s_{t+1} | s_t, a_t, s_{t-1}, a_{t-1}, \dots) = P(s_{t+1} | s_t, a_t)
$$

### 2.2. Fungsi Nilai dan Persamaan Bellman

Tujuan RL adalah menemukan *policy* $\pi: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan expected discounted return. **State-value function** didefinisikan sebagai:

$$
V^{\pi}(s) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^{k} R_{t+k+1} \,\Big|\, S_t = s\right]
$$

dan **action-value function** (Q-function):

$$
Q^{\pi}(s,a) = \mathbb{E}_{\pi}\left[\sum_{k=0}^{\infty} \gamma^{k} R_{t+k+1} \,\Big|\, S_t = s, A_t = a\right]
$$

Persamaan **Bellman optimal** yang menjadi target konvergensi adalah:

$$
V^{*}(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\left[R(s,a,s') + \gamma V^{*}(s')\right]
$$

$$
Q^{*}(s,a) = \sum_{s'} P(s'|s,a)\left[R(s,a,s') + \gamma \max_{a'} Q^{*}(s',a')\right]
$$

### 2.3. Algoritma Q-Learning

Untuk ruang state diskret pada grid world AMR, algoritma Q-learning tabular digunakan dengan *update rule*:

$$
Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t)\right]
$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Bukti konvergensi Q-learning mensyaratkan bahwa setiap pasangan $(s,a)$ dikunjungi tak terhingga kali dan $\alpha_t$ memenuhi $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$ (Kala, 2024).

### 2.4. Policy Gradient untuk Ruang Kontinu

Untuk AMR dengan ruang aksi kontinu (kecepatan linier $v$ dan angular $\omega$), metode *Deep Deterministic Policy Gradient* (DDPG) lebih sesuai. Objective function:

$$
J(\theta) = \mathbb{E}_{s \sim d^{\pi_\theta}}\left[Q^{\pi_\theta}(s, \pi_\theta(s))\right]
$$

Gradien kebijakan (Kala, 2024):

$$
\nabla_\theta J(\pi_\theta) = \mathbb{E}_{s \sim d^{\pi}}\left[\nabla_\theta \pi_\theta(s) \cdot \nabla_a Q^{\pi}(s,a)\big|_{a=\pi_\theta(s)}\right]
$$

### 2.5. Reward Function untuk Motion Planning

Perancangan reward function merupakan aspek krusial yang menentukan konvergensi. Bentuk tipikal untuk AMR (Kala, 2024):

$$
r(s_t, a_t, s_{t+1}) = r_{\text{goal}} \cdot \mathbb{1}_{s_{t+1} = s_{\text{goal}}} - r_{\text{collision}} \cdot \mathbb{1}_{\text{collision}} - \lambda \cdot d(s_{t+1}, s_{\text{goal}})
$$

di mana $d(s_{t+1}, s_{\text{goal}})$ adalah jarak Euclidean, $\lambda$ adalah bobot penalti jarak, dan $r_{\text{goal}}, r_{\text{collision}}$ adalah bonus serta penalti terminal.

### 2.6. Constraint Collision-Avoidance untuk Multi-Agent

Memperluas kerangka Borah (2024) untuk sistem multi-agen, constraint jarak aman antar-robot:

$$
\|x_i(t) - x_j(t)\|_2 \geq d_{\min}, \quad \forall i \neq j, \quad \forall t \geq 0
$$

di mana $x_i(t) \in \mathbb{R}^2$ adalah posisi agen ke-$i$, dan $d_{\min}$ adalah jarak minimum aman (umumnya 1.5× diameter footprint AMR).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lingkungan industri mengikuti kerangka sistematis berikut, yang merupakan sintesis prosedur Kala (2024) dan Borah (2024):

### 3.1. Fase 1 — Karakterisasi Lingkugan Kerja (State Space Design)

1. **Pemetaan fasilitas**: gunakan SLAM (*Simultaneous Localization and Mapping*) untuk menghasilkan occupancy grid dengan resolusi sel 0,5 m × 0,5 m (sesuai standar ISO 3691-4 untuk AMR).
2. **Identifikasi zona dinamis**: petakan area dengan lalu lintas manusia/pejalan kaki menggunakan sensor LIDAR multi-layer.
3. **Diskretisasi state**: setiap sel grid dikodekan sebagai one-hot vector; posisi goal direpresentasikan sebagai koordinat relatif.

### 3.2. Fase 2 — Desain Aksi dan Reward

1. Tentukan *action set* sesuai kinematika AMR (differential drive: $\{v_{\text{forward}}, v_{\text{turn\_left}}, v_{\text{turn\_right}}, v_{\text{stop}}\}$).
2. Rancang reward shaping untuk menghindari *reward sparsity*; gunakan *potential-based reward shaping*:

$$
F(s, a, s') = \gamma \Phi(s') - \Phi(s)
$$

dengan $\Phi(s) = -d(s, s_{\text{goal}})$ menjamin kebijakan optimal tidak berubah.

### 3.3. Fase 3 — Pelatihan Offline (Simulasi)

Gunakan *digital twin* fasilitas (ROS + Gazebo atau Unity ML-Agents) untuk melatih kebijakan dengan *sample efficiency* tinggi:

```
[Initialize]  → Reset Q-table / Neural Network weights
[Loop episode]:
   s_t ← environment.reset()
   while not done:
      a_t ← ε-greedy(Q(s_t))     # eksplorasi dengan ε decay
      s_{t+1}, r_{t+1} ← env.step(a_t)
      Q(s_t,a_t) ← Q-update rule
      s_t ← s_{t+1}
[Save] policy π*  → deploy ke onboard compute
```

### 3.4. Fase 4 — Transfer ke Dunia Nyata (Sim-to-Real)

Terapkan **domain randomization** selama pelatihan (Kala, 2024):
- Variasi koefisien gesekan lantai ($\mu \in [0.4, 0.8]$)
- Noise pada pembacaan sensor ($\sigma_{\text{LIDAR}} \in [0.01, 0.05]$ m)
- Variasi waktu respons aktuator (delay 50–150 ms)

### 3.5. Fase 5 — Integrasi FDIR (Borah, 2024)

Untuk operasi kontinu, integrasikan modul FDIR berbasis Kalman Filter atau Particle Filter untuk mendeteksi anomali sensor/aktuator yang dapat mengkompromikan kebijakan RL:

$$
\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H\hat{x}_{k|k-1})
$$

di mana $K_k$ adalah Kalman gain, $z_k$ adalah pengukuran, dan threshold residual $\|\hat{x}_{k|k} - \hat{x}_{k|k-1}\|_2 > \tau$ memicu mode *safe stop*.

### 3.6. Fase 6 — Continuous Improvement

Terapkan mekanisme *lifelong learning* dengan *experience replay buffer*:

$$
\mathcal{B} = \{(s_i, a_i, r_i, s'_i)\}_{i=1}^{N}, \quad N = 10^5
$$

Sampel mini-batch $(\text{batch size} = 64)$ diambil acak untuk *fine-tuning* selama jam operasional rendah.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Skenario

Sebuah pabrik perakitan elektronika di Cikarang memiliki gudang komponen 60 m × 40 m dengan layout grid 120 × 80 sel (resolusi 0,5 m). Ditem.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
