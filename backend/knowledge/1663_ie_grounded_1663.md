# 1663 — Redesain Coffee Enema Basket dengan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan Complementary and Alternative Medicine (CAM) mengalami pertumbuhan signifikan di pasar global, dengan valuasi diproyeksikan mencapai USD 210,8 miliar pada 2030 (sumber: WHO Global Report on Traditional and Complementary Medicine). Coffee enema basket merupakan salah satu produk terapi alternatif yang berfungsi sebagai perangkat resirkulasi cairan kopi pada prosedur kolon hidroterapi. Produk ini umumnya terdiri dari komponen stainless steel mesh, rangka aluminium, konektor selang medis, katup pengatur aliran, dan gagang ergonomis. Sebelum diterapkan metodologi *Design for Manufacture and Assembly* (DFMA), desain konvensional coffee enema basket memiliki permasalahan struktural yang signifikan.

Amirullah dan Jakaria (2024) dalam publikasinya di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengidentifikasi bahwa desain awal coffee enema basket memiliki 17 komponen terpisah dengan 23 operasi perakitan yang membutuhkan waktu rata-rata 38,4 menit per unit. Kompleksitas ini tidak hanya meningkatkan *bill of materials* (BOM) tetapi juga menciptakan risiko *human error* pada tahap perakitan, menurunkan *first-pass yield*, dan meningkatkan *total cost of ownership* (TCO) produk hingga 42% lebih tinggi dari benchmark industri alat kesehatan sekali-pakai.

Urgensi redesain muncul dari tiga faktor: (1) **regulasi** — BPOM dan FDA mensyaratkan *good manufacturing practice* (GMP) dengan *design control* yang terdokumentasi; (2) **ekonomi** — margin keuntungan produsen menurun 15–20% akibat biaya perakitan manual yang tinggi; serta (3) **ergonomi** — keluhan pengguna terhadap sulitnya proses pembersihan dan sterilisasi alat. Studi ini menerapkan kerangka DFMA yang dikembangkan oleh Boothroyd dan Dewhurst, yang telah diadopsi secara luas dalam industri manufaktur医疗器械 (alat kesehatan), otomotif, dan konstruksi prefabrikasi.

Konteks lintas sektoral diperkuat oleh temuan Islam (2024) dalam DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21), yang menunjukkan bahwa integrasi DFMA dengan *Building Information Modelling* (BIM) pada konstruksi jembatan prefabrikasi mampu menurunkan jumlah komponen modular sebesar 34% dan mempercepat erection time hingga 28%. Pelajaran dari proyek infrastruktur ini menunjukkan bahwa pendekatan DFMA bersifat *transferable* lintas domain, dari medical device hingga heavy construction. Dengan demikian, redesain coffee enema basket bukan sekadar оптимизация produk individual, melainkan studi kasus strategis dalam transformasi desain industri alat kesehatan CAM Indonesia.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Design for Manufacture and Assembly (DFMA)

DFMA merupakan pendekatan rekayasa integratif yang menggabungkan dua subdomain kritis, yaitu *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). DFM berfokus pada оптимизация proses fabrikasi setiap komponen (casting, stamping, machining, injection molding), sementara DFA berfokus pada minimasi jumlah komponen, operasi penanganan (*handling operations*), dan operasi penyambungan (*joining operations*). Amirullah dan Jakaria (2024) menggunakan metodologi Boothroyd-Dewhurst sebagai kerangka analisis, dengan tahapan kuantitatif sebagai berikut.

### 2.2 Efisiensi Perakitan (DFA Efficiency)

Indeks efisiensi DFA dirumuskan sebagai:

$$\eta_{DFA} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah komponen minimum teoretis yang dibutuhkan untuk memenuhi fungsi desain (dengan asumsi setiap komponen memiliki fungsi esensial dan independen), dan $N_{actual}$ adalah jumlah komponen aktual pada desain existing. Nilai $\eta_{DFA} < 60\%$ mengindikasikan desain perlu redesain substansial.

### 2.3 Estimasi Waktu Perakitan

Waktu perakitan total dihitung menggunakan persamaan Boothroyd-Dewhurst:

$$T_a = \sum_{i=1}^{n} (t_{h,i} + t_{p,i} + t_{f,i}) \cdot N_i$$

di mana $T_a$ adalah waktu perakitan total (detik), $t_{h,i}$ adalah *handling time* komponen ke-$i$, $t_{p,i}$ adalah *placement time*, $t_{f,i}$ adalah *fastening time*, dan $N_i$ adalah jumlah pengulangan operasi. Parameter tipikal untuk medical device assembly adalah $t_{h} \approx 1{,}5$ detik, $t_{p} \approx 3{,}0$ detik, dan $t_{f} \approx 5{,}0$ detik per fastener.

### 2.4 Indeks Biaya Manufaktur Total

Biaya total produk dimodelkan sebagai:

$$C_{total} = C_m + C_a + C_q + C_{oh}$$

dengan $C_m = \sum_{j=1}^{k} (V_j \cdot \rho_j \cdot u_j)$ adalah biaya material, $C_a = T_a \cdot L \cdot (1 + B)$ adalah biaya perakitan ($L$ = labor rate, $B$ = benefit/overhead burden), $C_q$ adalah biaya kualitas (scrap, rework, warranty), dan $C_{oh}$ adalah biaya overhead pabrik.

### 2.5 Reduksi Komponen dan Efek Domino

Eliminasi satu komponen sering menghasilkan *cascade savings* karena menghilangkan fastener, alignment features, dan inspection steps terkait. Faktor reduksi efektif diformulasikan:

$$\Delta N_{eff} = \Delta N_{parts} + \alpha \cdot \Delta N_{fasteners} + \beta \cdot \Delta N_{ops}$$

di mana $\alpha = 0{,}3$ dan $\beta = 0{,}1$ adalah koefisien empiris berdasarkan studi Boothroyd (2010) untuk medical devices.

### 2.6 Kerangka BIM-DfMA (Integrasi Lintas Sektoral)

Merujuk pada Islam (2024), framework BIM-DfMA menghasilkan skor desain:

$$S_{design} = w_1 \cdot C_n + w_2 \cdot T_n + w_3 \cdot M_n + w_4 \cdot S_n$$

dengan $w_i$ adalah bobot kriteria ($w_1 + w_2 + w_3 + w_4 = 1$), dan subskrip $n$ menunjukkan nilai ternormalisasi untuk biaya ($C$), waktu ($T$), manufacturability ($M$), dan sustainability ($S$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA pada redesain coffee enema basket mengikuti SOP terstruktur yang diadopsi dari Boothroyd-Dewhurst dan disesuaikan dengan ISO 13485:2016 untuk medical device design control:

**Tahap 1 — Analisis Fungsi Produk.** Identifikasi fungsi primer (resirkulasi cairan, filtrasi partikel kopi, koneksi selang medis) dan fungsi sekunder (ergonomi, estetika, durability). Setiap komponen dievaluasi menggunakan *function analysis diagram* untuk menentukan fungsi esensial vs. fungsi yang dapat dieliminasi atau diintegrasikan.

**Tahap 2 — Inventarisasi BOM Eksisting.** Pembuatan *bill of materials* detail terhadap desain existing: 17 part, 12 fastener, 3 jenis material (stainless steel 304, aluminium 6061, silicone rubber), dengan total massa 480 gram.

**Tahap 3 — Perhitungan Baseline DFA Score.** Hitung $\eta_{DFA}^{before}$ menggunakan persamaan pada Bagian 2.2 untuk menetapkan titik acuan kuantitatif.

**Tahap 4 — Generasi Konsep Redesain.** Terapkan tiga prinsip Boothroyd: (i) *eliminate* komponen non-esensial, (ii) *combine* fungsi multi-komponen menjadi single part (misalnya integrasi gagang dengan body melalui injection molding), (iii) *simplify* operasi penyambungan dengan snap-fit取代 (menggantikan) screw assembly.

**Tahap 5 — Evaluasi Ulang DFA Score.** Iterasi hingga $\eta_{DFA}^{after} \geq 80\%$.

**Tahap 6 — Validasi Manufaktur.** *Design for Manufacture* check: pastikan setiap komponen dapat diproduksi dengan toleransi ISO 2768-m, *draft angle* ≥ 1° untuk bagian plastik, dan *surface roughness* Ra ≤ 1,6 µm untuk kontak makanan/kulit.

**Tahap 7 — Prototipe dan Pengujian.** Build 5 unit prototipe, lakukan *assembly trial*, *leak test* (0,5 bar, 5 menit), dan *sterilization cycle validation* (autoclave 121°C/15 menit).

**Tahap 8 — Dokumentasi Design History File (DHF).** Sesuai ISO 13485 dan FDA 21 CFR 820.30.

Diagram alir proses:

```
[Fungsi Produk] → [BOM Existing] → [DFA Baseline Score]
       ↓                                  ↓
[Concept Generation] ← [Identifikasi Redundansi]
       ↓
[Redesain: Eliminate + Combine + Simplify]
       ↓
[DFA New Score ≥ 80%] → [DFM Validation] → [Prototipe]
       ↓                                          ↓
[DHF Documentation] ← [Pengujian & Validasi] ← [Iterasi]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Desain Existing (Sebelum Redesain)

Berdasarkan data Amirullah dan Jakaria (2024), coffee enema basket konvensional memiliki parameter operasional sebagai berikut:

| Parameter | Nilai Existing |
|-----------|---------------:|
| Jumlah komponen ($N_{actual}$) | 17 part |
| Jumlah fastener | 12 buah |
| Jumlah jenis material | 3 (SS304, Al6061, silicone) |
| Waktu handling rata-rata ($t_h$) | 1,5 detik |
| Waktu placement rata-rata ($t_p$) | 3,0 detik |
| Waktu fastening rata-rata ($t_f$) | 5,0 detik |
| Jumlah total operasi assembly | 23 |
| Massa produk | 480 gram |
| Labor rate ($L$) | Rp 25.000/jam |
| Burden rate ($B$) | 35% |

### 4.2 Perhitungan Baseline DFA