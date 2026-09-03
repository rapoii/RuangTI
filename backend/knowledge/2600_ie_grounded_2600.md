# 2600 — Analisis Beban Kerja Mental pada Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Indonesia mengalami ekspansi dramatis sepanjang dasawarsa terakhir, didorong oleh penetrasi digitalisasi UMKM, peningkatan kebiasaan belanja daring pascapandemi, serta pertumbuhan platform *marketplace* seperti Shopee, Tokopedia, dan Lazada. Shopee Express, sebagai salah satu unit layanan *last-mile delivery* terbesar di Asia Tenggara, beroperasi melalui skema kemitraan (*partner*) yang menyerap puluhan ribu pekerja lepas dan karyawan kontrak di berbagai kota di Indonesia. Skema kemitraan ini menciptakan karakteristik kerja yang khas: target penyelesaian *order* harian yang tinggi, dinamika volume paket musiman (seperti Harbolnas, Ramadan, dan 11.11), paparan terhadap tuntutan pelanggan yang variatif, serta penggunaan aplikasi *mobile* untuk pelacakan, validasi, dan pembaruan status pengiriman secara *real-time*.

Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa di balik pertumbuhan volume pengiriman yang pesat, terdapat dimensi kognitif dan psikologis pekerja yang relatif kurang terukur. Beban kerja mental (*mental workload*) menjadi variabel kritis yang memengaruhi kualitas layanan, tingkat *human error* (salah sortir, alamat keliru, keterlambatan update), keselamatan kerja (kecelakaan kurir di lapangan), serta *turnover* pekerja mitra yang dalam jangka panjang mengancam keberlanjutan operasional. Studi tersebut melakukan pengukuran beban kerja mental pada karyawan mitra Shopee Express menggunakan instrumen *NASA Task Load Index* (NASA-TLX) yang sudah terstandarisasi secara internasional, dengan tujuan memberikan *evidence-based* rekomendasi perbaikan alokasi tugas, desain *shift*, dan *system interface* aplikasi kurir.

Pada tataran paralel, Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melakukan studi pada operator gudang dengan mengintegrasikan NASA-TLX dan teknik *work sampling* untuk memetakan proporsi aktivitas produktif, tidak produktif, dan kelambatan (*delay*). Kedua paper ini memberikan kontribusi metodologis yang saling melengkapi: paper pertama berfokus pada dimensi kognitif pekerja lapangan (*field operator*), sementara paper kedua menyediakan kerangka kuantitatif utilisasi waktu yang dapat di-*cross-reference* dengan skor NASA-TLX untuk memvalidasi korelasi antara beban mental dan produktivitas terukur. Sinergi keduanya sangat relevan bagi praktik *Industrial Engineering* di industri logistik modern yang membutuhkan pendekatan *human factors engineering* yang rigor.

Urgensi riset ini makin nyata ketika memperhatikan data industri: biaya *replacement* satu kurir mitra di Indonesia berkisar 1,5–2,5 kali gaji bulanannya, sementara *burnout* yang tidak ditangani terbukti meningkatkan *error rate* sortir hingga 30%. Oleh karena itu, paper Rafi dan Putra (2024) memberikan kontribusi aplikatif yang substansial bagi *operations manager* Shopee Express dan pemangku kebijakan ketenagakerjaan sektor gig economy.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Hart dan Staveland (1988) untuk mengukur beban kerja secara subjektif namun terstruktur. Instrumen ini terdiri atas enam dimensi beban yang masing-masing dievaluasi pada skala *Likert* 0–100 (atau 0–20 pada formulir ringkas):

| No | Dimensi | Notasi | Definisi Operasional |
|----|---------|--------|----------------------|
| 1 | Mental Demand | $MD$ | Aktivitas kognitif dan perseptual yang diperlukan (memikirkan, memutuskan, mengingat, mencari, menulis) |
| 2 | Physical Demand | $PD$ | Aktivitas fisik yang diperlukan (mendorong, menarik, mengangkat, berjalan) |
| 3 | Temporal Demand | $TD$ | Tingkat tekanan waktu yang dirasakan |
| 4 | Performance | $PE$ | Tingkat keberhasilan pencapaian tujuan tugas (skor rendah = keberhasilan tinggi) |
| 5 | Frustration | $FR$ | Tingkat perasaan tidak nyaman, stres, marah selama bekerja |
| 6 | Effort | $EF$ | Tingkat usaha mental dan fisik yang dikeluarkan untuk mencapai kinerja |

### 2.2. Prosedur Pembobotan Pairwise Comparison

Nilai mentah (*raw score*) dari keenam dimensi belum merepresentasikan beban total karena masing-masing dimensi memiliki tingkat kepentingan yang berbeda di mata pekerja. NASA-TLX memperkenalkan prosedur *card sorting* yang membandingkan keenam dimensi secara berpasangan, menghasilkan $\binom{6}{2} = 15$ pasangan. Setiap dimensi muncul tepat 5 kali dalam 15 perbandingan, sehingga total bobot yang terdistribusi adalah:

$$\sum_{i=1}^{6} w_i = 15$$

di mana $w_i$ adalah bobot dimensi ke-$i$ yang bernilai integer dari 0 sampai 5, merepresentasikan berapa kali dimensi tersebut dipilih sebagai "lebih memengaruhi beban kerja" dibandingkan dimensi lainnya.

### 2.3. Formulasi Weighted Workload Score (WWLS)

Beban kerja total dihitung dengan formula *Weighted Workload*:

$$\text{WWLS} = \frac{\sum_{i=1}^{6} (s_i \times w_i)}{\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} s_i \cdot w_i$$

di mana:
- $s_i$ = *raw score* dimensi ke-$i$ (0–100)
- $w_i$ = bobot dimensi ke-$i$ (0–5)

Karena $\sum_{i=1}^{6} w_i = 15$, maka WWLS juga dapat ditulis:

$$\text{WWLS} = \frac{1}{15}\sum_{i=1}^{6} s_i \cdot w_i$$

Rentang WWLS adalah 0–100, dengan kategori interpretasi menurut standar Hancock, Waugh, dan Szalma (dikutip dalam Rafi & Putra, 2024):

$$\text{WWLS} \in \begin{cases} [0,20) & \text{Rendah (Low)} \\ [20,50) & \text{Sedang (Moderate)} \\ [50,80) & \text{Tinggi (High)} \\ [80,100] & \text{Sangat Tinggi (Very High)} \end{cases}$$

### 2.4. Work Sampling (Pendukung dari Aditya.R & Putra, 2024)

Untuk memvalidasi hasil NASA-TLX, digunakan teknik *work sampling* dengan rumus penentuan jumlah observasi:

$$n = \frac{Z^2 \cdot p \cdot q}{e^2}$$

dengan $p = 0{,}5$ (proporsi konservatif), $q = 1-p = 0{,}5$, $Z = 1{,}96$ (tingkat kepercayaan 95%), dan $e$ = margin of error absolut (umum 5% atau 10%). Substitusi menghasilkan:

$$n = \frac{(1{,}96)^2 \cdot (0{,}5) \cdot (0{,}5)}{(0{,}05)^2} = \frac{0{,}9604}{0{,}0025} \approx 384 \text{ observasi}$$

Untuk populasi hingga 250.000 aktivitas kurir per bulan, koreksi populasi hingga (*finite population correction*) diterapkan:

$$n_{adj} = \frac{n}{1 + \frac{n-1}{N}}$$

Proporsi aktivitas (misalnya *productive time*) dihitung sebagai:

$$P = \frac{x}{n}$$

dengan *confidence interval*:

$$P \pm Z \cdot \sqrt{\frac{P(1-P)}{n}}$$

Korelasi yang diharapkan antara skor WWLS dan *productive time*:

$$\rho_{\text{WWLS}, P} = \frac{\sum_{k=1}^{K}(W_k - \bar{W})(P_k - \bar{P})}{\sqrt{\sum(W_k - \bar{W})^2 \sum(P_k - \bar{P})^2}}$$

di mana $W_k$ adalah WWLS operator ke-$k$ dan $P_k$ adalah proporsi aktivitas produktifnya.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi dan Putra (2024) menyusun prosedur riset yang mengikuti alur berikut, yang merupakan *best practice* dalam *human factors engineering*:

```
┌──────────────────────────────────────────────────────────────┐
│  IDENTIFIKASI MASALAH & STUDI PENDAHULUAN                    │
│  - Wawancara manajer operasional Shopee Express              │
│  - Observasi awal proses kerja kurir                          │
└──────────────────────┬───────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────┐
│  PENENTUAN POPULASI & SAMPEL                                 │
│  - Populasi: karyawan mitra Shopee Express cabang X           │
│  - Sampling purposive (kriteria: masa kerja ≥3 bulan)        │
│  - n = 30 operator (rule of thumb NASA-TLX)                  │
└──────────────────────┬───────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────┐
│  PENGUMPULAN DATA NASA-TLX                                   │
│  1) Briefing responden (5 menit)                             │
│  2) Pemberian 15 kartu pasangan dimensi                     │
│  3) Pairwise comparison & bobot                              │
│  4) Pemberian raw score (skala 0-100)                       │
└──────────────────────┬───────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────┐
│  ANALISIS KUANTITATIF                                        │
│  - Hitung WWLS per responden                                 │
│  - Statistik deskriptif (mean, std dev)                       │
│  - Uji beda (jika ada perbandingan shift/kelompok)            │
└──────────────────────┬───────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────┐
│  VALIDASI SILANG DENGAN WORK SAMPLING (Aditya.R & Putra)    │
│  - Observasi acak aktivitas kurir (n ≥ 384 kejadian)         │
│  - Korelasi WWLS dengan productive time                       │
└──────────────────────┬───────────────────────────────────────┘
                       ▼
┌──────────────────────────────────────────────────────────────┐
│  REKOMENDASI REKAYASA                                        │
│  - Redesain shift                                            │
│  - Optimasi UI aplikasi kurir                                 │
│  - Training & SOP baru                                       │
└──────────────────────────────────────────────────────────────┘
```

**SOP Pengukuran NASA-TLX (Rafi & Putra, 2024):**

1. **Persiapan Responden:** Responden dijelaskan tujuan riset dan diminta untuk fokus pada satu *task* signifikan (misalnya satu siklus *pickup-delivery* 4 jam). Instrumen yang digunakan adalah versi *paper-based* NASA-TLX.
2. **Tahap Pairwise:** Responden menerima 15 pasang kartu dimensi dan memilih "dimensi mana yang lebih dominan memengaruhi beban kerja Anda". Hasil dicatat dalam matriks triangular simetris berukuran $6 \times 6$.
3. **Tahap Rating:** Responden menilai keenam dimensi dengan penskalaan garis 5 cm (skor 0–100).
4. **Perhitungan Bobot:** Jumlah "kemenangan" tiap dimensi pada matriks triangular memberikan $w_i$.
5. **Perhitungan WWLS:** Menggunakan persamaan pada Bagian 2.3.
6. **Interpretasi:** Penentuan kategori beban (Rendah, Sedang, Tinggi, Sangat Tinggi) berdasarkan rentang WWLS.

**SOP Work Sampling (Aditya.R & Putra, 2024):**

1. Tentukan kategori aktivitas (Produktif, *Delay*, Tidak Produktif, Istirahat).
2. Siapkan formulir observasi dengan teknik *random-instantaneous observation*.
3. Lakukan observasi pada interval acak (misalnya setiap 60 detik selama 8 jam per pengamat).
4. Catat aktivitas dominan saat *cue* observasi.
5. Hitung proporsi setiap kategori dengan interval kepercayaan 95%.

---

## 4. Studi Kasus Kuantitatif Industri & Per