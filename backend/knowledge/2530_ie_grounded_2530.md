# 2530 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur abad ke-21 ditandai oleh konvergensi tiga pilar teknologi: *Cyber-Physical Systems* (CPS), komunikasi nirkabel generasi kelima (5G), dan konsep *Digital Twin* (DT) yang distandarisasi. Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) mempublikasikan karyanya di *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* dengan mengangkat permasalahan fundamental: bagaimana merepresentasikan secara fidelitas-tinggi sebuah sistem komunikasi 5G — yang merupakan *cyber resource* heterogen — ke dalam *Asset Administration Shell* (AAS) sebagai kerangka DT resmi dari *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA). Studi ini lahir dari urgensi bahwa 5G, dengan kapabilitas *Ultra-Reliable Low-Latency Communication* (URLLC), *enhanced Mobile Broadband* (eMBB), dan *massive Machine-Type Communication* (mMTC), telah menjadi *enabler* strategis untuk *smart factory*, namun belum memiliki skema representasi DT yang interoperabel.

Urgensi ekonomi industri tidak dapat dipandang sebelah mata. Komunikasi industri secara tradisional didominasi oleh *Industrial Ethernet* berbasis kabel (misalnya PROFINET, EtherCAT) dengan latensi deterministik di bawah 1 ms. Namun, mobilitas *Automated Guided Vehicle* (AGV), *Autonomous Mobile Robot* (AMR), dan konfigurasi ulang lini produksi (*reconfigurable manufacturing systems*) menuntut fleksibilitas nirkabel. 5G menjawab kebutuhan ini dengan *network slicing* dan integrasi *Time-Sensitive Networking* (TSN). Namun, tanpa DT yang terstandarisasi, operator pabrik tidak memiliki visibilitas real-time terhadap status *base station*, *gNodeB*, *User Plane Function* (UPF), dan kualitas *slicing* — menghambat *predictive maintenance* dan *root-cause analysis* saat *packet loss* atau degradasi throughput terjadi. Seperti ditegaskan oleh Cavalieri *et al.* (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), tanpa AAS-compliant DT, integrasi 5G ke dalam *Digital Twin of the Manufacturing System* (DTMS) akan menghadapi *semantic interoperability gap*. Kajian pelengkap oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* memperkuat premis bahwa arsitektur DT untuk sistem *cyber-physical assembly transfer* memerlukan abstraksi berlapis (*multi-layered abstraction*) — sebuah pendekatan yang diadaptasi oleh Cavalieri *et al.* untuk ranah telekomunikasi.

Dalam perspektif strategis industri, adopsi AAS untuk infrastruktur 5G memungkinkan skenario *cross-domain*: produsen peralatan 5G (seperti Ericsson, Nokia, Huawei), *System Integrator*, dan *end-user* (manufaktur) dapat saling bertukar model aset melalui repositori AASX, mengurangi *vendor lock-in* dan mempercepat *time-to-integration* yang historisnya memakan 6–18 bulan.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritik yang dibangun oleh Cavalieri *et al.* (2024) bersandar pada tiga fondasi matematis: (i) formalisasi AAS sebagai graf berarah, (ii) pemodelan QoS 5G sebagai fungsi stokastik, dan (iii) model sinkronisasi DT-Fisik.

### 2.1 Formalisasi Asset Administration Shell sebagai Graf

AAS dimodelkan sebagai *Directed Acyclic Graph* (DAG) dengan *Submodel* sebagai node dan *ReferenceElement* sebagai edge. Formalnya:

$$\mathcal{G}_{AAS} = (V, E, \mathcal{T})$$

di mana $V = \{v_1, v_2, ..., v_n\}$ adalah himpunan *Submodel*, $E \subseteq V \times V$ adalah himpunan referensi antar-submodel, dan $\mathcal{T}: V \rightarrow \mathcal{S}$ adalah fungsi pemetaan ke *Semantic ID* berbasis *ECLASS* atau *IEC CDD*. Setiap *Property* dalam *Submodel* memenuhi:

$$P_i = \langle id, value, valueType, semanticId, qualifiers \rangle$$

dengan $valueType \in \{xs:string, xs:double, xs:dateTime, ...\}$ dan *qualifier* mendefinisikan *cardinality*, *kind* (contoh: *Log*, *Input*, *Output*), serta *semantic definition*.

### 2.2 Pemodelan Kualitas Layanan 5G

Untuk setiap *network slice* 5G, QoS direpresentasikan oleh tuple tiga-dimensi:

$$\mathbf{Q}_{slice} = \langle \tau_{lat}, \rho_{rel}, \eta_{thr} \rangle$$

dengan:
- $\tau_{lat}$ = latensi end-to-end (ms)
- $\rho_{rel}$ = *reliability* probabilistik ($0 < \rho_{rel} \leq 1$)
- $\eta_{thr}$ = *throughput* (Mbps)

Sesuai spesifikasi 3GPP TS 22.261 dan URLLC requirements:

$$\mathbb{P}\left(\tau_{lat} \leq L_{max}\right) \geq 1 - 10^{-\alpha}$$

di mana $L_{max}$ adalah batas latensi yang dapat diterima (misal 1 ms untuk motion control) dan $\alpha$ adalah parameter *reliability* (umumnya $\alpha = 5$ untuk *five-nines*, yaitu 99.999%).

### 2.3 Model Sinkronisasi Digital Twin

Sinkronisasi antara entitas fisik (5G network) dan DT dimodelkan melalui persamaan *state update* diskret:

$$S_{DT}(t_{k+1}) = S_{DT}(t_k) + \int_{t_k}^{t_{k+1}} f(S_{DT}(\tau), u(\tau)) d\tau + w(t_k)$$

dengan $w(t_k) \sim \mathcal{N}(0, \Sigma)$ adalah *Gaussian noise* yang merepresentasikan *measurement noise* dari telemetry. Deviasi antara state aktual dan DT diukur dengan:

$$\Delta S = \| S_{physical}(t_k) - S_{DT}(t_k) \|_2$$

yang harus dijaga di bawah ambang $\epsilon_{sync}$ untuk menjamin fidelitas DT. Cavalieri *et al.* (2024) mengusulkan *adaptive sampling* berbasis Kalman Filter dengan *gain*:

$$K_k = P_k H^T (H P_k H^T + R)^{-1}$$

di mana $P_k$ adalah kovariansi estimasi error dan $R$ adalah kovariansi noise pengukuran.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS-DT untuk sistem 5G mengikuti SOP berlapis yang terdiri atas tujuh tahapan rekayasa:

**Tahap 1 — *Asset Identification & Scope Definition*.** Inventarisasi elemen 5G: *gNodeB*, *AMF/SMF/UPF* (5GC), *RU/DU/CU* (O-RAN), *SIM/eSIM*, *UE*, dan *network slice*. Penetapan *boundary* aset untuk dimasukkan ke AAS.

**Tahap 2 — *Semantic Reference Anchoring*.** Setiap *Property* di-*binding* ke *Semantic ID* sesuai *ECLASS* (untuk aset industri umum) atau *IEC 61360* (untuk parameter telekomunikasi). Contoh: *Reference SNR* → `0173-1#02-AAZ372#003`.

**Tahap 3 — *Submodel Decomposition*.** Berdasarkan Cavalieri *et al.* (2024), submodel yang direkomendasikan meliputi:
1. *Submodel Nameplate* — identitas statis (vendor, model, serial)
2. *Submodel CommunicationProfile* — parameter PHY/MAC
3. *Submodel QoS Monitoring* — time-series telemetry
4. *Submodel NetworkSliceDescriptor* — konfigurasi slice
5. *Submodel PredictiveMaintenance* — model degradasi
7. *Submodel CapabilityDescription* — *skill* interoperability

**Tahap 4 — *Serialization & Packaging*.** Konversi model ke format `.aasx` (berbasis OPC UA XML) atau `.json` (AAS Part 2 API), dengan *file* `.aasx` berisi tiga *part*: `aasx/aas.json`, `aasx/aas.xml`, dan *file payload* (thumbnail, datasheet PDF).

**Tahap 5 — *Protocol Binding*.** Implementasi *endpoint* sesuai AAS API Part 2:
- HTTP/REST (JSON): `GET /submodels/{idShort}/submodel`
- OPC UA: *companion specification* AAS OPC UA
- MQTT: topik berstruktur `aas/{aasId}/submodel/{submodelId}/value`

**Tahap 6 — *Registry Publication*.** Unggah ke *AAS Repository* (misal *BaSyx* AAS Server, *Eclipse Ditto*, *SAP Asset Performance Intelligence*).

**Tahap 7 — *Validation & Conformance Test*.** Uji kepatuhan terhadap *AAS Specification Part 1–5* menggunakan *AAS Test Suite* (open-source dari IDTA).

Arsitektur logika mengikuti diagram alir tiga-dimensi: **Lateral** (Device ↔ Edge ↔ Cloud), **Vertikal** (Field → Control → Planning), dan **Temporal** (Real-time → Near-real-time → Historical).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik *smart-manufacturing* PT Manufaktur Nusantara dengan lini perakitan AGV berkomunikasi via 5G *private network*. Parameter industri:

| Parameter | Nilai | Satuan |
|---|---|---|
| Jumlah AGV | $N_{AGV} = 24$ | unit |
| Kecepatan garis | $v = 1.2$ | m/s |
| Jarak antar AGV | $d = 3.0$ | m |
| Latensi target | $L_{max} = 5$ | ms |
| Target reliabilitas | $\rho_{rel} = 99.999\%$ | — |
| Throughput per slice | $\eta_{thr} = 50$ | Mbps |
| Packet size | $P_{size} = 256$ | byte |

### Langkah 1: Perhitungan *Round-Trip Time* (RTT) Budget

$$RTT_{budget} = T_{air} + T_{trans} + T_{proc} + T_{queue}$$

Dengan asumsi propagasi *radio*: $T_{air} = 0.5$ ms, transmisi *core*: $T_{trans} = 0.8$ ms, processing *gNodeB*: $T_{proc} = 1.2$ ms, antrian *UPF*: $T_{queue} = 0.5$ ms:

$$RTT_{budget} = 0.5 + 0.8 + 1.2 + 0.5 = 3.0 \text{ ms}$$

### Langkah 2: Probabilitas Pemenuhan SLA Latensi

$$\mathbb{P}(\tau_{lat} \leq 5 \text{ ms}) = 1 - 10^{-5} = 0.99999$$

### Langkah 3: Bandwidth Agregat Total

$$BW_{total} = N_{AGV} \times \eta_{thr} = 24 \times 50 = 1200 \text{ Mbps} = 1.2 \text{ Gbps}$$

### Langkah 4: *Packet Error Rate* Maksimum yang Diizinkan

$$PER_{max} = 1 - \rho_{rel}^{1/N_{packet}}$$

Untuk misi 10 menit dengan *control loop* 100 Hz ($N_{packet} = 60{,}000$):

$$PER_{max} = 1 - (0.99999)^{1/60000} = 1 - e^{-1.