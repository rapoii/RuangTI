# 1841 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Kerangka Perencanaan Rol Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(2), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (lot sizing) dan penjadwalan produksi merupakan dua keputusan operasional yang saling berinteraksi secara ketat dalam sistem manufaktur dan rantai pasok modern. Dalam konteks industri nyata — mulai dari pabrik semikonduktor, FMCG, hingga industri proses kimia — keputusan *berapa banyak yang harus diproduksi* dan *kapan sebuah mesin harus di-setup* memiliki dampak langsung terhadap biaya persediaan (holding cost), biaya persiapan (setup cost), kemampuan memenuhi permintaan pelanggan (service level), dan utilisasi kapasitas. Lead Researchers (2025) dalam DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) menegaskan bahwa pada lingkungan manufaktur *make-to-stock* dengan permintaan yang volatile, model lot sizing deterministik klasik seperti Wagner–Whitin atau Silver–Meal menjadi tidak memadai karena mengasumsikan permintaan diketahui secara pasti (*perfect foresight*), padahal pada kenyataannya permintaan berfluktuasi mengikuti pola stokastik yang hanya dapat didekati melalui distribusi probabilitas.

Urgensi permasalahan ini diperkuat oleh temuan Forel dan Grunow (2023) dalam DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881) yang menyatakan bahwa "academic approaches considering demand uncertainty in lot sizing are seldom used in practice". Kesenjangan antara riset akademik dan praktik industri ini terjadi karena dua faktor utama: (1) kompleksitas komputasional model stokastik murni (multi-stage stochastic programming) yang membutuhkan pohon skenario eksponensial, dan (2) fakta bahwa praktisi industri lebih memilih model deterministik yang dikombinasikan dengan *rolling-horizon planning* dan pembaruan ramalan (*forecast updates*) yang sering. Oleh karena itu, diperlukan pendekatan **hibrida** yang menggabungkan rigor matematis stokastik dengan fleksibilitas operasional rolling horizon, sehingga keputusan lot sizing dan penjadwalan tetap optimal secara expected cost namun adaptif terhadap pembaruan informasi.

Dalam konteks ekonomi, biaya setup pada mesin high-tech dapat mencapai \$5.000–\$50.000 per event, sedangkan biaya inventory carrying mencapai 20–30% dari nilai barang per tahun. Dengan horizon perencanaan 12 periode dan permintaan yang dapat bervariasi ±25% dari ramalan titik, perusahaan tanpa model stokastik yang baik dapat menderita *safety stock inflation* 15–35% atau sebaliknya *stockout* yang menyebabkan lost sales signifikan. Modul 1841 ini membahas bagaimana arsitektur optimasi hibrida menjawab tantangan ini secara sistematis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Deterministik (Baseline)

Model Economic Lot Scheduling Problem (ELSP) dan Multi-Level Lot Sizing (MLLS) deterministik dirumuskan sebagai berikut untuk horizon diskrit $T$:

$$\min_{Q_t, y_t} \sum_{t=1}^{T} \left( s_t \cdot y_t + h_t \cdot I_t + p_t \cdot Q_t \right)$$

dengan kendala keseimbangan persediaan:

$$I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in \{1, \ldots, T\}$$

dimana:
- $s_t$ = biaya setup pada periode $t$
- $y_t \in \{0,1\}$ = keputusan biner setup (1 jika memproduksi, 0 jika tidak)
- $h_t$ = biaya simpan per unit pada periode $t$
- $p_t$ = biaya produksi variabel per unit
- $Q_t$ = kuantitas produksi periode $t$
- $I_t$ = level inventory akhir periode $t$
- $d_t$ = permintaan periode $t$ (deterministik dalam baseline)

### 2.2 Model Stokastik dengan Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) di mana permintaan aktual $D_t$ direalisasikan melalui proses:

$$D_t = F_t + \epsilon_t, \quad \epsilon_t \sim \mathcal{N}(0, \sigma_t^2)$$

dimana $F_t$ adalah ramalan pada periode $t$, dan $\epsilon_t$ adalah *martingale difference sequence* dengan $\mathbb{E}[\epsilon_t | \mathcal{F}_{t-1}] = 0$. Pembaruan ramalan antar periode mengikuti:

$$F_t = F_{t-1} + \delta_t, \quad \delta_t \sim \mathcal{N}(0, \eta_t^2)$$

Artinya, seiring berjalannya waktu, informasi baru menyebabkan revisi ramalan $\delta_t$ dengan varian $\eta_t^2$.

### 2.3 Formulasi Multi-Stage Stochastic Programming

Untuk menangkap keputusan lot sizing di bawah ketidakpastian, didefinisikan pohon skenario $\Omega$ dengan node keputusan pada setiap stage $t$. Fungsi tujuan期望:

$$\min \sum_{t=1}^{T} \mathbb{E}_{\omega} \left[ \sum_{\tau=t}^{T} c_\tau(Q_\tau^\omega, y_\tau^\omega, I_\tau^\omega) \bigg| \mathcal{F}_t \right]$$

dengan *production recourse* yang merefleksikan kemampuan replanning:

$$Q_t^\omega = Q_t^{decide} + \Delta Q_t^\omega, \quad \Delta Q_t^\omega \in [-Q_t^{max}, Q_t^{max}]$$

Lead Researchers (2025) dalam DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengusulkan **formulasi hibrida** yang memisahkan keputusan menjadi dua lapisan:

$$\underbrace{\min_{y_t^{frozen}} \sum_{t=1}^{H} s_t y_t^{frozen} + \mathbb{E}\left[Q_t(y^{frozen})\right]}_{\text{Lapisan Strategis (Setup Frozen Window)}} + \underbrace{\min_{Q_t^\omega, y_t^\omega} \sum_{t=H+1}^{T} \mathbb{E}\left[c_t(Q_t^\omega, y_t^\omega)\right]}_{\text{Lapisan Taktis (Rolling Recourse)}}$$

dimana $H$ adalah *frozen window* (umumnya 2–4 periode) di mana keputusan setup tidak boleh dibatalkan, sementara periode setelahnya diselesaikan ulang secara stokastik setiap kali ada forecast update.

### 2.4 Penjadwalan dengan Sequence-Dependent Setup

Untuk menjadwalkan $N$ produk pada satu mesin dengan *sequence-dependent setup time* $st_{ij}$, model Mixed Integer Programming (MIP) penjadwalan dirumuskan:

$$\min \sum_{i=1}^{N} \sum_{j=1}^{N} \sum_{t=1}^{T} \left( ST_{ij} \cdot z_{ijt} + HC_{it} \cdot w_{it} \right)$$

dengan kendala:
- $\sum_{j} z_{ijt} = 1$ untuk semua $i$ (setiap job dijadwalkan tepat satu kali)
- $\sum_{j} z_{jit} \leq y_{it}$ (penjadwalan mengimplikasikan setup)
- $z_{ijt}, w_{it} \in \{0,1\}$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida pada sistem MRP/ERP industri mengikuti SOP enam-tahap berikut:

**Tahap 1 – Akuisisi Data Historis dan Karakterisasi Permintaan**
Kumpulkan data permintaan 24–36 bulan terakhir. Uji stasioneritas (Augmented Dickey-Fuller) dan identifikasi distribusi residual $\epsilon_t$. Estimasi parameter $\sigma_t^2$ dan $\eta_t^2$ MMFE menggunakan Maximum Likelihood Estimation (MLE).

**Tahap 2 – Konstruksi Pohon Senario Truncated**
Bangun pohon skenario menggunakan algoritma K-means clustering pada residual historis untuk menghasilkan 20–50 skenario per stage. Terapkan *forward scenario reduction* (Heitsch & Römisch 2003) untuk mengontrol ukuran pohon agar tractable.

**Tahap 3 – Penentuan Frozen Horizon $H$**
Pilih $H$ berdasarkan dua kriteria:
- *Lead time* produksi rata-rata: $H \geq LT_{avg}$
- *Cost ratio*: $H = \arg\min_H \left( \frac{\text{Setup Flexibility Loss}}{\text{Computational Saving}} \right)$

**Tahap 4 – Optimasi Bilevel**
Selesaikan lapisan strategis (setup) dengan stochastic programming menggunakan decomposition Benders atau Progressive Hedging (Rockafellar & Wets 1991). Selesaikan lapisan taktis (recourse) sebagai deterministic equivalent per skenario.

**Tahap 5 – Implementasi Rolling Horizon**
Setiap awal periode, observe $D_{t-1}^{realized}$, perbarui $F_t$, regenerasi pohon skenario untuk horizon $[t, t+T]$, dan reoptimasi. Keputusan setup untuk periode $t$ hingga $t+H-1$ di-freeze.

**Tahap 6 – Monitoring KPI dan Feedback Loop**
Tracking metrik: *service level* (%), *inventory turn*, *setup frequency*, *expected cost vs. actual cost*. Rekalibrasi parameter $\sigma_t^2$ setiap bulan menggunakan Bayesian updating.

**Diagram Alir Proses:**

```
[Data Historis] → [Kalibrasi MMFE] → [Generate Pohon Senario]
        ↓                                      ↓
[Demand Realization D_t]              [Optimasi Bilevel]
        ↓                                      ↓
[Frozen Window H = 3]  ←────  [Setup Decisions y_t^frozen]
        ↓
[Recourse: Q_t^ω, y_t^ω (Reoptimasi)]
        ↓
[Penjadwalan Sequence-Dependent pada Shop Floor]
        ↓
[Actual Cost Tracking] → [Feedback ke MMFE]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik pengemasan FMCG dengan 3 lini produk (A, B, C), horizon 6 periode, lead time 1 periode.

**Parameter Input:**

| Parameter | Produk A | Produk B | Produk C |
|-----------|----------|----------|----------|
| Setup cost $s_t$ | \$800 | \$1.200 | \$1.000 |
| Holding cost $h_t$ | \$2/unit | \$3/unit | \$2,5/unit |
| Demand mean $\mu_t$ | 500 | 300 | 400 |
| Demand std $\sigma_t$ | 100 | 70 | 90 |
| Forecast evolution std $\eta_t$ | 60 | 40 | 50 |
| Initial inventory $I_0$ | 100 | 50 | 80 |

**Frozen window** $H = 2$, **Total horizon** $T = 6$, **Risk discount** $\rho = 0.05$ per periode.

### Langkah 1: Perhitungan Expected Demand dengan MMFE

Untuk Produk A pada periode 1 (tidak ada forecast evolution karena $F_0$ fixed):
$$\mathbb{E}[D_1^A] = F_1 = 500$$

Untuk periode 2, dengan mempertimbangkan forecast evolution:
$$\mathbb{E}[D_2^A] = F_1 + \mathbb{E}[\delta_2] = 500 + 0 = 500$$

Namun, *expected information value* menunjukkan revisi potensial $\delta_2 \sim \mathcal{N}(0, 60^2)$.

### Langkah 2: Penentuan Kebijakan Setup Optimal (Lapisan Strategis)

Untuk 2 periode frozen ($H=2$), dihitung *expected total cost* untuk setiap kombinasi setup pattern $(y_1^A, y_2^A)$ ∈ $\{0,1\}^2$:

**Skenario 1: $y_1^A = 1, y_2^A = 1$**
- Setup cost: $800 + 800 = \$1.600$
- Produksi: untuk memenuhi $\mathbb{E}[D_1]+\mathbb{E}[D_2] = 1.000$ unit, produksi $Q_1 = 400, Q_2 = 600$ (dengan $I_1 = 0$)
- Holding: $0 \cdot 2 + (100-0) \cdot ...$ → setelah dihitung dengan safety stock untuk $\sigma = 100$, holding cost = \$200
- **Total expected cost** = \$1.600 +