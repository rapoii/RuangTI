# 2920 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Asia Tenggara mengalami ekspansi eksponensial pascapandemi COVID-19, dengan Indonesia menjadi pasar terbesar di kawasan ini. Shopee sebagai salah satu *marketplace* dominan mengandalkan jaringan **Shopee Express (SE)** sebagai *last-mile delivery partner* untuk menjamin kepuasan pelanggan melalui pengiriman *same-day* dan *next-day*. Namun, struktur kemitraan (*partnership*) Shopee Express—di mana kurir berstatus pekerja lepas dengan komisi berbasis paket—menimbulkan tantangan ergonomis dan psikososial yang signifikan, terutama terkait **beban kerja mental (mental workload)** yang tidak terukur secara konvensional (Rafi & Putra, 2024, DOI: 10.21070/ups.9385).

Rafi dan Putra (2024) menyoroti bahwa dalam operasional *hub-to-hub* Shopee Express, karyawan *partner* menghadapi tiga sumber beban kognitif utama: (1) **tekanan temporal** dari *Service Level Agreement* (SLA) pengiriman yang ketat; (2) **kompleksitas routing** di tengah kemacetan metropolitan; dan (3) **interaksi pelanggan** yang memerlukan responsivitas tinggi saat gagal antar (*failed delivery*). Studi tersebut mengadopsi *NASA Task Load Index* (NASA-TLX) yang dikembangkan oleh Hart dan Staveland (1988) sebagai instrumen multi-dimensi untuk mengkuantifikasi beban kerja subjektif. Hasil awal menunjukkan bahwa dimensi *Mental Demand* dan *Temporal Demand* menjadi kontributor dominan skor NASA-TLX, mengindikasikan perlunya redesain SOP dan redistribusi shift.

Di sisi hulu rantai pasok, Aditya dan Putra (2024, DOI: 10.21070/ups.11795) melengkapi perspektif tersebut dengan menganalisis **operator gudang (*warehouse operators*)** menggunakan kombinasi **Work Sampling** dan NASA-TLX. Mereka menemukan bahwa proporsi waktu *idle*, *productive*, dan *non-productive* activity berkorelasi kuat dengan persepsi beban mental operator, terutama pada aktivitas *picking* dengan target komposisi 60–80 item per jam. Sinergi dua paper ini membentuk kerangka analisis holistik yang menjembatani **ergonomi kognitif** dan **studi waktu** dalam rantai pasok e-commerce.

Urgensi riset ini tidak terlepas dari fakta bahwa **burnout rate** di industri logistik Indonesia mencapai 23–28% menurut data Asosiasi Logistik Indonesia (ALI, 2023), yang berimplikasi langsung pada *turnover*, biaya rekrutmen, dan *delivery failure rate*. Oleh karena itu, modul ini menyajikan formulasi kuantitatif dan SOP implementasi NASA-TLX yang dapat direplikasi di seluruh sub-sektor manufaktur dan distribusi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Beban Kerja Mental NASA-TLX

NASA-TLX mengukur beban kerja melalui **enam subskala** yang masing-masing dinilai dengan skala bipolar 0–100 (dibagi menjadi 20 interval *tick mark* sebesar 5 poin):

| Simbol | Dimensi | Deskripsi |
|--------|---------|-----------|
| $r_{MD}$ | Mental Demand | Usaha kognitif dan perseptual yang dibutuhkan |
| $r_{PD}$ | Physical Demand | Aktivitas fisik yang diperlukan |
| $r_{TD}$ | Temporal Demand | Tingkat tekanan waktu |
| $r_{OP}$ | Performance | Keberhasilan完成任务 dirasakan pekerja |
| $r_{EF}$ | Effort | Seberapa keras pekerja bekerja untuk mencapai target |
| $r_{FR}$ | Frustration | Tingkat frustasi, stres, dan ketidaknyamanan |

Skor total tertimbang (*Weighted NASA-TLX*) dihitung melalui prosedur **pairwise comparison card sort** yang menghasilkan bobot $w_i \in \{0,1,...,5\}$ untuk masing-masing dimensi, dengan $\sum_{i=1}^{6} w_i = 15$. Formula global:

$$WTLX = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i$$

di mana $r_i$ adalah *raw rating* dan $w_i$ adalah bobot hasil perbandingan berpasangan. **Rentang interpretasi** skor $WTLX$ (Rafi & Putra, 2024):

- $0 \leq WTLX < 20$: Beban sangat rendah (*underload*)
- $20 \leq WTLX < 40$: Beban rendah
- $40 \leq WTLX < 60$: Beban moderat
- $60 \leq WTLX < 80$: Beban tinggi
- $80 \leq WTLX \leq 100$: Beban sangat tinggi (*overload*)

### 2.2. Prosedur Pairwise Comparison

Matriks perbandingan berpasangan $C$ berukuran $6 \times 6$ dibangun dengan aturan:

$$C_{ij} = \begin{cases} 1 & \text{jika dimensi } i \text{ lebih dominan dari } j \\ 0 & \text{jika } j \text{ lebih dominan} \end{cases}$$

Bobot $w_i$ merupakan jumlah baris ke-$i$:

$$w_i = \sum_{j=1}^{6} C_{ij}$$

### 2.3. Work Sampling — Ukuran Sampel Minimum

Untuk menentukan jumlah observasi minimum Work Sampling dengan tingkat kepercayaan $Z$, proporsiaktivitas $p$, dan margin of error $e$:

$$N_{min} = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{e^2}$$

Aditya dan Putra (2024) mengaplikasikan formula ini dengan parameter $Z_{95\%} = 1{,}96$, $p = 0{,}5$ (kondisi *worst-case* varians maksimum), dan $e = 0{,}05$, menghasilkan $N_{min} = 384$ observasi per operator. Jumlah observasi tambahan untuk koreksi non-response dan *attrition* dinaikkan 10–15%:

$$N_{adjusted} = N_{min} \cdot (1 + \delta), \quad \delta = 0{,}10 - 0{,}15$$

### 2.4. Proporsi Aktivitas dan *Standard Error*

Proporsi aktivitas kategori $k$ dihitung sebagai:

$$\hat{p}_k = \frac{n_k}{N}, \quad \text{dengan } \sum_{k=1}^{K} \hat{p}_k = 1$$

dengan *standard error*:

$$SE(\hat{p}_k) = \sqrt{\frac{\hat{p}_k(1-\hat{p}_k)}{N}}$$

dan *confidence interval* $1-\alpha$:

$$CI_{1-\alpha} = \hat{p}_k \pm Z_{\alpha/2} \cdot SE(\hat{p}_k)$$

### 2.5. Korelasi Workload-Activity

Untuk menguji hubungan linear antara proporsi aktivitas produktif dan skor NASA-TLX, digunakan koefisien Pearson:

$$r_{xy} = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \sum_{i=1}^{n}(y_i - \bar{y})^2}}$$

di mana $x_i$ adalah proporsi aktivitas dan $y_i$ adalah skor WTLX operator ke-$i$.

---

## 3. Metodologi Rekayasa & SOP Implementasi NASA-TLX di Industri Logistik

### 3.1. Diagram Alir Implementasi

```
┌─────────────────────────────────────────────────┐
│  TAHAP 1: IDENTIFIKASI CAKUPAN & POPULASI       │
│  • Definisikan unit kerja (kurir SE, operator   │
│    gudang, dsb.)                                 │
│  • Tentukan strata: shift, hub, pengalaman      │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│  TAHAP 2: DESAIN INSTRUMEN                      │
│  • Adaptasi kuesioner NASA-TLX (versi Bahasa)   │
│  • Uji validitas konten (CVR > 0,62, Aiken)     │
│  • Uji reliabilitas (Cronbach α > 0,70)         │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│  TAHAP 3: WORK SAMPLING (jika dibutuhkan)       │
│  • Hitung N_min dengan rumus §2.3              │
│  • Random-route observation, interval acak      │
│  • Klasifikasi: Productive/Supportive/Idle      │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│  TAHAP 4: PENGUMPULAN NASA-TLX                  │
│  • Pre-task briefing (5-10 menit)               │
│  • Raw rating (0-100) pada 6 dimensi            │
│  • Pairwise comparison (15 kartu)               │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│  TAHAP 5: ANALISIS & INTERPRETASI               │
│  • Hitung WTLX per individu & agregat           │
│  • Uji beda (ANOVA/Kruskal-Wallis) antar shift  │
│  • Korelasi dengan variabel Work Sampling        │
└──────────────────┬──────────────────────────────┘
                   ▼
┌─────────────────────────────────────────────────┐
│  TAHAP 6: REKOMENDASI REDESAIN                  │
│  • Redistribusi shift & insentif                │
│  • Redesain SOP, ergonomi, dan tool digital     │
│  • Pelatihan dan rotasi kerja                   │
└─────────────────────────────────────────────────┘
```

### 3.2. SOP Pengukuran NASA-TLX

1. **Persiapan partisipan**: Inform consent, penjelasan tujuan riset.
2. **Pre-task briefing**: Definisikan ulang enam dimensi sesuai konteks (Rafi & Putra menggunakan analogi: *MD* = "Berapa banyak berpikir yang Anda lakukan?").
3. **Pengisian *raw rating***: Beri tanda centang pada garis 0–100.
4. **Pairwise comparison**: 15 kartu berisi pasangan dimensi; pilih yang lebih relevan.
5. **Verifikasi data**: Outlier detection menggunakan *interquartile range* (IQR); data dengan $r_i > Q_3 + 1{,}5 \cdot IQR$ dieksklusi.
6. **Penghitungan skor**: Gunakan rumus §2.1.

---

## 4. Studi Kasus Kuantitatif: Perhitungan Numerik Operator Gudang Shopee

### 4.1. Parameter Input

Sebuah hub Shopee Express di wilayah Jabodetabek memiliki **15 operator gudang** bagian *picking* dan *packing*. Tim engineering mengambil sampel Work Sampling dengan parameter: $Z_{95\%} = 1{,}96$, $p = 0{,}5$, $e = 0{,}05$.

**Langkah 1: Hitung $N_{min}$**

$$N_{min} = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = \frac{0{,}9604}{0{,}0025} = 384{,}16 \approx 385$$

Dengan koreksi 10%:

$$N_{adj} = 385 \times 1{,}10 = 424 \text{ observasi}$$

**Langkah 2: Hasil Work Sampling (agregat 15 operator)**

| Kategori | $n_k$ | $\hat{p}_k$ | $SE$ |
|----------|-------|-------------|------|
| Productive (picking/packing) | 280 | 0,660 | 0,0233 |
| Supportive (stacking, scanning) | 90 | 0,212 | 0,0205 |
| Idle (menunggu, istirahat) | 35 | 0,083 | 0,0140 |
| Rework (koreksi kesalahan)