# 2350 — Optimalisasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *capital-intensive* dengan karakteristik *asset-heavy* yang paling kompleks di dunia. Sebuah pesawat窄-body generasi terbaru seperti Airbus A320neo atau Boeing 737 MAX memiliki nilai perolehan kapital (*capital expenditure*) berkisar USD 110–135 juta per unit pada tahun 2024, sehingga armada 100 pesawat merepresentasikan aset lebih dari USD 12 miliar yang memerlukan strategi pemeliharaan sistematis untuk menjaga *book value* dan kapasitas produktifnya. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa di dalam lingkungan operasional ini, *Reliability-Centered Maintenance* (RCM) menjadi kerangka kerja yang sangat dihargai karena kemampuannya dalam mengkuantifikasi degradasi non-linier terhadap performa siklus hidup aset dan mengoptimalkan operasi melalui peningkatan keselamatan serta ketersediaan armada (*fleet availability*).

Urgensi ekonomis dari optimalisasi kebijakan pemeliharaan ini dapat dilihat dari struktur biaya MRO aviasi. Sebuah *A-check* rutin (interval ±600 flight hours) memakan biaya USD 10.000–50.000 dan downtime 24–50 jam; *C-check* (interval 20–24 bulan) memakan biaya USD 500.000–1.500.000 dan downtime 1–2 minggu; sementara *D-check* atau *heavy maintenance visit* (interval 6–12 tahun) membutuhkan biaya USD 3–8 juta dan downtime 1–2 bulan dengan kebutuhan logistik hangar yang sangat spesifik. Setiap persen peningkatan *fleet availability* pada maskapai besar dengan 200 armada mampu menerjemahkan langsung menjadi tambahan kapasitas penumpang (*available seat miles/ASM*) senilai USD 50–100 juta per tahun. Oleh karena itu, formulasi kebijakan pemeliharaan hirarkis yang optimal menjadi imperatif strategis yang tidak hanya bernilai ekonomis tetapi juga regulatif.

Zhou (2024) memperkenalkan kerangka kerja *MRO policy* yang mengintegrasikan siklus *D-check* penuh dengan aktivitas *partial refurbishment* yang dilakukan selama fase *mature-run* operasi penerbangan. Pendekatan ini menjawab tantangan klasik dalam implementasi RCM: bagaimana menyeimbangkan antara interval inspeksi panjang yang ekonomis dengan degradasi kumulatif yang non-linier pada struktur, avionik, dan *powerplant*. Studi lanjutan oleh Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) memberikan elaborasi terhadap struktur optimasi interval *check* berdasarkan waktu operasi tersedia maksimum (*maximum available operation time*), serta membuktikan secara matematis keberadaan nilai optimal pada model ketersediaan armada. Signifikansi akademik dari kerangka ini adalah menjembatani kesenjangan antara teori pemeliharaan stokastik dengan praktik operasional MRO yang selama ini sangat bergantung pada heuristik dan pengalaman teknisi (*power-by-the-hour* culture).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linier

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memodelkan degradasi reliabilitas sistem pesawat menggunakan fungsi *power-law* yang telah lama diadopsi dalam literatur keandalan (Blanchard & Fabrycky, *Systems Engineering and Analysis*, 2011). Untuk suatu subsistem kritis $i$ dengan reliabilitas awal $R_0$, reliabilitas pada waktu operasi kumulatif $t$ (dalam flight hours) adalah:

$$R_i(t) = e^{-\left(\lambda_i t\right)^{\beta_i}}$$

di mana $\lambda_i$ adalah laju kegagalan awal (*baseline hazard*) dan $\beta_i > 1$ merepresentasikan parameter *wear-out* yang menangkap efek penuaan non-linier. Ketika $\beta_i = 1$, model kembali ke distribusi eksponensial klasik (mencirikan *random failure*); ketika $\beta_i > 1$, reliabilitas menurun secara akseleratif seiring bertambahnya usia operasi.

### 2.2 Hirarki Pemeliharaan A/B/C/D-check

Kebijakan hirarkis MRO aviasi mengikuti empat tingkat dengan karakteristik berbeda yang diformulasikan oleh Zhou sebagai berikut. Misalkan $T_A, T_B, T_C, T_D$ menyatakan interval (dalam flight hours atau bulan kalender) antara masing-masing *check*, maka relasi fundamental adalah:

$$T_D = k_C \cdot T_C, \quad T_C = k_B \cdot T_B, \quad T_B = k_A \cdot T_A$$

dengan koefisien integer $k_A, k_B, k_C$ yang umum digunakan dalam industri adalah $k_A \approx 6$, $k_B \approx 4$, $k_C \approx 6$, sehingga rasio interval total memenuhi $T_D / T_A \approx 144$.

### 2.3 Fungsi Ketersediaan Armada (Fleet Availability)

Mengikuti pendekatan *renewal reward* yang digunakan Zhou (2024), ketersediaan sesaat (*instantaneous availability*) suatu pesawat pada siklus pemeliharaan didefinisikan sebagai:

$$A_i(t) = \frac{t}{t + T_{d,i}}$$

di mana $T_{d,i}$ adalah total downtime yang diakumulasikan hingga *check* tingkat $i$ (dengan asumsi downtime $D_A \approx 1$ hari, $D_B \approx 3$ hari, $D_C \approx 10$ hari, $D_D \approx 30$ hari). Ketersediaan jangka panjang (*long-run steady-state availability*) diperoleh melalui *renewal reward theorem*:

$$A_{ss} = \frac{\sum_{j \in \{A,B,C,D\}} n_j \cdot \text{MTBF}_j}{\sum_{j \in \{A,B,C,D\}} n_j \cdot (\text{MTBF}_j + D_j)}$$

di mana $n_j$ adalah jumlah kunjungan *check* tingkat $j$ dalam satu siklus hidup penuh pesawat.

### 2.4 Formulasi Optimasi Interval

Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) membuktikan bahwa untuk *fleet availability* dengan kebijakan hirarkis, terdapat nilai optimal $T_j^*$ yang memaksimalkan *maximum available operation time* $\mathbb{E}[T_{op}]$ :

$$\max_{T_A, T_B, T_C, T_D} \quad \mathbb{E}[T_{op}] = \sum_{j} \left[ \int_0^{T_j} R_j(t) \, dt \right]$$

dengan kendala reliabilitas minimum $R_j(T_j) \geq R_{\min,j}$ (misalnya $R_{\min,D} = 0.85$ untuk *structural integrity* pada *D-check*) dan kendala biaya $C_{total} \leq C_{budget}$. Kondisi optimal orde pertama (*first-order optimality condition*) memberikan:

$$\frac{\partial \mathbb{E}[T_{op}]}{\partial T_j} = R_j(T_j) + T_j \cdot \frac{\partial R_j(T_j)}{\partial T_j} - \lambda_j = 0$$

dengan $\lambda_j$ adalah *Lagrange multiplier* untuk kendala reliabilitas.

### 2.5 Model Biaya Siklus Hidup Total

Total *life-cycle cost* (LCC) per pesawat selama satu siklus *D-check* penuh diformulasikan sebagai:

$$\text{LCC} = \sum_{j \in \{A,B,C,D\}} \frac{n_j \cdot C_j}{(1+r)^{t_j}} + C_{penalty} \cdot (1 - A_{ss})$$

di mana $r$ adalah *discount rate* (umumnya $r = 0.06$–$0.10$ dalam analisis aviasi), $t_j$ adalah waktu (dalam tahun) dari *check* tingkat $j$, dan $C_{penalty}$ adalah biaya oportunidad akibat pesawat tidak beroperasi (USD 100.000–300.000 per hari tergantung rute).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM mengikuti prosedur sistematis yang dapat dipetakan ke dalam *Standard Operating Procedure* (SOP) industri sesuai kerangka Zhou (2024). Tahapan-tahapannya adalah:

**Tahap 1 — Functional Failure Analysis (FFA) & Significance Tree (FTA).** Identifikasi fungsi kritis sistem pesawat (propulsi, sistem hidraulik, avionik, struktur), tentukan modus kegagalan potensial, dan bangun pohon kegagalan (*fault tree*) untuk setiap subsistem. Output: daftar FMECA (Failure Mode, Effects, and Criticality Analysis).

**Tahap 2 — Pengumpulan Data Telemetri & Sensor Modern.** Integrasikan data dari *Aircraft Health Monitoring* (AHM), *Airborne Vibration Monitoring* (AVM), *Engine Health Monitoring* (EHM), dan *Structural Health Monitoring* (SHM) untuk memperbarui parameter $\lambda_i$ dan $\beta_i$ secara *real-time*. Platform *predictive maintenance* seperti SAP S/4HANA MRO atau AMOS (Aviation Maintenance & Engineering System) menjadi tulang punggung integrasi data.

**Tahap 3 — Penentuan Interval Check Optimal.** Menggunakan rumus optimasi pada Persamaan di bagian 2.4,hitung $T_j^*$ untuk masing-masing tingkat *check*, dengan memperhatikan *trade-off* antara ketersediaan dan biaya. Tahapan ini memerlukan solver optimasi non-linier (misalnya *sequential quadratic programming*).

**Tahap 4 — Penjadwalan Hirarkis & *Partial Refurbishment*.** Selama interval $T_D$ yang panjang (6–12 tahun), jadwalkan aktivitas *partial refurbishment* pada subsistem kritis (mesin, avionik, *landing gear*) untuk memperlambat laju degradasi $\beta_i$. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menunjukkan bahwa aktivitas *partial refurbishment* ini mampu memperpanjang *mature-run phase* hingga 15–20% tanpa menambah *D-check* baru.

**Tahap 5 — Validasi, Audit Regulasi & Continuous Improvement.** Validasi hasil penjadwalan terhadap regulasi FAA (FAR Part 121), EASA (Part-M), dan otoritas nasional (CASR Part 121 di Indonesia melalui Kementerian Perhubungan). Lakukan *audit* berkala dan *root cause analysis* (RCA) terhadap setiap *unscheduled removal* untuk memperbarui model.

Diagram alir logika keputusan untuk menentukan tingkat *check* berikutnya pada subsistem tertentu dapat diringkas sebagai berikut:

```
[Akuisisi data sensor] → [Estimasi R_i(t)]
                            ↓
                    R_i(t) ≥ R_threshold ? —YES→ [Lanjutkan operasi]
                            ↓ NO
                    Kerusakan terdeteksi? —YES→ [Unscheduled Maintenance]
                            ↓ NO
                    Telah mencapai T_j ? —YES→ [Scheduled Check level j]
                            ↓ NO
                    [Lanjutkan operasi sampai T_j]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan penerapan formulasi Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), berikut adalah studi kasus pada satu unit pesawat narrow-body dengan parameter industri yang realistis:

**Parameter Input:**
- Subsistem: *CFM56-7B engine* powerplant
- $R_0 = 1{,}000$ (reliabilitas awal)
- $\lambda_i = 0{,}0008$ *failures per flight hour*
- $\beta_i = 1{,}25$ (parameter wear-out untuk *turbine hot section*)
- Interval $T_C = 8{,}000$ flight hours (≈20 bulan operasional)
- Interval $T_D = 48{,}000$ flight hours (≈12 tahun)
- Downtime: $D_A = 1$ hari, $D_B = 3$ hari, $D_C = 10$ hari, $D_D = 30