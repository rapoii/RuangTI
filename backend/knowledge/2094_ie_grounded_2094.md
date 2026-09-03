# 2094 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Kebijakan A/B/C/D pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global beroperasi di bawah tekanan struktural yang unik: permintaan kapasitas penumpang yang terus meningkat, biaya operasional bahan bakar dan tenaga kerja yang volatil, serta ekspektasi *Mean Time Between Failure* (MTBF) yang sangat ketat untuk menjamin keselamatan publik. Dalam konteks ini, sektor *Maintenance, Repair, and Overhaul* (MRO) penerbangan menjadi tulang punggung kelangsungan operasional armada, dengan pangsa pasar global yang diproyeksikan melebihi USD 100 miliar per tahun. Hang Zhou (2024) dalam studinya menyoroti bahwa meskipun *Reliability-Centred Maintenance* (RCM) telah lama diakui sebagai kerangka kerja superior untuk mengkuantifikasi degradasi kinerja non-linier sepanjang siklus hidup aset, implementasinya pada sistem kompleks seperti kebijakan pemeriksaan bertingkat A/B/C/D dalam MRO penerbangan masih menghadapi tantangan signifikan.

Urgensi ekonomis dari optimalisasi ketersediaan armada tidak dapat dilebih-lebihkan. Setiap jam *ground time* pesawat narrow-body seperti Boeing 737 atau Airbus A320 yang tidak terbang karena pemeriksaan terjadwal atau korektif menimbulkan机会成本 (opportunity cost) berupa kehilangan pendapatan tiket, slot bandara, dan jadwal kargo. Studi Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) secara eksplisit memperkenalkan kerangka kebijakan MRO yang mengintegrasikan siklus *D-check* (refurbishment penuh) dengan *partial refurbishment* selama fase *mature-run* operasi penerbangan. Pendekatan ini mengakui bahwa realitas operasional pesawat tidak bersifat stasioner: setelah beberapa siklus D-check, komponen-komponen utama memasuki regime degradasi yang berbeda sehingga memerlukan strategi intervensi parsial yang lebih granular.

Konteks regulasi yang melatari penelitian ini bersandar pada kerangka FAA Part 121, EASA Part-M, dan standar industri seperti MSG-3 (Maintenance Steering Group-3) yang dikembangkan oleh ATA. Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) dalam versi komplementer menekankan bahwa penjadwalan check yang hanya didasarkan pada kalender atau jam terbang tanpa pertimbangan degradasi probabilistik akan menghasilkan kebijakan yang suboptimal baik dari sisi keselamatan maupun ekonomi. Oleh karena itu, kontribusi orisinal paper ini — yaitu demonstrasi matematis keberadaan nilai optimal untuk model ketersediaan melalui formulasi berbasis *maximum available operation time* — memiliki implikasi langsung bagi para *engineering manager*, *fleet planner*, dan analis keandalan di industri penerbangan maupun sektor aset-berat lainnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual RCM Hirarkis

RCM, sebagaimana diformalkan oleh Moubray (1997) dan diadaptasi oleh Zhou (2024), memandang pemeliharaan bukan sebagai kegiatan reaktif melainkan sebagai proses optimasi berbasis bukti degradasi. Pada kebijakan A/B/C/D MRO penerbangan, hirarki tersebut memiliki karakteristik sebagai berikut:

- **A-check**: pemeriksaan ringan, dilakukan setiap 400–600 jam terbang (~2 bulan)
- **B-check**: pemeriksaan menengah, setiap 6–8 bulan
- **C-check**: inspeksi detail, setiap 20–24 bulan
- **D-check**: overhaul penuh (refurbishment), setiap 6–12 tahun

Zhou (2024) memodelkan ketersediaan (*availability*) sebagai fungsi dari rasio waktu operasional terhadap total waktu siklus:

$$A_i(t) = \frac{T_{\text{op},i}}{T_{\text{op},i} + T_{\text{m},i}(t)}$$

di mana $T_{\text{op},i}$ adalah waktu operasi tersedia pada interval ke-$i$, dan $T_{\text{m},i}(t)$ adalah total downtime pemeliharaan kumulatif hingga waktu $t$.

### 2.2 Model Degradasi Non-Linier

Paper Zhou mengasumsikan bahwa tingkat degradasi komponen mengikuti pola non-linier dengan tiga fase: *infant mortality* (burn-in), *useful life* (steady degradation), dan *wear-out*. Fungsi hazard $\lambda(t)$ dimodelkan dengan distribusi Weibull:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah parameter bentuk (*shape*) dan $\eta$ adalah parameter skala (*scale*). Untuk komponen kritis penerbangan, $\beta > 1$ mengindikasikan regime *wear-out*.

### 2.3 Formulasi Optimasi Ketersediaan Hirarkis

Inovasi utama Zhou (2024) adalah formulasi kebijakan pemeliharaan hirarkis dengan parameter keputusan berupa interval antar-check $\tau = (\tau_A, \tau_B, \tau_C, \tau_D)$. Fungsi tujuan adalah memaksimumkan ketersediaan jangka panjang:

$$\max_{\tau} \quad \bar{A}(\tau) = \lim_{T \to \infty} \frac{1}{T} \int_0^T A(\tau, t) \, dt$$

dengan kendala:

$$\sum_{i \in \{A,B,C,D\}} n_i(\tau) \cdot T_{\text{m},i} \leq T_{\text{budget}}$$

di mana $n_i(\tau)$ adalah jumlah check tipe-$i$ dalam horizon perencanaan, dan $T_{\text{budget}}$ adalah *downtime budget* tahunan yang diizinkan oleh regulator atau manajemen operasi.

### 2.4 Model Partial Refurbishment Fase Mature-Run

Kontribusi paling orisinal dari paper ini adalah pengenalan parameter *partial refurbishment* $R_p \in [0,1]$ yang diterapkan selama interval antara dua D-check:

$$T_{\text{D-cycle}}^{\text{eff}} = T_{\text{D}} + \sum_{j=1}^{k} \Delta T_{\text{R}_p,j}$$

di mana $\Delta T_{\text{R}_p,j}$ adalah perpanjangan siklus hidup akibat refurbishment parsial ke-$j$. Eksistensi nilai optimal $R_p^*$ dibuktikan melalui kondisi stasioneritas orde-pertama:

$$\frac{\partial \bar{A}}{\partial R_p}\bigg|_{R_p^*} = 0, \quad \frac{\partial^2 \bar{A}}{\partial R_p^2}\bigg|_{R_p^*} < 0$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis berbasis RCM mengikuti prosedur operasional standar berlapis yang diuraikan oleh Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) sebagai berikut:

**Tahap 1 — Pengumpulan Data Aset & Klasifikasi Fungsi.** Inventarisasi seluruh komponen kritis pesawat (engine, avionik, landing gear, struktur) menggunakan *Aircraft Maintenance Manual* (AMM) dan *Illustrated Parts Catalogue* (IPC). Setiap komponen diberi *criticality index* berdasarkan konsekuensi kegagalan (keselamatan, operasional, ekonomi).

**Tahap 2 — Pemodelan Degradasi.** Estimasi parameter Weibull $(\hat{\beta}, \hat{\eta})$ menggunakan data historis *Service Difficulty Report* (SDR) dan *Airworthiness Directive* (AD) compliance. Uji goodness-of-fit dengan *Kolmogorov-Smirnov* pada tingkat signifikansi $\alpha = 0.05$.

**Tahap 3 — Optimasi Interval Check.** Solusi problem $\max_{\tau} \bar{A}(\tau)$ dilakukan secara numerik melalui algoritma *Successive Quadratic Approximation* (SQA) atau *Dynamic Programming* mengingat kompleksitas ruang keputusan multi-dimensi.

**Tahap 4 — Implementasi Partial Refurbishment Policy.** Penjadwalan *partial refurbishment* pada fase *mature-run* dengan $R_p^* \approx 0.35$ (berdasarkan studi numerik Zhou) yang menghasilkan keseimbangan antara perpanjangan siklus hidup dan risiko kegagalan dini.

**Tahap 5 — Monitoring & Feedback Loop.** *Continuous Airworthiness Maintenance Program* (CAMP) dengan *Key Performance Indicators* (KPI): *Dispatch Reliability* ≥ 99.5%, *Schedule Reliability* ≥ 95%, dan *Maintenance Cost per Available Seat Mile* (CASM-M) yang dimonitor secara *real-time*.

Standar yang mendasari prosedur ini adalah MSG-3 revisi terkini, EASA Part-CAMO, dan FAA AC 121-22A untuk manajemen *continuous airworthiness*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah operator penerbangan dengan armada 20 unit Airbus A320ceo memiliki parameter operasi sebagai berikut:

- Rata-rata utilisasi harian: $u = 8$ jam/hari
- MTBF sistem target: $\bar{T}_{\text{MTBF}} = 3{,}500$ jam
- Durasi A-check: $T_{\text{m},A} = 12$ jam
- Durasi B-check: $T_{\text{m},B} = 48$ jam
- Durasi C-check: $T_{\text{m},C} = 240$ jam (10 hari)
- Durasi D-check: $T_{\text{m},D} = 2{,}400$ jam (100 hari)
- Parameter Weibull tipikal untuk komponen struktural: $\hat{\beta} = 2.1$, $\hat{\eta} = 8{,}000$ jam
- Biaya A-check: $C_A = \$15{,}000$; B-check: $C_B = \$60{,}000$; C-check: $C_C = \$400{,}000$; D-check: $C_D = \$3{,}500{,}000$
- Biaya *partial refurbishment* per aplikasi: $C_{R_p} = \$1{,}200{,}000$

**Langkah 1: Tentukan Interval Optimal**

Dengan constraint bahwa B-check dilakukan setiap 4 A-check, dan C-check setiap 8 B-check (rasio tipikal MSG-3), maka:

$$\tau_A = 600 \text{ jam}, \quad \tau_B = 2{,}400 \text{ jam}, \quad \tau_C = 19{,}200 \text{ jam}, \quad \tau_D = 38{,}400 \text{ jam}$$

**Langkah 2: Hitung Ketersediaan Baseline (Tanpa Partial Refurbishment)**

Jumlah check per siklus D-check:
$$n_A = \frac{38{,}400}{600} = 64, \quad n_B = \frac{38{,}400}{2{,}400} = 16, \quad n_C = \frac{38{,}400}{19{,}200} = 2$$

Total downtime per siklus:
$$T_{\text{m,total}} = (64 \times 12) + (16 \times 48) + (2 \times 240) + (1 \times 2{,}400) = 768 + 768 + 480 + 2{,}400 = 4{,}416 \text{ jam}$$

Ketersediaan:
$$\bar{A}_{\text{baseline}} = \frac{38{,}400}{38{,}400 + 4{,}416} = \frac{38{,}400}{42{,}816} \approx 0.8969 \text{ atau } 89.69\%$$

**Langkah 3: Terapkan Partial Refurbishment dengan $R_p^* = 0.35$**

Asumsikan 2 aplikasi *partial refurbishment* per siklus D-check, masing-masing memperpanjang siklus hidup efektif sebesar $\Delta T_{\text{R}_p} = 4{,}000$ jam:

$$T_{\text{D-cycle}}^{\text{eff}} = 38{,}400 + 2 \times 4{,}000 = 46{,}400 \text{ jam}$$

Recalculate downtime (dengan 2 tambahan *partial refurbishment* yang masing-masing memakan 600 jam):
$$T_{\text{m,total}}^{\text{new}} = 4{,}416 + 2 \times 600 = 5{,}616 \text{ jam}$$

$$\bar{A}_{\text{enhanced}} = \frac{46{,}400}{46{,}400 + 5{,}616} = \frac{46{,}400}{52{,}016} \approx 0.8920 \text{ atau } 89.20\%$$

**Langkah 4: Analisis Trade-off Biaya-Manfaat**

Total biaya pemeliharaan per siklus D-check:
$$C_{\text{baseline}} = (64 \times 15{,}000) + (16 \times 60{,}000) + (2 \times 400{,}000) + (1 \times 3{,}500{,}000) = 960{,}000 + 960{,}000 + 800{,}000 + 3{,}500{,}000 = \$6{,}220{,}000