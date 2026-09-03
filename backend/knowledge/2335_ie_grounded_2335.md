# 2335 — Redesain Produk Kesehatan Berbasis DFMA: Integrasi Prinsip Design for Manufacture and Assembly untuk Efisiensi Manufaktur dan Asembling di Industri Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan salah satu sektor manufaktur dengan tingkat regulasi paling ketat di dunia. Menurut Amirullah dan Jakaria (2024) dalam tulisannya yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309), redesain produk medis sekelas *coffee enema basket*—sebuah alat terapi higienis berbasis irrigasi yang banyak digunakan dalam praktik wellness dan klinik detoksifikasi—menjadi studi kasus menarik untuk aplikasi metodologi Design for Manufacture and Assembly (DFMA). Produk ini awalnya dirancang tanpa pertimbangan sistematis terhadap kemampuan manufaktur dan proses perakitan, sehingga menghasilkan geometri yang sulit diproduksi, jumlah komponen yang berlebihan, serta tingkat reject rate yang cukup signifikan pada lini produksi UMKM maupun industri menengah. Urgensi redesain muncul dari tiga faktor konkuren: pertama, meningkatnya permintaan global akan alat kesehatan rumah tangga yang *user-friendly* dan higienis; kedua, tekanan kompetitif yang menuntut *lead time* produksi lebih pendek dengan biaya per unit lebih rendah; ketiga, kebutuhan akan standarisasi dimensi agar memudahkan *after-sales service* dan ketersediaan suku cadang.

Dalam konteks yang lebih luas, Mubashir Islam (2024) pada *Journal of Sustainable Development and Policy* dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa integrasi prinsip DfMA ke dalam kerangka multi-kriteria—bahkan ketika diterapkan pada konstruksi jembatan pracetak dengan teknologi BIM—secara konsisten memperbaiki kualitas keputusan desain pada tahap konseptual dan preliminary. Temuan ini paralel dengan kasus coffee enema basket, di mana keputusan desain yang terlalu dini tanpa mempertimbangkan kemampuan manufaktur dan proses perakitan akan menghasilkan masalah *buildability* yang baru teridentifikasi pada tahap *shop-drawing* atau bahkan saat perakitan di lantai produksi, ketika koreksi sudah sangat mahal dan memakan waktu. Dengan demikian, adopsi DFMA bukan hanya soal penghematan biaya sesaat, melainkan transformasi proses pengembangan produk yang sistematis dan berbasis data.

Permasalahan operasional yang khas pada produk *coffee enema basket* generasi awal mencakup tingkat kesulitan perakitan yang tinggi karena penggunaan pengencang ulir (threaded fasteners) dalam jumlah banyak, geometri komponen yang memerlukan operasi *machining* tambahan, serta pemilihan material stainless steel grade yang tidak optimal untuk proses *sheet metal forming*. Ketiga isu ini secara kumulatif meningkatkan *manufacturing cost* sekaligus menurunkan *first-pass yield*. Oleh karena itu, studi Amirullah dan Jakaria (2024) berupaya melakukan redesain dengan pendekatan DFMA untuk mencapai tiga sasaran simultan: (i) reduksi jumlah komponen tanpa mengorbankan fungsi, (ii) penurunan waktu perakitan melalui penyederhanaan gerakan tangan operator, dan (iii) penurunan biaya produksi total melalui optimalisasi proses fabrikasi. Pendekatan ini juga relevan dengan tren *Industry 4.0* yang menuntut integrasi digital twin dan simulasi proses sejak tahap desain.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan dalam studi Amirullah dan Jakaria (2024) berakar pada dua pilar analitis, yaitu Design for Manufacture (DFM) dan Design for Assembly (DFA), yang secara historis diformalkan oleh Boothroyd dan Dewhurst. Kedua pilar ini memiliki formulasi matematis yang dapat digunakan untuk mengevaluasi kualitas desain secara kuantitatif.

### 2.1 Indeks Efisiensi Desain untuk Manufaktur (DFM)

Indeks DFM dapat dinyatakan sebagai rasio antara biaya manufaktur minimum yang dapat dicapai terhadap biaya manufaktur aktual:

$$\eta_{DFM} = \frac{C_{m,min}}{C_{m,actual}} \times 100\%$$

di mana $C_{m,min}$ adalah biaya manufaktur teoritis minimum dan $C_{m,actual}$ adalah biaya manufaktur aktual desain. Semakin mendekati 100%, semakin efisien desain dari sisi manufaktur.

### 2.2 Indeks Efisiensi Perakitan (DFA Boothroyd-Dewhurst)

Indeks efisiensi perakitan menurut Boothroyd-Dewhurst diformulasikan sebagai:

$$E_{ma} = \frac{N_m \cdot t_{ma}}{t_a} \times 100\%$$

di mana:
- $N_m$ = jumlah minimum teoritis komponen
- $t_{ma}$ = waktu perakitan teoritis minimum per komponen (detik)
- $t_a$ = waktu perakitan aktual total (detik)

### 2.3 Biaya Manufaktur Total

Biaya manufaktur total per unit produk dihitung menggunakan rumus:

$$C_{total} = C_{material} + C_{proses} + C_{asembling} + C_{overhead}$$

di mana:
$$C_{material} = \sum_{i=1}^{n} (\rho_i \cdot V_i \cdot p_i)$$

dengan $\rho_i$ adalah densitas material, $V_i$ adalah volume komponen, dan $p_i$ adalah harga material per satuan massa. Sementara itu, biaya proses dinyatakan sebagai:

$$C_{proses} = \sum_{j=1}^{m} (t_{op,j} \cdot r_j \cdot (1 + s_j))$$

di mana $t_{op,j}$ adalah waktu operasi mesin, $r_j$ adalah tarif mesin, dan $s_j$ adalah faktor scrap untuk operasi $j$.

### 2.4 Waktu Perakitan Kumulatif

Waktu perakitan total berdasarkan hukum logaritmik Heckel (kumulatif operasi) adalah:

$$T_a = \sum_{k=1}^{N} t_k \cdot N_k$$

di mana $t_k$ adalah waktu standar untuk operasi perakitan ke-$k$ dan $N_k$ adalah jumlah pengulangan operasi tersebut.

### 2.5 Reduksi Biaya Pascaredisain

Persentase penurunan biaya setelah redesain dapat dihitung sebagai:

$$\Delta C\% = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

Formulasi-formulasi ini yang selanjutnya menjadi dasar perhitungan pada bagian Studi Kasus Kuantitatif di bawah.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Studi Amirullah dan Jakaria (2024) mengikuti kerangka DFMA sistematis yang terdiri dari tujuh tahapan. Pendekatan ini juga selaras dengan alur kerangka multi-kriteria berbasis BIM yang dikemukakan oleh Islam (2024), di mana keputusan desain dievaluasi sejak tahap konseptual.

**Tahap 1 — Reverse Engineering dan Disassembly Analysis.** Desain eksisting dibongkar untuk menginventarisasi seluruh komponen, mengidentifikasi fungsi setiap bagian, serta mencatat waktu dan kesulitan perakitan aktualnya. Data ini menjadi *baseline* komparasi.

**Tahap 2 — Function Analysis (Function Means Tree).** Setiap komponen dipetakan terhadap fungsi primer (mendukung coffee filter), fungsi sekunder (menjaga kekokohan struktural), dan fungsi tersier (estetika). Komponen yang tidak memberikan kontribusi fungsi signifikan dikandidat-kan untuk eliminasi.

**Tahap 3 — Design for Manufacture Evaluation.** Dilakukan pemilihan material, proses fabrikasi (sheet metal forming, laser cutting, stamping), serta toleransi geometris yang realistis untuk menekan scrap rate. Prinsip DFM yang diterapkan antara lain: avoidance of separate fasteners, penggunaan proses single-setup, dan optimalisasi *material utilization* pada *nesting sheet*.

**Tahap 4 — Design for Assembly Boothroyd-Dewhurst.** Komponen dievaluasi berdasarkan tiga kriteria: (a) selama pengoperasian, apakah komponen bergerak relatif terhadap komponen lain? (b) apakah komponen harus terpisah karena diperlukan perbedaan material? (c) apakah komponen terpisah karena diperlukan akses untuk disassembly? Jika semua jawaban "tidak", komponen layak digabung.

**Tahap 5 — Concept Generation dan CAD Modeling.** Konsep baru dihasilkan menggunakan software CAD 3D, dengan mempertimbangkan *snap-fit*, *press-fit*, dan *welding* sebagai alternatif pengencang ulir.

**Tahap 6 — Prototyping dan Uji Coba.** Prototipe dicetak/difabrikasi untuk verifikasi dimensi, kekuatan, dan waktu perakitan aktual oleh panelis terlatih.

**Tahap 7 — Validasi Kuantitatif.** Seluruh metrik DFMA dihitung dan dibandingkan dengan baseline. Diagram alir proses secara keseluruhan mengikuti alur: Identifikasi Masalah → Disassembly → Function Analysis → Konsep Redesain → Evaluasi DFM/DFA → Prototipe → Validasi → Implementasi.

SOP ini memastikan bahwa setiap keputusan redesain terdokumentasi, terukur, dan dapat diaudit—sesuai dengan prinsip *Good Manufacturing Practice* (GMP) untuk medical devices ISO 13485.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan kerangka yang dipublikasikan oleh Amirullah dan Jakaria (2024), berikut adalah simulasi perhitungan kuantitatif yang merepresentasikan tipikal hasil redesain produk *coffee enema basket*. Diasumsikan data sebagai berikut:

**Desain Eksisting (Before):**
- Jumlah komponen: $N_{a,before} = 12$ komponen
- Jumlah operasi perakitan: 18 operasi
- Waktu perakitan aktual: $t_{a,before} = 180$ detik
- Material: Stainless Steel 304, total massa 850 gram
- Biaya material: $C_{mat,before} = \$8.50$
- Biaya proses: $C_{proses,before} = \$4.20$
- Biaya perakitan: $C_{as,before} = \$3.60$
- Overhead (alokasi): $C_{ov,before} = \$2.50$
- **Total biaya sebelum redesain: $C_{before} = \$18.80$/unit**

**Desain Redesain (After):**
- Jumlah komponen: $N_{a,after} = 6$ komponen
- Jumlah operasi perakitan: 9 operasi
- Waktu perakitan aktual: $t_{a,after} = 78$ detik
- Material: tetap SS 304, massa berkurang menjadi 540 gram
- Biaya material: $C_{mat,after} = \$5.40$
- Biaya proses: $C_{proses,after} = \$2.85$
- Biaya perakitan: $C_{as,after} = \$1.56$
- Overhead: $C_{ov,after} = \$1.65$
- **Total biaya setelah redesain: $C_{after} = \$11.46$/unit**

### 4.1 Perhitungan Indeks DFA

Minimum teoritis komponen diasumsikan $N_m = 4$ dan waktu perakitan teoritis per komponen $t_{ma} = 12$ detik (asumsi standar Boothroyd-Dewhurst untuk operasi insertion sederhana).

**Sebelum redesain:**
$$E_{ma,before} = \frac{4 \times 12}{180} \times 100\% = \frac{48}{180} \times 100\% = 26.67\%$$

**Setelah redesain:**
$$E_{ma,after} = \frac{4 \times 12}{78} \times 100\% = \frac{48}{78} \times 100\% = 61.54\%$$

Peningkatan efisiensi perakitan: $\Delta E = 61.54\% - 26.67\% = 34