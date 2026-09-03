# 2114 — Asset Administration Shell dan Arsitektur Digital Twin untuk Sistem Komunikasi 5G serta Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital lantai pabrik (factory floor) dalam kerangka **Industrie 4.0** (I4.0) dan **Society of Industries 5.0** mensyaratkan integrasi tiga pilar utama: *Cyber-Physical Systems* (CPS), *Internet of Things* (IoT) industri, dan *Digital Twin* (DT) yang bersifat interoperabel lintas-pemasok (cross-vendor interoperability). Dalam konteks ini, komunikasi nirkabel generasi kelima (**5G New Radio / NR**) telah muncul sebagai enabler strategis karena karakteristiknya yang memenuhi kebutuhan manufaktur presisi: *Ultra-Reliable Low-Latency Communication* (URLLC) dengan latensi satu-arah $\leq 1$ ms dan reliabilitas $99{,}999\%$, *enhanced Mobile Broadband* (eMBB) hingga $10$ Gbps, serta *massive Machine-Type Communication* (mMTC) yang mendukung $\geq 10^6$ perangkat/km² sesuai spesifikasi **3GPP TS 22.261** dan rekomendasi **5G-ACIA**.

Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti masalah mendasar yang menghambat adopsi massal: tidak adanya representasi digital yang terstandarisasi atas aset komunikasi 5G, sehingga *asset management*, *procurement*, dan *lifecycle integration* masih dilakukan secara manual dan *siloed*. Paper tersebut mengusulkan penerapan **Asset Administration Shell (AAS)** — spesifikasi yang distandardisasi melalui **DIN SPEC 91345** dan **IEC PAS 63294** di bawah kerangka **Reference Architecture Model Industrie 4.0 (RAMI 4.0)** — sebagai *digital nameplate* formal atas node 5G industri. Pendekatan ini melengkapi penelitian De Marchi, Rojas, dan Mark (2022) yang membangun arsitektur DT untuk *cyber-physical assembly transfer system*, di mana AAS berperan sebagai *semantic backbone* yang menyatukan deskripsi aset fisik, protokol komunikasi, dan *runtime data*.

Urgensi ekonomi dari pendekatan ini sangat nyata. Studi **Plattform Industrie 4.0** (2020) menunjukkan bahwa interoperabilitas semantik berbasis AAS dapat menurunkan *engineering cost* integrasi sistem hingga $35\%$ dan memperpendek *commissioning time* lini produksi sebesar $40\%$. Tanpa standardisasi, setiap *Original Equipment Manufacturer* (OEM) — Siemens, Bosch, Schneider, ABB — menerapkan format *metadata* propietary, menciptakan *integration debt* yang menghambat skalabilitas *smart factory*. Dengan menjadikan AAS sebagai bahasa universal, lapisan DT tidak lagi bergantung pada vendor tertentu (*vendor-neutral*), dan node 5G dapat dideskripsikan, ditemukan, dan dikonfigurasi ulang secara otomatis melalui *AAS Repository Service* dan *AAS Discovery Service* sesuai arsitektur referensi **BaSyx** (Fraunhofer IOSB).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis AAS

AAS secara formal dapat dimodelkan sebagai *tuple* terstruktur sesuai **IEC PAS 63294**:

$$\mathcal{A} = \langle \mathcal{I}, \mathcal{S}, \mathcal{V}, \mathcal{C} \rangle$$

dengan komponen:
- $\mathcal{I} = \{i_{id}, i_{kind}\}$ : identifikasi aset global (berbasis URI sesuai **IRDI** — International Registration Data Identifier),
- $\mathcal{S} = \{s_1, s_2, \dots, s_n\}$ : himpunan *submodels* yang merepresentasikan aspek fungsional (misalnya `CommunicationSubmodel`, `DiagnosticsSubmodel`, `CapabilitySubmodel`),
- $\mathcal{V} = \{v_{ij} \in \mathbb{R}^k\}$ : vektor nilai properti dari setiap *submodel*,
- $\mathcal{C}$ : *concept descriptions* yang merujuk pada ontologi **Eclass** (IEC 61360) atau *Semantic Web* (RDF/OWL).

Untuk node 5G, *CommunicationSubmodel* memuat setidaknya *Quality of Service* (QoS) yang dinyatakan sebagai parameter *five-tuple*:

$$\mathcal{Q} = \langle R_b, L_a, J, P_l, R_{99.999} \rangle$$

dengan $R_b$ = *bitrate* (Mbps), $L_a$ = latensi (ms), $J$ = *jitter* (ms), $P_l$ = *packet loss* (%), dan $R_{99.999}$ = reliabilitas URLLC.

### 2.2 Model Sinkronisasi Digital Twin

De Marchi et al. (2022) menggunakan pendekatan *state-space* dengan *Discrete-Time Kalman Filter* (DTKF) untuk menyinkronkan DT dengan sistem fisik. Persamaan *prediction* dan *update* adalah:

$$\hat{x}_{k|k-1} = A \hat{x}_{k-1|k-1} + B u_{k-1}$$

$$P_{k|k-1} = A P_{k-1|k-1} A^\top + Q_{k-1}$$

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (y_k - H \hat{x}_{k|k-1})$$

dengan *Kalman gain*:

$$K_k = P_{k|k-1} H^\top (H P_{k|k-1} H^\top + R_k)^{-1}$$

di mana $\hat{x}_k$ adalah estimasi state (posisi, kecepatan, suhu), $y_k$ adalah pengukuran sensor, $A, B, H$ adalah matriks sistem, serta $Q_k$ dan $R_k$ adalah kovariansi noise proses dan observasi.

### 2.3 Model Latensi 5G URLLC

Untuk *one-way user-plane latency* sesuai **3GPP TS 38.913**:

$$L_a = \frac{N_{TA} \cdot \tau_{slot}}{2} + T_{proc} + T_{tx}$$

dengan $N_{TA} \cdot \tau_{slot}/2$ adalah *time-advance* propagasi (sub-frame $0{,}125$ ms pada numerologi $\mu = 2$, *slot* $0{,}25$ ms), $T_{proc}$ = waktu pemrosesan gNB ($\sim 0{,}3$ ms), dan $T_{tx}$ = *transmission time* yang bergantung pada *packet size* $S$ (bit) dan *coding rate* $r_c$:

$$T_{tx} = \frac{S}{R_b \cdot r_c}$$

### 2.4 Model Throughput Lini Transfer Perakitan

Untuk sistem transfer perakitan *cycle-time*-nya:

$$T_c = \max_{i=1}^{n} (t_{op,i} + t_{trans,i}) + t_{setup}$$

dengan $t_{op,i}$ = waktu operasi stasiun $i$, $t_{trans,i}$ = waktu transfer antar-stasiun, $t_{setup}$ = *overhead* sinkronisasi 5G.

*Overall Equipment Effectiveness* (OEE):

$$\text{OEE} = A \times P \times Q$$

dengan $A$ = *Availability*, $P$ = *Performance*, $Q$ = *Quality*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi mengikuti kerangka SOP berlapis yang mengintegrasikan paper Cavalieri et al. (2024) dan De Marchi et al. (2022):

**Tahap 1 — Identifikasi Aset & Pemodelan AAS.**
Lakukan inventarisasi aset komunikasi 5G (gNB, UE, *edge cloud*, *industrial router*) dan buat instans AAS menggunakan SDK **BaSyx** (Java/Python). Definisikan *submodels* mengikuti *AAS Metamodel* v3.0 (`CommunicationSubmodel`, `DiagnosticsSubmodel`, `CapabilitySubmodel`).

**Tahap 2 — Pembuatan DT Transfer Assembly.**
Bangun DT untuk *assembly transfer system* dengan menyalin arsitektur De Marchi, Rojas, dan Mark (2022): lapisan sensor (OPC UA, MQTT, Modbus TCP), lapisan *edge*, dan lapisan cloud DT. Sambungkan DT ke AAS melalui *AAS Server*.

**Tahap 3 — Konfigurasi Network Slicing 5G.**
Pesan dua *network slice* sesuai **5G-ACIA**: slice URLLC ($\text{SLA}_1 = \langle 1\,\text{ms}, 99{,}999\%\rangle$) untuk *closed-loop control*, dan slice eMBB untuk transmisi data historis DT.

**Tahap 4 — Kalibrasi & Validasi Model.**
Latih model DT dengan data historis menggunakan DTKF, validasi *RMSE* $\leq 2\%$ terhadap *ground truth* sensor fisik.

**Tahap 5 — Deployment & Continuous Monitoring.**
Aktifkan *AAS Registry Service* untuk discovery dinamis, kemudian integrasikan dengan *Manufacturing Execution System* (MES) melalui *OPC UA over 5G*.

Diagram alir proses:

```
[Aset Fisik 5G/Assembly] → Sensor/OPC UA → Edge (DTKF) → Cloud DT
                ↓                                  ↑
            AAS Submodels ←→ AAS Registry & Discovery
                ↓
        MES / ERP / SCADA
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah lini perakitan komponen *electronic control unit* (ECU) di pabrik Tier-1 otomotif配备 Jerman memiliki konfigurasi sebagai berikut:

| Parameter | Nilai |
|---|---|
| Jumlah stasiun kerja ($n$) | 8 |
| Rata-rata $t_{op,i}$ | $12{,}5$ s |
| $t_{trans,i}$ (konveyor servo) | $1{,}8$ s |
| Ukuran paket sensor | $S = 128$ byte $= 1024$ bit |
| *Bitrate* URLLC | $R_b = 5$ Mbps |
| *Coding rate* | $r_c = 0{,}5$ |

**Langkah 1: Hitung *Transmission Time*.**
$$T_{tx} = \frac{S}{R_b \cdot r_c} = \frac{1024}{5 \times 10^6 \times 0{,}5} = 0{,}4096 \text{ ms