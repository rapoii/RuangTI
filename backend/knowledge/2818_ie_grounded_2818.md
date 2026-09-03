# 2818 — Asset Administration Shell (AAS) sebagai Arsitektur Digital Twin Sistem Komunikasi 5G untuk Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah memicu konvergensi mendalam antara sistem manufaktur fisik dan representasi digitalnya melalui paradigma *Cyber-Physical Production Systems* (CPPS). Dalam konteks ini, komunikasi nirkabel generasi kelima (5G) muncul sebagai enabler strategis karena kapabilitas *Ultra-Reliable Low-Latency Communication* (URLLC), *Enhanced Mobile Broadband* (eMBB), dan *Massive Machine-Type Communication* (mMTC) yang didefinisikan oleh ITU-R IMT-2020. Akan tetapi, integrasi 5G ke dalam lantai produksi tidak dapat dilepaskan dari kebutuhan akan representasi aset yang *machine-readable*, *interoperable*, dan *semantically rich*. Kebutuhan inilah yang menjadi landasan utama paper Cavalieri, Di Natale, dan Gambadoro (2024) yang dipublikasikan dalam *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* dengan DOI [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822).

Karya tersebut mengusulkan adopsi *Asset Administration Shell* (AAS) — sebuah spesifikasi referensi dari *Plattform Industrie 4.0* dan distandardisasi melalui IEC PAS 63088 serta DIN SPEC 91345 — sebagai kerangka formal untuk membangun *digital twin* dari sistem komunikasi 5G. Urgensi penelitian ini bersifat multidimensional: (i) dari sisi ekonomi, *downtime* jaringan komunikasi 5G privat di lingkungan industri dapat menyebabkan kerugian produksi hingga ratusan ribu Euro per jam pada lini *high-mix low-volume*; (ii) dari sisi teknis, parameter Quality of Service (QoS) 5G seperti latensi *end-to-end*, jitter, packet loss, dan reliability harus dimonitor secara *real-time* untuk menjamin Service Level Agreement (SLA) aplikasi misi-kritis seperti *motion control* (≤ 1 ms latensi) dan *mobile robotics*; serta (iii) dari sisi rekayasa sistem, interoperabilitas antara vendor Radio Access Network (RAN) yang heterogen (Ericsson, Nokia, Huawei, Samsung) membutuhkan *common semantic data model*.

Studi pendukung De Marchi, Rojas, dan Mark (2022) dalam DOI [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329) memperkuat justifikasi ini dengan mendemonstrasikan arsitektur digital twin pada *Cyber-Physical Assembly Transfer System*, di mana aset transfer (konveyor, robot, gripper) direpresentasikan secara hierarkis dengan *state variables* yang terus-menerus disinkronkan dengan fisik. Kedua paper ini bersama-sama membentuk *body of knowledge* yang menunjukkan bahwa AAS tidak hanya relevan untuk aset manufaktur konvensional, melainkan juga untuk aset komunikasi yang menjadi *backbone* sistem industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Formal Asset Administration Shell

AAS didefinisikan secara formal sebagai pasangan terstruktur antara *Asset* (entitas fisik atau logis) dan *Administration Shell* (representasi digitalnya). Formulasi himpunan:

$$
\mathcal{AAS} = \langle \mathcal{A}, \mathcal{S} \rangle, \quad \mathcal{S} = \bigcup_{i=1}^{n} \mathcal{SM}_i
$$

di mana $\mathcal{A}$ adalah himpunan atribut fisik aset, dan $\mathcal{SM}_i$ adalah *submodel* ke-$i$ yang masing-masing merepresentasikan aspek spesifik (misalnya *Identification*, *Capability*, *Communication*, *Diagnosis*). Setiap submodel berisi kumpulan *Property* dan *Operation*:

$$
\mathcal{SM}_i = \{ (p_j, v_j, t_j) \mid p_j \in \mathcal{P}_i, \, v_j \in \mathcal{V}, \, t_j \in \mathbb{R}^+ \}
$$

dengan $p_j$ adalah nama properti, $v_j$ nilai terukur, dan $t_j$ *timestamp* pengukuran. Pendekatan ini menjamin *traceability* temporal untuk audit industri.

### 2.2 Model State-Space untuk Digital Twin 5G

Perilaku dinamis jaringan 5G dalam domain waktu diskrit dimodelkan melalui persamaan *state-space*:

$$
\mathbf{x}[k+1] = \mathbf{A}\,\mathbf{x}[k] + \mathbf{B}\,\mathbf{u}[k] + \mathbf{w}[k]
$$
$$
\mathbf{y}[k] = \mathbf{C}\,\mathbf{x}[k] + \mathbf{D}\,\mathbf{u}[k] + \mathbf{v}[k]
$$

di mana $\mathbf{x}[k] \in \mathbb{R}^n$ merepresentasikan *state* jaringan (antrian buffer, alokasi Resource Block, level interferensi), $\mathbf{u}[k]$ adalah *input* kontrol (jadwal transmisi, *beamforming vector*), $\mathbf{y}[k]$ adalah *output* terukur (throughput, latensi), sedangkan $\mathbf{w}[k]$ dan $\mathbf{v}[k]$ adalah *process noise* dan *measurement noise* yang diasumsikan berdistribusi Gaussian $\mathcal{N}(\mathbf{0}, \mathbf{Q})$ dan $\mathcal{N}(\mathbf{0}, \mathbf{R})$.

### 2.3 Model Latensi End-to-End URLLC

Latensi total komunikasi URLLC didekomposisi sesuai arsitektur 5G NR 3GPP TS 38.913:

$$
L_{e2e} = L_{proc}^{UE} + L_{queue} + L_{tx} + L_{prop} + L_{proc}^{BS} + L_{backhaul}
$$

Untuk target 99.999% reliability pada paket 32 byte, *bound* probabilistik didekati dengan *effective SINR*:

$$
P_{success} = \mathbb{P}\!\left[ \mathrm{SINR}_{eff} \geq \mathrm{SINR}_{threshold} \right] = 1 - Q\!\left( \frac{\mathrm{SINR}_{threshold} - \overline{\mathrm{SINR}}}{\sigma_{\mathrm{SINR}}} \right)
$$

di mana $Q(\cdot)$ adalah *complementary cumulative distribution function* Gaussian. Persamaan ini menjadi dasar bagi submodel *Communication* dalam AAS untuk mengkuantifikasi tingkat keandalan.

### 2.4 Throughput 5G NR

Throughput agregat downlink 5G NR pada bandwidth $B$ dihitung melalui:

$$
R = N_{PRB} \cdot N_{SC}^{RB} \cdot N_{symb}^{slot} \cdot N_{bits}^{mod} \cdot \rho_{code} \cdot \frac{N_{slots}^{frame}}{T_{frame}}
$$

dengan $N_{PRB}$ jumlah *Physical Resource Block*, $N_{SC}^{RB}=12$ *subcarrier* per PRB, $N_{symb}^{slot}=14$ simbol OFDM per slot (numerologi $\mu=0$), $\rho_{code}$ *code rate*, dan $T_{frame}=10$ ms.

### 2.5 Model Sinkronisasi Waktu Twin-Fisik

*Clock skew* antara AAS server dan aset fisik dimodelkan:

$$
\Delta t = t_{AAS} - t_{phy}, \quad \sigma_{\Delta t}^2 = \sigma_{tx}^2 + \sigma_{prop}^2 + \sigma_{rx}^2 + \sigma_{proc}^2
$$

di mana masing-masing varians merepresentasikan kontribusi ketidakpresisian pada protokol *Precision Time Protocol* (PTP, IEEE 1588v2) atau *White Rabbit*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk jaringan 5G mengikuti prosedur rekayasa 7-tahap yang diadopsi dari metodologi paper Cavalieri et al. (2024) dengan referensi silang ke arsitektur De Marchi et al. (2022):

**Tahap 1 — Analisis Aset (Asset Identification).** Inventarisasi komponen fisik RAN 5G: gNodeB, Antena Massive MIMO, Edge Computing Node, *Industrial Router*, *Network Slice*. Tentukan *boundary* sistem dan *interface* elektromekanis.

**Tahap 2 — Desain Skema Submodel.** Definisikan *submodels* AAS sesuai standar DIN SPEC 91345:
- *IdentificationCard* (ManufacturerURI, ProductFamily, SerialNumber)
- *CommunicationProfile* (5QI, GBR, DelayBudget)
- *CapabilityDescription* (maxMIMO, supportedBands, slicingSupport)
- *OperationalData* (live KPIs: latency, jitter, packet loss)
- *Diagnostics* (alarm history, predictive maintenance)

**Tahap 3 — Pemilihan Protokol Transport.** Pilih protokol interoperabel: **HTTP/REST** atau **MQTT** untuk transport, **OPC UA Companion Specification** untuk *machine-to-machine*, serta **AASX Package Explorer** untuk authoring.

**Tahap 4 — Implementasi Digital Twin Server.** Deploy *AAS Server* (misalnya BaSyx, SAP AAS, atau Eclipse Ditto) di *edge cloud* dengan *time-series database* (InfluxDB/TimescaleDB) untuk menyimpan $\mathbf{y}[k]$.

**Tahap 5 — Integrasi Sensor & Aktuator RAN.** Pasang *Telemetry Agents* pada elemen jaringan 5G menggunakan *gNMI* (gRPC Network Management Interface) atau *NETCONF/YANG*. Kalibrasi *timestamp* dengan PTP Grandmaster.

**Tahap 6 — Kalibrasi Model & Validasi State-Space.** Estimasi matriks $\mathbf{A}, \mathbf{B}, \mathbf{C}, \mathbf{D}$ melalui identifikasi *subspace* (N4SID atau MOESP). Validasi dengan *cross-validation* menggunakan 70% data latih dan 30% data uji.

**Tahap 7 — Operasi & Continuous Improvement.** Aktifkan *closed-loop control*: prediksi anomali → trigger *self-healing* pada *Network Slice* → update submodel. Pastikan *cybersecurity* dengan *mutual TLS* dan *role-based access control*.

Diagram alir sederhana: **Aset Fisik 5G → Sensor → Telemetry → AAS Server → Time-Series DB → Digital Twin Model → Dashboard / API → Operator / MES / ERP**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Lini Perakitan Otomotif dengan 5G Privat

Sebuah pabrik OEM otomotif di Stuttgart mengoperasikan lini perakitan dengan 24 robot kolaboratif (*cobot*) yang dikendalikan melalui 5G privat (band n78, 3.5 GHz, bandwidth 100 MHz). Parameter operasional:

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Numerologi | $\mu$ | 1 (subcarrier spacing 30 kHz) |
| Slot duration | $T_{slot}$ | 0.5 ms |
| Bandwidth total | $B$ | 100 MHz |
| Jumlah PRB | $N_{PRB}$ | 273 |
| Modulasi | $N_{bits}^{mod}$ | 64-QAM → 6 bit/symbol |
| Code rate | $\rho_{code}$ | 0.93 |
| MCS target | — | Index 11 (256-QAM, CR=0.93) |

### 4.2 Perhitungan Throughput Maksimum

Subcarrier spacing untuk $\mu=1$ adalah $\Delta f = 30$ kHz. Setiap PRB menggunakan $N_{SC}^{RB}=12$ subcarrier selama $N_{symb}^{slot}=14$ simbol OFDM per slot. Mengacu pada persamaan throughput di Bagian 2.4 dengan koreksi numerologi:

$$