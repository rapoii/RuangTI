# 2191 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan komplementer dan wellness global tengah mengalami transformasi signifikan pasca-pandemi COVID-19, di mana permintaan terhadap produk terapi alternatif seperti *coffee enema kit* meningkat rata-rata 18–22% per tahun (Amirullah & Jakaria, 2024). Coffee enema basket, sebagai komponen kritis dalam kit ini, berfungsi sebagai wadah filtrasi bubuk kopi yang harus memenuhi tiga kriteria simultan: keamanan food-grade, efisiensi filtrasi, dan kemudahan perakitan oleh pengguna awam. Permasalahan utama yang diidentifikasi oleh Amirullah dan Jakaria (2024) dalam studi terbitan *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) adalah desain existing basket konvensional memiliki terlalu banyak komponen kecil (rata-rata 9–11 part), menggunakan material stainless steel 304 dengan proses fabrikasi *las titik* dan *bending* yang kompleks, sehingga menghasilkan *cycle time* perakitan manual lebih dari 4,5 menit per unit dan *scrap rate* manufaktur mencapai 12,7%.

Kondisi ini menjadi permasalahan industrial yang nyata karena menimbulkan *cost of poor quality* (COPQ) yang tinggi pada lini produksi UMKM produsen alat kesehatan di Indonesia. Berdasarkan data lapangan yang dikutip penulis, biaya produksi per unit basket konvensional mencapai Rp 187.500, dengan margin keuntungan hanya 8,3% yang jauh di bawah standar industri manufaktur alat kesehatan (15–20%). Lebih lanjut, prosedur perakitan manual yang kompleks meningkatkan risiko *human error* yang dapat menyebabkan cacat fungsi seal—di mana 23% keluhan konsumen pasca-pembelian terkait kebocoran filtrat. Mendesain ulang produk dengan pendekatan Design for Manufacture and Assembly (DFMA) bukan hanya诉求 efisiensi produksi, tetapi juga untuk memastikan kepatuhan terhadap regulasi SNI IEC 60601-1 untuk alat elektromedis dan FDA 21 CFR untuk produk yang masuk pasar ekspor.

Urgensi ekonomis menjadi semakin nyata ketika mempertimbangkan posisi Indonesia sebagai eksportir produk wellness terbesar keempat di ASEAN. Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) menegaskan bahwa integrasi prinsip DfMA pada tahap konseptual adalah *leverage point* paling efektif untuk mengendalikan 70–80% biaya *life-cycle* produk—suatu pernyataan yang menjadi justifikasi teoretis kuat bagi penelitian Amirullah dan Jakaria (2024). Ketiadaan integrasi DfMA di tahap awal menyebabkan *design freeze* yang terlambat, mould terbuang, dan koreksi hanya mungkin dilakukan dengan *retro-engineering* mahal.

---

## 2. Landasan Teori & Formulasi Matematis

DFMA merupakan metodologi rekayasa terintegrasi yang menggabungkan dua subdomain: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Pendekatan ini didasarkan pada prinsip bahwa 70–80% biaya produk determinado pada fase desain konseptual (Islam, 2024). Landasan matematis DFMA dapat diformulasikan secara presisi sebagai berikut.

### 2.1 Indeks DFA Boothroyd-Dewhurst

Untuk setiap komponen part ke-$i$ dalam desain basket, **Design Efficiency** ($E_i$) dihitung menggunakan persamaan Boothroyd-Dewhurst yang telah dimodifikasi:

$$E_i = \frac{N_m \cdot t_{ma}}{t_{ea}}$$

di mana $N_m$ adalah jumlah minimum teoritis part yang diperlukan untuk fungsi produk, $t_{ma}$ adalah *minimum assembly time* per part (standar referensi: 3 detik untuk *snap fit*, 5 detik untuk *threaded fastener*, 8 detik untuk *press fit* dengan tooling), dan $t_{ea}$ adalah *estimated actual assembly time* part tersebut berdasarkan pengukuran aktual di lini produksi. **Assembly Index** untuk keseluruhan produk dirumuskan:

$$AI = \sum_{i=1}^{n} \left( \frac{t_{ea,i}}{N_m \cdot t_{ma,i}} \right) \cdot \frac{1}{n}$$

### 2.2 Formulasi Biaya Manufaktur (DFM)

Total biaya produksi per unit setelah redesain dihitung menggunakan model *Activity-Based Costing* termodifikasi:

$$C_{total} = \sum_{j=1}^{k} \left( M_j + L_j \cdot \tau_j + O_j \cdot (1 + s_j) \right)$$

di mana $M_j$ adalah biaya material proses ke-$j$, $L_j$ adalah tarif *labor rate* (Rp/menit), $\tau_j$ adalah *cycle time* proses, $O_j$ adalah biaya *overhead*, dan $s_j$ adalah *scrap rate* proses. *Manufacturing Complexity Index* (MCI) diekspresikan sebagai:

$$MCI = \sum_{j=1}^{k} \left( w_j \cdot \frac{\tau_j}{\tau_{ref,j}} \right)$$

dengan $w_j$ adalah bobot kompleksitas relatif proses (misalnya: *injection molding* = 0,15; *sheet metal bending* = 0,35; *las TIG* = 0,60) dan $\tau_{ref,j}$ adalah *benchmark cycle time* industri referensi.

### 2.3 Reduksi Part dan Penghematan Biaya

Efektivitas redesain diukur melalui rasio pengurangan part:

$$\Delta N_p = \frac{N_{p,old} - N_{p,new}}{N_{p,old}} \times 100\%$$

dan penghematan biaya kumulatif selama horizon produksi $T$ (bulan) dihitung sebagai:

$$\Delta C_T = \left( C_{old} - C_{new} \right) \cdot Q \cdot T - C_{retooling}$$

di mana $Q$ adalah volume produksi bulanan dan $C_{retooling}$ adalah investasi perkakas baru. Amirullah dan Jakaria (2024) menetapkan bahwa redesain DfMA dinyatakan layak secara ekonomis apabila $\Delta C_T > 0$ dalam horizon payback kurang dari 6 bulan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP rekayasa DFMA tujuh tahap yang dapat diadopsi secara generik untuk redesain produk manufaktur:

**Tahap 1 — Analisis Fungsi Produk (Value Engineering).** Setiap part existing dipetakan terhadap fungsi primer, sekunder, dan tersier menggunakan *Function Analysis System Technique* (FAST). Kriteria filter: part yang menyumbang kurang dari 5% nilai fungsi total menjadi kandidat eliminasi.

**Tahap 2 — Pembuatan Bill of Materials (BoM) Eksisting.** Inventorisasi lengkap part, material, dan proses fabrikasi. Untuk coffee enema basket eksisting, BoM mencakup: 1) body silinder stainless steel 304, 2) dasar berlubang (perforated base), 3) flange atas, 4) ring pengunci, 5) handle polypropylene, 6) baut M3 × 4 unit, 7) mur M3 × 4 unit, 8) gasket silikon, 9) tutup tekan, 10) label stiker.

**Tahap 3 — Pengukuran Baseline Produksi.** Pengukuran aktual *cycle time* per proses, *scrap rate*, dan waktu perakitan. Tools: *time study* dengan *snap-back stopwatch*, *video analysis*, dan *work sampling*.

**Tahap 4 — Generasi Konsep Redesain.** Brainstorming dengan matriks morfologi untuk menggabungkan part. Contoh: flange dan ring pengunci digabung menjadi satu fitur integral hasil *deep drawing*; baut-mur diganti *snap-fit* cantilever.

**Tahap 5 — Evaluasi Konsep dengan DFMA Score.** Setiap konsep dinilai menggunakan *weighted scoring model* dengan bobot: manufaktur (30%), perakitan (25%), fungsi (20%), biaya (15%), ergonomi (10%).

**Tahap 6 — Prototipe dan Validasi.** Pembuatan *rapid prototype* dengan *3D printing* SLA untuk validasi geometri, dilanjutkan uji fungsional filtrasi (debit, retensi partikel).

**Tahap 7 — Implementasi dan Standardisasi.** Update SOP lini produksi, training operator, dan *control plan* sesuai ISO 9001:2015 klausul 8.5.1.

Diagram alir proses DFMA dalam kerangka BIM-DfMA yang diajukan Islam (2024) menunjukkan *feedback loop* antara *design criteria evaluation* dan *manufacturing/assembly knowledge database*, yang dapat diadopsi untuk produk diskrit seperti coffee enema basket melalui integrasi dengan *Product Lifecycle Management* (PLM) sederhana berbasis cloud.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Amirullah dan Jakaria (2024) mendokumentasikan studi kasus redesain pada produk coffee enema basket produksi PT XYZ (UMKM alat wellness di Bandung). Data baseline dan redesain dirangkum dalam tabel berikut:

| Parameter | Desain Lama | Desain Baru | Δ (%) |
|---|---|---|---|
| Jumlah part ($N_p$) | 10 | 5 | −50,0 |
| Material utama | SS 304 + PP + Silicone | PP food-grade tunggal | homogen |
| *Cycle time* fabrikasi ($\tau_j$) | 28,4 menit | 12,1 menit | −57,4 |
| *Assembly time* ($t_{ea}$) | 270 detik | 45 detik | −83,3 |
| *Scrap rate* ($s_j$) | 12,7% | 2,3% | −81,9 |
| Biaya produksi/unit ($C$) | Rp 187.500 | Rp 98.700 | −47,4 |

### Perhitungan Step-by-Step

**Langkah 1 — Hitung DFA Index.**
Desain lama: $N_m = 5$ (fungsi minimum: body, perforated base, seal, handle, tutup), $t_{ma}$ rerata = 5 detik → $N_m \cdot t_{ma} = 25$ detik. $t_{ea} = 270$ detik. Maka:

$$AI_{old} = \frac{270}{25} = 10,8$$

Artinya desain lama 10,8 kali lebih lambat dari kondisi minimum teoritis. Desain baru:

$$AI_{new} = \frac{45}{25} = 1,8$$

**Langkah 2 — Estimasi penghematan biaya per 1000 unit.**
$C_{old} - C_{new} = 187.500 - 98.700 = \text{Rp } 88.800$ per unit. Dengan asumsi $C_{retooling}$ (cetakan injeksi baru) = Rp 35.000.000 dan volume produksi $Q = 1.000$ unit/bulan:

$$\Delta C_T = 88.800 \cdot 1.000 \cdot T - 35.000.000$$

Payback period ketika $\Delta C_T = 0$:

$$T^* = \frac{35.000.000}{88.800 \cdot 1.000} = 0,394 \text{ bulan} \approx 12 \text{ hari}$$

**Langkah 3 — Manufacturing Complexity Index (MCI).**
Desain lama: proses *las titik* (4 titik) + *bending* + *injection molding handle* + *assembly*. Dengan $w_j$ dan rasio $\tau_j/\tau_{ref}$:

$$MCI_{old} = 0,35(1,8) + 0,60(1,4) + 0,15(1,0) + 0,25(2,2) = 0,63 + 0,84 + 0,15 + 0,55 = 2,17$$

Desain baru (full *injection molding* single-shot):

$$MCI_{new} = 0,15(1,0) + 0,25(0,6) = 0,30$$

**Interpretasi Manajerial.** Reduksi MCI sebesar $(2,17 - 0,30)/2,17 = 86,2\%$ mengindikasikan simplifikasi dramatis pada rantai proses. DFA Index turun dari 10,8 menjadi 1,8, mendekati benchmark industri alat kesehatan injeksi (AI = 1,5–2,0). Payback 12 hari menjadikan redesain ini *no-brainer* secara finansial; dengan proyeksi 12 bulan, penghematan kumulatif mencapai Rp 1,03 miliar sebelum pajak. Lebih lanjut, homogenisasi material ke PP food-grade tunggal memudahkan sertifikasi BPOM dan ekspor ke pasar EU (Regulasi EU 10/2011 untuk *food contact*).

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologi

Meskipun hasil Amirullah dan Jakaria (2024) sangat positif, terdapat tiga keterbatasan yang perlu di