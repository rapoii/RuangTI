# 2503 — Analisis dan Implementasi FMEA AIAG/VDA dalam Manajemen Risiko Manufaktur Otomotif dan Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi tekanan kualitas yang semakin intensif, terutama karena konsekuensi finansial dan reputasional dari *field failures* dan penarikan produk (*recalls*). Biaya rata-rata satu insiden *recall* pada industri otomotif diestimasi mencapai USD 2–8 juta per kejadian, belum termasuk kerusakan jangka panjang pada *brand equity* dan menurunnya tingkat kepercayaan pelanggan (*customer trust*). Dalam konteks inilah pendekatan Failure Mode and Effects Analysis (FMEA) mengalami evolusi substansial — dari pendekatan tradisional berbasis *Risk Priority Number* (RPN) menuju kerangka terpadu AIAG/VDA yang dipublikasikan secara resmi pada tahun 2019.

Penelitian Bizeli dan Terazzi (2024) yang dipublikasikan di *Revista Interface Tecnológica* (DOI: 10.31510/infa.v22i1.2155) menyoroti urgensi implementasi FMEA AIAG/VDA pada perusahaan multinasional manufaktur komponen otomotif. Temuan utama mereka menunjukkan bahwa metodologi ini secara signifikan mendukung pencegahan kegagalan (*failure prevention*), menekan biaya *rework*, meningkatkan reliabilitas produk, dan memfasilitasi integrasi lintas fungsi dalam organisasi. Namun, mereka juga mengidentifikasi tantangan nyata berupa resistensi adopsi, kebutuhan pelatihan berkelanjutan, dan kompleksitas prosedural yang memerlukan tata kelola yang matang.

Di sisi lain, Saputra dan Sukmono (2024) dalam DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) membuktikan bahwa pendekatan serupa dapat diaplikasikan pada pemeliharaan mesin CNC *milling*, khususnya untuk memetakan moda kegagalan kritis seperti keausan *spindle bearing*, kerusakan *ball screw*, dan kegagalan sistem hidrolik. Kedua literatur ini menunjukkan bahwa FMEA bukan sekadar alat dokumentasi kualitas, melainkan instrumen strategis untuk pengambilan keputusan berbasis risiko (*risk-based decision making*) yang relevan di berbagai sektor manufaktur presisi. Standar IATF 16949:2016 juga secara eksplisit mensyaratkan penerapan *risk management* pada seluruh *supplier chain*, menjadikan FMEA AIAG/VDA sebagai kebutuhan kepatuhan (*compliance*) sekaligus keunggulan kompetitif.

---

## 2. Landasan Teori & Formulasi Matematis

FMEA merupakan metodologi terstruktur untuk mengidentifikasi, mengevaluasi, dan memitigasi potensi kegagalan pada produk atau proses. Dua pendekatan kuantitatif utama yang relevan untuk modul ini adalah **RPN Klasik** dan **Action Priority (AP) AIAG/VDA**.

### 2.1. Risk Priority Number (RPN) Klasik

Formulasi tradisional FMEA mendefinisikan RPN sebagai produk dari tiga parameter independen:

$$RPN = S \times O \times D$$

di mana:
- $S$ = *Severity* (Tingkat Keparahan, skala 1–10): dampak kegagalan terhadap pelanggan atau sistem
- $O$ = *Occurrence* (Tingkat Kejadian, skala 1–10): probabilitas kegagalan terjadi
- $D$ = *Detection* (Tingkat Kesulitan Deteksi, skala 1–10): kemampuan sistem kendali mutu mendeteksi kegagalan sebelum mencapai pelanggan

Nilai $RPN$ berkisar dari 1 hingga 1000, dengan *threshold* konvensional $RPN \geq 100$ yang menandakan moda kegagalan berisiko tinggi dan memerlukan tindakan mitigasi segera.

### 2.2. Action Priority (AP) — Pendekatan AIAG/VDA

Pendekatan AIAG/VDA 2019 menggantikan RPN dengan klasifikasi **Action Priority (AP)** yang lebih robust secara statistik:

$$AP = f(S, O, D) \in \{H, M, L\}$$

di mana:
- $H$ = *High* (Tindakan wajib / *mandatory action*)
- $M$ = *Medium* (Tindakan tergantung *risk acceptance*)
- $L$ = *Low* (Tindakan sesuai *risk acceptance* organisasi)

Berbeda dengan RPN yang memperlakukan S, O, D secara independen, AP menggunakan tabel keputusan berbasis *fuzzy logic* yang mempertimbangkan interaksi antar parameter dan mengurangi *distortion* akibat penskalaan subjektif.

### 2.3. Indikator Keandalan Sistem

Untuk konteks pemeliharaan mesin CNC (Saputra & Sukmono, 2024), parameter keandalan digunakan secara paralel:

$$MTBF = \frac{T_{operasi}}{N_{failure}}$$

$$MTTR = \frac{T_{downtime}}{N_{failure}}$$

$$Availability = \frac{MTBF}{MTBF + MTTR} \times 100\%$$

di mana $MTBF$ adalah *Mean Time Between Failures*, $MTTR$ adalah *Mean Time To Repair*, dan *Availability* merepresentasikan tingkat ketersediaan operasional mesin.

### 2.4. Biaya Kualitas (Cost of Poor Quality)

Formulasi untuk menghitung dampak finansial dari moda kegagalan:

$$COPQ = C_{rework} + C_{scrap} + C_{recall} + C_{warranty}$$

Pendekatan ini memungkinkan justifikasi ekonomis terhadap investasi program pencegahan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi FMEA AIAG/VDA mengikuti pendekatan **7 langkah terstruktur** yang merupakan evolusi dari proses 10 langkah FMEA klasik. Prosedur ini divalidasi oleh Bizeli & Terazzi (2024) dan sejalan dengan standar IATF 16949:2016 serta ISO 9001:2015.

### 3.1. Diagram Alir Implementasi

```
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 1: Planning & Preparation                          │
│ → Identifikasi scope, tim cross-functional, boundary diagram│
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 2: Structure Analysis                              │
│ → Dekomposisi sistem menjadi elemen (Block Diagram)         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 3: Function Analysis                               │
│ → Identifikasi fungsi setiap elemen + spesifikasi kinerja  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 4: Failure Analysis                                │
│ → Failure Modes, Effects, Causes (FMECA)                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 5: Risk Analysis (S, O, D → Action Priority)       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 6: Optimization                                    │
│ → Countermeasures, ownership, due date, follow-up           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ LANGKAH 7: Results Documentation                           │
│ → Reporting, validation, continuous improvement            │
└─────────────────────────────────────────────────────────────┘
```

### 3.2. SOP Aplikasi pada CNC Milling (Saputra & Sukmono, 2024)

1. **Pembentukan Tim**: Melibatkan operator CNC, teknisi pemeliharaan, quality engineer, dan *process engineer*.
2. **Pengumpulan Data Historis**: Analisis *logbook* kerusakan, catatan *downtime*, dan laporan *scrap*.
3. **Pemetaan Struktur Mesin**: Identifikasi subsistem kritis (spindle, ball screw, ATC, sistem hidrolik, sistem pendingin).
4. **Penilaian Risiko**: Menggunakan skala S, O, D terstandar AIAG/VDA.
5. **Penentuan AP dan Rencana Tindakan**: Berdasarkan output AP, ditetapkan *countermeasures* dengan penanggung jawab dan *due date*.
6. **Verifikasi Efektivitas**: Pengukuran ulang pasca implementasi untuk mengonfirmasi penurunan risiko.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Kasus A: FMEA Mesin CNC Milling — Komponen *Brake Disc* Otomotif

Mengacu pada metodologi Saputra dan Sukmono (2024), kami melakukan simulasi FMEA pada mesin CNC DMG MORI DMU 50 yang memproduksi komponen *brake disc* dengan toleransi geometris ±0.02 mm. Data dikumpulkan selama periode 12 bulan dengan total waktu operasi $T_{operasi} = 4.800$ jam.

**Tabel 1. FMEA Mesin CNC Milling**

| No | Subsistem | Failure Mode | S | O | D | RPN | AP |
|----|-----------|--------------|---|---|---|-----|-----|
| 1 | Spindle | Bearing wear | 9 | 6 | 5 | **270** | **H** |
| 2 | Ball Screw | Backlash berlebih | 8 | 7 | 6 | **336** | **H** |
| 3 | ATC | Tool gripper failure | 7 | 5 | 7 | **245** | **M** |
| 4 | Hidrolik | Kebocoran selang | 7 | 4 | 6 | **168** | **M** |
| 5 | Coolant | Nozzle tersumbat | 6 | 6 | 5 | **180** | **M** |
| 6 | Servo Motor | Encoder error | 9 | 3 | 7 | **189** | **M** |

### 4.2. Perhitungan Indikator Keandalan

Dengan data historis sebagai berikut:
- $N_{failure}$ (spindle) = 4 kejadian/tahun
- $T_{downtime}$ total = 96 jam

$$MTBF_{spindle} = \frac{4800}{4} = 1200 \text{ jam/failure}$$

$$MTTR_{spindle} = \frac{96}{4} = 24 \text{ jam}$$

$$Availability = \frac{1200}{1200 + 24} \times 100\% = 98.04\%$$

### 4.3. Analisis Pareto dan Prioritas Mitigasi

Menggunakan *principle* Pareto 80/20:

$$\text{Top Failure Modes} = \{Ball Screw, Spindle, ATC\} \text{ dengan kontribusi } \approx 68\% \text{ total RPN}$$

**Interpretasi Manajerial**: Moda kegagalan *ball screw backlash* (RPN = 336) memerlukan intervensi *immediate* melalui:
1. Penggantian *preloaded ball screw* dengan kelas presisi C7 → C5.
2. Implementasi *predictive maintenance* berbasis *vibration analysis* dengan threshold RMS velocity $\geq 4.5$ mm/s sesuai ISO 10816-3.
3. Pelatihan ulang operator terkait *lubrication schedule*.

### 4.4. Justifikasi Ekonomi

Misalkan:
- $C_{rework}$ per insiden = USD 1.200
- $C_{scrap}$ per insiden = USD 850
- $C_{recall}$ (avoided) per tahun = USD 250.000

$$COPQ_{sebelum} = (4 \times 1200) + (4 \times 850) + 0 = USD 8.200$$

Setelah mitigasi (estimasi 70% pengurangan failure):

$$COPQ_{setelah} = USD 8.200 \times 0.30 = USD 2.460$$

**Penghematan tahunan = USD 5.740**, dengan *payback period* investasi sistem monitoring < 6 bulan.

### 4.5. Validasi Pendekatan AP vs RPN

Perhatikan moda kegagalan *Servo Motor Encoder Error* (S=9, O=3, D=7) yang memiliki RPN