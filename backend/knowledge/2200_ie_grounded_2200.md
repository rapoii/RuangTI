# 2200 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (UPS - Unit Publikasi Sains)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Perkembangan ekonomi digital Indonesia yang diproyeksikan mencapai valuasi lebih dari USD 130 miliar pada tahun 2025 (Bank Indonesia, 2024) telah mendorong ekspansi masif pada sektor *last-mile delivery*, di mana Shopee Express menjadi salah satu tulang punggung operasional PT Shopee International Indonesia. Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa *partner employees*—yaitu kurir dan *warehouse operator* yang bekerja di bawah skema kemitraan—menjadi titik kritis (*critical node*) dalam rantai pasok *e-commerce*, karena mereka menghadapi *peak load* musiman seperti Harbolnas (Hari Belanja Nasional), Ramadan, dan 11.11 yang menyebabkan *order volume* meningkat hingga 300–500% dibanding hari normal. Fenomena ini menciptakan kondisi di mana kapasitas kognitif manusia (*human cognitive capacity*) sering kali terlampaui, sehingga menurunkan akurasi sortir, memperpanjang *lead time* pengiriman, dan meningkatkan tingkat *failed delivery rate* yang secara langsung merugikan *Service Level Agreement* (SLA) mitra dagang.

Studi Rafi dan Putra (2024) menegaskan bahwa pengukuran beban kerja mental (mental workload) menjadi prasyarat fundamental bagi perancangan ulang sistem kerja yang human-centered, khususnya karena beban kerja fisik telah relatif tereduksi melalui otomasi sortir, sementara beban kognitif—seperti *multitasking*, monitoring dashboard, pemindaian barcode dalam waktu terbatas, dan navigasi rute dinamis—justru meningkat tajam. Pendekatan NASA-TLX (Task Load Index) yang diadopsi oleh Rafi dan Putra (2024) terbukti menjadi instrumen psiko-metrik yang valid dan reliabel untuk mengkuantifikasi fenomena subjektif ini, sekaligus menerjemahkannya menjadi parameter rekayasa yang actionable. Dalam konteks yang saling melengkapi, Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) membuktikan bahwa integrasi *work sampling* dengan NASA-TLX pada operator gudang mampu mengungkap inefisiensi alokasi waktu kerja yang berdampak langsung pada *throughput* dan tingkat stres operator. Sinergi kedua riset ini memberikan kerangka analitis komprehensif yang akan diuraikan secara sistematis pada modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Konstruksi Instrumen NASA-TLX

NASA-TLX (Hart & Staveland, 1988) merupakan instrumen multidimensi yang mengukur beban kerja melalui enam sub-skala, yaitu *Mental Demand* (MD), *Physical Demand* (PD), *Temporal Demand* (TD), *Performance* (PE), *Effort* (EF), dan *Frustration* (FR). Setiap sub-skala dinilai pada rentang *Likert-type* 0–100, kemudian dilakukan pembobotan melalui prosedur *card-sort* pairwise comparison yang menghasilkan bobot total $w_i$ dengan $\sum_{i=1}^{6} w_i = 15$ (karena terdapat $C(6,2) = 15$ pasangan pembanding). Skor total NASA-TLX ($TLX_{total}$) didefinisikan oleh Rafi dan Putra (2024) sebagai:

$$TLX_{total} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $w_i$ adalah bobot hasil *card-sort* untuk sub-skala ke-$i$, dan $r_i$ adalah *raw rating* yang dilaporkan operator. Skor $TLX_{total}$ diklasifikasikan ke dalam tiga zona beban kerja menurut Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)):

$$
Zona = 
\begin{cases}
\text{Rendah}, & 0 \leq TLX_{total} < 33 \\
\text{Sedang}, & 33 \leq TLX_{total} < 66 \\
\text{Tinggi}, & 66 \leq TLX_{total} \leq 100
\end{cases}
$$

### 2.2. Raw TLX (Unweighted TLX)

Untuk analisis cepat, *Raw TLX* (RTLX) digunakan sebagai rata-rata aritmatik sederhana:

$$RTLX = \frac{1}{6} \sum_{i=1}^{6} r_i$$

### 2.3. Work Sampling dan Validasi Statistik

Berdasarkan Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), metode *work sampling* menggunakan observasi sesaat (*instantaneous observation*) pada interval acak. Jumlah pengamatan minimum $N$ untuk menjamin tingkat keyakinan $(1-\alpha)$ dan akurasi $S$ dihitung dengan persamaan distribusi normal:

$$N = \frac{Z_{\alpha/2}^2 \cdot p \cdot (1-p)}{S^2}$$

di mana $Z_{\alpha/2}$ adalah nilai kritis distribusi normal standar (misalnya $Z_{0.025} = 1.96$ untuk tingkat keyakinan 95%), $p$ adalah proporsi aktivitas yang diestimasi, dan $S$ adalah margin of error. Aktivitas operator diklasifikasikan ke dalam kategori produktif ($P$), tidak produktif ($UP$), dan kategori beban mental tambahan seperti *idle waiting* dan *multitasking scanning*.

Proporsi aktivitas efektif ($p$) dihitung sebagai:

$$p = \frac{\sum_{i=1}^{k} n_i}{N}$$

di mana $n_i$ adalah jumlah observasi pada kategori $i$, dan $k$ adalah jumlah kategori aktivitas. Batas kepercayaan 95% untuk proporsi diberikan oleh:

$$CI_{95\%} = p \pm 1.96 \cdot \sqrt{\frac{p(1-p)}{N}}$$

### 2.4. Korelasi Beban Mental dan Produktivitas

Model korelasi Pearson yang menghubungkan skor $TLX_{total}$ dengan *throughput* ($T$, dalam paket/jam) digunakan untuk mengevaluasi *trade-off* beban kerja dan kinerja:

$$r_{TLX, T} = \frac{\sum_{j=1}^{m}(TLX_j - \overline{TLX})(T_j - \overline{T})}{\sqrt{\sum_{j=1}^{m}(TLX_j - \overline{TLX})^2 \cdot \sum_{j=1}^{m}(T_j - \overline{T})^2}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur rekayasa yang diadaptasi dari Rafi dan Putra (2024) dan Aditya.R dan Putra (2024) dapat distandardisasikan melalui diagram alir sebagai berikut:

**Fase 1 — Identifikasi Sistem dan Unit Analisis**
1. Tetapkan populasi riset (kurir sortir, *picker*, *packer*, *delivery driver*).
2. Tentukan *time window* observasi mencakup hari normal dan *peak season*.
3. Lakukan *job analysis* berdasarkan dokumen SOP Shopee Express.

**Fase 2 — Penentuan Ukuran Sampel**
Hitung jumlah responden NASA-TLX menggunakan rumus *Slovin*:

$$n = \frac{N_p}{1 + N_p \cdot e^2}$$

dengan $N_p$ = jumlah populasi partner employees dan $e$ = margin of error (umumnya 5% atau 10%). Untuk *work sampling*, hitung $N$ menggunakan rumus pada Bagian 2.3.

**Fase 3 — Pelaksanaan Pengumpulan Data**
1. Distribusikan kuesioner NASA-TLX kepada responden terpilih (paper Rafi dan Putra, 2024, merekomendasikan ≥30 responden untuk validitas statistik).
2. Lakukan *card-sort* pairwise comparison untuk pembobotan $w_i$.
3. Lakukan observasi *work sampling* pada interval acak (Aditya.R & Putra, 2024 merekomendasikan interval 1–2 menit selama 5–10 hari kerja untuk menghilangkan bias siklus).

**Fase 4 — Analisis Data**
1. Hitung $TLX_{total}$ menggunakan rumus Bagian 2.1.
2. Hitung proporsi aktivitas $p_i$ dan Confidence Interval-nya.
3. Lakukan uji validitas-reliabilitas kuesioner menggunakan Cronbach's Alpha ($\alpha \geq 0.70$).
4. Uji hipotesis perbedaan beban kerja antar shift menggunakan *one-way ANOVA* atau *Mann-Whitney U test* (untuk data non-parametrik).

**Fase 5 — Perancangan Usulan Perbaikan**
Berdasarkan hasil, klasifikasikan pekerjaan ke dalam zona beban (Rendah/Sedang/Tinggi), kemudian rancang:
- *Job enlargement* atau *job enrichment* untuk zona Rendah.
- Redistribusi tugas dan *micro-breaks* (5 menit per 90 menit) untuk zona Sedang.
- *Ergonomic redesign workstation*, penambahan SDM, atau otomasi parsial untuk zona Tinggi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Data Hipotetis: Sortir Hub Shopee Express

Misalkan sebuah *Sortation Hub* di Jakarta Timur mempekerjakan 50 operator sortir pada shift pagi (08.00–16.00). Populasi $N_p = 50$, margin of error $e = 0.10$.

**Langkah 1: Hitung ukuran sampel NASA-TLX**

$$n = \frac{50}{1 + 50 \cdot (0.10)^2} = \frac{50}{1 + 0.5} = \frac{50}{1.5} = 33.33 \approx 34 \text{ responden}$$

**Langkah 2: Data Mentah NASA-TLX** (untuk satu operator responden)

| Sub-skala ($i$) | Raw Rating ($r_i$) | Bobot ($w_i$) |
|---|---|---|
| Mental Demand | 85 | 4 |
| Physical Demand | 60 | 1 |
| Temporal Demand | 80 | 5 |
| Performance | 30 | 1 |
| Effort | 75 | 3 |
| Frustration | 70 | 1 |
| **Total** | — | **15** |

**Langkah 3: Hitung $TLX_{total}$**

$$TLX_{total} = \frac{(4)(85) + (1)(60) + (5)(80) + (1)(30) + (3)(75) + (1)(70)}{15}$$

$$= \frac{340 + 60 + 400 + 30 + 225 + 70}{15} = \frac{1125}{15} = 75.0$$

Berdasarkan klasifikasi zona pada Bagian 2.1, $TLX_{total} = 75.0$ masuk ke **Zona Tinggi**, mengindikasikan operator mengalami beban kerja berlebih yang memerlukan intervensi ergonomi segera.

**Langkah 4: Hitung Raw TLX untuk perbandingan**

$$RTLX = \frac{85 + 60 + 80 + 30 + 75 + 70}{6} = \frac{400}{6} = 66.67$$

Tampak bahwa pembobotan (*weighted*) memberikan gambaran lebih sensitif terhadap dimensi dengan bobot tinggi (Temporal Demand), sehingga $TLX_{total}$ lebih representatif dibanding RTLX.

**Langkah 5: Work Sampling — Penentuan Jumlah Observasi**

Misal ingin mengestimasi proporsi waktu *idle-waiting* dengan $p = 0.20$ (estimasi awal), margin of error $S = 0.05$, dan confidence level 95%:

$$N = \frac{(1.96)^2 \cdot (0.20)(0.80)}{(0.05)^2} = \frac{3.8416 \cdot 0.16}{0.0025} = \frac{0.6147}{0.0025} = 245.86 \approx 246 \text{ observasi}$$

**Langkah 6: Confidence Interval Aktivitas Produktiv**

Dari 246 observasi, misalkan 172 observasi menunjukkan aktivitas produktif:

$$p = \frac{172}{246} = 0.6992$$

$$CI_{95\%} = 0.6992 \pm 1.96 \cdot \sqrt{\frac{0.6992 \cdot 0.3008}{246}} = 0.6992 \pm 0.0581$$

Maka $CI_{95\%} = [0.6411,\ 0.7573]$, yang berarti dengan keyakinan 95%, proporsi waktu produktif aktual operator berada pada rentang tersebut.

**Langkah 7: Interpretasi Manajerial**

Temuan ini selaras dengan Rafi dan Putra (2024) yang menemukan korelasi positif antara dimensi *Temporal Demand* yang tinggi dengan zona beban kerja *Tinggi* pada *partner employees*. Implikasi manajerialnya:
1. Diperlukan penambahan satu operator tambahan per shift untuk menurunkan $TLX_{total}$ ke Zona Sedang ($<66$).
2. Implementasikan *micro-break* terjadwal 5 menit setiap 90 menit.
3. Redesain layout conveyor untuk mengurangi *travel time* operator.
4. Integrasikan *pick-to-light system* untuk mereduksi *Mental Demand* dan *Temporal Demand*.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Keterbatasan Metodologis

Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org