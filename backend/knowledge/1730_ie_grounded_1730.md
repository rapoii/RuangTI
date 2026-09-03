# 1730 — Asset Administration Shell Digital Twin untuk Sistem Komunikasi 5G dalam Otomasi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri menuju *Industry 4.0* ditandai dengan integrasi masif antara aset fisik dunia nyata (*cyber-physical systems*), jaringan komunikasi generasi kelima (5G), dan representasi digitalnya yang dikenal sebagai *Digital Twin*. Dalam konteks ini, **Asset Administration Shell (AAS)**—yang diformalkan oleh *Plattform Industrie 4.0* dan distandarisasi melalui seri IEC PAS 63278—berperan sebagai arsitektur referensi untuk merepresentasikan aset industri secara terstruktur melalui *submodels* yang saling berinteraksi melalui antarmuka terstandar (Cavalieri *et al.*, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Permasalahan mendasar yang diangkat oleh Cavalieri, Di Natale, dan Gambadoro adalah bagaimana sebuah infrastruktur telekomunikasi 5G—yang selama ini diperlakukan sebagai *enabler*—dapat dipromosikan menjadi *first-class asset* yang layak memiliki representasi digital twin-nya sendiri. Tanpa representasi formal tersebut, visibilitas rantai pasok data industri menjadi terfragmentasi, menghambat interoperabilitas horizontal maupun vertikal (Cavalieri *et al.*, 2024).

Urgensi ekonomis dan operasional dari pendekatan ini cukup signifikan. Survei *Ericsson Mobility Report* 2023 memperkirakan bahwa hingga tahun 2030, sekitar 37% koneksi *cellular IoT* akan digunakan untuk aplikasi industri, dengan kontribusi *cellular IoT* terhadap pendapatan operator global mencapai USD 23,35 miliar. Pada sisi manufaktur, *5G Alliance for Connected Industries and Automation* (5G-ACIA) menunjukkan bahwa plant lantai produksi membutuhkan latensi ujung-ke-ujung di bawah 1 ms dengan tingkat keandalan 99,999% (5 nines) untuk pengendalian *motion control* dan *closed-loop control*. Tanpa representasi digital twin terhadap aset 5G, jaminan *Service Level Agreement* (SLA) sulit diverifikasi secara *runtime*, dan *root-cause analysis* terhadap degradasi kualitas layanan menjadi memakan waktu berminggu-minggu (Cavalieri *et al.*, 2024).

Secara teknis, paper Cavalieri *et al.* (2024) memperkenalkan kerangka kerja untuk memodelkan elemen jaringan 5G—seperti *gNodeB*, *User Plane Function* (UPF), *Access and Mobility Management Function* (AMF), dan *Session Management Function* (SMF)—sebagai submodels AAS, lengkap dengan properti metrik seperti *latency*, *jitter*, *throughput*, dan *packet loss rate*. Pendekatan ini melengkapi pekerjaan De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), yang membangun arsitektur digital twin untuk sistem transfer rakitan siber-fisik. De Marchi *et al.* menekankan bahwa setiap komponen mekanis-elektrik-komunikasi pada lini perakitan harus memiliki struktur data digital yang identik dengan kondisi fisiknya, sebuah prinsip yang oleh Cavalieri *et al.* (2024) diperluas hingga ranah *network function virtualization* (NFV) pada infrastruktur 5G. Dengan menyatukan kedua pendekatan ini, ekosistem Industri 4.0 memperoleh satu bahasa bersama (*lingua franca*) untuk seluruh aset—dari *aktuator*, *sensor*, hingga *base station*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi AAS dan Submodels

Asset Administration Shell dapat diformulasikan sebagai himpunan terstruktur $\mathcal{A} = \{S_1, S_2, \ldots, S_n\}$ di mana setiap $S_i$ adalah *submodel* dengan atribut:

$$
S_i = (I_i, P_i, O_i, T_i, A_i)
$$

dengan $I_i$ = *Identification* (ID global sesuai standar IEC 63278), $P_i$ = *Properties* (data statis), $O_i$ = *Operations* (fungsi yang dapat dieksekusi), $T_i$ = *Events*, dan $A_i$ = *DataElements* yang merepresentasikan status *runtime* (Cavalieri *et al.*, 2024).

### 2.2 Latency End-to-End pada Jaringan 5G

Untuk *Ultra-Reliable Low-Latency Communication* (URLLC), total latensi ujung ke ujung $L_{e2e}$ merupakan jumlahan dari komponen latensi pada setiap domain jaringan:

$$
L_{e2e} = L_{access} + L_{transport} + L_{core} + L_{edge}
$$

Dengan *one-way user-plane latency*:

$$
L_{access} = \frac{T_{TTI}}}{2}} + T_{HARQ} + T_{prop}
$$

di mana $T_{TTI}$ adalah durasi Transmission Time Interval, $T_{HARQ}$ adalah *Hybrid Automatic Repeat reQuest* retransmission delay, dan $T_{prop}$ adalah *propagation delay* kanal radio. Untuk numerologi 5G NR dengan *Subcarrier Spacing* (SCS) $f_{SCS} = 30$ kHz pada profil URLLC, setiap *slot* berdurasi $T_{slot} = \frac{1}{2^{\mu} \cdot f_{SCS}}$ ms dengan $\mu = 1$, sehingga $T_{slot} = 0,5$ ms dan *mini-slot* URLLC minimum 2 *OFDM symbols* $\approx 0{,}143$ ms.

### 2.3 Throughput Agregat

*Peak data rate* 5G NR dihitung dengan formula:

$$
R_{peak} = N_{RB} \cdot N_{SC}^{RB} \cdot N_{sym}^{slot} \cdot N_{bit}^{sym} \cdot \frac{1 - OH}{T_{slot}}
$$

di mana $N_{RB}$ = jumlah *Resource Block*, $N_{SC}^{RB} = 12$ *subcarrier*, $N_{sym}^{slot} = 14$ simbol per slot (normal CP), $N_{bit}^{sym}$ = bit per simbol (tergantung *modulation coding scheme*), dan $OH$ = *overhead* protokol $\approx 12\%$.

### 2.4 Konsumsi Bandwidth untuk Digital Twin

Untuk $N$ aset AAS yang masing-masing mengirim data dengan frekuensi pembaruan $f_i$ (Hz) dan ukuran *payload* $s_i$ (byte), kebutuhan bandwidth agregat:

$$
B_{agg} = \frac{\sum_{i=1}^{N} f_i \cdot s_i}{10^{6}} \quad [\text{Mbps}]
$$

### 2.5 Network Slicing sebagai *Submodel*

Kaviar model *Network Slice* dengan *Quality of Service* tertentu dimodelkan sebagai tuple:

$$
\mathcal{N} = \big( C_{type}, L_{max}, R_{min}, R_{max}, J_{max}, P_{loss} \big)
$$

dengan $C_{type} \in \{\text{URLLC}, \text{eMBB}, \text{mMTC}\}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Cavalieri *et al.* (2024) menyusun metodologi rekayasa untuk membangun AAS Digital Twin dari sistem 5G dalam tujuh tahap operasional:

**Tahap 1 — Identifikasi Aset 5G.** Katalogkan seluruh elemen NFV: *gNodeB*, AMF, SMF, UPF, *Network Slice Selection Function* (NSSF), dan *Network Repository Function* (NRF). Setiap elemen menjadi *IdentifiableAsset* AAS.

**Tahap 2 — Pemetaan ke IEC 63278-3.** Setiap aset diberi *Asset Identifier* (globally unique) sesuai namespace `0173-1#01-AF...`.

**Tahap 3 — Desain Submodels.** Cavalieri *et al.* (2024) merekomendasikan tiga submodel inti:
- *Submodel NetworkPerformance*: berisi `Latency`, `Jitter`, `Throughput`, `PacketLossRate`.
- *Submodel Topology*: berisi referensi `ConnectedTo` antar aset (edge dari graf).
- *Submodel SliceConfiguration*: berisi parameter `SliceType`, `QoSProfile`, `DedicatedResources`.

**Tahap 4 — Pembuatan Service Interface.** *AAS Service Interface* menggunakan protokol HTTP/REST sesuai spesifikasi "AAS Part 2 – Interoperability". Representasi JSON sesuai *dotAAS*:

```json
{
  "modelType": "Submodel",
  "idShort": "NetworkPerformance",
  "submodelElements": [
    {"modelType": "Property", "idShort": "Latency", "valueType": "xs:float"}
  ]
}
```

**Tahap 5 — Akuisisi Data *Runtime* (Ops Loop).** Stream telemetri dari *O-RAN* near-RT RIC atau *3GPP Management Data Analytics Service* (MDAS) di-*push* ke endpoint AAS tiap $\Delta t$ menggunakan *Server-Sent Events* (SSE) atau *Message Queuing Telemetry Transport* (MQTT).

**Tahap 6 — Validasi & Sertifikasi.** SLA diverifikasi: untuk slice URLLC, target $L_{99} \leq 1$ ms dengan key performance indicator (KPI) `availability ≥ 99,999%`.

**Tahap 7 — Integrasi dengan Higher-Level Orchestrator.** Digital twin AAS dipublikasikan ke *Industrial Digital Twin Association* (IDTA) registry agar dapat diakses oleh Enterprise Resource Planning (ERP), Manufacturing Execution System (MES), dan *Manufacturing Operations Management* (MOM).

Diagram alir logika untuk loop monitoring:

```
[gNodeB/UPF] → SNMP/Streaming Telemetry
       ↓
[Performance Collector (MDAS/NEF)]
       ↓
[AAS Submodel "NetworkPerformance" (write)]
       ↓
[AAS Repository / Registry]
       ↓ (subscribe)
   [MES / MOM / Orchestrator]
       ↓ (control)
[Closed-Loop Reconfiguration]
```

Pendekatan ini secara langsung melengkapi arsitektur siber-fisik De Marchi *et al.* (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), yang menyoroti pentingnya model data bersama untuk konsistensi antara *virtual commissioning* dan operasi *real-time* lini perakitan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik Otomotif dengan 200 Robot Terhubung URLLC

Sebuah pabrik OEM otomotif menerapkan 200 robot las (*cobot*) yang dikendalikan melalui jaringan 5G privat (mode 1: 5G NR Non-Public Network) dengan slice URLLC khusus. Kita akan menghitung kebutuhan bandwidth dan memvalidasi apakah jaringan memenuhi SLA.

**Parameter Input:**

| Parameter | Nilai |
|-----------|-------|
| Jumlah robot ($N$) | 200 |
| Payload per robot per cycle ($s_i$) | 250 byte |
| Siklus kontrol robot ($T_{cyc}$) | 4 ms |
| Update frequency ($f_i = 1/T_{cyc}$) | 250 Hz |
| Modulasi target 5G NR