# 2919 — Analisis Kelayakan dan Strategi Implementasi FMEA AIAG/VDA pada Rantai Pasok Manufaktur Otomotif untuk Peningkatan Keandalan Produk

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global merupakan salah satu sektor manufaktur dengan tingkat kompleksitas tertinggi, ditandai oleh integrasi rantai pasok multi-tier yang melibatkan ribuan pemasok komponen (Tier-1, Tier-2, hingga Tier-n). Dalam konteks ini, manajemen risiko kualitas bukan sekadar praktik rekayasa, melainkan kebutuhan strategis yang menentukan keberlangsungan bisnis. Bisnis dkk. (2024) dalam studi mereka yang dipublikasikan di *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155) menyoroti bahwa penerapan **FMEA AIAG/VDA** (Automotive Industry Action Group/Verband der Automobilindustrie) pada sebuah *multinational automotive parts manufacturer* mampu mendorong pencegahan kegagalan secara sistematis, menurunkan biaya *rework* dan *recall*, serta meningkatkan keandalan produk secara terukur.

Urgensi implementasi metodologi ini diperkuat oleh data empiris yang dihimpun Saputra dan Sukmono (2024) dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248), yang menunjukkan bahwa analisis pemeliharaan mesin *CNC Milling* berbasis FMEA dapat menurunkan tingkat kegagalan mekanis secara signifikan melalui identifikasi dini terhadap mode kegagalan kritis seperti keausan *spindle*, kerusakan *ball screw*, dan degradasi sistem pelumasan. Kedua literatur ini saling melengkapi: Bizeli & Terazzi (2024) memberikan perspektif makro tentang tata kelola risiko lintas fungsi, sedangkan Saputra & Sukmono (2024) memberikan bukti kuantitatif pada level mesin/peralatan.

Konteks industri yang melatarbelakangi penelitian Bizeli & Terazzi (2024) adalah transisi paradigma FMEA dari pendekatan klasik berbasis *Risk Priority Number* (RPN) menuju pendekatan **Action Priority (AP)** yang lebih kontekstual dan berorientasi pada mitigasi. Transformasi ini dipicu oleh kelemahan struktural RPN yang cenderung mendistorsi prioritas risiko karena sifat perkalian tiga variabel yang tidak linier dan ambiguitas dalam *Detection rating*. Dengan standar AIAG/VDA yang diterbitkan pada 2019 dan diadopsi secara progresif oleh OEM global, perusahaan multinasional di sektor零部件 (*peças*) otomotif dituntut untuk melakukan *re-skilling* masif terhadap *cross-functional team* yang terdiri atas insinyur desain, manufaktur, kualitas, dan *supplier quality engineer*.

Secara ekonomis, biaya *recall* kampanye di industri otomotif dapat mencapai USD 1–7 miliar per kejadian untuk produk dengan volume tinggi, sehingga investasi dalam *front-loading* kualitas melalui FMEA memiliki *payback period* yang sangat pendek. Hal ini dikonfirmasi oleh temuan Bizeli & Terazzi (2024) bahwa salah satu manfaat paling konkret dari implementasi FMEA AIAG/VDA adalah **reduksi biaya terkait pengerjaan ulang (*rework*) dan penarikan kembali produk (*recalls*)**, selain kontribusi positif terhadap integrasi tim dan optimalisasi proses produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Evolusi FMEA: Dari RPN ke Action Priority (AP)

FMEA klasik yang diperkenalkan oleh Ford Motor Company pada 1977 menggunakan formula **Risk Priority Number (RPN)** sebagai berikut:

$$RPN = S \times O \times D$$

di mana:
- $S$ = **Severity** (Tingkat Keparahan), skala 1–10
- $O$ = **Occurrence** (Tingkat Kejadian), skala 1–10
- $D$ = **Detection** (Tingkat Kesulitan Deteksi), skala 1–10

Namun, Bizeli & Terazzi (2024) menggarisbawahi bahwa pendekatan RPN memiliki keterbatasan karena distribusi nilai RPN tidak normal dan cenderung mengelompok pada nilai tertentu, sehingga sulit memprioritaskan risiko secara proporsional. Sebagai gantinya, standar **AIAG/VDA (2019)** memperkenalkan **Action Priority (AP)** dengan tiga tingkatan: **High (H), Medium (M), Low (L)**.

Fungsi AP dapat diformulasikan secara *fuzzy logic* sebagai pemetaan dari triplet $(S, O, D)$ ke label prioritas:

$$AP: \{1,2,...,10\}^3 \rightarrow \{H, M, L\}$$

dengan aturan keputusan berbasis tabel referensi yang dikurangi (*reduced reference table*) dan suplementer (*supplementary table*).

### 2.2. Formulasi Kuantitatif Dampak Ekonomi

Untuk mengkuantifikasi manfaat ekonomi FMEA, kita dapat menggunakan formula *Expected Loss Cost* (ELC):

$$ELC = \sum_{i=1}^{n} O_i \times C_i \times (1 - D_{eff,i})$$

di mana:
- $O_i$ = probabilitas kejadian kegagalan mode $i$ per siklus produksi
- $C_i$ = biaya satuan kegagalan mode $i$ (mencakup *rework*, *scrap*, garansi)
- $D_{eff,i}$ = efektivitas deteksi saat ini (antara 0–1)
- $n$ = jumlah mode kegagalan yang teridentifikasi

Setelah implementasi FMEA, parameter $O_i$ menurun karena tindakan pencegahan, dan $D_{eff,i}$ meningkat karena tindakan deteksi:

$$\Delta ELC = ELC_{before} - ELC_{after} = \sum_{i=1}^{n} (O_{i,before} \cdot C_i \cdot (1 - D_{eff,i,before}) - O_{i,after} \cdot C_i \cdot (1 - D_{eff,i,after}))$$

Formula *Return on Investment* (ROI) untuk program FMEA menjadi:

$$ROI_{FMEA} = \frac{\Delta ELC - C_{FMEA}}{C_{FMEA}} \times 100\%$$

di mana $C_{FMEA}$ adalah total biaya implementasi (pelatihan, perangkat lunak, alokasi SDM).

### 2.3. Model Keandalan Sistem (Weibull)

Saputra & Sukmono (2024) menggunakan pendekatan keandalan berbasis distribusi Weibull untuk menganalisis waktu kegagalan mesin CNC, dengan fungsi keandalan:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

di mana:
- $\eta$ = *scale parameter* (karakteristik usia)
- $\beta$ = *shape parameter* (tingkat keausan: $\beta < 1$ untuk *infant mortality*, $\beta = 1$ untuk kegagalan acak, $\beta > 1$ untuk *wear-out*)

*Mean Time To Failure* (MTTF) didefinisikan sebagai:

$$MTTF = \eta \cdot \Gamma\left(1 + \frac{1}{\beta}\right)$$

di mana $\Gamma(\cdot)$ adalah fungsi gamma.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Kerangka Implementasi FMEA AIAG/VDA

Berdasarkan Bizeli & Terazzi (2024), prosedur implementasi mengikuti tujuh langkah utama dengan struktur **Plan-Do-Check-Act (PDCA)** yang diperkuat dengan kolaborasi lintas fungsi:

**Langkah 1 — Pembentukan *Cross-Functional Team* (CFT)**
Tim inti terdiri atas: *Design Engineer*, *Manufacturing Engineer*, *Quality Engineer*, *Supplier Quality Engineer*, *Reliability Engineer*, dan *Program Manager*. Keragaman fungsi ini memastikan perspektif holistik dalam identifikasi risiko.

**Langkah 2 — Definisi Cakupan dan Batas Sistem**
Menentukan *boundary diagram* yang mencakup antarmuka fisik, fungsional, dan lingkungan. Tahap ini krusial untuk mencegah *scope creep* dan duplikasi analisis.

**Langkah 3 — Analisis Struktur (*Structure Analysis*)**
Menggunakan diagram pohon (tree diagram) untuk dekomposisi sistem menjadi subsistem, komponen, dan antarmuka. Output berupa **Structure Tree** yang menjadi dasar analisis selanjutnya.

**Langkah 4 — Analisis Fungsi (*Function Analysis*)**
Mendokumentasikan fungsi setiap elemen menggunakan format: `<Verb> + <Noun> + <Qualitative/Quantitative Specification>`. Contoh: *Memindahkan roda gigi dengan torsi 50 ± 5 Nm*.

**Langkah 5 — Analisis Kegagalan (*Failure Analysis*)**
Mengidentifikasi **Failure Mode** (apa yang salah), **Failure Cause** (mengapa salah), dan **Failure Effect** (dampak terhadap sistem/operator/pelanggan).

**Langkah 6 — Analisis Risiko (*Risk Analysis*)**
Pemberian rating $S$, $O$, $D$ oleh tim, kemudian penentuan **Action Priority (AP)** menggunakan tabel referensi AIAG/VDA. Mode kegagalan dengan AP=H wajib ditangani, AP=M ditangani jika sumber daya memungkinkan.

**Langkah 7 — Optimasi (*Risk Optimization*)**
Merumuskan **Action Plan** yang mencakup *Prevention Controls* (PC) dan *Detection Controls* (DC), penanggung jawab, tanggal target, dan status implementasi.

### 3.2. Diagram Alir Prosedur (Proses Logika)

```
┌─────────────────────────────────────────────────────────────┐
│ INISIASI PROGRAM PRODUK BARU / MODIFIKASI                   │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Pembentukan Cross-Functional Team (CFT)             │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: Definisi Scope, Boundary, Asumsi                    │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: Structure Analysis (Block → Sistem → Subsistem)     │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: Function Analysis (Fungsi, Antarmuka, Batas)         │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: Failure Analysis (Mode, Effect, Cause)               │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 6: Risk Analysis (S, O, D) → Tabel AP → Prioritas      │
└────────────────────────┬────────────────────────────────────┘
                         ▼
         ┌───────────────┴───────────────┐
         │                               │
         ▼                               ▼
  ┌─────────────┐                 ┌─────────────┐
  │ AP = HIGH   │                 │ AP = L/M    │
  │ → Wajib     │                 │ → Tinjau    │
  │   Mitigasi  │                 │   Lanjutan  │
  └──────┬──────┘                 └──────┬──────┘
         ▼                               ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 7: Risk Optimization & Action Plan (PC, DC, Owner,     │
│         Target Date, Completion Date, Verification)         │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ CLOSEOUT & LESSONS LEARNED → Knowledge Management Repository│
└─────────────────────────────────────────────────────────────┘
```

### 3.3. SOP Pemeliharaan Preventif Berbasis FMEA (Integrasi dengan Saputra & Sukmono, 2024)

Untuk mesin CNC Milling, prosedur operasional standar pemeliharaan berbasis FMEA mencakup:

1. **Inspeksi Harian**: Pemeriksaan visual pelumasan, suhu *spindle*, getaran abnormal
2. **Inspeksi Mingguan**: Pengukuran *runout* spindle, verifikasi tekanan hidrolik
3. **Inspeksi Bulanan**: Pengujian *ball screw backlash*, kalibrasi *linear encoder*
4. **Inspeksi Tahunan**: *Overhaul* sistem pendingin, *replacement* suku cadang kritis berdasarkan analisis $\beta$ Weibull

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus: Komponen *Brake Caliper* Otomotif

Berdasarkan konteks Bizeli & Terazzi (2024) pada manufaktur零部件 otomotif, kita asumsikan sebuah komponen *brake caliper* yang diproduksi dengan volume **120.000 unit/tahun**. Dari hasil FMEA awal, diidentifikasi 4 mode kegagalan dominan yang dirangkum dalam Tabel 1.

**Tabel 1. Profil Risiko Empat Mode Kegagalan Dominan pada *Brake Caliper***

| No | Failure Mode | $S$ | $O$ | $D$ | $RPN$ (lama) | AP (AIAG/VDA) |
|---|---|---|---|---|---|---|
| F1 | Retak pada housing akibat *porosity* | 9 | 6 | 7 | 378 | **High (H)** |
| F2 | Kebocoran sistem hidrolik | 10 | 4 | 5 | 200 | **Medium (M)** |
| F3 | Dimensi *piston bore* di luar toleransi | 8 |