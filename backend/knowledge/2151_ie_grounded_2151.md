# 2151 — Analisis Implementasi FMEA AIAG/VDA dalam Industri Otomotif: Integrasi Manajemen Risiko, Keandalan Mesin CNC, dan Optimalisasi Proses Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global berada di bawah tekanan struktural yang semakin kompleks sepanjang dekade 2020-an, di mana standar kualitas, keselamatan, dan keandalan tidak lagi bersifat opsional melainkan menjadi prasyarat kompetitif yang ditentukan oleh original equipment manufacturers (OEM), regulasi homologasi internasional seperti UNECE WP.29, dan ekspektasi konsumen terhadap *zero-defect delivery*. Dalam konteks inilah Bizeli dan Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155), yang secara sistematis mendokumentasikan proses adopsi metodologi FMEA AIAG/VDA di sebuah perusahaan multinasional manufaktur komponen otomotif. Studi ini lahir dari kebutuhan nyata untuk menggantikan pendekatan FMEA tradisional yang berbasis *Risk Priority Number* (RPN) tunggal dengan pendekatan berbasis *Action Priority* (AP) yang lebih kontekstual dan preskriptif, sebagaimana distandarisasi dalam手册 gabungan AIAG (Automotive Industry Action Group) dan VDA (Verband der Automobilindustrie) edisi 2019.

Latar belakang ekonomi studi ini merujuk pada realitas bahwa biaya kualitas (*cost of poor quality*—COPQ) dalam industri komponen otomotif dapat mencapai 15–40% dari total biaya operasional, dengan proporsi signifikan berasal dari *rework*, *scrap*, garansi, dan *recall* lapangan. Studi Bizeli dan Terazzi (2024) secara eksplisit menyebutkan bahwa implementasi AIAG/VDA FMEA "mempromosikan pencegahan kegagalan, mengurangi biaya terkait *rework* dan *recall*, serta meningkatkan keandalan produk." Temuan kualitatif ini, yang diperoleh melalui wawancara semi-terstruktur dengan tiga profesional berpengalaman, membuktikan bahwa manfaat metodologis FMEA modern bersifat multidimensi: tidak hanya menyentuh dimensi teknis-reliabilitas, tetapi juga integrasi tim lintas-fungsi, optimalisasi proses produksi, dan penciptaan *knowledge management system* yang terdokumentasi. Pada tataran strategis, adopsi AIAG/VDA FMEA menjadi prasyarat bagi kepatuhan terhadap IATF 16949:2016, di mana klausul 8.3.3.3 secara eksplisit mensyaratkan pendekatan terstruktur untuk *design and process FMEA*.

Sementara itu, pada level peralatan produksi, Saputra dan Sukmono (2024) dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) menyoroti dimensi kritis lain dari ekosistem FMEA, yaitu analisis pemeliharaan mesin CNC *milling* menggunakan FMEA. Konteks ini penting karena dalam pabrik komponen otomotif modern, downtime mesin CNC akibat kegagalan *spindle*, *servo drive*, atau sistem hidrolik dapat menimbulkan kerugian produksi hingga puluhan ribu dolar per jam, sehingga integrasi antara FMEA desain-proses dengan FMEA pemeliharaan menjadi kebutuhan operasional yang tidak terpisahkan. Urgensi komprehensif dari integrasi ini kemudian menjadi tulang punggung modul 2151 yang akan menguraikan kerangka analitis, formulasi matematis, dan prosedur implementasi berbasis bukti literatur riil.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Evolusi dari RPN Tradisional ke Action Priority (AP) AIAG/VDA

Pendekatan FMEA klasik yang dipopulerkan sejak 1970-an menggunakan *Risk Priority Number* sebagai metrik agregat tunggal yang menggabungkan tiga parameter independen, sebagaimana dirumuskan:

$$RPN = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan efek kegagalan, skala 1–10), $O$ adalah *Occurrence* (frekuensi penyebab kegagalan terjadi, skala 1–10), dan $D$ adalah *Detection* (kemampuan deteksi sebelum kegagalan menjangkau pelanggan, skala 1–10). Namun Bizeli dan Terazzi (2024) menyoroti keterbatasan fundamental pendekatan RPN ini, yaitu sifatnya yang kompensatorik penuh (*fully compensatory*) sehingga skor $S=10, O=1, D=1$ (RPN=10) dianggap setara dengan $S=1, O=10, D=1$ (RPN=10), padahal risiko yang ditimbulkan sangat berbeda secara engineering.

Untuk mengatasi keterbatasan ini, AIAG/VDA Handbook (2019) memperkenalkan tabel *Action Priority* yang mengembalikan preskriptivitas melalui pemetaan triplet $(S,O,D)$ ke dalam tiga tingkatan risiko:

$$\text{AP}: \{1,\ldots,10\}^3 \rightarrow \{H, M, L\}$$

di mana $H$ (*High*), $M$ (*Medium*), dan $L$ (*Low*) masing-masing memicu respons manajerial yang berbeda sesuai eskalasi risiko. Formulasi komplementer yang sering digunakan dalam riset operasional FMEA adalah perhitungan *Criticality* untuk FMEA proses:

$$\text{Criticality}_i = S_i \times O_i \times \text{Op}$$

dengan $\text{Op}$ adalah *Operating Time* atau volume produksi dalam periode referensi. Pendekatan ini memungkinkan perankingan mode kegagalan berdasarkan dampak produksi tahunan.

### 2.2 Indikator Keandalan dan Pemeliharaan (Saputra & Sukmono, 2024)

Dalam konteks mesin CNC *milling* yang dikaji Saputra dan Sukmono (2024) dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248), FMEA tidak berdiri sendiri melainkan harus diintegrasikan dengan indikator reliabilitas klasik:

$$\text{MTBF} = \frac{T_{\text{up}}}{\eta}$$

$$\text{MTTR} = \frac{T_{\text{down}}}{n}$$

$$\text{Availability} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} = 1 - \frac{\text{MDT}}{\text{MTBCF}}$$

di mana $T_{\text{up}}$ adalah total waktu operasi, $\eta$ jumlah kegagalan, $T_{\text{down}}$ total waktu downtime, $n$ jumlah kejadian perbaikan, MDT *Mean Down Time*, dan MTBCF *Mean Time Between Critical Failures*. Parameter-parameter ini kemudian menjadi input bagi kolom $O$ (Occurrence) dan $D$ (Detection) dalam lembar kerja FMEA, menciptakan loop umpan-balik antara data historis pemeliharaan dan perencanaan risiko masa depan.

### 2.3 Model Biaya Kualitas Ekspektasian

Untuk mengkuantifikasi dampak ekonomi yang disebutkan Bizeli dan Terazzi (2024), model biaya kualitas ekspektasian per mode kegagalan dapat diformulasikan sebagai:

$$C_{\text{exp},i} = P_i \times \left(C_{\text{rework}} + C_{\text{scrap}} + C_{\text{warranty}} + C_{\text{recall}}\right)$$

di mana $P_i$ adalah probabilitas kejadian mode kegagalan $i$ per unit produksi. Total *Cost of Poor Quality* agregat menjadi:

$$\text{COPQ}_{\text{total}} = \sum_{i=1}^{n} C_{\text{exp},i} \cdot N_{\text{prod}}$$

dengan $N_{\text{prod}}$ volume produksi tahunan, yang memberikan justifikasi moneter langsung bagi investasi mitigasi yang direkomendasikan oleh FMEA.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Prosedur Implementasi AIAG/VDA FMEA

Berdasarkan rekomendasi Bizeli dan Terazzi (2024) dan selaras dengan struktur Handbook AIAG/VDA 2019, prosedur implementasi mengikuti **tujuh langkah sistematis** berikut:

```
┌─────────────────────────────────────────────────────────────┐
│  LANGKAH 1: Perencanaan & Definisi Lingkup (Scoping)       │
│  → Identifikasi batas analisis, tim lintas-fungsi, jadwal  │
├─────────────────────────────────────────────────────────────┤
│  LANGKAH 2: Analisis Struktur (Structure Analysis)          │
│  → Block diagram / Boundary diagram / P-Diagram            │
├─────────────────────────────────────────────────────────────┤
│  LANGKAH 3: Analisis Fungsi (Function Analysis)             │
│  → Dekomposisi fungsi: Customer → System → Subsystem      │
├─────────────────────────────────────────────────────────────┤
│  LANGKAH 4: Analisis Kegagalan (Failure Analysis)           │
│  → Failure Modes → Failure Effects → Failure Causes        │
├─────────────────────────────────────────────────────────────┤
│  LANGKAH 5: Analisis Risiko (Risk Analysis)                 │
│  → Assign S, O, D → Tentukan Action Priority (AP)          │
├─────────────────────────────────────────────────────────────┤
│  LANGKAH 6: Optimisasi (Optimization)                      │
│  → Tindakan perbaikan untuk AP=H dan AP=M                  │
├─────────────────────────────────────────────────────────────┤
│  LANGKAH 7: Dokumentasi & Komunikasi (Documentation)         │
│  → FMEA Report → Customer notification if AP=H            │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Integrasi dengan Pemeliharaan Mesin CNC (Saputra & Sukmono, 2024)

Untuk konteks peralatan produksi sebagaimana dikaji Saputra dan Sukmono (2024), prosedur operasional standar (SOP) pemeliharaan berbasis FMEA mengikuti alur:

1. **Pengumpulan data kegagalan historis** selama 6–12 bulan terakhir dari *Computerized Maintenance Management System* (CMMS).
2. **Klasifikasi komponen kritis** mesin CNC: *spindle bearing*, *ball screw*, *servo motor*, *coolant system*, *tool changer*.
3. **Penilaian Severity berdasarkan dampak pada** kualitas produk, keselamatan operator, dan kerugian produksi.
4. **Penilaian Occurrence berdasarkan** frekuensi historis dan nilai MTBF komponen.
5. **Penilaian Detection berdasarkan** kapabilitas sensor *condition monitoring* (vibrasi, termografi, oil analysis).
6. **Perhitungan Action Priority dan formulasi** intervensi pemeliharaan prediktif/preventif.

### 3.3 Arsitektur Tim Lintas-Fungsi

Bizeli dan Terazzi (2024) menekankan bahwa tantangan utama implementasi adalah resistensi organisasional. Arsitektur tim yang direkomendasikan mencakup *core team* 5–9 orang dengan representasi dari:

- *Design Engineering* (kepemilikan teknis)
- *Manufacturing/Production Engineering*
- *Quality Assurance*
- *Supplier Quality* (untuk komponen incoming)
- *Service/Aftermarket* (untuk kegagalan lapangan)
- *Project Management* (fasilitasi dan *gate review*)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Komponen *Brake Caliper Bracket* Otomotif

Untuk mendemonstrasikan aplikasi kuantitatif, berikut simulasi FMEA pada komponen *brake caliper bracket* dari besi ductile (FCD-450), diproduksi melalui proses CNC *milling* 5-axis dengan volume produksi $N_{\text{prod}} = 120.000$ unit/tahun. Tiga mode kegagalan kritis yang bersesuaian dengan konteks riset Saputra dan Sukmono (2024) tentang kegagalan mesin CNC dianalisis:

**Tabel 1: Input Parameter FMEA**

| Mode Kegagalan | S | O | D | AP (AIAG/VDA) |
|----------------|---|---|---|----------------|
| M1: *Porosity pada material* menyebabkan retak | 8 | 4 | 6 | **M (Medium)** |
| M2: Dimensi *out of tolerance* akibat *tool wear* | 7 | 6 | 4 | **H (High)** |
| M3: *Surface roughness* melebihi spesifikasi akibat getaran *spindle* | 6 | 5 | 5 | **M (Medium)** |

### 4.2 Perhitungan RPN Klasik untuk Validasi Silang

$$RPN_{M1} = 8 \times 4 \times 6 = 192$$

$$RPN_{M2} = 7 \times 6 \times 4 = 168$$

$$RPN_{M3} = 6 \times 5 \times 5 = 150$$

Perhatikan bahwa dengan logika RPN klasik, M1 memiliki skor tertinggi dan akan menjadi prioritas. Namun, tabel AP AIAG/VDA menunjukkan M2 sebagai