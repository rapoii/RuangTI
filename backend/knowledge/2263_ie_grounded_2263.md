# 2263 — Manajemen Risiko Kegagalan Manufaktur Otomotif melalui Pendekatan AIAG/VDA FMEA: Integrasi Standar, Formulasi Kuantitatif, dan Optimasi Proses Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi tekanan kompetisi yang semakin kompleks, terutama dalam rantai pasok komponen yang menuntut presisi tinggi, keandalan jangka panjang, dan kepatuhan terhadap standar mutu internasional seperti IATF 16949. Dalam konteks ini, Failure Mode and Effects Analysis (FMEA) telah lama menjadi instrumen fundamental dalam program rekayasa keandalan (*reliability engineering*) dan manajemen risiko mutu (*quality risk management*). Bizeli dan Terazzi (2024) dalam studi kasusnya di sebuah perusahaan multinasional fabricante de peças automotivas menyoroti bahwa penerapan FMEA bukan sekadar aktivitas dokumentasi, melainkan sebuah pendekatan sistematis untuk mencegah failures, mengurangi biaya rework dan recall, serta meningkatkan reliabilitas produk [DOI: 10.31510/infa.v22i1.2155]. Studi tersebut juga menemukan bahwa salah satu tantangan signifikan adalah resistensi terhadap adopsi metode baru, kebutuhan pelatihan berkelanjutan, serta integrasi lintas fungsi yang belum optimal.

Transisi paradigma dari FMEA klasik (AIAG, 2008) menuju AIAG/VDA FMEA Handbook yang dipublikasi pada Juni 2019 menjadi tonggak penting. Kolaborasi antara Automotive Industry Action Group (AIAG) asal Amerika Serikat dan Verband der Automobilindustrie (VDA) asal Jerman ini menghasilkan pendekatan yang lebih komprehensif, menggantikan paradigma Risk Priority Number (RPN) tunggal dengan sistem Action Priority (AP) yang mempertimbangkan Severity (S), Occurrence (O), dan Detection (D) secara simultan dalam sebuah *risk matrix* terstruktur. Pergeseran ini sangat relevan mengingat kompleksitas sistem *powertrain*, *electronic control unit* (ECU), dan komponen sensor pada kendaraan modern, di mana satu kegagalan kecil pada Tier-3 supplier dapat memicu efek domino pada lini perakitan OEM.

Saputra dan Sukmono (2024) turut memberikan konteks aplikatif pada ranah pemeliharaan mesin CNC milling, di mana FMEA digunakan untuk memprioritaskan режим kegagalan pada komponen kritis seperti *spindle*, *ball screw*, dan sistem hidrolik [DOI: 10.21070/ups.8248]. Keduanya sepakat bahwa pendekatan FMEA membantu teknisi maintenansi mengidentifikasi режим kegagalan dengan tingkat risiko tertinggi, sehingga alokasi jadwal pemeliharaan preventif dan sumber daya dapat dilakukan secara lebih rasional. Urgensi ekonomi dari implementasi FMEA ini tecermin dari data industri: rata-rata satu insiden recall pada komponen otomotif di pasar Amerika Serikat menelan biaya antara USD 2–10 juta per campaign, belum termasuk kerusakan reputasi merek dan potensi litigasi. Oleh karena itu, kapasitas FMEA sebagai *proactive risk mitigation tool* memiliki nilai strategis yang sangat tinggi bagi organisasi yang beroperasi dalam ekosistem Just-In-Time (JIT) dan lean manufacturing.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Paradigma Klasik: Risk Priority Number (RPN)

Dalam FMEA konvensional AIAG (edisi 2008), tingkat risiko setiap режим kegagalan dikuantifikasi melalui formula Risk Priority Number yang didefinisikan sebagai:

$$\text{RPN} = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan dampak kegagalan terhadap pelanggan akhir), $O$ adalah *Occurrence* (frekuensi atau probabilitas occurrence режим kegagalan), dan $D$ adalah *Detection* (kemampuan sistem kontrol mendeteksi режим sebelum produk sampai ke pelanggan). Ketiga variabel ini menggunakan skala ordinal 1–10, sehingga RPN secara teoritis memiliki rentang 1 hingga 1000. Ambang batas kritis yang lazim digunakan dalam industri adalah $\text{RPN} \geq 100$ atau nilai $S \geq 8$, yang menandakan режим kegagalan memerlukan tindakan mitigasi segera.

### 2.2 Paradigma Modern: Action Priority (AP) AIAG/VDA

Pendekatan AIAG/VDA FMEA (2019) menggantikan dominansi RPN tunggal dengan sistem Action Priority yang mempertimbangkan seluruh kombinasi triplet $(S, O, D)$ dalam tabel keputusan (*Action Priority Matrix*). Formula RPN tetap digunakan sebagai *supporting metric*, tetapi keputusan prioritas tidak lagi ditentukan semata-mata oleh nilai numerik tertinggi. Action Priority diklasifikasikan menjadi tiga tingkatan:

$$\text{AP} = f(S, O, D) \in \{\text{High (H)}, \text{Medium (M)}, \text{Low (L)}\}$$

di mana $f(\cdot)$ adalah fungsi pemetaan berbasis tabel lookup yang telah distandarisasi. Sebagai contoh, режим kegagalan dengan $S = 9$, $O = 5$, $D = 4$ pada matriks AP akan jatuh pada kategori **High**, sedangkan режим dengan $S = 6$, $O = 4$, $D = 6$ jatuh pada **Medium**, meskipun secara komputasi RPN keduanya berada di atas ambang 100. Logika ini mengoreksi kelemahan fundamental RPN klasik, di mana режим dengan $S$ rendah namun $O$ dan $D$ tinggi dapat tampak kritis secara numerik, padahal dampaknya terhadap keselamatan pelanggan tidak signifikan.

### 2.3 Formula Pendukung dalam Konteks Pemeliharaan CNC

Saputra dan Sukmono (2024) menggunakan turunan RPN untuk menentukan prioritas jadwal pemeliharaan preventif mesin CNC milling. Interval pemeliharaan optimal untuk komponen kritis $i$ dapat diformulasikan sebagai:

$$T_i = T_{\text{ref},i} \cdot \left( \frac{\text{RPN}_{\text{ref}}}{\text{RPN}_i} \right)^{\alpha}$$

di mana $T_{\text{ref},i}$ adalah interval pemeliharaan referensi pabrikan, $\text{RPN}_{\text{ref}}$ adalah nilai RPN referensi (umumnya 100), $\text{RPN}_i$ adalah nilai RPN aktual режим kegagalan komponen $i$, dan $\alpha$ adalah koefisien sensitivitas yang umumnya berkisar 0,5–1,0 bergantung pada pengalaman operasi dan historis downtime mesin [DOI: 10.21070/ups.8248].

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tujuh Langkah AIAG/VDA FMEA

Pendekatan AIAG/VDA menetapkan prosedur tujuh langkah yang lebih rigid dan terstruktur dibanding metode 5-step klasik. Berikut adalah SOP berdasarkan temuan Bizeli dan Terazzi (2024) yang disesuaikan dengan praktik di industri komponen otomotif:

**Langkah 1 — Planning and Preparation:** Mendefinisikan scope analisis, menyusun *FMEA cross-functional team* yang terdiri dari representasi desain, manufaktur, kualitas, supplier, dan字段 layanan purna jual, serta menentukan level analisis (system, subsystem, component).

**Langkah 2 — Structure Analysis:** Mengidentifikasi elemen sistem, fungsi elemen, dan hubungan antar-elemen menggunakan *Structure Tree* atau *Block Diagram*. Untuk komponen automotive seperti *brake caliper assembly*, ini melibatkan dekomposisi mulai dari system level (vehicle) hingga component level (piston seal).

**Langkah 3 — Function Analysis:** Mengartikulasikan fungsi teknis dan non-teknis setiap elemen dalam formulasi *verb-noun* (misal: "mengirim tekanan hidrolik", "mencegah ingress kontaminan"), yang kemudian dipetakan dalam *Function Network* dan *Function Tree*.

**Langkah 4 — Failure Analysis:** Mengidentifikasi режим kegagalan potensial, efeknya (*local effect*, *next higher level effect*, *end effect*), serta cause-nya menggunakan *P-diagram* dan *5-Why Analysis*.

**Langkah 5 — Risk Analysis:** Memberikan skor S, O, D dan menentukan Action Priority berdasarkan tabel AP. Catatan penting dari Bizeli dan Terazzi (2024): terjadi pergeseran orientasi dari "mendapatkan RPN tertinggi" menjadi "mengidentifikasi режим dengan AP tertinggi".

**Langkah 6 — Optimization:** Menentukan tindakan mitigasi (prevention dan detection control), assign responsible person dan target completion date, serta melakukan *effectivity evaluation* terhadap tindakan yang diambil.

**Langkah 7 — Results Documentation:** Mendokumentasikan seluruh output FMEA dalam sistem PFMEA (Process FMEA) atau DFMEA (Design FMEA) yang terintegrasi dengan Control Plan dan Operations Sheet.

### 3.2 Diagram Alir Implementasi

```
┌──────────────────────────┐
│ Planning & Preparation   │
│ (Tim Lintas Fungsi)      │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│ Structure Analysis       │
│ (Block Diagram/Tree)     │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│ Function Analysis        │
│ (Function Tree/Network)  │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│ Failure Analysis         │
│ (P-Diagram, 5-Why)       │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│ Risk Analysis (S, O, D)  │
│ → AP: H / M / L          │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│ Optimization & Mitigation│
│ (Prevention + Detection) │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│ Documentation & Review   │
│ (Control Plan linkage)   │
└──────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Proses CNC Milling Komponen Brake Disc

Berdasarkan kerangka studi Saputra dan Sukmono (2024) [DOI: 10.21070/ups.8248] yang diterapkan pada konteks komponen automotive dari paper Bizeli dan Terazzi (2024) [DOI: 10.31510/infa.v22i1.2155], dilakukan simulasi kuantitatif pada lima режим kegagalan utama proses CNC milling komponen *brake disc* dari besi tuang (*cast iron*). Data input menggunakan skala penilaian FMEA standar industri:

| No | Режим Kegagalan (Failure Mode) | Severity (S) | Occurrence (O) | Detection (D) |
|----|-------------------------------|--------------|----------------|---------------|
| 1 | Keausan pahat (tool wear) menyebabkan dimensi out of tolerance | 7 | 6 | 4 |
| 2 | Getaran spindle berlebih menyebabkan *chatter marks* pada permukaan | 8 | 5 | 6 |
| 3 | Kegagalan sistem pendingin (*coolant failure*)导致 thermal deformation | 8 | 3 | 5 |
| 4 | Salah clamping workpiece menyebabkan displacement saat machining | 7 | 4 | 3 |
| 5 | Kesalahan program CNC (G-code error)导致 dimensi catastrophic | 9 | 2 | 7 |

### 4.2 Perhitungan RPN Tradisional

Menggunakan formula RPN klasik:

$$\text{RPN}_i = S_i \times O_i \times D_i$$

**Perhitungan Step-by-Step:**

- Режим 1: $\text{RPN}_1 = 7 \times 6 \times 4 = 168$
- Режим 2: $\text{RPN}_2 = 8 \times 5 \times 6 = 240$
- Режим 3: $\text{RPN}_3 = 8 \times 3 \times 5 = 120$
- Режим 4: $\text{RPN}_4 = 7 \times 4 \times 3 = 84$
- Режим 5: $\text{RPN}_5 = 9 \times 2 \times 7 = 126$

Berdasarkan ambang kritis RPN ≥ 100, режим 1, 2, 3, dan 5 memerlukan tindakan mitigasi prioritas. Режим 2 (chatter marks) menjadi prioritas tertinggi dengan RPN = 240.

### 4.3 Penilaian Action Priority (AP) AIAG/VDA

Mengacu pada Tabel Action Priority AIAG/VDA FMEA Handbook 2019, kelima режим dievaluasi ulang:

| No | Triplet $(S,O,D)$ | Klasifikasi AP | Justifikasi |
|----|-------------------|----------------|-------------|
| 1 | $(7, 6, 4)$ | **Medium** | S moderately high, O medium, D well-controlled |
| 2 | $(8, 5, 6)$ | **High** | S high dengan detection capability rendah-menengah |
| 3 | $(8, 3, 5)$ | **Medium** | S high, O rendah, D moderate |
| 4 | $(7, 4, 3)$ | **Medium** | S high, O medium, D strong |
| 5 | $(9, 2, 7)$ | **Medium** | S catastrophic, O sangat rendah, D rendah |

### 4.4 Perbandingan dan Interpretasi Manajerial

Tampak pergeseran prioritas yang signifikan: режим 1 yang secara RPN terlihat kritis (168) justru turun ke prioritas Medium karena kontrol deteksinya sudah baik,