# 1736 — Analisis Beban Kerja Mental dan Operasional Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *e-commerce* di Indonesia mengalami transformasi struktural yang pesat dalam dasawarsa terakhir, didorong oleh akselerasi digitalisasi konsumsi rumah tangga dan perubahan perilaku berbelanja pasca-pandemi COVID-19. Shopee Express, sebagai salah satu unit *last-mile delivery* dari ekosistem PT Shopee International Indonesia, mengelola volume pengiriman yang fluktuatif dengan karakteristik musiman yang ekstrem—misalnya pada periode Harbolnas (Hari Belanja Nasional) 11.11, 12.12, dan Ramadan—di mana throughput harian dapat melonjak 3–5 kali lipat dibanding hari biasa. Dalam konteks operasional ini, *partner employees* atau kurir mitra menjadi simpul kritis (critical node) yang menentukan Service Level Agreement (SLA), tingkat *failed delivery attempt*, dan pada akhirnya kepuasan pelanggan akhir.

Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa mayoritas riset beban kerja di industri logistik Indonesia masih berfokus pada dimensi fisik (cardiovascular load, musculoskeletal injury) melalui pendekatan *ergonomic checklist* atau *Rapid Entire Body Assessment* (REBA), sementara dimensi kognitif-mental—yang justru dominan pada pekerjaan berbasis *dashboard tracking*, *sorting decision*, dan *route planning*—kerap terabaikan. Padahal, menurut kerangka kerja *human factors* modern (seperti yang diadopsi dalam ISO 9241-210 dan ISO 10075 untuk *ergonomics of cognitive work*), beban mental memiliki implikasi langsung terhadap *decision latency*, *error rate*, dan *safety-critical behavior* pada operator.

Urgensi ekonomis dari topik ini tidak dapat dipisahkan dari realitas *unit economics* logistik perkotaan. Setiap penambahan 1% pada *failed delivery rate* pertama dapat menaikkan biaya operasional per-parcel secara signifikan karena *return trip* dan *customer re-scheduling*. Beban mental yang tidak terkelola dengan baik akan memicu *cognitive fatigue*, yang secara empiris berkorelasi dengan meningkatnya *mis-sorting* dan pelanggaran *standard operating procedure* (SOP) pengiriman. Oleh karena itu, pengukuran kuantitatif beban mental menggunakan instrumen yang telah tervalidasi secara psikometrik menjadi kebutuhan *engineering* yang tak terhindarkan. Instrumen NASA-TLX (NASA Task Load Index), yang dikembangkan oleh Hart dan Staveland (1988) dan telah diaplikasikan di lebih dari 5.000 studi lintas industri, merupakan instrumen subjektif multidimensional yang paling sering diadopsi karena sensitivitasnya terhadap variabel工作任务 dan validitas konstruknya yang tinggi (α Cronbach umumnya > 0,70 pada keenam dimensinya).

Studi komplementer yang dilakukan oleh Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat justifikasi riset dengan menunjukkan bahwa pengukuran beban kerja di lingkungan gudang (*warehouse*) tidak cukup hanya mengandalkan salah satu metode, melainkan memerlukan triangulasi antara *Work Sampling* (untuk profil utilisasi waktu) dan NASA-TLX (untuk profil beban kognitif). Sinergi ini memungkinkan manajer operasi tidak hanya mengetahui *apa* yang dikerjakan operator, tetapi juga *seberapa berat* beban mental yang ditanggung saat mengerjakannya—sebuah informasi krusial untuk *capacity planning* dan *shift scheduling* yang berbasis data.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Arsitektur Konseptual NASA-TLX

NASA-TLX mengukur beban kerja sebagai konstruk multidimensional yang terdiri atas enam dimensi, masing-masing dievaluasi pada *rating scale* 0–100 dengan *tick mark* interval 5:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $MD$ | Mental Demand | Sejauh mana aktivitas memerlukan pemikiran, keputusan, dan kalkulasi |
| $PD$ | Physical Demand | Sejauh mana aktivitas memerlukan aktivitas fisik |
| $TD$ | Temporal Demand | Sejauh mana tekanan waktu dirasakan oleh operator |
| $OP$ | Own Performance | Persepsi operator terhadap keberhasilan penyelesaian tugas |
| $EF$ | Effort | Sejauh mana operator harus bekerja keras untuk mencapai target |
| $FR$ | Frustration | Sejauh mana operator merasa tertekan, tersinggung, atau frustasi |

### 2.2. Formulasi Skor Global NASA-TLX

Berbeda dengan *Raw TLX* (rata-rata aritmetika sederhana keenam rating), NASA-TLX memperkenalkan mekanisme *pairwise comparison* berbobot (weighted) untuk menghasilkan *Weighted TLX Score*:

$$TLX_{\text{weighted}} = \frac{\sum_{i=1}^{6} (R_i \times W_i)}{15}$$

di mana:
- $R_i$ = rating dimensi ke-$i$ pada skala 0–100
- $W_i$ = bobot dimensi ke-$i$, bernilai 0–5 berdasarkan jumlah kemenangan dalam 15 perbandingan berpasangan
- Total bobot $\sum_{i=1}^{6} W_i = 15$ (karena ada $\binom{6}{2}=15$ pasangan)

Prosedur pembobotan dilakukan melalui kartu *paired comparison* di mana responden memilih, dari 15 pasangan dimensi, mana yang *lebih signifikan* terhadap beban kerja pada tugas spesifik yang dievaluasi. Setiap kemenangan赋予 1 poin pada dimensi yang menang.

### 2.3. Formulasi Work Sampling

Work Sampling (WS) adalah teknik *activity sampling* berbasis probabilitas yang dikembangkan dari prinsip *time study* klasik, namun lebih ekonomis untuk studi dengan *cycle time* panjang dan pekerja terdistribusi. Formula penentuan ukuran sampel adalah:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{e^2}$$

di mana:
- $N$ = jumlah observasi minimal
- $Z$ = nilai z pada tingkat kepercayaan $(1-\alpha)$ (umumnya $Z_{0.95}=1.96$)
- $p$ = proporsi aktivitas yang diestimasi (default $p=0{,}50$ untuk konservatif)
- $e$ = margin of error absolut yang ditoleransi

Untuk akurasi lebih tinggi dengan $p$ yang sudah diketahui dari *pilot study*:

$$N_{\text{adjusted}} = \frac{Z^2 \cdot p \cdot q}{e^2 \cdot \left(1 + \frac{Z^2 \cdot p \cdot q}{e^2 \cdot N_{\text{universe}}}\right)}$$

dengan $q = 1-p$ dan $N_{\text{universe}}$ = ukuran populasi. Frekuensi observasi acak menggunakan interval:

$$\Delta t_{\text{random}} = \frac{T_{\text{total}}}{N_{\text{total}}}$$

di mana $T_{\text{total}}$ = total waktu studi (misalnya 8 jam × jumlah hari × jumlah operator), dan $N_{\text{total}}$ = jumlah observasi yang diinginkan. Pemilihan waktu observasi mengikuti skema *random-instant sampling* untuk menghindari *bias cyclical*.

### 2.4. Korelasi Beban Mental dan Produktivitas

Berdasarkan *Human Performance* literature (Wickens' Multiple Resource Theory, 2008), utilisasi beban mental terhadap kapasitas kognitif dapat dimodelkan sebagai:

$$U_{\text{mental}} = \frac{TLX_{\text{weighted}}}{TLX_{\text{max}}}$$

di mana $TLX_{\text{max}}=100$. Jika $U_{\text{mental}} > 0{,}80$, operator memasuki zona *cognitive overload*, dengan implikasi peningkatan laju *error* eksponensial menurut hukum Yerkes-Dodson:

$$P_{\text{error}} = P_0 \cdot e^{k \cdot (U_{\text{mental}} - U^*)}$$

dengan $U^* \approx 0{,}70$ sebagai *optimal arousal level*, dan $k$ = konstanta yang bergantung pada kompleksitas tugas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Implementasi NASA-TLX untuk Kurir E-Commerce

```
┌─────────────────────────────────────────────┐
│ FASE 1: PERENCANAAN & DESAIN INSTRUMEN      │
│ • Identifikasi task per kurir (Pick-up,     │
│   Sortation, Routing, COD, Return handling) │
│ • Penentuan 6 dimensi NASA-TLX              │
│ • Validasi kuesioner (pilot, n=10)          │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ FASE 2: PENGUMPULAN DATA PRIMER            │
│ • Stratified random sampling                │
│ • Pengisian rating tiap dimensi (0-100)     │
│ • Pairwise comparison (15 pasangan)         │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ FASE 3: PERHITUNGAN SKOR                    │
│ • Σ(R_i × W_i) untuk tiap responden         │
│ • Rata-rata per dimensi                     │
│ • Identifikasi dimensi dominan              │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ FASE 4: ANALISIS & INTERPRETASI             │
│ • Threshold: TLX < 50 = Low                 │
│               50–75 = Moderate              │
│               > 75 = High                   │
│ • Korelasi dengan shift, peak season, dll   │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│ FASE 5: REKOMENDASI INTERVENSI              │
│ • Redistribusi shift                        │
│ • Penambahan decision-support tools         │
│ • Cognitive rest protocol                   │
└─────────────────────────────────────────────┘
```

### 3.2. SOP Pengukuran NASA-TLX (Berdasarkan Praktik Industri)

1. **Persiapan Awal:** Kuesioner dicetak dengan *visual analog scale* (VAS) 0–100, dilengkapi instruksi dalam bahasa Indonesia yang jelas dan contoh pengisian.
2. **Penjelasan Pra-Pengisian:** Enumerator menjelaskan bahwa tidak ada jawaban benar/salah, dan responden diminta mengacu pada pengalaman aktual dalam shift terakhir.
3. **Pengisian Rating:** Responden memberikan *tick* pada keenam skala dimensi secara berurutan.
4. **Pairwise Comparison:** Responden diminta memilih dari 15 kartu perband