# 2004 — Strategi Pemilihan Solusi Penjadwalan Automated Guided Vehicles (AGV) dalam Produksi Berbasis Machine Learning

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Choosing Solution Strategies for Scheduling Automated Guided Vehicles in Production Using Machine Learning
**Jurnal & Sitasi Utama:** Felicia Schweitzer, Günter Bitsch, Louis Louw (2023). *Applied Sciences*. DOI: [https://doi.org/10.3390/app13020806](https://doi.org/10.3390/app13020806)
**Sitasi Pendukung:** Diego Navarro-Cabrera, Niceto Rafael Luque Sola, Ros Vidal, Eduardo (2022). *Zenodo (CERN European Organization for Nuclear Research)*. DOI: [https://doi.org/10.5281/zenodo.7575244](https://doi.org/10.5281/zenodo.7575244)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur menuju paradigma *Smart Manufacturing* dan *Industry 4.0* telah memposisikan sistem logistik internal sebagai salah satu determinan strategis produktivitas. Schweitzer, Bitsch, dan Louw (2023) dalam makalahnya yang diterbitkan di jurnal *Applied Sciences* menegaskan bahwa *Automated Guided Vehicles* (AGV) merupakan elemen esensial pada sistem produksi modern karena potensinya dalam meningkatkan fleksibilitas produksi, mengurangi *work-in-process* (WIP), dan menekan biaya operasional transportasi material (Schweitzer *et al.*, 2023, DOI: [10.3390/app13020806](https://doi.org/10.3390/app13020806)). Lebih jauh, kualitas penjadwalan AGV secara langsung menentukan *makespan* total sistem, yang merupakan *key performance indicator* (KPI) operasional paling krusial dalam lingkungan *high-mix low-volume* (HMLV) maupun *low-mix high-volume* (LMHV).

Secara empiris, Schweitzer *et al.* (2023) mencatat bahwa algoritma penjadwalan tradisional — seperti *rule-based dispatching* (FCFS, SPT, EDD) dan *metaheuristics* (genetic algorithm, simulated annealing) — sering kali menunjukkan degradasi performa yang signifikan ketika terjadi perubahan kondisi lingkungan, misalnya gangguan jalur, *battery low* alert, atau *re-routing* akibat *obstacle avoidance*. Variasi *instance problem* yang tinggi membuat tidak ada satu pun algoritma yang dapat menjadi *universal best solver* (No Free Lunch Theorem, Wolpert & Macready). Inilah urgensi pemilihan strategi solusi secara adaptif berbasis karakteristik instansiasi masalah nyata.

Konteks ini diperkuat oleh laporan Navarro-Cabrera, Luque Sola, dan Ros Vidal (2022) yang mendokumentasikan *Requirements for Advanced Motion Control* — sebuah deliverable kontrol lapis kedua (*Layer 2 Control*) yang menekankan kebutuhan akan arsitektur kontrol modular, deterministik, dan *real-time capable* untuk sistem bergerak otonom (Navarro-Cabrera *et al.*, 2022, DOI: [10.5281/zenodo.7575244](https://doi.org/10.5281/zenodo.7575244)). Kedua literatur ini secara konvergen menunjukkan bahwa integrasi *machine learning* (ML) sebagai *meta-decision layer* di atas algoritma penjadwalan klasik menjadi semakin relevan dalam lanskap industri 2023–2026.

Secara ekonomi, Schweitzer *et al.* (2023) memperkirakan potensi penghematan biaya produksi sebesar 8–18% melalui optimasi *makespan* pada sistem AGV dengan 20–50 unit armada. Angka ini sejalan dengan data McKinsey (2022) yang menyebutkan bahwa *internal logistics* menghabiskan 20–30% dari total biaya produksi di industri otomotif, elektronik, dan *food & beverage*. Oleh karena itu, rekayasa sistem penjadwalan AGV bukan sekadar persoalan algoritmik, melainkan investasi strategis dengan *return on investment* (ROI) yang terukur.

## 2. Landasan Teori & Formulasi Matematis

Penjadwalan AGV dapat diformulasikan sebagai *Job Shop Scheduling Problem* (JSSP) yang diperluas dengan dimensi *routing* dan *conflict resolution*. Schweitzer *et al.* (2023) memodelkan masalah ini sebagai graf berarah $G = (V, E)$ di mana $V$ merepresentasikan *node* (stasiun muat, bongkar, dan persimpangan) dan $E$ merepresentasikan *edge* (segmen jalur AGV). Setiap job $j \in J$ memiliki atribut $(\rho_j, d_j, q_j)$ berturut-turut: *release time*, *due date*, dan *quantity* material yang diangkut.

**Fungsi Objektif Utama — Minimasi Makespan:**

$$C_{\max} = \min \max_{j \in J} C_j \tag{1}$$

dengan $C_j$ adalah *completion time* job ke-$j$. Alternatifnya, untuk sistem dengan bobot prioritas $w_j$:

$$\min \sum_{j=1}^{n} w_j \cdot C_j \quad \text{(Total Weighted Completion Time)} \tag{2}$$

**Konstrain Jalur Bebas Konflik (*Conflict-Free Routing*):**

Untuk setiap pasang AGV $a_k$ dan $a_l$ yang menempati edge $(u,v) \in E$ secara bersamaan:

$$t_{a_k}^{(u,v)} + \tau_{transit} \leq t_{a_l}^{(u,v)} \quad \lor \quad t_{a_l}^{(u,v)} + \tau_{transit} \leq t_{a_k}^{(u,v)} \tag{3}$$

dengan $\tau_{transit}$ adalah waktu tempuh edge tersebut. Pelanggaran terhadap konstrain ini menghasilkan *deadlock* atau *collision* yang menurunkan *throughput* sistem.

**Formulasi Meta-Learning untuk Pemilihan Algoritma:**

Schweitzer *et al.* (2023) mengusulkan *feature vector* $\mathbf{x}_i \in \mathbb{R}^m$ yang mencirikan instansiasi masalah:

$$\mathbf{x}_i = \left( n, m_{agv}, \rho_{cv}, \bar{d}, \sigma_d, \eta_{conflict}, \beta_{urgency} \right) \tag{4}$$

dengan:
- $n$ = jumlah job,
- $m_{agv}$ = jumlah AGV,
- $\rho_{cv}$ = *coefficient of variation* release time,
- $\bar{d}$ = rata-rata *due date*,
- $\sigma_d$ = simpangan baku *due date*,
- $\eta_{conflict}$ = estimasi densitas konflik jalur,
- $\beta_{urgency}$ = rasio job *tardiness-prone*.

Model klasifikasi ML memetakan vektor fitur ke algoritma terbaik:

$$\hat{a}^* = \arg\max_{a \in \mathcal{A}} P(a \mid \mathbf{x}_i; \boldsymbol{\theta}) \tag{5}$$

dengan $\mathcal{A} = \{a_1, a_2, \dots, a_K\}$ adalah *portfolio* algoritma kandidat (misal: FCFS, SPT, GA, SA, ACO, CP-SAT) dan $\boldsymbol{\theta}$ adalah parameter model yang dipelajari dari data historis.

**Metrik Kinerja ML Selector:**

$$F_1^{selector} = 2 \cdot \frac{P_{selector} \cdot R_{selector}}{P_{selector} + R_{selector}} \tag{6}$$

di mana presisi $P_{selector}$ mengukur proporsi rekomendasi algoritma yang benar-benar optimal, dan *recall* $R_{selector}$ mengukur kemampuan selector mengidentifikasi semua instansiasi yang seharusnya menggunakan algoritma tertentu.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *ML-based algorithm selection* untuk penjadwalan AGV mengikuti kerangka *Cross-Industry Standard Process for Data Mining* (CRISP-DM) yang diadaptasi Schweitzer *et al.* (2023) ke konteks *manufacturing scheduling*. Diagram alir berikut merepresentasikan SOP berlapis (*tiered architecture*):

**Tahap 1 — Pengumpulan & Pelabelan Data Historis.** Kumpulkan minimal 5.000 instansiasi penjadwalan historis selama 6–12 bulan. Setiap instansiasi diberi label algoritma terbaik berdasarkan *optimality gap* terendah dari *offline benchmarking* menggunakan *exact solver* (mixed-integer programming / CP-SAT) atau *lower bound* teoretis.

**Tahap 2 — Ekstraksi Fitur Instansiasi.** Hitung vektor fitur $\mathbf{x}_i$ sesuai Persamaan (4). Fitur tambahan yang disarankan Schweitzer *et al.* (2023) meliputi *entropy* job sequence, *skewness* due date, dan *spatial density* node kunjungan.

**Tahap 3 — Pelatihan & Validasi Model.** Gunakan *stratified k-fold cross-validation* dengan $k = 10$. Kandidat model: *Random Forest*, *Gradient Boosting* (XGBoost / LightGBM), *Multi-layer Perceptron*, dan *k-Nearest Neighbors*. Seleksi model berdasarkan $F_1^{selector}$ dan *inference latency* $\leq 50$ ms.

**Tahap 4 — Integrasi dengan Control Layer.** Arsitektur modular mengikuti kerangka Navarro-Cabrera *et al.* (2022) yang mendefinisikan *Layer 2 Control* sebagai *abstraction layer* antara *field devices* (AGV, PLC, sensor) dan *Manufacturing Execution System* (MES). Komponen-komponen kunci:

```
┌─────────────────────────────────────────┐
│  Layer 3: ERP / Production Planning     │
├─────────────────────────────────────────┤
│  Layer 2: ML Selector + Scheduler Core  │  ← Decision Layer
├─────────────────────────────────────────┤
│