# 2879 — Redesain Produk Kesehatan Berbasis Prinsip Design for Manufacture and Assembly (DFMA): Studi Kasus Coffee Enema Basket dan Ekstensi ke Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (*home medical device*) dan perangkat terapi komplementer mengalami transformasi besar pasca-pandemi COVID-19, di mana permintaan terhadap produk higienis sekali pakai maupun perangkat semi-permanen meningkat signifikan. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti salah satu produk niche yaitu *coffee enema basket*, sebuah keranjang saringan yang berfungsi menahan ampas kopi saat terapi enema. Produk ini meskipun terdengar sederhana, mengemas kompleksitas teknik yang tidak kalah dengan perangkat medis formal: harus steril, food-safe, ergonomis, dan tahan terhadap korosi serta suhu operasi berulang (umumnya 35–40 °C). Studi tersebut berangkat dari permasalahan nyata di lapangan di mana desain awal produk masih menggunakan konsep *welding*, *threading*, dan komponen fastener terpisah yang menimbulkan tiga isu struktural: (1) jumlah komponen (*Nm*) terlalu banyak sehingga *assembly time* panjang; (2) proses manufaktur masih mengandalkan *subtractive manufacturing* dengan waste material tinggi; dan (3) biaya per-unit (*unit cost*) tidak kompetitif bila dibandingkan dengan produk impor serupa.

Konteks industri ini menjadi semakin relevan ketika DFMA dimasukkan sebagai strategi utama. DFMA, yang dalam literatur klasik Boothroyd & Dewhurst (1991) telah terbukti menurunkan biaya produksi hingga 30–60%, kini diadopsi lintas sektor — dari医疗器械 hingga infrastruktur sipil. Islam (2024) dalam *Journal of Sustainable Development and Policy* dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa integrasi DFMA pada proyek jembatan pracetak dengan platform BIM menghasilkan keputusan desain yang lebih matang pada tahap konsep, di mana permasalahan *buildability* biasanya baru teridentifikasi setelah gambar kerja dibekukan (*design freeze*). Temuan ini memberikan justifikasi bahwa DFMA bukan sekadar metode pengurangan biaya, melainkan kerangka keputusan multi-kriteria yang relevan baik untuk produk consumer-health (skala unit kecil) maupun infrastruktur jembatan (skala modal besar). Urgensi ekonominya sangat terasa: pada lini produksi coffee enema basket dengan target 5.000 unit/bulan, pengurangan 1 part saja berpotensi menghemat Rp 12–18 juta per bulan pada biaya perakitan dan material. Oleh karena itu, redesain berbasis DFMA menjadi kebutuhan strategis bagi produsen alat kesehatan lokal untuk bersaing dengan produk impor yang telah mengadopsi desain modular.

## 2. Landasan Teori & Formulasi Matematis

Kerangka DFMA yang digunakan dalam studi Amirullah & Jakaria (2024) terdiri atas dua pilar analitis: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Pilar DFM mengevaluasi kesesuaian setiap komponen terhadap proses manufaktur yang tersedia (injection molding, sheet metal forming, 3D printing), sedangkan pilar DFA mengukur tingkat efisiensi perakitan menggunakan tiga indikator klasik Boothroyd-Dewhurst.

**Indikator 1 — DFA Efficiency Ratio (η_DFA):**

$$\eta_{DFA} = \frac{N_{m,\min}}{N_m} \times 100\%$$

di mana $N_m$ adalah jumlah aktual komponen rakitan, sedangkan $N_{m,\min}$ adalah jumlah minimum teoritis yang dapat dicapai jika semua fungsi produk dikonsolidasikan ke dalam satu bagian integral. Idealnya $\eta_{DFA} \rightarrow 100\%$.

**Indikator 2 — Assembly Time Estimation (model Boothroyd):**

$$T_a = \sum_{i=1}^{N_m} \left( t_{h,i} + t_{o,i} \right)$$

dengan $t_{h,i}$ adalah waktu pegangan (*handling time*) komponen ke-$i$ dan $t_{o,i}$ adalah waktu operasi (*operation time*) untuk insertion, fastening, atau joining. Nilai tipikal untuk tangan manusia: $t_h \approx 1,5$ s untuk komponen kecil, $t_o \approx 3,0$ s untuk operasi snap-fit, dan $t_o \approx 5,0$ s untuk threaded fastening.

**Indikator 3 — Biaya Perakitan Total (Boothroyd cost model):**

$$C_a = C_{m,\text{comp}} + \sum_{i=1}^{N_m} \left( C_{h,i} + C_{o,i} \right)$$

dengan $C_{m,\text{comp}}$ adalah biaya material seluruh komponen, $C_{h,i}$ adalah biaya handling dan $C_{o,i}$ adalah biaya operasi assembly per-komponen. Biaya operasi dinyatakan sebagai:

$$C_{o,i} = T_{o,i} \times R_{labor}$$

di mana $R_{labor}$ adalah tarif tenaga kerja (Rp/s).

**Indikator 4 — Efek Konsolidasi Part terhadap Biaya Total:**

Perubahan dari desain lama ($N_m^{\text{old}}$) ke desain baru ($N_m^{\text{new}}$) menghasilkan *cost delta*:

$$\Delta C_{total} = \left( C_{m}^{\text{old}} - C_{m}^{\text{new}} \right) + \left( T_a^{\text{old}} - T_a^{\text{new}} \right) \times R_{labor} + \left( N_m^{\text{old}} - N_m^{\text{new}} \right) \times C_{tooling}$$

Dari perspektif Islam (2024), DFMA juga dievaluasi dengan metode Multi-Criteria Decision Analysis (MCDA) berbobot AHP (*Analytic Hierarchy Process*):

$$W_i = \frac{1}{n} \sum_{j=1}^{n} \frac{a_{ij}}{\sum_{k=1}^{n} a_{kj}}$$

di mana $a_{ij}$ adalah intensitas kepentingan kriteria $i$ relatif terhadap kriteria $j$ dalam matriks perbandingan berpasangan. Skor DfMA composite untuk sebuah alternatif desain jembatan didefinisikan sebagai:

$$S_{DfMA} = \sum_{i=1}^{n} W_i \cdot r_{ij}$$

dengan $r_{ij} \in [0,1]$ adalah rating ternormalisasi untuk kriteria ke-$i$ pada alternatif ke-$j$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti *House of Quality* yang diadaptasi dari Quality Function Deployment (QFD), namun dengan prioritas pada *manufacturability* dan *assemblability*. Amirullah & Jakaria (2024) menyusun SOP delapan tahap untuk redesain coffee enema basket:

**Tahap 1 — Functional Analysis.** Setiap komponen didaftarkan dan fungsi-fungsi fungsional diklasifikasikan: *primary function* (menahan ampas, memungkinkan aliran), *secondary function* (mounting ke selang), *tertiary function* (estetika, branding).

**Tahap 2 — Part Consolidation Screening.** Setiap komponen diuji menggunakan tiga pertanyaan Boothroyd: (a) Apakah part bergerak relatif terhadap part lain saat operasi? (b) Apakah part harus terpisah karena kebutuhan material berbeda? (c) Apakah part harus terpisah karena proses perakitan/disassembly? Jika semua jawaban "tidak", maka kandidat konsolidasi.

**Tahap 3 — Process Capability Mapping.** Setiap kandidat komponen dicocokkan dengan proses manufaktur yang tersedia di workshop: CNC turning, laser cutting, injection molding, ultrasonic welding.

**Tahap 4 — Handling & Insertion Coding.** Setiap operasi assembly diberi kode H (Handling), I (Insertion), F (Fastening), S (Securing). Kode ini menentukan waktu standar.

**Tahap 5 — Cost Roll-up Calculation.** Perhitungan $C_a$ menggunakan rumus pada Bagian 2.

**Tahap 6 — Prototype & Trial Assembly.** Prototipe dicetak menggunakan printer 3D SLS untuk validasi geometri sebelum tooling final.

**Tahap 7 — Benchmark Comparison.** Perbandingan head-to-head dengan desain lama pada metrik $\eta_{DFA}$, $T_a$, $C_{total}$.

**Tahap 8 — Design Freeze & Documentation.** Gambar kerja, BOM, dan SOP perakitan final.

Standar yang digunakan sebagai acuan termasuk ISO 13485 untuk produk alat kesehatan, ASTM F2820 untuk material food-grade, dan SNI 7334 untuk toleransi komponen plastik.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data Amirullah & Jakaria (2024), desain lama coffee enema basket memiliki spesifikasi berikut:

| Parameter | Desain Lama | Desain Baru DFMA |
|---|---|---|
| Jumlah komponen ($N_m$) | 8 part | 5 part |
| Material utama | Stainless steel 304 + PVC | PP food-grade single-piece |
| Proses manufaktur | Welding + threading | Injection molding + snap-fit |
| Assembly time rata-rata | 47,5 detik/unit | 18,0 detik/unit |

**Perhitungan 1 — DFA Efficiency Ratio:**

$$N_{m,\min} = 3 \text{ (body, lid, mesh)}$$

Desain lama: $\eta_{DFA}^{\text{old}} = \frac{3}{8} \times 100\% = 37{,}5\%$

Desain baru: $\eta_{DFA}^{\text{new}} = \frac{3}{5} \times 100\% = 60{,}0\%$

Peningkatan efisiensi: $\Delta\eta = 22{,}5$ poin persentase, atau rasio peningkatan $\frac{60}{37{,}5} = 1{,}60$ kali lipat.

**Perhitungan 2 — Assembly Time menggunakan model Boothroyd:**

Desain lama:
$$T_a^{\text{old}} = \sum_{i=1}^{8} (t_h + t_o)_i = 8 \times 1{,}5 + 6 \times 5{,}0 + 2 \times 3{,}0 = 48 \text{ s}$$

Desain baru:
$$T_a^{\text{new}} = 5 \times 1{,}5 + 3 \times 3{,}0 = 16{,}5 \text{ s}$$

*Practical measured value* 18,0 s mencakup jeda operator — selaras dengan teori. Penghematan: $\Delta T_a = 29{,}5$ s per unit atau **62,1% lebih cepat**.

**Perhitungan 3 — Total Cost Roll-up:**

Asumsi: $R_{labor}$ = Rp 5.000/jam = Rp 1,389/s. Biaya material desain lama Rp 18.500/unit (Stainless 304 + PVC + fastener), desain baru Rp 11.200/unit (single-piece PP + snap-fit). Biaya tooling dianggap amortized.

$$C_{a}^{\text{old}} = 18.500 + (48 \times 1{,}389) = 18.500 + 66.672 = 85.172 \text{ Rp}$$

$$C_{a}^{\text{new}} = 11.200 + (18 \times 1{,}389) = 11.200 + 25.002 = 36.202 \text{ Rp}$$

Penghematan per unit: $\Delta C_a = 48.970$ Rp, atau **57,5% lebih murah**.

**Perhitungan 4 — Annualized Savings pada volume 60.