# 1749 — Strategi Rantai Pasok Tertutup (Closed-Loop Supply Chain) untuk Pemanfaatan Bertingkat (Echelon Utilization) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** *Closed-Loop Supply Chain Strategy Considering Retired Power Battery Echelon Utilization and Recycling Remanufacturing*  
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)  
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi energi global yang bergerak masif menuju elektrifikasi transportasi telah menciptakan tantangan sistemik baru dalam domain Teknik Industri, namely: bagaimana mengelola *end-of-life* (EoL) baterai lithium-ion (LiB) kendaraan listrik (EV) dalam skala jutaan unit pada dekade 2030–2040. Berdasarkan proyeksi International Energy Agency (IEA) yang dirujuk oleh JIANG & TANG (2025), volume baterai EV bekas (*retired EV batteries*) global diproyeksikan melebihi **12 juta ton pada tahun 2030**, dengan laju pertumbuhan compound annual growth rate (CAGR)回收回收回收超过 22% per tahun. Fenomena ini menciptakan *reverse logistics* problem dengan kompleksitas yang secara fundamental berbeda dari CLSC konvensional, karena baterai bekas bukan sekadar produk gagal yang akan di-*scrap*, melainkan *value-bearing asset* dengan potensi utilisasi hierarkis.

JIANG & TANG (2025) dalam naskah mereka yang diterbitkan pada *Proceedings of the 14th International Conference on Logistics and Systems Engineering* menegaskan urgensi pengembangan strategi CLSC yang secara eksplisit mempertimbangkan **dua jalur pasca-konsumsi**: (1) **echelon utilization** — aplikasi baterai retired pada *second-life* use case seperti *stationary energy storage systems* (ESS), *backup power*, atau *microgrid*, di mana baterai dengan State of Health (SoH) 70–80% masih memiliki nilai fungsional residual; dan (2) **recycling remanufacturing** — ekstraksi material kritis (Li, Co, Ni, Mn) melalui proses hidrometalurgi/pirometalurgi untuk dikembalikan ke *upstream cell manufacturing*. Pilihan antara kedua jalur ini (atau kombinasi hybrid) menciptakan keputusan alokasi kapasitas yang kompleks dan membutuhkan formulasi optimasi multi-fase.

Di sisi paralel, Shin, Kim, & Jeong (2024) menyoroti bahwa CLSC baterai retired menghadapi **volatilitas permintaan dan pengembalian yang ekstrem** — ketidakpastian (*uncertainty*) ini mencakup fluktuasi harga material kritis di pasar London Metal Exchange (LME), ketidakpastian kualitas baterai yang dikembalikan (*heterogeneous SoH distribution*), serta *policy uncertainty* (misalnya perubahan regulasi Extended Producer Responsibility/EPR di berbagai yurisdiksi). Mereka mengusulkan pendekatan *robust optimization* dengan *budget-of-uncertainty* set untuk menghasilkan keputusan jaringan yang *immunized* terhadap worst-case scenario. Sinergi kedua paper ini memberikan kerangka metodologis yang komprehensif: paper pertama fokus pada formulasi strategi ekonomis-teknis, sementara paper kedua menambahkan *robustness layer* terhadap ketidakpastian parametrik.

Aspek ekonomi materialnya sangat signifikan. Harga kobalt (Co) per tahun 2024 mencapai **USD 33.000/ton**, lithium karbonat **USD 14.500/ton**, dan nikel **USD 17.000/ton** — menjadikan baterai retired sebagai *urban mine* bernilai triliunan rupiah secara agregat. Namun, tanpa desain CLSC yang optimal, nilai ini akan hilang sebagai *wasted externality*. Studi JIANG & TANG (2025) menunjukkan bahwa strategi CLSC yang baik dapat menurunkan total *life-cycle cost* (LCC) sistem baterai hingga **18–24%** dibandingkan *business-as-usual* (linear take-make-dispose), sekaligus mereduksi emisi CO₂ *cradle-to-grave* sebesar **31–38%**.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan CLSC Multi-Echelon

Model JIANG & TANG (2025) membangun jaringan CLSC dengan *node* berikut:

- **Manufacturer (M)**: produsen sel baterai baru
- **Collection Centers (C)**: titik pengumpulan baterai retired
- **Testing & Sorting Facility (T)**: fasilitas inspeksi SoH
- **Echelon Utilization Hub (E)**: fasilitas repurposing untuk second-life
- **Recycling Plant (R)**: fasilitas daur ulang material
- **Remanufacturing Plant (RM)**: fasilitas rebuild sel bekas menjadi modul baru
- **Second-life Customer (SC)**: pengguna ESS/backup
- **Material Market (MM)**: pasar jual beli material daur ulang

### 2.2 Notasi Set, Parameter, dan Variabel Keputusan

**Sets:**
- $I$: himpunan collection center, $i \in I$
- $J$: himpunan facility (testing/echelon/recycling), $j \in J$
- $K$: himpunan second-life application, $k \in K$
- $L$: himpunan lokasi pasar, $l \in L$

**Parameters:**
- $Q$: total baterai retired yang dikembalikan per periode (unit)
- $SoH_i$: distribusi State of Health baterai yang dikembalikan, $SoH_i \sim \mathcal{N}(\mu_{SoH}, \sigma_{SoH}^2)$
- $c_{ij}^{trans}$: biaya транспortasi dari $i$ ke $j$ per unit (USD/unit)
- $c_j^{proc}$: biaya processing di facility $j$
- $p_k$: harga jual aplikasi second-life $k$ (USD/kWh kapasitas)
- $r_m$: harga jual material $m$ (Li, Co, Ni) per kg
- $\alpha$: recovery rate material, $\alpha_m \in [0.85, 0.95]$
- $\eta_k$: efisiensi konversi kapasitas untuk aplikasi $k$, $\eta_k = \frac{SoH_{threshold}}{SoH_i}$

**Binary Variables:**
- $x_{ijk} \in \{0,1\}$: 1 jika baterai dari $i$ dialokasikan ke $j$ untuk aplikasi $k$
- $y_{ij} \in \{0,1\}$: 1 jika baterai dari $i$ dikirim ke recycling $j$
- $z_j \in \{0,1\}$: 1 jika facility $j$ dibuka (*facility location decision*)

**Continuous Variables:**
- $q_{ijk} \geq 0$: jumlah baterai (unit) yang dialokasikan
- $w_m \geq 0$: jumlah material $m$ yang dihasilkan (kg)
- $\pi_l \geq 0$: jumlah material yang dijual ke pasar $l$

### 2.3 Objective Function: Mixed Integer Linear Programming (MILP)

JIANG & TANG (2025) memformulasikan objective sebagai maksimisasi **Total Profit** (net present value):

$$\max Z = \underbrace{\sum_{i \in I}\sum_{j \in J}\sum_{k \in K} p_k \cdot \eta_k \cdot q_{ijk}}_{\text{Echelon Revenue}} + \underbrace{\sum_{m \in M}\sum_{l \in L} r_m \cdot w_{ml}}_{\text{Recycled Material Revenue}} - \underbrace{\sum_{i \in I}\sum_{j \in J} c_{ij}^{trans} \cdot (q_{ij} + q_{ij}^{R})}_{\text{Transport Cost}}$$

$$- \underbrace{\sum_{j \in J} c_j^{proc} \cdot z_j + \sum_{j \in J} c_j^{op} \cdot Q_j}_{\text{Processing \& Operating Cost}} - \underbrace{\sum_{i \in I} c_i^{coll} \cdot Q_i}_{\text{Collection Cost}}$$

### 2.4 State of Health (SoH) Constraint & Echelon Threshold

Baterai retired hanya eligible untuk echelon utilization jika SoH-nya melebihi threshold aplikasi:

$$\sum_{k \in K} x_{ijk} \leq \mathbb{1}_{\{SoH_i \geq SoH_k^{min}\}} \quad \forall i \in I, j \in J$$

$$q_{ijk} \leq Q \cdot \mathbb{P}(SoH \geq SoH_k^{min}) \cdot x_{ijk} \quad \forall i,j,k$$

dimana $\mathbb{P}(SoH \geq SoH_k^{min})$ adalah probabilitas kumulatif dari distribusi SoH:

$$\mathbb{P}(SoH \geq \tau) = \int_{\tau}^{100} \frac{1}{\sigma_{SoH}\sqrt{2\pi}} \exp\left(-\frac{(s - \mu_{SoH})^2}{2\sigma_{SoH}^2}\right) ds$$

### 2.5 Capacity & Flow Balance Constraints

$$\sum_{j \in J} \sum_{k \in K} q_{ijk} + \sum_{j \in J} q_{ij}^{R} = Q_i \quad \forall i \in I \quad \text{(flow conservation)}$$

$$\sum_{i \in I} q_{ijk} \leq Cap_j \cdot z_j \quad \forall j \in J, k \in K \quad \text{(facility capacity)}$$

$$\sum_{m \in M} w_{ml} = \alpha_m \cdot \sum_{i \in I}\sum_{j \in J} q_{ij}^{R} \cdot \rho_{cell} \cdot \beta_m \quad \forall l \in L$$

dimana $\rho_{cell}$ adalah berat rata-rata sel baterai (≈ 0.4 kg/cell untuk pouch cell 50Ah) dan $\beta_m$ adalah *mass fraction* material $m$ dalam sel.

### 2.6 Robust Optimization Layer (Shin, Kim, Jeong, 2024)

Paper kedua menambahkan *uncertainty set* polihedral:

$$\mathcal{U} = \left\{ \tilde{\xi} : \tilde{\xi} = \xi^0 + \sum_{s \in S} \Gamma_s \cdot \eta_s, \; |\eta_s| \leq 1, \; \sum_{s \in S} |\eta_s| \leq \Gamma \right\}$$

dimana $\tilde{\xi}$ merepresentasikan parameter tidak pasti (demand, harga material, return rate) dan $\Gamma$ adalah *budget of uncertainty* (0 ≤ Γ ≤ |S|). Formulasi robust counterpart:

$$\max_{x,y} \min_{\tilde{\xi} \in \mathcal{U}} \; c^T x + d^T y$$

 diubah menjadi MILP equivalent dengan引入 variabel auxiliary $\zeta_s$ untuk setiap skenario:

$$\max \; c^T x + \xi^{0,T} y - \sum_{s \in S} \Gamma_s \zeta_s$$
$$\text{s.t.} \quad d_s^T y - \zeta_s \leq 0, \quad \zeta_s \geq 0 \quad \forall s$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi CLSC Baterai Bekas

JIANG & TANG (2025) menetapkan SOP 7-tahap berikut untuk implementasi industri:

```
[Tahap 1] Reverse Logistics Trigger
     ↓ (EV battery SoH < 80%)
[Tahap 2] Collection via OEM/dealer/3PL
     ↓ (transport ke Collection Center)
[Tahap 3] Diagnostic & Sorting (SoH test, impedansi, kapasitas)
     ↓ (split decision)
     ├── SoH ≥ 70% → [Tahap 4A: Echelon Repurposing]
     └── SoH < 70% → [Tahap 4B: Direct Recycling]
[Tahap 4A] Repacking → Testing Modul → Aplikasi Second-life
[Tahap 4B] Disassembly → Shredding → Hydrometallurgy → Material Recovery
     ↓
[Tahap 5] Quality Gate (ISO/SAE compliance: UL 1974, IEC 62933)
     ↓
[Tahap 6] Distribution ke Second-life Customer atau Material Market
     ↓
[Tahap 7] Feedback loop ke Manufacturer untuk closed-loop material flow
```

### 3.2 Algoritma Optimasi: Modified Benders Decomposition

Untuk menyelesesaikan MILP berskala besar (ratusan collection center, ribuan variabel), JIANG & TANG (2025) mengusulkan **Modified Benders Decomposition** dengan langkah:

**Master Problem (MP):**
$$\min_{z \in \{0,1\}} \; f^T z + \theta$$
$$\text{s.t.} \; z \in \mathcal{Z}_{MP}$$

**Subproblem (SP)** diberikan $z^*$ tetap:
$$\theta^* = \min_{q,w} \; (c_{trans} + c_{proc})^T q$$
$$\text{s.t.} \; A \cdot q + B \cdot w \leq b(z^*), \quad q \geq 0$$

**Benders Cut Generation:** dari dual SP, diperoleh cut:
$$f^T z + (\pi^k)^T (b - Bz) \leq \theta \quad \forall k \in \{1, ..., K_{cuts}\}$$

Konvergensi tercapai ketika gap antara upper bound (MP) dan lower bound (SP) < ε = 0.1%.

### 3.3 Stackelberg Pricing Game (Manufaktur sebagai Leader)

Untuk menentukan transfer price antara OEM dan third-party echelon operator, paper menggunakan **Stackelberg equilibrium**:

$$\pi_M(q_M, q_R) = (p^{new} - c^{prod}) q_M + (p^{trans} - c^{trans}) q_R