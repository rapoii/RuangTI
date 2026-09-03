# 1943 — Analisis Implementasi FMEA AIAG/VDA dalam Industri Manufaktur Otomotif dan Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan kompetitif yang semakin intensif terkait dengan jaminan kualitas (*quality assurance*), keandalan produk (*product reliability*), dan kepatuhan terhadap regulasi keselamatan pelanggan. Dalam konteks ini, *Failure Mode and Effects Analysis* (FMEA) telah lama menjadi tulang punggung program rekayasa keandalan (*reliability engineering*), namun versi klasik yang dipublikasikan AIAG pada tahun 2008 menunjukkan sejumlah keterbatasan, terutama dalam hal subjektivitas skor *Risk Priority Number* (RPN), inkonsistensi antar-pemasok (*supplier*), dan tidak adanya korelasi langsung dengan tindakan perbaikan yang terstruktur. Berdasarkan riset Bizeli & Terazzi (2024) yang dipublikasikan di *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155), standar gabungan *AIAG-VDA FMEA Handbook* yang dirilis pada tahun 2019 merepresentasikan evolusi metodologis yang signifikan. Riset tersebut—yang menggunakan desain deskriptif-kualitatif melalui studi kasus dengan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di sebuah perusahaan multinasional produsen komponen otomotif—mendokumentasikan secara empiris bahwa adopsi FMEA AIAG/VDA tidak hanya berfungsi sebagai alat mitigasi risiko, tetapi juga sebagai instrumen integrasi lintas-fungsi (*cross-functional integration*) antara tim desain, manufaktur, kualitas, dan pembelian.

Urgensi ekonomis dari adopsi metodologi ini sangat substansial. Dalam industri零部件 (*parts manufacturer*) otomotif, biaya klaim garansi (*warranty claims*), penarikan produk (*recalls*), dan pengerjaan ulang (*rework*) dapat mencapai 4–10% dari total pendapatan perusahaan tergantung pada kompleksitas produk. Bizeli dan Terazzi (2024) secara eksplisit menyatakan bahwa implementasi AIAG/VDA FMEA "mempromosikan pencegahan kegagalan, mengurangi biaya terkait rework dan recalls, serta meningkatkan keandalan produk." Lebih lanjut, kontribusi terhadap integrasi tim dan optimalisasi proses produksi mengindikasikan bahwa FMEA telah bertransformasi dari sekadar dokumen kepatuhan menjadi *strategic enabler* bagi perbaikan berkelanjutan (*continuous improvement*). Di sisi lain, tantangan seperti resistensi organisasi terhadap adopsi metodologi baru, kebutuhan akan pelatihan berkelanjutan, dan resistensi kultural terhadap perubahan (*change resistance*) menjadi hambatan utama yang harus diantisipasi oleh manajemen.

Secara paralel, aplikasi FMEA tidak terbatas pada industri otomotif. Saputra & Sukmono (2024) dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) mendemonstrasikan penerapan FMEA pada pemeliharaan mesin *CNC Milling*, yang merupakan komponen kritis dalam rantai pasok manufaktur presisi (*precision manufacturing*). Konteks ini mempertegas bahwa FMEA, baik dalam format AIAG/VDA maupun konvensional, merupakan metodologi trans-sektoral yang memiliki nilai通用 (*versatility*) tinggi dalam mengelola risiko kegagalan aset dan proses di lantai produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Evolusi dari RPN ke Action Priority (AP)

Pendekatan FMEA klasik menggunakan *Risk Priority Number* (RPN) yang diformulasikan sebagai:

$$RPN = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan dampak kegagalan terhadap pelanggan akhir), $O$ adalah *Occurrence* (frekuensi kegagalan terjadi), dan $D$ adalah *Detection* (kemampuan deteksi kegagalan sebelum produk/jasa sampai ke pelanggan). Masing-masing parameter diskalakan secara diskret dari 1 hingga 10.

Namun, AIAG/VDA 2019 mengeliminasi pendekatan RPN karena tiga kelemahan fundamental: (1) dua kombinasi parameter $(S, O, D)$ yang berbeda dapat menghasilkan RPN identik (misalnya $S=10, O=2, D=5$ vs $S=5, O=5, D=4$ keduanya menghasilkan 100), (2) distribusi RPN bersifat triangular dan tidak mencerminkan prioritas risiko aktual, dan (3) penggunaan RPN tidak menghasilkan rekomendasi tindakan yang proporsional.

Sebagai gantinya, AIAG/VDA memperkenalkan *Action Priority* (AP) yang dikategorikan ke dalam tiga tingkatan:

$$AP = f(S, O, D) \in \{H, M, L\}$$

di mana $H$ = *High* (tindakan wajib), $M$ = *Medium* (tindakan disarankan), dan $L$ = *Low* (tindakan opsional). Penetapan AP dilakukan melalui *lookup matrix* yang didefinisikan oleh AIAG/VDA, di mana kombinasi tertentu dari triplet $(S, O, D)$ memetakan langsung ke tingkat AP yang telah tervalidasi secara industri. Sebagai contoh, kombinasi $S \geq 9$ dengan $O \geq 4$ dan sembarang $D$ akan langsung dipetakan ke $AP = H$ tanpa perlu kalkulasi perkalian.

### 2.2 Formulasi RPN untuk Kasus Pemeliharaan CNC

Untuk konteks pemeliharaan mesin CNC yang dibahas oleh Saputra & Sukmono (2024), meskipun pendekatan AIAG/VDA modern lebih disukai, formulasi RPN klasik tetap digunakan secara luas karena transparansi kuantitatifnya. Dalam studi tersebut, parameter didefinisikan ulang untuk konteks *asset maintenance*:

$$S_i = \text{skor dampak kegagalan komponen } i \text{ terhadap availability mesin}$$

$$O_i = \frac{N_i}{T_{op}} \times 1000$$

di mana $N_i$ adalah jumlah kejadian kegagalan dalam periode operasi $T_{op}$ (dalam jam), sehingga $O_i$ merepresentasikan *failure rate* per 1000 jam operasi (*MTBF inverse*).

$$D_i = \text{skor probabilitas kegagalan tidak terdeteksi sebelum menyebabkan downtime}$$

### 2.3 Formulasi *Overall Equipment Effectiveness* (OEE) Terkait

FMEA pemeliharaan secara langsung memengaruhi OEE melalui reduksi *downtime*:

$$OEE = A \times P \times Q$$

di mana $A$ = *Availability* (rasio waktu operasi terhadap waktu tersedia), $P$ = *Performance* (rasio kecepatan aktual terhadap kecepatan standar), dan $Q$ = *Quality* (rasio produk cacat terhadap total produksi). Tindakan perbaikan yang diprioritaskan melalui FMEA diharapkan memberikan efek dominan pada peningkatan $A$.

### 2.4 Model Kuantifikasi Penghematan Biaya

Bizeli & Terazzi (2024) menyiratkan manfaat ekonomi FMEA yang dapat dikuantifikasi melalui *Cost of Poor Quality* (COPQ) sebelum dan sesudah implementasi:

$$\Delta COPQ = COPQ_{sebelum} - COPQ_{sesudah}$$

dengan komponen biaya meliputi: biaya rework ($C_{rw}$), biaya scrap ($C_{sc}$), biaya garansi ($C_{wr}$), biaya inspeksi ($C_{insp}$), dan biaya downtime ($C_{dt}$):

$$COPQ = C_{rw} + C_{sc} + C_{wr} + C_{insp} + C_{dt}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Kerangka Kerja AIAG/VDA FMEA

Berdasarkan Bizeli & Terazzi (2024), implementasi FMEA AIAG/VDA mengikuti tujuh langkah prosedural:

1. **Planning and Preparation** — Penentuan cakupan (*scope*), pemilihan tim lintas-fungsi (Rekayasa, Manufaktur, Kualitas, Purchasing, Layanan Pelanggan), dan penyelarasan dengan *Customer Specific Requirements* (CSR) OEM.
2. **Structure Analysis** — Dekomposisi sistem menggunakan *Block Diagram* untuk FMEA sistem atau *Structure Tree* / *Boundary Diagram* untuk FMEA desain.
3. **Function Analysis** — Penulisan fungsi menggunakan format *noun + verb* yang terstruktur, dengan mengidentifikasi fungsi produk (pelanggan-facing) dan fungsi proses.
4. **Failure Analysis** — Identifikasi *failure modes* untuk setiap fungsi, *failure causes* (potensial), dan *failure effects* (akibat).
5. **Risk Analysis** — Penilaian triplet $(S, O, D)$ menggunakan tabel severity, occurrence, dan detection yang telah distandardisasi, kemudian pemetaan ke tingkat AP.
6. **Optimization** — Penetapan *Action Plan* untuk item dengan AP = H (dan sebagian M sesuai judgement), penunjukan *owner*, *due date*, dan *effectivity verification*.
7. **Results Documentation** — Pembuatan *FMEA Worksheet* final yang ditandatangani seluruh anggota tim sebagai *single source of truth*.

### 3.2 Diagram Alir Proses Implementasi

```
[Mulai] → [Pembentukan Tim Lintas-Fungsi] 
    → [Identifikasi Cakupan & Batas Sistem]
        → [Analisis Struktur dengan Block Diagram]
            → [Analisis Fungsi (Noun+Verb)]
                → [Identifikasi Failure Modes & Effects]
                    → [Pemberian Skor S, O, D]
                        → [Penentuan Action Priority]
                            → [Apakah AP = H?]
                                ├─ Ya → [Tetapkan Action Plan + Owner + Due Date]
                                └─ Tidak → [Dokumentasi & Monitoring Periodik]
                                    → [Verifikasi Efektivitas Tindakan]
                                        → [Update Worksheet & Lessons Learned]
                                            → [Selesai]
```

### 3.3 SOP Pemeliharaan Mesin CNC berbasis FMEA (Saputra & Sukmono, 2024)

Untuk aplikasi pada mesin CNC Milling, SOP mencakup: (1) kompilasi data historis kegagalan (*failure history*) dari *Maintenance Management System*; (2) identifikasi komponen kritis berdasarkan *criticality analysis*; (3) penilaian $(S, O, D)$ oleh tim pemeliharaan dan produksi; (4) kalkulasi RPN dan *ranking*; (5) penjadwalan *preventive maintenance* berbasis prioritas; (6) implementasi *condition-based monitoring* untuk item dengan AP tinggi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Komponen Otomotif Transmission Gear

Mengacu pada konteks yang dibahas Bizeli & Terazzi (2024), misalkan sebuah perusahaan memproduksi *transmission gear* untuk transmisi otomatis 6-percepatan. Tim FMEA mengidentifikasi fungsi kritis: "Mengirim torsi dari input shaft ke output shaft pada rasio yang telah ditentukan tanpa kebisingan." Tabel FMEA berikut ini merepresentasikan subset tipikal:

| No | Item | Failure Mode | Effect | S | O | D | AP | Action Priority |
|----|------|--------------|--------|---|---|---|---|-----------------|
| 1 | Gigi pinion | Aus prematur | Kebisingan transmisi | 8 | 5 | 4 | **H** | Wajib tindakan |
| 2 | Bantalan | Kehilangan preload | Getaran, kebisingan | 7 | 3 | 5 | M | Disarankan |
| 3 | Seal | Kebocoran oli | Kontaminasi, kerugian oli | 8 | 2 | 3 | M | Disarankan |
| 4 | Housing | Retak lelah | Kegagalan katastrofik | 9 | 1 | 7 | H | Wajib tindakan |

Perhatikan bahwa item #1 memiliki RPN klasik = $8 \times 5 \times 4 = 160$, dan item #4 memiliki RPN = $9 \times 1 \times 7 = 63$. Dalam pendekatan lama, item #1 akan diprioritaskan. Namun dalam AIAG/VDA, kedua item memiliki AP = H sehingga keduanya memerlukan *Action Plan* simultan. Item #4 dengan severity 9 tidak boleh diabaikan hanya karena occurrence-nya rendah—ini adalah salah satu kekuatan utama pendekatan AP.

### 4.2 Kalkulasi Numerik Pemeliharaan CNC Milling

Berdasarkan kerangka Saputra & Sukmono (2024), tinjau sebuah mesin *CNC Vertical Machining Center* dengan data historis berikut dalam periode 6 bulan ($T_{op} = 2.880$ jam):

| Komponen | Failure Mode | $N_i$ | $S_i$ | $D_i$ | $O_i$ (per 1000 jam) |
|----------|--------------|-------|-------|-------|----------------------|
| Spindle bearing | Overheat | 3 | 9 | 5 | 1,04 |
| Tool changer | Failure to index | 8 | 7 | 4 | 2,78 |
| Coolant pump | Cavitation | 5 | 6 | 6 | 1,74 |
| Ball screw X-axis | Backlash > 0,02 mm | 4 | 8 | 7 | 1,39 |
| Servo motor Y | Encoder error | 2 | 7 | 5 | 0,69 |

**Langkah 1: Hitung RPN untuk setiap mode:**

$$RPN_{spindle} = 9 \times 1{,}04 \times 5 \approx 47$$

$$RPN_{tool\,changer} = 7 \times 2{,}78 \times 4 \approx 78$$

$$RPN_{coolant} = 6 \times