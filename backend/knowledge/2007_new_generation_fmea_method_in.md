# 2007 — Metode FMEA Generasi Baru dalam Industri Otomotif: Standar AIAG-VDA, Pendekatan Fuzzy QE-FMEA, dan Manajemen Risiko Proses Manufaktur Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** New Generation FMEA Method in Automotive Industry: An Application
**Jurnal & Sitasi Utama:** Nesimi Kök, Mehmet Selami Yıldız (2023). *Journal of Turkish Operations Management*. DOI: [https://doi.org/10.56554/jtom.1193787](https://doi.org/10.56554/jtom.1193787)
**Sitasi Pendukung:** Andrzej Pacana, Dominika Siwiec (2023). *Materials*. DOI: [https://doi.org/10.3390/ma16041651](https://doi.org/10.3390/ma16041651)

---

## 1. Pendahuluan dan Konteks Industri

Industri otomotif global menghadapi dinamika kompetisi yang semakin agresif, ditandai dengan meningkatnya kompleksitas sistem elektrifikasi, stringent-nya regulasi emisi Euro 7/China VI-b, serta transisi paradigma *Industry 4.0* dan *smart manufacturing*. Dalam lanskap ini, aktivitas *supplier tier-1* dan *tier-2* dituntut untuk menjamin keandalan komponen kritis—mulai dari *powertrain*, sistem pengereman, hingga modul elektronik—dengan biaya rekayasa mutu yang terus ditekan. Kök dan Yıldız (2023) menegaskan bahwa analisis risiko potensi kegagalan produk, proses, layanan, dan sistem menjadi pilar utama keberlangsungan operasional rantai pasok otomotif (DOI: [10.56554/jtom.1193787](https://doi.org/10.56554/jtom.1193787)).

Metode *Failure Mode and Effects Analysis* (FMEA) muncul sebagai *de facto standard* dalam manajemen risiko teknik industri sejak tahun 1970-an. Namun, seperti yang diidentifikasi oleh Kök & Yıldız, FMEA konvensional berbasis *Risk Priority Number* (RPN) memiliki kelemahan struktural: (1) skala ordinal 1–10 pada parameter Severity, Occurrence, dan Detection menghasilkan 1.000 kombinasi yang bersifat arbitrer; (2) bobot S, O, D diperlakukan sama padahal secara kualitatif bobotnya seharusnya tidak setara; (3) tidak ada dasar ilmiah yang kuat untuk ambang batas RPN (umumnya 100) sebagai pemicu tindakan korektif. Hal ini mendorong *Automotive International Action Group* (AIAG) bersama *Verband der Automobilindustrie* (VDA) menerbitkan *AIAG-VDA FMEA Handbook* edisi 2019, yang merevolusi pendekatan berbasis skor RPN menuju *Action Priority* (AP) berbasis tabel referensi dan *logic tree* analisis.

Di sisi lain, agenda keberlanjutan dan tuntutan pelanggan yang dinamis—sebagaimana disoroti oleh Pacana dan Siwiec (2023) dalam jurnal *Materials*—memunculkan kebutuhan untuk memperluas cakupan FMEA melampaui dimensi mutu (DOI: [10.3390/ma16041651](https://doi.org/10.3390/ma16041651)). Pendekatan *Fuzzy Qualitative-Environmental FMEA* (Fuzzy QE-FMEA) yang mereka usulkan mengintegrasikan aspek lingkungan dalam kerangka keputusan fuzzy untuk menilai ancaman terhadap kualitas produk sekaligus ekosistem. Konvergensi antara standar AIAG-VDA 2019 dan pendekatan fuzzy lingkungan ini merepresentasikan evolusi FMEA dari alat kualitatif menjadi instrumen keputusan rekayasa industri yang holistik dan terukur.

Urgensi ekonomis industri otomotif modern mensyaratkan bahwa setiap *failure mode* pada lini produksi komponen mampu diidentifikasi sebelum peluncuran *series production* (biasanya *Job#1* setelah *SOP*—*Start of Production*). Downtime satu menit pada lini perakitan transmisi otomatis bernilai ratusan hingga ribuan Euro; biaya scrap komponen *engine control unit* (ECU) yang cacat solder melampaui Rp 1,5 juta per unit. Oleh karena itu, integrasi metodologi FMEA generasi baru ke dalam *Product Development Process* (PDP) bukan sekadar kebutuhan kualitas, melainkan imperatif finansial dan strategis bagi setiap pelaku industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Paradigma RPN Konvensional (AIAG 2008)

Model tradisional FMEA mendefinisikan risiko sebagai produk tiga parameter ordinal diskret:

$$RPN = S \times O \times D$$

di mana:
- $S$ = *Severity* (tingkat keparahan efek kegagalan terhadap pelanggan/akhir), $S \in \{1,2,\ldots,10\}$
- $O$ = *Occurrence* (frekuensi penyebab kegagalan terjadi), $O \in \{1,2,\ldots,10\}$
- $D$ = *Detection* (kemampuan kontrol mendeteksi modus kegagalan sebelum produk sampai ke pelanggan), $D \in \{1,2,\ldots,10\}$

Ambang keputusan diambil berdasarkan $RPN_{threshold}$ (umumnya 100), di mana $RPN \geq 100$ memerlukan tindakan mitigasi prioritas. Namun, seperti diuraikan oleh Kök dan Yıldız (2023), model ini rentan terhadap *mis-ranking* karena dua kombinasi berbeda (misalnya $(S,O,D)=(10,5,2)$ vs. $(4,5,5)$ keduanya menghasilkan RPN=100) diperlakukan identik padahal secara rekayasa memiliki implikasi risiko yang berbeda.

### 2.2. Paradigma Action Priority (AP) — AIAG-VDA 2019

Standar AIAG-VDA 2019 menggantikan RPN dengan *Action Priority* yang diturunkan melalui *risk matrix* berbasis logika. Fungsi pemetaan didefinisikan sebagai:

$$AP = f(S, O, D) \mapsto \{H, M, L\}$$

di mana:
- $H$ = *High* (tindakan wajib diprakarsai/dilakukan)
- $M$ = *Medium* (tindakan atas dasardiskusi tim)
- $L$ = *Low* (tindakan opsional)

Penentuan AP dilakukan dengan *knowledge-based evaluation table* yang mempertimbangkan interaksi logis: misalnya modus kegagalan dengan Severity = 9–10 langsung diklasifikasikan *High* tanpa menghiraukan Occurrence dan Detection. Formulasi *severity override* dapat diekspresikan sebagai:

$$AP = \begin{cases} H & \text{jika } S \geq 9 \\ H & \text{jika } O \geq 8 \text{ dan } D \geq 6 \\ M & \text{jika } O \geq 6 \text{ dan } D \geq 5 \\ L & \text{lainnya sesuai tabel referensi} \end{cases}$$

### 2.3. Formulasi Fuzzy QE-FMEA (Pacana & Siwiec, 2023)

Untuk menangkap ketidakpastian linguistik pada penilaian Severity, Occurrence, Detection, serta dimensi lingkungan $E$ (*Environmental impact*), Pacana dan Siwiec (2023) menggunakan himpunan fuzzy segitiga (TFN — *Triangular Fuzzy Number*). Suatu TFN didefinisikan sebagai:

$$\tilde{A} = (a_1, a_2, a_3), \quad \mu_{\tilde{A}}(x) = \begin{cases} 0, & x < a_1 \\ \frac{x-a_1}{a_2-a_1}, & a_1 \leq x \leq a_2 \\ \frac{a_3-x}{a_3-a_2}, & a_2 \leq x \leq a_3 \\ 0, & x > a_3 \end{cases}$$

*Fuzzy Risk Priority Number* kemudian dihitung sebagai perkalian TFN fuzzy:

$$\widetilde{FRPN} = \tilde{S} \otimes \tilde{O} \otimes \tilde{D} \otimes \tilde{E}$$

dengan operator perkalian TFN yang menghasilkan TFN baru $\tilde{C} = (c_1, c_2, c_3)$ dengan:

$$c_1 = a_1 \cdot b_1, \quad c_2 = a_2 \cdot b_2, \quad c_3 = a_3 \cdot b_3$$

Untuk mendapatkan *crisp ranking*, digunakan teknik *defuzzification centroid*:

$$R_{crisp} = \frac{c_1 + c_2 + c_3}{3}$$

### 2.4. Model Agregasi Keputusan

Keputusan prioritas akhir menggabungkan bobot kepentingan relatif menggunakan *fuzzy weighted average*:

$$\widetilde{R}_{agg} = \sum_{i=1}^{n} w_i \otimes \tilde{R}_i, \quad \sum_{i=1}^{n} w_i = 1$$

di mana $w_i$ merepresentasikan bobot kepentingan parameter ke-$i$ (misalnya $w_S = 0{,}35$, $w_O = 0{,}25$, $w_D = 0{,}15$, $w_E = 0{,}25$ untuk QE-FMEA).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Kök dan Yıldız (2023) serta Pacana & Siwiec (2023), metodologi implementasi FMEA generasi baru mengikuti kerangka tujuh langkah terstruktur (AIAG-VDA *Seven-Step Approach*):

**Langkah 1 — *Planning and Preparation*.** Tim FMEA lintas-fungsi (*cross-functional team*) dibentuk, mencakup: *design engineer*, *process engineer*, *quality engineer*, *supplier quality engineer*, dan *customer interface*. *FMEA Scope* (apakah *System*, *Subsystem*, *Component*, atau *Process*) dan *Boundary Diagram* ditetapkan menggunakan standar VDA-4 atau *P-diagram* AIAG-VDA.

**Langkah 2 — *Structure Analysis*.** Struktur produk/proses didekomposisi menggunakan *function structure tree* atau *process flow diagram* (PFD). Setiap elemen struktur diberi nomor identifikasi yang mengikuti konvensi *focal point* (misalnya `1.2.3` = Subsistem 1, Komponen 2, Proses 3).

**Langkah 3 — *Function Analysis*.** Setiap elemen struktur dipasangkan dengan fungsi teknis dan kuantitatifnya. Formulasi fungsional diekspresikan sebagai pasangan *(Function, Specification)*, misalnya untuk proses pengelasan *resistance spot welding* (RSW): *Fungsi* = "Mengikat dua lembar baja dengan kuat", *Spesifikasi* = $F_{shear} \geq 6\,\text{kN}$, $R_{contact} \leq 0{,}5\,\text{m}\Omega$.

**Langkah 4 — *Failure Analysis*.** Modus kegagalan potensial diidentifikasi untuk setiap fungsi, dengan memperhatikan rantai sebab-akibat: *Cause → Failure Mode → Effect*. Pendekatan ini mengikuti *logic of technical risk*.

**Langkah 5 — *Risk Analysis*.** Setiap modus kegagalan dinilai menggunakan tabel Severity, Occurrence, dan Detection (S-O-D) sesuai AIAG-VDA 2019. AP ditentukan melalui *Action Priority Matrix* (APM). Untuk studi lingkungan, dimensi $E$ ditambahkan menggunakan TFN fuzzy.

**Langkah 6 — *Optimization*.** Tindakan mitigasi dirancang untuk modus kegagalan berkategori AP-High (atau FRPN fuzzy tertinggi). Prinsip *Six Sigma* DMAIC (*Define, Measure, Analyze, Improve, Control*) diterapkan.

**Langkah 7 — *Documentation and Communication*.** Hasil didokumentasikan dalam *FMEA Worksheet* standar dan di-*review* dalam forum *Change Management* dan *Quality Gate* (misalnya Gate B, Gate C dalam AIAG-VDA *PDP*).

Diagram alur metodologi rekayasa ini dapat dirangkum sebagai berikut:

```
┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│ 1. Planning &      │───▶│ 2. Structure       │───▶│ 3. Function        │
│    Preparation     │    │    Analysis        │    │    Analysis        │
└────────────────────┘    └────────────────────┘    └────────────────────┘
          │                         │                         │
          ▼                         ▼                         ▼
┌────────────────────┐    ┌────────────────────┐    ┌────────────────────┐
│ 7. Documentation & │◀───│ 6. Optimization    │◀───│ 4. Failure         │
│    Communication   │    │ (Mitigation)       │    │    Analysis        │
└────────────────────┘    └────────────────────┘    └────────────────────┘
                                       ▲
                                       │
                            ┌────────────────────┐
                            │ 5. Risk Analysis   │
                            │ (AP / Fuzzy RPN)   │
                            └────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Kasus

Kök dan Yıldız (2023) menyajikan studi kasus pada proses *welding* (*resistance spot welding* / RSW) di perusahaan *supplier* otomotif Turki yang memproduksi komponen *cross member* (*B-pillar reinforcement*). Empat modus kegagalan utama diidentifikasi dari analisis PFD lini produksi. Tabel berikut menampilkan parameter input S, O, D sesuai AIAG-VDA 2019:

| ID | Failure Mode | Effect | S | O | D |
|----|--------------|--------|---|---|---|
| FM-01 | Nugget tidak terbentuk (no nugget) | Sifat mekanis joint tidak tercapai | 9 | 5 | 4 |
| FM-02 | Ekspansi spatter (splash logam) | Korosi, permukaan tidak estetik | 6 | 6 | 5 |
| FM-03 | Indentasi elektroda dalam (>30%) | Deformasi lembaran, kelelahan prematur | 7 | 4 | 6 |
| FM-04 | Porositas las (*weld porosity*) | Kekuatan tarik joint turun 25% | 8 | 5 | 7 |

### 4.2. Perhitungan RPN Konvensional (AIAG 2008)

$$RPN_{FM-01}
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
