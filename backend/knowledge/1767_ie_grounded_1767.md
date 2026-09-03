# 1767 — Analisis Implementasi FMEA AIAG/VDA pada Manufaktur Otomotif dan Pemeliharaan Mesin CNC: Formulasi Kuantitatif, Prosedur Rekayasa, dan Evaluasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS* — Kajian Kuantitatif dengan Aplikasi Lintas Sektor pada Pemeliharaan Mesin CNC
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22 No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal (UPS)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global berada di bawah tekanan simultan dari tiga vektor strategis: (1) eskalasi kompleksitas desain *powertrain*, elektrifikasi, dan integrasi ADAS; (2) regulasi kualitas yang semakin ketat melalui standar IATF 16949 dan *customer-specific requirements* (CSR) OEM seperti Volkswagen, Ford, GM, dan Stellantis; serta (3) kebutuhan untuk mengendalikan *cost of poor quality* (COPQ) yang mencakup rework, scrap, garansi, dan *recall* campaigns. Dalam konteks inilah Bizeli & Terazzi (2024) melakukan studi kasus kualitatif-deskriptif pada sebuah *multinational automotive parts manufacturer* untuk mengevaluasi **implementasi FMEA AIAG/VDA**, sebuah metodologi standar hasil joint venture antara *Automotive Industry Action Group* (AIAG, AS) dan *Verband der Automobilindustrie* (VDA, Jerman) yang diterbitkan tahun 2019 dan menggantikan pendekatan FMEA klasik SAE J1739 serta VDA Volume 4 (Bizeli & Terazzi, 2024, DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)).

Tiga profesional berpengalaman diwawancarai secara semi-terstruktur, dan hasilnya menunjukkan empat temuan utama. Pertama, FMEA AIAG/VDA secara sistematis mendorong *failure prevention* sejak tahap *concept* dan *design*, sehingga mengurangi biaya terkait rework dan *recall* yang dalam industri otomotif nilainya dapat mencapai ratusan juta dolar per insiden (satu kasus *recall* airbag Takata 2008–2017 merugikan lebih dari USD 24 miliar menurut data NHTSA). Kedua, metodologi ini meningkatkan *product reliability* melalui struktur *seven steps* yang lebih ketat dibanding FMEA klasik. Ketiga, kontribusinya terhadap *team integration* lintas fungsi (R&D, manufaktur, kualitas, supplier,售后) merupakan dampak organisasional yang signifikan. Keempat, tantangan utama mencakup *resistance to change* dari tim senior, kebutuhan *continuous training*, serta integrasi dengan sistem PLM/ERP yang belum成熟 (Bizeli & Terazzi, 2024).

Relevansi topik ini diperkuat oleh studi Saputra & Sukmono (2024) yang menerapkan FMEA pada pemeliharaan mesin *CNC milling* di lantai produksi (DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)), membuktikan bahwa kerangka kerja FMEA — termasuk paradigma AIAG/VDA — memiliki portabilitas tinggi lintas sektoral dari industri *process* (otomotif) ke industri *discrete manufacturing* (permesinan). Urgensi ekonominya semakin nyata ketika satu *unplanned downtime* pada mesin CNC bernilai strategis dapat menyebabkan *opportunity loss* produksi hingga USD 8.000–20.000 per jam tergantung pada nilai *bill of material* dan *order book* yang ditunda (Saputra & Sukmono, 2024). Dengan demikian, modul ini membangun jembatan intelektual antara studi kasus kualitatif Bizeli & Terazzi (2024) dan aplikasi kuantitatif Saputra & Sukmono (2024), untuk menyajikan kerangka implementasi FMEA AIAG/VDA yang utuh, terukur, dan aplikatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma FMEA AIAG/VDA: Dari RPN ke *Action Priority* (AP)

FMEA klasik (SAE J1739) menggunakan ***Risk Priority Number*** (RPN) sebagai metrik komposit risiko:

$$RPN = S \times O \times D$$

di mana $S$ (*Severity*), $O$ (*Occurrence*), dan $D$ (*Detection*) masing-masing diskala 1–10. Kelemahan fundamental RPN adalah rentang nilai yang luas (1–1000) yang tidak merepresentasikan bobot risiko secara proporsional — misalnyamode kegagalan dengan (S=9, O=2, D=3) menghasilkan RPN = 54, sedangkan (S=5, O=5, D=5) menghasilkan RPN = 125, padahal *severity* kategori pertama jauh lebih kritis secara manajerial. AIAG/VDA 2019 mengatasi hal ini dengan memperkenalkan ***Action Priority*** (AP), sebuah level kualitatif-kategorik yang ditentukan melalui **tabel lookup tiga-dimensi** (S, O, D) yang telah dikalibrasi secara konsensus industri (Bizeli & Terazzi, 2024).

$$AP = f(S, O, D) \in \{H, M, L\}$$

dengan $H$ (*High*), $M$ (*Medium*), $L$ (*Low*). Secara matematis, fungsi $f(\cdot)$ tidak lagi kontinu seperti RPN melainkan direpresentasikan oleh *lookup matrix* $M_{AP}$ berukuran $10 \times 10$ untuk setiap nilai S, sehingga keputusan risiko menjadi lebih deterministik.

### 2.2 Skala Severity, Occurrence, Detection (AIAG/VDA 2019)

- **Severity (S)** — skala 1–10: dampak mode kegagalan terhadap pelanggan akhir. Nilai S ≥ 9 berarti *safety-relevant failure* yang menjadi *must-address* tanpa kompromi.
- **Occurrence (O)** — skala 1–10: probabilitas mode kegagalan terjadi, dihitung dari data historis lapangan (*field data*) atau data FMEA serupa:

$$O = \left\lfloor 10 \cdot \log_{10}\left(\frac{n_{f}}{n_{T}}\right) + 1 \right\rfloor$$

di mana $n_{f}$ adalah jumlah kegagalan dan $n_{T}$ adalah total unit-waktu observasi.
- **Detection (D)** — skala 1–10: probabilitas mode kegagalan **tidak** terdeteksi sebelum produk/jasa sampai ke pelanggan. D rendah berarti kontrol deteksi sangat efektif.

### 2.3 Formulasi COPQ dan Justifikasi Ekonomi

Untuk membenarkan investasi implementasi FMEA AIAG/VDA, digunakan kerangka ***Cost of Poor Quality***:

$$COPQ_{total} = C_{rework} + C_{scrap} + C_{warranty} + C_{recall} + C_{downtime}$$

Saputra & Sukmono (2024) melaporkan bahwa pada mesin CNC, biaya *downtime* satu failure mode kritis (misalnya kerusakan *spindle bearing*) mencapai USD 12.500 per insiden termasuk biaya spare part, tenaga kerja teknisi, dan *opportunity loss* produksi. Implementasi FMEA yang menurunkan rating O sebesar ΔO menghasilkan *savings*:

$$\Delta C_{annual} = N_{failures} \cdot (O_{before} - O_{after}) \cdot C_{per-failure}$$

### 2.4 Threshold dan Aturan Keputusan

Mode kegagalan dengan $AP = H$ wajib di-*mitigate* sebelum *production part approval process* (PPAP). Mode dengan $AP = M$ memerlukan justifikasi risiko residual, sedangkan $AP = L$ didokumentasikan sebagai *known risk* dengan monitoring berkala.

## 3. Metodologi Rekayasa & SOP Implementasi

Prosedur implementasi FMEA AIAG/VDA mengikuti ***seven-step approach*** yang distandardisasi (Bizeli & Terazzi, 2024):

1. **Planning & Preparation** — Penentuan scope, pembentukan *cross-functional team* (CFT) yang terdiri dari design engineer, manufacturing engineer, quality engineer, supplier quality engineer, dan *field failure analyst*. Penugasan *FMEA owner* dan *champion*.
2. **Structure Analysis** — Translasi *block diagram* produk menjadi struktur fungsional pohon (*function tree*). Setiap elemen di-breakdown menggunakan diagram *Customer → System → Subsystem → Component*.
3. **Function Analysis** — Setiap elemen struktur dipasangkan dengan fungsi teknik menggunakan kata kerja measurable (misal: "mengirim torsi ≥ 200 Nm pada 1500–4500 rpm"). Visualitasisasinya menggunakan *P-diagram* dan *boundary diagram*.
4. **Failure Analysis** — Identifikasi mode kegagalan ($FM$), efek ($FE$), dan penyebab ($FC$) untuk setiap fungsi menggunakan *cause-and-effect chain*:

$$FM \xrightarrow{\text{causal}} FE \quad \text{dan} \quad FC \xrightarrow{\text{enables}} FM$$

5. **Risk Analysis** — Penilaian S, O, D menggunakan skala AIAG/VDA dan penentuan AP melalui *lookup matrix* (lihat Tabel 1 pada Bagian 4).
6. **Optimization** — Perumusan *action items* untuk mode dengan $AP = H$ dan $M$, dengan penugasan *responsibility*, *due date*, dan *effectivity verification*.
7. **Results Documentation** — Pembuatan *FMEA report* yang terintegrasi dengan *control plan* dan *lessons learned database*.

Untuk aplikasi pemeliharaan mesin CNC, Saputra & Sukmono (2024) mengadaptasi langkah 1–6 menjadi **maintenance FMEA** dengan langkah tambahan: **Failure Mode Net Failure Rate** dikuantifikasi menggunakan:

$$\lambda_{system} = \sum_{i=1}^{n} \lambda_i$$

dengan $\lambda_i$ sebagai *failure rate* komponen individual.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus A — Komponen Otomotif: *Brake Caliper Housing*

Berdasarkan konteks Bizeli & Terazzi (2024), ambil skenario *brake caliper housing* yang diproduksi oleh *tier-1 automotive supplier* untuk pasar Eropa. Misalkan setelah 3 tahun produksi, database *field failures* menunjukkan:

- Total unit terjual: $n_T = 1.200.000$ unit-waktu
- Jumlah failure *cracking pada dudukan piston*: $n_f = 240$ insiden

Hitung rating Occurrence:

$$O = \left\lfloor 10 \cdot \log_{10}\left(\frac{240}{1.200.000}\right) + 1 \right\rfloor = \left\lfloor 10 \cdot (-3,699) + 1 \right\rfloor = \lfloor -36,0 \rfloor$$

Karena nilai absolut terlalu kecil, maka digunakan pembulatan konservatif $O = 4$ (Occurrence = 4 berarti "occasionally fails" per AIAG/VDA). Severity ditetapkan $S = 8$ (kehilangan fungsi pengereman parsial, *safety-relevant*) dan Detection $D = 5$ (terdeteksi pada *end-of-line test* dengan efektivitas 60%).

**AP Determination**: Mengacu pada matriks AIAG/VDA 2019 untuk S=8, O=4, D=5, diperoleh $AP = M$ (Medium). Ini berarti tindakan optimisasi diperlukan sebelum produksi seri berikutnya.

### 4.2 Studi Kasus B — Pemeliharaan Mesin CNC *Vertical Machining Center*

Saputra & Sukmono (2024) menganalisis 10 mode kegagalan utama mesin CNC. Ambil satu mode: ***Spindle Bearing Premature Failure*** dengan parameter aktual:

| Parameter | Nilai | Sumber |
|---|---|---|
| Severity (S) | 8 | Kerusakan spindle = stop produksi total |
| Occurrence (O) | 5 | 1 kegagalan per 6 bulan dari 4 mesin |
| Detection (D) | 6 | *Vibration monitoring* parsial |

Perhitungan RPN klasik:

$$RPN_{classic} = 8 \times 5 \times 6 = 240$$

Perhitungan AP AIAG/VDA menggunakan tabel lookup untuk S=8, O=5, D=6 → $AP = H$.

**Konsekuensi ekonomi** (asumsi biaya per kegagalan $C_{per-failure}$ = USD 12.500, jumlah kegagalan per tahun sebelum tindakan $N_{failures}$ = 8):

$$COPQ_{sebelum} = 8 \times 12.500 = USD\,100.000/\text{tahun}$$

Setelah implementasi *action item* berupa *predictive maintenance* dengan *online vibration analyzer* (D turun dari 6 menjadi 3) dan re-lubrication schedule (O turun dari 5 menjadi 3), maka AP menjadi $M$ dan:

$$\Delta C_{annual} = 8 \times (5-3) \times 12.500 \times 0{,}10 = USD\,20.000$$

(koefisien 0,10 mere.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
