# 2111 — Redesain Produk Manufaktur Medis Menggunakan Metode Design for Manufacture and Assembly (DFMA): Studi Komprehensif Penerapan Prinsip Rekayasa pada Alat Kesehatan Non-Invasif dan Infrastruktur Modular Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Sektor alat kesehatan (medical devices) merupakan salah satu industri dengan tingkat regulasi paling ketat di dunia, namun sekaligus menghadapi tekanan kompetitif yang tinggi terkait efisiensi biaya produksi, kualitas, dan kemampuan perakitan. Amirullah dan Jakaria (2024) dalam artikel ilmiahnya yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengangkat isu krusial bahwa banyak perangkat medis sederhana—termasuk *coffee enema basket*—dirancang dengan pendekatan intuitif yang menghasilkan komponen berlebihan, prosedur perakitan yang tidak ergonomis, dan biaya produksi yang lebih tinggi dari yang seharusnya. Produk *coffee enema basket* sendiri adalah perangkat terapi alternatif yang berfungsi menyaring dan menampung bubuk kopi untuk prosedur *enema* (irigasi kolon) dalam konteks klinis maupun wellness. Produk ini biasanya terdiri dari komponen *basket* (keranjang saring), pegangan, penutup, dan elemen pengunci yang harus tahan terhadap suhu tinggi, korosi, serta aman secara biologis saat kontak dengan jaringan tubuh.

Urgensi operasional yang diidentifikasi oleh Amirullah dan Jakaria (2024, DOI: 10.21070/ups.3309) berakar pada tiga dimensi utama. **Pertama**, biaya produksi awal (*baseline manufacturing cost*) yang disebabkan oleh jumlah komponen yang tidak optimal, proses *machining* yang tidak perlu, dan kompleksitas perakitan manual. **Kedua**, waktu perakitan (*assembly time*) yang tinggi karena fitur-fitur produk tidak didesain untuk memudahkan orientasi, penyisipan, dan pengencangan. **Ketiga**, peluang hilir (*downstream opportunity*) berupa peningkatan daya saing UMKM manufaktur alat kesehatan di Indonesia melalui adopsi metodologi rekayasa yang terstruktur. Pendekatan Design for Manufacture and Assembly (DFMA) menjadi jawaban metodologis karena DFMA memungkinkan desainer mengevaluasi dan menyederhanakan desain sejak fase konseptual, jauh sebelum proses produksi di-*freeze*.

Konvergensi dengan konteks infrastruktur sipil modern ditunjukkan oleh Islam (2024) dalam studinya yang dimuat di *Journal of Sustainable Development and Policy* dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Islam menekankan bahwa masalah serupa—yaitu keputusan desain yang diambil hanya berdasarkan biaya dan kecukupan struktural tanpa mempertimbangkan manufacturability, transportability, dan erectability—menyebabkan *buildability problems* yang baru terdeteksi pada tahap *shop-drawing* atau di lapangan konstruksi. Dalam domain jembatan prefabrikasi, hal ini berarti desain dibekukan sebelum pengetahuan manufaktur dan perakitan diintegrasikan, sehingga koreksi hanya mungkin dilakukan dengan biaya tinggi. Kedua literatur ini menunjukkan bahwa **DFMA adalah kebutuhan universal lintas domain manufaktur**, mulai dari医疗器械 (perangkat medis) hingga infrastruktur jembatan modular, dengan tantangan inti yang sama: menjembatani jurang antara keputusan desain awal dan realita lantai produksi.

Konteks industri Indonesia khususnya pada sektor alat kesehatan herbal/alternatif menunjukkan potensi nilai pasar lebih dari Rp 3,2 triliun per tahun untuk kategori wellness devices, namun mayoritas pemain UMKM masih merancang produk tanpa metodologi rekayasa formal, sehingga margin laba rata-rata hanya 8–12%. Implementasi DFMA terstruktur berpotensi meningkatkan margin menjadi 18–25% melalui pengurangan komponen (30–50%), pengurangan biaya perakitan (20–40%), dan peningkatan kualitas estetika-fungsional. Hal ini menjadikan modul 2111 relevan bagi engineer industri, desainer produk, dan konsultan manufaktur yang berkecimpung dalam desain ulang produk medis, consumer goods, maupun komponen infrastruktur prefabrikasi.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024, DOI: 10.21070/ups.3309) mengintegrasikan dua pilar analitis: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**, yang keduanya berakar pada prinsip Boothroyd-Dewhurst. Formulasi matematis yang relevan untuk analisis DFMA meliputi indeks efisiensi perakitan, estimasi biaya manufaktur total, dan fungsi tujuan optimasi.

### 2.1 Indeks Efisiensi Desain untuk Perakitan (Design for Assembly Index)

Indeks DFA mengukur seberapa efisien suatu desain produk dalam hal jumlah komponen dan kemudahan perakitan. Dua parameter utama yang digunakan adalah *minimum number of parts* ($N_{min}$) dan *actual number of parts* ($N_a$), sehingga:

$$\eta_{DFA} = \frac{N_{min}}{N_a} \times 100\%$$

Nilai $\eta_{DFA}$ mendekati 100% menunjukkan bahwa desain sudah mendekati jumlah komponen minimum teoretis. Efisiensi waktu perakitan (*assembly time efficiency*) didefinisikan sebagai:

$$\eta_t = \frac{T_{min}}{T_a} \times 100\%$$

di mana $T_{min}$ adalah waktu perakitan minimum teoretis (umumnya diasumsikan 3 detik per komponen untuk operasi ideal) dan $T_a$ adalah waktu perakitan aktual. Dengan metode Boothroyd-Dewhurst, waktu minimum per komponen dimodelkan sebagai:

$$T_{min} = \sum_{i=1}^{N_a} (t_{handle,i} + t_{insert,i} + t_{fasten,i})$$

di mana $t_{handle,i}$ adalah waktu *handling* komponen ke-$i$, $t_{insert,i}$ adalah waktu penyisipan, dan $t_{fasten,i}$ adalah waktu pengencangan (diasumsikan 1,5 detik untuk *snap-fit* tanpa tool).

### 2.2 Analisis Biaya Manufaktur Total

Fungsi biaya total produk DFMA menurut Boothroyd, yang diacu oleh Amirullah dan Jakaria (2024), adalah:

$$C_{total} = C_m + C_a + C_{scrap} + C_{tooling} + C_{overhead}$$

dengan:
- $C_m = \sum_{i=1}^{N_a} (t_{m,i} \cdot r_m \cdot c_{m,i})$ adalah biaya *material* dan *machining* untuk komponen ke-$i$, dengan $t_{m,i}$ waktu *machining*, $r_m$ tarif mesin, dan $c_{m,i}$ biaya material satuan.
- $C_a = T_a \cdot r_l$ adalah biaya perakitan dengan $r_l$ tarif tenaga kerja.
- $C_{scrap} = \alpha \cdot (C_m + C_a)$ adalah biaya *scrap* dengan tingkat reject $\alpha$.
- $C_{tooling}$ adalah biaya perkakas (*fixture*, *mold*).
- $C_{overhead}$ adalah biaya overhead pabrik.

Persentase reduksi biaya setelah redesain adalah:

$$\Delta C_{\%} = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

### 2.3 Fungsi Tujuan Optimasi DFMA Multi-Obyektif

Optimasi DFMA pada dasarnya adalah masalah minimasi multi-variabel:

$$\min Z = w_1 \cdot N_a + w_2 \cdot T_a + w_3 \cdot C_{total} + w_4 \cdot \sigma_{quality}$$

di mana $w_1, w_2, w_3, w_4$ adalah bobot prioritas yang ditentukan melalui *trade-off analysis* (misalnya *Analytic Hierarchy Process*), dan $\sigma_{quality}$ adalah simpangan baku parameter kualitas kritis (kebulatan dimensi, kekasaran permukaan, akurasi saringan). Untuk produk medis *coffee enema basket*, parameter kualitas kritisnya antara lain *mesh size* (mesh per inci, M), akurasi *basket diameter* ($D \pm \delta D$), dan *food-grade compliance* (sesuai FDA 21 CFR atau BPOM RI).

### 2.4 Integrasi DFMA-BIM untuk Skala Infrastruktur

Islam (2024, DOI: 10.63125/av45jf21) memperluas kerangka DFMA ke domain infrastruktur dengan mengusulkan fungsi utilitas multi-kriteria:

$$U_j = \sum_{k=1}^{K} w_k \cdot u_{k,j}$$

di mana $U_j$ adalah utilitas desain alternatif ke-$j$, $u_{k,j}$ adalah skor ternormalisasi pada kriteria ke-$k$ (biaya, *manufacturability*, *transportability*, *erectability*, keberlanjutan), dan $w_k$ adalah bobot preferensi. Skor *manufacturability* dalam konteks ini mencakup indikator *prefabrication level* ($P_{level}$, persen komponen prefabrikasi), yang untuk jembatan modular tipikalnya ditargetkan $P_{level} \geq 70\%$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti prosedur sistematis yang oleh Amirullah dan Jakaria (2024) dijabarkan dalam alur tujuh tahap. SOP ini sekaligus menjadi kerangka kerja baku (*standard operating procedure*) yang dapat direplikasi lintas industri.

**Tahap 1 — Pengumpulan Data Baseline dan Reverse Engineering.** Produk eksisting dibongkar (*disassembly*), setiap komponen diukur dimensinya, dihitung massanya, dihitung waktu perakitannya dengan *stopwatch study*, dan dihitung biaya material+tenaga kerjanya. Setiap komponen diberi kode sesuai dengan diagram pohon produk (*product structure tree*). Pada kasus *coffee enema basket*, baseline menunjukkan 7–9 komponen termasuk 4 sekrup, 2 ring, 1 mur, keranjang, dan pegangan terpisah.

**Tahap 2 — Aplikasi Kriteria DFA Boothroyd-Dewhurst.** Setiap komponen diuji terhadap tiga pertanyaan krusial: (a) Apakah komponen bergerak relatif terhadap komponen lain saat produk beroperasi? (b) Apakah komponen harus dapat dibongkar-pasang untuk *maintenance*? (c) Apakah gerakan komponen *independent* dari gerakan komponen lain? Jika semua jawaban "tidak", maka komponen tersebut layak dikonsolidasikan (*eliminated*). Formalnya:

$$\text{DFA Decision} = \begin{cases} \text{Keep} & \text{jika } (Q_1 \lor Q_2 \lor Q_3) = \text{Yes} \\ \text{Consolidate} & \text{otherwise} \end{cases}$$

**Tahap 3 — Desain Ulang Konseptual.** Berdasarkan hasil eliminasi, desainer menyusun konsep baru dengan target mengurangi 30–50% jumlah komponen. Teknik yang digunakan antara lain *snap-fit*, *integral molding*, *living hinges*, dan pemilihan material kompatibel (*food-grade stainless steel 304* atau *medical-grade polymer*).

**Tahap 4 — Analisis DFM dan Pemilihan Proses.** Untuk setiap komponen sisa, dipilih proses manufaktur optimal antara *injection molding*, *sheet metal forming*, *tube bending*, atau *CNC machining*. Kriteria pemilihan mengikuti *material-process compatibility matrix*:

$$M_{pc} = \begin{bmatrix} m_{11} & m_{12} & \cdots & m_{1p} \\ m_{21} & m_{22} & \cdots & m_{2p} \\ \vdots & \vdots & \ddots & \vdots \\ m_{cp} & m_{cp} & \cdots & m_{cp} \end{bmatrix}$$

di mana $m_{ij} = 1$ jika proses $j$ cocok untuk material $i$, dan 0 sebaliknya. Untuk stainless steel 304 dengan ketebalan 1–2 mm, proses *deep drawing* dan *laser welding* menjadi pilihan dominan karena menghasilkan sambungan yang kuat dan higienis.

**Tahap 5 — Perhitungan Biaya dan Validasi Kualitas.** Dihitung ulang $C_{total}$ menggunakan rumus di Bagian 2, kemudian dibandingkan dengan baseline. Validasi kualitas dilakukan dengan memeriksa bahwa parameter fungsional tidak menurun, termasuk: laju aliran ($Q$ dalam mL/s), kemampuan filtrasi (% filtrasi partikel > 50 μm), dan kekuatan tarik sambungan ($\sigma_{t} \geq 250$ MPa).

**Tahap 6 — Pembuatan Prototipe dan Pengujian Fungsional.** Prototipe dicetak menggunakan *rapid prototyping* (3D printing *SLS* dengan material *PA12*) atau fabrikasi langsung (*laser cutting* + *welding*). Pengujian fungsional mencakup *leak test* (tekanan 0,5 bar selama 30 detik), uji korosi (sesuai ASTM B117 *salt spray test* 24 jam), dan uji siklus termal (50 siklus 25–80°C).

**Tahap 7 — Dokumentasi dan Implementasi Produksi.** *Bill of Materials* (BoM), instruksi kerja perakitan (*assembly work instruction*), dan SOP quality control didokumentasikan. Pada tahap ini, prinsip *poka-yoke* diterapkan untuk mencegah kesalahan orientasi komponen.

```
┌─────────────────────────────────────────────────────┐
│ Tahap 1: Disassembly & Data Collection              │
│     ↓                                               │
│ Tahap 2: DFA Boothroyd Screening (Q1, Q2, Q3)       │
│     ↓                                               │
│ Tahap 3: Konsolidasi Komponen (Target N_a reduksi)  │
│     ↓                                               │
│ Tahap 4: DFM Process Selection                      │
│     ↓                                               │
│ Tahap 5: Cost Recalculation & Quality Validation    │
│     ↓                                               │
│ Tahap 6: Prototyping & Functional Testing           │
│     ↓                                               │
│ Tahap 7: Documentation & Production Ramp-up         │
└─────────────────────────────────────────────────────┘