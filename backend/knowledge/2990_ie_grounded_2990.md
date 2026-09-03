# 2990 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Perawatan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu ekosistem *asset-heavy* paling kompleks di dunia, dengan satu unit pesawat narrow-body bernilai kapital USD 50–120 juta dan armada global yang menurut IATA mencapai lebih dari 27.000 unit pesawat aktif. Setiap hari, downtime satu unit pesawat wide-body dapat menimbulkan kerugian pendapatan langsung hingga USD 250.000–400.000 per hari. Oleh karena itu, ketersediaan armada (*fleet availability*) bukan sekadar metrik operasional, melainkan variabel strategis yang menentukan profitabilitas maskapai, kontrak *power-by-the-hour* (PBH), serta kepatuhan terhadap regulasi keselamatan penerbangan internasional (FAR Part 121, EASA Part-M, dan ICAO Annex 6).

Hang Zhou (2024) dalam studinya menjelaskan bahwa konsep *Reliability-Centered Maintenance* (RCM), yang awalnya dikembangkan oleh Stanley Nowlan dan Howard Heap pada tahun 1978 untuk industri penerbangan sipil AS, kini menjadi kerangka kerja universal untuk pengelolaan aset modal-intensif. Pendekatan RCM berupaya memodelkan degradasi non-linear dari kinerja siklus hidup aset — yang tidak dapat dijelaskan oleh distribusi kegagalan eksponensial sederhana — melalui analisis konsekuensi kegagalan (*failure mode and effects analysis*/FMEA) dan pemilihan tugas pemeliharaan yang optimal. Studi Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) secara khusus mengangkat kompleksitas kebijakan MRO hirarkis A/B/C/D yang digunakan oleh operator penerbangan dunia, mengintegrasikan siklus *D-check* penuh dengan refurbishment parsial selama fase *mature-run* operasi penerbangan.

Permasalahan mendasar yang diidentifikasi adalah *trade-off* klasik antara ketersediaan dan biaya: interval检修 yang terlalu pendek meningkatkan ketersediaan sesaat tetapi membebani biaya tenaga kerja MRO dan logistik komponen, sementara interval yang terlalu panjang berisiko *unscheduled removal* yang mahal dan berbahaya secara operasional. Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menunjukkan secara analitis bahwa untuk setiap konfigurasi kebijakan hirarkis A/B/C/D, terdapat nilai optimum interval检修 yang memaksimalkan ketersediaan jangka panjang armada, dengan eksistensi optimum dibuktikan melalui turunan pertama fungsi tujuan. Pendekatan ini relevan tidak hanya bagi operator penerbangan, tetapi juga industri kereta api, maritim, dan manufaktur dengan *capital equipment* bernilai tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi dan Keandalan Sistem

Pendekatan RCM yang diadopsi Zhou (2024) memodelkan keandalan komponen kritis dengan fungsi laju kegagalan *non-homogeneous* yang merefleksikan pola *bathtub curve* klasik penerbangan:

$$h(t) = \lambda_0 + \alpha \cdot t^{\beta}$$

dengan:
- $h(t)$ = laju kegagalan sesaat (*instantaneous hazard rate*) pada umur operasional $t$
- $\lambda_0$ = laju kegagalan awal (*infant mortality*)
- $\alpha, \beta$ = parameter degradasi *wear-out* dengan $\beta > 0$
- $t$ = waktu operasional terakumulasi (flight hours/cycles)

Fungsi keandalan dan distribusi kumulatif kegagalan masing-masing adalah:

$$R(t) = \exp\left(-\int_0^t h(\tau)\, d\tau\right) = \exp\left(-\lambda_0 t - \frac{\alpha}{\beta+1}\, t^{\beta+1}\right)$$

$$F(t) = 1 - R(t)$$

Untuk kasus khusus degradasi linier ($\beta = 0$) yang relevan pada *avionics line-replaceable units* (LRU), model ini reduksi menjadi distribusi Weibull dengan bentuk parametrik $R(t) = \exp(-\lambda t^k)$.

### 2.2 Fungsi Ketersediaan Siklus Pemeliharaan Hirarkis

Zhou (2024, [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) mendefinisikan ketersediaan sesaat (*instantaneous availability*) untuk satu siklus检修 A/B/C sebagai:

$$A(T_i) = \frac{T_{\text{op},i}}{T_{\text{op},i} + T_{\text{down},i}}$$

dengan $T_{\text{op},i}$ adalah durasi operasi antara dua检修 berturut-turut dari level $i \in \{A, B, C\}$ dan $T_{\text{down},i}$ adalah waktu检修 terjadwal (*scheduled downtime*) untuk level检修 tersebut. Untuk akuntabilitas *unscheduled maintenance*, digunakan formula ketersediaan inherent:

$$A_i = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

dengan MTBF = *Mean Time Between Failures* dan MTTR = *Mean Time To Repair*. Ketersediaan efektif (*achieved availability*) yang lebih relevan secara operasional mengintegrasikan delay logistik dan administratif:

$$A_a = \frac{\text{MTBM}}{\text{MTBM} + \text{MAD} + \text{MDT}}$$

dengan MTBM = *Mean Time Between Maintenance*, MAD = *Mean Administrative Delay*, MDT = *Mean Downtime*.

### 2.3 Optimasi Hirarkis A/B/C/D

Struktur hirarkis MRO penerbangan yang dianalisis Zhou (2024) beroperasi pada empat tingkat dengan rasio interval检修 secara geometris:

$$T_{i+1} = k_i \cdot T_i, \quad i \in \{A, B, C\}$ 

dengan $k_i \approx 4\text{-}12$ tergantung jenis pesawat dan program MSG-3 yang diadopsi. Untuk narrow-body seperti Boeing 737 Next Generation, rasio tipikal adalah $T_A \approx 600$ FH (*flight hours*), $T_B \approx 6\text{-}8$ bulan, $T_C \approx 20\text{-}24$ bulan, dan $T_D \approx 8\text{-}12$ tahun.

Fungsi tujuan optimasi ketersediaan armada total:

$$A_{\text{fleet}}(T_A, T_B, T_C, T_D) = \frac{1}{N} \sum_{j=1}^{N} \prod_{i \in \{A,B,C,D\}} A_{ij}(T_i)$$

dengan $N$ adalah ukuran armada. Kondisi optimal dibuktikan oleh Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) melalui Lemma optimum dalam paper: terdapat vektor interval检修 $T^* = (T_A^*, T_B^*, T_C^*, T_D^*)$ yang memenuhi:

$$\frac{\partial A_{\text{fleet}}}{\partial T_i} = 0 \quad \text{dan} \quad \frac{\partial^2 A_{\text{fleet}}}{\partial T_i^2} < 0$$

Konsekuensi ekonominya adalah fungsi biaya siklus hidup:

$$LCC = \sum_{i \in \{A,B,C,D\}} \frac{C_i \cdot n_i(T_i)}{T_i}$$

dengan $C_i$ adalah biaya检修 per level dan $n_i(T_i)$ adalah jumlah检修 level $i$ yang terjadi per unit waktu.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM mengikuti kerangka tujuh-tahap standar MSG-3 (*Maintenance Steering Group-3*) yang diadopsi oleh regulator FAA, EASA, dan CAAC:

**Tahap 1 — Identifikasi Sistem & Subsistem.** Inventarisasi seluruh *ATA Chapter* (Air Transport Association) dari 00 hingga 99 yang relevan dengan pesawat dan *powerplant*.

**Tahap 2 — Penetapan Batas Kritis Keselamatan.** Klasifikasi komponen ke dalam kategori *safety significant* (terbang aman tanpa fungsi ini) atau *mission critical*.

**Tahap 3 — Analisis Fungsi & Kegagalan.** Penerapan *Failure Modes, Effects and Criticality Analysis* (FMECA) untuk setiap *Line Replaceable Unit* (LRU).

**Tahap 4 — Penentuan Tugas Pemeliharaan.** Seleksi antara *hard time* (interval检修 tetap), *on-condition* (monitoring parameter), atau *condition monitoring* (predictive berbasis sensor IoT).

**Tahap 5 — Penjadwalan Interval检修 A/B/C/D.** Optimasi menggunakan algoritma yang divalidasi pada Zhou (2024, [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)):

```
INPUT: Data historis MTBF/MTTR per ATA Chapter
       Komponen biaya (C_A, C_B, C_C, C_D)
       Utilisasi pesawat (jam terbang/hari)
PROSES:
  FOR each kombinasi (T_A, T_B, T_C, T_D):
    Hitung A_fleet menggunakan persamaan di §2.3
    Hitung LCC menggunakan persamaan biaya
  END FOR
OUTPUT: T* = argmax A_fleet subject to LCC ≤ Budget
```

**Tahap 6 — Validasi Regulasi.** Penjaminan kepatuhan terhadap *Airworthiness Directives* (AD) dan *Service Bulletin* (SB) pabrikan.

**Tahap 7 — Implementasi & *Continuous Improvement*.** Pemantauan KPI: *Dispatch Reliability*, *Schedule Reliability*, *On-Time Performance*, dan *Maintenance Cost per Available Seat Mile* (CASM-M).

Diagram alir keputusan untuk pemilihan tipe检修:

```
                    ┌─────────────────────┐
                    │  Identifikasi LRU   │
                    │  Degradasi LRU      │
                    └──────────┬──────────┘
                               │
                  ┌────────────┴────────────┐
            Degrada          Degrada         Degrada
            Lambat           Moderat         Cepat
            (β < 0.5)        (0.5 ≤ β ≤ 2)   (β > 2)
                  │                │              │
            ┌─────▼─────┐    ┌─────▼─────┐  ┌─────▼─────┐
            │ On-Condition│    │ Hard-Time │  │  Replace  │
            │  A-Check   │    │ C-Check   │  │ D-Check   │
            │  (MSG-3)   │    │ (MSG-3)   │  │ (Heavy    │
            │            │    │           │  │  Overhaul)│
            └────────────┘    └───────────┘  └───────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik