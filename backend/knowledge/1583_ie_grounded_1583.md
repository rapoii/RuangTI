# 1583 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA): Pendekatan Rekayasa Produk Medis untuk Efisiensi Manufaktur dan Asembli

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket dengan Pendekatan Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan alternatif dan *wellness devices* di Indonesia mengalami pertumbuhan signifikan dalam satu dekade terakhir, terutama pada segmen produk *home-care therapy* yang menyasar pasar kesehatan preventif. Salah satu produk yang mengalami lonjakan permintaan adalah **coffee enema basket** — sebuah perangkat berbentuk keranjang saringan yang berfungsi menahan bubuk kopi organik selama prosedur *retention enema*, di mana cairan kopi disirkulasikan ke dalam kolon sebagai terapi komplementer. Permintaan pasar terhadap alat ini meningkat seiring populernya praktik *Gerson therapy* dan detoksifikasi kafein-asam klorogenat yang banyak diadopsi oleh klinik-klinik holistic di Asia Tenggara.

Dalam konteks operasional, Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa produk coffee enema basket yang beredar di pasar umumnya masih diproduksi dengan desain warisan (*legacy design*) yang memiliki **jumlah komponen berlebih**, **proses asembli manual yang berulang**, serta **pilihan material yang tidak optimal untuk fabrikasi massal**. Produk asli (*existing product*) umumnya terdiri dari 12–18 komponen diskrit — termasuk bracket, sekrup, ring penjepit, kawat saringan stainless, handle kayu, dan konektor selang — yang harus dirakit oleh pekerja dengan operasi multi-tahap. Kondisi ini menimbulkan tiga masalah strategis: (1) **waktu asembli yang panjang** sehingga *unit cost* tenaga kerja langsung membengkak; (2) **tinggi-nya tingkat rejection rate* pada quality control karena misalignment komponen kecil; serta (3) **kompleksitas rantai pasok** karena setiap subkomponen berasal dari supplier yang berbeda, menciptakan *bullwhip effect* pada inventori.

Urgensi penerapan DFMA menjadi sangat relevan ketika industri医疗器械 lokal dituntut untuk bersaing dengan produk impor dari Korea Selatan dan Jepang yang telah mengadopsi pendekatan *Design for Excellence* (DfX). Menurut Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), keputusan desain yang hanya didasarkan pada biaya dan kesesuaian struktural, tanpa memasukkan pertimbangan manufaktur, transportasi, lifting, dan ereksi pada tahap konseptual, akan menghasilkan *design freeze* prematur di mana masalah buildability baru terungkap saat shop-drawing diproduksi — atau lebih buruk, saat produk sudah berada di lini produksi dan di tangan konsumen. Fenomena yang diidentifikasi Islam dalam konteks konstruksi jembatan prefabrikasi ini memiliki analogi kuat pada manufaktur alat kesehatan: **koreksi desain pada tahap akhir menyebabkan cost overrun 3–8 kali lipat** dibanding koreksi pada tahap konseptual, sebagaimana dikonfirmasi oleh studi-studi DFMA klasik Boothroyd, Dewhurst, dan Knight.

Dengan latar belakang tersebut, makalah Amirullah & Jakaria (2024) berupaya menjawab tiga pertanyaan riset utama: (1) bagaimana mereduksi jumlah komponen coffee enema basket tanpa mengorbankan fungsi filtrasi, ergonomi, dan keamanan medis; (2) bagaimana meminimalkan waktu asembli melalui redesain fitur *self-locating* dan integrasi multi-fungsi; serta (3) bagaimana menurunkan biaya produksi total (*total production cost*) melalui pemilihan proses manufaktur yang sesuai dengan volume produksi UMKM hingga menengah. Studi ini menjadi penting karena memberikan **template DFMA yang dapat direplikasi** oleh desainer produk alat kesehatan Indonesia lainnya, terutama yang beroperasi pada skala *Small Medium Enterprise* (SME) dengan keterbatasan tooling dan modal investasi.

---

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengintegrasikan dua pilar utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Pilar pertama berfokus pada optimalisasi proses fabrikasi individual komponen, sedangkan pilar kedua berfokus pada simplifikasi proses penggabungan seluruh komponen menjadi produk jadi. Kedua pilar ini menghasilkan satu kerangka keputusan simultan yang diperkuat oleh metodologi **Boothroyd-Dewhurst** untuk DFA dan **Ashby material selection charts** untuk DFM.

### 2.1 Indeks Efisiensi Desain untuk Asembli (DFA)

Metrik klasik yang digunakan adalah **Design Efficiency (DE)** menurut Boothroyd, yang didefinisikan sebagai rasio antara waktu asembli minimum teoritis dengan waktu asembli aktual produk:

$$DE = \frac{N_{mv} \cdot t_{min}}{N_{actual} \cdot t_{actual}} \times 100\%$$

di mana:
- $N_{mv}$ = jumlah *minimum viable components* (komponen minimum yang diperlukan untuk memenuhi fungsi produk tanpa违背 asas "one part – one operation"),
- $t_{min}$ = waktu asembli minimum per komponen (detik), umumnya diasumsikan $t_{min} = 1{,}5$ detik sesuai standar Boothroyd untuk operasi grasping-and-placing sederhana,
- $N_{actual}$ = jumlah komponen aktual pada desain existing,
- $t_{actual}$ = waktu asembli aktual rerata per komponen.

### 2.2 Efisiensi Asembli Relatif

Untuk membandingkan desain lama dengan redesain, digunakan **Relative Assembly Efficiency (RAE)**:

$$RAE = \frac{DE_{redesign}}{DE_{existing}} = \frac{N_{mv} \cdot t_{min} \cdot N_{existing} \cdot t_{existing}}{N_{redesign} \cdot t_{redesign} \cdot N_{mv} \cdot t_{min}} = \frac{N_{existing} \cdot t_{existing}}{N_{redesign} \cdot t_{redesign}}$$

### 2.3 Biaya Manufaktur per Komponen

Untuk setiap komponen $i$, biaya manufaktur dimodelkan menggunakan persamaan adaptasi dari Boothroyd & Raghunathan:

$$C_i = C_{mat,i} + C_{proc,i} + C_{tool,i} \cdot \frac{1}{n} + C_{overhead}$$

di mana:
- $C_{mat,i}$ = biaya material komponen $i$ (Rp/unit),
- $C_{proc,i}$ = biaya proses fabrikasi (Rp/unit), tergantung pada operasi (injection molding, stamping, machining, welding),
- $C_{tool,i}$ = biaya tooling (Rp), diamortisasi dengan jumlah produksi $n$ (unit),
- $C_{overhead}$ = biaya overhead tetap per unit.

### 2.4 Biaya Total dan Fungsi Objektif

Fungsi objektif redesain adalah minimisasi total biaya kepemilikan produk:

$$\min \, C_{total} = \sum_{i=1}^{N} C_i + C_{assembly} + C_{QC} + C_{logistik}$$

dengan kendala fungsional: kemampuan filtrasi $\geq 200 \, \mu m$ mesh, kapasitas tampung kopi bubuk $\geq 50$ gram, kekuatan tarik handle $\geq 150 \, N$, dan biocompatibility sesuai ISO 10993.

### 2.5 Bobot Kriteria Multi-Atribut (Pendukung dari Islam 2024)

Untuk evaluasi multi-kriteria desain alternatif (analog dengan framework BIM-DfMA Islam, 2024), digunakan **Analytical Hierarchy Process (AHP)** dengan matriks perbandingan berpasangan:

$$A \cdot w = \lambda_{max} \cdot w$$

di mana vektor eigen $w$ merepresentasikan bobot prioritas kriteria, dan *Consistency Ratio* (CR) harus $\leq 0{,}10$ untuk konsistensi yang dapat diterima:

$$CR = \frac{CI}{RI} = \frac{(\lambda_{max} - n)/n}{RI}$$

---

## 3. Metodologi Rekayasa & SOP Implementasi DFMA

Amirullah dan Jakaria (2024) menyusun prosedur operasional standar (SOP) tujuh-tahap untuk implementasi DFMA pada coffee enema basket. Prosedur ini paralel dengan framework multi-kriteria yang dikembangkan Islam (2024) untuk konstruksi jembatan prefabrikasi, di mana keputusan desain harus mempertimbangkan kriteria manufaktur sejak fase konseptual.

**Tahap 1 — Analisis Produk Existing (Reverse Engineering).** Tahap ini mencakup pembongkaran produk existing, identifikasi seluruh komponen, pencatatan dimensi, material, dan fungsi setiap bagian. Untuk coffee enema basket, identifikasi menghasilkan 14 komponen diskrit.

**Tahap 2 — Pemetaan Fungsi (Function Analysis).** Setiap komponen dipetakan menggunakan **Function Analysis System Technique (FAST)** untuk membedakan fungsi dasar (*basic function*) dari fungsi sekunder. Tujuan utama: menyaring kopi dan menahan bubuk agar tidak masuk ke selang outflow — fungsi dasar ini harus dipenuhi oleh minimum components.

**Tahap 3 — Aplikasi Aturan DFA Boothroyd.** Terapkan tiga pertanyaan screening Boothroyd untuk setiap komponen: (a) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (b) Apakah komponen harus berupa material berbeda? (c) Apakah komponen harus dipisahkan karena diperlukan akses untuk disassembly? Jika seluruh jawaban "Tidak", maka komponen **dapat dieliminasi atau diintegrasikan** ke komponen lain.

**Tahap 4 — Redesain Konseptual dengan Material Selection.** Berdasarkan *Ashby chart* untuk strength-versus-cost dan corrosion-resistance, dilakukan pemilihan material yang memungkinkan proses fabrikasi tunggal (misalnya: stainless steel 304 wire mesh yang dilas langsung ke frame, menggantikan frame kayu + kawat jahit manual).

**Tahap 5 — Analisis Proses Manufaktur (DFM).** Evaluasi alternatif proses fabrikasi: *stamping*, *wire forming*, *injection molding* plastik food-grade (PP), dan *sheet metal forming*. Pemilihan proses berdasarkan volume produksi $Q = 5.000$ unit/tahun dan target biaya tooling $C_{tool} < Rp \, 25$ juta.

**Tahap 6 — Estimasi Waktu dan Biaya Asembli.** Pengukuran waktu asembli dengan metode *time study* terhadap 5 operator berpengalaman, penghitungan $t_{actual}$ rerata per komponen.

**Tahap 7 — Validasi dan Prototipe.** Pembuatan prototipe, uji filtrasi (mesh size verification), uji kekuatan tarik handle (menggunakan *universal testing machine*), dan uji *biocompatibility* ekstrak (leaching test sesuai ISO 10993-5).

Diagram alur proses keputusan DFMA mengikuti pola sistematis berikut:

```
┌─────────────────────────────────────────────┐
│ Existing Product Disassembly & Analysis     │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ Function Analysis (FAST Diagram)            │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ Boothroyd DFA Screening (3 Questions)       │
└──────────────────────┬──────────────────────┘
                       ▼
        ┌──────────────┴──────────────┐
        ▼                             ▼
┌─────────────────┐         ┌─────────────────┐
│ Kandidat        │         │ Kandidat        │
│ Eliminasi       │         │ Integrasi       │
└────────┬────────┘         └────────┬────────┘
         └──────────────┬────────────┘
                        ▼
┌─────────────────────────────────────────────┐
│ Material Selection (Ashby Chart + CES EduPack)│
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ DFM Process Selection & Cost Modeling       │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ Assembly Time Study (Work Measurement)      │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ Redesign Iteration & Validation             │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ Cost-Benefit Analysis & Final Selection     │
└─────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

Berdasarkan data lapangan yang disajikan Amirullah dan Jakaria (2024), dilakukan rekonstruksi perhitungan numerik untuk coffee enema basket. Diasumsikan **volume produksi $Q = 5.000$ unit/tahun**, dengan **8 jam kerja/hari × 250 hari kerja = 2.000 jam/tahun**, dan **upah operator Rp 25.000/jam**.

### 4.1 Parameter Existing Design

| Parameter | Nilai |
|-----------|-------|
| $N_{