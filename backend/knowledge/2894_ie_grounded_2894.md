# 2894 — Optimisasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. SSRN Electronic Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector* (versi komplementer). SSRN Electronic Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi sipil global merupakan salah satu sektor *capital-intensive* yang paling ketat regulasinya di dunia. Sebuah pesawat narrow-body generasi terbaru seperti Boeing 737 MAX atau Airbus A320neo memiliki nilai per unit antara USD 110–135 juta, sementara wide-body seperti Boeing 777-300ER menembus USD 350 juta lebih. Dengan armada global lebih dari 28.000 unit pesawat komersial aktif per tahun 2024 menurut data IATA dan Cirium Fleets Analyzer, total nilai aset terbang (flying asset base) industri aviasi dunia melampaui USD 1,2 triliun. Di sinilah signifikansi strategis **Maintenance, Repair, and Overhaul (MRO)** muncul: siklus pemeliharaan bukan sekadar aktivitas pendukung, melainkan penentu langsung ketersediaan armada (*fleet availability*), keselamatan operasional (*operational safety*), dan profitabilitas maskapai (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Urgensi masalah ini bersifat multi-dimensi. Pertama, secara operasional: setiap satu jam *ground time* akibat pemeliharaan korektif (*unscheduled maintenance*) pada pesawat wide-body dapat menimbulkan kerugian pendapatan (*opportunity cost*) sebesar USD 18.000–25.000. Kedua, secara ekonomis: pasar MRO global bernilai sekitar USD 110 miliar pada 2024 dan diproyeksikan mencapai USD 147 miliar pada 2030 (Boeing Market Outlook), sehingga optimalisasi kebijakan pemeliharaan berdampak langsung pada margin operator MRO. Ketiga, secara keselamatan: regulator seperti FAA (Federal Aviation Administration) melalui 14 CFR Part 121.380 dan EASA melalui Part-M mengharuskan kepatuhan terhadap program pemeliharaan berbasis keandalan untuk komponen kritis struktural dan sistem.

Dalam konteks inilah Zhou (2024, [DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memperkenalkan **kerangka kebijakan MRO hirarkis** yang mengintegrasikan *full refurbishment* melalui siklus D-check dengan *partial refurbishment* pada fase *mature-run* operasi. Pendekatan ini secara eksplisit mengatasi degradasi performa siklus-hidup (*life-cycle performance degradation*) yang bersifat **non-linear**, sesuatu yang sering diabaikan oleh model kebijakan tradisional berbasis jadwal tetap (*fixed-interval maintenance*). Seperti ditegaskan oleh Zhou, "Despite its benefits, RCM modelling and implementation can be challenging, particularly in applying to the operations of complex systems such as the hierarchical A/B/C/D MRO policy used in the aviation sector." Oleh karena itu, kemampuan memodelkan degradasi non-linear, mengoptimalkan interval antar-check, dan membuktikan eksistensi solusi optimal menjadi tantangan rekayasa yang menjadi fokus utama modul ini.

## 2. Landasan Teori & Formulasi Matematis

Model konseptual yang dibangun Zhou (2024) bertumpu pada tiga pilar teoritis: **(i) fungsi keandalan Weibull** untuk menangkap degradasi non-linear, **(ii) hierarki checks A/B/C/D** sebagai struktur keputusan pemeliharaan bertingkat, dan **(iii) fungsi ketersediaan** (*steady-state availability*) sebagai *objective function* yang akan dimaksimkan.

### 2.1 Fungsi Keandalan Komponen Kritis

Komponen kritis pesawat (mesin turbin, *landing gear*, struktur *airframe*) mengalami degradasi yang mengikuti distribusi Weibull dua-parameter:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

di mana $\beta$ adalah *shape parameter* (slope keausan), $\eta$ adalah *scale parameter* (usia karakteristik), dan $t$ adalah waktu operasi terakumulasi (*flight hours/FH* atau *flight cycles/FC*). Ketika $\beta > 1$, sistem memasuki regime *wear-out* yang lazim dijumpai pada komponen fatigue-sensitive seperti turbin blade atau *wing spar*. Laju kegagalan (*hazard rate*) dinyatakan sebagai:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta - 1}$$

### 2.2 Hirarki Pemeliharaan A/B/C/D Check

Struktur MRO aviasi mengikuti hierarki empat tingkat dengan karakteristik berikut:

| Tingkat Check | Interval Tipikal | Aktivitas Utama | Durasi |
|:-------------:|:----------------:|:----------------|:------:|
| **A-Check** | 400–600 FH | Inspeksi visual, lubricasi, *light servicing* | 50–80 jam |
| **B-Check** | 6–8 bulan | Inspeksi sistem operasional, *operational check* | 160–250 jam |
| **C-Check** | 20–24 bulan | Inspeksi struktural mayor, *cabin refurbishment* | 1–2 minggu |
| **D-Check** | 6–12 tahun | *Full refurbishment*, *teardown inspection*, repainting | 1–2 bulan |

Interval antar-check untuk tingkat $k \in \{A, B, C, D\}$ dimodelkan sebagai variabel keputusan $T_k$. Zhou (2024, [DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mendefinisikan hubungan rekursif antara interval:

$$T_{D} = n_C \cdot T_C, \quad T_{C} = n_B \cdot T_B, \quad T_{B} = n_A \cdot T_A$$

dengan $n_k$ adalah jumlah check tingkat-k antara dua check tingkat-$(k+1)$.

### 2.3 Fungsi Ketersediaan (*Availability Function*)

Ketersediaan sesaat (*instantaneous availability*) sistem pada interval $[0, T_D]$ didefinisikan sebagai:

$$A(T_A, T_B, T_C, T_D) = \frac{\displaystyle\int_{0}^{T_D} \prod_{k \in \{A,B,C,D\}} \prod_{i=1}^{n_k} R_{i,k}\left(t - T_{i,k}^{\text{cum}}\right) \, dt}{\displaystyle T_D + \sum_{k \in \{A,B,C,D\}} n_k \cdot \tau_k + \sum_{j=1}^{N_{\text{corr}}} \delta_j}$$

di mana:
- $\tau_k$ adalah *mean downtime* untuk check tingkat-$k$,
- $\delta_j$ adalah *downtime korektif* akibat kegagalan ke-$j$,
- $T_{i,k}^{\text{cum}}$ adalah waktu kumulatif operasi hingga check ke-$i$ tingkat-$k$,
- $N_{\text{corr}}$ adalah jumlah kegagalan korektif dalam satu siklus D.

### 2.4 Formulasi Optimisasi

Masalah optimisasi dinyatakan sebagai:

$$\max_{T_A, T_B, T_C, T_D} \; A(T_A, T_B, T_C, T_D)$$

$$\text{subject to} \quad T_{\min,k} \leq T_k \leq T_{\max,k}, \quad k \in \{A, B, C, D\}$$

$$C_{\text{total}}(T_k) = \sum_{k \in \{A,B,C,D\}} n_k \cdot c_k + c_{\text{corr}} \cdot N_{\text{corr}} \leq C_{\text{budget}}$$

Zhou (2024, [DOI: 10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan secara analitis bahwa fungsi ketersediaan $A(\cdot)$ memiliki **nilai optimal interior** $\nabla A = 0$ di mana:

$$\frac{\partial A}{\partial T_k} = \frac{\partial A}{\partial T_l}, \quad \forall k, l \in \{A,B,C,D\}$$

yang dimungkinkan oleh sifat *quasi-concavity* fungsi ketersediaan terhadap interval pemeliharaan.

### 2.5 Model Degradasi Fase *Mature-Run*

Selama fase *mature-run* (antara dua D-check), degradasi tidak linear dan dimodelkan dengan fungsi:

$$D(t) = D_0 + \alpha t + \gamma t^{1.5}$$

di mana $D_0$ adalah degradasi awal, $\alpha$ adalah koefisien linier, dan $\gamma$ adalah koefisien orde 1.5 yang menangkap efek *cumulative fatigue*. Inilah justifikasi mengapa *partial refurbishment* (B/C-check) diperlukan untuk mengompensasi pertumbuhan $D(t)$ sebelum mencapai ambang kritis $D_{\text{critical}}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hirarkis mengikuti prosedur rekayasa sistem yang terstruktur dalam delapan tahap utama sesuai dengan standar MSG-3 (Maintenance Steering Group-3) dari ATA dan ISO 17359 (*Condition monitoring and diagnostics of machines*):

**Tahap 1 — Segmentasi Sistem & Identifikasi Komponen Kritis.** Menggunakan Failure Mode, Effects, and Criticality Analysis (FMECA), seluruh *airframe* dan sistem pesawat disegmentasi menjadi Line Replaceable Units (LRU) dan Shop Replaceable Units (SRU). Setiap komponen diberi skor *Criticality Number* (CN):

$$CN_i = \sum_{j} \left( S_{j,i} \cdot O_{j,i} \cdot P_{j,i} \cdot D_{j,i} \right)$$

dengan $S$ = severity, $O$ = occurrence, $P$ = probability of detection failure, $D$ = detectability.

**Tahap 2 — Pengumpulan Data Historis & Penentuan Parameter Weibull.** Data *flight hours*, *flight cycles*, dan catatan kegagalan dari fleet management system digunakan untuk mengestimasi $\beta$ dan $\eta$ menggunakan *Maximum Likelihood Estimation* (MLE):

$$\hat{\beta}, \hat{\eta} = \arg\max_{\beta, \eta} \prod_{i=1}^{n} \left[ \frac{\beta}{\eta}\left(\frac{t_i}{\eta}\right)^{\beta-1} \exp\left(-\left(\frac{t_i}{\eta}\right)^{\beta}\right) \right]^{1-c_i}$$

**Tahap 3 — Penentuan Interval Baseline.** Menggunakan rekomendasi OEM dan regulasi (FAA AC 120-17A, EASA Part-M), interval baseline $T_k^0$ ditetapkan.

**Tahap 4 — Penyusunan Model Optimisasi.** Model $A(T_k)$ diimplementasikan dalam *Python/SciPy* atau MATLAB dengan solver `fmincon` atau `differential_evolution` untuk menghindari *local optima*.

**Tahap 5 — Validasi Simulasi Monte Carlo.** Jalankan simulasi Monte Carlo dengan $N = 10.000$ iterasi guna memvalidasi robustnes solusi optimal terhadap *stochastic downtime* dan variasi *turn-around time* (TAT).

**Tahap 6 — Validasi Regulasi.** Setiap solusi optimal diverifikasi terhadap batas Minimum Equipment List (MEL) dan *dispatch deviation guides* (DDG) dari manufacturer.

**Tahap 7 — Implementasi Bertahap (*Phased Roll-out*).** Penerapan dilakukan per sub-armada (*fleet sub-group*) selama 6–12 bulan sebelum *fleet-wide adoption*.

**Tahap 8 — Monitoring Berkelanjutan (MRO 4.0).** Integrasi dengan sensor IoT, *aircraft health monitoring* (AHM), dan *digital twin* untuk *real-time reliability tracking* dan *predictive maintenance adjustment* terhadap interval optimal.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mendemonstrasikan aplikasi model, pertimbangkan sebuah sub-armada Airbus A320neo dengan parameter berikut (disederhanakan untuk kejelasan):

| Parameter | Nilai | Satuan |
|:----------|:-----:|:------:|
| $\beta$ (Weibull shape) | 2.4 | — |
| $\eta$ (Weibull scale) | 18.000 | FC |
| $T_A^0$ | 500 | FC |
| $T_B^0$ | 3.500 | FC |
| $T_C^0$ | 16.000 | FC |
| $T_D^0$ | 48.000 | FC |
| $\tau_A$ | 60 | jam |
| $\tau_B$ | 180 | jam |
| $\tau_C$ | 600 | jam |
| $\tau_D$ | 1.200 | jam |
| $c_{\text{corr}}$ | USD 75.000 | / kejadian |
| Biaya A-Check $c_A$ | USD 12.000 | — |
| Biaya B-Check $c_B$ | USD 45.000 | — |
| Biaya C-Check $c_C$ | USD 320.000 | — |
| Biaya D-Check $c_D$ | USD 3.500.000 | — |

### 4.1 Perhitungan Keandalan pada Akhir Siklus

$$R(T_D) = \exp\left[-\left(\frac{48.000}{18.000}\right)^{2.4}\right] = \exp[-(1,333)^{2.4}] \approx \exp[-2,127]$$

Karena nilai ini mendekati nol, diperlukan *refurbishment* penuh (D-check). Kita normalisasi ulang menggunakan