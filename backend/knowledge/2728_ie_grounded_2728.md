# 2728 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Gudang Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami ekspansi eksponensial pasca-pandemi COVID-19, dengan nilai transaksi menembus lebih dari US$ 53 miliar pada 2023 (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)). Shopee Express, sebagai salah satu mitra *last-mile delivery* dominan di pasar Asia Tenggara, mengandalkan ribuan pekerja kurir (*partner employees*) yang beroperasi di bawah tekanan waktu, target harian, dan fluktuasi volume paket yang tidak menentu. Dalam konteks ini, *mental workload* atau beban kerja mental menjadi variabel ergonomis krusial yang menentukan keselamatan, kualitas layanan, dan retensi tenaga kerja.

Beban kerja mental didefinisikan sebagai total usaha kognitif dan perseptual yang dikeluarkan pekerja untuk menyelesaikan tugas dalam jangka waktu tertentu (Rafi & Putra, 2024). Pada operator Shopee Express, beban kerja ini dipicu oleh kompleksitas multi-tasking: navigasi aplikasi *mobile*, verifikasi barcode, perhitungan ongkos kirim *cash-on-delivery* (COD), komunikasi dengan pelanggan, dan pengambilan keputusan terkait alamat ambigu. Jika tidak diukur dan dikendalikan, beban kerja mental berlebih akan menghasilkan *human error*, kelelahan kronis, peningkatan *turnover*, dan akhirnya inefisiensi rantai pasok.

Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat urgensi ini dari sudut pandang operator gudang (*warehouse operator*), yang merupakan mata rantai hulu dari proses pengiriman. Mereka menunjukkan bahwa operator gudang yang menangani ribuan SKU per shift mengalami kombinasi beban fisik dan mental yang serupa, sehingga memerlukan pendekatan ergonomi kognitif yang terstandar. Kedua paper tersebut merekomendasikan integrasi metode **NASA-TLX** (*Task Load Index*) sebagai instrumen subjektif terstruktur dan **Work Sampling** sebagai instrumen objektif berbasis observasi, guna menghasilkan diagnosis beban kerja yang komprehensif, terukur, dan dapat ditindaklanjuti secara manajerial.

Dalam kerangka *Industrial Engineering*, fenomena ini masuk ke dalam domain **Ergonomi Kognitif** dan **Perancangan Sistem Kerja**, di mana tujuan akhirnya adalah menyeimbangkan tuntutan tugas (*task demands*) dengan kapasitas manusia (*human capabilities*) untuk mencapai produktivitas optimal tanpa mengorbankan *well-being* operator. Dokumen modul ini akan membahas formulasi matematis, prosedur operasional, studi kasus numerik, dan aplikasi lintas sektoral dari kedua metodologi tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-TLX (Task Load Index)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh *Human Performance Research Group* NASA Ames Research Center (Hart & Staveland, 1988) dan diadopsi secara luas dalam riset ergonomis modern. Metode ini mengukur beban kerja melalui enam dimensi subjektif:

1. **Mental Demand (MD)** – aktivitas berpikir, memutuskan, menghitung.
2. **Physical Demand (PD)** – aktivitas fisik (mendorong, mengangkat, berjalan).
3. **Temporal Demand (TD)** – tekanan waktu.
4. **Performance (PE)** – persepsi keberhasilan menyelesaikan tugas (skala terbalik).
5. **Effort (EF)** – tingkat usaha yang dikeluarkan.
6. **Frustration (FR)** – tingkat irritasi, stres, atau ketidaknyamanan.

#### 2.1.1. Raw TLX (Unweighted)

Setiap dimensi dinilai oleh responden menggunakan *Likert-type scale* kontinu dari **0** (sangat rendah) hingga **100** (sangat tinggi). Skor total rata-rata sederhana:

$$\text{Raw TLX} = \frac{1}{6}\sum_{i=1}^{6} r_i$$

di mana $r_i$ adalah rating dimensi ke-$i$.

#### 2.1.2. Weighted TLX

Untuk meningkatkan sensitivitas, dilakukan **pairwise comparison** antar keenam dimensi (menghasilkan $\binom{6}{2}=15$ pasangan). Responden memilih dimensi yang "lebih dominan" menimbulkan beban kerja pada setiap pasangan. Bobot setiap dimensi $w_i$ dihitung sebagai proporsi kemenangan:

$$w_i = \frac{k_i}{15}, \quad \sum_{i=1}^{6} w_i = 1$$

di mana $k_i$ adalah jumlah kemenangan dimensi ke-$i$ dalam 15 perbandingan berpasangan.

#### 2.1.3. Skor Akhir NASA-TLX

Skor akhir (Weighted Workload Score, WWS) dihitung sebagai rata-rata terbobot:

$$\text{WWS} = \sum_{i=1}^{6} w_i \cdot r_i$$

**Interpretasi skor (Hart, 2006):**

- $0 \leq \text{WWS} < 20$: Beban kerja sangat rendah.
- $20 \leq \text{WWS} < 40$: Rendah.
- $40 \leq \text{WWS} < 60$: Sedang.
- $60 \leq \text{WWS} < 80$: Tinggi.
- $80 \leq \text{WWS} \leq 100$: Sangat tinggi.

### 2.2. Work Sampling

Work Sampling adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan untuk berbagai aktivitas tanpa pengukuran kontinu (Aditya & Putra, 2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)).

#### 2.2.1. Proporsi Aktivitas

$$P_j = \frac{x_j}{N} \times 100\%$$

di mana:
- $P_j$ = persentase waktu untuk aktivitas $j$,
- $x_j$ = jumlah observasi aktivitas $j$,
- $N$ = total jumlah observasi.

#### 2.2.2. Penentuan Jumlah Observasi Minimum

Dengan tingkat kepercayaan $(1-\alpha)$ dan margin error $e$:

$$N = \frac{z_{\alpha/2}^2 \cdot p \cdot (1-p)}{e^2}$$

Untuk $p=0{,}5$ (kondisi paling konservatif) dan $\alpha=0{,}05$ ($z_{0{,}025}=1{,}96$), dengan $e=0{,}05$:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

Jika data awal memberikan proporsi aktual $p_a$, koreksi dilakukan:

$$N_{\text{koreksi}} = N \cdot \frac{p_a (1-p_a)}{0{,}25}$$

### 2.3. Integrated Workload Index (IWI)

Mengintegrasikan kedua metode:

$$\text{IWI} = \alpha \cdot \text{WWS}_{\text{norm}} + \beta \cdot \sum_j P_j \cdot L_j$$

di mana:
- $\text{WWS}_{\text{norm}} = \frac{\text{WWS}}{100}$ (ternormalisasi 0–1),
- $L_j$ = *load factor* aktivitas $j$ (0–1, bobot ergonomi kognitif),
- $\alpha + \beta = 1$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan prosedur yang digunakan Rafi & Putra (2024) dan Aditya & Putra (2024), berikut adalah SOP implementasi sistematis:

### Langkah 1: Perumusan Masalah dan Desain Studi
- Identifikasi populasi (kurir Shopee Express / operator gudang).
- Tentukan parameter ergonomi, *task description*, dan *performance indicator*.

### Langkah 2: Penentuan Jumlah Sampel
Gunakan rumus Slovin (untuk populasi $N_{\text{pop}}$ tertentu):

$$n = \frac{N_{\text{pop}}}{1 + N_{\text{pop}} \cdot e^2}$$

### Langkah 3: Penyebaran Kuesioner NASA-TLX
1. Penjelasan tujuan riset kepada responden.
2. Pengisian rating 6 dimensi (0–100).
3. Pelaksanaan *card sorting* untuk 15 pasangan perbandingan.
4. Validasi data (cek kelengkapan dan konsistensi).

### Langkah 4: Observasi Work Sampling
- Tentukan jumlah observasi minimum (persamaan pada §2.2.2).
- Lakukan *random visit* dengan interval acak (misal setiap 60 detik selama 8 jam shift).
- Klasifikasikan aktivitas (idle, productive, delay, supportive).

### Langkah 5: Pengolahan Data
- Hitung $w_i$, WWS per responden.
- Hitung $P_j$ dan *confidence interval*-nya.
- Uji signifikansi (ANOVA / *t-test*) antar kelompok shift.

### Langkah 6: Analisis dan Rekomendasi
- Identifikasi dimensi beban dominan.
- Re-desain proses kerja (otomatisasi scanning, optimasi rute, rotasi shift).
- Implementasi *feedback loop* (evaluasi 3–6 bulan).

### Diagram Alir SOP

```
┌────────────────────────┐
│ Identifikasi Masalah   │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│ Desain Studi & Sampel  │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐     ┌──────────────────────┐
│ Kuesioner NASA-TLX     │────▶│ Rating 6 Dimensi     │
└──────────┬─────────────┘     └──────────┬───────────┘
           ▼                              ▼
┌────────────────────────┐     ┌──────────────────────┐
│ Pairwise Comparison    │────▶│ Bobot w_i            │
└──────────┬─────────────┘     └──────────┬───────────┘
           ▼                              ▼
┌────────────────────────────────────────────────────┐
│ Hitung WWS = Σ w_i × r_i                          │
└──────────┬─────────────────────────────────────────┘
           ▼
┌────────────────────────┐     ┌──────────────────────┐
│ Observasi Work Sampling│────▶│ Proporsi Aktivitas   │
└──────────┬─────────────┘     └──────────┬───────────┘
           ▼                              ▼
┌────────────────────────────────────────────────────┐
│ Hitung IWI & Analisis Statistik                   │
└──────────┬─────────────────────────────────────────┘
           ▼
┌────────────────────────┐
│ Rekomendasi Ergonomi   │
└────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario: Kurir Shopee Express Hub Jakarta Selatan

Populasi: 30 kurir. Sampel (Slovin, $e=0{,}05$):

$$n = \frac{30}{1 + 30 \cdot (0{,}05)^2} = \frac{30}{1{,}075} \approx 27{,}9 \approx 28 \text{ responden}$$

**Data kuesioner NASA-TLX (rata-rata 28 responden):**

| Dimensi | Rating ($r_i$) | Kemenangan ($k_i$) |
|---------|----------------|--------------------|
| MD      | 78             | 11                 |
| PD      | 55             | 5                  |
| TD      | 82             | 12                 |
| PE      | 40             | 3                  |
| EF      | 70             | 8                  |
| FR      | 65             | 6                  |

**Perhitungan bobot:**

$$w_{\text{MD}} = \frac{11}{15} = 0{,}733; \quad w_{\text{PD}} = \frac{5}{15} = 0{,}333; \quad w_{\text{TD}} = \frac{12}{15} = 0{,}800$$
$$w_{\text{PE}} = \frac{3}{15} = 0{,}200; \quad w_{\text{EF}} = \frac{8}{15} = 0{,}533; \quad w_{\text{FR}} = \frac{6}{15} = 0{,}400$$

Normalisasi agar $\sum w_i = 1$:

$$\sum w_i = 0{,}733 + 0{,}333 + 0{,}800 + 0{,}200 + 0{,}533 + 0{,}400 = 3{,}0$$

$$w_i' = \frac{w_i}{3{,}0}$$

| Dimensi | $w_i$ ternormalisasi | $r_i$ |
|---------|----------------------|-------|
| MD      | 0,244                | 78    |
| PD      | 0,111                | 55    |
| TD      | 0,267                | 82