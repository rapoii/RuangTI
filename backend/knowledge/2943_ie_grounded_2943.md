# 2943 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Perakitan Produk Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode DFMA
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (*home-care medical devices*) di Indonesia mengalami pertumbuhan signifikan pasca-pandemi COVID-19, dengan segmen wellness dan terapi komplementer seperti *coffee enema* menjadi salah satu kategori yang menarik perhatian konsumen urban. Produk *coffee enema basket* merupakan komponen fungsional yang berfungsi sebagai wadah penyaring bubuk kopi dalam prosedur irigasi kolon, sehingga desainnya harus memenuhi tiga约束 (constraint) utama, yaitu higienitas, ergonomi penanganan, dan efisiensi produksi massal (Amirullah & Jakaria, 2024). Studi Amirullah dan Jakaria (2024) menyoroti bahwa produk keranjang kopi enema konvensional yang beredar di pasaran lokal umumnya didesain tanpa mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA), sehingga memiliki jumlah komponen berlebih, geometri sulit difabrikasi, serta membutuhkan waktu perakitan manual yang lama. DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309).

Urgensi redesain muncul dari dua sisi permintaan. Pertama, dari sisi regulasi: produk yang masuk kategori *medical device class I* di Indonesia wajib memenuhi standar SNI ISO 13485 dan Cara Pembuatan Alat Kesehatan yang Baik (CPAKB), yang mempersyaratkan kemampuan produksi yang *repeatable* dan *traceable*. Kedua, dari sisi ekonomi: margin keuntungan produsen UMKM alat kesehatan sangat tipis (kisaran 8–15%), sehingga setiap detik waktu perakitan yang dihemat serta setiap gram material yang dikurangi akan langsung meningkatkan profitabilitas. Pendekatan DFMA yang diperkenalkan oleh Boothroyd, Dewhurst, dan Knight pada tahun 1980-an menyediakan kerangka sistematis untuk menjawab tantangan tersebut melalui dua pilar: *Design for Manufacture* (DfM) yang menekan biaya fabrikasi, dan *Design for Assembly* (DfA) yang memangkas waktu dan kompleksitas perakitan (Boothroyd et al., 2010; Ulrich et al., 2020). Pendekatan ini semakin relevan dalam konteks industri 4.0, di mana integrasi DFMA dengan Building Information Modelling (BIM) dan sistem evaluasi multi-kriteria terbukti meningkatkan kualitas keputusan desain pada proyek infrastruktur prefabrikasi (Islam, 2024). DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21).

Konteks lokal Indonesia menambahkan dimensi khusus. Mayorisasi Unit Pengolahan Hasil Pertanian (UPHP) kopi di Sumatera Utara, Aceh, dan Jawa Timur memiliki akses terhadap stainless steel food-grade SUS 304 sheet metal, namun keterampilan desain rekayasa masih terbatas pada warisan turun-temurun (*tribal knowledge*). Penelitian Amirullah dan Jakaria (2024) berupaya menjembatani kesenjangan ini dengan menerapkan DFMA secara kuantitatif pada produk *coffee enema basket*, sehingga memberikan *playbook* yang dapat direplikasi oleh desainer produk alat kesehatan rumahan lainnya. Penelitian tersebut menghitung indeks DfM dan DfA sebelum dan sesudah redesain, sehingga memungkinkan adanya *benchmark* kuantitatif yang dapat dibandingkan lintas produk dan lintas pabrik.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teori DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengikuti alur klasik Boothroyd-Dewhurst, yang dimulai dengan perhitungan **Dfx Index** sebagai ukuran efektivitas gabungan antara manufaktur dan perakitan. Secara matematis, *Dfx Index* dapat dituliskan sebagai:

$$\text{Dfx}_{\text{index}} = \alpha \cdot \text{DfM}_{\text{index}} + \beta \cdot \text{DfA}_{\text{index}}$$

di mana koefisien pembobot $\alpha$ dan $\beta$ berturut-turut merepresentasikan proporsi biaya fabrikasi dan biaya perakitan terhadap total biaya produksi. Untuk produk *coffee enema basket* dengan kandungan fabrikasi sheet metal yang dominan dan perakitan manual yang minimal, Amirullah dan Jakaria (2024) menggunakan $\alpha = 0{,}45$ dan $\beta = 0{,}55$ untuk menekankan pentingnya komponen perakitan (DOI: 10.21070/ups.3309).

Indeks DfM dihitung menggunakan rumus proporsi material yang digunakan secara fungsional terhadap total material yang dibeli:

$$\text{DfM}_{\text{index}} = \left(\frac{m_{\text{fungsi}}}{m_{\text{beli}}}\right) \times 100\%$$

di mana $m_{\text{fungsi}}$ adalah massa material yang secara langsung menyorban fungsi produk (misalnya dinding saringan, rangka penahan), sedangkan $m_{\text{beli}}$ adalah massa lembaran stainless steel yang dibeli dari supplier termasuk *allowance* pinggir, *scrap*, dan area yang dibuang karena proses *laser cutting* atau *stamping*.

Untuk indeks DfA, Amirullah dan Jakaria (2024) mengadopsi *Boothroyd-Dewhurst DfA Index* yang mempertimbangkan waktu handling, insertion, dan fastening:

$$\text{DfA}_{\text{index}} = \frac{t_{\text{min, ideal}}}{t_{\text{aktual}}} \times 100\%$$

dengan $t_{\text{min, ideal}}$ adalah waktu perakitan teoritis minimum (diperoleh dari tabel DfA Boothroyd-Dewhurst untuk kategori part tertentu), dan $t_{\text{aktual}}$ adalah waktu perakitan aktual yang diukur menggunakan *stopwatch study* di lantai produksi. Semakin tinggi rasio ini, semakin efisien desain produk tersebut untuk dirakit.

Total waktu perakitan dapat dimodelkan sebagai penjumlahan waktu untuk setiap part:

$$t_{\text{assembly}} = \sum_{i=1}^{n} \left( t_{h,i} + t_{i,i} + t_{f,i} \right)$$

di mana untuk setiap komponen ke-$i$: $t_{h,i}$ adalah waktu *handling* (mengambil, memposisikan), $t_{i,i}$ adalah waktu *insertion* (menyisipkan/memasukkan), dan $t_{f,i}$ adalah waktu *fastening* (mengencangkan dengan baut, klip, atau las titik). Untuk produk *coffee enema basket* versi lama yang memiliki 9 part, persamaan ini menghasilkan nilai yang lebih tinggi dibanding versi baru dengan 5 part.

Selain itu, biaya produksi total dirumuskan sebagai:

$$C_{\text{total}} = C_{\text{material}} + C_{\text{fabrikasi}} + C_{\text{assembly}} + C_{\text{quality}}$$

di mana setiap komponen biaya merupakan fungsi dari parameter desain dan volume produksi. Biaya per unit assembly didekati dengan rumus:

$$C_{\text{assembly}} = t_{\text{assembly}} \times R_{\text{upah}} \times (1 + O_{\text{overhead}})$$

dengan $R_{\text{upah}}$ adalah tarif tenaga kerja per detik dan $O_{\text{overhead}}$ adalah faktor biaya overhead pabrik (umumnya 1,5–2,5 kali upah langsung). Amirullah dan Jakaria (2024) melaporkan bahwa redesain DFMA menurunkan biaya assembly sebesar 38,2% (DOI: 10.21070/ups.3309).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi yang digunakan dalam penelitian Amirullah dan Jakaria (2024) mengikuti delapan tahapan SOP berikut:

**Tahap 1 — Pengumpulan Data Produk Eksisting.** Langkah awal adalah *reverse engineering* produk keranjang kopi enema yang beredar di pasaran, meliputi pengukuran dimensi geometri (panjang, lebar, tinggi, diameter lubang saringan), inventarisasi Bill of Materials (BoM), serta pengamatan *workstation* perakitan.

**Tahap 2 — Pengukuran Baseline Kinerja.** Pengukuran *baseline* mencakup: (a) waktu perakitan aktual menggunakan *time study* dengan metode *stopwatch* dan *predetermined motion time system* (PMTS); (b) massa produk dan material; (c) biaya produksi per unit; (d) tingkat cacat (*defect rate*) pada lini produksi.

**Tahap 3 — Analisis Fungsi dan Klasifikasi Part.** Setiap part diklasifikasikan menggunakan *Function Analysis System Technique* (FAST) untuk membedakan part yang memberikan fungsi utama versus part yang redundan. Part yang hanya menyumbangkan satu fungsi marginal dievaluasi untuk *elimination*.

**Tahap 4 — Aplikasi Aturan DfA Boothroyd-Dewhurst.** Tiap part dievaluasi menggunakan tabel keputusan DfA, dengan kriteria: (a) apakah part harus dipisah atau dapat diintegrasikan; (b) apakah operasi *insertion* dapat dihilangkan; (c) apakah *fastening* dapat diganti dengan *snap-fit*; (d) apakah orientasi part selama perakitan sudah tegak lurus dan simetris.

**Tahap 5 — Aplikasi Aturan DfM Sheet Metal.** Aturan DfM khusus sheet metal meliputi: penggunaan *bend radius* minimum ≥ 1× ketebalan material; menjaga *flat pattern* sederhana untuk efisiensi *nesting*; menggunakan *standard gauge* SUS 304 (0,8 mm, 1,0 mm, atau 1,2 mm); menghindari *deep draw* yang memerlukan dies mahal.

**Tahap 6 — Redesain Konseptual.** Modifikasi geometri digambar ulang dalam CAD 3D (SolidWorks atau Fusion 360), kemudian dilakukan simulasi *finite element analysis* (FEA) untuk memastikan kekuatan struktural dan kemampuan menahan tekanan saat prosedur enema.

**Tahap 7 — Pembuatan Prototipe dan Validasi.** Prototipe dicetak menggunakan *laser cutting* + *press brake*, diuji tingkat filtrasi (kemampuan menyaring partikel kopi), dan dilakukan uji *life-cycle* perakitan untuk memverifikasi bahwa semua langkah DfA tercapai.

**Tahap 8 — Analisis Perbandingan Kuantitatif.** Hasil redesain dibandingkan dengan baseline menggunakan metrik Dfx Index, biaya per unit, dan waktu perakitan, lalu dilaporkan kepada manajemen untuk keputusan *go/no-go* produksi massal.

Diagram alir proses dapat direpresentasikan sebagai berikut:

```
┌────────────────────┐    ┌─────────────────────┐    ┌──────────────────────┐
│ Reverse Engineering │ → │ Baseline Measurement │ → │ Function Analysis    │
│ (Dimensi & BoM)     │    │ (Waktu, Biaya, Cacat)│    │ (FAST Diagram)       │
└─────────────────────┘    └──────────────────────┘    └──────────┬───────────┘
                                                                  │
                                                                  ▼
┌─────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│ Redesain Konseptual  │ ← │ DfM Sheet Metal Rules│ ← │ DfA Boothroyd Rules  │
│ (CAD 3D + FEA)       │    │ (Bend, Nest, Gauge) │    │ (Insert, Fasten)     │
└──────────┬───────────┘    └──────────────────────┘    └──────────────────────┘
           │
           ▼
┌─────────────────────┐    ┌──────────────────────┐
│ Analisis Komparatif │ → │ Keputusan Produksi   │
│ (Dfx Index)         │    │ (Go/No-Go)           │
└─────────────────────┘    └──────────────────────┘
```

Standar operasional yang digunakan untuk fabrikasi sheet metal menganut ISO 2768 (toleransi umum), sementara prosedur pengelasan titik mengikuti AWS D1.6 untuk stainless steel. Untuk konteks evaluasi desain multi-kriteria, pendekatan yang diperkenalkan oleh Islam (2024) untuk konstruksi jembatan prefabrikasi menggunakan *Analytic Hierarchy Process* (AHP) dan *Technique for Order of Preference by Similarity to Ideal Solution* (TOPSIS) sebagai metode pembobotan, yang juga dapat diadaptasi untuk konteks pemilihan desain alternatif pada produk *coffee enema basket* (DOI: 10.63125/av45jf21).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Studi kasus diambil dari data Amirullah dan Jakaria (2024) dengan penyesuaian parameter untuk konteks UMKM alat kesehatan di Surabaya. Misalkan sebuah UMKM memproduksi 5.000 unit keranjang kopi enema per bulan dengan tarif operator Rp. 4.500/jam (≈ Rp. 1,25/detik).

**Tahap 1 — Baseline Produk Lama.** Produk lama memiliki 9 part dengan rincian: 1 bodi silinder (sheet metal 1,0 mm), 1 tutup dengan 4 lubang saringan (sheet metal 0,8 mm), 4 kaki penyangga (batang stainless ⌀4 mm), 1 pegangan (kawat stainless ⌀3 mm), 1 ring pengunci, dan 1 baut M3. Massa total = 142 gram. Waktu perakitan aktual = 168 detik/unit. Cacat perakitan = 6,5% (kebanyakan karena salah orientasi kaki). Biaya material per unit = Rp. 18.200. Biaya fabrikasi (laser + bending) per unit = Rp. 7.500. Biaya perakitan per unit = Rp. 1,25 × 168 × 2,0 = Rp. 420. Total biaya produksi = Rp. 26.120/unit.

**Tahap 2 — Penerapan DfA.** Hasil analisis DfA menunjukkan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
