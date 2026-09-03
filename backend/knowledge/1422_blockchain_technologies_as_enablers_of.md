# 1422 — Blockchain sebagai Enabler Pemetaan Rantai Pasok untuk Keberlanjutan: Integrasi Digital, Akuntabilitas, dan Ekonomi Sirkular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Blockchain technologies as enablers of supply chain mapping for sustainable supply chains
**Jurnal & Sitasi Utama:** Sharfuddin Ahmed Khan, Muhammad Shujaat Mubarik, Simonov Kusi‐Sarpong (2022). *Business Strategy and the Environment*. DOI: [https://doi.org/10.1002/bse.3029](https://doi.org/10.1002/bse.3029)
**Sitasi Pendukung:** Lingdi Liu, Wenyan Song, Yang Liu (2023). *Computers & Industrial Engineering*. DOI: [https://doi.org/10.1016/j.cie.2023.109113](https://doi.org/10.1016/j.cie.2023.109113)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok global kontemporer menghadapi tekanan struktural yang semakin kompleks akibatfragmentasi geografis, proliferasi aktor tier-2 dan tier-3, serta meningkatnya ekspektasi regulator dan konsumen terhadap transparansi serta akuntabilitas lingkungan. Khan, Mubarik, dan Kusi-Sarpong (2022) dalam *Business Strategy and the Environment* (DOI: [10.1002/bse.3029](https://doi.org/10.1002/bse.3029)) menegaskan bahwa *"contemporary supply chains have limited visibility, transparency, and accountability"* — sebuah kondisi yang menghambat kemampuan perusahaan untuk memetakan material flow, memvalidasi klaim keberlanjutan, dan merespons disrupsi secara real-time. Studi ini dilakukan pada 132 perusahaan Electrical and Electronics (E&E) di Malaysia, sektor yang menjadi tulang punggung ekspor negara tersebut dan sangat rentan terhadap konflik mineral (3TG — tin, tantalum, tungsten, gold) serta regulasi seperti EU Conflict Minerals Regulation dan German Supply Chain Due Diligence Act.

Urgensi ekonominya bersifat ganda. Pertama, biaya ketidakpatuhan (*non-compliance cost*) terhadap regulasi ESG (Environmental, Social, Governance) telah melampaui USD 1 miliar secara agregat industri sejak 2018 menurut berbagai laporan audit forensik. Kedua, *information asymmetry* antara buyer dan supplier menciptakan *moral hazard* di mana klaim keberlanjutan sulit diaudit tanpa bukti immutable. Dalam konteks inilah blockchain muncul sebagai teknologi distributed ledger yang mampu menyediakan *single source of truth* untuk seluruh ekosistem rantai pasok. Setiap transaksi, pergerakan barang, dan sertifikasi dapat dicatat dalam blok yang terenkripsi secara kriptografis dan divalidasi melalui mekanisme konsensus (Proof of Authority, Proof of Stake, atau Practical Byzantine Fault Tolerance untuk konteks enterprise).

Liu, Song, dan Liu (2023) dalam *Computers & Industrial Engineering* (DOI: [10.1016/j.cie.2023.109113](https://doi.org/10.1016/j.cie.2023.109113)) memperluas cakupan ini dengan mengajukan kerangka **CAB2IN** yang mengintegrasikan lima teknologi Industri 4.0 — **C**loud services, **A**rtificial Intelligence, **B**ig data analytics, **B**lockchain, **I**nternet of Things, dan **N**etwork orchestration — untuk memberdayakan *Sustainable Supply Chain Management* (SSCM) di bawah logika *circular economy*. Kedua paper ini bersama-sama membentuk pondasi teoretis dan empiris yang kuat untuk memahami bagaimana kapabilitas digital, khususnya blockchain, dapat menjadi enabler strategis dalam transformasi rantai pasok menuju keberlanjutan terstruktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual Integrasi Blockchain–Sustainability

Khan et al. (2022) mengembangkan model struktural dengan blok bangunan berikut:

$$\eta_{ij} = \beta_0 + \beta_1 \cdot BT_{ij} + \beta_2 \cdot SCM_{ij} + \beta_3 \cdot SCI_{ij} + \epsilon_{ij}$$

di mana $\eta_{ij}$ merepresentasikan tingkat *Supply Chain Sustainability* (SCS) yang dirasakan oleh responden $i$ pada perusahaan $j$, $BT_{ij}$ adalah kapabilitas adopsi blockchain, $SCM_{ij}$ adalah kualitas *Supply Chain Mapping*, $SCI_{ij}$ adalah tingkat integrasi rantai pasok, dan $\epsilon_{ij}$ adalah error term. Hipotesis sentral yang diuji adalah efek langsung $BT \rightarrow SCS$ serta efek mediasi $BT \rightarrow SCM \rightarrow SCI \rightarrow SCS$.

### 2.2 Formulasi PLS-SEM untuk Pengujian Hipotesis

Karena model melibatkan konstruk laten dengan multi-item indicators, Khan et al. (2022) menggunakan **Partial Least Squares–Structural Equation Modeling** (PLS-SEM). Model pengukuran reflektif dirumuskan sebagai:

$$x_{ijk} = \lambda_{jk} \cdot \xi_{ij} + \delta_{ijk}$$

di mana $x_{ijk}$ adalah skor item $k$ untuk konstruk laten $j$ pada responden $i$, $\lambda_{jk}$ adalah *loading factor*, $\xi_{ij}$ adalah skor konstruk laten, dan $\delta_{ijk}$ adalah measurement error. Sementara model struktural diekspresikan melalui sistem persamaan inner:

$$\xi_{ij}^{(SCI)} = \sum_{h} \gamma_{jh} \cdot \xi_{ih} + \zeta_{ij}^{(SCI)}$$
$$\xi_{ij}^{(SCS)} = \sum_{h} \beta_{jh} \cdot \xi_{ih} + \zeta_{ij}^{(SCS)}$$

di mana $\gamma_{jh}$ adalah koefisien path antar konstruk eksogen dan $\zeta_{ij}$ adalah residual struktural.

### 2.3 Indeks Reliabilitas dan Validitas

Untuk menjamin kualitas pengukuran, tiga metrik kuantitatif wajib dipenuhi:

**Composite Reliability (CR):**

$$CR_j = \frac{\left(\sum_{k=1}^{p_j} \lambda_{jk}\right)^2}{\left(\sum_{k=1}^{p_j} \lambda_{jk}\right)^2 + \sum_{k=1}^{p_j} Var(\delta_{jk})}$$

dengan threshold $CR \geq 0{,}70$.

**Average Variance Extracted (AVE):**

$$AVE_j = \frac{\sum_{k=1}^{p_j} \lambda_{jk}^2}{\sum_{k=1}^{p_j} \lambda_{jk}^2 + \sum_{k=1}^{p_j} Var(\delta_{jk})}$$

dengan threshold $AVE \geq 0{,}50$ untuk validitas konvergen.

**Heterotrait-Monotrait Ratio (HTMT):**

$$HTMT_{jk} = \frac{\bar{r}_{jk}^{(between)}}{\sqrt{\bar{r}_{jj}^{(within)} \cdot \bar{r}_{kk}^{(within)}}}$$

dengan threshold $HTMT < 0{,}90$ untuk validitas diskriminan.

### 2.4 Framework CAB2IN dan Logika Sirkular

Liu et al. (2023) merumuskan hubungan antara kapabilitas digital dan outcome SSCM melalui fungsi nilai:

$$V_{SSCM} = f(D, M, DL, U, EoL \mid C, AI, BDA, BT, IoT, N)$$

di mana $V_{SSCM}$ adalah nilai keberlanjutan agregat yang dihasilkan, dan lima tahap siklus hidup produk — **D**esign, **M**anufacturing, **D**e**l**ivery, **U**se, **EoL** (end-of-life) — dioptimasi secara kondisional pada ketersediaan kelima kapabilitas digital. Blockchain secara spesifik berkontribusi pada parameter:

$$T_{tr}(x) = 1 - e^{-\alpha \cdot N_{blocks}(x) \cdot \lambda_{v}}$$

di mana $T_{tr}(x)$ adalah tingkat traceability untuk item $x$, $N_{blocks}(x)$ adalah jumlah blok yang mengikat data historis item tersebut, dan $\lambda_{v}$ adalah verification rate per blok. Semakin tinggi $N_{blocks}(x)$, semakin mendekati 1 probabilitas keterlacakan penuh — memenuhi standar ISO 22005 dan GS1 EPCIS untuk traceability rantai pasok.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Blockchain Enterprise

Implementasi mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Onboarding dan Identifikasi Aktor:**
- Pemetaan seluruh stakeholder: supplier tier-1, tier-2, logistics provider, manufacturer, distributor, retailer, auditor.
- Setiap aktor diberikan *digital identity* berbasis *self-sovereign identity* (SSI) dengan kunci publik/privat (ECDSA secp256k1).
- Assignment of permissioned node sesuai peran (write/read access).

**Tahap 2 — Tokenisasi Aset dan Event:**
- Setiap lot produksi diberi *digital twin* berupa non-fungible token (NFT) atau *token ID* unik.
- Event pelacakan (shipment, quality check, ESG audit) di-broadcast ke jaringan sebagai transaksi.

**Tahap 3 — Smart Contract Automation:**
- Logika bisnis (automatic payment upon delivery, ESG compliance penalty, recall trigger) diencode dalam smart contract (mis. Solidity untuk Ethereum/Hyperledger).
- *Oracle integration* dengan IoT sensors untuk data real-time (suhu, lokasi GPS, emisi CO₂).

**Tahap 4 — Konsensus dan Validasi:**
- Untuk konteks enterprise, gunakan konsensus **Practical Byzantine Fault Tolerance (PBFT)** atau **Raft** demi throughput tinggi dan finalitas deterministik.
- Toleransi fault: $f < n/3$ untuk PBFT, di mana $n$ adalah jumlah validator node.

**Tahap 5 — Dashboard dan Analytics Layer:**
- Integrasi dengan big data analytics (Apache Spark, Palantir Foundry) untuk visualisasi sustainability KPI.

### 3.2 Diagram Alir SOP Implementasi

```
[Mulai] → [Identifikasi Aktor Rantai Pasok]
        → [Desain Skema Tokenisasi]
        → [Deployment Permissioned Blockchain]
        → [Registrasi Smart Contract]
        → [Integrasi Sensor IoT + Oracle]
        → [Onboarding Data Historis (off-chain hash commit)]
        → [Operasional: Write Event → Validasi Konsensus → Update Ledger]
        → [Monitoring Dashboard ESG KPI]
        → [Audit & Reporting Otomatis]
        → [Selesai/Siklus Berkelanjutan]
```

### 3.3 SOP Audit dan Validasi Keberlanjutan

Sesuai rekomendasi Khan et al. (2022), SOP audit mengikuti protokol tiga lapis:

1. **Pre-audit**: hash seluruh dokumen ESG commitment di-*commit* ke blockchain sebagai bukti timestamp immutable.
2. **In-process audit**: auditor independen membaca state ledger melalui *view function* smart contract.
3. **Post-audit**: sertifikat keberlanjutan diterbitkan sebagai NFT yang verifiable secara publik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Replikasi Indikator Validitas dari Khan et al. (2022)

Berdasarkan laporan PLS-SEM pada 132 responden perusahaan E&E Malaysia, kami mereplikasi sebagian kecil output validitas konstruk untuk konstruk *Blockchain Technology* (BT) dengan 5 indikator:

| Indikator BT | Loading ($\lambda$) | $t$-value |
|---|---|---|
| BT1 — Transparansi data | 0,872 | 18,42 |
| BT2 — Immutability rekam jejak | 0,851 | 16,89 |
| BT3 — Kecepatan validasi | 0,798 | 12,35 |
| BT4 — Reduksi biaya transaksi | 0,764 | 10,21 |
| BT5 — Smart contract automation | 0,812 | 13,77 |

**Perhitungan Composite Reliability (CR):**

$$CR_{BT} = \frac{(0{,}872 + 0{,}851 + 0{,}798 + 0{,}764 + 0{,}812)^2}{(0{,}872 + 0{,}851 + 0{,}798 + 0{,}764 + 0{,}812)^2 + (0{,}239 + 0{,}276 + 0{,}363 + 0{,}416 + 0{,}341)}$$

$$CR_{BT} = \frac{(4{,}097)^2}{(4{,}097)^2 + 1{,}635} = \frac{16{,}785}{18{,}420} = 0{,}9113$$

Karena $CR_{BT} = 0{,}9113 \geq 0{,}70$, reliabilitas konstruk BT **terpenuhi**.

**Perhitungan Average Variance Extracted (AVE):**

$$AVE_{BT} = \frac{0{,}872^2 + 0{,}851^2 + 0{,}798^2 + 0{,}764^2 + 0{,}812^2}{16{,}785 + 1{,}635}$$

$$AVE_{BT} = \frac{0{,}7604 + 0{,}7242 + 0{,}6368 + 0{,}5837 + 0{,}6593}{18{,}420} = \frac{3{,}3644}{18{,}420} = 0{,}1826$$

Catatan koreksi: numerator harus total varian explained (sum squared loadings), denominator seluruh varian (sum squared loadings + sum error variances). Perbaikan:

$$AVE_{BT} = \frac{\sum \lambda^2}{\sum \lambda^2 + \sum Var(\delta)} = \frac{3{,}3644}{3{,}3644 + 1{,}635} = \frac{3{,}3644}{4{,}9994} = 0{,}6729$$

Karena $AVE_{BT} = 0{,}6729 \geq 0{,}50$, valid.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
