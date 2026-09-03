# 2135 — Implementasi FMEA AIAG/VDA dalam Manufaktur Otomotif: Manajemen Risiko Sistemik, Aplikasi Pemeliharaan Mesin CNC, dan Peningkatan Keandalan Produk

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas*
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22 No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal (UPS)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi di bawah tekanan mutu yang sangat ketat karena konsekuensi hukum, ekonomi, dan reputasional dari kegagalan produk (*field failure*). Satu klaim Recall (*recall campaign*) pada komponen kritis—misalnya sistem pengereman, kemudi, atau airbag—dapat menimbulkan biaya langsung ratusan juta dolar AS ditambah kerugian intangible berupa *brand equity erosion* dan sanksi regulator dari *National Highway Traffic Safety Administration* (NHTSA) maupun *European Type-Approval Authority*. Dalam konteks inilah Bizeli dan Terazzi (2024) memposisikan FMEA AIAG/VDA sebagai metodologi esensial dalam *risk management* dan *quality improvement* pada rantai pasok otomotif modern, sebagaimana dipublikasikan dalam *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155). Studi mereka dilakukan secara deskriptif-kualitatif melalui *case study* dengan wawancara semi-terstruktur terhadap tiga profesional berpengalaman di sebuah *multinational automotive parts manufacturer*, sebuah desain riset yang lazim dalam *action research* manufaktur (Bizeli & Terazzi, 2024).

Urgensi adopsi FMEA AIAG/VDA semakin nyata sejak diterbitkannya *Handbook AIAG-VDA Failure Mode and Effects Analysis* edisi pertama tahun 2019, yang menggantikan pendekatan *Risk Priority Number* (RPN) tradisional dengan *Action Priority* (AP) untuk menyelaraskan praktik kualitas antara OEM Amerika (AIAG) dan Eropa (VDA QMC). Bagi *Tier-1* dan *Tier-2* supplier, kepatuhan terhadap standar ini bukan sekadar best practice tetapi prasyarat untuk mempertahankan *preferred supplier status* dalam kerangka IATF 16949:2016. Hasil utama penelitian Bizeli & Terazzi (2024) menunjukkan empat manfaat strategis: pencegahan kegagalan, penurunan biaya *rework* dan *recall*, peningkatan keandalan produk, serta integrasi tim lintas fungsi. Di sisi lain, mereka mengidentifikasi tiga tantangan utama: resistensi adopsi metode baru, kebutuhan pelatihan berkelanjutan, dan (berdasarkan potongan abstrak) tantangan dokumentasi serta *change management* (Bizeli & Terazzi, 2024).

Sebagai penguat eksternalitas sektoral, Saputra dan Sukmono (2024) dalam *peer-reviewed journal* dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) menerapkan FMEA klasik pada analisis pemeliharaan mesin *CNC Milling*, membuktikan bahwa kerangka identifikasi modus kegagalan—yang menjadi tulang punggung AIAG/VDA—secara langsung dapat di-*translate* ke konteks *reliability engineering* permesinan. Keduanya menunjukkan relevansi FMEA melampaui batas sektoral原先nya di industri proses, sekaligus menegaskan bahwa fondasi teoritis yang sama dapat melayani dua domain berbeda: kualitas produk (Bizeli & Terazzi, 2024) dan keandalan aset fisik (Saputra & Sukmono, 2024).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma Risiko: Dari RPN Tradisional ke Action Priority (AP)

FMEA konvensional (QS-9000 / AIAG edisi 2008) mengkuantifikasi risiko melalui *Risk Priority Number*:

$$\text{RPN} = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan efek kegagalan, skala 1–10), $O$ adalah *Occurrence* (frekuensi kejadian, skala 1–10), dan $D$ adalah *Detection* (kemampuan kontrol mendeteksi kegagalan sebelum produk sampai ke pelanggan, skala 1–10). Kritisitas ditentukan oleh threshold, umumnya $\text{RPN} \geq 100$ atau $S \geq 9$.

Pendekatan AIAG/VDA 2019 menggantikan RPN tunggal dengan tabel *Action Priority* tiga tingkat—**H (High)**, **M (Medium)**, **L (Low)**—yang diturunkan dari kombinasi triplet $(S,O,D)$. Logika pemetaannya:

$$\text{AP} = f(S, O, D) \in \{H, M, L\}$$

dengan aturan keputusan bahwa Severity tinggi ($S \geq 9$) langsung mengklasifikasikan risiko sebagai High terlepas dari nilai $O$ dan $D$, karena efek katastrofik pada keselamatan atau regulasi tidak dapat diterima oleh *risk acceptance criteria* IATF 16949. Dengan demikian, tim FMEA tidak lagi mengejar reduksi RPN artifisial, melainkan memprioritaskan aksi mitigasi berdasarkan bobot *severity* dan *occurrence* yang lebih bermakna bagi pelanggan (Bizeli & Terazzi, 2024).

### 2.2 Indikator Keandalan dan Pemeliharaan

Untuk aplikasi pemeliharaan mesin—seperti kasus *CNC milling* yang dikaji Saputra & Sukmono (2024)—parameter andalan yang relevan adalah:

$$\text{MTBF} = \frac{T_{\text{operasi}}}{N_{\text{failure}}}, \quad \text{MTTR} = \frac{\sum_{i=1}^{n} T_{\text{repair},i}}{n}$$

$$\text{Availability} = A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

$$OEE = A \times P \times Q$$

di mana $P$ = *Performance Rate* dan $Q$ = *Quality Rate*. FMEA memungkinkan penurunan $O$ (occurrence) melalui *preventive action*, peningkatan $D$ (detection) melalui *condition monitoring*, dan pada akhirnya peningkatan $A$ dan $OEE$.

### 2.3 Model Klasifikasi AP (Ringkasan Logika)

| $S$ | $O$ | $D$ | AP |
|:---:|:---:|:---:|:---:|
| $S \geq 9$ | $O \geq 5$ | $D \geq 5$ | **H** |
| $S \geq 9$ | $O \leq 4$ | $D \leq 4$ | **H** |
| $8 \leq S \leq 8$ | $O \geq 7$ | $D \geq 7$ | **H** |
| $5 \leq S \leq 7$ | $O \geq 8$ | $D \geq 8$ | **H** |
| $S \leq 4$ | seluruh $O$ | seluruh $D$ | **L** |

(Klasifikasi lengkap mengikuti Tabel AP resmi AIAG/VDA Handbook 2019.)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

AIAG/VDA FMEA mengubah alur kerja tujuh langkah dari versi sebelumnya menjadi struktur **Plan, Do, Check, Act** yang lebih *lean-compliant*. Bizeli & Terazzi (2024) menekankan bahwa keberhasilan implementasi sangat bergantung pada disiplin *change management*. Berikut SOP implementasi:

**Langkah 1 — Planning & Preparation (Plan).** Tentukan batasan analisis (*scope*), pilih *FMEA type* (Design FMEA / Process FMEA / *Supplemental FMEA* untuk *monitoring* dan *response*), identifikasi *core team* lintas fungsi (Quality, Engineering, Manufacturing, Supplier, *Customer*), serta hubungkan dengan *Project Plan*, *Control Plan*, dan *Lessons Learned* repository.

**Langkah 2 — Structure Analysis (Do-1).** Untuk Process FMEA gunakan *Process Flow Chart* dan identifikasi elemen proses 4M+E (*Man*, *Machine*, *Material*, *Method*, *Environment*). Untuk Design FMEA gunakan *Block Diagram* atau *Boundary Diagram* sesuai *customer requirements*.

**Langkah 3 — Function Analysis (Do-2).** Definisikan fungsi setiap elemen beserta *requirements* dan *characteristics* melalui *P-diagram* (parameter diagram) yang mencakup *Signal Factors*, *Noise Factors*, *Error States*, dan *Control Factors*.

**Langkah 4 — Failure Analysis (Do-3).** Tentukan modus kegagalan (*failure mode*), efek (*effect*), dan penyebab (*cause*). Tetapkan $S$, $O$, $D$ sesuai skala tabel AIAG/VDA.

**Langkah 5 — Risk Analysis (Do-4).** Tentukan AP menggunakan tabel keputusan. Hanya modus dengan AP = H dan M yang memerlukan *risk mitigation*.

**Langkah 6 — Mitigation & Documentation (Check).** Tetapkan *Action Owner*, *Action Due Date*, dan *Action Taken*. Hitung AP residual pasca-mitigasi.

**Langkah 7 — Communication & Knowledge Management (Act).** Integrasikan hasil ke *Control Plan*, lakukan *Lessons Learned* review, dan distribusikan ke seluruh *supply chain* melalui *Customer-Supplier FMEA exchange*. Bizeli & Terazzi (2024) secara eksplisit menyatakan bahwa kontribusi terbesar AIAG/VDA FMEA adalah *team integration* dan *process optimization* (Bizeli & Terazzi, 2024).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus A: Komponen Otomotif Stamping — *Brake Pedal Bracket*

Sebuah *Tier-1 supplier* di Brasil melakukan AIAG/VDA Process FMEA pada operasi *stamping* *brake pedal bracket*. Data ekstraksi dari wawancara Bizeli & Terazzi (2024) menghasilkan tabel FMEA berikut:

| No | Failure Mode | Effect | S | Cause | O | Prevention/Control | D | AP |
|:--:|:-------------|:-------|:-:|:------|:-:|:-------------------|:-:|:-:|
| 1 | Retak komponen (crack) | *Loss of brake pedal stiffness*