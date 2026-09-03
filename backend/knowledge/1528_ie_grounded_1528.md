# 1528 — Analisis Beban Kerja Mental Operator Logistik E-Commerce: Aplikasi NASA-TLX pada Ekosistem Shopee Express dan Integrasi Work Sampling di Gudang Sortir

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara mengalami hiper-pertumbuhan yang didorong oleh akselerasi digital pascapandemi, dengan Indonesia menjadi salah satu pasar terbesar di kawasan ini. Shopee, sebagai salah satu *marketplace* dominan, mengandalkan **Shopee Express (SPX)** sebagai tulang punggung pengiriman *last-mile* yang beroperasi dengan model kemitraan (*partner*). Model ini memungkinkan ekspansi cepat tanpa investasi armada penuh, namun menimbulkan tantangan ergonomi kognitif yang signifikan karena mitra kurir bekerja dalam tekanan waktu tinggi, target harian yang terukur secara algoritmik, serta eksposur langsung terhadap pelanggan. Rafi dan Putra (2024) dalam studinya yang dipublikasikan pada jurnal *peer-reviewed* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental mitra Shopee Express belum pernah diukur secara kuantitatif menggunakan instrumen terstandar, padahal variabel ini berkorelasi langsung terhadap *failure rate* pengiriman, kecelakaan kerja, dan *burnout*.

Urgensi ekonomis dari permasalahan ini dapat dihitung secara kasar: jika sebuah hub Shopee Express mengelola 200 mitra aktif dengan rata-rata 120 paket/hari, dan peningkatan 10% beban mental kumulatif menurunkan akurasi pengiriman dari 96% menjadi 92%, maka kerugian berupa *re-delivery cost*, kompensasi pelanggan, dan penurunan rating mitra (yang memengaruhi alokasi order) dapat melampaui Rp150 juta per bulan per hub pada musim puncak seperti Harbolnas. Studi Aditya.R dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) menambahkan dimensi penting dengan mengintegrasikan metode **Work Sampling** pada operator gudang, sehingga memungkinkan identifikasi bukan hanya *seberapa berat* beban mental yang dirasakan, tetapi juga *proporsi waktu* yang dihabiskan pada aktivitas-aktivitas pemicu beban tersebut. Sinergi dua metode ini menjadi cetak biru (*blueprint*) bagi praktisi Teknik Industri untuk melakukan diagnosis ergonomis kognitif secara end-to-end pada rantai pasok digital.

## 2. Landasan Teori & Formulasi Matematis

Instrumen utama yang digunakan adalah **NASA Task Load Index (NASA-TLX)** yang dikembangkan oleh Hart dan Staveland (1988), terdiri atas enam subskala yang dinilai menggunakan *bipolar Likert scale* 0–100:

1. **Mental Demand (MD)** — tuntutan aktivitas kognitif/persepsi
2. **Physical Demand (PD)** — tuntutan aktivitas fisik
3. **Temporal Demand (TD)** — tekanan waktu
4. **Performance (PE)** — persepsi pencapaian tujuan (skor rendah = keberhasilan tinggi)
5. **Effort (EF)** — usaha yang dikeluarkan untuk mencapai kinerja
6. **Frustration (FR)** — tingkat frustrasi/iritasi

Tahap pertama adalah penilaian bobot melalui 15 *pairwise comparison* antar dimensi. Setiap perbandingan menghasilkan satu pemenang dengan skor 1 dan satu pecundang skor 0. Bobot setiap dimensi $w_i$ adalah jumlah kemenangan dari lima perbandingan yang melibatkannya:

$$w_i = \sum_{j=1, j \neq i}^{6} x_{ij}, \quad \text{dengan } x_{ij} \in \{0,1\} \text{ dan } \sum_{i=1}^{6} w_i = 15$$

Tahap kedua adalah pemberian rating mentah $r_i \in [0,100]$ untuk setiap dimensi. Skor **Weighted TLX** dihitung sebagai rata-rata terboboti:

$$\text{TLX}_{\text{weighted}} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

atau dalam bentuk ekuivalen menggunakan rata-rata rating sederhana (**Raw TLX**):

$$\text{TLX}_{\text{raw}} = \frac{1}{6} \sum_{i=1}^{6} r_i$$

Rafi dan Putra (2024) menerapkan ambang batas interpretasi sebagai berikut: $\text{TLX} \leq 40$ (beban rendah, dapat diterima), $40 < \text{TLX} \leq 60$ (beban sedang, butuh monitoring), $60 < \text{TLX} \leq 80$ (beban tinggi, perlu mitigasi), dan $\text{TLX} > 80$ (beban sangat tinggi, restrukturisasi sistem kerja