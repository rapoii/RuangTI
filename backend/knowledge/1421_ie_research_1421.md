# 1421 — Blockchain sebagai Enabler Pemetaan Rantai Pasok untuk Rantai Pasok Berkelanjutan: Integrasi Digital, Transparansi, dan Keberlanjutan Manufaktur Era Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Blockchain technologies as enablers of supply chain mapping for sustainable supply chains
**Jurnal & Sitasi Utama:** Sharfuddin Ahmed Khan, Muhammad Shujaat Mubarik, Simonov Kusi‐Sarpong (2022). *Business Strategy and the Environment*. DOI: [https://doi.org/10.1002/bse.3029](https://doi.org/10.1002/bse.3029)
**Sitasi Pendukung:** Lingdi Liu, Wenyan Song, Yang Liu (2023). *Computers & Industrial Engineering*. DOI: [https://doi.org/10.1016/j.cie.2023.109113](https://doi.org/10.1016/j.cie.2023.109113)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok manufaktur kontemporer, khususnya pada sektor Electrical and Electronics (E&E) global, menghadapi tantangan struktural yang semakin kompleks berupa *limited visibility*, rendahnya *transparansi*, lemahnya *akuntabilitas*, serta fragmentasi integrasi lintas aktor — permasalahan yang menurut Khan, Mubarik, dan Kusi‐Sarpong (2022, DOI: [10.1002/bse.3029](https://doi.org/10.1002/bse.3029)) telah menghambat pencapaian *sustainable supply chain* yang sesungguhnya. Dalam konteks empiris Malaysia — hub manufaktur E&E terbesar kedua di ASEAN dengan kontribusi sekitar RM495 miliar terhadap PDB manufaktur nasional dan lebih dari 2.300 perusahaan tersertifikasi — visibilitas material kritis seperti *rare earth elements*, *conflict minerals* (timah, tantalum, tungsten, emas/3TG), serta komponen semikonduktor terbukti menjadi titik lemah strategis yang berdampak pada kepatuhan *EU Conflict Minerals Regulation*, *UK Modern Slavery Act*, dan *Section 1502 Dodd-Frank Act* AS. Secara operasional, biaya yang muncul akibat *lack of traceability* mencakup rata-rata 14–18% premi biaya audit sosial, 6–9% kerugian akibat *counterfeit parts* (berdasarkan laporan IPC — Association Connecting Electronics Industries), serta rerata *recall cost* 4–6× lipat nilai komponen yang ditarik. Mendesaknya kebutuhan akan transformasi digital inilah yang kemudian menempatkan *blockchain technology* (BT) sebagai *enabler* fundamental bagi *supply chain mapping* (SCMapp), *supply chain integration* (SCI), dan *supply chain sustainability* (SCS). Studi Khan et al. (2022) memvalidasi bahwa adopsi BT secara langsung maupun tidak langsung (melalui SCMapp dan SCI) meningkatkan kinerja keberlanjutan, sementara Liu, Song, dan Liu (2023, DOI: [10.1016/j.cie.2023.109113](https://doi.org/10.1016/j.cie.2023.109113)) memperkuat fondasi tersebut melalui kerangka CAB2IN (*Cloud–AI–Big Data–Blockchain–IoT*) yang men-*embed* BT dalam logika *circular economy* (CE) — mengintegrasikan fase *design, manufacturing, delivering, using*, dan *end‐of‐life* ke dalam satu arsitektur digital terpadu. Urgensi ini diperkuat oleh disrupsi pandemi COVID‐19 yang mencatatkan rerata *lead time disruption* 8–12 minggu pada rantai pasok E&E Malaysia, serta *consumer awareness index* terhadap ESG (*Environmental, Social, Governance*) yang naik 67% periode 2019–2022.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual dan Model Persamaan Struktural

Khan et al. (2022) mengoperasionalisasikan lima konstruk laten — *Blockchain Technology* (BT, eksogen), *Supply Chain Mapping* (SCMapp, mediasi), *Supply Chain Integration* (SCI, mediasi), *Supply Chain Sustainability* (SCS, endogen), dengan *Firm Size* dan *Firm Age* sebagai *control variables* — menggunakan *Partial Least Squares–Structural Equation Modelling* (PLS‐SEM). Model pengukuran (*measurement model*) mendefinisikan setiap indikator sebagai kombinasi linier dari konstruknya:

$$x_{ij} = \lambda_{ij}\xi_j + \epsilon_{ij}$$

dengan $\xi_j$ adalah variabel laten ke‐$j$, $\lambda_{ij}$ adalah *loading factor* indikator ke‑$i$, dan $\epsilon_{ij}$ adalah *error term* (i.i.d. $N(0, \sigma^2)$). Model strukturalnya dinyatakan sebagai:

$$\eta = \mathbf{B}\eta + \mathbf{\Gamma}\xi + \zeta$$

dengan $\eta$ vektor variabel laten endogen, $\mathbf{B}$ matriks koefisien *path* antar endogen, $\mathbf{\Gamma}$ matriks pengaruh eksogen terhadap endogen, dan $\zeta$ vektor *residual*.

### 2.2 Estimasi Parameter dengan Algoritma PLS

Koefisien *path* diestimasi melalui prosedur *ordinary least squares* bertingkat:

$$\hat{\mathbf{w}} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{Y}$$

dengan $\mathbf{X}$ adalah matriks indikator blok eksogen dan $\mathbf{Y}$ blok endogen. Estimasi *score* konstruk dilakukan melalui *outer approximation*:

$$\hat{\xi}_j = \sum_{i=1}^{p_j} w_{ij}x_{ij}$$

dengan $w_{ij}$ adalah *outer weight* hasil iterasi *conjugate gradient*.

### 2.3 Uji Reliabilitas dan Validitas

*Composite Reliability* (CR) dan *Average Variance Extracted* (AVE) dihitung sebagai berikut:

$$\mathrm{CR}_j = \frac{\left(\sum_{i=1}^{p_j}\lambda_{ij}\right)^2}{\left(\sum_{i=1}^{p_j}\lambda_{ij}\right)^2 + \sum_{i=1}^{p_j}\mathrm{Var}(\epsilon_{ij})}$$

$$\mathrm{AVE}_j = \frac{\sum_{i=1}^{p_j}\lambda_{ij}^2}{\sum_{i=1}^{p_j}\lambda_{ij}^2 + \sum_{i=1}^{p_j}\mathrm{Var}(\epsilon_{ij})}$$

dengan阈值 (ambang batas): $\mathrm{CR} \geq 0{,}70$ dan $\mathrm{AVE} \geq 0{,}50$. Validitas diskriminan dievaluasi melalui rasio *Heterotrait–Monotrait* (HTMT):

$$\mathrm{HTMT}_{jk} = \frac{\overline{\mathrm{cor}}(x_{ij}, x_{ik})}{\sqrt{\overline{\mathrm{cor}}(x_{ij}, x_{ij})\cdot \overline{\mathrm{cor}}(x_{ik}, x_{ik})}}$$

dengan kriteria $\mathrm{HTMT} < 0{,}90$.

### 2.4 Predictive Relevance dan Effect Size

*Stone–Geisser* $Q^2$ dan *Cohen's* $f^2$:

$$Q^2 = 1 - \frac{\sum_{i}(y_{i} - \hat{y}_{i})^2}{\sum_{i}(y_{i} - \bar{y})^2}$$

$$f^2 = \frac{R^2_{\text{included}} - R^2_{\text{excluded}}}{1 - R^2_{\text{included}}}$$

dengan klasifikasi $f^2 \in \{0{,}02; 0{,}15; 0{,}35\}$ masing‐masing untuk efek *small, medium, large*.

### 2.5 Model Jaringan Blockchain dan Throughput

Efisiensi jaringan blockchain untuk pemetaan rantai pasok dimodelkan melalui *throughput* transaksi:

$$\mathrm{TPS} = \frac{\Delta_{\text{block}}}{\tau_{\text{block}} \cdot t_{\text{tx}}}$$

dengan $\mathrm{TPS}$ = transaksi per detik, $\Delta_{\text{block}}$ ukuran blok (MB), $\tau_{\text{block}}$ *block time* (s), $t_{\text{tx}}$ ukuran transaksi rata‐rata (KB). Untuk konsensus *Practical Byzantine Fault Tolerance* (PBFT) pada *permissioned blockchain*:

$$\mathrm{TPS}_{\text{PBFT}} \approx \frac{n(n-1)}{3t^2 + 2t + 1}$$

dengan $n$ jumlah node validator dan $t = \lfloor (n-1)/3 \rfloor$ toleransi *Byzantine fault*.

### 2.6 Indeks Keberlanjutan Rantai Pasok

*Composite Sustainability Index* (CSI) agregasi tiga pilar ESG mengikuti bobot MACBETH (*Measuring Attractiveness by a Categorical Based Evaluation Technique*):

$$\mathrm{CSI} = \frac{1}{3}\left(w_E \cdot S_E + w_S \cdot S_S + w_G \cdot S_G\right)$$

dengan $w_E + w_S + w_G = 1$ dan $S_k \in [0, 100]$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Implementasi Blockchain pada Pemetaan Rantai Pasok E&E

Standar prosedur diadaptasi dari Khan et al. (2022) dan Liu et al. (2023) untuk pabrik E&E Malaysia:

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 1: PEMETAAN AKTOR & IDENTIFIKASI MATERIAL KRITIS         │
│  • Identifikasi Tier-1 hingga Tier-N supplier                   │
│  • Klasifikasi material 3TG, REEs, dan komponen semikonduktor  │
│  • Penetapan KYC/KYS (Know Your Supplier) berbasis ISO 20400   │
├─────────────────────────────────────────────────────────────────┤
│  FASE 2: ARSITEKTUR DIGITAL TWIN & IOT INSTRUMENTATION          │
│  • Deploy sensor IoT pada line produksi (CAB2IN framework)      │
│  • Integrasi AI untuk predictive lead-time & anomaly detection  │
│  • Big Data lake untuk historis ≥ 5 tahun                      │
├─────────────────────────────────────────────────────────────────┤
│  FASE 3: DEPLOY BLOCKCHAIN CONSORTIUM (Hyperledger Fabric)      │
│  • Saluran private (permissioned) untuk anggota konsorsium       │
│  • Smart contract (Chaincode) untuk verifikasi provenance       │
│  • Mekanisme consensus PBFT dengan n=10 validator              │
├─────────────────────────────────────────────────────────────────┤
│  FASE 4: INTEGRASI & ORKESTRASI END-TO-END                      │
│  • API gateway dengan ERP (SAP S/4HANA) & MES                  │
│  • Dashboard ESG real-time untuk stakeholder                    │
│  • Pelaporan otomatis ke RMI (Responsible Minerals Initiative)  │
├─────────────────────────────────────────────────────────────────┤
│  FASE 5: AUDIT, VALIDASI & CONTINUOUS IMPROVEMENT               │
│  • PLS-SEM berkala untuk validasi dampak terhadap CSI           │
│  • Sertifikasi ISO 14064-1 (carbon) & ISO 26000 (social)        │
│  • Re-calibration setiap 12 bulan                               │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Diagram Arsitektur CAB2IN Framework

Arsitektur integratif Liu et al. (2023) merepresentasikan BT sebagai *trust layer* yang mengikat lima teknologi digital:

```
        ┌──────────── CLOUD SERVICES (data lake, scalable storage) ────────────┐
        │                                                                      │
   ┌────┴────┐    ┌──────────┐    ┌──────────────┐    ┌──────────┐    ┌────────┴┐
   │   AI    │◄──►│ BIG DATA │◄──►│  BLOCKCHAIN  │◄──►│   IOT    │◄──►│  ERP/MES │
   │(predict)│    │ANALYTICS │    │  (provenance)│    │(sensing) │    │(orchestr)│
   └────┬────┘    └──────────┘    └──────────────┘    └──────────┘    └─────┬────┘
        │              │                  │                  │              │
        └──────────────┴──────────────────┴──────────────────┴──────────────┘
                                          │
                          ┌───────────────▼────────────────┐
                          │  SUSTAINABLE SUPPLY CHAIN       │
                          │  (D-Mfg-Dlv-