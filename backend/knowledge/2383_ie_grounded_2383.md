# 2383 — Redesain Produk Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA): Kerangka Rekayasa Integratif untuk Efisiensi Manufaktur, Pengurangan Biaya, dan Standarisasi Produk Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri perangkat kesehatan rumah tangga (home-care medical devices) mengalami tekanan ganda antara permintaan produk higienis, ergonomis, dan terjangkau dengan tetap mempertahankan standar keamanan materialfood-grade. Amirullah dan Jakaria (2024) dalam artikel "Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method" yang dipublikasikan di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti celah rekayasa yang substansial pada lini produksi keranjang coffee enema konvensional. Produk keranjang coffee enema berfungsi sebagai wadah filtrasi yang memisahkan bubuk kopi dari cairan saat prosedur hidroterapi kolon dilakukan, sehingga material yang digunakan (stainless steel 304, silikon food-grade) dan geometri anyaman (mesh basket) menjadi parameter kritis yang menentukan keamanan pasien, efektivitas filtrasi, serta kecepatan perakitan.

Urgensi ekonomis dari studi ini muncul karena keranjang coffee enema generasi awal yang beredar di pasar dirancang tanpa mempertimbangkan prinsip Design for Manufacture and Assembly (DFMA). Hasilnya adalah jumlah komponen yang berlebihan, geometri las yang sulit distandarisasi, serta tingkat reject rate pada tahap Quality Control yang tinggi karena distorsi mesh akibat proses brazing yang tidak terkontrol. Amirullah dan Jakaria (2024) menunjukkan bahwa produk yang tidak dirancang dengan pendekatan DFMA memiliki Assembly Efficiency Index (AEI) yang rendah, waktu perakitan manual yang panjang, dan biaya produksi per unit yang tidak kompetitif di pasar ekspor.

Konteks akademis dari penelitian ini semakin relevan ketika disandingkan dengan kerangka evaluasi multi-kriteria berbasis Building Information Modelling (BIM) yang dikembangkan oleh Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Islam (2024) menegaskan bahwa keputusan desain konvensional yang hanya mendasarkan diri pada biaya dan kecukupan struktural mengabaikan pengetahuan tentang manufacturability, transportability, dan erectability sejak tahap konsep, sehingga masalah buildability baru terungkap ketika desain telah dibekukan, cetakan telah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya rework yang mahal. Pelajaran dari domain konstruksi jembatan prefabrikasi ini dapat diadaptasi ke lini produksi keranjang coffee enema, di mana keputusan material, jumlah komponen, dan urutan perakitan harus ditentukan sebelum proses stamping dan welding dilakukan.

Studi Amirullah dan Jakaria (2024) menjadi pionir dalam mentranslasi prinsip DFMA—yang awalnya banyak diaplikasikan pada industri otomotif dan peralatan rumah tangga besar—ke produk kesehatan personal berukuran kecil dengan kompleksitas geometri mesh yang tinggi. Pendekatan ini sekaligus menjawab kebutuhan akan perbaikan berkelanjutan (continuous improvement) dalam semangat Lean Manufacturing dan Design for Six Sigma yang telah menjadi standar di industri perangkat kesehatan global. Oleh karena itu, modul ini disusun untuk membedah secara kuantitatif metodologi DFMA yang digunakan, formulasi matematis yang relevan, hingga studi kasus numerik yang dapat direplikasi oleh para praktisi teknik industri.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teori utama yang digunakan oleh Amirullah dan Jakaria (2024) adalah Boothroyd-Dewhurst Design for Manufacture and Assembly (DFMA) yang terdiri atas dua sub-metodologi: Design for Manufacture (DFM) dan Design for Assembly (DFA). Pendekatan DFM berfokus pada kemampuan proses manufaktur (stamping, welding, polishing) untuk memproduksi komponen secara efisien, sementara DFA berfokus pada minimasi jumlah komponen, kemudahan penanganan, dan kecepatan insertion pada tahap perakitan.

**Indeks Efisiensi Perakitan (Assembly Efficiency Index).** Indeks ini menjadi metrik utama untuk menilai kualitas desain dari perspektif DFA:

$$AEI = \frac{N_{min}}{N_a} \times t_{ideal} \times 100\%$$

dengan:

- $N_{min}$ = jumlah minimum komponen yang secara teoritis diperlukan untuk memenuhi fungsi produk
- $N_a$ = jumlah aktual komponen dalam desain
- $t_{ideal}$ = waktu perakitan teoritis (detik) untuk satu unit

Nilai $AEI$ yang baik menurut Boothroyd-Dewhurst adalah $\geq 60\%$. Amirullah dan Jakaria (2024) menggunakan formula ini untuk membandingkan desain eksisting dengan desain hasil redesain.

**Waktu Perakitan Estimasi.** Waktu perakitan total dihitung dengan menjumlahkan waktu penanganan (handling time), waktu penyisipan (insertion time), dan waktu pengencangan/fastening:

$$T_a = \sum_{i=1}^{N_a} \left( t_{h,i} + t_{i,i} + t_{f,i} \right)$$

dengan $t_{h,i}$ adalah waktu handling komponen ke-$i$, $t_{i,i}$ adalah waktu insertion, dan $t_{f,i}$ adalah waktu fastening (brazing, riveting, atau pressing sesuai jenis sambungan). Untuk keranjang coffee enema, sambungan utama menggunakan teknik spot welding dan press-fit sehingga $t_{f,i}$ sangat kecil.

**Fungsi Biaya Manufaktur.** Biaya produksi per unit dimodelkan sebagai:

$$C_u = \sum_{j=1}^{m} \left( C_{mat,j} + C_{proc,j} + C_{tool,j} \right) + C_{ass}$$

dengan:

- $C_{mat,j}$ = biaya material komponen ke-$j$
- $C_{proc,j}$ = biaya proses (stamping, welding, polishing) komponen ke-$j$
- $C_{tool,j}$ = biaya tooling (die, jig, fixture) yang diamortisasi
- $C_{ass}$ = total biaya perakitan per unit

**Design Efficiency Ratio (DER).** Amirullah dan Jakaria (2024) juga menghitung rasio efisiensi desain untuk mengkuantifikasi pengurangan biaya antara desain lama dan baru:

$$DER = \frac{C_{u,old} - C_{u,new}}{C_{u,old}} \times 100\%$$

**Koreksi DfMA Score (Boothroyd Revised).** Untuk setiap komponen dihitung skor tiga digit DfMA:

$$S_{DfMA,i} = \alpha \cdot \left( \frac{n_m \cdot t_m}{t_{ideal}} \right) + \beta \cdot \left( \frac{\ln(EM/EM_{ref})}{\ln(2)} \right)$$

dengan $\alpha$ dan $\beta$ adalah bobot relatif (umumnya $\alpha + \beta = 1$), $n_m$ adalah jumlah operasi manufaktur, $t_m$ adalah waktu manufaktur per operasi, $EM$ adalah encapsulation measure (indikator kemudahan embedding komponen ke sub-assembly), dan $EM_{ref}$ adalah nilai referensi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun metodologi DFMA dalam tujuh tahap sistematis yang dapat diadopsi sebagai SOP dalam industri rekayasa produk:

**Tahap 1 — Analisis Desain Eksisting.** Melakukan *disassembly analysis* pada produk keranjang coffee enema yang beredar di pasaran. Setiap komponen diidentifikasi jenis material, dimensi, fungsi, dan metode joining. Untuk desain awal, umumnya ditemukan 12–15 komponen termasuk ring atas, ring bawah, bracket pengait, mesh silinder, dua cincin penguat, dan 4–6 pengait.

**Tahap 2 — Penentuan Fungsi Esensial.** Menggunakan *functional analysis* (Function Analysis System Technique/FAST) untuk menentukan fungsi primer (memfilter bubuk kopi), fungsi sekunder (memudahkan pegangan, membersihkan), dan fungsi sekunder (estetika, branding). Dari sini ditetapkan $N_{min}$ = 4 komponen minimum (badan mesh, ring atas/bawah terintegrasi, gagang, mekanisme pengunci).

**Tahap 3 — Penerapan Aturan DFA.** Aturan yang digunakan: (a) eliminasi komponen yang tidak menambah fungsi, (b) integrasi komponen melalui *integral design* (misalnya ring atas dan bawah dicetak sebagai satu unit dengan badan silinder), (c) standardisasi tipe fastening, (d) penggunaan *symmetry* untuk menghindari kesalahan orientasi.

**Tahap 4 — Redesain Geometri & Material.** Amirullah dan Jakaria (2024) melakukan redesain dengan mengganti sistem multi-piece brazing menjadi konstruksi single-piece stamping dari stainless steel 304 food-grade mesh, dengan gagang polimer food-grade polypropylene (PP) yang di-injection molded.

**Tahap 5 — Perhitungan AEI dan Biaya.** Menghitung ulang AEI, waktu perakitan, dan biaya produksi untuk desain baru, lalu membandingkan dengan desain lama menggunakan formula pada Bagian 2.

**Tahap 6 — Simulasi & Prototyping.** Mendesain CAD 3D, melakukan simulasi stamping dan welding (FEA), kemudian membuat prototipe untuk verifikasi ergonomis dan uji filtrasi.

**Tahap 7 — Validasi & Implementasi.** Prototipe diuji sesuai standar ISO 13485 (perangkat medis) dan SNI untuk produk kontak makanan, lalu dilakukan pilot production.

```
┌─────────────────────────────────────────────────────┐
│  Tahap 1: Disassembly & Analisis Desain Eksisting   │
│  Tahap 2: Functional Analysis (FAST Diagram)        │
│  Tahap 3: Aturan DFA (eliminasi, integrasi, simetri)│
│  Tahap 4: Redesain Geometri & Material              │
│  Tahap 5: Perhitungan AEI, Ta, Cu                   │
│  Tahap 6: CAD 3D, FEA, Prototyping                  │
│  Tahap 7: Validasi ISO 13485, Pilot Production       │
└─────────────────────────────────────────────────────┘
```

Pendekatan ini paralel dengan kerangka BIM-DfMA yang dikembangkan Islam (2024) untuk jembatan prefabrikasi, di mana kriteria manufacturability, transportability, dan erectability dimasukkan ke dalam model informasi sejak tahap konsep, bukan ditambahkan belakangan saat desain sudah terkunci.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi metodologi Amirullah dan Jakaria (2024), disajikan studi kasus kuantitatif dengan parameter industri realistis.

**Data Desain Lama (Eksisting):**

| Komponen | Material | Jumlah ($N_a$) | $t_h$ (detik) | $t_i$ (detik) | $t_f$ (detik) |
|---|---|---|---|---|---|
| Ring atas SS304 | Stainless Steel 304 | 1 | 3,0 | 5,0 | 8,0 (welding) |
| Ring bawah SS304 | Stainless Steel 304 | 1 | 3,0 | 5,0 | 8,0 (welding) |
| Mesh silinder | SS304 wire mesh | 1 | 4,0 | 6,0 | 6,0 (brazing) |
| Bracket gagang ×4 | SS304 | 4 | 2,5 × 4 | 3,5 × 4 | 4,0 × 4 |
| Gagang kayu | Polypropylene | 1 | 2,0 | 4,0 | 2,0 (press) |
| Pengunci | SS304 | 2 | 1,5 × 2 | 2,5 × 2 | 3,0 × 2 |
| **Total** | | **$N_a = 11$** | **23,5** | **42,5** | **40,0** |

Total $T_a$ desain lama = 23,5 + 42,5 + 40,0 = **106,0 detik/unit**.

**Perhitungan AEI Desain Lama:**

$$AEI_{old} = \frac{4}{11} \times \frac{30}{106,0} \times 100\% = \frac{4}{11} \times 0{,}2830 \times 100\% \approx 10{,}3\%$$

Nilai ini sangat rendah — jauh di bawah benchmark 60% — mengonfirmasi temuan Amirullah dan Jakaria (2024) bahwa desain lama sangat tidak efisien secara DFMA.

**Estimasi Biaya Desain Lama:**

| Komponen | $C_{mat}$ (IDR) | $C_{proc}$ (IDR) | $C_{tool}$ (IDR/unit) |
|---|---|---|---|
| Ring atas | 1.500 | 800 | 600 |
| Ring bawah | 1.500 | 800 | 600 |
| Mesh | 4.000 | 2.500 | 1.000 |
| Bracket ×4 | 800 × 4 = 3.200 | 400 × 4 = 1.600 | 300 × 4 = 1.200 |
| Gagang | 2.000 | 1.200 | 800 |
| Pengunci ×2 | 600 × 2 = 1.200 | 300 × 2 = 600 | 200 × 2 = 400 |
| **Subtotal** | **13.400** | **7.500** | **5.600** |
| $C_{ass}$ (106 detik × Rp25/detik) | | | 2.650 |
| **Total $C