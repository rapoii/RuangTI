# 1614 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan (RCM) untuk Memaksimalkan Ketersediaan Armada Pesawat di Sektor MRO Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector.* Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector.* Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tekanan profitabilitas yang semakin tajam di tengah biaya operasional yang didominasi oleh Maintenance, Repair, and Overhaul (MRO). Berdasarkan laporan International Air Transport Association (IATA), biaya MRO mencapai sekitar 11–15% dari total biaya operasional maskapai, menjadikannya pos biaya terbesar kedua setelah bahan bakar. Dalam konteks ini, Hang Zhou (2024) memperkenalkan kerangka kebijakan pemeliharaan hirarkis yang memaksimalkan ketersediaan (*fleet availability*) armada pesawat dengan mengintegrasikan prinsip *Reliability-Centered Maintenance* (RCM) ke dalam sistem pemeriksaan bertingkat A/B/C/D yang lazim diterapkan di industri aviasi.

Permasalahan inti yang diangkat oleh Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) adalah degradasi non-linier kinerja siklus hidup (*life-cycle performance*) pada sistem aviasi yang kompleks. Karakteristik degradasi ini tidak dapat ditangkap secara memadai oleh model pemeliharaan konvensional berbasis interval waktu tetap. RCM muncul sebagai pendekatan yang secara kuantitatif mampu memodelkan degradasi tersebut, sehingga interval inspeksi dapat dioptimasi berdasarkan risiko kegagalan fungsional, bukan sekadar jadwal kalender. Namun, implementasi RCM pada sistem multi-komponen dengan struktur hirarkis seperti pesawat terbang menghadapi tantangan berupa interdependensi antar sub-sistem, biaya siklus hidup yang heterogen, dan ketidakpastian masa pakai komponen setelah *overhaul*.

Studi Zhou menekankan bahwa kebijakan A/B/C/D check pada aviasi—dari inspeksi ringan harian (A-check) hingga *heavy maintenance visit* penuh (D-check) yang membutuhkan pembongkaran total pesawat selama 1–2 bulan—harus dirancang sebagai satu sistem terpadu, bukan sebagai keputusan independen. Fokus utama makalah ini adalah memaksimalkan waktu operasi tersedia (*maximum available operation time*) melalui penjadwalan pemeriksaan siklus hidup yang optimal, sambil membuktikan secara matematis keberadaan nilai optimal pada model ketersediaan (*availability*). Pendekatan ini sangat relevan bagi operator armada yang mengelola puluhan hingga ratusan pesawat, di mana setiap peningkatan 1% pada *availability* dapat menghasilkan tambahan pendapatan puluhan juta dolar per pesawat per tahun.

Urgensi ekonomi semakin diperkuat oleh meningkatnya harga pesawat baru (sekitar USD 100–150 juta untuk narrow-body) dan kelangkaan *slot* MRO global. Oleh karena itu, strategi pemeliharaan yang ceroboh—baik *over-maintenance* yang membuang ketersediaan maupun *under-maintenance* yang meningkatkan risiko keselamatan—dapat berdampak signifikan pada profitabilitas dan reputasi maskapai. Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) memperluas analisis ini dengan menunjukkan bagaimana kebijakan pemeliharaan hirarkis yang dioptimasi dapat diadaptasikan untuk konteks operasional yang berbeda, termasuk periode *mature-run* di mana komponen telah melewati masa *infant mortality* dan memasuki fase keausan stabil.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dikembangkan Zhou (2024) bertumpu pada empat pilar analitis: fungsi keandalan (*reliability function*), laju hazard dependen waktu, model ketersediaan rata-rata jangka panjang (*long-run steady-state availability*), dan optimasi interval检修 berbasis maksimasi ketersediaan.

### 2.1. Fungsi Keandalan dan Laju Kegagalan

Untuk komponen avionik dan struktur pesawat yang terdegradasi secara non-linier, Zhou mengadopsi model *Weibull* dengan parameter bentuk $\beta > 1$ (mencirikan fase *wear-out*):

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \eta > 0$$

dengan $t$ menyatakan usia operasi (dalam *flight hours* atau *flight cycles*), $\eta$ adalah *characteristic life*, dan $\beta$ adalah parameter bentuk. Laju kegagalan sesaat (*instantaneous failure rate*) dinyatakan sebagai:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Ketika $\beta = 1$, model degenerasi menjadi distribusi eksponensial dengan $\lambda(t) = \lambda$ konstan—representasi khas untuk fase *mature-run* yang menjadi fokus studi Zhou.

### 2.2. Model Ketersediaan Hirarkis A/B/C/D

Kebijakan A/B/C/D check didefinisikan sebagai empat tingkat inspeksi dengan frekuensi menurun dan kedalaman pemeriksaan meningkat. Zhou (2024) memformalkan kebijakan ini melalui empat interval检修 berturut-turut $T_A, T_B, T_C, T_D$ dengan rasio tipikal:

$$T_A : T_B : T_C : T_D \approx 1 : 12 : 50 : 400$$

Misalnya, dengan $T_A = 500$ *flight hours*, diperoleh $T_B \approx 6.000$ jam, $T_C \approx 25.000$ jam, dan $T_D \approx 200.000$ jam (atau sekitar 8–12 tahun kalender).

Waktu检修 efektif untuk setiap tingkat adalah $D_A, D_B, D_C, D_D$ dengan $D_A < D_B < D_C \ll D_D$. *Steady-state availability* untuk satu siklus检修 hirarkis penuh (satu D-check) didefinisikan sebagai:

$$A_{ss} = \frac{T_{total}}{T_{total} + \sum_{k \in \{A,B,C,D\}} N_k \cdot D_k}$$

di mana $T_{total}$ adalah total waktu operasi dalam satu siklus, $N_k$ adalah jumlah inspeksi tingkat-$k$ per siklus, dan $D_k$ adalah durasi检修 rata-rata tingkat-$k$.

Untuk kebijakan dengan satu D-check yang mencakup $N_C = T_D / T_C$ buah C-check, $N_B = T_D / T_B$ buah B-check, dan $N_A = T_D / T_A$ buah A-check, maka:

$$A_{ss}(T_A, T_B, T_C, T_D) = \frac{T_D}{T_D + N_A D_A + N_B D_B + N_C D_C + D_D}$$

### 2.3. Probabilitas Kegagalan dalam Interval Inspeksi

Karena kebijakan检修 berbasis interval mengasumsikan komponen selalu dalam kondisi layak antara dua inspeksi, probabilitas kegagalan laten (*latent failure*) pada interval检修 $T_k$ menjadi metrik keamanan kritis:

$$P_f(T_k) = 1 - R(T_k) = 1 - e^{-\left(\frac{T_k}{\eta}\right)^{\beta}}$$

Batas regulasi aviasi mensyaratkan $P_f(T_k) \leq \epsilon_k$ (misalnya $\epsilon_A = 10^{-3}$, $\epsilon_D = 10^{-5}$). Hal ini menghasilkan *constraint* interval检修 minimum:

$$T_k \leq \eta \cdot \left[-\ln(1 - \epsilon_k)\right]^{1/\beta}$$

### 2.4. Formulasi Optimasi

Zhou (2024) merumuskan masalah optimasi sebagai:

$$\max_{T_A, T_B, T_C, T_D} \quad A_{ss}(T_A, T_B, T_C, T_D)$$

$$\text{subject to:} \quad P_f(T_k) \leq \epsilon_k, \; \forall k \in \{A,B,C,D\}$$

$$T_A < T_B < T_C < T_D, \quad T_k > 0$$

Zhou membuktikan secara analitis bahwa fungsi tujuan merupakan *quasi-concave* pada domain kendala, sehingga solusi optimal global $\mathbf{T}^* = (T_A^*, T_B^*, T_C^*, T_D^*)$ bersifat unik dan dapat dicari melalui kondisi KKT (*Karush–Kuhn–Tucker*). Lebih jauh, untuk kasus dengan *partial refurbishment* pada fase *mature-run*, Zhou memodifikasi struktur biaya dengan memasukkan faktor rejuvenasi不完全:

$$R_{post}(t) = e^{-\left(\frac{t - \alpha T_{pre}}{\eta}\right)^{\beta}}$$

di mana $\alpha \in [0,1]$ adalah *rejuvenation factor* yang merepresentasikan seberapa besar检修 D atau检修 parsial memulihkan kondisi komponen. Nilai $\alpha = 1$ menunjukkan *perfect repair* (komponen menjadi baru), sedangkan $\alpha < 1$ menunjukkan *imperfect repair* yang realistis untuk sebagian besar komponen avionik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis Zhou (2024) mengikuti metodologi tujuh tahap yang sesuai dengan standar SAE JA1011 (Evaluation Criteria for RCM) dan SAE JA1012 (RCM Decision Diagram):

### Tahap 1: Definisi Sistem dan Batasan Operasional

Insinyur MRO memetakan seluruh *line replaceable units* (LRU) pesawat—mulai dari *powerplant*, *avionics suite*, *flight control surface*, hingga *landing gear*. Setiap LRU diberi tag identifikasi, fungsi primer, dan mode kegagalan potensial berdasarkan data MSG-3 (Maintenance Steering Group-3).

### Tahap 2: Analisis Fungsi dan Kegagalan (FMEA)

Tahap ini mengidentifikasi tujuh kategori konsekuensi kegagalan sesuai standar SAE JA1011: *(i)* *hidden failure*, *(ii)* *evident failure affecting safety*, *(iii)* *evident failure affecting operations*, *(iv)* *evident failure affecting economy*, *(v)* *evident failure affecting environment*, *(vi)* *failure causing severe injury*, *(vii)* *failure causing mission abort*. Setiap mode kegagalan dikuantifikasi dengan *Risk Priority Number* (RPN):

$$RPN = S \times O \times D$$

dengan $S$ = *severity*, $O$ = *occurrence*, $D$ = *detection difficulty*, masing-masing dalam skala 1–10.

### Tahap 3: Seleksi Tugas RCM (RCM Decision Logic Tree)

Mengikuti diagram keputusan SAE JA1012, untuk setiap mode kegagalan dipilih salah satu dari delapan strategi: *predictive maintenance* (PdM), *preventive restoration*, *failure finding*, *redesign*, *one-shot replacement*, *scheduled discard*, *no preventive action* (run-to-failure), atau kombinasi. Untuk komponen avionik kritis, umumnya dipilih *predictive* berbasis *health monitoring* real-time, sedangkan untuk struktur pesawat dipilih *preventive restoration* sesuai interval A/B/C/D.

### Tahap 4: Penentuan Interval Hirarkis Optimal

Interval检修 dioptimasi menggunakan model Bagian 2 dengan menyeimbangkan tiga tujuan: (a) maksimisasi $A_{ss}$, (b) pemeliharaan $P_f(T_k) \leq \epsilon_k$, dan (c) minimisasi total *life-cycle cost* (LCC):

$$LCC = \sum_{k} \frac{C_k \cdot N_k + C_f \cdot P_f(T_k) \cdot N_k}{(1+r)^{t}} + C_{down} \cdot T_{down}$$

dengan $C_k$ = biaya检修 tingkat-$k$, $C_f$ = biaya kegagalan, $C_{down}$ = biaya *downtime* per jam, $r$ = *discount rate*.

### Tahap 5: Validasi dengan Data Historis dan Simulasi Monte Carlo

Parameter $\beta$, $\eta$, dan $\alpha$ dikalibrasi menggunakan data *unscheduled removal rate* historis 3–5 tahun. Simulasi Monte Carlo dengan $N = 10^5$ hingga $10^6$ replikasi menghasilkan distribusi empiris ketersediaan dan validasi keakuratan model analitis.

### Tahap 6: Implementasi Bertahap (Pilot → Partial Fleet → Full Fleet)

Kebijakan diujicobakan pada 5–10% armada (fase pilot, 3–6 bulan), lalu diperluas ke 30% (fase validasi), dan akhirnya ke seluruh armada (fase *baseline operation*). Setiap fase disertai *Key Performance Indicator* (KPI): *dispatch reliability*, *technical dispatch delay rate*, *mean time between unscheduled removals* (MTBUR), dan *shop visit cost per flight hour*.

### Tahap 7: Audit dan Perbaikan Berkelanjutan

Audit triwulanan terhadap kepatuhan检修, analisis tren MTBUR, dan *root cause analysis* untuk setiap *unscheduled event* menjamin kebijakan tetap optimal terhadap perubahan pola operasional (misalnya, penambahan rute, perubahan iklim operasional, atau *fleet aging*).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input (Studi Kasus: Armada Narrow-Body 50 Pesawat)

Sebuah maskapai regional mengoperasikan 50 pesawat narrow.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
