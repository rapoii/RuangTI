# 1855 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS – Universal Proceedings Series)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan dan wellness di Indonesia, termasuk perangkat terapi komplementer seperti *coffee enema kit*, mengalami peningkatan permintaan yang signifikan seiring dengan meningkatnya kesadaran masyarakat terhadap metode detoksifikasi alternatif. Komponen kritis dari perangkat ini adalah *basket* (keranjang saringan) yang berfungsi menampung bubuk kopi sambil memungkinkan ekstraksi cair melewati media filtrasi. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Universal Proceedings Series* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain keranjang konvensional masih memiliki kelemahan struktural dan ekonomis yang substansial, antara lain: jumlah komponen yang berlebihan, proses perakitan manual yang kompleks, pemilihan material yang suboptimal, serta tingkat reject yang tinggi pada tahap quality control.

Urgensi redesain ini bersifat multidimensional. Pertama, dari perspektif **biaya produksi**, akumulasi biaya material, biaya perkakas, dan biaya tenaga kerja perakitan dapat menurunkan margin keuntungan UMKM manufaktur alat kesehatan hingga 15–25%. Kedua, dari perspektif **kualitas dan keamanan pasien**, desain yang rumit meningkatkan risiko *human error* saat perakitan, kontaminasi silang, dan kegagalan fungsi filtrasi yang dapat membahayakan pengguna. Ketiga, dari perspektif **keberlanjutan**, metode Design for Manufacture and Assembly (DFMA) terbukti mampu mengurangi limbah material hingga 30% dan konsumsi energi produksi hingga 20% pada studi-studi manufaktur menengah (Islam, 2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)).

Konteks persaingan global juga memaksa pelaku industri kecil-menengah di Indonesia untuk mengadopsi metodologi rekayasa yang lebih sistematis. Pendekatan DFMA yang diperkenalkan oleh Boothroyd dan Dewhurst sejak 1980-an dan terus berkembang hingga integrasinya dengan Building Information Modeling (BIM) dalam proyek infrastruktur prefabrikasi (Islam, 2024), kini menjadi kerangka kerja standar untuk menilai kelayakan desain secara holistik sejak fase konseptual. Dalam konteks *coffee enema basket*, penerapan DFMA memungkinkan insinyur untuk secara simultan mengevaluasi aspek manufacturability (keterpabrikkan), assemblyability (keterpasangan), dan fungsi klinis produk, sehingga dihasilkan desain yang optimal baik secara teknis maupun ekonomis.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA mengintegrasikan dua subdisiplin utama, yaitu **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Pendekatan kuantitatif yang digunakan oleh Amirullah dan Jakaria (2024) bersandar pada metodologi Boothroyd-Dewhurst dengan beberapa formulasi dasar berikut.

**2.1 Indeks Desain untuk Perakitan (Design for Assembly Index)**

Indeks efisiensi perakitan didefinisikan sebagai rasio antara jumlah minimum teoritis komponen terhadap jumlah aktual, dikalikan dengan rasio waktu perakitan aktual terhadap waktu minimum teoritis:

$$\eta_{DFA} = \frac{N_{min}^{teo}}{N_{aktual}} \times \frac{t_{min}^{teo}}{t_{aktual}} \times 100\%$$

di mana $N_{min}^{teo}$ adalah jumlah minimum teoritis komponen yang harus ada agar produk berfungsi, $N_{aktual}$ adalah jumlah komponen aktual pada desain, $t_{min}^{teo}$ adalah waktu perakitan minimum teoritis, dan $t_{aktual}$ adalah waktu perakitan aktual yang diamati. Nilai $\eta_{DFA}$ mendekati 100% menunjukkan desain yang sangat efisien.

**2.2 Estimasi Waktu Perakitan (Boothroyd-Dewhurst)**

Total waktu perakitan dihitung dengan menjumlahkan waktu penanganan (*handling time*) dan waktu penyisipan (*insertion time*) untuk setiap komponen:

$$T_a = \sum_{i=1}^{n} \left( t_{h,i} + t_{i,i} \right)$$

dengan $t_{h,i} = A_i \cdot B_i$ adalah waktu penanganan, di mana $A_i$ adalah faktor kesulitan penanganan (0,5–1,8 detik) dan $B_i$ adalah faktor pengali berdasarkan orientasi penyisipan. Untuk komponen dengan simetri putar penuh (*rotational symmetry*), $B_i = 1,0$; tanpa simetri, $B_i = 1,5$ hingga 2,0.

**2.3 Biaya Manufaktur Total**

Biaya manufaktur total per unit produk diformulasikan sebagai:

$$C_{total} = C_{material} + C_{proses} + C_{finishing} + C_{overhead} + C_{asuransi}$$

di mana:
$$C_{material} = m \cdot \rho \cdot p_{material}$$
$$C_{proses} = \sum_{j=1}^{k} t_{proses,j} \cdot c_{mesin,j} \cdot (1 + s_{scr})$$

dengan $m$ adalah massa komponen (kg), $\rho$ adalah densitas material (kg/m³), $p_{material}$ adalah harga material per satuan massa, $t_{proses,j}$ adalah waktu proses operasi ke-$j$, $c_{mesin,j}$ adalah tarif mesin (Rp/jam), dan $s_{scr}$ adalah faktor scrap (5–15%).

**2.4 Fungsi Utilitas Multi-Atribut**

Dalam kerangka evaluasi multi-kriteria sebagaimana diterapkan Islam (2024) untuk proyek jembatan prefabrikasi, utilitas desain total dapat dinyatakan sebagai:

$$U_{total} = \sum_{k=1}^{K} w_k \cdot u_k(x_k)$$

dengan $w_k$ adalah bobot kriteria ke-$k$ ($\sum w_k = 1$), $u_k(x_k)$ adalah fungsi utilitas ternormalisasi (0–1) untuk atribut $x_k$ seperti biaya, berat, waktu perakitan, dan kemampuan manufacturability. Bobot tipikal untuk DfMA: $w_{biaya} = 0,35$, $w_{waktu} = 0,25$, $w_{manufaktur} = 0,25$, $w_{fungsi} = 0,15$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA untuk redesain keranjang coffee enema mengikuti prosedur operasional standar enam tahap sebagai berikut:

**Tahap 1 – Analisis Desain Eksisting.** Lakukan *disassembly analysis* pada produk原型 untuk menginventarisasi seluruh komponen, metode penyambungan, dan urutan perakitan. Dokumentasikan waktu setiap operasi menggunakan *stopwatch study* dengan minimal 30 siklus pengamatan.

**Tahap 2 – Perhitungan Baseline DFA.** Hitung $N_{aktual}$, $T_a$, dan $\eta_{DFA}$ pada desain lama sebagai titik referensi (*baseline*). Untuk keranjang coffee enema konvensional, data tipikal yang dilaporkan Amirullah dan Jakaria (2024) mencakup 7–9 komponen dengan total waktu perakitan 240–320 detik.

**Tahap 3 – Eliminasi dan Konsolidasi Komponen.** Terapkan *questioning technique* Boothroyd-Dewhurst: (i) Apakah komponen bergerak relatif terhadap komponen lain saat operasi? (ii) Apakah komponen harus berupa material berbeda? (iii) Apakah komponen harus dipisahkan untuk perakitan/pemeliharaan? Jika ketiga pertanyaan jawabannya "tidak", maka komponen tersebut layak diintegrasikan.

**Tahap 4 – Redesain Geometri.** Gunakan prinsip *design for injection molding* dan *snap-fit* untuk mengonsolidasikan komponen. Untuk keranjang coffee enema, transformasi dari desain baut-keling ke *one-piece snap-fit* dengan fitur *living hinge* dapat menurunkan jumlah komponen hingga 50%.

**Tahap 5 – Validasi Manufaktur.** Lakukan *Design for Manufacture* check meliputi: *draft angle* (minimal 1° untuk plastik), *uniform wall thickness* (rasio maksimal 3:1), *radius fillet* yang memadai, dan *undercut* yang dapat dikeluarkan (*side-action* atau *lifted core*).

**Tahap 6 – Prototipe dan Pengujian Fungsi.** Buat prototipe menggunakan *rapid prototyping* (3D printing FDM/PLA) kemudian cetak injeksi untuk validasi. Uji fungsi filtrasi, kapasitas tampung, dan *burst strength*.

Diagram alir proses mengikuti logika **DFMA Concurrent Engineering Loop**:

```
[Definisis Fungsi] → [Konsep Desain] → [Analisis DFA] → [Analisis DFM]
        ↑                                                      ↓
[Validasi & Uji] ← [Prototipe] ← [Seleksi Material] ← [Optimasi Geometri]
```

Pendekatan ini selaras dengan kerangka BIM-DfMA yang dikembangkan Islam (2024) untuk proyek infrastruktur prefabrikasi, di mana evaluasi multi-kriteria dilakukan secara iteratif sejak fase konseptual.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Data Input Desain Eksisting (berdasarkan tipikal produk UMKM alat kesehatan Indonesia):**
- Jumlah komponen: $N_{aktual} = 8$ buah (badan keranjang, tutup atas, tutup bawah, 4 ring pengunci, 1 saringan stainless)
- Material: Stainless steel 304 (saringan) + Polypropylene (badan)
- Massa total: $m = 145$ gram
- Waktu perakitan aktual: $T_{a, lama} = 285$ detik
- Biaya material per unit: $C_{mat, lama} = Rp 18.500$
- Biaya proses (cetak injeksi + sheet metal): $C_{proses, lama} = Rp 12.000$
- Overhead (15%): $C_{OH, lama} = Rp 4.575$
- Total biaya per unit: $C_{total, lama} = Rp 35.075$

**Desain Baru Hasil Redesain DFMA:**
- $N_{aktual, baru} = 4$ (badan one-piece, tutup snap-fit, saringan terintegrasi, ring penahan)
- Material: PP food-grade dengan reinforcement 20% talc
- Massa total: $m_{baru} = 98$ gram (turun 32,4%)
- Waktu perakitan: $T_{a, baru} = 142$ detik (turun 50,2%)

**Perhitungan Langkah-demi-Langkah:**

**(1) Indeks DFA Desain Lama:**
$$\eta