# 1906 — Integrasi Asset Administration Shell Digital Twin untuk Sistem Komunikasi 5G Industri dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur abad ke-21 ditandai oleh konvergensi tiga pilar teknologi operasional: *cyber-physical systems* (CPS), jaringan komunikasi generasi kelima (5G), dan *digital twin* (DT) yang merepresentasikan aset fisik dalam ruang siber secara real-time. Dalam konteks Reference Architecture Model Industry 4.0 (RAMI 4.0) yang diformalisasikan oleh Plattform Industrie 4.0, *Asset Administration Shell* (AAS) muncul sebagai standar interoperabilitas untuk mendeskripsikan aset industri secara semantik, membuka akses terhadap data, fungsi, dan kapabilitas aset melalui antarmuka terstandar (Cavalieri, Di Natale & Gambadoro, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Urgensi operasional dari integrasi AAS dengan jaringan 5G terletak pada kenyataan bahwa lini produksi modern membutuhkan latensi komunikasi sub-millisecond, keandalan packet delivery hingga 99,999%, dan densitas koneksi masif untuk sensor, aktuator, dan mobile robots yang beroperasi simultan dalam satu shopfloor.

Persoalan ekonomis yang mendasari adopsi teknologi ini juga signifikan. Survei industri dari berbagai sektor menunjukkan bahwa *unplanned downtime* menyebabkan kerugian rata-rata €50,000–€250,000 per jam pada lini perakitan kelas atas, sementara fragmentasi protokol komunikasi (Profinet, EtherCAT, OPC UA, MQTT) menambah kompleksitas integrasi hingga 30–40% dari total biaya proyek otelasi. Dalam makalah De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), авторы mengusulkan arsitektur digital twin untuk *cyber-physical assembly transfer system* yang menjembatani kesenjangan antara sistem fisik di lantai produksi dan representasi sibernya, memungkinkan prediksi degradasi, optimasi throughput, dan rekonfigurasi otonom. Konteks akademis ini menegaskan bahwa integrasi AAS–5G–DT bukan sekadar pilihan teknologis, melainkan prasyarat strategis untuk mempertahankan daya saing manufaktur dalam era *mass customization*, *lot-size-one*, dan *resilient supply chain* pasca-pandemi.

Lebih lanjut, kombinasi AAS sebagai metadata layer, 5G sebagai connectivity fabric, dan DT sebagai cognitive layer menghasilkan *three-tier industrial cognitive stack* yang memungkinkan visibilitas holistik terhadap status mesin, kualitas produk, dan kondisi operasional. Inilah yang menjadi latar belakang penyusunan modul 1906, yang membahas secara sistematis landasan teori, metodologi rekayasa, studi kasus kuantitatif, dan evaluasi kritis terhadap implementasi arsitektur tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sinkronisasi Digital Twin

Sinkronisasi antara entitas fisik (PH) dan representasi digital (DT) dimodelkan melalui persamaan keadaan diskrit dengan interval sampling $\Delta t$:

$$S_{DT}(t+\Delta t) = f\bigl(S_{DT}(t),\, S_{PH}(t),\, \Delta t\bigr) + \epsilon(t)$$

di mana $S_{DT}, S_{PH} \in \mathbb{R}^n$ masing-masing adalah vektor keadaan digital dan fisik, $f(\cdot)$ adalah fungsi transisi state, dan $\epsilon(t)$ adalah *synchronization error* yang dipengaruhi oleh latensi komunikasi $\tau_c$ dan jitter $\sigma_j$.

### 2.2 Kapasitas Kanal 5G untuk URLLC

Untuk layanan *Ultra-Reliable Low-Latency Communication* (URLLC) pada lini perakitan, kapasitas kanal Shannon dengan alokasi bandwidth $B$ dan *Signal-to-Noise Ratio* $\gamma$ dinyatakan:

$$C_{5G} = B \cdot \log_2(1+\gamma) \quad \text{[bit/s]}$$

Dengan target keandalan paket $R_{URLLC} = 1 - \epsilon_p$ di mana $\epsilon_p \leq 10^{-5}$, dan latensi end-to-end $\tau_{e2E} \leq 1$ ms, maka *block error rate* (BLER) efektif:

$$\text{BLER}_{eff} = \frac{N_{err}}{N_{tx}} \leq 10^{-5}$$

### 2.3 Availability dan OEE Sistem Perakitan

Ketersediaan (*availability*) lini perakitan dengan parameter *Mean Time Between Failures* ($\text{MTBF}$) dan *Mean Time To Repair* ($\text{MTTR}$):

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

*Overall Equipment Effectiveness* (OEE) yang menjadi tolok ukur produktivitas:

$$\text{OEE} = A \times P \times Q$$

di mana $P$ adalah *performance rate* (rasio siklus aktual terhadap ideal), dan $Q$ adalah *quality rate* (rasio produk cacat yang lolos terhadap total produksi).

### 2.4 Model Throughput Cyber-Physical Assembly Transfer System

Untuk sistem transfer perakitan $N$-stasiun dengan waktu siklus $C_i$ per stasiun dan buffer $b_i$ antar-stasiun (De Marchi, Rojas & Mark, 2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)):

$$T_{sys} = \max_{i \in \{1,\dots,N\}} C_i + \sum_{i=1}^{N-1} t_{trans,i}(b_i)$$

dengan $t_{trans,i}$ adalah waktu transfer piece antar-stasiun yang bergantung pada kebijakan buffer.

### 2.5 Reliability Budget untuk AAS-5G Integration

Total *failure rate* sistem $\lambda_{total}$ dari komponen-komponen AAS, *edge node*, *gNB*, dan *core network*:

$$\lambda_{total} = \sum_{k=1}^{m} \lambda_k, \quad \text{MTBF}_{sys} = \frac{1}{\lambda_{total}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi arsitektur AAS–5G–DT mengikuti SOP enam-tahap yang diturunkan dari IEC PAS 63278 dan referensi arsitektur RAMI 4.0:

**Tahap 1 — Identifikasi Aset & Pemetaan Submodels.** Setiap aset industri (mesin CNC, robot, conveyor, sensor) didekomposisi menjadi *submodels* AAS: *Identification*, *Documentation*, *Capability*, *Operational Data*, *Capability Description*. Tiap submodel dinyatakan sebagai *property* dengan tipe data semantic (xsd, basyx, OPC UA companion specs).

**Tahap 2 — Desain Arsitektur 5G Privat (NPN).** Jaringan 5G *non-public network* dengan *Time-Sensitive Networking* (TSN) bridge dikonfigurasi untuk menjamin latensi deterministik. *Slicing* jaringan dialokasikan: slice URLLC untuk kontrol motion, slice eMBB untuk *telemetry*, slice mMTC untuk sensor density.

**Tahap 3 — Penyiapan Digital Twin Backbone.** Platform DT (BaSyx, Eclipse Ditto, atau Azure Digital Twins) diinstal sebagai *digital representation layer* dengan *twin-as-a-service* API. Connector OPC UA-over-5G menjadi jembatan antara AAS endpoint dan DT registry.

**Tahap 4 — Integrasi AAS dengan DT.** Setiap AAS meregistrasi *endpoint* HTTP(s)/OPC UA di *submodel registry*. Saat *property* berubah, event diteruskan ke DT melalui MQTT-over-5G, memicu pembaruan state sesuai persamaan (1).

**Tahap 5 — Validasi Kinerja & Sinkronisasi.** Latency budget diukur dari sensor ke DT dan kembali (round-trip time/RTT). Target: $\text{RTT} \leq 5$ ms untuk kontrol closed-loop, $\leq 1$ ms untuk *motion control*.

**Tahap 6 — Continuous Commissioning & Predictive Maintenance.** Algoritma *anomaly detection* (LSTM autoencoder) berjalan pada DT untuk memprediksi degradasi komponen dan menjadwalkan intervensi.

Diagram alir integrasi:

```
[Sensor/PLC fisik] → (OPC UA) → [AAS Submodel] → (MQTT/5G URLLC) → [Digital Twin Engine]
                                                                     ↓
[