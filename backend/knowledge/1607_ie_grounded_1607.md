# 1607 — FMEA AIAG/VDA: Rekayasa Keandalan Sistem Manufaktur Otomotif dan Analisis Pemeliharaan Mesin CNC dengan Pendekatan Action Priority

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas*
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal (UPS)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi dalam lingkungan regulasi yang sangat ketat dengan standar kualitas IATF 16949 (penerus ISO/TS 16949), di mana satu kali *recall* kendaraan dapat merugikan perusahaan hingga ratusan juta dolar AS. Bizeli & Terazzi (2024, DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)) melaporkan bahwa konteks industri ini memaksa setiap *tier-1* dan *tier-2* *supplier* komponen otomotif untuk mengadopsi metodologi identifikasi risiko yang terstruktur. *Failure Mode and Effects Analysis* (FMEA) tradisional yang menggunakan *Risk Priority Number* (RPN) mulai menunjukkan kelemahan fundamental setelah hampir lima dekade pemakaian — terutama inkonsistensi bobot antar-komponen (S, O, D) yang bersifat subjektif.

Revolusi terjadi ketika *Automotive Industry Action Group* (AIAG) bersama *Verband der Automobilindustrie* (VDA) Jerman merilis **AIAG-VDA FMEA Handbook** pada Juni 2019, yang menggantikan pendekatan RPN dengan **Action Priority (AP)** sebagai basis keputusan. Bizeli & Terazzi (2024) menekankan bahwa *case study* di multinasiona fabricantes de peças automotivas ini menemukan empat pilar urgensi: (i) pencegahan *failure* sebelum *lot* produksi dilepas ke pelanggan, (ii) reduksi biaya *rework* dan *recall* yang rata-rata menyerap 6–10% dari *revenue*, (iii) peningkatan reliabilitas produk di siklus operasi 5–10 tahun, dan (iv) integrasi lintas-fungsi (*cross-functional team*) yang mengharuskan keterlibatan desain, manufaktur, kualitas, dan logistik dalam satu *workshop*. Hasil riset kualitatif berbasis wawancara semi-terstruktur dengan tiga profesional berpengalaman tersebut mengonfirmasi bahwa FMEA bukan sekadar dokumen audit, melainkan instrumen *design validation* dan *process control* yang menyelamatkan margin keuntungan. Di sisi lain, Saputra & Sukmono (2024, DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)) menunjukkan bahwa penerapan FMEA pada mesin CNC milling di lantai produksi memiliki urgensi yang sebanding — downtime mesin kritis di industri permesinan presisi dapat menyebabkan kerugian produksi Rp 8–15 juta per jam dan penalti keterlambatan pengiriman *just-in-time* ke lini perakitan OEM. Kedua literatur ini secara konvergen membuktikan bahwa keputusan prioritas mitigasi risiko menjadi keputusan bisnis strategis, bukan sekadar keputusan teknis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Evolusi dari RPN ke Action Priority (AP)

FMEA klasik berbasis **MIL-STD-1629** (1974) dan **SAE J1739** menghitung prioritas melalui perkalian tiga parameter skalar:

$$RPN = S \times O \times D$$

di mana $S$ (*Severity*, 1–10), $O$ (*Occurrence*, 1–10), dan $D$ (*Detection*, 1–10). Kelemahan utama model ini — sebagaimana dikritik Bizeli & Terazzi (2024) — adalah sifat *commutative* yang memungkinkan kombinasi $S=10, O=1, D=1$ (RPN=10) diperlakukan setara dengan $S=2, O=5, D=1$ (RPN=10), padahal signifikansi bisnisnya sangat berbeda. AIAG/VDA 2019 memperkenalkan AP berbasis **logika tabel keputusan**:

$$AP = \mathcal{F}_{AP}(S, O, D) \in \{H, M, L\}$$

dengan kategori **H** (*High* — wajib dimitigasi), **M** (*Medium* — mitigasi sesuai sumber daya), dan **L** (*Low* — acceptable risk*). Pemetaan ini mempertahankan hierarki *severity* sebagai variabel dominan, sehingga $S \geq 9$ hampir pasti menghasilkan AP = H terlepas dari nilai O dan D.

### 2.2. Skala Kuantitatif Parameter

Untuk mesin CNC milling (Saputra & Sukmono, 2024), tiga skala referensi yang digunakan adalah:

$$S \in \{1,2,\ldots,10\},\quad O \in \{1,2,\ldots,10\},\quad D \in \{1,2,\ldots,10\}$$

dengan **interpretasi manajemen**:

- $S=10$: Kegagalan menyebabkan *machine breakdown* total atau risiko keselamatan operator.
- $O=8$: Kegagalan terjadi pada $>1$ per 20 jam operasi (Cpk < 1,0).
- $D=9$: Kegagalan tidak terdeteksi sebelum *next-part delivery* (zero *in-process control*).

### 2.3. Formulasi Dampak Ekonomi & Risiko

Nilai *expected loss* per *failure mode*:

$$EL_i = P_i \times C_i = \left(\frac{O_i}{10^6 \text{ op}}\right) \times (C_{\text{downtime}} \cdot t_{\text{repair}} + C_{\text{scrap}} + C_{\text{quality}})$$

Saputra & Sukmono (2024) menjustifikasi bahwa biaya *downtime* mesin CNC milling presisi di Indonesia berkisar $C_{\text{downtime}} = \text{Rp } 12.500.000/\text{jam}$, sementara rerata waktu perbaikan bearing spindel adalah $t_{\text{repair}} = 6$ jam.

### 2.4. Fungsi Keandalan dan MTBF

Untuk komponen kritis seperti *spindle bearing*, laju kegagalan mengikuti distribusi Weibull:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

dengan $\beta$ parameter bentuk dan $\eta$ parameter skala (dalam jam operasi). Nilai MTBF:

$$\text{MTBF} = \eta \cdot \Gamma\!\left(1 + \frac{1}{\beta}\right)$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma. Bizeli & Terazzi (2024) menekankan bahwa target MTBF minimum pada komponen kelas *safety-relevant* di industri otomotif adalah 50.000 jam dengan $\beta > 2$ (regim *wear-out* yang terkontrol).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

AIAG/VDA Handbook 2019 menetapkan **tujuh langkah prosedural** yang diadopsi Bizeli & Terazzi (2024) sebagai SOP pada *multinational fabricante*:

```
┌────────────────────────────────────────────────────────────────┐
│ LANGKAH 1: Planning & Preparation                              │
│   → Tentukan scope (design FMEA / process FMEA), tim, jadwal   │
├────────────────────────────────────────────────────────────────┤
│ LANGKAH 2: Structure Analysis (Boundary Diagram + Block Diagram)│
│   → Identifikasi item/element, interface, asumsi                │
├────────────────────────────────────────────────────────────────┤
│ LANGKAH 3: Function Analysis                                   │
│   → Dekomposisi fungsi: Fungsi utama & fungsi sekunder         │
├────────────────────────────────────────────────────────────────┤
│ LANGKAH 4: Failure Analysis                                    │
│   → Failure Modes → Failure Causes → Failure Effects           │
├────────────────────────────────────────────────────────────────┤
│ LANGKAH 5: Risk Analysis (S, O, D → AP)                        │
│   → Gunakan tabel AP AIAG/VDA 2019 (lampiran E)                │
├────────────────────────────────────────────────────────────────┤
│ LANGKAH 6: Optimization                                        │
│   → Tentukan Action Priority outcome (H/M/L) & countermeasure  │
├────────────────────────────────────────────────────────────────┤
│ LANGKAH 7: Documentation & Communication                       │
│   → Status report, sign-off multi-fungsi, link ke Control Plan │
└────────────────────────────────────────────────────────────────┘
```

**Diagram alir keputusan AP:**

```
[Identifikasi Failure Mode] → (Hitung S,O,D)
        ↓
[Lookup Tabel AP AIAG/VDA 2019]
        ↓
   ┌────┴────┬─────────┬──────────┐
   ↓         ↓         ↓          ↓
 AP=H      AP=M       AP=L      AP*=Review
   ↓         ↓         ↓
 Wajib    Prioritas  Risiko
 Tindakan  Terukur    Diterima
```

Untuk studi Saputra & Sukmono (2024) pada mesin CNC milling, penerapan SOP ini menghasilkan *worksheet* berisi minimal **8 kolom wajib**: No, Item/Function, Failure Mode, Effect, Cause, S, O, D, AP, Action, Owner, Completion Date.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Data Kasus: Mesin CNC Milling Mazak VTC-200B (Lini Produksi *Automotive Tier-1*)

Berikut adalah **lima *failure mode* kritis** yang berhasil diidentifikasi tim FMEA berdasarkan referensi Saputra & Sukmono (2024) dan konteks industri manufaktur presisi:

| No | Failure Mode | Cause | Effect |
|----|---|---|---|
| FM-01 | Spindle bearing wear (inner race pitting) | Pelumasan tidak optimal, beban radial berlebih | Getaran, dimensi out-of-tolerance, scrap |
| FM-02 | Ball screw axis-X backlash | Wear pada nut, preload hilang | Akurasi posisi memburuk, error geometris |
| FM-03 | Coolant pump failure (cavitation) | Filter tersumbat, impeller aus | Overheating tool, thermal deformation |
| FM-04 | Servo motor Z-axis encoder fault | Kontaminasi debu, kabel putus | Positioning error, emergency stop |
| FM-05 | Tool changer arm misalignment | Sensor proximity gagal, akumulasi chip | Collision, downtime panjang |

### 4.2. Penilaian S, O, D dan Perhitungan AP

Mengacu pada skala AIAG/VDA 2019 (tabel S: lampiran A; O: lampiran B; D: lampiran D):

| FM | S | O | D | S × O × D | AP (Tabel AIAG/VDA) |
|----|---|---|---|-----------|----------------------|
| FM-01 | **8** | **5** | **4** | **160** | **H** *(S≥8 + O=5 + D=4 → AP=H)* |
| FM-02 | **7** | **6** | **5** | **210** | **H** *(S=7 + O=6 + D=5 → AP=H)* |
| FM-03 | **7** | **4** | **6** | **168** | **M** *(S=7 + O=4 → AP=M)* |
| FM-04 | **9** | **3** | **5** | **135** | **H** *(S≥9 → AP=H unconditional)* |
| FM-05 | **8** | **4** | **3** | **96** | **M** *(S=8 + O=4 + D=3 → AP=M)* |

**Interpretasi manajerial:** Perhatikan bahwa FM-02 memiliki RPN tertinggi (210) dan FM