# 3038 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimumkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector  
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)  
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu ekosistem *asset-heavy* paling kompleks di dunia, di mana keputusan pemeliharaan satu komponen *line-replaceable unit* (LRU) dapat menentukan keselamatan ratusan jiwa, profitabilitas operator, serta reputasi regulator nasional. Dalam kerangka operasional maskapai komersial modern, kebijakan *Maintenance, Repair, and Overhaul* (MRO) menerapkan protokol inspeksi terstruktur yang lazim dikenal sebagai *A-check*, *B-check*, *C-check*, dan *D-check* — sebuah tata jenjang (*hierarchical check policy*) yang dirancang untuk menyeimbangkan antara deteksi dini degradasi komponen, pengendalian biaya siklus hidup, dan pemaksimalan ketersediaan armada (*fleet availability*). Hang Zhou (2024) dalam studi seminalnya yang dipublikasikan melalui *Social Science Research Network* (SSRN) dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menyoroti bahwa meskipun *Reliability-Centred Maintenance* (RCM) telah lama diakui sebagai kerangka analitis unggulan untuk mengkuantifikasi degradasi non-linier terhadap kinerja siklus hidup aset, implementasi RCM pada sistem sekompleks kebijakan A/B/C/D di sektor MRO aviasi masih menghadapi tantangan pemodelan yang signifikan.

Urgensi ekonomis dari persoalan ini tidak dapat diremehkan. Data industri menunjukkan bahwa biaya MRO menyumbang antara 10%–15% dari total *operating expenditure* (OPEX) maskapai, dan downtime pesawat yang tidak terencana dapat menimbulkan kerugian pendapatan (*lost revenue*) hingga ratusan ribu dolar AS per jam per armada *wide-body*. Lebih jauh, paradigma *mature-run* dalam operasi aviasi — fase ketika armada telah melewati periode *infant mortality* awal namun belum mendekati *wear-out* — merupakan jendela operasional di mana keputusan *partial refurbishment* versus *full D-check refurbishment* menjadi sangat determinan. Zhou (2024) membuktikan secara matematis bahwa terdapat nilai optimal untuk model ketersediaan armada (*optimal availability*), sehingga permasalahan optimasi bersifat *well-posed* dan dapat diselesaikan dengan teknik kalkulus variasi maupun pemrograman non-linier. Pendekatan ini sangat relevan bagi industri yang tengah menavigasi transisi paradigma *predictive maintenance* (PdM) berbasis Internet-of-Things (IoT) dan *machine learning*, di mana integrasi kebijakan hirarkis klasik dengan sensor *real-time* menjadi kebutuhan strategis. Studi lanjutan Zhou dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) memperkuat kerangka analitis tersebut dengan eksplorasi skenario refurbishment parsial selama *mature-run* sebagai strategi untuk mempertahankan *availability* tanpa mengorbankan margin keselamatan struktural pesawat.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dibangun Zhou (2024) bertumpu pada tiga pilar matematis: (i) model degradasi non-linier untuk komponen kritis pesawat, (ii) fungsi ketersediaan (*availability function*) yang dependen terhadap jadwal inspeksi, dan (iii) formulasi optimasi constrained yang memaksimumkan *availability* dengan tetap memenuhi kendala keselamatan struktural.

### 2.1 Model Degradasi Weibull

Komponen авиас seperti *landing gear*, *auxiliary power unit* (APU), dan *turbofan blades* umumnya遵循 hukum degradasi Weibull dua параметр. Fungsi densitas probabilitas kegagalan diberikan oleh:

$$f(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1} e^{-(t/\eta)^{\beta}}$$

di mana $\beta$ adalah *shape parameter* (untuk komponen авиас dewasa $\beta > 1$ yang mengindikasikan *wear-out*), dan $\eta$ adalah *characteristic life* (umur karakteristik dalam satuan *flight cycles* atau *flight hours*). Fungsi reliabilitas kumulatif adalah:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

### 2.2 Hirarki A/B/C/D-Check dan Downtime Kumulatif

Kebijakan MRO aviasi menetapkan interval inspeksi yang berbeda untuk setiap tingkatan. Zhou (2024) memformulasikan downtime total dalam satu siklus D-check penuh sebagai:

$$T_{D} = \sum_{i \in \{A,B,C\}} \sum_{k=1}^{N_i} T_i + T_{D,\text{full}}$$

di mana $T_i$ adalah downtime rata-rata untuk setiap tingkat inspeksi $i$, dan $N_i$ adalah jumlah inspeksi tingkat $i$ yang dilakukan dalam satu siklus penuh. Untuk maskapai *narrow-body* tipikal: $N_A = 12$, $N_B = 4$, $N_C = 1$, dengan $T_A \approx 24$ jam, $T_B \approx 72$ jam, dan $T_C \approx 720$ jam, sedangkan $T_{D,\text{full}} \approx 7.200$ jam (≈ 10 bulan kalender).

### 2.3 Fungsi Ketersediaan Armada

Ketersediaan sesaat (*instantaneous availability*) untuk satu pesawat didefinisikan sebagai:

$$A(t) = \frac{T_{\text{up}}(t)}{T_{\text{up}}(t) + T_{\text{down}}(t)} = \frac{\text{MTBF}}{\text{MTBF} + \text{MDT}}$$

di mana MTBF adalah *Mean Time Between Failures* dan MDT adalah *Mean Downtime*. Untuk armada dengan $M$ pesawat identik yang mengikuti kebijakan inspeksi sinkron, ketersediaan rata-rata armada (*fleet availability*) menjadi:

$$A_{\text{fleet}} = \frac{1}{T_{\text{horizon}}} \int_{0}^{T_{\text{horizon}}} \frac{1}{M} \sum_{j=1}^{M} A_j(t) \, dt$$

### 2.4 Formulasi Optimasi

Masalah optimasi pusat adalah memaksimumkan $A_{\text{fleet}}$ dengan memilih vektor interval inspeksi $\mathbf{x} = (x_A, x_B, x_C, x_D)$ yang mengoptimalkan *trade-off* antara degradasi yang terakumulasi dan downtime inspeksi:

$$\max_{\mathbf{x}} \quad A_{\text{fleet}}(\mathbf{x})$$

$$\text{subject to:} \quad R(x_i) \geq R_{\min,i}, \quad \sum_{i} C_i N_i \leq C_{\text{budget}}, \quad x_A < x_B < x_C < x_D$$

di mana $R_{\min,i}$ adalah reliabilitas minimum yang disyaratkan regulator (misalnya FAA atau EASA) untuk masing-masing tingkatan inspeksi, dan $C_i$ adalah biaya per inspeksi. Zhou (2024) membuktikan bahwa fungsi objektif bersifat *quasi-concave* pada domain yang feasible, sehingga menjamin eksistensi global optimum yang unik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti SOP delapan tahapan yang diadaptasi dari kerangka SAE JA1011/1012 dan temuan Zhou (2024):

```
┌─────────────────────────────────────────────────────────────┐
│  TAHAP 1: Segmentasi Sistem & Inventarisasi Fungsi          │
│  ↓ Identifikasi LRU kritis (APU, Landing Gear, Avionics)  │
│  TAHAP 2: Failure Modes, Effects & Criticality Analysis    │
│  ↓ FMECA untuk menentukan mode failure dominan             │
│  TAHAP 3: Penentuan Kebijakan RCM (Reactive/Preventive/     │
│  ↓       Condition-Based/Predictive) per LRU               │
│  TAHAP 4: Penentuan Interval Hirarki A/B/C/D-Check         │
│  ↓ Optimasi menggunakan formulasi matematis Bagian 2.4     │
│  TAHAP 5: Implementasi Sistem Schedule & Work Package      │
│  ↓ Integrasi dengan MRO software (AMOS, TRAX, SAP PM)      │
│  TAHAP 6: Eksekusi Pemeliharaan & Pencatatan Data          │
│  ↓ Logging flight hours/cycles, snags, unscheduled events  │
│  TAHAP 7: Analisis Kinerja & Re-optimasi Periodik          │
│  ↓ Hitung KPI: A_fleet, dispatch reliability, MEL rate     │
│  TAHAP 8: Audit & Continuous Improvement (PDCA)            │
│  ↓ Benchmark terhadap best-practice IATA & OEM directives  │
└─────────────────────────────────────────────────────────────┘
```

**Arsitektur Teknologi Pendukung:** Sistem MRO modern mengintegrasikan *Aircraft Health Monitoring* (AHM) yang mengirim data *real-time* dari sensor pesawat ke *ground station* melalui komunikasi *ACARS* (Aircraft Communications Addressing and Reporting System) atau *satellite link*. Data ini kemudian diolah dalam *platform analytics* berbasis *digital twin* yang mampu memprediksi *Remaining Useful Life* (RUL) setiap komponen, sehingga jadwal A/B/C-check dapat disesuaikan secara dinamis (*adaptive maintenance scheduling*).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Maskapai regional mengoperasikan 10 unit *narrow-body* Boeing 737-800 dengan rata-rata utilisasi 3.000 *flight hours* per tahun per pesawat. Tim rekayasa pemeliharaan hendak menentukan kebijakan inspeksi hirarkis yang memaksimalkan ketersediaan armada dalam horizon 5 tahun.

**Parameter Input Industri:**

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Shape parameter Weibull | $\beta$ | 2,8 |
| Characteristic life | $\eta$ | 18.000 flight hours |
| Reliabilitas minimum A-check | $R_{\min,A}$ | 0,995 |
| Reliabilitas minimum D-check | $R_{\min,D}$ | 0,950 |
| Downtime A-check | $T_A$ | 24 jam |
| Downtime B-check | $T_B$ | 72 jam |
| Downtime C-check | $T_C$ | 720 jam |
| Downtime D-check penuh | $T_{D,\text{full}}$ | 7.200 jam |
| Biaya A-check | $C_A$ | $50.000 |
| Biaya B-check | $C_B$ | $180.000 |
| Biaya C-check | $C_C$ | $1.200.000 |
| Biaya D-check | $C_D$ | $6.500.000 |

**Langkah 1: Penentuan Interval A-Check Optimal**

Dengan kebijakan tipikal bahwa A-check dilakukan setiap 500 *flight hours* (atau 200 *cycles*), reliabilitas pada saat inspeksi adalah:

$$R(x_A) = e^{-(500/18.000)^{2,8}} = e^{-(0,0278)^{2,8}}$$

Menghitung $(0,0278)^{2,8}$: $\ln(0,0278) = -3,583$; $2,8 \times (-3,583) = -10,032$; $e^{-10,032} = 4,38 \times 10^{-5}$

$$R(500) = e^{-4,38 \times 10^{-5}} \approx 0,99996$$

Karena $R(500) = 0,99996 \gg R_{\min,A} = 0,995$, interval A-check dapat diperpanjang hingga reliabilitas tepat menyentuh batas bawah. Menyelesaikan $R(x_A) = 0,995$:

$$e^{-(x_A/18.000)^{2,8}} = 0,995 \implies (x_A/18.000)^{2,8} = -\ln(0,995) = 0,005013$$

$$x_A/18.000 = (0,005013)^{1/2,8} = e^{\ln(0,005013)/2,8} = e^{-5,295/2,8} = e^{-1,891} = 0,1507$$

$$x_A \approx 2.713 \text{ flight hours}$$

Namun, OEM Boeing umumnya membatasi interval A-check maksimum pada 600 FH tanpa *escalation*, sehingga interval optimal yang realistis adalah $x_A^* = 600$ FH dengan $R = e^{-(600/18.000)^{2,8}} = e^{-0,000255} \approx 0,999745$.

**Langkah 2: Perhitungan Ketersediaan Satu Pesawat**

Dengan interval $x_A = 600$ FH, $x_B = 3.000$ FH, $x_C = 9.000$ FH, dan $x_D = 18.000$ FH:

$$\text{MTBF} = \eta \cdot \Gamma\left(1 + \frac{1}{\beta}\right) = 18.000 \cdot \Gamma(1,357) = 18.000 \cdot 0,8946 \approx 16.103 \text{ FH}$$

Downtime rata-rata tertimbang per siklus D-check penuh (10 tahun) untuk satu pesawat:

$$T_{\text{down,total}} = 30 \cdot T_A + 10 \cdot T_B + 3 \cdot T_C + 1 \cdot T_{D,\text{full}}$$

(dengan asumsi $N