# 1940 — Perencanaan Gerak (Motion Planning) Robot Bergerak Otonom Menggunakan Reinforcement Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah memposisikan *Autonomous Mobile Robot* (AMR) sebagai tulang punggung operasional logistik dan manufaktur modern. Rahul Kala (2024) dalam bab "Motion planning using reinforcement learning" dari buku *Autonomous Mobile Robots* (Elsevier, DOI: 10.1016/b978-0-443-18908-1.00016-9) menegaskan bahwa perencanaan gerak (*motion planning*) merupakan subsistem kritis yang menentukan keberhasilan misi navigasi otonom di lingkungan dinamis dan tidak pasti. Permasalahan ini semakin urgen mengingat pertumbuhan pasar AMR global yang diproyeksikan mencapai USD 8,7 miliar pada 2030 dengan CAGR sekitar 17%, didorong oleh e-commerce, otomatisasi gudang (*automated storage and retrieval system*/AS/RS), serta kebutuhan akan *flexible manufacturing systems*.

Dalam konteks operasional industri nyata, tantangan *motion planning* bukan sekadar menemukan lintasan terpendek secara geometris, melainkan mengelola keputusan real-time yang memperhitungkan (i) konflik antar-robot di koridor sempit, (ii) perubahan tata letak gudang akibat *slotting* dinamis, (iii) kegagalan sensor LiDAR atau encoder akibat interferensi elektromagnetik, serta (iv) konsumsi energi baterai yang harus diminimalkan untuk menjaga *mean time between charge* (MTBC). Metode klasik seperti *A\* search*, *Rapidly-exploring Random Tree* (RRT), dan *Probabilistic Roadmap* (PRM) memang memberikan kelengkapan komputasional, namun memiliki kelemahan struktural: membutuhkan peta statis, tidak mampu beradaptasi dengan perubahan lingkungan secara *online*, dan tidak mengeksploitasi pengalaman historis untuk meningkatkan kebijakan navigasi.

Sebaliknya, *Reinforcement Learning* (RL) menawarkan paradigma *learning-based control* di mana agen (robot) belajar kebijakan optimal $\pi^*(a|s)$ melalui interaksi trial-and-error dengan lingkungan, tanpa memerlukan model eksplisit dari dinamika sistem. Kala (2024) menekankan bahwa integrasi RL dengan arsitektur *deep neural network*—yang dikenal sebagai *Deep Reinforcement Learning* (DRL)—telah membuka kemungkinan baru dalam hal generalisasi terhadap lingkungan berskala besar dan kontinu. Pendekatan ini sangat relevan dengan kompleksitas sistem manufaktur modern di mana variabel keputusan (posisi rak, kepadatan pejalan kaki, jadwal *picking*) berubah secara stokastik.

Kontribusi kedua dari Borah (2024) dalam disertasinya tentang *Smart Autonomous Multi-Agent Systems* (SAMAS) di DOI: 10.32920/25412566.v1 memperkuat relevansi industri dengan menunjukkan bahwa perencanaan gerak berbasis RL juga harus memperhatikan aspek *Fault Detection, Isolation, and Reconstruction* (FDIR). Dalam sistem multi-agen di gudang otomatis—di mana puluhan hingga ratusan AMR beroperasi simultan—ketahanan terhadap kegagalan sensor, aktuator, atau tautan komunikasi menjadi prasyarat keselamatan operasional. Borah (2024) mendemonstrasikan bahwa arsitektur RL yang dirancang dengan *reward shaping* berbasis *fault penalty* dapat secara signifikan meningkatkan *survivability* sistem. Sinergi kedua literatur ini memberikan kerangka komprehensif bagi spesialis teknik industri untuk merancang sistem perencanaan gerak yang tidak hanya optimal secara lintasan, namun juga tangguh dan aman secara operasional.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis inti dari perencanaan gerak berbasis RL berakar pada kerangka *Markov Decision Process* (MDP). Kala (2024) mendefinisikan MDP sebagai 5-tuple $(\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$ di mana:

- $\mathcal{S}$ adalah himpunan state (konfigurasi robot dan lingkungannya),
- $\mathcal{A}$ adalah himpunan aksi (perintah kecepatan/arah),
- $\mathcal{P}(s'|s,a)$ adalah fungsi transisi probabilistik,
- $\mathcal{R}(s,a,s')$ adalah fungsi reward,
- $\gamma \in [0,1]$ adalah *discount factor*.

Tujuan agen adalah memaksimalkan *expected cumulative discounted return*:

$$G_t = \sum_{k=0}^{\infty} \gamma^k R_{t+k+1}$$

Kebijakan optimal $\pi^*$ memenuhi *Bellman optimality equation*:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s'} \mathcal{P}(s'|s,a)\left[\mathcal{R}(s,a,s') + \gamma V^*(s')\right]$$

atau dalam bentuk aksi-nilai (*action-value function*):

$$Q^*(s,a) = \sum_{s'} \mathcal{P}(s'|s,a)\left[\mathcal{R}(s,a,s') + \gamma \max_{a'} Q^*(s',a')\right]$$

Untuk kasus di mana $\mathcal{P}$ tidak diketahui (yang merupakan situasi tipikal dalam AMR industri karena dinamika lingkungan tidak sepenuhnya *observable*), digunakan algoritma *model-free* seperti **Q-learning** dengan aturan pembaruan:

$$Q(s,a) \leftarrow Q(s,a) + \alpha \left[ r + \gamma \max_{a'} Q(s',a') - Q(s,a) \right]$$

dengan $\alpha$ adalah *learning rate*. Kala (2024) menyoroti bahwa untuk ruang state kontinu (misalnya posisi $(x,y)$ dengan presisi sentimeter), *tabular Q-learning* menjadi tidak layak secara komputasi sehingga digunakan **Deep Q-Network (DQN)** dengan aproksimator $Q(s,a;\theta) \approx Q^*(s,a)$, dan *loss function*:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \left[ \left( r + \gamma \max_{a'} Q(s',a';\theta^-) - Q(s,a;\theta) \right)^2 \right]$$

di mana $\theta^-$ adalah parameter dari *target network* yang diperbarui periodik, dan $\mathcal{D}$ adalah *replay buffer*.

Untuk lingkungan dengan aksi kontinu (pengaturan kecepatan linier $v$ dan sudut $\omega$), algoritma *policy gradient* seperti **Deep Deterministic Policy Gradient (DDPG)** atau **Proximal Policy Optimization (PPO)** lebih sesuai. Gradien kebijakan didefinisikan sebagai:

$$\nabla_\theta J(\pi_\theta) = \mathbb{E}_{s \sim \rho^\pi} \left[ \nabla_\theta \log \pi_\theta(a|s) \, Q^\pi(s,a) \right]$$

Dalam konteks multi-robot yang disinggung Borah (2024), formulasi diperluas ke *Decentralized Partially Observable MDP* (Dec-POMDP) dengan *joint action* $\mathbf{a} = (a_1, a_2, \ldots, a_N)$ dan *joint state* $\mathbf{s}$. Reward kolektif $R(\mathbf{s},\mathbf{a})$ dirancang untuk mencegah *deadlock* dan *starvation* melalui koefisien penalti $\lambda_1$ untuk tabrakan dan $\lambda_2$ untuk kelambanan misi:

$$R = -\lambda_1 \cdot \mathbb{1}_{\text{collision}} - \lambda_2 \cdot (T_{\text{arrival}} - T_{\text{optimal}}) + \lambda_3 \cdot \text{task\_completed}$$

Parameter tipikal yang digunakan Kala (2024) untuk AMR gudang adalah $\gamma = 0{,}99$, $\alpha = 10^{-3}$, $\lambda_1 = 100$, $\lambda_2 = 0{,}5$ per detik keterlambatan, dan $\lambda_3 = 50$ untuk setiap *pickup* berhasil.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti protokol bertahap yang konsisten dengan standar ISO 3691-4 (robot industri—persyaratan keselamatan untuk robot penggerak otomatis) serta arsitektur ROS 2 (Robot Operating System 2). SOP yang diturunkan dari kerangka Kala (2024) dan diperkuat oleh rekomendasi FDIR Borah (2024) terdiri dari delapan tahap:

**Tahap 1—Pemodelan Ruang Kerja.** Diskretisasi lingkungan gudang menjadi *occupancy grid* $\mathcal{G} \in \{0,1\}^{W \times H}$ dengan resolusi $\Delta = 0{,}5$ m. Sel bernilai 1 menandai rintangan statis (rak, pilar, conveyor). Untuk障碍 dinamis, digunakan *dynamic obstacle layer* yang diperbarui setiap 100 ms dari sensor LiDAR 2D.

**Tahap 2—Rekayasa State, Aksi, dan Reward.** State $s_t = (x_t, y_t, \theta_t, v_t, d_{\text{goal}}, d_{\text{min}})$ mencakup pose odometri, jarak ke goal, dan jarak minimum ke障碍. Aksi diskrit: $\{\text{maju}, \text{belok kiri}, \text{belok kanan}, \text{berhenti}\}$; aksi kontinu: $(v,\omega)$ dengan $v \in [0, v_{\max}]$ dan $\omega \in [-\omega_{\max}, \omega_{\max}]$. Fungsi reward mengikuti Kala (2024):

$$r_t = 
\begin{cases}
+100 & \text{jika } \|p_t - p_{\text{goal}}\| < \epsilon \\
-50 & \text{jika tabrakan} \\
-0{,}1 \cdot d_{\min} & \text{terdekat ke rintangan} \\
-0{,}01 & \text{beban waktu (time penalty)} 
\end{cases}$$

**Tahap 3—Inisialisasi dan Pelatihan Offline.** Bangun simulator headless (Gazebo/Isaac Sim) yang mereplikasi dinamika gudang target. Latih kebijakan $\pi_\theta$ selama $N_{\text{episodes}} \in [10^4, 10^5]$ dengan parallel rollout 16 worker. Simpan *checkpoint* setiap 100 episode berdasarkan *mean reward* rolling window 50 episode.

**Tahap 4—Validasi *Sim-to-Real* dan Domain Randomization.** Terapkan *domain randomization* pada parameter fisik: koefisien gesekan $\mu \sim U(0{,}3, 0{,}9)$, noise sensor $\sigma \sim U(0{,}01, 0{,}05)$ m, dan latensi komunikasi $l \sim U(10, 80)$ ms. Tanpa langkah ini, *transfer* kebijakan ke robot fisik akan gagal (*reality gap*).

**Tahap 5—Integrasi Modul FDIR (Borah, 2024).** Pasang *anomaly detector* berbasis *autoencoder* pada stream sensor ($\mathbf{z}_t$); ketika rekonstruksi error melebihi threshold $\tau$, sistem mengaktifkan *safety policy* $\pi_{\text{safe}}$ (misalnya berhenti darurat atau trajectory replanning).

**Tahap 6—Deployment dan Supervisi.** Deploy model ter量化 (ONNX/TensorRT) ke unit komputasi onboard (NVIDIA Jetson Orin). Aktifkan *watchdog* yang mengirim *heartbeat* setiap 1 detik ke Fleet Manager.

**Tahap 7—Monitoring Kinerja.** Pantau KPI operasional: *task completion rate*, *average pickup time*, *collision count per 1000 jam*, dan *battery cycles to swap*. Bandingkan dengan baseline non-RL.

**Tahap 8—Iterasi dan *Continual Learning*.** Kumpulkan *trajectories* baru ke *replay buffer* prioritas dan lakukan *fine-tuning* mingguan untuk mencegah *catastrophic forgetting*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah pusat distribusi *e-commerce* di Cikarang memiliki gudang 50 m × 30 m dengan 8 lorong memanjang. Ditempatkan 4 unit AMR tipe *pick-to-cart* dengan misi mengambil barang dari 12 *pick-station* dan mengirimkannya ke *consolidation zone*. Kita akan menghitung Q-value dan lintasan optimal untuk satu misi tipikal.

**Parameter Input:**
- Grid: $W=100$, $H=60$ sel (resolusi 0,5 m)
- Start AMR-1: $s_0 = (5, 5)$
- Goal: $s_g = (95, 55)$ (dekat *packing station*)
- Halangan statis: 6 rak vertikal pada kolom $x \in \{20,21, 35,36, 50,51, 65,66, 80,81\}$ dengan $y \in [15, 45]$
- Learning rate $\alpha = 0{,}1$; discount $\gamma = 0{,}9$
- Aksi diskrit: 4 (atas, kanan, bawah, kiri)

**Langkah Perhitungan Step-by