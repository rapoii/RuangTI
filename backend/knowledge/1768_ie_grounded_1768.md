# 1768 — Analisis Beban Kerja Mental Operator Logistik Menggunakan Metode NASA-TLX dan Work Sampling dalam Ekosistem Last-Mile E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Pendidikan Indonesia)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Pendidikan Indonesia)*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang tercatat tumbuh eksponensial di atas rata-rata global telah menciptakan tekanan struktural pada sektor logistik *last-mile*. Shopee sebagai salah satu platform *e-commerce* terbesar di Asia Tenggara, dengan lebih dari 200 juta pengguna aktif di kawasan ini, mengandalkan jaringan mitra kurir Shopee Express (sebelumnya dikenal sebagai *Social Commerce Delivery* atau *Scada*) untuk menangani jutaan paket harian. Rafi dan Putra (2024) dalam penelitiannya yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti realitas bahwa intensitas operasional ini secara langsung menerjemahkan diri menjadi **beban kerja mental (*mental workload*)** yang signifikan bagi kurir mitra, yang bekerja dengan model *outsourcing* berstatus wirausaha, bukan pekerja tetap.

Konteks industri yang melatarbelakangi studi ini bersifat multi-dimensi. Pertama, dari sisi operasional, mitra kurir Shopee Express menghadapi ketidakpastian (*uncertainty*) yang tinggi berupa volume paket yang fluktuatif, target *on-time delivery* yang ketat, kompleksitas *sorting*, serta tuntutan penggunaan aplikasi digital secara simultan. Kedua, dari sisi ergonomi kognitif, kombinasi antara tuntutan fisik (mengangkat paket, mengendarai kendaraan dalam lalu lintas padat) dan tuntutan mental (menghitung ongkos kirim, memverifikasi identitas penerima, mengelola keluhan pelanggan) menciptakan *dual-load condition* yang jarang diisolasi dalam studi ergonomi konvensional. Rafi dan Putra (2024) mengidentifikasi bahwa tanpa pengukuran kuantitatif yang valid, manajemen tidak memiliki dasar objektif untuk melakukan *redesign* sistem kerja, penjadwalan shift, maupun alokasi armada.

Urgensi ekonomis studi ini juga tidak dapat dipisahkan dari data makro. Indonesia mencatatkan lebih dari 3,5 miliar transaksi *e-commerce* sepanjang 2023 dengan nilai transaksi yang menembus USD 65 miliar, di mana lebih dari 70% volume bergantung pada pengiriman *last-mile*. Studi Aditya.R dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi narasi ini dari perspektif operator gudang, menemukan bahwa beban kerja pada level *warehouse operator* memiliki korelasi langsung dengan tingkat kelelahan, *error rate* *picking*, dan *turnover* karyawan. Kedua studi ini, meskipun mengambil unit analisis yang berbeda (kurir lapangan vs. operator gudang), sama-sama mengkonfirmasi bahwa *human factor engineering* merupakan variabel kritis dalam rantai pasok *e-commerce*.

Risiko ergonomi dan K3 dari *mental workload* berlebih telah terdokumentasi dalam literatur sebagai *precursor* kecelakaan kerja, *decision fatigue*, dan *burnout syndrome*. Oleh karena itu, Rafi dan Putra (2024) memilih **NASA-TLX (*NASA Task Load Index*)** sebagai instrumen karena validitas psikometriknya yang telah teruji secara internasional sejak dikembangkan oleh Hart dan Staveland (1988), serta kemampuannya menangkap enam dimensi beban kerja secara simultan dalam satu kuesioner terstruktur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX: Kerangka Konseptual Enam Dimensi

NASA-TLX mengukur beban kerja subjektif berdasarkan enam subskala yang masing-masing dievaluasi pada skala 0–100 (*Likert-like visual analog scale*). Keenam dimensi tersebut, sesuai dengan yang diadopsi oleh Rafi dan Putra (2024) dalam DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), adalah:

1. **Mental Demand (MD)** — Tuntutan aktivitas kognitif (berpikir, memutuskan, menghitung).
2. **Physical Demand (PD)** — Tuntutan aktivitas fisik.
3. **Temporal Demand (TD)** — Tuntutan terkait tekanan waktu.
4. **Performance (P)** — Persepsi pekerja terhadap pencapaian target (skor rendah = kinerja buruk).
5. **Effort (E)** — Tingkat usaha yang dikeluarkan untuk完成任务.
6. **Frustration (F)** — Tingkat frustrasi, irritasi, dan stres yang dirasakan.

### 2.2 Prosedur Pembobotan (*Weighting Procedure*)

NASA-TLX menggunakan prosedur *paired comparison* untuk menentukan bobot relatif dari keenam dimensi. Terdapat $\binom{6}{2} = 15$ pasangan yang dibandingkan, dan setiap dimensi yang dipilih akan mendapat bobot total sesuai jumlah kemenangannya. Skor total NASA-TLX (*Overall Workload Score*, disingkat **OWS**) dihitung dengan formula:

$$OWS = \frac{\sum_{i=1}^{6} (R_i \times W_i)}{15}$$

di mana:
- $R_i$ = *raw score* (skor mentah) dimensi ke-$i$, dengan $0 \leq R_i \leq 100$
- $W_i$ = bobot dimensi ke-$i$ hasil *paired comparison*, dengan $0 \leq W_i \leq 6$
- $\sum_{i=1}^{6} W_i = 15$

Skor OWS berada pada rentang $0 \leq OWS \leq 100$ dan diklasifikasikan ke dalam empat kategori beban kerja menurut Hart (2006):

$$
Kategori = 
\begin{cases}
\text{Rendah}, & 0 \leq OWS < 25 \\
\text{Sedang}, & 25 \leq OWS < 50 \\
\text{Tinggi}, & 50 \leq OWS < 75 \\
text{Sangat Tinggi}, & 75 \leq OWS \leq 100
\end{cases}
$$

### 2.3 Work Sampling: Formulasi Proporsi Aktivitas

Untuk studi Aditya.R dan Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), digunakan metode *work sampling* yang diformalkan melalui distribusi binomial. Proporsi waktu yang dihabiskan untuk aktivitas tertentu diestimasi dengan:

$$P(\hat{p}) = \frac{x}{n}, \quad SE = \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

di mana $x$ adalah jumlah observasi aktivitas tersebut dari total $n$ observasi acak. Dengan tingkat kepercayaan $Z_{1-\alpha/2}$ (umumnya 1,96 untuk $\alpha = 0{,}05$), *confidence interval* proporsi aktivitas adalah:

$$CI_{95\%} = \hat{p} \pm Z_{1-\alpha/2} \cdot SE$$

Jumlah observasi minimum yang diperlukan untuk akurasi tertentu $E$ (margin of error) dihitung dengan:

$$n_{min} = \frac{Z^2 \cdot p(1-p)}{E^2}$$

Untuk konservatisme maksimum dengan $p = 0{,}5$, formula menjadi:

$$n_{min} = \frac{Z^2 \cdot 0{,}25}{E^2}$$

### 2.4 Pengukuran Produktivitas

Produktivitas operator didefinisikan sebagai:

$$\text{Produktivitas} = \frac{\text{Output}}{\text{Input Waktu}} = \frac{\sum \text{paket diproses}}{\sum \text{jam kerja efektif}}$$

Aditya.R dan Putra (2024) menggunakan rumus ini untuk membandingkan tingkat produktivitas antar operator dan mengkorelasikannya dengan skor NASA-TLX menggunakan analisis regresi linier sederhana:

$$Y = \beta_0 + \beta_1 X + \varepsilon$$

di mana $Y$ adalah skor OWS, $X$ adalah produktivitas (paket/jam), $\beta_0$ adalah intersep, $\beta_1$ adalah koefisien regresi, dan $\varepsilon$ adalah galat acak.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX mengikuti *Standard Operating Procedure* yang diadopsi oleh Rafi dan Putra (2024) dengan tahap-tahap sistematis sebagai berikut:

**Tahap 1 – Penentuan Populasi dan Sampel.** Populasi penelitian adalah seluruh mitra kurir Shopee Express di lokasi studi. Sampel ditentukan menggunakan *purposive sampling* dengan kriteria inklusi: masa kerja minimal 3 bulan dan telah menyelesaikan minimal 100 pengiriman.

**Tahap 2 – Pembuatan Kuesioner.** Instrumen menggunakan *card-sort* NASA-TLX yang terdiri dari 15 kartu pasangan dimensi dan 6 *visual analog scale* sepanjang 100 mm.

**Tahap 3 – Briefing dan Pra-Uji.** Responden diberikan penjelasan tentang keenam dimensi dan contoh skenario. *Pilot test* dilakukan pada 5–10 responden untuk validasi pemahaman instrumen.

**Tahap 4 – Pengumpulan Data Primer.** Setiap responden diminta (a) melakukan *paired comparison* dengan menandai pasangan dimensi yang lebih membebani, dan (b) memberikan *raw score* 0–100 untuk keenam dimensi berdasarkan beban kerja aktual yang dirasakan selama shift kerja.

**Tahap 5 – Penghitungan Skor Tertimbang.** OWS dihitung menggunakan formula pada Bagian 2.2, kemudian dirata-ratakan untuk seluruh responden:

$$\overline{OWS} = \frac{1}{n} \sum_{j=1}^{n} OWS_j$$

**Tahap 6 – Analisis Statistik dan Interpretasi.** Uji validitas konstruk menggunakan *Cronbach's Alpha*:

$$\alpha = \frac{k}{k-1} \left( 1 - \frac{\sum_{i=1}^{k} \sigma^2_{Y_i}}{\sigma^2_X} \right)$$

di mana $k$ adalah jumlah item, $\sigma^2_{Y_i}$ adalah varians setiap item, dan $\sigma^2_X$ adalah varians total. Nilai $\alpha \geq 0{,}7$ menunjukkan reliabilitas yang dapat diterima (Nunnally, 1978).

Untuk studi pendukung Aditya.R dan Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), tahapan *work sampling* ditambahkan: pengamatan acak terhadap operator gudang dengan interval 1–2 menit selama 8 jam kerja, kemudian proporsi waktu untuk setiap kategori aktivitas (misal: *picking*, *packing*, istirahat, menunggu) dihitung menggunakan formula pada Bagian 2.3.

**Diagram Alir Proses (Logic Flow):**
```
Identifikasi Masalah → Studi Literatur → Penetuan Variabel → 
Validasi Instrumen (Pilot Test) → Pengumpulan Data (Kuesioner + Observasi) → 
Perhitungan OWS & Proporsi Aktivitas → Analisis Statistik (Cronbach α, Uji Beda, Regresi) → 
Interpretasi Hasil → Rekomendasi Manajemen → Implementasi SOP Baru → Monitoring
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Hipotetis: 30 Mitra Kurir Shopee Express di Hub Jakarta Timur

Berdasarkan metodologi Rafi dan Putra (2024) pada DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), berikut adalah simulasi perhitungan dengan data realistis dari 10 responden representatif. Tabel *paired comparison* ringkas (jumlah kemenangan tiap dimensi dari 15 pasangan per responden):

| Responden | MD | PD | TD | P | E | F | $\sum$ W |
|-----------|----|----|----|---|---|---|---------|
| R01 | 4 | 3 | 2 | 1 | 3 | 2 | 15 |
| R02 | 5 | 2 | 3 | 0 | 3 | 2 | 15 |
| ... | ... | ... | ... | ... | ... | ... | ... |
| **Rata-rata Bobot (W̄)** | **3,8** | **2,5** | **3,0** | **0,8** | **2,7** | **2,2** | **15** |

*Raw scores* agregat (rata-rata dari seluruh responden):
- $R_{MD} = 78$, $R_{PD} = 62$, $R_{TD} = 85$, $R_{P} = 45$, $R_{E} = 70$, $R_{F} = 68$.

**Perhitungan OWS:**

$$\sum (R_i \times \overline{W}_i) = (78 \times 3{,}8) + (62 \times 2{,}5) + (85 \times 3{,}0) + (45 \times 0{,}8) + (70 \times 2{,}7) + (68 \times 2{,}2)$$

$$= 296{,}4 + 155{,}0 + 255{,}0 + 36{,}0 + 189{,}0 + 149{,}6 = 1081{,}0$$

$$OWS = \frac{1081{,}0}{15} = 72{,}07$$

**Interpretasi Manajerial:** Skor OWS = 72,07 berada pada kategori **Tinggi** (50–75), mendekati ambang batas *Sangat Tinggi*. Ini mengindikasikan bahwa mitra kurir mengalami beban kerja yang substansial dan memerlukan intervensi ergonomi segera. Dimensi *Temporal Demand* ($R_{TD} = 85$) menjadi kontributor dominan, konsisten dengan realitas industri bahwa *deadline* pengiriman adalah sumber tekanan utama.

### 4.2 Validasi Reliabilitas Instrumen

Misalkan varians setiap item (dari 6 dimensi) dan varians total dari 30 responden adalah:

| Dimensi | $\sigma^2_{Y_i}$ |
|---------|------------------|
| MD | 145,3 |
| PD | 178,6 |
| TD