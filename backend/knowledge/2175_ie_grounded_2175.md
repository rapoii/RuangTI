# 2175 — Redesain Keranjang Kopi Enema dengan Metode Design for Manufacture and Assembly (DFMA): Optimasi Manufaktur, Efisiensi Perakitan, dan Standarisasi Produk Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumah tangga (home healthcare device) mengalami pertumbuhan eksponensial pascapandemi COVID-19, dengan permintaan terhadap perangkat terapi rumahan berbasis herbal dan non-farmakologis melonjak signifikan. Salah satu produk yang menjadi perhatian klinis dan rekayasa adalah *coffee enema basket* — sebuah komponen篮子 penahan bubuk kopi yang digunakan dalam prosedur kolon therapy sebagai alat bantu detoksifikasi. Produk ini semula dirancang tanpa mempertimbangkan prinsip-prinsip Design for Manufacture and Assembly (DFMA), sehingga menghasilkan komponen dengan jumlah parts berlebih, geometri yang sulit difabrikasi, serta prosedur perakitan yang mengandalkan banyak operasi pengelasan, riveting, dan pengikatan manual. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengidentifikasi bahwa redesain produk kesehatan semacam ini menjadi sangat urgen karena tiga dimensi masalah: (1) dimensi regulasi, di mana standar医疗器械 (medical device) menuntut kemampuan pembersihan, sterilisasi, dan reproducibility yang ketat; (2) dimensi ekonomis, di mana biaya produksi dan perakitan yang tinggi menurunkan margin UMKM manufaktur lokal; dan (3) dimensi ergonomis-klinis, di mana desain yang tidak dioptimasi menyebabkan kebocoran, kontaminasi silang, dan inefisiensi distribusi介质.

Urgensi operasional dari penerapan DFMA pada produk ini semakin nyata ketika dibandingkan dengan studi paralel yang dilakukan oleh Islam (2024) di *Journal of Sustainable Development and Policy* dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Dalam konteks jembatan prefabrikasi, Islam menunjukkan bahwa keputusan desain yang hanya didasarkan pada biaya dan kecukupan struktural — tanpa mempertimbangkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi — menghasilkan *buildability problems* yang baru terungkap pada tahap shop-drawing atau di lapangan, ketika desain sudah beku dan mould sudah dipotong. Persoalan ini paralel dengan kasus coffee enema basket: banyak produsen lokal merancang produk berdasarkan intuisi fungsional, tanpa feed-forward dari proses fabrikasi (sheet metal forming, wire bending, welding) dan perakitan (snap-fit, threaded fasteners). Akibatnya, biaya rework, scrap rate, dan waktu perakitan melonjak 20-40% menurut benchmark industri. Penelitian Amirullah dan Jakaria (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) berupaya menjembatani kesenjangan ini dengan menerapkan metodologi DFMA Boothroyd-Dewhurst secara sistematis untuk menghasilkan redesain yang measurable, repeatable, dan memenuhi standar kualitas alat kesehatan.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DFMA yang digunakan dalam paper Amirullah dan Jakaria (2024) berakar pada tiga pilar: Design for Manufacture (DFM), Design for Assembly (DFA), dan integrasi keduanya melalui perhitungan biaya total siklus hidup produk. Boothroyd dan Dewhurst (1983, diacu kembali dalam [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) memperkenalkan sistem penilaian DFA berbasis tiga kriteria utama untuk setiap komponen: *handling difficulty*, *insertion difficulty*, dan *fastening/additional operations*. Setiap operasi diberi waktu standar dalam satuan detik, yang kemudian diakumulasikan menjadi total waktu perakitan.

**Formulasi 1 — Total Waktu Perakitan:**
$$T_{\text{assembly}} = \sum_{i=1}^{n} \left( H_i + I_i + F_i \right) \cdot t_i$$

di mana $H_i$ adalah jumlah operasi *handling* untuk komponen $i$, $I_i$ adalah jumlah operasi *insertion*, $F_i$ adalah jumlah operasi *fastening/extra*, dan $t_i$ adalah waktu standar per operasi (detik). Untuk produk dengan $n$ komponen.

**Formulasi 2 — Indeks Efisiensi DFA:**
$$\eta_{\text{DFA}} = \frac{N_{\text{min}}}{N_{\text{actual}}} \times 100\%$$

di mana $N_{\text{min}}$ adalah jumlah minimum komponen teoritis yang diperlukan untuk memenuhi fungsi produk, dan $N_{\text{actual}}$ adalah jumlah komponen aktual pada desain eksisting. Indeks ini mencerminkan sejauh mana desain mendekati konfigurasi modular yang ideal; nilai $\eta_{\text{DFA}} \geq 60\%$ dianggap acceptable menurut benchmark Boothroyd.

**Formulasi 3 — Total Biaya Manufaktur dan Perakitan:**
$$C_{\text{total}} = C_{\text{material}} + C_{\text{machining}} + C_{\text{tooling}} + C_{\text{assembly}} + C_{\text{overhead}}$$

dengan sub-komponen:
$$C_{\text{material}} = \sum_{j=1}^{m} \rho_j \cdot V_j \cdot p_j$$
$$C_{\text{machining}} = \sum_{k=1}^{p} T_{mk} \cdot R_{mk}$$
$$C_{\text{assembly}} = T_{\text{assembly}} \cdot C_L \cdot (1 + \mu)$$

di mana $\rho_j$ adalah densitas material, $V_j$ adalah volume, $p_j$ adalah harga satuan; $T_{mk}$ adalah waktu machining operasi $k$, $R_{mk}$ adalah rate mesin; $C_L$ adalah tarif tenaga kerja langsung per detik, dan $\mu$ adalah faktor overhead (typically 0.15-0.30).

**Formulasi 4 — Penghematan Biaya Hasil Redesain:**
$$\Delta C = C_{\text{before}} - C_{\text{after}} = \left( \frac{C_{\text{before}} - C_{\text{after}}}{C_{\text{before}}} \right) \times 100\%$$

Variabel kunci dalam analisis redesain coffee enema basket mencakup: jumlah komponen ($n$), jenis material (stainless steel SUS 304 vs. food-grade polymer), proses fabrikasi (laser cutting, stamping, wire EDM), dan operasi joining (TIG welding, spot welding, snap-fit, threading). Teori pendukung dari literatur DFMA juga mencakup *Material Selection Charts* (Ashby), *Pugh Matrix* untuk evaluasi konsep, dan *Design for X* (DFX) yang meliputi DFA, DFM, DFE (environment), DFS (safety), dan DFS (serviceability).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun metodologi DFMA dalam enam tahapan sistematis yang dapat direplikasi untuk produk alat kesehatan serupa. Tahapan ini sejalan dengan framework BIM-DfMA yang dikembangkan Islam (2024) untuk konstruksi jembatan prefabrikasi (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), yang menunjukkan bahwa integrasi informasi manufaktur-awal ke dalam proses desain adalah best practice lintas domain.

**Langkah 1 — Analisis Fungsi Produk:** Definisikan fungsi primer, sekunder, dan constraint menggunakan *functional decomposition* dan diagram FAST (Function Analysis System Technique). Untuk coffee enema basket: fungsi primer = menahan dan mendistribusikan bubuk kopi secara merata; fungsi sekunder = memungkinkan aliran介质 tanpa clogging; constraint = food-grade, sterilizable, autoclavable hingga 134°C.

**Langkah 2 — Inventarisasi Komponen Eksisting:** Lakukan *parts listing* lengkap dengan atribut: dimensi, material, proses fabrikasi, jumlah fastener, dan operasi joining. Hitung baseline $n_{\text{before}}$ dan $T_{\text{assembly,before}}$.

**Langkah 3 — Penerapan *Minimum Part Criterion*:** Evaluasi setiap komponen terhadap tiga pertanyaan: (a) Apakah komponen bergerak relatif terhadap yang lain saat produk beroperasi? (b) Apakah komponen harus terbuat dari material berbeda? (c) Apakah komponen harus dipisahkan untuk assembly/disassembly? Jika ketiga jawaban "tidak", komponen tersebut adalah kandidat eliminasi atau integrasi.

**Langkah 4 — Konseptualisasi Redesain:** Generate minimal 3-5 konsep alternatif menggunakan *morphological matrix* dan lakukan *screening* dengan Pugh Matrix. Konsep yang lolos dilanjutkan ke tahap scoring menggunakan AHP (Analytic Hierarchy Process) dengan bobot kriteria: manufacturability (0.25), assemblability (0.25), cost (0.20), safety/sterilization (0.15), ergonomics (0.15).

**Langkah 5 — Detailed Design & Process Planning:** Tentukan proses fabrikasi optimal untuk setiap komponen (sheet metal: laser cutting + bending; mesh: wire weaving; fastener: snap-fit). Buat *process flow chart* dan *assembly sequence diagram*.

**Langkah 6 — Validasi & Iterasi:** Hitung ulang seluruh metrik DFMA pada desain baru, bandingkan dengan baseline, dan lakukan iterasi jika $\eta_{\text{DFA}}$ belum memenuhi target ≥60% atau $\Delta C < 15\%$.

Standar Prosedur Operasional (SOP) untuk manufaktur produk hasil redesain mengikuti referensi ISO 13485 (medical device QMS), dengan kontrol proses statistik (SPC) untuk critical dimensions dan 100% visual inspection untuk weld seams. Diagram alir implementasi mengikuti pendekatan Stage-Gate yang juga digunakan dalam BIM-based design evaluation Islam (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk menggambarkan aplikasi DFMA secara kuantitatif pada kasus coffee enema basket, dilakukan rekonstruksi perhitungan berbasis data tipikal industri UMKM alat kesehatan di Indonesia, dengan mengadopsi parameter-parameter yang diidentifikasi oleh Amirullah dan Jakaria (2024) (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)).

**Input Parameter Baseline (Desain Eksisting):**
- Jumlah komponen: $n_{\text{before}} = 14$ parts (body tabung, tutup atas, tutup bawah, ring pengunci, 3 mesh holder, 4 clamp ring, 2 handle bracket, 1 gasket, 1 valve stem)
- Waktu handling rata-rata: $H_i = 4.5$ detik
- Waktu insertion rata-rata: $I_i = 9.2$ detik
- Waktu fastening rata-rata: $F_i = 15.8$ detik (mayoritas pengelasan TIG)
- $t_i$ standar Boothroyd: $1.5$ detik per operasi (asumsi operasi gabungan)
- Tarif tenaga kerja: $C_L =$ Rp 833.33/detik (Rp 50,000/jam)
- Faktor overhead: $\mu = 0.25$
- Material: SUS 304 stainless steel sheet 1.2 mm

**Kalkulasi Step-by-Step:**

*Langkah A — Hitung Total Waktu Perakitan Baseline:*
$$T_{\text{assembly,before}} = \sum_{i=1}^{14} \left( 4.5 + 9.2 + 15.8 \right) \cdot 1.5$$
$$= 14 \times 29.5 \times 1.5 = 619.5 \text{ detik} \approx 10.33 \text{ menit}$$

*Langkah B — Hitung Biaya Perakitan Baseline:*
$$C_{\text{assembly,before}} = 619.5 \times 833.33 \times (1 + 0.25)$$
$$= 619.5 \times 833.33 \times 1.25 = \text{Rp } 645,313$$

*Langkah C — Hitung Indeks DFA Baseline:*
$$\eta_{\text{DFA,before}} = \frac{N_{\text{min}}}{N_{\text{actual}}} = \frac{8}{14} \times 100\% = 57.14\%$$

(Nilai minimum teoritis $N_{\text{min}} = 8$ ditentukan melalui functional decomposition: body utama, tutup integral, mesh cartridge, handle, gasket seal, valve, fastener ring, locking pin.)

*Langkah D — Desain Baru Hasil DFMA:* Setelah eliminasi 4 komponen melalui integrasi (clamp ring di-integrasi ke body), penggunaan snap-fit menggantikan las, dan modularisasi mesh cartridge, diperoleh $n_{\text{after}} = 10$ parts. Operasi fastening berkurang drastis karena 3 sambungan las TIG diganti snap-fit dengan $F_{\text{new}} = 6.5$ detik, $I_{\text{new}} = 6.8$ detik, $H