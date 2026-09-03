# 2674 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dalam Otomasi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai Arsitektur Digital Twin Sistem Komunikasi 5G untuk Sistem Produksi Cyber-Physical
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 mensyaratkan integrasi vertikal dan horizontal antara *cyber-physical production systems* (CPPS), sensor lapangan, dan infrastruktur komunikasi berlatensi rendah. Dalam konteks ini, komunikasi nirkabel 5G—khususnya profil *Ultra-Reliable Low-Latency Communication* (URLLC) dan *Enhanced Mobile Broadband* (eMBB)—menjadi tulang punggung konektivitas lantai-pabrik. Namun, mengelola ratusan *gNodeB*, *user equipment* (UE), dan *network slice* di lingkungan produksi membutuhkan representasi digital yang tidak hanya memodelkan status perangkat keras, tetapi juga *semantik* dan *interoperabilitas* lintas-tingkat (Cavalieri, Di Natale & Gambadoro, 2024, [DOI:10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)).

Urgensi operasional muncul ketika *cell-site* 5G harus tunduk pada tiga KPI kritis: latensi ujung-ke-ujung $L_{e2e} \leq 1\text{ ms}$, keandalan paket $R \geq 99{,}999\%$, dan jitter $\sigma_J \leq 0{,}1\text{ ms}$. Tanpa *digital twin* yang terstandar, anomali pada parameter radio (misalnya Reference Signal Received Power/RSRP turun di bawah $-110\text{ dBm}$) tidak dapat dilokalisasi cepat oleh *Manufacturing Execution System* (MES). Di sinilah *Asset Administration Shell* (AAS)—standar dari *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA)—diadopsi sebagai kerangka interoperable.

Penelitian Cavalieri dkk. (2024) mengusulkan pemodelan elemen jaringan 5G (gNodeB, AMF/SMF, UE) sebagai **AAS Submodel** yang dapat dipertukarkan via OPC UA atau MQTT, melengkapi arsitektur *cyber-physical assembly transfer system* yang dibangun De Marchi, Rojas & Mark (2022, [DOI:10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)). Kedua karya meneguhkan bahwa digital twin bukan hanya cerminan visual, melainkan *runtime shadow* dengan kemampuan simulasi *what-if* dan sinkronisasi *bidirectional* terhadap aset fisik. Secara ekonomis, adopsi AAS-5G berpotensi menekan *mean-time-to-repair* (MTTR) hingga 40% dan menurunkan *unplanned downtime* pada lini perakitan melalui predictive maintenance berbasis degradasi Key Performance Indicator (KPI) jaringan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Tiga-Dimensi Digital Twin (Grieves-Tao)

Digital twin didefinisikan Cavalieri dkk. (2024) mengikuti formulasi klasik Grieves:

$$\mathbf{T} = \{ \mathbf{S}_p(t),\ \mathbf{S}_v(t),\ \mathbf{D}_{sv},\ \mathbf{D}_{vs} \}$$

di mana $\mathbf{S}_p$ adalah status fisik (*physical space*), $\mathbf{S}_v$ status virtual, $\mathbf{D}_{sv}$ adalah tautan data *physical→virtual*, dan $\mathbf{D}_{vs}$ adalah *virtual→physical*. Untuk elemen 5G, $\mathbf{S}_v$ berisi *submodel elements* AAS seperti `RSRP`, `SINR`, `Throughput`, `Latency`, `PacketLoss`.

### 2.2 Kapasitas Saluran dan Throughput 5G

Kapasitas Shannon-Hartley yang membatasi laju data layer fisik 5G NR:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right)\ \text{[bit/s]}$$

dengan bandwidth $B$ (Hz), $S$ daya sinyal (W), dan $N$ daya derau (W). Untuk slot NR *numerology* $\mu=1$ (subcarrier spacing 30 kHz) dan alokasi *bandwidth part*:

$$B_{BWP} = N_{RB} \cdot 12 \cdot \Delta f \cdot 2^{\mu}$$

di mana $N_{RB}$ adalah jumlah *resource block* dan $\Delta f=15\text{ kHz}$.

### 2.3 Model Latensi Ujung-ke-Ujung URLLC

Latensi total protokol stack:

$$L_{e2e} = L_{proc} + L_{queue} + L_{tx} + L_{prop} + L_{retrans}$$

Untuk *mini-slot* NR berdurasi $T_{slot} = 2^{-\mu}\text{ ms}$, dengan $\mu=2$ (60 kHz SCS) memberikan slot $0{,}25\text{ ms}$—memungkinkan latensi one-way $L_{e2e}\approx 1\text{ ms}$ yang menjadi target URLLC.

### 2.4 Tingkat Keandalan Paket

Keandalan merupakan probabilitas keberhasilan transmisi dalam waktu batas $T_{max}$:

$$R = \Pr(L_{e2e} \leq T_{max}) = 1 - \epsilon$$

dengan $\epsilon \leq 10^{-5}$ (five-nines) sesuai 3GPP TS 22.261. Model reliabilitas Markov sederhana:

$$\lambda_{eff} = \lambda_0 \cdot e^{-\gamma \cdot \text{SINR}}$$

di mana $\lambda_0$ adalah *packet error rate* nominal dan $\gamma$ koefisien *diversity gain*.

### 2.5 Sinkronisasi Status AAS

Update inkremental *submodel element* terjadi setiap interval $\Delta t$ dengan tujuan menyamakan $\mathbf{S}_v(t)$ terhadap $\mathbf{S}_p(t)$:

$$\mathbf{S}_v(t+\Delta t) = \mathbf{S}_v(t) + \alpha \cdot [\mathbf{S}_p(t) - \mathbf{S}_v(t)]$$

dengan *gain* konvergensi $\alpha \in (0,1]$; semakin besar $\alpha$, semakin cepat reaktif tetapi rentan osilasi (Cavalieri dkk., 2024).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Referensi AAS-5G

Cavalieri dkk. (2024, [DOI:10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan arsitektur berlapis:

1. **Lapisan Aset Fisik (Layer 0):** gNodeB, antena MIMO 64T64R, UE industri (PLC, robot), kabel fiber fronthaul.
2. **Lapisan Sensor & Aktuator (Layer 1):** telemetri O-RAN E2/RIC, MIB SNMP, sensor suhu kabinet, catu daya DC.
3. **Lapisan AAS (Layer 2):** Submodel `Communication`, `Configuration`, `Diagnostics`, `Capability` sesuai spesifikasi IDTA Submodel Templates.
4. **Lapisan Layanan (Layer 3):** REST API AASX Server, *discovery service*, registry ZVEI.

### 3.2 Diagram Alir Implementasi SOP

```
[Tahap 1] Identifikasi Aset 5G → Pemetaan ke AAS Identifier (IRDI)
   ↓
[Tahap 2] Pembuatan AASX Package (XML+JSON Schema)
   ↓
[Tahap 3] Deployment AAS Server (BaSyx / Eclipse Ditto) via OPC UA
   ↓
[Tahap 4] Konfigurasi Submodel Telemetry: RSRP, SINR, throughput, BLER
   ↓
[Tahap 5] Integrasi dengan MES/ERP via AAS Registry
   ↓
[Tahap 6] Validasi KPI menggunakan uji regresi & Monte Carlo
   ↓
[Tahap 7] Continuous Synchronization & Predictive Maintenance Loop
```

### 3.3 Integrasi dengan Sistem Perakitan Cyber-Physical

Mengikuti pola De Marchi, Rojas & Mark (2022, [DOI:10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), setiap *transfer station* pada lini perakitan cyber-physical memiliki AAS lokal yang saling bertukar pesan melalui *message broker*. gNodeB berfungsi sebagai *gateway* transport, sementara AAS sentral mengonsolidasikan data lintas-stasiun ke *digital shadow* lini penuh. Pendekatan ini memenuhi pola *Service-Oriented Architecture* (SOA) dan referensi arsitektur RAMI 4.0.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Lini Perakitan Automotif (Studi Hipotetis-Grounded)

Sebuah lini perakitan *body-in-white* memiliki **12 transfer station** yang dikontrol via 5G private network (n78 band, 3,5 GHz), bandwidth $B=100\text{ MHz}$, SCS $\mu=1$ (30 kHz), $N_{RB}=270$.

| Parameter | Simbol | Nilai |
|-----------|--------|-------|
| Daya transmisi gNodeB | $P_{tx}$ | 46 dBm (40 W) |
| Gain antena | $G$ | 24 dBi |
| Noise figure UE | $NF$ | 9 dB |
| Jarak UE–gNodeB | $d$ | 50 m |
| Throughput target | $\Theta_{target}$ | 250 Mbps |
| Latency budget | $T_{max}$ | 5 ms |
| Reliabilitas target | $R$ | 99,999% |

### 4.2 Perhitungan SNR dan Throughput

Path-loss 3GPP UMi NLOS pada 3,5 GHz, jarak 50 m:

$$PL = 36{,}7 \cdot \log_{10}(d) + 22{,}7 + 26 \cdot \log_{10}(f_c/10)$$

dengan $f_c=3{,}5$ GHz:

$$PL = 36{,}7 \cdot \log_{10}(50) + 22{,}7 + 26 \cdot \log_{10}(0{,}35) \approx 88{,}2\text{ dB}$$

Daya terima:
$$P_{rx} = P_{tx} + G - PL = 46 + 24 - 88{,}2 = -18{,}2\text{ dBm}$$

Thermal noise:
$$N_0 = -174 + 10\log_{10}(B) = -174 + 80 = -94\text{ dBm}$$

SNR di UE:
$$\text{SNR} = P_{rx} - N_0 - NF = -18{,}2 - (-94) - 9 = 66{,}8\text{ dB}$$

Throughput Shannon (kapasitas atas):
$$C = 100\times 10^6 \cdot \log_2(1 + 10^{6{,}68}) \approx 100\times 10^6 \cdot 2{,}11 = 2{,}21\text{ Gbps}$$

Implementasi riil NR + modulasi 256-QAM dengan coding rate 0,93 menghasilkan *peak throughput* $\approx 1{,}4$ Gbps—lebih dari cukup untuk memenuhi $\Theta_{target}=250$ Mbps per *transfer station*.

### 4.3 Latensi End-to-End

Komponen latensi pada slot $\mu=1$ ($T_{slot}=1$ ms):

| Komponen | Nilai (ms) |
|----------|------------|
| Proses Tx (gNB scheduling) $L_{proc}$ | 0,4 |
| Antrian MAC $L_{queue}$ | 0,2 |
| Transmisi radio $L_{tx}$ | 0,5 |
| Propagasi (100 m fiber) $L_{prop}$ | 0,0005 |
| Retransmisi HARQ $L_{retrans}$ (rata-rata 1,02 attempt) | 0,02 |
| **Total $L_{e2e}$** | **1,1205** |

Karena $L_{e2