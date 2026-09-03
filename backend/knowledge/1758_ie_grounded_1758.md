# 1758 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat: Studi pada Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *capital-intensive* dengan armada pesawat bernilai miliaran dolar yang membutuhkan kebijakan pemeliharaan sistematis untuk memastikan keselamatan penumpang, keandalan operasional, dan profitabilitas perusahaan. Hang Zhou (2024) dalam tulisannya di jurnal peer-reviewed (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa **Reliability-Centred Maintenance (RCM)** telah menjadi kerangka kerja yang sangat dihargai di industri padat aset karena kemampuannya dalam **mengkuantifikasi degradasi non-linear performa siklus hidup** dan mengoptimalkan operasi melalui peningkatan keselamatan serta ketersediaan (*availability*). Dalam konteks aviasi, kompleksitas sistem pesawat modern — yang terdiri dari puluhan ribu komponen dengan interdependensi struktural, elektrik, hidrolik, dan avionik — menuntut kebijakan pemeliharaan yang tidak dapat diselesaikan dengan pendekatan interval waktu konvensional (*calendar-based*) saja.

Urgensi pengembangan kebijakan pemeliharaan hirarkis A/B/C/D dalam sektor MRO aviasi muncul dari fakta empiris bahwa downtime pesawat merupakan biaya terbesar kedua setelah bahan bakar. Sebagai contoh, satu pesawat narrow-body seperti Boeing 737-800 yang grounded selama 24 jam dapat menimbulkan kerugian pendapatan langsung sebesar USD 100.000–150.000, belum termasuk biaya kompensasi penumpang, *re-routing*, dan *cascading disruption* pada jaringan rute (Zhou, 2024). Oleh karena itu, formulasi kebijakan yang menyeimbangkan antara *full refurbishment* (D-check) dengan *partial refurbishment* selama fase mature-run operasi pesawat menjadi sangat kritis secara ekonomi dan operasional.

Konteks industri yang melatarbelakangi penelitian Zhou (2024) adalah pengamatan bahwa implementasi RCM pada sistem kompleks seperti armada pesawat memiliki tantangan spesifik: (1) **non-linear degradation** yang berarti laju kerusakan tidak konstan sepanjang siklus hidup; (2) **hierarki intervensi** yang menunjukkan bahwa setiap level check (A, B, C, D) memiliki cakupan, durasi, dan biaya yang berbeda secara eksponensial; (3) **optimasi ketersediaan** yang memerlukan demonstrasi eksistensi nilai optimum matematis. Penelitian Zhou (2024) bertujuan membangun kerangka kebijakan MRO yang menggabungkan siklus D-check penuh dengan refurbishment parsial, dengan penjadwalan yang dioptimasi berdasarkan *maximum available operation time*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear Siklus Hidup

Zhou (2024) memodelkan degradasi komponen pesawat menggunakan distribusi **Weibull** yang mampu menangkap karakteristik *infant mortality*, *useful life*, dan *wear-out phase* pada kurva bak mandi (*bathtub curve*). Fungsi laju kerusakan (*hazard rate*) didefinisikan sebagai:

$$h(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*), $\eta$ adalah parameter skala (*scale parameter*), dan $t$ adalah waktu operasi kumulatif (flight hours atau cycles). Untuk komponen avionik pesawat, parameter tipikal adalah $\beta \approx 2{,}5$ dan $\eta \approx 8.000$ flight hours, mencerminkan pola degradasi *wear-out*.

### 2.2 Model Ketersediaan Hirarkis

**Availability sesaat** (*instantaneous availability*) pada waktu $t$ didefinisikan sebagai:

$$A(t) = \frac{MTBF}{MTBF + MTTR} = \frac{\mu}{\mu + \lambda(t)}$$

di mana $\mu = 1/MTTR$ adalah laju perbaikan (*repair rate*) dan $\lambda(t) = h(t)$ adalah laju kegagalan sesaat. **Long-run availability** untuk interval pemeliharaan $T$ dihitung dengan:

$$\bar{A}(T) = \frac{1}{T} \int_0^T A(t)\, dt = \frac{T - \sum_{i \in \{A,B,C,D\}} d_i \cdot n_i}{T}$$

di mana $d_i$ adalah downtime rata-rata untuk check level $i$, dan $n_i$ adalah jumlah check level $i$ dalam periode $T$.

### 2.3 Optimasi dengan Siklus Hirarkis A/B/C/D

Untuk setiap level check, downtime berbeda secara signifikan:

| Level Check | Interval Tipikal | Downtime (jam) | Cakupan |
|-------------|------------------|----------------|---------|
| A-Check | 400–600 flight hours | 8–12 | Inspeksi umum, servis ringan |
| B-Check | 6–8 bulan | 24–60 | Inspeksi detail, penggantian komponen |
| C-Check | 20–24 bulan | 240–480 | Inspeksi mayor, overhaul sistem |
| D-Check | 6–12 tahun | 4.000–6.000 | Full refurbishment, repainting |

Zhou (2024) memformulasikan masalah optimasi sebagai berikut — temukan vektor interval $\mathbf{T} = (T_A, T_B, T_C, T_D)$ yang memaksimumkan:

$$\max_{\mathbf{T}} \bar{A}(\mathbf{T}) = \max_{\mathbf{T}} \left(1 - \frac{\sum_{i \in \{A,B,C,D\}} d_i \cdot n_i(\mathbf{T})}{\sum_{i \in \{A,B,C,D\}} T_i \cdot n_i(\mathbf{T}) + \sum_{i \in \{A,B,C,D\}} d_i \cdot n_i(\mathbf{T})}\right)$$

dengan *constraint*: $T_A < T_B < T_C < T_D$ dan $d_D \cdot n_D(\mathbf{T}) + \sum_{i \in \{A,B,C\}} d_i \cdot n_i(\mathbf{T}) \leq T_{annual}$, dengan $T_{annual}$ adalah *total downtime budget* tahunan.

### 2.4 Bukti Eksistensi Nilai Optimum

Zhou (2024) menunjukkan bahwa fungsi $\bar{A}(\mathbf{T})$ bersifat **quasi-concave** pada domain feasible, sehingga menjamin eksistensi global optimum melalui kondisi Karush-Kuhn-Tucker (KKT):

$$\nabla \bar{A}(\mathbf{T}^*) = \sum_{j} \mu_j \nabla g_j(\mathbf{T}^*) \quad \text{dengan} \quad \mu_j \geq 0$$

Kondisi ini menjadi landasan bahwa kombinasi *partial refurbishment* (pada A/B/C) dan *full refurbishment* (D-check) dapat menghasilkan availability optimum yang lebih tinggi daripada kebijakan hanya D-check penuh.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti SOP yang distandardisasi oleh **MSG-3** (Maintenance Steering Group - 3rd Volume) dan regulasi FAA/EASA Part 121. Zhou (2024) mengusulkan arsitektur implementasi berikut:

**Langkah 1 — Analisis Fungsi Sistem (*Functional Analysis*)**
Identifikasi fungsi primer dan sekunder pesawat beserta *failure modes* melalui *Failure Modes, Effects, and Criticality Analysis* (FMECA). Setiap komponen diberi kode kritisitas (Catastrophic, Hazardous, Major, Minor, No Effect) sesuai standar SAE ARP5580.

**Langkah 2 — Penentuan Tugas Pemeliharaan (*Maintenance Task Selection*)**
Untuk setiap *failure mode*, dipilih tugas pemeliharaan dari tujuh opsi MSG-3: *Hard Time*, *On-Condition*, *Failure Finding*, *Lubrication/Servicing*, *Inspection/Functional Check*, *Modification/Redesign*, atau *No Scheduled Maintenance*.

**Langkah 3 — Penjadwalan Hirarkis Optimal**
Gunakan algoritma *Sequential Quadratic Programming* (SQP) untuk menyelesaikan persamaan (4) dengan *constraint* regulasi. Zhou (2024) mengusulkan *hierarchical trigger logic*:

$$
\text{Jika } t \mod T_A = 0 \rightarrow \text{Trigger A-Check}
$$
$$
\text{Jika } t \mod T_B = 0 \rightarrow \text{Trigger B-Check} \supset \text{A-Check}
$$
$$
\text{Jika } t \mod T_C = 0 \rightarrow \text{Trigger C-Check} \supset \text{B-Check}
$$
$$
\text{Jika } \lambda(t) > \lambda_{threshold} \rightarrow \text{Trigger Partial Refurbishment}
$$
$$
\text{Jika } t \mod T_D = 0 \rightarrow \text{Trigger Full D-Check}
$$

**Langkah 4 — Validasi Empiris melalui *Reliability Block Diagram* (RBD)**
Availability sistem dihitung melalui串联-paralel RBD:

$$A_{fleet} = \prod_{k=1}^{n} A_k = \prod_{k=1}^{n} \frac{\mu_k}{\mu_k + \lambda_k}$$

dengan indeks $k$ merepresentasikan unit fungsional pesawat (engine, avionics, hydraulic, dsb.).

**Langkah 5 — Continuous Improvement Loop**
Data historis kegagalan (*reliability growth*) diumpan-balikkan untuk memperbarui parameter Weibull $(\beta, \eta)$ menggunakan *Maximum Likelihood Estimation* (MLE):

$$\hat{\beta}, \hat{\eta} = \arg\max_{\beta,\eta} \prod_{i=1}^{n} \frac{\beta}{\eta}\left(\frac{t_i}{\eta}\right)^{\beta-1} e^{-(t_i/\eta)^\beta}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Sebuah operator航空公司 mengoperasikan 12 unit Boeing 737-800 dengan rata-rata utilisasi 3.200 flight hours/tahun per pesawat. Berikut adalah parameter operasional riil:

| Parameter | Nilai | Sumber |
|-----------|-------|--------|
| $\beta$ (Weibull shape) | 2,5 | Zhou (2024) |
| $\eta$ (Weibull scale) | 8.000 FH | Zhou (2024) |
| $T_A$ (A-Check interval) | 500 FH | Standar OEM |
| $T_B$ (B-Check interval) | 4.000 FH | Standar OEM |
| $T_C$ (C-Check interval) | 8.000 FH | Standar OEM |
| $T_D$ (D-Check interval) | 32.000 FH | Standar OEM |
| $d_A$ | 10 jam | Riil |
| $d_B$ | 48 jam | Riil |
| $d_C$ | 360 jam | Riil |
| $d_D$ | 4.800 jam | Riil |

**Langkah 1: Perhitungan Laju Kerusakan Sesaat**

Untuk $t = 8.000$ FH (akhir interval C-check):
$$h(8.000) = \frac{2{,}5}{8.000} \left(\frac{8.000}{8.000}\right)^{1,5} = 3{,}125 \times 10^{-4} \text{ failure/FH}$$

Untuk $t = 16.000$ FH (paruh interval D-check):
$$h(16.000) = \frac{2{,}5}{8.000} \left(\frac{16.000}{8.000}\right)^{1,5} = 8{,}84 \times 10^{-4} \text{ failure/FH}$$

Artinya, **laju kerusakan naik ~2,83 kali lipat** antara $t = 8.000$ FH dan $t = 16.000$ FH, membuktikan non-linear degradation.

**Langkah 2: Jumlah Check per Tahun (per pesawat)**

$$n_A = \frac{3.200}{500} = 6{,}4 \approx 6 \text{ A-check/tahun}$$
$$n_B = \frac{3.200}{4.000} = 0{,}8 \approx 1 \text{ B-check/tahun}$$
$$n_C = \frac{3.200}{8.000} = 0{,}4 \approx 0{,}5 \text{ C-check/tahun}$$

**Langkah 3: Total Downtime Tahunan per Pesawat**

$$D_{total} = \sum_i d_i \cdot n_i = (10 \times 6) + (48 \times 1) + (360 \times 0{,}5) = 60 + 48 + 180 = 288 \text{ jam/tahun}$$

**Langkah 4: Long-run Availability**

$$\bar{A} = \frac{T - D_{total}}{T} = \frac{8.760 - 288}{8.760} = 0{,}9671 \text{ atau } 96{,}71\%$$

**Langkah 5: Perbandingan dengan Kebijakan D-Check Only**

Jika hanya mengandalkan D-check (32.000 FH = 10 tahun) tanpa partial refurbishment, downtime per tahun adalah $D_{D-only} = 480$ jam (rata-rata), menghasilkan:

$$\bar{A}_{D-only} = \frac{8.760 - 480}{8.760} = 0{,}9452 \text