# 1735 — Analisis FMEA AIAG/VDA dalam Industri Manufaktur Otomotif & Pemeliharaan Mesin CNC: Pendekatan Kuantitatif Manajemen Risiko dan Keandalan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan struktural yang semakin kompleks sepanjang dekade terakhir. Fluktuasi biaya bahan baku, transisi elektrifikasi powertrain, regulasi emisi EURO 7, serta tuntutan zero-defect dari OEM (Original Equipment Manufacturer) telah迫使 perusahaan tier-1 dan tier-2 untuk mengadopsi metodologi manajemen risiko yang lebih rigor daripada pendekatan inspeksi-klasik berbasis quality control. Dalam konteks inilah Failure Mode and Effects Analysis (FMEA) AIAG/VDA — yang merupakan hasil harmonisasi antara standar Automotive Industry Action Group (AIAG) Amerika dan Verband der Automobilindustrie (VDA) Jerman pada tahun 2019 — menjadi kerangka kerja dominan yang diakui secara internasional (Bizeli & Terazzi, 2024).

Penelitian Bizeli dan Terazzi (2024) yang dipublikasikan di *Revista Interface Tecnológica* menyoroti bahwa implementasi FMEA AIAG/VDA pada sebuah perusahaan multinasional produsen komponen otomotif Brasil menunjukkan manfaat ganda: di satu sisi terjadi pencegahan dini terhadap mode kegagalan yang berpotensi menimbulkan biaya *rework* dan *recall* yang signifikan, dan di sisi lain terjadi integrasi lintas-fungsi yang sebelumnya terfragmentasi. Temuan ini sejalan dengan studi Saputra dan Sukmono (2024) di *Peer-Reviewed Journal* yang menerapkan FMEA klasik pada pemeliharaan mesin *CNC milling*, menunjukkan bahwa kerangka FMEA bersifat *transferable* lintas sub-sektor manufaktur.

Urgensi ekonomi dari penerapan FMEA ini tidak dapat dipandang sebelah mata. Data historis industri menunjukkan bahwa biaya perbaikan satu kejadian *recall* kendaraan dapat melebihi USD 50 juta, belum termasuk kerusakan reputasi brand dan potensi litigasi (terkait dengan standar ISO 26262 untuk *functional safety*). Selain itu, rata-rata downtime mesin CNC milling pada industri kecil-menengah mencapai 8–12% dari total *available production time*, yang secara langsung mengurangi *Overall Equipment Effectiveness* (OEE). Implementasi FMEA yang terstruktur memungkinkan identifikasi proaktif terhadap mode-mode kegagalan kritis sebelum berubah menjadi *downtime* atau *defect* yang tereskalasi ke pelanggan. Konteks inilah yang melatarbelakangi kebutuhan akan studi kuantitatif komprehensif terhadap metodologi FMEA — baik versi tradisional (RPN-based) maupun versi AIAG/VDA (Action Priority-based).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 FMEA Tradisional: Risk Priority Number (RPN)

Formulasi klasik FMEA menggunakan tiga parameter risiko yang dievaluasi pada skala ordinal 1–10, sebagaimana diformalkan oleh Stamatis (2003) dan diadopsi oleh AIAG edisi 2008:

$$RPN = S \times O \times D$$

di mana:
- $S$ = *Severity* (Tingkat Keparahan) — dampak mode kegagalan terhadap pelanggan akhir atau proses berikutnya
- $O$ = *Occurrence* (Tingkat Kejadian) — frekuensi penyebab kegagalan muncul
- $D$ = *Detection* (Tingkat Deteksi) — kemampuan kontrol現行 untuk mendeteksi kegagalan sebelum lolos ke pelanggan

Nilai $RPN$ berada dalam rentang teoretis $[1, 1000]$, dengan ambang batas umum $RPN \geq 100$ atau $S \geq 9$ sebagai *criticality threshold* yang memerlukan tindakan mitigasi (Carlson, 2012). Pendekatan ini memiliki kelemahan fundamental berupa *loss of information* akibat operasi perkalian tiga bilangan berskala ordinal, yang melatarbelakangi revisi AIAG/VDA 2019.

### 2.2 FMEA AIAG/VDA 2019: Action Priority (AP)

Standar harmonisasi AIAG/VDA memperkenalkan pendekatan berbasis *Action Priority* (AP) yang menggantikan RPN dengan tiga kategori risiko diskret:

$$AP = f(S, O, D)$$

di mana fungsi $f$ didefinisikan melalui *risk matrix logic* dengan empat tingkatan:

$$\text{AP} \in \{H, M, L, R\}$$

dengan $H$ = High (Tindakan wajib), $M$ = Medium (Tindakan direkomendasikan), $L$ = Low (Tindakan diskresioner), $R$ = Recommended (Tindakan sesuai kesempatan). Berbeda dengan RPN yang kontinyu, AP bersifat kategorial dengan bobot asimetris — beberapa kombinasi nilai $S$, $O$, $D$ secara otomatis diprioritaskan sebagai *High* meskipun RPN-nya moderat (misalnya $S = 9$ dengan $O = 2$ dan $D = 4$).

### 2.3 Formulasi Deteksi untuk Mesin CNC

Saputra dan Sukmono (2024) menggunakan formulasi ketersediaan mesin (*machine availability*) sebagai indikator dampak ekonomi:

$$A_v = \frac{MTBF}{MTBF + MTTR} \times 100\%$$

di mana $MTBF$ = *Mean Time Between Failures* dan $MTTR$ = *Mean Time To Repair*. Hubungan antara *failure rate* $\lambda$ dan $MTBF$ dinyatakan sebagai:

$$MTBF = \frac{1}{\lambda}$$

Untuk mode kegagalan tertentu pada komponen mesin CNC (misalnya sistem hidrolik, *spindle bearing*, atau *ball screw*), kontribusi terhadap *downtime* total dapat dikuantifikasi melalui:

$$D_{total} = \sum_{i=1}^{n} (RPN_i \cdot C_i \cdot t_{repair,i})$$

di mana $C_i$ adalah konsekuensi biaya per kejadian dan $t_{repair,i}$ adalah waktu perbaikanrata-rata untuk mode kegagalan ke-$i$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi FMEA AIAG/VDA mengikuti *7-step approach* yang merupakan kerangka terstruktur dari standar terbaru. Berikut adalah alur implementasi sistematis yang dirangkum dari Bizeli & Terazzi (2024) dan di-*cross-validate* dengan praktik pada pemeliharaan mesin CNC oleh Saputra dan Sukmono (2024):

**Langkah 1 — Planning & Preparation:** Penetapan *scope* analisis, *boundary diagram*, dan identifikasi *cross-functional team* yang mencakup rekayasa desain, manufaktur, kualitas, *supply chain*, dan *field service*. Bizeli & Terazzi (2024) menekankan bahwa tim ideal berukuran 5–8 anggota dengan pengalaman rata-rata ≥ 5 tahun.

**Langkah 2 — Structure Analysis:** Dekomposisi sistem menggunakan *Block Diagram*, *Interface Matrix*, dan — untuk produk yang lebih kompleks — *Parameter Diagram* (P-diagram) yang memodelkan empat elemen: *function*, *undesired output*, *noise factors*, dan *error states*.

**Langkah 3 — Function Analysis:** Setiap elemen struktur diterjemahkan ke dalam *function* dan *requirement* dengan menggunakan *noun-verb* notation, misalnya "Pressure — Maintain at 5 ± 0.2 bar".

**Langkah 4 — Failure Analysis:** Identifikasi *failure mode* ($\text{FM}_i$), *failure effect* ($\text{FE}_i$), dan *failure cause* ($\text{FC}_i$) untuk setiap fungsi. Pendekatan ini mencegah *common-mode error* yang lazim terjadi pada FMEA tradisional.

**Langkah 5 — Risk Analysis:** Penilaian $S$, $O$, $D$ menggunakan tabel referensi AIAG/VDA 2019, yang lebih granular (skala D mencapai 10 level dengan sub-level A–C) dibanding standar sebelumnya.

**Langkah 6 — Optimization:** Penentuan *Action Priority* dan penyusunan *Action Plan* untuk item berisiko tinggi, termasuk *responsible person*, *due date*, dan *effectivity verification*.

**Langkah 7 — Results Documentation:** Pembuatan *FMEA Worksheet* dan *FMEA Knowledge Management* yang dapat di-*reuse* pada program atau platform berikutnya.

Standar prosedur operasional ini diselaraskan dengan ISO 9001:2015 (klausul 8.3.3 dan 8.5.1), IATF 16949:2016, dan ISO 26262 untuk konteks *functional safety* pada sistem elektronik otomotif.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Komponen *Brake Caliper* pada Manufaktur Otomotif

Berdasarkan tipikal proses yang dideskripsikan oleh Bizeli & Terazzi (2024), kita lakukan simulasi kuantitatif pada komponen *brake caliper* yang diproduksi oleh perusahaan tier-1 di Brasil.

**Tabel 1 — Penilaian Risiko Mode Kegagalan**

| No. | Failure Mode | S | O | D | RPN (Tradisional) | AP (AIAG/VDA) |
|-----|---|---|---|---|---|---|
| FM-1 | *Cavitas* poros piston | 8 | 5 | 6 | 240 | **H (High)** |
| FM-2 | Porositas mikro pada bodi | 9 | 3 | 7 | 189 | **H (High)** |
| FM-3 | Retak pada rib *reinforcement* | 10 | 2 | 8 | 160 | **H (High)** |
| FM-4 | *Surface roughness* melebihi 1.6 μm | 6 | 4 | 4 | 96 | **M (Medium)** |
| FM-5 | Bentuk geometris di luar toleransi | 7 | 3 | 5 | 105 | **M (Medium)** |

**Kalkulasi RPN Rata-rata dan *Criticality Index*:**

$$\overline{RPN} = \frac{1}{n}\sum_{i=1}^{n} RPN_i = \frac{240+189+160+96+105}{5} = \frac{790}{5} = 158$$

Persentase mode kegagalan dalam kategori *High* (AP = H):

$$P_H = \frac{N_H}{N_{total}} \times 100\% = \frac{3}{5} \times 100\% = 60\%$$

### 4.2 Interpretasi Manajerial

Hasil ini mengindikasikan bahwa 60% mode kegagalan berada pada kategori *High Priority* dan memerlukan tindakan segera. Perbandingan antara pendekatan RPN tradisional dan AP AIAG/VDA menunjukkan divergensi menarik: **FM-3** memiliki $RPN = 160$ (lebih rendah dari **FM-1** dengan 240), namun karena $S = 10$ (dampak safety tertinggi), **FM-3** diklasifikasikan sebagai *High* pada AIAG/VDA — sedangkan RPN tradisionalnya hanya "sedang". Ini menegaskan pernyataan Bizeli & Terazzi (2024) bahwa AIAG/VDA lebih sensitif terhadap risiko *safety-critical* yang sesuai dengan filosofi IATF 16949:2016 (klausul 8.3.3.5).

### 4.3 Studi Kasus Pendukung: Pemeliharaan Mesin CNC *Vertical Milling Center*

Mengacu pada Saputra dan Sukmono (2024), berikut simulasi pada mesin *CNC Mori Seiki NL2500* dengan $MTBF = 320$ jam dan $MTTR = 18$ jam:

$$A_v = \frac{320}{320+18} \times 100\% = \frac{320}{338} \times 100\% \approx 94.67\%$$

Deteksi dini melalui FMEA memungkinkan peningkatan $MTBF$ menjadi 450 jam dengan menurunkan frekuensi kegagalan *spindle bearing* dari $\lambda_0 = 0.0031$ jam$^{-1}$ menjadi $\lambda_1 = 0.0022$ jam$^{-1}$:

$$\Delta MTBF = \frac{1}{0.0022} - \frac{1}{0.0031} = 454.5 - 322.6 \approx 131.9 \text{ jam}$$

Kontribusi terhadap *Overall Equipment Effectiveness*:

$$OEE = A_v \times P_e \times Q_r$$

dengan asumsi $P_e = 90\%$ dan $Q_r = 99\%$, sebelum FMEA: $OEE_{before} = 94.67\% \times 90\% \times 99\% \approx 84.3\%$. Setelah FMEA, $A_v$ meningkat menjadi $\frac{450}{450+18} = 96.15\%$:

$$OEE_{after} = 96.15\% \times 90\% \times 99\% \approx 85.6\%$$

Peningkatan $OEE$ sebesar $\Delta OEE = 1.3\%$ pada mesin dengan utilisasi 4.000 jam/tahun dan margin kontribusi USD 45/jam menghasilkan *annual economic benefit*:

$$\text{Benefit} = 4000 \times 0.013 \times 45 \approx \text{USD } 2.340$$

— angka ini belum termasuk penghematan dari terhindarnya *catastrophic failure* pada *spindle* yang biayanya mencapai USD 15.000–25.000 per kejadian.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Limitasi Metodologis

Meskipun FMEA AIAG/VDA menunjukkan keunggulan substansial dibanding pendekatan tradisional, terdapat beberapa limitasi yang harus diakui. Pertama, validitas hasil sangat bergantung pada kompetensi dan keragaman pengalaman tim FMEA — sebuah *subjectivity issue* yang tidak sepenuhnya dieliminasi oleh struktur tabel penilaian. Bizeli & Terazzi (2024) sendiri menekankan bahwa salah satu tantangan utama implementasi di lapangan adalah "kebutuhan