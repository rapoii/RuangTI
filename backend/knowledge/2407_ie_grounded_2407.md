# 2407 — FMEA AIAG/VDA dan Analisis Kegagalan Mesin CNC: Integrasi Manajemen Risiko Mutu Lintas Sektor Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur global, khususnya sektor otomotif, menghadapi tekanan struktural yang semakin berat terkait dengan manajemen risiko mutu produk dan keandalan proses. Biaya jaminan kualitas (cost of quality) yang meliputi rework, scrap, penarikan produk (recall), dan klaim garansi dapat menyerap antara 15% hingga 40% dari total biaya operasional perusahaan manufaktur kelas dunia, tergantung pada kompleksitas produk dan tingkat kematangan sistem mutu internalnya (Bizeli & Terazzi, 2024). Dalam konteks inilah *Failure Mode and Effects Analysis* (FMEA) muncul sebagai instrumen fundamental untuk mengidentifikasi, mengevaluasi, dan memitigasi potensi kegagalan secara proaktif sebelum mencapai pelanggan akhir.

Metodologi FMEA konvensional yang diperkenalkan oleh Ford Motor Company pada tahun 1970-an dan kemudian distandarisasi oleh AIAG (Automotive Industry Action Group) telah mengalami evolusi signifikan. Kolaborasi AIAG dengan VDA (Verband der Automobilindustrie) Jerman pada tahun 2019 menghasilkan standar harmonis yang menggantikan empat dokumen FMEA lama menjadi satu pedoman terpadu, yang kemudian dikenal luas sebagai *AIAG-VDA FMEA Handbook* (Bizeli & Terazzi, 2024). Studi Bizeli dan Terazzi (2024) yang dilakukan di sebuah perusahaan multinasional pembuat komponen otomotif menunjukkan bahwa transisi metodologis ini bukan sekadar perubahan dokumentasi, melainkan transformasi paradigma penilaian risiko yang menggeser pendekatan *Risk Priority Number* (RPN) tradisional menuju *Action Priority* (AP) berbasis logika pohon keputusan.

Di sisi lain, implementasi FMEA tidak terbatas pada konteks desain produk otomotif. Saputra dan Sukmono (2024) dalam studinya terhadap mesin *CNC milling* mendemonstrasikan bagaimana FMEA dapat diadaptasi untuk keperluan pemeliharaan aset fisik (*asset integrity management*), khususnya pada peralatan produksi berpresisi tinggi yang memiliki kontribusi signifikan terhadap *Overall Equipment Effectiveness* (OEE). Kedua paper ini secara komplementer menggambarkan spektrum aplikasi FMEA yang luas — mulai dari *design FMEA* pada produk jadi hingga *process FMEA* dan *equipment FMEA* pada lini produksi.

Urgensi penerapan FMEA modern di industri tidak terlepas dari tiga fenomena utama. Pertama, meningkatnya kompleksitas produk dan proses yang menuntut pendekatan risiko yang lebih ketat dan terdokumentasi. Kedua, persyaratan pelanggan (customer specific requirements) yang semakin eksplisit menuntut bukti dokumentasi risiko yang traceable. Ketiga, adopsi standar IATF 16949:2016 yang menjadikan FMEA sebagai *core tool* wajib dalam *automotive quality management system*. Ketiga fenomena ini secara eksplisit diidentifikasi Bizeli dan Terazzi (2024) sebagai pendorong utama implementasi AIAG-VDA FMEA pada kasus multinasional yang mereka teliti.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma Action Priority (AP) dalam AIAG-VDA FMEA

Berbeda dengan RPN tradisional, AIAG-VDA FMEA menggunakan pendekatan berbasis *risk profile* yang mempertimbangkan tiga parameter fundamental, yaitu **Severity (S)**, **Occurrence (O)**, dan **Detection (D)**. Namun agregasi ketiganya tidak lagi menggunakan perkalian sederhana, melainkan melalui tabel keputusan yang menghasilkan tingkatan **Action Priority (AP)** dengan nilai *Very High (H)*, *High (H)*, *Medium (M)*, *Low (L)* (Bizeli & Terazzi, 2024).

Formulasi RPN klasik dinyatakan sebagai:

$$RPN = S \times O \times D \tag{1}$$

dengan $S \in [1, 10]$ menunjukkan tingkat dampak kegagalan terhadap pelanggan, $O \in [1, 10]$ menunjukkan probabilitas kegagalan terjadi, dan $D \in [1, 10]$ menunjukkan probabilitas kegagalan tidak terdeteksi sebelum mencapai pelanggan.

Pada AIAG-VDA, konsep AP didekombinasikan melalui *matrix* dua dimensi antara sumbu **Severity-Occurrence (S-O)** dan sumbu **Detection (D)**. Logika keputusan secara formal dapat ditulis sebagai:

$$AP = f(S, O, D) = \begin{cases} \text{Very High}, & \text{jika } (S, O) \geq (8, 8) \text{ atau } D \geq 9 \\ \text{High}, & \text{jika kombinasi } S, O \text{ atau } D \text{ memenuhi threshold spesifik} \\ \text{Medium}, & \text{jika kombinasi berada pada tingkat menengah} \\ \text{Low}, & \text{jika } (S, O) \leq (4, 5) \text{ dan } D \leq 6 \end{cases} \tag{2}$$

Pendekatan ini mengatasi kelemahan utama RPN, yaitu kemampuan untuk membedakan dua *failure mode* dengan nilai RPN identik tetapi tingkat risiko aktual yang berbeda secara substansial (Bizeli & Terazzi, 2024).

### 2.2 Formulasi Kuantitatif untuk Analisis Pemeliharaan CNC

Saputra dan Sukmono (2024) menggunakan FMEA sebagai kerangka analisis pemeliharaan mesin *CNC milling*. Formulasi kuantitatif yang relevan dalam konteks ini meliputi perhitungan **Mean Time Between Failures (MTBF)**, **Mean Time To Repair (MTTR)**, dan **Availability (A)** sistem:

$$MTBF = \frac{T_{operasi\,total} - T_{downtime}}{N_{failures}} \tag{3}$$

$$MTTR = \frac{\sum_{i=1}^{n} t_{repair,i}}{n} \tag{4}$$

$$A = \frac{MTBF}{MTBF + MTTR} \times 100\% \tag{5}$$

dengan $T_{operasi\,total}$ adalah total waktu operasi, $T_{downtime}$ adalah total waktu henti, $N_{failures}$ adalah jumlah kegagalan, dan $t_{repair,i}$ adalah waktu perbaikan insiden ke-$i$.

### 2.3 Efektivitas Tindakan Mitigasi

Efektivitas implementasi tindakan mitigasi dari FMEA dapat diukur menggunakan *risk reduction ratio*:

$$\eta_{mitigasi} = \frac{RPN_{sebelum} - RPN_{sesudah}}{RPN_{sebelum}} \times 100\% \tag{6}$$

atau dalam paradigma AP:

$$\Delta AP_{level} = AP_{before} - AP_{after} \tag{7}$$

dimana penurunan *Action Priority* dari *Very High* ke *Medium* atau *Low* mengindikasikan keberhasilan mitigasi (Bizeli & Terazzi, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AIAG-VDA FMEA mengikuti pendekatan tujuh langkah (*seven-step approach*) yang secara eksplisit diidentifikasi oleh Bizeli dan Terazzi (2024) sebagai kerangka kerja utama dalam kasus multinasional yang diteliti:

**Langkah 1 — Perencanaan dan Preparasi (*Planning & Preparation*).** Tahap ini mencakup penentuan cakupan (*scope*), pembentukan tim lintas fungsi (*cross-functional team*) yang biasanya terdiri dari perwakilan dari departemen desain, manufaktur, mutu, pembelian, dan *reliability engineering*, serta pemilihan pendekatan yang sesuai (*DFMEA*, *PFMEA*, atau *FMEA-MSR* untuk *Monitoring & System Response*).

**Langkah 2 — Analisis Struktur (*Structure Analysis*).** Menggunakan notasi Block Diagram, Boundary Diagram, atau struktur pohon produk untuk memvisualisasikan hubungan antar komponen dan subsistem. Pada konteks CNC milling, Saputra dan Sukmono (2024) menerapkan langkah ini untuk memetakan subsistem utama seperti spindle, sistem pengumpan (feed system), kontrol numerik, dan sistem pendingin.

**Langkah 3 — Analisis Fungsi (*Function Analysis*).** Translasi kebutuhan pelanggan menjadi fungsi teknis menggunakan bagan P-diagram dan diagram alir proses. Setiap fungsi dikuantifikasi dengan spesifikasi metrik seperti akurasi posisi, toleransi dimensi, atau *surface roughness* (Ra).

**Langkah 4 — Analisis Kegagalan (*Failure Analysis*).** Identifikasi *failure mode* potensial untuk setiap fungsi, beserta efek (*effect*) dan penyebab (*potential cause*) menggunakan teknik seperti *brainstorming*, analisis Pareto, dan *fishbone diagram*.

**Langkah 5 — Analisis Risiko (*Risk Analysis*).** Penilaian parameter S, O, D menggunakan tabel referensi AIAG-VDA 2019. Pada tahap ini, agregasi AP dilakukan sesuai Persamaan (2).

**Langkah 6 — Optimasi (*Optimization*).** Perumusan tindakan pencegahan (*prevention control*) dan tindakan deteksi (*detection control*) untuk menurunkan tingkat AP. Pendekatan *poka-yoke*, *redundancy design*, dan *preventive maintenance* menjadi opsi utama.

**Langkah 7 — Dokumentasi (*Documentation*).** Penyusunan laporan FMEA yang *traceable* dan *audit-ready* sesuai dengan persyaratan IATF 16949:2016.

Diagram alir implementasi dapat direpresentasikan sebagai berikut:

```
┌─────────────────────────┐
│ 1. Planning & Prep      │
│ (Tim, Scope, Tools)     │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ 2. Structure Analysis   │
│ (Block Diagram)         │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ 3. Function Analysis    │
│ (P-Diagram, Flow)       │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ 4. Failure Analysis     │
│ (FM, Effects, Causes)   │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ 5. Risk Analysis        │
│ (S, O, D → AP)          │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ 6. Optimization         │
│ (PC, DC, Mitigation)    │
└────────────┬────────────┘
             ▼
┌─────────────────────────┐
│ 7. Documentation        │
│ (FMEA Sheet, Review)    │
└─────────────────────────┘
```

Saputra dan Sukmono (2024) menekankan bahwa dalam konteks pemeliharaan CNC, *PFMEA* lebih relevan karena analisis dilakukan pada proses (pemesinan, alih-aliran, kalibrasi), bukan pada desain produk.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Sintesis Kasus: Mesin CNC Milling untuk Komponen Otomotif

Berdasarkan integrasi kedua paper, kami menyusun studi kasus kuantitatif pada mesin *CNC milling* 5-sumbu yang memproduksi komponen *brake caliper housing* untuk industri otomotif. Data diasumsikan berdasarkan praktik industri dan tipikal yang dilaporkan dalam literatur.

**Data historis operasional selama 6 bulan:**
- Total waktu operasi: $T_{operasi} = 1.440$ jam
- Total downtime: $T_{downtime} = 87$ jam
- Jumlah insiden kegagalan: $N_{failures} = 6$ insiden

**Perhitungan MTBF dan MTTR:**

$$MTBF = \frac{1.440 - 87}{6} = \frac{1.353}{6} = 225{,}5 \text{ jam/failure}$$

Asumsikan total waktu perbaikan kumulatif $\sum t_{repair} = 58$ jam untuk 6 insiden:

$$MTTR = \frac{58}{6} = 9{,}67 \text{ jam/repair}$$

$$A = \frac{225{,}5}{225{,}5 + 9{,}67} \times 100\% = \frac{225{,}5}{235{,}17} \times 100\% \approx 95{,}89\%$$

### 4.2 Penilaian FMEA pada Subsistem Spindle

Identifikasi tiga *failure mode* utama dengan parameter S, O, D menggunakan skala AIAG-VDA:

| No | Failure Mode | Effect | Cause | S | O | D | RPN (Eq. 1) | AP (Eq. 2) |
|----|-------------|--------|-------|---|---|---|-------------|------------|
| FM1 | Bantalan spindel