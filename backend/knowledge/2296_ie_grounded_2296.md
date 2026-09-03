# 2296 — Analisis Beban Kerja Mental Karyawan Mitra Shopee Express Menggunakan Metode NASA-TLX: Kerangka Kuantitatif untuk Sistem Logistik Last-Mile Indonesia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Putra Surabaya)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Putra Surabaya)*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami pertumbuhan eksponensial sepanjang dekade terakhir, dengan nilai transaksi bruto (GMV) nasional menembus lebih dari Rp 530 triliun pada 2023 dan diproyeksikan terus meningkat dengan CAGR di atas 12%. Dalam arsitektur rantai pasok digital ini, segmen *last-mile delivery* menjadi titik kritis yang menyerap 41–53% dari total biaya logistik dan menentukan kepuasan pelanggan secara langsung. Shopee Express, sebagai salah satu pilar logistik milik PT Shopee International Indonesia, mengoperasikan ribuan mitra kurir (*Shopee Express Partner/SEP*) yang bertanggung jawab atas pengangkutan paket dari *sortation hub* ke titik consignee. Berbeda dengan model kurir perusahaan tetap, mitra SEP bekerja dalam skema kemitraan *gig-economy* dengan target harian (*Daily Target/DT*), sistem *ranking*, dan *penalty* keterlambatan yang ketat. Kondisi ini menciptakan paparan stresor kognitif yang unik — kombinasi antara tuntutan fisik (*physical demand*), temporal (*temporal demand*), dan mental (*mental demand*) yang belum banyak dikuantifikasi secara empiris di literatur teknik industri Indonesia.

Kajian Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) muncul sebagai respons terhadap kesenjangan riset tersebut. Penulis melakukan pengukuran beban kerja mental (mental workload) terhadap 30 karyawan mitra Shopee Express di Surabaya menggunakan metode NASA-TLX (*National Aeronautics and Space Administration – Task Load Index*). Hasil riset menunjukkan rerata *Weighted Workload* (WWL) mitra sebesar 71,33 dengan kategori beban kerja "tinggi", di mana dimensi *Effort* dan *Temporal Demand* menjadi kontributor dominan. Studi komplementer Aditya.R & Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat temuan tersebut dengan mengintegrasikan NASA-TLX dan *Work Sampling* pada operator gudang, membuktikan bahwa metode ini bersifat portabel lintas fungsi logistik — dari gudang sampai kurir *last-mile*. Urgensi ekonomis dari riset ini sangat jelas: degradasi beban kerja mental yang tidak dikelola berisiko meningkatkan tingkat kelelahan (*burnout*), *turnover* mitra, kecelakaan kerja, hingga *Service Level Agreement* (SLA) breach yang merugikan seluruh ekosistem *e-commerce*. Oleh karena itu, kerangka kuantitatif NASA-TLX bukan sekadar alat ukur psikologis, melainkan instrumen *engineering* untuk *workforce planning*, *shift scheduling*, dan *capacity planning* pada operasional logistik modern.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Sandra G. Hart dan Lowell E. Staveland (1988) di NASA Ames Research Center untuk mengukur *subjective workload* operator dalam sistem manusia-mesin kompleks. Instrumen ini terdiri atas enam subskala yang merepresentasikan domain beban kerja yang berbeda namun saling berinteraksi:

1. **Mental Demand (MD)** — aktivitas kognitif seperti berpikir, memutuskan, mengamati.
2. **Physical Demand (PD)** — aktivitas fisik seperti mengangkat, mendorong, berjalan.
3. **Temporal Demand (TD)** — tekanan waktu akibat *pace* kerja.
4. **Performance (P)** — persepsi pencapaian tujuan tugas (skor terbalik: rendah = sukses).
5. **Effort (E)** — tingkat usaha yang dikeluarkan untuk完成任务.
6. **Frustration (F)** — tingkat irritasi, stres, atau ketidaknyamanan.

Prosedur NASA-TLX terdiri atas dua tahap:

**Tahap 1 — Pemberian Skor Mentah (*Raw TLX/RTLX*):**
Responden memberikan skor 0–100 untuk masing-masing subskala berdasarkan persepsi mereka selama periode kerja.

$$RTLX_i = \sum_{k=1}^{6} R_{i,k}$$

di mana $R_{i,k}$ adalah skor mentah subskala ke-$k$ untuk responden $i$.

**Tahap 2 — Penimbangan (*Weighted TLX/WTLX*):**
Responden melakukan perbandingan berpasangan (*pairwise comparison*) sebanyak $\binom{6}{2} = 15$ pasang untuk menentukan bobot relatif (0–5) setiap subskala. Total bobot untuk satu responden selalu dinormalisasi menjadi 1:

$$\sum_{k=1}^{6} w_{i,k} = 1$$

di mana $w_{i,k}$ adalah bobot subskala ke-$k$ untuk responden $i$, diperoleh dari jumlah *pairwise wins* dibagi 15.

**Skor Beban Kerja Tertimbang (*Weighted Workload/WWL*) akhir untuk responden $i$:**

$$WWL_i = \sum_{k=1}^{6} w_{i,k} \times R_{i,k}$$

Rata-rata kelompok:

$$\overline{WWL} = \frac{1}{n} \sum_{i=1}^{n} WWL_i$$

dengan $n$ adalah jumlah responden.

**Kategori Beban Kerja (berdasarkan rentang skor 0–100):**

| Kategori | Rentang WWL |
|----------|-------------|
| Rendah | $0 \leq WWL < 25$ |
| Sedang | $25 \leq WWL < 50$ |
| Tinggi | $50 \leq WWL < 75$ |
| Sangat Tinggi | $75 \leq WWL \leq 100$ |

Formulasi di atas mengikuti protokol yang digunakan Rafi & Putra (2024) dan Aditya.R & Putra (2024). Sebagai pelengkap, Aditya.R & Putra (2024) mengintegrasikan rasio produktivitas *work sampling*:

$$\text{Performance Index (PI)} = \frac{\sum t_{\text{working}}}{\sum t_{\text{working}} + \sum t_{\text{idle}}} \times 100\%$$

di mana $t_{\text{working}}$ dan $t_{\text{idle}}$ adalah total waktu (dalam detik) yang dicatat operator melakukan aktivitas produktif versus tidak produktif selama periode observasi acak. Integrasi $WWL$ dan $PI$ memungkinkan keputusan rekayasa yang *holistic*: pekerja dengan PI rendah dan WWL tinggi merupakan *red-flag* ergonomis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional Shopee Express mengikuti prosedur *eight-step engineering workflow* yang dirancang agar *repeatable* dan *auditable*:

**Diagram Alir Prosedur:**

```
┌─────────────────────────────────────────────────┐
│ STEP 1: Identifikasi Unit Analisis              │
│   → Tentukan populasi mitra kurir pada hub      │
│   → Hitung ukuran sampel (Cochran/Slovin)       │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 2: Desain Instrumen                        │
│   → Kuesioner profil demografis                 │
│   → Form NASA-TLX (skor 0–100 per subskala)     │
│   → Kartu Pairwise Comparison (15 pasang)        │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 3: Validasi Instrumen                      │
│   → Uji validitas isi (panel ahli ≥3)           │
│   → Uji reliabilitas (Cronbach's α ≥ 0,70)      │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 4: Briefing Responden                       │
│   → Informed consent                            │
│   → Penjelasan anchor tiap subskala             │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 5: Pengumpulan Data (Shift Sampling)       │
│   → Minimal 3 shift (pagi/siang/malam)          │
│   → Waktu pengukuran: 1–2 jam sebelum istirahat │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 6: Perhitungan Bobot Pairwise              │
│   → Hitung jumlah "menang" tiap subskala        │
│   → Normalisasi: w_k = win_k / 15               │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 7: Perhitungan WWL per Responden           │
│   → Hitung Σ(w_k × R_k)                         │
│   → Klasifikasikan ke 4 kategori                │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│ STEP 8: Analisis & Rekomendasi Engineering      │
│   → Uji beda (ANOVA/t-test) antar shift         │
│   → Identifikasi subskala dominan               │
│   → Usulan intervensi (redesign rute, shift, dsb)│
└─────────────────────────────────────────────────┘
```

**Standar Prosedur Operasional (SOP):**

- **Pengambilan Sampel:** Minimal 30 responden (mengikuti Rafi & Putra, 2024, n=30) untuk memenuhi asumsi Central Limit Theorem dengan margin of error ≤ 10%.
- **Timing Pengukuran:** Dilakukan setelah 3–4 jam kerja (setelah *warming-up*, sebelum *fatigue accumulation* akhir shift) guna menghindari bias.
- **Independensi Responden:** Setiap mitra mengisi sendiri tanpa intervensi supervisor untuk mencegah *social desirability bias*.
- **Pengulangan Periodik:** Pengukuran ulang setiap 6 bulan atau setelah perubahan SOP operasional untuk *monitoring* tren beban kerja.
- **Standar Acuan:** ISO 10075 (Ergonomic principles related to mental workload) dan SNI 8427:2017 (Ergonomi Perkantoran) sebagai kerangka referensi.

Integrasi dengan metode *Work Sampling* (Aditya.R & Putra, 2024) dilakukan pada Step 5, di mana pengamat independen mencatat aktivitas operator setiap 30 detik selama 2 jam guna meng-*cross-check* validitas persepsi beban kerja dengan perilaku aktual di lapangan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Sebuah *sortation hub* Shopee Express di Surabaya memiliki 5 mitra kurir yang dievaluasi pada shift siang (12.00–18.00 WIB) setelah *peak hour* pemrosesan paket. Kita akan menghitung $WWL$ agregat dan melakukan *root-cause analysis*.

**Langkah 1 — Data Skor Mentah NASA-TLX:**

| Responden | MD | PD | TD | P | E | F |
|-----------|----|----|----|----|----|----|
| R1 | 75 | 70 | 85 | 40 | 80 | 60 |
| R2 | 70 | 65 | 80 | 45 | 75 | 55 |
| R3 | 80 | 75 | 90 | 35 | 85 | 65 |
| R4 | 65 | 60 | 75 | 50 | 70 | 50 |
| R5 | 72 | 68 | 82 | 42 | 78 | 58 |

**Langkah 2 — Perhitungan *Pairwise Comparison* Agregat (misal untuk R1):**

Dari 15 pasangan, R1 memilih "menang" untuk subskala sebagai berikut: MD=3, PD=2, TD=4, P=1, E=4, F=1 (total=15 ✓).

Bobot ternormalisasi R1:
- $w_{MD} = 3/15 = 0{,}200$
- $w_{PD} = 2/15 = 0{,}133$
- $w_{TD} = 4/15 = 0{,}267$
- $w_{P}  = 1/15 = 0{,}067$
- $w_{E}  = 4/15 = 0{,}267$
- $w_{F}  = 1/15 = 0{,}067$

**Langkah 3 — Perhitungan $WWL$ untuk R1:**

$$WWL_{R1} = (0{,}200 \times 75) + (0{,}133 \times 70) + (0{,}267 \times 85) + (0{,}067 \times 40) + (0{,}267 \times 80) + (0{,}067 \times 60)$$

$$WWL_{R1} = 15{,}000 + 9{,}310 + 22{,}695 + 2{,}680 + 21{,}360 + 4{,}020 = 75{,}065$$

Karena $75 \leq 75{,}065 \leq 100$, R1 masuk kategori **"Sangat Tinggi"**.

**Langkah 4 — Perhitungan Rata-rata Kelompok (lima responden):**

Dengan melakukan prosedur identik untuk R2–R5 (menggunakan bobot spesifik tiap responden), diperoleh: