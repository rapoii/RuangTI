# 1794 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G Industri: Integrasi Cyber-Physical System dalam Rekayasa Manufaktur Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 dan inisiatif *Plattform Industrie 4.0* telah menempatkan **Asset Administration Shell (AAS)** sebagai kerangka referensi utama untuk merepresentasikan aset fisik di dunia siber. Dalam konteks ini, Cavalieri, Di Natale, dan Gambadoro (2024) melalui paper "Asset Administration Shell Digital Twin of 5G Communication System" yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti urgensi integrasi infrastruktur telekomunikasi privat 5G—yang kini menjadi *enabler* utama komunikasi mesin-ke-mesin (M2M), *Ultra-Reliable Low-Latency Communication* (URLLC), dan *massive Machine-Type Communication* (mMTC)—ke dalam ekosistem digital twin berbasis AAS. Sebelumnya, De Marchi, Rojas, dan Mark (2022) telah memelopori arsitektur digital twin untuk sistem *cyber-physical assembly transfer* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)), yang menjadi landasan bagi perluasan paradigma ini ke ranah jaringan komunikasi nirkabel.

Konteks industri yang melatarbelakangi riset ini bersifat **kritis secara operasional dan strategis**. Pertama, adopsi *private 5G campus network* di sektor manufaktur—misalnya pada lini perakitan otomotif, pabrik *semiconductor*, dan fasilitas *logistics hub*—menghadirkan tantangan interoperabilitas antara aset radio (gNodeB, *User Equipment*, *core network*) dengan aset produksi (robot, PLC, AGV). Kedua, kegagalan sinkronisasi antara status fisik jaringan dan representasi digitalnya dapat memicu *downtime* yang menimbulkan kerugian hingga €50.000 per jam pada lini *high-mix low-volume*. Ketiga, regulator dan *Industrial Digital Twin Association* (IDTA) telah menetapkan bahwa setiap aset signifikan dalam rantai nilai harus dapat diakses metadata-nya melalui Submodel AAS yang terstandar (PAS 63278). Dalam perspektif teknik industri, integrasi ini memungkinkan pencapaian **Overall Equipment Effectiveness (OEE)** lebih dari 90% melalui *predictive maintenance* dan *closed-loop control* yang latensinya harus dijaga di bawah ambang kritis 1 ms untuk aplikasi *motion control* (Cavalieri et al., 2024).

Aspek ekonomis lainnya adalah **biaya Total Cost of Ownership (TCO)**. Sebuah *private 5G network* skala pabrik (sekitar 100.000 m²) membutuhkan investasi €1,2–2,5 juta untuk RAN, core, dan AAS middleware. Tanpa digital twin, biaya pemeliharaan dapat melonjak 25–40% akibat *unplanned outage*. Oleh karena itu, penelitian ini tidak hanya bersifat akademis tetapi juga berimplikasi langsung pada keputusan CAPEX/OPEX rekayasawan industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis Latency End-to-End Sistem 5G Industri

Untuk menjamin kualitas komunikasi *real-time*, paper Cavalieri et al. (2024) menurunkan model latency total sebagai berikut:

$$L_{total} = L_{UE \to gNB} + L_{sched} + L_{trans} + L_{prop} + L_{app}$$

dengan parameter:
- $L_{UE \to gNB}$: latency uplink dari *User Equipment* ke *gNodeB*, tipikal 0,1–0,3 ms
- $L_{sched}$: latency penjadwalan radio, mengikuti distribusi eksponensial dengan parameter $\mu_s$
- $L_{trans}$: latency transmisi *frame* dengan ukuran $F$ bit pada bandwidth $B$:

$$L_{trans} = \frac{F}{R} = \frac{F}{B \cdot \log_2\left(1 + \frac{S}{N}\right)}$$

- $L_{prop}$: latency propagasi = $d / v_{prop}$, dengan $v_{prop} \approx 2 \times 10^8$ m/s pada kawat tembaga/fiber
- $L_{app}$: latency aplikasi (AAS processing + OPC UA stack)

### 2.2 Reliability dan Packet Error Rate

Untuk aplikasi URLLC pada lini perakitan, reliability didefinisikan sebagai:

$$R(t) = e^{-\lambda t}, \quad \lambda = \frac{1}{MTBF}$$

dan probabilitas *packet loss* di bawah *Fading Rayleigh Channel*:

$$P_{loss} = 1 - \exp\left(-\frac{\gamma_{th}}{\bar{\gamma}}\right)$$

dengan $\gamma_{th}$ = SNR ambang decoding dan $\bar{\gamma}$ = SNR rata-rata.

### 2.3 Model Sinkronisasi Digital Twin AAS

Sinkronisasi antara *physical asset* (gNodeB) dan *digital shadow* dalam AAS mengikuti persamaan state-update kontinu yang diperkenalkan De Marchi et al. (2022):

$$x_{DT}(t + \Delta t) = f\left(x_{DT}(t), u(t), \theta\right) + w(t)$$

dengan $x_{DT}(t)$ = vektor state AAS, $u(t)$ = data sensor, $\theta$ = parameter submodel, dan $w(t)$ = *process noise* berdistribusi Gaussian $\mathcal{N}(0, Q)$.

### 2.4 Throughput Agregat Private 5G

$$T_{agg} = \sum_{i=1}^{N_{UE}} B_i \cdot \log_2\left(1 + \frac{P_i \cdot g_i}{N_0 + \sum_{j \neq i} P_j \cdot g_j}\right) \cdot \eta_{alloc}$$

dengan $\eta_{alloc} = 0{,}85$ sebagai *overhead factor* (guard band, sinyal referensi, dan *synchronization*).

### 2.5 Metrik Kinerja Cyber-Physical Assembly

Mengikuti kerangka De Marchi et al. (2022), efektivitas sistem perakitan transfer dipantau melalui:

$$OEE = A \times P \times Q$$

di mana $A$ = *Availability* = $\frac{MTBF}{MTBF + MTTR}$, $P$ = *Performance*, dan $Q$ = *Quality rate*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur AAS untuk Jaringan 5G

Paper Cavalieri et al. (2024) mengusulkan arsitektur berlapis sebagai berikut:

```
┌──────────────────────────────────────────────────────────┐
│  Layer 4 – Application Services (Predictive Maintenance, │
│            Closed-Loop Control, Energy Optimization)     │
├──────────────────────────────────────────────────────────┤
│  Layer 3 – AAS Digital Twin (Submodels: Nameplate,       │
│            Identification, Capability, Diagnostics, 5G    │
│            Communication Profile, Network Slicing)       │
├──────────────────────────────────────────────────────────┤
│  Layer 2 – Communication Middleware (OPC UA over 5G,     │
│            MQTT-SN, HTTP/REST, AASX Registry Server)     │
├──────────────────────────────────────────────────────────┤
│  Layer 1 – Physical 5G Infrastructure (gNodeB, CU/DU,    │
│            5GC, Spectrum n78/n77, UE/Modem)              │
└──────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Implementasi (SOP 8 Langkah)

1. **Asset Identification & Submodel Selection** – Identifikasi aset 5G (gNodeB, core, *edge node*) dan pilih submodel AAS sesuai *AAS Specification Part 1–5*.
2. **Submodel Definition** – Definisikan *Submodel 5G Communication Profile* berisi parameter: MCC, MNC, Cell ID, ARFCN, band, Tx power, antenna gain, throughput historis.
3. **Data Acquisition Pipeline** – Pasang *southbound connector* berbasis NETCONF/YANG ke *Radio Intelligent Controller* (RIC) untuk采集 telemetry (PRB utilization, RSRP, SINR, latency).
4. **AASX Packaging** – Kemasi descriptor dan submodel ke format `.aasx` menggunakan tool resmi *AASX Package Explorer*.
5. **Registry & Discovery** – Daftarkan AAS pada *AAS Repository Server* (Docker-based, port 8081) sehingga *MES/ERP* dapat menemukan via *Discovery Service*.
6. **Real-Time Synchronization** – Implementasikan *change notification* berbasis MQTT ke topik `aas/<id>/submodel/5GComm/events`.
7. **Validation & Testing** – Uji latensi end-to-end dengan packet generator (target: $L_{total} < 4$ ms untuk eMBB, $<1$ ms untuk URLLC).
8. **Continuous Improvement** – Iterasi submodel menggunakan *feedback* dari insiden operasional; update versi AAS mengikuti semver.

### 3.3 Integrasi dengan Cyber-Physical Assembly Transfer System

Berdasarkan De Marchi et al. (2022), sistem transfer perakitan *cyber-physical* memiliki tiga loop kontrol:

- **Loop Cepat (< 1 ms):** kontrol gerakan robot ke PLC melalui 5G URLLC.
- **Loop Sedang (10–100 ms):** koordinasi antar-stasiun ke *Supervisory Controller*.
- **Loop Lambat (> 1 s):** *production planning* ke *ERP/MES*.

AAS berperan sebagai *single source of truth* untuk seluruh loop dengan menyediakan *read/write property* pada submodel *Capability* dan *OperationalData*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Sebuah lini perakitan *transfer system* di pabrik *automotive Tier-1 supplier* dilengkapi *private 5G network* dengan parameter berikut:

| Parameter | Nilai |
|-----------|-------|
| Frekuensi operasi | 3,5 GHz (Band n78) |
| Bandwidth total | 100 MHz |
| Tx power gNodeB | 43 dBm |
| Antenna gain | 18 dBi |
| Path loss model | 3GPP UMi NLOS |
| Noise figure UE | 9 dB |
| Thermal noise density | −174 dBm/Hz |
| Ukuran paket AAS | $F = 1500$ byte $= 12.000$ bit |
| MTBF gNodeB | 50.000 jam |
| MTTR | 4 jam |
| Jumlah UE aktif | 24 |

### 4.2 Perhitungan Throughput

SNR efektif pada jarak 50 m:

$$PL_{UMi-NLOS} = 36{,}7 \log_{10}(d) + 22{,}7 + 26 \log_{10}(f_c)$$

$$PL = 36{,}7 \log_{10}(50) + 22{,}7 + 26 \log_{10}(3{,}5) \approx 112{,}5 \text{ dB}$$

$$P_{rx} = 43 + 18 - 112{,}5 - 9 \approx -60{,}5 \text{ dBm}$$

$$SNR = P_{rx} - (-174 + 10\log_{10}(100 \times 10^6) + 9) \approx 24{,}5 \text{