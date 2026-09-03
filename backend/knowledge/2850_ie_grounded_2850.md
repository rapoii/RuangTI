# 2850 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital Industri 4.0 menuntut integrasi mendalam antara entitas fisik di lantai produksi dengan representasi virtualnya melalui konsep *Digital Twin* (DT). Dalam konteks ini, **Asset Administration Shell (AAS)** muncul sebagai kerangka standar internasional yang didefinisikan oleh *Plattform Industrie 4.0* dan kini dikelola oleh *Industrial Digital Twin Association (IDTA)*, berfungsi sebagai "cangkang digital" yang membungkus setiap aset industri dengan metadata, data operasional, kemampuan komunikasi, serta model sub-aset yang terstruktur secara hierarkis (Cavalieri, Di Natale, & Gambadoro, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)).

Urgensi penerapan AAS untuk sistem komunikasi 5G menjadi sangat relevan mengingat tiga tekanan industri simultan. Pertama, jaringan 5G *private network* di pabrik pintar menuntut latensi *ultra-reliable low-latency communication* (URLLC) di bawah 1 ms untuk pengendalian *closed-loop* real-time. Kedua, proliferasi perangkat *Internet of Things* industri (IIoT) membutuhkan interoperabilitas lintas-vendor yang hanya dapat dijamin oleh standarisasi semantik AAS melalui *Submodel Templates* dan *Eclipse BaSyx* sebagai implementasi referensi. Ketiga, kebutuhan akan *over-the-air* (OTA) updates, diagnostik jarak jauh, dan *predictive maintenance* atas infrastruktur 5G memerlukan model data digital twin yang mampu merepresentasikan tidak hanya *state* perangkat keras (*gNodeB*, *core network*, *edge computing node*) tetapi juga konfigurasi *software-defined network* (SDN) dan *network slicing*.

Kontribusi Cavalieri, Di Natale, dan Gambadoro (2024) bersifat orisinal karena menjadi salah satu eksplorasi awal yang secara eksplisit memodelkan sistem komunikasi 5G sebagai *asset* yang didekati oleh AAS, sehingga memungkinkan operator telekomunikasi dan integrator sistem industri untuk memperlakukan base station, antena, dan *edge node* sebagai aset I4.0 dengan interoperabilitas penuh. Pendekatan ini melengkapi riset De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang membangun arsitektur digital twin untuk *cyber-physical assembly transfer system*, di mana Conveyor, robot transfer, dan sistem pick-and-place dimodelkan secara hierarkis untuk menjamin koherensi antara dunia fisik dan virtual pada lantai produksi. Kedua paper ini bersama-sama membentuk basis bukti kuat bahwa standarisasi AAS bersifat lintas-domain: dari lini perakitan (assembly) hingga infrastruktur telekomunikasi 5G.

Secara ekonomis, menurut estimasi McKinsey & IDTA, adopsi digital twin yang distandarisasi dapat menurunkan biaya *unplanned downtime* hingga 30% dan memperpendek *mean time to repair* (MTTR) sebesar 70%. Dalam konteks operator 5G, downtime satu *gNodeB* urban macro-cell dapat menimbulkan kehilangan pendapatan sebesar Rp 8–15 juta per jam, sehingga kemampuan AAS untuk menyediakan *configuration backup*, *firmware versioning*, dan *remote commissioning* memiliki justifikasi ekonomis yang kuat. Oleh karena itu, modul ini membahas perpaduan arsitektur AAS, model komunikasi 5G, dan metodologi rekayasa untuk implementasi industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Referensi Asset Administration Shell

AAS mengikuti standar IEC 63278 dan ISO 23247, terdiri atas tiga komponen utama: **Identification**, **Submodels**, dan **Asset Information**. Formulasi matematis dari struktur AAS dapat dituliskan sebagai tupel berikut:

$$\mathcal{A} = \{I, \mathcal{S}, \mathcal{D}\}$$

di mana:
- $I$ = *Identification* (ID global dan ID spesifik per vendor),
- $\mathcal{S} = \{S_1, S_2, \dots, S_n\}$ = himpunan *submodels* yang merepresentasikan kapabilitas atau aspek tertentu dari aset,
- $\mathcal{D}$ = dokumen teknis (*data sheets*, manual, sertifikat kalibrasi).

Setiap *submodel* $S_i$ tersusun atas koleksi *submodel elements* (SMEs) yang memiliki struktur formal:

$$S_i = \{ (e_j, v_j, t_j, sem_j) \mid j = 1, 2, \dots, m \}$$

dengan:
- $e_j$ = nama elemen (mis. `ThroughputDL`, `LatencyURLLC`),
- $v_j$ = nilai numerik/string,
- $t_j$ = *timestamp* pengukuran,
- $sem_j$ = referensi semantik ke *dictionary* IEC 61360 atau *Eclass*.

### 2.2 Model Komunikasi 5G dalam Representasi AAS

Untuk sistem komunikasi 5G, Cavalieri dkk. (2024) mengusulkan representasi parameter melalui *submodel* spesifik yang disebut **CommunicationProfileSM**. Hubungan antara kapasitas data, bandwidth, dan *modulasi coding scheme* (MCS) mengikuti persamaan Shannon-Hartley yang disesuaikan dengan OFDMA 5G NR:

$$C_{cell} = \sum_{k=1}^{K} B_{RB} \cdot N_{RB,k} \cdot \log_2\left(1 + \text{SINR}_k\right) \cdot \eta_k$$

di mana:
- $C_{cell}$ = kapasitas total *cell* 5G (bps),
- $B_{RB}$ = bandwidth satu *resource block* = 180 kHz,
- $N_{RB,k}$ = jumlah *resource block* yang dialokasikan ke *user equipment* (UE) ke-$k$,
- $\text{SINR}_k$ = *Signal to Interference plus Noise Ratio* UE ke-$k$,
- $\eta_k \in [0,1]$ = efisiensi spektral MCS (untuk 5G NR, $\eta$ bervariasi dari 0,15 (QPSK) hingga 0,95 (256-QAM)),
- $K$ = jumlah UE aktif.

Latensi URLLC didekati dengan:

$$L_{URLLC} = L_{prop} + T_{tx} + T_{queuing} + T_{proc} + L_{HARQ}$$

di mana:
- $L_{prop}$ = *propagation delay* ($\approx d/c$, dengan $d$ jarak dan $c$ kecepatan cahaya),
- $T_{tx} = N_{sym}/f_{sub6}$ dengan $f_{sub6}$ = *subcarrier spacing* (15, 60, atau 120 kHz untuk URLLC),
- $T_{queuing}$ = waktu antrian pada scheduler,
- $T_{proc}$ = waktu pemrosesan gNB,
- $L_{HARQ}$ = retransmisi Hybrid ARQ (untuk target reliabilitas 99,999%).

### 2.3 Sinkronisasi Digital Twin (DT ↔ Physical Asset)

State synchronization antara aset fisik dan DT mengikuti model diskret yang diperkenalkan dalam De Marchi dkk. (2022):

$$x_{DT}(t_{k+1}) = f_{DT}\big(x_{DT}(t_k), u(t_k)\big) + \epsilon_k$$

$$x_{ph}(t_{k+1}) = f_{ph}\big(x_{ph}(t_k), u(t_k), w(t_k)\big)$$

dengan *synchronization error*:

$$\delta_k = \|x_{DT}(t_k) - x_{ph}(t_k)\|_2$$

Tujuan utama desain DT adalah meminimumkan $\delta_k$ di bawah ambang $\delta_{max}$, yang merupakan parameter kualitas yang disimpan dalam *submodel* `DigitalTwinQualitySM`.

### 2.4 Throughput dan *Network Slicing*

Untuk *network slicing* pada 5G, satu *cell* dapat melayani beberapa *slice* (mis. eMBB, URLLC, mMTC). Alokasi resource ke setiap slice $s$:

$$\text{R}_s = \sum_{k \in \mathcal{U}_s} \rho_k, \quad \sum_{s} \text{R}_s \le 1$$

dengan $\rho_k$ = proporsi resource yang dialokasikan ke UE $k$, dan kendala QoS $\rho_k \ge \rho_{min,s}$ untuk mempertahankan SLA setiap slice.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi AAS-DT untuk Infrastruktur 5G

Berdasarkan Cavalieri dkk. (2024), prosedur operasional standar (SOP) implementasi AAS-DT untuk sistem 5G mengikuti diagram alur berikut:

**Tahap 1 — Identifikasi Aset (*Asset Identification*)**
 Setiap elemen fisik 5G (gNodeB, antenna, core, router industri) diinventarisasi menggunakan *global asset identifier* (GAI) berformat URI sesuai IEC 63278.

**Tahap 2 — Seleksi *Submodel Templates* (SMT)**
Mengacu pada repositori resmi IDTA, dipilih SMT relevan, antara lain:
- `CommunicationProfileSM` (untuk profil 5G NR),
- `NetworkSlicingSM`,
- `ReliabilityPerformanceSM`,
- `DigitalTwinQualitySM`,
- `PrognosisSM` (untuk *predictive maintenance*).

**Tahap 3 — Pembuatan *AAS Instance* (Serialization)**
AAS diserialisasi dalam format AASX (file ZIP berisi XML OPC UA + JSON *submodels*). Contoh struktur JSON untuk `CommunicationProfileSM`:

```json
{
  "idShort": "CommunicationProfileSM",
  "modelType": "Submodel",
  "submodelElements": [
    {"idShort": "ThroughputDL", "value": "1.2 Gbps", "semanticId": "0173-1#02-AAO572#001"},
    {"idShort": "LatencyURLLC", "value": "0.8 ms"},
    {"idShort": "ReliabilityTarget", "value": "99.999%"}
  ]
}
```

**Tahap 4 — *AAS Registry* & *Discovery Service***
AAS didaftarkan pada *AAS Registry Service* (komponen BaSyx), sehingga dapat di-*query* melalui protokol `http://.../aas/{aasId}/submodels/{submodelId}`.

**Tahap 5 — Integrasi dengan Protokol Industri**
Endpoint AAS diekspos melalui OPC UA (port 4840), MQTT (port 1883/8883), atau HTTP/REST untuk konsumsi oleh SCADA, MES, dan *edge controller*.

**Tahap 6 — *Closed-Loop Control* via AAS Events**
AAS menerbitkan *event* ketika state aset menyimpang dari `DigitalTwinQualitySM`, memicu *predictive maintenance workflow*.

### 3.2 Prosedur untuk Sistem Transfer Perakitan Siber-Fisik

De Marchi, Rojas, dan Mark (2022) melengkapi prosedur di atas dengan protokol spesifik untuk *assembly transfer system*, antara lain:
1. Pembuatan DT Conveyor dengan *kinematic model* 6-DOF dan *force-torque sensor*.
2. Implementasi *handshake* MQTT antara PLC (S7-3) dan *BaSyx AAS server*.
3. Validasi *synchronization error* $\delta_k < \delta_{max}$ secara berkala (tiap 100 ms).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik Otomotif dengan Private 5G Network

Misalkan sebuah pabrik otomotif di Cikarang mengoperasikan **private 5G network** untuk mengendalikan 50 robot las (*closed-loop control*). Parameter teknis:

| Parameter | Nilai |
|---|---|
| Bandwidth kanal | $B = 100$ MHz |
| Subcarrier spacing | $f_{sub6} = 60$ kHz (FR1, *numerology* 2) |
| Jumlah RB tersedia | $N_{RB} = 135$ |
| Daya pancar gNodeB | $P_{tx} = 40$ dBm |
| Daya derau termal | $N_0 = -174$ dBm/Hz |
| Bandwidth tiap RB | $B_{RB} = 180$ kHz |
| MCS rata-rata | 64-QAM ($\eta = 0.78$) |
| SINR rata-rata UE | $\text{SINR} = 15$ d