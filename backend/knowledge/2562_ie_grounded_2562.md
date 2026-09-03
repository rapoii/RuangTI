# 2562 — Digital Twin Asset Administration Shell (AAS) untuk Sistem Komunikasi 5G dan Sistem Transfer Perakitan Siber-Fisik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Asset Administration Shell Digital Twin of 5G Communication System
**Jurnal & Sitasi Utama:** Salvatore Cavalieri, Raffaele Di Natale, Salvatore Gambadoro (2024). *Proceedings of the 21st International Conference on Informatics in Control, Automation and Robotics*. DOI: [https://doi.org/10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)
**Sitasi Pendukung:** Matteo De Marchi, Rafael Rojas, Benedikt Mark (2022). *Proceedings of the 3rd International Conference on Innovative Intelligent Industrial Production and Logistics*. DOI: [https://doi.org/10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)

---

## 1. Pendahuluan dan Konteks Industri

Transformasi digital industri manufaktur menuju paradigma **Industri 4.0** mensyaratkan integrasi erat antara entitas fisik (*cyber-physical production systems*/CPPS) dan representasi virtualnya yang disebut *Digital Twin* (DT). Cavalieri, Di Natale, dan Gambadoro (2024, DOI: [10.5220/0012914200003822](https://doi.org/10.5220/0012914200003822)) menyoroti bahwa komunikasi nirkabel generasi kelima (5G) telah muncul sebagai enabler strategis untuk menghubungkan perangkat lapangan (*field devices*), pengendali PLC, dan *cloud/edge servers* dengan latensi rendah dan keandalan tinggi. Namun, interoperabilitas semantic antarsistem masih menjadi瓶颈 (bottleneck) karena proliferasi protokol propieter (OPC UA, MQTT, Profinet, Modbus) yang menghambat pertukaran data lintas-vendor.

Untuk menjawab tantangan ini, **Asset Administration Shell (AAS)** — standar yang dipromosikan oleh *Plattform Industrie 4.0* dan diformalkan dalam **IEC 63278 / DIN SPEC 91345** — menyediakan *meta-model* berorientasi-objek yang mendeskripsikan aset industri melalui *submodels*, *properties*, *operations*, dan *events* (Cavalieri dkk., 2024). Pendekatan ini memungkinkan interoperabilitas *plug-and-play* yang sebelumnya tidak mungkin tercapai. Sementara itu, De Marchi, Rojas, dan Mark (2022, DOI: [10.5220/0011589900003329](https://doi.org/10.5220/0011589900003329)) mendemonstrasikan arsitektur DT untuk *cyber-physical assembly transfer system* yang mengandalkan *linear transfer* berkecepatan tinggi, di mana sinkronisasi antara state fisik dan representasi virtual menjadi kritis untuk menjamin *zero-defect manufacturing*.

Urgensi ekonomi dari adopsi AAS-DT-5G cukup signifikan: laporan *5G-ACIA* (2023) menunjukkan bahwa penerapan 5G URLLC (*Ultra-Reliable Low Latency Communication*) di lini produksi dapat menurunkan *unplanned downtime* hingga 30% dan meningkatkan *Overall Equipment Effectiveness* (OEE) sebesar 8–12 poin persentase. Dari perspektif teknik industri, integrasi ini memungkinkan *closed-loop optimization* real-time, *predictive maintenance*, dan *lot-size-one production* yang menjadi tulang punggung manufaktur responsif (*responsive manufacturing*). Paper Cavalieri dkk. (2024) menutup kesenjangan literatur dengan mengusulkan arsitektur AAS yang secara native merepresentasikan parameter 5G (*throughput*, *latency*, *jitter*, *packet loss*) sebagai *property submodels*, sehingga DT mampu melakukan simulasi *what-if* terhadap perubahan konfigurasi jaringan. Makalah De Marchi dkk. (2022) melengkapi sisi operasional dengan menunjukkan bagaimana DT dimanfaatkan untuk mengendalikan sistem transfer perakitan melalui protokol *deterministic Ethernet* dan *time-sensitive networking* (TSN) yang interoperabel dengan jaringan 5G privat.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Meta-Model Asset Administration Shell (AAS)

AAS direpresentasikan sebagai *rooted directed acyclic graph* dengan elemen-elemen berikut (Cavalieri dkk., 2024):

$$
\text{AAS} = \langle \mathcal{I}, \mathcal{S}, \mathcal{V}, \mathcal{C} \rangle
$$

di mana $\mathcal{I}$ = *Identification* (asset ID, global unique), $\mathcal{S}$ = himpunan *Submodels* (misal `CommunicationSubmodel`, `CapabilitySubmodel`), $\mathcal{V}$ = himpunan *Variables/Properties* dengan tipe data (skalar, vektor, kurva), dan $\mathcal{C}$ = himpunan *ConceptDescriptions* berbasis *IRDI* (International Registration Data Identifier) atau `Eclass`-ontology.

### 2.2 Model Latensi End-to-End Jaringan 5G URLLC

Latensi total pada komunikasi 5G industri dapat dimodelkan sebagai:

$$
L_{\text{total}} = L_{\text{proc}} + L_{\text{queue}} + L_{\text{trans}} + L_{\text{prop}}
$$

dengan:
- $L_{\text{proc}}$ = latensi pemrosesan pada *user equipment* (UE) dan *gNodeB* $\approx 1\text{–}3$ ms
- $L_{\text{queue}}$ = latensi antrian pada *scheduling* $\approx 0{,}5\text{–}2$ ms
- $L_{\text{trans}}$ = latensi transmisi = $\dfrac{N_{\text{payload}} \cdot 8}{R_{\text{bw}}}$ (detik)
- $L_{\text{prop}}$ = latensi propagasi = $\dfrac{d}{v_{\text{prop}} \cdot n_{\text{ref}}}$ dengan $v_{\text{prop}} = 3 \times 10^8$ m/s

Untuk *mini-slot* 5G NR dengan *subcarrier spacing* (SCS) 30 kHz, durasi *slot* adalah $T_{\text{slot}} = \dfrac{1}{2^{\mu} \cdot 15\text{ kHz}}$ dengan $\mu = 1$, sehingga $T_{\text{slot}} = 0{,}5$ ms.

### 2.3 Model Sinkronisasi Digital Twin

Sinkronisasi antara state fisik $S_p(t)$ dan state digital $S_d(t)$ didefinisikan oleh error konsistensi:

$$
\varepsilon_{\text{sync}}(t) = \| S_p(t) - S_d(t) \|_2 = \sqrt{\sum_{i=1}^{n} \left( s_{p,i}(t) - s_{d,i}(t) \right)^2}
$$

Konsistensi terpenuhi jika $\varepsilon_{\text{sync}}(t) \leq \varepsilon_{\text{tol}}$ untuk seluruh $t$ dalam horizon prediksi $[t_0, t_0 + H]$.

### 2.4 Model Keandalan (Reliability) URLLC

Keandalan 5G URLLC untuk *packet size* 32 byte pada interval 1 ms dimodelkan:

$$
R(t) = e^{-\lambda t}, \quad \lambda = -\dfrac{\ln(1 - P_{\text{BER}})}{T_{\text{frame}}}
$$

dengan $P_{\text{BER}}$ = *block error rate* (target $10^{-5}$) dan $T_{\text{frame}}$ = durasi transmisi.

### 2.5 Throughput Assembly Transfer System

Untuk sistem transfer perakitan *linear* De Marchi dkk. (2022), kapasitas produksi teoritis:

$$
C_{\text{max}} = \dfrac{v_{\text{transfer}}}{L_{\text{pallet}} + L_{\text{gap}}} \cdot N_{\text{workstations}}
$$

dengan $v_{\text{transfer}}$ = kecepatan transfer (m/s), $L_{\text{pallet}}$ = panjang pallet (m), $L_{\text{gap}}$ = gap antar-pallet (m), $N_{\text{workstations}}$ = jumlah workstation paralel.

### 2.6 Mean Time To Failure (MTTF) Sistem Komunikasi

$$
\text{MTTF} = \int_{0}^{\infty} R(t)\,dt = \dfrac{1}{\lambda}
$$

dan ketersediaan *steady-state*:

$$
A = \dfrac{\text{MTTF}}{\text{MTTF} + \text{MTTR}}
$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Cavalieri dkk. (2024) dan De Marchi dkk. (2022), prosedur implementasi AAS-DT-5G mengikuti tahapan berikut:

### SOP-01: Pemodelan Aset dan Pembuatan AAS Instance

1. **Identifikasi aset** — tetapkan *global asset ID* berformat URI sesuai IEC 63278-2.
2. **Pemilihan submodel template** — unduh dari repositori *Plattform Industrie 4.0* (mis. `CommunicationSubmodel`, `Nameplate`, `CapabilityDescription`).
3. **Instansiasi AAS** — gunakan *AASX Package Explorer* atau *BaSyx SDK* untuk membuat file `.aasx`.
4. **Registrasi ke AAS Registry** — lakukan *discovery* via *AAS Discovery Service* berbasis DNS-SD atau OPC UA.

### SOP-02: Integrasi Sensor dan *Edge Computing*

1. Pasang *sensor* (vibrasi, suhu, arus, proximity) pada *field device*.
2. Konfigurasi *edge gateway* (mis. NVIDIA Jetson, Siemens RUGGEDCOM RX1400) dengan protokol OPC UA over 5G.
3. Implementasikan *data pre-processing* (filtering, downsampling) sebelum transmisi ke cloud.

### SOP-03: Konfigurasi Jaringan 5G Privat (NPN)

1. **Spectrum acquisition** — frekuensi CBRS (3,5 GHz) atau *localized spectrum* (3,7–3,8 GHz) di AS, *regional spectrum* di Eropa.
3. **Deployment mode** — pilih *SNPN (Standalone Non-Public Network)* untuk *full control* atau *PNI-NPN* untuk integrasi dengan *public network*.
4. **Network slicing** — alokasikan URLLC slice untuk kontrol kritis, *eMBB slice* untuk *video surveillance*, dan *mMTC slice* untuk ribuan sensor.

### SOP-04: Pembangunan Digital Twin

1. **DT initialization** — inisialisasi state $S_d(t_0)$ dari AAS.
2. **Real-time data ingestion** — tarik data sensor via OPC UA Pub/Sub atau MQTT-SN setiap interval $T_{\text{update}}$.
3. **State update** — terapkan filter Kalman atau *particle filter* untuk estimasi state:
$$
\hat{x}_{k|k} = \hat{x}_{k|k-1} + K