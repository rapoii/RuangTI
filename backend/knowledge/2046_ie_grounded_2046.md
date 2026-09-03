# 2046 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector* (versi lanjutan/revisi). DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global beroperasi dalam ekosistem dengan tingkat kompleksitas teknis, regulasi, dan finansial yang sangat tinggi. Setiap pesawat komersial besar modern, seperti keluarga Boeing 737/777 atau Airbus A320/A350, memiliki lebih dari tiga juta komponen individual yang saling berinteraksi dalam subsistem mekanis, avionik, propulsi, dan hidrolik (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Kompleksitas ini mensyaratkan penerapan regimen pemeliharaan yang tidak hanya reaktif, tetapi juga prediktif dan preventif terstruktur. Dalam konteks ini, *Reliability-Centered Maintenance* (RCM) muncul sebagai kerangka kerja metodologis yang dirancang untuk mengoptimalkan keseimbangan antara ketersediaan armada (*fleet availability*), keselamatan operasional, dan total biaya siklus hidup (*life-cycle cost*). RCM, yang secara formal diperkenalkan oleh Moubray (1991) melalui standar SAE JA1011/SAE JA1012 dan kemudian diadopsi luas oleh FAA dan EASA, menggeser paradigma pemeliharaan dari pendekatan berbasis waktu (*hard-time* atau *calendar-based*) menuju pendekatan berbasis kondisi dan risiko kegagalan fungsi.

Urgensi ekonomi penerapan RCM di sektor MRO penerbangan tidak dapat dipandang sebelah mata. Sebagai ilustrasi, sebuah pesawat narrow-body berharga USD 50–120 juta yang di-ground-kan selama 24 jam akibat *unscheduled maintenance* dapat menimbulkan kerugian pendapatan langsung sebesar USD 50.000–150.000, belum termasuk biaya tersembunyi seperti pembatalan koneksi penumpang, kompensasi, dan rusaknya reputasi maskapai. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa industri MRO penerbangan secara tradisional mengadopsi kebijakan pemeliharaan *check* bertingkat A/B/C/D, yang secara historis bersifat deterministik berbasis interval waktu atau siklus terbang. Kebijakan ini, meskipun sederhana secara administratif, terbukti suboptimal karena mengabaikan sifat non-linear degradasi performa siklus hidup komponen. Lebih lanjut, paper tersebut mengusulkan perluasan kebijakan D-*check* penuh (full refurbishment) dengan *partial refurbishment* pada fase *mature-run*, sehingga ketersediaan armada dapat dimaksimalkan tanpa mengorbankan keselamatan struktural pesawat.

Relevansi akademis dan praktis dari studi Zhou (2024) juga diperkuat oleh fakta bahwa industri MRO global bernilai lebih dari USD 100 miliar per tahun, dengan segmen aftermarket penerbangan sipil diproyeksikan tumbuh pada CAGR 5–7% sepanjang dekade berikutnya. Dalam lanskap ini, kemampuan memformulasikan model kuantitatif ketersediaan armada (*availability model*) yang dapat dibuktikan secara matematis memiliki nilai optimal menjadi pembeda antara operator yang sekedar patuh regulasi dan operator yang mencapai keunggulan operasional (*operational excellence*).

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis yang dibangun oleh Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) berakar pada tiga pilar utama: (i) teori keandalan sistem dan proses renewal, (ii) fungsi tujuan ketersediaan armada (*steady-state availability*), dan (iii) optimasi interval *check* hirarkis A/B/C/D dengan *full* dan *partial refurbishment*.

### 2.1 Ketersediaan Tunak (*Steady-State Availability*)

Ketersediaan intrinsik pesawat didefinisikan sebagai proporsi waktu dimana sistem siap menjalankan misi operasional. Formulasi dasarnya adalah:

$$A = \frac{MTBF}{MTBF + MTTR}$$

di mana $MTBF$ adalah *Mean Time Between Failures* dan $MTTR$ adalah *Mean Time To Repair*. Namun, dalam konteks pemeliharaan terjadwal, ketersediaan aktual harus memasukkan downtime terencana $T_{pm}$ untuk *check* preventif:

$$A(T) = \frac{T_{up}}{T_{up} + T_{pm} + T_{cm}}$$

di mana $T_{up}$ adalah total waktu operasi terbang, $T_{pm}$ adalah akumulasi durasi *check* terjadwal dalam satu siklus, dan $T_{cm}$ adalah downtime akibat kegagalan korektif.

### 2.2 Fungsi Degradasi Non-Linear

Zhou (2024) mengasumsikan bahwa tingkat kegagalan komponen mengikuti model *bathtub curve* yang disederhanakan, dimana laju kegagalan sesaat $\lambda(t)$ selama fase *mature-run* meningkat secara kuadratik:

$$\lambda(t) = \lambda_0 + \alpha t^2$$

dengan $\lambda_0$ adalah laju kegagalan awal saat *commissioning* dan $\alpha$ adalah koefisien degradasi non-linear. Fungsi keandalan kumulatif menjadi:

$$R(t) = \exp\left(-\int_0^t \lambda(\tau)\, d\tau\right) = \exp\left(-\lambda_0 t - \frac{\alpha t^3}{3}\right)$$

### 2.3 Model Siklus Hirarkis A/B/C/D

Siklus pemeliharaan hierarkis penerbangan terdiri dari empat tingkat dengan cakupan dan durasi yang meningkat secara geometris:

| Tingkat *Check* | Interval Tipikal | Durasi Downtime | Cakupan Aktivitas |
|----------------|-------------------|------------------|--------------------|
| A-*check* | 400–600 flight hours | 6–24 jam | Inspeksi umum,润滑, penggantian *filter* |
| B-*check* | 6–8 bulan | 1–3 hari | A-*check* + inspeksi sistem operasional |
| C-*check* | 20–24 bulan | 1–2 minggu | Inspeksi struktural detail, tes fungsi sistem |
| D-*check* | 6–12 tahun | 1–3 bulan | *Full refurbishment*, cat ulang, inspeksi kabin |

Dalam satu siklus penuh D-*check*, jumlah *check* minor yang terjadi adalah:

$$N_A = \left\lfloor \frac{T_D}{T_A} \right\rfloor, \quad N_B = \left\lfloor \frac{T_D}{T_B} \right\rfloor, \quad N_C = \left\lfloor \frac{T_D}{T_C} \right\rfloor$$

dengan $T_A, T_B, T_C, T_D$ masing-masing menyatakan interval antar-*check*.

### 2.4 Formulasi Optimasi

Tujuan utama paper Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) adalah membuktikan eksistensi nilai optimal $T^*$ untuk ketersediaan total $A_{total}(T)$. Fungsi tujuan yang dioptimasi adalah:

$$\max_{T_A, T_B, T_C, T_D} \quad A_{total}(T) = \frac{\sum_{i \in \{A,B,C,D\}} N_i \cdot T_{up,i}}{\sum_{i \in \{A,B,C,D\}} N_i \cdot T_{down,i}}$$

dengan kendala fisibilitas:

$$T_D = n_C \cdot T_C, \quad T_C = k_B \cdot T_B, \quad T_B = m_A \cdot T_A$$

dan kendala keselamatan:

$$P\{R(T_A) \geq R_{min}\} \geq 1 - \beta$$

dimana $R_{min}$ adalah ambang batas keandalan minimum yang diizinkan regulator (umumnya $R_{min} = 0.95$ untuk komponen kritis struktural).

### 2.5 Partial Refurbishment pada Fase Mature-Run

Kontribusi orisinal Zhou (2024) adalah integrasi *partial refurbishment* yang dilakukan pada titik $T_p < T_D$, dengan efek menurunkan laju kegagalan secara diskontinyu:

$$\lambda(T_p^+) = \lambda_0 + \alpha T_p^2 - \Delta\lambda_{refurb}$$

dengan $\Delta\lambda_{refurb}$ adalah *refurbishment effectiveness factor* yang bersifat stokastik. Jika dimodelkan sebagai variabel acak dengan distribusi Beta:

$$\Delta\lambda_{refurb} \sim \text{Beta}(\delta_1, \delta_2)$$

maka ekspektasi ketersediaan dapat dihitung dengan:

$$\mathbb{E}[A_{total}] = \int_0^1 A_{total}(\delta) \cdot f_{\Delta\lambda}(\delta)\, d\delta$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hirarkis versi Zhou (2024) mengikuti protokol rekayasa terstruktur yang dapat dipetakan sebagai *flowchart* tujuh tahap:

**Tahap 1 – Functional System Decomposition.** Pesawat diuraikan menjadi *ATA Chapters* (Air Transport Association) seperti ATA 21 (Air Conditioning), ATA 27 (Flight Controls), ATA 32 (Landing Gear), ATA 53 (Fuselage Structure). Setiap subsistem dianalisis fungsi utamanya dan potensi *functional failure*.

**Tahap 2 – Failure Modes, Effects, and Criticality Analysis (FMECA).** Setiap mode kegagalan diberi skor Severity ($S$, skala 1–10), Occurrence ($O$, skala 1–10), dan Detection ($D$, skala 1–10). *Risk Priority Number* dihitung:

$$RPN = S \times O \times D$$

Komponen dengan $RPN \geq 150$ masuk kategori kritis dan wajib dimonitor secara real-time.

**Tahap 3 – Decision Logic Tree (SAE JA1011 compliant).** Penerapan pohon keputusan RCM untuk menjawab pertanyaan: apakah konsekuensi kegagalan bersifat *evident* atau *hidden*? Apakah kegagalan mengancam keselamatan? Apakah kegagalan memiliki dampak ekonomi signifikan? Apakah mode kegagalan dicegah melalui *condition monitoring*?

**Tahap 4 – Data Acquisition dan Weibull Parameter Estimation.** Data historis kegagalan dari *AMOS*, *TRAX*, atau *SAP PM* dianalisis dengan *Maximum Likelihood Estimation* (MLE) untuk parameter Weibull shape $\beta_w$ dan scale $\eta$:

$$\hat{\beta}_w = \frac{\sum_{i=1}^n t_i^{\hat{\beta}_w} \ln t_i \cdot (t_i^{\hat{\beta}_w} - 1)}{\sum_{i=1}^n t_i^{2\hat{\beta}_w} - \sum_{i=1}^n t_i^{\hat{\beta}_w}}$$

**Tahap 5 – Optimization Run.** Interval $T_A, T_B, T_C, T_D$ dioptimasi menggunakan algoritma *Non-Linear Programming* (NLP) atau *Genetic Algorithm* (GA) untuk memaksimumkan $A_{total}$ sesuai persamaan di Bagian 2.4.

**Tahap 6 – SOP Implementation & Crew Training.** Prosedur *check* didokumentasikan dalam *Maintenance Manual* revisi terkontrol, teknisi disertifikasi berdasarkan AME (Aircraft Maintenance Engineer) license, dan *sign-off* dilakukan secara dua-pejabat (*double-signature*).

**Tahap 7 – Continuous Monitoring dan Feedback Loop.** KPI berikut dimonitor bulanan: (a) Technical Dispatch Reliability $DR_{tech}$, (b) *On-Time Performance* (OTP), (c) *Schedule Disruption Rate*, (d) biaya pemeliharaan per *Available Seat Kilometer* (ASK).

Standar acuan industri yang relevan antara lain: FAA 14 CFR Part 121.367 (Continuous Airworthiness Maintenance Program), EASA Part-M, IATA Maintenance Cost Task Force (MCTF) benchmarks, dan SAE JA1011/JA1012 untuk metodologi RCM.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan penerapan model Zhou (2024), dilakukan simulasi terhadap satu unit armada Boeing 737-800 dengan parameter operasional sebagai berikut:

**Input Parameter:**
- Total Operating Hours per Year: $H_{year} = 3.500$ jam
- Interval A-*check*: $T_A = 500$ jam
- Interval B-*check*: $T_B = 3.000$ jam
- Interval C-*check*: $T_C = 9.000$ jam
- Interval D-*check*: $T_D = 36.000$ jam
- Durasi A-*check*: $t_A = 12$ jam
- Durasi B-*check*: $t_B = 36$ jam
- Durasi C-*check*: $t_C = 168$ jam (7 hari)
- Durasi D-*check*: $t_D = 2.160$ jam (90 hari)
- Parameter degradasi: $\lambda_0 = 0{,}0001$ /jam, $\alpha = 1{,}2 \times 10^{-12}$ /jam³
- Efektivitas partial refurbishment: $\Delta\lambda_{refurb} = 30\%$ dari $\lambda(T_p)$

**Langkah 1 – Hitung jumlah setiap jenis *check* dalam satu siklus D:**
$$N_A = \frac{36.000}{500} = 72 \text{ check}$$