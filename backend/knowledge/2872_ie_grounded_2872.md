# 2872 — Analisis Beban Kerja Mental Operator Logistik dan Gudang Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Putra Surabaya)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Putra Surabaya)*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik *last-mile* di Indonesia mengalami transformasi masif sejak 2018, ditandai dengan proliferasi platform *e-commerce* dan layanan *on-demand delivery* seperti Shopee Express. Dalam ekosistem ini, *Shopee Express Partner* (sebutan untuk kurir mitra atau *third-party rider*) menjadi ujung tombak operasional yang berhadapan langsung dengan fluktuasi volume paket harian, ketidakpastian alamat, ekspektasi *Service Level Agreement* (SLA) pengiriman 24 jam, serta tuntutan multitasking antara navigasi aplikasi, verifikasi barang, dan interaksi dengan pelanggan. Rafi & Putra (2024) dalam artikel mereka yang dipublikasikan pada *Universitas Putra Surabaya Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menekankan bahwa kombinasi faktor kognitif dan fisik ini menciptakan *mental workload* (beban kerja mental) yang signifikan, yang apabila tidak dikelola secara ergonomis akan menurunkan *performance*, meningkatkan *error rate* (kegagalan kirim atau *mis-delivery*), serta memicu kelelahan psikologis kronis.

Secara ekonomi, biaya pergantian *rider* (turnover) di industri *quick commerce* Indonesia dilaporkan mencapai 80–120% per tahun, dengan biaya rekrutmen dan pelatihan ulang setiap mitra berkisar 15–25% dari gaji bulanan. Kerugian operasional ini diperparah oleh fenomena *cognitive overload*, di mana kapasitas pemrosesan informasi operator (yang secara teoretis dibatasi oleh model *Multiple Resource Theory* Wickens, 2008) terlampaui oleh kompleksitas tugas. Rafi & Putra (2024) mengidentifikasi bahwa hampir 68% mitra Shopee Express Partner yang disurvei mengalami tingkat frustrasi tinggi dan temporal demand yang kritis terutama pada periode *peak season* (Harbolnas, Ramadan, dan 11.11). Paper kedua dari Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat urgensi ini dengan menunjukkan bahwa operator gudang (*warehouse operator*) menghadapi profil beban kerja yang mirip, di mana tuntutan fisik penanganan barang (lifting, sorting, packing) berinteraksi dengan tuntutan kognitif (verifikasi SKU, *picking* berdasarkan *FIFO/FEFO*, dan komunikasi via *handheld terminal*).

Urgensi teknis dari studi beban kerja mental ini juga bersifat *human-factors engineering* (rekayasa faktor manusia). Dalam kerangka ISO 6385:2016 tentang prinsip-prinsip ergonomi dalam perancangan sistem kerja, organisasi wajib menilai tidak hanya beban fisik tetapi juga *mental workload* sebagai variabel kritis yang menentukan reliabilitas sistem. Kegagalan mengukur beban kerja mental secara kuantitatif akan menghasilkan alokasi SDM yang suboptimal, *shift scheduling* yang tidak memperhatikan kapasitas kognitif, dan desain *Standard Operating Procedure* (SOP) yang menambah kompleksitas kognitif daripada menguranginya. Kedua paper yang menjadi basis modul ini hadir di tengah kekosongan literatur empiris Indonesia yang mengaplikasikan instrumen tervalidasi seperti NASA-TLX (Task Load Index) pada konteks logistik digital, menjadikannya referensi penting bagi *Industrial Engineer*, *Human Resource* planner, dan *Operations Manager* di sektor *e-commerce fulfillment*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep Mental Workload dan NASA-TLX

Mental workload didefinisikan oleh Hart & Staveland (1988) sebagai *cost* yang dikeluarkan operator untuk mencapai tingkat *performance* tertentu dalam menghadapi tuntutan tugas. NASA-TLX adalah instrumen multidimensional yang terdiri dari enam subskala yang dievaluasi menggunakan skala bipolar 0–100 (skala *visual analog*):

1. **Mental Demand (MD)** — aktivitas kognitif (berpikir, memutuskan, mengamati).
2. **Physical Demand (PD)** — aktivitas fisik (menopang, mengangkat, mendorong).
3. **Temporal Demand (TD)** — tekanan waktu.
4. **Performance (P)** — persepsi keberhasilan menyelesaikan tugas.
5. **Effort (EF)** — usaha total yang dikeluarkan.
6. **Frustration (FR)** — tingkat irritasi, stress, dan ketidaknyamanan.

### 2.2 Prosedur Perhitungan Weighted NASA-TLX

Tahap pertama adalah **Pair-wise Comparison** untuk menentukan bobot (weight, $w_i$) antar skala. Terdapat 15 pasangan ($C_2^6 = 15$) yang dibandingkan oleh responden, dan skala yang dianggap lebih *contributing* terhadap beban kerja tugas tertentu diberi skor 1 (sedangkan pasangannya 0). Total bobot per skala adalah jumlah kemenangan dari 5 pasangan yang melibatkannya, sehingga $w_i \in [0, 5]$ dengan $\sum_{i=1}^{6} w_i = 15$.

Tahap kedua adalah **Rating** pada keenam skala ($r_i$), dengan $r_i \in [0, 100]$.

Skor **Weighted NASA-TLX** untuk setiap operator dihitung dengan persamaan:

$$
\text{TLX}_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}
$$

Di mana pembagi 15 adalah total bobot agregat. Nilai ini merepresentasikan skor beban kerja rata-rata terbobotkan dalam rentang 0–100. Rafi & Putra (2024) menggunakan ambang batas klasifikasi sebagai berikut:

$$
\text{Kategori} = \begin{cases}
\text{Rendah} & 0 \leq \text{TLX} < 25 \\
\text{Sedang} & 25 \leq \text{TLX} < 50 \\
\text{Tinggi} & 50 \leq \text{TLX} < 75 \\
\text{Sangat Tinggi} & 75 \leq \text{TLX} \leq 100
\end{cases}
$$

Sementara untuk skor agregat populasi, digunakan **Raw TLX** (unweighted) sebagai berikut:

$$
\overline{\text{TLX}}_{raw} = \frac{1}{N} \sum_{j=1}^{N} \frac{1}{6} \sum_{i=1}^{6} r_{i,j}
$$

di mana $N$ adalah jumlah responden dan $r_{i,j}$ adalah rating skala ke-$i$ dari responden ke-$j$.

### 2.3 Work Sampling dan Formulasi Utilisasi

Aditya.R & Putra (2024) mengintegrasikan NASA-TLX dengan **Work Sampling** untuk mengkuantifikasi distribusi aktivitas operator gudang. Teknik ini, yang diperkenalkan oleh *L. C. Morrow* (1940-an) dan diformalkan dalam *Determining Machine Load and Capacity* oleh *Lowry, Maynard & Stegemerten*, menggunakan pengamatan acak (*random observation*) dengan interval waktu tetap. Probabilitas operator melakukan aktivitas $k$ pada suatu waktu tertentu:

$$
P_k = \frac{n_k}{n_{total}}
$$

di mana $n_k$ adalah jumlah pengamatan aktivitas $k$ dan $n_{total}$ adalah total pengamatan. Dengan tingkat kepercayaan $1-\alpha$ dan error absolut $E$, jumlah observasi minimum ditentukan oleh:

$$
n = \left( \frac{Z_{\alpha/2}}{E} \right)^2 \cdot p(1-p)
$$

Untuk tingkat kepercayaan 95% ($Z_{0.025} = 1.96$), $E = 0.05$, dan $p = 0.5$ (worst case), diperoleh $n \geq 384$ observasi.

### 2.4 Normalisasi dan Analisis Varians

Untuk menguji signifikansi perbedaan beban kerja antar kelompok operator (misal: shift pagi vs. shift malam), digunakan uji ANOVA satu arah:

$$
F = \frac{\text{MS}_{between}}{\text{MS}_{within}} = \frac{\sum_{g=1}^{k} n_g (\bar{x}_g - \bar{x})^2 / (k-1)}{\sum_{g=1}^{k}\sum_{j=1}^{n_g} (x_{gj} - \bar{x}_g)^2 / (N-k)}
$$

di mana $k$ adalah jumlah kelompok, $n_g$ adalah ukuran kelompok ke-$g$, $\bar{x}_g$ adalah rata-rata kelompok, dan $\bar{x}$ adalah rata-rata keseluruhan. Hipotesis nol $H_0: \mu_1 = \mu_2 = \cdots = \mu_k$ ditolak jika $F > F_{\alpha, k-1, N-k}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengukuran beban kerja mental di lingkungan operasional Shopee Express atau gudang *fulfillment center* mengikuti *block diagram* metodologis berikut:

```
┌──────────────────────────────────────────────────────────────┐
│  FASE 1: PREPARATION                                         │
│  - Identifikasi populasi operator (N operator)               │
│  - Penetuan job task per shift                               │
│  - Validasi kuesioner NASA-TLX (Bahasa Indonesia)            │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  FASE 2: WORK SAMPLING (jika diperlukan)                     │
│  - Desain observasi acak (jadwal, observer, route)           │
│  - Hitung jumlah observasi minimum (n)                       │
│  - Kalibrasi antar observer (Cohen's Kappa > 0.7)            │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  FASE 3: NASA-TLX DATA COLLECTION                            │
│  - Pair-wise comparison card (15 kartu)                      │
│  - Pemberian rating 0–100 per subskala                       │
│  - Wawancara pasca-tugas dalam 5–10 menit                    │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  FASE 4: QUANTITATIVE ANALYSIS                               │
│  - Hitung bobot w_i dan Weighted TLX                         │
│  - Uji validitas & reliabilitas (Cronbach α ≥ 0.7)           │
│  - Uji normalitas (Shapiro-Wilk) dan ANOVA/kruskal-wallis    │
└────────────────────────┬─────────────────────────────────────┘
                         ▼
┌──────────────────────────────────────────────────────────────┐
│  FASE 5: ACTIONABLE RECOMMENDATION                           │
│  - Redesign task / SOP / shift rotation                      │
│  - Training cognitive load management                       │
│  - Feedback loop monitoring 3–6 bulan                       │
└──────────────────────────────────────────────────────────────┘
```

**SOP Operasional Pengukuran NASA-TLX di Shopee Express Partner (Berdasarkan Rafi & Putra, 2024):**

1. **Briefing dan Informed Consent** — Observer menjelaskan tujuan studi dan menjamin anonimitas. Durasi briefing 10–15 menit.
2. **Pair-wise Comparison Card Distribution** — Setiap operator menerima 15 kartu berisi dua skala (misalnya: MD vs. PD) dan diminta memilih mana yang lebih *relevant* terhadap pekerjaannya. Total durasi 20–30 menit.
3. **Task Observation Periode** — Observer mengikuti operator selama minimal 1 siklus kerja penuh (rata-rata 4–6 jam shift).
4. **Post-task Rating** — Dalam 10 menit setelah tugas, operator mengisi rating 0–100 pada keenam skala.
5. **Cross-validation** — Untuk objektivitas, minimal 10% responden di-*resample* pada shift berbeda.
6. **Data Entry & Analysis** — Menggunakan spreadsheet atau software statistik (SPSS, R, Python), hitung weighted TLX sesuai persamaan di Bagian 2.

Aditya.R & Putra (2024) menambahkan SOP Work Sampling: observer bersiap di titik strategis (area sortir, *picking zone*, loading dock), menggunakan *smartphone* dengan aplikasi *time-stamp randomizer*, dan mencatat aktivitas dalam 9–11 kategori (misalnya: *picking, packing, idle, walking, waiting, scanning, lifting, conversing, others*). Setiap kategori di-label dengan kode alfabet untuk mempercepat entri.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Hipotetis Realistis: 8 Operator Shopee Express Partner Shift Pagi

Misalkan dilakukan studi pada 8 operator Shopee Express Partner (Rafi & Putra, 2024) yang bertugas di hub Kota Surabaya dengan volume harian rata-rata 280 paket/operator. Berikut data *pair-wise comparison* agregat dan rating per operator:

**Tabel 1. Hasil Pair-wise Comparison (jumlah kemenangan per skala, range 0–5)**

| Skala | Total Kemenangan ($w_i$) |
|---|---|
| Mental Demand (MD) | 4 |
| Physical Demand (PD) | 2 |
| Temporal Demand (TD) | 3 |
| Performance (P) | 1 |
| Effort (EF) | 3 |
| Frustration (FR) | 2 |
| **Total** | **15** |

**Tabel 2. Rating Rata-rata per Operator (skala 0–100)**

| Operator | MD | PD | TD | P | EF | FR |
|---|---|---|---|---|---|---|
| Op-1 | 75 | 60 | 80 | 30 | 70 | 65 |
| Op-2 | 80 | 55 | 75 | 25 | 75 | 70 |
| Op-3 | 70 | 65 | 85 | 35 | 65 | 60 |
| Op-4 | 85 | 50 | 90 | 20 | 80 | 75 |