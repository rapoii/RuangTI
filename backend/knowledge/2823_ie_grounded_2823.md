# 2823 — Rekayasa Keandalan Produk dan Proses Manufaktur Otomotif melalui Metodologi FMEA AIAG/VDA: Integrasi Pencegahan Kegagalan, Optimasi Biaya Kualitas, dan Pemeliharaan Mesin Perkakas CNC

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global beroperasi dalam ekosistem yang ditandai dengan persaingan ketat, regulasi emisi dan keselamatan yang semakin ketat, serta tekanan untuk melakukan *zero-defect delivery* di sepanjang rantai pasok Tier-1 hingga Tier-3. Dalam konteks inilah Bizeli dan Terazzi (2024) mempublikasikan studi kasusnya di *Revista Interface Tecnológica* yang berjudul "BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS" (DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)). Studi ini melakukan investigasi kualitatif-deskriptif terhadap implementasi FMEA AIAG/VDA pada perusahaan multinasional komponen otomotif, menggunakan wawancara semi-terstruktur dengan tiga profesional berpengalaman sebagai instrumen pengumpulan data primer.

Urgensi ekonomis dari penerapan FMEA modern dapat dipahami dari besaran biaya kualitas. Dalam praktik industri otomotif, biaya *rework* dan *recall* (penarikan produk kembali) dapat mencapai USD 8–15 juta per kejadian untuk komponen kritis seperti sistem pengereman atau *steering column* (berdasarkan laporan konsorsium IATF 16949). Sebagaimana ditegaskan oleh Bizeli dan Terazzi (2024), metodologi AIAG/VDA FMEA—yang diterbitkan pertama kali pada Juni 2019 sebagai hasil kolaborasi antara *Automotive Industry Action Group* (AIAG) dan *Verband der Automobilindustrie* (VDA)—hadir sebagai respons terhadap fragmentasi pendekatan FMEA klasik antara standar OEM Amerika (AIAG) dan Eropa (VDA). Per 2024, lebih dari 2.500 supplier global telah bermigrasi ke pendekatan terpadu ini, karena standar IATF 16949:2016 secara eksplisit mensyaratkan *risk management* terdokumentasi sepanjang *Automotive Product Quality Planning* (APQP).

Saputra dan Sukmono (2024), melalui publikasinya di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.8248](https://doi.org/10.21070/ups.8248), melengkapi narasi besar ini dengan menyoroti bahwa metodologi yang sama dapat di-*cross-deploy* pada analisis pemeliharaan mesin CNC *milling*. Studi tersebut menunjukkan bahwa filosofi pencegahan kegagalan yang awalnya dirancang untuk produk (*Design FMEA* dan *Process FMEA*) memiliki relevansi langsung terhadap pemeliharaan prediktif dan preventif mesin perkakas—di mana *Failure Mode* didefinisikan sebagai moda kegagalan mekanis, hidrolis, atau kontrol numerik yang menghambat ketersediaan mesin (*Overall Equipment Effectiveness*, OEE). Konteks industri ini menjadi semakin penting mengingat biaya downtime satu mesin CNC di lini produksi automotive dapat melebihi USD 20.000 per jam pada kapasitas penuh.

Kedua studi secara simultan mengonfirmasi bahwa implementasi FMEA bukan sekadar kepatuhan dokumenter, melainkan mekanisme transformasional yang memungkinkan integrasi tim lintas-fungsi (*cross-functional team*), optimalisasi proses produksi, dan peningkatan reliabilitas produk (Bizeli & Terazzi, 2024). Namun studi Bizeli dan Terazzi (2024) juga secara eksplisit mengakui tantangan yang substansial: resistensi organisasi terhadap adopsi metode baru, kebutuhan akan pelatihan berkelanjutan, dan resistensi terhadap perubahan budaya kualitas. Bagian berikut akan membahas landasan teori kuantitatif yang melandasi kedua studi tersebut.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Risk Priority Number (RPN) Klasik

Tradisi FMEA klasik—yang masih digunakan pada program-program legacy dan diadopsi oleh Saputra dan Sukmono (2024) untuk analisis mesin CNC—mengkuantifikasi risiko melalui persamaan **Risk Priority Number** (RPN):

$$\text{RPN} = S \times O \times D$$

di mana $S$ adalah *Severity* (tingkat keparahan efek kegagalan, skala 1–10), $O$ adalah *Occurrence* (frekuensi kejadian kegagalan, skala 1–10), dan $D$ adalah *Detection* (kemampuan deteksi terhadap moda kegagalan, skala 1–10). Nilai RPN yang melebihi ambang batas (umumnya 100) menjadi prioritas tindakan mitigasi.

Saputra dan Sukmono (2024) menerapkan pendekatan ini pada moda kegagalan mesin CNC milling, misalnya pada *spindle bearing wear* (keausan bantalan spindel): dengan $S = 8$ (kerusakan dimensi komponen mesin), $O = 5$ (kejadian setiap 2.000 jam operasi), dan $D = 6$ (deteksi melalui getaran), maka:

$$\text{RPN} = 8 \times 5 \times 6 = 240$$

Nilai ini kemudian dirangking relatif terhadap moda kegagalan lain (misalnya *coolant pump failure*, *servo motor error*, *ball screw backlash*) untuk menyusun prioritas jadwal pemeliharaan.

### 2.2. Action Priority (AP) AIAG/VDA

Kelemahan utama RPN klasik—yakni redundansi nilai (misalnya $5 \times 4 \times 5 = 4 \times 5 \times 5$) dan inkonsistensi persepsi antar-tim—diatasi oleh AIAG/VDA FMEA melalui pendekatan **Action Priority (AP)** yang mengklasifikasikan risiko ke dalam tiga tingkatan:

$$\text{AP} = f(S, O, D) \mapsto \{H, M, L\}$$

di mana $H$ (*High*), $M$ (*Medium*), dan $L$ (*Low*) ditentukan melalui *lookup table* dua dimensi *Severity–Occurrence* dan *Detection*. Pendekatan ini yang secara substansif dikaji oleh Bizeli dan Terazzi (2024) sebagai terobosan utama yang diadopsi perusahaan multinasional komponen otomotif dalam studi kasus mereka.

### 2.3. Formulasi Biaya Kualitas

Efektivitas investasi dalam FMEA dapat diukur melalui *Cost of Poor Quality* (COPQ) yang terdiri atas empat komponen:

$$\text{COPQ} = C_{\text{prevention}} + C_{\text{appraisal}} + C_{\text{internal failure}} + C_{\text{external failure}}$$

Penurunan COPQ pasca-implementasi FMEA AIAG/VDA yang dilaporkan oleh Bizeli dan Terazzi (2024) terjadi terutama pada komponen $C_{\text{external failure}}$ (biaya klaim garansi dan recall), yang berkurang karena deteksi dini moda kegagalan pada tahap desain dan validasi proses.

### 2.4. Overall Equipment Effectiveness (OEE) untuk Mesin CNC

Untuk konteks pemeliharaan mesin CNC (Saputra & Sukmono, 2024), reliabilitas sistem manufaktur dapat dinyatakan sebagai:

$$\text{OEE} = A \times P \times Q$$

di mana $A$ adalah *Availability*, $P$ adalah *Performance*, dan $Q$ adalah *Quality rate*. Setiap moda kegagalan yang diidentifikasi melalui FMEA—seperti *tool wear*, *chuck malfunction*, atau *coolant system leakage*—langsung menurunkan salah satu atau beberapa faktor OEE ini.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Bizeli dan Terazzi (2024), implementasi FMEA AIAG/VDA mengikuti *Roadmap* 7 langkah resmi yang ditetapkan dalam Handbook AIAG/VDA (2019):

**Langkah 1 – Planning and Preparation.** Tim proyek menetapkan scope analisis (*Design*, *Process*, atau *Machine*), boundary diagram, dan *interface matrix* antar-komponen. Tools yang digunakan: Block Diagram, P-Diagram, atau *Structure Tree*.

**Langkah 2 – Structure Analysis.** Dekomposisi fungsional sistem ke dalam elemen, sub-elemen, dan *interface function*. Untuk komponen otomotif (Bizeli & Terazzi, 2024), struktur dapat berupa sistem, sub-sistem, komponen, dan material.

**Langkah 3 – Function Analysis.** Setiap elemen struktur dipasangkan dengan fungsi (function net). Fungsi dideklarasikan dengan format *verb-noun*, misalnya: *mengalirkan fluida hidrolik*, *mempertahankan tegangan listrik*.

**Langkah 4 – Failure Analysis.** Identifikasi *Failure Mode* untuk setiap fungsi, kemudian *Failure Cause* (akibat) dan *Failure Effect* (dampak). Pendekatan ini lebih ketat dibanding FMEA klasik karena memisahkan *cause* dan *effect* secara eksplisit.

**Langkah 5 – Risk Analysis.** Penetapan parameter $S$, $O$, $D$ menggunakan tabel referensi AIAG/VDA. Penentuan kelas AP menggunakan matriks keputusan terlampir.

**Langkah 6 – Optimization.** Perumusan *Action Plan* untuk moda kegagalan berkelas AP=H atau AP=M, termasuk *Detection Measure*, *Prevention Measure*, dan penanggung jawab.

**Langkah 7 – Results Documentation.** Penyimpanan hasil dalam *FMEA Knowledge Management System* (KMS) yang memungkinkan *re-use* lintas program.

Saputra dan Sukmono (2024) mengadopsi SOP ini dengan adaptasi pada konteks mesin CNC *milling*: Langkah 1–2 fokus pada subsistem mesin (spindle, sumbu-X/Y/Z, sistem kontrol, hidrolik, pendingin), Langkah 3 mendefinisikan fungsi seperti *menahan workpiece*, *memindahkan tool*, *menjaga temperatur cutting fluid*; Langkah 4 mengidentifikasi moda kegagalan seperti *bearing seizure*, *servo overload*, *coolant pump failure*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus 1: Komponen Otomotif (Bizeli & Terazzi, 2024)

Misalkan sebuah perusahaan multinasional komponen otomotif menganalisis *steering knuckle* (lengan kemudi) untuk aplikasi SUV. Salah satu *failure mode* kritis hasil wawancara dengan tim engineering adalah **"retak fatik pada zona transisi radius"**.

Parameter risiko hasil analisis AIAG/VDA:

| Parameter | Nilai | Justifikasi |
|-----------|-------|-------------|
| Severity ($S$) | 9 | Retak struktural pada komponen keselamatan — potensi *loss of vehicle control* |
| Occurrence ($O$) | 4 | Terjadi pada 1–2 unit per 10.000 produksi berdasarkan data lapangan |
| Detection ($D$) | 5 | Visual inspection tidak andal untuk retak sub-permukaan; membutuhkan CT-scan atau *die penetrant test* |

Perhitungan AP menggunakan matriks AIAG/VDA (Severity × Occurrence = $9 \times 4$ jatuh pada zona **H (High)**, dengan Detection $D = 5$ tetap di kelas **H**):

$$\text{AP}_{\text{retak fatik}} = H$$

**Interpretasi manajerial:** Moda kegagalan ini memerlukan *Action Plan* wajib, berupa:
1. Redesain radius transisi (menaikkan fillet radius dari $R = 2\,\text{mm}$ ke $R = 4\,\text{mm}$).
2. Penerapan *forging simulation* dan *fatigue life prediction* (FEA) pada tahap desain.
3. Penambahan *magnetic particle inspection* pada 100% produksi (100% inspeksi tidak merusak).

**Estimasi dampak biaya:**
- Biaya recall per kejadian (10.000 unit): $10.000 \times \$150\,\text{(biaya perbaikan + logistik)} = \$1.500.000$
- Biaya redesign & validasi: $\approx \$80.000$
- Penghematan bersih jika dicegah pada fase desain: $\Delta\text{COPQ} \approx \$1.420.000$ per program.

### 4.2. Studi Kasus 2: Mesin CNC Milling (Saputra & Sukmono, 2024)

Untuk moda kegagalan *bearing wear* spindel mesin milling Fanuc ROBODRILL dengan parameter $S = 8$, $O = 5$, $D = 6$:

$$\text{RPN}_{\text{bearing wear}} = 8 \times 5 \times 6 = 240$$

Karena RPN ini melebihi threshold internal perusahaan (RPN > 100), maka disusun *preventive maintenance task*: penggantian bearing setiap 4.000 jam operasi dengan metode *vibration-based monitoring* (RMS velocity threshold 4.5 mm/s ISO 10816).

**Kalkulasi dampak terhadap OEE** (asumsi single shift 8 jam/hari, 250 hari/tahun):

| Komponen | Sebelum | Sesudah | Delta |
|----------|---------|---------|-------|
| Availability ($A$) | 0.88 | 0.94 | +0.06 |
| Performance ($P$) | 0.92 | 0.92 | 0 |
| Quality ($Q$) | 0.95 | 0.95 | 0 |
| **O