# 2017 — Optimisasi Robust Lot Sizing Kapasitas Terbatas Stokastik melalui Deep Reinforcement Learning (Proximal Policy Optimisation)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Using the proximal policy optimisation algorithm for solving the stochastic capacitated lot sizing problem
**Jurnal & Sitasi Utama:** Lotte van Hezewijk, Nico Dellaert, Tom Van Woensel (2022). *International Journal of Production Research*. DOI: [https://doi.org/10.1080/00207543.2022.2056540](https://doi.org/10.1080/00207543.2022.2056540)
**Sitasi Pendukung:** Razieh Mousavi, Mahdi Bashiri, Erfaneh Nikzad (2022). *Computers & Operations Research*. DOI: [https://doi.org/10.1016/j.cor.2022.105725](https://doi.org/10.1016/j.cor.2022.105725)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan produksi pada perusahaan manufaktur modern menghadapi tantangan struktur stokastik yang semakin kompleks: permintaan pelanggan yang berfluktuasi, kapasitas mesin yang terbatas, serta keharusan memenuhi Service Level Agreement (SLA) yang ketat. Van Hezewijk, Dellaert, dan Van Woensel (2022) dalam *International Journal of Production Research* (DOI: [10.1080/00207543.2022.2056540](https://doi.org/10.1080/00207543.2022.2056540)) secara eksplisit menyatakan bahwa *multi-item stochastic capacitated lot-sizing problem* (SCLSP) dengan permintaan stasioner merupakan permasalahan klasik yang menyentuh dua ranah strategis sekaligus, yaitu *inventory management* dan *production planning*. Dalam operasional nyata, keputusan lot sizing memengaruhi biaya *set-up*, biaya *holding*, dan biaya *backorder* yang secara kumulatif dapat menyerap 15–25% dari *cost of goods sold* pada industri proses seperti baja, kimia, dan makanan olahan.

Urgensi ekonomis permasalahan ini semakin nyata ketika kendala kapasitas (*capacity constraint*) dimasukkan. Tanpa kendala kapasitas, lot sizing dapat diselesaikan dengan *Wagner-Whitin algorithm* secara optimal pada horizon diskret; namun begitu kapasitas menjadi pembatas, kompleksitas masalah meningkat drastis menjadi *NP-hard*. Pada konteks praktis ini, pendekatan eksak seperti *Mixed Integer Programming* (MIP) atau *Dynamic Programming* (DP) hanya mampu menyelesaikan *instance* kecil, dan menjadi *intractable* ketika jumlah produk (item) melebihi 5–7 SKU dan horizon perencanaan melebihi 15 periode.

Kontribusi orisinal van Hezewijk et al. (2022) adalah menunjukkan bahwa algoritma *Proximal Policy Optimisation* (PPO) — sebuah varian *Deep Reinforcement Learning* (DRL) — mampu mendekati solusi optimal DP pada *instance* kecil dan secara konsisten mengungguli *benchmark heuristic* pada *instance* besar. Paralel dengan itu, Mousavi, Bashiri, dan Nikzad (2022) dalam *Computers & Operations Research* (DOI: [10.1016/j.cor.2022.105725](https://doi.org/10.1016/j.cor.2022.105725)) memperluas domain keputusan terintegrasi dengan menggabungkan lot sizing, *inventory*, dan *vehicle routing* untuk produk *perishable* yang memiliki *shelf life* terbatas — sebuah generalisasi yang menunjukkan arah riset masa depan menuju integrasi *production-inventory-routing* di bawah ketidakpastian permintaan.

Implikasi praktis bagi industri sangat signifikan: pada industri makanan dan minuman, lead time produksi dan shelf life mengharuskan *production planning* yang adaptif; pada industri baja dan otomotif, kapasitas *rolling mill* atau *assembly line* yang kaku menuntut lot sizing yang robust. Oleh karena itu, pendekatan berbasis *Deep RL* menjadi kandidat solusi generasi baru karena kemampuannya menangkap *complex non-linear dynamics* dan *learn* kebijakan jangka panjang tanpa harus mengeksplorasikan setiap state secara eksplisit.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik CLSP sebagai Fondasi

Lot sizing kapasitas terbatas (CLSP) klasik diformulasikan pada himpunan produk $I=\{1,\ldots,n\}$ dan horizon diskret $T=\{1,\ldots,H\}$. Parameter-parameter kunci meliputi:

- $d_{i,t}$: permintaan produk $i$ pada periode $t$
- $C_t$: kapasitas produksi tersedia pada periode $t$
- $h_i$: biaya *holding* per unit produk $i$ per periode
- $b_i$: biaya *backorder* per unit produk $i$ per periode  
- $s_i$: biaya *set-up* produk $i$
- $p_i$: waktu produksi per unit produk $i$ (atau kapasitas yang dikonsumsi)

Variabel keputusan:
- $q_{i,t} \geq 0$: kuantitas produksi produk $i$ pada periode $t$
- $x_{i,t} \in \{0,1\}$: indikator apakah produk $i$ di-*set-up* pada periode $t$
- $I_{i,t} \geq 0$: inventory level positif produk $i$ di akhir periode $t$
- $B_{i,t} \geq 0$: backorder level produk $i$ di akhir periode $t$

Fungsi tujuan deterministik adalah meminimalkan total biaya:

$$\min \; Z = \sum_{i \in I} \sum_{t \in T} \left( s_i \cdot x_{i,t} + h_i \cdot I_{i,t} + b_i \cdot B_{i,t} \right)$$

dengan kendala:

$$\sum_{i \in I} p_i \cdot q_{i,t} \leq C_t, \quad \forall t \in T \quad \text{(kendala kapasitas)}$$

$$I_{i,t} - B_{i,t} = I_{i,t-1} - B_{i,t-1} + q_{i,t} - d_{i,t}, \quad \forall i, t$$

$$q_{i,t} \leq M \cdot x_{i,t}, \quad q_{i,t} \geq 0, \quad x_{i,t} \in \{0,1\}$$

### 2.2 Ekstensi Stokastik dan Formulasi MDP

Pada versi stokastik yang dikaji van Hezewijk et al. (2022), permintaan $d_{i,t}$ menjadi *random variable* $\tilde{d}_{i,t}$ dengan distribusi stasioner yang diketahui. Permasalahan ini dimodelkan sebagai *Markov Decision Process* (MDP) dengan tupel $(\mathcal{S}, \mathcal{A}, P, R, \gamma)$:

- **State space** $\mathcal{S}$: vektor inventory posisi $IP_t = (I_{1,t}, B_{1,t}, \ldots, I_{n,t}, B_{n,t})$ ditambah informasi waktu $t$
- **Action space** $\mathcal{A}$: vektor produksi $\mathbf{q}_t = (q_{1,t}, \ldots, q_{n,t})$ yang memenuhi kendala kapasitas
- **Transition probability** $P(s_{t+1}|s_t, a_t)$: ditentukan oleh distribusi permintaan $\tilde{d}_{i,t}$
- **Reward** $R(s_t, a_t) = -C(s_t, a_t)$: biaya total periode yang dinegasikan
- **Discount factor** $\gamma \in [0,1)$

Tujuan agen RL adalah memaksimalkan *expected discounted return*:

$$J(\pi_\theta) = \mathbb{E}_{\tau \sim \pi_\theta} \left[ \sum_{t=0}^{H-1} \gamma^t R(s_t, a_t) \right]$$

dengan $\pi_\theta(a_t|s_t)$ adalah kebijakan parametrized oleh bobot neural network $\theta$.

### 2.3 Algoritma Proximal Policy Optimisation (PPO)

PPO yang diperkenalkan Schulman et al. (2017) dan diadopsi van Hezewijk et al. (2022) menggunakan *clipped surrogate objective* untuk menjaga *policy update* tetap konservatif:

$$L^{CLIP}(\theta) = \mathbb{E}_t \left[ \min\left( r_t(\theta) \hat{A}_t, \; \text{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) \hat{A}_t \right) \right]$$

dengan:

$$r_t(\theta) = \frac{\pi_\theta(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)}$$

adalah rasio probabilitas antara kebijakan baru dan lama, $\hat{A}_t$ adalah *advantage estimate* dari *Generalised Advantage Estimation* (GAE):

$$\hat{A}_t = \sum_{l=0}^{H-t} (\gamma \lambda)^l \delta_{t+l}, \quad \delta_t = R_t + \gamma V(s_{t+1}) - V(s_t)$$

dan $\epsilon$ adalah hyperparameter kliping (umumnya 0.1–0.3). Keunggulan PPO dibanding algoritma *policy gradient* on-policy lainnya adalah *sample efficiency* dan stabilitasnya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SCLSP dengan PPO mengikuti kerangka rekayasa berikut yang dapat diadopsi sebagai SOP di industri:

**Tahap 1 — Pemodelan Permintaan Stokastik.** Lakukan analisis time-series terhadap data historis permintaan; uji stasioneritas menggunakan *Augmented Dickey-Fuller* dan pilih distribusi parametrik (Poisson, Normal, atau Negative Binomial). Untuk data *long-tail*, gunakan pendekatan *empirical distribution* berdasarkan *kernel density estimation*.

**Tahap 2 — Estimasi Parameter Biaya.** Hitung biaya *set-up* $s_i$, biaya *holding* $h_i$, dan biaya *backorder* $b_i$ dari sistem akuntansi biaya. Pada industri *make-to-stock*, $b_i$ dapat diturunkan dari *fill rate* target menggunakan model *lost-sales* atau *backorder* sesuai kebijakan perusahaan.

**Tahap 3 — Desain Arsitektur Neural Network.** Van Hezewijk et al. (2022) menggunakan *actor-critic architecture* dengan *shared feature extractor*. *Actor* mengeluarkan distribusi tindakan; *Critic* berupa *value network* $V_\phi(s_t)$. Untuk permasalahan multi-item, gunakan *embedding layer* untuk merepresentasikan state per-item dan agregasi melalui *attention mechanism* atau *concatenation*.

**Tahap 4 — Training Loop.** Ikuti algoritma PPO dengan langkah: (a) *rollout* kebijakan pada lingkungan simulasi, (b) hitung *returns* dan *advantages* dengan GAE, (c) optimalkan $L^{CLIP}$ selama beberapa *epoch* (umumnya 4–10) dengan mini-batch, (d) update parameter $\theta$ dan $\phi$ menggunakan Adam optimizer.

**Tahap 5 — Validasi dengan Dynamic Programming.** Untuk *instance* kecil ($n \leq 4$, $H \leq 8$), benchmark solusi PPO terhadap DP optimal. Hitung *optimality gap*:

$$\text{Gap}_{\text{PPO}} = \frac{Z_{\text{PPO}} - Z_{\text{DP}}^*}{Z_{\text{DP}}^*} \times 100\%$$

**Tahap 6 — Deployment dan Monitoring.** Integrate *trained policy* ke dalam *MES* (Manufacturing Execution System). Lakukan *monitoring* berkala terhadap drift distribusi permintaan; retrain policy setiap kuartal atau saat *Kullback-Leibler divergence* antara distribusi aktual dan training melebihi threshold tertentu.

**Tahap 7 — Eskalasi ke Masalah Terintegrasi.** Untuk rantai pasok yang melibatkan distribusi produk *perishable*, integrasikan modul produksi dengan keputusan routing seperti framework Mousavi et al. (2022), yang menggabungkan keputusan lot sizing, vehicle routing, dan freshness decay constraints.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus Hipotetis — Pabrik Cat Pelapis (Coatings Plant).** Pertimbangkan fasilitas produksi yang memproduksi 3 jenis cat: *primer*, *basecoat*, dan *topcoat