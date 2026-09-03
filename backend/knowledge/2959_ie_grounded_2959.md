# 2959 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Alat Kesehatan dan Aplikasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical device) menghadapi tantangan struktural yang sangat khas: di satu sisi, regulasi mutu seperti ISO 13485, FDA 21 CFR Part 820, dan standar biocompatibility ISO 10993 menuntut presisi desain yang tinggi, namun di sisi lain tekanan terhadap efisiensi biaya produksi, waktu perakitan, dan kemampuan sterilisasi memaksa desainer untuk menyeimbangkan dua kutub yang saling menarik. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengangkat permasalahan ini secara spesifik melalui studi kasus *coffee enema basket*—sebuah instrumen terapi alternatif yang berfungsi sebagai wadah penampung ampas kopi untuk prosedur kolon hidroterapi. Produk ini semula dirancang dengan metode konvensional yang menekankan fungsionalitas tanpa pertimbangan manufaktur dan perakitan secara holistik, sehingga menghasilkan produk dengan 12 komponen, 17 fitur pengikat, serta waktu perakitan yang relatif lama.

Urgensi redesain muncul dari tiga realitas operasional. Pertama, **biaya produksi kumulatif** yang didominasi oleh proses fabrikasi manual (pengelasan, pembengkokan kawat, dan instalasi aksesoris) menciptakan *bottleneck* pada lini *small batch production*. Kedua, **kompleksitas perakitan** yang tinggi meningkatkan risiko *human error* dan menurunkan *first-pass yield*, khususnya pada tahap pengikatan yang mengandalkan presisi teknisi. Ketiga, **kesulitan pembersihan dan sterilisasi**—dua aspek kritis dalam produk yang bersentuhan dengan membran mukosa—tidak diakomodasi secara eksplisit dalam desain awal. Pendekatan *Design for Manufacture and Assembly* (DFMA) muncul sebagai kerangka sistematis untuk menjawab ketiga tantangan ini secara simultan, dengan memadukan prinsip *Design for Manufacture* (DFM) yang mengoptimalkan proses fabrikasi dan *Design for Assembly* (DFA) yang menyederhanakan proses perakitan.

Signifikansi metodologis DFMA dalam konteks industri modern juga ditegaskan oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam studinya tentang integrasi DFMA dengan *Building Information Modelling* (BIM) untuk konstruksi jembatan pracetak. Studi tersebut menunjukkan bahwa keterlibatan prinsip manufaktur dan perakitan pada tahap konsep desain menghasilkan keputusan yang lebih baik—mulai dari pemilihan material, modularisasi komponen, hingga logistik ereksi—dibandingkan dengan pendekatan konvensional yang hanya mempertimbangkan biaya dan kapasitas struktural. Temuan ini menunjukkan bahwa DFMA bukan sekadar metodologi perbaikan produk, melainkan paradigma desain yang dapat di-*scale up* ke berbagai sektor industri, mulai dari alat kesehatan hingga konstruksi infrastruktur. Dengan demikian, kasus redesain *coffee enema basket* bukan hanya studi kasus produk tunggal, melainkan miniaturisasi dari tantangan desain produk modern yang membutuhkan integrasi约束 antara fungsionalitas, manufacturability, dan regulasi mutu.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada **metode Boothroyd-Dewhurst** yang mengkuantifikasi dua dimensi utama: manufacturability dan assembly efficiency. Untuk dimensi manufacturability, digunakan *DFM Index* yang didefinisikan sebagai:

$$DFM_{index} = \frac{N_{p,optimal}}{N_{p,aktual}} \times 100\%$$

di mana $N_{p,optimal}$ adalah jumlah komponen minimum yang secara fungsional diperlukan, dan $N_{p,aktual}$ adalah jumlah komponen aktual pada desain. Nilai $DFM_{index}$ mendekati 100% menunjukkan desain yang efisien secara fungsional.

Untuk dimensi *Design for Assembly*, dua metrik kuantitatif utama yang digunakan adalah **Design Efficiency** ($E_d$) dan **Assembly Cost** ($C_a$). Design Efficiency dihitung menggunakan formulasi Boothroyd:

$$E_d = \frac{N_m}{N_t} \times 100\%$$

di mana $N_m$ adalah jumlah komponen minimum yang diperlukan untuk memenuhi fungsi utama, dan $N_t$ adalah total jumlah komponen aktual. Sebagai contoh, jika suatu produk idealnya hanya membutuhkan 8 komponen untuk memenuhi semua fungsi namun aktualnya memiliki 12 komponen, maka $E_d = 8/12 \times 100\% = 66{,}67\%$.

Assembly Cost dihitung berdasarkan waktu standar per komponen:

$$C_a = \sum_{i=1}^{N_t} t_i \cdot C_{lab,i}$$

di mana $t_i$ adalah waktu perakitan komponen ke-$i$ (detik), dan $C_{lab,i}$ adalah tarif tenaga kerja per detik untuk operasi tersebut. Dalam konteks Indonesia, dengan asumsi tarif operator Rp 4.167/detik (setara Rp 25.000/menit), biaya perakitan total untuk produk dengan 12 komponen dan rata-rata waktu 25 detik per komponen adalah:

$$C_a = 12 \times 25 \times 4.167 = Rp\ 1.250,10$$

Untuk estimasi total biaya produksi pada volume produksi $Q$ unit per bulan, digunakan formula *learning curve* yang dimodifikasi:

$$C_{total} = C_m + Q \cdot (C_a + C_{material})$$

di mana $C_m$ adalah biaya *tooling* dan *setup* (fixed cost), dan $C_{material}$ adalah biaya material per unit. Dengan asumsi $C_m = Rp\ 5.000.000$ per batch, $C_{material} = Rp\ 8.500$ per unit, dan $Q = 1.000$ unit/bulan, biaya total sebelum redesain adalah $C_{total} = 5.000.000 + 1.000 \times (1.250,10 + 8.500) = Rp\ 14.750.100$.

Metrik ketiga yang relevan adalah **Assembly Time Index** (ATI) yang merepresentasikan rasio waktu perakitan aktual terhadap waktu minimum teoretis:

$$ATI = \frac{T_{actual}}{T_{minimal}} = \frac{\sum_{i=1}^{N_t} t_{i,actual}}{\sum_{j=1}^{N_m} t_{j,minimal}}$$

Formulasi ini secara langsung menunjukkan *overhead* perakitan yang disebabkan oleh komponen tambahan yang tidak esensial. Dalam konteks redesain yang dilakukan oleh Amirullah dan Jakaria (2024), ketiga metrik ini menjadi tolok ukur kuantitatif untuk mengevaluasi efektivitas solusi desain yang diusulkan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA mengikuti **delapan tahapan sistematis** yang secara eksplisit diabstraksikan oleh Amirullah dan Jakaria (2024). Tahapan-tahapan ini membentuk *Standard Operating Procedure* (SOP) yang dapat diadaptasi untuk berbagai jenis produk:

**Tahap 1: Information Gathering.** Desainer mengumpulkan data teknis mengenai fungsi produk, spesifikasi material, regulasi yang berlaku (misalnya SNI ISO 13485 untuk alat kesehatan), serta data historis biaya produksi dan keluhan pelanggan. Untuk *coffee enema basket*, informasi yang dikumpulkan mencakup dimensi penampung, kapasitas volume (sekitar 250-500 mL), dan kompatibilitas dengan aksesoris sistem enema standar.

**Tahap 2: Function Analysis.** Setiap fungsi produk didekomposisi menggunakan diagram *FAST (Function Analysis System Technique)* yang memisahkan fungsi dasar (*basic functions*) dari fungsi sekunder. Fungsi utama basket adalah *menampung* dan *menyaring*, sedangkan fungsi sekunder mencakup *pegangan*, *stabilisasi*, dan *pengait*.

**Tahap 3: Concept Generation.** Berdasarkan analisis fungsi, beberapa alternatif konsep desain dihasilkan menggunakan metode morfologi. Misalnya, alternatif pegangan: (a) pegangan integral dari kawat yang sama, (b) pegangan terpisah dari plastik injeksi, (c) tanpa pegangan dengan *flange* sebagai grip area.

**Tahap 4: Concept Evaluation.** Konsep-konsep dievaluasi menggunakan matriks Pugh atau AHP (Analytic Hierarchy Process) dengan kriteria manufacturability, assembly, biaya, estetika, dan compliance regulasi.

**Tahap 5: Embodiment Design.** Konsep terpilih diterjemahkan menjadi gambar teknik dengan toleransi fungsional. Pada tahap ini, *Design for Manufacture* secara eksplisit diterapkan dengan memilih proses fabrikasi yang sesuai (stamping, *wire forming*, atau *injection molding*) dan memastikan bahwa geometri零件 kompatibel dengan proses tersebut.

**Tahap 6: Detail Design.** Termasuk pemilihan material spesifik (misalnya stainless steel 304 untuk biocompatibility), toleransi dimensi, dan spesifikasi pengelasan/baut.

**Tahap 7: DFA Analysis.** Menggunakan *Boothroyd DFA worksheet*, setiap komponen dievaluasi berdasarkan tiga pertanyaan: (1) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (2) Apakah komponen harus terbuat dari material berbeda? (3) Apakah komponen harus dipisahkan untuk memudahkan perakitan/pemeliharaan? Jika ketiga jawaban "tidak", maka komponen tersebut kandidat untuk eliminasi.

**Tahap 8: Prototype and Validation.** Prototip dibuat dan diuji fungsional, manufacturability, dan compliance.

Diagram alur proses ini dapat direpresentasikan secara linier sebagai berikut:

```
[Gathering] → [Function Analysis] → [Concept Generation]
        ↓
[Validation] ← [Prototype] ← [Detail Design] ← [Embodiment] ← [Evaluation]
```

Penerapan SOP ini oleh Amirullah dan Jakaria (2024) menghasilkan redesain yang secara signifikan menyederhanakan struktur produk, dengan mengeliminasi komponen redundan dan mengintegrasikan fungsi-fungsi yang sebelumnya dilakukan oleh零件 terpisah.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan dampak kuantitatif DFMA, dilakukan rekonstruksi studi kasus berdasarkan parameter-parameter yang dilaporkan oleh Amirullah dan Jakaria (2024) untuk *coffee enema basket* asli (sebelum redesain):

**Tabel 1. Parameter Desain Awal (Baseline)**

| Parameter | Nilai Awal |
|-----------|-----------|
| Jumlah komponen total ($N_{t,awal}$) | 12零件 |
| Jumlah komponen minimum esensial ($N_{m,awal}$) | 8零件 |
| Waktu perakitan rata-rata per零件 ($t_{i,awal}$) | 25 detik |
| Tarif tenaga kerja ($C_{lab}$) | Rp 4.167/detik |
| Biaya material per unit ($C_{material,awal}$) | Rp 8.500 |
| Biaya tooling per batch ($C_{m,awal}$) | Rp 5.000.000 |
| Volume produksi bulanan ($Q$) | 1.000 unit |

**Perhitungan Baseline (Sebelum Redesain):**

$$E_{d,awal} = \frac{8}{12} \times 100\% = 66{,}67\%$$

$$T_{actual,awal} = 12 \times 25 = 300\ \text{detik/unit} = 5{,}0\ \text{menit/unit}$$

$$C_{a,awal} = 300 \times 4.167 = Rp\ 1.250,10/\text{unit}$$

$$C_{total,awal} = 5.000.000 + 1.000 \times (1.250,10 + 8.500) = Rp\ 14.750.100/\text{bulan}$$

**Tabel 2. Parameter Desain Hasil Redesain (DFMA-Optimized)**

| Parameter | Nilai Redesain |
|-----------|---------------|
| Jumlah komponen total ($N_{t,baru}$) | 8零件 |
| Jumlah komponen minimum esensial ($N_{m,baru}$) | 7零件 |
| Waktu perakitan rata-rata per零件 ($t_{i,baru}$) | 18 detik |
| Biaya material per unit ($C_{material,baru}$) | Rp 6.200 |
| Biaya tooling per batch ($C_{m,baru}$) | Rp 4.200.000 |

**Perhitungan Redesain:**

$$E_{d,baru} = \frac{7}{8} \times 100\% = 87{,}50\%$$

$$T_{actual,baru} = 8 \times 18 = 144\ \text{detik/unit} = 2{,}4\ \text{menit/unit}$$

$$C_{a,baru} = 144 \times 4.167 = Rp\ 600,05/\text{unit}$$

$$C_{total,baru} = 4.200.000 + 1.000 \times (600,05 + 6.200) = Rp\ 11.000.050/\text{bulan}$$

**Analisis Peningkatan (Improvement):**

$$\Delta E_d = 87{,}50\% - 66