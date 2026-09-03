# 2856 — Analisis Beban Kerja Mental dan Fisik Operator Logistik E-Commerce dengan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analisis Beban Kerja Mental pada Operator Logistik E-Commerce (Shopee Express) Menggunakan NASA-TLX
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami eksponensialisasi volume transaksi sejak dekade terakhir, dengan Shopee sebagai salah satu *marketplace* dominan yang mengoperasikan anak perusahaan logistik internal bernama **Shopee Express (SPX)**. Rafi & Putra (2024, DOI: 10.21070/ups.9385) menyoroti bahwa *partner* kurir SPX menghadapi tekanan operasional berlapis: fluktuasi pesanan musiman (Harbolnas, Ramadan, akhir tahun), target *same-day delivery*, kenaikan *Service Level Agreement* (SLA), dan kompleksitas rute di megapolitan seperti Jabodetabek. Studi tersebut melakukan pengukuran **beban kerja mental** — bukan sekadar beban fisik — karena pekerjaan kurir modern semakin bersifat *knowledge-intensive*: navigasi GPS dinamis, validasi *barcode*, verifikasi OTP pelanggan, penyelesaian klaim, hingga komunikasi real-time via aplikasi *partner*. Beban kognitif kumulatif ini, jika tidak diukur dan dimitigasi, menurunkan *human reliability*, meningkatkan *human error*, dan memicu *burnout syndrome* yang berujung pada *turnover* mitra.

Aditya & Putra (2024, DOI: 10.21070/ups.11795) melengkapi lanskap tersebut dari sisi hilir rantai pasok — para operator gudang sortasi dan *packing* di *fulfilment center* SPX. Mereka mengintegrasikan dua metode: **Work Sampling** untuk memetakan distribusi aktivitas kerja (proporsi waktu produktif, tunggu, idle, aktivitas tak bernilai tambah), dan **NASA-TLX** untuk menilai persepsi subjektif beban kerja di setiap kategori aktivitas tersebut. Pendekatan integratif ini menjawab kritik klasik bahwa studi beban kerja konvensional hanya mengandalkan satu instrumen sehingga menghasilkan kesimpulan yang bias.

Urgensi ekonomi dari penelitian ini sangat tinggi. Data BPS (2024) menunjukkan sektor kurir dan pergudangan menyumbang >3,2% PDB Indonesia dengan laju pertumbuhan tenaga kerja >8%/tahun. Namun *attrition rate* kurir *last-mile* dilaporkan mencapai 40–60% per tahun di beberapa operator besar, dengan biaya rekrutmen dan pelatihan ulang yang signifikan. Oleh karena itu, kemampuan mengkuantifikasi beban mental menggunakan instrumen terstandar seperti NASA-TLX menjadi kebutuhan strategis bagi *engineering*, *human resources*, dan perancang kebijakan operasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) di NASA Ames Research Center, telah divalidasi pada lebih dari 550 studi. Instrumen ini mengukur **enam subskala** melalui kuesioner dengan *Likert bipolar* 21 titik (0–100):

| Simbol | Subskala | Domain Kognitif/Fisik |
|--------|----------|------------------------|
| $s_{MD}$ | Mental Demand | Pemrosesan informasi, keputusan |
| $s_{PD}$ | Physical Demand | Aktuatorik motorik |
| $s_{TD}$ | Temporal Demand | Tekanan waktu |
| $s_{P}$ | Performance | Pencapaian tujuan (skala *reverse-scored*) |
| $s_{E}$ | Effort | Upaya kognitif/fisik total |
| $s_{F}$ | Frustration | Emosi negatif |

### 2.2 Raw TLX Score

Beban kerja total tanpa pembobotan dihitung sebagai rata-rata keenam subskala:

$$TLX_{raw} = \frac{1}{6}\sum_{i \in \{MD,PD,TD,P,E,F\}} s_i$$

dengan $0 \le s_i \le 100$, sehingga $0 \le TLX_{raw} \le 100$.

### 2.3 Weighted TLX Score

Rafi & Putra (2024) dan Aditya & Putra (2024) sama-sama menggunakan versi **weighted** karena mencerminkan preferensi relatif operator terhadap subskala yang paling memberatkan. Prosedur *pairwise comparison card-sort* menghasilkan 15 pasangan dari 6 subskala. Untuk setiap pasangan, responden memilih subskala yang lebih *contributing* terhadap total beban. Bobot subskala ke-$i$ adalah:

$$w_i = \frac{c_i}{15}, \quad \sum_{i=1}^{6} w_i = 1$$

dengan $c_i$ = jumlah kemenangan subskala $i$ dalam 15 perbandingan berpasangan.

Skor tertimbang kemudian dihitung:

$$TLX_{weighted} = \sum_{i=1}^{6} w_i \cdot s_i$$

### 2.4 Work Sampling — Penentuan Ukuran Sampel

Aditya & Putra (2024) menggunakan *Work Sampling* dengan *random instantaneous observation*. Ukuran sampel minimum untuk presisi tertentu ditentukan oleh:

$$n = \frac{Z_{\alpha/2}^{2} \cdot P(1-P)}{e^2}$$

dengan $Z_{\alpha/2}$ = nilai z tingkat kepercayaan $(1-\alpha)$, $P$ = estimasi proporsi aktivitas, $e$ = *margin of error*.

Proporsi waktu untuk aktivitas $k$:

$$P_k = \frac{x_k}{n} \times 100\%$$

*Standard error* untuk setiap proporsi:

$$SE(P_k) = \sqrt{\frac{P_k(1-P_k)}{n}}$$

*Confidence interval* $100(1-\alpha)\%$:

$$CI_k = P_k \pm Z_{\alpha/2} \cdot SE(P_k)$$

### 2.5 Klasifikasi Beban Kerja

Berdasarkan distribusi empiris pada studi-studi NASA-TLX dalam konteks logistik (Hart, 2006), skor diklasifikasikan sebagai:

- $TLX_{weighted} < 30$: Beban rendah
- $30 \le TLX_{weighted} < 50$: Beban sedang
- $50 \le TLX_{weighted} < 70$: Beban tinggi
- $TLX_{weighted} \ge 70$: Beban sangat tinggi (*overload*)

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis mengikuti **delapan tahap SOP** yang diadopsi oleh Rafi & Putra (2024) serta Aditya & Putra (2024):

**Tahap 1 — Identifikasi Sistem & Populasi:** Tetapkan unit analisis (kurir *last-mile* atau operator gudang), populasi target, dan metode *sampling* (umumnya *purposive sampling* karena akses ke operator).

**Tahap 2 — Desain Instrumen:** Siapkan kuesioner NASA-TLX bilingual (Indonesia-Inggris) yang sudah di-*back-translate* untuk menjamin validitas semantik, serta kartu *pairwise comparison* (15 lembar).

**Tahap 3 — Penentuan Ukuran Sampel Work Sampling:** Gunakan rumus pada Bagian 2.4. Aditya & Putra (2024) menetapkan $Z_{$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
