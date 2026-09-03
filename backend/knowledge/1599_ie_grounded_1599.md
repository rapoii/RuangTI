# 1599 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur Alat Kesehatan Alternatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk Alat Kesehatan Alternatif dengan Pendekatan DFMA (Design for Manufacture and Assembly)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal (UPS). DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan alternatif di Indonesia mengalami pertumbuhan yang signifikan dalam satu dekade terakhir, terutama didorong oleh meningkatnya permintaan terhadap terapi komplementer seperti *coffee enema* yang digunakan dalam praktik wellness dan detoxification. Produk keranjang (*basket*) coffee enema merupakan komponen kritis dalam rangkaian alat yang berfungsi sebagai wadah filtrasi bubuk kopi saat proses enema dilakukan. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa desain konvensional keranjang coffee enema masih menghadapi berbagai permasalahan rekayasa, antara lain kompleksitas komponen yang tinggi, waktu perakitan yang panjang, serta biaya produksi yang belum optimal. Permasalahan ini menjadi semakin relevan ketika industri alat kesehatan dituntut untuk mematuhi regulasi *Good Manufacturing Practice* (GMP) dan standar ISO 13485 yang mensyaratkan traceability, efisiensi proses, serta konsistensi kualitas produk.

Urgensi ekonomis dari redesain ini berkaitan langsung dengan struktur biaya produksi. Setiap tambahan komponen pada desain lama berpotensi meningkatkan *bill of materials* (BOM), menambah tahapan operasi perakitan, dan memicu defect rate yang lebih tinggi. Pendekatan Design for Manufacture and Assembly (DFMA) sebagaimana diajukan oleh Boothroyd dan Dewhurst sejak era 1980-an dan terus berkembang hingga dewasa ini, menawarkan kerangka sistematis untuk menyederhanakan desain produk melalui pengurangan jumlah komponen, standardisasi fitur, serta optimalisasi proses fabrikasi dan assembly. Studi Amirullah dan Jakaria (DOI: 10.21070/ups.3309) mengimplementasikan metodologi ini pada konteks spesifik keranjang coffee enema dengan tujuan ganda: menurunkan biaya produksi dan meningkatkan *design efficiency* tanpa mengorbankan fungsi filtrasi dan keamanan pengguna.

Dari perspektif rantai pasok, keputusan desain pada tahap konseptual memiliki dampak terbesar terhadap total biaya siklus hidup produk (*life cycle cost*). Hal ini paralel dengan temuan Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menunjukkan bahwa pada industri konstruksi jembatan prefabrikasi, keputusan desain yang dibuat sebelum pengetahuan manufaktur, transportasi, dan ereksi dimasukkan ke dalam proses akan menghasilkan masalah *buildability* yang baru terdeteksi saat shop drawing atau di lapangan, ketika koreksi sudah sangat mahal untuk dilakukan. Analogi ini sangat relevan: pada produk alat kesehatan seperti keranjang coffee enema, keputusan material, geometri saringan, dan metode sambungan yang ditetapkan pada tahap awal akan menentukan kelayakan produksi massal, kompatibilitas dengan proses *injection molding* atau *sheet metal forming*, serta kemudahan perakitan oleh pengguna akhir. Konteks industri lokal Indonesia, khususnya usaha kecil menengah (UKM) di bidang alat kesehatan alternatif, membutuhkan pendekatan redesain yang terukur, terdokumentasi, dan dapat direplikasi—semua kriteria tersebut dipenuhi oleh kerangka DFMA yang digunakan oleh Amirullah dan Jakaria (2024).

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan dalam studi Amirullah dan Jakaria (2024, DOI: 10.21070/ups.3309) mengintegrasikan dua pilar utama: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi komponen individual, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan keseluruhan produk. Secara matematis, DFA index yang diadopsi dari pendekatan Boothroyd-Dewhurst dapat diformulasikan sebagai berikut:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_{actual} \cdot t_{actual}} \times 100\%$$

di mana $\eta_{DFA}$ adalah efisiensi desain untuk perakitan, $N_{min}$ adalah jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi produk (ditentukan melalui analisis fungsi), $t_{min}$ adalah waktu minimum teoritis perakitan, $N_{actual}$ adalah jumlah aktual komponen pada desain eksisting atau usulan, dan $t_{actual}$ adalah waktu aktual perakitan yang diukur melalui *time study* dengan metode jam henti (*stopwatch time study*) atau analisis video. Nilai $\eta_{DFA}$ yang mendekati 100% menunjukkan desain yang sangat efisien, sedangkan nilai rendah mengindikasikan opportunity untuk reduksi komponen.

Untuk analisis biaya manufaktur, model cost-based DFMA yang digunakan dapat dinyatakan sebagai:

$$C_{total} = \sum_{i=1}^{n} (C_{material,i} + C_{process,i} + C_{tooling,i}) + C_{assembly} + C_{overhead}$$

dengan $C_{material,i}$ adalah biaya material komponen ke-$i$, $C_{process,i}$ adalah biaya proses fabrikasi (seperti *injection molding*, *stamping*, atau machining), $C_{tooling,i}$ adalah alokasi biaya perkakas (cetakan, dies, jig), dan $C_{assembly}$ adalah total biaya perakitan yang merupakan fungsi dari jumlah bagian dan waktu perakitan:

$$C_{assembly} = L \cdot \sum_{j=1}^{m} t_j \cdot w_j$$

di mana $L$ adalah *labor rate* (upah per menit), $t_j$ adalah waktu operasi assembly ke-$j$, dan $w_j$ adalah faktor pengali berdasarkan tingkat kesulitan (klasifikasi DFA Boothroyd: 1,5 detik untuk *no handling*, 3 detik untuk *symmetrical*, 9 detik untuk *asymmetric*, dan lainnya).

Formulasi ketiga yang relevan adalah *manufacturability index* (MI) untuk mengevaluasi seberapa mudah suatu desain dapat difabrikasi:

$$MI = \frac{1}{1 + e^{-k(M_{score} - M_{ref})}}$$

di mana $M_{score}$ adalah skor gabungan berdasarkan kriteria manufacturability (kompleksitas geometri, toleransi, tipe material, dan proses yang dibutuhkan), $M_{ref}$ adalah nilai referensi, dan $k$ adalah konstanta kalibrasi. Pendekatan ini membantu desainer mengkuantifikasi keputusan geometris seperti jumlah lubang saringan pada keranjang, ketebalan dinding (*wall thickness*), dan *draft angle* yang sesuai untuk proses *injection molding* polipropilena food-grade.

Dalam konteks spesifik keranjang coffee enema, Amirullah dan Jakaria (DOI: 10.21070/ups.3309) menggunakan pendekatan ini untuk membandingkan desain lama (eksisting) dengan desain baru (proposed). Parameter kuantitatif yang dianalisis meliputi: (1) jumlah komponen total, (2) jumlah operasi perakitan, (3) waktu perakitan total, (4) biaya produksi per unit, dan (5) efisiensi filtrasi yang harus tetap terjaga. Validasi fungsional dilakukan melalui simulasi Computational Fluid Dynamics (CFD) sederhana untuk memastikan bahwa redesain tidak menurunkan kemampuan filtrasi partikel kopi yang merupakan fungsi utama produk.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi DFMA pada redesain keranjang coffee enema mengikuti alur prosedural yang terstruktur, sebagaimana diuraikan oleh Amirullah dan Jakaria (2024, DOI: 10.21070/ups.3309). Tahapan utamanya dapat diuraikan sebagai berikut:

**Tahap 1 — Analisis Fungsi dan Dekomposisi Produk.** Tahap awal ini melakukan *functional decomposition* menggunakan diagram FAST (*Function Analysis System Technique*) untuk memisahkan fungsi primer (menampung dan menyaring bubuk kopi), fungsi sekunder (memfasilitasi aliran cairan, mencegah kebocoran partikel), dan fungsi tersier (estetika, ergonomis, kompatibilitas dengan selang enema). Hasil dekomposisi ini menjadi basis penentuan $N_{min}$ pada rumus DFA.

**Tahap 2 — Pengukuran Baseline Desain Eksisting.** Pengukuran kuantitatif terhadap desain lama dilakukan melalui: pembongkaran produk (*disassembly analysis*), penghitungan jumlah komponen, pengukuran dimensi kritis, dan pencatatan waktu perakitan menggunakan *time study* dengan *snap-back time study method* atau *continuous timing*. Data ini menjadi $N_{actual}$ dan $t_{actual}$ dalam persamaan $\eta_{DFA}$.

**Tahap 3 — Generation Konsep Desain Alternatif.** Menggunakan *morphological chart* dan *concept screening matrix*, beberapa alternatif desain keranjang diajukan, misalnya: (a) desain monolitik satu komponen hasil *injection molding* dengan integrasi fitur saringan, (b) desain dua komponen dengan sistem snap-fit, dan (c) desain klip dengan mekanisme putar. Setiap alternatif dievaluasi terhadap kriteria manufacturability, assembly efficiency, biaya, dan fungsionalitas.

**Tahap 4 — Evaluasi DFA/DFM Kuantitatif.** Pada tahap ini, setiap konsep dihitung nilai $\eta_{DFA}$-nya, biaya produksinya menggunakan rumus $C_{total}$, dan manufacturability index-nya. Konsep dengan nilai gabungan terbaik dipilih untuk pengembangan detail.

**Tahap 5 — Desain Detail dan Validasi.** Setelah konsep terpilih, dilakukan detailed engineering drawing dengan memperhatikan standar ISO 128 untuk technical drawing, penentuan toleransi berdasarkan ISO 2768 (toleransi umum untuk komponen plastik), serta verifikasi melalui prototipe dan pengujian fungsional filtrasi.

**Tahap 6 — Analisis Perbandingan dan Dokumentasi.** Perbandingan final antara desain lama dan baru disajikan dalam bentuk tabel komparatif yang merangkum seluruh metrik kuantitatif, disertai rekomendasi implementasi.

Diagram alir proses rekayasa secara lengkap dapat digambarkan sebagai berikut:

```
[Start] → [Identifikasi Masalah Produksi]
   ↓
[Functional Analysis & FAST Diagram]
   ↓
[Baseline Measurement - Desain Eksisting]
   ↓
[Konsep Alternatif via Morphological Chart]
   ↓
[Evaluasi DFA Index & Cost Analysis]
   ↓
[Seleksi Konsep Optimal]
   ↓
[Desain Detail + Engineering Drawing]
   ↓
[Validasi Fungsional & Prototipe]
   ↓
[Dokumentasi & Rekomendasi Manufaktur] → [End]
```

Standar operasional yang digunakan sebagai acuan meliputi ISO 9001:2015 untuk sistem manajemen kualitas, ISO 13485 untuk alat kesehatan, serta regulasi BPOM untuk produk kesehatan di Indonesia. Islam (2024, DOI: 10.63125/av45jf21) menambahkan bahwa integrasi pendekatan DFMA dengan platform digital seperti BIM (*Building Information Modeling*) pada konteks jembatan prefabrikasi memungkinkan deteksi dini *clash detection* dan *constructability analysis*. Analogi yang dapat ditarik untuk industri alat kesehatan adalah potensi integrasi DFMA dengan Computer-Aided Design (CAD) parametric dan simulasi FEA/CFD untuk mempercepat iterasi desain dan mengurangi risiko redesign di tahap produksi massal.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran kuantitatif yang konkret, berikut disajikan simulasi perhitungan berdasarkan parameter tipikal yang dilaporkan oleh Amirullah dan Jakaria (2024, DOI: 10.21070/ups.3309) dan disesuaikan dengan praktik industri manufaktur plastik food-grade di Indonesia.

**Parameter Input Desain Eksisting:**
- Jumlah komponen ($N_{actual, lama}$): 5 bagian (badan keranjang, tutup, ring pengunci, sekrup, gasket)
- Waktu rata-rata perakitan per komponen ($t_{avg, lama}$): 18 detik
- Total waktu perakitan eksisting: $5 \times 18 = 90$ detik
- Upah tenaga kerja ($L$): Rp 200.000/jam ≈ Rp 3.333/menit ≈ Rp 55,55/detik
- Biaya material per unit: Rp 8.500 (polipropilena + gasket silikon)
- Biaya perkakas (alokasi per unit, untuk batch 10.000 unit): Rp 1.200

**Perhitungan Baseline:**
$$\eta_{DFA,lama} = \frac{N_{min} \cdot t_{min}}{N_{actual} \cdot t_{actual}} \times 100\%$$

Dengan asumsi analisis fungsi menunjukkan minimum 2 komponen diperlukan (badan dengan fitur saringan terintegrasi + tutup snap-fit) dan waktu minimum teoritis 9 detik per komponen:

$$\eta_{DFA,lama} = \frac{2 \times 9}{5 \times 18} \times 100\% = \frac{18}{90} \times 100\% = 20\%$$

Efisiensi DFA desain eksisting sangat rendah (20%), mengindikasikan peluang besar untuk redesain.

**Parameter Desain Usulan (Proposed):**
- Jumlah