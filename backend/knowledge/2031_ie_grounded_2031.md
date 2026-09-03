# 2031 — Redesain Produk Medis berbasis Metode Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Generalisasi Lintas-Sektor Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) menghadapi tantangan rekayasa yang unik karena produk yang dihasilkan harus memenuhi tiga kriteria simultan: keamanan pasien (patient safety), efisiensi produksi (manufacturability), dan kepatuhan terhadap standar regulasi seperti ISO 13485. Amirullah dan Jakaria (2024) dalam artikel *Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)* yang dipublikasikan di *Peer-Reviewed Journal* (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa banyak perangkat medis sederhana — termasuk *coffee enema basket* yang berfungsi sebagai wadah filtrasi biji kopi untuk prosedur hidroterapi kolon — masih diproduksi dengan desain konvensional yang memiliki tingkat kompleksitas perakitan terlalu tinggi sehingga menimbulkan inefisiensi biaya, waktu, dan risiko kontaminasi silang.

Permasalahan ini memiliki urgensi operasional yang signifikan. Pertama, dari perspektif *total cost of ownership*, setiap tambahan komponen pada desain akan menimbulkan biaya material, biaya proses manufaktur (machining, injection molding, stamping), biaya perakitan (assembly), dan biaya inspeksi kualitas. Kedua, dari perspektif *lead time*, desain dengan banyak komponen kecil membutuhkan waktu perakitan yang lebih panjang dan toleransi kumulatif yang lebih ketat. Ketiga, dari perspektif *patient safety*, jumlah *part count* yang berlebihan meningkatkan potensi *failure mode* dan menyulitkan proses sterilisasi. Keempat, dari perspektif *scalability*, produk yang sulit dirakit tidak dapat diproduksi massal secara konsisten.

Konteks ini paralel dengan temuan Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) yang menunjukkan bahwa keputusan desain jembatan prefabrikasi konvensional dibuat berdasarkan pertimbangan biaya dan kecukupan struktural saja, padahal pengetahuan tentang manufaktur, transportasi, pengangkatan, dan ereksi baru dimasukkan setelah desain dikunci — sehingga masalah buildability baru teridentifikasi pada tahap shop-drawing atau di lapangan. Persamaan struktural antara kedua domain (perangkat medis sederhana dan infrastruktur jembatan prefabrikasi) menunjukkan bahwa metodologi DFMA bersifat *domain-agnostic* dan applicable lintas sektor ketika diintegrasikan dengan baik. Amirullah dan Jakaria (2024) menjawab kebutuhan ini dengan menerapkan kerangka DFMA Boothroyd-Dewhurst yang sudah teruji pada kasus nyata redesain coffee enema basket, menghasilkan reduksi jumlah komponen, waktu perakitan, dan biaya produksi yang terukur.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada kerangka Boothroyd-Dewhurst yang memisahkan dua aktivitas utama: **Design for Manufacture (DFM)** — mengoptimalkan proses fabrikasi komponen individual — dan **Design for Assembly (DFA)** — mengoptimalkan proses penggabungan komponen menjadi produk jadi.

### 2.1 Indeks Efisiensi Perakitan (Design Efficiency)

Indeks utama yang digunakan untuk mengukur kualitas desain dari sisi perakitan didefinisikan sebagai berikut:

$$
E_m = \frac{N_m \cdot t_m}{N_a \cdot t_a} \times 100\%
$$

di mana $E_m$ adalah efisiensi desain (%), $N_m$ adalah jumlah minimum part teoritis yang diperlukan untuk memenuhi fungsi produk, $t_m$ adalah waktu perakitan teoritis minimum (detik), $N_a$ adalah jumlah aktual part pada desain, dan $t_a$ adalah waktu perakitan aktual (detik). Nilai $E_m$ yang semakin mendekati 100% menunjukkan desain yang semakin efisien.

### 2.2 Waktu Perakitan Total

Waktu perakitan total dihitung menggunakan prinsip operasi fundamental Boothroyd:

$$
T_a = \sum_{i=1}^{N_a} \left( t_{h,i} + t_{i,i} + t_{s,i} + t_{f,i} \right)
$$

di mana $T_a$ adalah total waktu perakitan, $t_{h,i}$ adalah waktu *handling* komponen ke-$i$, $t_{i,i}$ adalah waktu *insertion* (pemasangan), $t_{s,i}$ adalah waktu *securing* (pengencangan/penguncian), dan $t_{f,i}$ adalah waktu *fastening* (jenis fastener seperti sekrup, klip, atau pengelasan). Untuk desain ideal, ketiga operasi terakhir harus nol, yang hanya dapat dicapai dengan prinsip *one-direction assembly* dan *self-locking features*.

### 2.3 Reduksi Biaya Produksi

Total biaya produksi direpresentasikan sebagai:

$$
C_{total} = C_{material} + C_{manufaktur} + C_{assembly} + C_{quality} + C_{overhead}
$$

Reduksi biaya setelah redesain DFMA dihitung sebagai:

$$
\Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%
$$

di mana $\Delta C$ adalah persentase reduksi biaya total, $C_{before}$ adalah biaya produksi sebelum redesain, dan $C_{after}$ adalah biaya produksi setelah redesain.

### 2.4 Kriteria Minimasi Part (Boothroyd Criteria)

Setiap komponen dalam desain dievaluasi menggunakan tiga kriteria Boothroyd untuk menentukan kelayakan eliminasi:

$$
\text{Kriteria 1: } \frac{n_{ideal}}{N_a} \leq 1 \quad \text{(selama pergerakan relatif tidak diperlukan)}
$$

$$
\text{Kriteria 2: } t_{assembly,i} \ll t_{manufacture,i} \quad \text{(apakah komponen benar-benar dibutuhkan sebagai bagian terpisah)}
$$

$$
\text{Kriteria 3: } f_{separation} = \text{minimal} \quad \text{(apakah pemisahan untuk assembly/maintenance mutlak diperlukan)}
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam tujuh tahap sistematis sebagai berikut:

**Tahap 1 — Identifikasi Fungsi Produk dan Kebutuhan Pengguna.** Tahap ini mencakup pendefinisian *voice of customer* (VOC) untuk coffee enema basket: kapasitas filtrasi, kemudahan pembersihan, biocompatibility, dan daya tahan terhadap sterilisasi autoclave pada suhu $\geq 121°\text{C}$.

**Tahap 2 — Pembuatan *Bill of Materials* (BoM) Awal dan Pemetaan Proses.** Seluruh komponen existing diinventarisasi, lalu dipetakan dalam *product structure tree* dan *assembly flow chart* untuk mengidentifikasi *value-added* dan *non-value-added* operations.

**Tahap 3 — Penerapan Kriteria Eliminasi Part.** Setiap komponen dievaluasi menggunakan tiga kriteria Boothroyd (Persamaan di Bagian 2.4). Komponen yang gagal lolos ketiga kriteria menjadi kandidat integrasi.

**Tahap 4 — Redesain Konseptual.** Komponen-komponen yang lolos eliminasi digabungkan melalui mekanisme *snap-fit*, *living hinge*, atau integrasi multi-cavity injection molding.

**Tahap 5 — Analisis DFM.** Untuk setiap komponen baru, dipilih proses manufaktur optimal (misalnya: injection molding untuk polimer food-grade, sheet metal stamping untuk stainless steel 304) dengan mempertimbangkan *cycle time* $t_c$, *yield rate* $Y$, dan *tooling cost*.

**Tahap 6 — Analisis DFA dan Simulasi Perakitan.** Waktu perakitan dihitung ulang menggunakan Persamaan Boothroyd, kemudian divalidasi melalui *mock-up assembly* dan time study dengan *stopwatch* berkalibrasi.

**Tahap 7 — Validasi dan Prototipe.** Prototipe diuji terhadap fungsi, ergonomi, dan kepatuhan regulasi sebelum disetujui untuk produksi massal.

SOP ini sejajar dengan framework yang diajukan Islam (2024) untuk evaluasi jembatan prefabrikasi, yang mengintegrasikan kriteria DfMA ke dalam model BIM multi-kriteria. Pada kedua domain tersebut, kunci keberhasilan adalah memasukkan constraint manufaktur sejak tahap konseptual — bukan sebagai *afterthought* setelah desain struktural dikunci.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter yang dilaporkan Amirullah dan Jakaria (2024) untuk kasus coffee enema basket, dilakukan rekonstruksi perhitungan sebagai berikut.

**Tabel 1. Parameter Desain Before-After**

| Parameter | Sebelum (Before) | Sesudah (After) |
|---|---|---|
| Jumlah part ($N$) | 12 | 7 |
| Jumlah fastener | 8 | 3 |
| Waktu assembly ($t_a$, detik) | 285 | 132 |
| Material utama | Stainless 304 + 3 polimer | Stainless 304 + 1 polimer |
| Biaya produksi/unit (Rp) | 87.500 | 61.250 |

**Langkah 1 — Hitung efisiensi desain awal (Before).**

Mengasumsikan jumlah part minimum teoritis $N_m = 5$ dan waktu minimum teoritis $t_m = 90$ detik:

$$
E_{m,before} = \frac{5 \times 90}{12 \times 285} \times 100\% = \frac{450}{3.420} \times 100\% = 13{,}16\%
$$

**Langkah 2 — Hitung efisiensi desain setelah redesain (After).**

Dengan jumlah part berkurang menjadi 7 dan waktu perakitan 132 detik:

$$
E_{m,after} = \frac{5 \times 90}{7 \times 132} \times 100\% = \frac{450}{924} \times 100\% = 48{,}70\%
$$

**Langkah 3 — Hitung perbaikan efisiensi.**

$$
\Delta E_m = E_{m,after} - E_{m,before} = 48{,}70\% - 13{,}16\% = 35{,}54\ \text{persentase poin}
$$

Peningkatan efisiensi absolut sebesar 3,7 kali lipat ini menunjukkan bahwa redesain berhasil menyelaraskan struktur produk dengan fungsi intinya.

**Langkah 4 — Hitung reduksi biaya.**

$$
\Delta C = \frac{87.500 - 61.250}{87.500} \times 100\% = \frac{26.250}{