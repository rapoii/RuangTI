# 1954 — Digital Twin berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024)*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022)*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi industri manufaktur ke arah **Industri 4.0** dan **Industri 5.0** mensyaratkan integrasi empat pilar utama: *Cyber-Physical Production Systems* (CPPS), *Internet of Things* (IoT), komputasi awan-edge, dan digital twin (DT). Di antara pilar-pilar tersebut, digital twin telah berevolusi dari sekadar representasi tiga dimensi menjadi entitas rekayasa yang menyediakan umpan balik dua arah antara entitas fisik (*physical asset*) dan representasi virtuilnya (*virtual counterpart*). Cavalieri, Di Natale, dan Gambadoro (2024) dalam paper *"Asset Administration Shell Digital Twin of 5G Communication System"* yang dipublikasikan pada ICINTO 2024 (DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) mengusulkan kerangka kerja DT yang menerapkan spesifikasi **Asset Administration Shell (AAS)** — standar interoperabilitas yang dipromosikan oleh *Plattform Industrie 4.0* dan kini diformalkan sebagai **IEC 63278** — untuk mengelola subsistem komunikasi nirkabel 5G dalam lingkungan industri.

Urgensi penelitian ini lahir dari dua tantangan konkret. Pertama, **heterogenitas protokol komunikasi** pada lantai produksi (OPC UA, MQTT, Profinet, Modbus TCP) menghasilkan silo data yang menghambat integrasi horizontal-vertikal. Kedua, **jaringan 5G privat industri** dengan profile *Ultra-Reliable Low-Latency Communication* (URLLC), *enhanced Mobile BroadBand* (eMBB), dan *massive Machine-Type Communication* (mMTC) memerlukan representasi digital yang dapat melakukan *real-time monitoring*, *root-cause analysis*, dan *predictive maintenance* terhadap Baseband Unit (BBU), Radio Unit (RU), serta Core Network. Tanpa shell administrasi yang terstandar, operator industri kesulitan melakukan *configuration management*, *firmware update orchestration*, dan *lifecycle tracking* terhadap infrastruktur 5G yang terdistribusi.

Paper kedua oleh De Marchi, Rojas, dan Mark (2022) dengan judul *"Digital Twin Architecture of a Cyber-physical Assembly Transfer System"* (DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) yang terbit di IN4PL 2022 memperkaya konteks dengan memperlihatkan bagaimana arsitektur DT *cyber-physical* dapat di-*deploy* pada sistem transfer perakitan dengan konveyor, aktuator pneumatik, dan sensor visi. Kedua paper ini saling melengkapi: paper pertama memberikan kontribusi pada **level jaringan komunikasi**, sementara paper kedua memberikan kontribusi pada **level mesin fisik**. Gabungan keduanya memetakan arsitektur referensi berlapis (*layered reference architecture*) untuk pabrik pintar masa depan, di mana AAS bertindak sebagai *semantic backbone* yang mengikat seluruh subsistem heterogen.

Konteks ekonomi industrial juga signifikan. Studi *Plattform Industrie 4.0* (2023) memproyeksikan bahwa interoperabilitas berbasis AAS dapat menurunkan *integration cost* pada proyek digitalisasi pabrik hingga 30–45%, sementara *5G-ACIA* (5G Alliance for Connected Industries and Automation) memperkirakan latensi URLLC 5G privat industri mampu turun hingga **1 ms** dengan reliabilitas **99,999%** (lima sembilan), mendekati level hard real-time yang dibutuhkan pada *closed-loop control* aktuator perakitan. Oleh karena itu, integrasi AAS × 5G × DT bukan sekadar riset akademis melainkan kebutuhan operasional yang nyata di industri otomotif, semikonduktor, dan logistik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Taksonomi Digital Twin dan State Synchronization

Berdasarkan taksonomi Kritzinger et al. (2018) yang banyak diadopsi dalam literatur digital twin industri, terdapat tiga tingkat kematangan:

| Tingkat | Definisi | Arah Aliran Data |
|---------|----------|------------------|
| **Digital Model** | Representasi statis tanpa koneksi otomatis | Manual → Digital |
| **Digital Shadow** | Data fisik mengalir ke digital, otomatis satu arah | Fisik → Digital |
| **Digital Twin** | Aliran data dua arah otomatis | Fisik ⇄ Digital |

Paper Cavalieri et al. (2024) menargetkan level tertinggi, di mana status AAS dapat secara otomatis mengubah konfigurasi fisik node 5G. Formulasi umum sinkronisasi status antara physical asset $P$ dan virtual counterpart $V$ dapat dinyatakan sebagai:

$$s_v(t) = \mathcal{F}(s_p(t-\tau), \mathbf{u}(t-\tau), \mathbf{w}(t))$$

dengan $s_p(t)$ vektor status fisik pada waktu $t$, $s_v(t)$ vektor status virtual, $\tau$ latensi komunikasi, $\mathbf{u}(t)$ vektor aksi kontrol, dan $\mathbf{w}(t)$ proses noise yang umumnya dimodelkan sebagai Gaussian $\mathcal{N}(0, \mathbf{Q})$. Error sinkronisasi didefinisikan sebagai norma Euclidean:

$$E_{sync}(t) = \|s_p(t) - s_v(t)\|_2 = \sqrt{\sum_{i=1}^{n}(s_{p,i}(t) - s_{v,i}(t))^2}$$

### 2.2 State-Space Model dan Kalman Filter untuk Estimasi DT

Untuk mengestimasi status elemen radio 5G yang tidak dapat diukur langsung (misalnya *propagation channel state*), digunakan **Discrete Kalman Filter** dengan state-space linear:

$$\hat{\mathbf{x}}(k|k-1) = \mathbf{A}\hat{\mathbf{x}}(k-1|k-1) + \mathbf{B}\mathbf{u}(k-1)$$

$$\mathbf{P}(k|k-1) = \mathbf{A}\mathbf{P}(k-1|k-1)\mathbf{A}^T + \mathbf{Q}$$

dengan *kalman gain*:

$$\mathbf{K}(k) = \mathbf{P}(k|k-1)\mathbf{C}^T(\mathbf{C}\mathbf{P}(k|k-1)\mathbf{C}^T + \mathbf{R})^{-1}$$

dan update estimasi:

$$\hat{\mathbf{x}}(k|k) = \hat{\mathbf{x}}(k|k-1) + \mathbf{K}(k)(\mathbf{y}(k) - \mathbf{C}\hat{\mathbf{x}}(k|k-1))$$

Pada konteks AAS × 5G, $\mathbf{x}$ merepresentasikan state internal BBU (jumlah user scheduled, buffer occupancy, beamforming weight), $\mathbf{y}$ adalah pengukuran dari *performance management counters* (PMC) seperti throughput PHY dan BLER, sedangkan $\mathbf{Q}$ dan $\mathbf{R}$ adalah covariance noise proses dan pengukuran.

### 2.3 Model Latensi dan Reliabilitas URLLC 5G

Total latensi end-to-end untuk transmisi URLLC pada jaringan 5G privat:

$$T_{total} = T_{tx} + T_{prop} + T_{queue} + T_{proc} + T_{harq}$$

dengan:
- $T_{tx}$ = waktu transmisi (frame duration × jumlah frame)  
- $T_{prop}$ = propagasi udara ($d/c$ dengan $d$ jarak, $c$ kecepatan cahaya)  
- $T_{queue}$ = antrian MAC scheduler  
- $T_{proc}$ = pemrosesan gNB/UE  
- $T_{harq}$ = retransmisi Hybrid ARQ  

Untuk reliability:

$$R_{URLLC} = 1 - P_{e}(L) = 1 - 10^{-\frac{L}{10}}$$

dan probabilitas outage sistem secara agregat:

$$P_{out} = \prod_{i=1}^{N}(1 - p_i)$$

dengan $p_i$ reliabilitas link $i$.

### 2.4 Struktur Submodel AAS (IEC 63278)

AAS distrukturkan ke dalam submodel menurut spesifikasi:

$$AAS = \{M_{meta}, M_{nameplate}, M_{technical}, M_{operational}, M_{capability}, M_{documentation}\}$$

Setiap submodel berisi *property* $\pi_j$ dengan pasangan atribut $(n_j, v_j, t_j)$ di mana $n_j$ adalah nama, $v_j$ nilai, dan $t_j$ tipe data. Relasi antar submodel membentuk Directed Acyclic Graph (DAG):

$$\mathcal{G}_{AAS} = (V, E), \quad V = \{M_{sub}\}, \quad E \subseteq V \times V$$

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Arsitektur Berlapis AAS × 5G × DT

Mengikuti kontribusi Cavalieri et al. (2024), arsitektur sistem terdiri atas empat lapisan:

```
┌──────────────────────────────────────────────────────────────┐
│ Layer 4: Application Services (Predictive Maintenance, RCA) │
├──────────────────────────────────────────────────────────────┤
│ Layer 3: Asset Administration Shell (AAS Repository)         │
│   ├─ Submodel Nameplate (5G Node Identity)                  │
│   ├─ Submodel Technical (Radio Capabilities)                │
│   ├─ Submodel Operational (Live Telemetry)                  │
│   └─ Submodel Capability (Network Slicing Profiles)         │
├──────────────────────────────────────────────────────────────┤
│ Layer 2: Middleware (OPC UA / MQTT / AASX Server)           │
├──────────────────────────────────────────────────────────────┤
│ Layer 1: Physical 5G Network (gNB, UE, Core, Transport)     │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi

**Fase 1 — Discovery & Modeling (Minggu 1–3):**  
1. Inventarisasi node 5G (gNB, CU, DU, RU).  
2. Pembuatan *nameplate* AAS per node dengan identifier menurut IEC 63278-3.  
3. Pemetaan *Submodel Templates* (versi 3.0 dari IDTA).

**Fase 2 — Integration (Minggu 4–6):**  
4. Deploy **BaSyx AAS Server** (open-source reference implementation).  
5. Konfigurasi endpoint OPC UA di tiap gNB untuk PMC.  
6. Setup MQTT broker (HiveMQ/EMQX) untuk telemetry stream.

**Fase 3 — DT Configuration (Minggu 7–9):**  
7. Kalibrasi Kalman Filter menggunakan data historis 30 hari.  
8. Validasi $E_{sync}$ terhadap threshold (target ≤ 5% RMSE).  
9. Konfigurasi *event-driven update* untuk mengurangi beban komunikasi.

**Fase 4 — Operation & Continuous Improvement (Minggu 10+):**  
10. Monitoring KPI: *availability*, *latency*, *sync error*.  
11. Penjadwalan re-training Kalman Filter setiap 90 hari.

### 3.3 Integrasi dengan Sistem Transfer Perakitan (De Marchi et al., 2022)

Paper De Marchi et al. (2022) melengkapi arsitektur di atas dengan modul **Cyber-Physical Assembly Transfer (CPAT)** yang berfungsi sebagai *case study* integrasi. Kon