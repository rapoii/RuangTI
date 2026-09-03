# 1487 — Redesain Produk Healthcare Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi DfMA dalam Optimasi Manufaktur dan Perakitan Komponen Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan sektor manufaktur dengan karakteristik unik yang mensyaratkan keseimbangan presisi tinggi, sterilitas, biaya produksi massal, serta kepatuhan terhadap standar regulasi (ISO 13485, FDA 21 CFR Part 820). Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti isu kritis pada produk *coffee enema basket* — sebuah komponen sistem enema yang berfungsi sebagai wadah saringan untuk prosedur kolon hidroterapi menggunakan larutan kopi organik. Produk ini, meskipun terdengar sederhana, memiliki signifikansi klinis yang besar karena berkaitan langsung dengan keselamatan pasien (patient safety), kontaminasi silang, dan efektivitas terapi.

Urgensi redesain produk ini muncul dari beberapa permasalahan operasional yang diidentifikasi oleh Amirullah dan Jakaria (2024). Pertama, desain original basket enema kopi memiliki *part count* yang terlalu tinggi sehingga meningkatkan kompleksitas perakitan (*assembly complexity*) dan menurunkan *first-pass yield*. Kedua, material yang digunakan pada desain lama tidak optimal untuk proses *injection molding* dan *sterilization*, sehingga meningkatkan *cycle time* manufaktur. Ketiga, biaya perakitan manual yang tinggi menjadi beban signifikan pada struktur *Cost of Goods Sold* (COGS) mengingat volume produksi mencapai ribuan unit per bulan.

Dari perspektif teknik industri, permasalahan ini bukan sekadar kasus efisiensi produksi, melainkan menyentuh dimensi strategis *Design for Manufacture and Assembly* (DFMA) — sebuah metodologi terstruktur yang menyatukan dua domain rekayasa: (1) Design for Manufacture (DFM), yang memastikan desain mudah, murah, dan berkualitas tinggi untuk diproduksi; serta (2) Design for Assembly (DFA), yang memastikan desain komponen dapat dirakit secara cepat, akurat, dan minim cacat dengan jumlah bagian (*parts*) yang minimal. Pendekatan DFMA diperkenalkan oleh Boothroyd dan Dewhurst (1983) dan telah menjadi *standard practice* di industri manufaktur global.

Studi pendukung dari Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperkuat relevansi DFMA dalam konteks yang lebih luas. Islam menunjukkan bahwa integrasi DFMA dengan Building Information Modelling (BIM) pada konstruksi jembatan pracetak (*prefabricated bridge construction*) menghasilkan peningkatan kualitas keputusan desain karena kriteria manufaktur, transportasi, lifting, dan ereksi sudah dimasukkan sejak fase konseptual — bukan setelah desain dibekukan. Temuan ini paralel dengan kasus Amirullah dan Jakaria (2024): ketika keputusan desain dibuat tanpa pertimbangan *manufacturability*, masalah *buildability* baru muncul pada tahap *shop-drawing*, ketika mold sudah dipotong dan koreksi hanya mungkin dilakukan dengan biaya sangat tinggi.

Konteks industri secara makro menunjukkan bahwa pasar alat kesehatan Indonesia dan global terus tumbuh dengan CAGR 5-7% per tahun, didorong oleh peningkatan populasi aging, prevalensi penyakit kronis, serta tren *preventive healthcare*. Dalam ekosistem ini, kemampuan menghasilkan produk yang *cost-effective* tanpa mengorbankan kualitas menjadi *competitive imperative*. Redesain produk menggunakan DFMA bukan hanya sekadar inisiatif pengurangan biaya, melainkan strategi diferensiasi kompetitif dan peningkatan *time-to-market*.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada dua kerangka teoritis utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Kedua pendekatan ini menggunakan formula kuantitatif untuk mengukur kualitas desain dari perspektif manufaktur dan perakitan.

### 2.1 Design for Assembly (DFA) — Metode Boothroyd-Dewhurst

DFA menggunakan indeks efisiensi perakitan yang dinyatakan sebagai:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{T_{ma}} \times 100\%$$

di mana:
- $\eta_{DFA}$ = efisiensi desain untuk perakitan (%)
- $N_{min}$ = jumlah minimum komponen secara teoritis
- $t_{min}$ = waktu perakitan teoritis minimum per komponen (detik), umumnya $t_{min} = 1.5$ detik sesuai standar Boothroyd
- $T_{ma}$ = total waktu perakitan aktual (detik)

Indeks DFA juga menggunakan rasio *Design Efficiency* terhadap waktu handling, insertion, dan fastening. Untuk setiap komponen ke-$i$:

$$T_{ma,i} = T_{h,i} + T_{i,i} + T_{f,i}$$

di mana $T_h$ = waktu handling, $T_i$ = waktu insertion, dan $T_f$ = waktu fastening.

### 2.2 Design for Manufacture (DFM)

DFM mengkuantifikasi *manufacturability* melalui *manufacturing cost index*:

$$C_{total} = \sum_{i=1}^{n} (C_{m,i} + C_{t,i} + C_{s,i} + C_{o,i})$$

di mana:
- $C_{m,i}$ = biaya material komponen $i$
- $C_{t,i}$ = biaya tooling komponen $i$
- $C_{s,i}$ = biaya proses sub-assembl y
- $C_{o,i}$ = biaya overhead (termasuk inspeksi, packaging)

Untuk proses *injection molding* (yang relevan dengan kasus basket enema), biaya per unit dapat dimodelkan sebagai:

$$C_{unit} = \frac{C_{tooling}}{N_{batch}} + C_{material} \cdot m_{part} + C_{cycle} \cdot t_{cycle}$$

di mana $N_{batch}$ = jumlah produksi per batch, $m_{part}$ = massa komponen, dan $t_{cycle}$ = waktu siklus.

### 2.3 DFMA Combined Index

Amirullah dan Jakaria (2024) menghitung indeks DFMA gabungan:

$$I_{DFMA} = w_1 \cdot \eta_{DFA} + w_2 \cdot \eta_{DFM}$$

dengan bobot $w_1$ dan $w_2$ yang mencerminkan prioritas perusahaan (umumnya $w_1 = w_2 = 0.5$ untuk keseimbangan).

### 2.4 Formulasi Tambahan: Reduksi Biaya dan Waktu

Reduksi biaya setelah redesain dihitung sebagai:

$$\Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

Reduksi waktu perakitan:

$$\Delta T = \frac{T_{ma,before} - T_{ma,after}}{T_{ma,before}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam tujuh tahapan sistematis:

**Tahap 1 — Analisis Desain Original**
Inventarisasi seluruh komponen, identifikasi fungsi setiap bagian, dan pemetaan proses perakitan. Untuk basket enema kopi original, tim mengidentifikasi 14 komponen termasuk: outer shell, inner mesh, retainer ring, hinge pin, locking clip, dan aksesoris penyambung selang.

**Tahap 2 — Perhitungan DFA Baseline**
Penerapan formulasi Boothroyd-Dewhurst untuk desain original. Setiap komponen dievaluasi menggunakan *DFA Worksheet* yang menilai tiga kriteria: handling difficulty, insertion difficulty, dan fastening/joining operations.

**Tahap 3 — Identifikasi Konflik Desain (*Design Conflict*)**
Identifikasi bagian-bagian yang sulit dirakit atau tidak menambah nilai fungsional (*non-value-added parts*). Amirullah dan Jakaria (2024) menemukan 5 komponen yang merupakan *candidate elimination*.

**Tahap 4 — Generasi Konsep Redesain**
Menggunakan *morphological matrix* dan *concept screening matrix* untuk menghasilkan 3-5 alternatif desain. Kriteria seleksi meliputi: fungsionalitas, keamanan pasien (biocompatibility), kemampuan *sterilization* (autoclave-resistant), dan biaya produksi.

**Tahap 5 — Evaluasi DFM dan DFA Iteratif**
Untuk setiap konsep alternatif, hitung ulang indeks DFA dan biaya manufaktur DFM. Bandingkan dengan baseline menggunakan *Pugh Matrix* dengan bobot.

**Tahap 6 — Prototyping dan Validasi**
Pembuatan prototipe menggunakan *3D printing* (FDM) untuk validasi geometri, dilanjutkan dengan prototipe injeksi plastik (PP medical grade) untuk validasi manufaktur.

**Tahap 7 — Finalisasi dan Dokumentasi**
Finalisasi desain, pembuatan *DFMA Report*, dan *Design for Manufacturing Handbook* untuk produksi massal.

### Diagram Alir SOP DFMA

```
┌──────────────────────────────┐
│   Tahap 1: Analisis Original │
│   - Bill of Materials         │
│   - Assembly Sequence         │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│   Tahap 2: Hitung DFA        │
│   - Boothroyd Worksheet       │
│   - Assembly Time             │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│   Tahap 3: Identifikasi      │
│   Konflik & Redundansi        │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│   Tahap 4: Konsep Redesain   │
│   - Morphological Analysis    │
│   - Concept Selection         │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│   Tahap 5: Evaluasi DFM/DFA  │
│   - Cost Analysis             │
│   - Cycle Time Optimization   │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│   Tahap 6: Prototyping       │
│   - 3D Print Validation       │
│   - Injection Mold Test       │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│   Tahap 7: Finalisasi        │
│   - DFMA Documentation        │
│   - Production Handover       │
└──────────────────────────────┘
```

Standar yang relevan mencakup ISO 13485:2016 (Quality Management System untuk Medical Devices), ISO 14971 (Risk Management untuk Medical Devices), serta regulasi FDA untuk *design controls* dan *design history file* (DHF).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data yang dipresentasikan oleh Amirullah dan Jakaria (2024), berikut adalah rekonstruksi studi kasus kuantitatif untuk redesain basket enema kopi menggunakan parameter industri realistis:

### 4.1 Parameter Input Desain Original

| Parameter | Nilai Original | Satuan |
|-----------|---------------|--------|
| Jumlah komponen ($N$) | 14 | parts |
| Waktu handling rata-rata ($T_h$) | 4.2 | detik/part |
| Waktu insertion rata-rata ($T_i$) | 3.8 | detik/part |
| Waktu fastening rata-rata ($T_f$) | 6.5 | detik/part |
| Total waktu perakitan ($T_{ma,before}$) | 203 | detik |
| Biaya material per unit | 8,500 | IDR |
| Biaya tooling (amortisasi 50,000 unit) | 2,000 | IDR/unit |
| Biaya proses (injection + assembly) | 6,200 | IDR/unit |
| Total biaya produksi ($C_{before}$) | 16,700 | IDR/unit |
| Volume produksi bulanan | 5,000 | unit |

### 4.2 Perhitungan DFA Baseline

Menggunakan formula Boothroyd-Dewhurst:

$$T_{ma,before} = 14 \times (4.2 + 3.8 + 6.5) = 14 \times 14.5 = 203 \text{ detik}$$

Untuk $N_{min}$ secara teoritis (desain ideal), fungsi basket enema dapat dicapai dengan 6 komponen minimum (outer shell, inner mesh, integrated retainer, locking mechanism, connector, handle).

$$t_{min} = 1.5 \text{ detik (standar Boothroyd)}$$

$$\eta_{DFA,before} = \frac{6 \times 1.5}{203} \times 100\% = \frac{9}{203} \times 100\% = 4.43\%$$

Efisiensi DFA baseline hanya 4.43%, menunjukkan desain sangat tidak optimal untuk perakitan.

### 4.3 Hasil Redesain

Amirullah dan Jakaria (2024) berhasil mereduksi jumlah komponen dari 14 menjadi 8 bagian dengan melakukan:
- Eliminasi retainer ring (diintegrasikan ke outer shell melalui *snap-fit*)
- Pengg