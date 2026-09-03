# 2359 — Analisis Kuantitatif FMEA AIAG/VDA pada Manufaktur Otomotif dan Aplikasi Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tingkat kompleksitas rekayasa yang semakin tinggi seiring integrasi elektronika, perangkat lunak *embedded*, serta tuntutan regulasi emisi dan keselamatan fungsional (*functional safety*). Dalam konteks ini, *Failure Mode and Effects Analysis* (FMEA) telah lama menjadi tulang punggung program keandalan produk (*Product Reliability Program*). Namun, edisi tradisional FMEA yang berbasis *Risk Priority Number* (RPN) mengalami berbagai keterbatasan konseptual yang mendorong kolaborasi bersejarah antara *Automotive Industry Action Group* (AIAG) Amerika Serikat dan *Verband der Automobilindustrie* (VDA) Jerman untuk menerbitkan standar harmonis AIAG-VDA FMEA Handbook pada tahun 2019. Standardisasi ini menjadi tonggak baru dalam tata kelola risiko produk otomotif lintas-regional.

Bizeli dan Terazzi (2024) dalam studi kasusnya di sebuah perusahaan multinasional manufaktur komponen otomotif melaporkan bahwa penerapan AIAG-VDA FMEA secara sistematis menghasilkan tiga manfaat utama: (1) **pencegahan kegagalan** sejak fase desain konseptual (*Design FMEA*) hingga fase proses produksi (*Process FMEA*); (2) **reduksi biaya** yang signifikan terkait *rework*, *scrap*, dan *field recall*; serta (3) **peningkatan keandalan produk** yang terukur melalui *Mean Time Between Failures* (MTBF). Temuan kualitatif ini diperoleh melalui wawancara semi-terstruktur terhadap tiga profesional berpengalaman yang terlibat langsung dalam implementasi [DOI: 10.31510/infa.v22i1.2155].

Studi komplementer dari Saputra dan Sukmono (2024) memperkuat urgensi metodologi FMEA dengan menerapkannya pada konteks pemeliharaan mesin *CNC Milling* di lantai produksi, di mana *downtime* tak terencana dapat menimbulkan kerugian produksi sebesar ratusan dolar per jam [DOI: 10.21070/ups.8248]. Kombinasi dua perspektif — risiko produk (AIAG-VDA) dan risiko aset (pemeliharaan mesin) — menunjukkan bahwa FMEA bukan sekadar alat dokumentasi kepatuhan *IATF 16949*, melainkan instrumen strategis *Total Productive Maintenance* (TPM) dan *Reliability-Centered Maintenance* (RCM).

Secara ekonomis, biaya *recall* kampanye di industri otomotif AS rata-rata mencapai USD 22 juta per insiden menurut data *NHTSA* yang dirujuk dalam literatur FMEA, menjadikan investasi dalam program FMEA yang matang memiliki *Return on Investment* (ROI) yang sangat positif. Lebih jauh, resistensi internal terhadap adopsi metodologi baru — yang diidentifikasi Bizeli dan Terazzi (2024) sebagai tantangan utama — memerlukan strategi *change management* yang terstruktur untuk memastikan transisi dari RPN tradisional ke *Action Priority* (AP) berjalan efektif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Evolusi dari RPN ke Action Priority (AP)

FMEA konvensional menggunakan **Risk Priority Number (RPN)** sebagai berikut:

$$\text{RPN} = S \times O \times D$$

di mana $S$ adalah *Severity* (1–10), $O$ adalah *Occurrence* (1–10), dan $D$ adalah *Detectability* (1–10). Namun, AIAG-VDA Handbook 2019 menggantikan pendekatan ini dengan **Action Priority (AP)**, yang mengklasifikasikan risiko ke dalam tiga tingkatan: **H (High)**, **M (Medium)**, dan **L (Low)** berdasarkan tabel keputusan dua dimensi yang memperhitungkan $S$, $O$, dan $D$ secara non-multiplikatif untuk menghindari distorsi prioritas.

Formulasi probabilistik untuk *Occurrence* dalam konteks manufaktur adalah:

$$O_i = \frac{N_{\text{fail},i}}{N_{\text{total},i}} \times 10^6 \quad \text{(dalam ppm)}$$

dengan $N_{\text{fail},i}$ adalah jumlah kegagalan modus $i$ dan $N_{\text{total},i}$ adalah total unit produksi untuk modus tersebut.

### 2.2 Severity Matrix

Untuk komponen otomotif kritis seperti *brake caliper* atau *steering knuckle*, *severity* ditetapkan pada skala S = 9–10 karena potensi bahaya terhadap keselamatan pengguna jalan. Formulasi dampak biaya kegagalan kualitas adalah:

$$C_{\text{total}} = C_{\text{internal}} + C_{\text{external}} + C_{\text{latent}}$$

di mana:
- $C_{\text{internal}}$ = biaya *rework*, *scrap*, dan *downtime*
- $C_{\text{external}}$ = biaya garansi dan klaim pelanggan
- $C_{\text{latent}}$ = biaya reputasi dan *recall*

### 2.3 Detection Logic

*Detection* ($D$) dalam AIAG-VDA FMEA menggunakan konsep **Detection Difficulty** (bukan probabilitas deteksi absolut), dengan formulasi:

$$D = f(\text{Test Coverage}, \text{Test Reliability}, \text{Diagnostic Maturity})$$

Nilai rendah $D$ (misalnya 1–3) menunjukkan bahwa mode kegagalan **sulit dideteksi** dengan metode pengujian yang ada, sehingga memerlukan investasi pada *inspection technology* seperti *vision system*, *coordinate measuring machine* (CMM), atau *in-line testing*.

### 2.4 RPN untuk Aplikasi Pemeliharaan CNC

Saputra dan Sukmono (2024) menerapkan formula RPN klasik pada konteks pemeliharaan preventif mesin *CNC Milling* [DOI: 10.21070/ups.8248]. Untuk modus kegagalan seperti keausan *spindle bearing*, formula yang digunakan:

$$\text{RPN}_{\text{CNC}} = S_{\text{CNC}} \times O_{\text{CNC}} \times D_{\text{CNC}}$$

dengan bobot $S_{\text{CNC}}$ mencakup aspek keamanan operator, kualitas produk, dan dampak *downtime*. Analisis ini menjadi dasar bagi penentuan interval pemeliharaan berbasis risiko (*risk-based maintenance interval*):

$$T_{\text{pms}} = \frac{T_{\text{MTBF}}}{\sqrt[k]{\text{RPN}_{\text{norm}}}} \quad \text{dengan } k = 1, 2, 3, \ldots$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AIAG-VDA FMEA mengikuti siklus **Plan-Do-Check-Act (PDCA)** yang terintegrasi dengan *Advanced Product Quality Planning* (APQP). Diagram alir prosedur operasionalnya adalah sebagai berikut:

```
┌─────────────────────────────────────────────────────────────┐
│  FASE 1 - PLANNING & PREPARATION                           │
│  • Tentukan scope (DFMEA/PFMEA/MFMEA)                       │
│  • Bentuk tim lintas-fungsi (cross-functional team)         │
│  • Definisikan boundary diagram & P-diagram                 │
└────────────────────┬────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 2 - FAILURE ANALYSIS (Steps 1-5)                     │
│  Step 1: Struktur analisis (item/element/function)          │
│  Step 2: Function → Failure Mode → Effect → Cause          │
│  Step 3: Assign Severity (S)                                │
│  Step 4: Assign Occurrence (O)                              │
│  Step 5: Assign Detection (D) + Action Priority (AP)        │
└────────────────────┬────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 3 - RISK MITIGATION                                   │
│  • Prioritaskan modus AP=H (High)                           │
│  • Assign owner & target due date                           │
│  • Optimasi Prevention vs Detection control                 │
└────────────────────┬────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 4 - DOCUMENTATION & KNOWLEDGE MANAGEMENT             │
│  • Update APQP document control                             │
│  • Link ke Control Plan, Work Instruction                   │
│  • Archive di PLM/Quality Management System                 │
└─────────────────────────────────────────────────────────────┘
```

**Standar operasional** yang harus dipenuhi mencakup:
1. **IATF 16949:2016** — Klausul 8.3.3.2 mengharuskan *Design and development controls* termasuk FMEA.
2. **AIAG-VDA FMEA Handbook 1st Edition (2019)** — Referensi metodologi utama.
3. **VDA 6.3** — Standar audit proses yang memverifikasi efektivitas FMEA proses.
4. **ISO 26262** — *Functional Safety* untuk komponen elektronik otomotif, di mana FMEA menjadi input analisis bahaya (*Hazard Analysis*).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Komponen *Brake Caliper Piston*

Sebuah multinasional otomotif (mengacu pada konteks studi Bizeli & Terazzi, 2024) ingin menganalisis modus kegagalan pada piston kaliper rem. Tiga modus kegagalan dominan diidentifikasi:

| No. | Failure Mode | Cause Potensial | S | O | D | RPN | AP |
|---|---|---|---|---|---|---|---|
| 1 | Retak pada dinding piston | *Casting defect* (porosity) | 9 | 5 | 6 | 270 | **H** |
| 2 | Dimensi luar piston over-size | *Tool wear* pada machining | 7 | 4 | 3 | 84 | **M** |
| 3 | Surface roughness tinggi | *Cutting parameter* suboptimal | 8 | 3 | 5 | 120 | **M** |

**Perhitungan RPN Modus 1:**

$$\text{RPN}_1 = S_1 \times O_1 \times D_1 = 9 \times 5 \times 6 = 270$$

Meskipun RPN₁ = 270 tampak tinggi, AIAG-VDA FMEA tidak lagi menggunakan ambang RPN tunggal. Sebagai gantinya, **Action Priority Table** memberikan rekomendasi: modus 1 diklasifikasikan **AP = H** karena Severity 9 (dampak keselamatan) digabung dengan Occurrence 5 dan Detection Difficulty 6, yang secara otomatis memicu *mandatory prevention control*.

### 4.2 Perhitungan Biaya Penghematan

Misalkan data historis perusahaan menunjukkan:

- Volume produksi tahunan: $N = 500{,}000$ unit
- Tingkat cacat sebelum FMEA (modus 1): $p_0 = 0{,}08\%$ = 400 unit gagal/tahun
- Biaya rework per unit: $C_{\text{rework}} = \$45$
- Biaya scrap per unit: $C_{\text{scrap}} = \$120$
- Biaya warranty claim per unit: $C_{\text{warranty}} = \$2{,}500$

**Total biaya kualitas sebelum implementasi:**

$$C_{\text{before}} = 400 \times (\$45 + \$120 + \$2{,}500) = 400 \times \$2{,}665 = \$1{,}066{,}000$$

Setelah implementasi AIAG-VDA FMEA dengan kontrol pencegahan (misalnya, *100% CMM inspection* + *Statistical Process Control* pada proses *machining*), tingkat cacat turun menjadi $p_1 = 0{,}02\%$:

$$C_{\text{after}} = 100 \times \$2{,}665 = \$266{,}500$$

**Penghematan tahunan:**

$$\Delta C = C_{\text{before}} - C_{\text{after}} = \$1{,}066{,}000 - \$266{,}500 = \$799{,}500$$

Dengan investasi implementasi FMEA (pelatihan, perangkat lunak, konsultasi) sebesar \$80.000, maka:

$$\text{ROI} = \frac{\$799{,}500 - \$80{,}000}{\$80{,}000} \times 100\% = 899\%$$

### 4.3 Integrasi dengan Pemeliharaan CNC (Saputra & Sukmono, 2024)

Untuk mesin *CNC Milling* yang memproduksi piston tersebut, analisis FMEA pemeliharaan menghasilkan:

| Komponen | Failure Mode | S | O | D | RPN |
|---|---|---|---|---|---|
| Spindle | Bearing wear | 9 | 4 | 7 | **252** |
|