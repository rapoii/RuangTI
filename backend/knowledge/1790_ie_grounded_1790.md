# 1790 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global beroperasi di bawah rezim regulasi yang sangat ketat—meliputi standar FAA Part 121, EASA Part-CAMO, dan IATA's *Safety & Operational Management*—yang memaksa operator armada untuk menyeimbangkan tiga tujuan simultan: keselamatan penerbangan (safety), ketersediaan armada (*fleet availability*), dan efisiensi biaya siklus hidup (*life-cycle cost*). Zhou (2024) dalam studinya di *SSRN* dengan DOI [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menekankan bahwa *Reliability-Centred Maintenance* (RCM) menjadi kerangka analitis yang diakui luas untuk mengkuantifikasi degradasi non-linear performa siklus hidup pada aset modal-intensif (capital-intensive assets). Namun, penerapan RCM pada sistem kompleks seperti kebijakan pemeliharaan hierarkis A/B/C/D di sektor MRO penerbangan masih menghadapi tantangan komputasional dan struktural yang substansial.

Menurut Zhou (2024), struktur MRO penerbangan modern tidak lagi bersifat monotonik—yaitu tidak hanya menunggu siklus D-check penuh (*full refurbishment*) pada akhir umur ekonomis, melainkan menerapkan *partial refurbishment* selama fase *mature-run* operasional armada. Pendekatan ini menciptakan keputusan majemuk (*multi-stage decision problem*) yang melibatkan penjadwalan simultan atas interval A-check, B-check, C-check, dan D-check dengan tujuan memaksimalkan ketersediaan rata-rata (*mean availability*) sepanjang horizon perencanaan. Urgensi ekonomi dari optimalisasi ini tidak dapat diabaikan: biaya satu jam *ground time* pesawat narrow-body dapat melebihi USD 10.000–15.000 dalam kehilangan pendapatan, sementara biaya *D-check* penuh untuk pesawat wide-body dapat mencapai USD 4–6 juta. Setiap peningkatan 1% pada *fleet availability* di armada 100 pesawat berpotensi mengembalikan USD 50–80 juta pendapatan tahunan.

Zhou (2024) lebih lanjut menunjukkan bahwa model ketersediaan (*availability model*) yang dikembangkan untuk kebijakan hierarkis A/B/C/D terbukti memiliki *optimum interior*—yakni terdapat nilai tunggal atau set nilai parameter yang memaksimumkan fungsi objektif, sehingga memungkinkan pendekatan *first-order optimality condition* (Kondisi optimum Karsh-Kuhn-Tucker) untuk diterapkan. DOI [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) menyajikan ekstensi metodologis yang memperkuat validitas empiris dari klaim tersebut. Dalam konteks Indonesia—di mana Garuda Indonesia, Lion Air, dan Citilink mengoperasikan lebih dari 700 pesawat aktif—adopsi kebijakan hierarkis RCM yang teroptimasi memiliki signifikansi strategis yang sangat tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

Model dasar yang dibangun Zhou (2024) berakar pada teori *Renewal Reward Theorem* dan *Non-homogeneous Poisson Process* (NHPP) untuk degradasi stochastic. Setiap sub-sistem pesawat (struktur, mesin, avionik, hidrolik, *landing gear*) dimodelkan mengikuti distribusi *Weibull* dua parameter dengan fungsi keandalan:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \beta > 0, \; \eta > 0$$

dengan laju kegagalan (*hazard rate*) berbentuk *power-law*:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana parameter bentuk $\beta$ menentukan karakteristik degradasi: $\beta < 1$ mengindikasikan *infant mortality*, $\beta = 1$ merepresentasikan laju konstan (distribusi eksponensial), dan $\beta > 1$ menandakan *wear-out phase* yang khas untuk komponen struktural dan *engine life-limited parts* (LLP).

Untuk kebijakan pemeliharaan hierarkis, Zhou (2024) mendefinisikan empat tingkat interval:

$$T_A < T_B < T_C < T_D$$

dengan rasio tipikal industri $T_A : T_B : T_C : T_D \approx 1 : 50 : 200 : 4000$ (dalam *flight hours*). Setiap tingkat check memiliki *restoration factor* $\rho_i \in (0,1]$ yang merepresentasikan frasi degradasi yang dikurangi setelah check:

$$H_i(t) = (1 - \rho_i) \cdot H_{i-1}(T_i^-) + \rho_{\text{age}}(t - T_i)$$

Fungsi objektif ketersediaan jangka panjang (*steady-state availability*) untuk kebijakan hierarkis diberikan oleh:

$$A_{\infty} = \frac{\mathbb{E}[T_{up}]}{\mathbb{E}[T_{up}] + \mathbb{E}[T_{down}]} = \frac{\sum_{i=A}^{D} \mu_i \cdot \tau_i}{\sum_{i=A}^{D} \mu_i \cdot \tau_i + \sum_{i=A}^{D} \nu_i \cdot \delta_i}$$

di mana $\mu_i$ adalah jumlah check tingkat-$i$ per siklus penuh, $\tau_i$ adalah *mean time between check* (MTBC) tingkat-$i$, $\nu_i$ adalah jumlah检修 tingkat-$i$, dan $\delta_i$ adalah *mean downtime* per检修.

Zhou (2024) membuktikan bahwa dengan memasukkan *partial refurbishment* pada fase mature-run, *effective lifetime* komponen dapat dipanjangkan melalui formula:

$$L_{\text{eff}} = L_0 + \sum_{k=1}^{K} \Delta L_k = L_0 + \sum_{k=1}^{K} \left(1 - e^{-\lambda_k \cdot \tau_{pr,k}}\right) \cdot \xi_k$$

di mana $L_0$ adalah *baseline lifetime*, $\lambda_k$ adalah parameter intensitas perbaikan parsial ke-$k$, $\tau_{pr,k}$ adalah durasi perbaikan parsial, dan $\xi_k$ adalah koefisien efektivitas yang bergantung pada tingkat check.

Optimasi dilakukan dengan memaksimumkan $A_{\infty}$ terhadap vektor keputusan $\mathbf{x} = (T_A, T_B, T_C, T_D)$, sehingga:

$$\max_{\mathbf{x} \in \mathcal{X}} A_{\infty}(\mathbf{x}) \quad \text{s.t.} \quad C(\mathbf{x}) \leq C_{\text{budget}}, \; T_i \geq T_{i,\min}$$

Kondisi optimalitas KKT orde pertama memberikan:

$$\frac{\partial A_{\infty}}{\partial T_i} = 0, \quad \forall i \in \{A, B, C, D\}$$

yang menghasilkan *closed-form* atau solusi *semi-analytical* tergantung pada spesifikasi distribusi degradasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Zhou (2024) di industri penerbangan mengikuti *engineering workflow* sistematis berskala delapan tahap sesuai kerangka MSG-3 (Maintenance Steering Group-3) yang diadopsi ICAO:

**Tahap 1 — Pemetaan Sistem & Dekomposisi Fungsional.** Seluruh pesawat diuraikan menjadi *ATA-100 chapters* (Air Transport Association). Setiap sub-sistem diklasifikasikan sebagai *significant item* atau *non-significant item* berdasarkan dampak kegagalannya terhadap keselamatan, operasional, dan ekonomi.

**Tahap 2 — Analisis Moda Kegagalan & Efek (FMEA).** Setiap komponen diberi *Risk Priority Number* (RPN):

$$RPN_i = S_i \times O_i \times D_i$$

dengan $S_i$ adalah *severity*, $O_i$ adalah *occurrence*, dan $D_i$ adalah *detection rating* pada skala 1–10. Zhou (2024) memodifikasi FMEA konvensional dengan menambahkan *rejuvenation factor* $J_i$ yang merefleksikan potensi perbaikan parsial.

**Tahap 3 — Penentuan Distribusi Degradasi.** Data historis dari *Aircraft Maintenance Program* (AMP) dan *Component Reliability Report* (CRR) digunakan untuk estimasi parameter Weibull $(\beta_i, \eta_i)$ melalui *Maximum Likelihood Estimation* (MLE).

**Tahap 4 — Formulasi Model Ketersediaan Hierarkis.** Persamaan $A_{\infty}$ dibangun dengan memasukkan semua tingkat check dan faktor restorasi.

**Tahap 5 — Optimasi Interval Check.** Algoritma *Sequential Quadratic Programming* (SQP) atau *Genetic Algorithm* (GA) digunakan untuk menyelesaikan masalah optimasi non-linear dengan *constraint* biaya.

**Tahap 6 — Validasi Simulasi Monte Carlo.** Hasil optimasi divalidasi menggunakan simulasi $N = 10^5$ iterasi dengan distribusi kegagalan *non-parametrik*.

**Tahap 7 — Pilot Implementation.** Kebijakan diterapkan pada sub-fleet (5–10 pesawat) selama 6–12 bulan dengan *control chart* CUSUM untuk deteksi anomali.

**Tahap 8 — *Roll-out* & *Continuous Improvement*.** Implementasi penuh dengan mekanisme *feedback loop* ke Tahap 3 setiap 24 bulan berdasarkan data aktual.

Diagram alur keputusan untuk penjadwalan检修 (*scheduling logic*):

```
IF t mod T_A = 0  → TRIGGER A-check
ELIF t mod T_B = 0 → TRIGGER B-check  
ELIF t mod T_C = 0 → TRIGGER C-check
ELIF t mod T_D = 0 → TRIGGER D-check (full refurbishment)
ELSE              → CONTINUE OPERATION
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah operator penerbangan mengelola armada Boeing 737-800 dengan parameter historis sebagai berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $\beta$ (bentuk Weibull) | 2,8 | — |
| $\eta$ (skala Weibull) | 18.000 | flight hours |
| $T_A$ (A-check interval) | 600 | FH |
| $T_B$ (B-check interval) | 8.000 | FH |
| $T_C$ (C-check interval) | 24.000 | FH |
| $T_D$ (D-check interval) | 48.000 | FH |
| $\delta_A$ (downtime A-check) | 6 | hours |
| $\delta_B$ | 48 | hours |
| $\delta_C$ | 240 | hours |
| $\delta_D$ | 720 | hours |
| $\rho_A, \rho_B, \rho_C$ | 0,05; 0,15; 0,45 | — |
| $\rho_D$ (full restoration) | 1,00 | — |

**Langkah 1 — Hitung jumlah检修 per siklus penuh $T_D$:**

$$\mu_A = \frac{T_D}{T_A} = \frac{48.000}{600} = 80 \text{检修}$$

$$\mu_B = \frac{T_D}{T_B} = \frac{48.000}{8.000} = 6 \text{检修}$$

$$\mu_C = \frac{T_D}{T_C} = \frac{48.000}{24.000} = 2 \text{检修}$$

$$\mu_D = \frac{T_D}{T_D} = 1 \text{检修}$$

**Langkah 2 — Hitung *Mean Time Between Check* (MTBC):**

$$\tau_A = T_A = 600 \text{ FH}, \quad \tau_B = 8.000, \quad \tau_C = 24.000, \quad \tau_D = 48.000$$

**Langkah 3 — Hitung total *uptime* per siklus:**

$$\sum \mu_i \cdot \tau_i = 80 \cdot 600 + 6 \cdot 8.000 + 2 \cdot 24.000 + 1 \cdot 48.000$$

$$= 48.000 + 48.000 + 48.000 + 48.000 = 192.000 \text{ FH}$$

**Langkah 4 — Hitung total *downtime* per siklus:**

$$\sum \nu_i \cdot \delta_i = 80 \cdot 6 + 6 \cdot 48 + 2 \cdot 240 + 1 \cdot 720$$

$$= 480 + 288 + 480 + 720 = 1.968 \text{ jam} \approx 24,6 \text{ shift 8-jam}$$

**Langkah 5 — Konversi downtime ke *flight hour equivalent*:**

Asumsikan 1检修-jam ≈ 0,5 FH produktivitas hilang → $T_{down} = 1.968 \cdot 0,5 = 984