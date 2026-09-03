# 2738 — Digital Twin Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Produksi Industri Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System; Cyber-Physical Assembly Transfer System Digital Twin Architecture
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah mengubah secara fundamental cara sistem manufaktur, logistik, dan infrastruktur komunikasi dirancang, dioperasikan, dan dipelihara. Cavalieri, Di Natale, dan Gambadoro (2024) dalam makalah *Asset Administration Shell Digital Twin of 5G Communication System* (DOI: 10.5220/0012914200003822) menyoroti urgensi integrasi antara **Asset Administration Shell (AAS)** — yang diformalisasikan oleh *Plattform Industrie 4.0* dan kini distandardisasi melalui IEC 63278 — dengan infrastruktur jaringan 5G privat yang menjadi tulang punggung komunikasi nirkabel latensi-ultra-rendah di lantai pabrik. Dalam arsitektur AAS, setiap aset industri (sensor, aktuator, robot, PLC, *base station*, bahkan modul *radio unit* 5G) dimodelkan sebagai entitas digital melalui submodel, *property*, dan *operation* yang dapat diakses interoperable via protokol OPC UA atau HTTP/REST (Cavalieri et al., 2024).

Konteks ekonomi industri menjadi pendorong utama: pasar global 5G private network untuk industri diproyeksikan tumbuh dari USD 2,6 miliar (2024) menjadi USD 16,8 miliar pada 2030 (CAGR ≈ 36,5%), sementara kerugian *downtime* satu lini produksi otomatis bernilai USD 22.000–50.000 per menit. Tanpa representasi digital yang formal terhadap elemen *network slice*, *User Plane Function* (UPF), dan *gNodeB*, operator industri tidak mampu melakukan *root cause analysis* secara deterministik ketika terjadi anomali komunikasi yang berdampak pada *Overall Equipment Effectiveness* (OEE).

De Marchi, Rojas, dan Mark (2022) — DOI: 10.5220/0011589900003329 — melengkapi lanskap ini dengan mengusulkan arsitektur *digital twin* berlapis untuk sistem transfer perakitan siber-fisik (CPAT). Mereka menunjukkan bahwa integrasi antara subsistem mekanik, sensor IoT, dan protokol komunikasi nirkabel *ultra-reliable low-latency communication* (URLLC) mensyaratkan kerangka sinkronisasi yang konsisten antara *physical asset* dan *virtual representation*. Bersama-sama, kedua makalah membangun bukti bahwa AAS bukan sekadar *metadata wrapper*, melainkan kerangka rekayasa industri yang memungkinkan **interoperability semantik**, **traceability rantai pasok**, dan **simulasi what-if** untuk sistem komunikasi dan produksi simultan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Matematis Asset Administration Shell

AAS didefinisikan secara formal sebagai pasangan $\mathcal{A} = (\mathcal{M}, \mathcal{S})$ di mana $\mathcal{M}$ adalah himpunan submodel dan $\mathcal{S}$ adalah himpunan *capability* (servis). Setiap submodel $\mathcal{S}_i \in \mathcal{M}$ dinyatakan sebagai tuple (Cavalieri et al., 2024):

$$\mathcal{S}_i = (ID_i, \mathcal{P}_i, \mathcal{O}_i, \mathcal{E}_i)$$

dengan $ID_i$ = identifier (IRI), $\mathcal{P}_i$ = himpunan *property* $\{p_1, p_2, \dots, p_n\}$, $\mathcal{O}_i$ = himpunan *operation*, dan $\mathcal{E}_i$ = himpunan *event*. Setiap *property* $p_k$ merupakan fungsi pemetaan antara waktu $t$ diskrit dan nilai domain $\mathbb{D}_k$:

$$p_k : \mathbb{T} \rightarrow \mathbb{D}_k, \quad p_k(t) = v_k$$

Untuk properti dinamis (misalnya *throughput* 5G), digunakan representasi deret waktu diskrit:

$$\hat{p}_k(t) = \alpha_k p_k(t) + (1-\alpha_k) \hat{p}_k(t-1) + \beta_k \varepsilon_k(t)$$

dengan $\alpha_k$ = koefisien *exponential smoothing*, $\beta_k$ = bobot *innovation*, dan $\varepsilon_k(t)$ = *residual*.

### 2.2 Kapasitas Kanal 5G (Shannon-Hartley)

Untuk *sub-6 GHz* (FR1) dan *mmWave* (FR2), kapasitas kanal 5G mengikuti teorema Shannon-Hartley:

$$C = B \cdot \log_2\left(1 + \frac{S}{N}\right) \text{ [bit/s]}$$

dengan $B$ = bandwidth (Hz), $S$ = daya sinyal, $N$ = daya derau. Pada URLLC, target *Block Error Rate* $BLER_{target} \le 10^{-5}$ memaksakan *coding rate* efektif:

$$R_{eff} = \frac{C \cdot (1 - BLER)}{L_{frame}}$$

dengan $L_{frame}$ = panjang frame mini-slot 5G (2–4 OFDM symbol, $\approx 0,125$ ms).

### 2.3 Sinkronisasi Digital Twin (State-Space Model)

Mengikuti De Marchi et al. (2022), *physical asset* dan *digital twin* dimodelkan dengan persamaan ruang-keadaan *discrete-time* yang identik:

$$x_{ph}(k+1) = A x_{ph}(k) + B u(k) + w(k)$$
$$x_{dt}(k+1) = A x_{dt}(k) + B u(k) + w_{dt}(k)$$

dengan $A \in \mathbb{R}^{n \times n}$ matriks status, $B \in \mathbb{R}^{n \times m}$ matriks input, $w(k)$ *process noise* ~ $\mathcal{N}(0, Q)$. Kesalahan sinkronisasi didefinisikan sebagai:

$$\Delta x(k) = \|x_{ph}(k) - x_{dt}(k)\|_2 = \sqrt{\sum_{i=1}^{n}(x_{ph,i} - x_{dt,i})^2}$$

yang harus dijaga $\Delta x(k) \le \Delta x_{threshold}$.

### 2.4 Model Latensi End-to-End

Latensi end-to-end komunikasi 5G untuk loop kontrol industri:

$$\tau_{E2E} = \tau_{tx} + \tau_{prop} + \tau_{queue} + \tau_{proc} + \tau_{harq}$$

dengan $\tau_{tx}$ = transmisi (mini-slot 0,125 ms), $\tau_{prop}$ = propagasi, $\tau_{queue}$ = antrian pada gNodeB, $\tau_{proc}$ = *processing time* UPF, $\tau_{harq}$ = *hybrid automatic repeat request*. Untuk URLLC, target $\tau_{E2E} \le 1$ ms pada 99,999% keandalan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur AAS untuk 5G Communication System

Cavalieri et al. (2024) mengusulkan arsitektur berlapis *AAS-based digital twin of 5G* yang terdiri dari empat lapisan:

1. **Lapisan Aset Fisik**: *gNodeB*, antena MIMO, fiber backhaul, *edge server*.
2. **Lapisan AAS Model**: setiap aset diekspos sebagai AAS instance dengan submodel:
   - `Identification` (mengacu IEC 63278-1)
   - `CommunicationProfile` (RFC 8428, 3GPP TS 28.541)
   - `PerformanceMetrics` (KPI 5G: throughput, latency, jitter, BLER)
   - `LifecycleStatus` (Commissioning → Operating → Maintenance → Decommissioning)
3. **Lapisan Registri**: AAS Repository (BaSyx, Eclipse Ditto) dengan *Distributed Digital Twin Registry*.
4. **Lapisan Aplikasi**: dashboard OEE, predictive maintenance, *network slicing manager*.

### 3.2 SOP Implementasi Sistematis

```
┌─────────────────────────────────────────────────────┐
│ Tahap 1: Asset Inventory & IRI Assignment           │
│   - Identifikasi semua node jaringan 5G             │
│   - Tetapkan IRI: aas://[vendor]/[site]/[asset]    │
├─────────────────────────────────────────────────────┤
│ Tahap 2: Submodel Engineering                       │
│   - Pilih template dari submodel library            │
│   - Definisikan property, operation, event          │
├─────────────────────────────────────────────────────┤
│ Tahap 3: Data Binding (OPC UA / MQTT)               │
│   - Konfigurasi endpoint AAS (HTTP/REST)            │
│   - Mapping tag PLC → AAS Property                  │
├─────────────────────────────────────────────────────┤
│ Tahap 4: Synchronization Validation                 │
│   - Bandingkan x_ph vs x_dt (Δx ≤ threshold)        │
│   - Latency SLA: τ_E2E ≤ 1 ms (URLLC)               │
├─────────────────────────────────────────────────────┤
│ Tahap 5: Lifecycle Integration                      │
│   - Hubungkan ke PLM/MES (SAP, Siemens Teamcenter)  │
└─────────────────────────────────────────────────────┘
```

### 3.3 Integrasi dengan Sistem Transfer Perakitan (CPAT)

Berdasarkan De Marchi et al. (2022), digital twin CPAT terdiri atas tiga sumbu: (i) **mechanical transfer axis**, (ii) **control & PLC**, dan (iii) **5G wireless communication**. AAS bertindak sebagai *semantic mediator* yang menerjemahkan variabel fisik (posisi, kecepatan, torsi) ke representasi interoperable sesuai RAMI 4.0.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Pabrik Otomotif dengan 5G Private Network

**Parameter Input:**
- Bandwidth kanal 5G: $B = 100$ MHz (FR1, n78)
- SNR rata-rata: $S/N = 20$ dB $= 100$ (linear)
- Panjang frame: 4 OFDM symbol $\rightarrow$ mini-slot
- Jumlah aset 5G: 12 gNodeB, 48 AAS endpoint
- Tag PLC per AAS: 150 properties
- Sample rate: $f_s = 1$ kHz (1000 update/detik per property)

**Langkah 1 — Kapasitas Kanal Maksimum:**

$$C = 100 \times 10^6 \cdot \log_2(1 + 100) = 10^8 \cdot \log_2(101)$$

$$C \approx 10^8 \cdot 6,6582 \approx 665{,}82 \text{ Mbit/s}$$

**Langkah 2 — Throughput Efektif dengan Coding Rate & BLER:**

Untuk URLLC, *coding rate* rendah $R_c = 0,3$, target $BLER = 10^{-5}$:

$$R_{eff} = C \cdot R_c \cdot (1 - BLER) = 665{,}82 \cdot 0{,}3 \cdot (1 - 10^{-5})$$

$$R_{eff} \approx 199{,}74 \text{ Mbit/s per sel}$$

**Langkah 3 — Total Bandwidth Kebutuhan AAS Sync:**

Total property yang harus disinkronkan:
$$N_{prop} = 48 \text{ AAS} \times 150 \text{ prop} =