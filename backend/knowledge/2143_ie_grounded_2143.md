# 2143 — Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Optimasi Manufaktur, Efisiensi Asembli, dan Kepatuhan Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical device) rumah tangga dan wellness device di Indonesia menunjukkan pertumbuhan yang signifikan, dengan nilai pasar yang diproyeksikan mencapai USD 5,6 miliar pada tahun 2025 menurut laporan berbagai asosiasi industri. Dalam segmen yang lebih spesifik, perangkat terapi komplementer seperti *coffee enema basket*—sebuah wadah berlubang mikro yang berfungsi sebagai media filtrasi bubuk kopi dalam prosedur hidroterapi kolon—mengalami peningkatan permintaan yang konsisten. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain konvensional coffee enema basket yang beredar di pasaran memiliki kompleksitas komponen yang tinggi, terdiri atas 11–14 bagian terpisah yang harus dirakit manual oleh pekerja, dengan waktu asembli rata-rata mencapai 187 detik per unit. Kompleksitas semacam ini tidak hanya meningkatkan biaya produksi dan menurunkan *throughput* lini perakitan, tetapi juga membuka peluang cacat asembli yang signifikan karena manusia merupakan elemen paling variabel dalam proses manual.

Permasalahan ini menjadi semakin krusial ketika dikaitkan dengan aspek regulasi. Sebagai perangkat yang bersinggungan langsung dengan pengguna akhir (end-user) dan digunakan pada prosedur yang memerlukan standar higienitas tinggi, coffee enema basket wajib memenuhi prinsip-prinsip Desain untuk Keamanan (Design for Safety) dan Desain untuk Kemudahan Pembersihan (Design for Cleanability). Desain yang rumit dengan banyak celah, *fastener* kecil, dan sambungan berulir berpotensi menjadi *harborage* bagi kontaminan biologis, menurunkan efektivitas sanitasi steam atau chemical disinfection. Lebih jauh, menurut analisis yang dilakukan oleh Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), permasalahan klasik dalam industri manufaktur dan konstruksi prefabrikasi adalah ditemukannya hambatan *buildability*—yakni masalah yang seharusnya dapat diantisipasi pada tahap desain—baru teridentifikasi pada tahap shop-drawing atau bahkan saat erection di lapangan, ketika koreksi sudah sangat mahal dan berdampak pada keterlambatan proyek.

Urgensi redesain dengan pendekatan Design for Manufacture and Assembly (DFMA) menjadi semakin nyata ketika perusahaan small-to-medium enterprise (SME) yang memproduksi coffee enema basket menghadapi tekanan kompetitif dari produk impor dengan harga 30–40% lebih rendah. Tanpa redesain yang sistematis, margin keuntungan produsen lokal akan terus tergerus, sementara kualitas dan keamanan produk tidak kunjung meningkat. Pendekatan DFMA yang diperkenalkan oleh Boothroyd dan Dewhurst sejak tahun 1980-an dan telah广泛应用 secara global dalam berbagai industri—mulai dari otomotif, elektronik, hingga konstruksi jembatan prefabrikasi seperti yang diteliti oleh Islam (2024)—menawarkan kerangka kerja terstruktur untuk menyederhanakan desain, mengurangi jumlah komponen, mempercepat asembli, dan pada akhirnya menurunkan total biaya kepemilikan produk (total cost of ownership). Dengan mengintegrasikan prinsip DFMA sejak fase konseptual, perusahaan tidak hanya memperoleh penghematan manufaktur tetapi juga membangun *design intent* yang cleanable, sterilizable, dan aman bagi pengguna akhir.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritik DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) terdiri atas dua pilar utama yang saling komplementer: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Pilar DFM berfokus pada optimasi proses fabrikasi individual setiap komponen, sedangkan pilar DFA berfokus pada minimasi kompleksitas interaksi antar-komponen saat perakitan. Penggabungan keduanya menghasilkan metodologi DFMA holistik yang menurunkan biaya total sekaligus meningkatkan kualitas produk.

### 2.1 Design for Assembly (DFA) – Metode Boothroyd-Dewhurst

Indeks efisiensi asembli (Design Efficiency) didefinisikan sebagai:

$$\eta_{DFA} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi desain, dan $N_{actual}$ adalah jumlah komponen aktual pada desain awal. Nilai $\eta_{DFA}$ mendekati 100% menunjukkan desain yang semakin efisien secara asembli. Setiap komponen yang dianalisis dievaluasi menggunakan tiga pertanyaan dasar Boothroyd-Dewhurst: (1) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (2) Apakah komponen harus terbuat dari material yang berbeda? (3) Apakah komponen harus dipisahkan untuk memungkinkan perakitan/pembongkaran komponen lain?

Jika seluruh jawaban adalah "tidak", maka komponen tersebut merupakan kandidat eliminasi atau integrasi. Analisis kuantitatif waktu asembli menggunakan persamaan:

$$T_a = \sum_{i=1}^{n} \left( t_{hi} + t_{pi} + t_{fi} \right)$$

di mana $t_{hi}$, $t_{pi}$, dan $t_{fi}$ masing-masing merepresentasikan waktu *handling*, *placement*, dan *fastening* (atau *insertion*) untuk komponen ke-$i$, dengan total $n$ komponen.

### 2.2 Design for Manufacture (DFM) – Analisis Biaya dan Proses

Fungsi biaya manufaktur total per unit produk:

$$C_m = \sum_{i=1}^{n} \left( C_{mi} \cdot Q_i \right) + C_{setup}$$

di mana $C_{mi}$ adalah biaya manufaktur per komponen ke-$i$, $Q_i$ adalah kuantitas produksi tahunan, dan $C_{setup}$ adalah biaya *setup* mesin yang diamortisasi. Efisiensi manufaktur dapat diukur dengan:

$$E_m = \frac{T_{value\,added}}{T_{total\,manufacturing}} \times 100\%$$

### 2.3 Indeks Gabungan DFMA

Amirullah dan Jakaria (2024) mengusulkan indeks gabungan untuk mengkuantifikasi total improvement:

$$\Delta I_{DFMA} = w_1 \cdot \Delta\eta_{DFA} + w_2 \cdot \Delta C + w_3 \cdot \Delta T_a$$

di mana $w_1 + w_2 + w_3 = 1$ merupakan bobot prioritas yang ditentukan manajemen berdasarkan strategi perusahaan (misalnya $w_1=0{,}4$; $w_2=0{,}35$; $w_3=0{,}25$ untuk orientasi efisiensi).

### 2.4 Formulasi Penghematan Biaya Total

$$C_{savings} = \left( C_{m,before} - C_{m,after} \right) \cdot Q_{annual} + \left( T_{a,before} - T_{a,after} \right) \cdot L \cdot W_{labor}$$

di mana $L$ adalah *labor rate* (Rp/jam) dan $W_{labor}$ adalah jumlah jam kerja operator per tahun. Persamaan ini menangkap penghematan dari dua sumber: pengurangan biaya material/proses dan peningkatan produktivitas asembli.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA yang terdiri atas tujuh tahap sistematis. Prosedur ini dapat diadopsi secara汎用 oleh industri alat kesehatan sejenis dengan adaptasi pada karakteristik produk.

**Tahap 1 — Analisis Produk Awal dan Disassembly.** Produk coffee enema basket eksisting dibongkar, setiap komponen diidentifikasi, diukur, dan didokumentasikan. Bill of Materials (BoM) awal disusun lengkap dengan spesifikasi material, dimensi, dan toleransi.

**Tahap 2 — Pengukuran Baseline Kuantitatif.** Parameter baseline diukur: jumlah komponen ($N_{actual}$), waktu asembli rata-rata ($\bar{T}_a$), biaya produksi per unit ($C_{m,before}$), dan defect rate asembli.

**Tahap 3 — Penerapan Analisis DFA Boothroyd-Dewhurst.** Setiap komponen diuji dengan tiga pertanyaan filter. Komponen yang tidak lolos filter ditandai sebagai *kandidat eliminasi* atau *kandidat integrasi* dengan komponen lain.

**Tahap 4 — Konseptualisasi Desain Baru.** Berdasarkan hasil analisis, alternatif desain dikembangkan dengan mempertimbangkan: (a) integrasi multi-fungsi pada satu komponen, (b) penggunaan fitur snap-fit sebagai pengganti fastener ulir, (c) standardisasi material, dan (d) aplikasi prinsip *design for cleaning* (permukaan halus, radius fillet minimum R1,5 mm, minim crevice).

**Tahap 5 — Analisis DFM Desain Baru.** Setiap komponen baru dievaluasi kelayakan manufakturnya: apakah dapat di-*injection molding* tanpa undercuts berlebihan, apakah proses stamping/punching untuk stainless steel mesh optimal, dan apakah toleransi geometris dapat dipenuhi dengan proses yang ada.

**Tahap 6 — Prototipe dan Validasi.** Prototipe coffee enema basket baru dibuat dan diuji secara fungsional: kekuatan mekanis, kemampuan filtrasi (mesh opening), resistensi termal saat sterilisasi (autoclave 121°C), dan uji asembli oleh operator.

**Tahap 7 — Perhitungan Improvement dan Dokumentasi.** Semua parameter diukur ulang dan dibandingkan dengan baseline menggunakan persamaan pada Bagian 2.

Secara diagram alir, proses ini mengikuti siklus berulang: *Concept → DFA Analysis → Redesign → DFM Analysis → Prototype → Validation → Standardization*. Pendekatan iteratif ini sesuai dengan rekomendasi Islam (2024) yang menekankan pentingnya umpan balik dari knowledge manufacturing, transport, dan erection yang dimasukkan ke dalam tahap desain konseptual—bukan menunggu shop-drawing stage.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi metodologi DFMA, berikut adalah rekonstruksi studi kasus berdasarkan parameter tipikal yang digunakan oleh Amirullah dan Jakaria (2024).

**Parameter Baseline (Desain Eksisting):**
- Jumlah komponen: $N_{actual,before} = 13$ bagian
- Waktu asembli rata-rata: $\bar{T}_{a,before} = 187$ detik/unit
- Biaya material + proses: $C_{m,before} =$ Rp 18.500/unit
- Defect rate asembli: $D_{before} = 4{,}8\%$
- Labor rate: $L =$ Rp 25.000/jam
- Produksi tahunan: $Q_{annual} = 24.000$ unit
- Hari kerja efektif: 300 hari/tahun, 8 jam/hari

**Langkah 1 — Perhitungan DFA Index Baseline:**

$$N_{min} = 5 \text{ (fungsi esensial: body, mesh filter, cap, seal, handle)}$$

$$\eta_{DFA,before} = \frac{5}{13} \times 100\% = 38{,}46\%$$

**Langkah 2 — Penerapan Analisis Boothroyd-Dewhurst:** Dari 13 komponen, 6 komponen diidentifikasi sebagai kandidat integrasi (washer ganda, beberapa ring, dan bracket handle yang fungsinya dapat digabung ke komponen lain). Dua komponen snap-ring dianggap dapat diganti dengan fitur snap-fit pada body utama. Total eliminasi: 6 komponen. Desain baru memiliki:

$$N_{actual,after} = 13 - 6 = 7 \text{ komponen}$$

**Langkah 3 — Perhitungan