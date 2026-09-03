# 2286 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat di Sektor MRO Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *capital-intensive* dengan armada pesawat yang bernilai ratusan miliar dolar. Per ekor pesawat narrow-body seperti Airbus A320 atau Boeing 737 bernilai lebih dari USD 100 juta, sehingga **waktu terbang (*available operation time*)** merupakan variabel strategis yang menentukan profitabilitas maskapai. Zhou (2024) dalam studinya di DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menekankan bahwa degradasi performa siklus-hidup (*life-cycle performance*) komponen pesawat bersifat **non-linear**, sehingga kebijakan pemeliharaan periodik dengan interval tetap menjadi suboptimal.

Konteks operasional yang melatarbelakangi riset ini adalah kenyataan bahwa maskapai penerbangan menerapkan **hierarki inspeksi A/B/C/D-check** yang telah distandardisasi oleh regulator (EASA, FAA) melalui dokumen *Maintenance Programme* berbasis MSG-3 (Maintenance Steering Group-3). Namun, seperti ditunjukkan Zhou (2024, [DOI: 10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)), implementasi konvensional sering kali mengabaikan fakta bahwa setelah **D-check** (overhaul penuh yang memakan waktu 1–2 bulan dan biaya USD 4–8 juta), laju degradasi tidak kembali ke nol melainkan masih memiliki *residual degradation rate* yang rendah pada fase *mature-run*. Studi Zhou memperkenalkan *framework* kebijakan MRO yang mengintegrasikan dua aktivitas: (i) **D-check overhaul penuh** yang mengembalikan reliabilitas mendekati kondisi baru (*as-good-as-new*), dan (ii) **partial refurbishments** selama periode *mature-run* untuk mempertahankan reliabilitas di atas ambang batas kritis.

Urgensi ekonominya sangat tinggi. Setiap hari pesawat *grounded* karena menunggu slot hangar MRO menyebabkan kerugian *opportunity cost* antara USD 50.000–150.000 per hari per pesawat, belum termasuk dampak *network disruption* terhadap jadwal penerbangan. Studi Zhou (2024) membuktikan secara matematis bahwa **terdapat nilai optimum jadwal inspeksi** yang memaksimalkan ketersediaan jangka panjang, sebuah kontribusi signifikan karena literatur RCM klasik (Moubray, 1997; Smith & Hinchcliffe, 2003) umumnya menyajikan kebijakan sebagai *decision rule* kualitatif, bukan optimasi matematis eksplisit. Lebih lanjut, sektor MRO global bernilai lebih dari USD 100 miliar per tahun (sesuai *MRO Market Report* yang dirujuk dalam paper), dan efisiensi 1–2% dalam ketersediaan armada di tingkat industri akan berdampak pada penghematan kolektif bernilai miliaran dolar per tahun.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dibangun Zhou berakar pada **teori renewal (*renewal reward theorem*)** dan reliabilitas non-linear berbasis distribusi Weibull untuk laju degradasi. Formulasi intinya disajikan sebagai berikut.

### 2.1. Model Degradasi Reliabilitas

Komponen $i$ pada pesawat memiliki reliabilitas sesaat $R_i(t)$ yang menurun secara stokastik sesuai distribusi Weibull dua-parameter:

$$R_i(t) = e^{-\left(\frac{t}{\eta_i}\right)^{\beta_i}}$$

dengan $\eta_i$ adalah *scale parameter* (umur karakteristik) dan $\beta_i$ adalah *shape parameter* yang merepresentasikan profil degradasi. Untuk komponen avionik, $\beta_i < 1$ mengindikasikan *infant mortality*, sementara untuk struktur fuselage $\beta_i > 1$ mengindikasikan *wear-out failure* (Zhou, 2024, [DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

### 2.2. Availability Jangka Panjang (*Long-Run Fractional Availability*)

Untuk satu siklus overhaul penuh dengan interval $T_D$ (D-check), yang diintervensi oleh $N$ *partial refurbishments* berinterval $T_p = T_D/(N+1)$, ketersediaan armada $A_\infty$ didefinisikan sebagai:

$$A_\infty = \frac{\sum_{k=0}^{N} T_{\text{op},k}}{\sum_{k=0}^{N} T_{\text{op},k} + \sum_{k=0}^{N} T_{\text{MRO},k}}$$

dengan $T_{\text{op},k}$ adalah *available operation time* pada sub-siklus ke-$k$ dan $T_{\text{MRO},k}$ adalah total downtime inspeksi/perbaikan pada sub-siklus tersebut (Zhou, 2024). Setelah D-check, sistem kembali ke reliabilitas $R_{\text{refurbished}}$, sementara setelah *partial refurbishment* reliabilitas naik ke $R_{\text{partial}} < R_{\text{refurbished}}$.

### 2.3. Fungsi Tujuan Optimasi

Zhou (2024, [DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan eksistensi nilai optimal melalui fungsi tujuan:

$$\max_{T_D, N} \quad A_\infty(T_D, N) = \frac{T_D - \sum_{k=0}^{N} \mathbb{E}[T_{\text{MRO},k}]}{T_D}$$

subject to constraint reliabilitas minimum:

$$R_i(t) \geq R_{\text{critical},i} \quad \forall i \in \mathcal{C}, \; \forall t \in [0, T_D]$$

dengan $\mathcal{C}$ himpunan komponen kritikal (Flight-Critical Components). Lemma 1 dalam paper menunjukkan bahwa $A_\infty$ adalah fungsi konkaf pada domain $(T_D, N)$ sehingga kondisi orde-satu Karush-Kuhn-Tucker menjamin **global optimum**.

### 2.4. Ekspektasi Downtime (*Expected MRO Downtime*)

Durasi MRO mengikuti *lognormal distribution* dengan parameter $\mu_{M,k}$ dan $\sigma_{M,k}$ yang tergantung pada jenis check:

$$\mathbb{E}[T_{\text{MRO},k}] = e^{\mu_{M,k} + \frac{\sigma_{M,k}^2}{2}}$$

Untuk D-check, $\mathbb{E}[T_{\text{MRO},D}] \approx 45$ hari; untuk partial refurbishment, $\mathbb{E}[T_{\text{MRO},p}] \approx 7$ hari (berdasarkan benchmark maskapai besar yang dirujuk Zhou).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *framework* Zhou (2024) ke dalam SOP maskapai dilakukan melalui **lima tahap rekayasa sistem** berikut:

**Tahap 1 — Segmentasi Komponen (*Component Criticality Analysis*).** Seluruh komponen pesawat diklasifikasikan ke dalam empat kategori MSG-3: (i) *Safety-Significant*, (ii) *Mission-Critical*, (iii) *Economic-Significant*, (iv) *Hidden Function*. Hanya kategori (i) dan (ii) yang masuk domain $\mathcal{C}$ dan memicu hard-time replacement.

**Tahap 2 — Estimasi Parameter Degradasi.** Menggunakan *Weibull Analysis* terhadap *fleet-wide failure data* minimal 5 tahun. Metode *Maximum Likelihood Estimation* (MLE) memberikan estimator $(\hat{\eta}_i, \hat{\beta}_i)$:

$$\hat{\eta}_i = \left(\frac{1}{n}\sum_{j=1}^{n} t_j^{\hat{\beta}_i}\right)^{1/\hat{\beta}_i}$$

dengan $t_j$ adalah *time-to-failure* observasi ke-$j$.

**Tahap 3 — Penjadwalan Hirarkis (*Hierarchical Optimization*).** Optimasi dua-level: (a) **Outer loop** menentukan interval $T_D$ antar D-check; (b) **Inner loop** menentukan jumlah dan waktu *partial refurbishments* $N$. Algoritma *Sequential Quadratic Programming* (SQP) digunakan karena $A_\infty$ bersifat *smooth dan non-convex ringan*.

**Tahap 4 — Validasi Simulasi Monte Carlo.** Jalankan 10.000 replikasi simulasi untuk memvalidasi bahwa *expected availability* hasil optimasi sesuai dengan realisasi stokastik (confidence interval 95%).

**Tahap 5 — Implementasi CMMS (*Computerized Maintenance Management System*).** Jadwal di-*push* ke *enterprise system* (SAP PM, AMOS, atau TRAX) untuk otomatisasi *work package generation* dan *parts forecasting*.

Diagram alir logika keputusan mengikuti pola adaptif Zhou:

```
[Inisiasi Siklus] 
       ↓
[Prediksi Degradasi R_i(t)] 
       ↓
{R_i(t) ≥ R_critical?}
   ↓ Ya           ↓ Tidak
[Lanjut Operasi]  [Trigger Maintenance]
       ↓                ↓
{T_t累計 ≥ T_D?}   [Partial Refurbishment / D-Check]
   ↓ Tidak  ↓ Ya         ↓
[Lanjut]  [D-Check]   [Update R_i ← R_refurbished]
                  ↓
            [Reset Siklus]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Maskapai Regional — Armada 20 unit Airbus A320CEO, Rute Asia Tenggara.**

Ambil parameter industri riil yang konsisten dengan paper Zhou (2024):

| Parameter | Nilai | Sumber |
|---|---|---|
| Target D-check interval $T_D$ | 12 tahun | EASA Part-M |
| Biaya D-check | USD 6.000.000 | Benchmark IATA |
| Biaya partial refurbishment | USD 1.200.000 | Benchmark IATA |
| Downtime D-check | 45 hari | Zhou (2024) |
| Downtime partial refurbishment | 7 hari | Zhou (2024) |
| Utilisasi harian pesawat | 10 jam/hari | Maskapai regional |
| Pendapatan per jam terbang | USD 12.000 | Rata-rata industri |

**Langkah 1: Perhitungan Siklus Dasar (Tanpa Partial Refurbishment, N=0).**

Waktu operasi kotor per siklus: $T_D \times 365 \times 10 = 12 \times 365 \times 10 = 43.800$ jam terbang.

Availability tanpa refurbishment:

$$A_{\infty}^{(0)} = \frac{43.800}{43.800 + 45 \times 24} = \frac{43.800}{44.880} = 0,9759 \; (97,59\%)$$

**Langkah 2: Penambahan 1 Partial Refurbishment (N=1).**

Misalkan *partial refurbishment* dilakukan di tengah siklus (tahun ke-6). Downtime total menjadi $45 + 7 = 52$ hari, sehingga:

$$A_{\infty}^{(1)} = \frac{43.800}{43.800 + 52 \times 24} = \frac{43.800}{45.048} = 0,9722 \; (97,22\%)$$

Penurunan availability ini menimbulkan *trade-off*: biarkan pesawat terbang lebih lama atau *ground* untuk refurbishment?

**Langkah 3: Perhitungan *Opportunity Cost* jika Tidak Ada Partial Refurbishment.**

Tanpa *partial refurbishment*, reliabilitas komponen struktural (misal $\beta = 2,5, \eta = 8$ tahun) pada $t = 6$ tahun:

$$R_{\text{strut}}(6) = e^{-(6/8)^{2,5}} = e^{-0,4219} = 0,656$$

Pada $t = 8$ tahun (akhir *mature-run* sebelum D-check):

$$R_{\text{strut}}(8) = e^{-(8/8)^{2,5}} = e^{-1} = 0,368$$

Probabilitas kegagalan struktural meningkat signifikan di paruh kedua siklus. *Expected unscheduled downtime* akibat *unscheduled removals* mengikuti persamaan:

$$\mathbb{E}[T_{\text{unsched}}] = \sum_{i \in \mathcal{C}} \int_0^{T_D} f_i(t) \cdot t_{\text{repair},i} \, dt$$

dengan $f_i(t)$ adalah *probability density function* kegagalan. Estimasi numerik untuk komponen strut (dengan $t_{\text{repair}} = 21$ hari jika gagal):

$$\mathbb{E}[T_{\text{unsched}}] \approx 0,38 \times 21 + 0,62 \times 0 = 7,98 \text{ hari per siklus}$$

Ini **lebih buruk** daripada *downtime* terjadwal 7 hari dari *partial refurbishment*. Maka availability bersih dengan strategi partial refurbishment:

$$A_{\infty}^{(1,\text{adj})} = \frac{43.800}{43.800 + 52 \times 24 + 7,98 \times 24} = \frac{43.800}{45.240} = 0,9681$$

**Langkah 4: Optimasi N (Inner Loop).**

Zhou (2024) menurunkan *closed-form* kondisi orde-satu:

$$\frac{\partial A_\infty}{\partial N} =