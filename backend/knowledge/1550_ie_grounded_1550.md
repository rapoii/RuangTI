# 1550 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. SSRN Working Paper. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu sektor *asset-heavy* dengan karakteristik biaya modal (*capital expenditure*) yang sangat tinggi, siklus hidup teknis yang panjang (umumnya 20–30 tahun per armada), serta persyaratan keselamatan yang bersifat non-negotiable. Pesawat komersial modern seperti Airbus A320 family atau Boeing 737 family memiliki nilai per unit yang berkisar USD 50–110 juta, sehingga setiap jam *ground time* yang tidak produktif menimbulkan *opportunity cost* pendapatan tiket yang hilang dan biaya *fixed cost* yang tetap berjalan. Berdasarkan kerangka analisis Zhou (2024) yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), permasalahan utama yang melatarbelakangi penelitian ini adalah bagaimana merancang kebijakan pemeliharaan yang tidak hanya memenuhi regulasi keselamatan dari otoritas penerbangan (seperti FAA Part 121 atau CASR Part 121), tetapi juga secara simultan memaksimalkan ketersediaan armada (*fleet availability*) yang menjadi metrik kritis bagi profitabilitas operator.

Zhou (2024) menekankan bahwa *Reliability-Centered Maintenance* (RCM) telah menjadi kerangka pikir dominan dalam industri penerbangan sejak diperkenalkan oleh Stanley Nowlan dan Howard Heap pada tahun 1978 untuk United Airlines, namun implementasi RCM pada sistem yang kompleks seperti kebijakan pemeriksaan bertingkat A/B/C/D masih menghadapi tantangan signifikan. Struktur A/B/C/D Check merupakan hierarki pemeliharaan *scheduled maintenance* yang umum diterapkan: A-Check dilakukan setiap 400–600 flight hours (sekitar 2–3 bulan), B-Check setiap 6–8 bulan, C-Check setiap 20–24 bulan (pemeriksaan struktural dan sistem besar), serta D-Check (atau *heavy maintenance visit*) yang merupakan *overhaul* penuh pesawat setiap 6–12 tahun. Kompleksitas muncul karena degradasi performa siklus hidup bersifat non-linear dan sebagian komponen mengalami *aging* yang bergantung pada *usage* (flight cycles) dan *calendar time*.

Urgensi ekonomis penelitian ini semakin kuat ketika mempertimbangkan bahwa *Maintenance, Repair, and Overhaul* (MRO) pasar global bernilai lebih dari USD 100 miliar per tahun (sesuai proyeksi Boeing Market Outlook 2024), dan margin keuntungan operator penerbangan sangat tipis (2–5%), sehingga peningkatan ketersediaan armada sebesar 1–2% saja sudah berdampak material terhadap *bottom line*. Zhou (2024, DOI: 10.2139/ssrn.6387479) berargumen bahwa pendekatan tradisional yang menetapkan interval pemeliharaan secara konservatif berdasarkan rekomendasi *original equipment manufacturer* (OEM) cenderung *sub-optimal* karena gagal mengakomodasi karakteristik operasional spesifik maskapai—seperti profil rute (pendek vs. panjang), intensitas *load factor*, dan kondisi lingkungan operasional (iklim tropis, korosif, atau gurun).

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membangun model ketersediaan (*availability model*) untuk sistem yang menjalani kebijakan pemeliharaan bertingkat A/B/C/D dengan siklus *D-check* penuh dan *refurbishment* parsial di periode *mature-run*. Formulasi kuantitatif mengikuti kerangka *renewal reward theorem* yang umum digunakan dalam teori pemeliharaan stokastik.

### 2.1 Model Ketersediaan Jangka Panjang (*Long-Run Average Availability*)

Misalkan $T$ menyatakan interval inspeksi atau siklus operasi yang akan dioptimasi. Ketersediaan jangka panjang didefinisikan sebagai:

$$A(T) = \frac{E[U(T)]}{E[U(T)] + E[D(T)]}$$

di mana $E[U(T)]$ adalah ekspektasi *uptime* (waktu operasi pesawat tersedia untuk komersial) dalam satu siklus renewal, dan $E[D(T)]$ adalah ekspektasi *downtime* total yang diakumulasi dari seluruh jenis inspeksi (A, B, C, dan D) yang jatuh dalam interval tersebut.

### 2.2 Komponen Downtime dalam Hierarki A/B/C/D

Untuk satu siklus operasi penuh, *downtime* total dapat diuraikan:

$$E[D(T)] = \sum_{k \in \{A,B,C,D\}} N_k(T) \cdot \bar{d}_k$$

dengan:
- $N_k(T)$ = jumlah inspeksi tipe $k$ dalam horizon $T$
- $\bar{d}_k$ = rata-rata durasi inspeksi tipe $k$ (misal: $\bar{d}_A = 24$ jam, $\bar{d}_B = 3$ hari, $\bar{d}_C = 10$ hari, $\bar{d}_D = 30$ hari)
- Indeks $k$ merepresentasikan tingkatan hirarki A/B/C/D

### 2.3 Frekuensi Inspeksi sebagai Fungsi Interval

Hubungan antara interval inspeksi dan jumlah inspeksi per siklus mengikuti:

$$N_k(T) = \left\lfloor \frac{T}{T_k} \right\rfloor$$

di mana $T_k$ adalah interval inspeksi standar tipe $k$. Dengan memvariasikan $T$ sebagai variabel keputusan, operator dapat mengeksplorasi perdagangan antara *over-maintenance* (interval pendek, downtime tinggi) dan *under-maintenance* (interval panjang, risiko kegagalan dan *unscheduled maintenance* meningkat).

### 2.4 Degradasi Non-Linear dan Fungsi Hazard

Zhou (2024) secara eksplisit menekankan degradasi non-linier siklus hidup. Fungsi *reliability* komponen kritis (misal: *landing gear*, *auxiliary power unit*, atau *composite skin panels*) dapat dimodelkan dengan distribusi Weibull:

$$R(t) = e^{-(t/\eta)^\beta}, \quad \beta > 1$$

dengan *shape parameter* $\beta > 1$ menandakan *wear-out failure*, dan $\eta$ sebagai *scale parameter* (characteristic life). *Hazard rate* yang bersesuaian adalah:

$$h(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

Probabilitas kegagalan dalam interval $[t, t+\Delta t]$ bersyarat pada survival hingga $t$:

$$P(t \leq T_{fail} < t+\Delta t \mid T_{fail} > t) = 1 - e^{-\int_t^{t+\Delta t} h(u)\,du}$$

### 2.5 Masalah Optimasi Ketersediaan

Tujuan optimasi yang diformulasikan oleh Zhou (2024, DOI: 10.2139/ssrn.6387479) adalah:

$$\max_{T \in \mathcal{T}} A(T)$$

dengan $\mathcal{T}$ adalah himpunan layak (*feasible region*) yang dibatasi oleh:
1. Kendala regulasi: $T_k \geq T_k^{min}$ (interval tidak boleh kurang dari batas minimum regulator)
2. Kendala risiko: $P(\text{failure in cycle}) \leq \alpha$ (tingkat kegagalan yang dapat diterima)
3. Kendala kapasitas MRO: $\sum_k N_k(T) \cdot \bar{d}_k \leq C_{MRO}$ (kapasitas slot hangar)

Zhou (2024) membuktikan secara analitis bahwa *existence of an optimal value* untuk model ketersediaan ini terjamin karena $A(T)$ bersifat *quasi-concave* pada domain layak, dengan kondisi orde pertama:

$$\frac{dA(T)}{dT} = 0 \implies \frac{E[D'(T)] \cdot E[U(T)] - E[U'(T)] \cdot E[D(T)]}{(E[U(T)] + E[D(T)])^2} = 0$$

Solusi interior mensyaratkan *marginal benefit* dari peningkatan uptime seimbang dengan *marginal cost* berupa downtime tambahan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa dari kebijakan pemeliharaan hirarkis sesuai kerangka Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mengikuti alur sistematis berikut:

### 3.1 Tahap 1: Karakterisasi Sistem dan Segmentasi Armada

Langkah pertama adalah melakukan *MSG-3 analysis* (Maintenance Steering Group – 3rd logic) yang merupakan standar industri untuk menentukan *task* pemeliharaan berdasarkan analisis *failure modes and effects analysis* (FMEA). Setiap sub-sistem pesawat diklasifikasikan berdasarkan konsekuensi kegagalannya: *evident*, *hidden*, atau *safety-critical*. Output tahap ini adalah daftar lengkap *Line Replaceable Units* (LRU) dan interval inspeksi awal.

### 3.2 Tahap 2: Pengumpulan Data Operasional Historis

Data historis minimal 3–5 tahun dikumpulkan dari *Aircraft Technical Log*, *Airworthiness Directives compliance records*, *Component Reliability Reports*, dan *Aviation Maintenance Technician (AMT)* action logs. Parameter kunci yang diekstraksi meliputi *mean time between failures* (MTBF), *mean time to repair* (MTTR), *dispatch reliability*, dan *delay codes*.

### 3.3 Tahap 3: Estimasi Parameter Model Stokastik

Parameter Weibull ($\beta$, $\eta$) diestimasi menggunakan metode *Maximum Likelihood Estimation* (MLE):

$$\hat{\eta}, \hat{\beta} = \arg\max_{\eta, \beta} \prod_{i=1}^{n} f(t_i; \eta, \beta)$$

dengan fungsi densitas Weibull $f(t) = \frac{\beta}{\eta}(t/\eta)^{\beta-1} e^{-(t/\eta)^\beta}$.

### 3.4 Tahap 4: Penyelesaian Masalah Optimasi

Menggunakan *Non-Linear Programming* (NLP) atau *Sequential Quadratic Programming* (SQP) pada software seperti MATLAB `fmincon`, Python `scipy.optimize`, atau GAMS, selesaikan $\max_T A(T)$ di bawah kendala yang ditetapkan. Validasi dilakukan dengan simulasi Monte Carlo (minimal 10.000 replikasi) untuk memastikan robustness solusi.

### 3.5 Tahap 5: Implementasi Bertahap dan *Continuous Monitoring*

Kebijakan baru diterapkan secara *pilot project* pada 5–10% armada terlebih dahulu selama 6 bulan, dengan metrik *Key Performance Indicator* (KPI): *dispatch reliability* ≥ 99%, *on-time performance* ≥ 95%, *unscheduled removal rate* ≤ 0.05 per 1000 flight hours.

Diagram alir proses:

```
[Start] → [MSG-3 Analysis] → [Data Collection] → [Parameter Estimation (MLE)]
   ↓
[Optimize T*] → [Monte Carlo Validation] → [Pilot Implementation]
   ↓
[Monitor KPIs] → [Feedback Loop] → [Policy Revision] → [Fleet-Wide Rollout]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Maskapai regional dengan 20 armada Airbus A320, melakukan *mature-run operation* (sudah melewati 1 D-Check). Asumsikan parameter berikut berdasarkan tipikal operasional industri (Zhou, 2024):

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Interval A-Check | $T_A$ | 600 flight hours (~3 bulan) |
| Interval B-Check | $T_B$ | 4.500 flight hours (~18 bulan) |
| Interval C-Check | $T_C$ | 15.000 flight hours (~5–6 tahun) |
| Interval D-Check | $T_D$ | 45.000 flight hours (~12 tahun) |
| Durasi A-Check | $\bar{d}_A$ | 24 jam |
| Durasi B-Check | $\bar{d}_B$ | 72 jam |
| Durasi C-Check | $\bar{d}_C$ | 240 jam |
| Durasi D-Check | $\bar{d}_D$ | 720 jam |
| Utilisasi harian pesawat | $u$ | 10 jam/hari |
| Parameter Weibull komponen kritis | $\beta, \eta$ | $\beta=2.5, \eta=8.000$ jam |

### Perhitungan Step-by-Step

**Langkah 1:** Hitung ekspektasi downtime dalam satu siklus renewal selama satu tahun operasi (8.760 jam).

Dalam satu tahun:
- A-Check: $N_A = \lfloor 8.760 / 600 \rfloor = 14$ kali inspeksi
- B-Check: $N_B = \lfloor 8.760 / 4.500 \rfloor = 1$ kali inspeksi
- C-Check: $N_C = \lfloor 8.760 / 15.000 \rfloor = 0$ kali inspeksi
- D-Check: $N_D = \lfloor 8.760 / 45.000 \rfloor = 0$ kali inspeksi

Total downtime terjadwal:
$$E[D(T)] = 14 \times 24 + 1 \times 72 + 0 \times 240 + 0 \times 720 = 336 + 72 = 408 \text{ jam}$$

**Langkah 2