# 1668 — Perencanaan Gerak Cerdas Berbasis Reinforcement Learning untuk Sistem Multi-Agen Otonom dalam Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning untuk autonomous mobile robots (AMR) dan sistem multi-agen otonom (SAMAS)
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning*, dalam buku *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 dan transisi menuju Industri 5.0 telah mengubah secara fundamental arsitektur sistem produksi, intralogistik, dan rantai pasok global. Dalam konteks tersebut, *Autonomous Mobile Robots* (AMR) dan *Smart Autonomous Multi-Agent Systems* (SAMAS) menjadi tulang punggung operasional fasilitas manufaktur pintar, gudang otomatis (*automated storage and retrieval systems*, AS/RS), pusat distribusi e-commerce, hingga instalasi pertambangan dan agroindustri presisi. Rahul Kala (2024) dalam bab buku *Autonomous Mobile Robots* yang diterbitkan oleh Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9) menegaskan bahwa perencanaan gerak (*motion planning*) bukan lagi persoalan geometris murni, melainkan masalah keputusan stokastik yang harus diselesaikan secara *real-time* di tengah dinamika lingkungan yang tidak pasti.

Urgensi ekonominya sangat nyata. Menurut laporan internal McKinsey & Company yang dirujuk secara luas dalam literatur AMR, downtime akibat inefisiensi path planning pada armada AMR skala besar dapat menimbulkan kerugian hingga USD 250.000 per jam pada fasilitas *e-fulfillment* Tier-1. Kala (2024) menekankan bahwa pendekatan konvensional berbasis algoritma deterministik seperti A*, Rapidly-exploring Random Tree (RRT), atau potential field memiliki keterbatasan fundamental: (i) tidak mampu beradaptasi terhadap perubahan lingkungan dinamis (pejalan kaki, forklift, rak yang berpindah); (ii) membutuhkan *re-planning* penuh ketika terjadi anomali; serta (iii) tidak meng-*encode* tujuan jangka panjang seperti konsumsi energi, keausan aktuator, atau *throughput* armada secara holistik. Di sinilah *reinforcement learning* (RL) menawarkan paradigma baru berupa *sequential decision-making* di bawah ketidakpastian.

Kontribusi kedua yang diperkuat oleh Kaustav Borah (2024) dengan DOI [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1) adalah perluasan arsitektur dari AMR tunggal menjadi *multi-agent system* yang tahan-fault (*fault-tolerant*). Borah memperkenalkan metodologi *Fault Detection, Isolation, and Reconstruction* (FDIR) yang terintegrasi dengan RL, menjawab kebutuhan industri akan sistem yang tidak hanya cerdas tetapi juga resilien. Disertasinya menyoroti bahwa pada sistem rekayasa kompleks—mencakup sensor, aktuator, jaringan komunikasi, hingga pengontrol—kerusakan komponen dapat bersifat *cascading* dan menurunkan kinerja seluruh *fleet*. Maka, integrasi antara *nonlinear filtering* (misalnya Extended Kalman Filter/Particle Filter) dengan RL menjadi arsitektur kunci untuk memastikan *mean time between failures* (MTBF) tetap tinggi sambil mempertahankan *optimality* keputusan gerak.

Konteks industri yang melatarbelakangi modul ini mencakup: (a) **Pergudangan otomatis** di mana Amazon, Alibaba, dan Ocado telah mengoperasikan ribuan AMR dengan sistem multi-agen; (b) **Manufaktur fleksibel** dengan *cellular manufacturing* yang menuntut AMR berpindah antar workstation dengan latensi rendah; (c) **Logistik rumah sakit** di mana robot pengantar obat dan specimen harus beroperasi di lingkungan pejalan kaki密集; serta (d) **Pertambangan dan pelabuhan** yang memerlukan AMR *outdoor* di medan tidak terstruktur. Pada seluruh aplikasi tersebut, efektivitas perencanaan gerak menentukan langsung pada Key Performance Indicators (KPI) industri: *order fulfillment time*, *picking accuracy*, *energy per unit handled*, dan *overall equipment effectiveness* (OEE).

---

## 2. Landasan Teori & Formulasi Matematis

Fondasi matematis utama yang digunakan Kala (2024) adalah formulasi *Motion Planning* sebagai *Markov Decision Process* (MDP). Sebuah MDP didefinisikan oleh tupel $\langle \mathcal{S}, \mathcal{A}, P, R, \gamma \rangle$, di mana $\mathcal{S}$ adalah ruang keadaan (*state space*), $\mathcal{A}$ adalah ruang aksi, $P(s'|s,a)$ adalah probabilitas transisi, $R(s,a)$ adalah fungsi reward, dan $\gamma \in [0,1)$ adalah *discount factor*. Untuk AMR, $\mathcal{S}$ umumnya mencakup posisi $(x,y)$, orientasi $\theta$, kecepatan linier $v$, kecepatan sudut $\omega$, serta keadaan sensorik seperti pembacaan LiDAR atau jarak ke obstacle $d_{obs}$. Formulasi umumnya:

$$s_t = [x_t, y_t, \theta_t, v_t, \omega_t, \mathbf{l}_{t}]^{\top} \in \mathcal{S}$$

di mana $\mathbf{l}_{t} \in \mathbb{R}^{n}$ merepresentasikan vektor fitur sensorik. Ruang aksi untuk AMR *differential-drive* adalah $\mathcal{A} = \{(v, \omega) : v \in [v_{min}, v_{max}], \omega \in [-\omega_{max}, \omega_{max}]\}$.

Tujuan agen RL adalah mempelajari *policy* $\pi: \mathcal{S} \rightarrow \mathcal{A}$ yang memaksimalkan *expected cumulative discounted reward*:

$$J(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^{t} R(s_t, a_t)\right]$$

Solusi optimal memenuhi *Bellman optimality equation*:

$$V^{*}(s) = \max_{a \in \mathcal{A}} \left[ R(s,a) + \gamma \sum_{s' \in \mathcal{S}} P(s'|s,a) V^{*}(s') \right]$$

Dalam implementasi praktis Kala (2024), ketika transisi $P$ tidak diketahui secara eksplisit, digunakan *Q-learning* dengan aturan pembaruan:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha \left[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1}, a') - Q(s_t, a_t) \right]$$

di mana $\alpha \in (0,1)$ adalah *learning rate*. Untuk ruang状态 berdimensi tinggi (kontinu), Kala menggunakan *Deep Q-Network* (DQN) dengan parameter $\theta$ dan fungsi loss:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}}\left[\left( r + \gamma \max_{a'} Q(s', a'; \theta^{-}) - Q(s, a; \theta) \right)^{2}\right]$$

di mana $\theta^{-}$ adalah parameter *target network* dan $\mathcal{D}$ adalah *replay buffer*. Reward function yang dirancang Kala untuk motion planning memiliki bentuk multi-komponen:

$$R(s, a) = w_1 R_{goal}(s) + w_2 R_{collision}(s) + w_3 R_{time}(s) + w_4 R_{smooth}(a)$$

dengan $w_i$ sebagai bobot tuning. Komponen tipikalnya: $R_{goal} = +10$ saat goal tercapai, $R_{collision} = -50$ saat terjadi kontak, $R_{time} = -0{,}1$ per timestep (insentif efisiensi), dan $R_{smooth} = -0{,}05 \cdot |\Delta\omega|$ (penalty getaran).

Untuk ekstensi multi-agen menurut Borah (2024), sistem $N$ agen dimodelkan sebagai *Decentralized Partially Observable Markov Decision Process* (Dec-POMDP) $\langle \mathcal{I}, \mathcal{S}, \{\mathcal{A}_i\}, P, \{\Omega_i\}, \{O_i\}, R, \gamma \rangle$. Setiap agen $i$ menerima observasi parsial $o_i \in \Omega_i$ dan bersama-sama memaksimalkan:

$$J_{\text{SAMAS}} = \mathbb{E}\left[\sum_{t=0}^{\infty} \gamma^{t} \sum_{i=1}^{N} r_i(s_t, a_t^{(i)})\right]$$

Borah (2024) mengintegrasikan *nonlinear filtering* berupa Extended Kalman Filter (EKF) untuk estimasi keadaan dan deteksi fault. Model keadaan nonlinier:

$$\mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k) + \mathbf{w}_k, \quad \mathbf{z}_k = h(\mathbf{x}_k) + \mathbf{v}_k$$

dengan kovariansi noise proses $\mathbf{Q}_k$ dan noise pengukuran $\mathbf{R}_k$. Tahap *predict*:

$$\hat{\mathbf{x}}_{k|k-1} = f(\hat{\mathbf{x}}_{k-1|k-1}, \mathbf{u}_{k-1})$$
$$\mathbf{P}_{k|k-1} = \mathbf{F}_k \mathbf{P}_{k-1|k-1} \mathbf{F}_k^{\top} + \mathbf{Q}_k$$

dan tahap *update* dengan *Kalman gain* $\mathbf{K}_k = \mathbf{P}_{k|k-1} \mathbf{H}_k^{\top} (\mathbf{H}_k \mathbf{P}_{k|k-1} \mathbf{H}_k^{\top} + \mathbf{R}_k)^{-1}$:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k (\mathbf{z}_k - h(\hat{\mathbf{x}}_{k|k-1}))$$

Residu inovasi $\boldsymbol{\nu}_k = \mathbf{z}_k - h(\hat{\mathbf{x}}_{k|k-1})$ dengan norma $\|\boldsymbol{\nu}_k\| > \tau$ menjadi pemicu FDIR; selanjutnya RL *policy* $\pi_{\text{FDIR}}$ memilih aksi rekonstruksi seperti *sensor reconfiguration*, *actuator handover*, atau *task reallocation*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial dari arsitektur Kala-Borah mengikuti SOP berlapis yang terdiri atas tujuh tahap. **Tahap 1 — Pemodelan Fasilitas**: melakukan *digital twin* gudang/workshop dengan resolusi grid $0{,}1$ m atau *occupancy grid* berbasis LiDAR 2D; mendefinisikan zona dinamis (jalur forklift, area pejalan kaki) dan statis (rak, dinding, conveyor). **Tahap 2 — Desain MDP/Multi-agent MDP**: menetapkan state, action, reward sesuai rumus di Bagian 2; memilih apakah menggunakan *single-agent RL* atau *multi-agent RL* (MARL) berdasarkan skala armada; bila $N \geq 10$ agen, algoritma *Multi-Agent Deep Deterministic Policy Gradient* (MADDPG) lebih robust.

**Tahap 3 — Pelatihan Simulasi**: gunakan *physics-based simulator* (Gazebo, Unity ML-Agents, atau NVIDIA Isaac Sim) dengan *domain randomization* terhadap tekstur lantai, pencahayaan, dan parameter dinamika roda. Pelatihan minimal $10^6$ langkah dengan *curriculum learning* dari skenario sederhana ke kompleks. **Tahap 4 — Verifikasi & Validasi**: uji terhadap ISO 3691-4 (AMR safety), ISO 13849 (safety-related parts of control systems), dan ANSI/RIA R15.08 untuk AMR industri; jalankan *hardware-in-the-loop* (HIL) testing.

**Tahap 5 — Integrasi FDIR** sesuai Borah (2024): pasang *observer* EKF/UKF/Particle Filter pada setiap agen, kirim residu ke *centralized fault diagnosis module* yang menjalankan $\chi^2$-test atau *cumulative sum* (CUSUM) untuk deteksi; saat fault terdeteksi, *RL-based recovery policy* memilih strategi rekonstruksi. **Tahap 6 — Deployment & Commissioning**: lakukan *shadow mode* (robot berjalan tanpa mengambil keputusan nyata) selama 2–4 minggu; bandingkan *key performance indicators* dengan baseline konvensional. **Tahap 7 — Continuous Improvement**: pipeline MLOps dengan *federated learning* agar model RL diperbarui dari data lintas fasilitas tanpa mengunggah data sensitif.

Diagram alur logika keputusan agen adalah sebagai berikut. Pada setiap timestep: (a) baca sensor $\rightarrow$ observasi $o_t$; (b) EKF estimasi $\hat{\mathbf{x}}_t$ dan hitung residu $\boldsymbol{\nu}_t$; (c) jika $\|\boldsymbol{\nu}_t\| \leq \tau$, jalankan $\pi_{\text{path}}(s_t) \rightarrow a_t$; (d) jika $\|\boldsymbol{\nu}_t\| > \tau$, aktifkan mode FDIR $\rightarrow \pi_{\text{FDIR}}(\hat{\mathbf{x}}_t) \rightarrow a_t^{\text{rec}}$; (e) kirim $a_t$ ke *low-level controller* (PID pada roda); (f) ukur reward