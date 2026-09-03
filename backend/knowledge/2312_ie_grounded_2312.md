# 2312 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Gudang Menggunakan Metode NASA-TLX Terintegrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analisis Beban Kerja Mental Karyawan Sortasi dan Pengiriman Last-Mile E-Commerce (Shopee Express) serta Operator Gudang dengan NASA-TLX
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*. Peer-Reviewed Journal (Undergraduate Progress Series). DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor *e-commerce* Indonesia memasuki fase masififikasi logistik yang ditandai dengan pertumbuhan *gross merchandise value* (GMV) dua digit dan peningkatan beban operasional *fulfillment center* (FC) serta armada *last-mile*. Shopee Express, sebagai salah satu layanan logistik milik platform Shopee, mengandalkan jaringan *partner* berupa pekerja sortasi, *packing*, dan kurir yang bekerja di bawah tekanan SLA (Service Level Agreement) harian yang sangat ketat. Rafi & Putra (2024) dalam DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa karyawan *partner* Shopee Express tidak hanya menghadapi tuntutan fisik (mengangkat paket, berjalan jauh, mengendarai kendaraan dalam cuaca beragam), tetapi juga tekanan kognitif yang signifikan berupa pemantauan *dashboard* order, pemrosesan *barcode*, pengambilan keputusan rute, hingga interaksi dengan pelanggan yang memiliki ekspektasi pengiriman *same-day*. Ketika beban mental ini tidak diukur secara kuantitatif, perusahaan menghadapi risiko *human error* (salah sortir, paket tertukar, klaim pelanggan) yang berujung pada biaya *reverse logistics* dan penurunan *customer satisfaction score* (CSAT).

Urgensi riset ini diperkuat oleh Aditya.R & Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) yang membuktikan bahwa kombinasi *work sampling* dan NASA-TLX mampu memberikan gambaran dua dimensi beban kerja secara bersamaan — yaitu dimensi fisik-utilisasi waktu (*utilization rate*) dan dimensi kognitif-perceptual (*mental load*). Pendekatan tunggal hanya mengukur satu aspek, sehingga terjadi *under-estimation* terhadap kompleksitas pekerjaan sebenarnya. Di industri 4.0, di mana sistem WMS (*Warehouse Management System*), *handheld scanner*, dan *route optimization algorithm* diterapkan, pekerja manusia menjadi operator pengambilan keputusan tingkat lanjut sehingga NASA-TLX menjadi instrumen yang semakin relevan.

Konteks ekonomis: menurut data internal industri logistik yang dirujuk oleh kedua paper tersebut, biaya tenaga kerja menyumbang 35–45% dari total biaya operasional *fulfillment*. Setiap 1% peningkatan produktivitas operator akibat optimalisasi beban kerja berpotensi menurunkan *cost per parcel* sebesar 0,8–1,2%. Dari sisi *occupational health and safety* (OHS), beban mental berlebih berkorelasi positif dengan kelelahan kerja, stres, dan *burnout* yang diatur dalam UU Ketenagakerjaan No. 13/2003 dan Permenaker No. 5/2018 tentang Keselamatan dan Kesehatan Kerja. Dengan demikian, analisis beban mental bukan hanya isu ergonomis tetapi juga isu kepatuhan regulasi dan keberlanjutan operasional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) dan telah divalidasi secara psikometrik pada lebih dari 500 studi. Instrumen ini mengukur beban kerja subjektif melalui enam dimensi yang masing-masing dievaluasi pada skala *Likert* 0–100 dengan kenaikan 5 poin:

1. **Mental Demand (MD)** — tuntutan aktivitas berpikir, memutuskan, menghitung.
2. **Physical Demand (PD)** — tuntutan aktivitas fisik (mengangkat, berjalan, mengangkut).
3. **Temporal Demand (TD)** — tekanan waktu untuk menyelesaikan tugas.
4. **Performance (P)** — persepsi pekerja terhadap pencapaian target kinerja (skala *terbalik*: skor rendah = kinerja tinggi).
5. **Effort (E)** — tingkat usaha yang dikeluarkan untuk mencapai target.
6. **Frustration (F)** — tingkat perasaan frustrasi, iritasi, atau stres selama bekerja.

### 2.2 Prosedur Penimbangan (*Weighting Procedure*)

NASA-TLX menggunakan *paired comparison* antar keenam dimensi (sebanyak $\binom{6}{2} = 15$ pasangan) untuk menentukan bobot relatif $w_i$ yang merepresentasikan pentingnya setiap dimensi bagi responden:

$$w_i \in \{0, 1, 2, 3, 4, 5\}, \quad \sum_{i=1}^{6} w_i = 15$$

### 2.3 Formula Weighted TLX

Skor total NASA-TLX dihitung sebagai rata-rata terboboti dari keenam dimensi:

$$\text{TLX}_{\text{weighted}} = \frac{\sum_{i=1}^{6} R_i \cdot w_i}{15}$$

di mana $R_i$ adalah skor mentah dimensi ke-$i$ (0–100). Skor ini merepresentasikan *Overall Workload* pada rentang 0–100 dengan kategori interpretasi: 0–20 (sangat rendah), 20–40 (rendah), 40–60 (sedang), 60–80 (tinggi), 80–100 (sangat tinggi).

### 2.4 Work Sampling (Pengambilan Contoh Kerja)

*Work Sampling* adalah teknik observasi acak sesaat (*instantaneous observation*) yang dikembangkan oleh Tippet (1935). Probabilitas seorang operator melakukan aktivitas tertentu diestimasi dari proporsi observasi:

$$P_i = \frac{h_i}{N} \times 100\%$$

dengan $h_i$ = jumlah observasi aktivitas $i$, dan $N$ = total observasi. *Standard error* proporsi dihitung:

$$SE(P_i) = \sqrt{\frac{P_i (100 - P_i)}{N}}$$

Interval kepercayaan 95%:

$$CI_{95\%} = P_i \pm 1{,}96 \cdot SE(P_i)$$

Jumlah pengamatan minimum untuk akurasi $\pm 5\%$ pada tingkat keyakinan 95% adalah:

$$N_{\min} = \frac{4 \cdot p(1-p)}{e^2}$$

Untuk $p = 0{,}5$ dan $e = 0{,}05$: $N_{\min} = \dfrac{4(0{,}25)}{0{,}0025} = 400$ observasi.

### 2.5 Penentuan Waktu Standar dan *Allowance*

*Allowance* total ditentukan dari proporsi waktu non-produktif:

$$A_{\text{total}} = P_{\text{idle}} + P_{\text{personal}} + P_{\text{others}}$$

Waktu standar dihitung dengan rumuan *Methods Time Measurement* (MTM) atau data waktu langsung:

$$T_{\text{std}} = \frac{T_{\text{normal}}}{1 - A_{\text{total}}}$$

### 2.6 Beban Kerja Terintegrasi

Aditya.R & Putra (2024) mengusulkan indeks beban kerja gabungan $W_{integr}$ yang menormalisasi skor NASA-TLX dan utilisasi kerja fisik:

$$W_{integr} = \alpha \cdot \frac{\text{TLX}_{\text{weighted}}}{100} + \beta \cdot \frac{P_{\text{productive}}}{100}$$

dengan $\alpha + \beta = 1$ (umumnya $\alpha = 0{,}6$, $\beta = 0{,}4$). Indeks ini memetakan korelasi antara intensitas mental dan utilisasi fisik operator.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi & Putra (2024) serta Aditya.R & Putra (2024) menyusun SOP sebagai berikut:

**Tahap 1 — Identifikasi Sistem dan Unit Analisis.** Tentukan populasi (operator sortasi, *packing*, kurir *last-mile*, atau operator gudang). Hitung ukuran sampel menggunakan *purposive sampling* dengan $n \geq 30$ untuk menjamin kekuatan statistik uji beda.

**Tahap 2 — Kuesioner NASA-TLX dan *Work Sampling Sheet*.** Siapkan kuesioner NASA-TLX bilingual (Indonesia-Inggris) yang telah di-*pre-test* dengan Cronbach's $\alpha \geq 0{,}70$. Siapkan formulir *work sampling* dengan kategori aktivitas: produktif, idle, menunggu, pribadi, gangguan sistem.

**Tahap 3 — Pengumpulan Data.** Lakukan observasi *work sampling* selama 5–10 hari kerja pada jam acak (stratifikasi *peak* 10.00–14.00 dan *off-peak*). Lakukan survei NASA-TLX pasca-shift dengan validasi konsentrasi responden.

**Tahap 4 — Penentuan Bobot NASA-TLX.** Setiap responden melakukan 15 *paired comparisons*. Bobot $w_i$ ditabulasi dan dinormalisasi sehingga $\sum w_i = 15$.

**Tahap 5 — Perhitungan dan Validasi.** Hitung $\text{TLX}_{\text{weighted}}$, proporsi $P_i$, $SE$, dan $CI$. Validasi dengan uji reliabilitas antar-pengamat (Cohen's $\kappa \geq 0{,}75$).

**Tahap 6 — Analisis Korelasi dan Rekomendasi.** Lakukan analisis korelasi Pearson/Spearman antara skor NASA-TLX, produktivitas, dan durasi shift. Susun rekomendasi: rotasi kerja, redistribusi beban, otomatisasi parsial, *rest break* terstruktur.

```
[