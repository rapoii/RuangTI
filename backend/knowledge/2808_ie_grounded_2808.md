# 2808 — Analisis Beban Kerja Mental Karyawan Operasional Logistik dan Penjualan Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** Dinda Safitri Ramadhani, Arinda Soraya Putri, Niken Fauziah Ambarwati (2024). *Metris Jurnal Sains dan Teknologi*. DOI: [https://doi.org/10.25170/metris.v24i01.4358](https://doi.org/10.25170/metris.v24i01.4358)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* dan logistik *last-mile* di Asia Tenggara mengalami ekspansi eksponensial dalam satu dekade terakhir. Shopee, sebagai salah satu *platform* milik Sea Limited, mengandalkan ekosistem Shopee Express untuk menangani volume pengiriman paket yang menembus ratusan juta unit per kuartal pada periode *peak season*. Pada ujung rantai pasok tersebut, Shopee Express Partner (sebutan untuk pekerja kemitraan/*gig worker*) menjadi titik gesek operasional tertinggi: mereka menanggung target sortir, *dispatch*, pengiriman harian, serta interaksi langsung dengan pelanggan. Rafi dan Putra (2024) dalam artikel ber-DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa pekerja kemitraan ini menghadapi tekanan multidimensional yang belum sepenuhnya diukur secara kuantitatif-subjektif, padahal tekanan tersebut secara langsung berdampak pada *throughput*, *error rate* pengiriman, dan tingkat *turnover* mitra.

Paralel dengan itu, Ramadhani, Putri, dan Ambarwati (2024) ber-DOI [10.25170/metris.v24i01.4358](https://doi.org/10.25170/metris.v24i01.4358) melakukan pengukuran serupa pada populasi yang berbeda—*counter sales* di PT. XYZ yang bergerak di sektor otomotif—dan menemukan bahwa beban kerja mental (*mental workload*) muncul akibat target penjualan unit bulanan yang agresif. Kedua studi ini bersama-sama meneguhkan bahwa pengukuran beban kerja mental bukan sekadar isu psikologis, melainkan variabel rekayasa sistem yang mempengaruhi produktivitas, kualitas layanan, dan keberlanjutan operasional. Urgensi ekonomi dari isu ini tampak pada potensi *loss* akibat kelelahan kognitif: kelambatan sortir di gudang *hub*, komplain pelanggan yang berantai, dan tingginya biaya rekrutmen ulang mitra baru. Oleh sebab itu, NASA-TLX (*NASA Task Load Index*) yang awalnya dikembangkan oleh Hart dan Staveland (1988) untuk menilai beban kognitif pilot pesawat ulang-alik, kini diadopsi secara luas dalam konteks industri non-aviasi sebagai alat ukur subjektif yang terstandarisasi.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen multidimensional yang terdiri atas enam subskala yang merepresentasikan sumber beban kerja secara holistik. Keenam dimensi tersebut adalah: **Mental Demand (MD)**, **Physical Demand (PD)**, **Temporal Demand (TD)**, **Performance (OP)**, **Effort (EF)**, dan **Frustration (FR)**. Setiap responden memberikan *raw score* $R_i$ pada tiap dimensi menggunakan *Likert-type line scale* dengan rentang $0 \leq R_i \leq 100$ yang dipecah menjadi 20 interval (skala 5-point verbal dari *very low* hingga *very high*).

Untuk mengatasi kelemahan penjumlahan sederhana yang mengasumsikan keenam dimensi berbobot sama, NASA-TLX memperkenalkan prosedur **pairwise comparison**. Responden diminta memilih dimensi yang lebih relevan dari setiap pasangan yang mungkin. Banyaknya pasangan adalah:

$$\binom{6}{2} = \frac{6!}{2! \cdot 4!} = 15 \text{ pasangan}$$

Setiap dimensi $i$ akan menerima bobot $w_i$ berupa jumlah pilihan dari 15 pasangan tersebut. Bobot dinormalisasi menjadi:

$$W_i = \frac{w_i}{\sum_{j=1}^{6} w_j} = \frac{w_i}{15}, \quad 0 \leq W_i \leq 1$$

Indeks beban kerja total (*Weighted Workload*, WWL) kemudian dihitung sebagai kombinasi linear terbobot:

$$\text{WWL} = \sum_{i=1}^{6} W_i \cdot R_i, \quad 0 \leq \text{WWL} \leq 100$$

Rafi dan Putra (2024) serta Ramadhani et al. (2024) keduanya menggunakan formula di atas. Untuk interpretasi manajerial, skor WWL dikategorikan mengikuti panduan umum literature:

$$
\text{Kategori Beban Kerja} =
\begin{cases}
\text{Rendah}, & 0 \leq \text{WWL} < 25 \\
\text{Sedang}, & 25 \leq \text{WWL} < 50 \\
\text{Tinggi}, & 50 \leq \text{WWL} < 75 \\
\text{Sangat Tinggi}, & 75 \leq \text{WWL} \leq 100
\end{cases}
$$

Secara statistik, signifikansi perbedaan antar-kelompok responden (misalnya antar-shift atau antar-cabang) diuji menggunakan **ANOVA satu jalur** atau **Kruskal-Wallis** ketika asumsi normalitas tidak terpenuhi, dengan *confidence level* $\alpha = 0{,}05$. Korelasi antar-dimensi dapat dianalisis menggunakan Pearson atau Spearman untuk mengidentifikasi *collinearity* yang dapat menyederhanakan instrumentasi di masa depan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Pelaksanaan studi NASA-TLX mengikuti alur metodologis yang ketat. Berikut diagram alur SOP yang merujuk pada prosedur Rafi & Putra (2024) dan Ramadhani et al. (2024):

```
┌─────────────────────────────────────────────┐
│ 1. Identifikasi populasi & unit kerja       │
│    (mitra Shopee Express / counter sales)   │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 2. Penyusunan kuesioner NASA-TLX            │
│    - Instruksi standar Hart & Staveland     │
│    - 6 subskala + pairwise card (15 pair)   │
│    - Uji validitas isi oleh 2–3 expert       │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 3. Pilot study (n=10–15)                    │
│    Uji pemahaman istilah & reliabilitas      │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 4. Pengumpulan data primer                  │
│    - Pendekatan purposive sampling           │
│    - n ≥ 30 (rule of thumb untuk statistik) │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 5. Scoring & tabulasi                       │
│    - Hitung w_i dari pairwise comparison    │
│    - Hitung WWL per responden               │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 6. Analisis statistik & interpretasi        │
│    - Rata-rata WWL per dimensi              │
│    - Uji beda antar-kelompok                │
│    - Pemetaan kategori beban kerja          │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ 7. Rekomendasi rekayasa SDM & ergonomi      │
└─────────────────────────────────────────────┘
```

Standar operasional yang perlu ditegakkan dalam konteks industri: (a) responden harus sudah berpengalaman minimal 3 bulan pada posisi yang diukur untuk memastikan stabilitas persepsi beban kerja; (b) kuesioner diisi di akhir shift agar pekerja mampu merefleksikan akumulasi beban secara kumulatif; (c) enumerator harus menjamin kerahasiaan jawaban agar responden tidak bias karena *social desirability*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif, kita rekonstruksi skenario hipotetis yang konsisten dengan konteks Rafi & Putra (2024): pengukuran beban kerja mental 30 mitra Shopee Express di gudang sortir *Hub Jakarta Selatan*. Misalkan setelah *pairwise comparison*, diperoleh jumlah pilihan untuk masing-masing dimensi sebagai berikut:

| Dimensi $i$ | Pilihan $w_i$ | Bobot Normal $W_i = w_i/15$ |
|---|---|---|
| Mental Demand (MD) | 9 | 0,600 |
| Physical Demand (PD) | 2 | 0,133 |
| Temporal Demand (TD) | 2 | 0,133 |
| Performance (OP) | 0 | 0,000 |
| Effort (EF) | 1 | 0,067 |
| Frustration (FR) | 1 | 0,067 |
| **Total** | **15** | **1,000** |

Kemudian ambil rata-rata *raw score* $R_i$ dari 30 responden (skala 0–100):

| Dimensi | $R_i$ |
|---|---|
| MD | 78 |
| PD | 55 |
| TD | 82 |
| OP | 45 |
| EF | 70 |
| FR | 60 |

**Perhitungan WWL** per persamaan utama:

$$\text{WWL} = (0{,}600)(78) + (0{,}133)(55) + (0{,}133)(82) + (0{,}000)(45) + (0{,}067)(70) + (0{,}067)(60)$$

$$\text{WWL} = 46{,}80 + 7{,}32 + 10{,}91 + 0{,}00 + 4{,}69 + 4{,}02 = 73{,}74$$

Dengan $\text{WWL} = 73{,}74$, maka berdasarkan kategori di Bagian 2, beban kerja