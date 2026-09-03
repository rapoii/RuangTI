# 2497 — Model Optimasi Stokastik Hibrida untuk Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(2), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*, 32(8), 2561–2581. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu keputusan operasional paling krusial dalam sistem manufaktur modern yang beroperasi di bawah ketidakpastian permintaan, fluktuasi harga bahan baku, dan kapasitas produksi yang elastis. Lead Researchers (2025) dalam artikelnya yang dimuat di *Cuestiones de fisioterapia* edisi 54(2) menekankan bahwa pendekatan deterministik klasik—seperti *Wagner-Whitin algorithm* dan *Silver-Meal heuristic*—mulai kehilangan relevansi dalam konteks Industri 4.0 di mana pola permintaan semakin volatil dan lead-time semakin pendek. Kondisi ini diperparah oleh fakta bahwa lebih dari 70% perusahaan manufaktur di Eropa masih menggunakan model deterministik dalam modul MRP/ERP mereka, meskipun lingkungan bisnis telah berubah secara fundamental (Lead Researchers, 2025).

Urgensi ekonomi dari permasalahan ini bersifat strategis. Kesalahan perencanaan ukuran lot pada industri FMCG, farmasi, dan komponen otomotif dapat menimbulkan *inventory holding cost* yang membengkak hingga 18–25% dari nilai persediaan tahunan, sekaligus meningkatkan risiko *stockout* yang menurunkan *service level* di bawah ambang 95%. Lead Researchers (2025) menunjukkan bahwa integrasi dimensi stokastik ke dalam kerangka LSS mampu menurunkan total biaya rencana produksi sebesar 4,2% hingga 11,6% pada kasus benchmark MPL (Master Production Lot) dari 8 produk dengan horizon 24 periode.

Kesenjangan antara riset akademik dan praktik industri ini menjadi fokus utama Forel & Grunow (2023) yang dipublikasikan di *Production and Operations Management*. Mereka secara eksplisit menyatakan: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates"* (Forel & Grunow, 2023, p. 2562). Jembatan antara riset dan praktik ini menjadi landasan filosofis dari model hibrida yang diajukan Lead Researchers (2025), yang memadukan *stochastic programming* dengan *rolling-horizon* dan *replanning flexibility*. Modul 2497 ini akan membedah arsitektur model, formulasi matematis, dan implikasi operasionalnya secara mendalam.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dibangun Lead Researchers (2025) merupakan formulasi *two-stage stochastic mixed-integer programming* (2SMIP) yang diperkaya dengan mekanisme *rolling-horizon* dari Forel & Grunow (2023). Notasi standar yang digunakan adalah sebagai berikut.

**Parameter:**
- $T$ = horizon perencanaan diskret ($t = 1, 2, \ldots, T$)
- $N$ = jumlah produk yang dijadwalkan
- $d_t$ = permintaan deterministik periode $t$ (skenario rata-rata)
- $\xi_t$ = random variable permintaan dengan distribusi $\Phi_t$
- $S$ = jumlah skenario dalam *scenario tree*
- $h$ = biaya inventory holding per unit per periode
- $p$ = biaya setup (fixed ordering cost) per periode
- $v$ = biaya variabel produksi per unit
- $b$ = biaya backorder per unit
- $C_t$ = kapasitas produksi periode $t$
- $\alpha$ = *service level* minimum

**Variabel keputusan:**
- $X_{t}^s \in \{0,1\}$ = keputusan setup di periode $t$ pada skenario $s$
- $Q_{t}^s \geq 0$ = kuantitas produksi di periode $t$ pada skenario $s$
- $I_{t}^s \geq 0$ = inventory level di akhir periode $t$ pada skenario $s$
- $B_{t}^s \geq 0$ = backorder level di periode $t$ pada skenario $s$

**Fungsi objektif** adalah minimisasi *expected total cost*:

$$\min Z = \sum_{s=1}^{S} \pi_s \left[ \sum_{t=1}^{T} \left( p X_{t}^s + v Q_{t}^s + h I_{t}^s + b B_{t}^s \right) \right]$$

di mana $\pi_s$ adalah probabilitas skenario $s$ dengan $\sum_{s=1}^{S} \pi_s = 1$.

**Kendala utama model:**

**Kendala keseimbangan inventory** (per skenario):
$$I_{t-1}^{s} + Q_{t}^{s} - B_{t-1}^{s} = d_t(\xi_t^s) + B_{t}^{s} - I_{t}^{s}, \quad \forall t, s$$

**Kendala kapasitas:**
$$\sum_{n=1}^{N} \left( a_n Q_{n,t}^{s} \right) \leq C_t, \quad \forall t, s$$

**Kendala linking setup-produksi** (big-M formulation):
$$Q_{t}^{s} \leq M \cdot X_{t}^{s}, \quad \forall t, s$$

**Kendala non-negativitas dan integrality:**
$$X_{t}^{s} \in \{0,1\}, \quad Q_{t}^{s}, I_{t}^{s}, B_{t}^{s} \geq 0$$

Inovasi utama yang diperkenalkan adalah **mekanisme recourse** (tahap kedua) yang merepresentasikan fleksibilitas *replanning* dalam horizon bergulir. Forel & Grunow (2023) menggunakan **Martingale Model of Forecast Evolution (MMFE)** untuk memodelkan evolusi permintaan:

$$D_{t|t} = D_{t|t-1} + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_t^2)$$

di mana $D_{t|t}$ adalah *forecast* permintaan periode $t$ yang dibuat pada periode $t$. Dengan MMFE, *expected value of perfect information* (EVPI) dan *value of stochastic solution* (VSS) dapat dihitung secara eksplisit:

$$\text{VSS} = Z^{\text{det}} - Z^{\text{stoch}}$$

Lead Researchers (2025) menambahkan dimensi *scheduling* dengan memperkenalkan *sequence-dependent setup times* $st_{i,j}$ antar produk, sehingga kendala menjadi:

$$C_{n,t} \geq Q_{n,t}^{s} + \sum_{j \neq i} st_{i,j} X_{i,t}^{s} X_{j,t}^{s}$$

yang di-linearisasi menggunakan variabel bantu $Y_{i,j,t}^{s} \geq X_{i,t}^{s} + X_{j,t}^{s} - 1$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini di industri mengikuti **SOP 7-Tahap** yang distandarkan Lead Researchers (2025) dan selaras dengan kerangka MMFE Forel & Grunow (2023).

**Tahap 1 — Pengumpulan Data Historis & Analisis Pola Permintaan.**
Data permintaan minimal 36 bulan diekstrak dari ERP, didekomposisi menjadi *trend*, *seasonal*, dan *residual* menggunakan *STL decomposition*. Uji stasioneritas (Augmented Dickey-Fuller) diterapkan untuk memvalidasi asumsi MMFE.

**Tahap 2 — Konstruksi Skenario Tree.**
Dengan metode *moment matching* atau *Monte Carlo simulation* sebanyak $S = 200{-}500$ skenario, *scenario tree* dibangun dengan branching factor 3–5 di setiap node keputusan. Reduksi skenario dilakukan menggunakan *K-means clustering* untuk menjaga tractability.

**Tahap 3 — Formulasi & Solusi Model.**
Model dikodekan dalam bahasa pemodelan (misal GAMS/Pyomo) dan diselesaikan dengan *decomposition algorithm* seperti **Benders decomposition** atau **Progressive Hedging Algorithm (PHA)** untuk instance besar. Tolerance gap ditetapkan $\leq 0,5\%$.

**Tahap 4 — Validasi Out-of-Sample.**
Backtesting pada data 6 bulan terakhir mengukur *MAPE* (Mean Absolute Percentage Error) dan *realized service level*. Kriteria lulus: MAPE $\leq 8\%$ dan service level $\geq 95\%$.

**Tahap 5 — Integrasi Rolling-Horizon.**
Horizon perencanaan $T = 12$ bulan dengan *freezing window* 3 bulan pertama. Perbaruan forecast dan re-optimisasi dilakukan setiap periode *rolling* (rolling frequency $f = 1{-}4$ minggu). Forel & Grunow (2023) menunjukkan bahwa frekuensi *rolling* mingguan menurunkan *actual costs* hingga 7,3% dibanding bulanan.

**Tahap 6 — Implementasi ERP & Monitoring KPI.**
Output model (jadwal produksi, ukuran lot, inventory policy) di-feed ke modul MRP SAP/Oracle. Dashboard KPI memonitor: inventory turnover, setup frequency, capacity utilization, dan stockout incidents secara *real-time*.

**Tahap 7 — Continuous Improvement & Re-calibration.**
Tiga bulan sekali, parameter $h, p, v$ dan struktur *scenario tree* di-*re-calibrate* berdasarkan data aktual dan perubahan struktural permintaan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Pabrik komponen otomotif dengan $N = 3$ produk (A, B, C), horizon $T = 6$ periode, dan $S = 2$ skenario (demand *high* / *low*).

**Parameter input:**

| Parameter | Produk A | Produk B | Produk C |
|-----------|----------|----------|----------|
| $p$ (setup cost) | Rp 2.500.000 | Rp 3.000.000 | Rp 2.000.000 |
| $v$ (var. cost) | Rp 45.000 | Rp 60.000 | Rp 38.000 |
| $h$ (holding) | Rp 2.500 | Rp 3.000 | Rp 2.200 |
| $a_n$ (jam/unit) | 0,15 | 0,20 | 0,12 |

Kapasitas: $C_t = 600$ jam per periode untuk semua $t$. Permintaanrata-rata *baseline* (unit): $d = [180, 220, 200, 240, 260, 230]$. Skenario *high* = $+20\%$, skenario *low* = $-15\%$, dengan $\pi_{high} = 0,4$ dan $\pi_{low} = 0,6$.

**Langkah kalkulasi Produk A pada skenario *low* ($t = 1$):**

Permintaan rendah: $d_1^{low} = 180 \times 0,85 = 153$ unit.

Menggunakan kebijakan *lot-for-lot* (baseline deterministik): $Q_1 = 153$ unit, sehingga:

$$Z_{A,1}^{low} = p \cdot X_1 + v \cdot Q_1 + h \cdot I_1 = 2.500.000(1) + 45.000(153) + 2.500(0)$$
$$= 2.500.000 + 6.885.000 = \text{Rp } 9.385.000$$

**Kebijakan model hibrida (jadwal produksi konstan lintas skenario):**

Model menyarankan *production smoothing* dengan $Q_1 = 180$ unit (sama untuk kedua skenario), sehingga:

- Skenario *low*: $I_1 = 180 - 153 = 27$ unit → $h \cdot I_1 = 2.500(27) = \text{Rp } 67.500$
- Skenario *high*: permintaan $d_1^{high} = 180 \times 1,20 = 216$ unit, sehingga backorder $B_1 = 216 - 180 = 36$ unit → $b \cdot B_1 = 5.000(36) = \text{Rp } 180.000$

*Expected cost* skenario 1: $E[Z_{A,1}] = 0,6(2.500.000 + 45.000 \cdot 180 + 67.500) + 0,4(2.