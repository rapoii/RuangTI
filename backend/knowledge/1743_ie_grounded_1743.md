# 1743 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA): Kerangka Rekayasa Manufaktur dan Asembling untuk Produk Alat Kesehatan Sederhana

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (home-medical device) mengalami pertumbuhan eksponensial pascapandemi COVID-19, terutama untuk kategori produk terapi komplementer berbasis kafein seperti coffee enema basket. Produk ini, meski sederhana secara geometris, memiliki kompleksitas manufaktur yang signifikan karena berfungsi sebagai perangkat filtrasi yang bersentuhan langsung dengan jaringan biologis manusia. Amirullah dan Jakaria (2024) dalam publikasi mereka di jurnal peer-review (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain konvensional coffee enema basket masih mengandalkan komponen berlebih yang tidak esensial, penggunaan material stainless steel 304 yang boros, serta proses perakitan manual dengan tingkat efisiensi rendah. Kondisi ini menghasilkan tiga masalah fundamental: (i) harga jual ritel yang tidak kompetitif di pasar ekspor produk wellness, (ii) waktu perakitan rata-rata yang melebihi 4 menit per unit sehingga menurunkan throughput lini, dan (iii) waste rate material plat mencapai 38% akibat proses blanking dan bending yang tidak optimal.

Urgensi redesain semakin nyata ketika menghadapi standar FDA 21 CFR Part 820 untuk desain dan manufaktur alat kesehatan, yang menuntut traceability material dan kemampuan disassembly untuk sterilisasi ulang. Islam (2024) dalam kerangka evaluasi jembatan pracetak berbasis BIM-DFMA (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) menegaskan bahwa keputusan desain yang dilakukan pada fase konseptual dan preliminary akan menentukan 70–80% biaya siklus hidup produk. Meskipun studi Islam berfokus pada infrastruktur jembatan, prinsip bahwa *buildability problems must be discovered before moulds are cut* sangat relevan untuk produk sheet-metal seperti coffee enema basket yang mengandalkan proses stamping dan deep drawing. Tanpa integrasi metrik DFMA pada fase awal, masalah seperti misalignment lubang (hole misalignment), clearance untuk inserting tabung hisap, dan kesulitan清洗 (cleaning) baru terungkap pada tahap quality control — ketika biaya koreksi sudah sangat mahal.

Konteks pasar Indonesia menunjukkan bahwa UMKM manufaktur alat terapi herbal mampu memproduksi 5.000–10.000 unit coffee enema basket per bulan untuk memenuhi permintaan ekspor ke Jepang, Korea Selatan, dan Uni Eropa. Namun, biaya produksi satuan yang tinggi (sekitar Rp 185.000/unit pada desain lama) membuat margin keuntungan hanya 12–14%, jauh di bawah benchmark industri alat kesehatan sebesar 25–35%. Oleh karena itu, redesain berbasis DFMA bukan sekadar latihan akademis, melainkan kebutuhan strategis untuk mempertahankan daya saing. Pendekatan ini juga sejalan dengan semangat *Industri 4.0* yang menuntut digitalisasi keputusan desain melalui integrasi CAD/CAE dan simulasi manufacturability.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengintegrasikan dua pilar utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)** sesuai kerangka Boothroyd-Dewhurst. Untuk komponen sheet-metal, parameter DFM yang relevan meliputi pemilihan proses (stamping, bending, welding), toleransi geometris, dan pemilihan grade material.

### 2.1 Efisiensi Desain untuk Perakitan (DFA)

Indeks DFA didefinisikan sebagai rasio antara kompleksitas minimum teoritis terhadap kompleksitas aktual:

$$\eta_{DFA} = \frac{N_{\min} \cdot t_{\min}}{N_a \cdot t_a} \times 100\%$$

di mana:

- $N_{\min}$ = jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi utama (estimated by function analysis)
- $t_{\min}$ = waktu assembly minimum teoritis per komponen (umumnya 1,5–3,0 detik untuk operasi snap-fit)
- $N_a$ = jumlah aktual komponen pada desain awal
- $t_a$ = waktu assembly aktual total (detik)

### 2.2 Indeks Perakitan Boothroyd-Dewhurst

Versi ringkas dari Boothroyd-Dewhurst menggunakan rasio biaya assembly terhadap biaya komponen:

$$\text{DFA Index} = \frac{N_m \cdot t_m \cdot C_{op}}{t_a \cdot C_{comp}}$$

dengan:

- $N_m$ = jumlah minimum part ideal (typically 1 untuk keranjang filter monolitik)
- $t_m$ = waktu assembly minimum teoritis (s)
- $C_{op}$ = biaya operator per detik (Rp/detik)
- $C_{comp}$ = biaya komponen (Rp)

### 2.3 DFM untuk Sheet Metal: Material Utilization

Untuk komponen plat yang diproses melalui blanking, utilization ratio didefinisikan sebagai:

$$U = \frac{A_{part}}{A_{blank}} \times 100\%$$

di mana $A_{part}$ adalah luas netto part hasil blanking dan $A_{blank}$ adalah luas blank sebelum proses. Untuk keranjang coffee enema, desain konvensional memiliki $U \approx 0,62$, sedangkan target redesain $U \geq 0,85$.

### 2.4 Biaya Manufaktur Total

Model biaya total menurut Boothroyd & Raghunathan untuk komponen sheet-metal adalah:

$$C_{tot} = C_{mat} + C_{fab} + C_{assy} + C_{overhead}$$

dengan:

$$C_{mat} = \rho \cdot t \cdot A \cdot P_{mat}$$

$$C_{fab} = \dot{C}_{fab} \cdot (t_{setup} + \dot{t}_{cycle} \cdot Q)$$

di mana $\rho$ = densitas material (kg/m³), $t$ = tebal plat (m), $A$ = luas permukaan (m²), $P_{mat}$ = harga material (Rp/kg), $\dot{C}_{fab}$ = laju biaya fabrikasi (Rp/s), $\dot{t}_{cycle}$ = waktu siklus per unit (s/unit), $Q$ = jumlah batch produksi.

### 2.5 Kriteria Eliminasi Part (Mystery-Free Function)

Menerapkan *function-means matrix*: sebuah part hanya layak dipertahankan jika memenuhi ketiga kriteria Boothroyd:

1. **Criterion A**: Part melakukan fungsi relatif gerakan independen terhadap part lain selama operasi
2. **Criterion B**: Part memerlukan material/properties berbeda (mis. filter mesh stainless vs body polypropylene)
3. **Criterion C**: Part harus dipisahkan untuk memudahkan disassembly/maintenance

Jika salah satu kriteria saja terpenuhi, part tersebut layak digabungkan (merge) dengan part lain.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP 8-tahap berikut untuk redesain coffee enema basket:

```
┌────────────────────────────────────────────────────────────────────┐
│  Tahap 1: Fungsi Analisis (QFD House of Quality)                  │
│           ↓                                                        │
│  Tahap 2: DFA Awal — Hitung N_a, t_a, η_DFA existing              │
│           ↓                                                        │
│  Tahap 3: Mystery Elimination — Terapkan 3 Kriteria Boothroyd    │
│           ↓                                                        │
│  Tahap 4: Generate Concept Alternatif (SolidWorks CAD)            │
│           ↓                                                        │
│  Tahap 5: DFM Sheet-Metal — Pilih proses (stamping vs casting)   │
│           ↓                                                        │
│  Tahap 6: DFA Redesain — Hitung ulang η_DFA desain baru           │
│           ↓                                                        │
│  Tahap 7: Simulasi Biaya — Hitung C_tot sebelum & sesudah         │
│           ↓                                                        │
│  Tahap 8: Validasi Prototipe — Uji fungsi & cost break-even       │
└────────────────────────────────────────────────────────────────────┘
```

**Arsitektur keputusan DFMA**: Untuk menentukan apakah perubahan desain sepadan dengan investasi tooling baru, digunakan *break-even analysis*:

$$Q_{BE} = \frac{C_{tooling}}{\Delta C_{unit}}$$

di mana $Q_{BE}$ adalah volume produksi break-even (unit), $C_{tooling}$ adalah biaya investasi dies/mold baru (Rp), dan $\Delta C_{unit}$ adalah selisih biaya per unit antara desain lama dan baru. Untuk lot ekspor bulanan 8.000 unit dengan investasi dies Rp 24 juta dan $\Delta C_{unit}$ = Rp 32.500, diperoleh $Q_{BE} = 738$ unit, artinya investasi terlunasi dalam <3 hari produksi — keputusan *go* sangat rasional.

**Standar referensi**: ASTM A240 (pelat stainless steel), ISO 2768 (toleransi umum), serta 21 CFR Part 820 untuk desain medical device. Islam (2024) menekankan bahwa integrasi DFMA dengan BIM (atau CAD parametric dalam konteks produk) memungkinkan multi-criteria evaluation (cost, weight, assembly time, transportability) secara simultan, sehingga decision-maker tidak terjebak pada single-objective optimization yang sering misleading.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Desain Existing (Baseline)

Berdasarkan data lapangan UMKM produsen coffee enema basket di Jawa Timur (dipublikasikan dalam studi Amirullah & Jakaria, 2024):

| Komponen | Material | Proses | Jumlah |
|---|---|---|---|
| Body keranjang | SS304 t=1,2 mm | Stamping + bending | 1 |
| Base ring | SS304 t=2,0 mm | Welding | 1 |
| Filter mesh | SS316 weave 200 | Manual riveting | 1 |
| Handle bracket | SS304 | Welding | 2 |
| Handle grip | Polypropylene | Injection | 1 |
| Rivet | SS304 | Cold forming | 6 |
| Baut M3 | Baja | Machining | 2 |
| **Total part (N_a)** | | | **13 part** |

Waktu assembly aktual: $t_a = 248$ detik/unit (diukur dengan stopwatch time study, 50 siklus rata-rata).

### 4.2 Penerapan Mystery Elimination

Evaluasi 3 Kriteria Boothroyd untuk setiap part:

- **Handle bracket (×2)**: tidak memenuhi A, B, atau C → **dihapus**, difungsikan sebagai lipatan body
- **Baut M3 (×2)**: tidak memenuhi A (relatif statis), tidak memenuhi B (bisa diganti snap-fit), tidak memenuhi C → **diganti snap-fit pada body**
- **Rivet (×6)**: tidak memenuhi B (sama-sama SS304), tidak memenuhi C → **diganti spot welding otomatis**
- **Base ring terpisah**: tidak memenuhi A (bisa integral dengan body) → **diintegrasikan sebagai drawn shell**

Hasil eliminasi: 13 part → **6 part** ($N_{redesign} = 6$).

### 4.3 Perhitungan DFA Indeks

**Minimum part count** berdasarkan analisis fungsi (filter mesh wajib terpisah karena beda grade stainless, handle grip wajib terpisah untuk ergonomi, body sebagai single drawn shell, snap-fit sebagai integral feature):

$$N_{\min} = 4$$

**Waktu minimum teoritis** per part: $t_{\min} = 2,5$ s (asumsi operasi snap-fasten otomatis).

**Baseline**:
$$\eta_{DFA,base} = \frac{4 \times 2{,}5}{13 \times 248} \times 100\% = \frac{10}{3.224} \times 100\% \approx 0{,}310\%$$

**Redesain** dengan $N_{redesign} = 6$ dan $t_{redesign} = 95$ s (pengukuran time study prediksi, assembly flow disederhanakan):

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
