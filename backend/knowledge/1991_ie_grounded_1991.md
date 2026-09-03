# 1991 — Analisis Manfaat dan Tantangan Implementasi Metodologi FMEA AIAG/VDA pada Industri Manufaktur Otomotif serta Aplikasinya pada Pemeliharaan Mesin CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Benefícios e Desafios da Implantação do FMEA AIAG/VDA em uma Multinacional Fabricante de Peças Automotivas* — Implikasi Metodologis dan Kuantitatif terhadap Manajemen Risiko Kualitas
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*, Vol. 22 No. 1. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi dalam ekosistem yang menuntut integritas produk mendekati nol-cacat (*near-zero-defect*), regulasi keselamatan yang ketat (UNECE, ISO 26262), serta tekanan biaya akibat program *recall* yang bersifat lintas negara. Dalam konteks inilah Bizeli dan Terazzi (2024) — melalui publikasi mereka di *Revista Interface Tecnológica* dengan DOI [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155) — melakukan studi kasus kualitatif-deskriptif di sebuah perusahaan multinasional produsen komponen otomotif yang melakukan transisi dari FMEA konvensional (AIAG, 2008) menuju pendekatan harmonisasi AIAG/VDA (2019). Metodologi AIAG/VDA FMEA muncul sebagai respon atas kelemahan *Risk Priority Number* (RPN) klasik yang bersifat kompensatorik — di mana skor rendah pada satu parameter dapat ditutupi oleh skor tinggi pada parameter lain — sehingga menghasilkan distorsi prioritas mitigasi. Pendekatan baru ini menggunakan *Action Priority Level* (APL) berbasis tabel keputusan terstruktur yang memperhitungkan *Severity* (S), *Occurrence* (O), dan *Detection* (D) secara simultan melalui pemetaan fuzzy-logic-style.

Studi Bizeli dan Terazzi (2024) melakukan wawancara semi-terstruktur terhadap tiga profesional berpengalaman (insinyur kualitas, manajer program, dan teknisi proses) untuk memetakan secara empiris manfaat dan hambatan implementasi. Temuan mereka menunjukkan empat manfaat utama: (i) pencegahan kegagalan proaktif, (ii) reduksi biaya *rework* dan *recall*, (iii) peningkatan reliabilitas produk, dan (iv) integrasi lintas-fungsi tim. Di sisi tantangan, studi ini mengidentifikasi resistensi organisasional terhadap perubahan prosedur, kebutuhan pelatihan berkelanjutan, dan kompleksitas dokumentasi baru. Urgensi ekonomis dari topik ini dapat diukur melalui fakta bahwa biaya *recall* industri otomotif AS saja mencapai rata-rata USD 3,1 miliar per program besar (NHTSA, 2022), menjadikan investasi dalam metodologi pencegahan seperti AIAG/VDA FMEA memiliki *payback period* yang sangat atraktif. Pelengkap penting pada domain ini datang dari Saputra dan Sukmono (2024) [DOI: 10.21070/ups.8248](https://doi.org/10.21070/ups.8248) yang menerapkan kerangka FMEA pada pemeliharaan mesin *CNC milling*, menandakan bahwa logika risk-based prevention memiliki portabilitas tinggi lintas sektor manufaktur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Risiko Klasik (RPN) vs. Action Priority (AP)

Pendekatan FMEA klasik menggunakan *Risk Priority Number* sebagai berikut:

$$RPN_i = S_i \cdot O_i \cdot D_i$$

dengan $S_i, O_i, D_i \in \{1,2,\ldots,10\}$. Kerugian fundamental dari formula ini adalah sifatnya yang *compensatory*: dua mode kegagalan dengan profil risiko sangat berbeda, misalnya $(S=10,O=1,D=1)$ menghasilkan $RPN=10$, sedangkan $(S=4,O=5,D=5)$ juga menghasilkan $RPN=100$, padahal risiko keselamatan yang pertama jauh lebih kritis.

AIAG/VDA (2019) mengganti pendekatan ini dengan **Action Priority (AP)**, yang nilainya bukan merupakan perkalian tetapi merupakan fungsi pemetaan dari triplet $(S,O,D)$ ke dalam himpunan diskret $\{H, M, L\}$ (Tinggi, Sedang, Rendah):

$$AP_i = f_{AP}(S_i, O_i, D_i)$$

di mana $f_{AP}$ didefinisikan oleh tabel keputusan standar AIAG/VDA berdasarkan tiga parameter: S evaluasi kritisitas keselamatan pelanggan, O evaluasi probabilitas kejadian, dan D evaluasi kemampuan deteksi. Setiap kombinasi menghasilkan rekomendasi aksi yang berbeda — AP=H mengharuskan *action plan* wajib, AP=M merekomendasikan, AP=L menunjukkan bahwa dokumentasi saja cukup.

### 2.2 Model Reliabilitas Komponen

Untuk mengkuantifikasi dampak mode kegagalan terhadap kinerja sistem, laju kegagalan diasumsikan mengikuti distribusi eksponensial (umum untuk *useful life period* komponen elektronik dan mekanis):

$$R(t) = e^{-\lambda t}$$

dengan $\lambda$ adalah laju kegagalan (failure per unit time), dan *Mean Time To Failure*:

$$MTTF = \frac{1}{\lambda}$$

Untuk komponen *repairable*, relevan menggunakan:

$$MTBF = \frac{1}{\lambda} \quad ; \quad Availability = A = \frac{MTBF}{MTBF + MTTR}$$

### 2.3 Biaya Kualitas (Cost of Poor Quality)

Formulasi *Cost of Poor Quality* (COPQ) untuk mengevaluasi dampak ekonomi implementasi FMEA:

$$COPQ = C_{prevention} + C_{appraisal} + C_{internal\ failure} + C_{external\ failure}$$

dengan $C_{internal\ failure}$ mencakup *scrap* dan *rework*, dan $C_{external\ failure}$ mencakup garansi dan *recall*. Efektivitas program FMEA diukur dari selisih $\Delta COPQ = COPQ_{before} - COPQ_{after}$.

## 3. Metodologi Rekayasa & SOP Implementasi AIAG/VDA FMEA

Berdasarkan Bizeli dan Terazzi (2024), implementasi AIAG/VDA FMEA mengikuti enam fase terstruktur yang dapat dipandang sebagai SOP (*Standard Operating Procedure*):

**Fase 1 — Planning & Preparation.** Tim lintas-fungsi (rekayasa, manufaktur, kualitas, *supply chain*, dan *customer*) dibentuk; ruang lingkup (*scope*), batas sistem, dan asumsi didefinisikan. Keluaran: *project charter*.

**Fase 2 — System Analysis.** Struktur pohon produk dan proses dibuat menggunakan diagram *Block Diagram* dan *P-Diagram* (Parameter Diagram). Setiap elemen fungsi sistem diidentifikasi beserta performansi yang diharapkan.

**Fase 3 — Failure Analysis.** Setiap fungsi diterjemahkan menjadi mode kegagalan potensial dan efeknya. Hubungan kausal *Cause → Failure Mode → Effect* dibangun menggunakan *Structure Tree* dan *Function Net*.

**Fase 4 — Risk Analysis.** Untuk setiap mode kegagalan, triplet $(S,O,D)$ dinilai menggunakan *AIAG/VDA FMEA Handbook Tables*. Hasilnya bukan RPN, melainkan **Action Priority** melalui tabel keputusan.

**Fase 5 — Optimization.** Tindakan mitigasi dirancang khusus untuk item ber-AP=H; untuk AP=M dirancang secara kondisional. Setiap aksi diberi *responsibility matrix* (RACI) dan target tanggal penyelesaian.

**Fase 6 — Documentation & Knowledge Management.** Hasil didokumentasikan dalam format standar dan dimasukkan ke dalam sistem PLM (*Product Lifecycle Management*) perusahaan untuk aksesibilitas organisasi. Tahapan ini yang oleh Bizeli dan Terazzi (2024) diidentifikasi sebagai salah satu titik resistensi terbesar, karena format baru secara signifikan lebih kompleks daripada lembar FMEA tradisional.

Pendekatan serupa juga diterapkan oleh Saputra dan Sukmono (2024) pada pemeliharaan mesin frais CNC, menandakan bahwa *workflow* ini portabel lintas domain — dari komponen otomotif hingga *capital equipment*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Kasus:** Komponen *Brake Caliper Housing* (casing kaliper rem) produksi multinasional komponen otomotif — komponen fungsional keselamatan kritis (regulasi UNECE R13). Diidentifikasi tiga mode kegagalan utama dari data historis lini *die casting*:

| Mode Kegagalan | Severity (S) | Occurrence (O) | Detection (D) |
|----------------|--------------|----------------|---------------|
| F1: Porositas internal | 8 (kehilangan fungsi rem) | 4 (jarang) | 6 (sedang) |
| F2: Deviasi dimensi kritis | 7 (degradasi signifikan) | 6 (cukup sering) | 4 (kebetulan) |
| F3: Retak saat *heat treatment* | 9 (kegagalan total) | 2 (sangat jarang) | 7 (kebetulan sulit) |

### 4.1 Perhitungan RPN Klasik (untuk perbandingan)

$$RPN_{F1} = 8 \times 4 \times 6 = 192$$

$$RPN_{F2} = 7 \times 6 \times 4 = 168$$

$$RPN_{F3} = 9 \times 2 \times 7 = 126$$

Berdasarkan RPN klasik, prioritas mitigasi seharusnya F1 > F2 > F3, namun analisis kualitatif menunjukkan F3 (retak dengan S=9) memiliki konsekuensi keselamatan yang paling fatal.

### 4.2 Perhitungan Action Priority AIAG/VDA

Dengan menggunakan tabel keputusan AIAG/VDA:

- **F1 (S=8,O=4,D=6):** Severity tinggi + Occurrence rendah-sedang + Detection sedang → **AP = H (Tinggi)**
- **F2 (S=7,O=6,D=4):** Severity tinggi + Occurrence cukup sering → **AP = H (Tinggi)**
- **F3 (S=9,O=2,D=7):** Severity sangat tinggi + Occurrence rendah + Detection sulit → **AP = H (Tinggi)**

Meskipun ketiga mode memiliki AP=H — yang mengharuskan *action plan* wajib — bobot strategis berbeda. F3 meskipun *occurrencenya* rendah, memiliki D=7 yang berarti deteksinya sulit, sehingga secara AIAG/VDA menjadi prioritas tertinggi dalam alokasi sumber daya engineering.

### 4.3 Estimasi Dampak Ekonomi

Asumsikan biaya produksi per unit = USD 12, tingkat cacat saat ini = 2,5% (dari 400.000 unit/tahun), dengan *Cost of Poor Quality*:

$$COPQ_{internal} = 400.000 \times 0{,}025 \times USD\ 12 = USD\ 120.000$$

$$COPQ_{external} = \text{recall\ rate} \times \text{cost\ per\ recall} \approx USD\ 2.400.000\ (\text{asumsi\ 3\ insiden/tahun})$$

$$COPQ_{total} = USD\ 2.520.000$$

Dengan implementasi AIAG/VDA FMEA, Bizeli dan Terazzi (2024) melaporkan potensi reduksi *internal failure cost* sebesar 35–50% dan *external failure cost* sebesar 60–80%:

$$\Delta COPQ_{internal} = 0{,}40 \times USD\ 120.000 = USD\ 48.000$$

$$\Delta COPQ_{external} = 0{,}70 \times USD\ 2.400.000 = USD\ 1.680.000$$

$$\Delta COPQ_{total} \approx USD\ 1.728.000\ \text{per tahun}$$

### 4.4 Analisis Reliabilitas dengan Re-parameterisasi Laju Kegagalan

Jika tindakan mitigasi menurunkan laju kegagalan $\$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
