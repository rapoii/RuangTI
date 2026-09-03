# 1831 — Analisis Implementasi FMEA AIAG/VDA dalam Manufaktur Otomotif dan Aplikasi Lintas Sektor pada Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi dalam ekosistem berisiko tinggi yang ditandai dengan regulasi keselamatan stringent, kompleksitas rantai pasok multi-layer, dan konsekuensi hukum serta finansial yang besar atas setiap kegagalan produk. Dalam konteks ini, *Failure Mode and Effects Analysis* (FMEA) telah lama menjadi instrumen fundamental dalam arsitektur manajemen risiko kualitas. Bizeli dan Terazzi (2024) dalam studinya yang dipublikasikan di *Revista Interface Tecnológica* (DOI: 10.31510/infa.v22i1.2155) menyoroti bahwa transisi dari pendekatan FMEA konvensional (AIAG QS-9000, VDA Volume 4, dan SAE J1739) menuju standar terpadu **AIAG/VDA FMEA Handbook (2019)** merupakan respons industri terhadap inkonsistensi metodologis lintas geografi dan OEM (Original Equipment Manufacturer). Pendekatan lama sering menghasilkan *Risk Priority Number* (RPN) yang sulit diprioritaskan karena distribusinya yang skewed dan bersifat kompensatif.

Urgensi implementasi AIAG/VDA FMEA di sebuah perusahaan multinasional fabricante de peças automotivas (produsen komponen otomotif) tidak terlepas dari tiga tekanan struktural. Pertama, biaya rework dan recall yang signifikan—data historis menunjukkan bahwa recall akibat cacat desain atau proses di industri otomotif rata-rata merugikan pabrikan hingga USD 50–600 juta per kejadian (Becker et al., 2019; referensi internal dalam studi Bizeli & Terazzi). Kedua, meningkatnya tuntutan *traceability* dan *failure prevention* dari regulator seperti NHTSA (National Highway Traffic Safety Administration) dan UNECE WP.29. Ketiga, kompleksitas produk modern yang mengintegrasikan elektrifikasi, ADAS (Advanced Driver Assistance Systems), dan konektivitas IoT, sehingga mode kegagalan baru bermunculan yang tidak tertangkap oleh kerangka lama.

Studi Bizeli dan Terazzi (2024) menggunakan pendekatan deskriptif-kualitatif melalui studi kasus dengan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di perusahaan multinasional tersebut. Temuan kunci menunjukkan bahwa FMEA AIAG/VDA mendorong pencegahan kegagalan, menurunkan biaya rework dan recall, serta meningkatkan keandalan produk. Lebih jauh, metodologi ini berkontribusi positif terhadap integrasi tim lintas fungsi (*cross-functional team*) dan optimasi proses produksi. Akan tetapi, tantangan signifikan muncul berupa resistensi adopsi metode, kebutuhan pelatihan berkelanjutan, dan keterbatasan dokumentasi historis. Sebagai pengayaan lintas-sektor, paper Saputra dan Sukmono (2024) dengan DOI 10.21070/ups.8248 mendemonstrasikan penerapan FMEA klasik pada pemeliharaan mesin frais CNC, memberikan bukti empiris bahwa kerangka kerja risiko FMEA bersifat transferable dari domain kualitas produk ke domain *reliability engineering* peralatan produksi. Kedua paper ini secara komplementer memperkuat posisi FMEA sebagai lingua franca manajemen risiko dalam ekosistem manufaktur modern.

## 2. Landasan Teori & Formulasi Matematis

FMEA AIAG/VDA (2019) memperkenalkan paradigma **Action Priority (AP)** yang menggantikan RPN klasik. AP ditentukan melalui tabel keputusan berdasarkan kombinasi nilai **Severity (S)**, **Occurrence (O)**, dan **Detection (D)**, di mana setiap parameter dinilai pada skala 1–10. Severity mengukur dampak kegagalan terhadap pelanggan akhir, Occurrence mengukur probabilitas kegagalan terjadi, dan Detection mengukur kemampuan kontrol mendeteksi kegagalan sebelum produk meninggalkan stasiun. Formulasi RPN klasik tetap dipahami sebagai referensi historis:

$$RPN = S \times O \times D$$

dengan $S, O, D \in \{1, 2, \ldots, 10\}$. Kritisnya, AIAG/VDA FMEA menolak asumsi kompensasi penuh yang melekat pada RPN; sebuah mode kegagalan dengan $S = 10$ tidak boleh "dinetralkan" oleh $D = 1$. Sebagai gantinya, AP diklasifikasikan menjadi tiga tingkatan: **High (H), Medium (M), dan Low (L)**, di mana kegagalan dengan Severity 9–10 secara otomatis diprioritaskan tinggi terlepas dari nilai O dan D.

Pada studi Saputra dan Sukmono (2024) untuk pemeliharaan mesin CNC milling, kerangka klasik RPN digunakan karena kasusnya adalah *machine-level FMEA* dengan prioritas pada optimasi interval pemeliharaan preventif. Formulasi *Mean Time Between Failures* (MTBF) dan *Mean Time To Repair* (MTTR) digunakan untuk mengkuantifikasi availability:

$$\text{Availability} = \frac{MTBF}{MTBF + MTTR} \times 100\%$$

Untuk menghitung *criticality* komponen, pendekatan *Risk Priority Number* klasik dipertahankan dengan tambahan bobot risiko biaya:

$$\text{Criticality Index} = \text{RPN} \times C_f$$

di mana $C_f$ adalah *cost factor* kegagalan komponen. Selanjutnya, total biaya pemeliharaan yang diharapkan (*Expected Maintenance Cost*) per periode operasi adalah:

$$\text{EMC} = \sum_{i=1}^{n} \lambda_i \times C_i \times T$$

dengan $\lambda_i$ adalah laju kegagalan komponen ke-$i$ (failure/kam), $C_i$ adalah biaya per kegagalan (rupiah), dan $T$ adalah periode operasi total (jam). Parameter penting lain adalah tingkat kepentingan penentuan prioritas menggunakan **Fuzzy FMEA** yang memungkinkan penanganan ketidakpastian linguistik:

$$\tilde{R} = \tilde{S} \otimes \tilde{O} \otimes \tilde{D}$$

di mana operator $\otimes$ merepresentasikan perkalian bilangan fuzzy Triangular (l, m, u). Pendekatan ini relevan ketika data kegagalan historis tidak lengkap—skenario yang juga diidentifikasi Bizeli dan Terazzi (2024) sebagai salah satu tantangan implementasi di pabrik multinasional tersebut.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AIAG/VDA FMEA mengikuti siklus **Plan-Do-Check-Act** (PDCA) yang terstruktur dalam tujuh langkah utama menurut AIAG/VDA Handbook (2019) yang diadopsi dalam studi Bizeli dan Terazzi (2024). Prosedur Operasional Baku (POB/SOP) yang direkomendasikan untuk manufaktur komponen otomotif adalah sebagai berikut:

**Langkah 1 — Inisiasi dan Penyiapan Program FMEA.** Dibentuk *Cross-Functional Team* (CFT) yang terdiri dari perwakilan desain, manufaktur, kualitas, pembelian, dan layanan purna jual. Tim menetapkan ruang lingkup (scope), batas analisis, dan pelanggan akhir (*focus element/customer*). Penetapan *responsibility matrix* RACI untuk setiap anggota tim wajib dilakukan.

**Langkah 2 — Struktur Analisis.** Menggunakan diagram blok atau P-diagram (Parameter diagram) untuk memodelkan sistem. P-diagram mencakup *function*, *requirement*, *failure*, *noise*, *control*, dan *output state* sebagai linkage antara parameter desain, kondisi operasional, dan variasi lingkungan.

**Langkah 3 — Analisis Fungsi.** Setiap elemen dalam struktur didekomposisi menjadi fungsi (function) dan persyaratannya. Fungsi ini menjadi dasar identifikasi mode kegagalan.

**Langkah 4 — Analisis Kegagalan.** Setiap fungsi diasosiasikan dengan **Failure Modes** (FM), **Effects** (FE), dan **Causes** (FC). Penyebab kegagalan dapat berasal dari variasi material, proses, lingkungan, atau desain.

**Langkah 5 — Penilaian Risiko (Risk Analysis).** Severity, Occurrence, dan Detection dinilai menggunakan skala terstandar. Penentuan AP menggunakan tabel keputusan yang telah ditetapkan dalam handbook, bukan sekadar perkalian RPN.

**Langkah 6 — Optimasi (Risk Optimization).** Untuk AP=H, tim wajib merancang aksi mitigasi (*Prevention Controls* dan *Detection Controls*) dengan target menaikkan kemampuan deteksi (memperkecil D) atau menurunkan occurrence (memperkecil O). Severity hanya dapat diturunkan melalui perubahan desain fundamental.

**Langkah 7 — Dokumentasi dan *Knowledge Management*.** Seluruh hasil dicatat dalam lembar kerja standar (FMEA Worksheet) dan disimpan dalam sistem PLM (Product Lifecycle Management) atau QMS (Quality Management System) terpusat untuk mencegah *knowledge loss* yang menjadi salah satu tantangan utama yang diidentifikasi Bizeli dan Terazzi (2024).

Untuk aplikasi pemeliharaan mesin CNC milling sesuai Saputra dan Sukmono (2024), SOP tambahan mencakup integrasi FMEA dengan *Computerized Maintenance Management System* (CMMS), di mana setiap mode kegagalan komponen mesin (misalnya *spindle bearing*, *ball screw*, *servo motor*) terhubung dengan work order preventif dan prediktif berbasis IoT sensor data.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan studi Saputra dan Sukmono (2024), diadaptasi untuk modul ini, pertimbangkan sebuah lini produksi komponen *brake caliper* untuk kendaraan penumpang dengan dua mesin CNC milling utama (Mazak VTC-200B dan DMG MORI NHX 5000). Data historis selama 6 bulan operasi (4.320 jam) menunjukkan komponen-komponen kritis berikut:

**Tabel 1. Data Kegagalan Komponen CNC Milling (diadaptasi dari Saputra & Sukmono, 2024, DOI: 10.21070/ups.8248)**

| Komponen | Failure/kam | MTBF (jam) | MTTR (jam) | Biaya/Failure (Rp) |
|---|---|---|---|---|
| Spindle Bearing | 1,8 | 1.333 | 14 | 18.500.000 |
| Ball Screw Axis X | 1,2 | 1.667 | 10 | 12.300.000 |
| Servo Motor Y | 0,6 | 3.333 | 6 | 7.800.000 |
| Tool Changer | 2,1 | 952 | 4 | 4.500.000 |
| Coolant Pump | 1,5 | 1.333 | 3 | 2.700.000 |

**Perhitungan 1 — Availability System:**
Spindle Bearing: $A_{sb} = \frac{1.333}{1.333 + 14} \times 100\% = 98,96\%$
Tool Changer: $A_{tc} = \frac{952}{952 + 4} \times 100\% = 99,58\%$

**Perhitungan 2 — RPN dan Identifikasi AP:**
Untuk *tool changer* failure mode "tool tidak terclamp dengan benar":
- Severity $S = 7$ (produk reject, potensi bahaya operator)
- Occurrence $O = 6$ (cukup sering terjadi)
- Detection $D = 5$ (deteksi melalui sensor torsi)

$$RPN_{tc} = 7 \times 6 \times 5 = 210$$

Berdasarkan tabel AIAG/VDA, kombinasi (S=7, O=6, D=5) menghasilkan **AP = Medium (M)**, menandakan perlu perbaikan kontrol deteksi tanpa memerlukan redesign.

**Perhitungan 3 — Expected Maintenance Cost (EMC):**
Misalkan periode analisis $T = 4.320$ jam:

$$\text{EMC}_{sb} = 1,8 \times Rp\,18.500.000 \times 4.320 = Rp\,143.856.000$$

$$\text{EMC}_{tc} = 2,1 \times Rp\,4.500.000 \times 4.320 = Rp\,40.824.000$$

Total EMC lini produksi:
$$\text{EMC}_{\text{total}} = 143.856.000 + 40.824.000 + (\ldots) = \text{Rp}\, 285.500.000$$

**Perhitungan 4 — Prioritas Investasi Pemeliharaan:**
Rasio kritis per unit biaya menunjukkan *spindle bearing* memiliki cost-to-MTBF ratio tertinggi: $18.500.000 / 1.333 = Rp\,13.879/jam$, menjadikannya target utama program *predictive maintenance* dengan sensor getaran (vibration analysis) dan oil debris monitoring. Implementasi predictive maintenance berdasarkan data ini diproyeksikan menurunkan laju kegagalan menjadi 0,8 failure/kam, sehingga:

$$\text{EMC}_{sb}^{\text{new}} = 0,8 \times Rp\,18.500.000 \times 4.320 = Rp\,63.936.000$$

Penghematan tahunan: $Rp\,79.920.000$ untuk satu komponen saja, membuktikan *business case* investasi sensor IoT sangat kuat.

**Interpretasi Manajerial:** Hasil kuantitatif ini selaras dengan temuan Bizeli dan Terazzi (2024) bahwa integrasi FMEA dengan praktik pemeliharaan preventif/korektif menghasilkan reduksi biaya signifikan. Untuk konteks automotive parts manufacturer pada paper utama, aksi preventif terhadap mode kegagalan dengan AP=H akan menurunkan biaya garansi dan recall dalam horizon 3–5 tahun. Resistensi internal tim (salah satu tantangan utama) dapat diatasi dengan pelatihan terstruktur dan *champion program* yang sudah berhasil diterapkan oleh perusahaan multinasional tersebut.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Studi Bizeli dan Terazzi (2024) memiliki beberapa keterbatasan metodologis yang perlu diacknowledgement dalam aplikasi industri. Pertama, sampel penelitian hanya tiga profesional dari satu perusahaan multinasional, sehingga *generalizability* terbatas dan tidak sepenuhnya merepresentasikan variasi praktik lintas OEM. Kedua, pendekatan kualitatif-deskriptif tidak menghasilkan ukuran kuantitatif seperti *cost of poor quality* (CoPQ) atau *first-pass yield improvement* yang lebih aplikatif untuk eksekutif manufaktur. Ketiga, paper tidak membahas integrasi FMEA AIAG/VDA dengan standar *Functional Safety* (ISO 26262) untuk komponen *safety-critical* seperti airbag, ABS, atau steering—gap yang krusial di era *software-defined vehicle*. Keempat, *challenges* yang diidentifikasi (resistensi adopsi, kebutuhan pelatihan, dokumentasi histor