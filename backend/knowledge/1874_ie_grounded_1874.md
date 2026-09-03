# 1874 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri 4.0 telah memunculkan kebutuhan akan representasi digital yang interoperabel terhadap aset fisik di lantai pabrik. Dalam konteks ini, *Asset Administration Shell* (AAS) yang dikembangkan oleh Plattform Industrie 4.0 dan distandarisasi melalui IEC 63278 serta ISO/IEC AWI 23247 muncul sebagai kerangka referensi untuk mendeskripsikan aset industri secara formal, modular, serta dapat dibaca mesin (Cavalieri *et al.*, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Paper utama yang menjadi basis modul ini mengangkat persoalan kritis: bagaimana merepresentasikan infrastruktur komunikasi 5G — yang menjadi *backbone* pabrik pintar — ke dalam *digital twin* berbasis AAS sehingga dapat di-*query*, di-*monitor*, dan di-*orchestrate* secara real-time oleh *Manufacturing Execution System* (MES) dan *Enterprise Resource Planning* (ERP).

Urgensi permasalahan ini bersifat multidimensi. Pertama, dari sisi **ekonomi**, investasi jaringan 5G privat di lingkungan industri mencapai rata-rata €3–7 juta per situs menurut studi konsorsium 5G-ACIA (2023), sehingga *underutilization* jaringan 5G menimbulkan *stranded capital* yang signifikan. Kedua, dari sisi **operasional**, karakteristik 5G *Ultra-Reliable Low-Latency Communication* (URLLC) mensyaratkan *end-to-end latency* di bawah 5 ms dengan tingkat keandalan 99,999% untuk aplikasi *motion control* dan *closed-loop control* — parameter yang hanya dapat dijamin melalui orkestrasi berbasis *digital twin*. Ketiga, dari sisi **teknis**, fragmentasi ekosistem 5G (RAN, core, edge cloud, *network slicing*, dan perangkat UE) menuntut abstraksi data yang konsisten agar interoperabilitas antar-vendor terjamin.

Cavalieri, Di Natale, dan Gambadoro (2024) memproposisi arsitektur AAS yang mampu menjembatani elemen-elemen 5G ke dalam submodel terstruktur mengikuti *metamodel* AAS yang mencakup *Asset*, *Submodel*, *Property*, dan *Capability*. Pendekatan ini paralel dengan kontribusi De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang membangun arsitektur *digital twin* untuk *Cyber-Physical Assembly Transfer System* — keduanya menyiratkan kebutuhan akan representasi status *cyber-physical* yang deterministik, tersinkronisasi, dan dapat diaudit. Dalam ranah teknik industri, integrasi ini berdampak langsung pada peningkatan *Overall Equipment Effectiveness* (OEE), penurunan *Mean Time To Repair* (MTTR), dan akselerasi *commissioning* lini produksi baru.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sinkronisasi Digital Twin 5G–AAS

AAS memodelkan aset 5G sebagai *identifiable asset* $a_i \in \mathcal{A}$ yang masing-masing memiliki himpunan submodel $\mathcal{S}_i = \{s_{i,1}, s_{i,2}, \dots, s_{i,n}\}$. Setiap submodel memiliki properti $p_{i,j,k}$ dengan nilai pada domain waktu diskret $t \in \mathbb{N}$. Status digital twin di waktu $t$ didefinisikan sebagai:

$$
\mathbf{x}_{\text{dt}}(t) = \big\{ p_{i,j,k}(t) \;\big|\; i \in \mathcal{A},\, s_{i,j} \in \mathcal{S}_i,\, p_{i,j,k} \in \mathcal{P}(s_{i,j}) \big\}
$$

sedangkan status fisik di waktu yang sama adalah $\mathbf{x}_{\text{phy}}(t)$. *Synchronization error* didefinisikan sebagai norma L2 antar-keadaan:

$$
\varepsilon(t) = \lVert \mathbf{x}_{\text{dt}}(t) - \mathbf{x}_{\text{phy}}(t) \rVert_2 = \sqrt{\sum_{(i,j,k)} \big( p_{i,j,k}^{\text{dt}}(t) - p_{i,j,k}^{\text{phy}}(t) \big)^2 }
$$

Kualitas *twin* dinyatakan melalui *twin fidelity index*:

$$
F(t) = 1 - \frac{\varepsilon(t)}{\varepsilon_{\max}} \in [0,1]
$$

dengan $\varepsilon_{\max}$ adalah ambang toleransi yang ditetapkan per submodel.

### 2.2 Model Latensi End-to-End 5G URLLC

Total latensi komunikasi untuk kendali loop tertutup pada lantai pabrik mengikuti komposisi latensi sebagai berikut (mengikuti 3GPP TR 38.913):

$$
L_{\text{E2E}} = L_{\text{TX}} + L_{\text{prop}} + L_{\text{queuing}} + L_{\text{proc}} + L_{\text{backhaul}} + L_{\text{edge}}
$$

Untuk URLLC dengan alokasi *mini-slot* 2 OFDM simbol pada subcarrier spacing 30 kHz:

$$
L_{\text{TX,min}} = \frac{2}{30 \times 10^3} \approx 66{,}67~\mu s
$$

*Packet error rate* agregat mengikuti model eksponensial:

$$
R(t) = e^{-\lambda t}, \quad \text{dengan } \lambda = \sum_{i=1}^{m} \lambda_i
$$

di mana $\lambda_i$ adalah *failure rate* per segmen (UE, gNB-DU, gNB-CU, UPF, server edge).

### 2.3 Throughput Jaringan Slicing

Setiap *network slice* $z \in \mathcal{Z}$ memiliki alokasi *resource block* $R_z$ dan *modulation and coding scheme* (MCS) $\mu_z$. Throughput teoritis mengikuti formulasi Shannon yang dimodifikasi:

$$
T_z = R_z \cdot B_{\text{RB}} \cdot \log_2(1 + \text{SINR}_z) \cdot \eta_{\mu_z}
$$

dengan $B_{\text{RB}} = 180~\text{kHz}$, $\text{SINR}_z$ adalah *Signal-to-Interference-plus-Noise Ratio* slice, dan $\eta_{\mu_z} \in (0,1]$ adalah efektivitas MCS. *Aggregate throughput* sistem:

$$
T_{\text{agg}} = \sum_{z \in \mathcal{Z}} T_z \leq T_{\max}^{\text{cell}}
$$

### 2.4 Model OEE Transfer System (Sintesis dari De Marchi dkk., 2022)

Untuk *Cyber-Physical Assembly Transfer System* (CPATS), OEE mengikuti definisi klasik SEMI E10:

$$
\text{OEE} = A \times P \times Q
$$

dengan $A$ = *Availability*, $P$ = *Performance*, $Q$ = *Quality*. Kecepatan transfer efektif:

$$
v_{\text{eff}} = v_{\text{nom}} \cdot (1 - \delta_{\text{slip}}) - v_{\text{decel}} \cdot \mathbb{1}_{\{x \geq x_{\text{stop}}\}}
$$

di mana $\delta_{\text{slip}}$ adalah koefisien slip mekanis dan $x_{\text{stop}}$ adalah posisi deselerasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *Digital Twin* AAS untuk sistem 5G mengikuti tahapan rekayasa sistematis berikut, yang diturunkan dari arsitektur yang diproposisikan Cavalieri *et al.* (2024) dan De Marchi *et al.* (2022):

**Tahap 1 — Pemetaan Aset 5G ke Submodel AAS.**
Lakukan inventarisasi aset $a_i \in \mathcal{A}$ mencakup: *gNB-DU*, *gNB-CU*, *AMF/SMF/UPF* (5GC), *Edge Application Server*, *Network Slice Management Function*, dan *UE* (AGV, robot kolaboratif, sensor). Setiap aset dipetakan ke *Asset Identification* AAS sesuai *Submodel Templates* (IEC 63278-3): *Nameplate*, *CapabilityDescription*, *BillOfMaterial*.

**Tahap 2 — Desain Hierarki Submodel.**
Struktur hierarki mengikuti pola tiga lapis: (a) *Network Submodel* — memuat topologi sel, RSRP/SINR, handover events; (b) *Slice Submodel* — throughput per slice, latensi per slice, *admission control rate*; (c) *Application Submodel* — QoS per aplikasi industri (motion control, video analytics, MQTT telemetry).

**Tahap 3 — Implementasi Antarmuka AAS ↔ 5G.**
Gunakan protokol *AAS Service Repository* berbasis HTTP/REST atau MQTT-SN untuk binding dengan *O1* interface 3GPP. Frekuensi *telemetry push* $\tau$ mengikuti aturan:

$$
\tau \leq \frac{L_{\text{E2E}}}{3}
$$

untuk menjamin *triple redundancy* sebelum degradasi terjadi.

**Tahap 4 — Validasi Synchronization Fidelity.**
Hitung $\varepsilon(t)$ dan $F(t)$ secara kontinu; bila $F(t) < F_{\min} = 0{,}95$ selama lebih dari 5 siklus, sistem memicu *re-synchronization* otomatis.

**Tahap 5 — Integrasi dengan CPATS.**
Submodel transfer system dikorelasikan dengan submodel 5G slice menggunakan *event correlation matrix*:

$$
\mathbf{C}_{ij} = \Pr(\text{event}_i^{\text{CPATS}} \mid \text{event}_j^{\text{5G}})
$$

Diagram alir lengkap mengikuti arsitektur berlapis: *Physical Layer* (sensor/aktuator + RAN 5G) → *Communication Layer* (5GC + Edge) → *Digital Twin Layer* (AAS Server + Submodel Repository) → *Application Layer* (MES/ERP/Analytics).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik perakitan otomotif di kawasan industri dengan 12 AGV yang dikendalikan melalui 5G privat URLLC pada frekuensi 3,5 GHz, bandwidth 100 MHz, 4 slice aktif.

**Langkah 1 — Perhitungan Latensi E2E URLLC untuk AGV *Motion Control*:**

$$
L_{\text{TX}} = \frac{2}{30 \times 10^3} = 6{,}67 \times 10^{-5}~\text{s} = 0{,}067~\text{ms}
$$

Propagasi ruang bebas untuk jarak $d = 50$ m:

$$
L_{\text{prop}} = \frac{d}{c} = \frac{50}{3 \times 10^8} \approx 1{,}67 \times 10^{-7}~\text{s} \approx 0{,}0017~\text{ms}
$$

Queuing pada gNB (M/M/1, $\rho = 0{,}3$):

$$
L_{\text{queuing}} = \frac{\rho}{\mu(1-\rho)} = \frac{0{,}3}{1000(0{,}7)} = 4{,}29 \times 10^{-4}~\text{s} = 0{,}43~\text{ms}
$$

Edge processing: $L_{\text{edge}} = 1~\text{ms}$. Backhaul fiber: $L_{\text{backhaul}} = 0{,}5~\text{ms}$. Total:

$$
L_{\text{E2E}} = 0{,}067 + 0{,}0017 + 0{,}43 + 0{,}5 + 1 = 1{,}999~\text{ms} < 5~\text{ms}~~\checkmark
$$

**Langkah 2 — Perhitungan Reliability dengan Packet Error Rate:**
Asumsikan $\lambda = 2 \times 10^{-6}$ per ms untuk total 2 ms:

$$
R(2) = e^{-2 \times 10^{-6} \times 2} = e^{-4 \times 10^{-6}} \approx