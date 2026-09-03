# 1919 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket dengan Pendekatan Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS – Universitas Muhammadiyah Surakarta)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan alternatif dan wellness devices mengalami pertumbuhan signifikan dalam dua dekade terakhir, didorong oleh meningkatnya permintaan konsumen terhadap terapi non-farmakologis termasuk hidroterapi kolon dan prosedur coffee enema yang digunakan dalam praktik klinis integratif. Amirullah dan Jakaria (2024) dalam studinya menyoroti bahwa **keranjang coffee enema** (*coffee enema basket*) — komponen kritis yang berfungsi sebagai wadah filtrasi bubuk kopi sekaligus sebagai elemen difusi fluida dalam perangkat enema — memiliki desain awal yang cenderung *over-engineered*, ditandai oleh jumlah komponen yang berlebihan, proses perakitan yang memerlukan banyak pengencang, serta pemilihan material yang belum mempertimbangkan siklus manufaktur secara menyeluruh. Kondisi ini menimbulkan tiga masalah utama: pertama, *manufacturing lead time* yang panjang karena proses fabrikasi yang terlokalisasi pada工序 (*work工序*) tertentu; kedua, biaya perakitan yang tinggi akibat *touch labour* yang intensif; ketiga, risiko kontaminasi silang yang meningkat pada perangkat medis akibat *crevice* dan sambungan sulit dibersihkan.

Urgensi redesain semakin nyata ketika regulasi **ISO 13485:2016** (Medical Devices – Quality Management Systems) dan **FDA 21 CFR Part 820** menekankan pentingnya *design control* sejak tahap konseptual. Perangkat yang dirancang tanpa pertimbangan *Design for Manufacture and Assembly* (DFMA) akan menghadapi *rework cost* yang 5–10 kali lebih tinggi ketika defect ditemukan pada tahap produksi massal, sebuah prinsip yang disebut **Boeing's Rule of Ten** dalam literatur concurrent engineering. Pendekatan DFMA, yang awalnya dipopulerkan oleh Geoffrey Boothroyd dan Winston Knight pada 1970-an, menyediakan kerangka sistematis untuk menyederhanakan struktur produk sejak tahap desain awal sehingga **waktu perakitan, jumlah komponen, dan total biaya dapat diminimasi secara simultan** tanpa mengorbankan fungsi dan kualitas.

Konteks industri alat kesehatan di Indonesia, sebagaimana dilaporkan oleh berbagai asosiasi manufaktur, menunjukkan bahwa lebih dari 60% UMKM alat kesehatan masih mengandalkan desain warisan (*legacy design*) yang tidak pernah di-*revisit* dengan metodologi modern. Paper Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) memberikan kontribusi empiris yang penting dengan mendemonstrasikan bagaimana DFMA — yang dikombinasikan dengan Activity-Based Costing dan teknik kuantitatif Boothroyd-Dewhurst — mampu mereduksi biaya produksi perangkat wellness secara substansial. Secara paralel, kerangka evaluasi multi-kriteria berbasis BIM yang diusulkan oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) untuk konstruksi jembatan prefabrikasi menunjukkan bahwa integrasi DFMA ke dalam *digital twin* dan *parametric modelling* mampu mengkuantifikasi trade-off antara *manufacturability*, *transportability*, dan *erectability* pada tahap yang sangat dini — sebuah pendekatan yang juga relevan ketika diterapkan pada perangkat medis skala kecil seperti keranjang coffee enema.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kerangka Design for Manufacture and Assembly

DFMA merupakan gabungan dua disiplin: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi setiap komponen individual, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan produk total. Boothroyd dan Dewhurst (1991) merumuskan indeks **Design Efficiency** sebagai ukuran efektivitas struktur produk:

$$\eta_{DFA} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi produk (berdasarkan analisis *functional decomposition*), dan $N_{actual}$ adalah jumlah komponen aktual pada desain awal. Untuk keranjang coffee enema, satu komponen dihitung sebagai satu bagian yang harus dipisahkan dari komponen lain pada proses disassembly atau assembly — kriteria Boothroyd-Dewhurst: apakah komponen tersebut perlu dipisahkan selama operasi servis, transporte, atau perakitan? Jika tidak, maka komponen tersebut kandidat untuk **elimination** atau **integration**.

### 2.2. Formulasi Biaya Total Produksi

Total biaya produksi alat kesehatan terdiri dari komponen biaya material, biaya fabrikasi, dan biaya perakitan. Model matematisnya dapat dinyatakan sebagai:

$$C_{total} = \sum_{i=1}^{N} C_{m,i} + \sum_{j=1}^{M} C_{a,j} + C_{overhead}$$

dengan $C_{m,i} = (m_i \cdot p_i) + (t_{mach,i} \cdot R_{mach})$ adalah biaya fabrikasi komponen ke-$i$, $C_{a,j} = (t_{a,j} \cdot R_{lab}) + (N_{fast,j} \cdot p_{fast})$ adalah biaya operasi assembly ke-$j$, dan $C_{overhead}$ adalah alokasi biaya tidak langsung (overhead pabrik, tooling amortisasi, biaya inspeksi kualitas).

### 2.3. Indeks Reduksi Komponen dan Efisiensi Perakitan

Penurunan jumlah komponen menghasilkan reduksi biaya yang dihitung melalui rumus berikut:

$$\Delta C = (N_{before} - N_{after}) \cdot (t_a \cdot R_{lab} + p_{fast})$$

Dengan mengasumsikan $t_a = 18$ detik per operasi rata-rata (data tipikal untuk operasi snap-fit pada alat medis kecil), $R_{lab} = \text{IDR } 8.000$/jam (upah operator manufaktur Indonesia per 2024), dan $p_{fast} = \text{IDR } 350$/buah untuk pengencang stainless steel M3, maka setiap pengurangan satu komponen menghemat sekitar **IDR 40 + 350 = IDR 390 per unit**, dan dengan volume produksi 50.000 unit/tahun menghasilkan penghematan total sekitar **IDR 19,5 juta per tahun** dari sisi pengencang saja.

### 2.4. Formulasi Efisiensi Manufaktur (DFM Index)

Indeks DFM untuk proses *sheet metal forming* (yang relevan untuk keranjang coffee enema dari stainless steel 304) dinyatakan sebagai:

$$\eta_{DFM} = 1 - \frac{T_{setup} + T_{handling} + T_{machining} + T_{inspection}}{T_{total, available}}$$

Untuk desain yang menggunakan proses stamping + welding, indeks ini ditingkatkan melalui pemilihan operasi *laser cutting* dengan *nesting efficiency* optimal. **Nesting efficiency** didefinisikan sebagai:

$$\eta_{nesting} = \frac{A_{used}}{A_{sheet}} \times 100\%$$

di mana $A_{used}$ adalah luas material terpakai dan $A_{sheet}$ adalah luas lembaran standar. Pada redesain Amirullah dan Jakaria (2024), optimalisasi *nesting* menghasilkan $\eta_{nesting}$ meningkat dari 67% menjadi 86%.

### 2.5. Model Toleransi dan Stack-Up

Karena keranjang coffee enema memiliki fitur filtrasi dengan **mesh aperture** presisi (±0,05 mm), analisis *tolerance stack-up* dilakukan menggunakan metode *worst-case* dan *statistical (RSS)*:

$$T_{RSS} = \sqrt{\sum_{i=1}^{n} T_i^2}$$

Untuk desain lama dengan stack-up 5 komponen, $T_{worst} = \sum T_i = 0,25$ mm dan $T_{RSS} = 0,112$ mm. Setelah redesain menjadi 3 komponen terintegrasi (mesh dilas langsung ke frame), $T_{RSS} = \sqrt{0,04^2 + 0,04^2 + 0,04^2} = 0,069$ mm — peningkatan akurasi geometris sebesar **38,4%**.

---

## 3. Metodologi Rekayasa & SOP

Amirullah dan Jakaria (2024) menyusun SOP DFMA dalam **tujuh tahapan sistematis** yang berlaku untuk redesain alat kesehatan:

1. **Studi Fungsi dan Dekomposisi Fungsional** — Pemetaan fungsi primer (filtrasi, retensi, difusi) dan fungsi sekunder (handling ergonomis, koneksi ke selang enema). Setiap fungsi diatribusikan ke modul atau komponen.
2. **Analisis Desain Eksisting (As-Is)** — Inventarisasi seluruh komponen menggunakan *Bill of Materials* (BOM), pengukuran waktu siklus perakitan dengan *stopwatch time study* (minimal 30 siklus pengamatan untuk reliabilitas statistik), serta kalkulasi biaya *activity-based*.
3. **Aplikasi DFA — Boothroyd-Dewhurst Method** — Setiap komponen dievaluasi terhadap tiga pertanyaan: (a) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (b) Apakah komponen harus terbuat dari material berbeda? (c) Apakah komponen harus dipisahkan untuk disassembly? Komponen yang menjawab "tidak" untuk ketiganya menjadi kandidat integrasi.
4. **Aplikasi DFM** — Evaluasi proses fabrikasi alternatif (stamping vs. *laser cutting*, welding vs. *brazing*, *injection molding* untuk handle plastik) berdasarkan *manufacturing cost index*.
5. **Konstruksi Desain Baru (To-Be)** — Generasi alternatif desain menggunakan *morphological matrix* dan seleksi berdasarkan *weighted scoring model* dengan kriteria: biaya, kemudahan fabrikasi, kemudahan perakitan, kemampuan sterilisasi (autoclave 121°C), dan ergonomi.
6. **Prototyping dan Validasi** — Pembuatan prototipe, pengujian fungsional (uji filtrasi, uji kebocoran pada tekanan 0,5 bar), dan verifikasi dimensi dengan CMM.
7. **Implementasi dan Continuous Improvement** — Roll-out ke lini produksi dengan *pilot batch* 500 unit dan pengukuran KPI.

**Diagram Alir SOP (Notasi Proses):**

```
[Start] → [Functional Decomposition] → [As-Is BOM & Costing]
       → [DFA Screening] → [DFM Screening] → [Concept Generation]
       → [Multi-Criteria Scoring] → [Prototype] → [Functional Test]
       → [Pilot Batch] → [KPI Monitoring] → [Standardisasi] → [End]
```

Prinsip-prinsip ini selaras dengan kerangka BIM-DfMA dari Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), yang menekankan bahwa keputusan desain harus dievaluasi **sebelum** cetakan/potong模具 (*dies/cutting tools*) dibuat — paralel dengan kritik terhadap praktik konvensional di mana *buildability issues* baru terungkap saat *shop drawing* atau saat di lapangan, ketika koreksi sudah sangat mahal.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input Desain Eksisting

Berdasarkan tipikal desain keranjang coffee enema komersial dan laporan studi kasus DFMA pada alat medis sejenis, digunakan parameter berikut:

| Parameter | Nilai Awal (As-Is) |
|---|---|
| Jumlah komponen total | $N_{before} = 12$ buah |
| Jumlah minimum teoritis | $N_{min} = 6$ buah |
| Waktu perakitan total | $t_{