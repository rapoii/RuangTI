# 2424 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Gudang Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada 2030 (Bain & Company, 2023) telah mendorong ekspansi masif sektor *e-commerce* dan pada gilirannya menciptakan permintaan luar biasa terhadap layanan logistik *last-mile*. Shopee Express, sebagai salah satu pilar ekosistem logistik Shopee yang melayani jutaan transaksi harian, mengandalkan ribuan *partner* (mitra kurir) yang beroperasi di bawah tekanan multi-dimensional: target pengiriman harian, ketidakpastian alamat, fluktuasi volume pesanan musiman (Harbolnas, Ramadan, dan 12.12), serta eksposur langsung terhadap pelanggan. Dalam studi yang dilakukan oleh Rafi dan Putra (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)), fenomena ini diinvestigasi secara kuantitatif melalui pengukuran **beban kerja mental (mental workload)** mitra kurir dengan menggunakan instrumen standar internasional NASA-TLX (Task Load Index). Studi tersebut berangkat dari premis bahwa kelelahan mental, *decision fatigue*, dan *cognitive overload* merupakan kontributor utama terhadap kesalahan rute, keterlambatan pengiriman, *drop-out* mitra, dan kecelakaan kerja di lapangan.

Signifikansi ekonomis dari isu ini tidak dapat dipandang sebelah mata. Berdasarkan data internal Shopee yang dirujuk oleh Rafi & Putra (2024), rata-rata mitra Shopee Express di kota metropolitan seperti Jakarta, Surabaya, dan Medan menangani 80–120 paket per hari dengan jendela waktu pengiriman 8–10 jam. Beban kognitif ini diperparah oleh aplikasi *driver-partner* yang memerlukan pemrosesan informasi simultan: optimasi rute, verifikasi OTP, scan barcode, komunikasi pelanggan melalui *chat*, serta penyelesaian sengketa pengiriman. Tanpa pengukuran beban kerja yang valid, perusahaan tidak memiliki basis ilmiah untuk merumuskan kebijakan rotasi shift, insentif berbasis risiko, atau redistribusi armada. Studi Aditya.R dan Putra (DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) selanjutnya memperluas kerangka analisis dengan mengintegrasikan **Work Sampling** — sebuah metode observasi acak berbasis probabilitas — untuk memetakan distribusi proporsi aktivitas operator gudang, sehingga diperoleh gambaran holistik yang menggabungkan dimensi kuantitatif (alokasi waktu) dan kualitatif (persepsi beban kerja).

Urgensi rekayasa dari kedua studi ini semakin kuat ketika dikaitkan dengan regulasi Keselamatan dan Kesehatan Kerja (K3) Indonesia, khususnya Permenaker No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja, yang secara eksplisit menuntut identifikasi faktor ergonomis dan psikososial. Pengukuran NASA-TLX memungkinkan perusahaan mematuhi mandat regulasi tersebut dengan bukti empiris yang *defensible*. Lebih jauh, hasil pengukuran beban kerja dapat di-*feed* ke dalam *decision support system* (DSS) untuk *dynamic workforce planning* — sebuah pendekatan yang mulai diadopsi oleh platform *gig economy* global seperti Gojek, Grab, dan Tokopedia. Dalam konteks inilah dokumen Knowledge Base Modul 2424 disusun untuk memberikan landasan teoretis, prosedur operasional, dan contoh kuantitatif yang dapat diadopsi oleh praktisi Teknik Industri, manajer operasional, dan konsultan ergonomi di Indonesia.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Metode NASA-TLX (Task Load Index)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh Hart dan Staveland (1988) di NASA Ames Research Center untuk mengukur beban kerja subjektif operator dalam sistem manusia-mesin. Instrumen ini mengukur beban kerja pada enam dimensi yang dinyatakan oleh responden dalam skala 0–100 (skala *line analog* berskala garis 20 cm dengan 21 titik):

1. **Kebutuhan Mental (*Mental Demand* — MD):** tingkat aktivitas kognitif dan persepsi yang diperlukan.
2. **Kebutuhan Fisik (*Physical Demand* — PD):** tingkat aktivitas fisik yang diperlukan.
3. **Kebutuhan Temporal (*Temporal Demand* — TD):** tingkat tekanan waktu yang dirasakan.
4. **Performansi (*Performance* — PE):** tingkat keberhasilan responden dalam menyelesaikan tugas (skor rendah = persepsi keberhasilan rendah).
5. **Upaya (*Effort* — EF):** tingkat usaha mental dan fisik yang dikeluarkan untuk mencapai tingkat performansi.
6. **Frustasi (*Frustration* — FR):** tingkat perasaan tidak nyaman, stres, dan kurangnya motivasi.

### 2.2. Formulasi Weighted Workload (WWL)

Tidak seperti skor rata-rata sederhana, NASA-TLX menerapkan **proses pembobotan** melalui 15 perbandingan berpasangan (*pairwise comparison*) antar dimensi. Setiap perbandingan menghasilkan *vote* pada dimensi yang dianggap lebih berkontribusi terhadap beban kerja. Bobot akhir tiap dimensi $w_i$ dihitung sebagai:

$$w_i = \frac{\text{jumlah vote untuk dimensi } i}{15}, \quad \text{dengan } \sum_{i=1}^{6} w_i = 1$$

**Total Weighted Workload (TWL)** kemudian dihitung menggunakan persamaan:

$$\boxed{TWL = \sum_{i=1}^{6} w_i \times r_i = w_{MD} \cdot r_{MD} + w_{PD} \cdot r_{PD} + w_{TD} \cdot r_{TD} + w_{PE} \cdot r_{PE} + w_{EF} \cdot r_{EF} + w_{FR} \cdot r_{FR}}$$

di mana $r_i$ adalah *raw score* (0–100) dan $w_i$ adalah bobot ternormalisasi. Nilai TWL berkisar antara 0–100 dan diklasifikasikan ke dalam empat kategori (Hart, 2006):

| Rentang TWL | Kategori Beban Kerja |
|-------------|----------------------|
| 0 – 20 | Rendah (*Low*) |
| 21 – 40 | Sedang (*Moderate*) |
| 41 – 60 | Cukup Tinggi (*Somewhat High*) |
| 61 – 80 | Tinggi (*High*) |
| 81 – 100 | Sangat Tinggi (*Very High*) |

### 2.3. Work Sampling

Work Sampling adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan pada berbagai aktivitas melalui pengamatan acak instan (*instantaneous random observation*). Ukuran sampel minimum $N$ ditentukan oleh rumus:

$$N = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{E^{2}}$$

di mana $Z_{\alpha/2}$ adalah nilai kritis distribusi normal (umumnya 1,96 untuk tingkat kepercayaan 95%), $p$ adalah proporsi aktivitas yang diestimasi, dan $E$ adalah *margin of error* yang dapat diterima. Setelah pengumpulan data, proporsi aktivitas ke-$k$ diestimasi sebagai:

$$\hat{p}_k = \frac{n_k}{N}, \quad \text{dengan batas kepercayaan } \hat{p}_k \pm Z_{\alpha/2}\sqrt{\frac{\hat{p}_k(1-\hat{p}_k)}{N}}$$

### 2.4. Uji Validitas dan Reliabilitas

Untuk memastikan validitas konstruk NASA-TLX, Rafi & Putra (2024) merekomendasikan pengujian Cronbach's Alpha ($\alpha$) dengan formula:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma_{Y_i}^{2}}{\sigma_{X}^{2}}\right)$$

di mana $k$ adalah jumlah item, $\sigma_{Y_i}^{2}$ adalah varians skor tiap item, dan $\sigma_{X}^{2}$ adalah varians skor total. Nilai $\alpha \geq 0,70$ menunjukkan reliabilitas yang dapat diterima (Nunnally, 1978).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operisional (SOP)

### 3.1. SOP Pengukuran NASA-TLX untuk Mitra Kurir

**Tahap 1 — Persiapan dan Sampling**
1. Tentukan populasi mitra kurir Shopee Express per hub (misal: 250 mitra).
2. Hitung ukuran sampel minimum menggunakan rumus Slovin: $n = N/(1+N e^2)$ dengan $e = 0,05$, menghasilkan $n \geq 154$ responden.
3. Siapkan kuesioner NASA-TLX dalam versi cetak atau digital (Google Form) yang telah di-*pre-test* pada 10 mitra untuk validasi bahasa.

**Tahap 2 — Pengumpulan Data**
1. Responden diminta menilai 6 dimensi menggunakan *line analog scale* 0–100 terhadap shift kerja terakhirnya (8 jam).
2. Responden melakukan 15 perbandingan berpasangan antar label dimensi.

**Tahap 3 — Perhitungan Bobot dan Skor**
1. Hitung jumlah vote tiap dimensi dari 15 pairwise comparison.
2. Konversi vote menjadi bobot $w_i$.
3. Kalikan bobot dengan *raw score* masing-masing dimensi.
4. Jumlahkan seluruh produk untuk memperoleh TWL individu.

**Tahap 4 — Analisis Statistik**
1. Uji normalitas (Shapiro-Wilk) untuk menentukan uji parametrik/non-parametrik.
2. Bandingkan TWL antar shift (pagi/siang/malam) menggunakan ANOVA atau Kruskal-Wallis.
3. Uji korelasi TWL dengan variabel demografis (usia, pengalaman) menggunakan Pearson/Spearman.

### 3.2. SOP Work Sampling untuk Operator Gudang (Aditya.R & Putra, 2024)

1. **Definisikan kategori aktivitas** (misalnya: *picking*, *packing*, *putaway*, *idle*, *break*).
2. **Tentukan jumlah pengamatan** menggunakan rumus pada §2.3 dengan $p=0,5$ (konservatif), $E=0,05$: $N \geq 384$ observasi.
3. **Buat jadwal observasi acak** (random route + random time) untuk menghindari bias periodik.
4. **Lakukan pengamatan instan** (durasi 0 detik, hanya rekam aktivitas pada momen pengamatan) selama 5–10 hari kerja.
5. **Hitung proporsi** $\hat{p}_k$ per kategori dan **uji chi-square goodness-of-fit** untuk memverifikasi keseragaman distribusi.

### 3.3. Diagram Alir Integratif

```
[Mulai] → [Identifikasi Unit Analisis] → [Tentukan Metode (NASA-TLX / Work Sampling / Keduanya)]
       → [Sampling (Slovin / Rumus N)] → [Pengumpulan Data]
       → [Perhitungan Bobot & Skor] → [Uji Statistik]
       → [Klasifikasi TWL] → [Rekomendasi Ergonomi]
       → [Implementasi (Rotasi, Penambahan Armada, Redesain Aplikasi)]
       → [Monitoring & Review Berkala] → [Selesai]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus

Sebuah hub Shopee Express di Tangerang memiliki 200 mitra kurir. Studi kasus ini mengambil sampel 30 mitra (diambil secara *stratified random* berdasarkan shift). Berikut adalah data ringkasan hasil NASA-TLX yang diekstrapolasi dari tipikal pola yang ditemukan Rafi & Putra (2024) untuk **shift siang (12.00–20.00)**.

### 4.2. Data Input

Tabel berikut menunjukkan *raw score* rata-rata (skala 0–100) dan jumlah vote dari 15 pairwise comparison untuk masing-masing dimensi:

| Dimensi ($i$) | Simbol | Raw Score ($\bar{r}_i$) | Jumlah Vote | Bobot ($w_i$) |
|---|---|---|---|---|
| Mental Demand | MD | 78 | 12 | 12/15 = 0,80 |
| Physical Demand | PD | 65 | 9 | 9/15 = 0,60 |
| Temporal Demand | TD | 82 | 13 | 13/15 ≈ 0,87 |
| Performance | PE | 35 | 4 | 4/15 ≈ 0,27 |
| Effort | EF |