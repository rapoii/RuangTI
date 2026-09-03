# 2638 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimumkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tekanan struktural yang semakin besar dalam menyeimbangkan tiga sasaran utama yang saling bersaing secara inheren: **keselamatan operasional (safety)**, **ketersediaan armada (fleet availability)**, dan **efisiensi biaya pemeliharaan (maintenance cost efficiency)**. Sejak diperkenalkannya konsep *Reliability-Centred Maintenance* (RCM) oleh Nowlan dan Heap pada tahun 1978 melalui laporan untuk Departemen Pertahanan Amerika Serikat, paradigma RCM telah diadopsi secara luas oleh industri-industri padat-aset (asset-intensive industries) seperti penerbangan, kereta api, energi nuklir, dan manufaktur berat untuk mengelola degradasi non-linear dari performa siklus-hidup (life-cycle performance) sistem (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

Dalam konteks sektor MRO penerbangan, setiap pesawat komersial besar wajib menjalani serangkaian inspeksi dan perawatan berkala yang terstruktur secara hirarkis. Standar industri internasional — yang diakui oleh International Air Transport Association (IATA) dan regulator penerbangan sipil seperti FAA (AS), EASA (Eropa), dan DGCA Indonesia — mengklasifikasikan pemeliharaan pesawat dalam **sistem tag A/B/C/D-check**. Tag A dan B merupakan *line maintenance* yang dilakukan secara rutin di landasan pacu dengan waktu penyelesaian singkat (A-check: 50–70 jam kerja, B-check: 160–300 jam kerja). Tag C merupakan *base maintenance* yang lebih mendalam dengan interval tipikal 20–24 bulan atau 6.000–8.000 jam terbang. Sementara itu, **D-check** atau *Heavy Maintenance Visit (HMV)* adalah inspeksi terbesar yang mencakup pembongkaran struktural, pengecekan kelelahan logam (*fatigue inspection*), rekondisi komponen, dan refurbishment total dengan durasi 1–2 bulan serta siklus 6–12 tahun (Zhou, 2024).

Urgensi operasional dan ekonomi dari topik ini sangat signifikan. Menurut analisis Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), penerapan kebijakan RCM yang efektif pada armada pesawat menghadapi tantangan substansial karena sifat **non-linear** dari degradasi performa siklus hidup — di mana tingkat kerusakan tidak meningkat secara proporsional dengan waktu operasional, melainkan mengikuti pola yang dipengaruhi oleh *infant mortality*, *useful life*, dan *wear-out phases* sesuai *bathtub curve*. Lebih lanjut, kompleksitas semakin bertambah ketika kebijakan harus mengakomodasi **dua mode refurbishment** secara simultan: D-check penuh (heavy overhaul) yang mahal namun sangat efektif memulihkan reliability, serta refurbishment parsial selama fase *mature-run* (antara dua D-check) yang berfungsi sebagai strategi *life extension* dan *risk mitigation*. Tulisan ini bertujuan membangun kerangka kebijakan pemeliharaan hirarkis yang mengoptimalkan penjadwalan inspeksi sepanjang siklus hidup pesawat dengan memaksimalkan *availability function*, sembari membuktikan secara matematis **keberadaan nilai optimal** dari model ketersediaan tersebut (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi dan Fungsi Keandalan

Landasan teoritis dari kebijakan RCM hirarkis dimulai dari pemodelan **state-dependent reliability** komponen pesawat. Misalkan $R(t)$ menyatakan reliabilitas sistem pada waktu $t$ setelah inspeksi atau perbaikan terakhir. Mengikuti kerangka Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), degradasi non-linear dapat dimodelkan dengan fungsi *cumulative damage*:

$$R(t) = e^{-\int_0^t \lambda(\tau)\, d\tau} = e^{-H(t)}$$

di mana $\lambda(\tau)$ adalah *instantaneous failure rate* (hazard function) dan $H(t) = \int_0^t \lambda(\tau)\, d\tau$ adalah *cumulative hazard*. Untuk kasus *wear-out phase* yang relevan bagi komponen pesawat tua, digunakan model Weibull dengan parameter shape $\beta > 1$:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}, \quad \beta > 1, \; \eta > 0$$

sehingga reliabilitasnya menjadi:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

### 2.2 Formulasi Ketersediaan Armada (Fleet Availability)

Ketersediaan sesaat (*instantaneous availability*) $A_i$ setelah intervensi pemeliharaan ke-$i$ didefinisikan sebagai:

$$A_i = \frac{T_{up,i}}{T_{up,i} + T_{down,i}}$$

Untuk armada dengan $N$ pesawat homogen, ketersediaan rata-rata (*fleet availability*) dalam satu siklus gabungan A/B/C/D adalah:

$$\bar{A} = \frac{1}{T_c} \sum_{j=1}^{m} \int_{t_{j-1}}^{t_j} A_j(\tau)\, d\tau = \frac{\sum_{j=1}^{m} \mathrm{MTBF}_j}{\sum_{j=1}^{m}\left(\mathrm{MTBF}_j + \mathrm{MDT}_j\right)}$$

di mana $\mathrm{MTBF}_j$ adalah *Mean Time Between Failures* segmen ke-$j$ dan $\mathrm{MDT}_j$ adalah *Mean Downtime* pemeliharaan segmen ke-$j$.

### 2.3 Model Kebijakan Hirarkis A/B/C/D

Zhou (2024) memperkenalkan *variabel keputusan* berikut untuk penjadwalan inspeksi:

- $n_A$: jumlah A-check per interval B-check
- $n_B$: jumlah B-check per interval C-check  
- $n_C$: jumlah C-check per interval D-check
- $\tau_D$: interval D-check (dalam tahun atau flight cycles)

*Cycle time* total antar-D-check menjadi:

$$T_D = n_C \cdot T_C = n_C \cdot n_B \cdot T_B = n_C \cdot n_B \cdot n_A \cdot T_A$$

### 2.4 Fungsi Objektif Optimasi

Tujuan utama paper ini adalah memaksimumkan *expected availability* selama mature-run dengan mengizinkan **refurbishment parsial** pada interval C-check. Formulasi optimasi (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)):

$$\max_{\{\tau_D, n_C, n_B, n_A\}} \quad \bar{A}(\tau_D, n_C, n_B, n_A)$$

$$\text{s.t.} \quad C_{\text{total}} \leq C_{\text{budget}}$$

$$\quad R(t) \geq R_{\min} \quad \forall t \in [0, \tau_D]$$

di mana $C_{\text{total}}$ adalah biaya total siklus hidup dan $R_{\min}$ adalah ambang batas keandalan minimum yang diizinkan regulator.

### 2.5 Bukti Eksistensi Nilai Optimal

Melalui konstruksi fungsi tujuan yang bersifat **quasi-concave** dalam domain kompak, Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan eksistensi nilai optimal dengan menerapkan *Extreme Value Theorem* dan *Berge's Maximum Theorem*:

**Lemma 1 (Eksistensi):** Jika fungsi ketersediaan $\bar{A}(\cdot)$ bersifat kontinu dan domain keputusan $\mathcal{D}$ kompak dan convex, maka terdapat $(\tau_D^*, n_C^*, n_B^*, n_A^*) \in \mathcal{D}$ sedemikian rupa sehingga $\bar{A}(\tau_D^*, n_C^*, n_B^*, n_A^*) = \max_{(\cdot) \in \mathcal{D}} \bar{A}(\cdot)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari kebijakan RCM hirarkis di industri MRO mengikuti alur proses berikut, yang disintesiskan dari protokol standar industri (MSG-3, ATA MSG-3, dan IATA Aircraft Maintenance Engineering) yang dirujuk dalam Zhou (2024):

### 3.1 Diagram Alir Implementasi RCM Hirarkis

```
┌──────────────────────────────────────────────────────────┐
│ FASE 1: ANALISIS FUNGSI & FAILURE MODE (FFMEA)          │
│ • Identifikasi fungsi sistem kritis                       │
│ • Pemetaan failure modes melalui FMEA/FMECA              │
│ • Klasifikasi severity, occurrence, detection            │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│ FASE 2: SELEKSI TASK RCM (MSG-3 Logic)                   │
│ • Task A: Servicing / Inspection                         │
│ • Task B: Functional Check / Operational Check           │
│ • Task C: Restoration (Refurbishment)                    │
│ • Task D: Discard (Replacement)                          │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│ FASE 3: PENENTUAN INTERVAL HIRARKIS                      │
│ • A-check: 50–70 FLH (Flight Hours)                      │
│ • B-check: 160–300 FLH + interval A-check                │
│ • C-check: 6.000–8.000 FLH atau 20–24 bulan              │
│ • D-check: 6–12 tahun atau 12.000 FLH                    │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│ FASE 4: OPTIMASI PENJADWALAN (Zhou Framework)            │
│ • Maximasi availability dengan constraint biaya          │
│ • Validasi eksistensi nilai optimal                      │
│ • Penjadwalan refurbishment parsial mature-run           │
└────────────────────┬─────────────────────────────────────┘
                     ▼
┌──────────────────────────────────────────────────────────┐
│ FASE 5: MONITORING & FEEDBACK LOOP                       │
│ • Pengumpulan data reliabilitas aktual                    │
│ • Recalibration parameter Weibull (β, η)                 │
│ • Continuous improvement berkala                         │
└──────────────────────────────────────────────────────────┘
```

### 3.2 SOP Standar Pelaksanaan

| Tahap | Prosedur | Penanggung Jawab | Standar Acuan |
|-------|----------|------------------|---------------|
| Pre-Check | Review work card, verifikasi AMM (Aircraft Maintenance Manual) | Planning Engineer | ATA iSpec 2200 |
| Check Execution | Pelaksanaan sesuai task card dan sign-off mechanic berlisensi | Licensed Aircraft Engineer (LAE) | EASA Part-66 / FAA FAR-147 |
| Post-Check | *Function test*, *ground run*, dokumentasi CRS | Quality Assurance Inspector | EASA Part-M / FAA FAR-91.409 |
| Data Recording | Input ke sistem MRO (AMOS, TRAX, atau SAP PM) | MRO IT System | ATA Spec 2000 e-Business |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Hipotetis (Armada Narrow-Body, e.g., Boeing 737-800)

Untuk mengilustrasikan kerangka Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)), digunakan parameter tipikal industri:

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| Fleet size | $N$ | 10 | pesawat |
| Daily utilization | $u$ | 8 | jam/hari |
| Weibull shape | $\beta$ | 2.5 | – |
| Weibull scale | $\eta$ | 18.000 | FLH |
| A-check downtime | $D_A$ | 12 | jam |
| B-check downtime | $D_B$ | 72 | jam |
| C-check downtime | $D_C$ | 720 | jam (30 hari) |
| D-check downtime | $D_D$ | 2.880 | jam (120 hari) |
| Biaya A-check | $C_A$ | 15.000 | USD |
| Biaya B-check | $C_B$ | 60.000 | USD |
| Biaya C-check | $C_C$ | 800.000 | USD |
| Biaya D-check | $C_D$ | 4.500.000 | USD |

### 4.2 Perhitungan Reliabilitas Kritis

Dengan $\beta = 2{,}5$ dan $\eta = 18.000$ FLH, reliabilitas pada akhir siklus C-check (setelah 6.000 FLH operasional):

$$R(6.000) = \exp\left[-\left(\frac{6.000}{18.000}\right)^{2,5}\right] = \exp\left[-\left(\frac{1}{3}\right)^{2,5}\right] = \exp[-0{,}0642] = 0{,}9378$$