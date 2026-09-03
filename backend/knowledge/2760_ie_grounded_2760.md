# 2760 — Analisis Beban Kerja Mental Operator Logistik Last-Mile E-Commerce Menggunakan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami pertumbuhan eksponensial pascapandemi COVID-19, dengan nilai transaksi bruto (Gross Merchandise Value/GMV) yang diproyeksikan menembus lebih dari USD 130 miliar pada 2026 menurut berbagai riset pasar regional. Shopee, sebagai salah satu *marketplace* dominan di Asia Tenggara, mengandalkan ekosistem mitra pengiriman — Shopee Express Partner — untuk menangani *last-mile delivery* yang merupakan titik kritis rantai pasok karena bersentuhan langsung dengan *Service Level Agreement* (SLA) pengiriman 1–3 hari (*instant–same day delivery*). Dalam konteks operasional ini, mitra kurir Shopee Express menghadapi tekanan multidimensional: volume paket yang fluktuatif mengikuti pola *flash sale* (9.9, 11.11, 12.12), rute pengiriman yang tidak pasti, ekspektasi pelanggan terhadap *real-time tracking*, serta proses verifikasi paket digital melalui aplikasi mobile.

Rafi dan Putra (2024) dalam *peer-reviewed journal* ber-DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa permasalahan yang selama ini luput dari perhatian adalah **beban kerja mental** (*mental workload*) mitra Shopee Express, bukan sekadar beban fisik seperti mengangkat paket. Studi ini berangkat dari hipotesis bahwa ketidakseimbangan antara kapasitas kognitif operator dan tuntutan tugas (*task demands*) dapat menyebabkan kelelahan mental, peningkatan *error rate* pada pemindaian barcode, penurunan kualitas pelayanan, dan pada akhirnya *turnover* mitra yang merugikan stabilitas operasional. Aditya dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas cakupan dengan mengaplikasikan metode NASA-TLX pada operator gudang (*warehouse operator*), menegaskan bahwa persoalan beban kerja mental bersifat **transversal** di seluruh lini operasional logistik — dari *warehouse* hingga *last-mile delivery*.

Urgensi ekonomi dari riset ini terletak pada korelasi antara beban kerja berlebih dengan *Defect Per Million Opportunities* (DPMO) dan *Customer Satisfaction Score* (CSAT). Sebuah paket yang salah rute, terlambat, atau rusak tidak hanya menimbulkan *cost of poor quality* (COPQ) berupa retur dan kompensasi, tetapi juga merusak reputasi platform dalam jangka panjang. Oleh karena itu, pengukuran beban kerja mental menggunakan instrumen tervalidasi seperti **NASA-TLX (Task Load Index)** yang dikembangkan oleh Hart dan Staveland (1988) menjadi kebutuhan strategis bagi perusahaan logistik modern. Studi Rafi dan Putra (2024) secara spesifik melakukan validasi konteks pada mitra Shopee Express di wilayah operasional Indonesia, menjadikan *knowledge base* ini memiliki nilai translasi langsung untuk industri logistik nasional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-TLX sebagai Instrumen Pengukuran Multidimensi

NASA-TLX mengukur beban kerja subjektif pada enam subskala melalui *Likert bipolar scale* 0–20 (atau 0–100 dalam beberapa varian). Keenam subskala tersebut, beserta formulasi skornya, adalah:

1. **Mental Demand (MD)** — aktivitas kognitif: berpikir, memutuskan, menghitung.
2. **Physical Demand (PD)** — aktivitas fisik: mengangkat, mendorong, berjalan.
3. **Temporal Demand (TD)** — tekanan waktu: seberapa cepat ritme tugas.
4. **Performance (PE)** — persepsi pencapaian tujuan tugas (skala invers).
5. **Effort (EF)** — usaha total yang dikeluarkan untuk完成任务.
6. **Frustration (FR)** — tingkat irritasi, stress, demotivasi selama bekerja.

Total beban kerja (*Weighted Workload Score* / WWL) dihitung dengan formula:

$$\text{WWL} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

dengan:
- $w_i \in \{0,1,2,3,4,5\}$ adalah bobot subskala ke-$i$ yang diperoleh dari proses *card-sort pairwise comparison* (15 pasangan untuk 6 subskala, sehingga total pembagi adalah 15),
- $r_i \in [0, 100]$ adalah skor *raw rating* subskala ke-$i$.

### 2.2. Penentuan Bobot melalui *Pairwise Comparison*

Setiap responden diminta memilih subskala yang **lebih dominan** memberikan kontribusi terhadap beban kerja di antara 15 pasangan subskala. Untuk setiap pasangan $(i,j)$ di mana $i > j$ dalam urutan semantik, nilai kontribusi $C_{ij}$ didefinisikan:

$$C_{ij} = \begin{cases} 1 & \text{jika responden memilih } i \\ 0 & \text{jika responden memilih } j \end{cases}$$

Bobot akhir setiap subskala dihitung dengan menjumlahkan kontribusinya terhadap semua subskala lain:

$$w_i = \sum_{j \neq i} C_{ij}, \quad \sum_{i=1}^{6} w_i = 15$$

### 2.3. Klasifikasi Beban Kerja Mental

Berdasarkan acuan yang digunakan Rafi dan Putra (2024), skor WWL diklasifikasikan ke dalam kategori berikut:

$$\text{Kategori} = \begin{cases}
\text{Rendah} & \text{jika } \text{WWL} \in [0, 25) \\
\text{Sedang} & \text{jika } \text{WWL} \in [25, 50) \\
\text{Tinggi} & \text{jika } \text{WWL} \in [50, 75) \\
\text{Sangat Tinggi} & \text{jika } \text{WWL} \in [75, 100]
\end{cases}$$

### 2.4. Work Sampling sebagai Komplementer

Aditya dan Putra (2024) menggunakan *work sampling* untuk memetakan proporsi waktu kerja efektif pada operator gudang. Formulasi proporsi aktivitas adalah:

$$P_i = \frac{n_i}{N}, \quad \sum_{i=1}^{k} P_i = 1$$

dengan $n_i$ adalah jumlah observasi pada kategori aktivitas ke-$i$, dan $N$ adalah total observasi. Untuk ukuran sampel minimal dengan tingkat kepercayaan $(1-\alpha)$ dan galat absolut $E$:

$$N \geq \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2}$$

Dengan $p = 0{,}5$ (konservatif), $Z_{\alpha/2} = 1{,}96$ (tingkat kepercayaan 95%), dan $E = 0{,}05$, maka:

$$N \geq \frac{(1{,}96)^2 \cdot 0{,}25}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

### 2.5. *Overall Workload Index* (OWI) Gabungan

Untuk integrasi temuan dua paper, dapat didefinisikan indeks beban kerja gabungan yang mempertimbangkan dimensi subjektif (NASA-TLX) dan objektif (work sampling):

$$\text{OWI} = \alpha \cdot \text{WWL}_{\text{norm}} + (1-\alpha) \cdot \left(1 - \sum_{i \in \text{produktif}} P_i\right)$$

dengan $\alpha \in [0,1]$ adalah parameter bobot preferensi manajerial, dan $\text{WWL}_{\text{norm}} = \text{WWL}/100$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pengukuran beban kerja mental pada operator Shopee Express mengikuti *Standard Operating Procedure* (SOP) enam tahapan yang diuraikan secara sistematis oleh Rafi dan Putra (2024):

**Tahap 1 — Identifikasi Sistem dan Stakeholder.**
Delimitasi ruang lingkup pada mitra Shopee Express di hub operasional tertentu. Stakeholder utama: kurir partner, dispatcher, manajer hub, dan tim *customer service*. *System boundary* mencakup proses sortir, pemuatan, pengiriman, hingga bukti serah terima (*POD/Proof of Delivery*).

**Tahap 2 — Perancangan Kuesioner NASA-TLX.**
Kuesioner terdiri dari dua bagian: (a) *raw task load* — enam pertanyaan dengan skala bipolar 0–100 yang divisualisasikan sebagai garis kontinum; (b) *card-sort pairwise comparison* — 15 kartu berisi kombinasi dua subskala, responden memilih yang lebih dominan. Sebelum deploy, kuesioner diuji validitas konstruk melalui *Principal Component Analysis* (PCA) dan reliabilitas dengan *Cronbach's alpha* ($\alpha > 0{,}70$).

**Tahap 3 — Pengambilan Data Primer.**
Sampel responden dipilih dengan teknik *purposive sampling* pada kurir yang telah memiliki pengalaman minimal 3 bulan. Pengisian kuesioner dilakukan dalam dua waktu: setelah shift pagi dan setelah shift siang untuk menangkap variabilitas beban akibat volume paket.

**Tahap 4 — Penentuan Bobot dan Skor.**
Bobot dihitung menggunakan rumus $w_i$ pada Sub-bagian 2.2. Skor total $\text{WWL}$ dihitung dan dipetakan ke kategori beban kerja.

**Tahap 5 — Analisis Komparatif.**
Dilakukan *cross-tabulation* antara skor WWL dengan variabel demografis (usia, masa kerja, jenis kendaraan, area operasi). Uji beda (*Independent Sample t-Test* atau *Mann-Whitney U* jika asumsi normalitas tidak terpenuhi) digunakan untuk menentukan signifikansi perbedaan beban antar segmen.

**Tahap 6 — Rekomendasi dan Validasi.**
Rekomendasi perbaikan disusun berdasarkan subskala dengan skor tertinggi, lalu divalidasi melalui simulasi skenario sebelum diterapkan secara luas.

**Diagram alir proses:**

```
[Identifikasi Sistem] → [Desain Kuesioner] → [Uji Validitas & Reliabilitas]
            ↓
[Pengambilan Data] → [Perhitungan Bobot w_i] → [Perhitungan WWL]
            ↓
[Klasifikasi Beban] → [Analisis Komparatif] → [Rekomendasi Perbaikan]
            ↓
[Validasi Simulasi] → [Implementasi & Monitoring]
```

Aditya dan Putra (2024) menambahkan bahwa integrasi dengan *work sampling* memungkinkan triangulasi: data subjektif (NASA-TLX) dikonfirmasi dengan data objektif berupa proporsi waktu yang dihabiskan pada berbagai kategori aktivitas (*productive*, *supportive*, *unproductive*). Pendekatan ini mengurangi bias respons yang umum terjadi pada kuesioner self-report.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Data Hipotetis Berdasarkan Karakteristik Studi Rafi & Putra (2024)

Sebuah hub Shopee Express di wilayah urban dengan 8 mitra kurir aktif menjadi objek studi. Tujuh mitra kurir berhasil mengisi kuesioner NASA-TLX lengkap (sesuai tipikal *response rate* riset). Tabel berikut merangkum skor *raw* dan bobot hasil *card-sort* agregat.

**Tabel 1. Skor Raw dan Bobot NASA-TLX Agregat**

| Subskala | Simbol | Rata-rata Skor $r_i$ | Bobot $w_i$ | $w_i \cdot r_i$ |
|----------|--------|----------------------|-------------|-----------------|
| Mental Demand | MD | 78 | 4 | 312 |
| Physical Demand | PD | 65 | 3 | 195 |
| Temporal Demand | TD | 82 | 4 | 328 |
| Performance | PE | 42 | 1 | 42 |
| Effort | EF | 70 | 2 | 140 |
| Frustration | FR | 68 | 1 | 68 |
| **Total** | — | — | **15** | **1085** |

**Perhitungan WWL:**

$$\text{WWL} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15} = \frac{1085}{15} = 72{,}33$$

**Interpretasi:** Skor 72,33 masuk kategori **Tinggi** ($50 \leq \text{WWL} < 75$). Subskala TD dan MD menjadi kontributor dominan beban mental, mengindikasikan tekanan waktu (*temporal pressure*) dan tuntutan kognitif (misalnya validasi barcode, navigasi rute, komunikasi dengan pelanggan) merupakan sumber utama kelelahan mental.

### 4.2. Perhitungan Work Sampling Pelengkap (Merujuk Aditya & Putra, 2024)

Pada pengukuran work sampling terhadap 385 observasi aktivitas mitra kurir, dihasilkan distribusi berikut:

| Kategori Aktivitas | $n_i$ | $P_i$ |
|--------------------|-------|-------|
| Pengiriman/Pengantaran | 215 | 0,559 |
| Sortir di Hub | 62 | 0,161 |
| Istirahat | 38 | 0,099 |
| Pemuatan Kendaraan | 35 | 0,091 |
| Administrative (input data ke aplikasi) | 25 | 0,065 |
| Menunggu/Delay | 10 | 0,026 |
| **Total** | **385** | **1,000** |

Proporsi waktu produktif ($P_{\text{produktif}} = 0{,}559 + 0{,}091 = 0{,}650