# 2802 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G pada Sistem Produksi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur memasuki fase krusial di mana konvergensi antara *cyber-physical systems* (CPS), jaringan komunikasi nirkabel generasi kelima (5G), dan representasi digital aset fisik menjadi prasyarat daya saing. Cavalieri, Di Natale, dan Gambadoro (2024) dalam paper "*Asset Administration Shell Digital Twin of 5G Communication System*" (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan kerangka arsitektur digital twin untuk jaringan komunikasi 5G dengan memanfaatkan standar **Asset Administration Shell (AAS)** yang dipromosikan oleh Plattform Industrie 4.0 dan kini diadopsi luas dalam kerangka **RAMI 4.0 (Reference Architecture Model Industry 4.0)**. Urgensi topik ini berakar pada tiga tantangan operasional simultan yang dihadapi fasilitas manufaktur modern: (i) fragmentasi representasi aset yang menghambat interoperabilitas antar-line produksi, (ii) ketidakmampuan sistem komunikasi nirkabel legacy (Wi-Fi, Profinet kabel) dalam menjamin *Ultra-Reliable Low-Latency Communication* (URLLC) yang menjadi syarat mutlak untuk kontrol loop tertutup di lantai pabrik, dan (iii) kebutuhan akan visibilitas end-to-end terhadap Quality-of-Service (QoS) jaringan sebagai variabel kendali mutu produk.

Kontribusi Cavalieri dkk. (2024) menjadi penting karena mendeklarasikan **5G network function** (misalnya *gNodeB*, *AMF/SMF*, *UPF*, dan *network slice*) sebagai *type-3 asset* yang dapat di-modelkan melalui submodel AAS, lengkap dengan *capability* dan *property* yang diekspos ke jaringan *value-added service* industri. Pendekatan ini menjawab gap riset yang sebelumnya hanya membatasi AAS pada aset fisik (robot, PLC, conveyor) tanpa menyentuh infrastruktur telekomunikasi. Studi ini selaras dengan paper De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang membangun arsitektur digital twin untuk *cyber-physical assembly transfer system*, di mana elemen komunikasi diidentifikasi sebagai dependensi kritis namun belum sepenuhnya diintegrasikan ke dalam *information model* standar.

Secara ekonomis, adopsi AAS-DT untuk sistem 5G berpotensi menurunkan *Mean Time To Repair* (MTTR) anomali komunikasi hingga 40–60% karena *root cause analysis* dapat dilakukan langsung pada parameter QoS (latency, jitter, packet loss) yang terekspos secara real-time. Dari perspektif teknis, integrasi ini memungkinkan *closed-loop reconfiguration* di mana degradasi kualitas sinyal 5G di satu sel dapat memicu perpindahan *resource block* atau *slice handover* secara otomatis melalui *AAS submodel service*. Konteks industri yang relevan meliputi *high-mix low-volume* electronics assembly, *flexible manufacturing system* (FMS) untuk industri otomotif, serta *modular production line* pada industri farmasi di mana setiap batch memerlukan konfigurasi konektivitas berbeda. Ketergantungan pabrik pada protokol *Time-Sensitive Networking* (TSN) over 5G juga mengemuka sebagai use case utama, di mana deterministik latency <1 ms menjadi prasyarat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Informasi Asset Administration Shell

AAS didefinisikan sebagai representasi digital dari sebuah *asset* yang mengikuti struktur hirarkis:

$$ \text{AAS} = \langle \text{AssetIdentification}, \text{Submodel}_1, \text{Submodel}_2, \dots, \text{Submodel}_n \rangle $$

di mana setiap submodel $S_i$ mengandung himpunan *property* $P$, *capability* $C$, dan *reference* $R$:

$$ S_i = \{ P_{i,j}, C_{i,k}, R_{i,m} \mid j,k,m \in \mathbb{N} \} $$

Untuk sistem komunikasi 5G, Cavalieri dkk. (2024) memetakan elemen 5G ke dalam submodel *CommunicationProfile*, *NetworkSlice*, dan *QoSMonitoring*. Relasi antara physical asset dan AAS-nya diformulasikan sebagai:

$$ f_{\text{dt}}: A_{\text{phys}} \rightarrow A_{\text{dig}}, \quad A_{\text{dig}}(t) = \Phi(A_{\text{phys}}(t)) $$

dengan $\Phi$ merupakan fungsi sinkronisasi yang memperbarui state digital berdasarkan telemetry dari physical asset. Dalam konteks 5G, sinkronisasi harus memenuhi *freshness constraint* yang diformalkan sebagai *Age of Information* (AoI):

$$ \Delta(t) = t - u(t), \quad \text{dengan } u(t) = \max\{\tau \leq t : z(\tau) \text{ diterima}\} $$

di mana $\Delta(t)$ adalah usia informasi pada waktu $t$ dan $u(t)$ adalah timestamp pembaruan terakhir. Untuk kontrol URLLC, batas atas AoI harus memenuhi:

$$ \mathbb{E}[\Delta(t)] \leq \Delta_{\max}, \quad \text{dengan } \Delta_{\max} = 1 \text{ ms (URLLC profile)} $$

### 2.2 Model Latency 5G untuk Sistem Transfer

Latency end-to-end pada sambungan 5G industri mengikuti model *three-domain delay*:

$$ L_{\text{e2e}} = L_{\text{UE}} + L_{\text{ran}} + L_{\text{core}} + L_{\text{transport}} $$

Komponen RAN (*Radio Access Network*) dapat dimodelkan menggunakan persamaan *frame transmission delay* OFDM:

$$ L_{\text{ran}} = N_{\text{tti}} \cdot T_{\text{tti}} + T_{\text{proc}} $$

dengan $N_{\text{tti}}$ adalah jumlah *Transmission Time Interval* yang dibutuhkan (untuk URLLC menggunakan *mini-slot* dengan $N_{\text{tti}}=1$), $T_{\text{tti}}$ adalah durasi subframe (umumnya $0{,}125$ ms untuk numerology $\mu=3$ di 5G NR), dan $T_{\text{proc}}$ adalah waktu pemrosesan baseband. Throughput agregat suatu *network slice* didekHitung sebagai:

$$ R_{\text{slice}} = \sum_{u=1}^{U} B_{u} \cdot \log_2\left(1 + \text{SINR}_u\right) $$

dengan $B_u$ adalah bandwidth yang dialokasikan ke user equipment $u$ dan $\text{SINR}_u$ adalah *Signal-to-Interference-plus-Noise Ratio*.

### 2.3 Model Keandalan dan Availability

Availability sistem AAS-DT 5G dimodelkan sebagai seri dari komponen-komponen:

$$ A_{\text{sys}} = \prod_{k=1}^{K} A_k = \prod_{k=1}^{K} \frac{\text{MTBF}_k}{\text{MTBF}_k + \text{MTTR}_k} $$

Untuk prediksi *remaining useful life* (RUL) elemen jaringan, digunakan model degradasi Wienner dengan parameter drift $\mu$ dan volatility $\sigma$:

$$ X(t) = X_0 + \mu t + \sigma W(t), \quad X(t) \sim \mathcal{N}(X_0 + \mu t, \sigma^2 t) $$

### 2.4 Model Transfer pada Assembly Line (Pendukung De Marchi et al., 2022)

De Marchi, Rojas, dan Mark (2022) memodelkan *assembly transfer system* sebagai jaringan antrian M/M/1 dengan arrival rate $\lambda$ dan service rate $\mu$:

$$ L_q = \frac{\rho^2}{1-\rho}, \quad \rho = \frac{\lambda}{\mu}, \quad W_q = \frac{L_q}{\lambda} $$

Throughput transfer system yang bergantung pada komunikasi 5G diberikan oleh:

$$ \text{THP} = \mu \cdot (1 - \rho_{\text{eff}}), \quad \rho_{\text{eff}} = \rho \cdot (1 + \delta_{\text{comm}}) $$

di mana $\delta_{\text{comm}}$ adalah *degradation factor* yang proporsional terhadap packet loss $p_{\text{loss}}$:

$$ \delta_{\text{comm}} = \frac{p_{\text{loss}}}{1 - p_{\text{loss}}} $$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Asset Administration Shell Digital Twin untuk sistem 5G mengikuti prosedur sistematis delapan langkah yang diadopsi dari best practice yang dipublikasikan Cavalieri dkk. (2024) dan diselaraskan dengan arsitektur De Marchi dkk. (2022):

**Langkah 1 — Asset Identification & Type Definition.**
Lakukan inventarisasi seluruh *network function* 5G (gNodeB, AMF, SMF, UPF, NEF) serta elemen RAN fisik (radio unit, antenna, fronthaul). Tentukan *asset type* masing-masing berdasarkan referensi AAS *type definition* (misalnya *AssetInterfaceCommunication*).

**Langkah 2 — Submodel Decomposition.**
Pecah setiap aset menjadi submodel sesuai domain engineering: *Identification*, *Capability*, *Documentation*, *CommunicationProfile*, *NetworkSlice*, *QoSMonitoring*, dan *OperationalData*. Buat *submodel template* (`.aasx` package) untuk masing-masing tipe.

**Langkah 3 — Property & Capability Mapping.**
Petakan setiap parameter 5G ke dalam AAS *property*: 
- $P_{\text{latency}} \rightarrow$ *Property* `NetworkLatencyCurrent` (ms)
- $P_{\text{jitter}} \rightarrow$ *Property* `JitterCurrent` (ms)
- $P_{\text{throughput}} \rightarrow$ *Property* `DownlinkThroughputAvg` (Mbps)
- $P_{\text{rsrp}} \rightarrow$ *Property* `SignalStrengthRSRP` (dBm)

Definisikan *capability* seperti `CapabilityReconfigureSlice` yang menerima parameter `sliceId`, `bandwidth`, dan `qosProfile`.

**Langkah 4 — AAS Deployment & Registry.**
Publish seluruh AAS instance ke dalam **AAS Registry** (menggunakan protokol *AASX Package Explosion* dan *HTTP/REST* sesuai spesifikasi *Details of the Asset Administration Shell* Part 2). Gunakan *unique identifier* berbasis `IRI` per submodel.

**Langkah 5 — Real-time Data Binding.**
Integrasikan AAS dengan **Network Data Analytics Function (NWDAF)** 3GPP Release 17 menggunakan *Service-Based Interface (SBI)*. Data binding dapat menggunakan protokol *OPC UA over 5G* atau *MQTT-SN* untuk telemetry lightweight.

**Langkah 6 — Digital Twin Synchronization.**
Implementasikan fungsi sinkronisasi dua arah menggunakan *event-driven update* (MQTT publish-subscribe) untuk perubahan status di bawah 100 ms, dan *polling-based* untuk KPI agregat dengan interval 1 s. AoI harus dimonitor secara kontinu.

**Langkah 7 — Service Exposure & Orchestration.**
Expose *AAS service* ke Manufacturing Execution System (MES) dan Product Lifecycle Management (PLM) melalui **BaSyx** middleware. Setiap service call harus melalui *authorization server* (OAuth 2.0 + mTLS) untuk menjamin security.

**Langkah 8 — Closed-Loop Control Implementation.**
Hubungkan output `CapabilityReconfigureSlice` dengan *network slice orchestrator* 5G sehingga anomali QoS dapat memicu rekonfigurasi otomatis. Trigger direpresentasikan sebagai *Condition* pada AAS submodel `OperationalData`.

**Diagram Alir Arsitektur:**

```
┌──────────────────────────────────────────────────────────────────┐
│  PHYSICAL LAYER                                                  │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐              │
│  │  gNodeB #1 │    │  gNodeB #2 │    │  AMF/SMF   │              │
│  └─────┬──────┘    └─────┬──────┘    └─────┬──────┘              │
└────────┼─────────────────┼─────────────────┼─────────────────────┘
         │ Telemetry (PM counters, KPIs)       │
         ▼                                     ▼
┌──────────────────────────────────────────────────────────────────┐
│  COMMUNICATION LAYER (3