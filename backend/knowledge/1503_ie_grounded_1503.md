# 1503 — Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA): Optimalisasi Manufaktur, Perakitan, dan Kualitas Produk Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (*medical device industry*) merupakan salah satu sektor manufaktur dengan tingkat regulasi paling ketat di dunia, di mana setiap komponen fungsional wajib memenuhi standar keamanan, sterilitas, biokompatibilitas, dan kinerja mekanis yang ditetapkan oleh otoritas kesehatan nasional dan internasional (misalnya BPOM, FDA, ISO 13485, serta ISO 14971 untuk manajemen risiko). Di Indonesia, pengembangan produk alat kesehatan lokal masih menghadapi tantangan struktural berupa ketergantungan pada desain warisan (*legacy design*) yang tidak dirancang dengan mempertimbangkan keterapan manufaktur modern, sehingga biaya produksi menjadi tinggi, waktu perakitan panjang, dan potensi *defect rate* sulit ditekan. Amirullah & Jakaria (2024) dalam artikel ilmiah yang dipublikasikan dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengangkat isu ini secara spesifik melalui studi redesain *coffee enema basket*—salah satu komponen fungsional pada perangkat terapi kolon yang berfungsi menampung ampas kopi sebagai media filtrasi aktif dalam prosedur *retention enema*.

Permasalahan industri yang melatarbelakangi penelitian ini bersifat multidimensional. Pertama, desain eksisting *coffee enema basket* memiliki jumlah komponen (*part count*) berlebih, melibatkan proses fabrikasi multi-proses (las, pembengkokan, pengelasan titik), serta memerlukan operasi perakitan manual yang menghasilkan waktu siklus panjang. Kedua, penggunaan material yang tidak optimal meningkatkan *material waste ratio* dan menambah *unit cost*. Ketiga, desain yang tidak modular menyulitkan proses *disassembly* untuk *sterilization* ulang, yang menjadi kritikal dalam konteks *reusable medical device*. Amirullah & Jakaria (2024) menegaskan bahwa pendekatan *Design for Manufacture and Assembly* (DFMA) menawarkan kerangka sistematis untuk menjawab ketiga tantangan tersebut secara simultan melalui dua pilar analisis: *Design for Manufacture* (DFM) untuk meminimalkan kompleksitas fabrikasi, dan *Design for Assembly* (DFA) untuk menyederhanakan proses perakitan.

Urgensi ekonomis penelitian ini semakin nyata ketika ditempatkan dalam konteks rantai pasok alat kesehatan Indonesia. Berdasarkan data pendukung yang dikemukakan Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21), keputusan desain yang hanya didasarkan pada kriteria biaya dan kecukupan struktural—tanpa memasukkan pertimbangan manufaktur, transportasi, lifting, dan ereksi pada tahap konsep—mengakibatkan masalah *buildability* baru teridentifikasi saat shop-drawing sudah final atau bahkan di lini produksi, ketika koreksi menjadi mahal dan terlambat. Paradigma ini persis sama dengan kondisi industri alat kesehatan di Indonesia: masalah manufacturability baru muncul setelah desain dibekukan (*design freeze*). Dengan mengintegrasikan DFMA pada tahap konseptual, redesain *coffee enema basket* yang dilakukan Amirullah & Jakaria (2024) berpotensi menurunkan total biaya siklus hidup produk sekaligus meningkatkan kepatuhan terhadap standar mutu. Inilah yang menjadi justifikasi akademis dan praktis mengapa modul 1503 ini memfokuskan diri pada aplikasi DFMA sebagai instrumen strategis transformasi desain produk medis fungsional.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah & Jakaria (2024) dibangun di atas tiga pilar teoritis: (a) *Design for Manufacture* untuk optimasi proses fabrikasi, (b) *Design for Assembly* untuk minimasi operasi perakitan, dan (c) *Design for Cost* untuk analisis ekonomi siklus hidup produk. Ketiga pilar ini saling tergantung dan harus dioptimasi secara simultan, bukan secara parsial.

### 2.1 Indeks Efisiensi Assembly (DFA)

Metrik klasik yang digunakan dalam analisis DFA mengikuti formulasi Boothroyd–Dewhurst, yang menghitung rasio jumlah minimum komponen teoretis terhadap jumlah komponen aktual:

$$\eta_{DFA} = \frac{N_{min}}{N_m} \times 100\%$$

di mana $N_m$ adalah jumlah komponen aktual pada desain awal, dan $N_{min}$ adalah jumlah komponen minimum teoretis yang dibutuhkan untuk memenuhi fungsi produk sesuai prinsip *minimum part count*. Jika $\eta_{DFA} \geq 70\%$, desain dianggap layak secara asembly.

### 2.2 Waktu Assembly dan Efisiensi Waktu

Waktu perakitan total dihitung dengan formulasi:

$$T_a = \sum_{i=1}^{N_m} t_i$$

dengan $t_i$ adalah waktu perakitan komponen ke-$i$ (detik atau menit). Efisiensi waktu assembly dinyatakan sebagai:

$$\eta_T = \frac{N_m \cdot t_{min}}{\sum_{i=1}^{N_m} t_i} \times 100\%$$

di mana $t_{min}$ adalah waktu assembly teoritis minimum per komponen.

### 2.3 Estimasi Biaya Manufaktur

Total biaya manufaktur dihitung dengan model *activity-based costing* yang disederhanakan:

$$C_m = C_{mat} + C_{proc} + C_{tool} + C_{OH} + C_qc$$

di mana:
- $C_{mat} = \rho \cdot V \cdot p_{mat}$ adalah biaya material (massa jenis × volume × harga satuan),
- $C_{proc} = \sum_{j} (t_{op,j} \cdot C_{lab,j})$ adalah biaya proses fabrikasi,
- $C_{tool}$ adalah biaya *tooling* dan cetakan,
- $C_{OH}$ adalah biaya *overhead* pabrik,
- $C_{qc}$ adalah biaya inspeksi dan quality control.

### 2.4 Biaya Assembly

$$C_a = N_m \cdot \bar{t}_a \cdot C_{lab} + \sum_{k=1}^{K} C_{fast,k}$$

dengan $\bar{t}_a$ adalah waktu rata-rata assembly per komponen, $C_{lab}$ adalah tarif tenaga kerja langsung, dan $C_{fast,k}$ adalah biaya pengencang ke-$k$.

### 2.5 Indeks Komposit DFMA

Untuk mengintegrasikan seluruh dimensi, Amirullah & Jakaria (2024) menggunakan indeks komposit berbobot:

$$I_{DFMA} = w_1 \cdot \eta_{DFA} + w_2 \cdot \eta_{DFM} + w_3 \cdot \eta_C$$

dengan $w_1 + w_2 + w_3 = 1$. Bobot ini ditentukan melalui *Analytical Hierarchy Process* (AHP) dengan pairwise comparison antar kriteria.

### 2.6 Seleksi Material (Bahan Stainless Steel 304)

Karena aplikasi medis, pemilihan material mengikuti formulasi *material index* Ashby:

$$M_{idx} = \frac{\sigma_y^{2/3}}{E \cdot \rho}$$

di mana $\sigma_y$ adalah *yield strength*, $E$ adalah modulus elastisitas, dan $\rho$ adalah densitas. Material optimal adalah yang memiliki $M_{idx}$ maksimum, yang konsisten dengan penggunaan stainless steel 304 (AISI 304) sebagai standar *medical grade* karena sifat *corrosion resistance*, biokompatibilitas, dan kemampuan fabrikasi yang baik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA pada redesain *coffee enema basket* mengikuti Standar Prosedur Operasional delapan tahap yang diadopsi Amirullah & Jakaria (2024) dari *Boehlen & Alting* serta diadaptasi untuk konteks produk medis:

**Tahap 1 — Analisis Fungsi Produk (*Functional Analysis*):**
Identifikasi fungsi primer (*primary function*) sebagai media filtrasi ampas kopi dengan kemampuan menahan tekanan hidrostatik prosedur enema (tekanan operasi normal 0,2–0,5 bar), serta fungsi sekunder berupa kemampuan *disassembly* untuk sterilisasi autoklaf (121°C, 15 psi, 15 menit).

**Tahap 2 — Konseptualisasi Desain Awal (*Concept Generation*):**
Pembuatan 3–5 konsep desain alternatif menggunakan *morphological matrix* dengan mempertimbangkan: tipe geometri (keranjang silinder, spherical mesh, lipat/datar), metode fabrikasi (las titik, laser cut, *deep drawing*, *wire mesh forming*), dan mekanisme penguncian (snap-fit, ulir, magnet).

**Tahap 3 — Analisis DFA:**
Penerapan formulasi $\eta_{DFA}$ pada masing-masing konsep, eliminasi konsep dengan *part count* berlebih, dan identifikasi komponen yang dapat di-*integrate* (misalnya mengganti dua komponen yang di-las menjadi satu komponen *laser-cut*).

**Tahap 4 — Analisis DFM:**
Evaluasi setiap konsep terhadap kemampuan proses fabrikasi: *laser cutting* untuk stainless sheet thickness ≤ 1,5 mm (sesuai ISO 9013), *tube bending* untuk radius minimum 2× diameter, dan *spot welding* mengikuti AWS C1.1.

**Tahap 5 — Pembuatan Prototipe dan Pengujian:**
Fabrikasi prototipe menggunakan mesin *laser cutting fiber* (daya 1 kW) dan *TIG welding* untuk sambungan food-grade medical.

**Tahap 6 — Uji Fungsi dan Biokompatibilitas:**
Pengujian mekanis (*tensile test*, *pressure test*), uji kebocoran (*leakage test* pada 0,8 bar), serta uji *cytotoxicity* sesuai ISO 10993-5.

**Tahap 7 — Analisis Biaya dan Penentuan Desain Akhir:**
Perhitungan $C_m$, $C_a$, dan *life cycle cost* untuk seluruh konsep; konsep dengan $I_{DFMA}$ maksimum dipilih sebagai desain final.

**Tahap 8 — Dokumentasi dan *Design Freeze*:**
Pembuatan *technical drawing*, *Bill of Material* (BOM), dan *work instruction* untuk lantai produksi.

Arsitektur informasi yang digunakan mengikuti kerangka yang juga dikemukakan Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21), di mana Building Information Modelling (BIM) atau *Product Lifecycle Management* (PLM) digital diperlukan untuk menjaga integritas data desain, fabrikasi, dan operasional sepanjang siklus hidup produk.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data studi kasus pada Amirullah & Jakaria (2024) dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309), dilakukan rekonstruksi kuantitatif untuk modul 1503 ini sebagai berikut.

**Input Parameter Desain Eksisting (Baseline):**
- $N_m^{before} = 7$ komponen (badan keranjang, dasar, pegangan, kawat pegangan, ring pengunci, sekrup × 2, ring penjepit)
- Material: stainless steel 304 sheet thickness 0,8 mm + kawat stainless Ø 1,2 mm
- Proses fabrikasi: *spot welding* 6 titik, *bending* 4 operasi, *grinding