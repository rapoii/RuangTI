# 2542 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. SSRN. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy — Companion Study*. SSRN. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu sektor *capital-intensive* dengan kompleksitas rekayasa tertinggi di dunia. Sebuah armada pesawat narrow-body modern seperti Airbus A320 atau Boeing 737 memiliki nilai per unit mencapai USD 50–120 juta, dengan siklus operasional yang melibatkan lebih dari 3.000–4.500 jam terbang per tahun, lebih dari 1.500 siklus *take-off–landing*, dan paparan terhadap beban mekanis-fatigue-thermal yang sangat variatif (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Di dalam ekosistem ini, rantai pasok MRO (Maintenance, Repair, and Overhaul) tidak lagi berfungsi sebagai *cost center* semata, melainkan sebagai *strategic value driver* yang menentukan *fleet availability*, *dispatch reliability*, dan *airline revenue retention*.

Urgensi pengembangan kebijakan pemeliharaan hirarkis berbasis keandalan (*Reliability-Centered Maintenance*, RCM) semakin nyata ketika biaya *AOG (Aircraft-on-Ground)* dapat menyentuh USD 100.000–150.000 per hari per unit, sementara *ground time* akibat interval check yang tidak optimal menurunkan *daily aircraft utilization* (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)). Secara historis, industri penerbangan menjalankan kebijakan pemeliharaan terstruktur berbasis *hard-time intervals* (A-check, B-check, C-check, dan D-check) yang dikembangkan oleh pabrikan OEM (Original Equipment Manufacturer) seperti Boeing dan Airbus. Pendekatan ini, meskipun menjamin kepatuhan terhadap *airworthiness directives*, belum tentu optimal secara stokastik karena tidak secara eksplisit memasukkan fungsi degradasi non-linier dari performa siklus-hidup (*life-cycle performance*).

Paper Hang Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memperkenalkan kerangka MRO policy yang mengintegrasikan siklus D-check penuh (*fully refurbished*) dengan *partial refurbishments* selama fase *mature-run* operasi pesawat. Penelitian ini secara matematis membuktikan keberadaan nilai optimum pada model ketersediaan (*availability optimum*), yang merupakan terobosan penting karena memungkinkan *trade-off* antara frekuensi intervensi dan durasi downtime. Dengan menetapkan interval pemeliharaan berbasis degradasi Weibull atau *proportional hazards model*, ketersediaan armada dapat dimaksimumkan tanpa mengorbankan margin keselamatan struktural. Konteks ini menjadi landasan bahwa optimalisasi kebijakan MRO bukan hanya persoalan teknis-mekanis, melainkan persoalan optimasi stokastik dua-fase yang harus diselesaikan secara simultan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Fungsi Degradasi Non-Linier dan Model Kegagalan

Paper Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memodelkan degradasi komponen kritis dengan distribusi Weibull dua-parameter, yang telah diterima secara luas dalam literatur keandalan penerbangan karena kemampuannya menangkap perilaku *infant mortality*, *useful life*, dan *wear-out* secara bersamaan. Fungsi densitas probabilitas kegagalan didefinisikan sebagai:

$$f(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^{\beta}}$$

dengan $\beta > 0$ adalah *shape parameter* (parameter bentuk) dan $\eta > 0$ adalah *scale parameter* (parameter skala) dalam satuan jam terbang (*flight hours*, FH) atau siklus. Fungsi keandalan kumulatif dan laju kegagalannya adalah:

$$R(t) = e^{-(t/\eta)^{\beta}}, \quad h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Untuk komponen struktural pesawat, karakteristik $\beta > 1$ mengindikasikan fase *wear-out* yang dominan, sementara untuk avionik digital, $\beta \approx 1$ mendekati proses Poisson homogen.

### 2.2 Model Ketersediaan Hirarkis Empat-Tingkat

Kebijakan A/B/C/D check dimodelkan sebagai *renewal reward process* dengan empat tingkat interval $\tau_1 < \tau_2 < \tau_3 < \tau_4$. *Steady-state availability* total armada didefinisikan sebagai:

$$A_{fleet}(\tau_1, \tau_2, \tau_3, \tau_4) = \frac{T_{operasional}}{T_{operasional} + T_{downtime}}$$

Untuk masing-masing tingkatan check dengan durasi downtime $D_i$ dan *expected operational time* $T_i$, kontribusi terhadap *unavailability* total mengikuti relasi Zhou (2024):

$$U = \sum_{i=1}^{4} \frac{D_i}{\tau_i} \cdot w_i$$

dengan $w_i$ adalah bobot kontribusi tingkat check ke-*i* terhadap total downtime, yang terkait dengan cakupan tugas inspeksi (*task coverage*). Availability maksimum diperoleh dengan meminimalkan $U$ melalui diferensiasi parsial $\partial U / \partial \tau_i = 0$, menghasilkan kondisi orde pertama:

$$\frac{\partial U}{\partial \tau_i} = -\frac{D_i \cdot w_i}{\tau_i^2} + \frac{\partial D_i}{\partial \tau_i} \cdot \frac{w_i}{\tau_i} = 0$$

### 2.3 Model Refurbishment Parsial pada Fase *Mature-Run*

Kontribusi orisinal utama paper Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) adalah formulasi *partial refurbishment* sebagai *intermediate maintenance action* di antara dua D-check penuh. Jika $K$ adalah jumlah refurbishment parsial yang插入 di antara D-check, maka *effective age* komponen setelah refurbishment direduksi menjadi:

$$\tau_{eff} = \tau_0 \cdot (1 - \gamma)^K$$

dengan $\gamma \in (0,1)$ adalah *age reduction factor* akibat refurbishment parsial, dan $\tau_0$ adalah usia komponen saat D-check. Fungsi availabilitas yang dimodifikasi menjadi:

$$A_{enhanced}(K) = \frac{1}{1 + \frac{D_D + K \cdot D_P}{\tau_{D} \cdot (1-\gamma)^K}}$$

di mana $D_D$ adalah durasi D-check, $D_P$ adalah durasi refurbishment parsial, dan $\tau_D$ adalah interval D-check. Keberadaan nilai optimum $K^*$ dibuktikan melalui analisis turunan kedua:

$$\frac{\partial^2 A_{enhanced}}{\partial K^2} < 0 \quad \text{(konkaf pada } K \geq 1\text{)}$$

yang menjamin eksistensi *global maximum* yang unik.

### 2.4 Formulasi Optimasi Dua-Fase

Menggabungkan fase operasi awal (*initial run*) dan fase mature-run, total ketersediaan jangka panjang dimodelkan dengan persamaan ekspektasi:

$$\max_{K,\tau_D} \; \mathbb{E}[A_{fleet}] = \frac{1}{T_L} \int_{0}^{T_L} A_{enhanced}(t, K) \, dt$$

dengan $T_L$ adalah *total life-cycle* pesawat (umumnya 25–30 tahun). Solusi optimum $(K^*, \tau_D^*)$ memenuhi kondisi Karush-Kuhn-Tucker (KKT) untuk masalah constrained optimization.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM dalam industri MRO penerbangan mengikuti kerangka SOP yang distandardisasi oleh regulator internasional (EASA Part-145, FAA Part 145, dan ICAO Annex 6). Berdasarkan kerangka Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), prosedur operasional dapat disusun dalam delapan tahap rekayasa:

**Tahap 1 — Karakterisasi Aset & Akuisisi Data Telemetri.**
Data operasional dari *Aircraft Health Monitoring* (AHM) dan *Aircraft Communications Addressing and Reporting System* (ACARS) dikumpulkan untuk membangun *baseline degradation curve*. Interval akuisisi minimum adalah 1 Hz untuk parameter getaran struktural, dengan penyimpanan *raw trace* minimal selama 24 bulan operasi.

**Tahap 2 — Functional Failure Analysis (FFA) & FMECA.**
Tim rekayasa keandalan melakukan *Failure Mode, Effects, and Criticality Analysis* terhadap seluruh *Maintenance Significant Items* (MSI). Setiap mode kegagalan dinilai menggunakan Risk Priority Number (RPN):

$$RPN = S \times O \times D$$

dengan $S$ = *Severity*, $O$ = *Occurrence*, $D$ = *Detection*. Item dengan $RPN \geq 100$ masuk kategori kritis dan memerlukan interval check yang lebih pendek.

**Tahap 3 — Penentuan Interval Check Optimum.**
Dengan menggunakan formulasi pada Bagian 2.2, interval $\tau_i^*$ untuk setiap tingkat check dihitung menggunakan *failure data-driven optimization*, yang menggantikan pendekatan *manufacturer's recommended interval* yang bersifat konservatif.

**Tahap 4 — Desain Tugas Pemeliharaan (RCM Decision Logic Tree).**
*Decision logic tree* standar SAE JA1011 diaplikasikan untuk menentukan apakah sebuah tugas bersifat *scheduled discard*, *scheduled overhaul*, *condition-based*, atau *failure-finding*.

**Tahap 5 — Implementasi Refurbishment Parsial.**
Modul *partial refurbishment* disisipkan pada titik-titik optimum $K^* = \lfloor T_L / \tau_D \rfloor - 1$ sepanjang siklus hidup pesawat, dengan cakupan pekerjaan yang dikurangi dari D-check (sekitar 30–40% cakupan struktural dan 50–60% inspeksi sistem).

**Tahap 6 — Integrasi dengan Maintenance Resource Planning (MRP).**
Sumber daya (man-hour, *spare parts inventory*, *tooling availability*) dijadwalkan menggunakan algoritma *finite capacity scheduling* agar tidak terjadi bottleneck di hangar.

**Tahap 7 — Pemantauan Kinerja Berkelanjutan (KPI Tracking).**
Indikator kinerja utama yang dipantau meliputi: *dispatch reliability* (target ≥ 99,5%), *technical delay rate* (target < 0,3%), *average turnaround time*, dan *MTBUR* (Mean Time Between Unscheduled Removals).

**Tahap 8 — Audit, Feedback, dan Iterasi Model.**
Setiap 12 bulan, parameter model $\beta$, $\eta$, dan $\gamma$ di-*update* dengan data terbaru menggunakan *maximum likelihood estimation*, sehingga interval check bersifat *adaptive* terhadap profil operasional aktual.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Input Parameter Operasional

Sebagai ilustrasi implementasi, pertimbangkan satu unit Airbus A320neo dengan parameter operasional berikut berdasarkan tipikal maskapai Asia Tenggara:

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Utilisasi harian | $u_d$ | 9,5 | jam/hari |
| Siklus harian | $n_c$ | 2,5 | siklus/hari |
| Durasi A-check | $D_A$ | 24 | jam |
| Durasi B-check | $D_B$ | 96 | jam |
| Durasi C-check | $D_C$ | 360 | jam |
| Durasi D-check | $D_D$ | 1.800 | jam |
| Durasi refurbishment parsial | $D_P$ | 480 | jam |
| Interval A-check | $\tau_A$ | 600 | jam terbang |
| Interval B-check | $\tau_B$ | 3.000 | jam terbang |
| Interval C-check | $\tau_C$ | 12.000 | jam terbang |
| Interval D-check | $\tau_D$ | 36.000 | jam terbang |
| Shape parameter (struktur) | $\beta$ | 2,3 | – |
| Scale parameter (struktur) | $\eta$ | 28.000 | jam terbang |
| Age reduction factor | $\gamma$ | 0,35 | – |
| Life-cycle total | $T_L$ | 90.000 | jam terbang (~25 tahun) |

### 4.2 Perhitungan Ketersediaan Baseline (Tanpa Refurbishment Parsial)

Menghitung kontribusi unavailability masing-masing tingkat check:

$$U_A = \frac{D_A}{\tau_A} = \frac{24}{600} = 0{,}0400 \quad (4{,}00\%)$$

$$U_B = \frac{D_B}{\tau_B} = \frac{96}{3.000} = 0{,}0320 \quad (3{,}20\%)$$

$$U_C = \frac{D_C}{\tau_C} = \frac{360}{12
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
