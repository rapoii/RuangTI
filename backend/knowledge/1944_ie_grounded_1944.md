# 1944 — Analisis Beban Kerja Mental Operator Logistik E-Commerce: Aplikasi NASA-TLX dan Work Sampling pada Rantai Pasok Last-Mile Indonesia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami eksponensialisasi volume transaksi pascapandemi COVID-19, dengan nilai ekonomi digital nasional menembus lebih dari USD 82 miliar pada 2023 (Bain & Company, *E-Conomy SEA Report*, 2023). Dalam ekosistem ini, Shopee Express — layanan logistik internal milik PT Shopee International Indonesia — beroperasi sebagai *third-party logistics aggregator* (3PLA) yang bermitra dengan ribuan *last-mile partner* perseorangan, UMKM transportasi, dan *courier freelance*. Karakteristik operasional mereka sangat unik: model *gig-economy* dengan insentif berbasis paket, fluktuasi musiman ekstrem (lonjakan 3–5 kali lipat saat Harbolnas 11.11, 12.12, dan Ramadan), serta paparan langsung terhadap kompleksitas alamat konsumen Indonesia yang bersifat heterogen (Rafi & Putra, 2024, DOI: 10.21070/ups.9385).

Urgensi teknis dari riset ini lahir dari fenomena *cognitive overload* kronis pada tingkat operator. Mitra Shopee Express tidak sekadar mengangkut paket; mereka harus melakukan *sorting*, *scanning*, validasi kode *one-time password* (OTP), negosiasi alamat, navigasi rute, hingga penyelesaian klaim dalam satu shift kerja. Beban kognitif ini tidak dapat diukur dengan pendekatan produktivitas fisik konvensional (*output per hour*), melainkan memerlukan instrumen psikometrik terstandar. Rafi dan Putra (2024) memilih NASA-TLX karena kemampuannya memproyeksikan *subjective workload* ke dalam skor kuantitatif yang dapat dipetakan terhadap threshold kelelahan, sementara Aditya dan Putra (2024, DOI: 10.21070/ups.11795) melengkapi kerangka tersebut dengan Work Sampling untuk memvalidasi korelasi antara proporsi waktu kerja dan tingkat beban mental operator gudang.

Dari perspektif *Industrial Engineering*, implikasi ekonomis dari *mental workload* yang tidak terkelola adalah *attrition rate* mitra yang tinggi (rata-rata 40–60% per tahun pada armada *last-mile* Indonesia menurut Asosiasi Logistik Indonesia), biaya *onboarding* berulang, serta degradasi *service level agreement* (SLA) pengiriman *next-day*. Dengan latar belakang ini, paper Rafi & Putra (2024) menjadi artefak ilmiah yang memvalidasi kebutuhan akan metodologi *human factors engineering* dalam desain sistem kerja logistik modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-Task Load Index (NASA-TLX)

NASA-TLX dikembangkan oleh Sandra G. Hart dan Lowell E. Staveland (1988) sebagai instrumen multidimensi untuk mengukur *workload* melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $M$ | Mental Demand | Aktivitas berpikir, memutuskan, mengamati |
| $P$ | Physical Demand | Aktivitas fisik, mengangkut, memindai |
| $T$ | Temporal Demand | Tekanan waktu, kecepatan task |
| $E$ | Effort | Tingkat usaha fisik & mental yang dikeluarkan |
| $F$ | Frustration | Tingkat irritasi, stress, demotivasi |
| $Pf$ | Performance | Pencapaian target (skala inversi) |

Setiap dimensi dinilai responden dalam *unipolar Likert scale* 0–100 dengan *tick mark* interval 5. Skor akhir NASA-TLX (Weighted Raw TLX / *Overall Workload*) dihitung melalui formula:

$$\text{WTLX} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $r_i$ adalah skor mentah dimensi ke-$i$ ($r_i \in [0,100]$) dan $w_i$ adalah bobot dimensi yang diperoleh dari *card-sort pairwise comparison*. Terdapat 15 pasangan komparasi ($\binom{6}{2} = 15$), sehingga total bobot kumulatif selalu $\sum w_i = 15$. Dengan demikian, WTLX berada pada rentang teoretis $[0, 100]$, dengan klasifikasi:

- $0 \le \text{WTLX} < 25$: Beban rendah
- $25 \le \text{WTLX} < 50$: Beban sedang–optimal
- $50 \le \text{WTLX} < 75$: Beban tinggi–kritis
- $75 \le \text{WTLX} \le 100$: Beban sangat tinggi–overload

### 2.2 Work Sampling

Untuk menentukan proporsi waktu kerja, Aditya & Putra (2024, DOI: 10.21070/ups.11795) menggunakan Work Sampling (metode statistik observasi sesaat acak). Jumlah observasi minimum ditentukan oleh rumus:

$$N = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{E^{2}}$$

di mana $Z_{\alpha/2}$ adalah nilai kritis distribusi normal (umumnya $Z = 1{,}96$ untuk tingkat kepercayaan 95%), $p$ adalah proporsi aktivitas yang diestimasi (default $p = 0{,}5$ untuk konservativitas), dan $E$ adalah margin of error yang dapat diterima. Interval acak observasi ditentukan dengan:

$$\Delta t_{k} = - \lambda \cdot \ln(R_k)$$

dengan $\lambda$ sebagai laju observasi rata-rata (pengamatan/jam) dan $R_k \sim U(0,1)$ bilangan acak uniform, menjamin sifat *Poisson process* dari kunjungan observasi (Aditya & Putra, 2024).

### 2.3 Korelasi Workload–Waktu Kerja

Hubungan antara proporsi waktu kerja efektif dan skor NASA-TLX dimodelkan secara empiris melalui korelasi Pearson:

$$r_{xy} = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{\sqrt{[n\sum x_i^{2} - (\sum x_i)^{2}][n\sum y_i^{2} - (\sum y_i)^{2}]}}$$

Hipotesis yang diuji Rafi & Putra (2024): $H_0: \rho = 0$ vs $H_1: \rho \neq 0$, dengan signifikansi $p < 0{,}05$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologis paper Rafi & Putra (2024, DOI: 10.21070/ups.9385) mengikuti protokol terstruktur sebagai berikut:

**Tahap 1 — Identifikasi Sistem & Stakeholder.** Pemetaan proses bisnis Shopee Express: *pickup* → *origin sortation* → *linehaul* → *destination hub* → *last-mile delivery* → *return handling*. Populasi riset adalah mitra *delivery* aktif pada satu *hub* metropolitan dengan pengalaman kerja $\geq 3$ bulan.

**Tahap 2 — Desain Sampling.** Penentuan jumlah sampel menggunakan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^{2}}$$

dengan $N$ = total populasi mitra aktif, $e$ = margin error (umumnya 5%). Rafi & Putra (2024) menerapkan *purposive sampling* untuk memastikan homogenitas pengalaman.

**Tahap 3 — Instrumentasi.** Kuesioner NASA-TLX versi digital (Google Form / aplikasi internal) yang mencakup (a) instruksi, (b) skala penilaian 0–100, dan (c) *card-sort comparison* untuk pembobotan. Instrumen telah teruji validitas konstruk oleh Hart (2006) dengan Cronbach's $\alpha > 0{,}72$ pada seluruh dimensi.

**Tahap 4 — Pengumpulan Data.** Pengisian kuesioner di akhir shift (post-shift) untuk menghindari *state bias*. Tambahan Work Sampling (Aditya & Putra, 2024, DOI: 10.21070/ups.11795): observasi oleh *job analyst* bersertifikat menggunakan formulir klasifikasi aktivitas (*loading*, *scanning*, *delivering*, *idle*, *administration*, *delay*).

**Tahap 5 — Analisis Data.** Tabulasi skor per dimensi, pembobotan, agregasi WTLX, uji normalitas (Shapiro-Wilk), uji beda (Mann-Whitney / Independent t-test), dan korelasi dengan variabel produktivitas paket/jam.

**Tahap 6 — Rekomendasi.** Perumusan *workload mitigation plan*: redistribusi shift, otomasi *sorting*, redesign *user interface* aplikasi mobile mitra, dan penambahan *micro-break* 10 menit tiap 90 menit sesuai rekomendasi NIOSH (*fatigue prevention* standard).

Diagram alir prosedur:

```
[Populasi Mitra] → Slovin → [Sampel n]
        ↓
[Kuesioner NASA-TLX] → Skor r_i & Bobot w_i → WTLX
        ↓                                          ↓
[Work Sampling] → Proporsi Aktivitas → Korelasi Pearson
        ↓
[Uji Statistik] → [Rekomendasi Engineering Control]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus Hipotetis: Hub Sortasi Shopee Express Jakarta Selatan — 30 Mitra Aktif.**

### 4.1 Penentuan Sampel (Rumus Slovin)

Misal $N = 120$ mitra aktif, $e = 0{,}05$:

$$n = \frac{120}{1 + 120 \cdot (0{,}05)^{2}} = \frac{120}{1 + 0{,}30} = \frac{120}{1{,}30} \approx 92{,}3$$

Dibulatkan ke atas $n = 93$ responden. Penyesuaian oleh Rafi & Putra (2024) mempertimbangkan *response rate* historis 70%, sehingga didistribusikan 130 kuesioner untuk memperoleh $\geq 90$ respons valid.

### 4.2 Perhitungan Skor NASA-TLX per Responden

Ambil satu responden representatif (ID: R-027, *courier senior*, 8 jam shift siang Harbolnas):

| Dimensi | Skor Mentah ($r_i$) | Bobot ($w_i$) | $w_i \cdot r_i$ |
|---|---|---|---|
| Mental Demand ($M$) | 75 | 4 | 300 |
| Physical Demand ($P$) | 60 | 3 | 180 |
| Temporal Demand ($T$) | 85 | 5 | 425 |
| Performance ($Pf$) | 70 | 1 | 70 |
| Effort ($E$) | 80 | 1 | 80 |
| Frustration ($F$) | 55 | 1 | 55 |
| **Total** | — | **15** | **1110** |

$$\text{WTLX}_{R-027} = \frac{1110}{15} = 74{,}0$$

Interpretasi: Responden R-027 berada pada zona **beban tinggi–kritis** (threshold 75). Operator ini memerlukan intervensi segera berupa rotasi tugas, *micro-break*, atau penurunan volume target harian.

### 4.3 Agregasi & Analisis Korelasi

Misal agregasi 30 responden menghasilkan rerata:

| Statistik | Mental | Fisik | Temporal | Performa | Effort | Frustasi | **WTLX** |
|---|---|---|---|---|---|---|---|
| $\bar{r}$ | 68,2 | 57,4 | 72,8 | 65,1 | 70,3 | 49,7 | — |
| $\bar{w}$ | 3,7 | 2,8 | 4,1 | 1,2 | 1,8 | 1,4 | 15 |

$$\overline{\text{WTLX}} = \frac{(68{,}2)(3{,}7)+(57{,}4)(2{,}8)+(72{,}8)(4{,}1)+(65{,}1)(1{,}2)+(70{,}3)(1{,}8)+(49{,}7)(1{,}4)}{15} \approx 65{,}8$$

Nilai ini mengindikasikan rata-rata **beban tinggi** secara organisasional — peringatan bagi manajemen untuk melakukan *redesign* sistem.

### 4.4 Work Sampling — Penentuan Jumlah Observasi

Dengan $Z = 1{,}96$, $p = 0{,}5$, $E = 0{,}05$:

$$