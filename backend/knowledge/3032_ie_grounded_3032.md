# 3032 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dengan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Ergonomi Kognitif & Perancangan Kerja)
**Topik Spesifik:** *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami ekspansi eksponensial sepanjang dekade terakhir, dengan platform seperti Shopee menjadi tulang punggung transaksi digital di kawasan Asia Tenggara. Peningkatan volume pesanan ini secara langsung membebani lapisan operasional hilir, terutama pekerja *last-mile delivery* (mitra Shopee Express) dan operator gudang (*warehouse operator*). Rafi & Putra (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa beban mental (*mental workload*) pekerja kurir mitra Shopee Express tidak lagi dapat diabaikan sebagai variabel residual, melainkan menjadi determinan utama terhadap *delivery success rate*, *on-time performance*, dan tingkat *turnover* yang sangat memengaruhi biaya operasional perusahaan. Studi Aditya.R & Putra (2024) dengan DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi perspektif tersebut dengan membuktikan bahwa kombinasi *work sampling* dan NASA-TLX mampu mengungkap disparitas beban kerja yang tidak terdeteksi oleh analisis produktivitas konvensional.

Urgensi riset ini dapat diuraikan melalui tiga dimensi. Pertama, dimensi ekonomis: satu unit kegagalan pengiriman akibat kelelahan kognitif operator berpotensi menimbulkan *cost of quality* berupa retur, komplain pelanggan, dan *penalty* SLA (*Service Level Agreement*) yang dapat melebihi 5–8% dari nilai transaksi. Kedua, dimensi ergonomis: standar ISO 10075 tentang *Ergonomic Principles Related to Mental Workload* menetapkan bahwa beban mental yang tidak terkontrol akan menurunkan *well-being* pekerja dan meningkatkan risiko *human error*. Ketiga, dimensi strategis: bagi Shopee sebagai *marketplace*, kelestarian ekosistem mitra kurir merupakan *moat* kompetitif karena biaya *acquisition* mitra baru jauh lebih tinggi daripada biaya retensi. Rafi & Putra (2024) menempatkan NASA-TLX sebagai instrumen diagnostik yang relatif murah, terstandarisasi, dan *field-deployable* untuk menjawab kebutuhan tersebut, sementara Aditya.R & Putra (2024) mengintegrasikannya dengan *work sampling* agar proporsi waktu kerja nyata (*actual working time*) dapat dikorelasikan dengan persepsi beban mental operator gudang.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (*NASA Task Load Index*), yang dikembangkan oleh Hart & Staveland (1988), adalah instrumen multidimensional untuk mengukur *perceived workload* melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|--------|---------|------------------------|
| $MD$ | Mental Demand | Sejauh mana aktivitas memerlukan pemikiran, perhitungan, dan keputusan |
| $PD$ | Physical Demand | Sejauh mana aktivitas memerlukan usaha fisik |
| $TD$ | Temporal Demand | Sejauh mana waktu yang tersedia terasa terbatas |
| $PE$ | Performance | Tingkat keberhasilan pekerja mencapai tujuan |
| $EF$ | Effort | Sejauh mana pekerja harus bekerja keras untuk mencapai target |
| $FR$ | Frustration | Tingkat iritasi, stres, dan ketidaknyamanan |

Setiap subskala dinilai pada *raw rating* $R_i \in [0, 100]$, dan setiap pasang dimensi dibandingkan melalui *pairwise comparison card* untuk menentukan bobot $w_i \in \{0, 1, 2, 3, 4, 5\}$ dengan konstrain:

$$\sum_{i=1}^{6} w_i = 15$$

Skor NASA-TLX tertimbang (*Weighted Workload, WWL*) dirumuskan sebagai:

$$WWL = \frac{1}{15} \sum_{i=1}^{6} (w_i \cdot R_i)$$

Rafi & Putra (2024) mengadopsi klasifikasi beban kerja dari Hart (2006) menjadi lima kategori:

$$
\text{Kategori}(WWL) =
\begin{cases}
\text{Rendah}, & 0 \le WWL \le 20 \\
\text{Agak Rendah}, & 21 \le WWL \le 40 \\
\text{Sedang}, & 41 \le WWL \le 60 \\
\text{Agak Tinggi}, & 61 \le WWL \le 80 \\
\text{Tinggi}, & 81 \le WWL \le 100
\end{cases}
$$

Untuk studi pendukung, Aditya.R & Putra (2024) mengintegrasikan *work sampling* dengan laju kejadian aktivitas operator gudang. Jika dalam $N$ observasi acak terdistribusi *multinominal*, kategori aktivitas ke-$k$ muncul sebanyak $n_k$ kali, maka proporsi aktivitas:

$$p_k = \frac{n_k}{N}, \quad \sum_{k=1}^{K} p_k = 1$$

dengan *standard error*:

$$SE(p_k) = \sqrt{\frac{p_k(1 - p_k)}{N - 1}}$$

dan batas keyakinan 95%:

$$CI_{95}(p_k) = p_k \pm 1{,}96 \cdot SE(p_k)$$

Tingkat utilitas operator (*operator utilization rate*) didefinisikan sebagai:

$$U = \sum_{k \in \text{Produktif}} p_k$$

yang kemudian dikorelasikan dengan skor $WWL$ melalui koefisien korelasi Pearson:

$$r = \frac{\sum_{i=1}^{n}(X_i - \bar{X})(Y_i - \bar{Y})}{\sqrt{\sum_{i=1}^{n}(X_i - \bar{X})^2 \sum_{i=1}^{n}(Y_i - \bar{Y})^2}}$$

untuk menguji hipotesis bahwa beban mental meningkat secara signifikan ketika proporsi waktu produktif melampaui ambang ergonomis tertentu (umumnya $U > 85\%$).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi & Putra (2024) menyusun protokol implementasi NASA-TLX dalam lima tahap sistematis yang menjadi acuan SOP operasional:

**Tahap 1 — Identifikasi Populasi & Stratifikasi.** Populasi pekerja mitra Shopee Express disegmentasi berdasarkan *hub* operasional, shift (pagi/siang/malam), dan pengalaman kerja (< 6 bulan, 6–24 bulan, > 24 bulan). Stratifikasi ini krusial karena distribusi beban mental tidak homogen.

**Tahap 2 — Random Sampling & Penentuan Ukuran Sampel.** Dengan tingkat keyakinan 95% dan *margin of error* $e = 5\%$, ukuran sampel minimum ditentukan melalui:

$$n = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{e^2} = \frac{(1{,}96)^2 (0{,}5)(0{,}5)}{0{,}05^2} \approx 385 \text{ pekerja}$$

**Tahap 3 — Instrumen & Pelatihan Enumerator.** Kuesioner NASA-TLX versi ringkas (card sort 15 pasangan + skala 0–100) didistribusikan pada akhir shift. Enumerator dilatih menggunakan *standardized script* untuk meminimalkan *response bias*.

**Tahap 4 — Pengumpulan Data & Work Sampling (integrasi Aditya.R & Putra, 2024).** Observasi *work sampling* dilakukan dengan metode *activity sampling* pada interval acak (*random time observation*), idealnya 200–400 observasi per operator agar $SE(p_k) < 5\%$.

**Tahap 5 — Analisis Statistik & Pelaporan.** Perhitungan $WWL$, uji beda (ANOVA atau *Kruskal-Wallis*), serta pemetaan rekomendasi manajemen.

Diagram alur keputusan (*decision flowchart*) yang direkomendasikan:

```
┌─────────────────────────────┐
│ Input: Data rating 6 dimensi │
│        + bobot pairwise      │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Hitung WWL = Σ(wᵢ·Rᵢ)/15   │
└──────────────┬──────────────┘
               ▼
     ┌─────────┴──────────┐
     ▼                    ▼
 WWL ≤ 60            WWL > 60
 (Sedang/kurang)     (Agak Tinggi/Tinggi)
     │                    │
     ▼                    ▼
 Monitoring rutin    Investigasi akar masalah
     │                    │
     ▼                    ▼
 Lanjut            Redesain: rotasi shift,
                   otomasi sortir, dll.
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah *sortation hub* Shopee Express di wilayah Jabodetabek memiliki 12 operator sortir paket pada shift siang. Manajer operasional ingin mengetahui tingkat beban mental operator menggunakan metodologi Rafi & Putra (2024).

**Input Parameter:** Hasil wawancara dan kuesioner terhadap 12 operator menghasilkan data ringkas sebagai berikut (rata-rata tim):

| Subskala | $R_i$ (0–100) | $w_i$ (0–5) |
|----------|---------------|-------------|
| $MD$ | 72 | 4 |
| $PD$ | 65 | 3 |
| $TD$ | 80 | 5 |
| $PE$ | 45 | 1 |
| $EF$ | 70 | 1 |
| $FR$ | 55 | 1 |
| **Total Bobot** | — | **15** |

**Langkah Perhitungan:**

1. Produk tertimbang per subskala:

$$w_{MD} \cdot R_{MD} = 4 \times 72 = 288$$
$$w_{PD} \cdot R_{PD} = 3 \times 65 = 195$$
$$w_{TD} \cdot R_{TD} = 5 \times 80 = 400$$
$$w_{PE} \cdot R_{PE} = 1 \times 45 = 45$$
$$w_{EF} \cdot R_{EF} = 1 \times 70 = 70$$
$$w_{FR} \cdot R_{FR} = 1 \times 55 = 55$$

2. Penjumlahan:

$$\sum_{i=1}^{6}(w_i \cdot R_i) = 288 + 195 + 400 + 45 + 70 + 55 = 1053$$

3. Skor NASA-TLX:

$$WWL = \frac{1053}{15} = 70{,}2$$

**Interpretasi Manajerial:** Dengan $WWL = 70{,}2$, beban mental operator sortir berada pada kategori **Agak Tinggi** (61–80). Subskala *Temporal Demand* menyumbang kontribusi terbesar terhadap skor total, menunjukkan bahwa tekanan waktu—bukan kompleksitas kognitif—adalah *driver* utama beban kerja. Hal ini konsisten dengan pola operasional Shopee Express yang memiliki *cut-off time* sortir ketat menjelang jadwal *dispatch* armada.

**Rekomendasi:** (i) Penambahan 2 operator *buffer* pada jam puncak (11.00–14.00), (ii) implementasi *dynamic routing* pada conveyor sortir untuk mengurangi *waiting time*, (iii) program *micro-break* 5 menit setiap 90 menit, dan (iv) kalibrasi ulang target sortir harian dari 2.500 menjadi 2.000 paket per operator.

**Validasi dengan Work Sampling (integrasi Aditya.R & Putra, 2024):** Dari 240 observasi acak (20 observasi × 12 operator), kategori "menyortir" muncul 195 kali. Maka:

$$U_{\text{sortir}} = \frac{195}{240} = 81{,}25\%$$
$$SE = \sqrt{\frac{0{,}8125 \times 0{,}1875}{239}} = 0{,}0252$$
$$CI_{95} = 81{,}25\% \pm 4{,}94\% = [76{,}31\%;\; 86{,}19\%]$$

Karena batas bawah $CI$ mendekati ambang ergonomis 85%, kombinasi $WWL = 70{,}2$ dan $U = 81{,}25\%$ mengkonfirmasi bahwa *sortation hub* tersebut memerlukan intervensi rekayasa segera.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Kritisi Metodologis.** NASA-TLX memiliki kelemahan *inherent*: bersifat *self-reported* sehingga rentan terhadap *social desirability bias* dan *recall bias*