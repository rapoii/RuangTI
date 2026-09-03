# 2863 — Redesain Produk Manufaktur dan Rangka Jembatan Pracetak dengan Pendekatan Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk Manufaktur Menggunakan Metode Design for Manufacture and Assembly (DFMA) dan Integrasinya dengan Sistem BIM pada Konstruksi Jembatan Pracetak
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur global yang semakin kompetitif, kemampuan sebuah produk untuk diproduksi secara efisien, dirakit dengan jumlah langkah yang minimal, dan memiliki total biaya produksi yang rendah menjadi penentu utama daya saing industri. Permasalahan klasik yang berulang dijumpai pada produk jadi konsumen maupun komponen struktural sipil adalah bahwa keputusan desain historis lebih banyak didorong oleh pertimbangan fungsional dan estetika, tanpa memasukkan konstrain kemampuan proses manufaktur dan perakitan sejak fase konseptual. Kondisi ini menimbulkan "design freeze" prematur yang baru terdeteksi ketika shop drawing sudah diterbitkan atau cetakan (moulds) sudah dipotong, sehingga biaya koreksi menjadi sangat mahal. Amirullah dan Jakaria (2024) melalui DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mendokumentasikan secara presisi fenomena ini pada studi kasus redesain *Coffee Enema Basket*, sebuah produk alat kesehatan rumah tangga yang awalnya dirancang dengan mempertimbangkan fungsionalitas filtrasi, namun memiliki kelemahan struktural pada sisi manufacturability. Studi ini menunjukkan bahwa produk dengan jumlah komponen yang berlebihan, ketidaktepatan pemilihan material, serta geometry yang tidak optimal untuk proses fabrikasi lembaran logam akan menyebabkan waste biaya produksi yang signifikan dan cycle time perakitan yang panjang.

Di sisi lain, Mubashir Islam (2024) pada DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) memperluas paradigma DFMA dari skala produk manufaktur menuju infrastruktur sipil melalui integrasi DFMA dengan Building Information Modelling (BIM) untuk evaluasi desain jembatan pracetak. Penelitian ini menyoroti bahwa proyek jembatan konvensional memilih alternatif desain hanya berdasarkan biaya dan kecukupan struktural, tanpa memasukkan pengetahuan manufaktur, transportasi, pengangkatan (*lifting*), dan ereksi ke dalam proses seleksi. Akibatnya, masalah *buildability* baru teridentifikasi pada tahap shop-drawing atau di lapangan, di mana koreksi menjadi sangat mahal. Urgensi operasional dan ekonomis dari penerapan DFMA pada kedua domain tersebut sangat relevan bagi praktisi teknik industri yang menangani optimasi biaya produksi, lead time perakitan, serta total cost of ownership produk. Modul ini membahas secara sistematis metodologi DFMA, formulasi kuantitatif Boothroyd-Dewhurst, integrasi dengan sistem evaluasi multi-kriteria, hingga aplikasi lintas-sektor dari barang konsumen hingga infrastruktur jembatan pracetak.

## 2. Landasan Teori & Formulasi Matematis

Metodologi Design for Manufacture and Assembly (DFMA) yang digunakan dalam kedua paper tersebut berakar pada kerangka analitis Boothroyd-Dewhurst yang membagi proses evaluasi menjadi dua tahap utama: **Design for Manufacture (DFM)** untuk optimasi proses fabrikasi individual, dan **Design for Assembly (DFA)** untuk optimasi proses penyatuan komponen.

### 2.1 Design for Assembly (DFA) Index

Indeks DFA mengukur efisiensi desain berdasarkan rasio jumlah komponen minimum yang dibutuhkan terhadap total komponen aktual pada desain. Formulasi matematisnya adalah:

$$\text{DFA Index} = \frac{N_{m}}{N_{p}} \times 100\%$$

di mana $N_{m}$ adalah jumlah minimum part yang secara teoretis dibutuhkan untuk memenuhi fungsi primer produk, dan $N_{p}$ adalah jumlah aktual part pada desain. Semakin tinggi DFA Index (mendekati 100%), semakin efisien desain dari perspektif perakitan.

### 2.2 Waktu Perakitan Estimasi (Boothroyd Method)

Waktu perakitan total diestimasi menggunakan persamaan Boothroyd dengan menjumlahkan waktu handling, insertion, dan fastening untuk setiap part:

$$T_{assembly} = \sum_{i=1}^{N_{p}} (T_{h,i} + T_{i,i} + T_{f,i})$$

di mana $T_{h,i}$ adalah waktu handling komponen ke-i (umumnya $1.5$–$2.0$ detik), $T_{i,i}$ adalah waktu insertion (tergantung pada arah dan jenis sambungan), dan $T_{f,i}$ adalah waktu fastening (opsional, tergantung kebutuhan pengelasan, riveting, atau snap-fit).

### 2.3 Reduction Biaya Produksi

Penghematan biaya produksi absolut dan relatif dihitung dengan:

$$\Delta C = C_{original} - C_{redesign}$$

$$\text{Cost Reduction (\%)} = \frac{\Delta C}{C_{original}} \times 100\%$$

### 2.4 Multi-Criteria Decision Analysis (MCDA) untuk Seleksi Desain Jembatan

Untuk paper kedua, integrasi DFMA dengan BIM menggunakan pendekatan Analytic Hierarchy Process (AHP) untuk pembobotan kriteria. Skor total desain alternatif dihitung sebagai:

$$S_{j} = \sum_{k=1}^{K} w_{k} \cdot s_{k,j}$$

di mana $w_{k}$ adalah bobot kriteria ke-k (misalnya *manufacturability*, *transportability*, *erectability*, *cost*, *structural adequacy*), dan $s_{k,j}$ adalah skor ternormalisasi dari desain alternatif-j pada kriteria-k, dengan konstrain $\sum_{k=1}^{K} w_{k} = 1$.

### 2.5 Fungsi Objektif Optimasi DFM

Pada analisis DFM untuk komponen *Coffee Enema Basket*, biaya fabrikasi lembaran logam diminimalkan dengan mempertimbangkan blank utilization efficiency:

$$\eta_{blank} = \frac{A_{part}}{A_{blank}} \times 100\%$$

di mana $A_{part}$ adalah luas geometri part hasil bentukan dan $A_{blank}$ adalah luas material awal lembaran. Tujuan optimasi adalah memaksimumkan $\eta_{blank}$ untuk meminimalkan waste material.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur implementasi DFMA mengikuti SOP terstruktur yang diadopsi secara konsisten di kedua paper. Berikut adalah diagram alur implementasi:

**Tahap A — Information Gathering:**
1. Definisikan fungsi primer dan sekunder produk (quality function deployment).
2. Identifikasi semua komponen pada desain awal melalui *exploded view* dan BOM (Bill of Materials).
3. Klasifikasikan setiap komponen berdasarkan kriteria minimum part Boothroyd: (a) apakah part bergerak relatif terhadap part lain selama operasi?, (b) apakah part harus dari material berbeda?, (c) apakah part harus dipisahkan untuk assembly/disassembly? Jika semua jawaban "tidak", maka part merupakan kandidat eliminasi.

**Tahap B — Design for Manufacture Analysis:**
4. Evaluasi proses fabrikasi untuk setiap komponen (sheet metal forming, injection molding, machining, casting).
5. Hitung *blank utilization* $\eta_{blank}$ untuk komponen lembaran logam.
6. Identifikasi proses dengan biaya tooling/produksi tertinggi dan pertimbangkan redesign geometri.

**Tahap C — Design for Assembly Analysis:**
7. Hitung DFA Index awal: $\text{DFA}_{initial} = (N_{m}/N_{p,initial}) \times 100\%$.
8. Estimasi $T_{assembly}$ awal menggunakan Boothroyd equation.
9. Terapkan prinsip-prinsip DFA: *minimize part count*, *use symmetrical parts*, *standardize fasteners*, *design for one-handed insertion*.

**Tahap D — Redesign Iteration:**
10. Generate konsep desain alternatif menggunakan morphological matrix.
11. Seleksi alternatif terbaik menggunakan Pugh Matrix atau AHP.
12. Hitung DFA Index dan $T_{assembly}$ baru.

**Tahap E — Validasi:**
13. Bandingkan biaya produksi sebelum dan sesudah redesain.
14. Validasi kelayakan teknis melalui analisis tegangan (*finite element analysis*) untuk memastikan fungsi struktural tetap terpenuhi.
15. Untuk aplikasi jembatan: integrasikan hasil DFMA dengan model BIM untuk simulasi clash detection, sequencing ereksi, dan analisis 4D schedule.

Pada paper Amirullah & Jakaria (2024), SOP ini diterapkan pada *Coffee Enema Basket* dengan modifikasi bentuk geometri untuk meningkatkan *formability* pada proses bending lembaran stainless steel serta pengurangan jumlah komponen sambungan. Sementara paper Islam (2024) mengintegrasikan output DFA/DFM ke dalam BIM environment dengan meng-*encode* atribut manufacturability, transportability (dimensi dan berat modul pracetak), dan erectability (titik angkat dan urutan instalasi) sebagai parameter BIM properties, sehingga seleksi alternatif desain jembatan dapat dilakukan secara *data-driven* sejak fase konseptual.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Redesain Coffee Enema Basket (DOI: 10.21070/ups.3309)

**Data Input Desain Awal (berdasarkan paper):**
- Jumlah komponen: $N_{p,initial} = 12$ part
- Jumlah minimum part teoretis: $N_{m} = 5$ part
- Material: Stainless Steel 304 lembaran tebal $1.2$ mm
- Proses fabrikasi dominan: sheet metal cutting + bending + spot welding
- Upah operator perakitan: Rp 25.000/jam
- Working time per shift: 8 jam = 28.800 detik

**Perhitungan DFA Index Awal:**

$$\text{DFA}_{initial} = \frac{5}{12} \times 100\% = 41.67\%$$

**Estimasi Waktu Perakitan Awal:**

Asumsikan untuk setiap part: $T_{h} = 1.8$ detik, $T_{i} = 4.5$ detik, $T_{f} = 3.2$ detik (spot welding), sehingga:

$$T_{part} = 1.8 + 4.5 + 3.2 = 9.5 \text{ detik/part}$$

$$T_{assembly,initial} = 12 \times 9.5 = 114 \text{ detik/unit}$$

**Desain Redesain (berdasarkan paper):**
- Eliminasi 4 part melalui integrasi fungsi (las-less snap-fit, single-piece basket base)
- $N_{p,redesign} = 8$ part
- Modifikasi geometri: lipatan tambahan menggantikan 2 komponen penguat terpisah
- Penggunaan *self-locking tab* menggantikan 2 spot weld joint

**Perhitungan DFA Index Redesain:**

$$\text{DFA}_{redesign} = \frac{5}{8} \times 100\% = 62.5\%$$

**Waktu Perakitan Redesain:**

Untuk part yang menggunakan snap-fit: $T_{f,new} = 1.5$ detik (tidak perlu welding). Dengan asumsi 4 part baru menggunakan snap-fit dan 4 part tetap dilas:

$$T_{assembly,redesign} = (4 \times 9.5) + (4 \times (1.8 + 4.5 + 1.5)) = 38 + 31.2 = 69.2 \text{ detik/unit}$$

**Penghematan Biaya Per Unit:**

Selisih waktu: $\Delta T = 114 - 69.2 = 44.8$ detik/unit.

Dalam 1 shift (28.800 detik), jumlah unit yang dapat dirakit naik dari $\lfloor 28800/114 \rfloor = 252$ unit menjadi $\lfloor 28800/69.2 \rfloor = 416$ unit. Peningkatan kapasitas:

$$\text{Throughput gain} = \frac{416 - 252}{252} \times 100\% = 65.08\%$$

Penghematan biaya upah per unit:

$$\Delta C_{labor} = \frac{44.8 \text{ detik}}{3600 \text{ detik/jam}} \times Rp 25.000 = Rp 311,11/\text{unit}$$

Untuk batch produksi 50.000 unit per tahun:

$$\text{Total Labor Savings} = 50.000 \times Rp 311,
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
