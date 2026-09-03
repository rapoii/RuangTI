# 2370 — Digital Twin *Asset Administration Shell* (AAS) untuk Sistem Komunikasi 5G Industri: Arsitektur, Sinkronisasi, dan Rekayasa Sistem Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Asset Administration Shell* (AAS) Digital Twin untuk Sistem Komunikasi 5G
**Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. **Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)**. SciTePress. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. **Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)**. SciTePress. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur dan proses mengandaikan integrasi erat antara entitas fisik (*Physical Asset*) dan representasi sibernya (*Cyber Asset*). Standar referensi global untuk representasi tersebut ialah *Asset Administration Shell* (AAS), yang dicanangkan oleh *Plattform Industrie 4.0* dan kini dilanjutkan oleh *Industrial Digital Twin Association* (IDTA). Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalahnya yang dipublikasikan pada **ICINCO 2024** (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menegaskan bahwa celah riset yang belum terjawab adalah bagaimana AAS—yang awalnya dirancang untuk aset mesin produksi—diaplikasikan pada **infrastruktur komunikasi nirkabel 5G**, yang kini menjadi *backbone* komunikasi mesin-ke-mesin (*Machine-to-Machine*/M2M) dan komunikasi latensi-ultra-rendah (*Ultra-Reliable Low-Latency Communication*/URLLC).

Urgensi keilmuan dan industrialnya bersifat三重 (triple): (a) ekonomi—karena *downtime* pada lini produksi modular bernilai €8.000–€25.000 per menit (Capgemini Engineering, 2022); (b) teknis—karena parameter 5G seperti *latency*, *jitter*, dan *packet error rate* (PER) bervariasi terhadap mobilitas aset, beban interferensi, dan *hand-over* seluler; serta (c) arsitektural—karena AAS menyediakan model informasi berstandar IEC 63278 dan ISO 23247 yang memungkinkan interoperabilitas lintas-vendor. Lebih lanjut, De Marchi, Rojas, dan Mark (2022) pada **IN4PL 2022** (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa sistem *cyber-physical assembly transfer* memerlukan arsitektur digital twin berlapis (lapisan persepsi, transmisi, kontrol, dan layanan), yang persis menjadi *use case* ideal untuk meng-*deploy* AAS pada jaringan 5G pabrik.

Konteks industri saat ini didorong oleh adopsi *private 5G* (kampus network) di sektor otomotif (Mercedes-Benz Factory 56), semikonduktor (TSMC), dan *smart warehouse* (DHL, IKEA). Lebih dari 1.300 *campus network* 5G telah beroperasi secara global per akhir 2023 (GSA, 2024). Sistem ini wajib memenuhi kebutuhan deterministik untuk kontrol gerakan robot kolaboratif (*cobot*), AGV (*Automated Guided Vehicle*), dan sistem visi mesin yang memerlukan *throughput* data >1 Gbps dengan latensi ujung-ke-ujung (*End-to-End*/E2E) ≤1 ms pada skenario URLLC, atau ≤20 ms pada *enhanced Mobile BroadBand* (eMBB). Oleh karena itu, modul ini membahas secara mendalam bagaimana AAS berfungsi sebagai *digital twin* sistem komunikasi 5G agar para insinyur industri dapat melakukan *what-if analysis*, pemeliharan prediktif, dan optimalisasi jaringan secara real-time.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Informasi AAS

AAS didefinisikan oleh spesifikasi *Details of the Asset Administration Shell* (IDTA, 2023) sebagai entitas digital yang merepresentasikan aset industri melalui **submodel**. Setiap submodel tersusun atas elemen (`SubmodelElement`) yang dapat berupa *Property*, *MultiLanguageProperty*, *Operation*, *Event*, dan *ReferenceElement*. Model matematis untuk satu instance AAS dapat ditulis sebagai hima:

$$
\mathcal{A} \;=\; \bigl\{\, I_d,\; \mathcal{M},\; \mathcal{S},\; \mathcal{R} \,\bigr\}
$$

di mana hima:
- hima adalah identifikasi global AAS (berdasarkan *URN* atau *IRDI*);
- hima adalah metadata administratif (misalnya `idShort`, `administration`);
- hima adalah himpunan submodel hima, dengan hima;
- hima adalah himpunan *endpoint* protokol (HTTP, OPC UA, MQTT).

### 2.2 Representasi 5G dalam AAS

Cavalieri dkk. (2024) memodelkan subsistem 5G—*gNodeB*, *User Equipment* (UE), *5G Core*, dan *Network Slice*—sebagai **submodel AAS** dengan *Property* yang merepresentasikan *Key Performance Indicator* (KPI) radio. Kapasitas *throughput* seluler 5G NR pada *bandwidth* hima (Hz), *numerology* hima, dan *Modulation and Coding Scheme* (MCS) indeks hima mengikuti persepsi Shannon yang dimodifikasi 3GPP TS 38.306:

$$
C_{\text{cell}} \;=\; \nu \cdot N_{\text{PRB}} \cdot 12 \cdot Q_m(\iota) \cdot R_c(\iota) \cdot \bigl(1 - \text{OH}\bigr) \cdot 10^{-6}
\quad [\text{Mbps}]
$$

dengan hima adalah jumlah *Physical Resource Block* aktif, hima adalah jumlah bit per simbol modulasi (4 untuk 16-QAM, 6 untuk 64-QAM, 8 untuk 256-QAM), hima adalah *code rate* efektif MCS, dan hima adalah *overhead* (≈0,14 pada 5G NR FR1).

### 2.3 Model Latensi Ujung-ke-Ujung (E2E)

Total latensi transmisi untuk satu paket data dalam jaringan 5G URLLC (3GPP TR 38.913) tersusun atas empat komponen utama:

$$
L_{\text{E2E}} \;=\; L_{\text{tx}} + L_{\text{prop}} + L_{\text{queue}} + L_{\text{proc}}
$$

dengan hima adalah latensi transmisi radio (jumlah simbol OFDM × durasi simbol), hima adalah *propagation delay* (sekitar hima, dengan hima = kecepatan cahaya), hima adalah latensi antrian di *gNodeB* yang mengikuti model *M/D/1* (kedatangan Poisson, layanan deterministik), dan hima adalah latensi pemrosesan protokol (≈1 ms pada 5GC SBA).

Untuk model antrian *M/D/1*, waktu tunggu rata-rata *Pollaczek–Khinchine* adalah:

$$
\mathbb{E}[W_q] \;=\; \frac{\rho}{2(1-\rho)} \cdot \mathbb{E}[S]
$$

dengan hima adalah utilisasi server (offered load), dan hima adalah waktu layanan deterministik. Probabilitas paket memenuhi tenggat latensi hima dapat dihitung dengan distribusi probabilitas latensi:

$$
P(L_{\text{E2E}} \leq L_{\max}) \;=\; 1 - e^{-\lambda \cdot (L_{\max} - L_{\text{det}})}
\quad \text{(asumsi memori-less residual)}
$$

dengan hima = hima, dan hima = hima hima (latensi deterministik minimum).

### 2.4 Reliabilitas URLLC

Reliabilitas didefinisikan sebagai probabilitas keberhasilan transmisi hima paket dalam waktu hima:

$$
R \;=\; \bigl(1 - \text{BLER}(\text{SNR})\bigr)^N_{\text{rep}}
$$

di mana hima = *Block Error Rate* yang bergantung pada *Signal-to-Noise Ratio* dan MCS, sedangkan hima = jumlah transmisi repetitif (umumnya hima = 1 untuk eMBB; hima = 4 untuk URLLC tingkat keandalan 99,999%). SNR dihitung dengan rumus propagasi *path-loss* logaritmik:

$$
\text{SNR}_{\text{dB}} \;=\; P_{\text{tx}} - PL(d) - N_0 - 10\log_{10}(BW)
$$

dengan hima (dBm), hima = hima hima hima (dengan hima = eksponen path-loss, tipikal 3,5–4 untuk lingkungan industri), hima (dBm/Hz), dan hima = *bandwidth* kanal (Hz).

### 2.5 Model Sinkronisasi Digital Twin

Sinkronisasi antara *Physical Asset* (jaringan 5G riil) dan *Cyber Asset* (AAS) dimodelkan oleh Cavalieri dkk. (2024) melalui timestamp `LastUpdate` pada setiap *Property* AAS. *Skew* sinkronisasi didefinisikan:

$$
\Delta t_{\text{sync}} \;=\; t_{\text{cyber}} - t_{\text{phys}} \;=\; \tau_{\text{pub}} + \tau_{\text{net}} + \tau_{\text{bus}}
$$

di mana hima adalah interval publikasi sensor, hima adalah latensi jaringan transport AAS (umumnya MQTT/HTTP), dan hima adalah latensi bus industrial (OPC UA, ≥10 ms). Untuk memenuhi *real-time* digital twin, hima harus kurang dari 0,1 × hima hima (aturan turun-sepersepuluh Nyquist untuk kontrol diskret).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan AAS Digital Twin untuk jaringan 5G mengikuti kerangka rekayasa berlapis yang diadaptasi dari De Marchi dkk. (2022) dan diperluas oleh Cavalieri dkk. (2024):

### Langkah 1 — Identifikasi Aset dan Pemetaan Kepentingan (*Asset Identification*)

Inventarisasi seluruh entitas 5G: *gNodeB* (CU/DU/RU), UE (sensor, cobot, AGV), *User Plane Function* (UPF), *AMF/SMF*, dan *edge MEC server*. Tentukan `idShort`, `globalAssetId` (berbasis *URN* `urn:ietf:rfc:8141`), serta klasifikasi *criticality*.

### Langkah 2 — Perancangan Submodel AAS

Definisikan hima submodel spesifik untuk jaringan 5G:
- **Submodel `ConnectivityPerformance`**: berisi *Property* `throughputDL`, `throughputUL`, `latencyE2E`, `jitter`, `packetLossRate`, `RSRP`, `SINR`.
- **Submodel `NetworkSliceInfo`**: berisi `sliceType` (eMBB/URLLC/mMTC), `SST`, `SD`, `QoSProfile` (5QI, GFBR, MFBR).
- **Submodel `LifecycleStatus`**: berisi status operasional `INSTALLED`, `OPERATING`, `MAINTENANCE`.
- **Submodel `DiagnosticData`**: berisi *Operation* `ReadPerformanceLog`, `ResetConnection`.

### Langkah 3 — Pembuatan *AASX Package*

Submodel dikodekan dalam format `.aasx` (berbasis OPC UA XML) atau *AAS JSON* (sesuai `details.aas.json` v3.0 IDTA). Setiap *Property* memiliki *semanticId* yang merujuk pada *ECLASS* atau *IEC Common Data Dictionary* (CDD).

### Langkah 4 — Penerapan Protokol Transport

AAS server di-*expose* melalui:
- HTTP/REST API (port 8080, sesuai *AAS Repository* Specification);
- OPC UA (informal companion spec);
- MQTT 5.0 (untuk jaringan dengan keterbatasan bandwidth).

Rekomendasi Cavalieri dkk. (2024): gunakan *MQTT-SN* (Sensor Network) untuk UE dengan keterbatasan energi, dan *OPC UA over TSN* untuk *edge controller* di lantai pabrik.

### Langkah 5 — Sinkronisasi Data via *AAS Event Submodel*

Setiap perubahan KPI 5G (misalnya `RSRP` turun di bawah −100 dBm) dipublikasikan sebagai `BasicEvent` dengan topik MQTT. Pelanggan (*subscriber*) menerima *push notification* dengan latensi hima < 50 ms.

### Langkah 6 — Integrasi dengan Platform IoT Industri

AAS digital twin 5G diintegrasikan ke platform *Manufacturing Execution System* (MES) seperti Siemens Opcenter, SAP ME, atau open-source *BaSyx* (Eclipse) melalui *Asset Administration Shell Repository*.

### Diagram Alir SOP

```
┌────────────────────┐    ┌──────────────────┐    ┌────────────────────┐
│  Identifikasi Aset │ -> │  Desain Submodel │ -> │ Build AASX Package │
└