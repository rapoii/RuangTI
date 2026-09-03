# 2606 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada Pesawat: Studi pada Sektor Perawatan, Perbaikan, dan Pengecekan Ulang (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial merupakan salah satu ekosistem *capital-intensive* paling kompleks di dunia, di mana downtime satu pesawat narrow-body saja dapat menimbulkan kerugian pendapatan langsung lebih dari USD 100.000 per hari, belum ditambah biaya *opportunity cost* berupa terganggunya jaringan armada (*fleet network disruption cost*). Hang Zhou (2024) dalam paper-nya yang berjudul *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability* menegaskan bahwa **Reliability-Centred Maintenance (RCM)** merupakan pendekatan yang sangat dihargai dalam industri padat-aset (*asset-heavy industries*) karena kemampuannya mengkuantifikasi degradasi non-linier terhadap kinerja siklus-hidup (*non-linear degradation of life-cycle performance*) sekaligus mengoptimalkan operasi melalui peningkatan keselamatan dan ketersediaan (*availability*).

Sektor Maintenance, Repair, and Overhaul (MRO) penerbangan secara historis menganut kebijakan pemeliharaan *line-check* yang terstandarisasi dalam format hierarki **A/B/C/D-check**, di mana setiap tingkat inspeksi memiliki cakupan, frekuensi, durasi, dan konsumsi sumber daya yang berbeda. *A-check* biasanya dilakukan setiap 400–600 jam terbang dengan downtime singkat, *B-check* setiap 6–12 bulan dengan cakupan lebih luas, *C-check* setiap 20–24 bulan, dan *D-check* (atau *heavy maintenance visit*) berupa refurbishment total yang memakan waktu 1–2 bulan. Zhou (2024) menyoroti bahwa implementasi RCM dalam sistem sekompleks hierarki A/B/C/D MRO tersebut menghadapi tantangan besar, khususnya karena degradasi komponen tidak lagi bersifat linier seiring bertambahnya usia siklus hidup pesawat—terutama ketika memasuki fase *mature-run* antara dua *D-check*.

Urgensi penelitian Zhou (2024) muncul dari kebutuhan untuk menjembatani kesenjangan antara **teori keandalan klasik** (seperti distribusi Weibull untuk *failure-time-to-event*) dan **praktik penjadwalan MRO** yang sangat dipengaruhi regulasi regulator (FAA, EASA, CASA) serta dinamika permintaan *aircraft-on-ground* (AOG). Framework yang dibangunnya memperkenalkan kebijakan MRO yang menggabungkan siklus *D-check* penuh dan refurbishment parsial selama periode *mature-run*, dengan optimasi berbasis *maximum available operation time* dan pembuktian matematik adanya nilai optimal (*existence of an optimal value*) pada model ketersediaan. Pendekatan ini secara langsung menjawab kebutuhan manajer operasi armada untuk menyeimbangkan antara target *dispatch reliability* ≥ 99%, *on-time-performance*, dan total *maintenance cost per flight hour* yang terus meningkat.

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model ketersediaan armada dengan merepresentasikan satu siklus hidup pesawat sebagai barisan periodik *check* berurutan $\{A,B,C,D\}$ yang masing-masing memiliki downtime rata-rata $\bar{d}_A, \bar{d}_B, \bar{d}_C, \bar{d}_D$ dan interval antar-check $T_A, T_B, T_C, T_D$. Untuk mengkuantifikasi kontribusi setiap tingkat terhadap ketersediaan total, digunakan konsep **steady-state availability** dalam satu siklus:

$$A_{cycle} = \frac{\sum_{i \in \{A,B,C,D\}} T_i - \sum_{i \in \{A,B,C,D\}} \bar{d}_i \cdot n_i}{\sum_{i \in \{A,B,C,D\}} T_i}$$

di mana $n_i$ adalah jumlah check tingkat $i$ per siklus hidup penuh. Untuk siklus *D-check* dengan durasi total $\tau_D$ dan *partial refurbishment* dengan durasi $\tau_P$, kontribusi downtime per siklus menjadi:

$$\bar{D}_{total} = \bar{d}_D + (N_P \cdot \tau_P) + \sum_{j=A}^{C} n_j \cdot \bar{d}_j$$

dengan $N_P$ adalah jumlah refurbishment parsial yang dilakukan di antara dua *D-check* berturut-turut. Ketersediaan *long-term* armada diformulasikan sebagai:

$$\mathcal{A}(N_P) = \frac{T_{operational}}{T_{operational} + \bar{D}_{total}(N_P)}$$

Untuk menangkap **non-linear degradation**, Zhou (2024) mengadopsi fungsi reliabilitas Weibull dengan parameter bentuk $\beta > 1$ yang menandakan *wear-out failure*:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

sehingga laju kegagalan sesaat (*instantaneous failure rate*) meningkat seiring waktu siklus hidup:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Hubungan antara $\lambda(t)$ dan kebijakan check menghasilkan *expected downtime* akibat korektif yang tidak terjadwal:

$$\bar{d}_{unscheduled} = \int_0^{T_{cycle}} \lambda(t) \cdot t_{repair}(t) \, dt$$

dengan $t_{repair}(t)$ adalah waktu perbaikan yang meningkat secara non-linier terhadap usia. Kondisi optimalitas Zhou (2024) dibangun melalui **first-order condition** $\frac{\partial \mathcal{A}}{\partial N_P} = 0$, yang menghasilkan persamaan:

$$\frac{\tau_P \cdot T_{operational}}{(\bar{D}_{total} + T_{operational})^2} = \alpha \cdot \Delta C_{partial}$$

di mana $\alpha$ adalah koefisien penalti biaya per jam terbang dan $\Delta C_{partial}$ adalah *marginal cost* dari setiap tambahan refurbishment parsial. Eksistensi nilai optimal $N_P^*$ ini dibuktikan secara matematik oleh Zhou menggunakan teorema titik tetap Banach untuk operator kontraktif pada ruang Banach $C[0, T_{max}]$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hierarkis Zhou (2024) mengikuti prosedur tujuh-tahap yang dirancang untuk *MRO operations control center*:

**Tahap 1 – Akuisisi Data Telemetri & Riwayat Kegagalan.** Data *line-replaceable unit* (LRU) dan *avionics health monitoring* dikumpulkan melalui sistem *Aircraft Condition Monitoring System* (ACMS) dan *Centralized Fault Display System* (CFDS), dengan penyimpanan minimal 10 tahun siklus hidup sesuai standar EASA Part-M.

**Tahap 2 – Segmentasi Hierarki Check.** Pesawat diklasifikasikan ke dalam regimen *line-maintenance* (A/B-check) yang dilakukan di *line station*, dan *base-maintenance* (C/D-check) di *heavy maintenance hangar*. Diagram alir keputusan:

```
[Pesawat Tiba] → [Inspeksi Pre-Flight] → ACMS Fault?
                                       ├── Tidak → [A-Check terjadwal] → [Rilis Layanan]
                                       └── Ya → [Troubleshooting L1/L2] → L3/L4?
                                                                  ├── Ya → [B-Check atau Workshop]
                                                                  └── Tidak → [Rilis dengan Deferral MEL]
```

**Tahap 3 – Pembangkitan Jadwal Probabilistik.** Menggunakan *Monte Carlo simulation* dengan $10^5$ replikasi, jadwal *D-check* dan *partial refurbishment* $P_i$ di-*generate* berdasarkan distribusi Weibull dan *time-since-last-overhaul* (TSLO).

**Tahap 4 – Optimasi Ketersediaan.** Algoritma *gradient descent* atau *interior-point method* digunakan untuk mencari $N_P^*$ yang memaksimumkan $\mathcal{A}(N_P)$ dengan kendala kapasitas *maintenance bay* dan ketersediaan *certified mechanics*.

**Tahap 5 – Validasi dengan *Dispatch Reliability*.** Model di-validasi terhadap target industri: *dispatch reliability* $\geq 99{,}5\%$, *schedule completion factor* $\geq 98\%$, dan *technical delay rate* $\leq 5\%$.

**Tahap 6 – Pelaksanaan *D-Check* Penuh dan Refurbishment Parsial.** Setiap *D-check* mencakup *structural inspection* (CFR 14 Part 25), *engine borescope*, *landing gear overhaul*, dan *cabin refurbishment*. Refurbishment parsial difokuskan pada sub-sistem dengan laju degradasi tertinggi (misalnya *avionics*, *APU*, *brake control*).

**Tahap 7 – Audit Loop Tertutup & Iterasi Kebijakan.** Hasil aktual dibandingkan dengan prediksi model menggunakan *root-mean-square error* (RMSE) terhadap metrik ketersediaan, dan parameter Weibull di-*re-estimate* setiap 6 bulan untuk menjaga akurasi prediktif.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan satu unit Airbus A320 milik operator menengah Asia Tenggara dengan parameter input berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_A$ (interval A-check) | 500 | flight hours (FH) |
| $T_B$ (interval B-check) | 3.000 | FH |
| $T_C$ (interval C-check) | 18.000 | FH |
| $T_D$ (interval D-check) | 36.000 | FH |
| $\bar{d}_A$ | 12 | jam |
| $\bar{d}_B$ | 60 | jam |
| $\bar{d}_C$ | 480 | jam |
| $\bar{d}_D$ | 1.800 | jam |
| $\tau_P$ (refurbishment parsial) | 96 | jam |
| Utilisasi harian | 10 | FH/hari |

**Langkah 1 — Hitung jumlah check per siklus D-check penuh (36.000 FH).**

$n_A = 36.000 / 500 = 72$ kali, $n_B = 36.000 / 3.000 = 12$ kali, $n_C = 36.000 / 18.000 = 2$ kali, $n_D = 1$ kali.

**Langkah 2 — Skenario Baseline (tanpa partial refurbishment).**

Total downtime terjadwal:
$$\bar{D}_{baseline} = (72 \times 12) + (12 \times 60) + (2 \times 480) + 1.800 = 864 + 720 + 960 + 1.800 = 4.344 \text{ jam}$$

Durasi siklus dalam jam = 36.000 FH ÷ 10 FH/hari × 24 jam/hari … lebih mudah dengan basis FH. Ketersediaan baseline:

$$\mathcal{A}_{baseline} = \frac{36.000 - 4.344}{36.000} = 0{,}8793 \text{ atau } 87{,}93\%$$

**Langkah 3 — Skenario dengan 2 kali partial refurbishment ($N_P = 2$).**

Tambahan downtime = $2 \times 96 = 192$ jam, namun downtime unscheduled berkurang 35% (asumsi eliminasi 4 kejadian AOG). Hitung downtime unscheduled dengan pendekatan Weibull $\beta = 2{,}5$, $\eta = 25.000$ FH, $t_{repair} = 24$ jam:

$$\bar{d}_{unsched}^{(0)} = \int_0^{36.000} \frac{2{,}5}{25.000}\left(\frac{t}{25.000}\right)^{1{,}5} \cdot 24 \, dt = 24 \cdot \left[\frac{t^2}{2 \cdot (25.000)^2}\right]_0^{36.000} \approx 24 \times 2{,}07 = 49{,}7 \text{ jam}$$

Dengan $N_P = 2$, downtime unscheduled menjadi $49{,}7 \times 0{,}65 = 32{,}3$ jam. Total downtime baru:

$$\bar{D}_{new} = 4.344 + 192 - (49{,}7 - 32{,}3) = 4.344 + 192 - 17{,}4 = 4.518{,}6 \text{ jam}$$

$$\mathcal{A}_{new} = \frac{36.000 - 4.518{,}6}{36.000} = 0{,}8745 \text{ atau } 87{,