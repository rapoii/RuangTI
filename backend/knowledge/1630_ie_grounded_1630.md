# 1630 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global beroperasi dalam ekosistem yang sangat *asset-intensive*, di mana sebuah armada pesawat narrow-body seperti Airbus A320 atau Boeing 737 memiliki nilai kapital aset melebihi USD 50 juta per unit (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Dalam konteks ini, keputusan pemeliharaan bukan sekadar persoalan teknis, melainkan keputusan finansial dan strategis yang menentukan profitabilitas maskapai. Sebuah pesawat yang *grounded* selama satu jam akibat *unscheduled maintenance* dapat menimbulkan *opportunity cost* berupa kehilangan pendapatan tiket, kompensasi keterlambatan (*EU 261/2004 regulation*), dan repositioning kru yang secara agregat mencapai USD 15.000–40.000 per jam pada rute transatlantik. Oleh sebab itulah paradigma **Reliability-Centered Maintenance (RCM)** yang diperkenalkan Moubray (1991) dan terus berkembang hingga era *Industry 4.0* menjadi kerangka strategis yang tidak dapat dipisahkan dari manajemen armada modern.

Zhou (2024) menyoroti bahwa secara historis, industri MRO penerbangan mengandalkan **hierarki check A/B/C/D** yang dikembangkan oleh FAA dan EASA, di mana *A-check* dilakukan setiap 400–600 flight hours (FH) berupa *line maintenance* ringan; *B-check* setiap 6–12 bulan yang lebih komprehensif; *C-check* setiap 20–24 bulan yang mencakup inspeksi mayor; dan *D-check* (heavy maintenance visit/HMV) setiap 6–12 tahun yang berupa *complete teardown and refurbishment*. Akan tetapi, penelitian Zhou menunjukkan kelemahan fundamental dari pendekatan *fixed-interval* konvensional ini: ia mengasumsikan laju degradasi yang linier, padahal karakteristik degradasi *line-replaceable units* (LRU) dan *structural components* bersifat **non-linear** dan sangat bergantung pada siklus operasional (*mature-run phase*).

Temuan kunci paper ini adalah pengembangan **RCM-Hierarchical Policy** yang mengintegrasikan *full D-check refurbishment* dengan *partial refurbishment* di fase mature-run, dengan fungsi tujuan (*objective function*) berupa **maksimasi available operation time** secara *long-run*. Model ini membuktikan secara matematis bahwa terdapat **nilai optimal** untuk availability function, sebuah bukti eksistensi yang sering diabaikan dalam literatur MRO konvensional yang cenderung menggunakan aturan *thumb-rule*. Urgensi riset ini semakin meningkat pasca-pandemi COVID-19, di mana backlog MRO global mencapai USD 27 miliar pada 2023 dan hampir 30% armada Airbus A320neo mengalami *extended grounding* karena *Pratt & Whitney GTF* engine inspections, sehingga kemampuan memodelkan kebijakan pemeliharaan yang adaptif menjadi kebutuhan strategis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Stochastic Availability untuk Sistem Multi-Komponen

Landasan teoretis paper Zhou (2024) dibangun di atas **Renewal Reward Theorem (RRT)** yang menyatakan bahwa untuk proses renewal stasioner, *long-run availability fraction* didefinisikan sebagai:

$$A_\infty = \lim_{t \to \infty} \frac{\text{Expected Up Time in } [0,t]}{t} = \frac{E[U]}{E[U] + E[D]}$$

di mana $E[U]$ adalah *expected up-time per renewal cycle* dan $E[D]$ adalah *expected down-time per renewal cycle*. Pada konteks MRO penerbangan dengan hierarki A/B/C/D, satu *super-cycle* didefinisikan sebagai periode antara dua *D-check* berturut-turut yang di dalamnya terjadi beberapa *C-check*, *B-check*, dan *A-check* simultan dengan *unscheduled removals* LRU.

### 2.2 Model Degradasi Non-Linear dengan Distribusi Weibull

Zhou (2024) mengadopsi **distribusi Weibull dua parameter** untuk memodelkan degradasi komponen kritis karena fleksibilitasnya dalam merepresentasikan berbagai *failure modes* melalui parameter bentuk $\beta$:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^\beta\right]$$

dengan *reliability function* $R(t)$ yang memberikan probabilitas komponen bertahan hingga waktu $t$, *scale parameter* $\eta$ yang bersifat karakteristik *life* (η = η₀ ketika β = 1), dan *shape parameter* $\beta$ yang menentukan karakteristik *wear-out* (β > 1), *random failure* (β = 1), atau *infant mortality* (β < 1). Untuk komponen struktur pesawat seperti *fatigue-critical* parts, umumnya $\beta > 1$ menandakan fase *aging* dominan.

Fungsi densitas kegagalan dan *hazard rate* berturut-turut adalah:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}\exp\left[-\left(\frac{t}{\eta}\right)^\beta\right]$$

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.3 Formulasi Hierarki MRO Policy

Zhou (2024) mendefinisikan kebijakan pemeliharaan hirarkis dengan parameter keputusan sebagai berikut: $T_D$ = interval *D-check*, $T_C$ = interval *C-check*, $n_C$ = jumlah *C-check* per *D-cycle*, $T_P$ = interval *partial refurbishment* pada fase *mature-run*. *Available operation time* dalam satu *super-cycle* didefinisikan sebagai:

$$U_{total} = T_D - \sum_{i=1}^{n_C} t_{C,i} - n_A \cdot t_A - t_{D,refurb} - N_f(T_D) \cdot t_{repair}$$

di mana $t_{C,i}$ adalah durasi individual *C-check*, $t_A$ adalah durasi *A-check*, $t_{D,refurb}$ adalah durasi *D-check refurbishment*, dan $N_f(T_D)$ adalah *expected number of unscheduled failures* dalam interval $T_D$ yang dihitung sebagai:

$$N_f(T_D) = \int_0^{T_D} \lambda(u)\, du = \left(\frac{T_D}{\eta}\right)^\beta$$

*Long-run availability* kemudian menjadi:

$$A_{LR} = \frac{U_{total}}{T_D + t_{D,refurb} + \sum_{i=1}^{n_C} t_{C,i} + \sum_A t_A + N_f(T_D) \cdot t_{repair}}$$

### 2.4 Optimasi dengan Bukti Eksistensi Nilai Optimal

Fungsi tujuan paper Zhou adalah memaksimumkan $A_{LR}$ dengan *decision variables* $(T_D, T_C, T_P)$ yang tunduk pada *constraint* regulasi FAA/EASA dan *minimum availability threshold* $A_{LR} \geq A_{min}$:

$$\max_{T_D, T_C, T_P} A_{LR}(T_D, T_C, T_P)$$

$$\text{subject to:} \quad T_D \leq T_{D,max}, \quad A_{LR} \geq A_{min}, \quad n_C \cdot T_C \leq T_D$$

Zhou (2024) membuktikan bahwa fungsi $A_{LR}$ bersifat **unimodal** pada domain feasible, sehingga nilai optimal bersifat unik dan dapat ditemukan melalui algoritma optimasi *one-dimensional search* atau *convex programming*. Proposisi eksistensi ini menjadi kontribusi teoretis utama paper karena menghilangkan kebutuhan pendekatan *brute-force grid search* yang komputasional mahal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi RCM-Hierarchical

Implementasi kebijakan pemeliharaan hirarkis Zhou (2024) mengikuti arsitektur lima-fase yang konsisten dengan standar **SAE JA1011 (Evaluation Criteria for RCM Processes)** dan **SAE JA1012 (RCM Analysis Guide)**:

1. **Fase Boundary & System Definition** — Identifikasi *ATA Chapter* (Air Transport Association) sistem pesawat (Chapter 21 Air Conditioning, 27 Flight Controls, 32 Landing Gear, 53 Fuselage Structure, 72 Engine, dst.) dan batasan analisis.
2. **Fase Functional Failure Analysis (FFA)** — Penentuan fungsi *failure modes* dan *failure effects* untuk setiap LRU signifikan.
3. **Fase Decision Logic Tree (RCM Decision Diagram)** — Aplikasi *decision logic* untuk menentukan apakah tugas pemeliharaan berupa *scheduled discard*, *scheduled restoration*, *scheduled inspection*, atau *failure-finding*.
4. **Fase Hierarchical Task Allocation** — Penugasan tugas ke dalam slot A/B/C/D check berdasarkan frekuensi, durasi, dan kebutuhan *human-hours*.
5. **Fase Iterative Optimization** — Pembaruan parameter $T_D, T_C, T_P$ berdasarkan *feedback* dari *unscheduled removal rate* aktual.

### 3.2 Diagram Alir Pengambilan Keputusan MRO

```
┌──────────────────────────────────────┐
│   Pesawat Kembali dari Operasi       │
└──────────────┬───────────────────────┘
               │
       ┌───────▼────────┐
       │  Flight Hours   │
       │  Accumulated?   │
       └───┬────────┬────┘
       ≤400│        │>400
   ┌───────▼──┐  ┌──▼──────────────────┐
   │ Line     │  │  A-Check (Rutin)     │
   │ Transit  │  │  4-8 jam downtime    │
   │ Check    │  └──────────┬──────────┘
   └──────────┘             │
                       ≥6 bulan? YES → B-Check (24-50 jam)
                            │ NO → kembali operasi
                            │
                       ≥24 bulan? YES → C-Check (1-2 minggu)
                            │
                       ≥6 tahun? YES → D-Check (2 bulan, full teardown)
                            │ NO → Partial Refurbishment (mature-run)
                            ▼
                  ┌─────────────────────┐
                  │ RCM-Hierarchical    │
                  │ Decision Module     │
                  │ (Algoritma Zhou)    │
                  └─────────┬───────────┘
                            ▼
                  Output: T_D*, T_C*, T_P*
```

### 3.3 SOP Integrasi Sensor IoT dan Predictive Maintenance

Standar operasional modern mengintegrasikan **Aircraft Condition Monitoring System (ACMS)** dan **Airborne Health Monitoring (AHM)** untuk *real-time data streaming* ke *ground-based maintenance decision support system* sesuai arsitektur ARINC 661. *Threshold* anomali seperti *engine vibration trend*, *brake temperature cycles*, dan *cabin pressure differential* menjadi input untuk algoritma *remaining useful life* (RUL) yang diprediksi melalui model **particle filter** atau **LSTM neural network** sebagai pelengkap model Weibull deterministic Zhou (2024).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input untuk Narrow-Body Single-Aisle Aircraft

Untuk memberikan intuisi kuantitatif, kami mereplikasi perhitungan dengan parameter industri realistis untuk satu unit Boeing 737-800. Diasumsikan parameter Weibull komponen struktur kritis (misalnya *fuselage crown skin panel*, ATA 53) adalah $\beta = 2{,}8$ dan $\eta = 18.000$ flight hours (FH), yang mendekati pola *fatigue degradation* aktual. Parameter operasional disusun sebagai berikut:

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Interval D-check | $T_D$ | 24.000 FH |
| Interval C-check | $T_C$ | 6.000 FH |
| Jumlah C-check per D-cycle | $n_C$ | 4 |
| Durasi D-check | $t_{D,refurb}$ | 1.200 jam |
| Durasi C-check | $t_C$ | 240 jam |
| Durasi A-check | $t_A$ | 6 jam |
| Durasi average unscheduled repair | $t_{repair}$ | 18 jam |
| Annual flight hours | – | 3.000 FH/tahun |

### 4.2 Perhitungan Expected Number of Failures $N_f(T_D)$

$$N_f(24.000) = \left(\frac{24.000}{18.000}\right)^{2{,}8} = (1{,}3333)^{2{,}8}$$

Perhitungan secara logaritmik:
$$\ln(1{,}3333)