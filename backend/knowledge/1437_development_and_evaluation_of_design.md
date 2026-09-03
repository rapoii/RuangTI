# 1437 — Ergonomi Kognitif dalam Sistem Perakitan Kolaboratif Manusia-Robot: Panduan Desain, Evaluasi Beban Kognitif, dan Standar Implementasi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Development and evaluation of design guidelines for cognitive ergonomics in human-robot collaborative assembly systems
**Jurnal & Sitasi Utama:** Luca Gualtieri, Federico Fraboni, Matteo De Marchi (2022). *Applied Ergonomics*. DOI: [https://doi.org/10.1016/j.apergo.2022.103807](https://doi.org/10.1016/j.apergo.2022.103807)
**Sitasi Pendukung:** Shing Wai Wong, Philip Crowe (2024). *Journal of Robotic Surgery*. DOI: [https://doi.org/10.1007/s11701-024-01852-7](https://doi.org/10.1007/s11701-024-01852-7)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur menuju *Industry 5.0* menandai pergeseran paradigma dari otomatisasi penuh menuju kolaborasi simbiosis antara manusia dan robot (*Human-Robot Collaboration*/HRC). Dalam konteks ini, Gualtieri, Fraboni, dan De Marchi (2022) mempublikasikan pedoman desain yang menjadi referensi fundamental bagi pengembangan sistem perakitan kolaboratif di lingkungan industri modern. Sistem HRC dirancang untuk menggabungkan kekuatan presisi, repetitivitas, dan kekuatan fisik robot dengan kemampuan kognitif, adaptasi, dan pemecahan masalah operator manusia. Namun demikian, integrasi kedua agen ini dalam satu *shared workspace* menimbulkan tantangan ergonomis baru, terutama pada dimensi kognitif yang selama ini kurang mendapatkan perhatian setara dengan dimensi fisik.

Urgensi ekonomis dan operasional dari topik ini sangat signifikan. Pasar robot kolaboratif (*cobot*) global diproyeksikan mencapai valuasi逾 USD 12 miliar pada akhir dekade ini dengan tingkat pertumbuhan tahunan majemuk (CAGR) di atas 30%. Pada saat yang sama, laporan European Agency for Safety and Health at Work (EU-OSHA) menunjukkan bahwa 25-30% keluhan musculoskeletal pada operator manufaktur memiliki komponen kognitif yang memperburuk kelelahan fisik. Wong dan Crowe (2024) menegaskan dalam *Journal of Robotic Surgery* bahwa beban kognitif kumulatif (*cognitive workload*/CWL) yang tidak dikelola dengan baik dapat menurunkan *situation awareness*, meningkatkan *workflow disruption*, dan pada akhirnya menurunkan keselamatan pasien atau produk. Dalam konteks manufaktur, hal ini bertranslasi menjadi peningkatan *defect rate*, *cycle time* yang tidak terprediksi, dan *near-miss incidents* yang merugikan secara finansial maupun reputasional.

Gualtieri et al. (2022) secara eksplisit merespons gap tersebut dengan mengusulkan serangkaian *design guidelines* yang dapat diimplementasikan secara sistematis oleh insinyur perakitan, *ergonomist*, dan *system integrator*. Pendekatan mereka membedakan tiga lapisan beban kognitif yang diadopsi dari teori Sweller (1988) dan diaplikasikan ke domain HRC: *intrinsic load* (kompleksitas tugas yang melekat), *extraneous load* (presentasi informasi dan desain *interface*), serta *germane load* (proses konstruksi *schema* dan pembelajaran). Framework ini menjadi jembatan penting antara psikologi kognitif klasik dengan rekayasa sistem industri modern, sehingga memungkinkan pengukuran, prediksi, dan mitigasi beban kognitif secara kuantitatif.

Konteks aplikasi industri yang paling relevan meliputi: (1) perakitan *low-volume high-mix* pada industri otomotif dan elektronik, (2) operasi pick-and-place dengan *bin-picking* kompleks, (3) *machine tending* pada CNC dan *injection molding*, serta (4) operasi inspeksi kualitas yang membutuhkan penilaian visual presisi. Pada setiap domain tersebut, operator manusia dituntut untuk mempertahankan fokus, memantau perilaku robot yang *unpredictable* pada tingkat tertentu, mengambil keputusan dalam waktu singkat, dan berkomunikasi dengan anggota tim yang lain — semuanya secara simultan. Kegagalan mengelola salah satu aspek kognitif ini akan menyebabkan *human error* yang merupakan kontributor utama terhadap 70-80% kecelakaan industri menurut Reason (1990).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Cognitive Load Theory dalam Konteks HRC

Wong dan Crowe (2024) menguraikan tiga komponen beban kognitif yang masing-masing memiliki karakteristik kuantitatif berbeda. Total Cognitive Load ($CL_{total}$) dapat diformulasikan sebagai:

$$CL_{total} = CL_{intrinsic} + CL_{extraneous} + CL_{germane}$$

di mana $CL_{intrinsic}$ adalah fungsi dari jumlah elemen informasi yang harus diproses simultan dalam *working memory*:

$$CL_{intrinsic} = \alpha \cdot \sum_{i=1}^{n} E_i + \beta \cdot C_{task}$$

dengan $E_i$ adalah kompleksitas elemen interaktif ke-$i$, $C_{task}$ adalah *expertise* operator, $\alpha$ adalah koefisien bobot kompleksitas, dan $\beta$ adalah koefisien reduksi akibat pengalaman (umumnya bernilai negatif). Untuk operator berpengalaman, $\beta \cdot C_{task}$ merepresentasikan *chunking* otomatis yang menurunkan *intrinsic load* secara efektif.

Beban ekstrinsik ($CL_{extraneous}$) terkait dengan kualitas desain *human-machine interface* (HMI), *signal-to-noise ratio* visual, dan kompleksitas alur informasi. Gualtieri et al. (2022) mengusulkan model:

$$CL_{extraneous} = \gamma \cdot \log\left(\frac{I_{presentation}}{I_{relevan}}\right)$$

di mana $\gamma$ adalah koefisien presentasi, $I_{presentation}$ adalah total stimulus visual/auditori yang ditampilkan, dan $I_{relevan}$ adalah stimulus yang relevan dengan tujuan tugas. Idealnya, rasio ini diminimalkan melalui *signal clarity* dan *minimalistic interface design*.

Beban germane ($CL_{germane}$) merepresentasikan sumber daya kognitif yang dialokasikan untuk *schema construction* dan automasi keterampilan. Formulasinya:

$$CL_{germane} = \delta \cdot \left(1 - e^{-\kappa t}\right)$$

di mana $\delta$ adalah kapasitas germane maksimum, $\kappa$ adalah laju pembelajaran spesifik, dan $t$ adalah waktu pelatihan. Fungsi eksponensial ini menangkap efek *diminishing return* dari pelatihan berulang.

### 2.2 Pengukuran Beban Kognitif: NASA-TLX dan Metrik Subjektif

Instrumen NASA-Task Load Index (NASA-TLX) memberikan skor total:

$$TLX_{total} = \sum_{j=1}^{6} w_j \cdot s_j$$

dengan $w_j$ adalah bobot relatif (0-1) dari enam dimensi (Mental Demand, Physical Demand, Temporal Demand, Performance, Effort, Frustration), dan $s_j$ adalah skor mentah (0-100). Untuk aplikasi HRC, dimensi Mental Demand dan Effort biasanya memiliki bobot dominan ($w_{MD} + w_{E} > 0.4$).

### 2.3 Pengukuran Objektif: Heart Rate Variability (HRV)

Untuk pengukuran real-time, indeks beban kognitif berbasis HRV dapat dihitung melalui *Root Mean Square of Successive Differences* (RMSSD):

$$RMSSD = \sqrt{\frac{1}{N-1}\sum_{i=1}^{N-1}(RR_{i+1} - RR_i)^2}$$

Penurunan RMSSD di bawah baseline $RMSSD_0$ mengindikasikan peningkatan *sympathetic activation* yang berkorelasi dengan beban kognitif menurut berbagai studi. Indeks stres kognitif dapat didefinisikan:

$$CSI = 1 - \frac{RMSSD_{task}}{RMSSD_{rest}}$$

### 2.4 Model Throughput HRC

Efektivitas sistem HRC dimodelkan sebagai:

$$\eta_{HRC} = \frac{T_{useful}}{T_{cycle}} = \frac{T_{useful}}{T_{human} + T_{robot} + T_{coord} + T_{idle}}$$

di mana $T_{coord}$ adalah waktu tambahan untuk koordinasi dan *handover*, $T_{idle}$ adalah *dead time* yang muncul akibat *mismatch* antara kecepatan kognitif manusia dan eksekusi robot. Beban kognitif yang berlebihan akan meningkatkan $T_{coord}$ dan $T_{idle}$ secara signifikan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Gualtieri et al. (2022) mengusulkan *framework* tujuh tahap untuk pengembangan dan evaluasi panduan desain ergonomi kognitif:

**Tahap 1 — Analisis Tugas dan Pemetaan Beban Kognitif.**
Lakukan *Hierarchical Task Analysis* (HTA) untuk mendekomposisi operasi perakitan menjadi unit-unit atomik. Setiap unit diberi skor $CL_{intrinsic}$ menggunakan *Cognitive Complexity Index* (CCI). Unit dengan $CL_{intrinsic} > 70$ (skala 0-100) dikategorikan sebagai *high cognitive demand* dan memerlukan *task redistribution*.

**Tahap 2 — Alokasi Fungsi Manusia-Robot.**
Gunakan *Function Allocation Matrix* untuk menentukan sub-tugas yang harus dilakukan manusia (keputusan, inspeksi adaptif), robot (presisi, repetisi, kekuatan), atau kolaborasi. Kriteria alokasi mengikuti *Fitts List* yang diperbarui untuk HRC: tugas dengan *strength*, *precision*, *speed*, dan *repetitive nature* dialokasikan ke robot; tugas dengan *judgement*, *pattern recognition*, dan *exception handling* ke manusia.

**Tahap 3 — Desain Antarmuka dan Presentasi Informasi.**
Terapkan prinsip *Minimalistic Information Display*: tampilkan hanya elemen yang dibutuhkan untuk *decision point* saat ini. Gunakan *7±2 rule* Miller untuk *short-term memory capacity*. Rasio aspek kontras visual minimal 4.5:1 (standar WCAG 2.1 AA).

**Tahap 4 — Implementasi Protokol Komunikasi dan *Handover*.**
Definisikan *handover protocol* dengan *latency* maksimal $L_{max}$:

$$L_{max} = 0.3 \cdot T_{cycle}$$

Handover yang melebihi ambang batas ini akan memicu *context switching cost* yang meningkatkan $CL_{extraneous}$ secara signifikan.

**Tahap 5 — Pengukuran Baseline dan Validasi.**
Lakukan pengukuran subjektif (NASA-TLX, *Situation Awareness Rating Technique*/SART) dan objektif (HRV, *eye-tracking*, *pupillometry*) pada subset operator minimum 12 orang untuk signifikansi statistik (sesuai ISO 9241-210).

**Tahap 6 — Iterasi Desain dan *Pilot Testing*.**
Terapkan *Design-evaluate-redesign cycle* minimal tiga iterasi. Setiap iterasi harus menurunkan $TLX_{total}$ minimal 8-10% dari baseline.

**Tahap 7 — Standardisasi dan Dokumentasi.**
Hasilkan *Design Guideline Document* yang mencakup *use cases*, *anti-patterns*, *metric thresholds*. Distribusikan ke seluruh *system integrators* dan *line supervisors*.

Diagram alir SOP ini mengikuti pendekatan *V-Model* yang umum dalam rekayasa sistem industri: spesifikasi tingkat atas → desain detail → implementasi → verifikasi per modul → validasi sistem terintegrasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah lini perakitan *small-batch* produk elektronik konsumen (modul sensor IoT) diimplementasikan dengan sel HRC. Karakteristik operasi:
- *Cycle time* target: $T_{target} = 45$ detik per unit
- Operasi kolaboratif: *pick-and-place* komponen SMD, inspeksi visual AOI, *hand-overs* antar robot dan operator
- Operator: teknisi berpengalaman 5 tahun, 12 partisipan studi

### 4.2 Data Input

| Parameter | Simbol | Nilai | Sumber |
|-----------|--------|-------|--------|
| Kompleksitas tugas | $CL_{intrinsic}$ | 65 | CCI Assessment |
| Rasio presentasi | $I_{presentation}/I_{relevan}$ | 4.2 | HMI Audit |
| Kapasitas germane | $\delta$ | 100 | Training Data |
| Laju pembelajaran | $\kappa$ | 0.05/hari | Historical |
| RMSSD baseline | $RMSSD_{rest}$ | 42 ms | Physiological |
| Waktu pelatihan | $t$ | 240 jam | Logbook |

### 4.3 Perhitungan Baseline (Sebelum Panduan Diterapkan)

**Step 1: Hitung $CL_{extraneous}$ baseline**

$$CL_{extraneous,0} = \gamma \cdot \log(4.2) = 12 \cdot 1.435 = 17.2$$

($\gamma = 12$ sesuai konstanta empiris Gualtieri et al.)

**Step 2: Hitung $CL_{germane}$**

$$CL_{germane} = 100 \cdot (1 - e^{-0.05 \cdot 10}) = 100 \cdot (1 - 0.6065) = 39.4$$

**Step 3: Hitung $CL_{total,0}$**

$$CL_{
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
