# 1791 — Redesain Produk Alat Kesehatan Menggunakan Metode Design for Manufacture and Assembly (DFMA): Pendekatan Rekayasa untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Redesain Coffee Enema Basket dengan Pendekatan DFMA
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan salah satu sektor manufaktur dengan tingkat presisi, regulasi, dan tuntutan efisiensi yang sangat tinggi. Amirullah dan Jakaria (2024) dalam studi terindeks DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti sebuah produk spesifik berupa *coffee enema basket* — perangkat terapi alternatif yang berfungsi menyaring bubuk kopi dalam proses enema. Produk ini, meskipun tampak sederhana, memiliki kompleksitas manufaktur yang cukup signifikan karena melibatkan komponen logam, sambungan, dan fitur filtrasi yang menuntut standar kebersihan tinggi (*food-grade* dan *medical-grade*).

Urgensi ekonomis dari penerapan *Design for Manufacture and Assembly* (DFMA) pada produk ini sangat jelas. Pertama, biaya produksi alat kesehatan tradisional cenderung tinggi karena rendahnya *design efficiency* — banyak komponen yang sebenarnya dapat diintegrasikan tetapi diproduksi secara terpisah. Kedua, waktu perakitan (*assembly time*) yang panjang meningkatkan biaya tenaga kerja langsung (*direct labor cost*) yang dalam struktur biaya manufaktur alat kesehatan bisa mencapai 20–35%. Ketiga, regulasi BPOM dan standar ISO 13485 menuntut *traceability* komponen yang ketat, sehingga semakin sedikit jumlah komponen, semakin sederhana sistem dokumentasi dan kontrol kualitasnya.

Amirullah dan Jakaria (2024) menekankan bahwa pendekatan DFMA — yang merupakan integrasi antara *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA) — menjadi solusi strategis karena secara simultan mempertimbangkan dua perspektif: kemampuan manufaktur (mudah diproduksi dengan proses yang tersedia) dan kemampuan perakitan (mudah dirakit dengan operasi minimal). Pendekatan ini berbeda dengan metode desain konvensional yang cenderung mengoptimalkan performa fungsional tanpa mempertimbangkan implikasi produksi secara holistik. Dalam konteks produk *coffee enema basket*, hal ini berarti melakukan redesain untuk mengurangi jumlah parts, menyederhanakan operasi perakitan, dan memilih material serta proses fabrikasi yang sesuai dengan kapasitas manufaktur UMKM atau *job-shop* lokal.

Konteks yang lebih luas, sebagaimana disitir oleh Islam (2024) dalam DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21), menunjukkan bahwa integrasi DFMA tidak terbatas pada produk konsumen tetapi juga telah terbukti meningkatkan kualitas keputusan desain pada proyek infrastruktur prefabrikasi. Prinsip yang sama — mempertimbangkan manufaktur, transportasi, lifting, dan ereksi sejak tahap konsep — dapat diadopsi pada desain produk alat kesehatan. Tanpa pendekatan ini, masalah *buildability* baru akan terungkap pada tahap *shop-drawing* atau bahkan saat produksi massal, ketika koreksi menjadi sangat mahal. Oleh karena itu, studi Amirullah dan Jakaria (2024) memberikan kontribusi empiris yang penting bagi literatur redesain produk kesehatan di Indonesia.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan dalam studi ini berakar pada metodologi Boothroyd-Dewhurst yang telah distandardisasi sejak 1980-an. Terdapat dua pilar utama: **DFA (Design for Assembly)** dan **DFM (Design for Manufacture)**, yang dalam praktiknya sering digabung menjadi DFMA.

### 2.1 Design for Assembly (DFA) — Metode Boothroyd-Dewhurst

DFA bertujuan meminimalkan biaya perakitan dengan menyederhanakan struktur produk. Dua metrik utama yang digunakan adalah:

**a) Indeks Efisiensi Desain Perakitan ($E_{DA}$):**

$$E_{DA} = \frac{N_{mt}}{N_t} \times 100\%$$

di mana:
- $N_{mt}$ = jumlah minimum teoritis komponen yang dibutuhkan untuk memenuhi fungsi produk (biasanya $N_{mt} \approx 1$ untuk produk sederhana)
- $N_t$ = jumlah aktual komponen pada desain awal

**b) Efisiensi Perakitan ($E_A$) berbasis waktu:**

$$E_A = \frac{T_{mt}}{T_{ma}} \times 100\%$$

di mana:
- $T_{mt}$ = waktu perakitan minimum teoritis (jika semua komponen dirakit dalam waktu dasar minimum 1,5–3 detik per komponen sesuai tabel Boothroyd)
- $T_{ma}$ = waktu perakitan aktual pada desain awal

**c) Asumsi waktu dasar ($t_{base}$):**

Berdasarkan Boothroyd-Dewhurst, waktu minimum teoritis untuk menangani dan menyisipkan satu komponen pada operasi manual adalah:

$$t_{base} = 1{,}95 \text{ detik untuk setiap komponen}$$

sehingga $T_{mt} = N_{mt} \times t_{base}$.

### 2.2 Design for Manufacture (DFM)

DFM mengkuantifikasi kemampuan setiap komponen untuk difabrikasi menggunakan proses yang tersedia. Amirullah dan Jakaria (2024) menerapkan analisis pada operasi seperti *stamping*, *bending*, *welding*, dan *laser cutting* untuk komponen logam *coffee enema basket*. Indeks kesulitan manufaktur untuk setiap komponen $i$ dapat dinyatakan:

$$C_{M_i} = \sum_{j=1}^{k} w_j \cdot d_{ij}$$

di mana $w_j$ adalah bobot kesulitan untuk proses ke-$j$ dan $d_{ij}$ adalah tingkat kesulitan (skala 0–10) komponen $i$ pada proses tersebut.

### 2.3 DFMA Combined Efficiency

Setelah redesain, efisiensi DFMA total dihitung sebagai:

$$E_{DFMA} = w_{DFM} \cdot E_{DFM} + w_{DFA} \cdot E_{DFA}$$

dengan $w_{DFM} + w_{DFA} = 1$ dan biasanya $w_{DFM} = w_{DFA} = 0{,}5$ ketika bobot manufaktur dan perakitan dianggap setara.

### 2.4 Analisis Biaya Total

Biaya total produk yang diminimalkan dalam pendekatan DFMA:

$$C_{total} = C_{material} + C_{manufacturing} + C_{assembly} + C_{overhead} + C_{tooling}$$

di mana $C_{manufacturing} = \sum_{i=1}^{N_t} (t_{m_i} \cdot r_m)$ dan $C_{assembly} = T_{ma} \cdot r_a$, dengan $r_m$ dan $r_a$ adalah tarif tenaga kerja manufaktur dan perakitan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam tujuh tahap sistematis yang dapat direplikasi pada berbagai produk:

**Tahap 1 — Analisis Produk Awal (*Baseline Analysis*).** Lakukan *disassembly* total terhadap produk existing, identifikasi seluruh komponen, dokumentasikan fungsi setiap komponen, dan hitung $N_t$ serta $T_{ma}$. Buat *exploded view* dan *bill of materials* (BOM).

**Tahap 2 — Penentuan Fungsi Esensial.** Tentukan fungsi minimal yang harus dipenuhi produk. Untuk *coffee enema basket*, fungsi esensialnya adalah: (1) menampung bubuk kopi, (2) menyaring partikel padat dari cairan, (3) memungkinkan aliran fluida, dan (4) tahan terhadap suhu dan korosi. Ini menjadi basis penentuan $N_{mt}$.

**Tahap 3 — Analisis DFA Awal.** Hitung $E_{DA}$ dan $E_A}$ desain awal. Identifikasi komponen kandidat untuk eliminasi atau integrasi. Kriteria eliminasi: komponen tidak memberikan fungsi esensial, komponen dapat digabung dengan komponen lain tanpa menambah kompleksitas manufaktur signifikan.

**Tahap 4 — Analisis DFM.** Evaluasi setiap komponen terhadap proses manufaktur yang tersedia (*laser cutting*, *sheet metal bending*, *spot welding*, *injection molding*). Tentukan apakah proses alternatif dapat menyederhanakan bentuk dan mengurangi operasi sekunder (*secondary operations*).

**Tahap 5 — Generasi Konsep Redesain.** Buat minimal 3–5 alternatif konsep redesain yang telah menghilangkan komponen non-esensial dan mengintegrasikan fungsi. Gunakan matriks Pugh untuk seleksi konsep berdasarkan kriteria: biaya, kemudahan manufaktur, kemudahan perakitan, kekuatan, estetika, dan kepatuhan regulasi.

**Tahap 6 — Prototipe dan Pengujian.** Buat prototipe desain terpilih, lakukan uji fungsional, uji *assembly time* (diambil rata-rata 5–10 pengamat), dan uji ketahanan.

**Tahap 7 — Perbandingan Kuantitatif.** Hitung seluruh metrik DFMA pada desain baru dan bandingkan dengan baseline. Lakukan analisis biaya serta *break-even analysis* jika ada investasi tooling.

Diagram alir logikanya dapat dirangkum sebagai berikut:

```
[Produk Existing] → [Disassembly] → [BOM Awal] → [Fungsi Esensial]
        ↓
[Hitung E_DA & E_A] → [Identifikasi Redundansi] → [Generasi Konsep]
        ↓
[Seleksi Konsep - Pugh Matrix] → [Prototipe] → [Uji Fungsional]
        ↓
[Hitung Ulang Metrik DFMA] → [Analisis Biaya] → [Rekomendasi]
```

Pendekatan serupa juga diaplikasikan oleh Islam (2024) pada konteks jembatan prefabrikasi, di mana framework BIM-DFMA memastikan keputusan desain pada tahap *concept* dan *preliminary* sudah mempertimbangkan variabel manufaktur, transportasi, dan ereksi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data tipikal yang dilaporkan oleh Amirullah dan Jakaria (2024) untuk produk *coffee enema basket*:

**Desain Awal (Baseline):**
- Jumlah komponen: $N_t = 12$ bagian
- Waktu perakitan aktual: $T_{ma} = 187$ detik (3 menit 7 detik)
- Material utama: stainless steel 304 sheet (2 mm) + kawat mesh
- Operasi perakitan: *spot welding* (4 titik), *press fit* (3 sambungan), *clip* (2), *screwing* (3)

**Perhitungan Baseline DFA:**

Jumlah komponen minimum teoritis (satu bodi basket terintegrasi + satu tutup/handle) = $N_{mt} = 3$ (asumsi: bodi utama, mesh filter, handle/pegangan).

$$E_{DA} = \frac{N_{mt}}{N_t} \times 100\% = \frac{3}{12} \times 100\% = 25\%$$

Waktu perakitan minimum teoritis:
$$T_{mt} = N_{mt} \times t_{base} = 3 \times 1{,}95 = 5{,}85 \text{ detik}$$

$$E_A = \frac{T_{mt}}{T_{ma}} \times 100\% = \frac{5{,}85}{187} \times 100\% \approx 3{,}13\%$$

**Desain Hasil Redesain:**
Setelah eliminasi komponen redundan (frame tambahan, 2 clip penguat, 1 ring pengunci) dan integrasi *mesh* ke bodi utama melalui *laser-cut perforation pattern*:
- Jumlah komponen baru: $N_t' = 5$ (bodi, tutup, mesh satu lembar, 2 handle)
- Waktu perakitan aktual baru: $T_{ma}' = 42$ detik
- Proses: *laser cutting* + *single-fold bending* + *1 spot weld* + *snap-fit* tutup

**Perhitungan Redesain:**

$$E_{DA}' = \frac{3}{5} \times 100\% = 60\%$$

$$E_A' = \frac{5{,}85}{42} \times 100\% = 13{,}93\%$$

**Peningkatan:**

$$\Delta E_{DA} = 60\% - 25\% = 35 \text{ poin persentase}$$
$$\Delta E_A = 13{,}93\% - 3{,}13\% = 10{,}80 \text{ poin persentase}$$

**Analisis Biaya — dengan asumsi tarif tenaga kerja Rp 25.000/jam:**

Biaya perakitan awal per unit:
$$C_{assembly} = \frac{187}{3600} \times 25.000 \approx Rp \ 1.299$$

Biaya perakitan redesain:
$$C_{assembly}' = \frac{42}{3600} \times 25.000 \approx Rp \ 292$$

Penghematan per unit: $\Delta C = Rp \ 1.007$ (pengurangan 77,5%).

Untuk produksi batch 1.000 unit/bulan, penghematan tahunan:
$$\text{Saving} = 1.007 \times 1.000 \times 12 = Rp \ 12.084.000 \text{ per tahun}$$

Ditambah penghematan material dari eliminasi 7 komponen (estimasi Rp 3.500/unit), total penghematan:
$$\text{Total Saving} = 12.084.000 + 3.500 \times 12.000 = Rp \ 54.084.000 \text{ per tahun}$$

**Interpretasi Manajerial:** Redesain DFMA meningkatkan *design efficiency* lebih dari dua kali lipat pada metrik DFA, dan memangkas waktu perakitan hingga 77,5