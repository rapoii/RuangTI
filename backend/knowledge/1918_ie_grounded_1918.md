# 1918 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Kajian Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem rekayasa sistem paling kompleks dan padat-modal, di mana ketersediaan (*availability*) armada pesawat bukan sekadar metrik operasional, melainkan determinan langsung profitabilitas, keselamatan publik, dan keberlanjutan rantai pasok. Setiap jam *ground time* pesawat narrow-body seperti Airbus A320 atau Boeing 737 dapat menimbulkan *revenue loss* berkisar USD 15.000–50.000 tergantung rute dan konfigurasi kabin, sehingga optimalisasi kebijakan pemeliharaan menjadi imperatif strategis. Dalam konteks inilah Hang Zhou (2024) mempublikasikan studinya yang berjudul *"Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector"* (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), yang menyoroti keterbatasan pendekatan *Reliability-Centered Maintenance* (RCM) konvensional ketika diterapkan pada sistem kompleks dengan struktur pemeliharaan multi-level.

Industri MRO penerbangan secara historis mengadopsi kebijakan pemeliharaan *hard-time* berbasis interval terbang (*flight hours*/FH) atau *flight cycles* (FC) yang tetap. Struktur hirarkis A/B/C/D-check yang berlaku di bawah regulasi FAA Part 121, EASA Part-CAMO, dan standar OEM (Original Equipment Manufacturer) mengategorikan检修 (pemeliharaan) menjadi empat tingkatan: **A-check** (inspeksi ringan, ~50–80 jam kerja, interval ~400–600 FH), **B-check** (inspeksi sedang, ~160–200 jam kerja, interval ~6–8 bulan), **C-check** (inspeksi besar, ~6.000 jam kerja, interval 20–24 bulan), dan **D-check** atau *heavy maintenance visit* (overhaul penuh, ~30.000–50.000 jam kerja, interval 6–12 tahun). Akan tetapi, Zhou (2024) mengidentifikasi *gap* kritis: degradasi kinerja siklus-hidup (*life-cycle performance*) bersifat **non-linier** seiring usia pesawat, sehingga penerapan interval pemeliharaan statis akan menghasilkan suboptimalitas ketersediaan armada — terutama ketika pesawat memasuki fase *mature-run* di mana pola kerusakan (*failure pattern*) bergeser dari *infant mortality* menuju *wear-out*.

Urgensi ekonomis diperkuat oleh data IATA yang menunjukkan biaya MRO global menembus USD 96 miliar pada 2024, dengan pangsa pasar Asia-Pasifik tumbuh 4,2% year-on-year. Zhou (2024) berargumen bahwa integrasi antara **D-check overhaul penuh** dan **refurbishment parsial** pada fase mature-run melalui kerangka RCM hirarkis dapat mengoptimalisasi *maximum available operation time* per siklus hidup pesawat. Lebih lanjut, paper versi kedua (DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) memperluas model ini dengan bukti eksistensi **nilai optimal** untuk fungsi ketersediaan, sebuah temuan yang sebelumnya diasumsikan tetapi belum dibuktikan secara matematis rigor dalam literatur MRO penerbangan. Signifikansi temuan ini melampaui domain aviasi karena menyediakan kerangka analitis yang dapat diadaptasi untuk sistem *capital-intensive* lain seperti armada kereta api, kapal kontainer, dan instalasi turbin gas.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dibangun Zhou (2024) berpijak pada tiga pilar matematis: **(i) fungsi keandalan Weibull non-linier**, **(ii) model ketersediaan *steady-state* siklik**, dan **(iii) optimasi multi-level dengan kendala siklus hidup**.

### 2.1 Model Degradasi dan Keandalan

Tingkat kegagalan (*hazard rate*) komponen kritis pesawat dimodelkan dengan distribusi Weibull dua parameter:

$$\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\beta$ adalah *shape parameter* (untuk *wear-out* $\beta > 1$, untuk *infant mortality* $\beta < 1$, dan untuk *random failure* $\beta = 1$), $\eta$ adalah *scale parameter* (umur karakteristik), dan $t$ adalah waktu operasi kumulatif. Fungsi keandalan kumulatif menjadi:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

Untuk sistem multi-komponen dengan konfigurasi seri (seperti *avionics suite* atau *landing gear assembly*), keandalan total merupakan produk keandalan individu:

$$R_{sistem}(t) = \prod_{i=1}^{n} R_i(t)$$

### 2.2 Model Ketersediaan Hirarkis

Zhou (2024) mendefinisikan ketersediaan sesaat (*instantaneous availability*) $A(t)$ sebagai peluang sistem siap beroperasi pada waktu $t$:

$$A(t) = \frac{\mu}{\lambda(t) + \mu}$$

dengan $\mu$ adalah laju perbaikan (*repair rate*, $\mu = 1/MTTR$ dimana MTTR = *Mean Time To Repair*). Ketersediaan *long-run* untuk sistem dengan siklus pemeliharaan periodik $T$ didefinisikan sebagai:

$$\bar{A}(T) = \frac{1}{T} \int_0^{T} A(t)\,dt = \frac{T_{up}}{T_{up} + T_{down}}$$

Untuk kebijakan MRO hirarkis empat tingkat (A/B/C/D), Zhou memperkenalkan indeks ketersediaan gabungan $\mathcal{A}_{fleet}$:

$$\mathcal{A}_{fleet} = \prod_{k \in \{A,B,C,D\}} \left[\frac{T_{op,k}}{T_{op,k} + T_{pm,k}}\right]$$

di mana $T_{op,k}$ adalah *maximum available operation time* sebelum检修 tingkat $k$ dan $T_{pm,k}$ adalah waktu检修 efektif tingkat $k$.

### 2.3 Fungsi Objective Optimasi

Masalah optimasi dinyatakan sebagai maksimisasi ketersediaan tunak dengan kendala total biaya siklus hidup:

$$\max_{T_A, T_B, T_C, T_D} \mathcal{A}_{fleet}(T_A, T_B, T_C, T_D)$$

$$\text{subject to:} \quad \sum_{k} C_{pm,k} \cdot n_k \leq C_{budget}$$

dengan $C_{pm,k}$ adalah biaya检修 per event tingkat $k$, $n_k$ adalah jumlah检修 tingkat $k$ sepanjang siklus hidup, dan $C_{budget}$ adalah约束 (*constraint*) anggaran operator. Zhou (2024) secara eksplisit membuktikan **eksistensi nilai optimal unik** $(\bar{T}_A^*, \bar{T}_B^*, \bar{T}_C^*, \bar{T}_D^*)$ melalui teorema titik tetap Banach dan kondisi kekonkavan fungsi tujuan pada domain layak — sebuah kontribusi teoretis yang sebelumnya absen dalam literatur MRO.

### 2.4 Relasi Recurrence D-Check

Siklus D-check yang merupakan *overhaul* penuh dimodelkan sebagai *renewal point* di mana sistem diremajakan hingga kondisi like-new, sehingga *age reduction factor* $\alpha$ berlaku:

$$A_{post-D} = \alpha \cdot A_{pre-D}, \quad 0 < \alpha < 1$$

Refurbishment parsial pada fase mature-run (antara dua D-check) memberikan *age reduction* terbatas:

$$A_{post-C} = \alpha_C \cdot A_{pre-C}, \quad \alpha_C \approx 0.6-0.8$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Zhou (2024) di industri MRO penerbangan mengikuti **lima fase rekayasa sistem** yang selaras dengan standar SAE JA1011 (RCM Evaluation) dan MSG-3 (Maintenance Steering Group):

**Fase 1 — Akuisisi Data Historis & Telemetri.** Data *fleet reliability* dikumpulkan dari * Aircraft Health Monitoring System* (AHMS) dan *Maintenance Information System* (MIS) selama minimum 24 bulan. Parameter utama: *mean time between failure* (MTBF), MTTR, *dispatch reliability*, dan *unscheduled removal rate* (URR). Data dinormalisasi terhadap *flight hours* dan *flight cycles*.

**Fase 2 — Penentuan Fungsi Degradasi.** Menggunakan *Maximum Likelihood Estimation* (MLE) pada data *time-to-failure*, parameter Weibull $(\hat{\beta}, \hat{\eta})$ diestimasi untuk setiap *Line Replaceable Unit* (LRU) signifikan. Uji goodness-of-fit Kolmogorov-Smirnov memvalidasi kecocokan model.

**Fase 3 — Analisis Kritis (FMEA & RCM Logic Tree).** Tim rekayasa keandalan menjalankan *Failure Mode and Effects Analysis* dan *Maintenance Steering Group* logic (MSG-3) untuk mengklasifikasikan setiap *failure mode* ke dalam kategori tugas pemeliharaan: *on-condition*, *hard-time*, atau *failure-finding*.

**Fase 4 — Optimasi Interval Hirarkis.** Algoritma *non-linear programming* (NLP) dengan *interior-point method* diterapkan untuk menentukan $(T_A^*, T_B^*, T_C^*, T_D^*)$ yang memaksimumkan $\mathcal{A}_{fleet}$ dengan kendala biaya dan regulasi.

**Fase 5 — Implementasi, Monitoring, dan *Continuous Improvement*.** Hasil optimasi di-*feed* ke *Maintenance Planning Document* (MPD) dan *Aircraft Maintenance Program* (AMP). *KPI* ketersediaan armada (ASK/day, RASK) dimonitor bulanan dengan *feedback loop* ke Fase 2 untuk recalibrasi model.

Diagram alir proses:

```
[AHMS/MIS Data] → [Pre-processing] → [Weibull MLE Fitting]
                                          ↓
                              [FMEA + MSG-3 Logic]
                                          ↓
                          [NLP Optimasi Interval Hirarkis]
                                          ↓
                          [Verifikasi Regulasi FAA/EASA]
                                          ↓
                          [MPD/AMP Update & Deployment]
                                          ↓
                          [Performance Monitoring → Loop]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Operator low-cost carrier mengelola armada 30 unit Airbus A320neo dengan utilisasi rata-rata 3.200 FH/tahun. Data historis *CFM LEAP-1A* engine menunjukkan parameter Weibull $(\beta=1.8, \eta=18.500\,FH)$ untuk *high-pressure turbine blade* failure mode dominan.

**Langkah 1 — Perhitungan Keandalan pada Usia T tertentu.**

Pada $t = 12.000$ FH (memasuki fase mature-run):

$$R(12.000) = \exp\left[-\left(\frac{12.000}{18.500}\right)^{1,8}\right] = \exp[-(0,6486)^{1,8}]$$

Hitung eksponen: $(0,6486)^{1,8} = e^{1,8 \cdot \ln(0,6486)} = e^{1,8 \cdot (-0,4339)} = e^{-0,7810} = 0,4578$

$$R(12.000) = e^{-0,4578} = 0,6326 \text{ atau } 63,26\%$$

**Langkah 2 — Penentuan Hazard Rate.**

$$\lambda(12.000) = \frac{1,8}{18.500} \left(\frac{12.000}{18.500}\right)^{0,8} = 9,73 \times 10^{-5} \cdot (0,6486)^{0,8}$$

$(0,6486)^{0,8} = e^{0,8 \cdot (-0,4339)} = e^{-0,3471} = 0,7066$

$$\lambda(12.000) = 9,73 \times 10^{-5} \times 0,7066 = 6,87 \times 10^{-5} \text{ per FH}$$

Artinya, pada 12.000 FH, laju kegagalan turun menjadi ~0,069 kegagalan per 1.000 FH, mengindikasikan fase mature.

**Langkah 3 — Optimasi Interval C-Check.**

Asumsikan MTTR = 36 jam检修, T_op = 6.000 FH, dan biaya C-check $C_C$ = USD 850.000 per event. *Loss of revenue* per jam AOG = USD 22.000. Fungsi ketersediaan:

$$A_{C-cycle} = \frac{T_{op}}{T_{op} + T_{pm}} = \frac{6.000 \cdot \theta}{6.000 \cdot \theta + 36}$$

dengan $\theta = 1$ (rasio konversi jam terbang ke jam kalender). Total downtime = 36 jam ⇒ *downtime cost* = 36 × 22.000 = USD 792.000 per C-check event.

**Langkah 4 — Perhitungan Ketersediaan Fleet Hirarkis.**

Dengan asumsi $T_A = 500$ FH (downtime 6 jam), $T_B = 1.800$ FH (downtime 48 jam), $T_C = 6.000$ FH (downtime 36 jam), $T_D = 24.000$ FH (downtime 720 jam):

$$\mathcal{A}_{fleet} = \frac{500 \cdot 3,2}{500 \cdot 3,2 + 6} \cdot \frac{1.800 \cdot 3,2}{1.800 \cdot 3,2
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
