# 1519 — Redesain Produk Manufaktur Medis Berbasis Metode Design for Manufacture and Assembly (DFMA): Optimalisasi Keranjang Coffee Enema dan Generalisasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (*medical device industry*) global mengalami transformasi signifikan akibat meningkatnya permintaan terhadap peralatan terapi alternatif yang aman, higienis, dan efisien secara biaya manufaktur. Salah satu perangkat yang menjadi fokus utama dalam literatur rekayasa industri terkini adalah *coffee enema basket* — komponen filtrasi berbentuk keranjang berlubang yang digunakan untuk memegang bubuk kopi pada prosedur hidroterapi kolon. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa produk ini, meskipun secara fungsional sederhana, pada umumnya memiliki desain awal (*baseline design*) dengan *part count* tinggi, proses perakitan manual yang tidak ergonomis, serta pemilihan material yang kurang optimal dari perspektif siklus hidup produk. Kondisi ini menimbulkan inefisiensi pada lini produksi *small-to-medium enterprise* (SME) alat kesehatan di Indonesia, di mana margin keuntungan sangat sensitif terhadap biaya fabrikasi, waktu perakitan, dan tingkat cacat (*defect rate*).

Urgensi ekonomis dan operasional dari redesain ini semakin nyata ketika kita memperhatikan tiga parameter kritis. Pertama, biaya produksi yang terlalu tinggi akibat *over-engineering* — penggunaan komponen yang jumlahnya lebih banyak dari yang dibutuhkan secara fungsional. Kedua, waktu perakitan manual yang melebihi target *takt time* lini produksi, sehingga menurunkan *throughput* harian. Ketiga, ketidakpatuhan terhadap prinsip *single-use medical device* dalam hal kemampuan sterilisasi, karena desain dengan banyak celah (*crevices*) dan sambungan sulit dibersihkan secara efektif. Ketiga parameter ini secara langsung mengarahkan pendekatan pada kerangka metodologis **Design for Manufacture and Assembly (DFMA)** yang telah terbukti mampu menurunkan biaya produksi hingga 30–50% dan waktu perakitan hingga 60% pada berbagai kelas produk (Boothroyd, Dewhurst, & Knight, 2011).

Konteks yang lebih luas juga disinggung oleh Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), di mana ia menunjukkan bahwa kelemahan utama desain produk konvensional adalah keputusan diambil hanya berdasarkan biaya dan kecukupan struktural, tanpa memasukkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi pada tahap konseptual. Hasilnya, masalah *buildability* baru terungkap saat *shop-drawing* sudah diproduksi atau di lapangan — ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya tinggi. Argumentasi ini berlaku universal: dari keranjang kopi enema skala kecil hingga struktur jembatan prefabrikasi skala besar. Maka, integrasi DFMA bukan sekadar metode optimasi, melainkan *strategic design philosophy* yang harus diadopsi sejak tahap konseptual.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada dua pilar utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Kedua pilar ini memiliki metrik kuantitatif yang presisi untuk mengukur kualitas desain.

### 2.1 Design Efficiency (DFA Index)

Indeks efisiensi desain (*design efficiency*, $\eta$) menurut Boothroyd-Dewhurst didefinisikan sebagai:

$$\eta_{DFA} = \frac{N_m}{N_t} \times 100\%$$

di mana $N_m$ adalah jumlah komponen minimum yang dibutuhkan untuk fungsi produk, dan $N_t$ adalah jumlah komponen total aktual dalam desain. Nilai $\eta$ mendekati 100% menunjukkan desain optimal.

### 2.2 Assembly Time Estimation

Waktu perakitan total $T_a$ dihitung sebagai penjumlahan waktu penanganan (*handling time*, $t_h$), waktu penyisipan/pemasangan (*insertion time*, $t_i$), dan waktu fastener operations (seperti pengencangan sekrup, pengelasan titik, dll.):

$$T_a = \sum_{j=1}^{n} \left( t_{h,j} + t_{i,j} + t_{f,j} \right)$$

dengan $n$ adalah jumlah komponen. Fungsi waktu penyisipan mengikuti persamaan empiris Boothroyd:

$$t_i = t_0 + k_1 \cdot \ln\left(\frac{D}{d}\right) + k_2 \cdot s$$

di mana $t_0$ adalah waktu dasar (umumnya 1,5–3,0 detik), $D$ dan $d$ berturut-turut adalah diameter fitur kawin (*mating feature*) dan diameter pengikat, $s$ adalah jarak obstructions (mm), dengan $k_1 \approx 0,7$ dan $k_2 \approx 0,04$ untuk orientasi *symmetrical*.

### 2.3 Manufacturing Cost Model

Biaya produksi satu unit $C_{unit}$ diformulasikan sebagai:

$$C_{unit} = \sum_{k=1}^{N_t} \left( C_{m,k} + C_{a,k} \right) + C_{overhead}$$

di mana $C_{m,k}$ adalah biaya material dan fabrikasi komponen ke-$k$, $C_{a,k}$ adalah biaya perakitan komponen ke-$k$, dan $C_{overhead}$ adalah biaya overhead pabrik (energi, depresiasi mesin, indirect labor). Untuk komponen yang dicetak injeksi (*injection-molded*):

$$C_m = C_{mat} \cdot \rho \cdot V + \frac{T_{cycle}}{3600} \cdot C_{machine}$$

dengan $C_{mat}$ = harga material per kg, $\rho$ = densitas, $V$ = volume komponen, $T_{cycle}$ = waktu siklus mesin (detik), $C_{machine}$ = biaya mesin per jam.

### 2.4 Multi-Criteria Decision Framework (Pendukung Paper Islam 2024)

Untuk evaluasi desain multi-kriteria seperti yang dikembangkan Islam (2024), skor desain $S_{design}$ dihitung dengan metode *weighted scoring*:

$$S_{design} = \sum_{r=1}^{R} w_r \cdot \tilde{x}_r$$

di mana $w_r$ adalah bobot kriteria ke-$r$, $\tilde{x}_r$ adalah skor ternormalisasi (0–1), dan $\sum w_r = 1$. Kriteria tipikal meliputi: biaya produksi $C_p$, berat $W$, *assembly time* $T_a$, *recyclability index* $R_i$, dan *disassembly index* $D_i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti *Standard Operating Procedure* (SOP) yang terdiri dari tujuh tahapan sistematis, yang merupakan adaptasi metodologi Boothroyd-Dewhurst untuk konteks alat kesehatan seperti diterapkan oleh Amirullah dan Jakaria (2024):

**Tahap 1 — Analisis Fungsi Produk.** Daftar seluruh fungsi yang harus dipenuhi produk, misalnya: filtrasi, retensi bubuk, ketahanan termal, kompatibilitas kimiawi terhadap larutan kopi. Setiap fungsi dipetakan ke komponen minimal yang dibutuhkan.

**Tahap 2 — Konfigurasi Awal dan Reverse Engineering.** Lakukan pembongkaran produk eksisting, identifikasi setiap komponen, ukur dimensi kritis dengan *coordinate measuring machine* (CMM) atau *vernier caliper* presisi 0,01 mm.

**Tahap 3 — Aplikasi Aturan DFA.** Terapkan tiga pertanyaan Boothroyd untuk setiap komponen: (a) Apakah komponen bergerak relatif terhadap komponen lain saat produk beroperasi? (b) Apakah komponen harus berupa material berbeda? (c) Apakah komponen harus dipisahkan karena alasan perakitan/pemeliharaan? Jika ketiga jawaban "tidak", komponen tersebut layak digabung (*candidate for elimination*).

**Tahap 4 — Perhitungan DfMA Index.** Hitung $\eta_{DFA}$ dan $T_a$ untuk desain baseline dan desain kandidat.

**Tahap 5 — Modifikasi Desain.** Reduksi *part count*, standardisasi fitur (lubang, radius, ulir), pemilihan material yang kompatibel dengan proses fabrikasi tunggal.

**Tahap 6 — Prototyping dan Validasi.** Produksi prototipe dengan *rapid prototyping* (3D printing FDM/SLA) atau langsung dengan cetakan injeksi, lalu validasi fungsional.

**Tahap 7 — Analisis Biaya Komparatif.** Bandingkan $C_{unit}$ baseline vs. redesain, hitung *payback period* investasi模具.

```
┌──────────────────────────────────────┐
│  Tahap 1: Analisis Fungsi            │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Tahap 2: Reverse Engineering        │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Tahap 3: Penerapan Aturan DFA       │
│  (3 Pertanyaan Boothroyd)            │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Tahap 4: Perhitungan Indeks DFMA    │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Tahap 5: Modifikasi Desain          │
│  (Reduksi Part, Standardisasi)       │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Tahap 6: Prototyping & Validasi     │
└──────────────────┬───────────────────┘
                   ▼
┌──────────────────────────────────────┐
│  Tahap 7: Analisis Biaya Komparatif  │
└──────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan kerangka metodologis Amirullah dan Jakaria (2024), dilakukan simulasi kuantitatif pada redesain *coffee enema basket* dengan dua kondisi desain.

### 4.1 Parameter Input Desain Baseline (Eksisting)

| Parameter | Nilai | Satuan |
|---|---|---|
| Jumlah komponen total ($N_t$) | 8 | buah |
| Komponen fungsional minimal ($N_m$) | 3 | buah |
| Material body | Stainless Steel 304 | — |
| Proses fabrikasi | Stamping + welding | — |
| Diameter lubang filtrasi ($d$) | 1,5 | mm |
| Pitch lubang ($p$) | 4,0 | mm |
| Diameter body ($D$) | 65 | mm |
| Tinggi body ($H$) | 75 | mm |

### 4.2 Perhitungan Waktu Perakitan Baseline

Gunakan rumus Boothroyd untuk setiap komponen:

$$t_i = t_0 + k_1 \ln\left(\frac{D}{d}\right) + k_2 s$$

Untuk komponen body (orientasi *symmetrical*, $s \approx 5$ mm):

$$t_{i,body} = 1{,}8 + 0{,}7 \cdot \ln\left(\frac{65}{1{,}5}\right) + 0{,}04 \cdot 5 = 1{,}8 + 0{,}7 \cdot 3{,}773 + 0{,}2 \approx 4{,}64 \text{ detik}$$

Untuk 7 komponen residual dengan karakteristik similar:

$$t_{i,avg} \approx 3{,}5 \text{ detik per komponen}$$

Tambahkan *handling time* rata-rata $t_h = 2{,}0$ detik dan fastener operations $t_f = 4{,}0$ detik (2 sekrup + 1 ring):

$$T_{a,baseline} = 8 \times (2{,}0 + 3{,}5) + 4{,}0 = 48{,}0 \text{ detik per unit}$$

### 4.3 Perhitungan Desain Efficiency Baseline

$$\eta_{