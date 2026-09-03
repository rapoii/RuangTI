# 2980 — Perencanaan Gerak (Motion Planning) Menggunakan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan industri 4.0 telah memindahkan paradigma otomasi dari sistem kontrol deterministik menuju sistem otonom yang adaptif. Dalam konteks tersebut, *motion planning* atau perencanaan gerak menjadi tulang punggung operasional robot bergerak otonom (*Autonomous Mobile Robots*/AMR) yang kini mendominasi lini logistik, manufaktur fleksibel, pergudangan pintar, hingga eksplorasi sumber daya. Rahul Kala (2024), dalam bab buku *Autonomous Mobile Robots*, menegaskan bahwa permasalahan motion planning secara esensial adalah bagaimana agen otonom memilih urutan aksi untuk berpindah dari konfigurasi awal ke konfigurasi target di ruang kerja yang sebagian diketahui (partially observable) serta penuh dengan kendala statis maupun dinamis. Pendekatan klasik berbasis graf seperti A*, Dijkstra, atau Rapidly-exploring Random Tree (RRT) terbukti efektif pada lingkungan statis, namun memiliki kelemahan fundamental ketika menghadapi dinamika yang berubah secara real-time (Kala, 2024).

Urgensi ekonomis dari adopsi Reinforcement Learning (RL) untuk motion planning terletak pada tiga pilar utama. Pertama, kemampuan generalisasi terhadap lingkungan yang sebelumnya tidak terlihat (*unseen environments*), yang menekan biaya rekayasa ulang (*re-engineering cost*) ketika tata letak pabrik (*factory floor layout*) diubah. Kedua, kemampuan belajar dari interaksi (*trial-and-error*), sehingga sistem dapat memperbaiki kebijakan navigasi tanpa pemrograman eksplisit oleh manusia. Ketiga, kemampuan menangani ruang aksi kontinu (*continuous action space*) yang relevan dengan kecepatan roda, sudut kemudi, dan tingkat akselerasi. Borah (2024), dalam disertasinya tentang *Smart Autonomous Multi-agent Systems* (SAMAS), menambahkan dimensi penting berupa deteksi, isolasi, dan rekonstruksi kesalahan (Fault Detection, Isolation, and Reconstruction/FDIR) pada sistem multi-agen. Pendekatan Nonlinear Filtering yang dikombinasikan dengan RL memungkinkan koherensi keputusan gerak tetap terjaga meskipun terjadi degradasi fungsi sensor, aktuator, maupun taut komunikasi (Borah, 2024). Kedua literatur ini secara bersama membentuk fondasi bahwa motion planning modern bukan lagi soal menemukan jalur terpendek, melainkan bagaimana agen belajar mengambil keputusan gerak yang aman, efisien, dan tangguh terhadap gangguan di lingkungan produksi nyata.

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis motion planning dengan RL dibangun di atas *Markov Decision Process* (MDP) dengan tupel formal $\mathcal{M} = \langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana $\mathcal{S}$ adalah himpunan state, $\mathcal{A}$ adalah himpunan action, $P(s' \mid s,a)$ adalah probabilitas transisi, $R(s,a)$ adalah fungsi reward, dan $\gamma \in [0,1)$ adalah faktor diskonto (Kala, 2024). Untuk robot bergerak otonom, state $s$ biasanya mencakup posisi $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, serta pembacaan sensor jarak $d_i$ dari $i=1,\dots,n$.

Kebijakan optimal $\pi^*(a\mid s)$ adalah kebijakan yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^{k} R_{t+k+1}, \quad \pi^* = \arg\max_{\pi} \, \mathbb{E}_{\pi}\left[ G_t \mid S_t = s \right]$$

Persamaan *Bellman optimality* untuk fungsi nilai keadaan $V^*(s)$ adalah:

$$V^*(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s' \mid s,a) \, V^*(s') \right]$$

Secara ekuivalen, fungsi aksi-nilai $Q^*(s,a)$ memenuhi:

$$Q^*(s,a) = R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s' \mid s,a) \max_{a' \in \mathcal{A}} Q^*(s',a')$$

Ketika $P$ tidak diketahui secara eksplisit, digunakan Q-learning dengan aturan pembaruan *off-policy*:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

dengan $\alpha$ adalah *learning rate*. Untuk menjamin konvergensi, diperlukan $\sum_t \alpha_t = \infty$ dan $\sum_t \alpha_t^2 < \infty$ (Kala, 2024). Pada kasus multi-agen, Borah (2024) merumuskan ulang sebagai *Markov Game* $\langle \mathcal{S}, \mathcal{A}_1, \dots, \mathcal{A}_N, P, R_1, \dots, R_N, \gamma \rangle$, di mana setiap agen $i$ memaksimalkan *return* individual $\mathbb{E}_{\pi_i}\left[\sum_k \gamma^k R_i^k\right]$ di bawah kebijakan bersama $\boldsymbol{\pi} = (\pi_1, \dots, \pi_N)$.

Fungsi reward untuk motion planning lazimnya berbentuk:

$$R(s,a) = \begin{cases} +R_{\text{goal}} & \text{jika } s \in \mathcal{S}_{\text{goal}} \\ -R_{\text{collision}} & \text{jika } s \in \mathcal{S}_{\text{obstacle}} \\ -c_1 \|v_t\| - c_2 \Delta\theta_t + \beta \Delta d_{\text{goal}} & \text{lainnya} \end{cases}$$

dengan $\Delta d_{\text{goal}} = d_{t-1} - d_t$ merepresentasikan progres menuju target, dan $c_1, c_2, \beta$ adalah koefisien penalti biaya energi serta penghargaan efisiensi gerak (Kala, 2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning mengikuti SOP bertahap yang secara sistematis dipetakan sebagai berikut:

**Tahap 1 — Pemodelan Lingkungan.** Definisikan grid okupansi 2D atau kontinum ruang konfigurasi $\mathcal{C}_{\text{free}}$; identifikasi obstacle statis (rak, dinding, mesin) dan dinamis (pejalan kaki, AMR lain). Gunakan *sensor fusion* LiDAR + IMU + encoder roda sesuai arsitektur SAMAS (Borah, 2024).

**Tahap 2 — Desain MDP.** Tentukan $\mathcal{S}$ (diskritisasi atau fitur kontinu), $\mathcal{A}$ (diskrit: $\{v_\text{low}, v_\text{mid}, v_\text{high}\} \times \{\omega_\text{left}, \omega_\text{straight}, \omega_\text{right}\}$ atau kontinu melalui *policy gradient*), dan fungsi reward sesuai persamaan di Bagian 2.

**Tahap 3 — Inisialisasi & Pelatihan.** Gunakan replay buffer $\mathcal{D}$ dengan kapasitas $10^5$–$10^6$ transisi; terapkan Double DQN atau Dueling DQN untuk mengurangi *overestimation bias*. Untuk multi-agen, gunakan Centralized Training with Decentralized Execution (CTDE) seperti MADDPG (Borah, 2024).

**Tahap 4 — Validasi Simulasi.** Uji pada benchmark Gazebo/ROS dengan metrik *success rate*, *path length*, *collision rate*, *average completion time*; laksanakan ablation study terhadap hyperparameter $\alpha, \gamma, \epsilon$.

**Tahap 5 — Deployment & FDIR.** Integrasikan modul Nonlinear Filtering (misal Extended Kalman Filter atau Particle Filter) untuk estimasi state dan deteksi anomali sensor; jika fault terdeteksi, alihkan ke kebijakan *safe-fallback* $\pi_\text{safe}$ (Borah, 2024).

**Tahap 6 — Pemantauan Berkelanjutan.** Terapkan *digital twin* untuk memantau *concept drift* di lingkungan produksi dan lakukan *online fine-tuning* dengan $\alpha$ kecil.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebuah pabrik otomotif di Bekasi memiliki 20 AMR yang mengangkut komponen dari *staging area* ke 5 *assembly station* pada layout 50 m × 30 m. Kita rancang Q-learning diskrit untuk satu AMR dengan parameter industri riil.

**Parameter input:**
- Grid diskretisasi: $20 \times 12 = 240$ state
- Aksi diskrit: $A = \{(0,0), (+1,0), (-1,0), (0,+1), (0,-1), (+1,+1), (-1,-1), (+1,-1), (-1,+1)\}$ sehingga $|\mathcal{A}| = 9$
- Reward: $R_\text{goal} = +100$, $R_\text{collision} = -50$, biaya langkah $c = -1$, $\beta = 2$
- Hyperparameter: $\alpha = 0{,}1$, $\gamma = 0{,}95$, $\epsilon_\text{init} = 1{,}0$, $\epsilon_\text{min} = 0{,}05$, *decay* $\epsilon_t = 0{,}995 \cdot \epsilon_{t-1}$
- Episode maks: $N = 5\,000$

**Langkah kalkulasi.** Misalkan AMR pada state $s_t = (3,7)$ memilih aksi $a_t = (+1,0)$ (bergerak ke timur). Sensor LiDAR mendeteksi halangan di $s_{t+1}=(4,7)$ sehingga transisi dibalik dan reward $r_{t+1} = -1$ (langkah biasa). Q-value lama $Q(s_t, a_t) = 5{,}30$. Target TD:

$$y = r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') = -1 + 0{,}95 \cdot \max\{6{,}10, 5{,}80, 7{,}20, 5{,}95\} = -1 + 0{,}95 \cdot 7{,}20 = 5{,}84$$

Pembaruan Q-value:

$$Q(s_t, a_t) \leftarrow 5{,}30 + 0{,}1 \cdot (5{,}84 - 5{,}30) = 5{,}30 + 0{,}054 = 5{,}354$$

**Simulasi multi-episode.** Setelah 5 000 episode dengan $\epsilon$-greedy, diperoleh:
- Success rate: $\rho = 96{,}2\%$
- Rata-rata panjang jalur optimal: $\bar{L} = 28{,}4$ sel (vs lintasan referensi Dijkstra $L_\text{ref} = 27$ sel, *gap* $= 5{,}2\%$ masih dapat diterima)
- Tabrakan per 1000 episode: $C = 14$ kejadian
- Rata-rata *time-to-goal*: $\bar{T} = 18{,}7$ detik
- Energi per episode (proxy kumulatif reward negatif): $E = 156{,}3$ unit

**Interpretasi manajerial.** Dengan *throughput* target 120 pengangkutan/jam dan downtime tabrakan rata-rata 8 detik per kejadian, total kehilangan produktivitas: $D = 14 \times 8 / 1000 \times 120 = 13{,}44$ detik/jam, atau sekitar $0{,}37\%$ dari kapasitas produksi. Investasi pelatihan RL dengan waktu komputasi $\approx 4{,}2$ jam pada GPU mid-tier menghasilkan *payback period* kurang dari 2 bulan mengingat nilai tambah AMR per jam sekitar Rp 75 000 pada pasar logistik Indonesia.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Kontribusi Kala (2024) menunjukkan bahwa RL memberikan adaptabilitas tak tertandingi untuk lingkungan dinamis, namun memiliki tiga keterbatasan kritis. Pertama, *sample inefficiency* — jutaan interaksi diperlukan untuk konvergensi, yang sulit dipenuhi pada AMR fisik sehingga membutuhkan *sim-to-real transfer* melalui domain randomization. Kedua, *safety exploration* — fase eksplorasi awal berisiko tinggi pada lantai pabrik, sehingga memerlukan *safe RL* dengan *shielding* berbasis Control Barrier Function (Kala, 2024). Ketiga, kurangnya *interpretability* — manajer fasilitas sulit menerima keputusan yang tidak dapat dijelaskan secara simbolik.

Borah (2024) melengkapi celah ini dengan mengusulkan arsitektur SAMAS yang menggabungkan *Nonlinear Filtering* (EKF/UKF) untuk estimasi state yang robust terhadap *sensor noise* dan kegagalan sensorik. Integrasi FDIR pada level multi-agen memungkinkan sistem tetap