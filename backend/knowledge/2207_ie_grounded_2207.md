# 2207 — Redesain Produk dengan Metode Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Rekayasa pada Komponen Fungsional dan Infrastruktur Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Redesain Coffee Enema Basket Menggunakan Metode DFMA dan Integrasinya dalam Evaluasi Desain Multi-Kriteria berbasis BIM
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tantangan struktural yang semakin kompleks: di satu sisi, permintaan konsumen terhadap produk yang ringan, ergonomis, higienis, dan berbiaya rendah melonjak; di sisi lain, margin keuntungan perusahaan terus tertekan oleh biaya bahan baku, energi, dan upah tenaga kerja. Paradigma *Design for Manufacture and Assembly* (DFMA) muncul sebagai jawaban strategis terhadap矛盾 (kontradiksi) ini dengan cara mengintegrasikan pertimbangan manufaktur dan perakitan pada tahap paling awal siklus pengembangan produk. Amirullah dan Jakaria (2024) dalam studi mereka yang dipublikasikan dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mendemonstrasikan penerapan DFMA pada komponen *coffee enema basket*, yaitu wadah jaring-jaring stainless steel yang berfungsi menahan ampas kopi pada prosedur terapi alternatif. Meskipun terdengar spesifik, kasus ini merepresentasikan kelas masalah yang jauh lebih luas: redesain komponen fungsional dengan geometri kisi (mesh), sambungan las titik (spot weld), dan kriteria higienis-sanitasi tinggi.

Urgensi penelitian ini bersifat ganda. Pertama, secara ekonomis, biaya produksi *basket* konvensional yang umumnya melibatkan operasi pemotongan laser, pembengkokan lembaran, pengelasan, dan perakitan ring-kait menunjukkan *bill of materials* (BOM) yang tidak efisien. Kedua, secara teknis, pemilihan material food-grade (SS 304 atau SS 316L), toleransi geometris mesh, serta kemampuan drainase cairan menjadi parameter kritis yang harus dioptimasi tanpa mengorbankan manufacturability. Amirullah dan Jakaria (2024) menemukan bahwa desain asli memiliki indeks DFA yang rendah, mengindikasikan terlalu banyak komponen yang secara teoritis dapat diintegrasikan menjadi satu kesatuan.

Dalam konteks makro-industri, Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa prinsip DFMA yang sama dapat diskalakan ke proyek infrastruktur bernilai miliaran rupiah, yaitu konstruksi jembatan prefabrikasi. Paper tersebut mengkritik praktik konvensional di mana alternatif desain jembatan hanya dievaluasi berdasarkan biaya dan kecukupan struktural pada tahap awal, tanpa mempertimbangkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi. Akibatnya, masalah buildability baru teridentifikasi saat shop-drawing telah final dan cetakan acuan telah dipotong—situasi yang identik dengan kasus produk kecil: koreksi menjadi mahal dan terlambat.

Kedua paper secara komplementer menegaskan bahwa DFMA bukan sekadar metodologi desain produk, melainkan kerangka keputusan strategis lintas-domain yang mempengaruhi rantai pasok, logistik, dan total cost of ownership. Untuk industri nasional Indonesia yang tengah mengembangkan sektor manufaktur alat kesehatan dan konstruksi infrastruktur berbasis préfabrikasi, adopsi DFMA merupakan *enabler* daya saing yang tidak dapat ditunda.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar DFMA

DFMA terdiri dari dua subsistem analitis: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). Pendekatan Boothroyd-Dewhurst yang menjadi acuan standar industri merekomendasikan dua indikator utama: **(a)** jumlah minimum bagian yang secara teoritis diperlukan ($N_{min}$), dan **(b)** waktu perakitan teoritis ($T_a$). Rasio keduanya terhadap desain aktual menghasilkan **DFA Index**.

### 2.2 Formulasi DFA Index

Indeks DFA didefinisikan sebagai:

$$DFA_{index} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana:
- $N_{min}$ = jumlah minimum bagian tak terpisahkan yang secara fungsional wajib ada,
- $N_{actual}$ = jumlah aktual bagian dalam desain saat ini.

Nilai $DFA_{index}$ yang semakin mendekati 100% menunjukkan desain semakin efisien secara struktural. Amirullah dan Jakaria (2024) melaporkan bahwa desain awal coffee enema basket memiliki $DFA_{index}$ pada kisaran 50-60%, mengimplikasikan adanya *redundancy* komponen.

### 2.3 Estimasi Waktu Perakitan (Boothroyd Method)

Waktu perakitan total dihitung menggunakan formula Boothroyd:

$$T_a = \sum_{i=1}^{n_{parts}} \left( t_{h,i} + t_{i,i} + t_{f,i} \right)$$

dengan:
- $t_{h,i}$ = waktu *handling* komponen ke-$i$ (umumnya $\approx 1.5 - 3.0$ detik),
- $t_{i,i}$ = waktu *insertion* (penempatan), bergantung pada arah insertion (symmetrical, easy, awkward),
- $t_{f,i}$ = waktu *fastening* (pengencangan), nol jika tidak ada pengikat tambahan.

Untuk komponen dengan pengelasan, total waktu fabrikasi diperluas menjadi:

$$T_{fab} = \sum_{j=1}^{m} \left( T_{setup,j} + T_{process,j} \cdot n_{units} \right)$$

di mana $T_{setup,j}$ adalah waktu setup mesin ke-$j$ dan $T_{process,j}$ adalah waktu siklus per unit.

### 2.4 Formulasi Biaya Manufaktur Total

$$C_{total} = C_{material} + C_{machining} + C_{assembly} + C_{overhead}$$

Komponen biaya material:

$$C_{material} = \rho \cdot V \cdot P_{mat} \cdot (1 + w_{scrap})$$

di mana $\rho$ = densitas material (kg/m³), $V$ = volume jadi (m³), $P_{mat}$ = harga per kg, dan $w_{scrap}$ = waste fraction (umumnya 0.10-0.25 untuk proses laser cutting).

Biaya perakitan:

$$C_{assembly} = T_a \cdot R_{labor} \cdot (1 + B_{oh})$$

dengan $R_{labor}$ = tarif tenaga kerja (Rp/menit) dan $B_{oh}$ = *burden overhead* (fraksi biaya tidak langsung, tipikal 0.30-0.50).

### 2.5 Cost Reduction Ratio (Efek Redesain)

Efektivitas redesain DFMA diukur dengan:

$$\Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

$$\Delta T = \frac{T_{a,before} - T_{a,after}}{T_{a,before}} \times 100\%$$

### 2.6 Multi-Criteria Decision Framework (Perspektif Islam, 2024)

Untuk konteks infrastruktur, Islam (2024) menggunakan Analytical Hierarchy Process (AHP) dengan *pairwise comparison* untuk pembobotan kriteria:

$$W_i = \frac{1}{n} \sum_{j=1}^{n} \frac{a_{ij}}{\sum_{k=1}^{n} a_{kj}}$$

di mana $W_i$ adalah bobot kriteria ke-$i$ dan $a_{ij}$ adalah intensitas preferensi kriteria $i$ terhadap $j$. *Consistency Ratio* (CR) harus $< 0.10$ agar pembobotan valid.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan SOP DFMA untuk Redesain Produk Fungsional

Berdasarkan sintesis Amirullah & Jakaria (2024) dan Islam (2024), prosedur operasional standar DFMA di industri dapat diuraikan sebagai berikut:

**Tahap 1 — Analisis Desain Eksisting**
1. Dekomposisi produk menjadi *functional block diagram*.
2. Pembuatan *exploded view* dan identifikasi setiap bagian.
3. Penentuan $N_{actual}$ dan klasifikasi setiap bagian: *necessary*, *unnecessary*, atau *combinable*.
4. Estimasi waktu dan biaya setiap operasi proses.

**Tahap 2 — Aplikasi Kriteria DFA Boothroyd**
Tiga pertanyaan kritis untuk setiap bagian:
- Apakah bagian bergerak relatif terhadap bagian lain saat produk beroperasi?
- Apakah bagian harus terbuat dari material berbeda?
- Apakah bagian harus dipisahkan untuk allow assembly/disassembly?

Jika ketiga jawaban "tidak", maka bagian tersebut kandidat kuat untuk eliminasi atau integrasi.

**Tahap 3 — Pembangkitan Konsep Alternatif**
Menggunakan *morphological chart* dan *concept screening matrix* dengan kriteria:
- *Manufacturability* (skala 1-5)
- *Assembly ease* (skala 1-5)
- *Cost* (skala 1-5, dibalik)
- *Functionality preservation* (skala 1-5)

**Tahap 4 — Evaluasi Multi-Kriteria**
Untuk proyek infrastruktur (Islam, 2024): integrasikan ke dalam lingkungan BIM (Revit, Tekla, atau Bentley OpenBridge) dengan *parametric modeling* sehingga setiap perubahan geometri otomatis meng-update *quantity takeoff*.

**Tahap 5 — Prototyping, Validasi, dan Iterasi**
- *Rapid prototyping* (3D printing SLS/SLA) atau *soft tooling*.
- Uji fungsi: tekanan, flow rate (untuk basket), kapasitas beban (untuk jembatan).
- Pengumpulan data aktual vs. estimasi untuk kalibrasi model.

**Tahap 6 — Standardisasi dan Desain Final**
- Finalisasi *tolerance stack-up*.
- Dokumentasi *DFM guidelines sheet* untuk lini produksi.
- *Design freeze* dan handover ke manufacturing engineering.

### 3.2 Diagram Alir SOP

```
[Desain Awal] → [Dekomposisi Fungsi] → [Analisis DFM]
   ↓
[Hitung N_min, T_a, C_total Awal]
   ↓
[Boothroyd 3-Question Test per Part]
   ↓
[Identifikasi Kandidat Eliminasi/Integrasi]
   ↓
[Morphological Chart → Konsep Alternatif]
   ↓
[Screening Matrix + AHP Weighting]
   ↓
[Konsep Terpilih] → [CAD Detail + BOM Final]
   ↓
[Prototyping] → [Validasi Fungsi]
   ↓
[Desain Final + DFM Sheet] → [Handover Produksi]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus: Redesain Coffee Enema Basket

Berdasarkan karakteristik produk yang dianalisis oleh Amirullah & Jakaria (2024), kami merekonstruksi skenario numerik realistis sebagai berikut:

**Tabel 1. Parameter Desain Awal (Before)**

| Komponen | Material | Jumlah | Proses Manufaktur |
|----------|----------|--------|--------------------|
| Cincin atas (ring) | SS 304, kawat Ø2 mm | 1 | Bending + welding |
| Body keranjang (mesh) | SS 304, wire Ø0.8 mm | 1 | Weaving |
| Handle | SS 304, kawat Ø3 mm | 1 | Bending + welding |
| Pengait (hook) | SS 304, kawat Ø2 mm | 1 | Bending |
| Pengunci (clip) | SS 304, plat 0.5 mm | 1 | Stamping + bending |

**Tabel 2. Parameter Desain Usulan DFMA (After)**

| Komponen | Material | Jumlah | Proses Manufaktur |
|----------|----------|--------|--------------------|
| Body + handle terintegrasi | SS 304, kawat Ø3 mm | 1 | Bending + single spot weld |
| Mesh + ring terintegrasi | SS 304 | 1 | One-piece laser cut + bending |

### 4.2 Perhitungan Biaya

Asumsi industri:
- $P_{mat}$ SS 304 = Rp 180.000/kg
- $\rho_{SS304