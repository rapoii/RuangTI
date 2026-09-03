# 2568 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik last-mile di Indonesia mengalami transformasi masif sepanjang dekade terakhir, didorong oleh penetrasi e-commerce yang menembus lebih dari 35% pangsa ritel nasional. Shopee Express sebagai salah satu pemain utama dalam ekosistem Shopee mengoperasikan jaringan mitra (partner) kurir yang tersebar di ribuan sortation center dan rute pengiriman. Dalam konteks ini, partner employee tidak hanya berfungsi sebagai agen pengiriman, tetapi juga sekaligus operator sortasi, scanner barcode, validator paket, dan operator layanan pelanggan lapangan. Akumulasi tugas-tugas kognitif ini menciptakan beban kerja mental (*mental workload*) yang sangat signifikan, yang bila tidak dikelola secara ergonomis akan memicu kelelahan kognitif, peningkatan human error, hingga turnover karyawan yang merugikan secara finansial.

Paper Rafi dan Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti urgensi pengukuran beban kerja mental menggunakan pendekatan subjektif terstandar, yaitu NASA-TLX (NASA Task Load Index). Pendekatan ini dikembangkan oleh Hart dan Staveland (1988) di NASA Ames Research Center dan telah menjadi instrumen de facto dalam penelitian ergonomi kognitif global karena validitas konstruk dan reliabilitasnya yang telah teruji di lebih dari 500 studi lintas industri. Studi Rafi dan Putra tersebut secara khusus mengkontekstualisasikan NASA-TLX terhadap dinamika operasional Shopee Express, di mana variabel seperti fluktuasi volume parcel pada periode *harbolnas* (Hari Belanja Nasional), kompleksitas alamat pengiriman, dan tekanan SLA (*Service Level Agreement*) 24-48 jam menciptakan profil beban mental yang unik.

Di sisi komplementer, paper M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas aplikasi metodologi ini dengan mengintegrasikan NASA-TLX bersama *Work Sampling* untuk memetakan utilisasi waktu kerja operator gudang. Pendekatan hibrida ini menjadi penting karena单纯 pengukuran subjektif (NASA-TLX) tanpa observasi aktivitas kerja akan menghasilkan rekomendasi yang bias—seorang operator mungkin melaporkan beban mental tinggi karena kepadatan tugas, namun data work sampling dapat membuktikan bahwa distribusinya tidak merata sepanjang shift. Kedua paper ini bersama-sama membangun kerangka analitis yang komprehensif untuk pengambilan keputusan manajerial di lingkungan operasi logistik modern, di mana produktivitas, kesejahteraan operator, dan keberlanjutan bisnis menjadi saling tergantung.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konstruk NASA-TLX

NASA-TLX mengukur beban kerja pada enam dimensi independen yang telah divalidasi secara psikometrik. Keenam dimensi tersebut adalah:

1. **Mental Demand (MD)** — Effort kognitif yang dibutuhkan (berpikir, memutuskan, menghitung).
2. **Physical Demand (PD)** — Effort fisik yang dibutuhkan (mengangkat, mendorong, berjalan).
3. **Temporal Demand (TD)** — Tekanan waktu yang dirasakan.
4. **Performance (P)** — Persepsi pencapaian target tugas.
5. **Effort (E)** — Tingkat usaha keseluruhan yang dikeluarkan.
6. **Frustration (F)** — Tingkat frustrasi, iritasi, dan stres yang dialami.

Setiap dimensi dinilai menggunakan skala bipolar 20 poin (0–100) dengan anchor gradien di kedua ujungnya. Skor mentah NASA-TLX (*Raw TLX*, RTLX) dihitung sebagai rata-rata tertimbang dari keenam dimensi:

$$RTLX = \frac{MD + PD + TD + P + E + F}{6}$$

Namun, untuk mendapatkan bobot yang lebih representatif, NASA-TLX penuh menggunakan prosedur *Card Sorting* pairwise comparison antar dimensi untuk menentukan *weight vector* $\mathbf{w} = (w_{MD}, w_{PD}, w_{TD}, w_{P}, w_{E}, w_{F})$, dengan $\sum_{i=1}^{6} w_i = 1$. Skor tertimbang (*Weighted TLX*, WWTLX) dihitung dengan rumus dot product:

$$WWTLX = \sum_{i=1}^{6} w_i \cdot s_i = w_{MD} \cdot s_{MD} + w_{PD} \cdot s_{PD} + w_{TD} \cdot s_{TD} + w_{P} \cdot s_{P} + w_{E} \cdot s_{E} + w_{F} \cdot s_{F}$$

di mana $s_i \in [0, 100]$ adalah skor mentah dimensi ke-$i$. Secara konvensi, skor $s_P$ untuk dimensi Performance dibalik (100 - $s_P$) sebelum pembobotan karena polaritasnya berlawanan dengan dimensi lain (semakin tinggi performance aktual, semakin rendah kontribusinya terhadap beban).

Prosedur card sorting menghasilkan 15 pasangan perbandingan ($C(6,2) = 15$). Frekuensi kemunculan suatu dimensi sebagai "paling penting" menentukan bobotnya:

$$w_i = \frac{n_i^{selected}}{15}$$

### 2.2 Work Sampling (Pendukung)

Untuk paper kedua (Aditya.R & Putra, 2024), digunakan Work Sampling dengan formulasi klasik:

$$P(\text{aktivitas } k) = \frac{x_k}{N}$$

dengan $x_k$ adalah jumlah observasi aktivitas kategori $k$ dan $N$ adalah total observasi. Jumlah observasi minimum ditentukan oleh rumus:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}$$

di mana $Z$ adalah nilai Z-distribusi pada confidence interval tertentu (umumnya $Z = 1{,}96$ untuk 95%), $p$ adalah proporsi aktivitas yang diestimasi (umumnya $p = 0{,}5$ untuk konservatif), dan $E$ adalah margin of error (umumnya $E = 0{,}05$). Dengan parameter standar tersebut:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} \approx 384 \text{ observasi}$$

### 2.3 Uji Statistik Pendukung

Untuk menguji signifikansi perbedaan skor WWTLX antar kelompok operator (misalnya shift pagi vs shift malam), paper Rafi dan Putra menggunakan uji Mann-Whitney U atau independent t-test setelah uji normalitas Shapiro-Wilk:

$$U = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1$$

Korelasi antara dimensi dan produktivitas dapat dianalisis menggunakan Spearman Rank Correlation:

$$\rho = 1 - \frac{6 \sum d_i^2}{n(n^2-1)}$$

di mana $d_i$ adalah selisih rank antara dua variabel berpasangan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional Shopee Express mengikuti alur metodologis terstruktur yang diadopsi dari paper Rafi dan Putra (2024):

**Tahap 1 — Identifikasi Populasi dan Sampling.** Populasi target adalah seluruh partner employee Shopee Express di hub operasional yang diteliti. Ukuran sampel minimum dihitung menggunakan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = jumlah populasi dan $e$ = margin of error (umumnya 5%). Untuk populasi 120 operator, $n \approx 92$ responden. Sampling menggunakan stratified random sampling berdasarkan shift kerja.

**Tahap 2 — Konstruksi Kuesioner.** Kuesioner NASA-TLX terdiri dari dua bagian: (a) kartu instruksi dengan *paired comparison* (15 pasangan), dan (b) skala penilaian 0–100 untuk keenam dimensi. Instrumen ini menggunakan Google Form atau aplikasi daring untuk efisiensi.

**Tahap 3 — Pengumpulan Data.** Operator mengisi kuesioner pada akhir shift kerja (post-shift assessment) untuk menghindari distorsi selama shift. Sebelum pengisian, diberikan briefing 10 menit tentang prosedur dan anchor setiap skala.

**Tahap 4 — Card Sorting dan Pembobotan.** Dari 15 perbandingan berpasangan, dihitung bobot setiap dimensi. Total responden card sorting $= N$ operator $\times$ 15 pair $= 15N$ keputusan. Bobot agregat:

$$w_i^{agregat} = \frac{\sum_{j=1}^{N} w_i^{(j)}}{N}$$

**Tahap 5 — Kalkulasi WWTLX dan Interpretasi.** Skor WWTLX dikategorikan berdasarkan *threshold* berikut yang lazim dalam literatur:

| Kategori Beban | Rentang WWTLX |
|---|---|
| Rendah | 0–20 |
| Sedang | 21–40 |
| Cukup Tinggi | 41–60 |
| Tinggi | 61–80 |
| Sangat Tinggi | 81–100 |

**Tahap 6 — Validasi dengan Work Sampling** (paper Aditya.R & Putra, 2024). Observasi aktivitas operator dilakukan pada interval random (misalnya setiap 60 detik) selama shift kerja menggunakan aplikasi timer. Kategori aktivitas典型: productive work, idle, personal time, waiting, auxiliary work.

**Tahap 7 — Analisis Rekomendasi.** Berdasarkan kombinasi skor WWTLX dan distribusi aktivitas, disusun rekomendasi ergonomis: redistribusi tugas, rotasi shift, penambahan alat bantu mekanis, atau pelatihan ulang.

**Diagram Alir SOP:**

```
[Identifikasi Masalah] → [Studi Pendahuluan] → [Sampling Responden]
         ↓
[Persiapan Instrumen NASA-TLX] → [Pengumpulan Data Kuesioner]
         ↓
[Card Sorting & Pembobotan] → [Kalkulasi WWTLX]
         ↓
[Work Sampling Paralel] → [Kalkulasi Proporsi Aktivitas]
         ↓
[Uji Statistik & Korelasi] → [Interpretasi Hasil]
         ↓
[Rekomendasi Ergonomis] → [Implementasi & Monitoring]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah sortation center Shopee Express di Pekanbaru beroperasi dengan 30 operator partner pada shift pagi (08.00–16.00). Pengamatan awal menunjukkan tingkat kesalahan sortir 4,2% (di atas target SLA 2%). Manajer operasional meminta analisis beban kerja mental.

**Langkah 1: Sampling.** Populasi $N = 30$ operator shift pagi. Menggunakan rumus Slovin dengan $e = 0{,}10$ (margin of error 10% karena populasi kecil):

$$n = \frac{30}{1 + 30 \cdot (0{,}10)^2} = \frac{30}{1 + 0{,}30} \approx 23 \text{ operator}$$

**Langkah 2: Data NASA-TLX.** Dari 23 operator yang mengembalikan kuesioner lengkap, diperoleh skor rata-rata dimensi dan hasil card sorting sebagai berikut:

| Dimensi | Skor Rata-rata ($s_i$) | Bobot Aggregat ($w_i$) |
|---|---|---|
| Mental Demand (MD) | 78 | 0,30 |
| Physical Demand (PD) | 45 | 0,15 |
| Temporal Demand (TD) | 82 | 0,25 |
| Performance (P)* | 60 | 0,10 |
| Effort (E) | 70 | 0,15 |
| Frustration (F) | 65 | 0,05 |

*Catatan: Untuk kalkulasi WWTLX, $s_P$ dibalik menjadi $100 - 60 = 40$.

**Langkah 3: Kalkulasi WWTLX.**

$$WWTLX = (0{,}30)(78) + (0{,}15)(45) + (0{,}25)(82) + (0{,}10)(40) + (0{,}15)(70) + (0{,}05)(65)$$

$$= 23{,}40 + 6{,}75 + 20{,}50 + 4{,}00 + 10{,}50 + 3{,}25 = 68{,}40$$

**Interpretasi:** Skor WWTLX = 68,40 → Kategori **TINGGI** (61–80). Dimensi paling dominan kontribusinya adalah **Mental Demand (23,40 poin)** dan **Temporal Demand (20,50 poin)**. Ini mengindikasikan bahwa tekanan pikiran dan waktu adalah sumber beban utama.

**Langkah 4: Work Sampling Komplementer.** Dilakukan 384 observasi acak (sesuai rumus minimum observasi dengan confidence 95%). Hasil distribusi:

| Kategori Aktivitas | Jumlah Observasi | Proporsi |
|---|---|---|
| Sortasi aktif | 192 | 50,00% |
| Scanning barcode | 77 | 20,05% |
| Menunggu parcel | 54 | 14,06% |
| Aktivitas pribadi | 38 | 9,90% |
| Idle/tidak produktif | 23 | 5,99% |
| **Total** | **384** | **100,00%** |

**Langkah 5: Korelasi Beban Mental dengan Idle Time.** Menggunakan Spearman Rank Correlation antara skor WWTLX individu operator ($n = 23$) dengan proporsi idle time personal:

Misalkan rank WWTLX: [1, 2, ..., 23] dan rank idle time: [$r_1, r_2, ..., r_{23}$]. Setelah kalkulasi (disimulasikan dengan data riil paper Aditya.R & Putra, 2024):

$$\rho_{Spearman} \approx -0{,}62, \quad