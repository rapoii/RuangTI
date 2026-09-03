# 2415 — Redesain Produk Kesehatan dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesign Coffee Enema Basket dan Implikasi Lintas-Sektor pada Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur alat kesehatan rumah tangga dan wellness devices tengah mengalami pergeseran paradigma dari *product-oriented engineering* menuju *manufacturing-driven design*. Dalam konteks ini, produk-produk terapi alternatif seperti *coffee enema basket*—sebuah alat yang berfungsi sebagai reservoir dan filter untuk prosedur hidroterapi kolon—sering kali dirancang tanpa pertimbangan cermat terhadap kemampuan manufaktur dan efisiensi perakitan. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Universal Proceedings* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengidentifikasi bahwa banyak produk kesehatan skala kecil di Indonesia masih mengandalkan desain yang dikembangkan secara intuitif, sehingga menghasilkan geometri dengan tingkat kompleksitas perakitan yang tidak proporsional terhadap nilai fungsionalnya. Produk dengan jumlah komponen berlebih akan membebani rantai pasok melalui peningkatan *bill of materials* (BOM), bertambahnya operasi tooling, dan bertambahnya waktu siklus perakitan yang pada akhirnya menaikkan harga jual serta menurunkan daya saing di pasar ekspor.

Urgensi ekonomis dari penerapan DFMA semakin nyata ketika industri kecil-menengah (IKM) menghadapi tekanan persaingan dengan produk impor yang sudah mengadopsi prinsip *lean design*. Amirullah dan Jakaria (2024) menyatakan bahwa redesain berbasis DFMA bukan sekadar reduksi komponen, melainkan suatu rekayasa ulang yang bertujuan menyeimbangkan antara *design for manufacturing* (DFM) dan *design for assembly* (DFA), sehingga biaya total produk (*total product cost*) dapat ditekan tanpa mengorbankan fungsi higienitas, keamanan pangan, dan estetika. Pendekatan ini paralel dengan temuan Islam (2024) dalam studi aplikasi DFMA pada konstruksi jembatan prefabrikasi (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf41)), yang menekankan bahwa keputusan desain yang diambil pada fase konseptual akan menentukan 70–80% biaya siklus hidup produk. Pada produk *coffee enema basket* misalnya, keputusan untuk mengintegrasikan beberapa komponen plastik menjadi satu *injection-molded part* bukan hanya menghemat biaya cetakan, tetapi juga menghilangkan operasi perakitan manual yang rentan terhadap kesalahan operator.

Lebih jauh, penerapan DFMA pada konteks alat kesehatan juga harus memenuhi regulasi **ISO 13485** tentang sistem manajemen mutu perangkat medis, yang menuntut setiap modifikasi desain didokumentasikan melalui *Design History File* (DHF). Oleh karena itu, redesain produk wellness seperti *coffee enema basket* memerlukan kerangka kerja yang menggabungkan prinsip DFMA dengan dokumentasi quality assurance, sehingga peningkatan efisiensi tidak mengabaikan aspek *biocompatibility*, *food-grade material compliance* (misalnya kepatuhan terhadap **FDA 21 CFR** untuk plastik kontak makanan), dan *sterilization compatibility*. Konteks industri ini menunjukkan bahwa DFMA bukan semata metodologi reduksi biaya, melainkan pendekatan sistemik yang menjembatani desain produk dengan realitas lantai produksi.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada kerangka Boothroyd-Dewhurst yang telah dimodifikasi untuk produk consumer goods. Terdapat tiga indeks utama yang digunakan untuk mengkuantifikasi kinerja redesain, yaitu indeks efisiensi desain (*Design Efficiency Index*), indeks efisiensi manufaktur, dan indeks efisiensi perakitan.

**Indeks Efisiensi Desain (Design for Assembly – DFA Index).** Indeks ini mengukur proporsi bagian minimum teoritis terhadap jumlah bagian aktual produk:

$$E_{DFA} = \frac{N_m}{N_t} \times 100\%$$

di mana $N_m$ adalah jumlah minimum bagian yang diperlukan untuk memenuhi fungsi utama produk (kriteria *minimum part count*), dan $N_t$ adalah jumlah total bagian aktual setelah redesain. Nilai $E_{DFA}$ yang semakin mendekati 100% menunjukkan bahwa produk semakin mendekati konfigurasi optimalnya. Untuk produk sederhana seperti *coffee enema basket*, nilai $N_m$ dapat diturunkan dari analisis fungsi (Fungsi: reservoir, filter, sambungan selang, dudukan katup) sehingga $N_m = 4$.

**Indeks Efisiensi Manufaktur (Design for Manufacturing – DFM Index).** Indeks ini mengukur rasio biaya proses minimum terhadap biaya proses aktual:

$$E_{DFM} = \frac{C_{m,\min}}{C_{m,\text{actual}}} \times 100\%$$

dengan $C_{m,\min}$ adalah biaya manufaktur minimum teoritis yang dihitung berdasarkan *process capability* standar industri (misalnya *injection molding* untuk komponen polipropilena), dan $C_{m,\text{actual}}$ adalah biaya manufaktur aktual sebelum redesain.

**Indeks Gabungan DFMA.** Gabungan ketiga aspek—desain, manufaktur, dan perakitan—diformulasikan sebagai:

$$I_{DFMA} = w_1 \cdot E_{DFA} + w_2 \cdot E_{DFM} + w_3 \cdot E_{DFA\_time}$$

dengan bobot $w_1, w_2, w_3$ masing-masing merepresentasikan prioritas relatif (umumnya $w_1 + w_2 + w_3 = 1$), dan $E_{DFA\_time}$ adalah efisiensi waktu perakitan:

$$E_{DFA\_time} = \frac{t_{a,\min}}{t_{a,\text{actual}}} \times 100\%$$

di mana $t_{a,\min}$ adalah waktu perakitan minimum teoritis yang dihitung berdasarkan tabel *handling + insertion time* Boothroyd (umumnya 3 detik per komponen untuk operasi sederhana).

**Reduksi Biaya Total Produk.** Penurunan biaya total dipformulasikan sebagai selisih biaya antara desain lama dan desain baru:

$$\Delta C_{\text{total}} = (C_m^{\text{old}} + C_a^{\text{old}} + C_t^{\text{old}}) - (C_m^{\text{new}} + C_a^{\text{new}} + C_t^{\text{new}})$$

dengan $C_m$ = biaya material, $C_a$ = biaya perakitan, dan $C_t$ = biaya tooling.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti SOP tujuh tahap yang diadopsi dari prosedur Boothroyd & Dewhurst dan disesuaikan dengan praktik IKM:

**Tahap 1 – Analisis Fungsi Produk.** Setiap komponen produk dipetakan terhadap fungsi primer, sekunder, dan auxilia. Untuk *coffee enema basket*, fungsi primer diidentifikasi: (i) menampung larutan kopi, (ii) menyaring partikel, (iii) menyambung ke selang enema, dan (iv) menjadi dudukan yang stabil saat pemasangan.

**Tahap 2 – Penentuan Jumlah Minimum Bagian.** Menggunakan algoritma Boothroyd, dilakukan eliminasi komponen yang tidak memenuhi kriteria: (a) apakah bagian tersebut bergerak relatif terhadap bagian lain selama operasi?, (b) apakah pemisahan diperlukan untuk material yang berbeda?, (c) apakah pemisahan diperlukan untuk perakitan/pemeliharaan?, dan (d) apakah bagian tersebut diperlukan untuk memenuhi constraint geometris? Jika semua jawaban "tidak", maka bagian tersebut layak digabung.

**Tahap 3 – Desain untuk Manufaktur.** Setiap komponen dievaluasi terhadap proses manufaktur yang tersedia (injection molding, blow molding, ultrasonic welding, dsb.) dan dipilih proses yang memiliki *process capability* terbaik dengan biaya terendah.

**Tahap 4 – Desain untuk Perakitan.** Orientasi perakitan dianalisis untuk memastikan *symmetrical insertion* atau *self-locating features* dapat menggantikan *reorientation* yang memakan waktu.

**Tahap 5 – Estimasi Biaya dan Waktu.** Setiap alternatif desain dinilai menggunakan *should-cost analysis*.

**Tahap 6 – Prototyping dan Validasi.** Prototipe dicetak dan diuji terhadap spesifikasi fungsi (kapasitas tampung, laju filtrasi, kekuatan sambungan).

**Tahap 7 – Finalisasi dan Dokumentasi.** Desain final didokumentasikan dalam *Design History File* sesuai ISO 13485.

Diagram alur logika yang digunakan oleh Amirullah dan Jakaria (2024) pada dasarnya mengikuti siklus **Plan-Do-Check-Act (PDCA)** yang dipadukan dengan iterasi **Generate-Evaluate-Refine** pada tahap konseptual. Kerangka ini paralel dengan BIM-DFMA framework yang dikembangkan Islam (2024) untuk proyek jembatan, di mana proses evaluasi multi-kriteria dilakukan sebelum keputusan desain dikunci (*frozen design*).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif berdasarkan parameter tipikal produk *coffee enema basket* dengan kapasitas 1 liter, dilakukan simulasi numerik terhadap desain lama dan desain baru hasil redesain DFMA.

**Tabel 1. Perbandingan Parameter Desain**

| Parameter | Desain Lama | Desain Baru (DFMA) |
|---|---|---|
| Jumlah komponen $N_t$ | 12 bagian | 8 bagian |
| Jumlah komponen minimum teoritis $N_m$ | 8 | 8 |
| Waktu perakitan aktual $t_a$ | 18,5 menit/unit | 9,8 menit/unit |
| Biaya material/unit $C_m$ | Rp 32.500 | Rp 24.200 |
| Biaya perakitan/unit $C_a$ | Rp 18.000 | Rp 9.500 |
| Biaya tooling (amortisasi per unit) $C_t$ | Rp 4.500 | Rp 6.000 |

**Perhitungan 1: Efisiensi Desain (DFA Index).**

Desain lama: $E_{DFA}^{\text{old}} = \dfrac{8}{12} \times 100\% = 66{,}67\%$

Desain baru: $E_{DFA}^{\text{new}} = \dfrac{8}{8} \times 100\% = 100\%$

Peningkatan efisiensi desain: $\Delta E_{DFA} = 100\% - 66{,}67\% = 33{,}33$ poin persentase.

**Perhitungan 2: Efisiensi Waktu Perakitan.**

Waktu perakitan minimum teoritis (3 detik × 8 bagian = 24 detik = 0,4 menit):

$E_{DFA\_time}^{\text{old}} = \dfrac{0{,}4}{18{,}5} \times 100\% = 2{,}16\%$

$E_{DFA\_time}^{\text{new}} = \dfrac{0{,}4}{9{,}8} \times 100\% = 4{,}08\%$

Reduksi waktu perakitan: $\dfrac{18{,}5 - 9{,}8}{18{,}5} \times 100\% = 47{,}03\%$

**Perhitungan 3: Reduksi Biaya Total per Unit.**

$\Delta C_{\text{total}} = (32.500 + 18.000 + 4.500) - (24.200 + 9.500 + 6.000)$

$\Delta C_{\text{total}} = 55.000 - 39.700 = \text{Rp } 15.300 \text{ per unit}$

Persentase reduksi biaya: $\dfrac{15.300}{55.000} \times 100\% = 27{,}82\%$

**Perhitungan 4: Dampak pada Produksi Skala Tahunan (asumsi 20.000 unit/tahun).**

Penghematan tahunan: $20.000 \times 15.300 = \text{Rp } 306.000.000$

Penghematan jam kerja perakitan: $20.000 \times \dfrac{8{,}7}{60} = 2.900$ jam/tahun, ekuivalen dengan ~1,5 FTE (Full-Time Equivalent) operator yang dapat dialokasikan ke lini lain.

**Interpretasi Manajerial:** Hasil kuantitatif menunjukkan bahwa redesain DFMA mampu menurunkan biaya unit hingga 27,82% sekaligus meningkatkan kapasitas perak