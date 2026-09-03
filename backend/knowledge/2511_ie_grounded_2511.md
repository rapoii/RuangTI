# 2511 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk Alat Kesehatan dengan Pendekatan Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah & Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan sektor manufaktur yang memiliki karakteristik unik karena produk yang dihasilkan harus memenuhi standar keamanan, sterilitas, dan fungsionalitas klinis yang ketat. Amirullah & Jakaria (2024) dalam publikasi pada DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti permasalahan desain produk *coffee enema basket* — sebuah komponen alat kesehatan yang berfungsi sebagai wadah penyaring bubuk kopi dalam prosedur terapi alternatif yang memerlukan desain higienis, mudah dirakit, serta efisien secara biaya produksi. Produk ini pada awalnya memiliki desain konvensional dengan jumlah bagian (*parts*) yang relatif banyak, prosedur perakitan yang kompleks, serta pemilihan material yang belum mempertimbangkan kemampuan manufaktur dan perakitan secara holistik.

Urgensi redesain produk ini muncul dari tiga faktor pendorong utama. Pertama, **tekanan biaya produksi** — pada produk alat kesehatan dengan volume produksi skala UMKM-menengah, biaya perakitan manual dapat mencapai 40–60% dari total biaya produksi (Amirullah & Jakaria, 2024). Kedua, **kebutuhan kepatuhan higienitas** — semakin banyak sambungan dan bagian kecil, semakin tinggi risiko *bioburden* yang sulit dibersihkan (*hard-to-clean crevices*). Ketiga, **persaingan pasar alat kesehatan rumahan** yang menuntut harga jual kompetitif tanpa menurunkan kualitas fungsional. Islam (2024) dalam DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) memperkuat konteks ini dengan menunjukkan bahwa integrasi DFMA pada tahap konseptual mampu mencegah *buildability problems* yang baru terungkap pada tahap *shop-drawing* atau instalasi lapangan — sebuah pola kegagalan yang juga relevan pada produk fabrikasi logam/plastik seperti keranjang coffee enema.

Pendekatan Design for Manufacture and Assembly (DFMA) muncul sebagai jawaban metodologis terhadap ketiga tantangan tersebut. DFMA mengintegrasikan dua subdomain: **Design for Manufacture (DFM)** yang mengoptimalkan desain terhadap proses manufaktur yang dipilih, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan. Dalam konteks redesain coffee enema basket, penerapan DFMA memungkinkan insinyur untuk (1) mengurangi jumlah bagian yang harus dirakit, (2) memilih proses manufaktur yang sesuai dengan volume produksi dan toleransi yang diminta, (3) menyederhanakan geometri agar proses machining, injection molding, atau stamping menjadi lebih efisien, dan (4) mengintegrasikan fungsi-fungsi multi-fungsi pada satu bagian (*part consolidation*). Tulisan ini akan menguraikan kerangka analitis dan prosedural DFMA tersebut secara mendalam untuk mendukung pengambilan keputusan rekayasa.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip DFMA dan Boothroyd-Dewhurst DFA

Metodologi DFMA yang diadopsi oleh Amirullah & Jakaria (2024) mengikuti kerangka Boothroyd-Dewhurst, yang secara kuantitatif mengukur efisiensi perakitan melalui **Design Efficiency ($\eta_{DFA}$)**:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_{a} \cdot t_{a}} \times 100\%$$

di mana:
- $N_{min}$ = jumlah bagian minimum teoretis yang dibutuhkan untuk memenuhi fungsi produk
- $t_{min}$ = waktu perakitan minimum teoretis (detik)
- $N_{a}$ = jumlah bagian aktual pada desain eksisting/baru
- $t_{a}$ = waktu perakitan aktual (detik)

Nilai $\eta_{DFA}$ dikategorikan sebagai berikut: **$\eta_{DFA} \geq 60\%$** menunjukkan desain perakitan yang sangat efisien; **40–60%** menunjukkan desain yang dapat diterima dengan perbaikan; **< 40%** menunjukkan desain yang perlu redesain substantif.

### 2.2 Analisis Waktu Perakitan dengan Pendekatan Boothroyd

Waktu perakitan aktual dihitung menggunakan model Boothroyd:

$$t_{a} = \sum_{i=1}^{N_{a}} \left( t_{h,i} + t_{i,i} + t_{f,i} \right)$$

di mana:
- $t_{h,i}$ = waktu *handling* bagian ke-$i$ (memegang, memposisikan)
- $t_{i,i}$ = waktu *insertion* (pemasangan bagian)
- $t_{f,i}$ = waktu *fastening* (pengencangan/penjepitan)

Untuk produk coffee enema basket yang terdiri dari bodi keranjang, pegangan, tutup, dan jaring saringan, setiap operasi insertion memerlukan klasifikasi kode DFA tiga digit (misalnya 010 = komponen self-retention tanpa deformasi). Waktu tipikal untuk kategori ini berdasarkan tabel Boothroyd adalah:

$$\bar{t} = \frac{\sum_{i=1}^{N_{a}} w_{i} \cdot t_{i}}{\sum_{i=1}^{N_{a}} w_{i}}$$

dengan $w_i$ sebagai bobot kejadian operasi ke-$i$.

### 2.3 Analisis Biaya Manufaktur dan Efisiensi Desain

Untuk komponen logam/plastik yang diproduksi dengan proses *injection molding*, biaya manufaktur per bagian dimodelkan sebagai:

$$C_{m} = \frac{C_{tool}}{n} + C_{mat} \cdot \rho \cdot V + C_{cycle} \cdot t_{cycle}$$

di mana $C_{tool}$ adalah biaya cetakan (*tooling*), $n$ adalah volume produksi, $C_{mat}$ adalah biaya material per satuan massa, $\rho$ densitas material, $V$ volume bagian, $C_{cycle}$ biaya siklus mesin per detik, dan $t_{cycle}$ waktu siklus produksi.

Total biaya produk kemudian dihitung dengan:

$$C_{tot} = C_{m} + C_{a} + C_{QC} + C_{overhead}$$

dengan $C_{a}$ sebagai biaya perakitan (yang langsung dipengaruhi oleh $\eta_{DFA}$), $C_{QC}$ sebagai biaya quality control, dan $C_{overhead}$ sebagai biaya overhead pabrik.

### 2.4 Indikator Keputusan Proses Manufaktur

Pemilihan proses manufaktur mengikuti metrik Material Removal Fraction:

$$MR = \frac{V_{awal} - V_{akhir}}{V_{awal}}$$

Untuk proses injection molding, MR mendekati 0 (hampir tanpa *material removal*), sementara untuk *machining* konvensional MR dapat mencapai 60–80%. Semakin rendah MR, semakin rendah konsumsi energi dan *waste material* per satuan bagian.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA pada redesain coffee enema basket mengikuti alur SOP 7-tahap yang sistematis:

**Tahap 1 — Analisis Fungsional Produk.** Definisikan fungsi primer (menampung dan menyaring bubuk kopi dalam fluida), fungsi sekunder (pegangan ergonomis, kompatibilitas dengan selang enema), serta *constraints* (food-grade material, sterilisasi autoklaf pada 121°C).

**Tahap 2 — Pembuatan Pohon Produk (*Product Structure Tree*).** Visualisasikan hierarki perakitan eksisting. Amirullah & Jakaria (2024) menemukan desain awal memiliki 11 bagian yang mencakup bodi utama, 4 jeruji, 2 ring penjepit, tutup, pegangan, sekrup, dan jaring saringan.

**Tahap 3 — Evaluasi DFA Eksisting.** Hitung $\eta_{DFA}^{eksisting}$ menggunakan rumus Boothroyd untuk menetapkan baseline. Klasifikasikan setiap bagian sebagai *necessary* atau *redundant*.

**Tahap 4 — Konsep Redesain dengan Part Consolidation.** Identifikasi bagian-bagian yang dapat dikonsolidasikan (misalnya: jeruji dilas/dicetak integral dengan bodi keranjang; tutup dengan jepitan *snap-fit* menggantikan sekrup).

**Tahap 5 — Pemilihan Proses Manufaktur.** Tentukan apakah proses *injection molding* (untuk volume tinggi), *sheet metal forming* (untuk stainless steel), atau *3D printing* (untuk prototipe) paling sesuai. Evaluasi menggunakan $C_m$ dari Persamaan 4.

**Tahap 6 — Pembuatan Prototipe dan Pengujian Fungsional.** Uji kebocoran (*leak test*), kekuatan jepitan, dan kemampuan sterilisasi. Validasi bahwa redesain memenuhi semua *constraints* Tahap 1.

**Tahap 7 — Analisis DFA Redesain dan Perbandingan.** Hitung $\eta_{DFA}^{baru}$, bandingkan dengan baseline, dan validasi penghematan biaya total.

Diagram alir keputusan untuk klasifikasi bagian berdasarkan kriteria Boothroyd:

```
[Identifikasi Bagian] 
   │
   ▼
┌──────────────────────────┐
│ Apakah bagian bergerak   │
│ relatif thd bagian lain? │
└──────────────────────────┘
   │                │
  YA               TIDAK
   │                │
   ▼                ▼
[PERTAHANKAN]   ┌──────────────────────────────┐
                │ Apakah bagian diperlukan     │
                │ untuk pemisahan material     │
                │ atau proses perakitan?       │
                └──────────────────────────────┘
                   │                │
                  YA               TIDAK
                   │                │
                   ▼                ▼
              [PERTAHANKAN]    [KANDIDAT ELIMINASI/
                               PART CONSOLIDATION]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Desain Eksisting (Amirullah & Jakaria, 2024)

Berdasarkan data yang disajikan pada DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309), diambil parameter-parameter desain berikut sebagai input kuantitatif:

| Komponen | Material | Jumlah | Waktu Assembly (detik) |
|---|---|---|---|
| Bodi keranjang | SS 304 | 1 | 18 |
| Jeruji silang | SS 304 | 4 | 4 × 6 = 24 |
| Ring atas | SS 304 | 1 | 5 |
| Ring bawah | SS 304 | 1 | 5 |
| Tutup saringan | SS 304 | 1 | 7 |
| Sekrup M3 | Baja | 4 | 4 × 8 = 32 |
| Pegangan | Plastik PP | 1 | 9 |
| Jaring saringan | SS 316 mesh | 1 | 12 |

Total: $N_a^{eks} = 11$ bagian, $t_a^{eks} = 112$ detik.

### 4.2 Perhitungan Baseline $\eta_{DFA}^{eksisting}$

Bagian minimum teoretis: $N_{min} = 3$ (bodi, tutup, pegangan). Dengan asumsi $t_{min} = 1,5$ detik per bagian pada operasi yang diidealisasi:

$$\eta_{DFA}^{eks} = \frac{3 \cdot 1,5}{11 \cdot 1,5} \times 100\% \cdot \frac