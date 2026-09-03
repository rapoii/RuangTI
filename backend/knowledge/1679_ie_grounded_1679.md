# 1679 — Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA): Optimasi Geometri Fungsional, Efisiensi Perakitan, dan Kesiapan Manufaktur Massal

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical device) mengalami tekanan ganda antara kebutuhan akan fungsionalitas klinis yang presisi, kepatuhan terhadap standar biocompatibility (ISO 13485, ISO 10993), serta tuntutan efisiensi biaya produksi massal. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti masalah ini secara spesifik pada produk **coffee enema basket** — sebuah instrumen hidroterapi yang berfungsi menahan bubuk kopi (coffee grounds) di dalam saringan selama prosedur enema. Produk ini, meskipun berada di segmen pasar *complementary and alternative medicine* (CAM), tetap tunduk pada prinsip-prinsip manufaktur presisi karena berkaitan dengan kontak tidak langsung terhadap jaringan biologis manusia dan kebutuhan sterilisasi berulang (autoclave 121°C).

Urgensi redesain muncul dari observasi empiris terhadap desain *baseline* yang beredar di pasaran: (1) jumlah komponen (*part count*) yang terlalu tinggi — rata-rata 7–9 part — sehingga menambah *touchpoint* perakitan manual; (2) adanya fitur geometris yang tidak memberikan nilai tambah fungsional (*redundant features*); dan (3) kesulitan dalam proses *cleaning-in-place* (CIP) karena geometri sudut tajam (*sharp corners*) dan *dead zones* yang menghambat drainase. Kondisi ini sejalan dengan fenomena universal dalam desain konvensional di mana keputusan geometris diambil berdasarkan intuisi klinis tanpa mempertimbangkan *downstream* implikasi manufaktur dan perakitan — persis seperti yang dikritik oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) pada konteks desain jembatan pracetak, di mana *buildability problems* baru teridentifikasi pada tahap shop-drawing atau erection, bukan pada fase konseptual.

Konteks ekonomi juga relevan. Biaya produksi satu unit coffee enema basket konvensional didominasi oleh biaya perakitan manual (sekitar 45–55% dari total *bill of materials*), dengan *cycle time* perakitan ratarata 75–95 detik/unit. Jika sebuah UMKM produsen alat kesehatan dengan kapasitas 5.000 unit/bulan ingin menekan harga jual ritel dari Rp 185.000 menjadi Rp 125.000 (level yang dibutuhkan untuk penetrasi pasar *wellness clinic*), diperlukan pengurangan biaya produksi minimal 30%. Redesain berbasis DFMA menjadi salah satu pendekatan paling *rigorous* dan terdokumentasi dengan baik untuk mencapai target tersebut tanpa mengorbankan fungsi sterilisasi dan fluidic integrity.

Amirullah dan Jakaria (2024) memilih **Design for Manufacture and Assembly (DFMA)** karena metodologi ini memiliki *track record* lintas industri — dari jembatan prefab (Islam, 2024) hingga elektronik konsumen dan otomotif — dan menyediakan kerangka kuantitatif berupa *Design Efficiency Index*, *Assembly Time Equation*, serta *Manufacturing Cost Estimator* yang memungkinkan keputusan desain diambil secara terukur. Lebih lanjut, DFMA menerapkan prinsip *minimum parts criteria*, *symmetry optimization*, dan *ease of insertion/handling* yang secara langsung menjawab kelemahan geometris desain awal coffee enema basket. Kombinasi ketiga aspek — urgensi medis, tekanan biaya, dan ketersediaan metodologi kuantitatif — menjadikan redesain ini sebagai *case study* yang relevan bagi insinyur industri yang beroperasi di perbatasan antara医疗器械, *consumer wellness*, dan lean manufacturing.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada **Boothroyd-Dewhurst DFMA Methodology** yang telah distandardisasi sejak 1980-an dan diadopsi luas di industri. Terdapat tiga pilar teori yang membentuk fondasi matematis:

### 2.1 Design Efficiency (DE) Index

Efisiensi desain diukur menggunakan rasio antara jumlah part ideal (minimum teoritis) dengan jumlah part aktual pada desain yang dievaluasi:

$$DE = \frac{N_{ideal}}{N_{actual}} \times 100\%$$

Di mana:
- $N_{ideal}$ = jumlah part minimum yang dibutuhkan untuk memenuhi fungsi desain (ditentukan lewat *function analysis* dan *questioning the necessity of each part*);
- $N_{actual}$ = jumlah part aktual pada desain baseline atau desain redesain.

Amirullah dan Jakaria (2024) menetapkan $N_{ideal} = 4$ untuk coffee enema basket (1 housing utama, 1 filter mesh, 1 tutup/penutup, 1 konektor selang) berdasarkan dekomposisi fungsi: (a) containment, (b) filtration, (c) sealing, (d) fluidic interface. Desain *baseline* memiliki $N_{actual} = 8$ part, sehingga $DE_{baseline} = 50\%$.

### 2.2 Assembly Time Equation (Boothroyd-Dewhurst)

Waktu perakitan total dihitung sebagai penjumlahan waktu tiap operasi dasar:

$$T_{assembly} = \sum_{i=1}^{n} (N_i \times t_i) \quad [\text{detik/unit}]$$

Di mana:
- $N_i$ = jumlah kemunculan operasi dasar $i$ (misal: *insert*, *fasten*, *snap-fit*);
- $t_i$ = waktu standar operasi $i$ dari tabel Boothroyd-Dewhurst (rentang 1,5–9,0 detik tergantung kompleksitas handling dan fastening).

Untuk coffee enema basket, tiga operasi dominan: *insert* (rata-rata 3,5 dtk), *snap-fit* (rata-rata 4,2 dtk), dan *fasten-thread* (rata-rata 8,7 dtk). Amirullah dan Jakaria (2024) mengkuantifikasi bahwa penggantian threaded fastener dengan snap-fit *cantilever beam* geometri dapat menghemat ~4,5 detik per unit.

### 2.3 Manufacturing Cost Function

Total biaya produksi per unit didekomposisi menjadi biaya fabrikasi part dan biaya perakitan:

$$C_{total} = \sum_{k=1}^{N} C_{fab,k} + C_{assembly}$$

Di mana:

$$C_{fab,k} = (t_{fab,k} \times L) + (M_{k} \times \rho_{k} \times V_{k})$$

- $t_{fab,k}$ = waktu fabrikasi part $k$ (menit);
- $L$ = *labor rate* (Rp/menit);
- $M_{k}$ = harga material part $k$ (Rp/kg);
- $\rho_{k}$ = densitas material (kg/cm³);
- $V_{k}$ = volume part $k$ (cm³).

### 2.4 Cost Reduction Index (ΔC) dan Time Reduction Index (ΔT)

$$ \Delta C = \frac{C_{baseline} - C_{redesign}}{C_{baseline}} \times 100\% $$

$$ \Delta T = \frac{T_{baseline} - T_{redesign}}{T_{baseline}} \times 100\% $$

### 2.5 Multi-Criteria Decision Framework (Perspektif Islam, 2024)

Dalam kerangka BIM-DFMA untuk proyek jembatan prefab, Islam (2024) merumuskan skor evaluasi multi-kriteria sebagai:

$$E_{total} = \sum_{j=1}^{