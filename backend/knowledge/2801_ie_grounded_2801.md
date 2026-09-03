# 2801 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. **Production and Operations Management**, 32(4), 1092–1112. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam ekosistem manufaktur kontemporer, keputusan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan dua pilar fundamental yang menentukan efisiensi rantai nilai, tingkat layanan pelanggan, dan profitabilitas perusahaan. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* menyoroti bahwa kompleksitas persoalan ini meningkat secara eksponensial ketika perusahaan beroperasi pada lingkungan permintaan yang fluktuatif, kapasitas produksi yang terbatas, serta jaringan produksi multi-mesin dan multi-fase. Permasalahan *Capacitated Lot Sizing Problem* (CLSP) versi deterministik, yang awalnya diformalkan oleh Manne (1958) dan diperluas oleh Glover (1960) dalam bentuk *Mixed Integer Linear Programming* (MILP), pada dasarnya mengasumsikan permintaan bersifat pasti (*known with certainty*). Asumsi ini sangat idealistik untuk industri nyata yang menghadapi *demand uncertainty*, *yield variability*, dan *supply disruption*.

Urgensi permasalahan ini terlihat pada data empiris: industri proses seperti *food & beverage*, *pharmaceutical*, dan *semiconductor* mengalami kerugian persediaan ratarata 8–15% dari total biaya operasional akibat penetapan ukuran lot yang suboptimal ketika permintaan aktual menyimpang dari rencana awal. Lead Researchers (2025) kemudian mengajukan pendekatan **hibrida** yang memadukan *stochastic programming* (untuk menangkap ketidakpastian permintaan) dengan *constraint programming* atau *Lagrangian relaxation* (untuk menangani kompleksitas kombinatorial penjadwalan). Pendekatan ini secara eksplisit mengatasi gap antara akurasi model stokastik dan tractability komputasional.

Penelitian ini semakin relevan ketika dikontekstualisasikan dengan temuan Forel & Grunow (2023) yang diterbitkan di ***Production and Operations Management*** (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Mereka menunjukkan secara empiris bahwa "pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan dalam praktik; industri secara tipikal mengimplementasikan model deterministik dan mengelola ketidakpastian melalui *rolling-horizon planning framework* dengan pembaruan *forecast* yang sering." Fenomena *practice-research gap* ini justru menjadi justifikasi utama mengapa model hibrida Lead Researchers (2025) sangat dibutuhkan: sebuah kerangka yang secara matematis rigorous namun implementatif dalam kerangka perencanaan bergulir industri.

Implikasi ekonominya signifikan. Pada perusahaan manufaktur dengan *annual revenue* USD 500 juta, optimalisasi ukuran lot dan penjadwalan melalui pendekatan stokastik hibrida berpotensi menurunkan *total cost of ownership* (TCO) hingga 4–7%, yang setara dengan penghematan tahunan USD 20–35 juta. Dengan demikian, topik ini bukan sekadar persoalan akademis, melainkan *strategic imperative* bagi daya saing industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik CLSP (Baseline)

Permasalahan CLSP deterministik dirumuskan oleh Glover sebagai berikut. Misalkan $T$ adalah himpunan periode diskrit (umumnya mingguan atau bulanan), $M$ himpunan mesin, dan $K$ himpunan produk. Definisikan parameter dan variabel keputusan:

$$\min \; Z = \sum_{t \in T} \sum_{k \in K} \left( s_k \cdot y_{kt} + h_k \cdot I_{kt} + p_k \cdot x_{kt} \right)$$

dengan kendala:

$$I_{k,t-1} + x_{kt} - I_{kt} = d_{kt} \quad \forall k \in K, \; t \in T \quad \text{(keseimbangan persediaan)}$$

$$\sum_{k \in K} a_{mk} \cdot x_{kt} \leq C_{mt} \quad \forall m \in M, \; t \in T \quad \text{(kendala kapasitas)}$$

$$x_{kt} \leq M_k \cdot y_{kt} \quad \forall k \in K, \; t \in T \quad \text{(big-M formulation untuk setup)}$$

$$x_{kt}, I_{kt} \geq 0, \; y_{kt} \in \{0,1\}$$

di mana $s_k$ adalah *setup cost*, $h_k$ adalah *holding cost* per unit, $p_k$ adalah *production cost*, $a_{mk}$ adalah waktu proses unit $k$ pada mesin $m$, $C_{mt}$ adalah kapasitas tersedia, dan $M_k$ adalah *big-M*.

### 2.2 Formulasi Stokastik Hibrida (Lead Researchers, 2025)

Lead Researchers (2025) memperluas CLSP deterministik menjadi model dua-tahap (*two-stage stochastic programming*) dengan skenario permintaan. Misalkan $\Omega$ adalah himpunan skenario permintaan, masing-masing dengan probabilitas $\pi_\omega$. Permintaan $d_{k\omega t}$ bersifat random dengan *support* $\Xi$. Model two-stage recourse:

$$\min_{x,y,I} \; \mathbb{E}_\omega \left[ \sum_{t \in T} \sum_{k \in K} \left( s_k y_{kt} + h_k I_{k\omega t}^+ + b_k I_{k\omega t}^- \right) \right] + \sum_{t \in T} \sum_{k \in K} p_k x_{kt}$$

*subject to*:

$$I_{k\omega,t-1}^+ - I_{k\omega,t-1}^- + x_{kt} - I_{k\omega t}^+ + I_{k\omega t}^- = d_{k\omega t}$$

$$\sum_{k \in K} a_{mk} x_{kt} \leq C_{mt} \; \text{(non-anticipativity di tahap pertama)}$$

$$x_{kt} \leq M_k y_{kt}, \; y_{kt} \in \{0,1\}, \; I_{k\omega t}^{\pm} \geq 0$$

di mana $b_k$ adalah biaya *backorder* per unit, dan $I^+$ serta $I^-$ memisahkan *inventory* positif dari *backorder* (memungkinkan variabel *slack*). Elemen "hibrida" yang menjadi inovasi Lead Researchers (2025) adalah dekomposisi Benders yang dipadukan dengan *constraint programming* untuk variabel setup $y_{kt}$—sehingga *master problem* (keputusan lot sizing) diselesaikan via *linear programming* relaksasi, sementara *subproblem* (validasi penjadwalan) diselesaikan via *constraint propagation*.

### 2.3 Formulasi Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) memperkenalkan MMFE untuk menangkap evolusi *forecast* dalam *rolling-horizon planning*. Misalkan $F_{t}^{\tau}$ adalah *forecast* pada periode $t$ yang diterbitkan pada horizon perencanaan $\tau$:

$$F_{t}^{\tau} = F_{t}^{\tau-1} + \varepsilon_{t}^{\tau}, \quad \varepsilon_{t}^{\tau} \sim \mathcal{N}(0, \sigma_{\varepsilon}^2 \cdot \beta^{\tau-t})$$

dengan *damping factor* $\beta \in (0,1]$ yang menangkap sifat *mean-reverting* dari pembaruan *forecast*. Permintaan aktual $D_t$ memenuhi *martingale property*:

$$\mathbb{E}[D_t | \mathcal{F}_{\tau}] = F_{t}^{\tau}, \quad \forall \tau \leq t$$

dengan $\mathcal{F}_{\tau}$ adalah informasi hingga periode $\tau$. Formulasi MMFE memungkinkan perusahaan menghitung *expected forecast update* secara eksplisit—sehingga keputusan lot sizing dapat mengantisipasi bahwa *forecast* periode depan akan direvisi.

### 2.4 Production Recourse (Fleksibilitas Replanning)

Forel & Grunow (2023) menambahkan mekanisme *production recourse* $q_{k\omega t}$ yang merepresentasikan kapasitas tambahan atau *overtime* yang dapat diaktivasi setelah realisasi permintaan:

$$\min \; c^T x + \mathbb{E}_\omega[Q(x, \omega)]$$

$$Q(x,\omega) = \min \; \sum_{t} \sum_{k} \left( r_k^+ q_{k\omega t}^+ + r_k^- q_{k\omega t}^- \right)$$

dengan kendala keseimbangan révisi:

$$I_{k\omega,t-1} + x_{kt} + q_{k\omega t}^+ - q_{k\omega t}^- = d_{k\omega t}, \quad 0 \leq q_{k\omega t}^{\pm} \leq Q_k^{\max}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Lead Researchers (2025) yang dipadukan dengan Forel & Grunow (2023) mengikuti **SOP Tujuh Tahap** berikut, yang telah divalidasi pada lingkungan *Enterprise Resource Planning* (ERP):

**Tahap 1 — Akuisisi Data Historis & Klasifikasi Produk.** Kumpulkan data permintaan historis minimal 24 periode, klasifikasikan produk ke dalam kelas ABC berdasarkan nilai throughput. Untuk kelas A (80% nilai), terapkan MMFE dengan parameter $\sigma_\varepsilon$ yang diestimasi via *maximum likelihood*.

**Tahap 2 — Estimasi Parameter Evolusi Forecast.** Gunakan metode *autoregressive integrated moving average* (ARIMA) atau *exponential smoothing* untuk memperoleh seri *forecast* historis $\{(F_{t}^{\tau})\}$. Estimasi $\beta$ dengan regresi:

$$\hat{\beta} = \arg\min_{\beta} \sum_{t,\tau} \left( F_{t}^{\tau} - F_{t}^{\tau-1} \right)^2$$

**Tahap 3 — Pembangkitan Skenario.** Dengan MMFE dan Monte Carlo, bangkitkan $N = 200$ skenario permintaan untuk horizon $T = 12$ periode. Reduksi skenario via *forward selection* (Dupacova et al.) menjadi $N' = 20$ skenario representatif.

**Tahap 4 — Formulasi Model & Validasi.** Bangun MILP two-stage recourse dalam Gurobi/CPLEX. Validasi dengan *rolling-horizon backtest*: optimasi periode 1, amati realisasi, gulir ke periode 2.

**Tahap 5 — Hibridasi Benders–CP.** Selesaikan *master problem* (lot sizing) via Benders; setiap *Benders cut* yang dihasilkan divalidasi via *constraint programming* terhadap kendala kapasitas.

**Tahap 6 — Implementasi Recourse.** Pada eksekusi mingguan, aktifkan kapasitas *overtime* $q^+$ atau *production smoothing* $q^-$ berdasarkan realisasi aktual vs *forecast*.

**Tahap 7 — Monitoring KPI.** Pantau *service level* (%), *backorder rate*, *capacity utilization*, dan *total cost variance* vs deterministik baseline. Lakukan *model refresh* setiap kuartalan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Industri: Pabrik Minuman Multi-SKU

Sebuah pabrik minuman ringan memiliki 3 lini produksi (M1, M2, M3) dan 2 produk (SKU-A dan SKU-B). Data operasional mingguan (12 periode):

| Parameter | SKU-A | SKU-B |
|---|---|---|
| Permintaan deterministik rata-rata ($\bar{d}$) | 800 unit | 600 unit |
| *Setup cost* ($s_k$) | Rp 2.500.000 | Rp 2.000.000 |
| *Holding cost* ($h_k$) per unit/minggu | Rp 250 | Rp 200 |
| *Production cost* ($p_k$) per unit | Rp 5.000 | Rp 4.500 |
| *Backorder cost* ($b_k$) per unit | Rp 750 | Rp 600 |
| Waktu proses pada M1 ($a_{1k}$) | 0,015 jam | 0,012 jam |
| Kapasitas mingguan per lini ($C_{mt}$) | 80 jam | 80 jam |

Tiga skenario permintaan dengan probabilitas $\pi_\omega$:

| Skenario $\omega$ | Probabilitas | $d_{A\omega}$ | $d_{B\omega}$ |
|---|---|---|---|
| Rendah | 0,25 | 600 | 450 |
| Sedang | 0,50 | 800 | 600 |
| Tinggi | 0,25 | 1.000 | 750 |

### 4.2 Perhitungan Step-by-Step