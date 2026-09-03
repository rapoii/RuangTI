# 2910 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Penerbangan (Studi pada Sektor MRO Penerbangan)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri *Maintenance, Repair, and Overhaul* (MRO) penerbangan global bernilai lebih dari USD 93 miliar pada 2023 dan diproyeksikan tumbuh seiring dengan ekspansi armada dunia yang mendekati 36.000 pesawat pada 2043. Dalam ekosistem ini, **ketersediaan armada (*fleet availability*)** merupakan variabel strategis yang menentukan profitabilitas operator, kepatuhan terhadap slot bandara, dan kemampuan memenuhi kontrak *wet-lease*. Setiap satu poin persentase kenaikan ketersediaan armada *narrow-body* dapat memberikan kontribusi revenue setara USD 1.5–2.5 juta per pesawat per tahun (Zhou, 2024; [DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Karakteristik pemeliharaan pesawat sipil terstruktur secara hirarkis dalam empat tingkat inspeksi reguler: **A-Check, B-Check, C-Check, dan D-Check**. A-Check dilakukan setiap 400–600 flight-hours (FH) dengan downtime ≈24 jam; B-Check setiap 6–8 bulan (≈160 jam kerja); C-Check setiap 20–24 bulan (≈6.000 jam atau 1–2 minggu grounding); dan D-Check—prosedur overhaul paling intensif—setiap 6–12 tahun dengan downtime 1–2 bulan (≥30.000 jam kerja). Kompleksitas ini menimbulkan **non-linearitas degradasi performa *life-cycle*** yang tidak mampu ditangani secara optimal oleh strategi *Time-Based Maintenance* (TBM) konvensional. Oleh karena itu, paper Zhou (2024) memposisikan *Reliability-Centered Maintenance* (RCM) sebagai kerangka analisis degradasi stokastik yang mampu mengkuantifikasi trade-off antara ketersediaan dan biaya intervensi.

Urgensi ekonomis dari riset ini terletak pada kenyataan bahwa downtime D-Check tradisional menghabiskan hingga 8% dari total *life-cycle cost* sebuah *narrow-body*. Zhou ([DOI: 10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) menunjukkan bahwa penyisipan **partial refurbishment pada fase *mature-run***—yaitu interval antar-D-check ketika laju degradasi cenderung linier—dapat mempertahankan availability tanpa membebani kapasitas hangar secara berlebihan. Lebih lanjut, paper ini menegaskan urgensi teknis terkait keselamatan penumpang (*ICAO Annex 8* dan *EASA Part-M*) yang mensyaratkan integritas struktural pesawat pada seluruh fase operasi.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Zhou (2024) dibangun di atas **renewal reward theorem** dengan empat tingkatan siklus pemeliharaan yang membentuk struktur hirarkis. Misalkan $T_i$ adalah interval inspeksi tingkat $i$ dengan $i \in \{A, B, C, D\}$, dan $t_i$ adalah durasi downtime yang diperlukan. Untuk satu siklus D-Check lengkap yang mencakup $n_A$ buah A-Check, $n_B$ buah B-Check, dan $n_C$ buah C-Check, total *available operation time* (AOT) didefinisikan sebagai:

$$T_{op} = n_A T_A + n_B T_B + n_C T_C + T_D \quad (1)$$

Sementara total *downtime* kumulatif per siklus D-Check adalah:

$$T_{down} = n_A t_A + n_B t_B + n_C t_C + t_D + T_{corr} \quad (2)$$

di mana $T_{corr}$ adalah waktu koreksi tak terencana. Berdasarkan **limit availability** dari renewal reward theorem (Birolini, 2017), ketersediaan asimtotik fleet dapat diformulasikan:

$$A_{\infty} = \lim_{t \to \infty} \frac{\sum_{k=0}^{N(t)} T_{op}^{(k)}}{\sum_{k=0}^{N(t)} \left( T_{op}^{(k)} + T_{down}^{(k)} \right)} = \frac{\mathbb{E}[T_{op}]}{\mathbb{E}[T_{op}] + \mathbb{E}[T_{down}]} \quad (3)$$

Zhou ([DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menunjukkan bahwa setelah *partial refurbishment* disisipkan, laju degradasi hazard sistem $h(t)$ berkurang melalui faktor *age reduction* $\rho \in (0,1)$. Jika $T_0$ adalah usia efektif komponen sebelum refurbishment, maka usia efektif pasca-intervensi menjadi:

$$T_{new} = T_0 - \rho \cdot T_0 = (1 - \rho) T_0 \quad (4)$$

dengan $\rho$ mendekati 0.85–0.95 untuk partial refurbishment pada *mature-run* (Zhou, 2024).

Fungsi tujuan optimasi adalah memaksimumkan AOT per unit downtime:

$$\max_{T_A, T_B, T_C, T_D, \rho} \; A_{\infty}(T_A, T_B, T_C, T_D, \rho) \quad (5)$$

Tunduk pada kendala:

$$\sum_{i \in \{A,B,C,D\}} \frac{t_i}{T_i} \leq \alpha \quad \text{(kapasitas hangar)} \quad (6)$$
$$h(T_D) \leq H_{max} \quad \text{(batas hazard keselamatan)} \quad (7)$$
$$T_A \leq T_B \leq T_C \leq T_D \quad \text{(hirarki interval)} \quad (8)$$

Paper ini membuktikan secara analitis bahwa **fungsi $A_{\infty}(\cdot)$ memiliki nilai optimal unik** yang memenuhi kondisi first-order:

$$\frac{\partial A_{\infty}}{\partial T_i} = 0, \quad \forall i \in \{A,B,C,D\} \quad (9)$$

dengan matriks Hessian definit negatif pada titik optimal—menjamin konvergensi prosedur iteratif seperti *gradient ascent* atau *interior-point method*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis *reliability-centered* mengikuti prosedur operasional terstruktur dalam lima tahap sebagaimana dikembangkan dalam naskah Zhou (2024):

**Tahap 1 — Pemetaan Fungsi & Karakterisasi Degradasi.** Setiap *Line Replaceable Unit* (LRU) diklasifikasikan menggunakan Failure Mode, Effects, and Criticality Analysis (FMECA) sesuai *SAE JA1011/ARP4761*. Tingkat konsekuensi kegagalan dikodekan (A=*catastrophic*, B=*hazardous*, C=*major*, D=*minor*, E=*no safety effect*) dan probabilitas kegagalan $P_i(t)$ diestimasi dari data *fleet-wide reliability* (historis minimal 5 tahun operasi).

**Tahap 2 — Penentuan Interval Hirarkis Awal.** Menggunakan pedoman MSG-3 IATA sebagai baseline, lalu menyesuaikan dengan distribusi Weibull dari empirical data: $R(t) = e^{-(t/\eta)^{\beta}}$, dengan *shape parameter* $\beta > 1$ menandakan *wear-out*.

**Tahap 3 — Optimasi Stokastik.** Solusi persamaan (5)–(8) diselesaikan melalui algoritma *Sequential Quadratic Programming* (SQP) untuk mendapatkan $(T_A^*, T_B^*, T_C^*, T_D^*, \rho^*)$.

**Tahap 4 — Penjadwalan Partial Refurbishment.** Selama *mature-run* (umur efektif 2–6 tahun pasca-D-Check), partial refurbishment dengan $\rho \approx 0.90$ dijadwalkan pada *optimal refurbishment points* $t^* = \arg\min \int_0^T h(t|\rho) dt$.

**Tahap 5 — Pemantauan KPI Ketersediaan Berkelanjutan.** Dashboard *real-time* memantau *Daily Aircraft Utilization* (DAU), *Schedule Reliability* (SR), dan *Technical Dispatch Reliability* (TDR).

Diagram alir proses mengikuti pola: **FMECA → Penentuan $R(t)$ → Optimasi $A_{\infty}$ → Validasi Simulator → Implementasi → Review KPI bulanan**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Optimalisasi kebijakan pemeliharaan untuk armada Boeing 737-800 dengan parameter operasional tipikal operator *low-cost carrier* Asia Tenggara (rata-rata 3.000 FH/tahun, 12 jam/hari utilisasi).

**Input Parameter:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_A$ (interval A-Check) | 500 | FH |
| $T_B$ (interval B-Check) | 6 | bulan |
| $T_C$ (interval C-Check) | 22 | bulan |
| $T_D$ (interval D-Check) | 8 | tahun |
| $t_A$ (downtime A-Check) | 24 | jam |
| $t_B$ (downtime B-Check) | 96 | jam |
| $t_C$ (downtime C-Check) | 360 | jam |
| $t_D$ (downtime D-Check) | 1.440 | jam (60 hari × 24 jam) |
| $T_{corr}$ (koreksi tak terencana/tahun) | 120 | jam |
| $\rho$ (faktor partial refurbishment) | 0,90 | – |

**Langkah 1:** Hitung jumlah masing-masing check dalam satu siklus D-Check (8 tahun =