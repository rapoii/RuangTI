# 2066 — Digital Twin untuk Operasi & Pemeliharaan Proyek Konstruksi: Analisis Scientometrik, Formulasi Kuantitatif, dan Aplikasi Lintas Sektor Berbasis Extended Reality

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A scientometric analysis and critical review of digital twin applications in project operation and maintenance
**Jurnal & Sitasi Utama:** Meiqi Lu, Maxwell Fordjour Antwi‐Afari (2024). *Engineering Construction & Architectural Management*. DOI: [https://doi.org/10.1108/ecam-03-2024-0304](https://doi.org/10.1108/ecam-03-2024-0304)
**Sitasi Pendukung:** Senthil Kumar Jagatheesaperumal, Kashif Ahmad, Ala Al‐Fuqaha (2024). *IEEE Transactions on Learning Technologies*. DOI: [https://doi.org/10.1109/tlt.2024.3358859](https://doi.org/10.1109/tlt.2024.3358859)

---

## 1. Pendahuluan dan Konteks Industri

Industri *Architecture, Engineering, and Construction* (AEC) global menyumbang lebih dari USD 13 triliun terhadap PDB dunia (sekitar 13% GDP global) namun masih menghadapi inefisiensi kronis berupa pembengkakan biaya rata-rata 20–80% dari baseline, keterlambatan jadwal 70% proyek, serta tingkat waste material konstruksi 30–40% (Lu & Antwi-Afari, 2024). Lu dan Antwi-Afari (2024) dalam *Engineering Construction & Architectural Management* menekankan bahwa akar masalah tersebut terletak pada fragmentasi informasi sepanjang siklus hidup proyek, di mana data desain, konstruksi, operasi, dan pemeliharaan (Operation & Maintenance/O&M) tidak terintegrasi secara real-time. *Digital Twin* (DT) muncul sebagai paradigma transformatif yang menyatukan model fisik (physical asset), model virtual (cyber replica), dan koneksi data dua arah berbasis Internet of Things (IoT) untuk menciptakan *closed-loop feedback* antara aset nyata dan representasi digitalnya. Studi scientometrik Lu & Antwi-Afari (2024) melakukan tinjauan terhadap empat fase metodologis — *literature search, literature selection, science mapping analysis,* dan *qualitative discussion* — untuk memetakan tren riset DT dalam O&M proyek AEC. Hasilnya menunjukkan bahwa periode 2018–2023 mengalami pertumbuhan eksponensial publikasi (>400 artikel Scopus), didorong oleh adopsi *Building Information Modeling* (BIM) level 3, *cloud-edge computing*, dan algoritma *machine learning* (ML) untuk prediksi kerusakan struktural. Urgensi penerapan DT dalam O&M juga diperkuat oleh Jagatheesaperumal, Ahmad, dan Al-Fuqaha (2024) dalam *IEEE Transactions on Learning Technologies* yang menyoroti bahwa *Extended Reality* (XR) — encompassing *Virtual Reality* (VR), *Augmented Reality* (AR), dan *Mixed Reality* (MR) — beserta *Internet of Everything* (IoE) menjadi enabler krusial untuk meng-*operasionalkan* DT dalam bentuk *immersive metaverse* guna pelatihan teknisi O&M, tele-inspection, dan kolaborasi lintas disiplin. Tanpa integrasi XR-IoE, data sensor yang melimpah dari DT tidak dapat diterjemahkan menjadi keputusan operasional yang *actionable* oleh tenaga kerja di lapangan. Dengan demikian, modul ini memposisikan DT bukan sekadar alat visualisasi 3D, melainkan *cyber-physical production system* yang menuntut rekayasa sistem industri untuk menjamin interoperabilitas, kualitas data, dan *return on investment* (ROI) yang terukur sepanjang 50–80 tahun siklus hidup aset konstruksi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kematangan Digital Twin (DTML)

Lu & Antwi-Afari (2024) mengadaptasi *Digital Twin Maturity Model* menjadi lima tingkat yang dapat dikuantifikasi. Tingkat kematangan DT untuk suatu aset $a$ pada waktu $t$ didefinisikan sebagai:

$$DTM_{a}(t) = \frac{1}{5}\sum_{i=1}^{5} w_i \cdot \delta_i(t)$$

di mana $\delta_i(t) \in \{0,1\}$ adalah status pencapaian level $i$ (1: *Descriptive*, 2: *Informative*, 3: *Predictive*, 4: *Prescriptive*, 5: *Autonomous*), dan $w_i$ adalah bobot kepentingan strategis yang dinormalisasi $\sum w_i = 5$. Bobot tipikal industri AEC: $w = (0.5, 0.7, 1.0, 1.3, 1.5)$.

### 2.2 Indikator Scientometrik untuk Pemetaan Riset

Untuk melakukan *science mapping* seperti yang dilakukan Lu & Antwi-Afari (2024), kita memerlukan tiga indikator bibliometrik utama:

**a) *Productivity Index* (PI) per negara/afiliasi:**

$$PI_j = \frac{N_j}{\sum_{k=1}^{m} N_k} \times 100\%$$

dengan $N_j$ adalah jumlah publikasi entitas $j$ dan $m$ jumlah total entitas.

**b) *h-index* entitas riset:**

$$h = \max\{k : N_{(i)} \geq k, \; \forall i \in \{1,\ldots,k\}\}$$

di mana $N_{(i)}$ adalah jumlah sitasi artikel ke-$i$ yang diurutkan descending.

**c) *Co-occurrence Strength* antar kata kunci (untuk *keyword cluster analysis*):**

$$S_{kl} = \frac{C_{kl}}{\sqrt{C_k \cdot C_l}}$$

dengan $C_{kl}$ adalah jumlah artikel yang memuat kata kunci $k$ dan $l$ secara bersamaan, $C_k$ dan $C_l$ adalah *marginal occurrence*. Nilai $S_{kl} \in [0,1]$ mendekati 1 menunjukkan korelasi tematik yang sangat kuat.

### 2.3 Formulasi Reabilitas Aset untuk O&M

DT memprediksi *Remaining Useful Life* (RUL) aset melalui model *degradation* stokastik. Bentuk umum *Cox Proportional Hazard* untuk komponen struktural:

$$\lambda(t \mid \mathbf{x}) = \lambda_0(t) \cdot \exp(\boldsymbol{\beta}^\top \mathbf{x})$$

dengan $\lambda_0(t)$ adalah *baseline hazard*, $\mathbf{x}$ vektor kovariat (beban, suhu, getaran), dan $\boldsymbol{\beta}$ koefisien regresi yang dikalibrasi dari data sensor IoT. RUL harapan matematis:

$$\mathbb{E}[RUL] = \int_0^{\infty} S(t)\, dt = \int_0^{\infty} \exp\left(-\int_0^t \lambda(u)\,du\right) du$$

### 2.4 Fungsi Utilitas Ekonomi DT

ROI DT selama horizon $T$ tahun dihitung dengan mendiskontokan *cash flow*:

$$ROI_{DT} = \frac{\sum_{t=0}^{T} \frac{\Delta C_{O\&M}(t) + \Delta R_{uptime}(t) - I_{DT}}{(1+r)^t}}{\sum_{t=0}^{T} \frac{I_{DT}}{(1+r)^t}} \times 100\%$$

di mana $\Delta C_{O\&M}$ adalah pengurangan biaya pemeliharaan, $\Delta R_{uptime}$ adalah kenaikan pendapatan akibat peningkatan ketersediaan aset, $I_{DT}$ investasi implementasi DT, dan $r$ tingkat diskonto (WACC tipikal 8–12%).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Referensi DT untuk O&M Proyek AEC

Berdasarkan Lu & Antwi-Afari (2024) dan framework XR-IoE Jagatheesaperumal et al. (2024), arsitektur DT tersusun atas lima lapisan:

| Lapisan | Fungsi | Teknologi Kunci |
|---|---|---|
| **L1 – Physical Asset** | Aset fisik (gedung, jembatan, HVAC) | Sensor, actuator, tag RFID |
| **L2 – Data Acquisition** | Akuisisi data IoT/IoE | MQTT, OPC-UA, 5G, edge gateway |
| **L3 – Data Platform** | Lakehouse & data governance | BIM ISO 19650, *digital thread* |
| **L4 – DT Engine** | Model simulasi & ML | FEM, CFD, LSTM, Physics-Informed NN |
| **L5 – XR Service** | Antarmuka pengguna & pelatihan | VR/AR/MR headsets, *metaverse* |

### 3.2 SOP Implementasi DT (8 Tahap)

Lu & Antwi-Afari (2024) menyusun metodologi empat langkah untuk penelitian (literature search → selection → science mapping → qualitative discussion). Untuk aplikasi industri, SOP ini diperluas menjadi delapan tahap operasional:

1. **Stakeholder Alignment** — Identifikasi *asset owner*, O&M provider, regulator; tetapkan KPI (misal: pengurangan *unplanned downtime* ≥ 25%).
2. **Aset Modeling** — Buat *geometric model* BIM level of development (LOD) ≥ 400 untuk O&M.
3. **IoT Instrumentation** — Pasang sensor sesuai *failure mode* utama; pastikan *sampling rate* ≥ 10× frekuensi故障.
4. **Data Pipeline Engineering** — Bangun pipeline ETL dengan latensi target $\leq 1$ detik untuk *real-time monitoring*.
5. **DT Engine Development** — Kalibrasi model fisik & model data; validasi *Mean Absolute Percentage Error* (MAPE) $\leq 5\%$.
6. **XR Integration** — Deploy modul AR untuk teknisi lapangan (visualisasi *tunnel view* utilitas tersembunyi) dan modul VR untuk *safety training* sesuai kerangka Jagatheesaperumal et al. (2024).
7. **Change Management** — Sertifikasi teknisi (syarat minimal 40 jam pelatihan XR-DT) sesuai protokol IEEE 1588 untuk *time synchronization* sensor.
8. **Continuous Improvement** — *Quarterly review* dengan *A/B testing* algoritma prediktif; *drift detection* pada model ML.

### 3.3 Diagram Alir SOP

```
[Mulai] → [1. Stakeholder Alignment] → [2. BIM LOD≥400]
   ↓
[3. IoT Instrumentation] → [4. ETL Pipeline <1s]
   ↓
[5. DT Engine MAPE≤5%] → [6. XR-AR/VR Modul]
   ↓
[7. Training 40 jam] → [8. Quarterly Review]
   ↓
[Loop ke Langkah 5 jika Drift>10%]
```

Standar acuan: **ISO 23247** (Digital Twin framework for manufacturing), **ISO 19650** (BIM), **IEEE 1451** (smart transducer), dan **ISO/IEC 30173** (DT concepts & terminology).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Gedung Perkantoran 30 Lantai

Aset: Gedung komersial 30 lantai, luas 45.000 m², sistem HVAC 4 unit *chiller* + 12 AHU, biaya energi USD 1,2 juta/tahun, biaya O&M USD 0,8 juta/tahun, usia operasi saat ini 8 tahun (renovasi besar ke-25).

### 4.2 Langkah 1 — Pemetaan Scientometrik Awal

Misal hasil *screening* Scopus/WoS terhadap kata kunci `("digital twin" AND "operation and maintenance")` periode 2018–2023:

| Negara | $N_j$ | PI (%) | h-index |
|---|---|---|---|
| China | 142 | 35.5 | 38 |
| USA | 89 | 22.3 | 41 |
| UK | 41 | 10.3 | 27 |
| Jerman | 36 | 9.0 | 24 |
| Lainnya | 92 | 23.0 | — |
| **Total** | **400** | **100** | — |

**Keyword co-occurrence** (5 klaster utama hasil Lu & Antwi-Afari, 2024):
- **Klaster A:** `BIM`–`Facility Management` ($S_{AB} = 0{,}78$)
- **Klaster B:** `IoT`–`Predictive Maintenance` ($S_{CD} = 0{,}82$)
- **Klaster C:** `Machine Learning`–`Anomaly Detection` ($S_{EF} = 0{,}74$)
- **Klaster D:** `XR`–`Worker Training` ($S_{GH} = 0{,}68$)
- **Klaster E:**`Energy Optimization