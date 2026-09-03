# 2590 — Kebijakan Pemeliharaan Hierarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global menghadapi tantangan operasional yang bersifat *mission-critical*, di mana setiap jam *ground time* pesawat udara bernilai ekonomi antara USD 8.000–USD 25.000 per jam tergantung pada tipe pesawat dan rute (Zhou, 2024, DOI: 10.2139/ssrn.6387479). Dalam kerangka Manajemen Aset Fisik (*Physical Asset Management*), ketersediaan armada (*fleet availability*) menjadi determinan utama profitabilitas maskapai, keselamatan penerbangan (*flight safety*), dan kepatuhan terhadap regulasi *Civil Aviation Authority*. Zhou (2024) menekankan bahwa degradasi performa siklus-hidup (*life-cycle performance*) bersifat non-linier, sehingga pendekatan *scheduled maintenance* konvensional yang berbasis waktu tetap atau *hard-time replacement* menjadi suboptimal secara ekonomis.

Sektor *Maintenance, Repair, and Overhaul* (MRO) penerbangan menerapkan kebijakan pemeliharaan hierarkis A/B/C/D yang sudah menjadi standar internasional (Zhou, 2024, DOI: 10.2139/ssrn.5291672). Skema ini membagi tingkat intervensi berdasarkan tingkat kedalaman *teardown*, kompleksitas inspeksi, dan durasi *downtime*: A-check (inspeksi ringan, 50–100 jam kerja, periodisitas 400–600 *flight hours*), B-check (inspeksi sedang, 200–600 jam kerja, periodisitas 6–8 bulan), C-check (inspeksi berat dengan akses struktural, 1–2 minggu downtime, periodisitas 20–24 bulan), dan D-check (*full refurbishment* atau *heavy maintenance visit*, 1–2 bulan downtime, periodisitas 6–12 tahun) (Zhou, 2024). Tantangan fundamental yang diangkat Zhou adalah bagaimana mengintegrasikan logika *Reliability-Centred Maintenance* (RCM) — yang bersifat *condition-based* dan *risk-based* — ke dalam kerangka hierarkis A/B/C/D ini secara matematis optimal, guna menyeimbangkan trade-off antara ketersediaan tinggi, biaya pemeliharaan, dan risiko kegagalan fungsional (*functional failure*).

Urgensi ekonomis makin nyata pasca-pandemi COVID-19 ketika maskapai penerbangan global harus memaksimumkan utilisasi armada dengan jumlah pesawat yang terbatas. Zhou (2024, DOI: 10.2139/ssrn.6387479) menunjukkan bahwa optimalisasi siklus C-check dan D-check dapat meningkatkan availability hingga 4–7 persen poin absolut, yang pada armada 100-unit bertranslate menjadi tambahan kapasitas penerbangan tahunan signifikan. Lebih lanjut, integrasi *partial refurbishment* pada fase *mature-run* operasi pesawat (usia antara C-check ke-2 hingga D-check) menjadi strategi yang dibahas luas karena mengurangi frekuensi *full teardown* yang mahal dan panjang.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Keandalan

Zhou (2024) memodelkan degradasi komponen kritis pesawat menggunakan distribusi Weibull non-linier yang telah terverifikasi empiris pada populasi *line replaceable units* (LRU) aviasi. Fungsi keandalan univariat dinyatakan sebagai:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}, \quad \beta > 0, \eta > 0$$

di mana $\beta$ adalah parameter bentuk (*shape parameter*) yang menentukan karakteristik *infant mortality* ($\beta < 1$), *useful life* ($\beta \approx 1$), atau *wear-out* ($\beta > 1$), sedangkan $\eta$ adalah parameter skala (*scale parameter*) dalam satuan *flight hours* atau *flight cycles*. Laju kegagalan (*hazard rate*) mengikuti:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Availability pada Siklus Pemeliharaan Hierarkis

Ketersediaan sesaat (*instantaneous availability*) sistem pada interval $[0, T_k]$ dengan $k \in \{A, B, C, D\}$ didefinisikan sebagai:

$$A_k(T_k) = \frac{T_k - \tau_k(T_k)}{T_k}$$

di mana $\tau_k(T_k)$ adalah total waktu downtime kumulatif yang diakibatkan oleh intervensi pemeliharaan tingkat $k$. Untuk kebijakan hierarkis, total downtime merupakan penjumlahan downtime setiap tingkatan:

$$\tau_{total} = \tau_A + \tau_B + \tau_C + \tau_D$$

Tingkat availability jangka panjang (*long-run availability*) yang menjadi sasaran optimasi Zhou (2024, DOI: 10.2139/ssrn.6387479) diformulasikan sebagai:

$$\bar{A} = \frac{\sum_{i=1}^{N} T_i^{op}}{\sum_{i=1}^{N} (T_i^{op} + T_i^{down})}$$

di mana $T_i^{op}$ adalah durasi operasional dan $T_i^{down}$ adalah durasi downtime pada siklus pemeliharaan ke-$i$, dengan $N$ adalah jumlah total siklus dalam horizon perencanaan.

### 2.3 Model Optimasi

Masalah optimasi dirumuskan sebagai berikut: temukan interval waktu antar-pemeliharaan $\{T_A^*, T_B^*, T_C^*, T_D^*\}$ yang memaksimumkan $\bar{A}$ dengan kendala bahwa probabilitas kegagalan antara dua inspeksi tidak melampaui batas risiko yang dapat diterima $R_{min}$:

$$\max_{T_A, T_B, T_C, T_D} \bar{A}(T_A, T_B, T_C, T_D)$$

$$\text{subject to: } \prod_{j} R_j(T_j) \geq R_{min}$$

$$\text{dan } \quad T_D = n_C \cdot T_C, \quad n_C \in \mathbb{Z}^+$$

Zhou (2024) membuktikan secara analitis bahwa fungsi tujuan $\bar{A}(T_A, T_B, T_C, T_D)$ memiliki *unique optimal value* pada domain kendala yang dikompakkan (*compact feasible domain*), sehingga eksistensi solusi optimal terjamin secara matematis.

### 2.4 Model Biaya Siklus Hidup

Total *Life-Cycle Cost* (LCC) armada dalam horizon $H$ (dalam tahun):

$$\text{LCC} = \sum_{j \in \{A,B,C,D\}} \left[ C_j \cdot \frac{H}{T_j} + C_j^{down} \cdot \frac{\tau_j \cdot H}{T_j} \right] + C_{fail} \cdot \lambda_{fail}(T)$$

di mana $C_j$ adalah biaya langsung pemeliharaan tingkat $j$, $C_j^{down}$ adalah biaya *opportunity cost* per jam downtime, dan $C_{fail}$ adalah biaya kegagalan (*failure cost*) dengan laju kegagalan $\lambda_{fail}(T)$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hierarkis yang dirancang Zhou (2024, DOI: 10.2139/ssrn.6387479) mengikuti kerangka tujuh-langkah (*RCM decision logic* SAE JA1011/SAE JA1012) yang disesuaikan dengan struktur A/B/C/D:

**Langkah 1 — Identifikasi Sistem dan Batas Operasional.** Pemetaan *Aircraft Maintenance Manual* (AMM), *Maintenance Review Board Report* (MRBR), dan *Maintenance Planning Document* (MPD) untuk menentukan *system boundary* dan *operating context* setiap *power-plant*, struktur, avionik, dan sistem *landing gear*.

**Langkah 2 — Inventarisasi Komponen LRU dan SRU.** Penyusunan *Equipment List* yang mengelompokkan 1.500–3.000 LRU per pesawat berdasarkan tingkat kritisitas keselamatan dan operasional (ATA 100/ATA iSpec 2200 chapters).

**Langkah 3 — Penentuan *Failure Modes and Effects Analysis* (FMEA).** Setiap LRU dianalisis modus kegagalannya dengan menghitung *Risk Priority Number* (RPN):

$$\text{RPN} = S \times O \times D$$

di mana $S$ = *Severity*, $O$ = *Occurrence*, $D$ = *Detection* (skala 1–10).

**Langkah 4 — Penentuan *Criticality Category*.** Klasifikasi menjadi *Safety-Significant* (kategori 5/8), *Mission-Critical* (kategori 3/4), atau *Economically-Significant* (kategori 1/2) sesuai standar MSG-3.

**Langkah 5 — Pemilihan Tugas Pemeliharaan.** Untuk setiap modus kegagalan, dipilih satu atau kombinasi dari: *Hard Time* (HT), *On-Condition* (OC), *Failure Finding* (FF), atau *Condition Monitoring* (CM).

**Langkah 6 — Penentuan Interval Hierarkis.** Penghitungan $T_A^*, T_B^*, T_C^*, T_D^*$ melalui algoritma optimasi yang dijelaskan di Bagian 2.3.

**Langkah 7 — Implementasi, Monitoring, dan *Continuous Improvement*.** Pemutakhiran interval berdasarkan data *Actual Maintenance Intervals* (AMI) dan *Reliability Squawks* melalui *Reliability Program* sesuai FAR 121.135.

Diagram alir proses mengikuti urutan: **Data Telemetri → *Condition Monitoring* → Evaluasi RPN → Trigger A/B/C/D Check → Refurbishment → Update *Reliability Database***.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Armada Narrow-Body Tipe A320)

Berdasarkan studi kasus tipikal yang direpresentasikan Zhou (2024), asumsikan parameter berikut untuk satu unit pesawat dengan 6 LRU kritis (mesin, APU, *landing gear*, avionik, *flight control*, sistem hidrolik):

| Parameter | Nilai | Satuan |
|---|---|---|
| $\eta$ (skala Weibull) | 8.000 | flight hours |
| $\beta$ (bentuk Weibull) | 2,4 | – |
| $T_A$ (current) | 500 | flight hours |
| $T_B$ (current) | 4.000 | flight hours |
| $T_C$ (current) | 18.000 | flight hours |
| $T_D$ (current) | 72.000 | flight hours |
| $\tau_A$ (downtime A-check) | 12 | jam |
| $\tau_B$ (downtime B-check) | 80 | jam |
| $\tau_C$ (downtime C-check) | 240 | jam |
| $\tau_D$ (downtime D-check) | 720 | jam |
| Pemakaian harian | 10 | jam/hari |

### 4.2 Perhitungan Keandalan Antar-Interval

Keandalan kumulatif pada interval A-check:

$$R(500) = e^{-\left(\frac{500}{8000}\right)^{2,4}} = e^{-(0,0625)^{2,4}} = e^{-0,00182} = 0{,}9982$$

Pada interval C-check:

$$R(18.000) = e^{-\left(\frac{18.000}{8000}\right)^{2,4}} = e^{-(2,25)^{2,4}} = e^{-6,476} = 0{,}00153$$

Pada interval D-check:

$$R(72.000) = e^{-\left(\frac{72.000}{8000}\right)^{2,4}} = e^{-(9,0)^{2,4}} = e^{-185,2} \approx 0$$

Hasil ini menunjukkan bahwa tanpa refurbishment, keandalan jatuh mendekati nol pada usia 72.000 flight hours — mem