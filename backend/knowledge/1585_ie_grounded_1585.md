# 1585 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(2), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning. *Production and Operations Management*, 33(2), 414–433. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan salah satu keputusan taktis-operasional paling krusial dalam rantai pasok manufaktur kontemporer. Lead Researchers (2025) dalam artikelnya yang berjudul *"A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem"* ([DOI: 10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menekankan bahwa integrasi keputusan lot sizing dengan penjadwalan pada lantai pabrik (*shop floor scheduling*) menjadi semakin kompleks ketika permintaan pasar tidak lagi bersifat deterministik melainkan mengalami fluktuasi stokastik yang tajam. Fenomena *demand amplification*, *bullwhip effect*, fragmentasi *SKU* (Stock Keeping Unit), serta tren mass customization mendorong perusahaan manufaktur untuk meninggalkan pendekatan *Material Requirements Planning* (MRP) klasik yang terlalu kaku terhadap asumsi permintaan rata-rata.

Dalam konteks industri nyata, Lead Researchers (2025) menunjukkan bahwa perusahaan kimia, FMCG (*fast-moving consumer goods*), dan farmasi rata-rata menghadapi variasi permintaan musiman dengan koefisien variasi antara 0,18 hingga 0,45. Apabila manajer produksi menggunakan model deterministik, misalnya Wagner-Whitin atau *Silver-Meal*, maka akan terjadi dua skenario ekstrem: (i) *stockout* masif ketika realisasi permintaan melampaui ekspektasi, atau (ii) *overstock* dengan biaya *carrying cost* yang menggerus margin operasi hingga 8–12% per tahun. Untuk itulah, paper tersebut mengusulkan kerangka optimisasi stokastik hibrida yang memadukan *Mixed Integer Programming* (MIP) eksak untuk keputusan tingkat strategis dengan *rolling-horizon heuristic* untuk merespons fluktuasi permintaan jangka pendek.

Forel dan Grunow (2023) ([DOI: 10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) memperkuat justifikasi empiris tersebut melalui riset berbasis simulasi pada data sintetis dan *real-world*. Mereka menyatakan secara eksplisit: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."* Temuan ini memperlihatkan jurang pemisah (*research-practice gap*) yang substansial antara komunitas akademik Teknik Industri dan praktisi perencanaan produksi di industri. Padahal, paper mereka menunjukkan bahwa model yang mengintegrasikan evolusi ramalan (*forecast evolution*) menggunakan *Martingale Model of Forecast Evolution* (MMFE) mampu menurunkan biaya aktual rata-rata sebesar 3–7% dibandingkan pendekatan *safety stock* konvensional.

Urgensi ekonomis dari permasalahan ini juga tecermin dari nilai absolut dampak finansial: pada perusahaan manufaktur bernilai tambah tinggi dengan *revenue* tahunan USD 500 juta, perbaikan 5% pada keputusan lot sizing dapat menghemat belanja modal kerja hingga USD 25 juta per tahun. Oleh karena itu, pengembangan model optimisasi stokastik hibrida bukan sekadar kontribusi akademis, melainkan investasi langsung pada peningkatan daya saing dan *resilience* rantai pasok terhadap guncangan permintaan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar CLSP dengan Setup

Model *Capacitated Lot Sizing Problem* (CLSP) dengan variabel biner setup menjadi fondasi teoritis. Misalkan terdapat himpunan produk $i \in \mathcal{I} = \{1, \dots, N\}$ dan periode diskrit $t \in \mathcal{T} = \{1, \dots, T\}$. Formulasi deterministik Lead Researchers (2025) dirumuskan sebagai:

$$\min_{x, y, I} \sum_{t \in \mathcal{T}} \sum_{i \in \mathcal{I}} \left( c_i x_{it} + s_i y_{it} + h_i I_{it} + p_i q_{it} \right)$$

dengan parameter dan variabel keputusan sebagai berikut:

- $c_i$ = biaya produksi variabel per unit produk $i$ (USD/unit)
- $s_i$ = biaya *setup* produk $i$ (USD/setup)
- $h_i$ = biaya *holding/inventory* per unit per periode (USD/unit·periode)
- $p_i$ = biaya *penalty* untuk *backorder* (USD/unit)
- $x_{it}$ = jumlah produksi aktual produk $i$ pada periode $t$
- $y_{it} \in \{0,1\}$ = keputusan setup; $y_{it} = 1$ bila mesin di-setup untuk produk $i$ pada periode $t$
- $I_{it}$ = inventaris akhir periode $t$ untuk produk $i$ (dapat bernilai negatif untuk *backorder*)
- $q_{it}$ = variabel *backorder* produk $i$ pada periode $t$

Kendala (*constraints*) utama mencakup:

**a. Konservasi aliran inventaris:**
$$I_{i,t-1} + x_{it} + q_{it} - D_{it} = I_{it}, \quad \forall i, t \tag{1}$$

**b. Linking setup-production (big-M):**
$$x_{it} \leq M_i \cdot y_{it}, \quad \forall i, t \tag{2}$$

dengan $M_i$ adalah kapasitas produksi maksimum per periode untuk produk $i$.

**c. Kapasitas kapasitas total:**
$$\sum_{i \in \mathcal{I}} a_i x_{it} + \sum_{i \in \mathcal{I}} t_i^{\text{setup}} y_{it} \leq C_t, \quad \forall t \tag{3}$$

dengan $a_i$ adalah waktu proses per unit (jam/unit), $t_i^{\text{setup}}$ adalah waktu setup (jam), dan $C_t$ kapasitas reguler tersedia (jam).

### 2.2 Ekstensi Stokastik: Permintaan sebagai Variabel Acak

Dalam formulasi Lead Researchers (2025), permintaan $D_{it}$ bersifat random realization $\tilde{D}_{it}$ yang didekomposisi mengikuti *scenario tree* dengan $\Omega$ skenario. Fungsi tujuan menjadi program stokastik dua-tahap (*two-stage stochastic program*):

$$\min_{y, x(\omega), I(\omega)} \sum_{t} \sum_{i} s_i y_{it} + \mathbb{E}_{\xi} \left[ \sum_{t} \sum_{i} \left( c_i x_{it}(\omega) + h_i I_{it}^{+}(\omega) + p_i I_{it}^{-}(\omega) \right) \right] \tag{4}$$

dengan $I_{it}^{+} = \max(0, I_{it})$ dan $I_{it}^{-} = \max(0, -I_{it})$. Keputusan tingkat pertama ($y_{it}$) bersifat *here-and-now*, sedangkan keputusan rekonsiliasi produksi $x_{it}(\omega)$ bersifat *wait-and-see recourse* setelah realisasi $\xi$ terobservasi.

### 2.3 Integrasi Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengusulkan agar permintaan acak $\tilde{D}_t$ direpresentasikan dengan evolusi ramalan. Misalkan $F_t$ adalah ramalan yang tersedia pada akhir periode $t-1$, maka MMFE menyatakan:

$$\tilde{D}_t = F_t + \varepsilon_t \tag{5}$$

dengan $\varepsilon_t$ mengikuti distribusi normal $\mathcal{N}(0, \sigma_t^2)$ dan $\mathbb{E}[\varepsilon_t \mid \mathcal{F}_{t-1}] = 0$ (sifat *martingale*). Pada periode berikutnya, ramalan *updated* memenuhi:

$$F_{t+1} = F_t + b_t + \eta_t \tag{6}$$

dengan $b_t$ adalah *bias* dan $\eta_t$ adalah *innovation* yang independen. Substansi utama dari MMFE adalah *mean-reversion* terhadap *true* demand jangka panjang, sehingga keputusan lot sizing tidak lagi bersifat *myopic* terhadap satu ramalan statis.

### 2.4 Formulasi Hibrida: MIP Eksak + Rolling Horizon Heuristic

Komponen hibrida Lead Researchers (2025) didefinisikan sebagai berikut. Misalkan $H$ adalah horizon滚动 (*rolling horizon*) dengan panjang $\tau = 4$ minggu. Pada setiap *freeze horizon* $k$, model MIP diselesaikan dengan:

$$\min_{y^{k:k+\tau}, x^{k:k+\tau}} \sum_{t=k}^{k+\tau} \sum_{i} \left( s_i y_{it} + \bar{c}_i x_{it} \right) \tag{7}$$

di mana hanya keputusan $y_{ik}$ dan $x_{ik}$ yang di-*commit*, sedangkan periode $k+1$ hingga $k+\tau$ menjadi *planning window* rekonsiliasi. Fungsi biaya ekspektasian direalisasikan dengan *Sample Average Approximation* (SAA):

$$\hat{z}_N = \frac{1}{N} \sum_{n=1}^{N} Q(y, \xi^{(n)}) \tag{8}$$

di mana $N$ adalah jumlah *scenario* Monte Carlo yang di-generate dari distribusi $\xi$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Perencanaan

Implementasi Lead Researchers (2025) menggunakan arsitektur tiga lapis (*three-tier architecture*) yang dapat dilihat pada diagram alir logika berikut:

```
┌─────────────────────────────────────────────────────┐
│ TIER 1: Strategic MIP Solver (CPLEX/Gurobi)         │
│   - Horizon: 12 bulan, mingguan                     │
│   - Output: Lot-sizing master plan + capacity plan  │
└─────────────────────────────────────────────────────┘
                          ↓ (Setiap Senin 06:00)
┌─────────────────────────────────────────────────────┐
│ TIER 2: Rolling Horizon Replanner (Python/C++)      │
│   - Update: Forecast evolution (MMFE)               │
│   - Horizon: 4 minggu ke depan                      │
│   - Output: Shop-floor schedule harian              │
└─────────────────────────────────────────────────────┘
                          ↓ (Setiap hari 14:00)
┌─────────────────────────────────────────────────────┐
│ TIER 3: Execution & Feedback (MES/SCADA)            │
│   - Realisasi produksi, capture data aktual         │
│   - Update state ke MMFE untuk reforecast           │
└