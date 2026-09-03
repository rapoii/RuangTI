# 2302 — Kebijakan Pemeliharaan Hirarki Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global beroperasi di bawah rezim regulasi yang sangat ketat—dirancang oleh badan sertifikasi internasional seperti FAA (AS), EASA (Eropa), dan CAA/CASR (berbagai yurisdiksi)—yang mengharuskan operator pesawat untuk memastikan keselamatan terbang (*airworthiness*) pada seluruh armada melalui program *Maintenance, Repair, and Overhaul* (MRO) yang terdokumentasi secara prosedural (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Dalam konteks ini, **Reliability-Centered Maintenance (RCM)** muncul bukan sekadar sebagai metodologi pemeliharaan, melainkan sebagai kerangka analitis kuantitatif yang mampu mengkuantifikasi degradasi performa siklus-hidup (*life-cycle performance degradation*) yang bersifat **non-linear**—yaitu kerusakan yang tidak mengikuti laju konstan, melainkan akselerasi pada fase mature-run pesawat, sehingga memerlukan kebijakan intervensi yang adaptif terhadap umur pakai struktural dan mekanis (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

Urgensi ekonomis dari optimalisasi ketersediaan armada (*fleet availability*) sangat substansial: sebuah pesawat narrow-body komersial yang grounded selama 24 jam menimbulkan *revenue loss* antara USD 80.000–150.000 (berdasarkan tarif leasing harian dan rata-rata *block hour revenue* industri per 2023), belum termasuk konsekuensi terhadap *schedule reliability*, *on-time performance* (OTP), dan *passenger re-accommodation cost*. Pada armada dengan 50–200 pesawat, selisih ketersediaan sebesar 1–2% saja menghasilkan perbedaan pendapatan tahunan puluhan juta dolar AS. Lebih jauh, kegagalan model RCM yang suboptimal akan menyebabkan **unscheduled removals** yang mahal, melonjakkan *AOG (Aircraft-on-Ground) costs* dan merusak reputasi operator.

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) secara eksplisit menunjukkan bahwa tantangan utama MRO modern terletak pada kompleksitas **kebijakan pemeliharaan hierarki A/B/C/D**—di mana A-check dilakukan setiap 400–600 flight hours, B-check setiap 6–8 bulan, C-check setiap 20–24 bulan (≈6.000–15.000 flight hours), dan D-check (*heavy maintenance visit*) setiap 6–12 tahun (1–2 bulan downtime) untuk *full refurbishment*. Paper ini memperkenalkan framework integratif yang menggabungkan D-check penuh dengan *partial refurbishments* selama fase mature-run, guna membuktikan **eksistensi nilai optimal** pada model ketersediaan (availability). Inilah kontribusi orisinil yang menjadi pondasi modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Degradasi Non-Linear Berbasis Distribusi Weibull

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mengadopsi model degradasi yang merepresentasikan reliabilitas komponen kritis pesawat sebagai fungsi Weibull non-linear:

$$R(t) = e^{-(t/\eta)^{\beta}}$$

di mana:
- $R(t)$ = reliabilitas pada waktu operasi $t$ (flight hours),
- $\eta$ = *characteristic life* (skala degradasi, jam terbang),
- $\beta$ = *shape parameter* yang menentukan bentuk kurva degradasi ($\beta > 1$ mengindikasikan *wear-out failure* dominan, khas fase mature-run).

**Laju kegagalan (hazard rate)** didefinisikan sebagai:

$$h(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2. Model Ketersediaan RCM Hirarki

Ketersediaan sesaat (*instantaneous availability*) untuk setiap tingkat check $i \in \{A, B, C, D\}$ dimodelkan melalui formula klasik:

$$A_i(t) = \frac{MTBF_i}{MTBF_i + MTTR_i}$$

dengan $MTBF_i$ (*Mean Time Between Failures*) dan $MTTR_i$ (*Mean Time To Repair*) spesifik untuk masing-masing hierarchical check. Ketersediaan kumulatif siklus-hidup didefinisikan Zhou sebagai:

$$A_{fleet} = \frac{\sum_{k=1}^{n} T_{op,k}}{\sum_{k=1}^{n} (T_{op,k} + T_{down,k})}$$

di mana $T_{op,k}$ adalah total waktu operasi (*uptime*) pada interval check ke-$k$, dan $T_{down,k}$ adalah total downtime akumulatif yang mencakup A/B/C/D-check sesuai protokolnya.

### 2.3. Formulasi Optimasi Penjadwalan

Tujuan optimasi Zhou (2024) adalah **memaksimalkan total waktu operasi tersedia** (*maximum available operation time*) dengan menentukan interval optimal $\tau_i^*$ untuk masing-masing check:

$$\max_{\tau_A, \tau_B, \tau_C, \tau_D} \; J = \sum_{j=1}^{N} \left[ T_{op}(\tau_A, \tau_B, \tau_C, \tau_D, \lambda_j) \right]$$

$$\text{subject to: } \quad R(t) \geq R_{min}, \; \tau_A < \tau_B < \tau_C < \tau_D, \; \sum_{i} C_i(\tau_i) \leq B$$

dengan $\lambda_j$ = tingkat kegagalan intrinsik komponen ke-$j$, $R_{min}$ = ambang batas reliabilitas minimum yang dipersyaratkan regulator (umumnya $R \geq 0{,}95$ untuk komponen struktural kritis), dan $B$ = *budget constraint* MRO tahunan operator.

### 2.4. Bukti Eksistensi Nilai Optimal

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan secara analitis bahwa fungsi tujuan memiliki **titik stasioner** karena dua sifat berlawanan: (i) interval check yang terlalu pendek menurunkan downtime proporsional, dan (ii) interval check yang terlalu panjang meningkatkan risiko kegagalan dan unscheduled removals. Kondisi first-order necessary:

$$\frac{\partial J}{\partial \tau_i} = 0 \implies \frac{d T_{op}}{d \tau_i} = \frac{d T_{down}}{d \tau_i}$$

menghasilkan **sweet spot** di mana kenaikan margin operasi sama dengan tambahan biaya downtime. Inilah justifikasi matematis atas eksistensi nilai optimal yang menjadi klaim utama paper.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hierarki RCM mengikuti protokol sistematis yang dirancang untuk menjembatani analisis teoretis dengan realitas operasional MRO:

**Tahap 1 — Segmentasi Hirarki A/B/C/D Check.** Prosedur mengikuti *Maintenance Planning Document* (MPD) pabrikan OEM (Boeing, Airbus, Embraer) yang di-tailor ke *Maintenance Review Board Report* (MRBR). Karakteristik prosedural:

| Check | Interval | Durasi (jam) | Personel | Lingkup Inspeksi |
|-------|----------|--------------|----------|------------------|
| A-check | 400–600 FH | 24–50 | 4–6 teknisi | Visual, fluid, lubrication |
| B-check | 6–8 bulan | 160–200 | 8–12 teknisi | + operational checks, avionics |
| C-check | 20–24 bulan | 6.000–15.000 | 40–80 teknisi | + structural, systems, cabin |
| D-check | 6–12 tahun | 30.000–60.000 | 100–250 teknisi | Full strip, refurbishment, repainting |

**Tahap 2 — Pengumpulan Data Reliabilitas Operasional.** Setiap komponen kritis (misalnya: CFM56-7B engine, avionics suite, landing gear assembly) dimonitor melalui **Aircraft Reliability Program** dengan metrik *Dispatch Reliability* (DR ≥ 99% untuk armada mature) dan *Mean Time Between Unscheduled Removals* (MTBUR).

**Tahap 3 — Pemodelan Degradasi & Identifikasi Sweet Spot.** Menggunakan parameter estimasi Weibull dari data historis MRO, tim reliability melakukan fitting untuk menentukan $\eta, \beta$ per keluarga komponen, lalu menghitung $\tau_i^*$ menggunakan persamaan di Bagian 2.3.

**Tahap 4 — Integrasi Partial Refurbishment (Kontribusi Orisinil Zhou).** Tidak seperti kebijakan D-check konvensional yang menunggu interval penuh 6–12 tahun, framework Zhou menyisipkan *partial refurbishment* (misalnya: cabin refit, avionics upgrade, selective structural restoration) selama fase mature-run untuk **memperpanjang residual useful life (RUL)** tanpa harus melakukan full heavy maintenance:

$$RUL_{extended} = RUL_{base} + \Delta_{partial}(\mathbf{x})$$

di mana $\Delta_{partial}$ adalah fungsi vektor $\mathbf{x}$ yang mencakup komponen yang di-refurbish dan kualitas pengerjaan.

**Tahap 5 — Validasi & Continuous Airworthiness Maintenance.** Setiap rekomendasi optimasi harus divalidasi oleh *Continuing Airworthiness Management Organization* (CAMO) dan dilaporkan melalui *Airworthiness Directive* (AD) compliance sebelum implementasi riil.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input Operasional

Ambil studi kasus armada narrow-body Boeing 737-800 operator di Asia Tenggara dengan parameter MRO tipikal:

- **Total Flight Hours (TFH) per tahun:** $\mu = 3.200$ jam/tahun
- **Karakteristik Weibull engine (CFM56-7B):** $\eta = 12.500$ jam, $\beta = 2{,}4$
- **Karakteristik Weibull avionics:** $\eta = 18.000$ jam, $\beta = 1{,}8$
- **Karakteristik Weibull airframe (struktur):** $\eta = 35.000$ jam, $\beta = 2{,}1$
- **Interval A-check:** $\tau_A = 500$ FH (downtime $t_A = 36$ jam)
- **Interval B-check:** $\tau_B = 8$ bulan (downtime $t_B = 180$ jam)
- **Interval C-check:** $\tau_C = 24$