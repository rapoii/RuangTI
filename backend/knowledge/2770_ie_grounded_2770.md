# 2770 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memaksa para perekayasa sistem industri untuk menghadapi tantangan integrasi yang semakin kompleks antara aset fisik, jaringan telekomunikasi, dan platform komputasi awan (cloud/edge). Dalam konteks ini, *Asset Administration Shell* (AAS) muncul sebagai kerangka referensi standar dari *Plattform Industrie 4.0* dan *Industrial Digital Twin Association* (IDTA) yang mendefinisikan digital twin secara formal melalui struktur submodel, *digital nameplate*, *capability description*, dan *technical data*. Cavalieri, Di Natale, dan Gambadoro (2024) dalam artikel "Asset Administration Shell Digital Twin of 5G Communication System" yang dipublikasikan pada *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics* (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan arsitektur di mana AAS tidak hanya memodelkan aset produksi mesin (CNC, robot, PLC) tetapi juga memodelkan infrastruktur jaringan 5G itu sendiri sebagai *asset* kelas pertama. Pendekatan ini menjawab kebutuhan industri akan visibilitas end-to-end terhadap parameter jaringan seperti *latency*, *jitter*, *packet loss*, dan *throughput* yang secara langsung menentukan kualitas kontrol loop pada lantai pabrik.

Urgensi ekonomi dan teknis dari penelitian ini cukup nyata. McKinsey (2023) memperkirakan pasar digital twin industri akan mencapai USD 110 miliar pada 2030, sementara adopsi *private 5G* di manufaktur tumbuh dengan CAGR lebih dari 35%. Sebelumnya, De Marchi, Rojas, dan Mark (2022) pada DOI [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329) telah mempublikasikan arsitektur digital twin untuk *Cyber-Physical Assembly Transfer System* yang menunjukkan pentingnya komunikasi deterministik untuk sistem perakitan. Kedua paper ini membangun premis bahwa tanpa representasi formal jaringan komunikasi dalam digital twin, sinkronisasi state antara dunia fisik dan virtual akan terdegradasi pada tingkat yang unacceptable untuk aplikasi URLLC (*Ultra-Reliable Low-Latency Communication*) dengan target *end-to-end latency* ≤ 1 ms dan *reliability* 99,999% (5 nines).

Konteks operasional yang dibahas paper utama mencakup skenario *smart manufacturing* di mana sebuah *Production Line Controller* (PLC) harus berinteraksi dengan beberapa *5G User Equipment* (UE) yang tersebar sebagai *wireless field devices*. Tanpa AAS untuk jaringan, kegagalan komunikasi seperti *packet drop*, *handover failure*, atau *buffer overflow* tidak dapat dilokalisasi dengan cepat, sehingga menyebabkan *Mean Time To Repair* (MTTR) yang tinggi dan *Overall Equipment Effectiveness* (OEE) yang rendah. Paper Cavalieri dkk. (2024) menutup celah ini dengan mendefinisikan AAS submodel untuk 5G New Radio (NR), 5G Core (5GC), dan *network slicing*, yang selanjutnya diekspos melalui protokol OPC UA ke lapisan SCADA/MES.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Latensi End-to-End pada Jaringan 5G untuk Digital Twin

Untuk menjamin determinisme komunikasi antara AAS digital twin dan aset fisik, parameter latensi end-to-end ($L_{e2e}$) harus didekomposisi ke dalam komponen-komponen yang dapat dikontrol. Formulasi yang diadopsi mengikuti rekomendasi 3GPP TR 38.913:

$$L_{e2e} = L_{UE} + L_{RAN} + L_{Transport} + L_{5GC} + L_{App}$$

di mana:
- $L_{UE}$ = latensi pemrosesan pada *User Equipment* (≈ 0,5 ms untuk *preemption capability* NR)
- $L_{RAN}$ = latensi radio access network (*transmission time interval* = 1 ms pada numerologi $\mu=1$ atau 0,125 ms pada $\mu=3$)
- $L_{Transport}$ = latensi *backhaul/fronthaul* fiber optik atau *midhaul* (umumnya 0,1–0,3 ms/km)
- $L_{5GC}$ = latensi *User Plane Function* (UPF) dan *Access and Mobility Management Function* (AMF)
- $L_{App}$ = latensi lapisan aplikasi (OPC UA Pub/Sub encoding/decoding, AAS submodel payload)

Batas atas untuk aplikasi *closed-loop motion control* menurut standar IEC 61784-3 adalah $L_{e2e} \leq 1$ ms. Untuk AAS *monitoring* non-kritis, toleransi dapat dilonggarkan hingga 10 ms.

### 2.2. Probabilitas Keandalan dan Packet Error Rate

Keandalan 5G URLLC didefinisikan sebagai probabilitas keberhasilan transmisi paket dalam ukuran tertentu ($L_p$) pada latensi yang ditentukan:

$$R(L_p) = \mathbb{P}[\text{success in } L_p] = 1 - \mathbb{P}[\text{packet loss}]$$

Untuk *Block Error Rate* (BLER) target $10^{-5}$, laju packet error per transmisi mengikuti:

$$P_e = 1 - \prod_{i=1}^{N_t}(1 - BER_i) \leq 10^{-5}$$

Jika menggunakan OFDM dengan *modulation coding scheme* (MCS) rendah (QPSK, code rate 1/3), SNR yang dibutuhkan pada *Shannon-Hartley limit*:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right) \quad \text{[bit/s]}$$

Untuk bandwidth $B = 100$ MHz dan SNR = 5 dB (≈ 3,16 linier):

$$C = 100 \times 10^6 \cdot \log_2(1 + 3,16) = 100 \times 10^6 \cdot 2 = 200 \text{ Mbps}$$

### 2.3. Model Sinkronisasi State Digital Twin

State digital twin $x_t$ pada waktu diskrit $t$ diperbarui dari pengukuran sensor $z_t$ dan perintah kontrol $u_t$ menurut persamaan *state-space*:

$$x_{t+1} = A x_t + B u_t + w_t$$
$$z_t = H x_t + v_t$$

di mana $w_t \sim \mathcal{N}(0, Q)$ adalah *process noise* dan $v_t \sim \mathcal{N}(0, R)$ adalah *measurement noise*. Divergensi antara state sebenarnya dan state twin dapat diukur dengan *Root Mean Square Error* (RMSE):

$$\text{RMSE} = \sqrt{\frac{1}{N}\sum_{t=1}^{N}(x_t - \hat{x}_t)^2}$$

Ambang batas RMSE yang umum pada aplikasi industri adalah ≤ 2% dari rentang pengukuran (span sensor).

### 2.4. Network Slicing untuk AAS

Network slice didefinisikan oleh tuple $S_i = \{B_i, L_i^{max}, R_i, J_i^{max}\}$ di mana $B_i$ adalah bandwidth garantée, $L_i^{max}$ adalah latensi maksimum, $R_i$ adalah target reliabilitas, dan $J_i^{max}$ adalah jitter maksimum. Resource allocation antar slice mengikuti formulasi *proportional fairness*:

$$\max \sum_{i=1}^{N_s} U_i(B_i) \quad \text{s.t.} \quad \sum_{i=1}^{N_s} B_i \leq B_{total}$$

dengan fungsi utilitas logaritmik $U_i(B_i) = \log(1 + B_i/B_{min})$ yang menjamin keadilan antar slice.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur AAS untuk 5G

Cavalieri dkk. (2024) mengusulkan arsitektur berlapis (layered) yang terdiri dari:

```
┌──────────────────────────────────────────────────────────┐
│ Layer 4: Application    │ OPC UA / AAS Information Model │
├──────────────────────────────────────────────────────────┤
│ Layer 3: 5GC + Network  │ AMF / SMF / UPF / NRF / PCF   │
│         Slicing Manager │                                │
├──────────────────────────────────────────────────────────┤
│ Layer 2: RAN (gNB)      │ CU / DU / RU — NR PHY/MAC     │
├──────────────────────────────────────────────────────────┤
│ Layer 1: Field Devices  │ UE (CPE), PLC, Robot, Sensor  │
└──────────────────────────────────────────────────────────┘
```

Setiap layer memiliki submodel AAS yang mengekspos:
1. **Identification** (digital nameplate, manufacturer data, *serial number* GS1-compliant)
2. **Capability Description** (fitur 5G yang didukung: EN-DC, mmWave, RedCap, TSN bridge)
3. **Operational Data** (KPI real-time: RSRP, SINR, throughput, latency)
4. **Maintenance & Documentation** (firmware version, log event, MTTF estimation)

### 3.2. SOP Implementasi di Lantai Pabrik

**Tahap 1 — *Site Survey* & Spektrum:**
- Lakukan *drive test* dengan scanner 5G (misal: Rohde & Schwarz ROMES) pada band n78 (3,5 GHz) atau n261 (28 GHz).
- Ukur *Reference Signal Received Power* (RSRP) target ≥ −80 dBm dan SINR ≥ 10 dB pada 95% area.

**Tahap 2 — *Digital Twin Initialization*:**
- Buat instans AAS menggunakan *aasx package explorer* (IDTA-compliant) untuk setiap UE, gNB, dan UPF.
- Isi submodel sesuai *AAS Metamodel* versi 3.0 (IDTA-01001).

**Tahap 3 — Konfigurasi Network Slicing:**
- Definisikan minimal dua slice:
  - *URLLC slice*: $S_1 = \{10 \text{ MHz}, 1 \text{ ms}, 99,999\%, 100 \mu s\}$ untuk control loop.
  - *eMBB slice*: $S_2 = \{80 \text{ MHz}, 20 \text{ ms}, 99,9\%, 5 \text{ ms}\}$ untuk *telemetry* AAS.

**Tahap 4 — *Commissioning* & Validasi:**
- Jalankan *latency probe* (ping dengan *timestamp* 5G-precise) selama 24 jam.
- Hitung distribusi *end-to-end latency* dan plot *CDF* (Cumulative Distribution Function).
- Verifikasi bahwa quantile 99,999% ($\text{Q}_{99,999}$) ≤ 1 ms.

**Tahap 5 — *Operational Mode* & Continuous Update:**
- AAS diperbarui setiap 100 ms via *OPC UA Pub/Sub* (UDP transport).
- Event kritis (handover failure, BLER > threshold) dikirim via *Alarms & Conditions* AAS service.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario: *Smart Factory* dengan 20 *Cyber-Physical Assembly Station*

Sebuah pabrik perakitan komponen otomotif menerapkan arsitektur dari De Marchi dkk. (2022) yang terdiri dari 20 *assembly transfer system* yang saling bekerja sama, masing-masing dikontrol oleh satu UE (CPE 5G industri). Setiap UE mengirim 1000 paket/detik dengan payload 64 byte ke *edge controller* AAS digital twin.

**Input Parameter:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah UE ($N$) | 20 | unit |
| Laju paket per UE ($\lambda$) | 1.000 | pkt/s |
| Payload per paket ($P$) | 64 | byte |
| Bandwidth total 5G ($B_{total}$) | 100 | MHz |
| Numerologi NR ($\mu$) | 2 | (subcarrier spacing 60 kHz) |
| TTI NR | 0,25 | ms |
| Jarak UE ke gNB rata-rata | 50 | m |
| Throughput slot NR | 165,6 | Mbps (SISO, MCS 9) |

**Langkah 1 — Throughput Agregat yang Dibutuhkan:**

$$T_{agg} = N \cdot \lambda \cdot P \cdot 8 = 20 \cdot 1000 \cdot 64 \cdot 8 = 10{,}24 \text{ Mbps}$$

**Langkah 2 — Utilisasi Link:**

$$\rho = \frac{T_{agg}}{T_{slot}} = \frac{10{,}24}{165{,}6} \times 100\% =
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
