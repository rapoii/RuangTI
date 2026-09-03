# 2232 — Analisis Beban Kerja Mental Menggunakan Metode NASA-TLX pada Operator Logistik dan Kurir Last-Mile E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital di Asia Tenggara telah mendorong ekspansi masif sektor *e-commerce*, dan konsekuensinya, permintaan terhadap layanan logistik *last-mile* meningkat secara eksponensial. Di Indonesia, Shopee Express sebagai salah satu unit layanan pengiriman milik PT Shopee International Indonesia beroperasi dengan volume pengiriman yang meledak terutama pasca pandemi COVID-19, ketika perilaku konsumsi masyarakat bergeser drastis ke kanal daring. Menurut Rafi dan Putra (2024) dalam studi mereka yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), mitra kurir Shopee Express menghadapi tekanan operasional berlapis, mulai dari target pengiriman harian, kompleksitas rute, hingga interaksi dengan pelanggan dalam batas waktu Service Level Agreement (SLA) yang ketat, biasanya hanya 1×24 jam. Kondisi ini menempatkan pekerja pada beban kognitif yang apabila tidak dikelola secara ergonomis akan menurunkan keselamatan, akurasi, dan produktivitas.

Penelitian yang dilakukan oleh Rafi dan Putra (2024) menjadi penting karena memotret secara kuantitatif persepsi beban kerja mental (*mental workload*) pekerja lapangan yang selama ini sulit diukur. Pengukuran yang digunakan adalah NASA-Task Load Index (NASA-TLX), sebuah instrumen multidimensi yang dikembangkan oleh Human Performance Group NASA Ames Research Center. Studi kedua oleh Aditya dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat pendekatan ini dengan mengintegrasikan NASA-TLX dan *work sampling* pada operator gudang, sehingga memberikan gambaran komparatif antara intensitas kerja mental di lini sortir gudang dan di lapangan kurir. Urgensi riset ini tidak hanya bersifat akademis, tetapi memiliki implikasi manajerial langsung terhadap desain shift kerja, sistem insentif, perencanaan armada, dan kebijakan Keselamatan dan Kesehatan Kerja (K3) sesuai UU No. 1 Tahun 1970 dan standar ISO 45001:2018.

Konteks industri yang melatarbelakangi penelitian ini adalah fenomena *gig economy* di mana pekerja kurir bermitra (bukan karyawan tetap) memikul sendiri sebagian besar beban risiko operasional. Berbeda dengan operator gudang yang bekerja di lingkungan semi-terkontrol dengan pencahayaan, ventilasi, dan tata ruang yang relatif standar, kurir last-mile beroperasi di bawah variabilitas lingkungan yang tinggi: cuaca, kemacetan lalu lintas, alamat yang ambigu, hingga fluktuasi permintaan musiman seperti Harbolnas (Hari Belanja Nasional) pada 11.11, 12.12, dan seterusnya. Oleh karena itu, pengukuran beban mental menjadi kritikal untuk mencegah *human error*, kelelahan kronis, dan *burnout* yang secara ekonomi merugikan perusahaan melalui peningkatan *cost of poor quality* dan *talent attrition*.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX adalah instrumen subjektif yang mengukur beban kerja berdasarkan enam dimensi utama yang dikembangkan oleh Hart dan Staveland (1988) dan telah divalidasi secara luas dalam literatur ergonomi kognitif. Keenam subskala tersebut adalah: **Mental Demand (MD)**, **Physical Demand (PD)**, **Temporal Demand (TD)**, **Performance (P)**, **Effort (E)**, dan **Frustration (F)**. Setiap subskala dinilai menggunakan *bipolar Likert scale* 0–100 yang dibagi ke dalam interval 5 poin. Terdapat dua varian kalkulasi NASA-TLX, yaitu *Raw NASA-TLX* (RTLX) dan *Weighted NASA-TLX* (WTLX).

**Rumus 1 — Raw NASA-TLX (RTLX):**

$$RTLX = \frac{MD + PD + TD + (100 - P) + E + F}{6}$$

Subskala *Performance* dibalik (dikurangkan dari 100) karena interpretasinya berlawanan dengan dimensi lainnya: semakin rendah skor P (performa rendah), semakin tinggi kontribusinya terhadap beban kerja. Dengan formula ini, RTLX bernilai 0–100, di mana nilai >50 mengindikasikan beban kerja tinggi yang memerlukan intervensi ergonomi.

**Rumus 2 — Weighted NASA-TLX (WTLX):**

Pada prosedur WTLX, responden terlebih dahulu diminta melakukan *pairwise comparison* antar keenam subskala untuk menentukan bobot kepentingan relatif (total 15 pasangan). Jika $w_i$ adalah bobot subskala ke-$i$ hasil *card-sorting*, maka:

$$WTLX = \frac{\sum_{i=1}^{6} w_i \cdot s_i}{\sum_{i=1}^{6} w_i} = \frac{\sum_{i=1}^{6} w_i \cdot s_i}{15}$$

dengan $s_i$ adalah skor mentah subskala ke-$i$ dan $\sum w_i = 15$ karena setiap bobot memiliki rentang 0–5. WTLX memberikan gambaran yang lebih representatif karena memperhitungkan *salience* atau signifikansi subjektif tiap dimensi.

**Rumus 3 — Work Sampling Utilisasi:**

Studi pendukung Aditya dan Putra (2024) mengombinasikan NASA-TLX dengan *work sampling* untuk memvalidasi beban kerja aktual. Probabilitas seorang operator diamati melakukan aktivitas produktif pada interval acak adalah:

$$P(\text{productive}) = \frac{n_{\text{productive}}}{N_{\text{total}}}$$

dengan *standard error* pengamatan:

$$SE = \sqrt{\frac{P(1-P)}{N_{\text{total}}}}$$

Batas kepercayaan 95% untuk proporsi aktivitas ditentukan sebagai:

$$CI_{95\%} = P \pm 1{,}96 \cdot SE$$

**Rumus 4 — Korelasi Pearson Beban Mental–Kinerja:**

Untuk menguji hubungan linear antara skor WTLX dan variabel kinerja (misalnya jumlah paket terkirim, error rate, atau kelelahan terukur), digunakan koefisien korelasi Pearson:

$$r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \cdot \sum_{i=1}^{n}(y_i - \bar{y})^2}}$$

di mana $x_i$ adalah skor WTLX operator ke-$i$ dan $y_i$ adalah metrik kinerja operator ke-$i$. Uji signifikansi menggunakan *t-test*:

$$t = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}, \quad df = n - 2$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional Shopee Express mengikuti protokol sistematis sebagai berikut. Diagram alir di bawah ini menyajikan *workflow* yang dirujuk dari kedua paper sumber.

```
┌─────────────────────────────────────────────────────────────┐
│ Tahap 1: Identifikasi Sistem Kerja & Stakeholder           │
│ - Pilih 30–50 operator/kurir (stratified random sampling)  │
│ - Tentukan populasi, shift, dan lokasi Sortation Center    │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Tahap 2: Pre-Research & Validasi Instrumen                 │
│ - Uji validitas konstruk dengan Cronbach's Alpha (α ≥ 0,70)│
│ - Pilot study pada 5–10 responden                          │
│ - Pelatihan enumerator untuk menghindari bias interviewer  │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Tahap 3: Pengumpulan Data Primer                           │
│ - Kuesioner demografi (usia, masa kerja, shift)             │
│ - Skala NASA-TLX (kertas/digital via Google Form)          │
│ - Work sampling observasi (round interval 1–2 menit)        │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Tahap 4: Perhitungan & Uji Statistik                       │
│ - Hitung RTLX dan WTLX tiap responden                      │
│ - Uji normalitas (Shapiro–Wilk) dan homogenitas (Levene)    │
│ - Uji beda (independent t-test / Mann–Whitney U)           │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ Tahap 5: Interpretasi & Rekomendasi Manajerial             │
│ - Kategorisasi: rendah (<30), sedang (30–50), tinggi (>50) │
│ - Rekomendasi rotasi shift, redesign rute, dan K3          │
│ - Continuous improvement berbasis PDCA (Deming Cycle)       │
└─────────────────────────────────────────────────────────────┘
```

Dalam penelitian Rafi dan Putra (2024), prosedur di atas diterapkan pada mitra kurir Shopee Express di salah satu *sortation center* dengan total sampel 30 responden yang diambil secara *accidental sampling* sesuai convenience. Sementara Aditya dan Putra (2024) menerapkan metode serupa pada operator gudang dengan jumlah pengamatan *work sampling* sebanyak 3.600 (60 menit × 60 pengamatan/ jam × 1 jam efektif). Kedua studi merujuk pada pedoman *work sampling* dari Niebel dan Freivalds (2014) yang merekomendasikan jumlah pengamatan minimum:

$$N_{min} = \frac{4 \cdot p \cdot (1-p)}{E^2}$$

dengan $p$ adalah proporsi aktivitas yang diperkirakan (default 0,5 untuk worst case) dan $E$ adalah *allowable error* (umumnya 0,05 atau 5%). Hasilnya, $N_{min} = 400$ untuk presisi yang dapat diterima, namun guna validitas statistik pada lingkungan gudang riil, Aditya dan Putra (2024) melebihinya menjadi 3.600.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mendemonstrasikan aplikasi kuantitatif NASA-TLX, kami merekonstruksi skenario berbasis pola data dari Rafi dan Putra (2024) pada operator Sortation Center Shopee Express saat periode Harbolnas. Diperoleh skor mentah enam subskala dari satu operator sebagai berikut:

| Subskala | Skor (0–100) |
|---|---|
| Mental Demand (MD) | 75 |
| Physical Demand (PD) | 65 |
| Temporal Demand (TD) | 85 |
| Performance (P) | 30 |
| Effort (E) | 70 |
| Frustration (F) | 60 |

**Langkah 1 — Perhitungan RTLX:**

$$RTLX = \frac{75 + 65 + 85 + (100 - 30) + 70 + 60}{6} = \frac{75+65+85+70+70+60}{6} = \frac{425}{6} \approx 70{,}83$$

**Langkah 2 — Perhitungan WTLX (dengan asumsi bobot dari pairwise comparison):**

Misalkan hasil *card-sort* memberikan bobot: MD=4, PD=3, TD=5, P=0, E=2, F=1 (total = 15).

$$WTLX = \frac{(4)(75) + (3)(65) + (5)(85) + (0)(70) + (2)(70) + (1)(60)}{15} = \frac{300+195+425+0+140+60}{15} = \frac{1120}{15} \approx 74{,}67$$

**Langkah 3 — Interpretasi:**
Skor WTLX = 74,67 (>50) mengindikasikan operator berada pada kategori **beban kerja tinggi**. Dimensi *Temporal Demand* paling dominan (bobot 5, skor 85), artinya tekanan waktu — yang berkaitan dengan SLA pengiriman dan antrian paket di *sorting line* — merupakan kontributor utama beban mental. Dimensi *Performance* berbobot 0, menunjukkan operator merasa *self-efficacy* mereka tidak terancam meskipun bekerja keras; namun skor P=30 mengisyaratkan persepsi bahwa hasil kerja belum optimal.

**Langkah 4 — Rekomendasi Engineering:**

1. **Redesain Shift Kerja:** Terapkan rotasi *sorting–delivery* setiap 4 jam untuk menurunkan *temporal demand* kumulatif.
2. **Optimasi Rute:** Implementasikan algoritma *Vehicle Routing Problem with Time Windows* (VRPTW) untuk mengurangi variabilitas waktu tempuh.
3. **Augmented Reality (AR) Picking:** Head-mounted display dengan panduan sortir dapat menurunkan *mental demand* karena mengurangi beban memori kerja.
4. **Microbreak Terjadwal:** 5 menit istirahat setiap 90 menit menurunkan *frustration* hingga 15% berdasarkan literatur ergonomi (Henning et al., 1997).

**Langkah 5 — Validasi dengan Work Sampling:**
Dalam studi Aditya dan Putra (2024) pada operator gudang, pengamatan *work sampling* menunjukkan proporsi aktivitas produktif 78% dengan SE = 0,68%, sehingga $CI_{95\%} = [76{,}67\%;\; 79{,}33\%]$. Angka ini mengonfirmasi bahwa waktu idle operator rendah, konsisten dengan skor *temporal demand* yang tinggi pada NASA-TLX.

---