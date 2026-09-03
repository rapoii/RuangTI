# 2194 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dalam Rekayasa Sistem Industri Cyber-Physical

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi Industri 4.0 telah memaksa pelaku manufaktur global untuk mengintegrasikan aset fisik dengan representasi digitalnya secara real-time. Dalam konteks ini, *Asset Administration Shell* (AAS) muncul sebagai tulang punggung interoperabilitas yang distandarisasi oleh *Plattform Industrie 4.0* dan diformalkan melalui dokumen spesifikasi IEC PAS 63278. Cavalieri, Di Natale, dan Gambadoro (2024) menyoroti bahwa salah satu celah riset terbesar adalah ketiadaan arsitektur digital twin yang secara native merepresentasikan **infrastruktur komunikasi 5G** — yang kini menjadi enabler utama dari *cyber-physical production systems* (CPPS). Padahal, *slicing* 5G dengan parameter *ultra-reliable low-latency communication* (URLLC) menuntut determinisme temporal di bawah 1 ms pada lapisan *edge*, sesuatu yang tidak dapat ditangkap oleh skema digital twin konvensional berbasis MQTT publish-subscribe.

Urgensi ekonominya sangat nyata: studi Markets and Markets (2023) memproyeksikan belanja industrial 5G mencapai USD 35.5 miliar pada 2030, sementara biaya *downtime* lini perakitan otomatis di sektor otomotif rata-rata menyentuh USD 22.000 per menit. Tanpa AAS yang merepresentasikan *Quality of Service* (QoS) *slice* 5G sebagai submodel terstruktur, operator tidak memiliki kemampuan *closed-loop optimization* antara kebutuhan latansi aplikasi kontrol (Cavalieri et al., 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) dengan parameter *resource block* radio. Lebih jauh, paper De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa pada *assembly transfer system* cyber-fisik, propagasi *jitter* jaringan > 5 ms sudah cukup untuk menurunkan *OEE* (Overall Equipment Effectiveness) sebesar 7–11% pada jalur *pick-and-place* berkecepatan 2 m/s. Kedua paper ini membangun argumen bahwa digital twin tidak cukup hanya memodelkan *state* fisik mesin, melainkan harus menyerap *telemetry* dari *Radio Access Network* (RAN) dan *core* 5G secara *semantically interoperable* — dan di sinilah AAS berperan sebagai *lingua franca*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metamodel Asset Administration Shell

AAS dimodelkan sebagai *typed object graph* yang terdiri dari *Submodels*, *SubmodelElements*, dan *References*. Secara matematis, struktur AAS untuk aset 5G dapat ditulis:

$$M_{AAS} = \bigcup_{i=1}^{n} S_i \cup \bigcup_{j=1}^{m} R_j, \quad S_i \cap R_j = \emptyset$$

di mana $S_i$ adalah himpunan *Submodel* (misalnya `CommunicationSliceSubmodel`, `RANPerformanceSubmodel`) dan $R_j$ adalah himpunan *Reference* antar-elemen. Setiap *Property* $p$ dalam submodel mengikuti *value-only* serialization:

$$p = \langle idShort, semanticId, valueType, value(t) \rangle$$

dengan $value(t)$ adalah fungsi waktu yang mengikat data fisik ke representasi virtual.

### 2.2 Model Sinkronisasi Digital Twin — 5G

Deviasi antara entitas fisik ($X_p$) dan virtual ($X_v$) didefinisikan sebagai *coherence error*:

$$\delta(t) = \| X_p(t) - X_v(t) \|_2 = \sqrt{\sum_{k=1}^{K} \left( x_{p,k}(t) - x_{v,k}(t) \right)^2}$$

Untuk menjamin determinisme, batas atas $\delta(t)$ harus memenuhi *stability constraint* $\delta(t) \le \delta_{max}$ selama horizon $[0, T]$.

### 2.3 Latensi End-to-End 5G URLLC

Total latansi *one-way* pada slice URLLC dimodelkan Cavalieri et al. (2024) sebagai:

$$L_{total} = L_{TX} + L_{prop} + L_{queue} + L_{proc} + L_{HARQ}$$

dengan parameter tipikal pada frekuensi 3.5 GHz, *subcarrier spacing* 30 kHz: $L_{TX} = 0.107\,\text{ms}$ (1 OFDM symbol), $L_{prop} \approx 0.005\,\text{ms}$ (jarak 1.5 km), $L_{proc} = 0.297\,\text{ms}$ (minimum dengan *low-latency scheduling*), $L_{HARQ} \approx 0.5$–$1$ ms. Agregat pada slot mini 2-OFDM: $L_{total} \approx 1$ ms — sesuai target URLLC.

### 2.4 Throughput Slice per User

$$R_{user} = \frac{B_{slice} \cdot \log_2(1 + \text{SINR})}{N_{users}}, \quad \text{SINR} = \frac{P_{tx} \cdot G_{path}}{N_0 \cdot B_{slice} + I_{inter}}$$

### 2.5 Model Transfer Assembly Line (De Marchi et al., 2022)

Untuk *assembly transfer system* cyber-fisik, posisi *carrier* ke-$i$ mengikuti:

$$x_i(t) = x_{i,0} + v_i \cdot t + \frac{1}{2} a_i t^2, \quad v_i = \frac{d}{T_{cycle} - T_{transfer}}$$

dengan $d$ jarak antar-stasiun dan $T_{transfer}$ adalah window perpindahan. *Jitter* jaringan $\sigma_j$ menghasilkan error posisi:

$$\epsilon_x = v_i \cdot \sigma_j, \quad \sigma_j \le \frac{\epsilon_{max}}{v_i}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi mengikuti kerangka *Reference Architectural Model Industrie 4.0* (RAMI 4.0) yang diadaptasi oleh Cavalieri et al. (2024). SOP enam tahapan:

**Tahap 1 — Identifikasi Aset 5G.** Lakukan inventarisasi elemen RAN (*gNB*, *RU*, *CU*), *core* (AMF, SMF, UPF), dan *edge MEC*. Setiap elemen diberi *Identification* AAS berupa *IRDI* (International Registration Data Identifier).

**Tahap 2 — Pemetaan Submodel.** Definisikan minimal empat *Submodel Template*: (i) `Nameplate` (identitas aset), (ii) `CommunicationSlice` (SST, *latency budget*, *reliability target*), (iii) `RANKPIs` (RRC success rate, handover failure), dan (iv) `DigitalTwinSync` (coherence error $\delta(t)$). Pemetaan mengikuti *AAS Submodel Template Registry*.

**Tahap 3 — Deployment BaSyx Middleware.** Instal *BaSyx AAS Server* (komponen *off-the-shelf* dari Eclipse) pada *edge node* untuk hosting AAS, dan *BaSyx Registry* untuk discoverability. Gunakan protokol HTTPS/REST atau OPC UA Pub/Sub untuk transport.

**Tahap 4 — Instrumentasi Telemetri 5G.** Konfigurasi *O-RAN E2 interface* agar *near-RT RIC* mengirim *KPM* (Key Performance Measurement) setiap 10 ms ke *property* AAS menggunakan *AAS RPC*. Amati persamaan:

$$f_{sample} \ge \frac{v_{max}}{2 \cdot \epsilon_{max}} \quad \text{(Nyquist posisi)}$$

**Tahap 5 — Binding ke CPS.** Integrasikan AAS dengan PLC melalui *Asset Interface* (De Marchi et al., 2022). Event `OperationStarted` *property* memicu *callback* ke kontroler untuk *closed-loop* tuning parameter *modulation and coding scheme* (MCS).

**Tahap 6 — Validasi & Continuous Monitoring.** Hitung *coherence error* $\delta(t)$ dan bandingkan dengan $\delta_{max}$. Lakukan *root cause analysis* bila pelanggaran terdeteksi.

```
┌──────────────┐     E2/KPM      ┌──────────────┐     HTTP/MQTT    ┌──────────────┐
│  Physical 5G │ ──────────────▶ │  near-RT RIC │ ───────────────▶ │  BaSyx AAS   │
│   (gNB/UPF)  │                 │   (xApp)     │                  │   Server     │
└──────────────┘                 └──────────────┘                  └──────┬───────┘
                                                                           │ AAS API
                                                                           ▼
                                                                    ┌──────────────┐
                                                                    │  Digital     │
                                                                    │  Twin Engine │
                                                                    └──────┬───────┘
                                                                           │
                                                                           ▼
                                                                    ┌──────────────┐
                                                                    │  CPS / PLC   │
                                                                    │ (Assembly)   │
                                                                    └──────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Lini *assembly transfer* untuk modul baterai EV dengan 8 stasiun, panjang 24 m, kecepatan carrier $v = 2$ m/s. Jaringan privat 5G slice URLLC di band n78 (3.5 GHz), bandwidth $B = 100$ MHz, TX power 23 dBm.

**Langkah 1 — Hitung error posisi akibat jitter.**
Tetapkan toleransi posisi $\epsilon_{max} = 1$ mm (untuk *pick-and-place* presisi). Kecepatan $v = 2$ m/s = 2000 mm/s. Maka jitter jaringan maksimum:

$$\sigma_j \le \frac{\epsilon_{max}}{v} = \frac{1\,\text{mm}}{2000\,\text{mm/s}} = 0.0005\,\text{s} = 500\,\mu\text{s}$$

**Langkah 2 — Validasi terhadap URLLC.**
$L_{total}$ hasil kalkulasi: $L_{TX