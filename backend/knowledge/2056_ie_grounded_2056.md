# 2056 — Analisis Beban Kerja Mental Karyawan Mitra Shopee Express Menggunakan Metode NASA-TLX dalam Konteks Rekayasa Sumber Daya Manusia Industri Logistik E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri logistik e-commerce di Indonesia mengalami transformasi eksponensial dalam lima tahun terakhir, didorong oleh penetrasi digital masif dan perubahan perilaku konsumsi pasca-pandemi COVID-19. Shopee sebagai salah satu platform *marketplace* terbesar di Asia Tenggara mengandalkan ekosistem *last-mile delivery* yang operasionalnya didukung oleh jaringan mitra Shopee Express—sekelompok pekerja lepas yang bertanggung jawab atas sortir, pengemasan, dan pengiriman paket kepada konsumen akhir. Rafi dan Putra (2024) dalam artikel ilmiahnya yang diterbitkan dengan DOI [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa pekerja mitra Shopee Express menghadapi tekanan operasional yang berlapis: target harian pengiriman, kompleksitas rute urban, fluktuasi volume paket musiman (terutama saat *harbolnas*, Ramadan, dan *flash sale*), serta interaksi langsung dengan pelanggan yang menuntut layanan prima. Situasi ini menciptakan *cognitive overload* yang apabila tidak dikelola secara sistematis akan menurunkan kesejahteraan psikologis pekerja, meningkatkan *human error*, dan pada akhirnya merugikan produktivitas rantai pasok.

Urgensi analisis beban kerja mental pada konteks ini bersifat strategis karena pekerja logistik bukan sekadar operator mekanis, melainkan *knowledge worker* di garis depan yang harus mengambil keputusan taktis—penentuan rute optimal, penanganan klaim, verifikasi *barcode*, hingga komunikasi multi-channel—dalam jendela waktu yang sempit. Studi Aditya dan Putra (2024) dengan DOI [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat basis empiris melalui pengukuran beban kerja operator gudang dengan kombinasi *Work Sampling* dan NASA-TLX, membuktikan bahwa metodologi pengukuran subjektif-berbasis-multidimensi ini layak diterapkan pada konteks operasional gudang dan *sorting center* Indonesia. Kedua paper tersebut membangun argumentasi bahwa *human factors engineering* bukan sekadar pelengkap ergonomik fisik, melainkan pilar fundamental dalam rekayasa sistem industri modern.

Secara ekonomis, biaya turnover pekerja mitra yang tinggi—akibat *burnout* dan kelelahan mental—menggerus margin operasional perusahaan logistik. Oleh karena itu, pengukuran kuantitatif beban kerja mental menggunakan instrumen terstandar seperti NASA-TLX menjadi kebutuhan manajerial yang tidak dapat ditunda. NASA-TLX (*NASA Task Load Index*), yang dikembangkan oleh Hart dan Staveland (1988), telah teruji validitasnya lintas industri dan lintas budaya, menjadikannya instrumen yang tepat untuk mengkuantifikasi fenomena beban kerja mental pekerja Shopee Express. Modul 2056 ini mengintegrasikan temuan Rafi & Putra (2024) dan Aditya & Putra (2024) sebagai basis perancangan sistem pengukuran beban kerja mental yang aplikatif, terukur, dan selaras dengan prinsip-prinsip Teknik Industri.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX mengukur beban kerja berdasarkan enam dimensi yang merepresentasikan konstruksi multidimensi beban kerja. Keenam dimensi tersebut adalah: **Mental Demand (MD)**, **Physical Demand (PD)**, **Temporal Demand (TD)**, **Performance (P)**, **Effort (E)**, dan **Frustration (F)**. Setiap dimensi dievaluasi menggunakan *bipolar Likert-type scale* 0–100, dengan *anchor* deskriptif pada titik-titik tertentu (misalnya 0 = rendah, 50 = sedang, 100 = tinggi). Skor mentah ini kemudian dikombinasikan dengan bobot relatif yang diperoleh melalui prosedur **paired comparison**.

### 2.1. Prosedur *Paired Comparison*

Setiap partisipan diminta membandingkan 15 pasang kombinasi dimensi $(C(6,2) = 15)$. Untuk setiap pasang, partisipan memilih dimensi yang dianggap lebih "dominan" atau "lebih berkontribusi" terhadap beban kerja total dalam tugas spesifik. Hasil *paired comparison* dikonversi menjadi bobot binomial sesuai teori *paired comparison* Thurstone:

$$w_i = \sum_{j \neq i} \mathbb{1}(d_i \succ d_j)$$

di mana $w_i$ adalah bobot dimensi ke-$i$, dan $\mathbb{1}(d_i \succ d_j)$ adalah fungsi indikator yang bernilai 1 jika dimensi $i$ dianggap lebih dominan daripada dimensi $j$, dan 0 sebaliknya. Bobot ini memiliki rentang teoritis $0 \leq w_i \leq 5$ untuk kasus 6 dimensi.

### 2.2. Formulasi Skor NASA-TLX Tertimbang

Setelah bobot dan rating terkumpul, skor NASA-TLX akhir dihitung menggunakan rumus *weighted average*:

$$\text{TLX}_{\text{score}} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15} \times 100$$

di mana $r_i$ adalah rating mentah dimensi ke-$i$ pada skala 0–100, dan $\sum_{i=1}^{6} w_i = 15$ (karena setiap partisipan memilih tepat satu dimensi yang lebih dominan pada setiap 15 pasangan). Skor akhir TLX dinormalisasi ke rentang 0–100 untuk memudahkan interpretasi.

### 2.3. Kategorisasi Beban Kerja

Berdasarkan *benchmark* yang ditetapkan oleh Hart (2006), skor NASA-TLX dikategorikan sebagai berikut:

$$
\text{Kategori} = \begin{cases}
\text{Rendah} & \text{jika } 0 \leq \text{TLX} < 20 \\
\text{Sedang} & \text{jika } 20 \leq \text{TLX} < 40 \\
\text{Agak Tinggi} & \text{jika } 40 \leq \text{TLX} < 60 \\
\text{Tinggi} & \text{jika } 60 \leq \text{TLX} < 80 \\
\text{Sangat Tinggi} & \text{jika } 80 \leq \text{TLX} \leq 100
\end{cases}
$$

### 2.4. Statistik Inferensial Pendukung

Untuk menguji signifikansi perbedaan beban kerja antar-kelompok (misalnya berdasarkan shift, pengalaman kerja, atau jenis tugas), digunakan uji-t independen atau ANOVA satu jalur:

$$t = \frac{\bar{X}_1 - \bar{X}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

dengan *pooled standard deviation*:

$$s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}}$$

di mana $\bar{X}_k$, $s_k^2$, dan $n_k$ masing-masing adalah rata-rata, varians, dan ukuran sampel kelompok ke-$k$.

Untuk analisis reliabilitas instrumen, digunakan **Cronbach's Alpha**:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma_{Y_i}^2}{\sigma_X^2}\right)$$

di mana $k$ adalah jumlah dimensi (6), $\sigma_{Y_i}^2$ adalah varians skor dimensi ke-$i$, dan $\sigma_X^2$ adalah varians skor total. Nilai $\alpha \geq 0{,}70$ dianggap reliabel secara konsistensi internal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX pada konteks pekerja mitra Shopee Express mengikuti *Standard Operating Procedure* (SOP) berikut, yang merujuk pada protokol Rafi & Putra (2024) dan Aditya & Putra (2024):

### 3.1. Tahap Persiapan
1. **Identifikasi populasi dan sampling**: Tentukan populasi pekerja mitra Shopee Express pada satu *sortation hub*. Gunakan teknik *purposive sampling* dengan kriteria inklusi: pengalaman kerja minimal 6 bulan, aktif dalam shift pagi/siang/malam, dan belum menjalani cuti dalam 1 bulan terakhir.
2. **Penetuan ukuran sampel**: Dengan rumus *Slovin*:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = ukuran populasi dan $e$ = margin error (umumnya 5%). Misalnya, untuk $N = 80$, maka $n = 80/(1 + 80 \cdot 0{,}0025) \approx 67$ responden.

3. **Desain kuesioner**: Kuesioner terdiri dari tiga bagian—(a) biodata pekerja, (b) lembar *paired comparison* (15 pasang dimensi), dan (c) lembar rating 0–100 untuk keenam dimensi.

### 3.2. Tahap Pengumpulan Data
1. **Briefing partisipan**: Jelaskan tujuan riset dan prosedur pengisian.
2. **Pelaksanaan *paired comparison***: Minta partisipan memilih satu dimensi yang lebih dominan pada setiap pasang.
3. **Pemberian rating dimensi**: Minta partisipan memberi skor 0–100 untuk masing-masing dimensi dengan mengacu pada *anchor* deskriptif.
4. **Validasi data**: Periksa kelengkapan dan konsistensi respons.

### 3.3. Tahap Analisis
1. Hitung bobot $w_i$ untuk setiap partisipan.
2. Hitung $\text{TLX}_{\text{score}}$ per partisipan.
3. Agregasi pada level kelompok (rata-rata, standar deviasi, median).
4. Uji normalitas data (Shapiro-Wilk).
5. Uji beda antar-kelompok (independent t-test atau Mann-Whitney U sesuai distribusi).
6. Uji reliabilitas (Cronbach's Alpha).
7. Interpretasi manajerial dan rekomendasi rekayasa.

### 3.4. Diagram Alir Proses

```
┌─────────────────────────┐
│ Identifikasi Tugas &    │
│ Populasi Kerja Mitra    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Penentuan Sampel        │
│ (Slovin / Purposive)    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Briefing & Informed     │
│ Consent Partisipan      │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Paired Comparison (15   │
│ pasangan dimensi)       │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Rating Dimensi (skala   │
│ 0–100 untuk 6 dimensi)  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Perhitungan Bobot &     │
│ Skor TLX Tertimbang     │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Analisis Statistik      │
│ (deskriptif & inferensial)│
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│ Interpretasi &          │
│ Rekomendasi Rekayasa    │
└─────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan penerapan NASA-TLX pada pekerja mitra Shopee Express, dilakukan simulasi berbasis data lapangan yang mengikuti desain riset Rafi & Putra (2024). Diambil skenario: **30 responden pekerja mitra Shopee Express** pada sebuah *sortation hub* di kota metropolitan, dengan proporsi 15 pekerja *picker-pack* dan 15 pekerja *delivery rider*.

### 4.1. Input Parameter

Berikut adalah **ringkasan statistik rating dimensi** dari 30 responden (skala 0–100):

| Dimensi | Rata-rata ($\bar{r}_i$) | Std. Deviasi ($s_i$) | Rata-rata Bobot ($\bar{w}_i$) |
|---|---|---|---|
| Mental Demand (MD) | 72,5 | 14,2 | 4,2 |
| Physical Demand (PD) | 65,0 | 18,0 | 2,8 |
| Temporal Demand (TD) | 78,3 | 12,7 | 3,5 |
| Performance (P) | 45,0 | 16,5 | 1,0 |
| Effort (E) | 68,7 | 13,8 | 2,