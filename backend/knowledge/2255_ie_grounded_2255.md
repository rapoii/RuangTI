# 2255 — Redesain Produk Manufaktur Berbasis Prinsip Design for Manufacture and Assembly (DFMA): Integrasi Evaluasi Multi-Kriteria pada Sistem Rekayasa Industri Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam ekosistem manufaktur modern, keputusan desain produk tidak lagi dipandang sebagai aktivitas kreatif yang berdiri sendiri, melainkan sebagai keputusan rekayasa sistemik yang menentukan total biaya, waktu perakitan, kualitas, dan keberlanjutan rantai pasok sepanjang siklus hidup produk. Paradigma Design for Manufacture and Assembly (DFMA) muncul sebagai kerangka kerja integral yang menyatukan dua perspektif krusial sejak fase konseptual: kemampuan manufaktur (manufacturability) dan efisiensi perakitan (assembly efficiency). Penerapan DFMA secara empiris terbukti memberikan dampak ekonomi yang substansial, dengan potensi pengurangan biaya produksi antara 30% hingga 70% serta pengurangan waktu perakitan hingga 60% dibandingkan pendekatan desain konvensional (Boothroyd, Dewhurst & Knight, 2010).

Studi terkini oleh Amirullah dan Jakaria (2024) dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mendemonstrasikan aplikasi langsung metodologi DFMA pada kasus redesain keranjang coffee enema (coffee enema basket) — sebuah perangkat medis alternatif yang berfungsi sebagai wadah filtrasi bubuk kopi dalam prosedur hidroterapi kolon. Produk ini semula memiliki permasalahan desain berupa jumlah komponen berlebih, proses perakitan yang tidak intuitif, serta kebutuhan akan tooling khusus yang meningkatkan biaya produksi dan mempersulit proses sterilisasi. Redesain berbasis DFMA memungkinkan identifikasi sistematis terhadap komponen-komponen yang dapat dieliminasi, distandardisasi, atau disederhanakan tanpa mengorbankan fungsi higienitas dan keamanan medis.

Di sisi lain, Mubashir Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) memperluas perspektif DFMA ke skala infrastruktur melalui pengembangan kerangka evaluasi desain jembatan pracetak berbasis Building Information Modelling (BIM) yang mengintegrasikan prinsip DfMA. Temuan sentral studi tersebut mengonfirmasi bahwa keputusan desain jembatan secara konvensional hanya didasarkan pada biaya dan kecukupan struktural, padahal pertimbangan manufaktur, transportasi, pengangkatan, dan ereksi baru dimasukkan setelah desain difinalisasi — pada titik di mana koreksi sudah sangat mahal. Kedua literatur ini, meskipun beroperasi pada skala produk dan infrastruktur yang berbeda, menyoroti masalah mendasar yang sama: fragmentasi keputusan desain yang mengabaikan realitas operasional lantai produksi.

Urgensi penerapan DFMA semakin meningkat di tengah tren mass customization, adopsi Industry 4.0, dan tuntutan regulasi ketat terhadap traceability produk. Perusahaan yang gagal mengintegrasikan pertimbangan manufaktur dan perakitan pada tahap desain akan menghadapi rework rate tinggi, scrap material berlebihan, waktu time-to-market yang molor, dan pada akhirnya kehilangan pangsa pasar. Sebaliknya, organisasi yang menerapkan DFMA secara disiplin mampu menciptakan produk dengan *Design Efficiency* tinggi, yaitu rasio antara nilai teoritis minimum dan aktual dari indikator manufacturability dan assembly.

## 2. Landasan Teori & Formulasi Matematis

Kerangka DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) serta Islam (2024) bersandar pada dua pilar metodologis utama, yaitu Design for Manufacture (DFM) dan Design for Assembly (DFA). Boothroyd-Dewhurst Method merupakan salah satu instrumen kuantitatif paling mapan untuk mengukur efisiensi desain terhadap operasi manufaktur dan perakitan.

**2.1. Design Efficiency (Indeks Efisiensi Desain)**

Indeks efisiensi desain didefinisikan sebagai rasio antara indikator desain aktual terhadap nilai minimum teoritis yang dapat dicapai:

$$E_{design} = \frac{N_m \cdot t_m^{min}}{N_m^{act} \cdot t_m^{act}} \times 100\%$$

di mana:
- $E_{design}$ = efisiensi desain keseluruhan (%)
- $N_m$ = jumlah minimum teoritis komponen/part
- $N_m^{act}$ = jumlah aktual komponen/part pada desain
- $t_m^{min}$ = waktu proses minimum teoritis
- $t_m^{act}$ = waktu proses aktual

Semakin tinggi nilai $E_{design}$ (mendekati 100%), semakin efisien desain produk tersebut. Nilai di bawah 50% umumnya mengindikasikan peluang redesain yang signifikan.

**2.2. Indeks DFM (Boothroyd-Dewhurst)**

Untuk setiap komponen, dihitung indeks DFM berdasarkan rasio biaya proses aktual terhadap biaya proses referensi:

$$C_{DFM} = \frac{C_{act}}{C_{ref}} \times 100\%$$

di mana $C_{act}$ adalah biaya manufaktur aktual komponen dan $C_{ref}$ adalah biaya minimum yang dapat dicapai dengan proses produksi yang sesuai. Komponen dengan $C_{DFM} > 120\%$ merupakan kandidat kuat untuk eliminasi atau redesain.

**2.3. DFA Handling Code & Insertion Code**

Setiap komponen dievaluasi menggunakan *handling code* (kode penanganan) yang mempertimbangkan kesimetrisan, kecengkeraman (graspability), dan kekakuan, serta *insertion code* yang menilai kompleksitas operasi penyambungan:

$$T_{assembly}^{theoretical} = \sum_{i=1}^{n} (t_{handle,i} + t_{insert,i} + t_{secure,i})$$

Total waktu perakitan teoritis adalah penjumlahan waktu penanganan, penyisipan, dan pengikatan/pengamanan untuk setiap komponen ke-$i$. Desain yang ideal memiliki rasio:

$$\eta_{DFA} = \frac{T_{assembly}^{theoretical}}{T_{assembly}^{actual}} \times 100\%$$

**2.4. Bobot Multi-Kriteria (Framework Islam, 2024)**

Untuk evaluasi desain jembatan pracetak, Islam (2024) mengintegrasikan DfMA ke dalam kerangka multi-kriteria melalui metode Weighted Sum Model:

$$V_{alt} = \sum_{j=1}^{k} w_j \cdot s_{ij}$$

di mana $V_{alt}$ adalah nilai utilitas alternatif desain ke-$i$, $w_j$ adalah bobot kriteria ke-$j$ dengan $\sum w_j = 1$, dan $s_{ij}$ adalah skor ternormalisasi alternatif $i$ terhadap kriteria $j$. Kriteria yang digunakan mencakup biaya manufaktur, kemudahan transportasi, waktu ereksi, kualitas struktural, dan keberlanjutan.

**2.5. Reduction Ratio**

Tingkat simplifikasi desain diukur dengan:

$$\Delta R = \frac{N_{before} - N_{after}}{N_{before}} \times 100\%$$

$$\Delta T = \frac{T_{before} - T_{after}}{T_{before}} \times 100\%$$

$$\Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

di mana $\Delta R$, $\Delta T$, dan $\Delta C$ berturut-turut adalah persentase reduksi jumlah komponen, waktu produksi, dan biaya produksi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur penerapan DFMA mengikuti alur sistematis yang dapat distandarkan sebagai SOP rekayasa industri. Berdasarkan sintesis dari Amirullah dan Jakaria (2024) dan Islam (2024), tahapan implementasi adalah sebagai berikut:

**Tahap 1 — Analisis Desain Eksisting (Baseline Study)**
Lakukan reverse engineering terhadap produk existing, identifikasi seluruh komponen, fungsi, dan materialnya. Buat Bill of Materials (BOM) lengkap, lalu petakan setiap komponen pada diagram alir perakitan (*assembly flowchart*). Pada kasus coffee enema basket, Amirullah dan Jakaria (2024) memulai dengan membongkar produk referensi untuk mendokumentasikan 9–14 komponen individual (bergantung spesifikasi), termasuk mesh filter, frame ring, handle, dan fastener.

**Tahap 2 — Functional Analysis (Analisis Nilai)**
Terapkan Value Analysis/Value Engineering (VA/VE) untuk memisahkan fungsi essential (basic function) dari fungsi secondary (supporting function). Gunakan Function Analysis System Technique (FAST) diagram untuk memvisualisasikan relasi logis antar fungsi.

**Tahap 3 — Generasi Konsep Redesain**
Berdasarkan hasil VA/VE, bangkitkan konsep-konsep alternatif dengan aturan desain DFMA: (a) minimalisasi jumlah komponen (Boothroyd rule), (b) penggunaan komponen modular standar, (c) eliminasi fitur yang tidak esensial, (d) desain untuk single-tool assembly, dan (e) integrasi fungsi (*part integration*).

**Tahap 4 — Evaluasi Kuantitatif**
Hitung DFA score, DFM index, dan design efficiency untuk setiap alternatif. Pada kasus jembatan pracetak (Islam, 2024), evaluasi menggunakan bobot multi-kriteria yang mencakup parameter struktural, fabrikasi, logistik, dan ereksi.

**Tahap 5 — Prototyping dan Validasi**
Lakukan prototyping terhadap desain terbaik, ukur metrik aktual (waktu perakitan, biaya produksi, ease of manufacturing), dan bandingkan terhadap baseline.

**Tahap 6 — Standardisasi dan Continuous Improvement**
Dokumentasikan desain final, buat SOP perakitan baru, dan lakukan Design for Manufacture and Assembly audit berkala.

Alur logika tahapan ini dapat divisualisasikan sebagai berikut:

```
┌─────────────────────────────────────────────────────────────┐
│  START: Permintaan Redesain / Masalah Buildability          │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Tahap 1: Reverse Engineering & Dokumentasi BOM Eksisting   │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Tahap 2: Functional Analysis (VA/VE + FAST Diagram)        │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Tahap 3: Generasi Konsep Redesain dengan Aturan DFMA       │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Tahap 4: Perhitungan DFA Score, DFM Index, Multi-Criteria  │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Tahap 5: Prototyping, Pengujian, dan Validasi Empiris      │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Tahap 6: Standardisasi SOP Perakitan Baru                  │
└─────────────────────────────────────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan penerapan rumus pada Bagian 2, kami merekonstruksi studi kasus numerik berdasarkan konteks produk coffee enema basket yang menjadi objek penelitian Amirullah dan Jakaria (2024).

**Skenario Baseline (Eksisting):**
- Jumlah komponen: $N_{before} = 12$ part
- Waktu produksi per unit: $T_{before} = 28$ menit
- Biaya material & fabrikasi: $C_{before} = \text{IDR } 145{,}000$/unit
- Waktu perakitan aktual: $T_{assembly}^{actual} = 18$ menit

**Skenario Redesain (setelah DFMA):**
- Jumlah komponen: $N_{after} = 6$ part (melalui integrasi fungsi, eliminasi fastener terpisah, dan *part consolidation*)
- Waktu produksi: $T_{after} = 14$ menit
- Biaya: $C_{after} = \text{IDR } 87{,}500$/unit
- Waktu perakitan aktual: $T_{assembly}^{actual,new} = 9$ menit

**Perhitungan 1 — Reduction Ratio:**

$$\Delta R = \frac{12 - 6}{12} \times 100\% = 50\%$$

$$\Delta T = \frac{28 - 14}{28} \times 100\% = 50\%$$

$$\Delta C = \frac{145{,}000 - 87{,}500}{145{,}000} \times 100\% \approx 39{,}66\%$$

**Perhitungan 2 — Design Efficiency:**

Asumsikan minimum teoritis untuk fungsi filtrasi kopi dengan handle ergonomis adalah $N_m = 4$ part dan $t_m^{min} = 6$ menit perakitan teoritis:

$$E_{before} = \frac{4 \times 6}{12 \times 18} \times 100\% = \frac{24}{216} \times 100\% \approx 11{,}11\%$$

$$E_{after} = \frac{4 \times 6}{6 \times 9} \times 100\% = \frac{24}{54} \times 100\% \approx 44{,}44\%$$

**Perhitungan 3 — DFA Index Improvement:**

$$\eta_{DFA,before} = \frac{T_{theoretical}}{T_{actual}} = \frac{6}{18} \