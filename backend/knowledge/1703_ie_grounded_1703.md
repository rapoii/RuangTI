# 1703 — FMEA AIAG/VDA dalam Manufaktur Otomotif: Pencegahan Kegagalan, Optimasi Biaya Kualitas, dan Integrasi Pemeliharaan CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan struktural yang semakin kompleks sepanjang dekade terakhir: siklus hidup produk yang memendek, elektrifikasi powertrain, adopsi *Industry 4.0*, serta ekspektasi pelanggan terhadap *zero-defect* delivery. Dalam konteks inilah **Failure Mode and Effects Analysis (FMEA)** muncul bukan sekadar sebagai alat dokumentasi kualitas, melainkan sebagai infrastruktur intelektual untuk mitigasi risiko sistematis. Bizeli & Terazzi (2024) dalam studi kasusnya pada *fabricante de peças automotivas* multinasional menunjukkan bahwa transisi dari FMEA konvensional (AIAG 4th Edition) menuju **AIAG/VDA FMEA Handbook (2019)** bukan merupakan perubahan kosmetik melainkan *paradigm shift*: dari *Risk Priority Number* (RPN) berbasis *scoring* subjektif menuju **Action Priority (AP)** berbasis *decision logic table* yang lebih deterministik.

Urgensi ekonomi dari implementasi ini tidak dapat dipandang sebelah mata. Studi Bizeli & Terazzi (2024) mengidentifikasi tiga *value driver* utama: (1) **pencegahan kegagalan proaktif** yang menurunkan *cost of poor quality* (COPQ) terkait *rework* dan *recall*; (2) **peningkatan reliabilitas produk** yang berimplikasi pada *warranty cost*; serta (3) **integrasi lintas-fungsi** yang mempercepat *time-to-market*. Temuan kualitatif dari wawancara semi-terstruktur dengan tiga profesional berpengalaman di perusahaan tersebut menunjukkan bahwa resistensi internal terhadap adopsi metodologi baru masih menjadi *bottleneck* signifikan, bersamaan dengan kebutuhan *continuous training* dan standardisasi *software* pendukung. DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155).

Di sisi lain, Saputra & Sukmono (2024) memberikan perspektif komplementer melalui aplikasi FMEA pada pemeliharaan **mesin CNC milling** di lantai pabrik, yang secara langsung relevan dengan domain *machine tool reliability* di lini produksi komponen otomotif. Studi ini menunjukkan bahwa FMEA tidak hanya relevan untuk *design FMEA* (DFMEA) tetapi juga fundamental dalam *process FMEA* (PFMEA) dan *maintenance FMEA* — sebuah trilogi yang harus dipahami oleh setiap insinyur industri modern. DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248). Kedua literatur ini, ketika diintegrasikan, memberikan *framework* holistik yang menghubungkan desain produk, proses manufaktur, dan pemeliharaan aset kritis dalam satu orkestrasi risiko yang koheren.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Evolusi Konseptual: dari RPN ke Action Priority (AP)

FMEA konvensional (AIAG 2008) menggunakan **Risk Priority Number** sebagai agregat tunggal dari tiga parameter ordinal:

$$RPN = S \times O \times D$$

di mana $S$ adalah *Severity* (1–10), $O$ adalah *Occurrence* (1–10), dan $D$ adalah *Detection* (1–10). Namun, Bizeli & Terazzi (2024) menekankan bahwa AIAG/VDA 2019 menggantikan RPN dengan **Action Priority (AP)** yang dikategorikan ke dalam tiga tingkatan: **High (H)**, **Medium (M)**, dan **Low (L)**, ditentukan melalui *risk matrix* dua dimensi yang memperhitungkan $S$ versus $O$, dengan *Detection* diperlakukan sebagai parameter terpisah (tindakan perbaikan vs. *Detection* dalam *Controls*). Formulasi fundamentalnya adalah:

$$AP = f(S, O) \in \{H, M, L\}$$

dengan *lookup table* $f$ yang didefinisikan secara eksplisit dalam Handbook AIAG/VDA (2019, Tabel F.1). Sebagai contoh, kombinasi $S=9$ dan $O=5$ menghasilkan $AP = H$, sedangkan $S=4$ dan $O=3$ menghasilkan $AP = L$.

### 2.2. Kuantifikasi Dampak Ekonomi Kegagalan

Biaya total kualitas yang terkait dengan suatu mode kegagalan dapat dimodelkan sebagai:

$$C_{total} = C_{rework} + C_{scrap} + C_{warranty} + C_{recall} + C_{downtime}$$

Saputra & Sukmono (2024) secara eksplisit menggunakan FMEA untuk menurunkan *downtime* mesin CNC. *Overall Equipment Effectiveness* (OEE) sebagai metrik agregat dapat dinyatakan:

$$OEE = A \times P \times Q$$

di mana $A$ adalah *Availability*, $P$ adalah *Performance*, dan $Q$ adalah *Quality*. Hubungan antara *Mean Time Between Failures* (MTBF) dan *Mean Time To Repair* (MTTR) dengan *Availability* adalah:

$$A = \frac{MTBF}{MTBF + MTTR}$$

### 2.3. Indeks Kritisitas dan Fungsi Distribusi Kegagalan

Untuk karakterisasi keandalan komponen kritis mesin CNC, *failure rate* $\lambda(t)$ mengikuti distribusi Weibull dengan bentuk:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

di mana $R(t)$ adalah *reliability function*, $\eta$ adalah *characteristic life*, dan $\beta$ adalah *shape parameter*. *Mean Time To Failure* (MTTF) untuk distribusi Weibull adalah:

$$MTTF = \eta \cdot \Gamma\left(1 + \frac{1}{\beta}\right)$$

dengan $\Gamma(\cdot)$ adalah fungsi Gamma. Persamaan-persamaan ini menyediakan *toolkit* matematis untuk mengkuantifikasi dampak intervensi FMEA pada profil keandalan sistem.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Alur Proses AIAG/VDA FMEA

Berdasarkan Bizeli & Terazzi (2024), implementasi AIAG/VDA FMEA mengikuti **tujuh langkah prosedural** yang membentuk *closed-loop risk management*:

```
┌─────────────────────────────────────────────────────────────┐
│  L1: Planning & Preparation                                 │
│      → Identifikasi scope, tim, pelanggan, boundary         │
├─────────────────────────────────────────────────────────────┤
│  L2: Structure Analysis                                     │
│      → Decomposisi sistem (Fokus Element, Function, Failure)│
├─────────────────────────────────────────────────────────────┤
│  L3: Function Analysis                                      │
│      → Function Net (jaringan fungsi dan antarmuka)         │
├─────────────────────────────────────────────────────────────┤
│  L4: Failure Analysis                                       │
│      → Failure Mode, Failure Effect, Failure Cause          │
├─────────────────────────────────────────────────────────────┤
│  L5: Risk Analysis                                          │
│      → Penilaian S, O, D → Penentuan Action Priority (AP)   │
├─────────────────────────────────────────────────────────────┤
│  L6: Optimization                                           │
│      → Action plan untuk item AP = High & Medium            │
├─────────────────────────────────────────────────────────────┤
│  L7: Documentation & Communication                          │
│      → FMEA Worksheet, linkage ke Control Plan, Lessons     │
└─────────────────────────────────────────────────────────────┘
```

### 3.2. SOP Pemeliharaan Berbasis FMEA pada Mesin CNC

Saputra & Sukmono (2024) menyusun SOP yang dimulai dari (1) identifikasi komponen kritis mesin frais CNC, (2) pengumpulan data historis kegagalan, (3) *brainstorming* lintas fungsi untuk menentukan *failure modes*, (4) *scoring* S-O-D menggunakan tim *R\&D*, *production*, dan *maintenance*, (5) kalkulasi RPN/AP, (6) *ranking* prioritas, dan (7) formulasi *preventive action* termasuk jadwal *predictive maintenance* berbasis getaran (vibrasi), termografi, dan analisis oli.

### 3.3. Aturan Keputusan dan *Escalation*

Perusahaan yang mengadopsi AIAG/VDA 2019 wajib menegakkan *governance rule* berikut:

$$\text{Jika } AP = H \Rightarrow \text{Mandatory action plan dengan target completion} \leq 90 \text{ hari}$$
$$\text{Jika } AP = M \Rightarrow \text{Action plan melalui justifikasi manajemen risiko}$$
$$\text{Jika } AP = L \Rightarrow \text{Acceptable risk, dokumentasi formal}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Kasus A: Komponen Otomotif — *Steering Knuckle* (Bizeli & Terazzi, 2024)

Sebuah *steering knuckle* dari besi ulet (*ductile iron*) mengalami proses *forging*, *machining*, dan *shot peening*. Salah satu *failure mode* teridentifikasi adalah **retak pada lubang *ball joint*** (*Severity* = 8, *Occurrence* = 4, *Detection* = 5). Perhitungan RPN tradisional:

$$RPN_{lama} = 8 \times 4 \times 5 = 160$$

Namun, dengan AIAG/VDA 2019, kombinasi $(S=8, O=4)$ dipetakan ke *Action Priority* **Medium (M)**, dengan $D=5$ dievaluasi terpisah sebagai *Detection gap* yang memerlukan peningkatan *control* pada inspeksi CT-scan dan inspeksi dimensi 100%. Implikasi manajerial: meskipun RPN = 160 terdengar "cukup tinggi", AP = M mengarahkan tim pada *risk acceptance* dengan monitoring ketat, bukan *redesign* penuh — sebuah *decision* yang lebih efisien secara ekonomi.

### 4.2. Kasus B: Pemeliharaan Mesin CNC Milling (Saputra & Sukmono, 2024)

Misalkan sebuah mesin CNC milling 3-sumbu memiliki data historis sebagai berikut:

| Komponen Kritis | $\lambda$ (failure/1000 jam) | MTTR (jam) | S | O | D | RPN |
|---|---|---|---|---|---|---|
| Spindle bearing | 2.1 | 6.0 | 9 | 6 | 4 | 216 |
| Ball screw X-axis | 1.4 | 4.5 | 8 | 5 | 5 | 200 |
| Tool changer arm | 0.9 | 2.0 | 7 | 4 | 6 | 168 |
| Coolant pump | 1.7 | 3.0 | 6 | 6 | 3 | 108 |
| Servo motor Y-axis | 0.6 | 5.5 | 9 | 3 | 7 | 189 |

**Langkah kalkulasi Availability spindle bearing:**

$$A_{spindle} = \frac{MTBF}{MTBF + MTTR} = \frac{1/\lambda}{1/\lambda + MTTR}$$

Dengan $\lambda = 2.1/1000$ jam dan $MTTR = 6$ jam:

$$MTBF = \frac{1000}{2.1} \approx 476{,}19 \text{ jam}$$

$$A_{spindle} = \frac{476{,}19}{476{,}19 + 6} = 0{,}9876 = 98{,}76\%$$

**OEE agregat** (asumsi $P = 0{,}92$, $Q = 0{,}99$):

$$OEE = 0{,}9876 \times 0{,}92 \times 0{,}99 = 0{,}8994 = 89{,}94\%$$

**Interpretasi manajerial:** Spindle bearing merupakan *single point of failure* dengan RPN tertinggi (216). Rekomendasi FMEA-nya adalah: (1) implementasi *vibration monitoring* dengan *alert threshold* pada RMS velocity 4.5 mm/s sesuai ISO 10816-3; (2) *predictive replacement* pada $t = 0{,}8 \times MTBF \approx 381$ jam; (3) penyediaan *spare spindle assembly* untuk menurunkan MTTR menjadi 2 jam. Jika intervensi ini berhasil menurunkan MTTR dari 6 ke 2 jam:

$$A_{spindle}^{baru} = \frac{476{,}19}{476{,}19 + 2} = 0{,}9958 = 99{,}58\%$$

$$OEE_{baru} = 0{,}9958 \times 0{,}92 \times 0{,}99 = 0{,}9070 = 90{,}70\%$$

Peningkatan OEE sebesar 0,76 poin pada satu *bottleneck* aset dapat menghasilkan tambahan kapasitas produksi yang signifikan bila di-scale-up ke *fleet* mesin CNC. Dengan asumsi 20 mesin CNC yang beroperasi 24/7 dan *output* rata-rata 50 unit/jam pada harga jual $25/unit, peningkatan kapasitas tahunan:

$$\Delta \text{Kapasitas} = 20 \times 24 \times 365 \times 50 \times 0{,}0076 \approx 66{,}624 \text{ unit/tahun}$$

$$\Delta \text{Revenue} \approx 66{,}624 \times \$25 = \$1{,}665{,}600/\text{tahun}$$

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Batasan Metodologis

Kedua paper di atas memiliki keterbatasan yang perlu diacknowledged. Bizeli & Terazzi (2024) menggunakan **desain kualitatif-deskriptif** dengan sampel terbatas (n=3 profesional), sehingga *generalizability* temuannya ke konteks perusahaan lain bersifat kontekst