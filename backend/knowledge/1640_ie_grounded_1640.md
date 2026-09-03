# 1640 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dan Pergudangan dengan Metode NASA-TLX: Perspektif Rekayasa Sumber Daya Manusia dan Ergonomi Kognitif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik last-mile di Indonesia mengalami ekspansi eksponensial yang didorong oleh booming e-commerce, di mana Shopee Express sebagai salah satu raksasa pengiriman tercatat menangani volume paket harian yang fluktuatif tergantung pola konsumsi musiman (Rafi & Putra, 2024). Dalam ekosistem ini, mitra kurir atau *partner employees* berfungsi sebagai *frontline cognitive operators* yang tidak hanya mengangkat paket secara fisik, tetapi juga memproses informasi multi-kanal: pemindaian barcode, verifikasi alamat berbasis aplikasi, komunikasi real-time dengan pelanggan via WhatsApp, navigasi rute optimal melalui Google Maps, dan penyelesaian dispute pengiriman. Beban kumulatif dari tuntutan kognitif ini sering kali luput dari perhatian manajerial, padahal secara fisiologis berkaitan langsung dengan fenomena *cognitive fatigue*, *decision paralysis*, dan *human error* yang berkontribusi terhadap *failed delivery rate* dan *customer dissatisfaction*.

Rafi & Putra (2024) dalam studi mereka menyoroti urgensi kuantifikasi beban kerja mental (mental workload) sebagai variabel intervening antara intensitas operasional dan kinerja sistem logistik secara keseluruhan. Tanpa pengukuran ergonomis kognitif yang valid, perusahaan pengiriman cenderung over-estimate kapasitas mental karyawannya, yang berujung pada burnout, absenteeism, dan turnover—fenomena yang secara industri dikenal sebagai *logistics workforce crisis* dengan biaya替换 karyawan mencapai 150–200% gaji tahunan di pasar tenaga kerja ASEAN. Studi kedua oleh Aditya.R & Putra (2024) memperkuat argumentasi ini dengan memperluas analisis ke operator gudang (warehouse operators) yang menghadapi beban mental berbeda namun saling komplementer: kombinasi antara work sampling untuk menentukan proporsi waktu kerja produktif dan NASA-TLX untuk menilai intensitas kognitif selama aktivitas sortir, *packing*, dan inventory management.

Konteks industri yang melatari kedua riset ini sangat relevan dengan agenda transformasi digital logistik nasional. Indonesia mencatatkan rata-rata peningkatan pengiriman e-commerce sebesar 23% year-on-year, namun rasio operator per volume paket justru menurun akibat adopsi teknologi yang seharusnya *augmenting* tetapi dalam praktiknya sering kali *loading* lebih banyak tugas ke manusia (Rafi & Putra, 2024). Oleh karena itu, integrasi metodologi ergonomi kognitif seperti NASA-TLX ke dalam siklus Human Factors Engineering bukan lagi opsional melainkan prasyarat strategis untuk menjaga keseimbangan produktivitas, keselamatan kerja, dan kesejahteraan operator di titik kritis rantai pasok.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (NASA Task Load Index) adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) untuk mengukur *subjective workload* melalui enam subskala utama yang saling ortogonal secara konseptual. Keenam subskala tersebut adalah: **Mental Demand (MD)**, **Physical Demand (PD)**, **Temporal Demand (TD)**, **Performance (PE)**, **Effort (EF)**, dan **Frustration (FR)**. Setiap subskala dinilai oleh responden pada skala bipolar 0–100 (atau 1–20 dalam versi ringkas), kemudian diberi bobot melalui prosedur *card-sorting pairwise comparison* (Rafi & Putra, 2024).

Formulasi matematis dasar untuk menghitung **Raw TLX (RTLX)** adalah sebagai berikut:

$$TLX_{raw} = \sum_{i=1}^{6} \left( w_i \cdot r_i \right)$$

di mana $w_i$ adalah bobot hasil *pairwise comparison* (bernilai 0 atau 1 per pasangan, dengan total 15 pasangan menghasilkan bobot kumulatif 0–5 per dimensi, yang kemudian dinormalisasi menjadi total 1), dan $r_i$ adalah skor rating responden pada dimensi ke-$i$. Untuk keperluan analisis agregat, bobot ternormalisasi didefinisikan sebagai:

$$w_i^{norm} = \frac{w_i^{raw}}{\sum_{j=1}^{6} w_j^{raw}}$$

sehingga *Weighted TLX* akhir menjadi:

$$TLX_{weighted} = \sum_{i=1}^{6} \left( \frac{w_i^{raw}}{\sum_{j=1}^{6} w_j^{raw}} \cdot r_i \right)$$

Aditya.R & Putra (2024) mengintegrasikan NASA-TLX dengan **Work Sampling** untuk menangkap dimensi temporal beban kerja. Dalam metode work sampling, proporsi waktu yang dihabiskan untuk aktivitas tertentu diestimasi melalui observasi acak (*random instantaneous observation*) dengan total pengamatan $N$ dan jumlah observasi pada kategori aktivitas ke-$k$ sebesar $n_k$. Proporsi aktivitas dihitung menggunakan formula *binomial proportion* dengan *confidence interval* pada tingkat kepercayaan $(1-\alpha)$:

$$P_k = \frac{n_k}{N}, \quad \text{ dengan } CI_{95\%} = P_k \pm 1.96\sqrt{\frac{P_k(1-P_k)}{N}}$$

Nilai $P_k$ merepresentasikan peluang proporsi waktu kerja yang dihabiskan untuk aktivitas sortir manual versus administratif versus idle. Ketika dikombinasikan dengan skor NASA-TLX per aktivitas, diperoleh **Effective Cognitive Load (ECL)** sebagai berikut:

$$ECL = \sum_{k=1}^{K} \left( P_k \cdot TLX_k \right)$$

di mana $TLX_k$ adalah skor beban mental rata-rata yang dilaporkan operator saat menjalankan aktivitas kategori ke-$k$. ECL merepresentasikan intensitas beban mental rata-rata yang dialami operator selama satu siklus kerja penuh (Aditya.R & Putra, 2024). Klasifikasi tingkat beban kerja berdasarkan skor TLX mengikuti panduan literatur: $0 \leq TLX < 20$ (sangat rendah), $20 \leq TLX < 40$ (rendah), $40 \leq TLX < 60$ (sedang), $60 \leq TLX < 80$ (tinggi), dan $80 \leq TLX \leq 100$ (sangat tinggi/overload).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX mengikuti **enam tahapan SOP** yang diadopsi oleh Rafi & Putra (2024) serta Aditya.R & Putra (2024). Tahapan ini selaras dengan standar *Human Factors and Ergonomics Society (HFES) Procedural Guidelines* dan *ISO 10075 tentang Ergonomic Principles Related to Mental Workload*.

**Tahap 1: Identifikasi populasi dan segmentasi tugas.** Operator diklasifikasikan berdasarkan zona kerja (last-mile courier, warehouse sorter, packing staff, dispatcher) dan shift (pagi/siang/malam) untuk mengendalikan variabel pengganggu (*confounding variables*). Ukuran sampel minimum mengikuti rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $e$ sebagai margin of error (umumnya 0,05). Untuk $N=150$ operator, $n \approx 109$ responden (Rafi & Putra, 2024).

**Tahap 2: Validasi kuesioner dan uji coba.** Instrumen NASA-TLX versi bilingual (Bahasa Indonesia-Inggris) diuji *cognitive pretest* kepada 10 operator pilot untuk memastikan reliabilitas. Uji Cronbach's Alpha harus memenuhi $\alpha \geq 0{,}70$ sebelum deploy penuh.

**Tahap 3: Prosedur pembobotan (Pairwise Comparison).** Setiap responden diminta memilih dimensi yang "lebih memberatkan" dari 15 pasangan dimensi yang disajikan dalam kartu. Hasil ini menghasilkan vektor bobot $w^{raw} = [w_{MD}, w_{PD}, w_{TD}, w_{PE}, w_{EF}, w_{FR}]$.

**Tahap 4: Pengukuran skor dimensi.** Responden menilai keenam dimensi menggunakan *visual analog scale* 0–100. Langkah 3 dan 4 dilakukan secara *paper-and-pencil* di akhir shift untuk menghindari *measurement bias* selama kerja aktif.

**Tahap 5: Agregasi data dan uji statistik.** Skor TLX individu diagregasi per kelompok tugas, kemudian diuji beda menggunakan *Independent Samples t-Test* atau *Mann-Whitney U Test* (jika distribusi tidak normal). Untuk analisis multi-faktor digunakan *Two-Way ANOVA* dengan interaksi shift × zona kerja (Aditya.R & Putra, 2024).

**Tahap 6: Rekomendasi rekayasa dan feedback loop.** Hasil TLX dipetakan ke dalam *risk matrix* (kontinum hijau-kuning-merah) untuk menentukan apakah suatu岗位 memerlukan redistribusi tugas, *task rotation*, pelatihan ulang, atau penambahan operator. *Feedback loop* triwulanan diwajibkan untuk memvalidasi efektivitas intervensi.

Diagram alir prosesnya secara ringkas: **[Identifikasi Masalah → Pengumpulan Data Work Sampling → Kuesioner NASA-TLX → Perhitungan Bobot → Perhitungan Skor TLX → Uji Statistik → Risk Mapping → Intervensi Ergonomi → Monitoring Ulang]**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus 1: Kurir Shopee Express (berdasarkan Rafi & Putra, 2024).** Misalkan seorang kurir last-mile bernama Operator A menyelesaikan rute pengiriman 35 paket dalam shift 8 jam. Kuesioner NASA-TLX menghasilkan skor dimensi sebagai berikut: MD = 75, PD = 60, TD = 80, PE = 30, EF = 70, FR = 55. Hasil *pairwise comparison* memberikan bobot mentah: $w_{MD}=5$, $w_{PD}=3$, $w_{TD}=4$, $w_{PE}=1$, $w_{EF}=2$, $w_{FR}=0$. Total bobot mentah: $\sum w_j^{raw} = 5+3+4+1+2+0 = 15$.

Normalisasi bobot:
$$w_{MD}^{norm} = \frac{5}{15} = 0{,}333; \quad w_{PD}^{norm} = 0{,}200; \quad w_{TD}^{norm} = 0{,}267$$
$$w_{PE}^{norm} = 0{,}067; \quad w_{EF}^{norm} = 0{,}133; \quad w_{FR}^{norm} = 0{,}000$$

Skor TLX terboboti:
$$TLX_A = (0{,}333 \cdot 75) + (0{,}200 \cdot 60) + (0{,}267 \cdot 80) + (0{,}067 \cdot 30) + (0{,}133 \cdot 70) + (0{,}000 \cdot 55)$$
$$TLX_A = 24{,}98 + 12{,}00 + 21{,}33 + 2{,}00 + 9{,}33 + 0{,}00 = 69{,}64$$

Interpretasi: Skor 69,64 jatuh dalam kategori **TINGGI (60–80)**. Ini mengindikasikan bahwa Operator A mengalami *cognitive overload*, terutama didorong oleh Mental Demand (75) dan Temporal Demand (80). Rekomendasi manajerial: redistribusi volume paket ke maksimum 28 paket/shift, implementasi *micro-break* setiap 90 menit, dan penyediaan aplikasi navigasi dengan algoritma optimasi rute untuk menurunkan Temporal Demand.

**Studi Kasus 2: Warehouse Operator (berdasarkan Aditya.R & Putra, 2024).** Sebuah *fulfillment center* memiliki 3 kategori aktivitas utama hasil work sampling: sortir (45%), packing (35%), dan administrasi (20%). Dari 400 observasi acak (95% CI, $e=5\%$): $n_{sortir}=180$, $n_{packing}=140$, $n_{admin}=80$. Skor NASA-TLX rata-rata per aktivitas: $TLX_{sortir}=72$, $TLX_{packing}=58$, $TLX_{admin}=45$. Maka:

$$ECL = (0{,}45 \cdot 72) + (0{,}35 \cdot 58) + (0{,}20 \cdot 45) = 32{,}40 + 20{,}30 + 9{,}00 = 61{,}70$$

Interpretasi: ECL = 61,70 berada pada level **TINGGI**. Aktivitas sortir memberikan kontribusi terbesar (52,5%) terhadap total beban mental. Rekomendasi: otomatisasi sortir menggunakan *conveyor belt* dengan *dimensioner scanner* dan implementasi *pick-to-light system* untuk meredistribusi beban kognitif sortir ke antarmuka visual ergonomis, bukan ke memori operator.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Evaluasi Kritis.** Metode NASA-TLX, meskipun robust dan telah divalidasi secara psikometrik lintas industri, memiliki tiga keterbatasan utama yang harus diakui (Rafi & Putra, 2024; Aditya.R & Putra, 2024). Pertama, sifatnya *self-reported* rentan terhadap *social desirability bias* dan *recall bias*—operator mungkin meremehkan frustrasi karena takut evaluasi kinerja negatif. Kedua, *pairwise comparison* memerlukan waktu 10–15 menit per responden yang dapat menjadi *downtime* produktif jika dilakukan terlalu sering. Ketiga, validitas lintas budaya