# 1951 — Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri perangkat kesehatan rumah tangga dan produk wellness global tengah mengalami transformasi signifikan yang dipicu oleh meningkatnya permintaan pasar akan perangkat yang aman, higienis, ekonomis, dan mudah diproduksi secara massal. Salah satu produk spesifik yang menjadi perhatian riset rekayasa produk adalah *coffee enema basket*—sebuah komponen fungsional yang digunakan untuk menampung ampas kopi pada prosedur hidroterapi kolon. Meskipun produk ini berada pada ceruk pasar kesehatan alternatif, prinsip-prinsip desain yang melandasinya memiliki kemiripan dengan perangkat medis invasif terbatas lainnya, sehingga membutuhkan pendekatan rekayasa yang ketat terhadap aspek manufactureability, cleanability, dan assembly efficiency.

Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengidentifikasi bahwa desain konvensional *coffee enema basket* masih mengandalkan multi-part construction dengan pengelasan, penguncian ulir, dan komponen fastener terpisah yang meningkatkan kompleksitas perakitan, waktu produksi, serta biaya total. Hasil identifikasi awal menunjukkan bahwa desain eksisting memiliki lebih dari 12 komponen diskrit dengan tiga titik pengelasan dan satu mekanisme ulir, sehingga indeks perakitan manual menjadi rendah dan potensi cacat produksi cukup tinggi. Lebih lanjut, pemilihan material stainless steel grade 304 pada seluruh struktur dinilai kurang optimal karena mengabaikan prinsip material selection berbasis fungsi lokal, di mana bagian yang kontak langsung dengan介质咖啡 tidak memerlukan kekuatan struktural sebesar dudukan (bracket) luar.

Urgensi redesain ini juga didorong oleh tekanan kompetitif pasar. Pemain usaha kecil-menengah di sektor alat kesehatan membutuhkan produk dengan *bill of materials* (BoM) yang ramping agar *tooling cost* dapat ditekan dan *lead time* produksi massal dapat dipercepat. Pada tataran yang lebih luas, Mubashir Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam kerangka evaluasi jembatan prefabrikasi berbasis BIM-DfMA menegaskan bahwa keputusan desain yang tidak mempertimbangkan manufacturability sejak fase konseptual akan menghasilkan *rework cost* yang signifikan ketika desain sudah difinalisasi dan mould sudah dipotong. Meskipun domainnya berbeda (jembatan prefabrikasi vs. alat kesehatan), analogi strukturalnya sangat relevan: *late-stage design changes* jauh lebih mahal daripada *front-loaded design optimization* melalui DfMA.

Konteks industri yang melatarbelakangi modul ini juga mencakup kepatuhan terhadap regulasi. Untuk produk yang masuk kategori alat kesehatan, standar seperti ISO 13485 (sistem mutu alat kesehatan), ISO 14971 (manajemen risiko), dan regulasi FDA 21 CFR Part 820 menjadi acuan wajib. Redesain berbasis DfMA bukan sekadar upaya efisiensi biaya, melainkan juga strategi untuk memastikan *design freeze* yang aman secara regulasi sebelum memasuki fase produksi massal. Dengan demikian, modul ini membahas integrasi metodologi DfMA Boothroyd-Dewhurst yang telah dimodifikasi untuk konteks produk wellness medical, mencakup aspek material selection, part count reduction, simplification of assembly, dan cost modeling kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis DFMA yang digunakan dalam studi Amirullah dan Jakaria (2024) bersandar pada dua pilar utama: **Design for Assembly (DFA)** dan **Design for Manufacture (DFM)**. Pada pilar DFA, metrik yang dipakai adalah *Design Efficiency* dan *Assembly Time Index* yang diformulasikan oleh Boothroyd dan Dewhurst. Efisiensi desain dihitung dengan persamaan:

$$E_m = \frac{N_m \cdot t_{ma}}{N_m \cdot t_{ma} + N_n \cdot t_{nm}} \times 100\%$$

di mana $N_m$ adalah jumlah komponen minimal yang diperlukan untuk fungsi produk, $t_{ma}$ adalah waktu rata-rata perakitan manual per komponen (detik), $N_n$ adalah jumlah operasi non-assembly atau handling tambahan (penjepitan, pemutaran, inspeksi), dan $t_{nm}$ adalah waktu rata-rata operasi non-assembly. Nilai $E_m$ yang rendah (umumnya $< 50\%$) mengindikasikan bahwa desain memiliki banyak operasi tambahan yang tidak menambah nilai fungsional, sehingga merupakan kandidat utama untuk redesain.

Selanjutnya, **Manufacturing Cost Index (MCI)** dihitung sebagai:

$$MCI = \sum_{i=1}^{n} (C_{m,i} + C_{s,i} + C_{t,i})$$

di mana untuk setiap komponen $i$, $C_{m,i}$ adalah biaya material (Rp/satuan), $C_{s,i}$ adalah biaya operasi permesinan atau fabrikasi (Rp/satuan), dan $C_{t,i}$ adalah biaya tooling dan setup yang diamortisasi (Rp/satuan). Total biaya produksi satu unit kemudian dibandingkan antara desain eksisting dan desain usulan untuk mengkuantifikasi *cost saving ratio*:

$$\Delta C = \frac{C_{existing} - C_{proposed}}{C_{existing}} \times 100\%$$

Pada aspek DFA kuantitatif, digunakan juga **Boothroyd Handling Code** yang menghitung *minimum number of parts* dengan dua pertanyaan keputusan: (1) Apakah komponen bergerak relatif terhadap seluruh komponen lain selama operasi? (2) Apakah komponen harus terbuat dari material berbeda atau diproses secara terpisah? Jika kedua jawaban "tidak", maka komponen tersebut merupakan kandidat penggabungan (*part consolidation*).

Untuk mengkuantifikasi kualitas keputusan material selection, digunakan metode **weighted material index** dengan persamaan berbasis *Ashby chart* yang dimodifikasi:

$$M_i = w_1 \cdot P_i + w_2 \cdot C_i + w_3 \cdot H_i + w_4 \cdot B_i$$

di mana $P_i$, $C_i$, $H_i$, dan $B_i$ berturut-turut adalah skor properti mekanik (kekuatan, ketahanan korosi), skor biaya material per kg, skor hygienic/cleanability, dan skor bio-compatibility; dengan bobot $w_1 + w_2 + w_3 + w_4 = 1$ yang disesuaikan dengan prioritas aplikasi. Amirullah dan Jakaria (2024) menetapkan bobot $w_1 = 0{,}25$, $w_2 = 0{,}30$, $w_3 = 0{,}30$, $w_4 = 0{,}15$ yang merefleksikan prioritas biaya dan kebersihan setara di atas kekuatan mekanik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA pada redesain *coffee enema basket* mengikuti delapan tahapan SOP yang terstruktur, diadopsi dari kerangka Boothroyd-Dewhurst yang telah diadaptasi untuk produk manufaktur low-volume-medium-mix:

1. **Tahap 1 — Decomposisi Fungsi Produk:** Identifikasi fungsi primer (menampung ampas kopi, memungkinkan filtrasi larutan, tahan korosi, mudah dibersihkan) dan fungsi sekunder (estetika, branding, packaging compatibility).
2. **Tahap 2 — Pembuatan BoM Eksisting:** Kuantifikasi seluruh komponen, fastener, dan sub-assembly pada desain awal beserta waktu perakitan aktual.
3. **Tahap 3 — Aplikasi Handling Code:** Evaluasi setiap komponen dengan dua pertanyaan Boothroyd untuk menentukan kelayakan *part consolidation*.
4. **Tahap 4 — Analisis Material Selection:** Pembuatan matriks material kandidat (SS304, SS316, polypropylene food-grade, polikarbonat) menggunakan weighted material index $M_i$.
5. **Tahap 5 — Redesain Konseptual:** Penggambaran ulang 2D/3D dengan target part count reduction minimal 30% dan assembly time reduction minimal 40%.
6. **Tahap 6 — Validasi DFA Kuantitatif:** Hitung ulang $E_m$ dan bandingkan dengan desain eksisting.
7. **Tahap 7 — Cost Modeling:** Hitung MCI dan $\Delta C$ untuk setiap skenario desain.
8. **Tahap 8 — Prototyping & Verifikasi:** Pembuatan prototipe fisik, pengujian fungsional (uji filtrasi, uji beban, uji siklus pembersihan), dan validasi kepatuhan regulasi.

Arsitektur keputusan pada tahap 4 mengikuti diagram alir sebagai berikut. Dimulai dari *requirement specification*, kemudian masuk ke loop iteratif: *generate design alternative* → *apply DFA analysis* → *compute $E_m$* → *if $E_m \geq 70\%$ then proceed to manufacture analysis, else return to alternative generation*. Setelah analisis manufaktur, dilakukan *compute MCI* → *if MCI reduction $\geq 25\%$ then freeze design, else iterate material/process*. SOP ini menjamin bahwa keputusan *design freeze* diambil berdasarkan data kuantitatif, bukan intuisi subjektif, yang merupakan inti dari framework DfMA modern menurut Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif, dilakukan simulasi perhitungan berdasarkan parameter industri riil UMKM alat kesehatan di Surabaya dengan kapasitas produksi 2.000 unit/bulan. Desain eksisting (*baseline*) memiliki BoM sebagai berikut:

| No | Komponen | Material | Jumlah | $t_{ma}$ (detik) | $t_{nm}$ (detik) |
|----|----------|----------|--------|-----------------|------------------|
| 1 | Body basket | SS304 | 1 | 25 | 15 |
| 2 | Bottom screen | SS304 wire mesh | 1 | 18 | 10 |
| 3 | Top ring | SS304 | 1 | 12 | 8 |
| 4 | Handle bracket | SS304 | 2 | 8 | 5 |
| 5 | Handle grip | plastik ABS | 1 | 6 | 4 |
| 6 | Rivet/ulir pengunci | baja galvanis | 2 | 10 | 12 |

Total $N_m = 9$ komponen (minimum parts theoretical = 4), total $t_{ma} = 25+18+12+16+6+20 = 97$ detik, total $t_{nm} = 15+10+8+10+4+24 = 71$ detik. Efisiensi desain eksisting:

$$E_{m,existing} = \frac{9 \cdot 6 + 97}{9 \cdot 6 + 97 + 4 \cdot 71} \times 100\%$$

Dengan asumsi *theoretical minimum part time* = 6 detik dan $N_m^{min} = 4$, maka pembilang $= 4 \cdot 6 + 97 = 121$, penyebut $= 121 + 5 \cdot 71 = 476$. Hasilnya $E_{m,existing} \approx 25{,}4\%$, jauh di bawah ambang $70\%$ yang direkomendasikan.

Desain usulan mengintegrasikan body dan top ring menjadi satu komponen *deep-drawn*, menggunakan polypropylene food-grade (PP) untuk seluruh struktur dengan filter stainless steel 316L sebagai satu-satunya sisipan logam. BoM baru:

| No | Komponen | Material | Jumlah | $t_{ma}$ (detik) | $t_{nm}$ (detik) |
|----|----------|----------|--------|-----------------|------------------|
| 1 | Integrated body+ring | PP food-grade | 1 | 20 | 6 |
| 2 | Filter screen | SS316L mesh | 1 | 10 | 5 |
| 3 | Snap-fit handle | PP reinforced | 1 | 5 | 3 |

Total $t_{ma} = 35$ detik, $t_{nm} = 14$ detik, $N_m = 3$, $N_m^{min} = 3$. Efisiensi desain usulan:

$$E_{m,proposed} = \frac{3 \cdot 6 + 35}{3 \cdot 6 + 35 + 0 \cdot 14} \times 100\% = \frac{53}{53} = 100\%$$

dengan asumsi tidak ada operasi non-assembly tambahan (snap-fit eliminates secondary fastening). Cost modeling: biaya material eksisting per unit = Rp 28.500 (SS304 + ABS + fastener), biaya fabrikasi (las, bubut, finishing) = Rp 18.200, total MCI$_{existing}$ = Rp 46.700/unit. Desain usulan: biaya material = Rp 12.800 (PP + SS316L mesh), biaya injeksi molding + insert = Rp 9.500, total MCI$_{proposed}$ = Rp 22.300/unit. Dengan asumsi *tooling cost* molding Rp 35.000.000 diamortisasi atas 50.000 unit, biaya per unit turun menjadi Rp 22.300 + Rp 700 = Rp 23.000. Cost saving:

$$\Delta C = \frac{46.700 - 23.000}{46.700} \times 100\% \approx 50{,}7\%$$

Interpretasi manajerial: redesain menghasilkan efisiensi perakitan naik dari $25{,}4\%$ menjadi $100\%$ (peningkatan kualitas struktural), sekaligus menekan biaya produksi per unit hampir $51\%$. Pada volume produksi 24.000 unit/tahun, penghematan tahunan mencapai Rp 568.800.000, dengan payback period investasi molding hanya sekitar 3,7 bulan. Untuk konteks industri yang lebih besar, framework serupa dengan prinsip integrasi BIM-DfMA yang diajukan Islam (2024) menunjukkan bahwa keputusan DfMA yang diambil pada fase konseptual menghasilkan