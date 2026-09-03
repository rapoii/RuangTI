# 1445 — Sinergi Energi Terbarukan dalam Kerangka Ekonomi Sirkular: Studi Bibliometrik, Analisis Life Cycle Assessment, dan Rekayasa Sistem Industri Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Eksplorasi Sinergi Energi Terbarukan dalam Kerangka Ekonomi Sirkular: Pendekatan Bibliometrik, Integrasi Life Cycle Assessment (LCA), dan Tantangan Digitalisasi Sistem Industri Berkelanjutan
**Jurnal & Sitasi Utama:** Kristia Kristia, Mohammad Fazle Rabbi (2023). *Sustainability*, Vol. 15, Issue 17, Article 13165. DOI: [https://doi.org/10.3390/su151713165](https://doi.org/10.3390/su151713165)
**Sitasi Pendukung:** Sara Toniolo, Giada Pierli, Laura Bravi (2025). *The International Journal of Life Cycle Assessment*. DOI: [https://doi.org/10.1007/s11367-025-02436-9](https://doi.org/10.1007/s11367-025-02436-9)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma industri global dari model linear *take-make-dispose* menuju **Circular Economy (CE)** yang terintegrasi dengan **Renewable Energy Systems (RES)** menjadi salah satu tantangan strategis terbesar abad ke-21. Kristia dan Rabbi (2023) dalam *Sustainability* secara eksplisit menyatakan bahwa dalam setengah abad terakhir, para ilmuwan dari berbagai disiplin—termasuk teknik industri, ekonomi, dan manajemen—gencar meneliti transisi menuju energi terbarukan, terutama dalam konteks ekonomi sirkular. Studi bibliometrik mereka menganalisis **294 artikel peer-reviewed** menggunakan paket *R Studio-Biblioshiny* versi 4.1.2, sebuah *open-source scientometric tool* yang memungkinkan visualisasi jaringan ko-sitasi, ko-occurrence kata kunci, dan pemetaan klaster riset (Kristia & Rabbi, 2023, DOI: [10.3390/su151713165](https://doi.org/10.3390/su151713165)).

Urgensi operasional masalah ini tampak dari data empiris: sektor industri global menyumbang sekitar **37%** dari konsumsi energi final dunia dan **24%** dari emisi CO₂ langsung menurut *International Energy Agency (IEA)*, sehingga integrasi RES–CE menjadi imperatif non-avoidable bagi *manufacturing engineer* dan *decision-maker* rantai pasok. Kristia dan Rabbi (2023) mengidentifikasi empat tantangan struktural yang menghambat adopsi: (i) **kendala finansial** berupa *high initial investment* (capex) yang membutuhkan *Levelized Cost of Energy* (LCOE) kompetitif; (ii) **defisiensi kerangka regulasi** dan inkonsistensi kebijakan *feed-in tariff* antar-yurisdiksi; (iii) **intermitensi sumber EBT** yang memengaruhi *grid stability* dan membutuhkan *storage capacity*; serta (iv) **kelangkaan material kritis** untuk komponen RES—seperti litium, kobalt, tanah jarang (*rare earth elements*)—yang justru bertentangan dengan prinsip close-loop CE.

Di sisi komplementer, Toniolo, Pierli, dan Bravi (2025) dalam *International Journal of Life Cycle Assessment* menyoroti bahwa **digitalisasi Life Cycle Assessment (LCA)** melalui integrasi *Digital Technologies* (DT)—seperti *Internet of Things* (IoT), *Big Data analytics*, *Machine Learning* (ML), dan *Blockchain Distributed Ledger Technology* (DLT)—menghadirkan *trade-off* paradigmatis: di satu sisi, DT memungkinkan *real-time Life Cycle Inventory* (LCI) dengan granularity lebih tinggi; di sisi lain, muncul pertanyaan metodologis tentang validitas *system boundary*, *allocation procedures*, dan *uncertainty propagation* dalam *circular loops* (Toniolo et al., 2025, DOI: [10.1007/s11367-025-02436-9](https://doi.org/10.1007/s11367-025-02436-9)). Kedua paper ini—yang diterbitkan dalam jurnal Q1 *Sustainability* dan Q1 *Int.J.LCA*—menjadi fondasi kuat untuk memformulasi strategi rekayasa industri yang *evidence-based*.

Konteks industri riil yang dimaksud mencakup: sektor fotovoltaik (*photovoltaic manufacturing*), industri *battery energy storage* (BES), *wind turbine manufacturing* (komponen *nacelle* dan *blade*), serta *green hydrogen* (elektroliser). Di Indonesia, dengan *renewable energy mix* masih di bawah **14%** per 2024 dan target **23%** pada 2025 (Rencana Umum Energi Nasional/RUEN), aplikasi *cross-sectoral* modul ini menjadi sangat strategis untuk manufaktur, logistik, dan *Industrial Park Estate*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Indikator Bibliometrik Lotka–Bradford

Kristia dan Rabbi (2023) membangun analisis bibliometrik mengikuti **Lotka's Law** untuk distribusi produktivitas penulis dan **Bradford's Law** untuk *core sources*:

$$n(f) = \frac{C}{f^{\alpha}} \quad \text{(Lotka, 1926)}$$

di mana $n(f)$ adalah jumlah penulis yang mempublikasikan $f$ artikel, $C$ adalah konstanta empiris (≈ 0.6079 untuk sains), dan $\alpha \approx 2$ untuk pola invers-quadratic. Formulasi Bradford untuk *zoning* jurnal:

$$P(r) = R_0 \ln(r) \quad \text{atau} \quad \sum_{i=1}^{k} A_i = A_0 (1 + \beta_1 + \beta_1 \beta_2 + \ldots + \beta_1 \beta_2 \cdots \beta_k)$$

dengan $A_i$ adalah jumlah artikel di zona ke-$i$, dan $\beta_i$ adalah *Bradford multiplier* (umumnya ≈ 2 untuk zona berurutan).

### 2.2 Indikator Sirkularitas Material (MCI)

Formulasi *Material Circularity Indicator* (MCI) yang dikembangkan Ellen MacArthur Foundation dan digunakan dalam studi LCA sirkular:

$$\text{MCI} = 1 - \frac{F_{\text{W}}+F_{\text{M}}}{2} + \frac{F_{\text{R}}}{2} \cdot \left(\frac{V_{\text{used}}}{V_{\text{input}}}\right)$$

di mana $F_W$ adalah *waste fraction*, $F_M$ adalah *recycling/reuse loss fraction*, $F_R$ adalah *recycled fraction* dari *material input*, $V_{\text{used}}$ adalah *average lifetime utility*, dan $V_{\text{input}}$ adalah *product lifetime*.

### 2.3 Levelized Cost of Energy (LCOE) sebagai Pengambil Keputusan

LCOE adalah *decision metric* kritis dalam integrasi RES–CE:

$$\text{LCOE} = \frac{\sum_{t=0}^{T} \frac{I_t + O_t + F_t}{(1+r)^t}}{\sum_{t=0}^{T} \frac{E_t}{(1+r)^t}}$$

dengan $I_t$ = investasi tahun $t$, $O_t$ = O&M, $F_t$ = biaya bahan bakar (nol untuk RES), $E_t$ = energi yang dihasilkan, $r$ = *discount rate*, $T$ = *lifetime* proyek. Untuk PLTS (*photovoltaic*), LCOE modern turun ke **USD 30–50/MWh**, mendekati *grid parity*.

### 2.4 Model Pertumbuhan Publikasi Eksponensial

Kristia & Rabbi (2023) memodelkan *annual scientific production* menggunakan:

$$P(t) = P_0 \cdot e^{g(t-t_0)} \quad \Rightarrow \quad g = \frac{\ln(P(t)) - \ln(P(t_0))}{t - t_0}$$

dengan *growth rate* $g$ diestimasi melalui *non-linear least squares* terhadap dataset Scopus/WoS.

### 2.5 Formulasi LCA: Impact Assessment dengan Characterization Factors

Untuk *ReCiPe* atau *EF 3.1* midpoint:

$$\text{Impact}_{c} = \sum_{e \in E} Q(e) \cdot \text{CF}_c(e)$$

di mana $\text{Impact}_c$ adalah *characterized score* untuk kategori dampak $c$ (misal *climate change* dalam kg CO₂-eq), $Q(e)$ adalah emisi *elementary flow* $e$, dan $\text{CF}_c(e)$ adalah *characterization factor*. Toniolo et al. (2025) menekankan bahwa digitalisasi LCA membutuhkan *probabilistic sampling* terhadap $Q(e)$:

$$Q(e) \sim \mathcal{N}(\mu_e, \sigma_e^2)$$

untuk propagasi *uncertainty* Monte Carlo (10.000 iterasi minimum sesuai ISO 14044).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistematik Integrasi RES–CE Berbasis Bibliometrik

Berdasarkan Kristia & Rabbi (2023), berikut diagram alir SOP rekayasa industri:

```
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 1: SCOPING & DATA EXTRACTION                          │
│  • Query Scopus/WoS: TS=("circular economy" AND "renewable")│
│  • Filter: 2010–2023, English, peer-reviewed                │
│  • n = 294 artikel (Kristia & Rabbi, 2023)                  │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 2: BIBLIOMETRIC ANALYSIS (Biblioshiny v4.1.2)         │
│  • Annual Scientific Production → trend P(t)               │
│  • Co-citation network (Coupling Map)                       │
│  • Keyword co-occurrence (VOSviewer validation)             │
│  • Thematic Map & Three-Field Plot (Sankey)                 │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 3: CONTENT ANALYSIS (SLR)                             │
│  • PRISMA 2020 flow diagram                                 │
│  • Coding scheme: 5 tema (Kristia & Rabbi: teknologi,       │
│    kebijakan, finansial, intermitensi, material)            │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 4: LCA INTEGRATION (Toniolo et al., 2025)             │
│  • Goal & Scope Definition (ISO 14040)                      │
│  • LCI: Digital sensors (IoT) → real-time Q(e)             │
│  • LCIA: ReCiPe 2016 / EF 3.1 midpoint                     │
│  • Interpretation: Monte Carlo, sensitivity analysis        │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 5: DECISION SUPPORT (Engineering Output)              │
│  • LCOE ranking untuk portfolio RES                         │
│  • MCI assessment untuk material flow                       │
│  • Robustness check (Toniolo et al. problematisation)      │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi Industri Manufaktur (ISO 14040/14044 + ISO 59000-series)

**Langkah 1: Goal & Scope Definition.** Definisikan *functional unit* (FU)—misal "1 kWh listrik pada grid Jawa-Madura-Bali"—dan *system boundary* (*cradle-to-gate* untuk modul PV, *gate-to-gate* untuk fabrikasi).

**Langkah 2: Life Cycle Inventory (LCI).** Toniolo et al. (2025) merekomendasikan integrasi **IoT sensor** (LoRaWAN/NB-IoT) untuk akuisisi $Q(e)$ secara *real-time*. Validasi melalui *mass balance*:

$$\sum_{i \in \text{input}} m_i = \sum_{j \in \text{output}} m_j + \sum_{k \in \text{stock}} \Delta m_k$$

**Langkah 3: Life Cycle Impact Assessment (LCIA).** Hitung kategori menggunakan ReCiPe 2016:

$$\text{GWP}_{100} = \sum_{e} Q(e) \cdot \text{GWP}_{100}(e) \quad [\text{kg CO}_2\text{-eq}]$$

**Langkah 4: Interpretation & Uncertainty Analysis.** Jalankan Monte Carlo $N=10.000$, identifikasi *confidence interval* 95%.

### 3.3 SOP Penilaian Indikator Sirkularitas (Ellen MacArthur)

```
INPUT DATA → Material Flow Analysis (MFA) 
            ↓
          Hitung F_w, F_m, F_r (fraction)
            ↓
          Hitung V_used / V_input (utility ratio)
            ↓
          Hitung MCI (range 0–1; 1 = fully circular)
            ↓
          Validasi dengan sensitivity analysis
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus A: Analisis Bibliometrik Portofolio PV–BES Indonesia

**Input Parameter:**
- Sampel artikel bertopik "photovoltaic + circular economy" periode 2018–2023 dari Scopus: **$n_{\text{total}} = 142$** artikel (subset dari 294 artikel Kristia & Rabbi, 2023).
- Tahun 2018: $P(2018) = 9$ artikel; Tahun 2023: $P(2023) = 38$ artikel.
- Window waktu: $\Delta t = 5$ tahun.

**Perhitungan *growth rate* eksponensial:**

$$g = \frac{\ln(38) - \ln(9)}{2023 - 2018} = \frac{3.638 - 2.197}{5} = \frac{1