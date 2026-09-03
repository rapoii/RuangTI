# 2623 — Redesain Produk Kesehatan Menggunakan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Coffee Enema Basket dan Ekstensi ke Konstruksi Jembatan Pracetak Berbasis BIM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA) — dengan ekstensi konseptual ke integrasi BIM-DfMA pada konstruksi jembatan pracetak
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumah tangga dan manufaktur peralatan medis ringan mengalami tekanan ganda berupa kenaikan biaya bahan baku stainless steel, kompleksitas perakitan yang tidak efisien, serta permintaan konsumen terhadap produk yang aman, higienis, dan mudah dibersihkan. Amirullah dan Jakaria (2024) dalam DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa produk *coffee enema basket* — perangkat berbentuk keranjang saringan yang digunakan dalam terapi alternatif kesehatan — pada desain awalnya memiliki jumlah komponen yang berlebihan, prosedur pengelasan dan pembautan yang banyak, serta siklus perakitan manual yang panjang sehingga menaikkan *bill of materials* (BoM) sekaligus menurunkan margin produksi UMKM.

Urgensi ekonominya terlihat dari tiga hal: pertama, biaya fabrikasi dapat mencapai 35–50 % dari total harga jual apabila desain tidak mempertimbangkan proses manufaktur sejak fase konsep; kedua, kesalahan desain yang baru teridentifikasi pada tahap *shop-drawing* atau bahkan saat perakitan akan menimbulkan *rework cost* yang signifikan; ketiga, pada pasar ekspor alat kesehatan, sertifikasi food-grade (misalnya FDA 21 CFR atau SNI ISO 13485) mensyaratkan dokumentasi proses yang traceable, yang hanya mungkin apabila desain telah memenuhi prinsip *Design for Manufacture and Assembly* (DFMA). Amirullah dan Jakaria (2024) mengusulkan redesain dengan menekan jumlah part, menyederhanakan geometri, dan memilih proses manufaktur yang sesuai (stamping, bending, dan pengelasan titik) untuk menekan biaya tanpa menurunkan fungsi filtrasi.

Perspektif pelengkap datang dari Islam (2024) pada DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menunjukkan bahwa masalah serupa terjadi pada skala besar di industri konstruksi jembatan pracetak: keputusan desain biasanya hanya didasarkan pada biaya dan kecukupan struktural, sementara pengetahuan manufaktur, pengangkutan, pengangkatan, dan ereksi baru masuk belakangan sehingga masalah *buildability* baru muncul ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya mungkin dengan biaya tinggi. Integrasi DfMA ke dalam kerangka evaluasi multi-kriteria berbasis *Building Information Modelling* (BIM) memungkinkan keputusan yang lebih robust pada tahap konsep dan preliminary. Pelajaran dari konstruksi jembatan ini sangat relevan ketika direfleksikan ke produk consumer goods seperti coffee enema basket, di mana keputusan *material selection*, *jointing method*, dan *toleransi geometris* harus dibuat jauh sebelum cetakan atau jig fabrikasi disiapkan.

Dengan demikian, topik Modul 2623 tidak hanya bernilai sebagai studi kasus redesain satu produk, tetapi juga sebagai contoh bagaimana metodologi DFMA — yang lahir dari industri manufaktur massal — dapat di-*scale* ke produk kesehatan skala kecil dan ke proyek infrastruktur berskala besar secara konsisten melalui digitalisasi berbasis BIM.

## 2. Landasan Teori & Formulasi Matematis

DFMA merupakan gabungan dua pendekatan: *Design for Manufacture* (DFM) yang bertujuan agar komponen dirancang agar mudah, murah, dan presisi untuk diproduksi; serta *Design for Assembly* (DFA) yang bertujuan agar komponen mudah dirakit dengan jumlah operasi minimum. Metode yang banyak diadopsi adalah **Boothroyd-Dewhurst DFA** yang menggunakan indeks efisiensi perakitan.

### 2.1 Indeks Efisiensi Desain untuk Perakitan (DFA)

Indeks efisiensi desain perakitan didefinisikan sebagai rasio antara jumlah minimum part teoritis dengan jumlah part aktual:

$$
\eta_{DFA} = \frac{N_{min}}{N_a} \times 100\%
$$

di mana $N_a$ adalah jumlah part aktual pada desain awal dan $N_{min}$ adalah jumlah part minimum yang diperlukan untuk memenuhi fungsi produk. Untuk coffee enema basket, $N_{min}$ biasanya terdiri dari tiga part fungsional: *body basket*, *handle*, dan *mesh filter*. Jika desain awal memiliki $N_a = 8$, maka $\eta_{DFA,awal} = (3/8) \times 100\% = 37{,}5\%$.

### 2.2 Estimasi Waktu Perakitan

Waktu perakitan total dihitung menggunakan Boothroyd:

$$
T_a = \sum_{i=1}^{N_a} t_i \cdot k_i
$$

dengan $t_i$ adalah waktu standar operasi (detik) untuk operasi ke-$i$ (insert, fasten, align, dll.) dan $k_i$ adalah faktor kesulitan (umumnya 1,0–2,0). Setelah redesain dengan menghilangkan baut dan pengelasan minor, $T_a$ dapat turun signifikan.

### 2.3 Biaya Manufaktur dan Perakitan

Model biaya total produk:

$$
C_{total} = \sum_{j=1}^{m} (C_{material,j} + C_{process,j}) + C_{assembly} + C_{overhead}
$$

$$
C_{process,j} = \dot{C}_{machine,j} \cdot \tau_{machine,j}
$$

di mana $\dot{C}_{machine,j}$ adalah tarif mesin (Rp/menit) dan $\tau_{machine,j}$ adalah waktu siklus proses ke-$j$.

### 2.4 Reduksi Biaya DFMA

Penghematan biaya setelah redesain:

$$
\Delta C = C_{total,awal} - C_{total,baru}
$$

$$
\%\Delta C = \frac{\Delta C}{C_{total,awal}} \times 100\%
$$

### 2.5 DfMA Score Multi-Kriteria (Ekstensi Islam, 2024)

Untuk integrasi BIM-DfMA, Islam (2024) DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) mengusulkan skor berbobot:

$$
S_{DfMA-BIM} = \sum_{k=1}^{K} w_k \cdot s_k
$$

dengan $\sum w_k = 1$ dan $s_k \in [0,100]$ untuk $K$ kriteria (manufacturability, transportability, liftability, erectability, maintainability). Bobot dapat ditentukan dengan **AHP (Analytic Hierarchy Process)**:

$$
w_k = \frac{\left(\prod_{i=1}^{n} a_{ki}\right)^{1/n}}{\sum_{j=1}^{n}\left(\prod_{i=1}^{n} a_{ji}\right)^{1/n}}
$$

di mana $a_{ki}$ adalah elemen matriks perbandingan berpasangan.

### 2.6 *Consistency Ratio* AHP

Validitas bobot diuji dengan:

$$
CR = \frac{CI}{RI} < 0{,}10
$$

$$
CI = \frac{\lambda_{max} - n}{n-1}
$$

di mana $\lambda_{max}$ adalah eigenvalue maksimum matriks berpasangan dan $RI$ adalah *random index*.

## 3. Metodologi Rekayasa & SOP Implementasi DFMA

Berdasarkan alur penelitian Amirullah dan Jakaria (2024) DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309), SOP implementasi DFMA pada redesain coffee enema basket mengikuti delapan tahap sistematis:

**Tahap 1 — Identifikasi Fungsi Produk.** Definisikan fungsi primer (filtrasi cairan), sekunder (penanganan ergonomis), dan tersier (daya tahan & food-grade compliance).

**Tahap 2 — Analisis Desain Eksisting.** Buat *disassembly chart* dan hitung $N_a$, $T_a$, serta $C_{total,awal}$. Lakukan FMEA untuk mengidentifikasi mode kegagalan dominan.

**Tahap 3 — Penerapan Aturan DFA Boothroyd-Dewhurst.** Periksa tiga pertanyaan untuk setiap part:
1. Apakah part bergerak relatif terhadap part lain saat operasi? → jika tidak, eliminasi.
2. Apakah part harus terpisah karena diperlukan *disassembly*? → jika tidak, gabungkan.
3. Apakah ada fitur *fastening* yang tidak perlu? → minimalisasi.

**Tahap 4 — Penerapan Aturan DFM.** Pilih proses: *sheet metal forming* (stamping, bending) lebih ekonomis dibanding machining untuk volume >5.000 unit/tahun. Tentukan toleransi ISO 2768-m untuk dimensi non-kritis.

**Tahap 5 — Redesain Konseptual.** Buat 3–5 alternatif desain; eliminasi alternatif dengan $\eta_{DFA} < 60\%$.

**Tahap 6 — Pembuatan Prototipe & Uji Fungsi.** Uji kapasitas filtrasi (mL/s), kekuatan handle (N), dan korosi (salt spray test).

**Tahap 7 — Perhitungan Biaya & Validasi.** Hitung $\Delta C$ dan validasi bahwa margin masih memenuhi target (≥ 25%).

**Tahap 8 — Standarisasi BoM & SOP Perakitan.** Finalisasi gambar teknik, work instruction, dan quality control plan.

Ekstensi dari Islam (2024) DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menambahkan *Layer BIM* pada tahap 5–7: setiap alternatif desain dievaluasi dalam lingkungan BIM (Revit/Archicad + Navisworks) untuk mendeteksi *clash*, mengestimasi *lead time* fabrikasi, dan mensimulasikan *lift sequence* dengan crane. Diagram alir yang dihasilkan:

```
[Concept Design] → [BIM Modeling] → [DfMA Scoring $S_{DfMA-BIM}$]
       ↓                                       ↓
[Re-design Loop] ←────────────── [Ranked Alternatives]
       ↓
[Prototype → Pilot Run → Mass Production]
```

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

### 4.1 Data Desain Awal Coffee Enema Basket (Amirullah & Jakaria, 2024)

| Parameter | Nilai Awal |
|---|---|
| Jumlah part $N_a$ | 8 part (body, 2 ring, 3 baut, handle, mesh) |
| Material | Stainless steel 304 |
| Proses dominan | Las TIG + pembautan manual |
| Waktu perakitan $T_a$ | 480 detik/unit |
| Tarif tenaga kerja | Rp 25.000/jam |
| Biaya material/unit | Rp 38.000 |
| Biaya proses/unit | Rp 22.000 |
| Biaya overhead (40%) | Rp 24.000 |
| $C_{total,awal}$ | Rp 84.000 |

### 4.2 Langkah Redesain

1. **Eliminasi baut & ring** → digabung dengan body melalui *spot welding* dan integrasi handle.
2. **Body basket** dibentuk dari satu lembar stainless steel dengan proses *stamping + bending* → part count turun dari 5 menjadi 1.
3. **Mesh filter** dijadikan *snap-fit insert* tanpa pengikat.

Hasil: $N_a^{baru} = 3$ (body basket, mesh filter, handle terintegrasi).

### 4.3 Perhitungan Numerik

**Efisiensi DFA baru:**

$$
\eta_{DFA,baru} = \frac{3}{3} \times 100\% = 100\%
$$

Peningkatan: $(100 - 37{,}5)/37{,}5 \times 100\% = 166{,}7\%$ lebih efisien.

**Waktu perakitan baru** (hanya operasi *insert mesh* + *snap-fit handle*):

$$
T_{a,baru} = 25 + 15 = 40 \text{ detik}
$$

Penghematan waktu:

$$
\Delta T_a = 480 - 40 = 440 \text{ detik/unit} = 91{,}7\%
$$

**Biaya perakitan baru:**

$$
C_{assembly,baru} = 25.000 \times \frac{40}{3600} = \text{Rp } 278
$$

(Diasumsikan hanya biaya TK langsung; otomatisasi stamping mengurangi biaya proses menjadi Rp 8.000).

**Rekalkulasi total:**

$$
C_{total,baru} = 28.000 + 8.000 + 278 +
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
