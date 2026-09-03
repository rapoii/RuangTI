# 2494 — Optimasi Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu sektor *capital-intensive* dengan intensitas aset fisik tertinggi di dunia. Setiap pesawat narrow-body modern seperti Airbus A320 atau Boeing 737 memiliki nilai aset antara USD 50–110 juta per unit, sementara wide-body seperti Boeing 777 atau Airbus A350 mencapai USD 300–400 juta. Dengan asumsi maskapai menengah mengoperasikan 80–150 armada, total nilai aset yang harus dikelola mendekati USD 8–15 miliar, sehingga strategi pemeliharaan bukan hanya persoalan teknis operasional, melainkan keputusan finansial dan strategis yang menentukan profitabilitas korporasi. Dalam konteks ini, *Maintenance, Repair, and Overhaul* (MRO) bukan sekadar aktivitas pendukung, melainkan *revenue-generating ecosystem* yang menurut Boeing Market Outlook (2023) bernilai USD 124 miliar secara global dengan proyeksi CAGR 4,3% hingga 2042.

Zhou (2024) dalam studinya menyoroti bahwa meskipun *Reliability-Centered Maintenance* (RCM) telah menjadi kerangka acuan internasional (berlandaskan standar SAE JA1011/SAE JA1012 dan MSG-3 untuk aviasi) karena kemampuannya mengkuantifikasi degradasi performa non-linier, implementasi RCM pada sistem kompleks seperti kebijakan pemeliharaan hirarkis A/B/C/D masih menghadapi tantangan fundamental (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Kebijakan A/B/C/D dalam aviasi merujuk pada empat tingkat pemeriksaan: **A-check** (ringan, setiap 400–600 flight hours, ~50–100 man-hours), **B-check** (menengah, setiap 6–8 bulan, ~160–300 man-hours), **C-check** (berat, setiap 20–24 bulan, ~6.000 man-hours, downtime 1–2 minggu), dan **D-check** atau *Heavy Maintenance Visit* (HMV — *full refurbishment*, setiap 6–12 tahun, ~30.000–50.000 man-hours, downtime 2–3 bulan).

Urgensi permasalahan ini bersifat multidimensional. Pertama, dari perspektif **keselamatan penerbangan**, regulasi FAA Part 121.111 dan EASA AMC M.A.301 mensyaratkan *dispatch reliability* minimum 99% agar pesawat diizinkan beroperasi komersial. Kedua, dari perspektif **ekonomi**, setiap jam *ground time* pesawat narrow-body menyebabkan *revenue loss* antara USD 8.000–15.000, sementara wide-body mencapai USD 25.000–40.000 per jam. Ketiga, dari perspektif **regulasi**, standar International Air Transport Association (IATA) Operating Safety Audit (IOSA) mensyaratkan operator memiliki *maintenance programme* yang terdokumentasi dan dioptimasi berdasarkan analisis reliabilitas terstruktur. Zhou (2024) menekankan bahwa mayoritas operator masih menggunakan *hard-time* interval berbasis rekomendasi OEM (*Original Equipment Manufacturer*), yang cenderung *over-conservative* dan tidak menangkap heterogenitas operasional aktual tiap armada (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

---

## 2. Landasan Teori & Formulasi Matematis

Model Zhou (2024) membangun kerangka optimasi ketersediaan (*availability*) untuk armada dengan kebijakan pemeliharaan hirarkis empat tingkat. Formulasi inti dimulai dari definisi ketersediaan sesaat (*instantaneous availability*) yang dimodifikasi untuk mengakomodasi *scheduled downtime* multi-level:

$$A(t) = \frac{T_{\text{operational}}}{T_{\text{operational}} + T_{\text{corrective}} + T_{\text{scheduled}}(A) + T_{\text{scheduled}}(B) + T_{\text{scheduled}}(C) + T_{\text{scheduled}}(D)}$$

di mana $T_{\text{operational}}$ adalah waktu terbang kumulatif, $T_{\text{corrective}}$ adalah downtime akibat *unscheduled maintenance* (unscheduled), dan $T_{\text{scheduled}}(X)$ adalah downtime terjadwal untuk check tingkat X. Untuk kebijakan *steady-state* jangka panjang, Zhou menggunakan formulasi *long-run average availability*:

$$\bar{A} = \lim_{T \to \infty} \frac{1}{T} \int_0^T A(\tau) \, d\tau$$

Fungsi reliabilitas sistem mengikuti asumsi *Weibull distribution* yang mampu menangkap degradasi non-linier sesuai karakteristik fatigue struktural pesawat:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

dengan *shape parameter* $\beta > 1$ mengindikasikan *wear-out failure regime* yang dominan pada komponen avionik dan struktur pesawat usia matang. *Hazard rate* sesaat didefinisikan sebagai:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

Zhou (2024) kemudian memperkenalkan model downtime siklus hidup (*life-cycle downtime*) yang mengintegrasikan interval check $T_A, T_B, T_C, T_D$:

$$\tau_{\text{total}} = \tau_A + \tau_B + \tau_C + \tau_D = \frac{D \cdot T_{\text{cycle}}}{T_A} \cdot \tau_A + \frac{D \cdot T_{\text{cycle}}}{T_B} \cdot \tau_B + \frac{D \cdot T_{\text{cycle}}}{T_C} \cdot \tau_C + \frac{D \cdot T_{\text{cycle}}}{T_D} \cdot \tau_D$$

di mana $D$ adalah jumlah unit armada, $T_{\text{cycle}}$ adalah window observasi, dan $\tau_X$ adalah durasi rata-rata tiap jenis check. Objektif optimasi Zhou adalah memaksimumkan ketersediaan total armada:

$$\max_{T_A, T_B, T_C, T_D} \bar{A}(T_A, T_B, T_C, T_D)$$

dengan *trade-off* antara memperpanjang interval check (meningkatkan availability) versus risiko reliabilitas (menurunkan availability akibat *corrective maintenance*). Zhou membuktikan secara matematis melalui teorema *optimal value existence* bahwa fungsi objektif $\bar{A}$ memiliki nilai maksimum global unik di interior feasible region (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Untuk mengkuantifikasi *trade-off* ini, Zhou menggunakan model *expected cost* yang menggabungkan *direct maintenance cost* dan *opportunity cost* akibat downtime:

$$C_{\text{total}} = \sum_{X \in \{A,B,C,D\}} \left( C_X^{\text{direct}} + C_X^{\text{opportunity}} \right) + C_{\text{corrective}}$$

dengan:

$$C_X^{\text{opportunity}} = \tau_X \cdot R_{\text{flight}} \cdot f_{\text{utilization}}$$

di mana $R_{\text{flight}}$ adalah *revenue rate* per jam terbang dan $f_{\text{utilization}}$ adalah faktor utilisasi harian armada.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hirarkis Zhou mengikuti SOP terstruktur tujuh fase yang integratif terhadap standar MSG-3 (Maintenance Steering Group – 3rd Meeting):

**Fase 1 — Pengumpulan Data Operasional.** Akuisisi data dari *Continuing Airworthiness Maintenance Exposition* (CAME), *Minimum Equipment List* (MEL), *Aircraft Technical Log* (ATL), dan sistem *Computerized Maintenance Management System* (CMMS) seperti AMOS, TRAX, atau SAP PM. Parameter kunci: Mean Time Between Failures (MTBF), Mean Time To Repair (MTTR), dispatch reliability historis, dan *in-service difficulty reports*.

**Fase 2 — Analisis Fungsi Sistem (*Function Analysis*).** Dekomposisi pesawat menjadi ATA Chapter (Air Transport Association) — struktur standar industri (ATA 21—Air Conditioning, ATA 27—Flight Controls, ATA 32—Landing Gear, ATA 53—Fuselage, dst.), kemudian identifikasi *failure modes and effects* per komponen kritis.

**Fase 3 — Penentuan Interval Check Optimal.** Optimasi numerik $\bar{A}(T_A, T_B, T_C, T_D)$ menggunakan algoritma *successive parabolic interpolation* atau *generalized reduced gradient* (GRG) untuk menemukan stationary point. Di Zhou (2024), algoritma *adaptive grid search* dengan *stopping criterion* $\|\nabla \bar{A}\| < \epsilon$ digunakan.

**Fase 4 — Validasi dengan Simulasi Monte Carlo.** Validasi model deterministik dengan simulasi stokastik yang menggabungkan distribusi kegagalan komponen, *scatter* interval check (koefisien variasi 5–15%), dan *reactive maintenance* yang tak terduga.

**Fase 5 — Implementasi Bertahap (*Phased Roll-out*).** Pilot implementation pada 5–10% armada selama 6 bulan, monitoring KPI, lalu *scaling* ke seluruh armada.

**Fase 6 — Continuous Monitoring & Feedback Loop.** Dashboard *Predictive Analytics* berbasis machine learning (random forest atau gradient boosting) untuk deteksi degradasi dini dan *dynamic rescheduling*.

**Fase 7 — Audit & Recertification.** Audit internal setiap 12 bulan dan recertification sesuai regulasi otoritas aviasi sipil (FAA, EASA, atau DGCA).

Arsitektur teknologi pendukung mencakup *Enterprise Asset Management* (EAM) system terintegrasi dengan *Internet of Things* (IoT) sensor telemetry (ACMS — *Aircraft Condition Monitoring System*, QAR — *Quick Access Recorder*) dan *digital twin* pesawat untuk simulasi *what-if scenario*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai regional Asia Tenggara dengan 20 unit armada Airbus A320ceo, beroperasi 12 jam/hari, 365 hari/tahun dengan utilisasi harian 9,5 flight hours/unit. Revenue rate diasumsikan USD 12.000/jam terbang.

**Parameter Input Awal (berdasarkan Zhou, 2024):**

| Parameter | A-check | B-check | C-check | D-check |
|---|---|---|---|---|
| Interval ($T_X$) | 500 FH | 6 bulan | 24 bulan | 8 tahun |
| Durasi ($\tau_X$) | 50 jam | 120 jam | 600 jam | 2.400 jam |
| Direct cost ($C_X$) | USD 15.000 | USD 40.000 | USD 350.000 | USD 2.500.000 |

MTBF rata-rata komponen kritis: 8.000 FH. MTTR *unscheduled*: 8 jam. *Unscheduled rate*: 0,015 event per flight hour.

**Langkah 1 — Perhitungan Downtime Terjadwal per Tahun per Unit:**

Frekuensi A-check per tahun per unit:
$$f_A = \frac{U}{T_A} = \frac{12 \times 365 \times 9{,}5}{500} = \frac{41.610}{500} \approx 83 \text{ check/tahun/unit (tetap dibatasi ~4 karena interval lebih besar dari utilisasi)}$$

Koreksi: interval efektif adalah $\min(T_A, U) = \min(500, 41.610/83 \approx 501)$ — interval valid. Frekuensi aktual:
$$f_A = 83{,}22 \text{ A-check/tahun/unit}$$

Total downtime A-check per tahun:
$$DT_A = f_A \times \tau_A = 83{,}22 \times 50 = 4.161 \text{ jam/tahun}$$

Frekuensi B-check:
$$f_B = \frac{12}{6} = 2 \text{ B-check/tahun/unit} \Rightarrow DT_B = 2 \times 120 = 240 \text{ jam/tahun}$$

Frekuensi C-check:
$$f_C = \frac{1}{2} = 0{,}5 \text{ C-check/tahun/unit} \Rightarrow DT_C = 0{,}5 \times 600 = 300 \text{ jam/tahun}$$

Frekuensi D-check:
$$f_D = \frac{1}{8} = 0{,}125 \text{ D-check/tahun/unit} \Rightarrow DT_D = 0{,}125 \times 2.400 = 300 \text{ jam/tahun}$$

**Langkah 2 — Downtime *Unscheduled* per Tahun per Unit:**

$$DT_{\text{unsch}} = \lambda \times U \times \text{MTTR} = 0{,}015 \times 41.610 \times 8 = 4.993 \text{ jam/t