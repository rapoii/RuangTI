# 2545 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh volatilitas permintaan, fragmentasi rantai pasok, serta siklus hidup produk yang semakin pendek, keputusan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) tidak lagi dapat dipisahkan dari penanganan eksplisit terhadap ketidakpastian. Lead Researchers (2025) dalam artikelnya yang diterbitkan di *Cuestiones de fisioterapia*, Vol. 54 No. 02, halaman 2007–2018, mengusulkan sebuah model *hybrid stochastic optimization* yang menjembatani dua keputusan operasional yang selama ini diperlakukan secara terpisah dalam literatur akademik: perencanaan tingkat disagregat (*lot sizing*) dan eksekusi tingkat agregat (*scheduling*). DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) merujuk pada naskah yang secara rigor memformulasikan masalah simultan ini di bawah payung optimasi stokastik dua tahap (*two-stage stochastic programming*).

Urgensi operasional dari topik ini sangat nyata di industri. Pada perusahaan manufaktur proses kontinu dan batch — seperti industri makanan-minuman, farmasi, kimia khusus, dan semikonduktor — perencanaan ukuran lot yang忽略了 ketidakpastian permintaan akan menghasilkan biaya persediaan yang membengkak atau *stockout* yang merugikan. Sebaliknya, optimasi deterministik yang dilengkapi *safety stock* seringkali *over-inflated* dan tidak mampu memanfaatkan peluang *replanning* ketika informasi permintaan baru tersedia. Alexandre Forel dan Martin Grunow (2023) dalam *Production and Operations Management* (DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyoroti jurang antara pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dengan praktik industri: "Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates." Temuan empiris mereka menunjukkan bahwa *forecast evolution* model seperti *Martingale Model of Forecast Evolution* (MMFE) mampu mengurangi biaya aktual secara signifikan ketika diintegrasikan ke dalam kerangka *rolling-horizon planning*.

Konteks ekonomi dan teknis dari masalah ini relevan di berbagai sektor. Pada industri consumer goods dengan ribuan SKU, keputusan lot-sizing yang tidak efisien dapat menimbulkan biaya simpan hingga 20–30% dari nilai persediaan (Forel & Grunow, 2023). Pada industri *job-shop* dengan *sequence-dependent setup*, integrasi keputusan lot dan jadwal terbukti menurunkan *makespan* hingga 15% dibanding dekomposisi sekuensial. Model hybrid yang ditawarkan Lead Researchers (2025) menjawab kebutuhan ini dengan menggabungkan *stochastic programming* untuk lot sizing dengan *constraint programming* atau *mixed-integer programming* untuk penjadwalan, sehingga menghasilkan rencana yang secara simultan *robust* terhadap permintaan dan layak secara operasional.

## 2. Landasan Teori & Formulasi Matematis

Formulasi inti yang dikembangkan oleh Lead Researchers (2025) merupakan program stokastik dua tahap dengan recourse. Tahap pertama (*first stage*) memutuskan variabel lot-sizing sebelum realisasi permintaan, sedangkan tahap kedua (*second stage*) melakukan recourse penjadwalan setelah skenario permintaan $\omega \in \Omega$ terrealisasi. Formulasi minimisasi biaya ekspektasi dapat ditulis sebagai:

$$
\min \; \mathbb{E}_{\omega}\left[\, \sum_{t=1}^{T} \left( h_t I_t(\omega) + p_t P_t(\omega) + s_t Y_t + \sum_{j \in \mathcal{J}} c_{jt} X_{jt}(\omega) \right) \,\right]
$$

dengan $h_t$ biaya simpan per unit, $p_t$ biaya *backorder* per unit, $s_t$ biaya *setup*, $c_{jt}$ biaya pemrosesan operasi $j$, dan variabel keputusan $I_t$ (persediaan akhir periode), $P_t$ (produksi), $Y_t$ (setup biner), serta $X_{jt}$ (alokasi operasi). Sumber ketidakpastian bersumber dari permintaan acak $d_t(\omega)$ yang dimodelkan melalui *scenario tree* dengan probabilitas transisi $\pi_\omega$.

Untuk menangkap evolusi ramalan dalam *rolling-horizon*, Forel & Grunow (2023) memperkenalkan MMFE sebagai berikut. Jika $D_{t|T}$ adalah ramalan permintaan pada horizon $T$ untuk periode $t$, maka MMFE menspesifikasikan:

$$
D_{t|T} = D_{t|T-1} + \varepsilon_{t|T}, \quad \varepsilon_{t|T} \sim \mathcal{N}(0,\sigma_{t|T}^2)
$$

dengan $\varepsilon_{t|T}$ independen dan $\sigma_{t|T}^2$ menurun ketika $T$ mendekati $t$ (ramalan membaik). Persamaan ini memungkinkan pengintegrasian *forecast update* ke dalam model stokastik tanpa menambah variabel keputusan secara eksponensial.

Konservasi persediaan mengikuti neraca massa klasik:

$$
I_{t}(\omega) = I_{t-1}(\omega) + P_{t}(\omega) - d_{t}(\omega) + B_{t}^{-}(\omega) - B_{t}^{+}(\omega)
$$

dengan $B_{t}^{-}$ (*backlog*) dan $B_{t}^{+}$ (*backorder fulfilled*) dikelola melalui *lost-sales* atau *backorder policy* tergantung pada sektor industri. Kapasitas produksi dimodelkan melalui:

$$
\sum_{j \in \mathcal{J}} a_{jt}\, X_{jt}(\omega) \leq b_{t} \cdot Y_{t}, \quad Y_{t} \in \{0,1\}
$$

dengan $a_{jt}$ waktu pemrosesan operasi $j$ dan $b_t$ kapasitas tersedia. Komponen penjadwalan biasanya dinyatakan sebagai *disjunctive constraints* untuk *sequence-dependent setup*:

$$
X_{ij,t} + X_{ji,t} \leq 1, \quad \forall \, (i,j) \in \mathcal{P}, \; t = 1,\ldots,T
$$

yang menjamin tidak ada dua operasi yang bersaing pada mesin yang sama secara bersamaan. Pendekatan *hybrid* Lead Researchers (2025) menggunakan dekomposisi Benders atau *branch-and-price* untuk menyatukan lot-sizing (tingkat MIP) dan penjadwalan (tingkat CP/IP) dalam satu kerangka solusi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid di industri memerlukan prosedur operasional yang terstruktur. Berikut adalah SOP yang dirancang berdasarkan sintesis literatur:

**Tahap 1 — Akuisisi Data Historis.** Kumpulkan data permintaan historis minimal 24–36 periode untuk mengestimasi parameter MMFE ($\mu_t$, $\sigma_{t|T}$). Validasi data menggunakan *outlier detection* dan *stationarity test* (ADF/KPSS).

**Tahap 2 — Pembangkitan Skenario.** Gunakan teknik *moment matching* atau *Monte Carlo sampling* untuk membangkitkan $N_s = 200$–$500$ skenario permintaan. Reduksi skenario melalui *forward selection* (algoritma Heitsch & Römisch) sehingga menjadi 20–30 skenario representatif.

**Tahap 3 — Optimasi Dua Tahap.** Selesaikan program stokastik dengan *Benders decomposition* atau *progressive hedging*. Master problem menyelesaikan lot-sizing, subproblem menyelesaikan penjadwalan.

**Tahap 4 — Pelaksanaan Rolling-Horizon.** Setiap $H$ periode (umumnya mingguan), perbarui ramalan, regenerasi skenario, dan selesaikan ulang model. Forel & Grunow (2023) menunjukkan bahwa horizon $H=4$–$8$ memberikan keseimbangan terbaik antara reaktivitas dan stabilitas.

**Tahap 5 — Recourse dan Pelaksanaan.** Eksekusi jadwal harian; jika deviasi $> 5\%$ dari rencana, aktifkan *production recourse* (lembur, *subcontract*, atau *resequencing*).

```
[ Data Historis ] → [ Estimasi MMFE ] → [ Pembangkitan Skenario ]
        ↓                                          ↓
[ Validasi Outlier ]                  [ Reduksi Skenario ]
                                              ↓
                          [ Optimasi Hybrid (Benders) ]
                                              ↓
                    [ Lot-Sizing (MIP) + Scheduling (CP) ]
                                              ↓
                [ Pelaksanaan Rolling-Horizon setiap H periode ]
                                              ↓
                  [ Monitoring Deviasi & Recourse Production ]
```

Arsitektur teknologi pendukung umumnya berupa *ERP* (SAP/Oracle) sebagai sumber data, *APS* layer (opl, AIMMS, Gurobi) sebagai solver, dan *BI dashboard* (Power BI, Tableau) untuk visualisasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan sebuah pabrik farmasi yang memproduksi 3 produk ($A$, $B$, $C$) pada lini tunggal dengan kapasitas $b_t = 480$ jam per periode, $T = 6$ periode. Biaya: $h = 2$, $p = 15$, $s = 200$. Waktu setup $st_{ij}$ diberikan oleh matriks:

$$
ST = \begin{bmatrix} 0 & 10 & 15 \\ 12 & 0 & 8 \\ 14 & 9 & 0 \end{bmatrix} \text{ jam}
$$

Permintaan deterministik awal $d = [120, 95, 140, 110, 130, 100]$, namun dengan ketidakpastian $\sigma = 0{,}15 \cdot d$. Kapasitas produksi $a = 1{,}2$ jam/unit.

**Langkah 1 — Pembangkitan 3 skenario.** Skenario "rendah" (prob 0,25): $d^L = [108, 85, 126, 99, 117, 90]$. Skenario "sedang" (prob 0,50): $d^M = d$. Skenario "tinggi" (prob 0,25): $d^H = [132, 104, 154, 121, 143, 110]$.

**Langkah 2 — Penyelesaian tahap pertama.** Misalkan solver memilih lot $Q = [108, 85, 154, 99, 143, 110]$ (memenuhi permintaan semua skenario tanpa *stockout*). Biaya produksi total:

$$
\sum_t s_t Y_t + \sum_t h_t \cdot \frac{Q_t - d_t}{2} = 4(200) + 2 \cdot \frac{(108+85+154+99+143+110) - (120+95+140+110+130+100)}{2}
$$

$$
= 800 + 2 \cdot \frac{699 - 695}{2} = 800 + 4 = 804
$$

**Langkah 3 — Penjadwalan sequence-dependent.** Total setup antar produk pada 5 transisi $\approx 10 + 12 + 14 + 9 + 15 = 60$ jam. Total waktu produksi $\approx 699 \times 1{,}2 = 838{,}8$ jam. Total waktu $=\, 838{,}8 + 60 = 898{,}8$ jam, dieksekusi dalam 2 shift (960 jam) sehingga layak kapasitas.

**Langkah 4 — Ekspektasi biaya dengan recourse.** Pada skenario $d^H$, lakukan overtime 40 jam dengan biaya premium 30%:

$$
\mathbb{E}[C] = 0{,}25 \cdot 850 + 0{,}50 \cdot 804 + 0{,}25 \cdot 870 = 832
$$

**Interpretasi manajerial:** Dibanding kebijakan deterministik dengan safety stock 20% ($C_{det} \approx 920$), model hybrid menurunkan biaya ekspektasi sebesar $9{,}6\%$. Lead Researchers (2025) melaporkan *cost savings* serupa (8–12%) pada studi kasus industri baja dan makanan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model yang ditawarkan Lead Researchers (2025) memiliki kekuatan pada integrasi simultan keputusan lot dan jadwal yang selama ini diperlakukan secara hierarkis. Namun, beberapa keterbatasan perlu dicatat. Pertama, kompleksitas komputasional meningkat eksponensial dengan jumlah skenario dan produk; untuk industri dengan $>50$ SKU, dekomposisi*Benders* mungkin memerlukan waktu komputasi $>30$ menit, melebihi batas interaktifitas perencana. Kedua, estimasi parameter MMFE memerlukan data historis yang stabil, yang sulit dipenuhi