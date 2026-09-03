# 2455 — Analisis Dampak Implementasi FMEA AIAG/VDA terhadap Keandalan Produk dan Mesin CNC di Industri Otomotif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global beroperasi di bawah tekanan regulasi yang semakin ketat, terutama terkait keselamatan produk, emisi, dan keandalan jangka panjang. Dalam konteks ini,Failure Mode and Effects Analysis (FMEA) telah menjadi tulang punggung program kualitas sejak diperkenalkan oleh Ford Motor Company pada dekade 1970-an, dan secara resmi distandarisasi melalui AIAG (Automotive Industry Action Group) dan VDA (Verband der Automobilindustrie) Jerman. Bizeli & Terazzi (2024) dalam studi kasusnya di *Revista Interface Tecnológica* (DOI: 10.31510/infa.v22i1.2155) menyoroti bahwa手册 AIAG/VDA FMEA yang dipublikasikan pada tahun 2019 menggantikan pendekatan tradisional berbasis Risk Priority Number (RPN) dengan sistem Action Priority (AP) yang lebih kontekstual dan terstruktur.

Urgensi implementasi metodologi ini terletak pada tiga dimensi strategis. Pertama, dimensi ekonomi: industri suku cadang otomotif menghadapi tekanan margin yang sangat tipis, di mana biaya garansi, recall, dan rework dapat mencapai 4–10% dari total pendapatan perusahaan (Bizeli & Terazzi, 2024). Kedua, dimensi regulasi: standar IATF 16949:2016 secara eksplisit mensyaratkan penerapan *risk-based thinking* dan *preventive quality assurance* yang merupakan esensi FMEA. Ketiga, dimensi teknologi: dengan meningkatnya kompleksitas sistem mekatronika pada kendaraan modern (sistem ADAS, powertrain elektrifikasi, sensor IoT), pendekatan analisis kegagalan harus mampu menangkap interdependensi multi-disiplin yang tidak dapat ditangani oleh FMEA konvensional.

Studi Bizeli & Terazzi (2024) yang bersifat deskriptif-kualitatif ini dilakukan melalui wawancara semi-terstruktur dengan tiga profesional berpengalaman di sebuah *multinational automotive parts manufacturer*. Temuan utama menunjukkan empat manfaat terukur: (1) pencegahan kegagalan proaktif, (2) reduksi biaya rework dan recall, (3) peningkatan reliabilitas produk, dan (4) integrasi lintas-fungsi tim. Sebaliknya, tiga tantangan signifikan teridentifikasi: resistensi adopsi metodologi baru, kebutuhan pelatihan berkelanjutan, dan integrasi data lintas-sistem informasi. Sebagai komplemen, Saputra & Sukmono (2024) dalam *Peer-Reviewed Journal* (DOI: 10.21070/ups.8248) mendemonstrasikan aplikasi FMEA pada pemeliharaan mesin CNC milling, membuktikan bahwa kerangka kerja ini extensible dari ranah desain produk ke ranah pemeliharaan aset produksi—sebuah generalisasi yang sangat relevan untuk *total productive maintenance* (TPM) modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Transisi dari RPN ke Action Priority (AP)

Pendekatan FMEA tradisional menggunakan Risk Priority Number sebagai agregat tunggal risiko:

$$RPN_{tradisional} = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan, skala 1–10), $O$ adalah *Occurrence* (frekuensi kejadian, skala 1–10), dan $D$ adalah *Detection* (kemampuan deteksi, skala 1–10). Namun, Bizeli & Terazzi (2024) menekankan bahwa手册 AIAG/VDA 2019 meninggalkan formula ini karena memiliki kelemahan fundamental: $RPN$ tidak mampu membedakan antara mode kegagalan dengan skor $S=9, O=2, D=5$ (RPN=90) dan $S=5, O=9, D=2$ (RPN=90) yang secara fisikal memiliki profil risiko berbeda.

Sebagai gantinya, AIAG/VDA memperkenalkan tabel lookup deterministik yang memetakan triplet $(S, O, D)$ menjadi tiga tingkatan Action Priority:

$$AP = f(S, O, D) \in \{H, M, L\}$$

di mana $H$ (*High*), $M$ (*Medium*), dan $L$ (*Low*) menunjukkan urgensi tindakan korektif. Pemetaan ini mengikuti matriks keputusan yang merepresentasikan 1.000 kombinasi nilai input ke dalam tingkatan prioritas yang actionable.

### 2.2 Kuantifikasi Reliabilitas dan Laju Kegagalan

Saputra & Sukmono (2024) dalam studi CNC milling-nya menggunakan model reliabilitas klasik. *Mean Time To Failure* (MTTF) untuk komponen atau subsistem didefinisikan sebagai:

$$MTTF = \int_{0}^{\infty} t \cdot f(t) \, dt = \int_{0}^{\infty} R(t) \, dt$$

di mana $f(t)$ adalah fungsi densitas probabilitas kegagalan dan $R(t)$ adalah fungsi reliabilitas. Untuk distribusi eksponensial yang umum digunakan pada fase *useful life* peralatan:

$$R(t) = e^{-\lambda t}, \quad MTTF = \frac{1}{\lambda}, \quad \lambda = \frac{1}{MTBF}$$

di mana $\lambda$ adalah *failure rate* (laju kegagalan) dan MTBF (*Mean Time Between Failures*) merupakan metrik untuk sistem yang dapat diperbaiki (*repairable systems*).

Untuk analisis wear-out pada mesin CNC, distribusi Weibull lebih representatif:

$$R(t) = e^{-(t/\eta)^{\beta}}, \quad \lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah *shape parameter* (slope karakteristik kerusakan) dan $\eta$ adalah *scale parameter* (umur karakteristik). Untuk $\beta > 1$, sistem memasuki fase penuaan; untuk $\beta = 1$, sistem mengikuti pola acak konstan (eksponensial).

### 2.3 Availability dan OEE

Ketersediaan (*availability*) sistem CNC milling yang menjadi fokus Saputra & Sukmono (2024) didefinisikan sebagai:

$$A = \frac{MTBF}{MTBF + MTTR} = \frac{Uptime}{Uptime + Downtime}$$

yang menjadi salah satu pilar *Overall Equipment Effectiveness* (OEE):

$$OEE = A \times P \times Q$$

di mana $P$ adalah *Performance Rate* (kecepatan vs standar) dan $Q$ adalah *Quality Rate* (proporsi output sesuai standar). Peningkatan $A$ dari implementasi FMEA-based maintenance secara langsung meningkatkan $OEE$.

### 2.4 Cost-Benefit Ratio Implementasi FMEA

Untuk mengkuantifikasi dampak ekonomi yang ditemukan Bizeli & Terazzi (2024), kita dapat menggunakan *Return on Prevention Investment* (ROPI):

$$ROPI = \frac{\sum_{i=1}^{n} (C_{fail,i} \times P_{fail,i}^{before}) - \sum_{i=1}^{n} (C_{fail,i} \times P_{fail,i}^{after})}{C_{FMEA,implementasi}}$$

di mana $C_{fail,i}$ adalah biaya kegagalan mode ke-$i$, $P_{fail,i}^{before}$ dan $P_{fail,i}^{after}$ adalah probabilitas kegagalan sebelum dan sesudah intervensi FMEA.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Kerangka Implementasi AIAG/VDA FMEA

Berdasarkan manual 2019 yang dirujuk Bizeli & Terazzi (2024), prosedur implementasi mengikuti 7 langkah terstruktur:

**Langkah 1 — Planning and Preparation (Perencanaan):**
Mendefinisikan scope, analisis 5T (*intended use, timing, team, task, tools*), dan menyusun project plan dengan milestone yang terukur.

**Langkah 2 — Structure Analysis (Analisis Struktur):**
Menggunakan diagram blok hierarkis yang dimulai dari *system* → *subsystem* → *component*. Setiap elemen diberi kode FMEA dan divisualisasikan menggunakan software kolaboratif.

**Langkah 3 — Function Analysis (Analisis Fungsi):**
Mengkatalogkan fungsi setiap elemen beserta kategori kegagalannya (failure as function: *no function*, *partial function*, *unintended function*).

**Langkah 4 — Failure Analysis (Analisis Kegagalan):**
Mengidentifikasi mode kegagalan potensial dan efeknya (*effects*) pada tingkat sistem, subsistem, dan komponen. Pendekatan AIAG/VDA memperkenalkan konsep *focus element* untuk memprioritaskan elemen kritis.

**Langkah 5 — Risk Analysis (Analisis Risiko):**
Menilai setiap mode kegagalan menggunakan tabel lookup $(S, O, D)$ dan menentukan Action Priority $(H, M, L)$ sesuai tabel keputusan AIAG/VDA.

**Langkah 6 — Optimization (Optimasi):**
Merumuskan *action plan* dengan pemilik, tenggat waktu, dan *effectivity verification* (ECN/PCN—Engineering/Process Change Notification).

**Langkah 7 — Results Documentation (Dokumentasi Hasil):**
Menghasilkan *FMEA report* yang terstruktur dan dapat diaudit sesuai IATF 16949:2016.

### 3.2 SOP Pemeliharaan Preventif Berbasis FMEA (Saputra & Sukmono, 2024)

Untuk aplikasi pada mesin CNC milling, prosedur operasional standar mengikuti alur berikut:

1. **Identifikasi Subsistem Kritis:** Spindle, ball screw, sistem hidrolik, ATC (Automatic Tool Changer), dan sistem pendingin.
2. **Penentuan Failure Mode:** Misal: keausan bearing spindle, backlash ball screw, kebocoran selang hidrolik, kegagalan tool clamping, kontaminasi coolant.
3. **Penilaian AP:** Setiap mode kegagalan dinilai $(S, O, D)$ berdasarkan pengalaman operator dan data historis CMMS.
4. **Penjadwalan Preventive Maintenance (PM):** Interval PM dihitung menggunakan formula:
   $$T_{PM} = \frac{T_{remaining}}{f_{safety}}$$
   dengan $T_{remaining}$ adalah sisa umur berguna berdasarkan analisis Weibull dan $f_{safety} \in [1.2, 2.0]$ adalah faktor keamanan.
5. **Verifikasi & Feedback Loop:** Pengukuran *vibration analysis*, *thermography*, dan *oil analysis* untuk validasi.

### 3.3 Diagram Alir Integrasi Lintas-Fungsi

```
[Customer Voice / Voice of Process]
         ↓
[Cross-Functional Team] ──→ [FMEA Software Platform]
         ↓                          ↓
[Structure & Function]      [Knowledge Database]
         ↓                          ↓
[Risk Analysis (S,O,D)] ←→ [CMMS / MES Integration]
         ↓                          ↓
[Action Priority (H/M/L)]  [Real-time Production Data]
         ↓
[Action Plan & ECN/PCN]
         ↓
[Verification & CAPA]
         ↓
[Continuous Improvement → IATF 16949 Audit]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: Implementasi FMEA pada Komponen Otomotis (Sintesis dari Bizeli & Terazzi, 2024)

Sebuah *multinational automotive parts manufacturer* memproduksi komponen sistem rem (brake caliper assembly). Tim FMEA mengidentifikasi 47 mode kegagalan potensial pada subassembly piston housing. Tiga mode kegagalan kritis dengan AP *High*:

| No. | Failure Mode | S | O | D | AP | Biaya Kegagalan ($USD) |
|-----|--------------|---|---|---|----|------------------------|
| F-12 | Retak housing akibat *casting defect* | 9 | 5 | 4 | **H** | 12,500 |
| F-23 | Seal bocor pada tekanan tinggi | 8 | 6 | 5 | **H** | 8,200 |
| F-31 | Thread strip pada mounting bolt | 9 | 4 | 6 | **H** | 15,000 |

**Perhitungan Reduction in Expected Loss:**

Asumsikan *production volume* = 500,000 unit/tahun. Sebelum implementasi FMEA, probabilitas kegagalan untuk ketiga mode tersebut adalah:

$$P_{before} = [0.003, 0.005, 0.002]$$

Biaya kegagalan tahunan sebelum intervensi:
$$L_{before} = 500{,}000 \times (0.003 \times 12{,}500 + 0.005 \times 8{,}200 + 0.002 \times 15{,}000)$$
$$L_{before} = 500{,}000 \times (37.5 + 41.0 + 30.0) = 500{,}000 \times 108.5 = \$54{,}250{,}000$$

Setelah implementasi FMEA dengan *control plan* yang ketat (100% X-ray inspection untuk F-12, *automated leak test* untuk F-23, *torque verification* untuk F-31), probabilitas turun menjadi:

$$P_{after} = [0.0003, 0.0008, 0.0001]$$

$$L_{after} = 500{,}000 \times (0.0003 \times 12{,}500 + 0.0008 \times 8{,}200 + 0.0001 \times 15{,}000)$$
$$L_{after} = 500{,}000 \times (3.75 + 6.56 + 1.50) = 500{,}000 \times 11.81 = \$5{,}905{,}000$$

**Penghematan tahunan:** $\Delta L = 54{,}250{,}000 - 5{,}905{,}000 = \$48{,}345{,}000$

**Perhitungan ROPI:**

Jika biaya implementasi FMEA (pelatihan, software, waktu tim) = \$850,000/tahun:

$$ROPI = \frac{48{,}345{,}000}{850{,}000} \approx 56.9$$

Artinya setiap \$1 yang diinvestasikan dalam program FMEA menghasilkan penghematan expected loss sebesar \$56.9.

### 4.2 Studi Kasus 2: FMEA pada Mesin CNC Milling (Saputra & Sukmono, 2024)

Sebuah mesin CNC milling