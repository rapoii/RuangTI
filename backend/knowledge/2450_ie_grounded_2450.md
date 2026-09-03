# 2450 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transferi Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 mendorong integrasi mendalam antara aset fisik (*physical asset*) dan representasi digitalnya melalui konsep *Digital Twin* (DT). Dalam kerangka *Reference Architecture Model Industry 4.0* (RAMI 4.0) yang dipromosikan oleh *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA), konsep *Asset Administration Shell* (AAS) muncul sebagai tulang punggung interoperabilitas semantik antar perangkat, mesin, dan sistem kendali. Salvatore Cavalieri, Raffaele Di Natale, dan Salvatore Gambadoro (2024), dalam makalah yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), secara eksplisit mengangkat isu krusial: **representasi AAS untuk sistem komunikasi 5G** sebagai prasyarat orchestration jaringan di pabrik pintar (*smart factory*). Urgensi ini muncul karena komunikasi nirkabel 5G—dengan kapabilitas *Ultra-Reliable Low-Latency Communication* (URLLC), *enhanced Mobile Broadband* (eMBB), dan *massive Machine-Type Communication* (mMTC)—menjadi enabler utama mobilitas robot, AGV (*Automated Guided Vehicle*), dan sistem kendali terdistribusi yang sebelumnya bergantung pada kabel *PROFIBUS* atau *EtherCAT*.

Dari sisi ekonomi, pasar *Industrial 5G* diproyeksikan mencapai valuasi triliunan dolar dengan penetrasi di sektor otomotif, semikonduktor, dan logistik. Namun, integrasi 5G ke dalam lini produksi masih menghadapi fragmentasi: perangkat *Radio Access Network* (RAN), *5G Core*, *Multi-access Edge Computing* (MEC), dan *User Equipment* (UE)工业 masing-masing memiliki *information model* tersendiri yang belum sepenuhnya *machine-interpretable*. Tanpa AAS, operator pabrik tidak memiliki *single source of truth* untuk mengonfigurasi *network slice*, memantau *Quality of Service* (QoS), maupun mengorkestrasi ulang slice ketika terjadi *handover* AGV melintasi sel. Cavalieri *et al.* (2024) menjawab tantangan ini dengan mengusulkan skema representasi 5G RAN dan 5G Core ke dalam submodel AAS yang mengikuti spesifikasi *AAS Submodel Template* dari IDTA, sehingga pertukaran data dapat berlangsung secara *semantic interoperability*.

Konteks ini diperkuat oleh riset Matteo De Marchi, Rafael Rojas, dan Benedikt Mark (2022) yang dipublikasikan dalam *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)). Mereka merancang arsitektur DT untuk *Cyber-Physical Assembly Transfer System* (CP-ATS) yang mengandalkan protokol *OPC UA over 5G*, *MQTT*, dan *ROS 2* untuk sinkronisasi state antara lini perakitan fisik dan *virtual commissioning* di cloud. CP-ATS menjadi *use case* nyata bagaimana DT berbasis AAS dapat menurunkan *time-to-market* dan *commissioning cost* hingga 30–40% melalui *front-loading* simulasi. Sinergi kedua paper menunjukkan bahwa **AAS bukan sekadar wrapper data, melainkan fondasi semantik yang memungkinkan 5G dan DT beroperasi sebagai satu sistem kendali terpadu**, sehingga insinyur industri, integrator sistem, dan operator jaringan memiliki bahasa bersama dalam mengelola produksi modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis AAS sebagai Representasi Aset

AAS secara formal dapat dimodelkan sebagai pasangan tupel:

$$\mathcal{A} = \langle \mathcal{I}, \mathcal{S}, \mathcal{M}, \mathcal{V} \rangle$$

di mana $\mathcal{I}$ adalah *identification* (misalnya *global asset id* berbasis URI), $\mathcal{S}$ adalah himpunan *submodel*, $\mathcal{M}$ adalah *asset model reference* (misalnya klasifikasi menurut *IEC 61360*/*ECLASS*), dan $\mathcal{V}$ adalah *value* yang terikat pada *property* di dalam *submodel*. Cavalieri *et al.* (2024) memanfaatkan formalisme ini untuk merepresentasikan elemen 5G, di mana setiap *gNodeB*, *AMF*, *SMF*, dan *UPF* direpresentasikan sebagai instans AAS independen yang saling terkait melalui *reference*.

Untuk setiap *submodel* $s \in \mathcal{S}$, struktur datanya mengikuti pola *property*:

$$s = \{ p_i \}_{i=1}^{n}, \quad p_i = \langle \text{idShort}, \text{semanticId}, \text{valueType}, \text{value}_i, t_i \rangle$$

dengan $t_i$ adalah *timestamp* nilai $p_i$. Inilah yang memungkinkan *time-series analytics* dan deteksi anomali secara real-time.

### 2.2 Model Kualitas Layanan (QoS) Jaringan 5G

Kinerja *network slice* 5G untuk URLLC dalam konteks industri dapat diformulasikan melalui tiga metrik utama: *latency* $L$, *packet loss* $\epsilon$, dan *throughput* $T$. *End-to-end latency* untuk satu *transmission time interval* (TTI) didekfinisikan:

$$L_{\text{e2e}} = L_{\text{tx}} + L_{\text{prop}} + L_{\text{queue}} + L_{\text{proc}}$$

dengan:
- $L_{\text{tx}}$ = durasi transmisi (untuk numerologi $\mu$ dan *slot duration* $T_{\text{slot}} = 2^{-\mu}$ ms),
- $L_{\text{prop}}$ = *propagation delay* sepanjang链路光纤 ($= d / (2 \cdot 10^8)$ untuk $d$ dalam meter),
- $L_{\text{queue}}$ = delay antrian mengikuti model *M/D/1* atau *M/M/1*,
- $L_{\text{proc}}$ = delay *gNB-DU*, *gNB-CU*, *AMF*, dan *UPF*.

URLLC mensyaratkan $L_{\text{e2e}} \leq 1$ ms dengan tingkat keandalan $1 - \epsilon \geq 99{,}999\%$ ($5$ *nine*). Cavalieri *et al.* (2024) menggunakan parameter ini sebagai *property* AAS sehingga *Manufacturing Execution System* (MES) dapat melakukan *closed-loop orchestration*.

### 2.3 Model Sinkronisasi Digital Twin–Physical Asset

Sinkronisasi antara DT dan aset fisik mengikuti persamaan *state observer* diskret:

$$\hat{x}_{k+1} = A\hat{x}_k + Bu_k + L(y_k - C\hat{x}_k)$$

dengan $\hat{x}_k$ adalah *state estimate* DT, $u_k$ adalah *control input*, $y_k$ adalah pengukuran fisik, dan $L$ adalah *observer gain* yang dipilih dari solusi *Riccati* agar *synchronization error* $e_k = x_k - \hat{x}_k$ konvergen asimptotik:

$$\lim_{k \to \infty} \| e_k \| \leq \varepsilon_{\text{max}}$$

Batas toleransi $\varepsilon_{\text{max}}$ ditentukan oleh *application-level SLA*, misalnya $\varepsilon_{\text{max}} \leq 0{,}1$ mm untuk posisi AGV atau $\varepsilon_{\text{max}} \leq 5$ ms untuk *phase offset* pada lini sinkronisasi. De Marchi *et al.* (2022) menunjukkan bahwa *event-driven synchronization* (berbasis *publish/subscribe* OPC UA) menurunkan beban jaringan dibanding *polling periodik* hingga 60%.

### 2.4 Indikator Kinerja Overall Equipment Effectiveness (OEE)

Kombinasi AAS-5G dan DT CP-ATS memungkinkan perhitungan OEE secara *real-time*:

$$\text{OEE} = A \cdot P \cdot Q$$

dengan:
- $A = \dfrac{T_{\text{operating}}}{T_{\text{planned}}}$ (*Availability*),
- $P = \dfrac{T_{\text{actual cycle}}}{T_{\text{theoretical cycle}}}$ (*Performance*),
- $Q = \dfrac{N_{\text{conforming}}}{N_{\text{total}}}$ (*Quality*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS-DT untuk sistem komunikasi 5G dan CP-ATS mengikuti kerangka SOP 7-tahap yang konsisten dengan rekomendasi kedua paper rujukan:

### SOP-01: *Asset Identification & Semantic Mapping*
1. Inventarisasi aset fisik (gNodeB, AGV, workstation) lengkap dengan *globalAssetId* berformat URI.
2. Pemetaan ke *ECLASS* atau *IEC 61360* *property dictionary* agar *semanticId* valid.
3. Penetapan *asset kind* (tipe *Instance* vs. *Type*) sesuai spesifikasi IDTA.

### SOP-02: *Submodel Template Selection*
1. Pilih submodel baku IDTA: *Nameplate*, *TechnicalData*, *OperationalData*, *Capability*.
3. Untuk elemen 5G, Cavalieri *et al.* (2024) merekomendasikan submodel khusus *5GSliceConfiguration*, *5GKPIMonitoring*, dan *5GFailureHandling*.
3. Untuk CP-ATS, De Marchi *et al.* (2022) menambahkan *TransferState*, *PayloadProperties*, dan *CommissioningHistory*.

### SOP-03: *5G Network Slicing Provisioning*
1. Definisikan *slice profile* dengan parameter $L_{\text{e2e}}$, $\epsilon$, dan *area of service*.
2. Buat *Network Slice Subnet Instance* (NSSI) melalui *3GPP TS 28.530* compliant orchestrator (misalnya ONAP atau Nephio).
3. Ekspos parameter slice sebagai *property* AAS sehingga MES dapat melakukan *monitoring & reconfiguration*.

### SOP-04: *DT Initialization & Virtual Commissioning*
1. Bangun geometri 3D aset (*JT*, *STEP*, atau *glTF*) ke dalam *digital twin platform* (contoh: *Eclipse BaSyx*, *Mindsphere*, *Azure Digital Twins*).
2. Lakukan *virtual commissioning* dengan *functional mock-up unit* (FMU) mengikuti standar *Functional Mock-up Interface* (FMI 2.0/3.0).
3. Validasi bahwa *state* DT konvergen ke *state* fisik dalam toleransi $\varepsilon_{\text{max}}$.

### SOP-05: *Data Acquisition & Synchronization*
1. Pasang sensor dan protokol OPC UA Pub/Sub atau MQTT 5.0 di atas 5G *network slice*.
2. Konfigurasi *event filter* agar hanya *state change* yang dikirim.
3. Hitung *synchronization latency* rata-rata $L_{\text{sync}}$ dan masukkan ke *KPI dashboard*.

### SOP-06: *Closed-Loop Control & Anomaly Detection*
1. Implementasikan *state observer* (persamaan pada §2.3) dengan *observer gain* $L$ hasil *offline tuning*.
2. Aktifkan *anomaly detection* berbasis *autoencoder* LSTM; threshold ditetapkan $3\sigma$ dari residual $\|y_k - C\hat{x}_k\|$.
3. Trigger *reconfiguration slice* atau *rerouting AGV* ketika ambang terlampaui.

### SOP-07: *Continuous Improvement & Lifecycle Update*
1. Catat seluruh *event* ke *AAS Logbook*.
2. Lakukan *firmware-over-the-air* (FOTA) update sesuai IEC 62443.
3. Review *KPI* triwulan: OEE, *mean time to repair* (MTTR), *network slice availability*.

### Diagram Alir Arsitektur