# 2591 — Redesain Produk Medis melalui Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Generalisasi pada Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (*home medical device*) merupakan salah satu segmen manufaktur yang mengalami transformasi signifikan dalam dua dekade terakhir, terutama didorong oleh peningkatan kesadaran masyarakat terhadap terapi komplementer dan kebutuhan akan perangkat yang aman, ergonomis, serta ekonomis. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mencatat bahwa produk *coffee enema basket*—sebuah alat bantu prosedur *retention enema* yang berfungsi menampung dan menyaring bubuk kopi saat proses irrigasi kolon—memiliki tingkat keluhan pengguna yang cukup tinggi terkait sulitnya pemasangan (*assembly*), kebocoran pada sambungan (*interface leakage*), serta waktu perakitan yang melebihi ambang batas ergonomis. Studi terdahulu menunjukkan bahwa sekitar 60–70% biaya siklus hidup produk manufaktur ditentukan pada tahap konseptual dan desain, bukan pada tahap produksi massal; oleh karena itu, keputusan desain menjadi titik leverage paling strategis dalam menentukan daya saing produk.

Urgensi ekonomis dari redesain produk ini semakin jelas ketika kita membandingkan biaya produksi basket konvensional yang masih menggunakan metode fabrikasi *las Argon* dengan beberapa komponen las terpisah, versus potensi pengurangan biaya hingga 25–40% yang dapat dicapai melalui pendekatan **Design for Manufacture and Assembly (DFMA)**. DFMA, yang diperkenalkan oleh Boothroyd dan Dewhurst pada tahun 1980-an, adalah kerangka kerja terstruktur yang mengintegrasikan pertimbangan manufaktur (*DFM*) dan perakitan (*DFA*) secara simultan sejak fase desain konseptual. Amirullah dan Jakaria (2024) secara eksplisit menunjukkan bahwa penerapan DFMA pada coffee enema basket mampu menurunkan jumlah komponen, menyederhanakan proses fabrikasi, dan meningkatkan *design efficiency* secara signifikan.

Dalam skala makro, konteks industri yang lebih luas juga dibahas oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) yang menyoroti permasalahan klasik dalam pemilihan desain jembatan prefabrikasi: keputusan sering kali hanya didasarkan pada biaya dan kecakupan struktural, tanpa mempertimbangkan aspek manufaktur, transportasi, pengangkatan (*lifting*), dan ereksi pada tahap awal. Masalah ini paralel dengan isu pada produk medis sederhana: ketika desain dibekukan (*frozen*) dan cetakan (*moulds*) sudah dipotong, koreksi hanya mungkin dilakukan dengan biaya yang sangat tinggi. Dengan demikian, studi Amirullah dan Jakaria (2024) tentang coffee enema basket tidak hanya relevan sebagai studi kasus produk individual, tetapi juga sebagai *template* metodologis yang dapat digeneralisasikan ke industri peralatan medis, alat rumah tangga, dan bahkan komponen prefabrikasi konstruksi.

Lebih jauh, kebutuhan akan redesain juga didorong oleh tren regulasi. Standar ISO 13485 untuk *Quality Management Systems* perangkat medis mensyaratkan *design control* yang ketat, dokumentasi *Design History File*, dan bukti validasi proses. Pendekatan DFMA memberikan *traceability* yang baik karena setiap keputusan reduksi part harus didokumentasikan dengan justifikasi fungsionalnya. Hal ini menjadikan DFMA bukan hanya alat efisiensi, tetapi juga instrumen kepatuhan regulasi (*regulatory compliance tool*). Dengan latar belakang ini, modul 2591 akan membahas secara mendalam formulasi matematis, prosedur operasional, studi kasus kuantitatif, serta evaluasi kritis terhadap penerapan DFMA.

---

## 2. Landasan Teori & Formulasi Matematis

DFMA menggabungkan dua sub-kerangka kerja utama, yaitu **Design for Manufacture (DFM)** yang bertujuan menyederhanakan proses fabrikasi, dan **Design for Assembly (DFA)** yang bertujuan menyederhanakan proses perakitan. Boothroyd, Dewhurst, dan Knight (2010) menetapkan tiga metrik utama DFA yang menjadi dasar studi Amirullah dan Jakaria (2024).

### 2.1. Efisiensi Jumlah Part (*Minimum Part Count Efficiency*)

Metrik pertama adalah rasio antara jumlah part minimum teoritis $N_m$ terhadap jumlah part aktual pada desain $N_a$:

$$E_{ma} = \frac{N_m}{N_a} \tag{1}$$

di mana $N_m$ adalah jumlah part minimum yang diperlukan untuk memenuhi seluruh fungsi produk tanpa memperhatikan constraint manufaktur, sedangkan $N_a$ adalah jumlah part aktual hasil desain. Nilai $E_{ma} = 1$ menunjukkan bahwa desain telah mencapai jumlah part minimum absolut. Kenaikan $N_a$ di atas $N_m$ secara langsung menurunkan efisiensi.

### 2.2. Efisiensi Perakitan (*Assembly Efficiency*)

Metrik kedua adalah rasio antara waktu perakitan minimum teoritis $t_m$ terhadap waktu perakitan aktual $t_a$:

$$E_a = \frac{t_m}{t_a} \tag{2}$$

Waktu perakitan minimum teoritis dihitung sebagai:

$$t_m = N_m \cdot t_0 \tag{3}$$

di mana $t_0$ adalah waktu operasi dasar (*basic assembly operation time*), umumnya diambil 3 detik per operasi sesuai standar Boothroyd-Dewhurst. Waktu aktual $t_a$ dihitung menggunakan *assembly code* untuk setiap part berdasarkan operasi *handling*, *insertion*, *fastening*, dan lain-lain.

### 2.3. Efisiensi Desain Total (*Design Efficiency*)

Efisiensi desain total didefinisikan sebagai:

$$E = E_{ma} \times E_a = \frac{N_m \cdot t_m}{N_a \cdot t_a} \tag{4}$$

Nilai $E$ mendekati 1 menunjukkan desain mendekati optimal. Pada banyak produk manufaktur konvensional, $E$ berada pada rentang 0,20–0,40; desain yang telah dioptimasi melalui DFMA diharapkan mencapai $E > 0{,}70$.

### 2.4. Analisis Biaya Manufaktur (DFM)

Untuk komponen fabrikasi, biaya produksi per unit $C_p$ dapat dimodelkan sebagai:

$$C_p = C_m + C_h + C_{tool} \tag{5}$$

di mana $C_m$ adalah biaya material, $C_h$ adalah biaya *handling* dan operasi, dan $C_{tool}$ adalah alokasi biaya *tooling*. Islam (2024) dalam konteks elemen prefabrikasi jembatan menyatakan bahwa keputusan desain yang diambil pada tahap konseptual memengaruhi $C_{tool}$ secara paling signifikan, sehingga formulasi DFMA untuk desain jembatan prefabrikasi menekankan pada:

$$C_{total} = C_{mat} + C_{fab} + C_{trans} + C_{lift} + C_{erect} \tag{6}$$

yang memasukkan biaya fabrikasi, transportasi, pengangkatan, dan ereksi secara eksplisit.

### 2.5. Fungsi Kegunaan (*Function Analysis*)

DFMA juga menggunakan *function analysis* untuk mengeliminasi part yang tidak memberikan nilai fungsi esensial. Fungsi diklasifikasikan menggunakan *FAST (Function Analysis System Technique)* dengan notasi:

$$F_{essential}: F \rightarrow \{F_{essential}, F_{secondary}\} \tag{7}$$

Part yang hanya memenuhi fungsi sekunder tanpa *movement*, *energy*, *material*, atau *signal* interface umumnya menjadi kandidat eliminasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP redesain DFMA coffee enema basket dalam tujuh tahap sistematis. Berikut adalah elaborasi prosedur yang dapat dijadikan *standard operating procedure* di lingkungan manufaktur alat kesehatan:

**Tahap 1 — Identifikasi Kebutuhan Pelanggan (*Voice of Customer, VOC*).** Data dikumpulkan melalui *survey*, wawancara pengguna, dan analisis keluhan purna jual. Kebutuhan kunci yang teridentifikasi pada coffee enema basket antara lain: kemampuan filtrasi partikel kopi secara efektif, kemudahan pencucian, keamanan terhadap kontaminasi silang, serta kompatibilitas dengan selang standar enema.

**Tahap 2 — Analisis Fungsi Produk.** Setiap komponen dievaluasi menggunakan diagram *FAST* untuk memetakan fungsi primer (menampung kopi, menyaring cairan, menyambungkan selang) dan fungsi sekunder. Hasil pada studi Amirullah dan Jakaria (2024) menunjukkan bahwa beberapa part seperti *ring pengunci tambahan* dan *bracket penahan* hanya memenuhi kriteria sekunder.

**Tahap 3 — Penerapan Aturan Eliminasi Boothroyd-Dewhurst.** Tiga pertanyaan kunci diterapkan pada setiap part selama proses manual:

1. Apakah part bergerak relatif terhadap part lain selama operasi? 
2. Apakah part memerlukan material/proses yang berbeda? 
3. Apakah part harus dipisahkan untuk memungkinkan *assembly/disassembly*?

Part yang menjawab "tidak" pada seluruh pertanyaan menjadi kandidat kuat untuk dieliminasi atau diintegrasikan.

**Tahap 4 — Pembuatan Konsep Desain Alternatif.** Konsep disusun dengan pendekatan *morphological matrix* dan disaring menggunakan kriteria $E_{ma}$, $E_a$, manufacturability, dan keamanan klinis.

**Tahap 5 — Pembuatan Prototipe dan Pengujian.** Prototipe diuji untuk *leak test*, kapasitas filtrasi, dan kemudahan pencucian dengan metode *usability testing* pada minimal 10 partisipan sesuai standar *human factors engineering* IEC 62366-1.

**Tahap 6 — Analisis Biaya dan Penentuan Desain Akhir.** Biaya produksi dihitung menggunakan Persamaan (5), lalu dibandingkan dengan baseline desain lama. Desain dengan $E$ tertinggi dan $C_p$ terendah dipilih.

**Tahap 7 — Dokumentasi dan *Design Transfer*.** Desain akhir didokumentasikan dalam *Design History File* sesuai ISO 13485, termasuk *risk management file* sesuai ISO 14971.

### 3.1. Diagram Alir Proses DFMA

```
┌─────────────────┐
│  VOC & Analisis │
│  Pasar          │
└────────┬────────┘
         ▼
┌─────────────────┐
│  Function       │
│  Analysis (FAST)│
└────────┬────────┘
         ▼
┌─────────────────┐     ┌──────────────────┐
│  Hitung E_ma &  │────▶│ Eliminasi Part   │
│  E_a Baseline   │     │ (Boothroyd Rules)│
└────────┬────────┘     └─────────┬────────┘
         ▼                        ▼
┌─────────────────┐     ┌──────────────────┐
│  Generate       │────▶│ Hitung E_ma & E_a│
│  Alternatif     │     │ Alternatif       │
└────────┬────────┘     └─────────┬────────┘
         ▼                        ▼
┌─────────────────┐     ┌──────────────────┐
│  Prototype &    │────▶│ Hitung C_p total │
│  Uji Fungsi     │     │ dan E total      │
└────────┬────────┘     └─────────┬────────┘
         ▼                        ▼
         └──────────┬─────────────┘
                    ▼
         ┌──────────────────┐
         │  Pilih Desain    │
         │  Optimal &       │
         │  Design Transfer │
         └──────────────────┘
```

### 3.2. Arsitektur Integrasi DFMA-BIM (Berdasarkan Islam, 2024)

Untuk aplikasi pada elemen prefabrikasi yang lebih besar seperti jembatan, Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) mengusulkan arsitektur integrasi DFMA dengan Building Information Modelling (BIM). Arsitektur ini terdiri atas empat lapisan: (1) **Data Layer** yang menyimpan model 3D elemen beserta *parameter manufacture* dan *assembly*; (2) **Logic Layer** yang mengeksekusi aturan DFMA secara otomatis menggunakan *parametric design language* (misalnya Dynamo atau Grasshopper); (3) **Evaluation Layer** yang menghitung skor multi-kriteria $(\text{Biaya}, \text{Waktu Ereksi}, \text{Kualitas Sambungan}, \text{Keamanan Struktural})$; dan (4) **Decision Layer** yang menampilkan rekomendasi desain kepada insinyur melalui *dashboard* berbasis *weighted scoring model*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan metodologi Amirullah dan Jakaria (2024) dan kerangka kerja Boothroyd-Dewhurst, berikut adalah studi kasus kuantitatif yang merepresentasikan redesain coffee enema basket dari kondisi awal menuju kondisi optimal pasca-DFMA.

### 4.1. Data Input Desain Awal (*Baseline*)

Misalkan sebuah coffee enema basket konvensional terdiri dari:
- Tabung saring utama (*main filter tube*) – stainless steel 304
- Tutup atas (*top cap*) – stainless steel 304
- Kisi saringan (*perforated screen*) – stainless steel 304
- Ring pengunci (*locking ring*) – stainless steel 304
- Bracket sambungan selang (*hose bracket*) – stainless steel 304
- Adaptor ulir (*threaded adapter*) – kuningan (*brass*)

Total jumlah part: $N_a^{(0)} = 6$ part dengan rincian operasi perakitan sesuai Tabel 1.

**Tabel 1.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
