# 2382 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global merupakan salah satu sektor *capital-intensive* yang paling kompleks, di mana keputusan pemeliharaan armada memiliki implikasi langsung terhadap keselamatan penerbangan, profitabilitas maskapai, dan keberlanjutan operasional. Menurut Zhou (2024) dalam studinya tentang *Reliability-Centered Hierarchical Maintenance Policy* yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), *Reliability-Centered Maintenance* (RCM) telah mendapatkan pengakuan luas di industri-industri berbasis aset berat (*asset-heavy industries*) karena kemampuannya dalam mengkuantifikasi degradasi kinerja *life-cycle* yang bersifat non-linear, sekaligus mengoptimalkan operasi melalui peningkatan keselamatan dan ketersediaan (*availability*).

Dalam konteks operasional maskapai penerbangan modern,一架 armada pesawat komersial seperti Boeing 737 atau Airbus A320 harus menjalani serangkaian inspeksi dan pemeliharaan berkala yang dikenal sebagai *check* A, B, C, dan D. *Check* A merupakan inspeksi ringan yang dilakukan setiap 400–600 *flight hours* (FH), *Check* B setiap 6–8 bulan, *Check* C setiap 20–24 bulan, dan *Check* D — yang merupakan *heavy maintenance visit* penuh — setiap 6–12 tahun. Kompleksitas hierarki ini menyebabkan tantangan manajerial yang signifikan: bagaimana menjadwalkan aktivitas-aktivitas pemeliharaan tersebut secara optimal agar *fleet availability* tetap maksimal tanpa mengorbankan standar keselamatan.

Zhou (2024) menegaskan bahwa meskipun RCM telah diakui sebagai *best practice* sejak diperkenalkan oleh Stanley Nowlan dan Howard Heap pada tahun 1978 untuk industri penerbangan AS, pemodelan dan implementasinya tetap menghadapi tantangan substansial ketika diterapkan pada sistem kompleks seperti kebijakan MRO hierarkis A/B/C/D. DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) merupakan versi komplementer yang memvalidasi kerangka kerja yang sama pada konteks operasional yang sedikit berbeda. Urgensi industri ini dapat dilihat dari data bahwa satu hari *grounding* pesawat narrow-body dapat menyebabkan kerugian revenue sebesar USD 100.000–250.000 per unit, menjadikan optimalisasi ketersediaan sebagai prioritas strategis tertinggi bagi operator.

Lebih lanjut, degradasi performa komponen pesawat tidak mengikuti pola linier sederhana. Setelah *Check* D (full refurbishment), laju degradasi menurun tajam karena hampir seluruh *life-limited parts* (LLP) diganti, tetapi selama *mature-run* operasional — yaitu periode antara dua *Check* D — degradasi kembali terakumulasi secara non-linear. Zhou (2024) memperkenalkan kerangka kebijakan MRO yang menggabungkan siklus *D-check* penuh dan *refurbishment* parsial selama periode *mature-run*, dengan optimasi penjadwalan berdasarkan *maximum available operation time*. Eksistensi nilai optimal untuk model ketersediaan dibuktikan secara analitis, memberikan landasan matematis yang kuat bagi pengambil keputusan operasional.

---

## 2. Landasan Teori & Formulasi Matematis

Model konseptual yang dikembangkan Zhou (2024) dibangun di atas empat pilar matematis: (1) fungsi keandalan komponen, (2) proses *renewal* untuk siklus pemeliharaan, (3) fungsi tujuan ketersediaan, dan (4) kendala optimasi.

### 2.1 Model Degradasi dan Keandalan Komponen

Komponen avionik dan struktur pesawat mengikuti distribusi kegagalan non-eksponensial, sehingga distribusi Weibull dipilih untuk memodelkan fungsi hazard:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*), $\eta$ adalah *scale parameter* (umur karakteristik), dan $t$ adalah waktu operasi terakumulasi. Nilai $\beta > 1$ mengindikasikan *wear-out failure* yang relevan untuk komponen struktural pesawat.

Fungsi keandalan kumulatif yang sesuai adalah:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

dan fungsi densitas kegagalan:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

### 2.2 Model Ketersediaan Hirarkis (*Steady-State Availability*)

Untuk kebijakan pemeliharaan hierarkis, ketersediaan *steady-state* armada didefinisikan sebagai:

$$A_{\infty} = \frac{T_{up}}{T_{up} + T_{down}}$$

di mana $T_{up}$ adalah *Mean Up Time* (MUT) dan $T_{down}$ adalah *Mean Down Time* (MDT). Untuk hierarki A/B/C/D, MUT merupakan total waktu operasi antar-inspeksi, sedangkan MDT menggabungkan waktu inspeksi seluruh tingkatan:

$$T_{down} = \sum_{i \in \{A,B,C,D\}} w_i \cdot \tau_i$$

dengan $w_i$ adalah frekuensi relatif inspeksi tingkat $i$ dalam satu siklus penuh dan $\tau_i$ adalah durasi rata-rata inspeksi tingkat $i$. Zhou (2024) menyusun ulang persamaan ini menjadi bentuk eksplisit untuk kebijakan hierarkis:

$$A(\mathbf{x}) = \frac{\sum_{j=1}^{N} x_j}{\sum_{j=1}^{N} x_j + \sum_{j=1}^{N} \delta(x_j)}$$

di mana $\mathbf{x} = (x_1, x_2, \ldots, x_N)$ adalah vektor interval pemeliharaan (dengan $x_j$ menyatakan *time-to-next-check*), dan $\delta(x_j)$ adalah fungsi downtime yang bergantung pada jenis *check* yang dilakukan pada interval ke-$j$.

### 2.3 Model Degradasi dengan Refurbishment Parsial

Inovasi utama Zhou (2024) adalah introduksi variabel $r \in [0,1]$ yang merepresentasikan tingkat *refurbishment* (0 = tanpa refurbishment, 1 = full refurbishment setara *D-check*). Efek *refurbishment* terhadap *virtual age* komponen dimodelkan melalui faktor *age-reduction*:

$$V_{n+1} = r \cdot \left[V_n + x_n \cdot \alpha\right]$$

di mana $V_n$ adalah *virtual age* setelah inspeksi ke-$n$, $x_n$ adalah durasi operasi pada interval ke-$n$, dan $\alpha$ adalah laju degradasi intrinsik. Saat $r = 1$ dan $V_n = 0$ (setelah *D-check*), sistem kembali ke kondisi seperti baru.

### 2.4 Formulasi Optimasi

Masalah optimasi kebijakan pemeliharaan diformulasikan sebagai:

$$\max_{\mathbf{x}, r} \quad A(\mathbf{x}, r)$$

$$\text{subject to:} \quad \sum_{j=1}^{N} x_j \leq T_{LC}$$

$$x_j \in [x_{j}^{min}, x_{j}^{max}] \quad \forall j$$

$$r \in \{r_1, r_2, r_3, r_4\}$$

di mana $T_{LC}$ adalah *life-cycle* total armada (misalnya 12 tahun untuk narrow-body), dan kendala batas memastikan kepatuhan terhadap regulasi otoritas aviasi (FAA, EASA). Zhou (2024) membuktikan secara matematis bahwa fungsi tujuan ini memiliki nilai optimal global yang unik, yang merupakan kontribusi teoretis signifikan dari paper tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hierarkis berbasis RCM mengikuti *Standard Operating Procedure* (SOP) yang sistematis. Berdasarkan kerangka yang diuraikan Zhou (2024), prosedur ini terdiri dari delapan tahapan rekayasa.

**Tahap 1 — Inventarisasi Aset Kritis (*Critical Item Analysis*):** Melakukan *Failure Modes, Effects, and Criticality Analysis* (FMECA) untuk seluruh *line replaceable unit* (LRU) dan komponen struktural. Setiap komponen diklasifikasikan berdasarkan konsekuensi kegagalannya: *safety-critical*, *mission-critical*, atau *economic-critical*.

**Tahap 2 — Pengumpulan Data Operasional:** Data historis dari *Airline Maintenance Operations* seperti *Aircraft Technical Log* (ATL), *Maintenance and Engineering* (M&E) records, dan *Reliability Reporting* dikumpulkan untuk parameterisasi model Weibull. Minimum 1.000 *flight cycles* data direkomendasikan.

**Tahap 3 — Penentuan Interval Baseline:** Interval A/B/C/D awal ditetapkan sesuai *Maintenance Planning Document* (MPD) pabrikan — sebagai contoh untuk Boeing 737NG: A-check 400–600 FH, B-check 4–8 bulan, C-check 20–24 bulan, D-check 6–12 tahun.

**Tahap 4 — Pemodelan Degradasi:** Menggunakan data Tahap 2, parameter Weibull ($\beta$, $\eta$) diestimasi melalui *Maximum Likelihood Estimation* (MLE) untuk setiap *part family*.

**Tahap 5 — Penentuan Tingkat Refurbishment:** Berdasarkan analisis *trade-off* antara biaya refurbishment dan peningkatan *virtual age reduction*, dipilih tingkat $r$ optimal. Untuk komponen struktural seperti *wing box* dan *empennage*, $r \approx 0.85$–$0.95$ untuk *C-check* dan $r \approx 1.0$ untuk *D-check*.

**Tahap 6 — Optimasi Interval:** Algoritma optimasi (misalnya *Sequential Quadratic Programming* atau *Genetic Algorithm*) diterapkan untuk menyelesaikan masalah optimasi di Sub-bagian 2.4, menghasilkan vektor $\mathbf{x}^*$ yang memaksimalkan $A(\mathbf{x}, r)$.

**Tahap 7 — Validasi Simulasi:** Kebijakan yang dihasilkan divalidasi melalui simulasi *Monte Carlo* dengan 10.000 *replikasi* untuk memastikan bahwa *confidence interval* 95% terhadap $A(\mathbf{x}^*)$ memenuhi target (umumnya $\geq 99.5\%$ untuk armada komersial).

**Tahap 8 — Implementasi dan *Continuous Improvement*:** Kebijakan diterapkan ke *Maintenance Execution System* (MIS) dan *Aircraft Maintenance Planning* (AMP) dengan mekanisme *feedback loop* untuk kalibrasi ulang parameter setiap *quarter*.

Diagram alir keputusan untuk pemilihan tingkat *check* pada setiap interval pemeliharaan mengikuti logika:

```
[Akhir Interval Operasi] → [Inspeksi Visual] → [Threshold Failure Rate Tercapai?]
                                                            │
                                            Ya ───────────────┼───────────── Tidak
                                            │                                    │
                                     [D-Check Penuh]                    [A-Check/B-Check]
                                            │                                    │
                                   [Refurbishment r=1.0]              [Refurbishment r=0.3-0.6]
                                            │                                    │
                                     [Return to Service]               [Return to Service]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi penerapan metodologi Zhou (2024), dilakukan studi kasus pada armada narrow-bodyBoeing 737-800 milik maskapai regional dengan 20 unit armada. Parameter industri yang digunakan adalah sebagai berikut.

**Tabel 1. Parameter Input Industri**

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Durasi A-check | $\tau_A$ | 24 | jam |
| Durasi B-check | $\tau_B$ | 120 | jam |
| Durasi C-check | $\tau_C$ | 720 | jam |
| Durasi D-check | $\tau_D$ | 2.400 | jam |
| Interval A-check | $x_A$ | 500 | FH |
| Interval B-check | $x_B$ | 4.000 | FH |
| Interval C-check | $x_C$ | 12.000 | FH |
| Interval D-check | $x_D$ | 30.000 | FH |
| Shape parameter Weibull | $\beta$ | 2,3 | — |
| Scale parameter | $\eta$ | 18.000 | FH |
| Laju degradasi | $\alpha$ | 1,0 | unit/FH |
| Faktor refurbishment C-check | $r_C$ | 0,80 | — |
| Faktor refurbishment D-check | $r_D$ | 1,00 | — |
| Utilisasi harian rata-rata | $u$ | 8 | jam/hari |

**Langkah 1 — Menghitung Frekuensi Relatif Tiap Tipe Check:**

Dalam satu siklus hidup lengkap (30.000 FH), distribusi jumlah *check* adalah:

$$n_A = \frac{30.000}{500} = 60 \text{ check}$$
$$n_B = \frac{30.000}{4.000} = 7,5 \approx 8 \text{ check}$$
$$n_C = \frac{30.000}{12.000} = 2,5 \approx 3 \text{ check}$$
$$n_D = 1 \text{ check}$$

Total waktu operasi dalam satu siklus hidup:

$$T_{up} = 30.000 \text{ FH} \times \text{(faktor konversi operasional)}$$

Dengan asumsi 1 FH ≈ 1,5 jam blok, maka:

$$T_{