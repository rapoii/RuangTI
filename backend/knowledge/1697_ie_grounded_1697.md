# 1697 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan salah satu keputusan taktis-operasional paling krusial dalam manajemen rantai pasok dan operasi manufaktur modern. Dalam lanskap industri 4.0, perusahaan menghadapi permintaan pasar yang semakin volatil, lead time yang tidak deterministik, serta interdependensi tinggi antara keputusan produksi, persediaan, dan kapasitas. Lead Researchers (2025) dalam paper "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem" (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menekankan bahwa pendekatan deterministik konvensional seperti *Wagner-Within* atau *Silver-Meal* tidak lagi memadai untuk menangkap dinamika permintaan riil yang bersifat stokastik. Ketidakmampuan model deterministik dalam mengkuantifikasi risiko stokout, biaya backlog, dan ekspektasi biaya persediaan menyebabkan gap antara kinerja model akademik dengan realitas operasional di lantai pabrik.

Penelitian Forel & Grunow (2023) yang dipublikasikan di *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit mengidentifikasi jurang (*practice-academia gap*) tersebut: "Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates." Temuan ini menjadi titik tolak integrasi antara formulasi stokastik akademis dengan fleksibilitas *rolling-horizon* yang diterima praktisi. Urgensi ekonominya sangat substansial — studi empiris menunjukkan bahwa pengurangan 1–3% pada total biaya persediaan dan setup di industri proses (kimia, farmasi, FMCG) dapat menghemat jutaan dolar AS per tahun pada perusahaan berskala multinasional.

Secara operasional, masalah lot sizing dan penjadwalan (*lot-sizing and scheduling problem*, LSSP) dalam konteks hibrid menggabungkan dua sub-masalah: (i) penentuan kuantitas produksi per periode pada kapasitas mesin yang terbatas, dan (ii) alokasi urutan pesanan ke sumber daya manufaktur (mesin, lini, shift). Pendekatan hibrida yang diusulkan Lead Researchers (2025) menyatukan *stochastic programming* dengan *heuristic scheduling*, memungkinkan keputusan lot-sizing yang robust terhadap realisasi permintaan di masa depan sembari mempertahankan feasibilitas jadwal pada tingkat shop floor. Konteks ini relevan untuk industri dengan variasi permintaan musiman (misal: produksi es krim, AC, komponen otomotif) atau ketidakpastian struktural (misal: proyek make-to-order dengan permintaan yang baru terungkap secara progresif).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik

Model dasar *capacitated lot sizing problem* (CLSP) dalam horizon perencanaan $T$ periode dapat dinyatakan sebagai:

$$\min \; Z = \sum_{t=1}^{T} \left( s_t \cdot y_t + h_t \cdot I_t + p_t \cdot x_t \right)$$

dengan kendala:

$$I_{t-1} + x_t - I_t = d_t, \quad \forall t \in \{1,\ldots,T\}$$

$$x_t \leq C_t \cdot y_t, \quad \forall t$$

$$y_t \in \{0,1\}, \quad x_t, I_t \geq 0$$

di mana $s_t$ adalah biaya setup, $h_t$ biaya inventory holding per unit, $p_t$ biaya produksi variabel per unit, $d_t$ permintaan deterministik, $C_t$ kapasitas tersedia, $y_t$ variabel biner keputusan setup, $x_t$ kuantitas produksi, dan $I_t$ level inventori akhir periode $t$.

### 2.2 Formulasi Lot Sizing Stokastik dengan *Martingale Model of Forecast Evolution* (MMFE)

Forel & Grunow (2023) memformulasikan permintaan $D_t$ sebagai proses stokastik dengan evolusi *forecast* yang mengikuti *Martingale Model of Forecast Evolution*. Dalam MMFE, permintaan aktual direpresentasikan sebagai:

$$D_t = d_{t|T} + \sum_{k=t+1}^{T} \varepsilon_{t,k}$$

dengan $d_{t|T}$ adalah *forecast* permintaan pada periode $t$ yang diobservasi di horizon awal $T=0$, dan $\varepsilon_{t,k}$ adalah *forecast error* yang merupakan *martingale difference sequence*:

$$\mathbb{E}[\varepsilon_{t,k} \mid \mathcal{F}_t] = 0, \quad \text{Var}(\varepsilon_{t,k}) = \sigma_{t,k}^2$$

di mana $\mathcal{F}_t$ adalah filtrasi informasi hingga periode $t$. Properti martingale ini memastikan *forecast* terbaik yang tidak bias (*unbiasedness*) ketika informasi baru tersedia.

### 2.3 Formulasi Hibrida dengan *Production Recourse*

Lead Researchers (2025) mengusulkan formulasi hibrida yang menggabungkan keputusan lot-sizing tahap pertama (*first-stage*) dengan keputusan recourse tahap kedua (*second-stage*). Formulasi lengkapnya adalah:

$$\min_{x,y} \; \mathbb{E}_{\xi} \left[ Q(x,y,\xi) \right] = c^T x + \mathbb{E}_{\xi}\left[ \min_{x^r,y^r} \; q^T x^r + h^T I^r + s^T y^r \right]$$

dengan kendala *first-stage*:

$$\sum_{i=1}^{N} a_i y_i \leq B, \quad x \in \mathcal{X}, \quad y \in \{0,1\}^N$$

dan kendala *second-stage* (recourse):

$$I_{t-1}^r + x_t + x_t^r - I_t^r = D_t(\xi), \quad \forall t, \xi \in \Xi$$

$$x_t + x_t^r \leq C_t, \quad \forall t$$

di mana $x_t^r$ adalah kuantitas recourse (produksi tambahan atau short-term subcontracting), $I_t^r$ inventori recourse, dan $D_t(\xi)$ adalah realisasi permintaan pada skenario $\xi$. Struktur *two-stage stochastic program* ini memungkinkan Lead Researchers (2025) menangkap trade-off antara biaya setup tetap awal dan biaya ekspektasi recourse di masa depan.

### 2.4 Fungsi Nilai Informasi (*Value of the Stochastic Solution*)

Untuk mengkuantifikasi benefit stokastik terhadap deterministik, didefinisikan *Value of the Stochastic Solution* (VSS):

$$\text{VSS} = Z^{SP} - Z^{EV} = \mathbb{E}[Z(\bar{x})] - Z(\bar{x})$$

di mana $Z^{SP}$ adalah nilai optimal program stokastik, dan $Z^{EV}$ adalah solusi *expected value problem* (permintaan diganti dengan nilai ekspektasinya). Forel & Grunow (2023) menunjukkan bahwa VSS secara empiris dapat mencapai 2–8% dari total biaya pada simulasi data industri nyata, membuktikan signifikansi ekonomis pendekatan stokastik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida Lead Researchers (2025) di lingkungan industri mengikuti kerangka *rolling-horizon* yang distandarisasi sebagai berikut:

**Langkah 1 — Inisialisasi Data dan Parameter.** Koleksi data historis permintaan minimal 24–36 periode, estimasi parameter distribusi (mean, varians), dan penentuan biaya (setup $s_t$, holding $h_t$, shortage $p_t$, overtime $o_t$). Validasi goodness-of-fit menggunakan *Kolmogorov-Smirnov test* dengan tingkat signifikansi $\alpha = 0.05$.

**Langkah 2 — Generasi Skenario.** Menggunakan *Monte Carlo sampling* atau *Latin Hypercube Sampling* untuk membangkitkan $N_s = 200$–$1000$ skenario permintaan yang konsisten dengan struktur MMFE. Reduksi skenario dilakukan via *Kantorovich distance minimization* hingga $N_s' = 20$–$50$ skenario representatif untuk tractability komputasional.

**Langkah 3 — Optimisasi Tahap Pertama.** Solusi *first-stage* (variabel $x_t, y_t$) diperoleh dengan solver MILP (CPLEX, Gurobi) atau dekomposisi Benders. Formulasi MILP diselesaikan dengan *branch-and-cut* dengan gap optimalitas $\leq 0.5\%$.

**Langkah 4 — Evaluasi Recourse dan Update *Rolling-Horizon*.** Setelah realisasi permintaan di periode $t$, parameter MMFE di-update (*forecast evolution*), dan langkah 1–3 diulang untuk horizon $[t+1, t+H]$ di mana $H$ adalah panjang *planning horizon* (umumnya $H=12$ periode mingguan atau bulanan).

**Langkah 5 — Integrasi Penjadwalan Shop Floor.** Keputusan lot diterjemahkan menjadi jadwal eksekusi pada *finite-capacity scheduler* (misal: Preactor, PlanetTogether) dengan aturan *priority dispatching* seperti *earliest due date* (EDD) atau *shortest processing time* (SPT).

**Langkah 6 — Monitoring KPI dan Feedback Loop.** KPI utama yang dipantau: (i) *service level* $\beta = 1 - \text{stockout frequency}$, (ii) inventory turn-over $\text{ITO} = \text{COGS}/\bar{I}$, (iii) kapasitas utilisasi $\rho = \sum x_t / \sum C_t$, dan (iv) total landed cost deviation dari baseline.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Produksi Season-Good pada Manufaktur Es Krim

Sebuah perusahaan FMCG multinasional memiliki lini produksi es krim dengan horizon $T = 6$ periode (bulan). Data parameter:

| Parameter | Nilai |
|---|---|
| Biaya setup $s_t$ | Rp 50.000.000/pesanan |
| Biaya holding $h_t$ | Rp 500/unit/bulan |
| Biaya produksi $p_t$ | Rp 5.000/unit |
| Kapasitas $C_t$ | 80.000 unit/bulan |
| *Forecast* awal $d_{t|0}$ | [60k, 90k, 120k, 110k, 70k, 50k] |
| $\sigma_{t,t}$ (std deviasi) | [8k, 12k, 18k, 16k, 10k, 7k] |

### 4.2 Perhitungan Manual Bandingkan dengan Optimizer

Untuk menyederhanakan ilustrasi, tinjau sub-masalah 2-periode dengan $T=2$, $d_1=60.000$, $d_2=90.000$, $\sigma_1=8.000$, $\sigma_2=12.000$, tanpa backlog ($I_t \geq 0$).

**Kasus A — Solusi Deterministik (Wagner-Within optimal):**

Karena $s_t > h_t \cdot (T-t) \cdot d_t$ untuk semua $T$, evaluasi dua strategi:

- *Make in period 1 only*: Biaya = $s_1 + p_1 \cdot 150.000 + h_1 \cdot 0 = 50juta + 750juta = $ Rp 800.000.000
- *Make separate*: Biaya = $2 \cdot 50juta + 5.000 \cdot (60k+90k) = 100juta + 750juta = $ Rp 850.000.000

Solusi deterministik optimal: produksi seluruh 150.000 unit di periode 1 dengan total biaya Rp 800.000.000.

**Kasus B — Solusi Stokastik (hanya produksi 60.000 di periode 1, recourse di periode 2):**

Ekspektasi permintaan total: $\mathbb{E}[D_1 + D_2] = 150.000$. Strategi recourse: jika permintaan aktual $D_2$ melebihi sisa kapasitas, dilakukan *