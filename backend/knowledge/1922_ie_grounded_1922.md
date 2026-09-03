# 1922 — Integrasi Asset Administration Shell dan Arsitektur Digital Twin untuk Sistem Komunikasi 5G serta Sistem Transfer Perakitan Siber-Fisik pada Lantai Produksi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G Industri dan Arsitektur Digital Twin Sistem Transfer Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital lini manufaktur yang dipicu oleh inisiatif *Industrie 4.0* (Jerman) dan *Industrial Internet Consortium* (AS) menuntut representasi digital aset fisik yang tidak lagi bersifat silo, melainkan dapat diorkestrasi secara interoperabel lintas vendor, lintas protokol, dan lintas *Manufacturing Execution System* (MES). Dalam konteks inilah Cavalieri, Di Natale, dan Gambadoro (2024, DOI: 10.5220/0012914200003822) menyumbangkan kajian perintis tentang penerapan *Asset Administration Shell* (AAS) — spesifikasi rujukan dari *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA) — untuk membangun *digital twin* atas **sistem komunikasi 5G industri** (private 5G / *non-public network*, NPN). Urgensi permasalahan bersumber dari tiga faktor simultan: (1) peningkatan densitas perangkat *Industrial Internet of Things* (IIoT) yang membutuhkan *ultra-reliable low-latency communication* (URLLC) dengan target latensi ujung-ke-ujung ≤ 1 ms dan keandalan 99,999 % (3GPP TS 22.261); (2) fragmentasi vendor gNodeB, *core* (5GC), dan *User Equipment* (UE) yang menghasilkan silo data operasional; serta (3) belum tersedianya model informasi standar untuk mendeskripsikan kemampuan (*capabilities*), status koneksi, dan *Quality of Service* (QoS) profil 5G secara semantik-terstruktur.

Sementara itu, De Marchi, Rojas, dan Mark (2022, DOI: 10.5220/0011589900003329) melengkapi lanskap tersebut dengan merancang arsitektur digital twin untuk **sistem transfer perakitan siber-fisik** (*cyber-physical assembly transfer system*), yang merepresentasikan *transfer line*, *conveyor*, dan *automated guided vehicle* (AGV) sebagai entitas cyber-fisik dengan *state* yang terus-menerus disinkronkan ke *shadow twin* di edge/cloud. Kontribusi De Marchi et al. menjadi penting karena menyediakan pola arsitektur tiga-lapis (*perception layer*, *communication layer*, *decision layer*) yang dapat direplikasi Cavalieri et al. untuk ranah 5G, sehingga membentuk benang merah rekayasa: **bagaimana membangun digital twin yang tidak hanya memodelkan aset mekanis tetapi juga infrastruktur komunikasinya** dalam satu orkestrasi AAS yang kohesif.

Secara ekonomis, adopsi AAS-5G twin memungkinkan *capex avoidance* melalui *predictive maintenance* gNodeB, menekan *mean time to repair* (MTTR) hingga 30–45 % menurut laporan IDTA, serta membuka monetisasi baru berupa *Network-as-a-Sensor* di mana parameter radio (RSRP, SINR, throughput seluler) dipakai sebagai *proxy variable* untuk status mesin. Studi-studi tersebut menjadi pijakan bagi dokumen *Knowledge Base* Modul 1922, yang membahas sinergi AAS, digital twin, dan jaringan 5G/URLLC dalam perspektif *Industrial Engineering* dan *Industrial Systems Engineering*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model State-Space Digital Twin 5G

Cavalieri et al. (2024) memformalkan digital twin sistem 5G sebagai sistem waktu-diskret dengan vektor *state* $\mathbf{x}_k \in \mathbb{R}^n$ yang merepresentasikan parameter radio dan operasional gNodeB pada waktu $k$. Persamaan *state-transition* ditulis:

$$
\mathbf{x}_{k+1} = \mathbf{A}\,\mathbf{x}_k + \mathbf{B}\,\mathbf{u}_k + \mathbf{w}_k, \qquad \mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{Q})
$$

dengan $\mathbf{A}\in\mathbb{R}^{n\times n}$ adalah matriks transisi (misalnya koefisien autoregresif untuk throughput), $\mathbf{B}\in\mathbb{R}^{n\times m}$ adalah matriks kontrol terhadap *beamforming vector* $\mathbf{u}_k$, dan $\mathbf{w}_k$ adalah *process noise* kovarians $\mathbf{Q}$. Persamaan observasi terhadap data *Key Performance Indicator* (KPI) 5G yang dihimpun via *O-RAN* atau vendor *Network Management System* (NMS) adalah:

$$
\mathbf{y}_k = \mathbf{C}\,\mathbf{x}_k + \mathbf{v}_k, \qquad \mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{R})
$$

dengan $\mathbf{C}$ adalah *measurement matrix* dan $\mathbf{v}_k$ adalah *measurement noise*. Solusi rekursif *Kalman Filter* yang dipakai *twin engine* adalah:

$$
\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k\left(\mathbf{y}_k - \mathbf{C}\hat{\mathbf{x}}_{k|k-1}\right)
$$

dengan gain Kalman:

$$
\mathbf{K}_k = \mathbf{P}_{k|k-1}\,\mathbf{C}^\top\!\left(\mathbf{C}\,\mathbf{P}_{k|k-1}\,\mathbf{C}^\top + \mathbf{R}\right)^{-1}
$$

### 2.2 Model Latensi URLLC dan Jitter

Latensi paket URLLC pada *user plane* dimodelkan dengan distribusi umum *Weibull* berparameter bentuk $\beta$ dan skala $\eta$:

$$
F_{\text{LAT}}(t) = 1 - \exp\!\left[-\left(\frac{t}{\eta}\right)^{\beta}\right], \quad t \geq 0
$$

Probabilitas packet memenuhi *budget* latensi $T_{\max}=1$ ms adalah:

$$
P(L \leq T_{\max}) = 1 - \exp\!\left[-\left(\frac{T_{\max}}{\eta}\right)^{\beta}\right]
$$

Untuk *jitter* didefinisikan sebagai standar deviasi $\sigma_J$ dari selisih antar-paket kedatangan, sedangkan *reliability* packet $R_p$ dalam jangka waktu $T$ untuk laju error $\epsilon$ mengikuti *outage constraint* 3GPP:

$$
R_p = (1 - \epsilon)^N, \quad N = \left\lceil \frac{T}{T_{\text{packet}}}\right\rceil
$$

### 2.3 Fungsi Objektif Optimasi Trade-off Coverage–Capacity–Reliability

Cavalieri et al. menurunkan fungsi multi-tujuan untuk konfigurasi *digital twin parameter* yang merepresentasikan *capability* AAS (submodel *Capability* dan *OperationalData*):

$$
\max_{\boldsymbol{\theta}} \; \alpha \, C(\boldsymbol{\theta}) + \beta \, \mathrm{Cov}(\boldsymbol{\theta}) + \gamma \, R_p(\boldsymbol{\theta})
\quad \text{s.t.} \quad P_{\text{total}} \leq P_{\max}, \; \boldsymbol{\theta} \in \Theta
$$

dengan $C$ adalah kapasitas Shannon (bps/Hz), $\mathrm{Cov}$ cakupan geografis, $R_p$ keandalan packet, $P_{\text{total}}$ adalah *transmit power* agregat, dan bobot $\alpha+\beta+\gamma = 1$.

### 2.4 Sinkronisasi Twin dalam Sistem Transfer Perakitan (De Marchi et al.)

De Marchi, Rojas, dan Mark (2022) memformulasikan *synchronization error* antara *physical asset* dan *cyber shadow*:

$$
\varepsilon_k = \| \mathbf{s}_k^{\text{phys}} - \hat{\mathbf{s}}_k^{\text{cyber}} \|_2
$$

dengan $\mathbf{s}_k^{\text{phys}}$ vektor *state* fisik AGV/*transfer line* (posisi, kecepatan, torsi motor), dan $\hat{\mathbf{s}}_k^{\text{cyber}}$ estimator *cyber*. *Mean synchronization error* dalam horizon $[0,T]$ :

$$
\bar{\varepsilon} = \frac{1}{T}\int_0^T \varepsilon(t)\,dt
$$

dengan *Service Level Agreement* (SLA) industri: $\bar{\varepsilon} \leq \varepsilon_{\text{SLA}}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Arsitektur rekayasa mengikuti *Reference Architectural Model Industry 4.0* (RAMI 4.0) dan *Asset Administration Shell* specification dari IDTA (Detail of the Asset Administration Shell, *Part 1* & *Part 2*). Prosedur implementasi sistematis sebagai berikut:

**Langkah 1 — Identifikasi Aset 5G dan Perakitan.** Buat inventaris aset berupa gNodeB, *centralized unit* (CU), *distributed unit* (DU), antena MIMO, AGV, dan *transfer conveyor*. Setiap aset diberi *global asset identifier* (GAID) sesuai IEC 61406-1 dan *International Registration Data Identifier* (IRDI).

**Langkah 2 — Konstruksi Submodel AAS.** Cavalieri et al. (2024) menyusun submodel sebagai berikut:
- *Nameplate* (IRDI `0173-1#01-ABR999#001`)
- *Identification* (manufacturer, serial, GTIN)
- *Documentation* (manual, sertifikat)
- *Capability* (bandwidth, frekuensi, MIMO layers, *slicing profile*)
- *OperationalData* (KPI 5G real-time)
- *Health* (status degradasi gNodeB)
- *Communication* (alamat OPC UA endpoint, MQTT topic)

**Langkah 3 — Pemetaan Protokol Komunikasi.** Gunakan *OPC UA over TSN* untuk kontrol deterministik dan *MQTT 5.0* untuk telemetri ringan, sesuai pola De Marchi et al. (2022) yang memisahkan *control plane* (OPC UA Pub/Sub) dari *data plane* (MQTT-SN untuk AGV). Protokol *NetConf/YANG* digunakan untuk *configuration management* gNodeB via *O-RAN M-Plane*.

**Langkah 4 — Deploy Twin Engine.** Instal *twin engine* berbasis *Kalman Filter* (persamaan 2.1–2.4) pada *edge node* (NVIDIA Jetson atau industrial PC) di lantai pabrik, dengan *cloud twin* di *private cloud* untuk *long-term analytics*.

**Langkah 5 — Integrasi dengan MES/ERP.** Publish seluruh *submodel* AAS ke *AAS Repository* (misalnya BaSyx) lalu hubungkan ke *SAP Digital Manufacturing Cloud* atau *Siemens Opcenter* melalui *AAS API Service*.

**Langkah 6 — Kalibrasi & Validasi.** Bandingkan estimasi $\hat{\mathbf{x}}_{k|k}$ dengan data NMS riil; verifikasi bahwa residual inovasi $\mathbf{y}_k - \mathbf{C}\hat{\mathbf{x}}_{k|k-1}$ memiliki *white-noise property* melalui uji Ljung-Box.

**Langkah 7 — Continuous Commissioning.** Lakukan *predictive maintenance* mingguan dengan *Prophet* atau *LSTM* terhadap submodel *Health*.

Diagram alir proses (sintetis sesuai metodologi paper):

```
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│ Asset 5G &  │───▶│ Submodel AAS │───▶│ AAS Repository  │
│ Transfer    │    │ (Nameplate,  │    │ (BaSyx / AASX)  │
│ Line        │    │ Capability,  │    └────────┬────────┘
└─────────────┘    │ Operational) │             │
                   └──────────────┘             ▼
                   ┌──────────────┐    ┌─────────────────┐
                   │ NMS / SCADA  │───▶│ Twin Engine     │
                   │ (KPI 5G)     │    │ (Kalman Filter) │
                   └──────────────┘    └────────┬────────┘
                                                ▼
                                       ┌─────────────────┐
                                       │ MES / ERP /     │
                                       │ Predictive Mx.  │
                                       └─────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
