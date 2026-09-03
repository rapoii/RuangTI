# 2786 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G Industri: Arsitektur, Sinkronisasi, dan Integrasi Cyber-Physical Assembly Transfer

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 yang dicetuskan oleh *Plattform Industrie 4.0* menuntut interoperabilitas aset industri pada lapisan semantik, bukan sekadar konektivitas data. Dalam konteks ini, **Asset Administration Shell (AAS)** muncul sebagai *metamodel* standar yang kini diformalkan dalam seri **IEC 63278** (sebelumnya dikenal sebagai *Details of the Asset Administration Shell*), menyediakan representasi digital aset yang terdiri dari beberapa *submodel* merepresentasikan kapabilitas, status, dan histori aset. Per November 2024, kerja standardisasi AAS telah memasuki fase implementasi luas melalui inisiatif *Industrial Digital Twin Association (IDTA)*, di mana lebih dari 60 *submodel* telah diterbitkan resmi untuk domain seperti nameplate, capability description, dan condition monitoring.

Namun, sebagian besar literatur AAS sebelumnya berfokus pada aset fisik (mesin CNC, robot, conveyor), dan mengabaikan **infrastruktur komunikasi** yang menjadi penghubung ekosistem siber-fisik. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *"Asset Administration Shell Digital Twin of 5G Communication System"* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengidentifikasi *gap* ini secara eksplisit. Mereka berargumen bahwa jaringan 5G — dengan kapabilitas **URLLC (Ultra-Reliable Low-Latency Communication)**, **eMBB (enhanced Mobile Broadband)**, dan **mMTC (massive Machine-Type Communication)** — bukan sekadar *transporter* data, melainkan **aset industri** yang perlu memiliki *digital twin* sendiri agar dapat dimonitor, di-*orchestrate*, dan dioptimasi secara deterministik.

Urgensi ekonominya substansial: laporan *Ericsson Mobility Report 2024* memperkirakan bahwa pada 2027, lebih dari **30% koneksi IoT industri** akan berjalan di atas jaringan 5G privat (*non-public network*). Nilai *Total Addressable Market* untuk *private 5G* di manufaktur diproyeksikan melampaui USD 12,6 miliar pada 2030. Tanpa digital twin dari infrastruktur komunikasi itu sendiri, *downtime* jaringan, degradasi *spectrum*, dan anomali *slicing* tidak dapat di-*root-cause analysis* secara real-time, menyebabkan kerugian produksi yang signifikan — studi McKinsey (2023) memperkirakan biaya *unplanned downtime* di industri otomotif mencapai **USD 50.000 per menit**.

Konteks pelengkap diberikan oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) dalam *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"*, yang menunjukkan bagaimana digital twin dari sistem *assembly transfer* membutuhkan komunikasi deterministik berlatensi rendah untuk menjamin koherensi antara dunia fisik (*conveyor*, *indexing table*, *gripper*) dan representasi digitalnya. Kedua makalah ini secara sinergi membangun argumen bahwa **digital twin sistem komunikasi 5G** bukan pilihan, melainkan prasyarat untuk mewujudkan sistem produksi siber-fisik yang *closed-loop* dan *self-optimizing*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel AAS dan Struktur Submodel

AAS mengikuti arsitektur tiga-tingkat: **Asset** (entitas fisik/logis), **AAS** (representasi digital), dan **Submodel** (proyeksi tematik). Secara matematis, AAS dapat diformulasikan sebagai *tuple*:

$$
\mathcal{A} = \langle \mathcal{I}, \mathcal{S}, \mathcal{R} \rangle
$$

di mana $\mathcal{I}$ adalah himpunan *identification* (termasuk `assetID` sesuai IEC 63278-1), $\mathcal{S} = \{s_1, s_2, \ldots, s_n\}$ adalah himpunan *submodel*, dan $\mathcal{R} \subseteq \mathcal{S} \times \mathcal{S}$ adalah relasi antar-submodel (misalnya *references* antar-*submodel element*). Setiap submodel $s_i$ memiliki koleksi *property* dan *operation*:

$$
s_i = \langle P_i, O_i, E_i \rangle, \quad P_i = \{p_{i,1}, p_{i,2}, \ldots\}
$$

di mana $P_i$ adalah himpunan *property* (data point), $O_i$ adalah himpunan *operation*, dan $E_i$ adalah himpunan *event* yang dapat dipublikasikan melalui *AAS API* (saat ini berbasis **HTTP/REST**, **OPC UA**, atau **MQTT** sesuai IEC 63278-5).

### 2.2 Model Latensi dan Keandalan 5G

Untuk mengkuantifikasi kapabilitas jaringan 5G sebagai aset, digunakan model latensi *end-to-end* berikut:

$$
T_{e2e} = T_{UE} + T_{radio} + T_{transport} + T_{core} + T_{app}
$$

dengan:
- $T_{UE}$ = latensi pemrosesan *User Equipment* (~0,5 ms pada URLLC),
- $T_{radio} = \frac{Pkt_{size}}{R_{throughput}} + T_{HARQ}$, di mana $T_{HARQ}$ adalah retransmisi *Hybrid ARQ*,
- $T_{transport}$ = latensi *fronthaul* (eCPRI) atau *backhaul* fiber,
- $T_{core}$ = latensi di *5GC* (5G Core, berbasis *Service-Based Architecture*),
- $T_{app}$ = latensi aplikasi AAS.

Parameter kualitas deterministik diekspresikan melalui **probabilitas keberhasilan transmisi dalam window latensi** $W$:

$$
P_{succ} = \mathbb{P}(T_{e2e} \leq W)
$$

Untuk URLLC, spesifikasi 3GPP TS 22.261 menetapkan $W = 1$ ms dengan $P_{succ} \geq 99{,}999\%$ (yaitu *five-nines reliability*).

### 2.3 Model Sinkronisasi Digital Twin

Koherensi antara *physical asset* (jaringan 5G) dan *digital twin* (AAS) dimodelkan melalui *synchronization error* $e_{sync}(t)$:

$$
e_{sync}(t) = \| x_p(t - \tau) - x_{DT}(t) \|_2
$$

di mana $x_p(t)$ adalah status fisik aktual, $x_{DT}(t)$ adalah status di AAS, dan $\tau$ adalah *transmission delay*. Stabilitas sinkronisasi dipenuhi jika:

$$
\lim_{t \to \infty} e_{sync}(t) \leq \epsilon_{threshold}
$$

dengan $\epsilon_{threshold}$ ditentukan oleh aplikasi (untuk predictive maintenance jaringan, umumnya $\epsilon_{threshold} \leq 5\%$ dari rentang dinamika sinyal).

### 2.4 Kapasitas Kanal Shannon

Untuk submodel yang memuat metrik throughput, kapasitas kanal maksimum $C$ (bps/Hz) diekspresikan oleh teorema Shannon-Hartley:

$$
C = B \cdot \log_2\left(1 + \frac{S}{N}\right)
$$

dengan $B$ = bandwidth (Hz), $S/N$ = *signal-to-noise ratio*. Pada 5G NR FR1 dengan bandwidth 100 MHz dan SNR 20 dB, kapasitas teoritis per *resource block* dapat melampaui 650 Mbps.

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Arsitektur Digital Twin 5G Berbasis AAS

Berdasarkan kerangka yang diuraikan Cavalieri dkk. (2024), arsitektur mengikuti pola berlapis:

```
┌─────────────────────────────────────────────────┐
│  Layer 4: AAS Application Services              │
│  (Predictive Maintenance, Anomaly Detection)    │
├─────────────────────────────────────────────────┤
│  Layer 3: AAS Submodels Repository              │
│  • Submodel "5GNetworkStatus"                   │
│  • Submodel "SliceOrchestration"                │
│  • Submodel "QoSMeasurement"                    │
├─────────────────────────────────────────────────┤
│  Layer 2: AAS API (HTTP/REST, OPC UA, MQTT)     │
├─────────────────────────────────────────────────┤
│  Layer 1: 5G Network Data Sources               │
│  (O1/O2 interface, RAN KPIs, Core metrics)       │
└─────────────────────────────────────────────────┘
```

### 3.2 Prosedur Operasional Standar (SOP) Implementasi

**Tahap 1 — Inventarisasi Aset Jaringan:** Petakan semua elemen jaringan 5G (*gNB*, *AMF*, *SMF*, *UPF*, *CU/DU*, *RU*) sebagai entitas *Asset* dengan `assetID` unik sesuai ISO 23247.

**Tahap 2 — Desain Submodel:** Pilih *submodel* standar dari *IDTA Submodel Registry* atau buat *submodel* khusus. Untuk sistem 5G, setidaknya diperlukan:
- **Submodel Nameplate**: identitas vendor, model, serial, firmware.
- **Submodel 5G Network Status**: *property* seperti `cellLoad`, `activeUEs`, `PRB utilization`, `throughput`, `latency`.
- **Submodel Slice**: parameter *network slice* (SST, SD, *isolation level*).

**Tahap 3 — Akuisisi Data:** Konfigurasi *telemetry collector* dari *O-RAN O1 interface* atau *3GPP management APIs* untuk mengekstrak **Key Performance Indicator (KPI)** setiap 100 ms.

**Tahap 4 — Implementasi AAS Server:** Deploy *BaSyx* (Eclipse), *GraphDB*, atau