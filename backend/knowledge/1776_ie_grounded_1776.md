# 1776 — Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders untuk Optimasi Biaya, Kesegaran Produk, dan Keberlanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy) merupakan salah satu subsektor manufaktur pangan dengan karakteristik operasional paling menantang di dunia. Berdasarkan Lead Researchers (2023) dalam jurnal *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), rantai pasok susu menghadapi tiga tantangan struktural simultan: (1) **perishability tinggi** karena produk susu memiliki umur simpan (shelf life) pendek berkisar 5–18 hari tergantung kategori (UHT, pasteurisasi, yogurt); (2) **broken cold chain risk** di mana pelanggaran suhu 2–8°C dapat menurunkan kualitas hingga 30% berdasarkan standar Codex Alimentarius; dan (3) **demand volatility** yang dipengaruhi oleh pola konsumsi musiman, preferensi produk fungsional, dan dinamika harga global. Konteks ini menjadikan desain jaringan rantai pasok susu sebagai masalah *facility location–allocation* yang tidak dapat diselesaikan dengan pendekatan biaya tunggal (*cost-only optimization*).

Urgensi ekonomi dari penelitian ini terletak pada fakta bahwa biaya logistik dapat mencapai 25–30% dari total biaya operasional perusahaan susu, dengan porsi terbesar pada distribusi dingin (*reefer transport*) dan inventory holding akibat penolakan produk (*spoilage rejection*). Lead Researchers (2023) berargumen bahwa keputusan *network design*—misalnya pembukaan pabrik pengolahan baru (*processing plant*), relokasi pusat distribusi, atau konsolidasi armada truk—memiliki *lock-in effect* selama 10–20 tahun, sehingga kesalahan dalam formulasi model dapat menimbulkan kerugian ratusan juta dolar AS. Studi ini mengusulkan kerangka multi-objektif yang secara simultan meminimalkan biaya total jaringan, meminimalkan tingkat kerusakan/kadaluwarsa produk, dan memaksimalkan tingkat layanan (*service level*) kepada retailer.

Kontribusi intelektual paper ini adalah integrasi **Benders Decomposition** (BD) sebagai mekanisme solusi eksak untuk masalah Mixed-Integer Linear Programming (MILP) berskala besar yang muncul ketika jaringan susu bersifat multi-echelon, multi-produk, dan multi-period. Pendekatan ini memperluas karya klasik Benders (1962) yang kini menjadi standar de facto untuk *supply chain network design* berskala industri. Pelengkap yang sangat relevan adalah paper Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) yang berjudul "Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions" (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)), di mana para penulis tersebut menerapkan BD pada *reverse logistics* dengan keputusan kualitas (return quality grading), memberikan bukti kuat bahwa metodologi BD bersifat portabel antar konteks forward dan reverse supply chain. Dengan demikian, kerangka yang dikembangkan Lead Researchers (2023) tidak hanya relevan untuk fresh dairy, tetapi juga untuk closed-loop dairy packaging回收 (pengembalian botol kaca/kemasan multilayer) yang kini menjadi agenda keberlanjutan global.

---

## 2. Landasan Teori & Formulasi Matematis

Model jaringan rantai pasok susu multi-objektif didefinisikan pada graf berarah $G = (N, A)$ di mana $N = S \cup P \cup D \cup R$ adalah himpunan node yang terdiri dari *supplier farms* ($S$), *processing plants* ($P$), *distribution centers* ($D$), dan *retail markets* ($R$). Himpunan produk $K$ merepresentasikan jenis produk susu (misalnya $K = \{\text{UHT milk, pasteurized milk, yogurt, cheese}\}$). Horizon perencanaan diskret $T$ dibagi menjadi periode mingguan atau bulanan.

**Parameter (input):**

$$\begin{aligned}
& f_p = \text{biaya tetap (fixed cost) membuka processing plant } p \in P \\
& c_{ij}^{kt} = \text{biaya transportasi satuan produk } k \in K \text{ dari node } i \text{ ke } j \text{ pada periode } t \\
& d_{rk}^{t} = \text{demand produk } k \text{ di retailer } r \text{ pada periode } t \\
& q_{k} = \text{umur simpan (shelf life) produk } k \text{ dalam hari} \\
& \alpha_k = \text{tingkat kerusakan intrinsik produk } k \text{ per hari} \\
& h_{jkt} = \text{biaya inventory holding satuan produk } k \text{ di node } j \text{ pada periode } t \\
& u_p^{kt} = \text{kapasitas processing plant } p \text{ untuk produk } k \text{ pada periode } t
\end{aligned}$$

**Variabel keputusan:**

$$\begin{aligned}
& y_p \in \{0,1\} \quad \text{(1 jika plant } p \text{ dibuka, 0 jika tidak)} \\
& x_{ij}^{kt} \geq 0 \quad \text{aliran produk } k \text{ dari } i \text{ ke } j \text{ pada periode } t \\
& I_{jkt} \geq 0 \quad \text{level inventori produk } k \text{ di node } j \text{ akhir periode } t \\
& w_{rkt} \geq 0 \quad \text{ unmet demand / shortage produk } k \text{ di retailer } r
\end{aligned}$$

**Fungsi Objektif 1 — Minimasi Total Biaya Jaringan (Economic Objective):**

$$\min Z_1 = \sum_{p \in P} f_p \, y_p + \sum_{(i,j) \in A} \sum_{k \in K} \sum_{t \in T} c_{ij}^{kt} \, x_{ij}^{kt} + \sum_{j \in N} \sum_{k \in K} \sum_{t \in T} h_{jkt} \, I_{jkt} + \sum_{r \in R} \sum_{k \in K} \sum_{t \in T} \pi_{rk} \, w_{rkt} \tag{1}$$

dengan $\pi_{rk}$ adalah *penalty cost* per unit shortage.

**Fungsi Objektif 2 — Minimasi Penurunan Kualitas/Freshness Loss (Quality Objective):**

$$\min Z_2 = \sum_{(i,j) \in A} \sum_{k \in K} \sum_{t \in T} \alpha_k \cdot \tau_{ij} \cdot x_{ij}^{kt} + \sum_{r \in R} \sum_{k \in K} \sum_{t \in T} \beta_k \cdot w_{rkt} \tag{2}$$

di mana $\tau_{ij}$ adalah waktu transit (dalam hari) dari node $i$ ke $j$, dan $\beta_k$ adalah koefisien diskon kualitas akibat unmet demand.

**Fungsi Objektif 3 — Maksimasi Service Level (Responsiveness Objective):**

$$\max Z_3 = \sum_{r \in R} \sum_{k \in K} \sum_{t \in T} \frac{d_{rk}^{t} - w_{rkt}}{d_{rk}^{t}} \tag{3}$$

**Constraints utama:**

$$\sum_{p \in P} y_p \geq 1 \quad \text{(setidaknya satu plant aktif)} \tag{4}$$

$$\sum_{j:(i,j) \in A} x_{ij}^{kt} - \sum_{j:(j,i) \in A} x_{ji}^{k,t-1} + I_{ikt-1} - I_{ikt} = \text{supply}_i^{kt} \quad \forall i, k, t \tag{5}$$

$$\sum_{i:(i,r) \in A} x_{ir}^{kt} + w_{rkt} = d_{rk}^{t} \quad \forall r, k, t \tag{6}$$

$$\sum_{k \in K} x_{pj}^{kt} \leq u_p^{kt} \, y_p \quad \forall p, j, k, t \tag{7}$$

Karena terjadi kontradiksi struktural antar ketiga objektif (solusi biaya minimum sering kali mengorbankan freshness), Lead Researchers (2023) menggunakan **$\epsilon$-constraint method** untuk membangun Pareto front, di mana dua objektif dimasukkan ke dalam constraints dan diselesaikan sebagai masalah MILP tunggal melalui weighted sum atau lexicographic minimization.

**Struktur Benders Decomposition (BD):**

Master Problem (MP) hanya memuat variabel integer $y_p$:

$$\min_{y \in \{0,1\}} \sum_{p} f_p y_p + \theta \tag{MP}$$

$$\text{s.t. } \theta \geq \pi^\top b - \Pi^\top y \quad \text{(optimality cuts dari subproblem)} \tag{8}$$

$$\theta \geq 0 \tag{9}$$

Subproblem (SP) adalah Linear Program kontinu untuk fixed $y^*$:

$$\min_{x, I, w \geq 0} c^\top x + h^\top I + \pi^\top w$$

$$\text{s.t. } Ax + By^* = b, \; Fx \leq g \tag{SP}$$

Dual SP: $\max_{\pi \leq 0, \Pi \geq 0} (\pi^\top b - \Pi^\top y^*)$. Jika SP feasible dan bounded, dual menghasilkan **optimality cut** (pers. 8); jika infeasible, penyelesaian **Phase-I** menghasilkan **feasibility cut**:

$$0 \geq \pi_f^\top b - \Pi_f^\top y \tag{10}$$

Iterasi BD berhenti ketika **lower bound** $Z_{LB}^{(MP)}$ dan **upper bound** $Z_{UB}^{(MP)} + Z^{(SP)}$ konvergen dengan gap $\leq \epsilon$ (umumnya $\epsilon = 10^{-3}$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Lead Researchers (2023) di lingkungan industri susu mengikuti **SOP 5-Tahap** berikut, yang selaras dengan metodologi operasional paper Yanzi Zhang et al. (2024) untuk reverse supply chain (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)):

**Tahap 1 — Data Acquisition & Preprocessing.** Pengumpulan data historis 24–36 bulan dari ERP (SAP S/4HANA atau Oracle SCM) mencakup demand, biaya, kapasitas, dan shelf life. Normalisasi satuan ke basis harian.

**Tahap 2 — Model Formulation.** Pembangunan MILP pada GAMS 25.1 atau CPLEX 22.1 dengan memanggil solver CPLEX untuk subproblem kontinu dan menggunakan callback Benders via GAMS/Cplex atau Pyomo.

**Tahap 3 — Algorithmic Pipeline.** Diagram alir sebagai berikut:

```
START → Initialize LB = -∞, UB = +∞, iter = 0
   ↓
Solve MP → get y*
   ↓
Solve SP(y*) → get (π*, x*, I*, w*)
   ↓
UB ← min(UB, f·y* + θ* + SP-cost)
   ↓
Generate cut from dual of SP → add to MP
   ↓
Gap = (UB - LB) / |UB| ≤ ε ?
   ├── NO → iter++; Solve updated MP; loop
   └── YES → SOLUTION y*, x*, I*, w* optimal → END
```

**Tahap 4 — Validation & Sensitivity Analysis.** Uji sensitivitas terhadap parameter $\alpha_k$, $\tau_{ij}$, dan demand. Validasi melalui *rolling horizon backtesting* (misalnya train 30 bulan, test 6 bulan).

**Tahap 5 — Deployment & Continuous Re-optimization.** Eksekusi model secara bulanan dengan *rolling horizon* dan integrasi ke *decision support system* (DSS) berbasis dashboard Power BI atau Tableau untuk eksekutif rantai pasok.

Standar industri yang relevan: ISO 22000 (food safety), ISO 28000 (supply chain security), GFSI Benchmark, dan FSSC 22000 v6 untuk cold-chain dairy. Integrasi BD dengan WMS (Warehouse Management System) dan TMS (Transport Management System) menjadi prasyarat agar solusi model benar-benar *operationally executable*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario Numerik:** Sebuah perusahaan dairy regional mengelola $|S|=10$ farms, memilih membuka plant dari $|P|=4$ kandidat, mendistribusikan ke $|D|=3$ distribution centers, melayani $|R|=8$ retailer dengan $|K|=2$ produk (UHT milk, yogurt). Horizon $T=4$ periode (bulan). Berdasarkan parameter pada Tabel 1:

**Tabel 1. Parameter Input Studi Kasus**

| Parameter | Nilai | Keterangan |
|---|---|---|