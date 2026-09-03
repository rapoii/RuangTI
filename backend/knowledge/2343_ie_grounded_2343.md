# 2343 — Manajemen Risiko FMEA AIAG/VDA pada Rantai Pasok Manufaktur Otomotif dan Mesin Perkakas CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas* — dikaitkan dengan analisis pemeliharaan mesin perkakas CNC menggunakan FMEA.
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, vol. 22, no. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi tekanan ganda yang bersifat struktural: di satu sisi, kompleksitas sistem *mechatronic* dan elektrifikasi kendaraan meningkat secara eksponensial; di sisi lain, regulasi keselamatan (*functional safety*) seperti ISO 26262 dan IATF 16949 menuntut tingkat reliabilitas produk yang mendekati nol *defect-per-million-opportunities* (DPMO). Dalam konteks inilah Bizeli dan Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* yang menginvestigasi secara deskriptif-kualitatif implementasi Failure Mode and Effects Analysis (FMEA) berbasis standar **AIAG/VDA** — pengganti resmi FMEA tradisional SAE J1739/AIAG yang mulai berlaku efektif pada tahun 2019 — di lingkungan sebuah *multinational automotive parts manufacturer* (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)).

Urgensi riset ini terletak pada transisi paradigmatik dari pendekatan *Risk Priority Number* (RPN) menuju **Action Priority (AP)** yang lebih kontekstual, di mana penilaian risiko tidak lagi sekadar perkalian tiga skor ordinal melainkan sebuah pemetaan kualitatif-kuantitatif berbasis tabel keputusan. Bizeli dan Terazzi (2024) melakukan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di perusahaan tersebut dan menemukan bahwa metode baru ini secara signifikan **meningkatkan pencegahan failure, menurunkan biaya rework dan recall, serta memperbaiki reliabilitas produk**, namun masih menghadapi tantangan berupa resistensi adopsi, kebutuhan pelatihan berkelanjutan, serta integrasi lintas-fungsi yang belum optimal. Hasil ini selaras dengan studi komplementer Saputra dan Sukmono (2024) di DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) yang membuktikan bahwa kerangka FMEA — termasuk varian tradisionalnya — tetap menjadi instrumen vital untuk memprioritaskan mode kegagalan pada mesin CNC milling di industri manufaktur presisi. Kedua literatur ini menjadi bukti empiris bahwa manajemen risiko kegagalan bukan lagi aktivitas kepatuhan (*compliance-driven*), melainkan *strategic capability* yang menentukan profitabilitas dan keberlanjutan operasional perusahaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Evolusi dari RPN ke Action Priority (AP)

Pendekatan FMEA klasik (AIAG, 2008) mendefinisikan **Risk Priority Number** sebagai perkalian tiga parameter ordinal:

$$\text{RPN}_{\text{klasik}} = S \times O \times D$$

di mana $S$ = *Severity* (1–10), $O$ = *Occurrence* (1–10), $D$ = *Detection* (1–10). Kelemahan fundamental model ini, menurut AIAG/VDA Handbook (2019), adalah **ketiadaan pembobotan antar-parameter** dan **inkonsistensi rentang RPN** yang dihasilkan. AIAG/VDA memperkenalkan **Action Priority (AP)** dengan tiga tingkatan: *High (H)*, *Medium (M)*, dan *Low (L)* yang ditetapkan melalui *lookup matrix*:

$$\text{AP} = f(S, O, D) \in \{H, M, L\}$$

dengan aturan keputusan (ringkas):

| Severity | Occurrence | Detection | AP |
|:---:|:---:|:---:|:---:|
| ≥ 9 | ≥ 5 | ≥ 5 | **H (Critical)** |
| ≥ 8 | ≥ 4 | ≥ 6 | **M (Significant)** |
| ≤ 4 | ≤ 3 | ≤ 4 | **L (Minor)** |

### 2.2. Formulasi Korelasi Biaya Kegagalan

Biaya total eksposur risiko (*Total Cost of Risk Exposure*, TCRE) sepanjang siklus hidup produk dapat dimodelkan sebagai berikut (kerangka adaptasi dari hasil studi Bizeli & Terazzi, 2024):

$$\text{TCRE} = \sum_{i=1}^{n} \left( P_i \cdot C_i^{\text{internal}} + P_i \cdot R_i \cdot C_i^{\text{external}} \right)$$

di mana $P_i$ = probabilitas mode kegagalan $i$, $C_i^{\text{internal}}$ = biaya *rework/scrap*, $R_i$ = probabilitas *customer-detected failure*, dan $C_i^{\text{external}}$ = biaya *warranty/recall*. Implementasi AIAG/VDA FMEA menurunkan $P_i$ dan $R_i$ melalui identifikasi preventif pada tahap *Design FMEA* (DFMEA) dan *Process FMEA* (PFMEA).

### 2.3. Penurunan DPMO setelah Intervensi FMEA

Saputra dan Sukmono (2024) menurunkan rumus perbaikan Six-Sigma untuk evaluasi efektivitas FMEA pada mesin CNC:

$$\text{DPMO}_{\text{after}} = \text{DPMO}_{\text{before}} \cdot (1 - \eta_{\text{FMEA}})$$

dengan $\eta_{\text{FMEA}}$ = *risk reduction efficiency* yang didefinisikan sebagai:

$$\eta_{\text{FMEA}} = 1 - \frac{\sum_{j \in J^*} w_j \cdot \text{AP}_j}{\sum_{j=1}^{N} w_j \cdot \text{AP}_{j,\max}}$$

di mana $J^*$ adalah himpunan mode kegagalan dengan AP turun setelah mitigasi, $w_j$ = bobot kepentingan komponen, dan $\text{AP}_{j,\max}$ = skor AP tertinggi sebelum intervensi.

---

## 3. Metodologi Rekayasa & SOP Implementasi AIAG/VDA FMEA

Berdasarkan paparan Bizeli & Terazzi (2024) serta acuan AIAG/VDA Handbook (2019), prosedur operasional standar (*Standard Operating Procedure*) implementasi disusun sebagai berikut:

**Tahap 1 — Planning & Preparation (1–2 minggu)**
1. Penetapan *cross-functional team* (CFT): kualitas, desain, manufaktur, logistik, *supplier quality*.
2. Definisi *scope* (sistem, subsistem, atau proses) menggunakan *boundary diagram*.
3. Identifikasi *customer requirements* dan regulasi (misalnya IATF 16949 clausa 8.3.5).

**Tahap 2 — Analysis (2–4 minggu)**
1. Dekomposisi fungsi struktural pohon (struktur → fungsi → failure → efek → cause).
2. Penilaian $S$, $O$, $D$ dengan skala AIAG/VDA yang telah direvisi (misalnya $S$ mencakup *Safety Impact* dan *Regulatory Impact*).
3. Penentuan AP melalui *lookup matrix* $S \times O \times D$.

**Tahap 3 — Risk Mitigation**
1. Penetapan *Action Plan* khusus untuk AP = H.
2. Penugasan *responsible owner*, *due date*, dan *completion criteria*.
3. Validasi efektivitas melalui simulasi, FMEA proses ulang, atau *control plan* update.

**Tahap 4 — Documentation & Knowledge Management**
1. Pembaruan *Control Plan*, *P-FMEA*, dan *D-FMEA* dalam sistem PLM.
2. Diseminasi lessons-learned ke seluruh plant melalui *Quality Information System (QIS)*.

**Tahap 5 — Continuous Improvement**
1. Review periodik (tiap 12 bulan atau setiap perubahan desain).
2. *Prevent Recurrence* (PR) tracking dengan metrik: *Closure Rate*, *Time-to-Detection*, *Cost Avoidance*.

Diagram alir logika:

```
[Scope] → [Function Analysis] → [Failure Analysis] → [S/O/D Scoring]
   ↓
[AP Determination] → [AP = H? ] ──Ya──→ [Action Plan + Owner + Deadline]
   ↓ Tidak
[AP = M/L] → [Watchlist]
   ↓
[Effectiveness Validation] → [Knowledge Update] → [Periodic Review]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Kasus 1 — Komponen Otomotif (Studi Adaptasi Bizeli & Terazzi, 2024)

Sebuah *multinational Tier-1 supplier* memproduksi *brake caliper bracket* untuk pasar Eropa. Hasil pemetaan AIAG/VDA FMEA pada satu mode kegagalan kritis disajikan dalam Tabel 1.

**Tabel 1. Penilaian AP pada mode kegagalan *brake caliper bracket***

| Parameter | Skor | Justifikasi |
|:---|:---:|:---|
| Severity ($S$) | 9 | Potensi *loss of braking function* (safety impact) |
| Occurrence ($O$) | 4 | 1 dari 5.000 unit pada lini produksi |
| Detection ($D$) | 5 | *Inline inspection* belum terpasang |

**Perhitungan dengan pendekatan klasik (RPN):**

$$\text{RPN}_{\text{klasik}} = 9 \times 4 \times 5 = 180$$

**Perhitungan dengan AIAG/VDA (AP Lookup):**

$$S = 9,\ O = 4,\ D = 5 \Rightarrow \text{AP} = H\ (\text{Critical})$$

Perhatikan: meskipun RPN = 180 (relatif moderat menurut ambang tradisional 200), AP tetap **High** karena severity 9 — membuktikan superioritas AP dalam konteks keselamatan.

### 4.2. Kasus 2 — Mesin CNC Milling (Studi Adaptasi Saputra & Sukmono, 2024)

Mesin CNC milling Mazak VTC-200B mengalami tiga mode kegagalan utama sepanjang 6 bulan operasi (5.400 jam). Data dikonversi ke DPMO sebagai berikut:

**Tabel 2. Mode kegagalan mesin CNC milling**

| Mode | $S$ | $O$ | $D$ | RPN |
|:---|:---:|:---:|:---:|:---:|
| Spindle bearing wear | 8 | 6 | 5 | **240** |
| Tool breakage | 7 | 5 | 4 | **140** |
| Coolant pump failure | 6 | 4 | 6 | **144** |

**Sebelum mitigasi:**

$$\text{DPMO}_{\text{before}} = \frac{\sum \text{defects}}{\text{unit} \times \text{opportunities}} \times 10^6 = \frac{28}{5400 \times 12} \times 10^6 = 432{,}099$$

**Setelah mitigasi berbasis AIAG/VDA (penurunan AP dari H → L pada dua mode utama):**

$$\eta_{\text{FMEA}} = 1 - \frac{(1 \cdot 1) + (1 \cdot 1) + (3 \cdot 3)}{(3 \cdot 3) + (3 \cdot 3) + (3 \cdot 3)} = 1 - \frac{11}{27} \approx 0{,}593$$

$$\text{DPMO}_{\text{after}} = 432{,}099 \times (1 - 0{,}593) = 175{,}900$$

**Sigma level** konversi: $\sigma \approx 0{,}8406 + \sqrt{29{,}37 - 2{,}221 \cdot \ln(\text{DPMO})}$ → dari $\sigma \approx 1{,}9$ menjadi $\sigma \approx 2{,}8$ — peningkatan signifikan yang menegaskan efektivitas kerangka mitigasi.

### 4.3. Interpretasi Manajerial

Hasil kuantitatif di atas menunjukkan tiga implikasi manajerial utama: **(1)** Penggantian RPN ke AP tidak menghilangkan kebutuhan metrik kuantitatif, melainkan menambah lapisan kontekstual untuk keputusan investasi *risk mitigation*; **(2)** Pada kasus komponen safety-critical, AP=H harus selalu diprioritaskan tanpa peduli nilai RPN; **(3)** Reduksi DPMO ~59% membuktikan bahwa intervensi berbasis FMEA memberikan ROI terukur, sesuai temuan Bizeli dan Terazzi (2024) mengenai penurunan biaya rework dan recall.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Agenda Riset Lanjutan

### 5.1. Keterbatasan Metodologi

Kedua literatur yang dikaji memiliki keterbatasan yang perlu dicermati. Studi Bizeli & Terazzi (2024) bersifat *single-case* dengan tiga responden (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)), sehingga *external validity*-nya terbatas dan rentan terhadap *respondent bias*. Sementara itu, Saputra dan Sukmono (2024) menggunakan skala RPN klasik yang sudah *deprecated* oleh AIAG/VDA — secara implisit menunjukkan masih lebarnya jurang adopsi (*adoption gap*) di industri menengah. Keduanya belum memasukkan analisis biaya kuantitatif penuh (LCC, *life cycle cost*) untuk membandingkan investasi pelatihan FMEA versus *cost avoidance*.

### 5.2. Perbandingan dengan Metode Konvensional

| Aspek | FMEA Klasik (RPN) | AIAG/VDA FMEA (AP) |
|:---|:---:|:---:|
| Skor risiko | Numerik tunggal | Kualitatif bertingkat |
| Konsistensi | Rendah (RPN = 8 bisa bermakna ganda) | Tinggi (lookup matrix) |
| Bobot $S/O/D$ | Sama | Diferensial ($S$ dominan pada safety) |
| Adopsi industri