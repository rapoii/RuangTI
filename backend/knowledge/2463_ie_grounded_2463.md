# 2463 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Perakitan Alat Kesehatan Alternatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS - Universitas Prasetiya Mulya Sustainability)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan alternatif dan wellness therapy mengalami pertumbuhan signifikan secara global, dengan salah satu produk tradisional yang kembali populer ialah *coffee enema kit* — perangkat yang digunakan dalam terapi detoksifikasi kolon dengan memanfaatkan infus kafein dan senyawa palmitat dari kopi. Salah satu komponen paling kritis dari perangkat ini ialah **basket (keranjang saringan kopi)** yang berfungsi menahan bubuk kopi sekaligus memungkinkan ekstraksi senyawa aktif secara optimal oleh air panas. Amirullah dan Jakaria (2024) dalam tulisannya di jurnal *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengidentifikasi bahwa desain basket konvensional memiliki permasalahan struktural dan ekonomis yang substansial, antara lain: jumlah komponen yang berlebihan, proses perakitan manual yang kompleks, pemilihan material yang tidak optimal, serta biaya produksi yang tinggi sehingga menghambat skalabilitas manufaktur.

Urgensi operasional dari penelitian ini muncul dari tiga faktor simultan. Pertama, dari perspektif **ekonomi produksi**, desain awal yang multi-komponen meningkatkan *bill of materials* (BoM) dan waktu perakitan, menurunkan margin keuntungan produsen UMKM alat kesehatan. Kedua, dari perspektif **keselamatan pasien**, setiap tambahan sambungan mekanis (mechanical joint) pada komponen yang bersentuhan dengan cairan panas tubuh представляет potensi risiko *biofouling*, *leaching*, dan kegagalan struktural. Ketiga, dari perspektif **kepatuhan regulasi**, standar alat kesehatan (misalnya ISO 13485, FDA 21 CFR Part 820, dan SNI IEC 60601 untuk perangkat elektromedis) mensyaratkan *design control* dan *design verification* yang ketat — yang sulit dipenuhi oleh desain dengan banyak *fastener* dan sambungan sulit dibersihkan.

Studi ini menjadi semakin relevan ketika disandingkan dengan penelitian Islam (2024) yang diterbitkan di *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), yang menunjukkan bahwa pendekatan **Design for Manufacture and Assembly (DfMA) yang diintegrasikan dengan Building Information Modelling (BIM)** pada konstruksi jembatan pracetak berhasil meningkatkan kualitas keputusan desain pada tahap konseptual. Islam menekankan bahwa keputusan desain yang hanya didasarkan pada biaya dan kecukupan struktural, tanpa pertimbangan manufaktur, transportasi, pengangkatan, dan ereksi, akan menghasilkan *buildability problem* yang baru terungkap pada tahap *shop-drawing* atau di lapangan — ketika koreksi sudah sangat mahal. Paralelisme dengan kasus coffee enema basket sangat kuat: keputusan material dan geometris yang diambil tanpa pertimbangan *manufacturability* dan *assemblability* akan menghasilkan produk dengan biaya tinggi, sulit dirakit, dan tidak higienis. Amirullah dan Jakaria (2024) merespons tantangan ini dengan mengajukan metodologi DFMA yang sistematis untuk mereduksi kompleksitas desain sambil mempertahankan fungsionalitas filtrasi dan keamanan pengguna.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) dibangun di atas tiga pilar kuantitatif utama: **Design Efficiency (DE)**, **Assembly Efficiency (AE)**, dan **Total Cost Analysis (TCA)**.

### 2.1 Design Efficiency (DE)

Design Efficiency mengukur rasio antara jumlah minimum part yang secara fungsional diperlukan terhadap jumlah aktual part dalam desain:

$$DE = \frac{N_m}{N_t} \times 100\%$$

di mana:
- $N_m$ = jumlah minimum part yang diperlukan secara fungsional (minimum number of parts)
- $N_t$ = jumlah aktual part dalam desain (total number of parts)

Kriteria part yang masih diperlukan menurut Boothroyd-Dewhurst hanya jika part tersebut: (1) harus bergerak relatif terhadap part lain, (2) memerlukan material berbeda, atau (3) harus dapat dibongkar-pasang (disassembly) untuk keperluan servis. Aturan praktisnya: $DE \geq 60\%$ mengindikasikan desain yang efisien.

### 2.2 Assembly Efficiency (AE)

Assembly Efficiency mengukur proporsi biaya atau waktu yang benar-benar menghasilkan *value-added operation* terhadap total operasi perakitan:

$$AE = \frac{N_m \cdot t_{va}}{T_{ma}} \times 100\%$$

di mana:
- $N_m$ = jumlah minimum part
- $t_{va}$ = rata-rata waktu operasi *value-added* per part (detik)
- $T_{ma$ = total waktu assembly manual (detik), yang merupakan jumlah dari:

$$T_{ma} = \sum_{i=1}^{N_t} (t_i + t_{hi})$$

dengan $t_i$ = waktu operasi handling/insertion/fastening untuk part ke-$i$, dan $t_{hi}$ = waktu *handling* (pengambilan, orientasi, penempatan) part ke-$i$.

### 2.3 Total Production Cost (TPC)

Biaya total produksi per unit dihitung menggunakan model *activity-based costing* yang disederhanakan:

$$C_{total} = C_m + C_p + C_a + C_q + C_{oh}$$

di mana:
- $C_m$ = biaya material = $\sum_{j=1}^{N_t} (m_j \cdot p_j)$, dengan $m_j$ massa part ke-$j$ dan $p_j$ harga material per kg
- $C_p$ = biaya proses manufaktur (termasuk *tooling depreciation*)
- $C_a$ = biaya perakitan = $T_{ma} \cdot L_r$, dengan $L_r$ = *labor rate* (Rp/detik)
- $C_q$ = biaya inspeksi kualitas
- $C_{oh}$ = *overhead* (alokasi tetap)

### 2.4 Multi-Criteria Decision Framework (Pendukung)

Mengacu pada kerangka Islam (2024) untuk evaluasi multi-kriteria, kita dapat menggunakan metode **Weighted Sum Model (WSM)** untuk menilai trade-off desain:

$$S_i = \sum_{k=1}^{K} w_k \cdot r_{ik}$$

di mana $S_i$ = skor desain alternatif ke-$i$, $w_k$ = bobot kriteria ke-$k$ (dengan $\sum w_k = 1$), dan $r_{ik}$ = rating ternormalisasi desain ke-$i$ pada kriteria ke-$k$. Kriteria yang relevan untuk coffee enema basket meliputi: biaya produksi, waktu perakitan, kemampuan dibersihkan (*cleanability*), keamanan material, dan estetika.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam tujuh tahapan sistematis berikut, yang merupakan adaptasi prosedur Boothroyd-Dewhurst untuk konteks produk alat kesehatan skala kecil-menengah:

### Tahap 1 — Analisis Desain Eksisting (*Baseline Assessment*)
Mendokumentasikan desain awal menggunakan *engineering drawing*, identifikasi seluruh komponen, klasifikasi material, dan pengukuran waktu perakitan aktual menggunakan *stopwatch time study* dengan minimal 30 siklus pengamatan (sesuai standar ILO untuk *work measurement*).

### Tahap 2 — Perhitungan Metrik Baseline
Menghitung $DE_{baseline}$, $AE_{baseline}$, dan $C_{total,baseline}$ menggunakan rumus pada Bagian 2 sebagai titik acuan komparatif.

### Tahap 3 — Aplikasi Aturan Minimisasi Part
Menerapkan tiga pertanyaan Boothroyd-Dewhurst pada setiap part: (1) Apakah part harus bergerak? (2) Apakah part harus berbeda materialnya? (3) Apakah part harus dilepas saat servis? Jika ketiga jawaban "tidak", part dapat di-*merge* (digabung).

### Tahap 4 — Rekayasa Ulang Geometris (*Geometric Redesign*)
Menggunakan software CAD (SolidWorks/Autodesk Inventor) untuk memodifikasi geometri dengan tetap memenuhi constraint fungsional: luas filtrasi minimum, kapasitas tampung bubuk kopi, dan tekanan hidrostatik maksimum yang mampu ditahan tanpa deformasi plastis.

### Tahap 5 — Analisis Elemen Hingga (FEA) untuk Validasi Struktural
Melakukan simulasi *Finite Element Analysis* pada kandidat desain untuk memvalidasi distribusi tegangan von Mises:

$$\sigma_{vm} = \sqrt{\frac{(\sigma_1-\sigma_2)^2 + (\sigma_2-\sigma_3)^2 + (\sigma_3-\sigma_1)^2}{2}}$$

dengan constraint $\sigma_{vm} \leq \sigma_{yield}/n$, di mana $n$ adalah *factor of safety* (umumnya $n \geq 2$ untuk alat kesehatan).

### Tahap 6 — Pembuatan Prototipe dan Validasi
Membangun prototipe menggunakan *3D printing* (PLA/PETG untuk validasi geometris) atau *injection molding* singkat, kemudian mengukur ulang waktu perakitan dan menghitung metrik baru $DE_{new}$, $AE_{new}$, dan $C_{total,new}$.

### Tahap 7 — Analisis Trade-off dan Finalisasi
Menggunakan matriks Pugh atau WSM (lihat Bagian 2.4) untuk memilih desain final yang optimal terhadap kriteria multi-aspek.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan replikasi metodologis paper Amirullah dan Jakaria (2024), disajikan studi kasus hipotetis-kuantitatif berikut untuk coffee enema basket produksi UMKM X di Indonesia.

### 4.1 Data Input Desain Eksisting

| Parameter | Nilai |
|-----------|-------|
| Jumlah part desain awal ($N_t$) | 12 part (cincin atas, cincin bawah, 8 jeruji saringan, kawat pengikat, handle) |
| Jumlah part minimum fungsional ($N_m$ estimasi) | 4 part |
| Material awal | Stainless steel 304 mesh + rangka aluminium |
| Massa total per unit | 185 gram |
| Waktu perakitan aktual ($T_{ma}$) | 240 detik |
| Throughput produksi | 120 unit/hari |
| *Labor rate* ($L_r$) | Rp 150/detik |
| Harga jual ritel | Rp 185.000/unit |

### 4.2 Perhitungan Metrik Baseline

**Design Efficiency Baseline:**
$$DE_{baseline} = \frac{N_m}{N_t} \times 100\% = \frac{4}{12} \times 100\% = 33{,}3\%$$

Nilai ini jauh di bawah standar minimal DFMA (60%), mengonfirmasi inefisiensi desain.

**Assembly Efficiency Baseline:**
Dengan asumsi $t_{va} = 4$ detik (operasi per part yang *value-added* seperti pengelasan/penjepitan):
$$AE_{baseline} = \frac{N_m \cdot t_{va}}{T_{ma}} \times 100\% = \frac{4 \times 4}{240} \times 100\% = 6{,}67\%$$

Artinya, 93,33% waktu perakitan adalah *non-value-added* (penanganan, orientasi, inspeksi manual).

**Biaya Material Baseline:**
Misalkan harga SS 304 = Rp 85.000/kg dan aluminium = Rp 45.000/kg, dengan komposisi 80% SS mesh dan 20% rangka aluminium:
$$C_m = (0{,}148 \text{ kg} \times 85.000) + (0{,}037 \text{ kg} \times 45.000) = 12.580 + 1.665 = \text{Rp } 14.245$$

**Biaya Perakitan Baseline:**
$$C_a = T_{ma} \cdot L_r = 240 \text{ detik} \times 150 = \text{Rp