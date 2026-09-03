# 2431 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Dari Optimalisasi Keranjang Kopi hingga Sistem Prefabrikasi Jembatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan ganda yang bersifat struktural: di satu sisi, permintaan konsumen terhadap produk yang semakin fungsional, estetis, dan higienis; di sisi lain, kebutuhan untuk menekan biaya produksi, mempercepat *time-to-market*, dan meningkatkan keberulangan proses (*process repeatability*). Dalam konteks ini, metode **Design for Manufacture and Assembly (DFMA)** muncul sebagai kerangka kerja strategis yang menyatukan pertimbangan manufaktur dan perakitan sejak fase konseptual desain — jauh sebelum gambar kerja, cetakan, atau lini perakitan final ditetapkan. Amirullah dan Jakaria (2024) melalui studinya yang berjudul *"Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method"* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menunjukkan bahwa sebuah produk fungsional sederhana seperti keranjang kopi untuk terapi enema — yang pada awalnya memiliki geometri rakitan multi-komponen yang rumit — dapat di-redesain secara radikal dengan mengurangi jumlah part, menyederhanakan operasi perakitan, dan menstandarkan interface antar-komponen, sehingga menurunkan *unit cost* sekaligus meningkatkan kelayakan produksi massal.

Urgensi studi ini diperkuat oleh observasi empiris lapangan yang dilakukan oleh kedua penulis: desain keranjang enema kopi generasi awal masih menggunakan kawat stainless steel yang dibengkokkan secara manual (*manual bending*), dengan sambungan las titik (*spot welding*) yang tidak hanya menambah waktu kerja langsung (*direct labor*) tetapi juga menciptakan variabilitas dimensi antar-unit produksi. Variabilitas tersebut, menurut Boothroyd, Dewhurst, dan Knight yang menjadi referensi klasik DFMA, merupakan salah satu dari tiga sumber utama inefisiensi perakitan selain tingkat kesulitan penanganan (*handling difficulty*) dan jumlah komponen. Penerapan DFMA — yang merupakan gabungan sinergis antara **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)** — menjadi semakin relevan di era *Industry 4.0* ketika perusahaan dituntut untuk memproduksi varian produk dalam jumlah kecil (*high-mix, low-volume*) namun dengan presisi tinggi.

Secara paralel, Mubashir Islam (2024) dalam artikelnya yang dimuat di *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperkuat relevansi lintas-sektor DFMA dengan mengusulkan integrasi prinsip DfMA ke dalam kerangka evaluasi multi-kriteria berbasis Building Information Modelling (BIM) untuk konstruksi jembatan prefabrikasi. Studi Islam menunjukkan bahwa keputusan desain konvensional yang hanya didasarkan pada biaya dan kecukupan struktural cenderung mengabaikan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi, sehingga masalah *buildability* baru terungkap pada tahap *shop-drawing* atau di lapangan — ketika desain sudah *frozen* dan koreksi menjadi sangat mahal. Perspektif ini menunjukkan bahwa kelemahan metodologis dalam desain produk bukan fenomena tunggal sektor, melainkan pola sistemik yang membutuhkan standardisasi prosedur evaluasi DFMA di berbagai rantai pasok industri.

Dengan demikian, modul ini tidak hanya membahas aplikasi DFMA pada produk *consumer goods* skala kecil seperti keranjang enema kopi, tetapi juga menggeneralisasi prinsip metodologisnya untuk konteks infrastruktur berat dan manufaktur presisi. Tujuannya adalah membekali praktisi Teknik Industri dengan perangkat kuantitatif yang teruji secara empiris untuk mengkuantifikasi trade-off antara kompleksitas desain, biaya produksi, dan efisiensi perakitan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar Design for Manufacture and Assembly

DFMA, sebagaimana disintesiskan oleh Boothroyd, Dewhurst, dan Knight (2010), beroperasi pada dua pilar utama: **DFM** yang mengoptimalkan proses fabrikasi setiap komponen, dan **DFA** yang meminimalkan kompleksitas perakitan. Amirullah dan Jakaria (2024) dalam studinya secara eksplisit menggunakan metodologi DFA Boothroyd untuk menghitung *Design Efficiency* dari desain keranjang enema kopi sebelum dan sesudah redesain.

### 2.2 Rumus Dasar DFA: Design Efficiency (η_DFA)

Efisiensi desain perakitan didefinisikan sebagai rasio antara waktu perakitan teoritis minimum (berdasarkan jumlah part minimum) terhadap waktu perakitan aktual hasil estimasi. Formulasi matematisnya adalah:

$$\eta_{DFA} = \frac{N_{min} \cdot t_a}{T_{ma}} \times 100\%$$

Di mana:
- $N_{min}$ = jumlah minimum komponen ideal (secara fungsional)
- $t_a$ = waktu perakitan dasar (*basic assembly time*), biasanya diasumsikan $t_a = 3$ detik
- $T_{ma}$ = *total manual assembly time* aktual hasil estimasi (detik)

### 2.3 Rumus Perhitungan Manual Assembly Time

Total waktu perakitan manual dihitung dengan menjumlahkan waktu penanganan (*handling*) dan waktu penyisipan/pemasangan (*insertion/fastening*) untuk setiap komponen:

$$T_{ma} = \sum_{i=1}^{n} (t_{h,i} + t_{p,i})$$

Di mana:
- $t_{h,i}$ = waktu penanganan komponen ke-$i$ (detik)
- $t_{p,i}$ = waktu penyisipan/pemasangan komponen ke-$i$ (detik)
- $n$ = jumlah total komponen

Untuk komponen yang memerlukan pengencangan sekrup atau pengelasan, waktu tambahan fasterning juga ditambahkan:

$$t_{f,i} = \frac{T_{f,base}}{i}$$

dimana $T_{f,base}$ adalah waktu dasar pengencangan (≈ 2 detik untuk sekrup M4) dan $i$ adalah jumlah sekrup.

### 2.4 Rumus Perhitungan Biaya Manufaktur dan Perakitan

Total biaya per unit dihitung dengan formulasi:

$$C_{unit} = C_{material} + C_{manufacture} + C_{assembly} + C_{overhead}$$

Dengan dekomposisi lebih lanjut:

$$C_{assembly} = T_{ma} \cdot L_{rate}$$

di mana $L_{rate}$ adalah tarif upah tenaga kerja langsung (biasanya dalam USD per detik atau IDR per detik).

### 2.5 Koefisien Reduksi Biaya Pascaredesain

Efektivitas redesain diukur dengan rasio pengurangan biaya:

$$\Delta C_{reduction} = \frac{C_{unit,old} - C_{unit,new}}{C_{unit,old}} \times 100\%$$

### 2.6 Bill of Materials (BOM) dan Material Utilization Index

Material Utilization Index (MUI) adalah rasio massa produk jadi terhadap massa bahan baku yang dibeli:

$$MUI = \frac{m_{finished}}{m_{raw}} \times 100\%$$

Nilai MUI yang rendah menunjukkan waste material yang tinggi, yang menjadi target reduksi dalam fase DFM.

### 2.7 Formulasi Multimodal dalam Konteks BIM-DfMA (Islam, 2024)

Untuk aplikasi infrastruktur seperti jembatan prefabrikasi, Islam (2024) mengusulkan fungsi utilitas multi-kriteria yang menggabungkan parameter DfMA ke dalam skor kelayakan desain:

$$U_j = \sum_{k=1}^{K} w_k \cdot s_{j,k}$$

di mana:
- $U_j$ = utilitas desain alternatif ke-$j$
- $w_k$ = bobot kriteria ke-$k$ (dengan $\sum w_k = 1$)
- $s_{j,k}$ = skor ternormalisasi desain $j$ pada kriteria $k$
- $K$ = jumlah kriteria evaluasi (manufacturability, transportability, liftability, erectability, cost, structural adequacy)

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA mengikuti alur kerja terstruktur yang diadopsi oleh Amirullah dan Jakaria (2024). Berikut adalah Standard Operating Procedure (SOP) sistematis yang dapat diimplementasikan di industri:

### 3.1 Tahap 1: Analisis Desain Eksisting (Baseline Study)

1. **Dekomposisi Produk**: Lakukan *exploded view* pada gambar rakitan untuk mengidentifikasi seluruh komponen.
2. **Pembuatan Tabel DFA**: Catat setiap komponen dengan kolom: nama part, jumlah, fungsi, metode pengencang, dan waktu estimasi.
3. **Penghitungan $T_{ma}$ baseline** menggunakan rumus pada Sub-bagian 2.3.
4. **Estimasi biaya eksisting** dengan Formula 2.4.

### 3.2 Tahap 2: Konseptualisasi Alternatif Redesain

1. **Questioning Function**: Tanyakan untuk setiap komponen — *"Apakah part ini benar-benar diperlukan? Apakah fungsinya dapat diintegrasikan ke part lain?"*
2. **Material Selection**: Pilih material yang mengurangi jumlah proses fabrikasi (misalnya: *injection molding*取代 *sheet metal bending + welding*).
3. **Symmetry & Self-Alignment**: Desain komponen dengan fitur *self-locating* agar perakitan tidak memerlukan jig khusus.

### 3.3 Tahap 3: Evaluasi dan Seleksi Konsep

1. **Pembuatan Prototipe Konseptual**: Model 3D CAD alternatif.
2. **Perhitungan Ulang DFA**: Gunakan Formula 2.2 dan 2.3 untuk desain baru.
3. **Analisis Trade-off**: Gunakan *Pugh Matrix* dengan bobot manufacturability, cost, dan functionality.

### 3.4 Tahap 4: Validasi Manufaktur

1. **Pembuatan Prototipe Fisik**: Guna verifikasi proses fabrikasi.
2. **Time Study**: Pengukuran $T_{ma}$ aktual dengan stopwatch menggunakan metode *work sampling*.
3. **Cost Recalculation**: Hitung $C_{unit}$ final menggunakan Formula 2.4.

### 3.5 Diagram Alir SOP DFMA

```
[Mulai] → [Identifikasi Produk] → [Analisis Desain Eksisting]
    ↓
[Hitung N, T_ma, η_DFA awal]
    ↓
[Questioning: Apakah part dapat dihapus/diintegrasikan?]
    ↓ (Ya) → [Konsep Redesain] → [Hitung N, T_ma, η_DFA baru]
    ↓ (Tidak)
[Optimalisasi Material & Proses]
    ↓
[Bandingkan η_DFA_old vs η_DFA_new]
    ↓
[ΔC_reduction ≥ Target?]
    ↓ (Ya) → [Validasi Prototipe] → [Selesai]
    ↓ (Tidak) → [Iterasi Redesain]
```

### 3.6 Integrasi dengan BIM untuk Skala Infrastruktur (Merujuk pada Islam, 2024)

Untuk proyek infrastruktur seperti jembatan prefabrikasi, Islam (2024) menambahkan dimensi *multi-stakeholder* dalam SOP:

1. **Pra-desain**: Masukkan data DfMA ke dalam model BIM parametrik (Revit, Tekla).
3. **Simulasi 4D**: Validasi urutan ereksi (*erection sequence*) dan identifikasi clash detection.
4. **Skor Multi-Kriteria**: Hitung utilitas $U_j$ menggunakan Formula 2.7.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan kerangka teoretis pada Bagian 2 dan metodologi pada Bagian 3, berikut adalah studi kasus kuantitatif yang mereplikasi logika perhitungan Amirullah dan Jakaria (2024) untuk redesain keranjang enema kopi, dengan data parameter industri yang realistis.

### 4.1 Parameter Input Desain Eksisting (Baseline)

Misalkan desain eksisting keranjang enema kopi terdiri atas komponen sebagai berikut (diadaptasi dari tipologi produk stainless steel mesh basket):

| No | Nama Part | Jumlah | Metode Join | $t_h$ (detik) | $t_p$ (detik) | $t_f$ (detik) |
|----|-----------|--------|-------------|---------------|----------------|----------------|
| 1 | Rangka dasar (frame) | 1 | - | 2.0 | 1.5 | 0 |
| 2 | Kawat melingkar vertikal | 8 | Las titik | 1.8 | 2.5 | 3.5 |
| 3 | Kawat horizontal silang | 4 | Las titik | 1.8 | 2.2 | 3.0 |
| 4 | Pegangan handle | 1 | Las | 2.5 | 3.0 | 4.0 |
| 5 | Ring pengunci | 2 | Snap-fit | 1.2 | 1.0 | 0 |
| 6 | Kaki dasar | 3 | Las | 1.5 | 2.0 | 2.5 |

### 4.2 Perhitungan Manual Assembly Time Eksisting

**Komponen 1 (Rangka dasar):**
$$t_1 = t_{h,1} + t_{p,1} = 2{,}0 + 1{,}5 = 3{,}5 \text{ detik}$$

**Komponen 2 (Kawat vertikal, 8 unit):**
$$t_2 = 8 \cdot (t_{h,2} + t_{p,2} + t_{f,2}) = 8 \cdot (1{,}8 + 2{,}5