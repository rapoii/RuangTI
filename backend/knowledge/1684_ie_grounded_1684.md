# 1684 — Perencanaan Gerak Otomatis Berbasis Pembelajaran Penguatan untuk Robot Bergerak Otonom di Lingkungan Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Perencanaan Gerak (Motion Planning) Menggunakan Reinforcement Learning pada Sistem Multi-Agen Otonom
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Motion planning using reinforcement learning* dalam *Autonomous Mobile Robots*, Elsevier. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems (SAMAS)*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur dan logistik menuju *Industry 4.0* dan *Industry 5.0* menempatkan robot bergerak otonom (*Autonomous Mobile Robots*/AMR) sebagai tulang punggung operasional. Rahul Kala (2024) dalam chapter "Motion planning using reinforcement learning" yang diterbitkan oleh Elsevier dengan DOI [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9) menekankan bahwa perencanaan gerak bukan sekadar menemukan lintasan terpendek, melainkan proses pengambilan keputusan sekuensial dalam ruang keadaan (*state space*) yang terus berubah karena dinamika lingkungan, kehadiran manusia, dan gangguan sensor. Dalam konteks industri, urgensi metodologi ini muncul dari tiga fenomena konkret: (1) meningkatnya kompleksitas *layout* gudang *e-commerce* yang memerlukan AMR menavigasi lorong-lorong sempit dengan kepadatan tinggi; (2) kebutuhan akan *fault detection, isolation, and reconstruction* (FDIR) pada sistem multi-agen seperti yang disorot oleh Borah (2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)); dan (3) ketidakmampuan algoritma klasik A* atau RRT menangani *uncertainty* stokastik secara real-time.

Secara ekonomis, pasar AMR global diproyeksi mencapai USD 8,7 miliar pada 2028 dengan CAGR 23,7%, didorong oleh Amazon (Kiva robots), Alibaba (Quicktron), dan JD.com. Kegagalan perencanaan gerak—misalnya tabrakan, *deadlock*, atau *path inefficiency*—dapat menimbulkan downtime Rp 4-15 juta per jam di fasilitas sortir modern. Oleh karena itu, Kala (2024) mengajukan *reinforcement learning* (RL) sebagai paradigma pembelajaran kebijakan (*policy*) melalui interaksi trial-and-error dengan lingkungan, sehingga AMR dapat beradaptasi terhadap perubahan tata letak, kemacetan, maupun kegagalan sebagian agen tanpa reprogramming manual. Pendekatan ini selaras dengan arsitektur *Smart Autonomous Multi-Agent Systems* (SAMAS) Borah (2024) yang mengintegrasikan nonlinear filtering (misalnya Kalman/Unscented Kalman Filter) dengan RL untuk memastikan setiap agen tidak hanya merencanakan gerak tetapi juga mempertahankan estimasi状态 internal yang robust terhadap derau sensor. Gabungan keduanya menjawab tantangan inti teknik industri: bagaimana merancang sistem otonom yang *scalable*, *fault-tolerant*, dan mampu memenuhi KPI operasional seperti *order fulfillment time*, *throughput*, dan *OEE* (Overall Equipment Effectiveness).

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti RL untuk perencanaan gerak adalah *Markov Decision Process* (MDP) yang didefinisikan oleh tupel $(S, A, P, R, \gamma)$, di mana $S$ adalah himpunan keadaan (posisi, orientasi, kecepatan, dan status障碍), $A$ adalah himpunan aksi (diskret: atas/bawah/kiri/kanan/diam; atau kontinyu: kecepatan linier dan angular), $P(s'|s,a)$ adalah probabilitas transisi, $R(s,a,s')$ adalah reward langsung, dan $\gamma \in [0,1)$ adalah *discount factor*. Kala (2024) menekankan bahwa aksioma Markov—$P(s_{t+1}|s_t,a_t,s_{t-1},a_{t-1},\dots)=P(s_{t+1}|s_t,a_t)$—menjadi prasyarat agar Q-learning konvergen.

Fungsi nilai keadaan optimal memenuhi **Bellman Optimality Equation**:

$$
V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s'|s,a)\left[R(s,a,s') + \gamma V^*(s')\right]
$$

Untuk robot dengan state diskret dan aksi diskret, lebih lazim digunakan **Q-function** yang merepresentasikan nilai ekspektasi kumulatif reward dari pasangan state-action:

$$
Q^*(s,a) = \mathbb{E}\left[\sum_{t=0}^{\infty}\gamma^t R(s_t,a_t) \,\Big|\, s_0=s, a_0=a, \pi^*\right]
$$

Algoritma *Q-learning* melakukan iterasi update off-policy sesuai persamaan:

$$
Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha\left[r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t)\right]
$$

di mana $\alpha \in (0,1]$ adalah *learning rate*, dan istilah dalam kurung disebut *temporal-difference error* (TD-error). Kebijakan optimal diekstraksi melalui:

$$
\pi^*(s) = \arg\max_{a \in A} Q^*(s,a)
$$

Untuk ruang aksi kontinyu (kecepatan roda), Kala (2024) merekomendasikan **Deep Deterministic Policy Gradient** (DDPG) dengan *actor-critic* network. *Actor* memetakan $s \mapsto a$ melalui $\mu_\theta(s)$, dan *critic* mengaproksimasi $Q_\phi(s,a)$. Update critic:

$$
L(\phi) = \mathbb{E}_{(s,a,r,s')\sim \mathcal{D}}\left[\left(Q_\phi(s,a) - y\right)^2\right],\quad y = r + \gamma Q_{\phi'}(s',\mu_{\theta'}(s'))
$$

dengan $\mathcal{D}$ adalah *replay buffer* dan $\theta',\phi'$ adalah parameter jaringan target (*soft update*: $\theta' \leftarrow \tau\theta + (1-\tau)\theta'$, $\tau \ll 1$).

Pada arsitektur SAMAS Borah (2024), persamaan **state estimation** untuk setiap agen mengikuti Extended Kalman Filter:

$$
\hat{x}_{t|t} = \hat{x}_{t|t-1} + K_t\left(z_t - h(\hat{x}_{t|t-1})\right)
$$

dengan kovariansi error $P_{t|t} = (I - K_t H_t)P_{t|t-1}$. Reward FDIR dirancang sebagai komponen tambahan:

$$
r_t = r_{\text{task}} - \lambda_{\text{safety}}\,d_{\text{collision}} - \lambda_{\text{fault}}\, \|e_{\text{residual}}\|^2
$$

di mana $d_{\text{collision}}$ adalah jarak ke障碍 dan $e_{\text{residual}}$ adalah residual deteksi fault. Bobot $\lambda$ menormalisasi trade-off antara kelancaran完成任务 dan keselamatan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi RL-based motion planning di lantai pabrik mengikuti SOP 7 tahap berikut, yang mengintegrasikan rekomendasi Kala (2024) dan Borah (2024):

**Tahap 1 — Analisis Sistem & Pemodelan MDP.** Definisikan state (posisi grid $(x,y)$, heading $\theta$, kecepatan $v$, jarak ke障碍 terdekat $d_{\text{obs}}$), ruang aksi (8 arah diskret atau $(v,\omega)$ kontinyu), fungsi reward (mis. $+100$ untuk mencapai goal, $-10$ untuk tabrakan, $-1$ per langkah), dan discount factor $\gamma=0.95$. Gunakan standar **ISO 3691-4:2020** untuk safety requirements driverless industrial trucks.

**Tahap 2 — Desain Arsitektur Simulasi.** Bangun *digital twin* gudang/factory pada simulator Gazebo atau Isaac Sim dengan standar ROS 2 Humble. Setiap agen dipersenjatai sensor LiDAR 2D (rentang 20 m) dan IMU. Resolusi occupancy grid 0,5 m.

**Tahap 3 — Inisialisasi & Curriculum Training.** Inisialisasi Q-table atau bobot jaringan secara acak (He initialization). Terapkan *curriculum learning*: mulai dari skenario 1障碍, naik ke 5, lalu 10障碍. Hyperparameter awal: $\alpha=0{,}25$, $\varepsilon_{\text{init}}=1{,}0$, $\varepsilon_{\text{min}}=0{,}01$, *decay* = 0,995 per episode.

**Tahap 4 — Eksekusi Episode & Eksplorasi.** Setiap episode robot bergerak hingga goal tercapai, tabrakan, atau timeout (500 langkah). Gunakan $\varepsilon$-greedy: probabilitas $1-\varepsilon$ pilih aksi sesuai $Q$, selainnya pilih acak. Catat tuple $(s,a,r,s',\text{done})$ ke *replay buffer* kapasitas $10^6$.

**Tahap 5 — Update Policy.** Tiap 4 langkah environment, lakukan mini-batch update 64 sampel. Validasi konvergensi melalui running mean reward; target ketika 100 episode terakhir $\bar{R} \geq 0{,}85 \cdot R_{\max}$.

**Tahap 6 — Fault Injection & Validasi SAMAS.** Terapkan modul FDIR Borah (2024): suntikkan *sensor bias*, *actuator degradation*, atau *communication dropout* sesuai skenario failure mode. Verifikasi bahwa kebijakan RL tetap menghasilkan *safe stop* atau *graceful degradation*.

**Tahap 7 — Transfer Sim-to-Real & Deployment.** Lakukan *domain randomization* (variasi koefisien gesekan $\mu \in [0{,}3; 0{,}8]$, latensi 50–200 ms). Uji di *safety-rated monitored stop* zone (ISO 13849-1 PL=d) sebelum full operation. Dokumentasikan dalam *technical file* sesuai **ISO 10218-1** dan **ANSI/RIA R15.08-1**.

Diagram alir logika:
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Env reset() │───▶│ Agent pilih a │───▶│ Step env    │
└─────────────┘    │ ε-greedy     │    │ r,s',done   │
       ▲           └──────────────┘    └──────┬──────┘
       │                                     │
       │            ┌────────────────┐       │
       └────────────│ Update θ,φ (RL)│◀──────┘
                    └────────────────┘
                             │
                    ┌────────▼─────────┐
                    │ FDIR check (SAMA)│
                    └──────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah gudang *e-commerce* 10.000 m² di Jakarta mengoperasikan 10 AMR untuk *order picking*. Lebar lorong 1,2 m, tinggi rak 2,5 m. Satu agen diuji dengan algoritma Q-learning pada grid 5×5, koordinat goal $(4,4)$, start $(0,0)$, satu障碍 statis di $(2,2)$.

**Parameter Industri:**
- Resolusi grid: $1\,\text{m} \times 1\,\text{m}$
- Aksi diskret: $\{0:\text{kanan}, 1:\text{atas}, 2:\text{kiri}, 3:\text{bawah}\}$
- Reward: $R_{\text{goal}}=+100$, $R_{\text{obstacle}}=-10$, $R_{\text{step}}=-1$
- $\alpha=0{,}5$, $\gamma=0{,}9$
- Tabel $Q(s,a)$ diinisialisasi nol $5\times5\times4$

**Episode Pertama — Iterasi Bellman.** Ambil transisi $s_t=(0,0)$, pilih aksi $a=0$ (kanan) secara acak (eksplorasi penuh). Lingkungan berpindah ke $s_{t+1}=(0,1)$, reward $r=-1$. Update:

$$
Q((0,0),0) \leftarrow 0 + 0{,}5\left[-1 + 0{,}9\max_a Q((0,1),a) - 0\right]
$$

Karena semua $Q((0,1),\cdot)=0$, maka $Q((0,0),0) = -0{,}5$.

**Episode ke-100 (Konvergensi Parsial).** Misalkan nilai Q hasil pembelajaran telah ter-update sebagai berikut (sampel sel kunci):

| State $s$ | $Q(s,\text{kanan})$ | $Q(s