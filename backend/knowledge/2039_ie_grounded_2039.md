# 2039 — Analisis FMEA AIAG/VDA untuk Mitigasi Risiko Kualitas pada Manufaktur Otomotif dan Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22(1). DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi tekanan kompetisi yang semakin ketat terkait **zero-defect quality** dan **recall cost minimization**. Berdasarkan studi Bizeli & Terazzi (2024) yang dipublikasikan dalam *Revista Interface Tecnológica* (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)), implementasi FMEA AIAG/VDA pada sebuah perusahaan multinasional produsen komponen otomotif menunjukkan relevansi strategis yang tinggi. Metodologi ini muncul sebagai evolusi dari FMEA konvensional (QS-9000 era) yang telah terbukti memiliki kelemahan fundamental dalam penanganan risiko sistemik dan interaksi antar-mode kegagalan.

Konteks urgensi ekonomi industri dapat ditunjukkan melalui data empiris yang dihimpun Bizeli & Terazzi (2024): biaya rework dan recall dalam industri otomotif dapat mencapai 4–10% dari total revenue perusahaan, dengan satu insiden major recall rata-rata menimbulkan kerugian USD 22 juta hingga USD 50 juta per kejadian. AIAG (Automotive Industry Action Group) bersama VDA (Verband der Automobilindustrie) merespons kebutuhan ini dengan merilis handbook FMEA teredukasi pada 2019 yang mengubah pendekatan kuantitatif berbasis *Risk Priority Number* (RPN) menjadi pendekatan kualitatif berbasis *Action Priority* (AP).

Saputra & Sukmono (2024) dalam riset mereka yang dipublikasikan pada *Peer-Reviewed Journal* (DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)) turut memperkuat justifikasi penerapan FMEA dengan domain aplikasi pada pemeliharaan mesin CNC milling, membuktikan bahwa metodologi ini tidak terbatas pada lini produksi massal melainkan juga krusial pada *capital-intensive equipment reliability*. Sinergi kedua paper ini menunjukkan universalitas FMEA dalam ekosistem manufaktur modern, baik sebagai tool **preventif kualitas produk** maupun **preventif downtime mesin**.

Dengan pendekatan studi kasus kualitatif-deskriptif melalui wawancara semi-terstruktur terhadap tiga profesional berpengalaman, Bizeli & Terazzi (2024) mengidentifikasi empat pilar manfaat utama AIAG/VDA FMEA: (1) pencegahan kegagalan proaktif, (2) reduksi biaya rework dan recall, (3) peningkatan reliabilitas produk, serta (4) integrasi tim lintas-fungsi. Sebaliknya, tantangan implementasi yang teridentifikasi meliputi resistensi organisasional terhadap perubahan metodologi, kebutuhan pelatihan berkelanjutan, dan kompleksitas dokumentasi yang memerlukan digitalisasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Risk Priority Number (RPN) Konvensional

Pendekatan FMEA klasik yang digunakan Saputra & Sukmono (2024) menghitung prioritas risiko melalui perkalian tiga parameter ordinal:

$$RPN = S \times O \times D$$

di mana:
- $S$ = **Severity** (Tingkat Keparahan), skala diskret 1–10
- $O$ = **Occurrence** (Tingkat Kejadian), skala diskret 1–10
- $D$ = **Detection** (Tingkat Kesulitan Deteksi), skala diskret 1–10

Nilai $RPN$ berada pada rentang $[1, 1000]$, dengan threshold umum $RPN \geq 100$ mengindikasikan perlunya tindakan perbaikan segera.

### 2.2. Action Priority (AP) AIAG/VDA

Bizeli & Terazzi (2024) menyoroti bahwa AIAG/VDA FMEA menggantikan RPN dengan matriks keputusan *Action Priority* yang mempertimbangkan **interaksi non-linier** antar-parameter:

$$AP = f(S, O, D) \in \{H, M, L\}$$

di mana $H$ = *High* (Tindakan Diperlukan), $M$ = *Medium* (Tindakan Dipertimbangkan), $L$ = *Low* (Tindakan Opsional). Fungsi $f$ dipetakan melalui *lookup table* dengan basis teoritis: ketika $S \geq 9$, AP otomatis menjadi $H$ terlepas dari nilai $O$ dan $D$, karena keparahan tinggi mendominasi keputusan rekayasa.

### 2.3. Formulasi Efektivitas Mitigasi

Untuk mengukur efektivitas intervensi FMEA, parameter reduksi risiko didefinisikan sebagai:

$$\Delta R = \frac{RPN_{before} - RPN_{after}}{RPN_{before}} \times 100\%$$

Atau dalam kerangka AP:

$$\Delta AP = \mathbb{1}\{AP_{after} < AP_{before}\}$$

dengan $\mathbb{1}$ merupakan fungsi indikator Bernoulli yang bernilai 1 jika terjadi penurunan level prioritas.

### 2.4. Availability Mesin (Konteks CNC)

Saputra & Sukmono (2024) memanfaatkan formula availability untuk memvalidasi output FMEA pemeliharaan:

$$A = \frac{MTBF}{MTBF + MTTR} \times 100\%$$

di mana $MTBF$ = *Mean Time Between Failures* dan $MTTR$ = *Mean Time To Repair*.

### 2.5. Model Klasifikasi Prioritas Bayesian (Pendukung)

Untuk mengakomodasi ketidakpastian subjektifitas评分, model Bayesian digunakan:

$$P(AP = H \mid S, O, D) = \frac{P(S, O, D \mid AP = H) \cdot P(AP = H)}{\sum_{k \in \{H,M,L\}} P(S, O, D \mid AP = k) \cdot P(AP = k)}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Bizeli & Terazzi (2024), implementasi AIAG/VDA FMEA mengikuti **tujuh langkah prosedural** berikut:

**Langkah 1 – Planning & Preparation:**
Pembentukan tim *cross-functional* (quality, engineering, manufacturing, supplier) dan definisi scope analisis menggunakan **Bound Diagram** dan **Block Diagram** untuk membatasi sistem yang dianalisis.

**Langkah 2 – Structure Analysis:**
Dekomposisi sistem menggunakan **Function Net** yang memetakan hubungan antar-elemen: parent–child relationship, interface, dan feedback loop.

**Langkah 3 – Function Analysis:**
Setiap fungsi dideskripsikan menggunakan formulasi **Function = Verb + Object + Specification** dengan membedakan *intended function*, *unintended function*, dan *constraints*.

**Langkah 4 – Failure Analysis:**
Identifikasi mode kegagalan ($\text{Failure Mode}$), efek ($\text{Failure Effect}$), dan penyebab ($\text{Failure Cause}$) menggunakan *Failure Chain* yang mengikuti kausalitas linier: Cause → Mode → Effect.

**Langkah 5 – Risk Analysis:**
Penilaian $S$, $O$, $D$ menggunakan skala terstandar AIAG/VDA (masing-masing 10 poin) dan penentuan $AP$.

**Langkah 6 – Optimization:**
Untuk item ber-AP = H, dilakukan identifikasi **Action Plan** dengan target menurunkan AP menjadi M atau L, disertai penanggung jawab, due date, dan *effectivity verification*.

**Langkah 7 – Documentation & Communication:**
Penyimpanan hasil dalam *FMEA Worksheet* terpusat dengan versioning system dan komunikasi kepada seluruh stakeholder.

### Diagram Alir Implementasi

```
┌─────────────────────────┐
│ 1. Planning & Scoping   │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ 2. Structure Analysis   │
│   (Block + Bound Diagram)│
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ 3. Function Analysis    │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ 4. Failure Analysis     │
│   (Failure Chain)       │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ 5. Risk Analysis (AP)   │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ 6. Optimization & AP    │
└──────────┬──────────────┘
           ▼
┌─────────────────────────┐
│ 7. Documentation        │
└─────────────────────────┘
```

Pendekatan ini kontras dengan FMEA klasik yang diterapkan Saputra & Sukmono (2024) pada pemeliharaan mesin CNC milling, di mana alur lebih ringkas: identifikasi komponen kritis → penentuan mode kegagalan → kalkulasi RPN → rekomendasi interval maintenance preventif.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus 1: Komponen Otomotif (Konteks Paper Utama)

Sebuah komponen *brake caliper housing* pada lini produksi die-cast aluminum memiliki skenario kegagalan berikut:

| Mode Kegagalan | Efek | Penyebab | S | O | D |
|---|---|---|---|---|---|
| Porosity pada dinding silinder | Kebocoran fluida rem, *loss of function* | Suhu die terlalu rendah (260°C dari standar 320°C) | 9 | 5 | 6 |
| Dimensional drift pada bore | Ketidaksesuaian clearance piston | *Thermal cycling* berlebih pada tooling | 8 | 4 | 5 |
| Surface crack pasca-CNC | Fatigue fracture pada service | Tegangan residual machining | 8 | 3 | 7 |

**Kalkulasi RPN Konvensional:**

$$RPN_1 = 9 \times 5 \times 6 = 270$$

$$RPN_2 = 8 \times 4 \times 5 = 160$$

$$RPN_3 = 8 \times 3 \times 7 = 168$$

**Kalkulasi AP (AIAG/VDA):**

Untuk Mode 1 dengan $S = 9$: karena Severity ≥ 9, berdasarkan matriks AIAG/VDA, $AP_1 = H$ (High). Mode 2 dengan kombinasi $(S=8, O=4, D=5)$ menghasilkan $AP_2 = M$ (Medium). Mode 3 dengan $(S=8, O=3, D=7)$ menghasilkan $AP_3 = M$ (Medium).

**Interpretasi Manajerial:** Mode 1 menjadi prioritas utama karena kombinasi severity tinggi (ancaman keselamatan) dengan detection moderate. Investasi pada *die temperature monitoring system* dengan akuisisi data real-time dapat menurunkan $O$ dari 5 menjadi 2 dan $D$ dari 6 menjadi 4, sehingga:

$$\Delta R_1 = \frac{270 - (9 \times 2 \times 4)}{270} \times 100\% = \frac{270 - 72}{270} \times 100\% = 73{,}3\%$$

Reduksi risiko 73,3% menunjukkan efektivitas investasi sistem monitoring.

### 4.2. Studi Kasus 2: Pemeliharaan Mesin CNC Milling (Konteks Paper Pendukung)

Berdasarkan Saputra & Sukmono (2024), mesin CNC milling dengan spindle drive dianalisis:

| Komponen | Mode Kegagalan | S | O | D | RPN |
|---|---|---|---|---|---|
| Spindle bearing | Premature wear | 8 | 6 | 5 | 240 |
| Ball screw | Backlash berlebih | 7 | 5 | 4 | 140 |
| Servo motor | Insulation breakdown | 8 | 3 | 6 | 144 |
| Coolant pump | Cavitation failure | 6 | 7 | 5 | 210 |

RPN tertinggi: **Spindle bearing (240)**, rekomendasi predictive maintenance berbasis vibration analysis dengan target menurunkan $D$ menjadi 2:

$$RPN_{after} = 8 \times 6 \times 2 = 96$$

Reduksi: $\Delta R_{bearing} = \frac{240 - 96}{240} \times 100\% = 60\%$

Improvement availability mesin:
$$A_{before} = \frac{MTBF_{before}}{MTBF_{before} + MTTR} = \frac{480}{480 + 8}