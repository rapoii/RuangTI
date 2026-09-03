# 2504 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Studi Kasus Shopee Express dan Operasi Gudang

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Ergonomi Kognitif & Perancangan Sistem Kerja)
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital di Asia Tenggara telah mendorong ekspansi dramatis pada sektor *last-mile delivery* dan pergudangan e-commerce. Indonesia, sebagai pasar digital terbesar di kawasan, mencatatkan nilai transaksi *gross merchandise value* (GMV) yang terus meningkat, dengan Shopee sebagai salah satu platform dengan pangsa pasar dominan. Dalam ekosistem ini, Shopee Express (SPX) bertindak sebagai *fulfillment partner* yang menangani pengiriman dari seller ke konsumen, dengan beban operasional yang sangat bergantung pada kinerja operator—baik itu *pickup partner*, *sortation center crew*, maupun *last-mile courier*. Rafi & Putra (2024) dalam studi mereka menyoroti bahwa karyawan mitra Shopee Express menghadapi paparan stressor ganda berupa tekanan target harian (*Service Level Agreement*/SLA), kompleksitas routing alamat, volume paket yang tidak stasioner, serta interaksi langsung dengan pelanggan. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385).

Urgensi pengukuran beban kerja mental pada konteks ini bersifat strategis dari perspektif *Human Factors and Ergonomics* (HFE). Berbeda dengan beban kerja fisik yang relatif mudah diukur melalui denyut nadi atau kalori, beban kognitif–mental bersifat laten dan bermanifestasi melalui penurunan akurasi sortir, peningkatan *mis-sort rate*, kelelahan psikologis, *turnover* tinggi, serta potensi *human error* yang memicu kecelakaan kerja (misalnya tertabrak kendaraan di area loading dock). Studi Aditya & Putra (2024) pada operator gudang menunjukkan bahwa ketika beban kerja mental tidak dikelola, terjadi korelasi positif dengan tingkat frustrasi operator dan degradasi *throughput* sortir. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795).

Secara ekonomi, biaya *replacement* seorang kurir di Indonesia berada pada kisaran Rp 2–4 juta per orang, sementara biaya tidak langsung akibat *burnout* (absenteeism, medical claim, retraining) dapat mencapai 1,5–3 kali gaji bulanan. Oleh karena itu, diperlukan instrumen terstandar yang mampu mengkuantifikasi beban mental secara subjektif namun valid. Metode *NASA Task Load Index* (NASA-TLX) yang dikembangkan oleh Hart & Staveland (1988) dan diadopsi secara luas oleh NASA Ames Research Center menjadi *de facto standard* dalam pengukuran subjektif beban kerja kognitif. Kedua paper di atas memilih NASA-TLX karena sifatnya yang multidimensional, portabel, dan telah divalidasi lintas industri (aviasi, kesehatan, manufaktur, hingga logistik). Dalam konteks Shopee Express, NASA-TLX memungkinkan manajer operasional memetakan dimensi beban kerja mana yang paling dominan—apakah mental demand (pengolahan informasi alamat), physical demand (mengangkat paket 2–15 kg), temporal demand (deadline pengiriman *same-day*), performance (akurasi pengiriman), effort (usaha mempertahankan ritme kerja), atau frustration (interaksi dengan pelanggan tidak kooperatif)—sehingga intervensi perbaikan bersifat *evidence-based* dan tidak berdasarkan asumsi manajerial semata.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen multidimensi yang terdiri dari enam subskala beban kerja. Setiap subskala dievaluasi oleh responden menggunakan skala *Likert*-like bipolar yang dinormalisasi ke dalam rentang 0–100. Keenam dimensi tersebut didefinisikan secara operasional oleh Hart & Staveland (1988) sebagai berikut:

1. **Mental Demand (MD):** Jumlah aktivitas mental dan perseptual yang dibutuhkan (berpikir, memutuskan, mengingat).
2. **Physical Demand (PD):** Jumlah aktivitas fisik yang dibutuhkan (mendorong, mengangkat, berjalan).
3. **Temporal Demand (TD):** Tingkat tekanan waktu yang dirasakan terkait laju完成任务.
4. **Performance (P):** Tingkat keberhasilan subjectif dalam mencapai tujuan tugas (skor dibalik: 100 = sukses sempurna, 0 = kegagalan total).
5. **Effort (E):** Jumlah usaha mental dan fisik yang dikeluarkan untuk mencapai tingkat performance.
6. **Frustration (F):** Tingkat irritasi, stress, dan ketidaknyamanan yang dirasakan selama完成任务.

### 2.1 Prosedur Pembobotan (Pairwise Comparison)

Versi lengkap (*Full NASA-TLX*) menggunakan prosedur *card-sort pairwise comparison* untuk memperoleh bobot relatif dari keenam subskala. Terdapat $n = 6$ subskala, sehingga jumlah pasangan yang dibandingkan adalah:

$$\binom{n}{2} = \binom{6}{2} = \frac{6!}{2!(6-2)!} = 15 \text{ pasangan}$$

Responden memilih dari setiap pasangan subskala yang lebih berkontribusi terhadap beban kerja pada tugas spesifik. Bobot akhir setiap subskala $w_i$ dinormalisasi sehingga:

$$\sum_{i=1}^{6} w_i = 15$$

dengan domain $w_i \in \{0, 1, 2, 3\}$ (frekuensi subskala tersebut menang dalam 15 perbandingan).

### 2.2 Skor Komposit Beban Kerja Mental

*Weighted Overall Workload Score* (OW) dihitung sebagai kombinasi linear terboboti dari keenam skor mentah:

$$OW = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15} = \frac{w_{MD}\cdot r_{MD} + w_{PD}\cdot r_{PD} + w_{TD}\cdot r_{TD} + w_{P}\cdot r_{P} + w_{E}\cdot r_{E} + w_{F}\cdot r_{F}}{15}$$

di mana:
- $OW$ = *Overall Workload* (skor 0–100)
- $w_i$ = bobot subskala ke-$i$ (hasil pairwise)
- $r_i$ = skor mentah subskala ke-$i$ dari *Visual Analog Scale* (0–100)

Untuk efisiensi lapangan, Rafi & Putra (2024) menggunakan varian *Raw TLX* (RTLX) yang menghilangkan prosedur pembobotan dan merata-ratakan keenam skor:

$$RTLX = \frac{1}{6} \sum_{i=1}^{6} r_i = \frac{r_{MD} + r_{PD} + r_{TD} + r_{P} + r_{E} + r_{F}}{6}$$

### 2.3 Kategorisasi Beban Kerja

Berdasarkan *cut-off* yang digunakan oleh Rafi & Putra (2024) serta referensi ergonomik klasik, skor $OW$ dikategorikan sebagai:

$$\text{Kategori} = \begin{cases} \text{Rendah}, & 0 \le OW < 25 \\ \text{Sedang}, & 25 \le OW < 50 \\ \text{Tinggi}, & 50 \le OW < 75 \\ \text{Sangat Tinggi}, & 75 \le OW \le 100 \end{cases}$$

DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385).

### 2.4 Validitas dan Reliabilitas Instrumen

Koefisien Cronbach's Alpha untuk konsistensi internal NASA-TLX secara historis dilaporkan ≥ 0,72 untuk seluruh subskala:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{Y_i}}{\sigma^2_X}\right)$$

dengan $k = 6$ subskala, $\sigma^2_{Y_i}$ varians tiap item, dan $\sigma^2_X$ varians skor total.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX pada operator Shopee Express mengikuti SOP delapan tahap berikut, yang mengintegrasikan prosedur Rafi & Putra (2024) dan Aditya & Putra (2024):

**Tahap 1 – Penentuan Scope & Populasi.** Identifikasi岗位 kritis (sortation crew, delivery partner, warehouse picker). Tentukan *sample size* menggunakan rumus Slovin dengan *margin of error* $e = 5\%$:

$$n = \frac{N}{1 + N \cdot e^2} = \frac{N}{1 + 0{,}0025 \cdot N}$$

**Tahap 2 – Desain Instrumen.** Kuesioner NASA-TLX digital (Google Form / Qualtrics) dengan instruksi terstandar dan 6 slider 0–100.

**Tahap 3 – Briefing & Kalibrasi Responden.** Penjelasan makna setiap subskala menggunakan *anchor points* (misal: MD rendah = "tugas otomatis, hampir tanpa berpikir"; MD tinggi = "harus sangat konsentrasi, banyak keputusan").

**Tahap 4 – Pengumpulan Data.** Responden mengisi kuesioner dalam window 30 menit setelah menyelesaikan shift (untuk *exposure recall*).

**Tahap 5 – Perhitungan Bobot (Pairwise).** Jika menggunakan Full TLX, responden melakukan 15 perbandingan berpasangan.

**Tahap 6 – Perhitungan Skor Komposit.** Hitung $OW$ atau $RTLX$ menggunakan rumus pada Bagian 2.

**Tahap 7 – Analisis Statistik.** Uji beda (Mann-Whitney U / Kruskal-Wallis karena data ordinal) antar岗位, uji korelasi Spearman, dan *regression* untuk mengidentifikasi prediktor.

**Tahap 8 – Rekomendasi & Intervensi.** Peta intervensi berdasarkan dimensi dominan (misal: jika MD dominan → *decision-support system*; jika TD dominan → redistribusi shift).

```text
┌─────────────────────────────────────────────┐
│  [Briefing] → [Task Execution] → [TLX Form] │
│        ↓               ↓             ↓             │
│  [Pairwise] → [Score Computation] → [Stats]   │
│        ↓               ↓             ↓             │
│  [Heatmap Dimension] → [Recommendation]        │
└─────────────────────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Studi kasus ini mereplikasi skenario Rafi & Putra (2024) pada 1 orang *sortation crew* Shopee Express di Hub Jakarta Selatan selama shift pagi (08.00–16.00) dengan throughput rata-rata 450 paket/jam. Responden "R-01" mengisi NASA-TLX setelah shift. Hasil skor mentah dan bobot pairwise adalah sebagai berikut:

**Tabel 1. Skor Mentah Subskala NASA-TLX Responden R-01**

| Subskala $i$ | Notasi | Skor Mentah $r_i$ | Bobot $w_i$ |
|:---|:---:|:---:|:---:|
| Mental Demand | MD | 80 | 4 |
| Physical Demand | PD | 65 | 2 |
| Temporal Demand | TD | 85 | 5 |
| Performance | P | 30 | 1 |
| Effort | E | 75 | 3 |
| Frustration | F | 55 | 0 |
| **Total Bobot** | | | **15** |

### 4.2 Perhitungan Weighted TLX

Substitusi ke rumus *Overall Workload*:

$$OW_{R-01} = \frac{(4)(80) + (2)(65) + (5)(85) + (1)(30) + (3)(75) + (0)(55)}{15}$$

$$OW_{R-01} = \frac{320 + 130 + 425 + 30 + 225 + 0}{15} = \frac{1130}{15} \approx 75{,}33$$

**Interpretasi:** Skor $OW = 75{,}33$ jatuh pada kategori **Tinggi–Sangat Tinggi** (75 ≤ OW ≤ 100). DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385).

### 4.3 Kontribusi Relatif Setiap Dimensi

Untuk memetakan dimensi yang paling dominan, hitung kontribusi ternormalisasi:

$$\text{Kontribusi}_i = \frac{w_i \cdot r_i}{\sum_{j=1}^{6} w_j \cdot r_j} \times 100\%$$

| Dimensi | $w_i \cdot r_i$ | Kontribusi (%) |
|:---|:---:|:---:|
| MD | 320 | 28,32% |
| PD | 130 | 11,50% |
| **TD** | **425** | **37,61%** |
| P | 30 | 2,65% |
| E | 225 | 19,91% |
| F | 0 | 0,00% |

**Temuan:** Dimensi *Temporal Demand* mendominasi (37,61%), disusul *Mental Demand* (28,32%). Ini mengindikasikan tekanan waktu dan kompleksitas kognitif (membaca alamat, scanning barcode) adalah stressor utama, bukan kelelahan fisik atau frustrasi.

### 4.4 Perhitungan Raw TLX untuk Validasi Silang

$$RTLX_{R-01} = \frac{80 + 65 + 85 + 30 + 75 + 55}{6} = \frac{390}{6} = 65{,}00$$

Selisih $OW - RTLX = 75{,}33 - 65{,}00 = 10{,}33$ poin, menandakan bahwa prosedur pembobotan menangkap informasi tambahan tentang prioritas subjektif responden. DOI: [https://doi.org/10.210