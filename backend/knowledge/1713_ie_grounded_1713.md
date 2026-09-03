# 1713 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan ukuran lot (*lot sizing*) merupakan salah satu keputusan taktis paling krusial dalam manajemen operasi manufaktur dan rantai pasok. Keputusan ini menentukan kuantitas produksi pada setiap periode perencanaan dengan tujuan meminimalkan total biaya yang terdiri atas biaya setup, biaya inventory holding, biaya produksi, dan biaya kekecewaan pelanggan (*backorder penalty*). Dalam konteks industri nyata—mulai dari pabrik komponen otomotif, industri makanan dan minuman, hingga manufaktur semikonduktor—permintaan pasar bersifat *inherently stochastic*: permintaan yang diramalkan hari ini hampir pasti akan berubah ketika informasi baru tersedia. Lead Researchers (2025) menekankan bahwa pendekatan deterministik yang lazim dipakai di lantai produksi gagal menangkap dinamika permintaan yang berfluktuasi tersebut, sehingga menghasilkan rencana produksi yang suboptimal dan pemborosan kapasitas (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

Kesenjangan antara teori dan praktik ini menjadi perhatian utama Forel dan Grunow (2023) dalam *Production and Operations Management*. Mereka mengamati bahwa "academic approaches considering demand uncertainty in lot sizing are seldom used in practice" karena kompleksitas komputasional model stokastik murni (*pure stochastic programming*) yang tidak kompatibel dengan horizon perencanaan berulang industri (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Industri biasanya mengimplementasikan model deterministik sederhana—seperti Wagner-Within atau Silver-Meal—namun mengakomodasi ketidakpastian melalui kerangka *rolling-horizon planning* dengan pembaruan ramalan (*forecast updates*) yang频繁 dilakukan. Paradigma ini menciptakan kebutuhan mendesak akan model hibrida yang secara eksplisit menggabungkan optimisasi stokastik dengan mekanisme recourse produksi dalam horizon bergulir. Urgensi ekonominya sangat nyata: menurut studi Forel dan Grunow, evolusi ramalan yang dimodelkan dengan benar mampu menurunkan biaya aktual hingga 10–18% dibandingkan kebijakan deterministik naif. Dengan demikian, pengembangan model optimisasi stokastik hibrida bukan sekadar latihan akademis, melainkan respons terhadap tekanan efisiensi struktural yang dihadapi seluruh industri dengan permintaan tidak pasti.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dibangun di sini mengintegrasikan tiga pilar: (i) program stokastik dua-tahap (*two-stage stochastic program*), (ii) representasi evolusi ramalan melalui Martingale Model of Forecast Evolution (MMFE) ala Forel & Grunow (2023), dan (iii) mekanisme *rolling-horizon recourse* yang mencerminkan fleksibilitas perencanaan ulang (*replanning flexibility*).

**Parameter dan Himpunan.** Misalkan $T$ adalah jumlah periode perencanaan, $\Omega$ adalah himpunan skenario permintaan dengan probabilitas $p_\omega$ untuk setiap skenario $\omega \in \Omega$. Parameter deterministik meliputi $c$ (biaya produksi variabel per unit), $h$ (biaya simpan per unit per periode), $s$ (biaya setup), $p$ (biaya backorder per unit), dan $C$ (kapasitas produksi per periode). Permintaan dalam skenario $\omega$ pada periode $t$ dinotasikan $D_{t,\omega}$.

**Variabel Keputusan.** Tahap pertama (*here-and-now*) menggunakan $x_t^{\text{base}}$ (kuantitas produksi dasar) dan $y_t \in \{0,1\}$ (keputusan setup). Tahap kedua (*recourse*) mencakup $x_{t,\omega}^{r}$ (penyesuaian produksi), $I_{t,\omega}^{+}$ (inventory positif), dan $I_{t,\omega}^{-}$ (backorder).

**Formulasi MMFE untuk Evolusi Ramalan.** Forel dan Grunow (2023) memodelkan evolusi ramalan sebagai:

$$D_{t+1,\omega} = D_{t,\omega} + \Delta D_{t+1,\omega} + \varepsilon_{t+1,\omega}$$

di mana $\{\varepsilon_{t,\omega}\}$ adalah barisan *martingale difference sequence* dengan $\mathbb{E}[\varepsilon_{t+1,\omega} \mid \mathcal{F}_t] = 0$ dan $\mathcal{F}_t$ adalah informasi hingga periode $t$. Model ini menangkap fakta bahwa pembaruan ramalan di masa depan mengandung informasi baru yang belum tersedia saat ini.

**Fungsi Tujuan:**

$$\min Z = \sum_{t=1}^{T}\left(s \cdot y_t + c \cdot x_t^{\text{base}}\right) + \sum_{t=1}^{T}\sum_{\omega \in \Omega}p_\omega \left[c \cdot x_{t,\omega}^{r} + h \cdot I_{t,\omega}^{+} + p \cdot I_{t,\omega}^{-}\right]$$

**Kendala:**

$$\text{(Keseimbangan Inventori)} \quad I_{t,\omega}^{+} - I_{t,\omega}^{-} = I_{t-1,\omega}^{+} - I_{t-1,\omega}^{-} + x_t^{\text{base}} + x_{t,\omega}^{r} - D_{t,\omega} \quad \forall t,\omega$$

$$\text{(Kendala Kapasitas)} \quad x_t^{\text{base}} + x_{t,\omega}^{r} \leq C \cdot y_t \quad \forall t,\omega$$

$$\text{(Setup Logika)} \quad x_t^{\text{base}} \leq C \cdot y_t \quad \forall t$$

$$\text{(Non-negativitas \& Biner)} \quad x_t^{\text{base}}, x_{t,\omega}^{r}, I_{t,\omega}^{+}, I_{t,\omega}^{-} \geq 0, \quad y_t \in \{0,1\}$$

Struktur *rolling-horizon* diimplementasikan melalui partisi horizon: $x_t^{\text{base}}$ dioptimasi untuk periode $t$ dalam jendela $[t, t+H_f]$ (*frozen*), sedangkan $x_{t,\omega}^{r}$ menyediakan fleksibilitas recourse untuk periode setelahnya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini mengikuti SOP lima-tahap yang dirancang untuk kompatibilitas dengan sistem ERP/MES industri:

**Tahap 1 – Akuisisi Data Historis & Estimasi Parameter MMFE.** Kumpulkan data permintaan historis minimum 36 periode. Estimasi parameter drift $\Delta D_{t,\omega}$ dan struktur autokorelasi residual $\varepsilon_{t,\omega}$ menggunakan Maximum Likelihood Estimation atau metode Hannan-Rissanen untuk menjamin sifat martingale.

**Tahap 2 – Pembangkitan Skenario.** Gunakan teknik *Monte Carlo sampling* untuk membangkitkan $N = 500$–$2000$ skenario permintaan berdasarkan parameter MMFE Tahap 1. Terapkan *scenario reduction* (misalnya algoritma forward selection dari Heitsch & Römisch) untuk mereduksi menjadi $|\Omega| = 50$–$100$ skenario representatif guna menjaga tractabilitas komputasional.

**Tahap 3 – Optimisasi Dua-Tahap.** Selesaikan formulasi program stokastik menggunakan pemecah Mixed-Integer Linear Programming (MILP) seperti Gurobi atau CPLEX dengan *Benders decomposition* untuk menangani ukuran masalah industri nyata. Batas toleransi optimalitas ditetapkan pada *gap* $\leq 0,5\%$.

**Tahap 4 – Eksekusi Rolling-Horizon.** Pada setiap awal periode $t$, lakukan: (i) perbarui informasi permintaan aktual $D_{t-1}^{\text{actual}}$, (ii) bangkitkan ulang skenario untuk horizon masa depan, (iii) selesaikan ulang model untuk horizon $[t, t+H_f+H_r]$ dengan $H_f$ = *frozen horizon* dan $H_r$ = *recourse horizon*, (iv) eksekusi keputusan $x_t^{\text{base}}$ di lini produksi.

**Tahap 5 – Monitoring & Adaptasi.** Hitung Key Performance Indicator (KPI): *Service Level* (target $\geq 95\%$), *Inventory Turnover*, dan *Variance Reduction*. Jika *service level* jatuh di bawah ambang, picu *automatic re-optimization* dengan horizon yang lebih panjang.

Diagram alir logikanya adalah: **[Data Historis] → [Estimasi MMFE] → [Scenario Generation] → [Benders Decomposition] → [MILP Solve] → [Base Plan] → [Execute] → [Actual Demand] → [Rolling Update] → [Recourse Adjustment] → [Next Period]**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Pabrik Komponen Otomotif Tier-1.** Misalkan seorang perencana produksi menghadapi horizon $T = 6$ periode (bulan) dengan permintaan rata-rata dan MMFE sebagai berikut. Kapasitas produksi $C = 150$ unit/period, biaya setup $s = \$300$, biaya produksi $c = \$10$/unit, biaya simpan $h = \$1,5$/unit/bulan, biaya backorder $p = \$5$/unit/bulan. Tabel permintaan skenario:

| Periode $t$ | Ramalan Awal $\hat{D}_t$ | Realisasi Skenario ($\omega_1$) | Realisasi ($\omega_2$) |
|:---:|:---:|:---:|:---:|
| 1 | 100 | 105 | 95 |
| 2 | 120 | 135 | 110 |
| 3 | 110 | 100 | 125 |
| 4 | 130 | 140 | 115 |
| 5 | 100 | 95 | 110 |
| 6 | 140 | 150 | 130 |

Probabilitas $p_{\omega_1} = p_{\omega_2} = 0{,}5$. Asumsikan $y_t = 1$ untuk $t \in \{1,2,3,4,5,6\}$ (setup aktif di seluruh horizon karena produksi kontinu).

**Langkah 1: Hitung Biaya Tahap Pertama (Deterministik/Ekspektasi).**

$$\sum_{t=1}^{6}\left(s \cdot y_t + c \cdot \hat{x}_t^{\text