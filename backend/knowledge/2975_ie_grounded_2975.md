# 2975 — Redesain Komponen Industri melalui Pendekatan Design for Manufacture and Assembly (DFMA): Integrasi dengan Building Information Modelling untuk Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Rekayasa desain produk dalam industri modern tidak lagi berhenti pada pemenuhan fungsi estetis dan struktural semata, melainkan harus menjawab tiga tantangan simultan: efisiensi biaya manufaktur, kecepatan perakitan, dan kemampuan produksi massal dengan kualitas yang konsisten. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti masalah ini secara konkret melalui studi redesain *coffee enema basket*—sebuah alat kesehatan yang pada desain awalnya memiliki geometri rumit, banyak komponen terpisah, serta proses fabrikasi yang membutuhkan operasi pemotongan, pengelasan, dan finishing berulang. Produk semacam ini merupakan representasi miniatur dari permasalahan desain pada manufaktur alat kesehatan rumah tangga dan instrumen klinis sederhana, di mana keputusan desain yang diambil pada tahap konseptual menentukan 70–80% biaya total siklus hidup produk.

Urgensi ekonomis dari penerapan Design for Manufacture and Assembly (DFMA) terletak pada kenyataan bahwa biaya koreksi desain yang dilakukan setelah produksi模具 (mold) cetak atau jig sudah dibuat sangat tinggi—dapat mencapai 10–100 kali lipat dibandingkan biaya modifikasi pada tahap Computer-Aided Design (CAD). Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam konteks yang lebih makro mengonfirmasi bahwa pada industri konstruksi jembatan prefabrikasi, alternatif desain konvensional hanya dievaluasi berdasarkan biaya dan kecukupan struktural, tanpa mempertimbangkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi. Akibatnya, masalah *buildability* baru terungkap pada tahap *shop-drawing* atau di lapangan saat desain sudah *frozen*, mould sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya serta penundaan jadwal yang signifikan.

Kedua paper ini, meski membahas produk dengan skala berbeda (instrumen medis kecil versus jembatan prefabrikasi besar), bertemu pada kesimpulan metodologis yang sama: keputusan desain yang tidak memasukkan pertimbangan manufaktur dan perakitan sejak awal akan menghasilkan suboptimalitas biaya dan waktu. Konteks industri yang lebih luas menunjukkan bahwa DFMA kini menjadi bagian integral dari metodologi pengembangan produk pada industri otomotif (misalnya Toyota Production System), dirgantara (Boeing, Airbus), peralatan medis, dan konstruksi modular. Penerapan DFMA dalam redesain *coffee enema basket* oleh Amirullah dan Jakaria menjadi studi kasus mikro yang kaya akan pelajaran tentang bagaimana analisis Desain untuk Manufaktur (DFM) dan Desain untuk Perakitan (DFA) bekerja secara simultan pada satu produk fisik sederhana.

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DFMA yang digunakan oleh Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengikuti kerangka Boothroyd-Dewhurst yang telah distandarisasi dalam rekayasa industri. Secara konseptual, DFMA memisahkan dua sub-analisis:

### 2.1 Indeks Desain untuk Perakitan (DFA)

Indeks efisiensi perakitan didefinisikan sebagai rasio antara waktu perakitan teoritis minimum terhadap waktu perakitan aktual, dinormalisasi dengan rasio jumlah bagian minimum teoritis terhadap jumlah bagian aktual:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_a \cdot t_a} \times 100\%$$

di mana:
- $N_{min}$ = jumlah bagian minimum teoritis (didapat dari kriteria *minimization* Boothroyd)
- $t_{min}$ = waktu perakitan minimum teoritis (detik atau menit)
- $N_a$ = jumlah bagian aktual pada desain
- $t_a$ = waktu perakitan aktual

Kriteria minimum bagian Boothroyd mensyaratkan bahwa sebuah komponen hanya diperlukan jika: (a) komponen tersebut bergerak relatif terhadap seluruh komponen lain; (b) komponen tersebut harus terbuat dari material yang berbeda; atau (c) pemisahan komponen memungkinkan perakitan atau pemeliharaan yang mustahila dilakukan bila digabung.

Untuk mengkuantifikasi *time penalty* pada operasi perakitan tertentu, digunakan rumus operasi:

$$t_{op,i} = K_1 + K_2 \cdot \sum_{j} A_j$$

dengan $A_j$ merepresentasikan karakteristik kode huruf (*handling code*, *insertion code*, *fastening code*) dan konstanta $K_1, K_2$ tergantung pada tingkat kesulitan operasi (misalnya $K_2 = 1.5$ untuk operasi sulit, $K_2 = 0$ untuk operasi trivial).

### 2.2 Indeks Desain untuk Manufaktur (DFM)

Indeks DFM mengukur seberapa efisien suatu desain dapat diproduksi. Salah satu formulasi yang banyak digunakan adalah rasio biaya manufaktur aktual terhadap biaya manufaktur target:

$$\eta_{DFM} = \frac{C_{ideal}}{C_{aktual}} \times 100\%$$

di mana biaya aktual didekomposisi menjadi:

$$C_{aktual} = C_{material} + C_{pemotongan} + C_{pengelasan} + C_{finishing} + C_{overhead}$$

Untuk proses fabrikasi pelat (yang relevan pada *coffee enema basket*), biaya pemotongan laser atau plasma dapat dimodelkan sebagai:

$$C_{cutting} = (t_{setup} + L_{total} \cdot v_{feed}) \cdot R_{mesin}$$

dengan $L_{total}$ = total panjang potongan (mm), $v_{feed}$ = inverse feed rate, dan $R_{mesin}$ = rate biaya mesin (Rp/menit).

### 2.3 Indeks DFMA Gabungan

Indeks DFMA agregat yang merepresentasikan overall manufacturability-and-assembly performance didefinisikan sebagai:

$$\eta_{DFMA} = \alpha \cdot \eta_{DFM} + (1-\alpha) \cdot \eta_{DFA}$$

dengan $\alpha$ adalah bobot kepentingan relatif (umumnya $\alpha = 0.5$ untuk produk seimbang manufaktur-perakitan).

### 2.4 Kerangka Multi-Kriteria BIM-DfMA (Islam, 2024)

Pada konteks jembatan prefabrikasi, Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) mengembangkan *weighted scoring model* yang mengintegrasikan kriteria struktural, biaya, manufaktur, transportasi, pengangkatan, dan ereksi:

$$S_{total} = \sum_{i=1}^{n} w_i \cdot s_i \quad ; \quad \sum_{i=1}^{n} w_i = 1$$

di mana $s_i$ adalah skor ternormalisasi (skala 0–10) untuk kriteria ke-$i$, dan $w_i$ adalah bobot kepentingan relatif yang ditentukan melalui proses *expert elicitation* atau *Analytic Hierarchy Process* (AHP).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyusun SOP redesain DFMA dalam tujuh tahapan sistematis yang dapat diadopsi lintas industri:

**Tahap 1 — Analisis Desain Eksisting.** Inventorisasi seluruh komponen, identifikasi material, dokumentasi dimensi, dan pemetaan jalur perakitan. Pada studi kasus *coffee enema basket*, tahap ini mengungkap penggunaan kawat stainless steel yang dilas dengan tangan (*manual welding*) pada titik-titik sulit, sehingga menghasilkan *heat-affected zone* yang mengurangi ketahanan korosi.

**Tahap 2 — Perhitungan DFA Baseline.** Hitung $\eta_{DFA}$ awal menggunakan rumus Boothroyd. Baseline ini menjadi titik referensi peningkatan.

**Tahap 3 — Perhitungan DFM Baseline.** Estimasi biaya manufaktur untuk setiap proses (pemotongan, bending, pengelasan, finishing) dan hitung $\eta_{DFM}$ awal.

**Tahap 4 — Generasi Alternatif Desain.** Buat 3–5 konsep alternatif yang mengusulkan pengurangan komponen, penggunaan material berbeda, atau simplifikasi geometri.

**Tahap 5 — Evaluasi Kuantitatif Alternatif.** Hitung ulang $\eta_{DFA}$ dan $\eta_{DFM}$ untuk setiap alternatif, serta lakukan analisis sensitivitas terhadap variasi volume produksi.

**Tahap 6 — Seleksi Desain Optimal.** Gunakan *decision matrix* berbobot untuk memilih alternatif dengan skor DFMA tertinggi, mempertimbangkan juga kendala teknis seperti kemampuan mesin yang tersedia dan kapasitas produksi.

**Tahap 7 — Validasi Prototipe.** Buat prototipe fisik, lakukan uji fungsi, dan verifikasi parameter aktual versus prediksi teoritis.

Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) menambahkan satu langkah krusial yang relevan untuk aplikasi DFMA pada proyek konstruksi: **integrasi dengan BIM (Building Information Modelling) pada tahap konseptual dan preliminary design**. SOP yang diajukannya adalah: (a) bangun model BIM parametrik dengan *Level of Development* (LOD) 200–300; (b) ekstrak informasi manufacturability dari model (dimensi, volume, jumlah sambungan, lokasi pengangkatan); (c) input informasi ke dalam *multi-criteria evaluation framework*; (d) lakukan *trade-off analysis* antara kriteria struktural, biaya, dan DfMA; (e) pilih alternatif terbaik sebelum desain dibekukan (*frozen design*).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi kuantitatif, kita rekonstruksi skenario redesain *coffee enema basket* dengan parameter industri hipotetis yang representatif.

### 4.1 Baseline Desain Awal

| Parameter | Nilai Awal |
|-----------|------------|
| Jumlah bagian $N_a$ | 14 bagian |
| $N_{min}$ (target Boothroyd) | 4 bagian |
| $t_a$ (waktu perakitan aktual) | 480 detik |
| $t_{min}$ (target) | 120 detik |
| Biaya material | Rp 18.500/unit |
| Biaya pemotongan (3 operasi laser) | Rp 12.000/unit |
| Biaya pengelasan (8 titik las) | Rp 16.000/unit |
| Biaya finishing & QC | Rp 6.500/unit |
| Total biaya manufaktur | Rp 53.000/unit |

**Perhitungan DFA baseline:**

$$\eta_{DFA}^{(0)} = \frac{4 \times 120}{14 \times 480} \times 100\% = \frac{480}{6720} \times 100\% = 7.14\%$$

Angka ini mengindikasikan inefisiensi perakitan yang sangat tinggi—hanya 7,14% dari potensi maksimal.

**Perhitungan DFM baseline** dengan target biaya ideal Rp 30.000/unit:

$$\eta_{DFM}^{(0)} = \frac{30.000}{53.000} \times 100\% = 56.60\%$$

### 4.2 Desain Alternatif 1 — Integrasi Komponen

Menggabungkan 5 komponen terpisah menjadi 2 komponen *laser-cut-and-bent single piece*, menghilangkan 6 *fastener* dan 4 sambungan las:

| Parameter | Nilai Alternatif 1 |
|-----------|--------------------|
| Jumlah bagian $N_a$ | 6 bagian |
| $t_a$ | 200 detik |
| Biaya material | Rp 21.000/unit |
| Biaya pemotongan (1 operasi laser) | Rp 4.000/unit |
| Biaya pengelasan (2 titik las) | Rp 4.000/unit |
| Biaya finishing & QC | Rp 3.000/unit |
| Total biaya manufaktur | Rp 32.000/unit |

$$\eta_{DFA}^{(1)} = \frac{4 \times 120}{6 \times 200} \times 100\% = \frac{480}{1200} \times 100\% = 40.0\%$$

$$\eta_{DFM}^{(1)} = \frac{30.000}{32.000} \times 100\% = 93.75\%$$

### 4.3 Desain Alternatif