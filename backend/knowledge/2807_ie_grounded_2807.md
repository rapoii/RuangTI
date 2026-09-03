# 2807 — Manajemen Risiko Kualitas Manufaktur Otomotif dan Perawatan Mesin CNC melalui Pendekatan FMEA Konvensional dan AIAG/VDA

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan ganda yang semakin intens di era *Industry 4.0* dan transisi elektrifikasi kendaraan. Di satu sisi, standar kualitas yang ditetapkan oleh principal seperti Toyota, Volkswagen, dan Stellantis menuntut *zero-defect* pada setiap komponen kritis yang masuk ke lini perakitan (Original Equipment Manufacturer/OEM). Di sisi lain, kompleksitas *supply chain* yang semakin panjang — melibatkan *Tier-1*, *Tier-2*, hingga *Tier-3* suppliers — memperbesar probabilitas kegagalan mode (*failure mode*) yang dapat memicu *rework cost*, scrap, *field recall*, dan rusaknya reputasi merek. Konteks inilah yang melatarbelakangi penelitian Bizeli & Terazzi (2024) yang dipublikasikan dalam *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155), yang secara spesifik mengkaji implementasi *Failure Mode and Effects Analysis* (FMEA) berbasis standar AIAG/VDA di sebuah perusahaan multinasional fabrikator komponen otomotif.

Studi kasus yang dilakukan oleh Bizeli & Terazzi (2024) menggunakan pendekatan kualitatif deskriptif melalui wawancara semi-terstruktur terhadap tiga orang praktisi berpengalaman di lingkungan manufaktur komponen otomotif. Temuan utama mereka menunjukkan bahwa FMEA AIAG/VDA — yang menggantikan *Risk Priority Number* (RPN) tradisional dengan matriks *Action Priority* (AP) — secara signifikan berkontribusi pada pencegahan kegagalan, penurunan biaya *rework* dan *recall*, peningkatan keandalan produk, integrasi tim lintas-fungsi, serta optimisasi proses produksi. Namun demikian, paper tersebut juga menyoroti tiga tantangan substansial: (1) resistensi adopsi metode baru di kalangan insinyur senior yang sudah terbiasa dengan format RPN klasik, (2) kebutuhan pelatihan berkelanjutan untuk memutakhirkan kompetensi analis FMEA, dan (3) integrasi FMEA dengan *digital thread* perusahaan (PLM/ERP/MES).

Secara ekonomi, biaya kualitas (*cost of poor quality*/COPQ) di industri otomotif global telah dilaporkan oleh berbagai studi, termasuk yang dirujuk dalam paper Saputra & Sukmono (2024) dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248), dapat mencapai 15–40% dari total biaya operasional perusahaan komponen. Downtime mesin CNC milling akibat kegagalan *spindle bearing*, *ball screw wear*, atau *coolant system failure* menjadi kontributor utama COPQ tersebut. Dengan demikian, adopsi FMEA bukan sekadar kepatuhan terhadap standar IATF 16949:2016, melainkan imperative strategis untuk mempertahankan margin dan daya saing. Urgensi ini menjadi semakin nyata ketika *recall* besar-besaran oleh pabrikan otomotif di berbagai negara dalam satu dekade terakhir menunjukkan kerugian yang melampaui USD 1 miliar per insiden, di mana sebagian besar akar masalahnya sebenarnya telah teridentifikasi dalam FMEA rantai pasok namun tidak ditindaklanjuti secara efektif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 FMEA Konvensional: Risk Priority Number (RPN)

Pendekatan FMEA klasik yang digunakan sejak tahun 1970-an mengandalkan tiga parameter ordinal yang dinotasikan sebagai berikut (Saputra & Sukmono, 2024; DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)):

$$RPN = S \times O \times D$$

di mana:
- $S \in \{1, 2, \ldots, 10\}$ adalah **Severity** (tingkat keparahan dampak kegagalan terhadap pelanggan/pengguna akhir),
- $O \in \{1, 2, \ldots, 10\}$ adalah **Occurrence** (frekuensi kegagalan terjadi berdasarkan data historis atau prediksi),
- $D \in \{1, 2, \ldots, 10\}$ adalah **Detection** (kemampuan sistem kontrol mendeteksi kegagalan sebelum produk sampai ke pelanggan).

Nilai $RPN$ secara teoritis memiliki rentang diskrit $1 \leq RPN \leq 1000$. Ambang batas (*threshold*) yang lazim digunakan dalam konteks komponen otomotif adalah $RPN \geq 100$ yang menandakan kebutuhan tindakan mitigasi segera, meskipun ambang ini bervariasi antar organisasi.

### 2.2 AIAG/VDA FMEA: Action Priority (AP) Approach

Sebagaimana disoroti oleh Bizeli & Terazzi (2024, DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)), standar AIAG/VDA yang diterbitkan pada tahun 2019 menggantikan RPN dengan pendekatan *Action Priority* yang lebih nuanced. Formulasi matematis AP dapat diekspresikan sebagai fungsi pemetaan:

$$AP = f(S, O, D) \in \{H, M, L\}$$

di mana:
- $H$ = *High* (tindakan wajib diperlukan, eskalasi ke manajemen),
- $M$ = *Medium* (tindakan diperlukan, namun dengan justifikasi risiko residual),
- $L$ = *Low* (tindakan opsional berdasarkan analisis biaya-manfaat).

Berbeda dengan RPN yang merupakan perkalian linear, AP adalah fungsi non-linear yang memperhitungkan interaksi antara $S$, $O$, dan $D$ melalui tabel lookup empat-dimensi (pada dasarnya matriks $10 \times 10 \times 10$ yang telah di-*binned* oleh konsorsium AIAG/VDA). Secara matematis, pendekatan AP dapat dimodelkan sebagai:

$$AP_i = \phi(S_i, O_i, D_i) \quad \text{untuk setiap failure mode } i$$

di mana $\phi$ adalah fungsi klasifikasi berdasarkan tabel referensi resmi AIAG/VDA Handbook 2019.

### 2.3 Statistik Keandalan dan Korelasi dengan FMEA

Paper Saputra & Sukmono (2024, DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)) juga mengintegrasikan parameter keandalan klasik ke dalam kerangka FMEA. Laju kegagalan (*failure rate*) diasumsikan mengikuti distribusi Weibull dua parameter:

$$\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\beta > 0$ adalah *shape parameter* dan $\eta > 0$ adalah *scale parameter* (dalam satuan jam operasi mesin CNC). *Mean Time Between Failures* (MTBF) untuk distribusi Weibull adalah:

$$MTBF = \eta \cdot \Gamma\left(1 + \frac{1}{\beta}\right)$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma. Hubungan antara MTBF dan *Occurrence* dalam FMEA mengikuti konvensi: semakin rendah MTBF, semakin tinggi skor $O$.

### 2.4 Formulasi Biaya Kualitas (COPQ)

Untuk mengkuantifikasi dampak ekonomi dari *failure mode*, Bizeli & Terazzi (2024) mengacu pada model COPQ:

$$COPQ_{total} = C_{prevention} + C_{appraisal} + C_{internal\_failure} + C_{external\_failure}$$

di mana komponen *internal failure* mencakup biaya *rework* dan *scrap*, sedangkan *external failure* mencakup biaya garansi, *recall*, dan *liability*. Reduksi COPQ akibat penerapan FMEA dapat dimodelkan sebagai:

$$\Delta COPQ = \sum_{i=1}^{n} \pi_i \cdot (RPN_i^{before} - RPN_i^{after}) \cdot C_i$$

dengan $\pi_i$ adalah bobot prioritas risiko, $RPN_i^{before}$ dan $RPN_i^{after}$ berturut-turut adalah nilai RPN sebelum dan sesudah mitigasi, serta $C_i$ adalah estimasi biaya per kejadian kegagalan mode ke-$i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi FMEA AIAG/VDA mengikuti kerangka 7-step seperti yang didokumentasikan dalam *AIAG/VDA FMEA Handbook* (2019) dan dikonfirmasi oleh Bizeli & Terazzi (2024, DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)):

```
┌──────────────────────────────────────────────────────┐
│ STEP 1: Planning & Preparation (Rencana & Persiapan) │
│  - Definisi scope, boundary, tim cross-functional     │
│  - Identifikasi pelanggan internal/eksternal          │
└─────────────────────┬────────────────────────────────┘
                      ▼
┌──────────────────────────────────────────────────────┐
│ STEP 2: Structure Analysis (Analisis Struktur)        │
│  - Block diagram / Boundary diagram                    │
│  - Decomposisi: System → Subsystem → Component        │
└─────────────────────┬────────────────────────────────┘
                      ▼
┌──────────────────────────────────────────────────────┐
│ STEP 3: Function Analysis (Analisis Fungsi)           │
│  - Function net (input-output relations)               │
│  - Identifikasi fungsi utama dan sekunder              │
└─────────────────────┬────────────────────────────────┘
                      ▼
┌──────────────────────────────────────────────────────┐
│ STEP 4: Failure Analysis (Analisis Kegagalan)         │
│  - Failure mode identification                        │
│  - Failure effects & causes linkage                    │
└─────────────────────┬────────────────────────────────┘
                      ▼
┌──────────────────────────────────────────────────────┐
│ STEP 5: Risk Analysis (Analisis Risiko)               │
│  - Penilaian S, O, D                                   │
│  - Penentuan Action Priority (AP)                     │
└─────────────────────┬────────────────────────────────┘
                      ▼
┌──────────────────────────────────────────────────────┐
│ STEP 6: Optimization (Optimisasi)                     │
│  - Countermeasure identification                       │
│  - Risk reduction & prevention control                │
└─────────────────────┬────────────────────────────────┘
                      ▼
┌──────────────────────────────────────────────────────┐
│ STEP 7: Results Documentation (Dokumentasi Hasil)     │
│  - FMEA worksheet, lessons learned, sign-off           │
└──────────────────────────────────────────────────────┘
```

**SOP Implementasi Lapangan:**

1. **Pembentukan Tim Core FMEA** — minimal 5 anggota: *Design Responsible*, *Manufacturing Engineering*, *Quality Assurance*, *Supplier Quality*, dan *Reliability Engineer*. Tim harus telah mengikuti pelatihan AIAG/VDA FMEA Practitioner bersertifikat.
2. **Baseline Data Collection** — ekstraksi data dari CMMS (*Computerized Maintenance Management System*), histori NCR (*Non-Conformance Report*), dan *warranty claim database* minimal 24 bulan terakhir.
3. **Facilitated FMEA Workshop** — sesi intensif 3–5 hari dengan moderator bersertifikat untuk analisis *Design FMEA* (DFMEA) atau *Process FMEA* (PFMEA).
4. **Validasi AP Score** — verifikasi skor menggunakan tabel referensi resmi AIAG/VDA untuk menjamin konsistensi lintas-proyek.
5. **Integrasi dengan APQP/PPAP** — hasil FMEA menjadi input wajib untuk Production Part Approval Process sesuai IATF 16949:2016 Klausul 8.5.6.1.
6. **Periodic Review** — revisi FMEA setiap 12 bulan atau saat发生 *engineering change* / *supplier change*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Studi kasus ini mengintegrasikan konteks komponen otomotif dari Bizeli & Terazzi (2024) dengan data perawatan mesin CNC milling yang dirujuk dari Saputra & Sukmono (2024, DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)). Fokus pada lini produksi *machining* komponen *transmission housing* dengan 5 *failure mode* utama:

| No | Failure Mode (Komponen) | $S$ | $O$ | $D$ | RPN |
|----|--------------------------|-----|-----|-----|-----|
| F1 | Spindle bearing seizure | 9 | 5 | 6 | **270** |
| F2 | Ball screw backlash berlebih | 8 | 6 | 7 | **336** |
| F3 | Coolant pump failure | 7 | 4 | 8 | **224** |
| F4 | Tool holder runout deviation | 8 | 5 | 5 | **200** |
| F5 | Servo motor encoder drift | 9 | 3 | 7 | **189** |

### 4.1 Perhitungan Step-by-Step

**Failure Mode F1 — Spindle Bearing Seiz