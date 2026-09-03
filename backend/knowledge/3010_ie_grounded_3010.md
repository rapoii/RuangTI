# 3010 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G pada Rekayasa Sistem Industri Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur menuju paradigma **Industri 4.0** dan **Industri 5.0** mensyaratkan integrasi mendalam antara entitas fisik (aset produksi, sensor, aktuator, robot kolaboratif) dengan representasi digitalnya secara *real-time*. Dalam konteks ini, **Digital Twin (DT)** bukan sekadar model CAD statis, melainkan sebuah replika dinamis yang terus-menerus disinkronkan dengan kondisi operasional aset fisik melalui aliran data telemetri. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *"Asset Administration Shell Digital Twin of 5G Communication System"* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti satu tantangan fundamental yang selama ini menghambat adopsi DT di lantai pabrik, yaitu belum tersedianya kerangka interoperabilitas standar untuk mendeskripsikan aset komunikasi nirkabel generasi kelima (5G) yang menjadi *backbone* komunikasi *cyber-physical production systems* (CPPS).

Urgensi permasalahan ini bersifat operasional sekaligus ekonomis. Dalam manufaktur modern, latensi komunikasi, *jitter*, dan *packet loss* pada jaringan 5G privat (private 5G network) secara langsung menentukan kualitas kontrol loop sistem siber-fisik, misalnya pada *transfer system* rakitan yang dikaji oleh De Marchi, Rojas, dan Mark (2022) (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)). Fluktuasi kualitas layanan (QoS) jaringan yang tidak terpantau dapat menyebabkan *downtime* tak terjadwal, *scrap* produk, dan bahkan bahaya keselamatan kerja. Lebih lanjut, ketika sebuah pabrik memiliki ratusan *gNodeB*, *User Equipment* (UE), dan *edge computing node*, konsolidasi metadata aset ke dalam satu struktur standar menjadi kebutuhan mutlak untuk menjamin *plug-and-produce*, *vendor interoperability*, dan kepatuhan terhadap standar referensi **RAMI 4.0** (Reference Architecture Model Industrie 4.0) yang dikembangkan Plattform Industrie 4.0.

Kontribusi utama makalah Cavalieri et al. (2024) adalah memperkenalkan **Asset Administration Shell (AAS)** —submodel dari spesifikasi **Industrial Digital Twin Association (IDTA)**— sebagai *metamodel* untuk mendeskripsikan aset 5G secara formal, semantik, dan mesin-terbaca (machine-readable). Pendekatan ini memungkinkan setiap elemen jaringan 5G (misalnya *base station*, antena, *core network function*) memiliki "kartu identitas digital" yang tidak hanya memuat data statis (nomor seri, pabrikan), tetapi juga properti dinamis seperti status koneksi, throughput historis, dan parameter *beamforming*. Dengan mengintegrasikan AAS ke dalam arsitektur DT, operator pabrik dapat melakukan *what-if analysis*, *predictive maintenance*, dan *root cause analysis* terhadap anomali jaringan dengan presisi yang sebelumnya tidak tercapai. Dokumen Knowledge Base ini menguraikan landasan teori, formulasi matematis, metodologi implementasi, studi kasus kuantitatif, serta evaluasi kritis terhadap kontribusi ilmiah tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual Asset Administration Shell (AAS)

Menurut Cavalieri et al. (2024), AAS direpresentasikan sebagai *directed acyclic graph* (DAG) dari **Submodels**, di mana setiap *submodel* mengelompokkan sekumpulan **Properties** dan **Operations**. Secara matematis, sebuah AAS $A$ untuk aset 5G didefinisikan sebagai:

$$A = \langle ID_A, M_A, S_A, C_A \rangle$$

di mana:
- $ID_A$ adalah *globally unique identifier* sesuai spesifikasi *Identification* dari IDTA,
- $M_A$ adalah himpunan metadata administratif (pabrikan, kode produk, tahun produksi),
- $S_A = \{s_1, s_2, \ldots, s_n\}$ adalah himpunan *submodels* yang merepresentasikan aspek spesifik aset,
- $C_A$ adalah himpunan *capabilities* yang mendeskripsikan fungsi layanan (misalnya *data ingestion*, *command execution*).

Untuk aset komunikasi 5G, Cavalieri et al. (2024) mengusulkan minimal empat *submodel* esensial: **(i) Identification**, **(ii) Capability Description**, **(iii) 5G Communication Status**, dan **(iv) DT Synchronization Rules**. Setiap *property* dalam submodel didefinisikan melalui struktur *Semantic* yang mengadopsi ontologi *reference* seperti **IEC 61360** untuk *data types* atau **SAREF** untuk domain telekomunikasi.

### 2.2 Formalisasi Status Komunikasi 5G

Status *real-time* dari sebuah *gNodeB* ke-$i$ pada waktu $t$ dapat diformulasikan sebagai vektor status:

$$\mathbf{X}_i(t) = \begin{bmatrix} \text{RSRP}_i(t) \\ \text{SINR}_i(t) \\ \text{Thr}_i(t) \\ \tau_i(t) \\ \eta_i(t) \end{bmatrix}$$

di mana:
- $\text{RSRP}_i(t)$ = *Reference Signal Received Power* (dBm),
- $\text{SINR}_i(t)$ = *Signal-to-Interference-plus-Noise Ratio* (dB),
- $\text{Thr}_i(t)$ = throughput efektif (Mbps),
- $\tau_i(t)$ = latensi *end-to-end* (ms),
- $\eta_i(t)$ = *packet loss rate* (%).

Sinkronisasi antara aset fisik dan DT mengikuti persamaan *state update*:

$$\mathbf{X}_i^{DT}(t+\Delta t) = f\bigl(\mathbf{X}_i^{phys}(t), \mathbf{U}_i(t)\bigr)$$

di mana $f(\cdot)$ adalah fungsi pemetaan yang dapat berupa model stokastik (misalnya Kalman Filter), *machine learning regressor*, atau *hybrid model*, dan $\mathbf{U}_i(t)$ adalah vektor *control input* dari orchestrator jaringan.

### 2.3 Model Kualitas Layanan (QoS) dan Key Performance Indicator

Cavalieri et al. (2024) mendefinisikan *Composite KPI* untuk menilai kesehatan aset 5G dalam DT sebagai:

$$\text{QoS}_i(t) = w_1 \cdot \frac{\text{Thr}_i(t)}{\text{Thr}_{\max}} + w_2 \cdot \frac{\tau_{\max} - \tau_i(t)}{\tau_{\max}} + w_3 \cdot \frac{\eta_{\max} - \eta_i(t)}{\eta_{\max}} - w_4 \cdot \frac{|\text{SINR}_i(t) - \text{SINR}_{target}|}{\text{SINR}_{target}}$$

dengan $\sum_{k=1}^{4} w_k = 1$ dan seluruh bobot $w_k \geq 0$. Nilai $\text{QoS}_i(t) \in [0,1]$ menunjukkan tingkat kepatuhan aset terhadap *Service Level Agreement* (SLA). Ketika $\text{QoS}_i(t) < \theta$ (dengan $\theta$ adalah ambang batas kritis, misal 0{,}7), AAS akan memublikasikan *event* anomali ke *Digital Twin Manager* untuk pemicu *diagnostic* atau *predictive maintenance*.

### 2.4 Formalisasi Arsitektur Digital Twin

Mirip dengan kerangka De Marchi et al. (2022) yang membahas arsitektur DT untuk *cyber-physical assembly transfer system*, lapisan komunikasi 5G dapat dimodelkan sebagai:

$$DT_{layer} = \{L_{field}, L_{edge}, L_{cloud}, L_{orchestrator}\}$$

di mana setiap lapisan $L_j$ memiliki fungsi:
- $L_{field}$: akuisisi data dari sensor/aktuator lantai pabrik,
- $L_{edge}$: agregasi data & inferensi lokal (latency-sensitive),
- $L_{cloud}$: pemodelan holistik dan analitik Big Data,
- $L_{orchestrator}$: manajemen AAS registry & *digital thread*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem komunikasi 5G mengikuti prosedur operasional standar yang terdiri atas **lima tahap utama**, sebagaimana dirangkum dari Cavalieri et al. (2024) dan De Marchi et al. (2022):

**Tahap 1 — Asset Discovery & Cataloging.**
Insinyur pabrik melakukan inventarisasi seluruh aset 5G (gNodeB, antenna, UE, *edge server*, *core network function*) menggunakan *asset registry tool* yang kompatibel dengan spesifikasi IDTA (misalnya *BaSyx AAS Server*). Setiap aset diberi `aasIdentifier` sesuai *URN* namespace perusahaan.

**Tahap 2 — Submodel Engineering.**
Mengacu pada Cavalieri et al. (2024), setiap aset dideskripsikan menggunakan paket *submodel template* yang telah diverifikasi IDTA, antara lain:
- *Nameplate* (data identifikasi),
- *Handover Documentation* (dokumentasi teknis),
- *Capability Description* (layanan yang ditawarkan),
- *5G Communication Status* (data dinamis),
- *Condition Monitoring* (untuk *predictive maintenance*).

**Tahap 3 — Data Ingestion & Connector Configuration.**
AAS Server dihubungkan ke *northbound interface* jaringan 5G melalui protokol seperti **HTTP/REST**, **OPC UA**, atau **MQTT** (sesuai ISO 23247 dan AAS API Spec Part 2). Frekuensi *polling* $\Delta t$ ditetapkan berdasarkan *criticality* aset:
$$\Delta t_{critical} = 100\ \text{ms}, \quad \Delta t_{non\text{-}critical} = 5\ \text{s}$$

**Tahap 4 — Synchronization & State Mapping.**
Algoritma sinkronisasi (misalnya *extended Kalman filter* atau *LSTM-based predictor*) dipasang untuk memetakan $\mathbf{X}_i^{phys}(t)$ ke $\mathbf{X}_i^{DT}(t+\Delta t)$. Validasi dilakukan dengan membandingkan prediksi DT terhadap pembacaan aktual melalui *normalized root mean square error*:
$$\text{NRMSE} = \frac{\sqrt{\frac{1}{N}\sum_{t=1}^{N}(\mathbf{X}_i^{DT}(t) - \mathbf{X}_i^{phys}(t))^2}}{\max(\mathbf{X}_i^{phys}) - \min(\mathbf{X}_i^{phys})}$$

**Tahap 5 — Anomaly Detection & Reaction Loop.**
Nilai $\text{QoS}_i(t)$ dihitung *real-time*. Jika $\text{QoS}_i(t) < \theta$, AAS memicu *event* yang diteruskan ke *Manufacturing Execution System* (MES) untuk tindakan korektif: *load balancing*, *beamforming reconfiguration*, atau *failover* ke *redundant gNodeB*. Loop ini menciptakan ekosistem *self-healing network*.

Diagram alur logika proses secara singkat:

```
[Physical 5G Asset] --(telemetry)--> [Edge Connector] --(OPC UA/MQTT)-->
[AAS Submodel "5G Communication Status"] --> [Digital Twin State Estimator] -->
[QoS Calculator] --> {QoS < θ? yes -> Trigger Alarm/Anomaly} --> [MES Reaction]
```

Standar industri yang relevan mencakup: **IEC 63278** (AAS), **IEC 62443** (keamanan siber), **3GPP TS 28.554** (manajemen kinerja jaringan 5G), dan **ISO 23247** (kerangka DT manufaktur).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Pabrik Perakitan Bodi Otomotif

Sebuah lini perakitan *body-in-white* menggunakan **12 *gNodeB*** dengan konfigurasi *indoor 5G private network* pada pita n78 (3{,}5 GHz). Target SLA pabrik: $\tau_{\max} = 10$ ms, $\eta_{\max} = 0{,}1\%$, $\text{Thr}_{\max} = 200$ Mbps, $\text{SINR}_{target} = 15$ dB. Ambang batas $\theta = 0{,}70$. Bobot QoS: $w_1 = 0{,}30$, $w_2 = 0{,}30$, $w_3 = 0{,}20$, $w_4 = 0{,}20$.

### 4.2 Pengukuran Status pada Empat Interval Waktu

Amati salah satu *gNodeB* ($i = 5$) pada empat interval sampling:

| $t$ | RSRP (dBm) | SINR (dB) | Thr (Mbps) | $\tau$ (ms) | $\eta$ (%) |
|-----|------------|-----------|------------|-------------|------------|
| $t_1$ | −72 | 18 | 185 | 6{,}5 | 0{,}04 |
| $t_2$ | −78 | 14 | 162 | 7{,}