# 3023 — Redesain Keranjang Enema Kopi dengan Pendekatan Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Rekayasa untuk Efisiensi Manufaktur, Efektivitas Biaya, dan Modularitas Produk Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan komplementer dan integratif mengalami transformasi signifikan dalam dua dekade terakhir, seiring meningkatnya permintaan global terhadap terapi alternatif berbasis bukti empiris. Salah satu perangkat yang mengalami lonjakan permintaan adalah *coffee enema basket* (keranjang enema kopi), yaitu komponen kritis pada perangkat terapi yang berfungsi menampung bubuk kopi sebagai media filtrasi dalam prosedur enema. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain konvensional keranjang enema kopi di tingkat UMKM dan manufaktur skala kecil masih menunjukkan缺陷 struktural yang substansial, mencakup jumlah komponen yang berlebihan, kesulitan perakitan manual, serta biaya produksi yang tidak optimal akibat proses fabrikasi yang belum mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA). Permasalahan ini bukan sekadar isu teknikal, melainkan memiliki dampak ekonomi-manajerial yang luas: inefisiensi perakitan meningkatkan *lead time*, menambah tingkat rejeksi kualitas, dan pada akhirnya menurunkan margin keuntungan produsen alat kesehatan di pasar yang semakin kompetitif.

Urgensi redesain semakin terasa ketika kita memperhatikan pergeseran paradigma rekayasa yang dikemukakan oleh Islam (2024) dalam studinya tentang integrasi DFMA dengan Building Information Modelling (BIM) untuk konstruksi jembatan pracetak (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)). Islam menegaskan bahwa keputusan desain yang hanya didasarkan pada biaya dan kecukupan struktural tanpa mempertimbangkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi akan menyebabkan masalah *buildability* yang baru terdeteksi pada tahap *shop-drawing* atau di lapangan—yaitu ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi menjadi sangat mahal. Paradigma ini berlaku secara universal lintas industri: pada alat kesehatan seperti keranjang enema kopi, keputusan desain yang mengabaikan kemampuan fabrikasi akan menghasilkan produk yang sulit dirakit, memerlukan toleransi yang sulit dicapai, dan membutuhkan jumlah komponen yang melebihi kebutuhan fungsional minimum.

Konteks industri alat kesehatan komplementer di Indonesia dan Asia Tenggara menunjukkan karakteristik khusus. Pertama, mayoritas produsen adalah usaha skala kecil-menengah dengan kapasitas investasi mesin terbatas. Kedua, regulasi alat kesehatan dari Badan Pengawas Alat Kesehatan (BPK Kesehatan) mensyaratkan dokumentasi desain yang kuat dan kemampuan *traceability* material. Ketiga, permintaan ekspor ke pasar Eropa dan Amerika mensyaratkan sertifikasi CE dan FDA yang salah satu prasyaratnya adalah konsistensi proses manufaktur—yang hanya dapat dicapai jika desain sejak awal sudah kompatibel dengan kemampuan manufaktur. Keempat, preferensi konsumen modern terhadap produk yang mudah dibersihkan (*cleanability*), tahan autoclave, dan modular menuntut redesain sistematis yang memperhatikan seluruh siklus hidup produk. Oleh karena itu, aplikasi metode DFMA pada kasus keranjang enema kopi bukan sekadar latihan akademis, melainkan kebutuhan strategis industri yang memiliki implikasi pada daya saing, kepatuhan regulasi, dan keberlanjutan bisnis.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) mengintegrasikan dua pilar utama, yaitu *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA), dengan formulasi kuantitatif yang presisi. Berikut adalah landasan teori dan formulasi matematis yang digunakan:

### 2.1 Design for Manufacture (DFM)

Biaya manufaktur total suatu komponen dimodelkan sebagai:

$$C_m = C_{mat} + C_{mach} + C_{fin} + C_{tool}$$

di mana $C_{mat}$ adalah biaya material, $C_{mach}$ adalah biaya permesinan, $C_{fin}$ adalah biaya penyelesaian akhir, dan $C_{tool}$ adalah biaya pahat/alat. Fungsi biaya material untuk komponen sheet metal berbentuk silinder keranjang adalah:

$$C_{mat} = \rho \cdot V \cdot P_{mat} = \rho \cdot \pi \cdot h \cdot (r_o^2 - r_i^2) \cdot P_{mat}$$

dengan $\rho$ adalah densitas material (kg/m³), $h$ adalah tinggi keranjang (m), $r_o$ dan $r_i$ adalah jari-jari luar dan dalam, dan $P_{mat}$ adalah harga material per kg.

Tingkat pemanfaatan material (*material utilization rate*) didefinisikan sebagai:

$$\eta_{mat} = \frac{A_{produk}}{A_{lembar}} \times 100\%$$

Pada desain awal (baseline), $\eta_{mat}$ yang rendah mengindikasikan *scrap* berlebih yang harus diminimalkan melalui optimasi *nesting* dan pemilihan proses fabrikasi (las, tekuk, atau stamping).

### 2.2 Design for Assembly (DFA) – Metode Boothroyd-Dewhurst

Indeks efisiensi perakitan mengikuti formulasi Boothroyd-Dewhurst:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_a \cdot t_a} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum komponen secara teoretis, $t_{min}$ adalah waktu perakitan minimum teoritis per komponen, $N_a$ adalah jumlah aktual komponen pada desain, dan $t_a$ adalah waktu perakitan aktual. Untuk komponen ideal yang sudah mempertimbangkan *fastening*, *handling*, dan *insertion* secara simultan:

$$t_a = \sum_{i=1}^{N_a} t_i = \sum_{i=1}^{N_a} (t_{handle,i} + t_{insert,i} + t_{fasten,i})$$

Biaya perakitan total dapat dinyatakan sebagai:

$$C_a = N_a \cdot (C_{part} + C_{assembly})$$

di mana $C_{part}$ adalah biaya komponen individual dan $C_{assembly}$ adalah biaya operasi perakitan (termasuk *labor*, *overhead*, dan *fixture*).

### 2.3 *Design Efficiency* Gabungan (DFMA)

Efektivitas keseluruhan metode DFMA diukur dengan *Design Efficiency*:

$$E_{DFMA} = \frac{C_{target}}{C_{actual}} \times 100\%$$

di mana $C_{target}$ adalah biaya target berdasarkan konfigurasi fungsional minimum, dan $C_{actual}$ adalah biaya aktual desain. Desain dianggap baik jika $E_{DFMA} \geq 70\%$.

### 2.4 *Cost Reduction* Kuantitatif

Penghematan biaya absolut dan relatif dihitung sebagai:

$$\Delta C = C_{before} - C_{after}$$

$$\% \Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

### 2.5 Hubungan dengan Multi-Criteria Decision Analysis

Mengikuti kerangka Islam (2024), keputusan DFMA dapat dinyatakan sebagai fungsi multi-kriteria:

$$\text{Skor}_{alternatif} = \sum_{j=1}^{k} w_j \cdot s_{ij}$$

dengan $w_j$ adalah bobot kriteria ke-$j$ dan $s_{ij}$ adalah skor alternatif ke-$i$ pada kriteria ke-$j$. Kriteria yang biasa digunakan mencakup: *manufacturability*, *assembly time*, *cost*, *cleanability*, dan *regulatory compliance*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA pada redesain keranjang enema kopi mengikuti *Standard Operating Procedure* (SOP) tujuh tahap yang diadopsi dari literatur Amirullah dan Jakaria (2024) dan diperkuat dengan kerangka evaluasi Islam (2024):

**Tahap 1 — Analisis Baseline dan Identifikasi Defisiensi.** Langkah awal adalah mendokumentasikan desain eksisting, termasuk bill of materials (BoM), waktu perakitan aktual ($t_a$), biaya produksi per komponen, dan *failure mode* yang teridentifikasi. Tahap ini menghasilkan *baseline matrix* yang menjadi acuan komparasi.

**Tahap 2 — Analisis Fungsi dan Spesifikasi.** Setiap komponen diklasifikasikan berdasarkan fungsi primer (misalnya filtrasi, containment, koneksi), fungsi sekunder (misalnya estetika), dan fungsi yang tidak esensial. Komponen dengan fungsi redundan atau yang dapat dieliminasi melalui integrasi geometris ditandai sebagai kandidat eliminasi.

**Tahap 3 — Penerapan Prinsip DFA.** Menggunakan metode Boothroyd-Dewhurst, setiap komponen dievaluasi terhadap tiga pertanyaan kritis: (1) Apakah komponen ini bergerak relatif terhadap komponen lain selama operasi? (2) Apakah komponen ini diperlukan untuk material yang berbeda? (3) Apakah komponen ini harus diakses untuk pemisahan selama perakitan/pemeliharaan? Jika seluruh jawaban adalah "tidak", maka komponen tersebut merupakan kandidat kuat untuk eliminasi.

**Tahap 4 — Penerapan Prinsip DFM.** Mengevaluasi setiap fitur desain terhadap kemampuan proses manufaktur yang tersedia: apakah radius tekukan memenuhi *minimum bend radius* material? Apakah toleransi yang diminta realistis untuk proses sheet metal stamping? Apakah ada fitur yang memerlukan operasi sekunder seperti pengelasan yang dapat dihindari melalui redesign?

**Tahap 5 — *Concept Generation* dan *Screening* Alternatif.** Mengembangkan minimal tiga konsep alternatif, kemudian melakukan *screening* menggunakan matrik keputusan tertimbang (sesuai kerangka Islam, 2024) dengan kriteria manufaktur, biaya, perakitan, dan kepatuhan regulasi.

**Tahap 6 — Prototyping dan Validasi.** Konsep terpilih di-*prototype* dan divalidasi terhadap spesifikasi fungsional: kapasitas filtrasi, *flow rate*, kemampuan autoclave (121°C, 15 psi, 15 menit), dan *cleanability*.

**Tahap 7 — Finalisasi Desain dan Dokumentasi.** Menghasilkan gambar teknik final, BoM, dan *process plan* yang di-*freeze* untuk produksi.

Diagram alir logika keputusan DFMA mengikuti struktur berikut:

```
[Desain Eksisting]
       ↓
[Analisis Fungsi] → Apakah fungsi kritis?
       ↓ YA
[Evaluasi Komponen] → Apakah komponen esensial? (3 pertanyaan DFA)
       ↓ TIDAK
[Eliminasi / Integrasi]
       ↓
[Evaluasi Proses Manufaktur]
       ↓
[Konsep Alternatif] → [Skoring Multi-Kriteria]
       ↓
[Prototipe & Validasi]
       ↓
[Desain Final DFMA]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan tipikal proses manufaktur UMKM alat kesehatan dan data-data yang relevan dengan studi Amirullah dan Jakaria (2024), berikut adalah studi kasus kuantitatif realistis untuk redesain keranjang enema kopi.

### 4.1 Parameter Input Desain Eksisting (Baseline)

Misalkan keranjang enema kopi eksisting memiliki spesifikasi:

- Diameter luar $d_o = 80$ mm, diameter dalam $d_i = 76$ mm, tinggi $h = 100$ mm
- Material: stainless steel SUS 304, densitas $\rho = 7930$ kg/m³, harga $P_{mat} = \text{IDR } 95.000$/kg
- Komponen: body silinder (1), tutup atas (1), tutup bawah dengan perforasi (1), ring pengunci (1), handle (2), baut pengikat (4) → $N_a^{before} = 10$ komponen
- Waktu perakitan aktual: $t_a^{before} = 18$ menit/unit
- Biaya produksi baseline per unit: $C_{before} = \text{IDR } 185.000$

### 4.2 Per.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
