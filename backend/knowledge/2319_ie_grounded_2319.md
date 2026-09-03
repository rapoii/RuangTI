# 2319 — Redesain Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Rekayasa Produk untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (Undergraduate Project Showcase)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin kompetitif, kemampuan suatu organisasi untuk menghasilkan produk dengan biaya rendah, waktu perakitan pendek, serta kualitas yang terukur menjadi diferensiator strategis yang menentukan kelangsungan usaha. Prinsip ini berlaku universal, tidak hanya pada produk teknologi tinggi, tetapi juga pada instrumen kesehatan sederhana seperti *coffee enema basket* — sebuah alat terapi alternatif yang digunakan untuk prosedur irigasi kolon dengan ekstrak kopi. Amirullah dan Jakaria (2024) dalam publikasi mereka di jurnal *Undergraduate Project Showcase* dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti masalah fundamental dalam desain produk tersebut: produk yang beredar di pasaran masih menggunakan pendekatan desain konvensional yang belum mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA). Akibatnya, jumlah komponen terlalu banyak, operasi perakitan kompleks, waktu siklus tinggi, dan biaya produksi tidak optimal.

Urgensi redesain ini tidak berdiri sendiri. Sebagaimana ditunjukkan oleh Islam (2024) dalam kerangka evaluasi desain jembatan pracetak berbasis *Building Information Modelling* (BIM) yang mengintegrasikan prinsip DFMA ([DOI: 10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), keputusan desain yang diambil terlalu dini tanpa pertimbangan *buildability* — kemampuan untuk diproduksi, diangkut, diangkat, dan dipasang — akan menciptakan masalah laten yang baru terdeteksi pada tahap *shop-drawing* atau bahkan saat erection di lapangan. Pola kegagalan sistematis ini berlaku lintas-sektor: dari jembatan baja pracetak berskala infrastruktur hingga instrumen kesehatan individual seperti *coffee enema basket*. Pada produk后者 (kedua), setiap kelebihan baut, klip, atau sambungan solder secara langsung berkontribusi pada peningkatan *Bill of Materials* (BOM), waktu perakitan manual, dan risiko cacat (*defect rate*) yang pada akhirnya menggerus margin serta meningkatkan waktu *lead-time* produksi.

Dimensi ekonominya signifikan. Sebagai contoh, industri alat kesehatan rumahan (*home medical device*) di Asia Tenggara tumbuh dengan CAGR (Compound Annual Growth Rate) lebih dari 7% per tahun, sehingga efisiensi 10–25% pada satu lini produk saja berpotensi menghasilkan penghematan jutaan rupiah per siklus produksi massal. Amirullah dan Jakaria (2024) menyatakan bahwa redesain yang menerapkan DFMA tidak sekadar mengejar estetika atau fungsionalitas, melainkan melakukan **rekayasa ulang terhadap arsitektur produk** untuk meminimalkan jumlah komponen, menyederhanakan proses fabrikasi (stamping, welding, mesh forming), dan mengeliminasi operasi perakitan yang tidak memberikan nilai tambah (*non-value-adding operations*).

Secara metodologis, penelitian mereka beroperasi pada irisan antara *Design for Manufacture* (DFM) yang membahas bagaimana setiap komponen dirancang agar efisien dalam proses fabrikasi (pemotongan laser, bending, pengelasan titik) dan *Design for Assembly* (DFA) yang membahas bagaimana komponen-komponen tersebut digabungkan dengan jumlah operasi seminimal mungkin. Integrasi keduanya — DFMA — menjadi kerangka berpikir holistik yang penulis terapkan untuk mentransformasi desain eksisting menjadi desain yang *manufacturable* dan *assemblable*. Konteks ini menegaskan bahwa DFMA bukan sekadar metodologi akademis, melainkan instrumen rekayasa praktis yang memiliki dampak terukur terhadap profitabilitas, *time-to-market*, dan keberlanjutan operasional.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang diterapkan Amirullah dan Jakaria (2024) bersandar pada metodologi *Boothroyd-Dewhurst* yang telah distandarisasi secara internasional. Terdapat tiga pilar analisis utama yang harus dipahami secara kuantitatif.

### 2.1 Indeks Efisiensi Design for Assembly (DFA)

Indeks DFA mengukur proporsi waktu perakitan teoritis minimum terhadap waktu perakitan aktual pada desain yang diusulkan. Formulasi matematisnya adalah:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_{aktual} \cdot t_{aktual}} \times 100\%$$

Di mana:
- $N_{min}$ = jumlah minimum teoritis komponen yang diperlukan (berdasarkan fungsi esensial produk)
- $t_{min}$ = waktu minimum teoritis untuk merakit satu komponen (umumnya diasumsikan $t_{min} = 1.5$ detik sesuai asumsi Boothroyd-Dewhurst untuk operasi dasar)
- $N_{aktual}$ = jumlah komponen aktual pada desain eksisting atau redesain
- $t_{aktual}$ = waktu perakitan aktual yang diukur pada lini produksi

Nilai $\eta_{DFA}$ yang mendekati 100% menunjukkan desain yang sangat efisien, sedangkan nilai di bawah 30% mengindikasikan adanya inefisiensi substansial yang harus dikoreksi melalui redesain.

### 2.2 Fungsi Efisiensi Manufaktur (DFM)

Untuk mengkuantifikasi kontribusi desain terhadap efisiensi manufaktur, digunakan formula efisiensi material dan efisiensi proses:

$$E_{manufaktur} = \frac{C_{material\_utilization} \cdot C_{process\_efficiency}}{C_{total\_fabrikasi}} \times 100\%$$

Di mana efisiensi utilisasi material didefinisikan sebagai:

$$C_{material\_utilization} = \frac{M_{produk\_jadi}}{M_{raw\_input}} \times 100\%$$

Variabel $M_{produk\_jadi}$ adalah massa atau volume material yang menjadi bagian fungsional produk, sedangkan $M_{raw\_input}$ adalah total material yang dibeli (termasuk *scrap* dan *wastage*).

### 2.3 Analisis Biaya Total Siklus Produksi

Total biaya per unit (Total Cost per Unit) yang menjadi keputusan redesain adalah:

$$C_{unit} = C_{material} + C_{fabrikasi} + C_{perakitan} + C_{quality} + C_{overhead}$$

Dengan komponen biaya perakitan yang merupakan fungsi langsung dari jumlah operasi dan waktu:

$$C_{perakitan} = \sum_{i=1}^{n} \left(t_i \cdot r_i\right) + C_{fixture}$$

Di mana $t_i$ adalah waktu operasi ke-$i$, $r_i$ adalah *labor rate* untuk operasi tersebut (Rp/menit), dan $C_{fixture}$ adalah biaya *fixture* dan perkakas per unit.

### 2.4 *Design Efficiency Ratio* untuk Keputusan Redesain

Untuk membandingkan desain eksisting dengan redesain, Amirullah dan Jakaria (2024) menggunakan rasio efektivitas desain:

$$\Delta_{improvement} = \frac{\eta_{redesign} - \eta_{existing}}{\eta_{existing}} \times 100\%$$

Kriteria keputusan biasanya: redesain diterima bila $\Delta_{improvement} \geq 15\%$ dengan payback period kurang dari 12 bulan.

### 2.5 Pendekatan Value Engineering (VE) sebagai Filter

Sebelum komponen di-*release* ke produksi, setiap komponen diuji menggunakan formula nilai:

$$V = \frac{F}{C}$$

Di mana $F$ adalah fungsi (kontribusi terhadap kinerja produk) dan $C$ adalah biaya. Komponen dengan $V < 1$ atau $F/C$ rasio yang tidak proposional menjadi kandidat eliminasi atau integrasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti prosedur sistematis yang diadopsi secara luas di industri manufaktur presisi. Amirullah dan Jakaria (2024) menyusun alur kerja sebagai berikut:

### SOP Tahap 1: Analisis Desain Eksisting
- Dekomposisi produk menjadi *Bill of Materials* (BOM) lengkap
- Pengukuran waktu perakitan aktual menggunakan *time study* dengan stopwatch atau video analisis (metode MTM — *Methods-Time Measurement*)
- Identifikasi operasi yang bersifat *value-added* versus *non-value-added*
- Pemetaan *process flow chart* dari raw material hingga produk jadi

### SOP Tahap 2: Analisis Fungsi dengan Function Analysis System Technique (FAST)
- Pembuatan diagram FAST untuk memvisualisasikan hubungan fungsi dasar, fungsi tingkat tinggi, dan fungsi pendukung
- Identifikasi fungsi esensial yang harus dipertahankan (kritikal: menahan saringan kopi, memungkinkan aliran larutan, tahan terhadap korosi dan suhu 40–50°C)

### SOP Tahap 3: Aplikasi Prinsip DFA
- Eliminasi komponen redundan menggunakan *questioning technique*: "Apakah komponen ini bergerak relatif terhadap komponen lain? Apakah komponen ini harus terbuat dari material berbeda? Apakah komponen ini memerlukan pembongkaran untuk perawatan?"
- Standarisasi komponen yang tersisa (penggunaan baut, ring, dan material yang sama规格)
- Simplifikasi operasi fastening: konversi dari *threaded fasteners* menjadi *snap-fit* atau *press-fit* jika memungkinkan

### SOP Tahap 4: Aplikasi Prinsip DFM
- Optimasi *blank layout* untuk operasi *stamping* dan *laser cutting* sehingga *material utilization* meningkat
- Pemilihan proses fabrikasi dengan *process capability index* ($C_p \geq 1.33$)
- Redesain geometri untuk menghilangkan undercuts, sharp corners yang memerlukan operasi machining tambahan

### SOP Tahap 5: Redesain dan Validasi
- Pembuatan prototipe redesain
- Pengujian fungsional (uji kebocoran, uji kekuatan tarik, uji siklus termal)
- Perhitungan ulang indeks DFMA untuk verifikasi pencapaian target

### SOP Tahap 6: Standardisasi dan Diseminasi
- Dokumentasi SOP perakitan baru
- Pelatihan operator lini produksi
- Penetapan *control plan* untuk menjaga konsistensi

Diagram alur kerja terpadu mengikuti pola **DMAIC-DFMA** yang menggabungkan filosofi *Define-Measure-Analyze-Improve-Control* dari Lean Six Sigma dengan analisis DFMA, sehingga menghasilkan kerangka perbaikan yang terukur dan berkelanjutan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan pendekatan yang dilaporkan Amirullah dan Jakaria (2024), kami menyusun skenario kuantitatif realistis untuk redesain *coffee enema basket* dengan baseline sebagai berikut:

### 4.1 Data Input Desain Eksisting
| Parameter | Nilai Eksisting |
|-----------|----------------|
| Jumlah komponen ($N_{aktual}$) | 14 bagian |
| Jumlah baut/sekrup | 8 buah |
| Jumlah operasi pengelasan | 4 titik |
| Waktu perakitan aktual ($t_{aktual}$) | 86 detik/unit |
| Biaya material | Rp 18.500/unit |
| Biaya fabrikasi | Rp 12.000/unit |
| Biaya perakitan | Rp 14.200/unit (labor rate Rp 9.900/jam) |
| Biaya kualitas (rework + reject) | Rp 3.800/unit |
| Total biaya produksi | Rp 48.500/unit |

### 4.2 Perhitungan Baseline Indeks DFA

Komponen fungsional esensial minimum: *mesh basket*, *handle stem*, *base connector* → $N_{min} = 3$, dengan asumsi $t_{min} = 1.5$ detik.

$$\eta_{DFA,existing} = \frac{3 \times 1.5}{14 \times 86/14} \times 100\% = \frac{4.5}{86} \times 100\% = 5.23\%$$

Nilai indeks DFA eksisting sebesar **5.23%** menunjukkan inefisiensi perakitan yang sangat tinggi — sebuah *red flag* dalam perspektif DFMA.

### 4.3 Hasil Redesain

Setelah penerapan DFMA, tercapai spesifikasi sebagai berikut:
- Eliminasi 6 komponen redundan (ring, bracket tambahan, baut berlebih, tutup sekunder)
- Integrasi fungsi *handle* dan *stem* menjadi satu komponen fabrikasi (*one-piece design*)
- Konversi 4 titik pengelasan menjadi 2 titik dengan desain *bead-on-plate*
- Penggantian 8 baut dengan 2 *snap-fit* mekanis

| Parameter | Desain Eksisting | Desain Redesain | Δ |
|-----------|------------------|------------------|---|
| Jumlah komponen ($N$) | 14 | 7 | -50% |
| Jumlah baut | 8