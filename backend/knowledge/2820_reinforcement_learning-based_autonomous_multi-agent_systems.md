# 2820 — Sistem Multi-Agen Otonom Berbasis Pembelajaran Penguatan untuk Alokasi Tugas Kooperatif dan Optimasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reinforcement Learning-Based Autonomous Multi-Agent Systems for Cooperative Task Allocation and Optimization
**Jurnal & Sitasi Utama:** Thabo Khatibullah (2024). *International Journal of Electrical, Electronics and Computer Systems*. DOI: [https://doi.org/10.65521/ijeecs.v14i2.2723](https://doi.org/10.65521/ijeecs.v14i2.2723)
**Sitasi Pendukung:** Rahul Kala (2024). *Autonomous Mobile Robots*. DOI: [https://doi.org/10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)

---

## 1. Pendahuluan dan Konteks Industri

Era Industri 4.0 dan transformasi menuju Industri 5.0 telah menciptakan tantangan operasional yang semakin kompleks bagi sistem rekayasa industri modern. Dalam lingkungan manufaktur cerdas (smart manufacturing), logistik cerdas (intelligent logistics), dan jaringan sensor nirkabel terdistribusi (wireless sensor networks), permasalahan alokasi tugas kooperatif (*cooperative task allocation*) menjadi salah satu bottleneck keputusan yang menentukan efisiensi operasional, throughput, dan biaya produksi secara keseluruhan. Menurut Khatibullah (2024, DOI: [10.65521/ijeecs.v14i2.2723](https://doi.org/10.65521/ijeecs.v14i2.2723)), pendekatan optimasi terpusat konvensional (*centralized optimization*) semakin menunjukkan keterbatasan fundamental ketika diterapkan pada sistem berskala besar dengan tingkat dinamika tinggi, ketidakpastian lingkungan, serta kebutuhan keputusan *real-time* dalam arsitektur terdistribusi. Keterbatasan tersebut utamanya mencakup empat dimensi kritis, yaitu (i) *scalability* yang menurun secara eksponensial seiring bertambahnya jumlah agen, (ii) *adaptability* yang rendah terhadap perubahan lingkungan yang cepat, (iii) *communication overhead* yang membebani bandwidth jaringan, dan (iv) latensi keputusan (*real-time decision-making latency*) yang menghambat responsivitas sistem.

Urgensi ekonomis dari permasalahan ini dapat diukur melalui studi-studi empiris terkini yang menunjukkan bahwa inefisiensi alokasi tugas pada armada robotik kolaboratif di lini produksi dapat menyebabkan peningkatan biaya operasional hingga 18-25% dan degradasi *overall equipment effectiveness* (OEE) sebesar 7-12%. Dalam konteks sistem manufaktur fleksibel (FMS) dengan 50-200 unit *autonomous guided vehicle* (AGV) yang beroperasi simultan, kompleksitas kombinatorial dari masalah penugasan menghasilkan ruang solusi yang melampaui kapasitas komputasional algoritma deterministik dalam horizon waktu operasional. Lebih jauh, ketidakpastian yang berasal dari variasi permintaan, kerusakan mesin, dan gangguan rantai pasok menuntut pendekatan yang mampu melakukan pembelajaran adaptif secara berkelanjutan—sebuah karakteristik yang tidak dimiliki oleh pendekatan heuristik statis.

Khatibullah (2024) menegaskan bahwa paradigma *Reinforcement Learning* (RL)-based *Autonomous Multi-Agent Systems* (AMAS) muncul sebagai solusi transformatif yang menawarkan kapabilitas desentralisasi intelijen, pembelajaran adaptif, dan koordinasi kooperatif. Pendekatan ini memungkinkan setiap agen untuk mengembangkan kebijakan keputusan (*policy*) yang optimal melalui interaksi berulang dengan lingkungannya, sekaligus mempertahankan kemampuan kolaborasi melalui protokol komunikasi yang efisien. Dalam domain industri, aplikasi spesifik AMAS berbasis RL mencakup optimasi *pick-and-place* di gudang otomatis, koordinasai armada drone untuk inventarisasi, scheduling fleet AGV, manajemen *cloud-edge computing*, dan optimasi *smart grid*. Sementara itu, Kala (2024, DOI: [10.1016/b978-0-443-18908-1.00016-9](https://doi.org/10.1016/b978-0-443-18908-1.00016-9)) melengkapi perspektif ini dengan menunjukkan bahwa RL juga merupakan pilar utama dalam *motion planning* robot移动 otonom, di mana agen harus mempelajari kebijakan navigasi yang aman dan efisien di lingkungan kontinu dengan kendala dinamis. Sinergi kedua literatur ini menegaskan bahwa RL bukan sekadar teknik optimasi, melainkan fondasi kognitif untuk generasi baru sistem industri otonom.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis fundamental untuk sistem multi-agen berbasis RL dibangun di atas kerangka *Markov Decision Process* (MDP) yang diperluas untuk konteks multi-agen (*Multi-Agent MDP* atau *Stochastic Game*). Sebuah *Multi-Agent MDP* didefinisikan oleh tuple $\langle \mathcal{S}, \mathcal{A}_1, \ldots, \mathcal{A}_n, \mathcal{P}, r_1, \ldots, r_n, \gamma \rangle$ di mana $\mathcal{S}$ merupakan ruang keadaan (*state space*) bersama, $\mathcal{A}_i$ adalah ruang aksi agen $i$, $\mathcal{P}: \mathcal{S} \times \mathcal{A}_1 \times \cdots \times \mathcal{A}_n \times \mathcal{S} \rightarrow [0,1]$ adalah fungsi transisi probabilistik, $r_i: \mathcal{S} \times \mathcal{A}_1 \times \cdots \times \mathcal{A}_n \rightarrow \mathbb{R}$ adalah fungsi reward agen $i$, dan $\gamma \in [0,1)$ adalah faktor diskonto temporal.

Setiap agen $i$ bertujuan untuk mempelajari kebijakan $\pi_i: \mathcal{S} \rightarrow \mathcal{P}(\mathcal{A}_i)$ yang memaksimalkan expected discounted return kumulatif:

$$J_i(\pi) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t r_i(s_t, a_{1,t}, \ldots, a_{n,t})\right]$$

di mana ekspektasi diambil terhadap trajectories yang dihasilkan oleh kebijakan gabungan $\pi = (\pi_1, \ldots, \pi_n)$ dan dinamika lingkungan. Fungsi nilai aksi (*action-value function* atau Q-function) untuk agen $i$ didefinisikan sebagai:

$$Q_i^{\pi}(s, a_1, \ldots, a_n) = \mathbb{E}_{\pi}\left[\sum_{t=0}^{\infty} \gamma^t r_i(s_t, a_{1,t}, \ldots, a_{n,t}) \,\Big|\, s_0=s, a_{i,0}=a_i\right]$$

Untuk konteks alokasi tugas kooperatif, Khatibullah (2024) mengusulkan representasi *cooperative Q-learning* dengan menggunakan *joint action-value* yang mempelajari koordinasi melalui sinyal reward bersama:

$$Q_{tot}(s, \mathbf{a}) = \sum_{i=1}^{n} Q_i(s, \mathbf{a})$$

di mana $\mathbf{a} = (a_1, \ldots, a_n)$ adalah vektor aksi bersama. Prinsip *Value Decomposition Networks* (VDN) menjamin bahwa jika setiap $Q_i$ memenuhi kondisi *Individual-Global-Max* (IGM), maka $\arg\max_{\mathbf{a}} Q_{tot}(s, \mathbf{a}) = (\arg\max_{a_1} Q_1(s, \mathbf{a}), \ldots, \arg\max_{a_n} Q_n(s, \mathbf{a}))$. Formulasi ini memungkinkan dekomposisi pembelajaran terdesentralisasi dengan kinerja optimal global.

Persamaan *Bellman optimality* untuk setiap agen dalam regime kooperatif menjadi:

$$Q_i^*(s, \mathbf{a}) = \mathbb{E}_{s'}\left[r_i(s, \mathbf{a}) + \gamma \sum_{a'_1, \ldots, a'_n} \pi_1^*(s',a'_1) \cdots \pi_n^*(s',a'_n) Q_{tot}^*(s', \mathbf{a}')\right]$$

Untuk menjamin konvergensi dalam skenario dengan ruang aksi besar dan keadaan kontinu—seperti navigation planning yang dibahas oleh Kala (2024)—diperlukan fungsi aproksimasi. Dalam pendekatan *Deep Q-Network* (DQN) untuk sistem multi-agen, fungsi Q diparameterisasi oleh jaringan saraf $\theta$:

$$Q_i(s, \mathbf{a}; \theta_i) \approx Q_i^*(s, \mathbf{a})$$

dengan *loss function* yang diminimisasi:

$$\mathcal{L}_i(\theta_i) = \mathbb{E}_{(s, \mathbf{a}, r, s') \sim \mathcal{D}}\left[\left(y_i^{DQN} - Q_i(s, \mathbf{a}; \theta_i)\right)^2\right]$$

di mana target value $y_i^{DQN}$ adalah:

$$y_i^{DQN} = r_i + \gamma \max_{\mathbf{a}'} Q_{tot}(s', \mathbf{a}'; \theta_i^-)$$

dan $\theta_i^-$ adalah parameter *target network* yang diperbarui secara periodik. Untuk optimasi kebijakan dalam ruang aksi kontinu, algoritma *Proximal Policy Optimization* (PPO) yang digunakan dalam framework Khatibullah (2024) memaksimalkan *surrogate objective*:

$$\mathcal{L}^{PPO}(\theta) = \mathbb{E}_t\left[\min\left(\rho_t(\theta) \hat{A}_t, \text{clip}(\rho_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t\right)\right]$$

di mana $\rho_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$ adalah rasio probabilitas, dan $\hat{A}_t$ adalah estimator *advantage function*:

$$\hat{A}_t = \sum_{l=0}^{\infty} (\gamma\lambda)^l \delta_{t+l}, \quad \delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$$

Kontribusi teoretis penting lainnya dari literatur Khatibullah adalah model koordinasi berbasis *graph attention networks* (GAT) yang memungkinkan setiap agen untuk memperhatikan hanya tetangga topologis yang relevan, mengurangi *communication overhead* sebesar:

$$\mathcal{C}_{comm} = \sum_{i=1}^{n} \sum_{j \in \mathcal{N}(i)} d_{ij} \cdot \mathbb{1}[m_{ij}^{(t)} > \tau]$$

di mana $d_{ij}$ adalah jarak komunikasi, $\mathcal{N}(i)$ adalah himpunan tetangga, dan $\tau$ adalah threshold relevansi pesan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AMAS berbasis RL untuk alokasi tugas kooperatif dalam lingkungan industri mengikuti protokol rekayasa sistematis yang terdiri atas tujuh fase sesuai framework Khatibullah (2024). Berikut adalah SOP terstruktur untuk deployment sistem:

**Fase 1 — Analisis Sistem dan Formulasi Masalah.** Insinyur industri melakukan *value stream mapping* (VSM) untuk mengidentifikasi proses-proses yang menjadi kandidat otomatisasi multi-agen. Setiap titik keputusan diekstraksi menjadi komponen MDP: keadaan (lokasi agen, status任务, level baterai, antrian任务), aksi (pilih任务, pindah ke node, idle), dan reward (throughput, energi, penalty碰撞). Untuk sistem dengan $n$ agen dan $m$ jenis任务, ruang aksi gabungan $|\mathcal{A}| = \prod_{i=1}^{n}|\mathcal{A}_i|$ harus dievaluasi terhadap kompleksitas komputasional $O(m^n)$.

**Fase 2 — Desain Arsitektur Multi-Agen.** Arsitektur yang direkomendasikan mengadopsi pola *Centralized Training with Decentralized Execution* (CTDE) sesuai ISO/IEC 23053:2022 untuk sistem AI berbasis RL. Selama fase训练, sebuah *critic* terpusat memiliki akses terhadap keadaan dan aksi global untuk mempercepat konvergensi; sementara selama eksekusi, setiap agen hanya依赖于 observasi lokal. Parameter kunci yang ditetapkan meliputi: learning rate $\alpha \in [10^{-4}, 10^{-3}]$, discount factor $\gamma = 0.99$, batch size $B = 256$, dan *replay buffer* capacity $|\mathcal{D}| = 10^6$.

**Fase 3 — Rekayasa Fungsi Reward.** Perancangan reward function mengikuti prinsip *sparse-vs-dense reward trade-off*. Untuk aplikasi manufaktur, fungsi reward dapat berbentuk:

$$r_i(t) = w_1 \cdot \mathbb{1}[\text{task}_i \text{ completed}] - w_2 \cdot T_{makespan} - w_3 \cdot E_{consumed} - w_4 \cdot \mathbb{1}[\text{collision}]$$

dengan bobot $w_1, w_2, w_3, w_4$ yang dikalibrasi melalui *grid search* atau *Bayesian optimization*.

**Fase 4 — Pelatihan dan Validasi Simulasi.** Pelatihan dilakukan dalam *digital twin* lingkungan industri yang memodelkan dinamika fisik, gangguan stokastik, dan skenario异常. Setiap episode训练 mencakup $T_{max} = 1000$ langkah waktu. *Early stopping* diterapkan ketika rata-rata reward在100 episode terakhir tidak meningkat lebih dari threshold $\delta = 0.01$. Teknik *curriculum learning* digunakan dengan meningkatkan kompleksitas任务 secara progresif.

**Fase 5 — Integrasi Sensor dan Aktuator.** Sistem RL diintegrasikan dengan infrastruktur感知 melalui middleware ROS 2 (Robot Operating System) atau OPC UA untuk komunikasi工业. Pipeline数据 mengadopsi standar IEEE 1876 untuk komunikasi agen terdistribusi.

**Fase 6 — Pengujian di Lingkungan Semi-Terstruktur.** Sebelum deployment penuh, sistem diuji dalam *sandbox* operasional dengan监督 manusia (*human-in-the-loop*). Metrik keamanan meliputi *collision rate*, *task success rate*, dan *response latency*.

**Fase 7 — Deployment, Monitoring, dan Pembelajaran Berkelanjutan.** Setelah deployment, sistem menerapkan *continual learning* dengan memperbarui parameter model melalui *federated learning* dari pengalaman agen-agen di lapangan. Pemantauan遵循 standar IEC 62443 untuk keamanan siber sistem industri.

Diagram alir proses rekayasa secara keseluruhan mengikuti pola: **Analisis → Formulasi → Desain → Simulasi → Validasi → Deployment → Monitoring → Iterasi**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pusat distribusi e-commerce dengan 12 unit AGV (*automated guided vehicle*) yang harus mengalokasikan 60订单 pengambilan (*picking orders*) per shift ke 8 zona penyimpanan (*picking zones*). Setiap AGV memiliki kapasitas baterai 100 unit dan kapasitas angkut maksimum 8 unit per trip. Tujuan operasional adalah meminimalkan *makespan* (waktu penyelesaian total) sekaligus menyeimbangkan utilisasi baterai.

**Parameter Input:**
- Jumlah agen: $n = 12$ AGV
- Jumlah任务订单: $M = 60$ orders
- Jumlah zona: $Z = 8$
- \dots.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
