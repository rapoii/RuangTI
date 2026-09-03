# 1732 — Perencanaan Gerak (Motion Planning) Berbasis Pembelajaran Penguatan untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era Revolusi Industri 4.0 dan Society 5.0 telah mendorong transformasi fundamental pada lantai produksi, pergudangan, dan rantai pasok global. Robot Bergerak Otonom (Autonomous Mobile Robots — AMR) menjadi tulang punggung sistem intralogistik modern, menggantikan conveyor tradisional dengan armada otonom yang mampu menavigasi lingkungan dinamis tanpa panduan infrastruktur tetap. Menurut Kala (2024) dalam buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9), kemampuan inti AMR untuk beroperasi secara mandiri di lingkungan tidak terstruktur sangat bergantung pada subsistem *motion planning* yang andal. Perencanaan gerak bukan sekadar persoalan geometris menemukan jalur terpendek, melainkan masalah keputusan sequential di bawah ketidakpastian sensorik, dinamika lingkungan, dan kendala operasional (Kala, 2024).

Secara ekonomis, pasar AMR global diproyeksikan melampaui USD 14 miliar pada 2030 dengan CAGR >15%, didorong oleh e-commerce, *just-in-time manufacturing*, dan kelangkaan tenaga kerja gudang. Dari perspektif Teknik Industri, urgensi penerapan *reinforcement learning* (RL) untuk motion planning muncul karena tiga keterbatasan metode konvensional: (1) algoritma klasik seperti A* dan RRT tidak mampu beradaptasi terhadap perubahan peta secara real-time; (2) pengontrol PID atau MPC membutuhkan tuning ulang setiap kali konfigurasi muatan atau lintasan berubah; (3) kegagalan navigasi menyebabkan *throughput loss* signifikan — sebuah insinyur analis memperkirakan downtime satu AMR seharga USD 50.000 dapat merugikan operator USD 1.200 per jam dalam kehilangan produktivitas.

Kontribusi Borah (2024) dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) melengkapi wacana ini dengan mengusulkan kerangka *Smart Autonomous Multi-Agent Systems* (SAMAS) yang mengintegrasikan *nonlinear filtering* (misalnya Extended Kalman Filter) dengan RL untuk deteksi, isolasi, dan rekonstruksi (FDIR) pada sistem multi-agen. Sinergi antara motion planning individual (Kala, 2024) dan koordinasi fleets dengan toleransi fault (Borah, 2024) merepresentasikan cetak biru generasi baru sistem manufaktur otonom yang *resilient*, *scalable*, dan *data-driven*. Dokumen Knowledge Base Modul 1732 ini akan membedah formulasi matematis, metodologi implementasi, hingga studi kasus kuantitatif yang relevan bagi praktisi Teknik Industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) merumuskan permasalahan *motion planning* sebagai MDP yang didefinisikan oleh tuple $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$, di mana $\mathcal{S}$ adalah himpunan state, $\mathcal{A}$ himpunan aksi, $P(s'|s,a)$ probabilitas transisi, $R(s,a)$ fungsi reward, dan $\gamma \in [0,1)$ faktor diskonto. Untuk AMR dengan konfigurasi ruang planar diskret:

$$\mathcal{S} = \{(x,y,\theta,\dot{x},\dot{y},\dot{\theta}) : x,y \in \mathbb{Z}, \theta \in \{0°,45°,90°,\dots,315°\}\}$$

Aksi robot pada setiap sel diskret $a \in \mathcal{A}$ mencakup $\{ \text{North, South, East, West, NE, NW, SE, SW} \}$, dengan masing-masing memodifikasi posisi $(x,y)$ sebesar $\Delta = 1$ unit grid dan orientasi $\theta$ sebesar $\pm 45°$. Fungsi transisi bersifat deterministik pada lingkungan ideal, namun pada lingkungan nyata dimodelkan sebagai distribusi Gaussian:

$$P(s'|s,a) = \mathcal{N}(s' - f(s,a), \Sigma), \quad \Sigma = \text{diag}(\sigma_x^2, \sigma_y^2, \sigma_\theta^2)$$

di mana $f(s,a)$ adalah model kinematik unicycle, dan $\Sigma$ merepresentasikan derau sensor odometri serta slip roda.

### 2.2 Persamaan Bellman dan Optimal Policy

Tujuan utama agen RL adalah menemukan policy $\pi^*: \mathcal{S} \to \mathcal{A}$ yang memaksimalkan *expected discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Persamaan optimalitas Bellman untuk action-value function $Q^*(s,a)$ adalah:

$$Q^*(s,a) = \mathbb{E}\left[ R_{t+1} + \gamma \max_{a'} Q^*(S_{t+1}, a') \mid S_t=s, A_t=a \right]$$

Kala (2024) menekankan bahwa pada AMR industri, fungsi reward haruslah *sparse but informative* dengan tiga komponen utama:

$$R(s,a) = \underbrace{r_{\text{goal}}}_{\text{+100 jika goal}} + \underbrace{r_{\text{collision}}}_{\text{-50 jika obstacle}} + \underbrace{r_{\text{step}}}_{\text{-1 per langkah}} + \underbrace{r_{\text{energy}}}_{\text{-0.1 \cdot |a|^2}}$$

Komponen $r_{\text{energy}}$ krusial dalam konteks Teknik Industri karena langsung berkaitan dengan konsumsi baterai dan total cost of ownership.

### 2.3 Algoritma Deep Q-Network (DQN)

Untuk ruang state kontinu berdimensi tinggi, Kala (2024) merekomendasikan DQN dengan *experience replay* dan *target network*. Update parameter jaringan $\theta$ meminimalkan loss:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s', a'; \theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter target network yang di-*update* setiap $C$ langkah training, dan $\mathcal{D}$ adalah *replay buffer* berkapasitas $N = 10^6$ transisi.

### 2.4 Kebijakan Koordinasi Multi-Agen (Borah, 2024)

Borah (2024) dalam disertasinya pada DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) mengintegrasikan *Extended Kalman Filter* (EKF) untuk estimasi state setiap agen dengan *consensus-based RL* untuk koordinasi formasi. Mekanisme update state $i$-th agent:

$$\hat{x}_k^{i} = \hat{x}_{k|k-1}^{i} + K_k^{i}\left(z_k^{i} - h(\hat{x}_{k|k-1}^{i})\right)$$

dengan gain Kalman $K_k^i = P_{k|k-1}^i H^T (H P_{k|k-1}^i H^T + R)^{-1}$. Fault pada sensor agen ke-$i$ dideteksi ketika residual $r_k^i = z_k^i - h(\hat{x}_{k|k-1}^i)$ melebihi ambang $\chi^2$ dengan tingkat signifikansi $\alpha = 0.01$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning dalam skala industri mengikuti *Standard Operating Procedure* (SOP) tujuh tahap yang bersandar pada best practice Kala (2024) dan protokol FDIR Borah (2024):

**Tahap 1 — Pemetaan Lingkungan & Digital Twin.** Konstruksi occupancy grid map $M \in \{0,1\}^{H \times W}$ dari hasil SLAM (Simultaneous Localization and Mapping) menggunakan LiDAR 2D. Resolusi standar gudang modern: $0,05$ m/piksel untuk area picking, $0,1$ m/piksel untuk lorong transportasi.

**Tahap 2 — Definisi MDP.** Penetuan state space, action set, dan reward shaping berdasarkan analisis lalu lintas dan layout gudang. *Reward engineering* harus melalui simulasi minimal $10^5$ episode sebelum deployment.

**Tahap 3 — Arsitektur Neural Network.** Untuk DQN, Kala (2024) mengusulkan arsitektur CNN 3-layer dengan input $84 \times 84 \times 4$ (4 frame stacked), filter $[32, 64, 64]$, kernel $8\times8$, $4\times4$, $3\times3$ dengan stride $4, 2, 1$, diikuti fully-connected $[512, |\mathcal{A}|]$.

**Tahap 4 — Training Paralel di Simulator.** Domain randomization pada parameter fisik (massa muatan $0-50$ kg, koefisien gesek $\mu \in [0,3, 0,7]$, slip probabilitas $p_{\text{slip}} \in [0, 0,1]$) untuk memastikan *sim-to-real transfer* yang robust. Total episode training: $5 \times 10^5$ hingga konvergensi reward rata-rata $> 85\%$ dari nilai maksimum teoritis.

**Tahap 5 — Validasi Hardware-in-the-Loop (HIL).** Pengujian integrasi dengan sensor riil (LiDAR, IMU, wheel encoder) pada test track sebelum deployment. Validasi mengikuti standar ISO 3691-4 untuk driverless industrial trucks.

**Tahap 6 — Deployment & Monitoring.** Penempatan agen RL di fleet management system (FMS) dengan komunikasi MQTT/HTTP. Parameter $\epsilon$-greedy diturunkan dari $0,1$ menjadi $0,01$ setelah minggu pertama operasi untuk transisi dari *exploration* ke *exploitation*.

**Tahap 7 — Fault Tolerance (Borah, 2024).** Modul FDIR aktif memonitor residual Kalman setiap agen. Ketika fault terdeteksi, agen yang compromised dialihkan ke *safe policy* dan robot tetangga mengambil alih tugas dengan protokol *task reallocation*:

$$\pi_{\text{safe}}(s) = \arg\min_{a} \left\| s - s_{\text{nearest\_charging}} \right\|^2$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah pusat distribusi e-commerce di Jakarta mengoperasikan 30 AMR untuk *order picking* dalam gudang $200 \times 150$ meter. Rata-rata order: 5.000 picks/hari. Peta occupancy grid direpresentasikan pada resolusi $0,1$ m/piksel, menghasilkan matriks $M \in \{0,1\}^{2000 \times 1500}$. Tugas robot: navigasi dari *charging station* di koordinat $(10,10)$ ke *picking station* di $(180,90)$ dengan 12 rak dinamis sebagai obstacle bergerak.

### 4.2 Perhitungan Expected Return dan Discount Factor

Misalkan suatu episode memiliki rata-rata 250 langkah untuk mencapai goal. Dengan $\gamma = 0,99$:

$$G_t^{\text{max}} = \sum_{k=0}^{249} (0,99)^k \approx \frac{1-(0,99)^{250}}{1-0,99} \approx 91,8$$

Reward per episode yang sukses: $r_{\text{goal}} - 250 \cdot r_{\text{step}} = 100 - 250 = -150$ (jika tanpa collision). Episode optimal (jalur terpendek 180 langkah): $100 - 180 = -80$.

### 4.3 Perhitungan Throughput Fleet

Waktu tempuh rata-rata AMR setelah training: $T_{\text{nav}} = 180 \times 0,1 \text{ m}/1,2 \text{ m/s} = 15$ detik. Dengan *loading time* $T_{\text{load}} = 25$ detik dan *unloading* $T_{\text{unload}} = 20$ detik:

$$T_{\text{cycle}} = T_{\text{nav}} + T_{\text{load}} + T_{\text{unload}} = 60 \text{ detik/cycle}$$

Throughput per AMR:

$$\lambda_{\text{AMR}} = \frac{3600 \text{ s/jam}}{60 \text{ s/cycle}} = 60 \text{ picks/jam}$$

Total fleet throughput (30 unit, utilization $u = 0,85$):

$$\Lambda_{\text{total}} = 30 \times 60 \times 0,85 = 1530 \text{ picks/jam}$$

Per hari (16 jam operasi): $24.480$ picks, melebihi target 5.000 picks/hari dengan margin signifikan untuk scaling.

### 4.4 Perhitungan Konsumsi Energi dan Biaya

Konsumsi energi per langkah (akselerasi +巡航): $E_{\text{step}} = 0,5 \cdot m \cdot v^2 \cdot \eta^{-1}$ dengan massa $m = 80$ kg (robot + muatan), $v = 1,2$ m/s, efisiensi motor $\eta = 0,85$:

$$E_{\text{step}} = 0,5 \times 80 \times 1,44 / 0,85 \approx 67,8 \text{ J/langkah}$$

Per cycle (180 langkah): $E_{\text{cycle}} = 180 \times 67,8 = 12.204$ J ≈ 0,0122 kWh. Biaya listrik IDR 1.500/kWh: