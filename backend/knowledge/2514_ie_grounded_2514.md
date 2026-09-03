# 2514 — Asset Administration Shell sebagai Kerangka Digital Twin untuk Sistem Komunikasi 5G dalam Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital sektor manufaktur yang digerakkan oleh paradigma *Industrie 4.0* (I4.0) telah memunculkan kebutuhan akan representasi virtual yang *fidelity*-tinggi terhadap aset fisik produksi. Dalam konteks ini, *Digital Twin* (DT) bukan lagi sekadar replika 3D, melainkan sebuah *instance* digital yang mempertukarkan data secara *real-time* dengan entitas fisiknya melalui protokol komunikasi standar. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalahnya yang diterbitkan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* menekankan bahwa salah satu hambatan terbesar adopsi Digital Twin di lantai pabrik (*shop floor*) adalah ketiadaan model referensi yang mampu menjembatani deskripsi aset fisik (mekanis, elektrik, kontroler) dengan infrastruktur jaringan komunikasi yang menopang interoperabilitasnya.

Urgensi problematika ini menjadi nyata ketika industri bergerak menuju *wireless factory* — sebuah visi di mana sensor, aktuator, robot kolaboratif (cobot), dan AGV (*Automated Guided Vehicle*) berkomunikasi melalui jaringan seluler privat (Private 5G) alih-alih kabel Ethernet industri konvensional. Seperti ditegaskan oleh Cavalieri dkk. (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)), kualitas layanan (*Quality of Service*/QoS) jaringan 5G — yang mencakup latensi *end-to-end*, *jitter*, *throughput*, dan *packet loss rate* — bukan lagi domain eksklusif departemen IT, melainkan menjadi *Key Performance Indicator* (KPI) operasional yang langsung memengaruhi *Overall Equipment Effectiveness* (OEE) lini produksi. Ketika latensi uplink melebihi ambang 10 ms pada aplikasi *motion control*闭环, atau *packet loss* melebihi 10⁻³ pada transmisi data sensor kritis, maka *cycle time* produksi akan terdegradasi dan tingkat *defect* produk melonjak.

Aspek ekonomis dari permasalahan ini tidak dapat diabaikan. Laporan Economic Policy Forum (2023) memperkirakan bahwa downtime tak terjadwal pada sistem komunikasi nirkabel di pabrik pintar dapat menimbulkan kerugian hingga \$50.000 per jam pada lini *semiconductor front-end*. Oleh karena itu, dibutuhkan sebuah pendekatan yang memungkinkan *root cause analysis* masalah komunikasi dilakukan secara sistematis, prediktif, dan terdokumentasi secara formal. Di sinilah *Asset Administration Shell* (AAS) — yang distandarkan oleh *Plattform Industrie 4.0* dan kini diadopsi secara global melalui IEC 63278-1 — berperan sebagai *metamodel* digital twin yang menyediakan struktur semantik formal untuk mendeskripsikan aset beserta kapabilitas komunikasinya.

Studi yang dilakukan oleh De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) pada sistem *Cyber-Physical Assembly Transfer* memberikan justifikasi empiris lebih lanjut: integrasi DT dengan lini transfer fisik menghasilkan peningkatan visibilitas status proses hingga 92% dan penurunan *mean time to repair* (MTTR) sebesar 35%. Kedua paper ini secara komplementer memperkuat argumen bahwa AAS-DT untuk infrastruktur 5G bukan sekadar konsep akademis, melainkan kebutuhan rekayasa industri yang mendesak.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi Asset Administration Shell (AAS)

AAS didefinisikan secara formal oleh *Plattform Industrie 4.0* sebagai representasi digital suatu aset yang terdiri dari *submodels* teridentifikasi yang saling terkait. Cavalieri dkk. (2024) mengadopsi kerangka ini untuk memodelkan entitas jaringan 5G (gNB, UE, *core network function*) sebagai AAS yang masing-masing memiliki *Identification*, *Documentation*, dan *Capability* submodel.

Struktur hierarkis AAS dapat diformulasikan sebagai *tuple* berurut:

$$AAS_i = \langle ID_i, M_{doc,i}, M_{cap,i}, M_{state,i}, M_{comm,i} \rangle$$

di mana:
- $ID_i$ = identifikasi unik aset (misalnya *International Data Space connector ID*)
- $M_{doc,i}$ = himpunan *documentation submodel* (datasheet, manual, *bill of material*)
- $M_{cap,i}$ = himpunan *capability submodel* (fungsi, layanan, API)
- $M_{state,i}$ = *state submodel* (variabel dinamis: status, posisi, parameter operasi)
- $M_{comm,i}$ = *communication submodel* (profil protokol, alamat, QoS)

### 2.2 Formulasi Kualitas Layanan (QoS) Jaringan 5G

Untuk mengkuantifikasi kinerja jaringan 5G yang menjadi perhatian utama Cavalieri dkk. (2024), empat parameter QoS didefinisikan sebagai berikut:

**(a) Latensi End-to-End:**

$$\tau_{e2e} = \tau_{UE} + \tau_{radio} + \tau_{transport} + \tau_{core} + \tau_{app}$$

dengan:
- $\tau_{UE}$ = latensi pemrosesan *User Equipment* (± 1–2 ms)
- $\tau_{radio}$ = latensi *air interface* (5G NR URLLC: 0,5–1 ms pada subcarrier spacing 30 kHz)
- $\tau_{transport}$ = latensi fronthaul/midhaul (tipikal 1–5 ms)
- $\tau_{core}$ = latensi *User Plane Function* (5 ms pada *non-standalone*)
- $\tau_{app}$ = latensi *Application Layer* (tergantung arsitektur AAS)

**(b) Packet Loss Rate:**

$$PLR = \frac{N_{lost}}{N_{sent}} = 1 - (1 - p_{block})^N$$

di mana $p_{block}$ adalah probabilitas pemblokiran paket per transmisi dan $N$ adalah jumlah transmisi ulang (HARQ).

**(c) Throughput:**

$$R = \frac{N_{sc} \cdot N_{sym} \cdot N_{bits,mod} \cdot N_{MIMO}}{T_{frame}} \cdot \eta_{coding}$$

dengan $N_{sc}$ = jumlah *subcarrier*, $N_{sym}$ = simbol OFDM per *frame*, $N_{bits,mod}$ = bit per simbol modulasi (QPSK=2, 16-QAM=4, 64-QAM=6, 256-QAM=8), $N_{MIMO}$ = *spatial streams*, $T_{frame}$ = durasi frame (10 ms), dan $\eta_{coding}$ = *coding rate* (0,1–0,95).

**(d) Jitter:**

$$\sigma_{\tau} = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(\tau_i - \bar{\tau})^2}$$

### 2.3 Model Sinkronisasi Digital Twin

Sinkronisasi antara AAS dan aset fisik 5G dimodelkan oleh Cavalieri dkk. (2024) menggunakan *state update function*:

$$S_{DT}(t+\Delta t) = f_{sync}\big(S_{DT}(t), S_{phys}(t), M_{cap}\big)$$

dengan *synchronization error*:

$$e_{sync}(t) = \|S_{DT}(t) - S_{phys}(t)\|_2$$

Untuk menjamin *consistency*, diturunkan *consistency index*:

$$C = 1 - \frac{\int_{0}^{T} e_{sync}(t) \, dt}{T \cdot S_{ref}}$$

dengan $S_{ref}$ adalah nilai referensi status dan $T$ adalah horizon observasi.

### 2.4 Model Keandalan & Ketersediaan Sistem Komunikasi

Untuk analisis kelayakan industri, ketersediaan sistem AAS-DT didefinisikan sebagai:

$$A_{sys} = \frac{MTBF}{MTBF + MTTR} = \frac{1}{1 + \lambda \cdot MTTR}$$

dengan $\lambda$ = *failure rate* (failures per hour) dan $MTTR$ = *Mean Time To Repair*. Jika kita mengasumsikan $\lambda = 0,001$ failures/hari dan $MTTR = 30$ menit, maka $A_{sys} = 0{,}99999$ (five-nines availability).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur AAS-DT untuk Jaringan 5G Industri

Cavalieri dkk. (2024) mengusulkan arsitektur berlapis yang terdiri dari empat tingkatan:

1. **Physical Layer**: Infrastruktur 5G fisik (gNB, *edge cloud*, *User Equipment*, sensor industri).
2. **AAS Layer**: Representasi digital aset jaringan sebagai *aasx* server-packages sesuai *Specification of the Asset Administration Shell* (Detail AAS Part 1–4).
3. **Service Layer**: *AAS Registry*, *Discovery Service*, dan *AAS Repository* yang berkomunikasi melalui protokol HTTP/REST dan *Message Broker* (AMQP/MQTT).
4. **Application Layer**: *Dashboard* operator, *Predictive Maintenance Module*, dan *Anomaly Detection* berbasis *Machine Learning*.

### 3.2 SOP Implementasi AAS-DT 5G di Pabrik

Berikut adalah *Standard Operating Procedure* (SOP) yang disintesis dari Cavalieri dkk. (2024) dan De Marchi dkk. (2022):

**Langkah 1 — Identifikasi & Klasifikasi Aset Komunikasi**
Lakukan inventarisasi seluruh entitas 5G (gNB indoor/outdoor, UE, *core function*, *edge server*) menggunakan *naming convention* I4.0 dan tetapkan *globally unique identifier*.

**Langkah 2 — Pemodelan Submodel AAS**
Buat submodel menggunakan *AASX Package Explorer* atau *BaSyx SDK*:
- *Identification Submodel* → berisi *manufacturerName*, *serialNumber*, *instanceName*.
- *Communication Submodel* → berisi *endpoint*, *protocolVersion* (misal 3GPP Rel-16), *securityConfig*.
- *State Submodel* → variabel dinamis: $RSSI$, $RSRP$, $RSRQ$, $SINR$, $PLR$, $\tau_{e2e}$.

**Langkah 3 — Integrasi Sensor & Data Ingestion**
Implementasikan *southbound connector* untuk membaca KPI jaringan secara *real-time* melalui *Radio Network Information Service* (RNIS) atau *O1 interface* ke *Service Management & Orchestration* (SMO).

**Langkah 4 — Visualisasi & Pemantauan**
Konfigurasi *AAS Web UI* untuk menampilkan *drill-down* dari *shop floor view* ke tingkat *cell tower* dan individual UE.

**Langkah 5 — Anomali Deteksi & *Closed-Loop* Kontrol**
Aktifkan *Condition Monitoring* dengan ambang batas adaptif:

$$\text{Alert} \iff \tau_{e2e} > \tau_{threshold} \lor PLR > 10^{-3} \lor \sigma_{\tau} > 3 \cdot \sigma_{\tau,ref}$$

**Langkah 6 — Audit & Versioning**
Pertahankan *immutable log* setiap perubahan konfigurasi AAS menggunakan *Distributed Ledger Technology* (DLT) untuk kepatuhan ISO 9001 dan IEC 62443.

### 3.3 Diagram Alir Logika Pengambilan Keputusan

```
[Sensor 5G] → [AAS State Submodel] → [Time-Series DB (InfluxDB)]
                                          ↓
                              [Anomaly Detection Engine]
                                          ↓
                    ┌──────────────┴──────────────┐
            [Normal Operation]              [Anomaly Detected]
                    ↓                                ↓
            [Update Dashboard]         [Trigger Root Cause Analysis]
                                              ↓
                                [Predictive Maintenance Ticket]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah lini produksi *Surface Mount Technology* (SMT) di pabrik *semiconductor* di kawasan industri Cikarang memiliki 24 *pick-and-place machine* yang dikontrol secara nirkabel melalui *Private 5G Network* pada frekuensi 3,5 GHz (n78 band). Jaringan ini terdiri dari 4 *gNB* indoor, 1 *edge cloud* lokal, dan 24 *industrial UE* terpasang pada masing-masing mesin. Target QoS yang diminta aplikasi *motion control*闭环: latensi $\tau_{e2e} \leq 5$ ms, *jitter* $\sigma_{\tau} \leq 0{,}5$ ms, dan $PLR \leq 10^{-4}$.

### 4.2 Perhitungan Throughput Agregat

Dengan asumsi konfigurasi 5G NR sebagai berikut:
- *Bandwidth* saluran: $BW = 100$ MHz
- *Subcarrier spacing*: $\Delta f =