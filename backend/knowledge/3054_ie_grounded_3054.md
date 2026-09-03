# 3054 — Kebijakan Pemeliharaan Hirarkis Berbasis Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor Aviation Maintenance, Repair, and Overhaul (MRO)
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector.* Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector.* Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global merupakan salah satu ekosistem *capital-intensive* dengan karakteristik teknis paling ketat di dunia. Sebuah pesawat narrow-body generasi terbaru seperti Airbus A320neo atau Boeing 737 MAX memiliki harga per unit yang melampaui USD 110 juta, dengan *total cost of ownership* (TCO) selama siklus hidup 25–30 tahun yang dapat melebihi USD 400 juta per armada per unit, di mana lebih dari 40% dari TCO tersebut berasal dari biaya *Maintenance, Repair, and Overhaul* (MRO) [Hang Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)]. Dalam konteks operasional maskapai, kebijakan MRO tidak hanya menentukan struktur biaya, namun secara langsung menggovernansi *fleet availability* — sebuah metrik ketersediaan armada yang menjadi penentu kemampuan maskapai memenuhi jadwal penerbangan, menyerap permintaan pasar, dan mempertahankan revenue stream. Setiap satu titik persentase peningkatan *availability* pada armada 200 pesawat bernilai ekonomis setara dengan penambahan ±2 unit pesawat baru dari sisi kapasitas utilisasi.

Zhou (2024) dalam kerangka *Reliability-Centered Maintenance* (RCM) mengidentifikasi bahwa degradasi performa pesawat selama siklus hidup bersifat **non-linear** dengan profil *bathtub curve* yang sangat asimetris: tingkat kerusakan rendah pada fase awal operasi (*infant mortality*), menurun tajam pada fase *mature-run*, dan meningkat eksponensial setelah melewati ambang batas *wear-out*. Kompleksitas ini menjadi lebih parah karena struktur pemeliharaan aviasi mengadministrasikan kebijakan hirarkis A/B/C/D check yang berbeda interval, cakupan pekerjaan, dan tingkat invasif. *A-check* dilakukan setiap 400–600 flight hours dengan inspeksi general; *B-check* (umumnya telah diintegrasikan ke *A-check* modern) setiap 6–8 bulan; *C-check* setiap 20–24 bulan dengan inspeksi major di hangar; dan *D-check* atau *Heavy Maintenance Visit* (HMV) setiap 6–12 tahun berupa *full refurbishment* yang membutuhkan pesawat di-ground-kan selama 1–3 bulan [Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)].

Urgensi penelitian ini muncul karena meski RCM telah terbukti memberikan peningkatan signifikan pada keselamatan dan ketersediaan di industri *asset-heavy*, implementasi pada sistem kompleks seperti hierarki A/B/C/D MRO masih menghadapi gap riset yang substansial. Zhou (2024, DOI: 10.2139/ssrn.6387479) secara eksplisit menyebutkan bahwa "RCM modelling and implementation can be challenging, particularly in applying to the operations of complex systems such as the hierarchical A/B/C/D MRO policy used in the aviation sector." Dalam karya tersebut, Zhou memperkenalkan sebuah *MRO policy framework* yang mengintegrasikan siklus D-check *fully refurbished* secara periodik dengan *partial refurbishments* pada fase *mature-run*, yang merupakan kontribusi orisinal yang menjembatani kesenjangan antara model RCM teoritis dan praktik operasional fleet management.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual RCM Hirarkis

Zhou (2024) membangun model ketersediaan sebagai fungsi dari *cumulative flight cycles* (CFC) dan *cumulative flight hours* (CFH), dengan asumsi bahwa tingkat kegagalan *i* untuk komponen kritis pesawat mengikuti distribusi *Weibull non-homogeneous Poisson process* (NHPP). Fungsi reliabilitas instantaneous direpresentasikan sebagai:

$$R_i(t) = \exp\left(-\int_0^t \lambda_i(u)\, du\right) = \exp\left(-\left(\frac{t}{\eta_i}\right)^{\beta_i}\right)$$

di mana $\eta_i$ adalah *characteristic life* komponen dan $\beta_i > 1$ mengindikasikan fase *wear-out*. Laju kegagalan NHPP untuk komponen *i* adalah:

$$\lambda_i(t) = \frac{\beta_i}{\eta_i} \left(\frac{t}{\eta_i}\right)^{\beta_i - 1}$$

### 2.2 Model Ketersediaan Hirarkis A/B/C/D

Ketersediaan armada (*fleet availability*) didefinisikan sebagai rasio *mean up-time* terhadap total waktu dalam satu siklus pemeliharaan:

$$A = \frac{\text{MTTF (Mean Time To Failure)}}{\text{MTTF} + \text{MTTR (Mean Time To Repair)}}$$

Untuk sistem hirarkis dengan $N$ tingkat check ($N = 4$ untuk A/B/C/D), Zhou (2024) memperkenalkan *composite availability function*:

$$A_{fleet} = \prod_{k=1}^{N} \left[1 - \frac{T_{M,k}}{\sum_{k=1}^{N} T_{M,k} + T_O}\right]$$

di mana $T_{M,k}$ adalah waktu rata-rata downtime untuk check tingkat *k*, dan $T_O$ adalah *operating time* antar-check tingkat *k*. Untuk struktur A/B/C/D, interval check mengikuti relasi:

$$T_{I,C} = n_C \cdot T_{I,B}, \quad T_{I,D} = n_D \cdot T_{I,C}$$

dengan $n_C, n_D \in \mathbb{Z}^+$ merupakan rasio interval.

### 2.3 Fungsi Biaya Siklus Hidup (LCC)

*Life-cycle cost* untuk satu pesawat selama horizon perencanaan $T$ adalah:

$$\text{LCC} = \sum_{k \in \{A,B,C,D\}} \sum_{j=1}^{N_k} \left(C_{k,j}^{direct} + C_{k,j}^{indirect}\right) + C_{failure} \cdot \mathbb{E}[N_f(T)]$$

di mana $N_k$ adalah jumlah check tingkat *k*, $C_{k,j}^{direct}$ biaya langsung (tenaga kerja, suku cadang), $C_{k,j}^{indirect}$ biaya *AOG* (*Aircraft on Ground*) dan *opportunity cost*, serta $\mathbb{E}[N_f(T)]$ adalah ekspektasi jumlah kegagalan tak terjadwal.

### 2.4 Optimisasi Multi-Obyektif

Zhou (2024) membuktikan keberadaan nilai optimal untuk model ketersediaan dengan formulasi:

$$\max_{T_{I,k}, \tau_p} \quad A_{fleet}(T_{I,k}, \tau_p)$$

$$\text{subject to:} \quad \text{LCC} \leq L_{budget}$$

$$\sum_{k} T_{M,k} + T_O = T_{cycle}, \quad T_{M,k} > 0, \quad \tau_p \in [0, T_{I,D}/2]$$

di mana $\tau_p$ adalah waktu *partial refurbishment* yang disisipkan dalam fase *mature-run*. Eksistensi optimal dibuktikan melalui kondisi first-order:

$$\frac{\partial A_{fleet}}{\partial T_{I,k^*}} = 0 \quad \text{dan} \quad \frac{\partial^2 A_{fleet}}{\partial T_{I,k^*}^2} < 0$$

yang menjamin titik stasioner bersifat *global maximum* pada domain fisibel [Hang Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)].

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Prosedur RCM Hirarkis

Implementasi kebijakan MRO hirarkis berbasis RCM mengikuti SOP 7-tahap yang diturunkan dari standar MSG-3 (Maintenance Steering Group) dan diadaptasi dengan framework Zhou (2024):

```
[Tahap 1] Identifikasi Sistem & Subsistem Kritis Pesawat
    ↓ (FTA, FMEA)
[Tahap 2] Karakterisasi Profil Degradasi (NHPP/Weibull fitting)
    ↓ (parameter: β, η)
[Tahap 3] Penentuan Interval Baseline A/B/C/D Check
    ↓ (regulator: EASA Part-M, FAA Part 121)
[Tahap 4] Penjadwalan Partial Refurbishment (τ_p) pada Mature-Run
    ↓ (optimisasi A_fleet)
[Tahap 5] Penjadwalan D-Check Fully Refurbished
    ↓ (alignment dengan life-limit parts)
[Tahap 6] Validasi Simulasi Monte Carlo
    ↓ (n ≥ 10,000 iterasi)
[Tahap 7] Implementasi & Continuous Monitoring via CMMS/EAM
```

### 3.2 Prosedur Detail Per Tahapan

**Tahap 1 — Identifikasi Kritis:** Menggunakan *Failure Mode and Effects Analysis* (FMEA) dengan skor RPN (Risk Priority Number):

$$\text{RPN}_i = S_i \times O_i \times D_i$$

di mana $S_i$ (severity), $O_i$ (occurrence), $D_i$ (detectability) dinilai skala 1–10. Komponen dengan RPN > 125 masuk kategori *critical items* yang wajib纳入 kerangka RCM.

**Tahap 2 — Parameterisasi Degradasi:** Estimasi parameter Weibull dilakukan via *Maximum Likelihood Estimation* (MLE):

$$\hat{\beta}, \hat{\eta} = \arg\max \left[ \sum_{i=1}^{n} \ln f(t_i; \beta, \eta) \right]$$

dengan fungsi densitas $f(t; \beta, \eta) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}\exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$.

**Tahap 3–5 — Penjadwalan Optimal:** Interval check dasar mengikuti rekomendasi OEM; namun framework Zhou (2024) memungkinkan *trade-off* antara frekuensi C-check (high-cost, high-invasiveness) dengan *partial refurbishment* pada fase mature-run. Hal ini dimungkinkan karena selama mature-run, sistem telah melewati *infant mortality* dan beroperasi pada *useful life* dengan laju kegagalan rendah — sehingga intervensi dapat diminimalisasi tanpa degradasi keselamatan.

**Tahap 6 — Simulasi Monte Carlo:** Validasi menggunakan simulator yang membangkitkan skenario kegagalan berdasarkan distribusi yang telah diparameterisasi, dengan metrik konvergensi *Coefficient of Variation* < 5%.

**Tahap 7 — Implementasi:** Integrasi dengan *Computerized Maintenance Management System* (CMMS) atau *Enterprise Asset Management* (EAM) seperti SAP PM, AMOS, atau TRAX untuk *closed-loop feedback*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Operasional

Pertimbangkan satu maskapai regional dengan armada 50 unit Airbus A320, beroperasi rata-rata 8 jam/hari, 300 hari/tahun. Parameter industri:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Flight cycle/hari ($f_c$) | 4 | siklus |
| Flight hours/hari ($f_h$) | 8 | jam |
| Interval A-check ($T_{I,A}$) | 500 | flight hours |
| Interval C-check ($T_{I,C}$) | 20 | bulan |
| Interval D-check ($T_{I,D}$) | 8 | tahun |
| Durasi A-check ($T_{M,A}$) | 24 | jam |
| Durasi C-check ($T_{M,C}$) | 720 | jam (30 hari) |
| Durasi D-check ($T_{M,D}$) | 2,160 | jam (90 hari) |
| Biaya A-check ($C_A$) | 15,000 | USD |
| Biaya C-check ($C_C$) | 800,000 | USD |
| Biaya D-check ($C_D$) | 4,500,000 | USD |
| Biaya AOG/hari ($C_{AOG}$) | 45,000 | USD/hari |

Parameter reliabilitas komponen kritis (misalnya, *high-pressure turbine*): $\beta = 2.5$, $\eta = 12{,}000$ jam.

### 4.2 Perhitungan Ketersediaan Baseline (Tanpa Optimisasi)

**Step 1:** Total downtime per siklus (satu periode antar D-check = 8 tahun):

$$T_O^{8yr} = 8 \times 365 \times 8 = 23{,}360 \text{ flight hours operasional}$$

**Step 2:** Jumlah A-check dalam 8 tahun:

$$N_A = \left\lfloor \frac{T_O^{8yr}}{T_{I,A}} \right\rfloor = \left\lfloor \frac{23{,}360}{500} \right\rfloor = 46 \text{ checks}$$

**Step 3:** Jumlah C-check dalam 8 tahun:

$$N_C = \frac{8 \text{ tahun}}{20/12 \text{ tahun}} = 4.8 \Rightarrow 5 \text{ checks}$$

**Step 4:** Total downtime periodic maintenance:

$$T_{M}^{periodic} = 46 \times 24 + 5 \times 720 + 1 \times 2{,}160 = 1{,}104 + 3{,}600 + 2{,}160 = 6{,}864 \text{ jam}$$

**Step 5:** Ekspektasi kegagalan tak terjadwal (NHPP dengan $\beta=2.5$, $\eta=12{,}000$):

$$\mathbb{E}[N_f] = \left(\frac{T_O^{8yr}}{\eta}\right)^{\beta} = \left(\frac{23{,}360}{12{,}000}\right)^{2.5} = (1.947)^{2.5} \approx 5.31$$

Dengan as