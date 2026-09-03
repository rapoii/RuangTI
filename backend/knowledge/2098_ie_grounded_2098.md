# 2098 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Siber-Fisik Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses telah memasuki babak baru melalui adopsi *cyber-physical production systems* (CPPS) yang dimungkinkan oleh Platform Industri 4.0. Salah satu pilar fundamental dalam arsitektur referensi *Reference Architecture Model Industry 4.0* (RAMI 4.0) adalah *Asset Administration Shell* (AAS) — sebuah representasi digital standar dari aset fisik yang memungkinkan interoperabilitas lintas vendor, lintas protokol, dan lintas domain (Cavalieri, Di Natale, & Gambadoro, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Dalam konteks ini, AAS bukan sekadar *digital twin* pasif, melainkan berfungsi sebagai *active digital twin* yang mampu melakukan akuisisi data real-time, menyediakan antarmuka layanan terstandarisasi, dan mengorkestrasi interaksi antara aset fisik dengan lapisan operasional.

Urgensi industrialisasi konsep ini tampak pada kompleksitas integrasi sistem komunikasi 5G ke dalam lantai produksi. Berbeda dengan protokol *industrial Ethernet* konvensional (seperti PROFINET, EtherCAT, atau Modbus TCP) yang bersifat *deterministic* namun terbatas pada topografi *field-bus* lokal, jaringan 5G memperkenalkan paradigma *network slicing* yang memungkinkan alokasi *bandwidth*, *latency*, dan *reliability* secara dinamis sesuai kebutuhan aplikasi industri. Cavalieri dkk. (2024) menyoroti bahwa tantangan utama integrasi 5G ke dalam arsitektur RAMI 4.0 adalah lemahnya *tooling* dan tidak adanya model *digital twin* standar yang mampu merepresentasikan kemampuan jaringan 5G (seperti *base station*, *core network*, *radio unit*) sebagai aset industri tingkat pertama. Padahal, kemampuan jaringan komunikasi merupakan *enabler* strategis untuk *real-time control*, *predictive maintenance*, dan *closed-loop optimization* di pabrik cerdas.

Dari perspektif ekonomi, pasar 5G industri (*private 5G networks* dan *5G campus networks*) diproyeksikan tumbuh signifikan karena permintaan akan *ultra-reliable low-latency communication* (URLLC) untuk aplikasi mission-critical seperti AGV (*Automated Guided Vehicle*), *collaborative robot* (cobot), dan sistem visi mesin. De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) memperkuat perspektif ini dengan menunjukkan bahwa *digital twin* pada *cyber-physical assembly transfer system* membutuhkan komunikasi *deterministic* dengan latensi di bawah 10 ms agar *control loop* tetap stabil. Tanpa model AAS untuk jaringan komunikasi 5G, integrator sistem akan menghadapi *integration debt* yang sangat besar: setiap *slice*, setiap *QoS flow*, dan setiap parameter *radio resource management* harus dipetakan secara manual ke dalam submodel aset — sebuah pekerjaan yang tidak skalabel.

Kontribusi Cavalieri dkk. (2024) menjawab tantangan ini dengan mengusulkan *Digital Twin* berbasis AAS untuk seluruh subsistem komunikasi 5G (gNodeB, 5GC, O-RU, O-DU, O-CU, UE, dan *transport network*). Pendekatan ini mengadopsi *metamodel* AAS yang distandarisasi oleh *Plattform Industrie 4.0* dan IEC PAS 63278, sehingga aset jaringan telekomunikasi dapat diperlakukan sebagai *I4.0 component* biasa. Dengan cara ini, prinsip-prinsip *plug-and-produce* dapat diterapkan tidak hanya pada mesin produksi, tetapi juga pada infrastruktur komunikasi. Makalah ini sekaligus menjadi penghubung penting antara komunitas *telecommunications engineering* (3GPP, O-RAN ALLIANCE) dengan komunitas *industrial automation* (VDI/VDE, ZVEI, IEC), yang selama ini berjalan dalam *silo* metodologis dan ontologis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model *Asset Administration Shell* sebagai *Active Digital Twin*

AAS menurut standar IEC PAS 63278-1 didefinisikan sebagai struktur data hierarkis yang merepresentasikan identitas, kemampuan, dan status aset industri. Secara matematis, suatu AAS instance $A$ dapat diformulasikan sebagai tuple:

$$A = \langle I, S, V, O, E, C \rangle$$

di mana:
- $I$ = *Identification* (misal: global asset ID berbasis URI, e.g., `https://supplier.com/aas/5g-gNB/001`)
- $S$ = himpunan *Submodel* $S = \{S_1, S_2, \ldots, S_n\}$
- $V$ = himpunan *Value* / *Property* pada setiap submodel
- $O$ = himpunan *Operation* (layanan yang dapat di-invoke)
- $E$ = himpunan *Event* (notifikasi berbasis MQTT/OPC UA Pub-Sub)
- $C$ = *Capability* (termasuk *Skill* declaration)

Setiap submodel $S_i$ merepresentasikan aspek tertentu dari aset. Cavalieri dkk. (2024) merancang *Submodel Templates* spesifik untuk domain 5G, seperti *CommunicationProfile*, *QoSPolicy*, *NetworkSliceDescriptor*, dan *RadioResourceStatus*.

### 2.2 Model Kualitas Layanan (QoS) Jaringan 5G untuk URLLC

Kinerja komunikasi 5G untuk aplikasi industri dimodelkan melalui tiga metrik utama: *end-to-end latency* ($L$), *reliability* ($R$), dan *throughput* ($T$). Untuk *slicing* URLLC, Cavalieri dkk. (2024) mengadopsi model 3GPP TS 28.554, di mana *latency budget* total suatu *slice* adalah:

$$L_{total} = L_{UE} + L_{radio} + L_{transport} + L_{5GC} + L_{app}$$

dengan:
$$L_{radio} = \frac{1}{\mu_{sched}} + T_{HARQ} + T_{tti}$$

di mana $\mu_{sched}$ adalah *scheduling rate* pada gNodeB, $T_{HARQ}$ adalah waktu retransmisi *Hybrid ARQ*, dan $T_{tti}$ adalah durasi *transmission time interval* (pada 5G NR, $T_{tti}$ = 0.125 ms untuk *numerology* $\mu = 3$, yaitu *subcarrier spacing* 120 kHz).

*Reliability* didefinisikan sebagai probabilitas keberhasilan transmisi paket dalam waktu $L_{max}$:

$$R = P(\text{packet delivered within } L_{max})$$

Untuk URLLC, target tipikal adalah $R \geq 1 - 10^{-5}$ (yaitu *five-nines reliability*).

### 2.3 Model Sinkronisasi *Digital Twin* (State Mirroring)

Digital twin harus mempertahankan kesamaan status dengan aset fisik. De Marchi dkk. (2022) memformulasikan *synchronization error* $\varepsilon(t)$ sebagai selisih antara status dunia maya $x_{DT}(t)$ dan status fisik $x_{phy}(t)$:

$$\varepsilon(t) = \| x_{DT}(t) - x_{phy}(t) \|_2$$

dengan *update* dinamis:

$$x_{DT}(t + \Delta t) = f_{DT}(x_{DT}(t), u_{DT}(t)) + g(y(t - \tau))$$

di mana $f_{DT}$ adalah model internal *digital twin*, $g(\cdot)$ adalah fungsi koreksi berbasis data sensorik $y$, dan $\tau$ adalah *network-induced delay*. Untuk menjamin stabilitas *control loop* pada *assembly transfer system*, De Marchi dkk. (2022) menurunkan batas stabilitas Lyapunov:

$$\tau < \frac{\pi}{2 \omega_c}$$

dengan $\omega_c$ adalah *crossover frequency* dari *open-loop transfer function* sistem kendali. Untuk *closed-loop control* pada AGV dengan $\omega_c = 50$ rad/s, batas $\tau \approx 31.4$ ms, sehingga 5G URLLC dengan *latency* 5–10 ms memenuhi syarat.

### 2.4 Model *Network Slicing* sebagai Submodel AAS

Setiap *slice* 5G direpresentasikan oleh submodel AAS dengan parameter:

$$\text{Slice}_k = \langle \text{SST}, \text{SD}, \{L_{max}, R_{min}, T_{min}, A_{req}\} \rangle$$

dengan SST = *Slice/Service Type* (1 = eMBB, 2 = URLLC, 3 = mMTC), SD = *Slice Differentiator*, $A_{req}$ = area cakupan. Submodel ini dipublikasikan ke *AAS Registry* agar dapat ditemukan dan digunakan oleh aset manufaktur (Cavalieri dkk., 2024).

### 2.5 *Capability Description* melalui *Skill* Ontology

Cavalieri dkk. (2024) menggunakan ontologi *Skill* (sesuai spesifikasi *AAS Details of the Asset Administration Shell Part 5*) untuk mendeklarasikan kemampuan komunikasi:

$$\text{Skill} = \langle \text{Name}, \text{Pre}, \text{Post}, \text{Mode} \rangle$$

di mana *Pre* dan *Post* adalah *precondition* dan *postcondition* berbasis *description logic* (DL). Contoh:

$$\text{Pre} \equiv \text{5GSliceAvailable}(\text{URLLC}) \wedge \text{UEAttached}$$

$$\text{Post} \equiv \text{BearerEstablished}(L_{max} \leq 5 \text{ ms})$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Referensi Sistem

Cavalieri dkk. (2024) mengusulkan arsitektur empat lapis:

1. **Lapisan Aset Fisik (Physical Asset Layer):** Meliputi gNodeB (CU + DU), O-RU, 5GC, *transport network* (fronthaul/midhaul/backhaul), dan *user equipment* (sensor, PLC, cobot).
2. **Lapisan Akuisisi Data (Data Acquisition Layer):** *Telemetry agents* berbasis O-RAN YANG/KPM, NETCONF/YANG, atau 3GPP *performance measurements* (TS 28.552) yang mengekspos data ke *AAS server*.
3. **Lapisan AAS / Digital Twin (AAS Layer):** *AAS Server* (implementasi BaSyx, Eclipse Ditto, atau *in-house*) yang meng-host *submodels* untuk setiap aset 5G.
4. **Lapisan Aplikasi Industri (Industrial Application Layer):** MES, SCADA, dan *orchestrator* yang menggunakan AAS API (REST/HTTP, OPC UA, MQTT) untuk mengonsumsi data.

### 3.2 SOP Implementasi Bertahap

**Fase 1 — Inventarisasi & Pemodelan Submodel (4–6 minggu)**
- Lakukan identifikasi seluruh elemen 5G: gNodeB ID, cell ID, sector ID, *band*, *numerology*, MIMO layer.
- Pilih *Submodel Templates* dari repositori *Plattform Industrie 4.0* (submodel *CommunicationProfile*, *TimeSeriesData*, *CapabilityDescription*).
- Pemetaan setiap parameter *performance counter* (misal: RRC success rate, handover success rate, PRB utilization) ke *property* AAS.

**Fase 2 — Pembuatan *Digital Twin* Instance (3–4 minggu)**
- Generate AASX package (file `.aasx` berformat OPC UA Companion) menggunakan *toolkit* seperti Eclipse BaSyx atau AASX Package Explorer.
- Daftarkan setiap *endpoint* AAS ke *AAS Discovery Service* (via DNS-SD atau *AAS Registry*).

**Fase 3 — Integrasi *Closed-Loop* dengan Sistem Manufaktur (4–8 minggu)**
- Koneksikan AAS ke MES melalui *AAS API* (misal: `GET /submodels/{idShort}/submodel-elements/OperationalData`).
- Implementasikan *event-based update*: tiap perubahan $x_{phy}$ memicu *Event* AAS → *subscriber* (MES, SCADA) menerima notifikasi.
- Validasi *synchronization error* $\varepsilon(t)