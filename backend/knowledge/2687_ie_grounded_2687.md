# 2687 — Redesain Produk dengan Metode Design for Manufacture and Assembly (DFMA): Integrasi Evaluasi Multi-Kriteria untuk Optimasi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang semakin kompetitif, kemampuan untuk memproduksi suatu produk dengan biaya rendah, waktu perakitan singkat, serta kualitas konsisten menjadi penentu daya saing sebuah industri. Konsep *Design for Manufacture and Assembly* (DFMA) muncul sebagai pendekatan terintegrasi yang menyatukan dua dimensi kritis dalam siklus pengembangan produk, yaitu *Design for Manufacture* (DFM) yang mengoptimalkan desain untuk proses fabrikasi, dan *Design for Assembly* (DFA) yang meminimalkan kompleksitas perakitan. Amirullah dan Jakaria (2024) dalam penelitiannya yang berjudul *"Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method"* (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mendemonstrasikan aplikasi langsung DFMA pada kasus nyata di industri alat kesehatan tradisional, yaitu redesain keranjang *coffee enema*—sebuah perangkat terapi alternatif yang menggunakan saringan untuk ekstraksi kopi dalam prosedur medis rumahan. Produk ini awalnya didesain tanpa pertimbangan sistematis terhadap efisiensi pemotongan plat stainless steel, jumlah komponen, maupun arah perakitan, sehingga menghasilkan biaya produksi tinggi dan waktu perakitan yang lama.

Secara paralel, Mubashir Islam (2024) dalam paparannya di *Journal of Sustainable Development and Policy* (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperluas paradigma DFMA ke infrastruktur sipil melalui kerangka evaluasi berbasis *Building Information Modelling* (BIM) untuk konstruksi jembatan pracetak. Penulis menyoroti masalah mendasar bahwa pemilihan alternatif desain jembatan secara konvensional hanya didasarkan pada biaya dan kecukupan struktural, tanpa memasukkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi pada tahap konseptual. Akibatnya, permasalahan *buildability* baru teridentifikasi saat *shop-drawing* sudah jadi atau di lapangan, ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya tambah (*rework cost*) yang signifikan. Kedua penelitian ini—walaupun pada skala produk yang berbeda—menunjukkan urgensi integrasi pertimbangan manufaktur dan perakitan ke dalam tahap awal desain, sehingga keputusan rekayasa dapat diambil secara *informed* sebelum *commitment* material dan proses dilakukan.

Konteks industri saat ini, terutama di Indonesia, menunjukkan kebutuhan mendesak akan adopsi DFMA. UMKM manufaktur logam di Indonesia rata-rata masih beroperasi dengan desain warisan (*legacy design*) yang tidak dioptimasi, sehingga menghadapi *cost overrun* 15–30% dibanding benchmark internasional. Sementara itu, proyek infrastruktur nasional yang didorong program pemerintah melalui *infrastructure push* memerlukan kerangka keputusan yang mampu menyeimbangkan empat kriteria utama: biaya, kualitas struktural, kelayakan manufaktur, dan efisiensi logistik konstruksi. Integrasi DFMA dengan teknologi digital seperti BIM menjadi sangat relevan untuk menjawab tantangan ini.

## 2. Landasan Teori & Formulasi Matematis

DFMA merupakan gabungan sistematis dua metodologi yang masing-masing memiliki formulasi kuantitatif. Metode DFA klasik yang diperkenalkan oleh Boothroyd dan Dewhurst menggunakan konsep *Design Efficiency* sebagai berikut:

$$\eta_{DFA} = \frac{N_{\min} \cdot t_{\min}}{N_a \cdot t_a} \times 100\%$$

di mana $N_{\min}$ adalah jumlah minimum teoritis komponen (berdasarkan fungsi esensial produk), $t_{\min}$ adalah waktu minimum perakitan teoritis per komponen, $N_a$ adalah jumlah aktual komponen dalam desain, dan $t_a$ adalah waktu aktual perakitan. Nilai $\eta_{DFA} = 100\%$ menunjukkan desain yang optimal secara teoretis.

Untuk dimensi *Design for Manufacture*, indeks kemampuan fabrikasi diformulasikan sebagai:

$$C_{\text{manuf}} = \sum_{i=1}^{n} \left( \alpha_i \cdot C_{m,i} + \beta_i \cdot T_{m,i} + \gamma_i \cdot S_{m,i} \right)$$

dengan $C_{m,i}$ adalah biaya material dan operasi pada komponen ke-$i$, $T_{m,i}$ adalah waktu fabrikasi, $S_{m,i}$ adalah skor komplekitas proses, sedangkan $\alpha_i$, $\beta_i$, $\gamma_i$ masing-masing adalah bobot yang ditentukan melalui *expert judgment* atau AHP, dengan kendala $\alpha_i + \beta_i + \gamma_i = 1$.

Sementara itu, Islam (2024) mengusulkan kerangka *multi-criteria evaluation* dengan skor gabungan sebagai berikut:

$$S_{\text{total}} = \sum_{j=1}^{k} w_j \cdot s_j$$

di mana $w_j$ adalah bobot kriteria ke-$j$ (misalnya biaya, struktur, manufaktur, transportasi, ereksi), $s_j$ adalah skor ternormalisasi (0–1) hasil penilaian, dan $\sum w_j = 1$. Pembobotan dapat dilakukan dengan metode *Analytic Hierarchy Process* (AHP) yang memenuhi *consistency ratio* $CR < 0{,}10$.

Untuk estimasi total biaya manufaktur-perakitan yang digunakan dalam studi kasus, formulasi *activity-based costing* relevan:

$$TC = \sum_{i=1}^{n} \left( M_i + L_i + O_i + A_i + OH_i \right)$$

dengan $M_i$ adalah biaya material, $L_i$ adalah biaya tenaga kerja langsung, $O_i$ adalah biaya overhead operasi, $A_i$ adalah biaya perakitan, dan $OH_i$ adalah biaya overhead pabrik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA mengikuti prosedur terstruktur yang dapat distandarkan sebagai SOP industri. Amirullah dan Jakaria (2024) melaksanakan tahapan sebagai berikut:

**Tahap 1 — Analisis Fungsi Produk.** Definisikan fungsi primer (misalnya: menyaring partikel kopi, menahan suhu, mencegah kebocoran) dan fungsi sekunder. Setiap komponen dievaluasi terhadap kebutuhan fungsional melalui pertanyaan: *"Apakah komponen ini benar-benar esensial, ataukah hanya menambah kompleksitas?"*

**Tahap 2 — Penghitungan Baseline DFA.** Hitung $\eta_{DFA}$ desain eksisting sebagai *baseline*.

**Tahap 3 — Reduksi Komponen.** Eliminasi komponen redundan melalui prinsip *combine, integrate, simplify*. Dua komponen yang berfungsi pada lokasi berdekatan dapat digabung menjadi satu *multi-functional part*.

**Tahap 4 — Optimasi Geometri.** Modifikasi dimensi agar sesuai dengan standar stok material (misalnya plat stainless steel 304 dengan tebal 1,5 mm dan 2 mm), serta pilih proses fabrikasi yang paling efisien (las TIG vs. bending CNC).

**Tahap 5 — Redesain untuk Arah Assembly.** Pastikan setiap komponen dapat dimasukkan dari satu arah (*Z-axis assembly*) tanpa perlu memutar atau memposisikan ulang (*no reorientation*).

**Tahap 6 — Validasi Prototipe dan Penghitungan Ulang $\eta_{DFA}$.** Bandingkan efisiensi sebelum-sesudah.

Untuk kerangka BIM-DfMA yang diajukan Islam (2024), SOP yang disesuaikan adalah sebagai berikut:

1. **Pemodelan Parametrik BIM** — buat model parametric dengan *Level of Development* (LOD) 300–350 yang memuat informasi dimensi, material, dan metode koneksi.
2. **Ekstraksi Data Manufaktur** — tarik *bill of quantity*, volume beton, dan jumlah segmen pracetak langsung dari model.
3. **Penilaian Multi-Kriteria** — skor setiap alternatif pada kriteria biaya (C), struktural (S), manufaktur (M), transportasi (T), dan ereksi (E).
4. **Pembobotan AHP** — tentukan bobot $w_C$, $w_S$, $w_M$, $w_T$, $w_E$ dengan validasi konsistensi.
5. **Agregasi Skor dan Pengambilan Keputusan** — hitung $S_{\text{total}}$ dan pilih alternatif optimum.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mendemonstrasikan kuantifikasi DFMA secara realistis, dilakukan simulasi redesain coffee enema basket. Desain eksisting menggunakan 7 komponen utama (badan saringan, tutup, pegangan, klem, sekrup, ring, gasket) dengan waktu perakitan aktual 480 detik per unit. Desain minimal secara teoretis hanya membutuhkan 3 komponen dengan waktu 90 detik.

**Penghitungan $\eta_{DFA}$ Desain Eksisting (Amirullah & Jakaria, 2024):**

$$\eta_{DFA,0} = \frac{N_{\min} \cdot t_{\min}}{N_a \cdot t_a} \times 100\% = \frac{3 \cdot 90}{7 \cdot 480} \times 100\% = \frac{270}{3360} \times 100\% \approx 8{,}04\%$$

**Setelah Redesain (desain usulan menjadi 4 komponen dengan waktu perakitan 220 detik):**

$$\eta_{DFA,1} = \frac{3 \cdot 90}{4 \cdot 220} \times 100\% = \frac{270}{880} \times 100\% \approx 30{,}68\%$$

Terjadi peningkatan efisiensi hampir 4 kali lipat. Jika biaya tenaga kerja perakitan diasumsikan Rp 2.500/detik (gabungan TKI dan overhead), maka *saving* per unit:

$$\Delta C = (t_a - t_{a,1}) \cdot L = (480 - 220) \cdot 2.500 = \text{Rp } 650.000 \text{ per unit}$$

Untuk produksi batch 1.000 unit per bulan, *saving* tahunan mencapai Rp 7,8 miliar.

**Contoh Perhitungan Skor Multi-Kriteria Jembatan (berdasarkan kerangka Islam, 2024):**

Misal terdapat tiga alternatif desain jembatan pracetak dengan skor ternormalisasi pada kriteria sebagai berikut:

| Kriteria | Bobot $w_j$ | Alt. A | Alt. B | Alt. C |
|---|---|---|---|---|
| Biaya (C) | 0,30 | 0,80 | 0,65 | 0,75 |
| Struktural (S) | 0,25 | 0,70 | 0,85 | 0,80 |
| Manufaktur (M) | 0,20 | 0,60 | 0,75 | 0,90 |
| Transportasi (T) | 0,15 | 0,50 | 0,70 | 0,85 |
| Ereksi (E) | 0,10 | 0,55 | 0,60 |