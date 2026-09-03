# 2750 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global merupakan salah satu sektor *asset-heavy* yang paling kritis dalam hal keselamatan, keandalan, dan ketersediaan armada (*fleet availability*). Sebuah armada pesawat komersial tidak hanya merepresentasikan investasi modal ratusan juta dolar per unit, tetapi juga menjadi tulang punggung konektivitas logistik dan ekonomi modern. Zhou (2024) dalam tulisannya di SSRN dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menekankan bahwa **Reliability-Centred Maintenance (RCM)** menjadi kerangka kerja yang sangat dihargai karena kemampuannya dalam mengkuantifikasi degradasi non-linier kinerja siklus hidup (*non-linear degradation of life-cycle performance*) sekaligus mengoptimalkan operasi dengan tetap mempertahankan standar keselamatan tertinggi.

Dalam konteks operasional MRO aviasi, regulator seperti FAA (Federal Aviation Administration) dan EASA (European Union Aviation Safety Agency) mengamanatkan penjadwalan inspeksi dan maintenance berkala dengan hierarki yang jelas. Hierarki pemeriksaan A/B/C/D Check yang digunakan secara universal dalam industri ini merepresentasikan tingkat kedalaman intervensi yang meningkat:

- **A-Check:** inspeksi ringan berkala setiap 400–600 flight hours (FH)
- **B-Check:** inspeksi sedang setiap 6–8 bulan, mencakup lebih banyak sistem
- **C-Check:** inspeksi besar setiap 20–24 bulan, mencakup inspeksi struktural detail
- **D-Check (Heavy Maintenance Visit):** overhaul penuh (*full refurbishment*) setiap 6–12 tahun, di mana pesawat dibongkar secara ekstensif untuk inspeksi dan restorasi komponen struktural utama

Urgensi ekonomis dari optimalisasi kebijakan ini sangat signifikan. Setiap hari pesawat tidak beroperasi (*Aircraft on Ground — AoG*) karena menunggu atau menjalani maintenance menyebabkan kerugian pendapatan berkisar USD 100.000–150.000 per hari per unit untuk pesawat narrow-body, dan dapat melebihi USD 300.000 per hari untuk wide-body. Di sisi lain, frekuensi maintenance yang terlalu jarang akan menurunkan keselamatan, meningkatkan tingkat kegagalan tak terencana (*unscheduled failures*), dan melanggar regulasi. Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) berupaya menjembatani dilema ini dengan mengembangkan kerangka kebijakan MRO yang menggabungkan siklus D-check penuh dan *partial refurbishments* selama fase mature-run operasi penerbangan.

Temuan fundamental makalah ini adalah demonstrasi matematis mengenai **eksistensi nilai optimal untuk model ketersediaan** berdasarkan penjadwalan *life-cycle maintenance checks* yang dimaksimalkan dari waktu operasi tersedia (*maximum available operation time*). Hasil ini memberikan kontribusi signifikan terhadap *decision support system* bagi manajer MRO dan operator maskapai dalam mengalokasikan slot hanggar, memprediksi utilisasi armada, dan mengelola rantai pasok suku cadang.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Analitik *Renewal Reward*

Zhou (2024) memodelkan siklus hidup komponen/sistem pesawat sebagai proses *renewal* dengan siklus yang terdiri atas periode operasi tersedia dan periode maintenance. Untuk setiap interval check ke-$i$, didefinisikan:

- $T_i$ = durasi operasi tersedia setelah check ke-$(i-1)$ hingga check ke-$i$ (waktu antara dua maintenance berturut-turut, dalam flight hours)
- $R_i$ = durasi downtime maintenance check ke-$i$ (dalam jam atau hari)

Fungsi **ketersediaan sesaat** (*instantaneous availability*) pada waktu $t$ adalah:

$$
A(t) = \Pr\{\text{sistem operasi pada waktu } t\}
$$

Menurut *renewal reward theorem* (Ross, 2014), **ketersediaan jangka panjang** (*long-run average availability*) didefinisikan sebagai:

$$
A_{\infty} = \lim_{T \to \infty} \frac{1}{T} \int_{0}^{T} A(t)\, dt = \frac{E[T_i]}{E[T_i] + E[R_i]}
$$

### 2.2 Model Degradasi Non-Linier

Zhou (DOI: 10.2139/ssrn.6387479) secara eksplisit menyatakan bahwa degradasi siklus hidup bersifat **non-linier**, sehingga model kegagalan mengikuti distribusi Weibull dengan fungsi *hazard rate*:

$$
h(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}, \quad \beta > 1
$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*) dan $\eta$ adalah parameter skala (*scale parameter*). Ketika $\beta > 1$, *hazard rate* meningkat terhadap waktu, mencerminkan keausan (*wear-out*).

Probabilitas survival hingga waktu $t$ adalah:

$$
R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]
$$

### 2.3 Hierarki A/B/C/D Check sebagai Renewal Cycle Berlapis

Yang menjadi kontribusi orisinal Zhou (2024, DOI: 10.2139/ssrn.5291672) adalah formulasi hierarkis di mana:

- **A-Check dan B-Check** dimodelkan sebagai *minimal repair* dengan downtime pendek $R_{AB}$
- **C-Check** dimodelkan sebagai *imperfect repair* yang memulihkan kondisi sistem ke tingkat tertentu di bawah kondisi *as good as new* (AGAN)
- **D-Check** dimodelkan sebagai *perfect repair* yang mengembalikan sistem ke kondisi AGAN, dengan downtime jauh lebih lama $R_D \gg R_{AB}$

Efektivitas perbaikan direpresentasikan melalui faktor restorasi $\theta \in [0, 1]$, di mana $\theta = 1$ untuk perfect repair dan $\theta < 1$ untuk imperfect repair. Jika reliabilitas paska-repair ke-$i$ adalah $R_i$, maka:

$$
R_{i+1} = \theta R_i + (1-\theta)
$$

### 2.4 Fungsi Optimasi Ketersediaan

Tujuan optimasi Zhou (2024) adalah memaksimumkan ketersediaan melalui pemilihan *interval* check optimal. Untuk satu siklus besar (A→B→C→D), biaya total siklus hidup didefinisikan sebagai:

$$
C_{cycle} = \sum_{k \in \{A,B,C,D\}} \frac{C_k \cdot t_k}{T_{cycle}} + c_p \cdot \lambda(t)
$$

di mana:
- $C_k$ = biaya per unit waktu untuk check jenis $k$
- $t_k$ = durasi check jenis $k$
- $T_{cycle}$ = total waktu satu siklus besar
- $c_p$ = biaya penalti per kegagalan tak terencana
- $\lambda(t)$ = laju kegagalan kumulatif

Solusi optimal memenuhi kondisi **first-order necessity**:

$$
\frac{\partial A_{\infty}}{\partial \tau_k} = 0 \quad \forall k
$$

di mana $\tau_k$ adalah interval check ke-$k$. Zhou (2024) membuktikan eksistensi titik optimal tersebut secara analitis menggunakan teorema nilai antara (*intermediate value theorem*) pada domain terbatas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hierarkis berbasis RCM mengikuti kerangka prosedural berikut, yang diselaraskan dengan standar industri SAE JA1011/SAE JA1012 untuk analisis RCM dan regulasi Part 121/Part 135 FAA:

**Langkah 1 — Pemetaan Fungsi Sistem dan Konteks Operasional**
Setiap *line replaceable unit* (LRU) dan komponen struktural dikatalogkan menggunakan *Failure Modes, Effects, and Criticality Analysis* (FMECA). Setiap fungsi diklasifikasikan sebagai *safety-critical*, *mission-critical*, atau *economically-critical*.

**Langkah 2 — Penentuan Tipe Check Optimal**
Berdasarkan hasil FMECA, setiap fungsi dipetakan ke salah satu check hierarkis sesuai frekuensi kegagalan dan tingkat konsekuensinya. Prosedur ini mengikuti alur keputusan:

```
[Identifikasi Kerusakan]
        ↓
[Dampak Keselamatan?]──Ya──→ Tentukan interval T berdasarkan MTBF komponen
        ↓ Tidak                          ↓
[Dampak Operasional?]──Ya──→ Cost-benefit analysis (Co/NCo)
        ↓ Tidak                          ↓
[Deferred maintenance hingga A/B Check berkala]
```

**Langkah 3 — Pengumpulan Data Historis & Parametrikasi**
Data historis dari *maintenance execution system* (AMOS, TRAX, atau Ramco) digunakan untuk mengestimasi parameter Weibull $(\beta, \eta)$ melalui Maximum Likelihood Estimation (MLE):

$$
\hat{\beta}, \hat{\eta} = \arg\max_{\beta, \eta} \sum_{i=1}^{n} \ln f(t_i; \beta, \eta)
$$

dengan $f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}\exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$.

**Langkah 4 — Optimasi Interval Check**
Menggunakan *Solver* (Excel Solver, MATLAB `fmincon`, atau Python `scipy.optimize`), dicari interval $\tau_A, \tau_B, \tau_C, \tau_D$ yang memaksimumkan $A_\infty$ dengan kendala biaya tahunan tidak melebihi budget MRO yang ditetapkan.

**Langkah 5 — Implementasi & Monitoring KPI**
KPI utama yang dimonitor adalah:
- *Dispatch Reliability* (target > 99,5%)
- *Schedule Adherence* (target > 95%)
- *Mean Time Between Unscheduled Removals* (MTBUR)
- *Aircraft Utilization* (jam terbang/hari)

**Langkah 6 — Feedback Loop & Continuous Improvement**
Data kegagalan aktual dibandingkan dengan prediksi model. Selisih digunakan untuk recalibrate parameter melalui *Bayesian updating* atau *Proportional Hazards Model*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Hipotetis (representatif industri)

Pertimbangkan satu unit komponen avionik kritis pada pesawat narrow-body (misal: Flight Management System — FMS):

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Shape parameter Weibull | $\beta$ | 2,4 |
| Scale parameter Weibull | $\eta$ | 8.000 FH |
| Interval A-Check | $\tau_A$ | 500 FH |
| Interval B-Check | $\tau_B$ | 3.000 FH |
| Interval C-Check | $\tau_C$ | 12.000 FH |
| Interval D-Check | $\tau_D$ | 48.000 FH |
| Durasi A-Check | $R_A$ | 8 jam |
| Durasi B-Check | $R_B$ | 24 jam |
| Durasi C-Check | $R_C$ | 120 jam |
| Durasi D-Check | $R_D$ | 720 jam |
| Biaya A-Check | $C_A$ | USD 15.000 |
| Biaya B-Check | $C_B$ | USD 80.000 |
| Biaya C-Check | $C_C$ | USD 350.000 |
| Biaya D-Check | $C_D$ | USD 1.800.000 |
| Biaya kegagalan tak terencana | $c_p$ | USD 50.000 |
| Flight hours per hari | $u$ | 10 FH/hari |

### 4.2 Perhitungan Ketersediaan per Check

**Reliabilitas pada interval A-Check:**
$$
R_A = \exp\left[-\left(\frac{500}{8000}\right)^{2,4}\right] = \exp[-(0,0625)^{2,4}] = \exp[-0,00185] \approx 0,99815
$$

**Reliabilitas pada interval B-Check:**
$$
R_B = \exp\left[-\left(\frac{3000}{8000}\right)^{2,4}\right] = \exp[-(0,375)^{2,4}] = \exp[-0,0996] \approx 0,9052
$$

**Reliabilitas pada interval C-Check:**
$$
R_C = \exp\left[-\left(\frac{12000}{8000}\right)^{2,4}\right] = \exp[-(1,5)^{2,4}] = \exp[-2,755] \approx 0,0636
$$

Nilai $R_C = 0,0636$ terlalu rendah dan secara intuitif tidak realistis untuk FMS pada 12.000 FH, namun mencerminkan potensi bahaya bila *partial refurbishment* tidak dilakukan — inilah justifikasi ekonomi mengapa C-Check diperlukan