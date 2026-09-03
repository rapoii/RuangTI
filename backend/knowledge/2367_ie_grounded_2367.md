# 2367 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Rakitan Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket dengan Pendekatan Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan alternatif di Indonesia mengalami pertumbuhan signifikan dalam satu dekade terakhir, didorong oleh meningkatnya permintaan konsumen terhadap terapi komplementer seperti coffee enema yang dilaporkan memiliki efek detoksifikasi dan peningkatan metabolisme. Salah satu komponen krusial dalam perangkat ini adalah *coffee enema basket* — sebuah wadah saring yang berfungsi menahan bubuk kopi selama proses perfusi sekaligus memungkinkan ekstraksi senyawa aktif secara optimal. Amirullah dan Jakaria (2024) dalam penelitiannya yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa desain konvensional coffee enema basket yang beredar di pasar memiliki kelemahan struktural yang substansial: jumlah komponen terlalu banyak, proses perakitan yang tidak ergonomis, serta pemilihan material yang kurang mempertimbangkan aspek manufacturability. Kondisi ini menimbulkan tiga permasalahan operasional utama, yaitu: (1) waktu perakitan yang melebihi ambang batas toleransi produksi massal, (2) biaya produksi yang tinggi akibat kompleksitas komponen, dan (3) risiko kegagalan fungsi yang dapat membahayakan pasien pengguna.

Urgensi ekonomis dan teknis redisein ini menjadi semakin nyata ketika produk alat kesehatan dituntut memenuhi standar Good Manufacturing Practice (GMP) dan regulasi BPOM, di mana setiap penambahan komponen bukan hanya menambah biaya tetapi juga memperbesar *failure surface* dan potensi non-conformance. Pendekatan Design for Manufacture and Assembly (DFMA) muncul sebagai solusi metodologis yang relevan karena mengintegrasikan dua dimensi rekayasa secara simultan, yaitu kemampuan manufacturability dan efisiensi assembly. DFMA bukan sekadar metode optimasi, melainkan sebuah paradigma desain yang memandang setiap keputusan engineering sebagai keputusan manufaktur dan perakitan. Relevansi lintas industri dari pendekatan ini dikonfirmasi oleh Islam (2024) dalam studinya tentang integrasi DfMA dengan BIM untuk konstruksi jembatan prefabrikasi (DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), yang menunjukkan bahwa prinsip minimisasi part, simplifikasi assembly, dan optimalisasi proses manufacturability dapat diadaptasi dari skala produk medis ke skala infrastruktur sipil. Perspektif ini mempertegas bahwa DFMA adalah kompetensi inti yang harus dikuasai oleh setiap insinyur industri, terlepas dari sektor aplikasinya.

Dalam konteks manufaktur alat kesehatan, DFMA juga berperan sebagai *risk mitigation tool*. Setiap komponen yang berhasil dihilangkan melalui analisis DFA berpotensi menghilangkan satu titik potensi kontaminasi, satu langkah inspeksi kualitas, dan satu工序 sterilisasi. Dengan demikian, investasi intelektual dalam redesain DFMA tidak hanya menghemat biaya tetapi juga meningkatkan *patient outcome* — menjadikan metode ini bernilai strategis dari perspektif bisnis, operasional, maupun klinis. Bagian selanjutnya akan menguraikan landasan teori kuantitatif yang digunakan oleh Amirullah dan Jakaria (2024) untuk mengarahkan proses redesain tersebut.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan dalam studi Amirullah dan Jakaria (2024) berakar pada metodologi Boothroyd-Dewhurst yang telah terstandarisasi secara internasional. Dua pilar utama pendekatan ini adalah Design for Manufacture (DFM) dan Design for Assembly (DFA), yang keduanya memiliki formulasi matematis presisi.

**2.1 Design Efficiency (DFA)**

Efisiensi desain diukur menggunakan rasio antara jumlah minimum part yang dibutuhkan untuk memenuhi fungsi produk dengan jumlah part aktual yang digunakan dalam desain:

$$E_{design} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum part yang secara teoritis diperlukan (berdasarkan analisis fungsi), dan $N_{actual}$ adalah jumlah part aktual dalam desain. Semakin mendekati 100%, semakin efisien desain tersebut. Amirullah dan Jakaria (2024) menetapkan target $E_{design} \geq 75\%$ sebagai ambang batas desain efisien.

**2.2 Assembly Time Estimation**

Waktu perakitan total dihitung menggunakan persamaan Boothroyd:

$$T_{assembly} = \sum_{i=1}^{n} (T_{i,handle} + T_{i,insert} + T_{i,fasten})$$

di mana $T_{i,handle}$ adalah waktu penanganan komponen ke-i, $T_{i,insert}$ adalah waktu penyisipan, dan $T_{i,fasten}$ adalah waktu pengikatan. Indeks assembly didefinisikan sebagai:

$$IA = \frac{T_{actual}}{T_{min}}$$

dengan $T_{min} = 3N$ detik (asumsi waktu minimum per part adalah 3 detik). Nilai $IA < 1.0$ mengindikasikan desain dengan efisiensi assembly tinggi.

**2.3 Manufacturing Cost Function**

Total biaya manufaktur diformulasikan sebagai:

$$C_{total} = \sum_{i=1}^{n} (C_{material,i} + C_{process,i} + C_{tooling,i})$$

di mana $C_{material,i}$ adalah biaya material komponen ke-i, $C_{process,i}$ adalah biaya proses produksi, dan $C_{tooling,i}$ adalah biaya perkakas. Persentase reduksi biaya menjadi:

$$\Delta C\% = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

**2.4 Material Selection Index**

Pemilihan material menggunakan *weighted property index*:

$$M_i = \sum_{j=1}^{k} w_j \cdot \frac{P_{ij}}{P_{j,ref}}$$

di mana $w_j$ adalah bobot kriteria ke-j (misalnya ketahanan korosi, biocompatibility, machinability), $P_{ij}$ adalah nilai properti material, dan $P_{j,ref}$ adalah nilai referensi.

**2.5 Integration with BIM-based Multi-Criteria Framework**

Islam (2024) dalam studinya mengusulkan kerangka evaluasi multi-kriteria yang menggabungkan DfMA ke dalam BIM:

$$S_{alternative} = \sum_{c=1}^{m} w_c \cdot s_c$$

di mana $S_{alternative}$ adalah skor total alternatif desain, $w_c$ adalah bobot kriteria, dan $s_c$ adalah skor ternormalisasi kriteria ke-c. Pendekatan ini dapat diadaptasi untuk evaluasi desain alat kesehatan dengan kriteria yang disesuaikan (sterilisasi, biocompatibility, ergonomics).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA pada redesain coffee enema basket mengikuti enam tahapan sistematis yang dipaparkan oleh Amirullah dan Jakaria (2024):

**Tahap 1 — Analisis Fungsi Produk.** Setiap komponen existing diidentifikasi fungsinya menggunakan *function analysis system technique* (FAST). Fungsi dasar coffee enema basket adalah: (a) menahan ampas kopi, (b) memungkinkan aliran larutan, (c) menyaring partikel, dan (d) menjamin keamanan pengguna.

**Tahap 2 — Minimisasi Part (DFA Boothroyd).** Setiap komponen dievaluasi terhadap tiga pertanyaan kritis Boothroyd: (1) Apakah part bergerak relatif terhadap part lain selama operasi? (2) Apakah part harus berbeda material dari part lain? (3) Apakah part harus dipisahkan untuk allow assembly/disassembly? Jika ketiga jawaban "tidak", part tersebut layak digabungkan (combine).

**Tahap 3 — Analisis Assembly.** Menghitung *Design Efficiency* dan *Assembly Index* menggunakan rumus pada Bagian 2. Identifikasi operasi handling yang tidak value-added seperti orientasi, penyisipan force-fit, dan fastener installation.

**Tahap 4 — Analisis Manufacturability (DFM).** Setiap komponen dievaluasi proses manufaktur optimalnya menggunakan *manufacturing process selection matrix* berdasarkan material dan geometri. Kandidat proses: injection molding (plastik), stamping (stainless steel mesh), welding, dan machining.

**Tahap 5 — Estimasi Biaya dan Reduksi Kompleksitas.** Hitung biaya total menggunakan persamaan pada Bagian 2.3, identifikasi komponen dengan *cost-to-function ratio* tertinggi.

**Tahap 6 — Iterasi dan Redesain Final.** Modifikasi desain, hitung ulang semua metrik, validasi dengan prototype, dan uji fungsional.

Standar operasional yang digunakan sebagai acuan: SNI ISO 13485:2016 (Sistem Manajemen Mutu Alat Kesehatan), ISO 14971 (Manajemen Risiko Alat Kesehatan), serta prinsip-prinsip *Design Control* FDA 21 CFR Part 820. Diagram alir proses secara skematis adalah sebagai berikut:

```
[Analisis Fungsi] → [Identifikasi Part] → [Evaluasi DFA Boothroyd]
                                                    ↓
[Validasi Prototype] ← [Iterasi Redesain] ← [Seleksi Proses DFM]
        ↓
[Uji Fungsional & Dokumentasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data literatur Amirullah dan Jakaria (2024), disajikan contoh perhitungan numerik untuk redesain coffee enema basket. Parameter industri yang digunakan bersifat realistis untuk produksi alat kesehatan skala menengah di Indonesia.

**4.1 Data Input Desain Awal (Before)**

| Parameter | Nilai |
|-----------|-------|
| Jumlah part aktual ($N_{actual}$) | 8 part |
| Material utama | Stainless Steel 304 + Plastik PP |
| Waktu assembly total | 240 detik |
| Biaya material/part | Rp 8.500 |
| Biaya proses total | Rp 24.000 |
| Biaya tooling allocated | Rp 15.000 |
| Total biaya per unit | Rp 107.000 |

**4.2 Perhitungan Desain Awal**

Menerapkan rumus efisiensi desain dengan asumsi $N_{min} = 4$:

$$E_{design,before} = \frac{4}{8} \times 100\% = 50\%$$

Indeks assembly dengan $T_{min} = 3 \times 8 = 24$ detik:

$$IA_{before} = \frac{240}{24} = 10.0$$

Nilai $IA = 10.0$ menunjukkan desain sangat tidak efisien — setiap part membutuhkan rata-rata 30 detik untuk ditangani, jauh di atas benchmark industri.

Total biaya:

$$C_{before} = \sum_{i=1}^{8}(8.500 + 24.000/8 + 15.000/8) = 8 \times 12.250 = Rp\ 98.000$$

(Sesuai koreksi metodologis, biaya sebelum redesain adalah Rp 98.000 per unit).

**4.3 Desain Hasil Redesain (After)**

Setelah menerapkan DFMA, kombinasi part menghasilkan:

| Parameter | Nilai |
|-----------|-------|
| Jumlah part aktual ($N_{actual}$) | 4 part |
| Material utama | SS 316L mesh tunggal + handle polimer |
| Waktu assembly total | 72 detik |
| Biaya material/part | Rp 9.500 |
| Biaya proses total | Rp 18.000 |
| Biaya tooling allocated | Rp 8.000 |
| Total biaya per unit | Rp 55.800 |

**4.4 Perhitungan Desain Redesain**

$$E_{design,after} = \frac{4}{4} \times 100\% = 100\%$$

$$IA_{after} = \frac{72}{3 \times 4} = \frac{72}{12} = 6.0$$

$$C_{after} = \sum_{i=1}^{4}(9.500 + 18.000/4 + 8.000/4) = 4 \times 15.750 = Rp\ 63.000$$

**4.5 Perhitungan Peningkatan (Improvement Metrics)**

$$\Delta C\% = \frac{98.000 - 63.000}{98.000} \times 100\% = 35.71\%$$

$$\Delta T\% = \frac{240 - 72}{240} \times 100\% = 70.0\%$$

$$\Delta N\% = \frac{8 - 4}{8} \times 100\% = 50.0\%$$

$$\Delta E_{design} = 100\% - 50\% = 50\ \text{persentase poin}$$

**4.6 Analisis Material Menggunakan Weighted Index**

Untuk memilih material mesh antara SS 304 dan SS 316L