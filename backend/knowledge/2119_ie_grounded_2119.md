# 2119 — Manajemen Risiko Kegagalan Manufaktur Otomotif & Pemeliharaan Mesin Perkakas: Implementasi FMEA AIAG/VDA dan FMEA Klasik sebagai Pilar Keandalan Sistem Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analisis Manfaat, Tantangan, dan Kalkulasi Kuantitatif FMEA AIAG/VDA pada Manufaktur Komponen Otomotif serta Aplikasinya pada Pemeliharaan Mesin CNC Milling
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22 No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan profitabilitas yang semakin tajam pada dekade terakhir. Margin operasional yang tipis, regulasi emisi dan keselamatan yang ketat (IATF 16949, ISO 9001, ISO/SAE 21434 untuk siber-fisik), serta kompleksitas *bill of material* (BOM) pada kendaraan modern — yang kini dapat melebihi 30.000 komponen per unit —迫使 setiap *original equipment manufacturer* (OEM) dan Tier-1/Tier-2 supplier untuk mengendalikan risiko kegagalan secara proaktif, bukan reaktif. Dalam konteks inilah Bizeli & Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155), yang mendokumentasikan implementasi **AIAG/VDA FMEA Handbook (edisi 2019)** pada sebuah *multinational fabricante de peças automotivas*.

Studi tersebut bersifat deskriptif-kualitatif, menggunakan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di lingkungan korporasi multinasional. Hasil riset menunjukkan tiga *deliverables* utama: (1) **pencegahan kegagalan preventif** — failure mode teridentifikasi sebelum *serial production*; (2) **reduksi biaya *rework* dan *recall*** — yang secara agregat dapat menyerap 4–10% dari revenue pabrikan otomotif menurut benchmark industri; dan (3) **peningkatan keandalan produk** yang berkorelasi langsung dengan *warranty cost* dan *Net Promoter Score* (NPS) merek.

Di sisi paralel, Saputra & Sukmono (2024) dalam DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) mengaplikasikan FMEA klasik pada pemeliharaan **CNC Milling Machine**, sebuah *critical asset* di lini machining komponen presisi. Temuan mereka menunjukkan bahwa pendekatan FMEA, ketika dipadukan dengan *Overall Equipment Effectiveness* (OEE) dan *Mean Time Between Failures* (MTBF), mampu menyusun *preventive maintenance schedule* yang menurunkan *unplanned downtime* hingga 20–35% pada studi kasus mereka. Kedua literatur ini, meskipun berbeda sub-sektor (otomotif Tier vs. permesinan umum), mengkonvergen pada satu tesis: FMEA — baik varian AIAG/VDA maupun klasik — adalah *lingua franca* manajemen risiko mutu di lantai pabrik modern.

Urgensi ekonominya konkret. Studi *McKinsey & Company* dan *Quality Council of India* secara konsisten menunjukkan bahwa biaya kualitas (*Cost of Poor Quality* / COPQ) rata-rata mencapai **15–40% dari total biaya operasional** perusahaan manufaktur yang tidak mengadopsi FMEA secara terstruktur. Oleh karena itu, modul 2119 ini tidak hanya mendokumentasikan metodologi, tetapi juga membekali analis dengan kerangka kuantitatif untuk justifikasi investasi *quality engineering*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. FMEA Klasik: Risk Priority Number (RPN)

Formulasi tradisional yang masih digunakan luas (termasuk oleh Saputra & Sukmono, 2024) adalah **Risk Priority Number** menurut standar *AIAG-VDA FMEA 4th Edition* sebelum revisi 2019, atau standar SAE J1739 / IEC 60812:

$$
RPN = S \times O \times D
$$

di mana:
- $S$ = **Severity** (Tingkat Keparahan), skala ordinal diskrit 1–10 (10 = efek katastrofik terkait keselamatan pelanggan)
- $O$ = **Occurrence** (Frekuensi Terjadinya), skala 1–10 (10 = sangat sering, >1 per 10 item)
- $D$ = **Detection** (Kemampuan Deteksi), skala 1–10 (10 = tidak terdeteksi sama sekali sebelum sampai ke pelanggan)

Ambang batas (threshold) intervensi yang lazim digunakan di industri adalah $RPN \geq 100$ **atau** $S \geq 9$ (terlepas nilai O dan D), karena severity tinggi tidak dapat dikompensasi oleh deteksi baik.

### 2.2. AIAG/VDA FMEA (2019): Action Priority (AP)

Bizeli & Terazzi (2024) menekankan bahwa standar **AIAG/VDA FMEA Handbook edisi Juni 2019** (joint publication dari *Automotive Industry Action Group* dan *Verband der Automobilindustrie*) **mengesampingkan RPN** dan menggantikannya dengan **Action Priority (AP)** yang bersifat *rule-based logic*, bukan perkalian:

$$
AP = f(S, O, D) \in \{H, M, L\}
$$

di mana:
- **H (High)** — wajib tindakan segera; eskalasi ke manajemen
- **M (Medium)** — tindakan direkomendasikan
- **L (Low)** — tindakan sesuai kebijakan *continuous improvement*

Logika pemetaan AP menggunakan **tabel lookup matriks S×O** yang menghasilkan nilai *Criticality* (C), lalu digabung dengan **Detection (D)** untuk menentukan AP final. Misal, kombinasi $S=8, O=4$ menghasilkan Criticality tinggi, yang dipadukan dengan $D=7$ (sulit dideteksi) menaikkan AP ke **High**. Inilah perubahan paradigma: dari *continuous number* RPN menjadi *categorical prioritization* yang lebih robust terhadap subjektivitas rater.

### 2.3. Formulasi Pendukung Pemeliharaan (Saputra & Sukmono, 2024)

Untuk aplikasi pemeliharaan mesin CNC, parameter reliabilitas yang relevan:

$$
MTBF = \frac{\sum_{i=1}^{n} T_{up,i}}{\sum_{i=1}^{n} N_{f,i}}
$$

$$
MTTR = \frac{\sum_{i=1}^{n} T_{down,i}}{\sum_{i=1}^{n} N_{f,i}}
$$

$$
Availability = \frac{MTBF}{MTBF + MTTR}
$$

$$
OEE = A \times P \times Q
$$

di mana $T_{up}$ = waktu operasi, $T_{down}$ = waktu perbaikan, $N_f$ = jumlah kegagalan, $A$ = availability, $P$ = performance, $Q$ = quality rate. FMEA pada konteks ini berfungsi sebagai *front-end analyzer* untuk menentukan mode kegagalan yang menjadi prioritas *preventive maintenance*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AIAG/VDA FMEA mengikuti **tujuh langkah prosedural** yang distandarkan dalam Handbook 2019 dan divalidasi oleh Bizeli & Terazzi (2024):

### Langkah 1 — *Planning & Preparation*
Mendefinisikan scope (program/produk/proses), *boundary diagram* sistem, tim lintas-fungsi (*cross-functional team*: desain, manufaktur, kualitas, supplier, service), serta asumsi dan batasan analisis. *Deliverable*: **FMEA Scope Document**.

### Langkah 2 — *Structure Analysis*
Mengurai sistem menjadi elemen: **Block Diagram → Interface Matrix → Structure Tree**. Pada komponen otomotif, struktur mengikuti prinsip "Focus Element → Next Higher Level → System".

### Langkah 3 — *Function Analysis*
Setiap elemen struktur diberi fungsi ($F$), dengan notasi:
$$
\text{Fungsi} = \text{Substantive Verb} + \text{Noun} + \text{(Characteristic)}
$$
Contoh: "Memasok oli pelumas (tekanan ≥ 3 bar)".

### Langkah 4 — *Failure Analysis*
Tiap fungsi dikaitkan dengan satu atau lebih mode kegagalan ($\text{FM}_i$). Aturan tautan: **Function → Failure Mode → Effects → Causes**.

### Langkah 5 — *Risk Analysis*
Pemberian skor $S$, $O$, $D$ menggunakan tabel referensi AIAG/VDA. Skor Severity untuk *customer-related* failure modes (misalnya kebocoran rem) berkorelasi langsung dengan **Potential Failure Mode Risk Priority**.

### Langkah 6 — *Optimization*
Untuk AP = H/M, dirancang **Action Plan** (prevention + detection), lalu di-*re-rate* untuk menurunkan AP. **Tindakan harus Specific, Measurable, Achievable, Relevant, Time-bound (SMART)**.

### Langkah 7 — *Results Documentation*
FMEA disimpan dalam **FMEA Live Document** yang di-*update* setiap ada perubahan desain, proses, supplier, atau data lapangan (*field failure data*).

### SOP Pemeliharaan CNC (Saputra & Sukmono, 2024)
Untuk konteks permesinan, alur yang digunakan adalah:
1. Identifikasi komponen kritis mesin (spindle, ball screw, ATC, hidrolik, sistem pelumasan)
2. Wawancara operator & teknisi untuk inventarisasi *failure modes historis*
3. Penilaian RPN per mode kegagalan
4. Penentuan interval *preventive maintenance* berbasis ranking RPN
5. Implementasi *computerized maintenance management system* (CMMS) untuk *tracking* Close-Loop Action (CLA)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus A — Komponen Otomotif (Bizeli & Terazzi, 2024)

Sebuah *multinational fabricante de peças automotivas* menganalisis komponen **sensor temperature intake manifold** untuk mesin bensin turbo 1.5L. Tim FMEA mengidentifikasi mode kegagalan utama berikut:

| No. | Failure Mode | $S$ | $O$ | $D$ | RPN Klasik | AP (AIAG/VDA) |
|-----|-------------|-----|-----|-----|------------|---------------|
| FM-1 | Output sensor drift (under-read) | 8 | 5 | 6 | $8 \times 5 \times 6 = 240$ | **H** |
| FM-2 | Open circuit pada wiring harness | 9 | 3 | 4 | $9 \times 3 \times 4 = 108$ | **H** |
| FM-3 | Connector corrosion (long-term) | 6 | 6 | 7 | $6 \times 6 \times 7 = 252$ | **M** |
| FM-4 | Sensor response time lambat | 5 | 4 | 5 | $5 \times 4 \times 5 = 100$ | **L** |

**Interpretasi Kritis:**
- **FM-3** memiliki RPN tertinggi (252) namun AP hanya **Medium**, karena kombinasi S×O menghasilkan Criticality moderate, dan deteksi (D=7) masih dapat dikompensasi. Ini membuktikan tesis AIAG/VDA bahwa **RPN menyesatkan** karena bersifat *continuous* dan agregat.
- **FM-1** dan **FM-2** diprioritaskan meskipun RPN lebih rendah, karena severity 8–9 menyentuh isu keselamatan/kepatuhan emisi.

**Action Plan FM-1:** Implementasi **end-of-line 100% functional test** (menaikkan D dari 6 → 3) + redesign sensor housing dengan **hermetic sealing** (menurunkan O dari 5 → 3). Re-rate: $S=8, O=3, D=3$ → AP turun ke **M**, RPN $= 8 \times 3 \times 3 = 72$.

**Justifikasi Ekonomi:** Jika biaya *rework* per unit = €18, volume produksi = 250.000 unit/tahun, dan FM-1 menyerang 5% lot, maka *annual exposure cost* sebelum mitigasi:
$$
C_{\text{before}} = 250{,}000 \times 0{,}05 \times 18 = \text{€}225{,}000
$$
Capital expenditure redesign + sensor fixturing = €120.000. **Payback period**:
$$
PB = \frac{120{,}000}{225{,}000 - 50{,}000} = 0{,}69 \text{ tahun} \approx 8{,}3 \text{ bulan}
$$
(asumsi residual cost €50.000/tahun pasca-mitigasi).

### 4.2. Studi Kasus B — CNC Milling Machine (Saputra & Sukmono, 2024)

Mesin CNC 3-sumbu pada line machining *bracket* komponen otomotif, dengan data 12 bulan operasional:

| Komponen | Failure Mode | $S$ | $O$ | $D$ | RPN |
|----------|--------------|-----|-----|-----|-----|
| Spindle bearing | Premature wear | 9 | 6 | 5 | $9 \times 6 \times 5 = 270$ |
| Ball screw X-axis | Backlash excess | 8 | 5 | 6 | $8 \times 5 \times 6 = 240$ |
| ATC (tool changer) | Miss-grip tool | 7 | 7 | 4 | $7 \times 7 \times 4 = 196$ |
| Coolant pump | Seal bocor | 6 | 8 | 3 | $6 \times 8 \times 3 = 144$ |

Spindle bearing menjadi prioritas #1. Data historis: $T_{up,total} = 4.200$ jam, $N_f = 6$ kali, $T_{down,total} = 48$ jam.
$$
MTBF_{\text{spindle}} = \frac{4.200}{6} = 700 \text{ jam}
$$
$$
MTTR = \frac{48}{6} = 8 \text{ jam}
$$
$$
A = \frac{700}{700 + 8} = 0{,}9887 = 98{,}87\%
$$
Setelah implementasi *spindle vibration monitoring* (predictive maintenance) yang menurunkan D dari 5 → 2 dan O dari 6