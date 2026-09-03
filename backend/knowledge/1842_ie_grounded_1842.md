# 1842 — *Asset Administration Shell* (AAS) sebagai Arsitektur Digital Twin untuk Sistem Komunikasi 5G Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 menuntut interoperabilitas semantik lintas *stakeholder* pada rantai nilai manufaktur. Untuk menjawab tantangan tersebut, *Plattform Industrie 4.0* dan *International Electrotechnical Commission* (IEC) mengstandardisasi **Asset Administration Shell (AAS)** sebagai implementasi referensi dari *Reference Architecture Model Industry 4.0* (RAMI 4.0), kini dimuat dalam IEC 63278 dan IEC PAS 63088 (Cavalieri, Di Natale & Gambadoro, 2024). Berbeda dengan protokol komunikasi klasik seperti *OPC UA*, MQTT, atau REST yang hanya menyediakan konektivitas data, AAS menambahkan **lapisan semantik** melalui *submodels* yang dapat dibaca mesin, sehingga setiap aset fisik — termasuk node radio 5G, *programmable logic controller* (PLC), dan *autonomous guided vehicle* (AGV) — memiliki representasi digital yang *machine-interpretable*.

Urgensi integrasi AAS dengan infrastruktur 5G muncul karena tiga tekanan simultan. Pertama, otomasi pabrik memerlukan **Ultra-Reliable Low-Latency Communication** (URLLC) dengan latensi satu arah $\leq 1$ ms dan keandalan packet $99{,}999\%$ (3GPP TS 22.261). Kedua, meningkatnya *data gravity* dari sensor vision, LiDAR, dan *time-series* PLC membutuhkan kapasitas *enhanced Mobile Broadband* (eMBB) yang hanya dapat dipenuhi oleh jaringan 5G *New Radio* (NR) dengan lebar pita hingga 400 MHz pada *band* FR1 atau bahkan FR2 *millimeter-wave*. Ketiga, strategi *network slicing* 5G memungkinkan isolasi deterministik untuk lalu lintas mission-critical, sehingga memunculkan kebutuhan akan *digital twin* jaringan komunikasi itu sendiri — bukan sekadar aset yang terhubung ke jaringan, melainkan jaringan sebagai aset yang memiliki *shell* dan *submodel*.

Kontribusi Cavalieri et al. (2024) — yang menjadi literatur utama modul ini — memformulasi arsitektur AAS yang secara khusus ditujukan pada elemen jaringan 5G NR, dengan *submodels* untuk parameter radio (RSRP, RSRQ, SINR), status *hand-over*, kualitas *slice*, dan metrik *Key Performance Indicator* (KPI) jaringan. Pendekatan ini melengkapi karya De Marchi, Rojas & Mark (2022) yang lebih dulu membangun arsitektur *digital twin* untuk *cyber-physical assembly transfer system*, di mana sinkronisasi status lini perakitan memerlukan *throughput* deterministik dan *latency budget* yang hanya bisa dipenuhi melalui komunikasi nirkabel generasi kelima. Kedua literatur ini bersama-sama menegakkan tesis bahwa **digital twin bukan lagi kemewahan arsitektural, melainkan keharusan operasional** untuk mencapai *zero-downtime*, *predictive maintenance*, dan *closed-loop control* di lantai pabrik modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel AAS sebagai Graf Berarah

AAS dimodelkan sebagai grafik berarah $\mathcal{G}_{AAS} = (\mathcal{V}, \mathcal{E})$ di mana setiap *vertex* $v_i \in \mathcal{V}$ merepresentasikan satu *Submodel Element* (SE) dan *edge* $e_{ij} \in \mathcal{E}$ merepresentasikan relasi semantik (*qualified name*, *semantic ID*). Untuk sebuah *base element* AAS yang merepresentasikan *gNodeB* 5G, himpunan *submodels* yang relevan menurut Cavalieri et al. (2024) adalah:

$$
\mathcal{S}_{gNB} = \{S_{Nameplate}, S_{Identification}, S_{Communication}, S_{RadioTech}, S_{Slicing}, S_{Diagnostics}\}
$$

dengan $|\mathcal{S}_{gNB}| = 6$ sebagai *cardinality* minimum yang direkomendasikan.

### 2.2 Persamaan State-Synchronization Digital Twin

Tingkat sinkronisasi antara *physical twin* $x_p(t)$ dan *digital twin* $x_d(t)$ didefinisikan melalui *root-mean-square error* (RMSE) status:

$$
\varepsilon(t) = \sqrt{\frac{1}{N}\sum_{k=1}^{N}\bigl(x_p^{(k)}(t) - x_d^{(k)}(t)\bigr)^2}
$$

Tujuan kontrol kualitas sambungan 5G adalah mempertahankan $\varepsilon(t) \leq \varepsilon_{max}$ selama *mission time* $T_m$. Untuk menjamin hal ini, *round-trip time* komunikasi harus memenuhi:

$$
\tau_{RTT} \leq \tau_{budget} = \frac{\varepsilon_{max}}{\dot{x}_{p,\max}} \cdot \alpha
$$

dengan $\dot{x}_{p,\max}$ adalah *state-change rate* maksimum aset dan $\alpha \in (0,1)$ adalah faktor konservatif. Pada AGV dengan $\dot{x}_{p,\max} = 2\text{ m/s}$ dan $\varepsilon_{max} = 5\text{ mm}$, maka $\tau_{budget} \approx 2{,}5\text{ ms}$, konsisten dengan target URLLC 5G.

### 2.3 Throughput dan Shannon Capacity untuk eMBB

Kapasitas *channel* 5G NR menurut *Shannon-Hartley theorem*:

$$
C = B \cdot \log_2\!\left(1 + \frac{S}{N + I}\right) \quad [\text{bit/s}]
$$

Untuk *bandwidth* $B = 100$ MHz dan *Signal-to-Interference-plus-Noise Ratio* $\frac{S}{N+I} = 12$ dB $\approx 15{,}85$, kapasitas teoritis:

$$
C = 100 \times 10^6 \cdot \log_2(1 + 15{,}85) = 100 \times 10^6 \cdot 4{,}02 \approx 402\text{ Mbps}
$$

### 2.4 Reliability Model untuk URLLC

Probabilitas keberhasilan transmisi dalam jendela latensi $L_{max}$ mengikuti distribusi *Extreme Value* pada kanal *block fading*:

$$
P_{succ}(L_{max}) = \exp\!\left(-\frac{\lambda}{R_s \cdot (1 - e^{-L_{max}/\tau_c})}\right)
$$

dengan $\lambda$ adalah *arrival rate* paket, $R_s$ *service rate*, dan $\tau_c$ *coherence time* kanal. Untuk aplikasi *closed-loop motion control* dengan $P_{succ} = 1 - 10^{-5}$ dan $\tau_c = 10$ ms, batas $L_{max}$ sekitar 1 ms sesuai target URLLC (3GPP TR 38.824).

---

## 3. Metodologi Rekayasa & SOP Implementasi AAS–5G

Cavalieri et al. (2024) merumuskan prosedur rekayasa 7-langkah untuk mendeploy *digital twin* AAS pada elemen jaringan 5G. Prosedur ini selaras dengan SOP IEC 63278-3 dan diadaptasi sebagai berikut:

**Langkah 1 — Identifikasi Aset & Penyiapan *Identifier*.** Tetapkan *globally unique identifier* sesuai *IRDI* (International Registration Data Identifier) atau *URI* AAS. Untuk elemen 5G, gunakan pola `{vendor}.{product}.{serial}.{component}`.

**Langkah 2 — Pemetaan *Submodel Templates* (SMT).** Pilih SMT yang sesuai dari repositori resmi *Plattform Industrie 4.0*: *Nameplate*, *Identification*, *Communication*, *Capability*, *Radio Technology*, *Slicing Information*.

**Langkah 3 — Pembuatan *Submodel Instance*.** Lakukan *binding* antara setiap *property* SMT dengan *data source* aktual di *gNodeB* melalui *northbound interface* (misalnya O1 atau M-plane ETSI MEC). Contoh *property*:

| Submodel | Property | Tipe Data | Sumber Data |
|----------|----------|-----------|-------------|
| RadioTech | `RSRP_dBm` | `xs:float` | PHY layer counter |
| RadioTech | `SINR_dB` | `xs:float` | PHY layer counter |
| Slicing | `SliceID` | `xs:string` | 3GPP TS 28.530 |
| Slicing | `GuaranteedBitrate_kbps` | `xs:long` | SMF/OAM |
| Diagnostics | `PacketLossRate` | `xs:double` | PM counters |

**Langkah 4 — Serialisasi & Pengemasan.** Ekspor AAS dalam format *AASX* (berbasis OPC UA Binary) atau *JSON-AAS* sesuai IEC 63278-2, lalu *sign* dengan sertifikat X.509 untuk integritas.

**Langkah 5 — *Registration* ke *AAS Registry*.** Daftarkan AAS pada *repository* sesuai *BaSyx* reference architecture, lengkap dengan *endpoint URL* *submodel repository* (HTTP/REST atau OPC UA).

**Langkah 6 — Konfigurasi *Network Slice* 5G.** Definisikan *slice profile* dengan *Slice Service Type* (SST) = 1 untuk *eMBB* atau SST = 2 untuk *URLLC*, serta parameter *Session and Service Continuity* (SSC) dan *Network Slice Selection Assistance Information* (NSSAI).

**Langkah 7 — Validasi *Closed-Loop* dan *Continuous Synchronization*.** Uji *twin-to-twin* sinkronisasi dengan *ping* deterministik, ukur $\varepsilon(t)$ dan validasi terhadap $\tau_{RTT} \leq \tau_{budget}$.

Diagram alir berikut merangkum SOP di atas:

```
[Start] → Identifikasi Aset → Pilih SMT → Bind ke Data Source
        → Serialisasi AASX/JSON → Register ke BaSyx
        → Konfigurasi Slice 5G → Uji Latency/Reliability
        → [ε(t) ≤ ε_max?] → (Tidak) → Tuning → Uji ulang
        → (Ya) → [Operasional]
```

---

## 4. Studi Kasus Kuantitatif: *Smart Factory* dengan 20 AGV dan 5G Private Network

Sebuah lini perakitan otomatis memiliki $N_{AGV}=20$ *Automated Guided Vehicle* yang dikendalikan oleh *fleet manager* melalui *private 5G* (n78 band, 3,5 GHz, lebar pita $B=100$ MHz). Setiap AGV mengirim *telemetry* (posisi, kecepatan, status baterai) dan menerima *command* setiap $T_s = 50$ ms.

**Parameter industri:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Payload telemetry per AGV | 256 | byte |
| Payload command per AGV | 64 | byte |
| Interval sampling $T_s$ | 50 | ms |
| Jumlah AGV simultan $N$ | 20 | unit |
| SINR rata-rata | 12 | dB |
| Bandwidth total $B$ | 100 | MHz |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
