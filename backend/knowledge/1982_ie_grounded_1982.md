# 1982 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi di Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri Maintenance, Repair, and Overhaul (MRO) penerbangan global merupakan tulang punggung operasional armada pesawat komersial dunia, dengan valuasi pasar melebihi USD 100 miliar pada 2024 dan proyeksi pertumbuhan tahunan majemuk (CAGR) sebesar 4–6% menuju 2030. Dalam ekosistem ini, *availability* (ketersediaan) armada bukan sekadar indikator teknik, melainkan variabel strategis yang menentukan kapasitas pendapatan operator, kontrak *wet-lease*, dan kepatuhan terhadap jadwal regulator (EASA Part-145, FAA 14 CFR Part 145). Setiap satu persen kenaikan availability sebuah pesawat narrow-body (misal Boeing 737 atau Airbus A320) dapat menerjemahkan diri menjadi tambahan revenue stream sebesar USD 250.000–400.000 per tahun, sehingga persoalan optimasi siklus pemeliharaan menjadi domain riset yang sangat bernilai ekonomis.

Secara historis, maskapai penerbangan menjalankan kebijakan pemeliharaan berbasis *hard-time* dan *on-condition* yang dikristalisasi dalam format hirarkis A/B/C/D Check. A-Check dilakukan setiap 400–600 flight hours (FH) dengan durasi downtime 24–48 jam; B-Check (banyak disubstitusi ke A-Check modern) setiap 6–8 bulan; C-Check setiap 20–24 bulan dengan downtime 7–14 hari; dan D-Check — yang merupakan *heavy maintenance visit* paling invasif — setiap 6–12 tahun dengan downtime 30–60 hari dan konsumsi 30.000–50.000 man-hours (Zhou, 2024, DOI: 10.2139/ssrn.6387479). Struktur hirarkis ini menimbulkan dilema optimasi: interval yang terlalu pendek meningkatkan *shop visit cost* dan kehilangan kapasitas terbang, sementara interval yang terlalu panjang mengakumulasikan degradasi *non-linear* yang memperbesar probabilitas *unscheduled removal* dan *in-flight shutdown*.

Hang Zhou (2024, DOI: 10.2139/ssrn.6387479) memperkenalkan kerangka MRO yang mengintegrasikan siklus D-Check penuh (*fully refurbished*) dengan *partial refurbishment* yang dilakukan selama fase *mature-run* operasi pesawat. Pendekatan ini berbeda dengan kebijakan *fixed-interval* konvensional karena secara eksplisit mengakui bahwa *life-cycle performance* degradasi bersifat *non-linear* terhadap akumulasi siklus beban (flight cycles, FC) dan *on-wing time*. Lebih lanjut, Zhou mendemonstrasikan secara matematis bahwa *availability function* memiliki *optimal value* yang dapat ditentukan secara analitis, sehingga persoalan engineering berubah menjadi masalah *constrained optimization* yang solvable. Urgensi penelitian ini diperkuat oleh meningkatnya kompleksitas armada (Boeing 787, Airbus A350 dengan arsitektur *more-electric* dan *composite airframe*) yang membuat pendekatan *reliability-centered maintenance* (RCM) klasik ala Nowlan & Heap (1978) perlu di-rewrite ulang dengan perspektif *fleet-level optimization* dan *partial refurbishment economics*.

## 2. Landasan Teori & Formulasi Matematis

Model RCM hirarkis yang diajukan Zhou (2024) berakar pada teori *renewal* dan *reliability block diagram*. Sebuah *unit* (pesawat atau komponen kritis seperti engine, landing gear, APU) dimodelkan sebagai sistem yang mengalami dua regime operasi: fase *infant mortality* (burn-in awal), fase *mature-run* (useful life), dan fase *wear-out* (akhir siklus). Regime *mature-run* menjadi fokus optimasi karena di sinilah *partial refurbishment* paling ekonomis dibanding D-Check penuh.

**Definisi 1 — Steady-State Availability.** Untuk unit yang mengalami renewal setelah setiap tindakan pemeliharaan preventif pada interval $T$, availability stationer didefinisikan sebagai:

$$A(T) = \frac{E[U(T)]}{E[U(T)] + E[D(T)]}$$

dengan $E[U(T)]$ adalah ekspektasi *uptime* kumulatif dan $E[D(T)]$ adalah ekspektasi *downtime* kumulatif per siklus renewal.

**Definisi 2 — Biaya Siklus Hidup.** Fungsi biaya total per flight cycle yang dinormalisasi:

$$C_{LC}(T_D, T_P) = \frac{C_D \cdot f_D + C_P \cdot f_P + C_C \cdot \lambda \cdot T_P + C_{DT} \cdot T_{DT}}{N_{FC}(T_D, T_P)}$$

dengan:
- $C_D$ = biaya D-Check penuh (≈ USD 4–8 juta untuk narrow-body)
- $C_P$ = biaya *partial refurbishment*
- $f_D, f_P$ = frekuensi per siklus hidup
- $C_C$ = biaya corrective maintenance per *unscheduled event*
- $\lambda$ = laju failure (events per flight hour)
- $T_{DT}$ = total downtime hours
- $N_{FC}$ = jumlah flight cycle selama interval

**Definisi 3 — Model Degradasi Non-Linear.** Zhou menggunakan *power-law* degradation untuk menangkap karakteristik *fatigue* dan *corrosion* pada struktur pesawat:

$$R(t) = R_0 \cdot \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan $R(t)$ adalah *reliability* pada waktu $t$, $\eta$ adalah *characteristic life*, dan $\beta$ adalah parameter bentuk (shape parameter) distribusi Weibull. Untuk komponen *aviation-grade* dengan $\beta > 1$ (wear-out), $R(t)$ turun secara *non-linear* dan menciptakan *window of opportunity* untuk *partial refurbishment* sebelum reliability jatuh di bawah ambang batas regulator (umumnya $R_{min} = 0{,}95$ untuk *continued airworthiness*).

**Optimasi Ketersediaan.** Zhou (2024, DOI: 10.2139/ssrn.6387479) membuktikan bahwa fungsi $A(T_D)$ memiliki *global maximum* yang unik dengan kondisi first-order:

$$\frac{\partial A}{\partial T_D} = 0 \quad \Rightarrow \quad T_D^* = \arg\max_{T_D} A(T_D)$$

dengan *boundary conditions*:

$$T_{D,min} \leq T_D \leq T_{D,max}$$

dengan $T_{D,min}$ = batas bawah regulator (umumnya 6 tahun) dan $T_{D,max}$ = batas atas *economic life* (umumnya 12 tahun untuk narrow-body).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM ala Zhou memerlukan SOP terstruktur yang dapat dirangkum dalam arsitektur tujuh-tahap berikut, selaras dengan kerangka MSG-3 (Maintenance Steering Group - 3rd Revision) dan SAE JA1011/1012:

**Tahap 1 — Criticality Analysis (FMEA Kuantitatif).** Setiap *line-replaceable unit* (LRU) di-*scoring* berdasarkan *Risk Priority Number* (RPN) dengan formula:

$$RPN_i = S_i \times O_i \times D_i$$

dengan $S$ = Severity, $O$ = Occurrence, $D$ = Detection. Komponen dengan RPN > 50 atau *safety-impact* dikategorikan sebagai *critical items* dan wajib masuk hirarki A-Check.

**Tahap 2 — Penentuan Hirarki Pemeliharaan.** Zhou (2024) mengusulkan pemetaan tugas ke empat level:
- Level A (*Line Maintenance*): walk-around inspection, *daily check*, *servicing*
- Level B (*Light Maintenance*): *phase inspection*, A-Check (≤ 600 FH)
- Level C (*Base Maintenance*): *structural inspection*, sistem besar, C-Check (20–24 bulan)
- Level D (*Heavy Maintenance*): *full overhaul*, *cabin refurbishment*, D-Check (6–12 tahun)

**Tahap 3 — Penjadwalan dengan Algoritma Optimasi.** Interval D-Check dioptimasi melalui penyelesaian *fixed-point equation* dari renewal reward:

$$T_D^* = \frac{E[\text{Operational Time per D-Check cycle}]}{\text{Target availability } A^*}$$

**Tahap 4 — Penjadwalan *Partial Refurbishment*.** Selama *mature-run*, dijadwalkan 2–3 kali *partial refurbishment* yang bersifat *scheduled on-condition* (bukan *hard-time*), dengan trigger:

$$R(t) \leq R_{threshold} \quad \text{atau} \quad \int_0^t \lambda(\tau) d\tau \geq N_{events,max}$$

**Tahap 5–7 — Eksekusi, Monitoring, dan Feedback Loop** menggunakan CMMS (Computerized Maintenance Management System) dengan *real-time reliability data