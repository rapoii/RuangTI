# 1711 — Redesain Produk Lintas Industri dengan Pendekatan Design for Manufacture and Assembly (DFMA): Integrasi Metodologi Boothroyd-Dewhurst, Evaluasi Multi-Kriteria, dan Optimasi Biaya Siklus Hidup

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam ekosistem manufaktur modern, keputusan desain di tahap konseptual menentukan 70–80% total biaya siklus hidup produk (life-cycle cost), sementara hanya sekitar 20% biaya tersebut yang sudah terikat (commited) secara fisik pada tahap tersebut. Amirullah dan Jakaria (2024) dalam studi "Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method" (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti kenyataan pahit yang dihadapi banyak industri kecil-menengah di Indonesia: produk dirancang secara intuitif berdasarkan pengalaman operator, tanpa analisis manufacturability dan assemblability secara kuantitatif. Studi kasus mereka mengambil produk *coffee enema basket*—sebuah alat kesehatan rumah tangga yang berfungsi sebagai wadah seduhan kopi untuk terapi enema—yang awalnya memiliki desain konvensional berupa keranjang kawat dengan tutup berengsel dan beberapa komponen paku keling. Desain awal ini membutuhkan 11 komponen, 17 operasi perakitan, dan waktu perakitan manual lebih dari 180 detik per unit, sehingga menyulitkan produksi massal di UKM dengan kapasitas terbatas.

Urgensi ekonomis dari penerapan DFMA semakin nyata ketika sebuah produk gagal di tahap desain, karena koreksi setelah desain dibekukan (*frozen design*) membutuhkan biaya 10× hingga 1000× lipat dibandingkan koreksi pada tahap konseptual. Islam (2024) dalam kerangka evaluasi jembatan pracetak berbasis BIM-DfMA (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) menegaskan bahwa permasalahan klasik industri konstruksi jembatan Prefabricated Bridge—di mana alternatif desain hanya dipilih berdasarkan biaya material dan kecukupan struktural, sementara pengetahuan tentang manufaktur, transportasi, pengangkatan, dan ereksi baru masuk setelah desain dibekukan—menyebabkan *buildability problems* baru terdeteksi di tahap shop-drawing atau bahkan di lapangan. Paradoks ini同样 terjadi di manufaktur discrete: keputusan material, toleransi, dan jumlah komponen diambil tanpa visibilitas terhadap proses machining, stamping, atau injection molding yang akan dilakukan.

Konteks industri 2024 menunjukkan tiga tren yang saling mengkonvergen. Pertama, *mass customization* menuntut produk dengan jumlah varian tinggi tetapi biaya per unit rendah. Kedua, *supply chain disruption* pascapandemi menuntut desain yang toleran terhadap substitusi material. Ketiga, standar ISO 9001:2015 dan ISO 14001:2015 mensyaratkan *design control* terdokumentasi, di mana DFMA menjadi salah satu bukti kepatuhan. Dengan demikian, kemampuan merekayasa desain menggunakan kerangka DFMA bukan hanya keunggulan kompetitif, melainkan prasyarat survival industri di era *Industry 4.0* dan *Industrial Metaverse*.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar dari kerangka Boothroyd-Dewhurst, yang membagi analisis menjadi dua cabang: Design for Manufacture (DFM) dan Design for Assembly (DFA). DFM bertujuan meminimalkan biaya fabrikasi setiap komponen, sementara DFA bertujuan meminimalkan waktu dan biaya perakitan.

**Indeks DFA** didefinisikan sebagai rasio antara waktu perakitan teoritis minimum (t_min) terhadap waktu perakitan aktual (t_aktual), dan dinyatakan dalam persamaan:

$$DFA_{index} = \frac{t_{min}}{t_{aktual}} \times 100\%$$

Nilai $t_{min}$ dihitung dengan menjumlahkan waktu penanganan dasar (*basic handling time*) untuk tiap komponen:

$$t_{min} = N \cdot t_{handle} + \sum_{i=1}^{N} n_i \cdot t_i$$

di mana:
- $N$ = jumlah total komponen
- $t_{handle}$ = waktu pegang dasar (umumnya 1,5 detik untuk komponen kecil, 3,0 detik untuk komponen besar, menurut tabel Boothroyd-Dewhurst)
- $n_i$ = jumlah operasi assembly tambahan (penyisipan, pengencangan, dll) pada komponen ke-$i$
- $t_i$ = waktu operasi per komponen

**Efisiensi Perakitan** kemudian didefinisikan sebagai:

$$\eta_{asmb} = 1 - \frac{t_{min}}{t_{aktual}}$$

di mana nilai mendekati 1,0 menunjukkan desain yang sangat efisien (sedikit operasi ekstra), sementara nilai mendekati 0 menunjukkan banyak operasi yang sebenarnya tidak perlu.

**Efisiensi Manufaktur (DFM)** dihitung menggunakan rasio biaya material terhadap biaya total komponen:

$$DFM_{ratio} = \frac{C_{material}}{C_{total}} \times 100\%$$

Untuk analisis biaya total redesign, Amirullah dan Jakaria (2024) menerapkan formula *cost reduction*:

$$\Delta C_{total} = \sum_{j=1}^{M} \left(C_{j,old} - C_{j,new}\right) \cdot Q_j$$

di mana:
- $M$ = jumlah tipe komponen yang di-redesain
- $C_{j,old}$ = biaya produksi komponen $j$ sebelum redesign
- $C_{j,new}$ = biaya produksi komponen $j$ setelah redesign
- $Q_j$ = volume produksi tahunan

Untuk integrasi multi-kriteria pada aplikasi jembatan pracetak (Islam, 2024), digunakan Analytical Hierarchy Process (AHP) tertimbang:

$$W_{overall} = \sum_{k=1}^{K} w_k \cdot s_{k}$$

di mana $w_k$ adalah bobot kriteria ke-$k$ (manufacturability, transportability, liftability, erectability, structural adequacy), $s_k$ adalah skor ternormalisasi, dan $K$ adalah jumlah kriteria. Uji konsistensi AHP dilakukan melalui *Consistency Ratio*:

$$CR = \frac{CI}{RI}, \quad CI = \frac{\lambda_{max} - K}{K-1}$$

dengan $CR < 0{,}10$ menunjukkan bobot yang konsisten (acceptable). $RI$ adalah *Random Index* empiris untuk matriks berordo $K$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti SOP tujuh tahap yang diadopsi oleh Amirullah dan Jakaria (2024) dan diperkuat dengan integrasi digital oleh Islam (2024):

**Tahap 1 — Analisis Fungsi Produk.** Setiap fungsi produk didekomposisi menggunakan diagram FAST (*Function Analysis System Technique*). Untuk coffee enema basket, fungsi utamanya adalah: (a) menahan seduhan kopi, (b) memungkinkan filtrasi, (c) memudahkan pegangan, dan (d) memungkinkan pembersihan. Fungsi yang tidak esensial dieliminasi.

**Tahap 2 — Penilaian Manufakturabilitas (DFM).** Setiap komponen dievaluasi terhadap empat kriteria: proses fabrikasi yang tersedia, toleransi yang diminta, jenis material, dan volume produksi. Tabel keputusan DFM menggunakan matriks:

| Komponen | Proses Lama | Proses Baru | Penghematan (%) |
|---|---|---|---|
| Keranjang utama | Wire forming manual | Injection molding PP | 62% |
| Tutup | Sheet metal + rivet | Snap-fit integral | 85% |
| Handle | Stamping + welding | Molded-in grip | 70% |

**Tahap 3 — Penilaian Assemblability (DFA).** Menggunakan *Design for Assembly Worksheet*, setiap komponen dievaluasi untuk kemungkinan eliminasi, penggabungan, atau simplifikasi. Kriteria eliminasi: apakah komponen bergerak relatif terhadap komponen lain? Apakah komponen harus dari material berbeda? Apakah komponen harus dipisah untuk ease of assembly/service?

**Tahap 4 — Generasi Konsep Alternatif.** Menggunakan *morphological chart*, designer membangkitkan minimal 3 alternatif desain. Amirullah dan Jakaria (2024) membandingkan desain awal (*baseline*) dengan dua alternatif: desain integral (1-piece molding) dan desain modular.

**Tahap 5 — Pemilihan Konsep Optimal.** Menggunakan Pugh Matrix dengan pembobotan, atau AHP jika terdapat banyak kriteria. Skor dihitung dengan formula pada Bagian 2.

**Tahap 6 — Prototyping dan Validasi.** Prototipe dicetak menggunakan printer 3D FDM atau injeksi plastik pada mold cepat. Uji fungsional dilakukan untuk: kekuatan tarik handle, kebocoran filtrasi, dan durabilitas siklus pencucian.

**Tahap 7 — Standarisasi dan Continuous Improvement.** Desain akhir didokumentasikan dalam BOM (*Bill of Materials*), work instruction, dan control plan sesuai ISO 9001.

Dalam konteks konstruksi jembatan prefab (Islam, 2024), langkah 1–3 dilakukan di lingkungan *Common Data Environment* (CDE) BIM, dengan *parametric objects* yang membawa atribut manufacturability (berat segmen, dimensi crane-liftable, joint complexity). Langkah 4–5 dilakukan dengan BIM-based scenario simulation, di mana alternatif desain divisualisasikan dalam 4D (waktu ereksi) dan 5D (biaya) sebelum fabrikasi dimulai. SOP ini memastikan bahwa keputusan *DfMA-aware* diambil sejak *concept stage*, bukan saat shop-drawing.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Mari kita rekonstruksi perhitungan numerik berdasarkan data yang dilaporkan Amirullah dan Jakaria (2024) untuk coffee enema basket.

**Input Parameter Desain Awal (Baseline):**
- Jumlah komponen: $N_{old} = 11$
- Waktu pegang dasar: $t_{handle} = 1{,}5$ detik
- Total operasi tambahan: $\sum n_i = 17$
- Waktu operasi rata-rata: $\bar{t}_i = 8{,}2$ detik
- Volume produksi tahunan: $Q = 12{,}000$ unit/tahun

**Perhitungan DFA Baseline:**

$$t_{min,old} = N_{old} \cdot t_{handle} + \sum_{i=1}^{N_{old}} n_i \cdot \bar{t}_i$$

$$t_{min,old} = 11 \times 1{,}5 + 17 \times 8{,}2 = 16{,}5 + 139{,}4 = 155{,}9 \text{ detik}$$

Waktu aktual assembly baseline (dilaporkan): $t_{aktual,old} = 180$ detik. Maka:

$$DFA_{index,old} = \frac{155{,}9}{180} \times 100\% = 86{,}6\%$$

Artinya, hanya 13,4% waktu assembly yang "bernilai tambah". Efisiensi:

$$\eta_{asmb,old} = 1 - \frac{155{,}9}{180} = 0{,}134$$

**Desain Baru Setelah DFMA:**
- Jumlah komponen: $N_{new} = 3$ (keranjang integral, tutup snap-fit, ring penahan)
- Total operasi tambahan: $\sum n_i = 4$
- Waktu operasi rata-rata: $\bar{t}_i = 7{,}0$ detik

$$t_{min,new} = 3 \times 1{,}5 + 4 \times 7{,}0 = 4{,}5 + 28{,}0 = 32{,}5 \text{ detik}$$

Waktu aktual assembly baru (dilaporkan): $t_{aktual,new} = 45$ detik. Maka:

$$DFA_{index,new} = \frac{32{,}5}{45} \times 100\% = 72{,}2\%$$

$$\eta_{asmb,new} = 1 - \frac{32{,}5}{45} = 0{,}278$$

**Perhitungan Penghematan Biaya:**
Asumsikan biaya produksi komponen (Rp):
- Keranjang wire-forming lama: Rp 18.500/unit
- Tutup sheet metal + 4 rivet: Rp 12.000/unit  
- Handle stamping: Rp 6.500/unit
- Pengencang & aksesoris lain: Rp 8.500/unit

Total biaya komponen lama per unit: Rp 45.500. Biaya assembly @ Rp 150/jam × 180 detik = Rp 7.500/unit. Total Rp 53.000/unit.

Desain baru:
- Keranjang injeksi PP: Rp 7.200/unit (biaya material + molding share)
- Tutup snap-fit integral: Rp 4.000/unit
- Ring penahan: Rp 1.200/unit
- Total komponen: Rp 12.400/unit. Assembly @ Rp 150/jam × 45 detik = Rp 1.875/unit. Total Rp 14.275/unit.

Penghematan per unit: $\Delta C = 53.000 - 14.275 = \text{Rp } 38.725$.

Penghematan tahunan: $\Delta C_{total} = 38.725 \times 12.000 = \text{Rp } 464.700.000$ (sekitar Rp 464,7 juta).

**Analisis AHP untuk Aplikasi Jembatan Prefab (berdasarkan Islam, 2024):**

Kriteria dan bobot: Manufacturability (0,35), Transportability (0,20), Liftability (0,15), Erectability (0,20), Structural Adequacy (0,10). Cek konsistensi dengan $\lambda_{max} = 5{,}23$, $K=5$:

$$CI = \frac{5{,}23 - 5}{5-1} = 0{,}0575, \quad RI = 1{,}12$$

$$CR = \frac{0{,}0575}{1{,}12} = 0{,}051 < 0{,}10 \checkmark$$

Bobot konsisten. Skor total dua alternatif jembatan (skala 0–10):
- Alternatif A (steel