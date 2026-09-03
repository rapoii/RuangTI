# 2776 — Analisis Beban Kerja Mental (Mental Workload) Operator Logistik Last-Mile dan Pergudangan dengan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami pertumbuhan eksponensial selama satu dekade terakhir, didorong oleh penetrasi smartphone yang menembus lebih dari 78% populasi dewasa dan adopsi platform marketplace seperti Shopee, Tokopedia, dan Lazada. Shopee Express sebagai salah satu pilar layanan pengiriman *last-mile* milik ekosistem Shopee menanggung volume paket yang fluktuatif, terutama pada periode *flash sale* (Tanggal Kembar, Harbolnas) yang mampu meningkatkan *throughput* harian sebesar 300–500% dibanding *baseline* hari normal. Rafi dan Putra (2024), melalui artikel mereka yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), menyoroti bahwa di balik lonjakan volume ini, terdapat beban kerja mental (*mental workload*) yang signifikan yang dialami oleh mitra kurir Shopee Express — sebuah variabel yang selama ini luput dari analisis operasional konvensional yang cenderung berfokus pada *physical workload* (beban fisik) semata.

Urgensi penelitian Rafi & Putra (2024) berangkat dari tiga permasalahan nyata di lapangan. Pertama, turnover kurir *partner* yang tinggi (rata-rata 35–45% per tahun) yang disebabkan oleh kelelahan psikologis, frustrasi akibat target harian yang tidak realistis, dan *cognitive overload* saat menghadapi rute kompleks di kawasan urban padat. Kedua, meningkatnya *error rate* dalam proses sortirasi dan *delivery* yang berkorelasi langsung dengan kelelahan mental, sehingga berdampak pada Customer Satisfaction Score (CSAT) dan reputasi brand. Ketiga, belum adanya *standard operating procedure* (SOP) berbasis data kuantitatif yang mampu mengukur dan mengelola beban kerja mental pekerja logistik di Indonesia — sebagian besar perusahaan masih menggunakan *gut feeling* atau *target quota* yang ditetapkan secara top-down tanpa validasi ergonomis.

Aditya.R dan Putra (2024), dalam companion paper dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), memperluas perspektif ini ke lingkungan pergudangan (*warehouse operations*). Mereka menunjukkan bahwa operator gudang menghadapi beban kerja yang bersifat hybrid — kombinasi antara tuntutan fisik (pengangkatan, pengangkutan, repetitif motion) dengan tuntutan kognitif (sortirasi, *inventory tracking*, penggunaan WMS). Integrasi dua perspektif — kurir *last-mile* dan operator gudang — menjadi penting karena keduanya merupakan *interface* kritis dalam rantai pasok Shopee Express, di mana *bottleneck* di salah satu titik akan segera merambat ke titik lainnya (*bullwhip effect* pada level operasional). Kedua paper ini memberikan *framework* terpadu berbasis NASA-TLX dan Work Sampling yang dapat digunakan untuk *workload balancing*, *capacity planning*, dan desain ulang sistem kerja yang lebih *human-centered*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-TLX (*Task Load Index*)

NASA-TLX adalah instrumen subjektif multidimensi yang dikembangkan oleh *Human Performance Group* di NASA Ames Research Center (Hart & Staveland, 1988) untuk mengukur *workload* yang dialami operator saat menjalankan tugas tertentu. Instrumen ini terdiri dari enam subskala yang merepresentasikan dimensi beban kerja yang berbeda:

$$\text{TLX}_{\text{Weighted}} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana:
- $r_i$ = skor mentah (*raw score*) subskala ke-$i$ pada skala 0–100
- $w_i$ = bobot relatif subskala ke-$i$ yang diperoleh dari proses *pair-wise comparison*
- $i \in \{1, 2, 3, 4, 5, 6\}$ merepresentasikan subskala: *Mental Demand* (MD), *Physical Demand* (PD), *Temporal Demand* (TD), *Performance* (PE), *Effort* (EF), dan *Frustration* (FR)
- Pembagi 15 adalah jumlah maksimum pasangan dalam *pair-wise comparison* dari 6 subskala, yaitu $\binom{6}{2} = 15$

Setiap pasangan subskala dibandingkan dan diberi bobot $w_i \in \{0, 1, 2, 3\}$ tergantung pada frekuensi subskala tersebut dipilih sebagai "lebih memberatkan" dalam perbandingan. Tahapan perhitungannya:

**Langkah 1:** Menghitung jumlah kemenangan (*wins*) setiap subskala dari 5 perbandingan yang melibatkannya.

$$w_i^{\text{raw}} = \sum_{j \neq i} \mathbb{1}_{[i > j]}$$

**Langkah 2:** Menghitung total raw TLX sebagai *baseline* tanpa bobot:

$$\text{RTLX} = \sum_{i=1}^{6} r_i$$

**Langkah 3:** Menghitung *weighted TLX* dengan formula:

$$\text{TLX}_{\text{Weighted}} = \frac{\sum_{i=1}^{6} w_i^{\text{raw}} \cdot r_i}{15}$$

Interpretasi skor TLX menurut standar industri (Vidulich & Tsang, 2012):

| Rentang Skor TLX | Kategori Beban Kerja |
|:----------------:|:--------------------:|
| 0 – 20 | Rendah (*Low*) |
| 21 – 40 | Sedang (*Medium*) |
| 41 – 60 | Tinggi (*High*) |
| 61 – 80 | Sangat Tinggi (*Very High*) |
| 81 – 100 | Overload (*Critical*) |

### 2.2. Work Sampling

Work sampling adalah teknik observasi insidental (*instantaneous sampling*) untuk menentukan proporsi waktu yang dihabiskan pekerja pada berbagai kategori aktivitas. Aditya.R & Putra (2024) mengintegrasikan work sampling dengan NASA-TLX untuk memberikan gambaran kuantitatif komprehensif. Probabilitas aktivitas $k$ diestimasi sebagai:

$$p_k = \frac{n_k}{N}$$

dengan *confidence interval* pada tingkat signifikansi $\alpha$:

$$CI_{p_k} = p_k \pm Z_{\alpha/2} \sqrt{\frac{p_k(1-p_k)}{N}}$$

di mana $N$ adalah total jumlah observasi dan $n_k$ adalah jumlah observasi pada aktivitas $k$. Jumlah sampel minimum yang diperlukan untuk akurasi tertentu $S$ (dalam %) dihitung dengan:

$$N_{\min} = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{S^2}$$

Untuk $p = 0.5$ (kondisi paling konservatif), $Z_{0.05} = 1.96$, dan $S = 5\%$:

$$N_{\min} = \frac{1.96^2 \cdot 0.5 \cdot 0.5}{0.05^2} = \frac{0.9604}{0.0025} \approx 384 \text{ observasi}$$

### 2.3. Model Integratif Beban Kerja Mental-Fisik

Berdasarkan kerangka yang dikembangkan Rafi & Putra (2024), kami memformulasikan *Mental Workload Index* (MWI) yang menggabungkan skor NASA-TLX dengan data work sampling:

$$\text{MWI} = \alpha \cdot \text{TLX}_{\text{Weighted}} + \beta \cdot \sum_{k \in \mathcal{C}_{\text{cog}}} p_k \cdot \tau_k$$

di mana:
- $\alpha, \beta$ adalah konstanta kalibrasi (umumnya $\alpha = 0.7$, $\beta = 0.3$ untuk operator logistik)
- $\mathcal{C}_{\text{cog}}$ adalah himpunan aktivitas yang bersifat kognitif-intensif (sortirasi, verifikasi alamat, komunikasi dengan customer)
- $\tau_k$ adalah *complexity multiplier* aktivitas $k$ yang dikalibrasi berdasarkan *time-on-task* dan *error rate*

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur pengukuran beban kerja yang diadopsi dari Rafi & Putra (2024) serta Aditya.R & Putra (2024) mengikuti *Standard Operating Procedure* berikut:

```
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 1: PREPARASI & PEMILIHAN SAMPEL                      │
│ - Tentukan populasi pekerja target                          │
│ - Hitung N_sample dengan rumus Slovin:                      │
│   n = N / (1 + N·e²)  dengan e = 0.05                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 2: BRIEFING & KALIBRASI INSTRUMEN                    │
│ - Briefing responden ttg 6 dimensi NASA-TLX (15 menit)    │
│ - Latihan pengisian kuesioner pada 2 skenario dummy       │
│ - Verifikasi pemahaman skala 0-100                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 3: WORK SAMPLING (Pengamatan Insidental)             │
│ - Random round observation setiap 60 detik (atau 90 detik)│
│ - Klasifikasikan aktivitas ke dalam taksonomi kerja        │
│ - Durasi minimum 5 hari kerja @ 8 jam/shift                │
│ - Catat: kode aktivitas, waktu, ID observer                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 4: PENGISIAN NASA-TLX (Post-Task)                    │
│ - Dalam 5-10 menit setelah shift berakhir                  │
│ - Responden isi 6 subskala + 15 pair-wise comparisons      │
│ - Jaminan anonimitas untuk mengurangi social desirability   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 5: ANALISIS DATA & PEMBOBOTAN                        │
│ - Hitung w_i dari pair-wise comparison                     │
│ - Hitung TLX_Weighted per responden                        │
│ - Uji normalitas (Shapiro-Wilk), homogenitas (Levene)      │
│ - Uji beda: ANOVA atau Kruskal-Wallis tergantung asumsi   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 6: PEMETAAN KE KATEGORI & REKOMENDASI                │
│ - Plot TLX_Weighted ke dalam 5 kategori (tabel 2.1)        │
│ - Identifikasi subskala dominan (max w_i × r_i)            │
│ - Rekomendasi: redistribusi tugas, rotasi, redesign rute  │
└─────────────────────────────────────────────────────────────┘
```

**Standar Referensi:** Prosedur ini mengikuti pedoman *Human Factors and Ergonomics Society* (HFES) untuk pengukuran subjective workload dan *International Labour Organization* (ILO) Recommendation No. 170 concerning Safety in the Use of Chemicals at Work — yang meskipun awalnya untuk konteks K3 kimia, menjadi rasional untuk *risk assessment* beban kerja berkelanjutan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Profil Kasus

Berdasarkan skenario yang dirancang mengikuti karakteristik responden Rafi & Putra (2024), kami mengandaikan sebuah *sortation hub* Shopee Express di Jabodetabek dengan parameter berikut:

- **Populasi kurir partner:** $N = 80$ orang
- **Sampel (Slovin, $e = 0.05$):** $n = \frac{80}{1 + 80 \cdot 0.0025} = \frac{80}{1.2} \approx 67$ responden
- **Periode observasi:** 5 hari kerja (Senin–Jumat), 1 shift = 8 jam

### 4.2. Data Mentah NASA-TLX (Contoh 1 Responden)

Misalkan seorang kurir partner "B-023" memberikan skor mentah dan hasil pair-wise comparison sebagai berikut:

| Subskala ($i$) | Raw Score ($r_i$) | Wins ($w_i^{\text{raw}}$) |
|:--------------:|:-----------------:|:-------------------------:|
| Mental Demand | 75 | 4 |
| Physical Demand | 50 | 2 |
| Temporal Demand | 85 | 3 |
| Performance | 30 | 0 |
| Effort | 70 | 4 |
| Frustration | 60 | 2 |
| **Total** | **370** | **15** |

### 4.3. Perhitungan Weighted TLX

**Langkah 1:** Hitung raw TLX:
$$\text{RTLX} = 75 + 50 + 85 + 30