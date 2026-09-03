# 2734 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Maintenance, Repair, and Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *asset-heavy* dengan struktur biaya operasional yang didominasi oleh pemeliharaan armada (*fleet maintenance*). Menurut Hang Zhou (2024) dalam tulisannya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), sektor *Maintenance, Repair, and Overhaul* (MRO) menghadapi tantangan struktural yang unik karena karakteristik degradasi *life-cycle* pesawat terbang bersifat **non-linear** dan memerlukan pendekatan pemeliharaan yang hierarkis. Pesawat narrow-body seperti keluarga Airbus A320 dan Boeing 737 menjalani serangkaian *check* berkala A, B, C, dan D, di mana *D-check* merupakan *full refurbishment* yang membutuhkan waktu 1–3 bulan dan biaya jutaan dolar AS per pesawat (Zhou, 2024).

Urgensi operasional dari penelitian ini sangat nyata. Ketidaktersediaan (*unavailability*) satu pesawat narrow-body bernilai sekitar USD 100.000–150.000 per hari dalam bentuk *lost revenue*, sehingga peningkatan ketersediaan armada sebesar 1–2% saja memiliki dampak profitabilitas yang substansial. Lebih jauh, regulator aviasi sipil (FAA, EASA, dan DGCA) mensyaratkan kepatuhan ketat terhadap program pemeliharaan berbasis keandalan untuk menjamin *continued airworthiness*. Zhou (2024) menekankan bahwa meskipun *Reliability-Centered Maintenance* (RCM) sudah mapan secara konseptual sejak Moubray (1997), **implementasinya pada sistem kompleks seperti hierarki A/B/C/D MRO masih menjadi tantangan riset terbuka**, terutama karena *trade-off* antara kedalaman inspeksi, durasi *ground time*, dan frekuensi *check* pada fase *mature-run* operasi.

Secara ekonomi, pasar MRO aviasi global bernilai lebih dari USD 100 miliar per tahun (sesuai proyeksi yang dirujuk oleh Zhou, 2024), dan sekitar 30–40% dari total *life-cycle cost* pesawat attributable pada kegiatan MRO. Oleh karena itu, optimalisasi kebijakan pemeliharaan bukan sekadar persoalan teknis tetapi juga merupakan keputusan strategis yang mempengaruhi profitabilitas maskapai, keselamatan penumpang, dan keberlanjutan rantai pasok aviasi. Dalam konteks inilah Zhou (2024) dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) memperkenalkan sebuah *framework* kebijakan MRO yang menggabungkan **D-check siklus penuh** dengan **refurbishment parsial selama fase mature-run**, dengan tujuan memaksimalkan ketersediaan operasi berdasarkan *maximum available operation time*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear

Inti dari pendekatan Zhou (2024) adalah pengakuan bahwa laju degradasi komponen pesawat tidak bersifat konstan, melainkan meningkat secara non-linear terhadap usia operasi dan akumulasi siklus terbang (*flight cycles*, FC). Model yang lazim digunakan adalah distribusi **Weibull** dengan bentuk *hazard rate*:

$$
\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta - 1}
$$

di mana $\beta$ adalah *shape parameter* ($\beta > 1$ mengindikasikan *wear-out*), dan $\eta$ adalah *scale parameter* (umur karakteristik). Fungsi keandalan kumulatif menjadi:

$$
R(t) = \exp\!\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]
$$

Untuk mengakomodasi degradasi yang bergantung pada *flight cycles* maupun *flight hours* (FH), Zhou (2024) merumuskan *equivalent flight hours*:

$$
T_{eq} = \alpha_1 \cdot \text{FH} + \alpha_2 \cdot \text{FC}
$$

dengan $\alpha_1, \alpha_2$ sebagai bobot empiris yang diturunkan dari data historis MRO.

### 2.2 Hierarki Pemeliharaan A/B/C/D

Zhou (2024) memformalkan hierarki MRO sebagai empat tingkat intervensi dengan parameter berikut (DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)):

| Tingkat | Nama | Interval Tipikal | Durasi Ground Time | Cakupan |
|---------|------|-----------------|---------------------|---------|
| A | Line Check | 400–600 FH | 4–8 jam | Inspeksi visual, servis ringan |
| B | Light Maintenance | 6–8 bulan | 1–3 hari | Inspeksi detail, *lubrication*, *operational check* |
| C | Heavy Maintenance | 20–24 bulan | 1–2 minggu | Inspeksi struktural, *system testing*, partial overhaul |
| D | Full Refurbishment | 6–12 tahun | 1–3 bulan | *Full strip-and-assess*, *cabin reconfiguration*, *paint* |

Masing-masing tingkat check memiliki *restoration factor* $r_i$ yang merepresentasikan frasi degradasi yang dipulihkan:

$$
D(t^+) = (1 - r_i) \cdot D(t^-), \quad i \in \{A, B, C, D\}
$$

di mana $D(\cdot)$ adalah *damage state*, dan $r_D \approx 0.95$ untuk *D-check* (nyaris total *reset*), sedangkan $r_C \approx 0.30$–$0.50$ (Zhou, 2024).

### 2.3 Formulasi Optimasi Ketersediaan

Tujuan utama paper ini adalah memaksimumkan ketersediaan rata-rata (*steady-state availability*) dalam satu siklus hidup lengkap. Ketersediaan sesaat didefinisikan klasik sebagai:

$$
A(t) = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}
$$

Akan tetapi, untuk kebijakan hierarkis, Zhou (2024) merumuskan **availability jangka panjang** sebagai rasio total *available operation time* terhadap total *wall-clock time* dalam satu siklus D–D:

$$
\bar{A}(T_C, T_D) = \frac{T_{\text{op}}(T_C, T_D)}{T_{\text{op}}(T_C, T_D) + T_{\text{down}}(T_C, T_D)}
$$

dengan $T_C$ adalah interval *C-check* dan $T_D$ adalah interval *D-check*. *Downtime* total mengakumulasikan kontribusi dari seluruh *check*:

$$
T_{\text{down}} = N_A \cdot \tau_A + N_B \cdot \tau_B + N_C \cdot \tau_C + \tau_D
$$

di mana $N_A, N_B, N_C$ berturut-turut adalah jumlah A-check, B-check, dan C-check di antara dua D-check, dan $\tau_i$ adalah rata-rata durasi *ground time* per check tingkat $i$.

### 2.4 Prosedur Refurbishment Parsial

Kontribusi orisinal Zhou (2024) adalah pengenalan **refurbishment parsial** (*partial refurbishment*) di antara D-check, yang secara matematis dinyatakan sebagai *virtual restoration* terhadap sub-sistem tertentu. Jika sub-sistem $k$ memiliki *hazard* parsial $\lambda_k(t)$, maka setelah refurbishment parsial pada waktu $T_p$:

$$
\lambda_k(t) = \lambda_k^{(0)}(t) - \Delta\lambda_k \cdot \mathbb{1}[t \geq T_p], \quad \Delta\lambda_k > 0
$$

Ini memungkinkan peningkatan ketersediaan tanpa harus melakukan *D-check* penuh yang mahal.

### 2.5 Bukti Eksistensi Nilai Optimal

Zhou (2024) menunjukkan secara analitis (melalui turunan pertama dan kedua) bahwa fungsi $\bar{A}(T_C, T_D)$ memiliki **nilai optimal unik** $(T_C^*, T_D^*)$ yang memenuhi kondisi *first-order necessary condition*:

$$
\frac{\partial \bar{A}}{\partial T_C} = 0, \quad \frac{\partial \bar{A}}{\partial T_D} = 0
$$

dan Hessian definit negatif pada titik optimal tersebut, sehingga $\bar{A}$ bersifat *concave* di sekitar optimum (DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hirarkis berbasis RCM mengikuti *Standard Operating Procedure* (SOP) yang distrukturisasi oleh Zhou (2024) sebagai berikut:

**Langkah 1 — Akuisisi Data Telemetri & Historis.** Maskapai mengumpulkan data FH, FC, *unscheduled removal rates*, dan *Mean Time Between Failures* (MTBF) per *Equipment Identification List* (EIList) dari sistem *Aircraft Maintenance Tracking* (AMT) seperti TRAX, AMOS, atau RAMCO.

**Langkah 2 — Penentuan Distribusi Degradasi.** Data historis diolah melalui *Maximum Likelihood Estimation* (MLE) untuk memperoleh parameter Weibull $(\beta_k, \eta_k)$ per sub-sistem kritis (mesin, *landing gear*, avionik, *cabin systems*).

**Langkah 3 — Penentuan *Criticality Index*.** Setiap komponen dievaluasi berdasarkan matriks 7R1F (*Reliability, Availability, Maintainability, Safety, etc.*) untuk memutuskan apakah masuk dalam kategori *on-condition*, *hard-time*, atau *condition-monitoring* task.

**Langkah 4 — Optimasi Interval Check.** Menggunakan solver numerik (misalnya algoritma *Sequential Quadratic Programming* atau *Genetic Algorithm* pada fungsi $\bar{A}$), maskapai menentukan $T_C^*$ dan $T_D^*$ yang memaksimalkan ketersediaan.

**Langkah 5 — Penjadwalan Refurbishment Parsial.** Sub-sistem dengan *hazard* cepat didegradasi (e.g., *high-pressure turbine blades*) dijadwalkan untuk *partial refurbishment* pada waktu $T_p < T_D$.

**Langkah 6 — Validasi melalui *MSG-3 Framework*.** Prosedur divalidasi sesuai dengan *Maintenance Steering Group – 3rd Revision* (MSG-3) dari ATA, yang menjadi standar de facto dalam industri aviasi global.

**Langkah 7 — Monitoring Berkelanjutan (PDCA).** Kinerja kebijakan dipantau melalui *Key Performance Indicators* (KPI): *Dispatch Reliability* (target > 99%), *Aircraft Utilization* (jam/hari), dan *Maintenance Cost per Available Seat Mile* (CASM-M).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri

Pertimbangkan sebuah operator narrow-body dengan 20 unit Airbus A320ceo yang beroperasi rata-rata 2.800 jam/tahun per pesawat, dengan karakteristik MRO sebagai berikut (parameter ilustratif yang konsisten dengan paper Zhou, 2024):

- $T_A = 500$ FH, $\tau_A = 6$ jam
- $T_B = 6$ bulan, $\tau_B = 2$ hari $= 48$ jam
- $T_C = 24$ bulan, $\tau_C = 12$ hari $= 288$ jam
- $T_D = 8$ tahun, $\tau_D = 60$ hari $= 1.440$ jam
- *Flight hours* kumulatif antar D-check: $T_{\text{op,D}} = 8 \times 2.800 = 22.400$ FH

### 4.2 Perhitungan Jumlah Check Tiap Tingkat

Jumlah A-check antara dua D-check:

$$
N_A = \frac{T_{\text{op,D}}}{T_A} = \frac{22.400}{500} = 44{,}8 \approx 45 \text{ check}
$$

Jumlah B-check:

$$
N_B = \frac{T_D}{6\,\text{bulan}} = \frac{96\,\text{bulan}}{6\,\text{bulan}} = 16 \text{ check}
$$

Jumlah C-check:

$$
N_C = \frac{T_D}{24\,\text{bulan}} = \frac{96}{24} = 4 \text{ check}
$$

### 4.3 Total Downtime dan Availability Baseline

$$
T_{\text{down}} = 45 \cdot 6 + 16 \cdot 48 + 4