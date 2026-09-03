# 2103 — Analisis Implementasi FMEA AIAG/VDA pada Industri Manufaktur Otomotif & Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22, No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal (Undergraduate Paper)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tantangan peningkatan kompleksitas sistem produksi yang paralel dengan tuntutan reliabilitas produk yang semakin ketat dari regulator dan konsumen. Dalam konteks inilah Bizeli dan Terazzi (2024) di jurnal *Revista Interface Tecnológica* [DOI: 10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155) melakukan studi kasus kualitatif-deskriptif pada sebuah *multinacional fabricante de peças automotivas* untuk menganalisis secara sistematis manfaat dan tantangan implementasi Failure Mode and Effects Analysis (FMEA) berbasis standar AIAG/VDA. Pendekatan ini merepresentasikan evolusi metodologi FMEA konvensional (yang berakar dari prosedur MIL-STD-1629 era 1949) menuju kerangka terintegrasi yang diterbitkan pertama kali pada 2019 sebagai kolaborasi antara Automotive Industry Action Group (AIAG) dan Verband der Automobilindustrie (VDA) Jerman.

Urgensi ekonomi studi ini sangat nyata. Menurut Bizeli & Terazzi (2024), industri komponen otomotif menghadapi tekanan biaya rework dan *recall* yang signifikan—di mana satu kampanye *recall* pada komponen *Tier-1* dapat merugikan pabrikan hingga jutaan dolar AS, belum lagi dampak reputasi merek. Studi menunjukkan bahwa penerapan FMEA AIAG/VDA secara disiplin mampu menurunkan *cost of poor quality* (COPQ) melalui pencegahan kegagalan proaktif, memperbaiki reliabilitas produk, dan—yang tidak kalah penting—mengintegrasikan tim lintas fungsi (*cross-functional team*) yang sebelumnya bekerja dalam silo organisasi. Hasil wawancara semi-terstruktur dengan tiga profesional berpengalaman di perusahaan multinasional tersebut mengonfirmasi empat pilar manfaat: (i) pencegahan kegagalan; (ii) reduksi biaya rework dan *recall*; (iii) peningkatan reliabilitas produk; serta (iv) integrasi tim dan optimasi proses produksi.

Di sisi lain, penelitian Bizeli & Terazzi (2024) juga mengidentifikasi tiga tantangan struktural yang harus diantisipasi oleh setiap organisasi yang ingin mengadopsi standar ini, yaitu: resistensi internal terhadap perubahan metodologi (khususnya dari engineer senior yang terbiasa dengan FMEA tradisional berbasis RPN), kebutuhan pelatihan berkelanjutan, dan—berdasarkan dokumen lengkap yang tersedia di repositori jurnal—hambatan integrasi data antara departemen *R&D*, *Quality*, dan *Manufacturing*. Pelengkap kontekstual penting diberikan oleh Saputra & Sukmono (2024) [DOI: 10.21070/ups.8248](https://doi.org/10.21070/ups.8248) yang mendemonstrasikan aplikasi FMEA pada pemeliharaan mesin *CNC milling*—di mana metodologi yang sama digunakan untuk mengkuantifikasi risiko kegagalan mekanis dan elektris pada peralatan produksi, menunjukkan skalabilitas FMEA AIAG/VDA dari level desain produk hingga level pemeliharaan aset.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual FMEA

FMEA adalah metodologi terstruktur untuk mengidentifikasi, mengevaluasi, dan memprioritaskan mode kegagalan potensial (*potential failure modes*) beserta dampak dan penyebabnya, sehingga tindakan mitigasi dapat dirancang secara proporsional terhadap tingkat risiko. Dalam standar AIAG/VDA 2019 yang menjadi fokus paper Bizeli & Terazzi (2024), pendekatan mengalami pergeseran paradigma dari sekadar kuantifikasi *Risk Priority Number* (RPN) tradisional menuju ***Action Priority* (AP)** yang lebih kontekstual.

### 2.2 Formulasi RPN Tradisional (untuk Komparasi)

Untuk memahami mengapa AIAG/VDA merevisi pendekatan, kita tinjau dulu formula klasik:

$$RPN = S \times O \times D$$

di mana:
- $S$ = *Severity* (Tingkat Keparahan) — skala 1–10
- $O$ = *Occurrence* (Frekuensi Terjadi) — skala 1–10
- $D$ = *Detection* (Kemampuan Deteksi) — skala 1–10 (nilai tinggi = sulit dideteksi)

Nilai RPN teoritis maksimum adalah $10 \times 10 \times 10 = 1000$.

### 2.3 Formulasi *Action Priority* (AP) AIAG/VDA

Standar AIAG/VDA 2019 menggantikan RPN tunggal dengan matriks keputusan dua dimensi yang mempertimbangkan $S$ dan $O$, lalu memodifikasi berdasarkan $D$. Formulasi dasarnya:

$$AP = f(S, O, D)$$

di mana $f$ adalah fungsi *lookup table* (tabel pencarian) yang dipublikasikan dalam manual standar. Hasil AP diklasifikasikan menjadi tiga tingkatan:
- **H (High)** — Tindakan wajib diimplementasikan
- **M (Medium)** — Tindakan direkomendasikan
- **L (Low)** — Tindakan sesuai kebijaksanaan tim

### 2.4 Indikator Keandalan & Pemeliharaan (Saputra & Sukmono, 2024)

Untuk konteks pemeliharaan mesin CNC yang dikaji Saputra & Sukmono (2024) [DOI: 10.21070/ups.8248](https://doi.org/10.21070/ups.8248), dua indikator fundamental digunakan:

$$MTBF = \frac{T_{operasional\,total}}{N_{failure}}$$

$$Availability\,(A) = \frac{MTBF}{MTBF + MTTR} \times 100\%$$

di mana $MTTR$ (*Mean Time To Repair*) adalah waktu rata-rata perbaikan.

### 2.5 Analisis Pareto untuk Prioritisasi

Dalam kedua paper, prinsip Pareto (80/20) digunakan untuk memfokuskan sumber daya pada 20% mode kegagalan yang menyebabkan 80% risiko:

$$C_{i}\% = \frac{\sum_{j=1}^{i} RPN_{j}}{\sum_{j=1}^{n} RPN_{j}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Implementasi FMEA AIAG/VDA

Berdasarkan temuan Bizeli & Terazzi (2024), implementasi FMEA AIAG/VDA mengikuti SOP berlapis berikut:

```
[Tahap 1] Scope Definition → [Tahap 2] Team Formation → [Tahap 3] Structure Analysis
    ↓
[Tahap 4] Function Analysis → [Tahap 5] Failure Analysis → [Tahap 6] Risk Analysis
    ↓
[Tahap 7] Optimization → [Tahap 8] Documentation → [Tahap 9] Continuous Review
```

### 3.2 Langkah Prosedural Detail

**Tahap 1 — Definisi Lingkup (*Scope*):** Tim *Quality Assurance* menetapkan batas analisis—apakah FMEA dilakukan pada level sistem, subsistem, komponen, atau proses. Dalam studi kasus Bizeli & Terazzi (2024), lingkup adalah komponen otomotif spesifik dengan batas toleransi geometris ketat.

**Tahap 2 — Pembentukan Tim Lintas Fungsi:** Sesuai rekomendasi AIAG/VDA, tim minimal terdiri dari 5–8 personel yang mencakup *design engineer*, *manufacturing engineer*, *quality engineer*, *supplier quality engineer*, dan *field service representative*.

**Tahap 3–5 — Analisis Struktur, Fungsi, dan Kegagalan:** Menggunakan diagram *block* dan *boundary diagram*, tim memetakan fungsi setiap elemen, lalu mengidentifikasi *failure mode*, *effect*, dan *cause*.

**Tahap 6 — Analisis Risiko:** Penilaian $S, O, D$ dilakukan secara konsensus (*team consensus*) untuk menghindari subjektivitas individual, sesuai dengan salah satu tantangan yang diidentifikasi Bizeli & Terazzi (2024).

**Tahap 7–9 — Optimasi, Dokumentasi, dan *Continuous Review*:** Tindakan mitigasi ditetapkan dengan *responsible person*, *target date*, dan *effectivity verification*.

### 3.3 SOP Pemeliharaan CNC (Saputra & Sukmono, 2024)

Untuk mesin CNC milling, FMEA dikonfigurasi dengan *failure modes* spesifik seperti kerusakan *spindle bearing*, keausan *ball screw*, kegagalan sistem hidrolik/pendingin, dan kerusakan *servo motor*. Setiap mode dievaluasi berdasarkan dampak terhadap *machine downtime*, kualitas工件 (*workpiece*), serta keselamatan operator.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Perhitungan RPN pada Komponen Otomotif

Berdasarkan kerangka Bizeli & Terazzi (2024), kita simulasi FMEA untuk komponen **brake caliper housing** pada line produksi *Tier-1*:

| No | Failure Mode | Effect | Cause | S | O | D | RPN |
|----|--------------|--------|-------|---|---|---|-----|
| 1 | Porosity pada dinding silinder | Kebocoran fluida rem | *Gas entrapment* saat *casting* | 9 | 5 | 6 | 270 |
| 2 | Dimensi *bore* out-of-spec | Keausan *piston* prematur | Keausan pahat CNC | 8 | 4 | 5 | 160 |
| 3 | *Thread* ulir rusak | Baut tidak dapat dikencangkan | *Tool wear* & getaran | 7 | 6 | 7 | 294 |
| 4 | Permukaan retak (*crack*) | *Catastrophic failure* | *Heat treatment* tidak sempurna | 10 | 3 | 8 | 240 |

**Interpretasi Manajerial:**
- Mode #3 memiliki RPN tertinggi (294), memerlukan tindakan segera berupa *tool life management* dan inspeksi ulir 100%.
- Mode #1 dan #4 menunjukkan korelasi: meski $O$ rendah, $S$ dan $D$ yang tinggi menciptakan *risk exposure* signifikan.
- Total $\sum RPN = 964$.

### 4.2 Konversi ke *Action Priority* AIAG/VDA

Untuk Mode #3 dengan $S=7, O=6, D=7$:
- AP tabel AIAG/VDA untuk kombinasi Severity tinggi + Occurrence sedang-tinggi → **AP = H (High)**
- Konsekuensi: tindakan wajib, target completion ≤ 30 hari.

Untuk Mode #2 dengan $S=8, O=4, D=5$:
- AP tabel → **AP = M (Medium)**
- Konsekuensi: tindakan direkomendasikan, target completion ≤ 90 hari.

### 4.3 Simulasi Pemeliharaan CNC (Saputra & Sukmono, 2024)

Misalkan mesin CNC milling operates selama $T_{op} = 5{,}000$ jam dengan $N_{failure} = 4$ kali dalam periode tersebut:

$$MTBF = \frac{5{,}000}{4} = 1{,}250\,\text{jam/failure}$$

Jika $MTTR = 8\,\text{jam}$ per kejadian:

$$A = \frac{1{,}250}{1{,}250 + 8} \times 100\% = 99{,}36\%$$

Tujuan peningkatan keandalan melalui mitigasi FMEA: mengurangi $N_{failure}$ menjadi 2 per 5.000 jam.

$$MTBF_{baru} = \frac{5{,}000}{2} = 2{,}500\,\text{jam}$$

$$A_{baru} = \frac{2{,}500}{2{,}500 + 8} \times 100\% = 99{,}68\%$$

**Reduksi risiko biaya downtime** (asumsi biaya downtime Rp 2.500.000/jam):
$$\Delta Cost = (N_{lama} - N_{baru}) \times MTTR \times C_{downtime} = (4-2) \times 8 \times 2.500.000 = \text{Rp}\,40.000.000$$

### 4.4 Analisis Pareto Kumulatif

Mengurutkan RPN dari Tabel 4.1 dan menghitung kontribusi kumulatif:

| Rank | Mode | RPN | % Individual | % Kumulatif |
|------|------|-----|--------------|-------------|
| 1 | #3 | 294 | 30,5% | 30,5% |
| 2 | #1 | 270 | 28,0% | 58,5% |
| 3