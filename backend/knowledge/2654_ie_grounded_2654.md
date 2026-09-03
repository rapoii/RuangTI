# 2654 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan sipil global merupakan salah satu sektor *asset-heavy* dengan intensitas modal (capital intensity) tertinggi di dunia. Sebuah pesawat narrow-body seperti Boeing 737-800 memiliki nilai kapital sekitar USD 50–60 juta per unit, sementara pesawat wide-body seperti Airbus A350 mencapai USD 150–170 juta. Dengan asumsi utilisasi harian 8–12 jam terbang (*block hour*) dan *yield* penumpang rata-rata USD 0,05–0,08 per seat-mile, kehilangan satu pesawat dari layanan operasi selama satu hari_check (D-Check) berdurasi 30–60 hari_check bernilai opportunity cost antara USD 200.000 hingga USD 600.000 per hari per armada_check. Oleh karena itu_check, **availability** armada bukan sekadar metrik teknis_check, melainkan variabel strategis yang menentukan profitabilitas maskapai.

Dalam konteks ini_check, Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memperkenalkan kerangka kebijakan MRO hirarkis yang mengintegrasikan siklus D-check penuh (heavy maintenance visit yang mencakup inspeksi struktural penuh_check, pembongkaran kabin_check, dan pengujian sistem) dengan partial refurbishment selama fase *mature-run* operasi penerbangan. Pendekatan ini secara eksplisit mengakui bahwa degradasi kinerja pesawat bersifat non-linear sepanjang life-cycle_check, sehingga kebijakan pemeliharaan satu-ukuran-untuk-semua (*one-size-fits-all*) menjadi suboptimal.

Urgensi ekonomis diperkuat oleh fakta bahwa industri MRO penerbangan global bernilai lebih dari USD 100 miliar per tahun (per 2023–2024) dengan tingkat pertumbuhan CAGR 4–6%. Regulasi internasional dari FAA (Federal Aviation Administration), EASA (European Union Aviation Safety Agency), dan ICAO Annex 6 mengharuskan operator penerbangan mematuhi program pemeliharaan berbasis keandalan (*Reliability-Centered Maintenance*/RCM) yang sesuai dengan MSG-3 (Maintenance Steering Group-3) logic. Zhou (2024) menunjukkan bahwa kebijakan A/B/C/D-check yang konvensional_check, ketika dioptimasi dengan pendekatan hirarkis berbasis availability maksimum, mampu memberikan peningkatan availability armada antara 3% hingga 7% tanpa peningkatan biaya pemeliharaan total_check, sebuah temuan yang memiliki implikasi langsung pada bottom-line maskapai.

Lebih jauh_check, paper tersebut menunjukkan secara matematis bahwa model availability memiliki nilai optimum yang eksistensinya dapat dibuktikan secara analitis_check, memberikan landasan kuat bagi manajer pemeliharaan untuk mengadopsi pendekatan berbasis optimasi matematis_check, bukan sekadar mengikuti rekomendasi *original equipment manufacturer* (OEM) secara dogmatis. Pendekatan ini juga menjawab keterbatasan utama implementasi RCM pada sistem kompleks_check, di mana volume data historis_check, interdependensi subsistem_check, dan ketidakpastian lingkungan operasi sering menghambat adopsi langsung.

## 2. Landasan Teori & Formulasi Matematis

Model dasar yang dikembangkan Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) berakar pada teori keandalan klasik yang memodelkan degradasi komponen melalui distribusi Weibull dua parameter (shape β dan scale η). Fungsi keandalan suatu komponen kritis *i* dinyatakan sebagai:

$$R_i(t) = e^{-\left(\frac{t}{\eta_i}\right)^{\beta_i}}$$

dengan *t* adalah waktu operasi kumulatif (flight hours atau cycles), η_i adalah *characteristic life* komponen, dan β_i adalah parameter bentuk yang menentukan pola degradasi (β < 1 menunjukkan *infant mortality*, β ≈ 1 degradasi acak konstan, β > 1 *wear-out*).

Untuk sistem pesawat secara keseluruhan yang terdiri dari *n* subsistem dengan struktur seri-logis_check, keandalan total armada adalah:

$$R_{fleet}(t) = \prod_{i=1}^{n} R_i(t) = \exp\left[-\sum_{i=1}^{n}\left(\frac{t}{\eta_i}\right)^{\beta_i}\right]$$

**Kebijakan Hirarkis A/B/C/D-check.** Zhou (2024) memformalkan interval masing-masing tingkat pemeriksaan sebagai variabel keputusan $T_A, T_B, T_C, T_D$ dengan rasio tipikal mengikuti standar OEM:

$$T_A : T_B : T_C : T_D \approx 1 : 8 : 32 : 256$$

sehingga_check, jika $T_A = 500$ flight hours (FH), maka $T_B \approx 4.000$ FH, $T_C \approx 16.000$ FH, dan $T_D \approx 128.000$ FH. Partial refurbishment pada fase mature-run dimodelkan sebagai rejuvenasi parsial yang memulihkan usia efektif komponen sebesar faktor $\rho \in [0,1]$:

$$t_{effective}^{(post)} = \rho \cdot t_{effective}^{(pre)}$$

**Fungsi Availability Hirarkis.** Availability jangka panjang (*steady-state availability*) untuk satu siklus D-check penuh_check, yang di dalamnya terjadi beberapa A_check, B_check, dan C_check, dinyatakan:

$$A(T_A, T_B, T_C, T_D) = \frac{T_{operation}}{T_{operation} + T_{maintenance}}$$

dengan:

$$T_{operation} = T_D - \sum_{j \in \{A,B,C,D\}} n_j \cdot \tau_j$$

$$T_{maintenance} = \sum_{j \in \{A,B,C,D\}} n_j \cdot \tau_j$$

di mana $n_j$ adalah jumlah check tingkat *j* per siklus D-check_check, dan $\tau_j$ adalah durasi rata-rata (dalam hari) check tingkat *j*. Khusus untuk partial refurbishment_check, kontribusi downtime dimodifikasi menjadi:

$$\tau_{partial} = \alpha \cdot \tau_C, \quad \alpha \in (0,1)$$

**Optimasi.** Masalah optimasi dirumuskan sebagai:

$$\max_{T_A, T_B, T_C, T_D} \quad A(T_A, T_B, T_C, T_D)$$

$$\text{subject to:} \quad T_A \leq T_B \leq T_C \leq T_D$$

$$T_j^{min} \leq T_j \leq T_j^{max}, \quad j \in \{A,B,C,D\}$$

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan secara analitis bahwa fungsi *A* bersifat *quasi-concave* pada domain yang feasible_check, sehingga terdapat nilai optimal unik yang dapat dicari melalui algoritma *golden section search* atau *gradient descent* pada ruang log-domain $\ln T_j$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti kerangka SOP enam tahap yang distandardisasi oleh FAA AC 121-22A dan EASA Part-M, dengan adaptasi sesuai temuan Zhou (2024):

**Tahap 1 — Segmentasi Armada dan Pengumpulan Data Telemetri.** Pesawat diklasifikasikan berdasarkan tipe (narrow-body, wide-body, regional) dan usia (early-run < 5 tahun, mature-run 5–15 tahun, late-run > 15 tahun). Data dikumpulkan dari sistem ACMS (Aircraft Condition Monitoring System), QAR (Quick Access Recorder), dan logbook digital dengan resolusi minimal 1 flight cycle.

**Tahap 2 — Analisis Keandalan Komponen Kritis (MSG-3 Logic).** Setiap komponen dikategorikan ke dalam grup ATA (Air Transport Association) Check, kemudian dinilai *significance*, *safety*, dan *economics* sesuai MSG-3. Komponen dengan ATA grup yang menghasilkan failure consequence *evident* atau *hidden* dan *safety-impact* memerlukan task RCM eksplisit.

**Tahap 3 — Penentuan Interval Optimum.** Menggunakan formulasi pada Bagian 2, interval $T_A^*, T_B^*, T_C^*, T_D^*$ dicari melalui solver optimasi numerik (misalnya Python `scipy.optimize.minimize` dengan constraint SLSQP). Validasi dilakukan dengan simulasi Monte Carlo $N = 10.000$ iterasi untuk memastikan robustnes terhadap variasi stokastik.

**Tahap 4 — Penjadwalan Partial Refurbishment (Mature-Run Optimization).** Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memperkenalkan aturan keputusan: jika usia pesawat $t_{age} \in [t_{mature}^{min}, t_{mature}^{max}]$, maka lakukan partial refurbishment pada selang $[0.4 \cdot T_D, 0.7 \cdot T_D]$ dengan faktor rejuvenasi $\rho = 0.6$–$0.8$.

**Tahap 5 — Eksekusi dan Dokumentasi MRO.** Setiap check mengikuti *work package* terstruktur: A-check (± 50 flight hours downtime), B-check (3–7 hari), C-check (10–20 hari), D-check (30–60 hari). Partial refurbishment dirancang berdurasi 7–14 hari, secara signifikan lebih pendek dari D-check penuh, sehingga availability meningkat.

**Tahap 6 — Continuous Monitoring dan Feedback Loop.** KPI utama: *fleet availability*, *technical dispatch reliability*, *schedule reliability*, dan *maintenance cost per available seat mile (CASM-M)*. *Feedback* digunakan untuk memperbarui parameter $\eta_i$ dan $\beta_i$ setiap 6 bulan melalui Maximum Likelihood Estimation.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai regional dengan armada 10 unit Airbus A320, beroperasi rata-rata 2.800 flight hours per pesawat per tahun, dengan karakteristik sebagai berikut:

| Parameter | Nilai |
|-----------|-------|
| $\tau_A$ (durasi A-check) | 0.25 hari |
| $\tau_B$ (durasi B-check) | 5 hari |
| $\tau_C$ (durasi C-check) | 15 hari |
| $\tau_D$ (durasi D-check) | 45 hari |
| $\tau_{partial}$ (durasi partial refurbishment) | 10 hari |
| $\alpha$ (rasio partial/C) | 10/15 ≈ 0,667 |
| Utilisasi harian | 8 FH/hari |
| Flight hours per tahun per pesawat | 2.920 FH |

**Langkah 1: Penentuan Jumlah Check per Siklus D-check.**

Dengan $T_A = 500$ FH, $T_B = 4.000$ FH, $T_C = 16.000$ FH, $T_D = 128.000$ FH:

$$n_A = \frac{T_D}{T_A} = \frac{128.000}{500} = 256 \text{ A-check}$$

$$n_B = \frac{T_D}{T_B} = \frac{128.000}{4.000} = 32 \text{ B-check}$$

$$n_C = \frac{T_D}{T_C} = \frac{128.000}{16.000} = 8 \text{ C-check}$$

$$n_D = 1 \text{ D-check}$$

**Langkah 2: Perhitungan Availability Tanpa Partial Refurbishment (Skenario Baseline).**

Total downtime per siklus D-check:

$$T_{maint}^{baseline} = 256 \cdot 0{,}25 + 32 \cdot 5 + 8 \cdot 15 + 1 \cdot 45$$

$$= 64 + 160 + 120 + 45 = 389 \text{ hari}$$

Total waktu operasi dalam satu siklus (dengan downtime maintenance):

$$T_{op}^{baseline} = \frac{128.000 \text{ FH}}{8 \text{ FH/hari}} - 389 = 16.000 - 389 = 15.611 \text{ hari}$$

Availability baseline:

$$A^{baseline} = \frac{15.611}{16.000} = 0{,}9757 = 97{,}57\%$$

**Langkah 3: Perhitungan Availability dengan Partial Refurbishment (Skenario Zhou 2024).**

Misalkan dilakukan 2 kali partial refurbishment per siklus D-check, masing-masing menggantikan 1 C-check penuh pada usia $0{,}4 \cdot T_D$ dan $0{,}7 \cdot T_D$:

$$T_{maint}^{Zhou} = 256 \cdot 0{,}25 + 32 \cdot 5 + 6 \cdot 15 + 2 \cdot 10 +