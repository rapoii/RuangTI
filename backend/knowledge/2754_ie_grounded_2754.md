# 2754 — Asset Administration Shell (AAS) Digital Twin Sistem Komunikasi 5G untuk Sistem Cyber-Physical Assembly Transfer

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur bergerak menuju paradigma **Industrie 4.0** dan **Society 5.0**, di mana integrasi antara *cyber-physical systems* (CPS), Internet of Things (IoT), dan komunikasi nirkabel generasi kelima (5G) menjadi pilar utama peningkatan *Overall Equipment Effectiveness* (OEE). Cavalieri, Di Natale, dan Gambadoro (2024, DOI: 10.5220/0012914200003822) menyoroti bahwa implementasi 5G dalam lantai pabrik (*factory floor*) menghadapi tantangan fundamental: belum adanya representasi digital standar yang mampu menjembatani interoperabilitas aset fisik dengan jaringan komunikasi nirkabel privat (private 5G campus networks). Tanpa representasi tersebut, integrasi antara *Machine-to-Machine* (M2M) communication dan *Manufacturing Execution System* (MES) menjadi fragmenter, menghambat pencapaian target *ultra-reliable low-latency communication* (URLLC) yang esensial bagi kontroler闭环 (*closed-loop control*) pada lini produksi.

Dalam konteks industrial Engineering, urgensi ekonomis permasalahan ini cukup signifikan. Laporan internal Ericsson Mobility (2023) mengindikasikan bahwa pasar 5G industri akan mencapai valuasi USD 42,7 miliar pada 2030 dengan CAGR sekitar 30%. Namun, lebih dari 60% proyek *proof-of-concept* (PoC) 5G di manufaktur Eropa gagal melewati fase produksi serial karena lemahnya standardisasi *digital twin* pada lapisan jaringan. Referensi arsitektur **RAMI 4.0** (Reference Architecture Model Industrie 4.0) memperkenalkan *Asset Administration Shell* (AAS) sebagai "paket paspor digital" untuk setiap aset industri, namun adopsi AAS terhadap infrastruktur telekomunikasi 5G — termasuk *gNodeB*, *User Equipment* (UE), dan *5G core network* — masih merupakan area riset terbuka yang menjadi fokus utama paper Cavalieri et al. (2024).

De Marchi, Rojas, dan Mark (2022, DOI: 10.5220/0011589900003329) turut menguatkan konteks bahwa sistem *cyber-physical assembly transfer* — yang sangat bergantung pada komunikasi deterministik latensi rendah antara robot, conveyor, dan AGV (Automated Guided Vehicle) — memerlukan arsitektur digital twin yang mampu menangkap dinamika multi-fisik (mekanik, elektronik, dan jaringan) secara simultan. Kedua paper secara konvergen menunjukkan bahwa digital twin bukan sekadar *3D visualization*, melainkan repositori semantik yang harus mampu melakukan *state synchronization*, *predictive analytics*, dan *configuration management* terhadap aset fisik. Konteks industri inilah yang melatarbelakangi kebutuhan mendesak akan formalisasi AAS untuk domain telekomunikasi 5G dalam kerangka acuan internasional seperti IEC 63278 (AAS), IEC 61850 (substation automation), dan 3GPP TS 22.104 (5G service requirements for cyber-physical control).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi AAS dan Submodel

Berdasarkan spesifikasi **Plattform Industrie 4.0** dan dokumen teknis Detail of the Asset Administration Shell (2022), setiap aset didekomposisi menjadi submodel yang merepresentasikan aspek tertentu. Untuk sistem 5G, Cavalieri et al. (2024) memformulasikan dekomposisi digital twin sebagai tuple berstruktur:

$$AAS_{5G} = \langle ID, S_{nameplate}, S_{handover}, S_{capability}, S_{telemetry}, S_{operational} \rangle$$

di mana masing-masing submodel $S_i$ merupakan submodel AAS yang memenuhi standar IEC 63278-3. Setiap submodel dimodelkan sebagai *property collection* dengan atribut:

$$S_i = \{ (n_k, v_k, t_k, q_k, r_k) \mid k = 1, 2, ..., N_i \}$$

dengan $n_k$ adalah *qualifiable* name (sesuai IEC 61360), $v_k$ adalah *value*, $t_k$ adalah *timestamp* (mengikuti ISO 8601), $q_k$ adalah *quality code* (Baumgart et al., 2020), dan $r_k$ adalah *reference* ke *data specification* template.

### 2.2 Model Komunikasi URLLC 5G

Kinerja *digital twin* dalam melakukan sinkronisasi dengan aset fisik 5G sangat ditentukan oleh parameter Quality of Service (QoS). Cavalieri et al. (2024) mendefinisikan model latensi ujung-ke-ujung (*end-to-end latency*) sebagai:

$$L_{e2e} = L_{UE} + L_{radio} + L_{transport} + L_{core} + L_{application}$$

di mana:
- $L_{UE}$ = latensi pemrosesan *User Equipment* (orde 0,5–2 ms)
- $L_{radio}$ = latensi akses radio $\approx \frac{TTI}{2}$ dengan TTI (Transmission Time Interval) = 1 ms untuk *numerology* $\mu=0$ dan *mini-slot*
- $L_{transport}$ = latensi transport ($\approx$ 0,5 ms untuk fiber backhaul)
- $L_{core}$ = latensi *User Plane Function* (UPF, orde 1 ms)
- $L_{application}$ = latensi *Application Function* (AF)

Untuk mendukung URLLC, *3GPP TS 22.104* mendefinisikan target:

$$L_{e2e} \leq 1\,\text{ms} \quad \text{dan} \quad \text{Reliability} = 1 - 10^{-5}$$

### 2.3 State Synchronization Function

Sinkronisasi state antara AAS dan entitas fisik dimodelkan melalui fungsi pemutakhiran *delta* ($\Delta$-state). Misalkan state aset pada waktu $t$ didefinisikan sebagai vektor $\mathbf{x}(t) \in \mathbb{R}^n$ dengan persamaan keadaan kontinyu:

$$\frac{d\mathbf{x}(t)}{dt} = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) + \mathbf{w}(t)$$

dengan $\mathbf{w}(t)$ adalah *process noise* Gaussian $\mathcal{N}(0, \mathbf{Q})$. Observasi diskrit melalui sensor:

$$\mathbf{z}_k = \mathbf{H}\mathbf{x}(t_k) + \mathbf{v}_k, \quad \mathbf{v}_k \sim \mathcal{N}(0, \mathbf{R})$$

Cavalieri et al. (2024) mengusulkan bahwa AAS harus mampu melakukan estimasi state melalui *Kalman Filter*:

$$\hat{\mathbf{x}}_{k|k} = \hat{\mathbf{x}}_{k|k-1} + \mathbf{K}_k (\mathbf{z}_k - \mathbf{H}\hat{\mathbf{x}}_{k|k-1})$$

dengan *Kalman gain*:

$$\mathbf{K}_k = \mathbf{P}_{k|k-1}\mathbf{H}^T(\mathbf{H}\mathbf{P}_{k|k-1}\mathbf{H}^T + \mathbf{R})^{-1}$$

Covariance update mengikuti:

$$\mathbf{P}_{k|k} = (\mathbf{I} - \mathbf{K}_k\mathbf{H})\mathbf{P}_{k|k-1}$$

Persamaan-persamaan ini memungkinkan AAS bertindak sebagai *state observer* digital twin, melakukan prediksi satu langkah ke depan:

$$\hat{\mathbf{x}}_{k+1|k} = \mathbf{\Phi}\hat{\mathbf{x}}_{k|k} + \mathbf{\Gamma}\mathbf{u}_k$$

dengan $\mathbf{\Phi} = e^{\mathbf{A}\Delta t}$ dan $\mathbf{\Gamma} = \int_0^{\Delta t} e^{\mathbf{A}\tau}\mathbf{B}\,d\tau$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi AAS Digital Twin untuk sistem komunikasi 5G dalam lini *cyber-physical assembly transfer* mengikuti SOP berlapis yang penulis rangkum dari kedua paper rujukan:

### 3.1 Tahapan Rekayasa

**Tahap 1 — Asset Identification & Type Definition.** Setiap komponen 5G (gNodeB, UE, *EtherCAT* bridge, AGV) diidentifikasi menggunakan *Globally Unique Identifier* (GUID) sesuai IEC 63278-1. Type definition dibuat dalam format AASX (AAS eXchange) menggunakan *AASX Package Explorer* dari Fraunhofer IOSB.

**Tahap 2 — Submodel Decomposition.** Berdasarkan Cavalieri et al. (2024), submodel minimal yang wajib adalah: *Identification*, *Capability*, *OperationalData*, *HandoverDocumentation*, *PredictiveMaintenance*. Masing-masing submodel diregistrasi ke *AAS Registry* dengan endpoint `$REGISTRY/aas/{aasId}/submodels/{submodelId}`.

**Tahap 3 — Network Function Virtualization (NFV) Mapping.** Elemen 5G core (AMF, SMF, UPF) dipetakan sebagai *Virtual Network Function* (VNF) yang masing-masing memiliki AAS instance. Pemetaan mengikuti arsitektur *Service-Based Interface* (SBI) 3GPP TS 23.501.

**Tahap 4 — OPC UA over 5G Bridging.** De Marchi et al. (2022) menjelaskan bahwa *transport layer* antara sensor di lini perakitan dan AAS menggunakan protokol OPC UA Pub/Sub over 5G dengan *publisher* di PLC (*Programmable Logic Controller*) S7-1500 Siemens dan *subscriber* di *AAS Server* (BaSyx / Eclipse Ditto).

**Tahap 5 — Closed-Loop Control Validation.** End-to-end latency diukur menggunakan *time-sensitive networking* (TSN) tools dan *ping* packet dengan timestamp GPS PTP (*Precision Time Protocol* IEEE 1588v2). Validasi mengikuti metrik:

$$\text{Jitter}_{RMS} = \sqrt{\frac{1}{N}\sum_{k=1}^{N}(L_k - \bar{L})^2}, \quad L_k = L_{e2e,k}$$

Toleransi jitter RMS untuk aplikasi assembly transfer adalah $\leq 50\,\mu s$.

### 3.2 Diagram Arsitektur

Arsitektur tiga lapis yang diusulkan:

1. **Lapisan Aset Fisik (Field Layer):** Sensor, aktuator, PLC, robot, gNodeB.
2. **Lapisan Komunikasi 5G (Network Layer):** 5G NR + TSN + OPC UA Pub/Sub.
3. **Lapisan Digital Twin (IT Layer):** AAS Server (BaSyx), AAS Registry, Dashboard, ML Pipeline.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Pertimbangkan lini *assembly transfer* pada pabrik *battery electric vehicle* (BEV) di mana 12 AGV berkomunikasi dengan satu *gNodeB* 5G pada frekuensi 3,5 GHz (*band n78*), *bandwidth* 100 MHz, *numerology* $\mu=1$ (subcarrier spacing 30 kHz). Sistem menggunakan *time-sensitive communication* untuk sinkronisasi posisi presisi $\pm 1$ mm.

**Parameter input industri:**

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Jumlah UE (AGV) | $N_{UE}$ | 12 |
| Latensi UE processing | $L_{UE}$ | 1,2 ms |
| Transmission Time Interval | $TTI$ | 0,5 ms (mini-slot) |
| Latensi transport (fiber) | $L_{transport}$ | 0,5 ms |
| Latensi core (UPF) | $L_{core}$ | 1,0 ms |
| Latensi application (AAS) | $L_{application}$ | 0,3 ms |
| Sampling interval sensor | $\Delta t$ | 5 ms |

### 4.2 Perhitungan Step-by-Step

**Langkah 1: Hitung latensi radio akses**

$$L_{radio} = \frac{TTI}{2} = \frac{0{,}5\,\text{ms}}{2} = 0{,}25\,\text{ms}$$

**Langkah 2: Hitung latensi end-to-end total**

$$L_{e2e} = 1{,}2 + 0{,}25 + 0{,}5 + 1{,}0 + 0{,}3 = 3{,}25\,\text{ms}$$

**Langkah 3: Bandingkan terhadap target URLLC**

Karena $L_{e2e} = 3{,}25\,\text{ms} > 1\,\text{ms}$, maka *current configuration* **tidak memenuhi** URLLC strict mode. Namun, untuk aplikasi *non-critical* assembly transfer (posisi presisi 1 mm pada kecepatan 0,5 m/s), toleransi efektif:

$$L_{max} = \frac{\delta_{pos}}{v} = \frac{1 \times 10^{-3}\,\text{m}}{0{,}5\,\text{m/s}} = 2\,\text{ms}$$

Karena $L_{e2e} = 3{,}25\,\text{ms} > L_{max}$, maka sistem memerlukan optimasi.

**Langkah 4: Optimasi dengan *preemption indicator* dan *Configured Grant Type 2***

Penerapan *Scheduling Request* dengan *preemption* (3GPP TS 38.214) menurunkan $L_{radio}$ menjadi $\approx 0{,}125\,\text{ms}$ (1 simbol OFDM):

$$L_{e2e}^{opt} = 1{,}2 + 0
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
