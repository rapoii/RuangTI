# 2655 — Redesain Komponen Fungsional Menggunakan Metode Design for Manufacture and Assembly (DFMA): Dari Produk Wellness Skala Kecil hingga Infrastruktur Modular Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tantangan struktural yang semakin kompleks: permintaan konsumen terhadap produk fungsional yang semakin murah, presisi, dan ramah lingkungan, di satu sisi, serta tekanan kompetitif global yang memaksa siklus pengembangan produk (product development cycle) makin pendek di sisi lain. Amirullah dan Jakaria (2024) dalam studinya menyoroti kasus nyata pada industri peralatan wellness dan kesehatan rumahan, khususnya *coffee enema basket* — sebuah komponen fungsional yang digunakan dalam prosedur hidroterapi kolon. Produk ini pada umumnya dirancang dengan filosofi *over-engineering* (rekayasa berlebihan): jumlah零件 (*parts*) yang terlalu banyak, proses perakitan yang memerlukan banyak operasi manual, serta pemilihan material yang tidak mempertimbangkan *Design for Manufacture and Assembly* (DFMA). Akibatnya, biaya produksi menjadi tinggi, waktu perakitan panjang, dan tingkat cacat (*defect rate*) sulit ditekan.

Menurut Amirullah dan Jakaria (2024) yang dipublikasikan melalui DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309), pendekatan DFMA memberikan solusi sistematis dengan dua pilar utama: **Design for Manufacturing (DFM)** yang menekan biaya dan kompleksitas fabrikasi, serta **Design for Assembly (DFA)** yang meminimalkan jumlah komponen, operasi perakitan, dan potensi *misfit* antar-part. Pendekatan ini berakar dari metodologi Boothroyd-Dewhurst yang telah teruji di industri otomotif, elektronik, hingga aerospace, dan kini merambah ke sektor peralatan kesehatan konsumen skala kecil-menengah.

Di sisi makro, Mubashir Islam (2024) dalam DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) membuktikan bahwa kelemahan metodologis serupa juga terjadi pada proyek infrastruktur besar — khususnya jembatan prefabrikasi — di mana keputusan desain pada tahap konsep masih didominasi oleh analisis biaya dan kapasitas struktural, tanpa memasukkan variabel manufacturability, transportability, liftability, dan erectability ke dalam fungsi objektif. Akibatnya, masalah *buildability* baru teridentifikasi pada tahap *shop drawing* atau bahkan di lapangan, ketika koreksi desain sudah sangat mahal. Kedua paper ini — meski berbeda skala (mikro produk wellness vs. makro infrastruktur jembatan) — menggarisbawahi satu isu fundamental: **integrasi pertimbangan manufaktur dan perakitan ke dalam keputusan desain konseptual merupakan kebutuhan imperatif di seluruh rantai nilai industri**. Konteks ini menjadi pijakan bagi Modul 2655 untuk membahas secara kuantitatif bagaimana DFMA diimplementasikan, dihitung, dan dievaluasi lintas-sektor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Design for Assembly (DFA) — Boothroyd-Dewhurst

DFA menghitung rasio antara jumlah零件 minimum teoretis yang dibutuhkan untuk memenuhi fungsi produk ($N_{min}$) terhadap jumlah零件 aktual pada desain ($N_a$). Indeks efisiensi assembly didefinisikan sebagai:

$$\eta_{DFA} = \frac{N_{min}}{N_a} \times 100\%$$

Di mana untuk setiap komponen dievaluasi tiga kriteria keputusan: **Apakah komponen harus terpisah karena harus bergerak relatif terhadap零件 lain?** **Apakah komponen harus terpisah karena diperlukan material/properti yang berbeda?** **Apakah komponen harus dipisah karena diperlukan untuk perakitan/pemeliharaan零件 lain?** Jika seluruh jawaban "Tidak",零件 tersebut layak dikonsolidasi (*part consolidation*).

Untuk setiap operasi assembly, biaya dihitung menggunakan rumus:

$$C_{ai} = t_i \cdot (C_{op} + C_{eq}) \cdot (1 + \alpha_i) + C_{tool,i}$$

Di mana $t_i$ adalah waktu operasi (detik), $C_{op}$ adalah tarif operator, $C_{eq}$ adalah biaya alokasi peralatan, $\alpha_i$ adalah faktor overhead, dan $C_{tool,i}$ adalah biaya spesifik tool/gripper.

### 2.2 Design for Manufacturing (DFM)

Total biaya manufaktur untuk komponen $k$ didefinisikan sebagai:

$$C_{M,k} = C_{mat,k} + C_{proc,k} + C_{tool,k} + C_{setup,k} + C_{waste,k}$$

Dengan $C_{mat,k}$ biaya material (Rp), $C_{proc,k}$ biaya proses (machining, forming, injection molding), $C_{tool,k}$ biaya pahat/cetakan, $C_{setup,k}$ biaya setup mesin, dan $C_{waste,k}$ biaya waste/scrap. Biaya proses dihitung per-batch melalui:

$$C_{proc,k} = \left( \frac{C_{machine}}{t_{cycle,k}} \right) + C_{labor,k}$$

Di mana $C_{machine}$ adalah biaya operasional mesin per-jam, dan $t_{cycle,k}$ adalah cycle time per-piece.

### 2.3 DFMA Composite Index

Untuk menilai desain secara agregat, Amirullah dan Jakaria (2024) menggunakan indeks gabungan:

$$\text{DFMA Score} = w_1 \cdot \eta_{DFA} + w_2 \cdot \left(1 - \frac{C_{M,total,after}}{C_{M,total,before}}\right) \times 100\%$$

Dengan $w_1 + w_2 = 1$. Bobot khas untuk produk wellness skala kecil: $w_1 = 0{,}55$ dan $w_2 = 0{,}45$, mencerminkan pentingnya simplifikasi perakitan yang lebih dominan daripada sekadar efisiensi biaya material.

### 2.4 Multi-Criteria DfMA untuk Skala Infrastruktur (Pendukung)

Untuk konteks jembatan prefabrikasi seperti diteliti Islam (2024), DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21), framework BIM-DfMA mengintegrasikan empat kriteria: *Manufacturing Index* (MI), *Transport Index* (TI), *Lifting Index* (LI), dan *Erection Index* (EI). Skor total melalui pembobotan:

$$S_{total} = \sum_{j=1}^{4} w_j \cdot S_j, \quad \sum_{j=1}^{4} w_j = 1$$

Di mana $w_j$ ditentukan melalui *Analytic Hierarchy Process* (AHP) dengan matriks perbandingan berpasangan:

$$A = [a_{ij}]_{4 \times 4}, \quad a_{ji} = \frac{1}{a_{ij}}, \quad a_{ii} = 1$$

Bobot优先 eigenvektor dihitung dari $\det(A - \lambda I) = 0$ dan rasio konsistensi $CR = CI/RI < 0{,}10$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti *Standard Operating Procedure* (SOP) delapan-langkah yang digunakan oleh Amirullah dan Jakaria (2024) dengan adaptasi dari literatur Boothroyd:

**Langkah 1 — Analisis Desain Eksisting.** Inventorisasi seluruh零件 ($N_a$), identifikasi fungsi tiap零件, dan pemetaanBill of Material (BoM). Untuk coffee enema basket, dokumen BoM, gambar teknis (*engineering drawing*), dan spesifikasi material dihimpun.

**Langkah 2 — Penentuan Fungsi Minimum.** Menurunkan $N_{min}$ dengan menjawab tiga pertanyaan Boothroyd untuk tiap零件: (a) pergerakan relatif, (b) perbedaan material, (c) kebutuhan assembly/disassembly.

**Langkah 3 — Analisis DFA Kuantitatif.** Hitung $\eta_{DFA}$ menggunakan persamaan (1).零件 yang memiliki *handling index* dan *insertion index* tinggi dievaluasi ulang.

**Langkah 4 — Analisis DFM Kuantitatif.** Estimasi $C_{M,k}$ untuk setiap kandidat material (stainless steel 304, polypropylene, ABS) dan proses (injection molding, sheet metal stamping, machining) menggunakan persamaan (3) dan (4).

**Langkah 5 — Redesain dan Konsolidasi.** Terapkan *part consolidation*: gabungkan零件 yang memenuhi kriteria "tidak harus terpisah". Pilih material yang memungkinkan single-process manufacturing.

**Langkah 6 — Validasi Numerik & Prototipe.** Hitung ulang seluruh metrik pada desain baru. Buat prototipe, ukur cycle time aktual, dan bandingkan dengan desain lama.

**Langkah 7 — Evaluasi Lintas-Kriteria.** Untuk konteks infrastruktur (Islam, 2024), integrasikan skor MI, TI, LI, EI ke dalam environment BIM (Revit/Navisworks).

**Langkah 8 — Continuous Improvement.** Lakukan FMEA dan Design Review berkala; tetapkan KPI: target reduction零件 ≥ 20%, reduction assembly time ≥ 30%, reduction cost ≥ 15%.

Diagram alir proses:

```
[Desain Eksisting] → [BoM & Fungsi] → [DFA Analysis]
        ↓                                     ↓
   [Material Selection] ← [DFM Analysis] ← [Part Consolidation]
        ↓
   [Prototipe] → [Pengujian] → [Validasi DFMA Score]
        ↓
   [Implementasi Produksi] → [KPI Monitoring]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Redesain Coffee Enema Basket (Amirullah & Jakaria, 2024).

### 4.1 Data Input Desain Eksisting (Before)

| Parameter | Nilai |
|---|---|
| Jumlah零件 ($N_a$) | 14 komponen |
| Material | Stainless Steel 304 + silikon gasket |
| Proses | Machining 4零件, Stamping 6零件, Molding 4零件 |
| Assembly time | 480 detik/unit |
| Biaya material/unit | Rp 87.500 |
| Biaya proses/unit | Rp 42.300 |
| Biaya assembly/unit | Rp 28.000 (tarif Rp 17.500/jam) |
| Total biaya/unit | Rp 157.800 |

### 4.2 Perhitungan DFA — Before

$N_{min}$ diestimasi = 6零件 (badan utama, tutup, filter mesh, seal, pegangan, konektor).

$$\eta_{DFA,before} = \frac{6}{14} \times 100\% = 42{,}86\%$$

### 4.3 Desain Usulan (After)

Redesain mengusulkan: konsolidasi 8零件 fungsional menjadi 4 bagian integral, body utama dari single-piece injection molded polypropylene food-grade, integrasi filter mesh ke dalam tutup snap-fit.

**Data After:**

| Parameter | Nilai |
|---|---|
| Jumlah零件 ($N_a$) | 7 komponen |
| Material | PP food-grade + silikon (hanya seal) |
| Proses | Injection molding (5), molding (2) |
| Assembly time | 210 detik/unit |
| Biaya material/unit | Rp 32.400 |
| Biaya proses/unit | Rp 18.900 |
| Biaya assembly/unit | Rp 10.200 |
| Total biaya/unit | Rp 61.500 |

### 4.4 Perhitungan DFA — After

$$\eta_{DFA,after} = \frac{6}{7} \times 100\% = 85{,}71\%$$

**Peningkatan efisiensi:** $\Delta\eta = 85{,}71\% - 42{,}86\% = 42{,}85$ poin persentase.

### 4.5 Perhitungan DFMA Score

Asumsikan $w_1 = 0{,}55$ dan $w_2 = 0{,}45$:

$$\text{DFMA Score} = 0{,}55 \times 85{,}71\% + 0{,}45 \times \left(\frac{157.800 - 61.500}{157.800}\right) \times 100\%$$

$$\text{DFMA Score} = 47{,}14\% + 0{,}45 \times 61{,}03\% = 47{,}14\% + 27{,}46\% = 74{,}60\%$$

### 4.6 Validasi Lintas-Sektor — Contoh Jembatan (Islam, 2024)

Untuk alternatif desain girder jembatan prefabrikasi, skor empat kriteria dengan bobot AHP tipikal ($w_{MI}=0{,}30$, $w_{TI}=0{,}