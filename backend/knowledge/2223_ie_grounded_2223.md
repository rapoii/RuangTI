# 2223 — Redesain Produk Manufaktur Menggunakan Metode Design for Manufacture and Assembly (DFMA) pada Komponen Fungsional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh meningkatnya kompetisi global, fragmentasi rantai pasok, dan tuntutan presisi fungsional pada produk teknis, pendekatan **Design for Manufacture and Assembly (DFMA)** telah bertransformasi dari sekadar metodode reduksi biaya menjadi kerangka strategis yang menentukan daya saing industri. Amirullah dan Jakaria (2024) dalam studi terindeks DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menunjukkan bahwa penerapan DFMA pada redesain *coffee enema basket* — komponen fungsional yang beroperasi pada lingkungan basah bersuhu terkontrol dengan paparan biologis berulang — berhasil menurunkan jumlah komponen, menyederhanakan alur perakitan, dan menekan total biaya produksi tanpa mengorbankan kualitas higienitas maupun ketahanan korosi. Temuan ini secara langsung menjawab fenomena *over-engineering* yang sering melanda produk teknis berskala UMKM, di mana desainer cenderung menambah komponen sebagai jaring pengaman fungsional tanpa memperhatikan implikasi biaya perakitan, waktu setup, dan kemampuan produksi massal.

Urgensi ekonomis dari penerapan DFMA semakin nyata ketika dibandingkan dengan praktik rekayasa konvensional yang menggunakan *trial-and-error prototyping*. Setiap iterasi prototipe pada produk dengan banyak komponen (*high part count*) akan menyerap biaya material, biaya tenaga kerja teknis, dan waktu kalibrasi yang bersifat kuadratik terhadap jumlah *design changes*. Penelitian Islam (2024) yang dipublikasikan pada *Journal of Sustainable Development and Policy* dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) melaporkan bahwa di industri jembatan pracetak, di mana *moulds are cut* dan desain dibekukan sebelum masalah *buildability* teridentifikasi, kelambatan keputusan desain akibat tidak digunakannya kerangka multi-kriteria berbasis DFMA menimbulkan pembengkakan biaya *retrofit* hingga 18–24% dari nilai kontrak awal. Paradoks ini — bahwa keputusan krusial diambil terlalu awal dengan informasi yang tidak lengkap — merupakan *root cause* inefisiensi yang ingin diselesaikan oleh DFMA.

Konteks industri yang melatarbelakangi penelitian Amirullah dan Jakaria (2024) juga merefleksikan pergeseran paradigma dari *design verification* pascaproduksi menuju *design prevention* pada tahap konseptual. Produk *coffee enema basket* yang semula memiliki tujuh komponen utama (keranjang saringan, pegangan, ring pengunci, *spacer*, dasar berlubang, *clip* penahan, dan tutup pelindung) berhasil dikonsolidasikan menjadi struktur tiga komponen fungsional melalui pendekatan *part integration* dan *design simplification*. Pendekatan ini tidak hanya menurunkan *manufacturing cost* tetapi juga memperbaiki *cleanability* — aspek kritis untuk produk yang kontak dengan pengguna akhir pada aplikasi klinis dan wellness.

Lebih jauh, penggunaan stainless steel food-grade (umumnya SUS 304 atau SUS 316) sebagai material dominan mensyaratkan strategi *manufacturing process selection* yang berbeda dibanding produk struktural. Pemilihan antara *sheet metal forming*, *wire bending*, atau *tube welding* menjadi keputusan desain yang menentukan apakah produk dapat diproduksi dengan *tooling* standar atau membutuhkan investasi *custom jig*. Penelitian Amirullah dan Jakaria (2024) secara eksplisit menunjukkan bahwa DFMA berfungsi sebagai *decision-support system* yang membantu desainer memilih kombinasi *manufacturing process* dan *assembly sequence* yang paling efisien sebelum tooling dikunci (*tool-locked*).

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengikuti tradisi **Boothroyd-Dewhurst** yang menggabungkan dua dimensi: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). Berikut adalah formulasi fundamental yang digunakan dalam analisis.

### 2.1 Indeks Efisiensi Perakitan (DFA Efficiency)

Indeks efisiensi perakitan menurut Boothroyd-Dewhurst didefinisikan sebagai rasio antara waktu teoritis minimum untuk merakit produk terhadap waktu aktual yang dibutuhkan:

$$E_{DFA} = \frac{N_m \cdot t_{min}}{T_{ma}} \times 100\%$$

di mana:

- $E_{DFA}$ = efisiensi desain untuk perakitan (%)
- $N_m$ = jumlah minimum komponen teoretis
- $t_{min}$ = waktu pegangan minimum per komponen (umumnya 1,5 – 3,0 detik untuk komponen sederhana)
- $T_{ma}$ = total waktu perakitan aktual (detik)

Versi ringkas yang umum digunakan dalam literatur adalah:

$$\eta_{DFA} = \frac{3 \cdot N}{T_{ma}}$$

di mana $N$ adalah jumlah aktual komponen dan $T_{ma}$ diukur dalam detik. Nilai $\eta_{DFA}$ yang rendah (< 30%) mengindikasikan desain yang perlu disederhanakan, sedangkan nilai di atas 60% mencerminkan desain yang matang secara perakitan.

### 2.2 Biaya Manufaktur per Komponen

Biaya produksi total dihitung menggunakan model *process-based costing*:

$$C_i = C_m + C_t + \frac{C_o}{Q} + \frac{C_{setup}}{n}$$

di mana:

- $C_i$ = biaya produksi per unit komponen ke-$i$
- $C_m$ = biaya material langsung
- $C_t$ = biaya tooling per unit
- $C_o$ = biaya overhead tetap
- $Q$ = volume produksi
- $C_{setup}$ = biaya setup mesin
- $n$ = jumlah unit per lot produksi

Total biaya perakitan produk:

$$C_T = \sum_{i=1}^{N} C_i + C_{assembly}$$

dengan $C_{assembly} = T_{ma} \cdot L_c$, di mana $L_c$ adalah *labor cost* per detik (biasanya Rp 50 – Rp 150/detik untuk operator terlatih di industri kecil-menengah Indonesia).

### 2.3 Persentase Reduksi Biaya dan Waktu

Parameter dampak redesain diformulasikan sebagai berikut:

$$\Delta C\% = \frac{C_{old} - C_{new}}{C_{old}} \times 100\%$$

$$\Delta T\% = \frac{T_{old} - T_{new}}{T_{old}} \times 100\%$$

$$\Delta N\% = \frac{N_{old} - N_{new}}{N_{old}} \times 100\%$$

Amirullah dan Jakaria (2024) melaporkan bahwa redesain yang dilakukan menghasilkan reduksi komponen hingga 57% (dari 7 menjadi 3 komponen), dengan implikasi positif terhadap seluruh metrik di atas.

### 2.4 Kriteria Seleksi Proses Manufaktur

Pemilihan proses manufaktur dievaluasi menggunakan *weighted scoring matrix*:

$$S_j = \sum_{k=1}^{K} w_k \cdot r_{jk}$$

dengan kendala:

$$\sum_{k=1}^{K} w_k = 1, \quad 0 \leq r_{jk} \leq 10$$

di mana $w_k$ adalah bobot kriteria ke-$k$ (misalnya *cost*, *precision*, *batch flexibility*, *tooling availability*), dan $r_{jk}$ adalah skor alternatif proses $j$ pada kriteria $k$. Proses dengan $S_j$ tertinggi dipilih sebagai rekomendasi manufaktur.

### 2.5 Fungsi Tujuan Optimasi

Dalam kerangka multi-kriteria seperti yang dikemukakan oleh Islam (2024) pada konteks jembatan pracetak, fungsi tujuan DFMA+BIM dapat dinyatakan sebagai:

$$\min Z = \alpha \cdot C_T + \beta \cdot T_{ma} + \gamma \cdot N - \delta \cdot Q_{functional}$$

dengan $\alpha, \beta, \gamma, \delta \geq 0$ adalah parameter bobot preferensi desainer, dan $Q_{functional}$ adalah indeks kualitas fungsional produk (misalnya kekuatan tarik, ketahanan korosi, atau *cleanability score*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun prosedur DFMA dalam tujuh tahapan sistematis yang telah teruji pada produk *coffee enema basket* dan bersifat generalizable. Berikut adalah SOP yang diadaptasi dari paper tersebut dengan mempertimbangkan praktik terbaik dari literatur DFMA klasik.

**Tahap 1 — Analisis Desain Awal (*Baseline Analysis*)**
Inventarisasi seluruh komponen produk awal, identifikasi material, identifikasi proses fabrikasi, dan pengukuran waktu perakitan aktual $T_{ma,old}$ menggunakan *stopwatch time study* dengan sampel minimal 30 siklus perakitan.

**Tahap 2 — Penerapan *Design for Assembly (DFA)***
Evaluasi setiap komponen menggunakan tiga pertanyaan kritis Boothroyd-Dewhurst:
1. Apakah komponen ini bergerak relatif terhadap komponen lain selama operasi? (Jika tidak → kandidat integrasi)
2. Apakah komponen ini harus terbuat dari material berbeda? (Jika tidak → kandidat integrasi)
3. Apakah komponen ini diperlukan untuk disassembly? (Jika tidak → kandidat integrasi)

Komponen yang lulus ketiga pertanyaan menjadi kandidat *part elimination*.

**Tahap 3 — Penerapan *Design for Manufacture (DFM)***
Untuk komponen yang lolos seleksi DFA, analisis *manufacturability*: toleransi, *draft angle*, jari-jari tekukan minimum, ketersediaan *standard tooling*, dan kesesuaian dengan kapasitas mesin lokal. Pemilihan proses mengacu pada matriks seleksi pada Persamaan (4).

**Tahap 4 — Pembuatan Desain Konsep Alternatif**
Mengembangkan minimal 2–3 konsep redesain dengan pendekatan berbeda: (a) *part integration* menggunakan fitur *single-piece forming*, (b) *process substitution* (misalnya *sheet metal stamping* menggantikan *welding assembly*), dan (c) *modular design* dengan komponen *snap-fit*.

**Tahap 5 — Seleksi Konsep Optimal**
Masing-masing konsep dievaluasi menggunakan *weighted scoring* terhadap kriteria: biaya, waktu perakitan, kekuatan, estetika, *cleanability*, dan *manufacturability*. Konsep dengan skor tertinggi dipilih.

**Tahap 6 — Validasi Manufaktur dan Perakitan**
Pembuatan prototipe, pengukuran ulang $T_{ma,new}$, $N_{new}$, dan $C_{new}$, serta perhitungan efisiensi DFA menurut Persamaan (1) dan (2).

**Tahap 7 — Analisis Dampak dan Dokumentasi**
Perhitungan $\Delta C\%$, $\Delta T\%$, $\Delta N\%$ serta penyusunan *manufacturing specification* dan *assembly instruction* definitif.

Integrasi BIM-DFMA yang dikemukakan oleh Islam (2024) menambahkan **Tahap 8 — Multi-Criteria Digital Evaluation**, di mana setiap alternatif desain dievaluasi secara digital terhadap kriteria *manufacturing*, *transport*, *lifting*, dan *erection* menggunakan parameter geometrik dan fisik dalam model BIM — suatu pendekatan yang beresonansi kuat dengan *digital twin* dan Industry 4.0.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter desain dan asumsi operasional yang dilaporkan oleh Amirullah dan Jakaria (2024), dilakukan rekonstruksi kuantitatif untuk *coffee enema basket* dengan dimensi kerja diameter 90 mm dan tinggi 100 mm. Material adalah stainless steel SUS 304 food-grade dengan densitas $\rho = 7{,}93 \text{ g/cm}^3$.

**Tabel 1. Inventarisasi Komponen Desain Awal vs Desain Redesain**

| Komponen | Desain Awal | Desain Redesain |
|----------|-------------|-----------------|
| Keranjang saringan (mesh) | Ada | Ada (terintegrasi) |
| Pegangan | Ada (dilas) | Ada (terintegrasi) |
| Ring pengunci | Ada | **Dihilangkan** |
| Spacer tengah | Ada | **Dihilangkan** |
| Dasar berlubang | Ada (terpisah) | **Terintegrasi** |
| Clip penahan | Ada | **Dihilangkan** |
| Tutup pelindung | Ada | Ada (desain baru) |
| **