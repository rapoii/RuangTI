# 1570 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 menuntut interoperabilitas semantik antar aset fisik, sensor, aktuator, dan sistem kendali yang selama ini terfragmentasi oleh silo-silo vendor. Dalam konteks ini, *Asset Administration Shell* (AAS) yang dikembangkan oleh *Plattform Industrie 4.0* dan distandarisasi sebagai **IEC 63278** muncul sebagai kerangka referensi formal untuk merepresentasikan aset industri secara digital. Cavalieri, Di Natale, dan Gambadoro (2024) — selanjutnya disebut Cavalieri dkk. — menyoroti urgensi kritis: integrasi jaringan komunikasi 5G ke dalam lantai pabrik belum memiliki model digital twin yang sepenuhnya sesuai dengan referensi arsitektur RAMI 4.0, sehingga menghambat interoperabilitas lintas-domain antara *Operational Technology* (OT) dan *Information Technology* (IT) [DOI: 10.5220/0012914200003822].

Kontribusi utama Cavalieri dkk. (2024) adalah spesifikasi submodel AAS untuk entitas 5G, yang menangkap indikator *Quality of Service* (QoS), parameter *Radio Access Network* (RAN), topologi *slicing*, dan *Key Performance Indicators* (KPI) sesuai 3GPP Release 16/17. Pendekatan ini menjawab dua masalah industri konkret: (1) ketergantungan tinggi terhadap solusi proprietary dari vendor *Radio Access Network* (RAN) seperti Ericsson, Nokia, atau Huawei, yang menciptakan *lock-in* arsitektural; dan (2) kebutuhan akan *single source of truth* untuk parameter jaringan yang dapat diakses oleh *Manufacturing Execution System* (MES), *Supervisory Control and Data Acquisition* (SCADA), dan *Enterprise Resource Planning* (ERP) secara konsisten.

Di sisi hilir rantai nilai manufaktur, De Marchi, Rojas, dan Mark (2022) membahas arsitektur digital twin untuk *cyber-physical assembly transfer system* — sistem transfer perakitan siber-fisik yang memindahkan workpiece antar stasiun kerja secara deterministik. Sistem ini memerlukan jaminan latensi ujung-ke-ujung di bawah 10 ms dan tingkat reliabilitas 99,999% (kelas URLLC 5G) agar loop kendali tetap stabil [DOI: 10.5220/0011589900003329]. Kedua paper ini membentuk satu kesatuan naratif: AAS sebagai *information backbone* dan 5G sebagai *communication substrate* yang memungkinkan CPPS (Cyber-Physical Production Systems) beroperasi pada tingkat deterministik yang dibutuhkan manufaktur presisi.

Implikasi ekonominya signifikan. Menurut estimasi yang dikutip dalam literatur Industry 4.0, biaya *downtime* lini perakitan otomotif bernilai €22.000 per menit; integrasi AAS-5G yang andal berpotensi menurunkan *Mean Time To Repair* (MTTR) sebesar 30–50% melalui diagnostik jarak jauh dan prediksi kerusakan berbasis *Remaining Useful Life* (RUL).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Latensi 5G untuk Aplikasi URLLC

Total latensi ujung-ke-ujung dalam jaringan 5G dimodelkan sebagai:

$$L_{total} = L_{UE} + L_{air} + L_{RAN} + L_{transport} + L_{core} + L_{app}$$

dengan:
- $L_{UE}$ = latensi pemrosesan User Equipment (~0,5 ms untuk chipset modern)
- $L_{air}$ = latensi antarmuka radio (propagasi + transmisi)
- $L_{RAN}$ = latensi *gNB-DU* dan *gNB-CU* (Centralized Unit / Distributed Unit)
- $L_{transport}$ = latensi *fronthaul* / *midhaul* (eCPRI, eCPRI Option 7-2x)
- $L_{core}$ = latensi *User Plane Function* (UPF) di 5GC
- $L_{app}$ = latensi aplikasi (misal: controller PLC)

Untuk aplikasi URLLC,约束 $L_{total} \leq 1$ ms untuk paket 32 byte (3GPP TS 22.261).

### 2.2 Kapasitas Shannon dan Throughput Spectral

Kapasitas kanal radio mengikuti teorema Shannon-Hartley:

$$C = B \cdot \log_2(1 + \text{SNR})$$

dengan $B$ adalah bandwidth kanal (Hz) dan SNR adalah *Signal-to-Noise Ratio*. Pada 5G NR *FR1* (sub-6 GHz), lebar pita kanal dapat mencapai 100 MHz per *Component Carrier*, dengan *Carrier Aggregation* hingga 800 MHz pada FR2 (mmWave), menghasilkan throughput puncak teoretis:

$$C_{peak} = \sum_{i=1}^{N_{CC}} B_i \cdot \log_2(1 + \text{SNR}_i) \cdot \nu \cdot Q_m$$

dengan $\nu$ adalah jumlah *MIMO layers* dan $Q_m$ adalah *modulation order* (maks 8 untuk 256-QAM, atau 10 untuk 1024-QAM pada Release 17).

### 2.3 Reliabilitas dan Model Kegagalan Eksponensial

Reliabilitas komunikasi 5G URLLC dimodelkan dengan distribusi eksponensial:

$$R(t) = e^{-\lambda t}, \quad \lambda = \frac{1}{\text{MTBF}}$$

dengan MTBF (*Mean Time Between Failures*) untuk kanal industri kritis ditargetkan ≥ 10⁵ jam. Probabilitas keberhasilan transmisi dalam interval waktu mission-critical:

$$P_{\text{succ}}(T) = 1 - e^{-\lambda T} \geq 1 - 10^{-5}$$

### 2.4 Model Sinkronisasi Digital Twin

Sinkronisasi antara entitas fisik dan representasi AAS-nya memerlukan koherensi temporal yang dimodelkan sebagai:

$$\Delta_{sync}(t) = |s_{physical}(t - \tau) - s_{virtual}(t)|$$

dengan $\tau$ adalah *one-way delay* dan $s$ adalah state vector aset. Untuk sistem transfer perakitan dengan kecepatan conveyor $v$, kesalahan posisi workpiece:

$$\varepsilon_{pos} = v \cdot \Delta_{sync}$$

harus dijaga di bawah ambang toleransi perakitan (umumnya ±0,1 mm untuk *precision assembly*).

### 2.5 Metamodel AAS

AAS遵循 IEC 63278-* yang mendefinisikan struktur hierarkis: `AssetAdministrationShell → Submodel → SubmodelElement (Property | Operation | Event | File | Blob | MultiLanguageProperty | SubmodelElementCollection)`. Setiap elemen memiliki *semantic identifier* berbasis `IRDI` (International Registration Data Identifier) atau `IRI` untuk interoperabilitas lintas-platform.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Prosedur Implementasi AAS untuk Jaringan 5G (berdasarkan Cavalieri dkk. 2024)

**Tahap 1 — Identifikasi Aset dan Domain Komunikasi:**
Inventarisasi seluruh *asset* jaringan: *gNodeB*, *AMF/SMF/UPF*, *Network Slice*, *QoS Flow*, dan *UE*. Setiap entitas dipetakan ke `Asset` AAS dengan `assetKind` (Instance/Type) dan `globalAssetId` berbasis `URN`.

**Tahap 2 — Perancangan Submodel Template:**
Mengacu pada *Submodel Template Repository* Plattform Industrie 4.0, dibuat submodel spesifik:
- *`5GNetworkSliceInformation`*: mendokumentasikan SST (Slice/Service Type: 1=eMBB, 2=URLLC, 3=mIoT), *Default Maximum Bitrate*, dan isolasi sumber daya.
- *`RadioResourceControl`*: parameter *numerology* $\mu \in \{0,1,2,3,4\}$, *Subcarrier Spacing* $\Delta f = 2^{\mu} \cdot 15$