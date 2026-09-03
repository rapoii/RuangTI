# 2834 — Digital Twin Industri Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 telah mengubah secara fundamental cara sistem manufaktur dirancang, dioperasikan, dan dipelihara. Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti salah satu tantangan paling kritis dalam era digitalisasi ini, yaitu interoperabilitas semantik antara aset fisik industri dan representasi digitalnya. Asset Administration Shell (AAS), yang distandarisasi melalui spesifikasi **IEC 63278 (DIN SPEC 91345)** dan merupakan komponen inti dari *Reference Architecture Model Industry 4.0* (RAMI 4.0), muncul sebagai kerangka referensi untuk mendeskripsikan aset industri secara holistik. Namun, implementasi AAS dalam lingkungan komunikasi nirkabel 5G menghadapi tantangan latensi, keandalan, dan sinkronisasi yang belum sepenuhnya terpetakan dalam literatur konvensional.

Urgensi ekonomi dari integrasi AAS–5G ini dapat dipahami melalui tiga dimensi utama. Pertama, pasar *digital twin* industri diproyeksikan mencapai **USD 110 miliar pada tahun 2028** dengan CAGR lebih dari 39%, didominasi oleh sektor manufaktur, energi, dan otomotif. Kedua, peluncuran privat 5G network (*5G Non-Public Networks* / 5G-NPN) di lantai pabrik memungkinkan *Ultra-Reliable Low-Latency Communication* (URLLC) dengan target latensi end-to-end ≤ 1 ms, yang krusial untuk aplikasi *closed-loop control* dan *synchronization* robotik. Ketiga, biaya *downtime* manufaktur akibat kegagalan komunikasi mencapai USD 50.000 per jam pada lini produksi semikonduktor, menjadikan keandalan AAS sebagai fungsi bisnis strategis.

Konteks teknis yang diangkat Cavalieri dkk. (2024) berkaitan dengan keterbatasan arsitektur AAS konvensional yang mengandalkan komunikasi *wired* berbasis OPC UA dan *Time-Sensitive Networking* (TSN). Ketika AAS diterapkan pada perangkat *mobile* (AGV, robot kolaboratif, drone inspeksi) atau aset terdistribusi secara geografis, diperlukan infrastruktur komunikasi nirkabel 5G yang mampu mempertahankan kualitas layanan (QoS) untuk pertukaran *submodel* AAS secara *real-time*. Paper ini mengusulkan arsitektur AAS–DT yang mengintegrasikan protokol 5G dengan *Asset Administration Shell*, lengkap dengan *submodel* khusus untuk parameter telekomunikasi.

Sebagai penguat konteks rekayasa sistem, De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) mendemonstrasikan arsitektur *digital twin* untuk sistem transfer perakitan *cyber-physical* (CPAT), di mana *transfer line* menjadi tulang punggung produksi massal di industri otomotif dan elektronik. Sistem ini memerlukan sinkronisasi presisi tinggi antar-stasiun (±0,1 mm posisi, ±1 ms timing), yang hanya dapat dipenuhi melalui integrasi AAS, sensor IoT, dan komunikasi deterministik. Kedua paper ini secara komplementer memetakan spektrum penuh tantangan interoperabilitas AAS–DT dalam lingkungan manufaktur modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Referensi AAS dan Digital Twin

Asset Administration Shell didefinisikan secara formal sebagai representasi digital aset yang terdiri dari beberapa *submodels* yang masing-masing merepresentasikan aspek spesifik dari aset fisik. Secara matematis, struktur AAS dapat diformulasikan sebagai:

$$AAS_i = \{ID_i, M_i, S_i, V_i\}$$

di mana $ID_i$ adalah *globally unique identifier* (berdasarkan *IRDI* atau *URI*), $M_i$ adalah himpunan *submodels* $\{M_{i,1}, M_{i,2}, \ldots, M_{i,n}\}$, $S_i$ adalah himpunan *submodel elements* (properti, operasi, event), dan $V_i$ adalah himpunan *value* yang terikat pada elemen-elemen tersebut.

Untuk komunikasi 5G, Cavalieri dkk. (2024) mengusulkan *submodel* telekomunikasi khusus:

$$M_{telecom} = \{R_{signal}, L_{latency}, T_{throughput}, Q_{jitter}, P_{packet\_loss}\}$$

dengan $R_{signal}$ merepresentasikan *Reference Signal Received Power* (RSRP) dalam dBm, $L_{latency}$ adalah latensi *round-trip time* (RTT) dalam ms, $T_{throughput}$ adalah debit data dalam Mbps, $Q_{jitter}$ adalah variasi antarkedatangan paket dalam ms, dan $P_{packet\_loss}$ adalah probabilitas packet loss.

### 2.2 Model Latensi End-to-End pada Jaringan 5G

Latensi total komunikasi AAS melalui 5G dapat dimodelkan sebagai penjumlahan komponen deterministik dan stochastik:

$$L_{total} = L_{UE} + L_{radio} + L_{transport} + L_{core} + L_{app}$$

dengan:
- $L_{UE}$: latensi pemrosesan *User Equipment* (0,5–1 ms)
- $L_{radio}$: latensi *air interface* (UTRA-TDD ≈ 0,5 ms untuk subcarrier spacing 30 kHz)
- $L_{transport}$: latensi *backhaul/fronthaul* (1–5 ms pada *Dedicated Network*)
- $L_{core}$: latensi *5GC* (Service-Based Architecture, 1–2 ms)
- $L_{app}$: latensi aplikasi AAS/OPC UA

Untuk URLLC (*Ultra-Reliable Low-Latency Communication*), probabilitas keberhasilan transmisi dalam *frame* $T$ didefinisikan sebagai:

$$P_{success}(T) = \left(1 - P_{e}(T)\right)^{N_{retx}}$$

dengan $P_{e}(T)$ adalah *Block Error Rate* (BLER) dan $N_{retx}$ adalah jumlah maksimum retransmisi yang diizinkan.

### 2.3 Model Throughput AAS Submodel

*Throughput* efektif untuk transmisi *submodel* AAS dengan ukuran payload $D$ byte melalui jaringan 5G dengan *modulation and coding scheme* (MCS) tertentu adalah:

$$T_{eff} = \frac{D \cdot 8}{L_{total} \cdot 10^{-3}} \quad [\text{bps}]$$

Pada 5G NR (*New Radio*) dengan *bandwidth* $B$ Hz, *spectral efficiency* $\eta$ bit/s/Hz, dan jumlah *resource blocks* $N_{RB}$:

$$T_{peak} = N_{RB} \cdot N_{sub} \cdot N_{sym} \cdot \eta \cdot B_{RB} \cdot (1 - OH)$$

dengan $B_{RB} = 180$ kHz, $N_{sub}$ = jumlah subcarrier per RB (12), $N_{sym}$ = jumlah simbol OFDM per slot, dan $OH$ adalah *overhead* (cyclic prefix, guard band, kontrol).

### 2.4 Model Digital Twin pada Sistem Transfer Perakitan

De Marchi dkk. (2022) memodelkan digital twin dari CPAT system sebagai:

$$DT_{CPAT} = \{S_{physical}, S_{digital}, C_{sync}, F_{feedback}\}$$

dengan *synchronization error* antara dunia fisik dan digital:

$$\epsilon_{sync}(t) = \|x_{physical}(t) - x_{digital}(t)\|$$

Tujuan kendali CPAT adalah mempertahankan $\epsilon_{sync}(t) \leq \epsilon_{threshold}$, di mana untuk aplikasi perakitan presisi $\epsilon_{threshold} \approx 0{,}1$ mm.

*Cycle time* sistem transfer perakitan dengan $n$ stasiun:

$$CT_{line} = \max_{i=1..n}(CT_i) + (n-1) \cdot T_{transfer}$$

dengan $CT_i$ adalah cycle time stasiun ke-$i$ dan $T_{transfer}$ adalah waktu transfer antar-stasiun.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi arsitektur AAS Digital Twin untuk komunikasi 5G mengikuti *Standard Operating Procedure* (SOP) berbasis standar **IEC 63278**, **3GPP TS 22.104** (layanan komunikasi kritis), dan **OPC UA over 5G** (kontributor dari Industrial Internet Consortium). Prosedur sistematis berikut disintesis dari Cavalieri dkk. (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) dan diperkuat dengan kerangka De Marchi dkk. (2022):

### Tahap 1: Pemetaan Aset dan Definisi Submodel
1. Inventarisasi seluruh aset fisik lini produksi (*Asset Inventory*).
2. Penetapan *Identification* aset menggunakan **IRDI** atau *URI* sesuai ISO 29002.
3. Dekomposisi aset menjadi submodel fungsional: *Identification*, *Capability*, *Operational Data*, *Communication*, *Health*.
4. Pembuatan *AASX package* (XML/ZIP) menggunakan tool *AASX Package Explorer* atau *BaSyx* SDK.

### Tahap 2: Desain Arsitektur Komunikasi 5G
1. Klasifikasi lalu lintas AAS ke dalam **3GPP 5QI (5G QoS Identifier)**:
   - 5QI 1: Kendali AAS *real-time* (latensi target 1 ms, reliability 99,999%)
   - 5QI 2: Telemetri berkala (latensi 5 ms, reliability 99,9%)
   - 5QI 80: Best-effort dashboard (latensi 100 ms)
2. Alokasi *spectrum*: n77/n78 (3,5 GHz, C-Band) untuk kapasitas; n261/n258 (mmWave 26/28 GHz) untuk latensi ultra-rendah dalam *small cell*.
3. Deploy *5G Non-Public Network* (NPN) dengan *Standalone (SA)* architecture menggunakan *Network Slice* terpisah untuk AAS traffic.

### Tahap 3: Integrasi AAS–Digital Twin–5G
1. Instalasi *AAS Server* (BaSyx, Eclipse Ditto, atau Siemens *Industrial Edge*).
2. Koneksi aset fisik ke AAS via *AAS Connector* (OPC UA, MQTT-SN, atau Modbus).
3. Implementasi *Digital Twin Service* dengan *state synchronization* berbasis *event-driven* (Kafka, MQTT).
4. Konfigurasi *telemetry submodel* untuk meng-ekspos parameter 5G (RSRP, SINR, throughput) ke AAS.

### Tahap 4: Validasi dan Sertifikasi
1. Pengukuran *Key Performance Indicators* (KPI): latensi, packet loss, jitter, MTBF.
2. *Penetration testing* dan *cybersecurity audit* sesuai IEC 62443.
3. Dokumentasi *Bill of Materials* (BoM) AAS dan *deployment diagram*.
4. Sertifikasi kepatuhan terhadap **RAMI 4.0** dan *Asset Administration Shell* *Specification*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Lini Perakitan AGV Berbasis AAS-5G

Sebuah pabrik otomotif Tier-1 di Eropa menerapkan 10 *Automated Guided Vehicle* (AGV) untuk transfer komponen *power train* antara 6 stasiun perakitan. Setiap AGV dilengkapi dengan AAS yang berkomunikasi ke *edge server* melalui privat 5G NPN (bandwidth 100 MHz, frekuensi 3,5 GHz).

**Parameter input industri:**

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Ukuran AAS payload (Identification + Telemetry) | 4.096 byte | $D$ |
| Bandwidth kanal 5G NR | 100 MHz | $B$ |
| Subcarrier spacing | 30 kHz | $SCS$ |
| Jumlah Resource Block | 273 | $N_{RB}$ |
| Spectral efficiency (MCS-13, 64-QAM) | 5,55 bit/s/Hz | $\eta$ |
| Overhead (CP + kontrol) | 28% | $OH$ |
| BLER target URLLC | $10^{-5}$ | $P_e$ |
| Max