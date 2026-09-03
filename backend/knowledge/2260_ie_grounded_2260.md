# 2260 — Motion Planning Cerdas Menggunakan Reinforcement Learning untuk Sistem Otonom Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Motion planning using reinforcement learning
**Jurnal & Sitasi Utama:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)
**Sitasi Pendukung:** Kaustav Borah (2024). *Nonlinear Filtering and Reinforcement Learning-based Smart Autonomous Multi-agent Systems*. DOI: [https://doi.org/10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)

---

## 1. Pendahuluan dan Konteks Industri

Era otomatisasi cerdas telah mengubah secara fundamental lanskap operasional industri manufaktur, logistik, dan pergudangan. Robot bergerak otonom (*Autonomous Mobile Robots*/AMR) kini menjadi tulang punggung transformasi digital pada fasilitas *Industry 4.0*, dengan proyeksi pasar global AMR yang melampaui USD 8 miliar pada tahun 2030 menurut berbagai laporan konsultan. Permasalahan sentral yang menentukan efisiensi, keselamatan, dan produktivitas sistem ini adalah **motion planning** — kemampuan robot untuk merencanakan dan mengeksekusi lintasan optimal dari konfigurasi awal ke tujuan di tengah lingkungan yang kompleks, dinamis, dan penuh ketidakpastian.

Dalam karyanya yang berjudul "Motion planning using reinforcement learning" yang diterbitkan pada tahun 2024 dalam *Autonomous Mobile Robots* (Elsevier), Rahul Kala menyoroti keterbatasan pendekatan motion planning konvensional berbasis peta statis ketika menghadapi lingkungan yang tidak sepenuhnya diketahui, pejalan kaki yang bergerak, palet yang berpindah, dan *obstacle* dinamis lainnya. Kala berargumen bahwa Reinforcement Learning (RL) memberikan paradigma pembelajaran kebijakan (*policy*) navigasi yang adaptif melalui interaksi langsung dengan lingkungan, tanpa memerlukan model eksplisit dunia. Pendekatan ini menggantikan arsitektur *sense–plan–act* klasik dengan loop *sense–learn–plan–act* yang memungkinkan robot memperbaiki kebijakan secara *online* (Kala, 2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)).

Urgensi ekonomi dari adopsi motion planning berbasis RL terletak pada tiga pilar. Pertama, **peningkatan throughput**: AMR dengan motion planning adaptif mampu menaikkan produktivitas *picking* di gudang *e-commerce* hingga 25–40% karena mampu menghindari kemacetan lokal tanpa intervensi operator. Kedua, **pengurangan biaya energi**: lintasan yang dipelajari melalui fungsi reward yang memasukkan komponen konsumsi energi dapat menurunkan *State of Charge* (SoC) baterai per siklus misi. Ketiga, **resiliensi operasional**: ketika satu agen gagal, sistem multi-agen dapat melakukan redistribusi tugas secara otonom, seperti yang ditunjukkan dalam kerangka Smart Autonomous Multi-agent Systems (SAMAS) yang dikemukakan oleh Kaustav Borah (2024, DOI: [10.32920/25412566.v1](https://doi.org/10.32920/25412566.v1)). Borah mengintegrasikan *nonlinear filtering* untuk estimasi keadaan dengan RL guna mendukung *Fault Detection, Isolation, and Reconstruction* (FDIR) pada sistem multi-agen, sehingga kemampuan motion planning tidak lagi berdiri sendiri melainkan menjadi bagian dari arsitektur otonom yang resilien terhadap degradasi sensor, aktuator, maupun gangguan jaringan komunikasi.

Konteks industri di Indonesia juga semakin relevan. Inisiatif *Making Indonesia 4.0* mendorong adopsi AMR di sektor manufaktur otomotif, FMCG, dan farmasi. Tantangan seperti tata letak (*layout*) gudang yang sering berubah, variasi SKU musiman, serta standar keselamatan SNI ISO 3691-4 untuk kendaraan industri tanpa pengemudi membutuhkan pendekatan motion planning yang tidak hanya *offline-optimal* tetapi juga *online-adaptif*. RL, dengan formulasi MDP-nya, memberikan kerangka matematis yang memungkinkan integrasi kendala keselamatan, efisiensi energi, dan吞吐 dal dalam satu kerangka optimasi terpadu. Oleh karena itu, penguasaan motion planning berbasis RL menjadi kompetensi kritis bagi insinyur industri yang merancang fasilitas manufaktur dan logistik masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Markov Decision Process (MDP)

Kala (2024) menekankan bahwa motion planning dengan RL diformalisasikan sebagai **Markov Decision Process** (MDP) yang didefinisikan oleh tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$ di mana $\mathcal{S}$ adalah himpunan keadaan (*state*), $\mathcal{A}$ adalah himpunan aksi, $P(s'|s,a)$ adalah fungsi transisi probabilistik, $R(s,a,s')$ adalah fungsi reward, dan $\gamma \in [0,1)$ adalah faktor diskonto. Asumsi Markov menyatakan bahwa transisi hanya bergantung pada keadaan dan aksi saat ini:

$$P(s_{t+1} = s' \mid s_t = s, a_t = a, s_{t-1}, a_{t-1}, \ldots) = P(s_{t+1} = s' \mid s_t = s, a_t = a)$$

Untuk AMR, $\mathcal{S}$ biasanya merupakan ruang kontinu $(x, y, \theta, v, \omega)$ yang kemudian didiskretisasi atau diaproksimasi dengan jaringan syaraf.

### 2.2 Persamaan Bellman dan Fungsi Nilai

Kebijakan optimal $\pi^*$ memenuhi **Bellman optimality equation**:

$$V^*(s) = \max_{a \in \mathcal{A}} \sum_{s' \in \mathcal{S}} P(s'|s,a)\big[R(s,a,s') + \gamma V^*(s')\big]$$

dengan $V^*(s)$ adalah *state-value function* optimal. Lebih praktis, digunakan **action-value function** $Q^*(s,a)$:

$$Q^*(s,a) = \sum_{s'} P(s'|s,a)\big[R(s,a,s') + \gamma \max_{a'} Q^*(s',a')\big]$$

Kebijakan optimal diekstraksi sebagai $\pi^*(s) = \arg\max_{a} Q^*(s,a)$.

### 2.3 Algoritma Q-Learning dan Batas Konvergensi

Kala (2024) memaparkan bahwa **Q-learning** adalah algoritma *model-free*, *off-policy* yang memperbarui estimasi $Q$ secara iteratif:

$$Q(s_t,a_t) \leftarrow Q(s_t,a_t) + \alpha \big[ r_{t+1} + \gamma \max_{a'} Q(s_{t+1},a') - Q(s_t,a_t) \big]$$

dengan $\alpha \in (0,1]$ adalah *learning rate*. Konvergensi ke $Q^*$ dijamin oleh Tsitsiklis (1994) jika:

$$\sum_{t=0}^{\infty} \alpha_t = \infty \quad \text{dan} \quad \sum_{t=0}^{\infty} \alpha_t^2 < \infty$$

Untuk ruang keadaan kontinu berdimensi tinggi, Kala merekomendasikan **Deep Q-Network (DQN)** dengan *experience replay* dan *target network* untuk menstabilkan pelatihan:

$$\mathcal{L}(\theta) = \mathbb{E}_{(s,a,r,s') \sim \mathcal{D}} \big[ \big( r + \gamma \max_{a'} Q_{\theta^-}(s',a') - Q_\theta(s,a) \big)^2 \big]$$

dengan $\theta^-$ adalah parameter jaringan target yang diperbarui secara periodik.

### 2.4 Desain Fungsi Reward

Fungsi reward merupakan titik kritis desain. Kala (2024) memberikan formulasi umum:

$$R(s,a,s') = R_{\text{goal}} \cdot \mathbb{1}_{\text{goal}} - R_{\text{collision}} \cdot \mathbb{1}_{\text{collision}} - c_t \cdot \Delta t - c_d \cdot d(s,s_{\text{goal}}) - c_e \cdot E_{\text{consumed}}$$

di mana $\mathbb{1}$ adalah indikator, $c_t$ adalah bobot penalti waktu, $c_d$ adalah bobot jarak ke tujuan, dan $c_e$ adalah bobot konsumsi energi. Borah (2024) menambahkan penalti berbasis estimasi kesalahan filter untuk memastikan motion planning tetap aman di bawah sensor *noisy*:

$$R_{\text{filter}}(s,a) = -\lambda \cdot \text{tr}\big(P_{k|k-1}\big)$$

dengan $P_{k|k-1}$ adalah kovariansi kesalahan prediksi dari *Extended Kalman Filter* (EKF) atau *Unscented Kalman Filter* (UKF).

### 2.5 Multi-Agent Reinforcement Learning (MARL)

Borah (2024) menggeneralisasi formulasi MDP ke *Stochastic Game* $\langle \mathcal{S}, \{\mathcal{A}^i\}_{i=1}^{N}, P, \{R^i\}_{i=1}^{N}, \gamma \rangle$ untuk sistem multi-agen. Setiap agen $i$ memaksimalkan ekspektasi reward kolektif melalui **Nash equilibrium** atau *social welfare*:

$$V^{\pi}(s) = \sum_{i=1}^{N} w_i \cdot \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t r_t^i \mid s_0 = s\right]$$

dengan bobot kepentingan $w_i$. Pendekatan ini memungkinkan koalisi AMR untuk menyelesaikan konflik lintasan (*deadlock*) secara terdistribusi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi motion planning berbasis RL di lingkungan industri mengikuti SOP delapan tahapan berikut, yang disintesis dari protokol Kala (2024) dan kerangka SAMAS Borah (2024).

**Tahap 1 — Karakterisasi Lingkungan dan Akuisisi Data.** Lakukan *SLAM* (Simultaneous Localization and Mapping) menggunakan LiDAR 2D/3D dan/atau kamera stereo. Definisikan *occupancy grid* dengan resolusi $\Delta x = \Delta y = 0{,}05$ m (sesuai ISO 3691-4 untuk AMR kelas A). Tetapkan zona eksklusi dinamis untuk pejalan kaki berdasarkan standar ISO 13849 PL=d.

**Tahap 2 — Desain MDP.** Diskretisasi ruang aksi menjadi *primitive motion*: $\{ \text{maju 0,5 m}, \text{belok kiri 15°}, \text{belok kanan 15°}, \text{berhenti} \}$. Definisikan keadaan gabungan $(x,y,\theta,\text{target bearing}, d_{\text{nearest obstacle}}, v_{\text{current}})$.

**Tahap 3 — Desain Fungsi Reward.** Gunakan kerangka Section 2.4 dengan parameter awal: $R_{\text{goal}} = +100$, $R_{\text{collision}} = -100$, $c_t = -0{,}1$, $c_d = -1{,}0$, $c_e = -0{,}05$ (empiris untuk AMR berbaterai Li-ion 48 V).

**Tahap 4 — Pelatihan Offline di Simulator.** Gunakan simulator Gazebo atau NVIDIA Isaac Sim dengan domain randomization untuk *lighting*, *friction*, dan *sensor noise*. Latih DQN dengan *batch size* 64, $\gamma = 0{,}99$, $\alpha$ adaptif (Adam optimizer, *learning rate* $10^{-4}$), selama minimal 1 juta langkah (*episode*).

**Tahap 5 — Validasi Simulasi dan *Safety Filter*.** Sebelum deployment, bungkus kebijakan RL dengan **Control Barrier Function (CBF)** sebagai *safety filter*:

$$\dot{h}(x) \geq -\alpha \, h(x) \quad \forall x \in \mathcal{C}$$

dengan $h(x) \geq 0$ mendefinisikan himpunan aman $\mathcal{C}$. CBF menjamin *forward invariance* meskipun kebijakan RL menghasilkan aksi yang berpotensi tidak aman.

**Tahap 6 — Transfer Learning dan Fine-tuning On-site.** Inisialisasi bobot jaringan dari hasil Tahap 4, lalu lanjutkan pelatihan di fasilitas nyata dengan *human-in-the-loop* supervision. Lakukan *shadow mode* minimal 168 jam operasional tanpa kontrol fisik.

**Tahap 7 — Integrasi FDIR (kerangka Borah).** Aktifkan modul FDIR dengan *nonlinear filter* (UKF) untuk estimasi keadaan. Jika terdeteksi anomali sensor (kovarians > ambang $\sigma^2_{\text{threshold}}$), sistem secara otomatis beralih ke mode *safe stop* dan merekonstruksi lintasan via replanning RL dengan bobot reward $c_d$ dinaikkan.

**Tahap 8 — Audit dan Iterasi.** Lakukan audit bulanan terhadap *Key Performance Indicators* (KPI): *task success rate* ($\geq 99{,}5\%$), *mean time between failure* (MTBF $\geq 500$ jam), *energy per mission* (kWh), dan *near-miss incidents* (target 0/bulan sesuai ISO 12100). Masukkan *near-miss* ke *replay buffer* untuk pelatihan ulang periodik.

---

## 4. Studi Kasus K