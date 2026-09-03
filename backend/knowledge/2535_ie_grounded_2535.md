# 2535 — FMEA AIAG/VDA: Rekayasa Keandalan Manufaktur Otomotif dan Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan kompetitif yang semakin kompleks sepanjang dekade terakhir. Bizeli dan Terazzi (2024) dalam studi kasusnya di *Revista Interface Tecnológica* (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)) mendokumentasikan bagaimana sebuah perusahaan multinasional produsen komponen otomotif mengimplementasikan metode **Failure Mode and Effects Analysis (FMEA)** berbasis standar **AIAG/VDA** yang dirilis pada tahun 2019. Standar ini merupakan kolaborasi antara Automotive Industry Action Group (AIAG) asal Amerika Serikat dan Verband der Automobilindustrie (VDA) asal Jerman, yang menggabungkan pendekatan tradisional FMEA dengan metodologi *six sigma* Jerman.

Konteks urgensi implementasi FMEA AIAG/VDA tidak terlepas dari meningkatnya tuntutan kualitas dalam rantai pasok otomotif. Standar **IATF 16949:2016** — yang menggantikan ISO/TS 16949 — secara eksplisit mensyaratkan penerapan *risk-based thinking* dan *preventive quality* di seluruh tier-1, tier-2, dan tier-3 suppliers. Berdasarkan data yang dihimpun oleh Bizeli dan Terazzi (2024), penerapan FMEA tradisional dengan *Risk Priority Number* (RPN) memiliki keterbatasan signifikan, di antaranya: (1) inkonsistensi dalam penilaian antar-tim, (2) sulitnya membedakan mode kegagalan dengan *severity* tinggi namun *detection* mudah, dan (3) kurangnya fokus pada tindakan preventif. AIAG/VDA menjawab keterbatasan ini melalui pendekatan **Action Priority (AP)** yang menggantikan RPN dengan matriks keputusan tiga dimensi.

Saputra dan Sukmono (2024) dalam *Peer-Reviewed Journal* (DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)) memperkuat relevansi FMEA dengan menerapkannya pada pemeliharaan mesin **CNC milling** di industri manufaktur presisi. Mereka menunjukkan bahwa downtime mesin CNC yang tidak terencana dapat menyebabkan kerugian produksi hingga **Rp 8–15 juta per jam** pada industri komponen kedirgantaraan dan otomotif presisi. Kedua paper ini saling melengkapi: paper pertama membahas aspek strategis-manajerial FMEA AIAG/VDA di level korporasi multinasional, sedangkan paper kedua memberikan perspektif taktis-operasional pada peralatan kritis.

Temuan kunci Bizeli dan Terazzi (2024) menyebutkan empat pilar manfaat: pencegahan kegagalan proaktif, pengurangan biaya *rework* dan *recall*, peningkatan keandalan produk, serta integrasi tim lintas-fungsi. Namun, tantangan yang diidentifikasi tidak kalah penting: resistensi karyawan terhadap perubahan metodologi, kebutuhan *continuous training*, dan integrasi sistem dokumentasi digital. Aspek tantangan ini sering kali menjadi *root cause* kegagalan transformasi kualitas di industri menengah, sehingga memerlukan strategi *change management* yang terstruktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Skala Penilaian dalam FMEA AIAG/VDA

FMEA AIAG/VDA 2019 mempertahankan tiga parameter dasar dari FMEA tradisional, dengan revisi pada rentang dan semantik penilaian:

| Parameter | Simbol | Rentang AIAG/VDA | Deskripsi |
|-----------|--------|------------------|-----------|
| Severity (Keparahan) | $S$ | 1–10 | Dampak kegagalan terhadap pelanggan/operasi |
| Occurrence (Kejadian) | $O$ | 1–10 | Frekuensi penyebab kegagalan terjadi |
| Detection (Deteksi) | $D$ | 1–10 | Kemampuan sistem deteksi mendeteksi mode kegagalan |

Skala **S** mengikuti panduan *Severity Matrix* AIAG/VDA dengan tabel referensi khusus untuk aplikasi otomotif, misalnya $S=8$ untuk kehilangan fungsi utama yang memengaruhi *vehicle drivability*, dan $S=10$ untuk risiko keselamatan (*safety-related failure*). Parameter **O** menggunakan *Occurrence Rating* berdasarkan tingkat parts-per-million (PPM) atau *failures per item* (FIT), sedangkan **D** menggunakan *Detection Rating* yang mempertimbangkan kemampuan *controls prevention* dan *controls detection*.

### 2.2. Formula Risk Priority Number (RPN) Tradisional

Sebelum AIAG/VDA 2019, RPN dihitung dengan persamaan:

$$RPN = S \times O \times D$$

Nilai $RPN$ berada dalam rentang $1 \leq RPN \leq 1000$. Ambang batas umum yang digunakan di industri adalah:

$$RPN_{threshold} = 100 \quad \text{(sangat umum di industri)}$$

Namun Bizeli dan Terazzi (2024) menekankan bahwa metode RPN memiliki kelemahan matematis yang signifikan. Sebagai contoh, dua kombinasi parameter yang berbeda:

$$RPN_1 = S_1 \cdot O_1 \cdot D_1 = 8 \times 4 \times 5 = 160$$
$$RPN_2 = S_2 \cdot O_2 \cdot D_2 = 5 \times 8 \times 4 = 160$$

Kedua kombinasi ini menghasilkan RPN identik meskipun memiliki karakteristik risiko yang berbeda secara fundamental. Kombinasi pertama memiliki *severity* lebih tinggi (lebih kritis), sedangkan kombinasi kedua memiliki *occurrence* lebih tinggi (lebih sering terjadi). Inilah salah satu kritik utama yang dijawab AIAG/VDA.

### 2.3. Pendekatan Action Priority (AP) AIAG/VDA

AIAG/VDA 2019 menggantikan RPN dengan **Action Priority (AP)** yang merupakan fungsi diskret berbasis tabel lookup tiga dimensi:

$$AP = f_{lookup}(S, O, D) \in \{H, M, L\}$$

dengan klasifikasi:

$$AP = \begin{cases} H & \text{(High — wajib tindakan korektif segera)} \\ M & \text{(Medium — tindakan korektif direkomendasikan)} \\ L & \text{(Low — tindakan berdasarkan kebijakan perusahaan)} \end{cases}$$

Logika matematis AP memberikan bobot lebih tinggi pada **S** dibanding **O** dan **D**, karena risiko keselamatan (*safety*) harus menjadi prioritas utama. Sebagai ilustrasi kuantitatif dari paper Bizeli dan Terazzi (2024):

- $(S, O, D) = (9, 3, 4) \Rightarrow AP = H$ (kegagalan katastropik dengan deteksi sulit)
- $(S, O, D) = (6, 7, 5) \Rightarrow AP = M$ (kegagalan berulang dengan dampak sedang)
- $(S, O, D) = (3, 5, 7) \Rightarrow AP = L$ (dampak rendah dan deteksi mudah)

### 2.4. Formulasi Penilaian Risiko Pemeliharaan CNC

Saputra dan Sukmono (2024) mengembangkan formula kelayakan pemeliharaan berbasis FMEA dengan pendekatan **Availability** dan **Mean Time Between Failures (MTBF)**:

$$A(t) = \frac{MTBF}{MTBF + MTTR} = \frac{MTBF}{MTBF + MTTR}$$

di mana $MTTR$ adalah *Mean Time To Repair*. FMEA menentukan prioritas intervensi pemeliharaan melalui *criticality* gabungan:

$$C_i = \beta_i \cdot \alpha_i \cdot \lambda_i$$

dengan:
- $C_i$ = angka kritikalitas mode kegagalan ke-$i$
- $\beta_i$ = probabilitas kegagalan menyebabkan dampak ke-$i$ ($\beta \in [0,1]$)
- $\alpha_i$ = *failure rate* mode kegagalan ($1/\text{jam}$)
- $\lambda_i$ = durasi operasi komponen per siklus produksi (jam)

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Tahapan Implementasi FMEA AIAG/VDA

Berdasarkan Bizeli dan Terazzi (2024), implementasi FMEA AIAG/VDA mengikuti **tujuh langkah prosedural** yang terstruktur:

1. **Planning & Preparation** — Menentukan cakupan (DFMEA/PFMEA/MFMEA), tim lintas fungsi, dan *customer requirements*.
2. **Structure Analysis** — Menggunakan notasi **Block Diagram** dan indentur pohon produk.
3. **Function Analysis** — Menghubungkan fungsi elemen dengan karakteristik kualitas menggunakan *P-diagram* dan *QFD linkage*.
4. **Failure Analysis** — Mengidentifikasi **Failure Mode**, **Failure Cause**, dan **Failure Effect** untuk setiap fungsi.
5. **Risk Analysis** — Penilaian $S$, $O$, $D$ dan penentuan Action Priority (AP).
6. **Optimization** — Penentuan tindakan preventif dan detektif untuk mode kegagalan dengan AP=H dan AP=M.
7. **Results Documentation** — Pembuatan **FMEA Worksheet** dan *Control Plan* sesuai IATF 16949.

### 3.2. Diagram Alir SOP FMEA

```
┌─────────────────────────────────┐
│   Planning & Preparation        │
│   (Tujuan, Tim, Cakupan)        │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Structure Analysis            │
│   (Block Diagram, BOM)          │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Function Analysis             │
│   (P-Diagram, Function Net)     │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Failure Analysis              │
│   (FM, FC, FE identification)   │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Risk Analysis                 │
│   (S, O, D → AP determination)  │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Optimization                  │
│   (Action plan for AP=H, M)     │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│   Documentation & Control Plan  │
│   (IATF 16949 compliance)       │
└─────────────────────────────────┘
```

### 3.3. SOP Pemeliharaan CNC Berbasis FMEA

Saputra dan Sukmono (2024) menyusun SOP pemeliharaan prediktif sebagai berikut:

1. Inventarisasi seluruh subsistem CNC (spindle, ball-screw, ATC, sistem hidrolik, sistem pneumatik, dan panel kontrol).
2. Pengumpulan data historis failure log minimal 12 bulan.
3. Penilaian FMEA setiap subsistem dengan parameter $(S, O, D)$.
4. Perhitungan MTBF dan MTTR aktual vs target.
5. Penjadwalan *preventive maintenance* berdasarkan ranking criticality.
6. Verifikasi efektivitas melalui *mean time to next failure* pasca-intervensi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Kasus 1: DFMEA Komponen Otomotif (Sistem Pengereman)

Sebuah multinasional otomotif sedang mengembangkan modul **brake caliper** untuk kendaraan penumpang dengan target produksi 250.000 unit/tahun. Tim DFMEA mengidentifikasi salah satu mode kegagalan kritis:

| Parameter | Nilai | Justifikasi |
|-----------|-------|-------------|
| Failure Mode | Retak pada housing caliper | Fatigue failure pada casting |
| Failure Cause | Porositas mikro pada coran | Defect proses *gravity casting* |
| Failure Effect | Kebocoran fluida rem | Kehilangan fungsi pengereman |
| $S$ | 9 | Safety-related, *vehicle drivability* hilang |
| $O$ | 5 | 1 dari 10.000 unit pada 50.000 km |
| $D$ | 6 | Deteksi sulit tanpa X-ray CT |

**Perhitungan RPN tradisional:**
$$RPN = 9 \times 5 \times 6 = 270$$

**Penentuan Action Priority (AIAG/VDA 2019):**

Dengan kombinasi $(S=9, O=5, D=6)$, menurut tabel AP AIAG/VDA, hasilnya:
$$AP = H \text{ (High Priority)}$$

**Interpretasi manajerial:** Meskipun RPN=270 belum melampaui threshold 300 pada perusahaan tersebut, AIAG/VDA mengklasifikasikan ini sebagai **High Priority** karena $S=9$ mengindikasikan risiko keselamatan. Tindakan yang diperlukan: (a) implementasi *X-ray radiographic inspection* 100% untuk lot produksi, (b) revisi *process capability* target dari $C_{pk} \geq 1.33$ menjadi $C_{pk} \geq 1.67$, dan (c) Audit supplier coran setiap bulan.

**Perhitungan biaya kualitas (Cost of Poor Quality):**
$$\text{CoPQ}_{\text{recall}} = N_{units} \times (C_{repair} + C_{logistic} + C_{brand})$$

dengan $N_{units} = 250{,}000$, $C_{repair} = \text{Rp } 350{,}000$, $C_{logistic} = \text{Rp } 150{,}000$, dan $C_{brand} = \text{Rp } 200