# 2199 — FMEA AIAG/VDA dalam Manufaktur Otomotif dan Analisis Pemeliharaan Mesin CNC: Kerangka Manajemen Risiko Terintegrasi untuk Keandalan Produk dan Aset Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi pada ambang toleransi kualitas yang sangat ketat, di mana satu cacat pada komponen kritis dapat memicu kampanye *recall* internasional dengan kerugian finansial mencapai ratusan juta dolar. Dalam konteks inilah Bizeli dan Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155), menganalisis secara deskriptif-kualitatif implementasi *Failure Mode and Effects Analysis* (FMEA) berbasis standar AIAG/VDA pada sebuah perusahaan multinasional produsen komponen otomotif. Studi ini menggunakan pendekatan *case study* dengan wawancara semi-terstruktur terhadap tiga profesional berpengalaman, dan menemukan bahwa penerapan AIAG/VDA FMEA secara signifikan mendorong pencegahan kegagalan (*failure prevention*), menurunkan biaya *rework* dan *recall*, serta meningkatkan keandalan produk. Lebih jauh, metodologi ini berkontribusi pada integrasi tim lintas fungsi dan optimasi proses produksi — sebuah temuan yang mempertegas pergeseran paradigma dari deteksi缺陷 menuju pencegahan sistemik.

Urgensi ekonomis dari manajemen risiko缺陷 ini diperkuat oleh riset Saputra dan Sukmono (2024) yang dimuat di jurnal *peer-review* berDOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248). Mereka menunjukkan bahwa FMEA tidak hanya relevan untuk desain produk, tetapi juga menjadi tulang punggung strategi pemeliharaan mesin CNC (*Computer Numerical Control*) milling, di mana kegagalan komponen mekanis seperti *spindle*, sistem hidrolik, atau mekanisme pengumpanan dapat menyebabkan *downtime* katastrofik dengan biaya produksi yang berlipat ganda. Kedua literatur ini, ketika dibaca secara komplementer, merepresentasikan dua perspektif kritikal FMEA: yaitu *design FMEA* (DFMEA) untuk keandalan produk pada industri automotive Tier-1, serta *process FMEA* (PFMEA) plus *machine FMEA* untuk keberlanjutan operasi mesin perkakas presisi. Dalam kerangka Industri 4.0, di mana *Overall Equipment Effectiveness* (OEE) menjadi KPI utama, integrasi kedua perspektif ini menjadi kebutuhan strategis bagi perusahaan yang berorientasi pada *zero-defect manufacturing*. Modul 2199 ini disusun untuk membekali praktisi dan akademisi Teknik Industri dengan pemahaman holistik, formulasi matematis presisi, serta kemampuan kuantifikasi risiko缺陷 yang siap diterapkan di lantai produksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Evolusi Metodologi FMEA: dari RPN Konvensional ke Action Priority (AP)

FMEA pertama kali dikembangkan oleh militer Amerika Serikat pada tahun 1949 (MIL-STD-1629) dan selanjutnya diadaptasi oleh industri otomotif melalui AIAG (Automotive Industry Action Group) pada tahun 1995 dengan format RPN (*Risk Priority Number*). Rumus klasik RPN didefinisikan sebagai:

$$RPN_{tradisional} = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan efek缺陷, skala 1–10), $O$ adalah *Occurrence* (frekuensi kejadian缺陷, skala 1–10), dan $D$ adalah *Detection* (kemampuan deteksi缺陷, skala 1–10). Namun, Bizeli dan Terazzi (2024) menekankan bahwa standar AIAG/VDA yang diterbitkan pada tahun 2019 menggantikan pendekatan RPN tunggal dengan sistem *Action Priority* (AP) yang lebih nuanced, dengan tingkatan **High (H)**, **Medium (M)**, dan **Low (L)**. Logika AP ini menggunakan tabel lookup yang menggabungkan triplet $(S, O, D)$ ke dalam kategori risiko yang mempertimbangkan signifikansi relatif dari masing-masing faktor.

### 2.2 Formulasi Matematis Tingkat Lanjut

Untuk mengkuantifikasi risiko secara kontinyu di luar pendekatan tabel AP, beberapa ekstensi matematis diajukan. Pertama, **RPN Logaritmik Ternormalisasi** yang mengurangi distorsi akibat perkalian tiga faktor:

$$RPN_{log} = \log_{10}(S \times O \times D)$$

dengan rentang teoritis $0 \leq RPN_{log} \leq 3$ ketika $S, O, D \in [1, 10]$. Pendekatan ini memperbaiki kelemahan RPN klasik di mana skor $(S=2, O=2, D=5) = 20$ dianggap identik dengan $(S=10, O=1, D=2) = 20$, padahal tingkat risikonya berbeda secara fundamental.

Kedua, untuk aplikasi *maintenance FMEA* seperti yang dikaji Saputra dan Sukmono (2024) pada mesin CNC milling, kita memerlukan parameter kelangsungan operasi yang merepresentasikan *expected loss per unit time*:

$$E[L] = \sum_{i=1}^{n} \lambda_i \cdot C_i \cdot T_i$$

di mana $\lambda_i$ adalah laju kegagalan (failure rate) untuk mode缺陷 ke-$i$ (umumnya dalam *failures per million hours* atau FPMH), $C_i$ adalah konsekuensi biaya per kegagalan (dalam satuan moneter), dan $T_i$ adalah durasi *downtime* yang diantisipasi. Formulasi ini menjadi dasar *Risk-Based Maintenance* (RBM).

Ketiga, **Criticality Analysis (CA)** sesuai standar AIAG/VDA memperkenalkan:

$$AP_{level} = f(S, O, D)$$

di mana $f$ adalah fungsi pemetaan berbasis tabel keputusan. Versi kontinyu-nya dapat didekati dengan:

$$AP_{score} = \alpha \cdot S^2 + \beta \cdot O^2 + \gamma \cdot (11-D)^2$$

dengan koefisien bobot $\alpha + \beta + \gamma = 1$, dan $\alpha, \beta, \gamma \geq 0$. Bobot tipikal berdasarkan praktik industri adalah $\alpha = 0.50$ (paling dominan), $\beta = 0.30$, dan $\gamma = 0.20$.

### 2.3 Formulasi OEE sebagai Konteks Kuantitatif

Saputra dan Sukmono (2024) menekankan pentingnya FMEA dalam konteks OEE (*Overall Equipment Effectiveness*):

$$OEE = A \times P \times Q$$

di mana $A$ adalah *Availability*, $P$ adalah *Performance*, dan $Q$ adalah *Quality*, semuanya dalam rentang $[0, 1]$. Kegagalan mesin CNC milling secara langsung menurunkan komponen $A$ dan $P$, sehingga menurunkan OEE dan secara langsung meningkatkan biaya produksi per unit. *Criticality tier* dari setiap mode缺陷 pada akhirnya dihitung sebagai:

$$C_{FMEA} = RPN_{log} \times (1 + k \cdot MTTR_i / MTBF_i)$$

di mana $MTTR_i$ adalah *Mean Time To Repair*, $MTBF_i$ adalah *Mean Time Between Failures*, dan $k$ adalah konstanta sensitivitas (umumnya $k = 0.5$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Prosedur Implementasi AIAG/VDA FMEA

Berdasarkan kerangka Bizeli dan Terazzi (2024), prosedur implementasi AIAG/VDA FMEA mengikuti alur 7-langkah (*seven-step approach*):

1. **Perencanaan dan Persiapan Tim (*Planning & Preparation*):** Membentuk tim lintas fungsi (Quality, Engineering, Manufacturing, Supplier, Customer) sesuai tabel Responsibility (R) AIAG/VDA. Menentukan batasan analisa (*scope*), *boundary diagram*, dan *P-diagram* (Parameter diagram).
2. **Analisis Struktur (*Structure Analysis*):** Mengidentifikasi elemen sistem, fungsi masing-masing, dan hubungan blok (*block diagram*). Untuk komponen otomotif: subsistem, antarmuka, dan kondisi operasi.
3. **Analisis Fungsi (*Function Analysis*):** Mengkodekan setiap fungsi (function net) dan mengidentifikasi kegagalan potensial. Output: *function net* dan *failure flow*.
4. **Analisis Kegagalan (*Failure Analysis*):** Mengidentifikasi *failure mode* untuk setiap fungsi, *failure cause* (root cause), dan *failure effect* (lokal, sistem, akhir). Penentuan skor $S$, $O$, $D$ menggunakan tabel referensi AIAG/VDA.
5. **Analisis Risiko (*Risk Analysis*):** Menghitung triplet risiko dan menentukan *Action Priority* (AP) menggunakan tabel lookup AP. Tabel ini menggantikan RPN tunggal dengan kategorisasi H/M/L.
6. **Optimasi (*Optimization*):** Mendefinisikan *preventive actions* (untuk $O$) dan *detection actions* (untuk $D$), serta *severity reduction* (untuk $S$, biasanya hanya melalui perubahan desain).
7. **Dokumentasi Hasil (*Results Documentation*):** Penyusunan laporan FMEA dengan rekapitulasi AP, status tindakan, dan *residual risk*.

### 3.2 SOP Pemeliharaan Berbasis FMEA untuk Mesin CNC Milling

Saputra dan Sukmono (2024) mengusulkan SOP yang serupa namun difokuskan pada aset:

1. Inventarisasi subsistem kritis mesin CNC (spindle, ball screw, ATC—*Automatic Tool Changer*, sistem coolant, sumbu X/Y/Z).
2. Identifikasi mode kegagalan spesifik mesin, misal: *spindle bearing wear*, *ball screw backlash*, *tool magazine jam*, *coolant pump failure*.
3. Penilaian $S$, $O$, $D$ untuk setiap mode berdasarkan historis *downtime*, data CMMS (*Computerized Maintenance Management System*), dan *judgment* ahli.
4. Perhitungan RPN/AP dan penentuan prioritas intervensi.
5. Penentuan strategi mitigasi: *preventive maintenance* terjadwal, *predictive maintenance* (vibrasi, termografi, oil analysis), atau *condition-based monitoring* berbasis IoT sensor.
6. Implementasi, monitoring, dan *review* berkala (umumnya setiap 6–12 bulan atau setelah *failure event* mayor).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: DFMEA Komponen Otomotif — Modul Sensor ABS

Mengacu pada tipikal proyek Bizeli dan Terazzi (2024) di perusahaan Tier-1 otomotif, kita simulasikan DFMEA untuk modul sensor ABS (*Anti-lock Braking System*) dengan 5 mode kegagalan potensial:

| ID | Failure Mode | Failure Cause | Failure Effect | $S$ | $O$ | $D$ |
|----|--------------|---------------|----------------|-----|-----|-----|
| FM-01 | Sinyal output terputus | Korosi konektor | Lampu ABS mati, *brake assist* tidak aktif | 9 | 4 | 5 |
| FM-02 | Drift kalibrasi sensor | Degradasi *Hall element* | Aktivasi ABS prematur/terlambat | 8 | 5 | 6 |
| FM-03 | *Short circuit* internal | Kontaminasi PCB saat assembly | Modul *burnout*, risiko kebakaran | 10 | 3 | 7 |
| FM-04 | Respon waktu lambat | *Firmware bug* | ABS tidak aktif saat manuver darurat | 9 | 4 | 8 |
| FM-05 | *False trigger* | Noise elektromagnetik | ABS aktif tanpa pengereman keras | 6 | 6 | 6 |

**Perhitungan RPN Tradisional:**

$$RPN_{FM-01} = 9 \times 4 \times 5 = 180$$
$$RPN_{FM-02} = 8 \times 5 \times 6 = 240$$
$$RPN_{FM-03} = 10 \times 3 \times 7 = 210$$
$$RPN_{FM-04} = 9 \times 4 \times 8 = 288$$
$$RPN_{FM-05} = 6 \times 6 \times 6 = 216$$

RPN tertinggi adalah FM-04 ($RPN = 288$), namun dengan logika AIAG/VDA, mode FM-03 dengan $S = 10$ akan diklasifikasikan sebagai **AP = High** karena severity-nya tertinggi, meskipun RPN-nya tidak paling besar. Ini menunjukkan keunggulan metodologi AP.

**RPN Logaritmik:**

$$RPN_{log,FM-04} = \log_{10}(288) = 2{,}459$$

**AP Score (formula kontinyu dengan $\alpha=0.5, \beta=0.3, \gamma=0.2$):**

$$AP_{FM-04} = 0{,}5 \cdot 9^2 + 0{,}3 \cdot 4^2 + 0{,}2 \cdot (11-8)^2 = 40{,}5 + 4{,}8 + 1{,}8 = 47{,}1$$

**AP Score untuk FM-03:**

$$AP_{FM-03} = 0{,}5 \cdot 10^2 + 0{,}3 \cdot 3^2 + 0{,}2 \cdot