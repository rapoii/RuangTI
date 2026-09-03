# 2546 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai Inti Digital Twin untuk Jaringan Komunikasi 5G Industri serta Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*, hal. 391–402. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*, hal. 145–152. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 mensyaratkan integrasi vertikal dan horizontal yang hanya dapat dicapai bila *physical asset* di lantai produksi memiliki representasi digital yang semantik, interoperabel, dan *machine-readable*. Plattform Industrie 4.0 dan selanjutnya ISO/IEC PAS 63339:2024 merespons kebutuhan ini melalui standar **Asset Administration Shell (AAS)**—sebuah *digital twin* generik yang menjadi "paspor data" setiap aset industri (Cavalieri *et al.*, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) mengangkat masalah yang selama ini luput: bagaimana memodelkan **infrastruktur jaringan komunikasi 5G** itu sendiri sebagai *digital twin* berbasis AAS, padahal jaringan privat 5G (kelas URLLC, *Ultra-Reliable Low-Latency Communication*) merupakan *enabler* utama aplikasi misi-kritis seperti AGV, robot kolaboratif, dan kendali loop-tertutup.

Urgensi operasionalnya nyata. Laporan 5G-ACIA (2023) menunjukkan bahwa 32% pabrik pintar di Eropa mengalami inkonsistensi antara konfigurasi fisik RAN (*Radio Access Network*) dengan model digitalnya, sehingga *root cause analysis* anomalan latensi rata-rata membutuhkan 47 jam—angka yang tidak dapat diterima pada lini perakitan dengan target *Overall Equipment Effectiveness* (OEE) ≥ 85%. Kompleksitas bertambah ketika *factory floor* memiliki puluhan *gNode-B*, *User Equipment*, dan *slice* jaringan dengan parameter QoS berbeda-beda. Tanpa AAS, integrator sistem harus membaca dokumen proprietary tiap vendor (Ericsson, Nokia, Huawei), yang merusak interoperabilitas.

Cavalieri *et al.* (2024) menjawab dengan mengusulkan arsitektur AAS-of-AAS: tiap elemen 5G (gNB, AMF, SMF, UPF, UE) diperlakukan sebagai submodel AAS dengan submodel-element bertipe *Property*, *Operation*, dan *Event*. Pendekatan ini memungkinkan MES/ERP melakukan *service discovery* otomatis berdasarkan kemampuan komunikasi, bukan lagi identitas vendor. Hasilnya, *Mean Time To Repair* (MTTR) anomalan jaringan turun 28% pada studi kasus mereka.

Di sisi komplementer, De Marchi, Rojas, dan Mark (2022) menghadapi masalah paralel pada **sistem transfer perakitan siber-fisik (CPATS)**: bagaimana membangun digital twin yang mampu menyinkronkan status fisik konveyor, gripper, dan PLC dengan model simulasi diskrit-event secara *real-time* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)). Kedua paper, meskipun domain-nya berbeda (jaringan vs. mekanik), bertemu pada titik yang sama: kebutuhan akan arsitektur digital twin modular, terdistribusi, dan mengikuti standar AAS agar siap diorkestrasi oleh *Industrial Edge* dan *Cloud*.

Dari perspektif ekonomi, pasar global AAS diproyeksikan tumbuh 41,6% CAGR (2024–2030, MarketsandMarkets), sehingga penguasaan metodologi ini menjadi *core competency* insinyur industri masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Jaringan 5G untuk URLLC Industri

Kapasitas Shannon untuk link radio 5G direpresentasikan sebagai:

$$C = B \cdot \log_2\left(1 + \frac{P_t \cdot G_t \cdot G_r}{N_0 \cdot B \cdot L_{path}}\right) \quad \text{[bit/s]}$$

dengan $B$ adalah *channel bandwidth* (Hz), $P_t$ daya transmisi (W), $G_t$ dan $G_r$ gain antena, $N_0$ densitas noise termal (W/Hz), dan $L_{path}$ path-loss. Untuk URLLC, parameter kritis bukan throughput melainkan *latency budget*:

$$L_{total} = L_{proc} + L_{queue} + L_{prop} + L_{HARQ} \le 1 \text{ ms (99,999\%)}$$

Probabilitas outage reliabilitas dimodelkan sebagai:

$$P_{outage}(t) = 1 - e^{-\lambda t}, \quad \lambda = \frac{1}{MTBF}$$

dengan $\lambda$ laju kegagalan dan $MTBF$ *Mean Time Between Failure* elemen 5G.

### 2.2 Formulasi AAS Submodel

AAS didefinisikan sebagai tuple:

$$\mathcal{AAS} = \langle ID, IDentification, Submodels, AASX \rangle$$

dengan *Submodels* merupakan himpunan:

$$\mathcal{S} = \{s_i \mid s_i = \langle id, semanticId, properties, operations, events \rangle, \; i = 1,\dots,n\}$$

Setiap *property* memiliki tipe data meta sesuai skema *Semantic Interoperability*:

$$p_j = \langle key, valueType, unit, semanticReference \rangle$$

Untuk 5G, Cavalieri *et al.* (2024) mendefinisikan submodel spesifik `CommunicationCapabilities`:

$$\mathcal{S}_{5G} = \{ s_{gNB}, s_{UE}, s_{slice}, s_{QoS} \}$$

di mana $s_{QoS}$ berisi parameter 5QI (*5G QoS Identifier*), GFBR (*Guaranteed Flow Bit Rate*), dan MFBR (*Maximum Flow Bit Rate*).

### 2.3 Sinkronisasi Digital Twin Sistem Transfer Perakitan

De Marchi *et al.* (2022) menggunakan model *state vector*:

$$\mathbf{x}_k = [p_k, v_k, a_k, \theta_k]^T$$

dengan $p_k, v_k, a_k, \theta_k$ berturut-turut posisi, kecepatan, akselerasi, dan orientasi *transfer unit* pada waktu diskrit $k$. Persamaan状态 transisi:

$$\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}\mathbf{u}_k + \mathbf{w}_k$$

dengan *Kalman Filter* untuk estimasi state:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k(\mathbf{z}_k - \mathbf{H}\hat{\mathbf{x}}_{k|k-1})$$

$$\mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{H}^T(\mathbf{H}\mathbf{P}_{k|k-1}\mathbf{H}^T + \mathbf{R})^{-1}$$

### 2.5 OEE sebagai Metrik Integrasi

*Overall Equipment Effectiveness* lini perakitan:

$$OEE = A \times P \times Q$$

dengan $A$ *Availability*, $P$ *Performance*, $Q$ *Quality*—ketiganya direpresentasikan sebagai *Property* AAS sehingga nilai OEE *real-time* dapat di-query oleh MES melalui *AAS Registry*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 SOP Pembangunan AAS-of-5G (Cavalieri *et al.*, 2024)

| Langkah | Aktivitas | Output |
|---------|-----------|--------|
| 1 | *Asset identification*—inventarisasi gNB, AMF, SMF, UPF, UE pada *deployment* 5G privat | Daftar aset + lokasi |
| 2 | *Submodel template creation*—definisikan `CommunicationCapabilities`, `NetworkSlicing`, `RadioMeasurements` | File `.aasx` template |
| 3 | *Semantic mapping*—ikat setiap properti ke referensi ECLASS/IRI agar interoperabel | *Semantic ID* populated |
| 4 | *Data ingestion*—koneksikan ke *Network Data Analytics Function* (NWDAF) untuk *telemetry* | Stream MQTT/Kafka ke AAS *endpoint* |
| 5 | *Service registration*—publikasikan AAS ke *AAS Discovery Service* (BaSyx, ditto) | Reachable via HTTP/REST |
| 6 | *Validation & KPI*—uji latensi end-to-end, *handover success rate*, throughput per *slice* | Dashboard Power BI / Grafana |

### 3.2 SOP Digital Twin CPATS (De Marchi *et al.*, 2022)

1. **Modeling**: Definisikan *kinematic chain* konveyor + robot dalam format OPC UA Companion Specification.
2. **Shadow Operation**: Jalankan lini fisik sambil merekam *trace* ke *time-series database* (InfluxDB/PostgreSQL).
3. **Twin Initialization**: *Replay* data historis untuk kalibrasi parameter friction, *damping*, dan *controller gain*.
4. **Closed-loop Twin**: Sambungkan *predictive maintenance model* (LSTM) ke AAS *Operation* `invoke("forecastFailure")`.
5. **Continuous Validation**: Bandingkan output twin vs. aktual menggunakan *root-mean-square error*:

$$\text{RMSE} = \sqrt{\frac{1}{N}\sum_{k=1}^{N}(x_k^{real} - x_k^{twin})^2}$$

Ambang batas diterima: RMSE ≤ 2% dari *full scale*.

### 3.3 Arsitektur Integrasi

```
┌────────────────────────────────────────────────────┐
│                Industrial Cloud / MES               │
│  ┌──────────────────────────────────────────────┐  │
│  │        AAS Repository (BaSyx/ditto)          │  │
│  └──────┬───────────────────────────┬──────────┘  │
└─────────┼───────────────────────────┼─────────────┘
          │ HTTPS/OPC UA              │ MQTT/Kafka
┌─────────▼──────────────┐  ┌────────▼─────────────┐
│ AAS Submodel 5G        │  │ AAS Submodel CP