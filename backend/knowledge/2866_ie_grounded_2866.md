# 2866 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital di lantai pabrik modern menuntut integrasi mulus antara entitas fisik (*cyber-physical production systems*/CPPS) dan representasi digitalnya. Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menekankan bahwa komunikasi nirkabel generasi kelima (5G) telah muncul sebagai *backbone* konektivitas utama dalam lingkungan *smart manufacturing*, namun karakteristiknya—yakni *ultra-reliable low-latency communication* (URLLC), *enhanced mobile broadband* (eMBB), dan *massive machine-type communication* (mMTC)—membentuk tantangan interoperabilitas yang tidak dapat diselesaikan oleh pendekatan jaringan konvensional. Dalam arsitektur *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang dikembangkan oleh Plattform Industrie 4.0, *Asset Administration Shell* (AAS) berfungsi sebagai *digital representation* terstandarisasi untuk setiap aset industri, menyediakan *semantic interoperability* lintas *value chain*.

Urgensi operasional dari penelitian Cavalieri dkk. (2024) bersandar pada kenyataan bahwa 5G di pabrik bukan sekadar peningkatan bandwidth—ia adalah *deterministic network* dengan *latency* sub-1 ms yang harus dimodelkan, dimonitor, dan dikendalikan secara real-time melalui *Digital Twin* (DT). Tanpa representasi AAS yang formal, integrasi 5G dengan *Manufacturing Execution System* (MES) dan *Enterprise Resource Planning* (ERP) akan menghadapi *semantic gap* yang menghambat *closed-loop control*. Lebih lanjut, De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa pada *cyber-physical assembly transfer system*, propagasi status fisik ke DT memerlukan *protocol abstraction* yang hanya dapat dijembatani oleh arsitektur AAS berlapis.

Secara ekonomis, adopsi AAS-DT untuk 5G berpotensi menurunkan *mean time to repair* (MTTR) jaringan hingga 35–50% karena kemampuan *predictive maintenance* berbasis telemetry yang dikumpulkan via *Network Data Analytics Function* (NWDAF). Secara teknis, paper Cavalieri dkk. mengusulkan dekomposisi 5G *gNodeB*, *User Equipment* (UE), dan *core network* (5GC) menjadi submodel AAS yang saling berinteraksi melalui *AAS API* dan *Industry 4.0 connector*. Pendekatan ini menjawab tantangan fragmentasi vendor—di mana elemen jaringan dari Ericsson, Nokia, atau Huawei memiliki skema manajemen proprietari—dengan menyatukan representasi di bawah *metamodel* AAS Specification of the Asset Administration Shell (Bagian 1–4) dari Industrial Digital Twin Association (IDTA).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi Asset Administration Shell (AAS)

AAS didefinisikan sebagai pasangan $(A, M)$ di mana $A$ adalah *Asset* (entitas fisik/logis) dan $M = \{m_1, m_2, \ldots, m_n\}$ adalah himpunan *Submodel* yang merepresentasikan aspek-aspek spesifik dari aset. Secara formal:

$$AAS = (A, \, \text{Identifier}_{AAS}, \, \{Submodel_i\}_{i=1}^{n}, \, \text{ConceptDescription}_j)$$

dengan $\text{Identifier}_{AAS}$ mengikuti *globally unique identifier* berbasis URI sesuai IEC 61360 dan *IRI* (Internationalized Resource Identifier). Cavalieri dkk. (2024) memetakan setiap elemen 5G ke submodel AAS tertentu:

$$M_{5G} = \{M_{\text{RAN}}, M_{\text{Core}}, M_{\text{Slice}}, M_{\text{QoS}}, M_{\text{Security}}\}$$

### 2.2 Formulasi Latensi End-to-End Jaringan 5G

Untuk kendali proses industri real-time, *latency* end-to-end $L_{e2e}$ pada *User Plane* 5G dimodelkan sebagai:

$$L_{e2e} = L_{UE} + L_{RAN} + L_{transport} + L_{CN} + L_{UPF} + L_{app}$$

di mana:
- $L_{UE}$: latensi pemrosesan *User Equipment* (≈ 0,5 ms)
- $L_{RAN}$: latensi *Radio Access Network* yang tergantung pada *numerology* dan *slot duration* $\tau_{slot}$:

$$L_{RAN} = T_{TX} + \tau_{slot} \cdot N_{HARQ} + T_{prop}$$

dengan *subcarrier spacing* (SCS) $f_{SCS} \in \{15, 30, 60, 120\}$ kHz menghasilkan durasi slot $\tau_{slot} = \frac{1}{2^{\mu} \cdot f_{SCS,base}}$ di mana $\mu$ adalah *numerology index*.

### 2.3 Keandalan URLLC dan Network Slicing

*Reliability* URLLC dimodelkan sebagai probabilitas keberhasilan transmisi paket dalam ukuran blok transmisi tertentu:

$$R = 1 - \prod_{k=1}^{N}(1 - p_k)$$

dengan $p_k$ adalah probabilitas keberhasilan transmisi pada *transmission time interval* ke-$k$ dalam *hybrid automatic repeat request* (HARQ). Cavalieri dkk. (2024) mengusulkan submodel $M_{QoS}$ AAS untuk mem-parameterisasi $R$ dan $L_{e2e}$ secara dinamis.

*Network slicing* memungkinkan partisi logis jaringan:

$$\text{Network Slice} = \{VNF_1, VNF_2, \ldots, VNF_m\} \mid \forall i, VNF_i \in \{\text{AMF, SMF, UPF, PCF}\}$$

Setiap *slice* memiliki Service Level Agreement (SLA) yang ditentukan oleh tuple $\langle L_{max}, R_{min}, T_{throughput} \rangle$.

### 2.4 Sinkronisasi State Digital Twin

Sinkronisasi antara AAS dan aset fisik dimodelkan sebagai *discrete-time state update*:

$$S_{DT}(t+1) = f(S_{DT}(t), S_{phys}(t), \Delta S_{sensor}(t))$$

dengan *consistency error* antara DT dan fisik didefinisikan sebagai:

$$\varepsilon_{sync}(t) = \|S_{DT}(t) - S_{phys}(t)\|_2$$

De Marchi dkk. (2022) menetapkan toleransi $\varepsilon_{sync} < \epsilon_{threshold}$ (umumnya $\epsilon_{threshold} \approx 0{,}05 \cdot S_{nom}$) sebagai kondisi valid untuk *closed-loop control* pada sistem transfer perakitan.

### 2.5 Model Throughput Spektral

*Throughput* $T$ pada *Radio Access Network* 5G dimodelkan menggunakan *Shannon capacity* yang diperluas dengan *spectral efficiency* $\eta$:

$$T = B \cdot \eta \cdot \log_2\left(1 + \frac{P \cdot G}{N_0 \cdot B}\right)$$

di mana $B$ adalah *bandwidth*, $P$ adalah daya transmisi, $G$ adalah *channel gain*, dan $N_0$ adalah *noise spectral density*. Pada 5G NR FR1 dengan bandwidth 100 MHz dan SCS 30 kHz, kapasitas tipikal mencapai 800–950 Mbps per sel.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur AAS-DT 5G (Cavalieri dkk., 2024)

Cavalieri, Di Natale, dan Gambadoro (2024) mengusulkan arsitektur berlapis berikut untuk implementasi AAS-DT pada sistem komunikasi 5G:

**Layer 1 — Physical Asset Layer:** Berisi *gNodeB* (CU/DU/RU), UE, *User Plane Function* (UPF), dan *5G Core*. Setiap elemen dilengkapi sensor telemetry (SNMP, NETCONF/YANG, *perf counters*).

**Layer 2 — AAS Communication Middleware:** Implementasi *Industry 4.0 Connector* menggunakan protokol HTTP/REST dan MQTT untuk pertukaran data dengan format AAS *Serialization* (JSON atau XML sesuai spesifikasi IDTA Part 2).

**Layer 3 — AAS Submodel Repository:** Penyimpanan submodel dalam *AASX package* (format OPC UA Companion Specification) dengan *Concept Description* berbasis ECLASS atau IEC CDD.

**Layer 4 — DT Analytics & Control:** Modul *Network Data Analytics Function* (NWDAF), *Anomaly Detection*, dan *Closed-loop Controller* yang mengonsumsi data submodel.

### 3.2 SOP Implementasi Bertahap

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: IDENTIFIKASI ASET 5G                              │
│   • Inventarisasi gNodeB, UE industri, 5GC components     │
│   • Penetapan Global Asset Identifier (GAID) per elemen  │
│   • Pemetaan ke AAS Identifier (URI sesuai IDTA Part 1)  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: DEKOMPOSISI SUBMODEL                               │
│   • M_RAN: Radio parameters, beamforming, numerology     │
│   • M_Core: AMF/SMF/UPF status, slicing info             │
│   • M_QoS: Latency, jitter, packet loss, throughput      │
│   • M_Security: Encryption keys, certificates            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: REGISTRASI AAS KE REGISTRY                        │
│   • Publish submodel ke AAS Registry (BaSyx/Plattform)  │
│   • Validasi interoperabilitas via AAS Test Suite        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: DEPLOYMENT MIDDLEWARE & SINKRONISASI              │
│   • Instalasi BaSyx AAS Server + connector              │
│   • Konfigurasi event-driven push (MQTT) atau pull      │
│   • Penentuan sync interval τ_sync (tipikal 100 ms)     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 5: INTEGRASI DT ANALYTICS                            │
│   • Training model predictive maintenance               │
│   • Dashboard HMI berbasis AAS Submodel API             │
│   • Validasi ε_sync < ε_threshold                       │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Integrasi dengan Cyber-Physical Assembly Transfer System

De Marchi, Rojas, dan Mark (2022) menyusun arsitektur DT untuk *assembly transfer system* yang mengandalkan konveyor, lengan robotik, dan sistem visi. Integrasi dengan AAS-DT 5G mengikuti pola *digital thread* di mana:

- **Status fisik** → *PLC* (Siemens S7-1500 atau Beckhoff CX) → *OPC UA Server* → *AAS Submodel*
- **AAS Submodel** → *MQTT Broker* (HiveMQ/EMQX) → *DT Engine* (Azure Digital Twins atau BaSyx)
- **DT Engine** → *Control Command* → *5G URLLC Slice* → *Field Device*

Pendekatan ini memungkinkan *reconfiguration* sistem perakitan melalui *AAS Submodel Update* tanpa intervensi manual pada *field bus* fisik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik Otomotif — Cell Produksi Body-in-White (BiW)

Sebuah pabrik otomotif di Eropa mengimplementasikan private 5G (n78 band, 3,5 GHz) untuk menghubungkan 24 *gNodeB* dengan 150 *Automated Guided Vehicle* (AGV) dan 12 *welding robot* ABB IRB 6700. Kapasitas produksi target: 60 unit/jam.

### 4.2 Parameter Input

| Parameter | Nilai | Satuan |
|---|---|---|
| Bandwidth per sel ($B$) | 100 | MHz |
| SCS ($\mu = 1$) | 30 | kHz |
| Daya transmisi gNodeB ($P$) | 46 | dBm |
| Noise