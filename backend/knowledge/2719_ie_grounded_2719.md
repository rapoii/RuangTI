# 2719 — Desain untuk Manufaktur dan Perakitan (DFMA): Optimasi Desain Produk Industri melalui Pendekatan Rekayasa Terintegrasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh tekanan kompetitif global, permintaan kustomisasi produk, dan tuntutan efisiensi biaya yang semakin tinggi, kemampuan untuk merancang produk yang secara simultan optimal dari sudut pandang fabrikasi, perakitan, distribusi, dan daur ulang menjadi imperatif strategis. Pendekatan konvensional yang memisahkan desain produk dari proses produksi terbukti menghasilkan inefisiensi struktural berupa komponen berlebihan, operasi perakitan yang tidak bernilai tambah (non-value-adding), serta waktu siklus manufaktur yang memanjang. Amirullah dan Jakaria (2024) dalam paper terindeks DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) secara eksplisit menginvestigasi permasalahan ini pada kasus redesign *coffee enema basket*—sebuah perangkat medis yang meskipun tampak sederhana, memiliki kompleksitas geometris dan fungsional yang menuntut presisi tinggi dalam hal keamanan pengguna, ketahanan terhadap korosi, dan kemampuan sterilisasi. Temuan mereka menunjukkan bahwa penerapan metode Design for Manufacture and Assembly (DFMA) berhasil mereduksi jumlah komponen, menyederhanakan alur perakitan, dan menekan biaya produksi secara signifikan tanpa mengorbansi fungsi klinis produk.

Persoalan yang diangkat oleh Amirullah dan Jakaria (2024) bukanlah kasus terisolasi. Islam (2024) dalam paper ber-DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) mendokumentasikan masalah serupa pada skala yang jauh lebih besar, yaitu pada konstruksi jembatan prefabrikasi. Islam (2024) menemukan bahwa keputusan desain jembatan konvensional hanya didasarkan pada kriteria biaya dan kecukupan struktural pada tahap konseptual dan preliminer, ketika pengetahuan tentang manufaktur, transportasi, pengangkatan, dan ereksi belum diintegrasikan ke dalam proses pengambilan keputusan. Akibatnya, masalah *buildability* baru teridentifikasi pada tahap produksi shop-drawing atau di lapangan, ketika desain sudah dalam keadaan beku (*frozen*), cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya perubahan yang sangat tinggi (*change-order cost penalty*). Kedua paper ini secara konvergen membuktikan bahwa DFMA bukan sekadar metodologi optimasi biaya, melainkan merupakan *design philosophy* yang harus di-embed sejak fase konseptual untuk menghindari *locked-in inefficiencies*.

Urgensi penerapan DFMA semakin menguat ketika mempertimbangkan tiga tren industri contemporer. Pertama, kompleksitas produk meningkat rata-rata 10–15% per dekade (data historis Industri Otomotif), sementara target waktu siklus produksi justru menurun. Kedua, keberlanjutan (*sustainability*) menuntut minimalisasi material, waste reduction, dan kemampuan daur ulang, yang hanya dapat dicapai jika keputusan material dan geometri sudah dipertimbangkan sejak awal. Ketiga, integrasi Building Information Modeling (BIM) dan Industry 4.0 membuka peluang *real-time design-manufacturability assessment* yang sayangnya belum dimanfaatkan secara optimal di banyak industri karena belum ada kerangka kerja multi-kriteria yang rigorous. Modul ini akan membedah metodologi DFMA dari kedua paper tersebut secara kuantitatif, dengan formulasi matematis yang presisi dan studi kasus numerik yang dapat direplikasi oleh praktisi industri.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada kerangka Boothroyd-Dewhurst, yang terdiri atas dua komponen utama: Design for Manufacture (DFM) dan Design for Assembly (DFA). Boothroyd dan Dewhurst (1983) mendefinisikan DFA melalui tiga aktivitas inti: (1) minimisasi jumlah komponen, (2) penyederhanaan operasi perakitan, dan (3) pengembangan desain yang konsisten dengan kemampuan proses manufaktur.

### 2.1 Indeks Desain untuk Perakitan (DFA Index)

Indeks efisiensi perakitan yang digunakan dalam paper Amirullah dan Jakaria (2024) mengikuti formulasi Boothroyd-Dewhurst:

$$\eta_{DFA} = \frac{N_m}{N_t} \times 100\% \tag{1}$$

di mana $N_m$ adalah jumlah minimum komponen yang secara teoritis diperlukan untuk memenuhi fungsi desain (yaitu, setiap komponen harus memiliki gerakan relatif atau pemisahan material yang diperlukan secara fungsional), dan $N_t$ adalah jumlah total komponen aktual dalam desain. Nilai $\eta_{DFA}$ mendekati 100% mengindikasikan desain yang optimal.

Selain itu, untuk mengukur efisiensi waktu perakitan, digunakan:

$$\eta_{t} = \frac{N_m \cdot t_m}{N_t \cdot t_a} \times 100\% \tag{2}$$

di mana $t_m$ adalah waktu perakitan teoritis minimum untuk satu komponen ideal (umumnya diasumsikan 3 detik untuk operasi insertion sederhana sesuai tabel Boothroyd), dan $t_a$ adalah waktu perakitan aktual rata-rata per komponen.

### 2.2 Analisis Biaya Manufaktur

Untuk komponen sheet metal yang relevan pada *coffee enema basket*, biaya fabrikasi mengikuti model proses pembentukan:

$$C_{manuf} = C_{material} + C_{proses} + C_{tooling} + C_{overhead} \tag{3}$$

dengan:

$$C_{material} = \rho \cdot V \cdot p_m = \rho \cdot (L \cdot W \cdot T) \cdot p_m \tag{4}$$

di mana $\rho$ adalah densitas material (kg/m³), $V$ adalah volume komponen, $p_m$ adalah harga material per kilogram, dan $L, W, T$ berturut-turut adalah panjang, lebar, dan tebal lembaran.

Untuk proses stamping dan bending, biaya operasi dapat dihitung sebagai:

$$C_{proses} = \left(\frac{T_{setup}}{N_{batch}} + T_{cycle}\right) \cdot R_{labour} + C_{die} \cdot \frac{1}{N_{batch}} \tag{5}$$

di mana $T_{setup}$ adalah waktu setup mesin (detik), $N_{batch}$ adalah jumlah unit dalam satu batch produksi, $T_{cycle}$ adalah waktu siklus per unit (detik), $R_{labour}$ adalah tarif tenaga kerja per detik (IDR/s), dan $C_{die}$ adalah biaya perkakas (dies).

### 2.3 Kerangka Multi-Kriteria Berbasis BIM (Islam, 2024)

Paper Islam (2024) memperkenalkan bobot preferensi multi-kriteria untuk mengevaluasi alternatif desain jembatan prefabrikasi:

$$S_i = \sum_{j=1}^{k} w_j \cdot s_{ij} \quad \text{ dengan } \quad \sum_{j=1}^{k} w_j = 1 \tag{6}$$

di mana $S_i$ adalah skor total alternatif desain ke-$i$, $w_j$ adalah bobot kriteria ke-$j$ (misalnya: manufacturability $w_1$, transportability $w_2$, liftability $w_3$, erectability $w_4$), dan $s_{ij}$ adalah skor ternormalisasi alternatif $i$ pada kriteria $j$.

Islam (2024) menekankan bahwa kriteria $w_1$ (manufacturability) dan $w_4$ (erectability) seharusnya memiliki bobot lebih tinggi pada tahap desain konseptual untuk menghindari *locked-in* biaya perubahan di tahap selanjutnya. Pendekatan Analytical Hierarchy Process (AHP) dari Saaty digunakan untuk menentukan $w_j$:

$$CR = \frac{CI}{RI} < 0{,}10 \tag{7}$$

di mana $CI = (\lambda_{max} - n)/(n-1)$ adalah *Consistency Index*, $RI$ adalah *Random Index* untuk matriks berukuran $n \times n$, dan $CR$ adalah *Consistency Ratio* yang harus kurang dari 10% agar bobot dianggap valid.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti prosedur sistematis yang diadopsi dari Boothroyd-Dewhurst dan direplikasi oleh Amirullah dan Jakaria (2024) dalam kasus *coffee enema basket*. Prosedur ini terdiri atas tujuh tahap operasional:

**Tahap 1 – Analisis Fungsi Produk.** Identifikasi fungsi utama dan sekunder produk. Untuk *coffee enema basket*, fungsi utamanya adalah menahan bubuk kopi selama proses enema dengan permeabilitas yang sesuai, sementara fungsi sekundernya meliputi kemampuan drainase, ketahanan termal (sterilisasi autoklaf pada suhu 121°C), dan keamanan kontak dengan jaringan tubuh (food-grade stainless steel 304).

**Tahap 2 – Dokumentasi Desain Awal (*As-Is*).** Inventorisasi seluruh komponen, gambar teknik, Bill of Materials (BOM), dan operasi perakitan aktual. Amirullah dan Jakaria (2024) mendokumentasikan desain awal yang terdiri atas beberapa bagian las, bracket, dan mur-baut yang memerlukan operasi perakitan manual.

**Tahap 3 – Evaluasi DFA Awal.** Hitung $\eta_{DFA}$ awal dan identifikasi komponen yang dapat dieliminasi menggunakan *three criteria test*: (a) gerakan relatif yang diperlukan selama operasi produk, (b) pemisahan material yang diperlukan, (c) apakah komponen tersebut diperlukan untuk *assembly/disassembly*. Komponen yang gagal ketiga kriteria merupakan kandidat eliminasi.

**Tahap 4 – Redesain Konseptual.** Buat alternatif desain dengan jumlah komponen minimal. Pada paper Amirullah dan Jakaria (2024), redesign dilakukan dengan mengintegrasikan fungsi beberapa komponen menjadi satu bagian monolitik hasil fabrikasi *sheet metal forming* dan pengelasan TIG.

**Tahap 5 – Analisis DFM.** Evaluasi setiap komponen terhadap kemampuan proses: stamping, bending, welding, dan surface treatment. Pilih material dan proses yang memenuhi fungsi dengan biaya minimum.

**Tahap 6 – Prototyping dan Validasi.** Buat prototipe dan uji fungsional (uji kebocoran, uji tekanan, uji siklus sterilisasi). Bandingkan dengan desain asli pada parameter: jumlah komponen, waktu perakitan, biaya produksi, dan massa.

**Tahap 7 – Standardisasi dan Diseminasi.** Dokumentasikan desain final sebagai standar produk baru dan *lessons learned* untuk pengembangan produk selanjutnya.

Diagram alir proses DFMA mengikuti struktur berikut:

```
[Start] → [Identifikasi Fungsi] → [Analisis Desain Awal]
   ↓
[Hitung η_DFA Awal] → [Tentukan N_m Teoritis]
   ↓
[Redesain Iteratif] → [Evaluasi DFM] → [Prototyping]
   ↓
[Validasi & Pengujian] → [Hitung η_DFA Akhir] → [Standardisasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Desain Awal (*Coffee Enema Basket*)

Berdasarkan paper Amirullah dan Jakaria (2024), kami merekonstruksi data teknis untuk desain awal dan desain hasil optimasi sebagai kasus pembelajaran:

| Parameter | Desain Awal (*As-Is*) | Desain Baru (*To-Be*) |
|-----------|----------------------|------------------------|
| Jumlah komponen $N_t$ | 12 | 7 |
| Jumlah minimum teoritis $N_m$ | 4 | 4 |
| Waktu perakitan total (detik) | 240 | 110 |
| Biaya material (IDR/unit) | 38.500 | 24.200 |
| Biaya fabrikasi (IDR/unit) | 22.000 | 14.500 |
| Biaya perakitan (IDR/unit) | 8.400 | 3.850 |
| Massa total (gram) | 285 | 198 |

### 4.2 Perhitungan Indeks DFA

**Desain Awal:**

$$\eta_{DFA}^{(awal)} = \frac{N_m}{N_t} \times 100\% = \frac{4}{12} \