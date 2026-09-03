# 2543 — Redesain Keranjang Kopi Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Optimalisasi Manufaktur dan Efisiensi Rantai Pasok Alat Kesehatan Tradisional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket dengan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan herbal dan terapi tradisional di Indonesia, khususnya yang berkaitan dengan produk *coffee enema* dan turunannya, mengalami pertumbuhan permintaan rata-rata 8–12% per tahun (Amirullah & Jakaria, 2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)). Komponen inti dari perangkat tersebut adalah *basket* (keranjang) yang berfungsi sebagai reservoir filtrasi biji kopi—komponen ini menentukan keseragaman ekstraksi, higienitas, dan keamanan pengguna. Namun, desain konvensional keranjang kopi enema yang beredar di pasaran UMKN (Usaha Mikro, Kecil, dan Menengah) di Indonesia masih mengandalkan konfigurasi rakitan yang dikembangkan secara intuitif tanpa memperhatikan prinsip-prinsip manufakturabilitas dan perakitan, sehingga menimbulkan inefisiensi biaya produksi antara 18–25% dan waktu perakitan rata-rata 4,5 menit per unit (Amirullah & Jakaria, 2024).

Urgensi redesain ini bersifat multidimensi. Dari sisi **ekonomi**, harga pokok produksi (HPP) yang tinggi menghambat daya saing produk Indonesia di pasar ekspor obat tradisional berbasis fitofarmaka. Dari sisi **keselamatan pasien**, risiko kontaminasi meningkat ketika jumlah sambungan (*joint*) terlalu banyak karena setiap *interface* merupakan potensi celah mikroba. Dari sisi **regulasi**, standar BPOM dan SNI ISO 13485:2016 untuk alat kesehatan menuntut *traceability* komponen yang hanya dapat dipenuhi jika desain telah melalui proses *Design for Manufacture and Assembly* (DFMA) secara sistematis. Amirullah dan Jakaria (2024) menekankan bahwa pendekatan DFMA bukan sekadar alat optimasi, melainkan kerangka rekayasa terpadu yang menyelaraskan keputusan desain dengan kemampuan proses manufaktur lokal, terutama untuk komponen *sheet metal*, *injection molding*, dan *assembly* dengan pengencang ulus (*fastener*).

Konteks yang lebih luas juga dikonfirmasi oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam studi integrasi DFMA dengan BIM untuk konstruksi jembatan pracetak, yang menunjukkan bahwa keterlambatan identifikasi masalah manufaktur dan perakitan pada tahap desain konseptual akan menyebabkan biaya koreksi yang melonjak hingga 6–10 kali lipat ketika masalah terdeteksi di tahap fabrikasi atau erection. Paradigma *front-loading engineering* ini同样 relevan untuk industri alat kesehatan tradisional: keputusan desain yang buruk pada tahap awal akan terakumulasi menjadi pemborosan *downstream* yang signifikan. Dengan demikian, redesain keranjang kopi enema bukan hanya proyek optimasi tunggal, melainkan implementasi filosofi *concurrent engineering* yang memadukan pertimbangan DFM (*Design for Manufacture*) dan DFA (*Design for Assembly*) sejak fase konseptual.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada **Boothroyd-Dewhurst DFMA Method** yang telah distandarisasi sejak 1987 dan terus diperbarui untuk konteks manufaktur modern. Dua pilar utama yang digunakan adalah **Design for Assembly (DFA)** dan **Design for Manufacture (DFM)**.

### 2.1 Indeks Efisiensi Perakitan (DFA Index)

Indeks efisiensi perakitan Boothroyd mengukur rasio antara jumlah minimum teoritis komponen terhadap jumlah aktual komponen dalam rakitan:

$$E_a = \frac{N_{min}}{N_a} \times 100\%$$

di mana:
- $E_a$ = efisiensi perakitan (%)
- $N_{min}$ = jumlah minimum teoritis komponen = $\lceil \log_2(N_a) \rceil$ untuk komponen dengan dua arah insertion, atau dihitung berdasarkan minimum part count heuristic
- $N_a$ = jumlah aktual komponen dalam rakitan

Untuk setiap komponen individual $i$, dilakukan *handling and insertion analysis* dengan kriteria waktu:

$$t_i = t_{feed} + t_{place} + t_{secure}$$

di mana $t_{feed}$ adalah waktu penyajian komponen (handling), $t_{place}$ adalah waktu penempatan, dan $t_{secure}$ adalah waktu pengencangan/pengamanan. Komponen yang waktu totalnya melebihi ambang batas (umumnya 3 detik untuk komponen sederhana) dianggap sebagai kandidat eliminasi atau integrasi.

### 2.2 Indeks Efisiensi Manufaktur (DFM Index)

Untuk komponen fabrikasi seperti lembaran logam (*sheet metal*) dan bagian injeksi plastik, digunakan metrik biaya manufaktur relatif:

$$C_m = \sum_{j=1}^{k} \left( M_j \cdot t_j \cdot r_j \right) + C_{tooling} + C_{setup}$$

di mana:
- $M_j$ = material biaya proses $j$ (Rp/menit)
- $t_j$ = waktu proses $j$ (menit)
- $r_j$ = tingkat konsumsi energi/tenaga kerja proses $j$
- $C_{tooling}$ = biaya perkakas dan cetakan (untuk injeksi)
- $C_{setup}$ = biaya persiapan mesin

### 2.3 Efisiensi Waktu Perakitan Total

Total waktu perakitan yang ditargetkan:

$$T_{total} = \sum_{i=1}^{N_a} t_i + T_{rework} + T_{inspection}$$

Tujuan redesain adalah memaksimumkan $E_a$ dan meminimalkan $T_{total}$ secara simultan, dengan konstrain fungsional: kekuatan struktural, kemampuan filtrasi (porositas ≥ 200 μm), dan biocompatibility (food-grade stainless steel SUS 304 atau polipropilena).

### 2.4 Fungsi Utilitas Multi-Kriteria

Karena redesain melibatkan beberapa tujuan yang saling bertentangan, Amirullah dan Jakaria (2024) menggunakan fungsi utilitas agregat:

$$U = w_1 \cdot E_a + w_2 \cdot (1 - \Delta C_m) + w_3 \cdot (1 - \Delta T_{total}) + w_4 \cdot S_f$$

di mana $w_1 + w_2 + w_3 + w_4 = 1$ adalah bobot preferensi (umumnya $w_1=0.3$, $w_2=0.25$, $w_3=0.25$, $w_4=0.2$), $\Delta$ merepresentasikan perubahan relatif terhadap baseline, dan $S_f$ adalah skor kemampuan fungsional hasil simulasi atau FEA.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP DFMA dalam enam tahap sistematis yang dapat diadaptasi oleh industri alat kesehatan tradisional Indonesia:

### Tahap 1: Dekomposisi Fungsi Produk
Identifikasi fungsi primer (penampung dan filtrasi biji kopi), sekunder (pegangan ergonomis, stabilitas struktural), dan tersier (estetika, branding). Setiap fungsi dipetakan ke komponen fisik menggunakan **Function-Means Tree** dan matriks FAST (*Function Analysis System Technique*).

### Tahap 2: Analisis Perakitan Awal (*Baseline DFA Analysis*)
Pembuatan exploded view dan Bill of Materials (BoM) dengan pengukuran waktu perakitan aktual menggunakan *time study* dengan 30 kali pengulangan (sesuai standar SNI 19-6401-2000 tentang analisis waktu kerja). Penghitungan $E_a$ awal.

### Tahap 3: Analisis Manufakturabilitas Setiap Komponen
Evaluasi setiap komponen terhadap kriteria proses: apakah menggunakan *las MIG*, *spot welding*, *press fit*, atau *injection molding*? Parameter seperti *minimum wall thickness*, *draft angle*, dan *tolerance stack-up* dihitung menggunakan:

$$\text{Tolerance Stack} = \sqrt{\sum_{i=1}^{n} t_i^2}$$

untuk toleransi independen, atau penjumlahan langsung $\sum t_i$ untuk toleransi dependen.

### Tahap 4: Generasi Konsep Alternatif
Menggunakan *morphological matrix* dan *TRIZ* (Theory of Inventive Problem Solving) untuk menghasilkan minimal 5 konsep desain alternatif. Setiap konsep diskrining dengan konsep Pugh Matrix.

### Tahap 5: Evaluasi Kuantitatif dan Seleksi
Perhitungan $E_a$, $T_{total}$, dan $C_m$ untuk setiap konsep. Validasi FEA (*Finite Element Analysis*) untuk memastikan kekuatan struktural tidak menurun >10% dari baseline.

### Tahap 6: Prototipe dan Validasi Akhir
Pembuatan prototipe, *pilot run* sebanyak 50 unit, dan pengujian fungsional filtrasi serta *user acceptance test* oleh 30 responden ergonomis.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data Amirullah dan Jakaria (2024), berikut adalah rekonstruksi perhitungan numerik untuk satu unit keranjang kopi enema baseline dan hasil redesain.

### 4.1 Data Input Baseline

| Parameter | Nilai Awal (Baseline) |
|-----------|----------------------|
| Jumlah komponen ($N_a$) | 18 komponen |
| Diameter basket | 110 mm |
| Tinggi | 150 mm |
| Bahan | SUS 304 + PP |
| Waktu perakitan aktual | 270 detik/unit |
| Biaya material | Rp 18.500/unit |
| Biaya proses | Rp 12.000/unit |
| Biaya fastener | Rp 3.500/unit |
| **HPP Total** | **Rp 34.000/unit** |

### 4.2 Perhitungan DFA Index Baseline

Menggunakan rumus Boothroyd-Dewhurst:

$$N_{min} = \lceil \log_2(18) \rceil = \lceil 4.17 \rceil = 5$$

$$E_a^{baseline} = \frac{5}{18} \times 100\% = 27.78\%$$

### 4.3 Identifikasi Komponen Kandidat Eliminasi/Integrasi

Dari analisis *handling and insertion*, ditemukan:
- 6 sekrup M3×8 → diintegrasikan menjadi 2 *snap-fit* PP ($t_i$ turun dari 8 detik menjadi 1,5 detik)
- 2 ring pengunci → diintegrasikan ke *boss* tunggal
- 3 *washer* → digantikan fitur *integrated flange*
- 1 tutup ulir → diganti *press-fit cover*
- 4 bracket terpisah → dikonsolidasikan menjadi 1 *monocoque* bracket dari hasil *sheet metal forming*

**Setelah redesain:** $N_a^{new} = 8$ komponen

### 4.4 Perhitungan DFA Index Redesain

$$E_a^{new} = \frac{\lceil \log_2(8) \rceil}{8} \times 100\% = \frac{3}{8} \times 100\% = 37.5\%$$

Peningkatan efisiensi perakitan: $\Delta E_a = +9.72$ poin persentase.

### 4.5 Perhitungan Waktu Perakitan Baru

Waktu perakitan individual komponen baru (dari time study):
- Komponen 1 (body utama): 12 detik
- Komponen 2-3 (snap-fit ring): 1,5 × 2 = 3 detik
- Komponen 4 (bracket monocoque): 18 detik
- Komponen 5 (filter mesh press-fit): 8 detik
- Komponen 6 (press-fit cover): 6 detik
- Komponen 7 (handle): 10 detik
- Komponen 8 (gasket silikon): 5 detik
- Rework allowance (5%): 3,2 detik

$$T_{total}^{new} = 12 + 3 + 18 + 8 + 6 + 10 + 5 + 3.2 = 65.2 \text{ detik}$$

Pengurangan waktu: $\Delta T = \frac{270 - 65.2}{270} \times 100\% = 75.85\%$.

### 4.6 Perhitungan Biaya Manufaktur Baru

| Komponen Biaya | Nilai |
|---------------|-------|
| Material | Rp 15.200 (efisiensi penggunaan stainless 8%) |
| Proses | Rp 7.800 (eliminasi 6 operasi pengencangan) |
| Fastener | Rp 800 (