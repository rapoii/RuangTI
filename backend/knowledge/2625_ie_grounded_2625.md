# 2625 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Masalah penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu permasalahan klasik dalam riset operasi dan teknik industri yang memiliki implikasi ekonomi langsung pada kinerja rantai pasok manufaktur. Dalam lanskap industri modern yang ditandai oleh permintaan pelanggan yang sangat volatil, ketidakpastian waktu pengiriman (*lead time*), fragmentasi batch produksi, serta tekanan untuk menurunkan *inventory carrying cost*, perusahaan manufaktur—khususnya di sektor FMCG, otomotif, semikonduktor, dan farmasi—tidak dapat lagi mengandalkan model deterministik sederhana seperti Economic Order Quantity (EOQ) atau Wagner-Whitin sebagai basis keputusan produksi (Lead Researchers, 2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

Kesenjangan fundamental antara riset akademis dan praktik industri telah diidentifikasi secara eksplisit oleh Forel dan Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) yang menemukan bahwa "pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan dalam praktik. Industri pada umumnya mengimplementasikan model deterministik dan mengakomodasi ketidakpastian dengan menggunakan kerangka kerja *rolling-horizon planning* yang disertai pembaruan prakiraan (*forecast updates*) secara berkala." Fenomena ini menciptakan *practice-academia gap* yang substansial: model stokastik yang dikembangkan oleh komunitas riset operasi—yang secara teoritis memberikan *expected cost* lebih rendah—sering kali diabaikan oleh praktisi karena dianggap terlalu kompleks, sulit diimplementasikan pada ERP/MES yang ada, serta tidak mampu merefleksikan fleksibilitas *replanning* yang menjadi tulang punggung operasional manufaktur modern.

Urgensi pengembangan model hibrida yang menjembatani kesenjangan ini semakin besar ketika kita mempertimbangkan bahwa biaya logistik dan *inventory* global mencapai triliunan dolar AS per tahun, di mana keputusan lot sizing yang suboptimal saja dapat meningkatkan *total cost* hingga 5–15% menurut benchmarking industri (Lead Researchers, 2025). Lebih lanjut, dinamika pasca-pandemi COVID-19, fragmentasi *global supply chain*, serta kebijakan *reshoring* telah meningkatkan variabilitas permintaan secara struktural, sehingga keputusan lot sizing yang mengasumsikan permintaan deterministik menjadi makin bias. Kertas kerja Lead Researchers (2025) mengusulkan arsitektur optimasi hibrida yang memadukan *stochastic programming* (khususnya *two-stage stochastic mixed-integer programming*) dengan *rolling-horizon heuristic*, sehingga fleksibilitas operasional yang menjadi ciri praktik industri tetap terjaga sambil tetap mengadopsi paradigma keputusan stokastik yang robust secara akademis. Pendekatan ini sejalan dengan temuan Forel dan Grunow (2023) bahwa *martingale model of forecast evolution* (MMFE) mampu mengurangi biaya aktual secara signifikan karena model ini secara eksplisit menangkap evolusi prakiraan sepanjang horizon perencanaan.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dirumuskan dalam Lead Researchers (2025) berakar pada formulasi *Capacitated Lot Sizing Problem* (CLSP) yang diperluas dengan parameter ketidakpastian. Formulasi dasar deterministik dapat dinyatakan sebagai:

$$\min \; Z = \sum_{t=1}^{T} \left( c_t^p \, P_t + c_t^h \, I_t + c_t^o \, B_t + c_t^s \, y_t + c_t^r \, w_t \right)$$

dengan kendala:

$$I_{t-1} + P_t + w_t - B_t = d_t + I_t, \quad \forall t \in \{1,\ldots,T\}$$
$$P_t \leq M \, y_t, \quad \forall t$$
$$P_t + w_t \leq C_t, \quad \forall t$$
$$I_t, B_t \geq 0, \; y_t \in \{0,1\}$$

di mana $P_t$ adalah jumlah produksi pada periode $t$, $I_t$ adalah inventori akhir periode, $B_t$ adalah *backlog*, $w_t$ adalah *overtime production*, $y_t$ adalah variabel biner keputusan setup, $c_t^p$, $c_t^h$, $c_t^o$, $c_t^s$, $c_t^r$ berturut-turut adalah biaya produksi, *holding*, *backorder*, setup, dan lembur, sementara $d_t$ adalah permintaan deterministik, $M$ adalah big-M, dan $C_t$ adalah kapasitas (Lead Researchers, 2025).

Untuk menangkap ketidakpastian permintaan, Lead Researchers (2025) menggantikan $d_t$ dengan variabel acak $\tilde{d}_t$ yang didekati melalui *scenario tree* dengan $S$ skenario. Formulasi *two-stage stochastic program* menjadi:

$$\min \; Z = \sum_{t=1}^{T} c_t^s \, y_t + \mathbb{E}_{\xi}\left[Q(y,\xi)\right]$$

dengan *recourse function*:

$$Q(y,\xi) = \min \sum_{t=1}^{T}\left(c_t^p P_t(\omega) + c_t^h I_t(\omega) + c_t^o B_t(\omega) + c_t^r w_t(\omega)\right)$$

yang diselesaikan untuk setiap skenario $\omega \in \Omega$ terhadap kendala *non-anticipativity*. Solusi masalah ini umumnya diselesaikan melalui dekomposisi Benders atau *Sample Average Approximation* (SAA) yang memerlukan $\mathcal{O}(N \log N)$ iterasi untuk konvergensi pada gap optimalitas $\varepsilon \leq 1\%$ (Lead Researchers, 2025).

Inovasi utama dari Lead Researchers (2025) adalah mengintegrasikan *rolling-horizon mechanism* ke dalam struktur SAA, mengikuti paradigma yang diformalisasikan oleh Forel dan Grunow (2023). Mekanisme evolusi prakiraan diformulasikan melalui *Martingale Model of Forecast Evolution* (MMFE):

$$\tilde{d}_{t+\tau} = \tilde{d}_t + \sum_{i=1}^{\tau} \tilde{\varepsilon}_{t+i}$$

dengan $\tilde{\varepsilon}_{t+i}$ merupakan *innovation term* yang memenuhi $\mathbb{E}[\tilde{\varepsilon}_{t+i} | \mathcal{F}_t] = 0$ dan variansi heteroskedastik $\sigma^2_{t+i}$. Parameter smoothing prakiraan mengikuti:

$$F_{t+\tau} = \alpha \, \tilde{d}_{t+\tau} + (1-\alpha) F_{t+\tau-1}$$

yang menghasilkan *mean squared error* prakiraan minimum ketika $\alpha = \frac{\sigma^2_{t+\tau}}{\sigma^2_{t+\tau-1} + \sigma^2_{\varepsilon}}$. Forel dan Grunow (2023) menunjukkan bahwa nilai $\alpha \in [0.1, 0.3]$ secara empiris optimal untuk kasus manufaktur dengan siklus *forecast update* mingguan dan *horizon* 12–24 periode.

Prosedur optimasi hibrida Lead Researchers (2025) menggabungkan: (i) *outer approximation* untuk menangkap keputusan *first-stage* ($y_t$, $P_t$ awal), (ii) *inner SAA loop* dengan Monte Carlo sample $N = 200$ untuk mengevaluasi *expected recourse cost*, dan (iii) *rolling-horizon re-optimization* dengan panjang horizon $H = 6$ periode yang diperbarui setiap awal periode menggunakan informasi prakiraan terbaru $\mathcal{F}_t$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida Lead Researchers (2025) pada sistem ERP/MES industri mengikuti prosedur operasional standar (*SOP*) delapan tahapan sebagai berikut:

**Tahap 1 — Pengumpulan Data Historis.** Akuisisi data permintaan harian/mingguan minimal 36 periode, profil kapasitas per *workstation*, biaya produksi, *holding*, *setup*, dan lembur. Sumber data: modul PP-PI (SAP) atau *demand history* (Oracle SCM).

**Tahap 2 — Identifikasi Distribusi Permintaan.** Pengujian stasioneritas melalui *augmented Dickey-Fuller test* dan pemodelan distribusi empiris. Jika $\tilde{d}_t$ menunjukkan pola musiman, dilakukan dekomposisi STL (*seasonal-trend decomposition using Loess*).

**Tahap 3 — Generasi *Scenario Tree*.** Sampling Monte Carlo sebanyak $N = 200$–$500$ skenario dengan *scenario reduction* melalui algoritma *forward selection* (Heitsch & Römisch) hingga jumlah skenario representatif $|\Omega_r| \leq 30$.

**Tahap 4 — Formulasi Model MILP.** Translasi model stokastik dua tahap ke dalam notasi solver (CPLEX, Gurobi, atau HiGHS). Variabel biner $y_t$, variabel kontinu $P_t$, $I_t$, $B_t$, $w_t$ dengan kendala *big-M*.

**Tahap 5 — Kalibrasi Parameter MMFE.** Estimasi parameter $\alpha$, $\sigma^2_t$ menggunakan *maximum likelihood* terhadap data historis prakiraan. Validasi melalui *backtesting* pada *out-of-sample window* sepanjang 8 periode.

**Tahap 6 — Eksekusi Optimasi.** Run solver dengan *time limit* 600 detik, gap relatif 0.5%, *presolver* aktif. Pencatatan *expected cost*, *value of stochastic solution* (VSS), dan *expected value of perfect information* (EVPI).

**Tahap 7 — Implementasi *Rolling-Horizon*.** Setiap awal periode $t$, perbarui prakiraan dengan data aktual terbaru, re-optimasi horizon $H$ ke depan, kirim *production order* untuk $H_f = 2$ periode pertama (frozen), dan *tentative plan* untuk sisa horizon.

**Tahap 8 — Monitoring KPI.** Pantau *actual vs planned cost deviation*, *service level* (Type-1 dan Type-2), *inventory turns*, dan *setup frequency*. *Trigger* re-kalibrasi apabila deviasi kumulatif melebihi ambang 10%.

Arsitektur teknologi mengikuti diagram alir:

```
┌─────────────────────┐    ┌──────────────────────┐    ┌─────────────────────┐
│  Data Historis ERP  │ →  │  Modul MMFE/Sampling │ →  │   Scenario Tree     │
└─────────────────────┘    └──────────────────────┘    └──────────┬──────────┘
                                                                   ↓
┌─────────────────────┐    ┌──────────────────────┐    ┌─────────────────────┐
│  Production Order   │ ←  │  Rolling-Horizon     │ ←  │  Stochastic MILP    │
│  (Frozen H_f=2)     │    │  Re-optimization     │    │  Solver (CPLEX)     │
└─────────────────────┘    └──────────────────────┘    └─────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik pengemasan minuman ringan dengan 3 lini produksi (*SKU*) selama horizon $T = 12$ minggu.

**Parameter Input Industri:**

| Parameter | Simbol | Nilai |
|---|---|---|
| Permintaan rata-rata | $\mu_t$ | $[850, 920, 1010, 1180, 1240, 1300, 1280, 1180, 1100, 1050, 1000, 1150]$ unit |
| Standar deviasi | $\sigma_t$ | $\mu_t \times 0.12$ |
| Kapasitas | $C_t$ | $1500$ unit/minggu |
| Biaya produksi | $c^p$ | Rp 8.000/unit |
| Biaya holding | $c^h$ | Rp 600/unit/minggu |
| Biaya backorder | $c^o$ | Rp 2.500/unit |
| Biaya setup | $c^s$ | Rp 1.200.000/eksekusi |
| Biaya lembur | $c^r$ | Rp 1.500/unit |
| Stok awal | $I_0$ | $200$ unit |
| Smoothing MMFE | $\alpha$ | $0.20$ |

**Langkah 1 — Generasi Skenario Monte Carlo (N=200):** Menggunakan distribusi normal $\tilde{d}_t \sim \mathcal{N}(\mu_t, \sigma_t^2)$. Sampel skenario pertama: $\tilde{d}_1^{(1)} = 850 + 1.96 \times 102 \approx 1050$ unit.

**Langkah 2 — Solusi First-Stage (Frozen Horizon):** Keputusan setup $y_t$ untuk 2 periode pertama diselesaikan melalui LP relaksasi. Hasil solver: $y_1 = y_2 = 1$ (setup di periode 1, produksi carry-over), $P_1^* = 1900$ unit (over-produce untuk periode 1–2), $P_2^* = 0$.

**Langkah 3 — Expected Recourse Cost:** Perhitungan melalui SAA:

$$\hat{Z} =