# 2226 — Asset Administration Shell sebagai Inti Digital Twin Sistem Komunikasi 5G untuk Otomasi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin untuk Sistem Komunikasi 5G, dengan Aplikasi pada Sistem Transfer Perakitan Cyber-Physical
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 di lantai pabrik modern menuntut integrasi vertikal dan horizontal yang mulus antara aset fisik di shop floor, sistem kontrol edge, dan platform cloud. Namun, fragmentasi protokol komunikasi historis (PROFIBUS, Modbus, OPC Classic, MQTT proprietary) menghasilkan *island of automation* yang menghambat interoperabilitas data, menurunkan *Overall Equipment Effectiveness* (OEE), dan meningkatkan waktu *mean time to repair* (MTTR). Dalam konteks ini, Asset Administration Shell (AAS) muncul sebagai arsitektur referensi resmi yang distandarisasi oleh Plattform Industrie 4.0 dan kini sedang dalam proses adopsi menjadi standar IEC (PAS 63278 series).

Cavalieri, Di Natale, dan Gambadoro (2024) dalam paper yang diterbitkan di ICINCO 2024 ([DOI 10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti bahwa transisi ke jaringan privat 5G di lingkungan manufaktur memerlukan representasi digital yang secara *native* memahami karakteristik *Ultra-Reliable Low-Latency Communication* (URLLC), *enhanced Mobile BroadBand* (eMBB), dan *massive Machine-Type Communication* (mMTC). Tanpa model data yang konsisten, manajemen *Quality of Service* (QoS) jaringan nirkabel industri tidak dapat di-*orchestrate* secara otomatis oleh *Manufacturing Execution System* (MES) atau *Enterprise Resource Planning* (ERP). Hasil riset mereka menunjukkan bahwa celah representasi digital ini menjadi salah satu *root cause* utama ketidakstabilan komunikasi mission-critical pada aplikasi *motion control* (latency budget ≤ 1 ms, reliability 99,999%) dan *process automation* (latency budget ≤ 50 ms).

Studi komplementer oleh De Marchi, Rojas, dan Mark (2022) ([DOI 10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menguatkan urgensi ini dari perspektif arsitektur *cyber-physical assembly transfer system*. Mereka menunjukkan bahwa sistem transfer workpiece pada lini perakitan otomatis—yang mengandalkan sinkronisasi presisi servo, vision system, dan *programmable logic controller* (PLC)—mengalami *commissioning* yang lambat (rata-rata 6–8 minggu untuk lini baru) karena tidak adanya *single source of truth* antara model CAD mekanik, model kontrol PLC, dan model jaringan. Dengan mengadopsi pendekatan AAS sebagai backbone Digital Twin, ketiga penulis tersebut mendemonstrasikan reduksi waktu commissioning hingga 35–40% dan peningkatan *first-time-right rate* dari 72% menjadi 94%.

Urgensi ekonomi dan teknis pada akhirnya mengerucut pada tiga kebutuhan operasional: (1) interoperabilitas semantik lintas-vendor, (2) ketersediaan data real-time yang rendah latency, dan (3) kemampuan *closed-loop simulation* antara aset fisik dan representasi digitalnya. Modul 2226 ini membahas bagaimana AAS Digital Twin menjawab ketiga kebutuhan tersebut melalui formalisasi submodel 5G dan integrasinya dengan arsitektur transfer perakitan cyber-physical.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Referensi AAS dan Submodel

AAS didefinisikan secara formal sebagai gabungan dari dua entitas utama: **Asset** (entitas fisik atau logis) dan **Administration Shell** (representasi digitalnya). Representasi digital tersusun atas beberapa **Submodel** yang masing-masing merepresentasikan aspek fungsional spesifik. Struktur ini secara ringkas dapat diformulasikan sebagai:

$$AAS_i = \{A_i, S_i, \mathcal{M}_i\}$$

di mana $A_i$ adalah aset fisik ke-$i$, $S_i$ adalah *shell identifier*, dan $\mathcal{M}_i = \{m_{i,1}, m_{i,2}, \ldots, m_{i,k}\}$ adalah himpunan submodel. Setiap submodel $m_{i,j}$ mengekspos **Property**, **Operation**, dan **Event** yang dapat diakses via antarmuka AAS yang menggunakan *Serialization* JSON atau AASX (berbasis OPC UA Binary).

### 2.2 Model Latensi Sistem Komunikasi 5G

Untuk menjamin komunikasi industri mission-critical, parameter latensi end-to-end harus memenuhi budget tertentu. Total latensi round-trip-time (RTT) antara sensor/aktuator dan kontroler adalah:

$$T_{RTT} = T_{tx} + T_{prop} + T_{queue} + T_{proc} + T_{retrans} + T_{app}$$

Dengan 5G NR (*New Radio*), parameter URLLC memiliki target:
- **User-plane latency:** $T_{UPL} \le 1 \text{ ms}$ (target 3GPP Release 16)
- **Reliability:** $P_{succ} = 1 - 10^{-5}$ untuk paket 32 bytes dalam 1 ms
- **Cyclic Prefix OFDM Symbol:** $T_{sym} = \frac{1}{2^{\mu} \cdot \Delta f}$ dengan subcarrier spacing $\Delta f = 15 \cdot 2^{\mu}$ kHz, di mana $\mu \in \{0,1,2,3,4\}$

Probabilitas keberhasilan transmisi end-to-end dengan mekanisme *Hybrid Automatic Repeat Request* (HARQ) mengikuti distribusi geometris:

$$P_{fail,n} = (1 - p_{block})^{n} \cdot p_{block}$$

di mana $p_{block}$ adalah *Block Error Rate* (BLER) per transmisi dan $n$ adalah jumlah maksimum retransmisi. Untuk target reliability $99{,}999\%$ dengan $p_{block} = 10^{-2}$, dibutuhkan $n \ge 2$ transmisi.

### 2.3 Model Throughput Lini Perakitan (Teori Antrean)

Untuk sistem transfer perakitan cyber-physical seperti pada De Marchi et al. (2022), throughput stasiun dapat dimodelkan sebagai antrean M/G/1 atau M/M/c. Utilisasi server:

$$\rho = \frac{\lambda}{\mu \cdot c} < 1$$

di mana $\lambda$ adalah laju kedatangan workpiece (unit/jam), $\mu$ adalah service rate per server, dan $c$ adalah jumlah server paralel. Untuk menjamin stabilitas dan *cycle time* deterministik, constraint berikut harus dipenuhi:

$$CT_{p95} = \frac{\rho^{\sqrt{2(c+1)}-1}}{c \cdot \mu \cdot (1-\rho)} + \frac{1}{\mu} \le T_{budget}$$

di mana $CT_{p95}$ adalah *cycle time* pada persentil ke-95 dan $T_{budget}$ adalah target takt-time lini.

### 2.4 Model Sinkronisasi Digital Twin

Sinkronisasi antara Physical Asset dan Digital Twin melalui AAS diekspresikan sebagai fungsi state-update:

$$S_{DT}(t+\Delta t) = \Phi\left(S_{DT}(t), Y_{sensor}(t), U_{control}(t)\right)$$

di mana $\Phi$ adalah *predictor function*, $Y_{sensor}(t)$ adalah vektor pengukuran, dan $U_{control}(t)$ adalah vektor aksi kontrol. Akurasi sinkronisasi dievaluasi menggunakan *Root Mean Square Error* (RMSE):

$$RMSE = \sqrt{\frac{1}{N}\sum_{k=1}^{N}\left(s_{DT,k} - s_{real,k}\right)^2}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Tiga-Layer

Implementasi AAS Digital Twin untuk sistem 5G industri mengikuti arsitektur tiga-layer yang diadopsi oleh Cavalieri et al. (2024):

| Layer | Komponen | Protokol | Fungsi |
|-------|----------|----------|--------|
| **Field Layer** | Sensor, Aktuator, PLC, 5G UE | OPC UA over 5G URLLC | Akuisisi data real-time |
| **Edge Layer** | AAS Server, MQTT Broker, 5G gNB | HTTP/HTTPS (AAS API), MQTT | Konsolidasi data, submodel publishing |
| **Cloud Layer** | AAS Registry, Digital Twin Engine, Analytics | REST API, AASX Package | Simulasi, prediksi, optimasi |

### 3.2 SOP Implementasi AAS Submodel 5G

Berdasarkan metodologi Cavalieri et al. (2024), langkah implementasi sistematis adalah sebagai berikut:

1. **Identifikasi Aset:** Definisikan setiap elemen jaringan 5G (gNB, AMF, SMF, UPF, UE industri) sebagai *Asset* AAS.
2. **Desain Submodel:** Bangun minimal empat submodel esensial:
   - *Identification* (submodel sesuai IEC 63078)
   - *5GCommunicationCapability* (vendor, standar 3GPP release, band)
   - *5GQoSPerformance* (latency, throughput, BLER, jitter historis)
   - *NetworkSlicingConfiguration* (SST, SD, resource allocation)
3. **Encoding:** Submodel dikodekan dalam format AAS JSON sesuai *AAS Specification Part 2* (API & Metamodel).
4. **Deployment:** AAS Server di-deploy di edge (near-RT timeframe ≤ 100 ms) atau cloud (non-RT).
5. **Integrasi PLC/MES:** Sambungkan AAS dengan PLC menggunakan *BaSyx* SDK atau *Eclipse AASX Package Explorer* untuk sinkronisasi *live data*.
6. **Validasi & Commissioning:** Lakukan uji conformance terhadap *AAS Test Specification* (Plattform Industrie 4.0) sebelum Go-Live.

### 3.3 Integrasi dengan Sistem Transfer Perakitan

Merujuk pada De Marchi et al. (2022), integrasi AAS dengan *cyber-physical assembly transfer system* mengikuti diagram alur berikut:

```
[Workpiece Detection] → [Vision System OPC UA Server] → [AAS Edge Hub]
        ↓                                                    ↓
[Conveyor PLC via 5G URLLC]  ←←←  [Digital Twin Sync]  ←←  [AAS Submodel: KinematicsState]
        ↓                                                    ↓
[Robot Pick-and-Place]  →  [AAS Event Notification]  →  [MES Dashboard + Predictive Maintenance]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Lini Perakitan Otomotif dengan 5G Privat

**Parameter input industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah robot transfer | $c = 6$ | unit |
| Laju kedatangan workpiece $\lambda$ | 120 | unit/jam |
| Service rate per robot $\mu$ | 25 | unit/jam |
| Budget cycle time $T_{budget}$ | 45 | detik |
| Subcarrier spacing 5G NR $\mu_{NR}$ | 2 (30 kHz) | - |
| Ukuran paket kontrol | 64 | bytes |
| BLER target | $10^{-3}$ | - |

### 4.2 Perhitungan Utilisasi dan Throughput

**Langkah 1:** Hitung utilisasi server:

$$\rho = \frac{\lambda}{c \cdot \mu} = \frac{120}{6 \cdot 25} = \frac{120}{150} = 0{,}80$$

Karena $\rho = 0{,}80 < 1$, sistem berada dalam kondisi stabil.

**Langkah 2:** Hitung *cycle time* persentil ke-95 menggunakan formula M/M/c:

$$CT_{p95} = \frac{0{,}80^{\sqrt{2 \cdot 7}-1}}{6 \cdot 25 \cdot (1-0{,}80)} + \frac{1}{25 \cdot 3600}$$

$$CT_{p95} = \frac{0{,}80^{2{,}646}}{150 \cdot 0{,}20} + 0{,}044$$

$$CT_{p95} = \frac{0{,}4504}{30} + 0{,}044 = 0{,}01501 + 0{,}044 = 0{,}0590 \text{ jam}$$

$$CT_{p95} = 0{,}0590 \times 3600 = 212{,}5 \text{ detik}$$

**Interpretasi Manajerial:** Hasil ini menunjukkan bahwa $CT_{p95} = 212{,}5$ detik **melebihi** $T_{budget} = 45$ detik, artinya lini tidak memenuhi target takt-time. Rekomendasi engineering: tambah satu server ($c = 7$) atau naikkan service rate $\mu$ menjadi 32 unit/jam melalui *predict.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
