# 1527 — Implementasi FMEA AIAG/VDA dalam Manufaktur Otomotif: Integrasi Manajemen Risiko Kualitas, Pemeliharaan Mesin CNC, dan Optimalisasi Proses Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi di bawah tekanan simultan dari tiga vektor risiko: (i) tuntutan *zero-defect* dari Original Equipment Manufacturer (OEM), (ii) kompleksitas rantai pasok yang mencakup hingga 5–7 *tier* subkontraktor, dan (iii) konsekuensi hukum serta finansial yang masif dari *recall* kendaraan. Dalam konteks inilah Bizeli dan Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* yang menyelidiki **implantação do FMEA AIAG/VDA** — implementasi Failure Mode and Effects Analysis berbasis standar bersama AIAG (Automotive Industry Action Group, AS) dan VDA (Verband der Automobilindustrie, DE) — pada sebuah *multinacional fabricante de peças automotivas* (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)).

Studi ini bersifat deskriptif-kualitatif dan menggunakan wawancara semi-terstruktur terhadap tiga profesional berpengalaman (*Quality Engineer*, *Process Engineer*, dan *Supplier Quality Assurance Engineer*). Temuan utamanya menunjukkan empat *benefícios* terukur: (1) **prevenção de falhas** melalui identifikasi dini modus kegagalan, (2) **redução de custos com retrabalho e recalls**, (3) **melhoria da confiabilidade do produto**, dan (4) **integração de equipes multifuncionais**. Di sisi lain, *desafios* yang diidentifikasi meliputi resistensi perubahan (*resistência cultural*), kebutuhan *continuous training* terhadap metodologi baru, dan tuntutan dokumentasi yang lebih rigoros dibandingkan FMEA klasik AIAG edisi 4. Urgensi ekonomis penelitian ini tecermin dari data industri: biaya rata-rata *recall* di sektor otomotif mencapai **USD 22 per kendaraan** untuk *minor recall* dan dapat menembus **USD 1 miliar** untuk kampanye besar (kasus Takata airbags, General Motors ignition switch), menjadikan FMEA bukan sekadar alat kualitas melainkan instrumen *risk capital allocation*.

Pelengkap konteks operasional diberikan oleh Saputra dan Sukmono (2024) dalam DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248) yang mendemonstrasikan aplikasi FMEA pada **pemeliharaan mesin CNC milling** — sebuah *asset* kritis di lini produksi komponen automotive. Pendekatan ini menjembatani gap antara FMEA desain/produk (fokus paper pertama) dengan FMEA proses dan *equipment*, memperkuat argumentasi bahwa AIAG/VDA FMEA adalah *enterprise-wide risk language* yang harus dikonsolidasikan lintas fungsi engineering, operations, dan maintenance.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 FMEA Klasik: Risk Priority Number (RPN)

Formulasi tradisional yang masih digunakan dalam banyak perusahaan sebagai *baseline* sebelum transisi ke AIAG/VDA adalah **Risk Priority Number (RPN)**, didefinisikan sebagai produk tiga parameter ordinal berskala 1–10:

$$RPN = S \times O \times D$$

di mana:
- $S$ = *Severity* (tingkat keparahan dampak kegagalan terhadap pelanggan/akhir),
- $O$ = *Occurrence* (frekuensi kejadian kegagalan),
- $D$ = *Detection* (probabilitas kegagalan tidak terdeteksi sebelum mencapai pelanggan; skor tinggi = deteksi sulit).

RPN memiliki rentang teoretis $[1, 1000]$. Ambang batas tindakan remediasi yang umum diadopsi adalah $RPN \geq 100$ atau $S \geq 9$, meskipun ambang ini bersifat kontekstual.

### 2.2 AIAG/VDA FMEA: Action Priority (AP) Matrix

Standar AIAG/VDA Handbook (2019) yang menjadi fokus paper Bizeli & Terazzi secara eksplisit meninggalkan RPN sebagai metrik tunggal dan menggantinya dengan tabel **Action Priority (AP)** yang menghitung prioritas berdasarkan kombinasi $(S, O, D)$ melalui *lookup table* matriks berstruktur. AP dikategorikan menjadi tiga tingkatan:

$$AP = f(S, O, D) \in \{H, M, L\}$$

dengan $H$ = High (tindakan wajib), $M$ = Medium (tindakan direkomendasikan), $L$ = Low (tindakan opsional). Pendekatan ini memperbaiki tiga kelemahan fundamental RPN: (a) bobot parameter tidak proporsional karena $S, O, D$ diperlakukan setara, (b) rentang RPN menyebabkan *false equivalence* (RPN=72 bisa dihasilkan dari $8\times9\times1$ maupun $9\times2\times4$ dengan implikasi mitigasi sangat berbeda), dan (c) distribusi RPN sangat *right-skewed*, membuat pemeringkatan sulit.

### 2.3 Formulasi Pendukung: Analisis Pareto dan Dampak Ekonomi

Untuk mendukung keputusan investasi mitigasi, FMEA sering dikombinasikan dengan **Prinsip Pareto (80/20)** dan **Expected Loss Cost (ELC)**:

$$ELC = \sum_{i=1}^{n} RPN_i \times C_{i}^{unit} \times N_i^{affected}$$

di mana $C_{i}^{unit}$ adalah biaya satuan akibat kegagalan modus $i$, dan $N_i^{affected}$ adalah jumlah unit yang terdampak per periode.

### 2.4 Formulasi Pemeliharaan CNC (Saputra & Sukmono, 2024)

Untuk konteks mesin CNC milling, *Mean Time Between Failures* (MTBF) dan laju kegagalannya adalah:

$$\lambda = \frac{1}{MTBF}, \quad R(t) = e^{-\lambda t}, \quad MTTR = \frac{\sum_{j=1}^{m} T_{repair,j}}{m}$$

dengan $R(t)$ = reliabilitas fungsi waktu dan $MTTR$ = *Mean Time To Repair*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AIAG/VDA FMEA mengikuti tujuh *step* rekayasa sesuai handbook dan dikonfirmasi oleh Bizeli & Terazzi (2024) sebagai *workflow* aktual pada kasus mereka:

**Langkah 1 — *Planning & Preparation*.** Tim *cross-functional* (QE, PE, Manufacturing, Supplier, Customer) dibentuk. *Scope* FMEA didefinisikan: apakah DFMEA (Desain), PFMEA (Proses), atau FMEA-MSR (Monitoring & System Response). Penetapan *boundaries* dan asumsi awal didokumentasikan.

**Langkah 2 — *Structure Analysis*.** Pembuatan *block diagram* (untuk DFMEA) atau *process flow diagram* (untuk PFMEA) yang dilengkapi dengan *interface matrix* dan *system hierarchy*. Setiap elemen/item diberi nomor identifikasi hierarkis.

**Langkah 3 — *Function Analysis*.** Setiap item terkait dengan fungsinya (Function Net). Dalam PFMEA CNC milling (Saputra & Sukmono, 2024), fungsi kritis misalnya *spindle rotation accuracy* ($< 0.01$ mm runout) dikaitkan dengan elemen *spindle bearing assembly*.

**Langkah 4 — *Failure Analysis*.** Identifikasi modus kegagalan potensial ($FM$), efek ($FE$), dan penyebab ($FC$) untuk setiap fungsi. Brainstorming menggunakan data historis warranty claim, *8D reports*, dan *lessons learned*.

**Langkah 5 — *Risk Analysis*.** Penilaian $S, O, D$ menggunakan tabel referensi AIAG/VDA yang telah distandardisasi. Penentuan $AP$ melalui matriks lookup (Tabel AP dalam handbook).

**Langkah 6 — *Optimization*.** Aksi mitigasi diturunkan untuk modus dengan $AP = H$ dan rekomendasi untuk $AP = M$. Setiap aksi ditugaskan kepada *responsible owner* dengan due date dan target efektivitas (misalnya menurunkan $O$ dari 6 ke 3).

**Langkah 7 — *Results Documentation & Communication*.** Output disimpan dalam *PFMEA Worksheet* yang terstandarisasi (AIAG/VDA template) dan direview dalam forum FMEA *Steering Committee*.

Proses ini berulang secara siklik (*continuous improvement loop*) mengikuti **Deming Cycle PDCA**: Plan (langkah 1–5), Do (langkah 6), Check (review berkala), Act (re-assessment pasca-implementasi).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Kasus A: PFMEA pada Komponen Otomotif (Konteks Bizeli & Terazzi, 2024)

Pertimbangkan lini produksi *brake caliper bracket* paduan aluminium ADC12 melalui proses *high-pressure die casting* + *CNC milling*. Tiga modus kegagalan kritis diidentifikasi dari data historis:

| ID | Modus Kegagalan ($FM$) | Efek ($FE$) | Penyebab ($FC$) | $S$ | $O$ | $D$ | $RPN$ | $AP$ |
|----|------------------------|-------------|------------------|-----|-----|-----|-------|------|
| FM01 | *Porosity* pada dinding $>1.5$ mm | Kebocoran sistem rem, recall | Temperatur leleh terlalu rendah | 9 | 5 | 4 | **180** | **H** |
| FM02 | Dimensi *bolt hole* out of $\pm 0.05$ mm | Assembly failure, *line stop* | Tool wear pada CNC end-mill | 8 | 6 | 3 | **144** | **M** |
| FM03 | *Cold shut* di permukaan | Visual defect, scrap 100% | Kecepatan injeksi rendah | 7 | 4 | 5 | **140** | **M** |

**Perhitungan RPN untuk FM01** (mengikuti formula klasik sebagai baseline sebelum adopsi AP):
$$RPN_{FM01} = S \times O \times D = 9 \times 5 \times 4 = 180$$

**Analisis biaya ELC** (asumsi produksi 500.000 unit/tahun, biaya scrap Rp 250.000/unit, biaya warranty claim Rp 4.500.000/unit):
$$ELC_{FM01} = 180 \times \frac{Rp\,4.500.000}{180} \times 50.000 = Rp\,1,125\,miliar$$

(Biaya warranty aktual diasumsikan proporsional terhadap RPN sebagai *risk proxy*; dalam praktik menggunakan $\lambda$-based actuarial model.)

Setelah implementasi mitigasi FM01 (pemasangan *melt temperature sensor* dengan kontrol PID $\pm 5^\circ$C dan inspeksi *X-ray real-time*), dilakukan *re-rating*: $S' = 9$ (severity tidak berubah karena risiko keselamatan), $O' = 2$ (penurunan 60%), $D' = 2$ (deteksi lebih dini):
$$RPN'_{FM01} = 9 \times 2 \times