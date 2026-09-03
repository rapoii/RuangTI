# 2391 — Implementasi FMEA AIAG/VDA dalam Industri Otomotif: Formulasi Risiko, Prosedur Rekayasa, dan Aplikasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22 No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal (UPS)*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi tekanan ganda yang semakin intensif di era Industri 4.0: di satu sisi, kompleksitas produk (electronic control unit, sensor ADAS, powertrain elektrifikasi) melonjak tajam, sementara di sisi lain, regulasi keselamatan dan emisi (IATF 16949:2016, UNECE WP.29) menuntut tingkat keandalan mendekati nol-defect. Dalam konteks inilah *Failure Mode and Effects Analysis* (FMEA) berevolusi dari sekadar dokumen quality assurance menjadi *strategic risk-management instrument* yang melekat pada siklus hidup produk (Bizeli & Terazzi, 2024).

Bizeli dan Terazzi (2024) menekankan bahwa transisi dari AIAG FMEA edisi 2008 menuju **AIAG/VDA FMEA Handbook (Juni 2019)** bukan sekadar perubahan format, melainkan pergeseran paradigma fundamental. Metodologi sebelumnya yang berbasis *Risk Priority Number* (RPN) dengan skala 1–1000 terbukti memiliki kelemahan krusial: *ordinal scale* RPN sulit dibandingkan secara absolut, variabel Detection (D) diperlakukan setara dengan Occurrence (O) secara matematis, dan threshold RPN ≥ 100 menjadi *arbitrary cut-off* yang berbeda di tiap perusahaan. AIAG/VDA menjawab ini dengan tabel **Action Priority (AP)** tiga level — *High (H), Medium (M), Low (L)* — yang meniru logika *risk matrix* FMEA aerospace SAE ARP5580 (Bizeli & Terazzi, 2024).

Urgensi ekonomi implementasi FMEA yang efektif dapat diukur dari data industri: menurut *Automotive News* dan studi kasus Bizeli & Terazzi (2024) pada *multinational automotive parts manufacturer* di Brasil, satu *recall campaign* untuk komponen kritis (misalnya airbag inflator atau fuel pump) dapat membebani biaya antara USD 50 juta hingga USD 500 juta, belum termasuk *reputational damage* dan *stock-price impact*. Studi Bizeli & Terazzi (2024) menemukan bahwa adopsi AIAG/VDA FMEA secara disiplin menurunkan *rework cost* dan *internal rejection* hingga dua digit persentase pada lini produksi komponen *powertrain* dan *chassis* yang diteliti.

Di sisi lain, Saputra dan Sukmono (2024) menunjukkan bahwa FMEA tidak terbatas pada rekayasa produk, melainkan sangat relevan untuk **pemeliharaan mesin CNC milling** di lantai pabrik. FMEA memungkinkan teknisi memprioritaskan *preventive maintenance task* berdasarkan *risk contribution* suatu failure mode terhadap downtime dan *cost of poor quality* (COPQ). Kedua paper ini, ketika digabungkan, membentuk *coherent body of knowledge* yang memperlihatkan universalitas FMEA AIAG/VDA — dari desain produk (*Design FMEA*), proses manufaktur (*Process FMEA*), hingga pemeliharaan aset (*Maintenance FMEA*).

Konteks Indonesia juga relevan: industri komponen otomotif nasional (Toyota, Daihatsu, Honda, Mitsubishi) mensyaratkan supplier tier-1 dan tier-2 untuk memiliki FMEA yang terdokumentasi sebagai *gate* untuk *Part Approval Process* (PPAP). Oleh karena itu, pemahaman mendalam tentang AIAG/VDA FMEA menjadi kompetensi wajib bagi insinyur industri Indonesia yang berkarier di sektor manufaktur berstandar global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi dan Skala Parameter

FMEA AIAG/VDA mendefinisikan tiga parameter risiko inti, masing-masing diskalakan 1–10 menurut tabel yang distandarkan:

- **Severity (S)** — tingkat dampak kegagalan terhadap pelanggan/下游 proses. S = 10 berarti *safety-relevant failure* dengan potensi cedera atau *non-compliance* terhadap regulasi.
- **Occurrence (O)** — probabilitas kegagalan terjadi per unit atau per periode operasi. O = 10 berarti kegagalan hampir pasti terjadi (≥ 1 per 2 unit atau ≥ 100 per 1000 unit).
- **Detection (D)** — kemampuan *controls* (design verification, production inspection) mendeteksi *cause* atau *failure mode* sebelum produk sampai ke pelanggan. D = 10 berarti *no detection capability* (Bizeli & Terazzi, 2024).

### 2.2 Formulasi RPN Tradisional dan Keterbatasannya

Sebelum transisi AIAG/VDA, formula RPN klasik adalah:

$$RPN = S \times O \times D$$

dengan $RPN \in [1, 1000]$. Contoh: jika $S=8$, $O=6$, $D=7$, maka $RPN = 336$. Batasan kritisnya, seperti disorot dalam paper Bizeli & Terazzi (2024), adalah bahwa **RPN=1×10×10 = 100** (katastropik) diperlakukan setara dengan **RPN=10×1×10 = 100** (langka tapi parah) dan **RPN=10×10×1 = 100** (sering tapi terdeteksi sempurna) — secara matematis sama, tetapi memiliki implikasi risiko yang sangat berbeda.

### 2.3 Action Priority (AP) AIAG/VDA

AIAG/VDA 2019 menggantikan RPN dengan **Action Priority Level (AP)** yang dihasilkan dari *lookup table* tiga-dimensi. Versi ringkas tabel AP untuk kombinasi S–O–D dapat direpresentasikan sebagai berikut (Bizeli & Terazzi, 2024):

$$AP = f(S, O, D) \mapsto \{H, M, L\}$$

dengan aturan hierarki:

$$AP = H \iff (S \geq 9) \lor (O \geq 8 \land S \geq 5) \lor (\text{kombinasi spesifik S–O–D pada tabel})$$

$$AP = M \iff \text{bukan } H \text{ dan bukan } L$$

$$AP = L \iff (S \leq 4) \land (O \leq 4) \land (D \leq 4)$$

Logika ini memastikan bahwa **Severity mendominasi Occurrence dan Detection** — sebuah safety-relevant failure tidak dapat "diturunkan prioritasnya" hanya karena probabilitasnya rendah.

### 2.4 Formulasi *Risk Reduction* Pascaperbaikan

Setelah *action* diterapkan, *risk reduction* diukur dengan:

$$\Delta RPN = RPN_{sebelum} - RPN_{sesudah} = (S \times O \times D)_{sebelum} - (S \times O \times D)_{sesudah}$$

dan secara kualitatif melalui *delta* AP:

$$\Delta AP = AP_{sebelum} - AP_{sesudah} \quad \text{(dengan } H > M > L \text{)}$$

Untuk agregasi portofolio FMEA pada level perusahaan, Bizeli dan Terazzi (2024) menyarankan *control metric*:

$$\text{Critical Failure Coverage (CFC)} = \frac{\sum_{i=1}^{N} \mathbb{1}(AP_i = H \text{ dan ada corrective action})}{\sum_{i=1}^{N} \mathbb{1}(AP_i = H)} \times 100\%$$

dengan $\mathbb{1}(\cdot)$ adalah *indicator function* dan $N$ adalah jumlah total failure mode.

### 2.5 Formulasi FMEA Pemeliharaan (Saputra & Sukmono, 2024)

Saputra dan Sukmono (2024) memformulasikan FMEA pemeliharaan CNC dengan menambahkan *downtime cost* sebagai bobot:

$$\text{Risk Priority Index (RPI)} = S \times O \times D \times C_{dt}$$

dengan $C_{dt}$ adalah *normalized downtime cost* per failure event, $C_{dt} \in [1, 10]$. Variabel ini memperhitungkan fakta bahwa dua failure mode dengan RPN identik dapat memiliki dampak finansial berbeda — misalnya *spindle bearing failure* menyebabkan downtime 8 jam (cost tinggi) sedangkan *coolant level sensor failure* hanya menyebabkan downtime 0,5 jam (cost rendah).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Bizeli dan Terazzi (2024) menjelaskan bahwa AIAG/VDA FMEA dilaksanakan melalui **tujuh langkah prosedural** yang harus dilakukan secara disiplin oleh *cross-functional team* (CFT). Berikut adalah adaptasi SOP berdasarkan paper tersebut:

**Langkah 1 — Perencanaan dan Persiapan (Planning & Preparation)**
- Tentukan *scope*: DFMEA, PFMEA, atau *Maintenance FMEA* (Saputra & Sukmono, 2024).
- Bentuk CFT minimal 5–7 anggota: design engineer, process engineer, quality engineer, supplier quality engineer, *reliability engineer*, dan *customer voice representative*.
- Pilih *FMEA software* tervalidasi (APIS IQ-FMEA, IQ-RM, atau PLM-integrated seperti Siemens Teamcenter FMEA).

**Langkah 2 — Analisis Struktur (Structure Analysis)**
- Untuk DFMEA: bangun *product structure tree* (system → sub-system → component).
- Untuk PFMEA: bangun *process flow diagram* (operation → step → element).
- Untuk Maintenance FMEA: bangun *equipment hierarchy* (machine → sub-assembly → part) (Saputra & Sukmono, 2024).

**Langkah 3 — Analisis Fungsi (Function Analysis)**
- Tetapkan *function* dan *requirement* (Spesifikasi Teknis: dimensi, kekuatan, kekencangan, dll.) untuk setiap elemen struktur.
- Gunakan *noun-verb* notation: "Poros — mentransmisikan torsi ≥ 250 Nm pada 3000 rpm".

**Langkah 4 — Analisis Kegagalan (Failure Analysis)**
- Identifikasi *failure mode* (cara elemen gagal memenuhi fungsi).
- Identifikasi *potential effects* (dampak pada produk/proses/pelanggan).
- Identifikasi *potential causes* (mekanisme kegagalan: desain, material, proses, lingkungan).

**Langkah 5 — Analisis Risiko (Risk Analysis)**
- *Assign* nilai S, O