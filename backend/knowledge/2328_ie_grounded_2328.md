# 2328 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia telah mengalami ekspansi eksponensial sejak pandemi COVID-19, dengan nilai transaksi bruto (*Gross Merchandise Value*/GMV) menembus lebih dari USD 53 miliar pada 2023 dan proyeksi terus meningkat pada tahun-tahun berikutnya (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)). Dalam arsitektur rantai pasok digital tersebut, Shopee Express sebagai salah satu anak perusahaan *last-mile delivery* milik PT Shopee International Indonesia mempekerjakan ribuan *partner* kurir yang beroperasi di gudang sortir (*sortation hub*) dan rute distribusi lintas kota. Karakteristik operasional mereka sangat unik: paparan terhadap target harian yang agresif, fluktuasi volume parcel musiman (peak season Harbolnas, Ramadan, dan 11.11), rutinitas *picking-packing-loading* yang repetitif namun menuntut akurasi tinggi, serta interaksi langsung dengan aplikasi *driver-partner* yang menjadi sumber *cognitive load* tambahan.

Menurut Rafi & Putra (2024), beban kerja (*workload*) bukan semata variabel fisik, melainkan konstruk multidimensional yang mencakup komponen mental, temporal, dan frustasi. Studi-studi ergonomis kognitif menunjukkan bahwa kurir yang mengalami *mental overload* kronis memiliki risiko *human error* 2,3–3,1 kali lebih tinggi pada proses sortir dan pengiriman, yang langsung berkorelasi dengan *return rate*, *customer complaint*, dan depresiasi *service-level agreement* (SLA). Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat argumentasi tersebut dengan membuktikan bahwa kombinasi *work sampling* dan NASA-TLX mampu memetakan tidak hanya intensitas beban mental tetapi juga *time-allocation pattern* operator gudang—dua variabel yang selama ini diperlakukan terpisah dalam literatur klasik *methods engineering*.

Urgensi riset ini diperkuat oleh fakta bahwa *turnover intention* mitra kurir Shopee Express di Indonesia dilaporkan mencapai 28–35% per tahun (Rafi & Putra, 2024), sebuah angka yang secara langsung menggerus biaya rekrutmen, pelatihan, dan kualitas layanan. Tanpa instrumentasi kuantitatif yang valid untuk mengukur *subjective workload*, keputusan manajerial terkait *routing*, *shift scheduling*, dan *task allocation* menjadi bias intuisi. Oleh karena itu, adopsi NASA-TLX—sebuah instrumen psikometrik yang dikembangkan oleh Human Performance Group NASA Ames Research Center (Hart & Staveland, 1988) dan telah divalidasi lintas-budaya—menjadi solusi metodologis yang paling adaptif untuk konteks sosio-teknis Indonesia. Paper Rafi & Putra (2024) berhasil mengontekstualisasikan instrumen tersebut ke dalam realitas operasional Shopee Express, sementara Aditya & Putra (2024) memperluas applicability-nya ke operator gudang melalui integrasi dengan work sampling, menghasilkan kerangka analisis beban kerja yang holistik dan *actionable* bagi praktisi Teknik Industri.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen multidimensi yang mengukur *subjective workload* melalui enam subskala, yang dalam versi Bahasa Indonesia sering dinotasikan sebagai berikut (Rafi & Putra, 2024):

1. **Kebutuhan Mental (KM)** – *Mental Demand*: jumlah aktivitas kognitif (mengingat, memutuskan, menghitung) yang diperlukan.
2. **Kebutuhan Fisik (KF)** – *Physical Demand*: jumlah aktivitas fisik (mengangkat, mendorong, mengangkut) yang diperlukan.
3. **Kebutuhan Temporal (KT)** – *Temporal Demand*: tingkat tekanan waktu yang dirasakan.
4. **Kinerja (KJ)** – *Performance*: pencapaian tujuan任务 (terbalik-diskor; skor rendah = kinerja tinggi).
5. **Upaya (US)** – *Effort*: jumlah usaha mental/fisik untuk mencapai tingkat kinerja.
6. **Frustasi (FR)** – *Frustration*: tingkat irritasi, stres, dan ketidaknyamanan selama任务.

### 2.1 Raw NASA-TLX Score

Pada tahap pertama, responden memberikan skor mentah (*raw TLX*, $R_{TLX}$) pada rentang unipolar 0–100 untuk setiap subskala. Skor agregat mentah didefinisikan sebagai:

$$R_{TLX} = KM + KF + KT + KJ + US + FR$$

dengan rentang teoretis $0 \leq R_{TLX} \leq 600$. Meskipun mudah dihitung, skor mentah mengasumsikan keenam subskala memiliki bobot setara, padahal secara empiris kontribusi relatifnya berbeda untuk setiap tipe任务 (Hart, 2006; Rafi & Putra, 2024).

### 2.2 Pairwise Comparison dan Weighting

Untuk memperoleh bobot (*weight*, $w_i$) setiap subskala, digunakan prosedur *paired comparison* yang membandingkan keenam dimensi secara berpasangan (15 pasangan). Setiap pasangan yang "menang" diberi skor 1. Bobot subskala $i$ dinormalisasi:

$$w_i = \frac{p_i}{\sum_{k=1}^{6} p_k}, \quad \sum_{i=1}^{6} w_i = 1$$

dengan $p_i$ = jumlah kemenangan subskala $i$ pada matriks perbandingan berpasangan. Pada paper Rafi & Putra (2024), bobot yang dilaporkan untuk mitra kurir Shopee Express adalah: $w_{KM}=0,30$, $w_{KF}=0,07$, $w_{KT}=0,33$, $w_{KJ}=0,07$, $w_{US}=0,13$, $w_{FR}=0,10$.

### 2.3 Weighted TLX (Final Score)

Skor akhir NASA-TLX (*Weighted TLX*, $W_{TLX}$) yang dinormalisasi pada rentang 0–100 dihitung melalui:

$$W_{TLX} = \frac{\sum_{i=1}^{6} w_i \cdot s_i}{15} \times 100$$

dengan $s_i$ = skor mentah subskala $i$ dan pembagi 15 merujuk pada jumlah pasangan perbandingan. Nilai $W_{TLX}$ selanjutnya dikategorikan berdasarkan *cut-off* yang digunakan Rafi & Putra (2024): **Rendah** ($0 \leq W_{TLX} < 20$), **Sedang** ($20 \leq W_{TLX} < 40$), **Cukup Tinggi** ($40 \leq W_{TLX} < 60$), **Tinggi** ($60 \leq W_{TLX} < 80$), dan **Sangat Tinggi** ($80 \leq W_{TLX} \leq 100$).

### 2.4 Work Sampling dan Tingkat Aktivitas

Aditya & Putra (2024) mengintegrasikan NASA-TLX dengan *work sampling*, di mana aktivitas operator diamati secara acak pada interval $\Delta t$ tetap selama periode $T$. Proporsi waktu untuk kategori aktivitas $j$ adalah:

$$P_j = \frac{n_j}{N}, \quad \sum_{j=1}^{m} P_j = 1$$

dengan $n_j$ = jumlah observasi aktivitas $j$ dan $N$ = total observasi. Ukuran sampel minimum untuk tingkat kepercayaan $(1-\alpha)$ dan galat mutlak $E$ adalah:

$$N_{min} = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2}$$

Untuk $\alpha = 0,05$, $Z_{0,025} = 1,96$, dan $p = 0,5$ (kasus konservatif), maka $N_{min} \approx 1.960$ observasi (Aditya & Putra, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan Shopee Express mengikuti SOP 7-tahap yang diformalisasi oleh Rafi & Putra (2024):

**Tahap 1 — Identifikasi Populasi & Sampling.** Tentukan *job family* (misal: *courier*, *picker*, *packer*) dan ambil sampel acak sederhana $n \geq 30$ (mengikuti teorema limit pusat untuk skor kontinu).

**Tahap 2 — Dimensional Mapping.** Petakan keenam subskala NASA-TLX ke elemen kerja riil mitra kurir: KM → pemindaian barcode + verifikasi alamat; KF → pengangkatan parcel; KT → pencapaian target 120 paket/hari; KJ → *on-time delivery rate*; US → penjagaan konsistensi; FR → interaksi pelanggan sulit.

**Tahap 3 — Instrumen & Pra-Uji.** Gunakan kuesioner bilingual (Indonesia-Inggris), lakukan *pilot study* pada $n=10$ responden untuk menguji *Cronbach's alpha* ($\alpha > 0,70$).

**Tahap 4 — Pengumpulan Data Raw TLX.** Responden menilai keenam subskala pasca-shift pada rentang 0–100.

**Tahap 5 — Pairwise Comparison Matrix.** Responden memilih dimensi yang "lebih dominan memengaruhi beban kerja" dari 15 pasangan. Matriks $6 \times 6$ digunakan untuk menurunkan $w_i$.

**Tahap 6 — Perhitungan Weighted TLX.** Hitung $W_{TLX}$ menggunakan persamaan (3) dan kategorikan hasil.

**Tahap 7 — Integrasi Work Sampling (modifikasi Aditya & Putra, 2024).** Amati aktivitas operator pada interval 1–2 menit selama shift penuh menggunakan formulir *work-sampling* dengan kategori: *productive*, *supportive*, *idle*, *personal*, *delay*. Hitung $P_j$ dan korelasikan dengan skor $W_{TLX}$.

**Arsitektur Teknologi Pendukung.** Implementasi modern mengintegrasikan kuesioner NASA-TLX ke dalam aplikasi *driver-partner* (in-app survey) dengan *push notification* 15 menit sebelum *shift-end*, sehingga *response rate* meningkat dari 64% (paper-based) menjadi 89% (digital) (Rafi & Putra, 2024). Data otomatis tersinkronisasi ke *dashboard* Power BI yang menampilkan *heatmap* beban kerja per-regional dan *trend line* mingguan, memungkinkan manajer operasional melakukan intervensi proaktif.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Divisi *Operations* Shopee Express area Jabodetabek ingin mengevaluasi beban kerja mental mitra kurir pada shift siang (11.00–19.00) selama periode Ramadan. Sampel $n = 5$ responden (ilustrasi). Hasil pengukuran dirangkum pada Tabel 1.

**Tabel 1. Skor Mentah Subskala NASA-TLX (0–100)**

| Responden | KM | KF | KT | KJ | US | FR |
|-----------|----|----|----|----|----|----|
| R1 | 75 | 50 | 85 | 30 | 65 | 55 |
| R2 | 80 | 45 | 90 | 25 | 70 | 60 |
| R3 | 70 | 55 | 80 | 35 | 60 | 50 |
| R4 | 85 | 50 | 88 | 28 | 68 | 58 |
| R5 | 78 | 48 | 82 | 32 | 63 | 52 |

**Bobot dari pairwise comparison** (mengikuti distribusi tipikal Rafi & Putra, 2024 untuk kurir *last-mile*): $w_{KM}=0,30$, $w_{KF}=0,07$, $w_{KT}=0,33$, $w_{KJ}=0,07$, $w_{US}=0,13$, $w_{FR}=0,10$. Verifikasi: $\sum w_i = 0,30+0,07+0,33+0,07+0,13+0,10 = 1,00$ ✓.

**Langkah 1 — Hitung Raw TLX untuk Responden R1:**
$$R_{TLX,1} = 75 + 50 + 85 + 30 + 65 + 55 = 360$$
Skor ini setara