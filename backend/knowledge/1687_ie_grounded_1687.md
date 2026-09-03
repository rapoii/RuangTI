# 1687 — Analisis FMEA AIAG/VDA dalam Manufaktur Otomotif dan Aplikasi Pemeliharaan Mesin CNC: Integrasi Manajemen Risiko, Keandalan, dan Optimalisasi Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** BENEFÍCIOS E DESAFIOS DA IMPLANTAÇÃO DO FMEA AIAG/VDA EM UMA MULTINACIONAL FABRICANTE DE PEÇAS AUTOMOTIVAS
**Jurnal & Sitasi Utama:** João Vitor Bizeli, Luis Fernando Terazzi (2024). *Revista Interface Tecnológica*. DOI: [https://doi.org/10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)
**Sitasi Pendukung:** Ardiansyah Eko Saputra, Tedjo Sukmono (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.8248](https://doi.org/10.21070/ups.8248)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur otomotif global menghadapi tekanan ganda yang semakin intensif pada era Industri 4.0: di satu sisi, tuntutan kualitas produk mendekati nol-defect (*zero defect philosophy*) yang dipaksakan oleh standar IATF 16949:2016; di sisi lain, kompleksitas rantai pasok dan elektrifikasi powertrain memperkenalkan modus kegagalan baru yang belum terpetakan dalam basis data historis. Dalam konteks inilah Bizeli dan Terazzi (2024, DOI: [10.31510/infa.v22i1.2155](https://doi.org/10.31510/infa.v22i1.2155)) mempublikasikan studi kualitatif berbasis *case study* di sebuah *multinational automotive parts manufacturer*, dengan melakukan wawancara semi-terstruktur terhadap tiga praktisi berpengalaman yang bertanggung jawab langsung atas implementasi FMEA AIAG/VDA. Metodologi FMEA sendiri merupakan evolusi dari pendekatan konvensional FMEA yang dikembangkan oleh Ford Motor Company tahun 1970-an, dan telah distandardisasi secara resmi melalui joint publication AIAG (Automotive Industry Action Group) dan VDA (Verband der Automobilindustrie) pada tahun 2019 dengan edisi pertama *AIAG-VDA FMEA Handbook*. 

Urgensi ekonomi dari studi ini tidak terbantahkan. National Highway Traffic Safety Administration (NHTSA) mencatat bahwa pada 2023 saja, biaya *recall* otomotif di Amerika Serikat menembus angka USD 5,7 miliar, di mana sebagian besar akar penyebabnya adalah kegagalan desain atau proses yang seharusnya dapat diidentifikasi pada fase APQP (Advanced Product Quality Planning) melalui FMEA yang rigor. Bizeli & Terazzi (2024) menekankan bahwa *failure prevention* yang sistematis melalui AIAG/VDA FMEA tidak hanya menurunkan *cost of poor quality* (COPQ), tetapi juga meningkatkan *first-time-right* (FTR) rate yang secara langsung berimplikasi pada OEE (Overall Equipment Effectiveness). Lebih jauh, artikel tersebut menyoroti tiga tantangan utama yang berulang di lapangan: (1) resistensi organisasi terhadap perubahan format dari FMEA konvensional ke format *Action Priority* (AP) berbasis tabel Thresholds; (2) kebutuhan *continuous training* yang signifikan karena perbedaan semantik antara Severity (S), Occurrence (O), dan Detection (D) dalam handbook baru; serta (3) integrasi lintas fungsi (*cross-functional team*) yang menuntut kehadiran simultan dari engineering, manufacturing, dan quality assurance.

Dari sisi paralel, Saputra dan Sukmono (2024, DOI: [10.21070/ups.8248](https://doi.org/10.21070/ups.8248)) mendemonstrasikan penerapan FMEA klasik pada pemeliharaan mesin *CNC milling* — sebuah domain yang secara langsung relevan dengan industri otomotif karena hampir seluruh komponen *powertrain*, *chassis bracket*, dan *transmission housing* diproduksi melalui proses permesinan CNC presisi tinggi. Kombinasi kedua literatur ini memberikan gambaran holistik bahwa metodologi FMEA, baik dalam format AIAG/VDA modern maupun format klasik RPN, memiliki aplikasi universal mulai dari level desain produk hingga level pemeliharaan aset kritis. Modul 1687 ini dirancang untuk mensintesis kedua perspektif tersebut dalam kerangka rekayasa industri yang terstruktur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Kuantitatif FMEA AIAG/VDA

Berbeda dengan FMEA konvensional yang menghasilkan *Risk Priority Number* (RPN) sebagai metrik tunggal, AIAG/VDA Handbook 2019 memperkenalkan *Action Priority* (AP) yang dikategorikan berdasarkan tabel *thresholds* kombinasi (S, O, D). Namun, untuk keperluan analisis komparatif dan benchmarking historis, formulasi RPN tetap digunakan dan didefinisikan sebagai:

$$RPN = S \times O \times D$$

dengan $S$ adalah tingkat keparahan (*Severity*), $O$ adalah tingkat kejadian (*Occurrence*), dan $D$ adalah tingkat kesulitan deteksi (*Detection*). Ketiga parameter ini dievaluasi pada skala ordinal 1–10, sehingga domain RPN secara teoritis adalah $[1, 1000]$.

Saputra & Sukmono (2024) dalam studi CNC milling-nya mengaplikasikan formulasi ini secara langsung pada komponen mesin seperti *spindle*, *ball screw*, dan *tool magazine*. Sebagai contoh, mereka menetapkan parameter berikut untuk modus kegagalan "*spindle bearing wear*":

$$S = 9, \quad O = 4, \quad D = 5$$
$$RPN_{\text{spindle}} = 9 \times 4 \times 5 = 180$$

### 2.2 Action Priority (AP) dalam AIAG/VDA 2019

Handbook AIAG/VDA menggantikan RPN tunggal dengan sistem klasifikasi tiga tingkat menggunakan *Risk Matrix* 2 dimensi (Severity–Occurrence) yang kemudian dimodulasi oleh Detection. Formulasi logika AP dapat diekspresikan secara kondisional:

$$AP = f(S, O, D) = \begin{cases} \text{AP=H (Highest)} & \text{jika } S \in \{9,10\} \text{ dan } O \in \{8,9,10\} \\ \text{AP=H (Highest)} & \text{jika } S \in \{9,10\} \text{ dan } D \in \{8,9,10\} \\ \text{AP=M (Medium)} & \text{jika } S \in \{4{-}8\} \text{ dengan kombinasi tertentu} \\ \text{AP=L (Low)} & \text{jika } S \in \{1,2,3\} \text{ dan } O \in \{1,2,3\} \end{cases}$$

Aturan presisi lengkap tersedia pada Tabel A-2, A-3, dan A-4 dalam handbook, namun inti logikanya adalah: tindakan korektif **wajib** diambil untuk modus kegagalan ber-AP=H atau AP=M, sedangkan AP=L bersifat *improvement optional*.

### 2.3 Formulasi Kuantitatif Lanjutan

Untuk analisis reliabilitas yang lebih rigor, *failure rate* dapat dimodelkan dengan distribusi Weibull dua parameter yang umum digunakan dalam pemeliharaan mesin CNC (Saputra & Sukmono, 2024):

$$R(t) = e^{-(t/\eta)^{\beta}}$$

dengan $\beta$ adalah *shape parameter* (menunjukkan fase kehidupan komponen: $\beta < 1$ untuk *infant mortality*, $\beta \approx 1$ untuk *useful life*, $\beta > 1$ untuk *wear-out*) dan $\eta$ adalah *scale parameter* atau *characteristic life*. Hubungan antara RPN dan laju kegagalan kemudian dapat diformulasikan melalui *risk function* kumulatif:

$$\Lambda(t) = -\ln[R(t)] = \left(\frac{t}{\eta}\right)^{\beta}$$

### 2.4 Perhitungan Availability dan MTBF

Saputra & Sukmono (2024) menggunakan *Mean Time Between Failures* (MTBF) dan *Mean Time To Repair* (MTTR) sebagai indikator ketersediaan mesin CNC:

$$MTBF = \frac{\text{Total Operating Time}}{\text{Number of Failures}}$$

$$MTTR = \frac{\text{Total Downtime for Repairs}}{\text{Number of Failures}}$$

$$Availability = \frac{MTBF}{MTBF + MTTR}$$

Nilai availability mesin CNC industri pada umumnya ditargetkan $A \geq 0{,}95$ (95%) untuk standar *world-class manufacturing*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Kerangka Implementasi AIAG/VDA FMEA (7-Step Approach)

Bizeli & Terazzi (2024) menjelaskan bahwa implementasi AIAG/VDA mengikuti pendekatan terstruktur **7-step** yang merupakan evolusi dari *6-step* klasik:

1. **Planning & Preparation** — Mendefinisikan scope, tim lintas fungsi, dan boundary diagram.
2. **Structure Analysis** — Mengidentifikasi elemen sistem menggunakan *Block Diagram* dan *Interface Matrix* (mirip dengan DFMEA: *Customer–Function–Requirements–Specifications*).
3. **Function Analysis** — Membangun *Function Net* (jaringan fungsi) yang menunjukkan hubungan antar-fungsi.
4. **Failure Analysis** — Mengidentifikasi modus kegagalan (FM), efek (FE), dan penyebab (FC) menggunakan *Cause & Effect Diagram* atau *Fishbone* (Ishikawa).
5. **Risk Analysis** — Menilai S, O, D dan menentukan *Action Priority* (AP).
6. **Optimization** — Merancang *Prevention Controls* (PC) dan *Detection Controls* (DC) untuk menurunkan AP.
7. **Results Documentation** — Menstandardisasi *FMEA Worksheet* dan melakukan *management review*.

### 3.2 Diagram Alir Proses FMEA CNC (Saputra & Sukmono, 2024)

```
[Identifikasi Komponen CNC]
        ↓
[Pengumpulan Data Historis Kegagalan]
        ↓
[Penentuan Failure Mode per Komponen]
        ↓
[Penilaian Severity, Occurrence, Detection]
        ↓
[Perhitungan RPN]
        ↓
[RPN > Threshold?]
   ├── Ya → Tindakan Korektif (Redesign, Preventive Maintenance)
   └── Tidak → Monitoring Rutin
        ↓
[Re-evaluasi RPN setelah Mitigasi]
```

### 3.3 SOP Pemeliharaan Berbasis FMEA

Standard Operating Procedure yang dikembangkan oleh Saputra & Sukmono (2024) untuk mesin CNC milling mencakup:

| Langkah | Aktivitas | Output |
|---------|-----------|--------|
| 1 | *Failure mode identification* melalui *historical breakdown log* | Daftar FM |
| 2 | Brainstorming tim pemeliharaan & operator | Daftar FE dan FC |
| 3 | Penilaian kuantitatif S, O, D | Tabel RPN |
| 4 | Prioritas mitigasi berdasarkan RPN ≥ 100 | *Action plan* |
| 5 | Implementasi *preventive maintenance schedule* | Jadwal PM |
| 6 | Monitoring KPI: *MTBF*, *MTTR*, *Availability* | Dashboard |

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus 1: FMEA AIAG/VDA pada Komponen Otomotif

Berdasarkan pola temuan Bizeli & Terazzi (2024), kami merekonstruksi skenario realistis untuk komponen *Brake Caliper Bracket* yang diproduksi dari *ductile iron* melalui proses *sand casting* dan *CNC machining*. Tim *cross-functional* (design engineer, manufacturing engineer, quality engineer) mengidentifikasi modus kegagalan "*dimensional out-of-tolerance pada lubang mounting*".

**Input Parameter (berdasarkan AIAG/VDA Severity, Occurrence, Detection Tables):**

| Parameter | Nilai | Justifikasi |
|-----------|-------|-------------|
| Severity ($S$) | 8 | *Major* — kehilangan fungsi pengereman akibat *misalignment* caliper |
| Occurrence ($O$) | 5 | *Moderate* — terjadi sesekali pada shift produksi |
| Detection ($D$) | 6 | *Moderate* — CMM sampling 5% mungkin tidak mendeteksi |
| **RPN Awal** | $8 \times 5 \times 6 = 240$ | Prioritas mitigasi tinggi |
| **AP (AIAG/VDA)** | **M (Medium)** | Sesuai tabel kombinasi |

**Langkah Mitigasi:**
- *Prevention Control*: Revisi *gating system* casting untuk mengurangi *porosity* (target $O$ turun dari 5 → 3).
- *Detection Control*: Peningkatan *sampling* CMM dari 5% menjadi 15% dengan *automated in-line measurement* (target $D$ turun dari 6 → 4).

**Perhitungan RPN Pasca-Mitigasi:**

$$RPN_{\text{post}} = 8 \times 3 \times 4 = 96$$

**Penurunan Risiko:**

$$\Delta RPN = 240 - 96 = 144 \quad \text{atau} \quad \frac{144}{240} \times 100\% = 60\%$$

Penurunan risiko 60% ini secara langsung mengimplikasikan penghematan COPQ. Jika *cost of failure* diasumsikan $C_f = \$5.000$ per insiden dan laju kegagalan adalah $\lambda = 50$ insiden/tahun sebelum mitigasi, maka:

$$\text{COPQ}_{\text{before}} = 50 \times \$5.000 = \$250.000/\text{tahun}$$

Setelah mitigasi dengan $\lambda_{\text{new}} = \lambda_{\text{old}} \times (1 - 0{,}60) = 20$ insiden/tahun:

$$\text{COPQ}_{\text{after}} = 20 \times \$5.000 = \$100.000/\text{tahun}$$

**Penghematan tahunan:**

$$\text{Savings} = \$250.000 - \$100.000 = \$150.000/\text{tahun}$$

### 4.2 Studi Kasus 2: FMEA Mesin CNC Milling (Saputra & Sukmono, 2024)

Saputra & Sukmono (2024) menyajikan tabel RPN lengkap untuk komponen kritis mesin CNC. Kami meringkas tiga modus kegagalan dominan:

| No. | Komponen | Failure Mode | S | O | D | RPN | AP |
|-----|----------|--------------|---|---|---|-----|-----|
| 1 | Spindle | Bearing wear | 9 | 4 | 5 | 180 | H |
| 2 | Ball Screw | Backlash berlebih | 7 | 6 | 6 | 252 | H |
| 3 | Tool Magazine | *Misalignment* | 6 | 5 | 7 | 210 | M |

**Perhitungan Availability:**

Asumsikan data operasional mesin CNC selama 90 hari:
- Total *operating time*: $T_{op} = 2.160$ jam