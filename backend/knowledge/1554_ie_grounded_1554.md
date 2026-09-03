# 1554 — Rekayasa Digital Twin Berbasis Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah mendorong kebutuhan akan representasi digital aset industri yang tidak hanya sekadar *mirror* statis, melainkan entitas hidup yang mampu melakukan sinkronisasi dua arah dengan aset fisiknya. Konsep *Asset Administration Shell* (AAS), yang distandarkan oleh *Plattform Industrie 4.0* dan kini diformalkan dalam IEC 63278, muncul sebagai kerangka interoperabilitas utama untuk merealisasikan Digital Twin (DT) aset industri dalam arsitektur *Reference Architecture Model Industry 4.0* (RAMI 4.0). Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti satu titik kritis yang selama ini luput dari literatur: **jaringan komunikasi 5G itu sendiri merupakan aset industri yang harus memiliki Digital Twin berbasis AAS**, bukan sekadar menjadi media transmisi data. Pendekatan ini mengatasi fragmentasi yang selama ini terjadi karena operator 5G menggunakan model manajemen berbasis 3GPP, sementara integrator OT/IT di lantai pabrik menggunakan AAS sebagai *lingua franca* interoperabilitas. Tanpa *bridge* semantik antara keduanya, terjadi *semantic gap* yang menghambat integrasi CPS (*Cyber-Physical Systems*) [DOI: 10.5220/0012914200003822].

Urgensi ekonomi dan teknis dari penelitian ini didorong oleh proliferasi *private 5G networks* di fasilitas manufaktur — diproyeksikan mencapai lebih dari USD 8,5 miliar secara global pada 2027 menurut estimasi pasar telekomunikasi industri. Setiap *gNodeB*, *User Plane Function* (UPF), dan *Network Slice* memiliki karakteristik *Key Performance Indicators* (KPI) seperti latensi *Ultra-Reliable Low-Latency Communication* (URLLC) di bawah 1 ms, *jitter* <0,1 ms, dan *availability* 99,999%. Tanpa Digital Twin, operator tidak dapat melakukan *predictive maintenance*, *closed-loop optimization*, maupun validasi perubahan konfigurasi jaringan sebelum diterapkan ke infrastruktur fisik yang berdampak pada lini produksi bernilai jutaan dolar per jam.

Di sisi hilir, sistem transfer perakitan *cyber-physical* yang dikaji oleh De Marchi, Rojas, dan Mark (2022) menunjukkan bahwa keberhasilan orkestrasi lini perakitan sangat bergantung pada kualitas *feedback loop* antara aktuator fisik (konveyor, robot, lengan transfer) dengan pengendali sibernya [DOI: 10.5220/0011589900003329]. Kedua paper ini, ketika digabungkan, membangun narasi bahwa **infrastruktur 5G dan sistem transfer fisik lantai pabrik adalah dua lapisan CPS yang harus didigital-twin-kan secara holistik menggunakan prinsip AAS**, agar *commissioning*, *predictive maintenance*, dan *reconfiguration* dapat dilakukan secara konsisten lintas-domain.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Metamodel Asset Administration Shell (AAS)

AAS didefinisikan sebagai *standardized digital representation* dari sebuah aset. Formulasi matematis untuk sebuah instance AAS adalah:

$$\text{AAS} = \langle \text{ID}_{aas}, \text{ID}_{asset}, \mathcal{S}, \mathcal{V}, \text{Endpoints} \rangle$$

di mana $\text{ID}_{aas}$ adalah *globally unique identifier* (mengikuti *International Data Spaces* reference), $\text{ID}_{asset}$ adalah *asset identifier* fisik, $\mathcal{S} = \{s_1, s_2, \dots, s_n\}$ adalah himpunan *submodels* (misalnya Submodel *CommunicationProfile*, Submodel *NetworkSlicing*, Submodel *MaintenanceLog*), $\mathcal{V}$ adalah himpunan *asset data* (termasuk *nameplate*, *documentation*, *bill of material*), dan *Endpoints* adalah antarmuka protokol (HTTP, OPC UA, MQTT, Modbus TCP).

Setiap *submodel* memiliki struktur:

$$s_i = \langle \text{ID}_{sm}, \text{IDT}, \mathcal{P}, \mathcal{O}, \mathcal{E} \rangle$$

dengan $\text{ID}_{sm}$ sebagai identifikasi, $\text{IDT}$ = *submodel template ID* (misalnya "urn:samm:io.catenax.1.0.0#CommunicationProfile"), $\mathcal{P}$ himpunan *properties*, $\mathcal{O}$ himpunan *operations*, $\mathcal{E}$ himpunan *events*. Pendefinisian ini mengadopsi *Semantic Aspect Meta Model* (SAMM) agar interoperabel dengan *Eclipse BaSyx* dan platform AAS industri [Cavalieri et al., 2024].

### 2.2 Model Sinkronisasi Digital Twin 5G

State digital twin pada waktu $t$ didefinisikan sebagai:

$$\mathbf{x}_{DT}(t) = \mathbf{f}(\mathbf{x}_{phy}(t-\tau_d), \mathbf{u}(t), \mathbf{w}(t))$$

di mana $\mathbf{x}_{DT}(t) \in \mathbb{R}^n$ adalah vektor state DT (misalnya *throughput*, *latency*, *packet loss*, *PRB utilization*), $\mathbf{x}_{phy}(t-\tau_d)$ adalah state fisik tertunda oleh *synchronization delay* $\tau_d$, $\mathbf{u}(t)$ adalah vektor kontrol, dan $\mathbf{w}(t) \sim \mathcal{N}(\mathbf{0}, \mathbf{Q})$ adalah *process noise*. Cavalieri et al. (2024) mengusulkan penggunaan *Kalman Filter* adaptif untuk estimasi state guna menutup *gap* akibat jitter jaringan:

$$\hat{\mathbf{x}}_{DT}(k|k) = \hat{\mathbf{x}}_{DT}(k|k-1) + \mathbf{K}(k) \left[ \mathbf{z}(k) - \mathbf{H} \hat{\mathbf{x}}_{DT}(k|k-1) \right]$$

dengan *gain* Kalman $\mathbf{K}(k) = \mathbf{P}(k|k-1) \mathbf{H}^T (\mathbf{H} \mathbf{P}(k|k-1) \mathbf{H}^T + \mathbf{R})^{-1}$, di mana $\mathbf{H}$ adalah matriks observasi dan $\mathbf{R}$ adalah kovarian *measurement noise*.

### 2.3 Model Latensi End-to-End URLLC

Untuk transmisi URLLC, total latensi dibatasi oleh:

$$\tau_{e2e} = \tau_{UE} + \tau_{radio} + \tau_{trans} + \tau_{core} + \tau_{app} \leq 1 \text{ ms}$$

di mana:
- $\tau_{UE}$ = latensi pemrosesan *User Equipment* (≈ 0,1 ms)
- $\tau_{radio} = \frac{N_{sym}}{2 \cdot \mu \cdot \text{SCS}}$ (lamanya transmisi radio)
- $\tau_{trans}$ = latensi *fiber backhaul*
- $\tau_{core}$ = latensi *User Plane Function* (UPF) dan *Access and Mobility Management Function* (AMF)
- $\tau_{app}$ = latensi aplikasi (AAS server, OPC UA stack)

Dengan *Subcarrier Spacing* (SCS) $\mu=3$ untuk *Frequency Range 2* (120 kHz) dan satu simbol *mini-slot* $N_{sym}=2$, maka $\tau_{radio} \approx 0,0357$ ms. Inilah salah satu KPI yang dipantau secara *real-time* oleh submodel AAS *CommunicationProfile*.

### 2.4 Model Throughput Shannon untuk Network Slicing

Kapasitas slice $i$ dengan alokasi bandwidth $B_i$ dan SINR $\gamma_i$:

$$C_i = B_i \cdot \log_2(1 + \gamma_i) \quad \text{[bit/s]}$$

AAS memodelkan slice sebagai submodel dengan *property* `allocatedBandwidth`, `guaranteedBitrate`, dan `maxLatency` — yang semuanya *writable* melalui *operation* `SetSliceResources`.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem (Empat Lapisan)

Cavalieri et al. (2024) mengusulkan arsitektur berlapis yang mengintegrasikan elemen 5G (3GPP TS 28.533 manajemen) dengan AAS:

1. **Lapisan Aset Fisik (Field Layer):** gNodeB, antena MIMO masif, server MEC (*Multi-access Edge Computing*), UPF, *Industrial IoT* (IIoT) gateway.
2. **Lapisan Akuisisi Data:** *Performance Management* (PM) *collector* berbasis *Kafka* dan *Prometheus exporters* yang menarik *counters* dari NEF (*Network Exposure Function*) dan *O1 interface* (O-RAN).
3. **Lapisan AAS / DT Core:** *BaSyx AAS Server*, *submodel repository*, *AAS Registry*, *Digital Twin Registry* dengan *Discovery Service* (DNS-SD/mDNS).
4. **Lapisan Aplikasi Industri:** *Manufacturing Execution System* (MES), *SCADA*, *Orchestrator* (ONAP atau *Open Digital Twin*), dashboard *Grafana* untuk *Condition Monitoring*.

### 3.2 Prosedur Implementasi SOP (8 Langkah)

**SOP-01: Identifikasi Aset 5G.** Katalog setiap elemen jaringan: gNodeB ID, gNB-DU, gNB-CU-CP/CU-UP, AMF ID, UPF ID, *Slice ID*. Setiap elemen menerima *Asset ID* (mengikuti *Handle System* / IETF draft).

**SOP-02: Pemilihan *Submodel Template*.** Gunakan *template* terstandar dari repositori *samm.io.catenax* atau *ZVEI* untuk submodel: *CommunicationProfile*, *NetworkSlicing*, *PerformanceMetrics*, *MaintenanceLog*, *AssetLocation*.

**SOP-03: *AAS Modelling & Encoding*.** Bentuk *AASX package* (mengikuti *AutomationML* + OPC UA) menggunakan *Eclipse BaSyx SDK* atau *AAS