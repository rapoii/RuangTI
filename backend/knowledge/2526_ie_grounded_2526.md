# 2526 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat: Studi Kebijakan A/B/C/D pada Sektor MRO Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal — SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal — SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu sektor *asset-intensive* dengan karakteristik degradasi performa yang sangat *non-linear* sepanjang siklus hidup pesawat. Setiap pesawat komersial berusia 25–30 tahun harus melalui serangkaian inspeksi terstruktur yang dalam praktik MRO (Maintenance, Repair, and Overhaul) internasional dikenal sebagai kebijakan A/B/C/D-check. Menurut Zhou (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), kebijakan ini bersifat **hirarkis** karena setiap tingkatan inspeksi memiliki cakupan, durasi, frekuensi, dan biaya yang berbeda — A-check yang ringan dilakukan setiap 400–600 jam terbang, B-check setiap 6–8 bulan, C-check yang lebih besar setiap 20–24 bulan, dan D-check berupa *full refurbishment* yang bersifat *overhaul* total setiap 6–12 tahun.

Urgensi penelitian ini muncul dari dua fenomena simultan. Pertama, dari sisi ekonomi, satu pesawat narrow-body seperti Boeing 737NG memiliki nilai aset US$ 50–60 juta, sehingga setiap hari *grounding* karena perawatan mewakili opportunity cost sekitar US$ 100.000–150.000 dalam bentuk kehilangan pendapatan sewa (lease rate) dan utilisasi. Kedua, dari sisi keselamatan dan regulasi, regulator seperti FAA (Part 121.367) dan EASA mengharuskan kepatuhan ketat terhadap program inspeksi, sehingga penjadwalan yang tidak optimal akan menurunkan *fleet availability* dan pada akhirnya merugikan operator. Zhou (2024) menegaskan bahwa meskipun *Reliability-Centered Maintenance* (RCM) sudah lama diakui sebagai kerangka kerja terbaik untuk industri berat (*asset-heavy industries*), implementasinya pada sistem kompleks seperti hierarki A/B/C/D masih menjadi tantangan terbuka, terutama dalam memodelkan siklus jatuh-bangun antara *partial refurbishment* (C-check) dan *full refurbishment* (D-check).

Temuan kunci makalah ini adalah membangun model ketersediaan (*availability*) yang memaksimalkan waktu operasi pesawat sepanjang siklus hidupnya, sambil membuktikan secara matematis bahwa terdapat nilai optimal untuk interval inspeksi. Pendekatan ini menjawab celah literatur dimana model RCM konvensional — yang biasanya berbasis stationary Markov atau asumsi laju kegagalan konstan — gagal menangkap karakteristik *bathtub curve* dan *wear-out* pada komponen avionik, struktur, dan mesin turboprop/turbofan. Penelitian Zhou (2024) yang ber-DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) selanjutnya memberikan validasi empiris terhadap kerangka kebijakan hirarkis tersebut dalam konteks operasional operator armada regional.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis yang dibangun Zhou (2024) berakar pada teori *renewal reward* dan proses *alternating renewal*. Siklus hidup pesawat dimodelkan sebagai barisan periode **up-time** (operasional) dan **down-time** (maintenance). Berikut formulasi kuantitatif yang dirangkum dari arsitektur model.

### 2.1 Model Ketersediaan Hirarkis (Availability Function)

Didefinisikan *steady-state availability* sebagai:

$$A_\infty = \frac{\mathbb{E}[U]}{\mathbb{E}[U] + \mathbb{E}[D]} = \frac{\sum_{i \in \{A,B,C,D\}} T_{op,i}}{\sum_{i \in \{A,B,C,D\}} \left(T_{op,i} + T_{m,i}\right)}$$

dengan $T_{op,i}$ adalah durasi operasi antara check ke-$i$ dan check berikutnya, dan $T_{m,i}$ adalah *downtime* inspeksi ke-$i$.

Untuk kebijakan dengan $n_C$ siklus C-check di antara dua D-check berurutan, total waktu satu siklus hidup penuh:

$$T_{cycle} = n_C \cdot T_C + T_D$$
$$T_{cycle}^{op} = n_C \cdot T_{op,C} + T_{op,D}$$

sehingga *fleet availability* sepanjang $T_{cycle}$:

$$A = \frac{n_C \cdot T_{op,C} + T_{op,D}}{n_C \cdot (T_{op,C} + T_{m,C}) + (T_{op,D} + T_{m,D})}$$

### 2.2 Model Degradasi Non-Linear

Zhou (2024) memodelkan degradasi keandalan komponen mengikuti *power-law*:

$$R(t) = e^{-\left(\lambda t\right)^\beta}$$

dengan $\lambda$ adalah *scale parameter* dan $\beta > 1$ untuk karakteristik *wear-out*. Laju kegagalan sesaat:

$$h(t) = \frac{\beta \lambda^\beta t^{\beta-1}}{e^{(\lambda t)^\beta}}$$

Saat *age* mencapai threshold $T_A, T_B, T_C$, kebijakan mengamanatkan tindakan *preventive* masing-masing dengan probabilitas keberhasilan $p_A, p_B, p_C$.

### 2.3 Optimasi Interval Inspeksi

Masalah optimasi dinyatakan sebagai:

$$\max_{T_A, T_B, T_C, T_D} \quad A(T_A, T_B, T_C, T_D)$$
$$\text{subject to:} \quad C_{total}(T_A, T_B, T_C, T_D) \leq C_{budget}$$

$$R(T_i) \geq R_{threshold,i}, \quad \forall i \in \{A,B,C,D\}$$

Zhou (2024) membuktikan *theorem* eksistensi nilai optimal melalui argumen kompaknya himpuna可行 (*feasible set*) dan kontinuitas fungsi tujuan pada domain kompak tersebut.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis mengikuti SOP terstruktur dalam enam fase menurut pendekatan Zhou (2024):

**Fase 1 — Pengumpulan Data Historis & MSG-3 Analysis.** Operator mengumpulkan data *Maintenance Significant Items* (MSI) berdasarkan dokumen MSG-3 (Maintenance Steering Group – 3) yang diterbitkan oleh ATA. Setiap *system* pesawat diklasifikasikan ke dalam kategori *hard time*, *on condition*, atau *condition monitoring*.

**Fase 2 — Penentuan Interval Awal.** Berdasarkan rekomendasi manufacturer (Boeing/EU/Airbus Maintenance Planning Document/MPD), interval awal ditetapkan: A-check $\tau_A \in [400, 600]$ FH, B-check $\tau_B \in [6, 8]$ bulan, C-check $\tau_C \in [20, 24]$ bulan, D-check $\tau_D \in [6, 12]$ tahun.

**Fase 3 — Pemodelan Degradasi & Simulasi Monte Carlo.** Distribusi *time-to-failure* di-*fit* menggunakan Weibull untuk setiap *Line Replaceable Unit* (LRU). Simulasi Monte Carlo dijalankan dengan 10.000 iterasi untuk memperkirakan distribusi *availability*.

**Fase 4 — Optimasi.** Algoritma *Sequential Quadratic Programming* (SQP) atau *Genetic Algorithm* (GA) digunakan untuk mencari nilai optimal $\{T_A^*, T_B^*, T_C^*, T_D^*\}$ yang memaksimalkan $A$.

**Fase 5 — Validasi Pilot Implementation.** Kebijakan baru diterapkan pada 5–10% armada selama 6 bulan untuk validasi empiris.

**Fase 6 — Deployment & Continuous Review.** KPI *fleet availability* dimonitor secara real-time menggunakan *Aircraft Health Monitoring* (AHM) dan *Aircraft Maintenance and Engineering System* (AMES).

Diagram alir logikanya dapat direpresentasikan sebagai: `Data MSG-3 → Distribusi Weibull → Simulasi MC → Optimasi GA/SQP → Pilot → Deployment → Review → Loop back`.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai penerbangan regional mengoperasikan 20 unit Boeing 737-800 dengan rata-rata utilisasi harian 10 jam terbang (*block hours*). Asumsikan parameter industri tipikal berdasarkan literatur MRO:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Interval A-check | $T_A$ | 500 | flight hours |
| Durasi A-check | $t_{m,A}$ | 24 | hours |
| Interval C-check | $T_C$ | 18 | months ≈ 4.500 FH |
| Durasi C-check | $t_{m,C}$ | 14 | days ≈ 336 jam |
| Interval D-check | $T_D$ | 12 | tahun |
| Durasi D-check | $t_{m,D}$ | 60 | hari |
| Jumlah C-check per siklus D | $n_C$ | 7 | cycles |

**Langkah 1: Hitung waktu operasi antar D-check.**

$$T_{cycle}^{op} = n_C \cdot T_{op,C} + T_{op,D} = 7 \times 4500 + 45000 = 76.500 \text{ jam terbang}$$

**Langkah 2: Hitung total downtime satu siklus hidup.**

$$T_{cycle}^{m} = 7 \times t_{m,C} + t_{m,D} = 7 \times 336 + 60 \times 24 = 2352 + 1440 = 3.792 \text{ jam}$$

**Langkah 3: Hitung availability steady-state.**

$$A = \frac{76.500}{76.500 + 3.792} = \frac{76.500}{80.292} = 0,9528 \text{ atau } 95,28\%$$

**Langkah 4: Analisis sensitivitas — dampak memperpanjang $T_C$ dari 18 ke 24 bulan.**

Dengan $T_C = 24$ bulan ≈ 6.000 FH dan $n_C = 5$:

$$T_{cycle}^{op} = 5 \times 6.000 + 45.000 = 75.000 \text{ jam}$$

Karena C-check lebih jarang, downtime berkurang namun degradasi meningkat. Asumsikan dengan interval 24 bulan, probabilitas *unscheduled removal* naik dan menambah *equivalent downtime* $\Delta = 600$ jam/siklus C:

$$A' = \frac{75.000}{75.000 + (5 \times 336 + 1440 + 5 \times 120)} = \frac{75.000}{77.640} = 0,9660$$

**Langkah 5: Perhitungan dampak ekonomi.**

Peningkatan availability dari 95,28% ke 96,60% untuk armada 20 pesawat:

$$\Delta A = 0,0102 \implies \text{Extra block hours/year/pesawat} = 8760 \times 0,0102 = 89,4 \text{ jam/tahun}$$

Untuk 20 pesawat dengan revenue US$ 8.000/block hour:

$$\text{Incremental annual revenue} = 20 \times 89,4 \times 8.000 = \text{US\$} 14,3 \text{ juta/tahun}$$

**Interpretasi Manajerial:** Studi kasus menunjukkan bahwa *re-timing* C-check dari 18 ke 24 bulan, ketika disertai mitigasi degradasi (misalnya *on-condition monitoring* dan *hard-time replacement* komponen kritis), menghasilkan peningkatan availability yang signifikan dan *Net Present Value* (NPV) positif selama siklus hidup pesawat. Hal ini sesuai dengan klaim Zhou (2024) bahwa interval optimal bersifat *non-trivial* dan harus dicari secara matematis, bukan diasumsikan mengikuti rekomendasi OEM secara buta.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Evaluasi Kritis.** Model Zhou (2024) memiliki tiga keterbatasan utama yang perlu diantisipasi oleh praktisi. Pertama, asumsi *independence* antar subsistem pesawat tidak realistis karena sistem avionik modern memiliki *cross-system dependencies* yang kompleks (misalnya, keterkaitan antara flight management computer dan autopilot). Kedua, model deterministik untuk *downtime* mengabaikan *stochastic variability* karena keterlambatan *parts availability* dan tenaga kerja MRO bersert