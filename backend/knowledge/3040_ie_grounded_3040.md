# 3040 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu Menggunakan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena sifat intrinsik produknya yang mudah rusak (perishable) dan memiliki umur simpan terbatas (Lead Researchers, 2023). Berbeda dengan produk manufaktur konvensional, susu pasteurisasi memiliki window of freshness yang pendek, berkisar antara 7 hingga 21 hari pada suhu refrigerasi 2–4°C, sedangkan produk turunan seperti yoghurt dan keju memiliki dinamika degradasi kualitas yang berbeda. Kompleksitas ini diperparah oleh struktur jaringan rantai pasok susu yang bersifat *multi-echelon*, mulai dari peternakan sapi perah (farm gate), titik pengumpulan (collection centers), fasilitas pengolahan (processing plants), pusat distribusi (distribution centers), hingga outlet ritel. Setiap lapisan jaringan ini menambah variabilitas permintaan, waktu tempuh, dan risiko kualitas yang harus dikelola secara simultan (Lead Researchers, 2023).

Urgensi pengembangan kerangka optimisasi multi-objektif untuk rantai pasok susu semakin nyata ketika mempertimbangkan tiga tekanan operasional yang konvergen. Pertama, tekanan ekonomis berupa margin keuntungan yang tipis pada industri dairy (rata-rata 3–7% secara global) yang mengharuskan efisiensi biaya logistik dan persediaan dimaksimakan. Kedua, tekanan regulasi terkait food safety dan traceability yang ditandai dengan penerapan Hazard Analysis Critical Control Point (HACCP), ISO 22000, serta standar nasional SNI 01-3951-1995 untuk susu pasteurisasi. Ketiga, tekanan konsumen modern yang menuntut produk dengan freshness terjamin, provenance yang dapat ditelusuri, dan jejak karbon rendah, yang mendorong integrasi Environmental, Social, and Governance (ESG) ke dalam keputusan desain jaringan (Lead Researchers, 2023, DOI: 10.23977/ieim.2023.060509).

Kontribusi spesifik paper Lead Researchers (2023) terletak pada perumusan kerangka *Mixed-Integer Linear Programming* (MILP) multi-objektif yang diselesaikan melalui *Benders Decomposition* (BD). Teknik dekomposisi ini dipilih karena struktur masalah rantai pasok susu—dengan variabel keputusan lokasi fasilitas, alokasi kapasitas, dan routing—menghasilkan ruang solusi yang sangat besar sehingga metode *branch-and-bound* murni menjadi tidak efisien secara komputasional. Pendekatan BD memisahkan masalah menjadi *master problem* yang mengelola keputusan investasi strategis dan *subproblem* yang mengelola keputusan operasional taktis-operasional, sehingga waktu komputasi berkurang secara signifikan (Lead Researchers, 2023). Pendekatan ini juga memiliki relevansi lintas-sektor, seperti yang ditunjukkan oleh Zhang, Li, & Ren (2024, DOI: 10.2139/ssrn.5063437) yang menerapkan Benders Decomposition pada jaringan reverse supply chain dengan keputusan kualitas, membuktikan bahwa metodologi ini extensible untuk konteks rantai pasok yang lebih luas termasuk pemulihan produk di akhir siklus hidupnya.

Dari perspektif rekayasa sistem industri, permasalahan ini merupakan *ill-structured problem* yang membutuhkan keputusan di bawah ketidakpastian ganda: ketidakpastian permintaan pasar (demand uncertainty) dan ketidakpastian kualitas susu di hulu (supply quality uncertainty). Fungsi tujuan multi-objektif biasanya mencakup minimisasi total cost, maksimisasi tingkat kesegaran produk, dan minimisasi emisi karbon. Ketiga objektif ini sering bersifat *conflicting*, sehingga pendekatan *Pareto-optimal front* melalui *ε-constraint method* atau *weighted sum* menjadi krusial (Lead Researchers, 2023).

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis yang dibangun dalam Lead Researchers (2023) mengikuti arsitektur dua tingkat Benders Decomposition. Pada tingkat pertama (*master problem*), keputusan investasi lokasi dan kapasitas fasilitas dimodelkan sebagai variabel biner dan kontinu, sementara pada tingkat kedua (*subproblem*), keputusan alokasi aliran dan routing dimodelkan untuk verifikasi feasibilitas dan optimalitas. Formulasi lengkap dapat dinyatakan sebagai berikut.

### 2.1 Notasi Model

Definisikan himpunan:
- $I$: himpunan peternakan (farm), $i \in I$
- $J$: himpunan pusat pengumpulan, $j \in J$
- $K$: himpunan pabrik pengolahan, $k \in K$
- $L$: himpunan pusat distribusi, $l \in L$
- $M$: himpunan zona permintaan (ritel), $m \in M$
- $P$: himpunan jenis produk susu (susu segar, yoghurt, keju), $p \in P$

Parameter:
- $f_k$: biaya tetap pembangunan fasilitas di $k$
- $c_{ij}^{cp}$: biaya transportasi per unit dari $i$ ke $j$
- $d_m$: permintaan rata-rata di zona $m$
- $\alpha_p$: tingkat degradasi kualitas produk $p$ per satuan waktu
- $T_{ij}$: waktu tempuh dari $i$ ke $j$

Variabel keputusan:
- $y_k \in \{0,1\}$: 1 jika fasilitas $k$ dibuka
- $x_{ij}$: alokasi aliran dari $i$ ke $j$
- $z_{klm}$: aliran produk dari $k$ ke $m$ melalui $l$
- $Q_p$: indeks kualitas produk $p$ saat sampai di konsumen

### 2.2 Fungsi Tujuan Multi-Objektif

Objektif pertama adalah minimisasi total biaya logistik dan investasi:

$$\min Z_1 = \sum_{k \in K} f_k y_k + \sum_{i \in I}\sum_{j \in J} c_{ij}^{cp} x_{ij} + \sum_{k \in K}\sum_{l \in L}\sum_{m \in M} c_{klm}^{tr} z_{klm}$$

Objektif kedua adalah maksimisasi kesegaran produk yang sampai ke konsumen, diformulasikan sebagai:

$$\max Z_2 = \sum_{p \in P}\sum_{m \in M} w_p \cdot Q_{p,m}$$

di mana $Q_{p,m} = Q_{p,m}^0 \cdot e^{-\alpha_p \sum_{k,l} \tau_{klm} z_{klm}/\sum_{k,l} z_{klm}}$ dengan $\tau_{klm}$ adalah total waktu transit dari pabrik ke ritel. Untuk keperluan linearisasi, digunakan aproksimasi piecewise linear yang diusulkan oleh Lead Researchers (2023).

Objektif ketiga adalah minimisasi emisi karbon:

$$\min Z_3 = \sum_{e \in E} \beta_e \cdot CO_{2,e}$$

Karena ketiga objektif bersifat *non-commensurable*, diterapkan *ε-constraint method*:

$$\min Z_1 \quad \text{subject to} \quad Z_2 \geq \epsilon_2, \quad Z_3 \leq \epsilon_3$$

### 2.3 Kendala (Constraints)

Kendala kapasitas fasilitas:

$$\sum_{i \in I} x_{ij} \leq Cap_j y_j, \quad \forall j \in J$$

Kendala keseimbangan aliran (*flow balance*):

$$\sum_{j \in J} x_{ij} = S_i, \quad \forall i \in I$$

$$\sum_{k \in K} z_{klm} = d_m, \quad \forall m \in M, l \in L$$

Kendala kualitas minimum:

$$Q_{p,m} \geq Q_{p}^{min}, \quad \forall p \in P, m \in M$$

Kendala non-negativitas: $x_{ij}, z_{klm} \geq 0$, dan $y_k \in \{0,1\}$.

### 2.4 Benders Decomposition

Benders Decomposition yang digunakan memisahkan variabel biner dan kontinu. *Master problem* (MP) pada iterasi $n$ adalah:

$$\min \sum_{k \in K} f_k y_k + \theta$$

dengan $\theta \geq$ cut optimal yang dibangkitkan dari *subproblem*:

$$\theta \geq \pi^T (h - T y^n) + \sum_{(i,j)} u_{ij} (Cap_j y_j - \sum_i x_{ij})$$

Algoritma iteratif berhenti ketika *gap* relatif antara upper bound dan lower bound kurang dari $\epsilon = 10^{-4}$ (Lead Researchers, 2023).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Lead Researchers (2023) dalam konteks industri memerlukan SOP yang sistematis, mencakup tahapan berikut:

**Tahap 1: Akuisisi Data dan Karakterisasi Jaringan.** Data historis permintaan ritel selama 12 bulan terakhir dikumpulkan dengan granularity harian. Data kualitas susu diukur menggunakan *lactic acid bacteria count* dan *somatic cell count* sesuai SNI 3951:2017 tentang standar mutu susu. Data geospasial lokasi fasilitas, kapasitas armada refrigerasi, dan profil suhu运输 dicatat dalam *Cold Chain Management System* (CCMS).

**Tahap 2: Estimasi Parameter Stokastik.** Parameter permintaan $d_m$ dimodelkan sebagai distribusi normal truncated $d_m \sim \mathcal{N}(\mu_m, \sigma_m^2)$ dengan confidence interval 95%. Tingkat degradasi kualitas $\alpha_p$ dikalibrasi menggunakan *accelerated shelf-life testing* (ASLT) pada suhu 4°C, 8°C, dan 12°C.

**Tahap 3: Formulasi Model dan Validasi.** Model diimplementasikan dalam bahasa pemodelan *General Algebraic Modeling System* (GAMS) versi 24.5 atau Python dengan library *Pyomo*, kemudian divalidasi terhadap kasus benchmark kecil untuk memastikan konsistensi dengan solusi *full-space MILP* solver CPLEX.

**Tahap 4: Iterasi Benders.** Algoritma Benders dijalankan dengan *warm-start* dari solusi relaxed-LP. Setiap iterasi menghasilkan *feasibility cut* atau *optimality cut* yang ditambahkan ke MP. Solver CPLEX atau Gurobi digunakan dengan time limit 3600 detik.

**Tahap 5: Generasi Pareto Front.** Setelah konvergensi BD tercapai, parameter $\epsilon_2$ dan $\epsilon_3$ divariasikan secara grid untuk menghasilkan *Pareto-optimal front*. Decision-maker (DM) kemudian memilih solusi kompromi menggunakan *Technique for Order of Preference by Similarity to Ideal Solution* (TOPSIS).

**Tahap 6: Implementasi dan Monitoring.** Solusi terpilih diterjemahkan menjadi rencana operasional mingguan yang dimonitor melalui *dashboard* Key Performance Indicators (KPI): on-time delivery rate, product freshness index, dan carbon footprint per liter susu yang didistribusikan.

Standar operasional yang relevan termasuk ISO 28000:2007 untuk *Supply Chain Security Management*, ISO 14001:2015 untuk *Environmental Management System*, serta ISO 22000:2018 untuk *Food Safety Management*. Integrasi ketiga standar ini memastikan bahwa solusi optimal Lead Researchers (2023) compliant terhadap kerangka regulasi global.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif, perhatikan studi kasus jaringan dairy dengan parameter berikut:

**Data Permintaan:** Terdapat 5 zona ritel ($M = 5$) dengan permintaan harian: $d_1 = 1200$ liter, $d_2 = 950$ liter, $d_3 = 1500$ liter, $d_4 = 800$ liter, $d_5 = 1100$ liter. Total permintaan harian $D_{total} = 5550$ liter/hari.

**Data Biaya Transportasi:** Dari pabrik $k_1$ ke distribution center $l_1, l_2$: $c_{klm}^{tr}$ bervariasi Rp 250–450 per liter. Biaya tetap pembangunan pusat distribusi $f_l = $ Rp 2,5 miliar dengan kapasitas 2000 liter/hari.

**Kasus Numerik:** Misalkan dipilih skenario kebijakan dimana decision-maker menetapkan batas bawah kesegaran $Z_2 \geq 0.85$ dan batas atas emisi karbon $Z_3 \leq 250$ kg CO₂/hari. Fungsi tujuan menjadi:

$$\min Z_1 = \sum_{k,l,m} c_{klm}^{tr} z_{klm} + \sum_l f_l y_l$$

**Step 1 — Penugasan Kapasitas:** Dengan 2 pusat distribusi masing-masing berkapasitas 2000 liter, total kapasitas $4000 < 5550$. Diperlukan membuka 3 pusat distribusi, namun asumsikan bahwa pusat ketiga $l_3$ menambah biaya tetap Rp 3 miliar. Total biaya investasi tetap $= 2(2{,}5) + 3 = 8$ miliar.

**Step 2 — Optimisasi Aliran:** Solusi optimal LP relaxation dengan asumsi 3 DC dibuka adalah alokasi sebagai berikut:
- DC $l_1$ melayani ritel $m_1, m_2$: $1200 + 950 = 2150$ liter (overload 150 liter)
- DC $l_2$ melayani ritel $m_3, m_4$: $1500