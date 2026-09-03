# 2927 — Redesain Produk Manufaktur Medis dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Generalisasi ke Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (*home medical device*) merupakan salah satu sektor manufaktur dengan pertumbuhan paling cepat di Asia Tenggara, didorong oleh meningkatnya adopsi terapi alternatif berbasis klinis, termasuk terapi *coffee enema* yang menggunakan alat infus rektal dengan tabung saring (*basket*) sebagai komponen kritis pemisah filtrat kopi dari ampas. Amirullah dan Jakaria (2024) dalam studinya yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa desain konvensional *coffee enema basket* masih mengandalkan proses perakitan manual dengan komponen yang berlebih (*redundant parts*), toleransi longgar, dan geometri yang sulit difabrikasi menggunakan mesin *Computer Numerical Control* (CNC) standar. Kondisi ini menimbulkan tiga masalah operasional utama: pertama, *cycle time* perakitan yang tinggi sehingga biaya tenaga kerja langsung (*direct labor cost*) membengkak; kedua, *scrap rate* yang signifikan akibat proses pembentukan logam (*sheet metal forming*) yang berulang; ketiga, tidak terpenuhinya prinsip *single-minute exchange of die* (SMED) pada lini produksi karena perubahan *tooling* yang sering.

Urgensi ekonomis dari permasalahan ini tampak pada Total Cost of Ownership (TCO) alat kesehatan. Sebuah *coffee enema basket* yang dirancang tanpa mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA) membutuhkan rata-rata 7–9 komponen diskret, 4 jenis operasi pengelasan titik (*spot welding*), dan 6 operasi crimping/penguncian. Penelitian Amirullah dan Jakaria (2024) membuktikan bahwa melalui metodologi DFMA yang ketat, jumlah part dapat direduksi menjadi 3–4 komponen dengan mempertahankan fungsionalitas filtrasi dan sanitasi sesuai standar医疗器械 GMP. Penghematan kumulatif yang dilaporkan mencapai 42,7% pada biaya produksi per unit dan 58,3% pada *assembly time*.

Konteks yang lebih luas dikuatkan oleh Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menunjukkan bahwa integrasi DFMA ke dalam kerangka evaluasi berbasis Building Information Modelling (BIM) pada konstruksi jembatan prefabrikasi menghasilkan peningkatan kualitas keputusan desain di tahap konseptual. Temuan ini menunjukkan bahwa kelambatan memasukkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi ke dalam proses desain — seperti yang dikritik oleh Islam (2024) — adalah pola kegagalan yang berulang lintas-sektor industri, dari alat kesehatan hingga infrastruktur. Dengan demikian, adopsi DFMA bukan sekadar strategi reduksi biaya, melainkan pendekatan *systems thinking* untuk mencegah *design freeze* prematur yang mahal.

## 2. Landasan Teori & Formulasi Matematis

DFMA merupakan integrasi dua metodologi turunan: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi komponen, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan. Amirullah dan Jakaria (2024) mengadopsi kerangka Boothroyd-Dewhurst sebagai basis kuantitatif, yang menghasilkan dua indeks efisiensi utama.

### 2.1 Indeks Efisiensi Design for Assembly (DfA)

Indeks DfA mengukur proporsi waktu yang dihabiskan hanya pada operasi perakitan esencial versus total waktu perakitan. Formulasi KaTeX berikut merujuk langsung pada persamaan Boothroyd-Dewhurst yang digunakan Amirullah dan Jakaria (2024):

$$E_{DfA} = \frac{N_m \cdot t_m}{N_m \cdot t_m + \sum_{i=1}^{N_a} t_{a,i}} \times 100\%$$

Di mana:
- $N_m$ = jumlah operasi penanganan minimum (*minimum handling operations*)
- $t_m$ = waktu dasar setiap operasi penanganan (detik)
- $N_a$ = jumlah total operasi perakitan aktual
- $t_{a,i}$ = waktu operasi perakitan ke-$i$ (detik)

### 2.2 Fungsi Biaya Manufaktur Total

Biaya manufaktur total per unit diformulasikan sebagai:

$$C_{total} = C_{mat} + C_{fab} + C_{asb} + C_{tool} + C_{QC}$$

Di mana $C_{mat}$ adalah biaya material (stainless steel 304 medis), $C_{fab}$ biaya fabrikasi (CNC bending, laser cutting, spot welding), $C_{asb}$ biaya perakitan, $C_{tool}$ biaya *tooling* dan *fixture*, dan $C_{QC}$ biaya inspeksi kualitas dan *biocompatibility testing*. Persentase pengurangan biaya didefinisikan:

$$\Delta C = \frac{C_{old} - C_{new}}{C_{old}} \times 100\%$$

### 2.3 Throughput Time dan Bottleneck Analysis

Waktu siklus produksi mengikuti persamaan Little's Law yang disesuaikan untuk sistem manufaktur job-batch:

$$WIP = \lambda \cdot T_{cycle}$$

Di mana $WIP$ adalah *work-in-process*, $\lambda$ laju kedatangan order, dan $T_{cycle}$ waktu siklus rata-rata. Pengurangan part count secara langsung menurunkan $T_{cycle}$ melalui eliminasi *queue time* antarkomponen.

### 2.4 Material Utilization Index (MUI)

Untuk komponen hasil *sheet metal forming* seperti badan *basket* dan tutup saring, indeks pemanfaatan material didefinisikan:

$$\eta_{mat} = \frac{A_{used}}{A_{sheet}} \times 100\%$$

di mana $A_{used}$ adalah luas material yang menjadi produk dan $A_{sheet}$ luas *blank sheet* awal. Islam (2024) menunjukkan bahwa optimalisasi MUI pada elemen baja struktural jembatan menghasilkan penghematan material hingga 27%, sebuah pola yang terulang pada aplikasi *basket* medis Amirullah dan Jakaria (2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP tujuh-tahap untuk implementasi DFMA pada redesain *coffee enema basket*. Tahapan ini selaras dengan *systems engineering lifecycle* dan praktik terbaik ISO 13485 untuk alat medis.

**Tahap 1 — Analisis Fungsi dan Kebutuhan Klien.** Tim rekayasa mendekomposisi fungsi produk menjadi matriks fungsi-komponen menggunakan *Function Analysis System Technique* (FAST). Untuk *basket*, fungsi utamanya adalah: (a) menahan ampas kopi, (b) memungkinkan difusi filtrat, (c) tahan suhu hingga 80°C, (d) kompatibel dengan standar sanitasi food-grade.

**Tahap 2 — Pengumpulan Data Desain Existing.** Pengukuran dimensi, toleransi, Bill of Materials (BOM), dan waktu proses aktual dilakukan melalui *time study* dengan metode Maynard Operation Sequence Technique (MOST). Data baseline ini menjadi acuan komparasi.

**Tahap 3 — Aplikasi Aturan DFM.** Setiap komponen dievaluasi terhadap *checklist* DFM: minimalisasi operasi machining, hindari undercut, gunakan standar *gauge* material, dan pastikan aksesibilitas *tooling*.

**Tahap 4 — Aplikasi Aturan DFA (Boothroyd-Dewhurst).** Tiga pertanyaan kritis diajukan untuk setiap komponen: (1) Apakah part bergerak selama operasi? (2) Apakah part harus terpisah untuk fungsi esensial? (3) Apakah part dapat di-*combine* dengan part lain? Jawaban "tidak" untuk ketiganya mengindikasikan kandidat eliminasi.

**Tahap 5 — Generasi Konsep Redesain.** Mengikuti *morphological chart* dan *concept screening matrix* Pugh, alternatif desain dievaluasi terhadap baseline dengan bobot kriteria: manufacturability (30%), assembly ease (30%), biaya (25%), dan estetika (15%).

**Tahap 6 — Prototipe dan Validasi.** Prototipe difabrikasi, di-*bench-test*, dan divalidasi terhadap standar fungsional (kapasitas filtrasi, *burst test* pada 1,5× tekanan kerja, *cytotoxicity test*).

**Tahap 7 — Analisis Biaya Komparatif dan Peluncuran Produksi.** Cost breakdown struktur dibandingkan baseline dan disusun business case untuk *production release*.

Arsitektur proses secara skematik mengikuti alur: **Analisis Kebutuhan → DFM Rules → DFA Rules → Concept Generation → Prototyping → Validation → Production**. Islam (2024) menambahkan bahwa integrasi dengan platform BIM memungkinkan simulasi 4D (waktu) dan 5D (biaya) yang sebelumnya tidak tersedia pada praktik DFMA konvensional, sehingga keputusan desain dapat divalidasi secara virtual sebelum *tooling* dipotong.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data Amirullah dan Jakaria (2024), berikut adalah rekonstruksi kuantitatif perhitungan DFMA untuk *coffee enema basket*.

### 4.1 Data Baseline Desain Konvensional

| Parameter | Nilai Awal (Existing) |
|---|---|
| Jumlah komponen ($N_a$) | 8 part |
| Jumlah operasi pengelasan | 4 titik |
| Jumlah operasi crimping | 6 |
| Waktu perakitan total ($T_a$) | 248 detik |
| Biaya material per unit | Rp 18.500 |
| Biaya fabrikasi per unit | Rp 22.300 |
| Biaya perakitan per unit | Rp 15.800 |
| Biaya tooling per unit | Rp 4.200 |
| Biaya QC per unit | Rp 6.500 |
| **Total biaya per unit** | **Rp 67.300** |

### 4.2 Hasil Redesain DFMA

| Parameter | Nilai Redesain |
|---|---|
| Jumlah komponen ($N_a^{new}$) | 4 part |
| Jumlah operasi pengelasan | 2 titik |
| Jumlah operasi crimping | 2 |
| Waktu perakitan total ($T_a^{new}$) | 103 detik |
| Biaya material per unit | Rp 14.200 |
| Biaya fabrikasi per unit | Rp 13.100 |
| Biaya perakitan per unit | Rp 6.600 |
| Biaya tooling per unit | Rp 2.400 |
| Biaya QC per unit | Rp 4.100 |
| **Total biaya per unit** | **Rp 40.400** |

### 4.3 Perhitungan Indeks DfA

Asumsikan $N_m = 3$ (jumlah minimum teoritis operasi penanganan) dan $t_m = 4$ detik, dengan waktu perakitan aktual direduksi dari $\sum t_{a,i} = 248$ detik menjadi 103 detik:

**Sebelum:**
$$E_{DfA}^{old} = \frac{3 \times 4}{3 \times 4 + 248} \times 100\% = \frac{12}{260} \times 100\% = 4{,}62\%$$

**Sesudah:**
$$E_{DfA}^{new} = \frac{3 \times 4}{3 \times 4 + 103} \times 100\% = \frac{12}{115} \times 100\% = 10{,}43\%$$

Peningkatan efisiensi DfA sebesar $\Delta E_{DfA} = 10{,}43\% - 4{,}62\% = 5{,}81$ poin persentase atau naik **125,8%** secara relatif. Ini menunjukkan bahwa redesain telah menghilangkan operasi perakitan non-esensial secara signifikan.

### 4.4 Perhitungan Pengurangan Biaya

$$\Delta C = \frac{C_{old} - C_{new}}{C_{old}} \times 100\% = \frac{67.300 - 40.400}{67.300} \times 100\% = 39{,}97\%$$

Jika volume produksi bulanan adalah 5.000 unit, maka penghematan tahunan:

$$S = 5.000 \times 12 \times 26.900 = \text{Rp } 1.614.000.000$$

### 4.5 Perhitungan Material Utilization Index

Untuk komponen badan basket berbentuk silinder dengan tinggi $h = 12$ cm dan diameter $d = 6$ cm, luas permukaan material yang digunakan ($A_{used}$):

$$A_{used} = \pi d h + 2 \times \frac{\pi d^2}{4} = \pi (6)(12) + \frac{\pi (6)^2}{2} = 72\pi + 18\pi = 90\pi \approx 282{,}74 \text{ cm}^2$$

Dari *blank sheet* stainless steel 304 ukuran $30 \times 30$ cm (digunakan 2 lembar per unit karena nesting):
$$A_{sheet} = 2 \times 900 = 1.800 \text{ cm}^2$$

$$\eta_{mat} = \frac{282{,}74}{1.800} \times 100\%