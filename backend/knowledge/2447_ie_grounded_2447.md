# 2447 — Redesain Produk Manufaktur Presisi dengan Pendekatan Design for Manufacture and Assembly (DfMA): Integrasi Optimalisasi Biaya, Waktu Asembling, dan Kualitas Struktural

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Universal Proceedings Series (UPS)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin kompetitif, kemampuan untuk merancang produk yang tidak hanya fungsional tetapi juga efisien secara produksi menjadi pembeda strategis antar perusahaan. Adam Rizki Amirullah dan Ribangun Bamban Jakaria (2024), dalam artikel yang dipublikasikan di *Universal Proceedings Series* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309), menyoroti urgensi redesain *coffee enema basket* — sebuah perangkat medis-wellness yang berfungsi sebagai wadah penampung bubuk kopi dalam prosedur enema — menggunakan metodologi *Design for Manufacture and Assembly* (DfMA). Produk ini pada dasarnya merupakan keranjang berlubang (*mesh basket*) yang harus memenuhi tiga kriteria simultan: ketahanan terhadap korosi cairan, kemampuan filtrasi yang konsisten, dan ergonomis dalam pemasangan-pelepasan (*assembly-disassembly*) untuk proses sterilisasi.

Konteks industri yang melatarbelakangi penelitian ini adalah fenomena *over-engineering* pada produk-produk consumer health. Banyak produk alat kesehatan sederhana masih dirancang dengan jumlah komponen (*part count*) yang berlebih, proses perakitan yang membutuhkan banyak komponen, dan pemilihan material yang tidak dioptimasi untuk proses fabrikasi massal. Studi Amirullah dan Jakaria (2024) menunjukkan bahwa pendekatan desain konvensional yang berorientasi pada fungsi saja mengabaikan variabel-variabel kritis seperti *manufacturing cost*, *assembly time*, dan *total part count*. Hal ini menyebabkan biaya produksi yang dapat ditekan hingga 30-50% jika diterapkan prinsip DfMA secara disiplin.

Di sisi lain, Mubashir Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperluas cakrawala penerapan DfMA ke skala infrastruktur melalui integrasi dengan *Building Information Modelling* (BIM) untuk konstruksi jembatan pracetak. Temuan utamanya menunjukkan bahwa keputusan desain jembatan konvensional hanya didasarkan pada biaya dan kecukupan struktural, padahal pengetahuan mengenai manufaktur, transportasi, pengangkatan, dan ereksi belum dilibatkan pada tahap konsep. Akibatnya, masalah *buildability* baru teridentifikasi saat *shop-drawing* sudah final dan mould sudah dipotong — titik di mana koreksi menjadi sangat mahal. Kedua paper ini, meskipun pada skala produk yang berbeda (perangkat medis kecil vs. infrastruktur jembatan), menunjukkan bahwa prinsip DfMA bersifat *scalable* dan menjadi kebutuhan universal dalam rekayasa industri kontemporer.

Urgensi ekonomis dari penerapan DfMA juga didorong oleh meningkatnya biaya tenaga kerja terampil di sektor manufaktur Indonesia, yang tumbuh rata-rata 8-12% per tahun. Redesain yang menurunkan jumlah komponen dan menyederhanakan proses perakitan bukan hanya menurunkan *unit cost*, tetapi juga mempercepat *time-to-market* dan meningkatkan keandalan produk (*product reliability*) karena pengurangan titik-titik kegagalan potensial.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DfMA yang digunakan dalam paper Amirullah dan Jakaria (2024) berakar pada keramkat konseptual Boothroyd-Dewhurst, yang secara sistematis mengevaluasi setiap komponen berdasarkan tiga kriteria simultan: (1) apakah komponen tersebut harus berdiri sendiri sebagai bagian terpisah, (2) apakah proses manufaktur yang dipilih optimal untuk geometri dan materialnya, dan (3) apakah prosedur perakitan dapat disederhanakan.

**2.1 Indeks Efisiensi Desain untuk Perakitan (Design for Assembly Index)**

Formulasi dasar DfA index yang digunakan dalam paper tersebut dapat dinyatakan sebagai:

$$E_{DfA} = \frac{N_{min} \cdot t_{min}}{T_a} \times 100\%$$

di mana $E_{DfA}$ adalah efisiensi desain untuk perakitan (dalam persen), $N_{min}$ adalah jumlah minimum komponen teoretis yang harus ada untuk memenuhi fungsi produk, $t_{min}$ adalah waktu minimum teoritis per operasi perakitan (detik), dan $T_a$ adalah total waktu aktual perakitan (detik). Nilai $E_{DfA} > 60\%$ mengindikasikan desain yang sangat baik, sedangkan $E_{DfA} < 30\%$ menandakan kebutuhan redesain signifikan.

**2.2 Rumus Pengurangan Jumlah Komponen**

Tujuan utama redesain DfMA adalah meminimalkan part count. Hubungan antara kompleksitas desain dan biaya dapat diformulasikan sebagai:

$$C_{total} = \sum_{i=1}^{N} \left( C_{m,i} + C_{a,i} + C_{op,i} \right) + C_{overhead}$$

di mana $C_{m,i}$ adalah biaya manufaktur komponen ke-$i$, $C_{a,i}$ adalah biaya perakitan, $C_{op,i}$ adalah biaya operasional (termasuk logistik dan inspeksi), $N$ adalah jumlah komponen, dan $C_{overhead}$ adalah biaya overhead tetap. Pengurangan satu komponen dengan mengintegrasikan dua atau lebih bagian menjadi satu fitur geometris tunggal akan menurunkan $N$ dan secara langsung mereduksi $C_{total}$.

**2.3 Analisis Biaya Siklus Hidup (Life Cycle Cost)**

Pendekatan DfMA juga mempertimbangkan total biaya kepemilikan:

$$LCC = C_{initial} + \sum_{t=1}^{T} \frac{C_{op,t} + C_{maint,t}}{(1+r)^t}$$

di mana $LCC$ adalah *Life Cycle Cost*, $C_{initial}$ adalah biaya desain dan produksi awal, $C_{op,t}$ adalah biaya operasional pada tahun ke-$t$, $C_{maint,t}$ adalah biaya pemeliharaan, $r$ adalah *discount rate*, dan $T$ adalah horizon perencanaan.

**2.4 Framework Multi-Kriteria Berbasis BIM (Sitasi Pendukung)**

Untuk aplikasi pada infrastruktur (Islam, 2024), evaluasi desain jembatan pracetak menggunakan *weighted multi-criteria decision matrix*:

$$S_j = \sum_{k=1}^{K} w_k \cdot s_{j,k}$$

di mana $S_j$ adalah skor total alternatif desain jembatan ke-$j$, $w_k$ adalah bobot kriteria ke-$k$ (misalnya: biaya = 0,25, manufacturability = 0,20, transportability = 0,15, liftability = 0,15, durability = 0,15, sustainability = 0,10), dan $s_{j,k}$ adalah skor ternormalisasi (0-1) untuk kriteria $k$ pada alternatif $j$. Kriteria manufacturability, transportability, dan liftability secara eksplisit merupakan turunan langsung dari prinsip DfMA.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DfMA pada redesain *coffee enema basket* mengikuti prosedur sistematis yang diuraikan oleh Amirullah dan Jakaria (2024) dalam *Universal Proceedings Series*. Berikut adalah SOP rekayasa yang dapat direplikasi untuk kasus serupa:

**Tahap 1 — Analisis Produk Eksisting (*Baseline Analysis*)**
- Bongkar produk (*disassembly*) dan identifikasi seluruh komponen
- Hitung jumlah total bagian ($N_{before}$), waktu perakitan aktual ($T_{a,before}$), dan biaya produksi saat ini
- Lakukan *value analysis* untuk membedakan komponen yang memberikan nilai tambah versus komponen yang redundan
- Buat *bill of materials* (BOM) lengkap beserta fungsi setiap komponen

**Tahap 2 — Aplikasi Prinsip DfMA**
- **Prinsip 1 — Minimalkan jumlah komponen:** Evaluasi apakah dua komponen dapat diintegrasikan menjadi satu melalui proses manufaktur alternatif (misalnya: dua lembar plat yang dilas menjadi satu fitur *deep-drawn* atau *cast*)
- **Prinsip 2 — Pilih proses manufaktur optimal:** Bandingkan *stamping*, *wire forming*, *sheet metal cutting + welding*, dan *investment casting* berdasarkan *Design for Manufacturing* (DFM) index
- **Prinsip 3 — Gunakan komponen modular/standar:** Substitusi komponen custom menjadi komponen *off-the-shelf* jika memenuhi spesifikasi

**Tahap 3 — Redesain dan Pembuatan Prototipe**
- Buat model CAD 3D dengan *Design Intent* yang jelas
- Lakukan simulasi *Finite Element Analysis* (FEA) untuk verifikasi kekuatan struktural
- Buat prototipe menggunakan proses manufaktur terpilih
- Validasi melalui pengujian fungsional (uji filtrasi, uji ketahanan korosi, uji beban)

**Tahap 4 — Validasi Kuantitatif**
- Hitung ulang $E_{DfA}$, $N_{after}$, $T_{a,after}$, dan $C_{total,after}$
- Bandingkan dengan baseline dan lakukan analisis sensitivitas

**Diagram Alir SOP:**
```
┌─────────────────────────────┐
│ Identifikasi Produk Eksisting│
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ Disassembly & Part Counting │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ Function Analysis & QFD     │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ Generate Redesign Concepts  │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ DFA Screening (Boothroyd)   │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ DFM Process Selection       │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ CAD Modeling & FEA          │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ Prototyping & Testing       │
└──────────┬──────────────────┘
           ↓
┌─────────────────────────────┐
│ Cost-Time-Quality Analysis  │
└─────────────────────────────┘
```

**Standar Acuan Industri:**
- ISO 128:2024 (Technical product documentation — General principles of representation)
- ASTM A240 (Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plate for Pressure Vessels)
- ISO 2768-1 (General tolerances for linear and angular dimensions)

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter-parameter tipikal yang digunakan dalam studi Amirullah dan Jakaria (2024) untuk produk *coffee enema basket*, berikut adalah contoh perhitungan numerik komprehensif yang dapat merepresentasikan proses redesain:

**4.1 Data Baseline (Produk Eksisting)**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah komponen ($N_{before}$) | 8 | bagian |
| Komponen las | 4 |