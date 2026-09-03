# 2994 — Digital Twin Berbasis Asset Administration Shell untuk Sistem Komunikasi 5G dan Sistem Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Asset Administration Shell (AAS) sebagai Kerangka Digital Twin untuk Sistem Komunikasi 5G dan Sistem Pemindahan Perakitan Siber-Fisik
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Asset Administration Shell Digital Twin of 5G Communication System*. Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics (ICINCO 2024). DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Digital Twin Architecture of a Cyber-physical Assembly Transfer System*. Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics (IN4PL 2022). DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur memasuki fase krusial yang ditandai dengan konvergensi tiga pilar teknologi: *cyber-physical systems* (CPS), jaringan komunikasi generasi kelima (5G), dan *digital twin* (DT). Dalam konteks Reference Architecture Model Industry 4.0 (RAMI 4.0) yang dikembangkan oleh Plattform Industrie 4.0, **Asset Administration Shell (AAS)** muncul sebagai standardisasi formal untuk merepresentasikan aset industri secara digital di sepanjang siklus hidupnya (Cavalieri, Di Natale, & Gambadoro, 2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)). Berbeda dari pendekatan DT konvensional yang cenderung *ad-hoc*, AAS menyediakan struktur submodel yang deterministik dan interoperabel, sehingga memungkinkan integrasi vertikal-horizontal antara *operational technology* (OT) dan *information technology* (IT).

Urgensi topik ini nyata di lantai pabrik: studi-studi empiris terbaru menunjukkan bahwa latency komunikasi dalam jaringan industri Legacy (misal: PROFINET, EtherCAT) mencapai 1–10 ms pada kondisi terbaik, namun *jitter* dan *packet loss* menjadi bottleneck ketika sistem perakitan *multi-station* dengan banyak *sensor-actuator* harus diorkestrasi secara real-time. Jaringan 5G *private network*—terutama yang menggunakan *network slicing* dengan profile URLLC (*Ultra-Reliable Low-Latency Communication*)—menawarkan latensi *user-plane* di bawah 1 ms dan reliabilitas 99,999%, parameter yang secara matematis memungkinkan pengendalian loop tertutup dengan periode sampling hingga 500 µs. Namun, kompleksitas pengelolaan *slice*, *radio resource*, dan *Quality of Service* (QoS) menuntut representasi digital yang *machine-readable* dan *semantically interoperable* (Cavalieri et al., 2024).

Di sisi生产线 (lintasan produksi), De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) menunjukkan bahwa arsitektur DT untuk sistem pemindahan (*transfer system*) CPS harus memodelkan tiga entitas dominan: (a) unit fisik (*physical asset*), (b) pengendali siber-fisik, dan (c) representasi virtual yang sinkron. Kontribusi penting mereka adalah dekomposisi modular yang menjadi jembatan antara *event-driven* control loops dan *time-driven* simulation loops.

Konteks ekonomi memperkuat urgensi ini. Forum Ekonomi Dunia (WEF) melaporkan bahwa digitalisasi pabrik dengan standar terbuka seperti AAS mampu menurunkan *time-to-market* hingga 30% dan biaya integrasi sistem hingga 50%. Namun, tanpa *governance* yang jelas, interoperabilitas DT antar-vendor akan menghasilkan *vendor lock-in* yang justru meningkatkan *Total Cost of Ownership* (TCO) dalam jangka panjang. Oleh karena itu, paper Cavalieri et al. (2024) menjawab kebutuhan akan standardisasi DT untuk infrastruktur komunikasi, sementara paper De Marchi et al. (2022) menjawab kebutuhan akan arsitektur DT untuk lini produksi fisik—keduanya merupakan *building blocks* penting untuk implementasi *smart factory* yang utuh.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Asset Administration Shell (AAS)

AAS adalah struktur data berbasis standar IEC 63278 dan ISO 23247 yang merepresentasikan sebuah aset industri melalui koleksi *property*, *operation*, *event*, dan *capability*. Secara matematis, AAS dapat diformulasikan sebagai tupel:

$$AAS_i = \langle Id, Submodels, Views, CD \rangle$$

di mana $Id$ adalah identifikasi global (berbasis IRDI / URI), $Submodels = \{SM_1, SM_2, ..., SM_n\}$ adalah himpunan submodel, $Views$ adalah proyeksi untuk berbagai *role*, dan $CD$ (*Concept Description*) adalah kamus semantik berbasis *reference* (misalnya: VDI 2206, IEC 61360).

Untuk sistem komunikasi 5G, Cavalieri et al. (2024) mendefinisikan submodel khusus yang merepresentasikan:

- **NetworkSlice Submodel**: memuat parameter $S = \{s_{latency}, s_{throughput}, s_{reliability}, s_{coverage}\}$.
- **RadioResource Submodel**: memuat *numerical* state seperti RSRP, SINR, dan bandwidth allocation.
- **Topology Submodel**: memuat graf konektivitas $\mathcal{G} = (V, E)$ dengan $|V| = N_{gNB}$ node *gNB* dan $|E|$ edge *Xn-link*.

### 2.2 Model Kualitas Jaringan 5G

Latensi total pada satu link *user-plane* 5G NR dapat dimodelkan sebagai:

$$L_{total} = L_{proc} + L_{queue} + L_{TX} + L_{prop}$$

dengan:
- $L_{proc}$: latensi pemrosesan *frame* di *gNB* dan *UE*, tipikal 0,5 ms untuk subcarrier spacing 30 kHz.
- $L_{queue}$: latensi antrian, mengikuti distribusi M/M/1: $L_{queue} = \frac{\rho}{\mu(1-\rho)}$, di mana $\mu$ adalah *service rate* dan $\rho = \lambda/\mu$ adalah utilisasi.
- $L_{TX}$: latensi transmisi udara, $L_{TX} = \frac{N_{sym}}{f_{sub}} \cdot T_{slot}$.
- $L_{prop}$: latensi propagasi, $L_{prop} = d/c$ dengan $d$ jarak dan $c$ kecepatan cahaya.

Untuk *network slicing* URLLC dengan target reliabilitas $R = 1 - 10^{-5}$:

$$P_{BLER} \leq 10^{-5} \Rightarrow SNR_{required} \geq f(BLER, MCS, N_{RB})$$

di mana kebutuhan SNR diturunkan dari *block error rate* target dan *Modulation and Coding Scheme* (MCS) yang digunakan.

### 2.3 Model Digital Twin untuk CPS Assembly

Mengikuti De Marchi et al. (2022), sistem pemindahan CPS dapat diformulasikan sebagai sistem hibrida waktu-diskrit dan kejadian-diskrit. Status fisik pada waktu $t$:

$$x_{phy}(t) = \left[ p(t), v(t), \theta(t), T(t) \right]^T$$

dengan $p(t)$ posisi, $v(t)$ kecepatan, $\theta(t)$ orientasi, dan $T(t)$ suhu. Status virtual DT:

$$x_{virt}(t) = \hat{f}(x_{phy}(t - \Delta t), u(t - \Delta t))$$

di mana $\hat{f}$ adalah model dinamika yang di-*deploy* di *edge cloud*. *Sync error* antara keduanya:

$$e_{sync}(t) = \| x_{phy}(t) - x_{virt}(t) \|_2 = \sqrt{\sum_{i=1}^{n} (x_{phy,i}(t) - x_{virt,i}(t))^2}$$

Untuk estimator berbasis *Kalman Filter*, *update* dilakukan melalui:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

dengan *gain* Kalman:

$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$$

### 2.4 Model Kinerja Lini Perakitan

Untuk menilai dampak integrasi DT terhadap lini perakitan, kita gunakan metrik OEE (*Overall Equipment Effectiveness*):

$$OEE = A \times P \times Q$$

dengan:
- $A = \frac{T_{run}}{T_{planned}}$: availabilitas.
- $P = \frac{T_{ideal}}{T_{run}}$: performa (rasio *ideal cycle time* terhadap *actual run time*).
- $Q = \frac{N_{good}}{N_{total}}$: kualitas (rasio produk baik terhadap total produksi).

---

## 3. Metodologi Rekayasa & SOP Implementasi

### 3.1 Tahapan Implementasi AAS Digital Twin untuk Sistem 5G (berdasarkan Cavalieri et al., 2024)

**Tahap 1 – Identifikasi Aset dan Pemetaan Submodel**
Lakukan inventarisasi aset komunikasi (gNB, MEC server, switch industri). Setiap aset harus memiliki *globally unique identifier*. Submodel yang wajib dibangun minimal:

```
[Identification Submodel]    → Nameplate, Manufacturer, Serial
[Capability Submodel]       → SupportedBands, MaxThroughput, SlicingSupport  
[OperationalState Submodel] → RSRP[dBm], SINR[dB], ActiveUEs, SliceLoad[%]
[Topology Submodel]         → AdjacencyMatrix, LatencyMatrix
```

**Tahap 2 – Akuisisi Data via OPC UA Pub/Sub atau AAS REST API**
Data dari *gNB* diekspos melalui *service* AAS sesuai spesifikasi "AAS Part 2 - API". Frekuensi sampling yang direkomendasikan: 100 ms untuk *telemetry*, 10 ms untuk *control-relevant* data.

**Tahap 3 – Pembangunan Registry AAS**
Gunakan *AAS Repository* (misalnya BaSyx, Eclipse Ditto) untuk menyimpan seluruh submodel. Registrasi mengikuti pola: `aas://<server>/<aas-id>/<submodel-id>`.

**Tahap 4 – Integrasi dengan Sistem Perakitan CPS**
Submodel AAS untuk jaringan 5G di-*subscribe* oleh *PLC* atau *edge controller* lini perakitan. Keputusan *handover* atau *slice reconfiguration* diambil berdasarkan *threshold* yang didefinisikan dalam submodel *Capability*.

**Tahap 5 – Validasi dan Continuous Monitoring**
Validasi dilakukan dengan membandingkan *predictive state* DT dengan hasil *probing* fisik, menggunakan metrik $e_{sync}$ yang harus dipertahankan di bawah 5% dari rentang dinamika sistem.

### 3.2 Diagram Alir SOP untuk Perakitan Siber-Fisik (diadaptasi dari De Marchi et al., 2022)

```
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ Physical Asset   │ ───► │ Sensor Layer     │ ───► │ Edge Gateway     │
│ (Conveyor/Robot) │      │ (IIoT sensors)   │      │ (MQTT/OPC UA)    │
└──────────────────┘      └──────────────────┘      └────────┬─────────┘
                                                              │
                                                              ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ Virtual DT       │ ◄─── │ State Estimator  │ ◄─── │ Data Lake        │
│ (Digital Twin)   │      │ (Kalman/EKF)     │      │ (Time-Series DB) │
└──────────────────┘      └──────────────────┘      └──────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Lini Perakitan Modul Baterai EV dengan Jaringan 5G Private

**Asumsi sistem:**
- Lini perakitan *battery module* untuk.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
