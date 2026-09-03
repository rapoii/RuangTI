# 2495 — Redesain Coffee Enema Basket Menggunakan Prinsip Design for Manufacture and Assembly (DFMA): Pendekatan Rekayasa Industri untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri peralatan medis komplementer dan home-care therapy mengalami pertumbuhan signifikan dalam dua dekade terakhir, terutama pasca-pandemi COVID-19 yang mengubah pola konsumsi produk kesehatan rumah tangga. Salah satu produk yang mengalami lonjakan permintaan adalah *coffee enema basket* — perangkat yang digunakan sebagai media penyaring dalam prosedur irigasi kolon dengan bantuan larutan kopi. Produk ini pada dasarnya merupakan wadah saringan yang harus memenuhi tiga kriteria fungsional simultan: ketahanan terhadap suhu tinggi (≥80°C), inertness kimiawi terhadap kafein dan asam organik, serta kemampuan filtrasi yang konsisten. Amirullah dan Jakaria ([https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) dalam publikasi tahun 2024 menyoroti bahwa desain konvensional *coffee enema basket* yang beredar di pasar Indonesia memiliki cacat rekayasa yang substansial: jumlah komponen yang berlebihan, proses perakitan manual yang tidak terstandarisasi, serta pemilihan material yang tidak optimal terhadap proses manufaktur yang tersedia di industri kecil-menengah (IKM) lokal.

Urgensi penelitian ini diperkuat oleh beberapa fenomena industri riil. Pertama, *lead time* produksi desain lama rata-rata mencapai 18–22 menit per unit dengan tingkat reject rate 12–15%, yang menggerus margin keuntungan UMKM di kisaran 8–14%. Kedua, tidak adanya desain modular menghambat upaya standardisasi, sehingga variasi antar-batch sulit dikontrol dan menurunkan *brand consistency*. Ketiga, biaya produksi tinggi yang berasal dari operasi machining dan assembling yang tidak efisien membuat harga jual eceran tidak kompetitif di pasar regional Asia Tenggara. Keempat, fenomena ini bukan孤立的 (terisolasi) — Islam ([https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam studi BIM-DfMA-nya untuk konstruksi jembatan pracetak menunjukkan pola kegagalan identik: keputusan desain diambil hanya berdasarkan kriteria biaya dan kecukupan struktural, tanpa memasukkan pengetahuan manufaktur, transportasi, dan erection pada tahap konseptual. Kesamaan pola lintas-domain ini memperkuat premis bahwa DFMA merupakan intervensi metodologis yang bersifat generik dan aplikatif.

Konteks ekonomi mikro dari produk ini cukup menarik: dengan asumsi volume produksi 5.000 unit/bulan, setiap pengurangan waktu perakitan sebesar 1 menit berpotensi menghemat 83 jam kerja/bulan, yang ekuivalen dengan satu Full-Time Equivalent (FTE) operator. Oleh karena itu, redesain berbasis DFMA bukan sekadar optimasi teknikal, melainkan keputusan strategis yang直接影响 (secara langsung berdampak pada) struktur biaya, kapasitas produksi, dan daya saing UMKM. Modul ini akan membedah secara sistematis bagaimana metodologi DFMA — yang dikembangkan oleh Boothroyd dan Dewhurst sejak 1980-an — dapat diadaptasikan untuk memecahkan permasalahan konkret pada produk sederhana seperti *coffee enema basket*.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi Design for Manufacture and Assembly (DFMA) merupakan kerangka integratif yang menggabungkan dua subdomain utama: **Design for Manufacture (DFM)** yang berfokus pada optimalisasi proses fabrikasi individual, dan **Design for Assembly (DFA)** yang menitikberatkan pada minimalisasi kompleksitas perakitan. Amirullah dan Jakaria ([https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengadopsi prosedur DFA Boothroyd-Dewhurst sebagai kerangka utama, yang berbasis pada tiga aksioma fundamental: (1) minimalisasi jumlah komponen, (2) optimasi *insertion* dan *fastening* operations, serta (3) standarisasi geometri untuk memanfaatkan proses otomatis.

### 2.1 Indeks Efisiensi Perakitan (Assembly Efficiency Index)

Efisiensi perakitan didefinisikan sebagai rasio antara waktu perakitan teoritis-minimum terhadap waktu aktual yang dibutuhkan:

$$E_a = \frac{t_{min}}{t_a} \times 100\%$$

dengan $E_a$ adalah efisiensi perakitan (%), $t_{min}$ adalah waktu perakitan minimum teoritis (detik), dan $t_a$ adalah waktu perakitan aktual hasil pengukuran (detik). Nilai $E_a$ yang tinggi mengindikasikan bahwa proses perakitan telah mendekati batas ideal dan tidak banyak mengandung *waste motion* (gerak sia-sia).

### 2.2 Indeks Reduksi Komponen (Parts Reduction Ratio)

Reduksi jumlah komponen merupakan variabel kunci dalam DFA. Rasio reduksi dinyatakan sebagai:

$$\Delta N = \frac{N_0 - N_f}{N_0} \times 100\%$$

di mana $N_0$ adalah jumlah komponen desain asli (*baseline*) dan $N_f$ adalah jumlah komponen desain redesain. Secara empiris, Boothroyd menunjukkan bahwa setiap pengurangan satu part pada rakitan hingga 10 part memberikan *cost saving* sekitar 30–50% dari total biaya perakitan.

### 2.3 Fungsi Biaya Total Manufaktur-Perakitan

Total biaya per unit produk dihitung menggunakan formulasi terstruktur:

$$C_{total} = C_m + C_a + C_{mat}$$

dengan $C_m$ adalah biaya manufaktur (Rp/unit), $C_a$ adalah biaya perakitan (Rp/unit), dan $C_{mat}$ adalah biaya material (Rp/unit). Komponen biaya perakitan sendiri dapat diuraikan lebih lanjut:

$$C_a = \sum_{i=1}^{N_f} t_{a,i} \times R_{op} + C_{tooling}$$

di mana $t_{a,i}$ adalah waktu perakitan komponen ke-$i$ (detik), $R_{op}$ adalah tarif operator (Rp/detik), dan $C_{tooling}$ adalah biaya perkakas khusus.

### 2.4 Indeks Performansi Desain (Design Efficiency)

Kinerja keseluruhan redesain diukur menggunakan *Design Efficiency Index*:

$$\eta_{DFMA} = \frac{E_a^{new}}{E_a^{old}} \times \frac{C_{old}}{C_{new}}$$

Nilai $\eta_{DFMA} > 1$ menandakan bahwa redesain memberikan peningkatan efisiensi yang secara simultan memperbaiki kecepatan perakitan dan menurunkan biaya produksi — sebuah kondisi yang disebut *Pareto-superior solution*.

### 2.5 Prosedur Seleksi Material Berbasis DFM

Pemilihan material mengikuti fungsi diskriminan yang mempertimbangkan empat parameter utama: kekuatan tarik ($\sigma_t$), tahan korosi ($\alpha_c$), kemampuan mesin ($\gamma_m$), dan biaya per satuan massa ($c_m$). Skor kelayakan material:

$$S_m = w_1 \cdot \sigma_t' + w_2 \cdot \alpha_c' + w_3 \cdot \gamma_m' + w_4 \cdot (1 - c_m')$$

dengan $w_k$ adalah bobot kriteria ($\sum w_k = 1$) dan simbol aksen ($'$) menunjukkan nilai ternormalisasi pada skala [0,1]. Untuk *coffee enema basket* yang bersentuhan dengan cairan suhu tinggi, bobot tipikal yang digunakan Amirullah dan Jakaria adalah $w_1 = 0{,}30$, $w_2 = 0{,}30$, $w_3 = 0{,}25$, $w_4 = 0{,}15$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria ([https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyusun prosedur DFMA dalam enam tahapan sistematis yang membentuk *Standard Operating Procedure* (SOP) untuk redesain produk. Prosedur ini selaras dengan kerangka yang diadaptasi Islam ([https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) untuk domain jembatan pracetak, menunjukkan universalitas metodologi.

**Tahap 1 — Analisis Produk Baseline.** Melakukan *disassembly analysis* terhadap produk eksisting dengan dokumentasi CAD (Computer-Aided Design), Bill of Materials (BOM), dan time study setiap operasi perakitan. Setiap komponen diberi kode identifikasi dan fungsi.

**Tahap 2 — Evaluasi Kegunaan Setiap Komponen.** Setiap part dievaluasi menggunakan tiga pertanyaan kritis Boothroyd: (a) Apakah part bergerak relatif terhadap part lain saat operasi? (b) Apakah part memerlukan material berbeda? (c) Apakah part harus dipisahkan untuk memungkinkan perakitan/pemeliharaan komponen lain? Jika ketiganya "tidak", maka kandidat eliminasi sangat kuat.

**Tahap 3 — Eliminasi dan Integrasi Komponen.** Menggunakan prinsip *part integration* — memfusikan dua atau lebih komponen menjadi satu fitur melalui *casting*, *stamping*, atau *injection molding*. Islam ([https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) menambahkan dimensi BIM untuk memastikan bahwa keputusan integrasi tetap memenuhi constraint struktural dan logistik erection.

**Tahap 4 — Optimasi Geometri untuk Manufaktur.** Menerapkan *Design for X* (DFX) rules: uniform wall thickness, draft angle minimum 1°, fillet radius minimum 0,5 mm untuk bagian plastik, dan *machining allowance* yang sesuai untuk komponen logam.

**Tahap 5 — Penentuan Material dan Proses.** Menggunakan fungsi diskriminan pada Persamaan (5) untuk memilih material optimal. Untuk proses fabrikasi, diterapkan hierarki keputusan: casting → stamping → injection molding → machining → additive manufacturing, sesuai urutan *economy of scale*.

**Tahap 6 — Validasi dan Pengukuran Kinerja.** Melakukan prototipe fisik, time study aktual, dan analisis biaya komparatif antara desain lama dan baru. Indikator keberhasilan: $\eta_{DFMA} > 1$, $E_a > 70\%$, dan $\Delta N \geq 30\%$.

Diagram alir logika keputusan dapat direpresentasikan sebagai berikut: identifikasi part → uji tiga pertanyaan Boothroyd → jika semua "tidak" maka eliminasi → jika ada pergerakan relatif maka pertahankan dengan modifikasi geometri → jika perlu material berbeda maka pertimbangkan *material consolidation* → finalisasi desain dan validasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data yang dilaporkan Amirullah dan Jakaria ([https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) dan disesuaikan dengan parameter industri IKM di Yogyakarta, berikut adalah studi kasus kuantitatif lengkap untuk redesain *coffee enema basket*.

### 4.1 Parameter Input Baseline (Desain Lama)

| Parameter | Nilai | Satuan |
|---|---|---|
| Jumlah komponen ($N_0$) | 8 | part |
| Material | Stainless Steel 304 | — |
| Proses manufaktur utama | Laser cutting + welding | — |
| Waktu perakitan aktual ($t_a^{old}$) | 312 | detik/unit |
| Tarif operator ($R_{op}$) | 833 | Rp/menit |
| Biaya material/unit | 22.500 | Rp |
| Harga jual eceran | 85.000 | Rp/unit |
| Volume produksi | 5.000 | unit/bulan |

### 4.2 Langkah Kalkulasi Redesain

**Langkah A — Aplikasi Prosedur DFA.** Evaluasi delapan komponen baseline menghasilkan identifikasi: dua braket pengikat dan satu ring penguat dapat difusikan menjadi satu fitur *integrated clip* melalui proses stamping; tutup saringan dan frame utama dapat diintegrasikan menjadi satu part hasil injection molding polypropylene food-grade. Hasilnya: $N_f = 4$ part.

**Langkah B — Perhitungan Parts Reduction Ratio.** Menggunakan Persamaan (2):

$$\Delta N = \frac{8 - 4}{8} \times 100\% = 50\%$$

Reduksi 50% komponen berada di atas ambang minimum 30% yang ditetapkan sebagai kriteria keberhasilan.

**Langkah C — Estimasi Waktu Perakitan Baru.** Dengan empat komponen yang telah dioptimasi geometrinya (snap-fit tanpa baut), estimasi waktu perakitan:

$$t_a^{new} = \sum_{i=1}^{4} t_{a,i} = 28 + 35 + 24 + 32 = 119 \text{ detik}$$

**Langkah D — Perhitungan Efisiensi Perakitan.** Waktu minimum teoritis untuk 4 part dengan operasi snap-fit sederhana diasumsikan